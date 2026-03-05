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
            this.set_titletext("비밀번호찾기");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userNm\" type=\"STRING\" size=\"256\"/><Column id=\"userMblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"certNo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","0","0",null,"650","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_border("0.11100000143051147em dashed #d8d8d8,0px none,0.11100000143051147em dashed #d8d8d8,0px none");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","4.00","-5","100.00%","650",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("19");
            obj.set_type("vertical");
            obj.set_verticalgap("20");
            obj.set_fittocontents("height");
            obj.set_flexmainaxisalign("start");
            obj._setContents("<Contents><PanelItem id=\"PanelItem07\" componentid=\"pan01\"/><PanelItem id=\"PanelItem05\" componentid=\"pan02\"/><PanelItem id=\"PanelItem04\" componentid=\"pan03\"/><PanelItem id=\"PanelItem03\" componentid=\"pan04\"/><PanelItem id=\"PanelItem01\" componentid=\"pan05\"/><PanelItem id=\"PanelItem00\" componentid=\"btnYes\"/><PanelItem id=\"PanelItem06\" componentid=\"btnSimple\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("Static12","161","675","100%","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("4");
            obj.set_text("회원정보에 등록된 휴대전화 번호와 입력한 휴대전화 번호가 동일해야, 인증번호를 받을 수 있습니다.\r\n인증번호는 카카오톡 발송 후 설치여부 미확인 시 문자메세지로 전송됩니다. (카카오톡 확인 요청)");
            obj.set_cssclass("sta_WF_LoginDes");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("pan06","0","20","100.00%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("5");
            obj.set_cssclass("pan_WF_LoginInfo");
            obj.set_spacing("8px 8px 8px 10px");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static12\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("pan01","6","863","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("6");
            obj.set_flexmainaxisalign("center");
            obj.set_spacing("0px  0px 0px 0px");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan06\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staUserNm","211","290","100%","25",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("7");
            obj.set_text("이름");
            obj.set_cssclass("sta_WF_LoginLabel");
            this.divForm.addChild(obj.name, obj);

            obj = new Edit("edtUserNm","214","340","100%","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_displaynulltext("이름 입력");
            obj.set_text("");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("pan03","172","261","100%","65",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staUserNm\"/><PanelItem id=\"PanelItem01\" componentid=\"edtUserNm\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staMblTelno","232","381","100%","25",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("9");
            obj.set_text("휴대전화번호");
            obj.set_cssclass("sta_WF_LoginLabel");
            this.divForm.addChild(obj.name, obj);

            obj = new Edit("edtMblTelno","222","425","100%","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_password("false");
            obj.set_displaynulltext("휴대전화번호 입력");
            obj.set_text("");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("pan04","172","321","100%","65",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("10");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staMblTelno\"/><PanelItem id=\"PanelItem01\" componentid=\"edtMblTelno\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staCertNo","232","381","100%","25",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("11");
            obj.set_text("인증번호");
            obj.set_cssclass("sta_WF_LoginLabel");
            this.divForm.addChild(obj.name, obj);

            obj = new Edit("edtCertNo","222","425","100%","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_password("true");
            obj.set_displaynulltext("인증번호 입력");
            obj.set_text("");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btn01","418","386","130","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("12");
            obj.set_text("인증번호받기");
            obj.set_fittocontents("width");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("pan07","17","405","100.00%","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("13");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"edtCertNo\"/><PanelItem id=\"PanelItem01\" componentid=\"btn01\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("sta00","200.00","383","100%","30",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("14");
            obj.set_text("인증번호는 인증번호받기를 누른 후 5분간 유효합니다. ");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel05","316","337","100.00%","75",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("15");
            obj.set_type("vertical");
            obj.set_verticalgap("5");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan07\"/><PanelItem id=\"PanelItem02\" componentid=\"sta00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("pan05","172","321","100.00%","100",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("16");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCertNo\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel05\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnYes","240","495","100%","60",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("17");
            obj.set_text("확인");
            obj.set_cssclass("btn_MF_Login02");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnSimple","18","320","100%","60",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("18");
            obj.set_text("간편인증 찾기");
            obj.set_cssclass("btn_MF_LoginSimple02");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staUserId","211","290","100%","25",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("20");
            obj.set_text("아이디");
            obj.set_cssclass("sta_WF_LoginLabel");
            this.divForm.addChild(obj.name, obj);

            obj = new Edit("edtUserId","214","340","100%","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_displaynulltext("아이디 입력");
            obj.set_text("");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("pan02","172","261","100%","65",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("21");
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
                p.Panel00.set_taborder("19");
                p.Panel00.set_type("vertical");
                p.Panel00.set_verticalgap("20");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_flexmainaxisalign("start");
                p.Panel00.move("4.00","-5","100.00%","650",null,null);

                p.Static12.set_taborder("4");
                p.Static12.set_text("회원정보에 등록된 휴대전화 번호와 입력한 휴대전화 번호가 동일해야, 인증번호를 받을 수 있습니다.\r\n인증번호는 카카오톡 발송 후 설치여부 미확인 시 문자메세지로 전송됩니다. (카카오톡 확인 요청)");
                p.Static12.set_cssclass("sta_WF_LoginDes");
                p.Static12.set_fittocontents("height");
                p.Static12.move("161","675","100%","40",null,null);

                p.pan06.set_taborder("5");
                p.pan06.set_cssclass("pan_WF_LoginInfo");
                p.pan06.set_spacing("8px 8px 8px 10px");
                p.pan06.set_type("vertical");
                p.pan06.set_fittocontents("height");
                p.pan06.move("0","20","100.00%","50",null,null);

                p.pan01.set_taborder("6");
                p.pan01.set_flexmainaxisalign("center");
                p.pan01.set_spacing("0px  0px 0px 0px");
                p.pan01.set_fittocontents("height");
                p.pan01.move("6","863","100%","50",null,null);

                p.staUserNm.set_taborder("7");
                p.staUserNm.set_text("이름");
                p.staUserNm.set_cssclass("sta_WF_LoginLabel");
                p.staUserNm.move("211","290","100%","25",null,null);

                p.edtUserNm.set_taborder("1");
                p.edtUserNm.set_displaynulltext("이름 입력");
                p.edtUserNm.move("214","340","100%","40",null,null);

                p.pan03.set_taborder("8");
                p.pan03.set_type("vertical");
                p.pan03.set_fittocontents("height");
                p.pan03.move("172","261","100%","65",null,null);

                p.staMblTelno.set_taborder("9");
                p.staMblTelno.set_text("휴대전화번호");
                p.staMblTelno.set_cssclass("sta_WF_LoginLabel");
                p.staMblTelno.move("232","381","100%","25",null,null);

                p.edtMblTelno.set_taborder("2");
                p.edtMblTelno.set_password("false");
                p.edtMblTelno.set_displaynulltext("휴대전화번호 입력");
                p.edtMblTelno.move("222","425","100%","40",null,null);

                p.pan04.set_taborder("10");
                p.pan04.set_type("vertical");
                p.pan04.set_fittocontents("height");
                p.pan04.move("172","321","100%","65",null,null);

                p.staCertNo.set_taborder("11");
                p.staCertNo.set_text("인증번호");
                p.staCertNo.set_cssclass("sta_WF_LoginLabel");
                p.staCertNo.move("232","381","100%","25",null,null);

                p.edtCertNo.set_taborder("3");
                p.edtCertNo.set_password("true");
                p.edtCertNo.set_displaynulltext("인증번호 입력");
                p.edtCertNo.move("222","425","100%","40",null,null);

                p.btn01.set_taborder("12");
                p.btn01.set_text("인증번호받기");
                p.btn01.set_fittocontents("width");
                p.btn01.move("418","386","130","40",null,null);

                p.pan07.set_taborder("13");
                p.pan07.set_horizontalgap("10");
                p.pan07.set_fittocontents("height");
                p.pan07.move("17","405","100.00%","40",null,null);

                p.sta00.set_taborder("14");
                p.sta00.set_text("인증번호는 인증번호받기를 누른 후 5분간 유효합니다. ");
                p.sta00.set_cssclass("sta_WF_Des");
                p.sta00.set_fittocontents("height");
                p.sta00.move("200.00","383","100%","30",null,null);

                p.Panel05.set_taborder("15");
                p.Panel05.set_type("vertical");
                p.Panel05.set_verticalgap("5");
                p.Panel05.set_fittocontents("height");
                p.Panel05.move("316","337","100.00%","75",null,null);

                p.pan05.set_taborder("16");
                p.pan05.set_type("vertical");
                p.pan05.set_fittocontents("height");
                p.pan05.move("172","321","100.00%","100",null,null);

                p.btnYes.set_taborder("17");
                p.btnYes.set_text("확인");
                p.btnYes.set_cssclass("btn_MF_Login02");
                p.btnYes.move("240","495","100%","60",null,null);

                p.btnSimple.set_taborder("18");
                p.btnSimple.set_text("간편인증 찾기");
                p.btnSimple.set_cssclass("btn_MF_LoginSimple02");
                p.btnSimple.move("18","320","100%","60",null,null);

                p.staUserId.set_taborder("20");
                p.staUserId.set_text("아이디");
                p.staUserId.set_cssclass("sta_WF_LoginLabel");
                p.staUserId.move("211","290","100%","25",null,null);

                p.edtUserId.set_taborder("0");
                p.edtUserId.set_displaynulltext("아이디 입력");
                p.edtUserId.move("214","340","100%","40",null,null);

                p.pan02.set_taborder("21");
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
            obj = new Layout("default","Desktop_screen",1480,650,this,
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
                p.divForm.move("0","0",null,"650","0",null);
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
            obj = new BindItem("item0","divForm.form.edtUserId","value","dsSearch","userId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.edtUserNm","value","dsSearch","userNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.edtMblTelno","value","dsSearch","userMblTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.edtCertNo","value","dsSearch","certNo");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("COM000P02.xfdl", function() {
        /**
        *  인천공항 원스톱 입주자서비스 프로젝트
        *  @FileName 	COM000P02.xfdl
        *  @Creator 	(주)이루온
        *  @CreateDate 	2024/11/08
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/11/08				조규완						최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        this.randNum;
        this.validateColumn = [];
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수
        	this.fnInit();

        	this.validateColumn.push({"title" : "아이디", "com": this.divForm.form.edtUserId});
        	this.validateColumn.push({"title" : "이름", "com": this.divForm.form.edtUserNm});
        	this.validateColumn.push({"title" : "휴대전화번호", "com": this.divForm.form.edtMblTelno});
        //	this.validateColumn.push({"title" : "인증번호", "com": this.divForm.form.edtCertNo});
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.getSearchTransaction = function() {
        	var strSvcId    = "search";
        	var strSvcUrl   = "member/userIdSch.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsList=dsList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc, 	// transaction의 결과를 받을 Function 이름
        						isAsync); 		// 비동기통신 여부 [생략가능]
        };
        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0)
        	{
        		return;
        	}

        	switch(svcID)
        	{
        		case "search":
        			if (!this.gfnIsNull(this.dsList.getColumn(0, "userId"))) {
        				this.fnPwInit();
        				this.close();
        			} else {
        				this.gfnAlertMsg("msg", "MSG_011", ["존재하지 않는 회원입니다."]);
        			}
        			break;
        	}
        };

        this.fnPopupCallback = function(sPopupId, sRtn)
        {
        	if (this.gfnIsNull(sRtn)) return;

        	var objRtn = JSON.parse(sRtn);
        	if(sPopupId =="withAuth") {
        		this.fnCertInfo(objRtn);
        	} else if(sPopupId =="hpAuth") {
        		this.fnCertInfo(objRtn);
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {

        }

        this.fnPwInit = function()
        {
        	var sTitle = "비밀번호 초기화";		// 팝업 파이틀
        	var objArg   = {"id" : this.dsList.getColumn(0, "userId")};			// 팝업창에 보낸 파라메터

        	var objOption = {
        		popuptype: "modal"		//modal,modaless
         		, width: 600			// 팝업창 width
         		, height: 420			// 팝업창 height
        		, autosize: false		// 사이즈 자동 여부
        		, title: sTitle			// 팝업타이틀
        		, resize: false			// 사이즈 조정 여부
        		, titlebar: true		// 팝업 타이틀바 여부
        	};
        	var sPopupCallBack = "fnPopupCallback";		// 콜백명

        	this.gfnOpenPopup("pwInit" , "work::COM/member/COM000P021.xfdl", objArg, sPopupCallBack, objOption);
        }

        this.fnCertInfo = function(objRtn)
        {
        	if (objRtn.resultCode == "200") {
        		this.dsSearch.setColumn(0, "userNm", objRtn.name);
        		this.dsSearch.setColumn(0, "userMblTelno", objRtn.phone);
        		this.getSearchTransaction();
        	}
        }

        this.fnCertValidation = function()
        {
        	var certNo = this.divForm.form.edtCertNo.value;
        	if (certNo != this.randNum) {
        		this.gfnAlertMsg("msg", "MSG_011", ["인증번호가 일치하지 않습니다."]);
        		return false;
        	}
        	return true;
        }
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        // 인증번호받기 버튼
        this.divForm_btnCertNo_onclick = function(obj,e)
        {
        	var randNum_ = Math.random() * 1000000;
        	this.randNum = Math.floor(randNum_);
        	console.log(this.randNum);

        	//	dsSms dataset
        	// 	send_num		// 보내는사람 전화번호
        	// 	recipient_num	// 받는사람 전화번호
        	// 	msg_cont_rep	// 제목
        	// 	template		// 내용 템플릿ID

        	var send_num = "15881234";
        	var recipient_num = this.divForm.form.edtMblTelno.value;
        	var contentId = "TSP_36R1";

        	var certNo = this.randNum;

        	this.dsSms.addColumn("certNo", "STRING");

        	this.dsSms.setColumn(0, "send_num", send_num);
        	this.dsSms.setColumn(0, "recipient_num", recipient_num);
        	this.dsSms.setColumn(0, "contentId", contentId);
        	this.dsSms.setColumn(0, "certNo", certNo);


        	this.gfn_Api_sms(
        		"sms"		// API ID
        		, "dsSms"	// 데이터셋명
        		, "apiCallback");	// 콜백명
        };

        // 확인 버튼
        this.divForm_btnYes_onclick = function(obj,e)
        {
        	if(this.gfnDsIsValidated(this.validateColumn) && this.fnCertValidation()) {
        		this.getSearchTransaction();
        	}
        };

        // 간편인증 찾기 버튼
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
        };

        // 엔터키
        this.divForm_onkeyup = function(obj,e)
        {
        	if( e.keycode == 13)
        	{
        		if(this.gfnDsIsValidated(this.validateColumn) && this.fnCertValidation()) {
        			this.getSearchTransaction();
        		}
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
            this.divForm.form.edtUserNm.addEventHandler("onkeyup",this.divWork_Div00_Edit00_onkeyup,this);
            this.divForm.form.edtCertNo.addEventHandler("onkeyup",this.divLogin_Div00_pswd_onkeyup,this);
            this.divForm.form.btn01.addEventHandler("onclick",this.divForm_btnCertNo_onclick,this);
            this.divForm.form.btnYes.addEventHandler("onclick",this.divForm_btnYes_onclick,this);
            this.divForm.form.btnSimple.addEventHandler("onclick",this.divForm_btnSimple_onclick,this);
            this.divForm.form.edtUserId.addEventHandler("onkeyup",this.divWork_Div00_Edit00_onkeyup,this);
        };
        this.loadIncludeScript("COM000P02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
