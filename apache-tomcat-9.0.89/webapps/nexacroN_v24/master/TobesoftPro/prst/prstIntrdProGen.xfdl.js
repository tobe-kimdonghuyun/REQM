(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("prstIntrdProGen");
            this.set_titletext("ProGen");
            this.getSetter("uResetScroll").set("true");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,4138);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divWorkContents","0","0",null,"4138","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("div_Contents01","0","0",null,"500","0",null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_url("design::06_ProGen_Title.xfdl");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","529","172","1000","50",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("1");
            obj.set_text("ProGen과 기존 MVC 방식 개발비교");
            obj.set_cssclass("sta_MF_TitleL");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new WebView("WebView00","1156","1021","100%","562",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("2");
            obj.set_url("https://www.youtube.com/embed/X4Z-0XBiN8I?si=A_fbebwyurbVCFIV");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","0","120","1000","700",null,null,null,"1000",null,null,this.divWorkContents.form);
            obj.set_taborder("3");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("50");
            obj.set_fittocontents("height");
            obj.set_flexmainaxisalign("center");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Static00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"WebView00\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","10","10","100%","820",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("4");
            obj.set_spacing("120px 0px 0px 0px");
            obj.set_flexmainaxisalign("center");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("panel_Contents02","0","div_Contents01:0",null,"820","0",null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("5");
            obj.set_type("horizontal");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"StaMargin02_01\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00\"/><PanelItem id=\"PanelItem03\" componentid=\"StaMargin02_02\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_02","10","1500","640","100",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("6");
            obj.set_text("개발 생산성 및 \r\n소스 코드 품질 향상");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_MF_TitleLeftL");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_01","1617","1110","1000","90",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("7");
            obj.set_text("반복적인 코딩 작업을 줄여 업무 개발 시간을 단축하고, 자동 생성된 소스를\r\n통해 품질 일관성을 유지하여 테스트와 유지보수를 간소화합니다.");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_MF_BodyM");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel04_00_01","633","10","600","340",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("8");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("20");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Static00_03_01_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_01_00_01\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","1518","2500","300","340",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("9");
            obj.set_flexgrow("1");
            obj.set_image("url(\'theme://images/img_WF_Item01.png\')");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00","10","187","1000","340",null,null,null,"1000",null,null,this.divWorkContents.form);
            obj.set_taborder("10");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            obj.set_horizontalgap("20");
            obj.set_verticalgap("20");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem04\" componentid=\"Panel04_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"ImageViewer00\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00","10","10","100%","460",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("11");
            obj.set_spacing("120px 0px 60px 0px");
            obj.set_flexmainaxisalign("center");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_00\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("panel_Contents03","0","panel_Contents02:0",null,"420","0",null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("12");
            obj.set_type("horizontal");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"StaMargin03_01\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"StaMargin03_02\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_02_00","10","1500","640","50",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("13");
            obj.set_text("다양한 시스템 환경 지원");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_MF_TitleLeftL");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_01_01","1627","1120","1000","90",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("14");
            obj.set_text("프로젝트 표준에 맞춘 커스터마이징으로\r\n다양한 환경의 시스템 구축에 쉽게 적용 가능합니다.");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_MF_BodyM");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel04_00_01_01","643","20","600","340",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("15");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("20");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Static00_03_01_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_01_00_01_01\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00_01","1528","2510","300","340",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("16");
            obj.set_flexgrow("1");
            obj.set_image("url(\'theme://images/img_WF_Item01.png\')");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00_01","20","197","1000","340",null,null,null,"1000",null,null,this.divWorkContents.form);
            obj.set_taborder("17");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            obj.set_horizontalgap("20");
            obj.set_verticalgap("20");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem04\" componentid=\"Panel04_00_01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"ImageViewer00_01\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_01","20","20","100%","460",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("18");
            obj.set_flexmainaxisalign("center");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_00_01\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("panel_Contents04","0","panel_Contents03:0",null,"420","0",null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("19");
            obj.set_type("horizontal");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"StaMargin04_01\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_01\"/><PanelItem id=\"PanelItem03\" componentid=\"StaMargin04_02\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_01_00","20","1510","640","50",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("20");
            obj.set_text("UI 소스 분석 후 산출물 자동 생성");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_MF_TitleLeftL");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_01_00","1637","1130","1000","90",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("21");
            obj.set_text("화면설계서 자동 생성으로 비용과 시간을 절약하고,\r\n소스 점검 및 테스트 케이스 작성에 활용할 수 있습니다.");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_MF_BodyM");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel04_00_01_00","653","30","600","340",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("22");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("20");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Static00_03_01_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_01_00_01_00\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00_00","1538","2520","300","340",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("23");
            obj.set_flexgrow("1");
            obj.set_image("url(\'theme://images/img_WF_Item01.png\')");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00_00","30","207","1000","340",null,null,null,"1000",null,null,this.divWorkContents.form);
            obj.set_taborder("24");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            obj.set_horizontalgap("20");
            obj.set_verticalgap("20");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem04\" componentid=\"Panel04_00_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"ImageViewer00_00\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00","30","30","100%","460",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("25");
            obj.set_spacing("60px 0px 120px 0px");
            obj.set_flexmainaxisalign("center");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_00_00\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("panel_Contents05","0","panel_Contents04:0",null,"420","0",null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("26");
            obj.set_type("horizontal");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"StaMargin05_01\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"StaMargin05_02\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00_02","0","0","100%","106",null,null,"270",null,null,null,this.divWorkContents.form);
            obj.set_taborder("27");
            obj.set_imagealign("left");
            obj.set_stretch("fixaspectratio");
            obj.set_image("url(\'theme://images/img_WF_BottomTitle04.svg\')");
            obj.set_text("");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Button("btnEXPERIEN","0",null,"120","52",null,"0",null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("28");
            obj.set_text("체험하기");
            obj.set_visible("false");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Button("btnINQUIRY","20",null,"120","52",null,"0",null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("29");
            obj.set_text("문의하기");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel00_04","0","348","274","52",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("30");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnEXPERIEN\"/><PanelItem id=\"PanelItem01\" componentid=\"btnINQUIRY\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel01_04","0","100","1000","182",null,null,null,"1000",null,null,this.divWorkContents.form);
            obj.set_taborder("31");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("24");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"ImageViewer00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_04\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel09_00","0","100","100%","372",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("32");
            obj.set_flexmainaxisalign("center");
            obj.set_spacing("100px 0px 90px 0px");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_04\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("panel_Contents06","0","panel_Contents05:0",null,"532","0",null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("102");
            obj.set_background("#E2E6ED");
            obj.set_fittocontents("height");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"StaMargin06_01\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel18\"/><PanelItem id=\"PanelItem03\" componentid=\"StaMargin06_02\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("panel_Contents07","0","panel_Contents06:0",null,"654","0",null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("79");
            obj.set_type("horizontal");
            obj.set_fittocontents("height");
            obj.set_background("#D5DAE2");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"StaMargin07_01\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel07_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"StaMargin07_02\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("panel_Contents08","0","panel_Contents07:0",null,"372","0",null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("33");
            obj.set_type("horizontal");
            obj.set_background("#18181A");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"StaMargin08_01\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel09_00\"/><PanelItem id=\"PanelItem03\" componentid=\"StaMargin08_02\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00_00","1510","2935","173","48",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("34");
            obj.set_text("적용 프로세스");
            obj.set_cssclass("sta_WF_TitleLabelGray");
            obj.set_fittocontents("both");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel14_00_00","10","10","1000","48",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("35");
            obj.set_flexmainaxisalign("center");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_02_00_00_00\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_07","1394","3087","470","48",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("36");
            obj.set_text("분석/설계 단계");
            obj.set_cssclass("sta_WF_ProcessTitle01");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_02","10","10","103","42",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("37");
            obj.set_text("표준 정의");
            obj.set_cssclass("sta_WF_ProcessSubTitle");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel21","6","6","1000","42",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("38");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_02\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_00","94","165","1000","22",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("39");
            obj.set_text("JAVA 개발 표준");
            obj.set_cssclass("sta_WF_ProcessBody");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_01","94","174","1000","22",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("40");
            obj.set_text("SQL 개발 표준");
            obj.set_cssclass("sta_WF_ProcessBody");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","94","183","1000","22",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("41");
            obj.set_text("UI 개발 표준");
            obj.set_cssclass("sta_WF_ProcessBody");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_03","94","192","1000","22",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("42");
            obj.set_text("UI 화면 패턴");
            obj.set_cssclass("sta_WF_ProcessBody");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","44","115","220","158",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("43");
            obj.set_type("horizontal");
            obj.set_verticalgap("12");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Static00_02_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Static00_03\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_00","10","3000","234","242",null,null,null,null,"242",null,this.divWorkContents.form);
            obj.set_taborder("44");
            obj.set_flexwrap("wrap");
            obj.set_spacing("6px 6px 20px 6px");
            obj.set_verticalgap("16");
            obj.set_flexgrow("1");
            obj.set_cssclass("pnl_WF_ProcessSubBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel21\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00","10","10","190","42",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("45");
            obj.set_text("ProGen 커스터마이징");
            obj.set_cssclass("sta_WF_ProcessSubTitle");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel22","16","16","1000","42",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("46");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_04_00","128","128","1000","22",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("47");
            obj.set_text("UI 화면 패턴 및 개발 표준 적용");
            obj.set_cssclass("sta_WF_ProcessBody");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","128","156","1000","19",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("48");
            obj.set_text("* 전문 컨설턴트 투입 필요");
            obj.set_cssclass("sta_WF_ProcessCaptionRed");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel01","128","128","100%","47",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("49");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("6");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_04_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_00_01\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_04_00_01","128","156","1000","22",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("50");
            obj.set_text("용어 적용 및 UI 컴포넌트 매핑");
            obj.set_cssclass("sta_WF_ProcessBody");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_01","348","128","1000","19",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("51");
            obj.set_text("* DB 테이블 추가 필요");
            obj.set_cssclass("sta_WF_ProcessCaptionRed");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel01_01","138","138","100%","47",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("52");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("6");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_04_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_00_01_01\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel02","128","128","440","158",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("53");
            obj.set_verticalgap("10");
            obj.set_flexwrap("nowrap");
            obj.set_fittocontents("height");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel00","1454","3275","232","242",null,null,null,null,"242",null,this.divWorkContents.form);
            obj.set_taborder("54");
            obj.set_spacing("6px 6px 20px 6px");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("16");
            obj.set_cssclass("pnl_WF_ProcessSubBg");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel22\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel04","1369","3200","1000","242",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("55");
            obj.set_horizontalgap("6");
            obj.set_verticalgap("6");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel06","1369","3200","495","316",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("56");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("6");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_cssclass("pnl_WF_ProcessBg");
            obj.set_spacing("10px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Static00_07\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel04\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_07_00","1404","3097","470","48",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("57");
            obj.set_text("분석/설계 단계");
            obj.set_cssclass("sta_WF_ProcessTitle02");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_08","20","20","190","42",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("58");
            obj.set_text("업무 개발(ProGen)");
            obj.set_cssclass("sta_WF_ProcessSubTitle");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel22_00","26","26","1000","42",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("59");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_08\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_04_00_02","138","138","1000","22",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("60");
            obj.set_text("템플릿 선택");
            obj.set_cssclass("sta_WF_ProcessBody");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_02","138","166","1000","19",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("61");
            obj.set_text("데이터 모델 구성(SQL)");
            obj.set_cssclass("sta_WF_ProcessBody");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_04_00_01_00","138","166","1000","22",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("62");
            obj.set_text("UI 화면 Design");
            obj.set_cssclass("sta_WF_ProcessBody");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_01_00_00","10","3500","1000","30",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("63");
            obj.set_text("Java Service 정의");
            obj.set_cssclass("sta_WF_ProcessBody");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_01_00","358","138","1000","19",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("64");
            obj.set_text("소스 확인 후 생성");
            obj.set_cssclass("sta_WF_ProcessBody");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel02_01","138","138","440","158",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("65");
            obj.set_verticalgap("10");
            obj.set_flexwrap("nowrap");
            obj.set_fittocontents("height");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Static00_04_00_02\"/><PanelItem id=\"PanelItem00\" componentid=\"Static00_00_01_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Static00_04_00_01_00\"/><PanelItem id=\"PanelItem05\" componentid=\"Static00_00_01_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_00_01_01_00\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel00_03","1464","3285","232","242",null,null,null,null,"242",null,this.divWorkContents.form);
            obj.set_taborder("66");
            obj.set_spacing("6px 6px 20px 6px");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("16");
            obj.set_cssclass("pnl_WF_ProcessSubBg");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel22_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02_01\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_02_01","10","10","165","42",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("67");
            obj.set_text("비즈니스 로직 추가");
            obj.set_cssclass("sta_WF_ProcessSubTitle");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel21_00","36","36","1000","42",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("68");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_02_01\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_00_02","94","165","1000","44",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("69");
            obj.set_text("필요한 비즈니스 로직 추가는\r\n생성된 소스에 직접 수정");
            obj.set_cssclass("sta_WF_ProcessBody");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_01_01","94","174","1000","19",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("70");
            obj.set_text("* DB 테이블 추가 필요");
            obj.set_cssclass("sta_WF_ProcessCaption");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel25","0","0","333","69",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("71");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("6");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_01_01\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01","54","125","220","158",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("72");
            obj.set_type("horizontal");
            obj.set_verticalgap("12");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel25\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_00_00","20","3010","234","242",null,null,null,null,"242",null,this.divWorkContents.form);
            obj.set_taborder("73");
            obj.set_flexwrap("wrap");
            obj.set_spacing("6px 6px 20px 6px");
            obj.set_verticalgap("16");
            obj.set_flexgrow("1");
            obj.set_cssclass("pnl_WF_ProcessSubBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel21_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00_01\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel04_00","1379","3210","1000","242",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("74");
            obj.set_horizontalgap("6");
            obj.set_verticalgap("6");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel00_03\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel01_02_00_00\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel07","30","3000","495","316",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("75");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("6");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_cssclass("pnl_WF_ProcessBg");
            obj.set_spacing("10px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Static00_07_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel04_00\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel08","1369","3200","1000","316",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("76");
            obj.set_horizontalgap("10");
            obj.set_verticalgap("10");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel06\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel07\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00","86","130","1000","414",null,null,null,"1000",null,null,this.divWorkContents.form);
            obj.set_taborder("77");
            obj.set_verticalgap("50");
            obj.set_flexgrow("1");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("center");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel14_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel08\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel07_00_00","76","120","100%","654",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("78");
            obj.set_fittocontents("height");
            obj.set_flexmainaxisalign("center");
            obj.set_spacing("120px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_01_00_00\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00_00_00","1924","3202","200","48",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("80");
            obj.set_text("적용 범위 및 효과");
            obj.set_cssclass("sta_WF_TitleLabelGray");
            obj.set_fittocontents("both");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel19","413","20","1000","48",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("81");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_02_00_00_00_00\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static02","1610","3244","120","42",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("82");
            obj.set_text("시스템 구축 (SI)");
            obj.set_cssclass("sta_WF_ProcessTitle03");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static01","1544","3325","1000","22",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("83");
            obj.set_text("분석");
            obj.set_cssclass("sta_WF_ProcessSubTitle02");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static01_01","1544","3375","1000","44",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("84");
            obj.set_text("화면 정의 도구로\r\n요구사항 분석");
            obj.set_cssclass("sta_WF_ProcessBody");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel12","1544","3325","120","76",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("85");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static01\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_01\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static01_00","1904","3325","1000","22",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("86");
            obj.set_text("설계");
            obj.set_cssclass("sta_WF_ProcessSubTitle02");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","1904","3375","1000","44",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("87");
            obj.set_text("화면설계서 자동 생성으로\r\n문서 작업 간소화");
            obj.set_cssclass("sta_WF_ProcessBody");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel11","1904","3325","120","76",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("88");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_00_01\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","2278","3327","1000","22",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("89");
            obj.set_text("개발");
            obj.set_cssclass("sta_WF_ProcessSubTitle02");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","2278","3377","1000","44",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("90");
            obj.set_text("소스 자동 생성으로\r\n품질 및 개발 속도 향상");
            obj.set_cssclass("sta_WF_ProcessBody");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel10","2278","3327","120","76",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("91");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_00_00_01\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel13","1544","3325","640","126",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("92");
            obj.set_flexwrap("wrap");
            obj.set_spacing("20px 14px 30px 14px");
            obj.set_horizontalgap("20");
            obj.set_verticalgap("20");
            obj.set_cssclass("pnl_WF_ProcessSubBg");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel12\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel11\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel10\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel16","1544","3325","220","194",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("93");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("6");
            obj.set_fittocontents("height");
            obj.set_flexgrow("4");
            obj.set_spacing("10px");
            obj.set_cssclass("pnl_WF_ProcessBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Static02\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel13\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static02_00","2300","3244","1000","42",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("94");
            obj.set_text("시스템 운영 (SM)");
            obj.set_cssclass("sta_WF_ProcessTitle04");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","2660","3323","1000","22",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("95");
            obj.set_text("운영");
            obj.set_cssclass("sta_WF_ProcessSubTitle03");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","2660","3373","1000","44",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("96");
            obj.set_text("일관된 품질 유지 및\r\n신속한 운영 대응");
            obj.set_cssclass("sta_WF_ProcessBody");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel09","2660","3323","190","76",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("97");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static01_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_00_00_00_00\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel14","2660","3323","1000","126",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("98");
            obj.set_flexwrap("wrap");
            obj.set_spacing("20px 14px 30px 14px");
            obj.set_horizontalgap("20");
            obj.set_verticalgap("10");
            obj.set_cssclass("pnl_WF_ProcessSubBg");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel09\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel15","2300","3244","220","194",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("99");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("6");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_spacing("10px");
            obj.set_cssclass("pnl_WF_ProcessBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel14\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel17","1544","3325","1000","194",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("100");
            obj.set_horizontalgap("20");
            obj.set_verticalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel16\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel15\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel18","1544","3325","100%","532",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("101");
            obj.set_flexmainaxisalign("center");
            obj.set_verticalgap("50");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_spacing("120px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel03\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("StaMargin02_01","-44","1050","5.00%","60",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("103");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("StaMargin02_02","1226","1180","5.00%","60",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("104");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("StaMargin03_01","-32","1800","5.00%","60",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("105");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("StaMargin03_02","1256","1850","5.00%","60",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("106");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("StaMargin04_01","-32","2140","5.00%","60",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("107");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("StaMargin04_02","1256","2220","5.00%","60",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("108");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("StaMargin05_01","-24","2660","5.00%","60",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("109");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("StaMargin05_02","1204","2700","5.00%","60",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("110");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("StaMargin06_01","-2","3166","5.00%","60",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("111");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("StaMargin06_02","1266","3262","5.00%","60",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("112");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("StaMargin07_01","0","3500","5.00%","60",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("113");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("StaMargin07_02","1256","3524","5.00%","60",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("114");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("StaMargin08_01","-22","4172","5.00%","60",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("115");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("StaMargin08_02","1246","4150","5.00%","60",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("116");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel03","0","120","1000","292",null,null,null,"1000",null,null,this.divWorkContents.form);
            obj.set_taborder("117");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("50");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel19\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel17\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Div("div_Contents01_00","0","0",null,"500","0",null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("118");
            obj.set_text("Div00");
            obj.set_url("design::06_ProGen_Title.xfdl");
            obj.set_visible("false");
            this.divWorkContents.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divWorkContents.form.div_Contents01
            obj = new Layout("default","",0,0,this.divWorkContents.form.div_Contents01.form,function(p){});
            this.divWorkContents.form.div_Contents01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divWorkContents.form.div_Contents01_00
            obj = new Layout("default","",0,0,this.divWorkContents.form.div_Contents01_00.form,function(p){});
            this.divWorkContents.form.div_Contents01_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divWorkContents.form
            obj = new Layout("default","",0,0,this.divWorkContents.form,function(p){});
            this.divWorkContents.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Mobile_screen",1280,4138,this,function(p){});
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
            this._addPreloadList("fdl","design::06_ProGen_Title.xfdl");
        };
        
        // User Script
        this.registerScript("prstIntrdProGen.xfdl", function() {
        /**
        *  devPro
        *  @FileName 	prstIntrdProGen.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2024/11/07
        *  @Description
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/11/07			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fxProGenParam			= "PRG";
        this.fvInquiryCd			= "INQUIRY";	// 문의하기

        this.objApp = nexacro.getApplication();
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this); //필수함수
        	this.objApp.gvCurrMenu = this.fxProGenParam;
        	this.fnSetImage();
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
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
        this.fnResize = function(nX, nY)
        {
        	if(this.gfnIsNull(nX)) nX = this.divWorkContents.getOffsetWidth();
        	if(this.gfnIsNull(nY)) nY = this.divWorkContents.getOffsetHeight();

        	var objM = this.divWorkContents.form.div_Contents01_00;
        	var objP = this.divWorkContents.form.div_Contents01;

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
        	var objM = this.divWorkContents.form.div_Contents01_00;
        	var objP = this.divWorkContents.form.div_Contents01;

        	var sStyle = objM._control_element.handle.style;

        	sStyle.backgroundImage ="url('"+sUrlPrefix+"TobesoftPro/images/img_MF_ProGenM.png')";
        	sStyle.backgroundSize = "cover";
        	sStyle.backgroundPosition = "center";

        	sStyle = objP._control_element.handle.style;

        	sStyle.backgroundImage ="url('"+sUrlPrefix+"TobesoftPro/images/img_MF_ProGen.png')";
        	sStyle.backgroundSize = "cover";
        	sStyle.backgroundPosition = "center";

        	this.fnResize();
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divProGenContents_divContents01_btnComm_onclick = function(obj,e)
        {
        	this.objApp.gvBase.form.fnFormOpen(obj, this.fxProGenParam, this.fvInquiryCd);
        };

        this.divWorkContents_div_Contents01_onsize = this.gfnDebounce(function(obj, e)
        {
        	var nX = obj.getOffsetWidth();
        	var nY = obj.getOffsetHeight();

        	this.fnResize(nX, nY);
        }, 30);

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divWorkContents.form.div_Contents01.addEventHandler("onsize",this.divWorkContents_div_Contents01_onsize,this);
            this.divWorkContents.form.Static00_02_00_00_00.addEventHandler("onclick",this.Static00_02_00_onclick,this);
            this.divWorkContents.form.Static00_02_00_00_00_00.addEventHandler("onclick",this.Static00_02_00_onclick,this);
            this.divWorkContents.form.div_Contents01_00.addEventHandler("onsize",this.divWorkContents_div_Contents01_onsize,this);
        };
        this.loadIncludeScript("prstIntrdProGen.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
