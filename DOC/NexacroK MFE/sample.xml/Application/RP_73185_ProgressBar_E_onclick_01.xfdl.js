(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ProgressBar_E_onclick_01");
            this.set_titletext("ProgressBar_E_onclick_01");
            this.getSetter("classname").set("23711_Buttoncssimage_01");
            this.getSetter("inheritanceid").set("");
            this.getSetter("position").set("absolute");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(440,560);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.Static("Static01","3","31","301","37",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_text("[ProgressBar_E_onclick_01] ");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_button_menu","93","1","107","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("21");
            obj.set_text("◀ProgressBar");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_main","8","1","81","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("30");
            obj.set_text("◀◀Main");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("txt_result","6","280","298","163",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_value("//");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_clear","241","243","63","35",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_text("clear");
            this.addChild(obj.name, obj);

            obj = new nexacro.Div("Div00","9","63","290","65",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new nexacro.ProgressBar("ProgressBar00","54","13","176","37",null,null,null,null,null,null,this.Div00.form);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("0");
            obj.set_text("ProgressBar00");
            obj.set_min("0");
            obj.set_max("100");
            obj.set_pos("50");
            this.Div00.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new nexacro.Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

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
        this.registerScript("RP_73185_ProgressBar_E_onclick_01.xfdl", function(nexacro, system, trace, environment, application) {
        this.btn_main_onclick = function(obj,  e)
        {
        	this.getOwnerFrame().set_formurl("Main_menu::Main.xfdl");
        }

        this.btn_button_menu_onclick = function(obj,  e)
        {
        	this.getOwnerFrame().set_formurl("Sub_menu::ProgressBar_menu4.xfdl");
        }

        this.btn_clear_onclick = function(obj,  e)
        {
        	this.txt_result.set_value("//");
        }

        this.Div00_ProgressBar00_onclick = function(obj,e)
        {
        	this.txt_result.set_value(this.txt_result.value + "=====  onclick Event start  =====\n");
        	this.txt_result.set_value(this.txt_result.value + "e.altKey : " + e.altkey + "\n");
        	this.txt_result.set_value(this.txt_result.value + "e.button : " + e.button + "\n");
        	this.txt_result.set_value(this.txt_result.value + "e.canvasX : " + e.canvasx + "\n");
        	this.txt_result.set_value(this.txt_result.value + "e.canvasY : " + e.canvasy + "\n");
        	this.txt_result.set_value(this.txt_result.value + "e.clientX : " + e.clientx + "\n");
        	this.txt_result.set_value(this.txt_result.value + "e.clientY : " + e.clienty + "\n");
        	this.txt_result.set_value(this.txt_result.value + "e.ctrlKey : " + e.ctrlKey + "\n");
        	this.txt_result.set_value(this.txt_result.value + "e.eventid : " + e.eventid + "\n");
        	this.txt_result.set_value(this.txt_result.value + "e.fromobject : " + e.fromobject + "\n");
        	this.txt_result.set_value(this.txt_result.value + "e.fromreferenceobfect: " + e.fromreferenceobject + "\n");
        	this.txt_result.set_value(this.txt_result.value + "e.screenX : " + e.screenx + "\n");
        	this.txt_result.set_value(this.txt_result.value + "e.screenY : " + e.screeny + "\n");
        	this.txt_result.set_value(this.txt_result.value + "e.shiftKey : " + e.shiftkey + "\n");
        	this.txt_result.set_value(this.txt_result.value + "====== onclick Event end   =====\n\n");
        };

        this.Div00_onclick = function(obj,e)
        {
        	this.txt_result.set_value(this.txt_result.value + "== Div00_onclick Event start ==\n");
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static01.addEventHandler("onclick",this.Static01_onclick,this);
            this.btn_button_menu.addEventHandler("onclick",this.btn_button_menu_onclick,this);
            this.btn_main.addEventHandler("onclick",this.btn_main_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.Div00.addEventHandler("onclick",this.Div00_onclick,this);
            this.Div00.form.ProgressBar00.addEventHandler("onclick",this.Div00_ProgressBar00_onclick,this);
            this.Div00.form.ProgressBar00.addEventHandler("onlbuttondown",this.Div00_ProgressBar00_onlbuttondown,this);
        };

        this.loadIncludeScript("RP_73185_ProgressBar_E_onclick_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
