(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM031M31");
            this.set_titletext("만족도조사진행현황통계");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"분야\" type=\"STRING\" size=\"256\"/><Column id=\"구분\" type=\"STRING\" size=\"256\"/><Column id=\"점수_1월\" type=\"STRING\" size=\"256\"/><Column id=\"응답_1월\" type=\"STRING\" size=\"256\"/><Column id=\"전체_1월\" type=\"STRING\" size=\"256\"/><Column id=\"응답률_1월\" type=\"STRING\" size=\"256\"/><Column id=\"점수_2월\" type=\"STRING\" size=\"256\"/><Column id=\"응답_2월\" type=\"STRING\" size=\"256\"/><Column id=\"전체_2월\" type=\"STRING\" size=\"256\"/><Column id=\"응답률_2월\" type=\"STRING\" size=\"256\"/><Column id=\"점수_3월\" type=\"STRING\" size=\"256\"/><Column id=\"응답_3월\" type=\"STRING\" size=\"256\"/><Column id=\"전체_3월\" type=\"STRING\" size=\"256\"/><Column id=\"응답률_3월\" type=\"STRING\" size=\"256\"/><Column id=\"점수_4월\" type=\"STRING\" size=\"256\"/><Column id=\"응답_4월\" type=\"STRING\" size=\"256\"/><Column id=\"전체_4월\" type=\"STRING\" size=\"256\"/><Column id=\"응답률_4월\" type=\"STRING\" size=\"256\"/><Column id=\"점수_5월\" type=\"STRING\" size=\"256\"/><Column id=\"응답_5월\" type=\"STRING\" size=\"256\"/><Column id=\"전체_5월\" type=\"STRING\" size=\"256\"/><Column id=\"응답률_5월\" type=\"STRING\" size=\"256\"/><Column id=\"점수_6월\" type=\"STRING\" size=\"256\"/><Column id=\"응답_6월\" type=\"STRING\" size=\"256\"/><Column id=\"전체_6월\" type=\"STRING\" size=\"256\"/><Column id=\"응답률_6월\" type=\"STRING\" size=\"256\"/><Column id=\"점수_7월\" type=\"STRING\" size=\"256\"/><Column id=\"응답_7월\" type=\"STRING\" size=\"256\"/><Column id=\"전체_7월\" type=\"STRING\" size=\"256\"/><Column id=\"응답률_7월\" type=\"STRING\" size=\"256\"/><Column id=\"점수_8월\" type=\"STRING\" size=\"256\"/><Column id=\"응답_8월\" type=\"STRING\" size=\"256\"/><Column id=\"전체_8월\" type=\"STRING\" size=\"256\"/><Column id=\"응답률_8월\" type=\"STRING\" size=\"256\"/><Column id=\"점수_9월\" type=\"STRING\" size=\"256\"/><Column id=\"응답_9월\" type=\"STRING\" size=\"256\"/><Column id=\"전체_9월\" type=\"STRING\" size=\"256\"/><Column id=\"응답률_9월\" type=\"STRING\" size=\"256\"/><Column id=\"점수_10월\" type=\"STRING\" size=\"256\"/><Column id=\"응답_10월\" type=\"STRING\" size=\"256\"/><Column id=\"전체_10월\" type=\"STRING\" size=\"256\"/><Column id=\"응답률_10월\" type=\"STRING\" size=\"256\"/><Column id=\"점수_11월\" type=\"STRING\" size=\"256\"/><Column id=\"응답_11월\" type=\"STRING\" size=\"256\"/><Column id=\"전체_11월\" type=\"STRING\" size=\"256\"/><Column id=\"응답률_11월\" type=\"STRING\" size=\"256\"/><Column id=\"점수_12월\" type=\"STRING\" size=\"256\"/><Column id=\"응답_12월\" type=\"STRING\" size=\"256\"/><Column id=\"전체_12월\" type=\"STRING\" size=\"256\"/><Column id=\"응답률_12월\" type=\"STRING\" size=\"256\"/><Column id=\"점수_합계\" type=\"STRING\" size=\"256\"/><Column id=\"응답_합계\" type=\"STRING\" size=\"256\"/><Column id=\"전체_합계\" type=\"STRING\" size=\"256\"/><Column id=\"응답률_합계\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"분야\">확인</Col><Col id=\"구분\">31402931</Col><Col id=\"점수_1월\">사용</Col><Col id=\"응답_1월\">2025-11-08</Col><Col id=\"전체_1월\">2025-11-07</Col></Row><Row><Col id=\"분야\">확인</Col><Col id=\"구분\">31402932</Col><Col id=\"점수_1월\">사용</Col><Col id=\"응답_1월\">2025-11-08</Col><Col id=\"전체_1월\">2025-11-07</Col></Row><Row><Col id=\"분야\">미확인</Col><Col id=\"구분\">31402934</Col><Col id=\"점수_1월\">미사용</Col><Col id=\"응답_1월\">2025-11-08</Col><Col id=\"전체_1월\">2025-11-07</Col></Row><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTitle","0","0",null,"48","60",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divForm","0","divTitle:20",null,null,"60","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("none");
            this.addChild(obj.name, obj);

            obj = new Div("divSch","0","0","100%","160",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panLabel","20","14","100%","60",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("0");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("50");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"pan00\"/><PanelItem id=\"PanelItem00\" componentid=\"pan01\"/><PanelItem id=\"PanelItem03\" componentid=\"pan02\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan01","1694.00","398","420","40",null,null,null,null,"45",null,this.divForm.form.divSch.form);
            obj.set_taborder("2");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01\"/><PanelItem id=\"PanelItem02\" componentid=\"Combo01_00_00_00\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("1");
            obj.set_text("분야");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("3");
            obj.set_text("기간");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan00","1694.00","398","420","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("4");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel\"/><PanelItem id=\"PanelItem02\" componentid=\"divCal\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel02","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("5");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan02","1694.00","398","420","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("6");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel02\"/><PanelItem id=\"PanelItem02\" componentid=\"Combo01_00_00_00_00\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panClose","30","151","100%","30",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_SchLine");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnSchClose\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnSchClose","1251","185","30","30",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_SchClose");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panSchBtn","632","235","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("9");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnSch\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnSch","570","192","112","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("10");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Search");
            obj.set_fittocontents("width");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("Combo01_00_00_00","788.00","145","20.42%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("11");
            obj.set_flexgrow("1");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divCal","1030","75","330","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("12");
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

            obj = new Combo("Combo01_00_00_00_00","788.00","145","20.42%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("13");
            obj.set_flexgrow("1");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divGrd","0","divSch:30","100.00%","700",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("none");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panGrdBtn",null,"0","100%","34","0",null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem00\" componentid=\"btnGrdDel\"/><PanelItem id=\"PanelItem05\" componentid=\"btnGrdRegi\"/><PanelItem id=\"PanelItem03\" componentid=\"btnGrdAdd\"/><PanelItem id=\"PanelItem06\" componentid=\"btnGrdDw\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","panGrdBtn:10","100.00%",null,null,"0",null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"200\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"85\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"85\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"85\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"85\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"85\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"85\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"85\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"85\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"85\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"85\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"85\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"85\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"85\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"분야\"/><Cell col=\"1\" rowspan=\"2\" text=\"구분\"/><Cell col=\"2\" colspan=\"4\"/><Cell col=\"6\" colspan=\"4\"/><Cell col=\"10\" colspan=\"4\"/><Cell col=\"14\" colspan=\"4\"/><Cell col=\"18\" colspan=\"4\"/><Cell col=\"22\" colspan=\"4\"/><Cell col=\"26\" colspan=\"4\"/><Cell col=\"30\" colspan=\"4\"/><Cell col=\"34\" colspan=\"4\"/><Cell col=\"38\" colspan=\"4\"/><Cell col=\"42\" colspan=\"4\"/><Cell col=\"46\" colspan=\"4\"/><Cell col=\"50\" colspan=\"4\" cssclass=\"CellEnd\"/><Cell row=\"1\" col=\"2\" text=\"점수\"/><Cell row=\"1\" col=\"3\" text=\"응답\"/><Cell row=\"1\" col=\"4\" text=\"전체\"/><Cell row=\"1\" col=\"5\" text=\"응답률(%)\"/><Cell row=\"1\" col=\"6\" text=\"점수\"/><Cell row=\"1\" col=\"7\" text=\"응답\"/><Cell row=\"1\" col=\"8\" text=\"전체\"/><Cell row=\"1\" col=\"9\" text=\"응답률(%)\"/><Cell row=\"1\" col=\"10\" text=\"점수\"/><Cell row=\"1\" col=\"11\" text=\"응답\"/><Cell row=\"1\" col=\"12\" text=\"전체\"/><Cell row=\"1\" col=\"13\" text=\"응답률(%)\"/><Cell row=\"1\" col=\"14\" text=\"점수\"/><Cell row=\"1\" col=\"15\" text=\"응답\"/><Cell row=\"1\" col=\"16\" text=\"전체\"/><Cell row=\"1\" col=\"17\" text=\"응답률(%)\"/><Cell row=\"1\" col=\"18\" text=\"점수\"/><Cell row=\"1\" col=\"19\" text=\"응답\"/><Cell row=\"1\" col=\"20\" text=\"전체\"/><Cell row=\"1\" col=\"21\" text=\"응답률(%)\"/><Cell row=\"1\" col=\"22\" text=\"점수\"/><Cell row=\"1\" col=\"23\" text=\"응답\"/><Cell row=\"1\" col=\"24\" text=\"전체\"/><Cell row=\"1\" col=\"25\" text=\"응답률(%)\"/><Cell row=\"1\" col=\"26\" text=\"점수\"/><Cell row=\"1\" col=\"27\" text=\"응답\"/><Cell row=\"1\" col=\"28\" text=\"전체\"/><Cell row=\"1\" col=\"29\" text=\"응답률(%)\"/><Cell row=\"1\" col=\"30\" text=\"점수\"/><Cell row=\"1\" col=\"31\" text=\"응답\"/><Cell row=\"1\" col=\"32\" text=\"전체\"/><Cell row=\"1\" col=\"33\" text=\"응답률(%)\"/><Cell row=\"1\" col=\"34\" text=\"점수\"/><Cell row=\"1\" col=\"35\" text=\"응답\"/><Cell row=\"1\" col=\"36\" text=\"전체\"/><Cell row=\"1\" col=\"37\" text=\"응답률(%)\"/><Cell row=\"1\" col=\"38\" text=\"점수\"/><Cell row=\"1\" col=\"39\" text=\"응답\"/><Cell row=\"1\" col=\"40\" text=\"전체\"/><Cell row=\"1\" col=\"41\" text=\"응답률(%)\"/><Cell row=\"1\" col=\"42\" text=\"점수\"/><Cell row=\"1\" col=\"43\" text=\"응답\"/><Cell row=\"1\" col=\"44\" text=\"전체\"/><Cell row=\"1\" col=\"45\" text=\"응답률(%)\"/><Cell row=\"1\" col=\"46\" text=\"점수\"/><Cell row=\"1\" col=\"47\" text=\"응답\"/><Cell row=\"1\" col=\"48\" text=\"전체\"/><Cell row=\"1\" col=\"49\" text=\"응답률(%)\"/><Cell row=\"1\" col=\"50\" text=\"점수\"/><Cell row=\"1\" col=\"51\" text=\"응답\"/><Cell row=\"1\" col=\"52\" text=\"전체\"/><Cell row=\"1\" col=\"53\" text=\"응답률(%)\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:분야\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:구분\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:점수_1월\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:응답_1월\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:전체_1월\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:응답률_1월\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:점수_2월\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:응답_2월\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:전체_2월\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:응답률_2월\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:점수_3월\" textAlign=\"center\"/><Cell col=\"11\" text=\"bind:응답_3월\" textAlign=\"center\"/><Cell col=\"12\" text=\"bind:전체_3월\" textAlign=\"center\"/><Cell col=\"13\" text=\"bind:응답률_3월\" textAlign=\"center\"/><Cell col=\"14\" text=\"bind:점수_4월\" textAlign=\"center\"/><Cell col=\"15\" text=\"bind:응답_4월\" textAlign=\"center\"/><Cell col=\"16\" text=\"bind:전체_4월\" textAlign=\"center\"/><Cell col=\"17\" text=\"bind:응답률_4월\" textAlign=\"center\"/><Cell col=\"18\" text=\"bind:점수_5월\" textAlign=\"center\"/><Cell col=\"19\" text=\"bind:응답_5월\" textAlign=\"center\"/><Cell col=\"20\" text=\"bind:전체_5월\" textAlign=\"center\"/><Cell col=\"21\" text=\"bind:응답률_5월\" textAlign=\"center\"/><Cell col=\"22\" text=\"bind:점수_6월\" textAlign=\"center\"/><Cell col=\"23\" text=\"bind:응답_6월\" textAlign=\"center\"/><Cell col=\"24\" text=\"bind:전체_6월\" textAlign=\"center\"/><Cell col=\"25\" text=\"bind:응답률_6월\" textAlign=\"center\"/><Cell col=\"26\" text=\"bind:점수_7월\" textAlign=\"center\"/><Cell col=\"27\" text=\"bind:응답_7월\" textAlign=\"center\"/><Cell col=\"28\" text=\"bind:전체_7월\" textAlign=\"center\"/><Cell col=\"29\" text=\"bind:응답률_7월\" textAlign=\"center\"/><Cell col=\"30\" text=\"bind:점수_8월\" textAlign=\"center\"/><Cell col=\"31\" text=\"bind:응답_8월\" textAlign=\"center\"/><Cell col=\"32\" text=\"bind:전체_8월\" textAlign=\"center\"/><Cell col=\"33\" text=\"bind:응답률_8월\" textAlign=\"center\"/><Cell col=\"34\" text=\"bind:점수_9월\" textAlign=\"center\"/><Cell col=\"35\" text=\"bind:응답_9월\" textAlign=\"center\"/><Cell col=\"36\" text=\"bind:전체_9월\" textAlign=\"center\"/><Cell col=\"37\" text=\"bind:응답률_9월\" textAlign=\"center\"/><Cell col=\"38\" text=\"bind:점수_10월\" textAlign=\"center\"/><Cell col=\"39\" text=\"bind:응답_10월\" textAlign=\"center\"/><Cell col=\"40\" text=\"bind:전체_10월\" textAlign=\"center\"/><Cell col=\"41\" text=\"bind:응답률_10월\" textAlign=\"center\"/><Cell col=\"42\" text=\"bind:점수_11월\" textAlign=\"center\"/><Cell col=\"43\" text=\"bind:응답_11월\" textAlign=\"center\"/><Cell col=\"44\" text=\"bind:전체_11월\" textAlign=\"center\"/><Cell col=\"45\" text=\"bind:응답률_11월\" textAlign=\"center\"/><Cell col=\"46\" text=\"bind:점수_12월\" textAlign=\"center\"/><Cell col=\"47\" text=\"bind:응답_12월\" textAlign=\"center\"/><Cell col=\"48\" text=\"bind:전체_12월\" textAlign=\"center\"/><Cell col=\"49\" text=\"bind:응답률_12월\" textAlign=\"center\"/><Cell col=\"50\" text=\"bind:점수_합계\" textAlign=\"center\"/><Cell col=\"51\" text=\"bind:응답_합계\" textAlign=\"center\"/><Cell col=\"52\" text=\"bind:전체_합계\" textAlign=\"center\"/><Cell col=\"53\" text=\"bind:응답률_합계\" cssclass=\"CellEnd\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Combo("cmbGrdList","1230","0","80","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal00","1165","0","65","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_text("목록수");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdAdd","774.00","10","47","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("5");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("false");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDw","774.00","10","124","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("4");
            obj.set_text("다운로드(엑셀)");
            obj.set_cssclass("btn_WF_GrdDw");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDel","316.00","0","45","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("6");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("false");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdRegi","371.00","0","45","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("7");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_SmallBlack");
            obj.set_visible("false");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("Panel00","94","0","155","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("8");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTotal00\"/><PanelItem id=\"PanelItem01\" componentid=\"cmbGrdList\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);
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
                p.panLabel.set_taborder("0");
                p.panLabel.set_verticalgap("8");
                p.panLabel.set_flexwrap("wrap");
                p.panLabel.set_spacing("0px 0px 10px 0px");
                p.panLabel.set_type("horizontal");
                p.panLabel.set_flexcrossaxisalign("start");
                p.panLabel.set_horizontalgap("50");
                p.panLabel.set_fittocontents("height");
                p.panLabel.set_maxheight("");
                p.panLabel.move("20","14","100%","60",null,null);

                p.pan01.set_taborder("2");
                p.pan01.set_type("horizontal");
                p.pan01.set_horizontalgap("10");
                p.pan01.set_flexgrow("1");
                p.pan01.set_minheight("45");
                p.pan01.set_maxheight("");
                p.pan01.set_minwidth("");
                p.pan01.move("1694.00","398","420","40",null,null);

                p.staLabel01.set_taborder("1");
                p.staLabel01.set_text("분야");
                p.staLabel01.set_cssclass("sta_WF_SchLabel");
                p.staLabel01.set_flexshrink("0");
                p.staLabel01.set_minwidth("");
                p.staLabel01.move("0","0","100","40",null,null);

                p.staLabel.set_taborder("3");
                p.staLabel.set_text("기간");
                p.staLabel.set_cssclass("sta_WF_SchLabel");
                p.staLabel.set_flexshrink("0");
                p.staLabel.set_minwidth("");
                p.staLabel.move("0","0","100","40",null,null);

                p.pan00.set_taborder("4");
                p.pan00.set_type("horizontal");
                p.pan00.set_horizontalgap("10");
                p.pan00.set_flexgrow("1");
                p.pan00.set_maxheight("");
                p.pan00.set_minwidth("");
                p.pan00.move("1694.00","398","420","40",null,null);

                p.staLabel02.set_taborder("5");
                p.staLabel02.set_text("구분");
                p.staLabel02.set_cssclass("sta_WF_SchLabel");
                p.staLabel02.set_flexshrink("0");
                p.staLabel02.set_minwidth("");
                p.staLabel02.move("0","0","100","40",null,null);

                p.pan02.set_taborder("6");
                p.pan02.set_type("horizontal");
                p.pan02.set_horizontalgap("10");
                p.pan02.set_flexgrow("1");
                p.pan02.set_minwidth("");
                p.pan02.move("1694.00","398","420","40",null,null);

                p.panClose.set_taborder("8");
                p.panClose.set_type("vertical");
                p.panClose.set_cssclass("pal_WF_SchLine");
                p.panClose.set_flexcrossaxisalign("end");
                p.panClose.move("30","151","100%","30",null,null);

                p.btnSchClose.set_taborder("7");
                p.btnSchClose.set_cssclass("btn_WF_SchClose");
                p.btnSchClose.move("1251","185","30","30",null,null);

                p.panSchBtn.set_taborder("9");
                p.panSchBtn.set_flexmainaxisalign("center");
                p.panSchBtn.move("632","235","100%","40",null,null);

                p.btnSch.set_taborder("10");
                p.btnSch.set_text("조회하기");
                p.btnSch.set_cssclass("btn_WF_Search");
                p.btnSch.set_fittocontents("width");
                p.btnSch.move("570","192","112","40",null,null);

                p.Combo01_00_00_00.set_taborder("11");
                p.Combo01_00_00_00.set_flexgrow("1");
                p.Combo01_00_00_00.set_text("선택");
                p.Combo01_00_00_00.set_value("");
                p.Combo01_00_00_00.set_index("-1");
                p.Combo01_00_00_00.move("788.00","145","20.42%","40",null,null);

                p.divCal.set_taborder("12");
                p.divCal.set_text("Div00");
                p.divCal.set_flexgrow("1");
                p.divCal.set_formscrollbartype("none none");
                p.divCal.set_formscrolltype("none");
                p.divCal.move("1030","75","330","40",null,null);

                p.Combo01_00_00_00_00.set_taborder("13");
                p.Combo01_00_00_00_00.set_flexgrow("1");
                p.Combo01_00_00_00_00.set_text("선택");
                p.Combo01_00_00_00_00.set_value("");
                p.Combo01_00_00_00_00.set_index("-1");
                p.Combo01_00_00_00_00.move("788.00","145","20.42%","40",null,null);
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
                p.pan00.set_fittocontents("height");
                p.pan00.move("1694.00","398","440","40",null,null);

                p.pan01.move("1694.00","398","440","45",null,null);

                p.pan02.move("1694.00","398","440","45",null,null);
            	}
            );
            obj.set_spacing("14px 20px 12px 20px");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            this.divForm.form.divSch.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panGrdBtn.set_taborder("3");
                p.panGrdBtn.set_flexcrossaxisalign("start");
                p.panGrdBtn.set_flexcrossaxiswrapalign("start");
                p.panGrdBtn.set_flexmainaxisalign("end");
                p.panGrdBtn.set_horizontalgap("10");
                p.panGrdBtn.set_flexwrap("wrap");
                p.panGrdBtn.set_fittocontents("height");
                p.panGrdBtn.move(null,"0","100%","34","0",null);

                p.Grid00.set_taborder("0");
                p.Grid00.set_binddataset("dsList");
                p.Grid00.set_autofittype("none");
                p.Grid00.move("0","panGrdBtn:10","100.00%",null,null,"0");

                p.cmbGrdList.set_taborder("2");
                p.cmbGrdList.set_visible("false");
                p.cmbGrdList.set_text("10");
                p.cmbGrdList.set_value("");
                p.cmbGrdList.set_index("-1");
                p.cmbGrdList.move("1230","0","80","34",null,null);

                p.staTotal00.set_taborder("1");
                p.staTotal00.set_text("목록수");
                p.staTotal00.set_cssclass("sta_WF_SchLabel");
                p.staTotal00.set_fittocontents("width");
                p.staTotal00.set_visible("false");
                p.staTotal00.move("1165","0","65","34",null,null);

                p.btnGrdAdd.set_taborder("5");
                p.btnGrdAdd.set_text("추가");
                p.btnGrdAdd.set_cssclass("btn_WF_Small");
                p.btnGrdAdd.set_visible("false");
                p.btnGrdAdd.set_fittocontents("width");
                p.btnGrdAdd.move("774.00","10","47","34",null,null);

                p.btnGrdDw.set_taborder("4");
                p.btnGrdDw.set_text("다운로드(엑셀)");
                p.btnGrdDw.set_cssclass("btn_WF_GrdDw");
                p.btnGrdDw.set_visible("true");
                p.btnGrdDw.set_fittocontents("width");
                p.btnGrdDw.move("774.00","10","124","34",null,null);

                p.btnGrdDel.set_taborder("6");
                p.btnGrdDel.set_text("삭제");
                p.btnGrdDel.set_cssclass("btn_WF_SmallRed");
                p.btnGrdDel.set_visible("false");
                p.btnGrdDel.set_fittocontents("width");
                p.btnGrdDel.move("316.00","0","45","34",null,null);

                p.btnGrdRegi.set_taborder("7");
                p.btnGrdRegi.set_text("등록");
                p.btnGrdRegi.set_cssclass("btn_WF_SmallBlack");
                p.btnGrdRegi.set_visible("false");
                p.btnGrdRegi.set_fittocontents("width");
                p.btnGrdRegi.move("371.00","0","45","34",null,null);

                p.Panel00.set_taborder("8");
                p.Panel00.set_horizontalgap("10");
                p.Panel00.move("94","0","155","34",null,null);
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
                p.panGrdBtn.set_verticalgap("10");
                p.panGrdBtn.move(null,"0","100.00%","78","0",null);
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
                p.divSch.move("0","0","100%","160",null,null);

                p.divGrd.set_taborder("1");
                p.divGrd.set_text("Div01");
                p.divGrd.set_fittocontents("none");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.set_flexgrow("1");
                p.divGrd.move("0","divSch:30","100.00%","700",null,null);
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
                p.set_titletext("만족도조사진행현황통계");

                p.divTitle.set_taborder("1");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.move("0","0",null,"48","60",null);

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_formscrollbartype("none none");
                p.divForm.set_formscrolltype("none");
                p.divForm.set_fittocontents("none");
                p.divForm.set_maxwidth("");
                p.divForm.move("0","divTitle:20",null,null,"60","0");
            	}
            );
            obj.set_mobileorientation("landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Phone_screen",480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divForm.move("0","0",null,"900","0",null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
        };
        
        // User Script
        this.registerScript("COM031M31.xfdl", function() {
        /********************************************************************
            created:	  2024/08/08
            filename: 	C:\developer\tsp_view\publishing\work\LIF\test.xfdl
            file path:	C:\developer\tsp_view\publishing\work\LIF
            file base: 	test
            file ext:	  xfdl
            author:

            purpose:
        *********************************************************************/

        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	test.xfdl
        *  @Creator 	ELUON INS
        *  @CreateDate 	2024/08/08
        *  @Desction
        *  @Author
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/08/08			김완성					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수
        	this.divForm.form.divSch.set_width("100%");
        	this.divForm.form.divSch.fittocontents = "height";
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.divSch.form.staLabel.addEventHandler("onclick",this.divForm_divSch_staLabel_onclick,this);
            this.divForm.form.divSch.form.staLabel02.addEventHandler("onclick",this.divForm_Div00_sta00_00_01_01_onclick,this);
            this.divForm.form.divSch.form.btnSchClose.addEventHandler("onclick",this.divForm_divSch_btnSchClose_onclick,this);
            this.divForm.form.divSch.form.Combo01_00_00_00.addEventHandler("onitemchanged",this.divForm_divSch_Combo01_onitemchanged,this);
            this.divForm.form.divSch.form.Combo01_00_00_00_00.addEventHandler("onitemchanged",this.divForm_divSch_Combo01_onitemchanged,this);
        };
        this.loadIncludeScript("COM031M31.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
