(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST011M00_001");
            this.set_titletext("신청자정보(보호구역)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,550);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Panel("Panel01","0","0","100.00%","1220",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_fittocontents("height");
            obj.set_type("vertical");
            obj.set_verticalgap("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem07\" componentid=\"divTaskPrcsFlw\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel02\"/><PanelItem id=\"PanelItem08\" componentid=\"panAplyNo\"/><PanelItem id=\"PanelItem02\" componentid=\"pan00\"/><PanelItem id=\"PanelItem03\" componentid=\"pan02\"/><PanelItem id=\"PanelItem04\" componentid=\"pan03\"/><PanelItem id=\"PanelItem05\" componentid=\"pan06\"/><PanelItem id=\"PanelItem06\" componentid=\"pan07\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle","0","0","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("신청자정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","84.00","6","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","128.00","6","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","1107.00","0","172","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02","1330","0","100.00%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("4");
            obj.set_fittocontents("none");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel00","0","0","96.88%","46",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("신청구분");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJobTycoSeNm","0","46","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_readonly("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","20.00","0","100%","86",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtJobTycoSeNm\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan00","0","466","100.00%","96",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00","0","0","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("신청자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAplcntNm","0","46","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_readonly("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","20.00","0","300","86",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtAplcntNm\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_01","10.00","10","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("신청자 회사명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAplcntCoNm","10.00","56","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_readonly("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_01","650.00","0","300","86",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtAplcntCoNm\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan02","1330","562","100.00%","96",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan_04_00","20.00","0","300","136",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel03\"/><PanelItem id=\"PanelItem04\" componentid=\"sta00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panBlank","650.00","0","300","1",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan03","1330","658","100.00%","147",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan_04_00\"/><PanelItem id=\"PanelItem02\" componentid=\"panBlank\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_01","30.00","30","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("등록자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edtRgtrNm","20.00","66","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_readonly("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("pan_04_00_00","30.00","10","300","86",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtRgtrNm\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00_01","40.00","40","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("등록자 회사명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edtRgtrCoNm","30.00","76","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_readonly("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("pan04_01_00","660.00","10","300","86",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtRgtrCoNm\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan06","1330","805","100.00%","96",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan_04_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan04_01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_01_00","0.00","0","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("공사위치 상세입력");
            obj.set_cssclass("sta_WF_Label_E");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCstrnPstnDtlInptCn","10.00","56","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_maxlength("500");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("pan_04_00_00_00","30.00","10","100%","86",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtCstrnPstnDtlInptCn\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan07","1330","901","100.00%","96",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan_04_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00","20.00","20","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("휴대폰번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03","82","282","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj._setContents("<Contents><PanelItem id=\"PanelItem05\" componentid=\"edtMblTelno1\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00\"/><PanelItem id=\"PanelItem02\" componentid=\"edtMblTelno2\"/><PanelItem id=\"PanelItem03\" componentid=\"Static01\"/><PanelItem id=\"PanelItem04\" componentid=\"edtMblTelno3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","195","315","30","40",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text(" - ");
            obj.set_fittocontents("width");
            obj.set_cssclass("sta_WF_Dash");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMblTelno2","282","317","150","40",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_flexgrow("1");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","453","312","30","40",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text(" - ");
            obj.set_fittocontents("width");
            obj.set_cssclass("sta_WF_Dash");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMblTelno3","577","323","150","40",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_flexgrow("1");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMblTelno1","22","316","150","40",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_flexgrow("1");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00","0","94","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("휴대폰번호는 우측상단 \"사용자 이름\" 클릭 후 해당 메뉴에서 등록 및 수정이 가능합니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Div("divTaskPrcsFlw","1340","284","100.00%","300",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("서비스 흐름");
            obj.set_cssclass("div_WF_InfoGuide");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("btnFold",null,"10","34","34","10",null,null,null,null,null,this.divTaskPrcsFlw.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divTaskPrcsFlw.addChild(obj.name, obj);

            obj = new Static("Static00","597","131","113","60",null,null,null,null,null,null,this.divTaskPrcsFlw.form);
            obj.set_taborder("1");
            obj.set_text("서비스 처리 흐름");
            this.divTaskPrcsFlw.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","10","10","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("신청번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAplyNo","0","46","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_readonly("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","20.00","0","100%","86",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtAplyNo\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panAplyNo","1382","335","100.00%","96",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTaskPrcsFlw.form
            obj = new Layout("default","",0,0,this.divTaskPrcsFlw.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnFold.set_taborder("0");
                p.btnFold.set_cssclass("btn_WF_ACMinus");
                p.btnFold.move(null,"10","34","34","10",null);

                p.Static00.set_taborder("1");
                p.Static00.set_text("서비스 처리 흐름");
                p.Static00.move("597","131","113","60",null,null);
            	}
            );
            this.divTaskPrcsFlw.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divTaskPrcsFlw.form
            obj = new Layout("mobile","",0,0,this.divTaskPrcsFlw.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divTaskPrcsFlw.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","",1280,550,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtAplcntNm","value","dsMst","aplcntNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edtRgtrNm","value","dsMst","rgtrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edtCstrnPstnDtlInptCn","value","dsMst","cstrnPstnDtlInptCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtMblTelno1","value","dsMst","mblTelno1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edtMblTelno2","value","dsMst","mblTelno2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edtMblTelno3","value","dsMst","mblTelno3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edtAplcntCoNm","value","dsMst","aplcntInstNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edtRgtrCoNm","value","dsMst","aplcntInstNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edtAplyNo","value","dsMst","aplyNo");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CST011M00_01.xfdl","xjs::TaskCom.xjs");
        this.registerScript("CST011M00_01.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	CST011M00_01.xfdl
        *  @Creator 	ELUON INS
        *  @CreateDate 	2024/08/08
        *  @Desction
        *  @Author
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/08/08			이규철    					최초생성
        *******************************************************************************
        */
        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fvParent = this.parent.parent;

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수

        	// this.fnInit();
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

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function () {
        	// 신청구분 셋팅
        	this.edtJobTycoSeNm.value = this.fvParent.fvJobTycoSeNm;

        	// ** 세션정보 셋팅 **
        	// 신청자, 신청자화사명, 전화번호 암복호화 적용 후 세팅 필요
        	const dsMst = this.fvParent.dsMst;
        	dsMst.setColumn(0, "aplcntId", this.fvParent.gvUserId);
        	dsMst.setColumn(0, "aplcntNm", this.fvParent.gvUserNm);
        	dsMst.setColumn(0, "mblTelno", "010-1234-5678"/*this.fvParent.gvTelNo*/)
        	dsMst.setColumn(0, "mblTelno1", "010"/*this.fvParent.gvTelNo*/)
        	dsMst.setColumn(0, "mblTelno2", "1234"/*this.fvParent.gvTelNo*/)
        	dsMst.setColumn(0, "mblTelno3", "5678"/*this.fvParent.gvTelNo*/)
        	dsMst.setColumn(0, "rgtrId", this.fvParent.gvUserId);
        	dsMst.setColumn(0, "rgtrNm", this.fvParent.gvUserNm);
        	dsMst.setColumn(0, "aplcntInstCd", this.fvParent.gvCoId);	//신청자기관코드
        	dsMst.setColumn(0, "aplcntDeptCd", this.fvParent.gvDeptId);	//신청자부서코드

        	this.edtAplcntCoNm.value = this.fvParent.gvCoNm;
        	this.edtRgtrCoNm.value = this.fvParent.gvCoNm;

        	//신청번호 영역표현
        	this.fnSetAplyNo();
        }

        //신청번호 영역표현
        this.fnSetAplyNo = function()
        {
        	const dsMst = this.fvParent.dsMst;
        	var sJobCd = dsMst.getColumn(0, "jobCd");
        	//신청서보완[TAS00071], 담당자 접수[TAS00072], 위해물품검토[TAS00073], 현업확인[TAS00485], 만족도조사[TAS00293], 종료[TAS00075]
        	if("TAS00071,TAS00072,TAS00073,TAS00485,TAS00293,TAS00075".indexOf(sJobCd) != -1) {
        		// 신청번호 영역 보이기
        		this.panAplyNo.visible = true;
        	} else {
        		// 신청번호 영역 보이지 않기
        		this.panAplyNo.visible = false;
        	}
        	this.resetScroll();
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.Button01_onclick = function(obj,e)
        {

        };

        //서비스흐름 버튼
        this.divTaskPrcsFlw_btnFold_onclick = function(obj,e)
        {
        	this.cfnFold(obj, e.ctrlkey);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.Panel00.addEventHandler("onclick",this.Panel00_onclick,this);
            this.divTaskPrcsFlw.form.btnFold.addEventHandler("onclick",this.divTaskPrcsFlw_btnFold_onclick,this);
        };
        this.loadIncludeScript("CST011M00_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
