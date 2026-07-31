(function()
{
    const fn = function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("etc");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.Static("Static00","34","10","232","65",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("nexacro.open에서 initvalueid확인");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static01","281","10","859","72",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("<initvalueid id=\"iv_Button0\" accessibilityenable=\"false\" defaultbutton=\"true\" background=\"red\" accessibilitylabel=\"initvalue세팅 00\" color=\"white\"/>\r\n    <initvalueid id=\"iv_Button1\" background=\"green\" accessibilityenable=\"true\" accessibilitylabel=\"initvalue세팅 01\" color=\"white\"/>");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("etc.xfdl", function(nexacro, system, trace, environment, application) {
        //
        // this.etc_onload = function(obj:nexacro.Form,e:nexacro.LoadEventInfo)
        // {
        // 		var objButton_00 = new Button("Button_00", 50, 150, 200, 46, null, null);
        // 	// Add Object to Parent Form
        // 	this.addChild("Button_00", objButton_00);
        // 	objButton_00.text = "iv_Button0";
        // 	objButton_00.initvalueid = "iv_Button0";
        // 	// Show Object
        // 	objButton_00.show();
        //
        // 	var objButton_01 = new Button("Button_01", 250, 150, 200, 46, null, null);
        // 	// Add Object to Parent Form
        // 	this.addChild("Button_01", objButton_01);
        // 	objButton_01.text = "iv_Button1";
        // 	objButton_01.initvalueid = "iv_Button1";
        // 	// Show Object
        // 	objButton_01.show();
        //
        // };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.etc_onload,this);
        };

        this.loadIncludeScript("etc.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
    if (document.currentScript)
        document.currentScript.dispatchEvent(new CustomEvent("loadModule", { detail: fn }));

    return fn;
}
)();

//# sourceMappingURL=etc.xfdl.js.map
