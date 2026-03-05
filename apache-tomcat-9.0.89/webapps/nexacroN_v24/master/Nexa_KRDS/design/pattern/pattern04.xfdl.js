(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("pattern04");
            this.set_titletext("목록 탐색");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,1590);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staH2","0","0","150","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("목록 탐색");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("staDivider","staH2:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staEtit","staDivider:15","0","220","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Search Context");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","85",null,"126","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("목록은 의미적으로 관련 있는 다수의 데이터를 연속적으로 배열한 색인이다. 사용자는 목록에서 특정한 항목을 찾고 항목과 관련된 기능을 수행한다. 사용자가 목록에서 원하는 정보를 효과적으로 탐색할 수 있도록 목록의 항목은 일관성 있는 형식과 배치를 유지하고 논리적 순서에 따라 배열되어야 한다.");
            obj.set_cssclass("sta_WF_Descript");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","Static00:80","300","60",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("유형");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","0","Static00_01:48","300","38",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("예시");
            obj.set_cssclass("sta_WF_ParaH3_pc");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03","0","Static00_02:40","278","32",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("기본");
            obj.set_cssclass("sta_WF_H5");
            obj.set_accessibilityrole("heading5");
            this.addChild(obj.name, obj);

            obj = new Div("Div02","0","Static00_03:24",null,"983","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("div_WF_Detailbox");
            obj.set_text("");
            obj.set_fittocontents("height");
            obj.set_accessibilityenable("false");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","39","39","477","48",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("16");
            obj.set_fittocontents("height");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Div00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00_01\"/></Contents>");
            this.Div02.addChild(obj.name, obj);

            obj = new Div("Div00","39","39","351","48",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_flexgrow("1");
            obj.set_accessibilityenable("false");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit01","0","0",null,null,"0","0",null,null,null,null,this.Div02.form.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_Sch");
            obj.set_accessibilitylabel("검색");
            this.Div02.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00",null,"4","40","40","2",null,null,null,null,null,this.Div02.form.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            obj.set_accessibilitylabel("검색");
            this.Div02.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01",null,"39","96","48","357",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_text("고급검색");
            obj.set_cssclass("btn_WF_MultiSch");
            this.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel02",null,"Panel01:37","588","39","39",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            obj.set_horizontalgap("12");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Stafilter\"/><PanelItem id=\"PanelItem06\" componentid=\"Div01\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static16_03\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02_01\"/></Contents>");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Stafilter","280","126","31","34",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("4");
            obj.set_text("필터");
            obj.set_cssclass("sta_WF_Txt17B");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.Div02.addChild(obj.name, obj);

            obj = new Div("Div01","267","130","39","39",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_accessibilityenable("false");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button00",null,null,"34","34","0","0",null,null,null,null,this.Div02.form.Div01.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_SchFilter");
            obj.set_text("");
            obj.set_visible("false");
            obj.set_accessibilitylabel("필터");
            this.Div02.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static04","0","0","26","20",null,null,null,null,null,null,this.Div02.form.Div01.form);
            obj.set_taborder("1");
            obj.set_text("4");
            obj.set_cssclass("sta_WF_BadgeNum01");
            obj.set_visible("false");
            this.Div02.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","0","-1","180","34",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("6");
            obj.set_horizontalgap("12");
            obj.set_flexcrossaxisalign("center");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"StaNm\"/><PanelItem id=\"PanelItem01\" componentid=\"Combo00\"/></Contents>");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("StaNm","779","2739","102","34",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("7");
            obj.set_text("목록 표시 개수");
            obj.set_cssclass("sta_WF_Txt17B");
            this.Div02.addChild(obj.name, obj);

            obj = new Combo("Combo00","893","2742","64","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("8");
            obj.set_cssclass("cbo_WF_TxtCom");
            obj.set_buttonsize("20 20");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_accessibilitylabel("목표표시개수");
            var Div02_form_Combo00_innerdataset = new nexacro.NormalDataset("Div02_form_Combo00_innerdataset", obj);
            Div02_form_Combo00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "4개"},{"codecolumn" : "1","datacolumn" : "8개"},{"codecolumn" : "2","datacolumn" : "12개"},{"codecolumn" : "3","datacolumn" : "16개"}]});
            obj.set_innerdataset(Div02_form_Combo00_innerdataset);
            obj.set_text("12개");
            obj.set_value("2");
            obj.set_index("2");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static16_03","962","2747","1","16",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("9");
            obj.set_text("Static16");
            obj.set_cssclass("sta_WF_BtnDivider");
            obj.set_visible("true");
            this.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel02_01","196","-1","260","34",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("10");
            obj.set_horizontalgap("12");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("spaceevenly");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_04\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02_02\"/></Contents>");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static00_04","975","2738","61","34",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("11");
            obj.set_text("정렬기준");
            obj.set_cssclass("sta_WF_Txt17B");
            this.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel02_02","1048","2740","190","34",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("12");
            obj.set_horizontalgap("8");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button01\"/><PanelItem id=\"PanelItem01\" componentid=\"Button01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Button01_01\"/></Contents>");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button01","1048","2740","80","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("13");
            obj.set_text("관련도순");
            obj.set_cssclass("btn_WF_TxtLineS");
            obj.set_fittocontents("width");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button01_00","1124","2740","60","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("14");
            obj.set_text("최신순");
            obj.set_cssclass("btn_WF_TxtLine");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button01_01","1183","2740","60","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("15");
            obj.set_text("인기순");
            obj.set_cssclass("btn_WF_TxtLine");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static00_06","39","Panel01:37","130","39",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("16");
            obj.set_text("검색 결과 <fc v=\'#0B50D0\'><b v=\'true\'>249</b></fc>건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Txt17B");
            obj.set_fittocontents("width");
            this.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel03","39","Static00_06:20",null,"332","39",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("17");
            obj.set_cssclass("pnl_WF_Detailbox");
            obj.set_spacing("32px");
            obj.set_type("horizontal");
            obj.set_verticalgap("24");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_horizontalgap("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel09_00\"/></Contents>");
            this.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel09_00","185","1673","100%","268",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("18");
            obj.set_type("vertical");
            obj.set_verticalgap("16");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel04_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel11_00\"/><PanelItem id=\"PanelItem06\" componentid=\"Panel01_01_00\"/></Contents>");
            this.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel04_00_00","640","367","100%","32",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("19");
            obj.set_flexmainaxisalign("start");
            obj.set_flexcrossaxisalign("center");
            obj.set_spacing("0px");
            obj.set_verticalgap("24");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_04_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel05_00_00\"/></Contents>");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static00_04_00","121","343","61","26",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("20");
            obj.set_text("신청중");
            obj.set_cssclass("sta_WF_BadgeLit01");
            obj.set_fittocontents("width");
            this.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel05_00_00","60","24","175","32",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("21");
            obj.set_horizontalgap("16");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Button01_03_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Button01_00_01_00\"/></Contents>");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button01_03_00","185","340","96","32",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("22");
            obj.set_text("공유하기");
            obj.set_cssclass("btn_WF_Share");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button01_00_01_00","295","340","79","32",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("23");
            obj.set_text("찜하기");
            obj.set_cssclass("btn_WF_Heart");
            this.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel11_00","185","1751","100%","155",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("24");
            obj.set_fittocontents("height");
            obj.set_verticalgap("16");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel10_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02_01_00\"/></Contents>");
            this.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel10_00","112","1126","90%","155",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("25");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_verticalgap("16");
            obj.set_spacing("0px 0px 16px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button06_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static19_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel06_01_00\"/></Contents>");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button06_01_00","105","368","287","29",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("26");
            obj.set_text("산모∙신생아 건강관리 지원사업");
            obj.set_cssclass("btn_WF_TitLink");
            obj.set_fittocontents("width");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static19_01_00","185","1796","94.36%","52",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("27");
            obj.set_text("간단한 설명이 들어가는 영역입니다. 최대 3줄까지 작성합니다. 간단한 설명이 들어가는 영역입니다. 간단한 설명이 들어가는 영역입니다. ");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_Para17RG");
            this.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel06_01_00","95","530","320","26",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("28");
            obj.set_horizontalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static14_00_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static14_00_00_01_00\"/></Contents>");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static14_00_02_00","95","530","83","26",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("29");
            obj.set_text("신청 기간");
            obj.set_cssclass("sta_WF_Txt19B");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static14_00_00_01_00","42","530","223","26",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("30");
            obj.set_text("2023.11.01-2024.04.30");
            this.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel02_01_00","126","666","120","80",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("31");
            obj.set_horizontalgap("8");
            obj.set_flexmainaxisalign("end");
            obj.set_spacing("0");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_04_00\"/></Contents>");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button00_04_00","262","666","112","48",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("32");
            obj.set_text("신청하기");
            obj.set_cssclass("btn_WF_Custom");
            this.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00","185","1983","100.00%","49",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("33");
            obj.set_horizontalgap("8");
            obj.set_spacing("16px 0px 0px 0px");
            obj.set_cssclass("pnl_WF_Topline");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_00_00_06_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00_00_00_00_01_00\"/></Contents>");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_06_00","103","804","75","32",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("34");
            obj.set_text("#청소년");
            obj.set_cssclass("btn_WF_Tagline");
            obj.set_fittocontents("width");
            obj.set_accessibilitylabel("태그");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_01_00","163","804","75","32",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("35");
            obj.set_text("#영유아");
            obj.set_cssclass("btn_WF_Tagline");
            obj.set_fittocontents("width");
            obj.set_accessibilitylabel("태그");
            this.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel03_00","39","Panel03:24",null,"332","39",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("36");
            obj.set_cssclass("pnl_WF_Detailbox");
            obj.set_spacing("32px");
            obj.set_type("horizontal");
            obj.set_verticalgap("24");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_horizontalgap("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel09_00_00\"/></Contents>");
            this.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel09_00_00","185","1673","100%","268",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("37");
            obj.set_type("vertical");
            obj.set_verticalgap("16");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel04_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel11_00_00\"/><PanelItem id=\"PanelItem06\" componentid=\"Panel01_01_00_00\"/></Contents>");
            this.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel04_00_00_00","640","367","100%","32",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("38");
            obj.set_flexmainaxisalign("start");
            obj.set_flexcrossaxisalign("center");
            obj.set_spacing("0px");
            obj.set_verticalgap("24");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_04_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel05_00_00_00\"/></Contents>");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static00_04_00_00","121","343","61","26",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("39");
            obj.set_text("신청중");
            obj.set_cssclass("sta_WF_BadgeLit01");
            obj.set_fittocontents("width");
            this.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel05_00_00_00","60","24","175","32",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("40");
            obj.set_horizontalgap("16");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Button01_03_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Button01_00_01_00_00\"/></Contents>");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button01_03_00_00","185","340","96","32",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("41");
            obj.set_text("공유하기");
            obj.set_cssclass("btn_WF_Share");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button01_00_01_00_00","295","340","79","32",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("42");
            obj.set_text("찜하기");
            obj.set_cssclass("btn_WF_Heart");
            this.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel11_00_00","185","1751","100%","155",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("43");
            obj.set_fittocontents("height");
            obj.set_verticalgap("16");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel10_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02_01_00_00\"/></Contents>");
            this.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel10_00_00","112","1126","90%","155",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("44");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_verticalgap("16");
            obj.set_spacing("0px 0px 16px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button06_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static19_01_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel06_01_00_00\"/></Contents>");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button06_01_00_00","105","368","293","29",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("45");
            obj.set_text("저소득층 기저귀∙조제분유 지원");
            obj.set_cssclass("btn_WF_TitLink");
            obj.set_fittocontents("width");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static19_01_00_00","185","1796","94.36%","52",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("46");
            obj.set_text("간단한 설명이 들어가는 영역입니다. 최대 3줄까지 작성합니다. 간단한 설명이 들어가는 영역입니다. 간단한 설명이 들어가는 영역입니다. ");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_Para17RG");
            this.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel06_01_00_00","95","530","320","26",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("47");
            obj.set_horizontalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static14_00_02_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static14_00_00_01_00_00\"/></Contents>");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static14_00_02_00_00","95","530","83","26",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("48");
            obj.set_text("신청 기간");
            obj.set_cssclass("sta_WF_Txt19B");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static14_00_00_01_00_00","42","530","223","26",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("49");
            obj.set_text("2023.11.01-2024.04.30");
            this.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel02_01_00_00","126","666","120","80",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("50");
            obj.set_horizontalgap("8");
            obj.set_flexmainaxisalign("end");
            obj.set_spacing("0");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_04_00_00\"/></Contents>");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button00_04_00_00","262","666","112","48",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("51");
            obj.set_text("신청하기");
            obj.set_cssclass("btn_WF_Custom");
            this.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00","185","1983","100.00%","49",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("52");
            obj.set_horizontalgap("8");
            obj.set_spacing("16px 0px 0px 0px");
            obj.set_cssclass("pnl_WF_Topline");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_00_00_06_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00_00_00_00_01_00_00\"/></Contents>");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_06_00_00","103","804","75","32",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("53");
            obj.set_text("#청소년");
            obj.set_cssclass("btn_WF_Tagline");
            obj.set_fittocontents("width");
            obj.set_accessibilitylabel("태그");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_01_00_00","163","804","75","32",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("54");
            obj.set_text("#영유아");
            obj.set_cssclass("btn_WF_Tagline");
            obj.set_fittocontents("width");
            obj.set_accessibilitylabel("태그");
            this.Div02.addChild(obj.name, obj);

            obj = new Div("Div03","39","Panel03_00:24",null,"40","39",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("55");
            obj.set_text("Div06");
            obj.set_accessibilityenable("false");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button00","0","0","62","40",null,null,null,null,null,null,this.Div02.form.Div03.form);
            obj.set_taborder("0");
            obj.set_text("이전");
            obj.set_cssclass("btn_WF_PgPrev");
            obj.set_visible("true");
            this.Div02.form.Div03.addChild(obj.name, obj);

            obj = new Button("Button01","70","0","40","40",null,null,null,null,null,null,this.Div02.form.Div03.form);
            obj.set_taborder("1");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_PgNumS");
            obj.set_visible("true");
            this.Div02.form.Div03.addChild(obj.name, obj);

            obj = new Button("Button01_00","118","0","40","40",null,null,null,null,null,null,this.Div02.form.Div03.form);
            obj.set_taborder("2");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_PgNum");
            obj.set_visible("true");
            this.Div02.form.Div03.addChild(obj.name, obj);

            obj = new Button("Button01_01","166","0","40","40",null,null,null,null,null,null,this.Div02.form.Div03.form);
            obj.set_taborder("3");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_PgNum");
            obj.set_visible("true");
            this.Div02.form.Div03.addChild(obj.name, obj);

            obj = new Button("Button01_02","214","0","40","40",null,null,null,null,null,null,this.Div02.form.Div03.form);
            obj.set_taborder("4");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_PgNum");
            obj.set_visible("true");
            this.Div02.form.Div03.addChild(obj.name, obj);

            obj = new Button("Button01_03","262","0","40","40",null,null,null,null,null,null,this.Div02.form.Div03.form);
            obj.set_taborder("5");
            obj.set_text("5");
            obj.set_cssclass("btn_WF_PgNum");
            obj.set_visible("true");
            this.Div02.form.Div03.addChild(obj.name, obj);

            obj = new Button("Button01_04","310","0","40","40",null,null,null,null,null,null,this.Div02.form.Div03.form);
            obj.set_taborder("6");
            obj.set_text("6");
            obj.set_cssclass("btn_WF_PgNum");
            obj.set_visible("true");
            this.Div02.form.Div03.addChild(obj.name, obj);

            obj = new Button("Button01_05","358","0","40","40",null,null,null,null,null,null,this.Div02.form.Div03.form);
            obj.set_taborder("7");
            obj.set_text("7");
            obj.set_cssclass("btn_WF_PgNum");
            obj.set_visible("true");
            this.Div02.form.Div03.addChild(obj.name, obj);

            obj = new Button("Button01_06","406","0","40","40",null,null,null,null,null,null,this.Div02.form.Div03.form);
            obj.set_taborder("8");
            obj.set_text("8");
            obj.set_cssclass("btn_WF_PgNum");
            obj.set_visible("true");
            this.Div02.form.Div03.addChild(obj.name, obj);

            obj = new Button("Button01_07","454","0","40","40",null,null,null,null,null,null,this.Div02.form.Div03.form);
            obj.set_taborder("9");
            obj.set_text("9");
            obj.set_cssclass("btn_WF_PgNum");
            obj.set_visible("true");
            this.Div02.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static00_05","502","0","40","40",null,null,null,null,null,null,this.Div02.form.Div03.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_Ellipsis");
            obj.set_visible("true");
            obj.set_accessibilitylabel("줄임");
            this.Div02.form.Div03.addChild(obj.name, obj);

            obj = new Button("Button01_08","550","0","40","40",null,null,null,null,null,null,this.Div02.form.Div03.form);
            obj.set_taborder("11");
            obj.set_text("99");
            obj.set_cssclass("btn_WF_PgNum");
            obj.set_visible("true");
            this.Div02.form.Div03.addChild(obj.name, obj);

            obj = new Button("Button01_09","598","0","62","40",null,null,null,null,null,null,this.Div02.form.Div03.form);
            obj.set_taborder("12");
            obj.set_text("다음");
            obj.set_cssclass("btn_WF_PgNext");
            obj.set_visible("true");
            this.Div02.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static00","321","Div03:0","148","39",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("56");
            obj.set_accessibilityenable("false");
            this.Div02.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div02.form.Div00.form
            obj = new Layout("default","",0,0,this.Div02.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Edit01.set_taborder("0");
                p.Edit01.set_cssclass("edt_WF_Sch");
                p.Edit01.set_accessibilitylabel("검색");
                p.Edit01.move("0","0",null,null,"0","0");

                p.Button00.set_taborder("1");
                p.Button00.set_cssclass("btn_WF_EdtSch");
                p.Button00.set_accessibilitylabel("검색");
                p.Button00.move(null,"4","40","40","2",null);
            	}
            );
            this.Div02.form.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div02.form.Div00.form
            obj = new Layout("Layout0","",0,0,this.Div02.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div02.form.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div02.form.Div01.form
            obj = new Layout("default","",0,0,this.Div02.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00.set_taborder("0");
                p.Button00.set_cssclass("btn_WF_SchFilter");
                p.Button00.set_text("");
                p.Button00.set_visible("false");
                p.Button00.set_accessibilitylabel("필터");
                p.Button00.move(null,null,"34","34","0","0");

                p.Static04.set_taborder("1");
                p.Static04.set_text("4");
                p.Static04.set_cssclass("sta_WF_BadgeNum01");
                p.Static04.set_visible("false");
                p.Static04.move("0","0","26","20",null,null);
            	}
            );
            this.Div02.form.Div01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div02.form.Div01.form
            obj = new Layout("Layout0","",0,0,this.Div02.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static04.set_visible("true");

                p.Button00.set_visible("true");
            	}
            );
            this.Div02.form.Div01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div02.form.Div03.form
            obj = new Layout("default","",0,0,this.Div02.form.Div03.form,
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

                p.Static00_05.set_taborder("10");
                p.Static00_05.set_cssclass("sta_WF_Ellipsis");
                p.Static00_05.set_visible("true");
                p.Static00_05.set_accessibilitylabel("줄임");
                p.Static00_05.move("502","0","40","40",null,null);

                p.Button01_08.set_taborder("11");
                p.Button01_08.set_text("99");
                p.Button01_08.set_cssclass("btn_WF_PgNum");
                p.Button01_08.set_visible("true");
                p.Button01_08.move("550","0","40","40",null,null);

                p.Button01_09.set_taborder("12");
                p.Button01_09.set_text("다음");
                p.Button01_09.set_cssclass("btn_WF_PgNext");
                p.Button01_09.set_visible("true");
                p.Button01_09.move("598","0","62","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("8");
            obj.set_flexmainaxisalign("center");
            this.Div02.form.Div03.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div02.form.Div03.form
            obj = new Layout("Layout0","",0,0,this.Div02.form.Div03.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button01_07.set_visible("false");
                p.Button01_07.move("454","0","0","40",null,null);

                p.Button01_06.set_visible("false");
                p.Button01_06.move("406","0","0","40",null,null);

                p.Button01_05.set_visible("false");
                p.Button01_05.move("358","0","0","40",null,null);

                p.Button01_04.set_visible("false");
                p.Button01_04.move("310","0","0","40",null,null);

                p.Button01_03.set_visible("false");
                p.Button01_03.move("262","0","0","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("8");
            obj.set_flexmainaxisalign("center");
            this.Div02.form.Div03.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div02.form.Div03.form
            obj = new Layout("Layout0","",0,0,this.Div02.form.Div03.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("8");
            obj.set_flexmainaxisalign("center");
            this.Div02.form.Div03.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div02.form
            obj = new Layout("default","",0,0,this.Div02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel01.set_taborder("0");
                p.Panel01.set_horizontalgap("16");
                p.Panel01.set_fittocontents("height");
                p.Panel01.set_type("horizontal");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.move("39","39","477","48",null,null);

                p.Div00.set_taborder("1");
                p.Div00.set_text("Div00");
                p.Div00.set_flexgrow("1");
                p.Div00.set_accessibilityenable("false");
                p.Div00.move("39","39","351","48",null,null);

                p.Button00_01.set_taborder("2");
                p.Button00_01.set_text("고급검색");
                p.Button00_01.set_cssclass("btn_WF_MultiSch");
                p.Button00_01.move(null,"39","96","48","357",null);

                p.Panel02.set_taborder("3");
                p.Panel02.set_horizontalgap("12");
                p.Panel02.set_flexcrossaxisalign("center");
                p.Panel02.set_flexmainaxisalign("end");
                p.Panel02.move(null,"Panel01:37","588","39","39",null);

                p.Stafilter.set_taborder("4");
                p.Stafilter.set_text("필터");
                p.Stafilter.set_cssclass("sta_WF_Txt17B");
                p.Stafilter.set_fittocontents("width");
                p.Stafilter.set_visible("false");
                p.Stafilter.move("280","126","31","34",null,null);

                p.Div01.set_taborder("5");
                p.Div01.set_text("");
                p.Div01.set_accessibilityenable("false");
                p.Div01.move("267","130","39","39",null,null);

                p.Panel02_00.set_taborder("6");
                p.Panel02_00.set_horizontalgap("12");
                p.Panel02_00.set_flexcrossaxisalign("center");
                p.Panel02_00.set_visible("true");
                p.Panel02_00.move("0","-1","180","34",null,null);

                p.StaNm.set_taborder("7");
                p.StaNm.set_text("목록 표시 개수");
                p.StaNm.set_cssclass("sta_WF_Txt17B");
                p.StaNm.move("779","2739","102","34",null,null);

                p.Combo00.set_taborder("8");
                p.Combo00.set_cssclass("cbo_WF_TxtCom");
                p.Combo00.set_buttonsize("20 20");
                p.Combo00.set_innerdataset(Div02_form_Combo00_innerdataset);
                p.Combo00.set_codecolumn("codecolumn");
                p.Combo00.set_datacolumn("datacolumn");
                p.Combo00.set_accessibilitylabel("목표표시개수");
                p.Combo00.set_text("12개");
                p.Combo00.set_value("2");
                p.Combo00.set_index("2");
                p.Combo00.move("893","2742","64","30",null,null);

                p.Static16_03.set_taborder("9");
                p.Static16_03.set_text("Static16");
                p.Static16_03.set_cssclass("sta_WF_BtnDivider");
                p.Static16_03.set_visible("true");
                p.Static16_03.move("962","2747","1","16",null,null);

                p.Panel02_01.set_taborder("10");
                p.Panel02_01.set_horizontalgap("12");
                p.Panel02_01.set_flexcrossaxisalign("center");
                p.Panel02_01.set_flexmainaxisalign("spaceevenly");
                p.Panel02_01.move("196","-1","260","34",null,null);

                p.Static00_04.set_taborder("11");
                p.Static00_04.set_text("정렬기준");
                p.Static00_04.set_cssclass("sta_WF_Txt17B");
                p.Static00_04.move("975","2738","61","34",null,null);

                p.Panel02_02.set_taborder("12");
                p.Panel02_02.set_horizontalgap("8");
                p.Panel02_02.set_flexcrossaxisalign("center");
                p.Panel02_02.move("1048","2740","190","34",null,null);

                p.Button01.set_taborder("13");
                p.Button01.set_text("관련도순");
                p.Button01.set_cssclass("btn_WF_TxtLineS");
                p.Button01.set_fittocontents("width");
                p.Button01.move("1048","2740","80","30",null,null);

                p.Button01_00.set_taborder("14");
                p.Button01_00.set_text("최신순");
                p.Button01_00.set_cssclass("btn_WF_TxtLine");
                p.Button01_00.set_fittocontents("width");
                p.Button01_00.set_visible("true");
                p.Button01_00.move("1124","2740","60","30",null,null);

                p.Button01_01.set_taborder("15");
                p.Button01_01.set_text("인기순");
                p.Button01_01.set_cssclass("btn_WF_TxtLine");
                p.Button01_01.set_fittocontents("width");
                p.Button01_01.set_visible("true");
                p.Button01_01.move("1183","2740","60","30",null,null);

                p.Static00_06.set_taborder("16");
                p.Static00_06.set_text("검색 결과 <fc v=\'#0B50D0\'><b v=\'true\'>249</b></fc>건");
                p.Static00_06.set_usedecorate("true");
                p.Static00_06.set_cssclass("sta_WF_Txt17B");
                p.Static00_06.set_fittocontents("width");
                p.Static00_06.move("39","Panel01:37","130","39",null,null);

                p.Panel03.set_taborder("17");
                p.Panel03.set_cssclass("pnl_WF_Detailbox");
                p.Panel03.set_spacing("32px");
                p.Panel03.set_type("horizontal");
                p.Panel03.set_verticalgap("24");
                p.Panel03.set_flexgrow("1");
                p.Panel03.set_fittocontents("height");
                p.Panel03.set_horizontalgap("0");
                p.Panel03.move("39","Static00_06:20",null,"332","39",null);

                p.Panel09_00.set_taborder("18");
                p.Panel09_00.set_type("vertical");
                p.Panel09_00.set_verticalgap("16");
                p.Panel09_00.set_fittocontents("height");
                p.Panel09_00.set_flexgrow("1");
                p.Panel09_00.move("185","1673","100%","268",null,null);

                p.Panel04_00_00.set_taborder("19");
                p.Panel04_00_00.set_flexmainaxisalign("start");
                p.Panel04_00_00.set_flexcrossaxisalign("center");
                p.Panel04_00_00.set_spacing("0px");
                p.Panel04_00_00.set_verticalgap("24");
                p.Panel04_00_00.set_fittocontents("height");
                p.Panel04_00_00.move("640","367","100%","32",null,null);

                p.Static00_04_00.set_taborder("20");
                p.Static00_04_00.set_text("신청중");
                p.Static00_04_00.set_cssclass("sta_WF_BadgeLit01");
                p.Static00_04_00.set_fittocontents("width");
                p.Static00_04_00.move("121","343","61","26",null,null);

                p.Panel05_00_00.set_taborder("21");
                p.Panel05_00_00.set_horizontalgap("16");
                p.Panel05_00_00.set_flexmainaxisalign("end");
                p.Panel05_00_00.set_flexgrow("1");
                p.Panel05_00_00.set_flexcrossaxisalign("start");
                p.Panel05_00_00.move("60","24","175","32",null,null);

                p.Button01_03_00.set_taborder("22");
                p.Button01_03_00.set_text("공유하기");
                p.Button01_03_00.set_cssclass("btn_WF_Share");
                p.Button01_03_00.move("185","340","96","32",null,null);

                p.Button01_00_01_00.set_taborder("23");
                p.Button01_00_01_00.set_text("찜하기");
                p.Button01_00_01_00.set_cssclass("btn_WF_Heart");
                p.Button01_00_01_00.move("295","340","79","32",null,null);

                p.Panel11_00.set_taborder("24");
                p.Panel11_00.set_fittocontents("height");
                p.Panel11_00.set_verticalgap("16");
                p.Panel11_00.move("185","1751","100%","155",null,null);

                p.Panel10_00.set_taborder("25");
                p.Panel10_00.set_type("vertical");
                p.Panel10_00.set_fittocontents("height");
                p.Panel10_00.set_verticalgap("16");
                p.Panel10_00.set_spacing("0px 0px 16px 0px");
                p.Panel10_00.move("112","1126","90%","155",null,null);

                p.Button06_01_00.set_taborder("26");
                p.Button06_01_00.set_text("산모∙신생아 건강관리 지원사업");
                p.Button06_01_00.set_cssclass("btn_WF_TitLink");
                p.Button06_01_00.set_fittocontents("width");
                p.Button06_01_00.move("105","368","287","29",null,null);

                p.Static19_01_00.set_taborder("27");
                p.Static19_01_00.set_text("간단한 설명이 들어가는 영역입니다. 최대 3줄까지 작성합니다. 간단한 설명이 들어가는 영역입니다. 간단한 설명이 들어가는 영역입니다. ");
                p.Static19_01_00.set_fittocontents("height");
                p.Static19_01_00.set_cssclass("sta_WF_Para17RG");
                p.Static19_01_00.move("185","1796","94.36%","52",null,null);

                p.Panel06_01_00.set_taborder("28");
                p.Panel06_01_00.set_horizontalgap("8");
                p.Panel06_01_00.move("95","530","320","26",null,null);

                p.Static14_00_02_00.set_taborder("29");
                p.Static14_00_02_00.set_text("신청 기간");
                p.Static14_00_02_00.set_cssclass("sta_WF_Txt19B");
                p.Static14_00_02_00.move("95","530","83","26",null,null);

                p.Static14_00_00_01_00.set_taborder("30");
                p.Static14_00_00_01_00.set_text("2023.11.01-2024.04.30");
                p.Static14_00_00_01_00.move("42","530","223","26",null,null);

                p.Panel02_01_00.set_taborder("31");
                p.Panel02_01_00.set_horizontalgap("8");
                p.Panel02_01_00.set_flexmainaxisalign("end");
                p.Panel02_01_00.set_spacing("0");
                p.Panel02_01_00.set_fittocontents("height");
                p.Panel02_01_00.set_flexgrow("1");
                p.Panel02_01_00.move("126","666","120","80",null,null);

                p.Button00_04_00.set_taborder("32");
                p.Button00_04_00.set_text("신청하기");
                p.Button00_04_00.set_cssclass("btn_WF_Custom");
                p.Button00_04_00.move("262","666","112","48",null,null);

                p.Panel01_01_00.set_taborder("33");
                p.Panel01_01_00.set_horizontalgap("8");
                p.Panel01_01_00.set_spacing("16px 0px 0px 0px");
                p.Panel01_01_00.set_cssclass("pnl_WF_Topline");
                p.Panel01_01_00.set_verticalgap("8");
                p.Panel01_01_00.set_flexwrap("wrap");
                p.Panel01_01_00.set_fittocontents("height");
                p.Panel01_01_00.move("185","1983","100.00%","49",null,null);

                p.Button00_00_00_06_00.set_taborder("34");
                p.Button00_00_00_06_00.set_text("#청소년");
                p.Button00_00_00_06_00.set_cssclass("btn_WF_Tagline");
                p.Button00_00_00_06_00.set_fittocontents("width");
                p.Button00_00_00_06_00.set_accessibilitylabel("태그");
                p.Button00_00_00_06_00.move("103","804","75","32",null,null);

                p.Button00_00_00_00_01_00.set_taborder("35");
                p.Button00_00_00_00_01_00.set_text("#영유아");
                p.Button00_00_00_00_01_00.set_cssclass("btn_WF_Tagline");
                p.Button00_00_00_00_01_00.set_fittocontents("width");
                p.Button00_00_00_00_01_00.set_accessibilitylabel("태그");
                p.Button00_00_00_00_01_00.move("163","804","75","32",null,null);

                p.Panel03_00.set_taborder("36");
                p.Panel03_00.set_cssclass("pnl_WF_Detailbox");
                p.Panel03_00.set_spacing("32px");
                p.Panel03_00.set_type("horizontal");
                p.Panel03_00.set_verticalgap("24");
                p.Panel03_00.set_flexgrow("1");
                p.Panel03_00.set_fittocontents("height");
                p.Panel03_00.set_horizontalgap("0");
                p.Panel03_00.move("39","Panel03:24",null,"332","39",null);

                p.Panel09_00_00.set_taborder("37");
                p.Panel09_00_00.set_type("vertical");
                p.Panel09_00_00.set_verticalgap("16");
                p.Panel09_00_00.set_fittocontents("height");
                p.Panel09_00_00.set_flexgrow("1");
                p.Panel09_00_00.move("185","1673","100%","268",null,null);

                p.Panel04_00_00_00.set_taborder("38");
                p.Panel04_00_00_00.set_flexmainaxisalign("start");
                p.Panel04_00_00_00.set_flexcrossaxisalign("center");
                p.Panel04_00_00_00.set_spacing("0px");
                p.Panel04_00_00_00.set_verticalgap("24");
                p.Panel04_00_00_00.set_fittocontents("height");
                p.Panel04_00_00_00.move("640","367","100%","32",null,null);

                p.Static00_04_00_00.set_taborder("39");
                p.Static00_04_00_00.set_text("신청중");
                p.Static00_04_00_00.set_cssclass("sta_WF_BadgeLit01");
                p.Static00_04_00_00.set_fittocontents("width");
                p.Static00_04_00_00.move("121","343","61","26",null,null);

                p.Panel05_00_00_00.set_taborder("40");
                p.Panel05_00_00_00.set_horizontalgap("16");
                p.Panel05_00_00_00.set_flexmainaxisalign("end");
                p.Panel05_00_00_00.set_flexgrow("1");
                p.Panel05_00_00_00.set_flexcrossaxisalign("start");
                p.Panel05_00_00_00.move("60","24","175","32",null,null);

                p.Button01_03_00_00.set_taborder("41");
                p.Button01_03_00_00.set_text("공유하기");
                p.Button01_03_00_00.set_cssclass("btn_WF_Share");
                p.Button01_03_00_00.move("185","340","96","32",null,null);

                p.Button01_00_01_00_00.set_taborder("42");
                p.Button01_00_01_00_00.set_text("찜하기");
                p.Button01_00_01_00_00.set_cssclass("btn_WF_Heart");
                p.Button01_00_01_00_00.move("295","340","79","32",null,null);

                p.Panel11_00_00.set_taborder("43");
                p.Panel11_00_00.set_fittocontents("height");
                p.Panel11_00_00.set_verticalgap("16");
                p.Panel11_00_00.move("185","1751","100%","155",null,null);

                p.Panel10_00_00.set_taborder("44");
                p.Panel10_00_00.set_type("vertical");
                p.Panel10_00_00.set_fittocontents("height");
                p.Panel10_00_00.set_verticalgap("16");
                p.Panel10_00_00.set_spacing("0px 0px 16px 0px");
                p.Panel10_00_00.move("112","1126","90%","155",null,null);

                p.Button06_01_00_00.set_taborder("45");
                p.Button06_01_00_00.set_text("저소득층 기저귀∙조제분유 지원");
                p.Button06_01_00_00.set_cssclass("btn_WF_TitLink");
                p.Button06_01_00_00.set_fittocontents("width");
                p.Button06_01_00_00.move("105","368","293","29",null,null);

                p.Static19_01_00_00.set_taborder("46");
                p.Static19_01_00_00.set_text("간단한 설명이 들어가는 영역입니다. 최대 3줄까지 작성합니다. 간단한 설명이 들어가는 영역입니다. 간단한 설명이 들어가는 영역입니다. ");
                p.Static19_01_00_00.set_fittocontents("height");
                p.Static19_01_00_00.set_cssclass("sta_WF_Para17RG");
                p.Static19_01_00_00.move("185","1796","94.36%","52",null,null);

                p.Panel06_01_00_00.set_taborder("47");
                p.Panel06_01_00_00.set_horizontalgap("8");
                p.Panel06_01_00_00.move("95","530","320","26",null,null);

                p.Static14_00_02_00_00.set_taborder("48");
                p.Static14_00_02_00_00.set_text("신청 기간");
                p.Static14_00_02_00_00.set_cssclass("sta_WF_Txt19B");
                p.Static14_00_02_00_00.move("95","530","83","26",null,null);

                p.Static14_00_00_01_00_00.set_taborder("49");
                p.Static14_00_00_01_00_00.set_text("2023.11.01-2024.04.30");
                p.Static14_00_00_01_00_00.move("42","530","223","26",null,null);

                p.Panel02_01_00_00.set_taborder("50");
                p.Panel02_01_00_00.set_horizontalgap("8");
                p.Panel02_01_00_00.set_flexmainaxisalign("end");
                p.Panel02_01_00_00.set_spacing("0");
                p.Panel02_01_00_00.set_fittocontents("height");
                p.Panel02_01_00_00.set_flexgrow("1");
                p.Panel02_01_00_00.move("126","666","120","80",null,null);

                p.Button00_04_00_00.set_taborder("51");
                p.Button00_04_00_00.set_text("신청하기");
                p.Button00_04_00_00.set_cssclass("btn_WF_Custom");
                p.Button00_04_00_00.move("262","666","112","48",null,null);

                p.Panel01_01_00_00.set_taborder("52");
                p.Panel01_01_00_00.set_horizontalgap("8");
                p.Panel01_01_00_00.set_spacing("16px 0px 0px 0px");
                p.Panel01_01_00_00.set_cssclass("pnl_WF_Topline");
                p.Panel01_01_00_00.set_verticalgap("8");
                p.Panel01_01_00_00.set_flexwrap("wrap");
                p.Panel01_01_00_00.set_fittocontents("height");
                p.Panel01_01_00_00.move("185","1983","100.00%","49",null,null);

                p.Button00_00_00_06_00_00.set_taborder("53");
                p.Button00_00_00_06_00_00.set_text("#청소년");
                p.Button00_00_00_06_00_00.set_cssclass("btn_WF_Tagline");
                p.Button00_00_00_06_00_00.set_fittocontents("width");
                p.Button00_00_00_06_00_00.set_accessibilitylabel("태그");
                p.Button00_00_00_06_00_00.move("103","804","75","32",null,null);

                p.Button00_00_00_00_01_00_00.set_taborder("54");
                p.Button00_00_00_00_01_00_00.set_text("#영유아");
                p.Button00_00_00_00_01_00_00.set_cssclass("btn_WF_Tagline");
                p.Button00_00_00_00_01_00_00.set_fittocontents("width");
                p.Button00_00_00_00_01_00_00.set_accessibilitylabel("태그");
                p.Button00_00_00_00_01_00_00.move("163","804","75","32",null,null);

                p.Div03.set_taborder("55");
                p.Div03.set_text("Div06");
                p.Div03.set_accessibilityenable("false");
                p.Div03.move("39","Panel03_00:24",null,"40","39",null);

                p.Static00.set_taborder("56");
                p.Static00.set_accessibilityenable("false");
                p.Static00.move("321","Div03:0","148","39",null,null);
            	}
            );
            this.Div02.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div02.form
            obj = new Layout("Layout0","",0,0,this.Div02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel01.set_verticalgap("16");
                p.Panel01.move("15","39",null,"112","15",null);

                p.Panel02.set_flexwrap("wrap");
                p.Panel02.set_verticalgap("8");
                p.Panel02.move(null,"Panel01:40","447","34","15",null);


                p.Static00_06.move("15","Panel02:24","130","32",null,null);

                p.Button01_01.set_visible("false");
                p.Button01_01.move("1183","2740","0","26",null,null);

                p.Button01_00.set_visible("false");
                p.Button01_00.move("1124","2740","0","26",null,null);

                p.StaNm.set_text("목록 표시 개수");
                p.StaNm.set_visible("false");
                p.StaNm.move("779","2739","102","34",null,null);

                p.Panel03.move("15","305",null,"423","15",null);

                p.Panel03_00.move("15","Panel03:24",null,"423","15",null);

                p.Panel11_00.set_flexwrap("wrap");
                p.Panel11_00.move("185","1751","100%","244",null,null);

                p.Panel10_00.move("112","1126","100%","155",null,null);

                p.Panel09_00.move("185","1673","100%","357",null,null);

                p.Panel02_01_00.set_flexmainaxisalign("end");
                p.Panel02_01_00.move("126","666","120","48",null,null);

                p.Panel02_01.set_flexmainaxisalign("end");
                p.Panel02_01.set_fittocontents("width");
                p.Panel02_01.move("196","-1","150","32",null,null);

                p.Panel02_02.set_fittocontents("width");
                p.Panel02_02.set_horizontalgap("0");
                p.Panel02_02.move("1048","2740","72","26",null,null);

                p.Panel10_00_00.move("112","1126","100%","155",null,null);

                p.Panel11_00_00.set_flexwrap("wrap");
                p.Panel11_00_00.move("185","1751","100%","244",null,null);

                p.Panel09_00_00.move("185","1673","100%","357",null,null);

                p.Panel02_01_00_00.move("126","666","120","48",null,null);

                p.Div03.set_text("Div06");
                p.Div03.move("16","1199",null,"40","16",null);

                p.Combo00.set_visible("false");
                p.Combo00.move("893","2742","57","26",null,null);

                p.Stafilter.set_visible("true");

                p.Panel02_00.set_visible("false");
            	}
            );
            this.Div02.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",888,1590,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("목록 탐색");

                p.staH2.set_taborder("0");
                p.staH2.set_text("목록 탐색");
                p.staH2.set_cssclass("sta_WF_H2_pc");
                p.staH2.set_fittocontents("width");
                p.staH2.set_accessibilityrole("heading2");
                p.staH2.move("0","0","150","60",null,null);

                p.staDivider.set_taborder("1");
                p.staDivider.set_cssclass("sta_WF_line");
                p.staDivider.set_accessibilityenable("false");
                p.staDivider.move("staH2:15","20","1","21",null,null);

                p.staEtit.set_taborder("2");
                p.staEtit.set_text("Search Context");
                p.staEtit.set_cssclass("sta_WF_ParaH4_pc");
                p.staEtit.move("staDivider:15","0","220","60",null,null);

                p.Static00.set_taborder("3");
                p.Static00.set_text("목록은 의미적으로 관련 있는 다수의 데이터를 연속적으로 배열한 색인이다. 사용자는 목록에서 특정한 항목을 찾고 항목과 관련된 기능을 수행한다. 사용자가 목록에서 원하는 정보를 효과적으로 탐색할 수 있도록 목록의 항목은 일관성 있는 형식과 배치를 유지하고 논리적 순서에 따라 배열되어야 한다.");
                p.Static00.set_cssclass("sta_WF_Descript");
                p.Static00.set_fittocontents("height");
                p.Static00.move("0","85",null,"126","0",null);

                p.Static00_01.set_taborder("4");
                p.Static00_01.set_text("유형");
                p.Static00_01.set_cssclass("sta_WF_H2_pc");
                p.Static00_01.set_accessibilityrole("heading3");
                p.Static00_01.move("0","Static00:80","300","60",null,null);

                p.Static00_02.set_taborder("5");
                p.Static00_02.set_text("예시");
                p.Static00_02.set_cssclass("sta_WF_ParaH3_pc");
                p.Static00_02.set_accessibilityrole("heading4");
                p.Static00_02.move("0","Static00_01:48","300","38",null,null);

                p.Static00_03.set_taborder("6");
                p.Static00_03.set_text("기본");
                p.Static00_03.set_cssclass("sta_WF_H5");
                p.Static00_03.set_accessibilityrole("heading5");
                p.Static00_03.move("0","Static00_02:40","278","32",null,null);

                p.Div02.set_taborder("7");
                p.Div02.set_cssclass("div_WF_Detailbox");
                p.Div02.set_text("");
                p.Div02.set_fittocontents("height");
                p.Div02.set_accessibilityenable("false");
                p.Div02.set_tabstop("false");
                p.Div02.move("0","Static00_03:24",null,"983","0",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Desktop_screen,mobile_small",480,1890,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Div02.move("0","Static00_03:24",null,"1280","0",null);

                p.Static00.move("0","85",null,"204","0",null);

                p.Static00_02.move("0","Static00_01:48",null,"38","20",null);

                p.Static00_01.move("0","Static00:80",null,"60","20",null);
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
        this.registerScript("pattern04.xfdl", function() {

        this.pattern04_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.pattern04_onload,this);
            this.Div02.form.Div00.form.Edit01.addEventHandler("onchanged",this.Div02_Div00_Edit03_onchanged,this);
            this.Div02.form.Div01.form.Button00.addEventHandler("onclick",this.Div02_Div01_Button00_onclick,this);
        };
        this.loadIncludeScript("pattern04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
