(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM021M11");
            this.set_titletext("SLM 평가보고서_요약 (공항공사)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"currentPageNo\" type=\"STRING\" size=\"256\"/><Column id=\"recordCountPerPage\" type=\"STRING\" size=\"256\"/><Column id=\"sDate\" type=\"STRING\" size=\"256\"/><Column id=\"eDate\" type=\"STRING\" size=\"256\"/><Column id=\"trgtDeptYn\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"currentPageNo\">1</Col><Col id=\"recordCountPerPage\">999999</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"srcType\" type=\"STRING\" size=\"256\"/><Column id=\"indTrgrSe\" type=\"STRING\" size=\"256\"/><Column id=\"item1\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptId\" type=\"STRING\" size=\"256\"/><Column id=\"tCnt\" type=\"STRING\" size=\"256\"/><Column id=\"dCnt\" type=\"STRING\" size=\"256\"/><Column id=\"mngIdctNm\" type=\"STRING\" size=\"256\"/><Column id=\"mSlmIdctId\" type=\"STRING\" size=\"256\"/><Column id=\"wgvl\" type=\"STRING\" size=\"256\"/><Column id=\"val\" type=\"STRING\" size=\"256\"/><Column id=\"score\" type=\"STRING\" size=\"256\"/><Column id=\"tScore\" type=\"STRING\" size=\"256\"/><Column id=\"srcWgt\" type=\"STRING\" size=\"256\"/><Column id=\"srcScore\" type=\"STRING\" size=\"256\"/><Column id=\"wpScore\" type=\"STRING\" size=\"256\"/><Column id=\"dptWgt\" type=\"STRING\" size=\"256\"/><Column id=\"zScore\" type=\"STRING\" size=\"256\"/><Column id=\"rank\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPage", this);
            obj._setContents("<ColumnInfo><Column id=\"totalRecordCount\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcel", this);
            obj._setContents("<ColumnInfo><Column id=\"srcType\" type=\"STRING\" size=\"256\"/><Column id=\"indTrgrSe\" type=\"STRING\" size=\"256\"/><Column id=\"item1\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptId\" type=\"STRING\" size=\"256\"/><Column id=\"tCnt\" type=\"STRING\" size=\"256\"/><Column id=\"dCnt\" type=\"STRING\" size=\"256\"/><Column id=\"mngIdctNm\" type=\"STRING\" size=\"256\"/><Column id=\"mSlmIdctId\" type=\"STRING\" size=\"256\"/><Column id=\"wgvl\" type=\"STRING\" size=\"256\"/><Column id=\"val\" type=\"STRING\" size=\"256\"/><Column id=\"score\" type=\"STRING\" size=\"256\"/><Column id=\"tScore\" type=\"STRING\" size=\"256\"/><Column id=\"srcWgt\" type=\"STRING\" size=\"256\"/><Column id=\"srcScore\" type=\"STRING\" size=\"256\"/><Column id=\"wpScore\" type=\"STRING\" size=\"256\"/><Column id=\"dptWgt\" type=\"STRING\" size=\"256\"/><Column id=\"zScore\" type=\"STRING\" size=\"256\"/><Column id=\"rank\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","0","60",null,null,"60","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("none");
            this.addChild(obj.name, obj);

            obj = new Div("divSch","0","0","100.00%","148",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("pan00","20.00","67","420","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("3");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("nowrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staLabel03\"/><PanelItem id=\"PanelItem01\" componentid=\"divCal\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panLabel","20","14","100%","50",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("0");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("40");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"pan00\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel03_00_00_00_00_00\"/><PanelItem id=\"PanelItem04\" componentid=\"pan01\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("1");
            obj.set_text("공사부서명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan01","1694.00","398","420","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("2");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Edit00\"/><PanelItem id=\"PanelItem00\" componentid=\"staLabel\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit01_00\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel03","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("8");
            obj.set_text("기간");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panClose","30","151","100%","30",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_SchLine");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnSchClose\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnSchClose","1251","185","30","30",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_SchClose");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panSchBtn","632","235","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("6");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnSch\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnSch","570","192","112","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("7");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Search");
            obj.set_fittocontents("width");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel03_00_00_00_00_00","1694.00","398","420","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"CheckBox00_00\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("Edit01_00","841","24","65%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("10");
            obj.set_flexgrow("1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00","1105","120","204","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("11");
            obj.set_text("평가대상부서만 조회");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divCal","1030","75","320","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
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

            obj = new Static("staDash","Calendar00:10","0","10","40",null,null,"10",null,null,null,this.divForm.form.divSch.form.divCal.form);
            obj.set_taborder("1");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_Dash");
            this.divForm.form.divSch.form.divCal.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","staDash:10","0","150","40",null,null,null,null,null,null,this.divForm.form.divSch.form.divCal.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.divSch.form.divCal.addChild(obj.name, obj);

            obj = new Div("divGrd","0","divSch:30","100.00%","662",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("none");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","100%","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("11");
            obj.set_text("공항공사 평가보고서 요약 정보");
            obj.set_cssclass("sta_WF_Txt60018");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","44","109","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("12");
            obj.set_fittocontents("width");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTotal\"/><PanelItem id=\"PanelItem01\" componentid=\"staTotal01\"/><PanelItem id=\"PanelItem02\" componentid=\"staTotal02\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn",null,"44","75%","34","0",null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_fittocontents("none");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("0");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem03\" componentid=\"btnGrdAdd\"/><PanelItem id=\"PanelItem04\" componentid=\"btnGrdDel\"/><PanelItem id=\"PanelItem05\" componentid=\"btnGrdRegi\"/><PanelItem id=\"PanelItem01\" componentid=\"btnGrdDw\"/><PanelItem id=\"PanelItem02\" componentid=\"btnGrdDwAll\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("grdList","0","PanelGrdBtn:10","100.00%",null,null,"50",null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"150\"/><Column size=\"250\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"담당공사부서\"/><Cell col=\"1\" rowspan=\"2\" text=\"구분\"/><Cell col=\"2\" rowspan=\"2\" text=\"평가지표\"/><Cell col=\"3\" colspan=\"3\" text=\"처리\"/><Cell col=\"6\" colspan=\"2\" text=\"평가\"/><Cell col=\"8\" rowspan=\"2\" text=\"지연건수\"/><Cell col=\"9\" colspan=\"6\" text=\"최종평가\"/><Cell row=\"1\" col=\"3\" text=\"건수\"/><Cell row=\"1\" col=\"4\" text=\"실적\"/><Cell row=\"1\" col=\"5\" text=\"환산점수\"/><Cell row=\"1\" col=\"6\" text=\"가중치\"/><Cell row=\"1\" col=\"7\" text=\"가중평가\"/><Cell row=\"1\" col=\"9\" text=\"평가실적\"/><Cell row=\"1\" col=\"10\" text=\"종합가중치\"/><Cell row=\"1\" col=\"11\" text=\"종합실적\"/><Cell row=\"1\" col=\"12\" text=\"부서가중치\"/><Cell row=\"1\" col=\"13\" text=\"최종평가\"/><Cell row=\"1\" col=\"14\" text=\"순위\"/></Band><Band id=\"body\"><Cell text=\"bind:deptNm\" textAlign=\"center\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:srcType\" textAlign=\"center\" suppress=\"2\"/><Cell col=\"2\" text=\"bind:mngIdctNm\"/><Cell col=\"3\" text=\"bind:tCnt\" textAlign=\"center\" expr=\"tCnt == 0 ? &apos;-&apos; : tCnt\" displaytype=\"text\"/><Cell col=\"4\" text=\"bind:val\" textAlign=\"center\" cssclass=\"CellLink,CellTxtBlue\" displaytype=\"expr:val == 0 || val == null ? &apos;text&apos; : &apos;mask&apos;\" maskeditformat=\"##.00\" expr=\"val == 0 || val == null ? &apos;-&apos; : val\"/><Cell col=\"5\" text=\"bind:score\" textAlign=\"center\" displaytype=\"expr:score == 0 || score == null ? &apos;text&apos; : &apos;mask&apos;\" maskeditformat=\"##.00\" expr=\"score == 0 || score == null ? &apos;-&apos; : score\"/><Cell col=\"6\" text=\"bind:wgvl\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:tScore\" textAlign=\"center\" maskeditformat=\"##.0000\" displaytype=\"expr:tScore == 0 || tScore == null ? &apos;text&apos; : &apos;mask&apos;\" expr=\"tScore == 0 || tScore == null ? &apos;-&apos; : tScore\"/><Cell col=\"8\" textAlign=\"center\" text=\"bind:dCnt\" expr=\"dCnt == 0 ? &apos;-&apos; : dCnt\" displaytype=\"text\"/><Cell col=\"9\" text=\"bind:srcScore\" textAlign=\"center\" displaytype=\"mask\" maskeditformat=\"##.0000\" suppress=\"2\"/><Cell col=\"10\" text=\"bind:srcWgt\" textAlign=\"center\" displaytype=\"mask\" maskeditformat=\"##.00\" suppress=\"2\"/><Cell col=\"11\" text=\"bind:wpScore\" textAlign=\"center\" maskeditformat=\"##.00\" displaytype=\"mask\" suppress=\"2\"/><Cell col=\"12\" text=\"bind:dptWgt\" textAlign=\"center\" maskeditformat=\"#.00\" displaytype=\"mask\" suppress=\"2\"/><Cell col=\"13\" text=\"bind:zScore\" textAlign=\"center\" displaytype=\"mask\" maskeditformat=\"##.00\" suppress=\"2\"/><Cell col=\"14\" text=\"bind:rank\" cssclass=\"CellEnd\" textAlign=\"center\" suppress=\"2\" expr=\"rank != &apos;&apos; ? rank : &apos;-&apos;\" displaytype=\"text\"/></Band></Format></Formats>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","40","30","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("10");
            obj.set_text("총");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal01","27","40","45","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("9");
            obj.set_text("1000");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal02","70","40","30","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("8");
            obj.set_text("건");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Combo("cmbGrdList","1230","0","80","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_visible("false");
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
            obj.set_taborder("1");
            obj.set_text("목록수");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdAdd","774.00","10","47","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("6");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("false");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdRegi","774.00","10","45","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("4");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_SmallBlack");
            obj.set_visible("false");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDel","804.00","10","45","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("7");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("false");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDw","774.00","10","124","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("5");
            obj.set_text("다운로드(엑셀)");
            obj.set_cssclass("btn_WF_GrdDw");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("Panel01","94","0","155","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("13");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("width");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTotal00\"/><PanelItem id=\"PanelItem01\" componentid=\"cmbGrdList\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Div("divPage","0","grdList:10","100.00%","36",null,null,null,null,"36",null,this.divForm.form.divGrd.form);
            obj.set_taborder("14");
            obj.set_text("Div00");
            obj.set_url("work::COM/util/paging/paging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_visible("true");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDwAll","1208","46","150","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("15");
            obj.set_text("전체다운로드(엑셀)");
            obj.set_cssclass("btn_WF_GrdDw");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Grid("grdExcel","1495","4","12.84%",null,null,"764",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsList");
            obj.set_autofittype("none");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"150\"/><Column size=\"250\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"담당공사부서\"/><Cell col=\"1\" rowspan=\"2\" text=\"구분\"/><Cell col=\"2\" rowspan=\"2\" text=\"평가지표\"/><Cell col=\"3\" colspan=\"3\" text=\"처리\"/><Cell col=\"6\" colspan=\"2\" text=\"평가\"/><Cell col=\"8\" rowspan=\"2\" text=\"지연건수\"/><Cell col=\"9\" colspan=\"6\" text=\"최종평가\"/><Cell row=\"1\" col=\"3\" text=\"건수\"/><Cell row=\"1\" col=\"4\" text=\"실적\"/><Cell row=\"1\" col=\"5\" text=\"환산점수\"/><Cell row=\"1\" col=\"6\" text=\"가중치\"/><Cell row=\"1\" col=\"7\" text=\"가중평가\"/><Cell row=\"1\" col=\"9\" text=\"평가실적\"/><Cell row=\"1\" col=\"10\" text=\"종합가중치\"/><Cell row=\"1\" col=\"11\" text=\"종합실적\"/><Cell row=\"1\" col=\"12\" text=\"부서가중치\"/><Cell row=\"1\" col=\"13\" text=\"최종평가\"/><Cell row=\"1\" col=\"14\" text=\"순위\"/></Band><Band id=\"body\"><Cell text=\"bind:deptNm\" textAlign=\"center\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:srcType\" textAlign=\"center\" suppress=\"2\"/><Cell col=\"2\" text=\"bind:mngIdctNm\"/><Cell col=\"3\" text=\"bind:tCnt\" textAlign=\"center\" expr=\"tCnt == 0 ? &apos;-&apos; : tCnt\" displaytype=\"text\"/><Cell col=\"4\" text=\"bind:val\" textAlign=\"center\" cssclass=\"CellLink,CellTxtBlue\" displaytype=\"mask\" maskeditformat=\"##.00\"/><Cell col=\"5\" text=\"bind:score\" textAlign=\"center\" displaytype=\"mask\" maskeditformat=\"##.00\"/><Cell col=\"6\" text=\"bind:wgvl\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:tScore\" textAlign=\"center\" maskeditformat=\"##.0000\" displaytype=\"mask\"/><Cell col=\"8\" textAlign=\"center\" text=\"bind:dCnt\" expr=\"dCnt == 0 ? &apos;-&apos; : dCnt\" displaytype=\"text\"/><Cell col=\"9\" text=\"bind:srcScore\" textAlign=\"center\" displaytype=\"mask\" maskeditformat=\"##.0000\" suppress=\"2\"/><Cell col=\"10\" text=\"bind:srcWgt\" textAlign=\"center\" displaytype=\"mask\" maskeditformat=\"##.00\" suppress=\"2\"/><Cell col=\"11\" text=\"bind:wpScore\" textAlign=\"center\" maskeditformat=\"##.00\" displaytype=\"mask\" suppress=\"2\"/><Cell col=\"12\" text=\"bind:dptWgt\" textAlign=\"center\" maskeditformat=\"#.00\" displaytype=\"mask\" suppress=\"2\"/><Cell col=\"13\" text=\"bind:zScore\" textAlign=\"center\" displaytype=\"mask\" maskeditformat=\"##.00\" suppress=\"2\"/><Cell col=\"14\" text=\"bind:rank\" cssclass=\"CellEnd\" textAlign=\"center\" suppress=\"2\" expr=\"rank != &apos;&apos; ? rank : &apos;-&apos;\" displaytype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
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
                p.staDash.set_minwidth("10");
                p.staDash.set_maxwidth("");
                p.staDash.move("Calendar00:10","0","10","40",null,null);

                p.Calendar01.set_taborder("2");
                p.Calendar01.set_dateformat("yyyy-MM-dd");
                p.Calendar01.move("staDash:10","0","150","40",null,null);
            	}
            );
            obj.set_horizontalgap("10");
            obj.set_type("horizontal");
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
            obj.set_horizontalgap("10");
            obj.set_type("horizontal");
            this.divForm.form.divSch.form.divCal.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divSch.form
            obj = new Layout("default","",0,0,this.divForm.form.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.pan00.set_taborder("3");
                p.pan00.set_type("horizontal");
                p.pan00.set_horizontalgap("10");
                p.pan00.set_flexwrap("nowrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_flexgrow("1");
                p.pan00.set_minwidth("");
                p.pan00.move("20.00","67","420","40",null,null);

                p.panLabel.set_taborder("0");
                p.panLabel.set_verticalgap("8");
                p.panLabel.set_flexwrap("wrap");
                p.panLabel.set_spacing("0px 0px 10px 0px");
                p.panLabel.set_type("horizontal");
                p.panLabel.set_flexcrossaxisalign("start");
                p.panLabel.set_horizontalgap("40");
                p.panLabel.set_fittocontents("height");
                p.panLabel.set_maxheight("");
                p.panLabel.move("20","14","100%","50",null,null);

                p.staLabel.set_taborder("1");
                p.staLabel.set_text("공사부서명");
                p.staLabel.set_cssclass("sta_WF_SchLabel");
                p.staLabel.set_flexshrink("0");
                p.staLabel.set_minwidth("");
                p.staLabel.move("0","0","100","40",null,null);

                p.pan01.set_taborder("2");
                p.pan01.set_type("horizontal");
                p.pan01.set_horizontalgap("10");
                p.pan01.set_flexgrow("1");
                p.pan01.set_maxheight("");
                p.pan01.set_minwidth("");
                p.pan01.move("1694.00","398","420","40",null,null);

                p.staLabel03.set_taborder("8");
                p.staLabel03.set_text("기간");
                p.staLabel03.set_cssclass("sta_WF_SchLabel");
                p.staLabel03.set_flexshrink("0");
                p.staLabel03.set_maxwidth("");
                p.staLabel03.move("0","0","100","40",null,null);

                p.panClose.set_taborder("5");
                p.panClose.set_type("vertical");
                p.panClose.set_cssclass("pal_WF_SchLine");
                p.panClose.set_flexcrossaxisalign("end");
                p.panClose.move("30","151","100%","30",null,null);

                p.btnSchClose.set_taborder("4");
                p.btnSchClose.set_cssclass("btn_WF_SchClose");
                p.btnSchClose.move("1251","185","30","30",null,null);

                p.panSchBtn.set_taborder("6");
                p.panSchBtn.set_flexmainaxisalign("center");
                p.panSchBtn.move("632","235","100%","40",null,null);

                p.btnSch.set_taborder("7");
                p.btnSch.set_text("조회하기");
                p.btnSch.set_cssclass("btn_WF_Search");
                p.btnSch.set_fittocontents("width");
                p.btnSch.move("570","192","112","40",null,null);

                p.Panel03_00_00_00_00_00.set_taborder("9");
                p.Panel03_00_00_00_00_00.set_type("vertical");
                p.Panel03_00_00_00_00_00.set_horizontalgap("10");
                p.Panel03_00_00_00_00_00.set_fittocontents("height");
                p.Panel03_00_00_00_00_00.set_flexgrow("1");
                p.Panel03_00_00_00_00_00.set_flexmainaxisalign("end");
                p.Panel03_00_00_00_00_00.set_minwidth("");
                p.Panel03_00_00_00_00_00.move("1694.00","398","420","40",null,null);

                p.Edit01_00.set_taborder("10");
                p.Edit01_00.set_flexgrow("1");
                p.Edit01_00.move("841","24","65%","40",null,null);

                p.CheckBox00_00.set_taborder("11");
                p.CheckBox00_00.set_text("평가대상부서만 조회");
                p.CheckBox00_00.move("1105","120","204","40",null,null);

                p.divCal.set_taborder("12");
                p.divCal.set_text("Div00");
                p.divCal.set_flexgrow("1");
                p.divCal.set_formscrollbartype("none none");
                p.divCal.set_formscrolltype("none");
                p.divCal.move("1030","75","320","40",null,null);
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
                p.Static00.set_taborder("11");
                p.Static00.set_text("공항공사 평가보고서 요약 정보");
                p.Static00.set_cssclass("sta_WF_Txt60018");
                p.Static00.move("0","0","100%","34",null,null);

                p.Panel00.set_taborder("12");
                p.Panel00.set_fittocontents("width");
                p.Panel00.move("0","44","109","34",null,null);

                p.PanelGrdBtn.set_taborder("3");
                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_fittocontents("none");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.set_flexgrow("0");
                p.PanelGrdBtn.set_flexwrap("wrap");
                p.PanelGrdBtn.move(null,"44","75%","34","0",null);

                p.grdList.set_taborder("0");
                p.grdList.set_binddataset("dsList");
                p.grdList.set_autofittype("none");
                p.grdList.move("0","PanelGrdBtn:10","100.00%",null,null,"50");

                p.staTotal.set_taborder("10");
                p.staTotal.set_text("총");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("width");
                p.staTotal.move("0","40","30","34",null,null);

                p.staTotal01.set_taborder("9");
                p.staTotal01.set_text("1000");
                p.staTotal01.set_cssclass("sta_WF_Total");
                p.staTotal01.set_usedecorate("true");
                p.staTotal01.move("27","40","45","34",null,null);

                p.staTotal02.set_taborder("8");
                p.staTotal02.set_text("건");
                p.staTotal02.set_usedecorate("true");
                p.staTotal02.set_fittocontents("width");
                p.staTotal02.move("70","40","30","34",null,null);

                p.cmbGrdList.set_taborder("2");
                p.cmbGrdList.set_visible("false");
                p.cmbGrdList.set_innerdataset(divForm_form_divGrd_form_cmbGrdList_innerdataset);
                p.cmbGrdList.set_codecolumn("codecolumn");
                p.cmbGrdList.set_datacolumn("datacolumn");
                p.cmbGrdList.set_text("10");
                p.cmbGrdList.set_value("10");
                p.cmbGrdList.set_index("0");
                p.cmbGrdList.move("1230","0","80","34",null,null);

                p.staTotal00.set_taborder("1");
                p.staTotal00.set_text("목록수");
                p.staTotal00.set_cssclass("sta_WF_SchLabel");
                p.staTotal00.set_fittocontents("width");
                p.staTotal00.set_visible("false");
                p.staTotal00.move("1165","0","65","34",null,null);

                p.btnGrdAdd.set_taborder("6");
                p.btnGrdAdd.set_text("추가");
                p.btnGrdAdd.set_cssclass("btn_WF_Small");
                p.btnGrdAdd.set_visible("false");
                p.btnGrdAdd.set_fittocontents("width");
                p.btnGrdAdd.move("774.00","10","47","34",null,null);

                p.btnGrdRegi.set_taborder("4");
                p.btnGrdRegi.set_text("등록");
                p.btnGrdRegi.set_cssclass("btn_WF_SmallBlack");
                p.btnGrdRegi.set_visible("false");
                p.btnGrdRegi.set_fittocontents("width");
                p.btnGrdRegi.move("774.00","10","45","34",null,null);

                p.btnGrdDel.set_taborder("7");
                p.btnGrdDel.set_text("삭제");
                p.btnGrdDel.set_cssclass("btn_WF_SmallRed");
                p.btnGrdDel.set_visible("false");
                p.btnGrdDel.set_fittocontents("width");
                p.btnGrdDel.move("804.00","10","45","34",null,null);

                p.btnGrdDw.set_taborder("5");
                p.btnGrdDw.set_text("다운로드(엑셀)");
                p.btnGrdDw.set_cssclass("btn_WF_GrdDw");
                p.btnGrdDw.set_visible("true");
                p.btnGrdDw.set_fittocontents("width");
                p.btnGrdDw.move("774.00","10","124","34",null,null);

                p.Panel01.set_taborder("13");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.set_fittocontents("width");
                p.Panel01.move("94","0","155","34",null,null);

                p.divPage.set_taborder("14");
                p.divPage.set_text("Div00");
                p.divPage.set_url("work::COM/util/paging/paging.xfdl");
                p.divPage.set_formscrollbartype("none none");
                p.divPage.set_formscrolltype("none");
                p.divPage.set_visible("true");
                p.divPage.set_minheight("36");
                p.divPage.set_maxheight("");
                p.divPage.move("0","grdList:10","100.00%","36",null,null);

                p.btnGrdDwAll.set_taborder("15");
                p.btnGrdDwAll.set_text("전체다운로드(엑셀)");
                p.btnGrdDwAll.set_cssclass("btn_WF_GrdDw");
                p.btnGrdDwAll.set_visible("true");
                p.btnGrdDwAll.set_fittocontents("width");
                p.btnGrdDwAll.move("1208","46","150","34",null,null);
            	}
            );
            obj.set_verticalgap("10");
            obj.set_type("default");
            obj.set_flexwrap("wrap");
            this.divForm.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divGrd.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdList.move("0","PanelGrdBtn:10","100.00%",null,null,"0");

                p.PanelGrdBtn.set_fittocontents("height");
                p.PanelGrdBtn.set_verticalgap("10");
                p.PanelGrdBtn.move(null,"44","75%","78","0",null);

                p.Panel00.move("0","44","82","34",null,null);

                p.staTotal02.move("70","40","12","34",null,null);
            	}
            );
            obj.set_type("default");
            obj.set_verticalgap("8");
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
                p.divSch.move("0","0","100.00%","148",null,null);

                p.divGrd.set_taborder("1");
                p.divGrd.set_text("Div01");
                p.divGrd.set_fittocontents("none");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.set_flexgrow("1");
                p.divGrd.move("0","divSch:30","100.00%","662",null,null);
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
                p.divGrd.move("0","divSch:30","100.00%","662",null,null);
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
                p.set_titletext("SLM 평가보고서_요약 (공항공사)");

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_formscrollbartype("none none");
                p.divForm.set_formscrolltype("none");
                p.divForm.set_fittocontents("none");
                p.divForm.set_maxwidth("");
                p.divForm.move("0","60",null,null,"60","0");

                p.divTitle.set_taborder("1");
                p.divTitle.set_text("");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.set_formscrolltype("none");
                p.divTitle.set_maxwidth("");
                p.divTitle.move("0","0",null,"50","60",null);

                p.grdExcel.set_taborder("2");
                p.grdExcel.set_binddataset("dsList");
                p.grdExcel.set_autofittype("none");
                p.grdExcel.set_visible("false");
                p.grdExcel.move("1495","4","12.84%",null,null,"764");
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
            obj = new BindItem("item10","divForm.form.divSch.form.CheckBox00_00","value","dsSearch","trgtDeptYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divForm.form.divSch.form.Edit01_00","value","dsSearch","deptNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divTitle.form.divSch.form.divCal.form.calBgngYmd","value","dsSearch","sDate");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divTitle.form.divSch.form.divCal.form.calEndYmd","value","dsSearch","eDate");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divTitle.form.divSch.form.edtCtrtNo","value","dsSearch","ctrtNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divTitle.form.divSch.form.edtBrno","value","dsSearch","brno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divTitle.form.divSch.form.edtCtrtNm","value","dsSearch","ctrtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divTitle.form.divSch.form.edtCoNm","value","dsSearch","coNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divTitle.form.divSch.form.cmbMnlMngSeMnl","value","dsSearch","autoMnlRegSe");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divTitle.form.divGrd.form.staTotal01","text","dsPage","totalRecordCount");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divForm.form.divSch.form.divCal.form.Calendar00","value","dsSearch","sDate");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divForm.form.divSch.form.divCal.form.Calendar01","value","dsSearch","eDate");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divForm.form.divGrd.form.staTotal01","text","dsPage","totalRecordCount");
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
        this.registerScript("COM021M11.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	COM021M11.xfdl
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
        this.objApp = nexacro.getApplication();

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수

        	var eDate = this.gfnGetDate();
        	var sDate = this.gfnAddMonth(eDate, -1);
        	this.dsSearch.setColumn(0, "sDate", sDate);
        	this.dsSearch.setColumn(0, "eDate", eDate);

        	this.fnInit();
        	this.cfnSearch(1);
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function (page)
        {
        	var recordCountPerPage = 999999 //;this.divForm.form.divGrd.form.cmbGrdList.value;
        	this.dsSearch.setColumn(0, "currentPageNo", page);
        	this.dsSearch.setColumn(0, "recordCountPerPage", recordCountPerPage);
        	this.getSearchTransaction();
        };

        //추가
        this.cfnAdd = function ()
        {

        };

        //삭제
        this.cfnDel = function ()
        {

        };

        //저장
        this.cfnSave = function ()
        {

        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.getSearchTransaction = function()
        {
        	var strSvcId    = "search";
        	var strSvcUrl   = "slm/slmEvlRptpSmryIiacInq.do";
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
        	var strSvcUrl   = "slm/slmEvlRptpSmryIiacInq.do";
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
        		case "search" :
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

        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divForm_divGrd_btnGrdDw_onclick = function(obj,e)
        {
        	/*****  현재 그리드 화면을 엑셀로 다운로드 받음  *****/
        	this.exportObj = new ExcelExportObject();
        	var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.divForm.form.divGrd.form.grdList, "Sheet1!A1");
        	this.exportObj.set_exporturl("svcUrl::/XExportImport.do");
        	this.exportObj.exportData();
        	/*****  현재 그리드 화면을 엑셀로 다운로드 받음  *****/
        };

        this.divForm_divSch_CheckBox00_00_onchanged = function(obj,e)
        {
        	if(e.postvalue == false) {
        		this.dsSearch.setColumn(0, "trgtDeptYn", "");
        	}
        };

        this.divForm_divGrd_grdList_oncellclick = function(obj,e)
        {
        	if(e.cell == 4) {
        // 		if(this.gfnIsNull(this.dsList.getColumn(e.row, "val")) == true) {
        // 			return;
        // 		}

        		var sTitle = "서비스 만족도/처리시간 조회";
        		var objArg   = { "listType" : "1"
        		               , "sDate" : this.dsSearch.getColumn(0, "sDate")
        					   , "eDate" : this.dsSearch.getColumn(0, "eDate")
        					   , "item1" : this.dsList.getColumn(e.row, "item1")
        					   , "item2" : this.dsList.getColumn(e.row, "item2") // 다른 화면에서 사용
        					   , "deptId" : this.dsList.getColumn(e.row, "deptId")
        					   , "cpatcoId" : this.dsList.getColumn(e.row, "coId") // 다른 화면에서 사용
        					   , "slmIdctId" : this.dsList.getColumn(e.row, "mSlmIdctId")
        		               };

        		var objOption = {
        			popuptype: "modal"	//modal,modaless
        			//, width: 820
        			//, height: 600
        			, autosize: true
        			, title: sTitle
        			, resize: true
        			, titlebar: true
        		};
        		var sPopupCallBack = "fnPopupCallback";

        		this.gfnOpenPopup("prcsHrPopup", "work::COM/slm/COM021M15.xfdl", objArg, sPopupCallBack, objOption);
        	}
        };

        this.divForm_divSch_btnSch_onclick = function(obj,e)
        {
        	this.cfnSearch(1);
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
            this.divForm.form.divSch.form.btnSchClose.addEventHandler("onclick",this.divForm_divSch_btnSchClose_onclick,this);
            this.divForm.form.divSch.form.btnSch.addEventHandler("onclick",this.divForm_divSch_btnSch_onclick,this);
            this.divForm.form.divSch.form.CheckBox00_00.addEventHandler("onchanged",this.divForm_divSch_CheckBox00_00_onchanged,this);
            this.divForm.form.divGrd.form.grdList.addEventHandler("oncellclick",this.divForm_divGrd_grdList_oncellclick,this);
            this.divForm.form.divGrd.form.cmbGrdList.addEventHandler("onitemchanged",this.divForm_divGrd_cmbGrdList_onitemchanged,this);
            this.divForm.form.divGrd.form.btnGrdDw.addEventHandler("onclick",this.divForm_divGrd_btnGrdDw_onclick,this);
            this.divForm.form.divGrd.form.btnGrdDwAll.addEventHandler("onclick",this.divForm_divGrd_btnGrdDwAll_onclick,this);
            this.grdExcel.addEventHandler("oncellclick",this.divForm_divGrd_grdList_oncellclick,this);
        };
        this.loadIncludeScript("COM021M11.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
