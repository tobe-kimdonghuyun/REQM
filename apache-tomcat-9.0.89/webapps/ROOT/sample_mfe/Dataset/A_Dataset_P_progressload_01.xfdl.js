(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TA_Dataset_P_progressload_01_v2");
            this.set_titletext("TA_Dataset_P_progressload_01_v2");
            this.getSetter("classname").set("test01");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(440,560);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("Dataset00", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_progressload("true");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents({});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("Dataset01", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_progressload("true");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents({});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("ds_url", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "url","size" : "256","type" : "STRING"}]},"Rows" : [{"url" : "http://172.10.12.205:8080/RP_79012_transaction_test.jsp"},{"url" : "http://172.10.12.180:8080/JSP/transaction_test.jsp"},{"url" : ""},{"url" : ""},{"url" : ""}]});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("ds_inData", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "RowCnt","size" : "256","type" : "STRING"},{"id" : "Column0","size" : "256","type" : "STRING"},{"id" : "Column1","size" : "256","type" : "STRING"},{"id" : "Column2","size" : "256","type" : "STRING"},{"id" : "Column3","size" : "256","type" : "STRING"},{"id" : "Column4","size" : "256","type" : "STRING"},{"id" : "Column5","size" : "256","type" : "STRING"},{"id" : "Column6","size" : "256","type" : "STRING"},{"id" : "Column7","size" : "256","type" : "STRING"},{"id" : "Column8","size" : "256","type" : "STRING"},{"id" : "Column9","size" : "256","type" : "STRING"},{"id" : "Column10","size" : "256","type" : "STRING"},{"id" : "Column11","size" : "256","type" : "STRING"},{"id" : "Column12","size" : "256","type" : "STRING"},{"id" : "Column13","size" : "256","type" : "STRING"},{"id" : "Column14","size" : "256","type" : "STRING"},{"id" : "Column15","size" : "256","type" : "STRING"},{"id" : "Column16","size" : "256","type" : "STRING"},{"id" : "Column17","size" : "256","type" : "STRING"},{"id" : "Column18","size" : "256","type" : "STRING"},{"id" : "Column19","size" : "256","type" : "STRING"},{"id" : "Column20","size" : "256","type" : "STRING"},{"id" : "Column21","size" : "256","type" : "STRING"},{"id" : "Column22","size" : "256","type" : "STRING"},{"id" : "Column23","size" : "256","type" : "STRING"},{"id" : "Column24","size" : "256","type" : "STRING"},{"id" : "Column25","size" : "256","type" : "STRING"},{"id" : "Column26","size" : "256","type" : "STRING"},{"id" : "Column27","size" : "256","type" : "STRING"},{"id" : "Column28","size" : "256","type" : "STRING"},{"id" : "Column29","size" : "256","type" : "STRING"},{"id" : "Column30","size" : "256","type" : "STRING"},{"id" : "Column31","size" : "256","type" : "STRING"},{"id" : "Column32","size" : "256","type" : "STRING"},{"id" : "Column33","size" : "256","type" : "STRING"},{"id" : "Column34","size" : "256","type" : "STRING"},{"id" : "Column35","size" : "256","type" : "STRING"},{"id" : "Column36","size" : "256","type" : "STRING"},{"id" : "Column37","size" : "256","type" : "STRING"},{"id" : "Column38","size" : "256","type" : "STRING"},{"id" : "Column39","size" : "256","type" : "STRING"},{"id" : "Column40","size" : "256","type" : "STRING"},{"id" : "Column41","size" : "256","type" : "STRING"},{"id" : "Column42","size" : "256","type" : "STRING"},{"id" : "Column43","size" : "256","type" : "STRING"},{"id" : "Column44","size" : "256","type" : "STRING"},{"id" : "Column45","size" : "256","type" : "STRING"},{"id" : "Column46","size" : "256","type" : "STRING"},{"id" : "Column47","size" : "256","type" : "STRING"},{"id" : "Column48","size" : "256","type" : "STRING"}]},"Rows" : [{"RowCnt" : "1","Column0" : "あいカナぁ愛","Column1" : "あいカナぁ愛","Column2" : "가나뷀뷀붸루베루벱뷃","Column3" : "あいカナぁ愛","Column4" : "가나뷀뷀붸루베루벱뷃","Column5" : "あいカナぁ愛","Column6" : "가나뷀뷀붸루베루벱뷃","Column7" : "가나뷀뷀붸루베루벱뷃","Column8" : "あいカナぁ愛","Column9" : "あいカナぁ愛","Column10" : "가나뷀뷀붸루베루벱뷃","Column11" : "あいカナぁ愛","Column12" : "가나뷀뷀붸루베루벱뷃","Column13" : "あいカナぁ愛","Column14" : "가나뷀뷀붸루베루벱뷃","Column15" : "가나뷀뷀붸루베루벱뷃","Column16" : "あいカナぁ愛","Column17" : "あいカナぁ愛","Column18" : "가나뷀뷀붸루베루벱뷃","Column19" : "あいカナぁ愛","Column20" : "가나뷀뷀붸루베루벱뷃","Column21" : "あいカナぁ愛","Column22" : "가나뷀뷀붸루베루벱뷃","Column23" : "가나뷀뷀붸루베루벱뷃","Column24" : "あいカナぁ愛","Column25" : "あいカナぁ愛","Column26" : "가나뷀뷀붸루베루벱뷃","Column27" : "あいカナぁ愛","Column28" : "가나뷀뷀붸루베루벱뷃","Column29" : "あいカナぁ愛","Column30" : "가나뷀뷀붸루베루벱뷃","Column31" : "가나뷀뷀붸루베루벱뷃","Column32" : "あいカナぁ愛","Column33" : "あいカナぁ愛","Column34" : "가나뷀뷀붸루베루벱뷃","Column35" : "あいカナぁ愛","Column36" : "가나뷀뷀붸루베루벱뷃","Column37" : "あいカナぁ愛","Column38" : "가나뷀뷀붸루베루벱뷃","Column39" : "가나뷀뷀붸루베루벱뷃","Column40" : "あいカナぁ愛","Column41" : "あいカナぁ愛","Column42" : "가나뷀뷀붸루베루벱뷃","Column43" : "あいカナぁ愛","Column44" : "가나뷀뷀붸루베루벱뷃","Column45" : "あいカナぁ愛","Column46" : "가나뷀뷀붸루베루벱뷃","Column47" : "가나뷀뷀붸루베루벱뷃","Column48" : "あいカナぁ愛"},{"RowCnt" : "2","Column0" : "aaa1","Column1" : "aaa2","Column2" : "한글1","Column3" : "bbb1","Column4" : "bbb2","Column5" : "나라2","Column6" : "특수~#","Column7" : "문자&*","Column8" : "aaa1","Column9" : "aaa2","Column10" : "한글1","Column11" : "bbb1","Column12" : "bbb2","Column13" : "나라2","Column14" : "특수~#","Column15" : "문자&*","Column16" : "aaa1","Column17" : "aaa2","Column18" : "한글1","Column19" : "bbb1","Column20" : "bbb2","Column21" : "나라2","Column22" : "특수~#","Column23" : "문자&*","Column24" : "aaa1","Column25" : "aaa2","Column26" : "한글1","Column27" : "bbb1","Column28" : "bbb2","Column29" : "나라2","Column30" : "특수~#","Column31" : "문자&*","Column32" : "aaa1","Column33" : "aaa2","Column34" : "한글1","Column35" : "bbb1","Column36" : "bbb2","Column37" : "나라2","Column38" : "특수~#","Column39" : "문자&*","Column40" : "aaa1","Column41" : "aaa2","Column42" : "한글1","Column43" : "bbb1","Column44" : "bbb2","Column45" : "나라2","Column46" : "특수~#","Column47" : "문자&*","Column48" : "aaa1"}]});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("ds_in", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "RowCnt","size" : "256","type" : "STRING"},{"id" : "Column0","size" : "256","type" : "STRING"},{"id" : "Column1","size" : "256","type" : "STRING"},{"id" : "Column2","size" : "256","type" : "STRING"},{"id" : "Column3","size" : "256","type" : "STRING"},{"id" : "Column4","size" : "256","type" : "STRING"},{"id" : "Column5","size" : "256","type" : "STRING"},{"id" : "Column6","size" : "256","type" : "STRING"},{"id" : "Column7","size" : "256","type" : "STRING"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Static("Static00","8","90","718","136",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid00","12","315","714","197",null,null,null,null,null,null,this);
            obj.set_autofittype("none");
            obj.set_binddataset("Dataset00");
            obj.set_cellsizingtype("col");
            obj.set_taborder("0");
            obj.getSetter("useinputpanel").set("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"RowCnt\"/><Cell col=\"1\" text=\"Column0\"/><Cell col=\"2\" text=\"Column1\"/><Cell col=\"3\" text=\"Column2\"/><Cell col=\"4\" text=\"Column3\"/><Cell col=\"5\" text=\"Column4\"/><Cell col=\"6\" text=\"Column5\"/><Cell col=\"7\" text=\"Column6\"/><Cell col=\"8\" text=\"Column7\"/></Band><Band id=\"body\"><Cell text=\"bind:RowCnt\"/><Cell col=\"1\" text=\"bind:Column0\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column4\"/><Cell col=\"6\" text=\"bind:Column5\"/><Cell col=\"7\" text=\"bind:Column6\"/><Cell col=\"8\" text=\"bind:Column7\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid01","12","544","714","216",null,null,null,null,null,null,this);
            obj.set_binddataset("Dataset01");
            obj.set_taborder("1");
            obj.getSetter("useinputpanel").set("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"RowCnt\"/><Cell col=\"1\" disptype=\"normal\" text=\"Column0\"/><Cell col=\"2\" disptype=\"normal\" text=\"Column1\"/><Cell col=\"3\" disptype=\"normal\" text=\"Column2\"/><Cell col=\"4\" disptype=\"normal\" text=\"Column3\"/><Cell col=\"5\" disptype=\"normal\" text=\"Column4\"/><Cell col=\"6\" disptype=\"normal\" text=\"Column5\"/><Cell col=\"7\" disptype=\"normal\" text=\"Column6\"/><Cell col=\"8\" disptype=\"normal\" text=\"Column7\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:RowCnt\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:Column0\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:Column1\"/><Cell col=\"3\" disptype=\"normal\" text=\"bind:Column2\"/><Cell col=\"4\" disptype=\"normal\" text=\"bind:Column3\"/><Cell col=\"5\" disptype=\"normal\" text=\"bind:Column4\"/><Cell col=\"6\" disptype=\"normal\" text=\"bind:Column5\"/><Cell col=\"7\" disptype=\"normal\" text=\"bind:Column6\"/><Cell col=\"8\" disptype=\"normal\" text=\"bind:Column7\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_url","59","114","605","26",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_value("servicejsp::TA_Dataset_P_progressload_01_v2.jsp");
            obj.set_text("servicejsp::TA_Dataset_P_progressload_01_v2.jsp");
            this.addChild(obj.name, obj);

            obj = new nexacro.Radio("Radio00","14","142","320","26",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_columncount("4");
            obj.set_datacolumn("datacolumn");
            obj.set_taborder("3");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents({"ColumnInfo" : {"Column" : [{"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "XML","datacolumn" : "XML"},{"codecolumn" : "CSV","datacolumn" : "CSV"},{"codecolumn" : "SSV","datacolumn" : "SSV"},{"codecolumn" : "BINARY","datacolumn" : "BINARY"}]});
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_text("SSV");
            obj.set_value("SSV");
            obj.set_index("2");
            this.addChild(obj.name, obj);

            obj = new nexacro.CheckBox("CheckBox00","361","142","70","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("async");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new nexacro.CheckBox("CheckBox01","441","142","94","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("compress");
            obj.set_value("false");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static01","19","116","38","25",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("URL :");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_showPop","670","114","34","25",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("▼");
            this.addChild(obj.name, obj);

            obj = new nexacro.PopupDiv("PopupDiv00","773","16","645","514",null,null,null,null,null,null,this);
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_add","6","8","27","15",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("0");
            obj.set_text("add");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_ins","33","8","27","15",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("1");
            obj.set_text("ins");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00","614","8","24","16",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("2");
            obj.set_text("x");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_del","61","8","27","15",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("3");
            obj.set_text("del");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid02","5","28","634","480",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_autofittype("col");
            obj.set_binddataset("ds_url");
            obj.set_taborder("4");
            obj.getSetter("useinputpanel").set("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"url\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:url\"/></Band></Format></Formats>");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00","515","174","109","49",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("RUN");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static02","19","290","181","25",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("firstrowcount :");
            obj.getSetter("wordwrap").set("false");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static03","12","519","246","25",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("firstrowcount :");
            obj.getSetter("wordwrap").set("false");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("Edit01","100","293","84","20",null,null,null,null,null,null,this);
            obj.set_inputmode("normal");
            obj.set_inputtype("number");
            obj.set_taborder("21");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("Edit02","93","522","84","20",null,null,null,null,null,null,this);
            obj.set_inputtype("number");
            obj.set_taborder("22");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static05","27","199","73","26",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("row count");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static06","639","289","81","26",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("Dataset00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static07","639","519","81","26",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("Dataset01");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid02","7","37","720","78",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_inData");
            obj.set_taborder("29");
            obj.getSetter("useinputpanel").set("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"RowCnt\"/><Cell col=\"1\" text=\"Column0\"/><Cell col=\"2\" text=\"Column1\"/><Cell col=\"3\" text=\"Column2\"/><Cell col=\"4\" text=\"Column3\"/><Cell col=\"5\" text=\"Column4\"/><Cell col=\"6\" text=\"Column5\"/><Cell col=\"7\" text=\"Column6\"/><Cell col=\"8\" text=\"Column7\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:RowCnt\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:Column0\"/><Cell col=\"2\" edittype=\"normal\" text=\"bind:Column1\"/><Cell col=\"3\" edittype=\"normal\" text=\"bind:Column2\"/><Cell col=\"4\" edittype=\"normal\" text=\"bind:Column3\"/><Cell col=\"5\" edittype=\"normal\" text=\"bind:Column4\"/><Cell col=\"6\" edittype=\"normal\" text=\"bind:Column5\"/><Cell col=\"7\" edittype=\"normal\" text=\"bind:Column6\"/><Cell col=\"8\" edittype=\"normal\" text=\"bind:Column7\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.CheckBox("CheckBox02","22","175","118","20",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("parameters");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new nexacro.Radio("Radio01","126","178","378","18",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_columncount("3");
            obj.set_datacolumn("datacolumn");
            obj.set_taborder("31");
            var Radio01_innerdataset = new nexacro.NormalDataset("Radio01_innerdataset", obj);
            Radio01_innerdataset._setContents({"ColumnInfo" : {"Column" : [{"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "null data"},{"codecolumn" : "1","datacolumn" : "단일 DataSet"},{"codecolumn" : "2","datacolumn" : "복수 DataSet"}]});
            obj.set_innerdataset(Radio01_innerdataset);
            obj.set_value("1");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static04","9","170","715","1",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static08","19","265","110","25",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("svr_param1(form) :");
            obj.getSetter("wordwrap").set("false");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static09","9","282","731","1",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_param1","138","268","191","19",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_param2","466","268","215","19",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static10","355","265","110","25",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("svr_param2(env) :");
            obj.getSetter("wordwrap").set("false");
            this.addChild(obj.name, obj);

            obj = new nexacro.MaskEdit("medt_rowcount","101","204","116","18",null,null,null,null,null,null,this);
            obj.getSetter("mask").set("#,0");
            obj.set_taborder("39");
            obj.set_type("number");
            obj.set_value("30000");
            this.addChild(obj.name, obj);

            obj = new nexacro.Combo("Combo00","229","202","92","20",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_taborder("40");
            var Combo00_innerdataset = new nexacro.NormalDataset("Combo00_innerdataset", obj);
            Combo00_innerdataset._setContents({"ColumnInfo" : {"Column" : [{"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "1000","datacolumn" : "1천건"},{"codecolumn" : "10000","datacolumn" : "1만건"},{"codecolumn" : "30000","datacolumn" : "3만건"},{"codecolumn" : "50000","datacolumn" : "5만건"},{"codecolumn" : "100000","datacolumn" : "10만건"},{"codecolumn" : "200000","datacolumn" : "20만건"},{"codecolumn" : "300000","datacolumn" : "30만건"},{"codecolumn" : "500000","datacolumn" : "50만건"},{"codecolumn" : "700000","datacolumn" : "70만건"},{"codecolumn" : "800000","datacolumn" : "80만건"},{"codecolumn" : "900000","datacolumn" : "90만건"},{"codecolumn" : "1000000","datacolumn" : "100만건"}]});
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_text("1천건");
            obj.set_value("1000");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01","645","156","72","16",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("처리시간");
            this.addChild(obj.name, obj);

            obj = new nexacro.CheckBox("CheckBox03","162","230","114","26",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("use firefirstrow");
            obj.set_value("false");
            this.addChild(obj.name, obj);

            obj = new nexacro.CheckBox("CheckBox04","282","232","78","26",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("no bind");
            obj.set_value("false");
            this.addChild(obj.name, obj);

            obj = new nexacro.CheckBox("CheckBox05","20","228","130","26",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("use progressdata");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("TextArea00","643","174","78","86",null,null,null,null,null,null,this);
            obj.set_background("#33333333");
            obj.set_taborder("35");
            this.addChild(obj.name, obj);

            obj = new nexacro.CheckBox("CheckBox06","368","224","167","21",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("Dataset00.progressload");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new nexacro.CheckBox("CheckBox07","368","245","167","21",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("Dataset01.progressload");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static11","334","198","117","27",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00","319","1","107","35",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("Embedded Test");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this.PopupDiv00.form
            obj = new nexacro.Layout("default","",0,0,this.PopupDiv00.form,function(p){});
            this.PopupDiv00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new nexacro.Layout("default","",440,560,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("A_Dataset_P_progressload_01.xfdl","lib::libCommon.xjs");
        this.addIncludeScript("A_Dataset_P_progressload_01.xfdl","libevent::event.util.xjs");
        this.registerScript("A_Dataset_P_progressload_01.xfdl", function(nexacro, system, trace, environment, application) {
        /***********************************************************************
        * 설명      : Dataset progressload Property
        ***********************************************************************
        *     수정일     작성자   내용
        ***********************************************************************
        *     2019.03.25  김형철   최초 작성
        ***********************************************************************
        */

        this.executeIncludeScript("lib::libCommon.xjs"); /*include "lib::libCommon.xjs"*/;
        this.executeIncludeScript("libevent::event.util.xjs"); /*include "libevent::event.util.xjs"*/;
        var tapi = this.gfnLoadTestAPI(0.71);

        /***********************************************************************
        * 01: Form 변수 선언부
        ***********************************************************************/

        /***********************************************************************
        * 02 : Test Case, Validator, Validation Case 선언부
        ***********************************************************************/
        var tc1  = {
        	description: "Dataset progressload Property Test",
        	//-------------- beign user defined section
        	userdata : {
        		cntOnload : 0,			//onload 이벤트 count 용
        		chkChunked : "",		//chunked 확인용
        		eventChkList1 : [],		//onload 이벤트 확인용
        		result : [],			//task 리턴값
        	},
        	//--------------  end  user defined section
        	initialize: function() {
        	},
        	checker : {},
        	validator : {},
        	task : {},
        	finalize : function() {
        	}
        };

        tc1.task['progressload'] = function(bPLoad) {
        	// 대기 상태 시작
        	var vdAdt = tapi.getVdAdaptor();
        	//IE의 경우 트랜잭션 후 로딩 속도가 느려 15초로줌...15초 되기전 로드 완료되면 풀어주고 있음
        	vdAdt.beginWait(15000);

        	this.Dataset00.set_progressload(bPLoad); // rp80607
        	this.Dataset01.set_progressload(bPLoad); // rp80607

        	var _use_firefirstcount = this.CheckBox03.value;
        	nexacro._use_firefirstcount = _use_firefirstcount; // rp80607

        	var _use_progressdata = this.CheckBox05.value;
        	nexacro._use_progress_data = _use_progressdata; // rp80607

        	var no_bind = this.CheckBox04.value;
        	if (no_bind)
        	{
        		this.Grid00.set_binddataset("");
        		this.Grid01.set_binddataset("");
        	}
        	else
        	{
        		this.Grid00.set_binddataset("Dataset00");  // rp80607
        		this.Grid01.set_binddataset("Dataset01");  // rp80607
        	}
        	this.Dataset00.clear(); // rp80607
        	this.Dataset01.clear(); // rp80607
        	//this.Dataset00.clearData(); // rp80607
        	//this.Dataset01.clearData(); // rp80607

        	var svc_url = this.edt_url.value;
        	var async = this.CheckBox00.value;
        	var compress = this.CheckBox01.value;

        	var firstrowcount1 = this.Edit01.value;
        	var firstrowcount2 = this.Edit02.value;

        	this.Dataset00.set_firefirstcount(firstrowcount1);  // rp80607
        	this.Dataset01.set_firefirstcount(firstrowcount2);  // rp80607

        	var strParams = "type=" + this.Radio00.value + " ";
        		strParams += "rowcount=" + this.medt_rowcount.value + " ";
        		strParams += "firstrowcount1=" + firstrowcount1 + " ";
        		strParams += "firstrowcount2=" + firstrowcount2 + " ";
        		strParams += "compress=" + this.CheckBox01.value + " ";
        		strParams += "parameters=" + this.CheckBox02.value + " ";
        		strParams += "receiveDsCount=" + this.Radio01.value;
        		//strParams += "receiveDsCount=10000";


        	var out_ds_str = "";

        	if (this.Radio01.value == "1")
        		out_ds_str = "Dataset00=outds00";
        	else if (this.Radio01.value == "2")
        		out_ds_str = "Dataset00=outds00 Dataset01=outds01";

        	this.svr_param1 = "";
        	nexacro.setEnvironmentVariable("svr_param2","");

            var date = new Date();
            this.startTime = date.getTime();
            this.ds_in.clearData();
            this.ds_in.copyRow(this.ds_in.addRow(),this.ds_inData,this.ds_inData.rowposition);
        	this.transaction("test1",svc_url, "ds_in=ds_in",out_ds_str,strParams,"fncallback",async);
        };

        tc1.task['eventChk'] = function() {
        	var result = [];

        	result.push(tc1.userdata.eventChkList1);
        	result.push(tc1.userdata.chkChunked);

        	return result;
        };

        tc1.checker['equal'] = function(alResultValues, alExpectedValues) {
        	var chk = true;
        	var chk = tapi.checkEqual(this, alResultValues, alExpectedValues);

        	return chk;
        };

        tc1.validator ['tc1_vd1'] = {
        	description: "progressload(bPLoad) 수행",
        	autoTaskFlow : ["progressload", "eventChk"],
        	vcinfo : {
        		argType : tapi.VCT_ARG_LIST,
        		args : [
        				//vc : bPLoad, ev : onload 이벤트 정보, 발생 횟수(CheckedData 마지막 1번 수신 시 : true, 여러번 수신시 : flase)
        				{vc: [[tapi.VBT_NORMAL,true]],  ev: [1,0,"true"]},
        				{vc: [[tapi.VBT_NORMAL,false]],  ev: [0,"false"]},
        				//시간이 오래걸려 valida 값만 하는게 더 효율적으로 보임
        // 				{vc: [[tapi.VBT_NORMAL,1]],  ev: [1,0,"true"]},
        // 				{vc: [[tapi.VBT_NORMAL,0]],  ev: [0,"false"]},
        // 				{vc: [[tapi.VBT_EXCEPTION,"true"]],  ev: [1,0,"true"]},
        // 				{vc: [[tapi.VBT_EXCEPTION,"false"]],  ev: [0,"false"]},
        // 				{vc: [[tapi.VBT_EXCEPTION,"test"]],  ev: [1,0,"true"]},
        // 				{vc: [[tapi.VBT_EXCEPTION,-1]],  ev: [1,0,"true"]},
        // 				{vc: [[tapi.VBT_EXCEPTION,2]],  ev: [1,0,"true"]},
        		]
        	},
        	prepare: function () {
        		tc1.userdata.cntOnload = 0;
        		tc1.userdata.chkChunked = "";
        		tc1.userdata.eventChkList1 = [];
        		tc1.userdata.result = [];
        	},
        	run: function () {
        		var vdAdt = tapi.getVdAdaptor();
        		var taskName = vdAdt.getTaskFlowName();

        		var rtn;
        		var bPLoad = vdAdt.getValue(0);

        		switch(taskName) {
        		case "progressload":
        			tc1.task['progressload'].call(this, bPLoad);
        			break;
        		case "eventChk":
        			rtn = tc1.task['eventChk'].call(this);
        			tc1.userdata.result.push(rtn);
        			break;
        		}

        		return tc1.userdata.result;
        	},
        	check: function (resultValue, expectedValue) {
        		var chk = tc1.checker['equal'].call(this, resultValue, expectedValue);
        		return chk;
        	},
        	teardown: function () {
        	}
        };

        /***********************************************************************
        * 03 : 생성된 Test Case
        ***********************************************************************/
        var tcInfo = {
        	// tcInfo.tcList : 모든 browser에서 실행할 tc 목록
        	tcList : [tc1],
        	// tcInfo.deny : 특정 browser에서 제외할 tc 목록(browser : 'nexacro'/'IE'/'Chrome'/'Gecko'/'Safari')
        	deny : [
        			  //{ tc: tc3, browser: ['IE'] },
        	],
        	// tcInfo.allow : 특정 browser에서 추가할 tc 목록(browser : 'nexacro'/'IE'/'Chrome'/'Gecko'/'Safari')
        	allow : [
        			 //{ tc: tc2, browser: ['nexacro'] },
        	],
        	// tcInfo.adjustTcInfo : browser 버전 및 os 환경에 따른 실행 여부를 결정할 tc 목록
           adjustTcInfo : function() {
        	}
        };

        /***********************************************************************
        * 04 : 화면 로드 시 작업, gfnInit는 필수
        ***********************************************************************/
        this.TA_Dataset_P_progressload_01_v2_onload = function(obj,e)
        {
           // debug mode : log level에서 지정한 모든 메시지 제공
           tapi.systemDebugOn();          // Runner를 debug mode로 실행
           tapi.debugOn();                  // 응용을 debug mode로 실행
           // Runner Load
           tapi.init(tcInfo, this);
          	//LogViewer 미팝업용
        	var runner = tapi.getRunner();

        	if (runner.isTestMode() == false){
         		var logger = new tapi.ConsoleLogger();
         		runner.setLogger(logger);
        	}
        };

        /***********************************************************************
        * 05 : Runner API, Application Runner 띄우지 않고 실행하기 위함
        ***********************************************************************/
        this.btn00_onclick = function(obj,e)
        {
        	// Runner 획득
           var runner = tapi.getRunner();
           //------------ 선택 작업 Begin ------------------------------
           // 메시지를 log로 기록할 수준 지정
        	// log level = [ FATAL | ERROR | WARN | INFO | DEBUG | TRACE | TRACE2 ]
        	//runner.setLogLevel(tapi. INFO);
           //------------ 선택 작업 End ------------------------------
           runner.executeTest();
        };

        /***********************************************************************
        * 06 : 이벤트 선언부
        ***********************************************************************/
        /***********************************************************************
        * onload
        ***********************************************************************/
        this.Dataset00_onload = function(obj, e)
        {
        	tc1.userdata.cntOnload++;

        	if (e.reason == 0)
        	{
        		//trace("Dataset01 onload : rowcount [" + obj.rowcount + "] reason [" + e.reason + "]");

        		tc1.userdata.eventChkList1.push(e.reason);

        		if(tc1.userdata.cntOnload > 2)
        			tc1.userdata.chkChunked = "true";
        		else
        			tc1.userdata.chkChunked = "false";


        		//대기상태 해제
        		var vdAdt = tapi.getVdAdaptor();
        		vdAdt.releaseWait();
        	}
        	else
        	{
        		//trace("Dataset00 onload : rowcount [" + obj.rowcount + "] reason [" + e.reason + "]");

        		if(tc1.userdata.cntOnload == 1)
        		{
        			tc1.userdata.eventChkList1.push(e.reason);
        		}
        	}
        }
        /***********************************************************************
        * 07 : 사용자 정의 함수 선언부
        ***********************************************************************/
        this.svr_param1 = "";
        this.startTime = null;
        this.endTime = null;

        this.fncallback = function(sid,errcd,errmsg)
        {
        	var date = new Date();
            this.endTime = date.getTime();
            var p_time = (this.endTime - this.startTime)/1000;

        	this.TextArea00.set_value(p_time +"\n"+(this.TextArea00.value ? this.TextArea00.value : ""));

        	//trace(sid + ":" + errcd + ":" + errmsg);
        	this.edt_param1.set_value(this.svr_param1);
        	var env = nexacro.getEnvironment();
        	this.edt_param2.set_value(nexacro.getEnvironmentVariable("svr_param2"));
        }

        this.PopupDiv00_btn_add_onclick = function(obj,  e)
        {
        	this.Dataset02.addRow();
        }

        this.PopupDiv00_btn_ins_onclick = function(obj,  e)
        {
        	this.Dataset02.insertRow(this.Dataset02.rowposition);
        }

        this.PopupDiv00_btn_del_onclick = function(obj,  e)
        {
        	this.Dataset02.deleteRow(this.Dataset02.rowposition);
        }

        this.PopupDiv00_Button00_onclick = function(obj,  e)
        {
        	this.PopupDiv00.closePopup();
        }

        this.btn_showPop_onclick = function(obj,  e)
        {
        	var x = system.clientToScreenX(this,0);
        	var y = system.clientToScreenY(this,0);
        	this.PopupDiv00.trackPopup(x,y);
        }

        this.Dataset01_onload = function(obj, e)
        {
        	if (e.reason == 0)
        		trace("Dataset01 onload : rowcount [" + obj.rowcount + "] reason [" + e.reason + "]");
        	else
        		trace("Dataset00 onload : rowcount [" + obj.rowcount + "] reason [" + e.reason + "]");
        }

        this.PopupDiv00_Grid02_oncelldblclick = function(obj, e)
        {
        	var val = this.ds_url.getColumn(e.row,0);
        	this.edt_url.set_value(val);
        	this.PopupDiv00.closePopup();

        }

        this.Combo00_onitemchanged = function(obj, e)
        {
        	this.medt_rowcount.set_value(e.postvalue);
        	this.Static11.set_text((+(e.postvalue) * 9)+" cells");
        }

        this.Button01_onclick = function(obj,  e)
        {
        	this.TextArea00.set_value("");
        }

        this.test01_onload = function(obj,e)
        {
        	this.Static11.set_text((+(this.Combo00.value) * 9)+" cells");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.TA_Dataset_P_progressload_01_v2_onload,this);
            this.btn_showPop.addEventHandler("onclick",this.btn_showPop_onclick,this);
            this.PopupDiv00.form.btn_add.addEventHandler("onclick",this.PopupDiv00_btn_add_onclick,this);
            this.PopupDiv00.form.btn_ins.addEventHandler("onclick",this.PopupDiv00_btn_ins_onclick,this);
            this.PopupDiv00.form.Button00.addEventHandler("onclick",this.PopupDiv00_Button00_onclick,this);
            this.PopupDiv00.form.btn_del.addEventHandler("onclick",this.PopupDiv00_btn_del_onclick,this);
            this.PopupDiv00.form.Grid02.addEventHandler("oncelldblclick",this.PopupDiv00_Grid02_oncelldblclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Combo00.addEventHandler("onitemchanged",this.Combo00_onitemchanged,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.Dataset00.addEventHandler("onload",this.Dataset00_onload,this);
            this.Dataset01.addEventHandler("onload",this.Dataset01_onload,this);
        };

        this.loadIncludeScript("A_Dataset_P_progressload_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
