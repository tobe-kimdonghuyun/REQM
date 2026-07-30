(function()
{
    const fn = function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("test_00");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(960,430);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.Button("Button00","30","15","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01",null,"35","120","50","30",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button02","390","180","120",null,null,"200",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Button02");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button03","30",null,"120","50",null,"30",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Button03");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button04",null,null,"120","50","7","22",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Button04");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","217","25","547","70",null,null,null,null,null,null,this);
            obj.set_font("36px/normal \"Malgun Gothic\"");
            obj.set_taborder("5");
            obj.set_text("nexacroK_mfe_sub3_test_00.xfdl");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","",960,430,this,function(p){});
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

        this.loadIncludeScript("test_00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
    if (document.currentScript)
        document.currentScript.dispatchEvent(new CustomEvent("loadModule", { detail: fn }));

    return fn;
}
)();
