(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM031M11");
            this.set_titletext("시설별 처리 현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,1500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"분야\" type=\"STRING\" size=\"256\"/><Column id=\"시설\" type=\"STRING\" size=\"256\"/><Column id=\"신청_1월\" type=\"STRING\" size=\"256\"/><Column id=\"접수_1월\" type=\"STRING\" size=\"256\"/><Column id=\"처리_1월\" type=\"STRING\" size=\"256\"/><Column id=\"완료_1월\" type=\"STRING\" size=\"256\"/><Column id=\"신청_2월\" type=\"STRING\" size=\"256\"/><Column id=\"접수_2월\" type=\"STRING\" size=\"256\"/><Column id=\"처리_2월\" type=\"STRING\" size=\"256\"/><Column id=\"완료_2월\" type=\"STRING\" size=\"256\"/><Column id=\"신청_3월\" type=\"STRING\" size=\"256\"/><Column id=\"접수_3월\" type=\"STRING\" size=\"256\"/><Column id=\"처리_3월\" type=\"STRING\" size=\"256\"/><Column id=\"완료_3월\" type=\"STRING\" size=\"256\"/><Column id=\"신청_4월\" type=\"STRING\" size=\"256\"/><Column id=\"접수_4월\" type=\"STRING\" size=\"256\"/><Column id=\"처리_4월\" type=\"STRING\" size=\"256\"/><Column id=\"완료_4월\" type=\"STRING\" size=\"256\"/><Column id=\"신청_5월\" type=\"STRING\" size=\"256\"/><Column id=\"접수_5월\" type=\"STRING\" size=\"256\"/><Column id=\"처리_5월\" type=\"STRING\" size=\"256\"/><Column id=\"완료_5월\" type=\"STRING\" size=\"256\"/><Column id=\"신청_6월\" type=\"STRING\" size=\"256\"/><Column id=\"접수_6월\" type=\"STRING\" size=\"256\"/><Column id=\"처리_6월\" type=\"STRING\" size=\"256\"/><Column id=\"완료_6월\" type=\"STRING\" size=\"256\"/><Column id=\"신청_7월\" type=\"STRING\" size=\"256\"/><Column id=\"접수_7월\" type=\"STRING\" size=\"256\"/><Column id=\"처리_7월\" type=\"STRING\" size=\"256\"/><Column id=\"완료_7월\" type=\"STRING\" size=\"256\"/><Column id=\"신청_8월\" type=\"STRING\" size=\"256\"/><Column id=\"접수_8월\" type=\"STRING\" size=\"256\"/><Column id=\"처리_8월\" type=\"STRING\" size=\"256\"/><Column id=\"완료_8월\" type=\"STRING\" size=\"256\"/><Column id=\"신청_9월\" type=\"STRING\" size=\"256\"/><Column id=\"접수_9월\" type=\"STRING\" size=\"256\"/><Column id=\"처리_9월\" type=\"STRING\" size=\"256\"/><Column id=\"완료_9월\" type=\"STRING\" size=\"256\"/><Column id=\"신청_10월\" type=\"STRING\" size=\"256\"/><Column id=\"접수_10월\" type=\"STRING\" size=\"256\"/><Column id=\"처리_10월\" type=\"STRING\" size=\"256\"/><Column id=\"완료_10월\" type=\"STRING\" size=\"256\"/><Column id=\"신청_11월\" type=\"STRING\" size=\"256\"/><Column id=\"접수_11월\" type=\"STRING\" size=\"256\"/><Column id=\"처리_11월\" type=\"STRING\" size=\"256\"/><Column id=\"완료_11월\" type=\"STRING\" size=\"256\"/><Column id=\"신청_12월\" type=\"STRING\" size=\"256\"/><Column id=\"접수_12월\" type=\"STRING\" size=\"256\"/><Column id=\"처리_12월\" type=\"STRING\" size=\"256\"/><Column id=\"완료_12월\" type=\"STRING\" size=\"256\"/><Column id=\"신청_합계\" type=\"STRING\" size=\"256\"/><Column id=\"접수_합계\" type=\"STRING\" size=\"256\"/><Column id=\"처리_합계\" type=\"STRING\" size=\"256\"/><Column id=\"완료_합계\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"분야\">입주자 서비스</Col><Col id=\"시설\"/><Col id=\"신청_1월\">사용</Col><Col id=\"접수_1월\">2025-11-08</Col><Col id=\"처리_1월\">2025-11-07</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"currentPageNo\" type=\"STRING\" size=\"256\"/><Column id=\"recordCountPerPage\" type=\"STRING\" size=\"256\"/><Column id=\"sDate\" type=\"STRING\" size=\"256\"/><Column id=\"eDate\" type=\"STRING\" size=\"256\"/><Column id=\"fld\" type=\"STRING\" size=\"256\"/><Column id=\"se\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"recordCountPerPage\">999999</Col><Col id=\"currentPageNo\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPage", this);
            obj._setContents("<ColumnInfo><Column id=\"totalRecordCount\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo1", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo2", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divSch","0","divTitle:20",null,"153","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","106","320","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("11");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("2");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel02_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"divCal\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel03","1694.00","398","320","45",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("6");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel01_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Combo01\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel02","1694.00","398","320","45",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("9");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel01_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Combo02\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("panLabel","20","14","100%","55",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("0");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("50");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02\"/><PanelItem id=\"PanelItem06\" componentid=\"Panel03\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Button("btnSchClose","1251","185","30","30",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_SchClose");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("panClose","30","151","100%","30",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_SchLine");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnSchClose\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Button("btnSch","570","192","112","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("4");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Search");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("panSchBtn","632","235","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("3");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnSch\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Combo("Combo01","823","20","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsCombo2");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01_00","0","0","100","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("5");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00","0","0","100","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("8");
            obj.set_text("분야");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divSch.addChild(obj.name, obj);

            obj = new Combo("Combo02","151","24","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("12");
            obj.set_innerdataset("dsCombo1");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel02_01_00","0","0","100","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("10");
            obj.set_text("기간");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divSch.addChild(obj.name, obj);

            obj = new Div("divCal","693","131","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("13");
            obj.set_text("Div00");
            this.divSch.addChild(obj.name, obj);

            obj = new Calendar("calSdate","0","0","100%","40",null,null,null,null,null,null,this.divSch.form.divCal.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            this.divSch.form.divCal.addChild(obj.name, obj);

            obj = new Static("sta00","10","0","20","40",null,null,null,null,null,null,this.divSch.form.divCal.form);
            obj.set_taborder("0");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_Dash");
            obj.set_fittocontents("width");
            this.divSch.form.divCal.addChild(obj.name, obj);

            obj = new Calendar("calEdate","10","0","100%","40",null,null,null,null,null,null,this.divSch.form.divCal.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            this.divSch.form.divCal.addChild(obj.name, obj);

            obj = new Div("divForm","0","divSch:20",null,"597","60",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("divGrd","0","24","100.00%","597",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.addChild(obj.name, obj);

            obj = new Grid("grdStats","0","44","100.00%","553",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsList");
            obj.set_autofittype("none");
            obj.set_flexgrow("1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"200\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\" band=\"head\"/><Row size=\"44\"/><Row size=\"44\"/><Row size=\"44\"/><Row size=\"44\"/><Row size=\"44\"/><Row size=\"44\"/><Row size=\"44\"/><Row size=\"44\"/><Row size=\"44\"/><Row size=\"44\" band=\"summ\"/><Row size=\"44\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"분야\"/><Cell col=\"1\" rowspan=\"2\" text=\"시설\"/><Cell col=\"2\" colspan=\"4\" text=\"1월\"/><Cell col=\"6\" colspan=\"4\" text=\"2월\"/><Cell col=\"10\" colspan=\"4\" text=\"3월\"/><Cell col=\"14\" colspan=\"4\" text=\"4월\"/><Cell col=\"18\" colspan=\"4\" text=\"5월\"/><Cell col=\"22\" colspan=\"4\" text=\"6월\"/><Cell col=\"26\" colspan=\"4\" text=\"7월\"/><Cell col=\"30\" colspan=\"4\" text=\"8월\"/><Cell col=\"34\" colspan=\"4\" text=\"9월\"/><Cell col=\"38\" colspan=\"4\" text=\"10월\"/><Cell col=\"42\" colspan=\"4\" text=\"11월\"/><Cell col=\"46\" colspan=\"4\" text=\"12월\"/><Cell col=\"50\" colspan=\"4\" text=\"합계\" cssclass=\"CellEnd\"/><Cell row=\"1\" col=\"2\" text=\"신청\"/><Cell row=\"1\" col=\"3\" text=\"접수\"/><Cell row=\"1\" col=\"4\" text=\"처리\"/><Cell row=\"1\" col=\"5\" text=\"완료\"/><Cell row=\"1\" col=\"6\" text=\"신청\"/><Cell row=\"1\" col=\"7\" text=\"접수\"/><Cell row=\"1\" col=\"8\" text=\"처리\"/><Cell row=\"1\" col=\"9\" text=\"완료\"/><Cell row=\"1\" col=\"10\" text=\"신청\"/><Cell row=\"1\" col=\"11\" text=\"접수\"/><Cell row=\"1\" col=\"12\" text=\"처리\"/><Cell row=\"1\" col=\"13\" text=\"완료\"/><Cell row=\"1\" col=\"14\" text=\"신청\"/><Cell row=\"1\" col=\"15\" text=\"접수\"/><Cell row=\"1\" col=\"16\" text=\"처리\"/><Cell row=\"1\" col=\"17\" text=\"완료\"/><Cell row=\"1\" col=\"18\" text=\"신청\"/><Cell row=\"1\" col=\"19\" text=\"접수\"/><Cell row=\"1\" col=\"20\" text=\"처리\"/><Cell row=\"1\" col=\"21\" text=\"완료\"/><Cell row=\"1\" col=\"22\" text=\"신청\"/><Cell row=\"1\" col=\"23\" text=\"접수\"/><Cell row=\"1\" col=\"24\" text=\"처리\"/><Cell row=\"1\" col=\"25\" text=\"완료\"/><Cell row=\"1\" col=\"26\" text=\"신청\"/><Cell row=\"1\" col=\"27\" text=\"접수\"/><Cell row=\"1\" col=\"28\" text=\"처리\"/><Cell row=\"1\" col=\"29\" text=\"완료\"/><Cell row=\"1\" col=\"30\" text=\"신청\"/><Cell row=\"1\" col=\"31\" text=\"접수\"/><Cell row=\"1\" col=\"32\" text=\"처리\"/><Cell row=\"1\" col=\"33\" text=\"완료\"/><Cell row=\"1\" col=\"34\" text=\"신청\"/><Cell row=\"1\" col=\"35\" text=\"접수\"/><Cell row=\"1\" col=\"36\" text=\"처리\"/><Cell row=\"1\" col=\"37\" text=\"완료\"/><Cell row=\"1\" col=\"38\" text=\"신청\"/><Cell row=\"1\" col=\"39\" text=\"접수\"/><Cell row=\"1\" col=\"40\" text=\"처리\"/><Cell row=\"1\" col=\"41\" text=\"완료\"/><Cell row=\"1\" col=\"42\" text=\"신청\"/><Cell row=\"1\" col=\"43\" text=\"접수\"/><Cell row=\"1\" col=\"44\" text=\"처리\"/><Cell row=\"1\" col=\"45\" text=\"완료\"/><Cell row=\"1\" col=\"46\" text=\"신청\"/><Cell row=\"1\" col=\"47\" text=\"접수\"/><Cell row=\"1\" col=\"48\" text=\"처리\"/><Cell row=\"1\" col=\"49\" text=\"완료\"/><Cell row=\"1\" col=\"50\" text=\"신청\"/><Cell row=\"1\" col=\"51\" text=\"접수\"/><Cell row=\"1\" col=\"52\" text=\"처리\"/><Cell row=\"1\" col=\"53\" text=\"완료\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell rowspan=\"9\" text=\"입주자서비스\" textAlign=\"center\" wordWrap=\"char\"/><Cell col=\"1\" rowspan=\"9\" wordWrap=\"char\"/><Cell col=\"2\" wordWrap=\"char\"/><Cell col=\"3\" wordWrap=\"char\"/><Cell col=\"4\" wordWrap=\"char\"/><Cell col=\"5\" wordWrap=\"char\"/><Cell col=\"6\" wordWrap=\"char\"/><Cell col=\"7\" wordWrap=\"char\"/><Cell col=\"8\" wordWrap=\"char\"/><Cell col=\"9\" wordWrap=\"char\"/><Cell col=\"10\" wordWrap=\"char\"/><Cell col=\"11\" wordWrap=\"char\"/><Cell col=\"12\" wordWrap=\"char\"/><Cell col=\"13\" wordWrap=\"char\"/><Cell col=\"14\" wordWrap=\"char\"/><Cell col=\"15\" wordWrap=\"char\"/><Cell col=\"16\" wordWrap=\"char\"/><Cell col=\"17\" wordWrap=\"char\"/><Cell col=\"18\" wordWrap=\"char\"/><Cell col=\"19\" wordWrap=\"char\"/><Cell col=\"20\" wordWrap=\"char\"/><Cell col=\"21\" wordWrap=\"char\"/><Cell col=\"22\" wordWrap=\"char\"/><Cell col=\"23\" wordWrap=\"char\"/><Cell col=\"24\" wordWrap=\"char\"/><Cell col=\"25\" wordWrap=\"char\"/><Cell col=\"26\" wordWrap=\"char\"/><Cell col=\"27\" wordWrap=\"char\"/><Cell col=\"28\" wordWrap=\"char\"/><Cell col=\"29\" wordWrap=\"char\"/><Cell col=\"30\" wordWrap=\"char\"/><Cell col=\"31\" wordWrap=\"char\"/><Cell col=\"32\" wordWrap=\"char\"/><Cell col=\"33\" wordWrap=\"char\"/><Cell col=\"34\" wordWrap=\"char\"/><Cell col=\"35\" wordWrap=\"char\"/><Cell col=\"36\" wordWrap=\"char\"/><Cell col=\"37\" wordWrap=\"char\"/><Cell col=\"38\" wordWrap=\"char\"/><Cell col=\"39\" wordWrap=\"char\"/><Cell col=\"40\" wordWrap=\"char\"/><Cell col=\"41\" wordWrap=\"char\"/><Cell col=\"42\" wordWrap=\"char\"/><Cell col=\"43\" wordWrap=\"char\"/><Cell col=\"44\" wordWrap=\"char\"/><Cell col=\"45\" wordWrap=\"char\"/><Cell col=\"46\" wordWrap=\"char\"/><Cell col=\"47\" wordWrap=\"char\"/><Cell col=\"48\" wordWrap=\"char\"/><Cell col=\"49\" wordWrap=\"char\"/><Cell col=\"50\" wordWrap=\"char\"/><Cell col=\"51\" wordWrap=\"char\"/><Cell col=\"52\" wordWrap=\"char\"/><Cell col=\"53\" wordWrap=\"char\" cssclass=\"CellEnd\"/><Cell row=\"1\" col=\"2\" wordWrap=\"char\"/><Cell row=\"1\" col=\"3\" wordWrap=\"char\"/><Cell row=\"1\" col=\"4\" wordWrap=\"char\"/><Cell row=\"1\" col=\"5\" wordWrap=\"char\"/><Cell row=\"1\" col=\"6\" wordWrap=\"char\"/><Cell row=\"1\" col=\"7\" wordWrap=\"char\"/><Cell row=\"1\" col=\"8\" wordWrap=\"char\"/><Cell row=\"1\" col=\"9\" wordWrap=\"char\"/><Cell row=\"1\" col=\"10\" wordWrap=\"char\"/><Cell row=\"1\" col=\"11\" wordWrap=\"char\"/><Cell row=\"1\" col=\"12\" wordWrap=\"char\"/><Cell row=\"1\" col=\"13\" wordWrap=\"char\"/><Cell row=\"1\" col=\"14\" wordWrap=\"char\"/><Cell row=\"1\" col=\"15\" wordWrap=\"char\"/><Cell row=\"1\" col=\"16\" wordWrap=\"char\"/><Cell row=\"1\" col=\"17\" wordWrap=\"char\"/><Cell row=\"1\" col=\"18\" wordWrap=\"char\"/><Cell row=\"1\" col=\"19\" wordWrap=\"char\"/><Cell row=\"1\" col=\"20\" wordWrap=\"char\"/><Cell row=\"1\" col=\"21\" wordWrap=\"char\"/><Cell row=\"1\" col=\"22\" wordWrap=\"char\"/><Cell row=\"1\" col=\"23\" wordWrap=\"char\"/><Cell row=\"1\" col=\"24\" wordWrap=\"char\"/><Cell row=\"1\" col=\"25\" wordWrap=\"char\"/><Cell row=\"1\" col=\"26\" wordWrap=\"char\"/><Cell row=\"1\" col=\"27\" wordWrap=\"char\"/><Cell row=\"1\" col=\"28\" wordWrap=\"char\"/><Cell row=\"1\" col=\"29\" wordWrap=\"char\"/><Cell row=\"1\" col=\"30\" wordWrap=\"char\"/><Cell row=\"1\" col=\"31\" wordWrap=\"char\"/><Cell row=\"1\" col=\"32\" wordWrap=\"char\"/><Cell row=\"1\" col=\"33\" wordWrap=\"char\"/><Cell row=\"1\" col=\"34\" wordWrap=\"char\"/><Cell row=\"1\" col=\"35\" wordWrap=\"char\"/><Cell row=\"1\" col=\"36\" wordWrap=\"char\"/><Cell row=\"1\" col=\"37\" wordWrap=\"char\"/><Cell row=\"1\" col=\"38\" wordWrap=\"char\"/><Cell row=\"1\" col=\"39\" wordWrap=\"char\"/><Cell row=\"1\" col=\"40\" wordWrap=\"char\"/><Cell row=\"1\" col=\"41\" wordWrap=\"char\"/><Cell row=\"1\" col=\"42\" wordWrap=\"char\"/><Cell row=\"1\" col=\"43\" wordWrap=\"char\"/><Cell row=\"1\" col=\"44\" wordWrap=\"char\"/><Cell row=\"1\" col=\"45\" wordWrap=\"char\"/><Cell row=\"1\" col=\"46\" wordWrap=\"char\"/><Cell row=\"1\" col=\"47\" wordWrap=\"char\"/><Cell row=\"1\" col=\"48\" wordWrap=\"char\"/><Cell row=\"1\" col=\"49\" wordWrap=\"char\"/><Cell row=\"1\" col=\"50\" wordWrap=\"char\"/><Cell row=\"1\" col=\"51\" wordWrap=\"char\"/><Cell row=\"1\" col=\"52\" wordWrap=\"char\"/><Cell row=\"1\" col=\"53\" wordWrap=\"char\" cssclass=\"CellEnd\"/><Cell row=\"2\" col=\"2\" text=\"bind:신청_1월\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"2\" col=\"3\" text=\"bind:접수_1월\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"2\" col=\"4\" text=\"bind:처리_1월\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"2\" col=\"5\" text=\"bind:완료_1월\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"2\" col=\"6\" text=\"bind:신청_2월\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"2\" col=\"7\" text=\"bind:접수_2월\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"2\" col=\"8\" text=\"bind:처리_2월\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"2\" col=\"9\" text=\"bind:완료_2월\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"2\" col=\"10\" text=\"bind:신청_3월\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"2\" col=\"11\" text=\"bind:접수_3월\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"2\" col=\"12\" text=\"bind:처리_3월\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"2\" col=\"13\" text=\"bind:완료_3월\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"2\" col=\"14\" text=\"bind:신청_4월\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"2\" col=\"15\" text=\"bind:접수_4월\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"2\" col=\"16\" text=\"bind:처리_4월\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"2\" col=\"17\" text=\"bind:완료_4월\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"2\" col=\"18\" text=\"bind:신청_5월\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"2\" col=\"19\" text=\"bind:접수_5월\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"2\" col=\"20\" text=\"bind:처리_5월\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"2\" col=\"21\" text=\"bind:완료_5월\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"2\" col=\"22\" text=\"bind:신청_6월\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"2\" col=\"23\" text=\"bind:접수_6월\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"2\" col=\"24\" text=\"bind:처리_6월\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"2\" col=\"25\" text=\"bind:완료_6월\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"2\" col=\"26\" text=\"bind:신청_7월\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"2\" col=\"27\" text=\"bind:접수_7월\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"2\" col=\"28\" text=\"bind:처리_7월\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"2\" col=\"29\" text=\"bind:완료_7월\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"2\" col=\"30\" text=\"bind:신청_8월\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"2\" col=\"31\" text=\"bind:접수_8월\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"2\" col=\"32\" text=\"bind:처리_8월\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"2\" col=\"33\" text=\"bind:완료_8월\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"2\" col=\"34\" text=\"bind:신청_9월\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"2\" col=\"35\" text=\"bind:접수_9월\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"2\" col=\"36\" text=\"bind:처리_9월\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"2\" col=\"37\" text=\"bind:완료_9월\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"2\" col=\"38\" text=\"bind:신청_10월\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"2\" col=\"39\" text=\"bind:접수_10월\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"2\" col=\"40\" text=\"bind:처리_10월\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"2\" col=\"41\" text=\"bind:완료_10월\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"2\" col=\"42\" text=\"bind:신청_11월\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"2\" col=\"43\" text=\"bind:접수_11월\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"2\" col=\"44\" text=\"bind:처리_11월\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"2\" col=\"45\" text=\"bind:완료_11월\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"2\" col=\"46\" text=\"bind:신청_12월\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"2\" col=\"47\" text=\"bind:접수_12월\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"2\" col=\"48\" text=\"bind:처리_12월\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"2\" col=\"49\" text=\"bind:완료_12월\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"2\" col=\"50\" text=\"bind:신청_합계\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"2\" col=\"51\" text=\"bind:접수_합계\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"2\" col=\"52\" text=\"bind:처리_합계\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"2\" col=\"53\" text=\"bind:완료_합계\" cssclass=\"CellEnd\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"3\" col=\"2\" wordWrap=\"char\"/><Cell row=\"3\" col=\"3\" wordWrap=\"char\"/><Cell row=\"3\" col=\"4\" wordWrap=\"char\"/><Cell row=\"3\" col=\"5\" wordWrap=\"char\"/><Cell row=\"3\" col=\"6\" wordWrap=\"char\"/><Cell row=\"3\" col=\"7\" wordWrap=\"char\"/><Cell row=\"3\" col=\"8\" wordWrap=\"char\"/><Cell row=\"3\" col=\"9\" wordWrap=\"char\"/><Cell row=\"3\" col=\"10\" wordWrap=\"char\"/><Cell row=\"3\" col=\"11\" wordWrap=\"char\"/><Cell row=\"3\" col=\"12\" wordWrap=\"char\"/><Cell row=\"3\" col=\"13\" wordWrap=\"char\"/><Cell row=\"3\" col=\"14\" wordWrap=\"char\"/><Cell row=\"3\" col=\"15\" wordWrap=\"char\"/><Cell row=\"3\" col=\"16\" wordWrap=\"char\"/><Cell row=\"3\" col=\"17\" wordWrap=\"char\"/><Cell row=\"3\" col=\"18\" wordWrap=\"char\"/><Cell row=\"3\" col=\"19\" wordWrap=\"char\"/><Cell row=\"3\" col=\"20\" wordWrap=\"char\"/><Cell row=\"3\" col=\"21\" wordWrap=\"char\"/><Cell row=\"3\" col=\"22\" wordWrap=\"char\"/><Cell row=\"3\" col=\"23\" wordWrap=\"char\"/><Cell row=\"3\" col=\"24\" wordWrap=\"char\"/><Cell row=\"3\" col=\"25\" wordWrap=\"char\"/><Cell row=\"3\" col=\"26\" wordWrap=\"char\"/><Cell row=\"3\" col=\"27\" wordWrap=\"char\"/><Cell row=\"3\" col=\"28\" wordWrap=\"char\"/><Cell row=\"3\" col=\"29\" wordWrap=\"char\"/><Cell row=\"3\" col=\"30\" wordWrap=\"char\"/><Cell row=\"3\" col=\"31\" wordWrap=\"char\"/><Cell row=\"3\" col=\"32\" wordWrap=\"char\"/><Cell row=\"3\" col=\"33\" wordWrap=\"char\"/><Cell row=\"3\" col=\"34\" wordWrap=\"char\"/><Cell row=\"3\" col=\"35\" wordWrap=\"char\"/><Cell row=\"3\" col=\"36\" wordWrap=\"char\"/><Cell row=\"3\" col=\"37\" wordWrap=\"char\"/><Cell row=\"3\" col=\"38\" wordWrap=\"char\"/><Cell row=\"3\" col=\"39\" wordWrap=\"char\"/><Cell row=\"3\" col=\"40\" wordWrap=\"char\"/><Cell row=\"3\" col=\"41\" wordWrap=\"char\"/><Cell row=\"3\" col=\"42\" wordWrap=\"char\"/><Cell row=\"3\" col=\"43\" wordWrap=\"char\"/><Cell row=\"3\" col=\"44\" wordWrap=\"char\"/><Cell row=\"3\" col=\"45\" wordWrap=\"char\"/><Cell row=\"3\" col=\"46\" wordWrap=\"char\"/><Cell row=\"3\" col=\"47\" wordWrap=\"char\"/><Cell row=\"3\" col=\"48\" wordWrap=\"char\"/><Cell row=\"3\" col=\"49\" wordWrap=\"char\"/><Cell row=\"3\" col=\"50\" wordWrap=\"char\"/><Cell row=\"3\" col=\"51\" wordWrap=\"char\"/><Cell row=\"3\" col=\"52\" wordWrap=\"char\"/><Cell row=\"3\" col=\"53\" wordWrap=\"char\" cssclass=\"CellEnd\"/><Cell row=\"4\" col=\"2\" wordWrap=\"char\"/><Cell row=\"4\" col=\"3\" wordWrap=\"char\"/><Cell row=\"4\" col=\"4\" wordWrap=\"char\"/><Cell row=\"4\" col=\"5\" wordWrap=\"char\"/><Cell row=\"4\" col=\"6\" wordWrap=\"char\"/><Cell row=\"4\" col=\"7\" wordWrap=\"char\"/><Cell row=\"4\" col=\"8\" wordWrap=\"char\"/><Cell row=\"4\" col=\"9\" wordWrap=\"char\"/><Cell row=\"4\" col=\"10\" wordWrap=\"char\"/><Cell row=\"4\" col=\"11\" wordWrap=\"char\"/><Cell row=\"4\" col=\"12\" wordWrap=\"char\"/><Cell row=\"4\" col=\"13\" wordWrap=\"char\"/><Cell row=\"4\" col=\"14\" wordWrap=\"char\"/><Cell row=\"4\" col=\"15\" wordWrap=\"char\"/><Cell row=\"4\" col=\"16\" wordWrap=\"char\"/><Cell row=\"4\" col=\"17\" wordWrap=\"char\"/><Cell row=\"4\" col=\"18\" wordWrap=\"char\"/><Cell row=\"4\" col=\"19\" wordWrap=\"char\"/><Cell row=\"4\" col=\"20\" wordWrap=\"char\"/><Cell row=\"4\" col=\"21\" wordWrap=\"char\"/><Cell row=\"4\" col=\"22\" wordWrap=\"char\"/><Cell row=\"4\" col=\"23\" wordWrap=\"char\"/><Cell row=\"4\" col=\"24\" wordWrap=\"char\"/><Cell row=\"4\" col=\"25\" wordWrap=\"char\"/><Cell row=\"4\" col=\"26\" wordWrap=\"char\"/><Cell row=\"4\" col=\"27\" wordWrap=\"char\"/><Cell row=\"4\" col=\"28\" wordWrap=\"char\"/><Cell row=\"4\" col=\"29\" wordWrap=\"char\"/><Cell row=\"4\" col=\"30\" wordWrap=\"char\"/><Cell row=\"4\" col=\"31\" wordWrap=\"char\"/><Cell row=\"4\" col=\"32\" wordWrap=\"char\"/><Cell row=\"4\" col=\"33\" wordWrap=\"char\"/><Cell row=\"4\" col=\"34\" wordWrap=\"char\"/><Cell row=\"4\" col=\"35\" wordWrap=\"char\"/><Cell row=\"4\" col=\"36\" wordWrap=\"char\"/><Cell row=\"4\" col=\"37\" wordWrap=\"char\"/><Cell row=\"4\" col=\"38\" wordWrap=\"char\"/><Cell row=\"4\" col=\"39\" wordWrap=\"char\"/><Cell row=\"4\" col=\"40\" wordWrap=\"char\"/><Cell row=\"4\" col=\"41\" wordWrap=\"char\"/><Cell row=\"4\" col=\"42\" wordWrap=\"char\"/><Cell row=\"4\" col=\"43\" wordWrap=\"char\"/><Cell row=\"4\" col=\"44\" wordWrap=\"char\"/><Cell row=\"4\" col=\"45\" wordWrap=\"char\"/><Cell row=\"4\" col=\"46\" wordWrap=\"char\"/><Cell row=\"4\" col=\"47\" wordWrap=\"char\"/><Cell row=\"4\" col=\"48\" wordWrap=\"char\"/><Cell row=\"4\" col=\"49\" wordWrap=\"char\"/><Cell row=\"4\" col=\"50\" wordWrap=\"char\"/><Cell row=\"4\" col=\"51\" wordWrap=\"char\"/><Cell row=\"4\" col=\"52\" wordWrap=\"char\"/><Cell row=\"4\" col=\"53\" wordWrap=\"char\" cssclass=\"CellEnd\"/><Cell row=\"5\" col=\"2\" wordWrap=\"char\"/><Cell row=\"5\" col=\"3\" wordWrap=\"char\"/><Cell row=\"5\" col=\"4\" wordWrap=\"char\"/><Cell row=\"5\" col=\"5\" wordWrap=\"char\"/><Cell row=\"5\" col=\"6\" wordWrap=\"char\"/><Cell row=\"5\" col=\"7\" wordWrap=\"char\"/><Cell row=\"5\" col=\"8\" wordWrap=\"char\"/><Cell row=\"5\" col=\"9\" wordWrap=\"char\"/><Cell row=\"5\" col=\"10\" wordWrap=\"char\"/><Cell row=\"5\" col=\"11\" wordWrap=\"char\"/><Cell row=\"5\" col=\"12\" wordWrap=\"char\"/><Cell row=\"5\" col=\"13\" wordWrap=\"char\"/><Cell row=\"5\" col=\"14\" wordWrap=\"char\"/><Cell row=\"5\" col=\"15\" wordWrap=\"char\"/><Cell row=\"5\" col=\"16\" wordWrap=\"char\"/><Cell row=\"5\" col=\"17\" wordWrap=\"char\"/><Cell row=\"5\" col=\"18\" wordWrap=\"char\"/><Cell row=\"5\" col=\"19\" wordWrap=\"char\"/><Cell row=\"5\" col=\"20\" wordWrap=\"char\"/><Cell row=\"5\" col=\"21\" wordWrap=\"char\"/><Cell row=\"5\" col=\"22\" wordWrap=\"char\"/><Cell row=\"5\" col=\"23\" wordWrap=\"char\"/><Cell row=\"5\" col=\"24\" wordWrap=\"char\"/><Cell row=\"5\" col=\"25\" wordWrap=\"char\"/><Cell row=\"5\" col=\"26\" wordWrap=\"char\"/><Cell row=\"5\" col=\"27\" wordWrap=\"char\"/><Cell row=\"5\" col=\"28\" wordWrap=\"char\"/><Cell row=\"5\" col=\"29\" wordWrap=\"char\"/><Cell row=\"5\" col=\"30\" wordWrap=\"char\"/><Cell row=\"5\" col=\"31\" wordWrap=\"char\"/><Cell row=\"5\" col=\"32\" wordWrap=\"char\"/><Cell row=\"5\" col=\"33\" wordWrap=\"char\"/><Cell row=\"5\" col=\"34\" wordWrap=\"char\"/><Cell row=\"5\" col=\"35\" wordWrap=\"char\"/><Cell row=\"5\" col=\"36\" wordWrap=\"char\"/><Cell row=\"5\" col=\"37\" wordWrap=\"char\"/><Cell row=\"5\" col=\"38\" wordWrap=\"char\"/><Cell row=\"5\" col=\"39\" wordWrap=\"char\"/><Cell row=\"5\" col=\"40\" wordWrap=\"char\"/><Cell row=\"5\" col=\"41\" wordWrap=\"char\"/><Cell row=\"5\" col=\"42\" wordWrap=\"char\"/><Cell row=\"5\" col=\"43\" wordWrap=\"char\"/><Cell row=\"5\" col=\"44\" wordWrap=\"char\"/><Cell row=\"5\" col=\"45\" wordWrap=\"char\"/><Cell row=\"5\" col=\"46\" wordWrap=\"char\"/><Cell row=\"5\" col=\"47\" wordWrap=\"char\"/><Cell row=\"5\" col=\"48\" wordWrap=\"char\"/><Cell row=\"5\" col=\"49\" wordWrap=\"char\"/><Cell row=\"5\" col=\"50\" wordWrap=\"char\"/><Cell row=\"5\" col=\"51\" wordWrap=\"char\"/><Cell row=\"5\" col=\"52\" wordWrap=\"char\"/><Cell row=\"5\" col=\"53\" wordWrap=\"char\" cssclass=\"CellEnd\"/><Cell row=\"6\" col=\"2\" wordWrap=\"char\"/><Cell row=\"6\" col=\"3\" wordWrap=\"char\"/><Cell row=\"6\" col=\"4\" wordWrap=\"char\"/><Cell row=\"6\" col=\"5\" wordWrap=\"char\"/><Cell row=\"6\" col=\"6\" wordWrap=\"char\"/><Cell row=\"6\" col=\"7\" wordWrap=\"char\"/><Cell row=\"6\" col=\"8\" wordWrap=\"char\"/><Cell row=\"6\" col=\"9\" wordWrap=\"char\"/><Cell row=\"6\" col=\"10\" wordWrap=\"char\"/><Cell row=\"6\" col=\"11\" wordWrap=\"char\"/><Cell row=\"6\" col=\"12\" wordWrap=\"char\"/><Cell row=\"6\" col=\"13\" wordWrap=\"char\"/><Cell row=\"6\" col=\"14\" wordWrap=\"char\"/><Cell row=\"6\" col=\"15\" wordWrap=\"char\"/><Cell row=\"6\" col=\"16\" wordWrap=\"char\"/><Cell row=\"6\" col=\"17\" wordWrap=\"char\"/><Cell row=\"6\" col=\"18\" wordWrap=\"char\"/><Cell row=\"6\" col=\"19\" wordWrap=\"char\"/><Cell row=\"6\" col=\"20\" wordWrap=\"char\"/><Cell row=\"6\" col=\"21\" wordWrap=\"char\"/><Cell row=\"6\" col=\"22\" wordWrap=\"char\"/><Cell row=\"6\" col=\"23\" wordWrap=\"char\"/><Cell row=\"6\" col=\"24\" wordWrap=\"char\"/><Cell row=\"6\" col=\"25\" wordWrap=\"char\"/><Cell row=\"6\" col=\"26\" wordWrap=\"char\"/><Cell row=\"6\" col=\"27\" wordWrap=\"char\"/><Cell row=\"6\" col=\"28\" wordWrap=\"char\"/><Cell row=\"6\" col=\"29\" wordWrap=\"char\"/><Cell row=\"6\" col=\"30\" wordWrap=\"char\"/><Cell row=\"6\" col=\"31\" wordWrap=\"char\"/><Cell row=\"6\" col=\"32\" wordWrap=\"char\"/><Cell row=\"6\" col=\"33\" wordWrap=\"char\"/><Cell row=\"6\" col=\"34\" wordWrap=\"char\"/><Cell row=\"6\" col=\"35\" wordWrap=\"char\"/><Cell row=\"6\" col=\"36\" wordWrap=\"char\"/><Cell row=\"6\" col=\"37\" wordWrap=\"char\"/><Cell row=\"6\" col=\"38\" wordWrap=\"char\"/><Cell row=\"6\" col=\"39\" wordWrap=\"char\"/><Cell row=\"6\" col=\"40\" wordWrap=\"char\"/><Cell row=\"6\" col=\"41\" wordWrap=\"char\"/><Cell row=\"6\" col=\"42\" wordWrap=\"char\"/><Cell row=\"6\" col=\"43\" wordWrap=\"char\"/><Cell row=\"6\" col=\"44\" wordWrap=\"char\"/><Cell row=\"6\" col=\"45\" wordWrap=\"char\"/><Cell row=\"6\" col=\"46\" wordWrap=\"char\"/><Cell row=\"6\" col=\"47\" wordWrap=\"char\"/><Cell row=\"6\" col=\"48\" wordWrap=\"char\"/><Cell row=\"6\" col=\"49\" wordWrap=\"char\"/><Cell row=\"6\" col=\"50\" wordWrap=\"char\"/><Cell row=\"6\" col=\"51\" wordWrap=\"char\"/><Cell row=\"6\" col=\"52\" wordWrap=\"char\"/><Cell row=\"6\" col=\"53\" wordWrap=\"char\" cssclass=\"CellEnd\"/><Cell row=\"7\" col=\"2\" wordWrap=\"char\"/><Cell row=\"7\" col=\"3\" wordWrap=\"char\"/><Cell row=\"7\" col=\"4\" wordWrap=\"char\"/><Cell row=\"7\" col=\"5\" wordWrap=\"char\"/><Cell row=\"7\" col=\"6\" wordWrap=\"char\"/><Cell row=\"7\" col=\"7\" wordWrap=\"char\"/><Cell row=\"7\" col=\"8\" wordWrap=\"char\"/><Cell row=\"7\" col=\"9\" wordWrap=\"char\"/><Cell row=\"7\" col=\"10\" wordWrap=\"char\"/><Cell row=\"7\" col=\"11\" wordWrap=\"char\"/><Cell row=\"7\" col=\"12\" wordWrap=\"char\"/><Cell row=\"7\" col=\"13\" wordWrap=\"char\"/><Cell row=\"7\" col=\"14\" wordWrap=\"char\"/><Cell row=\"7\" col=\"15\" wordWrap=\"char\"/><Cell row=\"7\" col=\"16\" wordWrap=\"char\"/><Cell row=\"7\" col=\"17\" wordWrap=\"char\"/><Cell row=\"7\" col=\"18\" wordWrap=\"char\"/><Cell row=\"7\" col=\"19\" wordWrap=\"char\"/><Cell row=\"7\" col=\"20\" wordWrap=\"char\"/><Cell row=\"7\" col=\"21\" wordWrap=\"char\"/><Cell row=\"7\" col=\"22\" wordWrap=\"char\"/><Cell row=\"7\" col=\"23\" wordWrap=\"char\"/><Cell row=\"7\" col=\"24\" wordWrap=\"char\"/><Cell row=\"7\" col=\"25\" wordWrap=\"char\"/><Cell row=\"7\" col=\"26\" wordWrap=\"char\"/><Cell row=\"7\" col=\"27\" wordWrap=\"char\"/><Cell row=\"7\" col=\"28\" wordWrap=\"char\"/><Cell row=\"7\" col=\"29\" wordWrap=\"char\"/><Cell row=\"7\" col=\"30\" wordWrap=\"char\"/><Cell row=\"7\" col=\"31\" wordWrap=\"char\"/><Cell row=\"7\" col=\"32\" wordWrap=\"char\"/><Cell row=\"7\" col=\"33\" wordWrap=\"char\"/><Cell row=\"7\" col=\"34\" wordWrap=\"char\"/><Cell row=\"7\" col=\"35\" wordWrap=\"char\"/><Cell row=\"7\" col=\"36\" wordWrap=\"char\"/><Cell row=\"7\" col=\"37\" wordWrap=\"char\"/><Cell row=\"7\" col=\"38\" wordWrap=\"char\"/><Cell row=\"7\" col=\"39\" wordWrap=\"char\"/><Cell row=\"7\" col=\"40\" wordWrap=\"char\"/><Cell row=\"7\" col=\"41\" wordWrap=\"char\"/><Cell row=\"7\" col=\"42\" wordWrap=\"char\"/><Cell row=\"7\" col=\"43\" wordWrap=\"char\"/><Cell row=\"7\" col=\"44\" wordWrap=\"char\"/><Cell row=\"7\" col=\"45\" wordWrap=\"char\"/><Cell row=\"7\" col=\"46\" wordWrap=\"char\"/><Cell row=\"7\" col=\"47\" wordWrap=\"char\"/><Cell row=\"7\" col=\"48\" wordWrap=\"char\"/><Cell row=\"7\" col=\"49\" wordWrap=\"char\"/><Cell row=\"7\" col=\"50\" wordWrap=\"char\"/><Cell row=\"7\" col=\"51\" wordWrap=\"char\"/><Cell row=\"7\" col=\"52\" wordWrap=\"char\"/><Cell row=\"7\" col=\"53\" wordWrap=\"char\" cssclass=\"CellEnd\"/><Cell row=\"8\" col=\"2\" wordWrap=\"char\"/><Cell row=\"8\" col=\"3\" wordWrap=\"char\"/><Cell row=\"8\" col=\"4\" wordWrap=\"char\"/><Cell row=\"8\" col=\"5\" wordWrap=\"char\"/><Cell row=\"8\" col=\"6\" wordWrap=\"char\"/><Cell row=\"8\" col=\"7\" wordWrap=\"char\"/><Cell row=\"8\" col=\"8\" wordWrap=\"char\"/><Cell row=\"8\" col=\"9\" wordWrap=\"char\"/><Cell row=\"8\" col=\"10\" wordWrap=\"char\"/><Cell row=\"8\" col=\"11\" wordWrap=\"char\"/><Cell row=\"8\" col=\"12\" wordWrap=\"char\"/><Cell row=\"8\" col=\"13\" wordWrap=\"char\"/><Cell row=\"8\" col=\"14\" wordWrap=\"char\"/><Cell row=\"8\" col=\"15\" wordWrap=\"char\"/><Cell row=\"8\" col=\"16\" wordWrap=\"char\"/><Cell row=\"8\" col=\"17\" wordWrap=\"char\"/><Cell row=\"8\" col=\"18\" wordWrap=\"char\"/><Cell row=\"8\" col=\"19\" wordWrap=\"char\"/><Cell row=\"8\" col=\"20\" wordWrap=\"char\"/><Cell row=\"8\" col=\"21\" wordWrap=\"char\"/><Cell row=\"8\" col=\"22\" wordWrap=\"char\"/><Cell row=\"8\" col=\"23\" wordWrap=\"char\"/><Cell row=\"8\" col=\"24\" wordWrap=\"char\"/><Cell row=\"8\" col=\"25\" wordWrap=\"char\"/><Cell row=\"8\" col=\"26\" wordWrap=\"char\"/><Cell row=\"8\" col=\"27\" wordWrap=\"char\"/><Cell row=\"8\" col=\"28\" wordWrap=\"char\"/><Cell row=\"8\" col=\"29\" wordWrap=\"char\"/><Cell row=\"8\" col=\"30\" wordWrap=\"char\"/><Cell row=\"8\" col=\"31\" wordWrap=\"char\"/><Cell row=\"8\" col=\"32\" wordWrap=\"char\"/><Cell row=\"8\" col=\"33\" wordWrap=\"char\"/><Cell row=\"8\" col=\"34\" wordWrap=\"char\"/><Cell row=\"8\" col=\"35\" wordWrap=\"char\"/><Cell row=\"8\" col=\"36\" wordWrap=\"char\"/><Cell row=\"8\" col=\"37\" wordWrap=\"char\"/><Cell row=\"8\" col=\"38\" wordWrap=\"char\"/><Cell row=\"8\" col=\"39\" wordWrap=\"char\"/><Cell row=\"8\" col=\"40\" wordWrap=\"char\"/><Cell row=\"8\" col=\"41\" wordWrap=\"char\"/><Cell row=\"8\" col=\"42\" wordWrap=\"char\"/><Cell row=\"8\" col=\"43\" wordWrap=\"char\"/><Cell row=\"8\" col=\"44\" wordWrap=\"char\"/><Cell row=\"8\" col=\"45\" wordWrap=\"char\"/><Cell row=\"8\" col=\"46\" wordWrap=\"char\"/><Cell row=\"8\" col=\"47\" wordWrap=\"char\"/><Cell row=\"8\" col=\"48\" wordWrap=\"char\"/><Cell row=\"8\" col=\"49\" wordWrap=\"char\"/><Cell row=\"8\" col=\"50\" wordWrap=\"char\"/><Cell row=\"8\" col=\"51\" wordWrap=\"char\"/><Cell row=\"8\" col=\"52\" wordWrap=\"char\"/><Cell row=\"8\" col=\"53\" wordWrap=\"char\" cssclass=\"CellEnd\"/></Band><Band id=\"summary\"><Cell cssclass=\"CellSum01\" wordWrap=\"char\"/><Cell col=\"1\" cssclass=\"CellSum01\" text=\"소계\" wordWrap=\"char\"/><Cell col=\"2\" cssclass=\"CellSum01\" wordWrap=\"char\"/><Cell col=\"3\" cssclass=\"CellSum01\" wordWrap=\"char\"/><Cell col=\"4\" cssclass=\"CellSum01\" wordWrap=\"char\"/><Cell col=\"5\" cssclass=\"CellSum01\" wordWrap=\"char\"/><Cell col=\"6\" cssclass=\"CellSum01\" wordWrap=\"char\"/><Cell col=\"7\" cssclass=\"CellSum01\" wordWrap=\"char\"/><Cell col=\"8\" cssclass=\"CellSum01\" wordWrap=\"char\"/><Cell col=\"9\" cssclass=\"CellSum01\" wordWrap=\"char\"/><Cell col=\"10\" cssclass=\"CellSum01\" wordWrap=\"char\"/><Cell col=\"11\" cssclass=\"CellSum01\" wordWrap=\"char\"/><Cell col=\"12\" cssclass=\"CellSum01\" wordWrap=\"char\"/><Cell col=\"13\" cssclass=\"CellSum01\" wordWrap=\"char\"/><Cell col=\"14\" cssclass=\"CellSum01\" wordWrap=\"char\"/><Cell col=\"15\" cssclass=\"CellSum01\" wordWrap=\"char\"/><Cell col=\"16\" cssclass=\"CellSum01\" wordWrap=\"char\"/><Cell col=\"17\" cssclass=\"CellSum01\" wordWrap=\"char\"/><Cell col=\"18\" cssclass=\"CellSum01\" wordWrap=\"char\"/><Cell col=\"19\" cssclass=\"CellSum01\" wordWrap=\"char\"/><Cell col=\"20\" cssclass=\"CellSum01\" wordWrap=\"char\"/><Cell col=\"21\" cssclass=\"CellSum01\" wordWrap=\"char\"/><Cell col=\"22\" cssclass=\"CellSum01\" wordWrap=\"char\"/><Cell col=\"23\" cssclass=\"CellSum01\" wordWrap=\"char\"/><Cell col=\"24\" cssclass=\"CellSum01\" wordWrap=\"char\"/><Cell col=\"25\" cssclass=\"CellSum01\" wordWrap=\"char\"/><Cell col=\"26\" cssclass=\"CellSum01\" wordWrap=\"char\"/><Cell col=\"27\" cssclass=\"CellSum01\" wordWrap=\"char\"/><Cell col=\"28\" cssclass=\"CellSum01\" wordWrap=\"char\"/><Cell col=\"29\" cssclass=\"CellSum01\" wordWrap=\"char\"/><Cell col=\"30\" cssclass=\"CellSum01\" wordWrap=\"char\"/><Cell col=\"31\" cssclass=\"CellSum01\" wordWrap=\"char\"/><Cell col=\"32\" cssclass=\"CellSum01\" wordWrap=\"char\"/><Cell col=\"33\" cssclass=\"CellSum01\" wordWrap=\"char\"/><Cell col=\"34\" cssclass=\"CellSum01\" wordWrap=\"char\"/><Cell col=\"35\" cssclass=\"CellSum01\" wordWrap=\"char\"/><Cell col=\"36\" cssclass=\"CellSum01\" wordWrap=\"char\"/><Cell col=\"37\" cssclass=\"CellSum01\" wordWrap=\"char\"/><Cell col=\"38\" cssclass=\"CellSum01\" wordWrap=\"char\"/><Cell col=\"39\" cssclass=\"CellSum01\" wordWrap=\"char\"/><Cell col=\"40\" cssclass=\"CellSum01\" wordWrap=\"char\"/><Cell col=\"41\" cssclass=\"CellSum01\" wordWrap=\"char\"/><Cell col=\"42\" cssclass=\"CellSum01\" wordWrap=\"char\"/><Cell col=\"43\" cssclass=\"CellSum01\" wordWrap=\"char\"/><Cell col=\"44\" cssclass=\"CellSum01\" wordWrap=\"char\"/><Cell col=\"45\" cssclass=\"CellSum01\" wordWrap=\"char\"/><Cell col=\"46\" cssclass=\"CellSum01\" wordWrap=\"char\"/><Cell col=\"47\" cssclass=\"CellSum01\" wordWrap=\"char\"/><Cell col=\"48\" cssclass=\"CellSum01\" wordWrap=\"char\"/><Cell col=\"49\" cssclass=\"CellSum01\" wordWrap=\"char\"/><Cell col=\"50\" cssclass=\"CellSum01\" wordWrap=\"char\"/><Cell col=\"51\" cssclass=\"CellSum01\" wordWrap=\"char\"/><Cell col=\"52\" cssclass=\"CellSum01\" wordWrap=\"char\"/><Cell col=\"53\" cssclass=\"CellSum01, CellEnd\" wordWrap=\"char\"/><Cell row=\"1\" colspan=\"2\" text=\"총합\" wordWrap=\"char\"/><Cell row=\"1\" col=\"2\" wordWrap=\"char\"/><Cell row=\"1\" col=\"3\" wordWrap=\"char\"/><Cell row=\"1\" col=\"4\" wordWrap=\"char\"/><Cell row=\"1\" col=\"5\" wordWrap=\"char\"/><Cell row=\"1\" col=\"6\" wordWrap=\"char\"/><Cell row=\"1\" col=\"7\" wordWrap=\"char\"/><Cell row=\"1\" col=\"8\" wordWrap=\"char\"/><Cell row=\"1\" col=\"9\" wordWrap=\"char\"/><Cell row=\"1\" col=\"10\" wordWrap=\"char\"/><Cell row=\"1\" col=\"11\" wordWrap=\"char\"/><Cell row=\"1\" col=\"12\" wordWrap=\"char\"/><Cell row=\"1\" col=\"13\" wordWrap=\"char\"/><Cell row=\"1\" col=\"14\" wordWrap=\"char\"/><Cell row=\"1\" col=\"15\" wordWrap=\"char\"/><Cell row=\"1\" col=\"16\" wordWrap=\"char\"/><Cell row=\"1\" col=\"17\" wordWrap=\"char\"/><Cell row=\"1\" col=\"18\" wordWrap=\"char\"/><Cell row=\"1\" col=\"19\" wordWrap=\"char\"/><Cell row=\"1\" col=\"20\" wordWrap=\"char\"/><Cell row=\"1\" col=\"21\" wordWrap=\"char\"/><Cell row=\"1\" col=\"22\" wordWrap=\"char\"/><Cell row=\"1\" col=\"23\" wordWrap=\"char\"/><Cell row=\"1\" col=\"24\" wordWrap=\"char\"/><Cell row=\"1\" col=\"25\" wordWrap=\"char\"/><Cell row=\"1\" col=\"26\" wordWrap=\"char\"/><Cell row=\"1\" col=\"27\" wordWrap=\"char\"/><Cell row=\"1\" col=\"28\" wordWrap=\"char\"/><Cell row=\"1\" col=\"29\" wordWrap=\"char\"/><Cell row=\"1\" col=\"30\" wordWrap=\"char\"/><Cell row=\"1\" col=\"31\" wordWrap=\"char\"/><Cell row=\"1\" col=\"32\" wordWrap=\"char\"/><Cell row=\"1\" col=\"33\" wordWrap=\"char\"/><Cell row=\"1\" col=\"34\" wordWrap=\"char\"/><Cell row=\"1\" col=\"35\" wordWrap=\"char\"/><Cell row=\"1\" col=\"36\" wordWrap=\"char\"/><Cell row=\"1\" col=\"37\" wordWrap=\"char\"/><Cell row=\"1\" col=\"38\" wordWrap=\"char\"/><Cell row=\"1\" col=\"39\" wordWrap=\"char\"/><Cell row=\"1\" col=\"40\" wordWrap=\"char\"/><Cell row=\"1\" col=\"41\" wordWrap=\"char\"/><Cell row=\"1\" col=\"42\" wordWrap=\"char\"/><Cell row=\"1\" col=\"43\" wordWrap=\"char\"/><Cell row=\"1\" col=\"44\" wordWrap=\"char\"/><Cell row=\"1\" col=\"45\" wordWrap=\"char\"/><Cell row=\"1\" col=\"46\" wordWrap=\"char\"/><Cell row=\"1\" col=\"47\" wordWrap=\"char\"/><Cell row=\"1\" col=\"48\" wordWrap=\"char\"/><Cell row=\"1\" col=\"49\" wordWrap=\"char\"/><Cell row=\"1\" col=\"50\" wordWrap=\"char\"/><Cell row=\"1\" col=\"51\" wordWrap=\"char\"/><Cell row=\"1\" col=\"52\" wordWrap=\"char\"/><Cell row=\"1\" col=\"53\" cssclass=\"CellEnd\" wordWrap=\"char\"/></Band></Format></Formats>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn",null,"0","70%","34","0",null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_fittocontents("width");
            obj.set_horizontalgap("10");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem05\" componentid=\"btnGrdDw\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDw","1296","0","134","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_text("다운로드(엑셀)");
            obj.set_cssclass("btn_WF_GrdDw");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTitle
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSch.form.divCal.form
            obj = new Layout("default","",0,0,this.divSch.form.divCal.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.calSdate.set_taborder("1");
                p.calSdate.set_dateformat("yyyy-MM-dd");
                p.calSdate.move("0","0","100%","40",null,null);

                p.sta00.set_taborder("0");
                p.sta00.set_text("~");
                p.sta00.set_cssclass("sta_WF_Dash");
                p.sta00.set_fittocontents("width");
                p.sta00.move("10","0","20","40",null,null);

                p.calEdate.set_taborder("2");
                p.calEdate.set_dateformat("yyyy-MM-dd");
                p.calEdate.move("10","0","100%","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            this.divSch.form.divCal.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divSch.form.divCal.form
            obj = new Layout("Phone_screen","",0,0,this.divSch.form.divCal.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            this.divSch.form.divCal.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divSch.form
            obj = new Layout("default","",0,0,this.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel01.set_taborder("11");
                p.Panel01.set_type("horizontal");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.set_flexgrow("2");
                p.Panel01.set_fittocontents("height");
                p.Panel01.set_minwidth("");
                p.Panel01.move("0","106","320","40",null,null);

                p.Panel03.set_taborder("6");
                p.Panel03.set_type("horizontal");
                p.Panel03.set_horizontalgap("10");
                p.Panel03.set_fittocontents("height");
                p.Panel03.set_flexgrow("1");
                p.Panel03.set_minwidth("");
                p.Panel03.move("1694.00","398","320","45",null,null);

                p.Panel02.set_taborder("9");
                p.Panel02.set_type("horizontal");
                p.Panel02.set_horizontalgap("10");
                p.Panel02.set_fittocontents("height");
                p.Panel02.set_flexgrow("1");
                p.Panel02.set_minwidth("");
                p.Panel02.move("1694.00","398","320","45",null,null);

                p.panLabel.set_taborder("0");
                p.panLabel.set_verticalgap("8");
                p.panLabel.set_flexwrap("wrap");
                p.panLabel.set_spacing("0px 0px 10px 0px");
                p.panLabel.set_type("horizontal");
                p.panLabel.set_flexcrossaxisalign("start");
                p.panLabel.set_horizontalgap("50");
                p.panLabel.set_fittocontents("height");
                p.panLabel.set_maxheight("");
                p.panLabel.move("20","14","100%","55",null,null);

                p.btnSchClose.set_taborder("1");
                p.btnSchClose.set_cssclass("btn_WF_SchClose");
                p.btnSchClose.move("1251","185","30","30",null,null);

                p.panClose.set_taborder("2");
                p.panClose.set_type("vertical");
                p.panClose.set_cssclass("pal_WF_SchLine");
                p.panClose.set_flexcrossaxisalign("end");
                p.panClose.move("30","151","100%","30",null,null);

                p.btnSch.set_taborder("4");
                p.btnSch.set_text("조회하기");
                p.btnSch.set_cssclass("btn_WF_Search");
                p.btnSch.move("570","192","112","40",null,null);

                p.panSchBtn.set_taborder("3");
                p.panSchBtn.set_flexmainaxisalign("center");
                p.panSchBtn.move("632","235","100%","40",null,null);

                p.Combo01.set_taborder("7");
                p.Combo01.set_innerdataset("dsCombo2");
                p.Combo01.set_codecolumn("cdId");
                p.Combo01.set_datacolumn("cdNm");
                p.Combo01.set_text("선택");
                p.Combo01.set_value("");
                p.Combo01.set_index("-1");
                p.Combo01.move("823","20","100%","40",null,null);

                p.staLabel01_00.set_taborder("5");
                p.staLabel01_00.set_text("구분");
                p.staLabel01_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel01_00.set_flexshrink("0");
                p.staLabel01_00.set_maxwidth("");
                p.staLabel01_00.move("0","0","100","40",null,null);

                p.staLabel01_00_00.set_taborder("8");
                p.staLabel01_00_00.set_text("분야");
                p.staLabel01_00_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel01_00_00.set_flexshrink("0");
                p.staLabel01_00_00.set_maxwidth("");
                p.staLabel01_00_00.move("0","0","100","40",null,null);

                p.Combo02.set_taborder("12");
                p.Combo02.set_innerdataset("dsCombo1");
                p.Combo02.set_codecolumn("cdId");
                p.Combo02.set_datacolumn("cdNm");
                p.Combo02.set_text("선택");
                p.Combo02.set_value("");
                p.Combo02.set_index("-1");
                p.Combo02.move("151","24","100%","40",null,null);

                p.staLabel02_01_00.set_taborder("10");
                p.staLabel02_01_00.set_text("기간");
                p.staLabel02_01_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel02_01_00.set_flexshrink("0");
                p.staLabel02_01_00.set_maxwidth("");
                p.staLabel02_01_00.move("0","0","100","40",null,null);

                p.divCal.set_taborder("13");
                p.divCal.set_text("Div00");
                p.divCal.move("693","131","100%","40",null,null);
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
                p.panClose.move("30","151","100%","30",null,null);

                p.panLabel.set_horizontalgap("50");
                p.panLabel.set_verticalgap("8");
                p.panLabel.move("132","47","100%","305",null,null);

                p.pan03.set_type("horizontal");
                p.pan03.set_horizontalgap("8");
                p.pan03.move("1694.00","398","100%","40",null,null);

                p.pan02.set_horizontalgap("8");
                p.pan02.move("1694.00","398","100%","45",null,null);

                p.pan01.set_horizontalgap("8");
                p.pan01.move("1694.00","398","100%","40",null,null);

                p.pan03.set_type("horizontal");
                p.pan03.set_fittocontents("height");
                p.pan03.set_flexwrap("wrap");
                p.pan03.set_horizontalgap("8");
                p.pan03.set_flexgrow("1");
                p.pan03.move("1694.00","398","100%","40",null,null);

                p.Edit00.move("890","24","65%","40",null,null);

                p.Edit01.move("163","80","65%","40",null,null);

                p.pan04.move("1694.00","398","100%","45",null,null);

                p.cmbList.move("130","14","120","40",null,null);

                p.Edit03.move("977","85","65%","40",null,null);

                p.PanelCal.move("285","24","100%","40",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_spacing("14px 16px 12px 16px");
            obj.set_flexwrap("wrap");
            this.divSch.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divSch.form
            obj = new Layout("Phone_screen","",0,0,this.divSch.form,
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
            //-- Default Layout : this.divForm.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdStats.set_taborder("1");
                p.grdStats.set_binddataset("dsList");
                p.grdStats.set_autofittype("none");
                p.grdStats.set_flexgrow("1");
                p.grdStats.move("0","44","100.00%","553",null,null);

                p.PanelGrdBtn.set_taborder("0");
                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_fittocontents("width");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.set_visible("true");
                p.PanelGrdBtn.move(null,"0","70%","34","0",null);

                p.btnGrdDw.set_taborder("2");
                p.btnGrdDw.set_text("다운로드(엑셀)");
                p.btnGrdDw.set_cssclass("btn_WF_GrdDw");
                p.btnGrdDw.set_visible("true");
                p.btnGrdDw.set_fittocontents("width");
                p.btnGrdDw.move("1296","0","134","34",null,null);
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
                p.Grid00.set_autofittype("none");

                p.btnGrdRegi.set_visible("false");

                p.btnGrdDel.set_visible("false");
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divGrd.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divGrd.form
            obj = new Layout("Phone_screen","",0,0,this.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

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
                p.divGrd.set_taborder("0");
                p.divGrd.set_text("Div01");
                p.divGrd.set_fittocontents("height");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.set_flexgrow("1");
                p.divGrd.move("0","24","100.00%","597",null,null);
            	}
            );
            obj.set_verticalgap("20");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            this.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form
            obj = new Layout("Layout0","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Div00.move("20","27.544","100%","745",null,null);

                p.Div01.move("0","Div00:50","100%","745",null,null);

                p.Div02.move("0","Div01:50","100%","176",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_spacing("0px 10px 0px 20px");
            obj.set_flexcrossaxisalign("start");
            obj.set_verticalgap("30");
            obj.set_flexwrap("wrap");
            this.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form
            obj = new Layout("Phone_screen","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_spacing("");
            obj.set_verticalgap("20");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1480,1500,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("시설별 처리 현황");

                p.divTitle.set_taborder("1");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.move("0","0",null,"50","60",null);

                p.divSch.set_taborder("0");
                p.divSch.set_text("Div00");
                p.divSch.set_cssclass("div_WF_SchBg");
                p.divSch.set_formscrollbartype("none none");
                p.divSch.set_formscrolltype("none");
                p.divSch.set_fittocontents("height");
                p.divSch.move("0","divTitle:20",null,"153","60",null);

                p.divForm.set_taborder("2");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_fittocontents("height");
                p.divForm.move("0","divSch:20",null,"597","60",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Phone_screen","Phone_screen",480,1500,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divForm.move("0","divSch:20",null,"597","60",null);

                p.divSch.move("0","70",null,"153","60",null);

                p.divTitle.move("0","0",null,"50","60",null);
            	}
            );
            obj.set_mobileorientation("Portrait");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divSch.form.divCal.form.calSdate","value","dsSearch","sDate");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSch.form.divCal.form.calEdate","value","dsSearch","eDate");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSch.form.Combo02","value","dsSearch","fld");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSch.form.Combo01","value","dsSearch","se");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
        };
        
        // User Script
        this.registerScript("COM031M11.xfdl", function() {
        /**
        *  인천공항 원스톱 입주자서비스 프로젝트
        *  @FileName 	COM031M11.xfdl
        *  @Creator 	(주)이루온
        *  @CreateDate 	2025/01/16
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2025/01/16			조규완						최초생성
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
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function (page)
        {
        	var recordCountPerPage = this.divForm.form.divGrd.form.cmbGrdList.value;
        	this.dsSearch.setColumn(0, "currentPageNo", page);
        	this.dsSearch.setColumn(0, "recordCountPerPage", recordCountPerPage);
        	this.getSearchTransaction();
        };

        this.cfnClose = function() {
        	console.log('cfnClose');
        }
        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.getSearchTransaction = function() {

        	var strSvcId    = "search";
        	var strSvcUrl   = "sysMng/aprvTrgtListInq.do";
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
        	}
        };

        this.msgCallback = function(sPopupId, sRtn) {
        	if (this.gfnIsNull(sRtn)) return;
        	var oRtn = JSON.parse(sRtn);

        	if(sPopupId == "eblc_aprv") {

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
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	this.gfnCmmCode("combo", "dsCombo1", "", "A");
        	this.gfnCmmCode("combo", "dsCombo2", "", "A");
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        // 조회 버튼
        this.divSch_btnSch_onclick = function(obj,e)
        {
        	this.cfnSearch(1);
        };

        // 조회 엔터
        this.divSch_onkeyup = function(obj,e)
        {
        	if (e.keycode==13) {
        		this.cfnSearch(1);
        	}
        };

        // 엑셀 다운 버튼
        this.divForm_divGrd_btnGrdDw_onclick = function(obj,e)
        {
        	/*****  현재 그리드 화면을 엑셀로 다운로드 받음  *****/
        	this.exportObj = new ExcelExportObject();
        	var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.divForm.form.divGrd.form.grdStats, "Sheet1!A1");
        	this.exportObj.set_exporturl("svcUrl::/XExportImport.do");
        	this.exportObj.exportData();
        	/*****  현재 그리드 화면을 엑셀로 다운로드 받음  *****/
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSch.addEventHandler("onkeyup",this.divSch_onkeyup,this);
            this.divSch.form.btnSch.addEventHandler("onclick",this.divSch_btnSch_onclick,this);
            this.divSch.form.staLabel02_01_00.addEventHandler("onclick",this.divForm_Div00_sta00_00_01_01_onclick,this);
            this.divForm.form.divGrd.form.btnGrdDw.addEventHandler("onclick",this.divForm_divGrd_btnGrdDw_onclick,this);
        };
        this.loadIncludeScript("COM031M11.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
