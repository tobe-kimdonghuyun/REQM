/* 플러그인 예시 (CJS version) */

const MSG_CTX = new WeakMap();

/** @type {import('./pluginapi').PluginAPI} */
module.exports = {

    /*2025.12.10 논의 결과에 특정 컴포넌트 구성에만 적용되는 규칙 plugin으로 작성*/

    "a11y-plugin/validate-imageviewer-tabstop": {
        api: (dsl, node, rv) =>
        {

            if (node.tagname !== "ImageViewer")
                return undefined;

            const isignore = dsl.ignoreCond(rv);
            if (isignore(node)) return undefined;

            const ispass = dsl.passCond(rv);
            if (ispass(node)) return true;

            const rule = dsl.and(
                dsl.has("tabstop"),
                dsl.get("tabstop").eqVal("false")
            );

            const usetabstop = !rule(node);
            if (usetabstop)
            {
                const hasonclick = dsl.has("onclick")(node);
                if (!hasonclick) return false;
                return true;
            }

            return undefined;
        },
        message: "ImageViewer 에서 tabstop=true 가 되기 위해서는 onclick handler를 정의해야 합나다.",
        propname: "tabstop",
    },

    "a11y-plugin/validate-static-clickevent": {
        api: (dsl, node, rv) =>
        {

            if (node.tagname !== "Static")
                return undefined;

            const isignore = dsl.ignoreCond(rv);
            if (isignore(node)) return undefined;

            const ispass = dsl.passCond(rv);
            if (ispass(node)) return true;

            const hasonclick = dsl.has("onclick")(node);
            return !hasonclick;
        },
        message: "Static에 onclick handler를 정의했습니다. Button으로 변경을 권장합니다.",
        propname: "onclick",
    },

    "a11y-plugin/validate-static-spchar-text": {
        api: (dsl, node, rv) =>
        {

            if (node.tagname !== "Static")
                return undefined;

            const isignore = dsl.ignoreCond(rv);
            if (isignore(node)) return undefined;

            const ispass = dsl.passCond(rv);
            if (ispass(node)) return true;

            const rule = dsl.or(
                dsl.not("accessibilityenable"),
                dsl.get("accessibilityenable").eqVal("true")
            );

            const re = /^[^\p{L}\p{N}\s]+$/u;

            const rule0 = dsl.and(
                dsl.has("text"),
                dsl.get("text").matchVal(re)
            );

            const a11yenable = rule(node);
            const sponly = rule0(node);

            return !(a11yenable && sponly);
        },
        message: "Static의 text속성에 특수문자만 존재하는 경우 accessibilityenable 를 false로 지정해야 합니다.",
        propname: "text",
    },

    "a11y-plugin/validate-comp-size": {
        api: (dsl, node, rv) =>
        {

            if (node.tagname !== "Button" &&
                node.tagname !== "Radio" &&
                node.tagname !== "CheckBox")
                return undefined;

            const isignore = dsl.ignoreCond(rv);
            if (isignore(node)) return undefined;

            const ispass = dsl.passCond(rv);
            if (ispass(node)) return true;

            if (
                (dsl.get("width").unit(node) === "px" &&
                    dsl.get("height").unit(node) === "px") ||
                (dsl.get("width").unit(node) === undefined &&
                    dsl.get("height").unit(node) === undefined)
            )
            {
                const width = Number(dsl.get("width").number(node));
                const height = Number(dsl.get("height").number(node));

                if (Number.isNaN(width) || Number.isNaN(height))
                    return undefined;

                const type = node.screentype ?? "desktop";

                if (type === "desktop")
                {
                    if (0 < width && width < 17)
                    {
                        MSG_CTX.set(node, { type, tag: node.tagname, prop: "width", min: 17 });
                        return false;
                    }
                    if (0 < height && height < 17)
                    {
                        MSG_CTX.set(node, { type, tag: node.tagname, prop: "height", min: 24 });
                        return false;
                    }
                    return true;
                } else
                {
                    if (0 < width && width < 24)
                    {
                        MSG_CTX.set(node, { type, tag: node.tagname, prop: "width", min: 24 });
                        return false;
                    }
                    if (0 < height && height < 24)
                    {
                        MSG_CTX.set(node, { type, tag: node.tagname, prop: "height", min: 24 });
                        return false;
                    }
                    return true;
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
    }
};
