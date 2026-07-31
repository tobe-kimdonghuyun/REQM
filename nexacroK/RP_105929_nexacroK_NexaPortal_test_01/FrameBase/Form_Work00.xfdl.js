(function()
{
    const fn = function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("Form_Work");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.NexacroPortal("NexacroPortal00","41","150","1200","523",null,null,null,null,null,null,this);
            obj.set_appkey("DynamicSample");
            obj.set_apppath("http://172.10.12.45:7070/nexacroK/DynamicSample");
            obj.set_automount("true");
            obj.set_formurl("VisibleComp::ButtonSample.xfdl");
            obj.set_taborder("0");
            obj.getSetter("text").set("Button00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","41","79","769","61",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("<initvalueid id=\"iv_Button0\" background=\"red\" color=\"blue\"/><initvalueid id=\"iv_Button1\" background=\"green\" color=\"red\"/>\r\n    <initvalueid id=\"iv_Button2\" background=\"pink\" color=\"black\"/><initvalueid id=\"iv_Button3\" background=\"yellow\" color=\"green\"/>");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","Desktop_screen",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Work00.xfdl", function(nexacro, system, trace, environment, application) {

        this.Form_Work_onload = function(obj,e)
        {
        	var objButton00 = new Button("Button00", 30, 30, 200, 46, null, null);
        	// Add Object to Parent Form
        	this.addChild("Button00", objButton00);
        	objButton00.text = "iv_Button0_Button00";
        	objButton00.initvalueid = "iv_Button0";
        	// Show Object
        	objButton00.show();

        	var objButton01 = new Button("Button01", 250, 30, 200, 46, null, null);
        	// Add Object to Parent Form
        	this.addChild("Button01", objButton01);
        	objButton01.text = "iv_Button1_Button01";
        	objButton01.initvalueid = "iv_Button1";
        	// Show Object
        	objButton01.show();

        	var objButton02 = new Button("Button02", 480, 30, 200, 46, null, null);
        	// Add Object to Parent Form
        	this.addChild("Button02", objButton02);
        	objButton02.text = "iv_Button2_Button02";
        	objButton02.initvalueid = "iv_Button2";
        	// Show Object
        	objButton02.show();

        	var objButton03 = new Button("Button03", 710, 30, 200, 46, null, null);
        	// Add Object to Parent Form
        	this.addChild("Button03", objButton03);
        	objButton03.text = "iv_Button3_Button03";
        	objButton03.initvalueid = "iv_Button3";
        	// Show Object
        	objButton03.show();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Work_onload,this);
            this.NexacroPortal00.addEventHandler("onerror",this.NexacroPortal00_onerror,this);
            this.NexacroPortal00.addEventHandler("onmount",this.NexacroPortal00_onmount,this);
            this.NexacroPortal00.addEventHandler("onunmount",this.NexacroPortal00_onunmount,this);
        };

        this.loadIncludeScript("Form_Work00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
    if (document.currentScript)
        document.currentScript.dispatchEvent(new CustomEvent("loadModule", { detail: fn }));

    return fn;
}
)();

//# sourceMappingURL=Form_Work00.xfdl.js.map
