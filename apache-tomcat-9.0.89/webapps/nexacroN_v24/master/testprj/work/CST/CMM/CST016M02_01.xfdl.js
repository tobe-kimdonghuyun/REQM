(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST016M02");
            this.set_titletext("서비스처리목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"strdGbn\" type=\"STRING\" size=\"256\"/><Column id=\"aplyStartDt\" type=\"STRING\" size=\"256\"/><Column id=\"aplyEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplCntId\" type=\"STRING\" size=\"256\"/><Column id=\"aplCntNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcrId\" type=\"STRING\" size=\"256\"/><Column id=\"prcrIdNm\" type=\"STRING\" size=\"256\"/><Column id=\"currentPageNo\" type=\"STRING\" size=\"256\"/><Column id=\"recordCountPerPage\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"currentPageNo\">1</Col><Col id=\"recordCountPerPage\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFcltOperMst", this);
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeNm\" type=\"STRING\" size=\"256\"/><Column id=\"taskCd\" type=\"STRING\" size=\"256\"/><Column id=\"taskNm\" type=\"STRING\" size=\"256\"/><Column id=\"pstnSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"pstnSeNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplyDt\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntId\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcrId\" type=\"STRING\" size=\"256\"/><Column id=\"prcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"cmproJobNm\" type=\"STRING\" size=\"256\"/><Column id=\"nghtJobYn\" type=\"STRING\" size=\"256\"/><Column id=\"jobApvsrId\" type=\"STRING\" size=\"256\"/><Column id=\"jobApvsrNm\" type=\"STRING\" size=\"256\"/><Column id=\"endDt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPage", this);
            obj._setContents("<ColumnInfo><Column id=\"totalRecordCount\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","0","0",null,"998","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("none none");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("divTitle","0","0","100%","44",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divSch","0","divTitle:20","1420","206",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panLabel","20","14","100%","108",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("0");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("50");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem04\" componentid=\"pan03\"/><PanelItem id=\"PanelItem01\" componentid=\"pan02\"/><PanelItem id=\"PanelItem02\" componentid=\"pan02_00\"/><PanelItem id=\"PanelItem03\" componentid=\"pan02_00_00\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan03","20.00","67","480","45",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("2");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staLabel03\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel00\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtAlyNo","913","33","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("18");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("Static02","832","38","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("17");
            obj.set_text("신청번호");
            obj.set_flexshrink("0");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("Combo02","130.00","14","150","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("9");
            obj.set_flexshrink("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_divSch_form_Combo02_innerdataset = new nexacro.NormalDataset("divForm_form_divSch_form_Combo02_innerdataset", obj);
            divForm_form_divSch_form_Combo02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">신청일</Col><Col id=\"codecolumn\">1</Col></Row><Row><Col id=\"datacolumn\">완료일</Col><Col id=\"codecolumn\">2</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_divSch_form_Combo02_innerdataset);
            obj.set_text("신청일");
            obj.set_value("1");
            obj.set_index("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panClose","30","151","100%","30",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_SchLine");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnSchClose\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnSchClose","1251","185","52","29",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_SchClose");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panSchBtn","632","235","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("5");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnSch\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan02","1694.00","398","480","45",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("1");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static02\"/><PanelItem id=\"PanelItem01\" componentid=\"edtAlyNo\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnSch","570","192","112","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("6");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Search");
            obj.set_fittocontents("width");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divCal","116.00","0","320","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("8");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Calendar("calAplyStartDt","0","0","145","40",null,null,null,null,null,null,this.divForm.form.divSch.form.divCal.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.divSch.form.divCal.addChild(obj.name, obj);

            obj = new Static("staDash","calAplyStartDt:10","0","10","40",null,null,null,null,null,null,this.divForm.form.divSch.form.divCal.form);
            obj.set_taborder("1");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_Dash");
            this.divForm.form.divSch.form.divCal.addChild(obj.name, obj);

            obj = new Calendar("calAplyEndDt","staDash:10","0","145","40",null,null,null,null,null,null,this.divForm.form.divSch.form.divCal.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.divSch.form.divCal.addChild(obj.name, obj);

            obj = new Edit("edtAplCntNm","228","80","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("15");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("Static01","71","91","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("14");
            obj.set_text("신청자");
            obj.set_flexshrink("0");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan02_00","1694.00","398","480","45",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("10");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtAplCntNm\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel02_00_00","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("11");
            obj.set_text("처리자");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtPrcrIdNm","986","36","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("12");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan02_00_00","1694.00","398","480","45",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("13");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel02_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtPrcrIdNm\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel03","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("7");
            obj.set_text("기준일자");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel00","130.00","14","83.43%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("16");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Combo02\"/><PanelItem id=\"PanelItem01\" componentid=\"divCal\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divGrd","0","divSch:20","100.00%","630",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panGrdBtn",null,"0","550","34","0",null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staTotal00\"/><PanelItem id=\"PanelItem02\" componentid=\"cmbGrdList\"/><PanelItem id=\"PanelItem00\" componentid=\"btnGrdDw\"/><PanelItem id=\"PanelItem03\" componentid=\"btnGrdAdd\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("grdList","0","44","100.00%",null,null,"0",null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsFcltOperMst");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"205\"/><Column size=\"216\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"신청번호\"/><Cell col=\"2\" text=\"단계\"/><Cell col=\"3\" text=\"서비스명\"/><Cell col=\"4\" text=\"작업명\"/><Cell col=\"5\" text=\"전산실위치\"/><Cell col=\"6\" text=\"주/야구분\"/><Cell col=\"7\" text=\"작업감독자\"/><Cell col=\"8\" text=\"신청자\"/><Cell col=\"9\" text=\"신청자회사\"/><Cell col=\"10\" text=\"신청일시\"/><Cell col=\"11\" text=\"처리자\"/><Cell col=\"12\" text=\"처리작업그룹\"/><Cell col=\"13\" text=\"완료일시\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:vie\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:aplyNo\" textAlign=\"center\" cssclass=\"CellLink\" cursor=\"pointer\"/><Cell col=\"2\" text=\"bind:taskNm\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:aplySeNm\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:cmproJobNm\" textAlign=\"left\" tooltiptext=\"bind:pstnSeNm\"/><Cell col=\"5\" text=\"bind:pstnSeNm\" textAlign=\"center\" tooltiptext=\"bind:pstnSeNm\"/><Cell col=\"6\" text=\"bind:nghtJobYn\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:jobApvsrNm\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:aplcntNm\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:aplcntInstNm\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:aplyDt\" textAlign=\"center\" displaytype=\"date\" maskedittype=\"number\" calendardateformat=\"yyyy-MM-dd HH:mm\" calendareditformat=\"yyyy-MM-dd HH:mm\" calendardisplaynulltype=\"none\"/><Cell col=\"11\" text=\"bind:prcrNm\" textAlign=\"center\"/><Cell col=\"12\" textAlign=\"center\"/><Cell col=\"13\" cssclass=\"CellEnd\" text=\"bind:endDt\" textAlign=\"center\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm\" calendareditformat=\"yyyy-MM-dd HH:mm\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Combo("cmbGrdList","1230","0","80","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal00","1165","0","65","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_text("목록수");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdAdd","774.00","10","36","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_GrdSet");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDw","774.00","10","124","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("4");
            obj.set_text("다운로드(엑셀)");
            obj.set_cssclass("btn_WF_GrdDw");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","27","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("6");
            obj.set_text("총");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal01","staTotal:0","0","43","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal02","staTotal01:0","0","30","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("8");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Div("divPage","0","10","100%","36",null,null,null,null,"36",null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_url("work::COM/util/paging/paging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divGuide","1590.00","135","450","385",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_visible("false");
            obj.set_cssclass("div_GD_Tip");
            this.addChild(obj.name, obj);

            obj = new Button("btnSchClose","24.00","55","52","30",null,null,null,null,null,null,this.divGuide.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_SchClose");
            this.divGuide.addChild(obj.name, obj);

            obj = new Button("btnSchOpen","100.00","55","52","30",null,null,null,null,null,null,this.divGuide.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_SchOpen");
            this.divGuide.addChild(obj.name, obj);

            obj = new Static("StaSample","0.00","0","289","44",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("서비스처리목록");
            obj.set_cssclass("sta_WF_MainTitle");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form.divTitle
            obj = new Layout("default","",0,0,this.divForm.form.divTitle.form,function(p){});
            this.divForm.form.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.divSch.form.divCal.form
            obj = new Layout("default","",0,0,this.divForm.form.divSch.form.divCal.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.calAplyStartDt.set_taborder("0");
                p.calAplyStartDt.set_dateformat("yyyy-MM-dd");
                p.calAplyStartDt.move("0","0","145","40",null,null);

                p.staDash.set_taborder("1");
                p.staDash.set_text("~");
                p.staDash.set_cssclass("sta_WF_Dash");
                p.staDash.move("calAplyStartDt:10","0","10","40",null,null);

                p.calAplyEndDt.set_taborder("2");
                p.calAplyEndDt.set_dateformat("yyyy-MM-dd");
                p.calAplyEndDt.move("staDash:10","0","145","40",null,null);
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
                p.calAplyStartDt.move("0","0","45%","40",null,null);

                p.calAplyEndDt.move("staDash:10","0","45%","40",null,null);
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
                p.panLabel.move("20","14","100%","108",null,null);

                p.pan03.set_taborder("2");
                p.pan03.set_type("horizontal");
                p.pan03.set_horizontalgap("10");
                p.pan03.set_fittocontents("height");
                p.pan03.set_flexgrow("1");
                p.pan03.set_verticalgap("4");
                p.pan03.set_minwidth("");
                p.pan03.move("20.00","67","480","45",null,null);

                p.edtAlyNo.set_taborder("18");
                p.edtAlyNo.move("913","33","100%","40",null,null);

                p.Static02.set_taborder("17");
                p.Static02.set_text("신청번호");
                p.Static02.set_flexshrink("0");
                p.Static02.set_cssclass("sta_WF_SchLabel");
                p.Static02.move("832","38","100","40",null,null);

                p.Combo02.set_taborder("9");
                p.Combo02.set_flexshrink("0");
                p.Combo02.set_innerdataset(divForm_form_divSch_form_Combo02_innerdataset);
                p.Combo02.set_codecolumn("codecolumn");
                p.Combo02.set_datacolumn("datacolumn");
                p.Combo02.set_text("신청일");
                p.Combo02.set_value("1");
                p.Combo02.set_index("0");
                p.Combo02.move("130.00","14","150","40",null,null);

                p.panClose.set_taborder("4");
                p.panClose.set_type("vertical");
                p.panClose.set_cssclass("pal_WF_SchLine");
                p.panClose.set_flexcrossaxisalign("end");
                p.panClose.move("30","151","100%","30",null,null);

                p.btnSchClose.set_taborder("3");
                p.btnSchClose.set_cssclass("btn_WF_SchClose");
                p.btnSchClose.move("1251","185","52","29",null,null);

                p.panSchBtn.set_taborder("5");
                p.panSchBtn.set_flexmainaxisalign("center");
                p.panSchBtn.move("632","235","100%","40",null,null);

                p.pan02.set_taborder("1");
                p.pan02.set_type("horizontal");
                p.pan02.set_horizontalgap("10");
                p.pan02.set_flexgrow("1");
                p.pan02.set_minwidth("");
                p.pan02.move("1694.00","398","480","45",null,null);

                p.btnSch.set_taborder("6");
                p.btnSch.set_text("조회하기");
                p.btnSch.set_cssclass("btn_WF_Search");
                p.btnSch.set_fittocontents("width");
                p.btnSch.move("570","192","112","40",null,null);

                p.divCal.set_taborder("8");
                p.divCal.set_text("Div00");
                p.divCal.set_formscrollbartype("none none");
                p.divCal.set_formscrolltype("none");
                p.divCal.move("116.00","0","320","40",null,null);

                p.edtAplCntNm.set_taborder("15");
                p.edtAplCntNm.move("228","80","100%","40",null,null);

                p.Static01.set_taborder("14");
                p.Static01.set_text("신청자");
                p.Static01.set_flexshrink("0");
                p.Static01.set_cssclass("sta_WF_SchLabel");
                p.Static01.move("71","91","100","40",null,null);

                p.pan02_00.set_taborder("10");
                p.pan02_00.set_type("horizontal");
                p.pan02_00.set_horizontalgap("10");
                p.pan02_00.set_flexgrow("1");
                p.pan02_00.set_minwidth("");
                p.pan02_00.move("1694.00","398","480","45",null,null);

                p.staLabel02_00_00.set_taborder("11");
                p.staLabel02_00_00.set_text("처리자");
                p.staLabel02_00_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel02_00_00.set_flexshrink("0");
                p.staLabel02_00_00.set_minwidth("");
                p.staLabel02_00_00.move("0","0","100","40",null,null);

                p.edtPrcrIdNm.set_taborder("12");
                p.edtPrcrIdNm.move("986","36","100%","40",null,null);

                p.pan02_00_00.set_taborder("13");
                p.pan02_00_00.set_type("horizontal");
                p.pan02_00_00.set_horizontalgap("10");
                p.pan02_00_00.set_flexgrow("1");
                p.pan02_00_00.set_minwidth("");
                p.pan02_00_00.move("1694.00","398","480","45",null,null);

                p.staLabel03.set_taborder("7");
                p.staLabel03.set_text("기준일자");
                p.staLabel03.set_cssclass("sta_WF_SchLabel");
                p.staLabel03.set_flexshrink("0");
                p.staLabel03.set_maxwidth("");
                p.staLabel03.move("0","0","100","40",null,null);

                p.Panel00.set_taborder("16");
                p.Panel00.set_horizontalgap("10");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_verticalgap("4");
                p.Panel00.set_fittocontents("height");
                p.Panel00.move("130.00","14","83.43%","40",null,null);
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
                p.panClose.move("30","151","100%","30",null,null);

                p.panLabel.set_horizontalgap("50");
                p.panLabel.set_verticalgap("8");
                p.panLabel.move("132","47","100%","288",null,null);

                p.pan03.set_type("horizontal");
                p.pan03.set_flexwrap("wrap");
                p.pan03.set_fittocontents("height");
                p.pan03.set_horizontalgap("8");
                p.pan03.move("1694.00","398","99.99963967469833%","80",null,null);

                p.pan02.set_horizontalgap("8");
                p.pan02.move("1694.00","398","100%","45",null,null);

                p.divCal.move(null,null,"100%",null,null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_spacing("14px 16px 12px 16px");
            obj.set_flexwrap("wrap");
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
                p.panGrdBtn.move(null,"0","550","34","0",null);

                p.grdList.set_taborder("0");
                p.grdList.set_binddataset("dsFcltOperMst");
                p.grdList.move("0","44","100.00%",null,null,"0");

                p.cmbGrdList.set_taborder("2");
                p.cmbGrdList.set_text("10");
                p.cmbGrdList.set_value("");
                p.cmbGrdList.set_index("-1");
                p.cmbGrdList.move("1230","0","80","34",null,null);

                p.staTotal00.set_taborder("1");
                p.staTotal00.set_text("목록수");
                p.staTotal00.set_cssclass("sta_WF_SchLabel");
                p.staTotal00.set_fittocontents("width");
                p.staTotal00.move("1165","0","65","34",null,null);

                p.btnGrdAdd.set_taborder("5");
                p.btnGrdAdd.set_cssclass("btn_WF_GrdSet");
                p.btnGrdAdd.set_visible("true");
                p.btnGrdAdd.set_fittocontents("width");
                p.btnGrdAdd.move("774.00","10","36","34",null,null);

                p.btnGrdDw.set_taborder("4");
                p.btnGrdDw.set_text("다운로드(엑셀)");
                p.btnGrdDw.set_cssclass("btn_WF_GrdDw");
                p.btnGrdDw.set_visible("true");
                p.btnGrdDw.set_fittocontents("width");
                p.btnGrdDw.move("774.00","10","124","34",null,null);

                p.staTotal.set_taborder("6");
                p.staTotal.set_text("총");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("width");
                p.staTotal.move("0","0","27","34",null,null);

                p.staTotal01.set_taborder("7");
                p.staTotal01.set_text("10");
                p.staTotal01.set_cssclass("sta_WF_Total");
                p.staTotal01.set_usedecorate("true");
                p.staTotal01.set_fittocontents("width");
                p.staTotal01.move("staTotal:0","0","43","34",null,null);

                p.staTotal02.set_taborder("8");
                p.staTotal02.set_text("건");
                p.staTotal02.set_usedecorate("true");
                p.staTotal02.move("staTotal01:0","0","30","34",null,null);
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
                p.grdList.set_autofittype("none");

                p.btnGrdAdd.set_visible("false");

                p.btnGrdDw.set_visible("false");
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divPage
            obj = new Layout("default","",0,0,this.divForm.form.divPage.form,function(p){});
            this.divForm.form.divPage.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divTitle.set_taborder("2");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.move("0","0","100%","44",null,null);

                p.divSch.set_taborder("0");
                p.divSch.set_text("Div00");
                p.divSch.set_cssclass("div_WF_SchBg");
                p.divSch.set_formscrollbartype("none none");
                p.divSch.set_formscrolltype("none");
                p.divSch.set_fittocontents("height");
                p.divSch.move("0","divTitle:20","1420","206",null,null);

                p.divGrd.set_taborder("1");
                p.divGrd.set_text("Div01");
                p.divGrd.set_fittocontents("height");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.move("0","divSch:20","100.00%","630",null,null);

                p.divPage.set_taborder("3");
                p.divPage.set_text("Div00");
                p.divPage.set_url("work::COM/util/paging/paging.xfdl");
                p.divPage.set_formscrollbartype("none none");
                p.divPage.set_formscrolltype("none");
                p.divPage.set_minheight("36");
                p.divPage.set_maxheight("");
                p.divPage.move("0","10","100%","36",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("20");
            obj.set_flexwrap("wrap");
            this.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form
            obj = new Layout("Layout0","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divGrd.move("0","183","100%","673",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_spacing("0px 20px 0px 20px");
            obj.set_flexmainaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexcrossaxisalign("start");
            obj.set_verticalgap("30");
            obj.set_flexwrap("wrap");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divGuide.form
            obj = new Layout("default","",0,0,this.divGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnSchClose.set_taborder("0");
                p.btnSchClose.set_cssclass("btn_WF_SchClose");
                p.btnSchClose.move("24.00","55","52","30",null,null);

                p.btnSchOpen.set_taborder("1");
                p.btnSchOpen.set_cssclass("btn_WF_SchOpen");
                p.btnSchOpen.move("100.00","55","52","30",null,null);
            	}
            );
            this.divGuide.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divGuide.form
            obj = new Layout("Layout0","",0,0,this.divGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divGuide.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Phone_screen",1480,700,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("서비스처리목록");

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_formscrollbartype("none none");
                p.divForm.set_fittocontents("height");
                p.divForm.set_maxwidth("");
                p.divForm.move("0","0",null,"998","60",null);

                p.divGuide.set_taborder("1");
                p.divGuide.set_text("div00");
                p.divGuide.set_visible("false");
                p.divGuide.set_cssclass("div_GD_Tip");
                p.divGuide.move("1590.00","135","450","385",null,null);

                p.StaSample.set_taborder("2");
                p.StaSample.set_text("서비스처리목록");
                p.StaSample.set_cssclass("sta_WF_MainTitle");
                p.StaSample.set_background("#ffffff");
                p.StaSample.move("0.00","0","289","44",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Phone_screen",390,600,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divForm.set_cssclass("div_WF_QuickFrBgM");
                p.divForm.move("0","0","100.00%","1089",null,null);
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
            this._addPreloadList("fdl","work::COM/util/paging/paging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("CST016M02_01.xfdl","xjs::TaskCom.xjs");
        this.registerScript("CST016M02_01.xfdl", function() {
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
        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;
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
        	this.cfnSetGrdPrztInfo();
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

        this.cfnClose = function() {};

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        /**************************************************************************
         * @name : fnSearch
         * @description : 목록조회
         ***************************************************************************/
        this.fnSearch = function(page)
        {
        	var curPageNo 		= this.gfnIsNull(page) ? 1  : page;
        	var curPageRecord 	= 10;

        	if(this.dsSearch.getRowCount() > 0){
        		this.dsSearch.clearData();
        	}

        	// 그리드 한 페이지에 게시되는 데이터건수
        	this.dsSearch.setColumn(0, "currentPageNo", page);

        	this.dsSearch.addRow();
        	this.dsSearch.setColumn(0, "strdGbn"			, this.divForm.form.divSch.form.Combo02.value);
        	this.dsSearch.setColumn(0, "aplyStartDt"		, this.divForm.form.divSch.form.divCal.form.calAplyStartDt.value);
        	this.dsSearch.setColumn(0, "aplyEndDt"  		, this.divForm.form.divSch.form.divCal.form.calAplyEndDt.value);
        	this.dsSearch.setColumn(0, "aplyNo"     		, this.divForm.form.divSch.form.edtAlyNo.value);
        	this.dsSearch.setColumn(0, "aplCntId"   		, "");
        	this.dsSearch.setColumn(0, "aplCntNm"   		, this.divForm.form.divSch.form.edtAplCntNm.value);
        	this.dsSearch.setColumn(0, "prcrId"     		, "");
        	this.dsSearch.setColumn(0, "prcrIdNm"   		, this.divForm.form.divSch.form.edtPrcrIdNm.value);

        	this.dsSearch.setColumn(0, "currentPageNo"   	, curPageNo);
        	this.dsSearch.setColumn(0, "recordCountPerPage" , curPageRecord);

        	var strSvcId    = "search";
        	var strSvcUrl   = "cmm/selectEdpSrvcPrcsListInq.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsFcltOperMst=dsFcltOperMst dsPage=dsPage";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0) {
        		return;
        	}
        	switch(svcID) {
        		case "search": //조회
        			// 조회 한 후 페이징을 셋팅 하기 위한 초기 함수
        			this.divForm.form.divPage.form.initPages(this.dsPage.getColumn(0, "currentPageNo"), this.dsPage.getColumn(0, "totalRecordCount"), this.dsPage.getColumn(0, "recordCountPerPage"), this.dsPage.getColumn(0, "pageSize"), "pagingCallback");
        			break;
        		default :
        			break;
        	}
        };

        //페이징 버튼 콜백함수
        this.pagingCallback = function(page) {
        	this.fnSearch(page);
        };

        /**************************************************************************
         * @name : fnPopupCallback
         * @description : 팝업에 관한 콜백 함수
         ***************************************************************************/
        this.fnPopupCallback = function(sPopupId, sRtn)
        {

        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	this.cfnSetGrdPrztInfo();
        	var vStartDt = this.gfnAddMonth(this.gfnGetDate(),-1);

        	this.divForm.form.divSch.form.divCal.form.calAplyStartDt.value = vStartDt.substr(0,6)+"01";
        	this.divForm.form.divSch.form.divCal.form.calAplyEndDt.value   = this.gfnGetDate();
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divForm_divSch_btnSchClose_onclick = function(obj,e)
        {

        };

        this.divForm_divGrd_Grid00_oncellclick = function(obj,e)
        {
        	var vPoIndex = this.divForm.form.divGrd.form.grdList.getBindCellIndex("body","a")
        	var vVie     = this.ds00.getColumn(e.row,"vie");
        	if(e.cell == vPoIndex)
        	{
        		if(vVie == "Tab"){
        			/*****  모발 팝업으로 페이지 오픈을 위한 코드 *****/
        			var sTitle = "전산실 작업신고서";
        			var objArg   = {};

        			var objOption = {
        				popuptype: "modal"	//modal,modaless
        				, autosize: true
        				, title: sTitle
        				, resize: true
        				, titlebar: true
        			};
        			var sPopupCallBack = "fnPopupCallback";

        			this.gfnOpenPopup("sampleWrite", "work::CST/CMM/CST016M00_00.xfdl", objArg, sPopupCallBack, objOption);
        		}else{
        			/*****  모발 팝업으로 페이지 오픈을 위한 코드 *****/
        			var sTitle = "전산실 작업신고서";
        			var objArg   = {};

        			var objOption = {
        				popuptype: "modal"	//modal,modaless
        				, autosize: true
        				, title: sTitle
        				, resize: true
        				, titlebar: true
        			};
        			var sPopupCallBack = "fnPopupCallback";

        			this.gfnOpenPopup("sampleWrite", "work::CST/CMM/CST016P05.xfdl", objArg, sPopupCallBack, objOption);
        		}
        	}
        };

        this.divForm_divGrd_btnGrdAdd_onclick = function(obj,e)
        {
        	var oArg    = { pvObjtId:"divForm.form.divGrd.form.grdList" };
        	var oOption = { title:"그리드 개인화", titlebar:true };
        	this.gfnOpenPopup("popupModalDefault", "work::CST/COM/setGridFormat.xfdl", oArg, "", oOption);
        };

        /**************************************************************************
         * @name : grdList_oncellclick
         * @description :
         ***************************************************************************/
        this.grdList_oncellclick = function(obj,e)
        {
        	// 신청번호 index값
        	if(e.col == 1) {
        		var sTitle = this.dsFcltOperMst.getColumn(e.row, "taskNm");
        		var objArg   = {
        			"aplyNo" : this.dsFcltOperMst.getColumn(e.row, "aplyNo"),
        			"jobCd"  : this.dsFcltOperMst.getColumn(e.row, "taskCd"),
        			"view"   : "popup"
        		};

        		var objOption = {
        			popuptype: "modal"	//modal,modaless
        			, width: 1440
        			, height: 900			//width,height 지정하지 않음 popup form size적용
        			//, autosize: true
        			, title: sTitle
        			, resize: true
        			, titlebar: true
        		};
        		var sPopupCallBack = "fnPopupCallback";
        		this.gfnOpenPopup("popupCmproIncmgJobWtnt", "work::CST/CMM/CST016M00_00.xfdl", objArg, sPopupCallBack, objOption);
        	}
        };

        this.divForm_divSch_btnSch_onclick = function(obj,e)
        {
        	this.fnSearch(1);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.divSch.form.btnSchClose.addEventHandler("onclick",this.divForm_divSch_btnSchClose_onclick,this);
            this.divForm.form.divSch.form.btnSch.addEventHandler("onclick",this.divForm_divSch_btnSch_onclick,this);
            this.divForm.form.divSch.form.staLabel02_00_00.addEventHandler("onclick",this.divForm_Div00_sta00_00_01_01_onclick,this);
            this.divForm.form.divGrd.form.grdList.addEventHandler("oncellclick",this.grdList_oncellclick,this);
            this.divForm.form.divGrd.form.btnGrdAdd.addEventHandler("onclick",this.divForm_divGrd_btnGrdAdd_onclick,this);
        };
        this.loadIncludeScript("CST016M02_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
