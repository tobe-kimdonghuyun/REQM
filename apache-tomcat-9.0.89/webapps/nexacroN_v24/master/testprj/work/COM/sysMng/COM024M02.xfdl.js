(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM024M02");
            this.set_titletext("메뉴관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,1320);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCurrMenu", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MODULE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAY_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UP_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRGRM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRGRM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRGRM_KORN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_EXPLN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChgMenu", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MODULE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAY_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UP_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRGRM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRGRM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRGRM_KORN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_EXPLN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"sDate\" type=\"STRING\" size=\"256\"/><Column id=\"eDate\" type=\"STRING\" size=\"256\"/><Column id=\"searchText\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegNm\" type=\"STRING\" size=\"256\"/><Column id=\"url\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCal", this);
            obj._setContents("<ColumnInfo><Column id=\"aplcnBgngDt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","0","70",null,"1684","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("divSch","0","0","100.00%","180",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel00","69","25","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("13");
            obj.set_text("등록일자");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01_00","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("11");
            obj.set_text("URL");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("Edit01_00","841","24","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("12");
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

            obj = new Panel("Panel01","1694.00","398","560","45",null,null,null,null,"45",null,this.divForm.form.divSch.form);
            obj.set_taborder("2");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01\"/><PanelItem id=\"PanelItem02\" componentid=\"divEdtPop\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("Edit00","140","80","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("10");
            obj.set_flexgrow("1");
            obj.set_displaynulltext("검색어 입력");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("1");
            obj.set_text("등록자명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel00","20.00","14","560","45",null,null,null,null,"45",null,this.divForm.form.divSch.form);
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
            obj.set_text("메뉴명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel02","1694.00","398","560","45",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("5");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel02\"/><PanelItem id=\"PanelItem02\" componentid=\"Edit00\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel03","1694.00","398","560","45",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("6");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel01_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Edit01_00\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panClose","30","151","100%","10",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("7");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_SchLine");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents/>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panSchBtn","632","235","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("8");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnSch\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnSch","570","192","112","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("9");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Search");
            obj.set_fittocontents("width");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divCal","20.00","14","320","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("14");
            obj.set_text("Div00");
            obj.set_flexgrow("1");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","180.00","0","150","40",null,null,null,null,null,null,this.divForm.form.divSch.form.divCal.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.divSch.form.divCal.addChild(obj.name, obj);

            obj = new Static("staDash","160.00","0","10","40",null,null,null,null,null,null,this.divForm.form.divSch.form.divCal.form);
            obj.set_taborder("1");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_Dash");
            this.divForm.form.divSch.form.divCal.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","0","0","150","40",null,null,null,null,null,null,this.divForm.form.divSch.form.divCal.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.divSch.form.divCal.addChild(obj.name, obj);

            obj = new Div("divEdtPop","799.00","29","22.46%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("15");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("Edit00","0","0",null,"40","0",null,null,null,null,null,this.divForm.form.divSch.form.divEdtPop.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            this.divForm.form.divSch.form.divEdtPop.addChild(obj.name, obj);

            obj = new Button("btnPop","Edit00:-40","0","40","40",null,null,null,null,null,null,this.divForm.form.divSch.form.divEdtPop.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            obj.set_visible("false");
            this.divForm.form.divSch.form.divEdtPop.addChild(obj.name, obj);

            obj = new Panel("panGrd","0","138","100%","800",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divGrd\"/><PanelItem id=\"PanelItem04\" componentid=\"panShuttleBtn\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00\"/><PanelItem id=\"PanelItem02\" componentid=\"divGrd00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divGrd","0","210","630","800",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staTotal01","0","0","38.57%","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("6");
            obj.set_text("현재 메뉴 목록");
            obj.set_cssclass("sta_WF_Txt60018");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("grdMenu","1","101","100%","700",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsCurrMenu");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("collapse,null");
            obj.set_treeuseimage("true");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseexpandkey("false");
            obj.set_treeusebutton("use");
            obj.set_treeuseline("true");
            obj.set_treeasynctoggle("false");
            obj.set_cssclass("grd_WF_Tree");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"140\"/></Columns><Rows><Row size=\"32\"/></Rows><Band id=\"body\"><Cell text=\"bind:MENU_NM\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:MENU_LVL\" suppress=\"0\"/></Band></Format></Formats>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("Static00","74","85","100%","40",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_text("전체메뉴");
            obj.set_cssclass("sta_WF_TreeTitle");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","44","100%",null,null,"0",null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_cssclass("pan_WF_Tree");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/><PanelItem id=\"PanelItem01\" componentid=\"grdMenu\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Div("divGrd00","710.00","228","630","800",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panGrdBtn",null,"0","362","34","0",null,null,null,null,null,this.divForm.form.divGrd00.form);
            obj.set_taborder("2");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_fittocontents("width");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnGrdRegi\"/><PanelItem id=\"PanelItem01\" componentid=\"btnGrdRegi00\"/><PanelItem id=\"PanelItem04\" componentid=\"btnGrdDel\"/><PanelItem id=\"PanelItem03\" componentid=\"btnSave\"/><PanelItem id=\"PanelItem05\" componentid=\"btnSave00\"/></Contents>");
            this.divForm.form.divGrd00.addChild(obj.name, obj);

            obj = new Static("staTotal01","0","0","150","34",null,null,null,null,null,null,this.divForm.form.divGrd00.form);
            obj.set_taborder("3");
            obj.set_text("변경 메뉴 목록");
            obj.set_cssclass("sta_WF_Txt60018");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd00.addChild(obj.name, obj);

            obj = new Button("btnGrdRegi","371.00","0","84","34",null,null,null,null,null,null,this.divForm.form.divGrd00.form);
            obj.set_taborder("1");
            obj.set_text("ROOT추가");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd00.addChild(obj.name, obj);

            obj = new Static("Static00","10","42","100%","40",null,null,null,null,null,null,this.divForm.form.divGrd00.form);
            obj.set_taborder("5");
            obj.set_text("전체메뉴");
            obj.set_cssclass("sta_WF_TreeTitle");
            this.divForm.form.divGrd00.addChild(obj.name, obj);

            obj = new Grid("grdMenu","1.00","96","100%","700",null,null,null,null,null,null,this.divForm.form.divGrd00.form);
            obj.set_taborder("6");
            obj.set_binddataset("dsChgMenu");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("collapse,null");
            obj.set_treeuseimage("true");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseexpandkey("false");
            obj.set_treeusebutton("use");
            obj.set_treeuseline("true");
            obj.set_treeasynctoggle("false");
            obj.set_cssclass("grd_WF_Tree");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"140\"/></Columns><Rows><Row size=\"32\"/></Rows><Band id=\"body\"><Cell text=\"bind:MENU_NM\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:MENU_LVL\" suppress=\"0\"/></Band></Format></Formats>");
            this.divForm.form.divGrd00.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","panGrdBtn:10","100.00%",null,null,"0",null,null,null,null,this.divForm.form.divGrd00.form);
            obj.set_taborder("7");
            obj.set_type("vertical");
            obj.set_cssclass("pan_WF_Tree");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/><PanelItem id=\"PanelItem01\" componentid=\"grdMenu\"/></Contents>");
            this.divForm.form.divGrd00.addChild(obj.name, obj);

            obj = new Button("btnGrdDel","316.00","0","45","34",null,null,null,null,null,null,this.divForm.form.divGrd00.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd00.addChild(obj.name, obj);

            obj = new Button("btnGrdRegi00","515.00","10","47","34",null,null,null,null,null,null,this.divForm.form.divGrd00.form);
            obj.set_taborder("4");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd00.addChild(obj.name, obj);

            obj = new Button("btnSave","138.00","10","47","34",null,null,null,null,null,null,this.divForm.form.divGrd00.form);
            obj.set_taborder("8");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd00.addChild(obj.name, obj);

            obj = new Button("btnSave00","197.00","10","71","34",null,null,null,null,null,null,this.divForm.form.divGrd00.form);
            obj.set_taborder("9");
            obj.set_text("즉시저장");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd00.addChild(obj.name, obj);

            obj = new Div("Div00","0","900","100.00%","498",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","0","100%","50",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("26");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"panGrdBtn00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staSubTitle","0","0","80%","50",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("메뉴정보");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_flexgrow("1");
            obj.set_fittocontents("width");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("panGrdBtn00","1314","10","20%","50",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("25");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_fittocontents("width");
            obj.set_horizontalgap("10");
            obj.set_cssclass("pan_WF_Subtitle");
            obj.set_spacing("0px 20px 0px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnGrdRegi00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("1");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan00_02\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("메뉴ID");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt00","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("5");
            obj.set_text("메뉴명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt00_00","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("6");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_02","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("7");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel01_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("8");
            obj.set_text("메뉴순서");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt00_01","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("9");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan01_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("10");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_01\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan01","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("11");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_00_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("12");
            obj.set_text("프로그램명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan02_","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("13");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00\"/><PanelItem id=\"PanelItem02\" componentid=\"divEdtPop\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan02","0","60","100%","96",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("14");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan02_\"/><PanelItem id=\"PanelItem02\" componentid=\"pan02_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","80","420","100%","100",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("27");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel04_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("15");
            obj.set_text("메뉴설명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan03_01","10.00","98","1380","146",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("16");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel04_00\"/><PanelItem id=\"PanelItem01\" componentid=\"TextArea00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan03","0","60","100.00%","160",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("17");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan03_01\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("18");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Radio("Radio00_00","127","203","280","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("19");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divForm_form_Div00_form_Radio00_00_innerdataset = new nexacro.NormalDataset("divForm_form_Div00_form_Radio00_00_innerdataset", obj);
            divForm_form_Div00_form_Radio00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div00_form_Radio00_00_innerdataset);
            obj.set_text("사용");
            obj.set_value("Y");
            obj.set_index("0");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("20");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Radio00_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("21");
            obj.set_text("메뉴URL");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt00_02_00","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("22");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan02_00","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("23");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_02_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Button("btnGrdRegi00","1370.00","10","45","34",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("24");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_SmallBlack");
            obj.set_visible("false");
            obj.set_fittocontents("width");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Div("divEdtPop","799.00","29","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("28");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","0","0",null,"40","0",null,null,null,null,null,this.divForm.form.Div00.form.divEdtPop.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div00.form.divEdtPop.addChild(obj.name, obj);

            obj = new Button("btnPop","Edit00:-40","0","40","40",null,null,null,null,null,null,this.divForm.form.Div00.form.divEdtPop.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            this.divForm.form.Div00.form.divEdtPop.addChild(obj.name, obj);

            obj = new Div("Div00_00","0","900","100.00%","146",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","0","100%","50",null,null,null,null,null,null,this.divForm.form.Div00_00.form);
            obj.set_taborder("7");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"panGrdBtn00\"/></Contents>");
            this.divForm.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("staSubTitle","0","0","80%","50",null,null,null,null,null,null,this.divForm.form.Div00_00.form);
            obj.set_taborder("0");
            obj.set_text("메뉴변경반영일자");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_flexgrow("1");
            obj.set_fittocontents("width");
            this.divForm.form.Div00_00.addChild(obj.name, obj);

            obj = new Panel("panGrdBtn00","1314","10","20%","50",null,null,null,null,null,null,this.divForm.form.Div00_00.form);
            obj.set_taborder("6");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_fittocontents("width");
            obj.set_horizontalgap("10");
            obj.set_cssclass("pan_WF_Subtitle");
            obj.set_spacing("0px 20px 0px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnGrdRegi00\"/></Contents>");
            this.divForm.form.Div00_00.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div00_00.form);
            obj.set_taborder("1");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan00_02\"/></Contents>");
            this.divForm.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("staLabel00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00_00.form);
            obj.set_taborder("2");
            obj.set_text("적용일자");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00_00.addChild(obj.name, obj);

            obj = new Panel("pan00_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div00_00.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem01\" componentid=\"Calendar00\"/></Contents>");
            this.divForm.form.Div00_00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","104","110","150","40",null,null,null,null,null,null,this.divForm.form.Div00_00.form);
            obj.set_taborder("8");
            this.divForm.form.Div00_00.addChild(obj.name, obj);

            obj = new Panel("pan00_02","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div00_00.form);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div00_00.addChild(obj.name, obj);

            obj = new Button("btnGrdRegi00","1370.00","10","45","34",null,null,null,null,null,null,this.divForm.form.Div00_00.form);
            obj.set_taborder("5");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_SmallBlack");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00","710.00","682","40","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_ShuttleL");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button01","710.00","742","40","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_Shuttle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnShuttleR","710.00","802","40","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_ShuttleR");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panShuttleBtn","647.00","562","60","800",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("10");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button01\"/><PanelItem id=\"PanelItem02\" componentid=\"btnShuttleR\"/></Contents>");
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

            obj = new Div("divTitle","0","5",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form.divSch.form.divCal.form
            obj = new Layout("default","",0,0,this.divForm.form.divSch.form.divCal.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Calendar01.set_taborder("0");
                p.Calendar01.set_dateformat("yyyy-MM-dd");
                p.Calendar01.move("180.00","0","150","40",null,null);

                p.staDash.set_taborder("1");
                p.staDash.set_text("~");
                p.staDash.set_cssclass("sta_WF_Dash");
                p.staDash.move("160.00","0","10","40",null,null);

                p.Calendar00.set_taborder("2");
                p.Calendar00.set_dateformat("yyyy-MM-dd");
                p.Calendar00.move("0","0","150","40",null,null);
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
            //-- Default Layout : this.divForm.form.divSch.form.divEdtPop.form
            obj = new Layout("default","",0,0,this.divForm.form.divSch.form.divEdtPop.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Edit00.set_taborder("0");
                p.Edit00.set_cssclass("edt_WF_EdtSch");
                p.Edit00.move("0","0",null,"40","0",null);

                p.btnPop.set_taborder("1");
                p.btnPop.set_cssclass("btn_WF_EdtSch");
                p.btnPop.set_visible("false");
                p.btnPop.move("Edit00:-40","0","40","40",null,null);
            	}
            );
            this.divForm.form.divSch.form.divEdtPop.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divSch.form.divEdtPop.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divSch.form.divEdtPop.form,
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
                p.staLabel00.set_taborder("13");
                p.staLabel00.set_text("등록일자");
                p.staLabel00.set_cssclass("sta_WF_SchLabel");
                p.staLabel00.set_flexshrink("0");
                p.staLabel00.move("69","25","100","40",null,null);

                p.staLabel01_00.set_taborder("11");
                p.staLabel01_00.set_text("URL");
                p.staLabel01_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel01_00.set_flexshrink("0");
                p.staLabel01_00.set_maxwidth("");
                p.staLabel01_00.move("0","0","100","40",null,null);

                p.Edit01_00.set_taborder("12");
                p.Edit01_00.set_flexgrow("1");
                p.Edit01_00.set_displaynulltext("검색어 입력");
                p.Edit01_00.move("841","24","100%","40",null,null);

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
                p.Panel01.move("1694.00","398","560","45",null,null);

                p.Edit00.set_taborder("10");
                p.Edit00.set_flexgrow("1");
                p.Edit00.set_displaynulltext("검색어 입력");
                p.Edit00.move("140","80","100%","40",null,null);

                p.staLabel01.set_taborder("1");
                p.staLabel01.set_text("등록자명");
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
                p.Panel00.set_minheight("45");
                p.Panel00.set_maxheight("");
                p.Panel00.set_minwidth("");
                p.Panel00.move("20.00","14","560","45",null,null);

                p.staLabel02.set_taborder("4");
                p.staLabel02.set_text("메뉴명");
                p.staLabel02.set_cssclass("sta_WF_SchLabel");
                p.staLabel02.set_flexshrink("0");
                p.staLabel02.set_maxwidth("");
                p.staLabel02.move("0","0","100","40",null,null);

                p.Panel02.set_taborder("5");
                p.Panel02.set_type("horizontal");
                p.Panel02.set_horizontalgap("10");
                p.Panel02.set_flexgrow("1");
                p.Panel02.set_minwidth("");
                p.Panel02.move("1694.00","398","560","45",null,null);

                p.Panel03.set_taborder("6");
                p.Panel03.set_type("horizontal");
                p.Panel03.set_horizontalgap("10");
                p.Panel03.set_fittocontents("height");
                p.Panel03.set_flexgrow("1");
                p.Panel03.set_minwidth("");
                p.Panel03.move("1694.00","398","560","45",null,null);

                p.panClose.set_taborder("7");
                p.panClose.set_type("vertical");
                p.panClose.set_cssclass("pal_WF_SchLine");
                p.panClose.set_flexcrossaxisalign("end");
                p.panClose.move("30","151","100%","10",null,null);

                p.panSchBtn.set_taborder("8");
                p.panSchBtn.set_flexmainaxisalign("center");
                p.panSchBtn.move("632","235","100%","40",null,null);

                p.btnSch.set_taborder("9");
                p.btnSch.set_text("조회하기");
                p.btnSch.set_cssclass("btn_WF_Search");
                p.btnSch.set_fittocontents("width");
                p.btnSch.move("570","192","112","40",null,null);

                p.divCal.set_taborder("14");
                p.divCal.set_text("Div00");
                p.divCal.set_flexgrow("1");
                p.divCal.set_formscrollbartype("none none");
                p.divCal.set_formscrolltype("none");
                p.divCal.move("20.00","14","320","40",null,null);

                p.divEdtPop.set_taborder("15");
                p.divEdtPop.set_text("Div00");
                p.divEdtPop.set_formscrollbartype("none none");
                p.divEdtPop.set_formscrolltype("none");
                p.divEdtPop.set_flexgrow("1");
                p.divEdtPop.move("799.00","29","22.46%","40",null,null);
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
                p.panLabel.move("132","47","100%","244",null,null);

                p.Panel03.set_type("horizontal");
                p.Panel03.set_fittocontents("height");
                p.Panel03.set_horizontalgap("8");
                p.Panel03.move("1694.00","398","100%","40",null,null);

                p.Panel02.set_horizontalgap("8");
                p.Panel02.move("1694.00","398","100%","45",null,null);

                p.Panel01.set_horizontalgap("8");
                p.Panel01.move("1694.00","398","100%","40",null,null);

                p.Panel00.set_type("horizontal");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_horizontalgap("8");
                p.Panel00.move("1694.00","398","100%","80",null,null);

                p.Edit00.move("140","80","65%","40",null,null);

                p.Edit01_00.move("841","24","65%","40",null,null);
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
                p.staTotal01.set_taborder("6");
                p.staTotal01.set_text("현재 메뉴 목록");
                p.staTotal01.set_cssclass("sta_WF_Txt60018");
                p.staTotal01.set_usedecorate("true");
                p.staTotal01.set_fittocontents("width");
                p.staTotal01.move("0","0","38.57%","34",null,null);

                p.grdMenu.set_taborder("1");
                p.grdMenu.set_binddataset("dsCurrMenu");
                p.grdMenu.set_autofittype("col");
                p.grdMenu.set_treeinitstatus("collapse,null");
                p.grdMenu.set_treeuseimage("true");
                p.grdMenu.set_treeusecheckbox("false");
                p.grdMenu.set_treeuseexpandkey("false");
                p.grdMenu.set_treeusebutton("use");
                p.grdMenu.set_treeuseline("true");
                p.grdMenu.set_treeasynctoggle("false");
                p.grdMenu.set_cssclass("grd_WF_Tree");
                p.grdMenu.move("1","101","100%","700",null,null);

                p.Static00.set_taborder("2");
                p.Static00.set_text("전체메뉴");
                p.Static00.set_cssclass("sta_WF_TreeTitle");
                p.Static00.move("74","85","100%","40",null,null);

                p.Panel00.set_taborder("3");
                p.Panel00.set_type("vertical");
                p.Panel00.set_cssclass("pan_WF_Tree");
                p.Panel00.move("0","44","100%",null,null,"0");
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
                p.Panel00.move("0","44","100%","310",null,null);

                p.grdMenu.move("1","101","100%","270",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divGrd00.form
            obj = new Layout("default","",0,0,this.divForm.form.divGrd00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panGrdBtn.set_taborder("2");
                p.panGrdBtn.set_flexcrossaxisalign("start");
                p.panGrdBtn.set_flexcrossaxiswrapalign("start");
                p.panGrdBtn.set_flexmainaxisalign("end");
                p.panGrdBtn.set_fittocontents("width");
                p.panGrdBtn.set_horizontalgap("10");
                p.panGrdBtn.move(null,"0","362","34","0",null);

                p.staTotal01.set_taborder("3");
                p.staTotal01.set_text("변경 메뉴 목록");
                p.staTotal01.set_cssclass("sta_WF_Txt60018");
                p.staTotal01.set_usedecorate("true");
                p.staTotal01.set_fittocontents("width");
                p.staTotal01.move("0","0","150","34",null,null);

                p.btnGrdRegi.set_taborder("1");
                p.btnGrdRegi.set_text("ROOT추가");
                p.btnGrdRegi.set_cssclass("btn_WF_Small");
                p.btnGrdRegi.set_visible("true");
                p.btnGrdRegi.set_fittocontents("width");
                p.btnGrdRegi.move("371.00","0","84","34",null,null);

                p.Static00.set_taborder("5");
                p.Static00.set_text("전체메뉴");
                p.Static00.set_cssclass("sta_WF_TreeTitle");
                p.Static00.move("10","42","100%","40",null,null);

                p.grdMenu.set_taborder("6");
                p.grdMenu.set_binddataset("dsChgMenu");
                p.grdMenu.set_autofittype("col");
                p.grdMenu.set_treeinitstatus("collapse,null");
                p.grdMenu.set_treeuseimage("true");
                p.grdMenu.set_treeusecheckbox("false");
                p.grdMenu.set_treeuseexpandkey("false");
                p.grdMenu.set_treeusebutton("use");
                p.grdMenu.set_treeuseline("true");
                p.grdMenu.set_treeasynctoggle("false");
                p.grdMenu.set_cssclass("grd_WF_Tree");
                p.grdMenu.move("1.00","96","100%","700",null,null);

                p.Panel00.set_taborder("7");
                p.Panel00.set_type("vertical");
                p.Panel00.set_cssclass("pan_WF_Tree");
                p.Panel00.move("0","panGrdBtn:10","100.00%",null,null,"0");

                p.btnGrdDel.set_taborder("0");
                p.btnGrdDel.set_text("삭제");
                p.btnGrdDel.set_cssclass("btn_WF_SmallRed");
                p.btnGrdDel.set_visible("true");
                p.btnGrdDel.set_fittocontents("width");
                p.btnGrdDel.move("316.00","0","45","34",null,null);

                p.btnGrdRegi00.set_taborder("4");
                p.btnGrdRegi00.set_text("추가");
                p.btnGrdRegi00.set_cssclass("btn_WF_Small");
                p.btnGrdRegi00.set_visible("true");
                p.btnGrdRegi00.set_fittocontents("width");
                p.btnGrdRegi00.move("515.00","10","47","34",null,null);

                p.btnSave.set_taborder("8");
                p.btnSave.set_text("저장");
                p.btnSave.set_cssclass("btn_WF_Small");
                p.btnSave.set_visible("true");
                p.btnSave.set_fittocontents("width");
                p.btnSave.move("138.00","10","47","34",null,null);

                p.btnSave00.set_taborder("9");
                p.btnSave00.set_text("즉시저장");
                p.btnSave00.set_cssclass("btn_WF_Small");
                p.btnSave00.set_visible("true");
                p.btnSave00.set_fittocontents("width");
                p.btnSave00.move("197.00","10","71","34",null,null);
            	}
            );
            obj.set_verticalgap("20");
            obj.set_type("default");
            this.divForm.form.divGrd00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divGrd00.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divGrd00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.move("0","panGrdBtn:10","100.00%","310",null,null);

                p.grdMenu.move("1.00","96","100%","270",null,null);
            	}
            );
            obj.set_verticalgap("20");
            obj.set_type("default");
            this.divForm.form.divGrd00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div00.form.divEdtPop.form
            obj = new Layout("default","",0,0,this.divForm.form.Div00.form.divEdtPop.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Edit00.set_taborder("0");
                p.Edit00.set_cssclass("edt_WF_EdtSch");
                p.Edit00.set_readonly("true");
                p.Edit00.move("0","0",null,"40","0",null);

                p.btnPop.set_taborder("1");
                p.btnPop.set_cssclass("btn_WF_EdtSch");
                p.btnPop.move("Edit00:-40","0","40","40",null,null);
            	}
            );
            this.divForm.form.Div00.form.divEdtPop.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div00.form.divEdtPop.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div00.form.divEdtPop.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.Div00.form.divEdtPop.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div00.form
            obj = new Layout("default","",0,0,this.divForm.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.set_taborder("26");
                p.Panel00.move("0","0","100%","50",null,null);

                p.staSubTitle.set_taborder("0");
                p.staSubTitle.set_text("메뉴정보");
                p.staSubTitle.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle.set_flexgrow("1");
                p.staSubTitle.set_fittocontents("width");
                p.staSubTitle.move("0","0","80%","50",null,null);

                p.panGrdBtn00.set_taborder("25");
                p.panGrdBtn00.set_flexcrossaxisalign("center");
                p.panGrdBtn00.set_flexmainaxisalign("end");
                p.panGrdBtn00.set_fittocontents("width");
                p.panGrdBtn00.set_horizontalgap("10");
                p.panGrdBtn00.set_cssclass("pan_WF_Subtitle");
                p.panGrdBtn00.set_spacing("0px 20px 0px 0px");
                p.panGrdBtn00.move("1314","10","20%","50",null,null);

                p.pan00.set_taborder("1");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("0px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.move("0","60","100.00%","96",null,null);

                p.staLabel00.set_taborder("2");
                p.staLabel00.set_text("메뉴ID");
                p.staLabel00.set_cssclass("sta_WF_Label");
                p.staLabel00.move("10","98","100%","46",null,null);

                p.edt00.set_taborder("3");
                p.edt00.set_readonly("true");
                p.edt00.move("10.00","158","100%","40",null,null);

                p.pan00_01.set_taborder("4");
                p.pan00_01.set_type("vertical");
                p.pan00_01.set_flexgrow("1");
                p.pan00_01.set_minwidth("");
                p.pan00_01.move("10.00","98","300","86",null,null);

                p.staLabel00_01.set_taborder("5");
                p.staLabel00_01.set_text("메뉴명");
                p.staLabel00_01.set_cssclass("sta_WF_Label");
                p.staLabel00_01.move("10","98","100%","46",null,null);

                p.edt00_00.set_taborder("6");
                p.edt00_00.set_readonly("false");
                p.edt00_00.move("10.00","158","100%","40",null,null);

                p.pan00_02.set_taborder("7");
                p.pan00_02.set_type("vertical");
                p.pan00_02.set_flexgrow("1");
                p.pan00_02.set_minwidth("");
                p.pan00_02.move("10.00","98","300","86",null,null);

                p.staLabel01_00.set_taborder("8");
                p.staLabel01_00.set_text("메뉴순서");
                p.staLabel01_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00.move("10","98","100%","46",null,null);

                p.edt00_01.set_taborder("9");
                p.edt00_01.set_readonly("false");
                p.edt00_01.move("10.00","158","100%","40",null,null);

                p.pan01_01.set_taborder("10");
                p.pan01_01.set_type("vertical");
                p.pan01_01.set_flexgrow("1");
                p.pan01_01.move("10.00","98","300","86",null,null);

                p.pan01.set_taborder("11");
                p.pan01.set_horizontalgap("20");
                p.pan01.set_flexcrossaxiswrapalign("start");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_verticalgap("0");
                p.pan01.set_spacing("0px 20px 10px 20px");
                p.pan01.set_cssclass("pal_WF_DtlBg");
                p.pan01.set_flexshrink("1");
                p.pan01.set_fittocontents("height");
                p.pan01.move("0","60","100.00%","96",null,null);

                p.staLabel03_00.set_taborder("12");
                p.staLabel03_00.set_text("프로그램명");
                p.staLabel03_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00.move("10","98","100%","46",null,null);

                p.pan02_.set_taborder("13");
                p.pan02_.set_type("vertical");
                p.pan02_.set_flexgrow("1");
                p.pan02_.move("10.00","98","300","86",null,null);

                p.pan02.set_taborder("14");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.move("0","60","100%","96",null,null);

                p.TextArea00.set_taborder("27");
                p.TextArea00.move("80","420","100%","100",null,null);

                p.staLabel04_00.set_taborder("15");
                p.staLabel04_00.set_text("메뉴설명");
                p.staLabel04_00.set_cssclass("sta_WF_Label");
                p.staLabel04_00.move("10","98","100%","46",null,null);

                p.pan03_01.set_taborder("16");
                p.pan03_01.set_type("vertical");
                p.pan03_01.set_flexgrow("1");
                p.pan03_01.set_fittocontents("height");
                p.pan03_01.move("10.00","98","1380","146",null,null);

                p.pan03.set_taborder("17");
                p.pan03.set_horizontalgap("20");
                p.pan03.set_flexcrossaxiswrapalign("start");
                p.pan03.set_flexwrap("wrap");
                p.pan03.set_fittocontents("height");
                p.pan03.set_verticalgap("0");
                p.pan03.set_spacing("0px 20px 10px 20px");
                p.pan03.set_cssclass("pal_WF_DtlBg");
                p.pan03.move("0","60","100.00%","160",null,null);

                p.staLabel01_00_00_00.set_taborder("18");
                p.staLabel01_00_00_00.set_text("사용여부");
                p.staLabel01_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00_00_00.move("10","98","100%","46",null,null);

                p.Radio00_00.set_taborder("19");
                p.Radio00_00.set_fittocontents("width");
                p.Radio00_00.set_innerdataset(divForm_form_Div00_form_Radio00_00_innerdataset);
                p.Radio00_00.set_codecolumn("codecolumn");
                p.Radio00_00.set_datacolumn("datacolumn");
                p.Radio00_00.set_direction("vertical");
                p.Radio00_00.set_value("Y");
                p.Radio00_00.set_index("0");
                p.Radio00_00.move("127","203","280","40",null,null);

                p.Panel01_00_00.set_taborder("20");
                p.Panel01_00_00.set_type("vertical");
                p.Panel01_00_00.set_flexgrow("1");
                p.Panel01_00_00.move("10.00","98","305","86",null,null);

                p.staLabel03_00_00.set_taborder("21");
                p.staLabel03_00_00.set_text("메뉴URL");
                p.staLabel03_00_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00_00.move("10","98","100%","46",null,null);

                p.edt00_02_00.set_taborder("22");
                p.edt00_02_00.set_readonly("true");
                p.edt00_02_00.move("10.00","158","100%","40",null,null);

                p.pan02_00.set_taborder("23");
                p.pan02_00.set_type("vertical");
                p.pan02_00.set_flexgrow("1");
                p.pan02_00.move("10.00","98","300","86",null,null);

                p.btnGrdRegi00.set_taborder("24");
                p.btnGrdRegi00.set_text("확인");
                p.btnGrdRegi00.set_cssclass("btn_WF_SmallBlack");
                p.btnGrdRegi00.set_visible("false");
                p.btnGrdRegi00.set_fittocontents("width");
                p.btnGrdRegi00.move("1370.00","10","45","34",null,null);

                p.divEdtPop.set_taborder("28");
                p.divEdtPop.set_text("Div00");
                p.divEdtPop.set_formscrollbartype("none none");
                p.divEdtPop.set_formscrolltype("none");
                p.divEdtPop.set_flexgrow("1");
                p.divEdtPop.move("799.00","29","100%","40",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div00.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div00_00.form
            obj = new Layout("default","",0,0,this.divForm.form.Div00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.set_taborder("7");
                p.Panel00.move("0","0","100%","50",null,null);

                p.staSubTitle.set_taborder("0");
                p.staSubTitle.set_text("메뉴변경반영일자");
                p.staSubTitle.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle.set_flexgrow("1");
                p.staSubTitle.set_fittocontents("width");
                p.staSubTitle.move("0","0","80%","50",null,null);

                p.panGrdBtn00.set_taborder("6");
                p.panGrdBtn00.set_flexcrossaxisalign("center");
                p.panGrdBtn00.set_flexmainaxisalign("end");
                p.panGrdBtn00.set_fittocontents("width");
                p.panGrdBtn00.set_horizontalgap("10");
                p.panGrdBtn00.set_cssclass("pan_WF_Subtitle");
                p.panGrdBtn00.set_spacing("0px 20px 0px 0px");
                p.panGrdBtn00.move("1314","10","20%","50",null,null);

                p.pan00.set_taborder("1");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("0px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.move("0","60","100.00%","96",null,null);

                p.staLabel00.set_taborder("2");
                p.staLabel00.set_text("적용일자");
                p.staLabel00.set_cssclass("sta_WF_Label");
                p.staLabel00.move("10","98","100%","46",null,null);

                p.pan00_01.set_taborder("3");
                p.pan00_01.set_type("vertical");
                p.pan00_01.set_flexgrow("1");
                p.pan00_01.set_minwidth("");
                p.pan00_01.move("10.00","98","300","86",null,null);

                p.Calendar00.set_taborder("8");
                p.Calendar00.move("104","110","150","40",null,null);

                p.pan00_02.set_taborder("4");
                p.pan00_02.set_type("vertical");
                p.pan00_02.set_flexgrow("1");
                p.pan00_02.set_minwidth("");
                p.pan00_02.move("10.00","98","300","86",null,null);

                p.btnGrdRegi00.set_taborder("5");
                p.btnGrdRegi00.set_text("확인");
                p.btnGrdRegi00.set_cssclass("btn_WF_SmallBlack");
                p.btnGrdRegi00.set_visible("true");
                p.btnGrdRegi00.set_fittocontents("width");
                p.btnGrdRegi00.move("1370.00","10","45","34",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div00_00.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div00_00.form.addLayout(obj.name, obj);
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
                p.divSch.move("0","0","100.00%","180",null,null);

                p.panGrd.set_taborder("3");
                p.panGrd.set_horizontalgap("10");
                p.panGrd.move("0","138","100%","800",null,null);

                p.divGrd.set_taborder("1");
                p.divGrd.set_text("Div01");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.set_flexgrow("1");
                p.divGrd.move("0","210","630","800",null,null);

                p.divGrd00.set_taborder("2");
                p.divGrd00.set_text("Div01");
                p.divGrd00.set_formscrollbartype("none none");
                p.divGrd00.set_formscrolltype("none");
                p.divGrd00.set_flexgrow("1");
                p.divGrd00.move("710.00","228","630","800",null,null);

                p.Div00.set_taborder("4");
                p.Div00.set_text("Div00");
                p.Div00.set_cssclass("div_WF_Bg");
                p.Div00.set_fittocontents("height");
                p.Div00.move("0","900","100.00%","498",null,null);

                p.Div00_00.set_taborder("5");
                p.Div00_00.set_text("Div00");
                p.Div00_00.set_cssclass("div_WF_Bg");
                p.Div00_00.set_fittocontents("height");
                p.Div00_00.move("0","900","100.00%","146",null,null);

                p.Button00.set_taborder("6");
                p.Button00.set_cssclass("btn_WF_ShuttleL");
                p.Button00.set_visible("false");
                p.Button00.move("710.00","682","40","40",null,null);

                p.Button01.set_taborder("7");
                p.Button01.set_cssclass("btn_WF_Shuttle");
                p.Button01.move("710.00","742","40","40",null,null);

                p.btnShuttleR.set_taborder("8");
                p.btnShuttleR.set_cssclass("btn_WF_ShuttleR");
                p.btnShuttleR.set_visible("false");
                p.btnShuttleR.move("710.00","802","40","40",null,null);

                p.panShuttleBtn.set_taborder("9");
                p.panShuttleBtn.set_type("vertical");
                p.panShuttleBtn.set_flexcrossaxisalign("center");
                p.panShuttleBtn.set_verticalgap("10");
                p.panShuttleBtn.set_flexmainaxisalign("center");
                p.panShuttleBtn.move("647.00","562","60","800",null,null);
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
                p.divGrd.move("0","divSch:50","100%","441",null,null);

                p.divSch.set_text("Div00");
                p.divSch.set_fittocontents("height");
                p.divSch.move("0","0","100%","342",null,null);

                p.panGrd.set_type("vertical");
                p.panGrd.set_flexwrap("nowrap");
                p.panGrd.move("0","138","100%","799.93",null,null);

                p.panShuttleBtn.set_type("horizontal");
                p.panShuttleBtn.set_horizontalgap("10");
                p.panShuttleBtn.set_fittocontents("width");
                p.panShuttleBtn.move("647.00","562","100%","100",null,null);

                p.btnShuttleR.set_fittocontents("width");
                p.btnShuttleR.set_cssclass("btn_WF_ShuttleDown");

                p.divGrd00.move("710.00","228","100%","441.99",null,null);

                p.Button01.set_cssclass("btn_WF_ShuttleUD");

                p.Button00.set_cssclass("btn_WF_ShuttleUp");
            	}
            );
            obj.set_type("vertical");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_flexmainaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexcrossaxisalign("start");
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
            //-- Default Layout : this.divTitle
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1480,1320,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("메뉴관리");

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_formscrollbartype("none none");
                p.divForm.set_formscrolltype("none");
                p.divForm.set_fittocontents("height");
                p.divForm.set_maxwidth("");
                p.divForm.move("0","70",null,"1684","60",null);

                p.divGuide.set_taborder("1");
                p.divGuide.set_text("div00");
                p.divGuide.set_visible("false");
                p.divGuide.set_cssclass("div_GD_Tip");
                p.divGuide.move("1590.00","135","450","385",null,null);

                p.divTitle.set_taborder("2");
                p.divTitle.set_text("Div00");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.move("0","5",null,"50","60",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Phone_screen",480,600,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divForm.set_cssclass("div_WF_QuickFrBgM");
                p.divForm.move("0","0",null,"1855.92","0",null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.Div00.form.edt00","value","dsChgMenu","MENU_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.Div00.form.edt00_00","value","dsChgMenu","MENU_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.Div00.form.edt00_01","value","dsChgMenu","MENU_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.Div00.form.divEdtPop.form.Edit00","value","dsChgMenu","PRGRM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.Div00.form.edt00_02_00","value","dsChgMenu","MENU_URL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.Div00.form.TextArea00","value","dsChgMenu","MENU_EXPLN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.Div00.form.Radio00_00","value","dsChgMenu","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
        };
        
        // User Script
        this.addIncludeScript("COM024M02.xfdl","xjs::treegrid.xjs");
        this.registerScript("COM024M02.xfdl", function() {
        /**
        *  인천공항 원스톱 입주자서비스 프로젝트
        *  @FileName 	COM024M02.xfdl
        *  @Creator 	(주)이루온
        *  @CreateDate 	2024/09/02
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/09/02				김완성						최초생성
        *******************************************************************************
        */

        /**************************************************************************
         * include 영역
         **************************************************************************/
        this.executeIncludeScript("xjs::treegrid.xjs"); /*include "xjs::treegrid.xjs"*/;
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
        	this.fnInit(obj);
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	this.getMenuTransaction();
        };

        this.cfnClose = function() {
        	console.log('cfnClose');
        }
        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.getMenuTransaction = function() {

        	var strSvcId    = "search";
        	var strSvcUrl   = "sysMng/menuListInq.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsCurrMenu=dsCurrMenu dsChgMenu=dsChgMenu dsCal=dsCal";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        this.getMenuSaveTransaction = function() {

        	var strSvcId    = "save";
        	var strSvcUrl   = "sysMng/menuInfoStrg.do";
        	var inData      = "dsChgMenu=dsChgMenu";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        this.getMenuNowSaveTransaction = function() {

        	var strSvcId    = "save";
        	var strSvcUrl   = "sysMng/menuInfoNowStrg.do";
        	var inData      = "dsChgMenu=dsChgMenu";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        this.getCalSaveTransaction = function() {

        	var cal = this.divForm.form.Div00_00.form.Calendar00.value;

        	var strSvcId    = "cal_save";
        	var strSvcUrl   = "sysMng/menuInfoCalStrg.do";
        	var inData      = "";
        	var outData     = "";
        	var strArg      = "cal=" + cal;
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
        			var aplcnBgngDt = this.dsCal.getColumn(0, "aplcnBgngDt");
        			console.log(aplcnBgngDt);

        			this.divForm.form.Div00_00.form.Calendar00.value = aplcnBgngDt;

        			break;

        		case "save":
        			var gvRetMsg = this.objApp.getVariable("gvRetMsg");
        			this.gfnAlertMsg("save_complete", gvRetMsg, null, "msgCallback");
        			break;

        		case "cal_save":
        			var gvRetMsg = this.objApp.getVariable("gvRetMsg");
        			this.gfnAlertMsg("save_complete", gvRetMsg, null, "msgCallback");
        			break;

        	}
        };

        this.msgCallback = function(sPopupId, sRtn) {

        	var oRtn = JSON.parse(sRtn);

        	if(sPopupId == "del_confirm") {
        		if(oRtn.result == "Y") {
        			var menuLv = this.dsChgMenu.getColumn(this.dsChgMenu.rowposition, "MENU_LVL");
        			var menuId = this.dsChgMenu.getColumn(this.dsChgMenu.rowposition, "MENU_ID");
        			var childMenus = this.dsChgMenu.extractRows("UP_MENU_ID == '" + menuId + "'");

        			var arr = [];

        			if(menuLv != 2) {
        				for(var i=0; i < childMenus.length; i++) {
        					var cMenuId = this.dsChgMenu.getColumn(childMenus[i], "MENU_ID");
        					var cChildMenus = this.dsChgMenu.extractRows("UP_MENU_ID == '" + cMenuId + "'");

        					for(var ii=0;ii<cChildMenus.length;ii++) {
        						arr.push(cChildMenus[ii]);
        					}
        					arr.push(childMenus[i]);
        				}
        				arr.push(this.dsChgMenu.rowposition);
        			} else {
        				arr.push(this.dsChgMenu.rowposition);
        			}

        			this.dsChgMenu.deleteMultiRows(arr);
        		}
        	} else if(sPopupId == "save_confirm") {
        		this.getMenuSaveTransaction();
        	} else if(sPopupId == "cal_confirm") {
        		this.getCalSaveTransaction();
        	}
        };

        this.fnPopupCallback = function(sPopupId, sRtn)
        {
        	if(sPopupId =="popupSearch")
        	{
        		if (this.gfnIsNull(sRtn)) return;
        		var objRtn = JSON.parse(sRtn);
        		this.dsChgMenu.setColumn(this.divForm.form.divGrd00.form.grdMenu.getSelectedDatasetRows(), "PRGRM_ID", objRtn.prgrmId);
        		this.dsChgMenu.setColumn(this.divForm.form.divGrd00.form.grdMenu.getSelectedDatasetRows(), "PRGRM_NM", objRtn.prgrmNm);
        		this.dsChgMenu.setColumn(this.divForm.form.divGrd00.form.grdMenu.getSelectedDatasetRows(), "MENU_URL", objRtn.prgrmPathNm);
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function(obj) {
        	var objForm = obj;
        	var objConfig = {
        		orgGrid	: this.divForm.form.divGrd.form.grdMenu,
        		targetGrid : this.divForm.form.divGrd00.form.grdMenu,
        		levelColumn : "MENU_LVL",
        		option : "c"
        	}

        	this.fnInitForm(objForm,objConfig);
        	this.cfnSearch();
        };

        this.addMenu = function(ty) {
        	var sRow;
        	var sMooduleCd;
        	var sMenuId;
        	var sMenuLv;
        	var sMenuNm;
        	var sMenuUpMenuId;

        	if(ty == "root") {
        		var maxMenuId = this.dsChgMenu.getMax("MENU_ID");
        		sRow = this.dsChgMenu.insertRow(0);
        		sRow = nRow;
        		sMenuLv = 0;
        		sMenuId = "MNG_" + this.gfnLPad(((maxMenuId.replace("MNG_", ""))*1) + 1, "0", 10);

        		sMenuNm = "대메뉴";
        		sMenuUpMenuId = 0;

        		var maxMenuCd = this.dsChgMenu.getMax("MODULE_CD");
        		sMooduleCd = "MENU" + ((maxMenuCd.replace("MENU", "")*1)+1);

        	} else if(ty == "child") {
        		var menuLv = this.dsChgMenu.getColumn(this.dsChgMenu.rowposition, "MENU_LVL");
        		var menuId = this.dsChgMenu.getColumn(this.dsChgMenu.rowposition, "MENU_ID");
        		var moduleCd = this.dsChgMenu.getColumn(this.dsChgMenu.rowposition, "MODULE_CD");
        		var maxMenuId = this.dsChgMenu.getMax("MENU_ID");
        		var nextMenuId = 0;
        		var nMenuLv = menuLv + 1;
        		if(nMenuLv >= 3) {
        			this.gfnAlertMsg("child", "MSG01"); //최하위 메뉴에서는 추가 할수 없습니다.
        			return ;
        		}

        		var nRow = this.dsChgMenu.findRow("MENU_ID", menuId);

        		if(menuLv == 0) {
        			if(this.gfnIsNull(maxMenuId)) {
        				nextMenuId =  "MNG_" + this.gfnLPad(((menuId.replace("MNG_", ""))*1) + 1, "0", 10);
        			} else {
        				nextMenuId =  "MNG_" + this.gfnLPad(((maxMenuId.replace("MNG_", ""))*1) + 1, "0", 10);
        			}
        		} else if(menuLv == 1) {
        			if(this.gfnIsNull(maxMenuId)) {
        				nextMenuId =  "MNG_" + this.gfnLPad(((menuId.replace("MNG_", ""))*1) + 1, "0", 10);
        			} else {
        				nextMenuId =  "MNG_" + this.gfnLPad(((maxMenuId.replace("MNG_", ""))*1) + 1, "0", 10);
        			}
        		}

        		sRow = this.dsChgMenu.insertRow(nRow+1);
        		sMooduleCd = moduleCd;
        		sMenuId = nextMenuId;
        		sMenuLv = nMenuLv;
        		sMenuNm = "추가메뉴";
        		sMenuUpMenuId = menuId;
        	}

        	this.dsChgMenu.setColumn(sRow, "MODULE_CD", sMooduleCd);
        	this.dsChgMenu.setColumn(sRow, "MENU_ID", sMenuId);
        	this.dsChgMenu.setColumn(sRow, "MENU_LVL", sMenuLv);
        	this.dsChgMenu.setColumn(sRow, "MENU_NM", sMenuNm);
        	this.dsChgMenu.setColumn(sRow, "USE_YN", 'Y');
        	this.dsChgMenu.setColumn(sRow, "UP_MENU_ID", sMenuUpMenuId);
        	this.dsChgMenu.setColumn(sRow, "act", "0");

        };

        this.fnOpenSearchPop = function()
        {
        	var sTitle = "프로그램 검색 팝업";
        	var objArg   = {};

        	var objOption = {
        		popuptype: "modal"	//modal,modaless
        		, width: 1200
        		, height: 600			//width,height 지정하지 않음 popup form size적용
        		, autosize: false
        		, title: sTitle
        		, resize: false
        		, titlebar: true
        	};
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup("popupSearch", "work::COM/sysMng/COM024P02.xfdl", objArg, sPopupCallBack, objOption);
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divForm_divGrd00_btnGrdRegi_onclick = function(obj,e)
        {
        	this.addMenu('root');
        };

        this.divForm_divGrd00_btnGrdRegi00_onclick = function(obj,e)
        {
        	this.addMenu('child');
        };

        this.divForm_divGrd00_btnGrdDel_onclick = function(obj,e)
        {
        	this.gfnConfirmMsg("del_confirm", "MSG_005", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        };

        this.divForm_divGrd00_btnSave_onclick = function(obj,e)
        {
        	if (this.gfnDsIsUpdated(this.dsChgMenu) == false) {
        		this.gfnAlertMsg("noChg", "MSG_001");
        		return;
        	}

        	this.gfnConfirmMsg("save_confirm", "MSG_002", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        };

        this.divForm_Div00_00_btnGrdRegi00_onclick = function(obj,e)
        {
        	this.gfnConfirmMsg("cal_confirm", "MSG_002", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        };

        this.divForm_Div00_divEdtPop_btnPop_onclick = function(obj,e)
        {
        	this.fnOpenSearchPop();
        };

        this.divForm_divGrd00_btnSave00_onclick = function(obj,e)
        {
        	this.getMenuNowSaveTransaction();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.divSch.form.staLabel02.addEventHandler("onclick",this.divForm_Div00_sta00_00_01_01_onclick,this);
            this.divForm.form.divGrd.form.Static00.addEventHandler("onclick",this.divForm_divGrd_Static00_onclick,this);
            this.divForm.form.divGrd00.form.btnGrdRegi.addEventHandler("onclick",this.divForm_divGrd00_btnGrdRegi_onclick,this);
            this.divForm.form.divGrd00.form.Static00.addEventHandler("onclick",this.divForm_divGrd_Static00_onclick,this);
            this.divForm.form.divGrd00.form.btnGrdDel.addEventHandler("onclick",this.divForm_divGrd00_btnGrdDel_onclick,this);
            this.divForm.form.divGrd00.form.btnGrdRegi00.addEventHandler("onclick",this.divForm_divGrd00_btnGrdRegi00_onclick,this);
            this.divForm.form.divGrd00.form.btnSave.addEventHandler("onclick",this.divForm_divGrd00_btnSave_onclick,this);
            this.divForm.form.divGrd00.form.btnSave00.addEventHandler("onclick",this.divForm_divGrd00_btnSave00_onclick,this);
            this.divForm.form.Div00.form.Radio00_00.addEventHandler("onitemchanged",this.divForm_Div00_Radio00_00_onitemchanged,this);
            this.divForm.form.Div00.form.divEdtPop.form.btnPop.addEventHandler("onclick",this.divForm_Div00_divEdtPop_btnPop_onclick,this);
            this.divForm.form.Div00_00.form.btnGrdRegi00.addEventHandler("onclick",this.divForm_Div00_00_btnGrdRegi00_onclick,this);
        };
        this.loadIncludeScript("COM024M02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
