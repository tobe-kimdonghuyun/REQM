(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Application_P_locale_01");
            this.set_titletext("Application_P_locale_01");
            this.getSetter("classname").set("23711_Buttoncssimage_01");
            this.getSetter("inheritanceid").set("");
            this.getSetter("position").set("absolute");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(440,560);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.Static("Static01","3","39","301","37",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_text("[Application_P_locale_01] ");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_application_menu","109","2","92","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("21");
            obj.set_text("◀Application");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_main","12","2","92","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("22");
            obj.set_text("◀◀Main");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static03","10","95","62","30",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_text("locale ::");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01","204","91","41","35",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("25");
            obj.set_text("set");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("txt_result","4","236","301","151",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("26");
            obj.set_value("//");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00","245","195","60","37",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("27");
            obj.set_text("clear");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button02","252","91","41","35",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("25");
            obj.set_text("get");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("Edit00","66","94","117","28",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_value("ko_KR");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","",440,560,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Application_P_locale_01.xfdl", function(nexacro, system, trace, environment, application) {

        this.btn_main_onclick = function(obj,  e)
        {
        	this.getOwnerFrame().set_formurl("Base::Main.xfdl");
        }

        this.btn_application_menu_onclick = function(obj,  e)
        {
        	this.getOwnerFrame().set_formurl("Sub_menu::Application_menu3.xfdl");
        }

        this.Button00_onclick = function(obj,  e)
        {
        	this.txt_result.set_value("");
        }

        this.Button01_onclick = function(obj,  e)
        {
        	application.set_locale(this.Edit00.value);
        	this.txt_result.set_value(this.txt_result.value + "\nlocale set : " + application.locale);
        }

        this.Button02_onclick = function(obj,e)
        {
        	this.txt_result.set_value(this.txt_result.value + "\nlocale get : " + application.locale);

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.test_grid_setFormatColProperty_onload,this);
            this.btn_application_menu.addEventHandler("onclick",this.btn_application_menu_onclick,this);
            this.btn_main.addEventHandler("onclick",this.btn_main_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
        };

        this.loadIncludeScript("Application_P_locale_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
