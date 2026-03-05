(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("guide06");
            this.set_titletext("Search Area");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,1360);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staH2","0","0","160","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("서치 영역");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("staDivider","staH2:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staEtit","staDivider:15","0",null,"60","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Search Area");
            obj.set_cssclass("sta_WF_ParaH5");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","60","54","100","48",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("검색라벨");
            obj.set_cssclass("sta_WF_SchDetail");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","94","24","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_value("입력해주세요");
            obj.set_flexgrow("1");
            obj.set_cssclass("essential");
            obj.set_text("입력해주세요");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel000","9","290","280","48",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static04\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00","70","64","100","48",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("검색라벨");
            obj.set_cssclass("sta_WF_SchDetail");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","518","296","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_flexgrow("1");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","436","290","280","48",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static04_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Combo00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00","80","74","100","48",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("검색라벨");
            obj.set_cssclass("sta_WF_SchDetail");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","931","300","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_value("10");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_02","437","10","280","48",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static04_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"MaskEdit00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","90","84","100","48",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("검색라벨");
            obj.set_cssclass("sta_WF_SchDetail");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","377","372","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_flexgrow("1");
            obj.set_popupsize("384 437");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_03","864","10","280","48",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static04_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Calendar00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01","100","94","100","48",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("검색라벨");
            obj.set_cssclass("sta_WF_SchDetail");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","104","34","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_value("입력해주세요");
            obj.set_flexgrow("1");
            obj.set_text("입력해주세요");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_04","10","10","280","48",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static04_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01","110","104","100","48",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("검색라벨");
            obj.set_cssclass("sta_WF_SchDetail");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","948","284","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "남성"},{"codecolumn" : "1","datacolumn" : "여성"}]});
            obj.set_innerdataset(Radio00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_05","874","20","280","48",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static04_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Radio00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel010","24","24","569","176",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_verticalgap("16");
            obj.set_horizontalgap("24");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel000\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_01\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel00_02\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel00_03\"/><PanelItem id=\"PanelItem05\" componentid=\"Panel00_04\"/><PanelItem id=\"PanelItem06\" componentid=\"Panel00_05\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","1215","590","500","48",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Sch");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","1325","590","48","48",null,null,"48",null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_Reset");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel020","1313","220","280","48",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_horizontalgap("8");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_07","0","140",null,"128","0.00%",null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_spacing("40px");
            obj.set_cssclass("pnl_WF_SchBar");
            obj.set_tablecellarea("");
            obj.set_horizontalgap("16");
            obj.set_fittocontents("height");
            obj.set_flexmainaxisalign("spacebetween");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("24");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_01_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_06","0","Panel00_07:80",null,"200","0",null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_spacing("40px");
            obj.set_cssclass("pnl_WF_SchBar");
            obj.set_tablecellarea("");
            obj.set_horizontalgap("24");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("24");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_04_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","0","Panel00_06:80",null,"264","0",null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_spacing("40px");
            obj.set_cssclass("pnl_WF_SchBar");
            obj.set_tablecellarea("");
            obj.set_horizontalgap("16");
            obj.set_fittocontents("height");
            obj.set_flexmainaxisalign("center");
            obj.set_flexwrap("wrap");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("24");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel010_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","Panel00_00:80",null,"328","0",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_spacing("40px");
            obj.set_tablecellarea("");
            obj.set_horizontalgap("24");
            obj.set_fittocontents("height");
            obj.set_flexmainaxisalign("center");
            obj.set_flexwrap("wrap");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("24");
            obj.set_cssclass("pnl_WF_SchBar");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel010\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel020\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_02","60","54","100","48",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("사원번호");
            obj.set_cssclass("sta_WF_SchDetail");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","94","24","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_value("입력해주세요");
            obj.set_flexgrow("1");
            obj.set_text("입력해주세요");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel030","9","290","280","48",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static04_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01","70","64","100","48",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_SchDetail");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","718","246","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("Div01");
            obj.set_flexgrow("1");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03","0","0",null,"48","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_Sch");
            obj.set_flexgrow("1");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button01",null,"4","40","40","4",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            this.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel03_01","436","290","280","48",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static04_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Div01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_02","80","74","100","48",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchDetail");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03","1102","245","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_flexgrow("1");
            obj.set_cssclass("essential");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_02","437","10","280","48",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static04_00_00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit03\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel010_00","24","24","100%","112",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("16");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("16");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel030\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel03_01\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel03_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01","1215","590","500","48",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Sch");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","1325","590","48","48",null,null,"48",null,null,null,this);
            obj.set_taborder("37");
            obj.set_cssclass("btn_WF_Reset");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","1313","220","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_horizontalgap("8");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03","60","54","100","48",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("필수캘린더");
            obj.set_cssclass("sta_WF_SchDetail");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar01_00","10","41","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_value("20251230");
            obj.set_flexgrow("1");
            obj.set_cssclass("essential");
            obj.set_popupsize("384 437");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_02_00","9","290","280","48",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static04_03\"/><PanelItem id=\"PanelItem02\" componentid=\"Calendar01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_02","70","64","100","48",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("검색라벨");
            obj.set_cssclass("sta_WF_SchDetail");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","100","10","108","48",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_flexgrow("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_00","10","41","108","48",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02","0","0",null,"48","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_Sch");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button01",null,"4","40","40","4",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel00_03_00","436","290","280","48",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static04_00_02\"/><PanelItem id=\"PanelItem04\" componentid=\"Edit00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Div00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_01_00","24","24","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("16");
            obj.set_horizontalgap("24");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_03_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_02","1215","590","500","48",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Sch");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01","1325","590","48","48",null,null,"48",null,null,null,this);
            obj.set_taborder("49");
            obj.set_cssclass("btn_WF_Reset");
            obj.set_enable("true");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_04_00","1313","220","158","48",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_horizontalgap("8");
            obj.set_tablecellarea("0/0");
            obj.set_flexshrink("0");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00_00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","70","64","100","48",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("사용자검색");
            obj.set_cssclass("sta_WF_SchDetail");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_00_00","10","41","380","48",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02",null,"0","100%","48","0",null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_Sch");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Button("Button01",null,"4","40","40","4",null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","24","24","184","48",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Static03\"/><PanelItem id=\"PanelItem00\" componentid=\"Div00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_03","1215","590","128","48",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Sch");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_02","1325","590","48","48",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_cssclass("btn_WF_Reset");
            obj.set_enable("true");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_01_01","1313","220","184","48",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_horizontalgap("8");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_03\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00_00_02\"/></Contents>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Edit03.set_taborder("0");
                p.Edit03.set_cssclass("edt_WF_Sch");
                p.Edit03.set_flexgrow("1");
                p.Edit03.move("0","0",null,"48","0",null);

                p.Button01.set_taborder("1");
                p.Button01.set_cssclass("btn_WF_EdtSch");
                p.Button01.move(null,"4","40","40","4",null);
            	}
            );
            this.Div01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div01.form
            obj = new Layout("Layout0","",0,0,this.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00_00.form
            obj = new Layout("default","",0,0,this.Div00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Edit02.set_taborder("0");
                p.Edit02.set_cssclass("edt_WF_Sch");
                p.Edit02.move("0","0",null,"48","0",null);

                p.Button01.set_taborder("1");
                p.Button01.set_cssclass("btn_WF_EdtSch");
                p.Button01.move(null,"4","40","40","4",null);
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

            	}
            );
            this.Div00_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00_00_00.form
            obj = new Layout("default","",0,0,this.Div00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Edit02.set_taborder("0");
                p.Edit02.set_cssclass("edt_WF_Sch");
                p.Edit02.move(null,"0","100%","48","0",null);

                p.Button01.set_taborder("1");
                p.Button01.set_cssclass("btn_WF_EdtSch");
                p.Button01.move(null,"4","40","40","4",null);
            	}
            );
            this.Div00_00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00_00_00.form
            obj = new Layout("Layout0","",0,0,this.Div00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div00_00_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,mobile_small",888,1360,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("guide06.xfdl", function() {

        this.guide05_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.guide05_onload,this);
        };
        this.loadIncludeScript("guide06.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
