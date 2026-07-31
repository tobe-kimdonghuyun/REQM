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
            obj = new nexacro.Button("Button00_00","15","86","131","49",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Button00");
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
        this.registerScript("Form_Work00_copy0.xfdl", function(nexacro, system, trace, environment, application) {
        let objPortal = null;
        let eventPortal = null;
        this.Button01_onclick = function(obj,e)
        {
        	this.TextArea00.deleteText();
        	this.TextArea00.insertText(" appkey = "+this.NexacroPortal00.appkey
        							   +"\n apppath = "+ this.NexacroPortal00.apppath
        							   +"\n formurl = "+ this.NexacroPortal00.formurl
        							   +"\n automount = "+ this.NexacroPortal00.automount
        							   +"\n mainframe = "+ this.NexacroPortal00.mainframe
        							   +"\n form = "+ this.NexacroPortal00.form);
        };

        this.Button00_onclick = function(obj,e)
        {

        	var objButton00 = new Button("Button00", 30, 30, 200, 46, null, null);
        	// Add Object to Parent Form
        	this.addChild("Button00", objButton00);
        	objButton00.text = "test00";
        	objButton00.initvalueid = "iv_Button0";
        	// Show Object
        	objButton00.show();

        	var objButton01 = new Button("Button01", 250, 30, 200, 46, null, null);
        	// Add Object to Parent Form
        	this.addChild("Button01", objButton01);
        	objButton01.text = "test01";
        	objButton01.initvalueid = "iv_Button1";
        	// Show Object
        	objButton01.show();

        	var objButton02 = new Button("Button02", 480, 30, 200, 46, null, null);
        	// Add Object to Parent Form
        	this.addChild("Button02", objButton02);
        	objButton02.text = "test02";
        	objButton02.initvalueid = "iv_Button2";
        	// Show Object
        	objButton02.show();

        	var objButton03 = new Button("Button03", 710, 30, 200, 46, null, null);
        	// Add Object to Parent Form
        	this.addChild("Button03", objButton03);
        	objButton03.text = "test03";
        	objButton03.initvalueid = "iv_Button3";
        	// Show Object
        	objButton03.show();


        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00_00.addEventHandler("onclick",this.Button00_onclick,this);
        };

        this.loadIncludeScript("Form_Work00_copy0.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
    if (document.currentScript)
        document.currentScript.dispatchEvent(new CustomEvent("loadModule", { detail: fn }));

    return fn;
}
)();

//# sourceMappingURL=Form_Work00_copy0.xfdl.js.map
