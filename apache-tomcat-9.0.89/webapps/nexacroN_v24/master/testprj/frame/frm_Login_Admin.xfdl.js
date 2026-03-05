(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM000S011");
            this.set_titletext("관리자로그인");
            this.set_background("url(\'theme://images/sta_WF_LoginAdminBg.png\') no-repeat left top");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsLogin", this);
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"pswd\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("DivLogin","250","80","1420","750",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("panLogo","0","0","100%","285",null,null,null,null,null,null,this.DivLogin.form);
            obj.set_taborder("11");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_verticalgap("20");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTitle02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel03\"/></Contents>");
            this.DivLogin.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","0","100%","45",null,null,null,null,null,null,this.DivLogin.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LoginAdminTitle");
            obj.set_text("인천국제공항공사 입주자 서비스 플랫폼");
            this.DivLogin.addChild(obj.name, obj);

            obj = new Static("staTitle","0","Static00_01:10","100%","75",null,null,null,null,null,null,this.DivLogin.form);
            obj.set_taborder("4");
            obj.set_text("관리자 로그인");
            obj.set_cssclass("sta_WF_LoginAdminTitle02");
            this.DivLogin.addChild(obj.name, obj);

            obj = new Panel("Panel00","73","staTitle:50","530","400",null,null,null,null,null,null,this.DivLogin.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_verticalgap("24");
            obj.set_fittocontents("height");
            obj.set_spacing("0px 0px 40px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"btnLgnAction\"/></Contents>");
            this.DivLogin.addChild(obj.name, obj);

            obj = new Static("Static00","155","455","120","30",null,null,null,null,null,null,this.DivLogin.form);
            obj.set_taborder("7");
            obj.set_text("아이디");
            obj.set_cssclass("sta_WF_LoginAdminLabel");
            this.DivLogin.addChild(obj.name, obj);

            obj = new Edit("userId","155","480","100%","40",null,null,null,null,null,null,this.DivLogin.form);
            obj.set_taborder("1");
            obj.set_displaynulltext("아이디 입력");
            obj.set_text("");
            this.DivLogin.addChild(obj.name, obj);

            obj = new Panel("Panel01","155","455","100%","70",null,null,null,null,null,null,this.DivLogin.form);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/><PanelItem id=\"PanelItem01\" componentid=\"userId\"/></Contents>");
            this.DivLogin.addChild(obj.name, obj);

            obj = new Static("Static00_00","105","500","120","30",null,null,null,null,null,null,this.DivLogin.form);
            obj.set_taborder("9");
            obj.set_text("패스워드");
            obj.set_cssclass("sta_WF_LoginAdminLabel");
            this.DivLogin.addChild(obj.name, obj);

            obj = new Edit("pswd","105","525","100%","40",null,null,null,null,null,null,this.DivLogin.form);
            obj.set_taborder("2");
            obj.set_displaynulltext("영문자, 숫자, 특수문자 조합");
            obj.set_password("true");
            obj.set_text("");
            this.DivLogin.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","105","500","100%","70",null,null,null,null,null,null,this.DivLogin.form);
            obj.set_taborder("10");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"pswd\"/></Contents>");
            this.DivLogin.addChild(obj.name, obj);

            obj = new Button("btnLgnAction","0.00","262","100%","60",null,null,null,null,null,null,this.DivLogin.form);
            obj.set_taborder("3");
            obj.set_text("로그인");
            obj.set_cssclass("btn_MF_Login02");
            this.DivLogin.addChild(obj.name, obj);

            obj = new Static("staTitle02","0","0","100%","144",null,null,null,null,null,null,this.DivLogin.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_LoginAdminLogo");
            this.DivLogin.addChild(obj.name, obj);

            obj = new Panel("Panel03","0","139","100%","120",null,null,null,null,null,null,this.DivLogin.form);
            obj.set_taborder("12");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"staTitle\"/></Contents>");
            this.DivLogin.addChild(obj.name, obj);

            obj = new Static("Static00_02","1055","702","368","60",null,null,null,null,null,null,this.DivLogin.form);
            obj.set_taborder("13");
            obj.set_text("Copyright Incheon International Airport Coporation. All rights reserved.");
            obj.set_cssclass("sta_WF_LoginAdminCopy");
            obj.set_fittocontents("width");
            this.DivLogin.addChild(obj.name, obj);

            obj = new Panel("panCopy","2","705","100%","54",null,null,null,null,null,null,this.DivLogin.form);
            obj.set_taborder("14");
            obj.set_cssclass("pan_WF_LoginAdminCopy");
            obj.set_flexmainaxisalign("end");
            obj.set_flexcrossaxisalign("center");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_02\"/></Contents>");
            this.DivLogin.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.DivLogin.form
            obj = new Layout("default","",0,0,this.DivLogin.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panLogo.set_taborder("11");
                p.panLogo.set_type("vertical");
                p.panLogo.set_fittocontents("height");
                p.panLogo.set_verticalgap("20");
                p.panLogo.move("0","0","100%","285",null,null);

                p.Static00_01.set_taborder("0");
                p.Static00_01.set_cssclass("sta_WF_LoginAdminTitle");
                p.Static00_01.set_text("인천국제공항공사 입주자 서비스 플랫폼");
                p.Static00_01.move("0","0","100%","45",null,null);

                p.staTitle.set_taborder("4");
                p.staTitle.set_text("관리자 로그인");
                p.staTitle.set_cssclass("sta_WF_LoginAdminTitle02");
                p.staTitle.move("0","Static00_01:10","100%","75",null,null);

                p.Panel00.set_taborder("6");
                p.Panel00.set_type("vertical");
                p.Panel00.set_verticalgap("24");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_spacing("0px 0px 40px 0px");
                p.Panel00.move("73","staTitle:50","530","400",null,null);

                p.Static00.set_taborder("7");
                p.Static00.set_text("아이디");
                p.Static00.set_cssclass("sta_WF_LoginAdminLabel");
                p.Static00.move("155","455","120","30",null,null);

                p.userId.set_taborder("1");
                p.userId.set_displaynulltext("아이디 입력");
                p.userId.move("155","480","100%","40",null,null);

                p.Panel01.set_taborder("8");
                p.Panel01.set_type("vertical");
                p.Panel01.move("155","455","100%","70",null,null);

                p.Static00_00.set_taborder("9");
                p.Static00_00.set_text("패스워드");
                p.Static00_00.set_cssclass("sta_WF_LoginAdminLabel");
                p.Static00_00.move("105","500","120","30",null,null);

                p.pswd.set_taborder("2");
                p.pswd.set_displaynulltext("영문자, 숫자, 특수문자 조합");
                p.pswd.set_password("true");
                p.pswd.move("105","525","100%","40",null,null);

                p.Panel00_00.set_taborder("10");
                p.Panel00_00.set_type("vertical");
                p.Panel00_00.move("105","500","100%","70",null,null);

                p.btnLgnAction.set_taborder("3");
                p.btnLgnAction.set_text("로그인");
                p.btnLgnAction.set_cssclass("btn_MF_Login02");
                p.btnLgnAction.move("0.00","262","100%","60",null,null);

                p.staTitle02.set_taborder("5");
                p.staTitle02.set_cssclass("sta_WF_LoginAdminLogo");
                p.staTitle02.move("0","0","100%","144",null,null);

                p.Panel03.set_taborder("12");
                p.Panel03.set_type("vertical");
                p.Panel03.set_fittocontents("height");
                p.Panel03.move("0","139","100%","120",null,null);

                p.Static00_02.set_taborder("13");
                p.Static00_02.set_text("Copyright Incheon International Airport Coporation. All rights reserved.");
                p.Static00_02.set_cssclass("sta_WF_LoginAdminCopy");
                p.Static00_02.set_fittocontents("width");
                p.Static00_02.move("1055","702","368","60",null,null);

                p.panCopy.set_taborder("14");
                p.panCopy.set_cssclass("pan_WF_LoginAdminCopy");
                p.panCopy.set_flexmainaxisalign("end");
                p.panCopy.set_flexcrossaxisalign("center");
                p.panCopy.set_fittocontents("height");
                p.panCopy.move("2","705","100%","54",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("80");
            obj.set_flexcrossaxisalign("center");
            this.DivLogin.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.DivLogin.form
            obj = new Layout("mobile","",0,0,this.DivLogin.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staTitle02.set_cssclass("sta_WF_LoginAdminLogoM");
                p.staTitle02.move("0","0","100%","90",null,null);

                p.Static00_01.set_cssclass("sta_WF_LoginAdminTitleM");
                p.Static00_01.move("0","0","100%","40",null,null);

                p.staTitle.set_cssclass("sta_WF_LoginAdminTitleM02");
                p.staTitle.move("0","Static00_01:10","100%","60",null,null);

                p.Panel03.move("0","139","100%","100",null,null);

                p.Panel00.move("73","staTitle:50","100%","400",null,null);
            	}
            );
            obj.set_verticalgap("60");
            obj.set_type("vertical");
            obj.set_flexcrossaxisalign("center");
            this.DivLogin.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1920,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("관리자로그인");
                p.set_background("url(\'theme://images/sta_WF_LoginAdminBg.png\') no-repeat left top");

                p.DivLogin.set_taborder("1");
                p.DivLogin.set_text("Div00");
                p.DivLogin.set_formscrollbartype("none none");
                p.DivLogin.set_fittocontents("height");
                p.DivLogin.move("250","80","1420","750",null,null);
            	}
            );
            obj.set_horizontalgap("0");
            obj.set_mobileorientation("landscape");
            obj.set_tabletemplate("1* / 1*");
            obj.set_verticalgap("0");
            obj.set_flexcrossaxisalign("center");
            obj.set_type("vertical");
            obj.set_spacing("80px 20px 0px 20px");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","",480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.DivLogin.move("250","80","100%","750",null,null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("vertical");
            obj.set_horizontalgap("0");
            obj.set_tabletemplate("1* / 1*");
            obj.set_verticalgap("0");
            obj.set_flexcrossaxisalign("center");
            obj.set_spacing("80px 20px 0px 20px");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frm_Login_Admin.xfdl", function() {
        /**
        *  인천공항 원스톱 입주자서비스 프로젝트
        *  @FileName 	frm_Login.xfdl
        *  @Creator 	(주)이루온
        *  @CreateDate 	2024/08/08
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/08/08				김완성						최초생성
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

        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	//TODO..
        };

        //추가
        this.cfnAdd = function ()
        {
        	//TODO..
        };

        //삭제
        this.cfnDel = function ()
        {
        	//TODO..
        };

        //저장
        this.cfnSave = function ()
        {
        	//TODO..
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.fnLgnActionTrasaction = function()
        {
        	this.dsLogin.setColumn(0, "userId", this.DivLogin.form.userId.value);
        	this.dsLogin.setColumn(0, "pswd", this.DivLogin.form.pswd.value);
        	console.log(this.dsLogin.saveJSON());

         	var strSvcId    = "login";
        	var strSvcUrl   = "login/admLoginPrcs.do";
         	var inData      = "dsLogin=dsLogin";
         	var outData     = "gdsUser=gdsUser gdsRetMsg=gdsRetMsg gdsMenu=gdsMenu";
         	var strArg      = "";
         	var callBackFnc = "fnLoginCallback";
         	var isAsync   	= true;

         	this.gfnTransaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
         						strSvcUrl , 	// trabsaction을 요청할 주소
         						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
         						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
         						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
         						callBackFnc, 	// transaction의 결과를 받을 Function 이름
         						isAsync); 		// 비동기통신 여부 [생략가능]
        }
        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnLoginCallback = function(svcID,errorCode,errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0)
        	{
        		return;
        	}

        	if(svcID != null && svcID == "login")
        	{

        		var userId = this.objApp.gdsUser.getColumn(0, "userId");		// 유저ID
        		var userNm = this.objApp.gdsUser.getColumn(0, "userNm");		// 유저명
        		var jbgdNm = this.objApp.gdsUser.getColumn(0, "jbgdNm");		// 직급명
        		var coId = this.objApp.gdsUser.getColumn(0, "coId");			// 회사ID
        		var deptId = this.objApp.gdsUser.getColumn(0, "deptId");		// 부서ID
        		var mngrId = this.objApp.gdsUser.getColumn(0, "mngrId");		// 관리자ID
        		var jbttlId = this.objApp.gdsUser.getColumn(0, "jbttlId");		// 직책ID
        		var emlId = this.objApp.gdsUser.getColumn(0, "emlId");			// 이메일ID
        		var flrplnPrmIp = this.objApp.gdsUser.getColumn(0, "flrplnPrmIp");	// 도면허용IP
        		var ip = this.objApp.gdsUser.getColumn(0, "ip");	// 도면허용IP
        		var msg = this.objApp.gdsRetMsg.getColumn(0, "msg");

        		if(userId != null && userId != '')
        		{
        			this.DivLogin.form.userId.set_value("");
        			this.DivLogin.form.pswd.set_value("");
        			this.objApp.gUser = {
        				"userId" : userId,
        				"userNm" : userNm,
        				"jbgdNm" : jbgdNm,
        				"coId" : coId,
        				"deptId" : deptId,
        				"mngrId" : mngrId,
        				"jbttlId" : jbttlId,
        				"emlId" : emlId,
        				"ip" : ip,
        				"flrplnPrmIp" : flrplnPrmIp
        			};

        		}

        		this.parent.parent.frmMain.form.fnInit();

        		this.gfnAlertMsg("login", "MSG_010", null, "alertCallback");
        	}
        };

        this.alertCallback = function(sPopupId, sRtn)
        {
        	if(sPopupId == "login")
        	{
        		var userId = this.objApp.gdsUser.getColumn(0, "userId");
        		if(userId != null)
        		{
        			this.gfnSetMain(true);
        		}
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.DivLogin_btnLgnAction_onclick = function(obj,e)
        {
        	this.fnLgnActionTrasaction();
        };

        this.DivLogin_pswd_onkeyup = function(obj,e)
        {
        	if( e.keycode == 13)
        	{
        		this.fnLgnActionTrasaction();
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.DivLogin.form.Static00.addEventHandler("onclick",this.DivLogin_Static00_onclick,this);
            this.DivLogin.form.userId.addEventHandler("onkeyup",this.divWork_Div00_Edit00_onkeyup,this);
            this.DivLogin.form.pswd.addEventHandler("onkeyup",this.DivLogin_pswd_onkeyup,this);
            this.DivLogin.form.btnLgnAction.addEventHandler("onclick",this.DivLogin_btnLgnAction_onclick,this);
        };
        this.loadIncludeScript("frm_Login_Admin.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
