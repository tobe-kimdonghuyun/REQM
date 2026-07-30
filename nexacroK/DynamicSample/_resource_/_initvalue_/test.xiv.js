(function()
{
    const fn = function(nexacro, system, trace, environment, application)
    {
        const init = {};
        init.Buttoniv_Button0 = function(obj)
        {
        	obj.set_accessibilityenable("false");
        	obj.set_accessibilitylabel("initvalue세팅 00");
        	obj.set_background("red");
        	obj.set_color("white");
        	obj.set_defaultbutton("true");
        };

        init.Buttoniv_Button1 = function(obj)
        {
        	obj.set_accessibilityenable("true");
        	obj.set_accessibilitylabel("initvalue세팅 01");
        	obj.set_background("green");
        	obj.set_color("white");
        };

        environment._setInitValues(Object.freeze(init));   
	};
        if (document.currentScript)
        document.currentScript.dispatchEvent(new CustomEvent("loadModule", { detail: fn }));

    return fn;
}
)();
