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
            this.set_titletext("List-Detail2");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,2099);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "chk","type" : "STRING","size" : "256"},{"id" : "No","type" : "STRING","size" : "256"},{"id" : "Edi","type" : "STRING","size" : "256"},{"id" : "Essential","type" : "STRING","size" : "256"},{"id" : "Num","type" : "STRING","size" : "256"},{"id" : "CenterAlign","type" : "STRING","size" : "256"},{"id" : "Btn","type" : "STRING","size" : "256"}]},"Rows" : [{"No" : "1","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "2","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "3","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "4","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "5","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "6","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "7","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "8","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "9","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "10","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "11","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","CenterAlign" : "투비소프트","Btn" : "버튼"}]});
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
            obj.set_text("필수캘린더");
            obj.set_cssclass("sta_WF_SchDetail");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar01_00","10","41","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_value("20251230");
            obj.set_flexgrow("1");
            obj.set_cssclass("essential");
            obj.set_popupsize("384 437");
            obj.set_usetrailingday("true");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_02","9","290","280","48",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static04\"/><PanelItem id=\"PanelItem02\" componentid=\"Calendar01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00","70","64","100","48",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("검색라벨");
            obj.set_cssclass("sta_WF_SchDetail");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","100","10","108","48",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_flexgrow("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_00","10","41","108","48",null,null,null,null,null,null,this);
            obj.set_taborder("6");
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

            obj = new Panel("Panel00_03","436","290","280","48",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static04_00\"/><PanelItem id=\"PanelItem04\" componentid=\"Edit00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Div00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","24","24","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("16");
            obj.set_horizontalgap("24");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_03\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","1215","590","500","48",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Sch");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","1325","590","48","48",null,null,"48",null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_Reset");
            obj.set_enable("true");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_04","1313","220","158","48",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_horizontalgap("8");
            obj.set_tablecellarea("0/0");
            obj.set_flexshrink("0");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","Static00:48",null,"200","0",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_spacing("40px");
            obj.set_cssclass("pnl_WF_SchBar");
            obj.set_tablecellarea("");
            obj.set_horizontalgap("24");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("24");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_04\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","Panel00:40",null,"48","0",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Heading Title2 ");
            obj.set_cssclass("sta_WF_H3_pc");
            obj.set_fittocontents("height");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","36","1033","100%","38",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("서브타이틀");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_fittocontents("height");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","128","1107","100%","38",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("총 <fc v=\'#0B50D0\'><b v=\'true\'>00</b></fc>건");
            obj.set_usedecorate("true");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","25","563","100%","625",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_binddataset("ds_grid");
            obj.set_flexgrow("1");
            obj.set_showcellselection("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"142\"/><Column size=\"142\"/><Column size=\"142\"/><Column size=\"142\"/><Column size=\"103\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"57\"/></Rows><Band id=\"head\"><Cell text=\"checkBox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"No\" cssclass=\"cell_WF_Center\"/><Cell col=\"2\" text=\"에디트\" cssclass=\"cell_WF_Center\"/><Cell col=\"3\" text=\"필수\" cssclass=\"cell_WF_Center,essential\"/><Cell col=\"4\" text=\"숫자\" cssclass=\"cell_WF_Center\"/><Cell col=\"5\" displaytype=\"normal\" text=\"중앙정렬\" cssclass=\"cell_WF_Center\"/><Cell col=\"6\" text=\"버튼\"/></Band><Band id=\"body\"><Cell text=\"bind:checkBox\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:No\" displaytype=\"number\" edittype=\"none\" cssclass=\"cell_WF_Center\"/><Cell col=\"2\" text=\"bind:Edi\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:Essential\" displaytype=\"text\"/><Cell col=\"4\" displaytype=\"number\" text=\"bind:Num\"/><Cell col=\"5\" text=\"bind:CenterAlign\" cssclass=\"cell_WF_Center\"/><Cell col=\"6\" edittype=\"button\" displaytype=\"buttoncontrol\" text=\"버튼\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel020","39","101","100%","667",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_verticalgap("4");
            obj.set_flexwrap("wrap");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static10\"/><PanelItem id=\"PanelItem01\" componentid=\"Grid00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","Static01:40",null,"809","0",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("pnl_WF_Detailbox");
            obj.set_flexwrap("wrap");
            obj.set_spacing("39px");
            obj.set_flexgrow("1");
            obj.set_verticalgap("24");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static09\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel020\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","0","590","100%","38",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("서브타이틀 상세");
            obj.set_positionstep("0");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","27","726","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("콤보박스");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","27","757","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04","26","746","253","80",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07\"/><PanelItem id=\"PanelItem01\" componentid=\"Combo00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00","57","756","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("필수에디트");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01_00_00_00","10","42","99.86973512809378%","48",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_flexgrow("1");
            obj.set_cssclass("essential");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_00","506","746","253","80",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_type("horizontal");
            obj.set_fittocontents("height");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit01_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_04","97","796","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("라디오버튼");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio01","1007","875","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var Radio01_innerdataset = new nexacro.NormalDataset("Radio01_innerdataset", obj);
            Radio01_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "라디오 01"},{"codecolumn" : "1","datacolumn" : "라디오 02"}]});
            obj.set_innerdataset(Radio01_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_04","986","849","253","80",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_type("horizontal");
            obj.set_fittocontents("height");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_04\"/><PanelItem id=\"PanelItem03\" componentid=\"Radio01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_04_00","97","796","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("에디트+버튼");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Div("Div01_00","1695","606","99.80514234114348%","48",null,null,null,null,null,null,this);
            obj.set_text("Div01");
            obj.set_taborder("30");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","0","0",null,"48","72",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("0");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button01",null,"0","64","48","0",null,"64",null,null,null,this.Div01_00.form);
            obj.set_taborder("1");
            obj.set_text("버튼");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Panel("Panel03_04_00","840","1791","253","80",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_type("horizontal");
            obj.set_fittocontents("height");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_04_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Div01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_02","37","736","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("체크박스");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","768","782","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("체크박스");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_07","892","885","253","80",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_type("horizontal");
            obj.set_fittocontents("height");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_02\"/><PanelItem id=\"PanelItem01\" componentid=\"CheckBox00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","57","756","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("스핀박스");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin01","1166","755","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_02","1050","1809","253","80",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_type("horizontal");
            obj.set_fittocontents("height");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Spin01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","57","756","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("디세이블검색");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","877","873","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("39");
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

            obj = new Panel("Panel04_01","372","10","253","80",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_type("horizontal");
            obj.set_fittocontents("height");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Div01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_06","77","776","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("검색");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","512","830","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02","0","0",null,"48","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_Sch");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01",null,"4","40","40","4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            this.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel03_03","506","952","253","80",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_type("horizontal");
            obj.set_fittocontents("height");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_06\"/><PanelItem id=\"PanelItem01\" componentid=\"Div00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_01","87","786","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("에디트");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01_00_00","10","41","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_05","43","891","253","80",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_type("horizontal");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit01_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_02_00","37","736","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("마스크에디트");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","921","1091","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_value("1000000");
            obj.set_format("0,0");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_07_00","732","216","253","80",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_type("horizontal");
            obj.set_fittocontents("height");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"MaskEdit00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_02_00_00","37","736","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("마스크에디트");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00","921","1091","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_value("1000000");
            obj.set_format("0,0");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_07_00_00","10","525","253","80",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_type("horizontal");
            obj.set_fittocontents("height");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_02_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"MaskEdit00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_03","27","726","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("콤보박스");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00","27","757","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_03","10","10","253","80",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_03\"/><PanelItem id=\"PanelItem01\" componentid=\"Combo00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_01","57","756","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("필수캘린더");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00","1211","574","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_cssclass("essential");
            obj.set_popupsize("384 437");
            obj.set_usetrailingday("true");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_00_00","358","10","253","80",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_type("horizontal");
            obj.set_fittocontents("height");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Calendar00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_03_00","27","726","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("에디트");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","875","1294","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_03_00","10","628","253","80",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_03_00_00","27","726","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("마스크에디트");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01","1279","1284","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_format("0,0");
            obj.set_value("1000000");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_03_00_00","10","731","253","80",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_03_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"MaskEdit01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_03_00_01","27","726","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("에디트");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01_00","875","1294","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_03_00_01","26","1569","253","80",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_03_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_03_00_00_00","37","736","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("마스크에디트");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01_00","1279","1284","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_format("0,0");
            obj.set_value("1000000");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_03_00_00_00","374","1569","253","80",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_03_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"MaskEdit01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_01","753","520","100%","600",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_horizontalgap("24");
            obj.set_verticalgap("24");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel04\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel04_00\"/><PanelItem id=\"PanelItem07\" componentid=\"Panel03_04\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel03_04_00\"/><PanelItem id=\"PanelItem10\" componentid=\"Panel03_07\"/><PanelItem id=\"PanelItem06\" componentid=\"Panel04_02\"/><PanelItem id=\"PanelItem05\" componentid=\"Panel04_01\"/><PanelItem id=\"PanelItem09\" componentid=\"Panel03_03\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel03_05\"/><PanelItem id=\"PanelItem11\" componentid=\"Panel03_07_00\"/><PanelItem id=\"PanelItem08\" componentid=\"Panel03_07_00_00\"/><PanelItem id=\"PanelItem12\" componentid=\"Panel04_03\"/><PanelItem id=\"PanelItem13\" componentid=\"Panel04_00_00\"/><PanelItem id=\"PanelItem14\" componentid=\"Panel04_03_00\"/><PanelItem id=\"PanelItem15\" componentid=\"Panel04_03_00_00\"/><PanelItem id=\"PanelItem16\" componentid=\"Panel04_03_00_01\"/><PanelItem id=\"PanelItem17\" componentid=\"Panel04_03_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02","0","Panel01:24",null,"742","0",null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("24");
            obj.set_cssclass("pnl_WF_Detailbox");
            obj.set_spacing("39px");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem10\" componentid=\"Static06\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel03_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","64","1436","90","48",null,null,"90",null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("생성");
            obj.set_cssclass("btn_WF_CrudNew");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_01_00","407","1450","90","48",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_CrudModify");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_00_02","508","1443","90","48",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CrudSave");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_00_03","614","1452","90","48",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CrudDelete");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03","0","Panel02:40",null,"48","0",null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_horizontalgap("8");
            obj.set_flexmainaxisalign("center");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("8");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button02\"/><PanelItem id=\"PanelItem01\" componentid=\"Button02_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Button02_00_02\"/><PanelItem id=\"PanelItem03\" componentid=\"Button02_00_03\"/></Contents>");
            this.addChild(obj.name, obj);
            // Layout Functions
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
            //-- Default Layout : this.Div01_00.form
            obj = new Layout("default","",0,0,this.Div01_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Edit00.set_taborder("0");
                p.Edit00.move("0","0",null,"48","72",null);

                p.Button01.set_taborder("1");
                p.Button01.set_text("버튼");
                p.Button01.set_minwidth("64");
                p.Button01.set_maxwidth("");
                p.Button01.move(null,"0","64","48","0",null);
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
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,
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
            obj = new Layout("default","Desktop_screen",888,2099,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("List-Detail2");

                p.Static00.set_taborder("0");
                p.Static00.set_text("Page Title");
                p.Static00.set_cssclass("sta_WF_H2_pc");
                p.Static00.set_fittocontents("height");
                p.Static00.set_accessibilityrole("heading2");
                p.Static00.move("0","0",null,"60","0",null);

                p.Static04.set_taborder("1");
                p.Static04.set_text("필수캘린더");
                p.Static04.set_cssclass("sta_WF_SchDetail");
                p.Static04.set_flexshrink("0");
                p.Static04.move("60","54","100","48",null,null);

                p.Calendar01_00.set_taborder("2");
                p.Calendar01_00.set_value("20251230");
                p.Calendar01_00.set_flexgrow("1");
                p.Calendar01_00.set_cssclass("essential");
                p.Calendar01_00.set_popupsize("384 437");
                p.Calendar01_00.set_usetrailingday("true");
                p.Calendar01_00.move("10","41","100%","48",null,null);

                p.Panel00_02.set_taborder("3");
                p.Panel00_02.set_flexgrow("1");
                p.Panel00_02.set_horizontalgap("10");
                p.Panel00_02.set_maxwidth("");
                p.Panel00_02.move("9","290","280","48",null,null);

                p.Static04_00.set_taborder("4");
                p.Static04_00.set_text("검색라벨");
                p.Static04_00.set_cssclass("sta_WF_SchDetail");
                p.Static04_00.set_flexshrink("0");
                p.Static04_00.move("70","64","100","48",null,null);

                p.Edit00_00.set_taborder("5");
                p.Edit00_00.set_flexgrow("1");
                p.Edit00_00.set_maxwidth("");
                p.Edit00_00.move("100","10","108","48",null,null);

                p.Div00_00.set_taborder("6");
                p.Div00_00.set_text("Div00");
                p.Div00_00.set_formscrollbartype("none none");
                p.Div00_00.set_formscrolltype("none");
                p.Div00_00.set_flexgrow("1");
                p.Div00_00.move("10","41","108","48",null,null);

                p.Panel00_03.set_taborder("7");
                p.Panel00_03.set_flexgrow("1");
                p.Panel00_03.set_horizontalgap("10");
                p.Panel00_03.set_maxwidth("");
                p.Panel00_03.move("436","290","280","48",null,null);

                p.Panel00_01.set_taborder("8");
                p.Panel00_01.set_flexwrap("wrap");
                p.Panel00_01.set_verticalgap("16");
                p.Panel00_01.set_horizontalgap("24");
                p.Panel00_01.set_fittocontents("height");
                p.Panel00_01.set_flexgrow("1");
                p.Panel00_01.set_maxwidth("");
                p.Panel00_01.move("24","24","100%","48",null,null);

                p.Button00.set_taborder("9");
                p.Button00.set_text("조회하기");
                p.Button00.set_cssclass("btn_WF_Sch");
                p.Button00.set_flexgrow("1");
                p.Button00.set_maxwidth("");
                p.Button00.move("1215","590","500","48",null,null);

                p.Button00_00.set_taborder("10");
                p.Button00_00.set_cssclass("btn_WF_Reset");
                p.Button00_00.set_enable("true");
                p.Button00_00.set_flexshrink("0");
                p.Button00_00.set_minwidth("48");
                p.Button00_00.set_maxwidth("");
                p.Button00_00.move("1325","590","48","48",null,null);

                p.Panel00_04.set_taborder("11");
                p.Panel00_04.set_horizontalgap("8");
                p.Panel00_04.set_tablecellarea("0/0");
                p.Panel00_04.set_flexshrink("0");
                p.Panel00_04.set_flexgrow("1");
                p.Panel00_04.set_maxheight("");
                p.Panel00_04.set_maxwidth("");
                p.Panel00_04.move("1313","220","158","48",null,null);

                p.Panel00.set_taborder("12");
                p.Panel00.set_spacing("40px");
                p.Panel00.set_cssclass("pnl_WF_SchBar");
                p.Panel00.set_tablecellarea("");
                p.Panel00.set_horizontalgap("24");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_verticalgap("24");
                p.Panel00.move("0","Static00:48",null,"200","0",null);

                p.Static01.set_taborder("13");
                p.Static01.set_text("Heading Title2 ");
                p.Static01.set_cssclass("sta_WF_H3_pc");
                p.Static01.set_fittocontents("height");
                p.Static01.set_accessibilityrole("heading3");
                p.Static01.move("0","Panel00:40",null,"48","0",null);

                p.Static09.set_taborder("14");
                p.Static09.set_text("서브타이틀");
                p.Static09.set_cssclass("sta_WF_H4_pc");
                p.Static09.set_fittocontents("height");
                p.Static09.set_accessibilityrole("heading4");
                p.Static09.move("36","1033","100%","38",null,null);

                p.Static10.set_taborder("15");
                p.Static10.set_text("총 <fc v=\'#0B50D0\'><b v=\'true\'>00</b></fc>건");
                p.Static10.set_usedecorate("true");
                p.Static10.set_flexgrow("1");
                p.Static10.move("128","1107","100%","38",null,null);

                p.Grid00.set_taborder("16");
                p.Grid00.set_binddataset("ds_grid");
                p.Grid00.set_flexgrow("1");
                p.Grid00.set_showcellselection("true");
                p.Grid00.move("25","563","100%","625",null,null);

                p.Panel020.set_taborder("17");
                p.Panel020.set_verticalgap("4");
                p.Panel020.set_flexwrap("wrap");
                p.Panel020.set_flexgrow("1");
                p.Panel020.move("39","101","100%","667",null,null);

                p.Panel01.set_taborder("18");
                p.Panel01.set_cssclass("pnl_WF_Detailbox");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.set_spacing("39px");
                p.Panel01.set_flexgrow("1");
                p.Panel01.set_verticalgap("24");
                p.Panel01.move("0","Static01:40",null,"809","0",null);

                p.Static06.set_taborder("19");
                p.Static06.set_text("서브타이틀 상세");
                p.Static06.set_positionstep("0");
                p.Static06.set_cssclass("sta_WF_H4_pc");
                p.Static06.set_flexgrow("1");
                p.Static06.set_fittocontents("height");
                p.Static06.set_accessibilityrole("heading4");
                p.Static06.set_maxwidth("");
                p.Static06.move("0","590","100%","38",null,null);

                p.Static07.set_taborder("20");
                p.Static07.set_text("콤보박스");
                p.Static07.set_cssclass("sta_WF_Label");
                p.Static07.move("27","726","100%","24",null,null);

                p.Combo00_00.set_taborder("21");
                p.Combo00_00.set_text("선택");
                p.Combo00_00.set_value("");
                p.Combo00_00.set_index("-1");
                p.Combo00_00.move("27","757","100%","48",null,null);

                p.Panel04.set_taborder("22");
                p.Panel04.set_type("horizontal");
                p.Panel04.set_flexwrap("wrap");
                p.Panel04.set_verticalgap("8");
                p.Panel04.set_flexgrow("1");
                p.Panel04.set_maxwidth("");
                p.Panel04.move("26","746","253","80",null,null);

                p.Static07_00.set_taborder("23");
                p.Static07_00.set_text("필수에디트");
                p.Static07_00.set_cssclass("sta_WF_Label");
                p.Static07_00.move("57","756","100%","24",null,null);

                p.Edit01_00_00_00.set_taborder("24");
                p.Edit01_00_00_00.set_flexgrow("1");
                p.Edit01_00_00_00.set_cssclass("essential");
                p.Edit01_00_00_00.move("10","42","99.86973512809378%","48",null,null);

                p.Panel04_00.set_taborder("25");
                p.Panel04_00.set_type("horizontal");
                p.Panel04_00.set_fittocontents("height");
                p.Panel04_00.set_verticalgap("8");
                p.Panel04_00.set_flexgrow("1");
                p.Panel04_00.set_flexwrap("wrap");
                p.Panel04_00.set_maxwidth("");
                p.Panel04_00.move("506","746","253","80",null,null);

                p.Static07_04.set_taborder("26");
                p.Static07_04.set_text("라디오버튼");
                p.Static07_04.set_cssclass("sta_WF_Label");
                p.Static07_04.move("97","796","100%","24",null,null);

                p.Radio01.set_taborder("27");
                p.Radio01.set_innerdataset(Radio01_innerdataset);
                p.Radio01.set_codecolumn("codecolumn");
                p.Radio01.set_datacolumn("datacolumn");
                p.Radio01.set_direction("vertical");
                p.Radio01.move("1007","875","100%","48",null,null);

                p.Panel03_04.set_taborder("28");
                p.Panel03_04.set_type("horizontal");
                p.Panel03_04.set_fittocontents("height");
                p.Panel03_04.set_verticalgap("8");
                p.Panel03_04.set_flexgrow("1");
                p.Panel03_04.set_flexwrap("wrap");
                p.Panel03_04.set_maxwidth("");
                p.Panel03_04.move("986","849","253","80",null,null);

                p.Static07_04_00.set_taborder("29");
                p.Static07_04_00.set_text("에디트+버튼");
                p.Static07_04_00.set_cssclass("sta_WF_Label");
                p.Static07_04_00.move("97","796","100%","24",null,null);

                p.Div01_00.set_text("Div01");
                p.Div01_00.set_taborder("30");
                p.Div01_00.move("1695","606","99.80514234114348%","48",null,null);

                p.Panel03_04_00.set_taborder("31");
                p.Panel03_04_00.set_type("horizontal");
                p.Panel03_04_00.set_fittocontents("height");
                p.Panel03_04_00.set_verticalgap("8");
                p.Panel03_04_00.set_flexgrow("1");
                p.Panel03_04_00.set_flexwrap("wrap");
                p.Panel03_04_00.set_maxwidth("");
                p.Panel03_04_00.move("840","1791","253","80",null,null);

                p.Static07_02.set_taborder("32");
                p.Static07_02.set_text("체크박스");
                p.Static07_02.set_cssclass("sta_WF_Label");
                p.Static07_02.move("37","736","100%","24",null,null);

                p.CheckBox00.set_taborder("33");
                p.CheckBox00.set_text("체크박스");
                p.CheckBox00.set_value("true");
                p.CheckBox00.move("768","782","100%","48",null,null);

                p.Panel03_07.set_taborder("34");
                p.Panel03_07.set_type("horizontal");
                p.Panel03_07.set_fittocontents("height");
                p.Panel03_07.set_verticalgap("8");
                p.Panel03_07.set_flexgrow("1");
                p.Panel03_07.set_flexwrap("wrap");
                p.Panel03_07.set_maxwidth("");
                p.Panel03_07.move("892","885","253","80",null,null);

                p.Static07_00_00_00.set_taborder("35");
                p.Static07_00_00_00.set_text("스핀박스");
                p.Static07_00_00_00.set_cssclass("sta_WF_Label");
                p.Static07_00_00_00.move("57","756","100%","24",null,null);

                p.Spin01.set_taborder("36");
                p.Spin01.move("1166","755","100%","48",null,null);

                p.Panel04_02.set_taborder("37");
                p.Panel04_02.set_type("horizontal");
                p.Panel04_02.set_fittocontents("height");
                p.Panel04_02.set_verticalgap("8");
                p.Panel04_02.set_flexgrow("1");
                p.Panel04_02.set_flexwrap("wrap");
                p.Panel04_02.set_maxwidth("");
                p.Panel04_02.move("1050","1809","253","80",null,null);

                p.Static07_00_00.set_taborder("38");
                p.Static07_00_00.set_text("디세이블검색");
                p.Static07_00_00.set_cssclass("sta_WF_Label");
                p.Static07_00_00.move("57","756","100%","24",null,null);

                p.Div01.set_taborder("39");
                p.Div01.set_text("Div01");
                p.Div01.move("877","873","100%","48",null,null);

                p.Panel04_01.set_taborder("40");
                p.Panel04_01.set_type("horizontal");
                p.Panel04_01.set_fittocontents("height");
                p.Panel04_01.set_verticalgap("8");
                p.Panel04_01.set_flexgrow("1");
                p.Panel04_01.set_flexwrap("wrap");
                p.Panel04_01.set_maxwidth("");
                p.Panel04_01.move("372","10","253","80",null,null);

                p.Static07_06.set_taborder("41");
                p.Static07_06.set_text("검색");
                p.Static07_06.set_cssclass("sta_WF_Label");
                p.Static07_06.move("77","776","100%","24",null,null);

                p.Div00.set_taborder("42");
                p.Div00.set_text("Div00");
                p.Div00.set_formscrollbartype("none none");
                p.Div00.set_formscrolltype("none");
                p.Div00.move("512","830","100%","48",null,null);

                p.Panel03_03.set_taborder("43");
                p.Panel03_03.set_type("horizontal");
                p.Panel03_03.set_fittocontents("height");
                p.Panel03_03.set_verticalgap("8");
                p.Panel03_03.set_flexgrow("1");
                p.Panel03_03.set_flexwrap("wrap");
                p.Panel03_03.set_maxwidth("");
                p.Panel03_03.move("506","952","253","80",null,null);

                p.Static07_01.set_taborder("44");
                p.Static07_01.set_text("에디트");
                p.Static07_01.set_cssclass("sta_WF_Label");
                p.Static07_01.move("87","786","100%","24",null,null);

                p.Edit01_00_00.set_taborder("45");
                p.Edit01_00_00.set_flexgrow("1");
                p.Edit01_00_00.move("10","41","100%","48",null,null);

                p.Panel03_05.set_taborder("46");
                p.Panel03_05.set_type("horizontal");
                p.Panel03_05.set_verticalgap("8");
                p.Panel03_05.set_flexgrow("1");
                p.Panel03_05.set_flexwrap("wrap");
                p.Panel03_05.set_maxwidth("");
                p.Panel03_05.move("43","891","253","80",null,null);

                p.Static07_02_00.set_taborder("47");
                p.Static07_02_00.set_text("마스크에디트");
                p.Static07_02_00.set_cssclass("sta_WF_Label");
                p.Static07_02_00.move("37","736","100%","24",null,null);

                p.MaskEdit00.set_taborder("48");
                p.MaskEdit00.set_value("1000000");
                p.MaskEdit00.set_format("0,0");
                p.MaskEdit00.move("921","1091","100%","48",null,null);

                p.Panel03_07_00.set_taborder("49");
                p.Panel03_07_00.set_type("horizontal");
                p.Panel03_07_00.set_fittocontents("height");
                p.Panel03_07_00.set_verticalgap("8");
                p.Panel03_07_00.set_flexgrow("1");
                p.Panel03_07_00.set_flexwrap("wrap");
                p.Panel03_07_00.set_maxwidth("");
                p.Panel03_07_00.move("732","216","253","80",null,null);

                p.Static07_02_00_00.set_taborder("50");
                p.Static07_02_00_00.set_text("마스크에디트");
                p.Static07_02_00_00.set_cssclass("sta_WF_Label");
                p.Static07_02_00_00.move("37","736","100%","24",null,null);

                p.MaskEdit00_00.set_taborder("51");
                p.MaskEdit00_00.set_value("1000000");
                p.MaskEdit00_00.set_format("0,0");
                p.MaskEdit00_00.move("921","1091","100%","48",null,null);

                p.Panel03_07_00_00.set_taborder("52");
                p.Panel03_07_00_00.set_type("horizontal");
                p.Panel03_07_00_00.set_fittocontents("height");
                p.Panel03_07_00_00.set_verticalgap("8");
                p.Panel03_07_00_00.set_flexgrow("1");
                p.Panel03_07_00_00.set_flexwrap("wrap");
                p.Panel03_07_00_00.set_maxwidth("");
                p.Panel03_07_00_00.move("10","525","253","80",null,null);

                p.Static07_03.set_taborder("53");
                p.Static07_03.set_text("콤보박스");
                p.Static07_03.set_cssclass("sta_WF_Label");
                p.Static07_03.move("27","726","100%","24",null,null);

                p.Combo00_00_00.set_taborder("54");
                p.Combo00_00_00.set_text("선택");
                p.Combo00_00_00.set_value("");
                p.Combo00_00_00.set_index("-1");
                p.Combo00_00_00.move("27","757","100%","48",null,null);

                p.Panel04_03.set_taborder("55");
                p.Panel04_03.set_type("horizontal");
                p.Panel04_03.set_flexwrap("wrap");
                p.Panel04_03.set_verticalgap("8");
                p.Panel04_03.set_flexgrow("1");
                p.Panel04_03.set_maxwidth("");
                p.Panel04_03.move("10","10","253","80",null,null);

                p.Static07_00_01.set_taborder("56");
                p.Static07_00_01.set_text("필수캘린더");
                p.Static07_00_01.set_cssclass("sta_WF_Label");
                p.Static07_00_01.move("57","756","100%","24",null,null);

                p.Calendar00_00.set_taborder("57");
                p.Calendar00_00.set_cssclass("essential");
                p.Calendar00_00.set_popupsize("384 437");
                p.Calendar00_00.set_usetrailingday("true");
                p.Calendar00_00.move("1211","574","100%","48",null,null);

                p.Panel04_00_00.set_taborder("58");
                p.Panel04_00_00.set_type("horizontal");
                p.Panel04_00_00.set_fittocontents("height");
                p.Panel04_00_00.set_verticalgap("8");
                p.Panel04_00_00.set_flexgrow("1");
                p.Panel04_00_00.set_flexwrap("wrap");
                p.Panel04_00_00.set_maxwidth("");
                p.Panel04_00_00.move("358","10","253","80",null,null);

                p.Static07_03_00.set_taborder("59");
                p.Static07_03_00.set_text("에디트");
                p.Static07_03_00.set_cssclass("sta_WF_Label");
                p.Static07_03_00.move("27","726","100%","24",null,null);

                p.Edit01.set_taborder("60");
                p.Edit01.move("875","1294","100%","48",null,null);

                p.Panel04_03_00.set_taborder("61");
                p.Panel04_03_00.set_type("horizontal");
                p.Panel04_03_00.set_flexwrap("wrap");
                p.Panel04_03_00.set_verticalgap("8");
                p.Panel04_03_00.set_flexgrow("1");
                p.Panel04_03_00.set_maxwidth("");
                p.Panel04_03_00.move("10","628","253","80",null,null);

                p.Static07_03_00_00.set_taborder("62");
                p.Static07_03_00_00.set_text("마스크에디트");
                p.Static07_03_00_00.set_cssclass("sta_WF_Label");
                p.Static07_03_00_00.move("27","726","100%","24",null,null);

                p.MaskEdit01.set_taborder("63");
                p.MaskEdit01.set_format("0,0");
                p.MaskEdit01.set_value("1000000");
                p.MaskEdit01.move("1279","1284","100%","48",null,null);

                p.Panel04_03_00_00.set_taborder("64");
                p.Panel04_03_00_00.set_type("horizontal");
                p.Panel04_03_00_00.set_flexwrap("wrap");
                p.Panel04_03_00_00.set_verticalgap("8");
                p.Panel04_03_00_00.set_flexgrow("1");
                p.Panel04_03_00_00.set_maxwidth("");
                p.Panel04_03_00_00.move("10","731","253","80",null,null);

                p.Static07_03_00_01.set_taborder("65");
                p.Static07_03_00_01.set_text("에디트");
                p.Static07_03_00_01.set_cssclass("sta_WF_Label");
                p.Static07_03_00_01.move("27","726","100%","24",null,null);

                p.Edit01_00.set_taborder("66");
                p.Edit01_00.move("875","1294","100%","48",null,null);

                p.Panel04_03_00_01.set_taborder("67");
                p.Panel04_03_00_01.set_type("horizontal");
                p.Panel04_03_00_01.set_flexwrap("wrap");
                p.Panel04_03_00_01.set_verticalgap("8");
                p.Panel04_03_00_01.set_flexgrow("1");
                p.Panel04_03_00_01.set_maxwidth("");
                p.Panel04_03_00_01.move("26","1569","253","80",null,null);

                p.Static07_03_00_00_00.set_taborder("68");
                p.Static07_03_00_00_00.set_text("마스크에디트");
                p.Static07_03_00_00_00.set_cssclass("sta_WF_Label");
                p.Static07_03_00_00_00.move("37","736","100%","24",null,null);

                p.MaskEdit01_00.set_taborder("69");
                p.MaskEdit01_00.set_format("0,0");
                p.MaskEdit01_00.set_value("1000000");
                p.MaskEdit01_00.move("1279","1284","100%","48",null,null);

                p.Panel04_03_00_00_00.set_taborder("70");
                p.Panel04_03_00_00_00.set_type("horizontal");
                p.Panel04_03_00_00_00.set_flexwrap("wrap");
                p.Panel04_03_00_00_00.set_verticalgap("8");
                p.Panel04_03_00_00_00.set_flexgrow("1");
                p.Panel04_03_00_00_00.set_maxwidth("");
                p.Panel04_03_00_00_00.move("374","1569","253","80",null,null);

                p.Panel03_01.set_taborder("71");
                p.Panel03_01.set_horizontalgap("24");
                p.Panel03_01.set_verticalgap("24");
                p.Panel03_01.set_flexwrap("wrap");
                p.Panel03_01.set_fittocontents("height");
                p.Panel03_01.set_flexgrow("1");
                p.Panel03_01.move("753","520","100%","600",null,null);

                p.Panel02.set_taborder("72");
                p.Panel02.set_flexwrap("wrap");
                p.Panel02.set_verticalgap("24");
                p.Panel02.set_cssclass("pnl_WF_Detailbox");
                p.Panel02.set_spacing("39px");
                p.Panel02.set_fittocontents("height");
                p.Panel02.set_flexgrow("1");
                p.Panel02.move("0","Panel01:24",null,"742","0",null);

                p.Button02.set_taborder("73");
                p.Button02.set_text("생성");
                p.Button02.set_cssclass("btn_WF_CrudNew");
                p.Button02.set_minwidth("90");
                p.Button02.set_maxwidth("");
                p.Button02.move("64","1436","90","48",null,null);

                p.Button02_01_00.set_taborder("74");
                p.Button02_01_00.set_text("수정");
                p.Button02_01_00.set_cssclass("btn_WF_CrudModify");
                p.Button02_01_00.set_flexshrink("0");
                p.Button02_01_00.set_maxwidth("");
                p.Button02_01_00.move("407","1450","90","48",null,null);

                p.Button02_00_02.set_taborder("75");
                p.Button02_00_02.set_text("저장");
                p.Button02_00_02.set_cssclass("btn_WF_CrudSave");
                p.Button02_00_02.set_flexshrink("0");
                p.Button02_00_02.set_maxwidth("");
                p.Button02_00_02.move("508","1443","90","48",null,null);

                p.Button02_00_03.set_taborder("76");
                p.Button02_00_03.set_text("삭제");
                p.Button02_00_03.set_cssclass("btn_WF_CrudDelete");
                p.Button02_00_03.set_flexshrink("0");
                p.Button02_00_03.set_maxwidth("");
                p.Button02_00_03.move("614","1452","90","48",null,null);

                p.Panel03.set_taborder("77");
                p.Panel03.set_horizontalgap("8");
                p.Panel03.set_flexmainaxisalign("center");
                p.Panel03.set_flexwrap("wrap");
                p.Panel03.set_verticalgap("8");
                p.Panel03.set_fittocontents("height");
                p.Panel03.move("0","Panel02:40",null,"48","0",null);
            	}
            );
            obj.set_type("default");
            obj.set_flexwrap("wrap");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Desktop_screen,mobile_small",448,3119,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel01.set_spacing("23px 15px");
                p.Panel01.move("0","404",null,"777","0",null);

                p.Panel02.set_spacing("23px 15px");
                p.Panel02.move("0","1197",null,"1854","0",null);


                p.Static01.move("0","336",null,"48","0",null);



                p.Panel00.set_spacing("24px 16px");
                p.Panel00.move("0","Static00:24",null,"232","0",null);

                p.Panel03.move("0","Panel02:20",null,"48","0",null);

                p.Panel00_01.move("24","24","100%","112",null,null);

                p.Panel03_01.move("753","520","100%","1774",null,null);
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
        this.registerScript("Template03.xfdl", function() {
        this.Template01_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Template01_onload,this);
        };
        this.loadIncludeScript("Template03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
