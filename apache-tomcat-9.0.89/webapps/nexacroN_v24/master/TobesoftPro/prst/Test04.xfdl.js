(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("prstAppinExprn");
            this.set_titletext("신청하기");
            this.set_scrolltype("both");
            this.getSetter("uResetScroll").set("true");
            this.getSetter("uType").set("APP");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,1997);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsComm", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"APPIN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"APPIN_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SECTOR_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CELL_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"INQUIRY_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"PRIVACY_CONSENT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRIVACY_CONSENT_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"PRIVACY_WITHDRAWAL_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"MRKTN_CONSENT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MRKTN_CONSENT_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"MRKTN_WITHDRAWAL_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"MGMT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MGMT_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"MGMT_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"MGMT_STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"APPIN_IP\" type=\"STRING\" size=\"256\"/><Column id=\"APPIN_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"CHGE_IP\" type=\"STRING\" size=\"256\"/><Column id=\"CHGE_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"INQUIRY_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TYPE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APPIN_TYPE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SECTOR_TYPE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCommInq", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListInq", this);
            obj._setContents("<ColumnInfo><Column id=\"APPIN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"INQUIRY_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"APPIN_IP\" type=\"STRING\" size=\"256\"/><Column id=\"APPIN_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"INQUIRY_TYPE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"SSC_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divWorkContents","0","0",null,"3030","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_formscrolltype("both");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Div("divContents","0","0",null,"300","0",null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_EnquiryBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("sta00","0","160",null,"50","0",null,null,null,null,null,this.divWorkContents.form.divContents.form);
            obj.set_text("체험 후 결정해도 좋아요");
            obj.set_taborder("0");
            obj.set_cssclass("sta_MF_TitleL");
            this.divWorkContents.form.divContents.addChild(obj.name, obj);

            obj = new Static("sta00_00","0","sta00:20",null,"28","0",null,null,null,null,null,this.divWorkContents.form.divContents.form);
            obj.set_text("TOBESOFT Pro를 경험해 보세요.");
            obj.set_taborder("1");
            obj.set_cssclass("sta_MF_BodyMC");
            obj.set_wordWrap("char");
            this.divWorkContents.form.divContents.addChild(obj.name, obj);

            obj = new Panel("Panel08","0","500","750","124",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("1");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("12");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staServiceType\"/><PanelItem id=\"PanelItem03\" componentid=\"divComm\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("staServiceType","0","0","750","24",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_EditLabelE");
            obj.set_text("관심 서비스 선택");
            obj.set_tablecellarea("0/0");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Div("divComm","1590","480","750","88",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_url("prst::prstAppServiceList.xfdl");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel09","0","Panel08:32","750","81",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("4");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("12");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCmpNm\"/><PanelItem id=\"PanelItem01\" componentid=\"edtCmpNm\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("staCmpNm","0","156","750","24",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_EditLabelE");
            obj.set_text("회사명");
            obj.set_tablecellarea("2/0");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Edit("edtCmpNm","0","192","750","45",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("6");
            obj.set_displaynulltext("회사명을 입력해 주세요.");
            obj.set_tablecellarea("3 3/0 2");
            obj.set_flexgrow("1");
            obj.set_maxlength("100");
            obj.set_border("1px solid red");
            obj.set_text("");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel11","0","878","750","81",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("7");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("12");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staUserNm\"/><PanelItem id=\"PanelItem01\" componentid=\"edtUserNm\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("staUserNm","0","378","750","24",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_EditLabelE");
            obj.set_text("이름");
            obj.set_tablecellarea("4/0");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Edit("edtUserNm","0","414","750","45",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("9");
            obj.set_displaynulltext("이름을 입력해 주세요.");
            obj.set_inputfilter("digit,symbol,space,sign,dot,comma");
            obj.set_tablecellarea("5 5/0 2");
            obj.set_flexgrow("1");
            obj.set_maxlength("100");
            obj.set_border("1px solid red");
            obj.set_text("");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("staCellNumb","0","489","375","24",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_EditLabelE");
            obj.set_text("연락처");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Edit("edtCellNumb","0","525","375","45",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("11");
            obj.set_displaynulltext("\'_\'제외하고 숫자만 입력해 주세요.");
            obj.set_inputtype("digit");
            obj.set_maxlength("15");
            obj.set_border("1px solid red");
            obj.set_text("");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","1000","750","45",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("12");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCellNumb\"/><PanelItem id=\"PanelItem01\" componentid=\"edtCellNumb\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel14","0","1100","750","81",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("13");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("12");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staEmailId\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel06\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("staEmailId","0","600","750","24",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_EditLabelE");
            obj.set_text("이메일");
            obj.set_tablecellarea("4/0");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel06","0","12","750","45",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("15");
            obj.set_horizontalgap("5");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("5");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel05\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","0","250","45",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("16");
            obj.set_horizontalgap("5");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"edtEmailId\"/><PanelItem id=\"PanelItem03\" componentid=\"Button00\"/><PanelItem id=\"PanelItem01\" componentid=\"sta01_00_00_00_01\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Edit("edtEmailId","0","636","215","45",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("17");
            obj.set_displaynulltext("이메일을 입력해 주세요.");
            obj.set_tablecellarea("5 5/0 2");
            obj.set_flexgrow("1");
            obj.set_maxlength("50");
            obj.set_border("1px solid red");
            obj.set_text("");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("sta01_00_00_00_01","393","636","30","45",null,null,"30","30",null,null,this.divWorkContents.form);
            obj.set_taborder("18");
            obj.set_text("@");
            obj.set_cssclass("sta_WF_TextCenter");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Combo("cboDomain","426","636","215","45",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("19");
            obj.set_displaynulltext("도메인을 선택해 주세요.");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_flexgrow("1");
            obj.set_border("1px solid red");
            var divWorkContents_form_cboDomain_innerdataset = new nexacro.NormalDataset("divWorkContents_form_cboDomain_innerdataset", obj);
            divWorkContents_form_cboDomain_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">naver.com</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">kakao.com</Col></Row><Row><Col id=\"codecolumn\">03</Col><Col id=\"datacolumn\">gmail.com</Col></Row><Row><Col id=\"codecolumn\">04</Col><Col id=\"datacolumn\">hanmail.net</Col></Row><Row><Col id=\"codecolumn\">05</Col><Col id=\"datacolumn\">daum.net</Col></Row><Row><Col id=\"codecolumn\">06</Col><Col id=\"datacolumn\">nate.com</Col></Row><Row><Col id=\"codecolumn\">07</Col><Col id=\"datacolumn\">직접입력</Col></Row></Rows>");
            obj.set_innerdataset(divWorkContents_form_cboDomain_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Div("Div01","563","1205","215","45",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("20");
            obj.set_text("Div01");
            obj.set_flexgrow("1");
            obj.set_visible("false");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Edit("edtDomain","0","0",null,"45","0",null,null,null,null,null,this.divWorkContents.form.Div01.form);
            obj.set_taborder("0");
            obj.set_displaynulltext("직접입력");
            obj.set_inputtype("digit,alpha,dot,symbol,sign");
            obj.set_visible("true");
            obj.set_border("1px solid red");
            obj.set_text("");
            this.divWorkContents.form.Div01.addChild(obj.name, obj);

            obj = new Button("btnCombo",null,"0","45","45","0",null,null,null,null,null,this.divWorkContents.form.Div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_Drop");
            obj.set_text("");
            obj.set_visible("true");
            this.divWorkContents.form.Div01.addChild(obj.name, obj);

            obj = new Div("divContents00","0","0",null,"300","0",null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("21");
            obj.set_cssclass("div_WF_EnquiryBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("sta00","0","160",null,"50","0",null,null,null,null,null,this.divWorkContents.form.divContents00.form);
            obj.set_text("체험 후 결정해도 좋아요");
            obj.set_taborder("0");
            obj.set_cssclass("sta_MF_TitleL");
            this.divWorkContents.form.divContents00.addChild(obj.name, obj);

            obj = new Static("sta00_00","0","sta00:20",null,"28","0",null,null,null,null,null,this.divWorkContents.form.divContents00.form);
            obj.set_text("TOBESOFT Pro를 경험해 보세요.");
            obj.set_taborder("1");
            obj.set_cssclass("sta_MF_BodyMC");
            obj.set_fittocontents("height");
            obj.set_wordWrap("char");
            this.divWorkContents.form.divContents00.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","0","0",null,null,"0","0",null,null,null,null,this.divWorkContents.form.divContents00.form);
            obj.set_taborder("2");
            obj.set_stretch("none");
            obj.set_image("url(\'theme://images/img_WF_AppinExprnM.png\')");
            obj.set_imagealign("center middle");
            obj.set_text("");
            this.divWorkContents.form.divContents00.addChild(obj.name, obj);

            obj = new Static("staMargin","0","2506","100.00%","100",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_ItemTitle2L");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel05","275","0","215","45",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("23");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"cboDomain\"/><PanelItem id=\"PanelItem01\" componentid=\"Div01\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Edit("edtDomain","10","Panel14:200",null,"45","1093",null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("25");
            obj.set_displaynulltext("직접입력");
            obj.set_inputtype("digit,alpha,dot,symbol,sign");
            obj.set_visible("true");
            obj.set_border("1px solid Green");
            obj.set_text("");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Edit("edtDomain00","10","edtDomain:200",null,"45","1093",null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("26");
            obj.set_displaynulltext("직접입력");
            obj.set_inputtype("digit,alpha,dot,symbol,sign");
            obj.set_visible("true");
            obj.set_border("1px solid Green");
            obj.set_text("");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Edit("edtDomain00_00","10","edtDomain00:200",null,"45","1093",null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("27");
            obj.set_displaynulltext("직접입력");
            obj.set_inputtype("digit,alpha,dot,symbol,sign");
            obj.set_visible("true");
            obj.set_border("1px solid Green");
            obj.set_text("");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Edit("edtDomain00_00_00","10","edtDomain00_00:200",null,"45","1083",null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("28");
            obj.set_displaynulltext("직접입력");
            obj.set_inputtype("digit,alpha,dot,symbol,sign");
            obj.set_visible("true");
            obj.set_border("1px solid Green");
            obj.set_text("");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Edit("edtDomain00_00_00_00","10","edtDomain00_00_00:200",null,"45","1083",null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("29");
            obj.set_displaynulltext("직접입력");
            obj.set_inputtype("digit,alpha,dot,symbol,sign");
            obj.set_visible("true");
            obj.set_border("1px solid Green");
            obj.set_text("");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Button("Button00","363","1141","11","21",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("30");
            obj.set_text("Button00");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Button("Button01","250","1397","120","50",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("24");
            obj.set_text("Button01");
            this.divWorkContents.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divWorkContents.form.divContents.form
            obj = new Layout("default","",0,0,this.divWorkContents.form.divContents.form,function(p){});
            this.divWorkContents.form.divContents.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divWorkContents.form.divComm
            obj = new Layout("default","",0,0,this.divWorkContents.form.divComm.form,function(p){});
            this.divWorkContents.form.divComm.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divWorkContents.form.Div01.form
            obj = new Layout("default","",0,0,this.divWorkContents.form.Div01.form,function(p){});
            this.divWorkContents.form.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divWorkContents.form.divContents00.form
            obj = new Layout("default","",0,0,this.divWorkContents.form.divContents00.form,function(p){});
            this.divWorkContents.form.divContents00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divWorkContents.form
            obj = new Layout("default","",0,0,this.divWorkContents.form,function(p){});
            this.divWorkContents.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Mobile_screen",1280,1997,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divWorkContents.form.edtCmpNm","value","dsList","CMP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divWorkContents.form.edtUserNm","value","dsList","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divWorkContents.form.edtCellNumb","value","dsList","CELL_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divWorkContents.form.edtEmailId","value","dsList","EMAIL_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","prst::prstAppServiceList.xfdl");
        };
        
        // User Script
        this.registerScript("Test04.xfdl", function() {
        /**
        *  devPro
        *  @FileName 	prstAppinExprn.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2023/11/21
        *  @Description
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2023/11/21			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();

        this.fvExpreineCd		= "EXPERIEN";	// 체험하기
        this.fvInquiryCd		= "INQUIRY";	// 문의하기
        this.fvCurrType			= this.objApp.gvAppType;

        this.fvBtnCommPrefix 	= "COMM_";
        this.fvDevParam			= "DEVPRO";		// Dev 파라미터 값
        this.fvUXParam			= "UXPRO";		// UX 파라미터 값
        this.fvProGenParam		= "PROGEN";		// ProGen 파라미터 값

        this.fvCurrSBtn			= "";		// 관심 서비스 선택 값

        this.objBtnComm			= [];	// 관심 서비스 유형
        this.objBtnCommInq		= [];	// 문의유형
        this.fvCurBtn 			= "";   // 현재 선택한 버튼 id 저장

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.fnLoad();
        	this.gfnFormOnLoad(this);

        	// 공통버튼 데이터 셋
        	this.dsComm.copyData(this.objApp.gdsCommCode);
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        //체험하기 저장
        this.fnExpTranSave = function ()
        {
        	var strSvcId    = "savePrstExpContents";
        	var strSvcUrl   = "savePrstExpContents.do";
        	var inData      = "dsCond=dsCond dsList=dsList:A";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId ,
        						strSvcUrl ,
        						inData ,
        						outData ,
        						strArg,
        						callBackFnc);
        };

        //문의하기 저장
        this.fnInqTranSave = function ()
        {
        	var strSvcId    = "savePrstInqContents";
        	var strSvcUrl   = "savePrstInqContents.do";
        	var inData      = "dsCond=dsCond dsList=dsList:A dsListInq=dsListInq:A";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId ,
        						strSvcUrl ,
        						inData ,
        						outData ,
        						strArg,
        						callBackFnc);
        };

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        //transaction
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	this.dsCond.clearData();

        	switch(sSvcId) {
        		case "savePrstExpContents": // 체험하기
        			this.fnCmpltPageOpen("expCmlt"); // 완료 페이지 이동
        			break;
        		case "savePrstInqContents": // 문의하기
        			this.fnCmpltPageOpen("inqCmlt"); // 완료 페이지 이동
        			break;
        		default:break;
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        // 체험, 문의에 따른 화면 구성
        this.fnLoad = function()
        {
        	var oDivTopContents = this.divWorkContents.form.divContents.form;

        	var sHistoryType = this.gfnGetArgument("menuType");
        	if(!this.gfnIsNull(sHistoryType)) {
        		this.fvCurrType = sHistoryType;
        		this.objApp.gvAppType = sHistoryType;
        	}

        	switch(this.fvCurrType) {
        		case this.fvExpreineCd :  // 체험하기
        			this.divWorkContents.form.panInqContents.set_height(0);
        			this.divWorkContents.form.panInqContents.set_visible(false);
        			break;
        		case this.fvInquiryCd : // 문의하기
        			oDivTopContents.sta00.set_text("무엇이든 물어보세요.");
        			oDivTopContents.sta00_00.set_text("투비소프트 전문 컨설턴트가 도와드립니다.");

        			this.divWorkContents.form.divContents00.form.sta00.set_text("무엇이든 물어보세요.");
        			this.divWorkContents.form.divContents00.form.sta00_00.set_text("투비소프트 전문 컨설턴트가 도와드립니다.");
        			break;
        		default:
        			// 디폴트로 체험하기 띄움
        			this.fvCurrType = this.fvExpreineCd;
        			this.fnLoad();
        			break;
        	}

        	this.divWorkContents.form.resetScroll();
        	this.gfnFormResetScroll(this);
        	this.fnSetServiceButton();
        	this.fnSetInitCommbtn();

        	this.fnDsSet(); // 콤보박스 ds 세팅
        	this.fnSetImage();
        };

        // 메인 배경 이미지 세팅
        this.fnSetImage = function()
        {
        	var sUrlPrefix = nexacro._project_url + "_resource_/_theme_/";
        	var objM = this.divWorkContents.form.divContents00;
        	var objP = this.divWorkContents.form.divContents;

        	var sStyle = objM._control_element.handle.style;

        	sStyle.backgroundImage ="url('"+sUrlPrefix+"TobesoftPro/images/img_WF_AppinExprnM.png')";
        	sStyle.backgroundSize = "cover";
        	sStyle.backgroundPosition = "center";

        	sStyle = objP._control_element.handle.style;

        	sStyle.backgroundImage ="url('"+sUrlPrefix+"TobesoftPro/images/img_WF_AppinExprn.png')";
        	sStyle.backgroundSize = "cover";
        	sStyle.backgroundPosition = "center";

        	this.fnResize();
        };

        // 체험하기/문의하기에 따른 관심서비스 버튼 visible 처리
        this.fnSetServiceButton = function()
        {
        	this.divWorkContents.form.divComm.set_fittocontents("none");
        	 this.divWorkContents.form.divComm.form.fnSetVisible(this.fvCurrType);
        	 this.divWorkContents.form.divComm.set_fittocontents("height");
        	  this.divWorkContents.form.divComm.form.resetScroll();
        	 this.divWorkContents.form.resetScroll();
        };

        //관심서비스 버튼 세팅
        this.fnSetInitCommbtn = function()
        {
        	var oBtnId = "";
        	if(this.gfnIsNull(this.objApp.gvIntroType) || this.fvUXParam  == this.objApp.gvIntroType) {
        		oBtnId = "btnUXP";
        	} else if( this.fvDevParam == this.objApp.gvIntroType) {
        		oBtnId =  "btnDP";
        	} else {
        		oBtnId = "btnPRG";
        	}

        	if(!this.divWorkContents.form.divComm.form[oBtnId].visible) {
        		this.divWorkContents.form.divComm.form["btnUXP"].click(); // 디폴트 세팅
        		return;
        	}
        	this.divWorkContents.form.divComm.form[oBtnId].click();
        };

        // 데이터 셋 세팅
        this.fnDsSet = function ()
        {
        	// 콤보박스 업종유형 세팅
        	this.dsCombo.copyData(this.objApp.gdsCommCode);
        	this.dsCombo.filter("HCL_CD == 'PR03'");
        };


        // 관심서비스 css 세팅
        this.fnBtnCss = function(sbtnId)
        {
        	var sNormalCss = "btn_WF_Service";
        	var sSelectCss = "btn_WF_ServiceS";

        	var oDivCommComp = this.divWorkContents.form.divComm.form.components;

        	for(var i = 0; i < oDivCommComp.length; i++) {
        		if(oDivCommComp[i].id == sbtnId) {
        			oDivCommComp[i].set_cssclass(sSelectCss);
        		} else {
        			oDivCommComp[i].set_cssclass(sNormalCss);
        		}
        	}
        };

        // 정합성 체크
        this.fnValidation = function ()
        {
        	this.gfnClearValidation(this.dsList);
        	this.gfnClearValidation(this.dsListInq);

        	this.gfnSetValidation(this.dsList, "CMP_NM", "회사명", "required,maxlength:100");
        	this.gfnSetValidation(this.dsList, "SECTOR_TYPE_CD", "업종", "required");
        	this.gfnSetValidation(this.dsList, "USER_NM", "이름"	, "required,maxlength:100");
        	this.gfnSetValidation(this.dsList, "CELL_NUMB", "연락처", "required,isphone,maxlength:30");
        	this.gfnSetValidation(this.dsList, "EMAIL", "이메일", "required,isemail,maxlength:100");

        	var colPriYn = this.dsList.getColumn(0,"PRIVACY_CONSENT_YN");

        	// 문의하기 저장 시 추가로 정합성 체크
        	if(this.fvInquiryCd == this.objApp.gvAppType)
        	{
        		this.gfnSetValidation(this.dsList, "INQUIRY_TYPE_CD", "문의 유형", "required");
        		this.gfnSetValidation(this.dsList, "INQUIRY_CNTN", "문의 내용", "required,maxlength:4000");
        	}

        	if (this.gfnValidation(this.dsList, "U") == false)
        	{
        		return false;
        	}

        	if(colPriYn == "0" || this.gfnIsNull(colPriYn))
        	{
        		this.gfnAlert("msg.err.validator.general",["이용약관에 동의하여 주십시오."]);
        		return false;
        	}

        	return true;
        };

        // 완료 페이지 이동
        // 1. 신청완료 페이지
        // 2. 체험하기 페이지
        // 3. 문의완료 페이지
        this.fnCmpltPageOpen = function (sCurrGubun)
        {
        	var sExp = "expCmlt";
        	var nExpUXP = "expCmltUXP";
        	var nInqDP = "inqCmltDP";

        	var sMenuNm = "APPDONE";

        	var nCol = this.dsList.getColumn(0, "SERVICE_TYPE_CD");
        	sCurrGubun += nCol;

        	if(this.fvExpreineCd == this.objApp.gvAppType)
        	{
        		this.objApp.gvBase.form.fnFormOpen(sMenuNm,sCurrGubun);
        	}
        	else
        	{
        		this.objApp.gvBase.form.fnFormOpen(sMenuNm, sCurrGubun);
        	}
        };

        // '아이디@도메인' 문자열로 반환
        this.fnGetEmail = function()
        {
        	var edtMail = this.dsList.getColumn(0, "EMAIL");
        	var cboDomain = this.divWorkContents.form.cboDomain.text;
        	var edtDomain = this.divWorkContents.form.edtDomain.value;
        	var fullEmail = edtMail;

        	if (!this.gfnIsNull(edtMail) && !cboDomain == "")
        	{
        		fullEmail = edtMail+"@"+cboDomain;
        	}
        	else if (!this.gfnIsNull(edtMail) && !edtDomain == "")
        	{
        		fullEmail = edtMail+"@"+edtDomain;
        	}

        	return fullEmail;
        };

        // 선택된 문의유형 배열로 담음
        this.fnInqGetBtn = function()
        {
        	return this.divWorkContents.form.divInqButtons.form.fnGetSelectedBtns();;
        };

        // 선택한 문의유형 데이터셋에 세팅
        this.fnInqTypeSet = function ()
        {
        	var objBtnCss = this.fnInqGetBtn();
        	this.dsListInq.clearData();

        	var nLen = objBtnCss.length;

        	for(var i = 0; i < nLen; i++)
        	{
        		this.dsListInq.addRow();
        		this.dsListInq.setColumn(i, "INQUIRY_TYPE_CD", objBtnCss[i].menuId);
        		this.dsListInq.setColumn(i, "INQUIRY_TYPE_NM", objBtnCss[i].text);
        	}
        };

        // 팝업 오픈
        this.fnOpenInfoP = function(objBtnId)
        {
        	var popupId = "prstPrivacyPopup";
        	var popupUrl = "prst::prstInfoPopup.xfdl";

        	if(objBtnId == "btnMrktnPu")
        	{
        		popupId = "prstMrktnPopup";
        	}

        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup(popupId, popupUrl, null, sPopupCallBack, {dragmovetype:"none"});
        }

        // dsList에 full email 저장
        this.fnSetFullEmail = function()
        {
        	var sDomain = this.divWorkContents.form.cboDomain.text;

        	if(this.gfnIsNull(sDomain)) {
        		sDomain = this.divWorkContents.form.Div01.form.edtDomain.value;
        	}

        	if(this.gfnIsNull(sDomain)) return;


        	var sEmailId = this.dsList.getColumn(0, "EMAIL_ID");
        	this.dsList.setColumn(0, "EMAIL", sEmailId + "@" + sDomain);
        };

        // 배경 Resize
        this.fnResize = function(nX)
        {
        	if(this.gfnIsNull(nX)) nX = this.divWorkContents.getOffsetWidth();

        	var objM = this.divWorkContents.form.divContents00;
        	var objP = this.divWorkContents.form.divContents;

        	if(nX < this.objApp.gvMobileSize) {
        		objM.set_visible(true);
        		objP.set_visible(false);
        	} else {
        		objM.set_visible(false);
        		objP.set_visible(true);
        	}

        	if(!this.gfnIsNull(this.fvCurBtn)) {
        		this.fnBtnCss(this.fvCurBtn);
        	}
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        // 관심 서비스 버튼 클릭 이벤트
        this.divWorkContents_divComm_onclick = function(obj,e)
        {
        	var sCurrCss = obj.cssclass;
        	this.fvCurBtn = obj.id;
        	if(sCurrCss.indexOf("btn_WF_ServiceS") > -1) return; // 기존 선택한 버튼과 같은 경우

        	this.dsList.setColumn(0, "INQUIRY_TYPE_CD", null); //문의 유형 초기화
        	this.fvCurrSBtn =  obj.id.replace(/^btn/, ""); // 서비스 유형 코드 저장
        	this.dsList.setColumn(0, "SERVICE_TYPE_CD", this.fvCurrSBtn);

        	this.fnBtnCss(obj.id); // css 세팅

        	if(this.fvCurrType == this.fvInquiryCd) {
        		this.divWorkContents.form.divInqButtons.form.fnCreateCommInqBtn(obj.id); // 문의 유형 버튼 동적 생성
        	}
        };

        // 문의 유형 버튼 클릭 이벤트
        this.btnCommInq_onclick = function(obj,e)
        {
        	var sMenuId = obj.menuId;
        	var sCurCss = obj.cssclass;

         	if (this.gfnIsNull(sMenuId)) return;


        	var sSelectCss = "btn_WF_MultiS";
        	var sNormalCss = "btn_WF_Multi";

        	if(sCurCss.indexOf(sSelectCss) > -1) { // 현재 css가 선택 css인 경우
        		obj.set_cssclass(sNormalCss);
        	}
        	else
        	{
        		obj.set_cssclass(sSelectCss);
        	}

        	this.dsList.setColumn(0, "INQUIRY_TYPE_CD" , this.fnIsSeletInqButton());
        };

        // 문의 유형 버튼 중 선택된 버튼이 있는지에 대한 여부 반환
        this.fnIsSeletInqButton = function()
        {
        	var comps = this.divWorkContents.form.divInqButtons.form.div_InquiryType.form.components;
        	var sSelectCss = "btn_WF_MultiS";

        	for(var i = 0; i < comps.length; i++) {
        		if(comps[i].cssclass == sSelectCss) return "Y";
        	}

        	return null;
        };

        // 등록하기 버튼 onclick
        this.divWorkContents_btnSave_onclick = function(obj,e)
        {
        	this.dsList.set_enableevent(false);
        	var sCboSectorNm = this.divWorkContents.form.cboSectorType.text; // 업종이름

        	if(this.fvInquiryCd == this.objApp.gvAppType) // 문의하기
        	{
        		this.fnInqTypeSet();
        		this.dsList.setColumn(0, "APPIN_TYPE_CD", this.fvInquiryCd); // 신청유형
        		var colAppNm = this.objApp.gdsCommCode.lookup("SSC_CD", this.fvInquiryCd, "SSC_CD_KORN_NM"); // 신청명
        	}
        	else // 체험하기
        	{
        		this.dsList.setColumn(0, "APPIN_TYPE_CD", this.fvExpreineCd); // 신청유형
        		var colAppNm = this.objApp.gdsCommCode.lookup("SSC_CD", this.fvExpreineCd, "SSC_CD_KORN_NM"); // 신청명
        	}

        	this.dsList.setColumn(0, "SERVICE_TYPE_CD", this.fvCurrSBtn); // 서비스 유형
        	var colSrNm = this.dsComm.lookup("SSC_CD", this.fvCurrSBtn, "SSC_CD_KORN_NM"); // 서비스명
        	var colVal = this.dsComm.lookup("SSC_CD", this.fvCurrSBtn, "GRP_CD_1"); // 담당자 사번

        	this.dsList.setColumn(0, "SERVICE_TYPE_NM", colSrNm); // 서비스명
        	this.dsList.setColumn(0, "APPIN_TYPE_NM", colAppNm); // 신청명
        	this.dsList.setColumn(0, "MGMT_ID", colVal); // 담당자 사번
        	this.dsList.setColumn(0, "SECTOR_TYPE_NM", sCboSectorNm); // 업종

        	this.dsList.set_enableevent(true);


        	// 입력 검증
        	if(this.fnValidation() !== true) {
        		return;
        	}

        	this.fnTranApplication();
        };

        // type에 따른 transaction 함수 호출
        this.fnTranApplication = function()
        {
        	if(this.fvInquiryCd == this.objApp.gvAppType)
        	{
        		var nRow = this.dsCond.addRow();

        		var colVal = this.dsList.getColumn(0, "SERVICE_TYPE_CD");
        		this.dsCond.setColumn(nRow, "SSC_CD", colVal); // 서비스유형

        		this.fnInqTranSave();
        	}
        	else
        	{
        		var nRow = this.dsCond.addRow();

        		var colVal = this.dsList.getColumn(0, "SERVICE_TYPE_CD");
        		this.dsCond.setColumn(nRow, "SSC_CD", colVal); // 서비스유형

        		this.fnExpTranSave();
        	}
        };

        // 이용약관 보기 버튼 클릭
        this.divWorkContents_divAppinDetail_divAppinSave_btnPrivacyPu_onclick = function(obj,e)
        {
        	this.fnOpenInfoP(obj.id);
        };

        // 이메일 도메인 콤보 아이콘 클릭
        this.divWorkContents_divAppinDetail_btnOpenDomain_onclick = function(obj,e)
        {
        	var sInput = this.objDiv.cboDomain.input;

        	if(!sInput)  // 직접입력 선택 아닐 시
        	{
        		obj.set_visible(false);
        	}

        	this.objDiv.edtDomain.set_visible(false);
        	this.objDiv.cboDomain.set_visible(true);
        	obj.set_visible(false);
        	this.objDiv.cboDomain.dropdown(); // 콤보박스 펼침
        };

        this.divWorkContents_divAppinDetail_components_onkillfocus = function(obj,e)
        {
        	if(this.gfnIsNull(obj.value)) obj.set_value(null);
        };


        // 공통 버튼 영역 height 및 css 적용
        this.divWorkContents_onsize = function(obj,e)
        {
        // 	var nIsMobile = this.gfnIsMobile();
        //
        // 	// 관심사 버튼  height 조정
        // 	var nHeight = nIsMobile == 1 ?  64 : 90; // mobile일 시 64, pc 90
        // 	var sCurrSBtn = "";
        //
        // 	for(var i = 0; i < this.objBtnComm.length; i++)
        // 	{
        // 		this.objBtnComm[i].set_height(nHeight);
        // 		if( this.objBtnComm[i].cssclass.indexOf("btn_WF_ServiceS") > -1) sCurrSBtn = this.objBtnComm[i].menuId;
        // 	}
        // 	if(this.objApp.gvAppType == this.fvInquiryCd) this.fnInqBtnCss(); // 문의유형 버튼 css
        };


        // 이메일 도메인 콤보 oncloseup 이벤트
        this.divWorkContents_cboDomain_oncloseup = function(obj,e)
        {
        	var cboCd = obj.value;
        	if(this.gfnIsNull(cboCd)) return;

        	if(cboCd == "07")
        	{
        		this.divWorkContents.form.cboDomain.set_visible(false);
        		this.divWorkContents.form.Div01.form.btnCombo.set_visible(true);
        		this.divWorkContents.form.Div01.form.edtDomain.set_visible(true);
        		this.divWorkContents.form.Div01.set_visible(true);

        		this.divWorkContents.form.cboDomain.input = true; // 직접 입력 선택 시 user property 세팅
        		this.divWorkContents.form.cboDomain.set_text("");
        		this.divWorkContents.form.Div01.form.edtDomain.setFocus(false);	// 직접입력 에디트 컴포넌트 포커스 적용

        	} else {
        		this.divWorkContents.form.cboDomain.set_visible(true);
        		this.divWorkContents.form.Div01.set_visible(false);
        		this.divWorkContents.form.Div01.form.edtDomain.set_visible(false);
        		this.divWorkContents.form.Div01.form.btnCombo.set_visible(false);
         		this.divWorkContents.form.cboDomain.input = false;
        		this.divWorkContents.form.Div01.form.edtDomain.set_value(null);

        		this.fnSetFullEmail();
        	}
        };

        this.divWorkContents_edtDomain_onkillfocus = function(obj,e)
        {
        	this.fnSetFullEmail();
        };

        // 개인정보 이용수집 / 마케팅 팝업
        this.popup_onclick = function(obj,e)
        {
        	this.fnOpenInfoP(obj.id);
        };

        // 이메일 직접입력 combo button onclick
        this.divWorkContents_Div01_btnCombo_onclick = function(obj,e)
        {
        	var sInput = this.divWorkContents.form.Div01.form.edtDomain.input;

        	if(!sInput)  // 직접입력 선택 아닐 시
        	{
        		obj.set_visible(false);
        	}

        	this.divWorkContents.form.Div01.form.edtDomain.set_visible(false);
        	this.divWorkContents.form.cboDomain.set_visible(true);
        	obj.set_visible(false);
        	this.divWorkContents.form.cboDomain.dropdown(); // 콤보박스 펼침
        };

        this.divWorkContents_divContents_onsize = function(obj,e)
        {
        	var nX = obj.getOffsetWidth();
        	this.fnResize(nX);
        };
        this.divWorkContents_edtDomain_onchanged = function(obj,e)
        {

        };

        this.Common_onsetfocus = function(obj,e)
        {
        	trace(obj.id);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ontimer",this.prstAppinExprn_ontimer,this);
            this.divWorkContents.addEventHandler("onsize",this.divWorkContents_onsize,this);
            this.divWorkContents.form.divContents.addEventHandler("onsize",this.divWorkContents_divContents_onsize,this);
            this.divWorkContents.form.staCmpNm.addEventHandler("onclick",this.div00_sta01_00_00_00_onclick,this);
            this.divWorkContents.form.edtCmpNm.addEventHandler("onsetfocus",this.Common_onsetfocus,this);
            this.divWorkContents.form.staUserNm.addEventHandler("onclick",this.div00_sta01_00_00_00_onclick,this);
            this.divWorkContents.form.edtUserNm.addEventHandler("onsetfocus",this.Common_onsetfocus,this);
            this.divWorkContents.form.staCellNumb.addEventHandler("onclick",this.div00_sta01_00_00_00_onclick,this);
            this.divWorkContents.form.edtCellNumb.addEventHandler("onsetfocus",this.Common_onsetfocus,this);
            this.divWorkContents.form.staEmailId.addEventHandler("onclick",this.div00_sta01_00_00_00_onclick,this);
            this.divWorkContents.form.Panel00.addEventHandler("onsetfocus",this.Common_onsetfocus,this);
            this.divWorkContents.form.cboDomain.addEventHandler("oncloseup",this.divWorkContents_cboDomain_oncloseup,this);
            this.divWorkContents.form.cboDomain.addEventHandler("onsetfocus",this.Common_onsetfocus,this);
            this.divWorkContents.form.Div01.form.edtDomain.addEventHandler("onkillfocus",this.divWorkContents_edtDomain_onkillfocus,this);
            this.divWorkContents.form.Div01.form.btnCombo.addEventHandler("onclick",this.divWorkContents_Div01_btnCombo_onclick,this);
            this.divWorkContents.form.divContents00.addEventHandler("onsize",this.divWorkContents_divContents_onsize,this);
            this.divWorkContents.form.staMargin.addEventHandler("onclick",this.divWorkContents_divPrivacy_sta00_00_00_01_onclick,this);
            this.divWorkContents.form.edtDomain.addEventHandler("onkillfocus",this.divWorkContents_edtDomain_onkillfocus,this);
            this.divWorkContents.form.edtDomain.addEventHandler("onchanged",this.divWorkContents_edtDomain_onchanged,this);
            this.divWorkContents.form.edtDomain00.addEventHandler("onkillfocus",this.divWorkContents_edtDomain_onkillfocus,this);
            this.divWorkContents.form.edtDomain00.addEventHandler("onchanged",this.divWorkContents_edtDomain_onchanged,this);
            this.divWorkContents.form.edtDomain00_00.addEventHandler("onkillfocus",this.divWorkContents_edtDomain_onkillfocus,this);
            this.divWorkContents.form.edtDomain00_00.addEventHandler("onchanged",this.divWorkContents_edtDomain_onchanged,this);
            this.divWorkContents.form.edtDomain00_00_00.addEventHandler("onkillfocus",this.divWorkContents_edtDomain_onkillfocus,this);
            this.divWorkContents.form.edtDomain00_00_00.addEventHandler("onchanged",this.divWorkContents_edtDomain_onchanged,this);
            this.divWorkContents.form.edtDomain00_00_00_00.addEventHandler("onkillfocus",this.divWorkContents_edtDomain_onkillfocus,this);
            this.divWorkContents.form.edtDomain00_00_00_00.addEventHandler("onchanged",this.divWorkContents_edtDomain_onchanged,this);
        };
        this.loadIncludeScript("Test04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
