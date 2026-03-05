(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_initvalueid(" ");
            this.set_name("guide02");
            this.set_titletext("cbo, mcbo, lst, spn, cal, dtf, dtrp, mnu");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,5500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staH2","0","0","200","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("컴포넌트 02");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("staDivider","215","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staEtit","231","0","657","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("cbo, mcbo, lst, spn, cal, dtf, dtrp, mnu");
            obj.set_cssclass("sta_WF_ParaH5");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel16","0","0",null,"60","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_flexcrossaxisalign("center");
            obj.set_horizontalgap("15");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("16");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staH2\"/><PanelItem id=\"PanelItem01\" componentid=\"staDivider\"/><PanelItem id=\"PanelItem02\" componentid=\"staEtit\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","0","Panel16:80",null,"48","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Combo");
            obj.set_cssclass("sta_WF_ParaH2_pc");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit07_00","0","1932","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("default");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","77","4990","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Combo00_innerdataset = new nexacro.NormalDataset("Combo00_innerdataset", obj);
            Combo00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"datacolumn" : "투비소프트","codecolumn" : "0"},{"datacolumn" : "투비소프트","codecolumn" : "1"},{"datacolumn" : "투비소프트","codecolumn" : "2"},{"datacolumn" : "투비소프트","codecolumn" : "3"},{"datacolumn" : "투비소프트","codecolumn" : "4"}]});
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_text("투비소프트");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel09_00","0","1932","230","80",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit07_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Combo00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit07_01","0","2052","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("disabled");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00_01","10","42","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_enable("false");
            obj.set_text("투비소프트");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel09_01","0","2052","230","80",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit07_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Combo00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit07_02","0","2180","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("readonly");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00_02","10","42","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_readonly("true");
            obj.set_text("투비소프트");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel09_02","0","2180","230","80",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit07_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Combo00_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit07_03","0","2308","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("essential");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00_03","10","42","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("essential");
            obj.set_text("투비소프트");
            obj.set_value("투비소프트");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel09_03","0","2308","230","80",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit07_03\"/><PanelItem id=\"PanelItem01\" componentid=\"Combo00_03\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit07_04","0","2308","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("error");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00_03_00","10","42","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("error");
            obj.set_text("투비소프트");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel09_04","50","154","230","80",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit07_04\"/><PanelItem id=\"PanelItem01\" componentid=\"Combo00_03_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel09","0","Static06:16",null,"264","0",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("24");
            obj.set_horizontalgap("24");
            obj.set_spacing("40px");
            obj.set_cssclass("pnl_WF_Gbox");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel09_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel09_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel09_02\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel09_03\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel09_04\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","0","Panel09:80",null,"48","0",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("MultiCombo");
            obj.set_cssclass("sta_WF_ParaH2_pc");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit05_05","0","1932","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("default");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new MultiCombo("MultiCombo00","247","5357","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonlycolumn("readonlycolumn");
            obj.set_showselectallcheckbox("true");
            var MultiCombo00_innerdataset = new nexacro.NormalDataset("MultiCombo00_innerdataset", obj);
            MultiCombo00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"},{"id" : "readonlycolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "투비소프트"},{"codecolumn" : "1","datacolumn" : "투비소프트1","readonlycolumn" : "true"},{"codecolumn" : "2","datacolumn" : "투비소프트2"},{"codecolumn" : "3","datacolumn" : "투비소프트3"}]});
            obj.set_innerdataset(MultiCombo00_innerdataset);
            obj.set_text("투비소프트1");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel10_00","0","1932","230","80",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit05_05\"/><PanelItem id=\"PanelItem03\" componentid=\"MultiCombo00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit05_06","0","2052","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("disabled");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new MultiCombo("MultiCombo00_00","10","41","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_enable("false");
            obj.set_showselectallcheckbox("true");
            obj.set_tabstop("false");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonlycolumn("readonlycolumn");
            var MultiCombo00_00_innerdataset = new nexacro.NormalDataset("MultiCombo00_00_innerdataset", obj);
            MultiCombo00_00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"},{"id" : "readonlycolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "투비소프트"},{"codecolumn" : "1","datacolumn" : "투비소프트1","readonlycolumn" : "true"},{"codecolumn" : "2","datacolumn" : "투비소프트2"},{"codecolumn" : "3","datacolumn" : "투비소프트3"}]});
            obj.set_innerdataset(MultiCombo00_00_innerdataset);
            obj.set_text("투비소프트");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel10_01","0","2052","230","80",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit05_06\"/><PanelItem id=\"PanelItem01\" componentid=\"MultiCombo00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit05_07","0","2180","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("readonly");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new MultiCombo("MultiCombo00_01","10","41","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_readonly("true");
            obj.set_showselectallcheckbox("true");
            obj.set_tabstop("false");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonlycolumn("readonlycolumn");
            var MultiCombo00_01_innerdataset = new nexacro.NormalDataset("MultiCombo00_01_innerdataset", obj);
            MultiCombo00_01_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"},{"id" : "readonlycolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "투비소프트"},{"codecolumn" : "1","datacolumn" : "투비소프트1","readonlycolumn" : "true"},{"codecolumn" : "2","datacolumn" : "투비소프트2"},{"codecolumn" : "3","datacolumn" : "투비소프트3"}]});
            obj.set_innerdataset(MultiCombo00_01_innerdataset);
            obj.set_text("투비소프트");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel10_02","0","2180","230","80",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit05_07\"/><PanelItem id=\"PanelItem01\" componentid=\"MultiCombo00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit05_08","0","2308","100%","32",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("essential");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new MultiCombo("MultiCombo00_02","10","41","230","48",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_cssclass("essential");
            obj.set_showselectallcheckbox("true");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonlycolumn("readonlycolumn");
            var MultiCombo00_02_innerdataset = new nexacro.NormalDataset("MultiCombo00_02_innerdataset", obj);
            MultiCombo00_02_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"},{"id" : "readonlycolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "투비소프트"},{"codecolumn" : "1","datacolumn" : "투비소프트1"},{"codecolumn" : "2","datacolumn" : "투비소프트2"},{"codecolumn" : "3","datacolumn" : "투비소프트3"}]});
            obj.set_innerdataset(MultiCombo00_02_innerdataset);
            obj.set_text("투비소프트");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel10_03","0","2308","100%","80",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit05_08\"/><PanelItem id=\"PanelItem01\" componentid=\"MultiCombo00_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit05_09","10","2318","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("edittype: count / type : search");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new MultiCombo("MultiCombo00_03","10","41","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_showselectallcheckbox("true");
            obj.set_edittype("count");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonlycolumn("readonlycolumn");
            obj.set_type("search");
            var MultiCombo00_03_innerdataset = new nexacro.NormalDataset("MultiCombo00_03_innerdataset", obj);
            MultiCombo00_03_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"},{"id" : "readonlycolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "투비소프트"},{"codecolumn" : "1","datacolumn" : "투비소프트"},{"codecolumn" : "2","datacolumn" : "투비소프트"},{"codecolumn" : "3","datacolumn" : "투비소프트","readonlycolumn" : "true"},{"codecolumn" : "4","datacolumn" : "투비소프트"}]});
            obj.set_innerdataset(MultiCombo00_03_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel10_04","50","154","230","80",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit05_09\"/><PanelItem id=\"PanelItem01\" componentid=\"MultiCombo00_03\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit05_10","10","2318","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("edittype: singletag");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new MultiCombo("MultiCombo00_04","10","41","100%","88",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_showselectallcheckbox("true");
            obj.set_edittype("singletag");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonlycolumn("readonlycolumn");
            obj.set_buttonsize("44");
            obj.set_tagboxitemhorizontalgap("8");
            obj.set_tagboxitemverticalgap("8");
            obj.set_tagboxscrollbartype("auto");
            obj.set_type("search");
            var MultiCombo00_04_innerdataset = new nexacro.NormalDataset("MultiCombo00_04_innerdataset", obj);
            MultiCombo00_04_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"},{"id" : "readonlycolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "투비소프트1"},{"codecolumn" : "1","datacolumn" : "투비소프트2","readonlycolumn" : "true"},{"codecolumn" : "2","datacolumn" : "투비소프트3"},{"codecolumn" : "3","datacolumn" : "투비소프트4"}]});
            obj.set_innerdataset(MultiCombo00_04_innerdataset);
            obj.set_text("투비소프트");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel10_05","304","154","230","120",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit05_10\"/><PanelItem id=\"PanelItem01\" componentid=\"MultiCombo00_04\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit05_11","10","2318","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("edittype: multitag");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new MultiCombo("MultiCombo00_05","10","41","100%","88",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_showselectallcheckbox("true");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonlycolumn("readonlycolumn");
            obj.set_edittype("multitag");
            obj.set_buttonsize("44");
            obj.set_tagboxitemhorizontalgap("8");
            obj.set_tagboxitemverticalgap("8");
            obj.set_type("search");
            var MultiCombo00_05_innerdataset = new nexacro.NormalDataset("MultiCombo00_05_innerdataset", obj);
            MultiCombo00_05_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"},{"id" : "readonlycolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "투비소프트1"},{"codecolumn" : "1","datacolumn" : "투비소프트2","readonlycolumn" : "true"},{"codecolumn" : "2","datacolumn" : "투비소프트3"},{"codecolumn" : "3","datacolumn" : "투비소프트4"}]});
            obj.set_innerdataset(MultiCombo00_05_innerdataset);
            obj.set_text("투비소프트4");
            obj.set_value("3");
            obj.set_index("3");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel10_06","304","154","230","120",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit05_11\"/><PanelItem id=\"PanelItem01\" componentid=\"MultiCombo00_05\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel10","0","Static07:16",null,"408","0",null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("24");
            obj.set_horizontalgap("24");
            obj.set_spacing("40px");
            obj.set_cssclass("pnl_WF_Gbox");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel10_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel10_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel10_02\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel10_03\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel10_04\"/><PanelItem id=\"PanelItem05\" componentid=\"Panel10_05\"/><PanelItem id=\"PanelItem06\" componentid=\"Panel10_06\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","0","Panel10:80",null,"48","0",null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("ListBox");
            obj.set_cssclass("sta_WF_ParaH2_pc");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit05_12","0","1932","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("default");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new ListBox("ListBox00","53","5989","100%","180",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var ListBox00_innerdataset = new nexacro.NormalDataset("ListBox00_innerdataset", obj);
            ListBox00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "투비소프트"},{"codecolumn" : "1","datacolumn" : "투비소프트"},{"codecolumn" : "2","datacolumn" : "투비소프트"},{"codecolumn" : "3","datacolumn" : "투비소프트"}]});
            obj.set_innerdataset(ListBox00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Panel("Panel11_00","0","1932","230","230",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit05_12\"/><PanelItem id=\"PanelItem01\" componentid=\"ListBox00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit05_13","0","2052","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("disabled");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new ListBox("ListBox00_00","10","42","100%","180",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            var ListBox00_00_innerdataset = new nexacro.NormalDataset("ListBox00_00_innerdataset", obj);
            ListBox00_00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "투비소프트"},{"codecolumn" : "1","datacolumn" : "투비소프트"},{"codecolumn" : "2","datacolumn" : "투비소프트"},{"codecolumn" : "3","datacolumn" : "투비소프트"}]});
            obj.set_innerdataset(ListBox00_00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Panel("Panel11_01","0","2052","230","230",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit05_13\"/><PanelItem id=\"PanelItem01\" componentid=\"ListBox00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit05_14","0","2180","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("readonly");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new ListBox("ListBox00_01","10","42","100%","180",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("true");
            var ListBox00_01_innerdataset = new nexacro.NormalDataset("ListBox00_01_innerdataset", obj);
            ListBox00_01_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "투비소프트"},{"codecolumn" : "1","datacolumn" : "투비소프트"},{"codecolumn" : "2","datacolumn" : "투비소프트"},{"codecolumn" : "3","datacolumn" : "투비소프트"}]});
            obj.set_innerdataset(ListBox00_01_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Panel("Panel11_02","0","2180","230","230",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit05_14\"/><PanelItem id=\"PanelItem01\" componentid=\"ListBox00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel11","0","Static08:16",null,"310","0",null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("24");
            obj.set_horizontalgap("24");
            obj.set_spacing("40px");
            obj.set_cssclass("pnl_WF_Gbox");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel11_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel11_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel11_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","0","Panel11:80",null,"48","0",null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("Spin");
            obj.set_cssclass("sta_WF_ParaH2_pc");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit06","0","1932","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("default");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin00","101","6487","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_value("10");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel12_00","0","1932","230","80",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit06\"/><PanelItem id=\"PanelItem01\" componentid=\"Spin00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit07","0","2052","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("disabled");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin00_00","10","42","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_enable("false");
            obj.set_value("10");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel12_01","0","2052","230","80",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit07\"/><PanelItem id=\"PanelItem01\" componentid=\"Spin00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit08","0","2180","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("readonly");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin00_01","10","42","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_readonly("true");
            obj.set_value("10");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel12_02","0","2180","230","80",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit08\"/><PanelItem id=\"PanelItem01\" componentid=\"Spin00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit08_00","0","2180","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("essential");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin00_01_00","10","42","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_cssclass("essential");
            obj.set_value("10");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel12_02_00","558","50","230","80",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit08_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Spin00_01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit08_00_00","0","2180","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("error");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin00_02","10","42","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_cssclass("error");
            obj.set_value("10");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel12_02_00_00","50","154","230","80",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit08_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Spin00_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel12","0","Static09:16",null,"264","0",null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("24");
            obj.set_horizontalgap("24");
            obj.set_spacing("40px");
            obj.set_cssclass("pnl_WF_Gbox");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel12_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel12_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel12_02\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel12_02_00\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel12_02_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","0","Panel12:80",null,"48","0",null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("Calendar");
            obj.set_cssclass("sta_WF_ParaH2_pc");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit09_00","0","1932","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("default");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","100","6915","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_popupsize("384 437");
            obj.set_usetrailingday("true");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel13_00","0","1932","230","80",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit09_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Calendar00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit09_01","0","2052","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("disabled");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00","10","42","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_enable("false");
            obj.set_popupsize("384 437");
            obj.set_usetrailingday("true");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel13_01","0","2052","230","80",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit09_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Calendar00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit09_02","0","2180","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_text("readonly");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_01","10","42","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_readonly("true");
            obj.set_popupsize("384 437");
            obj.set_usetrailingday("true");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel13_02","0","2180","230","80",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit09_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Calendar00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit09_03","10","2190","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_text("essential");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_02","10","42","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_cssclass("essential");
            obj.set_popupsize("384 437");
            obj.set_usetrailingday("true");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel13_03","558","50","230","80",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit09_03\"/><PanelItem id=\"PanelItem01\" componentid=\"Calendar00_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit09_04","10","2190","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_text("error");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_02_00","10","42","230","48",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_cssclass("error");
            obj.set_popupsize("384 437");
            obj.set_usetrailingday("true");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel13_04","50","154","460","80",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit09_04\"/><PanelItem id=\"PanelItem01\" componentid=\"Calendar00_02_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit09_05","10","2190","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_text("type: spin");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_02_01","10","42","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_type("spin");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel13_05","50","154","230","80",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit09_05\"/><PanelItem id=\"PanelItem01\" componentid=\"Calendar00_02_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit09_06","10","2190","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_text("type: spin error");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_02_02","10","42","230","48",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_cssclass("error");
            obj.set_type("spin");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel13_06","50","154","500","80",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit09_06\"/><PanelItem id=\"PanelItem01\" componentid=\"Calendar00_02_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit09_07","10","2190","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_text("type: monthly");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_02_01_00","10","42","384","437",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_type("monthonly");
            obj.set_usetrailingday("true");
            obj.set_datepickerchangetype("button");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel13_07","50","258","384","460",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit09_07\"/><PanelItem id=\"PanelItem01\" componentid=\"Calendar00_02_01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel13","0","Static10:16",null,"852","0",null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("24");
            obj.set_horizontalgap("24");
            obj.set_spacing("40px");
            obj.set_cssclass("pnl_WF_Gbox");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel13_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel13_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel13_02\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel13_03\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel13_04\"/><PanelItem id=\"PanelItem05\" componentid=\"Panel13_05\"/><PanelItem id=\"PanelItem06\" componentid=\"Panel13_06\"/><PanelItem id=\"PanelItem07\" componentid=\"Panel13_07\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static11_00","0","Panel13:80",null,"48","0",null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_text("Datefield");
            obj.set_cssclass("sta_WF_ParaH2_pc");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit10_00_00","0","1932","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_text("default");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new DateField("DateField00","146","8920","230","107",null,null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_labeltext("레이블");
            obj.set_labelfloatingfixed("true");
            obj.set_labelposition("outside");
            obj.set_headerheight("31");
            obj.set_helpertext("내용을 입력해주세요");
            obj.set_usehelpertext("true");
            obj.set_popupsize("384 437");
            obj.set_footerheight("28");
            obj.set_cancelbuttontext("취소");
            obj.set_okbuttontext("선택");
            obj.set_contentheight("48");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel14_00_00","0","1932","230","139",null,null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit10_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"DateField00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit10_01_00","0","2052","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("102");
            obj.set_text("disabled");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new DateField("DateField00_00","10","50","230","79",null,null,null,null,null,null,this);
            obj.set_taborder("103");
            obj.set_labeltext("레이블");
            obj.set_labelfloatingfixed("true");
            obj.set_labelposition("outside");
            obj.set_headerheight("31");
            obj.set_enable("false");
            obj.set_popupsize("384 437");
            obj.set_footerheight("28");
            obj.set_helpertext("내용을 입력해주세요");
            obj.set_okbuttontext("선택");
            obj.set_cancelbuttontext("취소");
            obj.set_contentheight("48");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel14_01_00","0","2052","230","139",null,null,null,null,null,null,this);
            obj.set_taborder("104");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit10_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"DateField00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit10_02_00","0","2180","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_text("readonly");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new DateField("DateField00_01","10","50","230","79",null,null,null,null,null,null,this);
            obj.set_taborder("106");
            obj.set_labeltext("레이블");
            obj.set_labelfloatingfixed("true");
            obj.set_labelposition("outside");
            obj.set_headerheight("31");
            obj.set_readonly("true");
            obj.set_popupsize("384 437");
            obj.set_footerheight("28");
            obj.set_helpertext("내용을 입력해주세요");
            obj.set_okbuttontext("선택");
            obj.set_cancelbuttontext("취소");
            obj.set_contentheight("48");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel14_02_00","0","2180","230","139",null,null,null,null,null,null,this);
            obj.set_taborder("107");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit10_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"DateField00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit10_03_00","10","2190","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("108");
            obj.set_text("essential");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new DateField("DateField00_02","10","50","230","79",null,null,null,null,null,null,this);
            obj.set_taborder("109");
            obj.set_labeltext("레이블");
            obj.set_labelfloatingfixed("true");
            obj.set_labelposition("outside");
            obj.set_headerheight("31");
            obj.set_cssclass("essential");
            obj.set_popupsize("384 437");
            obj.set_footerheight("28");
            obj.set_helpertext("내용을 입력해주세요");
            obj.set_usehelpertext("true");
            obj.set_okbuttontext("선택");
            obj.set_cancelbuttontext("취소");
            obj.set_contentheight("48");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel14_03_00","558","50","230","139",null,null,null,null,null,null,this);
            obj.set_taborder("110");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit10_03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"DateField00_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel14_08","0","Static11_00:16",null,"382","0",null,null,null,null,null,this);
            obj.set_taborder("111");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("24");
            obj.set_horizontalgap("24");
            obj.set_spacing("40px");
            obj.set_cssclass("pnl_WF_Gbox");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel14_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel14_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel14_02_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel14_03_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Calendar12","0","Panel14_08:80",null,"48","0",null,null,null,null,null,this);
            obj.set_taborder("112");
            obj.set_text("DateRange Picker");
            obj.set_cssclass("sta_WF_ParaH2_pc");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit11","50","2230","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("113");
            obj.set_text("type: datetime | horizontal");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new DateRangePicker("DateRangePicker00","205","9102","688","524",null,null,null,null,null,null,this);
            obj.set_taborder("114");
            obj.set_tabbuttonheight("32");
            obj.set_displaytype("datetime");
            obj.set_datepickerheadheight("56");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel15_00","50","258","750","568",null,null,null,null,null,null,this);
            obj.set_taborder("115");
            obj.set_type("vertical");
            obj.set_verticalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit11\"/><PanelItem id=\"PanelItem01\" componentid=\"DateRangePicker00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit11_00","50","2230","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("116");
            obj.set_text("type: datetime | vertical");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new DateRangePicker("DateRangePicker00_00","205","9102","356","888",null,null,null,null,null,null,this);
            obj.set_taborder("117");
            obj.set_tabbuttonheight("32");
            obj.set_displaytype("datetime");
            obj.set_direction("vertical");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel15_00_00","50","50","384","936",null,null,null,null,null,null,this);
            obj.set_taborder("118");
            obj.set_type("vertical");
            obj.set_verticalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit11_00\"/><PanelItem id=\"PanelItem01\" componentid=\"DateRangePicker00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel15","0","Calendar12:16",null,"1608","0",null,null,null,null,null,this);
            obj.set_taborder("119");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("24");
            obj.set_horizontalgap("24");
            obj.set_spacing("40px");
            obj.set_cssclass("pnl_WF_Gbox");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem07\" componentid=\"Panel15_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel15_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Calendar12_00","0","Panel15:80",null,"48","0",null,null,null,null,null,this);
            obj.set_taborder("120");
            obj.set_text("Menu");
            obj.set_cssclass("sta_WF_ParaH2_pc");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Menu("Menu00","967","1545","100%","56",null,null,null,null,null,null,this);
            obj.set_taborder("121");
            obj.set_captioncolumn("captioncolumn");
            obj.set_checkboxcolumn("checkboxcolumn");
            obj.set_enablecolumn("enablecolumn");
            obj.set_hotkeycolumn("hotkeycolumn");
            obj.set_iconcolumn("iconcolumn");
            obj.set_idcolumn("idcolumn");
            obj.set_levelcolumn("levelcolumn");
            obj.set_userdatacolumn("userdatacolumn");
            obj.set_navigationbuttonsize("42");
            obj.set_popupitemheight("50");
            obj.set_popupnavigationbuttonsize("32");
            obj.set_autohotkey("true");
            var Menu00_innerdataset = new nexacro.NormalDataset("Menu00_innerdataset", obj);
            Menu00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "captioncolumn","size" : "256"},{"id" : "checkboxcolumn","size" : "256"},{"id" : "enablecolumn","size" : "256"},{"id" : "hotkeycolumn","size" : "256"},{"id" : "iconcolumn","size" : "256"},{"id" : "idcolumn","size" : "256"},{"id" : "levelcolumn","size" : "256"},{"id" : "userdatacolumn","size" : "256"}]},"Rows" : [{"captioncolumn" : "menu01","levelcolumn" : "0"},{"captioncolumn" : "2depth01","levelcolumn" : "1"},{"captioncolumn" : "2depth02","levelcolumn" : "1","hotkeycolumn" : "hotkey","checkboxcolumn" : "ture"},{"captioncolumn" : "3depth01","levelcolumn" : "2","hotkeycolumn" : "hotkey","checkboxcolumn" : "ture"},{"captioncolumn" : "3depth02","levelcolumn" : "2","checkboxcolumn" : "ture"},{"captioncolumn" : "menu02","levelcolumn" : "0"},{"captioncolumn" : "menu03","levelcolumn" : "0"},{"captioncolumn" : "menu04","levelcolumn" : "0"},{"captioncolumn" : "menu05","levelcolumn" : "0"},{"captioncolumn" : "menu06","levelcolumn" : "0"},{"captioncolumn" : "menu07","levelcolumn" : "0"},{"captioncolumn" : "menu08","levelcolumn" : "0"},{"captioncolumn" : "3depth01","levelcolumn" : "1","hotkeycolumn" : "hotkey","checkboxcolumn" : "ture"},{"captioncolumn" : "3depth02","levelcolumn" : "1","hotkeycolumn" : "hotkey","checkboxcolumn" : "ture"}]});
            obj.set_innerdataset(Menu00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Panel("Panel15_01","0","Calendar12_00:24",null,"136","0",null,null,null,null,null,this);
            obj.set_taborder("122");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("24");
            obj.set_horizontalgap("24");
            obj.set_spacing("40px");
            obj.set_cssclass("pnl_WF_Gbox");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Menu00\"/></Contents>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,mobile_small",888,5500,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Menu00","accessibilityaction","Dataset01","Column0");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("guide02.xfdl", function() {


        this.guide02_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.guide02_onload,this);
            this.Static06.addEventHandler("onclick",this.Static04_00_00_onclick,this);
            this.Static07.addEventHandler("onclick",this.Static04_00_00_onclick,this);
            this.staSubtit05_09.addEventHandler("onclick",this.staSubtit05_09_onclick,this);
            this.Static08.addEventHandler("onclick",this.Static04_00_00_onclick,this);
            this.Static09.addEventHandler("onclick",this.Static04_00_00_onclick,this);
            this.Static10.addEventHandler("onclick",this.Static04_00_00_onclick,this);
            this.Static11_00.addEventHandler("onclick",this.Static04_00_00_onclick,this);
            this.DateField00.addEventHandler("onchanged",this.DateField00_onchanged,this);
            this.Calendar12.addEventHandler("onclick",this.Static04_00_00_onclick,this);
            this.Calendar12_00.addEventHandler("onclick",this.Static04_00_00_onclick,this);
            this.Menu00.addEventHandler("onmenuclick",this.Menu00_onmenuclick,this);
        };
        this.loadIncludeScript("guide02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
