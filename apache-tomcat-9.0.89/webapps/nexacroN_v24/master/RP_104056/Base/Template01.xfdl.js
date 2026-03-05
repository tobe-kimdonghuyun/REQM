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
            this.set_titletext("Single-Detail");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,1677);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "chk","type" : "STRING","size" : "256"},{"id" : "No","type" : "STRING","size" : "256"},{"id" : "Edi","type" : "STRING","size" : "256"},{"id" : "Essential","type" : "STRING","size" : "256"},{"id" : "Num","type" : "STRING","size" : "256"},{"id" : "CenterAlign","type" : "STRING","size" : "256"},{"id" : "Cmb","type" : "STRING","size" : "256"},{"id" : "Cal","type" : "STRING","size" : "256"},{"id" : "CenterAlign_0","type" : "STRING","size" : "256"},{"id" : "Btn","type" : "STRING","size" : "256"}]},"Rows" : [{"No" : "1","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","CenterAlign" : "투비소프트","Btn" : "버튼","Cal" : "2025-12-30","CenterAlign_0" : "가나다라마바사"},{"No" : "2","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","CenterAlign" : "투비소프트","Btn" : "버튼","Cal" : "2025-12-30","CenterAlign_0" : "가나다라마바사"},{"No" : "3","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","CenterAlign" : "투비소프트","Btn" : "버튼","Cal" : "2025-12-30","CenterAlign_0" : "가나다라마바사"},{"No" : "4","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","CenterAlign" : "투비소프트","Btn" : "버튼","Cal" : "2025-12-30","CenterAlign_0" : "가나다라마바사"},{"No" : "5","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","CenterAlign" : "투비소프트","Btn" : "버튼","Cal" : "2025-12-30","CenterAlign_0" : "가나다라마바사"},{"No" : "6","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","CenterAlign" : "투비소프트","Btn" : "버튼","Cal" : "2025-12-30","CenterAlign_0" : "가나다라마바사"},{"No" : "7","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","CenterAlign" : "투비소프트","Btn" : "버튼","Cal" : "2025-12-30","CenterAlign_0" : "가나다라마바사"},{"No" : "8","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","CenterAlign" : "투비소프트","Btn" : "버튼","Cal" : "2025-12-30","CenterAlign_0" : "가나다라마바사"},{"No" : "9","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","CenterAlign" : "투비소프트","Btn" : "버튼","Cal" : "2025-12-30","CenterAlign_0" : "가나다라마바사"},{"No" : "10","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","CenterAlign" : "투비소프트","Btn" : "버튼","Cal" : "2025-12-30","CenterAlign_0" : "가나다라마바사"},{"No" : "11","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","CenterAlign" : "투비소프트","Btn" : "버튼","Cal" : "2025-12-30","CenterAlign_0" : "가나다라마바사"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,"60","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Page Title");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("height");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","60","54","100","48",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색라벨");
            obj.set_cssclass("sta_WF_SchDetail");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","94","24","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_value("입력해주세요");
            obj.set_flexgrow("1");
            obj.set_cssclass("essential");
            obj.set_text("입력해주세요");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel000","9","290","280","48",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static04\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00","70","64","100","48",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("검색라벨");
            obj.set_cssclass("sta_WF_SchDetail");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","518","296","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_flexgrow("1");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","436","290","280","48",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static04_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Combo00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00","80","74","100","48",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("검색라벨");
            obj.set_cssclass("sta_WF_SchDetail");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","931","300","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_value("10");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_02","437","10","280","48",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static04_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"MaskEdit00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","90","84","100","48",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("검색라벨");
            obj.set_cssclass("sta_WF_SchDetail");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","377","372","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_flexgrow("1");
            obj.set_popupsize("384 437");
            obj.set_usetrailingday("true");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_03","864","10","280","48",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static04_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Calendar00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01","100","94","100","48",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("검색라벨");
            obj.set_cssclass("sta_WF_SchDetail");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","104","34","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_value("입력해주세요");
            obj.set_flexgrow("1");
            obj.set_text("입력해주세요");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_04","10","10","280","48",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static04_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01","110","104","90","48",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("검색라벨");
            obj.set_cssclass("sta_WF_SchDetail");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","948","284","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "남성"},{"codecolumn" : "1","datacolumn" : "여성"}]});
            obj.set_innerdataset(Radio00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_05","874","20","280","48",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static04_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Radio00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel010","24","24","569","176",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_verticalgap("16");
            obj.set_horizontalgap("24");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel000\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_01\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel00_02\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel00_03\"/><PanelItem id=\"PanelItem05\" componentid=\"Panel00_04\"/><PanelItem id=\"PanelItem06\" componentid=\"Panel00_05\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","1215","590","500","48",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Sch");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","1325","590","48","48",null,null,"48",null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WF_Reset");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel020","1313","220","280","48",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_horizontalgap("8");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","Static00:48",null,"328","0",null,null,null,null,null,this);
            obj.set_taborder("23");
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

            obj = new Static("Static01","0","Panel00:40",null,"48","0",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("Heading Title2 ");
            obj.set_cssclass("sta_WF_H3_pc");
            obj.set_fittocontents("height");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","0","590","100%","38",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("서브타이틀");
            obj.set_positionstep("0");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","27","726","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("콤보박스");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","27","757","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("27");
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
            obj.set_taborder("28");
            obj.set_type("horizontal");
            obj.set_flexgrow("1");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07\"/><PanelItem id=\"PanelItem01\" componentid=\"Combo00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00","57","756","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("에디트");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","531","771","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_00","506","746","272","80",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_type("horizontal");
            obj.set_flexgrow("1");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Edit01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_01","87","786","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("마스크에디트");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01","1046","772","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_flexgrow("1");
            obj.set_displaynulltext("10");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_01","986","746","272","80",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_type("horizontal");
            obj.set_flexgrow("1");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_01\"/><PanelItem id=\"PanelItem03\" componentid=\"MaskEdit01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_02","37","736","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("에디트+버튼");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02","171","885","290","48",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","452","876","78","48",null,null,"78",null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("버튼");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel06","0","18","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_horizontalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Edit02\"/><PanelItem id=\"PanelItem02\" componentid=\"Button01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_02","26","849","272","80",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_type("horizontal");
            obj.set_flexgrow("1");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel06\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_03","67","766","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("캘린더");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","536","886","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_value("20251230");
            obj.set_flexgrow("1");
            obj.set_popupsize("384 437");
            obj.set_usetrailingday("true");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_03","506","849","272","80",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_type("horizontal");
            obj.set_flexgrow("1");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_03\"/><PanelItem id=\"PanelItem03\" componentid=\"Calendar01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_04","97","796","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("라디오버튼");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio01","1007","875","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_flexgrow("1");
            var Radio01_innerdataset = new nexacro.NormalDataset("Radio01_innerdataset", obj);
            Radio01_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "라디오 01"},{"codecolumn" : "1","datacolumn" : "라디오 02"},{"codecolumn" : "2","datacolumn" : "라디오 03"}]});
            obj.set_innerdataset(Radio01_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_04","986","849","272","80",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_type("horizontal");
            obj.set_flexgrow("1");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_04\"/><PanelItem id=\"PanelItem03\" componentid=\"Radio01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_05","47","746","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("스핀박스");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin00","117","975","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_flexgrow("1");
            obj.set_displaynulltext("10");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_05","26","952","272","80",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_type("horizontal");
            obj.set_flexgrow("1");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_05\"/><PanelItem id=\"PanelItem02\" componentid=\"Spin00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_06","77","776","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("검색");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","512","830","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("50");
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
            obj.set_taborder("51");
            obj.set_type("horizontal");
            obj.set_flexgrow("1");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_06\"/><PanelItem id=\"PanelItem01\" componentid=\"Div00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_07","107","806","100%","23",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("콤보박스");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_07","37","767","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_flexgrow("1");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_07","986","952","272","79",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_type("horizontal");
            obj.set_flexgrow("1");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_07\"/><PanelItem id=\"PanelItem01\" componentid=\"Combo00_00_07\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel09","40","143","100%","463",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_horizontalgap("24");
            obj.set_verticalgap("16");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem09\" componentid=\"Panel04\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel04_01\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel04_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel04_02\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel04_03\"/><PanelItem id=\"PanelItem05\" componentid=\"Panel04_04\"/><PanelItem id=\"PanelItem06\" componentid=\"Panel04_05\"/><PanelItem id=\"PanelItem07\" componentid=\"Panel04_06\"/><PanelItem id=\"PanelItem08\" componentid=\"Panel04_07\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","Static01:40",null,"605","0",null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("24");
            obj.set_cssclass("pnl_WF_Detailbox");
            obj.set_spacing("24px");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem10\" componentid=\"Static06\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel09\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","36","1033","100%","38",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("상세리스트");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","128","1107","100%","38",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("3명 중 <fc v=\'#0B50D0\'><b v=\'true\'>3</b></fc>명 선택됨");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","41","1088","100%","212",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_binddataset("ds_grid");
            obj.set_flexgrow("1");
            obj.set_showcellselection("true");
            obj.set_cellcalendarpopupsize("384 437");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"134\"/><Column size=\"134\"/><Column size=\"134\"/><Column size=\"134\"/><Column size=\"100\"/><Column size=\"58\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"57\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"No\" cssclass=\"cell_WF_Center\"/><Cell col=\"2\" text=\"에디트\" cssclass=\"cell_WF_Center\"/><Cell col=\"3\" text=\"익스팬드\" cssclass=\"cell_WF_Center\"/><Cell col=\"4\" text=\"콤보\" cssclass=\"cell_WF_Center\"/><Cell col=\"5\" text=\"캘린더\" cssclass=\"cell_WF_Center\"/><Cell col=\"6\" text=\"중앙정렬\" cssclass=\"cell_WF_Center\"/><Cell col=\"7\" text=\"버튼\" cssclass=\"cell_WF_Center\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:No\" displaytype=\"number\" cssclass=\"cell_WF_Center\"/><Cell col=\"2\" text=\"bind:Edi\" edittype=\"text\" displaytype=\"editcontrol\"/><Cell col=\"3\" text=\"bind:CenterAlign\" displaytype=\"editcontrol\" edittype=\"text\" expandsize=\"48\" expandshow=\"show\" expandimage=\"url(&apos;theme::NexaKRDS/images/btn_WF_Sch.png&apos;)\"/><Cell col=\"4\" text=\"bind:Cmb\" displaytype=\"combocontrol\" edittype=\"combo\"/><Cell col=\"5\" text=\"bind:Cal\" displaytype=\"calendarcontrol\" edittype=\"date\"/><Cell col=\"6\" text=\"bind:CenterAlign_0\" cssclass=\"cell_WF_Center\"/><Cell col=\"7\" text=\"bind:Btn\" displaytype=\"buttoncontrol\" edittype=\"button\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel030","40","102","100%","254",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("4");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static10\"/><PanelItem id=\"PanelItem01\" componentid=\"Grid00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02","0","Panel01:24",null,"396","0",null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_cssclass("pnl_WF_Detailbox");
            obj.set_flexwrap("wrap");
            obj.set_spacing("40px");
            obj.set_verticalgap("24");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static09\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel030\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","64","1436","90","48",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("생성");
            obj.set_cssclass("btn_WF_CrudNew");
            obj.set_flexgrow("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_01_00","407","1450","90","48",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_CrudModify");
            obj.set_flexgrow("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_00_02","508","1443","90","48",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CrudSave");
            obj.set_flexgrow("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_00_03","614","1452","90","48",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CrudDelete");
            obj.set_flexgrow("0");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03","0","Panel02:40",null,"48","0",null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_horizontalgap("8");
            obj.set_flexmainaxisalign("center");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button02\"/><PanelItem id=\"PanelItem01\" componentid=\"Button02_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Button02_00_02\"/><PanelItem id=\"PanelItem03\" componentid=\"Button02_00_03\"/></Contents>");
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
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",888,1677,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("Single-Detail");

                p.Static00.set_taborder("0");
                p.Static00.set_text("Page Title");
                p.Static00.set_cssclass("sta_WF_H2_pc");
                p.Static00.set_fittocontents("height");
                p.Static00.set_accessibilityrole("heading2");
                p.Static00.move("0","0",null,"60","0",null);

                p.Static04.set_taborder("1");
                p.Static04.set_text("검색라벨");
                p.Static04.set_cssclass("sta_WF_SchDetail");
                p.Static04.set_flexshrink("0");
                p.Static04.move("60","54","100","48",null,null);

                p.Edit00.set_taborder("2");
                p.Edit00.set_value("입력해주세요");
                p.Edit00.set_flexgrow("1");
                p.Edit00.set_cssclass("essential");
                p.Edit00.set_maxwidth("");
                p.Edit00.move("94","24","100%","48",null,null);

                p.Panel000.set_taborder("3");
                p.Panel000.set_flexgrow("1");
                p.Panel000.set_horizontalgap("10");
                p.Panel000.set_maxwidth("");
                p.Panel000.move("9","290","280","48",null,null);

                p.Static04_00.set_taborder("4");
                p.Static04_00.set_text("검색라벨");
                p.Static04_00.set_cssclass("sta_WF_SchDetail");
                p.Static04_00.set_flexshrink("0");
                p.Static04_00.move("70","64","100","48",null,null);

                p.Combo00.set_taborder("5");
                p.Combo00.set_flexgrow("1");
                p.Combo00.set_text("선택");
                p.Combo00.set_value("");
                p.Combo00.set_index("-1");
                p.Combo00.move("518","296","100%","48",null,null);

                p.Panel00_01.set_taborder("6");
                p.Panel00_01.set_flexgrow("1");
                p.Panel00_01.set_horizontalgap("10");
                p.Panel00_01.set_maxwidth("");
                p.Panel00_01.move("436","290","280","48",null,null);

                p.Static04_00_00.set_taborder("7");
                p.Static04_00_00.set_text("검색라벨");
                p.Static04_00_00.set_cssclass("sta_WF_SchDetail");
                p.Static04_00_00.set_flexshrink("0");
                p.Static04_00_00.move("80","74","100","48",null,null);

                p.MaskEdit00.set_taborder("8");
                p.MaskEdit00.set_value("10");
                p.MaskEdit00.set_flexgrow("1");
                p.MaskEdit00.move("931","300","100%","48",null,null);

                p.Panel00_02.set_taborder("9");
                p.Panel00_02.set_flexgrow("1");
                p.Panel00_02.set_horizontalgap("10");
                p.Panel00_02.set_maxwidth("");
                p.Panel00_02.move("437","10","280","48",null,null);

                p.Static04_00_00_00.set_taborder("10");
                p.Static04_00_00_00.set_text("검색라벨");
                p.Static04_00_00_00.set_cssclass("sta_WF_SchDetail");
                p.Static04_00_00_00.set_flexshrink("0");
                p.Static04_00_00_00.move("90","84","100","48",null,null);

                p.Calendar00.set_taborder("11");
                p.Calendar00.set_flexgrow("1");
                p.Calendar00.set_popupsize("384 437");
                p.Calendar00.set_usetrailingday("true");
                p.Calendar00.move("377","372","100%","48",null,null);

                p.Panel00_03.set_taborder("12");
                p.Panel00_03.set_flexgrow("1");
                p.Panel00_03.set_horizontalgap("10");
                p.Panel00_03.set_maxwidth("");
                p.Panel00_03.move("864","10","280","48",null,null);

                p.Static04_01.set_taborder("13");
                p.Static04_01.set_text("검색라벨");
                p.Static04_01.set_cssclass("sta_WF_SchDetail");
                p.Static04_01.set_flexshrink("0");
                p.Static04_01.move("100","94","100","48",null,null);

                p.Edit00_00.set_taborder("14");
                p.Edit00_00.set_value("입력해주세요");
                p.Edit00_00.set_flexgrow("1");
                p.Edit00_00.set_maxwidth("");
                p.Edit00_00.move("104","34","100%","48",null,null);

                p.Panel00_04.set_taborder("15");
                p.Panel00_04.set_flexgrow("1");
                p.Panel00_04.set_horizontalgap("10");
                p.Panel00_04.set_maxwidth("");
                p.Panel00_04.move("10","10","280","48",null,null);

                p.Static04_00_00_01.set_taborder("16");
                p.Static04_00_00_01.set_text("검색라벨");
                p.Static04_00_00_01.set_cssclass("sta_WF_SchDetail");
                p.Static04_00_00_01.set_flexshrink("0");
                p.Static04_00_00_01.move("110","104","90","48",null,null);

                p.Radio00.set_taborder("17");
                p.Radio00.set_innerdataset(Radio00_innerdataset);
                p.Radio00.set_codecolumn("codecolumn");
                p.Radio00.set_datacolumn("datacolumn");
                p.Radio00.set_direction("vertical");
                p.Radio00.move("948","284","100%","48",null,null);

                p.Panel00_05.set_taborder("18");
                p.Panel00_05.set_flexgrow("1");
                p.Panel00_05.set_horizontalgap("10");
                p.Panel00_05.set_maxwidth("");
                p.Panel00_05.move("874","20","280","48",null,null);

                p.Panel010.set_taborder("19");
                p.Panel010.set_verticalgap("16");
                p.Panel010.set_horizontalgap("24");
                p.Panel010.set_fittocontents("height");
                p.Panel010.set_flexgrow("1");
                p.Panel010.set_flexwrap("wrap");
                p.Panel010.set_maxwidth("");
                p.Panel010.move("24","24","569","176",null,null);

                p.Button00.set_taborder("20");
                p.Button00.set_text("조회하기");
                p.Button00.set_cssclass("btn_WF_Sch");
                p.Button00.set_flexgrow("1");
                p.Button00.set_maxwidth("");
                p.Button00.move("1215","590","500","48",null,null);

                p.Button00_00.set_taborder("21");
                p.Button00_00.set_cssclass("btn_WF_Reset");
                p.Button00_00.set_enable("true");
                p.Button00_00.set_minwidth("48");
                p.Button00_00.set_maxwidth("");
                p.Button00_00.move("1325","590","48","48",null,null);

                p.Panel020.set_taborder("22");
                p.Panel020.set_horizontalgap("8");
                p.Panel020.set_flexmainaxisalign("end");
                p.Panel020.set_flexgrow("1");
                p.Panel020.set_flexcrossaxisalign("center");
                p.Panel020.set_maxheight("");
                p.Panel020.set_maxwidth("");
                p.Panel020.move("1313","220","280","48",null,null);

                p.Panel00.set_taborder("23");
                p.Panel00.set_spacing("40px");
                p.Panel00.set_tablecellarea("");
                p.Panel00.set_horizontalgap("24");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_flexmainaxisalign("center");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_flexcrossaxisalign("center");
                p.Panel00.set_verticalgap("24");
                p.Panel00.set_cssclass("pnl_WF_SchBar");
                p.Panel00.move("0","Static00:48",null,"328","0",null);

                p.Static01.set_taborder("24");
                p.Static01.set_text("Heading Title2 ");
                p.Static01.set_cssclass("sta_WF_H3_pc");
                p.Static01.set_fittocontents("height");
                p.Static01.set_accessibilityrole("heading3");
                p.Static01.move("0","Panel00:40",null,"48","0",null);

                p.Static06.set_taborder("25");
                p.Static06.set_text("서브타이틀");
                p.Static06.set_positionstep("0");
                p.Static06.set_cssclass("sta_WF_H4_pc");
                p.Static06.set_flexgrow("1");
                p.Static06.set_fittocontents("height");
                p.Static06.set_accessibilityrole("heading4");
                p.Static06.set_maxwidth("");
                p.Static06.move("0","590","100%","38",null,null);

                p.Static07.set_taborder("26");
                p.Static07.set_text("콤보박스");
                p.Static07.set_cssclass("sta_WF_Label");
                p.Static07.set_flexgrow("1");
                p.Static07.move("27","726","100%","24",null,null);

                p.Combo00_00.set_taborder("27");
                p.Combo00_00.set_innerdataset(Combo00_00_innerdataset);
                p.Combo00_00.set_codecolumn("codecolumn");
                p.Combo00_00.set_datacolumn("datacolumn");
                p.Combo00_00.set_flexgrow("1");
                p.Combo00_00.set_text("선택");
                p.Combo00_00.set_value("");
                p.Combo00_00.set_index("-1");
                p.Combo00_00.move("27","757","100%","48",null,null);

                p.Panel04.set_taborder("28");
                p.Panel04.set_type("horizontal");
                p.Panel04.set_flexgrow("1");
                p.Panel04.set_verticalgap("8");
                p.Panel04.set_flexwrap("wrap");
                p.Panel04.set_maxwidth("");
                p.Panel04.move("26","746","272","80",null,null);

                p.Static07_00.set_taborder("29");
                p.Static07_00.set_text("에디트");
                p.Static07_00.set_cssclass("sta_WF_Label");
                p.Static07_00.set_flexgrow("1");
                p.Static07_00.move("57","756","100%","24",null,null);

                p.Edit01.set_taborder("30");
                p.Edit01.set_flexgrow("1");
                p.Edit01.move("531","771","100%","48",null,null);

                p.Panel04_00.set_taborder("31");
                p.Panel04_00.set_type("horizontal");
                p.Panel04_00.set_flexgrow("1");
                p.Panel04_00.set_verticalgap("8");
                p.Panel04_00.set_flexwrap("wrap");
                p.Panel04_00.set_maxwidth("");
                p.Panel04_00.move("506","746","272","80",null,null);

                p.Static07_01.set_taborder("32");
                p.Static07_01.set_text("마스크에디트");
                p.Static07_01.set_cssclass("sta_WF_Label");
                p.Static07_01.set_flexgrow("1");
                p.Static07_01.move("87","786","100%","24",null,null);

                p.MaskEdit01.set_taborder("33");
                p.MaskEdit01.set_flexgrow("1");
                p.MaskEdit01.set_displaynulltext("10");
                p.MaskEdit01.move("1046","772","100%","48",null,null);

                p.Panel04_01.set_taborder("34");
                p.Panel04_01.set_type("horizontal");
                p.Panel04_01.set_flexgrow("1");
                p.Panel04_01.set_verticalgap("8");
                p.Panel04_01.set_flexwrap("wrap");
                p.Panel04_01.set_maxwidth("");
                p.Panel04_01.move("986","746","272","80",null,null);

                p.Static07_02.set_taborder("35");
                p.Static07_02.set_text("에디트+버튼");
                p.Static07_02.set_cssclass("sta_WF_Label");
                p.Static07_02.set_flexgrow("1");
                p.Static07_02.move("37","736","100%","24",null,null);

                p.Edit02.set_taborder("36");
                p.Edit02.set_flexgrow("1");
                p.Edit02.move("171","885","290","48",null,null);

                p.Button01.set_taborder("37");
                p.Button01.set_text("버튼");
                p.Button01.set_minwidth("78");
                p.Button01.set_maxwidth("");
                p.Button01.move("452","876","78","48",null,null);

                p.Panel06.set_taborder("38");
                p.Panel06.set_horizontalgap("8");
                p.Panel06.set_flexgrow("1");
                p.Panel06.move("0","18","100%","48",null,null);

                p.Panel04_02.set_taborder("39");
                p.Panel04_02.set_type("horizontal");
                p.Panel04_02.set_flexgrow("1");
                p.Panel04_02.set_verticalgap("8");
                p.Panel04_02.set_flexwrap("wrap");
                p.Panel04_02.set_maxwidth("");
                p.Panel04_02.move("26","849","272","80",null,null);

                p.Static07_03.set_taborder("40");
                p.Static07_03.set_text("캘린더");
                p.Static07_03.set_cssclass("sta_WF_Label");
                p.Static07_03.set_flexgrow("1");
                p.Static07_03.move("67","766","100%","24",null,null);

                p.Calendar01.set_taborder("41");
                p.Calendar01.set_value("20251230");
                p.Calendar01.set_flexgrow("1");
                p.Calendar01.set_popupsize("384 437");
                p.Calendar01.set_usetrailingday("true");
                p.Calendar01.move("536","886","100%","48",null,null);

                p.Panel04_03.set_taborder("42");
                p.Panel04_03.set_type("horizontal");
                p.Panel04_03.set_flexgrow("1");
                p.Panel04_03.set_verticalgap("8");
                p.Panel04_03.set_flexwrap("wrap");
                p.Panel04_03.set_maxwidth("");
                p.Panel04_03.move("506","849","272","80",null,null);

                p.Static07_04.set_taborder("43");
                p.Static07_04.set_text("라디오버튼");
                p.Static07_04.set_cssclass("sta_WF_Label");
                p.Static07_04.set_flexgrow("1");
                p.Static07_04.move("97","796","100%","24",null,null);

                p.Radio01.set_taborder("44");
                p.Radio01.set_innerdataset(Radio01_innerdataset);
                p.Radio01.set_codecolumn("codecolumn");
                p.Radio01.set_datacolumn("datacolumn");
                p.Radio01.set_direction("vertical");
                p.Radio01.set_flexgrow("1");
                p.Radio01.move("1007","875","100%","48",null,null);

                p.Panel04_04.set_taborder("45");
                p.Panel04_04.set_type("horizontal");
                p.Panel04_04.set_flexgrow("1");
                p.Panel04_04.set_verticalgap("8");
                p.Panel04_04.set_flexwrap("wrap");
                p.Panel04_04.set_maxwidth("");
                p.Panel04_04.move("986","849","272","80",null,null);

                p.Static07_05.set_taborder("46");
                p.Static07_05.set_text("스핀박스");
                p.Static07_05.set_cssclass("sta_WF_Label");
                p.Static07_05.set_flexgrow("1");
                p.Static07_05.move("47","746","100%","24",null,null);

                p.Spin00.set_taborder("47");
                p.Spin00.set_flexgrow("1");
                p.Spin00.set_displaynulltext("10");
                p.Spin00.move("117","975","100%","48",null,null);

                p.Panel04_05.set_taborder("48");
                p.Panel04_05.set_type("horizontal");
                p.Panel04_05.set_flexgrow("1");
                p.Panel04_05.set_verticalgap("8");
                p.Panel04_05.set_flexwrap("wrap");
                p.Panel04_05.set_maxwidth("");
                p.Panel04_05.move("26","952","272","80",null,null);

                p.Static07_06.set_taborder("49");
                p.Static07_06.set_text("검색");
                p.Static07_06.set_cssclass("sta_WF_Label");
                p.Static07_06.set_flexgrow("1");
                p.Static07_06.move("77","776","100%","24",null,null);

                p.Div00.set_taborder("50");
                p.Div00.set_text("Div00");
                p.Div00.set_formscrollbartype("none none");
                p.Div00.set_formscrolltype("none");
                p.Div00.set_flexgrow("1");
                p.Div00.set_accessibilityenable("false");
                p.Div00.move("512","830","100%","48",null,null);

                p.Panel04_06.set_taborder("51");
                p.Panel04_06.set_type("horizontal");
                p.Panel04_06.set_flexgrow("1");
                p.Panel04_06.set_verticalgap("8");
                p.Panel04_06.set_flexwrap("wrap");
                p.Panel04_06.set_maxwidth("");
                p.Panel04_06.move("506","952","272","80",null,null);

                p.Static07_07.set_taborder("52");
                p.Static07_07.set_text("콤보박스");
                p.Static07_07.set_cssclass("sta_WF_Label");
                p.Static07_07.set_flexgrow("1");
                p.Static07_07.move("107","806","100%","23",null,null);

                p.Combo00_00_07.set_taborder("53");
                p.Combo00_00_07.set_flexgrow("1");
                p.Combo00_00_07.set_text("선택");
                p.Combo00_00_07.set_value("");
                p.Combo00_00_07.set_index("-1");
                p.Combo00_00_07.move("37","767","100%","48",null,null);

                p.Panel04_07.set_taborder("54");
                p.Panel04_07.set_type("horizontal");
                p.Panel04_07.set_flexgrow("1");
                p.Panel04_07.set_verticalgap("8");
                p.Panel04_07.set_flexwrap("wrap");
                p.Panel04_07.set_maxwidth("");
                p.Panel04_07.move("986","952","272","79",null,null);

                p.Panel09.set_taborder("55");
                p.Panel09.set_horizontalgap("24");
                p.Panel09.set_verticalgap("16");
                p.Panel09.set_flexwrap("wrap");
                p.Panel09.set_fittocontents("height");
                p.Panel09.set_flexgrow("1");
                p.Panel09.move("40","143","100%","463",null,null);

                p.Panel01.set_taborder("56");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.set_verticalgap("24");
                p.Panel01.set_cssclass("pnl_WF_Detailbox");
                p.Panel01.set_spacing("24px");
                p.Panel01.set_fittocontents("height");
                p.Panel01.set_minwidth("");
                p.Panel01.move("0","Static01:40",null,"605","0",null);

                p.Static09.set_taborder("57");
                p.Static09.set_text("상세리스트");
                p.Static09.set_cssclass("sta_WF_H4_pc");
                p.Static09.set_flexgrow("1");
                p.Static09.set_fittocontents("height");
                p.Static09.set_accessibilityrole("heading4");
                p.Static09.move("36","1033","100%","38",null,null);

                p.Static10.set_taborder("58");
                p.Static10.set_text("3명 중 <fc v=\'#0B50D0\'><b v=\'true\'>3</b></fc>명 선택됨");
                p.Static10.set_usedecorate("true");
                p.Static10.move("128","1107","100%","38",null,null);

                p.Grid00.set_taborder("59");
                p.Grid00.set_binddataset("ds_grid");
                p.Grid00.set_flexgrow("1");
                p.Grid00.set_showcellselection("true");
                p.Grid00.set_cellcalendarpopupsize("384 437");
                p.Grid00.move("41","1088","100%","212",null,null);

                p.Panel030.set_taborder("60");
                p.Panel030.set_flexwrap("wrap");
                p.Panel030.set_verticalgap("4");
                p.Panel030.set_flexgrow("1");
                p.Panel030.move("40","102","100%","254",null,null);

                p.Panel02.set_taborder("61");
                p.Panel02.set_cssclass("pnl_WF_Detailbox");
                p.Panel02.set_flexwrap("wrap");
                p.Panel02.set_spacing("40px");
                p.Panel02.set_verticalgap("24");
                p.Panel02.move("0","Panel01:24",null,"396","0",null);

                p.Button02.set_taborder("62");
                p.Button02.set_text("생성");
                p.Button02.set_cssclass("btn_WF_CrudNew");
                p.Button02.set_flexgrow("0");
                p.Button02.move("64","1436","90","48",null,null);

                p.Button02_01_00.set_taborder("63");
                p.Button02_01_00.set_text("수정");
                p.Button02_01_00.set_cssclass("btn_WF_CrudModify");
                p.Button02_01_00.set_flexgrow("0");
                p.Button02_01_00.move("407","1450","90","48",null,null);

                p.Button02_00_02.set_taborder("64");
                p.Button02_00_02.set_text("저장");
                p.Button02_00_02.set_cssclass("btn_WF_CrudSave");
                p.Button02_00_02.set_flexgrow("0");
                p.Button02_00_02.move("508","1443","90","48",null,null);

                p.Button02_00_03.set_taborder("65");
                p.Button02_00_03.set_text("삭제");
                p.Button02_00_03.set_cssclass("btn_WF_CrudDelete");
                p.Button02_00_03.set_flexgrow("0");
                p.Button02_00_03.move("614","1452","90","48",null,null);

                p.Panel03.set_taborder("66");
                p.Panel03.set_horizontalgap("8");
                p.Panel03.set_flexmainaxisalign("center");
                p.Panel03.set_flexwrap("wrap");
                p.Panel03.set_fittocontents("height");
                p.Panel03.set_verticalgap("8");
                p.Panel03.move("0","Panel02:40",null,"48","0",null);
            	}
            );
            obj.set_type("default");
            obj.set_flexwrap("wrap");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Desktop_screen,mobile_small",448,2065,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel010.move("24","24","569","368",null,null);

                p.Panel00.set_spacing("24px 16px");
                p.Panel00.move("0","Static00:24",null,"488","0",null);

                p.Panel09.move("40","143","100%","847",null,null);

                p.Panel01.set_spacing("23px 15px");
                p.Panel01.move("0","660",null,"957","0",null);

                p.Panel02.set_spacing("23px 15px");
                p.Panel02.move("0","1633",null,"364","0",null);

                p.Static01.move("0","Panel00:20",null,"48","0",null);

                p.Panel03.move("0","2017",null,"48","0",null);
            	}
            );
            obj.set_mobileorientation("Portrait");
            obj.set_type("default");
            obj.set_flexwrap("wrap");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Template01.xfdl", function() {

        this.Form_Main_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Main_onload,this);
            this.Static00.addEventHandler("onclick",this.Static_onclick,this);
            this.Static01.addEventHandler("onclick",this.Static_onclick,this);
        };
        this.loadIncludeScript("Template01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
