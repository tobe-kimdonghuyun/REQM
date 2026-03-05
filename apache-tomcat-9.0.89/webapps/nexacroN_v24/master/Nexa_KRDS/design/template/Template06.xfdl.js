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
            this.set_titletext("Tree");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,1862);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_tree", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "lev","type" : "STRING","size" : "256"},{"id" : "data","type" : "STRING","size" : "256"}]},"Rows" : [{"lev" : "0","data" : "1뎁스메뉴"},{"lev" : "1","data" : "2뎁스메뉴"},{"lev" : "2","data" : "3뎁스메뉴"},{"data" : "3뎁스메뉴","lev" : "2"},{"lev" : "2","data" : "3뎁스메뉴"},{"data" : "3뎁스메뉴","lev" : "2"},{"data" : "3뎁스메뉴","lev" : "2"},{"lev" : "0","data" : "1뎁스메뉴"},{"lev" : "1","data" : "2뎁스메뉴"},{"lev" : "2","data" : "3뎁스메뉴"},{"lev" : "2","data" : "3뎁스메뉴"},{"data" : "3뎁스메뉴","lev" : "2"},{"data" : "3뎁스메뉴","lev" : "2"},{"data" : "3뎁스메뉴","lev" : "2"},{"data" : "1뎁스메뉴","lev" : "0"},{"data" : "2뎁스메뉴","lev" : "1"},{"data" : "3뎁스메뉴","lev" : "2"},{"data" : "3뎁스메뉴","lev" : "2"},{"data" : "3뎁스메뉴","lev" : "2"},{"data" : "3뎁스메뉴","lev" : "2"},{"lev" : "2","data" : "3뎁스메뉴"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grid", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "chk","type" : "STRING","size" : "256"},{"id" : "No","type" : "STRING","size" : "256"},{"id" : "Edi","type" : "STRING","size" : "256"},{"id" : "Essential","type" : "STRING","size" : "256"},{"id" : "Num","type" : "STRING","size" : "256"},{"id" : "Txt","type" : "STRING","size" : "256"}]},"Rows" : [{"No" : "1","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","Txt" : "투비소프트"},{"No" : "2","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","Txt" : "투비소프트"},{"No" : "3","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","Txt" : "투비소프트"},{"No" : "4","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","Txt" : "투비소프트"},{"No" : "5","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","Txt" : "투비소프트"},{"No" : "6","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","Txt" : "투비소프트"},{"No" : "7","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","Txt" : "투비소프트"},{"No" : "8","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","Txt" : "투비소프트"},{"No" : "9","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","Txt" : "투비소프트"},{"No" : "10","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","Txt" : "투비소프트"},{"No" : "11","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","Txt" : "투비소프트"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,"60","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Page Title");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("height");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","Static00:48",null,"200","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_spacing("40px");
            obj.set_cssclass("pnl_WF_SchBar");
            obj.set_tablecellarea("");
            obj.set_horizontalgap("24");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("24");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_04\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","24","24","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("16");
            obj.set_horizontalgap("24");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_03\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_02","9","290","280","48",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static04\"/><PanelItem id=\"PanelItem02\" componentid=\"Calendar01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","60","54","100","48",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("필수캘린더");
            obj.set_cssclass("sta_WF_SchDetail");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar01_00","10","41","108","48",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_value("20251230");
            obj.set_flexgrow("1");
            obj.set_cssclass("essential");
            obj.set_popupsize("384 437");
            obj.set_usetrailingday("true");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_03","436","290","280","48",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static04_00\"/><PanelItem id=\"PanelItem04\" componentid=\"Edit00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Div00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00","70","64","100","48",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("검색라벨");
            obj.set_cssclass("sta_WF_SchDetail");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","100","10","108","48",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_flexgrow("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_00_00","20","51","108","48",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02","0","0",null,"48","0",null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_Sch");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Button("Button01",null,"4","40","40","4",null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Panel("Panel00_04","1313","220","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_horizontalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","1215","590","500","48",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Sch");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","1325","590","48","48",null,null,"48",null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_Reset");
            obj.set_enable("true");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","Panel00:40",null,"48","0",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Heading Title2 ");
            obj.set_cssclass("sta_WF_H3_pc");
            obj.set_fittocontents("height");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","Static01:40",null,"1338","0",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_horizontalgap("24");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("24");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel05\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel06\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel05","0","400","300","1338",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("pnl_WF_Detailbox");
            obj.set_flexwrap("wrap");
            obj.set_spacing("39px");
            obj.set_verticalgap("24");
            obj.set_flexshrink("50");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static09\"/><PanelItem id=\"PanelItem01\" componentid=\"Grid00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","36","1033","100%","36",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("서브타이틀");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_fittocontents("height");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","25","501","100%","1198",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_binddataset("ds_tree");
            obj.set_treeuseline("true");
            obj.set_flexgrow("1");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeuseimage("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"433\"/></Columns><Rows><Row size=\"57\"/></Rows><Band id=\"body\"><Cell text=\"bind:data\" displaytype=\"treeitemcontrol\" treelevel=\"bind:lev\" edittype=\"tree\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel06","520","400","340","1338",null,null,"340",null,null,null,this);
            obj.set_taborder("18");
            obj.set_type("vertical");
            obj.set_verticalgap("24");
            obj.set_fittocontents("height");
            obj.set_horizontalgap("24");
            obj.set_flexgrow("100");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel05_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel05_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel05_00","520","400","100%","920",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("pnl_WF_Detailbox");
            obj.set_flexwrap("wrap");
            obj.set_spacing("39px");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("24");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static09_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00","36","1033","100%","36",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("상세리스트01");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_fittocontents("height");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_01","544","489","100%","780",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_horizontalgap("24");
            obj.set_verticalgap("24");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel04_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel04_01\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel04_02\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel04_03\"/><PanelItem id=\"PanelItem05\" componentid=\"Panel04_04\"/><PanelItem id=\"PanelItem06\" componentid=\"Panel04_05\"/><PanelItem id=\"PanelItem14\" componentid=\"Panel04_13\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_00","0","0","453","80",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","27","726","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("에디트");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","663","538","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_01","10","10","453","80",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Calendar01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00","27","726","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("캘린더");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","1056","535","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_flexgrow("1");
            obj.set_popupsize("384 437");
            obj.set_usetrailingday("true");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_02","477","10","453","80",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Radio00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_01","27","726","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("라디오버튼");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","650","636","172","48",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_flexgrow("1");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "라디오 01"},{"codecolumn" : "1","datacolumn" : "라디오 02"}]});
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_text("체크");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_03","10","89","453","80",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Div01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_02","27","726","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("에디트+버튼");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Div("Div01_00","0","32","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("Div01");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","0","0",null,"48","98",null,"64",null,null,null,this.Div01_00.form);
            obj.set_taborder("0");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button01",null,"0","90","48","0",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("1");
            obj.set_text("버튼");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Panel("Panel04_04","479","113","453","80",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_03\"/><PanelItem id=\"PanelItem01\" componentid=\"CheckBox00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_03","27","726","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("체크박스");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","616","760","150","48",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("사용");
            obj.set_flexgrow("1");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_05","10","216","453","80",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_04\"/><PanelItem id=\"PanelItem01\" componentid=\"Spin00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_04","27","726","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("스핀박스");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin00","1061","741","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_13","544","1210","922","156",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_13\"/><PanelItem id=\"PanelItem01\" componentid=\"TextArea00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_13","27","726","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("텍스트박스");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","593","1270","100%","124",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel05_00_00","520","Panel05_00:40","100%","394",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_cssclass("pnl_WF_Detailbox");
            obj.set_flexwrap("wrap");
            obj.set_spacing("39px");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("24");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static09_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel08\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_00","36","1033","100%","36",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("상세리스트02");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_fittocontents("height");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel08","39","101","100%","254",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static10_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Grid00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static10_00_00","128","1107","100%","38",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("총 <fc v=\'#0B50D0\'><b v=\'true\'>00</b></fc>건");
            obj.set_usedecorate("true");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00","545","1546","100%","212",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_binddataset("ds_grid");
            obj.set_flexgrow("1");
            obj.set_showcellselection("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"172\"/><Column size=\"172\"/><Column size=\"172\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"57\"/></Rows><Band id=\"head\"><Cell text=\"checkBox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"No\" cssclass=\"cell_WF_Center\"/><Cell col=\"2\" text=\"에디트\" cssclass=\"cell_WF_Center\"/><Cell col=\"3\" text=\"필수\" cssclass=\"cell_WF_Center\"/><Cell col=\"4\" text=\"숫자\" cssclass=\"cell_WF_Center\"/></Band><Band id=\"body\"><Cell text=\"bind:checkBox\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:No\" displaytype=\"number\" edittype=\"none\" cssclass=\"cell_WF_Center\"/><Cell col=\"2\" text=\"bind:Edi\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:Essential\" displaytype=\"text\"/><Cell col=\"4\" displaytype=\"number\" text=\"bind:Num\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02","0","Panel01:40",null,"48","0",null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_horizontalgap("8");
            obj.set_flexmainaxisalign("center");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button02\"/><PanelItem id=\"PanelItem01\" componentid=\"Button02_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Button02_02\"/><PanelItem id=\"PanelItem03\" componentid=\"Button02_03\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","64","1436","90","48",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("생성");
            obj.set_cssclass("btn_WF_CrudNew");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_01","407","1450","90","48",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_CrudModify");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_02","508","1443","90","48",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CrudSave");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_03","614","1452","90","48",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CrudDelete");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00_00_00.form
            obj = new Layout("default","",0,0,this.Div00_00_00.form,
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
                p.Edit00.set_minwidth("64");
                p.Edit00.set_maxwidth("");
                p.Edit00.move("0","0",null,"48","98",null);

                p.Button01.set_taborder("1");
                p.Button01.set_text("버튼");
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
            obj = new Layout("default","Desktop_screen",888,1862,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("Tree");

                p.Static00.set_taborder("0");
                p.Static00.set_text("Page Title");
                p.Static00.set_cssclass("sta_WF_H2_pc");
                p.Static00.set_fittocontents("height");
                p.Static00.set_accessibilityrole("heading2");
                p.Static00.move("0","0",null,"60","0",null);

                p.Panel00.set_taborder("1");
                p.Panel00.set_spacing("40px");
                p.Panel00.set_cssclass("pnl_WF_SchBar");
                p.Panel00.set_tablecellarea("");
                p.Panel00.set_horizontalgap("24");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_verticalgap("24");
                p.Panel00.move("0","Static00:48",null,"200","0",null);

                p.Panel00_01.set_taborder("2");
                p.Panel00_01.set_flexwrap("wrap");
                p.Panel00_01.set_verticalgap("16");
                p.Panel00_01.set_horizontalgap("24");
                p.Panel00_01.set_fittocontents("height");
                p.Panel00_01.set_flexgrow("1");
                p.Panel00_01.set_maxwidth("");
                p.Panel00_01.move("24","24","100%","48",null,null);

                p.Panel00_02.set_taborder("3");
                p.Panel00_02.set_flexgrow("1");
                p.Panel00_02.set_horizontalgap("10");
                p.Panel00_02.set_maxwidth("");
                p.Panel00_02.move("9","290","280","48",null,null);

                p.Static04.set_taborder("4");
                p.Static04.set_text("필수캘린더");
                p.Static04.set_cssclass("sta_WF_SchDetail");
                p.Static04.move("60","54","100","48",null,null);

                p.Calendar01_00.set_taborder("5");
                p.Calendar01_00.set_value("20251230");
                p.Calendar01_00.set_flexgrow("1");
                p.Calendar01_00.set_cssclass("essential");
                p.Calendar01_00.set_popupsize("384 437");
                p.Calendar01_00.set_usetrailingday("true");
                p.Calendar01_00.move("10","41","108","48",null,null);

                p.Panel00_03.set_taborder("6");
                p.Panel00_03.set_flexgrow("1");
                p.Panel00_03.set_horizontalgap("10");
                p.Panel00_03.set_maxwidth("");
                p.Panel00_03.move("436","290","280","48",null,null);

                p.Static04_00.set_taborder("7");
                p.Static04_00.set_text("검색라벨");
                p.Static04_00.set_cssclass("sta_WF_SchDetail");
                p.Static04_00.move("70","64","100","48",null,null);

                p.Edit00_00_00.set_taborder("8");
                p.Edit00_00_00.set_flexgrow("1");
                p.Edit00_00_00.set_maxwidth("");
                p.Edit00_00_00.move("100","10","108","48",null,null);

                p.Div00_00_00.set_taborder("9");
                p.Div00_00_00.set_text("Div00");
                p.Div00_00_00.set_formscrollbartype("none none");
                p.Div00_00_00.set_formscrolltype("none");
                p.Div00_00_00.set_flexgrow("1");
                p.Div00_00_00.move("20","51","108","48",null,null);

                p.Panel00_04.set_taborder("10");
                p.Panel00_04.set_horizontalgap("8");
                p.Panel00_04.set_flexgrow("1");
                p.Panel00_04.set_maxheight("");
                p.Panel00_04.set_maxwidth("");
                p.Panel00_04.move("1313","220","100%","48",null,null);

                p.Button00.set_taborder("11");
                p.Button00.set_text("조회하기");
                p.Button00.set_cssclass("btn_WF_Sch");
                p.Button00.set_flexgrow("1");
                p.Button00.set_maxwidth("");
                p.Button00.move("1215","590","500","48",null,null);

                p.Button00_00.set_taborder("12");
                p.Button00_00.set_cssclass("btn_WF_Reset");
                p.Button00_00.set_enable("true");
                p.Button00_00.set_flexshrink("0");
                p.Button00_00.set_minwidth("48");
                p.Button00_00.set_maxwidth("");
                p.Button00_00.move("1325","590","48","48",null,null);

                p.Static01.set_taborder("13");
                p.Static01.set_text("Heading Title2 ");
                p.Static01.set_cssclass("sta_WF_H3_pc");
                p.Static01.set_fittocontents("height");
                p.Static01.set_accessibilityrole("heading3");
                p.Static01.move("0","Panel00:40",null,"48","0",null);

                p.Panel01.set_taborder("14");
                p.Panel01.set_horizontalgap("24");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.set_fittocontents("height");
                p.Panel01.set_verticalgap("24");
                p.Panel01.move("0","Static01:40",null,"1338","0",null);

                p.Panel05.set_taborder("15");
                p.Panel05.set_cssclass("pnl_WF_Detailbox");
                p.Panel05.set_flexwrap("wrap");
                p.Panel05.set_spacing("39px");
                p.Panel05.set_verticalgap("24");
                p.Panel05.set_flexshrink("50");
                p.Panel05.set_flexgrow("1");
                p.Panel05.set_minwidth("");
                p.Panel05.move("0","400","300","1338",null,null);

                p.Static09.set_taborder("16");
                p.Static09.set_text("서브타이틀");
                p.Static09.set_cssclass("sta_WF_H4_pc");
                p.Static09.set_fittocontents("height");
                p.Static09.set_accessibilityrole("heading4");
                p.Static09.move("36","1033","100%","36",null,null);

                p.Grid00.set_taborder("17");
                p.Grid00.set_binddataset("ds_tree");
                p.Grid00.set_treeuseline("true");
                p.Grid00.set_flexgrow("1");
                p.Grid00.set_autofittype("col");
                p.Grid00.set_treeinitstatus("expand,all");
                p.Grid00.set_treeuseimage("true");
                p.Grid00.move("25","501","100%","1198",null,null);

                p.Panel06.set_taborder("18");
                p.Panel06.set_type("vertical");
                p.Panel06.set_verticalgap("24");
                p.Panel06.set_fittocontents("height");
                p.Panel06.set_horizontalgap("24");
                p.Panel06.set_flexgrow("100");
                p.Panel06.set_minwidth("340");
                p.Panel06.set_maxwidth("");
                p.Panel06.move("520","400","340","1338",null,null);

                p.Panel05_00.set_taborder("19");
                p.Panel05_00.set_cssclass("pnl_WF_Detailbox");
                p.Panel05_00.set_flexwrap("wrap");
                p.Panel05_00.set_spacing("39px");
                p.Panel05_00.set_flexgrow("1");
                p.Panel05_00.set_fittocontents("height");
                p.Panel05_00.set_verticalgap("24");
                p.Panel05_00.set_maxwidth("");
                p.Panel05_00.move("520","400","100%","920",null,null);

                p.Static09_00.set_taborder("20");
                p.Static09_00.set_text("상세리스트01");
                p.Static09_00.set_cssclass("sta_WF_H4_pc");
                p.Static09_00.set_fittocontents("height");
                p.Static09_00.set_accessibilityrole("heading4");
                p.Static09_00.move("36","1033","100%","36",null,null);

                p.Panel02_01.set_taborder("21");
                p.Panel02_01.set_flexwrap("wrap");
                p.Panel02_01.set_fittocontents("height");
                p.Panel02_01.set_horizontalgap("24");
                p.Panel02_01.set_verticalgap("24");
                p.Panel02_01.set_flexgrow("1");
                p.Panel02_01.move("544","489","100%","780",null,null);

                p.Panel04_00.set_taborder("22");
                p.Panel04_00.set_type("horizontal");
                p.Panel04_00.set_flexwrap("wrap");
                p.Panel04_00.set_verticalgap("8");
                p.Panel04_00.set_flexgrow("1");
                p.Panel04_00.set_maxwidth("");
                p.Panel04_00.move("0","0","453","80",null,null);

                p.Static07.set_taborder("23");
                p.Static07.set_text("에디트");
                p.Static07.set_cssclass("sta_WF_Label");
                p.Static07.set_flexgrow("1");
                p.Static07.move("27","726","100%","24",null,null);

                p.Edit00.set_taborder("24");
                p.Edit00.set_flexgrow("1");
                p.Edit00.move("663","538","100%","48",null,null);

                p.Panel04_01.set_taborder("25");
                p.Panel04_01.set_type("horizontal");
                p.Panel04_01.set_flexwrap("wrap");
                p.Panel04_01.set_verticalgap("8");
                p.Panel04_01.set_flexgrow("1");
                p.Panel04_01.set_maxwidth("");
                p.Panel04_01.move("10","10","453","80",null,null);

                p.Static07_00.set_taborder("26");
                p.Static07_00.set_text("캘린더");
                p.Static07_00.set_cssclass("sta_WF_Label");
                p.Static07_00.set_flexgrow("1");
                p.Static07_00.move("27","726","100%","24",null,null);

                p.Calendar01.set_taborder("27");
                p.Calendar01.set_flexgrow("1");
                p.Calendar01.set_popupsize("384 437");
                p.Calendar01.set_usetrailingday("true");
                p.Calendar01.move("1056","535","100%","48",null,null);

                p.Panel04_02.set_taborder("28");
                p.Panel04_02.set_type("horizontal");
                p.Panel04_02.set_flexwrap("wrap");
                p.Panel04_02.set_verticalgap("8");
                p.Panel04_02.set_flexgrow("1");
                p.Panel04_02.set_maxwidth("");
                p.Panel04_02.move("477","10","453","80",null,null);

                p.Static07_01.set_taborder("29");
                p.Static07_01.set_text("라디오버튼");
                p.Static07_01.set_cssclass("sta_WF_Label");
                p.Static07_01.set_flexgrow("1");
                p.Static07_01.move("27","726","100%","24",null,null);

                p.Radio00.set_taborder("30");
                p.Radio00.set_innerdataset(Radio00_innerdataset);
                p.Radio00.set_codecolumn("codecolumn");
                p.Radio00.set_datacolumn("datacolumn");
                p.Radio00.set_direction("vertical");
                p.Radio00.set_flexgrow("1");
                p.Radio00.set_columncount("-1");
                p.Radio00.set_rowcount("-1");
                p.Radio00.set_value("0");
                p.Radio00.set_index("0");
                p.Radio00.move("650","636","172","48",null,null);

                p.Panel04_03.set_taborder("31");
                p.Panel04_03.set_type("horizontal");
                p.Panel04_03.set_flexwrap("wrap");
                p.Panel04_03.set_verticalgap("8");
                p.Panel04_03.set_flexgrow("1");
                p.Panel04_03.set_maxwidth("");
                p.Panel04_03.move("10","89","453","80",null,null);

                p.Static07_02.set_taborder("32");
                p.Static07_02.set_text("에디트+버튼");
                p.Static07_02.set_cssclass("sta_WF_Label");
                p.Static07_02.set_flexgrow("1");
                p.Static07_02.move("27","726","100%","24",null,null);

                p.Div01_00.set_taborder("33");
                p.Div01_00.set_text("Div01");
                p.Div01_00.set_flexgrow("1");
                p.Div01_00.move("0","32","100%","48",null,null);

                p.Panel04_04.set_taborder("34");
                p.Panel04_04.set_type("horizontal");
                p.Panel04_04.set_flexwrap("wrap");
                p.Panel04_04.set_verticalgap("8");
                p.Panel04_04.set_flexgrow("1");
                p.Panel04_04.set_maxwidth("");
                p.Panel04_04.move("479","113","453","80",null,null);

                p.Static07_03.set_taborder("35");
                p.Static07_03.set_text("체크박스");
                p.Static07_03.set_cssclass("sta_WF_Label");
                p.Static07_03.set_flexgrow("1");
                p.Static07_03.move("27","726","100%","24",null,null);

                p.CheckBox00.set_taborder("36");
                p.CheckBox00.set_text("사용");
                p.CheckBox00.set_flexgrow("1");
                p.CheckBox00.set_value("true");
                p.CheckBox00.move("616","760","150","48",null,null);

                p.Panel04_05.set_taborder("37");
                p.Panel04_05.set_type("horizontal");
                p.Panel04_05.set_flexwrap("wrap");
                p.Panel04_05.set_verticalgap("8");
                p.Panel04_05.set_flexgrow("1");
                p.Panel04_05.set_maxwidth("");
                p.Panel04_05.move("10","216","453","80",null,null);

                p.Static07_04.set_taborder("38");
                p.Static07_04.set_text("스핀박스");
                p.Static07_04.set_cssclass("sta_WF_Label");
                p.Static07_04.set_flexgrow("1");
                p.Static07_04.move("27","726","100%","24",null,null);

                p.Spin00.set_taborder("39");
                p.Spin00.set_flexgrow("1");
                p.Spin00.move("1061","741","100%","48",null,null);

                p.Panel04_13.set_taborder("40");
                p.Panel04_13.set_type("horizontal");
                p.Panel04_13.set_flexwrap("wrap");
                p.Panel04_13.set_verticalgap("8");
                p.Panel04_13.set_flexgrow("1");
                p.Panel04_13.set_maxwidth("");
                p.Panel04_13.move("544","1210","922","156",null,null);

                p.Static07_13.set_taborder("41");
                p.Static07_13.set_text("텍스트박스");
                p.Static07_13.set_cssclass("sta_WF_Label");
                p.Static07_13.set_flexgrow("1");
                p.Static07_13.move("27","726","100%","24",null,null);

                p.TextArea00.set_taborder("42");
                p.TextArea00.set_flexgrow("1");
                p.TextArea00.move("593","1270","100%","124",null,null);

                p.Panel05_00_00.set_taborder("43");
                p.Panel05_00_00.set_cssclass("pnl_WF_Detailbox");
                p.Panel05_00_00.set_flexwrap("wrap");
                p.Panel05_00_00.set_spacing("39px");
                p.Panel05_00_00.set_flexgrow("1");
                p.Panel05_00_00.set_fittocontents("height");
                p.Panel05_00_00.set_verticalgap("24");
                p.Panel05_00_00.set_maxwidth("");
                p.Panel05_00_00.move("520","Panel05_00:40","100%","394",null,null);

                p.Static09_00_00.set_taborder("44");
                p.Static09_00_00.set_text("상세리스트02");
                p.Static09_00_00.set_cssclass("sta_WF_H4_pc");
                p.Static09_00_00.set_fittocontents("height");
                p.Static09_00_00.set_accessibilityrole("heading4");
                p.Static09_00_00.move("36","1033","100%","36",null,null);

                p.Panel08.set_taborder("45");
                p.Panel08.set_flexwrap("wrap");
                p.Panel08.set_verticalgap("4");
                p.Panel08.move("39","101","100%","254",null,null);

                p.Static10_00_00.set_taborder("46");
                p.Static10_00_00.set_text("총 <fc v=\'#0B50D0\'><b v=\'true\'>00</b></fc>건");
                p.Static10_00_00.set_usedecorate("true");
                p.Static10_00_00.set_flexgrow("1");
                p.Static10_00_00.move("128","1107","100%","38",null,null);

                p.Grid00_00_00.set_taborder("47");
                p.Grid00_00_00.set_binddataset("ds_grid");
                p.Grid00_00_00.set_flexgrow("1");
                p.Grid00_00_00.set_showcellselection("true");
                p.Grid00_00_00.move("545","1546","100%","212",null,null);

                p.Panel02.set_taborder("48");
                p.Panel02.set_horizontalgap("8");
                p.Panel02.set_flexmainaxisalign("center");
                p.Panel02.set_verticalgap("8");
                p.Panel02.set_flexwrap("wrap");
                p.Panel02.set_fittocontents("height");
                p.Panel02.move("0","Panel01:40",null,"48","0",null);

                p.Button02.set_taborder("49");
                p.Button02.set_text("생성");
                p.Button02.set_cssclass("btn_WF_CrudNew");
                p.Button02.set_flexshrink("0");
                p.Button02.set_maxwidth("");
                p.Button02.move("64","1436","90","48",null,null);

                p.Button02_01.set_taborder("50");
                p.Button02_01.set_text("수정");
                p.Button02_01.set_cssclass("btn_WF_CrudModify");
                p.Button02_01.set_flexshrink("0");
                p.Button02_01.set_maxwidth("");
                p.Button02_01.move("407","1450","90","48",null,null);

                p.Button02_02.set_taborder("51");
                p.Button02_02.set_text("저장");
                p.Button02_02.set_cssclass("btn_WF_CrudSave");
                p.Button02_02.set_flexshrink("0");
                p.Button02_02.set_maxwidth("");
                p.Button02_02.move("508","1443","90","48",null,null);

                p.Button02_03.set_taborder("52");
                p.Button02_03.set_text("삭제");
                p.Button02_03.set_cssclass("btn_WF_CrudDelete");
                p.Button02_03.set_flexshrink("0");
                p.Button02_03.set_maxwidth("");
                p.Button02_03.move("614","1452","90","48",null,null);
            	}
            );
            obj.set_type("default");
            obj.set_flexwrap("wrap");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Desktop_screen,mobile_small",448,3068,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.set_spacing("24px 16px");
                p.Panel00.move("0","Static00:24",null,"232","0",null);

                p.Panel00_01.move("24","24","100%","112",null,null);


                p.Static01.move("0","Panel00:20",null,"48","0",null);

                p.Panel01.move("0","404",null,"2596","0",null);

                p.Panel05.set_spacing("23px 15px");
                p.Panel05.move("0","400","300","1308",null,null);

                p.Panel05_00_00.set_spacing("23px 15px");
                p.Panel05_00_00.move("520","904","100%","364",null,null);

                p.Panel05_00.set_spacing("23px 15px");
                p.Panel05_00.move("520","400","100%","888",null,null);

                p.Panel06.set_verticalgap("16");
                p.Panel06.move("520","400","340","1268",null,null);

                p.Panel02.move("0","Panel01:20",null,"48","0",null);
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
        this.registerScript("Template06.xfdl", function() {
        this.Template11_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Template11_onload,this);
        };
        this.loadIncludeScript("Template06.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
