(function()
{
    const fn = function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_background("darkseagreen");
            this.set_name("Form_Work");
            this.set_titletext("Form_Work");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(700,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.Button("btn_open","24","92","178","75",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("this.setTimer");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_alert","212","92","178","75",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("this.alert");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_transaction","410","92","178","75",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("this.transaction");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","36","4","518","70",null,null,null,null,null,null,this);
            obj.set_font("36px/normal \"Malgun Gothic\"");
            obj.set_taborder("3");
            obj.set_text("nexacroK_mfe_sub1");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("TextArea00","25","522","545","218",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_trackpopup","24","177","178","75",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("trackpopup");
            this.addChild(obj.name, obj);

            obj = new nexacro.PopupDiv("PopupDiv00","696","168","284","212",null,null,null,null,null,null,this);
            obj.set_background("red");
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00","67","64","110","71",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_open2","212","177","178","75",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("nexacro.open");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_showmodal","410","177","178","75",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("showmodal");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_trackpopupByComponent","24","260","178","75",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("trackpopupByComponent");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_awaitTR","212","259","176","75",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("await transaction");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_confirm","410","259","176","75",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("this.confirm");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_print","24","343","178","75",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("this.print");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00","214","346","171","73",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("setWheelZoom");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01","405","341","175","77",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("getEnviorment");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button02","25","436","175","70",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("getApplication");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button03","213","435","175","73",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("getPopupFrames");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this.PopupDiv00.form
            obj = new nexacro.Layout("default","",0,0,this.PopupDiv00.form,function(p){});
            this.PopupDiv00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new nexacro.Layout("default","Desktop_screen_sub1",700,720,this,function(p){});
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
        		var objFrame = this.getOwnerFrame();
        	nexacro.setWheelZoom( objFrame, 150 );
        };


        this.Form_Work_ontimer = function(obj,e)
        {
        	if(e.timerid == "0")
        	{
        		this.killTimer(0);
        		this.TextArea00.value="";
        		this.TextArea00.insertText("nexacroK_mfe_sub1 form ontimer이벤트");
        	}
        };

        this.btn_alert_onclick = function(obj,e)
        {
        	this.alert("nexacroK_mfe_sub1 form alert 테스트");

        };

        this.btn_transaction_onclick = function(obj,e)
        {
        	let sArgs = "userid="+ "blue ";
        	sArgs += " username="+ "테스트";
        	var svrid = "MyService01"
        	const req = this.transaction(svrid,"http://172.10.12.45:9090/service_jsp/test_100_XML.jsp","input1=Dataset02","Dataset03=output",sArgs, "", false);
        	//const req = this.transaction(svrid,"http://172.10.12.45:7070/jsp/test_100_XML.jsp","input1=Dataset02","Dataset03=output",sArgs, "", false);
        	trace(req);
        	// 결과 처리
        	this.TextArea00.value="";
        	if(req)
        	{
        		req.then(res => { //message
        			this.callbackFunction(svrid, res[0],res[1]);
        		})
        			.catch(err => this.TextArea00.insertText("실패:", err.errorMsg));
        	}
        };
        this.callbackFunction = function(svrid, errorcode, errormsg)
        {
        	this.TextArea00.value="";
        	this.TextArea00.insertText("nexacroK_mfe_sub1 transaction promise 테스트 svrid = ["+svrid+"], errorcode = ["+errorcode+", errormsg = ["+errormsg+"]");
        }

        this.btn_trackpopup_onclick = function(obj,e)
        {

        	this.TextArea00.value="";
        	let _this = this;
        	let req = this.PopupDiv00.trackPopup( 10,10, 200, 200)
        	.then((result1) =>{
        		//alert('First popup closed');
        			this.TextArea00.insertText("PopupDiv00.trackPopup : "+result1);
        		})
        		.catch(function(error){console.log("error")});
        };

        this.strCallBackFunc = function(id, returnValue)
        {
        	trace(id,req.returnValue);
        }

        this.btn_open2_onclick = function(obj,e)
        {
        	this.TextArea00.value="";
        	let ret1 = nexacro.open("promise_open_test1","FrameBase::sub_form.xfdl", this.getOwnerFrame(), {a:'aaa', b:'bbb'}, "resizable=false showstatusbar=true", 150, 150, "promise")
        	.then((result1) => {
        	  trace("Closed popup with args: "+ " return1 = " + ret1 + ", result1 = " + result1);
        	  this.TextArea00.insertText("nexacro.open  : "+result1);

        	}).catch((err) => {
        		trace("Failed to open popup promise_open_test1 : " + err.message + " return = " + ret1);
        	});
        };

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

        this.btn_trackpopupByComponent_onclick = function(obj,e)
        {
        	this.TextArea00.value="";

        	trace(this.PopupDiv00.isPopup())

        	let req = this.PopupDiv00.trackPopupByComponent(obj,10,10)
        	.then((result1) =>{
        		//alert('First popup closed');
        			this.TextArea00.insertText("PopupDiv00.trackPopupByComponent : "+result1);
        		})
        		.catch(function(error){console.log("error")});
        };

        this.PopupDiv00_Button00_onclick = function(obj,e)
        {
        	this.PopupDiv00.closePopup("PopupDiv00.closePopup");
        };

        this.btn_awaitTR_onclick = function(obj,e)
        {
        	loadData(this);

        };
        async function loadData(app)
        {
        	try {
        		app.TextArea00.value="";
        		let sArgs = "userid="+ "blue";
        		sArgs += " username="+ "테스트";
        		// transaction 호출 후 결과가 반환될 때까지 기다림
        		const [errorcode,errormsg] = await app.transaction("AA","http://172.10.12.45:7070/jsp/test_100_XML_await.jsp","input1=Dataset02","Dataset03=output",sArgs, "", false);
        		// 절차적으로 순서대로 실행됨
        		trace("✅ 사용자 조회 완료:", errorcode, errormsg);
        		app.TextArea00.insertText("nexacroK_mfe_sub1 transaction promise 테스트 code = "+errorcode+"  msg = "+errormsg);
        	} catch (err) {
        		trace("❌ 사용자 조회 실패:");
        	}
        };
        this.btn_confirm_onclick = function(obj,e)
        {
        	this.confirm("confirm");
        };

        this.btn_print_onclick = function(obj,e)
        {
        	system.print( obj);
        };

        this.btn_open_onclick = function(obj,e)
        {
        	this.setTimer("0","5000");
        };

        this.Button01_onclick = function(obj,e)
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

        this.Button02_onclick = function(obj,e)
        {
        		this.TextArea00.value="";
        	let app_all = nexacro.getApplication();

        	if(app_all == null){
        		this.TextArea00.insertText("app_all = null");
        		return false;
        	}
        	this.TextArea00.insertText(" id = "+app_all.id+
        								"\n screenid = "+app_all.screenid+
        								"\n Dataset = "+app_all.gds_nexacroK_mfe_sub1.id+", rowcount = "+app_all.gds_nexacroK_mfe_sub1.getRowCount()+
        								"\n app_variables = "+app_all.app_variable);
        };

        this.Button03_onclick = function(obj,e)
        {
        		this.TextArea00.deleteText();
        	this.TextArea00.insertText("nexacro.getPopupFrames() = "+nexacro.getPopupFrames()+"\n");
        	this.TextArea00.insertText("nexacro.getPopupFrames(this.getOwnerFrame()) = "+nexacro.getPopupFrames(this.getOwnerFrame())+"\n");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ontimer",this.Form_Work_ontimer,this);
            this.btn_open.addEventHandler("onclick",this.btn_open_onclick,this);
            this.btn_alert.addEventHandler("onclick",this.btn_alert_onclick,this);
            this.btn_transaction.addEventHandler("onclick",this.btn_transaction_onclick,this);
            this.btn_trackpopup.addEventHandler("onclick",this.btn_trackpopup_onclick,this);
            this.PopupDiv00.addEventHandler("oncloseup",this.PopupDiv00_oncloseup,this);
            this.PopupDiv00.form.Button00.addEventHandler("onclick",this.PopupDiv00_Button00_onclick,this);
            this.btn_open2.addEventHandler("onclick",this.btn_open2_onclick,this);
            this.btn_showmodal.addEventHandler("onclick",this.btn_showmodal_onclick,this);
            this.btn_trackpopupByComponent.addEventHandler("onclick",this.btn_trackpopupByComponent_onclick,this);
            this.btn_awaitTR.addEventHandler("onclick",this.btn_awaitTR_onclick,this);
            this.btn_confirm.addEventHandler("onclick",this.btn_confirm_onclick,this);
            this.btn_print.addEventHandler("onclick",this.btn_print_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
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
