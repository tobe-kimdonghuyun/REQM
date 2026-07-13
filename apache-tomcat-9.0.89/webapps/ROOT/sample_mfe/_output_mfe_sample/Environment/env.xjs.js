//XJS=env.xjs
(function()
{
    return function(path, nexacro, system, trace, environment, application)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function(nexacro, system, trace, environment, application) {
        this.fnTEST = function(ar)
        {
        	alert("fnTEST:"+ar);
        }
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
