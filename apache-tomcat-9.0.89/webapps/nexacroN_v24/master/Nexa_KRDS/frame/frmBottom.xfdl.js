(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Bottom");
            this.set_titletext("Bottom Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,580);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static03","0","0",null,"56","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_BF_Relsitwrap");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button08","1253","25","192","56",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("TOBESOFT Pro");
            obj.set_cssclass("btn_BF_Relsite");
            obj.set_flexgrow("1");
            obj.set_tooltiptext("https://pro.tobesoft.com/Pro/index.html");
            this.addChild(obj.name, obj);

            obj = new Button("Button08_00","750","10","192","56",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("TOBESOFT");
            obj.set_cssclass("btn_BF_Relsite");
            obj.set_flexgrow("1");
            obj.set_tooltiptext("https://www.tobesoft.com/main");
            this.addChild(obj.name, obj);

            obj = new Button("Button08_00_00","380","10","192","56",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_BF_Relsite");
            obj.set_flexgrow("1");
            obj.set_tooltiptext("https://support.tobesoft.co.kr/Support/?menu=home");
            obj.set_text("투비소프트 고객지원");
            this.addChild(obj.name, obj);

            obj = new Button("Button08_00_00_00","750","10","192","56",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("related_site");
            obj.set_cssclass("btn_BF_RelsiteEnd");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","0",null,"56","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Button08\"/><PanelItem id=\"PanelItem04\" componentid=\"Button08_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button08_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Button08_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","Panel00:0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_BF_Bfbg");
            obj.set_text("");
            obj.set_flexgrow("1");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","96","360","48",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_tablecellarea("0/1");
            obj.set_cssclass("sta_BF_UXpro_pc");
            obj.set_accessibilitylabel("유엑스Pro KRDS");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","10","10","100%","26",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("(06083) 서울시 강남구 봉은사로 617 인탑스빌딩 2~5층");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","121","211","100","26",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("대표번호");
            obj.set_cssclass("sta_WF_Txt17B");
            obj.set_flexshrink("0");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01","10","52","180","26",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("02-2140-7700");
            obj.set_flexshrink("0");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_00","10","94","200","26",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("(평일 09시-18시)");
            obj.set_cssclass("sta_BF_Txtdivide");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","0","42","100%","26",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_horizontalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static05\"/><PanelItem id=\"PanelItem01\" componentid=\"Static05_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Static05_01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_03","121","211","100","26",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Help desk");
            obj.set_cssclass("sta_WF_Txt17B");
            obj.set_flexshrink("0");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_03_00","10","52","180","26",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("1588-7895 ");
            obj.set_flexshrink("0");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_03_01","10","94","200","26",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("(평일 09시-18시)");
            obj.set_cssclass("sta_BF_Txtdivide");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_02","10","94","100%","26",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_horizontalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static05_03\"/><PanelItem id=\"PanelItem01\" componentid=\"Static05_03_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static05_03_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02","122","204","588","155",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_verticalgap("16");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Static04\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel02_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","10","10","100%","26",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("Notice");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00","20","20","100%","26",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("공지사항");
            obj.set_cssclass("sta_WF_Txt17B");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_00","10","10","100%","52",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static06\"/><PanelItem id=\"PanelItem01\" componentid=\"Static06_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","10","10","100%","26",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("Edutation");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00","10","10","100%","26",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("넥사크로 교육안내");
            obj.set_cssclass("sta_WF_Txt17B");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_01","0","0","100%","52",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07\"/><PanelItem id=\"PanelItem01\" componentid=\"Static07_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03","10","50","282","155",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("16");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel03_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel03_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","918","184","222","32",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("개발라이센스 다운로드");
            obj.set_accessibilityrole("link");
            obj.set_cssclass("btn_BF_Utillink");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","1213","213","132","32",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("찾아오시는 길");
            obj.set_cssclass("btn_BF_Utillink");
            obj.set_accessibilityrole("link");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_00","1182","184","100%","108",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_type("vertical");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem04\" componentid=\"Button01\"/><PanelItem id=\"PanelItem00\" componentid=\"Button02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","1223","444","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_cssclass("btn_BF_Insta");
            obj.set_accessibilityrole("link");
            obj.set_accessibilitylabel("인스타그램");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01","10","10","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("btn_BF_Youtube");
            obj.set_accessibilityrole("link");
            obj.set_accessibilitylabel("유튜브");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_02","58","10","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_cssclass("btn_BF_XTwitter");
            obj.set_accessibilityrole("link");
            obj.set_accessibilitylabel("스레드");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_03","106","10","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_cssclass("btn_BF_Facebook");
            obj.set_accessibilityrole("link");
            obj.set_accessibilitylabel("페이스푹");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_04","154","10","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_cssclass("btn_BF_Blog");
            obj.set_accessibilityrole("link");
            obj.set_accessibilitylabel("네이버블로그");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_01","942","332","248","40",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_horizontalgap("8");
            obj.set_fittocontents("width");
            obj.set_flexshrink("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00\"/><PanelItem id=\"PanelItem02\" componentid=\"Button00_01\"/><PanelItem id=\"PanelItem03\" componentid=\"Button00_02\"/><PanelItem id=\"PanelItem04\" componentid=\"Button00_03\"/><PanelItem id=\"PanelItem05\" componentid=\"Button00_04\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04","848","50","282","188",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_type("vertical");
            obj.set_verticalgap("40");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel04_00\"/><PanelItem id=\"PanelItem06\" componentid=\"Panel04_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","Static02:40",null,"268","0",null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_tablecellarea("1/1");
            obj.set_spacing("0px 0px 40px 0px");
            obj.set_horizontalgap("24");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("24");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel03\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel04\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","0","0","110","24",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("TOBESOFT Pro");
            obj.set_cssclass("btn_WF_Txtsm");
            obj.set_visible("true");
            obj.set_accessibilityrole("link");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","76","0","76","24",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("KRDS 소개");
            obj.set_cssclass("btn_WF_Txtsm");
            obj.set_visible("true");
            obj.set_accessibilityrole("link");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_05","152","0","124","24",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("개인정보처리방침");
            obj.set_cssclass("btn_WF_TxtsmB");
            obj.set_visible("true");
            obj.set_accessibilityrole("link");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel06","0","429","58.333333333333336%","40",null,null,"460",null,null,null,this);
            obj.set_taborder("39");
            obj.set_horizontalgap("8");
            obj.set_verticalgap("4");
            obj.set_flexgrow("1");
            obj.set_spacing("16px 0px 0px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem04\" componentid=\"Button00_00\"/><PanelItem id=\"PanelItem05\" componentid=\"Button00_00_00\"/><PanelItem id=\"PanelItem06\" componentid=\"Button00_05\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","1100","388","330","24",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("© TOBESOFT.CO.LTD. All rights reserved.");
            obj.set_cssclass("sta_BF_Copyright_pc");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel05","0","Panel01:0",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_type("horizontal");
            obj.set_cssclass("pnl_BF_Copyright");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("40");
            obj.set_verticalgap("20");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel06\"/><PanelItem id=\"PanelItem00\" componentid=\"Static11\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","16","8","172","24",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_tablecellarea("0/1");
            obj.set_text("");
            obj.set_cssclass("sta_BF_UXproIdentiW");
            obj.set_accessibilitylabel("유엑스Pro KRDS");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","16","20","400","24",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("이 사이트는 KRDS를 반영하여 제작한 UXPro KRDS 사이트입니다.");
            obj.set_tablecellarea("0/1");
            obj.set_cssclass("sta_BF_IdentiTxtW");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel08","0","Panel05:24",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_cssclass("pnl_BF_IdentiB");
            obj.set_horizontalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_spacing("8px 16px 8px 16px");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Static12\"/><PanelItem id=\"PanelItem00\" componentid=\"Static13\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","60","Panel08:0","33","24",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1200,580,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("Bottom Frame");

                p.Static03.set_taborder("0");
                p.Static03.set_cssclass("sta_BF_Relsitwrap");
                p.Static03.set_accessibilityenable("false");
                p.Static03.move("0","0",null,"56","0",null);

                p.Button08.set_taborder("1");
                p.Button08.set_text("TOBESOFT Pro");
                p.Button08.set_cssclass("btn_BF_Relsite");
                p.Button08.set_flexgrow("1");
                p.Button08.set_tooltiptext("https://pro.tobesoft.com/Pro/index.html");
                p.Button08.move("1253","25","192","56",null,null);

                p.Button08_00.set_taborder("2");
                p.Button08_00.set_text("TOBESOFT");
                p.Button08_00.set_cssclass("btn_BF_Relsite");
                p.Button08_00.set_flexgrow("1");
                p.Button08_00.set_tooltiptext("https://www.tobesoft.com/main");
                p.Button08_00.move("750","10","192","56",null,null);

                p.Button08_00_00.set_taborder("3");
                p.Button08_00_00.set_cssclass("btn_BF_Relsite");
                p.Button08_00_00.set_flexgrow("1");
                p.Button08_00_00.set_tooltiptext("https://support.tobesoft.co.kr/Support/?menu=home");
                p.Button08_00_00.set_text("투비소프트 고객지원");
                p.Button08_00_00.move("380","10","192","56",null,null);

                p.Button08_00_00_00.set_taborder("4");
                p.Button08_00_00_00.set_text("related_site");
                p.Button08_00_00_00.set_cssclass("btn_BF_RelsiteEnd");
                p.Button08_00_00_00.set_flexgrow("1");
                p.Button08_00_00_00.move("750","10","192","56",null,null);

                p.Panel00.set_taborder("5");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_flexgrow("1");
                p.Panel00.move("0","0",null,"56","0",null);

                p.Static00.set_taborder("6");
                p.Static00.set_cssclass("sta_BF_Bfbg");
                p.Static00.set_text("");
                p.Static00.set_flexgrow("1");
                p.Static00.set_accessibilityenable("false");
                p.Static00.move("0","Panel00:0",null,null,"0","0");

                p.Static02.set_taborder("7");
                p.Static02.set_tablecellarea("0/1");
                p.Static02.set_cssclass("sta_BF_UXpro_pc");
                p.Static02.set_accessibilitylabel("유엑스Pro KRDS");
                p.Static02.move("0","96","360","48",null,null);

                p.Static04.set_taborder("8");
                p.Static04.set_text("(06083) 서울시 강남구 봉은사로 617 인탑스빌딩 2~5층");
                p.Static04.set_fittocontents("height");
                p.Static04.move("10","10","100%","26",null,null);

                p.Static05.set_taborder("9");
                p.Static05.set_text("대표번호");
                p.Static05.set_cssclass("sta_WF_Txt17B");
                p.Static05.set_flexshrink("0");
                p.Static05.set_fittocontents("width");
                p.Static05.move("121","211","100","26",null,null);

                p.Static05_01.set_taborder("10");
                p.Static05_01.set_text("02-2140-7700");
                p.Static05_01.set_flexshrink("0");
                p.Static05_01.set_fittocontents("width");
                p.Static05_01.move("10","52","180","26",null,null);

                p.Static05_01_00.set_taborder("11");
                p.Static05_01_00.set_text("(평일 09시-18시)");
                p.Static05_01_00.set_cssclass("sta_BF_Txtdivide");
                p.Static05_01_00.move("10","94","200","26",null,null);

                p.Panel02_00.set_taborder("12");
                p.Panel02_00.set_horizontalgap("8");
                p.Panel02_00.move("0","42","100%","26",null,null);

                p.Static05_03.set_taborder("13");
                p.Static05_03.set_text("Help desk");
                p.Static05_03.set_cssclass("sta_WF_Txt17B");
                p.Static05_03.set_flexshrink("0");
                p.Static05_03.set_fittocontents("width");
                p.Static05_03.move("121","211","100","26",null,null);

                p.Static05_03_00.set_taborder("14");
                p.Static05_03_00.set_text("1588-7895 ");
                p.Static05_03_00.set_flexshrink("0");
                p.Static05_03_00.set_fittocontents("width");
                p.Static05_03_00.move("10","52","180","26",null,null);

                p.Static05_03_01.set_taborder("15");
                p.Static05_03_01.set_text("(평일 09시-18시)");
                p.Static05_03_01.set_cssclass("sta_BF_Txtdivide");
                p.Static05_03_01.move("10","94","200","26",null,null);

                p.Panel02_02.set_taborder("16");
                p.Panel02_02.set_horizontalgap("8");
                p.Panel02_02.move("10","94","100%","26",null,null);

                p.Panel02.set_taborder("17");
                p.Panel02.set_verticalgap("16");
                p.Panel02.set_type("vertical");
                p.Panel02.set_fittocontents("height");
                p.Panel02.set_flexgrow("1");
                p.Panel02.set_maxwidth("");
                p.Panel02.move("122","204","588","155",null,null);

                p.Static06.set_taborder("18");
                p.Static06.set_text("Notice");
                p.Static06.move("10","10","100%","26",null,null);

                p.Static06_00.set_taborder("19");
                p.Static06_00.set_text("공지사항");
                p.Static06_00.set_cssclass("sta_WF_Txt17B");
                p.Static06_00.move("20","20","100%","26",null,null);

                p.Panel03_00.set_taborder("20");
                p.Panel03_00.set_type("vertical");
                p.Panel03_00.move("10","10","100%","52",null,null);

                p.Static07.set_taborder("21");
                p.Static07.set_text("Edutation");
                p.Static07.move("10","10","100%","26",null,null);

                p.Static07_00.set_taborder("22");
                p.Static07_00.set_text("넥사크로 교육안내");
                p.Static07_00.set_cssclass("sta_WF_Txt17B");
                p.Static07_00.move("10","10","100%","26",null,null);

                p.Panel03_01.set_taborder("23");
                p.Panel03_01.set_type("vertical");
                p.Panel03_01.move("0","0","100%","52",null,null);

                p.Panel03.set_taborder("24");
                p.Panel03.set_type("horizontal");
                p.Panel03.set_flexwrap("wrap");
                p.Panel03.set_verticalgap("16");
                p.Panel03.set_fittocontents("height");
                p.Panel03.set_flexgrow("1");
                p.Panel03.set_maxwidth("");
                p.Panel03.move("10","50","282","155",null,null);

                p.Button01.set_taborder("25");
                p.Button01.set_text("개발라이센스 다운로드");
                p.Button01.set_accessibilityrole("link");
                p.Button01.set_cssclass("btn_BF_Utillink");
                p.Button01.move("918","184","222","32",null,null);

                p.Button02.set_taborder("26");
                p.Button02.set_text("찾아오시는 길");
                p.Button02.set_cssclass("btn_BF_Utillink");
                p.Button02.set_accessibilityrole("link");
                p.Button02.move("1213","213","132","32",null,null);

                p.Panel04_00.set_taborder("27");
                p.Panel04_00.set_type("vertical");
                p.Panel04_00.set_verticalgap("4");
                p.Panel04_00.set_fittocontents("height");
                p.Panel04_00.move("1182","184","100%","108",null,null);

                p.Button00.set_taborder("28");
                p.Button00.set_cssclass("btn_BF_Insta");
                p.Button00.set_accessibilityrole("link");
                p.Button00.set_accessibilitylabel("인스타그램");
                p.Button00.move("1223","444","40","40",null,null);

                p.Button00_01.set_taborder("29");
                p.Button00_01.set_cssclass("btn_BF_Youtube");
                p.Button00_01.set_accessibilityrole("link");
                p.Button00_01.set_accessibilitylabel("유튜브");
                p.Button00_01.move("10","10","40","40",null,null);

                p.Button00_02.set_taborder("30");
                p.Button00_02.set_cssclass("btn_BF_XTwitter");
                p.Button00_02.set_accessibilityrole("link");
                p.Button00_02.set_accessibilitylabel("스레드");
                p.Button00_02.move("58","10","40","40",null,null);

                p.Button00_03.set_taborder("31");
                p.Button00_03.set_cssclass("btn_BF_Facebook");
                p.Button00_03.set_accessibilityrole("link");
                p.Button00_03.set_accessibilitylabel("페이스푹");
                p.Button00_03.move("106","10","40","40",null,null);

                p.Button00_04.set_taborder("32");
                p.Button00_04.set_cssclass("btn_BF_Blog");
                p.Button00_04.set_accessibilityrole("link");
                p.Button00_04.set_accessibilitylabel("네이버블로그");
                p.Button00_04.move("154","10","40","40",null,null);

                p.Panel04_01.set_taborder("33");
                p.Panel04_01.set_horizontalgap("8");
                p.Panel04_01.set_fittocontents("width");
                p.Panel04_01.set_flexshrink("0");
                p.Panel04_01.move("942","332","248","40",null,null);

                p.Panel04.set_taborder("34");
                p.Panel04.set_type("vertical");
                p.Panel04.set_verticalgap("40");
                p.Panel04.set_fittocontents("height");
                p.Panel04.set_flexgrow("1");
                p.Panel04.set_maxwidth("");
                p.Panel04.move("848","50","282","188",null,null);

                p.Panel01.set_taborder("35");
                p.Panel01.set_tablecellarea("1/1");
                p.Panel01.set_spacing("0px 0px 40px 0px");
                p.Panel01.set_horizontalgap("24");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.set_fittocontents("height");
                p.Panel01.set_verticalgap("24");
                p.Panel01.set_flexgrow("1");
                p.Panel01.move("0","Static02:40",null,"268","0",null);

                p.Button00_00.set_taborder("36");
                p.Button00_00.set_text("TOBESOFT Pro");
                p.Button00_00.set_cssclass("btn_WF_Txtsm");
                p.Button00_00.set_visible("true");
                p.Button00_00.set_accessibilityrole("link");
                p.Button00_00.move("0","0","110","24",null,null);

                p.Button00_00_00.set_taborder("37");
                p.Button00_00_00.set_text("KRDS 소개");
                p.Button00_00_00.set_cssclass("btn_WF_Txtsm");
                p.Button00_00_00.set_visible("true");
                p.Button00_00_00.set_accessibilityrole("link");
                p.Button00_00_00.set_fittocontents("width");
                p.Button00_00_00.move("76","0","76","24",null,null);

                p.Button00_05.set_taborder("38");
                p.Button00_05.set_text("개인정보처리방침");
                p.Button00_05.set_cssclass("btn_WF_TxtsmB");
                p.Button00_05.set_visible("true");
                p.Button00_05.set_accessibilityrole("link");
                p.Button00_05.move("152","0","124","24",null,null);

                p.Panel06.set_taborder("39");
                p.Panel06.set_horizontalgap("8");
                p.Panel06.set_verticalgap("4");
                p.Panel06.set_flexgrow("1");
                p.Panel06.set_spacing("16px 0px 0px 0px");
                p.Panel06.set_minwidth("460");
                p.Panel06.set_maxwidth("");
                p.Panel06.move("0","429","58.333333333333336%","40",null,null);

                p.Static11.set_taborder("40");
                p.Static11.set_text("© TOBESOFT.CO.LTD. All rights reserved.");
                p.Static11.set_cssclass("sta_BF_Copyright_pc");
                p.Static11.set_fittocontents("width");
                p.Static11.set_maxwidth("");
                p.Static11.move("1100","388","330","24",null,null);

                p.Panel05.set_taborder("41");
                p.Panel05.set_type("horizontal");
                p.Panel05.set_cssclass("pnl_BF_Copyright");
                p.Panel05.set_fittocontents("height");
                p.Panel05.set_flexwrap("wrap");
                p.Panel05.set_horizontalgap("40");
                p.Panel05.set_verticalgap("20");
                p.Panel05.set_flexcrossaxisalign("center");
                p.Panel05.move("0","Panel01:0",null,"40","0",null);

                p.Static12.set_taborder("42");
                p.Static12.set_tablecellarea("0/1");
                p.Static12.set_text("");
                p.Static12.set_cssclass("sta_BF_UXproIdentiW");
                p.Static12.set_accessibilitylabel("유엑스Pro KRDS");
                p.Static12.move("16","8","172","24",null,null);

                p.Static13.set_taborder("43");
                p.Static13.set_text("이 사이트는 KRDS를 반영하여 제작한 UXPro KRDS 사이트입니다.");
                p.Static13.set_tablecellarea("0/1");
                p.Static13.set_cssclass("sta_BF_IdentiTxtW");
                p.Static13.move("16","20","400","24",null,null);

                p.Panel08.set_taborder("44");
                p.Panel08.set_cssclass("pnl_BF_IdentiB");
                p.Panel08.set_horizontalgap("8");
                p.Panel08.set_flexwrap("wrap");
                p.Panel08.set_flexcrossaxiswrapalign("center");
                p.Panel08.set_spacing("8px 16px 8px 16px");
                p.Panel08.set_fittocontents("height");
                p.Panel08.move("0","Panel05:24",null,"40","0",null);

                p.Static14.set_taborder("45");
                p.Static14.set_accessibilityenable("false");
                p.Static14.move("60","Panel08:0","33","24",null,null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Desktop_screen,mobile_small",1030,916,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel01.set_spacing("40px 0px 40px 0px");
                p.Panel01.move("0","Static02:0",null,"447","0",null);

                p.Panel00.set_flexwrap("wrap");
                p.Panel00.move("0","0",null,"224","0",null);

                p.Static00.set_text("");
                p.Static00.move("0","Panel00:0",null,null,"0","0");

                p.Static03.move("0","0",null,"224","0",null);

                p.Static02.move("0","Panel00:24","350","48",null,null);

                p.Panel05.move("0","Panel01:0",null,"85","0",null);

                p.Static11.set_cssclass("sta_BF_CopyrightM");

                p.Button08_00_00_00.set_cssclass("btn_BF_RelsiteV");
                p.Button08_00_00_00.move("750","10","800","56",null,null);

                p.Button08_00_00.set_cssclass("btn_BF_RelsiteV");
                p.Button08_00_00.set_text("투비소프트 고객지원");
                p.Button08_00_00.move("380","10","800","56",null,null);

                p.Button08_00.set_cssclass("btn_BF_RelsiteV");
                p.Button08_00.move("750","10","800","56",null,null);

                p.Button08.set_cssclass("btn_BF_RelsiteV");
                p.Button08.move("1253","25","800","56",null,null);

                p.Static04.move("0","10","100%","26",null,null);
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

        };
        
        // User Script
        this.registerScript("frmBottom.xfdl", function() {

        this.Form_Bottom_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Bottom_onload,this);
            this.Static02.addEventHandler("onclick",this.Static02_onclick,this);
        };
        this.loadIncludeScript("frmBottom.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
