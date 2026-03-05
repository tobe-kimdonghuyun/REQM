(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("prstIntrdDevPro");
            this.set_titletext("DevPro");
            this.set_scrolltype("none");
            this.getSetter("uResetScroll").set("true");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,4935);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divWorkContents","0","0",null,"4935","0",null,null,null,null,null,this);
            obj.set_fittocontents("height");
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Div("div_Contents01","0","0",null,"500","0",null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Div("Div00","0","0",null,null,"0","0",null,null,null,null,this.divWorkContents.form.div_Contents01.form);
            obj.set_taborder("0");
            obj.set_url("design::05_DevPro_Title.xfdl");
            this.divWorkContents.form.div_Contents01.addChild(obj.name, obj);

            obj = new Panel("panel_Contents02","0","div_Contents01:0",null,"1334","0",null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("1");
            obj.set_type("horizontal");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"StaMargin02_01\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00\"/><PanelItem id=\"PanelItem03\" componentid=\"StaMargin02_02\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("panel_Contents03","0","panel_Contents02:0",null,"420","0",null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("2");
            obj.set_type("horizontal");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"StaMargin03_01\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"StaMargin03_02\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("panel_Contents04","0","panel_Contents03:0",null,"540","0",null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("3");
            obj.set_type("horizontal");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"StaMargin04_01\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_01_00\"/><PanelItem id=\"PanelItem03\" componentid=\"StaMargin04_02\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Div("div_Contents05","0","panel_Contents04:0",null,"907","0",null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("4");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_url("design::05_DevPro_Diagram.xfdl");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("panel_Contents06","0","div_Contents05:0",null,"862","0",null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("5");
            obj.set_type("horizontal");
            obj.set_fittocontents("height");
            obj.set_background("#3E73F1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"StaMargin06_01\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel07\"/><PanelItem id=\"PanelItem03\" componentid=\"StaMargin06_02\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("panel_Contents07","0","panel_Contents06:0",null,"372","0",null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("6");
            obj.set_type("horizontal");
            obj.set_background("#18181A");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"StaMargin07_01\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel09_00\"/><PanelItem id=\"PanelItem03\" componentid=\"StaMargin07_02\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","529","172","1000","50",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("7");
            obj.set_text("초기 개발 환경 설치와 지원으로 개발을 빠르게");
            obj.set_cssclass("sta_MF_TitleL");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_03","1617","1030","1000","38",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("8");
            obj.set_text("다양한 환경");
            obj.set_cssclass("sta_MF_TitleWhiteM");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","1617","1110","1000","90",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("9");
            obj.set_text("다양한 서버 프레임 워크와 DB, PC/모바일을 지원하는 IDE를 제공합니다.");
            obj.set_cssclass("sta_MF_BodyGrayM");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel04_00","633","10","326","492",null,null,null,"400",null,null,this.divWorkContents.form);
            obj.set_taborder("10");
            obj.set_flexwrap("wrap");
            obj.set_spacing("300px 50px 50px 50px");
            obj.set_verticalgap("26");
            obj.set_borderRadius("40px");
            obj.set_flexgrow("1");
            obj.set_background("url(\'theme://images/img_MF_ItemBg05.png\') no-repeat center center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_03\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_01_00\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00","1627","1040","1000","38",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("11");
            obj.set_text("표준 디자인");
            obj.set_cssclass("sta_MF_TitleM");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_01","1627","1120","1000","90",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("12");
            obj.set_text("표준화된 Frame 및 기본 CSS와 다양한 화면 템플릿을 제공합니다.");
            obj.set_cssclass("sta_MF_BodyM");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel04","1617","1030","326","492",null,null,null,"400",null,null,this.divWorkContents.form);
            obj.set_taborder("13");
            obj.set_flexwrap("wrap");
            obj.set_spacing("300px 50px 50px 50px");
            obj.set_verticalgap("26");
            obj.set_borderRadius("40px");
            obj.set_flexgrow("1");
            obj.set_background("url(\'theme://images/img_MF_ItemBg06.png\') no-repeat center center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_01\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","10","187","1000","492",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("14");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_verticalgap("10");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem04\" componentid=\"Panel04_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel04\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_03_00","1637","1050","1000","38",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("15");
            obj.set_text("공통 스크립트");
            obj.set_cssclass("sta_MF_TitleWhiteM");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","1637","1130","1000","90",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("16");
            obj.set_text("공통 스크립트 및 확장 컴포넌트를 제공합니다.");
            obj.set_cssclass("sta_MF_BodyGrayM");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel04_00_00","643","20","326","492",null,null,null,"400",null,null,this.divWorkContents.form);
            obj.set_taborder("17");
            obj.set_flexwrap("wrap");
            obj.set_spacing("300px 50px 50px 50px");
            obj.set_verticalgap("26");
            obj.set_borderRadius("40px");
            obj.set_flexgrow("1");
            obj.set_background("url(\'theme://images/img_MF_ItemBg07.png\') no-repeat center center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_01_00_00\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_04","1647","1060","1000","38",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("18");
            obj.set_text("커뮤니티 기능");
            obj.set_cssclass("sta_MF_TitleM");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_01_01","1647","1140","1000","90",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("19");
            obj.set_text("다양한 게시판 유형 및 스케줄 기능을 제공합니다.");
            obj.set_cssclass("sta_MF_BodyM");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel04_01","1627","1040","326","492",null,null,null,"400",null,null,this.divWorkContents.form);
            obj.set_taborder("20");
            obj.set_flexwrap("wrap");
            obj.set_spacing("300px 50px 50px 50px");
            obj.set_verticalgap("26");
            obj.set_borderRadius("40px");
            obj.set_flexgrow("1");
            obj.set_background("url(\'theme://images/img_MF_ItemBg08.png\') no-repeat center center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_04\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_01_01\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_00","1657","1070","1000","38",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("21");
            obj.set_text("관리자 기능");
            obj.set_cssclass("sta_MF_TitleM");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_01_02","1657","1150","1000","90",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("22");
            obj.set_text("코드 및 권한 관리 기능을 제공합니다.\r\n");
            obj.set_cssclass("sta_MF_BodyM");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel04_02","515","10","326","492",null,null,null,"400",null,null,this.divWorkContents.form);
            obj.set_taborder("23");
            obj.set_flexwrap("wrap");
            obj.set_spacing("300px 50px 50px 50px");
            obj.set_verticalgap("26");
            obj.set_borderRadius("40px");
            obj.set_flexgrow("1");
            obj.set_background("url(\'theme://images/img_MF_ItemBg09.png\') no-repeat center center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_01_02\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","228","297","1000","492",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("24");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_verticalgap("10");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Panel04_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel04_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel04_02\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel03","0","-52","1000","994",null,null,null,"1000",null,null,this.divWorkContents.form);
            obj.set_taborder("25");
            obj.set_verticalgap("10");
            obj.set_spacing("10");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","0","120","1000","1094",null,null,null,"1000",null,null,this.divWorkContents.form);
            obj.set_taborder("26");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("50");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Static00_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel03\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","10","10","100%","1334",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("27");
            obj.set_spacing("120px 0px");
            obj.set_flexmainaxisalign("center");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_01","10","1500","640","100",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("28");
            obj.set_text("노하우가 패킹된 통합 개발 환경으로\n개발 생산성 향상");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_MF_TitleLeftL");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_01","1667","1160","1000","90",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("29");
            obj.set_text("DevPro 는 기획, 디자인, 퍼블리싱, UI 공통 작업까지 포함한\r\n통합 패키지로 반복 작업을 간소화하고\r\n바로 업무 화면 개발이 가능합니다.");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_MF_BodyM");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel04_00_01","633","10","600","340",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("30");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("20");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Static00_03_01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_01_00_01\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","1518","2500","300","340",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("31");
            obj.set_flexgrow("1");
            obj.set_image("url(\'theme://images/img_WF_Item01.png\')");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00","10","187","1000","340",null,null,null,"1000",null,null,this.divWorkContents.form);
            obj.set_taborder("32");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            obj.set_horizontalgap("20");
            obj.set_verticalgap("20");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem04\" componentid=\"Panel04_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"ImageViewer00\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00","10","10","100%","420",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("33");
            obj.set_spacing("80px 0px 0px 0px");
            obj.set_flexmainaxisalign("center");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_00\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_02_00_00","10","2000","640","100",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("34");
            obj.set_text("신속한 개발 프로세스로 높은 사용성과\n완성도를 갖춘 디자인까지");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_MF_TitleLeftL");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_01_01_00","1677","1170","1000","90",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("35");
            obj.set_text("개발 편의성과 함께 세심한 설계를 통해\n높은 사용성과 완성도를 유지하는 디자인을 제공합니다.");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_MF_BodyM");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel04_00_01_01_00","643","20","600","340",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("36");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("20");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Static00_03_01_02_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_01_00_01_01_00\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00_01_00","1528","2510","300","340",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("37");
            obj.set_flexgrow("1");
            obj.set_image("url(\'theme://images/img_WF_Item01.png\')");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00_01_00","20","197","1000","340",null,null,null,"1000",null,null,this.divWorkContents.form);
            obj.set_taborder("38");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            obj.set_horizontalgap("20");
            obj.set_verticalgap("20");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem04\" componentid=\"Panel04_00_01_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"ImageViewer00_01_00\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_01_00","10","10","100%","540",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("39");
            obj.set_spacing("80px 0px 120px 0px");
            obj.set_flexmainaxisalign("center");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_00_01_00\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","1510","2935","139","48",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("40");
            obj.set_text("제공 내역");
            obj.set_cssclass("sta_WF_TitleLabelBlue");
            obj.set_fittocontents("both");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel14","0","0","1000","48",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("41");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_02_00\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_05_00_02","-60","53","1000","44",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("42");
            obj.set_text("ENVIRONMENT");
            obj.set_cssclass("sta_WF_ItemSubTitle");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_05_03","-70","43","1000","50",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("43");
            obj.set_text("풍부한 경험과 노하우");
            obj.set_cssclass("sta_MF_TitleWhiteLeftL");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_08","0","48","1000","30",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("44");
            obj.set_text("• PC(로컬) 통합 개발 환경 SpringBoot 서버 프레임워크");
            obj.set_cssclass("sta_MF_BodyWhiteM");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_00_04","90","138","1000","30",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("45");
            obj.set_text("• 초기 데이터 베이스 세팅");
            obj.set_cssclass("sta_MF_BodyWhiteM");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel01_05","10","136","1000","100",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("46");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_08\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_00_04\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel02_03","10","70","1000","192",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("47");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("12");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_05_03\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_05\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel00_03","20","5000","425","222",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("48");
            obj.set_verticalgap("16");
            obj.set_flexwrap("wrap");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_05_00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02_03\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_05_02","30","2650","1000","44",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("49");
            obj.set_text("MODULE");
            obj.set_cssclass("sta_WF_ItemSubTitle");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_05_00_01","40","2660","1000","50",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("50");
            obj.set_text("커뮤니티 및 시스템 관리");
            obj.set_cssclass("sta_MF_TitleWhiteLeftL");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_07","50","98","1000","30",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("51");
            obj.set_text("• 커뮤니티 모듈");
            obj.set_cssclass("sta_MF_BodyWhiteM");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_01_04","60","108","1000","30",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("52");
            obj.set_text("- UI & Service & SQL");
            obj.set_cssclass("sta_MF_Caption02");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel00_02","10","136","1000","60",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("53");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_07\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_01_04\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_00_03","70","118","1000","30",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("54");
            obj.set_text("• 시스템 관리 모듈");
            obj.set_cssclass("sta_MF_BodyWhiteM");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_02_01","80","128","1000","30",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("55");
            obj.set_text("- UI & Service & SQL");
            obj.set_cssclass("sta_MF_Caption02");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel01_03","0","172","1000","60",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("56");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_00_03\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_02_01\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel02_02","0","126","1000","130",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("57");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_03\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel03_01","0","60","1000","192",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("58");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("12");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_05_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02_02\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel04_03","10","5000","425","252",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("59");
            obj.set_verticalgap("16");
            obj.set_flexwrap("wrap");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_05_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel03_01\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_05_01","-70","43","1000","44",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("60");
            obj.set_text("TEMPLATE");
            obj.set_cssclass("sta_WF_ItemSubTitle");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_05_00_00","30","2650","1000","50",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("61");
            obj.set_text("UI 표준 템플릿");
            obj.set_cssclass("sta_MF_TitleWhiteLeftL");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_06","30","78","1000","30",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("62");
            obj.set_text("• 개발 표준 템플릿");
            obj.set_cssclass("sta_MF_BodyWhiteM");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_00_02","40","88","1000","30",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("63");
            obj.set_text("• 디자인 표준 템플릿");
            obj.set_cssclass("sta_MF_BodyWhiteM");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","0","126","1000","70",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("64");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_06\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_00_02\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel01_02","0","60","1000","132",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("65");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("12");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_05_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_01\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel02_01","0","5000","408","192",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("66");
            obj.set_verticalgap("16");
            obj.set_flexwrap("wrap");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_05_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_05","20","2640","1000","44",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("67");
            obj.set_text("SUPPORT");
            obj.set_cssclass("sta_WF_ItemSubTitle");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_05_00","20","2640","1000","50",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("68");
            obj.set_text("가이드 및 지원");
            obj.set_cssclass("sta_MF_TitleWhiteLeftL");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_02","0","48","1000","30",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("69");
            obj.set_text("• 가이드 문서 및 교육 제공");
            obj.set_cssclass("sta_MF_BodyWhiteM");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_01_03","10","58","1000","30",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("70");
            obj.set_text("- ERD, UI 개발 가이드, 서비스 개발 가이드, 디자인 가이드");
            obj.set_cssclass("sta_MF_Caption02");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","126","1000","60",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("71");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_01_03\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","20","68","1000","30",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("72");
            obj.set_text("• DevPro 사용 중 발생하는 이슈 및 문의 등에 대한 추가 기술 지원");
            obj.set_cssclass("sta_MF_BodyWhiteM");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","126","1000","100",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("73");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_00_01\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel02","0","60","1000","162",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("74");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("12");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_05_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel03_00","0","5000","425","222",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("75");
            obj.set_verticalgap("16");
            obj.set_flexwrap("wrap");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_05\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel05_00","50","120","1000","524",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("76");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("50");
            obj.set_verticalgap("50");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_03\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel04_03\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel02_01\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel03_00\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel01_01","76","120","1000","622",null,null,null,"1000",null,null,this.divWorkContents.form);
            obj.set_taborder("77");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("50");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_spacing("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel14\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel05_00\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel07","76","120","100%","862",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("78");
            obj.set_fittocontents("height");
            obj.set_flexmainaxisalign("center");
            obj.set_spacing("120px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_01\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00_02","0","0","100%","106",null,null,"270",null,null,null,this.divWorkContents.form);
            obj.set_taborder("79");
            obj.set_imagealign("left");
            obj.set_stretch("fixaspectratio");
            obj.set_image("url(\'theme://images/img_WF_BottomTitle03.svg\')");
            obj.set_text("");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Button("btnEXPERIEN","0",null,"120","52",null,"0",null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("80");
            obj.set_text("체험하기");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Button("btnINQUIRY","20",null,"120","52",null,"0",null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("81");
            obj.set_text("문의하기");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel00_04","0","348","274","52",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("82");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnEXPERIEN\"/><PanelItem id=\"PanelItem01\" componentid=\"btnINQUIRY\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel01_04","0","100","1000","182",null,null,null,"1000",null,null,this.divWorkContents.form);
            obj.set_taborder("83");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("24");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"ImageViewer00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_04\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel09_00","0","100","100%","372",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("84");
            obj.set_flexmainaxisalign("center");
            obj.set_spacing("100px 0px 90px 0px");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_04\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("StaMargin02_01","-42","1080","5.00%","60",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("85");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("StaMargin02_02","1226","1234","5.00%","60",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("86");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("StaMargin03_01","-32","2270","5.00%","60",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("87");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("StaMargin03_02","1228","2250","5.00%","60",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("88");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("StaMargin04_01","-24","2894","5.00%","60",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("89");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("StaMargin04_02","1226","2830","5.00%","60",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("90");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("StaMargin06_01","-14","4036","5.00%","60",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("91");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("StaMargin06_02","1216","4232","5.00%","60",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("92");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("StaMargin07_01","-32","4930","5.00%","60",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("93");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("StaMargin07_02","1260","4930","5.00%","60",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("94");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Div("div_Contents01_00","0","0",null,"500","0",null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("95");
            obj.set_text("Div00");
            obj.set_visible("false");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Div("Div00","0","0",null,null,"0","0",null,null,null,null,this.divWorkContents.form.div_Contents01_00.form);
            obj.set_taborder("0");
            obj.set_url("design::05_DevPro_Title.xfdl");
            this.divWorkContents.form.div_Contents01_00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divWorkContents.form.div_Contents01.form.Div00
            obj = new Layout("default","",0,0,this.divWorkContents.form.div_Contents01.form.Div00.form,function(p){});
            this.divWorkContents.form.div_Contents01.form.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divWorkContents.form.div_Contents01.form
            obj = new Layout("default","",0,0,this.divWorkContents.form.div_Contents01.form,function(p){});
            this.divWorkContents.form.div_Contents01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divWorkContents.form.div_Contents05
            obj = new Layout("default","",0,0,this.divWorkContents.form.div_Contents05.form,function(p){});
            this.divWorkContents.form.div_Contents05.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divWorkContents.form.div_Contents01_00.form.Div00
            obj = new Layout("default","",0,0,this.divWorkContents.form.div_Contents01_00.form.Div00.form,function(p){});
            this.divWorkContents.form.div_Contents01_00.form.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divWorkContents.form.div_Contents01_00.form
            obj = new Layout("default","",0,0,this.divWorkContents.form.div_Contents01_00.form,function(p){});
            this.divWorkContents.form.div_Contents01_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divWorkContents.form
            obj = new Layout("default","",0,0,this.divWorkContents.form,function(p){});
            this.divWorkContents.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Mobile_screen",1280,4935,this,function(p){});
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
            this._addPreloadList("fdl","design::05_DevPro_Title.xfdl");
            this._addPreloadList("fdl","design::05_DevPro_Diagram.xfdl");
        };
        
        // User Script
        this.registerScript("prstIntrdDevPro.xfdl", function() {
        /**
        *  devPro
        *  @FileName 	prstIntrdDevPro.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2023/11/22
        *  @Description
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2023/11/22			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fvDevParam			= "DP";

        this.fvExpreineCd		= "EXPERIEN";	// 체험하기
        this.fvInquiryCd		= "INQUIRY";	// 문의하기

        this.objApp = nexacro.getApplication();
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.objApp.gvCurrMenu = this.fvDevParam;
        	this.gfnFormOnLoad(this);
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

        	sStyle.backgroundImage ="url('"+sUrlPrefix+"TobesoftPro/images/img_MF_DevProM.png')";
        	sStyle.backgroundSize = "cover";
        	sStyle.backgroundPosition = "center";

        	sStyle = objP._control_element.handle.style;

        	sStyle.backgroundImage ="url('"+sUrlPrefix+"TobesoftPro/images/img_MF_DevPro.png')";
        	sStyle.backgroundSize = "cover";
        	sStyle.backgroundPosition = "center";

        	this.fnResize();
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        // DevPro 소개서 다운로드
        this.divDevGuide_btnDevGuideDown_onclick = function(obj,e)
        {
        	var urlPath = "";

        	// 로컬
        	if(this.objApp.gvRunMode == "L")
        	{
        		urlPath = window.location.protocol + "//" + window.location.host + "/" + "Pro/file/TOBESOFT_DEVPRO_소개서.pdf";
        	}
        	// 개발
        	else if(this.objApp.gvRunMode == "D")
        	{
        		urlPath = window.location.protocol + "//" + window.location.host + "/" + "Pro/file/TOBESOFT_DEVPRO_소개서.pdf";
        	}
        	// 운영
        	else if(this.objApp.gvRunMode == "R")
        	{
        		urlPath = window.location.protocol + "//" + window.location.host + "/" + "file/TOBESOFT_DEVPRO_소개서.pdf";
        	}

        	if( this.gfnIsNull(urlPath)){
        		return;
        	}
        	system.execBrowser(urlPath);
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
            this.divWorkContents.addEventHandler("onvscroll",this.divWorkContents_onvscroll,this);
            this.divWorkContents.form.div_Contents01.addEventHandler("onsize",this.divWorkContents_div_Contents01_onsize,this);
            this.divWorkContents.form.Static00_02_00.addEventHandler("onclick",this.Static00_02_00_onclick,this);
            this.divWorkContents.form.Static00_05_00_01.addEventHandler("onclick",this.Div01_00_00_00_00_Static00_05_00_onclick,this);
            this.divWorkContents.form.div_Contents01_00.addEventHandler("onsize",this.divWorkContents_div_Contents01_onsize,this);
        };
        this.loadIncludeScript("prstIntrdDevPro.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
