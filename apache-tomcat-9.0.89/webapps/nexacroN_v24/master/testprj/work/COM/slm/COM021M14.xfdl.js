(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM021M14");
            this.set_titletext("SLM 평가보고서_상세 (자회사)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"currentPageNo\" type=\"STRING\" size=\"256\"/><Column id=\"recordCountPerPage\" type=\"STRING\" size=\"256\"/><Column id=\"sDate\" type=\"STRING\" size=\"256\"/><Column id=\"eDate\" type=\"STRING\" size=\"256\"/><Column id=\"cpatcoYn\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"ctgryCd\" type=\"STRING\" size=\"256\"/><Column id=\"coNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"currentPageNo\">1</Col><Col id=\"recordCountPerPage\">999999</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj.set_keystring("G:coNm,deptNm,entLabel");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"coNm\" type=\"STRING\" size=\"256\"/><Column id=\"coId\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"ptnDptId\" type=\"STRING\" size=\"256\"/><Column id=\"item1\" type=\"STRING\" size=\"256\"/><Column id=\"entLabel\" type=\"STRING\" size=\"256\"/><Column id=\"item2\" type=\"STRING\" size=\"256\"/><Column id=\"ctgryCd\" type=\"STRING\" size=\"256\"/><Column id=\"mngIdctNm\" type=\"STRING\" size=\"256\"/><Column id=\"mSlmIdctId\" type=\"STRING\" size=\"256\"/><Column id=\"wgvl\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"stdTm\" type=\"STRING\" size=\"256\"/><Column id=\"val\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"score\" type=\"BIGDECIMAL\" size=\"256\" prop=\"AVG\"/><Column id=\"tScore\" type=\"BIGDECIMAL\" size=\"256\" prop=\"SUM\"/><Column id=\"tCnt\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"dCnt\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCtgryCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPage", this);
            obj._setContents("<ColumnInfo><Column id=\"totalRecordCount\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcel", this);
            obj.set_keystring("G:coNm,deptNm,entLabel");
            obj._setContents("<ColumnInfo><Column id=\"coNm\" type=\"STRING\" size=\"256\"/><Column id=\"coId\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"ptnDptId\" type=\"STRING\" size=\"256\"/><Column id=\"item1\" type=\"STRING\" size=\"256\"/><Column id=\"entLabel\" type=\"STRING\" size=\"256\"/><Column id=\"slmSrvcId\" type=\"STRING\" size=\"256\"/><Column id=\"item2\" type=\"STRING\" size=\"256\"/><Column id=\"mngIdctNm\" type=\"STRING\" size=\"256\"/><Column id=\"mSlmIdctId\" type=\"STRING\" size=\"256\"/><Column id=\"wgvl\" type=\"STRING\" size=\"256\"/><Column id=\"stdTm\" type=\"STRING\" size=\"256\"/><Column id=\"val\" type=\"STRING\" size=\"256\"/><Column id=\"score\" type=\"STRING\" size=\"256\"/><Column id=\"tScore\" type=\"STRING\" size=\"256\"/><Column id=\"tCnt\" type=\"STRING\" size=\"256\"/><Column id=\"dCnt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Div("divSch","0","0","100%","198",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel01_00","0","0","110","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("9");
            obj.set_text("자회사");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panLabel","20","14","100%","102",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("0");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("50");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel02\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel03\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_00\"/><PanelItem id=\"PanelItem05\" componentid=\"Panel03_00\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel01","1694.00","398","420","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("2");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01\"/><PanelItem id=\"PanelItem02\" componentid=\"divCal\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01","0","0","110","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("1");
            obj.set_text("기간");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel02","1694.00","398","420","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("3");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"CheckBox00_00\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel03","1694.00","398","420","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("4");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtCoNm\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panClose","30","151","100%","30",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_SchLine");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnSchClose\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnSchClose","1251","185","30","30",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_SchClose");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panSchBtn","632","235","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("7");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnSch\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnSch","570","192","120","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("8");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Search");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01_01","0","0","110","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("10");
            obj.set_text("서비스");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","1694.00","398","420","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("11");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"cmbCtgryCd\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtCoNm","140","80","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("12");
            obj.set_flexgrow("1");
            obj.set_displaynulltext("검색어 입력");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divCal","1030","75","330","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("13");
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

            obj = new Combo("cmbCtgryCd","788.00","145","20.42%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("14");
            obj.set_flexgrow("1");
            obj.set_innerdataset("dsCtgryCd");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00","1105","120","200","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("15");
            obj.set_text("평가대상자회사만 조회");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00","0","0","110","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("16");
            obj.set_text("담당공사부서명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtDeptNm","140","80","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("17");
            obj.set_flexgrow("1");
            obj.set_displaynulltext("검색어 입력");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel03_00","1694.00","398","420","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("18");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtDeptNm\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divGrd","0","divSch:30","100.00%","700",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("none");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","100%","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("10");
            obj.set_text("공항공사 평가보고서 상세 정보");
            obj.set_cssclass("sta_WF_Txt60018");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","44","99","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("11");
            obj.set_fittocontents("width");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTotal\"/><PanelItem id=\"PanelItem01\" componentid=\"staTotal01\"/><PanelItem id=\"PanelItem02\" componentid=\"staTotal02\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("panGrdBtn",null,"44","75%","34","0",null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("9");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("none");
            obj.set_flexgrow("1");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem04\" componentid=\"btnGrdDel\"/><PanelItem id=\"PanelItem05\" componentid=\"btnGrdRegi\"/><PanelItem id=\"PanelItem01\" componentid=\"btnGrdDw\"/><PanelItem id=\"PanelItem02\" componentid=\"btnGrdDwAll\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("grdList","0","panGrdBtn:10","100.00%",null,null,"50",null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"250\"/><Column size=\"200\"/><Column size=\"300\"/><Column size=\"250\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"자회사\"/><Cell col=\"1\" rowspan=\"2\" text=\"담당공사부서\"/><Cell col=\"2\" rowspan=\"2\" text=\"서비스\"/><Cell col=\"3\" rowspan=\"2\" text=\"평가지표\"/><Cell col=\"4\" rowspan=\"2\" text=\"목표\"/><Cell col=\"5\" colspan=\"3\" text=\"처리\"/><Cell col=\"8\" colspan=\"2\" text=\"평가\"/><Cell col=\"10\" rowspan=\"2\" text=\"지연건수\" cssclass=\"CellEnd\"/><Cell row=\"1\" col=\"5\" text=\"건수\"/><Cell row=\"1\" col=\"6\" text=\"실적\"/><Cell row=\"1\" col=\"7\" text=\"환산점수\"/><Cell row=\"1\" col=\"8\" text=\"가중치\"/><Cell row=\"1\" col=\"9\" text=\"가중평가\"/></Band><Band id=\"body\"><Cell text=\"bind:coNm\" suppress=\"1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:deptNm\" suppress=\"2\" textAlign=\"center\" expr=\"dataset.getRowLevel(currow) == 3 ? &apos;소계&apos; : deptNm\" cssclass=\"expr:dataset.getRowLevel(currow) == 3 ? &apos;CellSum03&apos; : &apos;&apos;\"/><Cell col=\"2\" text=\"bind:entLabel\" suppress=\"3\" expr=\"dataset.getRowLevel(currow) == 2 ? &apos;소계&apos; : entLabel\" cssclass=\"expr:dataset.getRowLevel(currow) == 3 ? &apos;CellSum03&apos; : (dataset.getRowLevel(currow) == 2 ? &apos;CellSum02&apos; : &apos;&apos;)\"/><Cell col=\"3\" text=\"bind:mngIdctNm\" expr=\"dataset.getRowLevel(currow) == 1 ? &apos;소계&apos; : mngIdctNm\" cssclass=\"expr:dataset.getRowLevel(currow) == 3 ? &apos;CellSum03&apos; : (dataset.getRowLevel(currow) == 2 ? &apos;CellSum02&apos; : (dataset.getRowLevel(currow) == 1 ? &apos;CellSum01&apos; : &apos;&apos;))\"/><Cell col=\"4\" text=\"bind:stdTm\" textAlign=\"center\" cssclass=\"expr:dataset.getRowLevel(currow) == 3 ? &apos;CellSum03&apos; : (dataset.getRowLevel(currow) == 2 ? &apos;CellSum02&apos; : (dataset.getRowLevel(currow) == 1 ? &apos;CellSum01&apos; : &apos;&apos;))\"/><Cell col=\"5\" text=\"bind:tCnt\" textAlign=\"center\" cssclass=\"expr:dataset.getRowLevel(currow) == 3 ? &apos;CellSum03&apos; : (dataset.getRowLevel(currow) == 2 ? &apos;CellSum02&apos; : (dataset.getRowLevel(currow) == 1 ? &apos;CellSum01&apos; : &apos;&apos;))\" expr=\"dataset.getRowLevel(currow) == 0 ? (tCnt == 0 ? &apos;-&apos; : tCnt) : &apos;-&apos;\" displaytype=\"text\"/><Cell col=\"6\" text=\"bind:val\" textAlign=\"center\" cssclass=\"expr:dataset.getRowLevel(currow) == 3 ? &apos;CellSum03&apos; : (dataset.getRowLevel(currow) == 2 ? &apos;CellSum02&apos; : (dataset.getRowLevel(currow) == 1 ? &apos;CellSum01&apos; : &apos;CellLink,CellTxtBlue&apos;))\" displaytype=\"expr:dataset.getRowLevel(currow) == 0 ? &apos;mask&apos; : &apos;text&apos;\" maskeditformat=\"##.00\" expr=\"dataset.getRowLevel(currow) == 0 ? val : &apos;-&apos;\"/><Cell col=\"7\" text=\"bind:score\" textAlign=\"center\" cssclass=\"expr:dataset.getRowLevel(currow) == 3 ? &apos;CellSum03&apos; : (dataset.getRowLevel(currow) == 2 ? &apos;CellSum02&apos; : (dataset.getRowLevel(currow) == 1 ? &apos;CellSum01&apos; : &apos;&apos;))\" displaytype=\"mask\" maskeditformat=\"##.00\"/><Cell col=\"8\" text=\"bind:wgvl\" textAlign=\"center\" cssclass=\"expr:dataset.getRowLevel(currow) == 3 ? &apos;CellSum03&apos; : (dataset.getRowLevel(currow) == 2 ? &apos;CellSum02&apos; : (dataset.getRowLevel(currow) == 1 ? &apos;CellSum01&apos; : &apos;&apos;))\" displaytype=\"text\" expr=\"dataset.getRowLevel(currow) == 0 ? wgvl : &apos;-&apos;\"/><Cell col=\"9\" text=\"bind:tScore\" textAlign=\"center\" cssclass=\"expr:dataset.getRowLevel(currow) == 3 ? &apos;CellSum03&apos; : (dataset.getRowLevel(currow) == 2 ? &apos;CellSum02&apos; : (dataset.getRowLevel(currow) == 1 ? &apos;CellSum01&apos; : &apos;&apos;))\" maskeditformat=\"##.00\" displaytype=\"mask\"/><Cell col=\"10\" text=\"bind:dCnt\" cssclass=\"expr:dataset.getRowLevel(currow) == 3 ? &apos;CellSum03&apos; : (dataset.getRowLevel(currow) == 2 ? &apos;CellSum02&apos; : (dataset.getRowLevel(currow) == 1 ? &apos;CellSum01&apos; : &apos;&apos;))\" textAlign=\"center\" displaytype=\"text\" expr=\"dataset.getRowLevel(currow) == 0 ? (dCnt == 0 ? &apos;-&apos; : dCnt) : &apos;-&apos;\"/></Band></Format></Formats>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","40","30","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_text("총");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal01","27","40","45","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_text("1000");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal02","70","40","30","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_text("건");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal00","151.00","0","65","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("4");
            obj.set_text("목록수");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Combo("cmbGrdList","226.00","0","80","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("5");
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

            obj = new Button("btnGrdDw","426.00","0","124","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("8");
            obj.set_text("다운로드(엑셀)");
            obj.set_cssclass("btn_WF_GrdDw");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("Panel01","151","0","155","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("12");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTotal00\"/><PanelItem id=\"PanelItem01\" componentid=\"cmbGrdList\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDwAll","1275","65","150","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("13");
            obj.set_text("전체다운로드(엑셀)");
            obj.set_cssclass("btn_WF_GrdDw");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Div("divPage","0","grdList:10","100.00%","36",null,null,null,null,"36",null,this.divForm.form.divGrd.form);
            obj.set_taborder("14");
            obj.set_text("Div00");
            obj.set_url("work::COM/util/paging/paging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_visible("true");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Grid("grdExcel","1495","7","11.49%",null,null,"774",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsList");
            obj.set_autofittype("none");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"250\"/><Column size=\"200\"/><Column size=\"300\"/><Column size=\"250\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"자회사\"/><Cell col=\"1\" rowspan=\"2\" text=\"담당공사부서\"/><Cell col=\"2\" rowspan=\"2\" text=\"서비스\"/><Cell col=\"3\" rowspan=\"2\" text=\"평가지표\"/><Cell col=\"4\" rowspan=\"2\" text=\"목표\"/><Cell col=\"5\" colspan=\"3\" text=\"처리\"/><Cell col=\"8\" colspan=\"2\" text=\"평가\"/><Cell col=\"10\" rowspan=\"2\" text=\"지연건수\" cssclass=\"CellEnd\"/><Cell row=\"1\" col=\"5\" text=\"건수\"/><Cell row=\"1\" col=\"6\" text=\"실적\"/><Cell row=\"1\" col=\"7\" text=\"환산점수\"/><Cell row=\"1\" col=\"8\" text=\"가중치\"/><Cell row=\"1\" col=\"9\" text=\"가중평가\"/></Band><Band id=\"body\"><Cell text=\"bind:coNm\" suppress=\"1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:deptNm\" suppress=\"2\" textAlign=\"center\" expr=\"dataset.getRowLevel(currow) == 3 ? &apos;소계&apos; : deptNm\" cssclass=\"expr:dataset.getRowLevel(currow) == 3 ? &apos;CellSum03&apos; : &apos;&apos;\"/><Cell col=\"2\" text=\"bind:entLabel\" suppress=\"3\" expr=\"dataset.getRowLevel(currow) == 2 ? &apos;소계&apos; : entLabel\" cssclass=\"expr:dataset.getRowLevel(currow) == 3 ? &apos;CellSum03&apos; : (dataset.getRowLevel(currow) == 2 ? &apos;CellSum02&apos; : &apos;&apos;)\"/><Cell col=\"3\" text=\"bind:mngIdctNm\" expr=\"dataset.getRowLevel(currow) == 1 ? &apos;소계&apos; : mngIdctNm\" cssclass=\"expr:dataset.getRowLevel(currow) == 3 ? &apos;CellSum03&apos; : (dataset.getRowLevel(currow) == 2 ? &apos;CellSum02&apos; : (dataset.getRowLevel(currow) == 1 ? &apos;CellSum01&apos; : &apos;&apos;))\"/><Cell col=\"4\" text=\"bind:stdTm\" textAlign=\"center\" cssclass=\"expr:dataset.getRowLevel(currow) == 3 ? &apos;CellSum03&apos; : (dataset.getRowLevel(currow) == 2 ? &apos;CellSum02&apos; : (dataset.getRowLevel(currow) == 1 ? &apos;CellSum01&apos; : &apos;&apos;))\"/><Cell col=\"5\" text=\"bind:tCnt\" textAlign=\"center\" cssclass=\"expr:dataset.getRowLevel(currow) == 3 ? &apos;CellSum03&apos; : (dataset.getRowLevel(currow) == 2 ? &apos;CellSum02&apos; : (dataset.getRowLevel(currow) == 1 ? &apos;CellSum01&apos; : &apos;&apos;))\" expr=\"dataset.getRowLevel(currow) == 0 ? (tCnt == 0 ? &apos;-&apos; : tCnt) : &apos;-&apos;\" displaytype=\"text\"/><Cell col=\"6\" text=\"bind:val\" textAlign=\"center\" cssclass=\"expr:dataset.getRowLevel(currow) == 3 ? &apos;CellSum03&apos; : (dataset.getRowLevel(currow) == 2 ? &apos;CellSum02&apos; : (dataset.getRowLevel(currow) == 1 ? &apos;CellSum01&apos; : &apos;CellLink,CellTxtBlue&apos;))\" displaytype=\"expr:dataset.getRowLevel(currow) == 0 ? &apos;mask&apos; : &apos;text&apos;\" maskeditformat=\"##.00\" expr=\"dataset.getRowLevel(currow) == 0 ? val : &apos;-&apos;\"/><Cell col=\"7\" text=\"bind:score\" textAlign=\"center\" cssclass=\"expr:dataset.getRowLevel(currow) == 3 ? &apos;CellSum03&apos; : (dataset.getRowLevel(currow) == 2 ? &apos;CellSum02&apos; : (dataset.getRowLevel(currow) == 1 ? &apos;CellSum01&apos; : &apos;&apos;))\" displaytype=\"mask\" maskeditformat=\"##.00\"/><Cell col=\"8\" text=\"bind:wgvl\" textAlign=\"center\" cssclass=\"expr:dataset.getRowLevel(currow) == 3 ? &apos;CellSum03&apos; : (dataset.getRowLevel(currow) == 2 ? &apos;CellSum02&apos; : (dataset.getRowLevel(currow) == 1 ? &apos;CellSum01&apos; : &apos;&apos;))\" displaytype=\"text\" expr=\"dataset.getRowLevel(currow) == 0 ? wgvl : &apos;-&apos;\"/><Cell col=\"9\" text=\"bind:tScore\" textAlign=\"center\" cssclass=\"expr:dataset.getRowLevel(currow) == 3 ? &apos;CellSum03&apos; : (dataset.getRowLevel(currow) == 2 ? &apos;CellSum02&apos; : (dataset.getRowLevel(currow) == 1 ? &apos;CellSum01&apos; : &apos;&apos;))\" maskeditformat=\"##.00\" displaytype=\"mask\"/><Cell col=\"10\" text=\"bind:dCnt\" cssclass=\"expr:dataset.getRowLevel(currow) == 3 ? &apos;CellSum03&apos; : (dataset.getRowLevel(currow) == 2 ? &apos;CellSum02&apos; : (dataset.getRowLevel(currow) == 1 ? &apos;CellSum01&apos; : &apos;&apos;))\" textAlign=\"center\" displaytype=\"text\" expr=\"dataset.getRowLevel(currow) == 0 ? (dCnt == 0 ? &apos;-&apos; : dCnt) : &apos;-&apos;\"/></Band></Format></Formats>");
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
                p.staLabel01_00.set_taborder("9");
                p.staLabel01_00.set_text("자회사");
                p.staLabel01_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel01_00.set_flexshrink("0");
                p.staLabel01_00.set_maxwidth("");
                p.staLabel01_00.move("0","0","110","40",null,null);

                p.panLabel.set_taborder("0");
                p.panLabel.set_verticalgap("8");
                p.panLabel.set_flexwrap("wrap");
                p.panLabel.set_spacing("0px 0px 10px 0px");
                p.panLabel.set_type("horizontal");
                p.panLabel.set_flexcrossaxisalign("start");
                p.panLabel.set_horizontalgap("50");
                p.panLabel.set_fittocontents("height");
                p.panLabel.set_maxheight("");
                p.panLabel.move("20","14","100%","102",null,null);

                p.Panel01.set_taborder("2");
                p.Panel01.set_type("horizontal");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.set_flexgrow("1");
                p.Panel01.set_maxheight("");
                p.Panel01.set_minwidth("");
                p.Panel01.move("1694.00","398","420","40",null,null);

                p.staLabel01.set_taborder("1");
                p.staLabel01.set_text("기간");
                p.staLabel01.set_cssclass("sta_WF_SchLabel");
                p.staLabel01.set_flexshrink("0");
                p.staLabel01.set_maxwidth("");
                p.staLabel01.move("0","0","110","40",null,null);

                p.Panel02.set_taborder("3");
                p.Panel02.set_type("horizontal");
                p.Panel02.set_horizontalgap("10");
                p.Panel02.set_flexgrow("1");
                p.Panel02.set_minwidth("");
                p.Panel02.move("1694.00","398","420","40",null,null);

                p.Panel03.set_taborder("4");
                p.Panel03.set_type("horizontal");
                p.Panel03.set_horizontalgap("10");
                p.Panel03.set_fittocontents("height");
                p.Panel03.set_flexgrow("1");
                p.Panel03.set_minwidth("");
                p.Panel03.move("1694.00","398","420","40",null,null);

                p.panClose.set_taborder("6");
                p.panClose.set_type("vertical");
                p.panClose.set_cssclass("pal_WF_SchLine");
                p.panClose.set_flexcrossaxisalign("end");
                p.panClose.move("30","151","100%","30",null,null);

                p.btnSchClose.set_taborder("5");
                p.btnSchClose.set_cssclass("btn_WF_SchClose");
                p.btnSchClose.move("1251","185","30","30",null,null);

                p.panSchBtn.set_taborder("7");
                p.panSchBtn.set_flexmainaxisalign("center");
                p.panSchBtn.move("632","235","100%","40",null,null);

                p.btnSch.set_taborder("8");
                p.btnSch.set_text("조회하기");
                p.btnSch.set_cssclass("btn_WF_Search");
                p.btnSch.move("570","192","120","40",null,null);

                p.staLabel01_01.set_taborder("10");
                p.staLabel01_01.set_text("서비스");
                p.staLabel01_01.set_cssclass("sta_WF_SchLabel");
                p.staLabel01_01.set_flexshrink("0");
                p.staLabel01_01.set_maxwidth("");
                p.staLabel01_01.move("0","0","110","40",null,null);

                p.Panel01_00.set_taborder("11");
                p.Panel01_00.set_type("horizontal");
                p.Panel01_00.set_horizontalgap("10");
                p.Panel01_00.set_flexgrow("1");
                p.Panel01_00.set_maxheight("");
                p.Panel01_00.set_minwidth("");
                p.Panel01_00.move("1694.00","398","420","40",null,null);

                p.edtCoNm.set_taborder("12");
                p.edtCoNm.set_flexgrow("1");
                p.edtCoNm.set_displaynulltext("검색어 입력");
                p.edtCoNm.move("140","80","100%","40",null,null);

                p.divCal.set_taborder("13");
                p.divCal.set_text("Div00");
                p.divCal.set_flexgrow("1");
                p.divCal.set_formscrollbartype("none none");
                p.divCal.set_formscrolltype("none");
                p.divCal.move("1030","75","330","40",null,null);

                p.cmbCtgryCd.set_taborder("14");
                p.cmbCtgryCd.set_flexgrow("1");
                p.cmbCtgryCd.set_innerdataset("dsCtgryCd");
                p.cmbCtgryCd.set_codecolumn("cdId");
                p.cmbCtgryCd.set_datacolumn("cdNm");
                p.cmbCtgryCd.set_text("선택");
                p.cmbCtgryCd.set_value("");
                p.cmbCtgryCd.set_index("-1");
                p.cmbCtgryCd.move("788.00","145","20.42%","40",null,null);

                p.CheckBox00_00.set_taborder("15");
                p.CheckBox00_00.set_text("평가대상자회사만 조회");
                p.CheckBox00_00.move("1105","120","200","40",null,null);

                p.staLabel01_00_00.set_taborder("16");
                p.staLabel01_00_00.set_text("담당공사부서명");
                p.staLabel01_00_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel01_00_00.set_flexshrink("0");
                p.staLabel01_00_00.set_maxwidth("");
                p.staLabel01_00_00.move("0","0","110","40",null,null);

                p.edtDeptNm.set_taborder("17");
                p.edtDeptNm.set_flexgrow("1");
                p.edtDeptNm.set_displaynulltext("검색어 입력");
                p.edtDeptNm.move("140","80","100%","40",null,null);

                p.Panel03_00.set_taborder("18");
                p.Panel03_00.set_type("horizontal");
                p.Panel03_00.set_horizontalgap("10");
                p.Panel03_00.set_fittocontents("height");
                p.Panel03_00.set_flexgrow("1");
                p.Panel03_00.set_minwidth("");
                p.Panel03_00.move("1694.00","398","420","40",null,null);
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
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.set_fittocontents("height");
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
                p.Static00.set_taborder("10");
                p.Static00.set_text("공항공사 평가보고서 상세 정보");
                p.Static00.set_cssclass("sta_WF_Txt60018");
                p.Static00.move("0","0","100%","34",null,null);

                p.Panel00.set_taborder("11");
                p.Panel00.set_fittocontents("width");
                p.Panel00.move("0","44","99","34",null,null);

                p.panGrdBtn.set_taborder("9");
                p.panGrdBtn.set_flexcrossaxisalign("start");
                p.panGrdBtn.set_flexcrossaxiswrapalign("start");
                p.panGrdBtn.set_flexmainaxisalign("end");
                p.panGrdBtn.set_horizontalgap("10");
                p.panGrdBtn.set_fittocontents("none");
                p.panGrdBtn.set_flexgrow("1");
                p.panGrdBtn.set_verticalgap("10");
                p.panGrdBtn.move(null,"44","75%","34","0",null);

                p.grdList.set_taborder("0");
                p.grdList.set_binddataset("dsList");
                p.grdList.set_autofittype("none");
                p.grdList.move("0","panGrdBtn:10","100.00%",null,null,"50");

                p.staTotal.set_taborder("3");
                p.staTotal.set_text("총");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("width");
                p.staTotal.move("0","40","30","34",null,null);

                p.staTotal01.set_taborder("2");
                p.staTotal01.set_text("1000");
                p.staTotal01.set_cssclass("sta_WF_Total");
                p.staTotal01.set_usedecorate("true");
                p.staTotal01.move("27","40","45","34",null,null);

                p.staTotal02.set_taborder("1");
                p.staTotal02.set_text("건");
                p.staTotal02.set_usedecorate("true");
                p.staTotal02.set_fittocontents("width");
                p.staTotal02.move("70","40","30","34",null,null);

                p.staTotal00.set_taborder("4");
                p.staTotal00.set_text("목록수");
                p.staTotal00.set_cssclass("sta_WF_SchLabel");
                p.staTotal00.set_fittocontents("width");
                p.staTotal00.set_visible("false");
                p.staTotal00.move("151.00","0","65","34",null,null);

                p.cmbGrdList.set_taborder("5");
                p.cmbGrdList.set_visible("false");
                p.cmbGrdList.set_innerdataset(divForm_form_divGrd_form_cmbGrdList_innerdataset);
                p.cmbGrdList.set_codecolumn("codecolumn");
                p.cmbGrdList.set_datacolumn("datacolumn");
                p.cmbGrdList.set_text("10");
                p.cmbGrdList.set_value("10");
                p.cmbGrdList.set_index("0");
                p.cmbGrdList.move("226.00","0","80","34",null,null);

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

                p.btnGrdDw.set_taborder("8");
                p.btnGrdDw.set_text("다운로드(엑셀)");
                p.btnGrdDw.set_cssclass("btn_WF_GrdDw");
                p.btnGrdDw.set_visible("true");
                p.btnGrdDw.set_fittocontents("width");
                p.btnGrdDw.move("426.00","0","124","34",null,null);

                p.Panel01.set_taborder("12");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.move("151","0","155","34",null,null);

                p.btnGrdDwAll.set_taborder("13");
                p.btnGrdDwAll.set_text("전체다운로드(엑셀)");
                p.btnGrdDwAll.set_cssclass("btn_WF_GrdDw");
                p.btnGrdDwAll.set_visible("true");
                p.btnGrdDwAll.set_fittocontents("width");
                p.btnGrdDwAll.move("1275","65","150","34",null,null);

                p.divPage.set_taborder("14");
                p.divPage.set_text("Div00");
                p.divPage.set_url("work::COM/util/paging/paging.xfdl");
                p.divPage.set_formscrollbartype("none none");
                p.divPage.set_formscrolltype("none");
                p.divPage.set_visible("true");
                p.divPage.set_minheight("36");
                p.divPage.set_maxheight("");
                p.divPage.move("0","grdList:10","100.00%","36",null,null);
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
                p.panGrdBtn.set_flexwrap("wrap");
                p.panGrdBtn.set_fittocontents("height");
                p.panGrdBtn.move(null,"40","75%","78","0",null);

                p.Panel00.move("0","40","79","34",null,null);

                p.staTotal00.set_text("목록수");

                p.grdList.move("0","panGrdBtn:10","100.00%",null,null,"0");
            	}
            );
            obj.set_verticalgap("8");
            obj.set_type("default");
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
                p.set_titletext("SLM 평가보고서_상세 (자회사)");

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
                p.grdExcel.move("1495","7","11.49%",null,null,"774");
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

            obj = new BindItem("item10","divForm.form.divSch.form.CheckBox00_00","value","dsSearch","cpatcoYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divForm.form.divSch.form.edtCoNm","value","dsSearch","coNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divForm.form.divSch.form.cmbCtgryCd","value","dsSearch","ctgryCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divForm.form.divSch.form.edtDeptNm","value","dsSearch","deptNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divForm.form.divGrd.form.staTotal01","text","dsPage","totalRecordCount");
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
        this.registerScript("COM021M14.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	COM021M14.xfdl
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
        	var recordCountPerPage = 999999; //this.divForm.form.divGrd.form.cmbGrdList.value;
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
        	var strSvcUrl   = "slm/slmEvlRptpDtlCpatcoInq.do";
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
        	var strSvcUrl   = "slm/slmEvlRptpDtlCpatcoInq.do";
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
        	this.gfnCmmCode("ctgryCd", "dsCtgryCd", "CTGRY_CD", "A");
        	this.divForm.form.divSch.form.cmbCtgryCd.index = 0;
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
        		this.dsSearch.setColumn(0, "cpatcoYn", "");
        	}
        };

        this.divForm_divGrd_grdList_oncellclick = function(obj,e)
        {
        	if(e.cell == 6) {
        // 		if(this.gfnIsNull(this.dsList.getColumn(e.row, "dCnt")) == true) {
        // 			return;
        // 		}

        		var sTitle = "서비스 만족도/처리시간 조회";
        		var objArg   = { "listType" : "4"
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
            this.divForm.form.divSch.form.btnSchClose.addEventHandler("onclick",this.divForm_divSch_btnSchClose_onclick,this);
            this.divForm.form.divSch.form.btnSch.addEventHandler("onclick",this.divForm_divSch_btnSch_onclick,this);
            this.divForm.form.divSch.form.cmbCtgryCd.addEventHandler("onitemchanged",this.divForm_divSch_Combo01_onitemchanged,this);
            this.divForm.form.divSch.form.CheckBox00_00.addEventHandler("onchanged",this.divForm_divSch_CheckBox00_00_onchanged,this);
            this.divForm.form.divGrd.form.grdList.addEventHandler("oncellclick",this.divForm_divGrd_grdList_oncellclick,this);
            this.divForm.form.divGrd.form.cmbGrdList.addEventHandler("onitemchanged",this.divForm_divGrd_cmbGrdList_onitemchanged,this);
            this.divForm.form.divGrd.form.btnGrdDw.addEventHandler("onclick",this.divForm_divGrd_btnGrdDw_onclick,this);
            this.divForm.form.divGrd.form.btnGrdDwAll.addEventHandler("onclick",this.divForm_divGrd_btnGrdDwAll_onclick,this);
            this.grdExcel.addEventHandler("oncellclick",this.divForm_divGrd_grdList_oncellclick,this);
        };
        this.loadIncludeScript("COM021M14.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
