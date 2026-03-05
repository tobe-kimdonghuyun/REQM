(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("REN002M02");
            this.set_titletext("임차희망서 접수목록(처리자)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"chc\" type=\"STRING\" size=\"256\"/><Column id=\"hireLohNo\" type=\"STRING\" size=\"256\"/><Column id=\"rcptNo\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"pstnNm\" type=\"STRING\" size=\"256\"/><Column id=\"bldgNm\" type=\"STRING\" size=\"256\"/><Column id=\"rntar\" type=\"STRING\" size=\"256\"/><Column id=\"usgNm\" type=\"STRING\" size=\"256\"/><Column id=\"mvnHpeYmd\" type=\"STRING\" size=\"256\"/><Column id=\"prcsDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"prgrsSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"prgrsSttsNm\" type=\"STRING\" size=\"256\"/><Column id=\"sbmsnDt\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyClsfNm\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyNm\" type=\"STRING\" size=\"256\"/><Column id=\"dtlUsgNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"currentPageNo\" type=\"STRING\" size=\"256\"/><Column id=\"recordCountPerPage\" type=\"STRING\" size=\"256\"/><Column id=\"pBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"pEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"pPstnCd\" type=\"STRING\" size=\"256\"/><Column id=\"pBldgCd\" type=\"STRING\" size=\"256\"/><Column id=\"pHireLohNo\" type=\"STRING\" size=\"256\"/><Column id=\"pPrgrsSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"pRcptNo\" type=\"STRING\" size=\"256\"/><Column id=\"pBzentyClsfCd\" type=\"STRING\" size=\"256\"/><Column id=\"pBzentyNm\" type=\"STRING\" size=\"256\"/><Column id=\"pPrcsDeptId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"recordCountPerPage\">10</Col><Col id=\"currentPageNo\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPage", this);
            obj._setContents("<ColumnInfo><Column id=\"totalRecordCount\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboBldgCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboSttsCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboPstnCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboDeptCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCbopBzentyClsfCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboPerPageCnt", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divSch","0","divTitle:20",null,"244","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("panLabel","20","14","100%","146",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("0");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("50");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem07\" componentid=\"panRcptNo\"/><PanelItem id=\"PanelItem01\" componentid=\"panDeptCd\"/><PanelItem id=\"PanelItem05\" componentid=\"panBzentyClsfCd\"/><PanelItem id=\"PanelItem00\" componentid=\"panBzentyNm\"/><PanelItem id=\"PanelItem02\" componentid=\"panPstnCd\"/><PanelItem id=\"PanelItem06\" componentid=\"panBldgCd\"/><PanelItem id=\"PanelItem03\" componentid=\"panSttsCd\"/><PanelItem id=\"PanelItem04\" componentid=\"panYmd\"/><PanelItem id=\"PanelItem09\" componentid=\"panSttsCd00\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Static("staDeptCd","69","25","100","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("19");
            obj.set_text("담당부서");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divSch.addChild(obj.name, obj);

            obj = new Static("staRcptNo","0","0","100","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("18");
            obj.set_text("접수번호");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divSch.addChild(obj.name, obj);

            obj = new Edit("edtRcptNo","841","24","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("1");
            obj.set_displaynulltext("접수번호 입력");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("panBzentyNm","1694.00","398","360","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("9");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staBzentyNm\"/><PanelItem id=\"PanelItem02\" componentid=\"edtBzentyNm\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("panDeptCd","20.00","14","360","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("10");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexwrap("nowrap");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staDeptCd\"/><PanelItem id=\"PanelItem02\" componentid=\"cboDeptCd\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Static("staBzentyNm","0","0","100","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("8");
            obj.set_text("업체명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divSch.addChild(obj.name, obj);

            obj = new Combo("cboBldgCd","551","71","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("6");
            obj.set_flexgrow("0");
            obj.set_innerdataset("dsCboBldgCd");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.divSch.addChild(obj.name, obj);

            obj = new Combo("cboDeptCd","604","20","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("2");
            obj.set_flexgrow("0");
            obj.set_innerdataset("dsCboDeptCd");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.divSch.addChild(obj.name, obj);

            obj = new Static("staBldgCd","486","77","100","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("24");
            obj.set_text("건물명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divSch.addChild(obj.name, obj);

            obj = new Static("staYmd","0","0","100","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("11");
            obj.set_text("제출일자");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("panBldgCd","637","65","360","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("23");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staBldgCd\"/><PanelItem id=\"PanelItem02\" componentid=\"cboBldgCd\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("panYmd","496","110","360","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("12");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("2");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staYmd\"/><PanelItem id=\"PanelItem02\" componentid=\"divCal00\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("panClose","30","151","100%","30",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("15");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_SchLine");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnSchClose\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Button("btnSchClose","1251","185","52","29",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_SchClose");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("panSchBtn","632","235","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("16");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnSch\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Button("btnSch","570","192","128","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("17");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Search");
            this.divSch.addChild(obj.name, obj);

            obj = new Div("divCal00","20.00","14","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("20");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.divSch.addChild(obj.name, obj);

            obj = new Calendar("calBgngYmd","180.00","0","150","40",null,null,null,null,null,null,this.divSch.form.divCal00.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            this.divSch.form.divCal00.addChild(obj.name, obj);

            obj = new Static("staDash","160.00","0","10","40",null,null,null,null,null,null,this.divSch.form.divCal00.form);
            obj.set_taborder("0");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_Dash");
            this.divSch.form.divCal00.addChild(obj.name, obj);

            obj = new Calendar("calEndYmd","0","0","150","40",null,null,null,null,null,null,this.divSch.form.divCal00.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            this.divSch.form.divCal00.addChild(obj.name, obj);

            obj = new Panel("panBzentyClsfCd","20.00","14","360","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("22");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexwrap("nowrap");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staBzentyClsfCd\"/><PanelItem id=\"PanelItem01\" componentid=\"cboBzentyClsfCd\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Static("staBzentyClsfCd","69","25","100","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("21");
            obj.set_text("업체분류");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divSch.addChild(obj.name, obj);

            obj = new Combo("cboBzentyClsfCd","140","27","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("3");
            obj.set_flexgrow("0");
            obj.set_innerdataset("dsCbopBzentyClsfCd");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("panSttsCd00","939","188","292","0",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("29");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("");
            this.divSch.addChild(obj.name, obj);

            obj = new Static("staPstnCd","486","77","100","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("25");
            obj.set_text("위치");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("panPstnCd","637","65","360","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("26");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPstnCd\"/><PanelItem id=\"PanelItem02\" componentid=\"cboPstnCd\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Combo("cboPstnCd","551","71","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("5");
            obj.set_flexgrow("0");
            obj.set_innerdataset("dsCboPstnCd");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.divSch.addChild(obj.name, obj);

            obj = new Static("staSttsCd","486","77","100","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("27");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("panSttsCd","637","65","360","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("28");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSttsCd\"/><PanelItem id=\"PanelItem02\" componentid=\"cmbSttsCd\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Combo("cmbSttsCd","551","71","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("7");
            obj.set_flexgrow("0");
            obj.set_innerdataset("dsCboSttsCd");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("panRcptNo","1694.00","398","360","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("13");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staRcptNo\"/><PanelItem id=\"PanelItem00\" componentid=\"edtRcptNo\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Edit("edtBzentyNm","841","24","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("4");
            obj.set_flexgrow("0");
            obj.set_displaynulltext("업체명 입력");
            this.divSch.addChild(obj.name, obj);

            obj = new Div("divGrd","0","divSch:20",null,"618","60",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Div("divPage","0",null,"100.00%","36",null,"0",null,null,null,null,this.divGrd.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_url("work::COM/util/paging/paging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divGrd.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn",null,"0","550","34","0",null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("2");
            obj.set_flexmainaxisalign("end");
            obj.set_fittocontents("height");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staTotal00\"/><PanelItem id=\"PanelItem02\" componentid=\"grdListCnt\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel00\"/></Contents>");
            this.divGrd.addChild(obj.name, obj);

            obj = new Grid("grdList","0","PanelGrdBtn:10","100.00%",null,null,"divPage:10",null,null,null,null,this.divGrd.form);
            obj.set_taborder("20");
            obj.set_binddataset("dsList");
            obj.set_autofittype("none");
            obj.set_readonly("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"접수번호&#13;&#10;(희망서)\"/><Cell col=\"2\" text=\"업체분류\"/><Cell col=\"3\" text=\"업체명\"/><Cell col=\"4\" text=\"위치\"/><Cell col=\"5\" text=\"건물명\"/><Cell col=\"6\" text=\"면적(m2)\"/><Cell col=\"7\" text=\"용도\"/><Cell col=\"8\" text=\"제출일자\"/><Cell col=\"9\" text=\"담당부서\"/><Cell col=\"10\" text=\"상태\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chc\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:rcptNo\" displaytype=\"normal\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:bzentyClsfNm\" textAlign=\"left\" edittype=\"none\" displaytype=\"normal\"/><Cell col=\"3\" text=\"bind:bzentyNm\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:pstnNm\" displaytype=\"normal\" textAlign=\"left\" edittype=\"none\"/><Cell col=\"5\" text=\"bind:bldgNm\" displaytype=\"normal\" edittype=\"none\" combodataset=\"ds_cbo\" combodatacol=\"mm\" combocodecol=\"code\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:rntar\" displaytype=\"normal\" cssclass=\"expr:state==&apos;0&apos;?&apos;CellTxtRed&apos;:&apos;CellTxtBlue&apos;\" textAlign=\"right\" edittype=\"none\"/><Cell col=\"7\" displaytype=\"normal\" edittype=\"none\" text=\"bind:dtlUsgNm\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:sbmsnDt\" textAlign=\"center\" displaytype=\"mask\" maskeditformat=\"####-##-##\" maskedittype=\"string\" edittype=\"none\" maskeditmaskchar=\" \"/><Cell col=\"9\" text=\"bind:prcsDeptNm\" textAlign=\"left\" edittype=\"none\"/><Cell col=\"10\" text=\"bind:prgrsSttsNm\" textAlign=\"left\" edittype=\"none\"/></Band></Format></Formats>");
            this.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","27","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("5");
            obj.set_text("총");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal01","staTotal:0","0","43","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("4");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal02","staTotal01:0","0","30","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("3");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.divGrd.addChild(obj.name, obj);

            obj = new Combo("grdListCnt","1230","0","80","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("9");
            obj.set_innerdataset("dsCboPerPageCnt");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("10");
            obj.set_value("10");
            obj.set_index("0");
            this.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal00","1165","0","65","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("1");
            obj.set_text("목록수");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divGrd.addChild(obj.name, obj);

            obj = new Panel("Panel00","1250","0","160","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("8");
            obj.set_verticalgap("0");
            obj.set_horizontalgap("8");
            obj.set_fittocontents("width");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnDeptDsgn\"/><PanelItem id=\"PanelItem01\" componentid=\"btnDeptSetRmv\"/></Contents>");
            this.divGrd.addChild(obj.name, obj);

            obj = new Button("btnDeptDsgn","1291","4","76","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("7");
            obj.set_text("부서지정");
            obj.set_cssclass("btn_WF_SmallGray");
            obj.set_fittocontents("width");
            this.divGrd.addChild(obj.name, obj);

            obj = new Button("btnDeptSetRmv","1233","8","109","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("6");
            obj.set_text(" 부서지정해제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_fittocontents("width");
            this.divGrd.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTitle
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSch.form.divCal00.form
            obj = new Layout("default","",0,0,this.divSch.form.divCal00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.calBgngYmd.set_taborder("1");
                p.calBgngYmd.set_dateformat("yyyy-MM-dd");
                p.calBgngYmd.move("180.00","0","150","40",null,null);

                p.staDash.set_taborder("0");
                p.staDash.set_text("~");
                p.staDash.set_cssclass("sta_WF_Dash");
                p.staDash.move("160.00","0","10","40",null,null);

                p.calEndYmd.set_taborder("2");
                p.calEndYmd.set_dateformat("yyyy-MM-dd");
                p.calEndYmd.move("0","0","150","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            this.divSch.form.divCal00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divSch.form.divCal00.form
            obj = new Layout("mobile","",0,0,this.divSch.form.divCal00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.calBgngYmd.move("180.00","0","150","40",null,null);

                p.calEndYmd.move("0","0","150","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            this.divSch.form.divCal00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divSch.form.divCal00.form
            obj = new Layout("Layout0","",0,0,this.divSch.form.divCal00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            this.divSch.form.divCal00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divSch.form.divCal00.form
            obj = new Layout("mobile","",0,0,this.divSch.form.divCal00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_horizontalgap("8");
            obj.set_type("horizontal");
            this.divSch.form.divCal00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divSch.form
            obj = new Layout("default","",0,0,this.divSch.form,
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
                p.panLabel.set_horizontalgap("50");
                p.panLabel.set_fittocontents("height");
                p.panLabel.set_maxheight("");
                p.panLabel.move("20","14","100%","146",null,null);

                p.staDeptCd.set_taborder("19");
                p.staDeptCd.set_text("담당부서");
                p.staDeptCd.set_cssclass("sta_WF_SchLabel");
                p.staDeptCd.set_flexshrink("0");
                p.staDeptCd.move("69","25","100","40",null,null);

                p.staRcptNo.set_taborder("18");
                p.staRcptNo.set_text("접수번호");
                p.staRcptNo.set_cssclass("sta_WF_SchLabel");
                p.staRcptNo.set_flexshrink("0");
                p.staRcptNo.set_maxwidth("");
                p.staRcptNo.move("0","0","100","40",null,null);

                p.edtRcptNo.set_taborder("1");
                p.edtRcptNo.set_displaynulltext("접수번호 입력");
                p.edtRcptNo.move("841","24","100%","40",null,null);

                p.panBzentyNm.set_taborder("9");
                p.panBzentyNm.set_type("horizontal");
                p.panBzentyNm.set_horizontalgap("10");
                p.panBzentyNm.set_flexgrow("1");
                p.panBzentyNm.set_fittocontents("height");
                p.panBzentyNm.set_maxheight("");
                p.panBzentyNm.set_minwidth("");
                p.panBzentyNm.move("1694.00","398","360","40",null,null);

                p.panDeptCd.set_taborder("10");
                p.panDeptCd.set_type("horizontal");
                p.panDeptCd.set_horizontalgap("10");
                p.panDeptCd.set_fittocontents("height");
                p.panDeptCd.set_flexwrap("nowrap");
                p.panDeptCd.set_flexgrow("1");
                p.panDeptCd.set_maxheight("");
                p.panDeptCd.set_minwidth("");
                p.panDeptCd.move("20.00","14","360","40",null,null);

                p.staBzentyNm.set_taborder("8");
                p.staBzentyNm.set_text("업체명");
                p.staBzentyNm.set_cssclass("sta_WF_SchLabel");
                p.staBzentyNm.set_flexshrink("0");
                p.staBzentyNm.set_maxwidth("");
                p.staBzentyNm.move("0","0","100","40",null,null);

                p.cboBldgCd.set_taborder("6");
                p.cboBldgCd.set_flexgrow("0");
                p.cboBldgCd.set_innerdataset("dsCboBldgCd");
                p.cboBldgCd.set_codecolumn("cdId");
                p.cboBldgCd.set_datacolumn("cdNm");
                p.cboBldgCd.set_text("전체");
                p.cboBldgCd.set_value("");
                p.cboBldgCd.set_index("-1");
                p.cboBldgCd.move("551","71","100%","40",null,null);

                p.cboDeptCd.set_taborder("2");
                p.cboDeptCd.set_flexgrow("0");
                p.cboDeptCd.set_innerdataset("dsCboDeptCd");
                p.cboDeptCd.set_codecolumn("cdId");
                p.cboDeptCd.set_datacolumn("cdNm");
                p.cboDeptCd.set_text("전체");
                p.cboDeptCd.set_value("");
                p.cboDeptCd.set_index("-1");
                p.cboDeptCd.move("604","20","100%","40",null,null);

                p.staBldgCd.set_taborder("24");
                p.staBldgCd.set_text("건물명");
                p.staBldgCd.set_cssclass("sta_WF_SchLabel");
                p.staBldgCd.set_flexshrink("0");
                p.staBldgCd.move("486","77","100","40",null,null);

                p.staYmd.set_taborder("11");
                p.staYmd.set_text("제출일자");
                p.staYmd.set_cssclass("sta_WF_SchLabel");
                p.staYmd.set_flexshrink("0");
                p.staYmd.set_maxwidth("");
                p.staYmd.move("0","0","100","40",null,null);

                p.panBldgCd.set_taborder("23");
                p.panBldgCd.set_horizontalgap("10");
                p.panBldgCd.set_flexgrow("1");
                p.panBldgCd.set_fittocontents("height");
                p.panBldgCd.move("637","65","360","40",null,null);

                p.panYmd.set_taborder("12");
                p.panYmd.set_type("horizontal");
                p.panYmd.set_horizontalgap("10");
                p.panYmd.set_flexgrow("2");
                p.panYmd.set_fittocontents("height");
                p.panYmd.set_minwidth("");
                p.panYmd.move("496","110","360","40",null,null);

                p.panClose.set_taborder("15");
                p.panClose.set_type("vertical");
                p.panClose.set_cssclass("pal_WF_SchLine");
                p.panClose.set_flexcrossaxisalign("end");
                p.panClose.move("30","151","100%","30",null,null);

                p.btnSchClose.set_taborder("14");
                p.btnSchClose.set_cssclass("btn_WF_SchClose");
                p.btnSchClose.move("1251","185","52","29",null,null);

                p.panSchBtn.set_taborder("16");
                p.panSchBtn.set_flexmainaxisalign("center");
                p.panSchBtn.move("632","235","100%","40",null,null);

                p.btnSch.set_taborder("17");
                p.btnSch.set_text("조회하기");
                p.btnSch.set_cssclass("btn_WF_Search");
                p.btnSch.move("570","192","128","40",null,null);

                p.divCal00.set_taborder("20");
                p.divCal00.set_text("Div00");
                p.divCal00.set_formscrollbartype("none none");
                p.divCal00.set_formscrolltype("none");
                p.divCal00.set_fittocontents("height");
                p.divCal00.move("20.00","14","100%","40",null,null);

                p.panBzentyClsfCd.set_taborder("22");
                p.panBzentyClsfCd.set_type("horizontal");
                p.panBzentyClsfCd.set_horizontalgap("10");
                p.panBzentyClsfCd.set_fittocontents("height");
                p.panBzentyClsfCd.set_flexwrap("nowrap");
                p.panBzentyClsfCd.set_flexgrow("1");
                p.panBzentyClsfCd.set_maxheight("");
                p.panBzentyClsfCd.set_minwidth("");
                p.panBzentyClsfCd.move("20.00","14","360","40",null,null);

                p.staBzentyClsfCd.set_taborder("21");
                p.staBzentyClsfCd.set_text("업체분류");
                p.staBzentyClsfCd.set_cssclass("sta_WF_SchLabel");
                p.staBzentyClsfCd.set_flexshrink("0");
                p.staBzentyClsfCd.move("69","25","100","40",null,null);

                p.cboBzentyClsfCd.set_taborder("3");
                p.cboBzentyClsfCd.set_flexgrow("0");
                p.cboBzentyClsfCd.set_innerdataset("dsCbopBzentyClsfCd");
                p.cboBzentyClsfCd.set_codecolumn("cdId");
                p.cboBzentyClsfCd.set_datacolumn("cdNm");
                p.cboBzentyClsfCd.set_text("전체");
                p.cboBzentyClsfCd.set_value("");
                p.cboBzentyClsfCd.set_index("-1");
                p.cboBzentyClsfCd.move("140","27","100%","40",null,null);

                p.panSttsCd00.set_taborder("29");
                p.panSttsCd00.set_horizontalgap("10");
                p.panSttsCd00.set_flexgrow("1");
                p.panSttsCd00.move("939","188","292","0",null,null);

                p.staPstnCd.set_taborder("25");
                p.staPstnCd.set_text("위치");
                p.staPstnCd.set_cssclass("sta_WF_SchLabel");
                p.staPstnCd.set_flexshrink("0");
                p.staPstnCd.move("486","77","100","40",null,null);

                p.panPstnCd.set_taborder("26");
                p.panPstnCd.set_horizontalgap("10");
                p.panPstnCd.set_flexgrow("1");
                p.panPstnCd.set_fittocontents("height");
                p.panPstnCd.move("637","65","360","40",null,null);

                p.cboPstnCd.set_taborder("5");
                p.cboPstnCd.set_flexgrow("0");
                p.cboPstnCd.set_innerdataset("dsCboPstnCd");
                p.cboPstnCd.set_codecolumn("cdId");
                p.cboPstnCd.set_datacolumn("cdNm");
                p.cboPstnCd.set_text("전체");
                p.cboPstnCd.set_value("");
                p.cboPstnCd.set_index("-1");
                p.cboPstnCd.move("551","71","100%","40",null,null);

                p.staSttsCd.set_taborder("27");
                p.staSttsCd.set_text("상태");
                p.staSttsCd.set_cssclass("sta_WF_SchLabel");
                p.staSttsCd.set_flexshrink("0");
                p.staSttsCd.move("486","77","100","40",null,null);

                p.panSttsCd.set_taborder("28");
                p.panSttsCd.set_horizontalgap("10");
                p.panSttsCd.set_flexgrow("1");
                p.panSttsCd.move("637","65","360","40",null,null);

                p.cmbSttsCd.set_taborder("7");
                p.cmbSttsCd.set_flexgrow("0");
                p.cmbSttsCd.set_innerdataset("dsCboSttsCd");
                p.cmbSttsCd.set_codecolumn("cdId");
                p.cmbSttsCd.set_datacolumn("cdNm");
                p.cmbSttsCd.set_text("전체");
                p.cmbSttsCd.set_value("");
                p.cmbSttsCd.set_index("-1");
                p.cmbSttsCd.move("551","71","100%","40",null,null);

                p.panRcptNo.set_taborder("13");
                p.panRcptNo.set_type("horizontal");
                p.panRcptNo.set_horizontalgap("10");
                p.panRcptNo.set_fittocontents("height");
                p.panRcptNo.set_flexgrow("1");
                p.panRcptNo.set_minwidth("");
                p.panRcptNo.move("1694.00","398","360","40",null,null);

                p.edtBzentyNm.set_taborder("4");
                p.edtBzentyNm.set_flexgrow("0");
                p.edtBzentyNm.set_displaynulltext("업체명 입력");
                p.edtBzentyNm.move("841","24","100%","40",null,null);
            	}
            );
            obj.set_spacing("14px 20px 12px 20px");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            this.divSch.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divSch.form
            obj = new Layout("mobile","",0,0,this.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staRcptNo.move("0","0","76","40",null,null);

                p.staDeptCd.move("69","25","76","40",null,null);

                p.staBzentyClsfCd.move("69","25","76","40",null,null);

                p.staBzentyNm.move("0","0","76","40",null,null);

                p.staPstnCd.move("486","77","76","40",null,null);

                p.staBldgCd.move("486","77","76","40",null,null);

                p.staSttsCd.move("486","77","76","40",null,null);

                p.staYmd.move("0","0","100%","40",null,null);

                p.panLabel.move("20","14","100%","386",null,null);

                p.panYmd.set_type("vertical");
                p.panYmd.move("1694.00","398","770","80",null,null);
            	}
            );
            obj.set_spacing("14px 20px 12px 20px");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            this.divSch.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divSch.form
            obj = new Layout("Layout0","",0,0,this.divSch.form,
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
            this.divSch.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divSch.form
            obj = new Layout("mobile","",0,0,this.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_spacing("10px 16px 12px 16px");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            this.divSch.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divGrd.form.divPage
            obj = new Layout("default","",0,0,this.divGrd.form.divPage.form,function(p){});
            this.divGrd.form.divPage.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGrd.form
            obj = new Layout("default","",0,0,this.divGrd.form,
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
                p.divPage.set_maxheight("");
                p.divPage.move("0",null,"100.00%","36",null,"0");

                p.PanelGrdBtn.set_taborder("2");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_fittocontents("height");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.move(null,"0","550","34","0",null);

                p.grdList.set_taborder("20");
                p.grdList.set_binddataset("dsList");
                p.grdList.set_autofittype("none");
                p.grdList.set_readonly("false");
                p.grdList.move("0","PanelGrdBtn:10","100.00%",null,null,"divPage:10");

                p.staTotal.set_taborder("5");
                p.staTotal.set_text("총");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("width");
                p.staTotal.move("0","0","27","34",null,null);

                p.staTotal01.set_taborder("4");
                p.staTotal01.set_text("0");
                p.staTotal01.set_cssclass("sta_WF_Total");
                p.staTotal01.set_usedecorate("true");
                p.staTotal01.set_fittocontents("width");
                p.staTotal01.move("staTotal:0","0","43","34",null,null);

                p.staTotal02.set_taborder("3");
                p.staTotal02.set_text("건");
                p.staTotal02.set_usedecorate("true");
                p.staTotal02.move("staTotal01:0","0","30","34",null,null);

                p.grdListCnt.set_taborder("9");
                p.grdListCnt.set_innerdataset("dsCboPerPageCnt");
                p.grdListCnt.set_codecolumn("cdId");
                p.grdListCnt.set_datacolumn("cdNm");
                p.grdListCnt.set_text("10");
                p.grdListCnt.set_value("10");
                p.grdListCnt.set_index("0");
                p.grdListCnt.move("1230","0","80","34",null,null);

                p.staTotal00.set_taborder("1");
                p.staTotal00.set_text("목록수");
                p.staTotal00.set_cssclass("sta_WF_SchLabel");
                p.staTotal00.set_fittocontents("width");
                p.staTotal00.move("1165","0","65","34",null,null);

                p.Panel00.set_taborder("8");
                p.Panel00.set_verticalgap("0");
                p.Panel00.set_horizontalgap("8");
                p.Panel00.set_fittocontents("width");
                p.Panel00.move("1250","0","160","34",null,null);

                p.btnDeptDsgn.set_taborder("7");
                p.btnDeptDsgn.set_text("부서지정");
                p.btnDeptDsgn.set_cssclass("btn_WF_SmallGray");
                p.btnDeptDsgn.set_fittocontents("width");
                p.btnDeptDsgn.move("1291","4","76","34",null,null);

                p.btnDeptSetRmv.set_taborder("6");
                p.btnDeptSetRmv.set_text(" 부서지정해제");
                p.btnDeptSetRmv.set_cssclass("btn_WF_SmallRed");
                p.btnDeptSetRmv.set_fittocontents("width");
                p.btnDeptSetRmv.move("1233","8","109","34",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divGrd.form
            obj = new Layout("Layout0","",0,0,this.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdList.set_autofittype("none");

                p.btnGrdAdd.set_visible("false");

                p.btnGrdRegi.set_visible("false");

                p.btnGrdDel.set_visible("false");

                p.btnGrdDw.set_visible("false");
            	}
            );
            obj.set_verticalgap("20");
            this.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divGrd.form
            obj = new Layout("mobile","",0,0,this.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnDeptDsgn.move("1291","4","76","34",null,null);

                p.btnDeptSetRmv.move("1233","8","109","34",null,null);

                p.Panel00.move("1250","0","200","34",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("임차희망서 접수목록(처리자)");

                p.divTitle.set_taborder("2");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.move("0","0",null,"50","60",null);

                p.divSch.set_taborder("0");
                p.divSch.set_cssclass("div_WF_SchBg");
                p.divSch.set_formscrollbartype("none none");
                p.divSch.set_formscrolltype("none");
                p.divSch.set_fittocontents("height");
                p.divSch.move("0","divTitle:20",null,"244","60",null);

                p.divGrd.set_taborder("1");
                p.divGrd.set_text("Div01");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.move("0","divSch:20",null,"618","60",null);
            	}
            );
            obj.set_horizontalgap("0");
            obj.set_mobileorientation("landscape");
            obj.set_spacing("0px");
            obj.set_tabletemplate("1* / 1*");
            obj.set_verticalgap("0");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divSch.move("20","70",null,"480","20",null);

                p.divGrd.move("20","divSch:30",null,null,"20","-52");

                p.divTitle.move("0","0",null,"50","0",null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            obj.set_horizontalgap("0");
            obj.set_spacing("0px");
            obj.set_tabletemplate("1* / 1*");
            obj.set_verticalgap("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSch.form.cmbSttsCd","value","dsSearch","pPrgrsSttsCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSch.form.edtRcptNo","value","dsSearch","pRcptNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSch.form.cboBzentyClsfCd","value","dsSearch","pBzentyClsfCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSch.form.cboBldgCd","value","dsSearch","pBldgCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSch.form.cboPstnCd","value","dsSearch","pPstnCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSch.form.divCal00.form.calBgngYmd","value","dsSearch","pBgngYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSch.form.divCal00.form.calEndYmd","value","dsSearch","pEndYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSch.form.edtBzentyNm","value","dsSearch","pBzentyNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSch.form.cboDeptCd","value","dsSearch","pPrcsDeptId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divGrd.form.staTotal01","text","dsPage","totalRecordCount");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divGrd.form.grdListCnt","value","dsSearch","recordCountPerPage");
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
        this.addIncludeScript("REN002M02.xfdl","xjs::TaskCom.xjs");
        this.registerScript("REN002M02.xfdl", function() {
        /**
        *  인천공항 원스톱 입주자서비스 프로젝트
        *  @FileName 	REN002M02.xfdl
        *  @Creator 	(주)이루온
        *  @CreateDate 	2024/09/30
        *  @Desction    임차희망서 접수 목록
        ******************** 소스 수정 이력 ***********************************************
        * Date			Modifier	Description
        *******************************************************************************
        * 2024/09/30	이루온h		최초생성
        *******************************************************************************
        */

        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;  // 업무공통
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

        	//페이지 로딩시 처음에 실행 되는 함수
        	this.fnInit();

        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        // 검색 조회
        this.cfnSearch = function (page)
        {
        	if (this.dsSearch.getColumn(0,"pBgngYmd") > this.dsSearch.getColumn(0,"pEndYmd")) {
        		this.gfnAlertMsg("msg", "MSG_012", ["등록"]);		//{0} 시작일자가 종료일자보다 큽니다.
        		return;
        	}

        	//그리드 한 페이지에 게시되는 데이터건수
        	this.dsSearch.setColumn(0, "currentPageNo", page);

        	//임차희망서 접수목록 조회
        	this.selectTransaction();
        };

        /*******************************************************************************************************************************
         * 조회조건 입력 후 Enter Key 클릭시
        *******************************************************************************************************************************/
        this.form_onkeyup = function(obj,e)
        {
        	if (e.keycode==13) {
        		if (e.fromobject.taborder <= 9) {
        			this.divSch.form.btnSch.click();
        		}
        	}
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        // 임차희망서 접수목록 조회
        this.selectTransaction = function() {

        	this.dsList.clear();

        	var strSvcId    = "select";
        	var strSvcUrl   = "ren/frs/selectHireLohRcptList.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsList=dsList dsPage=dsPage";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        // 트랜젝션 콜백 함수
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0)
        	{
        		return;
        	}

        	switch(svcID)
        	{
        		// 콤보조회
        		case "_cfnComCdLoad_":
        			this.divSch.form.cboDeptCd.set_index(0);		// 부서
        			this.divSch.form.cboBzentyClsfCd.set_index(0);	// 업체분류
        			this.divSch.form.cboPstnCd.set_index(0);		// 위치
        			this.divSch.form.cboBldgCd.set_index(0);		// 건물
        			this.divSch.form.cmbSttsCd.set_index(0);		// 상태
        			this.divGrd.form.grdListCnt.set_index(1);		// 목록수
        			this.dsCboSttsCd.filter("cdVl02 == 'REN002M02' || cdNm == '전체' ");

        			// 사용자정보 조회
        			const gdsUser = nexacro.getApplication().gdsUser;
        			this.dsSearch.setColumn(0, "pPrcsDeptId", gdsUser.getColumn(0, "deptId"));
        			this.divSch_cboDeptCd_onitemchanged();

        			break;

        		// 콤보조회
        		case "commonCodeSearch":
        			this.divGrd.form.grdListCnt.set_index(1);

        			//페이징을 위하여 검색 함수를 실행
        			this.cfnSearch(1);

        			break;

        		// 목록조회
        		case "select":
        			// 조회 한 후 페이징을 셋팅 하기 위한 초기 함수
        			this.divGrd.form.divPage.form.initPages(this.dsPage.getColumn(0, "currentPageNo"), this.dsPage.getColumn(0, "totalRecordCount"), this.dsPage.getColumn(0, "recordCountPerPage"), this.dsPage.getColumn(0, "pageSize"), "pagingCallback");
        			this.divGrd.form.resetScroll();

        			if (this.divGrd.form.grdListCnt.value > this.dsPage.getColumn(0, "totalRecordCount")) {
        				this.divGrd.form.divPage.set_visible(false);
        			}
        			break;

        		case "updateHireLohDeptDsgn":			// 부서지정
        		case "updateHireLohDeptDsgnRmv":		// 부서지정해제
        			this.gfnAlertMsg("alert_msg", this.objApp.getVariable("gvRetMsg"), null, "msgCallback");

        			break;
        	}
        };

        // 페이징 버튼 콜백함수
        this.pagingCallback = function(page) {
        	this.cfnSearch(page);
        };

        // 팝업 콜백 함수
        this.fnPopupCallback = function(sPopupId, sRtn){};

        // 메지시 콜백 함수
        this.msgCallback = function(sPopupId, sRtn) {

        	var oRtn = JSON.parse(sRtn);

        	// 부서지정
        	if (sPopupId == "save_confirm" && oRtn.result == "Y") {

        		var strSvcId    = "updateHireLohDeptDsgn";
        		var strSvcUrl   = "ren/frs/updateHireLohDeptDsgn.do";
        		var inData      = "dsList=dsList:U";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";
        		var isAsync   	= false;

        		this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        	// 부서지정해제
        	} else if (sPopupId == "btnDeptDsgnRmv_confirm" && oRtn.result == "Y") {

        		var strSvcId    = "updateHireLohDeptDsgnRmv";
        		var strSvcUrl   = "ren/frs/updateHireLohDeptDsgnRmv.do";
        		var inData      = "dsList=dsList:U";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";
        		var isAsync   	= false;

        		this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        	// 부서지정,해제 후 얼릿 메시지
        	} else if (sPopupId == "alert_msg") {
        		this.selectTransaction();
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function() {

        	this.cfnComCdLoad({dsCboSttsCd:"HIRE_ASN_STTS_CD:A", dsCboDeptCd:"RENT_ASN_DEPT_CD:A", dsCboBldgCd:"RENT_ASN_BLDG:A", dsCboPstnCd:"ZONE_SE_CD:A", dsCbopBzentyClsfCd:"BZENTY_CLSF_CD:A"});
        	this.cfnComCdLoad({ id:"commonCodeSearch", cbf:"fnCallBack", dsCboPerPageCnt:"REN9000:S" });	//목록수 조회

        	var vTdate 	= this.gfn_getDate("date");
        	var vFdate	= this.gfn_addMonth(vTdate, -1);
        	this.divSch.form.divCal00.form.calBgngYmd.set_value(vFdate);
        	this.divSch.form.divCal00.form.calEndYmd.set_value(vTdate);

        };


        // 조회 버튼 클릭시
        this.divSch_btnSch_onclick = function(obj,e)
        {
        	this.cfnSearch(1);
        };


        // 조회건수 변경시
        this.divGrd_grdListCnt_onitemchanged = function(obj,e)
        {
        	this.cfnSearch(1);
        };


        // 목록 그리드 더블 클릭시
        this.divGrd_grdList_oncelldblclick = function(obj,e)
        {
        	var hireLohNo = this.dsList.getColumn(e.row, "hireLohNo");

        	if(this.objApp.screenid == "Desktop_screen") {
        		/*****  MDI 에 추가하는 페이지 오픈을 위한 코드 *****/
        		var param = {
        			"status" : "detail"
        			,"hireLohNo" : hireLohNo
        		};

        		var sMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        		var sMenuUrl = 'work::REN/FRS/REN002M03.xfdl';
        		var actNm = '상세';

        		this.gfnPageOpen(sMenuId, sMenuUrl, actNm, param);
        		/*****  MDI 에 추가하는 페이지 오픈을 위한 코드 *****/
        	} else {
        		var sTitle = "상세";
        		var objArg   = {
        			"status" : "detail"
        			,"hireLohNo" : hireLohNo
        		};

        		var objOption = {
        			popuptype: "modal"	//modal,modaless
        			, autosize: true
        			, title: sTitle
        			, resize: true
        			, titlebar: true
        		};
        		var sPopupCallBack = "fnPopupCallback";

        		this.gfnOpenPopup("REN002M02", "work::REN/FRS/REN002M03.xfdl", objArg, sPopupCallBack, objOption);
        	}
        };


        // 부서지정 버튼 클릭시
        this.divGrd_btnDeptDsgn_onclick = function(obj,e)
        {
        	 if (this.gfnDsIsUpdated(this.dsList) == true) {
        		for (var i=0; i<this.dsList.rowcount; i++) {
        			if (this.dsList.getColumn(i,"chc") == "1") {
        				if (this.dsList.getColumn(i,"prgrsSttsCd") != "11" && this.dsList.getColumn(i,"prgrsSttsCd") != "13") {
        					// {0} 자료는 부서지정할 수 없습니다.
        					this.gfnAlertMsg("msg", "REN_016", [ this.dsList.getColumn(i,"prgrsSttsNm") ]);
        					return;
        				}
        			}
        		}

        		// REN_006.부서지정 하시겠습니까?
        	 	this.gfnConfirmMsg("save_confirm", "REN_006", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        	} else if (this.gfnDsIsUpdated(this.dsGet) == false) {
         		// 변경된 내용이 없습니다.
        		this.gfnAlertMsg("msg", "MSG_004");
         		return;
        	}
        };


        // 부서지정해제 버튼 클릭시
        this.divGrd_btnDeptDsgnRmv_onclick = function(obj,e)
        {
        	if (this.gfnDsIsUpdated(this.dsList) == true) {
        		for (var i=0; i<this.dsList.rowcount; i++) {
        			if (this.dsList.getColumn(i,"chc") == "1") {
        				if (this.dsList.getColumn(i,"prgrsSttsCd") != "12") {
        					// {0} 자료는 부서지정해제할 수 없습니다.
        					this.gfnAlertMsg("msg", "REN_017", [ this.dsList.getColumn(i,"prgrsSttsNm") ]);
        					return;
        				}
        			}
        		}

        		// REN_007.부서지정해제 하시겠습니까?
        	 	this.gfnConfirmMsg("btnDeptDsgnRmv_confirm", "REN_007", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        	} else if (this.gfnDsIsUpdated(this.dsGet) == false) {
         		// 변경된 내용이 없습니다.
        		this.gfnAlertMsg("msg", "MSG_004");
         		return;
        	}
        };


        // 위치코드 변경시
        this.divSch_cboPstnCd_onitemchanged = function(obj,e)
        {
        	if (e.postvalue == "") {
        		this.dsCboBldgCd.filter("");
        		this.divSch.form.cboBldgCd.set_index(0);
        	} else {
        		this.dsCboBldgCd.filter("cdNm == '전체' || String(cdVl01).indexOf('" + e.postvalue + "') >= 0");
        	}
        };


        // 담당부서 변경시
        this.divSch_cboDeptCd_onitemchanged = function(obj,e)
        {
        	if (this.dsSearch.getColumn(0, "pPrcsDeptId") == "") {
        		this.dsCboBldgCd.filter("");
        		this.divSch.form.cboBldgCd.set_index(0);
        	} else {
        		this.dsCboBldgCd.filter("cdVl02 == '" + this.dsSearch.getColumn(0, "pPrcsDeptId") + "' || cdNm == '전체' ");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onkeyup",this.form_onkeyup,this);
            this.divSch.form.cboDeptCd.addEventHandler("onitemchanged",this.divSch_cboDeptCd_onitemchanged,this);
            this.divSch.form.staYmd.addEventHandler("onclick",this.divForm_Div00_sta00_00_01_01_onclick,this);
            this.divSch.form.btnSchClose.addEventHandler("onclick",this.divForm_divSch_btnSchClose_onclick,this);
            this.divSch.form.btnSch.addEventHandler("onclick",this.divSch_btnSch_onclick,this);
            this.divSch.form.cboPstnCd.addEventHandler("onitemchanged",this.divSch_cboPstnCd_onitemchanged,this);
            this.divGrd.form.grdList.addEventHandler("oncelldblclick",this.divGrd_grdList_oncelldblclick,this);
            this.divGrd.form.grdListCnt.addEventHandler("onitemchanged",this.divGrd_grdListCnt_onitemchanged,this);
            this.divGrd.form.btnDeptDsgn.addEventHandler("onclick",this.divGrd_btnDeptDsgn_onclick,this);
            this.divGrd.form.btnDeptSetRmv.addEventHandler("onclick",this.divGrd_btnDeptDsgnRmv_onclick,this);
        };
        this.loadIncludeScript("REN002M02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
