//XJS=test.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {

        this.FOO = function ()
        {
        	alert('foo');
        }
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
