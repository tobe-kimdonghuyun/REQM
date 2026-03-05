(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ColumnAndLine");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(768,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new BasicChart("BasicChart00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.getSetter("taborder").set("0");
            obj.getSetter("binddataset").set("gdsRainfall");
            obj.getSetter("categorycolumn").set("bind:name");
            obj.getSetter("bargrouping").set("false");
            obj.getSetter("enableanimation").set("true");
            obj.getSetter("background").set("black");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",768,500,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("bar_round.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
