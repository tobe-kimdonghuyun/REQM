(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM000P032");
            this.set_titletext("회원가입");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,4500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGet", this);
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"idAplySe\" type=\"STRING\" size=\"256\"/><Column id=\"idAplyType\" type=\"STRING\" size=\"256\"/><Column id=\"userPswd\" type=\"STRING\" size=\"256\"/><Column id=\"userNm\" type=\"STRING\" size=\"256\"/><Column id=\"eml\" type=\"STRING\" size=\"256\"/><Column id=\"mblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"telno\" type=\"STRING\" size=\"256\"/><Column id=\"userBrdt\" type=\"STRING\" size=\"256\"/><Column id=\"coId\" type=\"STRING\" size=\"256\"/><Column id=\"coNmHwrt\" type=\"STRING\" size=\"256\"/><Column id=\"prvcAgreDocId\" type=\"STRING\" size=\"256\"/><Column id=\"esntlAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"chcAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"prcsSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcsSttsNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcsDsctn\" type=\"STRING\" size=\"256\"/><Column id=\"emlRcptnYn\" type=\"STRING\" size=\"256\"/><Column id=\"smsRcptnPrgrsYn\" type=\"STRING\" size=\"256\"/><Column id=\"smsRcptnAcntYn\" type=\"STRING\" size=\"256\"/><Column id=\"smsRcptnNewYn\" type=\"STRING\" size=\"256\"/><Column id=\"rltnCoActlOgdpYn\" type=\"STRING\" size=\"256\"/><Column id=\"evdncDocNo\" type=\"STRING\" size=\"256\"/><Column id=\"prcrId\" type=\"STRING\" size=\"256\"/><Column id=\"evdncDocKnd\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"coNm\" type=\"STRING\" size=\"256\"/><Column id=\"agreType\" type=\"STRING\" size=\"256\"/><Column id=\"docCn\" type=\"STRING\" size=\"256\"/><Column id=\"esntlAgreCn\" type=\"STRING\" size=\"256\"/><Column id=\"chcAgreCn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"esntlAgreYn\">Y</Col><Col id=\"chcAgreYn\">Y</Col><Col id=\"emlRcptnYn\">Y</Col><Col id=\"smsRcptnPrgrsYn\">Y</Col><Col id=\"smsRcptnAcntYn\">Y</Col><Col id=\"smsRcptnNewYn\">Y</Col><Col id=\"idAplySe\">TIDCATCD001</Col><Col id=\"idAplyType\">TIDREQCD001</Col><Col id=\"prvcAgreDocId\">AGDOC_20240701_000001</Col><Col id=\"rltnCoActlOgdpYn\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"fullName\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile2", this);
            obj._setContents("<ColumnInfo><Column id=\"fullName\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile3", this);
            obj._setContents("<ColumnInfo><Column id=\"fullName\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile4", this);
            obj._setContents("<ColumnInfo><Column id=\"fullName\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"acntType\" type=\"STRING\" size=\"256\"/><Column id=\"fld\" type=\"STRING\" size=\"256\"/><Column id=\"aplySrvc\" type=\"STRING\" size=\"256\"/><Column id=\"joinAsk\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"acntType\"/><Col id=\"fld\"/><Col id=\"aplySrvc\"/><Col id=\"joinAsk\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSample", this);
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"idAplySe\" type=\"STRING\" size=\"256\"/><Column id=\"idAplyType\" type=\"STRING\" size=\"256\"/><Column id=\"userPswd\" type=\"STRING\" size=\"256\"/><Column id=\"userNm\" type=\"STRING\" size=\"256\"/><Column id=\"eml\" type=\"STRING\" size=\"256\"/><Column id=\"mblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"telno\" type=\"STRING\" size=\"256\"/><Column id=\"coId\" type=\"STRING\" size=\"256\"/><Column id=\"coNmHwrt\" type=\"STRING\" size=\"256\"/><Column id=\"prvcAgreDocId\" type=\"STRING\" size=\"256\"/><Column id=\"esntlAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"chcAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"prcsSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcsDsctn\" type=\"STRING\" size=\"256\"/><Column id=\"emlRcptnYn\" type=\"STRING\" size=\"256\"/><Column id=\"smsRcptnPrgrsYn\" type=\"STRING\" size=\"256\"/><Column id=\"smsRcptnAcntYn\" type=\"STRING\" size=\"256\"/><Column id=\"smsRcptnNewYn\" type=\"STRING\" size=\"256\"/><Column id=\"rltnCoActlOgdpYn\" type=\"STRING\" size=\"256\"/><Column id=\"evdncDocNo\" type=\"STRING\" size=\"256\"/><Column id=\"prcrId\" type=\"STRING\" size=\"256\"/><Column id=\"evdncDocKnd\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"coNm\" type=\"STRING\" size=\"256\"/><Column id=\"agreType\" type=\"STRING\" size=\"256\"/><Column id=\"docCn\" type=\"STRING\" size=\"256\"/><Column id=\"esntlAgreCn\" type=\"STRING\" size=\"256\"/><Column id=\"chcAgreCn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"esntlAgreYn\">Y</Col><Col id=\"chcAgreYn\">Y</Col><Col id=\"emlRcptnYn\">Y</Col><Col id=\"smsRcptnPrgrsYn\">Y</Col><Col id=\"smsRcptnAcntYn\">Y</Col><Col id=\"smsRcptnNewYn\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","20","10",null,null,"20","80",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Panel("sub_tit01","955","18","100%","58",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("8");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01","505","-53","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("7");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnMinPrcsDsctn\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinPrcsDsctn","460","-55","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle01","0","-53","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("6");
            obj.set_text("처리내역");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div01","0","30","100%","266",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("1");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"pan01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan02\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staPrcsDsctn","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("2");
            obj.set_text("처리내역");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan02_02","10.00","98","300","100%",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPrcsDsctn\"/><PanelItem id=\"PanelItem02\" componentid=\"edtPrcsDsctn\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan03","0","60","100.00%","170",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("4");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"pan02_02\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staPrcrNm","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("5");
            obj.set_text("처리자");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan02","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPrcrNm\"/><PanelItem id=\"PanelItem02\" componentid=\"edtPrcrNm\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staPrcsSttsCd","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("7");
            obj.set_text("처리상태");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPrcsSttsCd\"/><PanelItem id=\"PanelItem02\" componentid=\"edtPrcsSttsCd\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtPrcsSttsCd","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtPrcrNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtPrcsDsctn","10.00","158","100%","110",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("10");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("sub_tit02","-40","367","100%","57",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("12");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel02","505","-53","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("11");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnMinAplyInfo\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle02","0","-53","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("10");
            obj.set_text("신청정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div02","0","30","100%","886.5",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","211",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"pan00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"pan00_02\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("4");
            obj.set_text("ID신청유형");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan01_01","10.00","98","100%","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01\"/><PanelItem id=\"PanelItem02\" componentid=\"rdo02\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan01","0","60","100.00%","190",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("6");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan01_02\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staIdAplySe","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("8");
            obj.set_text("ID신청구분(최초권한신청)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan02","0","60","100.00%","300",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("7");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"grd00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan00_01","10.00","98","100%","150",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("1");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staIdAplySe\"/><PanelItem id=\"PanelItem02\" componentid=\"rdo01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("sta00","40.00","150","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("9");
            obj.set_text("복수 권한 필요 시, 회원가입 승인 후 [포털메인>MyPage>계정권한 신청(신청자)] 화면을 이용하시기 바랍니다.)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan00_02","20","150","100.00%","50",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("10");
            obj.set_spacing("10px 0px 0px 0px");
            obj.set_fittocontents("height");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("sta01","40.00","150","100%","120",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("11");
            obj.set_text("1. 일반사용자 : 해당 입주사에 소속된 직원으로 하단의 서비스를 신청하고자 하는 경우입니다.\r\n2. 계정관리자 : 하단 서비스 이용 외 해당 입주사에 소속된 직원(일반사용자)의 계정 신청에 대하여 승인 및 해제할 수 있는 권한을 부여합니다.\r\n※ 공항공사와 직접계약을 맺은 업체가 아닌경우(하도업체 등), 상위에 직접계약을 맺은 사업자 소속의 일반사용자로 가입하시기 바랍니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan01_02","20","150","100.00%","120",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("12");
            obj.set_spacing("10px 0px 0px 0px");
            obj.set_fittocontents("height");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Radio("rdo02","200.00","328","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_columncount("2");
            var divForm_form_Div02_form_rdo02_innerdataset = new nexacro.NormalDataset("divForm_form_Div02_form_rdo02_innerdataset", obj);
            divForm_form_Div02_form_rdo02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">TIDREQCD001</Col><Col id=\"datacolumn\">일반사용자</Col></Row><Row><Col id=\"codecolumn\">TIDREQCD002</Col><Col id=\"datacolumn\">계정관리자</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div02_form_rdo02_innerdataset);
            obj.set_text("일반사용자");
            obj.set_value("TIDREQCD001");
            obj.set_index("0");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Radio("rdo01","200.00","328","100%","70",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_columncount("3");
            var divForm_form_Div02_form_rdo01_innerdataset = new nexacro.NormalDataset("divForm_form_Div02_form_rdo01_innerdataset", obj);
            divForm_form_Div02_form_rdo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">TIDCATCD001</Col><Col id=\"datacolumn\">입주사용</Col></Row><Row><Col id=\"codecolumn\">TIDCATCD003</Col><Col id=\"datacolumn\">이동지역신청</Col></Row><Row><Col id=\"datacolumn\">신규임차희망</Col><Col id=\"codecolumn\">TIDCATCD006</Col></Row><Row><Col id=\"datacolumn\">구내영업신청</Col><Col id=\"codecolumn\">TIDCATCD008</Col></Row><Row><Col id=\"datacolumn\">행사시설신청</Col><Col id=\"codecolumn\">TIDCATCD009</Col></Row><Row><Col id=\"datacolumn\">납품/용역/기타</Col><Col id=\"codecolumn\">TIDCATCD010</Col></Row><Row><Col id=\"codecolumn\">TIDCATCD011</Col><Col id=\"datacolumn\">공유신청자</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div02_form_rdo01_innerdataset);
            obj.set_text("입주사용");
            obj.set_value("TIDCATCD001");
            obj.set_index("0");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Grid("grd00","0","8","100.00%","300",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("13");
            obj.set_autofittype("none");
            obj.set_binddataset("dsInfo");
            obj.set_autosizingtype("row");
            obj.set_suppresshorzcell("right");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"106\"/><Column size=\"100\"/><Column size=\"334\"/><Column size=\"171\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"118\"/><Row size=\"57\"/><Row size=\"57\"/><Row size=\"57\"/><Row size=\"71\"/></Rows><Band id=\"head\"><Cell text=\"계정유형\" wordWrap=\"char\"/><Cell col=\"1\" text=\"분야\" wordWrap=\"char\"/><Cell col=\"2\" text=\"신청 서비스\" wordWrap=\"char\"/><Cell col=\"3\" text=\"회원가입 문의처\" cssclass=\"CellEnd\" wordWrap=\"char\"/></Band><Band id=\"body\"><Cell rowspan=\"5\" text=\"입주사\" suppress=\"1\" suppressalign=\"middle\" textAlign=\"center\" wordWrap=\"char\"/><Cell col=\"1\" text=\"시설운영\" textAlign=\"center\" wordWrap=\"char\"/><Cell col=\"2\" text=\"인계인수(입주), 원상회복(퇴거), 시설물설치(변경),&#13;&#10;작업신고서, 열쇠추가제작, 부가시설물설치 및 연장,&#13;&#10;배정룸도면, 운항정보/미디어 표출, 전동차등록 및 운전허가\" textAlign=\"left\" autosizecol=\"default\" wordWrap=\"char\"/><Cell col=\"3\" rowspan=\"5\" cssclass=\"CellEnd\" textAlign=\"center\" text=\"입주자서비스센터&#13;&#10;T1 : 032-741-3301~2&#13;&#10;T2 : 032-741-3535~6\" suppress=\"1\" suppressalign=\"middle\" displaytype=\"decoratetext\" edittype=\"textarea\" wordWrap=\"char\"/><Cell row=\"1\" col=\"1\" text=\"보안\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"1\" col=\"2\" text=\"보호구역 위해물품\" textAlign=\"left\" autosizecol=\"default\" wordWrap=\"char\"/><Cell row=\"2\" col=\"1\" text=\"전기\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"2\" col=\"2\" text=\"전기 사용/해지(공사건물, 공사미소유/옥외),&#13;&#10;전기소모품 교체(램프 등), 난로 사용/해지\" textAlign=\"left\" autosizecol=\"default\" wordWrap=\"char\"/><Cell row=\"3\" col=\"1\" text=\"수도\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"3\" col=\"2\" text=\"수도 사용/해지\" textAlign=\"left\" autosizecol=\"default\" wordWrap=\"char\"/><Cell row=\"4\" col=\"1\" text=\"ICT\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"4\" col=\"2\" text=\"통신 사용/변경/해지/일시이용중단/일시이용중단 해제,&#13;&#10;통신실/전산실 출입 작업신고서\" textAlign=\"left\" autosizecol=\"default\" wordWrap=\"char\"/></Band></Format></Formats>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Grid("grd00_00","0","8","100%","140",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("14");
            obj.set_autofittype("col");
            obj.set_autosizingtype("row");
            obj.set_suppresshorzcell("right");
            obj.set_binddataset("dsInfo");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"70\"/><Column size=\"300\"/><Column size=\"130\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/><Row size=\"44\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"계정유형\" wordWrap=\"char\"/><Cell col=\"1\" text=\"분야\" wordWrap=\"char\"/><Cell col=\"2\" text=\"신청 서비스\" wordWrap=\"char\"/><Cell col=\"3\" text=\"회원가입 문의처\" cssclass=\"CellEnd\" wordWrap=\"char\"/></Band><Band id=\"body\"><Cell rowspan=\"3\" text=\"이동지역\" suppress=\"1\" suppressalign=\"middle\" textAlign=\"center\" wordWrap=\"char\"/><Cell col=\"1\" text=\"이동지역\" textAlign=\"center\" wordWrap=\"char\"/><Cell col=\"2\" text=\"이동지역 작업계획서, 이동지역 운전자 면허,&#13;&#10;이동지역 차량/장비 등록, 말소, 반출입\" textAlign=\"left\" autosizecol=\"default\" wordWrap=\"char\"/><Cell col=\"3\" rowspan=\"3\" cssclass=\"CellEnd\" textAlign=\"center\" text=\"이동지역안전관리소&#13;&#10;032-741-2613\" suppress=\"1\" suppressalign=\"middle\" displaytype=\"normal\" edittype=\"none\" wordWrap=\"char\"/><Cell row=\"1\" col=\"1\" text=\"시설운영\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"1\" col=\"2\" text=\"작업신고서(이동지역 외)\" textAlign=\"left\" autosizecol=\"default\" wordWrap=\"char\"/><Cell row=\"2\" col=\"1\" text=\"보안\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"2\" col=\"2\" text=\"보호구역 위해물품\" textAlign=\"left\" autosizecol=\"default\" wordWrap=\"char\"/></Band></Format></Formats>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan03","0","60","100.00%","185.5",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("15");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("center");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"grd00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("sub_tit06","-57","1242","100%","56",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("16");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle06\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel06\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel06","505","-53","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("15");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnMinBscInfo\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle06","0","-53","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("14");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divBscInfo","0","0","100.00%","675",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan00_02\"/></Contents>");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("7");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Edit("edtNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("1");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Panel("pan00_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtNm\"/></Contents>");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Static("staLabel00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("12");
            obj.set_text("휴대전화번호 (숫자만 입력하세요)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Panel("pan00_02","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("13");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtMblTelno\"/></Contents>");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new MaskEdit("edtMblTelno","734","118","100%","40",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("2");
            obj.set_type("string");
            obj.set_format("###-####-####");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Static("staLabel01_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("14");
            obj.set_text("아이디");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Edit("edtId","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("15");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Panel("pan01_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("16");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("none");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtId\"/></Contents>");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Panel("pan01","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("17");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan01_01\"/><PanelItem id=\"PanelItem03\" componentid=\"pan00_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan01_02\"/></Contents>");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Panel("pan04","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("18");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"pan04_01\"/><PanelItem id=\"PanelItem03\" componentid=\"pan04_02\"/></Contents>");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Panel("Panel04","0","560","100%","150",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("22");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_fittocontents("height");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan04\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel04_02\"/></Contents>");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Panel("pan04_02","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("19");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel04_02\"/><PanelItem id=\"PanelItem02\" componentid=\"edtPswd02\"/></Contents>");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Panel("Panel04_02","0","685","100%","40",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("21");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta02\"/></Contents>");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Static("sta02","20","20","100%","38",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("20");
            obj.set_text("비밀번호는 9자~16자[영문+특수문자+숫자] 조합으로 설정해 주세요   * 사용가능 특수문자 : ! @ # $ ^ & * ( )");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Static("staLabel04_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("23");
            obj.set_text("비밀번호확인");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Static("staLabel04_01_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("24");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Edit("edtEml","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("5");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Panel("pan03_02_00","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("25");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel04_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtEml\"/></Contents>");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Static("staLabel04_00_00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("26");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Edit("edtTelno","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("6");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Panel("pan03_01_00_00","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("27");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel04_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtTelno\"/></Contents>");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Panel("pan03_00","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("28");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"pan03_02_00\"/><PanelItem id=\"PanelItem03\" componentid=\"pan03_01_00_00\"/></Contents>");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("29");
            obj.set_text("소속회사");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Panel("pan02_00_00","10.00","98","100%","86",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("30");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00\"/></Contents>");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Panel("pan02_01_00","0","60","100.00%","237",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("31");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("10");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan02_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel04_02_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel04_02_00\"/></Contents>");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Panel("Panel00","665","564","100%","50",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("32");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem02\" componentid=\"btnGrdRegi00\"/></Contents>");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Button("btnGrdRegi00","943.00","50","76","40",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("11");
            obj.set_text("신규등록");
            obj.set_cssclass("btn_WF_SmallGray");
            obj.set_visible("false");
            obj.set_fittocontents("width");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Div("divEdtPop00","280","274","150","40",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("33");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Edit("edtCoNm","0","0",null,"40","0",null,null,null,null,null,this.divForm.form.divBscInfo.form.divEdtPop00.form);
            obj.set_taborder("8");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_readonly("false");
            this.divForm.form.divBscInfo.form.divEdtPop00.addChild(obj.name, obj);

            obj = new Button("btnPop","edtCoNm:-40","0","40","40",null,null,null,null,null,null,this.divForm.form.divBscInfo.form.divEdtPop00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            this.divForm.form.divBscInfo.form.divEdtPop00.addChild(obj.name, obj);

            obj = new Button("Button00","870.00","180","40","40",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_Information");
            obj.set_flexshrink("0");
            obj.set_flexgrow("1");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Button("Button00_00","950.00","187","40","40",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_CodeX");
            obj.set_text("");
            obj.set_flexshrink("0");
            obj.set_flexgrow("1");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","887","187","90","40",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("34");
            obj.set_horizontalgap("10");
            obj.set_flexmainaxisalign("end");
            obj.set_fittocontents("width");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00\"/><PanelItem id=\"PanelItem02\" componentid=\"Button00_00\"/></Contents>");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Panel("Panel01","280.00","274","500","40",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("35");
            obj.set_background("#ffffff");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divEdtPop00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00\"/></Contents>");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Static("sta04","20","20","100%","40",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("36");
            obj.set_text("돋보기 모양을 클릭하여 본인이 소속된 회사를 찾아 선택하여 주세요.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Panel("Panel04_02_00","0","685","100%","40",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("37");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta04\"/></Contents>");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Panel("pan01_02","10.00","98","300","1",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("38");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("none");
            obj._setContents("<Contents/>");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Edit("edtPswd02","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("4");
            obj.set_readonly("false");
            obj.set_password("true");
            obj.set_text("");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Static("staLabel05_01","10","98","305","46",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("39");
            obj.set_text("비밀번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Edit("edtPswd01","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("3");
            obj.set_readonly("false");
            obj.set_password("true");
            obj.set_text("");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Panel("pan04_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("40");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_01\"/><PanelItem id=\"PanelItem02\" componentid=\"edtPswd01\"/></Contents>");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Static("sta03","20","20","100%","80",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("41");
            obj.set_visible("true");
            obj.set_text("회사ID : \r\n회사명 : \r\n사업자등록번호 : \r\n주소 : ");
            obj.set_cssclass("sta_WF_Des004");
            obj.set_verticalAlign("middle");
            obj.set_fittocontents("height");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Panel("Panel04_02_00_00","0","685","100%","80",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("42");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta03\"/></Contents>");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Panel("pan00_01_00","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("43");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta02_00\"/></Contents>");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Static("sta02_00","20","20","100%","38",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("44");
            obj.set_text("중복체크를 위해 아이디를 클릭해주세요 (문구수정예정)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Static("staSubTitle04","0","-53","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("18");
            obj.set_text("알림설정 발송 여부");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel04","505","-53","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("19");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnMinAlrmYn\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit04","-57","1242","100%","56",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("20");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle04\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel04\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div04","0","30","100%","192",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            obj.set_visible("true");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_type("horizontal");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"pan01_01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan01_01_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("pan01","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("4");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan01_02\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel01_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("1");
            obj.set_text("뉴스 및 이벤트 (SMS 또는 카카오톡)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("pan01_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoYn3\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("pan01_02","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoYn4\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Radio("rdoYn3","127","203","280","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("10");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            var divForm_form_Div04_form_rdoYn3_innerdataset = new nexacro.NormalDataset("divForm_form_Div04_form_rdoYn3_innerdataset", obj);
            divForm_form_Div04_form_rdoYn3_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div04_form_rdoYn3_innerdataset);
            obj.set_text("예");
            obj.set_value("Y");
            obj.set_index("0");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("5");
            obj.set_text("서비스 진행현황 (SMS 또는 카카오톡)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Radio("rdoYn2","127","203","280","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("8");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            var divForm_form_Div04_form_rdoYn2_innerdataset = new nexacro.NormalDataset("divForm_form_Div04_form_rdoYn2_innerdataset", obj);
            divForm_form_Div04_form_rdoYn2_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div04_form_rdoYn2_innerdataset);
            obj.set_text("예");
            obj.set_value("Y");
            obj.set_index("0");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("pan01_01_00","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("7");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoYn2\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("9");
            obj.set_text("서비스 진행현황 (이메일)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Radio("rdoYn1","127","203","280","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("6");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            var divForm_form_Div04_form_rdoYn1_innerdataset = new nexacro.NormalDataset("divForm_form_Div04_form_rdoYn1_innerdataset", obj);
            divForm_form_Div04_form_rdoYn1_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div04_form_rdoYn1_innerdataset);
            obj.set_text("예");
            obj.set_value("Y");
            obj.set_index("0");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("pan01_01_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("12");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoYn1\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("13");
            obj.set_text("계정승인요청현황 (SMS 또는 카카오톡)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Radio("rdoYn4","127","203","280","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("11");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            var divForm_form_Div04_form_rdoYn4_innerdataset = new nexacro.NormalDataset("divForm_form_Div04_form_rdoYn4_innerdataset", obj);
            divForm_form_Div04_form_rdoYn4_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div04_form_rdoYn4_innerdataset);
            obj.set_text("예");
            obj.set_value("Y");
            obj.set_index("0");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staSubTitle05","0","-53","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("22");
            obj.set_text("개인정보 수집·이용 동의");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit05","-68","2230","100%","55",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("24");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle05\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel05\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div05","0","30","100%","306",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","160",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan00_01\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staLabel00","10","98","100%","10",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("1");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("pan00_01","10.00","98","300","150",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem02\" componentid=\"edt00_00_00_00_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_00_00","30.00","98","100.00%","140",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_value("개인정보 수집 및 이용 관련 안내문");
            obj.set_text("개인정보 수집 및 이용 관련 안내문");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("4");
            obj.set_text("개인정보(필수) 사용동의여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Radio("rdoYn5","127","203","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("11");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            var divForm_form_Div05_form_rdoYn5_innerdataset = new nexacro.NormalDataset("divForm_form_Div05_form_rdoYn5_innerdataset", obj);
            divForm_form_Div05_form_rdoYn5_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">동의함</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">동의하지 않음</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div05_form_rdoYn5_innerdataset);
            obj.set_text("동의함");
            obj.set_value("Y");
            obj.set_index("0");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"rdoYn5\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_01_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("6");
            obj.set_text("개인정보(선택) 사용동의여부");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Radio("rdoYn6","127","203","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("12");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            var divForm_form_Div05_form_rdoYn6_innerdataset = new nexacro.NormalDataset("divForm_form_Div05_form_rdoYn6_innerdataset", obj);
            divForm_form_Div05_form_rdoYn6_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">동의함</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">동의하지 않음</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div05_form_rdoYn6_innerdataset);
            obj.set_text("동의함");
            obj.set_value("Y");
            obj.set_index("0");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("7");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("5");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"rdoYn6\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("pan04","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("8");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel01_00_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("sta05","20","20","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("9");
            obj.set_text("(선택 동의 항목은 동의하지 않으셔도 회원 가입이 가능합니다.)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel04","0","560","100%","146",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("10");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_fittocontents("height");
            obj.set_spacing("0px 0px 10px 0px ");
            obj.set_tabledirection("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"pan04\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel04_02_00_00_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel04_02_00_00_00","20","150","100.00%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("13");
            obj.set_spacing("0px 20px 0px 20px");
            obj.set_fittocontents("height");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta05\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel05","505","-53","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("23");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnMinPrvcClctAgre\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit03","-68","2230","100%","55",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("29");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle03\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel03\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div03","0","570.392","100%","1296",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("pan00_00","0","53.076","100%","96",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("31");
            obj.set_fittocontents("height");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_horizontalgap("20");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexwrap("wrap");
            obj.set_flexgrow("1");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel00_02","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("0");
            obj.set_text("사업자등록증");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btn_file_1","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("1");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panBtnFile","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("2");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panTitle","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("3");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static00","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("4");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staCnt1","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("5");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static02","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("6");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panFileNum","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("7");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/><PanelItem id=\"PanelItem01\" componentid=\"staCnt1\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btn_del_file_1","512","135","125","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("8");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panBtnDel","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("9");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_del_file_1\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00","20.00","60","100%","56",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Grid("Grid01","20.00","114","100%","120",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("11");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panFile01","0","42","100.00%","300",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("12");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid01\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel04_02_00_00_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("13");
            obj.set_text("재직증명서");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btn_file_2","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("15");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("16");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_file_2\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panTitle00","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("17");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static00_00","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("18");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staCnt2","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("19");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_00","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("20");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panFileNum00","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("21");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"staCnt2\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btn_del_file_2","512","135","125","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("22");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panBtnDel00","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("23");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_del_file_2\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("24");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Grid("Grid02","20.00","114","100%","120",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("25");
            obj.set_binddataset("dsFile2");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panFile02","0","42","100.00%","300",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("26");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid02\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel04_02_00_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("sta07","40.00","150","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("27");
            obj.set_text("(중요)재직증명서 내 주민등록번호, 생년월일, 자택주소는 삭제(마스킹)하셔야 하며, 삭제(마스킹)하지 않고 가입신청 시 불승인 처리됩니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel04_02_00_00","20","150","100.00%","50",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("28");
            obj.set_spacing("10px 0px 0px 0px");
            obj.set_fittocontents("height");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta07\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","32","52","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("29");
            obj.set_text("이동지역 회사 실제 소속 여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Radio("rdo03","127","203","50%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("14");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            var divForm_form_Div03_form_rdo03_innerdataset = new nexacro.NormalDataset("divForm_form_Div03_form_rdo03_innerdataset", obj);
            divForm_form_Div03_form_rdo03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오 (하도업체, 컨소시엄 등)</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div03_form_rdo03_innerdataset);
            obj.set_text("아니오 (하도업체, 컨소시엄 등)");
            obj.set_value("N");
            obj.set_index("1");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel01_02","20","0","100%","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("30");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Edit00\"/><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"rdo03\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_01","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("32");
            obj.set_text("이동지역 관련 양사 계약 증빙 서류");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btn_file_4","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("33");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panBtnFile01","433","58","150","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("34");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_file_4\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panTitle01","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("35");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_01\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile01\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static00_01","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("36");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staCnt4","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("37");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_01","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("38");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panFileNum01","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("39");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"staCnt4\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02_01\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btn_del_file_4","512","135","125","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("40");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panBtnDel01","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("41");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_del_file_4\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("42");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum01\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel01\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Grid("Grid04","20.00","114","100%","120",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("43");
            obj.set_binddataset("dsFile4");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("sta09","40.00","150","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("44");
            obj.set_text("이동지역 회사 및 실제 소속 회사간 계약관련 증빙 서류");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel04_02_00_01","20","150","100.00%","50",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("45");
            obj.set_spacing("10px 0px 0px 0px");
            obj.set_fittocontents("height");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta09\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("sta06","40.00","150","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("47");
            obj.set_text("사업자등록증의 사업자등록번호와 입주자증명서류(임대계약서, 낙찰증명서 등)에 있는 사업자등록번호가 동일해야 합니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel04_02_00_00_00","20","150","100.00%","50",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("48");
            obj.set_spacing("10px 0px 0px 0px");
            obj.set_fittocontents("height");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta06\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_01_00","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("49");
            obj.set_text("공항 입주 관련 계약 증빙 서류");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btn_file_3","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("50");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panBtnFile01_00","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("51");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_file_3\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panTitle01_00","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("52");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile01_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("53");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staCnt3","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("54");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("55");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panFileNum01_00","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("56");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"staCnt3\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02_01_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btn_del_file_3","512","135","125","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("57");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panBtnDel01_00","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("58");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_del_file_3\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_01_00","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("59");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel01_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Grid("Grid03","20.00","114","100%","120",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("60");
            obj.set_binddataset("dsFile3");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("sta08","40.00","150","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("61");
            obj.set_text("임대계약서, 낙찰증명서 등 (인천국제공항공사와 계약된 서류만 가능)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel04_02_00_01_00","20","150","100.00%","50",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("62");
            obj.set_spacing("10px 0px 0px 0px");
            obj.set_fittocontents("height");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta08\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panFile03","0","42","100.00%","300",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("63");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj.set_flexgrow("1");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid03\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel04_02_00_01_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panFile04","0","42","100.00%","300",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("46");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj.set_flexgrow("1");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid04\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel04_02_00_01\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btnMinAplyInfo","460","-55","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinBscInfo","460","-55","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinAlrmYn","460","-55","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinPrvcClctAgre","460","-55","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("25");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle03","0","-53","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("26");
            obj.set_text("증빙 자료");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinAtfl","460","-55","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("27");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel03","505","-53","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("28");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnMinAtfl\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divPopBtn","0",null,null,"60","0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","457.00","30","100","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("1");
            obj.set_text("신청");
            obj.set_cssclass("btn_WF_Yes");
            this.divPopBtn.addChild(obj.name, obj);

            obj = new Button("Button00_01","457.00","30","100","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_No");
            obj.set_text("신청취소");
            obj.set_visible("false");
            this.divPopBtn.addChild(obj.name, obj);

            obj = new Button("Button00_02","457.00","30","100","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("2");
            obj.set_text("재신청");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_visible("false");
            this.divPopBtn.addChild(obj.name, obj);

            obj = new Edit("edit_coId","-1090.00","20","140","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new RaonkUpload("RaonkUpload","-1110","141","127.50%","200",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_DevelopLangage("JAVA");
            obj.set_ExtensionAllowOrLimit("1");
            obj.set_HandlerUrl("/common/uploadDownload.do");
            obj.set_RunTimes("html5");
            obj.set_ButtonBarView("0");
            obj.set_visible("false");
            obj.set_AllowDuplicationFile("1");
            obj.set_text("");
            obj.set_DisableDeleteConfirm("1");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_prvcAgreDocId","-1090.00","73","140","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_brno","-940.00","20","140","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_coId01","-790.00","20","140","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_coAddr","-640.00","20","140","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_coDtlAddr","-490.00","20","140","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_coSrc","-940","73","140","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form.Div01.form
            obj = new Layout("default","",0,0,this.divForm.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.pan00.set_taborder("1");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("0px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.set_type("horizontal");
                p.pan00.move("0","60","100.00%","96",null,null);

                p.staPrcsDsctn.set_taborder("2");
                p.staPrcsDsctn.set_text("처리내역");
                p.staPrcsDsctn.set_cssclass("sta_WF_Label");
                p.staPrcsDsctn.move("10","98","100%","46",null,null);

                p.pan02_02.set_taborder("3");
                p.pan02_02.set_type("vertical");
                p.pan02_02.set_flexgrow("1");
                p.pan02_02.move("10.00","98","300","100%",null,null);

                p.pan03.set_taborder("4");
                p.pan03.set_horizontalgap("20");
                p.pan03.set_flexcrossaxiswrapalign("start");
                p.pan03.set_flexwrap("wrap");
                p.pan03.set_fittocontents("height");
                p.pan03.set_verticalgap("0");
                p.pan03.set_spacing("0px 20px 10px 20px");
                p.pan03.set_cssclass("pal_WF_DtlBg");
                p.pan03.move("0","60","100.00%","170",null,null);

                p.staPrcrNm.set_taborder("5");
                p.staPrcrNm.set_text("처리자");
                p.staPrcrNm.set_cssclass("sta_WF_Label");
                p.staPrcrNm.move("10","98","100%","46",null,null);

                p.pan02.set_taborder("6");
                p.pan02.set_type("vertical");
                p.pan02.set_flexgrow("1");
                p.pan02.move("10.00","98","300","86",null,null);

                p.staPrcsSttsCd.set_taborder("7");
                p.staPrcsSttsCd.set_text("처리상태");
                p.staPrcsSttsCd.set_cssclass("sta_WF_Label");
                p.staPrcsSttsCd.move("10","98","100%","46",null,null);

                p.pan01.set_taborder("8");
                p.pan01.set_type("vertical");
                p.pan01.set_flexgrow("1");
                p.pan01.move("10.00","98","300","86",null,null);

                p.edtPrcsSttsCd.set_taborder("0");
                p.edtPrcsSttsCd.set_readonly("true");
                p.edtPrcsSttsCd.move("10.00","158","100%","40",null,null);

                p.edtPrcrNm.set_taborder("9");
                p.edtPrcrNm.set_readonly("true");
                p.edtPrcrNm.move("10.00","158","100%","40",null,null);

                p.edtPrcsDsctn.set_taborder("10");
                p.edtPrcsDsctn.set_readonly("true");
                p.edtPrcsDsctn.move("10.00","158","100%","110",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div01.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div02.form
            obj = new Layout("default","",0,0,this.divForm.form.Div02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.pan00.set_taborder("0");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("0px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.set_type("horizontal");
                p.pan00.move("0","60","100.00%","211",null,null);

                p.staLabel01.set_taborder("4");
                p.staLabel01.set_text("ID신청유형");
                p.staLabel01.set_cssclass("sta_WF_Label_E");
                p.staLabel01.set_flexgrow("1");
                p.staLabel01.move("10","98","100%","46",null,null);

                p.pan01_01.set_taborder("5");
                p.pan01_01.set_type("vertical");
                p.pan01_01.set_flexgrow("1");
                p.pan01_01.set_fittocontents("height");
                p.pan01_01.move("10.00","98","100%","86",null,null);

                p.pan01.set_taborder("6");
                p.pan01.set_horizontalgap("20");
                p.pan01.set_flexcrossaxiswrapalign("start");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_fittocontents("height");
                p.pan01.set_verticalgap("0");
                p.pan01.set_spacing("0px 20px 10px 20px");
                p.pan01.set_cssclass("pal_WF_DtlBg");
                p.pan01.set_visible("true");
                p.pan01.move("0","60","100.00%","190",null,null);

                p.staIdAplySe.set_taborder("8");
                p.staIdAplySe.set_text("ID신청구분(최초권한신청)");
                p.staIdAplySe.set_cssclass("sta_WF_Label_E");
                p.staIdAplySe.move("10","98","100%","46",null,null);

                p.pan02.set_taborder("7");
                p.pan02.set_flexcrossaxiswrapalign("center");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("10px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.move("0","60","100.00%","300",null,null);

                p.pan00_01.set_taborder("1");
                p.pan00_01.set_type("vertical");
                p.pan00_01.set_flexgrow("1");
                p.pan00_01.set_fittocontents("height");
                p.pan00_01.move("10.00","98","100%","150",null,null);

                p.sta00.set_taborder("9");
                p.sta00.set_text("복수 권한 필요 시, 회원가입 승인 후 [포털메인>MyPage>계정권한 신청(신청자)] 화면을 이용하시기 바랍니다.)");
                p.sta00.set_cssclass("sta_WF_Des");
                p.sta00.set_fittocontents("height");
                p.sta00.move("40.00","150","100%","40",null,null);

                p.pan00_02.set_taborder("10");
                p.pan00_02.set_spacing("10px 0px 0px 0px");
                p.pan00_02.set_fittocontents("height");
                p.pan00_02.set_type("vertical");
                p.pan00_02.set_flexgrow("1");
                p.pan00_02.move("20","150","100.00%","50",null,null);

                p.sta01.set_taborder("11");
                p.sta01.set_text("1. 일반사용자 : 해당 입주사에 소속된 직원으로 하단의 서비스를 신청하고자 하는 경우입니다.\r\n2. 계정관리자 : 하단 서비스 이용 외 해당 입주사에 소속된 직원(일반사용자)의 계정 신청에 대하여 승인 및 해제할 수 있는 권한을 부여합니다.\r\n※ 공항공사와 직접계약을 맺은 업체가 아닌경우(하도업체 등), 상위에 직접계약을 맺은 사업자 소속의 일반사용자로 가입하시기 바랍니다.");
                p.sta01.set_cssclass("sta_WF_Des");
                p.sta01.set_fittocontents("height");
                p.sta01.move("40.00","150","100%","120",null,null);

                p.pan01_02.set_taborder("12");
                p.pan01_02.set_spacing("10px 0px 0px 0px");
                p.pan01_02.set_fittocontents("height");
                p.pan01_02.set_type("vertical");
                p.pan01_02.set_flexgrow("1");
                p.pan01_02.move("20","150","100.00%","120",null,null);

                p.rdo02.set_taborder("3");
                p.rdo02.set_innerdataset(divForm_form_Div02_form_rdo02_innerdataset);
                p.rdo02.set_codecolumn("codecolumn");
                p.rdo02.set_datacolumn("datacolumn");
                p.rdo02.set_fittocontents("height");
                p.rdo02.set_flexgrow("1");
                p.rdo02.set_columncount("2");
                p.rdo02.set_value("TIDREQCD001");
                p.rdo02.set_index("0");
                p.rdo02.move("200.00","328","100%","40",null,null);

                p.rdo01.set_taborder("2");
                p.rdo01.set_innerdataset(divForm_form_Div02_form_rdo01_innerdataset);
                p.rdo01.set_codecolumn("codecolumn");
                p.rdo01.set_datacolumn("datacolumn");
                p.rdo01.set_flexgrow("1");
                p.rdo01.set_fittocontents("height");
                p.rdo01.set_columncount("3");
                p.rdo01.set_value("TIDCATCD001");
                p.rdo01.set_index("0");
                p.rdo01.move("200.00","328","100%","70",null,null);

                p.grd00.set_taborder("13");
                p.grd00.set_autofittype("none");
                p.grd00.set_binddataset("dsInfo");
                p.grd00.set_autosizingtype("row");
                p.grd00.set_suppresshorzcell("right");
                p.grd00.move("0","8","100.00%","300",null,null);

                p.grd00_00.set_taborder("14");
                p.grd00_00.set_autofittype("col");
                p.grd00_00.set_autosizingtype("row");
                p.grd00_00.set_suppresshorzcell("right");
                p.grd00_00.set_binddataset("dsInfo");
                p.grd00_00.set_maxheight("");
                p.grd00_00.move("0","8","100%","140",null,null);

                p.pan03.set_taborder("15");
                p.pan03.set_horizontalgap("20");
                p.pan03.set_flexcrossaxiswrapalign("center");
                p.pan03.set_flexwrap("wrap");
                p.pan03.set_fittocontents("height");
                p.pan03.set_verticalgap("0");
                p.pan03.set_spacing("10px 20px 10px 20px");
                p.pan03.set_cssclass("pal_WF_DtlBg");
                p.pan03.set_type("horizontal");
                p.pan03.set_flexcrossaxisalign("start");
                p.pan03.set_flexmainaxisalign("center");
                p.pan03.set_visible("false");
                p.pan03.move("0","60","100.00%","185.5",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div02.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div02.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div02.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divBscInfo.form.divEdtPop00.form
            obj = new Layout("default","",0,0,this.divForm.form.divBscInfo.form.divEdtPop00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.edtCoNm.set_taborder("8");
                p.edtCoNm.set_cssclass("edt_WF_EdtSch");
                p.edtCoNm.set_readonly("false");
                p.edtCoNm.move("0","0",null,"40","0",null);

                p.btnPop.set_taborder("1");
                p.btnPop.set_cssclass("btn_WF_EdtSch");
                p.btnPop.move("edtCoNm:-40","0","40","40",null,null);
            	}
            );
            this.divForm.form.divBscInfo.form.divEdtPop00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divBscInfo.form.divEdtPop00.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divBscInfo.form.divEdtPop00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.edtCoNm.move("0","0","100%","40",null,null);
            	}
            );
            this.divForm.form.divBscInfo.form.divEdtPop00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divBscInfo.form
            obj = new Layout("default","",0,0,this.divForm.form.divBscInfo.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.pan00.set_taborder("0");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("0px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.move("0","60","100.00%","96",null,null);

                p.staLabel00_00.set_taborder("7");
                p.staLabel00_00.set_text("성명");
                p.staLabel00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_00.move("10","98","100%","46",null,null);

                p.edtNm.set_taborder("1");
                p.edtNm.set_readonly("false");
                p.edtNm.move("10.00","158","100%","40",null,null);

                p.pan00_01.set_taborder("8");
                p.pan00_01.set_type("vertical");
                p.pan00_01.set_flexgrow("1");
                p.pan00_01.set_minwidth("");
                p.pan00_01.move("10.00","98","300","86",null,null);

                p.staLabel00_01.set_taborder("12");
                p.staLabel00_01.set_text("휴대전화번호 (숫자만 입력하세요)");
                p.staLabel00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel00_01.move("10","98","100%","46",null,null);

                p.pan00_02.set_taborder("13");
                p.pan00_02.set_type("vertical");
                p.pan00_02.set_flexgrow("1");
                p.pan00_02.set_minwidth("");
                p.pan00_02.move("10.00","98","300","86",null,null);

                p.edtMblTelno.set_taborder("2");
                p.edtMblTelno.set_type("string");
                p.edtMblTelno.set_format("###-####-####");
                p.edtMblTelno.move("734","118","100%","40",null,null);

                p.staLabel01_00.set_taborder("14");
                p.staLabel01_00.set_text("아이디");
                p.staLabel01_00.set_cssclass("sta_WF_Label_E");
                p.staLabel01_00.move("10","98","100%","46",null,null);

                p.edtId.set_taborder("15");
                p.edtId.set_readonly("true");
                p.edtId.move("10.00","158","100%","40",null,null);

                p.pan01_01.set_taborder("16");
                p.pan01_01.set_type("vertical");
                p.pan01_01.set_flexgrow("1");
                p.pan01_01.set_fittocontents("none");
                p.pan01_01.move("10.00","98","300","86",null,null);

                p.pan01.set_taborder("17");
                p.pan01.set_horizontalgap("20");
                p.pan01.set_flexcrossaxiswrapalign("start");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_verticalgap("0");
                p.pan01.set_spacing("0px 20px 10px 20px");
                p.pan01.set_cssclass("pal_WF_DtlBg");
                p.pan01.set_fittocontents("height");
                p.pan01.move("0","60","100.00%","96",null,null);

                p.pan04.set_taborder("18");
                p.pan04.set_horizontalgap("20");
                p.pan04.set_flexcrossaxiswrapalign("start");
                p.pan04.set_flexwrap("wrap");
                p.pan04.set_fittocontents("height");
                p.pan04.set_verticalgap("0");
                p.pan04.move("0","60","100.00%","96",null,null);

                p.Panel04.set_taborder("22");
                p.Panel04.set_type("vertical");
                p.Panel04.set_cssclass("pal_WF_DtlBg");
                p.Panel04.set_fittocontents("height");
                p.Panel04.set_spacing("0px 20px 10px 20px");
                p.Panel04.set_verticalgap("10");
                p.Panel04.move("0","560","100%","150",null,null);

                p.pan04_02.set_taborder("19");
                p.pan04_02.set_type("vertical");
                p.pan04_02.set_flexgrow("1");
                p.pan04_02.move("10.00","98","300","86",null,null);

                p.Panel04_02.set_taborder("21");
                p.Panel04_02.set_fittocontents("height");
                p.Panel04_02.move("0","685","100%","40",null,null);

                p.sta02.set_taborder("20");
                p.sta02.set_text("비밀번호는 9자~16자[영문+특수문자+숫자] 조합으로 설정해 주세요   * 사용가능 특수문자 : ! @ # $ ^ & * ( )");
                p.sta02.set_cssclass("sta_WF_Des");
                p.sta02.set_fittocontents("height");
                p.sta02.move("20","20","100%","38",null,null);

                p.staLabel04_02.set_taborder("23");
                p.staLabel04_02.set_text("비밀번호확인");
                p.staLabel04_02.set_cssclass("sta_WF_Label_E");
                p.staLabel04_02.move("10","98","100%","46",null,null);

                p.staLabel04_01_00.set_taborder("24");
                p.staLabel04_01_00.set_text("이메일");
                p.staLabel04_01_00.set_cssclass("sta_WF_Label_E");
                p.staLabel04_01_00.move("10","98","100%","46",null,null);

                p.edtEml.set_taborder("5");
                p.edtEml.set_readonly("false");
                p.edtEml.move("10.00","158","100%","40",null,null);

                p.pan03_02_00.set_taborder("25");
                p.pan03_02_00.set_type("vertical");
                p.pan03_02_00.set_flexgrow("1");
                p.pan03_02_00.move("10.00","98","300","86",null,null);

                p.staLabel04_00_00_01.set_taborder("26");
                p.staLabel04_00_00_01.set_text("전화번호");
                p.staLabel04_00_00_01.set_cssclass("sta_WF_Label");
                p.staLabel04_00_00_01.move("10","98","100%","46",null,null);

                p.edtTelno.set_taborder("6");
                p.edtTelno.set_readonly("false");
                p.edtTelno.move("10.00","158","100%","40",null,null);

                p.pan03_01_00_00.set_taborder("27");
                p.pan03_01_00_00.set_type("vertical");
                p.pan03_01_00_00.set_flexgrow("1");
                p.pan03_01_00_00.move("10.00","98","300","86",null,null);

                p.pan03_00.set_taborder("28");
                p.pan03_00.set_horizontalgap("20");
                p.pan03_00.set_flexcrossaxiswrapalign("start");
                p.pan03_00.set_flexwrap("wrap");
                p.pan03_00.set_fittocontents("height");
                p.pan03_00.set_verticalgap("0");
                p.pan03_00.set_spacing("0px 20px 10px 20px");
                p.pan03_00.set_cssclass("pal_WF_DtlBg");
                p.pan03_00.move("0","60","100.00%","96",null,null);

                p.staLabel03_00_00_00.set_taborder("29");
                p.staLabel03_00_00_00.set_text("소속회사");
                p.staLabel03_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_00_00.move("10","98","100%","46",null,null);

                p.pan02_00_00.set_taborder("30");
                p.pan02_00_00.set_type("vertical");
                p.pan02_00_00.set_fittocontents("height");
                p.pan02_00_00.move("10.00","98","100%","86",null,null);

                p.pan02_01_00.set_taborder("31");
                p.pan02_01_00.set_horizontalgap("20");
                p.pan02_01_00.set_flexcrossaxiswrapalign("start");
                p.pan02_01_00.set_flexwrap("wrap");
                p.pan02_01_00.set_fittocontents("height");
                p.pan02_01_00.set_verticalgap("10");
                p.pan02_01_00.set_spacing("0px 20px 10px 20px");
                p.pan02_01_00.set_cssclass("pal_WF_DtlBg");
                p.pan02_01_00.set_type("vertical");
                p.pan02_01_00.move("0","60","100.00%","237",null,null);

                p.Panel00.set_taborder("32");
                p.Panel00.set_horizontalgap("10");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_verticalgap("4");
                p.Panel00.move("665","564","100%","50",null,null);

                p.btnGrdRegi00.set_taborder("11");
                p.btnGrdRegi00.set_text("신규등록");
                p.btnGrdRegi00.set_cssclass("btn_WF_SmallGray");
                p.btnGrdRegi00.set_visible("false");
                p.btnGrdRegi00.set_fittocontents("width");
                p.btnGrdRegi00.move("943.00","50","76","40",null,null);

                p.divEdtPop00.set_taborder("33");
                p.divEdtPop00.set_text("Div00");
                p.divEdtPop00.set_formscrollbartype("none none");
                p.divEdtPop00.set_formscrolltype("none");
                p.divEdtPop00.set_flexgrow("1");
                p.divEdtPop00.move("280","274","150","40",null,null);

                p.Button00.set_taborder("9");
                p.Button00.set_cssclass("btn_WF_Information");
                p.Button00.set_flexshrink("0");
                p.Button00.set_flexgrow("1");
                p.Button00.move("870.00","180","40","40",null,null);

                p.Button00_00.set_taborder("10");
                p.Button00_00.set_cssclass("btn_WF_CodeX");
                p.Button00_00.set_text("");
                p.Button00_00.set_flexshrink("0");
                p.Button00_00.set_flexgrow("1");
                p.Button00_00.move("950.00","187","40","40",null,null);

                p.Panel00_00.set_taborder("34");
                p.Panel00_00.set_horizontalgap("10");
                p.Panel00_00.set_flexmainaxisalign("end");
                p.Panel00_00.set_fittocontents("width");
                p.Panel00_00.set_flexwrap("wrap");
                p.Panel00_00.move("887","187","90","40",null,null);

                p.Panel01.set_taborder("35");
                p.Panel01.set_background("#ffffff");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.set_fittocontents("height");
                p.Panel01.set_flexgrow("1");
                p.Panel01.move("280.00","274","500","40",null,null);

                p.sta04.set_taborder("36");
                p.sta04.set_text("돋보기 모양을 클릭하여 본인이 소속된 회사를 찾아 선택하여 주세요.");
                p.sta04.set_cssclass("sta_WF_Des");
                p.sta04.set_fittocontents("height");
                p.sta04.move("20","20","100%","40",null,null);

                p.Panel04_02_00.set_taborder("37");
                p.Panel04_02_00.set_fittocontents("height");
                p.Panel04_02_00.move("0","685","100%","40",null,null);

                p.pan01_02.set_taborder("38");
                p.pan01_02.set_type("vertical");
                p.pan01_02.set_flexgrow("1");
                p.pan01_02.set_fittocontents("none");
                p.pan01_02.move("10.00","98","300","1",null,null);

                p.edtPswd02.set_taborder("4");
                p.edtPswd02.set_readonly("false");
                p.edtPswd02.set_password("true");
                p.edtPswd02.move("10.00","158","100%","40",null,null);

                p.staLabel05_01.set_taborder("39");
                p.staLabel05_01.set_text("비밀번호");
                p.staLabel05_01.set_cssclass("sta_WF_Label_E");
                p.staLabel05_01.move("10","98","305","46",null,null);

                p.edtPswd01.set_taborder("3");
                p.edtPswd01.set_readonly("false");
                p.edtPswd01.set_password("true");
                p.edtPswd01.move("10.00","158","100%","40",null,null);

                p.pan04_01.set_taborder("40");
                p.pan04_01.set_type("vertical");
                p.pan04_01.set_flexgrow("1");
                p.pan04_01.move("10.00","98","300","86",null,null);

                p.sta03.set_taborder("41");
                p.sta03.set_visible("true");
                p.sta03.set_text("회사ID : \r\n회사명 : \r\n사업자등록번호 : \r\n주소 : ");
                p.sta03.set_cssclass("sta_WF_Des004");
                p.sta03.set_verticalAlign("middle");
                p.sta03.set_fittocontents("height");
                p.sta03.move("20","20","100%","80",null,null);

                p.Panel04_02_00_00.set_taborder("42");
                p.Panel04_02_00_00.set_visible("false");
                p.Panel04_02_00_00.move("0","685","100%","80",null,null);

                p.pan00_01_00.set_taborder("43");
                p.pan00_01_00.set_type("vertical");
                p.pan00_01_00.set_flexgrow("1");
                p.pan00_01_00.set_flexmainaxisalign("end");
                p.pan00_01_00.set_minwidth("");
                p.pan00_01_00.move("10.00","98","300","86",null,null);

                p.sta02_00.set_taborder("44");
                p.sta02_00.set_text("중복체크를 위해 아이디를 클릭해주세요 (문구수정예정)");
                p.sta02_00.set_cssclass("sta_WF_Des");
                p.sta02_00.set_fittocontents("height");
                p.sta02_00.move("20","20","100%","38",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.divBscInfo.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divBscInfo.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divBscInfo.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel01.set_flexwrap("nowrap");
                p.Panel01.move(null,null,"100%",null,null,null);

                p.Panel00.set_flexgrow("1");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_type("vertical");
                p.Panel00.move("665","564","100%","50",null,null);


                p.pan00_02.set_fittocontents("height");

                p.pan00.set_flexgrow("1");

                p.pan01.set_flexgrow("1");

                p.Panel04.set_flexgrow("1");

                p.pan03_00.set_flexgrow("1");

                p.pan02_01_00.set_flexgrow("1");

                p.pan01_01.set_fittocontents("height");

                p.pan00_01.set_fittocontents("height");

                p.pan00_01_00.set_fittocontents("height");

                p.divEdtPop00.set_fittocontents("height");
                p.divEdtPop00.set_flexgrow("0");
                p.divEdtPop00.move("20","507","60%","40",null,null);

                p.Panel00_00.move("887","187","90","40",null,null);

                p.Button00.set_flexgrow("0");

                p.Button00_00.set_flexgrow("0");
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.divBscInfo.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div04.form
            obj = new Layout("default","",0,0,this.divForm.form.Div04.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.pan00.set_taborder("0");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("0px 20px 10px 20px");
                p.pan00.set_type("horizontal");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.move("0","60","100.00%","96",null,null);

                p.pan01.set_taborder("4");
                p.pan01.set_horizontalgap("20");
                p.pan01.set_flexcrossaxiswrapalign("start");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_fittocontents("height");
                p.pan01.set_verticalgap("0");
                p.pan01.set_spacing("0px 20px 10px 20px");
                p.pan01.set_cssclass("pal_WF_DtlBg");
                p.pan01.move("0","60","100.00%","96",null,null);

                p.staLabel01_00.set_taborder("1");
                p.staLabel01_00.set_text("뉴스 및 이벤트 (SMS 또는 카카오톡)");
                p.staLabel01_00.set_cssclass("sta_WF_Label_E");
                p.staLabel01_00.move("10","98","100%","46",null,null);

                p.pan01_01.set_taborder("2");
                p.pan01_01.set_type("vertical");
                p.pan01_01.set_flexgrow("1");
                p.pan01_01.move("10.00","98","300","86",null,null);

                p.pan01_02.set_taborder("3");
                p.pan01_02.set_type("vertical");
                p.pan01_02.set_flexgrow("1");
                p.pan01_02.set_visible("false");
                p.pan01_02.move("10.00","98","300","86",null,null);

                p.rdoYn3.set_taborder("10");
                p.rdoYn3.set_fittocontents("width");
                p.rdoYn3.set_innerdataset(divForm_form_Div04_form_rdoYn3_innerdataset);
                p.rdoYn3.set_codecolumn("codecolumn");
                p.rdoYn3.set_datacolumn("datacolumn");
                p.rdoYn3.set_columncount("2");
                p.rdoYn3.set_value("Y");
                p.rdoYn3.set_index("0");
                p.rdoYn3.move("127","203","280","40",null,null);

                p.staLabel01_00_00.set_taborder("5");
                p.staLabel01_00_00.set_text("서비스 진행현황 (SMS 또는 카카오톡)");
                p.staLabel01_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel01_00_00.move("10","98","100%","46",null,null);

                p.rdoYn2.set_taborder("8");
                p.rdoYn2.set_fittocontents("width");
                p.rdoYn2.set_innerdataset(divForm_form_Div04_form_rdoYn2_innerdataset);
                p.rdoYn2.set_codecolumn("codecolumn");
                p.rdoYn2.set_datacolumn("datacolumn");
                p.rdoYn2.set_columncount("2");
                p.rdoYn2.set_value("Y");
                p.rdoYn2.set_index("0");
                p.rdoYn2.move("127","203","280","40",null,null);

                p.pan01_01_00.set_taborder("7");
                p.pan01_01_00.set_type("vertical");
                p.pan01_01_00.set_flexgrow("1");
                p.pan01_01_00.move("10.00","98","300","86",null,null);

                p.staLabel01_00_01.set_taborder("9");
                p.staLabel01_00_01.set_text("서비스 진행현황 (이메일)");
                p.staLabel01_00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel01_00_01.move("10","98","100%","46",null,null);

                p.rdoYn1.set_taborder("6");
                p.rdoYn1.set_fittocontents("width");
                p.rdoYn1.set_innerdataset(divForm_form_Div04_form_rdoYn1_innerdataset);
                p.rdoYn1.set_codecolumn("codecolumn");
                p.rdoYn1.set_datacolumn("datacolumn");
                p.rdoYn1.set_columncount("2");
                p.rdoYn1.set_value("Y");
                p.rdoYn1.set_index("0");
                p.rdoYn1.move("127","203","280","40",null,null);

                p.pan01_01_01.set_taborder("12");
                p.pan01_01_01.set_type("vertical");
                p.pan01_01_01.set_flexgrow("1");
                p.pan01_01_01.move("10.00","98","300","86",null,null);

                p.staLabel00_00.set_taborder("13");
                p.staLabel00_00.set_text("계정승인요청현황 (SMS 또는 카카오톡)");
                p.staLabel00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_00.move("10","98","100%","46",null,null);

                p.rdoYn4.set_taborder("11");
                p.rdoYn4.set_fittocontents("width");
                p.rdoYn4.set_innerdataset(divForm_form_Div04_form_rdoYn4_innerdataset);
                p.rdoYn4.set_codecolumn("codecolumn");
                p.rdoYn4.set_datacolumn("datacolumn");
                p.rdoYn4.set_columncount("2");
                p.rdoYn4.set_value("Y");
                p.rdoYn4.set_index("0");
                p.rdoYn4.move("127","203","280","40",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div04.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div04.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div04.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div04.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div05.form
            obj = new Layout("default","",0,0,this.divForm.form.Div05.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.pan00.set_taborder("0");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("0px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.set_type("horizontal");
                p.pan00.move("0","60","100.00%","160",null,null);

                p.staLabel00.set_taborder("1");
                p.staLabel00.move("10","98","100%","10",null,null);

                p.pan00_01.set_taborder("2");
                p.pan00_01.set_type("vertical");
                p.pan00_01.set_flexgrow("1");
                p.pan00_01.move("10.00","98","300","150",null,null);

                p.edt00_00_00_00_00.set_taborder("3");
                p.edt00_00_00_00_00.set_readonly("true");
                p.edt00_00_00_00_00.set_value("개인정보 수집 및 이용 관련 안내문");
                p.edt00_00_00_00_00.move("30.00","98","100.00%","140",null,null);

                p.staLabel01_00_01.set_taborder("4");
                p.staLabel01_00_01.set_text("개인정보(필수) 사용동의여부");
                p.staLabel01_00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel01_00_01.move("10","98","100%","46",null,null);

                p.rdoYn5.set_taborder("11");
                p.rdoYn5.set_fittocontents("width");
                p.rdoYn5.set_innerdataset(divForm_form_Div05_form_rdoYn5_innerdataset);
                p.rdoYn5.set_codecolumn("codecolumn");
                p.rdoYn5.set_datacolumn("datacolumn");
                p.rdoYn5.set_columncount("2");
                p.rdoYn5.set_value("Y");
                p.rdoYn5.set_index("0");
                p.rdoYn5.move("127","203","100%","40",null,null);

                p.Panel01_00.set_taborder("5");
                p.Panel01_00.set_type("vertical");
                p.Panel01_00.set_flexgrow("1");
                p.Panel01_00.set_fittocontents("height");
                p.Panel01_00.move("10.00","98","300","86",null,null);

                p.staLabel01_00_01_00_00.set_taborder("6");
                p.staLabel01_00_01_00_00.set_text("개인정보(선택) 사용동의여부");
                p.staLabel01_00_01_00_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00_01_00_00.move("10","98","100%","46",null,null);

                p.rdoYn6.set_taborder("12");
                p.rdoYn6.set_fittocontents("width");
                p.rdoYn6.set_innerdataset(divForm_form_Div05_form_rdoYn6_innerdataset);
                p.rdoYn6.set_codecolumn("codecolumn");
                p.rdoYn6.set_datacolumn("datacolumn");
                p.rdoYn6.set_columncount("2");
                p.rdoYn6.set_value("Y");
                p.rdoYn6.set_index("0");
                p.rdoYn6.move("127","203","100%","40",null,null);

                p.Panel01_00_00.set_taborder("7");
                p.Panel01_00_00.set_type("vertical");
                p.Panel01_00_00.set_flexgrow("1");
                p.Panel01_00_00.set_verticalgap("5");
                p.Panel01_00_00.set_fittocontents("height");
                p.Panel01_00_00.move("10.00","98","300","86",null,null);

                p.pan04.set_taborder("8");
                p.pan04.set_horizontalgap("20");
                p.pan04.set_flexcrossaxiswrapalign("start");
                p.pan04.set_flexwrap("wrap");
                p.pan04.set_fittocontents("height");
                p.pan04.set_verticalgap("0");
                p.pan04.set_spacing("0px 20px 10px 20px");
                p.pan04.set_flexgrow("1");
                p.pan04.move("0","60","100.00%","96",null,null);

                p.sta05.set_taborder("9");
                p.sta05.set_text("(선택 동의 항목은 동의하지 않으셔도 회원 가입이 가능합니다.)");
                p.sta05.set_cssclass("sta_WF_Des");
                p.sta05.set_fittocontents("height");
                p.sta05.move("20","20","100%","40",null,null);

                p.Panel04.set_taborder("10");
                p.Panel04.set_type("vertical");
                p.Panel04.set_cssclass("pal_WF_DtlBg");
                p.Panel04.set_fittocontents("height");
                p.Panel04.set_spacing("0px 0px 10px 0px ");
                p.Panel04.set_tabledirection("vertical");
                p.Panel04.move("0","560","100%","146",null,null);

                p.Panel04_02_00_00_00.set_taborder("13");
                p.Panel04_02_00_00_00.set_spacing("0px 20px 0px 20px");
                p.Panel04_02_00_00_00.set_fittocontents("height");
                p.Panel04_02_00_00_00.set_type("vertical");
                p.Panel04_02_00_00_00.move("20","150","100.00%","40",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div05.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div05.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div05.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div05.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div03.form
            obj = new Layout("default","",0,0,this.divForm.form.Div03.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.pan00_00.set_taborder("31");
                p.pan00_00.set_fittocontents("height");
                p.pan00_00.set_spacing("0px 20px 10px 20px");
                p.pan00_00.set_horizontalgap("20");
                p.pan00_00.set_cssclass("pal_WF_DtlBg");
                p.pan00_00.set_flexwrap("wrap");
                p.pan00_00.set_flexgrow("1");
                p.pan00_00.set_visible("false");
                p.pan00_00.move("0","53.076","100%","96",null,null);

                p.staLabel00_02.set_taborder("0");
                p.staLabel00_02.set_text("사업자등록증");
                p.staLabel00_02.set_cssclass("sta_WF_Label_E");
                p.staLabel00_02.set_flexgrow("1");
                p.staLabel00_02.move("0","44","305","46",null,null);

                p.btn_file_1.set_taborder("1");
                p.btn_file_1.set_text("파일선택");
                p.btn_file_1.set_cssclass("btn_WF_FileUp");
                p.btn_file_1.move("124","58","116","40",null,null);

                p.panBtnFile.set_taborder("2");
                p.panBtnFile.set_flexgrow("1");
                p.panBtnFile.set_flexcrossaxisalign("start");
                p.panBtnFile.set_flexmainaxisalign("end");
                p.panBtnFile.move("433","58","305","46",null,null);

                p.panTitle.set_taborder("3");
                p.panTitle.set_cssclass("pan_WF_FileTitle");
                p.panTitle.set_flexwrap("wrap");
                p.panTitle.set_fittocontents("height");
                p.panTitle.move("0","124","100%","46",null,null);

                p.Static00.set_taborder("4");
                p.Static00.set_text("파일수 : ");
                p.Static00.set_fittocontents("width");
                p.Static00.move("88","123","48","46",null,null);

                p.staCnt1.set_taborder("5");
                p.staCnt1.set_text("0");
                p.staCnt1.set_fittocontents("width");
                p.staCnt1.move("165","143","9","46",null,null);

                p.Static02.set_taborder("6");
                p.Static02.set_text("개");
                p.Static02.set_fittocontents("width");
                p.Static02.move("293","131","13","46",null,null);

                p.panFileNum.set_taborder("7");
                p.panFileNum.set_flexgrow("1");
                p.panFileNum.set_horizontalgap("4");
                p.panFileNum.move("20","190","305","46",null,null);

                p.btn_del_file_1.set_taborder("8");
                p.btn_del_file_1.set_text("전체파일삭제");
                p.btn_del_file_1.set_cssclass("btn_WF_FileDel");
                p.btn_del_file_1.set_fittocontents("width");
                p.btn_del_file_1.set_visible("false");
                p.btn_del_file_1.move("512","135","125","40",null,null);

                p.panBtnDel.set_taborder("9");
                p.panBtnDel.set_flexcrossaxisalign("center");
                p.panBtnDel.set_flexmainaxisalign("end");
                p.panBtnDel.set_flexgrow("1");
                p.panBtnDel.move("517","141","305","46",null,null);

                p.Panel00.set_taborder("10");
                p.Panel00.move("20.00","60","100%","56",null,null);

                p.Grid01.set_taborder("11");
                p.Grid01.set_binddataset("dsFile1");
                p.Grid01.set_autofittype("col");
                p.Grid01.set_cssclass("grd_WF_FileAdd");
                p.Grid01.move("20.00","114","100%","120",null,null);

                p.panFile01.set_taborder("12");
                p.panFile01.set_fittocontents("height");
                p.panFile01.set_spacing("10px 20px 10px 20px");
                p.panFile01.set_flexwrap("wrap");
                p.panFile01.set_cssclass("pal_WF_DtlBg");
                p.panFile01.set_verticalgap("4");
                p.panFile01.set_flexgrow("1");
                p.panFile01.move("0","42","100.00%","300",null,null);

                p.staLabel00_02_00.set_taborder("13");
                p.staLabel00_02_00.set_text("재직증명서");
                p.staLabel00_02_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_02_00.set_flexgrow("1");
                p.staLabel00_02_00.move("0","44","305","46",null,null);

                p.btn_file_2.set_taborder("15");
                p.btn_file_2.set_text("파일선택");
                p.btn_file_2.set_cssclass("btn_WF_FileUp");
                p.btn_file_2.move("124","58","116","40",null,null);

                p.panBtnFile00.set_taborder("16");
                p.panBtnFile00.set_flexgrow("1");
                p.panBtnFile00.set_flexcrossaxisalign("start");
                p.panBtnFile00.set_flexmainaxisalign("end");
                p.panBtnFile00.move("433","58","305","46",null,null);

                p.panTitle00.set_taborder("17");
                p.panTitle00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00.set_flexwrap("wrap");
                p.panTitle00.move("0","124","100%","46",null,null);

                p.Static00_00.set_taborder("18");
                p.Static00_00.set_text("파일수 : ");
                p.Static00_00.set_fittocontents("width");
                p.Static00_00.move("88","123","48","46",null,null);

                p.staCnt2.set_taborder("19");
                p.staCnt2.set_text("0");
                p.staCnt2.set_fittocontents("width");
                p.staCnt2.move("165","143","9","46",null,null);

                p.Static02_00.set_taborder("20");
                p.Static02_00.set_text("개");
                p.Static02_00.set_fittocontents("width");
                p.Static02_00.move("293","131","13","46",null,null);

                p.panFileNum00.set_taborder("21");
                p.panFileNum00.set_flexgrow("1");
                p.panFileNum00.set_horizontalgap("4");
                p.panFileNum00.move("20","190","305","46",null,null);

                p.btn_del_file_2.set_taborder("22");
                p.btn_del_file_2.set_text("전체파일삭제");
                p.btn_del_file_2.set_cssclass("btn_WF_FileDel");
                p.btn_del_file_2.set_fittocontents("width");
                p.btn_del_file_2.set_visible("false");
                p.btn_del_file_2.move("512","135","125","40",null,null);

                p.panBtnDel00.set_taborder("23");
                p.panBtnDel00.set_flexcrossaxisalign("center");
                p.panBtnDel00.set_flexmainaxisalign("end");
                p.panBtnDel00.set_flexgrow("1");
                p.panBtnDel00.move("517","141","305","46",null,null);

                p.Panel00_00.set_taborder("24");
                p.Panel00_00.move("20","51","100%","46",null,null);

                p.Grid02.set_taborder("25");
                p.Grid02.set_binddataset("dsFile2");
                p.Grid02.set_autofittype("col");
                p.Grid02.set_cssclass("grd_WF_FileAdd");
                p.Grid02.move("20.00","114","100%","120",null,null);

                p.panFile02.set_taborder("26");
                p.panFile02.set_fittocontents("height");
                p.panFile02.set_spacing("10px 20px 10px 20px");
                p.panFile02.set_flexwrap("wrap");
                p.panFile02.set_cssclass("pal_WF_DtlBg");
                p.panFile02.set_verticalgap("4");
                p.panFile02.set_flexgrow("1");
                p.panFile02.move("0","42","100.00%","300",null,null);

                p.sta07.set_taborder("27");
                p.sta07.set_text("(중요)재직증명서 내 주민등록번호, 생년월일, 자택주소는 삭제(마스킹)하셔야 하며, 삭제(마스킹)하지 않고 가입신청 시 불승인 처리됩니다.");
                p.sta07.set_cssclass("sta_WF_Des");
                p.sta07.set_fittocontents("height");
                p.sta07.move("40.00","150","100%","40",null,null);

                p.Panel04_02_00_00.set_taborder("28");
                p.Panel04_02_00_00.set_spacing("10px 0px 0px 0px");
                p.Panel04_02_00_00.set_fittocontents("height");
                p.Panel04_02_00_00.set_type("vertical");
                p.Panel04_02_00_00.move("20","150","100.00%","50",null,null);

                p.staLabel00_00.set_taborder("29");
                p.staLabel00_00.set_text("이동지역 회사 실제 소속 여부");
                p.staLabel00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_00.move("32","52","100%","46",null,null);

                p.rdo03.set_taborder("14");
                p.rdo03.set_fittocontents("width");
                p.rdo03.set_innerdataset(divForm_form_Div03_form_rdo03_innerdataset);
                p.rdo03.set_codecolumn("codecolumn");
                p.rdo03.set_datacolumn("datacolumn");
                p.rdo03.set_columncount("2");
                p.rdo03.set_value("N");
                p.rdo03.set_index("1");
                p.rdo03.move("127","203","50%","40",null,null);

                p.Panel01_02.set_taborder("30");
                p.Panel01_02.set_type("vertical");
                p.Panel01_02.set_fittocontents("height");
                p.Panel01_02.move("20","0","100%","86",null,null);

                p.staLabel00_02_01.set_taborder("32");
                p.staLabel00_02_01.set_text("이동지역 관련 양사 계약 증빙 서류");
                p.staLabel00_02_01.set_cssclass("sta_WF_Label_E");
                p.staLabel00_02_01.set_flexgrow("1");
                p.staLabel00_02_01.move("0","44","305","46",null,null);

                p.btn_file_4.set_taborder("33");
                p.btn_file_4.set_text("파일선택");
                p.btn_file_4.set_cssclass("btn_WF_FileUp");
                p.btn_file_4.move("124","58","116","40",null,null);

                p.panBtnFile01.set_taborder("34");
                p.panBtnFile01.set_flexgrow("1");
                p.panBtnFile01.set_flexcrossaxisalign("start");
                p.panBtnFile01.set_flexmainaxisalign("end");
                p.panBtnFile01.move("433","58","150","46",null,null);

                p.panTitle01.set_taborder("35");
                p.panTitle01.set_cssclass("pan_WF_FileTitle");
                p.panTitle01.set_fittocontents("height");
                p.panTitle01.set_flexwrap("wrap");
                p.panTitle01.move("0","124","100%","46",null,null);

                p.Static00_01.set_taborder("36");
                p.Static00_01.set_text("파일수 : ");
                p.Static00_01.set_fittocontents("width");
                p.Static00_01.move("88","123","48","46",null,null);

                p.staCnt4.set_taborder("37");
                p.staCnt4.set_text("0");
                p.staCnt4.set_fittocontents("width");
                p.staCnt4.move("165","143","9","46",null,null);

                p.Static02_01.set_taborder("38");
                p.Static02_01.set_text("개");
                p.Static02_01.set_fittocontents("width");
                p.Static02_01.move("293","131","13","46",null,null);

                p.panFileNum01.set_taborder("39");
                p.panFileNum01.set_flexgrow("1");
                p.panFileNum01.set_horizontalgap("4");
                p.panFileNum01.move("20","190","305","46",null,null);

                p.btn_del_file_4.set_taborder("40");
                p.btn_del_file_4.set_text("전체파일삭제");
                p.btn_del_file_4.set_cssclass("btn_WF_FileDel");
                p.btn_del_file_4.set_fittocontents("width");
                p.btn_del_file_4.set_visible("false");
                p.btn_del_file_4.move("512","135","125","40",null,null);

                p.panBtnDel01.set_taborder("41");
                p.panBtnDel01.set_flexcrossaxisalign("center");
                p.panBtnDel01.set_flexmainaxisalign("end");
                p.panBtnDel01.set_flexgrow("1");
                p.panBtnDel01.move("517","141","305","46",null,null);

                p.Panel00_01.set_taborder("42");
                p.Panel00_01.move("20","51","100%","46",null,null);

                p.Grid04.set_taborder("43");
                p.Grid04.set_binddataset("dsFile4");
                p.Grid04.set_autofittype("col");
                p.Grid04.set_cssclass("grd_WF_FileAdd");
                p.Grid04.move("20.00","114","100%","120",null,null);

                p.sta09.set_taborder("44");
                p.sta09.set_text("이동지역 회사 및 실제 소속 회사간 계약관련 증빙 서류");
                p.sta09.set_cssclass("sta_WF_Des");
                p.sta09.set_fittocontents("height");
                p.sta09.move("40.00","150","100%","40",null,null);

                p.Panel04_02_00_01.set_taborder("45");
                p.Panel04_02_00_01.set_spacing("10px 0px 0px 0px");
                p.Panel04_02_00_01.set_fittocontents("height");
                p.Panel04_02_00_01.set_type("vertical");
                p.Panel04_02_00_01.move("20","150","100.00%","50",null,null);

                p.sta06.set_taborder("47");
                p.sta06.set_text("사업자등록증의 사업자등록번호와 입주자증명서류(임대계약서, 낙찰증명서 등)에 있는 사업자등록번호가 동일해야 합니다.");
                p.sta06.set_cssclass("sta_WF_Des");
                p.sta06.set_fittocontents("height");
                p.sta06.move("40.00","150","100%","40",null,null);

                p.Panel04_02_00_00_00.set_taborder("48");
                p.Panel04_02_00_00_00.set_spacing("10px 0px 0px 0px");
                p.Panel04_02_00_00_00.set_fittocontents("height");
                p.Panel04_02_00_00_00.set_type("vertical");
                p.Panel04_02_00_00_00.move("20","150","100.00%","50",null,null);

                p.staLabel00_02_01_00.set_taborder("49");
                p.staLabel00_02_01_00.set_text("공항 입주 관련 계약 증빙 서류");
                p.staLabel00_02_01_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_02_01_00.set_flexgrow("1");
                p.staLabel00_02_01_00.move("0","44","305","46",null,null);

                p.btn_file_3.set_taborder("50");
                p.btn_file_3.set_text("파일선택");
                p.btn_file_3.set_cssclass("btn_WF_FileUp");
                p.btn_file_3.move("124","58","116","40",null,null);

                p.panBtnFile01_00.set_taborder("51");
                p.panBtnFile01_00.set_flexgrow("1");
                p.panBtnFile01_00.set_flexcrossaxisalign("start");
                p.panBtnFile01_00.set_flexmainaxisalign("end");
                p.panBtnFile01_00.move("433","58","305","46",null,null);

                p.panTitle01_00.set_taborder("52");
                p.panTitle01_00.set_cssclass("pan_WF_FileTitle");
                p.panTitle01_00.set_fittocontents("height");
                p.panTitle01_00.set_flexwrap("wrap");
                p.panTitle01_00.move("0","124","100%","46",null,null);

                p.Static00_01_00.set_taborder("53");
                p.Static00_01_00.set_text("파일수 : ");
                p.Static00_01_00.set_fittocontents("width");
                p.Static00_01_00.move("88","123","48","46",null,null);

                p.staCnt3.set_taborder("54");
                p.staCnt3.set_text("0");
                p.staCnt3.set_fittocontents("width");
                p.staCnt3.move("165","143","9","46",null,null);

                p.Static02_01_00.set_taborder("55");
                p.Static02_01_00.set_text("개");
                p.Static02_01_00.set_fittocontents("width");
                p.Static02_01_00.move("293","131","13","46",null,null);

                p.panFileNum01_00.set_taborder("56");
                p.panFileNum01_00.set_flexgrow("1");
                p.panFileNum01_00.set_horizontalgap("4");
                p.panFileNum01_00.move("20","190","305","46",null,null);

                p.btn_del_file_3.set_taborder("57");
                p.btn_del_file_3.set_text("전체파일삭제");
                p.btn_del_file_3.set_cssclass("btn_WF_FileDel");
                p.btn_del_file_3.set_fittocontents("width");
                p.btn_del_file_3.set_visible("false");
                p.btn_del_file_3.move("512","135","125","40",null,null);

                p.panBtnDel01_00.set_taborder("58");
                p.panBtnDel01_00.set_flexcrossaxisalign("center");
                p.panBtnDel01_00.set_flexmainaxisalign("end");
                p.panBtnDel01_00.set_flexgrow("1");
                p.panBtnDel01_00.move("517","141","305","46",null,null);

                p.Panel00_01_00.set_taborder("59");
                p.Panel00_01_00.move("20","51","100%","46",null,null);

                p.Grid03.set_taborder("60");
                p.Grid03.set_binddataset("dsFile3");
                p.Grid03.set_autofittype("col");
                p.Grid03.set_cssclass("grd_WF_FileAdd");
                p.Grid03.move("20.00","114","100%","120",null,null);

                p.sta08.set_taborder("61");
                p.sta08.set_text("임대계약서, 낙찰증명서 등 (인천국제공항공사와 계약된 서류만 가능)");
                p.sta08.set_cssclass("sta_WF_Des");
                p.sta08.set_fittocontents("height");
                p.sta08.move("40.00","150","100%","40",null,null);

                p.Panel04_02_00_01_00.set_taborder("62");
                p.Panel04_02_00_01_00.set_spacing("10px 0px 0px 0px");
                p.Panel04_02_00_01_00.set_fittocontents("height");
                p.Panel04_02_00_01_00.set_type("vertical");
                p.Panel04_02_00_01_00.move("20","150","100.00%","50",null,null);

                p.panFile03.set_taborder("63");
                p.panFile03.set_fittocontents("height");
                p.panFile03.set_spacing("10px 20px 10px 20px");
                p.panFile03.set_flexwrap("wrap");
                p.panFile03.set_cssclass("pal_WF_DtlBg");
                p.panFile03.set_verticalgap("4");
                p.panFile03.set_flexgrow("1");
                p.panFile03.set_visible("true");
                p.panFile03.move("0","42","100.00%","300",null,null);

                p.panFile04.set_taborder("46");
                p.panFile04.set_fittocontents("height");
                p.panFile04.set_spacing("10px 20px 10px 20px");
                p.panFile04.set_flexwrap("wrap");
                p.panFile04.set_cssclass("pal_WF_DtlBg");
                p.panFile04.set_verticalgap("4");
                p.panFile04.set_flexgrow("1");
                p.panFile04.set_visible("false");
                p.panFile04.move("0","42","100.00%","300",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div03.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div03.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div03.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div03.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.sub_tit01.set_taborder("8");
                p.sub_tit01.set_background("#ffffff");
                p.sub_tit01.set_flexcrossaxisalign("end");
                p.sub_tit01.set_visible("false");
                p.sub_tit01.move("955","18","100%","58",null,null);

                p.Panel01.set_taborder("7");
                p.Panel01.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01.set_spacing("0px 10px");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.set_flexcrossaxisalign("center");
                p.Panel01.set_flexmainaxisalign("end");
                p.Panel01.move("505","-53","50%","50",null,null);

                p.btnMinPrcsDsctn.set_taborder("9");
                p.btnMinPrcsDsctn.set_cssclass("btn_WF_ACMinus");
                p.btnMinPrcsDsctn.move("460","-55","34","34",null,null);

                p.staSubTitle01.set_taborder("6");
                p.staSubTitle01.set_text("처리내역");
                p.staSubTitle01.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle01.move("0","-53","50%","50",null,null);

                p.Div01.set_taborder("0");
                p.Div01.set_text("Div00");
                p.Div01.set_cssclass("div_WF_Bg");
                p.Div01.set_fittocontents("height");
                p.Div01.set_visible("false");
                p.Div01.move("0","30","100%","266",null,null);

                p.sub_tit02.set_taborder("12");
                p.sub_tit02.set_background("#ffffff");
                p.sub_tit02.set_flexcrossaxisalign("end");
                p.sub_tit02.move("-40","367","100%","57",null,null);

                p.Panel02.set_taborder("11");
                p.Panel02.set_cssclass("pal_WF_TitBtnBg");
                p.Panel02.set_spacing("0px 10px");
                p.Panel02.set_horizontalgap("10");
                p.Panel02.set_flexcrossaxisalign("center");
                p.Panel02.set_flexmainaxisalign("end");
                p.Panel02.move("505","-53","50%","50",null,null);

                p.staSubTitle02.set_taborder("10");
                p.staSubTitle02.set_text("신청정보");
                p.staSubTitle02.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02.move("0","-53","50%","50",null,null);

                p.Div02.set_taborder("1");
                p.Div02.set_text("Div00");
                p.Div02.set_cssclass("div_WF_Bg");
                p.Div02.set_fittocontents("height");
                p.Div02.set_maxheight("");
                p.Div02.move("0","30","100%","886.5",null,null);

                p.sub_tit06.set_taborder("16");
                p.sub_tit06.set_background("#ffffff");
                p.sub_tit06.set_flexcrossaxisalign("end");
                p.sub_tit06.move("-57","1242","100%","56",null,null);

                p.Panel06.set_taborder("15");
                p.Panel06.set_cssclass("pal_WF_TitBtnBg");
                p.Panel06.set_spacing("0px 10px");
                p.Panel06.set_horizontalgap("10");
                p.Panel06.set_flexcrossaxisalign("center");
                p.Panel06.set_flexmainaxisalign("end");
                p.Panel06.move("505","-53","50%","50",null,null);

                p.staSubTitle06.set_taborder("14");
                p.staSubTitle06.set_text("기본정보");
                p.staSubTitle06.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle06.move("0","-53","50%","50",null,null);

                p.divBscInfo.set_taborder("2");
                p.divBscInfo.set_text("Div00");
                p.divBscInfo.set_cssclass("div_WF_Bg");
                p.divBscInfo.set_fittocontents("height");
                p.divBscInfo.move("0","0","100.00%","675",null,null);

                p.staSubTitle04.set_taborder("18");
                p.staSubTitle04.set_text("알림설정 발송 여부");
                p.staSubTitle04.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle04.move("0","-53","50%","50",null,null);

                p.Panel04.set_taborder("19");
                p.Panel04.set_cssclass("pal_WF_TitBtnBg");
                p.Panel04.set_spacing("0px 10px");
                p.Panel04.set_horizontalgap("10");
                p.Panel04.set_flexcrossaxisalign("center");
                p.Panel04.set_flexmainaxisalign("end");
                p.Panel04.move("505","-53","50%","50",null,null);

                p.sub_tit04.set_taborder("20");
                p.sub_tit04.set_background("#ffffff");
                p.sub_tit04.set_flexcrossaxisalign("end");
                p.sub_tit04.set_visible("true");
                p.sub_tit04.move("-57","1242","100%","56",null,null);

                p.Div04.set_taborder("3");
                p.Div04.set_text("Div00");
                p.Div04.set_cssclass("div_WF_Bg");
                p.Div04.set_fittocontents("height");
                p.Div04.set_visible("true");
                p.Div04.move("0","30","100%","192",null,null);

                p.staSubTitle05.set_taborder("22");
                p.staSubTitle05.set_text("개인정보 수집·이용 동의");
                p.staSubTitle05.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle05.move("0","-53","50%","50",null,null);

                p.sub_tit05.set_taborder("24");
                p.sub_tit05.set_background("#ffffff");
                p.sub_tit05.set_flexcrossaxisalign("end");
                p.sub_tit05.move("-68","2230","100%","55",null,null);

                p.Div05.set_taborder("4");
                p.Div05.set_text("Div00");
                p.Div05.set_cssclass("div_WF_Bg");
                p.Div05.set_fittocontents("height");
                p.Div05.move("0","30","100%","306",null,null);

                p.Panel05.set_taborder("23");
                p.Panel05.set_cssclass("pal_WF_TitBtnBg");
                p.Panel05.set_spacing("0px 10px");
                p.Panel05.set_horizontalgap("10");
                p.Panel05.set_flexcrossaxisalign("center");
                p.Panel05.set_flexmainaxisalign("end");
                p.Panel05.move("505","-53","50%","50",null,null);

                p.sub_tit03.set_taborder("29");
                p.sub_tit03.set_background("#ffffff");
                p.sub_tit03.set_flexcrossaxisalign("end");
                p.sub_tit03.set_visible("false");
                p.sub_tit03.move("-68","2230","100%","55",null,null);

                p.Div03.set_taborder("5");
                p.Div03.set_text("Div00");
                p.Div03.set_cssclass("div_WF_Bg");
                p.Div03.set_fittocontents("height");
                p.Div03.set_visible("false");
                p.Div03.move("0","570.392","100%","1296",null,null);

                p.btnMinAplyInfo.set_taborder("13");
                p.btnMinAplyInfo.set_cssclass("btn_WF_ACMinus");
                p.btnMinAplyInfo.move("460","-55","34","34",null,null);

                p.btnMinBscInfo.set_taborder("17");
                p.btnMinBscInfo.set_cssclass("btn_WF_ACMinus");
                p.btnMinBscInfo.move("460","-55","34","34",null,null);

                p.btnMinAlrmYn.set_taborder("21");
                p.btnMinAlrmYn.set_cssclass("btn_WF_ACMinus");
                p.btnMinAlrmYn.move("460","-55","34","34",null,null);

                p.btnMinPrvcClctAgre.set_taborder("25");
                p.btnMinPrvcClctAgre.set_cssclass("btn_WF_ACMinus");
                p.btnMinPrvcClctAgre.move("460","-55","34","34",null,null);

                p.staSubTitle03.set_taborder("26");
                p.staSubTitle03.set_text("증빙 자료");
                p.staSubTitle03.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle03.move("0","-53","50%","50",null,null);

                p.btnMinAtfl.set_taborder("27");
                p.btnMinAtfl.set_cssclass("btn_WF_ACMinus");
                p.btnMinAtfl.move("460","-55","34","34",null,null);

                p.Panel03.set_taborder("28");
                p.Panel03.set_cssclass("pal_WF_TitBtnBg");
                p.Panel03.set_spacing("0px 10px");
                p.Panel03.set_horizontalgap("10");
                p.Panel03.set_flexcrossaxisalign("center");
                p.Panel03.set_flexmainaxisalign("end");
                p.Panel03.move("505","-53","50%","50",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            this.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form
            obj = new Layout("mobile","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Div01.set_flexgrow("1");

                p.divBscInfo.set_flexgrow("1");
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divPopBtn.form
            obj = new Layout("default","",0,0,this.divPopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00_00.set_taborder("1");
                p.Button00_00.set_text("신청");
                p.Button00_00.set_cssclass("btn_WF_Yes");
                p.Button00_00.move("457.00","30","100","40",null,null);

                p.Button00_01.set_taborder("1");
                p.Button00_01.set_cssclass("btn_WF_No");
                p.Button00_01.set_text("신청취소");
                p.Button00_01.set_visible("false");
                p.Button00_01.move("457.00","30","100","40",null,null);

                p.Button00_02.set_taborder("2");
                p.Button00_02.set_text("재신청");
                p.Button00_02.set_cssclass("btn_WF_Yes");
                p.Button00_02.set_visible("false");
                p.Button00_02.move("457.00","30","100","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("20");
            this.divPopBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divPopBtn.form
            obj = new Layout("mobile","",0,0,this.divPopBtn.form,
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
            this.divPopBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",800,4500,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("회원가입");

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.move("20","10",null,null,"20","80");

                p.divPopBtn.set_taborder("1");
                p.divPopBtn.set_text("Div00");
                p.divPopBtn.set_cssclass("div_WF_PopBtn");
                p.divPopBtn.move("0",null,null,"60","0","0");

                p.edit_coId.set_taborder("2");
                p.edit_coId.move("-1090.00","20","140","40",null,null);

                p.RaonkUpload.set_taborder("3");
                p.RaonkUpload.set_DevelopLangage("JAVA");
                p.RaonkUpload.set_ExtensionAllowOrLimit("1");
                p.RaonkUpload.set_HandlerUrl("/common/uploadDownload.do");
                p.RaonkUpload.set_RunTimes("html5");
                p.RaonkUpload.set_ButtonBarView("0");
                p.RaonkUpload.set_visible("false");
                p.RaonkUpload.set_AllowDuplicationFile("1");
                p.RaonkUpload.set_text("");
                p.RaonkUpload.set_DisableDeleteConfirm("1");
                p.RaonkUpload.move("-1110","141","127.50%","200",null,null);

                p.edit_prvcAgreDocId.set_taborder("4");
                p.edit_prvcAgreDocId.move("-1090.00","73","140","40",null,null);

                p.edit_brno.set_taborder("5");
                p.edit_brno.move("-940.00","20","140","40",null,null);

                p.edit_coId01.set_taborder("6");
                p.edit_coId01.move("-790.00","20","140","40",null,null);

                p.edit_coAddr.set_taborder("7");
                p.edit_coAddr.move("-640.00","20","140","40",null,null);

                p.edit_coDtlAddr.set_taborder("8");
                p.edit_coDtlAddr.move("-490.00","20","140","40",null,null);

                p.edit_coSrc.set_taborder("9");
                p.edit_coSrc.move("-940","73","140","40",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",480,5000,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divForm.move("20","10",null,null,"20","80");
            	}
            );
            obj.set_mobileorientation("Portrait");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.Div01.form.edtPrcrNm","value","dsGet","prcrId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.Div01.form.edtPrcsSttsCd","value","dsGet","prcsSttsNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.Div01.form.edtPrcsDsctn","value","dsGet","prcsDsctn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.Div02.form.rdo02","value","dsGet","idAplyType");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.Div02.form.rdo01","value","dsGet","idAplySe");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.divBscInfo.form.edtNm","value","dsGet","userNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divForm.form.divBscInfo.form.edtId","value","dsGet","userId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divForm.form.divBscInfo.form.edtEml","value","dsGet","eml");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divForm.form.divBscInfo.form.edtTelno","value","dsGet","telno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divForm.form.divBscInfo.form.divEdtPop00.form.edtCoNm","value","dsGet","coNmHwrt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divForm.form.Div04.form.rdoYn1","value","dsGet","emlRcptnYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divForm.form.Div04.form.rdoYn2","value","dsGet","smsRcptnPrgrsYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divForm.form.Div04.form.rdoYn4","value","dsGet","smsRcptnAcntYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divForm.form.Div05.form.edt00_00_00_00_00","value","dsGet","esntlAgreCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divForm.form.Div03.form.rdo03","value","dsGet","rltnCoActlOgdpYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edit_coId","value","dsGet","coId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edtId00","value","dsGet","userId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divForm.form.divBscInfo.form.edtPswd01","value","dsGet","userPswd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edit_prvcAgreDocId","value","dsGet","prvcAgreDocId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divForm.form.Div04.form.rdoYn3","value","dsGet","smsRcptnNewYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divForm.form.Div05.form.rdoYn5","value","dsGet","esntlAgreYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divForm.form.Div05.form.rdoYn6","value","dsGet","chcAgreYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divForm.form.divBscInfo.form.edtMblTelno","value","dsGet","mblTelno");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("COM000P032.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	COM000P032.xfdl
        *  @Creator 	ELUON INS
        *  @CreateDate 	2024/08/08
        *  @Desction
        *  @Author
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/08/08			조규완					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        this.param;
        this.pswdChk = false;
        this.coChk = false;
        this.prcsSeCd = "CTL20001";
        this.validateColumn = [];
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수

        	// 전달받은 파라메터 팝업창과 페이지오픈으로 파라메터 불러오는 방식이 달라짐
        	if(this.opener)
        	{
        		this.param = {
        			"userId" : this.getOwnerFrame().userId,
        			"userNm" : this.getOwnerFrame().userNm,
        			"mblTelno" : this.getOwnerFrame().mblTelno,
        			"userBrdt" : this.getOwnerFrame().userBrdt
        		}
        	} else
        	{
        		this.param = this.getOwnerFrame().form.fvObjArgs;
        	}

        	this.fnInit();

        	this.fnSetValidation();
        };

        // 페이지에서 라온K업로드 솔루션의 생성 이벤트
        this.RaonkUpload_RAONKUPLOAD_CreationComplete = function(obj,  paramObj)
        {
        	// 업로드 솔루션이 초기 생성시 업로드 할 경로를 지정해야 한다.
        	// /CMM/YYYY/MM/DD/  <<== CMM은 업무별 폴더 지정이고 기본적으로 /년도/월/일 의 폴더 구조를 갖는다.
        	this.RaonkUpload.SetConfig('FolderNameRule', '/COM/YYYY/MM/DD/');
        };

        // 파일 업로드 시 에러 발생 이벤트
        this.RaonkUpload_RAONKUPLOAD_OnError = function(obj, paramObj)
        {
        	console.log(paramObj);
        };

        // 파일 추가 시 발생 이벤트
        // 파일 추가 시 타입을 정해야 한다.(사업자등록증, 증빙자료, 첨부파일, 등등)
        this.RaonkUpload_RAONKUPLOAD_AfterAddAllFile = function(obj, paramObj)
        {
        	// 파일 카테고리 초기화
        	this.gvUploadCategory = "";
        };

        this.RaonkUpload_RAONKUPLOAD_BeforeAddFile = function(obj, paramObj)
        {
        	if(this.gvUploadCategory == 'bizFile')
        	{
        		if(this.dsFile1.rowcount >= 1)
        		{
        			this.gfnAlertMsg("MSG_001", "msgCallback");
        			//this.gfnAlertMsg("beforeAddFile", "파일 1개만 업로드 가능 합니다.", "msgCallback");
        			return false;
        		}
        	}

        	return true;
        };

        this.RaonkUpload_RAONKUPLOAD_AfterAddFile = function(obj, paramObj)
        {
        	// 파일에 카테고리 셋팅
        	var sRow = this.dsFile.findRow("colId", this.gvUploadCategory);
        	var atflMngNo = this.dsFile.getColumn(sRow, "atflMngNo");

        	var cvObj = {
        		"strCustomValue" : this.gvUploadCategory,
        		"atflMngNo" : atflMngNo
        	};
        	this.RaonkUpload.SetFileCustomValue(-1, JSON.stringify(cvObj));

        	// 파일 카테고리별 구분으로 파일 리스트에 추가
        	if(this.gvUploadCategory == 'bulicFile') {
        		var nIdx = this.dsFile1.addRow();
        		this.dsFile1.setColumn(nIdx, "fullName", paramObj.userdata.strName + ' (' + paramObj.userdata.nSize + ')');
        		this.dsFile1.setColumn(nIdx, "orgnlFileNm", paramObj.userdata.strName);
        		this.dsFile1.setColumn(nIdx, "fileSz", paramObj.userdata.nSize);
        		this.dsFile1.setColumn(nIdx, "atflMngSno", paramObj.userdata.nIndex);
        		this.dsFile1.setColumn(nIdx, "colId", "EVDOC_KND_01");
        	} else if(this.gvUploadCategory == 'hdofPrdocFile') {
        		var nIdx = this.dsFile2.addRow();
        		this.dsFile2.setColumn(nIdx, "fullName", paramObj.userdata.strName + ' (' + paramObj.userdata.nSize + ')');
        		this.dsFile2.setColumn(nIdx, "orgnlFileNm", paramObj.userdata.strName);
        		this.dsFile2.setColumn(nIdx, "fileSz", paramObj.userdata.nSize);
        		this.dsFile2.setColumn(nIdx, "atflMngSno", paramObj.userdata.nIndex);
        		this.dsFile2.setColumn(nIdx, "colId", "EVDOC_KND_03");
        	} else if(this.gvUploadCategory == 'arptMvnFile') {
        		var nIdx = this.dsFile3.addRow();
        		this.dsFile3.setColumn(nIdx, "fullName", paramObj.userdata.strName + ' (' + paramObj.userdata.nSize + ')');
        		this.dsFile3.setColumn(nIdx, "orgnlFileNm", paramObj.userdata.strName);
        		this.dsFile3.setColumn(nIdx, "fileSz", paramObj.userdata.nSize);
        		this.dsFile3.setColumn(nIdx, "atflMngSno", paramObj.userdata.nIndex);
        		this.dsFile3.setColumn(nIdx, "colId", "EVDOC_KND_13");
        	} else if(this.gvUploadCategory == 'mvzFile') {
        		var nIdx = this.dsFile4.addRow();
        		this.dsFile4.setColumn(nIdx, "fullName", paramObj.userdata.strName + ' (' + paramObj.userdata.nSize + ')');
        		this.dsFile4.setColumn(nIdx, "orgnlFileNm", paramObj.userdata.strName);
        		this.dsFile4.setColumn(nIdx, "fileSz", paramObj.userdata.nSize);
        		this.dsFile4.setColumn(nIdx, "atflMngSno", paramObj.userdata.nIndex);
        		this.dsFile4.setColumn(nIdx, "colId", "EVDOC_KND_14");
        	}
        };

        // 파일 업로드 완료 이벤트
        this.RaonkUpload_RAONKUPLOAD_UploadComplete = function(obj, paramObj)
        {
        	var allListArray = this.RaonkUpload.GetListInfo("json");
        	// 파일 업로드 후 첨부파일관리번호를 얻기 위한 함수
        	this.gfnUploadComplete("uploadComplete", allListArray, "dsFile", "fnCallback");
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        this.cfnClose = function()
        {
        	console.log('cfnClose');
        	//부모창 검색 조회
         	var sWinId = this.objApp.gdsOpenMenu.lookupAs(this.FRAME_MENUCOLUMNS.menuId, this.getOwnerFrame().form.fvMenuId.substring(0, 8), this.FRAME_MENUCOLUMNS.winId);
         	var objForm = this.objApp.gvFrsWork.all[sWinId];
        	objForm.form.divWork.form.cfnSearch(1);
        };
        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        // 존재 확인
        this.idntyUserTransaction = function()
        {
        	var strSvcId    = "idnty";
        	var strSvcUrl   = "member/mbrIdntyInq.do";
        	var inData      = "";
        	var outData     = "";
        	var strArg      = "userId=" + this.param.userId + " userNm=" + this.param.userNm + " mblTelno=" + this.param.mblTelno;
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        }

        // 데이터 조회
        this.selectTransaction = function()
        {
        	var strSvcId    = "select";
        	var strSvcUrl   = "member/mbrJoinAplyInfoInq.do";
        	var inData      = "";
        	var outData     = "dsGet=dsGet dsFile1=dsFile1 dsFile2=dsFile2 dsFile3=dsFile3 dsFile4=dsFile4";
        	var strArg      = "userId=" + this.param.userId + " userNm=" + this.param.userNm + " mblTelno=" + this.param.mblTelno;
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 데이터 저장
        this.saveTransaction = function()
        {
        	var strSvcId    = "save";
        	var strSvcUrl   = "member/mbrJoinAplyInfoStrg.do";
        	var inData      = "dsGet=dsGet dsFile=dsFile";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= false;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
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
        		case "idnty":
        			var gvRetMsg = this.objApp.getVariable("gvRetMsg");
        			if (gvRetMsg == 1) {
        // 				this.gfnAlertMsg("msg", "MSG_011", ["이미 아이디가 존재하는 회원입니다."]);
        // 				this.close();
        			} else if (gvRetMsg == 0) {
        				this.selectTransaction();
        			}
        			break;
        		case "select":
        			// 데이터 조회 후 파일리스트에 셋팅
        			this.gfnDownloadSetting(this.RaonkUpload, this.dsFile1);
        			this.gfnDownloadSetting(this.RaonkUpload, this.dsFile2);
        			this.gfnDownloadSetting(this.RaonkUpload, this.dsFile3);
        			this.gfnDownloadSetting(this.RaonkUpload, this.dsFile4);
        			this.dsGet.setColumn(0, "userPswd", "");
        			this.fnVisibleSetting();
        			break;
        		case "save":
        			var gvRetMsg = this.objApp.getVariable("gvRetMsg");
        			var idAplySe = this.dsGet.getColumn(0, "idAplySe");
        			if (gvRetMsg == "MSG_001" && (idAplySe == "TIDCATCD009" || idAplySe == "TIDCATCD011")) {
        				this.gfnAlertMsg("save", "MSG_011", ["회원가입이 완료되었습니다."], "msgCallback");
        			} else if (gvRetMsg == "MSG_001") {
        				this.gfnAlertMsg("save", "MSG_011", ["회원가입 신청이 완료되었습니다."], "msgCallback");
        			} else {
        				this.gfnAlertMsg("save", "MSG_011", ["회원가입 신청을 실패하였습니다."], "msgCallback");
        			}
        			break;
        		case "uploadComplete":
        			// 파일 업로드가 완료 된 후 첨부파일 과 같이 데이터 저장
        			this.fnSaveSetting();
        			break;
        		case "combo":
        			this.divForm.form.Div02.form.rdo01.set_index(0);
        			this.divForm.form.Div02.form.rdo02.set_index(0);
        			this.divForm.form.Div03.form.rdo03.set_index(0);
        			break;
        	}
        };

        this.msgCallback = function(sPopupId, sRtn)
        {
        	var oRtn = JSON.parse(sRtn);

        	if(sPopupId == "save_confirm") {
        		if(oRtn.result == "Y") {
        			var obj = {
        				"atchFileId" : "",			// 기존 첨부파일 있을 경우 입력
        				"bsnsSeCd" : "COM",			// 업무구분코드
        				"prgrmId" : "COM000P032" 	// 프로그램ID (화면 ID)
        			}
        			var str = JSON.stringify(obj);
        			this.RaonkUpload.AddFormData('params', str);
        			this.RaonkUpload.Transfer();
        		}
        	} else if(sPopupId == "save")  {
        		this.close();
        	} else if(sPopupId == "file_all_del1") {
        		this.gfnDeleteAllFile(this.RaonkUpload, this.dsFile1);
        	} else if(sPopupId == "file_all_del2") {
        		this.gfnDeleteAllFile(this.RaonkUpload, this.dsFile2);
        	} else if(sPopupId == "file_all_del3") {
        		this.gfnDeleteAllFile(this.RaonkUpload, this.dsFile3);
        	} else if(sPopupId == "file_all_del4") {
        		this.gfnDeleteAllFile(this.RaonkUpload, this.dsFile4);
        	} else if(sPopupId == "file_del1") {
        		this.gfnDeleteFile(this.RaonkUpload, this.dsFile1, oRtn.paramArg);
        	} else if(sPopupId == "file_del2") {
        		this.gfnDeleteFile(this.RaonkUpload, this.dsFile2, oRtn.paramArg);
        	} else if(sPopupId == "file_del3") {
        		this.gfnDeleteFile(this.RaonkUpload, this.dsFile3, oRtn.paramArg);
        	} else if(sPopupId == "file_del4") {
        		this.gfnDeleteFile(this.RaonkUpload, this.dsFile4, oRtn.paramArg);
        	}
        };

        this.fnPopupCallback = function(svcId, ret)
        {
        	switch(svcId) {
        		case "userIdDpcnSrch":
        			if (!this.gfnIsNull(ret)) {
        				var param = JSON.parse(ret);
        				this.dsGet.setColumn(0, "userId", param.userId);
        			}
        			break;

        		case "coSch":
        			if (ret != "") {
        				var param = JSON.parse(ret);
        				this.dsGet.setColumn(0, "coId", param.coId);
        				this.dsGet.setColumn(0, "coNm", param.coNm);
        				this.dsGet.setColumn(0, "coNmHwrt", param.coNm);
        				this.edit_brno.set_value(param.brno);
        				this.edit_coAddr.set_value(param.coAddr);
        				this.edit_coDtlAddr.set_value(param.coDtlAddr);
        				this.edit_coSrc.set_value(param.coSrc);
        				this.fnSetCoInfo();
        				this.coChk = true;
        			}
        			break;
        	}
        }
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	this.gfnCmmCode("combo", "dsCombo", "PRCS_STTS", "A");
        	this.idntyUserTransaction();
        	this.divForm.form.resetScroll();
        }

        this.fnVisibleSetting = function()
        {
        	var idAplySe = this.dsGet.getColumn(0, "idAplySe");
        	var idAplyType = this.dsGet.getColumn(0, "idAplyType");
        	var prcsSttsCd = this.dsGet.getColumn(0, "prcsSttsCd");

        	// 처리 중이면 처리상태 화면 띄우기
        	if (!this.gfnIsNull(prcsSttsCd)) {
        		this.divForm.form.sub_tit01.visible = true;
        		this.divForm.form.Div01.visible = true;

        		this.divForm.form.resetScroll();
        	}
        	if (prcsSttsCd == "TIDSTATUS002") {
        		this.divPopBtn.form.Button00_00.enable = false;
        	} else if (prcsSttsCd == "TIDSTATUS003") {
        		this.divPopBtn.form.Button00_00.visible = false;
        		this.divPopBtn.form.Button00_01.visible = true;
        		this.divPopBtn.form.Button00_02.visible = true;
        	}

        	// idAplySe, idAplyType에 따라 첨부파일 화면 띄우기
        	this.fnAplySeSetting(idAplySe);
        	this.fnAplyTypeSetting(idAplyType);
        }

        // 비밀번호 검증
        this.fnValidPw = function()
        {
        	var newPswd01 = this.divForm.form.divBscInfo.form.edtPswd01.value;
        	var newPswd02 = this.divForm.form.divBscInfo.form.edtPswd02.value;

        	if(this.gfnIsNull(newPswd01) == true || this.gfnIsNull(newPswd02) == true) {
        		this.gfnAlertMsg("msg", "MSG_011", ["변경할 비밀번호를 입력해주세요!"]);
        		this.divForm.form.divBscInfo.form.edtPswd01.setFocus();
        		return false;
        	}

        	if(newPswd01 != newPswd02) {
        		this.gfnAlertMsg("msg", "MSG_011", ["변경할 비밀번호가 일치하지 않습니다."]);
        		this.divForm.form.divBscInfo.form.edtPswd02.setFocus();
        		return false;
        	}

        	// 정규식 체크
        	var pwPatten = new RegExp("[!@#$%^&*()]", "ig");
        	var pwAlpha = new RegExp("[a-zA-Z]", "ig");
        	var pwNum = new RegExp("[0-9]", "ig");
        	if(pwPatten.test(newPswd01) != true || pwAlpha.test(newPswd01) != true || pwNum.test(newPswd01) != true || newPswd01.length < 9 || newPswd01.length > 16) {
        		this.gfnAlertMsg("msg", "MSG_011", ["비밀번호 형식이 유효하지 않습니다."]);
        		this.divForm.form.divBscInfo.form.edtPswd01.setFocus();
        		return false;
        	}

        	return true;
        };

        this.fnSetValidation = function()
        {
        	this.validateColumn = [];
        	var idAplySe = this.dsGet.getColumn(0, "idAplySe");
        	var idAplyType = this.dsGet.getColumn(0, "idAplyType");

        	this.validateColumn.push({"title" : "ID 신청구분", "com": this.divForm.form.Div02.form.rdo01});
        	this.validateColumn.push({"title" : "ID 신청유형", "com": this.divForm.form.Div02.form.rdo02});
        	this.validateColumn.push({"title" : "이름", "com": this.divForm.form.divBscInfo.form.edtNm});
        	this.validateColumn.push({"title" : "휴대전화번호", "com": this.divForm.form.divBscInfo.form.edtMblTelno});
        	this.validateColumn.push({"title" : "아이디", "com": this.divForm.form.divBscInfo.form.edtId});
        	this.validateColumn.push({"title" : "이메일", "com": this.divForm.form.divBscInfo.form.edtEml});
        	this.validateColumn.push({"title" : "소속회사", "com": this.divForm.form.divBscInfo.form.divEdtPop00.form.edtCoNm});
        	this.validateColumn.push({"title" : "개인정보(필수) 사용동의여부", "com": this.divForm.form.Div05.form.rdoYn5});
        	this.validateColumn.push({"title" : "서비스 진행현황 (이메일)", "com": this.divForm.form.Div04.form.rdoYn1});
        	this.validateColumn.push({"title" : "진행현황 (SMS 또는 카카오톡)", "com": this.divForm.form.Div04.form.rdoYn2});
        	this.validateColumn.push({"title" : "뉴스 및 이벤트 (SMS 또는 카카오톡)", "com": this.divForm.form.Div04.form.rdoYn3});

        	if (idAplySe == "TIDCATCD001" && idAplyType == "TIDREQCD002") {
        		this.validateColumn.push({"title" : "계정승인요청현황 (SMS 또는 카카오톡)", "com": this.divForm.form.Div04.form.rdoYn4});
        	}
        	if (idAplySe == "TIDCATCD003") {
        		this.validateColumn.push({"title" : "이동지역 회사 실제 소속 여부", "com": this.divForm.form.Div03.form.rdo03});
        	}
        }

        this.fnFileValidation = function()
        {
        	var idAplySe = this.dsGet.getColumn(0, "idAplySe");
        	var idAplyType = this.dsGet.getColumn(0, "idAplyType");

        	var nRow1 = this.dsFile1.rowcount;
        	var nRow2 = this.dsFile2.rowcount;
        	var nRow3 = this.dsFile3.rowcount;
        	var nRow4 = this.dsFile4.rowcount;

        	if (idAplySe == "TIDCATCD001" && idAplyType == "TIDREQCD002") {
        		if (nRow1 < 1) {
        			this.gfnAlertMsg("msg", "MSG_011", ["사업자등록증을 첨부해주세요."]);
        			return false;
        		}
        		if (nRow2 < 1) {
        			this.gfnAlertMsg("msg", "MSG_011", ["재직증명서를 첨부해주세요."]);
        			return false;
        		}
        		if (nRow3 < 1) {
        			this.gfnAlertMsg("msg", "MSG_011", ["공항입주 관련 계약 서류를 첨부해주세요."]);
        			return false;
        		}
        		this.dsFile4.clearData();
        	}

        	if (idAplySe == "TIDCATCD003") {
        		if (nRow1 < 1) {
        			this.gfnAlertMsg("msg", "MSG_011", ["사업자등록증을 첨부해주세요."]);
        			return false;
        		}
        		if (nRow2 < 1) {
        			this.gfnAlertMsg("msg", "MSG_011", ["재직증명서를 첨부해주세요."]);
        			return false;
        		}
        		if (this.divForm.form.Div03.form.rdo03.value == "N" && nRow4 < 1) {
        			this.gfnAlertMsg("msg", "MSG_011", ["이동지역 관련 계약 서류를 첨부해주세요."]);
        			return false;
        		}
        		this.dsFile3.clearData();
        	}

        	if (idAplySe == "TIDCATCD006" || idAplySe == "TIDCATCD008" || idAplySe == "TIDCATCD010") {
        		if (nRow1 < 1) {
        			this.gfnAlertMsg("msg", "MSG_011", ["사업자등록증을 첨부해주세요."]);
        			return false;
        		}
        		if (nRow2 < 1) {
        			this.gfnAlertMsg("msg", "MSG_011", ["재직증명서를 첨부해주세요."]);
        			return false;
        		}
        		this.dsFile3.clearData();
        		this.dsFile4.clearData();
        	}

        	return true;
        }

        this.fnSetCoInfo = function()
        {
        	var coId_ = this.dsGet.getColumn(0, "coId");
        	var coId = "";
        	var coNm_ = this.dsGet.getColumn(0, "coNm");
        	var coNm = "";
        	var brno_ = this.edit_brno.value;
        	var brno = "";
        	var coAddr = this.edit_coAddr.value;
        	var coDtlAddr = this.edit_coDtlAddr.value;
        	var addr = "";
        	var coSrc = this.edit_coSrc.value;
        	var coText = "";

        	if (!this.gfnIsNull(coId_)) {
        		coId = coId_;
        	}
        	if (!this.gfnIsNull(coNm_)) {
        		coNm = coNm_;
        	}
        	if (!this.gfnIsNull(brno_)) {
        		brno = brno_.substr(0, 3) + "-" +  brno_.substr(3, 3) + "-" +  brno_.substr(6, 4);
        	}
        	if (!this.gfnIsNull(coAddr)) {
        		addr = addr + coAddr + " ";
        	}
        	if (!this.gfnIsNull(coDtlAddr)) {
        		addr = addr + coDtlAddr;
        	}

        	if (coSrc == "IIAC") {
        		coText = "회사ID : " + coId + "\n";
        	}
        	coText = coText + "회사명 : " + coNm + "\n" + "사업자등록번호 : " + brno;
        	if (!this.gfnIsNull(addr)) {
        		coText = coText + "\n" + "주소 : " + addr;
        	}

        	this.divForm.form.divBscInfo.form.sta03.set_text(coText);
        }

        this.fnSetFile = function()
        {
        	var userId = this.divForm.form.divBscInfo.form.edtId.value;

        	if (this.dsFile1.rowcount != 0) {
        		this.dsFile1.setColumn(0, "frstRegId", userId);
        	}
        	if (this.dsFile2.rowcount != 0) {
        		this.dsFile2.setColumn(0, "frstRegId", userId);
        	}
        	if (this.dsFile3.rowcount != 0) {
        		this.dsFile3.setColumn(0, "frstRegId", userId);
        	}
        	if (this.dsFile4.rowcount != 0) {
        		this.dsFile4.setColumn(0, "frstRegId", userId);
        	}
        }

        this.fnSaveSetting = function()
        {
        	for (var i = 0; i < this.dsFile.rowcount; i++) {
        		var colId = this.dsFile.getColumn(i, "colId");
        		if (colId == "bulicFile") {
        			this.dsFile.setColumn(i, "colId", this.dsFile1.getColumn(0, "colId"));
        		} else if (colId == "hdofPrdocFile") {
        			this.dsFile.setColumn(i, "colId", this.dsFile2.getColumn(0, "colId"));
        		} else if (colId == "arptMvnFile") {
        			this.dsFile.setColumn(i, "colId", this.dsFile3.getColumn(0, "colId"));
        		} else if (colId == "mvzFile") {
        			this.dsFile.setColumn(i, "colId", this.dsFile4.getColumn(0, "colId"));
        		}
        	}

        	this.saveTransaction();
        }

        // idAplySe에 따른 visible setting
        this.fnAplySeSetting = function(value)
        {
        	this.divForm.form.sub_tit03.visible = false;
        	this.divForm.form.Div03.visible = false;

        	if (value == "TIDCATCD001") {
        		this.divForm.form.Div02.form.pan01.visible = true;
        		this.divForm.form.Div02.form.pan02.visible = true;
        	} else {
        		this.divForm.form.Div02.form.pan01.visible = false;
        		this.divForm.form.Div02.form.pan02.visible = false;
        		this.divForm.form.Div03.form.panFile03.visible = false;
        		this.divForm.form.Div02.form.rdo02.index = 0;
        		this.divForm.form.Div04.form.pan01_02.visible = false;
        	}

        	if (value == "TIDCATCD003") {
        		var ogdpYn = this.divForm.form.Div03.form.rdo03.value;
        		if (ogdpYn == "N") {
        			this.divForm.form.Div03.form.panFile04.visible = true;
        		}
        		this.divForm.form.Div02.form.pan03.visible = true;
        		this.divForm.form.sub_tit03.visible = true;
        		this.divForm.form.Div03.visible = true;
        		this.divForm.form.Div03.form.pan00_00.visible = true;
        		this.divForm.form.divBscInfo.form.btnGrdRegi00.visible = true;
        	} else {
        		this.divForm.form.Div02.form.pan03.visible = false;
        		this.divForm.form.Div03.form.pan00_00.visible = false;
        		this.divForm.form.divBscInfo.form.btnGrdRegi00.visible = false;
        		this.divForm.form.Div03.form.panFile04.visible = false;
        	}

        	if (value == "TIDCATCD006" || value == "TIDCATCD008" || value == "TIDCATCD010") {
        		this.divForm.form.sub_tit03.visible = true;
        		this.divForm.form.Div03.visible = true;
        	}

        	this.divForm.form.resetScroll();
        }

        // idAplyType에 따른 visible setting
        this.fnAplyTypeSetting = function(value)
        {
        	if (value == "TIDREQCD001") {
        		this.divForm.form.sub_tit03.visible = false;
        		this.divForm.form.Div03.visible = false;
        		this.divForm.form.Div03.form.panFile03.visible = false;
        		this.divForm.form.Div04.form.pan01_02.visible = false;
        	} else {
        		this.divForm.form.sub_tit03.visible = true;
        		this.divForm.form.Div03.visible = true;
        		this.divForm.form.Div03.form.panFile03.visible = true;
        		this.divForm.form.Div04.form.pan01_02.visible = true;
        	}

        	this.divForm.form.resetScroll();
        }
        /*******************************************************************************************************************************
         * 각 RAONK 별 EVENT 영역
        *******************************************************************************************************************************/
        // 파일 추가
        this.divForm_Div03_btn_file_1_onclick = function(obj,e)
        {
        	// 데이터의 첨부파일 관리번호 입력 컬럼명
        	this.gvUploadCategory = "bulicFile";		// 컬럼ID
        	this.RaonkUpload.OpenFileDialog();
        };

        this.divForm_Div03_btn_file_2_onclick = function(obj,e)
        {
        	this.gvUploadCategory = "hdofPrdocFile";
        	this.RaonkUpload.OpenFileDialog();
        };

        this.divForm_Div03_btn_file_3_onclick = function(obj,e)
        {
        	this.gvUploadCategory = "arptMvnFile";
        	this.RaonkUpload.OpenFileDialog();
        };

        this.divForm_Div03_btn_file_4_onclick = function(obj,e)
        {
        	this.gvUploadCategory = "mvzFile";
        	this.RaonkUpload.OpenFileDialog();
        };

        // 파일 그리드 클릭 이벤트
        this.divForm_Div03_Grid01_oncellclick = function(obj,e)
        {

        	if(e.col == 1) 	// 삭제 버튼 클릭
        	{
        		var param = {
        			"row" : e.row,
        			"col" : e.col
        		};
        		this.gfnConfirmMsg("file_del1", "MSG_005", "msgCallback", ["확인", "취소"], ["Y", "N"], param);
        	} else if(e.col == 0) // 파일명 클릭
        	{
        		this.gfnSelectFile(this.RaonkUpload, this.dsFile1, e);
        	}
        };

        // 파일 그리드 더블클릭 이벤트
        this.divForm_Div03_Grid01_oncelldblclick = function(obj,e)
        {
        	if(e.col == 0) 	// 파일명을 더블클릭 시 다운로드
        	{
        		this.gfnDownloadFile(this.RaonkUpload, this.dsFile1, e);
        	}
        };

        this.divForm_Div03_Grid02_oncellclick = function(obj,e)
        {
        	if(e.col == 1) 	// 삭제 버튼 클릭
        	{
        		var param = {
        			"row" : e.row,
        			"col" : e.col
        		};

        		this.gfnConfirmMsg("file_del2", "MSG_005", "msgCallback", ["확인", "취소"], ["Y", "N"], param);
        	} else if(e.col == 0) // 파일명 클릭
        	{
        		this.gfnSelectFile(this.RaonkUpload, this.dsFile2, e);
        	}
        };

        this.divForm_Div03_Grid02_oncelldblclick = function(obj,e)
        {
        	if(e.col == 0) 	// 파일명을 더블클릭 시 다운로드
        	{
        		this.gfnDownloadFile(this.RaonkUpload, this.dsFile2, e);
        	}
        };

        this.divForm_Div03_Grid03_oncellclick = function(obj,e)
        {
        	if(e.col == 1) 	// 삭제 버튼 클릭
        	{
        		var param = {
        			"row" : e.row,
        			"col" : e.col
        		};

        		this.gfnConfirmMsg("file_del3", "MSG_005", "msgCallback", ["확인", "취소"], ["Y", "N"], param);
        	} else if(e.col == 0) // 파일명 클릭
        	{
        		this.gfnSelectFile(this.RaonkUpload, this.dsFile3, e);
        	}
        };

        this.divForm_Div03_Grid03_oncelldblclick = function(obj,e)
        {
        	if(e.col == 0) 	// 파일명을 더블클릭 시 다운로드
        	{
        		this.gfnDownloadFile(this.RaonkUpload, this.dsFile3, e);
        	}
        };

        this.divForm_Div03_Grid04_oncellclick = function(obj,e)
        {
        	if(e.col == 1) 	// 삭제 버튼 클릭
        	{
        		var param = {
        			"row" : e.row,
        			"col" : e.col
        		};

        		this.gfnConfirmMsg("file_del4", "MSG_005", "msgCallback", ["확인", "취소"], ["Y", "N"], param);
        	} else if(e.col == 0) // 파일명 클릭
        	{
        		this.gfnSelectFile(this.RaonkUpload, this.dsFile4, e);
        	}
        };

        this.divForm_Div03_Grid04_oncelldblclick = function(obj,e)
        {
        	if(e.col == 0) 	// 파일명을 더블클릭 시 다운로드
        	{
        		this.gfnDownloadFile(this.RaonkUpload, this.dsFile4, e);
        	}
        };

        this.divForm_Div03_btn_del_file_1_onclick = function(obj,e)
        {
        	this.gfnConfirmMsg("file_all_del1", "MSG_002", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        };

        this.divForm_Div03_btn_del_file_2_onclick = function(obj,e)
        {
        	this.gfnConfirmMsg("file_all_del2", "MSG_002", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        };

        this.divForm_Div03_btn_del_file_3_onclick = function(obj,e)
        {
        	this.gfnConfirmMsg("file_all_del3", "MSG_002", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        };

        this.divForm_Div03_btn_del_file_4_onclick = function(obj,e)
        {
        	this.gfnConfirmMsg("file_all_del4", "MSG_002", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        // ID 입력 edit 클릭 이벤트
        this.divForm_divBscInfo_edtId_oneditclick = function(obj,e)
        {
        	var sTitle = "아이디 중복 체크";
        	var objArg   = {};
        	if (this.objApp.screenid == "Desktop_screen") {
        		var objOption = {
        			popuptype: "modal"	//modal,modaless
        			, width: 600
        			, height: 320			//width,height 지정하지 않음 popup form size적용
        			, autosize: false
        			, title: sTitle
        			, resize: false
        			, titlebar: true
        		};
        	} else {
        		var objOption = {
        			popuptype: "modal"	//modal,modaless
        			, width: 480
        			, height: 320			//width,height 지정하지 않음 popup form size적용
        			, autosize: false
        			, title: sTitle
        			, resize: false
        			, titlebar: true
        		};
        	}
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup("userIdDpcnSrch", "work::COM/member/COM000P033.xfdl", objArg, sPopupCallBack, objOption);
        };

        // ID신청구분 버튼 변경시
        this.divForm_Div02_rdo01_onitemchanged = function(obj,e)
        {
        	this.fnAplySeSetting(obj.value);
        };

        // ID신청유형 버튼 변경시
        this.divForm_Div02_rdo02_onitemchanged = function(obj,e)
        {
        	this.fnAplyTypeSetting(obj.value);
        };

        // 이동지역회사 실제 소속여부 버튼 변경시
        this.divForm_Div03_rdo03_onitemchanged = function(obj,e)
        {
        	if (obj.value == "N") {
        		this.divForm.form.Div03.form.panFile04.visible = true;
        	} else {
        		this.divForm.form.Div03.form.panFile04.visible = false;
        	}

        	this.divForm.form.resetScroll();
        };

        // 회사 선택 버튼
        this.divForm_divBscInfo_divEdtPop00_btnPop_onclick = function(obj,e)
        {
        	var sTitle = "회사 선택 팝업";
        	var objArg   = {
        		"userNm" : this.dsGet.userNm
        	};

        	var objOption = {
        		popuptype: "modal"	//modal,modaless
         		, width: 1000
         		, height: 460			//width,height 지정하지 않음 popup form size적용
        		, autosize: true
        		, title: sTitle
        		, resize: true
        		, titlebar: true
        	};
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup("coSch", "work::COM/crtr/COM100P01.xfdl", objArg, sPopupCallBack, objOption);
        };

        // 회사 등록 버튼
        this.divForm_divBscInfo_btnGrdRegi00_onclick = function(obj,e)
        {
        	var userId = this.dsGet.getColumn(0, "userId");
        	var userNm = this.dsGet.getColumn(0, "userNm");

        	if (this.gfnIsNull(userId)) {
        		this.gfnAlertMsg("msg", "MSG_011", ["아이디를 입력해주세요."]);
        	} else if (this.gfnIsNull(userNm)) {
        		this.gfnAlertMsg("msg", "MSG_011", ["성명을 입력해주세요."]);
        	} else {
        		var sTitle = "회사 등록 팝업";
        		var objArg   = {
        			"userId" : userId,
        			"userNm" : userNm,
        			"type" : "mvn"
        		};

        		var objOption = {
        			popuptype: "modal"	//modal,modaless
        			, width: 1000
        			, height: 800			//width,height 지정하지 않음 popup form size적용
        			, autosize: false
        			, title: sTitle
        			, resize: true
        			, titlebar: true
        		};
        		var sPopupCallBack = "fnPopupCallback";

        		this.gfnOpenPopup("coRegi", "work::COM/crtr/COM023P01.xfdl", objArg, sPopupCallBack, objOption);
        	}
        };

        // 신청버튼
        this.divPopBtn_Button00_00_onclick = function(obj,e)
        {
        	this.fnSetValidation();
        	this.dsGet.setColumn(0, "userBrdt", this.param.userBrdt);

        	if(this.gfnDsIsValidated(this.validateColumn) && this.fnValidPw() && this.fnFileValidation()) {
        		this.dsGet.addColumn("prcsSeCd", "string", "256");
        		if (this.divForm.form.Div02.form.rdo01.value == "TIDCATCD009" || this.divForm.form.Div02.form.rdo01.value == "TIDCATCD011") {
        			this.dsGet.setColumn(0, "prcsSeCd", "CTL20004");
        			this.dsGet.setColumn(0, "prcsSttsCd", "TIDSTATUS001");
        		} else {
        			this.dsGet.setColumn(0, "prcsSeCd", "CTL20001");
        			this.dsGet.setColumn(0, "prcsSttsCd", "");
        		}
        		this.gfnConfirmMsg("save_confirm", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"], null);
        	}
        };

        // 신청취소 버튼
        this.divPopBtn_Button00_01_onclick = function(obj,e)
        {
        	var jobCd = this.dsGet.getColumn(0, "jobCd");
        	if (!this.gfnIsNull(jobCd) && jobCd == "TAS20002") {
        		this.prcsSeCd = "CTL20003";
        		this.dsGet.addColumn("prcsSeCd", "string", "256");
        		this.dsGet.setColumn(0, "prcsSeCd", this.prcsSeCd);
        		this.dsGet.setColumn(0, "prcsSttsCd", "TIDSTATUS004");
        		this.gfnConfirmMsg("save_confirm", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"], null);
        	}
        };

        // 재신청 버튼
        this.divPopBtn_Button00_02_onclick = function(obj,e)
        {
        	this.fnSetValidation();
        	this.dsGet.setColumn(0, "userBrdt", this.param.userBrdt);

        	if(this.gfnDsIsValidated(this.validateColumn) && this.fnValidPw() && this.fnFileValidation()) {
        		var jobCd = this.dsGet.getColumn(0, "jobCd");
        		if (!this.gfnIsNull(jobCd) && jobCd == "TAS20002") {
        			this.dsGet.addColumn("prcsSeCd", "string", "256");
        			this.dsGet.setColumn(0, "prcsSeCd", "CTL20002");
        			this.dsGet.setColumn(0, "prcsSttsCd", "");
        			this.gfnConfirmMsg("save_confirm", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"], null);
        		}
        	}
        };

        // 회사 취소 버튼
        this.divForm_divBscInfo_Button00_00_onclick = function(obj,e)
        {
        	this.dsGet.setColumn(0, "coId", null);
        	this.dsGet.setColumn(0, "coNm", null);
        	this.dsGet.setColumn(0, "coNmHwrt", null);
        	this.edit_brno.set_value("");
        	this.edit_coAddr.set_value("");
        	this.edit_coDtlAddr.set_value("");
        	this.divForm.form.divBscInfo.form.Panel04_02_00_00.set_visible(false);
        };

        // 회사 정보 버튼
        this.divForm_divBscInfo_Button00_onclick = function(obj,e)
        {
        	this.fnSetCoInfo();
        	var coId = this.dsGet.getColumn(0, "coId");

        	if (!this.gfnIsNull(coId) && this.coChk) {
        		this.divForm.form.divBscInfo.form.Panel04_02_00_00.visible = true;
        		this.coChk = false;
        	} else {
        		this.divForm.form.divBscInfo.form.Panel04_02_00_00.visible = false;
        		this.coChk = true;
        	}
        	this.divForm.form.resetScroll();
        };

        // 파일 개수
        this.dsFile1_onvaluechanged = function(obj,e)
        {
        	this.divForm.form.Div03.form.staCnt1.text = obj.rowcount;

        	if (obj.rowcount == 0) {
        		this.divForm.form.Div03.form.btn_del_file_1.visible = false;
        	} else {
        		this.divForm.form.Div03.form.btn_del_file_1.visible = true;
        	}
        };

        this.dsFile2_onvaluechanged = function(obj,e)
        {
        	this.divForm.form.Div03.form.staCnt2.text = obj.rowcount;

        	if (obj.rowcount == 0) {
        		this.divForm.form.Div03.form.btn_del_file_2.visible = false;
        	} else {
        		this.divForm.form.Div03.form.btn_del_file_2.visible = true;
        	}
        };

        this.dsFile3_onvaluechanged = function(obj,e)
        {
        	this.divForm.form.Div03.form.staCnt3.text = obj.rowcount;

        	if (obj.rowcount == 0) {
        		this.divForm.form.Div03.form.btn_del_file_3.visible = false;
        	} else {
        		this.divForm.form.Div03.form.btn_del_file_3.visible = true;
        	}
        };

        this.dsFile4_onvaluechanged = function(obj,e)
        {
        	this.divForm.form.Div03.form.staCnt4.text = obj.rowcount;

        	if (obj.rowcount == 0) {
        		this.divForm.form.Div03.form.btn_del_file_4.visible = false;
        	} else {
        		this.divForm.form.Div03.form.btn_del_file_4.visible = true;
        	}
        };

        this.btnMin_onclick = function(obj,e)
        {
        	var objNm = obj.name;
        	var objClass = obj.cssclass;
        	var objDiv = null;
        	var divVisible = false;

        	// 해당 div 찾아줌.
        	if(objNm == "btnMinPrcsDsctn") {
        		objDiv = this.divForm.form.Div01;
        	} else if(objNm == "btnMinAplyInfo") {
        		objDiv = this.divForm.form.Div02;
        	} else if(objNm == "btnMinBscInfo") {
        		objDiv = this.divForm.form.divBscInfo;
        	} else if(objNm == "btnMinAlrmYn") {
        		objDiv = this.divForm.form.Div04;
        	} else if(objNm == "btnMinPrvcClctAgre") {
        		objDiv = this.divForm.form.Div05;
        	} else if(objNm == "btnMinAtfl") {
        		objDiv = this.divForm.form.Div03;
        	} else{
        		return;
        	}

        	if (objClass == "btn_WF_ACMinus") { // - 버튼 일때
        		divVisible = false; // visible 세팅
        		obj.cssclass = "btn_WF_ACPlus"; // 클래스 수정
        	} else if (objClass == "btn_WF_ACPlus") { // + 버튼 일때
        		divVisible = true; // visible 세팅
        		obj.cssclass = "btn_WF_ACMinus";
        	}

        	objDiv.visible = divVisible;
        	this.resetScroll();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.btnMinPrcsDsctn.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.Div02.form.rdo02.addEventHandler("onitemchanged",this.divForm_Div02_rdo02_onitemchanged,this);
            this.divForm.form.Div02.form.rdo01.addEventHandler("onitemchanged",this.divForm_Div02_rdo01_onitemchanged,this);
            this.divForm.form.divBscInfo.form.edtMblTelno.addEventHandler("onkillfocus",this.divForm_divBscInfo_edtMblTelno_onkillfocus,this);
            this.divForm.form.divBscInfo.form.edtId.addEventHandler("oneditclick",this.divForm_divBscInfo_edtId_oneditclick,this);
            this.divForm.form.divBscInfo.form.btnGrdRegi00.addEventHandler("onclick",this.divForm_divBscInfo_btnGrdRegi00_onclick,this);
            this.divForm.form.divBscInfo.form.divEdtPop00.form.btnPop.addEventHandler("onclick",this.divForm_divBscInfo_divEdtPop00_btnPop_onclick,this);
            this.divForm.form.divBscInfo.form.Button00.addEventHandler("onclick",this.divForm_divBscInfo_Button00_onclick,this);
            this.divForm.form.divBscInfo.form.Button00_00.addEventHandler("onclick",this.divForm_divBscInfo_Button00_00_onclick,this);
            this.divForm.form.divBscInfo.form.edtPswd02.addEventHandler("onkillfocus",this.divForm_divBscInfo_edtPswd02_onkillfocus,this);
            this.divForm.form.divBscInfo.form.edtPswd01.addEventHandler("onkillfocus",this.divForm_divBscInfo_edtPswd01_onkillfocus,this);
            this.divForm.form.Div05.form.rdoYn6.addEventHandler("onitemchanged",this.divForm_Div00_Radio00_00_onitemchanged,this);
            this.divForm.form.Div03.form.btn_file_1.addEventHandler("onclick",this.divForm_Div03_btn_file_1_onclick,this);
            this.divForm.form.Div03.form.btn_del_file_1.addEventHandler("onclick",this.divForm_Div03_btn_del_file_1_onclick,this);
            this.divForm.form.Div03.form.Grid01.addEventHandler("oncellclick",this.divForm_Div03_Grid01_oncellclick,this);
            this.divForm.form.Div03.form.Grid01.addEventHandler("oncelldblclick",this.divForm_Div03_Grid01_oncelldblclick,this);
            this.divForm.form.Div03.form.btn_file_2.addEventHandler("onclick",this.divForm_Div03_btn_file_2_onclick,this);
            this.divForm.form.Div03.form.btn_del_file_2.addEventHandler("onclick",this.divForm_Div03_btn_del_file_2_onclick,this);
            this.divForm.form.Div03.form.Grid02.addEventHandler("oncellclick",this.divForm_Div03_Grid02_oncellclick,this);
            this.divForm.form.Div03.form.Grid02.addEventHandler("oncelldblclick",this.divForm_Div03_Grid02_oncelldblclick,this);
            this.divForm.form.Div03.form.rdo03.addEventHandler("onitemchanged",this.divForm_Div03_rdo03_onitemchanged,this);
            this.divForm.form.Div03.form.btn_file_4.addEventHandler("onclick",this.divForm_Div03_btn_file_4_onclick,this);
            this.divForm.form.Div03.form.btn_del_file_4.addEventHandler("onclick",this.divForm_Div03_btn_del_file_4_onclick,this);
            this.divForm.form.Div03.form.Grid04.addEventHandler("oncellclick",this.divForm_Div03_Grid04_oncellclick,this);
            this.divForm.form.Div03.form.Grid04.addEventHandler("oncelldblclick",this.divForm_Div03_Grid04_oncelldblclick,this);
            this.divForm.form.Div03.form.btn_file_3.addEventHandler("onclick",this.divForm_Div03_btn_file_3_onclick,this);
            this.divForm.form.Div03.form.btn_del_file_3.addEventHandler("onclick",this.divForm_Div03_btn_del_file_3_onclick,this);
            this.divForm.form.Div03.form.Grid03.addEventHandler("oncellclick",this.divForm_Div03_Grid03_oncellclick,this);
            this.divForm.form.Div03.form.Grid03.addEventHandler("oncelldblclick",this.divForm_Div03_Grid03_oncelldblclick,this);
            this.divForm.form.btnMinAplyInfo.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.btnMinBscInfo.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.btnMinAlrmYn.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.btnMinPrvcClctAgre.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.btnMinAtfl.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divPopBtn.form.Button00_00.addEventHandler("onclick",this.divPopBtn_Button00_00_onclick,this);
            this.divPopBtn.form.Button00_01.addEventHandler("onclick",this.divPopBtn_Button00_01_onclick,this);
            this.divPopBtn.form.Button00_02.addEventHandler("onclick",this.divPopBtn_Button00_02_onclick,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterAddFile",this.RaonkUpload_RAONKUPLOAD_AfterAddFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_CreationComplete",this.RaonkUpload_RAONKUPLOAD_CreationComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_UploadComplete",this.RaonkUpload_RAONKUPLOAD_UploadComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_OnError",this.RaonkUpload_RAONKUPLOAD_OnError,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_BeforeAddFile",this.RaonkUpload_RAONKUPLOAD_BeforeAddFile,this);
            this.dsFile1.addEventHandler("onvaluechanged",this.dsFile1_onvaluechanged,this);
            this.dsFile2.addEventHandler("onvaluechanged",this.dsFile2_onvaluechanged,this);
            this.dsFile3.addEventHandler("onvaluechanged",this.dsFile3_onvaluechanged,this);
            this.dsFile4.addEventHandler("onvaluechanged",this.dsFile4_onvaluechanged,this);
        };
        this.loadIncludeScript("COM000P032.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
