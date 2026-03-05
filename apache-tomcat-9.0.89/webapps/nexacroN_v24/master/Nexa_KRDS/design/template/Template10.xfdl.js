(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Template01");
            this.set_titletext("Tabpage02");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,1260);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "chk","type" : "STRING","size" : "256"},{"id" : "No","type" : "STRING","size" : "256"},{"id" : "Edi","type" : "STRING","size" : "256"},{"id" : "Essential","type" : "STRING","size" : "256"},{"id" : "Num","type" : "STRING","size" : "256"},{"id" : "Expand","type" : "STRING","size" : "256"},{"id" : "Cmb","type" : "STRING","size" : "256"},{"id" : "Cal","type" : "STRING","size" : "256"},{"id" : "CenterAlign","type" : "STRING","size" : "256"},{"id" : "Btn","type" : "STRING","size" : "256"}]},"Rows" : [{"No" : "1","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","Expand" : "가나다라마바사","Cal" : "20251230","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "2","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","Expand" : "가나다라마바사","Cal" : "20251230","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "3","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","Expand" : "가나다라마바사","Cal" : "20251230","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "4","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","Expand" : "가나다라마바사","Cal" : "20251230","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "5","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","Expand" : "가나다라마바사","Cal" : "20251230","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "6","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","Expand" : "가나다라마바사","Cal" : "20251230","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "7","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","Expand" : "가나다라마바사","Cal" : "20251230","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "8","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","Expand" : "가나다라마바사","Cal" : "20251230","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "9","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","Expand" : "가나다라마바사","Cal" : "20251230","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "10","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","Expand" : "가나다라마바사","Cal" : "20251230","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "11","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","Expand" : "가나다라마바사","Cal" : "20251230","CenterAlign" : "투비소프트","Btn" : "버튼"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static06_00","0","590","100%","38",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("서브타이틀");
            obj.set_positionstep("0");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_flexgrow("1");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","746","10","117","48",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("커스텀버튼");
            obj.set_cssclass("btn_WF_Custom");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00","44","120","117","48",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_Custom");
            obj.set_text("커스텀버튼");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00","0","690","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("8");
            obj.set_verticalgap("2");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem05\" componentid=\"Button00_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Button00_01_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_07","27","726","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("콤보박스");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00","27","757","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_07","26","746","210","80",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_type("horizontal");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_07\"/><PanelItem id=\"PanelItem01\" componentid=\"Combo00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","57","756","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("필수에디트");
            obj.set_cssclass("sta_WF_LabelE");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01_01","531","771","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("essential");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_00_00","506","746","210","80",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_type("horizontal");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Edit01_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_01_00","87","786","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("에디트");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01_00_00","10","41","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_01_00","986","746","210","80",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_type("horizontal");
            obj.set_fittocontents("height");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Edit01_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_02_00","37","736","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("캘린더");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00","1130","218","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_popupsize("384 437");
            obj.set_usetrailingday("true");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_02_00","26","849","210","80",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_type("horizontal");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Calendar00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_03_00","67","766","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("디테일 라벨");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_01","512","830","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02","0","0","100%","48",null,null,null,null,null,null,this.Div00_01.form);
            obj.set_taborder("0");
            obj.set_flexgrow("1");
            obj.set_enable("false");
            obj.set_cssclass("edt_WF_Sch");
            this.Div00_01.addChild(obj.name, obj);

            obj = new Button("Button01",null,"4","40","40","4",null,null,null,null,null,this.Div00_01.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            obj.set_enable("false");
            this.Div00_01.addChild(obj.name, obj);

            obj = new Panel("Panel04_03_00","506","849","210","80",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_type("horizontal");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_03_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Div00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_04_00","97","796","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("검색");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_00_00","20","51","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02","0","0","100%","48",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("0");
            obj.set_flexgrow("1");
            obj.set_cssclass("edt_WF_Sch");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Button("Button01",null,"4","40","40","4",null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Panel("Panel04_04_00","986","849","210","80",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_type("horizontal");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_04_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Div00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_06_00","77","776","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("라디오버튼");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio01_00","600","605","256","48",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var Radio01_00_innerdataset = new nexacro.NormalDataset("Radio01_00_innerdataset", obj);
            Radio01_00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "라디오 01"},{"codecolumn" : "1","datacolumn" : "라디오 02"}]});
            obj.set_innerdataset(Radio01_00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_06_00","506","952","210","80",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_type("horizontal");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_06_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Radio01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_05_01","47","746","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("에디트+버튼");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Div("Div01_00","994","1972","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("Div01");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","0","0",null,"48","98",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("0");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button01",null,"0","90","48","0",null,"64",null,null,null,this.Div01_00.form);
            obj.set_taborder("1");
            obj.set_text("버튼");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Panel("Panel04_05_01","26","952","210","80",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_type("horizontal");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_05_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Div01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_05_00_01","107","806","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("핸드폰번호");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","10","42","31.31188118811881%","48",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_value("01012345678");
            obj.set_cssclass("msk_WF_Phone");
            obj.set_maskchar("_");
            obj.set_type("string");
            obj.set_format("@@@-@@@@-@@@@");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_05_00_01","706","113","210","80",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_type("horizontal");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_05_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"MaskEdit00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_05_00_00_01","117","816","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("디테일 라벨");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00","536","433","150","48",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("사용");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_05_00_00_01","1503","570","210","80",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_type("vertical");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("16");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_05_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"CheckBox00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_05_00_00_00_00","127","826","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("스핀박스");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin00_00_00_00_00","117","975","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_05_00_00_00_00","1853","570","210","80",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_05_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Spin00_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel09_00","40","143","100%","392",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_horizontalgap("24");
            obj.set_verticalgap("24");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel04_07\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel04_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel04_01_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel04_02_00\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel04_03_00\"/><PanelItem id=\"PanelItem05\" componentid=\"Panel04_04_00\"/><PanelItem id=\"PanelItem10\" componentid=\"Panel04_06_00\"/><PanelItem id=\"PanelItem08\" componentid=\"Panel04_05_01\"/><PanelItem id=\"PanelItem07\" componentid=\"Panel04_05_00_01\"/><PanelItem id=\"PanelItem09\" componentid=\"Panel04_05_00_00_01\"/><PanelItem id=\"PanelItem06\" componentid=\"Panel04_05_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_01","39","101","100%","456",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("16");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel09_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","0",null,"598","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("24");
            obj.set_spacing("39px");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_cssclass("pnl_WF_Detailbox");
            obj._setContents("<Contents><PanelItem id=\"PanelItem10\" componentid=\"Static06_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel01_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_00","36","1033","100%","38",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("상세리스트");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01_01_00","746","10","117","48",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("커스텀버튼");
            obj.set_cssclass("btn_WF_Custom");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00_00","44","120","48","48",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_cssclass("btn_WF_Add");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_02_00_00","1085","114","48","48",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_cssclass("btn_WF_Minus");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_03_00_00","34","110","145","48",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("엑셀업로드");
            obj.set_cssclass("btn_WF_ExcelUp");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_04_00_00","54","130","162","48",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_ExcelDown");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00","0","0","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("8");
            obj.set_verticalgap("8");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem05\" componentid=\"Button00_01_01_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Button00_01_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00_02_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Button00_03_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Button00_04_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static10_00_00","39","275","100%","38",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("총 <fc v=\'#0B50D0\'><b v=\'true\'>00</b></fc>건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_PaddingB16");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","64","834","85.52631578947368%","406",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_binddataset("ds_grid");
            obj.set_flexgrow("1");
            obj.set_showcellselection("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"142\"/><Column size=\"142\"/><Column size=\"142\"/><Column size=\"142\"/><Column size=\"103\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"57\"/></Rows><Band id=\"head\"><Cell text=\"checkBox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"No\" cssclass=\"cell_WF_Center\"/><Cell col=\"2\" text=\"에디트\" cssclass=\"cell_WF_Center\"/><Cell col=\"3\" text=\"필수\" cssclass=\"cell_WF_Center\"/><Cell col=\"4\" text=\"숫자\" cssclass=\"cell_WF_Center\"/><Cell col=\"5\" displaytype=\"normal\" text=\"중앙정렬\" cssclass=\"cell_WF_Center\"/><Cell col=\"6\" text=\"버튼\"/></Band><Band id=\"body\"><Cell text=\"bind:checkBox\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:No\" displaytype=\"number\" edittype=\"none\" cssclass=\"cell_WF_Center\"/><Cell col=\"2\" text=\"bind:Edi\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:Essential\" displaytype=\"text\"/><Cell col=\"4\" displaytype=\"number\" text=\"bind:Num\"/><Cell col=\"5\" text=\"bind:CenterAlign\" cssclass=\"cell_WF_Center\"/><Cell col=\"6\" edittype=\"button\" displaytype=\"buttoncontrol\" text=\"버튼\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_06","64","740","99.73753280839895%","500",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("4");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Panel01_00_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Static10_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","Panel00:16",null,"640","0",null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_flexwrap("wrap");
            obj.set_spacing("39px");
            obj.set_fittocontents("height");
            obj.set_verticalgap("24");
            obj.set_cssclass("pnl_WF_Detailbox");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Static09_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_06\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","24","Panel01:0","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00_01.form
            obj = new Layout("default","",0,0,this.Div00_01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Edit02.set_taborder("0");
                p.Edit02.set_flexgrow("1");
                p.Edit02.set_enable("false");
                p.Edit02.set_cssclass("edt_WF_Sch");
                p.Edit02.move("0","0","100%","48",null,null);

                p.Button01.set_taborder("1");
                p.Button01.set_cssclass("btn_WF_EdtSch");
                p.Button01.set_enable("false");
                p.Button01.move(null,"4","40","40","4",null);
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
            //-- Default Layout : this.Div00_00_00.form
            obj = new Layout("default","",0,0,this.Div00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Edit02.set_taborder("0");
                p.Edit02.set_flexgrow("1");
                p.Edit02.set_cssclass("edt_WF_Sch");
                p.Edit02.move("0","0","100%","48",null,null);

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
            //-- Default Layout : this.Div01_00.form
            obj = new Layout("default","",0,0,this.Div01_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Edit00.set_taborder("0");
                p.Edit00.move("0","0",null,"48","98",null);

                p.Button01.set_taborder("1");
                p.Button01.set_text("버튼");
                p.Button01.set_minwidth("64");
                p.Button01.set_maxwidth("");
                p.Button01.move(null,"0","90","48","0",null);
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
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",888,1260,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("Tabpage02");

                p.Static06_00.set_taborder("0");
                p.Static06_00.set_text("서브타이틀");
                p.Static06_00.set_positionstep("0");
                p.Static06_00.set_cssclass("sta_WF_H4_pc");
                p.Static06_00.set_flexgrow("1");
                p.Static06_00.set_accessibilityrole("heading4");
                p.Static06_00.set_maxwidth("");
                p.Static06_00.move("0","590","100%","38",null,null);

                p.Button00_00_00.set_taborder("1");
                p.Button00_00_00.set_text("커스텀버튼");
                p.Button00_00_00.set_cssclass("btn_WF_Custom");
                p.Button00_00_00.move("746","10","117","48",null,null);

                p.Button00_01_00_00_00.set_taborder("2");
                p.Button00_01_00_00_00.set_cssclass("btn_WF_Custom");
                p.Button00_01_00_00_00.set_text("커스텀버튼");
                p.Button00_01_00_00_00.move("44","120","117","48",null,null);

                p.Panel01_00_00.set_taborder("3");
                p.Panel01_00_00.set_flexmainaxisalign("end");
                p.Panel01_00_00.set_horizontalgap("8");
                p.Panel01_00_00.set_verticalgap("2");
                p.Panel01_00_00.set_fittocontents("height");
                p.Panel01_00_00.set_flexwrap("wrap");
                p.Panel01_00_00.set_flexgrow("1");
                p.Panel01_00_00.move("0","690","100%","48",null,null);

                p.Static07_07.set_taborder("4");
                p.Static07_07.set_text("콤보박스");
                p.Static07_07.set_cssclass("sta_WF_Label");
                p.Static07_07.move("27","726","100%","24",null,null);

                p.Combo00_00_00.set_taborder("5");
                p.Combo00_00_00.set_text("선택");
                p.Combo00_00_00.set_value("");
                p.Combo00_00_00.set_index("-1");
                p.Combo00_00_00.move("27","757","100%","48",null,null);

                p.Panel04_07.set_taborder("6");
                p.Panel04_07.set_type("horizontal");
                p.Panel04_07.set_verticalgap("8");
                p.Panel04_07.set_flexgrow("1");
                p.Panel04_07.set_flexwrap("wrap");
                p.Panel04_07.set_maxwidth("");
                p.Panel04_07.move("26","746","210","80",null,null);

                p.Static07_00_00.set_taborder("8");
                p.Static07_00_00.set_text("필수에디트");
                p.Static07_00_00.set_cssclass("sta_WF_LabelE");
                p.Static07_00_00.move("57","756","100%","24",null,null);

                p.Edit01_01.set_taborder("9");
                p.Edit01_01.set_cssclass("essential");
                p.Edit01_01.move("531","771","100%","48",null,null);

                p.Panel04_00_00.set_taborder("10");
                p.Panel04_00_00.set_type("horizontal");
                p.Panel04_00_00.set_verticalgap("8");
                p.Panel04_00_00.set_flexgrow("1");
                p.Panel04_00_00.set_flexwrap("wrap");
                p.Panel04_00_00.set_maxwidth("");
                p.Panel04_00_00.move("506","746","210","80",null,null);

                p.Static07_01_00.set_taborder("11");
                p.Static07_01_00.set_text("에디트");
                p.Static07_01_00.set_cssclass("sta_WF_Label");
                p.Static07_01_00.move("87","786","100%","24",null,null);

                p.Edit01_00_00.set_taborder("12");
                p.Edit01_00_00.move("10","41","100%","48",null,null);

                p.Panel04_01_00.set_taborder("13");
                p.Panel04_01_00.set_type("horizontal");
                p.Panel04_01_00.set_fittocontents("height");
                p.Panel04_01_00.set_verticalgap("8");
                p.Panel04_01_00.set_flexgrow("1");
                p.Panel04_01_00.set_flexwrap("wrap");
                p.Panel04_01_00.set_maxwidth("");
                p.Panel04_01_00.move("986","746","210","80",null,null);

                p.Static07_02_00.set_taborder("14");
                p.Static07_02_00.set_text("캘린더");
                p.Static07_02_00.set_cssclass("sta_WF_Label");
                p.Static07_02_00.move("37","736","100%","24",null,null);

                p.Calendar00_00.set_taborder("15");
                p.Calendar00_00.set_popupsize("384 437");
                p.Calendar00_00.set_usetrailingday("true");
                p.Calendar00_00.move("1130","218","100%","48",null,null);

                p.Panel04_02_00.set_taborder("16");
                p.Panel04_02_00.set_type("horizontal");
                p.Panel04_02_00.set_verticalgap("8");
                p.Panel04_02_00.set_flexgrow("1");
                p.Panel04_02_00.set_flexwrap("wrap");
                p.Panel04_02_00.set_maxwidth("");
                p.Panel04_02_00.move("26","849","210","80",null,null);

                p.Static07_03_00.set_taborder("17");
                p.Static07_03_00.set_text("디테일 라벨");
                p.Static07_03_00.set_cssclass("sta_WF_Label");
                p.Static07_03_00.move("67","766","100%","24",null,null);

                p.Div00_01.set_taborder("18");
                p.Div00_01.set_text("Div00");
                p.Div00_01.set_formscrollbartype("none none");
                p.Div00_01.set_formscrolltype("none");
                p.Div00_01.set_flexgrow("1");
                p.Div00_01.move("512","830","100%","48",null,null);

                p.Panel04_03_00.set_taborder("19");
                p.Panel04_03_00.set_type("horizontal");
                p.Panel04_03_00.set_verticalgap("8");
                p.Panel04_03_00.set_flexgrow("1");
                p.Panel04_03_00.set_flexwrap("wrap");
                p.Panel04_03_00.set_maxwidth("");
                p.Panel04_03_00.move("506","849","210","80",null,null);

                p.Static07_04_00.set_taborder("20");
                p.Static07_04_00.set_text("검색");
                p.Static07_04_00.set_cssclass("sta_WF_Label");
                p.Static07_04_00.move("97","796","100%","24",null,null);

                p.Div00_00_00.set_taborder("21");
                p.Div00_00_00.set_text("Div00");
                p.Div00_00_00.set_formscrollbartype("none none");
                p.Div00_00_00.set_formscrolltype("none");
                p.Div00_00_00.move("20","51","100%","48",null,null);

                p.Panel04_04_00.set_taborder("22");
                p.Panel04_04_00.set_type("horizontal");
                p.Panel04_04_00.set_verticalgap("8");
                p.Panel04_04_00.set_flexgrow("1");
                p.Panel04_04_00.set_flexwrap("wrap");
                p.Panel04_04_00.set_maxwidth("");
                p.Panel04_04_00.move("986","849","210","80",null,null);

                p.Static07_06_00.set_taborder("23");
                p.Static07_06_00.set_text("라디오버튼");
                p.Static07_06_00.set_cssclass("sta_WF_Label");
                p.Static07_06_00.move("77","776","100%","24",null,null);

                p.Radio01_00.set_taborder("24");
                p.Radio01_00.set_innerdataset(Radio01_00_innerdataset);
                p.Radio01_00.set_codecolumn("codecolumn");
                p.Radio01_00.set_datacolumn("datacolumn");
                p.Radio01_00.set_direction("vertical");
                p.Radio01_00.move("600","605","256","48",null,null);

                p.Panel04_06_00.set_taborder("25");
                p.Panel04_06_00.set_type("horizontal");
                p.Panel04_06_00.set_verticalgap("8");
                p.Panel04_06_00.set_flexgrow("1");
                p.Panel04_06_00.set_flexwrap("wrap");
                p.Panel04_06_00.set_maxwidth("");
                p.Panel04_06_00.move("506","952","210","80",null,null);

                p.Static07_05_01.set_taborder("26");
                p.Static07_05_01.set_text("에디트+버튼");
                p.Static07_05_01.set_cssclass("sta_WF_Label");
                p.Static07_05_01.move("47","746","100%","24",null,null);

                p.Div01_00.set_taborder("27");
                p.Div01_00.set_text("Div01");
                p.Div01_00.set_flexgrow("1");
                p.Div01_00.move("994","1972","100%","48",null,null);

                p.Panel04_05_01.set_taborder("28");
                p.Panel04_05_01.set_type("horizontal");
                p.Panel04_05_01.set_verticalgap("8");
                p.Panel04_05_01.set_flexgrow("1");
                p.Panel04_05_01.set_flexwrap("wrap");
                p.Panel04_05_01.set_maxwidth("");
                p.Panel04_05_01.move("26","952","210","80",null,null);

                p.Static07_05_00_01.set_taborder("29");
                p.Static07_05_00_01.set_text("핸드폰번호");
                p.Static07_05_00_01.set_cssclass("sta_WF_Label");
                p.Static07_05_00_01.set_flexgrow("1");
                p.Static07_05_00_01.move("107","806","100%","24",null,null);

                p.MaskEdit00.set_taborder("30");
                p.MaskEdit00.set_value("01012345678");
                p.MaskEdit00.set_cssclass("msk_WF_Phone");
                p.MaskEdit00.set_maskchar("_");
                p.MaskEdit00.set_type("string");
                p.MaskEdit00.set_format("@@@-@@@@-@@@@");
                p.MaskEdit00.set_flexgrow("1");
                p.MaskEdit00.move("10","42","31.31188118811881%","48",null,null);

                p.Panel04_05_00_01.set_taborder("31");
                p.Panel04_05_00_01.set_type("horizontal");
                p.Panel04_05_00_01.set_verticalgap("8");
                p.Panel04_05_00_01.set_flexgrow("1");
                p.Panel04_05_00_01.set_flexwrap("wrap");
                p.Panel04_05_00_01.set_maxwidth("");
                p.Panel04_05_00_01.move("706","113","210","80",null,null);

                p.Static07_05_00_00_01.set_taborder("32");
                p.Static07_05_00_00_01.set_text("디테일 라벨");
                p.Static07_05_00_00_01.set_cssclass("sta_WF_Label");
                p.Static07_05_00_00_01.move("117","816","100%","24",null,null);

                p.CheckBox00_00.set_taborder("33");
                p.CheckBox00_00.set_text("사용");
                p.CheckBox00_00.set_value("true");
                p.CheckBox00_00.move("536","433","150","48",null,null);

                p.Panel04_05_00_00_01.set_taborder("34");
                p.Panel04_05_00_00_01.set_type("vertical");
                p.Panel04_05_00_00_01.set_verticalgap("8");
                p.Panel04_05_00_00_01.set_flexgrow("1");
                p.Panel04_05_00_00_01.set_horizontalgap("16");
                p.Panel04_05_00_00_01.set_maxwidth("");
                p.Panel04_05_00_00_01.move("1503","570","210","80",null,null);

                p.Static07_05_00_00_00_00.set_taborder("35");
                p.Static07_05_00_00_00_00.set_text("스핀박스");
                p.Static07_05_00_00_00_00.set_cssclass("sta_WF_Label");
                p.Static07_05_00_00_00_00.move("127","826","100%","24",null,null);

                p.Spin00_00_00_00_00.set_taborder("36");
                p.Spin00_00_00_00_00.move("117","975","100%","48",null,null);

                p.Panel04_05_00_00_00_00.set_taborder("37");
                p.Panel04_05_00_00_00_00.set_type("vertical");
                p.Panel04_05_00_00_00_00.set_flexgrow("1");
                p.Panel04_05_00_00_00_00.set_verticalgap("8");
                p.Panel04_05_00_00_00_00.set_maxwidth("");
                p.Panel04_05_00_00_00_00.move("1853","570","210","80",null,null);

                p.Panel09_00.set_taborder("38");
                p.Panel09_00.set_horizontalgap("24");
                p.Panel09_00.set_verticalgap("24");
                p.Panel09_00.set_flexwrap("wrap");
                p.Panel09_00.set_fittocontents("height");
                p.Panel09_00.set_flexgrow("1");
                p.Panel09_00.move("40","143","100%","392",null,null);

                p.Panel01_01.set_taborder("39");
                p.Panel01_01.set_flexwrap("wrap");
                p.Panel01_01.set_verticalgap("16");
                p.Panel01_01.set_fittocontents("height");
                p.Panel01_01.move("39","101","100%","456",null,null);

                p.Panel00.set_taborder("7");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_verticalgap("24");
                p.Panel00.set_spacing("39px");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_flexgrow("1");
                p.Panel00.set_cssclass("pnl_WF_Detailbox");
                p.Panel00.move("0","0",null,"598","0",null);

                p.Static09_00_00.set_taborder("40");
                p.Static09_00_00.set_text("상세리스트");
                p.Static09_00_00.set_cssclass("sta_WF_H4_pc");
                p.Static09_00_00.set_accessibilityrole("heading4");
                p.Static09_00_00.move("36","1033","100%","38",null,null);

                p.Button00_01_01_00.set_taborder("41");
                p.Button00_01_01_00.set_text("커스텀버튼");
                p.Button00_01_01_00.set_cssclass("btn_WF_Custom");
                p.Button00_01_01_00.move("746","10","117","48",null,null);

                p.Button00_01_00_00_00_00.set_taborder("42");
                p.Button00_01_00_00_00_00.set_cssclass("btn_WF_Add");
                p.Button00_01_00_00_00_00.set_flexshrink("0");
                p.Button00_01_00_00_00_00.move("44","120","48","48",null,null);

                p.Button00_02_00_00.set_taborder("43");
                p.Button00_02_00_00.set_cssclass("btn_WF_Minus");
                p.Button00_02_00_00.set_flexshrink("0");
                p.Button00_02_00_00.move("1085","114","48","48",null,null);

                p.Button00_03_00_00.set_taborder("44");
                p.Button00_03_00_00.set_text("엑셀업로드");
                p.Button00_03_00_00.set_cssclass("btn_WF_ExcelUp");
                p.Button00_03_00_00.move("34","110","145","48",null,null);

                p.Button00_04_00_00.set_taborder("45");
                p.Button00_04_00_00.set_text("엑셀다운로드");
                p.Button00_04_00_00.set_cssclass("btn_WF_ExcelDown");
                p.Button00_04_00_00.move("54","130","162","48",null,null);

                p.Panel01_00_00_00.set_taborder("46");
                p.Panel01_00_00_00.set_flexmainaxisalign("end");
                p.Panel01_00_00_00.set_horizontalgap("8");
                p.Panel01_00_00_00.set_verticalgap("8");
                p.Panel01_00_00_00.set_fittocontents("height");
                p.Panel01_00_00_00.set_flexwrap("wrap");
                p.Panel01_00_00_00.set_flexgrow("1");
                p.Panel01_00_00_00.move("0","0","100%","48",null,null);

                p.Static10_00_00.set_taborder("47");
                p.Static10_00_00.set_text("총 <fc v=\'#0B50D0\'><b v=\'true\'>00</b></fc>건");
                p.Static10_00_00.set_usedecorate("true");
                p.Static10_00_00.set_cssclass("sta_WF_PaddingB16");
                p.Static10_00_00.set_flexgrow("1");
                p.Static10_00_00.move("39","275","100%","38",null,null);

                p.Grid00_00.set_taborder("48");
                p.Grid00_00.set_binddataset("ds_grid");
                p.Grid00_00.set_flexgrow("1");
                p.Grid00_00.set_showcellselection("true");
                p.Grid00_00.move("64","834","85.52631578947368%","406",null,null);

                p.Panel00_06.set_taborder("49");
                p.Panel00_06.set_flexwrap("wrap");
                p.Panel00_06.set_verticalgap("4");
                p.Panel00_06.set_flexgrow("1");
                p.Panel00_06.set_fittocontents("height");
                p.Panel00_06.move("64","740","99.73753280839895%","500",null,null);

                p.Panel01.set_taborder("50");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.set_spacing("39px");
                p.Panel01.set_fittocontents("height");
                p.Panel01.set_verticalgap("24");
                p.Panel01.set_cssclass("pnl_WF_Detailbox");
                p.Panel01.move("0","Panel00:16",null,"640","0",null);

                p.Static00.set_taborder("51");
                p.Static00.move("24","Panel01:0","100","24",null,null);
            	}
            );
            obj.set_spacing("24px");
            obj.set_verticalgap("24");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","mobile_small,Desktop_screen",448,2012,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_mobileorientation("Portrait");
            obj.set_type("default");
            obj.set_spacing("24px");
            obj.set_verticalgap("24");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Template10.xfdl", function() {
        this.Template13_1_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Template13_1_onload,this);
        };
        this.loadIncludeScript("Template10.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
