//==============================================================================
// nexacro.ExprParser — CSP-safe expr engine (AST Parser + Bytecode Compiler + runner)
//==============================================================================
(function ()
{
    if (!nexacro) {
        return;
    }

    function createAstCache(maxSize = 512)
    {
        const max = maxSize;
        const map = new Map();
        return {
            get(key)
            {
                if (!map.has(key)) 
                {
                    return undefined;
                }
                const val = map.get(key);
                map.delete(key);
                map.set(key, val);
                return val;
            },
            set(key, value)
            {
                if (map.has(key))
                {
                    map.delete(key);
                }
                else if (map.size >= max)
                {
                    map.delete(map.keys().next().value);
                }
                map.set(key, value);
            },
            clear()
            {
                map.clear();
            }
        };
    }
    const CACHE = createAstCache(512);

    function _nullFn ()
    {
        return undefined;
    };
    const _undefined_ = _nullFn();


    // --- _AstParser (internal LRU AST cache) ---
    function _AstParser(src)
    {
        this.src = src;
        this.pos = 0;
        this.len = src.length;
    }

    Object.defineProperties(_AstParser.prototype, {
        eof: {
            value ()
            {
                return this.pos >= this.len;
            }
        },
        peek: {
            value ()
            {
                return this.pos < this.len ? this.src.charAt(this.pos) : "";
            }
        }, 
        advance: {
            value (n)
            {
                n = n || 1;
                this.pos += n;
            }
        },
        skipWs: {
            value ()
            {
                while (this.pos < this.len && /\s/.test(this.src.charAt(this.pos)))
                {
                    this.pos++;
                }
            }
        },
        match: {
            value (tok)
            {
                this.skipWs();
                if (this.src.substr(this.pos, tok.length) !== tok)
                {
                    return false;
                }
                const next = this.src.charAt(this.pos + tok.length);
                const last = tok.charAt(tok.length - 1);
                if (/[a-zA-Z0-9_$]/.test(last) && /[a-zA-Z0-9_$]/.test(next))
                {
                    return false;
                }
                // single-char token must not consume prefix of a longer operator (&&, ||, <<, etc.)
                if (tok.length === 1)
                {
                    if (last === "&" && next === "&")
                    {
                        return false;
                    }
                    if (last === "|" && next === "|")
                    {
                        return false;
                    }
                    if (last === "<" && (next === "<" || next === "=" || next === ">"))
                    {
                        return false;
                    }
                    if (last === ">" && (next === ">" || next === "="))
                    {
                        return false;
                    }
                    if (last === "!" && (next === "=" || next === "!"))
                    {
                        return false;
                    }
                    if (last === "=" && next === "=")
                    {
                        return false;
                    }
                    if (last === "+" && next === "+")
                    {
                        return false;
                    }
                    if (last === "-" && next === "-")
                    {
                        return false;
                    }
                }
                this.pos += tok.length;
                return true;
            }
        },
        readNumber: {
            value ()
            {
                const start = this.pos;
                if (this.match("0x") || this.match("0X"))
                {
                    while (this.pos < this.len && /[0-9a-fA-F]/.test(this.src.charAt(this.pos))) 
                    {
                        this.pos++;
                    }
                }
                else
                {
                    while (this.pos < this.len && /[0-9.]/.test(this.src.charAt(this.pos)))
                    { 
                        this.pos++;
                    }
                    if (this.peek() === "e" || this.peek() === "E")
                    {
                        this.advance();
                        if (this.peek() === "+" || this.peek() === "-") 
                        {
                            this.advance();
                        }
                        while (this.pos < this.len && /\d/.test(this.src.charAt(this.pos))) 
                        {
                            this.pos++;
                        }
                    }
                }
                const raw = this.src.substring(start, this.pos);
                if (raw.includes(".") || /[eE]/.test(raw))
                {
                    return { type: "Literal", value: Number.parseFloat(raw), raw };
                }
                if (/^0[0-7]+$/.test(raw))
                {
                    return { type: "Literal", value: Number.parseInt(raw, 8), raw };
                }
                if (/^0[xX]/.test(raw))
                {
                    return { type: "Literal", value: Number.parseInt(raw, 16), raw };
                }
                return { type: "Literal", value: Number.parseInt(raw, 10), raw };
            }
        },
        readString: {
            value (quote)
            {
                this.advance();
                let val = "";
                let escaped = false;
                while (this.pos < this.len)
                {
                    const c = this.src.charAt(this.pos);
                    if (escaped)
                    {
                        if (c === "n") 
                        {
                            val += "\n";
                        }
                        else if (c === "r") 
                        {
                            val += "\r";
                        }
                        else if (c === "t") 
                        {
                            val += "\t";
                        }
                        else 
                        {
                            val += c;
                        }
                        escaped = false;
                    }
                    else if (c === "\\")
                    {
                        escaped = true;
                    }
                    else if (c === quote)
                    {
                        this.advance();
                        return { type: "Literal", value: val, raw: quote + val + quote };
                    }
                    else
                    {
                        val += c;
                    }
                    this.pos++;
                }
                throw new Error("unterminated string");
            }
        },
        readRegex: {
            value ()
            {
                const prev = this.pos;
                const start = this.pos;
                this.advance();
                let escaped = false;
                let inClass = false;
                while (this.pos < this.len)
                {
                    const c = this.src.charAt(this.pos);
                    if (escaped)
                    {
                        escaped = false;
                    }
                    else if (c === "\\")
                    {
                        escaped = true;
                    }
                    else if (c === "[")
                    {
                        inClass = true;
                    }
                    else if (c === "]" && inClass)
                    {
                        inClass = false;
                    }
                    else if (c === "/" && !inClass)
                    {
                        break;
                    }
                    this.pos++;
                }
                if (this.pos >= this.len)
                {
                    this.pos = prev;
                    throw new Error("unterminated regex");
                }
                const pattern = this.src.substring(start + 1, this.pos);
                this.advance();
                let flags = "";
                while (this.pos < this.len && /[gimsuy]/.test(this.src.charAt(this.pos)))
                {
                    flags += this.src.charAt(this.pos);
                    this.pos++;
                }
                return { type: "Literal", value: new RegExp(pattern, flags), regex: true };
            }
        },
        readIdent: {
            value ()
            {
                const start = this.pos;
                if (this.peek() === "$")
                {
                    this.advance();
                    while (this.pos < this.len && /\d/.test(this.src.charAt(this.pos))) 
                    {
                        this.pos++;
                    }
                    return { type: "Identifier", name: this.src.substring(start, this.pos) };
                }
                if (!/[a-zA-Z_$]/.test(this.peek()) &&
                    !/[\u0080-\uFFFF]/.test(this.peek())) 
                {
                    return null;
                }
                this.advance();
                while (this.pos < this.len)
                {
                    const c = this.src.charAt(this.pos);
                    if (/[a-zA-Z0-9_$]/.test(c) || /[\u0080-\uFFFF]/.test(c))
                    {
                        this.pos++;
                    }
                    else 
                    {
                        break;
                    }
                }
                return { type: "Identifier", name: this.src.substring(start, this.pos) };
            }
        },
        parseExpression: {
            value ()
            {
                return this.parseConditional();
            }
        },
        parseConditional: {
            value ()
            {
                const test = this.parseLogicalOr();
                this.skipWs();
                if (this.match("?"))
                {
                    const consequent = this.parseExpression();
                    if (!this.match(":")) 
                    {
                        throw new Error("expected :");
                    }
                    const alternate = this.parseConditional();
                    return { type: "ConditionalExpression", test, consequent, alternate };
                }
                return test;
            }
        },
        parseLogicalOr: {
            value ()
            {
                let left = this.parseLogicalAnd();
                while (this.match("||"))
                {
                    left = { type: "LogicalExpression", operator: "||", left, right: this.parseLogicalAnd() };
                }
                return left;
            }
        },
        parseLogicalAnd: {
            value ()
            {
                let left = this.parseBitwiseOr();
                while (this.match("&&"))
                {
                    left = { type: "LogicalExpression", operator: "&&", left, right: this.parseBitwiseOr() };
                }
                return left;
            }
        },
        parseBitwiseOr: {
            value ()
            {
                let left = this.parseBitwiseXor();
                while (this.match("|"))
                {
                    left = { type: "BinaryExpression", operator: "|", left, right: this.parseBitwiseXor() };
                }
                return left;
            }
        },
        parseBitwiseXor: {
            value ()
            {
                let left = this.parseBitwiseAnd();
                while (this.match("^"))
                {
                    left = { type: "BinaryExpression", operator: "^", left, right: this.parseBitwiseAnd() };
                }
                return left;
            }
        },
        parseBitwiseAnd: {
            value ()
            {
                let left = this.parseEquality();
                while (this.match("&"))
                {
                    left = { type: "BinaryExpression", operator: "&", left, right: this.parseEquality() };
                }
                return left;
            }
        },
        parseEquality: {
            value ()
            {
                let left = this.parseRelational();
                while (true)
                {
                    if (this.match("===")) 
                    {
                        left = { type: "BinaryExpression", operator: "===", left, right: this.parseRelational() };
                    }
                    else if (this.match("!==")) 
                    {
                        left = { type: "BinaryExpression", operator: "!==", left, right: this.parseRelational() };
                    }
                    else if (this.match("==")) 
                    {
                        left = { type: "BinaryExpression", operator: "==", left, right: this.parseRelational() };
                    }
                    else if (this.match("!=")) 
                    {
                        left = { type: "BinaryExpression", operator: "!=", left, right: this.parseRelational() };
                    }
                    else if (this.match("<>")) 
                    {
                        left = { type: "BinaryExpression", operator: "!=", left, right: this.parseRelational() };
                    }
                    else 
                    {
                        break;
                    }
                }
                return left;
            }
        },
        parseRelational: {
            value ()
            {
                let left = this.parseShift();
                while (true)
                {
                    if (this.match("<=")) 
                    {
                        left = { type: "BinaryExpression", operator: "<=", left, right: this.parseShift() };
                    }
                    else if (this.match(">=")) 
                    {
                        left = { type: "BinaryExpression", operator: ">=", left, right: this.parseShift() };
                    }
                    else if (this.match("<")) 
                    {
                        left = { type: "BinaryExpression", operator: "<", left, right: this.parseShift() };
                    }
                    else if (this.match(">")) 
                    {
                        left = { type: "BinaryExpression", operator: ">", left, right: this.parseShift() };
                    }
                    else if (this.match("in")) 
                    {
                        left = { type: "BinaryExpression", operator: "in", left, right: this.parseShift() };
                    }
                    else 
                    {
                        break;
                    }
                }
                return left;
            }
        },
        parseShift: {
            value ()
            {
                let left = this.parseAdditive();
                while (true)
                {
                    if (this.match(">>>")) 
                    {
                        left = { type: "BinaryExpression", operator: ">>>", left, right: this.parseAdditive() };
                    }
                    else if (this.match(">>")) 
                    {
                        left = { type: "BinaryExpression", operator: ">>", left, right: this.parseAdditive() };
                    }
                    else if (this.match("<<")) 
                    {
                        left = { type: "BinaryExpression", operator: "<<", left, right: this.parseAdditive() };
                    }
                    else 
                    {
                        break;
                    }
                }
                return left;
            }
        },
        parseAdditive: {
            value ()
            {
                let left = this.parseMultiplicative();
                while (true)
                {
                    if (this.match("+")) 
                    {
                        left = { type: "BinaryExpression", operator: "+", left, right: this.parseMultiplicative() };
                    }
                    else if (this.match("-")) 
                    {
                        left = { type: "BinaryExpression", operator: "-", left, right: this.parseMultiplicative() };
                    }
                    else 
                    {
                        break;
                    }
                }
                return left;
            }
        },
        parseMultiplicative: {
            value ()
            {
                let left = this.parseUnary();
                while (true)
                {
                    if (this.match("*")) 
                    {
                        left = { type: "BinaryExpression", operator: "*", left, right: this.parseUnary() };
                    }
                    else if (this.match("/")) 
                    {
                        left = { type: "BinaryExpression", operator: "/", left, right: this.parseUnary() };
                    }
                    else if (this.match("%")) 
                    {
                        left = { type: "BinaryExpression", operator: "%", left, right: this.parseUnary() };
                    }
                    else 
                    {
                        break;
                    }
                }
                return left;
            }
        },
        parseUnary: {
            value ()
            {
                this.skipWs();
                if (this.match("!!"))
                {
                    return { type: "UnaryExpression", operator: "!!", argument: this.parseUnary(), prefix: true };
                }
                if (this.match("!"))
                {
                    return { type: "UnaryExpression", operator: "!", argument: this.parseUnary(), prefix: true };
                }
                /** Assignment Expression 미지원
                if (this.match("++"))
                {
                    return { type: "UpdateExpression", operator: "++", argument: this.parseUnary(), prefix: true };
                }
                if (this.match("--"))
                {
                    return { type: "UpdateExpression", operator: "--", argument: this.parseUnary(), prefix: true };
                }
                */
                if (this.match("+"))
                {
                    return { type: "UnaryExpression", operator: "+", argument: this.parseUnary(), prefix: true };
                }
                if (this.match("-"))
                {
                    return { type: "UnaryExpression", operator: "-", argument: this.parseUnary(), prefix: true };
                }
                if (this.match("~"))
                {
                    return { type: "UnaryExpression", operator: "~", argument: this.parseUnary(), prefix: true };
                }
                if (this.match("typeof"))
                {
                    return { type: "UnaryExpression", operator: "typeof", argument: this.parseUnary(), prefix: true };
                }
                return this.parsePostfix();
            }
        },
        parsePostfix: {
            value ()
            {
                let node = this.parsePrimary();
                while (true)
                {
                    this.skipWs();
                    if (this.match("."))
                    {
                        const prop = this.readIdent();
                        if (!prop)
                        {
                            throw new Error("expected property");
                        }
                        node = { type: "MemberExpression", object: node, property: prop, computed: false };
                    }
                    else if (this.match("["))
                    {
                        const prop = this.parseExpression();
                        if (!this.match("]")) 
                        {
                            throw new Error("expected ]");
                        }
                        node = { type: "MemberExpression", object: node, property: prop, computed: true };
                    }
                    else if (this.match("("))
                    {
                        const args = this.parseArgs();
                        if (!this.match(")")) 
                        {
                            throw new Error("expected )");
                        }
                        node = { type: "CallExpression", callee: node, arguments: args };
                    }
                    /** Assignment Expression 미지원
                    else if (this.match("++"))
                    {
                        node = { type: "UpdateExpression", operator: "++", argument: node, prefix: false };
                    }
                    else if (this.match("--"))
                    {
                        node = { type: "UpdateExpression", operator: "--", argument: node, prefix: false };
                    }
                    */
                    else
                    {
                        break;
                    }
                }
                return node;
            }
        },
        parsePrimary: {
            value ()
            {
                this.skipWs();
                const c = this.peek();
                if (c === "'" || c === '"') 
                {
                    return this.readString(c);
                }
                if (c === "/")
                {
                    return this.readRegex();
                }
                if (/\d/.test(c) || (c === "." && /\d/.test(this.src.charAt(this.pos + 1))))
                {
                    return this.readNumber();
                }
                if (this.match("("))
                {
                    const inner = this.parseExpression();
                    if (!this.match(")")) 
                    {
                        throw new Error("expected )");
                    }
                    return inner;
                }
                if (this.match("["))
                {
                    const elems = this.parseArgs();
                    if (!this.match("]")) 
                    {
                        throw new Error("expected ]");
                    }
                    return { type: "ArrayExpression", elements: elems };
                }
                if (this.match("{"))
                {
                    return this.parseObjectExpression();
                }
                if (this.match("new"))
                {
                    this.skipWs();
                    const callee = this.readIdent();
                    if (!callee) 
                    {
                        throw new Error("expected constructor");
                    }   
                    this.skipWs();
                    let args = [];
                    if (this.match("("))
                    {
                        args = this.parseArgs();
                        if (!this.match(")")) 
                        {
                            throw new Error("expected )");
                        }
                    }
                    return { type: "NewExpression", callee, arguments: args };
                }
                if (this.match("this"))
                {
                    return { type: "ThisExpression" };
                }
                const id = this.readIdent();
                if (id)
                {
                    if (id.name === "true" || id.name === "false")
                    {
                        return { type: "Literal", value: id.name === "true" };
                    }
                    if (id.name === "null") 
                    {
                        return { type: "Literal", value: null };
                    }
                    if (id.name === "undefined") 
                    {
                        return { type: "Literal", isUndefined: true };
                    }
                    return id;
                }
                throw new Error("unexpected token");
            }
        },
        parseArgs: {
            value ()
            {
                const args = [];
                this.skipWs();
                if (this.match("]") || this.match(")")) 
                {
                    this.pos--;
                    return args;
                }
                while (true)
                {
                    args.push(this.parseCallArgument());
                    this.skipWs();
                    if (!this.match(",")) 
                    {
                        break;
                    }
                }
                return args;
            }
        },
        parseCallArgument: {
            value ()
            {
                const saved = this.pos;
                const params = this.parseArrowParamList();
                if (params && this.match("=>"))
                {
                    this.skipWs();
                    if (this.peek() === "{")
                    {
                        throw new Error("block arrow body is not supported");
                    }
                    const body = this.parseExpression();
                    return { type: "ArrowFunctionExpression", params, body, expression: true };
                }
                this.pos = saved;
                return this.parseExpression();
            }
        },
        parseArrowParamList: {
            value ()
            {
                let id;
                this.skipWs();
                if (this.match("("))
                {
                    const params = [];
                    this.skipWs();
                    if (this.match(")"))
                    {
                        return params;
                    }
                    while (true)
                    {
                        id = this.readIdent();
                        if (!id)
                        {
                            throw new Error("expected param");
                        }
                        params.push(id);
                        this.skipWs();
                        if (this.match(")")) 
                        {
                            return params;
                        }
                        if (!this.match(","))
                        {
                            throw new Error("expected )");
                        }
                        this.skipWs();
                    }
                }
                id = this.readIdent();
                return id ? [id] : null;
            }
        },
        parseObjectExpression: {
            value ()
            {
                const properties = [];
                this.skipWs();
                if (this.match("}"))
                {
                    return { type: "ObjectExpression", properties };
                }
                while (true)
                {
                    properties.push(this.parseObjectProperty());
                    this.skipWs();
                    if (this.match("}"))
                    {
                        break;
                    }
                    if (!this.match(","))
                    {
                        throw new Error("expected }");
                    }
                    this.skipWs();
                    if (this.match("}"))
                    {
                        break;
                    }
                }
                return { type: "ObjectExpression", properties };
            }
        },
        parseObjectProperty: {
            value ()
            {
                this.skipWs();
                if (this.match("..."))
                {
                    return {
                        type: "SpreadElement",
                        argument: this.parseExpression()
                    };
                }
                let computed = false;
                let key;
                if (this.match("["))
                {
                    key = this.parseExpression();
                    computed = true;
                    if (!this.match("]"))
                    {
                        throw new Error("expected ]");
                    }
                    this.skipWs();
                    if (!this.match(":"))
                    {
                        throw new Error("expected :");
                    }
                    return {
                        type: "Property",
                        kind: "init",
                        key,
                        value: this.parseExpression(),
                        computed,
                        shorthand: false
                    };
                }
                const c = this.peek();
                if (c === "'" || c === '"')
                {
                    key = this.readString(c);
                }
                else if (/\d/.test(c) || (c === "." && /\d/.test(this.src.charAt(this.pos + 1))))
                {
                    key = this.readNumber();
                }
                else
                {
                    const id = this.readIdent();
                    if (!id)
                    {
                        throw new Error("expected property key");
                    }
                    this.skipWs();
                    if (this.match("("))
                    {
                        const params = this.parseMethodParams();
                        this.skipWs();
                        if (!this.match("{"))
                        {
                            throw new Error("expected {");
                        }
                        const body = this.parseMethodBody();
                        return {
                            type: "Property",
                            kind: "method",
                            key: id,
                            value: {
                                type: "ArrowFunctionExpression",
                                params,
                                body,
                                expression: true
                            },
                            computed: false,
                            shorthand: false
                        };
                    }
                    if (this.match(":"))
                    {
                        return {
                            type: "Property",
                            kind: "init",
                            key: id,
                            value: this.parseExpression(),
                            computed: false,
                            shorthand: false
                        };
                    }
                    return {
                        type: "Property",
                        kind: "init",
                        key: id,
                        value: id,
                        computed: false,
                        shorthand: true
                    };
                }
                this.skipWs();
                if (!this.match(":"))
                {
                    throw new Error("expected :");
                }
                return {
                    type: "Property",
                    kind: "init",
                    key,
                    value: this.parseExpression(),
                    computed: false,
                    shorthand: false
                };
            }
        },
        parseMethodParams: {
            value ()
            {
                const params = [];
                this.skipWs();
                if (this.match(")"))
                {
                    return params;
                }
                while (true)
                {
                    const id = this.readIdent();
                    if (!id)
                    {
                        throw new Error("expected param");
                    }
                    params.push(id);
                    this.skipWs();
                    if (this.match(")"))
                    {
                        return params;
                    }
                    if (!this.match(","))
                    {
                        throw new Error("expected )");
                    }
                    this.skipWs();
                }
            }
        },
        parseMethodBody: {
            value ()
            {
                this.skipWs();
                if (!this.match("return"))
                {
                    throw new Error("method body must be a return statement");
                }
                const body = this.parseExpression();
                this.skipWs();
                this.match(";");
                this.skipWs();
                if (!this.match("}"))
                {
                    throw new Error("expected }");
                }
                return body;
            }
        }
    });

    _AstParser.parseExpression = function (exprStr, useCache)
    {
        if (exprStr == null || (exprStr + "").trim() === "") 
        {
            return null;
        }
        if (useCache === true)
        {
            const cached = CACHE.get(exprStr);
            if (cached !== undefined) 
            {
                return cached;
            }
        }

        const parser = new _AstParser(exprStr);
        let ast;
        try
        {
            ast = parser.parseExpression();
            if (!parser.eof()) 
            {
                ast = null;
            }
        }
        catch (e)
        {
            console.info("failed to parse expression:", e.message, "in", exprStr);
            ast = null;
        }

        if (useCache === true)
        {
            CACHE.set(exprStr, ast);
        }
        return ast;
    };

    _AstParser.clearCache = function ()
    {
        CACHE.clear();
    };

    // --- _ExprBinder ---   
    function _ExprBinder(target, ctxNames)
    {
        this.target = target;
        this.ctxNameEntry = ctxNames;
    }

    Object.defineProperties(_ExprBinder.prototype, {
        getColIndex: {
            value (colId)
            {
                if (!this.target?.getColIndex)
                {
                    return -1;
                }
                return this.target.getColIndex(colId);
            }
        },
        getConstColIndex: {
            value (colId)
            {
                if (!this.target?.getConstColIndex)
                {
                    return -1;
                }
                return this.target.getConstColIndex(colId);
            }
        },
        transform: {
            value (node)
            {
                if (!node?.type) 
                {
                    return node;
                }
                switch (node.type)
                {
                    case "LoadColumn":
                    case "LoadConstVar":
                    case "LoadContext":
                    case "LoadArg":
                    case "LoadThis":
                    case "CallBuiltin":
                        return node;
                    case "Identifier":
                        return this.bindIdentifier(node);
                    case "ThisExpression":
                        return { type: "LoadThis" };
                    case "Literal":
                    case "RegExpLiteral":
                        return node;
                    case "BinaryExpression":
                    case "LogicalExpression":
                        return {
                            type: node.type,
                            operator: node.operator,
                            left: this.transform(node.left),
                            right: this.transform(node.right)
                        };
                    case "UnaryExpression":
                        return {
                            type: node.type,
                            operator: node.operator,
                            argument: this.transform(node.argument),
                            prefix: node.prefix
                        };
                    /** Assignment Expression 미지원
                    case "UpdateExpression": 
                        return {
                            type: node.type,
                            operator: node.operator,
                            argument: this.transform(node.argument),
                            prefix: node.prefix
                        };
                    */
                    case "ConditionalExpression":
                        return {
                            type: node.type,
                            test: this.transform(node.test),
                            consequent: this.transform(node.consequent),
                            alternate: this.transform(node.alternate)
                        };
                    case "MemberExpression":
                        return this.bindMember(node);
                    case "CallExpression":
                        return this.bindCall(node);
                    case "NewExpression":
                        return {
                            type: node.type,
                            callee: this.transform(node.callee),
                            arguments: this.mapArgs(node.arguments)
                        };
                    case "ArrayExpression":
                        return { type: node.type, elements: this.mapArgs(node.elements) };
                    case "ObjectExpression":
                        return this.bindObject(node);
                    case "ArrowFunctionExpression":
                        return this.bindArrow(node);
                    default:
                        return node;
                }
            }
        },
        bindObject: {
            value (node)
            {
                const properties = [];
                for (let i = 0; i < node.properties.length; i++)
                {
                    const prop = node.properties[i];
                    if (prop.type === "SpreadElement")
                    {
                        properties.push({
                            type: prop.type,
                            argument: this.transform(prop.argument)
                        });
                    }
                    else
                    {
                        properties.push({
                            type: prop.type,
                            kind: prop.kind,
                            key: prop.computed ? this.transform(prop.key) : prop.key,
                            value: prop.kind === "method"
                                ? this.bindArrow(prop.value)
                                : this.transform(prop.value),
                            computed: prop.computed,
                            shorthand: prop.shorthand
                        });
                    }
                }
                return { type: "ObjectExpression", properties };
            }
        },
        bindArrow: {
            value (node)
            {
                if (!node.expression)
                {
                    return null;
                }
                const paramNames = {};
                for (let i = 0; i < node.params.length; i++)
                {
                    paramNames[node.params[i].name] = i;
                }
                const body = this.transformWithParams(node.body, paramNames);
                return {
                    type: "ArrowFunctionExpression",
                    params: node.params,
                    body,
                    expression: true,
                    paramCount: node.params.length
                };
            }
        },
        transformWithParams: {
            value (node, paramNames)
            {
                if (!node?.type)
                {
                    return node;
                }
                switch (node.type)
                {
                    case "LoadColumn":
                    case "LoadConstVar":
                    case "LoadContext":
                    case "LoadArg":
                    case "LoadThis":
                    case "LoadParam":
                    case "CallBuiltin":
                        return node;
                    case "Identifier":
                        if (paramNames.hasOwnProperty(node.name))
                        {
                            return { type: "LoadParam", index: paramNames[node.name] };
                        }
                        return this.bindIdentifier(node);
                    case "ThisExpression":
                        return { type: "LoadThis" };
                    case "Literal":
                    case "RegExpLiteral":
                        return node;
                    case "BinaryExpression":
                    case "LogicalExpression":
                        return {
                            type: node.type,
                            operator: node.operator,
                            left: this.transformWithParams(node.left, paramNames),
                            right: this.transformWithParams(node.right, paramNames)
                        };
                    case "UnaryExpression":
                        return {
                            type: node.type,
                            operator: node.operator,
                            argument: this.transformWithParams(node.argument, paramNames),
                            prefix: node.prefix
                        };
                    /** Assignment Expression 미지원
                    case "UpdateExpression":
                        return {
                            type: node.type,
                            operator: node.operator,
                            argument: this.transformWithParams(node.argument, paramNames),
                            prefix: node.prefix
                        };
                    */
                    case "ConditionalExpression":
                        return {
                            type: node.type,
                            test: this.transformWithParams(node.test, paramNames),
                            consequent: this.transformWithParams(node.consequent, paramNames),
                            alternate: this.transformWithParams(node.alternate, paramNames)
                        };
                    case "MemberExpression":
                        return {
                            type: node.type,
                            object: this.transformWithParams(node.object, paramNames),
                            property: node.computed ? this.transformWithParams(node.property, paramNames) : node.property,
                            computed: node.computed
                        };
                    case "CallExpression":
                    case "NewExpression":
                        return {
                            type: node.type,
                            callee: this.transformWithParams(node.callee, paramNames),
                            arguments: this.mapArgsWithParams(node.arguments, paramNames)
                        };
                    case "ArrayExpression":
                        return { type: node.type, elements: this.mapArgsWithParams(node.elements, paramNames) };
                    case "ObjectExpression":
                    {
                        const properties = [];
                        for (let oi = 0; oi < node.properties.length; oi++)
                        {
                            const prop = node.properties[oi];
                            if (prop.type === "SpreadElement")
                            {
                                properties.push({
                                    type: prop.type,
                                    argument: this.transformWithParams(prop.argument, paramNames)
                                });
                            }
                            else
                            {
                                properties.push({
                                    type: prop.type,
                                    kind: prop.kind,
                                    key: prop.computed
                                        ? this.transformWithParams(prop.key, paramNames)
                                        : prop.key,
                                    value: prop.kind === "method"
                                        ? this.bindArrow(prop.value)
                                        : this.transformWithParams(prop.value, paramNames),
                                    computed: prop.computed,
                                    shorthand: prop.shorthand
                                });
                            }
                        }
                        return { type: node.type, properties };
                    }
                    default:
                        return node;
                }
            }
        },
        mapArgsWithParams: {
            value (args, paramNames)
            {
                if (!args)
                {
                    return [];
                }
                const out = [];
                for (let i = 0; i < args.length; i++)
                {
                    out.push(this.transformWithParams(args[i], paramNames));
                }
                return out;
            }
        },
        mapArgs: {
            value (args)
            {
                if (!args)
                {
                    return [];
                }
                const out = [];
                for (let i = 0; i < args.length; i++)
                {
                    out.push(this.transform(args[i]));
                }
                return out;
            }
        },
        bindIdentifier: {
            value (node)
            {
                const name = node.name;
                const CONTEXT = this.ctxNameEntry || {};
                if (name === "this")
                {
                    return { type: "LoadThis" };
                }
                if (CONTEXT.hasOwnProperty(name))
                {
                    return { type: "LoadContext", slot: CONTEXT[name] };
                }
                if (name.charAt(0) === "$")
                {
                    const argno = +(name.substring(1));
                    if (argno >= 0)
                    {
                        return { type: "LoadArg", index: argno };
                    }
                }
                const colidx = this.getColIndex(name);
                if (colidx >= 0)
                {
                    const constcolidx = this.getConstColIndex(name);
                    if (constcolidx >= 0)
                    {
                        return { type: "LoadConstVar", colidx: constcolidx };
                    }
                    return { type: "LoadColumn", colidx: colidx };
                }
                return node;
            }
        },
        bindMember: {
            value (node)
            {
                return {
                    type: node.type,
                    object: this.transform(node.object),
                    property: node.computed ? this.transform(node.property) : node.property,
                    computed: node.computed
                };
            }
        },
        bindCall: {
            value (node)
            {
                if (node.callee.type === "Identifier" && node.callee.name === "TEXT")
                {
                    return {
                        type: "CallBuiltin",
                        name: "TEXT",
                        arguments: this.mapArgs(node.arguments)
                    };
                }
                return {
                    type: node.type,
                    callee: this.transform(node.callee),
                    arguments: this.mapArgs(node.arguments)
                };
            }
        }
    });

    _ExprBinder.bind = function (ast, target, ctxArgList)
    {
        if (!ast)
        {
            return null;
        }
        const ctxNameEntry = ctxArgList ? Object.fromEntries(ctxArgList.map((key, index) => [key, index])) : null;
        return (new _ExprBinder(target, ctxNameEntry)).transform(ast);
    };

    // --- _ExprOptimizer ---
    const _ExprOptimizer = {};
    
    const RUNTIME_NODES = {
        "LoadColumn": 1, "LoadConstVar": 1,
        "LoadContext": 1, "LoadArg": 1, "LoadThis": 1,
        "LoadParam": 1,
        "CallBuiltin": 1, "CallExpression": 1, "NewExpression": 1,
        /** Assignment Expression 미지원
         * "UpdateExpression": 1, "AssignmentExpression": 1,
         */
        "ArrowFunctionExpression": 1
    };

    _ExprOptimizer.optimize = function (ast)
    {
        if (!ast)
        {
            return ast;
        }
        return _ExprOptimizer._fold(ast);
    };

    _ExprOptimizer._fold = function (node)
    {
        if (!node?.type)
        {
            return node;
        }
        if (RUNTIME_NODES[node.type])
        {
            return _ExprOptimizer._mapChildren(node);
        }

        switch (node.type)
        {
            case "Literal":
                return node;
            case "Identifier":
                return node;
            case "ThisExpression":
                return node;
            case "UnaryExpression":
            {
                const arg = _ExprOptimizer._fold(node.argument);
                if (arg.type === "Literal")
                {
                    const v = _ExprOptimizer._evalUnary(node.operator, _ExprOptimizer._literalValue(arg));
                    if (v !== _ExprOptimizer._NO_FOLD)
                    {
                        return _ExprOptimizer._makeLiteral(v);
                    }
                }
                return { type: node.type, operator: node.operator, argument: arg, prefix: node.prefix };
            }
            case "BinaryExpression":
            case "LogicalExpression":
            {
                const left = _ExprOptimizer._fold(node.left);
                const right = _ExprOptimizer._fold(node.right);
                if (left.type === "Literal" && right.type === "Literal")
                {
                    const bv = _ExprOptimizer._evalBinary(node.operator,
                        _ExprOptimizer._literalValue(left),
                        _ExprOptimizer._literalValue(right));
                    if (bv !== _ExprOptimizer._NO_FOLD)
                    {
                        return _ExprOptimizer._makeLiteral(bv);
                    }
                }
                if (node.operator === "&&" && left.type === "Literal")
                {
                    return _ExprOptimizer._literalValue(left) ? right : left;
                }
                if (node.operator === "||" && left.type === "Literal")
                {
                    return _ExprOptimizer._literalValue(left) ? left : right;
                }
                return { type: node.type, operator: node.operator, left, right };
            }
            case "ConditionalExpression":
            {
                const test = _ExprOptimizer._fold(node.test);
                if (test.type === "Literal")
                {
                    return _ExprOptimizer._fold(_ExprOptimizer._literalValue(test) ? node.consequent : node.alternate);
                }
                return {
                    type: node.type,
                    test: test,
                    consequent: _ExprOptimizer._fold(node.consequent),
                    alternate: _ExprOptimizer._fold(node.alternate)
                };
            }
            case "MemberExpression":
                return {
                    type: node.type,
                    object: _ExprOptimizer._fold(node.object),
                    property: node.computed ? _ExprOptimizer._fold(node.property) : node.property,
                    computed: node.computed
                };
            case "ArrayExpression":
            {
                const elems = [];
                for (let i = 0; i < node.elements.length; i++)
                {
                    elems.push(_ExprOptimizer._fold(node.elements[i]));
                }
                return { type: node.type, elements: elems };
            }
            case "ObjectExpression":
            {
                const properties = [];
                for (let i = 0; i < node.properties.length; i++)
                {
                    const prop = node.properties[i];
                    if (prop.type === "SpreadElement")
                    {
                        properties.push({
                            type: prop.type,
                            argument: _ExprOptimizer._fold(prop.argument)
                        });
                    }
                    else
                    {
                        properties.push({
                            type: prop.type,
                            kind: prop.kind,
                            key: prop.computed ? _ExprOptimizer._fold(prop.key) : prop.key,
                            value: _ExprOptimizer._fold(prop.value),
                            computed: prop.computed,
                            shorthand: prop.shorthand
                        });
                    }
                }
                return { type: node.type, properties };
            }
            default:
                return _ExprOptimizer._mapChildren(node);        
        }
    };

    _ExprOptimizer._NO_FOLD = {};
    _ExprOptimizer._literalValue = function (node)
    {
        if (node.isUndefined || !("value" in node))
        {
            return undefined;
        }
        return node.value;
    };

    _ExprOptimizer._makeLiteral = function (value)
    {
        if (value === undefined)
        {
            return { type: "Literal", isUndefined: true };
        }
        return { type: "Literal", value: value };
    };

    _ExprOptimizer._mapChildren = function (node)
    {
        const copy = { type: node.type };
        for (const k in node)
        {
            if (node.hasOwnProperty(k) && k !== "type")
            {
                const v = node[k];
                if (Array.isArray(v))
                {
                    const arr = [];
                    for (let i = 0; i < v.length; i++)
                    {
                        const va = v[i];
                        arr.push(typeof va === "object" && va?.type ? _ExprOptimizer._fold(va) : va);
                    }
                    copy[k] = arr;
                }
                else if (v && typeof v === "object" && v.type)
                {
                    copy[k] = _ExprOptimizer._fold(v);
                }
                else
                {
                    copy[k] = v;
                }
            }
        }
        return copy;
    };

    _ExprOptimizer._evalUnary = function (op, v)
    {
        switch (op)
        {
            case "!": return !v;
            case "!!": return !!v;
            case "+": return +v;
            case "-": return -v;
            case "~": return ~v;
            case "typeof": return typeof v;
            default:  return _ExprOptimizer._NO_FOLD; 
        }
    };

    _ExprOptimizer._evalBinary = function (op, a, b)
    {
        switch (op)
        {
            case "+": return a + b;
            case "-": return a - b;
            case "*": return a * b;
            case "/": return a / b;
            case "%": return a % b;
            case "==": return a == b;
            case "!=": return a != b;
            case "===": return a === b;
            case "!==": return a !== b;
            case "<": return a < b;
            case ">": return a > b;
            case "<=": return a <= b;
            case ">=": return a >= b;
            case "&&": return a && b;
            case "||": return a || b;
            case "|": return a | b;
            case "&": return a & b;
            case "^": return a ^ b;
            case "<<": return a << b;
            case ">>": return a >> b;
            case ">>>": return a >>> b;
            case "in": return a in b;
            default:  return _ExprOptimizer._NO_FOLD; 
        }

    };

    // --- ExprBytecode ---   
    const OP = {
        LOAD_CONST: 1,
        LOAD_CTX: 2,
        LOAD_COL: 3,
        LOAD_CONSTVAR: 4,
        LOAD_ARG: 5,
        LOAD_UNDEF: 6,
        LOAD_NULL: 7,
        LOAD_THIS: 8,
        LOAD_GLOBAL: 9,
        ADD: 20, SUB: 21, MUL: 22, DIV: 23, MOD: 24,
        EQ: 25, SEQ: 26, NEQ: 27, SNEQ: 28,
        LT: 29, LE: 30, GT: 31, GE: 32,
        AND: 33, OR: 34, NOT: 35,
        BITAND: 36, BITOR: 37, BITXOR: 38,
        SHL: 39, SHR: 40, USHR: 41,
        IN: 42,
        NEG: 43, BNOT: 44, TYPEOF: 45,
        COND: 46, JMP_IF_NOT: 47, JMP_IF: 48, POP: 49,
        JMP: 100,
        GET_PROP: 50, GET_ELEM: 51,
        CALL: 52, NEW: 53,
        CALL_BUILTIN: 54,
        POS: 55,
        SCOPE: 56,
        ARRAY: 57,
        OBJECT_BEGIN: 58,
        OBJECT_DEFINE: 90,
        OBJECT_DEFINE_COMPUTED: 91,
        OBJECT_SPREAD: 92,
        /* fused hot-path super-ops */
        COL_ADD_COL: 60,
        COL_SUB_COL: 61,
        COL_MUL_COL: 62,
        COL_DIV_COL: 63,
        COL_ADD_CONST: 64,
        COL_MUL_CONST: 65,
        COL_SUB_CONST: 66,
        COL_LOAD2: 67,
        COL_ADD_MUL: 68,
        COL_EQ_CONST: 69,
        COL_NEQ_CONST: 70,
        COL_LT_CONST: 71,
        COL_LE_CONST: 72,
        COL_GT_CONST: 73,
        COL_GE_CONST: 74,
        COL_EQ_ARG: 75,
        COL_NEQ_ARG: 76,
        COL_LT_ARG: 77,
        COL_LE_ARG: 78,
        COL_GT_ARG: 79,
        COL_GE_ARG: 80,
        COL_RET: 81,
        LOAD_PARAM: 82,
        MAKE_ARROW_FN: 86,
        ARROW_RETURN: 87,
        DUP: 88,
        CALL_METHOD: 89,
        RETURN: 99
    };

    const BINOP = {
        "+": OP.ADD, "-": OP.SUB, "*": OP.MUL, "/": OP.DIV, "%": OP.MOD,
        "==": OP.EQ, "===": OP.SEQ, "!=": OP.NEQ, "!==": OP.SNEQ,
        "<": OP.LT, "<=": OP.LE, ">": OP.GT, ">=": OP.GE,
        "&&": OP.AND, "||": OP.OR,
        "|": OP.BITOR, "&": OP.BITAND, "^": OP.BITXOR,
        "<<": OP.SHL, ">>": OP.SHR, ">>>": OP.USHR,
        "in": OP.IN
    };

    const FUSE_COL_CONST_CMP = {
        [OP.EQ]: OP.COL_EQ_CONST,
        [OP.NEQ]: OP.COL_NEQ_CONST,
        [OP.LT]: OP.COL_LT_CONST,
        [OP.LE]: OP.COL_LE_CONST,
        [OP.GT]: OP.COL_GT_CONST,
        [OP.GE]: OP.COL_GE_CONST
    };

    const FUSE_COL_ARG_CMP = {
        [OP.EQ]: OP.COL_EQ_ARG,
        [OP.NEQ]: OP.COL_NEQ_ARG,
        [OP.LT]: OP.COL_LT_ARG,
        [OP.LE]: OP.COL_LE_ARG,
        [OP.GT]: OP.COL_GT_ARG,
        [OP.GE]: OP.COL_GE_ARG
    };

    /** Total byte length of one instruction starting with opcode at `op`. */
    function getInstrLen(op)
    {
        switch (op)
        {
            case OP.LOAD_CONST:
            case OP.LOAD_CTX:
            case OP.LOAD_COL:
            case OP.LOAD_CONSTVAR:
            case OP.LOAD_ARG:
            case OP.LOAD_GLOBAL:
            case OP.COL_LOAD2:
            case OP.COL_RET:
                return 2;
            case OP.COL_ADD_COL:
            case OP.COL_SUB_COL:
            case OP.COL_MUL_COL:
            case OP.COL_DIV_COL:
            case OP.COL_ADD_CONST:
            case OP.COL_MUL_CONST:
            case OP.COL_SUB_CONST:
            case OP.COL_EQ_CONST:
            case OP.COL_NEQ_CONST:
            case OP.COL_LT_CONST:
            case OP.COL_LE_CONST:
            case OP.COL_GT_CONST:
            case OP.COL_GE_CONST:
            case OP.COL_EQ_ARG:
            case OP.COL_NEQ_ARG:
            case OP.COL_LT_ARG:
            case OP.COL_LE_ARG:
            case OP.COL_GT_ARG:
            case OP.COL_GE_ARG:
                return 3;
            case OP.COL_ADD_MUL:
                return 4;
            case OP.COND:
            case OP.JMP_IF_NOT:
            case OP.JMP_IF:
            case OP.JMP:
            case OP.CALL:
            case OP.NEW:
            case OP.ARRAY:
                return 2;
            case OP.OBJECT_DEFINE:
                return 2;
            case OP.CALL_BUILTIN:
                return 3;
            case OP.LOAD_PARAM:
            case OP.MAKE_ARROW_FN:
                return 2;
            case OP.CALL_METHOD:
                return 2;
            case OP.ARROW_RETURN:
            case OP.DUP:
                return 1;
            default:
                return 1;
        }
    }

    let _opNameMap = null;
    function getOpName(op)
    {
        if (!_opNameMap)
        {
            _opNameMap = {};
            for (const k in OP)
            {
                _opNameMap[OP[k]] = k;
            }
        }
        return _opNameMap[op] || String(op);
    }

    function formatConstOperand(op, value, constants)
    {
        switch (op)
        {
            case OP.LOAD_CONST:
            case OP.COL_ADD_CONST:
            case OP.COL_MUL_CONST:
            case OP.COL_SUB_CONST:
            case OP.COL_EQ_CONST:
            case OP.COL_NEQ_CONST:
            case OP.COL_LT_CONST:
            case OP.COL_LE_CONST:
            case OP.COL_GT_CONST:
            case OP.COL_GE_CONST:
            case OP.COL_ADD_MUL:
                return `#${value}=${JSON.stringify(constants[value])}`;
            default:
                return String(value);
        }
    }

    function formatNameOperand(op, value, names)
    {
        if (op === OP.LOAD_GLOBAL || op === OP.CALL_BUILTIN)
        {
            return `#${value}=${names[value]}`;
        }
        return String(value);
    }

    // for debugging, format bytecode as a string with disassembly
    function formatBytecodeDisasm(bc)
    {
        if (!bc?.code)
        {
            return "(null bytecode)";
        }

        const constants = bc.constants || [];
        const names = bc.names || [];
        const parts = [];
        for (let i = 0; i < bc.code.length; )
        {
            const op = bc.code[i];
            const len = getInstrLen(op);
            let seg = `${i}:${getOpName(op)}`;
            for (let j = 1; j < len; j++)
            {
                const v = bc.code[i + j];
                let text;
                if (constants.length && formatConstOperand(op, v, constants) !== String(v))
                {
                    text = formatConstOperand(op, v, constants);
                }
                else if (names.length && (op === OP.LOAD_GLOBAL || op === OP.CALL_BUILTIN))
                {
                    text = formatNameOperand(op, v, names);
                }
                else
                {
                    text = String(v);
                }
                seg += `,${text}`;
            }
            parts.push(seg);
            i += len;
        }
        return parts.join(" | ");
    }

    // for debugging, summarize bound AST into a simple object tree
    function summarizeBoundAst(node, depth = 0)
    {
        if (!node)
        {
            return null;
        }
        if (depth > 5)
        {
            return { type: node.type, truncated: true };
        }
        if (!node.type)
        {
            return node;
        }

        const s = { type: node.type };
        if (node.operator != null)
        {
            s.operator = node.operator;
        }
        if (node.colidx != null)
        {
            s.colidx = node.colidx;
        }
        if (node.slot != null)
        {
            s.slot = node.slot;
        }
        if (node.index != null)
        {
            s.index = node.index;
        }
        if (node.name)
        {
            s.name = node.name;
        }
        if (node.type === "Literal")
        {
            if (node.isUndefined || !("value" in node))
            {
                s.isUndefined = true;
            }
            else
            {
                s.value = node.value;
            }
        }
        if (node.left)
        {
            s.left = summarizeBoundAst(node.left, depth + 1);
        }
        if (node.right)
        {
            s.right = summarizeBoundAst(node.right, depth + 1);
        }
        if (node.test)
        {
            s.test = summarizeBoundAst(node.test, depth + 1);
        }
        if (node.consequent)
        {
            s.consequent = summarizeBoundAst(node.consequent, depth + 1);
        }
        if (node.alternate)
        {
            s.alternate = summarizeBoundAst(node.alternate, depth + 1);
        }
        if (node.argument)
        {
            s.argument = summarizeBoundAst(node.argument, depth + 1);
        }
        if (node.object)
        {
            s.object = summarizeBoundAst(node.object, depth + 1);
        }
        if (node.property && typeof node.property === "object")
        {
            s.property = summarizeBoundAst(node.property, depth + 1);
        }
        else if (node.property)
        {
            s.property = node.property;
        }
        return s;
    }

    // --- _BytecodeCompiler ---
    function adjustJumpTargets(code, at, removed)
    {
        if (removed <= 0)
        {
            return;
        }
        for (let p = 0; p < code.length; )
        {
            const jmpOp = code[p];
            if (jmpOp === OP.COND || jmpOp === OP.JMP ||
                jmpOp === OP.JMP_IF || jmpOp === OP.JMP_IF_NOT)
            {
                const target = code[p + 1];
                if (target >= at + removed)
                {
                    code[p + 1] = target - removed;
                }
            }
            p += getInstrLen(jmpOp);
        }
    }

    function replaceRegion(code, at, oldLen, values)
    {
        const removed = oldLen - values.length;
        if (removed > 0)
        {
            adjustJumpTargets(code, at + values.length, removed);
        }
        code.splice(at, oldLen, ...values);
    }

    function propertyKeyName(key)
    {
        if (!key)
        {
            return "";
        }
        if (key.type === "Identifier")
        {
            return key.name;
        }
        if (key.type === "Literal")
        {
            return String(key.value);
        }
        return "";
    }

    function _BytecodeCompiler()
    {
        this.code = [];
        this.constants = [];
        this.names = [];
        this.arrows = [];
        this.maxStack = 0;
        this._stack = 0;
    }

    Object.defineProperties(_BytecodeCompiler.prototype, {
        emit: {
            value (op, ...args)
            {
                this.code.push(op);
                for (let i = 0; i < args.length; i++)
                {
                    this.code.push(args[i]);
                }
            }
        },
        push: {
            value ()
            {
                this._stack++;
                if (this._stack > this.maxStack)
                {
                    this.maxStack = this._stack;
                }
            }
        },
        pop: {
            value (n)
            {
                this._stack -= (n || 1);
            }
        },
        constIdx: {
            value (v)
            {
                const constants = this.constants;
                for (let i = 0, len = constants.length; i < len; i++)
                {
                    if (constants[i] === v)
                    {
                        return i;
                    }
                }
                constants.push(v);
                return this.constants.length - 1;
            }
        },
        nameIdx: {
            value (n)
            {
                const names = this.names;
                for (let i = 0, len = names.length; i < len; i++)
                {
                    if (names[i] === n)
                    {
                        return i;
                    }
                }
                names.push(n);
                return this.names.length - 1;
            }
        },
        registerArrow: {
            value (node)
            {
                const sub = new _BytecodeCompiler();
                sub.compileNode(node.body);
                sub.emit(OP.ARROW_RETURN);
                const arrowDef = {
                    code: sub.code,
                    constants: sub.constants,
                    names: sub.names,
                    maxStack: sub.maxStack,
                    paramCount: node.paramCount || node.params.length
                };
                const idx = this.arrows.length;
                this.arrows.push(arrowDef);
                return idx;
            }
        },
        compileNode: {
            value (node)
            {
                if (!node)
                {
                    this.emit(OP.LOAD_UNDEF);
                    this.push();
                    return;
                }

                switch (node.type)
                {
                    case "ConditionalExpression":
                    {
                        this.compileNode(node.test);
                        const fj = this.code.length;
                        this.emit(OP.COND, 0);
                        this.pop();
                        this.compileNode(node.consequent);
                        const ej = this.code.length;
                        this.emit(OP.JMP, 0);
                        this.pop();
                        this.code[fj + 1] = this.code.length;
                        this.compileNode(node.alternate);
                        this.code[ej + 1] = this.code.length;
                        return;
                    }
                    case "Literal":
                        if (node.isUndefined || !("value" in node))
                        {
                            this.emit(OP.LOAD_UNDEF);
                        }
                        else if (node.value === null)
                        {
                            this.emit(OP.LOAD_NULL);
                        }
                        else
                        {
                            this.emit(OP.LOAD_CONST, this.constIdx(node.value));
                        }
                        this.push();
                        return;
                    case "Identifier":
                        this.emit(OP.LOAD_GLOBAL, this.nameIdx(node.name));
                        this.push();
                        return;
                    case "LoadContext":
                        this.emit(OP.LOAD_CTX, node.slot);
                        this.push();
                        return;
                    case "LoadThis":
                        this.emit(OP.LOAD_THIS);
                        this.push();
                        return;
                    case "LoadColumn":
                        this.emit(OP.LOAD_COL, node.colidx);
                        this.push();
                        return;
                    case "LoadConstVar":
                        this.emit(OP.LOAD_CONSTVAR, node.colidx);
                        this.push();
                        return;
                    case "LoadArg":
                        this.emit(OP.LOAD_ARG, node.index);
                        this.push();
                        return;
                    case "LoadParam":
                        this.emit(OP.LOAD_PARAM, node.index);
                        this.push();
                        return;
                    case "ArrowFunctionExpression":
                    {
                        const arrowIdx = this.registerArrow(node);
                        this.emit(OP.MAKE_ARROW_FN, arrowIdx);
                        this.push();
                        return;
                    }
                    case "CallBuiltin":
                    {
                        for (let bi = 0; bi < node.arguments.length; bi++)
                        {
                            this.compileNode(node.arguments[bi]);
                        }
                        this.emit(OP.CALL_BUILTIN, node.arguments.length, this.nameIdx(node.name));
                        this.pop(Math.max(0, node.arguments.length - 1));
                        return;
                    }
                    case "UnaryExpression":
                        this.compileNode(node.argument);
                        if (node.operator === "!")
                        {
                            this.emit(OP.NOT);
                        }
                        else if (node.operator === "!!")
                        {
                             this.emit(OP.NOT); this.emit(OP.NOT); 
                        }
                        else if (node.operator === "+")
                        {
                            this.emit(OP.POS);
                        }
                        else if (node.operator === "-")
                        {
                            this.emit(OP.NEG);
                        }
                        else if (node.operator === "~")
                        {
                            this.emit(OP.BNOT);
                        }
                        else if (node.operator === "typeof")
                        {
                            this.emit(OP.TYPEOF);
                        }
                        return;
                    case "LogicalExpression":
                        if (node.operator === "&&")
                        {
                            this.compileNode(node.left);
                            const andEnd = this.code.length;
                            this.emit(OP.JMP_IF_NOT, 0);
                            this.emit(OP.POP);
                            this.pop();
                            this.compileNode(node.right);
                            this.code[andEnd + 1] = this.code.length;
                            return;
                        }
                        if (node.operator === "||")
                        {
                            this.compileNode(node.left);
                            const orEnd = this.code.length;
                            this.emit(OP.JMP_IF, 0);
                            this.emit(OP.POP);
                            this.pop();
                            this.compileNode(node.right);
                            this.code[orEnd + 1] = this.code.length;
                            return;
                        }
                        this.compileNode(node.left);
                        this.compileNode(node.right);
                        this.emit(BINOP[node.operator] || OP.ADD);
                        this.pop();
                        return;
                    case "BinaryExpression":
                        if (node.left.type === "LoadColumn" && node.right.type === "Literal")
                        {
                            const fusedConst = FUSE_COL_CONST_CMP[BINOP[node.operator]];
                            if (fusedConst)
                            {
                                this.emit(fusedConst);
                                this.code.push(node.left.colidx, this.constIdx(node.right.value));
                                this.push();
                                return;
                            }
                        }
                        if (node.left.type === "LoadColumn" && node.right.type === "LoadArg")
                        {
                            const fusedArg = FUSE_COL_ARG_CMP[BINOP[node.operator]];
                            if (fusedArg)
                            {
                                this.emit(fusedArg);
                                this.code.push(node.left.colidx, node.right.index);
                                this.push();
                                return;
                            }
                        }
                        this.compileNode(node.left);
                        this.compileNode(node.right);
                        this.emit(BINOP[node.operator] || OP.ADD);
                        this.pop();
                        return;
                    case "MemberExpression":
                        this.compileNode(node.object);
                        if (node.computed)
                        {
                            this.compileNode(node.property);
                        }
                        else
                        {
                            this.emit(OP.LOAD_CONST, this.constIdx(node.property.name));
                            this.push();
                        }
                        this.emit(node.computed ? OP.GET_ELEM : OP.GET_PROP);
                        this.pop();
                        return;
                    case "CallExpression":
                    {
                        if (node.callee.type === "MemberExpression")
                        {
                            this.compileNode(node.callee.object);
                            this.emit(OP.DUP);
                            this.push();
                            if (node.callee.computed)
                            {
                                this.compileNode(node.callee.property);
                            }
                            else
                            {
                                this.emit(OP.LOAD_CONST, this.constIdx(node.callee.property.name));
                                this.push();
                            }
                            this.emit(node.callee.computed ? OP.GET_ELEM : OP.GET_PROP);
                            this.pop();
                            for (let i = 0; i < node.arguments.length; i++)
                            {
                                this.compileNode(node.arguments[i]);
                            }
                            this.emit(OP.CALL_METHOD, node.arguments.length);
                            this.pop(node.arguments.length);
                            return;
                        }
                        this.compileNode(node.callee);
                        for (let i = 0; i < node.arguments.length; i++)
                        {
                            this.compileNode(node.arguments[i]);
                        }
                        this.emit(OP.CALL, node.arguments.length);
                        this.pop(node.arguments.length);
                        return;
                    }
                    case "NewExpression":
                    {
                        if (node.callee.type === "Identifier")
                        {
                            this.emit(OP.LOAD_GLOBAL, this.nameIdx(node.callee.name));
                        }
                        else
                        {
                            this.compileNode(node.callee);
                        }
                        for (let i = 0; i < node.arguments.length; i++)
                        {
                            this.compileNode(node.arguments[i]);
                        }
                        this.emit(OP.NEW, node.arguments.length);
                        this.pop(node.arguments.length);
                        return;
                    }
                    case "ArrayExpression":
                    {
                        for (let i = 0; i < node.elements.length; i++)
                        {
                            this.compileNode(node.elements[i]);
                        }
                        this.emit(OP.ARRAY, node.elements.length);
                        this.pop(Math.max(0, node.elements.length - 1));
                        return;
                    }
                    case "ObjectExpression":
                    {
                        this.emit(OP.OBJECT_BEGIN);
                        for (let oi = 0; oi < node.properties.length; oi++)
                        {
                            const prop = node.properties[oi];
                            if (prop.type === "SpreadElement")
                            {
                                this.compileNode(prop.argument);
                                this.emit(OP.OBJECT_SPREAD);
                                continue;
                            }
                            this.compileNode(prop.value);
                            if (prop.computed)
                            {
                                this.compileNode(prop.key);
                                this.emit(OP.OBJECT_DEFINE_COMPUTED);
                            }
                            else
                            {
                                this.emit(OP.OBJECT_DEFINE, this.constIdx(propertyKeyName(prop.key)));
                            }
                        }
                        this.push();
                        return;
                    }
                    default:
                        this.emit(OP.LOAD_UNDEF);
                        this.push();
                }
            }
        },
        optimize: {
            value ()
            {
                const code = this.code;
                let i = 0, fused = null;
                while (i < code.length)
                {
                    const op = code[i];
                    if (op === OP.LOAD_COL && i + 4 < code.length && code[i + 2] === OP.LOAD_COL)
                    {
                        const bin = code[i + 4];
                        if (bin === OP.ADD)
                        {
                            fused = OP.COL_ADD_COL;
                        }
                        else if (bin === OP.SUB)
                        {
                            fused = OP.COL_SUB_COL;
                        }
                        else if (bin === OP.MUL)
                        {
                            fused = OP.COL_MUL_COL;
                        }
                        else if (bin === OP.DIV)
                        {
                            fused = OP.COL_DIV_COL;
                        }
                        if (fused)
                        {
                            replaceRegion(code, i, 5, [fused, code[i + 1], code[i + 3]]);
                        }
                    }
                    if (fused === null && 
                        op === OP.LOAD_COL && i + 8 <= code.length &&
                        code[i + 2] === OP.LOAD_COL &&
                        code[i + 4] === OP.LOAD_CONST &&
                        code[i + 6] === OP.MUL &&
                        code[i + 7] === OP.ADD)
                    {
                        fused = OP.COL_ADD_MUL;
                        replaceRegion(code, i, 8, [fused, code[i + 1], code[i + 3], code[i + 5]]);
                    }
                    if (fused === null && op === OP.LOAD_COL && i + 4 < code.length && code[i + 2] === OP.LOAD_CONST)
                    {
                        const op2 = code[i + 4];
                        if (op2 === OP.MUL)
                        {
                            fused = OP.COL_MUL_CONST;
                            replaceRegion(code, i, 5, [fused, code[i + 1], code[i + 3]]);
                        }
                        else if (op2 === OP.ADD)
                        {
                            fused = OP.COL_ADD_CONST;
                            replaceRegion(code, i, 5, [fused, code[i + 1], code[i + 3]]);
                        }
                        else if (op2 === OP.SUB)
                        {
                            fused = OP.COL_SUB_CONST;
                            replaceRegion(code, i, 5, [fused, code[i + 1], code[i + 3]]);
                        }
                    }
                    if (fused === null && op === OP.LOAD_COL && i + 2 < code.length && code[i + 2] === OP.RETURN)
                    {
                        fused = OP.COL_RET;
                        replaceRegion(code, i, 3, [fused, code[i + 1]]);
                    }
                    if (fused === null)
                    {
                        i += getInstrLen(op);
                    }
                    fused = null;
                }
            }
        }
    });
    _BytecodeCompiler.compile = function (boundAst)
    {
        if (!boundAst)
        {
            return null;
        }
        const c = new _BytecodeCompiler();
        c.compileNode(boundAst);
        c.emit(OP.RETURN);
        c.optimize();

        const bc = {
            code: c.code,
            constants: c.constants,
            maxStack: c.maxStack,
            names: c.names,
            arrows: c.arrows
        };
        return bc;
    };

    function runArrowBytecode(steps, arrowDef, parentRt, callArgs)
    {
        const params = Array.from({ length: callArgs.length });
        for (let i = 0; i < callArgs.length; i++)
        {
            params[i] = callArgs[i];
        }
        const rt = {
            sp: -1,
            st: Array.from({ length: Math.max(4, (arrowDef.maxStack || 0) + 2) }),
            params,
            arrowRet: _undefined_,
            comp: parentRt.comp,
            dataset: parentRt.dataset,
            _row_: parentRt._row_,
            _records_: parentRt._records_,
            _args_: parentRt._args_,
            thisArg: parentRt.thisArg,
            env: parentRt.env
        };
        let pc = 0;
        while (pc >= 0)
        {
            const step = steps[pc];
            if (!step)
                {break;}
            pc = step(rt, null);
        }
        return rt.arrowRet;
    }

    const _threadedG = (() => {
        if (typeof globalThis !== "undefined")  { return globalThis; }
        if (typeof window !== "undefined")      { return window;     }
        return {};
    })();

    /** Per-PC closure with operands captured at compile time. */
    const stepHandlers = [];
    stepHandlers[OP.LOAD_CONST] = function (code, pc, def, nextPc)
    {
        const cv = (def.constants || [])[code[pc + 1]];
        return function (rt)
        {
            rt.st[++rt.sp] = cv;
            return nextPc;
        };
    };

    stepHandlers[OP.LOAD_CTX] = function (code, pc, _def, nextPc)
    {
        const ctxSlot = code[pc + 1];
        return function (rt, args)
        {
            rt.st[++rt.sp] = args[ctxSlot];
            return nextPc;
        };
    };

    stepHandlers[OP.LOAD_THIS] = function (_code, _pc, _def, nextPc)
    {
        return function (rt)
        {
            rt.st[++rt.sp] = rt.thisArg || null;
            return nextPc;
        };
    };

    stepHandlers[OP.LOAD_COL] = function (code, pc, _def, nextPc)
    {
        const col = code[pc + 1];
        return function (rt)
        {
            rt.st[++rt.sp] = rt._row_[col];
            return nextPc;
        };
    };

    stepHandlers[OP.LOAD_CONSTVAR] = function (code, pc, _def, nextPc)
    {
        const cvIdx = code[pc + 1];
        return function (rt)
        {
            rt.st[++rt.sp] = rt.dataset._constVars[cvIdx].value;
            return nextPc;
        };
    };

    stepHandlers[OP.LOAD_ARG] = function (code, pc, _def, nextPc)
    {
        const argIdx = code[pc + 1];
        return function (rt)
        {
            rt.sp++;
            rt.st[rt.sp] = rt._args_ ? rt._args_[argIdx] : _undefined_;
            return nextPc;
        };
    };

    stepHandlers[OP.LOAD_UNDEF] = function (_code, _pc, _def, nextPc)
    {
        return function (rt) { rt.sp++; rt.st[rt.sp] = _undefined_; return nextPc; };
    };

    stepHandlers[OP.LOAD_NULL] = function (_code, _pc, _def, nextPc)
    {
        return function (rt) { rt.st[++rt.sp] = null; return nextPc; };
    };

    stepHandlers[OP.LOAD_GLOBAL] = function (code, pc, def, nextPc)
    {
        const gname = (def.names || [])[code[pc + 1]];
        return function (rt)
        {
            rt.st[++rt.sp] = _threadedG[gname];
            return nextPc;
        };
    };

    stepHandlers[OP.LOAD_PARAM] = function (code, pc, _def, nextPc)
    {
        const pi = code[pc + 1];
        return function (rt)
        {
            rt.sp++; 
            rt.st[rt.sp] = rt.params ? rt.params[pi] : _undefined_;
            return nextPc;
        };
    };

    stepHandlers[OP.MAKE_ARROW_FN] = function (code, pc, def, nextPc)
    {
        const arrowIdx = code[pc + 1];
        const arrowDef = def.arrows[arrowIdx];
        const arrowSteps = buildBytecodeThreadedSteps(arrowDef);
        return function (rt)
        {
            rt.st[++rt.sp] = function ()
            {
                return runArrowBytecode(arrowSteps, arrowDef, rt, arguments);
            };
            return nextPc;
        };
    };

    stepHandlers[OP.ARROW_RETURN] = function (_code, _pc, _def, _nextPc)
    {
        return function (rt)
        {
            if (rt.sp >= 0)
            {
                rt.arrowRet = rt.st[rt.sp];
                rt.sp--;
            }
            else
            {
                rt.arrowRet = _undefined_;
            }
            return -1;
        };
    };

    stepHandlers[OP.DUP] = function (_code, _pc, _def, nextPc)
    {
        return function (rt)
        {
            rt.st[rt.sp + 1] = rt.st[rt.sp];
            rt.sp++;
            return nextPc;
        };
    };

    stepHandlers[OP.CALL_METHOD] = function (code, pc, _def, nextPc)
    {
        const methodArgc = code[pc + 1];
        return function (rt)
        {
            const fn = rt.st[rt.sp - methodArgc];
            const thisObj = rt.st[rt.sp - methodArgc - 1];
            if (typeof fn === "function")
            {
                if (methodArgc === 0)
                {
                    const result = fn.call(thisObj);
                    rt.sp -= 2;
                    rt.st[++rt.sp] = result;
                }
                else if (methodArgc === 1)
                {
                    const result = fn.call(thisObj, rt.st[rt.sp]);
                    rt.sp -= 3;
                    rt.st[++rt.sp] = result;
                }
                else if (methodArgc === 2)
                {
                    const result = fn.call(thisObj, rt.st[rt.sp - 1], rt.st[rt.sp]);
                    rt.sp -= 4;
                    rt.st[++rt.sp] = result;
                }
                else
                {
                    const callArgs = rt.st.slice(rt.sp - methodArgc + 1, rt.sp + 1);
                    rt.sp -= (methodArgc + 2);
                    rt.st[++rt.sp] = fn.apply(thisObj, callArgs);
                }
            }
            else
            {
                rt.sp -= (methodArgc + 2);
                rt.sp++;
                rt.st[rt.sp] = _undefined_;
            }
            return nextPc;
        };
    };

    stepHandlers[OP.COL_ADD_COL] = function (code, pc, _def, nextPc)
    {
        const c1 = code[pc + 1];
        const c2 = code[pc + 2];
        return function (rt)
        {
            rt.st[++rt.sp] = rt._row_[c1] + rt._row_[c2];
            return nextPc;
        };
    };

    stepHandlers[OP.COL_SUB_COL] = function (code, pc, _def, nextPc)
    {
        const s1 = code[pc + 1];
        const s2 = code[pc + 2];
        return function (rt)
        {
            rt.st[++rt.sp] = rt._row_[s1] - rt._row_[s2];
            return nextPc;
        };
    };

    stepHandlers[OP.COL_MUL_COL] = function (code, pc, _def, nextPc)
    {
        const m1 = code[pc + 1];
        const m2 = code[pc + 2];
        return function (rt)
        {
            rt.st[++rt.sp] = rt._row_[m1] * rt._row_[m2];
            return nextPc;
        };
    };

    stepHandlers[OP.COL_DIV_COL] = function (code, pc, _def, nextPc)
    {
        const d1 = code[pc + 1];
        const d2 = code[pc + 2];
        return function (rt)
        {
            rt.st[++rt.sp] = rt._row_[d1] / rt._row_[d2];
            return nextPc;
        };
    };

    stepHandlers[OP.COL_ADD_CONST] = function (code, pc, def, nextPc)
    {
        const ac = code[pc + 1];
        const ak = (def.constants || [])[code[pc + 2]];
        return function (rt)
        {
            rt.st[++rt.sp] = rt._row_[ac] + ak;
            return nextPc;
        };
    };

    stepHandlers[OP.COL_MUL_CONST] = function (code, pc, def, nextPc)
    {
        const mc = code[pc + 1];
        const mk = (def.constants || [])[code[pc + 2]];
        return function (rt)
        {
            rt.st[++rt.sp] = rt._row_[mc] * mk;
            return nextPc;
        };
    };

    stepHandlers[OP.COL_SUB_CONST] = function (code, pc, def, nextPc)
    {
        const sc = code[pc + 1];
        const sk = (def.constants || [])[code[pc + 2]];
        return function (rt)
        {
            rt.st[++rt.sp] = rt._row_[sc] - sk;
            return nextPc;
        };
    };

    stepHandlers[OP.COL_ADD_MUL] = function (code, pc, def, nextPc)
    {
        const amA = code[pc + 1];
        const amB = code[pc + 2];
        const amK = (def.constants || [])[code[pc + 3]];
        return function (rt)
        {
            rt.st[++rt.sp] = rt._row_[amA] + rt._row_[amB] * amK;
            return nextPc;
        };
    };

    stepHandlers[OP.COL_LOAD2] = function (code, pc, _def, nextPc)
    {
        const cl = code[pc + 1];
        return function (rt)
        {
            rt.st[++rt.sp] = rt._row_[cl];
            return nextPc;
        };
    };

    stepHandlers[OP.COL_EQ_CONST] = function (code, pc, def, nextPc)
    {
        const eqC = code[pc + 1];
        const eqK = (def.constants || [])[code[pc + 2]];
        return function (rt)
        {
            rt.st[++rt.sp] = rt._row_[eqC] == eqK;
            return nextPc;
        };
    };

    stepHandlers[OP.COL_NEQ_CONST] = function (code, pc, def, nextPc)
    {
        const neqC = code[pc + 1];
        const neqK = (def.constants || [])[code[pc + 2]];
        return function (rt)
        {
            rt.st[++rt.sp] = rt._row_[neqC] != neqK;
            return nextPc;
        };
    };

    stepHandlers[OP.COL_LT_CONST] = function (code, pc, def, nextPc)
    {
        const ltC = code[pc + 1];
        const ltK = (def.constants || [])[code[pc + 2]];
        return function (rt)
        {
            rt.st[++rt.sp] = rt._row_[ltC] < ltK;
            return nextPc;
        };
    };

    stepHandlers[OP.COL_LE_CONST] = function (code, pc, def, nextPc)
    {
        const leC = code[pc + 1];
        const leK = (def.constants || [])[code[pc + 2]];
        return function (rt)
        {
            rt.st[++rt.sp] = rt._row_[leC] <= leK;
            return nextPc;
        };
    };

    stepHandlers[OP.COL_GT_CONST] = function (code, pc, def, nextPc)
    {
        const gtC = code[pc + 1];
        const gtK = (def.constants || [])[code[pc + 2]];
        return function (rt)
        {
            rt.st[++rt.sp] = rt._row_[gtC] > gtK;
            return nextPc;
        };
    };

    stepHandlers[OP.COL_GE_CONST] = function (code, pc, def, nextPc)
    {
        const geC = code[pc + 1];
        const geK = (def.constants || [])[code[pc + 2]];
        return function (rt)
        {
            rt.st[++rt.sp] = rt._row_[geC] >= geK;
            return nextPc;
        };
    };

    stepHandlers[OP.COL_EQ_ARG] = function (code, pc, _def, nextPc)
    {
        const eqAC = code[pc + 1];
        const eqAI = code[pc + 2];
        return function (rt)
        {
            rt.sp++;
            rt.st[rt.sp] = rt._row_[eqAC] == (rt._args_ ? rt._args_[eqAI] : _undefined_);
            return nextPc;
        };
    };

    stepHandlers[OP.COL_NEQ_ARG] = function (code, pc, _def, nextPc)
    {
        const neqAC = code[pc + 1];
        const neqAI = code[pc + 2];
        return function (rt)
        {
            rt.sp++;
            rt.st[rt.sp] = rt._row_[neqAC] != (rt._args_ ? rt._args_[neqAI] : _undefined_);
            return nextPc;
        };
    };

    stepHandlers[OP.COL_LT_ARG] = function (code, pc, _def, nextPc)
    {
        const ltAC = code[pc + 1];
        const ltAI = code[pc + 2];
        return function (rt)
        {
            rt.sp++;
            rt.st[rt.sp] = rt._row_[ltAC] < (rt._args_ ? rt._args_[ltAI] : _undefined_);
            return nextPc;
        };
    };

    stepHandlers[OP.COL_LE_ARG] = function (code, pc, _def, nextPc)
    {
        const leAC = code[pc + 1];
        const leAI = code[pc + 2];
        return function (rt)
        {
            rt.sp++;
            rt.st[rt.sp] = rt._row_[leAC] <= (rt._args_ ? rt._args_[leAI] : _undefined_);
            return nextPc;
        };
    };

    stepHandlers[OP.COL_GT_ARG] = function (code, pc, _def, nextPc)
    {
        const gtAC = code[pc + 1];
        const gtAI = code[pc + 2];
        return function (rt)
        {
            rt.sp++;
            rt.st[rt.sp] = rt._row_[gtAC] > (rt._args_ ? rt._args_[gtAI] : _undefined_);
            return nextPc;
        };
    };

    stepHandlers[OP.COL_GE_ARG] = function (code, pc, _def, nextPc)
    {
        const geAC = code[pc + 1];
        const geAI = code[pc + 2];
        return function (rt)
        {
            rt.sp++;
            rt.st[rt.sp] = rt._row_[geAC] >= (rt._args_ ? rt._args_[geAI] : _undefined_);
            return nextPc;
        };
    };

    stepHandlers[OP.COL_RET] = function (code, pc, _def, _nextPc)
    {
        const retCol = code[pc + 1];
        return function (rt)
        {
            rt.ret = rt._row_[retCol];
            return -1;
        };
    };

    stepHandlers[OP.ADD] = function (_code, _pc, _def, nextPc)
    {
        return function (rt) { const b = rt.st[rt.sp--]; rt.st[rt.sp] = rt.st[rt.sp] + b; return nextPc; };
    };

    stepHandlers[OP.SUB] = function (_code, _pc, _def, nextPc)
    {
        return function (rt) { const b = rt.st[rt.sp--]; rt.st[rt.sp] = rt.st[rt.sp] - b; return nextPc; };
    };

    stepHandlers[OP.MUL] = function (_code, _pc, _def, nextPc)
    {
        return function (rt) { const b = rt.st[rt.sp--]; rt.st[rt.sp] = rt.st[rt.sp] * b; return nextPc; };
    };

    stepHandlers[OP.DIV] = function (_code, _pc, _def, nextPc)
    {
        return function (rt) { const b = rt.st[rt.sp--]; rt.st[rt.sp] = rt.st[rt.sp] / b; return nextPc; };
    };

    stepHandlers[OP.MOD] = function (_code, _pc, _def, nextPc)
    {
        return function (rt) { const b = rt.st[rt.sp--]; rt.st[rt.sp] = rt.st[rt.sp] % b; return nextPc; };
    };

    stepHandlers[OP.EQ] = function (_code, _pc, _def, nextPc)
    {
        return function (rt) { const b = rt.st[rt.sp--]; rt.st[rt.sp] = rt.st[rt.sp] == b; return nextPc; };
    };

    stepHandlers[OP.SEQ] = function (_code, _pc, _def, nextPc)
    {
        return function (rt) { const b = rt.st[rt.sp--]; rt.st[rt.sp] = rt.st[rt.sp] === b; return nextPc; };
    };

    stepHandlers[OP.NEQ] = function (_code, _pc, _def, nextPc)
    {
        return function (rt) { const b = rt.st[rt.sp--]; rt.st[rt.sp] = rt.st[rt.sp] != b; return nextPc; };
    };

    stepHandlers[OP.SNEQ] = function (_code, _pc, _def, nextPc)
    {
        return function (rt) { const b = rt.st[rt.sp--]; rt.st[rt.sp] = rt.st[rt.sp] !== b; return nextPc; };
    };

    stepHandlers[OP.LT] = function (_code, _pc, _def, nextPc)
    {
        return function (rt) { const b = rt.st[rt.sp--]; rt.st[rt.sp] = rt.st[rt.sp] < b; return nextPc; };
    };

    stepHandlers[OP.LE] = function (_code, _pc, _def, nextPc)
    {
        return function (rt) { const b = rt.st[rt.sp--]; rt.st[rt.sp] = rt.st[rt.sp] <= b; return nextPc; };
    };

    stepHandlers[OP.GT] = function (_code, _pc, _def, nextPc)
    {
        return function (rt) { const b = rt.st[rt.sp--]; rt.st[rt.sp] = rt.st[rt.sp] > b; return nextPc; };
    };

    stepHandlers[OP.GE] = function (_code, _pc, _def, nextPc)
    {
        return function (rt) { const b = rt.st[rt.sp--]; rt.st[rt.sp] = rt.st[rt.sp] >= b; return nextPc; };
    };

    stepHandlers[OP.AND] = function (_code, _pc, _def, nextPc)
    {
        return function (rt) { const b = rt.st[rt.sp--]; rt.st[rt.sp] = rt.st[rt.sp] && b; return nextPc; };
    };

    stepHandlers[OP.OR] = function (_code, _pc, _def, nextPc)
    {
        return function (rt) { const b = rt.st[rt.sp--]; rt.st[rt.sp] = rt.st[rt.sp] || b; return nextPc; };
    };

    stepHandlers[OP.NOT] = function (_code, _pc, _def, nextPc)
    {
        return function (rt) { rt.st[rt.sp] = !rt.st[rt.sp]; return nextPc; };
    };

    stepHandlers[OP.BITAND] = function (_code, _pc, _def, nextPc)
    {
        return function (rt) { const b = rt.st[rt.sp--]; rt.st[rt.sp] = rt.st[rt.sp] & b; return nextPc; };
    };

    stepHandlers[OP.BITOR] = function (_code, _pc, _def, nextPc)
    {
        return function (rt) { const b = rt.st[rt.sp--]; rt.st[rt.sp] = rt.st[rt.sp] | b; return nextPc; };
    };

    stepHandlers[OP.BITXOR] = function (_code, _pc, _def, nextPc)
    {
        return function (rt) { const b = rt.st[rt.sp--]; rt.st[rt.sp] = rt.st[rt.sp] ^ b; return nextPc; };
    };

    stepHandlers[OP.SHL] = function (_code, _pc, _def, nextPc)
    {
        return function (rt) { const b = rt.st[rt.sp--]; rt.st[rt.sp] = rt.st[rt.sp] << b; return nextPc; };
    };

    stepHandlers[OP.SHR] = function (_code, _pc, _def, nextPc)
    {
        return function (rt) { const b = rt.st[rt.sp--]; rt.st[rt.sp] = rt.st[rt.sp] >> b; return nextPc; };
    };

    stepHandlers[OP.USHR] = function (_code, _pc, _def, nextPc)
    {
        return function (rt) { const b = rt.st[rt.sp--]; rt.st[rt.sp] = rt.st[rt.sp] >>> b; return nextPc; };
    };

    stepHandlers[OP.IN] = function (_code, _pc, _def, nextPc)
    {
        return function (rt) { const b = rt.st[rt.sp--]; rt.st[rt.sp] = rt.st[rt.sp] in b; return nextPc; };
    };

    stepHandlers[OP.POS] = function (_code, _pc, _def, nextPc)
    {
        return function (rt) { rt.st[rt.sp] = +rt.st[rt.sp]; return nextPc; };
    };

    stepHandlers[OP.NEG] = function (_code, _pc, _def, nextPc)
    {
        return function (rt) { rt.st[rt.sp] = -rt.st[rt.sp]; return nextPc; };
    };

    stepHandlers[OP.BNOT] = function (_code, _pc, _def, nextPc)
    {
        return function (rt) { rt.st[rt.sp] = ~rt.st[rt.sp]; return nextPc; };
    };

    stepHandlers[OP.TYPEOF] = function (_code, _pc, _def, nextPc)
    {
        return function (rt) { rt.st[rt.sp] = typeof rt.st[rt.sp]; return nextPc; };
    };

    stepHandlers[OP.COND] = function (code, pc, _def, _nextPc)
    {
        const condAlt = code[pc + 1];
        const condNext = pc + 2;
        return function (rt)
        {
            if (!rt.st[rt.sp--])
            {
                return condAlt;
            }
            return condNext;
        };
    };

    stepHandlers[OP.JMP_IF_NOT] = function (code, pc, _def, _nextPc)
    {
        const jinAlt = code[pc + 1];
        const jinNext = pc + 2;
        return function (rt)
        {
            if (!rt.st[rt.sp])
            {
                return jinAlt;
            }
            return jinNext;
        };
    };

    stepHandlers[OP.JMP_IF] = function (code, pc, _def, _nextPc)
    {
        const jiAlt = code[pc + 1];
        const jiNext = pc + 2;
        return function (rt)
        {
            if (rt.st[rt.sp])
            {
                return jiAlt;
            }
            return jiNext;
        };
    };

    stepHandlers[OP.POP] = function (_code, _pc, _def, nextPc)
    {
        return function (rt) { rt.sp--; return nextPc; };
    };

    stepHandlers[OP.JMP] = function (code, pc, _def, _nextPc)
    {
        const jmpTarget = code[pc + 1];
        return function (_rt) { return jmpTarget; };
    };

    stepHandlers[OP.GET_PROP] = function (_code, _pc, _def, nextPc)
    {
        return function (rt)
        {
            const prop = rt.st[rt.sp--];
            const obj = rt.st[rt.sp];
            rt.st[rt.sp] = obj == null ? _undefined_ : obj[prop];
            return nextPc;
        };
    };
    stepHandlers[OP.GET_ELEM] = stepHandlers[OP.GET_PROP];

    stepHandlers[OP.CALL] = function (code, pc, _def, nextPc)
    {
        const callArgc = code[pc + 1];
        return function (rt)
        {
            const fn = rt.st[rt.sp - callArgc];
            const callThis = rt.comp || rt.dataset;
            if (typeof fn === "function")
            {
                if (callArgc === 0)
                {
                    rt.st[rt.sp] = fn.call(callThis);
                }
                else if (callArgc === 1)
                {
                    rt.st[rt.sp - 1] = fn.call(callThis, rt.st[rt.sp]);
                    rt.sp--;
                }
                else if (callArgc === 2)
                {
                    rt.st[rt.sp - 2] = fn.call(callThis, rt.st[rt.sp - 1], rt.st[rt.sp]);
                    rt.sp -= 2;
                }
                else
                {
                    const callArgs = rt.st.slice(rt.sp - callArgc + 1, rt.sp + 1);
                    rt.sp -= (callArgc + 1);
                    rt.st[++rt.sp] = fn.apply(callThis, callArgs);
                }
            }
            else
            {
                rt.sp -= (callArgc + 1);
                rt.st[++rt.sp] = _undefined_;
            }
            return nextPc;
        };
    };

    stepHandlers[OP.NEW] = function (code, pc, _def, nextPc)
    {
        const newArgc = code[pc + 1];
        return function (rt)
        {
            rt.sp -= newArgc;
            const fn = rt.st[rt.sp--];
            if (typeof fn !== "function")
            {
                rt.sp++;
                rt.st[rt.sp] = _undefined_;
            }
            else if (newArgc === 0)
            {
                rt.st[++rt.sp] = new fn();
            }
            else
            {
                const newArgs = rt.st.slice(rt.sp + 1, rt.sp + 1 + newArgc);
                const inst = Object.create(fn.prototype);
                const d = fn.apply(inst, newArgs);
                rt.st[++rt.sp] = (d && typeof d === "object") ? d : inst;
            }
            return nextPc;
        };
    };

    stepHandlers[OP.CALL_BUILTIN] = function (code, pc, def, nextPc)
    {
        const builtinArgc = code[pc + 1];
        const builtinName = (def.names || [])[code[pc + 2]];
        return function (rt)
        {
            rt.sp -= builtinArgc;
            if (builtinName === "TEXT" && rt.env?._getStringResourceValue)
            {
                if (builtinArgc === 0)
                {
                    rt.sp++;
                    rt.st[rt.sp] = rt.env._getStringResourceValue();
                }
                else if (builtinArgc === 1)
                {
                    const arg = rt.st[rt.sp + 1];
                    rt.sp++;
                    rt.st[rt.sp] = rt.env._getStringResourceValue(arg);
                }
                else
                {
                    const targs = rt.st.slice(rt.sp + 1, rt.sp + 1 + builtinArgc);
                    rt.sp++;
                    rt.st[rt.sp] = rt.env._getStringResourceValue(...targs);
                }
            }
            else
            {
                rt.sp++;
                rt.st[rt.sp] = _undefined_;
            }
            return nextPc;
        };
    };

    stepHandlers[OP.SCOPE] = function (_code, _pc, _def, nextPc)
    {
        return function (rt)
        {
            const b = rt.st[rt.sp--];
            const a = rt.st[rt.sp];
            rt.st[rt.sp] = a == null ? _undefined_ : a[b];
            return nextPc;
        };
    };

    stepHandlers[OP.ARRAY] = function (code, pc, _def, nextPc)
    {
        const arrLen = code[pc + 1];
        return function (rt)
        {
            if (arrLen === 0)
            {
                rt.st[++rt.sp] = [];
            }
            else
            {
                const base = rt.sp - arrLen + 1;
                const items = rt.st.slice(base, base + arrLen);
                rt.sp = base;
                rt.st[rt.sp] = items;
            }
            return nextPc;
        };
    };

    stepHandlers[OP.OBJECT_BEGIN] = function (_code, _pc, _def, nextPc)
    {
        return function (rt)
        {
            rt.st[++rt.sp] = {};
            return nextPc;
        };
    };

    stepHandlers[OP.OBJECT_DEFINE] = function (code, pc, def, nextPc)
    {
        const keyIdx = code[pc + 1];
        const key = def.constants[keyIdx];
        return function (rt)
        {
            const val = rt.st[rt.sp--];
            rt.st[rt.sp][key] = val;
            return nextPc;
        };
    };

    stepHandlers[OP.OBJECT_DEFINE_COMPUTED] = function (_code, _pc, _def, nextPc)
    {
        return function (rt)
        {
            const key = rt.st[rt.sp--];
            const val = rt.st[rt.sp--];
            rt.st[rt.sp][key] = val;
            return nextPc;
        };
    };

    stepHandlers[OP.OBJECT_SPREAD] = function (_code, _pc, _def, nextPc)
    {
        return function (rt)
        {
            const src = rt.st[rt.sp--];
            const obj = rt.st[rt.sp];
            if (src != null && typeof src === "object")
            {
                Object.assign(obj, src);
            }
            return nextPc;
        };
    };

    stepHandlers[OP.RETURN] = function (_code, _pc, _def, _nextPc)
    {
        return function (rt)
        {
            rt.ret = rt.sp >= 0 ? rt.st[rt.sp] : _undefined_;
            return -1;
        };
    };

    stepHandlers._default = function (_code, _pc, _def, _nextPc)
    {
        return function (rt)
        {
            rt.ret = _undefined_;
            return -1;
        };        
    };

    /** Per-PC closure with operands captured at compile time. */
    function ctxArgIndex(ctxArgNames, name)
    {
        if (!ctxArgNames)
        {
            return -1;
        }
        for (let i = 0; i < ctxArgNames.length; i++)
        {
            if (ctxArgNames[i] === name)
            {
                return i;
            }
        }
        return -1;
    }

    function resolveThreadedCtxSlots(ctxArgNames)
    {
        return {
            rowIdx: ctxArgIndex(ctxArgNames, "_row_"),
            dsIdx: ctxArgIndex(ctxArgNames, "dataset"),
            compIdx: ctxArgIndex(ctxArgNames, "comp"),
            recIdx: ctxArgIndex(ctxArgNames, "_records_"),
            argsIdx: ctxArgIndex(ctxArgNames, "_args_")
        };
    }

    function buildBytecodeThreadedSteps(def)
    {
        const code = def.code;
        const steps = Array.from({ length: code.length });
        for (let i = 0; i < code.length; )
        {
            const op = code[i];
            const nextPc = i + getInstrLen(op);
            const handler = stepHandlers[op] || stepHandlers._default;
            steps[i] = handler(code, i, def, nextPc);

            i += getInstrLen(code[i]);
        }
        return steps;
    }

    function assembleBytecodeThreadedRunner(bc, steps, slots)
    {
        const maxStack = Math.max(4, (bc.maxStack || 0) + 2);
        const { rowIdx, compIdx, dsIdx, recIdx, argsIdx } = slots;
        const rt = {
            sp: -1,
            st: Array.from({ length: maxStack }),
            ret: _undefined_,
            comp: null,
            dataset: null,
            _records_: [],
            _row_: [],
            _args_: _undefined_,
            thisArg: null,
            env: null
        };
        const runner = function (...args)
        {
            const env = nexacro.getEnvironment();
            try
            {
                rt.sp = -1;
                rt.ret = _undefined_;
                rt.comp = compIdx >= 0 ? args[compIdx] : null;
                rt.dataset = dsIdx >= 0 ? args[dsIdx] : null;
                rt._records_ = recIdx >= 0 ? args[recIdx] : [];
                rt._row_ = rowIdx >= 0 ? args[rowIdx] : [];
                rt._args_ = argsIdx >= 0 ? args[argsIdx] : _undefined_;
                rt.thisArg = this;
                rt.env = env;
                let pc = 0;
                let step;
                while (pc >= 0)
                {
                    step = steps[pc];
                    if (!step)
                        {break;}
                    pc = step(rt, args);
                }
                if (rt.ret !== _undefined_)
                {
                    return rt.ret;
                }
                return rt.sp >= 0 ? rt.st[rt.sp] : _undefined_;
            }
            catch (e)
            {
                console.info("failed to create expression closure:", e.message);
                return _undefined_;
            }
        };
        return runner;
    }

    const whitespace_char_map = nexacro._gen_arrmap("\n\r\t ".split(''));
    const whitespace_escaped_char_map = nexacro._gen_arrmap(String.raw`\n,\r,\t,\s`.split(','));    // add backslash to special characters
    nexacro._escapeWhitespace = function (str)
    {
        let whitespace, replace_whitespace;
        if (Object.keys)
        {
            whitespace = Object.keys(whitespace_char_map);
            replace_whitespace = Object.keys(whitespace_escaped_char_map);
        }
        else
        {
            whitespace = [];
            for (const key in whitespace_char_map)
            {
                if (Object.hasOwn(whitespace_char_map, key))
                {
                    whitespace.push(key);
                }
            }

            replace_whitespace = [];
            for (const key in whitespace_escaped_char_map)
            {
                if (Object.hasOwn(whitespace_escaped_char_map, key))
                {
                    replace_whitespace.push(key);
                }
            }
        }

        let block, full = "";
        for (let i = 0; i < str.length; i++)
        {
            block = str.charAt(i);
            for (let j = 0; j < whitespace.length; j++)
            {
                if (block === whitespace[j])
                {
                    full += replace_whitespace[j];
                    break;
                }
            }
            full += block;
        }

        return full;
    }

    //==============================================================================
    // nexacro.ExprParser
    //==============================================================================
    nexacro.ExprParser = function (expr_str, arglist = [])
    {
        this._exprStr = expr_str;
        this._arglist = arglist;
        this._ast = null;
        this._boundExpr = null;
        this._boundTarget = null;
        this._runner = null;
    };
    nexacro.ExprParser.prototype.parse = function (boundTarget)
    {
        if (this._exprStr == null || this._exprStr === "")
        {
            return this;
        }

        this._ast = _AstParser.parseExpression(this._exprStr, true);
        if (this._ast)
        {
            this.bind(boundTarget);
        }

        this._boundExpr = this._boundExpr || this._ast;
        return this;
    };

    nexacro.ExprParser.prototype.bind = function (boundTarget)
    {
        if (this._ast == null || this._exprStr === "")
        {
            return this;
        }

        this._boundTarget = boundTarget || {};
        const bound = _ExprBinder.bind(this._ast, this._boundTarget, this._arglist);
        if (!bound)
        {
            return this;
        }
        this._boundExpr = _ExprOptimizer.optimize(bound);
        return this;
    };

    nexacro.ExprParser.prototype.compile = function (noCache)
    {
        if (this._boundExpr == null || this._boundExpr === "") 
        {
            return _nullFn;
        }

        if (noCache !== true && this._runner)
        {
            return this._runner;
        }

        let exprFn = null;
        const bytecode = _BytecodeCompiler.compile(this._boundExpr);
        if (bytecode?.code)
        {
            const slots = resolveThreadedCtxSlots(this._arglist);
            const threadedSteps = buildBytecodeThreadedSteps(bytecode);

            exprFn = assembleBytecodeThreadedRunner(bytecode, threadedSteps, slots);
        }

        if (noCache !== true) 
        {
            this._runner = exprFn;
        }
        return (typeof exprFn === "function") ? exprFn : _nullFn;
    };
    // Clear AST cache datas
    nexacro.ExprParser.clearCache = function ()
    {
        _AstParser.clearCache();
    };
    nexacro.ExprParser.normalize = function (exprStr)
    {
        if (exprStr == null)
        {
            return "";
        }
        let s = (exprStr + "").trim();
        const ex = s.substring(0, 4).toUpperCase();
        if (ex === "EXPR" || ex === "BIND")
        {
            const exp = s.substring(4).trim();
            if (/^expr(\s*):|^bind(\s*):/i.test(s))
            {
                s = exp.substring(1).trim();
            }
            else if (/^expr(\s*)\(.*\)$|^bind(\s*)\(.*\)$/i.test(s))
            {
                s = exp.substring(1, exp.length - 1).trim();
            }
        }
        return s;
    };

    //==============================================================================
    // nexacro._createExprFunc()
    //==============================================================================
    nexacro._createExprFunc = function (exprStr, bindTarget, arglist)
    {
        if (exprStr == null || exprStr === "")
        {
            return null;
        }

        const parser = new nexacro.ExprParser(exprStr, arglist);
        parser.parse(bindTarget);
        return parser.compile();
    };
})();