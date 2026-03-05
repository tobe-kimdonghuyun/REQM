(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST009M00");
            this.set_titletext("도면대출신청(신청자 정보)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,560);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staSubTitle","0","0","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("신청자정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","1070","0","209","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents/>");
            this.addChild(obj.name, obj);

            obj = new Panel("panForm","0","10",null,"1460","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divInfoGuide\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"div00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("div00","0","369","100.00%","721",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("div00");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("pan00","1500","50","100.00%","96",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staAplySeCdNm","0","-370","96.88%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_text("신청구분");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","20.00","-370","300","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staAplySeCdNm\"/><PanelItem id=\"PanelItem01\" componentid=\"edtAplySeCdNm\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan02","1500","146","100.00%","96",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtAplyNo","0","-326","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staAplyNo","0","-370","96.88%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_text("신청번호");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","20.00","-370","300","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staAplyNo\"/><PanelItem id=\"PanelItem01\" componentid=\"edtAplyNo\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtAplySeCdNm","0","-325","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan03","1500","242","100.00%","96",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02_01\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan06","1500","338","100.00%","96",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("15");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan_04_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBlank\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtRgtrMblTelno","0","-322","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("18");
            obj.set_readonly("true");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staRgtrMblTelno","0","-368","47.66%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("17");
            obj.set_text("등록자 휴대폰번호");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","0","-292","100%","32",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("27");
            obj.set_text("휴대폰번호는 우측상단 \"사용자 이름\" 클릭 후 해당 메뉴에서 등록 및 수정이 가능합니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtFlrplnStgRbprsnMblTelno","0","-328","100%","32",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("26");
            obj.set_readonly("true");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staFlrplnStgRbprsnMblTelno","0","-368","47.66%","37",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("25");
            obj.set_text("도면보관책임자 휴대폰번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtFlrplnStgRbprsnNm","0","-322","100%","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("23");
            obj.set_readonly("true");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staFlrplnStgRbprsnNm","0","-368","47.66%","43",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("22");
            obj.set_text("도면보관 책임자");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan_04_00_00","20","-368","300","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("21");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staFlrplnStgRbprsnNm\"/><PanelItem id=\"PanelItem01\" componentid=\"edtFlrplnStgRbprsnNm\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel01","1500","458","100%","120",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("20");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("20");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan_04_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"pan04_01_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan04_01_00","650.00","-368","300","110",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("24");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staFlrplnStgRbprsnMblTelno\"/><PanelItem id=\"PanelItem01\" componentid=\"edtFlrplnStgRbprsnMblTelno\"/><PanelItem id=\"PanelItem02\" componentid=\"sta00_00_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staRgtrId","0","-366","47.66%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("10");
            obj.set_text("등록자");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtRgtrId","0","-321","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staRgtrIdNm","0","-366","47.66%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("13");
            obj.set_text("등록자 회사명");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtRgtrCoNm","0","-321","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("14");
            obj.set_readonly("true");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","20.00","-366","300","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staRgtrId\"/><PanelItem id=\"PanelItem01\" componentid=\"edtRgtrId\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel02_01","650.00","-366","300","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("12");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staRgtrIdNm\"/><PanelItem id=\"PanelItem01\" componentid=\"edtRgtrCoNm\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan_04_00","20","-368","300","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("16");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staRgtrMblTelno\"/><PanelItem id=\"PanelItem01\" componentid=\"edtRgtrMblTelno\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("panBlank","650.00","-368","300","1",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("19");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","1200","0","100.00%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("2");
            obj.set_fittocontents("none");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("divInfoGuide","0","0","100.00%","289",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("서비스 흐름 및 작업방법 안내");
            obj.set_cssclass("div_WF_InfoGuide");
            this.addChild(obj.name, obj);

            obj = new Button("btnFold",null,"10","34","34","10",null,null,null,null,null,this.divInfoGuide.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divInfoGuide.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            obj.set_type("vertical");
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divInfoGuide.form
            obj = new Layout("default","",0,0,this.divInfoGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnFold.set_taborder("0");
                p.btnFold.set_cssclass("btn_WF_ACMinus");
                p.btnFold.move(null,"10","34","34","10",null);
            	}
            );
            this.divInfoGuide.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divInfoGuide.form
            obj = new Layout("mobile","",0,0,this.divInfoGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divInfoGuide.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Phone_screen",1280,560,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item7","div00.form.edtFlrplnStgRbprsnNm","value","dsCadMaster","flrplnStgRbprsnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div00.form.edtFlrplnStgRbprsnMblTelno","value","dsCadMaster","flrplnStgRbprsnMblTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div00.form.edtRgtrMblTelno","value","dsCadMaster","rgtrMblTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div00.form.edtRgtrId","value","dsCadMaster","rgtrIdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div00.form.edtAplySeCdNm","value","dsSearch","aplySeNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div00.form.edtAplyNo","value","dsCadMaster","aplyNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div00.form.edtRgtrCoNm","value","dsCadMaster","rgtrCoNm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CST009M00_01.xfdl","xjs::TaskCom.xjs");
        this.registerScript("CST009M00_01.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	CST009M00_01.xfdl
        *  @Creator 	ELUON INS
        *  @CreateDate 	2024/09/11
        *  @Desction
        *  @Author
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/09/11			An							최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;  // 업무공통
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

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/

        this.divInfoGuide_btnClose_onclick = function(obj,e)
        {
        	this.cfnFold(obj, e.ctrlkey);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.accordionmenu_onload,this);
            this.divInfoGuide.form.btnFold.addEventHandler("onclick",this.divInfoGuide_btnClose_onclick,this);
        };
        this.loadIncludeScript("CST009M00_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
