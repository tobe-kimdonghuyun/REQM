(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM023M04");
            this.set_titletext("계약정보(청구고객정보 포함)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"ctrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNm\" type=\"STRING\" size=\"256\"/><Column id=\"itgrnCtrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtType\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtTypeNm\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtYmd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"rfctTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"rfctTrgtCtrtEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"taxfrTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"taxfrTrgtCtrtEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"mnlMngSeMnl\" type=\"STRING\" size=\"256\"/><Column id=\"brno\" type=\"STRING\" size=\"256\"/><Column id=\"coId\" type=\"STRING\" size=\"256\"/><Column id=\"coNm\" type=\"STRING\" size=\"256\"/><Column id=\"bzstat\" type=\"STRING\" size=\"256\"/><Column id=\"tpbiz\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"currentPageNo\" type=\"STRING\" size=\"256\"/><Column id=\"recordCountPerPage\" type=\"STRING\" size=\"256\"/><Column id=\"sDate\" type=\"STRING\" size=\"256\"/><Column id=\"eDate\" type=\"STRING\" size=\"256\"/><Column id=\"brno\" type=\"STRING\" size=\"256\"/><Column id=\"coNm\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNm\" type=\"STRING\" size=\"256\"/><Column id=\"mnlMngSeMnl\" type=\"STRING\" size=\"256\"/><Column id=\"rfctTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"taxfrTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtType\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"recordCountPerPage\">10</Col><Col id=\"currentPageNo\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPage", this);
            obj._setContents("<ColumnInfo><Column id=\"totalRecordCount\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMnlMngSeMnl", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cdNm\">전체</Col></Row><Row><Col id=\"cdId\">Y</Col><Col id=\"cdNm\">자동</Col></Row><Row><Col id=\"cdId\">N</Col><Col id=\"cdNm\">수동</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRfctTrgtYn", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cdNm\">전체</Col></Row><Row><Col id=\"cdId\">Y</Col><Col id=\"cdNm\">예</Col></Row><Row><Col id=\"cdId\">N</Col><Col id=\"cdNm\">아니오</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTaxfrTrgtYn", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cdNm\">전체</Col></Row><Row><Col id=\"cdId\">Y</Col><Col id=\"cdNm\">예</Col></Row><Row><Col id=\"cdId\">N</Col><Col id=\"cdNm\">아니오</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCtrtType", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcel", this);
            obj._setContents("<ColumnInfo><Column id=\"ctrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNm\" type=\"STRING\" size=\"256\"/><Column id=\"itgrnCtrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtType\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtTypeNm\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtYmd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"rfctTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"rfctTrgtCtrtEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"taxfrTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"taxfrTrgtCtrtEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"mnlMngSeMnl\" type=\"STRING\" size=\"256\"/><Column id=\"brno\" type=\"STRING\" size=\"256\"/><Column id=\"coId\" type=\"STRING\" size=\"256\"/><Column id=\"coNm\" type=\"STRING\" size=\"256\"/><Column id=\"bzstat\" type=\"STRING\" size=\"256\"/><Column id=\"tpbiz\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Div("divForm","0","60",null,null,"60","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("divSch","0","0","100.00%","259",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("PanelLabel","20.00","14","100%","161",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("0");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("40");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem10\" componentid=\"pan00\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel02\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel03\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00\"/><PanelItem id=\"PanelItem08\" componentid=\"Panel02_00_00_00\"/><PanelItem id=\"PanelItem06\" componentid=\"Panel03_00_00\"/><PanelItem id=\"PanelItem09\" componentid=\"Panel03_00_00_00_00\"/><PanelItem id=\"PanelItem07\" componentid=\"Panel03_00_00_00\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel01","1694.00","398","420","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("2");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01\"/><PanelItem id=\"PanelItem02\" componentid=\"edtBrno\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("1");
            obj.set_text("사업자\r\n등록번호");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel02","1694.00","398","420","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("4");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel02\"/><PanelItem id=\"PanelItem02\" componentid=\"edtCoNm\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel02","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("3");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtCoNm","140","80","65%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("9");
            obj.set_flexgrow("1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel03","1694.00","398","420","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("5");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel01_00\"/><PanelItem id=\"PanelItem00\" componentid=\"edtCtrtNo\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01_00","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("10");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtCtrtNo","841","24","65%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("11");
            obj.set_flexgrow("1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("PanelClose","30","151","100%","30",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_SchLine");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents/>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("PanelSchBtn","632","235","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("7");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnSch\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnSch","570","192","112","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("8");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Search");
            obj.set_fittocontents("width");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("12");
            obj.set_text("식음대상여부");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel02_00_00_00","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("14");
            obj.set_text("자동여부");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cmbTaxfrTrgtYn","788.00","145","20.42%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("15");
            obj.set_flexgrow("1");
            obj.set_innerdataset("dsTaxfrTrgtYn");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00","678.00","145","420","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("16");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel02_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"cmbMnlMngSeMnl\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","1694.00","398","420","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("19");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"edtCtrtNm\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01_01","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("17");
            obj.set_text("계약명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtCtrtNm","841","24","65%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("18");
            obj.set_flexgrow("1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel03_00_00","1694.00","398","420","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("13");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel01_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"cmbRfctTrgtYn\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel03_00_00_00","1694.00","398","420","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("21");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel01_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"cmbCtrgType\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00_00","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("20");
            obj.set_text("계약유형");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00_00_00","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("22");
            obj.set_text("면세대상여부");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel03_00_00_00_00","1694.00","398","420","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("23");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel01_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"cmbTaxfrTrgtYn\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cmbCtrgType","788.00","145","20.42%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("24");
            obj.set_flexgrow("1");
            obj.set_innerdataset("dsCtrtType");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel03_00","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("25");
            obj.set_text("계약일자");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divCal","1030","75","330","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("26");
            obj.set_text("Div00");
            obj.set_flexgrow("1");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","0","0","150","40",null,null,null,null,null,null,this.divForm.form.divSch.form.divCal.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.divSch.form.divCal.addChild(obj.name, obj);

            obj = new Static("staDash","Calendar00:10","0","10","40",null,null,null,null,null,null,this.divForm.form.divSch.form.divCal.form);
            obj.set_taborder("1");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_Dash");
            this.divForm.form.divSch.form.divCal.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","staDash:10","0","150","40",null,null,null,null,null,null,this.divForm.form.divSch.form.divCal.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.divSch.form.divCal.addChild(obj.name, obj);

            obj = new Panel("pan00","20.00","67","420","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("27");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("nowrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staLabel03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"divCal\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtBrno","841","24","65%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("28");
            obj.set_flexgrow("1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cmbMnlMngSeMnl","788.00","145","20.42%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("29");
            obj.set_flexgrow("1");
            obj.set_innerdataset("dsMnlMngSeMnl");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cmbRfctTrgtYn","788.00","145","20.42%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("30");
            obj.set_flexgrow("1");
            obj.set_innerdataset("dsRfctTrgtYn");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divGrd","0","30","100.00%","598",null,null,null,null,"250",null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divPage","0",null,"100.00%","36",null,"0",null,null,"36",null,this.divForm.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_url("work::COM/util/paging/paging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_visible("true");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn",null,"44","75%","34","0",null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("4");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_verticalgap("10");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem03\" componentid=\"btnGrdDel\"/><PanelItem id=\"PanelItem00\" componentid=\"btnGrdRegi\"/><PanelItem id=\"PanelItem04\" componentid=\"btnGrdDw\"/><PanelItem id=\"PanelItem05\" componentid=\"btnGrdDwAll\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("grdList","0","PanelGrdBtn:10","100.00%",null,null,"divPage:10",null,null,"230",null,this.divForm.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsList");
            obj.set_autofittype("none");
            obj.getSetter("uFunction").set("checkbox");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"자동여부\"/><Cell col=\"2\" text=\"계약번호\"/><Cell col=\"3\" text=\"계약명\"/><Cell col=\"4\" text=\"통합계약번호\"/><Cell col=\"5\" text=\"계약유형\"/><Cell col=\"6\" text=\"계약일\"/><Cell col=\"7\" text=\"계약시작일\"/><Cell col=\"8\" text=\"계약종료일\"/><Cell col=\"9\" text=\"업종유형\"/><Cell col=\"10\" text=\"업종명\"/><Cell col=\"11\" text=\"사업자등록번호\"/><Cell col=\"12\" text=\"회사명\"/><Cell col=\"13\" text=\"식음여부\"/><Cell col=\"14\" text=\"면세여부\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" text=\"bind:mnlMngSeMnl\" displaytype=\"combotext\" textAlign=\"center\" combodataset=\"dsMnlMngSeMnl\" combocodecol=\"cdId\" combodatacol=\"cdNm\"/><Cell col=\"2\" text=\"bind:ctrtNo\" cssclass=\"CellLink\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:ctrtNm\" displaytype=\"text\" textAlign=\"left\" tooltiptext=\"bind:ctrtNm\"/><Cell col=\"4\" text=\"bind:itgrnCtrtNo\" displaytype=\"text\" cssclass=\"expr:state==&apos;0&apos;?&apos;CellTxtRed&apos;:&apos;CellTxtBlue&apos;\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:ctrtTypeNm\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:ctrtYmd\" textAlign=\"center\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" text=\"bind:ctrtBgngYmd\" textAlign=\"center\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" text=\"bind:ctrtEndYmd\" textAlign=\"center\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" text=\"bind:bzstat\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:tpbiz\" textAlign=\"center\"/><Cell col=\"11\" text=\"bind:brno\" textAlign=\"center\"/><Cell col=\"12\" text=\"bind:coNm\" textAlign=\"center\"/><Cell col=\"13\" text=\"bind:rfctTrgtYn\" displaytype=\"combotext\" combodataset=\"dsRfctTrgtYn\" combocodecol=\"cdId\" combodatacol=\"cdNm\" textAlign=\"center\"/><Cell col=\"14\" text=\"bind:taxfrTrgtYn\" combodataset=\"dsTaxfrTrgtYn\" combocodecol=\"cdId\" combodatacol=\"cdNm\" textAlign=\"center\" displaytype=\"combotext\"/></Band></Format></Formats>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDw","774.00","10","124","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("5");
            obj.set_text("다운로드(엑셀)");
            obj.set_cssclass("btn_WF_GrdDw");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","40","22","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("8");
            obj.set_text("총");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal01","27","40","45","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("7");
            obj.set_text("1000");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal02","87","40","12","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("6");
            obj.set_text("건");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDel","316.00","0","45","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("9");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdRegi","371.00","0","45","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("10");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_SmallBlack");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Combo("cmbGrdList","1230","0","80","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_visible("true");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_divGrd_form_cmbGrdList_innerdataset = new nexacro.NormalDataset("divForm_form_divGrd_form_cmbGrdList_innerdataset", obj);
            divForm_form_divGrd_form_cmbGrdList_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_divGrd_form_cmbGrdList_innerdataset);
            obj.set_text("10");
            obj.set_value("10");
            obj.set_index("0");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal00","1165","0","65","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_text("목록수");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","100%","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("11");
            obj.set_text("계약정보 목록");
            obj.set_cssclass("sta_WF_Txt60018");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDwAll","1208","40","150","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("12");
            obj.set_text("전체다운로드(엑셀)");
            obj.set_cssclass("btn_WF_GrdDw");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","44","79","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("13");
            obj.set_fittocontents("width");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTotal\"/><PanelItem id=\"PanelItem01\" componentid=\"staTotal01\"/><PanelItem id=\"PanelItem02\" componentid=\"staTotal02\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","0","155","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("14");
            obj.set_fittocontents("width");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTotal00\"/><PanelItem id=\"PanelItem01\" componentid=\"cmbGrdList\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Div("divPopBtn","0","550","100%","60",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnInsert","457.00","30","68","40",null,null,null,null,null,null,this.divForm.form.divPopBtn.form);
            obj.set_taborder("1");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_fittocontents("width");
            this.divForm.form.divPopBtn.addChild(obj.name, obj);

            obj = new Grid("grdExcel","1490","1","11.49%",null,null,"770",null,null,"230",null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsExcel");
            obj.set_autofittype("none");
            obj.getSetter("uFunction").set("checkbox");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"자동여부\"/><Cell col=\"2\" text=\"계약번호\"/><Cell col=\"3\" text=\"계약명\"/><Cell col=\"4\" text=\"통합계약번호\"/><Cell col=\"5\" text=\"계약유형\"/><Cell col=\"6\" text=\"계약일\"/><Cell col=\"7\" text=\"계약시작일\"/><Cell col=\"8\" text=\"계약종료일\"/><Cell col=\"9\" text=\"업종유형\"/><Cell col=\"10\" text=\"업종명\"/><Cell col=\"11\" text=\"사업자등록번호\"/><Cell col=\"12\" text=\"회사명\"/><Cell col=\"13\" text=\"식음여부\"/><Cell col=\"14\" text=\"면세여부\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" text=\"bind:mnlMngSeMnl\" displaytype=\"combotext\" textAlign=\"center\" combodataset=\"dsMnlMngSeMnl\" combocodecol=\"cdId\" combodatacol=\"cdNm\"/><Cell col=\"2\" text=\"bind:ctrtNo\" cssclass=\"CellLink\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:ctrtNm\" displaytype=\"text\" textAlign=\"left\" tooltiptext=\"bind:ctrtNm\"/><Cell col=\"4\" text=\"bind:itgrnCtrtNo\" displaytype=\"text\" cssclass=\"expr:state==&apos;0&apos;?&apos;CellTxtRed&apos;:&apos;CellTxtBlue&apos;\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:ctrtTypeNm\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:ctrtYmd\" textAlign=\"center\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" text=\"bind:ctrtBgngYmd\" textAlign=\"center\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" text=\"bind:ctrtEndYmd\" textAlign=\"center\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" text=\"bind:bzstat\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:tpbiz\" textAlign=\"center\"/><Cell col=\"11\" text=\"bind:brno\" textAlign=\"center\"/><Cell col=\"12\" text=\"bind:coNm\" textAlign=\"center\"/><Cell col=\"13\" text=\"bind:rfctTrgtYn\" displaytype=\"combotext\" combodataset=\"dsRfctTrgtYn\" combocodecol=\"cdId\" combodatacol=\"cdNm\" textAlign=\"center\"/><Cell col=\"14\" text=\"bind:taxfrTrgtYn\" combodataset=\"dsTaxfrTrgtYn\" combocodecol=\"cdId\" combodatacol=\"cdNm\" textAlign=\"center\" displaytype=\"combotext\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTitle
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.divSch.form.divCal.form
            obj = new Layout("default","",0,0,this.divForm.form.divSch.form.divCal.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Calendar00.set_taborder("0");
                p.Calendar00.set_dateformat("yyyy-MM-dd");
                p.Calendar00.move("0","0","150","40",null,null);

                p.staDash.set_taborder("1");
                p.staDash.set_text("~");
                p.staDash.set_cssclass("sta_WF_Dash");
                p.staDash.move("Calendar00:10","0","10","40",null,null);

                p.Calendar01.set_taborder("2");
                p.Calendar01.set_dateformat("yyyy-MM-dd");
                p.Calendar01.move("staDash:10","0","150","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            this.divForm.form.divSch.form.divCal.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divSch.form.divCal.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divSch.form.divCal.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            this.divForm.form.divSch.form.divCal.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divSch.form
            obj = new Layout("default","",0,0,this.divForm.form.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.PanelLabel.set_taborder("0");
                p.PanelLabel.set_verticalgap("8");
                p.PanelLabel.set_flexwrap("wrap");
                p.PanelLabel.set_spacing("0px 0px 10px 0px");
                p.PanelLabel.set_type("horizontal");
                p.PanelLabel.set_flexcrossaxisalign("start");
                p.PanelLabel.set_horizontalgap("40");
                p.PanelLabel.set_fittocontents("height");
                p.PanelLabel.set_maxheight("");
                p.PanelLabel.move("20.00","14","100%","161",null,null);

                p.Panel01.set_taborder("2");
                p.Panel01.set_type("horizontal");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.set_flexgrow("1");
                p.Panel01.set_maxheight("");
                p.Panel01.set_minwidth("");
                p.Panel01.move("1694.00","398","420","40",null,null);

                p.staLabel01.set_taborder("1");
                p.staLabel01.set_text("사업자\r\n등록번호");
                p.staLabel01.set_cssclass("sta_WF_SchLabel");
                p.staLabel01.set_flexshrink("0");
                p.staLabel01.set_maxwidth("");
                p.staLabel01.move("0","0","100","40",null,null);

                p.Panel02.set_taborder("4");
                p.Panel02.set_type("horizontal");
                p.Panel02.set_horizontalgap("10");
                p.Panel02.set_flexgrow("1");
                p.Panel02.set_minwidth("");
                p.Panel02.move("1694.00","398","420","40",null,null);

                p.staLabel02.set_taborder("3");
                p.staLabel02.set_text("회사명");
                p.staLabel02.set_cssclass("sta_WF_SchLabel");
                p.staLabel02.set_flexshrink("0");
                p.staLabel02.set_maxwidth("");
                p.staLabel02.move("0","0","100","40",null,null);

                p.edtCoNm.set_taborder("9");
                p.edtCoNm.set_flexgrow("1");
                p.edtCoNm.move("140","80","65%","40",null,null);

                p.Panel03.set_taborder("5");
                p.Panel03.set_type("horizontal");
                p.Panel03.set_horizontalgap("10");
                p.Panel03.set_fittocontents("height");
                p.Panel03.set_flexgrow("1");
                p.Panel03.set_minwidth("");
                p.Panel03.move("1694.00","398","420","40",null,null);

                p.staLabel01_00.set_taborder("10");
                p.staLabel01_00.set_text("계약번호");
                p.staLabel01_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel01_00.set_flexshrink("0");
                p.staLabel01_00.set_maxwidth("");
                p.staLabel01_00.move("0","0","100","40",null,null);

                p.edtCtrtNo.set_taborder("11");
                p.edtCtrtNo.set_flexgrow("1");
                p.edtCtrtNo.move("841","24","65%","40",null,null);

                p.PanelClose.set_taborder("6");
                p.PanelClose.set_type("vertical");
                p.PanelClose.set_cssclass("pal_WF_SchLine");
                p.PanelClose.set_flexcrossaxisalign("end");
                p.PanelClose.move("30","151","100%","30",null,null);

                p.PanelSchBtn.set_taborder("7");
                p.PanelSchBtn.set_flexmainaxisalign("center");
                p.PanelSchBtn.move("632","235","100%","40",null,null);

                p.btnSch.set_taborder("8");
                p.btnSch.set_text("조회하기");
                p.btnSch.set_cssclass("btn_WF_Search");
                p.btnSch.set_fittocontents("width");
                p.btnSch.move("570","192","112","40",null,null);

                p.staLabel01_00_00_00.set_taborder("12");
                p.staLabel01_00_00_00.set_text("식음대상여부");
                p.staLabel01_00_00_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel01_00_00_00.set_flexshrink("0");
                p.staLabel01_00_00_00.set_maxwidth("");
                p.staLabel01_00_00_00.move("0","0","100","40",null,null);

                p.staLabel02_00_00_00.set_taborder("14");
                p.staLabel02_00_00_00.set_text("자동여부");
                p.staLabel02_00_00_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel02_00_00_00.set_flexshrink("0");
                p.staLabel02_00_00_00.set_minwidth("");
                p.staLabel02_00_00_00.move("0","0","100","40",null,null);

                p.cmbTaxfrTrgtYn.set_taborder("15");
                p.cmbTaxfrTrgtYn.set_flexgrow("1");
                p.cmbTaxfrTrgtYn.set_innerdataset("dsTaxfrTrgtYn");
                p.cmbTaxfrTrgtYn.set_codecolumn("cdId");
                p.cmbTaxfrTrgtYn.set_datacolumn("cdNm");
                p.cmbTaxfrTrgtYn.set_text("전체");
                p.cmbTaxfrTrgtYn.set_value("");
                p.cmbTaxfrTrgtYn.set_index("0");
                p.cmbTaxfrTrgtYn.move("788.00","145","20.42%","40",null,null);

                p.Panel02_00_00_00.set_taborder("16");
                p.Panel02_00_00_00.set_type("horizontal");
                p.Panel02_00_00_00.set_horizontalgap("10");
                p.Panel02_00_00_00.set_flexgrow("1");
                p.Panel02_00_00_00.set_minwidth("");
                p.Panel02_00_00_00.move("678.00","145","420","40",null,null);

                p.Panel01_00.set_taborder("19");
                p.Panel01_00.set_type("horizontal");
                p.Panel01_00.set_horizontalgap("10");
                p.Panel01_00.set_flexgrow("1");
                p.Panel01_00.set_maxheight("");
                p.Panel01_00.set_minwidth("");
                p.Panel01_00.move("1694.00","398","420","40",null,null);

                p.staLabel01_01.set_taborder("17");
                p.staLabel01_01.set_text("계약명");
                p.staLabel01_01.set_cssclass("sta_WF_SchLabel");
                p.staLabel01_01.set_flexshrink("0");
                p.staLabel01_01.set_maxwidth("");
                p.staLabel01_01.move("0","0","100","40",null,null);

                p.edtCtrtNm.set_taborder("18");
                p.edtCtrtNm.set_flexgrow("1");
                p.edtCtrtNm.move("841","24","65%","40",null,null);

                p.Panel03_00_00.set_taborder("13");
                p.Panel03_00_00.set_type("horizontal");
                p.Panel03_00_00.set_horizontalgap("10");
                p.Panel03_00_00.set_fittocontents("height");
                p.Panel03_00_00.set_flexgrow("1");
                p.Panel03_00_00.set_minwidth("");
                p.Panel03_00_00.move("1694.00","398","420","40",null,null);

                p.Panel03_00_00_00.set_taborder("21");
                p.Panel03_00_00_00.set_type("horizontal");
                p.Panel03_00_00_00.set_horizontalgap("10");
                p.Panel03_00_00_00.set_fittocontents("height");
                p.Panel03_00_00_00.set_flexgrow("1");
                p.Panel03_00_00_00.set_minwidth("");
                p.Panel03_00_00_00.move("1694.00","398","420","40",null,null);

                p.staLabel01_00_00_00_00.set_taborder("20");
                p.staLabel01_00_00_00_00.set_text("계약유형");
                p.staLabel01_00_00_00_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel01_00_00_00_00.set_flexshrink("0");
                p.staLabel01_00_00_00_00.set_maxwidth("");
                p.staLabel01_00_00_00_00.move("0","0","100","40",null,null);

                p.staLabel01_00_00_00_00_00.set_taborder("22");
                p.staLabel01_00_00_00_00_00.set_text("면세대상여부");
                p.staLabel01_00_00_00_00_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel01_00_00_00_00_00.set_flexshrink("0");
                p.staLabel01_00_00_00_00_00.set_maxwidth("");
                p.staLabel01_00_00_00_00_00.move("0","0","100","40",null,null);

                p.Panel03_00_00_00_00.set_taborder("23");
                p.Panel03_00_00_00_00.set_type("horizontal");
                p.Panel03_00_00_00_00.set_horizontalgap("10");
                p.Panel03_00_00_00_00.set_fittocontents("height");
                p.Panel03_00_00_00_00.set_flexgrow("1");
                p.Panel03_00_00_00_00.set_minwidth("");
                p.Panel03_00_00_00_00.move("1694.00","398","420","40",null,null);

                p.cmbCtrgType.set_taborder("24");
                p.cmbCtrgType.set_flexgrow("1");
                p.cmbCtrgType.set_innerdataset("dsCtrtType");
                p.cmbCtrgType.set_codecolumn("cdId");
                p.cmbCtrgType.set_datacolumn("cdNm");
                p.cmbCtrgType.set_text("전체");
                p.cmbCtrgType.set_value("");
                p.cmbCtrgType.set_index("-1");
                p.cmbCtrgType.move("788.00","145","20.42%","40",null,null);

                p.staLabel03_00.set_taborder("25");
                p.staLabel03_00.set_text("계약일자");
                p.staLabel03_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel03_00.set_flexshrink("0");
                p.staLabel03_00.set_maxwidth("");
                p.staLabel03_00.move("0","0","100","40",null,null);

                p.divCal.set_taborder("26");
                p.divCal.set_text("Div00");
                p.divCal.set_flexgrow("1");
                p.divCal.set_formscrollbartype("none none");
                p.divCal.set_formscrolltype("none");
                p.divCal.move("1030","75","330","40",null,null);

                p.pan00.set_taborder("27");
                p.pan00.set_type("horizontal");
                p.pan00.set_horizontalgap("10");
                p.pan00.set_flexwrap("nowrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_flexgrow("1");
                p.pan00.set_minwidth("");
                p.pan00.move("20.00","67","420","40",null,null);

                p.edtBrno.set_taborder("28");
                p.edtBrno.set_flexgrow("1");
                p.edtBrno.move("841","24","65%","40",null,null);

                p.cmbMnlMngSeMnl.set_taborder("29");
                p.cmbMnlMngSeMnl.set_flexgrow("1");
                p.cmbMnlMngSeMnl.set_innerdataset("dsMnlMngSeMnl");
                p.cmbMnlMngSeMnl.set_codecolumn("cdId");
                p.cmbMnlMngSeMnl.set_datacolumn("cdNm");
                p.cmbMnlMngSeMnl.set_text("전체");
                p.cmbMnlMngSeMnl.set_value("");
                p.cmbMnlMngSeMnl.set_index("0");
                p.cmbMnlMngSeMnl.move("788.00","145","20.42%","40",null,null);

                p.cmbRfctTrgtYn.set_taborder("30");
                p.cmbRfctTrgtYn.set_flexgrow("1");
                p.cmbRfctTrgtYn.set_innerdataset("dsRfctTrgtYn");
                p.cmbRfctTrgtYn.set_codecolumn("cdId");
                p.cmbRfctTrgtYn.set_datacolumn("cdNm");
                p.cmbRfctTrgtYn.set_text("전체");
                p.cmbRfctTrgtYn.set_value("");
                p.cmbRfctTrgtYn.set_index("0");
                p.cmbRfctTrgtYn.move("788.00","145","20.42%","40",null,null);
            	}
            );
            obj.set_spacing("14px 20px 12px 20px");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            this.divForm.form.divSch.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divSch.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.pan00.set_flexwrap("wrap");
                p.pan00.move("20.00","67","440","40",null,null);

                p.Panel03_00_00_00.move("1694.00","398","440","40",null,null);

                p.Panel03_00_00_00_00.move("1694.00","398","440","40",null,null);

                p.Panel03_00_00.move("1694.00","398","440","40",null,null);

                p.Panel02_00_00_00.move("678.00","145","440","40",null,null);

                p.Panel01_00.move("1694.00","398","440","40",null,null);

                p.Panel03.move("1694.00","398","440","40",null,null);

                p.Panel02.move("1694.00","398","440","40",null,null);

                p.Panel01.move("1694.00","398","440","40",null,null);
            	}
            );
            obj.set_spacing("14px 20px 12px 20px");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            this.divForm.form.divSch.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divGrd.form.divPage
            obj = new Layout("default","",0,0,this.divForm.form.divGrd.form.divPage.form,function(p){});
            this.divForm.form.divGrd.form.divPage.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divPage.set_taborder("0");
                p.divPage.set_text("Div00");
                p.divPage.set_url("work::COM/util/paging/paging.xfdl");
                p.divPage.set_formscrollbartype("none none");
                p.divPage.set_formscrolltype("none");
                p.divPage.set_visible("true");
                p.divPage.set_minheight("36");
                p.divPage.set_maxheight("");
                p.divPage.move("0",null,"100.00%","36",null,"0");

                p.PanelGrdBtn.set_taborder("4");
                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.set_fittocontents("height");
                p.PanelGrdBtn.set_verticalgap("10");
                p.PanelGrdBtn.set_flexwrap("wrap");
                p.PanelGrdBtn.move(null,"44","75%","34","0",null);

                p.grdList.set_taborder("1");
                p.grdList.set_binddataset("dsList");
                p.grdList.set_autofittype("none");
                p.grdList.getSetter("uFunction").set("checkbox");
                p.grdList.set_minheight("230");
                p.grdList.set_maxheight("");
                p.grdList.move("0","PanelGrdBtn:10","100.00%",null,null,"divPage:10");

                p.btnGrdDw.set_taborder("5");
                p.btnGrdDw.set_text("다운로드(엑셀)");
                p.btnGrdDw.set_cssclass("btn_WF_GrdDw");
                p.btnGrdDw.set_visible("true");
                p.btnGrdDw.set_fittocontents("width");
                p.btnGrdDw.move("774.00","10","124","34",null,null);

                p.staTotal.set_taborder("8");
                p.staTotal.set_text("총");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("width");
                p.staTotal.move("0","40","22","34",null,null);

                p.staTotal01.set_taborder("7");
                p.staTotal01.set_text("1000");
                p.staTotal01.set_cssclass("sta_WF_Total");
                p.staTotal01.set_usedecorate("true");
                p.staTotal01.set_fittocontents("width");
                p.staTotal01.move("27","40","45","34",null,null);

                p.staTotal02.set_taborder("6");
                p.staTotal02.set_text("건");
                p.staTotal02.set_usedecorate("true");
                p.staTotal02.set_fittocontents("width");
                p.staTotal02.move("87","40","12","34",null,null);

                p.btnGrdDel.set_taborder("9");
                p.btnGrdDel.set_text("삭제");
                p.btnGrdDel.set_cssclass("btn_WF_SmallRed");
                p.btnGrdDel.set_visible("true");
                p.btnGrdDel.set_fittocontents("width");
                p.btnGrdDel.move("316.00","0","45","34",null,null);

                p.btnGrdRegi.set_taborder("10");
                p.btnGrdRegi.set_text("등록");
                p.btnGrdRegi.set_cssclass("btn_WF_SmallBlack");
                p.btnGrdRegi.set_visible("true");
                p.btnGrdRegi.set_fittocontents("width");
                p.btnGrdRegi.move("371.00","0","45","34",null,null);

                p.cmbGrdList.set_taborder("3");
                p.cmbGrdList.set_visible("true");
                p.cmbGrdList.set_innerdataset(divForm_form_divGrd_form_cmbGrdList_innerdataset);
                p.cmbGrdList.set_codecolumn("codecolumn");
                p.cmbGrdList.set_datacolumn("datacolumn");
                p.cmbGrdList.set_text("10");
                p.cmbGrdList.set_value("10");
                p.cmbGrdList.set_index("0");
                p.cmbGrdList.move("1230","0","80","34",null,null);

                p.staTotal00.set_taborder("2");
                p.staTotal00.set_text("목록수");
                p.staTotal00.set_cssclass("sta_WF_SchLabel");
                p.staTotal00.set_fittocontents("width");
                p.staTotal00.set_visible("true");
                p.staTotal00.move("1165","0","65","34",null,null);

                p.Static00.set_taborder("11");
                p.Static00.set_text("계약정보 목록");
                p.Static00.set_cssclass("sta_WF_Txt60018");
                p.Static00.move("0","0","100%","34",null,null);

                p.btnGrdDwAll.set_taborder("12");
                p.btnGrdDwAll.set_text("전체다운로드(엑셀)");
                p.btnGrdDwAll.set_cssclass("btn_WF_GrdDw");
                p.btnGrdDwAll.set_visible("true");
                p.btnGrdDwAll.set_fittocontents("width");
                p.btnGrdDwAll.move("1208","40","150","34",null,null);

                p.Panel00.set_taborder("13");
                p.Panel00.set_fittocontents("width");
                p.Panel00.move("0","44","79","34",null,null);

                p.Panel01.set_taborder("14");
                p.Panel01.set_fittocontents("width");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.move("0","0","155","34",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divGrd.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.PanelGrdBtn.move(null,"44","75.00%","78","0",null);
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divPopBtn.form
            obj = new Layout("default","",0,0,this.divForm.form.divPopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnInsert.set_taborder("1");
                p.btnInsert.set_text("등록");
                p.btnInsert.set_cssclass("btn_WF_Yes");
                p.btnInsert.set_fittocontents("width");
                p.btnInsert.move("457.00","30","68","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("10");
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
            obj.set_horizontalgap("10");
            this.divForm.form.divPopBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divPopBtn.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divPopBtn.form,
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
            obj.set_horizontalgap("10");
            this.divForm.form.divPopBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divSch.set_taborder("0");
                p.divSch.set_text("Div00");
                p.divSch.set_cssclass("div_WF_SchBg");
                p.divSch.set_formscrollbartype("none none");
                p.divSch.set_formscrolltype("none");
                p.divSch.set_fittocontents("height");
                p.divSch.move("0","0","100.00%","259",null,null);

                p.divGrd.set_taborder("1");
                p.divGrd.set_text("Div01");
                p.divGrd.set_fittocontents("height");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.set_minheight("250");
                p.divGrd.set_maxheight("");
                p.divGrd.move("0","30","100.00%","598",null,null);

                p.divPopBtn.set_taborder("2");
                p.divPopBtn.set_text("Div00");
                p.divPopBtn.set_cssclass("div_WF_PopBtn");
                p.divPopBtn.set_visible("false");
                p.divPopBtn.move("0","550","100%","60",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("20");
            this.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form
            obj = new Layout("Layout0","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_type("vertical");
            obj.set_verticalgap("20");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("계약정보(청구고객정보 포함)");

                p.divTitle.set_taborder("0");
                p.divTitle.set_text("");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.set_formscrolltype("none");
                p.divTitle.set_maxwidth("");
                p.divTitle.move("0","0",null,"50","60",null);

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_formscrollbartype("none none");
                p.divForm.set_formscrolltype("none");
                p.divForm.set_fittocontents("height");
                p.divForm.set_maxwidth("");
                p.divForm.move("0","60",null,null,"60","0");

                p.grdExcel.set_taborder("2");
                p.grdExcel.set_binddataset("dsExcel");
                p.grdExcel.set_autofittype("none");
                p.grdExcel.getSetter("uFunction").set("checkbox");
                p.grdExcel.set_visible("false");
                p.grdExcel.set_minheight("230");
                p.grdExcel.set_maxheight("");
                p.grdExcel.move("1490","1","11.49%",null,null,"770");
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Phone_screen",480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divTitle.move("0","0",null,"50","0",null);

                p.divForm.move("0","60",null,null,"0","0");
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.divGrd.form.staTotal01","text","dsPage","totalRecordCount");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.divSch.form.edtBrno","value","dsSearch","brno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.divSch.form.edtCoNm","value","dsSearch","coNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.divSch.form.edtCtrtNo","value","dsSearch","ctrtNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.divSch.form.edtCtrtNm","value","dsSearch","ctrtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.divSch.form.cmbCtrgType","value","dsSearch","ctrtType");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.divSch.form.cmbTaxfrTrgtYn","value","dsSearch","taxfrTrgtYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divForm.form.divSch.form.cmbRfctTrgtYn","value","dsSearch","rfctTrgtYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divForm.form.divSch.form.cmbMnlMngSeMnl","value","dsSearch","mnlMngSeMnl");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divForm.form.divSch.form.divCal.form.Calendar00","value","dsSearch","sDate");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divForm.form.divSch.form.divCal.form.Calendar01","value","dsSearch","eDate");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
            this._addPreloadList("fdl","work::COM/util/paging/paging.xfdl");
        };
        
        // User Script
        this.registerScript("COM023M04.xfdl", function() {
        /**
        *  PcMdi 프로젝트
        *  @FileName 	COM023M04.xfdl
        *  @Creator 	(주)이루온
        *  @CreateDate 	2023/10/30
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2023/10/30			TOBESOFT					최초생성
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
        	this.fnInit();
        	this.cfnSearch(1);
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function (page)
        {
        	var recordCountPerPage = this.divForm.form.divGrd.form.cmbGrdList.value;
        	this.dsSearch.setColumn(0, "currentPageNo", page);
        	this.dsSearch.setColumn(0, "recordCountPerPage", recordCountPerPage);
        	this.getSearchTransaction();
        };

        //저장
        this.cfnSave = function ()
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

        this.cfnClose = function ()
        {
        	trace('cfnClose');
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.getSearchTransaction = function()
        {
        	var strSvcId    = "search";
        	var strSvcUrl   = "crtr/ctrtInfoListInq.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsList=dsList dsPage=dsPage";
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

        this.getAllSearchTransaction = function()
        {
        	this.dsSearch.setColumn(0, "currentPageNo", "1");
        	this.dsSearch.setColumn(0, "recordCountPerPage", "9999999");

        	var strSvcId    = "excel";
        	var strSvcUrl   = "crtr/ctrtInfoListInq.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsExcel=dsList";
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

        this.gridSaveTransaction = function()
        {
        	var strSvcId    = "delete";
        	var strSvcUrl   = "crtr/ctrtInfoDel.do";
        	var inData      = "dsList=dsList:U";
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
        		case "search":
        			//페이징 폼의 ID가 변경 될 경우 맞춰서 변경 해야함
        			this.divForm.form.divGrd.form.divPage.form.initPages(this.dsPage.getColumn(0, "currentPageNo"), this.dsPage.getColumn(0, "totalRecordCount"), this.dsPage.getColumn(0, "recordCountPerPage"), this.dsPage.getColumn(0, "pageSize"), "cfnSearch");
        			this.divForm.form.divGrd.form.resetScroll();
        			break;
        		case "delete":
        			this.gfnAlertMsg("msg", "MSG_011", ["삭제하였습니다."]);
        			this.cfnSearch(1);
        			break;
        		case "excel" :
        			/*****  현재 그리드 화면을 엑셀로 다운로드 받음  *****/
        			this.exportObj = new ExcelExportObject();
        			var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.grdExcel, "Sheet1!A1");
        			this.exportObj.set_exporturl("svcUrl::/XExportImport.do");
        			this.exportObj.exportData();
        			/*****  현재 그리드 화면을 엑셀로 다운로드 받음  *****/
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
        	if(sPopupId == "del_confirm") {
        		if(oRtn.result == "Y") {
        			var chk = this.dsList.extractRows("chk == " + 1);
        			if(chk.length > 0) {
        				this.dsList.deleteMultiRows(chk);
        			}

        			this.gridSaveTransaction();
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
        	else if(sPopupId =="ctrtInfoPopup") {
        		if (this.gfnIsNull(sRtn)) return;
        		var objRtn = JSON.parse(sRtn);
        		if(objRtn.saveFlag == "Y") {
        			this.cfnSearch();
        		}
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	this.gfnCmmCode("ctrtType", "dsCtrtType", "CONTYPE", "A");
        	this.divForm.form.divSch.form.cmbCtrgType.index = 0;
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divForm_divSch_btnSch_onclick = function(obj,e)
        {
        	this.cfnSearch(1);
        };

        this.divForm_divPopBtn_btnInsert_onclick = function(obj,e)
        {
        	var sMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        	var sMenuUrl = 'work::COM/crtr/COM023P04.xfdl';
        	var actNm = '등록/수정';
        	var objArg = {};
        	this.gfnPageOpen(sMenuId, sMenuUrl, actNm, objArg);
        };

        this.divForm_divGrd_btnGrdDw_onclick = function(obj,e)
        {
        	/*****  현재 그리드 화면을 엑셀로 다운로드 받음  *****/
        	this.exportObj = new ExcelExportObject();
        	var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.divForm.form.divGrd.form.grdList, "Sheet1!A1");
        	this.exportObj.set_exporturl("svcUrl::/XExportImport.do");
        	this.exportObj.exportData();
        	/*****  현재 그리드 화면을 엑셀로 다운로드 받음  *****/
        };

        this.divForm_divGrd_btnGrdDel_onclick = function(obj,e)
        {
        	var chk = this.dsList.findRow("chk", 1);
        	if(chk != -1) {
        		this.gfnConfirmMsg("del_confirm", "MSG_005", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        	} else {
        		this.gfnAlertMsg("msg", "MSG_006");
        	}
        };

        this.divForm_divGrd_grdList_oncellclick = function(obj,e)
        {
        	if(e.cell == 2)
        	{
        // 		var sMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        // 		var sMenuUrl = 'work::COM/crtr/COM023P04.xfdl';
        // 		var actNm = '등록/수정';
        // 		var objArg = {"ctrtNo" : this.dsList.getColumn(this.dsList.rowposition, "ctrtNo")
        // 					 };
        // 		this.gfnPageOpen(sMenuId, sMenuUrl, actNm, objArg);

        		var sTitle = "계약정보";
        		var objArg   = {"ctrtNo" : this.dsList.getColumn(this.dsList.rowposition, "ctrtNo")
        					   };

        		var objOption = {
        			popuptype: "modal"	//modal,modaless
        			, width: 1000
        			, height: 600
        			, autosize: false
        			, title: sTitle
        			, resize: true
        			, titlebar: true
        		};
        		var sPopupCallBack = "fnPopupCallback";

        		this.gfnOpenPopup("ctrtInfoPopup", "work::COM/crtr/COM023P04.xfdl", objArg, sPopupCallBack, objOption);
        	}
        };

        // 등록 팝업
        this.divForm_divGrd_btnGrdRegi_onclick = function(obj,e)
        {
        	var sTitle = "계약정보";
        	var objArg   = {"ctrtNo" : ""
        	               };

        	var objOption = {
        		popuptype: "modal"	//modal,modaless
        		, width: 1000
        		, height: 600
        		, autosize: false
        		, title: sTitle
        		, resize: true
        		, titlebar: true
        	};
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup("ctrtInfoPopup", "work::COM/crtr/COM023P04.xfdl", objArg, sPopupCallBack, objOption);
        };

        this.divForm_divGrd_btnGrdDwAll_onclick = function(obj,e)
        {
        	this.getAllSearchTransaction();
        };

        this.divForm_divGrd_cmbGrdList_onitemchanged = function(obj,e)
        {
        	this.cfnSearch(1);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.divSch.form.staLabel02.addEventHandler("onclick",this.divForm_Div00_sta00_00_01_01_onclick,this);
            this.divForm.form.divSch.form.btnSch.addEventHandler("onclick",this.divForm_divSch_btnSch_onclick,this);
            this.divForm.form.divSch.form.staLabel02_00_00_00.addEventHandler("onclick",this.divForm_Div00_sta00_00_01_01_onclick,this);
            this.divForm.form.divSch.form.cmbTaxfrTrgtYn.addEventHandler("onitemchanged",this.divForm_divSch_Combo01_onitemchanged,this);
            this.divForm.form.divSch.form.cmbMnlMngSeMnl.addEventHandler("onitemchanged",this.divForm_divSch_Combo01_onitemchanged,this);
            this.divForm.form.divSch.form.cmbRfctTrgtYn.addEventHandler("onitemchanged",this.divForm_divSch_Combo01_onitemchanged,this);
            this.divForm.form.divGrd.form.grdList.addEventHandler("oncellclick",this.divForm_divGrd_grdList_oncellclick,this);
            this.divForm.form.divGrd.form.btnGrdDw.addEventHandler("onclick",this.divForm_divGrd_btnGrdDw_onclick,this);
            this.divForm.form.divGrd.form.btnGrdDel.addEventHandler("onclick",this.divForm_divGrd_btnGrdDel_onclick,this);
            this.divForm.form.divGrd.form.btnGrdRegi.addEventHandler("onclick",this.divForm_divGrd_btnGrdRegi_onclick,this);
            this.divForm.form.divGrd.form.cmbGrdList.addEventHandler("onitemchanged",this.divForm_divGrd_cmbGrdList_onitemchanged,this);
            this.divForm.form.divGrd.form.btnGrdDwAll.addEventHandler("onclick",this.divForm_divGrd_btnGrdDwAll_onclick,this);
            this.divForm.form.divPopBtn.form.btnInsert.addEventHandler("onclick",this.divForm_divPopBtn_btnInsert_onclick,this);
            this.grdExcel.addEventHandler("oncellclick",this.divForm_divGrd_grdList_oncellclick,this);
        };
        this.loadIncludeScript("COM023M04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
