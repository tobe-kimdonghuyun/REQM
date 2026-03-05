(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work_workcommon");
            this.set_titletext("브레드크럼");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,87);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00","2","23","43","26",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("홈");
            obj.set_cssclass("btn_WF_Home");
            obj.set_accessibilityrole("link");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","Button00:0","23","24","26",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Depnext");
            obj.set_text("1Depth");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01","Static01_01:0","23","58","26",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("1Depth");
            obj.set_cssclass("btn_WF_Breadcrumb");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("link");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","Button00_01:0","23","24","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Depnext");
            obj.set_accessibilityenable("false");
            obj.set_text("2Depth");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_02","Static01_00_00:0","23","58","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("2Depth");
            obj.set_cssclass("btn_WF_Breadcrumb");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("link");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",888,87,this,function(p){});
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
        this.loadIncludeScript("Form_Work_workcommon.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
