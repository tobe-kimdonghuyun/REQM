(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM000P031");
            this.set_titletext("TSP 회원가입 안내");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsLogin", this);
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"pswd\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","0","0",null,"490","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_border("0.11100000143051147em dashed #d8d8d8,0px none,0.11100000143051147em dashed #d8d8d8,0px none");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("Static12_00","161","675","100%","250",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("인천국제공항 입주자 서비스 포털 가입을 환영합니다!\r\n가입전 아래 사항을 확인해주세요\r\n1. 공항공사 임/직원일 경우 별도 가입 없이 사내 그룹웨어를 통해 이용하실 수 있습니다.\r\n2. 이름, 휴대전화번호를 통해 회사 상관없이 최대 3개 계정만 생성이 가능합니다(입주자ㅔ계정관리자/일반], 이동지역 총 3개 유형)\r\n*신규 회사 계정이 필요할 경우 기존 회사 계정 탈퇴 필요\r\n3. 회원가입을 위하여 첨부하는 모든 파일에 개인정보는 삭제하시길 바랍니다.\r\n(생년월일 ,집주소, 주민등록번호 등)\r\n* 미삭제 시 불승인 처리됩니다.\r\n\r\n*만 14세 미만 고객에게는 회원가입 서비스를 제공하지 않습니다.\r\n안전한 회원가입을 위해 본인인증을 진행해주시길 바랍니다.");
            obj.set_cssclass("sta_WF_LoginDes");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel07_00","0","20","100%","268",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_cssclass("pan_WF_LoginInfo");
            obj.set_spacing("8px 8px 8px 10px");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static12_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00","6","863","100%","268",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_flexmainaxisalign("center");
            obj.set_spacing("0px  0px 0px 0px");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel07_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMblCert00","240","495","100%","60",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_text("휴대폰 본인인증");
            obj.set_cssclass("btn_MF_Login02");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnSimple00","18","320","100%","60",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("4");
            obj.set_text("간편인증");
            obj.set_cssclass("btn_MF_LoginSimple02");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","4.00","-5","100.00%","450",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_verticalgap("20");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem07\" componentid=\"Panel01_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"btnMblCert00\"/><PanelItem id=\"PanelItem06\" componentid=\"btnSimple00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static12_00.set_taborder("0");
                p.Static12_00.set_text("인천국제공항 입주자 서비스 포털 가입을 환영합니다!\r\n가입전 아래 사항을 확인해주세요\r\n1. 공항공사 임/직원일 경우 별도 가입 없이 사내 그룹웨어를 통해 이용하실 수 있습니다.\r\n2. 이름, 휴대전화번호를 통해 회사 상관없이 최대 3개 계정만 생성이 가능합니다(입주자ㅔ계정관리자/일반], 이동지역 총 3개 유형)\r\n*신규 회사 계정이 필요할 경우 기존 회사 계정 탈퇴 필요\r\n3. 회원가입을 위하여 첨부하는 모든 파일에 개인정보는 삭제하시길 바랍니다.\r\n(생년월일 ,집주소, 주민등록번호 등)\r\n* 미삭제 시 불승인 처리됩니다.\r\n\r\n*만 14세 미만 고객에게는 회원가입 서비스를 제공하지 않습니다.\r\n안전한 회원가입을 위해 본인인증을 진행해주시길 바랍니다.");
                p.Static12_00.set_cssclass("sta_WF_LoginDes");
                p.Static12_00.set_fittocontents("height");
                p.Static12_00.move("161","675","100%","250",null,null);

                p.Panel07_00.set_taborder("1");
                p.Panel07_00.set_cssclass("pan_WF_LoginInfo");
                p.Panel07_00.set_spacing("8px 8px 8px 10px");
                p.Panel07_00.set_type("vertical");
                p.Panel07_00.set_fittocontents("height");
                p.Panel07_00.move("0","20","100%","268",null,null);

                p.Panel01_00_00.set_taborder("2");
                p.Panel01_00_00.set_flexmainaxisalign("center");
                p.Panel01_00_00.set_spacing("0px  0px 0px 0px");
                p.Panel01_00_00.set_fittocontents("height");
                p.Panel01_00_00.move("6","863","100%","268",null,null);

                p.btnMblCert00.set_taborder("3");
                p.btnMblCert00.set_text("휴대폰 본인인증");
                p.btnMblCert00.set_cssclass("btn_MF_Login02");
                p.btnMblCert00.move("240","495","100%","60",null,null);

                p.btnSimple00.set_taborder("4");
                p.btnSimple00.set_text("간편인증");
                p.btnSimple00.set_cssclass("btn_MF_LoginSimple02");
                p.btnSimple00.move("18","320","100%","60",null,null);

                p.Panel02_00.set_taborder("5");
                p.Panel02_00.set_type("vertical");
                p.Panel02_00.set_verticalgap("20");
                p.Panel02_00.set_fittocontents("height");
                p.Panel02_00.move("4.00","-5","100.00%","450",null,null);
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
            obj = new Layout("default","Desktop_screen",1480,500,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("TSP 회원가입 안내");

                p.divForm.set_taborder("3");
                p.divForm.set_text("Div01");
                p.divForm.set_border("0.11100000143051147em dashed #d8d8d8,0px none,0.11100000143051147em dashed #d8d8d8,0px none");
                p.divForm.set_fittocontents("height");
                p.divForm.set_formscrollbartype("none none");
                p.divForm.move("0","0",null,"490","0",null);
            	}
            );
            obj.set_horizontalgap("0");
            obj.set_mobileorientation("landscape");
            obj.set_tabletemplate("1* / 1*");
            obj.set_verticalgap("0");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",480,550,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divForm.move("20","0",null,"540","20",null);
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
        this.registerScript("COM000P031.xfdl", function() {
        /**
        *  인천공항 원스톱 입주자서비스 프로젝트
        *  @FileName 	COM000P031.xfdl
        *  @Creator 	(주)이루온
        *  @CreateDate 	2024/08/08
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/08/08				조규완						최초생성
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

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/

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
        };

        this.fnPopupCallback = function(sPopupId, sRtn)
        {
        	if (this.gfnIsNull(sRtn)) return;

        	var objRtn = JSON.parse(sRtn);
        	if(sPopupId =="withAuth") {
        		if (objRtn.resultCode == "200") {
        			this.fnOpenMbrJoin(objRtn);
        		}
        	} else if(sPopupId =="hpAuth") {
        		if (objRtn.resultCode == "200") {
        			this.fnOpenMbrJoin(objRtn);
        		}
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnOpenMbrJoin = function(objRtn)
        {
        	var sTitle = "회원가입";
        	var objOption;
        	var objArg   = {
        		"userNm" : objRtn.name,
        		"mblTelno" : objRtn.phone
        	};
        	if (this.objApp.screenid == "Desktop_screen") {
        		objOption = {
        			popuptype: "modal"	//modal,modaless
        			, width: 800
        			, height: 800			//width,height 지정하지 않음 popup form size적용
        			, autosize: false
        			, title: sTitle
        			, resize: true
        			, titlebar: true
        		};
        	} else {
        		objOption = {
        			popuptype: "modal"	//modal,modaless
        			, autosize: true
        			, title: sTitle
        			, resize: true
        			, titlebar: true
        		};
        	}
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("memberRegi", "work::COM/member/COM000P032.xfdl", objArg, sPopupCallBack, objOption);

        	this.close();
        }
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divForm_btnMblCert_onclick = function(obj,e)
        {
        // 	var sTitle = "본인인증";		// 팝업 파이틀
        // 	var objArg   = {};			// 팝업창에 보낸 파라메터
        //
        // 	var objOption = {
        // 		popuptype: "modal"	//modal,modaless
        //  		, width: 0			// 팝업창 width
        //  		, height: 0			// 팝업창 height
        // 		, autosize: false		// 사이즈 자동 여부
        // 		, title: sTitle			// 팝업타이틀
        // 		, resize: false			// 사이즈 조정 여부
        // 		, titlebar: false		// 팝업 타이틀바 여부
        // 	};
        // 	var sPopupCallBack = "fnPopupCallback";		// 콜백명
        //
        // 	this.gfnOpenPopup("hpAuth"		// 팝업ID
        // 	, "work::COM/cert/hpAuthPopup.xfdl"	// 팝업 호출 화면
        // 	, objArg, sPopupCallBack, objOption);

        	var sTitle = "회원가입";
        	var objOption;
        	var objArg   = {};
        	if (this.objApp.screenid == "Desktop_screen") {
        		objOption = {
        			popuptype: "modal"	//modal,modaless
        			, width: 800
        			, height: 800			//width,height 지정하지 않음 popup form size적용
        			, autosize: false
        			, title: sTitle
        			, resize: true
        			, titlebar: true
        		};
        	} else {
        		objOption = {
        			popuptype: "modal"	//modal,modaless
        			, width: 480
        			, height: 600			//width,height 지정하지 않음 popup form size적용
        			, autosize: false
        			, title: sTitle
        			, resize: true
        			, titlebar: true
        		};
        	}
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("memberRegi", "work::COM/member/COM000P032.xfdl", objArg, sPopupCallBack, objOption);

        	this.close();
        };

        this.divForm_btnSimple_onclick = function(obj,e)
        {
        	var sTitle = "간편인증";		// 팝업 파이틀
        	var objArg   = {};			// 팝업창에 보낸 파라메터

        	var objOption = {
        		popuptype: "modal"		//modal,modaless
        // 		, width: 700			// 팝업창 width
        // 		, height: 700			// 팝업창 height
        		, autosize: false		// 사이즈 자동 여부
        		, title: sTitle			// 팝업타이틀
        		, resize: false			// 사이즈 조정 여부
        		, titlebar: true		// 팝업 타이틀바 여부
        	};
        	var sPopupCallBack = "fnPopupCallback";		// 콜백명

        	this.gfnOpenPopup("withAuth" , "work::COM/cert/withAuthPopup.xfdl", objArg, sPopupCallBack, objOption);

        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.divForm.form.btnMblCert00.addEventHandler("onclick",this.divForm_btnMblCert_onclick,this);
            this.divForm.form.btnSimple00.addEventHandler("onclick",this.divForm_btnSimple_onclick,this);
        };
        this.loadIncludeScript("COM000P031.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
