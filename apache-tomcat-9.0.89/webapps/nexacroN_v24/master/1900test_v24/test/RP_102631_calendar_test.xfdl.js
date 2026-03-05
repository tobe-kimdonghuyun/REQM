(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("calendar_test");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Calendar("Calendar00","139","125","384","43",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_accessibilitylabel("accessibilityaction");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","63","15","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Static00");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","466","310","84","70",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
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
        this.loadIncludeScript("RP_102631_calendar_test.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
