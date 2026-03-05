(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM000P021");
            this.set_titletext("비밀번호찾기");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,360);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPw", this);
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"newPswd01\" type=\"STRING\" size=\"256\"/><Column id=\"newPswd02\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPwChk", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","0","0",null,"355","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_border("0.11100000143051147em dashed #d8d8d8,0px none,0.11100000143051147em dashed #d8d8d8,0px none");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","4.00","-5","100%","315",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_verticalgap("20");
            obj.set_fittocontents("height");
            obj.set_flexmainaxisalign("start");
            obj._setContents("<Contents><PanelItem id=\"PanelItem05\" componentid=\"pan02\"/><PanelItem id=\"PanelItem03\" componentid=\"pan04\"/><PanelItem id=\"PanelItem01\" componentid=\"pan05\"/><PanelItem id=\"PanelItem00\" componentid=\"Button00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staMblTelno","232","381","100%","25",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_text("새 비밀번호");
            obj.set_cssclass("sta_WF_LoginLabel");
            this.divForm.addChild(obj.name, obj);

            obj = new Edit("edtMblTelno","222","425","100%","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_password("false");
            obj.set_displaynulltext("새 비밀번호 입력");
            obj.set_text("");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("pan04","172","321","100%","65",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staMblTelno\"/><PanelItem id=\"PanelItem01\" componentid=\"edtMblTelno\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staCertNo","232","381","100%","25",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("5");
            obj.set_text("새 비밀번호 확인");
            obj.set_cssclass("sta_WF_LoginLabel");
            this.divForm.addChild(obj.name, obj);

            obj = new Edit("edtCertNo","222","425","100%","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_password("true");
            obj.set_displaynulltext("새 비밀번호 확인 입력");
            obj.set_text("");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("pan05","172","321","100.00%","65",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCertNo\"/><PanelItem id=\"PanelItem02\" componentid=\"edtCertNo\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00_00","240","495","100%","60",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("7");
            obj.set_text("확인");
            obj.set_cssclass("btn_MF_Login02");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staUserId","211","290","100%","25",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("9");
            obj.set_text("아이디");
            obj.set_cssclass("sta_WF_LoginLabel");
            this.divForm.addChild(obj.name, obj);

            obj = new Edit("edtUserId","214","340","100%","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_displaynulltext("아이디 입력");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("pan02","172","261","100%","65",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("10");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staUserId\"/><PanelItem id=\"PanelItem01\" componentid=\"edtUserId\"/></Contents>");
            this.divForm.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.set_taborder("8");
                p.Panel00.set_type("vertical");
                p.Panel00.set_verticalgap("20");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_flexmainaxisalign("start");
                p.Panel00.move("4.00","-5","100%","315",null,null);

                p.staMblTelno.set_taborder("3");
                p.staMblTelno.set_text("새 비밀번호");
                p.staMblTelno.set_cssclass("sta_WF_LoginLabel");
                p.staMblTelno.move("232","381","100%","25",null,null);

                p.edtMblTelno.set_taborder("1");
                p.edtMblTelno.set_password("false");
                p.edtMblTelno.set_displaynulltext("새 비밀번호 입력");
                p.edtMblTelno.move("222","425","100%","40",null,null);

                p.pan04.set_taborder("4");
                p.pan04.set_type("vertical");
                p.pan04.set_fittocontents("height");
                p.pan04.move("172","321","100%","65",null,null);

                p.staCertNo.set_taborder("5");
                p.staCertNo.set_text("새 비밀번호 확인");
                p.staCertNo.set_cssclass("sta_WF_LoginLabel");
                p.staCertNo.move("232","381","100%","25",null,null);

                p.edtCertNo.set_taborder("2");
                p.edtCertNo.set_password("true");
                p.edtCertNo.set_displaynulltext("새 비밀번호 확인 입력");
                p.edtCertNo.move("222","425","100%","40",null,null);

                p.pan05.set_taborder("6");
                p.pan05.set_type("vertical");
                p.pan05.set_fittocontents("height");
                p.pan05.move("172","321","100.00%","65",null,null);

                p.Button00_00.set_taborder("7");
                p.Button00_00.set_text("확인");
                p.Button00_00.set_cssclass("btn_MF_Login02");
                p.Button00_00.move("240","495","100%","60",null,null);

                p.staUserId.set_taborder("9");
                p.staUserId.set_text("아이디");
                p.staUserId.set_cssclass("sta_WF_LoginLabel");
                p.staUserId.move("211","290","100%","25",null,null);

                p.edtUserId.set_taborder("0");
                p.edtUserId.set_displaynulltext("아이디 입력");
                p.edtUserId.set_readonly("true");
                p.edtUserId.move("214","340","100%","40",null,null);

                p.pan02.set_taborder("10");
                p.pan02.set_type("vertical");
                p.pan02.set_fittocontents("height");
                p.pan02.move("172","261","100%","65",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("start");
            obj.set_flexwrap("nowrap");
            obj.set_verticalgap("20");
            obj.set_spacing("20px");
            this.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form
            obj = new Layout("mobile","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_flexmainaxisalign("start");
            obj.set_type("vertical");
            obj.set_flexwrap("nowrap");
            obj.set_verticalgap("20");
            obj.set_spacing("20px");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1480,360,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("비밀번호찾기");

                p.divForm.set_taborder("3");
                p.divForm.set_text("Div01");
                p.divForm.set_border("0.11100000143051147em dashed #d8d8d8,0px none,0.11100000143051147em dashed #d8d8d8,0px none");
                p.divForm.set_fittocontents("height");
                p.divForm.set_formscrollbartype("none none");
                p.divForm.move("0","0",null,"355","0",null);
            	}
            );
            obj.set_horizontalgap("0");
            obj.set_mobileorientation("landscape");
            obj.set_tabletemplate("1* / 1*");
            obj.set_verticalgap("0");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",480,630,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divForm.move("20","0",null,"625","20",null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            obj.set_horizontalgap("0");
            obj.set_tabletemplate("1* / 1*");
            obj.set_verticalgap("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.edtUserId","value","dsPw","userId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.edtMblTelno","value","dsPw","newPswd01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.edtCertNo","value","dsPw","newPswd02");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("COM000P021.xfdl", function() {
        /**
        *  인천공항 원스톱 입주자서비스 프로젝트
        *  @FileName 	COM000P021.xfdl
        *  @Creator 	(주)이루온
        *  @CreateDate 	2024/11/11
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/11/11				조규완						최초생성
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
        	if(this.opener) {
        		this.param = {
        			"id" : this.getOwnerFrame().id,
        		}
        	} else {
        		this.param = this.getOwnerFrame().form.fvObjArgs;
        	}
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
        this.updatePwChgTranjaction = function() {

        	var strSvcId    = "savePw";
        	var strSvcUrl   = "member/userPwInit.do";
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
        			this.updatePwChgTranjaction();
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
        	console.log(this.param);
        	this.dsPw.setColumn(0, "userId", this.param.id);
        };

        // 비밀번호 검증
        this.fnValidPw = function()
        {
        	var newPswd01 = this.dsPw.getColumn(0, "newPswd01");
        	var newPswd02 = this.dsPw.getColumn(0, "newPswd02");

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
        this.divForm_Button00_00_onclick = function(obj,e)
        {
        	if(this.fnValidPw()) {
        		this.gfnConfirmMsg("pswd_update", "MSG_011", "msgCallback", ["확인", "취소"], ["Y", "N"], "", ["비밀번호 변경 하시겠습니까?"]);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.divForm.addEventHandler("onkeyup",this.divForm_onkeyup,this);
            this.divForm.form.edtCertNo.addEventHandler("onkeyup",this.divLogin_Div00_pswd_onkeyup,this);
            this.divForm.form.Button00_00.addEventHandler("onclick",this.divForm_Button00_00_onclick,this);
            this.divForm.form.edtUserId.addEventHandler("onkeyup",this.divWork_Div00_Edit00_onkeyup,this);
        };
        this.loadIncludeScript("COM000P021.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
