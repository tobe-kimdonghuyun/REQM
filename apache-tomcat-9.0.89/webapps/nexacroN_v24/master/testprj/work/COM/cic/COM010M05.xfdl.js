(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM010M05");
            this.set_titletext("진행목록조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"currentPageNo\" type=\"STRING\" size=\"256\"/><Column id=\"recordCountPerPage\" type=\"STRING\" size=\"256\"/><Column id=\"sDate\" type=\"STRING\" size=\"256\"/><Column id=\"eDate\" type=\"STRING\" size=\"256\"/><Column id=\"askInfoId\" type=\"STRING\" size=\"256\"/><Column id=\"userNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"srvcSe\" type=\"STRING\" size=\"256\"/><Column id=\"aplySe\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"currentPageNo\">1</Col><Col id=\"recordCountPerPage\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"askInfoId\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userTelno\" type=\"STRING\" size=\"256\"/><Column id=\"userEml\" type=\"STRING\" size=\"256\"/><Column id=\"srvcSe\" type=\"STRING\" size=\"256\"/><Column id=\"aplySe\" type=\"STRING\" size=\"256\"/><Column id=\"etcMttr\" type=\"STRING\" size=\"256\"/><Column id=\"askCn\" type=\"STRING\" size=\"256\"/><Column id=\"ocrnYmd\" type=\"STRING\" size=\"256\"/><Column id=\"ocrnPstn\" type=\"STRING\" size=\"256\"/><Column id=\"trgtCoChcYn\" type=\"STRING\" size=\"256\"/><Column id=\"trgtCoId\" type=\"STRING\" size=\"256\"/><Column id=\"trgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"askStts\" type=\"STRING\" size=\"256\"/><Column id=\"clrId\" type=\"STRING\" size=\"256\"/><Column id=\"clrNm\" type=\"STRING\" size=\"256\"/><Column id=\"rcptDt\" type=\"STRING\" size=\"256\"/><Column id=\"rcptCn\" type=\"STRING\" size=\"256\"/><Column id=\"prcrId\" type=\"STRING\" size=\"256\"/><Column id=\"prcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcsDt\" type=\"STRING\" size=\"256\"/><Column id=\"prcsCn\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"userNm\" type=\"STRING\" size=\"256\"/><Column id=\"coNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPage", this);
            obj._setContents("<ColumnInfo><Column id=\"totalRecordCount\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrvcSe", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cdNm\">전체</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAplySe", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cdNm\">전체</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAskStts", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcel", this);
            obj._setContents("<ColumnInfo><Column id=\"askInfoId\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userTelno\" type=\"STRING\" size=\"256\"/><Column id=\"userEml\" type=\"STRING\" size=\"256\"/><Column id=\"srvcSe\" type=\"STRING\" size=\"256\"/><Column id=\"aplySe\" type=\"STRING\" size=\"256\"/><Column id=\"etcMttr\" type=\"STRING\" size=\"256\"/><Column id=\"askCn\" type=\"STRING\" size=\"256\"/><Column id=\"ocrnYmd\" type=\"STRING\" size=\"256\"/><Column id=\"ocrnPstn\" type=\"STRING\" size=\"256\"/><Column id=\"trgtCoChcYn\" type=\"STRING\" size=\"256\"/><Column id=\"trgtCoId\" type=\"STRING\" size=\"256\"/><Column id=\"trgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"askStts\" type=\"STRING\" size=\"256\"/><Column id=\"clrId\" type=\"STRING\" size=\"256\"/><Column id=\"clrNm\" type=\"STRING\" size=\"256\"/><Column id=\"rcptDt\" type=\"STRING\" size=\"256\"/><Column id=\"rcptCn\" type=\"STRING\" size=\"256\"/><Column id=\"prcrId\" type=\"STRING\" size=\"256\"/><Column id=\"prcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcsDt\" type=\"STRING\" size=\"256\"/><Column id=\"prcsCn\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"userNm\" type=\"STRING\" size=\"256\"/><Column id=\"coNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Div("divForm","0","divTitle:20",null,"818","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("divSch","0","0","100%","198",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panLabel","20","14","100%","102",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("0");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("40");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"pan00\"/><PanelItem id=\"PanelItem04\" componentid=\"pan01\"/><PanelItem id=\"PanelItem00\" componentid=\"pan02\"/><PanelItem id=\"PanelItem05\" componentid=\"pan03_00\"/><PanelItem id=\"PanelItem06\" componentid=\"pan01_00\"/><PanelItem id=\"PanelItem03\" componentid=\"pan03\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan02","1694.00","398","400","45",null,null,null,null,"45",null,this.divForm.form.divSch.form);
            obj.set_taborder("2");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01\"/><PanelItem id=\"PanelItem02\" componentid=\"Edit01\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("1");
            obj.set_text("작성자명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("3");
            obj.set_text("신청ID");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan01","1694.00","398","400","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("4");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Edit00\"/><PanelItem id=\"PanelItem00\" componentid=\"staLabel\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit01_00\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cmbAplySe","626","98","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("12");
            obj.set_flexgrow("1");
            obj.set_innerdataset("dsAplySe");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel02","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("5");
            obj.set_text("신청유형");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan03","1694.00","398","400","45",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("6");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel02\"/><PanelItem id=\"PanelItem02\" componentid=\"cmbAplySe\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan00","20.00","67","400","45",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("7");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("nowrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staLabel03\"/><PanelItem id=\"PanelItem01\" componentid=\"divCal\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel03","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("13");
            obj.set_text("신청일자");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panClose","30","151","100%","30",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_SchLine");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnSchClose\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnSchClose","1251","185","30","30",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_SchClose");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panSchBtn","632","235","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("10");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnSch\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnSch","570","192","112","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("11");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Search");
            obj.set_fittocontents("width");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divCal","1030","75","320","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("14");
            obj.set_text("Div00");
            obj.set_flexgrow("1");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","0","0","145","40",null,null,null,null,null,null,this.divForm.form.divSch.form.divCal.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.divSch.form.divCal.addChild(obj.name, obj);

            obj = new Static("staDash","Calendar00:10","0","10","40",null,null,null,null,null,null,this.divForm.form.divSch.form.divCal.form);
            obj.set_taborder("1");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_Dash");
            this.divForm.form.divSch.form.divCal.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","staDash:10","0","145","40",null,null,null,null,null,null,this.divForm.form.divSch.form.divCal.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.divSch.form.divCal.addChild(obj.name, obj);

            obj = new Static("staLabel02_00","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("15");
            obj.set_text("처리자명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan03_00","1694.00","398","400","45",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("16");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Edit01_00_01\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("Edit01","163","80","65%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("17");
            obj.set_displaynulltext("검색어 입력");
            obj.set_flexgrow("1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("Edit01_00","163","80","65%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("18");
            obj.set_displaynulltext("검색어 입력");
            obj.set_flexgrow("1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel00","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("19");
            obj.set_text("서비스유형");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan01_00","1694.00","398","400","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("20");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Edit00\"/><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem01\" componentid=\"cmbSrvcSe\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("Edit01_00_01","163","80","65%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("21");
            obj.set_displaynulltext("검색어 입력");
            obj.set_flexgrow("1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cmbSrvcSe","626","98","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("22");
            obj.set_flexgrow("1");
            obj.set_innerdataset("dsSrvcSe");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divGrd","0","divSch:30","100.00%","590",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","100%","40",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("9");
            obj.set_text("진행목록");
            obj.set_cssclass("sta_WF_Txt50022");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","40","150","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("12");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTotal\"/><PanelItem id=\"PanelItem01\" componentid=\"staTotal01\"/><PanelItem id=\"PanelItem02\" componentid=\"staTotal02\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn","870","40","550","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("4");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem03\" componentid=\"btnGrdDel\"/><PanelItem id=\"PanelItem04\" componentid=\"btnGrdRegi\"/><PanelItem id=\"PanelItem06\" componentid=\"btnGrdDw\"/><PanelItem id=\"PanelItem02\" componentid=\"btnGrdDwAll\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("grdList","0","94","100.00%","449",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsList");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"신청번호\"/><Cell col=\"1\" text=\"신청유형\"/><Cell col=\"2\" text=\"서비스유형\"/><Cell col=\"3\" text=\"상태\"/><Cell col=\"4\" text=\"발생일시\"/><Cell col=\"5\" text=\"작성일시\"/><Cell col=\"6\" text=\"작성자명\"/><Cell col=\"7\" text=\"연락처\"/><Cell col=\"8\" text=\"업체명\"/><Cell col=\"9\" text=\"내용\"/><Cell col=\"10\" text=\"처리자명\"/><Cell col=\"11\" text=\"처리완료일시\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:askInfoId\" cssclass=\"CellLink\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:aplySe\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"dsAplySe\" combocodecol=\"cdId\" combodatacol=\"cdNm\"/><Cell col=\"2\" text=\"bind:srvcSe\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"dsSrvcSe\" combocodecol=\"cdId\" combodatacol=\"cdNm\"/><Cell col=\"3\" text=\"bind:askStts\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"dsAskStts\" combocodecol=\"cdId\" combodatacol=\"cdNm\"/><Cell col=\"4\" text=\"bind:ocrnYmd\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\" displaytype=\"date\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:frstRegDt\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\" displaytype=\"date\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:userNm\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:userTelno\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:coNm\"/><Cell col=\"9\" text=\"bind:askCn\"/><Cell col=\"10\" text=\"bind:prcrNm\" textAlign=\"center\"/><Cell col=\"11\" text=\"bind:prcsDt\" cssclass=\"CellEnd\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\" textAlign=\"center\"/></Band></Format></Formats>");
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

            obj = new Button("btnGrdDw","774.00","10","124","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("5");
            obj.set_text("다운로드(엑셀)");
            obj.set_cssclass("btn_WF_GrdDw");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","40","27","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("8");
            obj.set_text("총");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal01","staTotal:0","40","43","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("7");
            obj.set_text("1000");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal02","staTotal01:0","40","30","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("6");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDel","316.00","0","45","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("10");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("false");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdRegi","371.00","0","45","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("11");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_SmallBlack");
            obj.set_visible("false");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("Panel01","151","0","180","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("13");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTotal00\"/><PanelItem id=\"PanelItem01\" componentid=\"cmbGrdList\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Div("divPage","0","633","100.00%","36",null,null,null,null,"36",null,this.divForm.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_url("work::COM/util/paging/paging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_visible("true");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDwAll","774.00","10","150","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("14");
            obj.set_text("전체다운로드(엑셀)");
            obj.set_cssclass("btn_WF_GrdDw");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("grdExcel","1500","10","16.89%","180",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsExcel");
            obj.set_autofittype("none");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"신청번호\"/><Cell col=\"1\" text=\"신청유형\"/><Cell col=\"2\" text=\"서비스유형\"/><Cell col=\"3\" text=\"상태\"/><Cell col=\"4\" text=\"발생일시\"/><Cell col=\"5\" text=\"작성일시\"/><Cell col=\"6\" text=\"작성자명\"/><Cell col=\"7\" text=\"연락처\"/><Cell col=\"8\" text=\"업체명\"/><Cell col=\"9\" text=\"내용\"/><Cell col=\"10\" text=\"처리자명\"/><Cell col=\"11\" text=\"처리완료일시\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:askInfoId\" cssclass=\"CellLink\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:aplySe\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"dsAplySe\" combocodecol=\"cdId\" combodatacol=\"cdNm\"/><Cell col=\"2\" text=\"bind:srvcSe\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"dsSrvcSe\" combocodecol=\"cdId\" combodatacol=\"cdNm\"/><Cell col=\"3\" text=\"bind:askStts\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"dsAskStts\" combocodecol=\"cdId\" combodatacol=\"cdNm\"/><Cell col=\"4\" text=\"bind:ocrnYmd\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\" displaytype=\"date\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:frstRegDt\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\" displaytype=\"date\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:userNm\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:userTelno\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:coNm\"/><Cell col=\"9\" text=\"bind:askCn\"/><Cell col=\"10\" text=\"bind:prcrNm\" textAlign=\"center\"/><Cell col=\"11\" text=\"bind:prcsDt\" cssclass=\"CellEnd\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\" textAlign=\"center\"/></Band></Format></Formats>");
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
                p.Calendar00.move("0","0","145","40",null,null);

                p.staDash.set_taborder("1");
                p.staDash.set_text("~");
                p.staDash.set_cssclass("sta_WF_Dash");
                p.staDash.move("Calendar00:10","0","10","40",null,null);

                p.Calendar01.set_taborder("2");
                p.Calendar01.set_dateformat("yyyy-MM-dd");
                p.Calendar01.move("staDash:10","0","145","40",null,null);
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
                p.panLabel.set_taborder("0");
                p.panLabel.set_verticalgap("8");
                p.panLabel.set_flexwrap("wrap");
                p.panLabel.set_spacing("0px 0px 10px 0px");
                p.panLabel.set_type("horizontal");
                p.panLabel.set_flexcrossaxisalign("start");
                p.panLabel.set_horizontalgap("40");
                p.panLabel.set_fittocontents("height");
                p.panLabel.set_maxheight("");
                p.panLabel.move("20","14","100%","102",null,null);

                p.pan02.set_taborder("2");
                p.pan02.set_type("horizontal");
                p.pan02.set_horizontalgap("10");
                p.pan02.set_minheight("45");
                p.pan02.set_maxheight("");
                p.pan02.set_minwidth("");
                p.pan02.move("1694.00","398","400","45",null,null);

                p.staLabel01.set_taborder("1");
                p.staLabel01.set_text("작성자명");
                p.staLabel01.set_cssclass("sta_WF_SchLabel");
                p.staLabel01.set_flexshrink("0");
                p.staLabel01.set_minwidth("");
                p.staLabel01.move("0","0","100","40",null,null);

                p.staLabel.set_taborder("3");
                p.staLabel.set_text("신청ID");
                p.staLabel.set_cssclass("sta_WF_SchLabel");
                p.staLabel.set_flexshrink("0");
                p.staLabel.set_minwidth("");
                p.staLabel.move("0","0","100","40",null,null);

                p.pan01.set_taborder("4");
                p.pan01.set_type("horizontal");
                p.pan01.set_horizontalgap("10");
                p.pan01.set_maxheight("");
                p.pan01.set_minwidth("");
                p.pan01.move("1694.00","398","400","40",null,null);

                p.cmbAplySe.set_taborder("12");
                p.cmbAplySe.set_flexgrow("1");
                p.cmbAplySe.set_innerdataset("dsAplySe");
                p.cmbAplySe.set_codecolumn("cdId");
                p.cmbAplySe.set_datacolumn("cdNm");
                p.cmbAplySe.set_text("전체");
                p.cmbAplySe.set_value("");
                p.cmbAplySe.set_index("0");
                p.cmbAplySe.move("626","98","100%","40",null,null);

                p.staLabel02.set_taborder("5");
                p.staLabel02.set_text("신청유형");
                p.staLabel02.set_cssclass("sta_WF_SchLabel");
                p.staLabel02.set_flexshrink("0");
                p.staLabel02.set_minwidth("");
                p.staLabel02.move("0","0","100","40",null,null);

                p.pan03.set_taborder("6");
                p.pan03.set_type("horizontal");
                p.pan03.set_horizontalgap("10");
                p.pan03.set_minwidth("");
                p.pan03.move("1694.00","398","400","45",null,null);

                p.pan00.set_taborder("7");
                p.pan00.set_type("horizontal");
                p.pan00.set_horizontalgap("10");
                p.pan00.set_flexwrap("nowrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_minwidth("");
                p.pan00.move("20.00","67","400","45",null,null);

                p.staLabel03.set_taborder("13");
                p.staLabel03.set_text("신청일자");
                p.staLabel03.set_cssclass("sta_WF_SchLabel");
                p.staLabel03.set_flexshrink("0");
                p.staLabel03.set_maxwidth("");
                p.staLabel03.move("0","0","100","40",null,null);

                p.panClose.set_taborder("9");
                p.panClose.set_type("vertical");
                p.panClose.set_cssclass("pal_WF_SchLine");
                p.panClose.set_flexcrossaxisalign("end");
                p.panClose.move("30","151","100%","30",null,null);

                p.btnSchClose.set_taborder("8");
                p.btnSchClose.set_cssclass("btn_WF_SchClose");
                p.btnSchClose.move("1251","185","30","30",null,null);

                p.panSchBtn.set_taborder("10");
                p.panSchBtn.set_flexmainaxisalign("center");
                p.panSchBtn.move("632","235","100%","40",null,null);

                p.btnSch.set_taborder("11");
                p.btnSch.set_text("조회하기");
                p.btnSch.set_cssclass("btn_WF_Search");
                p.btnSch.set_fittocontents("width");
                p.btnSch.move("570","192","112","40",null,null);

                p.divCal.set_taborder("14");
                p.divCal.set_text("Div00");
                p.divCal.set_flexgrow("1");
                p.divCal.set_formscrollbartype("none none");
                p.divCal.set_formscrolltype("none");
                p.divCal.move("1030","75","320","40",null,null);

                p.staLabel02_00.set_taborder("15");
                p.staLabel02_00.set_text("처리자명");
                p.staLabel02_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel02_00.set_flexshrink("0");
                p.staLabel02_00.set_minwidth("");
                p.staLabel02_00.move("0","0","100","40",null,null);

                p.pan03_00.set_taborder("16");
                p.pan03_00.set_type("horizontal");
                p.pan03_00.set_horizontalgap("10");
                p.pan03_00.set_minwidth("");
                p.pan03_00.move("1694.00","398","400","45",null,null);

                p.Edit01.set_taborder("17");
                p.Edit01.set_displaynulltext("검색어 입력");
                p.Edit01.set_flexgrow("1");
                p.Edit01.move("163","80","65%","40",null,null);

                p.Edit01_00.set_taborder("18");
                p.Edit01_00.set_displaynulltext("검색어 입력");
                p.Edit01_00.set_flexgrow("1");
                p.Edit01_00.move("163","80","65%","40",null,null);

                p.staLabel00.set_taborder("19");
                p.staLabel00.set_text("서비스유형");
                p.staLabel00.set_cssclass("sta_WF_SchLabel");
                p.staLabel00.set_flexshrink("0");
                p.staLabel00.set_minwidth("");
                p.staLabel00.move("0","0","100","40",null,null);

                p.pan01_00.set_taborder("20");
                p.pan01_00.set_type("horizontal");
                p.pan01_00.set_horizontalgap("10");
                p.pan01_00.set_maxheight("");
                p.pan01_00.set_minwidth("");
                p.pan01_00.move("1694.00","398","400","40",null,null);

                p.Edit01_00_01.set_taborder("21");
                p.Edit01_00_01.set_displaynulltext("검색어 입력");
                p.Edit01_00_01.set_flexgrow("1");
                p.Edit01_00_01.move("163","80","65%","40",null,null);

                p.cmbSrvcSe.set_taborder("22");
                p.cmbSrvcSe.set_flexgrow("1");
                p.cmbSrvcSe.set_innerdataset("dsSrvcSe");
                p.cmbSrvcSe.set_codecolumn("cdId");
                p.cmbSrvcSe.set_datacolumn("cdNm");
                p.cmbSrvcSe.set_text("전체");
                p.cmbSrvcSe.set_value("");
                p.cmbSrvcSe.set_index("0");
                p.cmbSrvcSe.move("626","98","100%","40",null,null);
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
                p.pan02.move("1694.00","398","100%","45",null,null);

                p.pan01.move("1694.00","398","100%","40",null,null);

                p.pan03.move("1694.00","398","100%","40",null,null);

                p.pan00.set_flexwrap("wrap");
                p.pan00.move("20.00","67","100%","80",null,null);

                p.pan03_00.move("1694.00","398","100%","40",null,null);

                p.pan01_00.move("1694.00","398","100%","40",null,null);

                p.panLabel.move("20","14","100%","335",null,null);
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
                p.Static00.set_taborder("9");
                p.Static00.set_text("진행목록");
                p.Static00.set_cssclass("sta_WF_Txt50022");
                p.Static00.move("0","0","100%","40",null,null);

                p.Panel00.set_taborder("12");
                p.Panel00.move("0","40","150","34",null,null);

                p.PanelGrdBtn.set_taborder("4");
                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.set_flexgrow("1");
                p.PanelGrdBtn.move("870","40","550","34",null,null);

                p.grdList.set_taborder("1");
                p.grdList.set_binddataset("dsList");
                p.grdList.set_autofittype("none");
                p.grdList.move("0","94","100.00%","449",null,null);

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
                p.staTotal.move("0","40","27","34",null,null);

                p.staTotal01.set_taborder("7");
                p.staTotal01.set_text("1000");
                p.staTotal01.set_cssclass("sta_WF_Total");
                p.staTotal01.set_usedecorate("true");
                p.staTotal01.move("staTotal:0","40","43","34",null,null);

                p.staTotal02.set_taborder("6");
                p.staTotal02.set_text("건");
                p.staTotal02.set_usedecorate("true");
                p.staTotal02.move("staTotal01:0","40","30","34",null,null);

                p.btnGrdDel.set_taborder("10");
                p.btnGrdDel.set_text("삭제");
                p.btnGrdDel.set_cssclass("btn_WF_SmallRed");
                p.btnGrdDel.set_visible("false");
                p.btnGrdDel.set_fittocontents("width");
                p.btnGrdDel.move("316.00","0","45","34",null,null);

                p.btnGrdRegi.set_taborder("11");
                p.btnGrdRegi.set_text("등록");
                p.btnGrdRegi.set_cssclass("btn_WF_SmallBlack");
                p.btnGrdRegi.set_visible("false");
                p.btnGrdRegi.set_fittocontents("width");
                p.btnGrdRegi.move("371.00","0","45","34",null,null);

                p.Panel01.set_taborder("13");
                p.Panel01.set_flexmainaxisalign("end");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.set_verticalgap("10");
                p.Panel01.move("151","0","180","34",null,null);

                p.divPage.set_taborder("0");
                p.divPage.set_text("Div00");
                p.divPage.set_url("work::COM/util/paging/paging.xfdl");
                p.divPage.set_formscrollbartype("none none");
                p.divPage.set_formscrolltype("none");
                p.divPage.set_visible("true");
                p.divPage.set_minheight("36");
                p.divPage.set_maxheight("");
                p.divPage.move("0","633","100.00%","36",null,null);

                p.btnGrdDwAll.set_taborder("14");
                p.btnGrdDwAll.set_text("전체다운로드(엑셀)");
                p.btnGrdDwAll.set_cssclass("btn_WF_GrdDw");
                p.btnGrdDwAll.set_visible("true");
                p.btnGrdDwAll.set_fittocontents("width");
                p.btnGrdDwAll.move("774.00","10","150","34",null,null);
            	}
            );
            obj.set_verticalgap("10");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            this.divForm.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divGrd.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.PanelGrdBtn.set_flexgrow("1");
                p.PanelGrdBtn.move(null,null,"440",null,null,null);
            	}
            );
            obj.set_verticalgap("8");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
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
                p.divSch.move("0","0","100%","198",null,null);

                p.divGrd.set_taborder("1");
                p.divGrd.set_text("Div01");
                p.divGrd.set_fittocontents("height");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.move("0","divSch:30","100.00%","590",null,null);
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
                p.divSch.move("0","0","100%","433",null,null);

                p.divGrd.move("0","divSch:30","100%","596",null,null);
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
                p.set_titletext("진행목록조회");

                p.divTitle.set_taborder("1");
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
                p.divForm.move("0","divTitle:20",null,"818","60",null);

                p.grdExcel.set_taborder("2");
                p.grdExcel.set_binddataset("dsExcel");
                p.grdExcel.set_autofittype("none");
                p.grdExcel.set_visible("false");
                p.grdExcel.move("1500","10","16.89%","180",null,null);
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
                p.divForm.move("0","divTitle:20","100%","1069",null,null);

                p.divTitle.move("0","0",null,"50","0",null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.divGrd.form.staTotal01","text","dsPage","totalRecordCount");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.divSch.form.divCal.form.Calendar00","value","dsSearch","sDate");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.divSch.form.divCal.form.Calendar01","value","dsSearch","eDate");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.divSch.form.Edit01_00","value","dsSearch","askInfoId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.divSch.form.Edit01","value","dsSearch","userNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.divSch.form.Edit01_00_01","value","dsSearch","prcrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.divSch.form.cmbSrvcSe","value","dsSearch","srvcSe");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divForm.form.divSch.form.cmbAplySe","value","dsSearch","aplySe");
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
        this.registerScript("COM010M05.xfdl", function() {
        /**
        *  PcMdi 프로젝트
        *  @FileName 	COM010M05.xfdl
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

        	this.dsSearch.setColumn(0, "userId", this.objApp.gdsUser.getColumn(0, "userId"));
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

        //닫기
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
        	var strSvcUrl   = "cic/myGoodDsctnPrgrsListInq.do";
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
        	var strSvcUrl   = "cic/myGoodDsctnPrgrsListInq.do";
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

        /**
        	page	//페이지 번호 리턴
        **/
        //페이징 버튼 콜백함수
        this.pagingCallback = function(page)
        {
        	this.cfnSearch(page);
        };

        this.fnPopupCallback = function(sPopupId, sRtn)
        {
        	if(sPopupId =="askInfoPopup") {
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
        	this.gfnCmmCode("srvcSe", "dsSrvcSe", "ASK_SRVC_SE", "A");
        	this.gfnCmmCode("aplySe", "dsAplySe", "ASK_APLY_SE", "A");
        	this.gfnCmmCode("askStts", "dsAskStts", "ASK_STTS", "");
        	this.divForm.form.divSch.form.cmbSrvcSe.index = 0;
        	this.divForm.form.divSch.form.cmbAplySe.index = 0;
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        // 조회
        this.divForm_divSch_btnSch_onclick = function(obj,e)
        {
        	this.cfnSearch(1);
        };

        // 엑셀다운
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
        	if(e.cell == 0) {
        		var sTitle = "신청정보확인";
        		var objArg   = {"askInfoId" : this.dsList.getColumn(e.row, "askInfoId")
        					   };

        		var objOption = {
        			popuptype: "modal"	//modal,modaless
        			//, width: 1200
        			//, height: 950
        			, autosize: true
        			, title: sTitle
        			, resize: true
        			, titlebar: true
        		};
        		var sPopupCallBack = "fnPopupCallback";

        		this.gfnOpenPopup("askInfoPopup", "work::COM/cic/COM010P051.xfdl", objArg, sPopupCallBack, objOption);
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
            this.divForm.form.divSch.form.staLabel.addEventHandler("onclick",this.divForm_divSch_staLabel_onclick,this);
            this.divForm.form.divSch.form.cmbAplySe.addEventHandler("onitemchanged",this.divForm_divSch_Combo01_onitemchanged,this);
            this.divForm.form.divSch.form.staLabel02.addEventHandler("onclick",this.divForm_Div00_sta00_00_01_01_onclick,this);
            this.divForm.form.divSch.form.btnSchClose.addEventHandler("onclick",this.divForm_divSch_btnSchClose_onclick,this);
            this.divForm.form.divSch.form.btnSch.addEventHandler("onclick",this.divForm_divSch_btnSch_onclick,this);
            this.divForm.form.divSch.form.staLabel02_00.addEventHandler("onclick",this.divForm_Div00_sta00_00_01_01_onclick,this);
            this.divForm.form.divSch.form.staLabel00.addEventHandler("onclick",this.divForm_divSch_staLabel_onclick,this);
            this.divForm.form.divSch.form.cmbSrvcSe.addEventHandler("onitemchanged",this.divForm_divSch_Combo01_onitemchanged,this);
            this.divForm.form.divGrd.form.grdList.addEventHandler("oncellclick",this.divForm_divGrd_grdList_oncellclick,this);
            this.divForm.form.divGrd.form.cmbGrdList.addEventHandler("onitemchanged",this.divForm_divGrd_cmbGrdList_onitemchanged,this);
            this.divForm.form.divGrd.form.btnGrdDw.addEventHandler("onclick",this.divForm_divGrd_btnGrdDw_onclick,this);
            this.divForm.form.divGrd.form.btnGrdDwAll.addEventHandler("onclick",this.divForm_divGrd_btnGrdDwAll_onclick,this);
            this.grdExcel.addEventHandler("oncellclick",this.divForm_divGrd_grdList_oncellclick,this);
        };
        this.loadIncludeScript("COM010M05.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
