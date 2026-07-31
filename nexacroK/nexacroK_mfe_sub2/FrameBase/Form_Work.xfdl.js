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
                this._setFormPosition(700,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.Static("Static00","36","4","518","70",null,null,null,null,null,null,this);
            obj.set_font("36px/normal \"Malgun Gothic\"");
            obj.set_taborder("3");
            obj.set_text("nexacroK_mfe_sub2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00","55","84","215","56",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text(" nexacro.getEnvironment().property");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("TextArea00","55","272","396","298",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01","274","81","206","62",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text(" nexacro.getApplication().property");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button02","56","148","124","59",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("nexacro.setTimer");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_showmodal","192","148","98","59",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("showmodal");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button03","297","149","173","58",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("document.getElementByID()");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button04","60","213","129","55",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("nexacro.open");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button05","215","216","140","53",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("getPopupFrames");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","Desktop_screen_sub2",700,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Work.xfdl", function(nexacro, system, trace, environment, application) {

        this.Button00_onclick = function(obj,e)
        {
        	this.TextArea00.value="";
        	let env_all = nexacro.getEnvironment();

        	if(env_all == null){
        		this.TextArea00.insertText("env_all = null");
        		return false;
        	}
        /*for( i in env_all)
        	{
        		if (typeof env_all[i] === "function") continue;
        		trace(i + " :: " + env_all[i]);
        	}
        	*/

        	this.TextArea00.insertText(" enableinspector  = "+env_all.enableinspector+
        								"\n enabletouchevent = "+env_all.enabletouchevent+
        								"\n tabkeycirculation = "+env_all.tabkeycirculation+
        								"\n filesecurelevel = "+env_all.filesecurelevel+
        								"\n networksecurelevel = "+env_all.networksecurelevel+
        								"\n datatyperule = "+env_all.datatyperule+
        								"\n Variables = "+ nexacro.getEnvironmentVariable('Variable0')+
        								"\n Cookies = "+ nexacro.getCookieVariable('Cookie0')+
        								"\n HeaderVariable = "+ nexacro.getHTTPHeaderVariable('header0'));

         };
        this.Button01_onclick = function(obj,e)
        {
        	this.TextArea00.value="";
        	let app_all = nexacro.getApplication();

        	if(app_all == null){
        		this.TextArea00.insertText("app_all = null");
        		return false;
        	}
        	this.TextArea00.insertText(" id = "+app_all.id+
        								"\n screenid = "+app_all.screenid+
        								"\n Dataset = "+app_all.gds_nexacroK_mfe_sub2.id+", rowcount = "+app_all.gds_nexacroK_mfe_sub2.getRowCount()+
        								"\n app_variables = "+app_all.app_variable);
        };

        this.Button02_onclick = function(obj,e)
        {
        	nexacro.setTimeout(obj, this.onceCallback, 1000);

        };
        cnt = 0;
        this.onceCallback = function()
        {

        	alert("onceCallback");
        }

        this.btn_showmodal_onclick = function(obj,e)
        {
        	var objFrame = new nexacro.ChildFrame();
        	var objParentFrame = this.getOwnerFrame();

        	objFrame.init( "modal00", 0, 0, 500, 500 );
        	objFrame.formurl = "FrameBase::sub_form.xfdl";
        	this.TextArea00.value="";
        	var ret1 = objFrame.showModal( objParentFrame, {a:'aaa', b:'bbb'}, this )
        	.then((result1) => {
        	  trace("Closed showmodal with args: "+ " return1 = " + ret1 + ", result1 = " + result1.arg);
        	  this.TextArea00.insertText("showmodal :" +result1.arg);

        	}).catch((err) => {
        		trace("Failed to open popup promise_open_test1 : " + err.message + " return = " + ret1);
        	});
        };

        this.Button03_onclick = function(obj,e)
        {
        	document.getElementById("txt1").value = "넥사크로에서 세팅";
        	window.myData = "myData 저장할 값";
        	window.myObj  = { name: "홍길동", age: 30 };
        };

        this.Button04_onclick = function(obj,e)
        {
        	this.TextArea00.value="";
        	let ret1 = nexacro.open("promise_open_test1","FrameBase::sub_form.xfdl", this.getOwnerFrame(), { user:"이몽룡" }, "resizable=false showstatusbar=true", 150, 150, "promise")
        	.then((result1) => {
        	  trace("Closed popup with args: "+ " return1 = " + ret1 + ", result1 = " + result1);
        	  this.TextArea00.insertText("nexacro.open  : "+result1);

        	}).catch((err) => {
        		trace("Failed to open popup promise_open_test1 : " + err.message + " return = " + ret1);
        	});
        };

        this.Button05_onclick = function(obj,e)
        {
        		this.TextArea00.deleteText();
        	this.TextArea00.insertText("nexacro.getPopupFrames() = "+nexacro.getPopupFrames()+"\n");
        	this.TextArea00.insertText("nexacro.getPopupFrames(this.getOwnerFrame()) = "+nexacro.getPopupFrames(this.getOwnerFrame())+"\n");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.btn_showmodal.addEventHandler("onclick",this.btn_showmodal_onclick,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
            this.Button04.addEventHandler("onclick",this.Button04_onclick,this);
            this.Button05.addEventHandler("onclick",this.Button05_onclick,this);
        };

        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
    if (document.currentScript)
        document.currentScript.dispatchEvent(new CustomEvent("loadModule", { detail: fn }));

    return fn;
}
)();

//# sourceMappingURL=Form_Work.xfdl.js.map
