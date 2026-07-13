//XJS=env1.xjs
(function()
{
    return function(path, nexacro, system, trace, environment, application)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function(nexacro, system, trace, environment, application) {
        this.fnTEST1 = function(ar)
        {
        	alert("fnTEST1:"+ar);
        }
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
