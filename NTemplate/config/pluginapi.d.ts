

type Prop = { key: string | RegExp; value: string | RegExp };
type PropGroup = Prop | Prop[];

type ignore = {
    anyOftypes: Array<string>; // Component type
    anyOfprops: PropGroup
}

type passtarget = {
    anyOftypes: Array<string>; // Component type
    anyOfprops: PropGroup
}
type External = {
    description?: string;
    ignores?: ignore | Array<ignore>;
    passconds?: passtarget | Array<passtarget>;
    subrules?: Record<string, RuleValue>;

}
type JsTypeName =
    | "number" | "string" | "boolean" | "undefined"
    | "object" | "symbol" | "bigint" | "function";

type CssUnit =
    | "px" | "pt" | "pc" | "in" | "cm" | "mm" | "q"
    | "em" | "rem" | "%" | "ex" | "ch" | "lh" | "rlh"
    | "vw" | "vh" | "vmin" | "vmax"
    | "svw" | "svh" | "lvw" | "lvh" | "dvw" | "dvh"
    | "s" | "ms"
    | "deg" | "rad" | "grad" | "turn"
    | "dpi" | "dpcm" | "dppx"
    | "fr";
export type RuleValue = "on" | "off" | External
export type ObjectParseResult =
    {
        layertype: string;
        layoutname?: string;
        layoutlv: string;
        screenid?: string;
        screentype?: string;
        tagname: string;
        id: string;
        csacade_id?: string;
        meta: Range | undefined;
        metainfo?: any;
        formats?: Node[];
        props: Record<string, { value: string, prop_meta: any }>;
        file: {
            path: string;
            ext: string;
        };
        validate?: any[]

    }


export type PluginAPI =
    Record<string, {
        api:
        (node: {
            tagname: string,
            id: string,
            props: Record<string, { value: string, meta: any }>
            file: {
                ext: string
            }
        }, rv: RuleValue) => boolean, message: string, propname?: string, type?: string
    }>;


export type Cond = (node: ObjectParseResult) => boolean;
interface IfBuilder
{
    then(next: Cond): Cond;
    unless(next: Cond): Cond;
}
export interface GetBuilder
{

    (node: ObjectParseResult): boolean;

    matchVal(regex: RegExp): Cond;
    inVal(values: string[]): Cond;
    typeVal(t: JsTypeName): Cond;
    unitVal(unit: CssUnit): Cond;
    gteVal(num: number): Cond;
    lteVal(num: number): Cond;
    eqVal(value: any): Cond;
    eqNum(num: number): Cond;
    lteNum(num: number): Cond;
    gteNum(num: number): Cond;
    containsVal(str: string): Cond;
    isToken(tokenSet: string[]): Cond;
    value(node: ObjectParseResult): any;
    number(node: ObjectParseResult): number | undefined;
    unit(node: ObjectParseResult): string | undefined;
}
export type DSL =
    {
        ignoreCond(
            rv: "on" | "off" | {
                description?: string;
                ignores: {
                    anyOftypes: Array<string>; // Component type
                    anyOfProps: Array<{ key: string | RegExp; value: string | RegExp }>
                } | Array<{
                    anyOftypes: Array<string>; // Component type
                    anyOfProps: Array<{ key: string | RegExp; value: string | RegExp }>
                }>

            }
        ): Cond;

        onlyForExts(exts: string[]): Cond;
        onlyIfTags(tags: string[]): Cond;
        notForTags(tags: string[]): (node: ObjectParseResult) => boolean;
        has(attrName: string): (node: ObjectParseResult) => boolean;
        not(attrName: string): (node: ObjectParseResult) => boolean;
        getValue(attrName: string): any;
        get(attrName: string): GetBuilder;
        anyAttrMatch(regex: RegExp): (node: ObjectParseResult) => boolean;
        hasAttrPrefix(prefix: string): Cond
        and(...conds: Cond[]): Cond
        or(...conds: Cond[]): Cond
        xor(a: Cond, b: Cond): Cond
        ifCond(cond: Cond): IfBuilder

    }

