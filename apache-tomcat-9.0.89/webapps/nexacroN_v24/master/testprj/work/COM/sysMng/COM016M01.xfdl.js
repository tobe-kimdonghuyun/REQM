(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM016M01");
            this.set_titletext("자료실 관리목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"rno\" type=\"INT\" size=\"256\"/><Column id=\"bbsId\" type=\"STRING\" size=\"256\"/><Column id=\"bbsNm\" type=\"STRING\" size=\"256\"/><Column id=\"bbsCn\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"popupYn\" type=\"STRING\" size=\"256\"/><Column id=\"popupTopSz\" type=\"STRING\" size=\"256\"/><Column id=\"popupLeftSz\" type=\"STRING\" size=\"256\"/><Column id=\"popupWdthSz\" type=\"STRING\" size=\"256\"/><Column id=\"popupVrtcSz\" type=\"STRING\" size=\"256\"/><Column id=\"popupBgngDt\" type=\"STRING\" size=\"256\"/><Column id=\"popupEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"bbsTy\" type=\"STRING\" size=\"256\"/><Column id=\"bbsInqCnt\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"srvcSe\" type=\"STRING\" size=\"256\"/><Column id=\"atflCnt\" type=\"STRING\" size=\"256\"/><Column id=\"cmntCnt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegNm\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"currentPageNo\" type=\"STRING\" size=\"256\"/><Column id=\"recordCountPerPage\" type=\"STRING\" size=\"256\"/><Column id=\"sDate\" type=\"STRING\" size=\"256\"/><Column id=\"eDate\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegNm\" type=\"STRING\" size=\"256\"/><Column id=\"bbsNm\" type=\"STRING\" size=\"256\"/><Column id=\"bbsCn\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"bbsTy\" type=\"STRING\" size=\"256\"/><Column id=\"bbsTyNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"recordCountPerPage\">10</Col><Col id=\"currentPageNo\">1</Col><Col id=\"bbsTy\">R</Col><Col id=\"bbsTyNm\">자료실</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPage", this);
            obj._setContents("<ColumnInfo><Column id=\"totalRecordCount\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTitle","0","0",null,"48","60",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divForm","0","divTitle:20",null,"868","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("divSch","0","0","100.00%","230",null,null,null,null,null,null,this.divForm.form);
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
            obj.set_horizontalgap("40");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem04\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel02\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel03\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel04\"/><PanelItem id=\"PanelItem06\" componentid=\"Panel05\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panClose","30","151","100%","30",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_SchLine");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnSchClose\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnSchClose","1251","185","52","29",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_SchClose");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panSchBtn","632","235","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("3");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnSch\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnSch","570","192","112","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("4");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Search");
            obj.set_fittocontents("width");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel03_01","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("5");
            obj.set_text("등록일자");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("DivCal00","290.00","14","389","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("6");
            obj.set_text("Div00");
            obj.set_flexgrow("1");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","0","0","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form.DivCal00.form);
            obj.set_taborder("0");
            this.divForm.form.divSch.form.DivCal00.addChild(obj.name, obj);

            obj = new Static("StaticDash","Calendar00:10","0","10","40",null,null,null,null,null,null,this.divForm.form.divSch.form.DivCal00.form);
            obj.set_taborder("1");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_Dash");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.form.DivCal00.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","StaticDash:10","0","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form.DivCal00.form);
            obj.set_taborder("2");
            this.divForm.form.divSch.form.DivCal00.addChild(obj.name, obj);

            obj = new Panel("Panel00","20.00","14","360","45",null,null,null,null,"45",null,this.divForm.form.divSch.form);
            obj.set_taborder("7");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01\"/><PanelItem id=\"PanelItem02\" componentid=\"DivCal00\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("8");
            obj.set_text("등록자ID");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("Edit01","841","24","65%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("9");
            obj.set_flexgrow("1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel01","1694.00","398","360","45",null,null,null,null,"45",null,this.divForm.form.divSch.form);
            obj.set_taborder("10");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01\"/><PanelItem id=\"PanelItem02\" componentid=\"Edit01\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel02","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("11");
            obj.set_text("등록자명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("Edit00","140","80","65%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("12");
            obj.set_flexgrow("1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel02","1694.00","398","360","45",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("13");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel02\"/><PanelItem id=\"PanelItem02\" componentid=\"Edit00\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01_00","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("14");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("Edit01_00","841","24","65%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("15");
            obj.set_flexgrow("1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel03","1694.00","398","360","45",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("16");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel01_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Edit01_00\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("17");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("Edit01_00_00_00","841","24","65%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("18");
            obj.set_flexgrow("1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel04","1694.00","398","360","45",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("19");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel01_00_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Edit01_00_00_00\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel02_00_00_00","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("20");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("Combo01_00_00","788.00","145","20.42%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("21");
            obj.set_flexgrow("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_divSch_form_Combo01_00_00_innerdataset = new nexacro.NormalDataset("divForm_form_divSch_form_Combo01_00_00_innerdataset", obj);
            divForm_form_divSch_form_Combo01_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"datacolumn\">사용</Col><Col id=\"codecolumn\">Y</Col></Row><Row><Col id=\"datacolumn\">미사용</Col><Col id=\"codecolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_divSch_form_Combo01_00_00_innerdataset);
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel05","678.00","145","360","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("22");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel02_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Combo01_00_00\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divGrd","0","divSch:30","100.00%","700",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.addChild(obj.name, obj);

            obj = new Grid("grdRpstr","0","44","100%","500",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("9");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.getSetter("uFunction").set("checkbox");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"50\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"제목\"/><Cell col=\"2\" text=\"첨부파일여부\"/><Cell col=\"3\" text=\"사용여부\"/><Cell col=\"4\" text=\"댓글갯수\"/><Cell col=\"5\" text=\"등록자명\"/><Cell col=\"6\" text=\"등록일시\"/><Cell col=\"7\" cssclass=\"CellEnd\" text=\"조회수\"/></Band><Band id=\"body\"><Cell text=\"bind:rno\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:bbsNm\" cssclass=\"CellLink\" textAlign=\"center\"/><Cell col=\"2\" text=\"expr:atflCnt &gt; 0 ? &apos;첨부&apos; : &apos;미첨부&apos;\" textAlign=\"center\"/><Cell col=\"3\" text=\"expr:useYn == &apos;Y&apos; ? &apos;사용&apos; : &apos;미사용&apos;\" textAlign=\"center\"/><Cell col=\"4\" textAlign=\"center\" text=\"bind:cmntCnt\"/><Cell col=\"5\" text=\"bind:frstRegNm\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:frstRegDt\" textAlign=\"center\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"7\" cssclass=\"CellEnd\" text=\"bind:bbsInqCnt\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Div("divPage","0","grdRpstr:10",null,"36","0",null,null,null,"36",null,this.divForm.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_url("work::COM/util/paging/paging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn",null,"0","550","34","0",null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("width");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staTotal00\"/><PanelItem id=\"PanelItem02\" componentid=\"cmbGrdList\"/><PanelItem id=\"PanelItem03\" componentid=\"btnGrdDel\"/><PanelItem id=\"PanelItem06\" componentid=\"btnGrdExcel\"/><PanelItem id=\"PanelItem04\" componentid=\"btnGrdExcel01\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdExcel","774.00","10","124","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("4");
            obj.set_text("다운로드(엑셀)");
            obj.set_cssclass("btn_WF_GrdDw");
            obj.set_visible("true");
            obj.set_fittocontents("width");
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
            obj.set_text("1000");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal02","staTotal01:0","0","30","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("5");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDel","316.00","0","45","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("8");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Combo("cmbGrdList","1230","0","80","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_visible("true");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_divGrd_form_cmbGrdList_innerdataset = new nexacro.NormalDataset("divForm_form_divGrd_form_cmbGrdList_innerdataset", obj);
            divForm_form_divGrd_form_cmbGrdList_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_divGrd_form_cmbGrdList_innerdataset);
            obj.set_text("10");
            obj.set_value("10");
            obj.set_index("1");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal00","1165","0","65","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_text("목록수");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdExcel01","383","0","167","31",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("10");
            obj.set_text("전체다운로드(엑셀)");
            obj.set_cssclass("btn_WF_GrdDw");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Div("divPopBtn","0","divForm:20",null,"56","60",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","457.00","30","100","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("1");
            obj.set_text("신규등록");
            obj.set_cssclass("btn_WF_Yes");
            this.divPopBtn.addChild(obj.name, obj);

            obj = new Div("divGuide","1590.00","135","450","385",null,null,null,null,null,null,this);
            obj.set_taborder("3");
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
            //-- Default Layout : this.divTitle
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.divSch.form.DivCal00.form
            obj = new Layout("default","",0,0,this.divForm.form.divSch.form.DivCal00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Calendar00.set_taborder("0");
                p.Calendar00.move("0","0","100%","40",null,null);

                p.StaticDash.set_taborder("1");
                p.StaticDash.set_text("~");
                p.StaticDash.set_cssclass("sta_WF_Dash");
                p.StaticDash.set_flexshrink("0");
                p.StaticDash.move("Calendar00:10","0","10","40",null,null);

                p.Calendar01.set_taborder("2");
                p.Calendar01.move("StaticDash:10","0","100%","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            this.divForm.form.divSch.form.DivCal00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divSch.form.DivCal00.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divSch.form.DivCal00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            this.divForm.form.divSch.form.DivCal00.form.addLayout(obj.name, obj);
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
                p.panLabel.move("20","14","100%","108",null,null);

                p.panClose.set_taborder("2");
                p.panClose.set_type("vertical");
                p.panClose.set_cssclass("pal_WF_SchLine");
                p.panClose.set_flexcrossaxisalign("end");
                p.panClose.move("30","151","100%","30",null,null);

                p.btnSchClose.set_taborder("1");
                p.btnSchClose.set_cssclass("btn_WF_SchClose");
                p.btnSchClose.move("1251","185","52","29",null,null);

                p.panSchBtn.set_taborder("3");
                p.panSchBtn.set_flexmainaxisalign("center");
                p.panSchBtn.move("632","235","100%","40",null,null);

                p.btnSch.set_taborder("4");
                p.btnSch.set_text("조회하기");
                p.btnSch.set_cssclass("btn_WF_Search");
                p.btnSch.set_fittocontents("width");
                p.btnSch.move("570","192","112","40",null,null);

                p.staLabel03_01.set_taborder("5");
                p.staLabel03_01.set_text("등록일자");
                p.staLabel03_01.set_cssclass("sta_WF_SchLabel");
                p.staLabel03_01.set_flexshrink("0");
                p.staLabel03_01.set_maxwidth("");
                p.staLabel03_01.move("0","0","100","40",null,null);

                p.DivCal00.set_taborder("6");
                p.DivCal00.set_text("Div00");
                p.DivCal00.set_flexgrow("1");
                p.DivCal00.set_formscrollbartype("none none");
                p.DivCal00.set_formscrolltype("none");
                p.DivCal00.move("290.00","14","389","40",null,null);

                p.Panel00.set_taborder("7");
                p.Panel00.set_type("horizontal");
                p.Panel00.set_horizontalgap("10");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_flexgrow("1");
                p.Panel00.set_minheight("45");
                p.Panel00.set_maxheight("");
                p.Panel00.set_minwidth("");
                p.Panel00.move("20.00","14","360","45",null,null);

                p.staLabel01.set_taborder("8");
                p.staLabel01.set_text("등록자ID");
                p.staLabel01.set_cssclass("sta_WF_SchLabel");
                p.staLabel01.set_flexshrink("0");
                p.staLabel01.set_maxwidth("");
                p.staLabel01.move("0","0","100","40",null,null);

                p.Edit01.set_taborder("9");
                p.Edit01.set_flexgrow("1");
                p.Edit01.move("841","24","65%","40",null,null);

                p.Panel01.set_taborder("10");
                p.Panel01.set_type("horizontal");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.set_flexgrow("1");
                p.Panel01.set_minheight("45");
                p.Panel01.set_maxheight("");
                p.Panel01.set_minwidth("");
                p.Panel01.move("1694.00","398","360","45",null,null);

                p.staLabel02.set_taborder("11");
                p.staLabel02.set_text("등록자명");
                p.staLabel02.set_cssclass("sta_WF_SchLabel");
                p.staLabel02.set_flexshrink("0");
                p.staLabel02.set_maxwidth("");
                p.staLabel02.move("0","0","100","40",null,null);

                p.Edit00.set_taborder("12");
                p.Edit00.set_flexgrow("1");
                p.Edit00.move("140","80","65%","40",null,null);

                p.Panel02.set_taborder("13");
                p.Panel02.set_type("horizontal");
                p.Panel02.set_horizontalgap("10");
                p.Panel02.set_flexgrow("1");
                p.Panel02.set_minwidth("");
                p.Panel02.move("1694.00","398","360","45",null,null);

                p.staLabel01_00.set_taborder("14");
                p.staLabel01_00.set_text("제목");
                p.staLabel01_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel01_00.set_flexshrink("0");
                p.staLabel01_00.set_maxwidth("");
                p.staLabel01_00.move("0","0","100","40",null,null);

                p.Edit01_00.set_taborder("15");
                p.Edit01_00.set_flexgrow("1");
                p.Edit01_00.move("841","24","65%","40",null,null);

                p.Panel03.set_taborder("16");
                p.Panel03.set_type("horizontal");
                p.Panel03.set_horizontalgap("10");
                p.Panel03.set_fittocontents("height");
                p.Panel03.set_flexgrow("1");
                p.Panel03.set_minwidth("");
                p.Panel03.move("1694.00","398","360","45",null,null);

                p.staLabel01_00_00_00.set_taborder("17");
                p.staLabel01_00_00_00.set_text("내용");
                p.staLabel01_00_00_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel01_00_00_00.set_flexshrink("0");
                p.staLabel01_00_00_00.set_maxwidth("");
                p.staLabel01_00_00_00.move("0","0","100","40",null,null);

                p.Edit01_00_00_00.set_taborder("18");
                p.Edit01_00_00_00.set_flexgrow("1");
                p.Edit01_00_00_00.move("841","24","65%","40",null,null);

                p.Panel04.set_taborder("19");
                p.Panel04.set_type("horizontal");
                p.Panel04.set_horizontalgap("10");
                p.Panel04.set_fittocontents("height");
                p.Panel04.set_flexgrow("1");
                p.Panel04.set_minwidth("");
                p.Panel04.move("1694.00","398","360","45",null,null);

                p.staLabel02_00_00_00.set_taborder("20");
                p.staLabel02_00_00_00.set_text("사용여부");
                p.staLabel02_00_00_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel02_00_00_00.set_flexshrink("0");
                p.staLabel02_00_00_00.set_minwidth("");
                p.staLabel02_00_00_00.move("0","0","100","40",null,null);

                p.Combo01_00_00.set_taborder("21");
                p.Combo01_00_00.set_flexgrow("1");
                p.Combo01_00_00.set_innerdataset(divForm_form_divSch_form_Combo01_00_00_innerdataset);
                p.Combo01_00_00.set_codecolumn("codecolumn");
                p.Combo01_00_00.set_datacolumn("datacolumn");
                p.Combo01_00_00.set_text("전체");
                p.Combo01_00_00.set_value("");
                p.Combo01_00_00.set_index("0");
                p.Combo01_00_00.move("788.00","145","20.42%","40",null,null);

                p.Panel05.set_taborder("22");
                p.Panel05.set_type("horizontal");
                p.Panel05.set_horizontalgap("10");
                p.Panel05.set_flexgrow("1");
                p.Panel05.set_minwidth("");
                p.Panel05.move("678.00","145","360","40",null,null);
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
            	}
            );
            obj.set_type("vertical");
            obj.set_spacing("14px 16px 12px 16px");
            obj.set_flexwrap("wrap");
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
                p.grdRpstr.set_taborder("9");
                p.grdRpstr.set_binddataset("dsList");
                p.grdRpstr.set_autofittype("col");
                p.grdRpstr.getSetter("uFunction").set("checkbox");
                p.grdRpstr.move("0","44","100%","500",null,null);

                p.divPage.set_taborder("0");
                p.divPage.set_text("Div00");
                p.divPage.set_url("work::COM/util/paging/paging.xfdl");
                p.divPage.set_formscrollbartype("none none");
                p.divPage.set_formscrolltype("none");
                p.divPage.set_minheight("36");
                p.divPage.set_maxheight("");
                p.divPage.move("0","grdRpstr:10",null,"36","0",null);

                p.PanelGrdBtn.set_taborder("3");
                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.set_fittocontents("width");
                p.PanelGrdBtn.move(null,"0","550","34","0",null);

                p.btnGrdExcel.set_taborder("4");
                p.btnGrdExcel.set_text("다운로드(엑셀)");
                p.btnGrdExcel.set_cssclass("btn_WF_GrdDw");
                p.btnGrdExcel.set_visible("true");
                p.btnGrdExcel.set_fittocontents("width");
                p.btnGrdExcel.move("774.00","10","124","34",null,null);

                p.staTotal.set_taborder("7");
                p.staTotal.set_text("총");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("width");
                p.staTotal.move("0","0","27","34",null,null);

                p.staTotal01.set_taborder("6");
                p.staTotal01.set_text("1000");
                p.staTotal01.set_cssclass("sta_WF_Total");
                p.staTotal01.set_usedecorate("true");
                p.staTotal01.set_fittocontents("width");
                p.staTotal01.move("staTotal:0","0","43","34",null,null);

                p.staTotal02.set_taborder("5");
                p.staTotal02.set_text("건");
                p.staTotal02.set_usedecorate("true");
                p.staTotal02.move("staTotal01:0","0","30","34",null,null);

                p.btnGrdDel.set_taborder("8");
                p.btnGrdDel.set_text("삭제");
                p.btnGrdDel.set_cssclass("btn_WF_SmallRed");
                p.btnGrdDel.set_visible("true");
                p.btnGrdDel.set_fittocontents("width");
                p.btnGrdDel.move("316.00","0","45","34",null,null);

                p.cmbGrdList.set_taborder("2");
                p.cmbGrdList.set_visible("true");
                p.cmbGrdList.set_innerdataset(divForm_form_divGrd_form_cmbGrdList_innerdataset);
                p.cmbGrdList.set_codecolumn("codecolumn");
                p.cmbGrdList.set_datacolumn("datacolumn");
                p.cmbGrdList.set_text("10");
                p.cmbGrdList.set_value("10");
                p.cmbGrdList.set_index("1");
                p.cmbGrdList.move("1230","0","80","34",null,null);

                p.staTotal00.set_taborder("1");
                p.staTotal00.set_text("목록수");
                p.staTotal00.set_cssclass("sta_WF_SchLabel");
                p.staTotal00.set_visible("true");
                p.staTotal00.set_fittocontents("width");
                p.staTotal00.move("1165","0","65","34",null,null);

                p.btnGrdExcel01.set_taborder("10");
                p.btnGrdExcel01.set_text("전체다운로드(엑셀)");
                p.btnGrdExcel01.set_cssclass("btn_WF_GrdDw");
                p.btnGrdExcel01.set_visible("true");
                p.btnGrdExcel01.set_fittocontents("width");
                p.btnGrdExcel01.move("383","0","167","31",null,null);
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
                p.btnGrdExcel.set_visible("false");

                p.grdRpstr.set_autofittype("none");

                p.btnGrdExcel01.set_visible("false");
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
                p.divSch.move("0","0","100.00%","230",null,null);

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
            this.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form
            obj = new Layout("Layout0","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divGrd.move("0","divSch:50","100%","673",null,null);

                p.divSch.set_text("Div00");
                p.divSch.set_fittocontents("height");
                p.divSch.move("0","0","100%","386",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_spacing("0px 10px 0px 20px");
            obj.set_flexmainaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexcrossaxisalign("start");
            obj.set_verticalgap("30");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divPopBtn.form
            obj = new Layout("default","",0,0,this.divPopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00_00.set_taborder("1");
                p.Button00_00.set_text("신규등록");
                p.Button00_00.set_cssclass("btn_WF_Yes");
                p.Button00_00.move("457.00","30","100","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("20");
            this.divPopBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divPopBtn.form
            obj = new Layout("mobile","",0,0,this.divPopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("20");
            this.divPopBtn.form.addLayout(obj.name, obj);
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
            obj = new Layout("default","Desktop_screen",1480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("자료실 관리목록");

                p.divTitle.set_taborder("1");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.move("0","0",null,"48","60",null);

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_formscrollbartype("none none");
                p.divForm.set_formscrolltype("none");
                p.divForm.set_fittocontents("height");
                p.divForm.set_maxwidth("");
                p.divForm.move("0","divTitle:20",null,"868","60",null);

                p.divPopBtn.set_taborder("2");
                p.divPopBtn.set_text("Div00");
                p.divPopBtn.set_cssclass("div_WF_PopBtn");
                p.divPopBtn.move("0","divForm:20",null,"56","60",null);

                p.divGuide.set_taborder("3");
                p.divGuide.set_text("div00");
                p.divGuide.set_visible("false");
                p.divGuide.set_cssclass("div_GD_Tip");
                p.divGuide.move("1590.00","135","450","385",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
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
            obj = new BindItem("item0","divForm.form.divSch.form.DivCal00.form.Calendar00","value","dsSearch","sDate");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.divSch.form.DivCal00.form.Calendar01","value","dsSearch","eDate");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.divSch.form.Edit01","value","dsSearch","frstRegId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.divSch.form.Edit00","value","dsSearch","frstRegNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.divSch.form.Edit01_00","value","dsSearch","bbsNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.divSch.form.Edit01_00_00_00","value","dsSearch","bbsCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.divSch.form.Combo01_00_00","value","dsSearch","useYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divForm.form.divGrd.form.staTotal01","text","dsPage","totalRecordCount");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divForm.form.divGrd.form.cmbGrdList","value","dsSearch","recordCountPerPage");
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
        this.registerScript("COM016M01.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	COM016M03.xfdl
        *  @Creator 	ELUON INS
        *  @CreateDate 	2024/11/04
        *  @Desction
        *  @Author
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/11/04			조규완					최초생성
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
        	var strSvcUrl   = "sysMng/bbsListInq.do";
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

        this.deleteTransaction = function() {

        	var strSvcId    = "delete";
        	var strSvcUrl   = "sysMng/bbsInfoDelStrg.do";
        	var inData      = "dsList=dsList:U";
        	var outData     = "dsList=dsList dsPage=dsPage";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
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
        		case "delete":
        			this.gfnAlertMsg("delete", "MSG_014", "msgCallback");
        			this.cfnSearch(1);
        			break;
        		case "excel":
        			//다운로드
        			console.log(errorMsg);	// 다운로드 가능한 파일 URL
        			break;
        	}
        };

        this.msgCallback = function(sPopupId, sRtn) {
        	if (this.gfnIsNull(sRtn)) return;
        	var oRtn = JSON.parse(sRtn);

        	if(sPopupId == "del_confirm") {
        		if(oRtn.result == "Y") {
        			var chk = this.dsList.extractRows("chk == " + 1);

        			if(chk.length > 0) {
        				this.dsList.deleteMultiRows(chk);
        			}

        			this.deleteTransaction();
        		}
        	}  else if(sPopupId == "delete") {
        		this.cfnSearch(1);
        	}
        };

        this.fnPopupCallback = function(sPopupId, sRtn)
        {
        	if(sPopupId =="popupSearch")
        	{
        		if (this.gfnIsNull(sRtn)) return;
        		var objRtn = JSON.parse(sRtn);
        		//TODO..
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function() {

        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divForm_divSch_btnSch_onclick = function(obj,e)
        {
        	this.cfnSearch(1);
        };

        this.divForm_divGrd_btnGrdDel_onclick = function(obj,e)
        {
        	var chk = this.dsList.findRow("chk", 1);
        	if(chk != -1) {
        		this.gfnConfirmMsg("del_confirm", "MSG_005", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        	} else {
        		this.gfnAlertMsg("del_error", "MSG_006");
        	}
        };

        // 엑셀 다운 버튼
        this.divForm_divGrd_btnGrdExcel_onclick = function(obj,e)
        {
        	/*****  현재 그리드 화면을 엑셀로 다운로드 받음  *****/
        	this.exportObj = new ExcelExportObject();
        	var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.divForm.form.divGrd.form.grdRpstr, "Sheet1!A1");
        	this.exportObj.set_exporturl("svcUrl::/XExportImport.do");
        	this.exportObj.exportData();
        	/*****  현재 그리드 화면을 엑셀로 다운로드 받음  *****/
        };

        // 엑셀 전체 다운로드
        this.divForm_divGrd_btnGrdExcel01_onclick = function(obj,e)
        {
        	var objApp = nexacro.getApplication();
        	this.objSrv = nexacro.getEnvironment().services["svcUrl"];

        	var objWebBrowser;
        	var bRet = this.isValidObject("WebBrowser11");

        	if(bRet) {
        		objWebBrowser = this.lookup("WebBrowser11");
        	} else {
        		objWebBrowser = new WebBrowser();
        		objWebBrowser.init("WebBrowser11", 0, 0, 0, 0, null, null);
        		this.insertChild(-1, "WebBrowser11", objWebBrowser);
        		objWebBrowser.show();
        	}

        	var url = "/sysMng/bbsExcel.do";
        	this.gfnWebBrowserSendPostDs(this, objWebBrowser, url, this.dsSearch);
        };

        this.divForm_divGrd_cmbGrdList_onitemchanged = function(obj,e)
        {
        	this.cfnSearch(1);
        };

        this.divPopBtn_Button00_00_onclick = function(obj,e)
        {
        	if (this.objApp.screenid == "Desktop_screen") {
        		var sMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        		var sMenuUrl = 'work::COM/sysMng/COM016M03.xfdl';
        		var actNm = '추가';
        		this.gfnPageOpen(sMenuId, sMenuUrl, actNm, null);
        	} else {
        		var sTitle = "자료실 관리";
        		var objArg   = {};

        		var objOption = {
        			popuptype: "modal"	//modal,modaless
        			, autosize: true
        			, title: sTitle
        			, resize: true
        			, titlebar: true
        		};
        		var sPopupCallBack = "fnPopupCallback";

        		this.gfnOpenPopup("COM016M03", "work::COM/sysMng/COM016M03.xfdl", objArg, sPopupCallBack, objOption);
        	}
        };

        this.divForm_divGrd_grdRpstr_oncellclick = function(obj,e)
        {
        	if(e.cell == 2)
        	{
        		if (this.objApp.screenid == "Desktop_screen") {
        			var param = {
        				"bbsId" : this.dsList.getColumn(e.row, "bbsId")
        			};

        			var sMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        			var sMenuUrl = 'work::COM/sysMng/COM016M03.xfdl';
        			var actNm = '상세';
        			this.gfnPageOpen(sMenuId, sMenuUrl, actNm, param);
        		} else {
        			var sTitle = "자료실 관리";
        			var objArg   = {
        				"bbsId" : this.dsList.getColumn(e.row, "bbsId")
        			};

        			var objOption = {
        				popuptype: "modal"	//modal,modaless
        				, autosize: true
        				, title: sTitle
        				, resize: true
        				, titlebar: true
        			};
        			var sPopupCallBack = "fnPopupCallback";

        			this.gfnOpenPopup("COM016M03", "work::COM/sysMng/COM016M03.xfdl", objArg, sPopupCallBack, objOption);
        		}
        	}
        };

        this.divForm_divSch_onkeyup = function(obj,e)
        {
        	if (e.keycode==13) {
        		this.getSearchTransaction();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.divSch.addEventHandler("onkeyup",this.divForm_divSch_onkeyup,this);
            this.divForm.form.divSch.form.btnSchClose.addEventHandler("onclick",this.divForm_divSch_btnSchClose_onclick,this);
            this.divForm.form.divSch.form.btnSch.addEventHandler("onclick",this.divForm_divSch_btnSch_onclick,this);
            this.divForm.form.divSch.form.staLabel02.addEventHandler("onclick",this.divForm_Div00_sta00_00_01_01_onclick,this);
            this.divForm.form.divSch.form.staLabel02_00_00_00.addEventHandler("onclick",this.divForm_Div00_sta00_00_01_01_onclick,this);
            this.divForm.form.divSch.form.Combo01_00_00.addEventHandler("onitemchanged",this.divForm_divSch_Combo01_onitemchanged,this);
            this.divForm.form.divGrd.form.grdRpstr.addEventHandler("oncellclick",this.divForm_divGrd_grdRpstr_oncellclick,this);
            this.divForm.form.divGrd.form.btnGrdExcel.addEventHandler("onclick",this.divForm_divGrd_btnGrdExcel_onclick,this);
            this.divForm.form.divGrd.form.btnGrdDel.addEventHandler("onclick",this.divForm_divGrd_btnGrdDel_onclick,this);
            this.divForm.form.divGrd.form.cmbGrdList.addEventHandler("onitemchanged",this.divForm_divGrd_cmbGrdList_onitemchanged,this);
            this.divForm.form.divGrd.form.btnGrdExcel01.addEventHandler("onclick",this.divForm_divGrd_btnGrdExcel01_onclick,this);
            this.divPopBtn.form.Button00_00.addEventHandler("onclick",this.divPopBtn_Button00_00_onclick,this);
        };
        this.loadIncludeScript("COM016M01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
