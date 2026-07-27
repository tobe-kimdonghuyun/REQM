(function()
{
    return function(nexacro, system, trace, environment, application)
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

            obj = new nexacro.TextArea("TextArea00","18","360","545","218",null,null,null,null,null,null,this);
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

            // Layout Functions
            //-- Default Layout : this.PopupDiv00.form
            obj = new nexacro.Layout("default","",0,0,this.PopupDiv00.form,function(p){});
            this.PopupDiv00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new nexacro.Layout("default","Desktop_screen",700,720,this,function(p){});
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
        	this.setTimer("0","5000");
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
        	let ret1 = nexacro.open("promise_open_test1","FrameBase::sub_form.xfdl", this.getOwnerFrame(), { user:"이몽룡" }, "resizable=false showstatusbar=true", 150, 150, "promise")
        	.then((result1) => {
        	  trace("Closed popup with args: "+ " return1 = " + ret1 + ", result1 = " + result1);
        	  this.TextArea00.insertText("nexacro.open  :"+result1);

        	}).catch((err) => {
        		trace("Failed to open popup promise_open_test1 : " + err.message + " return = " + ret1);
        	});
        };

        this.btn_showmodal_onclick = function(obj,e)
        {
        	var objFrame = new ChildFrame();
        	var objParentFrame = this.getOwnerFrame();

        	objFrame.init( "modal00", 0, 0, 500, 500 );
        	objFrame.formurl = "FrameBase::sub_form.xfdl";

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
        	let _this = this
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
        	var res = loadData(this);

        };
        async function loadData(app)
        	{
        		try {
        			let sArgs = "userid="+ "blue";
        			sArgs += " username="+ "테스트";
        			// transaction 호출 후 결과가 반환될 때까지 기다림
        			const [code,msg] = await app.transaction("AA","http://172.10.12.45:9090/service_jsp/test_100_XML.jsp","input1=Dataset02","Dataset03=output",sArgs, "", false);
        			// 절차적으로 순서대로 실행됨
        			trace("✅ 사용자 조회 완료:", code, msg);
        		} catch (err) {
        			trace("❌ 사용자 조회 실패:");
        		}
        	}
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ontimer",this.Form_Work_ontimer,this);
            this.btn_open.addEventHandler("onclick",this.Button00_onclick,this);
            this.btn_alert.addEventHandler("onclick",this.btn_alert_onclick,this);
            this.btn_transaction.addEventHandler("onclick",this.btn_transaction_onclick,this);
            this.btn_trackpopup.addEventHandler("onclick",this.btn_trackpopup_onclick,this);
            this.PopupDiv00.addEventHandler("oncloseup",this.PopupDiv00_oncloseup,this);
            this.PopupDiv00.form.Button00.addEventHandler("onclick",this.PopupDiv00_Button00_onclick,this);
            this.btn_open2.addEventHandler("onclick",this.btn_open2_onclick,this);
            this.btn_showmodal.addEventHandler("onclick",this.btn_showmodal_onclick,this);
            this.btn_trackpopupByComponent.addEventHandler("onclick",this.btn_trackpopupByComponent_onclick,this);
            this.btn_awaitTR.addEventHandler("onclick",this.btn_awaitTR_onclick,this);
        };

        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
