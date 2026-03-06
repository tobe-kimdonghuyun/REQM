
/* 플러그인 예시*/

const MSG_CTX = new WeakMap();

/** @type {import('./pluginapi').PluginAPI} */
export default
    {
        /* 사용방법 
            dsl 에서 사용 할 수 있는 api 종류 
                    
                dsl.ignoreCond  on|off|object 조건 파싱

                dsl.onlyIfTags(["Button","Div"]) 특정 태그에서만 조건 적용
                dsl.notForTags(["Calendar"]) 특정 태그는 제외
                dsl.has("taborder") 해당속성이 존재하는지 확인
                dsl.not("readonly") 해당 속성이 존재하지 않아야 함
                dsl.get("font-size") 속성에 적용된 값을 받아 후속조건 체이닝
                        예시) 
                            dsl.get("id").matchVal(/^btn-/) 정규식과 값이 매칭
                            dsl.get("type").inVal(["text", "password"]) 값이 배열에 포함(enumable)
                            dsl.get("taborder").typeVal("number") 값의 타입검사 (js에서 확인 가능한 type 만 check)
                            dsl.get("font-size").unitVal("px") 단위(unit)값 check
                            dsl.get("font-size").gteVal(12) 크거나 같음
                            dsl.get("line-height").lteVal(1.8) 작거나 같음
                            dsl.get("align").eqVal("center") 값이 정확히 일치
                            dsl.get("text").containsVal("필수") 문자열 포함여부
                            
                        dsl.anyAttrMatch(/^data-/) 속성매칭
                        dsl.hasAttrPrefix("aria-") 속성이 접두사로 시작되는 경우
                        
                        dsl.and(...conditions) 모든 조건이 동시에 true => dal.and(has("id"), get("id").matchVal(/btn/))
                        dsl.or(...conditions) 하나이상 만족 => dsl.or(has("text"), has("tooltiptext"))
                        dsl.xor(condA, condB) 정확히 하나만 만족 => dsl.xor(has("url"), has("path"))
                        dsl.ifCond(...).then(...) A가 true이면 B도 true => dsl.ifCond(has("readonly")).then(has("text"))
                        dsl.ifCond(...).unless(...) A가 true일 경우 B는 false => dsl.ifCond(has("disabled")).unless(has("action"))
                
            node의 정보
                
                
                screenid ?: string; // 해당 component가 속한 Layout의 screenid 
                tagname: string; // Tag명
                id: string; // Component ID
                csacade_id ?: string; // 중첩 아이디 * binditem의 compid 패턴
                meta: Range | undefined; // xml의 line , col 정보
                metainfo ?: { obj: ElementNode | undefined, prop: ElementNode | undefined } // metainfo 참조정보
                props: Record < string, { value: string, prop_meta: any } >; // 설정된 속성 (initvalue,form inntvalue, layout 재정의 전체 반영된 최종값)
                file: {
                    path: string;
                    ext: string;
                }; // 파일 정보
                validate ?: ItemValidateResult[] // 현재까지 누적된 validator 결과
                

                rv
                
                "on" | "off" | "object"
                

        */

        /*2025.12.10 논의 결과에 특정 컴포넌트 구성에만 적용되는 규칙 plugin으로 작성*/

        "a11y-plugin/validate-imageviewer-tabstop":
        {
            /**
             * @param {import('./pluginapi').DSL} dsl
             * @param {import('./pluginapi').ObjectParseResult} node
             * @param {import('./pluginapi').RuleValue} rv
            */
            api: (dsl, node, rv) =>
            {

                if (node.tagname !== "ImageViewer")
                    return undefined;

                const isignore = dsl.ignoreCond(rv);

                if (isignore(node))
                {
                    return undefined;
                }

                const ispass = dsl.passCond(rv);
                if (ispass(node))
                {
                    return true;
                }

                const rule = dsl.and(
                    dsl.has("tabstop"),
                    dsl.get("tabstop").eqVal("false")
                )
                const usetabstop = !rule(node);
                if (usetabstop)
                {
                    const hasonclick = dsl.has("onclick")(node);
                    if (!hasonclick)
                        return false;
                    return true;
                }

                return undefined;
            },
            message: "ImageViewer 에서 tabstop=true 가 되기 위해서는 onclick handler를 정의해야 합나다.",
            propname: "tabstop",
        },
        "a11y-plugin/validate-static-clickevent":
        {
            /**
             * @param {import('./pluginapi').DSL} dsl
             * @param {import('./pluginapi').ObjectParseResult} node
             * @param {import('./pluginapi').RuleValue} rv
            */
            api: (dsl, node, rv) =>
            {

                if (node.tagname !== "Static")
                    return undefined;


                const isignore = dsl.ignoreCond(rv);

                if (isignore(node))
                {
                    return undefined;
                }

                const ispass = dsl.passCond(rv);
                if (ispass(node))
                {
                    return true;
                }

                const hasonclick = dsl.has("onclick")(node);
                if (hasonclick)
                    return false;
                else
                    return true;

                return undefined;
            },
            message: "Static에 onclick handler를 정의했습니다. Button으로 변경을 권장합니다.",
            propname: "onclick",
        },

        "a11y-plugin/validate-static-spchar-text":
        {
            /**
             * @param {import('./pluginapi').DSL} dsl
             * @param {import('./pluginapi').ObjectParseResult} node
             * @param {import('./pluginapi').RuleValue} rv
            */
            api: (dsl, node, rv) =>
            {

                // 예를 들어 Static 만 처리하고 싶다면 아래와 같이 예외처리도 가능

                if (node.tagname !== "Static")
                    return undefined;


                const isignore = dsl.ignoreCond(rv);

                if (isignore(node))
                {
                    return undefined;
                }

                const ispass = dsl.passCond(rv);
                if (ispass(node))
                {
                    return true;
                }

                const rule = dsl.or(
                    dsl.not("accessibilityenable"),
                    dsl.get("accessibilityenable").eqVal("true")
                )

                const re = /^[^\p{L}\p{N}\s]+$/u;

                const rule0 = dsl.and(
                    dsl.has("text"),
                    dsl.get("text").matchVal(re)
                )
                const a11yenable = rule(node);
                const sponly = rule0(node);
                if (a11yenable && sponly)
                    return false;
                else
                    return true;

                return undefined;
            },
            message: "Static의 text속성에 특수문자만 존재하는 경우 accessibilityenable 를 false로 지정해야 합니다.",
            propname: "text",
        },
        "a11y-plugin/validate-comp-size":
        {
            /**
            * @param {import('./pluginapi').DSL} dsl
            * @param {import('./pluginapi').ObjectParseResult} node
            * @param {import('./pluginapi').RuleValue} rv
            */
            api: (dsl, node, rv) =>
            {
                if (node.tagname != "Button" && node.tagname != "Radio" && node.tagname != "CheckBox")
                    return undefined;

                const isignore = dsl.ignoreCond(rv);

                if (isignore(node))
                {
                    return undefined;
                }

                const ispass = dsl.passCond(rv);
                if (ispass(node))
                {
                    return true;
                }
                if ((dsl.get("width").unit(node) == "px" && dsl.get("height").unit(node) == "px")
                    || ((dsl.get("width").unit(node) == undefined && dsl.get("height").unit(node) == undefined)))
                {
                    let width = Number(dsl.get("width").number(node));
                    let height = Number(dsl.get("height").number(node));
                    if (Number.isNaN(width) || Number.isNaN(height))
                    {
                        return undefined;
                    }
                    let type = "desktop";
                    if (node.screentype)
                        type = node.screentype;

                    if (type == "desktop")
                    {
                        if (0 < width && width < 17)
                        {
                            MSG_CTX.set(node,
                                { type: type, tag: node.tagname, prop: "width", min: 17 });

                            return false;
                        }
                        else if (0 < height && height < 17)
                        {
                            MSG_CTX.set(node,
                                { type: type, tag: node.tagname, prop: "height", min: 24 });
                            return false;
                        }
                        else
                        {

                            return true;
                        }

                    }
                    else
                    {
                        if (0 < width && width < 24)
                        {
                            MSG_CTX.set(node,
                                { type: type, tag: node.tagname, prop: "width", min: 24 });

                            return false;
                        }
                        else if (0 < width && height < 24)
                        {
                            MSG_CTX.set(node,
                                { type: type, tag: node.tagname, prop: "height", min: 24 });

                            return false;
                        }
                        else
                        {

                            return true;
                        }
                    }
                }
                return undefined;
            },
            message: ({ node }) =>
            {
                const ctx = MSG_CTX.get(node);
                if (!ctx) return "Component Size가 screen type에 따른 최소 크기 이하 입니다.";
                return `Screen = ${ctx.type}인 경우 ${ctx.tag}의 ${ctx.prop}가 최소크기 ${ctx.min} 이하입니다.`;
            },
            propname: "width",

        },
        "a11y-plugin/validate-comp-font-size":
        {
            /**
             * @param {import('./pluginapi').DSL} dsl
             * @param {import('./pluginapi').ObjectParseResult} node
             * @param {import('./pluginapi').RuleValue} rv
            */
            api: (dsl, node, rv) =>
            {
                // 텍스트가 포함되는 주요 컴포넌트 대상
                const targetTags = ["Static", "Button", "Edit", "Combo", "CheckBox", "Radio", "TextArea", "Calendar", "Grid"];
                if (!targetTags.includes(node.tagname))
                    return undefined;

                const isignore = dsl.ignoreCond(rv);
                if (isignore(node))
                {
                    return undefined;
                }

                const ispass = dsl.passCond(rv);
                if (ispass(node))
                {
                    return true;
                }

                // font-size 속성 가져오기 (단위 포함 가능)
                const fontSizeProp = dsl.get("font-size");
                const unit = fontSizeProp.unit(node);
                const value = Number(fontSizeProp.number(node));

                if (Number.isNaN(value))
                {
                    return undefined;
                }

                // px 단위이거나 단위가 없는 경우(기본 px) 12px 미만 체크
                if (unit === "px" || unit === undefined)
                {
                    if (value > 0 && value < 12)
                    {
                        MSG_CTX.set(node, { tag: node.tagname, value: value, min: 12 });
                        return false;
                    }
                    return true;
                }

                return undefined;
            },
            message: ({ node }) =>
            {
                const ctx = MSG_CTX.get(node);
                if (!ctx) return "Component의 font-size는 12px 이상이어야 합니다.";
                return `${ctx.tag}의 font-size가 ${ctx.value}px입니다. 12px 이상으로 설정해야 합니다.`;
            },
            propname: "font-size",
        }




    }

