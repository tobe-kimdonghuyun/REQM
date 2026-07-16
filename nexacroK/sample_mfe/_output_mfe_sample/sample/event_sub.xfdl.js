(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("event_sub");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.Button("btn00","60","44","52","48",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt00","91","24","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn01","246","19","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("btn01");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn01_00","246","19","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("btn01");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn01_01","246","19","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("btn01");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn01_02","246","19","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("btn01");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn01_03","246","19","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("btn01");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","",1280,720,this,function(p){});
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("event_sub.xfdl", function(nexacro, system, trace, environment, application) {



        this.btn01_ondblclick = function(obj,e)
        {
        	alert("dblclick");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn01.addEventHandler("ondblclick",this.btn01_ondblclick,this);
            this.btn01_00.addEventHandler("ondblclick",this.btn01_ondblclick,this);
            this.btn01_01.addEventHandler("ondblclick",this.btn01_ondblclick,this);
            this.btn01_02.addEventHandler("ondblclick",this.btn01_ondblclick,this);
            this.btn01_03.addEventHandler("ondblclick",this.btn01_ondblclick,this);
        };

        this.loadIncludeScript("event_sub.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
