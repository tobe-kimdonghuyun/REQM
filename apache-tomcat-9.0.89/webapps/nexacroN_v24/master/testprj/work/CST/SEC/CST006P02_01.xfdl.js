(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST006P02");
            this.set_titletext("작업신고서 불러오기(팝업)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"aplyStDt\" type=\"STRING\" size=\"256\"/><Column id=\"aplyEdDt\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"pstnInfoRnb\" type=\"STRING\" size=\"256\"/><Column id=\"pbcprtPrcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnJobNm\" type=\"STRING\" size=\"256\"/><Column id=\"currentPageNo\" type=\"STRING\" size=\"256\"/><Column id=\"recordCountPerPage\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"jobCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobNm\" type=\"STRING\" size=\"256\"/><Column id=\"endCd\" type=\"STRING\" size=\"256\"/><Column id=\"endNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeNm\" type=\"STRING\" size=\"256\"/><Column id=\"bldgSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"bldgSeNm\" type=\"STRING\" size=\"256\"/><Column id=\"pstnInfoRnb\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnJobNm\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntCoNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntId\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"pbcprtPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"pbcprtPrcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"pbcprtPrcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrGroupNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplyDt\" type=\"STRING\" size=\"256\"/><Column id=\"endDt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPage", this);
            obj._setContents("<ColumnInfo><Column id=\"totalRecordCount\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsComcodeList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("divSch","20","10","100%","292",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel00","69","25","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("14");
            obj.set_text("기준일자");
            obj.set_cssclass("sta_WF_SchLabel_E");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01_00","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("12");
            obj.set_text("위치정보\r\n(룸번호)");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtPstnInfoRnb","841","24","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("13");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panLabel","20","14","100%","194",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("0");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("50");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel02\"/><PanelItem id=\"PanelItem05\" componentid=\"Panel04\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel03\"/><PanelItem id=\"PanelItem07\" componentid=\"Panel05_00\"/><PanelItem id=\"PanelItem06\" componentid=\"Panel05\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel01","1694.00","398","300","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("2");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01\"/><PanelItem id=\"PanelItem02\" componentid=\"divEdtPop\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtAplyNo","140","80","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("11");
            obj.set_flexgrow("1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("1");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel00","20.00","14","300","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("3");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexwrap("nowrap");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem02\" componentid=\"divCal\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel02","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("4");
            obj.set_text("신청번호");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel02","1694.00","398","300","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("5");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel02\"/><PanelItem id=\"PanelItem02\" componentid=\"edtAplyNo\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("Static01","538","123","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("19");
            obj.set_text("제목(작업명)");
            obj.set_flexshrink("0");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("Static00","433","81","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("17");
            obj.set_text("신청구분");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel03","1694.00","398","300","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("6");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel01_00\"/><PanelItem id=\"PanelItem00\" componentid=\"edtPstnInfoRnb\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel04","471","69","300","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("16");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/><PanelItem id=\"PanelItem02\" componentid=\"cboAplySeCd\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panClose","30","151","100%","30",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_SchLine");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnSchClose\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel05","230","110","300","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("18");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtCstrnJobNm\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnSchClose","1251","185","52","29",null,null,null,null,null,null,this.divForm.form.divSch.form);
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
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divCal","20.00","14","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("15");
            obj.set_text("Div00");
            obj.set_flexgrow("1");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Calendar("calAplyStDt","180.00","0","145","40",null,null,null,null,null,null,this.divForm.form.divSch.form.divCal.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.divSch.form.divCal.addChild(obj.name, obj);

            obj = new Static("staDash","160.00","0","10","40",null,null,null,null,null,null,this.divForm.form.divSch.form.divCal.form);
            obj.set_taborder("1");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_Dash");
            this.divForm.form.divSch.form.divCal.addChild(obj.name, obj);

            obj = new Calendar("calAplyEdDt","0","0","145","40",null,null,null,null,null,null,this.divForm.form.divSch.form.divCal.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.divSch.form.divCal.addChild(obj.name, obj);

            obj = new Edit("edtCstrnJobNm","672","132","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("20");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("Static01_00","538","123","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("21");
            obj.set_text("처리자");
            obj.set_flexshrink("0");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtPbcprtPrcrNm","672","132","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("22");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel05_00","230","110","300","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("23");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtPbcprtPrcrNm\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cboAplySeCd","666","23","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("24");
            obj.set_innerdataset("dsComcodeList");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divEdtPop","43.00","393","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("25");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtAplcntInstCd","0","0",null,"40","0",null,null,null,null,null,this.divForm.form.divSch.form.divEdtPop.form);
            obj.set_taborder("0");
            this.divForm.form.divSch.form.divEdtPop.addChild(obj.name, obj);

            obj = new Button("btnPop","edtAplcntInstCd:-40","0","40","40",null,null,null,null,null,null,this.divForm.form.divSch.form.divEdtPop.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            this.divForm.form.divSch.form.divEdtPop.addChild(obj.name, obj);

            obj = new Div("divGrd","0","30","100.00%","460",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_formscrollbartype("none none");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divPage","0",null,"100.00%","36",null,"0",null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_url("work::COM/util/paging/paging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal00","94.00","0","65","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_text("목록수");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn",null,"0","200","34","0",null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("4");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_fittocontents("height");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staTotal00\"/><PanelItem id=\"PanelItem02\" componentid=\"cmbGrdList\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","44","100.00%",null,null,"46",null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"250\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"150\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"신청번호\"/><Cell col=\"2\" text=\"단계\"/><Cell col=\"3\" text=\"종료구분\"/><Cell col=\"4\" text=\"신청구분\"/><Cell col=\"5\" text=\"제목(작업명)\"/><Cell col=\"6\" text=\"위치정보(룸번호)\"/><Cell col=\"7\" text=\"회사\"/><Cell col=\"8\" text=\"신청자\"/><Cell col=\"9\" text=\"신청일자\"/><Cell col=\"10\" text=\"처리자\"/><Cell col=\"11\" text=\"처리그룹\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"right\"/><Cell col=\"1\" text=\"bind:aplyNo\" cursor=\"pointer\" textAlign=\"center\" textDecoration=\"underline\"/><Cell col=\"2\" text=\"bind:jobNm\"/><Cell col=\"3\" text=\"bind:endNm\"/><Cell col=\"4\" text=\"bind:aplySeNm\"/><Cell col=\"5\" text=\"bind:bldgSeNm\"/><Cell col=\"6\" text=\"bind:pstnInfoRnb\"/><Cell col=\"7\" text=\"bind:aplcntCoNm\"/><Cell col=\"8\" text=\"bind:aplcntNm\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:aplyDt\" textAlign=\"center\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"10\" text=\"bind:pbcprtPrcrNm\" textAlign=\"center\"/><Cell col=\"11\" cssclass=\"CellEnd\" text=\"bind:prcrGroupNm\"/></Band></Format></Formats>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","27","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("7");
            obj.set_text("총");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal01","staTotal:0","0","43","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("6");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal02","staTotal01:0","0","30","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("5");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Combo("cmbGrdList","169.00","0","80","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_divGrd_form_cmbGrdList_innerdataset = new nexacro.NormalDataset("divForm_form_divGrd_form_cmbGrdList_innerdataset", obj);
            divForm_form_divGrd_form_cmbGrdList_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_divGrd_form_cmbGrdList_innerdataset);
            obj.set_text("10");
            obj.set_value("10");
            obj.set_index("0");
            this.divForm.form.divGrd.addChild(obj.name, obj);

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
            // Layout Functions
            //-- Default Layout : this.divForm.form.divSch.form.divCal.form
            obj = new Layout("default","",0,0,this.divForm.form.divSch.form.divCal.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.calAplyStDt.set_taborder("0");
                p.calAplyStDt.set_dateformat("yyyy-MM-dd");
                p.calAplyStDt.move("180.00","0","145","40",null,null);

                p.staDash.set_taborder("1");
                p.staDash.set_text("~");
                p.staDash.set_cssclass("sta_WF_Dash");
                p.staDash.move("160.00","0","10","40",null,null);

                p.calAplyEdDt.set_taborder("2");
                p.calAplyEdDt.set_dateformat("yyyy-MM-dd");
                p.calAplyEdDt.move("0","0","145","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            this.divForm.form.divSch.form.divCal.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divSch.form.divCal.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divSch.form.divCal.form,
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
            //-- Default Layout : this.divForm.form.divSch.form.divEdtPop.form
            obj = new Layout("default","",0,0,this.divForm.form.divSch.form.divEdtPop.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.edtAplcntInstCd.set_taborder("0");
                p.edtAplcntInstCd.move("0","0",null,"40","0",null);

                p.btnPop.set_taborder("1");
                p.btnPop.set_cssclass("btn_WF_EdtSch");
                p.btnPop.move("edtAplcntInstCd:-40","0","40","40",null,null);
            	}
            );
            this.divForm.form.divSch.form.divEdtPop.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divSch.form.divEdtPop.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divSch.form.divEdtPop.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.divSch.form.divEdtPop.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divSch.form
            obj = new Layout("default","",0,0,this.divForm.form.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel00.set_taborder("14");
                p.staLabel00.set_text("기준일자");
                p.staLabel00.set_cssclass("sta_WF_SchLabel_E");
                p.staLabel00.set_flexshrink("0");
                p.staLabel00.move("69","25","100","40",null,null);

                p.staLabel01_00.set_taborder("12");
                p.staLabel01_00.set_text("위치정보\r\n(룸번호)");
                p.staLabel01_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel01_00.set_flexshrink("0");
                p.staLabel01_00.set_maxwidth("");
                p.staLabel01_00.move("0","0","100","40",null,null);

                p.edtPstnInfoRnb.set_taborder("13");
                p.edtPstnInfoRnb.move("841","24","100%","40",null,null);

                p.panLabel.set_taborder("0");
                p.panLabel.set_verticalgap("8");
                p.panLabel.set_flexwrap("wrap");
                p.panLabel.set_spacing("0px 0px 10px 0px");
                p.panLabel.set_type("horizontal");
                p.panLabel.set_flexcrossaxisalign("start");
                p.panLabel.set_horizontalgap("50");
                p.panLabel.set_fittocontents("height");
                p.panLabel.set_maxheight("");
                p.panLabel.move("20","14","100%","194",null,null);

                p.Panel01.set_taborder("2");
                p.Panel01.set_type("horizontal");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.set_flexgrow("1");
                p.Panel01.set_maxheight("");
                p.Panel01.set_minwidth("");
                p.Panel01.move("1694.00","398","300","40",null,null);

                p.edtAplyNo.set_taborder("11");
                p.edtAplyNo.set_flexgrow("1");
                p.edtAplyNo.move("140","80","100%","40",null,null);

                p.staLabel01.set_taborder("1");
                p.staLabel01.set_text("회사명");
                p.staLabel01.set_cssclass("sta_WF_SchLabel");
                p.staLabel01.set_flexshrink("0");
                p.staLabel01.set_maxwidth("");
                p.staLabel01.move("0","0","100","40",null,null);

                p.Panel00.set_taborder("3");
                p.Panel00.set_type("horizontal");
                p.Panel00.set_horizontalgap("10");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_flexwrap("nowrap");
                p.Panel00.set_flexgrow("1");
                p.Panel00.set_maxheight("");
                p.Panel00.set_minwidth("");
                p.Panel00.move("20.00","14","300","40",null,null);

                p.staLabel02.set_taborder("4");
                p.staLabel02.set_text("신청번호");
                p.staLabel02.set_cssclass("sta_WF_SchLabel");
                p.staLabel02.set_flexshrink("0");
                p.staLabel02.set_maxwidth("");
                p.staLabel02.move("0","0","100","40",null,null);

                p.Panel02.set_taborder("5");
                p.Panel02.set_type("horizontal");
                p.Panel02.set_horizontalgap("10");
                p.Panel02.set_flexgrow("1");
                p.Panel02.set_minwidth("");
                p.Panel02.move("1694.00","398","300","40",null,null);

                p.Static01.set_taborder("19");
                p.Static01.set_text("제목(작업명)");
                p.Static01.set_flexshrink("0");
                p.Static01.set_cssclass("sta_WF_SchLabel");
                p.Static01.move("538","123","100","40",null,null);

                p.Static00.set_taborder("17");
                p.Static00.set_text("신청구분");
                p.Static00.set_cssclass("sta_WF_SchLabel");
                p.Static00.set_flexshrink("0");
                p.Static00.move("433","81","100","40",null,null);

                p.Panel03.set_taborder("6");
                p.Panel03.set_type("horizontal");
                p.Panel03.set_horizontalgap("10");
                p.Panel03.set_fittocontents("height");
                p.Panel03.set_flexgrow("1");
                p.Panel03.set_minwidth("");
                p.Panel03.move("1694.00","398","300","40",null,null);

                p.Panel04.set_taborder("16");
                p.Panel04.set_flexgrow("1");
                p.Panel04.set_horizontalgap("10");
                p.Panel04.move("471","69","300","40",null,null);

                p.panClose.set_taborder("8");
                p.panClose.set_type("vertical");
                p.panClose.set_cssclass("pal_WF_SchLine");
                p.panClose.set_flexcrossaxisalign("end");
                p.panClose.move("30","151","100%","30",null,null);

                p.Panel05.set_taborder("18");
                p.Panel05.set_flexgrow("1");
                p.Panel05.set_horizontalgap("10");
                p.Panel05.move("230","110","300","40",null,null);

                p.btnSchClose.set_taborder("7");
                p.btnSchClose.set_cssclass("btn_WF_SchClose");
                p.btnSchClose.move("1251","185","52","29",null,null);

                p.panSchBtn.set_taborder("9");
                p.panSchBtn.set_flexmainaxisalign("center");
                p.panSchBtn.move("632","235","100%","40",null,null);

                p.btnSch.set_taborder("10");
                p.btnSch.set_text("조회하기");
                p.btnSch.set_cssclass("btn_WF_Search");
                p.btnSch.move("570","192","112","40",null,null);

                p.divCal.set_taborder("15");
                p.divCal.set_text("Div00");
                p.divCal.set_flexgrow("1");
                p.divCal.set_formscrollbartype("none none");
                p.divCal.set_formscrolltype("none");
                p.divCal.move("20.00","14","100%","40",null,null);

                p.edtCstrnJobNm.set_taborder("20");
                p.edtCstrnJobNm.move("672","132","100%","40",null,null);

                p.Static01_00.set_taborder("21");
                p.Static01_00.set_text("처리자");
                p.Static01_00.set_flexshrink("0");
                p.Static01_00.set_cssclass("sta_WF_SchLabel");
                p.Static01_00.move("538","123","100","40",null,null);

                p.edtPbcprtPrcrNm.set_taborder("22");
                p.edtPbcprtPrcrNm.move("672","132","100%","40",null,null);

                p.Panel05_00.set_taborder("23");
                p.Panel05_00.set_flexgrow("1");
                p.Panel05_00.set_horizontalgap("10");
                p.Panel05_00.move("230","110","300","40",null,null);

                p.cboAplySeCd.set_taborder("24");
                p.cboAplySeCd.set_innerdataset("dsComcodeList");
                p.cboAplySeCd.set_codecolumn("cdId");
                p.cboAplySeCd.set_datacolumn("cdNm");
                p.cboAplySeCd.set_value("");
                p.cboAplySeCd.set_index("-1");
                p.cboAplySeCd.move("666","23","100%","40",null,null);

                p.divEdtPop.set_taborder("25");
                p.divEdtPop.set_text("Div00");
                p.divEdtPop.set_formscrollbartype("none none");
                p.divEdtPop.set_formscrolltype("none");
                p.divEdtPop.set_flexgrow("1");
                p.divEdtPop.move("43.00","393","100%","40",null,null);
            	}
            );
            obj.set_spacing("14px 20px 12px 20px");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            this.divForm.form.divSch.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divSch.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divSch.form,
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
                p.divPage.set_taborder("0");
                p.divPage.set_text("Div00");
                p.divPage.set_url("work::COM/util/paging/paging.xfdl");
                p.divPage.set_formscrollbartype("none none");
                p.divPage.set_formscrolltype("none");
                p.divPage.set_maxheight("");
                p.divPage.move("0",null,"100.00%","36",null,"0");

                p.staTotal00.set_taborder("2");
                p.staTotal00.set_text("목록수");
                p.staTotal00.set_cssclass("sta_WF_SchLabel");
                p.staTotal00.set_fittocontents("width");
                p.staTotal00.move("94.00","0","65","34",null,null);

                p.PanelGrdBtn.set_taborder("4");
                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_fittocontents("height");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.set_flexwrap("wrap");
                p.PanelGrdBtn.set_verticalgap("10");
                p.PanelGrdBtn.move(null,"0","200","34","0",null);

                p.Grid00.set_taborder("1");
                p.Grid00.set_binddataset("dsList");
                p.Grid00.move("0","44","100.00%",null,null,"46");

                p.staTotal.set_taborder("7");
                p.staTotal.set_text("총");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("width");
                p.staTotal.move("0","0","27","34",null,null);

                p.staTotal01.set_taborder("6");
                p.staTotal01.set_text("0");
                p.staTotal01.set_cssclass("sta_WF_Total");
                p.staTotal01.set_usedecorate("true");
                p.staTotal01.set_fittocontents("width");
                p.staTotal01.move("staTotal:0","0","43","34",null,null);

                p.staTotal02.set_taborder("5");
                p.staTotal02.set_text("건");
                p.staTotal02.set_usedecorate("true");
                p.staTotal02.move("staTotal01:0","0","30","34",null,null);

                p.cmbGrdList.set_taborder("3");
                p.cmbGrdList.set_innerdataset(divForm_form_divGrd_form_cmbGrdList_innerdataset);
                p.cmbGrdList.set_codecolumn("codecolumn");
                p.cmbGrdList.set_datacolumn("datacolumn");
                p.cmbGrdList.set_text("10");
                p.cmbGrdList.set_value("10");
                p.cmbGrdList.set_index("0");
                p.cmbGrdList.move("169.00","0","80","34",null,null);
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
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,function(p){});
            obj.set_verticalgap("20");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            this.divForm.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGuide.form
            obj = new Layout("default","",0,0,this.divGuide.form,function(p){});
            this.divGuide.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Phone_screen",1000,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.divSch.form.cboAplySeCd","value","dsSearch","aplySeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.divSch.form.divEdtPop.form.edtAplcntInstCd","value","dsSearch","aplcntInstNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.divSch.form.divCal.form.calAplyStDt","value","dsSearch","aplyStDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.divSch.form.divCal.form.calAplyEdDt","value","dsSearch","aplyEdDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.divSch.form.edtAplyNo","value","dsSearch","aplyNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.divSch.form.edtPstnInfoRnb","value","dsSearch","pstnInfoRnb");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.divSch.form.edtPbcprtPrcrNm","value","dsSearch","pbcprtPrcrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divForm.form.divSch.form.edtCstrnJobNm","value","dsSearch","cstrnJobNm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","work::COM/util/paging/paging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("CST006P02_01.xfdl","xjs::TaskCom.xjs");
        this.registerScript("CST006P02_01.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	CST006P02.xfdl
        *  @Creator 	ELUON INS
        *  @CreateDate 	2024/08/08
        *  @Desction
        *  @Author
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/11/15			박상희					최초생성
        *******************************************************************************
        */

        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;
        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fvCurDate = this.gfnGetDate();
        this.objApp = nexacro.getApplication();
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수
        	//검색영역
        	this.divForm.form.divSch.set_width("100%");
        	this.divForm.form.divSch.fittocontents = "height";

        	//최초 진입 함수
        	this.fnInit();
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
        this.fnSearch = function (page) {

        	//페이징처리 세팅
        	var recordCountPerPage = this.divForm.form.divGrd.form.cmbGrdList.value;
        	this.dsSearch.setColumn(0, "currentPageNo", page);
        	this.dsSearch.setColumn(0, "recordCountPerPage", recordCountPerPage);

        	var strSvcId    = "search";
        	var strSvcUrl   = "cst/sec/selectPrtcZoneAplcfmList.do";
        	var inData      = "dsIn=dsSearch";
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
        this.fnCallback = function(svcId, errCd, errMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errCd != 0) { return; }

        	switch(svcId) {
        		case "commonCodeSearch" :
        			break;

        		case "search" :
        			this.divForm.form.divGrd.form.staTotal01.text = this.dsPage.getColumn(0, "totalRecordCount");
        			//조회 한 후 페이징을 셋팅 하기 위한 초기 함수
        			//현재 페이지, 전체 Row 갯수, 페이지별 Row 갯수, 한번에 보여질 페이지 갯수, 페이지callbackFnc 문자형태
        			this.divForm.form.divGrd.form.divPage.form.initPages(this.dsSearch.getColumn(0, "currentPageNo"), this.dsPage.getColumn(0, "totalRecordCount"), this.dsPage.getColumn(0, "recordCountPerPage"), this.dsPage.getColumn(0, "pageSize"), "pagingCallback");
        			//페이징 상태 갱신(단, 목록수 변경 시 페이징 변경에 대해서는 공통에서 visible 설정을 반영해야 함)
        			this.divForm.form.divGrd.form.divPage.form.resetScroll();
        			this.divForm.form.divGrd.form.resetScroll();
        			break;

        		default:
        			break;
        	}

        };

        //페이징 callback
        this.pagingCallback = function(page) {
        	this.fnSearch(page);
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function () {

        	//공통코드 함수 호출(연결Dataset : 공통코드명, A-전체 S-선택)
        	this.cfnComCdLoad({ id:"commonCodeSearch", cbf:"fnCallBack", dsComcodeList:"TSP:A" });

        	//서비스구분 세팅
        	this.dsSearch.setColumn(0, "aplySeCd", "");

        	//신청일자 세팅
        	const date = new Date();
        	date.setDate(date.getDate() - 7);

        	const sYear = date.getFullYear().toString();
        	const sMonth = ((date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)).toString();
        	const sDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate().toString();
        	this.dsSearch.setColumn(0, "aplyStDt", sYear + sMonth + sDate);
        	this.dsSearch.setColumn(0, "aplyEdDt", this.fvCurDate);

        	//개인화정보
        	this.cfnSetGrdPrztInfo();
        };

        //메인화면 전달용 리턴정보 생성
        this.fnMakeJsonData = function () {

        	let rtnValue = {};

        	for (let i=0; i<this.dsList.getColCount(); i++) {
        		rtnValue[this.dsList.getColumnInfo(i).id] = new String(this.dsList.getColumn(this.dsList.rowposition, this.dsList.getColumnInfo(i).id));
        	}

        	this.gfnClosePopup(JSON.stringify(rtnValue));

        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        //회사명 조회 버튼
        this.divForm_divSch_divEdtPop_btnPop_onclick = function(obj,e)
        {
        	const sTitle = "회사 목록";
        	const objOption = {
        		  popuptype: "modal"	//modal,modaless
        		//width, height 지정하지 않으면 popup form size적용
        		, autosize: false
        		, title: sTitle
        		, resize: false
        		, titlebar: true
        	};

        	this.gfnOpenPopup("aplyCoNmPop", "work::COM/crtr/COM100P01.xfdl", {}, (sPopId, sJsonStr) => {

        		if (this.gfnIsNull(sJsonStr)) return false;
        		const oJson = JSON.parse(sJsonStr);

        		this.dsSearch.setColumn(0, "aplcntInstCd", oJson.coId);
        		this.dsSearch.setColumn(0, "aplcntInstNm", oJson.coNm);

        	}, objOption);
        };

        //조회버튼 클릭
        this.divForm_divSch_btnSch_onclick = function(obj,e)
        {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "aplyStDt"))) {
        		this.divForm.form.divSch.form.divCal.form.calAplyStDt.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["기준시작일"]); // {0} 을/를 입력해 주세요.
        		return false;
        	}

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "aplyEdDt"))) {
        		this.divForm.form.divSch.form.divCal.form.calAplyEdDt.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["기준종료일"]); // {0} 을/를 입력해 주세요.
        		return false;
        	}

        	if (this.dsSearch.getColumn(0, "aplyStDt") > this.dsSearch.getColumn(0, "aplyEdDt")) {
        		this.divForm.form.divSch.form.divCal.form.calAplyStDt.setFocus();
        		this.gfnAlertMsg("msg", "MSG_012", ["기준"]); // {0} 시작일자가 종료일자보다 큽니다.
        		return false;
        	}

        	this.fnSearch(1);
        };

        // 조회조건 Enter시
        this.Edit_onkeydown = function(obj,e)
        {
            if(e.keycode == 13) {
        		this.divForm_divSch_btnSch_onclick();
        	}
        };

        //목록수 콤보 변경 시
        this.divForm_divGrd_cmbGrdList_onitemchanged = function(obj,e)
        {
        	this.fnSearch(1);
        };

        //셀 클릭 시
        this.divForm_divGrd_Grid00_oncellclick = function(obj,e)
        {
        	//팝업일 경우 실행
        	this.fvIsPopup = nexacro.getPopupFrames(this.getOwnerFrame()).length > 0;
        	if (!this.fvIsPopup) return;

        	//셀 영역 외 클릭 시
        	if(e.row == -1) {
        		return;
        	}

        	//신청번호 클릭 시 해당정보 전달
        	if(e.cell == 1) {

        		//메인페이지 전달 정보 생성
        		this.fnMakeJsonData();
        	}
        };

        //셀 더블 클릭 시
        this.divForm_divGrd_Grid00_oncelldblclick = function(obj,e)
        {
        	//팝업일 경우 실행
        	this.fvIsPopup = nexacro.getPopupFrames(this.getOwnerFrame()).length > 0;
        	if (!this.fvIsPopup) return;

        	//셀 영역 외 클릭 시
        	if(e.row == -1) {
        		return;
        	}

        	//메인페이지 전달 정보 생성
        	this.fnMakeJsonData();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.divSch.form.edtPstnInfoRnb.addEventHandler("onkeydown",this.Edit_onkeydown,this);
            this.divForm.form.divSch.form.edtAplyNo.addEventHandler("onkeydown",this.Edit_onkeydown,this);
            this.divForm.form.divSch.form.staLabel02.addEventHandler("onclick",this.divForm_Div00_sta00_00_01_01_onclick,this);
            this.divForm.form.divSch.form.btnSchClose.addEventHandler("onclick",this.divForm_divSch_btnSchClose_onclick,this);
            this.divForm.form.divSch.form.btnSch.addEventHandler("onclick",this.divForm_divSch_btnSch_onclick,this);
            this.divForm.form.divSch.form.divCal.form.calAplyStDt.addEventHandler("onkeydown",this.Edit_onkeydown,this);
            this.divForm.form.divSch.form.divCal.form.calAplyEdDt.addEventHandler("onkeydown",this.Edit_onkeydown,this);
            this.divForm.form.divSch.form.edtCstrnJobNm.addEventHandler("onkeydown",this.Edit_onkeydown,this);
            this.divForm.form.divSch.form.edtPbcprtPrcrNm.addEventHandler("onkeydown",this.Edit_onkeydown,this);
            this.divForm.form.divSch.form.cboAplySeCd.addEventHandler("onkeydown",this.Edit_onkeydown,this);
            this.divForm.form.divSch.form.divEdtPop.form.edtAplcntInstCd.addEventHandler("onkeydown",this.Edit_onkeydown,this);
            this.divForm.form.divSch.form.divEdtPop.form.btnPop.addEventHandler("onclick",this.divForm_divSch_divEdtPop_btnPop_onclick,this);
            this.divForm.form.divGrd.form.Grid00.addEventHandler("oncellclick",this.divForm_divGrd_Grid00_oncellclick,this);
            this.divForm.form.divGrd.form.Grid00.addEventHandler("oncelldblclick",this.divForm_divGrd_Grid00_oncelldblclick,this);
            this.divForm.form.divGrd.form.cmbGrdList.addEventHandler("onitemchanged",this.divForm_divGrd_cmbGrdList_onitemchanged,this);
        };
        this.loadIncludeScript("CST006P02_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
