//XJS=dummy.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        "use strict";

        this.fnFormOnload = function()
        {
        	a ="ccc"
        	trace("====dummy.xjs===");
        };
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
