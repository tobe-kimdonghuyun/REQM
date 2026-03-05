(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmMain");
            this.set_titletext("main");
            this.set_background("#F3F7FA");
            this.getSetter("floatingDiv").set("divMain.form.divContentsFOpen");
            this.getSetter("uResetScroll").set("true");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,4483);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_Main","0","0",null,"4483","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Div("div_Contents01","0","0",null,"900","0",null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("0");
            obj.set_text("Main");
            obj.getSetter("uImageP").set("");
            obj.getSetter("uImageM").set("");
            obj.set_formscrollbartype("none none");
            this.div_Main.addChild(obj.name, obj);

            obj = new Div("Div00","0","0",null,null,"0","0",null,null,null,null,this.div_Main.form.div_Contents01.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_url("design::03_Main_Title.xfdl");
            this.div_Main.form.div_Contents01.addChild(obj.name, obj);

            obj = new Panel("panel_Contents02","0","div_Contents01:0",null,"741","0",null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"StaMargin02_01\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel\"/><PanelItem id=\"PanelItem01\" componentid=\"StaMargin02_02\"/></Contents>");
            this.div_Main.addChild(obj.name, obj);

            obj = new Static("Static00_01","282","105","291","81",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("2");
            obj.set_text("컨설팅 그룹 소개");
            obj.set_cssclass("sta_MF_ImgTitle");
            obj.set_fittocontents("height");
            this.div_Main.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","292","115","600","90",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("3");
            obj.set_text("투비소프트 컨설팅 그룹은 25년 동안 7,000건 이상의 프로젝트 노하우를 바탕으로 독자 개발한 TSO 방법론을 활용한 UI·UX 구현을 위한 전문 컨설팅 서비스를 제안하고, 디지털 전환을 쉽고 빠르게 실현할 수 있는 Pro 시리즈 솔루션을 제공합니다.");
            obj.set_cssclass("sta_MF_BodyM");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            this.div_Main.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","282","105","1040","90",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("4");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("20");
            obj.set_verticalgap("20");
            obj.set_spacing("0px 20px");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_00_00\"/></Contents>");
            this.div_Main.addChild(obj.name, obj);

            obj = new Static("Static00_04","50","34","1000","50",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("5");
            obj.set_text("TSO 방법론을 활용한\r\nUI·UX 컨설팅으로");
            obj.set_cssclass("sta_MF_ConBlueR");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.div_Main.addChild(obj.name, obj);

            obj = new Static("Static00_00_03","40","10","203","31",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("6");
            obj.set_text("표준화된 UI·UX 구현");
            obj.set_cssclass("sta_MF_ConBlueEB");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.div_Main.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","40","10","43","31",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_ContentsBlueExtraBold");
            obj.set_flexgrow("1");
            this.div_Main.addChild(obj.name, obj);

            obj = new Panel("Panel00_03","40","84","1000","31",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("8");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_00_03\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_00_00_00\"/></Contents>");
            this.div_Main.addChild(obj.name, obj);

            obj = new Panel("Panel01_03","50","34","300","139",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("9");
            obj.set_flexwrap("wrap");
            obj.set_spacing("24px 40px");
            obj.set_verticalgap("10");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_cssclass("pnl_MF_ConBox");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_04\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_03\"/></Contents>");
            this.div_Main.addChild(obj.name, obj);

            obj = new Static("Static00_03","40","24","1000","50",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("10");
            obj.set_text("TOBESOFT Pro 시리즈\n솔루션으로");
            obj.set_cssclass("sta_MF_ConBlueR");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.div_Main.addChild(obj.name, obj);

            obj = new Static("Static00_00_02","40","10","1000","31",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("11");
            obj.set_text("효율성과 생산성을 극대화");
            obj.set_cssclass("sta_MF_ConBlueEB");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.div_Main.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","40","24","300","139",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("12");
            obj.set_flexwrap("wrap");
            obj.set_spacing("24px 40px");
            obj.set_verticalgap("10");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_cssclass("pnl_MF_ConBox");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_03\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_00_02\"/></Contents>");
            this.div_Main.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","297","270","1040","179",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("13");
            obj.set_horizontalgap("10");
            obj.set_verticalgap("10");
            obj.set_spacing("20px");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel01_03\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_01\"/></Contents>");
            this.div_Main.addChild(obj.name, obj);

            obj = new Panel("Panel03_00","282","105","1040","285",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("14");
            obj.set_type("horizontal");
            obj.set_verticalgap("16");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00\"/></Contents>");
            this.div_Main.addChild(obj.name, obj);

            obj = new Static("Static01_13_00","345","565","24","44",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_MF_ServiceItem01");
            this.div_Main.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","395","685","147","22",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("16");
            obj.set_text("UX Research");
            obj.set_cssclass("sta_MF_ServiceItem");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.div_Main.addChild(obj.name, obj);

            obj = new Panel("Panel10_00","40","10","147","66",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("17");
            obj.set_flexwrap("wrap");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("15");
            obj.set_verticalgap("0");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static01_13_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static02_00_00\"/></Contents>");
            this.div_Main.addChild(obj.name, obj);

            obj = new Static("Static01_13_00_00","355","575","24","44",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_MF_ServiceItem02");
            this.div_Main.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","405","695","147","22",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("19");
            obj.set_text("Data Analytics");
            obj.set_cssclass("sta_MF_ServiceItem");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.div_Main.addChild(obj.name, obj);

            obj = new Panel("Panel10_00_00","50","20","147","66",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("20");
            obj.set_flexwrap("wrap");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("15");
            obj.set_verticalgap("0");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static01_13_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static02_00_00_00\"/></Contents>");
            this.div_Main.addChild(obj.name, obj);

            obj = new Static("Static01_13_00_01","365","585","24","44",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_MF_ServiceItem03");
            this.div_Main.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01","415","705","147","22",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("22");
            obj.set_text("UX Consulting");
            obj.set_cssclass("sta_MF_ServiceItem");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.div_Main.addChild(obj.name, obj);

            obj = new Panel("Panel10_00_01","60","30","147","66",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("23");
            obj.set_flexwrap("wrap");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("15");
            obj.set_verticalgap("0");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static01_13_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Static02_00_00_01\"/></Contents>");
            this.div_Main.addChild(obj.name, obj);

            obj = new Static("Static01_13_00_02","375","595","24","44",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_MF_ServiceItem04");
            this.div_Main.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_02","425","715","147","22",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("25");
            obj.set_text("UX·UI Design");
            obj.set_cssclass("sta_MF_ServiceItem");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.div_Main.addChild(obj.name, obj);

            obj = new Panel("Panel10_00_02","70","40","147","66",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("26");
            obj.set_flexwrap("wrap");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("15");
            obj.set_verticalgap("0");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static01_13_00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Static02_00_00_02\"/></Contents>");
            this.div_Main.addChild(obj.name, obj);

            obj = new Static("Static01_13_00_03","385","605","24","44",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_MF_ServiceItem05");
            this.div_Main.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_03","435","725","147","22",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("28");
            obj.set_text("Design System");
            obj.set_cssclass("sta_MF_ServiceItem");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.div_Main.addChild(obj.name, obj);

            obj = new Panel("Panel10_00_03","80","50","147","66",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("29");
            obj.set_flexwrap("wrap");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("15");
            obj.set_verticalgap("0");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static01_13_00_03\"/><PanelItem id=\"PanelItem01\" componentid=\"Static02_00_00_03\"/></Contents>");
            this.div_Main.addChild(obj.name, obj);

            obj = new Static("Static01_13_00_04","395","615","24","44",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_MF_ServiceItem06");
            this.div_Main.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_04","395","685","147","44",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("31");
            obj.set_text("Development\r\nStandards");
            obj.set_cssclass("sta_MF_ServiceItem");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.div_Main.addChild(obj.name, obj);

            obj = new Panel("Panel10_00_04","90","60","147","88",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("32");
            obj.set_flexwrap("wrap");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("15");
            obj.set_verticalgap("0");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static01_13_00_04\"/><PanelItem id=\"PanelItem01\" componentid=\"Static02_00_00_04\"/></Contents>");
            this.div_Main.addChild(obj.name, obj);

            obj = new Static("Static01_13_00_04_00","405","625","24","44",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_MF_ServiceItem07");
            this.div_Main.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_04_00","405","695","147","44",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("34");
            obj.set_text("Nexacro\r\nArchitecture");
            obj.set_cssclass("sta_MF_ServiceItem");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.div_Main.addChild(obj.name, obj);

            obj = new Panel("Panel10_00_04_00","100","70","147","88",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("35");
            obj.set_flexwrap("wrap");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("15");
            obj.set_verticalgap("0");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static01_13_00_04_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static02_00_00_04_00\"/></Contents>");
            this.div_Main.addChild(obj.name, obj);

            obj = new Static("Static01_13_00_04_01","415","635","24","44",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_MF_ServiceItem08");
            this.div_Main.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_04_01","415","705","147","44",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("37");
            obj.set_text("Nexacro UI-\r\nDevelopment");
            obj.set_cssclass("sta_MF_ServiceItem");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.div_Main.addChild(obj.name, obj);

            obj = new Panel("Panel10_00_04_01","110","80","147","88",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("38");
            obj.set_flexwrap("wrap");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("15");
            obj.set_verticalgap("0");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static01_13_00_04_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Static02_00_00_04_01\"/></Contents>");
            this.div_Main.addChild(obj.name, obj);

            obj = new Static("Static01_13_00_04_02","425","645","24","44",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_MF_ServiceItem09");
            this.div_Main.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_04_02","425","715","147","44",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("40");
            obj.set_text("Accessibility\r\nConsulting");
            obj.set_cssclass("sta_MF_ServiceItem");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.div_Main.addChild(obj.name, obj);

            obj = new Panel("Panel10_00_04_02","120","90","147","88",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("41");
            obj.set_flexwrap("wrap");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("15");
            obj.set_verticalgap("0");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static01_13_00_04_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Static02_00_00_04_02\"/></Contents>");
            this.div_Main.addChild(obj.name, obj);

            obj = new Static("Static01_13_00_04_03","435","655","24","44",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_MF_ServiceItem10");
            this.div_Main.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_04_03","435","725","147","44",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("43");
            obj.set_text("Nexacro\r\nEducation");
            obj.set_cssclass("sta_MF_ServiceItem");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.div_Main.addChild(obj.name, obj);

            obj = new Panel("Panel10_00_04_03","130","100","147","88",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("44");
            obj.set_flexwrap("wrap");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("15");
            obj.set_verticalgap("0");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static01_13_00_04_03\"/><PanelItem id=\"PanelItem01\" componentid=\"Static02_00_00_04_03\"/></Contents>");
            this.div_Main.addChild(obj.name, obj);

            obj = new Panel("Panel11","40","10","1000","196",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("45");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("20");
            obj.set_spacing("0px 30px");
            obj.set_verticalgap("30");
            obj.set_flexmainaxisalign("spacebetween");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel10_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel10_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel10_00_01\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel10_00_02\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel10_00_03\"/><PanelItem id=\"PanelItem05\" componentid=\"Panel10_00_04\"/><PanelItem id=\"PanelItem06\" componentid=\"Panel10_00_04_00\"/><PanelItem id=\"PanelItem07\" componentid=\"Panel10_00_04_01\"/><PanelItem id=\"PanelItem08\" componentid=\"Panel10_00_04_02\"/><PanelItem id=\"PanelItem09\" componentid=\"Panel10_00_04_03\"/></Contents>");
            this.div_Main.addChild(obj.name, obj);

            obj = new Panel("Panel04","0","0","1040","501",null,null,null,"1040",null,null,this.div_Main.form);
            obj.set_taborder("46");
            obj.set_type("horizontal");
            obj.set_verticalgap("20");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel03_00\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel11\"/></Contents>");
            this.div_Main.addChild(obj.name, obj);

            obj = new Panel("Panel","0","div_Contents01:0","100%","741",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("47");
            obj.set_type("horizontal");
            obj.set_fittocontents("height");
            obj.set_flexmainaxisalign("center");
            obj.set_spacing("120px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel04\"/></Contents>");
            this.div_Main.addChild(obj.name, obj);

            obj = new Static("Static00","210","92","400","31",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("48");
            obj.set_text("컨설팅 통합 표준 TSO 방법론이란?");
            obj.set_cssclass("sta_MF_TitleS");
            obj.set_fittocontents("both");
            obj.set_wordWrap("char");
            this.div_Main.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","358","0","920","60",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("49");
            obj.set_text("고객 경험 UX 기반으로 최적화된 UI를 구현하고, 안정된 공동개발 표준을 준수하여 비즈니스 가치 실현을 위한 UX/UI 컨설팅 통합 표준 프로세스 방법론으로 프로젝트 전 과정을 효율적이고 일관되게 관리하여 최종 사용자 경험을 극대화합니다.");
            obj.set_cssclass("sta_MF_BodyM");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            this.div_Main.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00","10","1000","400","19",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("50");
            obj.set_text("*TSO : TOBESOFT Standard consulting Organization");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_MF_Caption03");
            this.div_Main.addChild(obj.name, obj);

            obj = new Panel("Panel00_02","210","92","920","134",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("51");
            obj.set_type("horizontal");
            obj.set_verticalgap("12");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel05\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_00_01\"/></Contents>");
            this.div_Main.addChild(obj.name, obj);

            obj = new Div("Div01","1328","1385","100%","370",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("52");
            obj.set_text("Div01");
            obj.set_flexgrow("1");
            obj.set_url("design::03_Main_TSO.xfdl");
            this.div_Main.addChild(obj.name, obj);

            obj = new Panel("Panel02_01","40","50","100%","543",null,null,null,"920",null,null,this.div_Main.form);
            obj.set_taborder("53");
            obj.set_verticalgap("40");
            obj.set_flexwrap("wrap");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_tablecellarea("0/1");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_02\"/><PanelItem id=\"PanelItem03\" componentid=\"Div01\"/></Contents>");
            this.div_Main.addChild(obj.name, obj);

            obj = new Panel("Panel03","50","60","920","643",null,null,null,"1000",null,null,this.div_Main.form);
            obj.set_taborder("54");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_type("table");
            obj.set_tabletemplate("1* / 4% 1* 4%");
            obj.set_flexmainaxisalign("center");
            obj.set_spacing("50px 0px");
            obj.set_background("#E9F0F6");
            obj.set_borderRadius("20px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_01\"/></Contents>");
            this.div_Main.addChild(obj.name, obj);

            obj = new Panel("Panel05_01","0","115","100%","763",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("55");
            obj.set_fittocontents("height");
            obj.set_flexwrap("nowrap");
            obj.set_flexmainaxisalign("center");
            obj.set_spacing("0px 0px 120px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel03\"/></Contents>");
            this.div_Main.addChild(obj.name, obj);

            obj = new Panel("panel_Contents03","0","panel_Contents02:0",null,"763","0",null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("56");
            obj.set_type("horizontal");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"StaMargin03_01\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel05_01\"/><PanelItem id=\"PanelItem02\" componentid=\"StaMargin03_02\"/></Contents>");
            this.div_Main.addChild(obj.name, obj);

            obj = new Static("Static00_00","529","172","1000","100",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("57");
            obj.set_text("컨설팅 그룹이 만든\nTOBESOFT Pro 시리즈가 궁금하다면?");
            obj.set_cssclass("sta_MF_TitleWhiteL");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.div_Main.addChild(obj.name, obj);

            obj = new Button("btnUXPRO","228","297","230","378",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("58");
            obj.set_text("기획/디자인/퍼블리싱/개발\n넥사크로 표준화 솔루션");
            obj.set_flexgrow("1");
            obj.set_cssclass("btn_MF_UXPro");
            this.div_Main.addChild(obj.name, obj);

            obj = new Button("btnDEVPRO","238","307","230","378",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("59");
            obj.set_text("검증된 기술력으로 완성된\r\n풀스텍 개발환경 솔루션");
            obj.set_flexgrow("1");
            obj.set_cssclass("btn_MF_DevPro");
            this.div_Main.addChild(obj.name, obj);

            obj = new Button("btnPROGEN","248","317","230","378",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("60");
            obj.set_text("코드 작성 대신 클릭만으로 자동 완성되는\n풀스택 로우코드 플러그인");
            obj.set_flexgrow("1");
            obj.set_cssclass("btn_MF_ProGen");
            this.div_Main.addChild(obj.name, obj);

            obj = new Panel("Panel00","228","297","1000","378",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("61");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_verticalgap("10");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnUXPRO\"/><PanelItem id=\"PanelItem01\" componentid=\"btnDEVPRO\"/><PanelItem id=\"PanelItem02\" componentid=\"btnPROGEN\"/></Contents>");
            this.div_Main.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","120","1000","552",null,null,null,"1000",null,null,this.div_Main.form);
            obj.set_taborder("62");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("80");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Static00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel00\"/></Contents>");
            this.div_Main.addChild(obj.name, obj);

            obj = new Panel("Panel02","10","10","100%","798",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("63");
            obj.set_spacing("120px 0px");
            obj.set_flexmainaxisalign("center");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01\"/></Contents>");
            this.div_Main.addChild(obj.name, obj);

            obj = new Panel("panel_Contents04","0","panel_Contents03:0",null,"798","0",null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("64");
            obj.set_type("horizontal");
            obj.set_fittocontents("height");
            obj.set_background("url(\'theme::TobesoftPro/images/img_MF_ConBg02.png\') no-repeat right center /cover");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"StaMargin04_01\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel02\"/><PanelItem id=\"PanelItem03\" componentid=\"StaMargin04_02\"/></Contents>");
            this.div_Main.addChild(obj.name, obj);

            obj = new Static("Static00_02","0","0","811","100",null,null,null,"837",null,null,this.div_Main.form);
            obj.set_taborder("65");
            obj.set_text("많은 기업이 7,000여 프로젝트의 풍부한 노하우가 집약된 Pro 시리즈와 함께하고 있습니다 ");
            obj.set_cssclass("sta_MF_TitleWhiteL");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.div_Main.addChild(obj.name, obj);

            obj = new Static("Static01","1328","2514","1000","20",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("66");
            obj.set_flexgrow("1");
            obj.set_cssclass("sta_MF_Line");
            this.div_Main.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01_10","170","3340","140","60",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("67");
            obj.set_image("url(\'theme://images/img_WF_Logo12.svg\')");
            obj.set_stretch("fixaspectratio");
            this.div_Main.addChild(obj.name, obj);

            obj = new Static("Static01_10","204","3458","1000","20",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("68");
            obj.set_text("코트라");
            obj.set_flexgrow("1");
            obj.set_cssclass("sta_MF_Caption");
            this.div_Main.addChild(obj.name, obj);

            obj = new Panel("Panel06_10","280","3450","152","80",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("69");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("center");
            obj.set_spacing("0");
            obj.set_verticalgap("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"ImageViewer01_10\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_10\"/></Contents>");
            this.div_Main.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01_09","180","3350","140","60",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("70");
            obj.set_image("url(\'theme://images/img_WF_Logo11.svg\')");
            obj.set_stretch("fixaspectratio");
            this.div_Main.addChild(obj.name, obj);

            obj = new Static("Static01_09","214","3468","1000","20",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("71");
            obj.set_text("한세실업");
            obj.set_flexgrow("1");
            obj.set_cssclass("sta_MF_Caption");
            this.div_Main.addChild(obj.name, obj);

            obj = new Panel("Panel06_09","270","3440","152","80",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("72");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("center");
            obj.set_spacing("0");
            obj.set_verticalgap("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"ImageViewer01_09\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_09\"/></Contents>");
            this.div_Main.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01_01","190","3360","140","60",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("73");
            obj.set_image("url(\'theme://images/img_WF_Logo03.svg\')");
            obj.set_stretch("fixaspectratio");
            this.div_Main.addChild(obj.name, obj);

            obj = new Static("Static01_01","224","3478","1000","20",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("74");
            obj.set_text("농협물류");
            obj.set_flexgrow("1");
            obj.set_cssclass("sta_MF_Caption");
            this.div_Main.addChild(obj.name, obj);

            obj = new Panel("Panel06_01","190","3360","152","80",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("75");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("center");
            obj.set_spacing("0");
            obj.set_verticalgap("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"ImageViewer01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_01\"/></Contents>");
            this.div_Main.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01_05","200","3370","140","60",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("76");
            obj.set_image("url(\'theme://images/img_WF_Logo07.svg\')");
            obj.set_stretch("fixaspectratio");
            this.div_Main.addChild(obj.name, obj);

            obj = new Static("Static01_05","234","3488","1000","20",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("77");
            obj.set_text("농협사료");
            obj.set_flexgrow("1");
            obj.set_cssclass("sta_MF_Caption");
            this.div_Main.addChild(obj.name, obj);

            obj = new Panel("Panel06_05","230","3400","152","80",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("78");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("center");
            obj.set_spacing("0");
            obj.set_verticalgap("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"ImageViewer01_05\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_05\"/></Contents>");
            this.div_Main.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01_00","210","3380","140","60",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("79");
            obj.set_image("url(\'theme://images/img_WF_Logo02.svg\')");
            obj.set_stretch("fixaspectratio");
            this.div_Main.addChild(obj.name, obj);

            obj = new Static("Static01_00","244","3498","1000","20",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("80");
            obj.set_text("다비치");
            obj.set_flexgrow("1");
            obj.set_cssclass("sta_MF_Caption");
            this.div_Main.addChild(obj.name, obj);

            obj = new Panel("Panel06_00","180","3350","152","80",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("81");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("center");
            obj.set_spacing("0");
            obj.set_verticalgap("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"ImageViewer01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_00\"/></Contents>");
            this.div_Main.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01_02","220","3390","140","60",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("82");
            obj.set_image("url(\'theme://images/img_WF_Logo04.svg\')");
            obj.set_stretch("fixaspectratio");
            this.div_Main.addChild(obj.name, obj);

            obj = new Static("Static01_02","254","3508","1000","20",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("83");
            obj.set_text("한국투자저축은행");
            obj.set_flexgrow("1");
            obj.set_cssclass("sta_MF_Caption");
            this.div_Main.addChild(obj.name, obj);

            obj = new Panel("Panel06_02","200","3370","152","80",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("84");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("center");
            obj.set_spacing("0");
            obj.set_verticalgap("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"ImageViewer01_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_02\"/></Contents>");
            this.div_Main.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01_03","230","3400","140","60",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("85");
            obj.set_image("url(\'theme://images/img_WF_Logo05.svg\')");
            obj.set_stretch("fixaspectratio");
            this.div_Main.addChild(obj.name, obj);

            obj = new Static("Static01_03","264","3518","1000","20",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("86");
            obj.set_text("한국항공대학교");
            obj.set_flexgrow("1");
            obj.set_cssclass("sta_MF_Caption");
            this.div_Main.addChild(obj.name, obj);

            obj = new Panel("Panel06_03","210","3380","152","80",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("87");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("center");
            obj.set_spacing("0");
            obj.set_verticalgap("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"ImageViewer01_03\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_03\"/></Contents>");
            this.div_Main.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01_04","240","3410","140","60",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("88");
            obj.set_image("url(\'theme://images/img_WF_Logo06.svg\')");
            obj.set_stretch("fixaspectratio");
            this.div_Main.addChild(obj.name, obj);

            obj = new Static("Static01_04","274","3528","1000","20",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("89");
            obj.set_text("고려제강");
            obj.set_flexgrow("1");
            obj.set_cssclass("sta_MF_Caption");
            this.div_Main.addChild(obj.name, obj);

            obj = new Panel("Panel06_04","220","3390","152","80",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("90");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("center");
            obj.set_spacing("0");
            obj.set_verticalgap("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"ImageViewer01_04\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_04\"/></Contents>");
            this.div_Main.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01_06","250","3420","140","60",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("91");
            obj.set_image("url(\'theme://images/img_WF_Logo08.svg\')");
            obj.set_stretch("fixaspectratio");
            this.div_Main.addChild(obj.name, obj);

            obj = new Static("Static01_06","284","3538","1000","20",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("92");
            obj.set_text("삼영기업");
            obj.set_flexgrow("1");
            obj.set_cssclass("sta_MF_Caption");
            this.div_Main.addChild(obj.name, obj);

            obj = new Panel("Panel06_06","240","3410","152","80",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("93");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("center");
            obj.set_spacing("0");
            obj.set_verticalgap("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"ImageViewer01_06\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_06\"/></Contents>");
            this.div_Main.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01","260","3430","140","60",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("94");
            obj.set_image("url(\'theme://images/img_WF_Logo01.svg\')");
            obj.set_stretch("fixaspectratio");
            this.div_Main.addChild(obj.name, obj);

            obj = new Static("Static01_07","294","3548","1000","20",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("95");
            obj.set_text("유니슨");
            obj.set_flexgrow("1");
            obj.set_cssclass("sta_MF_Caption");
            this.div_Main.addChild(obj.name, obj);

            obj = new Panel("Panel06","170","3340","152","80",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("96");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("center");
            obj.set_spacing("0");
            obj.set_verticalgap("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"ImageViewer01\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_07\"/></Contents>");
            this.div_Main.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01_07","270","3440","140","60",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("97");
            obj.set_image("url(\'theme://images/img_WF_Logo09.svg\')");
            obj.set_stretch("fixaspectratio");
            this.div_Main.addChild(obj.name, obj);

            obj = new Static("Static01_07_00","304","3558","1000","20",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("98");
            obj.set_text("씨알엠소프트");
            obj.set_flexgrow("1");
            obj.set_cssclass("sta_MF_Caption");
            this.div_Main.addChild(obj.name, obj);

            obj = new Panel("Panel06_07","250","3420","152","80",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("99");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("center");
            obj.set_spacing("0");
            obj.set_verticalgap("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"ImageViewer01_07\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_07_00\"/></Contents>");
            this.div_Main.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01_12_00","280","3450","140","60",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("100");
            obj.set_image("url(\'theme://images/img_WF_Logo14.svg\')");
            obj.set_stretch("fixaspectratio");
            this.div_Main.addChild(obj.name, obj);

            obj = new Static("Static01_12_00","314","3568","1000","20",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("101");
            obj.set_text("지트");
            obj.set_flexgrow("1");
            obj.set_cssclass("sta_MF_Caption");
            this.div_Main.addChild(obj.name, obj);

            obj = new Panel("Panel06_12_00","717","6000","152","80",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("102");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("center");
            obj.set_spacing("0");
            obj.set_verticalgap("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"ImageViewer01_12_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_12_00\"/></Contents>");
            this.div_Main.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01_11","290","3460","140","60",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("103");
            obj.set_image("url(\'theme://images/img_WF_Logo13.svg\')");
            obj.set_stretch("fixaspectratio");
            this.div_Main.addChild(obj.name, obj);

            obj = new Static("Static01_11","324","3578","1000","20",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("104");
            obj.set_text("한국컨테이너풀");
            obj.set_flexgrow("1");
            obj.set_cssclass("sta_MF_Caption");
            this.div_Main.addChild(obj.name, obj);

            obj = new Panel("Panel06_11","290","3460","152","80",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("105");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("center");
            obj.set_spacing("0");
            obj.set_verticalgap("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"ImageViewer01_11\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_11\"/></Contents>");
            this.div_Main.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01_08","300","3470","140","60",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("106");
            obj.set_image("url(\'theme://images/img_WF_Logo10.svg\')");
            obj.set_stretch("fixaspectratio");
            this.div_Main.addChild(obj.name, obj);

            obj = new Static("Static01_08","334","3588","1000","20",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("107");
            obj.set_text("디에이치");
            obj.set_flexgrow("1");
            obj.set_cssclass("sta_MF_Caption");
            this.div_Main.addChild(obj.name, obj);

            obj = new Panel("Panel06_08","260","3430","152","80",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("108");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("center");
            obj.set_spacing("0");
            obj.set_verticalgap("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"ImageViewer01_08\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_08\"/></Contents>");
            this.div_Main.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01_12","310","3480","140","60",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("109");
            obj.set_image("url(\'theme://images/img_WF_Logo15.svg\')");
            obj.set_stretch("fixaspectratio");
            this.div_Main.addChild(obj.name, obj);

            obj = new Static("Static01_12","344","3598","1000","20",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("110");
            obj.set_text("월드소프트");
            obj.set_flexgrow("1");
            obj.set_cssclass("sta_MF_Caption");
            this.div_Main.addChild(obj.name, obj);

            obj = new Panel("Panel06_12","300","3470","152","80",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("111");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("center");
            obj.set_spacing("0");
            obj.set_verticalgap("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"ImageViewer01_12\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_12\"/></Contents>");
            this.div_Main.addChild(obj.name, obj);

            obj = new Panel("Panel08","763","3333","1000","320",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("112");
            obj.set_flexmainaxisalign("spacebetween");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("40");
            obj.set_horizontalgap("20");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem14\" componentid=\"Panel06_10\"/><PanelItem id=\"PanelItem11\" componentid=\"Panel06_09\"/><PanelItem id=\"PanelItem06\" componentid=\"Panel06_01\"/><PanelItem id=\"PanelItem10\" componentid=\"Panel06_05\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel06_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel06_02\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel06_03\"/><PanelItem id=\"PanelItem05\" componentid=\"Panel06_04\"/><PanelItem id=\"PanelItem07\" componentid=\"Panel06_06\"/><PanelItem id=\"PanelItem12\" componentid=\"Panel06\"/><PanelItem id=\"PanelItem08\" componentid=\"Panel06_07\"/><PanelItem id=\"PanelItem15\" componentid=\"Panel06_12_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel06_11\"/><PanelItem id=\"PanelItem09\" componentid=\"Panel06_08\"/><PanelItem id=\"PanelItem13\" componentid=\"Panel06_12\"/></Contents>");
            this.div_Main.addChild(obj.name, obj);

            obj = new Panel("Panel01_01","76","120","1000","669",null,null,null,"1000",null,null,this.div_Main.form);
            obj.set_taborder("113");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("30");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Static01\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel08\"/></Contents>");
            this.div_Main.addChild(obj.name, obj);

            obj = new Panel("Panel07","76","120","100%","909",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("114");
            obj.set_fittocontents("height");
            obj.set_flexmainaxisalign("center");
            obj.set_spacing("120px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_01\"/></Contents>");
            this.div_Main.addChild(obj.name, obj);

            obj = new Panel("panel_Contents05","0","panel_Contents04:0",null,"909","0",null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("115");
            obj.set_type("horizontal");
            obj.set_fittocontents("height");
            obj.set_background("#242C3D");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"StaMargin05_01\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel07\"/><PanelItem id=\"PanelItem03\" componentid=\"StaMargin05_02\"/></Contents>");
            this.div_Main.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","0","0","100%","106",null,null,"270",null,null,null,this.div_Main.form);
            obj.set_taborder("116");
            obj.set_imagealign("left");
            obj.set_stretch("fixaspectratio");
            obj.set_image("url(\'theme://images/img_WF_BottomTitle01.svg\')");
            this.div_Main.addChild(obj.name, obj);

            obj = new Button("btnEXPERIEN","0",null,"120","52",null,"0",null,null,null,null,this.div_Main.form);
            obj.set_taborder("117");
            obj.set_text("체험하기");
            this.div_Main.addChild(obj.name, obj);

            obj = new Button("btnINQUIRY","20",null,"120","52",null,"0",null,null,null,null,this.div_Main.form);
            obj.set_taborder("118");
            obj.set_text("문의하기");
            this.div_Main.addChild(obj.name, obj);

            obj = new Panel("Panel00_04","0","348","274","52",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("119");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnEXPERIEN\"/><PanelItem id=\"PanelItem01\" componentid=\"btnINQUIRY\"/></Contents>");
            this.div_Main.addChild(obj.name, obj);

            obj = new Panel("Panel01_04","0","100","1000","182",null,null,null,"1000",null,null,this.div_Main.form);
            obj.set_taborder("120");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("24");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"ImageViewer00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_04\"/></Contents>");
            this.div_Main.addChild(obj.name, obj);

            obj = new Panel("Panel09","0","100","100%","372",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("121");
            obj.set_flexmainaxisalign("center");
            obj.set_spacing("100px 0px 90px 0px");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_04\"/></Contents>");
            this.div_Main.addChild(obj.name, obj);

            obj = new Panel("panel_Contents06","0","panel_Contents05:0",null,"372","0",null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("122");
            obj.set_type("horizontal");
            obj.set_background("#18181A");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"StaMargin06_01\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel09\"/><PanelItem id=\"PanelItem03\" componentid=\"StaMargin06_02\"/></Contents>");
            this.div_Main.addChild(obj.name, obj);

            obj = new Static("StaMargin02_01","-50","1245","5.00%","60",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("123");
            obj.set_visible("true");
            this.div_Main.addChild(obj.name, obj);

            obj = new Static("StaMargin02_02","40","1307","5.00%","60",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("124");
            obj.set_visible("true");
            this.div_Main.addChild(obj.name, obj);

            obj = new Static("StaMargin03_02","1235","790","5%","60",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("125");
            obj.set_visible("true");
            this.div_Main.addChild(obj.name, obj);

            obj = new Static("StaMargin03_01","-10","820","5%","60",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("126");
            obj.set_visible("true");
            this.div_Main.addChild(obj.name, obj);

            obj = new Static("StaMargin04_01","-30","2900","5.00%","60",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("127");
            obj.set_visible("true");
            this.div_Main.addChild(obj.name, obj);

            obj = new Static("StaMargin04_02","1230","3107","5.00%","60",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("128");
            obj.set_visible("true");
            this.div_Main.addChild(obj.name, obj);

            obj = new Static("StaMargin05_01","-10","3370","5.00%","60",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("129");
            obj.set_visible("true");
            this.div_Main.addChild(obj.name, obj);

            obj = new Static("StaMargin05_02","1222","3402","5.00%","60",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("130");
            obj.set_visible("true");
            this.div_Main.addChild(obj.name, obj);

            obj = new Static("StaMargin06_01","-32","4240","5.00%","60",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("131");
            obj.set_visible("true");
            this.div_Main.addChild(obj.name, obj);

            obj = new Static("StaMargin06_02","1260","4170","5.00%","60",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("132");
            obj.set_visible("true");
            this.div_Main.addChild(obj.name, obj);

            obj = new Panel("Panel05","0","0","920","31",null,null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("133");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_horizontalgap("12");
            obj.set_flexcrossaxisalign("end");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_00_01_00\"/></Contents>");
            this.div_Main.addChild(obj.name, obj);

            obj = new Div("div_Contents01_00","0","0",null,"900","0",null,null,null,null,null,this.div_Main.form);
            obj.set_taborder("134");
            obj.set_text("Main");
            obj.getSetter("uImageP").set("");
            obj.getSetter("uImageM").set("");
            obj.set_visible("false");
            this.div_Main.addChild(obj.name, obj);

            obj = new Div("Div00","0","0",null,null,"0","0",null,null,null,null,this.div_Main.form.div_Contents01_00.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_url("design::03_Main_Title.xfdl");
            this.div_Main.form.div_Contents01_00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_Main.form.div_Contents01.form.Div00
            obj = new Layout("default","",0,0,this.div_Main.form.div_Contents01.form.Div00.form,function(p){});
            this.div_Main.form.div_Contents01.form.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_Main.form.div_Contents01.form
            obj = new Layout("default","",0,0,this.div_Main.form.div_Contents01.form,function(p){});
            this.div_Main.form.div_Contents01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_Main.form.Div01
            obj = new Layout("default","",0,0,this.div_Main.form.Div01.form,function(p){});
            this.div_Main.form.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_Main.form.div_Contents01_00.form.Div00
            obj = new Layout("default","",0,0,this.div_Main.form.div_Contents01_00.form.Div00.form,function(p){});
            this.div_Main.form.div_Contents01_00.form.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_Main.form.div_Contents01_00.form
            obj = new Layout("default","",0,0,this.div_Main.form.div_Contents01_00.form,function(p){});
            this.div_Main.form.div_Contents01_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_Main.form
            obj = new Layout("default","",0,0,this.div_Main.form,function(p){});
            this.div_Main.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Mobile_screen",1280,4483,this,function(p){});
            obj.set_horizontalgap("0");
            obj.set_mobileorientation("landscape");
            obj.set_spacing("0px");
            obj.set_tabletemplate("1* / 1*");
            obj.set_verticalgap("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","design::03_Main_Title.xfdl");
            this._addPreloadList("fdl","design::03_Main_TSO.xfdl");
        };
        
        // User Script
        this.registerScript("prstMain.xfdl", function() {
        /**
        *  proPortal
        *  @FileName 	prstMain.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2025/02/25
        *  @Description
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2025/02/25			TOBESOFT					최초생성
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
        	this.fnSetImage();

        	this.div_Main.form.Div01.set_fittocontents("height");
        	this.div_Main.form.Div01.form.resetScroll();
        	this.div_Main.form.resetScroll();
        	this.gfnFormOnLoad(this);
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        // 배경 Resize
        this.fnResize = function(nX)
        {
        	if(this.gfnIsNull(nX)) nX = this.div_Main.getOffsetWidth();

        	if(this.gfnIsNull(this.div_Main)) return;
        	var objM = this.div_Main.form.div_Contents01_00;
        	var objP = this.div_Main.form.div_Contents01;

        	if(nX < this.objApp.gvMobileSize) {
        		objM.set_visible(true);
        		objP.set_visible(false);
        	} else {
        		objM.set_visible(false);
        		objP.set_visible(true);
        	}
        };

        // 메인 배경 이미지 세팅
        this.fnSetImage = function()
        {
        	var sUrlPrefix = nexacro._project_url + "_resource_/_theme_/";
        	var objM = this.div_Main.form.div_Contents01_00;
        	var sStyle = objM._control_element.handle.style;

        	sStyle.backgroundImage ="url('"+sUrlPrefix+"TobesoftPro/images/img_MF_MainM.png')";
        	sStyle.backgroundSize = "cover";
        	sStyle.backgroundPosition = "center";

        	var objP = this.div_Main.form.div_Contents01;
        	sStyle = objP._control_element.handle.style;

        	sStyle.backgroundImage ="url('"+sUrlPrefix+"TobesoftPro/images/img_MF_Main.png')";
        	sStyle.backgroundSize = "cover";
        	sStyle.backgroundPosition = "center";

        	this.fnResize();
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        // 소개 사이트 이동
        this.introButtons_onclick = function(obj,e)
        {
        	var sMenuNm =  obj.name.replace(/^btn/, "");
        	this.objApp.gvIntroType = sMenuNm;
        	this.objApp.gvBase.form.fnFormOpen(sMenuNm);

        	this.gfnTopButtonClickCss(obj.id);
        };

        this.div_Main_div_Contents01_onsize = this.gfnDebounce(function(obj,e) {
        	var nX = obj.getOffsetWidth();
        	this.fnResize(nX);
        }, 10);

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_Main.form.div_Contents01.addEventHandler("onsize",this.div_Main_div_Contents01_onsize,this);
            this.div_Main.form.Panel00_02.addEventHandler("onclick",this.div_Main_Panel00_02_onclick,this);
            this.div_Main.form.btnUXPRO.addEventHandler("onclick",this.introButtons_onclick,this);
            this.div_Main.form.btnDEVPRO.addEventHandler("onclick",this.introButtons_onclick,this);
            this.div_Main.form.btnPROGEN.addEventHandler("onclick",this.introButtons_onclick,this);
            this.div_Main.form.Static00_02.addEventHandler("onclick",this.Static00_02_onclick,this);
            this.div_Main.form.div_Contents01_00.addEventHandler("onsize",this.div_Main_div_Contents01_onsize,this);
        };
        this.loadIncludeScript("prstMain.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
