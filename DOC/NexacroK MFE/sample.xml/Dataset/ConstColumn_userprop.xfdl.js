(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ConstColumnExpr");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("ds00", this);
            obj._setContents({"ColumnInfo" : {"ConstColumn" : [{"id" : "ConstColumn10","size" : "30","type" : "STRING","value" : "expr:Column0 == \"이순신\""},{"id" : "ConstColumn11","size" : "30","type" : "STRING","value" : "expr:Column0 == \"이순신\" ? -1 : Column1"},{"id" : "ConstColumn0","label" : "라벨1","size" : "30","type" : "STRING","usera" : "aaaa","userb" : "bbb","value" : "expr:Column0"},{"id" : "ConstColumn1","size" : "30","type" : "STRING","userc" : "cccc","value" : "expr:Column1"},{"id" : "ConstColumn2","label" : "라벨2","size" : "30","type" : "STRING","value" : "expr:currow"},{"id" : "ConstColumn3","size" : "30","type" : "STRING","value" : "1111"},{"id" : "ConstColumn4","size" : "30","type" : "STRING","value" : "expr:ConstColumn0"},{"id" : "ConstColumn5","size" : "30","type" : "STRING","value" : "expr:Column0+ConstColumn5"},{"id" : "ConstColumn6","size" : "30","type" : "STRING","value" : "expr:ConstColumn6"},{"id" : "ConstColumn7","size" : "30","type" : "STRING","value" : "expr:ConstColumn8"},{"id" : "ConstColumn8","size" : "30","type" : "STRING","value" : "expr:ConstColumn7"},{"id" : "ConstColumn9","size" : "30","type" : "STRING","value" : "expr:Column0+Column1"},{"id" : "ConstColumn12","label" : "라벨1","size" : "30","type" : "STRING"},{"id" : "ConstColumn13","size" : "30","type" : "STRING","usera" : "aaaa"},{"id" : "ConstColumn14","labe11" : "aaaa","label" : "나이","size" : "30","type" : "STRING"}],"Column" : [{"id" : "Column0","label" : "이름","prop" : "TEXT","size" : "256","sumtext" : "AAAA","type" : "STRING","user" : "TEST"},{"id" : "Column1","labe11" : "aaaa","label" : "나이","size" : "256","type" : "INT"},{"id" : "Column2","labe11" : "aaaa","labe12" : "bbbb","label" : "개수","prop" : "COUNT","size" : "256","type" : "INT"},{"id" : "Column3","labe12" : "bbbb","size" : "256","type" : "INT"},{"id" : "Column4","prop" : "TEXT","size" : "256","type" : "INT"},{"id" : "Column5","size" : "256","sumtext" : "AAAA","type" : "INT"},{"id" : "Column6","prop" : "TEXT","size" : "256","sumtext" : "AAAA","type" : "INT"}]},"Rows" : [{"Column0" : "이순신","Column1" : "10"},{"Column0" : "강감찬","Column1" : "20"},{"Column0" : "홍길동","Column1" : "30"},{"Column1" : "40","Column0" : "고구마"},{"Column0" : "이순신","Column1" : "50"},{"Column0" : "감자"}]});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("ds01", this);
            obj._setContents({});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("ds02", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "col_addconstcolumn","size" : "256","type" : "STRING"},{"id" : "col_addColumn","size" : "256","type" : "STRING"},{"id" : "col_addColumnInfo","size" : "256","type" : "STRING"},{"id" : "col_getConstColProp","size" : "256","type" : "STRING"},{"id" : "col_getConstColLabel","size" : "256","type" : "STRING"},{"id" : "col_getColumnInfo","size" : "256","type" : "STRING"},{"id" : "col_setConstColLabel","size" : "256","type" : "STRING"},{"id" : "col_setConstColProp","size" : "256","type" : "STRING"},{"id" : "col_loadXML","size" : "256","type" : "STRING"},{"id" : "col_loadSSV","size" : "256","type" : "STRING"},{"id" : "col_loadJSON","size" : "256","type" : "STRING"},{"id" : "col_saveSSV","size" : "256","type" : "STRING"},{"id" : "col_saveXML","size" : "256","type" : "STRING"},{"id" : "col_saveJSON","size" : "256","type" : "STRING"}]},"Rows" : [{"col_addconstcolumn" : "\"consttest\", 1, {\"type\":\"int\", \"size\": 0}","col_addColumn" : "\"coltest\", \"string\", {\"type\":\"int\", \"size\": 0}","col_getConstColLabel" : "\"consttest\"","col_getConstColProp" : "\"consttest\", \"usera\"","col_getColumnInfo" : "\"coltest\"","col_setConstColLabel" : "\"consttest\", \"AA\"","col_setConstColProp" : "\"consttest\", \"AA\", \"일번\"","col_addColumnInfo" : "\"coltest\", newcol"},{"col_addconstcolumn" : "\"consttest1\", \"!!!\", {\"type\":\"string\", \"size\": 255, \"datapath\": \"@a\"}","col_addColumn" : "\"coltest1\", \"string\", { \"size\": 255, \"datapath\": \"@a\"}","col_getConstColLabel" : "1","col_getConstColProp" : "1, \"usera\"","col_getColumnInfo" : "1","col_setConstColLabel" : "1, \"가나\"","col_setConstColProp" : "1, \"가나\", 1","col_addColumnInfo" : "\"coltest11\", newcol1"},{"col_addconstcolumn" : "\"consttest2\", \"!!!\", {\"type\":\"string\", \"size\": 255, \"label\":\"테스트\"}","col_addColumn" : "\"coltest2\", \"string\", {\"type\":\"string\", \"size\": 255, \"label\":\"테스트\"}","col_getConstColLabel" : "\"consttest2\"","col_getConstColProp" : "\"consttest2\", \"usera\"","col_getColumnInfo" : "\"coltest2\"","col_setConstColLabel" : "\"consttest2\", \"1111\"","col_setConstColProp" : "\"consttest2\", \"1111\", 2222","col_addColumnInfo" : "\"coltest12\", newcol2"},{"col_addconstcolumn" : "\"consttest3\", \"!!!\", {\"type\":\"string\", \"size\": 255, \"label\":\"테스트\", \"usera\": \"aaaa\" , \"userb\":\"bbbb\"}","col_addColumn" : "\"coltest3\", \"string\", {\"type\":\"string\", \"size\": 255, \"label\":\"테스트\", \"usera\": \"aaaa\" , \"userb\":\"bbbb\"}","col_getConstColLabel" : "\"consttest3\"","col_getConstColProp" : "\"consttest3\", \"usera\"","col_getColumnInfo" : "\"coltest3\"","col_setConstColLabel" : "\"consttest3\", \"abs11\"","col_setConstColProp" : "\"consttest3\", \"abs11\", \"ㅠㅠㅠㅠ\"","col_addColumnInfo" : "\"coltest12\", newcol2"},{"col_addconstcolumn" : "\"consttest4\", \"!!!\", {\"type\":\"string\", \"size\": 255, \"label\":\"테스트\", \"usera\": \"aaaa\" , \"userb\":null}","col_addColumn" : "\"coltest4\", \"string\", {\"type\":\"string\", \"size\": 255, \"label\":\"테스트\", \"usera\": \"aaaa\" , \"userb\":null}","col_getConstColLabel" : "\"consttest4\"","col_getConstColProp" : "\"consttest3\", \"userb\""},{"col_addconstcolumn" : "\"consttest5\", \"!!!\", {\"type\":\"string\", \"size\": 255, \"label\":\"테스트\", \"usera\": \"aaaa\" , \"userb\":null, \"datapath\": \"@.value\"}","col_getConstColLabel" : "\"consttest5\"","col_addColumn" : "\"coltest5\", \"string\", {\"type\":\"string\", \"size\": 255, \"label\":\"테스트\", \"usera\": true , \"userb\":false}"},{"col_addconstcolumn" : "\"consttest6\", \"!!!\", {\"type\":\"string\", \"size\": 255, \"label\":\"테스트\", \"usera\": \"aaaa\" , \"userb\":\"testaa\", \"datapath\": \"@.value\"}","col_getConstColLabel" : "\"consttest6\""},{"col_addconstcolumn" : "\"consttest7\", \"!!!\", {\"type\":\"string\", \"size\": 255, \"label\":\"테스트\", \"usera\": true , \"userb\":false, \"datapath\": \"@.value\"}"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Grid("grd00","9","17","171","213",null,null,null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_binddataset("ds00");
            obj.set_taborder("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/></Band><Band id=\"body\"><Cell edittype=\"text\" text=\"bind:Column0\"/><Cell col=\"1\" edittype=\"text\" text=\"bind:Column1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("grd00_00","190","17","1060","133",null,null,null,null,null,null,this);
            obj.set_autosizingtype("none");
            obj.set_binddataset("ds00");
            obj.set_cellsizingtype("col");
            obj.set_taborder("1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"89\"/><Column size=\"91\"/><Column size=\"71\"/><Column size=\"77\"/><Column size=\"75\"/><Column size=\"72\"/><Column size=\"58\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"73\"/><Column size=\"71\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ConstColumn2\"/><Cell col=\"1\" text=\"ConstColumn0\"/><Cell col=\"2\" text=\"ConstColumn1\"/><Cell col=\"3\" text=\"ConstColumn3\"/><Cell col=\"4\" text=\"ConstColumn4\"/><Cell col=\"5\" text=\"ConstColumn5\"/><Cell col=\"6\" text=\"ConstColumn6\"/><Cell col=\"7\" text=\"ConstColumn7\"/><Cell col=\"8\" text=\"ConstColumn8\"/><Cell col=\"9\" text=\"Column0\"/><Cell col=\"10\" text=\"Column1\"/></Band><Band id=\"body\"><Cell text=\"bind:ConstColumn2\"/><Cell col=\"1\" text=\"bind:ConstColumn0\"/><Cell col=\"2\" text=\"bind:ConstColumn1\"/><Cell col=\"3\" text=\"bind:ConstColumn3\"/><Cell col=\"4\" text=\"bind:ConstColumn4\"/><Cell col=\"5\" text=\"bind:ConstColumn5\"/><Cell col=\"6\" text=\"bind:ConstColumn6\"/><Cell col=\"7\" text=\"bind:ConstColumn7\"/><Cell col=\"8\" text=\"bind:ConstColumn8\"/><Cell col=\"9\" text=\"bind:Column0\"/><Cell col=\"10\" text=\"bind:Column1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Div("div00","190","391","593","209",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn13","386","256","100","50",null,null,null,null,null,null,this.div00.form);
            obj.set_flexgrow("1");
            obj.set_taborder("0");
            obj.set_text("addConstColumn");
            this.div00.addChild(obj.name, obj);

            obj = new nexacro.Button("btn01_00","119","4","100","50",null,null,null,null,null,null,this.div00.form);
            obj.set_flexgrow("1");
            obj.set_taborder("1");
            obj.set_text("addColumn");
            this.div00.addChild(obj.name, obj);

            obj = new nexacro.Button("btn01_00_01","119","4","116","50",null,null,null,null,null,null,this.div00.form);
            obj.set_flexgrow("1");
            obj.set_taborder("13");
            obj.set_text("addColumnInfo");
            this.div00.addChild(obj.name, obj);

            obj = new nexacro.Button("btn09","509","310","100","50",null,null,null,null,null,null,this.div00.form);
            obj.set_flexgrow("1");
            obj.set_taborder("11");
            obj.set_text("getConstColProp");
            this.div00.addChild(obj.name, obj);

            obj = new nexacro.Button("btn10","380","362","100","50",null,null,null,null,null,null,this.div00.form);
            obj.set_flexgrow("1");
            obj.set_taborder("4");
            obj.set_text("getConstColLabel");
            this.div00.addChild(obj.name, obj);

            obj = new nexacro.Button("btn01_00_00","89","41","100","50",null,null,null,null,null,null,this.div00.form);
            obj.set_flexgrow("1");
            obj.set_taborder("2");
            obj.set_text("getColumnInfo");
            this.div00.addChild(obj.name, obj);

            obj = new nexacro.Button("btn08","387","314","100","50",null,null,null,null,null,null,this.div00.form);
            obj.set_flexgrow("1");
            obj.set_taborder("3");
            obj.set_text("setConstColLabel");
            this.div00.addChild(obj.name, obj);

            obj = new nexacro.Button("btn08_00","387","314","116","50",null,null,null,null,null,null,this.div00.form);
            obj.set_flexgrow("1");
            obj.set_taborder("12");
            obj.set_text("setConstColProp");
            this.div00.addChild(obj.name, obj);

            obj = new nexacro.Button("btn02_01","517","456","100","50",null,null,null,null,null,null,this.div00.form);
            obj.set_flexgrow("1");
            obj.set_taborder("9");
            obj.set_text("loadXML");
            this.div00.addChild(obj.name, obj);

            obj = new nexacro.Button("btn02_00_00_00","649","457","100","50",null,null,null,null,null,null,this.div00.form);
            obj.set_flexgrow("1");
            obj.set_taborder("10");
            obj.set_text("loadSSV");
            this.div00.addChild(obj.name, obj);

            obj = new nexacro.Button("btn02_00_01","386","455","100","50",null,null,null,null,null,null,this.div00.form);
            obj.set_flexgrow("1");
            obj.set_taborder("8");
            obj.set_text("loadJSON");
            this.div00.addChild(obj.name, obj);

            obj = new nexacro.Button("btn02_01_00","517","456","112","50",null,null,null,null,null,null,this.div00.form);
            obj.set_flexgrow("1");
            obj.set_taborder("14");
            obj.set_text("loadCSV");
            this.div00.addChild(obj.name, obj);

            obj = new nexacro.Button("btn02_00_00","648","411","100","50",null,null,null,null,null,null,this.div00.form);
            obj.set_flexgrow("1");
            obj.set_taborder("7");
            obj.set_text("saveSSV");
            this.div00.addChild(obj.name, obj);

            obj = new nexacro.Button("btn02","516","410","100","50",null,null,null,null,null,null,this.div00.form);
            obj.set_flexgrow("1");
            obj.set_taborder("6");
            obj.set_text("saveXML");
            this.div00.addChild(obj.name, obj);

            obj = new nexacro.Button("btn02_00","385","409","100","50",null,null,null,null,null,null,this.div00.form);
            obj.set_flexgrow("1");
            obj.set_taborder("5");
            obj.set_text("saveJSON");
            this.div00.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00","576","111","120","50",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("15");
            obj.set_text("saveCSV");
            this.div00.addChild(obj.name, obj);

            obj = new nexacro.Combo("cbo_addConstColumn","190","288","143","30",null,null,null,null,null,null,this);
            obj.set_codecolumn("col_addconstcolumn");
            obj.set_datacolumn("col_addconstcolumn");
            obj.set_displaynulltext("addConstColumn");
            obj.set_innerdataset("ds02");
            obj.set_taborder("3");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new nexacro.Combo("cbo_addColumn","337","288","143","30",null,null,null,null,null,null,this);
            obj.set_codecolumn("col_addColumn");
            obj.set_datacolumn("col_addColumn");
            obj.set_displaynulltext("addColumn");
            obj.set_innerdataset("ds02");
            obj.set_taborder("4");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new nexacro.Combo("cbo_getConstColProp","490","288","143","30",null,null,null,null,null,null,this);
            obj.set_codecolumn("col_getConstColProp");
            obj.set_datacolumn("col_getConstColProp");
            obj.set_displaynulltext("getConstColProp");
            obj.set_innerdataset("ds02");
            obj.set_taborder("5");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new nexacro.Combo("cbo_getConstColLabel","640","288","143","30",null,null,null,null,null,null,this);
            obj.set_codecolumn("col_getConstColLabel");
            obj.set_datacolumn("col_getConstColLabel");
            obj.set_displaynulltext("getConstColLabel");
            obj.set_innerdataset("ds02");
            obj.set_taborder("6");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new nexacro.Combo("cbo_getColumnInfo","793","288","143","30",null,null,null,null,null,null,this);
            obj.set_codecolumn("col_getColumnInfo");
            obj.set_datacolumn("col_getColumnInfo");
            obj.set_displaynulltext("getColumnInfo");
            obj.set_innerdataset("ds02");
            obj.set_taborder("7");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new nexacro.Combo("cbo_setConstColLabel","190","324","143","30",null,null,null,null,null,null,this);
            obj.set_codecolumn("col_setConstColLabel");
            obj.set_datacolumn("col_setConstColLabel");
            obj.set_displaynulltext("setConstColLabel");
            obj.set_innerdataset("ds02");
            obj.set_taborder("8");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new nexacro.Combo("cbo_setConstColProp","337","320","143","30",null,null,null,null,null,null,this);
            obj.set_codecolumn("col_setConstColProp");
            obj.set_datacolumn("col_setConstColProp");
            obj.set_displaynulltext("setConstColProp");
            obj.set_innerdataset("ds02");
            obj.set_taborder("9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new nexacro.Combo("cbo_loadXML","487","323","143","30",null,null,null,null,null,null,this);
            obj.set_codecolumn("col_loadXML");
            obj.set_datacolumn("col_loadXML");
            obj.set_displaynulltext("loadXML");
            obj.set_innerdataset("ds02");
            obj.set_taborder("10");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new nexacro.Combo("cbo_loadSSV","637","324","143","30",null,null,null,null,null,null,this);
            obj.set_codecolumn("col_loadSSV");
            obj.set_datacolumn("col_loadSSV");
            obj.set_displaynulltext("loadSSV");
            obj.set_innerdataset("ds02");
            obj.set_taborder("11");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new nexacro.Combo("cbo_loadJSON","793","328","143","30",null,null,null,null,null,null,this);
            obj.set_codecolumn("col_loadJSON");
            obj.set_datacolumn("col_loadJSON");
            obj.set_displaynulltext("loadJSON");
            obj.set_innerdataset("ds02");
            obj.set_taborder("12");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new nexacro.Combo("cbo_saveSSV","190","358","143","30",null,null,null,null,null,null,this);
            obj.set_codecolumn("col_saveSSV");
            obj.set_datacolumn("col_saveSSV");
            obj.set_displaynulltext("saveSSV");
            obj.set_innerdataset("ds02");
            obj.set_taborder("13");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new nexacro.Combo("cbo_saveXML","337","358","143","30",null,null,null,null,null,null,this);
            obj.set_codecolumn("col_saveXML");
            obj.set_datacolumn("col_saveXML");
            obj.set_displaynulltext("saveXML");
            obj.set_innerdataset("ds02");
            obj.set_taborder("14");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new nexacro.Combo("cbo_saveJSON","484","358","143","30",null,null,null,null,null,null,this);
            obj.set_codecolumn("col_saveJSON");
            obj.set_datacolumn("col_saveJSON");
            obj.set_displaynulltext("saveJSON");
            obj.set_innerdataset("ds02");
            obj.set_taborder("15");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("grd01","190","153","765","117",null,null,null,null,null,null,this);
            obj.set_binddataset("ds01");
            obj.set_cellsizingtype("col");
            obj.set_taborder("16");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Combo("cbo_addColumnInfo","637","358","143","30",null,null,null,null,null,null,this);
            obj.set_codecolumn("col_addColumnInfo");
            obj.set_datacolumn("col_addColumnInfo");
            obj.set_displaynulltext("addColumnInfo");
            obj.set_innerdataset("ds02");
            obj.set_taborder("17");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("txa00","955","279","410","274",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_value("");
            this.addChild(obj.name, obj);

            obj = new nexacro.CheckBox("chklog","801","401","127","33",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("show log");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new nexacro.CheckBox("chklog_append","800","429","127","33",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("append log");
            this.addChild(obj.name, obj);

            obj = new nexacro.CheckBox("chklog_showsavexml","797","462","127","33",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("show savexml");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("txa_savexml","16","587","744","338",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            this.addChild(obj.name, obj);

            obj = new nexacro.CheckBox("chklog_showsavejson","797","479","117","33",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("show savejson");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new nexacro.CheckBox("chklog_showsavessv","797","496","127","33",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("show savessv");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("txa_savejson","776","587","744","338",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("txa_savessv","16","924","744","130",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new nexacro.ListView("lst00","960","154","405","115",null,null,null,null,null,null,this);
            obj.set_binddataset("ds01");
            obj.set_taborder("27");
            obj._setContents("<Formats><Format id=\"default\"><Band height=\"34\" id=\"body\" width=\"100%\"/></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("txa_savecsv","776","925","744","130",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new nexacro.CheckBox("chklog_showsavecsv","797","511","127","33",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("show savecsv");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new nexacro.Combo("cbo_saveCSV","793","360","143","30",null,null,null,null,null,null,this);
            obj.set_codecolumn("col_loadJSON");
            obj.set_datacolumn("col_loadJSON");
            obj.set_displaynulltext("saveCSV");
            obj.set_innerdataset("ds02");
            obj.set_taborder("30");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new nexacro.Div("div01","31","393","116","157",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("div01");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00","77","77","120","50",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("0");
            obj.set_text("btn00");
            this.div01.addChild(obj.name, obj);

            obj = new nexacro.Button("btn01","63","129","120","50",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("1");
            obj.set_text("btn01");
            this.div01.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this.div00.form
            obj = new nexacro.Layout("default","",0,0,this.div00.form,function(p){});
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div01.form
            obj = new nexacro.Layout("default","",0,0,this.div01.form,function(p){});
            this.div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new nexacro.Layout("default","medium,large,desktop,mobile",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("ConstColumn_userprop.xfdl", function(nexacro, system, trace, environment, application) {

        this.btn01_onclick = function(obj,e)
        {
        	this.ds00.addConstColumn("NConst0", "expr:Column0*2");
        };

        this.btn02_onclick = function(obj,e)
        {
        	trace(this.ds00.saveXML());
        };

        this.btn03_onclick = function(obj,e)
        {
        	trace(this.ds00.saveJSON());
        };

        this.btn04_onclick = function(obj,e)
        {
        	trace(this.ds00.saveSSV());
        };

        this.btn05_onclick = function(obj,e)
        {
        	trace("getOrgColumn:"+ this.ds00.getOrgColumn(this.ds00.rowposition, "ConstColumn0"))
        	trace("getColumn:"+ this.ds00.getColumn(this.ds00.rowposition, "ConstColumn0"))

        	trace("getOrgColumn:"+ this.ds00.getOrgColumn(this.ds00.rowposition, "ConstColumn9"))
        	trace("getColumn:"+ this.ds00.getColumn(this.ds00.rowposition, "ConstColumn9"))
        };

        this.btn06_onclick = function(obj,e)
        {
        	this.ds01.copyData(this.ds00);
        	var strds01 = this.ds01.saveXML("test");
        	var strds00 = this.ds00.saveXML("test");
        	if (strds01 == strds00) trace("success copyData" + strds01);
        	else trace("fail copyData");
        };

        this.btn07_onclick = function(obj,e)
        {

        	var rowidx = this.ds00.findRow("ConstColumn0", "고구마") ;
        	if (rowidx == 3) trace(" ds00.findRow(\"ConstColumn0\", \"고구마\") success")
        	else trace("ds00.findRow(\"ConstColumn0\", \"고구마\") fail");

        	rowidx = this.ds00.findRow("ConstColumn9", "홍길동30") ;
        	if (rowidx == 2) trace(" ds00.findRow(\"ConstColumn9\", \"홍길동30\") success")
        	else trace("ds00.findRow(\"ConstColumn9\", \"홍길동30\") fail");

        };

        this.btn08_onclick = function(obj,e)
        {
        	var rowidx = this.ds00.findRowAs("ConstColumn0", "구마") ;
        	if (rowidx == 3) trace(" ds00.findRowAs(\"ConstColumn0\", \"구마\") success")
        	else trace("ds00.findRowAs(\"ConstColumn0\", \"구마\") fail");

        	rowidx = this.ds00.findRowAs("ConstColumn9", "홍길동3") ;
        	if (rowidx == 2) trace(" ds00.findRowAs(\"ConstColumn9\", \"홍길동3\") success")
        	else trace("ds00.findRowAs(\"ConstColumn9\", \"홍길동30\") fail");

        };

        this.btn09_onclick = function(obj,e)
        {
        	var avg = this.ds00.getCaseAvg("ConstColumn10", "Column1") ;
        	trace(" ds00.getCaseAvg(\"ConstColumn10\", \"Column1\") = " +  avg);

        	avg = this.ds00.getAvg("ConstColumn10") ;
        	trace(" ds00.getAvg(\"ConstColumn10\") = " +  avg);
        };

        this.btn10_onclick = function(obj,e)
        {
        	var cnt = this.ds00.getCaseCount("ConstColumn10");
        	trace(" ds00.getCaseCount(\"ConstColumn10\") = " +  cnt);

        };

        this.btn11_onclick = function(obj,e)
        {
        	var avg = this.ds00.getCaseMin("ConstColumn10", "Column1");
        	trace(" ds00.getCaseMin(\"ConstColumn10\", \"Column1\") = " +  avg);

        	avg = this.ds00.getMin("ConstColumn2");
        	trace(" ds00.getMin(\"ConstColumn2\") = " +  avg);
        };

        this.btn12_onclick = function(obj,e)
        {
        	var avg = this.ds00.getCaseSum("ConstColumn10", "Column1");
        	trace(" ds00.getCaseSum(\"ConstColumn10\", \"Column1\") = " +  avg);

        	avg = this.ds00.getSum("ConstColumn2");
        	trace(" ds00.getSum(\"ConstColumn10\") = " +  avg);
        };

        this.btn13_onclick = function(obj,e)
        {
        	var avg = this.ds00.getCaseMax("ConstColumn10", "Column1");
        	trace(" ds00.getCaseMax(\"ConstColumn10\", \"Column1\") = " +  avg);

        	avg = this.ds00.getMax("ConstColumn2");
        	trace(" ds00.getMax(\"ConstColumn2\") = " +  avg);
        };

        this.Button_onclick = function(obj,e)
        {
        	let syntax = obj.text ;
        	let strfn = "";

        	let newcol, newcol1, newcol2;
        	if (syntax == "addColumnInfo")
        	{
        		//newcol = new nexacro.ColumnInfo() ;
        		newcol = new ColumnInfo() ;
        		newcol.type = "String";
        		newcol.size = 255;
        		newcol.label = "테스트";
        		newcol.usera = "aaa";
        		newcol.userb = undefined;

        		newcol1 = new ColumnInfo() ;
        		newcol1.type = "String";
        		newcol1.size = 255;
        		newcol1.label = "테스트";
        		newcol1.usera = "aaa";
        		newcol1.userb =  1;

        		newcol2 = new ColumnInfo() ;
        		newcol2.type = "String";
        		newcol2.size = 255;
        		newcol2.label = "테스트";
        		newcol2.datapath = "@.test";

        	}

        	let args = eval('this.cbo_' + syntax + '.value');
        	let fnstr = 'this.ds00.' + syntax + '(' + args + ' )';
        	let ret =  eval(fnstr);
        	let ret1;


        	if (syntax == "saveXML")
        	{
        		this.ds01.loadXML(ret) ;
        		ret1 = this.ds01.saveXML("ds00");

        		if (ret == ret1)
        			trace("saveXML ok:");
        		else
        			trace("saveXML fail:");

        		ret1 += "\n" +  this.ds01.saveJSON("ds00");
        		ret1 += "\n" +  this.ds01.saveSSV("ds00");

        		this.grd01.set_formats("");
        		this.grd01.createFormat();

        		this.lst00.set_formats("");
        		this.lst00.createFormat();
        	}
        	else if (syntax == "saveJSON")
        	{
        		this.ds01.loadJSON(ret) ;
        		ret1 = this.ds01.saveJSON("ds00");
        		if (ret == ret1)
        			trace("saveJSON ok:");
        		else
        			trace("saveJSON fail:");
        		ret1 = this.ds01.saveXML("ds00");
        		ret1 += "\n" +  this.ds01.saveJSON("ds00");
        		ret1 += "\n" +  this.ds01.saveSSV("ds00");

        		this.grd01.set_formats("");
        		this.grd01.createFormat();

        		this.lst00.set_formats("");
        		this.lst00.createFormat();

        	}
        	else if (syntax == "saveSSV")
        	{
        		this.ds01.loadSSV(ret) ;
        		ret1 = this.ds01.saveSSV("ds00");
        		if (ret == ret1)
        			trace("saveSSV ok:");
        		else
        			trace("saveSSV fail:");

        		ret1 = this.ds01.saveXML("ds00");
        		ret1 += "\n" +  this.ds01.saveJSON("ds00");
        		ret1 += "\n" +  this.ds01.saveSSV("ds00");

        		this.grd01.set_formats("");
        		this.grd01.createFormat();

        		this.lst00.set_formats("");
        		this.lst00.createFormat();
        	}
        	else if (syntax == "saveCSV")
        	{
        		this.ds01.loadCSV(ret) ;
        		ret1 = this.ds01.saveCSV("ds00");
        		if (ret == ret1)
        			trace("saveSSV ok:");
        		else
        			trace("saveSSV fail:");

        		ret1 = this.ds01.saveXML("ds00");
        		ret1 += "\n" +  this.ds01.saveJSON("ds00");
        		ret1 += "\n" +  this.ds01.saveSSV("ds00");

        		this.grd01.set_formats("");
        		this.grd01.createFormat();

        		this.lst00.set_formats("");
        		this.lst00.createFormat();
        	}
        	else
        	{
        	   if (this.chklog_append.value == true)
        			this.txa00.value = "" ;

        	   if (this.chklog.value == true)
        	   {
        	       this.txa00.value += "\n" + fnstr + ":" + ret;

        	   }
        	   else
        	      trace(syntax + ":" + ret);

        		if (this.chklog_showsavexml.value == true)
        		{
        		   this.txa_savexml.value = "";
        		   this.txa_savexml.value  = this.ds00.saveXML("ds00");
        		}

        		if (this.chklog_showsavejson.value == true)
        		{
        		   this.txa_savejson.value = "";
        		   this.txa_savejson.value  = this.ds00.saveJSON("ds00");
        		}


        		if (this.chklog_showsavessv.value == true)
        		{
        		   this.txa_savessv.value = "";
        		   this.txa_savessv.value  = this.ds00.saveSSV("ds00");
        		}

        		if (this.chklog_showsavecsv.value == true)
        		{
        		   this.txa_savecsv.value = "";
        		   this.txa_savecsv.value  = this.ds00.saveCSV("ds00");
        		}

        		return ;
        	}

        	trace(ret);
        	trace(ret1);

        	/*
        	switch(syntax)
        	{
        	 case   "addConstColumn" : strfn = "this.ds00.addConstColumn(" + args + " )" ; break;
        	 case "addColumn" :        strfn = "this.ds00.addConstColumn(" + args + " )" ; break;
        	 case "getConstColProp" :  strfn = "this.ds00.addConstColumn(" + args + " )" ; break;
        	 case "getConstColLabel" : strfn = "this.ds00.addConstColumn(" + args + " )"; break;
        	 case  "getColumnInfo" : strfn = "this.ds00.addConstColumn(" + args + " )"; break;
        	 case "setConstColLabel" : strfn = "this.ds00.addConstColumn(" + args + " )"; break;
        	 case "setConstColProp" : strfn = "this.ds00.addConstColumn(" + args + " )"; break;
        	case  "loadXML" : strfn = "this.ds00.addConstColumn(" + args + " )"; break;
        	case  "loadSSV" : break;
        	 case "loadJSON" : break;
        	 case "saveSSV" : break;
        	 case  "saveXML" : break;
        	 case "saveJSON" : break;
        	 default :

        	}

        	if (strfn)
        	 eval(strfn);*/
        };

        this.div00_btn00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div00.form.btn13.addEventHandler("onclick",this.Button_onclick,this);
            this.div00.form.btn01_00.addEventHandler("onclick",this.Button_onclick,this);
            this.div00.form.btn01_00_01.addEventHandler("onclick",this.Button_onclick,this);
            this.div00.form.btn09.addEventHandler("onclick",this.Button_onclick,this);
            this.div00.form.btn10.addEventHandler("onclick",this.Button_onclick,this);
            this.div00.form.btn01_00_00.addEventHandler("onclick",this.Button_onclick,this);
            this.div00.form.btn08.addEventHandler("onclick",this.Button_onclick,this);
            this.div00.form.btn08_00.addEventHandler("onclick",this.Button_onclick,this);
            this.div00.form.btn02_01.addEventHandler("onclick",this.Button_onclick,this);
            this.div00.form.btn02_00_00_00.addEventHandler("onclick",this.Button_onclick,this);
            this.div00.form.btn02_00_01.addEventHandler("onclick",this.Button_onclick,this);
            this.div00.form.btn02_01_00.addEventHandler("onclick",this.Button_onclick,this);
            this.div00.form.btn02_00_00.addEventHandler("onclick",this.Button_onclick,this);
            this.div00.form.btn02.addEventHandler("onclick",this.Button_onclick,this);
            this.div00.form.btn02_00.addEventHandler("onclick",this.Button_onclick,this);
            this.div00.form.btn00.addEventHandler("onclick",this.Button_onclick,this);
        };

        this.loadIncludeScript("ConstColumn_userprop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
