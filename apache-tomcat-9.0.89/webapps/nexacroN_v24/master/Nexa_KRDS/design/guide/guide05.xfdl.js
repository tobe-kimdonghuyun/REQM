(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("guide05");
            this.set_titletext("Detail Area");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,1700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staH2","0","0","180","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("디테일영역");
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
            obj.set_text("Detail Area");
            obj.set_cssclass("sta_WF_ParaH5");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","0","590","100%","38",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("서브타이틀");
            obj.set_positionstep("0");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","27","726","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("콤보박스");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","27","757","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_flexgrow("1");
            var Combo00_00_innerdataset = new nexacro.NormalDataset("Combo00_00_innerdataset", obj);
            Combo00_00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "콤보리스트"},{"codecolumn" : "1","datacolumn" : "콤보리스트"},{"codecolumn" : "2","datacolumn" : "콤보리스트"}]});
            obj.set_innerdataset(Combo00_00_innerdataset);
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04","26","746","272","80",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_type("horizontal");
            obj.set_flexgrow("1");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07\"/><PanelItem id=\"PanelItem01\" componentid=\"Combo00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00","57","756","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("에디트");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","531","771","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_00","506","746","272","80",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_type("horizontal");
            obj.set_flexgrow("1");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Edit01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_01","87","786","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("마스크에디트");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01","1046","772","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_value("10");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_01","986","746","272","80",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_type("horizontal");
            obj.set_flexgrow("1");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_01\"/><PanelItem id=\"PanelItem03\" componentid=\"MaskEdit01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_02","37","736","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("에디트+버튼");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02","171","885","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","452","876","78","48",null,null,"64",null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("버튼");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel06","0","18","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_horizontalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Edit02\"/><PanelItem id=\"PanelItem02\" componentid=\"Button01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_02","26","849","272","80",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_type("horizontal");
            obj.set_flexgrow("1");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel06\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_03","67","766","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("캘린더");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","536","886","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_value("20251230");
            obj.set_flexgrow("1");
            obj.set_popupsize("384 437");
            obj.set_usetrailingday("true");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_03","506","849","272","80",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_type("horizontal");
            obj.set_flexgrow("1");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_03\"/><PanelItem id=\"PanelItem03\" componentid=\"Calendar01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_04","97","796","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("라디오버튼");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio01","1007","875","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_flexgrow("1");
            var Radio01_innerdataset = new nexacro.NormalDataset("Radio01_innerdataset", obj);
            Radio01_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "라디오 01"},{"codecolumn" : "1","datacolumn" : "라디오 02"},{"codecolumn" : "2","datacolumn" : "라디오 03"}]});
            obj.set_innerdataset(Radio01_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_04","986","849","272","80",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_type("horizontal");
            obj.set_flexgrow("1");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_04\"/><PanelItem id=\"PanelItem03\" componentid=\"Radio01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_05","47","746","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("스핀박스");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin00","117","975","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_05","26","952","272","80",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_type("horizontal");
            obj.set_flexgrow("1");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_05\"/><PanelItem id=\"PanelItem02\" componentid=\"Spin00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_06","77","776","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("검색");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","512","830","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02","0","0","100%","48",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_flexgrow("1");
            obj.set_cssclass("edt_WF_Sch");
            obj.set_accessibilitylabel("검색");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01",null,"4","40","40","4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            obj.set_accessibilitylabel("검색");
            this.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel04_06","506","952","272","80",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_type("horizontal");
            obj.set_flexgrow("1");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_06\"/><PanelItem id=\"PanelItem01\" componentid=\"Div00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_07","107","806","100%","23",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("콤보박스");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_07","37","767","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_flexgrow("1");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_07","986","952","272","79",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_type("horizontal");
            obj.set_flexgrow("1");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_07\"/><PanelItem id=\"PanelItem01\" componentid=\"Combo00_00_07\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel09","40","143","100%","463",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_horizontalgap("24");
            obj.set_verticalgap("16");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel04\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel04_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel04_01\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel04_02\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel04_03\"/><PanelItem id=\"PanelItem05\" componentid=\"Panel04_04\"/><PanelItem id=\"PanelItem06\" componentid=\"Panel04_05\"/><PanelItem id=\"PanelItem07\" componentid=\"Panel04_06\"/><PanelItem id=\"PanelItem08\" componentid=\"Panel04_07\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","140",null,"605","0",null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("24");
            obj.set_cssclass("pnl_WF_Detailbox");
            obj.set_spacing("24px");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem10\" componentid=\"Static06\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel09\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00","0","590","100%","38",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("서브타이틀 상세");
            obj.set_positionstep("0");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_08","27","726","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("콤보박스");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00","27","757","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_08","26","746","253","80",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_08\"/><PanelItem id=\"PanelItem01\" componentid=\"Combo00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","57","756","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("필수캘린더");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","1211","574","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_cssclass("essential");
            obj.set_popupsize("384 437");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_00_00","506","746","253","80",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_type("horizontal");
            obj.set_fittocontents("height");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Calendar00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_04_00","97","796","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("라디오버튼");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio01_00","1007","875","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var Radio01_00_innerdataset = new nexacro.NormalDataset("Radio01_00_innerdataset", obj);
            Radio01_00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "라디오 01"},{"codecolumn" : "1","datacolumn" : "라디오 02"}]});
            obj.set_innerdataset(Radio01_00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_04","986","849","253","80",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_type("horizontal");
            obj.set_fittocontents("height");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_04_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Radio01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_04_00_00","107","806","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("에디트");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Div("Div01_00","1695","606","99.80514234114348%","48",null,null,null,null,null,null,this);
            obj.set_text("Div01");
            obj.set_taborder("46");
            this.addChild(obj.name, obj);

            obj = new Button("Button01",null,"0","64","48","0",null,"64",null,null,null,this.Div01_00.form);
            obj.set_taborder("1");
            obj.set_text("버튼");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Edit("Edit00","0","0",null,"48","Button01:8",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("0");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Panel("Panel03_04_00","840","1791","253","80",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_type("horizontal");
            obj.set_fittocontents("height");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_04_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Div01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_02_00","37","736","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("체크박스");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","768","782","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("체크박스");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_07","892","885","253","80",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_type("horizontal");
            obj.set_fittocontents("height");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"CheckBox00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","67","766","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("스핀박스");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin01","1166","755","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_02_00","1050","1809","253","80",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_type("horizontal");
            obj.set_fittocontents("height");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Spin01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01","77","776","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("디세이블검색");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","877","873","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","0","0",null,"48","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_enable("false");
            obj.set_cssclass("edt_WF_Sch");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button01",null,"4","40","40","4",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            obj.set_enable("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel04_01_00","372","10","253","80",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_type("horizontal");
            obj.set_fittocontents("height");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Div01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_06_00","87","786","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("검색");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_00","512","830","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02","0","0",null,"48","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_Sch");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button01",null,"4","40","40","4",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel03_03","506","952","253","80",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_type("horizontal");
            obj.set_fittocontents("height");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_06_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Div00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_01_00","117","816","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("에디트");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01_00_00","10","41","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_05","43","891","253","80",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_type("horizontal");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit01_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_02_00_00","47","746","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("마스크에디트");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","921","1091","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_value("1000000");
            obj.set_format("0,0");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_07_00","732","216","253","80",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_type("horizontal");
            obj.set_fittocontents("height");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_02_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"MaskEdit00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_02_00_00_00","127","826","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("캘린더");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_07_00_00","10","525","253","80",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_type("horizontal");
            obj.set_fittocontents("height");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_02_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Calendar00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_03_00","137","836","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("콤보박스");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00_00","37","767","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_03_00","10","10","253","80",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Combo00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_01","147","846","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("필수에디트");
            obj.set_cssclass("sta_WF_LabelE");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_00_00_00","358","10","253","80",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_type("horizontal");
            obj.set_fittocontents("height");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit01_00_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_03_00_00","157","856","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("에디트");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01_00","875","1294","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_03_00_00","10","628","253","80",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_03_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_03_00_00_00","167","866","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("마스크에디트");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01_00","1279","1284","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_format("0,0");
            obj.set_value("1000000");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_03_00_00_00","10","731","253","80",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_03_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"MaskEdit01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_03_00_01","177","876","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_text("에디트");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01_00_01","885","1304","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_03_00_01","26","1569","253","80",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_03_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit01_00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_03_00_00_00_00","187","886","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_text("마스크에디트");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01_00_00","1289","1294","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_format("0,0");
            obj.set_value("1000000");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_03_00_00_00_00","374","1569","253","80",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_03_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"MaskEdit01_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_01","753","520","100%","600",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_horizontalgap("24");
            obj.set_verticalgap("24");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel04_08\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel04_00_00\"/><PanelItem id=\"PanelItem07\" componentid=\"Panel03_04\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel03_04_00\"/><PanelItem id=\"PanelItem10\" componentid=\"Panel03_07\"/><PanelItem id=\"PanelItem06\" componentid=\"Panel04_02_00\"/><PanelItem id=\"PanelItem05\" componentid=\"Panel04_01_00\"/><PanelItem id=\"PanelItem09\" componentid=\"Panel03_03\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel03_05\"/><PanelItem id=\"PanelItem11\" componentid=\"Panel03_07_00\"/><PanelItem id=\"PanelItem08\" componentid=\"Panel03_07_00_00\"/><PanelItem id=\"PanelItem12\" componentid=\"Panel04_03_00\"/><PanelItem id=\"PanelItem13\" componentid=\"Panel04_00_00_00\"/><PanelItem id=\"PanelItem14\" componentid=\"Panel04_03_00_00\"/><PanelItem id=\"PanelItem15\" componentid=\"Panel04_03_00_00_00\"/><PanelItem id=\"PanelItem16\" componentid=\"Panel04_03_00_01\"/><PanelItem id=\"PanelItem17\" componentid=\"Panel04_03_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02","0","Panel01:80",null,"742","0",null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("24");
            obj.set_cssclass("pnl_WF_Detailbox");
            obj.set_spacing("39px");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem10\" componentid=\"Static06_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel03_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01_00_02","10","42","99.86973512809378%","48",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_cssclass("essential");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00","10","42","99.86973512809378%","48",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_popupsize("384 437");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Edit02.set_taborder("0");
                p.Edit02.set_flexgrow("1");
                p.Edit02.set_cssclass("edt_WF_Sch");
                p.Edit02.set_accessibilitylabel("검색");
                p.Edit02.move("0","0","100%","48",null,null);

                p.Button01.set_taborder("1");
                p.Button01.set_cssclass("btn_WF_EdtSch");
                p.Button01.set_accessibilitylabel("검색");
                p.Button01.move(null,"4","40","40","4",null);
            	}
            );
            this.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form
            obj = new Layout("Layout0","",0,0,this.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form
            obj = new Layout("Layout0","",0,0,this.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div01_00.form
            obj = new Layout("default","",0,0,this.Div01_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button01.set_taborder("1");
                p.Button01.set_text("버튼");
                p.Button01.set_minwidth("64");
                p.Button01.set_maxwidth("");
                p.Button01.move(null,"0","64","48","0",null);

                p.Edit00.set_taborder("0");
                p.Edit00.move("0","0",null,"48","Button01:8",null);
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
            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Edit00.set_taborder("0");
                p.Edit00.set_enable("false");
                p.Edit00.set_cssclass("edt_WF_Sch");
                p.Edit00.move("0","0",null,"48","0",null);

                p.Button01.set_taborder("1");
                p.Button01.set_cssclass("btn_WF_EdtSch");
                p.Button01.set_enable("false");
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
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,mobile_small",888,1700,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("guide05.xfdl", function() {

        this.guide04_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.guide04_onload,this);
        };
        this.loadIncludeScript("guide05.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
