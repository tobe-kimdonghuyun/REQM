(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Main");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,3315);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div100","0","0",null,"495","0",null,null,"1200",null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_background("#D3DEE3");
            obj.set_borderRadius("12px");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","80","40",null,"26","80",null,null,null,null,null,this.Div100.form);
            obj.set_taborder("0");
            obj.set_image("url(\'theme://images/img_MF_UXProLogo_pc.svg\')");
            obj.set_imagealign("left middle");
            obj.set_background("transparent");
            obj.set_accessibilitylabel("유엑스Pro KRDS");
            obj.set_accessibilityrole("heading2");
            this.Div100.addChild(obj.name, obj);

            obj = new Static("Static100","102","109","100%","114",null,null,null,null,null,null,this.Div100.form);
            obj.set_taborder("1");
            obj.set_text("NexacroN V24로 구현한\n정부 공식 디자인 시스템을 만나보세요");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_MF_DisplayM_pc");
            obj.set_wordWrap("char");
            this.Div100.addChild(obj.name, obj);

            obj = new Static("Static101","102","190","100%","57",null,null,null,null,null,null,this.Div100.form);
            obj.set_taborder("2");
            obj.set_text("공공·금융·제조·서비스 등 다양한 산업군의 업무환경에 최적화된 UI/UX 플랫폼  \r\n기업과 기관의 디지털 전환을 지원하는 HTML5 기반의 스마트한 웹 표준 솔루션");
            obj.set_fittocontents("height");
            obj.set_wordWrap("char");
            obj.set_cssclass("sta_WF_Txt19B");
            this.Div100.addChild(obj.name, obj);

            obj = new Panel("Panel101","102","109","100","220",null,null,null,null,null,null,this.Div100.form);
            obj.set_taborder("3");
            obj.set_type("horizontal");
            obj.set_verticalgap("16");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static100\"/><PanelItem id=\"PanelItem01\" componentid=\"Static101\"/></Contents>");
            this.Div100.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01","839","257","273","220",null,null,null,"273",null,null,this.Div100.form);
            obj.set_taborder("4");
            obj.set_image("url(\'theme://images/img_MF_Image19.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_cssclass("img_MF_Trans");
            obj.set_accessibilitylabel("넥사크로");
            this.Div100.addChild(obj.name, obj);

            obj = new Panel("Panel00","80","106",null,"220","80",null,null,null,null,null,this.Div100.form);
            obj.set_taborder("5");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_horizontalgap("20");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel101\"/><PanelItem id=\"PanelItem03\" componentid=\"ImageViewer01\"/></Contents>");
            this.Div100.addChild(obj.name, obj);

            obj = new Button("Button00","116","250","228","69",null,null,"228",null,null,null,this.Div100.form);
            obj.set_taborder("6");
            obj.set_text("넥사크로플랫폼 소개");
            obj.set_flexgrow("1");
            obj.set_cssclass("btn_MF_ShortcutL");
            obj.set_accessibilityrole("link");
            obj.set_accessibilitydescription("[1/4]");
            this.Div100.addChild(obj.name, obj);

            obj = new Button("Button00_00","373","250","228","69",null,null,"228",null,null,null,this.Div100.form);
            obj.set_taborder("7");
            obj.set_text("제품 특징");
            obj.set_flexgrow("1");
            obj.set_cssclass("btn_MF_ShortcutL");
            obj.set_accessibilityrole("link");
            obj.set_accessibilitydescription("[2/4]");
            this.Div100.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","640","250","228","69",null,null,"228",null,null,null,this.Div100.form);
            obj.set_taborder("8");
            obj.set_text("구축 사례");
            obj.set_flexgrow("1");
            obj.set_cssclass("btn_MF_ShortcutL");
            obj.set_accessibilityrole("link");
            obj.set_accessibilitydescription("[3/4]");
            this.Div100.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00","896","250","228","69",null,null,"228",null,null,null,this.Div100.form);
            obj.set_taborder("9");
            obj.set_text("다운로드 센터");
            obj.set_flexgrow("1");
            obj.set_cssclass("btn_MF_ShortcutL");
            obj.set_accessibilityrole("link");
            obj.set_accessibilitydescription("[4/4]");
            this.Div100.addChild(obj.name, obj);

            obj = new Panel("Panel102","0","Panel00:60",null,"109","0",null,null,null,null,null,this.Div100.form);
            obj.set_taborder("10");
            obj.set_horizontalgap("8");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_spacing("0px 80px 40px 80px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Button00_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Button00_00_00_00\"/></Contents>");
            this.Div100.addChild(obj.name, obj);

            obj = new Panel("Panel200","0","Div100:64",null,"210","0",null,null,"1200",null,null,this);
            obj.set_taborder("1");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("24");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel201\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel202\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static200","80","557","190","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("자주 찾는 메뉴");
            obj.set_fittocontents("width");
            obj.set_cssclass("sta_WF_H3_pc");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01","226","560","102","48",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("설정하기");
            obj.set_flexshrink("0");
            obj.set_cssclass("btn_MF_Setting");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel201","0","557","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_horizontalgap("16");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static200\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","110","652","96","96",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("url(\'theme://images/img_MF_Image01.svg\') no-repeat center center #eef2f7");
            obj.set_borderRadius("12px");
            obj.set_accessibilityrole("image");
            obj.set_accessibilitylabel("기술자료실");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","80","769","100%","26",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("기술 자료실");
            obj.set_flexgrow("1");
            obj.set_cssclass("sta_WF_Txt17RCenter");
            obj.set_accessibilityaction("[1/10]");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03","80","769","118","138",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("16");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Static01\"/><PanelItem id=\"PanelItem00\" componentid=\"Static00_01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","120","662","96","96",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_background("url(\'theme://images/img_MF_Image02.svg\') no-repeat center center #eef2f7");
            obj.set_borderRadius("12px");
            obj.set_accessibilityrole("image");
            obj.set_accessibilitylabel("샘플 프로젝트");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","90","779","100%","26",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("샘플 프로젝트");
            obj.set_flexgrow("1");
            obj.set_cssclass("sta_WF_Txt17RCenter");
            obj.set_accessibilityaction("[2/10]");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_00","90","779","118","138",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("16");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Static01_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Static00_01_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","130","672","96","96",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_background("url(\'theme://images/img_MF_Image03.svg\') no-repeat center center #eef2f7");
            obj.set_borderRadius("12px");
            obj.set_accessibilityrole("image");
            obj.set_accessibilitylabel("개발자포럼");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_01","100","789","100%","26",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("개발자 포럼");
            obj.set_flexgrow("1");
            obj.set_cssclass("sta_WF_Txt17RCenter");
            obj.set_accessibilityaction("[3/10]");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_01","100","789","118","138",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("16");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Static01_01\"/><PanelItem id=\"PanelItem00\" componentid=\"Static00_01_00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02","140","682","96","96",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_background("url(\'theme://images/img_MF_Image04.svg\') no-repeat center center #eef2f7");
            obj.set_borderRadius("12px");
            obj.set_accessibilityrole("image");
            obj.set_accessibilitylabel("UI컴포넌트");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_02","110","799","100%","26",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("UI컴포넌트");
            obj.set_flexgrow("1");
            obj.set_cssclass("sta_WF_Txt17RCenter");
            obj.set_accessibilityaction("[4/10]");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_02","110","799","118","138",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("16");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Static01_02\"/><PanelItem id=\"PanelItem00\" componentid=\"Static00_01_00_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_03","150","692","96","96",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_background("url(\'theme://images/img_MF_Image05.svg\') no-repeat center center #eef2f7");
            obj.set_borderRadius("12px");
            obj.set_accessibilityrole("image");
            obj.set_accessibilitylabel("데모사이트");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_03","120","809","100%","26",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("데모사이트");
            obj.set_flexgrow("1");
            obj.set_cssclass("sta_WF_Txt17RCenter");
            obj.set_accessibilityaction("[5/10]");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_03","120","809","118","138",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("16");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Static01_03\"/><PanelItem id=\"PanelItem00\" componentid=\"Static00_01_00_03\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_04","160","702","96","96",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_background("url(\'theme://images/img_MF_Image06.svg\') no-repeat center center #eef2f7");
            obj.set_borderRadius("12px");
            obj.set_accessibilityrole("image");
            obj.set_accessibilitylabel("학습자료실");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_04","130","819","100%","26",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("학습 자료실");
            obj.set_flexgrow("1");
            obj.set_cssclass("sta_WF_Txt17RCenter");
            obj.set_accessibilityaction("[6/10]");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_04","130","819","118","138",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("16");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Static01_04\"/><PanelItem id=\"PanelItem00\" componentid=\"Static00_01_00_04\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_06_00","22","10","96","96",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_background("url(\'theme://images/img_MF_Image07.svg\') no-repeat center center #eef2f7");
            obj.set_borderRadius("12px");
            obj.set_accessibilityrole("image");
            obj.set_accessibilitylabel("제품지원요청");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_05","140","829","100%","26",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("제품 지원요청");
            obj.set_flexgrow("1");
            obj.set_cssclass("sta_WF_Txt17RCenter");
            obj.set_accessibilityaction("[7/10]");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_05","140","829","118","138",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("16");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Static01_06_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Static00_01_00_05\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_06","170","712","96","96",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_background("url(\'theme://images/img_MF_Image08.svg\') no-repeat center center #eef2f7");
            obj.set_borderRadius("12px");
            obj.set_accessibilityrole("image");
            obj.set_accessibilitylabel("배포도구 다운");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_06","150","839","100%","26",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("배포도구 다운");
            obj.set_flexgrow("1");
            obj.set_cssclass("sta_WF_Txt17RCenter");
            obj.set_accessibilityaction("[8/10]");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_06","150","839","118","138",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("16");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Static01_06\"/><PanelItem id=\"PanelItem00\" componentid=\"Static00_01_00_06\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_07","180","722","96","96",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_background("url(\'theme://images/img_MF_Image09.svg\') no-repeat center center #eef2f7");
            obj.set_borderRadius("12px");
            obj.set_accessibilityrole("image");
            obj.set_accessibilitylabel("릴리즈노트");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_07","160","849","100%","26",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("릴리즈 노트");
            obj.set_flexgrow("1");
            obj.set_cssclass("sta_WF_Txt17RCenter");
            obj.set_accessibilityaction("[9/10]");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_07","160","849","118","138",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("16");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Static01_07\"/><PanelItem id=\"PanelItem00\" componentid=\"Static00_01_00_07\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_08","190","732","96","96",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_background("url(\'theme://images/img_MF_Image10.svg\') no-repeat center center #eef2f7");
            obj.set_borderRadius("12px");
            obj.set_accessibilityrole("image");
            obj.set_accessibilitylabel("오픈소스");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_08","170","859","100%","26",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("오픈 소스");
            obj.set_flexgrow("1");
            obj.set_cssclass("sta_WF_Txt17RCenter");
            obj.set_accessibilityaction("[10/10]");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_08","170","859","118","138",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("16");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Static01_08\"/><PanelItem id=\"PanelItem00\" componentid=\"Static00_01_00_08\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel202","0","769","100%","138",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_spacing("12");
            obj.set_verticalgap("24");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("center");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel03\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel03_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel03_01\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel03_02\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel03_03\"/><PanelItem id=\"PanelItem05\" componentid=\"Panel03_04\"/><PanelItem id=\"PanelItem06\" componentid=\"Panel03_05\"/><PanelItem id=\"PanelItem07\" componentid=\"Panel03_06\"/><PanelItem id=\"PanelItem08\" componentid=\"Panel03_07\"/><PanelItem id=\"PanelItem09\" componentid=\"Panel03_08\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static300","90","567","182","50",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("공지 알림");
            obj.set_cssclass("sta_WF_H3_pc");
            obj.set_accessibilityrole("heading3");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01_00","226","560","70","40",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("더보기");
            obj.set_flexshrink("0");
            obj.set_cssclass("btn_MF_More");
            obj.set_accessibilityrole("link");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel301","0","818","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static300\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00_01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","67","904","42","24",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("공지");
            obj.set_flexshrink("0");
            obj.set_cssclass("sta_WF_BadgeLit01");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","207","904","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("[정기업데이트] Nexacro24N 정기 업데이트 안내 ");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","450","910","100","26",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("2024-01-01");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel302","0","904","100%","74",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_spacing("23px");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj.set_cssclass("pnl_MF_bg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static02\"/><PanelItem id=\"PanelItem01\" componentid=\"Static02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01","67","904","100%","26",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("[업데이트] Nexacro24N 1월 정기 패치 배포");
            obj.set_flexgrow("1");
            obj.set_cssclass("sta_WF_H6");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01","207","904","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("주요 버그 수정 및 성능 향상 포함\r\n Layout Editor 개선 및 신규 속성 추가");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel07_00","0","994","272","134",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_spacing("23px");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_verticalgap("8");
            obj.set_cssclass("pnl_MF_bg");
            obj.set_accessibilityenable("false");
            obj.set_accessibilityrole("link");
            obj.set_accessibilitylabel("[업데이트] Nexacro24N 1월 정기 패치 배포로 주요 버그 수정 향상 포함 및 레이아웃 에디터 개선 및 신규 속성");
            obj.set_accessibilityaction("[1/4]");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static02_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Static02_00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","77","914","100%","26",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("[안내] 개발자 가이드 문서 리뉴얼 완료");
            obj.set_flexgrow("1");
            obj.set_cssclass("sta_WF_H6");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00","217","914","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("구성과 검색 편의성이 대폭 개선된\n Nexacro 개발자 가이드를 지금 확인해보세요");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel07_00_00","230","994","272","134",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_spacing("23px");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_verticalgap("8");
            obj.set_cssclass("pnl_MF_bg");
            obj.set_accessibilityrole("link");
            obj.set_accessibilityaction("[2/4]");
            obj.set_accessibilitylabel("[안내] 개발자 가이드 문서 리뉴얼 완료로 구성과 검색 편의성이 대폭 개선");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static02_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static02_00_01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel32","0","0","572","134",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_horizontalgap("24");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_verticalgap("24");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel07_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel07_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00","23","23","100%","26",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("[신규 자료] 넥사크로 컴포넌트 데모 추가");
            obj.set_flexgrow("1");
            obj.set_cssclass("sta_WF_H6");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00","23","49","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("그리드, 데이터 필드 등 주요 컴포넌트의 실사용 예제 및 활용 가이드를 업데이트했습니다");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel07_00_00_00","430","994","272","134",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_spacing("23px");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_verticalgap("8");
            obj.set_cssclass("pnl_MF_bg");
            obj.set_accessibilityrole("link");
            obj.set_accessibilityaction("[3/4]");
            obj.set_accessibilitylabel("[신규 자료] 넥사크로 컴포넌트 데모 추가");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static02_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static02_00_01_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00","33","33","100%","26",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("[공지] Nexacro UXPro 서비스 공식 지원 개시");
            obj.set_flexgrow("1");
            obj.set_cssclass("sta_WF_H6");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_00","33","59","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("UI/UX 컨설팅부터 디자인, 퍼블리싱까지 One-Stop 통합 서비스 운영을 시작합니다");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel07_00_00_00_00","626","994","272","134",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_spacing("23px");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_verticalgap("8");
            obj.set_cssclass("pnl_MF_bg");
            obj.set_accessibilityrole("link");
            obj.set_accessibilityaction("[4/4]");
            obj.set_accessibilitylabel("[공지] Nexacro UXPro 서비스 공식 지원 개시");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static02_01_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static02_00_01_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel31","612","0","572","134",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("24");
            obj.set_horizontalgap("24");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel07_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel07_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel303","0","994","100%","134",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("24");
            obj.set_verticalgap("24");
            obj.set_flexmainaxisalign("center");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel32\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel31\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel300","0","Panel200:64",null,"304","0",null,null,"1200",null,null,this);
            obj.set_taborder("58");
            obj.set_verticalgap("24");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel301\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel302\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel303\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static400","0","1182","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("원스톱 서비스 ");
            obj.set_cssclass("sta_WF_H3_pc");
            obj.set_accessibilityrole("heading3");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_00","0","1252","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("꾸러미 서비스");
            obj.set_cssclass("sta_WF_15B");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_00_00","0","1296","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("UXPro로 완성하는\r\n전문적인 UI/UX");
            obj.set_cssclass("sta_WF_H4");
            obj.set_fittocontents("height");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel11","0","1252","100%","103",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj.set_flexgrow("1");
            obj.set_verticalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_01_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_01_01_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_00_00_00","10","1382","182","48",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("UX 기획부터 디자인, 퍼블리싱까지  \r\n25년 노하우로 구현하는 올인원 서비스");
            obj.set_cssclass("sta_WF_Para17RG");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel12","0","1252","260","282",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("20");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel11\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_01_01_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","304","1204","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("전문 컨설팅");
            obj.set_cssclass("btn_MF_ShortcutM");
            obj.set_accessibilityrole("link");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00","304","1260","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("UI 디자인");
            obj.set_cssclass("btn_MF_ShortcutM");
            obj.set_accessibilityrole("link");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00_00","304","1315","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("퍼블리싱 지원");
            obj.set_cssclass("btn_MF_ShortcutM");
            obj.set_accessibilityrole("link");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00_00_00","304","1385","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("커스터마이징");
            obj.set_cssclass("btn_MF_ShortcutM");
            obj.set_accessibilityrole("link");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00_00_00_00","304","1440","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("도입가이드");
            obj.set_cssclass("btn_MF_ShortcutM");
            obj.set_accessibilityrole("link");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel10","304","1204","200","282",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_flexshrink("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button01\"/><PanelItem id=\"PanelItem01\" componentid=\"Button01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Button01_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Button01_00_00_00\"/><PanelItem id=\"PanelItem04\" componentid=\"Button01_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel13","0","1252","100%","360",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_spacing("32px");
            obj.set_verticalgap("40");
            obj.set_horizontalgap("40");
            obj.set_flexgrow("1");
            obj.set_background("#EEF2F7");
            obj.set_borderRadius("12px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel12\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel10\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel401","0","1182","64.33333333333333%","432",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_flexgrow("1");
            obj.set_verticalgap("24");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static400\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel13\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_01","10","1192","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("복합 콘텐츠");
            obj.set_cssclass("sta_WF_H3_pc");
            obj.set_accessibilityrole("heading3");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_06_01","22","10","100%","360",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_background("url(\'theme://images/img_MF_Image11.png\') no-repeat center center #eef2f7");
            obj.set_borderRadius("12px");
            obj.set_accessibilityrole("image");
            obj.set_accessibilitylabel("활용 세례와 개발 인사이트를 소개합니다. 스마트 시티 웹포털 구축 사례");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel402","10","1192","300","432",null,null,"300",null,null,null,this);
            obj.set_taborder("75");
            obj.set_flexwrap("wrap");
            obj.set_flexgrow("1");
            obj.set_verticalgap("24");
            obj.set_flexshrink("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Static00_01_01_00_01\"/><PanelItem id=\"PanelItem00\" componentid=\"Static01_06_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel400","0","Panel300:64",null,"434","0",null,null,"1200",null,null,this);
            obj.set_taborder("76");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("24");
            obj.set_verticalgap("40");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel401\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel402\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static500","10","1650","130","50",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("뉴스");
            obj.set_cssclass("sta_WF_H3_pc");
            obj.set_accessibilityrole("heading3");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","26","1730","82","40",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("전체");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_MF_TabS");
            obj.set_accessibilityrole("tab");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_00","110","1730","82","40",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_text("공지사항");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_MF_Tab");
            obj.set_accessibilityrole("tab");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_00_00","192","1730","82","40",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("자료실");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_MF_Tab");
            obj.set_accessibilityrole("tab");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_00_01","277","1730","117","40",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_text("연구보고서");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_MF_Tab");
            obj.set_accessibilityrole("tab");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_00_00_00","359","1730","140","40",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_text("자주묻는 질문");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_MF_Tab");
            obj.set_accessibilityrole("tab");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel16","26","1730","410","40",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button02\"/><PanelItem id=\"PanelItem01\" componentid=\"Button02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Button02_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Button02_00_01\"/><PanelItem id=\"PanelItem04\" componentid=\"Button02_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00","1137","1650","70","40",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_text("더보기");
            obj.set_flexshrink("0");
            obj.set_cssclass("btn_MF_More");
            obj.set_accessibilityrole("link");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","1130","0","70","40",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_flexmainaxisalign("end");
            obj.set_fittocontents("width");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_01_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel501","0","1730","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel16\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_00_01_01","290","1880","100%","29",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_text("넥사크로로 구현하는 반응형 웹 UI 전략");
            obj.set_cssclass("sta_WF_H5");
            obj.set_flexgrow("1");
            obj.set_accessibilityrole("heading4");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_00_00_01_01","292","1960","100%","48",null,null,null,null,null,"76",this);
            obj.set_taborder("88");
            obj.set_text("다양한 디바이스에 최적화된 화면 설계를 위한 넥사크로의 반응형 레이아웃 활용법을 소개합니다");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel09","0","0","100%","113",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_flexwrap("wrap");
            obj.set_flexgrow("1");
            obj.set_verticalgap("8");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_01_01_00_00_01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_01_01_00_00_00_01_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_01","319","2043","200","24",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_text("자세히보기");
            obj.set_cssclass("btn_MF_ShortcutS");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("link");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01_00","65","1851","200","170",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_flexgrow("0");
            obj.set_image("url(\'theme://images/img_MF_Image12.png\')");
            obj.set_accessibilitylabel("넥사크로로 구현하는 반응형 웹 UI");
            obj.set_accessibilityrole("image");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel18_01","280","1870","300","170",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("12");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxiswrapalign("spacebetween");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel09\"/><PanelItem id=\"PanelItem02\" componentid=\"Button03_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","31","31","372","170",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_horizontalgap("24");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"ImageViewer01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel18_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel19_00","725","2168","372","234",null,null,null,null,"234",null,this);
            obj.set_taborder("94");
            obj.set_spacing("31px");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("12");
            obj.set_cssclass("pnl_MF_bg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button03_01_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_00_01_00_00","280","1870","100%","29",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_text("공공기관 넥사크로 도입 사례 인터뷰");
            obj.set_cssclass("sta_WF_H5");
            obj.set_flexgrow("1");
            obj.set_accessibilityrole("heading4");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_00_00_01_00_00","282","1950","100%","76",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_text("공공서비스 고도화를 위해 넥사크로를 선택한 시청 스마트민원 시스템 담당자와의 인터뷰입니다. UI/UX 개선부터 유지보수까지, 실제 도입 경험을 생생히 전달합니다.\r\n프로젝트 과정에서의 고민과 해결 과정도 함께 확인해보세요.");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel14","10","10","100%","113",null,null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_flexwrap("wrap");
            obj.set_flexgrow("1");
            obj.set_verticalgap("8");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_01_01_00_00_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_01_01_00_00_00_01_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_00_00","309","2033","200","24",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_text("자세히보기");
            obj.set_cssclass("btn_MF_ShortcutS");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("link");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel18_00_00","820","1870","100%","170",null,null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("12");
            obj.set_flexcrossaxiswrapalign("spacebetween");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel14\"/><PanelItem id=\"PanelItem02\" componentid=\"Button03_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_01_01_00","41","223","100%","32",null,null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_text("자세히보기");
            obj.set_cssclass("btn_MF_ShortcutS");
            obj.set_flexgrow("1");
            obj.set_visible("false");
            obj.set_accessibilityrole("link");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel20_00","30","2097","372","234",null,null,null,null,"234",null,this);
            obj.set_taborder("101");
            obj.set_spacing("31px");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("12");
            obj.set_cssclass("pnl_MF_bg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel18_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button03_01_01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel22","0","258","100%","234",null,null,null,null,null,null,this);
            obj.set_taborder("102");
            obj.set_horizontalgap("24");
            obj.set_verticalgap("24");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel19_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel20_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_00_01_00","290","1880","100%","29",null,null,null,null,null,null,this);
            obj.set_taborder("103");
            obj.set_text("2025 UI/UX 기술 전망과 넥사크로의 방향");
            obj.set_cssclass("sta_WF_H5");
            obj.set_flexgrow("1");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_00_00_01_00","282","1950","100%","76",null,null,null,null,null,null,this);
            obj.set_taborder("104");
            obj.set_text("올해도 저코드/하이프로덕티비티 개발이 화두입니다. 넥사크로는 이러한 트렌드에 맞춰 Studio 기능 강화와 디자이너-개발자 협업 환경 개선을 지속하고 있습니다. 2025년의 UX 전략과 넥사크로의 비전, 지금 확인해보세요.");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel17","20","20","100%","113",null,null,null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_flexwrap("wrap");
            obj.set_flexgrow("1");
            obj.set_verticalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_01_01_00_00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_01_01_00_00_00_01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_00","329","2053","200","24",null,null,null,null,null,null,this);
            obj.set_taborder("106");
            obj.set_text("자세히보기");
            obj.set_cssclass("btn_MF_ShortcutS");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("link");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel18_00","830","1880","100%","170",null,null,null,null,null,"170",this);
            obj.set_taborder("107");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("12");
            obj.set_flexcrossaxiswrapalign("spacebetween");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel17\"/><PanelItem id=\"PanelItem02\" componentid=\"Button03_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_01_01_00_00","51","233","100%","32",null,null,null,null,null,null,this);
            obj.set_taborder("108");
            obj.set_text("자세히보기");
            obj.set_cssclass("btn_MF_ShortcutS");
            obj.set_flexgrow("1");
            obj.set_visible("false");
            obj.set_accessibilityrole("link");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel20","820","1870","372","234",null,null,null,null,"234",null,this);
            obj.set_taborder("109");
            obj.set_spacing("31px");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("12");
            obj.set_cssclass("pnl_MF_bg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel18_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button03_01_01_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_00_01_01_01","300","1890","100%","29",null,null,null,null,null,null,this);
            obj.set_taborder("110");
            obj.set_text("Studio기능 향상 및 신규 컴포넌트 안내");
            obj.set_cssclass("sta_WF_H5");
            obj.set_flexgrow("1");
            obj.set_accessibilityrole("heading4");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_00_00_01_01_01","302","1970","100%","76",null,null,null,null,null,null,this);
            obj.set_taborder("111");
            obj.set_text("넥사크로 Studio에 새롭게 추가된 레이아웃 도우미 기능과 UX 최적화를 위한 그리드, 데이터 필드 컴포넌트가 포함됐습니다. 신규 기능은 개발 생산성을 높이는 데 초점을 맞췄습니다. 자세한 업데이트 내역과 활용 방법을 안내드립니다.");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel15","30","30","100%","113",null,null,null,null,null,null,this);
            obj.set_taborder("112");
            obj.set_flexwrap("wrap");
            obj.set_flexgrow("1");
            obj.set_verticalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_01_01_00_00_01_01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_01_01_00_00_00_01_01_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_01_02","339","2063","200","24",null,null,null,null,null,null,this);
            obj.set_taborder("113");
            obj.set_text("자세히보기");
            obj.set_cssclass("btn_MF_ShortcutS");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("link");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01_00_01","75","1861","200","170",null,null,null,null,null,null,this);
            obj.set_taborder("114");
            obj.set_flexgrow("0");
            obj.set_image("url(\'theme://images/img_MF_Image13.png\')");
            obj.set_accessibilitylabel("Studio 기능 향상 및 신규 컴포넌트 안내");
            obj.set_accessibilityrole("image");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel18_01_01","290","1880","300","170",null,null,null,null,null,null,this);
            obj.set_taborder("115");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("12");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxiswrapalign("spacebetween");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel15\"/><PanelItem id=\"PanelItem02\" componentid=\"Button03_01_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","41","41","372","170",null,null,null,null,null,"170",this);
            obj.set_taborder("116");
            obj.set_horizontalgap("24");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"ImageViewer01_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel18_01_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_01_01_01","20","149","100%","32",null,null,null,null,null,null,this);
            obj.set_taborder("117");
            obj.set_text("자세히보기");
            obj.set_cssclass("btn_MF_ShortcutS");
            obj.set_flexgrow("1");
            obj.set_visible("false");
            obj.set_accessibilityrole("link");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel19_00_00","10","10","372","234",null,null,null,null,"234",null,this);
            obj.set_taborder("118");
            obj.set_spacing("31px");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("12");
            obj.set_cssclass("pnl_MF_bg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button03_01_01_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel23","0","0","100%","234",null,null,null,null,null,null,this);
            obj.set_taborder("119");
            obj.set_horizontalgap("24");
            obj.set_verticalgap("24");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel20\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel19_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel502","0","1851","100%","492",null,null,null,null,null,null,this);
            obj.set_taborder("120");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("24");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel22\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel23\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_01_01","10","139","100%","32",null,null,null,null,null,null,this);
            obj.set_taborder("121");
            obj.set_text("자세히보기");
            obj.set_cssclass("btn_MF_ShortcutS");
            obj.set_flexgrow("1");
            obj.set_visible("false");
            obj.set_accessibilityrole("link");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel500","0","Panel400:64",null,"630","0",null,null,"1200",null,null,this);
            obj.set_taborder("122");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("24");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Static500\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel501\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel502\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_01","100","577","280","50",null,null,null,null,null,null,this);
            obj.set_taborder("123");
            obj.set_text("넥사크로 기능 소개");
            obj.set_cssclass("sta_WF_H3_pc");
            obj.set_accessibilityrole("heading3");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01","236","570","70","40",null,null,null,null,null,null,this);
            obj.set_taborder("124");
            obj.set_text("더보기");
            obj.set_flexshrink("0");
            obj.set_cssclass("btn_MF_More");
            obj.set_accessibilityrole("link");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel601","0","2500","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("125");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_01_01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00_01_00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer02","60","2589","100%","196",null,null,null,null,null,null,this);
            obj.set_taborder("126");
            obj.set_image("url(\'theme://images/img_MF_Image14.png\')");
            obj.set_accessibilitylabel("넥사크로 스튜디오");
            obj.set_cssclass("img_MF_CardBg");
            obj.set_accessibilityrole("image");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","87","2833","42","24",null,null,null,null,null,null,this);
            obj.set_taborder("127");
            obj.set_text("태그");
            obj.set_cssclass("sta_WF_BadgeLit01");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04","32","32","42","32",null,null,null,null,null,null,this);
            obj.set_taborder("128");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static03\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","87","2860","218","24",null,null,null,null,null,null,this);
            obj.set_taborder("129");
            obj.set_text("넥사크로 스튜디오");
            obj.set_cssclass("sta_WF_H5");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00","87","2890","218","48",null,null,null,null,null,null,this);
            obj.set_taborder("130");
            obj.set_text("웹 기반 UI 화면을 빠르게 설계할 수 있는 강력한 툴입니다.");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_00_01","199","3000","200","32",null,null,null,null,null,null,this);
            obj.set_taborder("131");
            obj.set_text("바로가기");
            obj.set_cssclass("btn_MF_ShortcutS");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("link");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel25","199","3000","218","60",null,null,null,null,null,null,this);
            obj.set_taborder("132");
            obj.set_flexmainaxisalign("end");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button03_00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel26","87","2833","100%","249",null,null,null,null,null,null,this);
            obj.set_taborder("133");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("8");
            obj.set_spacing("32px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel04\"/><PanelItem id=\"PanelItem01\" componentid=\"Static03_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static03_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel25\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel27","60","2589","174","445",null,null,null,null,null,null,this);
            obj.set_taborder("134");
            obj.set_flexwrap("wrap");
            obj.set_flexgrow("1");
            obj.set_cssclass("pnl_MF_bg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"ImageViewer02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel26\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer02_00","70","2599","100%","196",null,null,null,null,null,null,this);
            obj.set_taborder("135");
            obj.set_image("url(\'theme://images/img_MF_Image15.png\')");
            obj.set_accessibilitylabel("레이아웃 관리 기능");
            obj.set_cssclass("img_MF_CardBg");
            obj.set_accessibilityrole("image");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_01","97","2843","42","24",null,null,null,null,null,null,this);
            obj.set_taborder("136");
            obj.set_text("태그");
            obj.set_cssclass("sta_WF_BadgeLit01");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel05","42","42","42","32",null,null,null,null,null,null,this);
            obj.set_taborder("137");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static03_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_01","97","2870","218","24",null,null,null,null,null,null,this);
            obj.set_taborder("138");
            obj.set_text("레이아웃 관리 기능");
            obj.set_cssclass("sta_WF_H5");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00","97","2900","218","48",null,null,null,null,null,null,this);
            obj.set_taborder("139");
            obj.set_text("업무화면 구조 설계를 더욱 쉽게, 효율적으로 도와줍니다.");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_00_01_00","209","3010","200","32",null,null,null,null,null,null,this);
            obj.set_taborder("140");
            obj.set_text("바로가기");
            obj.set_cssclass("btn_MF_ShortcutS");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("link");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel25_00","209","3010","218","60",null,null,null,null,null,null,this);
            obj.set_taborder("141");
            obj.set_flexmainaxisalign("end");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button03_00_01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel26_00","97","2843","100%","249",null,null,null,null,null,null,this);
            obj.set_taborder("142");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("8");
            obj.set_spacing("32px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel05\"/><PanelItem id=\"PanelItem01\" componentid=\"Static03_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Static03_00_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel25_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel27_00","70","2599","174","445",null,null,null,null,null,null,this);
            obj.set_taborder("143");
            obj.set_flexwrap("wrap");
            obj.set_flexgrow("1");
            obj.set_cssclass("pnl_MF_bg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"ImageViewer02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel26_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel29","0","0","372","445",null,null,null,null,null,null,this);
            obj.set_taborder("144");
            obj.set_horizontalgap("24");
            obj.set_flexwrap("wrap");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("24");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel27\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel27_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer02_01","80","2609","100%","196",null,null,null,null,null,null,this);
            obj.set_taborder("145");
            obj.set_image("url(\'theme://images/img_MF_Image16.png\')");
            obj.set_accessibilitylabel("고급 컴포넌트");
            obj.set_cssclass("img_MF_CardBg");
            obj.set_accessibilityrole("image");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_02","107","2853","42","24",null,null,null,null,null,null,this);
            obj.set_taborder("146");
            obj.set_text("태그");
            obj.set_cssclass("sta_WF_BadgeLit01");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel06","52","52","42","32",null,null,null,null,null,null,this);
            obj.set_taborder("147");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static03_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_02","107","2880","218","24",null,null,null,null,null,null,this);
            obj.set_taborder("148");
            obj.set_text("고급 컴포넌트");
            obj.set_cssclass("sta_WF_H5");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_01","107","2910","218","48",null,null,null,null,null,null,this);
            obj.set_taborder("149");
            obj.set_text("그리드, 데이터 필드 등 다양한 컴포넌트를 손쉽게 활용하세요.");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_00_01_01","219","3020","200","32",null,null,null,null,null,null,this);
            obj.set_taborder("150");
            obj.set_text("바로가기");
            obj.set_cssclass("btn_MF_ShortcutS");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("link");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel25_01","219","3020","218","60",null,null,null,null,null,null,this);
            obj.set_taborder("151");
            obj.set_flexmainaxisalign("end");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button03_00_01_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel26_01","107","2853","100%","249",null,null,null,null,null,null,this);
            obj.set_taborder("152");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("8");
            obj.set_spacing("32px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel06\"/><PanelItem id=\"PanelItem01\" componentid=\"Static03_00_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Static03_00_00_01\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel25_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel27_01","80","2609","174","445",null,null,null,null,null,null,this);
            obj.set_taborder("153");
            obj.set_flexwrap("wrap");
            obj.set_flexgrow("1");
            obj.set_cssclass("pnl_MF_bg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"ImageViewer02_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel26_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer02_02","90","2619","100%","196",null,null,null,null,null,null,this);
            obj.set_taborder("154");
            obj.set_image("url(\'theme://images/img_MF_Image17.png\')");
            obj.set_accessibilitylabel("다국어/다국가 지원");
            obj.set_cssclass("img_MF_CardBg");
            obj.set_accessibilityrole("image");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_03","117","2863","42","24",null,null,null,null,null,null,this);
            obj.set_taborder("155");
            obj.set_text("태그");
            obj.set_cssclass("sta_WF_BadgeLit01");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel07","62","62","42","32",null,null,null,null,null,null,this);
            obj.set_taborder("156");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static03_03\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_03","117","2890","218","24",null,null,null,null,null,null,this);
            obj.set_taborder("157");
            obj.set_text("다국어/다국가 지원");
            obj.set_cssclass("sta_WF_H5");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_02","117","2920","218","48",null,null,null,null,null,null,this);
            obj.set_taborder("158");
            obj.set_text("글로벌 서비스를 위한 다국어 리소스 관리 및 로케일 설정 기능을 제공합니다.");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_00_01_02","229","3030","200","32",null,null,null,null,null,null,this);
            obj.set_taborder("159");
            obj.set_text("바로가기");
            obj.set_cssclass("btn_MF_ShortcutS");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("link");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel25_02","229","3030","218","60",null,null,null,null,null,null,this);
            obj.set_taborder("160");
            obj.set_flexmainaxisalign("end");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button03_00_01_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel26_02","117","2863","100%","249",null,null,null,null,null,null,this);
            obj.set_taborder("161");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("8");
            obj.set_spacing("32px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel07\"/><PanelItem id=\"PanelItem01\" componentid=\"Static03_00_03\"/><PanelItem id=\"PanelItem02\" componentid=\"Static03_00_00_02\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel25_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel27_02","90","2619","174","445",null,null,null,null,null,null,this);
            obj.set_taborder("162");
            obj.set_flexwrap("wrap");
            obj.set_flexgrow("1");
            obj.set_cssclass("pnl_MF_bg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"ImageViewer02_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel26_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel30","564","0","372","445",null,null,null,null,null,null,this);
            obj.set_taborder("163");
            obj.set_horizontalgap("24");
            obj.set_flexwrap("wrap");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("24");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel27_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel27_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel602","0","2589","100%","445",null,null,null,null,null,null,this);
            obj.set_taborder("164");
            obj.set_verticalgap("24");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("24");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel29\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel30\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel600","0","Panel500:64",null,"519","0",null,null,"1200",null,null,this);
            obj.set_taborder("165");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("24");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel601\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel602\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_01_00","110","587","300","50",null,null,null,null,null,null,this);
            obj.set_taborder("166");
            obj.set_text("넥사크로 플랫폼 운영팀");
            obj.set_cssclass("sta_WF_H3_pc");
            obj.set_flexgrow("1");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00","246","580","70","40",null,null,null,null,null,null,this);
            obj.set_taborder("167");
            obj.set_text("더보기");
            obj.set_flexshrink("0");
            obj.set_cssclass("btn_MF_More");
            obj.set_accessibilityrole("link");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel701","0","3150","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("168");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("center");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_01_01_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00_01_00_01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01_00_00","65","1851","352","200",null,null,null,null,null,null,this);
            obj.set_taborder("169");
            obj.set_flexgrow("0");
            obj.set_image("url(\'theme://images/img_MF_Image18.png\')");
            obj.set_accessibilitylabel("넥사크로 플랫폼 운영팀 게시글 이미지");
            obj.set_accessibilityrole("image");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_00_01_01_00_00","10","10","42","24",null,null,null,null,null,null,this);
            obj.set_taborder("170");
            obj.set_text("태그");
            obj.set_cssclass("sta_WF_BadgeLit01");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel08","20","20","42","32",null,null,null,null,null,null,this);
            obj.set_taborder("171");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_01_01_00_00_01_01_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_00_01_01_00","290","1880","100%","29",null,null,null,null,null,null,this);
            obj.set_taborder("172");
            obj.set_text("넥사크로는 안정적인 UI 프레임워크 제공을 위해 지속적인 기술 지원과 업데이트를 제공합니다.");
            obj.set_cssclass("sta_WF_H5");
            obj.set_flexgrow("1");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_00_00_01_01_00","292","1960","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("173");
            obj.set_text("제품 도입이나 기술 문의가 있으시면 운영팀에 언제든지 연락주시기 바랍니다. 고객님의 업무 환경과 구축 목적에 맞는 기술 안내와 도입 컨설팅을 지원해드리며, 최신 버전의 기능 활용법, 개발 환경 구성, 배포 전략 등도 함께 안내해드립니다.");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_01_00","319","2043","118","32",null,null,null,null,null,null,this);
            obj.set_taborder("174");
            obj.set_text("바로가기");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_MF_ShortcutS");
            obj.set_accessibilityrole("link");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02","20","135","200","67",null,null,null,null,null,null,this);
            obj.set_taborder("175");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("end");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button03_01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel18_01_00","280","1870","300","200",null,null,null,null,null,null,this);
            obj.set_taborder("176");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Panel08\"/><PanelItem id=\"PanelItem00\" componentid=\"Static00_01_01_00_00_01_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_01_01_00_00_00_01_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel702","0","3200","100%","264",null,null,null,null,null,null,this);
            obj.set_taborder("177");
            obj.set_spacing("31px");
            obj.set_horizontalgap("24");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("24");
            obj.set_cssclass("pnl_MF_bg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"ImageViewer01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel18_01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel700","0","Panel600:64",null,"338","0",null,null,"1200",null,null,this);
            obj.set_taborder("179");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("24");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel701\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel702\"/></Contents>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div100.form
            obj = new Layout("default","",0,0,this.Div100.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.ImageViewer00.set_taborder("0");
                p.ImageViewer00.set_image("url(\'theme://images/img_MF_UXProLogo_pc.svg\')");
                p.ImageViewer00.set_imagealign("left middle");
                p.ImageViewer00.set_background("transparent");
                p.ImageViewer00.set_accessibilitylabel("유엑스Pro KRDS");
                p.ImageViewer00.set_accessibilityrole("heading2");
                p.ImageViewer00.move("80","40",null,"26","80",null);

                p.Static100.set_taborder("1");
                p.Static100.set_text("NexacroN V24로 구현한\n정부 공식 디자인 시스템을 만나보세요");
                p.Static100.set_flexgrow("1");
                p.Static100.set_fittocontents("height");
                p.Static100.set_cssclass("sta_MF_DisplayM_pc");
                p.Static100.set_wordWrap("char");
                p.Static100.move("102","109","100%","114",null,null);

                p.Static101.set_taborder("2");
                p.Static101.set_text("공공·금융·제조·서비스 등 다양한 산업군의 업무환경에 최적화된 UI/UX 플랫폼  \r\n기업과 기관의 디지털 전환을 지원하는 HTML5 기반의 스마트한 웹 표준 솔루션");
                p.Static101.set_fittocontents("height");
                p.Static101.set_wordWrap("char");
                p.Static101.set_cssclass("sta_WF_Txt19B");
                p.Static101.move("102","190","100%","57",null,null);

                p.Panel101.set_taborder("3");
                p.Panel101.set_type("horizontal");
                p.Panel101.set_verticalgap("16");
                p.Panel101.set_fittocontents("height");
                p.Panel101.set_flexgrow("1");
                p.Panel101.set_flexwrap("wrap");
                p.Panel101.move("102","109","100","220",null,null);

                p.ImageViewer01.set_taborder("4");
                p.ImageViewer01.set_image("url(\'theme://images/img_MF_Image19.png\')");
                p.ImageViewer01.set_stretch("fixaspectratio");
                p.ImageViewer01.set_cssclass("img_MF_Trans");
                p.ImageViewer01.set_accessibilitylabel("넥사크로");
                p.ImageViewer01.set_minwidth("");
                p.ImageViewer01.set_maxwidth("273");
                p.ImageViewer01.move("839","257","273","220",null,null);

                p.Panel00.set_taborder("5");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_horizontalgap("20");
                p.Panel00.move("80","106",null,"220","80",null);

                p.Button00.set_taborder("6");
                p.Button00.set_text("넥사크로플랫폼 소개");
                p.Button00.set_flexgrow("1");
                p.Button00.set_cssclass("btn_MF_ShortcutL");
                p.Button00.set_accessibilityrole("link");
                p.Button00.set_accessibilitydescription("[1/4]");
                p.Button00.set_minwidth("228");
                p.Button00.set_maxwidth("");
                p.Button00.move("116","250","228","69",null,null);

                p.Button00_00.set_taborder("7");
                p.Button00_00.set_text("제품 특징");
                p.Button00_00.set_flexgrow("1");
                p.Button00_00.set_cssclass("btn_MF_ShortcutL");
                p.Button00_00.set_accessibilityrole("link");
                p.Button00_00.set_accessibilitydescription("[2/4]");
                p.Button00_00.set_minwidth("228");
                p.Button00_00.set_maxwidth("");
                p.Button00_00.move("373","250","228","69",null,null);

                p.Button00_00_00.set_taborder("8");
                p.Button00_00_00.set_text("구축 사례");
                p.Button00_00_00.set_flexgrow("1");
                p.Button00_00_00.set_cssclass("btn_MF_ShortcutL");
                p.Button00_00_00.set_accessibilityrole("link");
                p.Button00_00_00.set_accessibilitydescription("[3/4]");
                p.Button00_00_00.set_minwidth("228");
                p.Button00_00_00.set_maxwidth("");
                p.Button00_00_00.move("640","250","228","69",null,null);

                p.Button00_00_00_00.set_taborder("9");
                p.Button00_00_00_00.set_text("다운로드 센터");
                p.Button00_00_00_00.set_flexgrow("1");
                p.Button00_00_00_00.set_cssclass("btn_MF_ShortcutL");
                p.Button00_00_00_00.set_accessibilityrole("link");
                p.Button00_00_00_00.set_accessibilitydescription("[4/4]");
                p.Button00_00_00_00.set_minwidth("228");
                p.Button00_00_00_00.set_maxwidth("");
                p.Button00_00_00_00.move("896","250","228","69",null,null);

                p.Panel102.set_taborder("10");
                p.Panel102.set_horizontalgap("8");
                p.Panel102.set_verticalgap("8");
                p.Panel102.set_flexwrap("wrap");
                p.Panel102.set_fittocontents("height");
                p.Panel102.set_flexgrow("1");
                p.Panel102.set_spacing("0px 80px 40px 80px");
                p.Panel102.move("0","Panel00:60",null,"109","0",null);
            	}
            );
            this.Div100.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div100.form
            obj = new Layout("Layout0","",0,0,this.Div100.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static100.move("102","109","100%","125",null,null);

                p.Panel102.set_spacing("0px 16px 32px 16px");
                p.Panel102.move("0","Panel00:16",null,"324","0",null);

                p.Panel101.set_verticalgap("12");
                p.Panel101.set_fittocontents("height");
                p.Panel101.move("102","109","100%","251",null,null);

                p.Static101.set_fittocontents("height");
                p.Static101.move("102","190","142.29%","70",null,null);

                p.Button00.move("116","250","480","69",null,null);

                p.Button00_00.move("373","250","480","69",null,null);

                p.Button00_00_00.move("640","250","480","69",null,null);

                p.Button00_00_00_00.move("896","250","480","69",null,null);

                p.ImageViewer00.set_image("url(\'theme://images/img_MF_UXProLogo_m.svg\')");
                p.ImageViewer00.move("16","40",null,"26","16",null);

                p.Panel00.set_verticalgap("12");
                p.Panel00.move("16","ImageViewer00:24",null,"423","16",null);

                p.ImageViewer01.set_minwidth("");
                p.ImageViewer01.set_maxwidth("1000");
                p.ImageViewer01.move("839","257","100%","160",null,null);
            	}
            );
            this.Div100.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1200,3315,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("New Form");

                p.Div100.set_taborder("0");
                p.Div100.set_text("Div00");
                p.Div100.set_background("#D3DEE3");
                p.Div100.set_borderRadius("12px");
                p.Div100.set_fittocontents("height");
                p.Div100.set_minwidth("");
                p.Div100.set_maxwidth("1200");
                p.Div100.move("0","0",null,"495","0",null);

                p.Panel200.set_taborder("1");
                p.Panel200.set_flexwrap("wrap");
                p.Panel200.set_verticalgap("24");
                p.Panel200.set_fittocontents("height");
                p.Panel200.set_minwidth("");
                p.Panel200.set_maxwidth("1200");
                p.Panel200.move("0","Div100:64",null,"210","0",null);

                p.Static200.set_taborder("2");
                p.Static200.set_text("자주 찾는 메뉴");
                p.Static200.set_fittocontents("width");
                p.Static200.set_cssclass("sta_WF_H3_pc");
                p.Static200.set_accessibilityrole("heading3");
                p.Static200.move("80","557","190","50",null,null);

                p.Button00_01.set_taborder("3");
                p.Button00_01.set_text("설정하기");
                p.Button00_01.set_flexshrink("0");
                p.Button00_01.set_cssclass("btn_MF_Setting");
                p.Button00_01.move("226","560","102","48",null,null);

                p.Panel201.set_taborder("4");
                p.Panel201.set_horizontalgap("16");
                p.Panel201.set_flexcrossaxisalign("center");
                p.Panel201.move("0","557","100%","50",null,null);

                p.Static01.set_taborder("5");
                p.Static01.set_background("url(\'theme://images/img_MF_Image01.svg\') no-repeat center center #eef2f7");
                p.Static01.set_borderRadius("12px");
                p.Static01.set_accessibilityrole("image");
                p.Static01.set_accessibilitylabel("기술자료실");
                p.Static01.set_accessibilityenable("false");
                p.Static01.move("110","652","96","96",null,null);

                p.Static00_01_00.set_taborder("6");
                p.Static00_01_00.set_text("기술 자료실");
                p.Static00_01_00.set_flexgrow("1");
                p.Static00_01_00.set_cssclass("sta_WF_Txt17RCenter");
                p.Static00_01_00.set_accessibilityaction("[1/10]");
                p.Static00_01_00.move("80","769","100%","26",null,null);

                p.Panel03.set_taborder("7");
                p.Panel03.set_flexwrap("wrap");
                p.Panel03.set_verticalgap("16");
                p.Panel03.set_flexmainaxisalign("center");
                p.Panel03.move("80","769","118","138",null,null);

                p.Static01_00.set_taborder("8");
                p.Static01_00.set_background("url(\'theme://images/img_MF_Image02.svg\') no-repeat center center #eef2f7");
                p.Static01_00.set_borderRadius("12px");
                p.Static01_00.set_accessibilityrole("image");
                p.Static01_00.set_accessibilitylabel("샘플 프로젝트");
                p.Static01_00.set_accessibilityenable("false");
                p.Static01_00.move("120","662","96","96",null,null);

                p.Static00_01_00_00.set_taborder("9");
                p.Static00_01_00_00.set_text("샘플 프로젝트");
                p.Static00_01_00_00.set_flexgrow("1");
                p.Static00_01_00_00.set_cssclass("sta_WF_Txt17RCenter");
                p.Static00_01_00_00.set_accessibilityaction("[2/10]");
                p.Static00_01_00_00.move("90","779","100%","26",null,null);

                p.Panel03_00.set_taborder("10");
                p.Panel03_00.set_flexwrap("wrap");
                p.Panel03_00.set_verticalgap("16");
                p.Panel03_00.set_flexmainaxisalign("center");
                p.Panel03_00.move("90","779","118","138",null,null);

                p.Static01_01.set_taborder("11");
                p.Static01_01.set_background("url(\'theme://images/img_MF_Image03.svg\') no-repeat center center #eef2f7");
                p.Static01_01.set_borderRadius("12px");
                p.Static01_01.set_accessibilityrole("image");
                p.Static01_01.set_accessibilitylabel("개발자포럼");
                p.Static01_01.set_accessibilityenable("false");
                p.Static01_01.move("130","672","96","96",null,null);

                p.Static00_01_00_01.set_taborder("12");
                p.Static00_01_00_01.set_text("개발자 포럼");
                p.Static00_01_00_01.set_flexgrow("1");
                p.Static00_01_00_01.set_cssclass("sta_WF_Txt17RCenter");
                p.Static00_01_00_01.set_accessibilityaction("[3/10]");
                p.Static00_01_00_01.move("100","789","100%","26",null,null);

                p.Panel03_01.set_taborder("13");
                p.Panel03_01.set_flexwrap("wrap");
                p.Panel03_01.set_verticalgap("16");
                p.Panel03_01.set_flexmainaxisalign("center");
                p.Panel03_01.move("100","789","118","138",null,null);

                p.Static01_02.set_taborder("14");
                p.Static01_02.set_background("url(\'theme://images/img_MF_Image04.svg\') no-repeat center center #eef2f7");
                p.Static01_02.set_borderRadius("12px");
                p.Static01_02.set_accessibilityrole("image");
                p.Static01_02.set_accessibilitylabel("UI컴포넌트");
                p.Static01_02.set_accessibilityenable("false");
                p.Static01_02.move("140","682","96","96",null,null);

                p.Static00_01_00_02.set_taborder("15");
                p.Static00_01_00_02.set_text("UI컴포넌트");
                p.Static00_01_00_02.set_flexgrow("1");
                p.Static00_01_00_02.set_cssclass("sta_WF_Txt17RCenter");
                p.Static00_01_00_02.set_accessibilityaction("[4/10]");
                p.Static00_01_00_02.move("110","799","100%","26",null,null);

                p.Panel03_02.set_taborder("16");
                p.Panel03_02.set_flexwrap("wrap");
                p.Panel03_02.set_verticalgap("16");
                p.Panel03_02.set_flexmainaxisalign("center");
                p.Panel03_02.move("110","799","118","138",null,null);

                p.Static01_03.set_taborder("17");
                p.Static01_03.set_background("url(\'theme://images/img_MF_Image05.svg\') no-repeat center center #eef2f7");
                p.Static01_03.set_borderRadius("12px");
                p.Static01_03.set_accessibilityrole("image");
                p.Static01_03.set_accessibilitylabel("데모사이트");
                p.Static01_03.set_accessibilityenable("false");
                p.Static01_03.move("150","692","96","96",null,null);

                p.Static00_01_00_03.set_taborder("18");
                p.Static00_01_00_03.set_text("데모사이트");
                p.Static00_01_00_03.set_flexgrow("1");
                p.Static00_01_00_03.set_cssclass("sta_WF_Txt17RCenter");
                p.Static00_01_00_03.set_accessibilityaction("[5/10]");
                p.Static00_01_00_03.move("120","809","100%","26",null,null);

                p.Panel03_03.set_taborder("19");
                p.Panel03_03.set_flexwrap("wrap");
                p.Panel03_03.set_verticalgap("16");
                p.Panel03_03.set_flexmainaxisalign("center");
                p.Panel03_03.move("120","809","118","138",null,null);

                p.Static01_04.set_taborder("20");
                p.Static01_04.set_background("url(\'theme://images/img_MF_Image06.svg\') no-repeat center center #eef2f7");
                p.Static01_04.set_borderRadius("12px");
                p.Static01_04.set_accessibilityrole("image");
                p.Static01_04.set_accessibilitylabel("학습자료실");
                p.Static01_04.set_accessibilityenable("false");
                p.Static01_04.move("160","702","96","96",null,null);

                p.Static00_01_00_04.set_taborder("21");
                p.Static00_01_00_04.set_text("학습 자료실");
                p.Static00_01_00_04.set_flexgrow("1");
                p.Static00_01_00_04.set_cssclass("sta_WF_Txt17RCenter");
                p.Static00_01_00_04.set_accessibilityaction("[6/10]");
                p.Static00_01_00_04.move("130","819","100%","26",null,null);

                p.Panel03_04.set_taborder("22");
                p.Panel03_04.set_flexwrap("wrap");
                p.Panel03_04.set_verticalgap("16");
                p.Panel03_04.set_flexmainaxisalign("center");
                p.Panel03_04.move("130","819","118","138",null,null);

                p.Static01_06_00.set_taborder("23");
                p.Static01_06_00.set_background("url(\'theme://images/img_MF_Image07.svg\') no-repeat center center #eef2f7");
                p.Static01_06_00.set_borderRadius("12px");
                p.Static01_06_00.set_accessibilityrole("image");
                p.Static01_06_00.set_accessibilitylabel("제품지원요청");
                p.Static01_06_00.set_accessibilityenable("false");
                p.Static01_06_00.move("22","10","96","96",null,null);

                p.Static00_01_00_05.set_taborder("24");
                p.Static00_01_00_05.set_text("제품 지원요청");
                p.Static00_01_00_05.set_flexgrow("1");
                p.Static00_01_00_05.set_cssclass("sta_WF_Txt17RCenter");
                p.Static00_01_00_05.set_accessibilityaction("[7/10]");
                p.Static00_01_00_05.move("140","829","100%","26",null,null);

                p.Panel03_05.set_taborder("25");
                p.Panel03_05.set_flexwrap("wrap");
                p.Panel03_05.set_verticalgap("16");
                p.Panel03_05.set_flexmainaxisalign("center");
                p.Panel03_05.move("140","829","118","138",null,null);

                p.Static01_06.set_taborder("26");
                p.Static01_06.set_background("url(\'theme://images/img_MF_Image08.svg\') no-repeat center center #eef2f7");
                p.Static01_06.set_borderRadius("12px");
                p.Static01_06.set_accessibilityrole("image");
                p.Static01_06.set_accessibilitylabel("배포도구 다운");
                p.Static01_06.set_accessibilityenable("false");
                p.Static01_06.move("170","712","96","96",null,null);

                p.Static00_01_00_06.set_taborder("27");
                p.Static00_01_00_06.set_text("배포도구 다운");
                p.Static00_01_00_06.set_flexgrow("1");
                p.Static00_01_00_06.set_cssclass("sta_WF_Txt17RCenter");
                p.Static00_01_00_06.set_accessibilityaction("[8/10]");
                p.Static00_01_00_06.move("150","839","100%","26",null,null);

                p.Panel03_06.set_taborder("28");
                p.Panel03_06.set_flexwrap("wrap");
                p.Panel03_06.set_verticalgap("16");
                p.Panel03_06.set_flexmainaxisalign("center");
                p.Panel03_06.move("150","839","118","138",null,null);

                p.Static01_07.set_taborder("29");
                p.Static01_07.set_background("url(\'theme://images/img_MF_Image09.svg\') no-repeat center center #eef2f7");
                p.Static01_07.set_borderRadius("12px");
                p.Static01_07.set_accessibilityrole("image");
                p.Static01_07.set_accessibilitylabel("릴리즈노트");
                p.Static01_07.set_accessibilityenable("false");
                p.Static01_07.move("180","722","96","96",null,null);

                p.Static00_01_00_07.set_taborder("30");
                p.Static00_01_00_07.set_text("릴리즈 노트");
                p.Static00_01_00_07.set_flexgrow("1");
                p.Static00_01_00_07.set_cssclass("sta_WF_Txt17RCenter");
                p.Static00_01_00_07.set_accessibilityaction("[9/10]");
                p.Static00_01_00_07.move("160","849","100%","26",null,null);

                p.Panel03_07.set_taborder("31");
                p.Panel03_07.set_flexwrap("wrap");
                p.Panel03_07.set_verticalgap("16");
                p.Panel03_07.set_flexmainaxisalign("center");
                p.Panel03_07.move("160","849","118","138",null,null);

                p.Static01_08.set_taborder("32");
                p.Static01_08.set_background("url(\'theme://images/img_MF_Image10.svg\') no-repeat center center #eef2f7");
                p.Static01_08.set_borderRadius("12px");
                p.Static01_08.set_accessibilityrole("image");
                p.Static01_08.set_accessibilitylabel("오픈소스");
                p.Static01_08.set_accessibilityenable("false");
                p.Static01_08.move("190","732","96","96",null,null);

                p.Static00_01_00_08.set_taborder("33");
                p.Static00_01_00_08.set_text("오픈 소스");
                p.Static00_01_00_08.set_flexgrow("1");
                p.Static00_01_00_08.set_cssclass("sta_WF_Txt17RCenter");
                p.Static00_01_00_08.set_accessibilityaction("[10/10]");
                p.Static00_01_00_08.move("170","859","100%","26",null,null);

                p.Panel03_08.set_taborder("34");
                p.Panel03_08.set_flexwrap("wrap");
                p.Panel03_08.set_verticalgap("16");
                p.Panel03_08.set_flexmainaxisalign("center");
                p.Panel03_08.move("170","859","118","138",null,null);

                p.Panel202.set_taborder("35");
                p.Panel202.set_spacing("12");
                p.Panel202.set_verticalgap("24");
                p.Panel202.set_flexwrap("wrap");
                p.Panel202.set_flexmainaxisalign("center");
                p.Panel202.set_fittocontents("height");
                p.Panel202.move("0","769","100%","138",null,null);

                p.Static300.set_taborder("36");
                p.Static300.set_text("공지 알림");
                p.Static300.set_cssclass("sta_WF_H3_pc");
                p.Static300.set_accessibilityrole("heading3");
                p.Static300.set_flexgrow("1");
                p.Static300.move("90","567","182","50",null,null);

                p.Button00_01_00.set_taborder("37");
                p.Button00_01_00.set_text("더보기");
                p.Button00_01_00.set_flexshrink("0");
                p.Button00_01_00.set_cssclass("btn_MF_More");
                p.Button00_01_00.set_accessibilityrole("link");
                p.Button00_01_00.move("226","560","70","40",null,null);

                p.Panel301.set_taborder("38");
                p.Panel301.set_flexgrow("1");
                p.Panel301.set_flexcrossaxisalign("center");
                p.Panel301.move("0","818","100%","50",null,null);

                p.Static02.set_taborder("39");
                p.Static02.set_text("공지");
                p.Static02.set_flexshrink("0");
                p.Static02.set_cssclass("sta_WF_BadgeLit01");
                p.Static02.move("67","904","42","24",null,null);

                p.Static02_00.set_taborder("40");
                p.Static02_00.set_text("[정기업데이트] Nexacro24N 정기 업데이트 안내 ");
                p.Static02_00.set_flexgrow("1");
                p.Static02_00.set_fittocontents("height");
                p.Static02_00.set_accessibilityrole("heading4");
                p.Static02_00.move("207","904","120","26",null,null);

                p.Static02_00_00.set_taborder("41");
                p.Static02_00_00.set_text("2024-01-01");
                p.Static02_00_00.set_flexshrink("0");
                p.Static02_00_00.move("450","910","100","26",null,null);

                p.Panel302.set_taborder("42");
                p.Panel302.set_spacing("23px");
                p.Panel302.set_flexcrossaxisalign("center");
                p.Panel302.set_flexgrow("1");
                p.Panel302.set_horizontalgap("10");
                p.Panel302.set_cssclass("pnl_MF_bg");
                p.Panel302.move("0","904","100%","74",null,null);

                p.Static02_01.set_taborder("43");
                p.Static02_01.set_text("[업데이트] Nexacro24N 1월 정기 패치 배포");
                p.Static02_01.set_flexgrow("1");
                p.Static02_01.set_cssclass("sta_WF_H6");
                p.Static02_01.set_accessibilityrole("heading4");
                p.Static02_01.move("67","904","100%","26",null,null);

                p.Static02_00_01.set_taborder("44");
                p.Static02_00_01.set_text("주요 버그 수정 및 성능 향상 포함\r\n Layout Editor 개선 및 신규 속성 추가");
                p.Static02_00_01.set_flexgrow("1");
                p.Static02_00_01.move("207","904","100%","48",null,null);

                p.Panel07_00.set_taborder("45");
                p.Panel07_00.set_spacing("23px");
                p.Panel07_00.set_flexcrossaxisalign("center");
                p.Panel07_00.set_flexwrap("wrap");
                p.Panel07_00.set_fittocontents("height");
                p.Panel07_00.set_flexgrow("1");
                p.Panel07_00.set_verticalgap("8");
                p.Panel07_00.set_cssclass("pnl_MF_bg");
                p.Panel07_00.set_accessibilityenable("false");
                p.Panel07_00.set_accessibilityrole("link");
                p.Panel07_00.set_accessibilitylabel("[업데이트] Nexacro24N 1월 정기 패치 배포로 주요 버그 수정 향상 포함 및 레이아웃 에디터 개선 및 신규 속성");
                p.Panel07_00.set_accessibilityaction("[1/4]");
                p.Panel07_00.move("0","994","272","134",null,null);

                p.Static02_01_00.set_taborder("46");
                p.Static02_01_00.set_text("[안내] 개발자 가이드 문서 리뉴얼 완료");
                p.Static02_01_00.set_flexgrow("1");
                p.Static02_01_00.set_cssclass("sta_WF_H6");
                p.Static02_01_00.set_accessibilityrole("heading4");
                p.Static02_01_00.move("77","914","100%","26",null,null);

                p.Static02_00_01_00.set_taborder("47");
                p.Static02_00_01_00.set_text("구성과 검색 편의성이 대폭 개선된\n Nexacro 개발자 가이드를 지금 확인해보세요");
                p.Static02_00_01_00.set_flexgrow("1");
                p.Static02_00_01_00.move("217","914","100%","48",null,null);

                p.Panel07_00_00.set_taborder("48");
                p.Panel07_00_00.set_spacing("23px");
                p.Panel07_00_00.set_flexcrossaxisalign("center");
                p.Panel07_00_00.set_flexwrap("wrap");
                p.Panel07_00_00.set_fittocontents("height");
                p.Panel07_00_00.set_flexgrow("1");
                p.Panel07_00_00.set_verticalgap("8");
                p.Panel07_00_00.set_cssclass("pnl_MF_bg");
                p.Panel07_00_00.set_accessibilityrole("link");
                p.Panel07_00_00.set_accessibilityaction("[2/4]");
                p.Panel07_00_00.set_accessibilitylabel("[안내] 개발자 가이드 문서 리뉴얼 완료로 구성과 검색 편의성이 대폭 개선");
                p.Panel07_00_00.move("230","994","272","134",null,null);

                p.Panel32.set_taborder("49");
                p.Panel32.set_horizontalgap("24");
                p.Panel32.set_flexwrap("wrap");
                p.Panel32.set_fittocontents("height");
                p.Panel32.set_flexgrow("1");
                p.Panel32.set_verticalgap("24");
                p.Panel32.move("0","0","572","134",null,null);

                p.Static02_01_00_00.set_taborder("50");
                p.Static02_01_00_00.set_text("[신규 자료] 넥사크로 컴포넌트 데모 추가");
                p.Static02_01_00_00.set_flexgrow("1");
                p.Static02_01_00_00.set_cssclass("sta_WF_H6");
                p.Static02_01_00_00.set_accessibilityrole("heading4");
                p.Static02_01_00_00.move("23","23","100%","26",null,null);

                p.Static02_00_01_00_00.set_taborder("51");
                p.Static02_00_01_00_00.set_text("그리드, 데이터 필드 등 주요 컴포넌트의 실사용 예제 및 활용 가이드를 업데이트했습니다");
                p.Static02_00_01_00_00.set_flexgrow("1");
                p.Static02_00_01_00_00.move("23","49","100%","48",null,null);

                p.Panel07_00_00_00.set_taborder("52");
                p.Panel07_00_00_00.set_spacing("23px");
                p.Panel07_00_00_00.set_flexcrossaxisalign("center");
                p.Panel07_00_00_00.set_flexwrap("wrap");
                p.Panel07_00_00_00.set_fittocontents("height");
                p.Panel07_00_00_00.set_flexgrow("1");
                p.Panel07_00_00_00.set_verticalgap("8");
                p.Panel07_00_00_00.set_cssclass("pnl_MF_bg");
                p.Panel07_00_00_00.set_accessibilityrole("link");
                p.Panel07_00_00_00.set_accessibilityaction("[3/4]");
                p.Panel07_00_00_00.set_accessibilitylabel("[신규 자료] 넥사크로 컴포넌트 데모 추가");
                p.Panel07_00_00_00.move("430","994","272","134",null,null);

                p.Static02_01_00_00_00.set_taborder("53");
                p.Static02_01_00_00_00.set_text("[공지] Nexacro UXPro 서비스 공식 지원 개시");
                p.Static02_01_00_00_00.set_flexgrow("1");
                p.Static02_01_00_00_00.set_cssclass("sta_WF_H6");
                p.Static02_01_00_00_00.set_accessibilityrole("heading4");
                p.Static02_01_00_00_00.move("33","33","100%","26",null,null);

                p.Static02_00_01_00_00_00.set_taborder("54");
                p.Static02_00_01_00_00_00.set_text("UI/UX 컨설팅부터 디자인, 퍼블리싱까지 One-Stop 통합 서비스 운영을 시작합니다");
                p.Static02_00_01_00_00_00.set_flexgrow("1");
                p.Static02_00_01_00_00_00.move("33","59","100%","48",null,null);

                p.Panel07_00_00_00_00.set_taborder("55");
                p.Panel07_00_00_00_00.set_spacing("23px");
                p.Panel07_00_00_00_00.set_flexcrossaxisalign("center");
                p.Panel07_00_00_00_00.set_flexwrap("wrap");
                p.Panel07_00_00_00_00.set_fittocontents("height");
                p.Panel07_00_00_00_00.set_flexgrow("1");
                p.Panel07_00_00_00_00.set_verticalgap("8");
                p.Panel07_00_00_00_00.set_cssclass("pnl_MF_bg");
                p.Panel07_00_00_00_00.set_accessibilityrole("link");
                p.Panel07_00_00_00_00.set_accessibilityaction("[4/4]");
                p.Panel07_00_00_00_00.set_accessibilitylabel("[공지] Nexacro UXPro 서비스 공식 지원 개시");
                p.Panel07_00_00_00_00.move("626","994","272","134",null,null);

                p.Panel31.set_taborder("56");
                p.Panel31.set_flexgrow("1");
                p.Panel31.set_fittocontents("height");
                p.Panel31.set_verticalgap("24");
                p.Panel31.set_horizontalgap("24");
                p.Panel31.set_flexwrap("wrap");
                p.Panel31.move("612","0","572","134",null,null);

                p.Panel303.set_taborder("57");
                p.Panel303.set_flexwrap("wrap");
                p.Panel303.set_horizontalgap("24");
                p.Panel303.set_verticalgap("24");
                p.Panel303.set_flexmainaxisalign("center");
                p.Panel303.set_flexgrow("1");
                p.Panel303.set_fittocontents("height");
                p.Panel303.move("0","994","100%","134",null,null);

                p.Panel300.set_taborder("58");
                p.Panel300.set_verticalgap("24");
                p.Panel300.set_flexwrap("wrap");
                p.Panel300.set_fittocontents("height");
                p.Panel300.set_minwidth("");
                p.Panel300.set_maxwidth("1200");
                p.Panel300.move("0","Panel200:64",null,"304","0",null);

                p.Static400.set_taborder("59");
                p.Static400.set_text("원스톱 서비스 ");
                p.Static400.set_cssclass("sta_WF_H3_pc");
                p.Static400.set_accessibilityrole("heading3");
                p.Static400.set_flexgrow("1");
                p.Static400.move("0","1182","100%","50",null,null);

                p.Static00_01_01_00_00.set_taborder("60");
                p.Static00_01_01_00_00.set_text("꾸러미 서비스");
                p.Static00_01_01_00_00.set_cssclass("sta_WF_15B");
                p.Static00_01_01_00_00.set_fittocontents("height");
                p.Static00_01_01_00_00.move("0","1252","100%","48",null,null);

                p.Static00_01_01_00_00_00.set_taborder("61");
                p.Static00_01_01_00_00_00.set_text("UXPro로 완성하는\r\n전문적인 UI/UX");
                p.Static00_01_01_00_00_00.set_cssclass("sta_WF_H4");
                p.Static00_01_01_00_00_00.set_fittocontents("height");
                p.Static00_01_01_00_00_00.set_accessibilityrole("heading4");
                p.Static00_01_01_00_00_00.move("0","1296","100%","48",null,null);

                p.Panel11.set_taborder("62");
                p.Panel11.set_fittocontents("height");
                p.Panel11.set_flexwrap("wrap");
                p.Panel11.set_flexgrow("1");
                p.Panel11.set_verticalgap("8");
                p.Panel11.move("0","1252","100%","103",null,null);

                p.Static00_01_01_00_00_00_00.set_taborder("63");
                p.Static00_01_01_00_00_00_00.set_text("UX 기획부터 디자인, 퍼블리싱까지  \r\n25년 노하우로 구현하는 올인원 서비스");
                p.Static00_01_01_00_00_00_00.set_cssclass("sta_WF_Para17RG");
                p.Static00_01_01_00_00_00_00.set_fittocontents("height");
                p.Static00_01_01_00_00_00_00.set_flexgrow("1");
                p.Static00_01_01_00_00_00_00.move("10","1382","182","48",null,null);

                p.Panel12.set_taborder("64");
                p.Panel12.set_flexwrap("wrap");
                p.Panel12.set_verticalgap("20");
                p.Panel12.set_flexgrow("1");
                p.Panel12.move("0","1252","260","282",null,null);

                p.Button01.set_taborder("65");
                p.Button01.set_text("전문 컨설팅");
                p.Button01.set_cssclass("btn_MF_ShortcutM");
                p.Button01.set_accessibilityrole("link");
                p.Button01.set_maxwidth("");
                p.Button01.move("304","1204","100%","50",null,null);

                p.Button01_00.set_taborder("66");
                p.Button01_00.set_text("UI 디자인");
                p.Button01_00.set_cssclass("btn_MF_ShortcutM");
                p.Button01_00.set_accessibilityrole("link");
                p.Button01_00.set_maxwidth("");
                p.Button01_00.move("304","1260","100%","50",null,null);

                p.Button01_00_00.set_taborder("67");
                p.Button01_00_00.set_text("퍼블리싱 지원");
                p.Button01_00_00.set_cssclass("btn_MF_ShortcutM");
                p.Button01_00_00.set_accessibilityrole("link");
                p.Button01_00_00.set_maxwidth("");
                p.Button01_00_00.move("304","1315","100%","50",null,null);

                p.Button01_00_00_00.set_taborder("68");
                p.Button01_00_00_00.set_text("커스터마이징");
                p.Button01_00_00_00.set_cssclass("btn_MF_ShortcutM");
                p.Button01_00_00_00.set_accessibilityrole("link");
                p.Button01_00_00_00.set_maxwidth("");
                p.Button01_00_00_00.move("304","1385","100%","50",null,null);

                p.Button01_00_00_00_00.set_taborder("69");
                p.Button01_00_00_00_00.set_text("도입가이드");
                p.Button01_00_00_00_00.set_cssclass("btn_MF_ShortcutM");
                p.Button01_00_00_00_00.set_accessibilityrole("link");
                p.Button01_00_00_00_00.set_maxwidth("");
                p.Button01_00_00_00_00.move("304","1440","100%","50",null,null);

                p.Panel10.set_taborder("70");
                p.Panel10.set_verticalgap("8");
                p.Panel10.set_flexwrap("wrap");
                p.Panel10.set_flexshrink("0");
                p.Panel10.set_minwidth("");
                p.Panel10.move("304","1204","200","282",null,null);

                p.Panel13.set_taborder("71");
                p.Panel13.set_spacing("32px");
                p.Panel13.set_verticalgap("40");
                p.Panel13.set_horizontalgap("40");
                p.Panel13.set_flexgrow("1");
                p.Panel13.set_background("#EEF2F7");
                p.Panel13.set_borderRadius("12px");
                p.Panel13.set_maxwidth("");
                p.Panel13.move("0","1252","100%","360",null,null);

                p.Panel401.set_taborder("72");
                p.Panel401.set_flexgrow("1");
                p.Panel401.set_verticalgap("24");
                p.Panel401.set_type("vertical");
                p.Panel401.set_maxwidth("");
                p.Panel401.move("0","1182","64.33333333333333%","432",null,null);

                p.Static00_01_01_00_01.set_taborder("73");
                p.Static00_01_01_00_01.set_text("복합 콘텐츠");
                p.Static00_01_01_00_01.set_cssclass("sta_WF_H3_pc");
                p.Static00_01_01_00_01.set_accessibilityrole("heading3");
                p.Static00_01_01_00_01.set_flexgrow("1");
                p.Static00_01_01_00_01.move("10","1192","100%","50",null,null);

                p.Static01_06_01.set_taborder("74");
                p.Static01_06_01.set_background("url(\'theme://images/img_MF_Image11.png\') no-repeat center center #eef2f7");
                p.Static01_06_01.set_borderRadius("12px");
                p.Static01_06_01.set_accessibilityrole("image");
                p.Static01_06_01.set_accessibilitylabel("활용 세례와 개발 인사이트를 소개합니다. 스마트 시티 웹포털 구축 사례");
                p.Static01_06_01.set_text("");
                p.Static01_06_01.move("22","10","100%","360",null,null);

                p.Panel402.set_taborder("75");
                p.Panel402.set_flexwrap("wrap");
                p.Panel402.set_flexgrow("1");
                p.Panel402.set_verticalgap("24");
                p.Panel402.set_flexshrink("0");
                p.Panel402.set_minwidth("300");
                p.Panel402.set_maxwidth("");
                p.Panel402.move("10","1192","300","432",null,null);

                p.Panel400.set_taborder("76");
                p.Panel400.set_flexwrap("wrap");
                p.Panel400.set_horizontalgap("24");
                p.Panel400.set_verticalgap("40");
                p.Panel400.set_fittocontents("height");
                p.Panel400.set_minwidth("");
                p.Panel400.set_maxwidth("1200");
                p.Panel400.move("0","Panel300:64",null,"434","0",null);

                p.Static500.set_taborder("77");
                p.Static500.set_text("뉴스");
                p.Static500.set_cssclass("sta_WF_H3_pc");
                p.Static500.set_accessibilityrole("heading3");
                p.Static500.set_flexgrow("1");
                p.Static500.move("10","1650","130","50",null,null);

                p.Button02.set_taborder("78");
                p.Button02.set_text("전체");
                p.Button02.set_fittocontents("width");
                p.Button02.set_cssclass("btn_MF_TabS");
                p.Button02.set_accessibilityrole("tab");
                p.Button02.move("26","1730","82","40",null,null);

                p.Button02_00.set_taborder("79");
                p.Button02_00.set_text("공지사항");
                p.Button02_00.set_fittocontents("width");
                p.Button02_00.set_cssclass("btn_MF_Tab");
                p.Button02_00.set_accessibilityrole("tab");
                p.Button02_00.move("110","1730","82","40",null,null);

                p.Button02_00_00.set_taborder("80");
                p.Button02_00_00.set_text("자료실");
                p.Button02_00_00.set_fittocontents("width");
                p.Button02_00_00.set_cssclass("btn_MF_Tab");
                p.Button02_00_00.set_accessibilityrole("tab");
                p.Button02_00_00.move("192","1730","82","40",null,null);

                p.Button02_00_01.set_taborder("81");
                p.Button02_00_01.set_text("연구보고서");
                p.Button02_00_01.set_fittocontents("width");
                p.Button02_00_01.set_cssclass("btn_MF_Tab");
                p.Button02_00_01.set_accessibilityrole("tab");
                p.Button02_00_01.move("277","1730","117","40",null,null);

                p.Button02_00_00_00.set_taborder("82");
                p.Button02_00_00_00.set_text("자주묻는 질문");
                p.Button02_00_00_00.set_fittocontents("width");
                p.Button02_00_00_00.set_cssclass("btn_MF_Tab");
                p.Button02_00_00_00.set_accessibilityrole("tab");
                p.Button02_00_00_00.move("359","1730","140","40",null,null);

                p.Panel16.set_taborder("83");
                p.Panel16.set_flexgrow("1");
                p.Panel16.set_horizontalgap("8");
                p.Panel16.move("26","1730","410","40",null,null);

                p.Button00_01_00_00.set_taborder("84");
                p.Button00_01_00_00.set_text("더보기");
                p.Button00_01_00_00.set_flexshrink("0");
                p.Button00_01_00_00.set_cssclass("btn_MF_More");
                p.Button00_01_00_00.set_accessibilityrole("link");
                p.Button00_01_00_00.move("1137","1650","70","40",null,null);

                p.Panel01.set_taborder("85");
                p.Panel01.set_flexmainaxisalign("end");
                p.Panel01.set_fittocontents("width");
                p.Panel01.move("1130","0","70","40",null,null);

                p.Panel501.set_taborder("86");
                p.Panel501.move("0","1730","100%","40",null,null);

                p.Static00_01_01_00_00_01_01.set_taborder("87");
                p.Static00_01_01_00_00_01_01.set_text("넥사크로로 구현하는 반응형 웹 UI 전략");
                p.Static00_01_01_00_00_01_01.set_cssclass("sta_WF_H5");
                p.Static00_01_01_00_00_01_01.set_flexgrow("1");
                p.Static00_01_01_00_00_01_01.set_accessibilityrole("heading4");
                p.Static00_01_01_00_00_01_01.set_fittocontents("height");
                p.Static00_01_01_00_00_01_01.move("290","1880","100%","29",null,null);

                p.Static00_01_01_00_00_00_01_01.set_taborder("88");
                p.Static00_01_01_00_00_00_01_01.set_text("다양한 디바이스에 최적화된 화면 설계를 위한 넥사크로의 반응형 레이아웃 활용법을 소개합니다");
                p.Static00_01_01_00_00_00_01_01.set_flexgrow("1");
                p.Static00_01_01_00_00_00_01_01.set_fittocontents("height");
                p.Static00_01_01_00_00_00_01_01.set_minheight("");
                p.Static00_01_01_00_00_00_01_01.set_maxheight("76");
                p.Static00_01_01_00_00_00_01_01.move("292","1960","100%","48",null,null);

                p.Panel09.set_taborder("89");
                p.Panel09.set_flexwrap("wrap");
                p.Panel09.set_flexgrow("1");
                p.Panel09.set_verticalgap("8");
                p.Panel09.set_fittocontents("height");
                p.Panel09.move("0","0","100%","113",null,null);

                p.Button03_01.set_taborder("90");
                p.Button03_01.set_text("자세히보기");
                p.Button03_01.set_cssclass("btn_MF_ShortcutS");
                p.Button03_01.set_fittocontents("width");
                p.Button03_01.set_accessibilityrole("link");
                p.Button03_01.set_visible("true");
                p.Button03_01.move("319","2043","200","24",null,null);

                p.ImageViewer01_00.set_taborder("91");
                p.ImageViewer01_00.set_flexgrow("0");
                p.ImageViewer01_00.set_image("url(\'theme://images/img_MF_Image12.png\')");
                p.ImageViewer01_00.set_accessibilitylabel("넥사크로로 구현하는 반응형 웹 UI");
                p.ImageViewer01_00.set_accessibilityrole("image");
                p.ImageViewer01_00.move("65","1851","200","170",null,null);

                p.Panel18_01.set_taborder("92");
                p.Panel18_01.set_flexwrap("wrap");
                p.Panel18_01.set_verticalgap("12");
                p.Panel18_01.set_flexgrow("1");
                p.Panel18_01.set_flexcrossaxiswrapalign("spacebetween");
                p.Panel18_01.move("280","1870","300","170",null,null);

                p.Panel00.set_taborder("93");
                p.Panel00.set_horizontalgap("24");
                p.Panel00.set_flexgrow("1");
                p.Panel00.move("31","31","372","170",null,null);

                p.Panel19_00.set_taborder("94");
                p.Panel19_00.set_spacing("31px");
                p.Panel19_00.set_flexgrow("1");
                p.Panel19_00.set_flexwrap("wrap");
                p.Panel19_00.set_verticalgap("12");
                p.Panel19_00.set_cssclass("pnl_MF_bg");
                p.Panel19_00.set_minheight("234");
                p.Panel19_00.set_maxheight("");
                p.Panel19_00.move("725","2168","372","234",null,null);

                p.Static00_01_01_00_00_01_00_00.set_taborder("95");
                p.Static00_01_01_00_00_01_00_00.set_text("공공기관 넥사크로 도입 사례 인터뷰");
                p.Static00_01_01_00_00_01_00_00.set_cssclass("sta_WF_H5");
                p.Static00_01_01_00_00_01_00_00.set_flexgrow("1");
                p.Static00_01_01_00_00_01_00_00.set_accessibilityrole("heading4");
                p.Static00_01_01_00_00_01_00_00.set_fittocontents("height");
                p.Static00_01_01_00_00_01_00_00.move("280","1870","100%","29",null,null);

                p.Static00_01_01_00_00_00_01_00_00.set_taborder("96");
                p.Static00_01_01_00_00_00_01_00_00.set_text("공공서비스 고도화를 위해 넥사크로를 선택한 시청 스마트민원 시스템 담당자와의 인터뷰입니다. UI/UX 개선부터 유지보수까지, 실제 도입 경험을 생생히 전달합니다.\r\n프로젝트 과정에서의 고민과 해결 과정도 함께 확인해보세요.");
                p.Static00_01_01_00_00_00_01_00_00.set_flexgrow("1");
                p.Static00_01_01_00_00_00_01_00_00.move("282","1950","100%","76",null,null);

                p.Panel14.set_taborder("97");
                p.Panel14.set_flexwrap("wrap");
                p.Panel14.set_flexgrow("1");
                p.Panel14.set_verticalgap("8");
                p.Panel14.set_fittocontents("height");
                p.Panel14.move("10","10","100%","113",null,null);

                p.Button03_00_00.set_taborder("98");
                p.Button03_00_00.set_text("자세히보기");
                p.Button03_00_00.set_cssclass("btn_MF_ShortcutS");
                p.Button03_00_00.set_fittocontents("width");
                p.Button03_00_00.set_accessibilityrole("link");
                p.Button03_00_00.set_visible("true");
                p.Button03_00_00.move("309","2033","200","24",null,null);

                p.Panel18_00_00.set_taborder("99");
                p.Panel18_00_00.set_flexwrap("wrap");
                p.Panel18_00_00.set_verticalgap("12");
                p.Panel18_00_00.set_flexcrossaxiswrapalign("spacebetween");
                p.Panel18_00_00.move("820","1870","100%","170",null,null);

                p.Button03_01_01_00.set_taborder("100");
                p.Button03_01_01_00.set_text("자세히보기");
                p.Button03_01_01_00.set_cssclass("btn_MF_ShortcutS");
                p.Button03_01_01_00.set_flexgrow("1");
                p.Button03_01_01_00.set_visible("false");
                p.Button03_01_01_00.set_accessibilityrole("link");
                p.Button03_01_01_00.move("41","223","100%","32",null,null);

                p.Panel20_00.set_taborder("101");
                p.Panel20_00.set_spacing("31px");
                p.Panel20_00.set_flexgrow("1");
                p.Panel20_00.set_flexwrap("wrap");
                p.Panel20_00.set_verticalgap("12");
                p.Panel20_00.set_cssclass("pnl_MF_bg");
                p.Panel20_00.set_minheight("234");
                p.Panel20_00.set_maxheight("");
                p.Panel20_00.move("30","2097","372","234",null,null);

                p.Panel22.set_taborder("102");
                p.Panel22.set_horizontalgap("24");
                p.Panel22.set_verticalgap("24");
                p.Panel22.set_fittocontents("height");
                p.Panel22.set_flexwrap("wrap");
                p.Panel22.move("0","258","100%","234",null,null);

                p.Static00_01_01_00_00_01_00.set_taborder("103");
                p.Static00_01_01_00_00_01_00.set_text("2025 UI/UX 기술 전망과 넥사크로의 방향");
                p.Static00_01_01_00_00_01_00.set_cssclass("sta_WF_H5");
                p.Static00_01_01_00_00_01_00.set_flexgrow("1");
                p.Static00_01_01_00_00_01_00.set_accessibilityrole("heading4");
                p.Static00_01_01_00_00_01_00.move("290","1880","100%","29",null,null);

                p.Static00_01_01_00_00_00_01_00.set_taborder("104");
                p.Static00_01_01_00_00_00_01_00.set_text("올해도 저코드/하이프로덕티비티 개발이 화두입니다. 넥사크로는 이러한 트렌드에 맞춰 Studio 기능 강화와 디자이너-개발자 협업 환경 개선을 지속하고 있습니다. 2025년의 UX 전략과 넥사크로의 비전, 지금 확인해보세요.");
                p.Static00_01_01_00_00_00_01_00.set_flexgrow("1");
                p.Static00_01_01_00_00_00_01_00.move("282","1950","100%","76",null,null);

                p.Panel17.set_taborder("105");
                p.Panel17.set_flexwrap("wrap");
                p.Panel17.set_flexgrow("1");
                p.Panel17.set_verticalgap("8");
                p.Panel17.set_minheight("");
                p.Panel17.move("20","20","100%","113",null,null);

                p.Button03_00.set_taborder("106");
                p.Button03_00.set_text("자세히보기");
                p.Button03_00.set_cssclass("btn_MF_ShortcutS");
                p.Button03_00.set_fittocontents("width");
                p.Button03_00.set_accessibilityrole("link");
                p.Button03_00.set_visible("true");
                p.Button03_00.move("329","2053","200","24",null,null);

                p.Panel18_00.set_taborder("107");
                p.Panel18_00.set_flexwrap("wrap");
                p.Panel18_00.set_verticalgap("12");
                p.Panel18_00.set_flexcrossaxiswrapalign("spacebetween");
                p.Panel18_00.set_minheight("");
                p.Panel18_00.set_maxheight("170");
                p.Panel18_00.move("830","1880","100%","170",null,null);

                p.Button03_01_01_00_00.set_taborder("108");
                p.Button03_01_01_00_00.set_text("자세히보기");
                p.Button03_01_01_00_00.set_cssclass("btn_MF_ShortcutS");
                p.Button03_01_01_00_00.set_flexgrow("1");
                p.Button03_01_01_00_00.set_visible("false");
                p.Button03_01_01_00_00.set_accessibilityrole("link");
                p.Button03_01_01_00_00.move("51","233","100%","32",null,null);

                p.Panel20.set_taborder("109");
                p.Panel20.set_spacing("31px");
                p.Panel20.set_flexgrow("1");
                p.Panel20.set_flexwrap("wrap");
                p.Panel20.set_verticalgap("12");
                p.Panel20.set_cssclass("pnl_MF_bg");
                p.Panel20.set_minheight("234");
                p.Panel20.set_maxheight("");
                p.Panel20.move("820","1870","372","234",null,null);

                p.Static00_01_01_00_00_01_01_01.set_taborder("110");
                p.Static00_01_01_00_00_01_01_01.set_text("Studio기능 향상 및 신규 컴포넌트 안내");
                p.Static00_01_01_00_00_01_01_01.set_cssclass("sta_WF_H5");
                p.Static00_01_01_00_00_01_01_01.set_flexgrow("1");
                p.Static00_01_01_00_00_01_01_01.set_accessibilityrole("heading4");
                p.Static00_01_01_00_00_01_01_01.set_fittocontents("height");
                p.Static00_01_01_00_00_01_01_01.move("300","1890","100%","29",null,null);

                p.Static00_01_01_00_00_00_01_01_01.set_taborder("111");
                p.Static00_01_01_00_00_00_01_01_01.set_text("넥사크로 Studio에 새롭게 추가된 레이아웃 도우미 기능과 UX 최적화를 위한 그리드, 데이터 필드 컴포넌트가 포함됐습니다. 신규 기능은 개발 생산성을 높이는 데 초점을 맞췄습니다. 자세한 업데이트 내역과 활용 방법을 안내드립니다.");
                p.Static00_01_01_00_00_00_01_01_01.set_flexgrow("1");
                p.Static00_01_01_00_00_00_01_01_01.move("302","1970","100%","76",null,null);

                p.Panel15.set_taborder("112");
                p.Panel15.set_flexwrap("wrap");
                p.Panel15.set_flexgrow("1");
                p.Panel15.set_verticalgap("8");
                p.Panel15.move("30","30","100%","113",null,null);

                p.Button03_01_02.set_taborder("113");
                p.Button03_01_02.set_text("자세히보기");
                p.Button03_01_02.set_cssclass("btn_MF_ShortcutS");
                p.Button03_01_02.set_fittocontents("width");
                p.Button03_01_02.set_accessibilityrole("link");
                p.Button03_01_02.set_visible("true");
                p.Button03_01_02.move("339","2063","200","24",null,null);

                p.ImageViewer01_00_01.set_taborder("114");
                p.ImageViewer01_00_01.set_flexgrow("0");
                p.ImageViewer01_00_01.set_image("url(\'theme://images/img_MF_Image13.png\')");
                p.ImageViewer01_00_01.set_accessibilitylabel("Studio 기능 향상 및 신규 컴포넌트 안내");
                p.ImageViewer01_00_01.set_accessibilityrole("image");
                p.ImageViewer01_00_01.move("75","1861","200","170",null,null);

                p.Panel18_01_01.set_taborder("115");
                p.Panel18_01_01.set_flexwrap("wrap");
                p.Panel18_01_01.set_verticalgap("12");
                p.Panel18_01_01.set_flexgrow("1");
                p.Panel18_01_01.set_flexcrossaxiswrapalign("spacebetween");
                p.Panel18_01_01.move("290","1880","300","170",null,null);

                p.Panel00_00.set_taborder("116");
                p.Panel00_00.set_horizontalgap("24");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.set_minheight("");
                p.Panel00_00.set_maxheight("170");
                p.Panel00_00.move("41","41","372","170",null,null);

                p.Button03_01_01_01.set_taborder("117");
                p.Button03_01_01_01.set_text("자세히보기");
                p.Button03_01_01_01.set_cssclass("btn_MF_ShortcutS");
                p.Button03_01_01_01.set_flexgrow("1");
                p.Button03_01_01_01.set_visible("false");
                p.Button03_01_01_01.set_accessibilityrole("link");
                p.Button03_01_01_01.move("20","149","100%","32",null,null);

                p.Panel19_00_00.set_taborder("118");
                p.Panel19_00_00.set_spacing("31px");
                p.Panel19_00_00.set_flexgrow("1");
                p.Panel19_00_00.set_flexwrap("wrap");
                p.Panel19_00_00.set_verticalgap("12");
                p.Panel19_00_00.set_cssclass("pnl_MF_bg");
                p.Panel19_00_00.set_minheight("234");
                p.Panel19_00_00.set_maxheight("");
                p.Panel19_00_00.move("10","10","372","234",null,null);

                p.Panel23.set_taborder("119");
                p.Panel23.set_horizontalgap("24");
                p.Panel23.set_verticalgap("24");
                p.Panel23.set_flexwrap("wrap");
                p.Panel23.set_fittocontents("height");
                p.Panel23.set_minheight("");
                p.Panel23.move("0","0","100%","234",null,null);

                p.Panel502.set_taborder("120");
                p.Panel502.set_flexwrap("wrap");
                p.Panel502.set_verticalgap("24");
                p.Panel502.set_fittocontents("height");
                p.Panel502.move("0","1851","100%","492",null,null);

                p.Button03_01_01.set_taborder("121");
                p.Button03_01_01.set_text("자세히보기");
                p.Button03_01_01.set_cssclass("btn_MF_ShortcutS");
                p.Button03_01_01.set_flexgrow("1");
                p.Button03_01_01.set_visible("false");
                p.Button03_01_01.set_accessibilityrole("link");
                p.Button03_01_01.move("10","139","100%","32",null,null);

                p.Panel500.set_taborder("122");
                p.Panel500.set_flexwrap("wrap");
                p.Panel500.set_verticalgap("24");
                p.Panel500.set_fittocontents("height");
                p.Panel500.set_minwidth("");
                p.Panel500.set_maxwidth("1200");
                p.Panel500.move("0","Panel400:64",null,"630","0",null);

                p.Static00_01_01_01.set_taborder("123");
                p.Static00_01_01_01.set_text("넥사크로 기능 소개");
                p.Static00_01_01_01.set_cssclass("sta_WF_H3_pc");
                p.Static00_01_01_01.set_accessibilityrole("heading3");
                p.Static00_01_01_01.set_flexgrow("1");
                p.Static00_01_01_01.move("100","577","280","50",null,null);

                p.Button00_01_00_01.set_taborder("124");
                p.Button00_01_00_01.set_text("더보기");
                p.Button00_01_00_01.set_flexshrink("0");
                p.Button00_01_00_01.set_cssclass("btn_MF_More");
                p.Button00_01_00_01.set_accessibilityrole("link");
                p.Button00_01_00_01.move("236","570","70","40",null,null);

                p.Panel601.set_taborder("125");
                p.Panel601.set_flexgrow("1");
                p.Panel601.set_flexcrossaxisalign("center");
                p.Panel601.move("0","2500","100%","50",null,null);

                p.ImageViewer02.set_taborder("126");
                p.ImageViewer02.set_image("url(\'theme://images/img_MF_Image14.png\')");
                p.ImageViewer02.set_accessibilitylabel("넥사크로 스튜디오");
                p.ImageViewer02.set_cssclass("img_MF_CardBg");
                p.ImageViewer02.set_accessibilityrole("image");
                p.ImageViewer02.move("60","2589","100%","196",null,null);

                p.Static03.set_taborder("127");
                p.Static03.set_text("태그");
                p.Static03.set_cssclass("sta_WF_BadgeLit01");
                p.Static03.move("87","2833","42","24",null,null);

                p.Panel04.set_taborder("128");
                p.Panel04.move("32","32","42","32",null,null);

                p.Static03_00.set_taborder("129");
                p.Static03_00.set_text("넥사크로 스튜디오");
                p.Static03_00.set_cssclass("sta_WF_H5");
                p.Static03_00.set_accessibilityrole("heading4");
                p.Static03_00.move("87","2860","218","24",null,null);

                p.Static03_00_00.set_taborder("130");
                p.Static03_00_00.set_text("웹 기반 UI 화면을 빠르게 설계할 수 있는 강력한 툴입니다.");
                p.Static03_00_00.move("87","2890","218","48",null,null);

                p.Button03_00_01.set_taborder("131");
                p.Button03_00_01.set_text("바로가기");
                p.Button03_00_01.set_cssclass("btn_MF_ShortcutS");
                p.Button03_00_01.set_fittocontents("width");
                p.Button03_00_01.set_accessibilityrole("link");
                p.Button03_00_01.move("199","3000","200","32",null,null);

                p.Panel25.set_taborder("132");
                p.Panel25.set_flexmainaxisalign("end");
                p.Panel25.set_flexcrossaxisalign("end");
                p.Panel25.move("199","3000","218","60",null,null);

                p.Panel26.set_taborder("133");
                p.Panel26.set_flexwrap("wrap");
                p.Panel26.set_verticalgap("8");
                p.Panel26.set_spacing("32px");
                p.Panel26.move("87","2833","100%","249",null,null);

                p.Panel27.set_taborder("134");
                p.Panel27.set_flexwrap("wrap");
                p.Panel27.set_flexgrow("1");
                p.Panel27.set_cssclass("pnl_MF_bg");
                p.Panel27.move("60","2589","174","445",null,null);

                p.ImageViewer02_00.set_taborder("135");
                p.ImageViewer02_00.set_image("url(\'theme://images/img_MF_Image15.png\')");
                p.ImageViewer02_00.set_accessibilitylabel("레이아웃 관리 기능");
                p.ImageViewer02_00.set_cssclass("img_MF_CardBg");
                p.ImageViewer02_00.set_accessibilityrole("image");
                p.ImageViewer02_00.move("70","2599","100%","196",null,null);

                p.Static03_01.set_taborder("136");
                p.Static03_01.set_text("태그");
                p.Static03_01.set_cssclass("sta_WF_BadgeLit01");
                p.Static03_01.move("97","2843","42","24",null,null);

                p.Panel05.set_taborder("137");
                p.Panel05.move("42","42","42","32",null,null);

                p.Static03_00_01.set_taborder("138");
                p.Static03_00_01.set_text("레이아웃 관리 기능");
                p.Static03_00_01.set_cssclass("sta_WF_H5");
                p.Static03_00_01.set_accessibilityrole("heading4");
                p.Static03_00_01.move("97","2870","218","24",null,null);

                p.Static03_00_00_00.set_taborder("139");
                p.Static03_00_00_00.set_text("업무화면 구조 설계를 더욱 쉽게, 효율적으로 도와줍니다.");
                p.Static03_00_00_00.move("97","2900","218","48",null,null);

                p.Button03_00_01_00.set_taborder("140");
                p.Button03_00_01_00.set_text("바로가기");
                p.Button03_00_01_00.set_cssclass("btn_MF_ShortcutS");
                p.Button03_00_01_00.set_fittocontents("width");
                p.Button03_00_01_00.set_accessibilityrole("link");
                p.Button03_00_01_00.move("209","3010","200","32",null,null);

                p.Panel25_00.set_taborder("141");
                p.Panel25_00.set_flexmainaxisalign("end");
                p.Panel25_00.set_flexcrossaxisalign("end");
                p.Panel25_00.move("209","3010","218","60",null,null);

                p.Panel26_00.set_taborder("142");
                p.Panel26_00.set_flexwrap("wrap");
                p.Panel26_00.set_verticalgap("8");
                p.Panel26_00.set_spacing("32px");
                p.Panel26_00.move("97","2843","100%","249",null,null);

                p.Panel27_00.set_taborder("143");
                p.Panel27_00.set_flexwrap("wrap");
                p.Panel27_00.set_flexgrow("1");
                p.Panel27_00.set_cssclass("pnl_MF_bg");
                p.Panel27_00.move("70","2599","174","445",null,null);

                p.Panel29.set_taborder("144");
                p.Panel29.set_horizontalgap("24");
                p.Panel29.set_flexwrap("wrap");
                p.Panel29.set_flexgrow("1");
                p.Panel29.set_fittocontents("height");
                p.Panel29.set_verticalgap("24");
                p.Panel29.move("0","0","372","445",null,null);

                p.ImageViewer02_01.set_taborder("145");
                p.ImageViewer02_01.set_image("url(\'theme://images/img_MF_Image16.png\')");
                p.ImageViewer02_01.set_accessibilitylabel("고급 컴포넌트");
                p.ImageViewer02_01.set_cssclass("img_MF_CardBg");
                p.ImageViewer02_01.set_accessibilityrole("image");
                p.ImageViewer02_01.move("80","2609","100%","196",null,null);

                p.Static03_02.set_taborder("146");
                p.Static03_02.set_text("태그");
                p.Static03_02.set_cssclass("sta_WF_BadgeLit01");
                p.Static03_02.move("107","2853","42","24",null,null);

                p.Panel06.set_taborder("147");
                p.Panel06.move("52","52","42","32",null,null);

                p.Static03_00_02.set_taborder("148");
                p.Static03_00_02.set_text("고급 컴포넌트");
                p.Static03_00_02.set_cssclass("sta_WF_H5");
                p.Static03_00_02.set_accessibilityrole("heading4");
                p.Static03_00_02.move("107","2880","218","24",null,null);

                p.Static03_00_00_01.set_taborder("149");
                p.Static03_00_00_01.set_text("그리드, 데이터 필드 등 다양한 컴포넌트를 손쉽게 활용하세요.");
                p.Static03_00_00_01.move("107","2910","218","48",null,null);

                p.Button03_00_01_01.set_taborder("150");
                p.Button03_00_01_01.set_text("바로가기");
                p.Button03_00_01_01.set_cssclass("btn_MF_ShortcutS");
                p.Button03_00_01_01.set_fittocontents("width");
                p.Button03_00_01_01.set_accessibilityrole("link");
                p.Button03_00_01_01.move("219","3020","200","32",null,null);

                p.Panel25_01.set_taborder("151");
                p.Panel25_01.set_flexmainaxisalign("end");
                p.Panel25_01.set_flexcrossaxisalign("end");
                p.Panel25_01.move("219","3020","218","60",null,null);

                p.Panel26_01.set_taborder("152");
                p.Panel26_01.set_flexwrap("wrap");
                p.Panel26_01.set_verticalgap("8");
                p.Panel26_01.set_spacing("32px");
                p.Panel26_01.move("107","2853","100%","249",null,null);

                p.Panel27_01.set_taborder("153");
                p.Panel27_01.set_flexwrap("wrap");
                p.Panel27_01.set_flexgrow("1");
                p.Panel27_01.set_cssclass("pnl_MF_bg");
                p.Panel27_01.move("80","2609","174","445",null,null);

                p.ImageViewer02_02.set_taborder("154");
                p.ImageViewer02_02.set_image("url(\'theme://images/img_MF_Image17.png\')");
                p.ImageViewer02_02.set_accessibilitylabel("다국어/다국가 지원");
                p.ImageViewer02_02.set_cssclass("img_MF_CardBg");
                p.ImageViewer02_02.set_accessibilityrole("image");
                p.ImageViewer02_02.move("90","2619","100%","196",null,null);

                p.Static03_03.set_taborder("155");
                p.Static03_03.set_text("태그");
                p.Static03_03.set_cssclass("sta_WF_BadgeLit01");
                p.Static03_03.move("117","2863","42","24",null,null);

                p.Panel07.set_taborder("156");
                p.Panel07.move("62","62","42","32",null,null);

                p.Static03_00_03.set_taborder("157");
                p.Static03_00_03.set_text("다국어/다국가 지원");
                p.Static03_00_03.set_cssclass("sta_WF_H5");
                p.Static03_00_03.set_accessibilityrole("heading4");
                p.Static03_00_03.move("117","2890","218","24",null,null);

                p.Static03_00_00_02.set_taborder("158");
                p.Static03_00_00_02.set_text("글로벌 서비스를 위한 다국어 리소스 관리 및 로케일 설정 기능을 제공합니다.");
                p.Static03_00_00_02.move("117","2920","218","48",null,null);

                p.Button03_00_01_02.set_taborder("159");
                p.Button03_00_01_02.set_text("바로가기");
                p.Button03_00_01_02.set_cssclass("btn_MF_ShortcutS");
                p.Button03_00_01_02.set_fittocontents("width");
                p.Button03_00_01_02.set_accessibilityrole("link");
                p.Button03_00_01_02.move("229","3030","200","32",null,null);

                p.Panel25_02.set_taborder("160");
                p.Panel25_02.set_flexmainaxisalign("end");
                p.Panel25_02.set_flexcrossaxisalign("end");
                p.Panel25_02.move("229","3030","218","60",null,null);

                p.Panel26_02.set_taborder("161");
                p.Panel26_02.set_flexwrap("wrap");
                p.Panel26_02.set_verticalgap("8");
                p.Panel26_02.set_spacing("32px");
                p.Panel26_02.move("117","2863","100%","249",null,null);

                p.Panel27_02.set_taborder("162");
                p.Panel27_02.set_flexwrap("wrap");
                p.Panel27_02.set_flexgrow("1");
                p.Panel27_02.set_cssclass("pnl_MF_bg");
                p.Panel27_02.move("90","2619","174","445",null,null);

                p.Panel30.set_taborder("163");
                p.Panel30.set_horizontalgap("24");
                p.Panel30.set_flexwrap("wrap");
                p.Panel30.set_flexgrow("1");
                p.Panel30.set_fittocontents("height");
                p.Panel30.set_verticalgap("24");
                p.Panel30.move("564","0","372","445",null,null);

                p.Panel602.set_taborder("164");
                p.Panel602.set_verticalgap("24");
                p.Panel602.set_flexwrap("wrap");
                p.Panel602.set_horizontalgap("24");
                p.Panel602.set_fittocontents("height");
                p.Panel602.move("0","2589","100%","445",null,null);

                p.Panel600.set_taborder("165");
                p.Panel600.set_flexwrap("wrap");
                p.Panel600.set_verticalgap("24");
                p.Panel600.set_fittocontents("height");
                p.Panel600.set_minwidth("");
                p.Panel600.set_maxwidth("1200");
                p.Panel600.move("0","Panel500:64",null,"519","0",null);

                p.Static00_01_01_01_00.set_taborder("166");
                p.Static00_01_01_01_00.set_text("넥사크로 플랫폼 운영팀");
                p.Static00_01_01_01_00.set_cssclass("sta_WF_H3_pc");
                p.Static00_01_01_01_00.set_flexgrow("1");
                p.Static00_01_01_01_00.set_accessibilityrole("heading3");
                p.Static00_01_01_01_00.move("110","587","300","50",null,null);

                p.Button00_01_00_01_00.set_taborder("167");
                p.Button00_01_00_01_00.set_text("더보기");
                p.Button00_01_00_01_00.set_flexshrink("0");
                p.Button00_01_00_01_00.set_cssclass("btn_MF_More");
                p.Button00_01_00_01_00.set_accessibilityrole("link");
                p.Button00_01_00_01_00.move("246","580","70","40",null,null);

                p.Panel701.set_taborder("168");
                p.Panel701.set_flexgrow("1");
                p.Panel701.set_flexcrossaxisalign("center");
                p.Panel701.set_fittocontents("height");
                p.Panel701.move("0","3150","100%","50",null,null);

                p.ImageViewer01_00_00.set_taborder("169");
                p.ImageViewer01_00_00.set_flexgrow("0");
                p.ImageViewer01_00_00.set_image("url(\'theme://images/img_MF_Image18.png\')");
                p.ImageViewer01_00_00.set_accessibilitylabel("넥사크로 플랫폼 운영팀 게시글 이미지");
                p.ImageViewer01_00_00.set_accessibilityrole("image");
                p.ImageViewer01_00_00.move("65","1851","352","200",null,null);

                p.Static00_01_01_00_00_01_01_00_00.set_taborder("170");
                p.Static00_01_01_00_00_01_01_00_00.set_text("태그");
                p.Static00_01_01_00_00_01_01_00_00.set_cssclass("sta_WF_BadgeLit01");
                p.Static00_01_01_00_00_01_01_00_00.move("10","10","42","24",null,null);

                p.Panel08.set_taborder("171");
                p.Panel08.move("20","20","42","32",null,null);

                p.Static00_01_01_00_00_01_01_00.set_taborder("172");
                p.Static00_01_01_00_00_01_01_00.set_text("넥사크로는 안정적인 UI 프레임워크 제공을 위해 지속적인 기술 지원과 업데이트를 제공합니다.");
                p.Static00_01_01_00_00_01_01_00.set_cssclass("sta_WF_H5");
                p.Static00_01_01_00_00_01_01_00.set_flexgrow("1");
                p.Static00_01_01_00_00_01_01_00.set_accessibilityrole("heading4");
                p.Static00_01_01_00_00_01_01_00.move("290","1880","100%","29",null,null);

                p.Static00_01_01_00_00_00_01_01_00.set_taborder("173");
                p.Static00_01_01_00_00_00_01_01_00.set_text("제품 도입이나 기술 문의가 있으시면 운영팀에 언제든지 연락주시기 바랍니다. 고객님의 업무 환경과 구축 목적에 맞는 기술 안내와 도입 컨설팅을 지원해드리며, 최신 버전의 기능 활용법, 개발 환경 구성, 배포 전략 등도 함께 안내해드립니다.");
                p.Static00_01_01_00_00_00_01_01_00.set_flexgrow("1");
                p.Static00_01_01_00_00_00_01_01_00.move("292","1960","100%","48",null,null);

                p.Button03_01_00.set_taborder("174");
                p.Button03_01_00.set_text("바로가기");
                p.Button03_01_00.set_fittocontents("width");
                p.Button03_01_00.set_cssclass("btn_MF_ShortcutS");
                p.Button03_01_00.set_accessibilityrole("link");
                p.Button03_01_00.move("319","2043","118","32",null,null);

                p.Panel02.set_taborder("175");
                p.Panel02.set_flexgrow("1");
                p.Panel02.set_flexmainaxisalign("end");
                p.Panel02.set_flexcrossaxisalign("end");
                p.Panel02.move("20","135","200","67",null,null);

                p.Panel18_01_00.set_taborder("176");
                p.Panel18_01_00.set_flexwrap("wrap");
                p.Panel18_01_00.set_verticalgap("8");
                p.Panel18_01_00.set_flexgrow("1");
                p.Panel18_01_00.set_fittocontents("height");
                p.Panel18_01_00.move("280","1870","300","200",null,null);

                p.Panel702.set_taborder("177");
                p.Panel702.set_spacing("31px");
                p.Panel702.set_horizontalgap("24");
                p.Panel702.set_flexgrow("1");
                p.Panel702.set_fittocontents("height");
                p.Panel702.set_verticalgap("24");
                p.Panel702.set_cssclass("pnl_MF_bg");
                p.Panel702.move("0","3200","100%","264",null,null);

                p.Panel700.set_taborder("179");
                p.Panel700.set_flexwrap("wrap");
                p.Panel700.set_verticalgap("24");
                p.Panel700.set_fittocontents("height");
                p.Panel700.set_minwidth("");
                p.Panel700.set_maxwidth("1200");
                p.Panel700.move("0","Panel600:64",null,"338","0",null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Desktop_screen,mobile_small",480,7080,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_background("#FFFFFF");

                p.Panel300.set_verticalgap("12");
                p.Panel300.move("0","Panel200:32",null,"694","0",null);

                p.Panel400.move("0","Panel300:32",null,"1104","0",null);

                p.Panel500.move("0","Panel400:32",null,"1148","0",null);

                p.Panel600.move("0","Panel500:32",null,"1800","0",null);

                p.Panel700.move("0","Panel600:32",null,"681","0",null);

                p.Panel13.set_flexwrap("wrap");
                p.Panel13.set_fittocontents("height");
                p.Panel13.set_minheight("360");
                p.Panel13.set_maxheight("");
                p.Panel13.move("0","1252","100%","560",null,null);

                p.Panel10.set_fittocontents("height");
                p.Panel10.set_flexgrow("1");
                p.Panel10.move("304","1204","100%","282",null,null);

                p.Panel12.set_fittocontents("height");
                p.Panel12.move("0","1252","100%","174",null,null);

                p.Panel401.set_fittocontents("height");
                p.Panel401.set_flexgrow("1");
                p.Panel401.set_maxwidth("");
                p.Panel401.move("0","1182","100%","632",null,null);

                p.Button01.set_flexgrow("1");
                p.Button01.move("304","1204","100%","50",null,null);

                p.Button01_00.set_flexgrow("1");
                p.Button01_00.move("304","1260","100%","50",null,null);

                p.Button01_00_00.set_flexgrow("1");
                p.Button01_00_00.move("304","1315","100%","50",null,null);

                p.Button01_00_00_00.set_flexgrow("1");
                p.Button01_00_00_00.move("304","1385","100%","50",null,null);

                p.Button01_00_00_00_00.set_flexgrow("1");
                p.Button01_00_00_00_00.move("304","1440","100%","50",null,null);

                p.Panel402.set_flexgrow("1");
                p.Panel402.move("10","1192","100%","432",null,null);

                p.Panel302.set_fittocontents("height");

                p.Static01_06_01.set_flexgrow("1");

                p.Panel501.set_flexwrap("wrap");
                p.Panel501.move("0","1730","100%","80",null,null);

                p.Panel16.move("26","1730","100%","40",null,null);

                p.Panel01.set_fittocontents("none");
                p.Panel01.move("1130","0","100%","40",null,null);


                p.Panel27.set_maxwidth("");
                p.Panel27.move("60","2589","100%","425",null,null);

                p.Panel27_00.set_maxwidth("");
                p.Panel27_00.move("70","2599","100%","425",null,null);

                p.Panel27_02.set_maxwidth("");
                p.Panel27_02.move("90","2619","100%","425",null,null);

                p.Panel27_01.set_maxwidth("");
                p.Panel27_01.move("80","2609","100%","425",null,null);

                p.Panel29.set_verticalgap("16");
                p.Panel29.set_horizontalgap("16");
                p.Panel29.move("0","0","372","866",null,null);

                p.Panel30.set_verticalgap("12");
                p.Panel30.set_horizontalgap("12");
                p.Panel30.move("564","0","372","866",null,null);

                p.Panel602.set_verticalgap("12");
                p.Panel602.set_horizontalgap("12");
                p.Panel602.move("0","2589","100%","1748",null,null);

                p.Panel23.set_verticalgap("12");
                p.Panel23.move("0","0","100%","480",null,null);

                p.Panel22.set_verticalgap("12");
                p.Panel22.move("0","258","100%","480",null,null);

                p.Panel502.set_verticalgap("12");
                p.Panel502.move("0","1851","100%","972",null,null);

                p.Panel702.set_flexwrap("wrap");
                p.Panel702.set_spacing("23px");
                p.Panel702.move("0","3200","100%","629",null,null);

                p.Panel31.set_verticalgap("12");
                p.Panel31.set_horizontalgap("12");
                p.Panel31.move("612","0","572","272",null,null);

                p.Panel32.set_verticalgap("12");
                p.Panel32.set_horizontalgap("12");
                p.Panel32.move("0","0","572","272",null,null);

                p.Panel303.set_verticalgap("12");
                p.Panel303.set_horizontalgap("12");
                p.Panel303.move("0","994","100%","556",null,null);

                p.Static00_01_01_01_00.set_fittocontents("height");
                p.Static00_01_01_01_00.move("110","587","300","40",null,null);

                p.Static00_01_01_01.set_fittocontents("height");
                p.Static00_01_01_01.move("100","577","280","40",null,null);

                p.Static500.set_fittocontents("height");
                p.Static500.move("10","1650","130","40",null,null);

                p.Static00_01_01_00_01.set_fittocontents("height");
                p.Static00_01_01_00_01.move("10","1192","180","40",null,null);

                p.Static400.set_fittocontents("height");
                p.Static400.move("0","1182","230","40",null,null);

                p.Static300.set_fittocontents("height");
                p.Static300.move("90","567","182","40",null,null);

                p.Static200.set_fittocontents("width");
                p.Static200.move("80","557","190","40",null,null);

                p.Panel201.set_fittocontents("height");
                p.Panel201.move("0","557","100%","50",null,null);

                p.Panel301.set_fittocontents("height");
                p.Panel301.move("0","818","100%","50",null,null);

                p.Panel601.set_fittocontents("height");
                p.Panel601.move("0","2500","100%","36",null,null);

                p.ImageViewer01_00_00.set_image("url(\'theme://images/img_MF_Image20.png\')");
                p.ImageViewer01_00_00.set_accessibilitylabel("넥사크로 플랫폼 운영팀");
                p.ImageViewer01_00_00.set_accessibilityrole("image");
                p.ImageViewer01_00_00.move("65","1851","100%","400",null,null);

                p.Panel02.set_flexmainaxisalign("end");
                p.Panel02.move("20","135","200","47",null,null);

                p.Panel202.move("0","769","100%","462",null,null);

                p.Panel200.move("0","Div100:32",null,"502","0",null);

                p.Static00_01_01_00_00_00_01_00.move("282","1950","229.00763358778627%","76",null,null);

                p.Button03_00_01.set_fittocontents("none");
                p.Button03_00_01.move("199","3000","90","32",null,null);

                p.Button03_00_01_00.set_fittocontents("none");
                p.Button03_00_01_00.move("209","3010","90","32",null,null);

                p.Button03_00_01_02.set_fittocontents("none");
                p.Button03_00_01_02.move("229","3030","90","32",null,null);

                p.Button03_00_01_01.set_fittocontents("none");
                p.Button03_00_01_01.move("219","3020","90","32",null,null);

                p.Panel25.set_flexmainaxisalign("start");
                p.Panel25.move("199","3000","218","40",null,null);

                p.Panel25_00.set_flexmainaxisalign("start");
                p.Panel25_00.move("209","3010","218","40",null,null);

                p.Panel25_01.set_flexmainaxisalign("start");
                p.Panel25_01.move("219","3020","218","40",null,null);

                p.Panel25_02.set_flexmainaxisalign("start");
                p.Panel25_02.move("229","3030","218","40",null,null);

                p.Static02_00_01.set_text("주요 버그 수정 및 성능 향상 포함  Layout Editor 개선 및 신규 속성 추가");

                p.Static02_00_01_00.set_text("구성과 검색 편의성이 대폭 개선된  Nexacro 개발자 가이드를 지금 확인해보세요");

                p.Static02_00_01_00_00.set_text("그리드, 데이터 필드 등 주요 컴포넌트의 실사용 예제 및 활용 가이드를 업데이트했습니다");

                p.Static03_00.move("87","2860","100%","24",null,null);

                p.Static03_00_00.move("87","2890","100%","48",null,null);

                p.Static03_00_01.move("97","2870","100%","24",null,null);

                p.Static03_00_00_00.move("97","2900","100%","48",null,null);

                p.Static03_00_02.move("107","2880","100%","24",null,null);

                p.Static03_00_00_01.move("107","2910","100%","48",null,null);

                p.Static03_00_03.move("117","2890","100%","24",null,null);

                p.Static03_00_00_02.move("117","2920","100%","48",null,null);

                p.Panel06.set_flexgrow("1");

                p.Panel05.set_flexgrow("1");

                p.Panel07.set_flexgrow("1");

                p.Panel04.set_flexgrow("1");

                p.Panel26_02.set_spacing("23px");
                p.Panel26_02.move("117","2863","100%","219",null,null);

                p.Panel26_01.set_spacing("23px");
                p.Panel26_01.move("107","2853","100%","219",null,null);

                p.Panel26_00.set_spacing("23px");
                p.Panel26_00.move("97","2843","100%","219",null,null);

                p.Panel26.set_spacing("23px");
                p.Panel26.move("87","2833","100%","219",null,null);

                p.Button03_01_02.set_visible("false");

                p.Button03_00.set_visible("false");

                p.Button03_00_00.set_visible("false");

                p.Button03_01.set_visible("false");

                p.Button03_01_01.set_visible("true");
                p.Button03_01_01.set_fittocontents("height");

                p.Button03_01_01_00.set_visible("true");
                p.Button03_01_01_00.set_fittocontents("height");

                p.Button03_01_01_00_00.set_visible("true");
                p.Button03_01_01_00_00.set_fittocontents("height");

                p.Button03_01_01_01.set_visible("true");
                p.Button03_01_01_01.set_fittocontents("height");

                p.Panel18_00_00.set_fittocontents("height");

                p.Panel20.set_fittocontents("height");
                p.Panel20.set_spacing("23px");
                p.Panel20.set_verticalgap("20");

                p.Panel00_00.set_fittocontents("height");

                p.Panel19_00.set_fittocontents("height");
                p.Panel19_00.set_verticalgap("20");
                p.Panel19_00.set_spacing("23px");

                p.Panel19_00_00.set_fittocontents("height");
                p.Panel19_00_00.set_verticalgap("20");
                p.Panel19_00_00.set_spacing("23px");

                p.Panel20_00.set_fittocontents("height");
                p.Panel20_00.set_spacing("23px");
                p.Panel20_00.set_verticalgap("20");

                p.Panel18_00.set_fittocontents("height");

                p.ImageViewer01_00.move("65","1851","200","118",null,null);

                p.ImageViewer01_00_01.move("75","1861","200","118",null,null);

                p.Panel00.set_fittocontents("height");

                p.Panel18_01.set_fittocontents("height");

                p.Panel18_01_01.set_fittocontents("height");

                p.Panel07_00.move("0","994","272","130",null,null);

                p.Panel07_00_00.move("230","994","272","130",null,null);

                p.Panel07_00_00_00.move("430","994","272","130",null,null);

                p.Panel07_00_00_00_00.move("626","994","272","130",null,null);

                p.Static00_01_01_00_00_00.move("0","1296","100%","72",null,null);

                p.Panel11.move("0","1252","100%","103",null,null);

                p.Static00_01_01_00_00.move("0","1252","100%","23",null,null);

                p.Panel701.move("0","3150","100%","40",null,null);

                p.Button03_01_00.set_fittocontents("none");
                p.Button03_01_00.move("319","2043","200","32",null,null);

                p.Div100.move("0","0",null,"857","0",null);
            	}
            );
            obj.set_mobileorientation("Portrait");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmMain.xfdl", function() {
        this.Form_Main_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Main_onload,this);
            this.Static00_01_00.addEventHandler("onclick",this.Static00_01_00_onclick,this);
            this.Static00_01_00_00.addEventHandler("onclick",this.Static00_01_00_onclick,this);
            this.Static00_01_00_01.addEventHandler("onclick",this.Static00_01_00_onclick,this);
            this.Static00_01_00_02.addEventHandler("onclick",this.Static00_01_00_onclick,this);
            this.Static00_01_00_03.addEventHandler("onclick",this.Static00_01_00_onclick,this);
            this.Static00_01_00_04.addEventHandler("onclick",this.Static00_01_00_onclick,this);
            this.Static00_01_00_05.addEventHandler("onclick",this.Static00_01_00_onclick,this);
            this.Static00_01_00_06.addEventHandler("onclick",this.Static00_01_00_onclick,this);
            this.Static00_01_00_07.addEventHandler("onclick",this.Static00_01_00_onclick,this);
            this.Static00_01_00_08.addEventHandler("onclick",this.Static00_01_00_onclick,this);
            this.Static00_01_01_00_00_00_01_01.addEventHandler("onclick",this.Static00_01_01_00_00_00_01_01_onclick,this);
        };
        this.loadIncludeScript("frmMain.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
