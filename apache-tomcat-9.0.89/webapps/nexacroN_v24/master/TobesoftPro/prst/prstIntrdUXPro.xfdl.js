(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("prstIntrdUXPro");
            this.set_titletext("UXPro");
            this.getSetter("uResetScroll").set("true");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,4732);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divWorkContents","0","0",null,"4732","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("div_Contents01","0","0",null,"500","0",null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("0");
            obj.set_background("#D9E2FF");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Div("Div00","0","0",null,null,"0","0",null,null,null,null,this.divWorkContents.form.div_Contents01.form);
            obj.set_taborder("1");
            obj.set_url("design::04_UXPro_Title.xfdl");
            this.divWorkContents.form.div_Contents01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","529","172","1000","50",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("1");
            obj.set_text("전문적인 기획과 완성된 디자인");
            obj.set_cssclass("sta_MF_TitleL");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_03","1617","1030","1000","38",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("2");
            obj.set_text("UX 기획");
            obj.set_cssclass("sta_MF_TitleM");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","1617","1110","1000","90",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("3");
            obj.set_text("사용자 경험 향상을 위해 \r\n시스템 전체에 일관된 UI를 \r\n적용할 수 있도록 도와드립니다.");
            obj.set_cssclass("sta_MF_BodyM");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel04_00","633","10","377","492",null,null,null,"400",null,null,this.divWorkContents.form);
            obj.set_taborder("4");
            obj.set_flexwrap("wrap");
            obj.set_spacing("300px 50px 50px 50px");
            obj.set_verticalgap("26");
            obj.set_borderRadius("40px");
            obj.set_flexgrow("1");
            obj.set_background("url(\'theme://images/img_MF_ItemBg01.png\') no-repeat center center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_03\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_01_00\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00","1627","1040","1000","38",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("5");
            obj.set_text("UI 디자인");
            obj.set_cssclass("sta_MF_TitleM");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_01","1627","1120","1000","90",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("6");
            obj.set_text("일관되고 높은 수준의 품질을 위해\r\n업무 시스템에 최적화된 \r\nUI 디자인 가이드를 제공합니다.");
            obj.set_cssclass("sta_MF_BodyM");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel04","1617","1030","377","492",null,null,null,"400",null,null,this.divWorkContents.form);
            obj.set_taborder("7");
            obj.set_flexwrap("wrap");
            obj.set_spacing("300px 50px 50px 50px");
            obj.set_verticalgap("26");
            obj.set_borderRadius("40px");
            obj.set_flexgrow("1");
            obj.set_background("url(\'theme://images/img_MF_ItemBg02.png\') no-repeat center center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_01\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","10","187","1000","492",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("8");
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
            obj.set_taborder("9");
            obj.set_text("퍼블리싱");
            obj.set_cssclass("sta_MF_TitleM");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","1637","1130","1000","90",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("10");
            obj.set_text("다양한 환경에 최적화된 UI를 위한\r\n넥사크로 테마 및 화면 퍼블리싱\r\n자료를 제공합니다.");
            obj.set_cssclass("sta_MF_BodyM");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel04_00_00","643","20","377","492",null,null,null,"400",null,null,this.divWorkContents.form);
            obj.set_taborder("11");
            obj.set_flexwrap("wrap");
            obj.set_spacing("300px 50px 50px 50px");
            obj.set_verticalgap("26");
            obj.set_borderRadius("40px");
            obj.set_flexgrow("1");
            obj.set_background("url(\'theme://images/img_MF_ItemBg03.png\') no-repeat center center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_01_00_00\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_04","1647","1060","1000","38",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("12");
            obj.set_text("공통 스크립트");
            obj.set_cssclass("sta_MF_TitleM");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_01_01","1647","1140","1000","90",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("13");
            obj.set_text("UI·UX 개발에 최적화된 넥사크로 공통 스크립트를 제공하여, 개발 생산성을 극대화할 수 있습니다.");
            obj.set_cssclass("sta_MF_BodyM");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel04_01","1627","1040","377","492",null,null,null,"400",null,null,this.divWorkContents.form);
            obj.set_taborder("14");
            obj.set_flexwrap("wrap");
            obj.set_spacing("300px 50px 50px 50px");
            obj.set_verticalgap("26");
            obj.set_borderRadius("40px");
            obj.set_flexgrow("1");
            obj.set_background("url(\'theme://images/img_MF_ItemBg04.png\') no-repeat center center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_04\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_01_01\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","228","297","1000","492",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("15");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_verticalgap("10");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Panel04_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel04_01\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel03","0","-52","1000","994",null,null,null,"1000",null,null,this.divWorkContents.form);
            obj.set_taborder("16");
            obj.set_verticalgap("10");
            obj.set_spacing("10");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","0","120","1000","1094",null,null,null,"1000",null,null,this.divWorkContents.form);
            obj.set_taborder("17");
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
            obj.set_taborder("18");
            obj.set_spacing("120px 0px");
            obj.set_flexmainaxisalign("center");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("panel_Contents02","0","div_Contents01:0",null,"1334","0",null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("19");
            obj.set_type("horizontal");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"StaMargin02_01\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00\"/><PanelItem id=\"PanelItem03\" componentid=\"StaMargin02_02\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_02","10","2000","640","100",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("20");
            obj.set_text("디자인 시스템 기반 복잡한 화면도\r\n직관적이고 일관성 있게");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_MF_TitleLeftL");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_01","1657","1150","1000","90",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("21");
            obj.set_text("비즈니스 시스템의 복잡한 화면도 표준 패턴을 적용해 유연하게 대응합니다.\r\n직관적 UI·UX로 업무 효율을 높이고, 공통 스크립트 제공으로\r\n시스템 구현과 쉬운 커스터마이징으로 개발 생산성을 높입니다.");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_MF_BodyM");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel04_00_01","633","10","600","340",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("22");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("20");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Static00_03_01_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_01_00_01\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","1518","2500","300","340",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("23");
            obj.set_flexgrow("1");
            obj.set_image("url(\'theme://images/img_WF_Item03.png\')");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00","10","187","1000","340",null,null,null,"1000",null,null,this.divWorkContents.form);
            obj.set_taborder("24");
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
            obj.set_taborder("25");
            obj.set_spacing("80px 0px 0px 0px");
            obj.set_flexmainaxisalign("center");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_00\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("panel_Contents03","0","panel_Contents02:0",null,"420","0",null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("26");
            obj.set_type("horizontal");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"StaMargin03_01\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"StaMargin03_02\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_01_00","10","2000","640","50",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("27");
            obj.set_text("다양한 해상도에 최적화");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_MF_TitleLeftL");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_01_00","1667","1160","1000","90",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("28");
            obj.set_text("PC, Mobile, Tablet 각 해상도에 맞는 최적화된 디자인 템플릿을 제공해\r\n다양한 해상도에 대응이 가능합니다.\r\n각 해상도에 맞게 최적화되어 사용자에게 안정적이고 일관된 경험을 제공합니다.");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_MF_BodyM");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel04_00_01_00","643","20","600","340",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("29");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("20");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Static00_03_01_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_01_00_01_00\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00_00","1528","2510","300","340",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("30");
            obj.set_flexgrow("1");
            obj.set_image("url(\'theme://images/img_WF_Item02.png\')");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00_00","20","197","1000","340",null,null,null,"1000",null,null,this.divWorkContents.form);
            obj.set_taborder("31");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            obj.set_horizontalgap("20");
            obj.set_verticalgap("20");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem04\" componentid=\"Panel04_00_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"ImageViewer00_00\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00","20","20","100%","460",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("32");
            obj.set_spacing("80px 0px 120px 0px");
            obj.set_flexmainaxisalign("center");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_00_00\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("panel_Contents04","0","panel_Contents03:0",null,"460","0",null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("33");
            obj.set_type("horizontal");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"StaMargin04_01\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"StaMargin04_02\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","1510","2935","179","48",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("34");
            obj.set_text("검증된 UXPro");
            obj.set_cssclass("sta_WF_TitleLabelBlue");
            obj.set_fittocontents("both");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel14","0","0","1000","48",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("35");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_02_00\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("panel_Contents05","0","panel_Contents04:0",null,"1129","0",null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("36");
            obj.set_type("horizontal");
            obj.set_fittocontents("height");
            obj.set_background("#D5DAE2");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"StaMargin05_01\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel07_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"StaMargin05_02\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_05","180","3652","1000","50",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("37");
            obj.set_text("풍부한 경험과 노하우");
            obj.set_cssclass("sta_MF_TitleWhiteLeftL");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_00","180","3716","1000","90",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("38");
            obj.set_text("2000년 투비소프트 설립 이후, 공공/금융/제조/교육/서비스 등 다양한 업종의 프로젝트 수행을 통해 높은 수준의 UI 디자인 시스템을 보유하고 있습니다.");
            obj.set_cssclass("sta_MF_BodyWhiteM");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel00","180","3626","300","179",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("39");
            obj.set_horizontalgap("14");
            obj.set_verticalgap("14");
            obj.set_spacing("25px 0px 0px 0px");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_cssclass("pnl_WF_ItemBoxWhite");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_05\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_00\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_05_00","670","3666","1000","50",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("40");
            obj.set_text("상시 연구 및 검증");
            obj.set_cssclass("sta_MF_TitleWhiteLeftL");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_02","670","3730","1000","90",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("41");
            obj.set_text("프로젝트 수행 뿐만 아니라 업무 시스템에 적합한 디자인을 끊임없이 연구하고 검증합니다. 이를 통해 도출된 구성 요소와 패턴을 믿고 사용해 보세요.");
            obj.set_cssclass("sta_MF_BodyWhiteM");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","670","3642","300","179",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("42");
            obj.set_horizontalgap("14");
            obj.set_verticalgap("14");
            obj.set_spacing("25px 0px 0px 0px");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_cssclass("pnl_WF_ItemBoxWhite");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_05_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_02\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel05_00","50","120","1000","179",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("43");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("50");
            obj.set_verticalgap("50");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_01\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel01_01","76","120","1000","277",null,null,null,"1000",null,null,this.divWorkContents.form);
            obj.set_taborder("44");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("50");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_spacing("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel14\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel05_00\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel07","76","120","100%","517",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("45");
            obj.set_fittocontents("height");
            obj.set_flexmainaxisalign("center");
            obj.set_spacing("120px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_01\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("panel_Contents06","0","panel_Contents05:0",null,"517","0",null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("46");
            obj.set_type("horizontal");
            obj.set_fittocontents("height");
            obj.set_background("#3E73F1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"StaMargin06_01\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel07\"/><PanelItem id=\"PanelItem03\" componentid=\"StaMargin06_02\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00_02","0","0","100%","106",null,null,"270",null,null,null,this.divWorkContents.form);
            obj.set_taborder("47");
            obj.set_imagealign("left");
            obj.set_stretch("fixaspectratio");
            obj.set_image("url(\'theme://images/img_WF_BottomTitle02.svg\')");
            obj.set_text("");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Button("btnEXPERIEN","0",null,"120","52",null,"0",null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("48");
            obj.set_text("체험하기");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Button("btnINQUIRY","20",null,"120","52",null,"0",null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("49");
            obj.set_text("문의하기");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel00_04","0","348","274","52",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("50");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnEXPERIEN\"/><PanelItem id=\"PanelItem01\" componentid=\"btnINQUIRY\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel01_04","0","100","1000","182",null,null,null,"1000",null,null,this.divWorkContents.form);
            obj.set_taborder("51");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("24");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"ImageViewer00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_04\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel09_00","0","100","100%","372",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("52");
            obj.set_flexmainaxisalign("center");
            obj.set_spacing("100px 0px 90px 0px");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_04\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("panel_Contents07","0","panel_Contents06:0",null,"372","0",null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("53");
            obj.set_type("horizontal");
            obj.set_background("#18181A");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"StaMargin07_01\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel09_00\"/><PanelItem id=\"PanelItem03\" componentid=\"StaMargin07_02\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00_00","1510","2935","173","48",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("54");
            obj.set_text("적용 프로세스");
            obj.set_cssclass("sta_WF_TitleLabelGray");
            obj.set_fittocontents("both");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel14_00_00","10","10","1000","48",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("55");
            obj.set_flexmainaxisalign("center");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_02_00_00_00\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_07_01","1394","3087","470","48",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("56");
            obj.set_text("UX기획");
            obj.set_cssclass("sta_WF_ProcessTitle05");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_01","10","10","190","42",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("57");
            obj.set_text("UI·UX 표준 정의서");
            obj.set_cssclass("sta_WF_ProcessSubTitle");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel21_01","6","6","1000","42",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("58");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_02_01_01\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_03","94","165","1000","22",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("59");
            obj.set_text("·  사용자 환경 표준");
            obj.set_cssclass("sta_WF_ProcessBody02");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_01_02_00","94","174","1000","22",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("60");
            obj.set_text("·  업무 영역 구성 컴포넌트");
            obj.set_cssclass("sta_WF_ProcessBody02");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00_01","94","183","1000","22",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("61");
            obj.set_text("·  공통 영역 화면 구성");
            obj.set_cssclass("sta_WF_ProcessBody02");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_01","94","192","1000","22",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("62");
            obj.set_text("·  업무 화면 구성");
            obj.set_cssclass("sta_WF_ProcessBody02");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00_00","10","4000","223","22",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("63");
            obj.set_text("·  업무 화면 구성");
            obj.set_cssclass("sta_WF_ProcessBody02");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01_01","44","115","220","158",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("64");
            obj.set_type("horizontal");
            obj.set_verticalgap("7");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_00_01_03\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_01_02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static00_02_00_00_01\"/><PanelItem id=\"PanelItem03\" componentid=\"Static00_03_01_01\"/><PanelItem id=\"PanelItem05\" componentid=\"Static00_03_01_00_00\"/><PanelItem id=\"PanelItem06\" componentid=\"Static00_03_01_00_00_00\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_00_01","10","3000","232","242",null,null,null,null,"242",null,this.divWorkContents.form);
            obj.set_taborder("65");
            obj.set_flexwrap("wrap");
            obj.set_spacing("6px 6px 20px 6px");
            obj.set_verticalgap("16");
            obj.set_flexgrow("1");
            obj.set_cssclass("pnl_WF_ProcessSubBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel21_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00_01_01\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_06_00","10","10","190","42",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("66");
            obj.set_text("UI 업무패턴 정의서");
            obj.set_cssclass("sta_WF_ProcessSubTitle");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel22_01","16","16","1000","42",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("67");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_06_00\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_04_00_00","128","128","1000","22",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("68");
            obj.set_text("·  공통 프레임 구성");
            obj.set_cssclass("sta_WF_ProcessBody02");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_04_00_01_01","128","156","1000","22",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("69");
            obj.set_text("·  업무 화면 레이아웃 구성");
            obj.set_cssclass("sta_WF_ProcessBody02");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel02_02","128","128","440","158",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("70");
            obj.set_verticalgap("7");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_type("horizontal");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_04_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_04_00_01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Static00_04_00_01_01_00\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel00_02_00","1454","3275","232","242",null,null,null,null,"242",null,this.divWorkContents.form);
            obj.set_taborder("71");
            obj.set_spacing("6px 6px 20px 6px");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("16");
            obj.set_cssclass("pnl_WF_ProcessSubBg");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel22_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02_02\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel04_02_00","1369","3200","1000","242",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("72");
            obj.set_horizontalgap("6");
            obj.set_verticalgap("6");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_02_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_02_00\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01_01","216","3745","30","30",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("73");
            obj.set_image("url(\'theme://images/img_WF_PPTLogo.svg\')");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static01_01","226","3738","120","30",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("74");
            obj.set_text("표준 가이드 문서");
            obj.set_flexgrow("1");
            obj.set_cssclass("sta_MF_Caption04");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel05_02","386","3958","120","50",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("75");
            obj.set_flexgrow("1");
            obj.set_spacing("10px");
            obj.set_horizontalgap("14");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"ImageViewer01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_01\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel06_00","1369","3200","490","372",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("76");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("6");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_cssclass("pnl_WF_ProcessBg");
            obj.set_spacing("10px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Static00_07_01\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel04_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel05_02\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_07_00_00","1404","3097","470","48",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("77");
            obj.set_text("UI디자인");
            obj.set_cssclass("sta_WF_ProcessTitle05");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_08_00","20","20","190","42",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("78");
            obj.set_text("디자인 가이드");
            obj.set_cssclass("sta_WF_ProcessSubTitle");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel22_00_00","26","26","1000","42",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("79");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_08_00\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_04_00_02_00","138","138","1000","22",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("80");
            obj.set_text("·  공통 프레임");
            obj.set_cssclass("sta_WF_ProcessBody02");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_02_00","138","166","1000","19",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("81");
            obj.set_text("·  기본/응용 컴포넌트");
            obj.set_cssclass("sta_WF_ProcessBody02");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_04_00_01_00_00","138","166","1000","22",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("82");
            obj.set_text("·  색상, 문자 스타일");
            obj.set_cssclass("sta_WF_ProcessBody02");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel02_01_00","138","138","440","158",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("83");
            obj.set_verticalgap("7");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_type("horizontal");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Static00_04_00_02_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Static00_00_01_02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static00_04_00_01_00_00\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel00_03_00","1464","3285","232","242",null,null,null,null,"242",null,this.divWorkContents.form);
            obj.set_taborder("84");
            obj.set_spacing("6px 6px 20px 6px");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("16");
            obj.set_cssclass("pnl_WF_ProcessSubBg");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel22_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02_01_00\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_00_00","10","10","190","42",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("85");
            obj.set_text("UI 템플릿 디자인");
            obj.set_cssclass("sta_WF_ProcessSubTitle");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel21_00_00","36","36","1000","42",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("86");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_02_01_00_00\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_00_02_00","104","175","1000","22",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("87");
            obj.set_text("·  로그인, 메인 화면");
            obj.set_cssclass("sta_WF_ProcessBody02");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01_00_00","54","125","220","158",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("88");
            obj.set_type("horizontal");
            obj.set_verticalgap("7");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_00_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_00_02_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static00_00_02_00_01\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_00_00_00","20","3010","232","242",null,null,null,null,"242",null,this.divWorkContents.form);
            obj.set_taborder("89");
            obj.set_flexwrap("wrap");
            obj.set_spacing("6px 6px 20px 6px");
            obj.set_verticalgap("16");
            obj.set_flexgrow("1");
            obj.set_cssclass("pnl_WF_ProcessSubBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel21_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00_01_00_00\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel04_00_02_00","1379","3210","1000","242",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("90");
            obj.set_horizontalgap("6");
            obj.set_verticalgap("6");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel00_03_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel01_02_00_00_00\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01_00_00","226","3755","30","30",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("91");
            obj.set_image("url(\'theme://images/img_WF_XDLogo.svg\')");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","236","3748","120","30",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("92");
            obj.set_text("디자인 원본파일");
            obj.set_flexgrow("1");
            obj.set_cssclass("sta_MF_Caption04");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel05_01_00","20","4000","475","50",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("93");
            obj.set_flexgrow("1");
            obj.set_spacing("10px");
            obj.set_horizontalgap("14");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"ImageViewer01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_00_00\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel07_00_01","30","3000","490","372",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("94");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("6");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_cssclass("pnl_WF_ProcessBg");
            obj.set_spacing("10px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Static00_07_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel04_00_02_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel05_01_00\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel08_00","10","4000","1000","372",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("95");
            obj.set_horizontalgap("20");
            obj.set_verticalgap("10");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel06_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel07_00_01\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_07","1414","3107","470","48",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("96");
            obj.set_text("퍼블리싱");
            obj.set_cssclass("sta_WF_ProcessTitle05");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01","236","3765","30","30",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("97");
            obj.set_image("url(\'theme://images/img_WF_NexacroLogo.svg\')");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static01","246","3758","120","30",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("98");
            obj.set_text("넥사크로 리소스");
            obj.set_flexgrow("1");
            obj.set_cssclass("sta_MF_Caption04");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel05","396","3968","120","50",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("99");
            obj.set_flexgrow("1");
            obj.set_spacing("10px");
            obj.set_horizontalgap("14");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"ImageViewer01\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel06","1379","3210","490","372",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("100");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("6");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_cssclass("pnl_WF_ProcessBg");
            obj.set_spacing("10px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Static00_07\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel04_00_02_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel05\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_07_00","1424","3117","470","48",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("101");
            obj.set_text("공통 스크립트");
            obj.set_cssclass("sta_WF_ProcessTitle05");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_08","40","40","190","42",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("102");
            obj.set_text("넥사크로 UI 공통 스크립트");
            obj.set_cssclass("sta_WF_ProcessSubTitle");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel22_00","66","66","1000","42",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("103");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_08\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_04_00_02","158","158","1000","22",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("104");
            obj.set_text("·  Frame 제어 스크립트");
            obj.set_cssclass("sta_WF_ProcessBody02");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_02","148","176","1000","22",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("105");
            obj.set_text("·  Popup 제어 스크립트");
            obj.set_cssclass("sta_WF_ProcessBody02");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_04_00_01_00","158","186","1000","22",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("106");
            obj.set_text("·  Componet 공통 스크립트");
            obj.set_cssclass("sta_WF_ProcessBody02");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_01_00_00","20","3510","1000","22",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("107");
            obj.set_text("·  Grid 공통 스크립트");
            obj.set_cssclass("sta_WF_ProcessBody02");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_01_00","368","148","1000","22",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("108");
            obj.set_text("·  Message 공통 스크립트");
            obj.set_cssclass("sta_WF_ProcessBody02");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel04_00_02","1379","3210","1000","242",null,null,null,null,"242",null,this.divWorkContents.form);
            obj.set_taborder("109");
            obj.set_verticalgap("16");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pnl_WF_ProcessSubBg");
            obj.set_spacing("6px 6px 20px 6px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel22_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel11\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static01_00","256","3768","120","30",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("110");
            obj.set_text("넥사크로 리소스");
            obj.set_flexgrow("1");
            obj.set_cssclass("sta_MF_Caption04");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel05_01","30","4010","475","50",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("111");
            obj.set_flexgrow("1");
            obj.set_spacing("10px");
            obj.set_horizontalgap("14");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"ImageViewer01_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_00\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel07_00","40","3010","490","372",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("112");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("6");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_cssclass("pnl_WF_ProcessBg");
            obj.set_spacing("10px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Static00_07_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel04_00_02\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel05_01\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel08","1369","3200","1000","439",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("113");
            obj.set_horizontalgap("20");
            obj.set_verticalgap("10");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel06\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel07_00\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel09","0","98","1000","831",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("114");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("20");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel08_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel08\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00","86","130","1000","929",null,null,null,"1000",null,null,this.divWorkContents.form);
            obj.set_taborder("115");
            obj.set_verticalgap("50");
            obj.set_flexgrow("1");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("center");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel14_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel09\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel07_00_00","76","120","100%","1129",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("116");
            obj.set_fittocontents("height");
            obj.set_flexmainaxisalign("center");
            obj.set_spacing("120px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_01_00_00\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("StaMargin02_01","-43","1050","5.00%","60",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("117");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("StaMargin02_02","1238","1335","5.00%","60",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("118");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("StaMargin03_01","-23","2240","5.00%","60",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("119");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("StaMargin03_02","1213","2380","5.00%","60",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("120");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("StaMargin04_01","-41","2480","5.00%","60",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("121");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("StaMargin04_02","1236","2550","5.00%","60",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("122");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("StaMargin05_01","-20","3146","5.00%","60",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("123");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("StaMargin05_02","1236","3235","5.00%","60",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("124");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("StaMargin06_01","-41","4200","5.00%","60",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("125");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("StaMargin06_02","1236","4180","5.00%","60",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("126");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("StaMargin07_01","-10","4570","5.00%","60",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("127");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("StaMargin07_02","1220","4583","5.00%","60",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("128");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_01_00_02","790","3800","458","22",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("129");
            obj.set_text("·  Transaction 공통 스크립트");
            obj.set_cssclass("sta_WF_ProcessBody02");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_01_00_00_01","790","3800","458","22",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("130");
            obj.set_text("·  Validation 스크립트");
            obj.set_cssclass("sta_WF_ProcessBody02");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_04_00_01_00_01","790","3800","458","22",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("131");
            obj.set_text("·  Util 스크립트");
            obj.set_cssclass("sta_WF_ProcessBody02");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01_02","713","3925","30","30",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("132");
            obj.set_image("url(\'theme://images/img_WF_NexacroLogo.svg\')");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Div("div_Contents01_00","0","0",null,"500","0",null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("133");
            obj.set_background("#D9E2FF");
            obj.set_visible("false");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Div("Div00","0","0",null,null,"0","0",null,null,null,null,this.divWorkContents.form.div_Contents01_00.form);
            obj.set_taborder("1");
            obj.set_url("design::04_UXPro_Title.xfdl");
            this.divWorkContents.form.div_Contents01_00.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","0","220","109",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("134");
            obj.set_verticalgap("7");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_04_00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_00_01_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Static00_04_00_01_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Static00_00_01_01_00_00\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel10","0","29","220","109",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("135");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_verticalgap("7");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_00_01_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_00_01_01_00_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Static00_04_00_01_00_01\"/><PanelItem id=\"PanelItem03\" componentid=\"Static00_00_01_01_00_00_01\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel11","6","64","440","109",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("136");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("7");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel10\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_08_01","526","3606","190","42",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("137");
            obj.set_text("넥사크로 화면");
            obj.set_cssclass("sta_WF_ProcessSubTitle");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel22_00_01","526","3606","1000","42",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("138");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_08_01\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_04_00_02_01","526","3665","1000","22",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("139");
            obj.set_text("·  공통 프레임");
            obj.set_cssclass("sta_WF_ProcessBody02");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_02_01","526","3665","1000","22",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("140");
            obj.set_text("·  로그인, 메인");
            obj.set_cssclass("sta_WF_ProcessBody02");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_04_00_01_00_02","526","3693","1000","22",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("141");
            obj.set_text("·  업무 템플릿 16종");
            obj.set_cssclass("sta_WF_ProcessBody02");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_01_00_00_02","526","3723","1000","22",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("142");
            obj.set_text("·  컴포넌트 가이드");
            obj.set_cssclass("sta_WF_ProcessBody02");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel01_02","526","3665","220","109",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("143");
            obj.set_verticalgap("7");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_04_00_02_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_00_01_02_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Static00_04_00_01_00_02\"/><PanelItem id=\"PanelItem03\" componentid=\"Static00_00_01_01_00_00_02\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel11_00","526","3606","440","109",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("144");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("7");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_02\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel04_00_02_01","520","3600","470","242",null,null,null,null,"242",null,this.divWorkContents.form);
            obj.set_taborder("145");
            obj.set_verticalgap("16");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pnl_WF_ProcessSubBg");
            obj.set_spacing("6px 6px 20px 6px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel22_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel11_00\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00_00_00","150","3400","220","22",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("146");
            obj.set_text("·  화면 유형");
            obj.set_cssclass("sta_WF_ProcessBody02");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_04_00_01_01_00","10","39","220","22",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("147");
            obj.set_text("·  업무 템플릿 유형 16종");
            obj.set_cssclass("sta_WF_ProcessBody02");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_00_02_00_00","10","10","220","22",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("148");
            obj.set_text("·  공통 프레임 인터렉션");
            obj.set_cssclass("sta_WF_ProcessBody02");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("Static00_00_02_00_01","10","10","220","22",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("149");
            obj.set_text("·  업무 템플릿 유형 16종");
            obj.set_cssclass("sta_WF_ProcessBody02");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divWorkContents.form.div_Contents01.form.Div00
            obj = new Layout("default","",0,0,this.divWorkContents.form.div_Contents01.form.Div00.form,function(p){});
            this.divWorkContents.form.div_Contents01.form.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divWorkContents.form.div_Contents01.form
            obj = new Layout("default","",0,0,this.divWorkContents.form.div_Contents01.form,function(p){});
            this.divWorkContents.form.div_Contents01.form.addLayout(obj.name, obj);

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
            obj = new Layout("default","Desktop_screen,Mobile_screen",1280,4732,this,function(p){});
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
            this._addPreloadList("fdl","design::04_UXPro_Title.xfdl");
        };
        
        // User Script
        this.registerScript("prstIntrdUXPro.xfdl", function() {
        /**
        *  devPro
        *  @FileName 	prstIntrdUXPro.xfdl
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
        this.fvUXParam			= "UXP";

        this.fvExpreineCd		= "EXPERIEN";	// 체험하기
        this.fvInquiryCd		= "INQUIRY";	// 문의하기

        this.objApp = nexacro.getApplication();
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this); //필수함수
        	this.objApp.gvCurrMenu = this.fvUXParam;
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

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        // 배경 div onsize
        // this.divWorkContents_div_Contents01_onsize = this.gfnDebounce(function(obj, e)
        // {
        // 	var nX = obj.getOffsetWidth();
        // 	var nY = obj.getOffsetHeight();
        //
        // 	this.fnResize(nX, nY);
        // }, 30);

        // 배경 Resize
        this.fnResize = function(nX)
        {
        	if(this.gfnIsNull(nX)) nX = this.divWorkContents.getOffsetWidth();

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

        	sStyle.backgroundImage ="url('"+sUrlPrefix+"TobesoftPro/images/img_MF_UXProM.png')";
        	sStyle.backgroundSize = "cover"
        	sStyle.backgroundPosition = "center"

        	sStyle = objP._control_element.handle.style;

        	sStyle.backgroundImage ="url('"+sUrlPrefix+"TobesoftPro/images/img_MF_UXPro.png')";
        	sStyle.backgroundSize = "cover"
        	sStyle.backgroundPosition = "center"

        	this.fnResize();
        };
        // this.divWorkContents_onsize = this.gfnDebounce(function(obj, e)
        // {
        // 	var nX = obj.getOffsetWidth();
        //
        // 	this.fnResize(nX);
        // }, 20);


        this.divWorkContents_onsize = function(obj,e)
        {
        	var nX = obj.getOffsetWidth();

        	this.fnResize(nX);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divWorkContents.addEventHandler("onsize",this.divWorkContents_onsize,this);
            this.divWorkContents.form.Static00_02_00.addEventHandler("onclick",this.Static00_02_00_onclick,this);
            this.divWorkContents.form.Static00_02_00_00_00.addEventHandler("onclick",this.Static00_02_00_onclick,this);
            this.divWorkContents.form.Static00_03_01_01.addEventHandler("onclick",this.Static00_03_01_01_onclick,this);
        };
        this.loadIncludeScript("prstIntrdUXPro.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
