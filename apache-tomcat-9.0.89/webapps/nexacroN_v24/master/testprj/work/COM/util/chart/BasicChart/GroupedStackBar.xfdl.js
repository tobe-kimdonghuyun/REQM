(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GroupedStackBar");
            this.set_titletext("StackbarGroup");
            if (Form == this.constructor)
            {
                this._setFormPosition(768,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new BasicChart("BasicChart00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.getSetter("taborder").set("0");
            obj.getSetter("binddataset").set("gdsCostProfit");
            obj.getSetter("categorycolumn").set("bind:category");
            obj.getSetter("rotateaxis").set("true");
            obj.getSetter("enableanimation").set("false");
            obj.getSetter("onaxisclick").set("BasicChart00_onaxisclick");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",768,480,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("GroupedStackBar.xfdl", function() {

        this.BasicChart00_onaxisclick = function(obj,e)
        {
        	if(e.fromreferenceobject instanceof nexacro.ChartAxisControl)
        	{
        		var index = this.fn_getAxisPos(e, e.fromreferenceobject);
        		if(index >= 0)
        		{
        			trace(index);
        		}
        	}
        };

        this.fn_getAxisPos = function(e, axis)
        {
        	var ticks = axis._ticks;
        	if(!ticks || ticks.length == 0) return -1;

        	var clickX = e.canvasx;
        	var clickY = e.canvasy;

        	var tick, labelElement, bounds;
        	for(var i=0;i<ticks.length;i++)
        	{
        		tick = ticks[i];
        		if(tick.labelElement)
        		{
        			bounds = tick.labelElement._bounds;
        			if(	(clickX >= bounds.left && clickX <= bounds.right) &&
        				(clickY >= bounds.top && clickY <= bounds.bottom) )
        			{
        				return i;
        			}
        		}
        	}
        	return  -1;
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("GroupedStackBar.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
