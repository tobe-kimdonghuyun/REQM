(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM024P063");
            this.set_titletext("계약정보 연결 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(1100,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"ctrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNm\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtType\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtTypeNm\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtYmd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtEndYmd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"currentPageNo\" type=\"STRING\" size=\"256\"/><Column id=\"recordCountPerPage\" type=\"STRING\" size=\"256\"/><Column id=\"sDate\" type=\"STRING\" size=\"256\"/><Column id=\"eDate\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtType\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"recordCountPerPage\">99999</Col><Col id=\"currentPageNo\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPage", this);
            obj._setContents("<ColumnInfo><Column id=\"totalRecordCount\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","0","0",null,null,"0","70",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("default default");
            obj.set_formscrolltype("both");
            obj.set_fittocontents("none");
            this.addChild(obj.name, obj);

            obj = new Div("divSch","0","0","100%","300",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel01_00","0","0","139","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("13");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtCtrtNo","841","24","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("5");
            obj.set_flexgrow("1");
            obj.set_displaynulltext("검색어 입력");
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
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel02\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel03\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel01","1694.00","398","400","45",null,null,null,null,"45",null,this.divForm.form.divSch.form);
            obj.set_taborder("2");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01\"/><PanelItem id=\"PanelItem02\" componentid=\"cmbCtrtType\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtCtrtNm","140","80","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("4");
            obj.set_flexgrow("1");
            obj.set_displaynulltext("검색어 입력");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01","0","0","139","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("1");
            obj.set_text("계약유형");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel00","20.00","14","400","45",null,null,null,null,"45",null,this.divForm.form.divSch.form);
            obj.set_taborder("3");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexwrap("nowrap");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"divCal\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel02","20.00","67","139","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("6");
            obj.set_text("계약명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel02","1694.00","398","400","45",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("7");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel02\"/><PanelItem id=\"PanelItem02\" componentid=\"edtCtrtNm\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel03","1694.00","398","400","45",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("8");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel01_00\"/><PanelItem id=\"PanelItem00\" componentid=\"edtCtrtNo\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panClose","30","151","100%","30",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("10");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_SchLine");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnSchClose\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnSchClose","1251","185","30","30",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_SchClose");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panSchBtn","632","235","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("11");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnSch\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnSch","570","192","112","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("12");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Search");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divCal","20.00","14","320","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("14");
            obj.set_text("Div00");
            obj.set_flexgrow("1");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel00","0","0","139","40",null,null,null,null,null,null,this.divForm.form.divSch.form.divCal.form);
            obj.set_taborder("3");
            obj.set_text("계약일(From ~ To)");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.form.divCal.addChild(obj.name, obj);

            obj = new Panel("Panel00","149","0","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form.divCal.form);
            obj.set_taborder("4");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"calSdate\"/><PanelItem id=\"PanelItem01\" componentid=\"staDash\"/><PanelItem id=\"PanelItem02\" componentid=\"calEdate\"/></Contents>");
            this.divForm.form.divSch.form.divCal.addChild(obj.name, obj);

            obj = new Calendar("calSdate","180.00","0","160","40",null,null,null,null,null,null,this.divForm.form.divSch.form.divCal.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.divSch.form.divCal.addChild(obj.name, obj);

            obj = new Static("staDash","160.00","0","10","40",null,null,null,null,null,null,this.divForm.form.divSch.form.divCal.form);
            obj.set_taborder("2");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_Dash");
            this.divForm.form.divSch.form.divCal.addChild(obj.name, obj);

            obj = new Calendar("calEdate","0","0","160","40",null,null,null,null,null,null,this.divForm.form.divSch.form.divCal.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.divSch.form.divCal.addChild(obj.name, obj);

            obj = new Combo("cmbCtrtType","788.00","145","20.42%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("15");
            obj.set_flexgrow("1");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divGrd","0","divSch:30","100.00%","700",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("Static00","110","18","100%","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("4");
            obj.set_text("계약 목록");
            obj.set_cssclass("sta_WF_Txt60018");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","0","100%","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("5");
            obj.set_fittocontents("width");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTotal\"/><PanelItem id=\"PanelItem01\" componentid=\"staTotal01\"/><PanelItem id=\"PanelItem02\" componentid=\"staTotal02\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("grdList","0","54","100.00%","400",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"200\"/><Column size=\"300\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"계약번호\"/><Cell col=\"2\" text=\"계약명\"/><Cell col=\"3\" text=\"계약유형명\"/><Cell col=\"4\" text=\"계약일\"/><Cell col=\"5\" text=\"계약시작일\"/><Cell col=\"6\" text=\"계약종료일\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:ctrtNo\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:ctrtNm\" displaytype=\"decoratetext\" tooltiptext=\"bind:ctrtNm\"/><Cell col=\"3\" text=\"bind:ctrtTypeNm\" displaytype=\"text\"/><Cell col=\"4\" text=\"bind:ctrtYmd\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" text=\"bind:ctrtBgngYmd\" displaytype=\"date\" cssclass=\"expr:state==&apos;0&apos;?&apos;CellTxtRed&apos;:&apos;CellTxtBlue&apos;\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" text=\"bind:ctrtEndYmd\" displaytype=\"date\" cssclass=\"CellEnd\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","27","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_text("총");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal01","staTotal:0","0","43","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_text("1000");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal02","staTotal01:0","0","30","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("panGrdBtn","0",null,null,"60","0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("center");
            obj.set_fittocontents("none");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnGrdRegi\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("divGuide","1210","135","450","385",null,null,null,null,null,null,this);
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

            obj = new Button("btnGrdRegi","584","825","68","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("연결");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form.divSch.form.divCal.form
            obj = new Layout("default","",0,0,this.divForm.form.divSch.form.divCal.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel00.set_taborder("3");
                p.staLabel00.set_text("계약일(From ~ To)");
                p.staLabel00.set_cssclass("sta_WF_SchLabel");
                p.staLabel00.set_flexshrink("0");
                p.staLabel00.move("0","0","139","40",null,null);

                p.Panel00.set_taborder("4");
                p.Panel00.set_horizontalgap("10");
                p.Panel00.set_fittocontents("height");
                p.Panel00.move("149","0","100%","40",null,null);

                p.calSdate.set_taborder("0");
                p.calSdate.set_dateformat("yyyy-MM-dd");
                p.calSdate.move("180.00","0","160","40",null,null);

                p.staDash.set_taborder("2");
                p.staDash.set_text("~");
                p.staDash.set_cssclass("sta_WF_Dash");
                p.staDash.move("160.00","0","10","40",null,null);

                p.calEdate.set_taborder("1");
                p.calEdate.set_dateformat("yyyy-MM-dd");
                p.calEdate.move("0","0","160","40",null,null);
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
                p.Panel00.move("149","0","330","40",null,null);

                p.staLabel00.set_text("계약일(From ~ To)");
                p.staLabel00.set_fittocontents("none");
                p.staLabel00.move("0","0","139","40",null,null);

                p.calEdate.move("0","0","150","40",null,null);

                p.calSdate.move("180.00","0","150","40",null,null);
            	}
            );
            obj.set_flexwrap("wrap");
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
                p.staLabel01_00.set_taborder("13");
                p.staLabel01_00.set_text("계약번호");
                p.staLabel01_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel01_00.set_flexshrink("0");
                p.staLabel01_00.set_maxwidth("");
                p.staLabel01_00.move("0","0","139","40",null,null);

                p.edtCtrtNo.set_taborder("5");
                p.edtCtrtNo.set_flexgrow("1");
                p.edtCtrtNo.set_displaynulltext("검색어 입력");
                p.edtCtrtNo.move("841","24","100%","40",null,null);

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
                p.Panel01.set_minheight("45");
                p.Panel01.set_maxheight("");
                p.Panel01.set_minwidth("");
                p.Panel01.move("1694.00","398","400","45",null,null);

                p.edtCtrtNm.set_taborder("4");
                p.edtCtrtNm.set_flexgrow("1");
                p.edtCtrtNm.set_displaynulltext("검색어 입력");
                p.edtCtrtNm.move("140","80","100%","40",null,null);

                p.staLabel01.set_taborder("1");
                p.staLabel01.set_text("계약유형");
                p.staLabel01.set_cssclass("sta_WF_SchLabel");
                p.staLabel01.set_flexshrink("0");
                p.staLabel01.set_maxwidth("");
                p.staLabel01.move("0","0","139","40",null,null);

                p.Panel00.set_taborder("3");
                p.Panel00.set_type("horizontal");
                p.Panel00.set_horizontalgap("10");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_flexwrap("nowrap");
                p.Panel00.set_flexgrow("1");
                p.Panel00.set_minheight("45");
                p.Panel00.set_maxheight("");
                p.Panel00.set_minwidth("");
                p.Panel00.move("20.00","14","400","45",null,null);

                p.staLabel02.set_taborder("6");
                p.staLabel02.set_text("계약명");
                p.staLabel02.set_cssclass("sta_WF_SchLabel");
                p.staLabel02.set_flexshrink("0");
                p.staLabel02.set_maxwidth("");
                p.staLabel02.move("20.00","67","139","40",null,null);

                p.Panel02.set_taborder("7");
                p.Panel02.set_type("horizontal");
                p.Panel02.set_horizontalgap("10");
                p.Panel02.set_flexgrow("1");
                p.Panel02.set_minwidth("");
                p.Panel02.move("1694.00","398","400","45",null,null);

                p.Panel03.set_taborder("8");
                p.Panel03.set_type("horizontal");
                p.Panel03.set_horizontalgap("10");
                p.Panel03.set_fittocontents("height");
                p.Panel03.set_flexgrow("1");
                p.Panel03.set_minwidth("");
                p.Panel03.move("1694.00","398","400","45",null,null);

                p.panClose.set_taborder("10");
                p.panClose.set_type("vertical");
                p.panClose.set_cssclass("pal_WF_SchLine");
                p.panClose.set_flexcrossaxisalign("end");
                p.panClose.move("30","151","100%","30",null,null);

                p.btnSchClose.set_taborder("9");
                p.btnSchClose.set_cssclass("btn_WF_SchClose");
                p.btnSchClose.move("1251","185","30","30",null,null);

                p.panSchBtn.set_taborder("11");
                p.panSchBtn.set_flexmainaxisalign("center");
                p.panSchBtn.move("632","235","100%","40",null,null);

                p.btnSch.set_taborder("12");
                p.btnSch.set_text("조회하기");
                p.btnSch.set_cssclass("btn_WF_Search");
                p.btnSch.move("570","192","112","40",null,null);

                p.divCal.set_taborder("14");
                p.divCal.set_text("Div00");
                p.divCal.set_flexgrow("1");
                p.divCal.set_formscrollbartype("none none");
                p.divCal.set_formscrolltype("none");
                p.divCal.move("20.00","14","320","40",null,null);

                p.cmbCtrtType.set_taborder("15");
                p.cmbCtrtType.set_flexgrow("1");
                p.cmbCtrtType.set_text("전체");
                p.cmbCtrtType.set_value("");
                p.cmbCtrtType.set_index("-1");
                p.cmbCtrtType.move("788.00","145","20.42%","40",null,null);
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
                p.panLabel.move("20","14","100%","249",null,null);

                p.divCal.set_fittocontents("height");
                p.divCal.set_flexgrow("0");
                p.divCal.move("20.00","14","100%","80",null,null);

                p.Panel00.move("20.00","14","100%","80",null,null);

                p.staLabel01_00.move("0","0","139","40",null,null);

                p.staLabel02.move("20.00","67","139","40",null,null);

                p.staLabel01.move("0","0","139","40",null,null);

                p.Panel02.move(null,null,"100%",null,null,null);

                p.Panel03.move(null,null,"100%",null,null,null);

                p.Panel01.move(null,null,"100%",null,null,null);
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
                p.Static00.set_taborder("4");
                p.Static00.set_text("계약 목록");
                p.Static00.set_cssclass("sta_WF_Txt60018");
                p.Static00.move("110","18","100%","34",null,null);

                p.Panel00.set_taborder("5");
                p.Panel00.set_fittocontents("width");
                p.Panel00.move("0","0","100%","34",null,null);

                p.grdList.set_taborder("0");
                p.grdList.set_binddataset("dsList");
                p.grdList.set_autofittype("col");
                p.grdList.move("0","54","100.00%","400",null,null);

                p.staTotal.set_taborder("3");
                p.staTotal.set_text("총");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("width");
                p.staTotal.move("0","0","27","34",null,null);

                p.staTotal01.set_taborder("2");
                p.staTotal01.set_text("1000");
                p.staTotal01.set_cssclass("sta_WF_Total");
                p.staTotal01.set_usedecorate("true");
                p.staTotal01.set_fittocontents("width");
                p.staTotal01.move("staTotal:0","0","43","34",null,null);

                p.staTotal02.set_taborder("1");
                p.staTotal02.set_text("건");
                p.staTotal02.set_usedecorate("true");
                p.staTotal02.move("staTotal01:0","0","30","34",null,null);
            	}
            );
            obj.set_verticalgap("10");
            obj.set_type("vertical");
            this.divForm.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divGrd.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdList.set_autofittype("none");
            	}
            );
            obj.set_verticalgap("8");
            obj.set_type("vertical");
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
                p.divSch.move("0","0","100%","300",null,null);

                p.divGrd.set_taborder("1");
                p.divGrd.set_text("Div01");
                p.divGrd.set_fittocontents("height");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.move("0","divSch:30","100.00%","700",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("20");
            obj.set_spacing("10px 20px 0px 20px");
            this.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form
            obj = new Layout("Layout0","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divSch.move("0","0","100.00%","347",null,null);

                p.divGrd.move("0","divSch:30","100%","558",null,null);
            	}
            );
            obj.set_spacing("10px 20px 0px 20px");
            obj.set_type("vertical");
            obj.set_verticalgap("20");
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
            obj = new Layout("default","Desktop_screen",1100,700,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("계약정보 연결 팝업");

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_formscrollbartype("default default");
                p.divForm.set_formscrolltype("both");
                p.divForm.set_fittocontents("none");
                p.divForm.set_maxwidth("");
                p.divForm.move("0","0",null,null,"0","70");

                p.panGrdBtn.set_taborder("3");
                p.panGrdBtn.set_flexcrossaxisalign("center");
                p.panGrdBtn.set_flexcrossaxiswrapalign("start");
                p.panGrdBtn.set_flexmainaxisalign("center");
                p.panGrdBtn.set_fittocontents("none");
                p.panGrdBtn.set_horizontalgap("10");
                p.panGrdBtn.set_spacing("0px 10px");
                p.panGrdBtn.move("0",null,null,"60","0","0");

                p.divGuide.set_taborder("1");
                p.divGuide.set_text("div00");
                p.divGuide.set_visible("false");
                p.divGuide.set_cssclass("div_GD_Tip");
                p.divGuide.move("1210","135","450","385",null,null);

                p.btnGrdRegi.set_taborder("2");
                p.btnGrdRegi.set_text("연결");
                p.btnGrdRegi.set_cssclass("btn_WF_Yes");
                p.btnGrdRegi.set_visible("true");
                p.btnGrdRegi.move("584","825","68","40",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Phone_screen",480,700,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divForm.set_fittocontents("none");
                p.divForm.set_formscrollbartype("default default");
                p.divForm.set_formscrolltype("both");
                p.divForm.move("0","0","100.00%",null,null,"70");


                p.divGuide.move("500","135","450","385",null,null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.divSch.form.divCal.form.calSdate","value","dsSearch","sDate");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.divSch.form.divCal.form.calEdate","value","dsSearch","eDate");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.divSch.form.cmbCtrtType","value","dsSearch","ctrtType");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.divSch.form.edtCtrtNm","value","dsSearch","ctrtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.divSch.form.edtCtrtNo","value","dsSearch","ctrtNo");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("COM024P063.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	COM024P063.xfdl
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
        	this.fnInit();
        	this.cfnSearch(1);
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	this.getSearchTransaction();
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
        this.getSearchTransaction = function()
        {
        	var strSvcId    = "search";
        	var strSvcUrl   = "sysMng/ctrtInfoLnkgListInq.do";
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
        			//this.divForm.form.divGrd.form.divPage.form.initPages(this.dsPage.getColumn(0, "currentPageNo"), this.dsPage.getColumn(0, "totalRecordCount"), this.dsPage.getColumn(0, "recordCountPerPage"), this.dsPage.getColumn(0, "pageSize"), "cfnSearch");
        			var totCnt = this.dsList.getRowCount();
        			this.divForm.form.divGrd.form.staTotal01.text = totCnt;
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
        this.divForm_divSch_btnSch_onclick = function(obj,e)
        {
        	this.cfnSearch(1);
        };

        this.divForm_divGrd_btnGrdRegi_onclick = function(obj,e)
        {
        	if(this.dsList.getRowCount() == 0) {
        		return;
        	}

        	var arr = this.gfnDsToJson(this.dsList);
        	this.close(JSON.stringify(arr[this.dsList.rowposition]));
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.divSch.form.staLabel02.addEventHandler("onclick",this.divForm_Div00_sta00_00_01_01_onclick,this);
            this.divForm.form.divSch.form.btnSchClose.addEventHandler("onclick",this.divForm_divSch_btnSchClose_onclick,this);
            this.divForm.form.divSch.form.btnSch.addEventHandler("onclick",this.divForm_divSch_btnSch_onclick,this);
            this.divForm.form.divSch.form.cmbCtrtType.addEventHandler("onitemchanged",this.divForm_divSch_Combo01_onitemchanged,this);
            this.btnGrdRegi.addEventHandler("onclick",this.divForm_divGrd_btnGrdRegi_onclick,this);
        };
        this.loadIncludeScript("COM024P063.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
