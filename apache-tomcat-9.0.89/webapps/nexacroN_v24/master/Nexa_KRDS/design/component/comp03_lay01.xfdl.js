(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("lay01");
            this.set_titletext("레이아웃 및 표현_구조화 목록");
            this.set_cssclass("btn_WF_Txt");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,2500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staH2","0","0","193","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("구조화 목록");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("staDivider","staH2:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staEtit","staDivider:15","15","220","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Structured list");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","85",null,"152","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("구조화 목록은 유사하거나 관련된 콘텐츠 집합을 표현하기 위한 형식으로 목록에 제공된 데이터에 대한 상세 정보 탐색 수단 또는 관련 기능 실행 수단으로 활용된다. 사용자가 콘텐츠를 효율적으로 탐색하고 다음 행동을 빠르게 결정할 수 있도록 목록 내 정보는 상세 페이지에서 제공되는 복잡한 콘텐츠 중 핵심적이거나 흥미를 끌 수 있는 정보를 논리적 흐름에 따라 조직화하여 명확한 위계 구조를 반영해 제공해야 한다.");
            obj.set_cssclass("sta_WF_Descript");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_01_00","0","Static00_01_00:80",null,"364","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("pnl_WF_Detailbox");
            obj.set_spacing("32px");
            obj.set_type("horizontal");
            obj.set_verticalgap("24");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_horizontalgap("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"CheckBox00_01_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel09_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_01_00","126","280","48","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("chk_WF_Large");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel09_00","185","1673","100%","298",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_verticalgap("16");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel04_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel11_00\"/><PanelItem id=\"PanelItem06\" componentid=\"Panel01_01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_00_00","640","367","100%","32",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_flexmainaxisalign("start");
            obj.set_flexcrossaxisalign("center");
            obj.set_spacing("0px");
            obj.set_verticalgap("24");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_04_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel05_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04_00","121","343","46","26",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("뱃지");
            obj.set_cssclass("sta_WF_BadgeLit01");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel05_00_00","60","24","175","32",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_horizontalgap("16");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Button01_03_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Button01_00_01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_03_00","185","340","96","32",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("공유하기");
            obj.set_cssclass("btn_WF_Share");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00_01_00","295","340","79","32",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("찜하기");
            obj.set_cssclass("btn_WF_Heart");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel11_00","185","1751","100%","185",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_fittocontents("height");
            obj.set_verticalgap("16");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel10_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02_01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel10_00","112","1126","100%","185",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_verticalgap("16");
            obj.set_spacing("0px 0px 16px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button06_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static19_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel06_01_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel00_01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button06_01_00","105","368","132","29",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("타이틀 영역");
            obj.set_cssclass("btn_WF_TitLink");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("link");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_01_00","185","1796","94.36%","52",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("간단한 설명이 들어가는 영역입니다. 최대 3줄까지 작성합니다. 간단한 설명이 들어가는 영역입니다. 간단한 설명이 들어가는 영역입니다. ");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_Para17RG");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel06_01_00","95","530","320","26",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_horizontalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static14_00_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static14_00_00_01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static14_00_02_00","95","530","34","26",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("기간");
            obj.set_cssclass("sta_WF_Txt19B");
            this.addChild(obj.name, obj);

            obj = new Static("Static14_00_00_01_00","42","530","223","26",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("2023.11.01-2024.04.30");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_01_00","103","579","100%","26",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_horizontalgap("8");
            obj.set_flexmainaxisalign("start");
            obj.set_flexwrap("wrap");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("12");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static14_04_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static15_02_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Static14_01_02_00\"/><PanelItem id=\"PanelItem04\" componentid=\"Static16_02_00\"/><PanelItem id=\"PanelItem05\" componentid=\"Static17_02_00\"/><PanelItem id=\"PanelItem06\" componentid=\"Static18_02_00\"/><PanelItem id=\"PanelItem07\" componentid=\"Static14_02_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static16_00_01_00\"/><PanelItem id=\"PanelItem12\" componentid=\"Static17_00_01_00\"/><PanelItem id=\"PanelItem11\" componentid=\"Static18_00_01_00\"/><PanelItem id=\"PanelItem09\" componentid=\"Static14_01_00_01_00\"/><PanelItem id=\"PanelItem08\" componentid=\"Static15_00_01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static14_04_00","103","579","74","26",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("Metadata");
            obj.set_cssclass("sta_WF_Para17RG");
            this.addChild(obj.name, obj);

            obj = new Static("Static15_02_00","200","591","1","16",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static14_01_02_00","10","10","74","26",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("Metadata");
            obj.set_cssclass("sta_WF_Para17RG");
            this.addChild(obj.name, obj);

            obj = new Static("Static16_02_00","276","588","1","16",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("Static16");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static17_02_00","301","584","74","26",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("Metadata");
            obj.set_cssclass("sta_WF_Para17RG");
            this.addChild(obj.name, obj);

            obj = new Static("Static18_02_00","376","583","1","16",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static14_02_01_00","20","20","74","26",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("Metadata");
            obj.set_cssclass("sta_WF_Para17RG");
            this.addChild(obj.name, obj);

            obj = new Static("Static16_00_01_00","183","15","1","16",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("Static16");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static17_00_01_00","192","10","74","26",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("Metadata");
            obj.set_cssclass("sta_WF_Para17RG");
            this.addChild(obj.name, obj);

            obj = new Static("Static18_00_01_00","274","15","1","16",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static14_01_00_01_00","101","10","74","26",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("Metadata");
            obj.set_cssclass("sta_WF_Para17RG");
            this.addChild(obj.name, obj);

            obj = new Static("Static15_00_01_00","92","15","1","16",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_01_00","126","666","320","80",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_horizontalgap("8");
            obj.set_flexmainaxisalign("end");
            obj.set_spacing("0");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_04_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00_00_02_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_04_00","262","666","91","48",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("신청하기");
            obj.set_cssclass("btn_WF_Custom");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_02_00","361","666","91","48",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("신청하기");
            obj.set_cssclass("btn_WF_Custom");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00","185","1983","100.00%","49",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_horizontalgap("8");
            obj.set_spacing("16px 0px 0px 0px");
            obj.set_cssclass("pnl_WF_Topline");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_00_00_06_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00_00_00_00_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Button00_00_00_01_01_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Button00_00_00_02_01_00\"/><PanelItem id=\"PanelItem04\" componentid=\"Button00_00_00_03_01_00\"/><PanelItem id=\"PanelItem05\" componentid=\"Button00_00_00_04_01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_06_00","103","804","60","32",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("#태그");
            obj.set_cssclass("btn_WF_Tagline");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_01_00","163","804","60","32",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("#태그");
            obj.set_cssclass("btn_WF_Tagline");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_01_01_00","223","804","60","32",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("#태그");
            obj.set_cssclass("btn_WF_Tagline");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_02_01_00","283","804","60","32",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("#태그");
            obj.set_cssclass("btn_WF_Tagline");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_03_01_00","343","804","60","32",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("#태그");
            obj.set_cssclass("btn_WF_Tagline");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_04_01_00","403","804","60","32",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("#태그");
            obj.set_cssclass("btn_WF_Tagline");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_01_01_00","0","Panel03_01_00:80",null,"260","0",null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_cssclass("pnl_WF_Detailbox");
            obj.set_spacing("32px");
            obj.set_type("horizontal");
            obj.set_verticalgap("24");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_horizontalgap("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"CheckBox00_01_01_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel09_01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_01_01_00","126","280","48","26",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_cssclass("chk_WF_Large");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel09_01_00","112","1655","774","194",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_type("vertical");
            obj.set_verticalgap("16");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel04_00_01_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Button06_01_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static19_01_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_01_01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_00_01_00","640","367","100%","32",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_flexmainaxisalign("start");
            obj.set_flexcrossaxisalign("center");
            obj.set_spacing("0px");
            obj.set_verticalgap("24");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_04_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel05_00_01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04_01_00","121","343","46","26",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("뱃지");
            obj.set_cssclass("sta_WF_BadgeLit01");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel05_00_01_00","60","24","175","32",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_horizontalgap("16");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Button01_03_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Button01_00_01_01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_03_01_00","185","340","96","32",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("공유하기");
            obj.set_cssclass("btn_WF_Share");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00_01_01_00","295","340","79","32",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("찜하기");
            obj.set_cssclass("btn_WF_Heart");
            this.addChild(obj.name, obj);

            obj = new Button("Button06_01_01_00","105","368","132","29",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("타이틀 영역");
            obj.set_cssclass("btn_WF_TitLink");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("link");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_01_01_00","571","484","100%","52",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("간단한 설명이 들어가는 영역입니다. 최대 3줄까지 작성합니다. 간단한 설명이 들어가는 영역입니다. 간단한 설명이 들어가는 영역입니다. ");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_Para17RG");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_01_01_00","112","1854","100.00%","26",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_horizontalgap("8");
            obj.set_flexmainaxisalign("start");
            obj.set_flexwrap("wrap");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("12");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static14_04_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static15_02_01_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Static14_01_02_01_00\"/><PanelItem id=\"PanelItem04\" componentid=\"Static16_02_01_00\"/><PanelItem id=\"PanelItem05\" componentid=\"Static17_02_01_00\"/><PanelItem id=\"PanelItem06\" componentid=\"Static18_02_01_00\"/><PanelItem id=\"PanelItem13\" componentid=\"Static00_06\"/><PanelItem id=\"PanelItem14\" componentid=\"Static14_00\"/><PanelItem id=\"PanelItem07\" componentid=\"Static14_02_01_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static16_00_01_01_00\"/><PanelItem id=\"PanelItem12\" componentid=\"Static17_00_01_01_00\"/><PanelItem id=\"PanelItem11\" componentid=\"Static18_00_01_01_00\"/><PanelItem id=\"PanelItem09\" componentid=\"Static14_01_00_01_01_00\"/><PanelItem id=\"PanelItem08\" componentid=\"Static15_00_01_01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static14_04_01_00","103","579","74","26",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("Metadata");
            obj.set_cssclass("sta_WF_Para17RG");
            this.addChild(obj.name, obj);

            obj = new Static("Static15_02_01_00","200","591","1","16",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static14_01_02_01_00","10","10","74","26",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("Metadata");
            obj.set_cssclass("sta_WF_Para17RG");
            this.addChild(obj.name, obj);

            obj = new Static("Static16_02_01_00","276","588","1","16",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("Static16");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static17_02_01_00","301","584","74","26",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("Metadata");
            obj.set_cssclass("sta_WF_Para17RG");
            this.addChild(obj.name, obj);

            obj = new Static("Static18_02_01_00","376","583","1","16",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_06","124","1940","74","26",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("Metadata");
            obj.set_cssclass("sta_WF_Para17RG");
            this.addChild(obj.name, obj);

            obj = new Static("Static14_00","223","1944","1","16",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("Static14");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static14_02_01_01_00","20","20","74","26",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("Metadata");
            obj.set_cssclass("sta_WF_Para17RG");
            this.addChild(obj.name, obj);

            obj = new Static("Static16_00_01_01_00","183","15","1","16",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("Static16");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static17_00_01_01_00","192","10","74","26",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("Metadata");
            obj.set_cssclass("sta_WF_Para17RG");
            this.addChild(obj.name, obj);

            obj = new Static("Static18_00_01_01_00","274","15","1","16",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static14_01_00_01_01_00","101","10","74","26",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("Metadata");
            obj.set_cssclass("sta_WF_Para17RG");
            this.addChild(obj.name, obj);

            obj = new Static("Static15_00_01_01_00","92","15","1","16",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel07_00_00_00","0","Panel03_01_01_00:80",null,"507","0",null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_type("vertical");
            obj.set_cssclass("pnl_WF_Detailbox");
            obj.set_flexcrossaxisalign("start");
            obj.set_spacing("39px");
            obj.set_verticalgap("16");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"ImageViewer01\"/><PanelItem id=\"PanelItem04\" componentid=\"Static00_05_00_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Static15_00_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Static19_00_00_00_00\"/><PanelItem id=\"PanelItem05\" componentid=\"Button00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01","554","282","100%","216",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_fittocontents("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_05_00_00_00","121","343","46","26",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("뱃지");
            obj.set_cssclass("sta_WF_BadgeLit01");
            this.addChild(obj.name, obj);

            obj = new Static("Static15_00_02","213","2361","120","29",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("타이틀 영역");
            obj.set_cssclass("sta_WF_Txt19B");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_00_00_00_00","571","484","100%","90",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("간단한 설명이 들어가는 영역입니다. 최대 3줄까지 작성합니다. 간단한 설명이 들어가는 영역입니다. 간단한 설명이 들어가는 영역입니다. ");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_Para17RG");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","111","2517","120","34",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("바로가기");
            obj.set_cssclass("btn_WF_CardMore");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03",null,"Panel07_00_00_00:175","470","32","0",null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_horizontalgap("12");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel05\"/><PanelItem id=\"PanelItem02\" componentid=\"Static16_03\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel06\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel05","0","-1","176","34",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_horizontalgap("12");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static17\"/><PanelItem id=\"PanelItem01\" componentid=\"Combo00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","779","2739","102","34",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("목록 표시 개수");
            obj.set_cssclass("sta_WF_Txt17B");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","893","2742","64","28",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_cssclass("cbo_WF_TxtCom");
            obj.set_buttonsize("20 20");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Combo00_innerdataset = new nexacro.NormalDataset("Combo00_innerdataset", obj);
            Combo00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "4개"},{"codecolumn" : "1","datacolumn" : "8개"},{"codecolumn" : "2","datacolumn" : "12개"},{"codecolumn" : "3","datacolumn" : "16개"}]});
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_text("12");
            obj.set_value("2");
            obj.set_index("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static16_03","962","2747","1","16",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("Static16");
            obj.set_cssclass("sta_WF_BtnDivider");
            obj.set_visible("true");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel06","196","-1","260","34",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_horizontalgap("12");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static17_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static17_00","975","2738","61","34",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_text("정렬기준");
            obj.set_cssclass("sta_WF_Txt17B");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02","1048","2740","190","34",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_horizontalgap("8");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button06\"/><PanelItem id=\"PanelItem01\" componentid=\"Button06_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Button06_02_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button06","1048","2740","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_text("관련도순");
            obj.set_cssclass("btn_WF_TxtLineS");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("Button06_02","1124","2740","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_text("최신순");
            obj.set_cssclass("btn_WF_TxtLine");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("Button06_02_00","1183","2740","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_text("인기순");
            obj.set_cssclass("btn_WF_TxtLine");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","Panel07_00_00_00:175","400","32",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_type("horizontal");
            obj.set_flexmainaxisalign("start");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("26");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"CheckBox00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","99","2742","113","26",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_text("전체선택");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","292","2739","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_flexcrossaxisalign("center");
            obj.set_horizontalgap("8");
            obj.set_flexmainaxisalign("start");
            obj.set_fittocontents("width");
            obj._setContents("<Contents><PanelItem id=\"PanelItem04\" componentid=\"Button01_00_03\"/><PanelItem id=\"PanelItem05\" componentid=\"Static16_00_02\"/><PanelItem id=\"PanelItem06\" componentid=\"Button01_00_03_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00_03","525","2739","96","32",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_text("핵심버튼");
            obj.set_cssclass("btn_WF_Download");
            this.addChild(obj.name, obj);

            obj = new Static("Static16_00_02","629","2747","1","16",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_text("Static16");
            obj.set_cssclass("sta_WF_BtnDivider");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00_03_00","637","2739","96","32",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_text("핵심버튼");
            obj.set_cssclass("btn_WF_Download");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04","0","Panel01:29",null,"421","0",null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_horizontalgap("24");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("16");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel03_01_01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel03_01_01_01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_01_01_01","99","2803","384","421",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_cssclass("pnl_WF_Detailbox");
            obj.set_spacing("32px");
            obj.set_type("vertical");
            obj.set_verticalgap("24");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_horizontalgap("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"CheckBox00_01_01_01\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel09_01_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_01_01_01","126","280","48","26",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_cssclass("chk_WF_Large");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel09_01_01","112","1655","100%","305",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_type("vertical");
            obj.set_verticalgap("16");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel04_00_01_01\"/><PanelItem id=\"PanelItem03\" componentid=\"Button06_01_01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Static19_01_01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_01_01_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_00_01_01","640","367","100%","32",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_flexmainaxisalign("start");
            obj.set_flexcrossaxisalign("center");
            obj.set_spacing("0px");
            obj.set_verticalgap("24");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_04_01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel05_00_01_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04_01_01","121","343","46","26",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_text("뱃지");
            obj.set_cssclass("sta_WF_BadgeLit01");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel05_00_01_01","60","24","175","32",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_horizontalgap("16");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Button01_03_01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Button01_00_01_01_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_03_01_01","185","340","96","32",null,null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_text("공유하기");
            obj.set_cssclass("btn_WF_Share");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00_01_01_01","295","340","79","32",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_text("찜하기");
            obj.set_cssclass("btn_WF_Heart");
            this.addChild(obj.name, obj);

            obj = new Button("Button06_01_01_01","105","368","132","29",null,null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_text("타이틀 영역");
            obj.set_cssclass("btn_WF_TitLink");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_01_01_01","571","484","100%","90",null,null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_text("간단한 설명이 들어가는 영역입니다. 최대 3줄까지 작성합니다. 간단한 설명이 들어가는 영역입니다. 간단한 설명이 들어가는 영역입니다. ");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_Para17RG");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_01_01_01","112","1854","100.00%","106",null,null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_horizontalgap("8");
            obj.set_flexmainaxisalign("start");
            obj.set_flexwrap("wrap");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("12");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static14_04_01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Static15_02_01_01\"/><PanelItem id=\"PanelItem03\" componentid=\"Static14_01_02_01_01\"/><PanelItem id=\"PanelItem04\" componentid=\"Static16_02_01_01\"/><PanelItem id=\"PanelItem05\" componentid=\"Static17_02_01_01\"/><PanelItem id=\"PanelItem06\" componentid=\"Static18_02_01_01\"/><PanelItem id=\"PanelItem13\" componentid=\"Static00_03\"/><PanelItem id=\"PanelItem14\" componentid=\"Static14_01\"/><PanelItem id=\"PanelItem07\" componentid=\"Static14_02_01_01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Static16_00_01_01_01\"/><PanelItem id=\"PanelItem12\" componentid=\"Static17_00_01_01_01\"/><PanelItem id=\"PanelItem11\" componentid=\"Static18_00_01_01_01\"/><PanelItem id=\"PanelItem09\" componentid=\"Static14_01_00_01_01_01\"/><PanelItem id=\"PanelItem08\" componentid=\"Static15_00_01_01_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static14_04_01_01","103","579","74","26",null,null,null,null,null,null,this);
            obj.set_taborder("102");
            obj.set_text("Metadata");
            obj.set_cssclass("sta_WF_Para17RG");
            this.addChild(obj.name, obj);

            obj = new Static("Static15_02_01_01","200","591","1","16",null,null,null,null,null,null,this);
            obj.set_taborder("103");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static14_01_02_01_01","10","10","74","26",null,null,null,null,null,null,this);
            obj.set_taborder("104");
            obj.set_text("Metadata");
            obj.set_cssclass("sta_WF_Para17RG");
            this.addChild(obj.name, obj);

            obj = new Static("Static16_02_01_01","276","588","1","16",null,null,null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_text("Static16");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static17_02_01_01","301","584","74","26",null,null,null,null,null,null,this);
            obj.set_taborder("106");
            obj.set_text("Metadata");
            obj.set_cssclass("sta_WF_Para17RG");
            this.addChild(obj.name, obj);

            obj = new Static("Static18_02_01_01","376","583","1","16",null,null,null,null,null,null,this);
            obj.set_taborder("107");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03","124","1940","74","26",null,null,null,null,null,null,this);
            obj.set_taborder("108");
            obj.set_text("Metadata");
            obj.set_cssclass("sta_WF_Para17RG");
            this.addChild(obj.name, obj);

            obj = new Static("Static14_01","223","1944","1","16",null,null,null,null,null,null,this);
            obj.set_taborder("109");
            obj.set_text("Static14");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static14_02_01_01_01","20","20","74","26",null,null,null,null,null,null,this);
            obj.set_taborder("110");
            obj.set_text("Metadata");
            obj.set_cssclass("sta_WF_Para17RG");
            this.addChild(obj.name, obj);

            obj = new Static("Static16_00_01_01_01","183","15","1","16",null,null,null,null,null,null,this);
            obj.set_taborder("111");
            obj.set_text("Static16");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static17_00_01_01_01","192","10","74","26",null,null,null,null,null,null,this);
            obj.set_taborder("112");
            obj.set_text("Metadata");
            obj.set_cssclass("sta_WF_Para17RG");
            this.addChild(obj.name, obj);

            obj = new Static("Static18_00_01_01_01","274","15","1","16",null,null,null,null,null,null,this);
            obj.set_taborder("113");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static14_01_00_01_01_01","101","10","74","26",null,null,null,null,null,null,this);
            obj.set_taborder("114");
            obj.set_text("Metadata");
            obj.set_cssclass("sta_WF_Para17RG");
            this.addChild(obj.name, obj);

            obj = new Static("Static15_00_01_01_01","92","15","1","16",null,null,null,null,null,null,this);
            obj.set_taborder("115");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_01_01_01_00","500","2803","384","421",null,null,null,null,null,null,this);
            obj.set_taborder("116");
            obj.set_cssclass("pnl_WF_Detailbox");
            obj.set_spacing("32px");
            obj.set_type("vertical");
            obj.set_verticalgap("24");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_horizontalgap("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"CheckBox00_01_01_01_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel09_01_01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_01_01_01_00","126","280","48","26",null,null,null,null,null,null,this);
            obj.set_taborder("117");
            obj.set_cssclass("chk_WF_Large");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel09_01_01_00","112","1655","100%","305",null,null,null,null,null,null,this);
            obj.set_taborder("118");
            obj.set_type("vertical");
            obj.set_verticalgap("16");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel04_00_01_01_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Button06_01_01_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static19_01_01_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_01_01_01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_00_01_01_00","640","367","100%","32",null,null,null,null,null,null,this);
            obj.set_taborder("119");
            obj.set_flexmainaxisalign("start");
            obj.set_flexcrossaxisalign("center");
            obj.set_spacing("0px");
            obj.set_verticalgap("24");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_04_01_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel05_00_01_01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04_01_01_00","121","343","46","26",null,null,null,null,null,null,this);
            obj.set_taborder("120");
            obj.set_text("뱃지");
            obj.set_cssclass("sta_WF_BadgeLit01");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel05_00_01_01_00","60","24","175","32",null,null,null,null,null,null,this);
            obj.set_taborder("121");
            obj.set_horizontalgap("16");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Button01_03_01_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Button01_00_01_01_01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_03_01_01_00","185","340","96","32",null,null,null,null,null,null,this);
            obj.set_taborder("122");
            obj.set_text("공유하기");
            obj.set_cssclass("btn_WF_Share");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00_01_01_01_00","295","340","79","32",null,null,null,null,null,null,this);
            obj.set_taborder("123");
            obj.set_text("찜하기");
            obj.set_cssclass("btn_WF_Heart");
            this.addChild(obj.name, obj);

            obj = new Button("Button06_01_01_01_00","105","368","132","29",null,null,null,null,null,null,this);
            obj.set_taborder("124");
            obj.set_text("타이틀 영역");
            obj.set_cssclass("btn_WF_TitLink");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_01_01_01_00","571","484","100%","90",null,null,null,null,null,null,this);
            obj.set_taborder("125");
            obj.set_text("간단한 설명이 들어가는 영역입니다. 최대 3줄까지 작성합니다. 간단한 설명이 들어가는 영역입니다. 간단한 설명이 들어가는 영역입니다. ");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_Para17RG");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_01_01_01_00","112","1854","100.00%","106",null,null,null,null,null,null,this);
            obj.set_taborder("126");
            obj.set_horizontalgap("8");
            obj.set_flexmainaxisalign("start");
            obj.set_flexwrap("wrap");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("12");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static14_04_01_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static15_02_01_01_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Static14_01_02_01_01_00\"/><PanelItem id=\"PanelItem04\" componentid=\"Static16_02_01_01_00\"/><PanelItem id=\"PanelItem05\" componentid=\"Static17_02_01_01_00\"/><PanelItem id=\"PanelItem06\" componentid=\"Static18_02_01_01_00\"/><PanelItem id=\"PanelItem13\" componentid=\"Static00_03_00\"/><PanelItem id=\"PanelItem14\" componentid=\"Static14_01_00\"/><PanelItem id=\"PanelItem07\" componentid=\"Static14_02_01_01_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static16_00_01_01_01_00\"/><PanelItem id=\"PanelItem12\" componentid=\"Static17_00_01_01_01_00\"/><PanelItem id=\"PanelItem11\" componentid=\"Static18_00_01_01_01_00\"/><PanelItem id=\"PanelItem09\" componentid=\"Static14_01_00_01_01_01_00\"/><PanelItem id=\"PanelItem08\" componentid=\"Static15_00_01_01_01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static14_04_01_01_00","103","579","74","26",null,null,null,null,null,null,this);
            obj.set_taborder("127");
            obj.set_text("Metadata");
            obj.set_cssclass("sta_WF_Para17RG");
            this.addChild(obj.name, obj);

            obj = new Static("Static15_02_01_01_00","200","591","1","16",null,null,null,null,null,null,this);
            obj.set_taborder("128");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static14_01_02_01_01_00","10","10","74","26",null,null,null,null,null,null,this);
            obj.set_taborder("129");
            obj.set_text("Metadata");
            obj.set_cssclass("sta_WF_Para17RG");
            this.addChild(obj.name, obj);

            obj = new Static("Static16_02_01_01_00","276","588","1","16",null,null,null,null,null,null,this);
            obj.set_taborder("130");
            obj.set_text("Static16");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static17_02_01_01_00","301","584","74","26",null,null,null,null,null,null,this);
            obj.set_taborder("131");
            obj.set_text("Metadata");
            obj.set_cssclass("sta_WF_Para17RG");
            this.addChild(obj.name, obj);

            obj = new Static("Static18_02_01_01_00","376","583","1","16",null,null,null,null,null,null,this);
            obj.set_taborder("132");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00","124","1940","74","26",null,null,null,null,null,null,this);
            obj.set_taborder("133");
            obj.set_text("Metadata");
            obj.set_cssclass("sta_WF_Para17RG");
            this.addChild(obj.name, obj);

            obj = new Static("Static14_01_00","223","1944","1","16",null,null,null,null,null,null,this);
            obj.set_taborder("134");
            obj.set_text("Static14");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static14_02_01_01_01_00","20","20","74","26",null,null,null,null,null,null,this);
            obj.set_taborder("135");
            obj.set_text("Metadata");
            obj.set_cssclass("sta_WF_Para17RG");
            this.addChild(obj.name, obj);

            obj = new Static("Static16_00_01_01_01_00","183","15","1","16",null,null,null,null,null,null,this);
            obj.set_taborder("136");
            obj.set_text("Static16");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static17_00_01_01_01_00","192","10","74","26",null,null,null,null,null,null,this);
            obj.set_taborder("137");
            obj.set_text("Metadata");
            obj.set_cssclass("sta_WF_Para17RG");
            this.addChild(obj.name, obj);

            obj = new Static("Static18_00_01_01_01_00","274","15","1","16",null,null,null,null,null,null,this);
            obj.set_taborder("138");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static14_01_00_01_01_01_00","101","10","74","26",null,null,null,null,null,null,this);
            obj.set_taborder("139");
            obj.set_text("Metadata");
            obj.set_cssclass("sta_WF_Para17RG");
            this.addChild(obj.name, obj);

            obj = new Static("Static15_00_01_01_01_00","92","15","1","16",null,null,null,null,null,null,this);
            obj.set_taborder("140");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div06","0","Panel04:40",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("141");
            obj.set_text("Div06");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0","0","62","40",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("0");
            obj.set_text("이전");
            obj.set_cssclass("btn_WF_PgPrev");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);

            obj = new Button("Button01","70","0","40","40",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("1");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_PgNumS");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);

            obj = new Button("Button01_00","118","0","40","40",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("2");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_PgNum");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);

            obj = new Button("Button01_01","166","0","40","40",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("3");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_PgNum");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);

            obj = new Button("Button01_02","214","0","40","40",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("4");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_PgNum");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);

            obj = new Button("Button01_03","262","0","40","40",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("5");
            obj.set_text("5");
            obj.set_cssclass("btn_WF_PgNum");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);

            obj = new Button("Button01_04","310","0","40","40",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("6");
            obj.set_text("6");
            obj.set_cssclass("btn_WF_PgNum");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);

            obj = new Button("Button01_05","358","0","40","40",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("7");
            obj.set_text("7");
            obj.set_cssclass("btn_WF_PgNum");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);

            obj = new Button("Button01_06","406","0","40","40",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("8");
            obj.set_text("8");
            obj.set_cssclass("btn_WF_PgNum");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);

            obj = new Button("Button01_07","454","0","40","40",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("9");
            obj.set_text("9");
            obj.set_cssclass("btn_WF_PgNum");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static00","502","0","40","40",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_Ellipsis");
            obj.set_visible("true");
            obj.set_accessibilitylabel("줄임");
            this.Div06.addChild(obj.name, obj);

            obj = new Button("Button01_07_01","550","0","40","40",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("11");
            obj.set_text("99");
            obj.set_cssclass("btn_WF_PgNum");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);

            obj = new Button("Button00_00","598","0","62","40",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("12");
            obj.set_text("다음");
            obj.set_cssclass("btn_WF_PgNext");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div06.form
            obj = new Layout("default","",0,0,this.Div06.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00.set_taborder("0");
                p.Button00.set_text("이전");
                p.Button00.set_cssclass("btn_WF_PgPrev");
                p.Button00.set_visible("true");
                p.Button00.move("0","0","62","40",null,null);

                p.Button01.set_taborder("1");
                p.Button01.set_text("1");
                p.Button01.set_cssclass("btn_WF_PgNumS");
                p.Button01.set_visible("true");
                p.Button01.move("70","0","40","40",null,null);

                p.Button01_00.set_taborder("2");
                p.Button01_00.set_text("2");
                p.Button01_00.set_cssclass("btn_WF_PgNum");
                p.Button01_00.set_visible("true");
                p.Button01_00.move("118","0","40","40",null,null);

                p.Button01_01.set_taborder("3");
                p.Button01_01.set_text("3");
                p.Button01_01.set_cssclass("btn_WF_PgNum");
                p.Button01_01.set_visible("true");
                p.Button01_01.move("166","0","40","40",null,null);

                p.Button01_02.set_taborder("4");
                p.Button01_02.set_text("4");
                p.Button01_02.set_cssclass("btn_WF_PgNum");
                p.Button01_02.set_visible("true");
                p.Button01_02.move("214","0","40","40",null,null);

                p.Button01_03.set_taborder("5");
                p.Button01_03.set_text("5");
                p.Button01_03.set_cssclass("btn_WF_PgNum");
                p.Button01_03.set_visible("true");
                p.Button01_03.move("262","0","40","40",null,null);

                p.Button01_04.set_taborder("6");
                p.Button01_04.set_text("6");
                p.Button01_04.set_cssclass("btn_WF_PgNum");
                p.Button01_04.set_visible("true");
                p.Button01_04.move("310","0","40","40",null,null);

                p.Button01_05.set_taborder("7");
                p.Button01_05.set_text("7");
                p.Button01_05.set_cssclass("btn_WF_PgNum");
                p.Button01_05.set_visible("true");
                p.Button01_05.move("358","0","40","40",null,null);

                p.Button01_06.set_taborder("8");
                p.Button01_06.set_text("8");
                p.Button01_06.set_cssclass("btn_WF_PgNum");
                p.Button01_06.set_visible("true");
                p.Button01_06.move("406","0","40","40",null,null);

                p.Button01_07.set_taborder("9");
                p.Button01_07.set_text("9");
                p.Button01_07.set_cssclass("btn_WF_PgNum");
                p.Button01_07.set_visible("true");
                p.Button01_07.move("454","0","40","40",null,null);

                p.Static00.set_taborder("10");
                p.Static00.set_cssclass("sta_WF_Ellipsis");
                p.Static00.set_visible("true");
                p.Static00.set_accessibilitylabel("줄임");
                p.Static00.move("502","0","40","40",null,null);

                p.Button01_07_01.set_taborder("11");
                p.Button01_07_01.set_text("99");
                p.Button01_07_01.set_cssclass("btn_WF_PgNum");
                p.Button01_07_01.set_visible("true");
                p.Button01_07_01.move("550","0","40","40",null,null);

                p.Button00_00.set_taborder("12");
                p.Button00_00.set_text("다음");
                p.Button00_00.set_cssclass("btn_WF_PgNext");
                p.Button00_00.set_visible("true");
                p.Button00_00.move("598","0","62","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("8");
            obj.set_flexmainaxisalign("center");
            this.Div06.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div06.form
            obj = new Layout("Layout0","",0,0,this.Div06.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button01_07.set_visible("false");

                p.Button01_06.set_visible("false");

                p.Button01_05.set_visible("false");

                p.Button01_04.set_visible("false");
            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("8");
            obj.set_flexmainaxisalign("center");
            this.Div06.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",888,2500,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("레이아웃 및 표현_구조화 목록");
                p.set_cssclass("btn_WF_Txt");

                p.staH2.set_taborder("0");
                p.staH2.set_text("구조화 목록");
                p.staH2.set_cssclass("sta_WF_H2_pc");
                p.staH2.set_fittocontents("width");
                p.staH2.set_accessibilityrole("heading2");
                p.staH2.move("0","0","193","60",null,null);

                p.staDivider.set_taborder("1");
                p.staDivider.set_cssclass("sta_WF_line");
                p.staDivider.set_accessibilityenable("false");
                p.staDivider.move("staH2:15","20","1","21",null,null);

                p.staEtit.set_taborder("2");
                p.staEtit.set_text("Structured list");
                p.staEtit.set_cssclass("sta_WF_ParaH4_pc");
                p.staEtit.move("staDivider:15","15","220","30",null,null);

                p.Static00_01_00.set_taborder("3");
                p.Static00_01_00.set_text("구조화 목록은 유사하거나 관련된 콘텐츠 집합을 표현하기 위한 형식으로 목록에 제공된 데이터에 대한 상세 정보 탐색 수단 또는 관련 기능 실행 수단으로 활용된다. 사용자가 콘텐츠를 효율적으로 탐색하고 다음 행동을 빠르게 결정할 수 있도록 목록 내 정보는 상세 페이지에서 제공되는 복잡한 콘텐츠 중 핵심적이거나 흥미를 끌 수 있는 정보를 논리적 흐름에 따라 조직화하여 명확한 위계 구조를 반영해 제공해야 한다.");
                p.Static00_01_00.set_cssclass("sta_WF_Descript");
                p.Static00_01_00.set_fittocontents("height");
                p.Static00_01_00.move("0","85",null,"152","0",null);

                p.Panel03_01_00.set_taborder("4");
                p.Panel03_01_00.set_cssclass("pnl_WF_Detailbox");
                p.Panel03_01_00.set_spacing("32px");
                p.Panel03_01_00.set_type("horizontal");
                p.Panel03_01_00.set_verticalgap("24");
                p.Panel03_01_00.set_flexgrow("1");
                p.Panel03_01_00.set_fittocontents("height");
                p.Panel03_01_00.set_horizontalgap("0");
                p.Panel03_01_00.move("0","Static00_01_00:80",null,"364","0",null);

                p.CheckBox00_01_00.set_taborder("5");
                p.CheckBox00_01_00.set_cssclass("chk_WF_Large");
                p.CheckBox00_01_00.move("126","280","48","26",null,null);

                p.Panel09_00.set_taborder("6");
                p.Panel09_00.set_type("vertical");
                p.Panel09_00.set_verticalgap("16");
                p.Panel09_00.set_fittocontents("height");
                p.Panel09_00.set_flexgrow("1");
                p.Panel09_00.move("185","1673","100%","298",null,null);

                p.Panel04_00_00.set_taborder("7");
                p.Panel04_00_00.set_flexmainaxisalign("start");
                p.Panel04_00_00.set_flexcrossaxisalign("center");
                p.Panel04_00_00.set_spacing("0px");
                p.Panel04_00_00.set_verticalgap("24");
                p.Panel04_00_00.set_fittocontents("height");
                p.Panel04_00_00.move("640","367","100%","32",null,null);

                p.Static00_04_00.set_taborder("8");
                p.Static00_04_00.set_text("뱃지");
                p.Static00_04_00.set_cssclass("sta_WF_BadgeLit01");
                p.Static00_04_00.move("121","343","46","26",null,null);

                p.Panel05_00_00.set_taborder("9");
                p.Panel05_00_00.set_horizontalgap("16");
                p.Panel05_00_00.set_flexmainaxisalign("end");
                p.Panel05_00_00.set_flexgrow("1");
                p.Panel05_00_00.set_flexcrossaxisalign("start");
                p.Panel05_00_00.move("60","24","175","32",null,null);

                p.Button01_03_00.set_taborder("10");
                p.Button01_03_00.set_text("공유하기");
                p.Button01_03_00.set_cssclass("btn_WF_Share");
                p.Button01_03_00.move("185","340","96","32",null,null);

                p.Button01_00_01_00.set_taborder("11");
                p.Button01_00_01_00.set_text("찜하기");
                p.Button01_00_01_00.set_cssclass("btn_WF_Heart");
                p.Button01_00_01_00.move("295","340","79","32",null,null);

                p.Panel11_00.set_taborder("12");
                p.Panel11_00.set_fittocontents("height");
                p.Panel11_00.set_verticalgap("16");
                p.Panel11_00.move("185","1751","100%","185",null,null);

                p.Panel10_00.set_taborder("13");
                p.Panel10_00.set_type("vertical");
                p.Panel10_00.set_fittocontents("height");
                p.Panel10_00.set_verticalgap("16");
                p.Panel10_00.set_spacing("0px 0px 16px 0px");
                p.Panel10_00.move("112","1126","100%","185",null,null);

                p.Button06_01_00.set_taborder("14");
                p.Button06_01_00.set_text("타이틀 영역");
                p.Button06_01_00.set_cssclass("btn_WF_TitLink");
                p.Button06_01_00.set_fittocontents("width");
                p.Button06_01_00.set_accessibilityrole("link");
                p.Button06_01_00.move("105","368","132","29",null,null);

                p.Static19_01_00.set_taborder("15");
                p.Static19_01_00.set_text("간단한 설명이 들어가는 영역입니다. 최대 3줄까지 작성합니다. 간단한 설명이 들어가는 영역입니다. 간단한 설명이 들어가는 영역입니다. ");
                p.Static19_01_00.set_fittocontents("height");
                p.Static19_01_00.set_cssclass("sta_WF_Para17RG");
                p.Static19_01_00.move("185","1796","94.36%","52",null,null);

                p.Panel06_01_00.set_taborder("16");
                p.Panel06_01_00.set_horizontalgap("8");
                p.Panel06_01_00.move("95","530","320","26",null,null);

                p.Static14_00_02_00.set_taborder("17");
                p.Static14_00_02_00.set_text("기간");
                p.Static14_00_02_00.set_cssclass("sta_WF_Txt19B");
                p.Static14_00_02_00.move("95","530","34","26",null,null);

                p.Static14_00_00_01_00.set_taborder("18");
                p.Static14_00_00_01_00.set_text("2023.11.01-2024.04.30");
                p.Static14_00_00_01_00.move("42","530","223","26",null,null);

                p.Panel00_01_00.set_taborder("19");
                p.Panel00_01_00.set_horizontalgap("8");
                p.Panel00_01_00.set_flexmainaxisalign("start");
                p.Panel00_01_00.set_flexwrap("wrap");
                p.Panel00_01_00.set_flexcrossaxisalign("center");
                p.Panel00_01_00.set_verticalgap("12");
                p.Panel00_01_00.set_fittocontents("height");
                p.Panel00_01_00.move("103","579","100%","26",null,null);

                p.Static14_04_00.set_taborder("20");
                p.Static14_04_00.set_text("Metadata");
                p.Static14_04_00.set_cssclass("sta_WF_Para17RG");
                p.Static14_04_00.move("103","579","74","26",null,null);

                p.Static15_02_00.set_taborder("21");
                p.Static15_02_00.set_cssclass("sta_WF_line");
                p.Static15_02_00.set_accessibilityenable("false");
                p.Static15_02_00.move("200","591","1","16",null,null);

                p.Static14_01_02_00.set_taborder("22");
                p.Static14_01_02_00.set_text("Metadata");
                p.Static14_01_02_00.set_cssclass("sta_WF_Para17RG");
                p.Static14_01_02_00.move("10","10","74","26",null,null);

                p.Static16_02_00.set_taborder("23");
                p.Static16_02_00.set_text("Static16");
                p.Static16_02_00.set_cssclass("sta_WF_line");
                p.Static16_02_00.set_accessibilityenable("false");
                p.Static16_02_00.move("276","588","1","16",null,null);

                p.Static17_02_00.set_taborder("24");
                p.Static17_02_00.set_text("Metadata");
                p.Static17_02_00.set_cssclass("sta_WF_Para17RG");
                p.Static17_02_00.move("301","584","74","26",null,null);

                p.Static18_02_00.set_taborder("25");
                p.Static18_02_00.set_cssclass("sta_WF_line");
                p.Static18_02_00.set_accessibilityenable("false");
                p.Static18_02_00.move("376","583","1","16",null,null);

                p.Static14_02_01_00.set_taborder("26");
                p.Static14_02_01_00.set_text("Metadata");
                p.Static14_02_01_00.set_cssclass("sta_WF_Para17RG");
                p.Static14_02_01_00.move("20","20","74","26",null,null);

                p.Static16_00_01_00.set_taborder("27");
                p.Static16_00_01_00.set_text("Static16");
                p.Static16_00_01_00.set_cssclass("sta_WF_line");
                p.Static16_00_01_00.set_accessibilityenable("false");
                p.Static16_00_01_00.move("183","15","1","16",null,null);

                p.Static17_00_01_00.set_taborder("28");
                p.Static17_00_01_00.set_text("Metadata");
                p.Static17_00_01_00.set_cssclass("sta_WF_Para17RG");
                p.Static17_00_01_00.move("192","10","74","26",null,null);

                p.Static18_00_01_00.set_taborder("29");
                p.Static18_00_01_00.set_cssclass("sta_WF_line");
                p.Static18_00_01_00.set_accessibilityenable("false");
                p.Static18_00_01_00.move("274","15","1","16",null,null);

                p.Static14_01_00_01_00.set_taborder("30");
                p.Static14_01_00_01_00.set_text("Metadata");
                p.Static14_01_00_01_00.set_cssclass("sta_WF_Para17RG");
                p.Static14_01_00_01_00.move("101","10","74","26",null,null);

                p.Static15_00_01_00.set_taborder("31");
                p.Static15_00_01_00.set_cssclass("sta_WF_line");
                p.Static15_00_01_00.set_accessibilityenable("false");
                p.Static15_00_01_00.move("92","15","1","16",null,null);

                p.Panel02_01_00.set_taborder("32");
                p.Panel02_01_00.set_horizontalgap("8");
                p.Panel02_01_00.set_flexmainaxisalign("end");
                p.Panel02_01_00.set_spacing("0");
                p.Panel02_01_00.set_fittocontents("height");
                p.Panel02_01_00.set_flexgrow("1");
                p.Panel02_01_00.move("126","666","320","80",null,null);

                p.Button00_04_00.set_taborder("33");
                p.Button00_04_00.set_text("신청하기");
                p.Button00_04_00.set_cssclass("btn_WF_Custom");
                p.Button00_04_00.move("262","666","91","48",null,null);

                p.Button00_00_02_00.set_taborder("34");
                p.Button00_00_02_00.set_text("신청하기");
                p.Button00_00_02_00.set_cssclass("btn_WF_Custom");
                p.Button00_00_02_00.move("361","666","91","48",null,null);

                p.Panel01_01_00.set_taborder("35");
                p.Panel01_01_00.set_horizontalgap("8");
                p.Panel01_01_00.set_spacing("16px 0px 0px 0px");
                p.Panel01_01_00.set_cssclass("pnl_WF_Topline");
                p.Panel01_01_00.set_verticalgap("8");
                p.Panel01_01_00.set_flexwrap("wrap");
                p.Panel01_01_00.set_fittocontents("height");
                p.Panel01_01_00.move("185","1983","100.00%","49",null,null);

                p.Button00_00_00_06_00.set_taborder("36");
                p.Button00_00_00_06_00.set_text("#태그");
                p.Button00_00_00_06_00.set_cssclass("btn_WF_Tagline");
                p.Button00_00_00_06_00.move("103","804","60","32",null,null);

                p.Button00_00_00_00_01_00.set_taborder("37");
                p.Button00_00_00_00_01_00.set_text("#태그");
                p.Button00_00_00_00_01_00.set_cssclass("btn_WF_Tagline");
                p.Button00_00_00_00_01_00.move("163","804","60","32",null,null);

                p.Button00_00_00_01_01_00.set_taborder("38");
                p.Button00_00_00_01_01_00.set_text("#태그");
                p.Button00_00_00_01_01_00.set_cssclass("btn_WF_Tagline");
                p.Button00_00_00_01_01_00.move("223","804","60","32",null,null);

                p.Button00_00_00_02_01_00.set_taborder("39");
                p.Button00_00_00_02_01_00.set_text("#태그");
                p.Button00_00_00_02_01_00.set_cssclass("btn_WF_Tagline");
                p.Button00_00_00_02_01_00.move("283","804","60","32",null,null);

                p.Button00_00_00_03_01_00.set_taborder("40");
                p.Button00_00_00_03_01_00.set_text("#태그");
                p.Button00_00_00_03_01_00.set_cssclass("btn_WF_Tagline");
                p.Button00_00_00_03_01_00.move("343","804","60","32",null,null);

                p.Button00_00_00_04_01_00.set_taborder("41");
                p.Button00_00_00_04_01_00.set_text("#태그");
                p.Button00_00_00_04_01_00.set_cssclass("btn_WF_Tagline");
                p.Button00_00_00_04_01_00.move("403","804","60","32",null,null);

                p.Panel03_01_01_00.set_taborder("42");
                p.Panel03_01_01_00.set_cssclass("pnl_WF_Detailbox");
                p.Panel03_01_01_00.set_spacing("32px");
                p.Panel03_01_01_00.set_type("horizontal");
                p.Panel03_01_01_00.set_verticalgap("24");
                p.Panel03_01_01_00.set_flexgrow("1");
                p.Panel03_01_01_00.set_fittocontents("height");
                p.Panel03_01_01_00.set_horizontalgap("0");
                p.Panel03_01_01_00.move("0","Panel03_01_00:80",null,"260","0",null);

                p.CheckBox00_01_01_00.set_taborder("43");
                p.CheckBox00_01_01_00.set_cssclass("chk_WF_Large");
                p.CheckBox00_01_01_00.move("126","280","48","26",null,null);

                p.Panel09_01_00.set_taborder("44");
                p.Panel09_01_00.set_type("vertical");
                p.Panel09_01_00.set_verticalgap("16");
                p.Panel09_01_00.set_fittocontents("height");
                p.Panel09_01_00.set_flexgrow("1");
                p.Panel09_01_00.move("112","1655","774","194",null,null);

                p.Panel04_00_01_00.set_taborder("45");
                p.Panel04_00_01_00.set_flexmainaxisalign("start");
                p.Panel04_00_01_00.set_flexcrossaxisalign("center");
                p.Panel04_00_01_00.set_spacing("0px");
                p.Panel04_00_01_00.set_verticalgap("24");
                p.Panel04_00_01_00.set_fittocontents("height");
                p.Panel04_00_01_00.set_flexgrow("1");
                p.Panel04_00_01_00.move("640","367","100%","32",null,null);

                p.Static00_04_01_00.set_taborder("46");
                p.Static00_04_01_00.set_text("뱃지");
                p.Static00_04_01_00.set_cssclass("sta_WF_BadgeLit01");
                p.Static00_04_01_00.move("121","343","46","26",null,null);

                p.Panel05_00_01_00.set_taborder("47");
                p.Panel05_00_01_00.set_horizontalgap("16");
                p.Panel05_00_01_00.set_flexmainaxisalign("end");
                p.Panel05_00_01_00.set_flexgrow("1");
                p.Panel05_00_01_00.set_flexcrossaxisalign("start");
                p.Panel05_00_01_00.move("60","24","175","32",null,null);

                p.Button01_03_01_00.set_taborder("48");
                p.Button01_03_01_00.set_text("공유하기");
                p.Button01_03_01_00.set_cssclass("btn_WF_Share");
                p.Button01_03_01_00.move("185","340","96","32",null,null);

                p.Button01_00_01_01_00.set_taborder("49");
                p.Button01_00_01_01_00.set_text("찜하기");
                p.Button01_00_01_01_00.set_cssclass("btn_WF_Heart");
                p.Button01_00_01_01_00.move("295","340","79","32",null,null);

                p.Button06_01_01_00.set_taborder("50");
                p.Button06_01_01_00.set_text("타이틀 영역");
                p.Button06_01_01_00.set_cssclass("btn_WF_TitLink");
                p.Button06_01_01_00.set_fittocontents("width");
                p.Button06_01_01_00.set_accessibilityrole("link");
                p.Button06_01_01_00.move("105","368","132","29",null,null);

                p.Static19_01_01_00.set_taborder("51");
                p.Static19_01_01_00.set_text("간단한 설명이 들어가는 영역입니다. 최대 3줄까지 작성합니다. 간단한 설명이 들어가는 영역입니다. 간단한 설명이 들어가는 영역입니다. ");
                p.Static19_01_01_00.set_fittocontents("height");
                p.Static19_01_01_00.set_cssclass("sta_WF_Para17RG");
                p.Static19_01_01_00.move("571","484","100%","52",null,null);

                p.Panel00_01_01_00.set_taborder("52");
                p.Panel00_01_01_00.set_horizontalgap("8");
                p.Panel00_01_01_00.set_flexmainaxisalign("start");
                p.Panel00_01_01_00.set_flexwrap("wrap");
                p.Panel00_01_01_00.set_flexcrossaxisalign("center");
                p.Panel00_01_01_00.set_verticalgap("12");
                p.Panel00_01_01_00.set_fittocontents("height");
                p.Panel00_01_01_00.set_flexgrow("1");
                p.Panel00_01_01_00.move("112","1854","100.00%","26",null,null);

                p.Static14_04_01_00.set_taborder("53");
                p.Static14_04_01_00.set_text("Metadata");
                p.Static14_04_01_00.set_cssclass("sta_WF_Para17RG");
                p.Static14_04_01_00.move("103","579","74","26",null,null);

                p.Static15_02_01_00.set_taborder("54");
                p.Static15_02_01_00.set_cssclass("sta_WF_line");
                p.Static15_02_01_00.set_accessibilityenable("false");
                p.Static15_02_01_00.move("200","591","1","16",null,null);

                p.Static14_01_02_01_00.set_taborder("55");
                p.Static14_01_02_01_00.set_text("Metadata");
                p.Static14_01_02_01_00.set_cssclass("sta_WF_Para17RG");
                p.Static14_01_02_01_00.move("10","10","74","26",null,null);

                p.Static16_02_01_00.set_taborder("56");
                p.Static16_02_01_00.set_text("Static16");
                p.Static16_02_01_00.set_cssclass("sta_WF_line");
                p.Static16_02_01_00.set_accessibilityenable("false");
                p.Static16_02_01_00.move("276","588","1","16",null,null);

                p.Static17_02_01_00.set_taborder("57");
                p.Static17_02_01_00.set_text("Metadata");
                p.Static17_02_01_00.set_cssclass("sta_WF_Para17RG");
                p.Static17_02_01_00.move("301","584","74","26",null,null);

                p.Static18_02_01_00.set_taborder("58");
                p.Static18_02_01_00.set_cssclass("sta_WF_line");
                p.Static18_02_01_00.set_accessibilityenable("false");
                p.Static18_02_01_00.move("376","583","1","16",null,null);

                p.Static00_06.set_taborder("59");
                p.Static00_06.set_text("Metadata");
                p.Static00_06.set_cssclass("sta_WF_Para17RG");
                p.Static00_06.move("124","1940","74","26",null,null);

                p.Static14_00.set_taborder("60");
                p.Static14_00.set_text("Static14");
                p.Static14_00.set_cssclass("sta_WF_line");
                p.Static14_00.set_accessibilityenable("false");
                p.Static14_00.move("223","1944","1","16",null,null);

                p.Static14_02_01_01_00.set_taborder("61");
                p.Static14_02_01_01_00.set_text("Metadata");
                p.Static14_02_01_01_00.set_cssclass("sta_WF_Para17RG");
                p.Static14_02_01_01_00.move("20","20","74","26",null,null);

                p.Static16_00_01_01_00.set_taborder("62");
                p.Static16_00_01_01_00.set_text("Static16");
                p.Static16_00_01_01_00.set_cssclass("sta_WF_line");
                p.Static16_00_01_01_00.set_accessibilityenable("false");
                p.Static16_00_01_01_00.move("183","15","1","16",null,null);

                p.Static17_00_01_01_00.set_taborder("63");
                p.Static17_00_01_01_00.set_text("Metadata");
                p.Static17_00_01_01_00.set_cssclass("sta_WF_Para17RG");
                p.Static17_00_01_01_00.move("192","10","74","26",null,null);

                p.Static18_00_01_01_00.set_taborder("64");
                p.Static18_00_01_01_00.set_cssclass("sta_WF_line");
                p.Static18_00_01_01_00.set_accessibilityenable("false");
                p.Static18_00_01_01_00.move("274","15","1","16",null,null);

                p.Static14_01_00_01_01_00.set_taborder("65");
                p.Static14_01_00_01_01_00.set_text("Metadata");
                p.Static14_01_00_01_01_00.set_cssclass("sta_WF_Para17RG");
                p.Static14_01_00_01_01_00.move("101","10","74","26",null,null);

                p.Static15_00_01_01_00.set_taborder("66");
                p.Static15_00_01_01_00.set_cssclass("sta_WF_line");
                p.Static15_00_01_01_00.set_accessibilityenable("false");
                p.Static15_00_01_01_00.move("92","15","1","16",null,null);

                p.Panel07_00_00_00.set_taborder("67");
                p.Panel07_00_00_00.set_type("vertical");
                p.Panel07_00_00_00.set_cssclass("pnl_WF_Detailbox");
                p.Panel07_00_00_00.set_flexcrossaxisalign("start");
                p.Panel07_00_00_00.set_spacing("39px");
                p.Panel07_00_00_00.set_verticalgap("16");
                p.Panel07_00_00_00.move("0","Panel03_01_01_00:80",null,"507","0",null);

                p.ImageViewer01.set_taborder("68");
                p.ImageViewer01.set_fittocontents("none");
                p.ImageViewer01.move("554","282","100%","216",null,null);

                p.Static00_05_00_00_00.set_taborder("69");
                p.Static00_05_00_00_00.set_text("뱃지");
                p.Static00_05_00_00_00.set_cssclass("sta_WF_BadgeLit01");
                p.Static00_05_00_00_00.move("121","343","46","26",null,null);

                p.Static15_00_02.set_taborder("70");
                p.Static15_00_02.set_text("타이틀 영역");
                p.Static15_00_02.set_cssclass("sta_WF_Txt19B");
                p.Static15_00_02.move("213","2361","120","29",null,null);

                p.Static19_00_00_00_00.set_taborder("71");
                p.Static19_00_00_00_00.set_text("간단한 설명이 들어가는 영역입니다. 최대 3줄까지 작성합니다. 간단한 설명이 들어가는 영역입니다. 간단한 설명이 들어가는 영역입니다. ");
                p.Static19_00_00_00_00.set_fittocontents("height");
                p.Static19_00_00_00_00.set_cssclass("sta_WF_Para17RG");
                p.Static19_00_00_00_00.move("571","484","100%","90",null,null);

                p.Button00_00_00.set_taborder("72");
                p.Button00_00_00.set_text("바로가기");
                p.Button00_00_00.set_cssclass("btn_WF_CardMore");
                p.Button00_00_00.move("111","2517","120","34",null,null);

                p.Panel03.set_taborder("73");
                p.Panel03.set_horizontalgap("12");
                p.Panel03.set_flexcrossaxisalign("center");
                p.Panel03.move(null,"Panel07_00_00_00:175","470","32","0",null);

                p.Panel05.set_taborder("74");
                p.Panel05.set_horizontalgap("12");
                p.Panel05.set_flexcrossaxisalign("center");
                p.Panel05.move("0","-1","176","34",null,null);

                p.Static17.set_taborder("75");
                p.Static17.set_text("목록 표시 개수");
                p.Static17.set_cssclass("sta_WF_Txt17B");
                p.Static17.move("779","2739","102","34",null,null);

                p.Combo00.set_taborder("76");
                p.Combo00.set_cssclass("cbo_WF_TxtCom");
                p.Combo00.set_buttonsize("20 20");
                p.Combo00.set_innerdataset(Combo00_innerdataset);
                p.Combo00.set_codecolumn("codecolumn");
                p.Combo00.set_datacolumn("datacolumn");
                p.Combo00.set_text("12");
                p.Combo00.set_value("2");
                p.Combo00.set_index("2");
                p.Combo00.move("893","2742","64","28",null,null);

                p.Static16_03.set_taborder("77");
                p.Static16_03.set_text("Static16");
                p.Static16_03.set_cssclass("sta_WF_BtnDivider");
                p.Static16_03.set_visible("true");
                p.Static16_03.set_accessibilityenable("false");
                p.Static16_03.move("962","2747","1","16",null,null);

                p.Panel06.set_taborder("78");
                p.Panel06.set_horizontalgap("12");
                p.Panel06.set_flexcrossaxisalign("center");
                p.Panel06.move("196","-1","260","34",null,null);

                p.Static17_00.set_taborder("79");
                p.Static17_00.set_text("정렬기준");
                p.Static17_00.set_cssclass("sta_WF_Txt17B");
                p.Static17_00.move("975","2738","61","34",null,null);

                p.Panel02.set_taborder("80");
                p.Panel02.set_horizontalgap("8");
                p.Panel02.set_flexcrossaxisalign("center");
                p.Panel02.move("1048","2740","190","34",null,null);

                p.Button06.set_taborder("81");
                p.Button06.set_text("관련도순");
                p.Button06.set_cssclass("btn_WF_TxtLineS");
                p.Button06.set_fittocontents("width");
                p.Button06.move("1048","2740","80","30",null,null);

                p.Button06_02.set_taborder("82");
                p.Button06_02.set_text("최신순");
                p.Button06_02.set_cssclass("btn_WF_TxtLine");
                p.Button06_02.set_fittocontents("width");
                p.Button06_02.move("1124","2740","60","30",null,null);

                p.Button06_02_00.set_taborder("83");
                p.Button06_02_00.set_text("인기순");
                p.Button06_02_00.set_cssclass("btn_WF_TxtLine");
                p.Button06_02_00.set_fittocontents("width");
                p.Button06_02_00.move("1183","2740","60","30",null,null);

                p.Panel01.set_taborder("84");
                p.Panel01.set_type("horizontal");
                p.Panel01.set_flexmainaxisalign("start");
                p.Panel01.set_flexcrossaxisalign("center");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.set_horizontalgap("26");
                p.Panel01.set_fittocontents("height");
                p.Panel01.move("0","Panel07_00_00_00:175","400","32",null,null);

                p.CheckBox00.set_taborder("85");
                p.CheckBox00.set_text("전체선택");
                p.CheckBox00.move("99","2742","113","26",null,null);

                p.Panel00.set_taborder("86");
                p.Panel00.set_flexcrossaxisalign("center");
                p.Panel00.set_horizontalgap("8");
                p.Panel00.set_flexmainaxisalign("start");
                p.Panel00.set_fittocontents("width");
                p.Panel00.move("292","2739","230","32",null,null);

                p.Button01_00_03.set_taborder("87");
                p.Button01_00_03.set_text("핵심버튼");
                p.Button01_00_03.set_cssclass("btn_WF_Download");
                p.Button01_00_03.move("525","2739","96","32",null,null);

                p.Static16_00_02.set_taborder("88");
                p.Static16_00_02.set_text("Static16");
                p.Static16_00_02.set_cssclass("sta_WF_BtnDivider");
                p.Static16_00_02.set_accessibilityenable("false");
                p.Static16_00_02.move("629","2747","1","16",null,null);

                p.Button01_00_03_00.set_taborder("89");
                p.Button01_00_03_00.set_text("핵심버튼");
                p.Button01_00_03_00.set_cssclass("btn_WF_Download");
                p.Button01_00_03_00.move("637","2739","96","32",null,null);

                p.Panel04.set_taborder("90");
                p.Panel04.set_horizontalgap("24");
                p.Panel04.set_flexwrap("wrap");
                p.Panel04.set_verticalgap("16");
                p.Panel04.set_fittocontents("height");
                p.Panel04.set_flexgrow("1");
                p.Panel04.move("0","Panel01:29",null,"421","0",null);

                p.Panel03_01_01_01.set_taborder("91");
                p.Panel03_01_01_01.set_cssclass("pnl_WF_Detailbox");
                p.Panel03_01_01_01.set_spacing("32px");
                p.Panel03_01_01_01.set_type("vertical");
                p.Panel03_01_01_01.set_verticalgap("24");
                p.Panel03_01_01_01.set_flexgrow("1");
                p.Panel03_01_01_01.set_fittocontents("height");
                p.Panel03_01_01_01.set_horizontalgap("0");
                p.Panel03_01_01_01.move("99","2803","384","421",null,null);

                p.CheckBox00_01_01_01.set_taborder("92");
                p.CheckBox00_01_01_01.set_cssclass("chk_WF_Large");
                p.CheckBox00_01_01_01.move("126","280","48","26",null,null);

                p.Panel09_01_01.set_taborder("93");
                p.Panel09_01_01.set_type("vertical");
                p.Panel09_01_01.set_verticalgap("16");
                p.Panel09_01_01.set_fittocontents("height");
                p.Panel09_01_01.move("112","1655","100%","305",null,null);

                p.Panel04_00_01_01.set_taborder("94");
                p.Panel04_00_01_01.set_flexmainaxisalign("start");
                p.Panel04_00_01_01.set_flexcrossaxisalign("center");
                p.Panel04_00_01_01.set_spacing("0px");
                p.Panel04_00_01_01.set_verticalgap("24");
                p.Panel04_00_01_01.set_fittocontents("height");
                p.Panel04_00_01_01.set_flexgrow("1");
                p.Panel04_00_01_01.move("640","367","100%","32",null,null);

                p.Static00_04_01_01.set_taborder("95");
                p.Static00_04_01_01.set_text("뱃지");
                p.Static00_04_01_01.set_cssclass("sta_WF_BadgeLit01");
                p.Static00_04_01_01.move("121","343","46","26",null,null);

                p.Panel05_00_01_01.set_taborder("96");
                p.Panel05_00_01_01.set_horizontalgap("16");
                p.Panel05_00_01_01.set_flexmainaxisalign("end");
                p.Panel05_00_01_01.set_flexgrow("1");
                p.Panel05_00_01_01.set_flexcrossaxisalign("start");
                p.Panel05_00_01_01.move("60","24","175","32",null,null);

                p.Button01_03_01_01.set_taborder("97");
                p.Button01_03_01_01.set_text("공유하기");
                p.Button01_03_01_01.set_cssclass("btn_WF_Share");
                p.Button01_03_01_01.move("185","340","96","32",null,null);

                p.Button01_00_01_01_01.set_taborder("98");
                p.Button01_00_01_01_01.set_text("찜하기");
                p.Button01_00_01_01_01.set_cssclass("btn_WF_Heart");
                p.Button01_00_01_01_01.move("295","340","79","32",null,null);

                p.Button06_01_01_01.set_taborder("99");
                p.Button06_01_01_01.set_text("타이틀 영역");
                p.Button06_01_01_01.set_cssclass("btn_WF_TitLink");
                p.Button06_01_01_01.set_fittocontents("width");
                p.Button06_01_01_01.move("105","368","132","29",null,null);

                p.Static19_01_01_01.set_taborder("100");
                p.Static19_01_01_01.set_text("간단한 설명이 들어가는 영역입니다. 최대 3줄까지 작성합니다. 간단한 설명이 들어가는 영역입니다. 간단한 설명이 들어가는 영역입니다. ");
                p.Static19_01_01_01.set_fittocontents("height");
                p.Static19_01_01_01.set_cssclass("sta_WF_Para17RG");
                p.Static19_01_01_01.move("571","484","100%","90",null,null);

                p.Panel00_01_01_01.set_taborder("101");
                p.Panel00_01_01_01.set_horizontalgap("8");
                p.Panel00_01_01_01.set_flexmainaxisalign("start");
                p.Panel00_01_01_01.set_flexwrap("wrap");
                p.Panel00_01_01_01.set_flexcrossaxisalign("center");
                p.Panel00_01_01_01.set_verticalgap("12");
                p.Panel00_01_01_01.set_fittocontents("height");
                p.Panel00_01_01_01.set_flexgrow("1");
                p.Panel00_01_01_01.move("112","1854","100.00%","106",null,null);

                p.Static14_04_01_01.set_taborder("102");
                p.Static14_04_01_01.set_text("Metadata");
                p.Static14_04_01_01.set_cssclass("sta_WF_Para17RG");
                p.Static14_04_01_01.move("103","579","74","26",null,null);

                p.Static15_02_01_01.set_taborder("103");
                p.Static15_02_01_01.set_cssclass("sta_WF_line");
                p.Static15_02_01_01.set_accessibilityenable("false");
                p.Static15_02_01_01.move("200","591","1","16",null,null);

                p.Static14_01_02_01_01.set_taborder("104");
                p.Static14_01_02_01_01.set_text("Metadata");
                p.Static14_01_02_01_01.set_cssclass("sta_WF_Para17RG");
                p.Static14_01_02_01_01.move("10","10","74","26",null,null);

                p.Static16_02_01_01.set_taborder("105");
                p.Static16_02_01_01.set_text("Static16");
                p.Static16_02_01_01.set_cssclass("sta_WF_line");
                p.Static16_02_01_01.set_accessibilityenable("false");
                p.Static16_02_01_01.move("276","588","1","16",null,null);

                p.Static17_02_01_01.set_taborder("106");
                p.Static17_02_01_01.set_text("Metadata");
                p.Static17_02_01_01.set_cssclass("sta_WF_Para17RG");
                p.Static17_02_01_01.move("301","584","74","26",null,null);

                p.Static18_02_01_01.set_taborder("107");
                p.Static18_02_01_01.set_cssclass("sta_WF_line");
                p.Static18_02_01_01.set_accessibilityenable("false");
                p.Static18_02_01_01.move("376","583","1","16",null,null);

                p.Static00_03.set_taborder("108");
                p.Static00_03.set_text("Metadata");
                p.Static00_03.set_cssclass("sta_WF_Para17RG");
                p.Static00_03.move("124","1940","74","26",null,null);

                p.Static14_01.set_taborder("109");
                p.Static14_01.set_text("Static14");
                p.Static14_01.set_cssclass("sta_WF_line");
                p.Static14_01.set_accessibilityenable("false");
                p.Static14_01.move("223","1944","1","16",null,null);

                p.Static14_02_01_01_01.set_taborder("110");
                p.Static14_02_01_01_01.set_text("Metadata");
                p.Static14_02_01_01_01.set_cssclass("sta_WF_Para17RG");
                p.Static14_02_01_01_01.move("20","20","74","26",null,null);

                p.Static16_00_01_01_01.set_taborder("111");
                p.Static16_00_01_01_01.set_text("Static16");
                p.Static16_00_01_01_01.set_cssclass("sta_WF_line");
                p.Static16_00_01_01_01.set_accessibilityenable("false");
                p.Static16_00_01_01_01.move("183","15","1","16",null,null);

                p.Static17_00_01_01_01.set_taborder("112");
                p.Static17_00_01_01_01.set_text("Metadata");
                p.Static17_00_01_01_01.set_cssclass("sta_WF_Para17RG");
                p.Static17_00_01_01_01.move("192","10","74","26",null,null);

                p.Static18_00_01_01_01.set_taborder("113");
                p.Static18_00_01_01_01.set_cssclass("sta_WF_line");
                p.Static18_00_01_01_01.set_accessibilityenable("false");
                p.Static18_00_01_01_01.move("274","15","1","16",null,null);

                p.Static14_01_00_01_01_01.set_taborder("114");
                p.Static14_01_00_01_01_01.set_text("Metadata");
                p.Static14_01_00_01_01_01.set_cssclass("sta_WF_Para17RG");
                p.Static14_01_00_01_01_01.move("101","10","74","26",null,null);

                p.Static15_00_01_01_01.set_taborder("115");
                p.Static15_00_01_01_01.set_cssclass("sta_WF_line");
                p.Static15_00_01_01_01.set_accessibilityenable("false");
                p.Static15_00_01_01_01.move("92","15","1","16",null,null);

                p.Panel03_01_01_01_00.set_taborder("116");
                p.Panel03_01_01_01_00.set_cssclass("pnl_WF_Detailbox");
                p.Panel03_01_01_01_00.set_spacing("32px");
                p.Panel03_01_01_01_00.set_type("vertical");
                p.Panel03_01_01_01_00.set_verticalgap("24");
                p.Panel03_01_01_01_00.set_flexgrow("1");
                p.Panel03_01_01_01_00.set_fittocontents("height");
                p.Panel03_01_01_01_00.set_horizontalgap("0");
                p.Panel03_01_01_01_00.move("500","2803","384","421",null,null);

                p.CheckBox00_01_01_01_00.set_taborder("117");
                p.CheckBox00_01_01_01_00.set_cssclass("chk_WF_Large");
                p.CheckBox00_01_01_01_00.move("126","280","48","26",null,null);

                p.Panel09_01_01_00.set_taborder("118");
                p.Panel09_01_01_00.set_type("vertical");
                p.Panel09_01_01_00.set_verticalgap("16");
                p.Panel09_01_01_00.set_fittocontents("height");
                p.Panel09_01_01_00.move("112","1655","100%","305",null,null);

                p.Panel04_00_01_01_00.set_taborder("119");
                p.Panel04_00_01_01_00.set_flexmainaxisalign("start");
                p.Panel04_00_01_01_00.set_flexcrossaxisalign("center");
                p.Panel04_00_01_01_00.set_spacing("0px");
                p.Panel04_00_01_01_00.set_verticalgap("24");
                p.Panel04_00_01_01_00.set_fittocontents("height");
                p.Panel04_00_01_01_00.set_flexgrow("1");
                p.Panel04_00_01_01_00.move("640","367","100%","32",null,null);

                p.Static00_04_01_01_00.set_taborder("120");
                p.Static00_04_01_01_00.set_text("뱃지");
                p.Static00_04_01_01_00.set_cssclass("sta_WF_BadgeLit01");
                p.Static00_04_01_01_00.move("121","343","46","26",null,null);

                p.Panel05_00_01_01_00.set_taborder("121");
                p.Panel05_00_01_01_00.set_horizontalgap("16");
                p.Panel05_00_01_01_00.set_flexmainaxisalign("end");
                p.Panel05_00_01_01_00.set_flexgrow("1");
                p.Panel05_00_01_01_00.set_flexcrossaxisalign("start");
                p.Panel05_00_01_01_00.move("60","24","175","32",null,null);

                p.Button01_03_01_01_00.set_taborder("122");
                p.Button01_03_01_01_00.set_text("공유하기");
                p.Button01_03_01_01_00.set_cssclass("btn_WF_Share");
                p.Button01_03_01_01_00.move("185","340","96","32",null,null);

                p.Button01_00_01_01_01_00.set_taborder("123");
                p.Button01_00_01_01_01_00.set_text("찜하기");
                p.Button01_00_01_01_01_00.set_cssclass("btn_WF_Heart");
                p.Button01_00_01_01_01_00.move("295","340","79","32",null,null);

                p.Button06_01_01_01_00.set_taborder("124");
                p.Button06_01_01_01_00.set_text("타이틀 영역");
                p.Button06_01_01_01_00.set_cssclass("btn_WF_TitLink");
                p.Button06_01_01_01_00.set_fittocontents("width");
                p.Button06_01_01_01_00.move("105","368","132","29",null,null);

                p.Static19_01_01_01_00.set_taborder("125");
                p.Static19_01_01_01_00.set_text("간단한 설명이 들어가는 영역입니다. 최대 3줄까지 작성합니다. 간단한 설명이 들어가는 영역입니다. 간단한 설명이 들어가는 영역입니다. ");
                p.Static19_01_01_01_00.set_fittocontents("height");
                p.Static19_01_01_01_00.set_cssclass("sta_WF_Para17RG");
                p.Static19_01_01_01_00.move("571","484","100%","90",null,null);

                p.Panel00_01_01_01_00.set_taborder("126");
                p.Panel00_01_01_01_00.set_horizontalgap("8");
                p.Panel00_01_01_01_00.set_flexmainaxisalign("start");
                p.Panel00_01_01_01_00.set_flexwrap("wrap");
                p.Panel00_01_01_01_00.set_flexcrossaxisalign("center");
                p.Panel00_01_01_01_00.set_verticalgap("12");
                p.Panel00_01_01_01_00.set_fittocontents("height");
                p.Panel00_01_01_01_00.set_flexgrow("1");
                p.Panel00_01_01_01_00.move("112","1854","100.00%","106",null,null);

                p.Static14_04_01_01_00.set_taborder("127");
                p.Static14_04_01_01_00.set_text("Metadata");
                p.Static14_04_01_01_00.set_cssclass("sta_WF_Para17RG");
                p.Static14_04_01_01_00.move("103","579","74","26",null,null);

                p.Static15_02_01_01_00.set_taborder("128");
                p.Static15_02_01_01_00.set_cssclass("sta_WF_line");
                p.Static15_02_01_01_00.set_accessibilityenable("false");
                p.Static15_02_01_01_00.move("200","591","1","16",null,null);

                p.Static14_01_02_01_01_00.set_taborder("129");
                p.Static14_01_02_01_01_00.set_text("Metadata");
                p.Static14_01_02_01_01_00.set_cssclass("sta_WF_Para17RG");
                p.Static14_01_02_01_01_00.move("10","10","74","26",null,null);

                p.Static16_02_01_01_00.set_taborder("130");
                p.Static16_02_01_01_00.set_text("Static16");
                p.Static16_02_01_01_00.set_cssclass("sta_WF_line");
                p.Static16_02_01_01_00.set_accessibilityenable("false");
                p.Static16_02_01_01_00.move("276","588","1","16",null,null);

                p.Static17_02_01_01_00.set_taborder("131");
                p.Static17_02_01_01_00.set_text("Metadata");
                p.Static17_02_01_01_00.set_cssclass("sta_WF_Para17RG");
                p.Static17_02_01_01_00.move("301","584","74","26",null,null);

                p.Static18_02_01_01_00.set_taborder("132");
                p.Static18_02_01_01_00.set_cssclass("sta_WF_line");
                p.Static18_02_01_01_00.set_accessibilityenable("false");
                p.Static18_02_01_01_00.move("376","583","1","16",null,null);

                p.Static00_03_00.set_taborder("133");
                p.Static00_03_00.set_text("Metadata");
                p.Static00_03_00.set_cssclass("sta_WF_Para17RG");
                p.Static00_03_00.move("124","1940","74","26",null,null);

                p.Static14_01_00.set_taborder("134");
                p.Static14_01_00.set_text("Static14");
                p.Static14_01_00.set_cssclass("sta_WF_line");
                p.Static14_01_00.set_accessibilityenable("false");
                p.Static14_01_00.move("223","1944","1","16",null,null);

                p.Static14_02_01_01_01_00.set_taborder("135");
                p.Static14_02_01_01_01_00.set_text("Metadata");
                p.Static14_02_01_01_01_00.set_cssclass("sta_WF_Para17RG");
                p.Static14_02_01_01_01_00.move("20","20","74","26",null,null);

                p.Static16_00_01_01_01_00.set_taborder("136");
                p.Static16_00_01_01_01_00.set_text("Static16");
                p.Static16_00_01_01_01_00.set_cssclass("sta_WF_line");
                p.Static16_00_01_01_01_00.set_accessibilityenable("false");
                p.Static16_00_01_01_01_00.move("183","15","1","16",null,null);

                p.Static17_00_01_01_01_00.set_taborder("137");
                p.Static17_00_01_01_01_00.set_text("Metadata");
                p.Static17_00_01_01_01_00.set_cssclass("sta_WF_Para17RG");
                p.Static17_00_01_01_01_00.move("192","10","74","26",null,null);

                p.Static18_00_01_01_01_00.set_taborder("138");
                p.Static18_00_01_01_01_00.set_cssclass("sta_WF_line");
                p.Static18_00_01_01_01_00.set_accessibilityenable("false");
                p.Static18_00_01_01_01_00.move("274","15","1","16",null,null);

                p.Static14_01_00_01_01_01_00.set_taborder("139");
                p.Static14_01_00_01_01_01_00.set_text("Metadata");
                p.Static14_01_00_01_01_01_00.set_cssclass("sta_WF_Para17RG");
                p.Static14_01_00_01_01_01_00.move("101","10","74","26",null,null);

                p.Static15_00_01_01_01_00.set_taborder("140");
                p.Static15_00_01_01_01_00.set_cssclass("sta_WF_line");
                p.Static15_00_01_01_01_00.set_accessibilityenable("false");
                p.Static15_00_01_01_01_00.move("92","15","1","16",null,null);

                p.Div06.set_taborder("141");
                p.Div06.set_text("Div06");
                p.Div06.move("0","Panel04:40",null,"40","0",null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Desktop_screen,mobile_small",480,4400,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00_01_00.move("0","85",null,"256","0",null);

                p.Panel03_01_00.set_type("vertical");
                p.Panel03_01_00.move("0","421",null,"514","0",null);

                p.Panel07_00_00_00.set_spacing("23px 23px 23px 23px");

                p.Panel11_00.set_flexwrap("wrap");
                p.Panel11_00.move("185","1751","100%","281",null,null);

                p.Panel10_00.move("33","552","115.38353824180133%","185",null,null);

                p.Panel02_01_00.move("126","666","115.94365250511105%","80",null,null);

                p.Panel01_01_00.move(null,null,"100%",null,null,null);

                p.Panel09_00.move("33","504","99.03846153846153%","182",null,null);

                p.Panel03_01_01_00.set_flexwrap("wrap");
                p.Panel03_01_01_00.move("0","Panel03_01_00:80",null,"310","0",null);

                p.Panel01.set_verticalgap("8");
                p.Panel01.set_type("vertical");
                p.Panel01.set_flexcrossaxisalign("start");
                p.Panel01.move("0","Panel03:24","400","72",null,null);

                p.Panel03.set_flexwrap("wrap");
                p.Panel03.set_flexmainaxisalign("end");
                p.Panel03.move(null,"Panel07_00_00_00:80","273","72","0",null);

                p.Panel04.move("0","Panel01:29",null,"858","0",null);

                p.CheckBox00.move("99","2742","100%","26",null,null);


                p.Static16_03.set_visible("false");
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
        this.registerScript("comp03_lay01.xfdl", function() {

        this.lay01_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.lay01_onload,this);
        };
        this.loadIncludeScript("comp03_lay01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
