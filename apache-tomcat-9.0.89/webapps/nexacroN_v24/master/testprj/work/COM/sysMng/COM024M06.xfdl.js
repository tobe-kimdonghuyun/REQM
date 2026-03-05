(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM024M06");
            this.set_titletext("계정관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userSe\" type=\"STRING\" size=\"256\"/><Column id=\"userNm\" type=\"STRING\" size=\"256\"/><Column id=\"coId\" type=\"STRING\" size=\"256\"/><Column id=\"coNm\" type=\"STRING\" size=\"256\"/><Column id=\"brno\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"vldtyEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"deptId\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"empExtNo\" type=\"STRING\" size=\"256\"/><Column id=\"empOnlnNo\" type=\"STRING\" size=\"256\"/><Column id=\"userMblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"mngrYn\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtCnt\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtYmd\" type=\"STRING\" size=\"256\"/><Column id=\"acntAutzrId\" type=\"STRING\" size=\"256\"/><Column id=\"acntAutzrNm\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgDt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"currentPageNo\" type=\"STRING\" size=\"256\"/><Column id=\"recordCountPerPage\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userNm\" type=\"STRING\" size=\"256\"/><Column id=\"empOnlnNo\" type=\"STRING\" size=\"256\"/><Column id=\"userSe\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"coNm\" type=\"STRING\" size=\"256\"/><Column id=\"brno\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"recordCountPerPage\">99999</Col><Col id=\"currentPageNo\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPage", this);
            obj._setContents("<ColumnInfo><Column id=\"totalRecordCount\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserSe", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cdId\">1</Col><Col id=\"cdNm\">O</Col></Row><Row><Col id=\"cdId\">0</Col><Col id=\"cdNm\">X</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcel", this);
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userSe\" type=\"STRING\" size=\"256\"/><Column id=\"userNm\" type=\"STRING\" size=\"256\"/><Column id=\"coId\" type=\"STRING\" size=\"256\"/><Column id=\"coNm\" type=\"STRING\" size=\"256\"/><Column id=\"brno\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"vldtyEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"deptId\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"empExtNo\" type=\"STRING\" size=\"256\"/><Column id=\"empOnlnNo\" type=\"STRING\" size=\"256\"/><Column id=\"userMblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"mngrYn\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtCnt\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtYmd\" type=\"STRING\" size=\"256\"/><Column id=\"acntAutzrId\" type=\"STRING\" size=\"256\"/><Column id=\"acntAutzrNm\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgDt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","0","60",null,null,"60","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("divSch","0","0","100.00%","260",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("PanelLabel","20.00","14","97.04%","165",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("0");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("50");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel02\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel03\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00\"/><PanelItem id=\"PanelItem08\" componentid=\"Panel02_00_00_00\"/><PanelItem id=\"PanelItem06\" componentid=\"Panel03_00_00\"/><PanelItem id=\"PanelItem09\" componentid=\"Panel03_00_00_00_00\"/><PanelItem id=\"PanelItem07\" componentid=\"Panel03_00_00_00\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel00","20.00","14","400","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("3");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03\"/><PanelItem id=\"PanelItem02\" componentid=\"edtUserId\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel03","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("10");
            obj.set_text("사용자ID");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel01","1694.00","398","400","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("2");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01\"/><PanelItem id=\"PanelItem02\" componentid=\"edtUserNm\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("1");
            obj.set_text("사용자명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtUserNm","841","24","65%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("12");
            obj.set_flexgrow("1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel02","1694.00","398","400","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("5");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel02\"/><PanelItem id=\"PanelItem02\" componentid=\"edtEmpOnlnNo\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel02","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("4");
            obj.set_text("휴대전화번호");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtEmpOnlnNo","140","80","65%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("11");
            obj.set_flexgrow("1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel03","1694.00","398","400","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("6");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"cmbUserSe\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01_00","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("13");
            obj.set_text("사용자구분");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("PanelClose","30","151","100%","30",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("7");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_SchLine");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnSchClose\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("PanelSchBtn","632","235","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("8");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnSch\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnSch","570","192","112","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("9");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Search");
            obj.set_fittocontents("width");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("14");
            obj.set_text("사업자\r\n등록번호");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtBrno","841","24","65%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("15");
            obj.set_flexgrow("1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel02_00_00_00","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("17");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00","678.00","145","400","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("18");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel02_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edtCoNm\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","1694.00","398","400","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("21");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"edtDeptNm\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01_01","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("19");
            obj.set_text("부서명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtDeptNm","841","24","65%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("20");
            obj.set_flexgrow("1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel03_00_00","1694.00","398","400","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("16");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel01_00_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"edtBrno\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel03_00_00_00","1694.00","398","400","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("23");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel01_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Combo01_00_00_00_01\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00_00","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("22");
            obj.set_text("파기여부");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00_00_00","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("24");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel03_00_00_00_00","1694.00","398","400","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("25");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel01_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"cmbUseYn\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtUserId","841","24","65%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("26");
            obj.set_flexgrow("1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cmbUserSe","788.00","145","20.42%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("27");
            obj.set_flexgrow("1");
            obj.set_innerdataset("dsUserSe");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtCoNm","841","24","65%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("28");
            obj.set_flexgrow("1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cmbUseYn","788.00","145","20.42%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("29");
            obj.set_flexgrow("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_divSch_form_cmbUseYn_innerdataset = new nexacro.NormalDataset("divForm_form_divSch_form_cmbUseYn_innerdataset", obj);
            divForm_form_divSch_form_cmbUseYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"datacolumn\">Y</Col><Col id=\"codecolumn\">Y</Col></Row><Row><Col id=\"datacolumn\">N</Col><Col id=\"codecolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_divSch_form_cmbUseYn_innerdataset);
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("Combo01_00_00_00_01","788.00","145","20.42%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("30");
            obj.set_flexgrow("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_divSch_form_Combo01_00_00_00_01_innerdataset = new nexacro.NormalDataset("divForm_form_divSch_form_Combo01_00_00_00_01_innerdataset", obj);
            divForm_form_divSch_form_Combo01_00_00_00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Y</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_divSch_form_Combo01_00_00_00_01_innerdataset);
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnSchClose","1251","185","30","30",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("31");
            obj.set_cssclass("btn_WF_SchClose");
            obj.set_visible("false");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divGrd","0","divSch:30","100.00%","600",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn",null,"44","75%","34","0",null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("4");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_verticalgap("10");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem05\" componentid=\"btnGrdDw\"/><PanelItem id=\"PanelItem02\" componentid=\"btnGrdDwAll\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Div("divPage","0",null,"100.00%","36",null,"0",null,null,"36",null,this.divForm.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_url("work::COM/util/paging/paging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_visible("true");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("grdList","0","PanelGrdBtn:10","100.00%",null,null,"divPage:10",null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsList");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"사용자ID\"/><Cell col=\"1\" text=\"사용자구분\"/><Cell col=\"2\" text=\"사용자명\"/><Cell col=\"3\" text=\"회사ID\"/><Cell col=\"4\" text=\"회사명\"/><Cell col=\"5\" text=\"사업자등록번호\"/><Cell col=\"6\" text=\"계약종료일\"/><Cell col=\"7\" text=\"업체종료일\"/><Cell col=\"8\" text=\"부서명\"/><Cell col=\"9\" text=\"내선번호\"/><Cell col=\"10\" text=\"휴대폰번호\"/><Cell col=\"11\" text=\"계정관리자여부\"/><Cell col=\"12\" text=\"사용여부\"/><Cell col=\"13\" text=\"계약대상여부\"/><Cell col=\"14\" text=\"연결계약건수\"/><Cell col=\"15\" text=\"계약생성일\"/><Cell col=\"16\" text=\"계정승인자\"/><Cell col=\"17\" text=\"장기미접속여부\"/><Cell col=\"18\" text=\"파기여부\"/><Cell col=\"19\" text=\"최근상태변화일시\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:userId\" displaytype=\"text\" cssclass=\"CellLink\"/><Cell col=\"1\" text=\"bind:userSe\" displaytype=\"combotext\" textAlign=\"center\" combodataset=\"dsUserSe\" combocodecol=\"cdId\" combodatacol=\"cdNm\"/><Cell col=\"2\" text=\"bind:userNm\" displaytype=\"text\"/><Cell col=\"3\" text=\"bind:coId\" displaytype=\"text\"/><Cell col=\"4\" text=\"bind:coNm\" displaytype=\"text\" cssclass=\"expr:state==&apos;0&apos;?&apos;CellTxtRed&apos;:&apos;CellTxtBlue&apos;\"/><Cell col=\"5\" text=\"bind:brno\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:ctrtEndYmd\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\" displaytype=\"date\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:vldtyEndYmd\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\" displaytype=\"date\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:deptNm\"/><Cell col=\"9\" text=\"bind:empExtNo\"/><Cell col=\"10\" text=\"bind:userMblTelno\"/><Cell col=\"11\" text=\"bind:mngrYn\" textAlign=\"center\"/><Cell col=\"12\" text=\"bind:useYn\" cssclass=\"CellLink\" displaytype=\"combotext\" textAlign=\"center\" combodataset=\"dsUseYn\" combocodecol=\"cdId\" combodatacol=\"cdNm\"/><Cell col=\"13\" text=\"bind:계약대상여부\" textAlign=\"center\"/><Cell col=\"14\" text=\"bind:ctrtCnt\" textAlign=\"right\"/><Cell col=\"15\" textAlign=\"center\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\" text=\"bind:ctrtYmd\"/><Cell col=\"16\" text=\"bind:acntAutzrNm\" textAlign=\"center\"/><Cell col=\"17\" tooltiptext=\"bind:장기미접속여부\" text=\"bind:장기미접속여부\"/><Cell col=\"18\" tooltiptext=\"bind:파기여부\" text=\"bind:파기여부\"/><Cell col=\"19\" text=\"bind:lastChgDt\" cssclass=\"CellEnd\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","100%","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("6");
            obj.set_text("계정 목록");
            obj.set_cssclass("sta_WF_Txt60018");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal00","1165","0","65","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_text("목록수");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDw","1368","3","124","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("5");
            obj.set_text("다운로드(엑셀)");
            obj.set_cssclass("btn_WF_GrdDw");
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

            obj = new Static("staTotal","0","40","22","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("7");
            obj.set_text("총");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal01","27","40","45","34",null,null,"43",null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("8");
            obj.set_text("1000");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal02","87","40","12","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("9");
            obj.set_text("건");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDwAll","1290","85","150","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("10");
            obj.set_text("전체다운로드(엑셀)");
            obj.set_cssclass("btn_WF_GrdDw");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("Panel00","1","0","155","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("11");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("width");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTotal00\"/><PanelItem id=\"PanelItem01\" componentid=\"cmbGrdList\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","44","79","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("12");
            obj.set_fittocontents("width");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTotal\"/><PanelItem id=\"PanelItem01\" componentid=\"staTotal01\"/><PanelItem id=\"PanelItem02\" componentid=\"staTotal02\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Grid("grdExcel","1491","0","10.68%","115",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsExcel");
            obj.set_autofittype("none");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"사용자ID\"/><Cell col=\"1\" text=\"사용자구분\"/><Cell col=\"2\" text=\"사용자명\"/><Cell col=\"3\" text=\"회사ID\"/><Cell col=\"4\" text=\"회사명\"/><Cell col=\"5\" text=\"사업자등록번호\"/><Cell col=\"6\" text=\"계약종료일\"/><Cell col=\"7\" text=\"업체종료일\"/><Cell col=\"8\" text=\"부서명\"/><Cell col=\"9\" text=\"내선번호\"/><Cell col=\"10\" text=\"휴대폰번호\"/><Cell col=\"11\" text=\"계정관리자여부\"/><Cell col=\"12\" text=\"사용여부\"/><Cell col=\"13\" text=\"계약대상여부\"/><Cell col=\"14\" text=\"연결계약건수\"/><Cell col=\"15\" text=\"계약생성일\"/><Cell col=\"16\" text=\"계정승인자\"/><Cell col=\"17\" text=\"장기미접속여부\"/><Cell col=\"18\" text=\"파기여부\"/><Cell col=\"19\" text=\"최근상태변화일시\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:userId\" displaytype=\"text\" cssclass=\"CellLink\"/><Cell col=\"1\" text=\"bind:userSe\" displaytype=\"combotext\" textAlign=\"center\" combodataset=\"dsUserSe\" combocodecol=\"cdId\" combodatacol=\"cdNm\"/><Cell col=\"2\" text=\"bind:userNm\" displaytype=\"text\"/><Cell col=\"3\" text=\"bind:coId\" displaytype=\"text\"/><Cell col=\"4\" text=\"bind:coNm\" displaytype=\"text\" cssclass=\"expr:state==&apos;0&apos;?&apos;CellTxtRed&apos;:&apos;CellTxtBlue&apos;\"/><Cell col=\"5\" text=\"bind:brno\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:ctrtEndYmd\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\" displaytype=\"date\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:vldtyEndYmd\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\" displaytype=\"date\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:deptNm\"/><Cell col=\"9\" text=\"bind:empExtNo\"/><Cell col=\"10\" text=\"bind:userMblTelno\"/><Cell col=\"11\" text=\"bind:mngrYn\" textAlign=\"center\"/><Cell col=\"12\" text=\"bind:useYn\" cssclass=\"CellLink\" displaytype=\"combotext\" textAlign=\"center\" combodataset=\"dsUseYn\" combocodecol=\"cdId\" combodatacol=\"cdNm\"/><Cell col=\"13\" text=\"bind:계약대상여부\" textAlign=\"center\"/><Cell col=\"14\" text=\"bind:ctrtCnt\" textAlign=\"right\"/><Cell col=\"15\" textAlign=\"center\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\" text=\"bind:ctrtYmd\"/><Cell col=\"16\" text=\"bind:acntAutzrNm\" textAlign=\"center\"/><Cell col=\"17\" tooltiptext=\"bind:장기미접속여부\" text=\"bind:장기미접속여부\"/><Cell col=\"18\" tooltiptext=\"bind:파기여부\" text=\"bind:파기여부\"/><Cell col=\"19\" text=\"bind:lastChgDt\" cssclass=\"CellEnd\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
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
                p.PanelLabel.set_horizontalgap("50");
                p.PanelLabel.set_fittocontents("height");
                p.PanelLabel.set_maxheight("");
                p.PanelLabel.move("20.00","14","97.04%","165",null,null);

                p.Panel00.set_taborder("3");
                p.Panel00.set_type("horizontal");
                p.Panel00.set_horizontalgap("10");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_flexgrow("1");
                p.Panel00.set_maxheight("");
                p.Panel00.set_minwidth("");
                p.Panel00.move("20.00","14","400","40",null,null);

                p.staLabel03.set_taborder("10");
                p.staLabel03.set_text("사용자ID");
                p.staLabel03.set_cssclass("sta_WF_SchLabel");
                p.staLabel03.set_flexshrink("0");
                p.staLabel03.set_maxwidth("");
                p.staLabel03.move("0","0","100","40",null,null);

                p.Panel01.set_taborder("2");
                p.Panel01.set_type("horizontal");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.set_flexgrow("1");
                p.Panel01.set_maxheight("");
                p.Panel01.set_minwidth("");
                p.Panel01.move("1694.00","398","400","40",null,null);

                p.staLabel01.set_taborder("1");
                p.staLabel01.set_text("사용자명");
                p.staLabel01.set_cssclass("sta_WF_SchLabel");
                p.staLabel01.set_flexshrink("0");
                p.staLabel01.set_maxwidth("");
                p.staLabel01.move("0","0","100","40",null,null);

                p.edtUserNm.set_taborder("12");
                p.edtUserNm.set_flexgrow("1");
                p.edtUserNm.move("841","24","65%","40",null,null);

                p.Panel02.set_taborder("5");
                p.Panel02.set_type("horizontal");
                p.Panel02.set_horizontalgap("10");
                p.Panel02.set_flexgrow("1");
                p.Panel02.set_minwidth("");
                p.Panel02.move("1694.00","398","400","40",null,null);

                p.staLabel02.set_taborder("4");
                p.staLabel02.set_text("휴대전화번호");
                p.staLabel02.set_cssclass("sta_WF_SchLabel");
                p.staLabel02.set_flexshrink("0");
                p.staLabel02.set_maxwidth("");
                p.staLabel02.move("0","0","100","40",null,null);

                p.edtEmpOnlnNo.set_taborder("11");
                p.edtEmpOnlnNo.set_flexgrow("1");
                p.edtEmpOnlnNo.move("140","80","65%","40",null,null);

                p.Panel03.set_taborder("6");
                p.Panel03.set_type("horizontal");
                p.Panel03.set_horizontalgap("10");
                p.Panel03.set_fittocontents("height");
                p.Panel03.set_flexgrow("1");
                p.Panel03.set_minwidth("");
                p.Panel03.move("1694.00","398","400","40",null,null);

                p.staLabel01_00.set_taborder("13");
                p.staLabel01_00.set_text("사용자구분");
                p.staLabel01_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel01_00.set_flexshrink("0");
                p.staLabel01_00.set_maxwidth("");
                p.staLabel01_00.move("0","0","100","40",null,null);

                p.PanelClose.set_taborder("7");
                p.PanelClose.set_type("vertical");
                p.PanelClose.set_cssclass("pal_WF_SchLine");
                p.PanelClose.set_flexcrossaxisalign("end");
                p.PanelClose.move("30","151","100%","30",null,null);

                p.PanelSchBtn.set_taborder("8");
                p.PanelSchBtn.set_flexmainaxisalign("center");
                p.PanelSchBtn.move("632","235","100%","40",null,null);

                p.btnSch.set_taborder("9");
                p.btnSch.set_text("조회하기");
                p.btnSch.set_cssclass("btn_WF_Search");
                p.btnSch.set_fittocontents("width");
                p.btnSch.move("570","192","112","40",null,null);

                p.staLabel01_00_00_00.set_taborder("14");
                p.staLabel01_00_00_00.set_text("사업자\r\n등록번호");
                p.staLabel01_00_00_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel01_00_00_00.set_flexshrink("0");
                p.staLabel01_00_00_00.set_maxwidth("");
                p.staLabel01_00_00_00.move("0","0","100","40",null,null);

                p.edtBrno.set_taborder("15");
                p.edtBrno.set_flexgrow("1");
                p.edtBrno.move("841","24","65%","40",null,null);

                p.staLabel02_00_00_00.set_taborder("17");
                p.staLabel02_00_00_00.set_text("회사명");
                p.staLabel02_00_00_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel02_00_00_00.set_flexshrink("0");
                p.staLabel02_00_00_00.set_minwidth("");
                p.staLabel02_00_00_00.move("0","0","100","40",null,null);

                p.Panel02_00_00_00.set_taborder("18");
                p.Panel02_00_00_00.set_type("horizontal");
                p.Panel02_00_00_00.set_horizontalgap("10");
                p.Panel02_00_00_00.set_flexgrow("1");
                p.Panel02_00_00_00.set_minwidth("");
                p.Panel02_00_00_00.move("678.00","145","400","40",null,null);

                p.Panel01_00.set_taborder("21");
                p.Panel01_00.set_type("horizontal");
                p.Panel01_00.set_horizontalgap("10");
                p.Panel01_00.set_flexgrow("1");
                p.Panel01_00.set_maxheight("");
                p.Panel01_00.set_minwidth("");
                p.Panel01_00.move("1694.00","398","400","40",null,null);

                p.staLabel01_01.set_taborder("19");
                p.staLabel01_01.set_text("부서명");
                p.staLabel01_01.set_cssclass("sta_WF_SchLabel");
                p.staLabel01_01.set_flexshrink("0");
                p.staLabel01_01.set_maxwidth("");
                p.staLabel01_01.move("0","0","100","40",null,null);

                p.edtDeptNm.set_taborder("20");
                p.edtDeptNm.set_flexgrow("1");
                p.edtDeptNm.move("841","24","65%","40",null,null);

                p.Panel03_00_00.set_taborder("16");
                p.Panel03_00_00.set_type("horizontal");
                p.Panel03_00_00.set_horizontalgap("10");
                p.Panel03_00_00.set_fittocontents("height");
                p.Panel03_00_00.set_flexgrow("1");
                p.Panel03_00_00.set_minwidth("");
                p.Panel03_00_00.move("1694.00","398","400","40",null,null);

                p.Panel03_00_00_00.set_taborder("23");
                p.Panel03_00_00_00.set_type("horizontal");
                p.Panel03_00_00_00.set_horizontalgap("10");
                p.Panel03_00_00_00.set_fittocontents("height");
                p.Panel03_00_00_00.set_flexgrow("1");
                p.Panel03_00_00_00.set_minwidth("");
                p.Panel03_00_00_00.move("1694.00","398","400","40",null,null);

                p.staLabel01_00_00_00_00.set_taborder("22");
                p.staLabel01_00_00_00_00.set_text("파기여부");
                p.staLabel01_00_00_00_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel01_00_00_00_00.set_flexshrink("0");
                p.staLabel01_00_00_00_00.set_maxwidth("");
                p.staLabel01_00_00_00_00.move("0","0","100","40",null,null);

                p.staLabel01_00_00_00_00_00.set_taborder("24");
                p.staLabel01_00_00_00_00_00.set_text("사용여부");
                p.staLabel01_00_00_00_00_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel01_00_00_00_00_00.set_flexshrink("0");
                p.staLabel01_00_00_00_00_00.set_maxwidth("");
                p.staLabel01_00_00_00_00_00.move("0","0","100","40",null,null);

                p.Panel03_00_00_00_00.set_taborder("25");
                p.Panel03_00_00_00_00.set_type("horizontal");
                p.Panel03_00_00_00_00.set_horizontalgap("10");
                p.Panel03_00_00_00_00.set_fittocontents("height");
                p.Panel03_00_00_00_00.set_flexgrow("1");
                p.Panel03_00_00_00_00.set_minwidth("");
                p.Panel03_00_00_00_00.move("1694.00","398","400","40",null,null);

                p.edtUserId.set_taborder("26");
                p.edtUserId.set_flexgrow("1");
                p.edtUserId.move("841","24","65%","40",null,null);

                p.cmbUserSe.set_taborder("27");
                p.cmbUserSe.set_flexgrow("1");
                p.cmbUserSe.set_innerdataset("dsUserSe");
                p.cmbUserSe.set_codecolumn("cdId");
                p.cmbUserSe.set_datacolumn("cdNm");
                p.cmbUserSe.set_text("전체");
                p.cmbUserSe.set_value("");
                p.cmbUserSe.set_index("-1");
                p.cmbUserSe.move("788.00","145","20.42%","40",null,null);

                p.edtCoNm.set_taborder("28");
                p.edtCoNm.set_flexgrow("1");
                p.edtCoNm.move("841","24","65%","40",null,null);

                p.cmbUseYn.set_taborder("29");
                p.cmbUseYn.set_flexgrow("1");
                p.cmbUseYn.set_innerdataset(divForm_form_divSch_form_cmbUseYn_innerdataset);
                p.cmbUseYn.set_codecolumn("codecolumn");
                p.cmbUseYn.set_datacolumn("datacolumn");
                p.cmbUseYn.set_text("전체");
                p.cmbUseYn.set_value("");
                p.cmbUseYn.set_index("0");
                p.cmbUseYn.move("788.00","145","20.42%","40",null,null);

                p.Combo01_00_00_00_01.set_taborder("30");
                p.Combo01_00_00_00_01.set_flexgrow("1");
                p.Combo01_00_00_00_01.set_innerdataset(divForm_form_divSch_form_Combo01_00_00_00_01_innerdataset);
                p.Combo01_00_00_00_01.set_codecolumn("codecolumn");
                p.Combo01_00_00_00_01.set_datacolumn("datacolumn");
                p.Combo01_00_00_00_01.set_text("전체");
                p.Combo01_00_00_00_01.set_value("");
                p.Combo01_00_00_00_01.set_index("0");
                p.Combo01_00_00_00_01.move("788.00","145","20.42%","40",null,null);

                p.btnSchClose.set_taborder("31");
                p.btnSchClose.set_cssclass("btn_WF_SchClose");
                p.btnSchClose.set_visible("false");
                p.btnSchClose.move("1251","185","30","30",null,null);
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
                p.PanelGrdBtn.set_taborder("4");
                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.set_fittocontents("height");
                p.PanelGrdBtn.set_verticalgap("10");
                p.PanelGrdBtn.set_flexwrap("wrap");
                p.PanelGrdBtn.move(null,"44","75%","34","0",null);

                p.divPage.set_taborder("0");
                p.divPage.set_text("Div00");
                p.divPage.set_url("work::COM/util/paging/paging.xfdl");
                p.divPage.set_formscrollbartype("none none");
                p.divPage.set_formscrolltype("none");
                p.divPage.set_visible("true");
                p.divPage.set_minheight("36");
                p.divPage.set_maxheight("");
                p.divPage.move("0",null,"100.00%","36",null,"0");

                p.grdList.set_taborder("1");
                p.grdList.set_binddataset("dsList");
                p.grdList.set_autofittype("none");
                p.grdList.move("0","PanelGrdBtn:10","100.00%",null,null,"divPage:10");

                p.Static00.set_taborder("6");
                p.Static00.set_text("계정 목록");
                p.Static00.set_cssclass("sta_WF_Txt60018");
                p.Static00.move("0","0","100%","34",null,null);

                p.staTotal00.set_taborder("2");
                p.staTotal00.set_text("목록수");
                p.staTotal00.set_cssclass("sta_WF_SchLabel");
                p.staTotal00.set_fittocontents("width");
                p.staTotal00.set_visible("true");
                p.staTotal00.move("1165","0","65","34",null,null);

                p.btnGrdDw.set_taborder("5");
                p.btnGrdDw.set_text("다운로드(엑셀)");
                p.btnGrdDw.set_cssclass("btn_WF_GrdDw");
                p.btnGrdDw.set_fittocontents("width");
                p.btnGrdDw.move("1368","3","124","34",null,null);

                p.cmbGrdList.set_taborder("3");
                p.cmbGrdList.set_visible("true");
                p.cmbGrdList.set_innerdataset(divForm_form_divGrd_form_cmbGrdList_innerdataset);
                p.cmbGrdList.set_codecolumn("codecolumn");
                p.cmbGrdList.set_datacolumn("datacolumn");
                p.cmbGrdList.set_text("10");
                p.cmbGrdList.set_value("10");
                p.cmbGrdList.set_index("0");
                p.cmbGrdList.move("1230","0","80","34",null,null);

                p.staTotal.set_taborder("7");
                p.staTotal.set_text("총");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("width");
                p.staTotal.move("0","40","22","34",null,null);

                p.staTotal01.set_taborder("8");
                p.staTotal01.set_text("1000");
                p.staTotal01.set_cssclass("sta_WF_Total");
                p.staTotal01.set_usedecorate("true");
                p.staTotal01.set_fittocontents("width");
                p.staTotal01.set_minwidth("43");
                p.staTotal01.set_maxwidth("");
                p.staTotal01.move("27","40","45","34",null,null);

                p.staTotal02.set_taborder("9");
                p.staTotal02.set_text("건");
                p.staTotal02.set_usedecorate("true");
                p.staTotal02.set_fittocontents("width");
                p.staTotal02.move("87","40","12","34",null,null);

                p.btnGrdDwAll.set_taborder("10");
                p.btnGrdDwAll.set_text("전체다운로드(엑셀)");
                p.btnGrdDwAll.set_cssclass("btn_WF_GrdDw");
                p.btnGrdDwAll.set_fittocontents("width");
                p.btnGrdDwAll.move("1290","85","150","34",null,null);

                p.Panel00.set_taborder("11");
                p.Panel00.set_horizontalgap("10");
                p.Panel00.set_fittocontents("width");
                p.Panel00.move("1","0","155","34",null,null);

                p.Panel01.set_taborder("12");
                p.Panel01.set_fittocontents("width");
                p.Panel01.move("0","44","79","34",null,null);
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
                p.PanelGrdBtn.set_fittocontents("height");
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divGrd.form.addLayout(obj.name, obj);
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
                p.divSch.move("0","0","100.00%","260",null,null);

                p.divGrd.set_taborder("1");
                p.divGrd.set_text("Div01");
                p.divGrd.set_fittocontents("height");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.move("0","divSch:30","100.00%","600",null,null);
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
            //-- Default Layout : this.divTitle
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("계정관리");

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_formscrollbartype("none none");
                p.divForm.set_formscrolltype("none");
                p.divForm.set_fittocontents("height");
                p.divForm.set_maxwidth("");
                p.divForm.move("0","60",null,null,"60","0");

                p.divTitle.set_taborder("1");
                p.divTitle.set_text("");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.set_formscrolltype("none");
                p.divTitle.set_maxwidth("");
                p.divTitle.move("0","0",null,"50","60",null);

                p.grdExcel.set_taborder("2");
                p.grdExcel.set_binddataset("dsExcel");
                p.grdExcel.set_autofittype("none");
                p.grdExcel.set_visible("false");
                p.grdExcel.move("1491","0","10.68%","115",null,null);
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
                p.divForm.move("0","60",null,null,"0","0");

                p.divTitle.move("0","0",null,"50","0",null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.divSch.form.edtUserId","value","dsSearch","userId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.divSch.form.edtUserNm","value","dsSearch","userNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.divSch.form.edtEmpOnlnNo","value","dsSearch","empOnlnNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.divSch.form.cmbUserSe","value","dsSearch","userSe");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.divSch.form.edtDeptNm","value","dsSearch","deptNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.divSch.form.edtCoNm","value","dsSearch","coNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.divSch.form.edtBrno","value","dsSearch","brno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divForm.form.divSch.form.cmbUseYn","value","dsSearch","useYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divForm.form.divGrd.form.staTotal01","text","dsPage","totalRecordCount");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","work::COM/util/paging/paging.xfdl");
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
        };
        
        // User Script
        this.registerScript("COM024M06.xfdl", function() {
        /**
        *  PcMdi 프로젝트
        *  @FileName 	COM024M06.xfdl
        *  @Creator 	TOBESOFT
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
        	var strSvcUrl   = "sysMng/acntListInq.do";
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
        	var strSvcUrl   = "sysMng/acntListInq.do";
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

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	this.gfnCmmCode("userSe", "dsUserSe", "EMPCAT", "A");
        	this.divForm.form.divSch.form.cmbUserSe.index = 0;
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divForm_divSch_btnSch_onclick = function(obj,e)
        {
        	this.cfnSearch(1);
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

        this.divForm_divGrd_grdList_oncellclick = function(obj,e)
        {
        	if(e.cell == 0)
        	{
        		var sTitle = "직원상세";
        		var objArg   = {
        			"userId" : this.dsList.getColumn(e.row, "userId")
        		};

        		var objOption = {
        			popuptype: "modal"	//modal,modaless
        			, width: 1400
        			, height: 1000
        			, autosize: false
        			, title: sTitle
        			, resize: true
        			, titlebar: true
        		};
        		var sPopupCallBack = "fnPopupCallback";

        		this.gfnOpenPopup("COM024P061", "work::COM/sysMng/COM024P061.xfdl", objArg, sPopupCallBack, objOption);
        	}
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
            this.divForm.form.divSch.form.cmbUserSe.addEventHandler("onitemchanged",this.divForm_divSch_Combo01_onitemchanged,this);
            this.divForm.form.divSch.form.cmbUseYn.addEventHandler("onitemchanged",this.divForm_divSch_Combo01_onitemchanged,this);
            this.divForm.form.divSch.form.Combo01_00_00_00_01.addEventHandler("onitemchanged",this.divForm_divSch_Combo01_onitemchanged,this);
            this.divForm.form.divSch.form.btnSchClose.addEventHandler("onclick",this.divForm_divSch_btnSchClose_onclick,this);
            this.divForm.form.divGrd.form.grdList.addEventHandler("oncellclick",this.divForm_divGrd_grdList_oncellclick,this);
            this.divForm.form.divGrd.form.btnGrdDw.addEventHandler("onclick",this.divForm_divGrd_btnGrdDw_onclick,this);
            this.divForm.form.divGrd.form.cmbGrdList.addEventHandler("onitemchanged",this.divForm_divGrd_cmbGrdList_onitemchanged,this);
            this.divForm.form.divGrd.form.btnGrdDwAll.addEventHandler("onclick",this.divForm_divGrd_btnGrdDwAll_onclick,this);
            this.grdExcel.addEventHandler("oncellclick",this.divForm_divGrd_grdList_oncellclick,this);
        };
        this.loadIncludeScript("COM024M06.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
