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
            this.set_titletext("푸터");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,560);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static03","0","0",null,"56","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_BF_Relsitwrap");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","0",null,"56","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Button08\"/><PanelItem id=\"PanelItem04\" componentid=\"Button08_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button08_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Button08_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","Panel00:0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_BF_Bfbg");
            obj.set_text("");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","96",null,"48","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_tablecellarea("0/1");
            obj.set_cssclass("sta_BF_Bflogo");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","Static02:0",null,"268","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_tablecellarea("1/1");
            obj.set_spacing("40px 0px 40px 0px");
            obj.set_horizontalgap("24");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("24");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel03\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel04\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02","122","204","588","155",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_verticalgap("16");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Static04\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel02_01\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel02_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03","10","50","282","155",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("16");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel03_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel03_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04","848","50","282","188",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_type("vertical");
            obj.set_verticalgap("40");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel04_00\"/><PanelItem id=\"PanelItem06\" componentid=\"Panel04_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","121","211","100","26",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("대표전화");
            obj.set_cssclass("sta_WF_Txt17B");
            obj.set_flexshrink("0");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","10","10","100%","26",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("(04383) 서울특별시 용산구 이태원로 22");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01","10","52","180","26",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("1234-5678");
            obj.set_flexshrink("0");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_00","10","94","200","26",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("(유료, 평일 09시-18시)");
            obj.set_cssclass("sta_BF_Txtdivide");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","0","42","100%","26",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_horizontalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static05\"/><PanelItem id=\"PanelItem01\" componentid=\"Static05_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Static05_01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_02","121","211","100","26",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("해외이용");
            obj.set_cssclass("sta_WF_Txt17B");
            obj.set_flexshrink("0");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_02_00","10","52","180","26",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("+82-1234-5678");
            obj.set_flexshrink("0");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_02_01","10","94","200","26",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("(유료, 평일 09시-18시)");
            obj.set_cssclass("sta_BF_Txtdivide");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_01","10","52","100%","26",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_horizontalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static05_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Static05_02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static05_02_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_03","121","211","100","26",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("정보 레이블");
            obj.set_cssclass("sta_WF_Txt17B");
            obj.set_flexshrink("0");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_03_00","10","52","180","26",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("email2025@korea.com");
            obj.set_flexshrink("0");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_03_01","10","94","200","26",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("주소를 입력해주세요");
            obj.set_cssclass("sta_BF_Txtdivide");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_02","10","94","100%","26",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_horizontalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static05_03\"/><PanelItem id=\"PanelItem01\" componentid=\"Static05_03_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static05_03_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","10","10","100%","26",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("정보입력");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00","20","20","100%","26",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("중요한 정보를 입력해주세요");
            obj.set_cssclass("sta_WF_Txt17B");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_00","10","10","100%","52",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static06\"/><PanelItem id=\"PanelItem01\" componentid=\"Static06_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","10","10","100%","26",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("정보입력");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00","10","10","100%","26",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("중요한 정보를 입력해주세요");
            obj.set_cssclass("sta_WF_Txt17B");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_01","0","0","100%","52",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07\"/><PanelItem id=\"PanelItem01\" componentid=\"Static07_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_01","1184","394","336","40",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_horizontalgap("8");
            obj.set_fittocontents("width");
            obj.set_flexshrink("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00\"/><PanelItem id=\"PanelItem02\" componentid=\"Button00_01\"/><PanelItem id=\"PanelItem03\" componentid=\"Button00_02\"/><PanelItem id=\"PanelItem04\" componentid=\"Button00_03\"/><PanelItem id=\"PanelItem05\" componentid=\"Button00_04\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_00","1182","184","160","108",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_type("vertical");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem04\" componentid=\"Button01\"/><PanelItem id=\"PanelItem00\" componentid=\"Button02\"/><PanelItem id=\"PanelItem01\" componentid=\"Button03\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","1223","444","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_cssclass("btn_BF_Insta");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01","10","10","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_cssclass("btn_BF_Youtube");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_02","58","10","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_cssclass("btn_BF_XTwitter");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_03","106","10","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_cssclass("btn_BF_Facebook");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_04","154","10","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_cssclass("btn_BF_Blog");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel05","0","Panel01:0",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_type("horizontal");
            obj.set_cssclass("pnl_BF_Copyright");
            obj.set_fittocontents("height");
            obj.set_spacing("16px 0px 0px 0px");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("40");
            obj.set_verticalgap("20");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel06\"/><PanelItem id=\"PanelItem00\" componentid=\"Static11\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel06","75","492","460","24",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_tablecellarea("0/1");
            obj.set_horizontalgap("8");
            obj.set_verticalgap("4");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Button04\"/><PanelItem id=\"PanelItem00\" componentid=\"Button05\"/><PanelItem id=\"PanelItem02\" componentid=\"Button06\"/><PanelItem id=\"PanelItem03\" componentid=\"Button07\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","1100","388","442","24",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("© The Government of the Republic of Korea. All rights reserved.");
            obj.set_cssclass("sta_BF_Copyright_pc");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel07","0","Panel05:24",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_cssclass("pnl_BF_IdentiB");
            obj.set_type("horizontal");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_spacing("8px 16px");
            obj.set_horizontalgap("8");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Static12\"/><PanelItem id=\"PanelItem00\" componentid=\"Static13\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","112","462","77","24",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_tablecellarea("0/1");
            obj.set_text("");
            obj.set_cssclass("sta_BF_IdentiimgW");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","105","456","280","24",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("이 누리집은 정부 산하기관 누리집입니다.");
            obj.set_tablecellarea("0/1");
            obj.set_cssclass("sta_BF_IdentiTxtW");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","60","Panel07:0","33","24",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","1357","277","132","32",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("이용안내");
            obj.set_cssclass("btn_BF_Utillink");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","1213","213","132","32",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("찾아오시는 길");
            obj.set_cssclass("btn_BF_Utillink");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","1252","260","132","32",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("유틸리티 링크");
            obj.set_cssclass("btn_BF_Utillink");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","676","430","64","24",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("이용안내");
            obj.set_cssclass("btn_WF_Txtsm");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("Button05","634","437","124","24",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("개인정보처리방침");
            obj.set_cssclass("btn_WF_TxtsmB");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("Button06","514","439","79","24",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("저작권정책");
            obj.set_cssclass("btn_WF_Txtsm");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("Button07","388","432","206","24",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("웹 접근성 품질인증 마크 획득");
            obj.set_cssclass("btn_WF_Txtsm");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("Button08","1253","25","192","56",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("related_site");
            obj.set_cssclass("btn_BF_Relsite");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button08_00","750","10","192","56",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("related_site");
            obj.set_cssclass("btn_BF_Relsite");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button08_00_00","380","10","192","56",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("related_site");
            obj.set_cssclass("btn_BF_Relsite");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button08_00_00_00","750","10","192","56",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("related_site");
            obj.set_cssclass("btn_BF_RelsiteEnd");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1200,560,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("푸터");

                p.Static03.set_taborder("0");
                p.Static03.set_cssclass("sta_BF_Relsitwrap");
                p.Static03.move("0","0",null,"56","0",null);

                p.Panel00.set_taborder("1");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_flexgrow("1");
                p.Panel00.move("0","0",null,"56","0",null);

                p.Static00.set_taborder("6");
                p.Static00.set_cssclass("sta_BF_Bfbg");
                p.Static00.set_text("");
                p.Static00.set_flexgrow("1");
                p.Static00.move("0","Panel00:0",null,null,"0","0");

                p.Static02.set_taborder("7");
                p.Static02.set_tablecellarea("0/1");
                p.Static02.set_cssclass("sta_BF_Bflogo");
                p.Static02.set_text("");
                p.Static02.move("0","96",null,"48","0",null);

                p.Panel01.set_taborder("8");
                p.Panel01.set_tablecellarea("1/1");
                p.Panel01.set_spacing("40px 0px 40px 0px");
                p.Panel01.set_horizontalgap("24");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.set_fittocontents("height");
                p.Panel01.set_verticalgap("24");
                p.Panel01.set_flexgrow("1");
                p.Panel01.move("0","Static02:0",null,"268","0",null);

                p.Panel02.set_taborder("9");
                p.Panel02.set_verticalgap("16");
                p.Panel02.set_type("vertical");
                p.Panel02.set_fittocontents("height");
                p.Panel02.set_flexgrow("1");
                p.Panel02.set_maxwidth("");
                p.Panel02.move("122","204","588","155",null,null);

                p.Panel03.set_taborder("23");
                p.Panel03.set_type("horizontal");
                p.Panel03.set_flexwrap("wrap");
                p.Panel03.set_verticalgap("16");
                p.Panel03.set_fittocontents("height");
                p.Panel03.set_flexgrow("1");
                p.Panel03.set_maxwidth("");
                p.Panel03.move("10","50","282","155",null,null);

                p.Panel04.set_taborder("30");
                p.Panel04.set_type("vertical");
                p.Panel04.set_verticalgap("40");
                p.Panel04.set_fittocontents("height");
                p.Panel04.set_flexgrow("1");
                p.Panel04.set_maxwidth("");
                p.Panel04.move("848","50","282","188",null,null);

                p.Static05.set_taborder("12");
                p.Static05.set_text("대표전화");
                p.Static05.set_cssclass("sta_WF_Txt17B");
                p.Static05.set_flexshrink("0");
                p.Static05.set_fittocontents("width");
                p.Static05.move("121","211","100","26",null,null);

                p.Static04.set_taborder("10");
                p.Static04.set_text("(04383) 서울특별시 용산구 이태원로 22");
                p.Static04.set_fittocontents("height");
                p.Static04.move("10","10","100%","26",null,null);

                p.Static05_01.set_taborder("13");
                p.Static05_01.set_text("1234-5678");
                p.Static05_01.set_flexshrink("0");
                p.Static05_01.set_fittocontents("width");
                p.Static05_01.move("10","52","180","26",null,null);

                p.Static05_01_00.set_taborder("14");
                p.Static05_01_00.set_text("(유료, 평일 09시-18시)");
                p.Static05_01_00.set_cssclass("sta_BF_Txtdivide");
                p.Static05_01_00.move("10","94","200","26",null,null);

                p.Panel02_00.set_taborder("11");
                p.Panel02_00.set_horizontalgap("8");
                p.Panel02_00.move("0","42","100%","26",null,null);

                p.Static05_02.set_taborder("16");
                p.Static05_02.set_text("해외이용");
                p.Static05_02.set_cssclass("sta_WF_Txt17B");
                p.Static05_02.set_flexshrink("0");
                p.Static05_02.set_fittocontents("width");
                p.Static05_02.move("121","211","100","26",null,null);

                p.Static05_02_00.set_taborder("17");
                p.Static05_02_00.set_text("+82-1234-5678");
                p.Static05_02_00.set_flexshrink("0");
                p.Static05_02_00.set_fittocontents("width");
                p.Static05_02_00.move("10","52","180","26",null,null);

                p.Static05_02_01.set_taborder("18");
                p.Static05_02_01.set_text("(유료, 평일 09시-18시)");
                p.Static05_02_01.set_cssclass("sta_BF_Txtdivide");
                p.Static05_02_01.move("10","94","200","26",null,null);

                p.Panel02_01.set_taborder("15");
                p.Panel02_01.set_horizontalgap("8");
                p.Panel02_01.move("10","52","100%","26",null,null);

                p.Static05_03.set_taborder("20");
                p.Static05_03.set_text("정보 레이블");
                p.Static05_03.set_cssclass("sta_WF_Txt17B");
                p.Static05_03.set_flexshrink("0");
                p.Static05_03.set_fittocontents("width");
                p.Static05_03.move("121","211","100","26",null,null);

                p.Static05_03_00.set_taborder("21");
                p.Static05_03_00.set_text("email2025@korea.com");
                p.Static05_03_00.set_flexshrink("0");
                p.Static05_03_00.set_fittocontents("width");
                p.Static05_03_00.move("10","52","180","26",null,null);

                p.Static05_03_01.set_taborder("22");
                p.Static05_03_01.set_text("주소를 입력해주세요");
                p.Static05_03_01.set_cssclass("sta_BF_Txtdivide");
                p.Static05_03_01.move("10","94","200","26",null,null);

                p.Panel02_02.set_taborder("19");
                p.Panel02_02.set_horizontalgap("8");
                p.Panel02_02.move("10","94","100%","26",null,null);

                p.Static06.set_taborder("25");
                p.Static06.set_text("정보입력");
                p.Static06.move("10","10","100%","26",null,null);

                p.Static06_00.set_taborder("26");
                p.Static06_00.set_text("중요한 정보를 입력해주세요");
                p.Static06_00.set_cssclass("sta_WF_Txt17B");
                p.Static06_00.move("20","20","100%","26",null,null);

                p.Panel03_00.set_taborder("24");
                p.Panel03_00.set_type("vertical");
                p.Panel03_00.move("10","10","100%","52",null,null);

                p.Static07.set_taborder("28");
                p.Static07.set_text("정보입력");
                p.Static07.move("10","10","100%","26",null,null);

                p.Static07_00.set_taborder("29");
                p.Static07_00.set_text("중요한 정보를 입력해주세요");
                p.Static07_00.set_cssclass("sta_WF_Txt17B");
                p.Static07_00.move("10","10","100%","26",null,null);

                p.Panel03_01.set_taborder("27");
                p.Panel03_01.set_type("vertical");
                p.Panel03_01.move("0","0","100%","52",null,null);

                p.Panel04_01.set_taborder("35");
                p.Panel04_01.set_horizontalgap("8");
                p.Panel04_01.set_fittocontents("width");
                p.Panel04_01.set_flexshrink("0");
                p.Panel04_01.move("1184","394","336","40",null,null);

                p.Panel04_00.set_taborder("31");
                p.Panel04_00.set_type("vertical");
                p.Panel04_00.set_verticalgap("4");
                p.Panel04_00.set_fittocontents("height");
                p.Panel04_00.move("1182","184","160","108",null,null);

                p.Button00.set_taborder("36");
                p.Button00.set_cssclass("btn_BF_Insta");
                p.Button00.move("1223","444","40","40",null,null);

                p.Button00_01.set_taborder("37");
                p.Button00_01.set_cssclass("btn_BF_Youtube");
                p.Button00_01.move("10","10","40","40",null,null);

                p.Button00_02.set_taborder("38");
                p.Button00_02.set_cssclass("btn_BF_XTwitter");
                p.Button00_02.move("58","10","40","40",null,null);

                p.Button00_03.set_taborder("39");
                p.Button00_03.set_cssclass("btn_BF_Facebook");
                p.Button00_03.move("106","10","40","40",null,null);

                p.Button00_04.set_taborder("40");
                p.Button00_04.set_cssclass("btn_BF_Blog");
                p.Button00_04.move("154","10","40","40",null,null);

                p.Panel05.set_taborder("41");
                p.Panel05.set_type("horizontal");
                p.Panel05.set_cssclass("pnl_BF_Copyright");
                p.Panel05.set_fittocontents("height");
                p.Panel05.set_spacing("16px 0px 0px 0px");
                p.Panel05.set_flexwrap("wrap");
                p.Panel05.set_horizontalgap("40");
                p.Panel05.set_verticalgap("20");
                p.Panel05.move("0","Panel01:0",null,"40","0",null);

                p.Panel06.set_taborder("42");
                p.Panel06.set_tablecellarea("0/1");
                p.Panel06.set_horizontalgap("8");
                p.Panel06.set_verticalgap("4");
                p.Panel06.set_flexgrow("1");
                p.Panel06.set_maxwidth("");
                p.Panel06.move("75","492","460","24",null,null);

                p.Static11.set_taborder("47");
                p.Static11.set_text("© The Government of the Republic of Korea. All rights reserved.");
                p.Static11.set_cssclass("sta_BF_Copyright_pc");
                p.Static11.set_fittocontents("width");
                p.Static11.set_maxwidth("");
                p.Static11.move("1100","388","442","24",null,null);

                p.Panel07.set_taborder("48");
                p.Panel07.set_cssclass("pnl_BF_IdentiB");
                p.Panel07.set_type("horizontal");
                p.Panel07.set_fittocontents("height");
                p.Panel07.set_flexwrap("wrap");
                p.Panel07.set_flexcrossaxiswrapalign("center");
                p.Panel07.set_spacing("8px 16px");
                p.Panel07.set_horizontalgap("8");
                p.Panel07.set_verticalgap("4");
                p.Panel07.move("0","Panel05:24",null,"40","0",null);

                p.Static12.set_taborder("49");
                p.Static12.set_tablecellarea("0/1");
                p.Static12.set_text("");
                p.Static12.set_cssclass("sta_BF_IdentiimgW");
                p.Static12.move("112","462","77","24",null,null);

                p.Static13.set_taborder("50");
                p.Static13.set_text("이 누리집은 정부 산하기관 누리집입니다.");
                p.Static13.set_tablecellarea("0/1");
                p.Static13.set_cssclass("sta_BF_IdentiTxtW");
                p.Static13.move("105","456","280","24",null,null);

                p.Static14.set_taborder("51");
                p.Static14.set_accessibilityenable("false");
                p.Static14.move("60","Panel07:0","33","24",null,null);

                p.Button01.set_taborder("32");
                p.Button01.set_text("이용안내");
                p.Button01.set_cssclass("btn_BF_Utillink");
                p.Button01.move("1357","277","132","32",null,null);

                p.Button02.set_taborder("33");
                p.Button02.set_text("찾아오시는 길");
                p.Button02.set_cssclass("btn_BF_Utillink");
                p.Button02.move("1213","213","132","32",null,null);

                p.Button03.set_taborder("34");
                p.Button03.set_text("유틸리티 링크");
                p.Button03.set_cssclass("btn_BF_Utillink");
                p.Button03.move("1252","260","132","32",null,null);

                p.Button04.set_taborder("43");
                p.Button04.set_text("이용안내");
                p.Button04.set_cssclass("btn_WF_Txtsm");
                p.Button04.set_fittocontents("width");
                p.Button04.move("676","430","64","24",null,null);

                p.Button05.set_taborder("44");
                p.Button05.set_text("개인정보처리방침");
                p.Button05.set_cssclass("btn_WF_TxtsmB");
                p.Button05.set_fittocontents("width");
                p.Button05.move("634","437","124","24",null,null);

                p.Button06.set_taborder("45");
                p.Button06.set_text("저작권정책");
                p.Button06.set_cssclass("btn_WF_Txtsm");
                p.Button06.set_fittocontents("width");
                p.Button06.move("514","439","79","24",null,null);

                p.Button07.set_taborder("46");
                p.Button07.set_text("웹 접근성 품질인증 마크 획득");
                p.Button07.set_cssclass("btn_WF_Txtsm");
                p.Button07.set_fittocontents("width");
                p.Button07.move("388","432","206","24",null,null);

                p.Button08.set_taborder("2");
                p.Button08.set_text("related_site");
                p.Button08.set_cssclass("btn_BF_Relsite");
                p.Button08.set_flexgrow("1");
                p.Button08.move("1253","25","192","56",null,null);

                p.Button08_00.set_taborder("3");
                p.Button08_00.set_text("related_site");
                p.Button08_00.set_cssclass("btn_BF_Relsite");
                p.Button08_00.set_flexgrow("1");
                p.Button08_00.move("750","10","192","56",null,null);

                p.Button08_00_00.set_taborder("4");
                p.Button08_00_00.set_text("related_site");
                p.Button08_00_00.set_cssclass("btn_BF_Relsite");
                p.Button08_00_00.set_flexgrow("1");
                p.Button08_00_00.move("380","10","192","56",null,null);

                p.Button08_00_00_00.set_taborder("5");
                p.Button08_00_00_00.set_text("related_site");
                p.Button08_00_00_00.set_cssclass("btn_BF_RelsiteEnd");
                p.Button08_00_00_00.set_flexgrow("1");
                p.Button08_00_00_00.move("750","10","192","56",null,null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","",840,916,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel01.move("3.75%","Static02:0","92.5%","447","3.75%",null);

                p.Panel00.set_flexwrap("wrap");
                p.Panel00.move("3.75%","0","92.5%","224",null,null);

                p.Static00.set_text("");
                p.Static00.move("0","Panel00:0",null,null,"0","0");

                p.Static03.set_cssclass("sta_BF_RelsitwrapNON");
                p.Static03.move("0","0",null,"224","0",null);

                p.Static02.move("3.75%","Panel00:24",null,"48","3.75%",null);

                p.Static14.set_accessibilityenable("false");
                p.Static14.move("60","Panel07:0","33","24",null,null);

                p.Panel05.move("3.75%","Panel01:0","777","85","3.75%",null);

                p.Panel07.move("3.75%","Panel05:24",null,"40","3.75%",null);


                p.Button08_00_00_00.set_cssclass("btn_BF_RelsiteV");
                p.Button08_00_00_00.move("750","10","800","56",null,null);

                p.Button08_00_00.set_cssclass("btn_BF_RelsiteV");
                p.Button08_00_00.set_text("related_site");
                p.Button08_00_00.move("380","10","800","56",null,null);

                p.Button08_00.set_cssclass("btn_BF_RelsiteV");
                p.Button08_00.move("750","10","800","56",null,null);

                p.Button08.set_cssclass("btn_BF_RelsiteV");
                p.Button08.move("1253","25","800","56",null,null);
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static02.addEventHandler("onclick",this.Static02_onclick,this);
        };
        this.loadIncludeScript("Form_Bottom.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
