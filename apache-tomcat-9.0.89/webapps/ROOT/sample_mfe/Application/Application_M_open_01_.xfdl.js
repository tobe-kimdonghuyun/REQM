(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Application_M_open_01");
            this.set_titletext("Application_M_open_01");
            this.getSetter("classname").set("23711_Buttoncssimage_01");
            this.getSetter("inheritanceid").set("");
            this.getSetter("position").set("absolute");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(310,450);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.Static("Static01","3","39","301","37",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_text("[Application_M_open_01]");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_application_menu","109","2","92","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("21");
            obj.set_text("◀ChildFrame");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_main","12","2","92","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("22");
            obj.set_text("◀◀Main");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_showModeless","13","84","124","50",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("23");
            obj.set_text("Open()");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("Edit00","13","152","124","39",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("24");
            obj.set_value("Open");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("txt_result","6","314","298","129",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("25");
            obj.set_value("//");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_clear","231","273","72","35",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("26");
            obj.set_text("clear");
            this.addChild(obj.name, obj);

            obj = new nexacro.CheckBox("CheckBox00","17","212","101","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_text("CheckBox00");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","",310,450,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Application_M_open_01_.xfdl", function(nexacro, system, trace, environment, application) {

        this.btn_main_onclick = function(obj,  e)
        {
        	this.getOwnerFrame().set_formurl("Base::Main.xfdl");
        }

        this.btn_application_menu_onclick = function(obj,  e)
        {
        	this.getOwnerFrame().set_formurl("Sub_menu::ChildFrame_menu1.xfdl");
        }

        //showModal
        this.btn_showModal_onclick = function(obj,  e)
        {
        	//var ret = application.open("Open", "Base::Application_M_open_02.xfdl", this, {arg1:'aaa', arg2:this.Edit00.value, arg3:this.CheckBox00.value}, "showtitlebar=true showstatusbar=false", 100, 100);
        	var ret = nexacro.open("Open", "Application::Application_M_open_02.xfdl", this.getOwnerFrame(), {arg1:'aaa', arg2:this.Edit00.value, arg3:this.CheckBox00.value}, "showtitlebar=true showstatusbar=false", 100, 100);
        	this.txt_result.set_value(this.txt_result.value +"\n"+ "Open return :: " + ret);
        	//this.Edit00.set_value("showModeless");
        }

        this.btn_clear_onclick = function(obj,  e)
        {
        	this.txt_result.set_value("");
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.test_grid_setFormatColProperty_onload,this);
            this.btn_application_menu.addEventHandler("onclick",this.btn_application_menu_onclick,this);
            this.btn_main.addEventHandler("onclick",this.btn_main_onclick,this);
            this.btn_showModeless.addEventHandler("onclick",this.btn_showModal_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
        };

        this.loadIncludeScript("Application_M_open_01_.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
