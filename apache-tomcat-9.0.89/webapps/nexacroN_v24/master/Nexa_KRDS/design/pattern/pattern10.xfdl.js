(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("pattern10");
            this.set_titletext("필터링∙정렬");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,6420);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staH2","0","0","190","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("필터링∙정렬");
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
            obj.set_text("Filter∙Align");
            obj.set_cssclass("sta_WF_ParaH3_pc");
            this.addChild(obj.name, obj);

            obj = new Static("staDescript","0","85",null,"126","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("필터링·정렬은 데이터 집합에서 사용자가 원하는 속성과 범주에 속하는 데이터 항목을 선별적으로 표시하거나 특정 속성/범주를 기준으로 조직화하는 방법이다. 필터링·정렬을 이용하면 데이터 목록에서 탐색할 범위를 좁힐 수 있기 때문에 검색 결과 등 목록을 탐색하여 원하는 정보를 찾는 시간을 줄일 수 있다.");
            obj.set_cssclass("sta_WF_Descript");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","staDescript:80","300","60",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("구조");
            obj.set_cssclass("sta_WF_H3_pc");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","Static00_00:24",null,"543","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_cssclass("div_GUIDE_SubBg");
            obj.set_fittocontents("height");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","39","39",null,"464","39",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Detailbox");
            obj.set_fittocontents("height");
            obj.set_accessibilityenable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel00","39","39",null,"48","39",null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("16");
            obj.set_verticalgap("16");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Combo00\"/><PanelItem id=\"PanelItem01\" componentid=\"Div00\"/></Contents>");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","39","39","180","48",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("1");
            obj.set_displaynulltext("전체");
            obj.set_accessibilitylabel("검색");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div00","196","39","392","48",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_accessibilityenable("false");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01","0","0",null,null,"0","0",null,null,null,null,this.Div00.form.Div00.form.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_Sch");
            obj.set_accessibilitylabel("검색");
            this.Div00.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00",null,"4","40","40","2",null,null,null,null,null,this.Div00.form.Div00.form.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            obj.set_accessibilitylabel("검색");
            this.Div00.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel01","39","Panel00:44",null,"215","39",null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("3");
            obj.set_horizontalgap("24");
            obj.set_spacing("39px");
            obj.set_cssclass("pnl_WF_SchBar");
            obj.set_verticalgap("24");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Static00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel02\"/></Contents>");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","40","131","279","48",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("4");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"StaDt01\"/><PanelItem id=\"PanelItem03\" componentid=\"Combo00_00\"/></Contents>");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("StaDt01","70","64","100","48",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("5");
            obj.set_text("정책분야");
            obj.set_cssclass("sta_WF_SchDetail");
            obj.set_flexshrink("0");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","518","296","100%","48",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("6");
            obj.set_flexgrow("1");
            obj.set_displaynulltext("전체");
            obj.set_accessibilitylabel("정책분야");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_02","40","201","279","48",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("7");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"StaDt02\"/><PanelItem id=\"PanelItem03\" componentid=\"Combo00_00_00\"/></Contents>");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("StaDt02","70","64","100","48",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("8");
            obj.set_text("대상자");
            obj.set_cssclass("sta_WF_SchDetail");
            obj.set_flexshrink("0");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00","518","296","100%","48",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("9");
            obj.set_flexgrow("1");
            obj.set_displaynulltext("전체");
            obj.set_accessibilitylabel("대상자");
            obj.set_text("");
            obj.set_value("전체");
            obj.set_index("-1");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","39","39","100%","1",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_Divider");
            obj.set_visible("true");
            obj.set_accessibilityenable("false");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel02","39","136","100%","40",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("11");
            obj.set_horizontalgap("16");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static04_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00\"/></Contents>");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static04_00_01","78","267","142","40",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("12");
            obj.set_text("적용된 검색조건 <fc v=\'#0B50D0\'>3</fc>");
            obj.set_flexshrink("0");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_SchDetail");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","244","267","366","40",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("13");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("8");
            obj.set_verticalgap("8");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Button00\"/><PanelItem id=\"PanelItem10\" componentid=\"Button00_01_05\"/><PanelItem id=\"PanelItem00\" componentid=\"Button00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00_01_00\"/></Contents>");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","205","279","40","40",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_TagReset");
            obj.set_visible("true");
            obj.set_accessibilitylabel("새로고침");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_05","974","2580","81","40",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("15");
            obj.set_text("장애인");
            obj.set_cssclass("btn_WF_Tag");
            obj.set_visible("true");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01","530","2580","96","40",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("16");
            obj.set_text("직무경험");
            obj.set_cssclass("btn_WF_Tag");
            obj.set_visible("true");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00","604","2580","96","40",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("17");
            obj.set_text("비용지급");
            obj.set_cssclass("btn_WF_Tag");
            obj.set_visible("false");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel02_03",null,"Panel01:37","555","39","39",null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("18");
            obj.set_horizontalgap("12");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"StaFilter\"/><PanelItem id=\"PanelItem06\" componentid=\"Div01\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static16_03\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02_01\"/></Contents>");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("StaFilter","280","126","31","34",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("19");
            obj.set_text("필터");
            obj.set_cssclass("sta_WF_Txt17B");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","267","130","39","39",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("20");
            obj.set_text("");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00",null,null,"34","34","0","0",null,null,null,null,this.Div00.form.Div00.form.Div01.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_SchFilter");
            obj.set_text("");
            obj.set_visible("false");
            obj.set_accessibilitylabel("필터");
            this.Div00.form.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static04","0","0","26","20",null,null,null,null,null,null,this.Div00.form.Div00.form.Div01.form);
            obj.set_taborder("1");
            obj.set_text("4");
            obj.set_cssclass("sta_WF_BadgeNum01");
            obj.set_visible("false");
            this.Div00.form.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","0","-1","180","34",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("21");
            obj.set_horizontalgap("12");
            obj.set_flexcrossaxisalign("center");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"StaDt04\"/><PanelItem id=\"PanelItem01\" componentid=\"Combo00_01\"/></Contents>");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("StaDt04","779","2739","102","34",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("22");
            obj.set_text("목록 표시 개수");
            obj.set_cssclass("sta_WF_Txt17B");
            obj.set_visible("true");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_01","893","2742","64","26",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("23");
            obj.set_cssclass("cbo_WF_TxtCom");
            obj.set_buttonsize("20 20");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_visible("true");
            obj.set_accessibilitylabel("목록 표시 개수");
            var Div00_form_Div00_form_Combo00_01_innerdataset = new nexacro.NormalDataset("Div00_form_Div00_form_Combo00_01_innerdataset", obj);
            Div00_form_Div00_form_Combo00_01_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "4개"},{"codecolumn" : "1","datacolumn" : "8개"},{"codecolumn" : "2","datacolumn" : "12개"},{"codecolumn" : "3","datacolumn" : "16개"}]});
            obj.set_innerdataset(Div00_form_Div00_form_Combo00_01_innerdataset);
            obj.set_text("12");
            obj.set_value("2");
            obj.set_index("2");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static16_03","962","2747","1","16",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("24");
            obj.set_text("Static16");
            obj.set_cssclass("sta_WF_BtnDivider");
            obj.set_visible("true");
            obj.set_accessibilityenable("false");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel02_01","196","-1","260","34",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("25");
            obj.set_horizontalgap("12");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("spaceevenly");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_04\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02_02\"/></Contents>");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_04","975","2738","61","34",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("26");
            obj.set_text("정렬기준");
            obj.set_cssclass("sta_WF_Txt17B");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel02_02","1048","2740","190","30",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("27");
            obj.set_horizontalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button01\"/><PanelItem id=\"PanelItem01\" componentid=\"Button01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Button01_01\"/></Contents>");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button01","1048","2740","80","30",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("28");
            obj.set_text("관련도순");
            obj.set_cssclass("btn_WF_TxtLineS");
            obj.set_fittocontents("width");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button01_00","1124","2740","60","30",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("29");
            obj.set_text("최신순");
            obj.set_cssclass("btn_WF_TxtLine");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button01_01","1183","2740","60","30",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("30");
            obj.set_text("인기순");
            obj.set_cssclass("btn_WF_TxtLine");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_06","39","Panel01:37","119","39",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("31");
            obj.set_text("검색 결과 <fc v=\'#0B50D0\'><b v=\'true\'>249</b></fc>건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Txt17B");
            obj.set_fittocontents("width");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","39","Static00_06:0","60","40",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("32");
            obj.set_accessibilityenable("false");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","39","Div00:0","60","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("33");
            obj.set_accessibilityenable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_03","0","Div00:40","278","32",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("텍스트 필터(Text)");
            obj.set_cssclass("sta_WF_H5");
            obj.set_accessibilityrole("heading5");
            this.addChild(obj.name, obj);

            obj = new Div("Div02","0","Static00_03:24",null,"208","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div02");
            obj.set_cssclass("div_GUIDE_SubBg");
            obj.set_fittocontents("height");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","39","39","53.71621621621622%","128",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("16");
            obj.set_fittocontents("height");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"StaDt01\"/><PanelItem id=\"PanelItem00\" componentid=\"Div00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00_01\"/></Contents>");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("StaDt01","84","47","280","23",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_text("레이블");
            obj.set_cssclass("sta_WF_Lable15R");
            this.Div02.addChild(obj.name, obj);

            obj = new Div("Div00","39","39","365","48",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_flexgrow("1");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit01","0","0",null,null,"0","0",null,null,null,null,this.Div02.form.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_Sch");
            obj.set_accessibilitylabel("레이블");
            this.Div02.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00",null,"4","40","40","2",null,null,null,null,null,this.Div02.form.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            obj.set_accessibilitylabel("레이블검색");
            this.Div02.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01","381","39","96","48",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            obj.set_text("고급검색");
            obj.set_cssclass("btn_WF_MultiSch");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static00_04","0","Div02:40","278","32",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("스코프 필터(Scope)");
            obj.set_cssclass("sta_WF_H5");
            obj.set_accessibilityrole("heading5");
            this.addChild(obj.name, obj);

            obj = new Div("Div03","0","Static00_04:24",null,"230","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Div03");
            obj.set_cssclass("div_GUIDE_SubBg");
            obj.set_fittocontents("height");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("StaDt00","144","26","74.87623762376238%","29",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("0");
            obj.set_text("레이블");
            obj.set_cssclass("sta_WF_Txt19B");
            this.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel01","144","60","74.87623762376238%","79",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("1");
            obj.set_horizontalgap("16");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("16");
            obj.set_flexcrossaxisalign("end");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Button00\"/></Contents>");
            this.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00","84","47","200","79",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"StaDt01\"/><PanelItem id=\"PanelItem03\" componentid=\"Combo00\"/></Contents>");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("StaDt01","84","47","100%","23",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("3");
            obj.set_text("레이블");
            obj.set_cssclass("sta_WF_Lable15R");
            this.Div03.addChild(obj.name, obj);

            obj = new Combo("Combo00","144","106","100%","48",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("4");
            obj.set_displaynulltext("선텍해주세요");
            obj.set_accessibilitylabel("레이블");
            obj.set_value("");
            obj.set_index("-1");
            this.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","94","57","280","79",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"StaDt02\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit00\"/></Contents>");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("StaDt02","94","57","100%","23",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_Lable15R");
            obj.set_visible("true");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit00","395","107","100%","48",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("7");
            obj.set_displaynulltext("내용을 입력하세요");
            obj.set_accessibilitylabel("레이블");
            this.Div03.addChild(obj.name, obj);

            obj = new Button("Button00","671","98","78","48",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("8");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_Custom");
            obj.set_flexgrow("1");
            obj.set_accessibilitylabel("레이블");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static00_05","0","Div03:40","278","32",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("선택형 필터(Selection)");
            obj.set_cssclass("sta_WF_H5");
            obj.set_accessibilityrole("heading5");
            this.addChild(obj.name, obj);

            obj = new Div("Div04","0","Static00_05:24",null,"200","0",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Div04");
            obj.set_cssclass("div_GUIDE_SubBg");
            obj.set_fittocontents("height");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","39","39","91.21621621621621%","48",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("24");
            obj.set_verticalgap("16");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_02_00\"/></Contents>");
            this.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","39","39","228","48",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("1");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"StaDt00\"/><PanelItem id=\"PanelItem03\" componentid=\"Combo00_00\"/></Contents>");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("StaDt00","70","64","60","48",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("2");
            obj.set_text("레이블");
            obj.set_cssclass("sta_WF_SchDetail");
            obj.set_flexshrink("0");
            this.Div04.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","518","296","100%","48",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("3");
            obj.set_flexgrow("1");
            obj.set_displaynulltext("선텍해주세요");
            obj.set_accessibilitylabel("레이블");
            obj.set_text("");
            obj.set_value("선텍해주세요");
            obj.set_index("-1");
            this.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_02","342","39","228","48",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("4");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"StaDt01\"/><PanelItem id=\"PanelItem03\" componentid=\"Combo00_00_00\"/></Contents>");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("StaDt01","80","74","60","48",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("5");
            obj.set_text("레이블");
            obj.set_cssclass("sta_WF_SchDetail");
            obj.set_flexshrink("0");
            this.Div04.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00","528","306","100%","48",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("6");
            obj.set_flexgrow("1");
            obj.set_displaynulltext("선텍해주세요");
            obj.set_accessibilitylabel("레이블");
            obj.set_text("");
            obj.set_value("선텍해주세요");
            obj.set_index("-1");
            this.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_02_00","641","36","228","48",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("7");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"StaDt02\"/><PanelItem id=\"PanelItem03\" componentid=\"Combo00_00_00_00\"/></Contents>");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("StaDt02","80","74","60","48",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("8");
            obj.set_text("레이블");
            obj.set_cssclass("sta_WF_SchDetail");
            obj.set_flexshrink("0");
            this.Div04.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00_00","528","306","100%","48",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("9");
            obj.set_flexgrow("1");
            obj.set_displaynulltext("선텍해주세요");
            obj.set_accessibilitylabel("레이블");
            obj.set_text("");
            obj.set_value("선텍해주세요");
            obj.set_index("-1");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static00_06","0","Div04:40","278","32",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("범위 필터(Range)");
            obj.set_cssclass("sta_WF_H5");
            obj.set_accessibilityrole("heading5");
            this.addChild(obj.name, obj);

            obj = new Div("Div05","0","Static00_06:24",null,"204","0",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Div05");
            obj.set_cssclass("div_GUIDE_SubBg");
            obj.set_fittocontents("height");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","144","26","71.2871287128713%","29",null,null,null,null,null,null,this.Div05.form);
            obj.set_taborder("0");
            obj.set_text("레이블");
            obj.set_cssclass("sta_WF_Txt19B");
            this.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel01","144","60","71.2871287128713%","79",null,null,null,null,null,null,this.Div05.form);
            obj.set_taborder("1");
            obj.set_horizontalgap("16");
            obj.set_flexcrossaxisalign("end");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("24");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00\"/></Contents>");
            this.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel00","84","47","280","79",null,null,null,null,null,null,this.Div05.form);
            obj.set_taborder("2");
            obj.set_verticalgap("8");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"StaDt01\"/><PanelItem id=\"PanelItem01\" componentid=\"Calendar00\"/></Contents>");
            this.Div05.addChild(obj.name, obj);

            obj = new Static("StaDt01","84","47","100%","23",null,null,null,null,null,null,this.Div05.form);
            obj.set_taborder("3");
            obj.set_text("시작날짜");
            obj.set_cssclass("sta_WF_Lable15R");
            this.Div05.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","502","141","100%","48",null,null,null,null,null,null,this.Div05.form);
            obj.set_taborder("4");
            obj.set_value("20241002");
            obj.set_dateformat("yyyy.MM.dd ddd");
            obj.set_editformat("yyyy.MM.dd");
            obj.set_daysize("44 44");
            obj.set_popupsize("384 437");
            obj.set_headheight("56");
            obj.set_usetrailingday("true");
            obj.set_accessibilitylabel("시작날짜");
            this.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","94","57","280","79",null,null,null,null,null,null,this.Div05.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"StaDt02\"/><PanelItem id=\"PanelItem01\" componentid=\"Calendar00_00\"/></Contents>");
            this.Div05.addChild(obj.name, obj);

            obj = new Static("StaDt02","94","57","100%","23",null,null,null,null,null,null,this.Div05.form);
            obj.set_taborder("6");
            obj.set_text("종료날짜");
            obj.set_cssclass("sta_WF_Lable15R");
            this.Div05.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00","512","151","100%","48",null,null,null,null,null,null,this.Div05.form);
            obj.set_taborder("7");
            obj.set_editformat("yyyy.MM.dd");
            obj.set_dateformat("yyyy.MM.dd ddd");
            obj.set_value("20241202");
            obj.set_daysize("44 44");
            obj.set_popupsize("384 437");
            obj.set_headheight("56");
            obj.set_usetrailingday("true");
            obj.set_accessibilitylabel("종료날짜");
            this.Div05.addChild(obj.name, obj);

            obj = new Static("Static00_07","0","Div05:40","278","32",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("쿼리 필터(Query)");
            obj.set_cssclass("sta_WF_H5");
            obj.set_accessibilityrole("heading5");
            this.addChild(obj.name, obj);

            obj = new Div("Div06","0","Static00_07:24",null,"584","0",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Div06");
            obj.set_cssclass("div_GUIDE_SubBg");
            obj.set_fittocontents("height");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("StaDt00","156","39","75%","29",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("0");
            obj.set_text("레이블");
            obj.set_cssclass("sta_WF_Txt19B");
            this.Div06.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","257","241","390","79",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("1");
            obj.set_type("vertical");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"StaDt01\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit00\"/></Contents>");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("StaDt01","94","57","100%","23",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Lable15R");
            obj.set_text("레이블");
            this.Div06.addChild(obj.name, obj);

            obj = new Edit("Edit00","395","107","100%","48",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("3");
            obj.set_displaynulltext("내용을 입력하세요");
            obj.set_accessibilitylabel("레이블");
            this.Div06.addChild(obj.name, obj);

            obj = new Panel("Panel00","10","10","200","79",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"StaDt02\"/><PanelItem id=\"PanelItem03\" componentid=\"Combo00\"/></Contents>");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("StaDt02","141","98","100%","23",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("5");
            obj.set_text("조건설정");
            obj.set_cssclass("sta_WF_Lable15R");
            this.Div06.addChild(obj.name, obj);

            obj = new Combo("Combo00","144","106","100%","48",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("6");
            obj.set_displaynulltext("선텍해주세요");
            obj.set_accessibilitylabel("조건설정");
            obj.set_text("");
            obj.set_value("선텍해주세요");
            obj.set_index("-1");
            this.Div06.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","10","10","390","79",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("7");
            obj.set_type("vertical");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"StaDt03\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit00_00\"/></Contents>");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("StaDt03","94","57","100%","23",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_Lable15R");
            obj.set_text("레이블");
            this.Div06.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","395","107","100%","48",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("9");
            obj.set_displaynulltext("내용을 입력하세요");
            obj.set_accessibilitylabel("레이블");
            this.Div06.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","416","10","200","79",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("10");
            obj.set_type("vertical");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"StaDt04\"/><PanelItem id=\"PanelItem03\" componentid=\"Combo00_00\"/></Contents>");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("StaDt04","141","98","100%","23",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("11");
            obj.set_text("조건설정");
            obj.set_cssclass("sta_WF_Lable15R");
            this.Div06.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","144","106","100%","48",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("12");
            obj.set_displaynulltext("선텍해주세요");
            obj.set_accessibilitylabel("조건설정");
            obj.set_text("");
            obj.set_value("선텍해주세요");
            obj.set_index("-1");
            this.Div06.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01","10","10","390","79",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("13");
            obj.set_type("vertical");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"StaDt05\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit00_01\"/></Contents>");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("StaDt05","94","57","100%","23",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_Lable15R");
            obj.set_text("레이블");
            this.Div06.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","395","107","100%","48",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("15");
            obj.set_displaynulltext("내용을 입력하세요");
            obj.set_accessibilitylabel("레이블");
            this.Div06.addChild(obj.name, obj);

            obj = new Panel("Panel00_02","416","10","200","79",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("16");
            obj.set_type("vertical");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"StaDt06\"/><PanelItem id=\"PanelItem03\" componentid=\"Combo00_01\"/></Contents>");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("StaDt06","141","98","100%","23",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("17");
            obj.set_text("조건설정");
            obj.set_cssclass("sta_WF_Lable15R");
            this.Div06.addChild(obj.name, obj);

            obj = new Combo("Combo00_01","144","106","100%","48",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("18");
            obj.set_displaynulltext("선텍해주세요");
            obj.set_accessibilitylabel("조건설정");
            obj.set_text("");
            obj.set_value("선텍해주세요");
            obj.set_index("-1");
            this.Div06.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_02","10","10","390","79",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("19");
            obj.set_type("vertical");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"StaDt07\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit00_02\"/></Contents>");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("StaDt07","94","57","100%","23",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_Lable15R");
            obj.set_text("레이블");
            this.Div06.addChild(obj.name, obj);

            obj = new Edit("Edit00_02","395","107","100%","48",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("21");
            obj.set_displaynulltext("내용을 입력하세요");
            obj.set_accessibilitylabel("레이블");
            this.Div06.addChild(obj.name, obj);

            obj = new Panel("Panel00_03","416","10","200","79",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("22");
            obj.set_type("vertical");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"StaDt08\"/><PanelItem id=\"PanelItem03\" componentid=\"Combo00_02\"/></Contents>");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("StaDt08","141","98","100%","23",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("23");
            obj.set_text("조건설정");
            obj.set_cssclass("sta_WF_Lable15R");
            this.Div06.addChild(obj.name, obj);

            obj = new Combo("Combo00_02","144","106","100%","48",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("24");
            obj.set_displaynulltext("선텍해주세요");
            obj.set_accessibilitylabel("조건설정");
            obj.set_text("");
            obj.set_value("선텍해주세요");
            obj.set_index("-1");
            this.Div06.addChild(obj.name, obj);

            obj = new Panel("Panel01","141","98","75%","392",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("25");
            obj.set_horizontalgap("16");
            obj.set_flexcrossaxisalign("end");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("24");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel00_01\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel00_00_01\"/><PanelItem id=\"PanelItem05\" componentid=\"Panel00_02\"/><PanelItem id=\"PanelItem06\" componentid=\"Panel00_00_02\"/><PanelItem id=\"PanelItem07\" componentid=\"Panel00_03\"/></Contents>");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static00_07_00","0","Div06:80","130","40",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("레이아웃");
            obj.set_cssclass("sta_WF_H3_pc");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_07_01","0","Static00_07_00:24","278","32",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("수평 막대(Filter bar)");
            obj.set_cssclass("sta_WF_H5");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_00","0","Static00_07_01:24",null,"886","0",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Detailbox");
            obj.set_fittocontents("height");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","39","39",null,"215","39",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("24");
            obj.set_spacing("39px");
            obj.set_cssclass("pnl_WF_SchBar");
            obj.set_verticalgap("24");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem05\" componentid=\"Panel00_02_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Static00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel02\"/></Contents>");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel00_02_00","313","49","220","48",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("1");
            obj.set_horizontalgap("0");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"StaDt00\"/><PanelItem id=\"PanelItem03\" componentid=\"Combo00_00_00_00\"/></Contents>");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("StaDt00","70","64","80","48",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("2");
            obj.set_text("가구상황");
            obj.set_cssclass("sta_WF_SchDetail");
            obj.set_flexshrink("0");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00_00","518","296","100%","48",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("3");
            obj.set_flexgrow("1");
            obj.set_displaynulltext("전체");
            obj.set_accessibilitylabel("가구현황");
            obj.set_text("");
            obj.set_value("전체");
            obj.set_index("-1");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","40","131","220","48",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("4");
            obj.set_horizontalgap("0");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"StaDt01\"/><PanelItem id=\"PanelItem03\" componentid=\"Combo00_00\"/></Contents>");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("StaDt01","70","64","80","48",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("5");
            obj.set_text("생애주기");
            obj.set_cssclass("sta_WF_SchDetail");
            obj.set_flexshrink("0");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","518","296","100%","48",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("6");
            obj.set_flexgrow("1");
            obj.set_displaynulltext("전체");
            obj.set_accessibilitylabel("생얘주기");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel00_02","40","201","220","48",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("7");
            obj.set_horizontalgap("0");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"StaDt02\"/><PanelItem id=\"PanelItem03\" componentid=\"Combo00_00_00\"/></Contents>");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("StaDt02","70","64","80","48",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("8");
            obj.set_text("관심주제");
            obj.set_cssclass("sta_WF_SchDetail");
            obj.set_flexshrink("0");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00","518","296","100%","48",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("9");
            obj.set_flexgrow("1");
            obj.set_displaynulltext("전체");
            obj.set_accessibilitylabel("관심주제");
            obj.set_text("");
            obj.set_value("전체");
            obj.set_index("-1");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static00","39","39","100%","1",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_Divider");
            obj.set_visible("true");
            obj.set_accessibilityenable("false");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel02","39","136","100%","40",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("11");
            obj.set_horizontalgap("16");
            obj.set_type("horizontal");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static04_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00\"/></Contents>");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static04_00_01","78","267","142","40",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("12");
            obj.set_text("선택된 필터 <fc v=\'#0B50D0\'>4</fc>");
            obj.set_flexshrink("0");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_SchDetail");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","236","175","463","40",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("13");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("8");
            obj.set_verticalgap("8");
            obj.set_fittocontents("height");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Button00\"/><PanelItem id=\"PanelItem10\" componentid=\"Button00_01_05\"/><PanelItem id=\"PanelItem00\" componentid=\"Button00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Button00_01_00_00\"/></Contents>");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00","205","279","40","40",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_TagReset");
            obj.set_visible("true");
            obj.set_accessibilitylabel("새로고침");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_01_05","974","2580","81","40",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("15");
            obj.set_text("유아");
            obj.set_cssclass("btn_WF_Tag");
            obj.set_visible("true");
            obj.set_accessibilitylabel("태그");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_01","530","2580","96","40",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("16");
            obj.set_text("임신출산");
            obj.set_cssclass("btn_WF_Tag");
            obj.set_visible("true");
            obj.set_accessibilitylabel("태그");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00","604","2580","111","40",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("17");
            obj.set_text("아동청소년");
            obj.set_cssclass("btn_WF_Tag");
            obj.set_visible("true");
            obj.set_accessibilitylabel("태그");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00","540","0","96","40",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("18");
            obj.set_text("저소득");
            obj.set_cssclass("btn_WF_Tag");
            obj.set_visible("false");
            obj.set_accessibilitylabel("태그");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel02_03",null,"Panel01:37","588","39","39",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("19");
            obj.set_horizontalgap("12");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"StaFilter\"/><PanelItem id=\"PanelItem06\" componentid=\"Div01\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static16_03\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02_01\"/></Contents>");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("StaFilter","280","126","31","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("20");
            obj.set_text("필터");
            obj.set_cssclass("sta_WF_Txt17B");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Div("Div01","267","130","39","39",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("21");
            obj.set_text("");
            obj.set_accessibilityenable("false");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00",null,null,"34","34","0","0",null,null,null,null,this.Div00_00.form.Div01.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_SchFilter");
            obj.set_text("");
            obj.set_visible("false");
            obj.set_accessibilitylabel("필터 펄침");
            this.Div00_00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static04","0","0","26","20",null,null,null,null,null,null,this.Div00_00.form.Div01.form);
            obj.set_taborder("1");
            obj.set_text("4");
            obj.set_cssclass("sta_WF_BadgeNum01");
            obj.set_visible("false");
            this.Div00_00.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","0","-1","180","32",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("22");
            obj.set_horizontalgap("12");
            obj.set_flexcrossaxisalign("center");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Sta01\"/><PanelItem id=\"PanelItem01\" componentid=\"Combo00_01\"/></Contents>");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Sta01","779","2739","102","32",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("23");
            obj.set_text("목록 표시 개수");
            obj.set_cssclass("sta_WF_Txt17B");
            obj.set_visible("true");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Combo("Combo00_01","893","2742","64","26",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("24");
            obj.set_cssclass("cbo_WF_TxtCom");
            obj.set_buttonsize("20 20");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_visible("true");
            obj.set_accessibilitylabel("목록 표시 개수 선택");
            var Div00_00_form_Combo00_01_innerdataset = new nexacro.NormalDataset("Div00_00_form_Combo00_01_innerdataset", obj);
            Div00_00_form_Combo00_01_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "4개"},{"codecolumn" : "1","datacolumn" : "8개"},{"codecolumn" : "2","datacolumn" : "12개"},{"codecolumn" : "3","datacolumn" : "16개"}]});
            obj.set_innerdataset(Div00_00_form_Combo00_01_innerdataset);
            obj.set_text("4개");
            obj.set_value("0");
            obj.set_index("0");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static16_03","962","2747","1","16",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("25");
            obj.set_text("Static16");
            obj.set_cssclass("sta_WF_BtnDivider");
            obj.set_visible("true");
            obj.set_accessibilityenable("false");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel02_01","196","-1","260","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("26");
            obj.set_horizontalgap("12");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("spaceevenly");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_04\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02_02\"/></Contents>");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static00_04","975","2738","61","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("27");
            obj.set_text("정렬기준");
            obj.set_cssclass("sta_WF_Txt17B");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel02_02","1048","2740","190","30",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("28");
            obj.set_horizontalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button01\"/><PanelItem id=\"PanelItem01\" componentid=\"Button01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Button01_01\"/></Contents>");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button01","1048","2740","80","30",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("29");
            obj.set_text("관련도순");
            obj.set_cssclass("btn_WF_TxtLineS");
            obj.set_fittocontents("width");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button01_00","1124","2740","60","30",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("30");
            obj.set_text("최신순");
            obj.set_cssclass("btn_WF_TxtLine");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button01_01","1183","2740","60","30",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("31");
            obj.set_text("인기순");
            obj.set_cssclass("btn_WF_TxtLine");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static00_06","39","Panel01:37","130","39",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("32");
            obj.set_text("검색 결과 <fc v=\'#0B50D0\'><b v=\'true\'>24</b></fc>건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Txt17B");
            obj.set_fittocontents("width");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel00","39","Static00_06:20",null,"495","39",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("33");
            obj.set_horizontalgap("24");
            obj.set_verticalgap("24");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel03_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel03_01_00\"/></Contents>");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel03_01","39","Static00_06:24","392","495",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("34");
            obj.set_cssclass("pnl_WF_Detailbox");
            obj.set_spacing("31px");
            obj.set_type("vertical");
            obj.set_verticalgap("24");
            obj.set_fittocontents("height");
            obj.set_horizontalgap("24");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel04_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel11\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel01_01\"/></Contents>");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static00_04_00","121","343","61","26",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("35");
            obj.set_text("신청중");
            obj.set_cssclass("sta_WF_BadgeLit01");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel05_00","60","24","175","32",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("36");
            obj.set_horizontalgap("16");
            obj.set_flexmainaxisalign("end");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Button01_03\"/><PanelItem id=\"PanelItem02\" componentid=\"Button01_00_01\"/></Contents>");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button01_03","185","340","96","32",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("37");
            obj.set_text("공유하기");
            obj.set_cssclass("btn_WF_Share");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button01_00_01","295","340","79","32",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("38");
            obj.set_text("찜하기");
            obj.set_cssclass("btn_WF_Heart");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel11","112","1124","100%","273",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("39");
            obj.set_type("vertical");
            obj.set_verticalgap("16");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel10\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02_01_00\"/></Contents>");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel10","112","1126","100%","193",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("40");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_verticalgap("16");
            obj.set_spacing("0px 0px 16px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button06_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Static19_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel06_01\"/></Contents>");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button06_01","105","368","132","29",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("41");
            obj.set_text("타이틀 영역");
            obj.set_cssclass("btn_WF_TitLink");
            obj.set_fittocontents("width");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static19_01","571","484","100%","90",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("42");
            obj.set_text("간단한 설명이 들어가는 영역입니다. 최대 3줄까지 작성합니다. 간단한 설명이 들어가는 영역입니다. 간단한 설명이 들어가는 영역입니다. ");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_Para17RG");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel06_01","95","530","100%","26",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("43");
            obj.set_horizontalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static14_00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Static14_00_00_01\"/></Contents>");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static14_00_02","95","530","34","26",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("44");
            obj.set_text("기간");
            obj.set_cssclass("sta_WF_Txt19B");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static14_00_00_01","42","530","223","26",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("45");
            obj.set_text("2023.11.01-2024.04.30");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel02_01_00","126","666","100%","64",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("46");
            obj.set_horizontalgap("8");
            obj.set_flexmainaxisalign("end");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_04\"/></Contents>");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_04","262","666","112","48",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("47");
            obj.set_text("신청하기");
            obj.set_cssclass("btn_WF_Custom");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel01_01","112","605","100%","93",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("48");
            obj.set_horizontalgap("8");
            obj.set_spacing("16px 0px 0px 0px");
            obj.set_cssclass("pnl_WF_Topline");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_00_00_06\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00_00_00_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Button00_00_00_01_01\"/><PanelItem id=\"PanelItem03\" componentid=\"Button00_00_00_02_01\"/><PanelItem id=\"PanelItem04\" componentid=\"Button00_00_00_03_01\"/><PanelItem id=\"PanelItem05\" componentid=\"Button00_00_00_04_01\"/></Contents>");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_06","103","804","60","32",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("49");
            obj.set_text("#태그");
            obj.set_cssclass("btn_WF_Tagline");
            obj.set_accessibilitylabel("태그");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_01","163","804","60","32",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("50");
            obj.set_text("#태그");
            obj.set_cssclass("btn_WF_Tagline");
            obj.set_accessibilitylabel("태그");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_01_01","223","804","60","32",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("51");
            obj.set_text("#태그");
            obj.set_cssclass("btn_WF_Tagline");
            obj.set_accessibilitylabel("태그");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_02_01","283","804","60","32",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("52");
            obj.set_text("#태그");
            obj.set_cssclass("btn_WF_Tagline");
            obj.set_accessibilitylabel("태그");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_03_01","343","804","60","32",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("53");
            obj.set_text("#태그");
            obj.set_cssclass("btn_WF_Tagline");
            obj.set_accessibilitylabel("태그");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_04_01","403","804","60","32",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("54");
            obj.set_text("#태그");
            obj.set_cssclass("btn_WF_Tagline");
            obj.set_accessibilitylabel("태그");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel03_01_00","468","348","392","495",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("55");
            obj.set_cssclass("pnl_WF_Detailbox");
            obj.set_spacing("31px");
            obj.set_type("vertical");
            obj.set_verticalgap("24");
            obj.set_fittocontents("height");
            obj.set_horizontalgap("24");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel04_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel11_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel01_01_00\"/></Contents>");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel04_00_00","640","367","100%","32",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("56");
            obj.set_flexmainaxisalign("start");
            obj.set_flexcrossaxisalign("center");
            obj.set_spacing("0px");
            obj.set_verticalgap("24");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_04_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel05_00_00\"/></Contents>");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static00_04_00_00","121","343","61","26",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("57");
            obj.set_text("신청중");
            obj.set_cssclass("sta_WF_BadgeLit01");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel05_00_00","60","24","175","32",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("58");
            obj.set_horizontalgap("16");
            obj.set_flexmainaxisalign("end");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Button01_03_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Button01_00_01_00\"/></Contents>");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button01_03_00","185","340","96","32",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("59");
            obj.set_text("공유하기");
            obj.set_cssclass("btn_WF_Share");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button01_00_01_00","295","340","79","32",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("60");
            obj.set_text("찜하기");
            obj.set_cssclass("btn_WF_Heart");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel11_00","112","1124","100%","273",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("61");
            obj.set_type("vertical");
            obj.set_verticalgap("16");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel10_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02_01_00_00\"/></Contents>");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel10_00","112","1126","100%","193",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("62");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_verticalgap("16");
            obj.set_spacing("0px 0px 16px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button06_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static19_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel06_01_00\"/></Contents>");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button06_01_00","105","368","132","29",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("63");
            obj.set_text("타이틀 영역");
            obj.set_cssclass("btn_WF_TitLink");
            obj.set_fittocontents("width");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static19_01_00","571","484","100%","90",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("64");
            obj.set_text("간단한 설명이 들어가는 영역입니다. 최대 3줄까지 작성합니다. 간단한 설명이 들어가는 영역입니다. 간단한 설명이 들어가는 영역입니다. ");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_Para17RG");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel06_01_00","95","530","100%","26",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("65");
            obj.set_horizontalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static14_00_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static14_00_00_01_00\"/></Contents>");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static14_00_02_00","95","530","34","26",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("66");
            obj.set_text("기간");
            obj.set_cssclass("sta_WF_Txt19B");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static14_00_00_01_00","42","530","223","26",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("67");
            obj.set_text("2023.11.01-2024.04.30");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel02_01_00_00","126","666","100%","64",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("68");
            obj.set_horizontalgap("8");
            obj.set_flexmainaxisalign("end");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_04_00\"/></Contents>");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_04_00","262","666","112","48",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("69");
            obj.set_text("신청하기");
            obj.set_cssclass("btn_WF_Custom");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00","112","605","100%","93",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("70");
            obj.set_horizontalgap("8");
            obj.set_spacing("16px 0px 0px 0px");
            obj.set_cssclass("pnl_WF_Topline");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_00_00_06_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00_00_00_00_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Button00_00_00_01_01_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Button00_00_00_02_01_00\"/><PanelItem id=\"PanelItem04\" componentid=\"Button00_00_00_03_01_00\"/><PanelItem id=\"PanelItem05\" componentid=\"Button00_00_00_04_01_00\"/></Contents>");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_06_00","103","804","60","32",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("71");
            obj.set_text("#태그");
            obj.set_cssclass("btn_WF_Tagline");
            obj.set_accessibilitylabel("태그");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_01_00","163","804","60","32",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("72");
            obj.set_text("#태그");
            obj.set_cssclass("btn_WF_Tagline");
            obj.set_accessibilitylabel("태그");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_01_01_00","223","804","60","32",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("73");
            obj.set_text("#태그");
            obj.set_cssclass("btn_WF_Tagline");
            obj.set_accessibilitylabel("태그");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_02_01_00","283","804","60","32",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("74");
            obj.set_text("#태그");
            obj.set_cssclass("btn_WF_Tagline");
            obj.set_accessibilitylabel("태그");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_03_01_00","343","804","60","32",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("75");
            obj.set_text("#태그");
            obj.set_cssclass("btn_WF_Tagline");
            obj.set_accessibilitylabel("태그");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_04_01_00","403","804","60","32",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("76");
            obj.set_text("#태그");
            obj.set_cssclass("btn_WF_Tagline");
            obj.set_accessibilitylabel("태그");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel04_00","640","367","100%","32",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("77");
            obj.set_flexmainaxisalign("start");
            obj.set_flexcrossaxisalign("center");
            obj.set_spacing("0px");
            obj.set_verticalgap("24");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_04_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel05_00\"/></Contents>");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00","39","Panel00:0","60","39",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("78");
            obj.set_accessibilityenable("false");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static00_07_01_00","0","Div00_00:40","278","32",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("사이드 패널(Aside panel)");
            obj.set_cssclass("sta_WF_H5");
            obj.set_accessibilityrole("heading5");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","Static00_07_01_00:4",null,"236","0",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_type("vertical");
            obj.set_spacing("64px 0px");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_cssclass("pnl_WF_SchBarSqu");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","261","64","461","100",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_type("vertical");
            obj.set_verticalgap("12");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Div00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_01","190","4060","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("Div00");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","0","0",null,null,"0","0",null,null,null,null,this.Div00_01.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_Sch");
            obj.set_accessibilitylabel("검색");
            this.Div00_01.addChild(obj.name, obj);

            obj = new Button("Button00",null,"4","40","40","2",null,null,null,null,null,this.Div00_01.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            obj.set_accessibilitylabel("검색");
            this.Div00_01.addChild(obj.name, obj);

            obj = new Button("Button00_01","571","4060","96","40",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("고급검색");
            obj.set_cssclass("btn_WF_MultiSch");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","Panel00:69","281","40",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("검색 필터");
            obj.set_cssclass("sta_WF_H3_pc");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","0","Static01:20","282","58",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("검색대상");
            obj.set_cssclass("btn_WF_SideSchCol");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","62","Static01:42","26","20",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("4");
            obj.set_cssclass("sta_WF_BadgeNum01");
            obj.set_visible("true");
            obj.set_accessibilitylabel("검색대상");
            this.addChild(obj.name, obj);

            obj = new CheckBoxSet("CheckBoxSet00","0","Button01:0","282","288",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonlycolumn("readonlycolumn");
            obj.set_direction("vertical");
            obj.set_visible("true");
            var CheckBoxSet00_innerdataset = new nexacro.NormalDataset("CheckBoxSet00_innerdataset", obj);
            CheckBoxSet00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"},{"id" : "readonlycolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "메뉴 (2)"},{"codecolumn" : "1","datacolumn" : "뉴스 (2,301)"},{"codecolumn" : "2","datacolumn" : "자주 묻는 질문 (39)"},{"codecolumn" : "3","datacolumn" : "자료 (18,201)"},{"codecolumn" : "4","datacolumn" : "정책 (32)"},{"codecolumn" : "5","datacolumn" : "법령 (392)"}]});
            obj.set_innerdataset(CheckBoxSet00_innerdataset);
            obj.set_text("뉴스 (2,301),자주 묻는 질문 (39),자료 (18,201),법령 (392)");
            obj.set_value("1,2,3,5");
            obj.set_index("1,2,3,5");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00_01","0","CheckBoxSet00:8","282","58",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("검색기간");
            obj.set_cssclass("btn_WF_SideSchCol");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00","64","CheckBoxSet00:30","26","20",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("4");
            obj.set_cssclass("sta_WF_BadgeNum01");
            obj.set_visible("true");
            obj.set_accessibilitylabel("검색기간");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03","0","Button01_00_01:8","282","40",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_horizontalgap("8");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button02\"/><PanelItem id=\"PanelItem01\" componentid=\"Button02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Button02_01\"/><PanelItem id=\"PanelItem03\" componentid=\"Button02_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","388","5060","75","40",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("1개월");
            obj.set_cssclass("btn_WF_Chk");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_00","468","5060","75","40",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("3개월");
            obj.set_cssclass("btn_WF_ChkS");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_01","548","5060","75","40",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("6개월");
            obj.set_cssclass("btn_WF_Chk");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_02","628","5060","60","40",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("1년");
            obj.set_cssclass("btn_WF_Chk");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_01","1","Panel03:24","282","79",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_horizontalgap("4");
            obj.set_flexcrossaxisalign("end");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("24");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Static00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","84","47","133","79",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_type("vertical");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static01_01_02_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Calendar00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_02_01","84","47","100%","23",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("시작날짜");
            obj.set_cssclass("sta_WF_Lable15R");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","502","141","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_value("20241002");
            obj.set_dateformat("yyyy.MM.dd ddd");
            obj.set_editformat("yyyy.MM.dd");
            obj.set_daysize("44 44");
            obj.set_headheight("56");
            obj.set_popupsize("384 437");
            obj.set_usetrailingday("true");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","502","-2321","7","48",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("-");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","94","57","133","79",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_type("vertical");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static01_01_02_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Calendar00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_02_01_00","94","57","100%","23",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("종료날짜");
            obj.set_cssclass("sta_WF_Lable15R");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00","512","151","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_editformat("yyyy.MM.dd");
            obj.set_dateformat("yyyy.MM.dd ddd");
            obj.set_value("20241202");
            obj.set_daysize("44 44");
            obj.set_headheight("56");
            obj.set_popupsize("384 437");
            obj.set_usetrailingday("true");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00_02","0","Panel01_01:20","282","58",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("자료유형");
            obj.set_cssclass("btn_WF_SideSchCol");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new CheckBoxSet("CheckBoxSet00_00","0","Button01_00_02:8","282","90",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonlycolumn("readonlycolumn");
            obj.set_direction("vertical");
            obj.set_visible("true");
            obj.set_accessibilitylabel("자료유형");
            var CheckBoxSet00_00_innerdataset = new nexacro.NormalDataset("CheckBoxSet00_00_innerdataset", obj);
            CheckBoxSet00_00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"},{"id" : "readonlycolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "PDF (234)"},{"codecolumn" : "1","datacolumn" : "HWP (220)"}]});
            obj.set_innerdataset(CheckBoxSet00_00_innerdataset);
            obj.set_text("PDF (234)");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00","0","CheckBoxSet00_00:8","282","58",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("자료 이용 장소");
            obj.set_cssclass("btn_WF_SideSchExp");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00_00","0","Button01_00:0","282","58",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("자료 언어");
            obj.set_cssclass("btn_WF_SideSchExp");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","Button01_00_00:0","282","24",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_Divider");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","0","Static02:0","133","48",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("초기화");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_00","Button03:16","Static02:0","133","48",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("적용하기");
            obj.set_cssclass("btn_WF_Crud01");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02","346","Panel00:64",null,"80","0",null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_horizontalgap("16");
            obj.set_type("horizontal");
            obj.set_cssclass("pnl_WF_SchBar");
            obj.set_spacing("20px 24px");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static04_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01","78","267","170","40",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("적용된 고급검색 조건 <fc v=\'#0B50D0\'>6</fc>");
            obj.set_flexshrink("0");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_SchDetail");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","235","4280","282","40",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("8");
            obj.set_verticalgap("8");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Button00\"/><PanelItem id=\"PanelItem10\" componentid=\"Button00_01_05\"/><PanelItem id=\"PanelItem00\" componentid=\"Button00_01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","205","279","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_cssclass("btn_WF_TagReset");
            obj.set_visible("true");
            obj.set_accessibilitylabel("새로고침");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01_05","974","2580","81","40",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("뉴스");
            obj.set_cssclass("btn_WF_Tag");
            obj.set_visible("true");
            obj.set_accessibilitylabel("태그");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01_00","530","2580","137","40",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("자주 묻는 질문");
            obj.set_cssclass("btn_WF_Tag");
            obj.set_visible("false");
            obj.set_accessibilitylabel("태그");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_03","300","Panel02:21",null,"39","0",null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_horizontalgap("12");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Static01_00\"/><PanelItem id=\"PanelItem06\" componentid=\"Div01_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static16_03\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","280","126","31","34",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("필터");
            obj.set_cssclass("sta_WF_Txt17B");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div01_00","267","130","39","39",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,null,"34","34","0","0",null,null,null,null,this.Div01_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_SchFilter");
            obj.set_text("");
            obj.set_visible("false");
            obj.set_accessibilitylabel("필터 펼침");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static04","0","0","26","20",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("1");
            obj.set_text("4");
            obj.set_cssclass("sta_WF_BadgeNum01");
            obj.set_visible("false");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","0","-1","171","32",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_horizontalgap("12");
            obj.set_flexcrossaxisalign("center");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Combo00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","779","2739","102","32",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("목록 표시 개수");
            obj.set_cssclass("sta_WF_Txt17B");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00_01","893","2742","57","26",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_cssclass("cbo_WF_TxtCom");
            obj.set_buttonsize("20 20");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_accessibilitylabel("목록 표시 개수 선택");
            var Combo00_01_innerdataset = new nexacro.NormalDataset("Combo00_01_innerdataset", obj);
            Combo00_01_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "4개"},{"codecolumn" : "1","datacolumn" : "8개"},{"codecolumn" : "2","datacolumn" : "12개"},{"codecolumn" : "3","datacolumn" : "16개"}]});
            obj.set_innerdataset(Combo00_01_innerdataset);
            obj.set_text("4개");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static16_03","962","2747","1","16",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("Static16");
            obj.set_cssclass("sta_WF_BtnDivider");
            obj.set_visible("true");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_01","196","-1","260","32",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_horizontalgap("12");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("spaceevenly");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_04_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04_00","975","2738","61","34",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("정렬기준");
            obj.set_cssclass("sta_WF_Txt17B");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_02","1048","2740","190","30",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_horizontalgap("8");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Button01_00_03\"/><PanelItem id=\"PanelItem02\" componentid=\"Button01_01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_01","1048","2740","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("관련도순");
            obj.set_cssclass("btn_WF_TxtLineS");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00_03","1124","2740","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("최신순");
            obj.set_cssclass("btn_WF_TxtLine");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_01_00","1183","2740","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("인기순");
            obj.set_cssclass("btn_WF_TxtLine");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04","346","Panel02_03:24","315","39",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_type("horizontal");
            obj.set_horizontalgap("12");
            obj.set_flexcrossaxisalign("center");
            obj.set_fittocontents("height");
            obj.set_verticalgap("2");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_06_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static16_03_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static00_06_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_06_00","335","Panel02_03:24","150","39",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("적용된 검색어 <fc v=\'#0B50D0\'><b v=\'true\'>퇴직</b></fc>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Txt17B");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static16_03_00","575","4445","1","16",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("Static16");
            obj.set_cssclass("sta_WF_BtnDivider");
            obj.set_visible("true");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_06_00_00","627","4432","149","39",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("검색결과 <fc v=\'#0B50D0\'><b v=\'true\'>22,459</b>개</fc>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Txt17B");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","346","Panel04:24",null,"1","0",null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_cssclass("sta_WF_DividerB");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","347","Static03:40","81","26",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("뉴스∙소식");
            obj.set_cssclass("sta_WF_BadgeLit01");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","Static06:16","Static03:40","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("2023.11.01");
            obj.set_cssclass("sta_WF_Para17RG");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel08","351","Static05:24",null,"286","0",null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("24");
            obj.set_verticalgap("16");
            obj.set_type("horizontal");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel07\"/><PanelItem id=\"PanelItem01\" componentid=\"ImageViewer00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel07","351","4571","888","160",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_type("vertical");
            obj.set_verticalgap("12");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07\"/><PanelItem id=\"PanelItem01\" componentid=\"Static07_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","351","4571","100%","52",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("고용노동부, 정부혁신과 적극행정 우수사례를 확산하고, 일하는 방식 개선을 통해 정부혁신을 속도감 있게 추진");
            obj.set_cssclass("sta_WF_Txt19B");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00","351","4635","100%","108",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_text("또 다른 최우수 사례로 선정된 “외국인 근로자 퇴직금 자동환급제”는 외국인 근로자가 최초 입국 시 사전 등록한 계좌에 퇴직금(출국만기보험)을 자동 지급함으로써 송출국가의 열악한 금융환경 등으로 퇴직금(출국만기보험)이 미지급되는 문제점을 개선하여 외국인 근로자의 권리구제에");
            obj.set_cssclass("sta_WF_Para17RG");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","353","4749","180","110",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_cssclass("img_WF_Radius");
            obj.set_image("url(\'theme::NexaKRDS/images/img_WF_Thumbnail.png\')");
            obj.set_accessibilitylabel("고용노동부 현장 이미지");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel06","353","Panel08:24",null,"32","0",null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("16");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel05\"/><PanelItem id=\"PanelItem01\" componentid=\"Button04\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel05","353","4776","243","26",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Button00_02\"/><PanelItem id=\"PanelItem03\" componentid=\"Static01_01_00_00\"/><PanelItem id=\"PanelItem04\" componentid=\"Button00_03_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01_01","353","4776","58","26",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_text("1Depth");
            obj.set_cssclass("btn_WF_Breadcrumb");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","418","4776","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_cssclass("sta_WF_Depnext");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_02","442","4776","58","26",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_text("2Depth");
            obj.set_cssclass("btn_WF_Breadcrumb");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","507","4776","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_cssclass("sta_WF_Depnext");
            obj.set_text("");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_03_00","531","4776","58","26",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_text("3Depth");
            obj.set_cssclass("btn_WF_Breadcrumb");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","691","4775","113","32",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_text("자세히보기");
            obj.set_cssclass("btn_WF_MoreArr");
            obj.set_accessibilityrole("link");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","346","Panel06:40",null,"1","0",null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_cssclass("sta_WF_DividerB");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00","347","Static03_00:40","81","26",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_text("뉴스∙소식");
            obj.set_cssclass("sta_WF_BadgeLit01");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00","Static06_00:16","Static03_00:40","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_text("2023.11.01");
            obj.set_cssclass("sta_WF_Para17RG");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel07_00","351","Static05_00:24",null,"160","0",null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_type("vertical");
            obj.set_verticalgap("12");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Static07_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_01","351","4571","100%","43",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_text("퇴직연금복지과, 퇴직연금 수수료 부과에 관한 고시제정안 행정예고");
            obj.set_cssclass("sta_WF_Txt19B");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","351","4635","100%","106",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_text("고용노동부 공고 제2023-453호 퇴직연금 수수료 부과에 관한 고시제정안을 행정예고 하는데 있어, 그 이유와 주요내용을 국민에게 미리 알려 이에 대한 의견을 듣기 위하여 「행정절차법」제46조에 따라 다음과 같이 공고합니다. 2023년 9월 13일 고용노동부장관");
            obj.set_cssclass("sta_WF_Para17RG");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel06_00","353","Panel07_00:24",null,"32","0",null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("16");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel05_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button04_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel05_00","353","4776","243","26",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_01_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Button00_02_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Static01_01_00_00_00\"/><PanelItem id=\"PanelItem04\" componentid=\"Button00_03_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01_01_00","353","4776","58","26",null,null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_text("1Depth");
            obj.set_cssclass("btn_WF_Breadcrumb");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","418","4776","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_cssclass("sta_WF_Depnext");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_02_00","442","4776","58","26",null,null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_text("2Depth");
            obj.set_cssclass("btn_WF_Breadcrumb");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","507","4776","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_cssclass("sta_WF_Depnext");
            obj.set_text("");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_03_00_00","531","4776","58","26",null,null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_text("3Depth");
            obj.set_cssclass("btn_WF_Breadcrumb");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("Button04_00","691","4775","113","32",null,null,null,null,null,null,this);
            obj.set_taborder("102");
            obj.set_text("자세히보기");
            obj.set_cssclass("btn_WF_MoreArr");
            obj.set_accessibilityrole("link");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00","346","Panel06_00:40",null,"1","0",null,null,null,null,null,this);
            obj.set_taborder("103");
            obj.set_cssclass("sta_WF_DividerB");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_08","0","Static03_00_00:40","278","32",null,null,null,null,null,null,this);
            obj.set_taborder("104");
            obj.set_text("모달(Modal)");
            obj.set_cssclass("sta_WF_H5");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","0","Static00_08:24",null,"1008","0",null,null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_type("horizontal");
            obj.set_flexmainaxisalign("center");
            obj.set_cssclass("pnl_POP_Modaldim");
            obj.set_spacing("40px 0px 40px 0px");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Div02_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("Div02_00","110","810","700","920",null,null,null,null,null,null,this);
            obj.set_taborder("106");
            obj.set_text("Div02");
            obj.set_cssclass("div_POP_bg");
            obj.set_accessibilityenable("false");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,"920","0",null,null,null,null,null,this.Div02_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_Bg");
            obj.set_text("");
            obj.set_accessibilityenable("false");
            this.Div02_00.addChild(obj.name, obj);

            obj = new Static("Static00","40","56",null,"36","49",null,null,null,null,null,this.Div02_00.form);
            obj.set_taborder("1");
            obj.set_text("고급검색");
            obj.set_cssclass("sta_POP_Title");
            obj.set_accessibilityrole("heading2");
            this.Div02_00.addChild(obj.name, obj);

            obj = new Div("Div00","40","132",null,"56","40",null,null,null,null,null,this.Div02_00.form);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_formscrolltype("horizontal");
            obj.set_accessibilityrole("tab");
            obj.set_accessibilitylabel("고급검색 탭 목록시작");
            this.Div02_00.addChild(obj.name, obj);

            obj = new Button("Button03","0","0","206","56",null,null,null,null,null,null,this.Div02_00.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("유형별 검색");
            obj.set_cssclass("btn_WF_TabFirS");
            obj.set_visible("true");
            obj.set_flexgrow("1");
            obj.set_accessibilityrole("tab");
            this.Div02_00.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button03_00","206","0","206","56",null,null,null,null,null,null,this.Div02_00.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("저자별 검색");
            obj.set_cssclass("btn_WF_Tab");
            obj.set_visible("true");
            obj.set_flexgrow("1");
            obj.set_accessibilityrole("tab");
            this.Div02_00.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button03_00_03","411","0","206","56",null,null,null,null,null,null,this.Div02_00.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("주제별 검색");
            obj.set_cssclass("btn_WF_TabLast");
            obj.set_visible("true");
            obj.set_flexgrow("1");
            obj.set_accessibilityrole("tab");
            this.Div02_00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_08","40","Div00:40","278","32",null,null,null,null,null,null,this.Div02_00.form);
            obj.set_taborder("3");
            obj.set_text("자료유형");
            obj.set_cssclass("sta_WF_Txt19B");
            this.Div02_00.addChild(obj.name, obj);

            obj = new CheckBoxSet("CheckBoxSet00","44","Static00_08:16","611","144",null,null,null,null,null,null,this.Div02_00.form);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonlycolumn("readonlycolumn");
            obj.set_columncount("3");
            var Div02_00_form_CheckBoxSet00_innerdataset = new nexacro.NormalDataset("Div02_00_form_CheckBoxSet00_innerdataset", obj);
            Div02_00_form_CheckBoxSet00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"},{"id" : "readonlycolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "도서 (444)"},{"codecolumn" : "1","datacolumn" : "학위논문 (2,301)"},{"codecolumn" : "2","datacolumn" : "잡지/학술지 (39)"},{"codecolumn" : "3","datacolumn" : "기사 (32)"},{"codecolumn" : "4","datacolumn" : "멀티미디어 (392)"},{"codecolumn" : "5","datacolumn" : "신문 (18,201)"},{"codecolumn" : "6","datacolumn" : "웹사이트 (32)"},{"codecolumn" : "7","datacolumn" : "외부연계자료 (5)"},{"codecolumn" : "8","datacolumn" : "기타 (5)"}]});
            obj.set_innerdataset(Div02_00_form_CheckBoxSet00_innerdataset);
            this.Div02_00.addChild(obj.name, obj);

            obj = new Static("Static00_08_00","40","CheckBoxSet00:40","278","32",null,null,null,null,null,null,this.Div02_00.form);
            obj.set_taborder("5");
            obj.set_text("검색어");
            obj.set_cssclass("sta_WF_Txt19B");
            this.Div02_00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","257","241","404","79",null,null,null,null,null,null,this.Div02_00.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"StaDt01\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit00\"/></Contents>");
            this.Div02_00.addChild(obj.name, obj);

            obj = new Panel("Panel01","40","Static00_08_00:16","620","285",null,null,null,null,null,null,this.Div02_00.form);
            obj.set_taborder("7");
            obj.set_horizontalgap("16");
            obj.set_flexcrossaxisalign("end");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("24");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel00_01_00\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel00_00_01\"/><PanelItem id=\"PanelItem05\" componentid=\"Panel00_02\"/></Contents>");
            this.Div02_00.addChild(obj.name, obj);

            obj = new Static("StaDt01","94","57","100%","23",null,null,null,null,null,null,this.Div02_00.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_Lable15R");
            obj.set_text("레이블");
            this.Div02_00.addChild(obj.name, obj);

            obj = new Edit("Edit00","395","107","100%","48",null,null,null,null,null,null,this.Div02_00.form);
            obj.set_taborder("9");
            obj.set_displaynulltext("내용을 입력하세요");
            obj.set_accessibilitylabel("레이블");
            this.Div02_00.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","10","10","200","79",null,null,null,null,null,null,this.Div02_00.form);
            obj.set_taborder("10");
            obj.set_type("vertical");
            obj.set_verticalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"StaDt02\"/><PanelItem id=\"PanelItem03\" componentid=\"Combo00\"/></Contents>");
            this.Div02_00.addChild(obj.name, obj);

            obj = new Static("StaDt02","141","98","200","23",null,null,null,null,null,null,this.Div02_00.form);
            obj.set_taborder("11");
            obj.set_text("조건설정");
            obj.set_cssclass("sta_WF_Lable15R");
            this.Div02_00.addChild(obj.name, obj);

            obj = new Combo("Combo00","144","106","200","48",null,null,null,null,null,null,this.Div02_00.form);
            obj.set_taborder("12");
            obj.set_displaynulltext("선텍해주세요");
            obj.set_accessibilitylabel("조건설정");
            obj.set_text("");
            obj.set_value("선텍해주세요");
            obj.set_index("-1");
            this.Div02_00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","10","10","390","79",null,null,null,null,null,null,this.Div02_00.form);
            obj.set_taborder("13");
            obj.set_type("vertical");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"StaDt03\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit00_00\"/></Contents>");
            this.Div02_00.addChild(obj.name, obj);

            obj = new Static("StaDt03","104","67","100%","23",null,null,null,null,null,null,this.Div02_00.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_Lable15R");
            obj.set_text("레이블");
            this.Div02_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","405","117","100%","48",null,null,null,null,null,null,this.Div02_00.form);
            obj.set_taborder("15");
            obj.set_displaynulltext("내용을 입력하세요");
            obj.set_accessibilitylabel("레이블");
            this.Div02_00.addChild(obj.name, obj);

            obj = new Panel("Panel00_01_00","416","10","200","79",null,null,null,null,null,null,this.Div02_00.form);
            obj.set_taborder("16");
            obj.set_type("vertical");
            obj.set_verticalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"StaDt04\"/><PanelItem id=\"PanelItem03\" componentid=\"Combo00_00\"/></Contents>");
            this.Div02_00.addChild(obj.name, obj);

            obj = new Static("StaDt04","151","108","200","23",null,null,null,null,null,null,this.Div02_00.form);
            obj.set_taborder("17");
            obj.set_text("조건설정");
            obj.set_cssclass("sta_WF_Lable15R");
            this.Div02_00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","154","116","200","48",null,null,null,null,null,null,this.Div02_00.form);
            obj.set_taborder("18");
            obj.set_displaynulltext("선텍해주세요");
            obj.set_accessibilitylabel("조건설정");
            obj.set_text("");
            obj.set_value("선텍해주세요");
            obj.set_index("-1");
            this.Div02_00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01","20","20","390","79",null,null,null,null,null,null,this.Div02_00.form);
            obj.set_taborder("19");
            obj.set_type("vertical");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"StaDt05\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit00_01\"/></Contents>");
            this.Div02_00.addChild(obj.name, obj);

            obj = new Static("StaDt05","114","77","100%","23",null,null,null,null,null,null,this.Div02_00.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_Lable15R");
            obj.set_text("레이블");
            this.Div02_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","415","127","100%","48",null,null,null,null,null,null,this.Div02_00.form);
            obj.set_taborder("21");
            obj.set_displaynulltext("내용을 입력하세요");
            obj.set_accessibilitylabel("레이블");
            this.Div02_00.addChild(obj.name, obj);

            obj = new Panel("Panel00_02","426","20","200","79",null,null,null,null,null,null,this.Div02_00.form);
            obj.set_taborder("22");
            obj.set_type("vertical");
            obj.set_verticalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"StaDt06\"/><PanelItem id=\"PanelItem03\" componentid=\"Combo00_01\"/></Contents>");
            this.Div02_00.addChild(obj.name, obj);

            obj = new Static("StaDt06","161","118","200","23",null,null,null,null,null,null,this.Div02_00.form);
            obj.set_taborder("23");
            obj.set_text("조건설정");
            obj.set_cssclass("sta_WF_Lable15R");
            this.Div02_00.addChild(obj.name, obj);

            obj = new Combo("Combo00_01","164","126","200","48",null,null,null,null,null,null,this.Div02_00.form);
            obj.set_taborder("24");
            obj.set_displaynulltext("선텍해주세요");
            obj.set_accessibilitylabel("조건설정");
            obj.set_text("");
            obj.set_value("선텍해주세요");
            obj.set_index("-1");
            this.Div02_00.addChild(obj.name, obj);

            obj = new Button("Button01",null,"Panel01:40","95","48","143",null,null,null,null,null,this.Div02_00.form);
            obj.set_taborder("25");
            obj.set_text("아니요");
            this.Div02_00.addChild(obj.name, obj);

            obj = new Button("Button01_00",null,"Panel01:40","95","48","40",null,null,null,null,null,this.Div02_00.form);
            obj.set_taborder("26");
            obj.set_text("예");
            obj.set_cssclass("btn_WF_Crud01");
            this.Div02_00.addChild(obj.name, obj);

            obj = new Button("Button00",null,"24","40","40","33",null,null,null,null,null,this.Div02_00.form);
            obj.set_taborder("27");
            obj.set_cssclass("btn_POP_Cancel");
            obj.set_accessibilitylabel("닫기");
            this.Div02_00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form.Div00.form.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form.Div00.form.Div00.form,
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
            this.Div00.form.Div00.form.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form.Div00.form.Div00.form
            obj = new Layout("Layout0","",0,0,this.Div00.form.Div00.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div00.form.Div00.form.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form.Div00.form.Div00.form
            obj = new Layout("Layout0","",0,0,this.Div00.form.Div00.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div00.form.Div00.form.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00.form.Div00.form.Div01.form
            obj = new Layout("default","",0,0,this.Div00.form.Div00.form.Div01.form,
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
            this.Div00.form.Div00.form.Div01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form.Div00.form.Div01.form
            obj = new Layout("Layout0","",0,0,this.Div00.form.Div00.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00.set_visible("true");

                p.Static04.set_visible("true");
            	}
            );
            this.Div00.form.Div00.form.Div01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form.Div00.form.Div01.form
            obj = new Layout("Layout0","",0,0,this.Div00.form.Div00.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div00.form.Div00.form.Div01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00.form.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.set_taborder("0");
                p.Panel00.set_horizontalgap("16");
                p.Panel00.set_verticalgap("16");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_fittocontents("height");
                p.Panel00.move("39","39",null,"48","39",null);

                p.Combo00.set_taborder("1");
                p.Combo00.set_displaynulltext("전체");
                p.Combo00.set_accessibilitylabel("검색");
                p.Combo00.set_value("");
                p.Combo00.set_index("-1");
                p.Combo00.move("39","39","180","48",null,null);

                p.Div00.set_taborder("2");
                p.Div00.set_text("Div00");
                p.Div00.set_accessibilityenable("false");
                p.Div00.move("196","39","392","48",null,null);

                p.Panel01.set_taborder("3");
                p.Panel01.set_horizontalgap("24");
                p.Panel01.set_spacing("39px");
                p.Panel01.set_cssclass("pnl_WF_SchBar");
                p.Panel01.set_verticalgap("24");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.set_fittocontents("height");
                p.Panel01.move("39","Panel00:44",null,"215","39",null);

                p.Panel00_01.set_taborder("4");
                p.Panel00_01.set_horizontalgap("10");
                p.Panel00_01.set_maxwidth("");
                p.Panel00_01.move("40","131","279","48",null,null);

                p.StaDt01.set_taborder("5");
                p.StaDt01.set_text("정책분야");
                p.StaDt01.set_cssclass("sta_WF_SchDetail");
                p.StaDt01.set_flexshrink("0");
                p.StaDt01.move("70","64","100","48",null,null);

                p.Combo00_00.set_taborder("6");
                p.Combo00_00.set_flexgrow("1");
                p.Combo00_00.set_displaynulltext("전체");
                p.Combo00_00.set_accessibilitylabel("정책분야");
                p.Combo00_00.set_value("");
                p.Combo00_00.set_index("-1");
                p.Combo00_00.move("518","296","100%","48",null,null);

                p.Panel00_02.set_taborder("7");
                p.Panel00_02.set_horizontalgap("10");
                p.Panel00_02.set_maxwidth("");
                p.Panel00_02.move("40","201","279","48",null,null);

                p.StaDt02.set_taborder("8");
                p.StaDt02.set_text("대상자");
                p.StaDt02.set_cssclass("sta_WF_SchDetail");
                p.StaDt02.set_flexshrink("0");
                p.StaDt02.move("70","64","100","48",null,null);

                p.Combo00_00_00.set_taborder("9");
                p.Combo00_00_00.set_flexgrow("1");
                p.Combo00_00_00.set_displaynulltext("전체");
                p.Combo00_00_00.set_accessibilitylabel("대상자");
                p.Combo00_00_00.set_text("");
                p.Combo00_00_00.set_value("전체");
                p.Combo00_00_00.set_index("-1");
                p.Combo00_00_00.move("518","296","100%","48",null,null);

                p.Static00.set_taborder("10");
                p.Static00.set_cssclass("sta_WF_Divider");
                p.Static00.set_visible("true");
                p.Static00.set_accessibilityenable("false");
                p.Static00.move("39","39","100%","1",null,null);

                p.Panel02.set_taborder("11");
                p.Panel02.set_horizontalgap("16");
                p.Panel02.set_visible("true");
                p.Panel02.move("39","136","100%","40",null,null);

                p.Static04_00_01.set_taborder("12");
                p.Static04_00_01.set_text("적용된 검색조건 <fc v=\'#0B50D0\'>3</fc>");
                p.Static04_00_01.set_flexshrink("0");
                p.Static04_00_01.set_usedecorate("true");
                p.Static04_00_01.set_cssclass("sta_WF_SchDetail");
                p.Static04_00_01.move("78","267","142","40",null,null);

                p.Panel01_00.set_taborder("13");
                p.Panel01_00.set_flexwrap("wrap");
                p.Panel01_00.set_horizontalgap("8");
                p.Panel01_00.set_verticalgap("8");
                p.Panel01_00.set_fittocontents("height");
                p.Panel01_00.move("244","267","366","40",null,null);

                p.Button00.set_taborder("14");
                p.Button00.set_cssclass("btn_WF_TagReset");
                p.Button00.set_visible("true");
                p.Button00.set_accessibilitylabel("새로고침");
                p.Button00.move("205","279","40","40",null,null);

                p.Button00_01_05.set_taborder("15");
                p.Button00_01_05.set_text("장애인");
                p.Button00_01_05.set_cssclass("btn_WF_Tag");
                p.Button00_01_05.set_visible("true");
                p.Button00_01_05.move("974","2580","81","40",null,null);

                p.Button00_01.set_taborder("16");
                p.Button00_01.set_text("직무경험");
                p.Button00_01.set_cssclass("btn_WF_Tag");
                p.Button00_01.set_visible("true");
                p.Button00_01.move("530","2580","96","40",null,null);

                p.Button00_01_00.set_taborder("17");
                p.Button00_01_00.set_text("비용지급");
                p.Button00_01_00.set_cssclass("btn_WF_Tag");
                p.Button00_01_00.set_visible("false");
                p.Button00_01_00.move("604","2580","96","40",null,null);

                p.Panel02_03.set_taborder("18");
                p.Panel02_03.set_horizontalgap("12");
                p.Panel02_03.set_flexcrossaxisalign("center");
                p.Panel02_03.set_flexmainaxisalign("end");
                p.Panel02_03.move(null,"Panel01:37","555","39","39",null);

                p.StaFilter.set_taborder("19");
                p.StaFilter.set_text("필터");
                p.StaFilter.set_cssclass("sta_WF_Txt17B");
                p.StaFilter.set_fittocontents("width");
                p.StaFilter.set_visible("false");
                p.StaFilter.move("280","126","31","34",null,null);

                p.Div01.set_taborder("20");
                p.Div01.set_text("");
                p.Div01.move("267","130","39","39",null,null);

                p.Panel02_00.set_taborder("21");
                p.Panel02_00.set_horizontalgap("12");
                p.Panel02_00.set_flexcrossaxisalign("center");
                p.Panel02_00.set_visible("true");
                p.Panel02_00.move("0","-1","180","34",null,null);

                p.StaDt04.set_taborder("22");
                p.StaDt04.set_text("목록 표시 개수");
                p.StaDt04.set_cssclass("sta_WF_Txt17B");
                p.StaDt04.set_visible("true");
                p.StaDt04.move("779","2739","102","34",null,null);

                p.Combo00_01.set_taborder("23");
                p.Combo00_01.set_cssclass("cbo_WF_TxtCom");
                p.Combo00_01.set_buttonsize("20 20");
                p.Combo00_01.set_innerdataset(Div00_form_Div00_form_Combo00_01_innerdataset);
                p.Combo00_01.set_codecolumn("codecolumn");
                p.Combo00_01.set_datacolumn("datacolumn");
                p.Combo00_01.set_visible("true");
                p.Combo00_01.set_accessibilitylabel("목록 표시 개수");
                p.Combo00_01.set_text("12");
                p.Combo00_01.set_value("2");
                p.Combo00_01.set_index("2");
                p.Combo00_01.move("893","2742","64","26",null,null);

                p.Static16_03.set_taborder("24");
                p.Static16_03.set_text("Static16");
                p.Static16_03.set_cssclass("sta_WF_BtnDivider");
                p.Static16_03.set_visible("true");
                p.Static16_03.set_accessibilityenable("false");
                p.Static16_03.move("962","2747","1","16",null,null);

                p.Panel02_01.set_taborder("25");
                p.Panel02_01.set_horizontalgap("12");
                p.Panel02_01.set_flexcrossaxisalign("center");
                p.Panel02_01.set_flexmainaxisalign("spaceevenly");
                p.Panel02_01.move("196","-1","260","34",null,null);

                p.Static00_04.set_taborder("26");
                p.Static00_04.set_text("정렬기준");
                p.Static00_04.set_cssclass("sta_WF_Txt17B");
                p.Static00_04.move("975","2738","61","34",null,null);

                p.Panel02_02.set_taborder("27");
                p.Panel02_02.set_horizontalgap("8");
                p.Panel02_02.move("1048","2740","190","30",null,null);

                p.Button01.set_taborder("28");
                p.Button01.set_text("관련도순");
                p.Button01.set_cssclass("btn_WF_TxtLineS");
                p.Button01.set_fittocontents("width");
                p.Button01.move("1048","2740","80","30",null,null);

                p.Button01_00.set_taborder("29");
                p.Button01_00.set_text("최신순");
                p.Button01_00.set_cssclass("btn_WF_TxtLine");
                p.Button01_00.set_fittocontents("width");
                p.Button01_00.set_visible("true");
                p.Button01_00.move("1124","2740","60","30",null,null);

                p.Button01_01.set_taborder("30");
                p.Button01_01.set_text("인기순");
                p.Button01_01.set_cssclass("btn_WF_TxtLine");
                p.Button01_01.set_fittocontents("width");
                p.Button01_01.set_visible("true");
                p.Button01_01.move("1183","2740","60","30",null,null);

                p.Static00_06.set_taborder("31");
                p.Static00_06.set_text("검색 결과 <fc v=\'#0B50D0\'><b v=\'true\'>249</b></fc>건");
                p.Static00_06.set_usedecorate("true");
                p.Static00_06.set_cssclass("sta_WF_Txt17B");
                p.Static00_06.set_fittocontents("width");
                p.Static00_06.move("39","Panel01:37","119","39",null,null);

                p.Static02.set_taborder("32");
                p.Static02.set_accessibilityenable("false");
                p.Static02.move("39","Static00_06:0","60","40",null,null);
            	}
            );
            this.Div00.form.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form.Div00.form
            obj = new Layout("Layout0","",0,0,this.Div00.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel01.set_spacing("16px");
                p.Panel01.move("15","Panel00:16",null,"241","15",null);

                p.Panel00.move("15","20",null,"112","15",null);

                p.Static00.set_visible("false");

                p.Panel02.set_visible("false");

                p.Button01_00.set_visible("false");

                p.Button01_01.set_visible("false");

                p.Combo00.set_flexgrow("1");

                p.Div00.set_flexgrow("1");

                p.Panel00_02.set_flexgrow("1");

                p.Panel00_01.set_flexgrow("1");





                p.StaDt04.set_visible("false");
                p.StaDt04.set_text("목록 표시 개수");

                p.Combo00_01.set_visible("false");

                p.Panel02_00.set_visible("false");

                p.Static00_06.move("15","Panel01:90","130","39",null,null);

                p.Panel02_03.move("15","Panel01:27",null,"39","15",null);

                p.Div01.set_visible("true");

                p.StaFilter.set_visible("true");

                p.Panel02_01.set_flexmainaxisalign("end");
                p.Panel02_01.set_fittocontents("width");
                p.Panel02_01.set_maxwidth("");

                p.Panel02_02.set_fittocontents("width");

                p.Static02.move("39","Static00_06:0","60","16",null,null);
            	}
            );
            this.Div00.form.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Div00.set_taborder("0");
                p.Div00.set_text("Div00");
                p.Div00.set_cssclass("div_WF_Detailbox");
                p.Div00.set_fittocontents("height");
                p.Div00.set_accessibilityenable("false");
                p.Div00.move("39","39",null,"464","39",null);

                p.Static02.set_taborder("33");
                p.Static02.set_accessibilityenable("false");
                p.Static02.move("39","Div00:0","60","40",null,null);
            	}
            );
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("16");
            this.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form
            obj = new Layout("Layout0","",0,0,this.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Div00.set_text("Div00");
                p.Div00.move("16","16",null,"536","16",null);

                p.Static02.move("16","Div00:0","60","16",null,null);
            	}
            );
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("16");
            this.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div02.form.Div00.form
            obj = new Layout("default","",0,0,this.Div02.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Edit01.set_taborder("0");
                p.Edit01.set_cssclass("edt_WF_Sch");
                p.Edit01.set_accessibilitylabel("레이블");
                p.Edit01.move("0","0",null,null,"0","0");

                p.Button00.set_taborder("1");
                p.Button00.set_cssclass("btn_WF_EdtSch");
                p.Button00.set_accessibilitylabel("레이블검색");
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
                p.Panel01.set_verticalgap("8");
                p.Panel01.move("39","39","53.71621621621622%","128",null,null);

                p.StaDt01.set_taborder("1");
                p.StaDt01.set_text("레이블");
                p.StaDt01.set_cssclass("sta_WF_Lable15R");
                p.StaDt01.move("84","47","280","23",null,null);

                p.Div00.set_taborder("2");
                p.Div00.set_text("Div00");
                p.Div00.set_flexgrow("1");
                p.Div00.move("39","39","365","48",null,null);

                p.Button00_01.set_taborder("3");
                p.Button00_01.set_text("고급검색");
                p.Button00_01.set_cssclass("btn_WF_MultiSch");
                p.Button00_01.move("381","39","96","48",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexmainaxisalign("center");
            obj.set_spacing("40px");
            this.Div02.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div02.form
            obj = new Layout("Layout0","",0,0,this.Div02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_flexmainaxisalign("center");
            obj.set_spacing("40px");
            this.Div02.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div03.form
            obj = new Layout("default","",0,0,this.Div03.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.StaDt00.set_taborder("0");
                p.StaDt00.set_text("레이블");
                p.StaDt00.set_cssclass("sta_WF_Txt19B");
                p.StaDt00.move("144","26","74.87623762376238%","29",null,null);

                p.Panel01.set_taborder("1");
                p.Panel01.set_horizontalgap("16");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.set_fittocontents("height");
                p.Panel01.set_verticalgap("16");
                p.Panel01.set_flexcrossaxisalign("end");
                p.Panel01.set_type("horizontal");
                p.Panel01.move("144","60","74.87623762376238%","79",null,null);

                p.Panel00.set_taborder("2");
                p.Panel00.set_type("vertical");
                p.Panel00.set_verticalgap("8");
                p.Panel00.set_flexgrow("1");
                p.Panel00.move("84","47","200","79",null,null);

                p.StaDt01.set_taborder("3");
                p.StaDt01.set_text("레이블");
                p.StaDt01.set_cssclass("sta_WF_Lable15R");
                p.StaDt01.move("84","47","100%","23",null,null);

                p.Combo00.set_taborder("4");
                p.Combo00.set_displaynulltext("선텍해주세요");
                p.Combo00.set_accessibilitylabel("레이블");
                p.Combo00.set_value("");
                p.Combo00.set_index("-1");
                p.Combo00.move("144","106","100%","48",null,null);

                p.Panel00_00.set_taborder("5");
                p.Panel00_00.set_type("vertical");
                p.Panel00_00.set_verticalgap("8");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.set_fittocontents("height");
                p.Panel00_00.move("94","57","280","79",null,null);

                p.StaDt02.set_taborder("6");
                p.StaDt02.set_cssclass("sta_WF_Lable15R");
                p.StaDt02.set_visible("true");
                p.StaDt02.move("94","57","100%","23",null,null);

                p.Edit00.set_taborder("7");
                p.Edit00.set_displaynulltext("내용을 입력하세요");
                p.Edit00.set_accessibilitylabel("레이블");
                p.Edit00.move("395","107","100%","48",null,null);

                p.Button00.set_taborder("8");
                p.Button00.set_text("검색");
                p.Button00.set_cssclass("btn_WF_Custom");
                p.Button00.set_flexgrow("1");
                p.Button00.set_accessibilitylabel("레이블");
                p.Button00.move("671","98","78","48",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_verticalgap("16");
            obj.set_spacing("40px");
            this.Div03.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div03.form
            obj = new Layout("Layout0","",0,0,this.Div03.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel01.move("90","122","74.75%","207",null,null);

                p.StaDt02.set_visible("false");

                p.Button00.move("671","98","90","48",null,null);

                p.Panel00_00.move("94","57","100%","79",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_verticalgap("16");
            obj.set_spacing("40px");
            this.Div03.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div04.form
            obj = new Layout("default","",0,0,this.Div04.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.set_taborder("0");
                p.Panel00.set_horizontalgap("24");
                p.Panel00.set_verticalgap("16");
                p.Panel00.set_type("horizontal");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_fittocontents("height");
                p.Panel00.move("39","39","91.21621621621621%","48",null,null);

                p.Panel00_01.set_taborder("1");
                p.Panel00_01.set_horizontalgap("10");
                p.Panel00_01.set_flexgrow("1");
                p.Panel00_01.set_maxwidth("");
                p.Panel00_01.move("39","39","228","48",null,null);

                p.StaDt00.set_taborder("2");
                p.StaDt00.set_text("레이블");
                p.StaDt00.set_cssclass("sta_WF_SchDetail");
                p.StaDt00.set_flexshrink("0");
                p.StaDt00.move("70","64","60","48",null,null);

                p.Combo00_00.set_taborder("3");
                p.Combo00_00.set_flexgrow("1");
                p.Combo00_00.set_displaynulltext("선텍해주세요");
                p.Combo00_00.set_accessibilitylabel("레이블");
                p.Combo00_00.set_text("");
                p.Combo00_00.set_value("선텍해주세요");
                p.Combo00_00.set_index("-1");
                p.Combo00_00.move("518","296","100%","48",null,null);

                p.Panel00_02.set_taborder("4");
                p.Panel00_02.set_horizontalgap("10");
                p.Panel00_02.set_flexgrow("1");
                p.Panel00_02.set_maxwidth("");
                p.Panel00_02.move("342","39","228","48",null,null);

                p.StaDt01.set_taborder("5");
                p.StaDt01.set_text("레이블");
                p.StaDt01.set_cssclass("sta_WF_SchDetail");
                p.StaDt01.set_flexshrink("0");
                p.StaDt01.move("80","74","60","48",null,null);

                p.Combo00_00_00.set_taborder("6");
                p.Combo00_00_00.set_flexgrow("1");
                p.Combo00_00_00.set_displaynulltext("선텍해주세요");
                p.Combo00_00_00.set_accessibilitylabel("레이블");
                p.Combo00_00_00.set_text("");
                p.Combo00_00_00.set_value("선텍해주세요");
                p.Combo00_00_00.set_index("-1");
                p.Combo00_00_00.move("528","306","100%","48",null,null);

                p.Panel00_02_00.set_taborder("7");
                p.Panel00_02_00.set_horizontalgap("10");
                p.Panel00_02_00.set_flexgrow("1");
                p.Panel00_02_00.set_maxwidth("");
                p.Panel00_02_00.move("641","36","228","48",null,null);

                p.StaDt02.set_taborder("8");
                p.StaDt02.set_text("레이블");
                p.StaDt02.set_cssclass("sta_WF_SchDetail");
                p.StaDt02.set_flexshrink("0");
                p.StaDt02.move("80","74","60","48",null,null);

                p.Combo00_00_00_00.set_taborder("9");
                p.Combo00_00_00_00.set_flexgrow("1");
                p.Combo00_00_00_00.set_displaynulltext("선텍해주세요");
                p.Combo00_00_00_00.set_accessibilitylabel("레이블");
                p.Combo00_00_00_00.set_text("");
                p.Combo00_00_00_00.set_value("선텍해주세요");
                p.Combo00_00_00_00.set_index("-1");
                p.Combo00_00_00_00.move("528","306","100%","48",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_spacing("40px");
            this.Div04.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div04.form
            obj = new Layout("Layout0","",0,0,this.Div04.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_spacing("40px");
            this.Div04.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div05.form
            obj = new Layout("default","",0,0,this.Div05.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00_00.set_taborder("0");
                p.Static00_00.set_text("레이블");
                p.Static00_00.set_cssclass("sta_WF_Txt19B");
                p.Static00_00.move("144","26","71.2871287128713%","29",null,null);

                p.Panel01.set_taborder("1");
                p.Panel01.set_horizontalgap("16");
                p.Panel01.set_flexcrossaxisalign("end");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.set_fittocontents("height");
                p.Panel01.set_verticalgap("24");
                p.Panel01.move("144","60","71.2871287128713%","79",null,null);

                p.Panel00.set_taborder("2");
                p.Panel00.set_verticalgap("8");
                p.Panel00.set_type("vertical");
                p.Panel00.set_flexgrow("1");
                p.Panel00.move("84","47","280","79",null,null);

                p.StaDt01.set_taborder("3");
                p.StaDt01.set_text("시작날짜");
                p.StaDt01.set_cssclass("sta_WF_Lable15R");
                p.StaDt01.move("84","47","100%","23",null,null);

                p.Calendar00.set_taborder("4");
                p.Calendar00.set_value("20241002");
                p.Calendar00.set_dateformat("yyyy.MM.dd ddd");
                p.Calendar00.set_editformat("yyyy.MM.dd");
                p.Calendar00.set_daysize("44 44");
                p.Calendar00.set_popupsize("384 437");
                p.Calendar00.set_headheight("56");
                p.Calendar00.set_usetrailingday("true");
                p.Calendar00.set_accessibilitylabel("시작날짜");
                p.Calendar00.move("502","141","100%","48",null,null);

                p.Panel00_00.set_taborder("5");
                p.Panel00_00.set_type("vertical");
                p.Panel00_00.set_verticalgap("8");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.move("94","57","280","79",null,null);

                p.StaDt02.set_taborder("6");
                p.StaDt02.set_text("종료날짜");
                p.StaDt02.set_cssclass("sta_WF_Lable15R");
                p.StaDt02.move("94","57","100%","23",null,null);

                p.Calendar00_00.set_taborder("7");
                p.Calendar00_00.set_editformat("yyyy.MM.dd");
                p.Calendar00_00.set_dateformat("yyyy.MM.dd ddd");
                p.Calendar00_00.set_value("20241202");
                p.Calendar00_00.set_daysize("44 44");
                p.Calendar00_00.set_popupsize("384 437");
                p.Calendar00_00.set_headheight("56");
                p.Calendar00_00.set_usetrailingday("true");
                p.Calendar00_00.set_accessibilitylabel("종료날짜");
                p.Calendar00_00.move("512","151","100%","48",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_verticalgap("16");
            obj.set_spacing("40px");
            this.Div05.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div05.form
            obj = new Layout("Layout0","",0,0,this.Div05.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel01.move("144","60","71.2871287128713%","182",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_verticalgap("16");
            obj.set_spacing("40px");
            this.Div05.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div06.form
            obj = new Layout("default","",0,0,this.Div06.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.StaDt00.set_taborder("0");
                p.StaDt00.set_text("레이블");
                p.StaDt00.set_cssclass("sta_WF_Txt19B");
                p.StaDt00.move("156","39","75%","29",null,null);

                p.Panel00_00.set_taborder("1");
                p.Panel00_00.set_type("vertical");
                p.Panel00_00.set_verticalgap("8");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.move("257","241","390","79",null,null);

                p.StaDt01.set_taborder("2");
                p.StaDt01.set_cssclass("sta_WF_Lable15R");
                p.StaDt01.set_text("레이블");
                p.StaDt01.move("94","57","100%","23",null,null);

                p.Edit00.set_taborder("3");
                p.Edit00.set_displaynulltext("내용을 입력하세요");
                p.Edit00.set_accessibilitylabel("레이블");
                p.Edit00.move("395","107","100%","48",null,null);

                p.Panel00.set_taborder("4");
                p.Panel00.set_type("vertical");
                p.Panel00.set_verticalgap("8");
                p.Panel00.set_flexgrow("1");
                p.Panel00.move("10","10","200","79",null,null);

                p.StaDt02.set_taborder("5");
                p.StaDt02.set_text("조건설정");
                p.StaDt02.set_cssclass("sta_WF_Lable15R");
                p.StaDt02.move("141","98","100%","23",null,null);

                p.Combo00.set_taborder("6");
                p.Combo00.set_displaynulltext("선텍해주세요");
                p.Combo00.set_accessibilitylabel("조건설정");
                p.Combo00.set_text("");
                p.Combo00.set_value("선텍해주세요");
                p.Combo00.set_index("-1");
                p.Combo00.move("144","106","100%","48",null,null);

                p.Panel00_00_00.set_taborder("7");
                p.Panel00_00_00.set_type("vertical");
                p.Panel00_00_00.set_verticalgap("8");
                p.Panel00_00_00.set_flexgrow("1");
                p.Panel00_00_00.move("10","10","390","79",null,null);

                p.StaDt03.set_taborder("8");
                p.StaDt03.set_cssclass("sta_WF_Lable15R");
                p.StaDt03.set_text("레이블");
                p.StaDt03.move("94","57","100%","23",null,null);

                p.Edit00_00.set_taborder("9");
                p.Edit00_00.set_displaynulltext("내용을 입력하세요");
                p.Edit00_00.set_accessibilitylabel("레이블");
                p.Edit00_00.move("395","107","100%","48",null,null);

                p.Panel00_01.set_taborder("10");
                p.Panel00_01.set_type("vertical");
                p.Panel00_01.set_verticalgap("8");
                p.Panel00_01.set_flexgrow("1");
                p.Panel00_01.move("416","10","200","79",null,null);

                p.StaDt04.set_taborder("11");
                p.StaDt04.set_text("조건설정");
                p.StaDt04.set_cssclass("sta_WF_Lable15R");
                p.StaDt04.move("141","98","100%","23",null,null);

                p.Combo00_00.set_taborder("12");
                p.Combo00_00.set_displaynulltext("선텍해주세요");
                p.Combo00_00.set_accessibilitylabel("조건설정");
                p.Combo00_00.set_text("");
                p.Combo00_00.set_value("선텍해주세요");
                p.Combo00_00.set_index("-1");
                p.Combo00_00.move("144","106","100%","48",null,null);

                p.Panel00_00_01.set_taborder("13");
                p.Panel00_00_01.set_type("vertical");
                p.Panel00_00_01.set_verticalgap("8");
                p.Panel00_00_01.set_flexgrow("1");
                p.Panel00_00_01.move("10","10","390","79",null,null);

                p.StaDt05.set_taborder("14");
                p.StaDt05.set_cssclass("sta_WF_Lable15R");
                p.StaDt05.set_text("레이블");
                p.StaDt05.move("94","57","100%","23",null,null);

                p.Edit00_01.set_taborder("15");
                p.Edit00_01.set_displaynulltext("내용을 입력하세요");
                p.Edit00_01.set_accessibilitylabel("레이블");
                p.Edit00_01.move("395","107","100%","48",null,null);

                p.Panel00_02.set_taborder("16");
                p.Panel00_02.set_type("vertical");
                p.Panel00_02.set_verticalgap("8");
                p.Panel00_02.set_flexgrow("1");
                p.Panel00_02.move("416","10","200","79",null,null);

                p.StaDt06.set_taborder("17");
                p.StaDt06.set_text("조건설정");
                p.StaDt06.set_cssclass("sta_WF_Lable15R");
                p.StaDt06.move("141","98","100%","23",null,null);

                p.Combo00_01.set_taborder("18");
                p.Combo00_01.set_displaynulltext("선텍해주세요");
                p.Combo00_01.set_accessibilitylabel("조건설정");
                p.Combo00_01.set_text("");
                p.Combo00_01.set_value("선텍해주세요");
                p.Combo00_01.set_index("-1");
                p.Combo00_01.move("144","106","100%","48",null,null);

                p.Panel00_00_02.set_taborder("19");
                p.Panel00_00_02.set_type("vertical");
                p.Panel00_00_02.set_verticalgap("8");
                p.Panel00_00_02.set_flexgrow("1");
                p.Panel00_00_02.move("10","10","390","79",null,null);

                p.StaDt07.set_taborder("20");
                p.StaDt07.set_cssclass("sta_WF_Lable15R");
                p.StaDt07.set_text("레이블");
                p.StaDt07.move("94","57","100%","23",null,null);

                p.Edit00_02.set_taborder("21");
                p.Edit00_02.set_displaynulltext("내용을 입력하세요");
                p.Edit00_02.set_accessibilitylabel("레이블");
                p.Edit00_02.move("395","107","100%","48",null,null);

                p.Panel00_03.set_taborder("22");
                p.Panel00_03.set_type("vertical");
                p.Panel00_03.set_verticalgap("8");
                p.Panel00_03.set_flexgrow("1");
                p.Panel00_03.move("416","10","200","79",null,null);

                p.StaDt08.set_taborder("23");
                p.StaDt08.set_text("조건설정");
                p.StaDt08.set_cssclass("sta_WF_Lable15R");
                p.StaDt08.move("141","98","100%","23",null,null);

                p.Combo00_02.set_taborder("24");
                p.Combo00_02.set_displaynulltext("선텍해주세요");
                p.Combo00_02.set_accessibilitylabel("조건설정");
                p.Combo00_02.set_text("");
                p.Combo00_02.set_value("선텍해주세요");
                p.Combo00_02.set_index("-1");
                p.Combo00_02.move("144","106","100%","48",null,null);

                p.Panel01.set_taborder("25");
                p.Panel01.set_horizontalgap("16");
                p.Panel01.set_flexcrossaxisalign("end");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.set_fittocontents("height");
                p.Panel01.set_verticalgap("24");
                p.Panel01.move("141","98","75%","392",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_verticalgap("8");
            obj.set_spacing("40px");
            this.Div06.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div06.form
            obj = new Layout("Layout0","",0,0,this.Div06.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel01.move("141","98","75%","800",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_verticalgap("8");
            obj.set_spacing("40px");
            this.Div06.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00_00.form.Div01.form
            obj = new Layout("default","",0,0,this.Div00_00.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00.set_taborder("0");
                p.Button00.set_cssclass("btn_WF_SchFilter");
                p.Button00.set_text("");
                p.Button00.set_visible("false");
                p.Button00.set_accessibilitylabel("필터 펄침");
                p.Button00.move(null,null,"34","34","0","0");

                p.Static04.set_taborder("1");
                p.Static04.set_text("4");
                p.Static04.set_cssclass("sta_WF_BadgeNum01");
                p.Static04.set_visible("false");
                p.Static04.move("0","0","26","20",null,null);
            	}
            );
            this.Div00_00.form.Div01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00_00.form.Div01.form
            obj = new Layout("Layout0","",0,0,this.Div00_00.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00.set_visible("true");

                p.Static04.set_visible("true");
            	}
            );
            this.Div00_00.form.Div01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00_00.form.Div01.form
            obj = new Layout("Layout0","",0,0,this.Div00_00.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div00_00.form.Div01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00_00.form
            obj = new Layout("default","",0,0,this.Div00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel01.set_taborder("0");
                p.Panel01.set_horizontalgap("24");
                p.Panel01.set_spacing("39px");
                p.Panel01.set_cssclass("pnl_WF_SchBar");
                p.Panel01.set_verticalgap("24");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.set_fittocontents("height");
                p.Panel01.set_type("horizontal");
                p.Panel01.move("39","39",null,"215","39",null);

                p.Panel00_02_00.set_taborder("1");
                p.Panel00_02_00.set_horizontalgap("0");
                p.Panel00_02_00.set_flexgrow("1");
                p.Panel00_02_00.set_maxwidth("");
                p.Panel00_02_00.move("313","49","220","48",null,null);

                p.StaDt00.set_taborder("2");
                p.StaDt00.set_text("가구상황");
                p.StaDt00.set_cssclass("sta_WF_SchDetail");
                p.StaDt00.set_flexshrink("0");
                p.StaDt00.move("70","64","80","48",null,null);

                p.Combo00_00_00_00.set_taborder("3");
                p.Combo00_00_00_00.set_flexgrow("1");
                p.Combo00_00_00_00.set_displaynulltext("전체");
                p.Combo00_00_00_00.set_accessibilitylabel("가구현황");
                p.Combo00_00_00_00.set_text("");
                p.Combo00_00_00_00.set_value("전체");
                p.Combo00_00_00_00.set_index("-1");
                p.Combo00_00_00_00.move("518","296","100%","48",null,null);

                p.Panel00_01.set_taborder("4");
                p.Panel00_01.set_horizontalgap("0");
                p.Panel00_01.set_flexgrow("1");
                p.Panel00_01.set_maxwidth("");
                p.Panel00_01.move("40","131","220","48",null,null);

                p.StaDt01.set_taborder("5");
                p.StaDt01.set_text("생애주기");
                p.StaDt01.set_cssclass("sta_WF_SchDetail");
                p.StaDt01.set_flexshrink("0");
                p.StaDt01.move("70","64","80","48",null,null);

                p.Combo00_00.set_taborder("6");
                p.Combo00_00.set_flexgrow("1");
                p.Combo00_00.set_displaynulltext("전체");
                p.Combo00_00.set_accessibilitylabel("생얘주기");
                p.Combo00_00.set_value("");
                p.Combo00_00.set_index("-1");
                p.Combo00_00.move("518","296","100%","48",null,null);

                p.Panel00_02.set_taborder("7");
                p.Panel00_02.set_horizontalgap("0");
                p.Panel00_02.set_flexgrow("1");
                p.Panel00_02.set_maxwidth("");
                p.Panel00_02.move("40","201","220","48",null,null);

                p.StaDt02.set_taborder("8");
                p.StaDt02.set_text("관심주제");
                p.StaDt02.set_cssclass("sta_WF_SchDetail");
                p.StaDt02.set_flexshrink("0");
                p.StaDt02.move("70","64","80","48",null,null);

                p.Combo00_00_00.set_taborder("9");
                p.Combo00_00_00.set_flexgrow("1");
                p.Combo00_00_00.set_displaynulltext("전체");
                p.Combo00_00_00.set_accessibilitylabel("관심주제");
                p.Combo00_00_00.set_text("");
                p.Combo00_00_00.set_value("전체");
                p.Combo00_00_00.set_index("-1");
                p.Combo00_00_00.move("518","296","100%","48",null,null);

                p.Static00.set_taborder("10");
                p.Static00.set_cssclass("sta_WF_Divider");
                p.Static00.set_visible("true");
                p.Static00.set_accessibilityenable("false");
                p.Static00.move("39","39","100%","1",null,null);

                p.Panel02.set_taborder("11");
                p.Panel02.set_horizontalgap("16");
                p.Panel02.set_type("horizontal");
                p.Panel02.set_visible("true");
                p.Panel02.move("39","136","100%","40",null,null);

                p.Static04_00_01.set_taborder("12");
                p.Static04_00_01.set_text("선택된 필터 <fc v=\'#0B50D0\'>4</fc>");
                p.Static04_00_01.set_flexshrink("0");
                p.Static04_00_01.set_usedecorate("true");
                p.Static04_00_01.set_cssclass("sta_WF_SchDetail");
                p.Static04_00_01.set_fittocontents("width");
                p.Static04_00_01.set_visible("true");
                p.Static04_00_01.move("78","267","142","40",null,null);

                p.Panel01_00.set_taborder("13");
                p.Panel01_00.set_flexwrap("wrap");
                p.Panel01_00.set_horizontalgap("8");
                p.Panel01_00.set_verticalgap("8");
                p.Panel01_00.set_fittocontents("height");
                p.Panel01_00.set_visible("true");
                p.Panel01_00.move("236","175","463","40",null,null);

                p.Button00.set_taborder("14");
                p.Button00.set_cssclass("btn_WF_TagReset");
                p.Button00.set_visible("true");
                p.Button00.set_accessibilitylabel("새로고침");
                p.Button00.move("205","279","40","40",null,null);

                p.Button00_01_05.set_taborder("15");
                p.Button00_01_05.set_text("유아");
                p.Button00_01_05.set_cssclass("btn_WF_Tag");
                p.Button00_01_05.set_visible("true");
                p.Button00_01_05.set_accessibilitylabel("태그");
                p.Button00_01_05.move("974","2580","81","40",null,null);

                p.Button00_01.set_taborder("16");
                p.Button00_01.set_text("임신출산");
                p.Button00_01.set_cssclass("btn_WF_Tag");
                p.Button00_01.set_visible("true");
                p.Button00_01.set_accessibilitylabel("태그");
                p.Button00_01.move("530","2580","96","40",null,null);

                p.Button00_01_00.set_taborder("17");
                p.Button00_01_00.set_text("아동청소년");
                p.Button00_01_00.set_cssclass("btn_WF_Tag");
                p.Button00_01_00.set_visible("true");
                p.Button00_01_00.set_accessibilitylabel("태그");
                p.Button00_01_00.move("604","2580","111","40",null,null);

                p.Button00_01_00_00.set_taborder("18");
                p.Button00_01_00_00.set_text("저소득");
                p.Button00_01_00_00.set_cssclass("btn_WF_Tag");
                p.Button00_01_00_00.set_visible("false");
                p.Button00_01_00_00.set_accessibilitylabel("태그");
                p.Button00_01_00_00.move("540","0","96","40",null,null);

                p.Panel02_03.set_taborder("19");
                p.Panel02_03.set_horizontalgap("12");
                p.Panel02_03.set_flexcrossaxisalign("center");
                p.Panel02_03.set_flexmainaxisalign("end");
                p.Panel02_03.move(null,"Panel01:37","588","39","39",null);

                p.StaFilter.set_taborder("20");
                p.StaFilter.set_text("필터");
                p.StaFilter.set_cssclass("sta_WF_Txt17B");
                p.StaFilter.set_fittocontents("width");
                p.StaFilter.set_visible("false");
                p.StaFilter.move("280","126","31","34",null,null);

                p.Div01.set_taborder("21");
                p.Div01.set_text("");
                p.Div01.set_accessibilityenable("false");
                p.Div01.move("267","130","39","39",null,null);

                p.Panel02_00.set_taborder("22");
                p.Panel02_00.set_horizontalgap("12");
                p.Panel02_00.set_flexcrossaxisalign("center");
                p.Panel02_00.set_visible("true");
                p.Panel02_00.move("0","-1","180","32",null,null);

                p.Sta01.set_taborder("23");
                p.Sta01.set_text("목록 표시 개수");
                p.Sta01.set_cssclass("sta_WF_Txt17B");
                p.Sta01.set_visible("true");
                p.Sta01.move("779","2739","102","32",null,null);

                p.Combo00_01.set_taborder("24");
                p.Combo00_01.set_cssclass("cbo_WF_TxtCom");
                p.Combo00_01.set_buttonsize("20 20");
                p.Combo00_01.set_innerdataset(Div00_00_form_Combo00_01_innerdataset);
                p.Combo00_01.set_codecolumn("codecolumn");
                p.Combo00_01.set_datacolumn("datacolumn");
                p.Combo00_01.set_visible("true");
                p.Combo00_01.set_accessibilitylabel("목록 표시 개수 선택");
                p.Combo00_01.set_text("4개");
                p.Combo00_01.set_value("0");
                p.Combo00_01.set_index("0");
                p.Combo00_01.move("893","2742","64","26",null,null);

                p.Static16_03.set_taborder("25");
                p.Static16_03.set_text("Static16");
                p.Static16_03.set_cssclass("sta_WF_BtnDivider");
                p.Static16_03.set_visible("true");
                p.Static16_03.set_accessibilityenable("false");
                p.Static16_03.move("962","2747","1","16",null,null);

                p.Panel02_01.set_taborder("26");
                p.Panel02_01.set_horizontalgap("12");
                p.Panel02_01.set_flexcrossaxisalign("center");
                p.Panel02_01.set_flexmainaxisalign("spaceevenly");
                p.Panel02_01.move("196","-1","260","34",null,null);

                p.Static00_04.set_taborder("27");
                p.Static00_04.set_text("정렬기준");
                p.Static00_04.set_cssclass("sta_WF_Txt17B");
                p.Static00_04.move("975","2738","61","34",null,null);

                p.Panel02_02.set_taborder("28");
                p.Panel02_02.set_horizontalgap("8");
                p.Panel02_02.move("1048","2740","190","30",null,null);

                p.Button01.set_taborder("29");
                p.Button01.set_text("관련도순");
                p.Button01.set_cssclass("btn_WF_TxtLineS");
                p.Button01.set_fittocontents("width");
                p.Button01.move("1048","2740","80","30",null,null);

                p.Button01_00.set_taborder("30");
                p.Button01_00.set_text("최신순");
                p.Button01_00.set_cssclass("btn_WF_TxtLine");
                p.Button01_00.set_fittocontents("width");
                p.Button01_00.set_visible("true");
                p.Button01_00.move("1124","2740","60","30",null,null);

                p.Button01_01.set_taborder("31");
                p.Button01_01.set_text("인기순");
                p.Button01_01.set_cssclass("btn_WF_TxtLine");
                p.Button01_01.set_fittocontents("width");
                p.Button01_01.set_visible("true");
                p.Button01_01.move("1183","2740","60","30",null,null);

                p.Static00_06.set_taborder("32");
                p.Static00_06.set_text("검색 결과 <fc v=\'#0B50D0\'><b v=\'true\'>24</b></fc>건");
                p.Static00_06.set_usedecorate("true");
                p.Static00_06.set_cssclass("sta_WF_Txt17B");
                p.Static00_06.set_fittocontents("width");
                p.Static00_06.move("39","Panel01:37","130","39",null,null);

                p.Panel00.set_taborder("33");
                p.Panel00.set_horizontalgap("24");
                p.Panel00.set_verticalgap("24");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_fittocontents("height");
                p.Panel00.move("39","Static00_06:20",null,"495","39",null);

                p.Panel03_01.set_taborder("34");
                p.Panel03_01.set_cssclass("pnl_WF_Detailbox");
                p.Panel03_01.set_spacing("31px");
                p.Panel03_01.set_type("vertical");
                p.Panel03_01.set_verticalgap("24");
                p.Panel03_01.set_fittocontents("height");
                p.Panel03_01.set_horizontalgap("24");
                p.Panel03_01.set_flexgrow("1");
                p.Panel03_01.move("39","Static00_06:24","392","495",null,null);

                p.Static00_04_00.set_taborder("35");
                p.Static00_04_00.set_text("신청중");
                p.Static00_04_00.set_cssclass("sta_WF_BadgeLit01");
                p.Static00_04_00.move("121","343","61","26",null,null);

                p.Panel05_00.set_taborder("36");
                p.Panel05_00.set_horizontalgap("16");
                p.Panel05_00.set_flexmainaxisalign("end");
                p.Panel05_00.set_flexcrossaxisalign("start");
                p.Panel05_00.set_flexgrow("1");
                p.Panel05_00.move("60","24","175","32",null,null);

                p.Button01_03.set_taborder("37");
                p.Button01_03.set_text("공유하기");
                p.Button01_03.set_cssclass("btn_WF_Share");
                p.Button01_03.move("185","340","96","32",null,null);

                p.Button01_00_01.set_taborder("38");
                p.Button01_00_01.set_text("찜하기");
                p.Button01_00_01.set_cssclass("btn_WF_Heart");
                p.Button01_00_01.move("295","340","79","32",null,null);

                p.Panel11.set_taborder("39");
                p.Panel11.set_type("vertical");
                p.Panel11.set_verticalgap("16");
                p.Panel11.set_fittocontents("height");
                p.Panel11.move("112","1124","100%","273",null,null);

                p.Panel10.set_taborder("40");
                p.Panel10.set_type("vertical");
                p.Panel10.set_fittocontents("height");
                p.Panel10.set_verticalgap("16");
                p.Panel10.set_spacing("0px 0px 16px 0px");
                p.Panel10.move("112","1126","100%","193",null,null);

                p.Button06_01.set_taborder("41");
                p.Button06_01.set_text("타이틀 영역");
                p.Button06_01.set_cssclass("btn_WF_TitLink");
                p.Button06_01.set_fittocontents("width");
                p.Button06_01.move("105","368","132","29",null,null);

                p.Static19_01.set_taborder("42");
                p.Static19_01.set_text("간단한 설명이 들어가는 영역입니다. 최대 3줄까지 작성합니다. 간단한 설명이 들어가는 영역입니다. 간단한 설명이 들어가는 영역입니다. ");
                p.Static19_01.set_fittocontents("height");
                p.Static19_01.set_cssclass("sta_WF_Para17RG");
                p.Static19_01.move("571","484","100%","90",null,null);

                p.Panel06_01.set_taborder("43");
                p.Panel06_01.set_horizontalgap("8");
                p.Panel06_01.move("95","530","100%","26",null,null);

                p.Static14_00_02.set_taborder("44");
                p.Static14_00_02.set_text("기간");
                p.Static14_00_02.set_cssclass("sta_WF_Txt19B");
                p.Static14_00_02.move("95","530","34","26",null,null);

                p.Static14_00_00_01.set_taborder("45");
                p.Static14_00_00_01.set_text("2023.11.01-2024.04.30");
                p.Static14_00_00_01.move("42","530","223","26",null,null);

                p.Panel02_01_00.set_taborder("46");
                p.Panel02_01_00.set_horizontalgap("8");
                p.Panel02_01_00.set_flexmainaxisalign("end");
                p.Panel02_01_00.set_fittocontents("height");
                p.Panel02_01_00.move("126","666","100%","64",null,null);

                p.Button00_04.set_taborder("47");
                p.Button00_04.set_text("신청하기");
                p.Button00_04.set_cssclass("btn_WF_Custom");
                p.Button00_04.move("262","666","112","48",null,null);

                p.Panel01_01.set_taborder("48");
                p.Panel01_01.set_horizontalgap("8");
                p.Panel01_01.set_spacing("16px 0px 0px 0px");
                p.Panel01_01.set_cssclass("pnl_WF_Topline");
                p.Panel01_01.set_verticalgap("8");
                p.Panel01_01.set_flexwrap("wrap");
                p.Panel01_01.set_fittocontents("height");
                p.Panel01_01.move("112","605","100%","93",null,null);

                p.Button00_00_00_06.set_taborder("49");
                p.Button00_00_00_06.set_text("#태그");
                p.Button00_00_00_06.set_cssclass("btn_WF_Tagline");
                p.Button00_00_00_06.set_accessibilitylabel("태그");
                p.Button00_00_00_06.move("103","804","60","32",null,null);

                p.Button00_00_00_00_01.set_taborder("50");
                p.Button00_00_00_00_01.set_text("#태그");
                p.Button00_00_00_00_01.set_cssclass("btn_WF_Tagline");
                p.Button00_00_00_00_01.set_accessibilitylabel("태그");
                p.Button00_00_00_00_01.move("163","804","60","32",null,null);

                p.Button00_00_00_01_01.set_taborder("51");
                p.Button00_00_00_01_01.set_text("#태그");
                p.Button00_00_00_01_01.set_cssclass("btn_WF_Tagline");
                p.Button00_00_00_01_01.set_accessibilitylabel("태그");
                p.Button00_00_00_01_01.move("223","804","60","32",null,null);

                p.Button00_00_00_02_01.set_taborder("52");
                p.Button00_00_00_02_01.set_text("#태그");
                p.Button00_00_00_02_01.set_cssclass("btn_WF_Tagline");
                p.Button00_00_00_02_01.set_accessibilitylabel("태그");
                p.Button00_00_00_02_01.move("283","804","60","32",null,null);

                p.Button00_00_00_03_01.set_taborder("53");
                p.Button00_00_00_03_01.set_text("#태그");
                p.Button00_00_00_03_01.set_cssclass("btn_WF_Tagline");
                p.Button00_00_00_03_01.set_accessibilitylabel("태그");
                p.Button00_00_00_03_01.move("343","804","60","32",null,null);

                p.Button00_00_00_04_01.set_taborder("54");
                p.Button00_00_00_04_01.set_text("#태그");
                p.Button00_00_00_04_01.set_cssclass("btn_WF_Tagline");
                p.Button00_00_00_04_01.set_accessibilitylabel("태그");
                p.Button00_00_00_04_01.move("403","804","60","32",null,null);

                p.Panel03_01_00.set_taborder("55");
                p.Panel03_01_00.set_cssclass("pnl_WF_Detailbox");
                p.Panel03_01_00.set_spacing("31px");
                p.Panel03_01_00.set_type("vertical");
                p.Panel03_01_00.set_verticalgap("24");
                p.Panel03_01_00.set_fittocontents("height");
                p.Panel03_01_00.set_horizontalgap("24");
                p.Panel03_01_00.set_flexgrow("1");
                p.Panel03_01_00.move("468","348","392","495",null,null);

                p.Panel04_00_00.set_taborder("56");
                p.Panel04_00_00.set_flexmainaxisalign("start");
                p.Panel04_00_00.set_flexcrossaxisalign("center");
                p.Panel04_00_00.set_spacing("0px");
                p.Panel04_00_00.set_verticalgap("24");
                p.Panel04_00_00.move("640","367","100%","32",null,null);

                p.Static00_04_00_00.set_taborder("57");
                p.Static00_04_00_00.set_text("신청중");
                p.Static00_04_00_00.set_cssclass("sta_WF_BadgeLit01");
                p.Static00_04_00_00.move("121","343","61","26",null,null);

                p.Panel05_00_00.set_taborder("58");
                p.Panel05_00_00.set_horizontalgap("16");
                p.Panel05_00_00.set_flexmainaxisalign("end");
                p.Panel05_00_00.set_flexcrossaxisalign("start");
                p.Panel05_00_00.set_flexgrow("1");
                p.Panel05_00_00.move("60","24","175","32",null,null);

                p.Button01_03_00.set_taborder("59");
                p.Button01_03_00.set_text("공유하기");
                p.Button01_03_00.set_cssclass("btn_WF_Share");
                p.Button01_03_00.move("185","340","96","32",null,null);

                p.Button01_00_01_00.set_taborder("60");
                p.Button01_00_01_00.set_text("찜하기");
                p.Button01_00_01_00.set_cssclass("btn_WF_Heart");
                p.Button01_00_01_00.move("295","340","79","32",null,null);

                p.Panel11_00.set_taborder("61");
                p.Panel11_00.set_type("vertical");
                p.Panel11_00.set_verticalgap("16");
                p.Panel11_00.set_fittocontents("height");
                p.Panel11_00.move("112","1124","100%","273",null,null);

                p.Panel10_00.set_taborder("62");
                p.Panel10_00.set_type("vertical");
                p.Panel10_00.set_fittocontents("height");
                p.Panel10_00.set_verticalgap("16");
                p.Panel10_00.set_spacing("0px 0px 16px 0px");
                p.Panel10_00.move("112","1126","100%","193",null,null);

                p.Button06_01_00.set_taborder("63");
                p.Button06_01_00.set_text("타이틀 영역");
                p.Button06_01_00.set_cssclass("btn_WF_TitLink");
                p.Button06_01_00.set_fittocontents("width");
                p.Button06_01_00.move("105","368","132","29",null,null);

                p.Static19_01_00.set_taborder("64");
                p.Static19_01_00.set_text("간단한 설명이 들어가는 영역입니다. 최대 3줄까지 작성합니다. 간단한 설명이 들어가는 영역입니다. 간단한 설명이 들어가는 영역입니다. ");
                p.Static19_01_00.set_fittocontents("height");
                p.Static19_01_00.set_cssclass("sta_WF_Para17RG");
                p.Static19_01_00.move("571","484","100%","90",null,null);

                p.Panel06_01_00.set_taborder("65");
                p.Panel06_01_00.set_horizontalgap("8");
                p.Panel06_01_00.move("95","530","100%","26",null,null);

                p.Static14_00_02_00.set_taborder("66");
                p.Static14_00_02_00.set_text("기간");
                p.Static14_00_02_00.set_cssclass("sta_WF_Txt19B");
                p.Static14_00_02_00.move("95","530","34","26",null,null);

                p.Static14_00_00_01_00.set_taborder("67");
                p.Static14_00_00_01_00.set_text("2023.11.01-2024.04.30");
                p.Static14_00_00_01_00.move("42","530","223","26",null,null);

                p.Panel02_01_00_00.set_taborder("68");
                p.Panel02_01_00_00.set_horizontalgap("8");
                p.Panel02_01_00_00.set_flexmainaxisalign("end");
                p.Panel02_01_00_00.set_fittocontents("height");
                p.Panel02_01_00_00.move("126","666","100%","64",null,null);

                p.Button00_04_00.set_taborder("69");
                p.Button00_04_00.set_text("신청하기");
                p.Button00_04_00.set_cssclass("btn_WF_Custom");
                p.Button00_04_00.move("262","666","112","48",null,null);

                p.Panel01_01_00.set_taborder("70");
                p.Panel01_01_00.set_horizontalgap("8");
                p.Panel01_01_00.set_spacing("16px 0px 0px 0px");
                p.Panel01_01_00.set_cssclass("pnl_WF_Topline");
                p.Panel01_01_00.set_verticalgap("8");
                p.Panel01_01_00.set_flexwrap("wrap");
                p.Panel01_01_00.set_fittocontents("height");
                p.Panel01_01_00.move("112","605","100%","93",null,null);

                p.Button00_00_00_06_00.set_taborder("71");
                p.Button00_00_00_06_00.set_text("#태그");
                p.Button00_00_00_06_00.set_cssclass("btn_WF_Tagline");
                p.Button00_00_00_06_00.set_accessibilitylabel("태그");
                p.Button00_00_00_06_00.move("103","804","60","32",null,null);

                p.Button00_00_00_00_01_00.set_taborder("72");
                p.Button00_00_00_00_01_00.set_text("#태그");
                p.Button00_00_00_00_01_00.set_cssclass("btn_WF_Tagline");
                p.Button00_00_00_00_01_00.set_accessibilitylabel("태그");
                p.Button00_00_00_00_01_00.move("163","804","60","32",null,null);

                p.Button00_00_00_01_01_00.set_taborder("73");
                p.Button00_00_00_01_01_00.set_text("#태그");
                p.Button00_00_00_01_01_00.set_cssclass("btn_WF_Tagline");
                p.Button00_00_00_01_01_00.set_accessibilitylabel("태그");
                p.Button00_00_00_01_01_00.move("223","804","60","32",null,null);

                p.Button00_00_00_02_01_00.set_taborder("74");
                p.Button00_00_00_02_01_00.set_text("#태그");
                p.Button00_00_00_02_01_00.set_cssclass("btn_WF_Tagline");
                p.Button00_00_00_02_01_00.set_accessibilitylabel("태그");
                p.Button00_00_00_02_01_00.move("283","804","60","32",null,null);

                p.Button00_00_00_03_01_00.set_taborder("75");
                p.Button00_00_00_03_01_00.set_text("#태그");
                p.Button00_00_00_03_01_00.set_cssclass("btn_WF_Tagline");
                p.Button00_00_00_03_01_00.set_accessibilitylabel("태그");
                p.Button00_00_00_03_01_00.move("343","804","60","32",null,null);

                p.Button00_00_00_04_01_00.set_taborder("76");
                p.Button00_00_00_04_01_00.set_text("#태그");
                p.Button00_00_00_04_01_00.set_cssclass("btn_WF_Tagline");
                p.Button00_00_00_04_01_00.set_accessibilitylabel("태그");
                p.Button00_00_00_04_01_00.move("403","804","60","32",null,null);

                p.Panel04_00.set_taborder("77");
                p.Panel04_00.set_flexmainaxisalign("start");
                p.Panel04_00.set_flexcrossaxisalign("center");
                p.Panel04_00.set_spacing("0px");
                p.Panel04_00.set_verticalgap("24");
                p.Panel04_00.move("640","367","100%","32",null,null);

                p.Static02_00.set_taborder("78");
                p.Static02_00.set_accessibilityenable("false");
                p.Static02_00.move("39","Panel00:0","60","39",null,null);
            	}
            );
            this.Div00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00_00.form
            obj = new Layout("Layout0","",0,0,this.Div00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel01.set_spacing("24px");
                p.Panel01.move("16","16",null,"329","16",null);

                p.Sta01.set_visible("false");

                p.Combo00_01.set_visible("false");

                p.Panel02_00.set_visible("false");

                p.Static04_00_01.set_visible("false");

                p.Button00.set_visible("false");

                p.Button00_01_05.set_visible("false");

                p.Button00_01.set_visible("false");

                p.Button00_01_00.set_visible("false");

                p.Button00_01_00_00.set_visible("false");

                p.Panel01_00.set_visible("false");

                p.Panel02.set_visible("false");

                p.Static00.set_visible("false");

                p.Panel02_03.move("16","Panel01:37",null,"39","16",null);

                p.Button01_00.set_visible("false");

                p.Button01_01.set_visible("false");

                p.Panel02_02.set_fittocontents("width");

                p.Panel00.move("16","Static00_06:20",null,"997","16",null);

                p.Panel03_01.set_spacing("15px");
                p.Panel03_01.move("39","0","446","478",null,null);

                p.Panel02_01.set_fittocontents("width");

                p.StaFilter.set_visible("true");

                p.Div01.set_visible("true");

                p.Static00_06.move("16","Panel01:37","130","39",null,null);

                p.Static02_00.move("15","1438","60","15",null,null);

                p.Panel03_01_00.move("468","348","446","494.99",null,null);
            	}
            );
            this.Div00_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00_01.form
            obj = new Layout("default","",0,0,this.Div00_01.form,
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
            this.Div00_01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00_01.form
            obj = new Layout("Layout0","",0,0,this.Div00_01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div00_01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00_01.form
            obj = new Layout("Layout0","",0,0,this.Div00_01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div00_01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div01_00.form
            obj = new Layout("default","",0,0,this.Div01_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00.set_taborder("0");
                p.Button00.set_cssclass("btn_WF_SchFilter");
                p.Button00.set_text("");
                p.Button00.set_visible("false");
                p.Button00.set_accessibilitylabel("필터 펼침");
                p.Button00.move(null,null,"34","34","0","0");

                p.Static04.set_taborder("1");
                p.Static04.set_text("4");
                p.Static04.set_cssclass("sta_WF_BadgeNum01");
                p.Static04.set_visible("false");
                p.Static04.move("0","0","26","20",null,null);
            	}
            );
            this.Div01_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div01_00.form
            obj = new Layout("Layout0","",0,0,this.Div01_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00.set_visible("true");

                p.Static04.set_visible("true");
            	}
            );
            this.Div01_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div01_00.form
            obj = new Layout("Layout0","",0,0,this.Div01_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div01_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div02_00.form.Div00.form
            obj = new Layout("default","",0,0,this.Div02_00.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button03.set_taborder("0");
                p.Button03.set_text("유형별 검색");
                p.Button03.set_cssclass("btn_WF_TabFirS");
                p.Button03.set_visible("true");
                p.Button03.set_flexgrow("1");
                p.Button03.set_accessibilityrole("tab");
                p.Button03.move("0","0","206","56",null,null);

                p.Button03_00.set_taborder("1");
                p.Button03_00.set_text("저자별 검색");
                p.Button03_00.set_cssclass("btn_WF_Tab");
                p.Button03_00.set_visible("true");
                p.Button03_00.set_flexgrow("1");
                p.Button03_00.set_accessibilityrole("tab");
                p.Button03_00.move("206","0","206","56",null,null);

                p.Button03_00_03.set_taborder("2");
                p.Button03_00_03.set_text("주제별 검색");
                p.Button03_00_03.set_cssclass("btn_WF_TabLast");
                p.Button03_00_03.set_visible("true");
                p.Button03_00_03.set_flexgrow("1");
                p.Button03_00_03.set_accessibilityrole("tab");
                p.Button03_00_03.move("411","0","206","56",null,null);
            	}
            );
            this.Div02_00.form.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div02_00.form.Div00.form
            obj = new Layout("Layout0","",0,0,this.Div02_00.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button03.set_cssclass("btn_WF_TabMS");
                p.Button03.move("0","0","115","48",null,null);

                p.Button03_00.set_cssclass("btn_WF_TabM");
                p.Button03_00.move("123","0","115","48",null,null);

                p.Button03_00_03.set_cssclass("btn_WF_TabM");
                p.Button03_00_03.move("246","0","115","48",null,null);
            	}
            );
            this.Div02_00.form.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div02_00.form
            obj = new Layout("default","",0,0,this.Div02_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static01.set_taborder("0");
                p.Static01.set_cssclass("sta_POP_Bg");
                p.Static01.set_text("");
                p.Static01.set_accessibilityenable("false");
                p.Static01.move("0","0",null,"920","0",null);

                p.Static00.set_taborder("1");
                p.Static00.set_text("고급검색");
                p.Static00.set_cssclass("sta_POP_Title");
                p.Static00.set_accessibilityrole("heading2");
                p.Static00.move("40","56",null,"36","49",null);

                p.Div00.set_taborder("2");
                p.Div00.set_text("Div00");
                p.Div00.set_formscrolltype("horizontal");
                p.Div00.set_accessibilityrole("tab");
                p.Div00.set_accessibilitylabel("고급검색 탭 목록시작");
                p.Div00.move("40","132",null,"56","40",null);

                p.Static00_08.set_taborder("3");
                p.Static00_08.set_text("자료유형");
                p.Static00_08.set_cssclass("sta_WF_Txt19B");
                p.Static00_08.move("40","Div00:40","278","32",null,null);

                p.CheckBoxSet00.set_taborder("4");
                p.CheckBoxSet00.set_innerdataset(Div02_00_form_CheckBoxSet00_innerdataset);
                p.CheckBoxSet00.set_codecolumn("codecolumn");
                p.CheckBoxSet00.set_datacolumn("datacolumn");
                p.CheckBoxSet00.set_readonlycolumn("readonlycolumn");
                p.CheckBoxSet00.set_columncount("3");
                p.CheckBoxSet00.move("44","Static00_08:16","611","144",null,null);

                p.Static00_08_00.set_taborder("5");
                p.Static00_08_00.set_text("검색어");
                p.Static00_08_00.set_cssclass("sta_WF_Txt19B");
                p.Static00_08_00.move("40","CheckBoxSet00:40","278","32",null,null);

                p.Panel00_00.set_taborder("6");
                p.Panel00_00.set_type("vertical");
                p.Panel00_00.set_verticalgap("8");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.move("257","241","404","79",null,null);

                p.Panel01.set_taborder("7");
                p.Panel01.set_horizontalgap("16");
                p.Panel01.set_flexcrossaxisalign("end");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.set_fittocontents("height");
                p.Panel01.set_verticalgap("24");
                p.Panel01.move("40","Static00_08_00:16","620","285",null,null);

                p.StaDt01.set_taborder("8");
                p.StaDt01.set_cssclass("sta_WF_Lable15R");
                p.StaDt01.set_text("레이블");
                p.StaDt01.move("94","57","100%","23",null,null);

                p.Edit00.set_taborder("9");
                p.Edit00.set_displaynulltext("내용을 입력하세요");
                p.Edit00.set_accessibilitylabel("레이블");
                p.Edit00.move("395","107","100%","48",null,null);

                p.Panel00_01.set_taborder("10");
                p.Panel00_01.set_type("vertical");
                p.Panel00_01.set_verticalgap("8");
                p.Panel00_01.move("10","10","200","79",null,null);

                p.StaDt02.set_taborder("11");
                p.StaDt02.set_text("조건설정");
                p.StaDt02.set_cssclass("sta_WF_Lable15R");
                p.StaDt02.move("141","98","200","23",null,null);

                p.Combo00.set_taborder("12");
                p.Combo00.set_displaynulltext("선텍해주세요");
                p.Combo00.set_accessibilitylabel("조건설정");
                p.Combo00.set_text("");
                p.Combo00.set_value("선텍해주세요");
                p.Combo00.set_index("-1");
                p.Combo00.move("144","106","200","48",null,null);

                p.Panel00_00_00.set_taborder("13");
                p.Panel00_00_00.set_type("vertical");
                p.Panel00_00_00.set_verticalgap("8");
                p.Panel00_00_00.set_flexgrow("1");
                p.Panel00_00_00.move("10","10","390","79",null,null);

                p.StaDt03.set_taborder("14");
                p.StaDt03.set_cssclass("sta_WF_Lable15R");
                p.StaDt03.set_text("레이블");
                p.StaDt03.move("104","67","100%","23",null,null);

                p.Edit00_00.set_taborder("15");
                p.Edit00_00.set_displaynulltext("내용을 입력하세요");
                p.Edit00_00.set_accessibilitylabel("레이블");
                p.Edit00_00.move("405","117","100%","48",null,null);

                p.Panel00_01_00.set_taborder("16");
                p.Panel00_01_00.set_type("vertical");
                p.Panel00_01_00.set_verticalgap("8");
                p.Panel00_01_00.move("416","10","200","79",null,null);

                p.StaDt04.set_taborder("17");
                p.StaDt04.set_text("조건설정");
                p.StaDt04.set_cssclass("sta_WF_Lable15R");
                p.StaDt04.move("151","108","200","23",null,null);

                p.Combo00_00.set_taborder("18");
                p.Combo00_00.set_displaynulltext("선텍해주세요");
                p.Combo00_00.set_accessibilitylabel("조건설정");
                p.Combo00_00.set_text("");
                p.Combo00_00.set_value("선텍해주세요");
                p.Combo00_00.set_index("-1");
                p.Combo00_00.move("154","116","200","48",null,null);

                p.Panel00_00_01.set_taborder("19");
                p.Panel00_00_01.set_type("vertical");
                p.Panel00_00_01.set_verticalgap("8");
                p.Panel00_00_01.set_flexgrow("1");
                p.Panel00_00_01.move("20","20","390","79",null,null);

                p.StaDt05.set_taborder("20");
                p.StaDt05.set_cssclass("sta_WF_Lable15R");
                p.StaDt05.set_text("레이블");
                p.StaDt05.move("114","77","100%","23",null,null);

                p.Edit00_01.set_taborder("21");
                p.Edit00_01.set_displaynulltext("내용을 입력하세요");
                p.Edit00_01.set_accessibilitylabel("레이블");
                p.Edit00_01.move("415","127","100%","48",null,null);

                p.Panel00_02.set_taborder("22");
                p.Panel00_02.set_type("vertical");
                p.Panel00_02.set_verticalgap("8");
                p.Panel00_02.move("426","20","200","79",null,null);

                p.StaDt06.set_taborder("23");
                p.StaDt06.set_text("조건설정");
                p.StaDt06.set_cssclass("sta_WF_Lable15R");
                p.StaDt06.move("161","118","200","23",null,null);

                p.Combo00_01.set_taborder("24");
                p.Combo00_01.set_displaynulltext("선텍해주세요");
                p.Combo00_01.set_accessibilitylabel("조건설정");
                p.Combo00_01.set_text("");
                p.Combo00_01.set_value("선텍해주세요");
                p.Combo00_01.set_index("-1");
                p.Combo00_01.move("164","126","200","48",null,null);

                p.Button01.set_taborder("25");
                p.Button01.set_text("아니요");
                p.Button01.move(null,"Panel01:40","95","48","143",null);

                p.Button01_00.set_taborder("26");
                p.Button01_00.set_text("예");
                p.Button01_00.set_cssclass("btn_WF_Crud01");
                p.Button01_00.move(null,"Panel01:40","95","48","40",null);

                p.Button00.set_taborder("27");
                p.Button00.set_cssclass("btn_POP_Cancel");
                p.Button00.set_accessibilitylabel("닫기");
                p.Button00.move(null,"24","40","40","33",null);
            	}
            );
            this.Div02_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div02_00.form
            obj = new Layout("Layout0","",0,0,this.Div02_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static01.set_text("");
                p.Static01.move("0","0",null,"1229","0",null);

                p.CheckBoxSet00.set_columncount("2");
                p.CheckBoxSet00.move("24","Static00_08:16",null,"240","24",null);

                p.Static00.move("24","56",null,"36","24",null);

                p.Static00_08.move("24","Div00:24","278","32",null,null);

                p.StaDt01.set_text("레이블");
                p.StaDt01.move("94","57","25%","23",null,null);

                p.Static00_08_00.move("24","CheckBoxSet00:24","278","32",null,null);

                p.Panel01.set_verticalgap("16");
                p.Panel01.move("24","Static00_08_00:16",null,"554","24",null);

                p.Panel00_01.set_flexgrow("1");

                p.Combo00.move("144","106","100%","48",null,null);

                p.Combo00_01.move("164","126","100%","48",null,null);

                p.Panel00_02.set_flexgrow("1");

                p.Edit00.move("395","107","100%","48",null,null);

                p.StaDt02.move("141","98","25%","23",null,null);

                p.StaDt03.move("104","67","25%","23",null,null);

                p.Edit00_00.move("405","117","100%","48",null,null);

                p.StaDt04.move("151","108","50%","23",null,null);

                p.Combo00_00.move("154","116","100%","48",null,null);

                p.StaDt05.move("114","77","25%","23",null,null);

                p.Edit00_01.move("415","127","100%","48",null,null);

                p.StaDt06.move("161","118","25%","23",null,null);

                p.Panel00_01_00.move("416","10","100%","79",null,null);

                p.Button01_00.move(null,"Panel01:24","90","48","24",null);

                p.Button01.move(null,"Panel01:24","90","48","122",null);

                p.Div00.set_formscrollbartype("autoindicator none");
                p.Div00.move("24","132",null,"48","24",null);
            	}
            );
            this.Div02_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",888,6420,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("필터링∙정렬");

                p.staH2.set_taborder("0");
                p.staH2.set_text("필터링∙정렬");
                p.staH2.set_cssclass("sta_WF_H2_pc");
                p.staH2.set_fittocontents("width");
                p.staH2.set_accessibilityrole("heading2");
                p.staH2.move("0","0","190","60",null,null);

                p.staDivider.set_taborder("1");
                p.staDivider.set_cssclass("sta_WF_line");
                p.staDivider.set_accessibilityenable("false");
                p.staDivider.move("staH2:15","20","1","21",null,null);

                p.staEtit.set_taborder("2");
                p.staEtit.set_text("Filter∙Align");
                p.staEtit.set_cssclass("sta_WF_ParaH3_pc");
                p.staEtit.move("staDivider:15","0","220","60",null,null);

                p.staDescript.set_taborder("3");
                p.staDescript.set_text("필터링·정렬은 데이터 집합에서 사용자가 원하는 속성과 범주에 속하는 데이터 항목을 선별적으로 표시하거나 특정 속성/범주를 기준으로 조직화하는 방법이다. 필터링·정렬을 이용하면 데이터 목록에서 탐색할 범위를 좁힐 수 있기 때문에 검색 결과 등 목록을 탐색하여 원하는 정보를 찾는 시간을 줄일 수 있다.");
                p.staDescript.set_cssclass("sta_WF_Descript");
                p.staDescript.set_fittocontents("height");
                p.staDescript.move("0","85",null,"126","0",null);

                p.Static00_00.set_taborder("4");
                p.Static00_00.set_text("구조");
                p.Static00_00.set_cssclass("sta_WF_H3_pc");
                p.Static00_00.set_accessibilityrole("heading3");
                p.Static00_00.move("0","staDescript:80","300","60",null,null);

                p.Div00.set_taborder("5");
                p.Div00.set_text("Div00");
                p.Div00.set_cssclass("div_GUIDE_SubBg");
                p.Div00.set_fittocontents("height");
                p.Div00.set_accessibilityenable("false");
                p.Div00.move("0","Static00_00:24",null,"543","0",null);

                p.Static00_03.set_taborder("6");
                p.Static00_03.set_text("텍스트 필터(Text)");
                p.Static00_03.set_cssclass("sta_WF_H5");
                p.Static00_03.set_accessibilityrole("heading5");
                p.Static00_03.move("0","Div00:40","278","32",null,null);

                p.Div02.set_taborder("7");
                p.Div02.set_text("Div02");
                p.Div02.set_cssclass("div_GUIDE_SubBg");
                p.Div02.set_fittocontents("height");
                p.Div02.set_accessibilityenable("false");
                p.Div02.move("0","Static00_03:24",null,"208","0",null);

                p.Static00_04.set_taborder("8");
                p.Static00_04.set_text("스코프 필터(Scope)");
                p.Static00_04.set_cssclass("sta_WF_H5");
                p.Static00_04.set_accessibilityrole("heading5");
                p.Static00_04.move("0","Div02:40","278","32",null,null);

                p.Div03.set_taborder("9");
                p.Div03.set_text("Div03");
                p.Div03.set_cssclass("div_GUIDE_SubBg");
                p.Div03.set_fittocontents("height");
                p.Div03.set_accessibilityenable("false");
                p.Div03.move("0","Static00_04:24",null,"230","0",null);

                p.Static00_05.set_taborder("10");
                p.Static00_05.set_text("선택형 필터(Selection)");
                p.Static00_05.set_cssclass("sta_WF_H5");
                p.Static00_05.set_accessibilityrole("heading5");
                p.Static00_05.move("0","Div03:40","278","32",null,null);

                p.Div04.set_taborder("11");
                p.Div04.set_text("Div04");
                p.Div04.set_cssclass("div_GUIDE_SubBg");
                p.Div04.set_fittocontents("height");
                p.Div04.set_accessibilityenable("false");
                p.Div04.move("0","Static00_05:24",null,"200","0",null);

                p.Static00_06.set_taborder("12");
                p.Static00_06.set_text("범위 필터(Range)");
                p.Static00_06.set_cssclass("sta_WF_H5");
                p.Static00_06.set_accessibilityrole("heading5");
                p.Static00_06.move("0","Div04:40","278","32",null,null);

                p.Div05.set_taborder("13");
                p.Div05.set_text("Div05");
                p.Div05.set_cssclass("div_GUIDE_SubBg");
                p.Div05.set_fittocontents("height");
                p.Div05.set_accessibilityenable("false");
                p.Div05.move("0","Static00_06:24",null,"204","0",null);

                p.Static00_07.set_taborder("14");
                p.Static00_07.set_text("쿼리 필터(Query)");
                p.Static00_07.set_cssclass("sta_WF_H5");
                p.Static00_07.set_accessibilityrole("heading5");
                p.Static00_07.move("0","Div05:40","278","32",null,null);

                p.Div06.set_taborder("15");
                p.Div06.set_text("Div06");
                p.Div06.set_cssclass("div_GUIDE_SubBg");
                p.Div06.set_fittocontents("height");
                p.Div06.set_accessibilityenable("false");
                p.Div06.move("0","Static00_07:24",null,"584","0",null);

                p.Static00_07_00.set_taborder("16");
                p.Static00_07_00.set_text("레이아웃");
                p.Static00_07_00.set_cssclass("sta_WF_H3_pc");
                p.Static00_07_00.set_accessibilityrole("heading3");
                p.Static00_07_00.move("0","Div06:80","130","40",null,null);

                p.Static00_07_01.set_taborder("17");
                p.Static00_07_01.set_text("수평 막대(Filter bar)");
                p.Static00_07_01.set_cssclass("sta_WF_H5");
                p.Static00_07_01.set_accessibilityrole("heading4");
                p.Static00_07_01.move("0","Static00_07_00:24","278","32",null,null);

                p.Div00_00.set_taborder("18");
                p.Div00_00.set_text("Div00");
                p.Div00_00.set_cssclass("div_WF_Detailbox");
                p.Div00_00.set_fittocontents("height");
                p.Div00_00.set_accessibilityenable("false");
                p.Div00_00.move("0","Static00_07_01:24",null,"886","0",null);

                p.Static00_07_01_00.set_taborder("19");
                p.Static00_07_01_00.set_text("사이드 패널(Aside panel)");
                p.Static00_07_01_00.set_cssclass("sta_WF_H5");
                p.Static00_07_01_00.set_accessibilityrole("heading5");
                p.Static00_07_01_00.move("0","Div00_00:40","278","32",null,null);

                p.Panel00.set_taborder("20");
                p.Panel00.set_type("vertical");
                p.Panel00.set_spacing("64px 0px");
                p.Panel00.set_flexcrossaxisalign("center");
                p.Panel00.set_flexmainaxisalign("center");
                p.Panel00.set_cssclass("pnl_WF_SchBarSqu");
                p.Panel00.move("0","Static00_07_01_00:4",null,"236","0",null);

                p.Panel01.set_taborder("21");
                p.Panel01.set_type("vertical");
                p.Panel01.set_verticalgap("12");
                p.Panel01.move("261","64","461","100",null,null);

                p.Div00_01.set_taborder("22");
                p.Div00_01.set_text("Div00");
                p.Div00_01.set_flexgrow("1");
                p.Div00_01.move("190","4060","100%","48",null,null);

                p.Button00_01.set_taborder("23");
                p.Button00_01.set_text("고급검색");
                p.Button00_01.set_cssclass("btn_WF_MultiSch");
                p.Button00_01.move("571","4060","96","40",null,null);

                p.Static01.set_taborder("24");
                p.Static01.set_text("검색 필터");
                p.Static01.set_cssclass("sta_WF_H3_pc");
                p.Static01.set_visible("true");
                p.Static01.move("0","Panel00:69","281","40",null,null);

                p.Button01.set_taborder("25");
                p.Button01.set_text("검색대상");
                p.Button01.set_cssclass("btn_WF_SideSchCol");
                p.Button01.set_visible("true");
                p.Button01.move("0","Static01:20","282","58",null,null);

                p.Static04.set_taborder("26");
                p.Static04.set_text("4");
                p.Static04.set_cssclass("sta_WF_BadgeNum01");
                p.Static04.set_visible("true");
                p.Static04.set_accessibilitylabel("검색대상");
                p.Static04.move("62","Static01:42","26","20",null,null);

                p.CheckBoxSet00.set_taborder("27");
                p.CheckBoxSet00.set_innerdataset(CheckBoxSet00_innerdataset);
                p.CheckBoxSet00.set_codecolumn("codecolumn");
                p.CheckBoxSet00.set_datacolumn("datacolumn");
                p.CheckBoxSet00.set_readonlycolumn("readonlycolumn");
                p.CheckBoxSet00.set_direction("vertical");
                p.CheckBoxSet00.set_visible("true");
                p.CheckBoxSet00.set_value("1,2,3,5");
                p.CheckBoxSet00.set_index("1,2,3,5");
                p.CheckBoxSet00.move("0","Button01:0","282","288",null,null);

                p.Button01_00_01.set_taborder("28");
                p.Button01_00_01.set_text("검색기간");
                p.Button01_00_01.set_cssclass("btn_WF_SideSchCol");
                p.Button01_00_01.set_visible("true");
                p.Button01_00_01.move("0","CheckBoxSet00:8","282","58",null,null);

                p.Static04_00.set_taborder("29");
                p.Static04_00.set_text("4");
                p.Static04_00.set_cssclass("sta_WF_BadgeNum01");
                p.Static04_00.set_visible("true");
                p.Static04_00.set_accessibilitylabel("검색기간");
                p.Static04_00.move("64","CheckBoxSet00:30","26","20",null,null);

                p.Panel03.set_taborder("30");
                p.Panel03.set_horizontalgap("8");
                p.Panel03.set_visible("true");
                p.Panel03.move("0","Button01_00_01:8","282","40",null,null);

                p.Button02.set_taborder("31");
                p.Button02.set_text("1개월");
                p.Button02.set_cssclass("btn_WF_Chk");
                p.Button02.set_visible("true");
                p.Button02.move("388","5060","75","40",null,null);

                p.Button02_00.set_taborder("32");
                p.Button02_00.set_text("3개월");
                p.Button02_00.set_cssclass("btn_WF_ChkS");
                p.Button02_00.set_visible("true");
                p.Button02_00.move("468","5060","75","40",null,null);

                p.Button02_01.set_taborder("33");
                p.Button02_01.set_text("6개월");
                p.Button02_01.set_cssclass("btn_WF_Chk");
                p.Button02_01.set_visible("true");
                p.Button02_01.move("548","5060","75","40",null,null);

                p.Button02_02.set_taborder("34");
                p.Button02_02.set_text("1년");
                p.Button02_02.set_cssclass("btn_WF_Chk");
                p.Button02_02.set_visible("true");
                p.Button02_02.move("628","5060","60","40",null,null);

                p.Panel01_01.set_taborder("35");
                p.Panel01_01.set_horizontalgap("4");
                p.Panel01_01.set_flexcrossaxisalign("end");
                p.Panel01_01.set_flexwrap("wrap");
                p.Panel01_01.set_fittocontents("height");
                p.Panel01_01.set_verticalgap("24");
                p.Panel01_01.set_visible("true");
                p.Panel01_01.move("1","Panel03:24","282","79",null,null);

                p.Panel00_00.set_taborder("36");
                p.Panel00_00.set_type("vertical");
                p.Panel00_00.set_verticalgap("8");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.set_visible("true");
                p.Panel00_00.move("84","47","133","79",null,null);

                p.Static01_01_02_01.set_taborder("37");
                p.Static01_01_02_01.set_text("시작날짜");
                p.Static01_01_02_01.set_cssclass("sta_WF_Lable15R");
                p.Static01_01_02_01.set_visible("true");
                p.Static01_01_02_01.move("84","47","100%","23",null,null);

                p.Calendar00.set_taborder("38");
                p.Calendar00.set_value("20241002");
                p.Calendar00.set_dateformat("yyyy.MM.dd ddd");
                p.Calendar00.set_editformat("yyyy.MM.dd");
                p.Calendar00.set_daysize("44 44");
                p.Calendar00.set_headheight("56");
                p.Calendar00.set_popupsize("384 437");
                p.Calendar00.set_usetrailingday("true");
                p.Calendar00.set_visible("true");
                p.Calendar00.move("502","141","100%","48",null,null);

                p.Static00_01.set_taborder("39");
                p.Static00_01.set_text("-");
                p.Static00_01.set_visible("true");
                p.Static00_01.move("502","-2321","7","48",null,null);

                p.Panel00_00_00.set_taborder("40");
                p.Panel00_00_00.set_type("vertical");
                p.Panel00_00_00.set_verticalgap("8");
                p.Panel00_00_00.set_flexgrow("1");
                p.Panel00_00_00.set_visible("true");
                p.Panel00_00_00.move("94","57","133","79",null,null);

                p.Static01_01_02_01_00.set_taborder("41");
                p.Static01_01_02_01_00.set_text("종료날짜");
                p.Static01_01_02_01_00.set_cssclass("sta_WF_Lable15R");
                p.Static01_01_02_01_00.set_visible("true");
                p.Static01_01_02_01_00.move("94","57","100%","23",null,null);

                p.Calendar00_00.set_taborder("42");
                p.Calendar00_00.set_editformat("yyyy.MM.dd");
                p.Calendar00_00.set_dateformat("yyyy.MM.dd ddd");
                p.Calendar00_00.set_value("20241202");
                p.Calendar00_00.set_daysize("44 44");
                p.Calendar00_00.set_headheight("56");
                p.Calendar00_00.set_popupsize("384 437");
                p.Calendar00_00.set_usetrailingday("true");
                p.Calendar00_00.set_visible("true");
                p.Calendar00_00.move("512","151","100%","48",null,null);

                p.Button01_00_02.set_taborder("43");
                p.Button01_00_02.set_text("자료유형");
                p.Button01_00_02.set_cssclass("btn_WF_SideSchCol");
                p.Button01_00_02.set_visible("true");
                p.Button01_00_02.move("0","Panel01_01:20","282","58",null,null);

                p.CheckBoxSet00_00.set_taborder("44");
                p.CheckBoxSet00_00.set_innerdataset(CheckBoxSet00_00_innerdataset);
                p.CheckBoxSet00_00.set_codecolumn("codecolumn");
                p.CheckBoxSet00_00.set_datacolumn("datacolumn");
                p.CheckBoxSet00_00.set_readonlycolumn("readonlycolumn");
                p.CheckBoxSet00_00.set_direction("vertical");
                p.CheckBoxSet00_00.set_visible("true");
                p.CheckBoxSet00_00.set_accessibilitylabel("자료유형");
                p.CheckBoxSet00_00.set_value("0");
                p.CheckBoxSet00_00.set_index("0");
                p.CheckBoxSet00_00.move("0","Button01_00_02:8","282","90",null,null);

                p.Button01_00.set_taborder("45");
                p.Button01_00.set_text("자료 이용 장소");
                p.Button01_00.set_cssclass("btn_WF_SideSchExp");
                p.Button01_00.set_visible("true");
                p.Button01_00.move("0","CheckBoxSet00_00:8","282","58",null,null);

                p.Button01_00_00.set_taborder("46");
                p.Button01_00_00.set_text("자료 언어");
                p.Button01_00_00.set_cssclass("btn_WF_SideSchExp");
                p.Button01_00_00.set_visible("true");
                p.Button01_00_00.move("0","Button01_00:0","282","58",null,null);

                p.Static02.set_taborder("47");
                p.Static02.set_cssclass("sta_WF_Divider");
                p.Static02.set_visible("true");
                p.Static02.move("0","Button01_00_00:0","282","24",null,null);

                p.Button03.set_taborder("48");
                p.Button03.set_text("초기화");
                p.Button03.set_visible("true");
                p.Button03.move("0","Static02:0","133","48",null,null);

                p.Button03_00.set_taborder("49");
                p.Button03_00.set_text("적용하기");
                p.Button03_00.set_cssclass("btn_WF_Crud01");
                p.Button03_00.set_visible("true");
                p.Button03_00.move("Button03:16","Static02:0","133","48",null,null);

                p.Panel02.set_taborder("50");
                p.Panel02.set_horizontalgap("16");
                p.Panel02.set_type("horizontal");
                p.Panel02.set_cssclass("pnl_WF_SchBar");
                p.Panel02.set_spacing("20px 24px");
                p.Panel02.set_visible("true");
                p.Panel02.move("346","Panel00:64",null,"80","0",null);

                p.Static04_00_01.set_taborder("51");
                p.Static04_00_01.set_text("적용된 고급검색 조건 <fc v=\'#0B50D0\'>6</fc>");
                p.Static04_00_01.set_flexshrink("0");
                p.Static04_00_01.set_usedecorate("true");
                p.Static04_00_01.set_cssclass("sta_WF_SchDetail");
                p.Static04_00_01.set_fittocontents("width");
                p.Static04_00_01.set_visible("true");
                p.Static04_00_01.move("78","267","170","40",null,null);

                p.Panel01_00.set_taborder("52");
                p.Panel01_00.set_flexwrap("wrap");
                p.Panel01_00.set_horizontalgap("8");
                p.Panel01_00.set_verticalgap("8");
                p.Panel01_00.set_fittocontents("height");
                p.Panel01_00.move("235","4280","282","40",null,null);

                p.Button00.set_taborder("53");
                p.Button00.set_cssclass("btn_WF_TagReset");
                p.Button00.set_visible("true");
                p.Button00.set_accessibilitylabel("새로고침");
                p.Button00.move("205","279","40","40",null,null);

                p.Button00_01_05.set_taborder("54");
                p.Button00_01_05.set_text("뉴스");
                p.Button00_01_05.set_cssclass("btn_WF_Tag");
                p.Button00_01_05.set_visible("true");
                p.Button00_01_05.set_accessibilitylabel("태그");
                p.Button00_01_05.move("974","2580","81","40",null,null);

                p.Button00_01_00.set_taborder("55");
                p.Button00_01_00.set_text("자주 묻는 질문");
                p.Button00_01_00.set_cssclass("btn_WF_Tag");
                p.Button00_01_00.set_visible("false");
                p.Button00_01_00.set_accessibilitylabel("태그");
                p.Button00_01_00.move("530","2580","137","40",null,null);

                p.Panel02_03.set_taborder("56");
                p.Panel02_03.set_horizontalgap("12");
                p.Panel02_03.set_flexcrossaxisalign("center");
                p.Panel02_03.set_flexmainaxisalign("end");
                p.Panel02_03.move("300","Panel02:21",null,"39","0",null);

                p.Static01_00.set_taborder("57");
                p.Static01_00.set_text("필터");
                p.Static01_00.set_cssclass("sta_WF_Txt17B");
                p.Static01_00.set_fittocontents("width");
                p.Static01_00.set_visible("false");
                p.Static01_00.move("280","126","31","34",null,null);

                p.Div01_00.set_taborder("58");
                p.Div01_00.set_text("");
                p.Div01_00.set_visible("true");
                p.Div01_00.move("267","130","39","39",null,null);

                p.Panel02_00.set_taborder("59");
                p.Panel02_00.set_horizontalgap("12");
                p.Panel02_00.set_flexcrossaxisalign("center");
                p.Panel02_00.set_visible("true");
                p.Panel02_00.move("0","-1","171","32",null,null);

                p.Static01_01.set_taborder("60");
                p.Static01_01.set_text("목록 표시 개수");
                p.Static01_01.set_cssclass("sta_WF_Txt17B");
                p.Static01_01.move("779","2739","102","32",null,null);

                p.Combo00_01.set_taborder("61");
                p.Combo00_01.set_cssclass("cbo_WF_TxtCom");
                p.Combo00_01.set_buttonsize("20 20");
                p.Combo00_01.set_innerdataset(Combo00_01_innerdataset);
                p.Combo00_01.set_codecolumn("codecolumn");
                p.Combo00_01.set_datacolumn("datacolumn");
                p.Combo00_01.set_accessibilitylabel("목록 표시 개수 선택");
                p.Combo00_01.set_text("4개");
                p.Combo00_01.set_value("0");
                p.Combo00_01.set_index("0");
                p.Combo00_01.move("893","2742","57","26",null,null);

                p.Static16_03.set_taborder("62");
                p.Static16_03.set_text("Static16");
                p.Static16_03.set_cssclass("sta_WF_BtnDivider");
                p.Static16_03.set_visible("true");
                p.Static16_03.set_accessibilityenable("false");
                p.Static16_03.move("962","2747","1","16",null,null);

                p.Panel02_01.set_taborder("63");
                p.Panel02_01.set_horizontalgap("12");
                p.Panel02_01.set_flexcrossaxisalign("center");
                p.Panel02_01.set_flexmainaxisalign("spaceevenly");
                p.Panel02_01.move("196","-1","260","32",null,null);

                p.Static00_04_00.set_taborder("64");
                p.Static00_04_00.set_text("정렬기준");
                p.Static00_04_00.set_cssclass("sta_WF_Txt17B");
                p.Static00_04_00.move("975","2738","61","34",null,null);

                p.Panel02_02.set_taborder("65");
                p.Panel02_02.set_horizontalgap("8");
                p.Panel02_02.set_flexcrossaxisalign("center");
                p.Panel02_02.move("1048","2740","190","30",null,null);

                p.Button01_01.set_taborder("66");
                p.Button01_01.set_text("관련도순");
                p.Button01_01.set_cssclass("btn_WF_TxtLineS");
                p.Button01_01.set_fittocontents("width");
                p.Button01_01.move("1048","2740","80","30",null,null);

                p.Button01_00_03.set_taborder("67");
                p.Button01_00_03.set_text("최신순");
                p.Button01_00_03.set_cssclass("btn_WF_TxtLine");
                p.Button01_00_03.set_fittocontents("width");
                p.Button01_00_03.set_visible("true");
                p.Button01_00_03.move("1124","2740","60","30",null,null);

                p.Button01_01_00.set_taborder("68");
                p.Button01_01_00.set_text("인기순");
                p.Button01_01_00.set_cssclass("btn_WF_TxtLine");
                p.Button01_01_00.set_fittocontents("width");
                p.Button01_01_00.set_visible("true");
                p.Button01_01_00.move("1183","2740","60","30",null,null);

                p.Panel04.set_taborder("69");
                p.Panel04.set_type("horizontal");
                p.Panel04.set_horizontalgap("12");
                p.Panel04.set_flexcrossaxisalign("center");
                p.Panel04.set_fittocontents("height");
                p.Panel04.set_verticalgap("2");
                p.Panel04.move("346","Panel02_03:24","315","39",null,null);

                p.Static00_06_00.set_taborder("70");
                p.Static00_06_00.set_text("적용된 검색어 <fc v=\'#0B50D0\'><b v=\'true\'>퇴직</b></fc>");
                p.Static00_06_00.set_usedecorate("true");
                p.Static00_06_00.set_cssclass("sta_WF_Txt17B");
                p.Static00_06_00.set_fittocontents("width");
                p.Static00_06_00.move("335","Panel02_03:24","150","39",null,null);

                p.Static16_03_00.set_taborder("71");
                p.Static16_03_00.set_text("Static16");
                p.Static16_03_00.set_cssclass("sta_WF_BtnDivider");
                p.Static16_03_00.set_visible("true");
                p.Static16_03_00.set_accessibilityenable("false");
                p.Static16_03_00.move("575","4445","1","16",null,null);

                p.Static00_06_00_00.set_taborder("72");
                p.Static00_06_00_00.set_text("검색결과 <fc v=\'#0B50D0\'><b v=\'true\'>22,459</b>개</fc>");
                p.Static00_06_00_00.set_usedecorate("true");
                p.Static00_06_00_00.set_cssclass("sta_WF_Txt17B");
                p.Static00_06_00_00.set_fittocontents("width");
                p.Static00_06_00_00.move("627","4432","149","39",null,null);

                p.Static03.set_taborder("73");
                p.Static03.set_cssclass("sta_WF_DividerB");
                p.Static03.set_accessibilityenable("false");
                p.Static03.move("346","Panel04:24",null,"1","0",null);

                p.Static06.set_taborder("74");
                p.Static06.set_text("뉴스∙소식");
                p.Static06.set_cssclass("sta_WF_BadgeLit01");
                p.Static06.move("347","Static03:40","81","26",null,null);

                p.Static05.set_taborder("75");
                p.Static05.set_text("2023.11.01");
                p.Static05.set_cssclass("sta_WF_Para17RG");
                p.Static05.move("Static06:16","Static03:40","120","26",null,null);

                p.Panel08.set_taborder("76");
                p.Panel08.set_flexwrap("wrap");
                p.Panel08.set_horizontalgap("24");
                p.Panel08.set_verticalgap("16");
                p.Panel08.set_type("horizontal");
                p.Panel08.set_fittocontents("height");
                p.Panel08.move("351","Static05:24",null,"286","0",null);

                p.Panel07.set_taborder("77");
                p.Panel07.set_type("vertical");
                p.Panel07.set_verticalgap("12");
                p.Panel07.set_fittocontents("height");
                p.Panel07.move("351","4571","888","160",null,null);

                p.Static07.set_taborder("78");
                p.Static07.set_text("고용노동부, 정부혁신과 적극행정 우수사례를 확산하고, 일하는 방식 개선을 통해 정부혁신을 속도감 있게 추진");
                p.Static07.set_cssclass("sta_WF_Txt19B");
                p.Static07.set_fittocontents("height");
                p.Static07.move("351","4571","100%","52",null,null);

                p.Static07_00.set_taborder("79");
                p.Static07_00.set_text("또 다른 최우수 사례로 선정된 “외국인 근로자 퇴직금 자동환급제”는 외국인 근로자가 최초 입국 시 사전 등록한 계좌에 퇴직금(출국만기보험)을 자동 지급함으로써 송출국가의 열악한 금융환경 등으로 퇴직금(출국만기보험)이 미지급되는 문제점을 개선하여 외국인 근로자의 권리구제에");
                p.Static07_00.set_cssclass("sta_WF_Para17RG");
                p.Static07_00.move("351","4635","100%","108",null,null);

                p.ImageViewer00.set_taborder("80");
                p.ImageViewer00.set_cssclass("img_WF_Radius");
                p.ImageViewer00.set_image("url(\'theme::NexaKRDS/images/img_WF_Thumbnail.png\')");
                p.ImageViewer00.set_accessibilitylabel("고용노동부 현장 이미지");
                p.ImageViewer00.move("353","4749","180","110",null,null);

                p.Panel06.set_taborder("81");
                p.Panel06.set_fittocontents("height");
                p.Panel06.set_flexcrossaxisalign("center");
                p.Panel06.set_verticalgap("16");
                p.Panel06.move("353","Panel08:24",null,"32","0",null);

                p.Panel05.set_taborder("82");
                p.Panel05.set_flexgrow("1");
                p.Panel05.set_flexcrossaxisalign("center");
                p.Panel05.move("353","4776","243","26",null,null);

                p.Button00_01_01.set_taborder("83");
                p.Button00_01_01.set_text("1Depth");
                p.Button00_01_01.set_cssclass("btn_WF_Breadcrumb");
                p.Button00_01_01.set_fittocontents("width");
                p.Button00_01_01.move("353","4776","58","26",null,null);

                p.Static01_00_00.set_taborder("84");
                p.Static01_00_00.set_cssclass("sta_WF_Depnext");
                p.Static01_00_00.set_accessibilityenable("false");
                p.Static01_00_00.move("418","4776","24","24",null,null);

                p.Button00_02.set_taborder("85");
                p.Button00_02.set_text("2Depth");
                p.Button00_02.set_cssclass("btn_WF_Breadcrumb");
                p.Button00_02.set_fittocontents("width");
                p.Button00_02.move("442","4776","58","26",null,null);

                p.Static01_01_00_00.set_taborder("86");
                p.Static01_01_00_00.set_cssclass("sta_WF_Depnext");
                p.Static01_01_00_00.set_text("");
                p.Static01_01_00_00.set_accessibilityenable("false");
                p.Static01_01_00_00.move("507","4776","24","24",null,null);

                p.Button00_03_00.set_taborder("87");
                p.Button00_03_00.set_text("3Depth");
                p.Button00_03_00.set_cssclass("btn_WF_Breadcrumb");
                p.Button00_03_00.set_fittocontents("width");
                p.Button00_03_00.move("531","4776","58","26",null,null);

                p.Button04.set_taborder("88");
                p.Button04.set_text("자세히보기");
                p.Button04.set_cssclass("btn_WF_MoreArr");
                p.Button04.set_accessibilityrole("link");
                p.Button04.move("691","4775","113","32",null,null);

                p.Static03_00.set_taborder("89");
                p.Static03_00.set_cssclass("sta_WF_DividerB");
                p.Static03_00.set_accessibilityenable("false");
                p.Static03_00.move("346","Panel06:40",null,"1","0",null);

                p.Static06_00.set_taborder("90");
                p.Static06_00.set_text("뉴스∙소식");
                p.Static06_00.set_cssclass("sta_WF_BadgeLit01");
                p.Static06_00.move("347","Static03_00:40","81","26",null,null);

                p.Static05_00.set_taborder("91");
                p.Static05_00.set_text("2023.11.01");
                p.Static05_00.set_cssclass("sta_WF_Para17RG");
                p.Static05_00.move("Static06_00:16","Static03_00:40","120","26",null,null);

                p.Panel07_00.set_taborder("92");
                p.Panel07_00.set_type("vertical");
                p.Panel07_00.set_verticalgap("12");
                p.Panel07_00.set_fittocontents("height");
                p.Panel07_00.move("351","Static05_00:24",null,"160","0",null);

                p.Static07_01.set_taborder("93");
                p.Static07_01.set_text("퇴직연금복지과, 퇴직연금 수수료 부과에 관한 고시제정안 행정예고");
                p.Static07_01.set_cssclass("sta_WF_Txt19B");
                p.Static07_01.set_fittocontents("height");
                p.Static07_01.move("351","4571","100%","43",null,null);

                p.Static07_00_00.set_taborder("94");
                p.Static07_00_00.set_text("고용노동부 공고 제2023-453호 퇴직연금 수수료 부과에 관한 고시제정안을 행정예고 하는데 있어, 그 이유와 주요내용을 국민에게 미리 알려 이에 대한 의견을 듣기 위하여 「행정절차법」제46조에 따라 다음과 같이 공고합니다. 2023년 9월 13일 고용노동부장관");
                p.Static07_00_00.set_cssclass("sta_WF_Para17RG");
                p.Static07_00_00.move("351","4635","100%","106",null,null);

                p.Panel06_00.set_taborder("95");
                p.Panel06_00.set_fittocontents("height");
                p.Panel06_00.set_flexcrossaxisalign("center");
                p.Panel06_00.set_verticalgap("16");
                p.Panel06_00.move("353","Panel07_00:24",null,"32","0",null);

                p.Panel05_00.set_taborder("96");
                p.Panel05_00.set_flexgrow("1");
                p.Panel05_00.set_flexcrossaxisalign("center");
                p.Panel05_00.move("353","4776","243","26",null,null);

                p.Button00_01_01_00.set_taborder("97");
                p.Button00_01_01_00.set_text("1Depth");
                p.Button00_01_01_00.set_cssclass("btn_WF_Breadcrumb");
                p.Button00_01_01_00.set_fittocontents("width");
                p.Button00_01_01_00.move("353","4776","58","26",null,null);

                p.Static01_00_00_00.set_taborder("98");
                p.Static01_00_00_00.set_cssclass("sta_WF_Depnext");
                p.Static01_00_00_00.set_accessibilityenable("false");
                p.Static01_00_00_00.move("418","4776","24","24",null,null);

                p.Button00_02_00.set_taborder("99");
                p.Button00_02_00.set_text("2Depth");
                p.Button00_02_00.set_cssclass("btn_WF_Breadcrumb");
                p.Button00_02_00.set_fittocontents("width");
                p.Button00_02_00.move("442","4776","58","26",null,null);

                p.Static01_01_00_00_00.set_taborder("100");
                p.Static01_01_00_00_00.set_cssclass("sta_WF_Depnext");
                p.Static01_01_00_00_00.set_text("");
                p.Static01_01_00_00_00.set_accessibilityenable("false");
                p.Static01_01_00_00_00.move("507","4776","24","24",null,null);

                p.Button00_03_00_00.set_taborder("101");
                p.Button00_03_00_00.set_text("3Depth");
                p.Button00_03_00_00.set_cssclass("btn_WF_Breadcrumb");
                p.Button00_03_00_00.set_fittocontents("width");
                p.Button00_03_00_00.move("531","4776","58","26",null,null);

                p.Button04_00.set_taborder("102");
                p.Button04_00.set_text("자세히보기");
                p.Button04_00.set_cssclass("btn_WF_MoreArr");
                p.Button04_00.set_accessibilityrole("link");
                p.Button04_00.move("691","4775","113","32",null,null);

                p.Static03_00_00.set_taborder("103");
                p.Static03_00_00.set_cssclass("sta_WF_DividerB");
                p.Static03_00_00.set_accessibilityenable("false");
                p.Static03_00_00.move("346","Panel06_00:40",null,"1","0",null);

                p.Static00_08.set_taborder("104");
                p.Static00_08.set_text("모달(Modal)");
                p.Static00_08.set_cssclass("sta_WF_H5");
                p.Static00_08.move("0","Static03_00_00:40","278","32",null,null);

                p.Panel00_01.set_taborder("105");
                p.Panel00_01.set_type("horizontal");
                p.Panel00_01.set_flexmainaxisalign("center");
                p.Panel00_01.set_cssclass("pnl_POP_Modaldim");
                p.Panel00_01.set_spacing("40px 0px 40px 0px");
                p.Panel00_01.set_fittocontents("height");
                p.Panel00_01.move("0","Static00_08:24",null,"1008","0",null);

                p.Div02_00.set_taborder("106");
                p.Div02_00.set_text("Div02");
                p.Div02_00.set_cssclass("div_POP_bg");
                p.Div02_00.set_accessibilityenable("false");
                p.Div02_00.set_tabstop("false");
                p.Div02_00.move("110","810","700","920",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Desktop_screen,mobile_small",480,7816,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staDescript.move("0","85",null,"204","0",null);

                p.Div05.move("0","2096",null,"307","0",null);

                p.Div06.move("0","2499",null,"917","0",null);

                p.Div00.move("0","Static00_00:24",null,"568","0",null);

                p.Div03.move("0","1372",null,"332","0",null);

                p.Div00_00.set_text("Div00");
                p.Div00_00.move("0","3608",null,"1455","0",null);

                p.Panel00.set_spacing("24px 16px");
                p.Panel00.move("0","5139",null,"148","0",null);

                p.Static01.set_visible("false");

                p.Button01.set_visible("false");

                p.Static04.set_visible("false");

                p.CheckBoxSet00.set_visible("false");

                p.Button01_00_01.set_visible("false");

                p.Static04_00.set_visible("false");

                p.Button02.set_visible("false");

                p.Button02_00.set_visible("false");

                p.Button02_01.set_visible("false");

                p.Button02_02.set_visible("false");

                p.Panel03.set_visible("false");

                p.Static01_01_02_01.set_visible("false");

                p.Calendar00.set_visible("false");

                p.Panel00_00.set_visible("false");

                p.Static00_01.set_visible("false");

                p.Static01_01_02_01_00.set_visible("false");

                p.Calendar00_00.set_visible("false");

                p.Panel00_00_00.set_visible("false");

                p.Panel01_01.set_visible("false");

                p.Button01_00_02.set_visible("false");

                p.CheckBoxSet00_00.set_visible("false");

                p.Button01_00.set_visible("false");

                p.Button01_00_00.set_visible("false");

                p.Static02.set_visible("false");

                p.Button03.set_visible("false");

                p.Button03_00.set_visible("false");

                p.Button01_00_03.set_visible("false");

                p.Button01_01_00.set_visible("false");

                p.Panel02_02.set_fittocontents("width");

                p.Panel02_01.set_fittocontents("width");

                p.Static01_00.set_visible("true");

                p.Div01_00.set_visible("true");

                p.Static01_01.set_visible("false");

                p.Combo00_01.set_visible("false");

                p.Panel02_00.set_visible("false");

                p.Panel04.set_flexwrap("wrap");
                p.Panel04.move("16","5377","200","79",null,null);

                p.Panel02_03.move("16","Panel00:27",null,"39","16",null);

                p.Static03.move("16","Panel04:24",null,"1","16",null);

                p.Static06.move("16","Static03:32","81","26",null,null);

                p.Panel08.set_fittocontents("height");
                p.Panel08.move("16","Static05:16",null,"286","16",null);

                p.Static07.set_fittocontents("height");
                p.Static07.move("351","4571","100%","52",null,null);

                p.Static07_00.set_fittocontents("height");
                p.Static07_00.move("351","4635","100%","106",null,null);

                p.Static03_00.move("16","Panel06:40",null,"1","16",null);

                p.Panel06.set_flexwrap("wrap");
                p.Panel06.move("16","Panel08:24",null,"32","16",null);

                p.Static06_00.move("16","Panel06:73","81","26",null,null);

                p.Panel07_00.set_fittocontents("height");
                p.Panel07_00.move("16","Static05_00:16",null,"160","16",null);

                p.Panel06_00.set_flexwrap("wrap");
                p.Panel06_00.move("16","Panel07_00:24",null,"32","16",null);

                p.Static03_00_00.move("16","Panel06_00:40",null,"1","16",null);

                p.Panel00_01.set_spacing("40px 16px 40px 16px");
                p.Panel00_01.set_fittocontents("height");
                p.Panel00_01.move("0","Static00_08:24",null,"1410","0",null);

                p.Div02_00.move("16","6521","700","1229",null,null);

                p.Static07_01.move("351","4571","100%","54",null,null);

                p.Panel02.set_visible("false");

                p.Panel07.set_fittocontents("height");

                p.Static16_03_00.set_visible("false");

                p.Static05.move("Static06:16","Static03:32","120","26",null,null);

                p.Static05_00.move("Static06_00:16","Static03_00:32","120","26",null,null);

                p.Panel01.move(null,"64","100%","100","9.5",null);

                p.Static00_00.move("0","staDescript:80",null,"60","0",null);
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
        this.registerScript("pattern10.xfdl", function() {

        this.pattern10_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.pattern10_onload,this);
            this.Div00.form.Div00.form.Div00.form.Edit01.addEventHandler("onchanged",this.Div02_Div00_Edit03_onchanged,this);
            this.Div00.form.Div00.form.Div01.form.Button00.addEventHandler("onclick",this.Div02_Div01_Button00_onclick,this);
            this.Div02.form.Div00.form.Edit01.addEventHandler("onchanged",this.Div02_Div00_Edit03_onchanged,this);
            this.Div00_00.form.Div01.form.Button00.addEventHandler("onclick",this.Div02_Div01_Button00_onclick,this);
            this.Div00_01.form.Edit01.addEventHandler("onchanged",this.Div02_Div00_Edit03_onchanged,this);
            this.Div01_00.form.Button00.addEventHandler("onclick",this.Div02_Div01_Button00_onclick,this);
        };
        this.loadIncludeScript("pattern10.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
