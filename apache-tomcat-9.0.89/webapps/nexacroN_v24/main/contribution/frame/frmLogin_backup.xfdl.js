(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmLogin");
            this.set_titletext("LoginFrame");
            this.set_cssclass("frm_LOGIN_Bg");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PASSWORD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"EMP_NO\"/><Col id=\"USER_PASSWORD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLoginResult", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFcmIn", this);
            obj._setContents("<ColumnInfo><Column id=\"TOKEN\" type=\"STRING\" size=\"256\"/><Column id=\"MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFcmInOut", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenu", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divLogin","430","95","400","460",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("");
            obj.set_cssclass("div_LOGIN_Bg");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("staUserId","30","160",null,"50","30",null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_LOGIN_Id");
            this.divLogin.addChild(obj.name, obj);

            obj = new Static("staPassword","30","230","340","50",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_LOGIN_Pw");
            this.divLogin.addChild(obj.name, obj);

            obj = new Button("btnLogin","0",null,null,"70","0","0",null,null,null,null,this.divLogin.form);
            obj.set_taborder("2");
            obj.set_text("시작하기");
            obj.set_cssclass("btn_LOGIN_Start");
            this.divLogin.addChild(obj.name, obj);

            obj = new Edit("edtUserId","153","170","210","30",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("0");
            obj.set_value("999999");
            obj.set_cssclass("edt_LOGIN_Input");
            obj.set_text("999999");
            this.divLogin.addChild(obj.name, obj);

            obj = new Edit("edtPassword","153","240","210","30",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("1");
            obj.set_value("1111");
            obj.set_password("true");
            obj.set_cssclass("edt_LOGIN_Input");
            obj.set_text("1111");
            this.divLogin.addChild(obj.name, obj);

            obj = new Static("Static00","74","28","273","98",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_LOGIN_Logo");
            this.divLogin.addChild(obj.name, obj);

            obj = new CheckBox("chkSaveId","33",null,"84","30",null,"104",null,null,null,null,this.divLogin.form);
            obj.set_taborder("6");
            obj.set_text("아이디저장");
            obj.set_cssclass("chk_LOGIN_Id");
            obj.set_falsevalue("false");
            obj.set_truevalue("true");
            this.divLogin.addChild(obj.name, obj);

            obj = new Button("btn00","20","18","115","42",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("FCM");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","150","18","115","42",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("APNS");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divLogin.form
            obj = new Layout("default","",0,0,this.divLogin.form,function(p){});
            this.divLogin.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divLogin.form.edtUserId","value","dsCond","EMP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divLogin.form.edtPassword","value","dsCond","USER_PASSWORD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmLogin_backup.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	sampleScript.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2020/11/24
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2020/11/24			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        /**
         * @description 화면 오픈
         */
        this.form_onload = function(obj,e)
        {
        	// form size 변경시 divLogin size 변경
        	this.fnDivLoginResize();

        	this.fnGetPassword();
        };

        /**
         * @description 화면 리사이징
         */
        this.frmLogin_onsize = function(obj,e)
        {
        	// form size 변경시 divLogin size 변경
        	this.fnDivLoginResize();
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.fnGetBaseInfo = function ()
        {
        	//공통코드
        	var strSvcId    = "SearchBaseInfo";
        	var strSvcUrl   = "SearchBaseInfo.do";
        	var inData      = "";
        	var outData     = "gdsCommCode=dsComboData gdsMessage=dsMessage gdsMyMenu=dsMyMenu gdsMenu=dsMenu gdsAddBtn=dsAddBtn";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]

        };

        this.fnLogin = function ()
        {
        	// 정합성 체크						// dsCond을 빈칸이 아닌 Undefined로 만들어야지 validation이 동작하는데 편의를 위해 동작하지 않도록 만듬
        	this.gfnClearValidation(this.dsCond);
        	this.gfnSetValidation(this.dsCond, "EMP_NO", "사용자ID"	, "required");
        	this.gfnSetValidation(this.dsCond, "USER_PASSWORD", "패스워드"	, "required");
        	if (this.gfnValidation(this.dsCond, "U") == false) return;

        	//데이터셋 세팅
        	this.gfnSetLoginLogDataset();

        	var strSvcId    = "login";
        	var strSvcUrl   = "system/loginchkDev.do";
        	var inData      = "dsCond=dsCond";
        	var outData     = "dsMenu=dsMenu gdsMyMenu=dsMyMenu gdsUser=dsUser";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);	// 통신방법 정의 [생략가능]
        };

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        //transaction
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	switch(sSvcId) {
        		case "SearchBaseInfo":
        			this.fnGoMain();
        			break;
        		case "Login" :
        			this.fnSetLoginResult(nErrCd,sErrMsg);
        			break;
        		case "fcmProvider":
        			var obj = JSON.parse(this.dsFcmInOut.getColumn(0,"RESULTS"));
        			trace(obj.success);
        			trace(obj.results[0].message_id );
        			break;
        		case "apnsProvider":
        			if (this.dsFcmInOut.getColumn("STATUSCODE") != 200)
        			{
        				trace(this.dsFcmInOut.saveXML());
        				var objJson = this.dsFcmInOut.getColumn(0, "RESPONSEBODY");
        				trace(JSON.parse(objJson).reason);
        			}
        			break;

        			this.dsCond.getColumn()
        		case "login":
        			// login 성공 실패 check
        			//if(this.objApp.gdsUser.getColumn(0, "LOGIN_RESULT") != "LOGIN_SUCCESS") 			// 편의 위해 빈값으로 로그인 가능하게 만드려고 조건변경
        			if(this.objApp.gdsUser.getColumn(0, "LOGIN_RESULT") == "LOGIN_FAILED")
        			{
        				trace("login failed");
        				this.gfnAlert("msg.general", ["아이디와 비밀번호가 일치하지 않습니다."]);
        				break;
        			}

        			this.objApp.gdsMenu.copyData(this.dsMenu, true);
        			this.fnGoMain();
        			break;
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        /**
         * @description 로그인 결과 세팅
         */
        this.fnSetLoginResult = function (nErrCd,sErrMsg)
        {
        	if(nErrCd == -200){
        		this.gfnAlert("msg.err.tran", [sErrMsg]);
        		return;
        	}else if(nErrCd == 0){
        		var sThemeId = this.objApp.gdsUser.getColumn(0,"THEME_ID");
        		if(!this.gfnIsNull(sThemeId)){
        			if(sThemeId == "02")
        				nexacro.loadStyle("xcssrc::darkMode.xcss");
        			else
        			    nexacro.loadStyle("xcssrc::lightMode.xcss");
        		}
        		this.fnSavePassword();
        		this.fnGetBaseInfo();
        	}
        };

        /**
         * @description form size 변경시 divLogin size 변경
         */
        this.fnDivLoginResize = function()
        {
          	var nLeft = (nexacro.getApplication().mainframe.width / 2) - Math.round((this.divLogin.getOffsetWidth()) / 2);
          	var nTop = (nexacro.getApplication().mainframe.height / 2) - Math.round((this.divLogin.getOffsetHeight()) / 2);

        	if(nLeft <= 0){
        		this.divLogin.setOffsetLeft(0);
        	}else{
            	this.divLogin.setOffsetLeft(nLeft);
        		this.divLogin.setOffsetTop(nTop);
        	}
        }

        /**
         * @description 메인 화면으로 이동
         */
        this.fnGoMain = function()
        {
        	// 로그인 후처리 & 메인화면으로 이동
        	this.gfnSetLogin();
        };

        /**
         * @description 패스워드가져오기 (저장값)
         */
        this.fnGetPassword = function ()
        {
        	var sIdSaveCheck = nexacro.getPrivateProfile("idSaveCheck");
        	this.divLogin.form.chkSaveId.set_value(sIdSaveCheck);
        	if(sIdSaveCheck=="true"){
        		this.divLogin.form.edtUserId.set_value(nexacro.getPrivateProfile("idSave"));
        		this.divLogin.form.edtPassword.setFocus();
        	}else{
        		this.divLogin.form.edtUserId.set_value("");
        		this.divLogin.form.edtUserId.setFocus();
        	}
        };

        /**
         * @description 패스워드세팅
         */
        this.fnSavePassword = function ()
        {
        	nexacro.setPrivateProfile("idSaveCheck",this.divLogin.form.chkSaveId.value);

        	if(this.divLogin.form.chkSaveId.value=="true"){
        		nexacro.setPrivateProfile("idSave",this.divLogin.form.edtUserId.value);
        	}
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        /**
         * @description 로그인 버튼 클릭 이벤트
         */
        this.divLogin_btnLogin_onclick = function(obj,e)
        {
        	this.fnLogin();
        };

        this.edt_keyup = function(obj,e)
        {
        	if( e.keycode == 13){
        		this.fnLogin();
        	}
        };

        this.btn00_onclick = function(obj,e)
        {

        	var strSvcId    = "fcmProvider";
        	var strSvcUrl   = "fcmProvider.do";
        	var inData 		= "inDs=dsFcmIn";	//메시지, 토큰
        	var outData 	= "dsFcmInOut=outDs";
        	var strArg 		= "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]
        };

        this.btn01_onclick = function(obj,e)
        {
        	var strSvcId    = "apnsProvider";
        	var strSvcUrl   = "apnsProvider.do";
        	var inData 		= "inDs=dsFcmIn";	//메시지, 토큰
        	var outData 	= "dsFcmInOut=outDs";
        	var strArg 		= "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]
        };




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onsize",this.frmLogin_onsize,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.divLogin.form.btnLogin.addEventHandler("onclick",this.divLogin_btnLogin_onclick,this);
            this.divLogin.form.edtUserId.addEventHandler("onkeyup",this.edt_keyup,this);
            this.divLogin.form.edtPassword.addEventHandler("onkeyup",this.edt_keyup,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
        };
        this.loadIncludeScript("frmLogin_backup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
