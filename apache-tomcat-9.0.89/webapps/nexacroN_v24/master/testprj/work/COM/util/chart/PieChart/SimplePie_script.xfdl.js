(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SimplePie");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(768,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new PieChart("PieChart00","0","0",null,null,"0","10",null,null,null,null,this);
            obj.getSetter("taborder").set("0");
            obj.getSetter("binddataset").set("gdsCountryLitres");
            obj.getSetter("categorycolumn").set("bind:country");
            obj.getSetter("enableanimation").set("false");
            obj.getSetter("ondrawend").set("PieChart00_ondrawend");
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
        this.registerScript("SimplePie_script.xfdl", function() {


        this.PieChart00_ondrawend = function(obj,e)
        {
        	var pos = obj.getSeriesPointPos(0, 1);
        	if(!pos) return;

        	var centerx = pos.centerx;
        	var centery = pos.centery;
        	var radius = pos.radius * 0.8;

        	var item = obj.addUserControl("itemarccenter_0", "arc");

        	item.setCenter(new nexacro.Point(centerx, centery));
        	item.set_width(radius);
        	item.set_height(radius);
        	item.set_fillstyle("#dddddd");
        	item.set_opacity(0.4);
        	item.set_shadow("-2px -2px -5px #000000");
        	obj.userControlDraw();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("SimplePie_script.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
