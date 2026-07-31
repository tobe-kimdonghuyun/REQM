(function()
{
    const fn = function(nexacro, system, trace, environment, application)
    {
        const init = {};
        init.Buttoniv_Button0 = function(obj)
        {
        	obj.set_background("red");
        	obj.set_color("blue");
        };

        init.Buttoniv_Button1 = function(obj)
        {
        	obj.set_background("green");
        	obj.set_color("red");
        };

        init.Buttoniv_Button2 = function(obj)
        {
        	obj.set_background("pink");
        	obj.set_color("black");
        };

        init.Buttoniv_Button3 = function(obj)
        {
        	obj.set_background("yellow");
        	obj.set_color("green");
        };

        environment._setInitValues(Object.freeze(init));   
	};
        if (document.currentScript)
        document.currentScript.dispatchEvent(new CustomEvent("loadModule", { detail: fn }));

    return fn;
}
)();
