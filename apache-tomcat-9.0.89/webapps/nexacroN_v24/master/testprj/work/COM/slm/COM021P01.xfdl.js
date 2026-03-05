(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM021P01");
            this.set_titletext("신규 SLM 카탈로그 생성");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,333);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGet", this);
            obj._setContents("<ColumnInfo><Column id=\"evlYr\" type=\"STRING\" size=\"256\"/><Column id=\"evlNotn\" type=\"STRING\" size=\"256\"/><Column id=\"evlBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"evlEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"notEvlScrCrtr\" type=\"STRING\" size=\"256\"/><Column id=\"notEvlScrVl\" type=\"STRING\" size=\"256\"/><Column id=\"ognzGroupId\" type=\"STRING\" size=\"256\"/><Column id=\"srvcGroupId\" type=\"STRING\" size=\"256\"/><Column id=\"scrGroupId\" type=\"STRING\" size=\"256\"/><Column id=\"evlAplcnYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEvlYr", this);
            obj._setContents("<ColumnInfo><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEvlNotn", this);
            obj._setContents("<ColumnInfo><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"evlAplcnYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNotEvlScrCrtr", this);
            obj._setContents("<ColumnInfo><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cdNm\">선택</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"evlYr\" type=\"STRING\" size=\"256\"/><Column id=\"evlNotn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEvlMax", this);
            obj._setContents("<ColumnInfo><Column id=\"evlYr\" type=\"STRING\" size=\"256\"/><Column id=\"evlNotn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","0","0","100.00%","333",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","97","193","100%","91",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_type("horizontal");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("20");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","97","193","100%","91",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("12");
            obj.set_type("horizontal");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_spacing("0px 20px 10px 20px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_01\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","97","193","250","80",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("sta00_01","0","12","100%","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("평가년도");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.addChild(obj.name, obj);

            obj = new Edit("edtEvlYr","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","93","109","100%","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"edtEvlYr\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("sta00_01_00","0","12","100%","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("5");
            obj.set_text("평가차수");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.addChild(obj.name, obj);

            obj = new Edit("edtEvlNotn","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00","93","109","100%","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("7");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"edtEvlNotn\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","97","193","250","80",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("sta00_01_01","0","12","100%","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("9");
            obj.set_text("평가기간");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_01","93","109","100%","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("10");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divCal\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01","97","193","100%","80",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("11");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta00_01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00_01\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel00_02","97","193","100%","91",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("17");
            obj.set_type("horizontal");
            obj.set_horizontalgap("20");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_00_03\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("sta00_01_02","0","12","100%","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("13");
            obj.set_text("만족도 미평가 시 기본 점수");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_02","93","109","100%","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("14");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"cmbNotEvlScrCrtr\"/><PanelItem id=\"PanelItem02\" componentid=\"edtNotEvlScrVl\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_02","97","193","250","80",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("15");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta00_01_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00_02\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Edit("edtNotEvlScrVl","10.00","158","150","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("16");
            obj.set_readonly("true");
            obj.set_flexgrow("1");
            obj.set_text("");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("sta00_01_03","0","12","100%","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("18");
            obj.set_text("참조대상 설정값 년/차수");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_03","93","109","100%","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("19");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"cmbEvlYr\"/><PanelItem id=\"PanelItem02\" componentid=\"cmbEvlNotn\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_03","97","193","250","80",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("20");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta00_01_03\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00_03\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Combo("cmbNotEvlScrCrtr","788.00","145","200","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("21");
            obj.set_flexgrow("1");
            obj.set_innerdataset("dsNotEvlScrCrtr");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("0");
            this.divForm.addChild(obj.name, obj);

            obj = new Combo("cmbEvlYr","788.00","145","200","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("22");
            obj.set_flexgrow("1");
            obj.set_innerdataset("dsEvlYr");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.addChild(obj.name, obj);

            obj = new Combo("cmbEvlNotn","788.00","145","150","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("23");
            obj.set_flexgrow("1");
            obj.set_innerdataset("dsEvlNotn");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divPopBtn","0","550","100%","60",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("24");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnSave","182","10","195","40",null,null,null,null,null,null,this.divForm.form.divPopBtn.form);
            obj.set_taborder("1");
            obj.set_text("신규 SLM 카탈로그 생성");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_fittocontents("width");
            this.divForm.form.divPopBtn.addChild(obj.name, obj);

            obj = new Calendar("calEvlBgngYmd","180.00","0","145","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("25");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staDash","160.00","0","10","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("26");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_Dash");
            this.divForm.addChild(obj.name, obj);

            obj = new Calendar("calEvlEndYmd","0","0","145","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("27");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("divCal","598","172","65%","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("28");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"calEvlBgngYmd\"/><PanelItem id=\"PanelItem00\" componentid=\"staDash\"/><PanelItem id=\"PanelItem02\" componentid=\"calEvlEndYmd\"/></Contents>");
            this.divForm.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form.divPopBtn.form
            obj = new Layout("default","",0,0,this.divForm.form.divPopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnSave.set_taborder("1");
                p.btnSave.set_text("신규 SLM 카탈로그 생성");
                p.btnSave.set_cssclass("btn_WF_Yes");
                p.btnSave.set_fittocontents("width");
                p.btnSave.move("182","10","195","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("20");
            this.divForm.form.divPopBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divPopBtn.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divPopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("20");
            this.divForm.form.divPopBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,function(p){});
            obj.set_type("vertical");
            obj.set_spacing("0px 20px 0px 20px");
            this.divForm.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Phone_screen",600,333,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.edtEvlYr","value","dsGet","evlYr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.edtEvlNotn","value","dsGet","evlNotn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.calEvlBgngYmd","value","dsGet","evlBgngYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.calEvlEndYmd","value","dsGet","evlEndYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.cmbNotEvlScrCrtr","value","dsGet","notEvlScrCrtr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.edtNotEvlScrVl","value","dsGet","notEvlScrVl");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.cmbEvlYr","value","dsSearch","evlYr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divForm.form.cmbEvlNotn","value","dsSearch","evlNotn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("COM021P01.xfdl", function() {
        /**
        *  인천공항 원스톱 입주자서비스 프로젝트
        *  @FileName 	samplePopup.xfdl
        *  @Creator 	(주)이루온
        *  @CreateDate 	2024/08/09
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/08/09				김완성						최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();

        this.validateColumn = [];

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수

        	this.validateColumn.push({"title" : "평가년도", "com": this.divForm.form.edtEvlYr});
        	this.validateColumn.push({"title" : "평가차수", "com": this.divForm.form.edtEvlNotn});
        	this.validateColumn.push({"title" : "평가시작일", "com": this.divForm.form.calEvlBgngYmd});
        	this.validateColumn.push({"title" : "평가종료일", "com": this.divForm.form.calEvlBgngYmd});
        	this.validateColumn.push({"title" : "만족도 미평가 시 기본점수", "com": this.divForm.form.cmbNotEvlScrCrtr});
        	//this.validateColumn.push({"title" : "만족도 미평가 시 기본점수", "com": this.divForm.form.edtNotEvlScrVl});

        	this.fnInit();
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	this.getSearchTransaction();
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.getSearchTransaction = function()
        {
        	var strSvcId    = "search";
        	var strSvcUrl   = "slm/slmCatalogInfoInq.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsGet=dsGet";
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

        this.getBaseSearchTransaction = function()
        {
        	var strSvcId    = "searchBase";
        	var strSvcUrl   = "slm/slmCatalogBaseInfoInq.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsEvlYr=dsEvlYr dsEvlNotn=dsEvlNotn dsEvlMax=dsEvlMax";
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

        this.getEvlNotnSearchTransaction = function()
        {
        	var strSvcId    = "searchEvlNotn";
        	var strSvcUrl   = "slm/slmCatalogEvlNotnInfoInq.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsEvlNotn=dsEvlNotn";
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

        // 데이터 저장
        this.saveTransaction = function()
        {
        	var strSvcId    = "save";
        	var strSvcUrl   = "slm/newSlmCatalogCreate.do";
        	var inData      = "dsGet=dsGet:U";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= false;

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
        		case "search" :
        			if(this.dsGet.getRowCount() > 0) {
        				this.dsGet.setColumn(0, "evlNotn", nexacro.toNumber(this.dsEvlMax.getColumn(0, "evlNotn")) + 1);

        				var year = this.dsGet.getColumn(0, "evlYr");
        				this.dsGet.setColumn(0, "evlYr", year);
        				this.dsGet.setColumn(0, "evlBgngYmd", year + "0101");
        				this.dsGet.setColumn(0, "evlEndYmd", year + "1031");
        			} else {
        				this.dsGet.addRow();
        				this.dsGet.setColumn(0, "evlNotn", "1");

        				var year = this.gfnGetDate("date").substr(0, 4);
        				this.dsGet.setColumn(0, "evlYr", year);
        				this.dsGet.setColumn(0, "evlBgngYmd", year + "0101");
        				this.dsGet.setColumn(0, "evlEndYmd", year + "1031");
        			}
        			break;
        		case "searchBase" :
        			this.divForm.form.cmbEvlYr.index = 0;
        			this.divForm.form.cmbEvlNotn.index = 0;
        			this.cfnSearch();
        			break;
        		case "searchEvlNotn" :
        			this.divForm.form.cmbEvlNotn.index = 0;
        			break;
        		case "save":
        			this.gfnAlertMsg("saveAfter", "MSG_001", "", "msgCallback");
        			break;
        	}
        };

        /**
        	sPopupId	// 페세지창을 구분하기 위한 ID
        	sRtn		// 메세지창에서 리턴 해주는 변수값 (JSON 형태의 스트링 리턴)
        **/
        this.msgCallback = function(sPopupId, sRtn)
        {
        	var oRtn = JSON.parse(sRtn);
        	if(sPopupId == "save") {
        		if(oRtn.result == "Y") {
        			this.saveTransaction();
        		}
        	}
        	else if(sPopupId == "saveAfter") {
        		var arr = {"result" : "Y"};
        		this.close(JSON.stringify(arr));
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	this.gfnCmmCode("notEvlScrCrtr", "dsNotEvlScrCrtr", "NOT_EVL_SCR_CRTR", "S");
        	this.divForm.form.cmbNotEvlScrCrtr.index = 0;
        	this.getBaseSearchTransaction();
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divForm_edtEvlYr_onchanged = function(obj,e)
        {
        	if(this.gfnIsNull(e.postvalue) != true) {
        		if(nexacro.toNumber(e.postvalue) > nexacro.toNumber(this.dsList.getColumn(0, "evlYr"))) {
        			this.dsGet.setColumn(0, "evlNotn", "1");
        		} else if(nexacro.toNumber(e.postvalue) == nexacro.toNumber(this.dsList.getColumn(0, "evlYr"))) {
        			this.dsGet.setColumn(0, "evlNotn", nexacro.toNumber(this.dsList.getColumn(0, "evlNotn")) + 1);
        		} else {
        			this.dsGet.setColumn(0, "evlNotn", "");
        		}
        	} else {
        		this.dsGet.setColumn(0, "evlNotn", "");
        	}
        };

        this.divForm_divPopBtn_btnSave_onclick = function(obj,e)
        {
        	if(this.gfnDsIsUpdated(this.dsGet) != true) {
        		this.gfnAlertMsg("msg", "MSG_004");
        	} else {
        		if(this.gfnDsIsValidated(this.validateColumn)) {
        			if(this.dsGet.getColumn(0, "notEvlScrCrtr") == "VL" && this.gfnIsNull(this.dsGet.getColumn(0, "notEvlScrVl")) == true) {
        				this.gfnAlertMsg("validate", "CST_004", ["만족도 미평가 시 기본 점수"], "");
        				this.divForm.form.edtNotEvlScrVl.setFocus();
        				return;
        			}

        			this.gfnConfirmMsg("save", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        		}
        	}
        };

        this.divForm_cmbNotEvlScrCrtr_onitemchanged = function(obj,e)
        {
        	if(e.postvalue == "VL") {
        		this.divForm.form.edtNotEvlScrVl.readonly = false;
        	} else {
        		this.dsGet.setColumn(0, "notEvlScrVl", "");
        		this.divForm.form.edtNotEvlScrVl.readonly = true;
        	}
        };

        this.divForm_cmbEvlYr_onitemchanged = function(obj,e)
        {
        	if(this.gfnIsNull(e.postvalue) != true) {
        		this.dsSearch.setColumn(0, "evlYr", e.postvalue);
        		this.getEvlNotnSearchTransaction();
        	}
        };

        // 참조 값 조회
        this.divForm_cmbEvlNotn_onitemchanged = function(obj,e)
        {
        	if(this.gfnIsNull(this.divForm.form.cmbEvlYr.value) != true && this.gfnIsNull(e.postvalue) != true) {
        		this.cfnSearch();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.edtEvlYr.addEventHandler("onchanged",this.divForm_edtEvlYr_onchanged,this);
            this.divForm.form.cmbNotEvlScrCrtr.addEventHandler("onitemchanged",this.divForm_cmbNotEvlScrCrtr_onitemchanged,this);
            this.divForm.form.cmbEvlYr.addEventHandler("onitemchanged",this.divForm_cmbEvlYr_onitemchanged,this);
            this.divForm.form.cmbEvlNotn.addEventHandler("onitemchanged",this.divForm_cmbEvlNotn_onitemchanged,this);
            this.divForm.form.divPopBtn.form.btnSave.addEventHandler("onclick",this.divForm_divPopBtn_btnSave_onclick,this);
        };
        this.loadIncludeScript("COM021P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
