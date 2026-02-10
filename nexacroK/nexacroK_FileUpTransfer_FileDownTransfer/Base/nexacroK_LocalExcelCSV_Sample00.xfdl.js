(function()
{
    return function(nexacro, system, trace)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("testExcel");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,1150);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("ds_test", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "Column0","size" : "256","type" : "STRING"},{"id" : "Column1","size" : "256","type" : "STRING"},{"id" : "Column2","size" : "256","type" : "STRING"}]},"Rows" : [{"Column0" : "test1","Column1" : "test11","Column2" : "test111"},{"Column0" : "test2","Column1" : "test22","Column2" : "test222"},{"Column0" : "test3","Column1" : "test33","Column2" : "test333"},{"Column0" : "test4","Column1" : "test44","Column2" : "test444"}]});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("ds_localCSV", this);
            obj._setContents({});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("ds_localTXT", this);
            obj._setContents({});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("ds_localTXT00", this);
            obj._setContents({});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Grid("Grid00","61","7","480","210",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_test");
            obj.set_taborder("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btnImport","576","80","150","52",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("importCSV - XENI");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btnImport00","731","80","140","52",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("exportCSV - XENI");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btnClear","690","10","91","52",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("clear");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btnImport00_00","708","228","140","52",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("exportCSV - Local");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btnImport01","553","228","150","52",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("importCSV - Local");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid01","63","228","477","285",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_localCSV");
            obj.set_taborder("6");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid02","63","523","477","280",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_localTXT");
            obj.set_taborder("7");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btnImport00_00_00","707","526","140","52",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("exportTXT - Local");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btnImport01_00","552","526","150","52",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("importTXT - Local");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","552","285","157","31",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("결과값");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00","709","286","138","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("clear text");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00_00","709","583","138","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("clear text");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00_00","552","582","157","31",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("결과값");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("TextArea00","559","317","289","186",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("TextArea00_00","559","617","289","186",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid03","70","820","477","270",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_localTXT00");
            obj.set_taborder("16");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01","560","865","142","58",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("importTXT -seperate");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button02","713","865","134","58",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("exportTXT - seperate");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00_00_00","560","930","125","31",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("결과값");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00_00_00","712","930","138","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("clear text");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("TextArea00_00_00","563","971","289","186",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            this.addChild(obj.name, obj);

            obj = new nexacro.Combo("Combo00","557","822","291","38",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_taborder("22");
            var Combo00_innerdataset = new nexacro.NormalDataset("Combo00_innerdataset", obj);
            Combo00_innerdataset._setContents({"ColumnInfo" : {"Column" : [{"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"datacolumn" : "0x27","codecolumn" : "0"},{"datacolumn" : "0x09","codecolumn" : "1"}]});
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","",1280,1150,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("nexacroK_LocalExcelCSV_Sample00.xfdl", function(nexacro, system, trace) {
        //서버 Xeni Excel 관련 servlet mapping 주소
        this.url = "http://172.10.12.45:9090/NexacroN_XENI_JAVA_20251024(1.5.11)/XExportImport";
        //Export에 사용할 ExcelExportObject 변수생성
        this.objExcelExport = null;
        this.objExcelImport = null;
        this.localExcelExport = null;
        this.localExcelImport = null;
        this.localExcelExportTXT = null;
        this.localExcelImportTXT = null;
        this.btnClear_onclick = function(obj,e)
        {
        	this.ds_test.clearData();
        };

        this.btnImport_onclick = function(obj,e)
        {

        	this.objExcelImport = new nexacro.ExcelImportObject("ExcelImportObject00",this);
        	//생성한 오브젝트에 이벤트추가
        	this.objExcelImport.addEventHandler("onsuccess" ,this.ExcelImportObject00_onsuccess ,this);
        	this.objExcelImport.addEventHandler("onerror"   ,this.ExcelImportObject00_onerror   ,this);

        	this.objExcelImport.set_importtype(nexacro.ExportTypes.CSV);
        	this.objExcelImport.set_importurl(this.url);

        	this.addChild("ExcelImportObject00", this.objExcelImport);

        	var sParamA3 = "[command=getsheetdata;output=outDs;head=0,0;body=0,1]";
        	var sParamA4 = "[command=getsheetdata;output=outDs;body=0,1]";
        	var sParamB = "[ds_test=outDs]";

        	this.objExcelImport.importData("", sParamA4, sParamB);
        };
        this.btnImport00_onclick = function(obj,e)
        {
        	this.objExcelExport = new nexacro.ExcelExportObject("ExcelExportObject00",this);

        	//생성한 오브젝트에 이벤트추가
        	this.objExcelExport.addEventHandler("onprogress", this.ExcelExportObject00_onprogress, this);
        	this.objExcelExport.addEventHandler("onsuccess", this.ExcelExportObject00_onsuccess, this);
        	this.objExcelExport.addEventHandler("onerror", this.ExcelExportObject00_onerror, this);

        	//ExcelExportObject 의 대상 Grid 및 속성설정
        	this.objExcelExport.addExportItem(nexacro.ExportItemTypes.GRID, this.Grid00, "Sheet1!A1","allband","allrecord", "merge", "allstyle", "none", "none", "width");
        	this.objExcelExport.set_exportmessageprocess("%d [ %d / %d ]");
        	this.objExcelExport.set_exportuitype("exportprogress");
        	this.objExcelExport.set_exporteventtype("itemrecord");
        	// this.objExcelExport.set_exporttype(nexacro.ExportTypes.EXCEL2007);
        	this.objExcelExport.set_exporttype(nexacro.ExportTypes.CSV);
        	this.objExcelExport.set_exporturl(this.url);

        	this.addChild("ExcelExportObject00", this.objExcelExport);
        	this.objExcelExport.set_exportfilename("ExcelExport_Sample_csv");
        	this.objExcelExport.exportData();

        };

        this.btnImport_onclick2 = function(obj,e)
        {
        	var sParamA1 = "[command=getsheetdata;output=outDs;head=sheet1!A1:E1;body=sheet1!A2]";
        	var sParamA2 = "[command=getsheetdata;output=outDs;body=sheet1!A2]";
        	var sParamB = "[ds_test=outDs]";

        	this.objExcelImport.importData("", sParamA2, sParamB);
        };



        ////////////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////////////////

        this.ExcelExportObject00_onsuccess = function(obj, e)
        {
        	var str = "";

        	str += "\n=========== onsuccess event start=================";
        	str += "\ne.eventid : " + e.eventid;
        	str += "\ne.url: " +  e.url;
        	str += "\ne.id :"+e.id;
        	str += "\ne.fromobject :"+e.fromobject;
        	str += "\ne.fromreferenceobject  :"+e.fromreferenceobject;

        	trace(str);
        };

        this.ExcelExportObject00_onprogress = function(obj, e)
        {
        	var str = "";

        	str += "\n=========== onprogress event start================";
        	str += "\ne.eventid  :"+e.eventid;
        	str += "\ne.id :"+e.id;
        	str += "\ne.fromobject :"+e.fromobject;
        	str += "\ne.fromreferenceobject  :"+e.fromreferenceobject;
        	str += "\ne.itemindex :"+e.itemindex;
        	str += "\ne.itemtype :"+e.itemtype;
        	str += "\ne.recordindex :"+e.recordindex;

        	trace(str);
        };

        this.ExcelExportObject00_onerror = function(obj, e)
        {
        	var str = "";

        	str += "\n=========== onerror event start===================";
        	str += "\ne.eventid :"+e.eventid;
        	str += "\ne.id :"+e.id;
        	str += "\ne.fromobject :"+e.fromobject;
        	str += "\ne.fromreferenceobject :"+e.fromreferenceobject;
        	str += "\ne.errorcode :"+e.errorcode;
        	str += "\ne.errormsg :"+e.errormsg;

        	trace(str);
        };



        //Import 성공시
        this.ExcelImportObject00_onsuccess = function(obj, e)
        {
        	trace(e.url);
        	trace(this.ds_test.saveXML());
        };

        //Import 에러시
        this.ExcelImportObject00_onerror = function(obj, e)
        {
        	alert("업로드 실패");
        	trace("=========== onerror event start============");
        	trace("e.eventid:    "          + e.eventid);
        	trace("e.fromobject: "          + e.fromobject);
        	trace("e.fromreferenceobject: " + e.fromreferenceobject);
        	trace("e.errorcode: "           + e.errorcode);
        	trace("e.errormsg: "            + e.errormsg);
        };

        this.btnImport01_onclick = function(obj,e)
        {
        	this.localExcelImport = new nexacro.ExcelImportObject("ExcelImportLocal",this);
        	//생성한 오브젝트에 이벤트추가
        	this.localExcelImport.addEventHandler("onsuccess" ,this.ExcelImportLocal_onsuccess ,this);
        	this.localExcelImport.addEventHandler("onerror"   ,this.ExcelImportLocal_onerror   ,this);

        	this.localExcelImport.set_importtype(nexacro.ExportTypes.LOCAL_CSV);
        	//this.localExcelImport.set_importurl(this.url);

        	this.addChild("ExcelImportLocal", this.localExcelImport);

        	var sParamA3 = "[output=outDs;head=0;body=0,10]";
        	var sParamA4 = "[output=outDs;body=0,1]";
        	var sParamB = "[ds_localCSV=outDs]";
        	performance.mark("start-localExcelImport");
        	this.localExcelImport.importData("", sParamA3, sParamB);
        };

        this.ExcelImportLocal_onsuccess = function(obj, e)
        {
        	this.TextArea00.deleteText();
        	trace("=========== ExcelImportLocal onc event start============");
        	this.Grid01.createFormat();
        	trace(this.ds_localCSV.saveXML());
        	this.TextArea00.insertText("ExcelImportLocal_onsuccess\n");
        	this.TextArea00.insertText("this.ds_localCSV.rowcount = ["+this.ds_localCSV.getRowCount()+"]");
        	performance.mark("end-localExcelImport");
        	performance.measure("task-duration", "start-localExcelImport", "end-localExcelImport");
        	const measure = performance.getEntriesByName("task-duration")[0];
        		const seconds = measure.duration / 1000;
        	//console.log(`${seconds.toFixed(3)} s`);
        	//this.TextArea00.insertText("\n"+seconds.toFixed(3)+" s");
        	//this.TextArea00.insertText("\n"+measure.duration+"ms");
        };

        //Import 에러시
        this.ExcelImportLocal_onerror = function(obj, e)
        {
        	//alert("업로드 실패");
        	this.TextArea00.deleteText();
        	trace("=========== ExcelImportLocal onerror event start============");
        	trace("e.eventid:    "          + e.eventid);
        	trace("e.fromobject: "          + e.fromobject);
        	trace("e.fromreferenceobject: " + e.fromreferenceobject);
        	trace("e.errorcode: "           + e.errorcode);
        	trace("e.errormsg: "            + e.errormsg);
        	this.TextArea00.insertText("ExcelImportLocal_onerror\n");
        	this.TextArea00.insertText("e.eventid:    "          + e.eventid+"\n");
        	this.TextArea00.insertText("e.fromobject: "          + e.fromobject+"\n");
        	this.TextArea00.insertText("e.fromreferenceobject: " + e.fromreferenceobject+"\n");
        	this.TextArea00.insertText("e.errorcode: "           + e.errorcode+"\n");
        	this.TextArea00.insertText("e.errormsg: "            + e.errormsg+"\n");


        };

        this.btnImport00_00_onclick = function(obj,e)
        {
        	this.localExcelExport = new nexacro.ExcelExportObject("ExcelExportLocal",this);

        	//생성한 오브젝트에 이벤트추가
        	this.localExcelExport.addEventHandler("onprogress", this.ExcelExportLocal_onprogress, this);
        	this.localExcelExport.addEventHandler("onsuccess", this.ExcelExportLocal_onsuccess, this);
        	this.localExcelExport.addEventHandler("onerror", this.ExcelExportLocal_onerror, this);

        	//ExcelExportObject 의 대상 Grid 및 속성설정
        	this.localExcelExport.addExportItem(nexacro.ExportItemTypes.GRID, this.Grid01, "Sheet1!A1","allband","allrecord", "merge", "allstyle", "none", "none", "width");
        	this.localExcelExport.set_exportmessageprocess("%d [ %d / %d ]");
        	this.localExcelExport.set_exportuitype("exportprogress");
        	this.localExcelExport.set_exporteventtype("itemrecord");
        	// this.objExcelExport.set_exporttype(nexacro.ExportTypes.EXCEL2007);
        	this.localExcelExport.set_exporttype(nexacro.ExportTypes.LOCAL_CSV);
        	//this.localExcelExport.set_exporturl(this.url);

        	this.addChild("ExcelExportLocal", this.localExcelExport);
        	this.localExcelExport.set_exportfilename("ExcelExport_Sample_local_csv");
        	performance.mark("start-localExcelExport");
        	this.localExcelExport.exportData();
        };


        this.ExcelExportLocal_onsuccess = function(obj, e)
        {
        	var str = "";

        	str += "\n=========== onsuccess event start=================";
        	str += "\ne.eventid : " + e.eventid;
        	str += "\ne.url: " +  e.url;
        	str += "\ne.id :"+e.id;
        	str += "\ne.fromobject :"+e.fromobject;
        	str += "\ne.fromreferenceobject  :"+e.fromreferenceobject;
        	this.TextArea00.deleteText();
        	trace(str);
        	this.TextArea00.insertText("ExcelExportLocal_onsuccess\n");
        	this.TextArea00.insertText("this.ds_localCSV.rowcount = ["+this.ds_localCSV.getRowCount()+"]\n");
        	performance.mark("end-localExcelExport");
        	performance.measure("task-duration", "start-localExcelExport", "end-localExcelExport");
        	const measure = performance.getEntriesByName("task-duration")[0];
        		const seconds = measure.duration / 1000;
        	//console.log(`${seconds.toFixed(3)} s`);
        	//this.TextArea00.insertText("\n"+seconds.toFixed(3)+" s");
        	//this.TextArea00.insertText("\n"+measure.duration+"ms");

        };

        this.ExcelExportLocal_onprogress = function(obj, e)
        {
        	var str = "";

        	str += "\n=========== onprogress event start================";
        	str += "\ne.eventid  :"+e.eventid;
        	str += "\ne.id :"+e.id;
        	str += "\ne.fromobject :"+e.fromobject;
        	str += "\ne.fromreferenceobject  :"+e.fromreferenceobject;
        	str += "\ne.itemindex :"+e.itemindex;
        	str += "\ne.itemtype :"+e.itemtype;
        	str += "\ne.recordindex :"+e.recordindex;

        	trace(str);
        	//this.TextArea00.insertText("ExcelExportLocal_onprogress\n");
        };

        this.ExcelExportLocal_onerror = function(obj, e)
        {
        	var str = "";

        	str += "ExcelExportLocal_onerror";
        	str += "\ne.eventid :"+e.eventid;
        	str += "\ne.id :"+e.id;
        	str += "\ne.fromobject :"+e.fromobject;
        	str += "\ne.fromreferenceobject :"+e.fromreferenceobject;
        	str += "\ne.errorcode :"+e.errorcode;
        	str += "\ne.errormsg :"+e.errormsg;

        	trace(str);
        	this.TextArea00.insertText(str+"\n");
        };



        //Import 성공시


        this.btnImport01_00_onclick = function(obj,e)
        {
        	this.localExcelImportTXT = new nexacro.ExcelImportObject("ExcelImportLocalTXT",this);
        	//생성한 오브젝트에 이벤트추가
        	this.localExcelImportTXT.addEventHandler("onsuccess" ,this.ExcelImportLocalTXT_onsuccess ,this);
        	this.localExcelImportTXT.addEventHandler("onerror"   ,this.ExcelImportLocalTX_onerror   ,this);

        	this.localExcelImportTXT.set_importtype(nexacro.ExportTypes.LOCAL_TXT);
        	this.addChild("ExcelImportLocalTXT", this.localExcelImportTXT);
        	var sParamA3 = "[output=outDs;head=0,0:3,1;body=0,1:2,2]";
        	//var sParamA4 = "[output=outDs;body=0,1]";
        	var sParamB = "[ds_localTXT=outDs]";
        	performance.mark("start-localExcelImportTXT");
        	this.localExcelImportTXT.importData("", sParamA3, sParamB);
        };

        this.ExcelImportLocalTXT_onsuccess = function(obj, e)
        {

        	trace("=========== ExcelImportLocalTXT onsuccess event start============");
        	this.Grid02.createFormat();
        	this.TextArea00_00.deleteText();
        	trace(this.ds_localTXT.saveXML());
        	this.TextArea00_00.insertText("ExcelImportLocalTXT_onsuccess\n");
        	this.TextArea00_00.insertText("this.ds_localTXT.rowcount = ["+this.ds_localTXT.getRowCount()+"]");
        	performance.mark("end-localExcelImportTXT");
        	performance.measure("task-duration", "start-localExcelImportTXT", "end-localExcelImportTXT");
        	const measure = performance.getEntriesByName("task-duration")[0];
        	const seconds = measure.duration / 1000;
        	//console.log(`${seconds.toFixed(3)} s`);
        	//this.TextArea00_00.insertText("\n"+seconds.toFixed(3)+" s");
        	//this.TextArea00_00.insertText("\n"+measure.duration+"ms");
        };

        //Import 에러시
        this.ExcelImportLocalTX_onerror = function(obj, e)
        {
        	//alert("업로드 실패");
        	this.TextArea00_00.deleteText();
        	trace("=========== ExcelImportLocalTXT onerror event start============");
        	trace("e.eventid:    "          + e.eventid);
        	trace("e.fromobject: "          + e.fromobject);
        	trace("e.fromreferenceobject: " + e.fromreferenceobject);
        	trace("e.errorcode: "           + e.errorcode);
        	trace("e.errormsg: "            + e.errormsg);
        	this.TextArea00_00.insertText("ExcelImportLocal_onerror\n");
        	this.TextArea00_00.insertText("e.eventid:    "          + e.eventid+"\n");
        	this.TextArea00_00.insertText("e.fromobject: "          + e.fromobject+"\n");
        	this.TextArea00_00.insertText("e.fromreferenceobject: " + e.fromreferenceobject+"\n");
        	this.TextArea00_00.insertText("e.errorcode: "           + e.errorcode+"\n");
        	this.TextArea00_00.insertText("e.errormsg: "            + e.errormsg+"\n");
        };
        this.btnImport00_00_00_onclick = function(obj,e)
        {
        	this.localExcelExportTXT = new nexacro.ExcelExportObject("ExcelExportLocalTXT",this);

        	//생성한 오브젝트에 이벤트추가
        	this.localExcelExportTXT.addEventHandler("onprogress", this.ExcelExportLocalTXT_onprogress, this);
        	this.localExcelExportTXT.addEventHandler("onsuccess", this.ExcelExportLocalTXT_onsuccess, this);
        	this.localExcelExportTXT.addEventHandler("onerror", this.ExcelExportLocalTXT_onerror, this);

        	//ExcelExportObject 의 대상 Grid 및 속성설정
        	this.localExcelExportTXT.addExportItem(nexacro.ExportItemTypes.GRID, this.Grid02, "Sheet1!A1","allband","allrecord", "merge", "allstyle", "none", "none", "width");
        	this.localExcelExportTXT.set_exportmessageprocess("%d [ %d / %d ]");
        	this.localExcelExportTXT.set_exportuitype("exportprogress");
        	this.localExcelExportTXT.set_exporteventtype("itemrecord");
        	// this.objExcelExport.set_exporttype(nexacro.ExportTypes.EXCEL2007);
        	this.localExcelExportTXT.set_exporttype(nexacro.ExportTypes.LOCAL_TXT);
        	//this.localExcelExport.set_exporturl(this.url);

        	this.addChild("ExcelExportLocalTXT", this.localExcelExportTXT);
        	this.localExcelExportTXT.set_exportfilename("ExcelExport_Sample_local_TXT");
        	performance.mark("end-localExcelExportTXT");
        	this.localExcelExportTXT.exportData();
        };


        this.ExcelExportLocalTXT_onsuccess = function(obj, e)
        {
        	var str = "";
        	//this.Grid02.createFormat();
        	str += "\n===========  ExcelExportLocalTXT onsuccess event start=================";
        	str += "\ne.eventid : " + e.eventid;
        	str += "\ne.url: " +  e.url;
        	str += "\ne.id :"+e.id;
        	str += "\ne.fromobject :"+e.fromobject;
        	str += "\ne.fromreferenceobject  :"+e.fromreferenceobject;
        	this.TextArea00_00.deleteText();
        	trace(str);
        	this.TextArea00_00.insertText("ExcelExportLocalTXT_onsuccess\n");
        	this.TextArea00_00.insertText("this.ds_localTXT.rowcount = ["+this.ds_localTXT.getRowCount()+"]\n");
        	performance.mark("end-localExcelExportTXT");
        	performance.measure("task-duration", "start-localExcelExportTXT", "end-localExcelExportTXT");
        	const measure = performance.getEntriesByName("task-duration")[0];
        	const seconds = measure.duration / 1000;
        	//console.log(`${seconds.toFixed(3)} s`);
        	//this.TextArea00_00.insertText("\n"+seconds.toFixed(3)+" s")
        	//this.TextArea00_00.insertText("\n"+measure.duration+"ms");
        };

        this.ExcelExportLocalTXT_onprogress = function(obj, e)
        {
        	var str = "";

        	str += "\n=========== ExcelExportLocalTXT onprogress event start================";
        	str += "\ne.eventid  :"+e.eventid;
        	str += "\ne.id :"+e.id;
        	str += "\ne.fromobject :"+e.fromobject;
        	str += "\ne.fromreferenceobject  :"+e.fromreferenceobject;
        	str += "\ne.itemindex :"+e.itemindex;
        	str += "\ne.itemtype :"+e.itemtype;
        	str += "\ne.recordindex :"+e.recordindex;

        	trace(str);
        	//this.TextArea00_00.insertText("ExcelExportLocalTXT_onprogress\n");
        };

        this.ExcelExportLocalTXT_onerror = function(obj, e)
        {
        	var str = "";
        	this.TextArea00_00.deleteText();
        	str += "\n=========== ExcelExportLocalTXT onerror event start===================";
        	str += "\ne.eventid :"+e.eventid;
        	str += "\ne.id :"+e.id;
        	str += "\ne.fromobject :"+e.fromobject;
        	str += "\ne.fromreferenceobject :"+e.fromreferenceobject;
        	str += "\ne.errorcode :"+e.errorcode;
        	str += "\ne.errormsg :"+e.errormsg;

        	trace(str);
        	this.TextArea00_00.insertText("ExcelExportLocalTXT_onprogress\n");
        };
        this.Button00_onclick = function(obj,e)
        {
        	this.TextArea00.deleteText();
        };

        this.Button00_00_onclick = function(obj,e)
        {
        	this.TextArea00_00.deleteText();
        };

        this.Button00_00_00_onclick = function(obj,e)
        {

        	this.TextArea00_00_00.deleteText();
        };

        this.Button01_onclick = function(obj,e)
        {
        	this.localExcelImportTXT1 = new nexacro.ExcelImportObject("ExcelImportLocalTXT1",this);
        	//생성한 localExcelImportTXT1 이벤트추가
        	this.localExcelImportTXT1.addEventHandler("onsuccess" ,this.ExcelImportLocalTXT1_onsuccess ,this);
        	this.localExcelImportTXT1.addEventHandler("onerror"   ,this.ExcelImportLocalTXT1_onerror   ,this);
        	//this.localExcelImportTXT1.separator = "0x27";
        	this.localExcelImportTXT1.set_importtype(nexacro.ExportTypes.LOCAL_TXT);
        	this.addChild("ExcelImportLocalTXT1", this.localExcelImportTXT1);

        	var sParamA3 = "[output=outDs;head=0,0:3,1;body=0,1:2,2]";
        	//var sParamA4 = "[output=outDs;body=0,1]";
        	var sParamB = "[ds_localTXT00=outDs]";
        	performance.mark("start-localExcelImportTXT1");
        	this.localExcelImportTXT1.importData("", sParamA3, sParamB);
        	this.localExcelImportTXT1.separator=this.Combo00.text;
        	this.localExcelImportTXT1.quotechar="none";
        };
        this.ExcelImportLocalTXT1_onsuccess = function(obj, e)
        {

        	trace("=========== ExcelImportLocalTXT1 onsuccess event start============");
        	this.Grid03.createFormat();
        	this.TextArea00_00_00.deleteText();
        	trace(this.ds_localTXT00.saveXML());
        	this.TextArea00_00_00.insertText("ExcelImportLocalTXT1_onsuccess\n");
        	this.TextArea00_00_00.insertText("this.ds_localTXT1.rowcount = ["+this.ds_localTXT00.getRowCount()+"]");
        	performance.mark("end-localExcelImportTXT1");
        	performance.measure("task-duration", "start-localExcelImportTXT1", "end-localExcelImportTXT1");
        	const measure = performance.getEntriesByName("task-duration")[0];
        	const seconds = measure.duration / 1000;
        	//console.log(`${seconds.toFixed(3)} s`);
        	//this.TextArea00_00.insertText("\n"+seconds.toFixed(3)+" s");
        	//this.TextArea00_00.insertText("\n"+measure.duration+"ms");
        };

        //Import 에러시
        this.ExcelImportLocalTXT1_onerror = function(obj, e)
        {
        	//alert("업로드 실패");
        	this.TextArea00_00_00.deleteText();
        	trace("=========== ExcelImportLocalTXT onerror event start============");
        	trace("e.eventid:    "          + e.eventid);
        	trace("e.fromobject: "          + e.fromobject);
        	trace("e.fromreferenceobject: " + e.fromreferenceobject);
        	trace("e.errorcode: "           + e.errorcode);
        	trace("e.errormsg: "            + e.errormsg);
        	this.TextArea00_00_00.insertText("ExcelImportLocal_onerror\n");
        	this.TextArea00_00_00.insertText("e.eventid:    "          + e.eventid+"\n");
        	this.TextArea00_00_00.insertText("e.fromobject: "          + e.fromobject+"\n");
        	this.TextArea00_00_00.insertText("e.fromreferenceobject: " + e.fromreferenceobject+"\n");
        	this.TextArea00_00_00.insertText("e.errorcode: "           + e.errorcode+"\n");
        	this.TextArea00_00_00.insertText("e.errormsg: "            + e.errormsg+"\n");
        };
        this.Combo00_onitemchanged = function(obj,e)
        {

        };

        this.Button02_onclick = function(obj,e)
        {
        	this.localExcelExportTXT2 = new nexacro.ExcelExportObject("ExcelExportLocalTXT2",this);

        	//생성한 오브젝트에 이벤트추가
        	this.localExcelExportTXT2.addEventHandler("onprogress", this.ExcelExportLocalTXT2_onprogress, this);
        	this.localExcelExportTXT2.addEventHandler("onsuccess", this.ExcelExportLocalTXT2_onsuccess, this);
        	this.localExcelExportTXT2.addEventHandler("onerror", this.ExcelExportLocalTXT2_onerror, this);

        	//ExcelExportObject 의 대상 Grid 및 속성설정
        	this.localExcelExportTXT2.addExportItem(nexacro.ExportItemTypes.GRID, this.Grid03, "Sheet1!A1","allband","allrecord", "merge", "allstyle", "none", "none", "width");
        	this.localExcelExportTXT2.set_exportmessageprocess("%d [ %d / %d ]");
        	this.localExcelExportTXT2.set_exportuitype("exportprogress");
        	this.localExcelExportTXT2.set_exporteventtype("itemrecord");
        	// this.objExcelExport.set_exporttype(nexacro.ExportTypes.EXCEL2007);
        	this.localExcelExportTXT2.set_exporttype(nexacro.ExportTypes.LOCAL_TXT);
        	//this.localExcelExport.set_exporturl(this.url);

        	this.addChild("ExcelExportLocalTXT2", this.localExcelExportTXT2);
        	this.localExcelExportTXT2.set_exportfilename("ExcelExport_Sample_local_TXT_seperate");
        	performance.mark("start-localExcelExportTXT2");
        	this.localExcelExportTXT2.separator=this.Combo00.text;
        	this.localExcelExportTXT2.quotechar="none";
        	this.localExcelExportTXT2.exportData();
        };
        this.ExcelExportLocalTXT2_onsuccess = function(obj, e)
        {
        	var str = "";
        	//this.Grid02.createFormat();
        	str += "\n===========  ExcelExportLocalTXT onsuccess event start=================";
        	str += "\ne.eventid : " + e.eventid;
        	str += "\ne.url: " +  e.url;
        	str += "\ne.id :"+e.id;
        	str += "\ne.fromobject :"+e.fromobject;
        	str += "\ne.fromreferenceobject  :"+e.fromreferenceobject;
        	this.TextArea00_00_00.deleteText();
        	trace(str);
        	this.TextArea00_00_00.insertText("ExcelExportLocalTXT2_onsuccess\n");
        	this.TextArea00_00_00.insertText("this.ds_localTXT00.rowcount = ["+this.ds_localTXT00.getRowCount()+"]\n");
        	performance.mark("end-localExcelExportTXT2");
        	performance.measure("task-duration", "start-localExcelExportTXT2", "end-localExcelExportTXT2");
        	const measure = performance.getEntriesByName("task-duration")[0];
        	const seconds = measure.duration / 1000;
        	//console.log(`${seconds.toFixed(3)} s`);
        	//this.TextArea00_00.insertText("\n"+seconds.toFixed(3)+" s")
        	//this.TextArea00_00.insertText("\n"+measure.duration+"ms");
        };

        this.ExcelExportLocalTXT2_onprogress = function(obj, e)
        {
        	var str = "";

        	str += "\n=========== ExcelExportLocalTXT2 onprogress event start================";
        	str += "\ne.eventid  :"+e.eventid;
        	str += "\ne.id :"+e.id;
        	str += "\ne.fromobject :"+e.fromobject;
        	str += "\ne.fromreferenceobject  :"+e.fromreferenceobject;
        	str += "\ne.itemindex :"+e.itemindex;
        	str += "\ne.itemtype :"+e.itemtype;
        	str += "\ne.recordindex :"+e.recordindex;

        	trace(str);
        	//this.TextArea00_00.insertText("ExcelExportLocalTXT_onprogress\n");
        };

        this.ExcelExportLocalTXT2_onerror = function(obj, e)
        {
        	var str = "";
        	this.TextArea00_00_00.deleteText();
        	str += "\n=========== ExcelExportLocalTXT2 onerror event start===================";
        	str += "\ne.eventid :"+e.eventid;
        	str += "\ne.id :"+e.id;
        	str += "\ne.fromobject :"+e.fromobject;
        	str += "\ne.fromreferenceobject :"+e.fromreferenceobject;
        	str += "\ne.errorcode :"+e.errorcode;
        	str += "\ne.errormsg :"+e.errormsg;

        	trace(str);
        	this.TextArea00_00_00.insertText("ExcelExportLocalTXT2_onprogress\n");
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.testExcel_onload,this);
            this.btnImport.addEventHandler("onclick",this.btnImport_onclick,this);
            this.btnImport00.addEventHandler("onclick",this.btnImport00_onclick,this);
            this.btnClear.addEventHandler("onclick",this.btnClear_onclick,this);
            this.btnImport00_00.addEventHandler("onclick",this.btnImport00_00_onclick,this);
            this.btnImport01.addEventHandler("onclick",this.btnImport01_onclick,this);
            this.btnImport00_00_00.addEventHandler("onclick",this.btnImport00_00_00_onclick,this);
            this.btnImport01_00.addEventHandler("onclick",this.btnImport01_00_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button00_00.addEventHandler("onclick",this.Button00_00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button00_00_00.addEventHandler("onclick",this.Button00_00_00_onclick,this);
            this.Combo00.addEventHandler("onitemchanged",this.Combo00_onitemchanged,this);
        };

        this.loadIncludeScript("nexacroK_LocalExcelCSV_Sample00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
