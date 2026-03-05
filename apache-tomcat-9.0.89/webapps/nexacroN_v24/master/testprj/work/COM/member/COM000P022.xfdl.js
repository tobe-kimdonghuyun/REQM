(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM000P02");
            this.set_titletext("비밀번호변경");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPw", this);
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"nowPswd\" type=\"STRING\" size=\"256\"/><Column id=\"newPswd01\" type=\"STRING\" size=\"256\"/><Column id=\"newPswd02\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPwChk", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","0","0","600","500",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Div("div00","0","0","100%","500",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("신청자정보");
            obj.set_fittocontents("height");
            obj.set_cssclass("div_WF_Bg");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("pan02","0","242","100.00%","100",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("6");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("0");
            obj.set_text("아이디");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_02","20.00","288","400","40",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_flexgrow("1");
            obj.set_text("");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("pan02_00_01","0","242","100.00%","100",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("20");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_01\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","20.00","242","100%","100",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("pan02_00","0","242","100.00%","100",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("12");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("pan02_00_00","0","242","100.00%","100",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("16");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_00\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("Panel00","191","210","100%","50",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("7");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"edt00_02\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Div("divPopBtn","10","320","100%","65",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("8");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            obj.set_fittocontents("height");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","457.00","30","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form.divPopBtn.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_flexgrow("1");
            obj.set_enable("true");
            this.divForm.form.div00.form.divPopBtn.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("9");
            obj.set_text("새 비밀번호");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Edit("newPswd01","20.00","288","400","40",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("2");
            obj.set_readonly("false");
            obj.set_flexgrow("1");
            obj.set_password("true");
            obj.set_text("");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","191","210","100%","50",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("10");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"newPswd01\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00","20.00","242","100%","100",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("11");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_00\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("13");
            obj.set_text("새 비밀번호 확인");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Edit("newPswd02","20.00","288","400","40",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("3");
            obj.set_readonly("false");
            obj.set_flexgrow("1");
            obj.set_password("true");
            obj.set_text("");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","191","210","100%","50",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("14");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"newPswd02\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00","20.00","242","100%","100",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("15");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_00_00\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("17");
            obj.set_text("현재 비밀번호");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Edit("nowPswd","20.00","288","400","40",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("1");
            obj.set_readonly("false");
            obj.set_flexgrow("1");
            obj.set_password("true");
            obj.set_text("");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01","191","210","100%","50",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("18");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"nowPswd\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_01","20.00","242","100%","100",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("19");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_00_01\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form.div00.form.divPopBtn.form
            obj = new Layout("default","",0,0,this.divForm.form.div00.form.divPopBtn.form,function(p){});
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("20");
            obj.set_spacing("0px 20px 0px 20px");
            this.divForm.form.div00.form.divPopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.div00.form
            obj = new Layout("default","",0,0,this.divForm.form.div00.form,function(p){});
            obj.set_type("vertical");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("10");
            this.divForm.form.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,function(p){});
            obj.set_verticalgap("30");
            obj.set_type("vertical");
            obj.set_spacing("10px 10px 10px 10px");
            obj.set_flexmainaxisalign("start");
            obj.set_flexwrap("wrap");
            this.divForm.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Phone_screen",600,500,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.div00.form.edt00_02","value","dsPw","userId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.div00.form.nowPswd","value","dsPw","nowPswd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.div00.form.newPswd01","value","dsPw","newPswd01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.div00.form.newPswd02","value","dsPw","newPswd02");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("COM000P022.xfdl", function() {
        /**
        *  인천공항 원스톱 입주자서비스 프로젝트
        *  @FileName 	COM000P02.xfdl
        *  @Creator 	(주)이루온
        *  @CreateDate 	2024/10/18
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/10/18				김완성						최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수
        	this.fnInit();
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        this.cfnClose = function() {
        	console.log('cfnClose');
        }
        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.currentPwChkTranjaction = function() {

        	var strSvcId    = "pwChk";
        	var strSvcUrl   = "member/currentPwChk.do";
        	var inData      = "dsPw=dsPw";
        	var outData     = "dsPwChk=dsPwChk";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        this.updatePwChgTranjaction = function() {

        	var strSvcId    = "savePw";
        	var strSvcUrl   = "member/pswdMdfcn.do";
        	var inData      = "dsPw=dsPw";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0)
        	{
        		return;
        	}

        	switch(svcID)
        	{
        		case "pwChk":
        			var chk = this.dsPwChk.getColumn(0, "chk");
        			if(chk == "Y") {
        				this.updatePwChgTranjaction();
        			}

        			break;

        		case "savePw" :
        			this.gfnAlertMsg("msg", "MSG_011", ["변경하였습니다."]);
        			this.close();
        			break;

        	}
        };

        this.msgCallback = function(sPopupId, sRtn) {
        	var oRtn = JSON.parse(sRtn);

        	if(sPopupId == "pswd_update") {
        		if(oRtn.result == "Y") {
        			this.currentPwChkTranjaction();
        		}
        	}
        };

        this.fnPopupCallback = function(sPopupId, sRtn)
        {
        	if(sPopupId =="popupSearch")
        	{
        		if (this.gfnIsNull(sRtn)) return;
        		var objRtn = JSON.parse(sRtn);
        		console.log(objRtn);
        		//TODO..
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function() {
        	var userId = this.objApp.gdsUser.getColumn(0, "userId");
        	this.dsPw.setColumn(0, "userId", userId);
        };

        // 비밀번호 검증
        this.fnValidPw = function()
        {
        	var nowPswd = this.dsPw.getColumn(0, "nowPswd");
        	var newPswd01 = this.dsPw.getColumn(0, "newPswd01");
        	var newPswd02 = this.dsPw.getColumn(0, "newPswd02");

        	if(this.gfnIsNull(nowPswd) == true) {
        		this.gfnAlertMsg("msg", "MSG_011", ["현재 비밀번호를 입력해주세요!"]);
        		this.divForm.form.div00.form.nowPswd.setFocus();
        		return false;
        	}

        	if(this.gfnIsNull(newPswd01) == true || this.gfnIsNull(newPswd02) == true) {
        		this.gfnAlertMsg("msg", "MSG_011", ["변경할 비밀번호를 입력해주세요!"]);
        		this.divForm.form.div00.form.newPswd01.setFocus();
        		return false;
        	}

        	if(newPswd01 != newPswd02) {
        		this.gfnAlertMsg("msg", "MSG_011", ["변경할 비밀번호가 일치하지 않습니다."]);
        		this.divForm.form.div00.form.newPswd02.setFocus();
        		return false;
        	}

        	if(nowPswd == newPswd01) {
        		this.gfnAlertMsg("msg", "MSG_011", ["현재 비밀번호와 변경할 비밀번호는\n다르게 입력해야 합니다."]);
        		this.divForm.form.div00.form.newPswd01.setFocus();
        		return false;
        	}

        	// 정규식 체크
        	var pwPatten = new RegExp("[!@#$%^&*()]", "ig");
        	//var pwAlpha = new RegExp("[a-zA-Z]", "ig");
        	//var pwNum = new RegExp("[0-9]", "ig");
        	if(pwPatten.test(newPswd01) != true || newPswd01.length < 9) {
        		this.gfnAlertMsg("msg", "MSG_011", ["비밀번호는 9자리 이상이며, \n반드시 특수문자를 포함해야 합니다. \n[!@#$%^&*()]"]);
        		this.divForm.form.div00form.newPswd01.setFocus();
        		return false;
        	}

        	return true;
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/

        this.divForm_div00_divPopBtn_Button00_00_00_onclick = function(obj,e)
        {
        	if(this.fnValidPw()) {
        		this.gfnConfirmMsg("pswd_update", "MSG_011", "msgCallback", ["확인", "취소"], ["Y", "N"], "", ["비밀번호 변경 하시겠습니까?"]);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.div00.form.divPopBtn.form.Button00_00_00.addEventHandler("onclick",this.divForm_div00_divPopBtn_Button00_00_00_onclick,this);
        };
        this.loadIncludeScript("COM000P022.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
