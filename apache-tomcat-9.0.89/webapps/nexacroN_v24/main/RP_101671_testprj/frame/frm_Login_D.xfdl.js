(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_LoginD");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1250,730);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Panel("Panel00","0","0",null,"140","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_type("vertical");
            obj.set_spacing("30px 0px 40px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","132","41","100%","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("입주자 서비스 플랫폼 로그인");
            obj.set_cssclass("sta_WF_LoginSubTitle");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","65","81","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("로그인 방식을 선택해주세요.");
            obj.set_cssclass("sta_WF_LoginTitle");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("divLogin","50","Panel00:60","1000","510",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_border("0.11100000143051147em dashed #d8d8d8,0px none,0.11100000143051147em dashed #d8d8d8,0px none");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","0","430","381",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.divLogin.addChild(obj.name, obj);

            obj = new Static("Static02","428","220","167","60",null,null,null,null,null,null,this.divLogin.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("아이디 로그인");
            obj.set_cssclass("sta_WF_IdTitle");
            obj.set_fittocontents("width");
            this.divLogin.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","211","290","100%","25",null,null,null,null,null,null,this.divLogin.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("아이디");
            obj.set_cssclass("sta_WF_LoginLabel");
            this.divLogin.form.Div00.addChild(obj.name, obj);

            obj = new Edit("userId","214","340","100%","40",null,null,null,null,null,null,this.divLogin.form.Div00.form);
            obj.set_taborder("2");
            this.divLogin.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel03","172","261","100%","65",null,null,null,null,null,null,this.divLogin.form.Div00.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static03\"/><PanelItem id=\"PanelItem01\" componentid=\"userId\"/></Contents>");
            this.divLogin.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","232","381","100%","25",null,null,null,null,null,null,this.divLogin.form.Div00.form);
            obj.set_taborder("4");
            obj.set_text("비밀번호");
            obj.set_cssclass("sta_WF_LoginLabel");
            this.divLogin.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel04","172","321","100%","65",null,null,null,null,null,null,this.divLogin.form.Div00.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static04\"/><PanelItem id=\"PanelItem01\" componentid=\"pswd\"/></Contents>");
            this.divLogin.form.Div00.addChild(obj.name, obj);

            obj = new Edit("pswd","222","425","100%","40",null,null,null,null,null,null,this.divLogin.form.Div00.form);
            obj.set_taborder("5");
            this.divLogin.form.Div00.addChild(obj.name, obj);

            obj = new Button("btnLgnAction","240","495","100%","60",null,null,null,null,null,null,this.divLogin.form.Div00.form);
            obj.set_taborder("7");
            obj.set_text("로그인");
            obj.set_cssclass("btn_MF_Login02");
            this.divLogin.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static06","257","548","99","25",null,null,null,null,null,null,this.divLogin.form.Div00.form);
            obj.set_taborder("11");
            obj.set_text("관리자로그인");
            obj.set_cssclass("sta_WF_LoginInfo02");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divLogin.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static07","288","528","72","25",null,null,null,null,null,null,this.divLogin.form.Div00.form);
            obj.set_taborder("10");
            obj.set_text("회원가입");
            obj.set_cssclass("sta_WF_LoginInfo02");
            obj.set_fittocontents("width");
            this.divLogin.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static08","231","511","103","25",null,null,null,null,null,null,this.divLogin.form.Div00.form);
            obj.set_taborder("9");
            obj.set_text("비밀번호 찾기");
            obj.set_cssclass("sta_WF_LoginInfo");
            obj.set_fittocontents("width");
            this.divLogin.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static05","261","510","86","25",null,null,null,null,null,null,this.divLogin.form.Div00.form);
            obj.set_taborder("8");
            obj.set_text("아이디찾기");
            obj.set_cssclass("sta_WF_LoginInfo");
            obj.set_fittocontents("width");
            this.divLogin.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel05","137.00","312","100.00%","35",null,null,null,null,null,null,this.divLogin.form.Div00.form);
            obj.set_taborder("12");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_visible("true");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static05\"/><PanelItem id=\"PanelItem01\" componentid=\"Static08\"/><PanelItem id=\"PanelItem02\" componentid=\"Static07\"/><PanelItem id=\"PanelItem03\" componentid=\"Static06\"/></Contents>");
            this.divLogin.form.Div00.addChild(obj.name, obj);

            obj = new Static("staVline","918","90","1","480",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("1");
            obj.set_text("Static00");
            obj.set_border("0px dashed #d8d8d8,1px dashed #d8d8d8,0px dashed #d8d8d8,0px dashed #d8d8d8");
            this.divLogin.addChild(obj.name, obj);

            obj = new Div("Div01","1042","310","430","400",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            this.divLogin.addChild(obj.name, obj);

            obj = new Static("Static02_00","97.00","97","193","53",null,null,null,null,null,null,this.divLogin.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("간편인증 로그인");
            obj.set_cssclass("sta_WF_IdTitle");
            obj.set_fittocontents("width");
            this.divLogin.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static03_00","10.00","10","100%","25",null,null,null,null,null,null,this.divLogin.form.Div01.form);
            obj.set_taborder("1");
            obj.set_text("다른 로그인 방식을 찾고 계신가요?");
            obj.set_cssclass("sta_WF_LoginLabel");
            this.divLogin.form.Div01.addChild(obj.name, obj);

            obj = new Div("Div00","0","126","100%","284",null,null,null,null,null,null,this.divLogin.form.Div01.form);
            obj.set_taborder("2");
            obj.set_text("간편로그인");
            obj.set_background("#dedede");
            this.divLogin.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel07","65.00","404","100.00%","112",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("5");
            obj.set_cssclass("pan_WF_LoginInfo");
            obj.set_spacing("8px 24px 0px 24px");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static12\"/><PanelItem id=\"PanelItem01\" componentid=\"Static11\"/></Contents>");
            this.divLogin.addChild(obj.name, obj);

            obj = new Static("Static12","-80.00","360","95.76%","40",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("3");
            obj.set_text("로그인에 어려움이 있으신가요?");
            obj.set_cssclass("sta_WF_LoginDes");
            this.divLogin.addChild(obj.name, obj);

            obj = new Static("Static11","-80.00","400","95.76%","30",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("4");
            obj.set_text("시스템 문의 : 032-000-0000");
            obj.set_padding("12px 20px 11px 40px");
            this.divLogin.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divLogin.form.Div00.form
            obj = new Layout("default","",0,0,this.divLogin.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static02.set_taborder("0");
                p.Static02.set_text("아이디 로그인");
                p.Static02.set_cssclass("sta_WF_IdTitle");
                p.Static02.set_fittocontents("width");
                p.Static02.move("428","220","167","60",null,null);

                p.Static03.set_taborder("1");
                p.Static03.set_text("아이디");
                p.Static03.set_cssclass("sta_WF_LoginLabel");
                p.Static03.move("211","290","100%","25",null,null);

                p.userId.set_taborder("2");
                p.userId.move("214","340","100%","40",null,null);

                p.Panel03.set_taborder("3");
                p.Panel03.set_type("vertical");
                p.Panel03.move("172","261","100%","65",null,null);

                p.Static04.set_taborder("4");
                p.Static04.set_text("비밀번호");
                p.Static04.set_cssclass("sta_WF_LoginLabel");
                p.Static04.move("232","381","100%","25",null,null);

                p.Panel04.set_taborder("6");
                p.Panel04.set_type("vertical");
                p.Panel04.move("172","321","100%","65",null,null);

                p.pswd.set_taborder("5");
                p.pswd.move("222","425","100%","40",null,null);

                p.btnLgnAction.set_taborder("7");
                p.btnLgnAction.set_text("로그인");
                p.btnLgnAction.set_cssclass("btn_MF_Login02");
                p.btnLgnAction.move("240","495","100%","60",null,null);

                p.Static06.set_taborder("11");
                p.Static06.set_text("관리자로그인");
                p.Static06.set_cssclass("sta_WF_LoginInfo02");
                p.Static06.set_fittocontents("width");
                p.Static06.set_visible("false");
                p.Static06.move("257","548","99","25",null,null);

                p.Static07.set_taborder("10");
                p.Static07.set_text("회원가입");
                p.Static07.set_cssclass("sta_WF_LoginInfo02");
                p.Static07.set_fittocontents("width");
                p.Static07.move("288","528","72","25",null,null);

                p.Static08.set_taborder("9");
                p.Static08.set_text("비밀번호 찾기");
                p.Static08.set_cssclass("sta_WF_LoginInfo");
                p.Static08.set_fittocontents("width");
                p.Static08.move("231","511","103","25",null,null);

                p.Static05.set_taborder("8");
                p.Static05.set_text("아이디찾기");
                p.Static05.set_cssclass("sta_WF_LoginInfo");
                p.Static05.set_fittocontents("width");
                p.Static05.move("261","510","86","25",null,null);

                p.Panel05.set_taborder("12");
                p.Panel05.set_type("horizontal");
                p.Panel05.set_flexcrossaxisalign("center");
                p.Panel05.set_flexmainaxisalign("center");
                p.Panel05.set_visible("true");
                p.Panel05.set_fittocontents("height");
                p.Panel05.move("137.00","312","100.00%","35",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("24");
            this.divLogin.form.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divLogin.form.Div00.form
            obj = new Layout("mobile","",0,0,this.divLogin.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static02.set_cssclass("sta_WF_IdTitleM");
            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("24");
            this.divLogin.form.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divLogin.form.Div01.form.Div00
            obj = new Layout("default","",0,0,this.divLogin.form.Div01.form.Div00.form,function(p){});
            this.divLogin.form.Div01.form.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divLogin.form.Div01.form
            obj = new Layout("default","",0,0,this.divLogin.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static02_00.set_taborder("0");
                p.Static02_00.set_text("간편인증 로그인");
                p.Static02_00.set_cssclass("sta_WF_IdTitle");
                p.Static02_00.set_fittocontents("width");
                p.Static02_00.move("97.00","97","193","53",null,null);

                p.Static03_00.set_taborder("1");
                p.Static03_00.set_text("다른 로그인 방식을 찾고 계신가요?");
                p.Static03_00.set_cssclass("sta_WF_LoginLabel");
                p.Static03_00.move("10.00","10","100%","25",null,null);

                p.Div00.set_taborder("2");
                p.Div00.set_text("간편로그인");
                p.Div00.set_background("#dedede");
                p.Div00.move("0","126","100%","284",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("24");
            this.divLogin.form.Div01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divLogin.form.Div01.form
            obj = new Layout("mobile","",0,0,this.divLogin.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static02_00.set_cssclass("sta_WF_IdTitleM");
            	}
            );
            obj.set_spacing("30px 0px 0px 0px");
            obj.set_type("vertical");
            obj.set_verticalgap("24");
            this.divLogin.form.Div01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divLogin.form
            obj = new Layout("default","",0,0,this.divLogin.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Div00.set_taborder("0");
                p.Div00.set_text("Div00");
                p.Div00.move("0","0","430","381",null,null);

                p.staVline.set_taborder("1");
                p.staVline.set_text("Static00");
                p.staVline.set_border("0px dashed #d8d8d8,1px dashed #d8d8d8,0px dashed #d8d8d8,0px dashed #d8d8d8");
                p.staVline.move("918","90","1","480",null,null);

                p.Div01.set_taborder("2");
                p.Div01.set_text("Div01");
                p.Div01.set_fittocontents("height");
                p.Div01.move("1042","310","430","400",null,null);

                p.Panel07.set_taborder("5");
                p.Panel07.set_cssclass("pan_WF_LoginInfo");
                p.Panel07.set_spacing("8px 24px 0px 24px");
                p.Panel07.set_type("vertical");
                p.Panel07.move("65.00","404","100.00%","112",null,null);

                p.Static12.set_taborder("3");
                p.Static12.set_text("로그인에 어려움이 있으신가요?");
                p.Static12.set_cssclass("sta_WF_LoginDes");
                p.Static12.move("-80.00","360","95.76%","40",null,null);

                p.Static11.set_taborder("4");
                p.Static11.set_text("시스템 문의 : 032-000-0000");
                p.Static11.set_padding("12px 20px 11px 40px");
                p.Static11.move("-80.00","400","95.76%","30",null,null);
            	}
            );
            obj.set_type("default");
            obj.set_flexmainaxisalign("center");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("50");
            obj.set_spacing("40px 50px 40px 50px");
            obj.set_verticalgap("10");
            this.divLogin.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divLogin.form
            obj = new Layout("mobile","",0,0,this.divLogin.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staVline.set_visible("false");
                p.staVline.move("918","90","1","0",null,null);
            	}
            );
            obj.set_spacing("0px 20px 0px 20px");
            obj.set_type("default");
            obj.set_flexmainaxisalign("center");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("50");
            obj.set_verticalgap("10");
            this.divLogin.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","",1250,730,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("New Form");

                p.Panel00.set_taborder("0");
                p.Panel00.set_type("vertical");
                p.Panel00.set_spacing("30px 0px 40px 0px");
                p.Panel00.move("0","0",null,"140","60",null);

                p.Static00.set_taborder("1");
                p.Static00.set_text("입주자 서비스 플랫폼 로그인");
                p.Static00.set_cssclass("sta_WF_LoginSubTitle");
                p.Static00.set_fittocontents("height");
                p.Static00.move("132","41","100%","30",null,null);

                p.Static01.set_taborder("2");
                p.Static01.set_text("로그인 방식을 선택해주세요.");
                p.Static01.set_cssclass("sta_WF_LoginTitle");
                p.Static01.set_fittocontents("height");
                p.Static01.move("65","81","100%","50",null,null);

                p.divLogin.set_taborder("3");
                p.divLogin.set_text("Div01");
                p.divLogin.set_border("0.11100000143051147em dashed #d8d8d8,0px none,0.11100000143051147em dashed #d8d8d8,0px none");
                p.divLogin.set_formscrollbartype("none none");
                p.divLogin.move("50","Panel00:60","1000","510",null,null);
            	}
            );
            obj.set_horizontalgap("0");
            obj.set_mobileorientation("landscape");
            obj.set_tabletemplate("1* / 1*");
            obj.set_verticalgap("0");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","",390,870,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.move("0","0",null,"140","0",null);

                p.Static00.set_cssclass("sta_WF_LoginSubTitleM");

                p.Static01.set_cssclass("sta_WF_LoginTitleM");

                p.divLogin.move("0","Panel00:0",null,"702","0",null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            obj.set_horizontalgap("0");
            obj.set_tabletemplate("1* / 1*");
            obj.set_verticalgap("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frm_Login_D.xfdl", function() {
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

        	this.dsLogin.setColumn(0, "userId", this.divLogin.form.Div00.form.userId.value);
        	this.dsLogin.setColumn(0, "pswd", this.divLogin.form.Div00.form.pswd.value);

         	var strSvcId    = "login";
         	var strSvcUrl   = "login/loginAction.do";
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
        			this.divLogin.form.Div00.form.userId.set_value("");
        			this.divLogin.form.Div00.form.pswd.set_value("");
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
        this.divWork_Div00_btnLgnAction_onclick = function(obj,e)
        {
        	this.fnLgnActionTrasaction();
        };

        this.divWork_Div00_Edit00_onkeyup = function(obj,e)
        {
        	if( e.keycode == 13)
        	{
        		this.fnLgnActionTrasaction();
        	}
        };


        this.divLogin_Div00_Static03_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.divLogin.form.Div00.form.Static03.addEventHandler("onclick",this.divLogin_Div00_Static03_onclick,this);
            this.divLogin.form.Div00.form.userId.addEventHandler("onkeyup",this.divWork_Div00_Edit00_onkeyup,this);
            this.divLogin.form.Div00.form.pswd.addEventHandler("onkeyup",this.divWork_Div00_Edit00_onkeyup,this);
            this.divLogin.form.Div00.form.btnLgnAction.addEventHandler("onclick",this.divWork_Div00_btnLgnAction_onclick,this);
        };
        this.loadIncludeScript("frm_Login_D.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
