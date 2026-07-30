(function()
{
    const fn = function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_background("lightsteelblue");
            this.set_name("Form_Work");
            this.set_titletext("Form_Work");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1160,200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.Static("Static00","36","4","334","70",null,null,null,null,null,null,this);
            obj.set_font("36px/normal \"Malgun Gothic\"");
            obj.set_taborder("0");
            obj.set_text("nexacroK_mfe_sub3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00_00","390","4","750","70",null,null,null,null,null,null,this);
            obj.set_font("36px/normal \"Malgun Gothic\"");
            obj.set_taborder("1");
            obj.set_text("nexacroK_mfe_sub3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00","15","99","125","81",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("main_00.xfdl");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01","150","100","120","80",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("main_01.xfdl");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_loadstyle","280","100","250","80",null,null,null,null,null,null,this);
            obj.set_hotkey("ALT+SHIFT+N");
            obj.set_taborder("4");
            obj.set_text("nexacro.loadStyle( \"xcssrc::test_678.xcss\" ); ");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_showmodal","540","102","110","75",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("showmodal");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_open2","660","100","110","75",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("nexacro.open");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_open2_00","790","100","260","75",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("nexacro.setWheelZoom( objFrame, 150 )");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","Desktop_screen",1160,200,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_TOP.xfdl", function(nexacro, system, trace, environment, application) {

        this.Form_Work_onload = function(obj,e)
        {
        	this.Static00_00.text ="tabkeycirculation = "+ nexacro.getEnvironment().tabkeycirculation;
        };

        this.btn_loadstyle_onclick = function(obj,e)
        {
        	nexacro.loadStyle( "xcssrc::test_678.xcss" );
        };

        this.btn_showmodal_onclick = function(obj,e)
        {
        	var objFrame = new nexacro.ChildFrame();
        	var objParentFrame = this.getOwnerFrame();

        	objFrame.init( "modal00", 0, 0, 500, 500 );
        	objFrame.formurl = "FrameBase::sub_form.xfdl";

        	var ret1 = objFrame.showModal( objParentFrame, {a:'aaa', b:'bbb'}, this )
        	.then((result1) => {
        	  trace("Closed showmodal with args: "+ " return1 = " + ret1 + ", result1 = " + result1.arg);


        	}).catch((err) => {
        		trace("Failed to open popup promise_open_test1 : " + err.message + " return = " + ret1);
        	});
        };

        this.btn_open2_onclick = function(obj,e)
        {

        	let ret1 = nexacro.open("promise_open_test1","FrameBase::sub_form.xfdl", this.getOwnerFrame(), { user:"이몽룡" }, "resizable=false showstatusbar=true", 150, 150, "promise")
        	.then((result1) => {
        	  trace("Closed popup with args: "+ " return1 = " + ret1 + ", result1 = " + result1);
        	 trace("nexacro.open  : "+result1);

        	}).catch((err) => {
        		trace("Failed to open popup promise_open_test1 : " + err.message + " return = " + ret1);
        	});
        };

        this.btn_open2_00_onclick = function(obj,e)
        {
        	var objFrame = this.getOwnerFrame();
        	nexacro.setWheelZoom( objFrame, 150 );
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Work_onload,this);
            this.btn_loadstyle.addEventHandler("onclick",this.btn_loadstyle_onclick,this);
            this.btn_showmodal.addEventHandler("onclick",this.btn_showmodal_onclick,this);
            this.btn_open2.addEventHandler("onclick",this.btn_open2_onclick,this);
            this.btn_open2_00.addEventHandler("onclick",this.btn_open2_00_onclick,this);
        };

        this.loadIncludeScript("Form_TOP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
    if (document.currentScript)
        document.currentScript.dispatchEvent(new CustomEvent("loadModule", { detail: fn }));

    return fn;
}
)();

//# sourceMappingURL=Form_TOP.xfdl.js.map
