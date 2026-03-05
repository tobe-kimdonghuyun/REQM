(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GridFilter");
            this.set_titletext("New Form");
            this.getSetter("classname").set("GridFilter");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,1060);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_sample", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "col1","size" : "256","type" : "STRING","prop" : "TEXT"},{"id" : "col2","size" : "256","type" : "INT","prop" : "MIN"},{"id" : "col3","size" : "256","type" : "STRING"},{"id" : "col4","size" : "256","type" : "STRING"},{"id" : "col5","size" : "256","type" : "DATE"},{"id" : "col6","size" : "256","type" : "INT"},{"id" : "col7","size" : "256","type" : "INT"}]},"Rows" : [{"col1" : "AnyCall","col2" : "2","col3" : "2G","col4" : "SCH-W420","col5" : "20081223","col6" : "235000","col7" : "1"},{"col1" : "AnyCall","col2" : "2","col3" : "3G","col4" : "SCH-M490","col5" : "20090111","col6" : "353000","col7" : "1"},{"col1" : "AnyCall","col2" : "2","col3" : "4G","col4" : "SCH-W270","col5" : "20090209","col6" : "498000","col7" : "1"},{"col1" : "AnyCall","col2" : "3","col3" : "2G","col4" : "SCH-W570","col5" : "20081201","col6" : "351000","col7" : "1"},{"col1" : "AnyCall","col2" : "1","col3" : "3G","col4" : "SCH-W550","col5" : "20090125","col6" : "150000","col7" : "1"},{"col1" : "AnyCall","col2" : "1","col3" : "3G","col4" : "SCH-W750","col5" : "20090225","col6" : "589000","col7" : "1"},{"col1" : "cyon","col2" : "2","col3" : "2G","col4" : "LG-KH2100","col5" : "","col6" : "256000","col7" : "1"},{"col1" : "cyon","col2" : "2","col3" : "3G","col4" : "LG-KU6000","col5" : "20090212","col6" : "430000","col7" : "1"},{"col1" : "cyon","col2" : "1","col3" : "2G","col4" : "LG-KU9100","col5" : "20081205","col6" : "360000","col7" : "1"},{"col1" : "cyon","col2" : "1","col3" : "3G","col4" : "LG-KH8000","col5" : "","col6" : "470000","col7" : "1"},{"col1" : "cyon","col2" : "1","col3" : "3G","col4" : "LG-KH6500","col5" : "20090219","col6" : "560000","col7" : "1"},{"col1" : "팬택&큐리","col2" : "3","col3" : "2G","col4" : "canU-S1000","col5" : "20090303","col6" : "270000","col7" : "1"},{"col1" : "팬택&큐리","col2" : "2","col3" : "4G","col4" : "canU801EX","col5" : "","col6" : "","col7" : "1"},{"col1" : "팬택&큐리","col2" : "1","col3" : "3G","col4" : "canU502S","col5" : "20090109","col6" : "300000","col7" : ""},{"col1" : "팬택&큐리","col2" : "3","col3" : "2G","col4" : "canU-S1000","col5" : "20090303","col6" : "270000","col7" : "410000"},{"col1" : "팬택&큐리","col2" : "2","col3" : "3G","col4" : "canU801EX","col5" : "","col6" : "","col7" : "600000"},{"col1" : "팬택&큐리","col2" : "1","col3" : "3G","col4" : "canU502S","col5" : "20090109","col6" : "300000","col7" : ""}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_sample","10","10","710","380",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.getSetter("useinputpanel").set("false");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj.set_binddataset("ds_sample");
            obj.set_treeusebutton("use");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseimage("false");
            obj.set_treeuseline("false");
            obj.set_showselection("true");
            obj.set_selecttype("area");
            obj.set_autosizebandtype("allband");
            obj.set_treeinitstatus("expand,all");
            obj.getSetter("groupinitstatus").set("expand");
            obj.set_cellsizebandtype("allband");
            obj.getSetter("allowcopy").set("true");
            obj.set_fastvscrolltype("trackbarfollow");
            obj.set_selectscrollmode("default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"28\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"198\"/><Column size=\"198\"/><Column size=\"80\"/><Column size=\"198\"/><Column size=\"198\"/><Column size=\"198\"/><Column size=\"198\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"컬럼1\" filtercolumn=\"col1\" filtertype=\"condition\" sortcolumn=\"col1\" groupcolumn=\"col1\"/><Cell col=\"2\" text=\"컬럼2\" filtercolumn=\"col2\" filtertype=\"select\" sortcolumn=\"col2\" groupcolumn=\"col2\"/><Cell col=\"3\" text=\"컬럼3\" sortcolumn=\"col3\" groupcolumn=\"col3\"/><Cell col=\"4\" text=\"컬럼4\" groupcolumn=\"col4\"/><Cell col=\"5\" text=\"col5\" filtercolumn=\"col5\" filtertype=\"condition,select\"/><Cell col=\"6\" text=\"col6\" filtercolumn=\"col5\" filtertype=\"condition,select\"/><Cell col=\"7\" text=\"col7\"/><Cell col=\"8\" text=\"col8\" filtercolumn=\"col9\" filtertype=\"condition,select\"/><Cell col=\"9\" text=\"col9\" filtercolumn=\"col10\" filtertype=\"condition,select\"/><Cell col=\"10\" text=\"col10\" filtercolumn=\"col5\" filtertype=\"condition,select\"/><Cell col=\"11\" text=\"col11\" filtercolumn=\"col5\" filtertype=\"condition,select\"/><Cell col=\"12\" text=\"col7\"/></Band><Band id=\"body\"><Cell expr=\"currow\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:col1\" displaytype=\"normal\" edittype=\"normal\"/><Cell col=\"2\" displaytype=\"normal\" combodataset=\"ds_type\" combocodecol=\"code\" combodatacol=\"value\" expr=\"col2.avg\"/><Cell col=\"3\" text=\"bind:col3\"/><Cell col=\"4\" text=\"bind:col4\" expandshow=\"show\"/><Cell col=\"5\" displaytype=\"date\" text=\"bind:col5\"/><Cell col=\"6\" displaytype=\"date\" text=\"bind:col5\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:col7\"/><Cell col=\"8\" displaytype=\"date\" text=\"bind:col5\"/><Cell col=\"9\" displaytype=\"date\" text=\"bind:col5\"/><Cell col=\"10\" displaytype=\"date\" text=\"bind:col5\"/><Cell col=\"11\" displaytype=\"date\" text=\"bind:col5\"/><Cell col=\"12\" displaytype=\"normal\" style=\"align:right;\" text=\"11\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin00","750","50","69","29",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_min("0");
            obj.set_max("4");
            obj.set_value("3");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_00","750","105","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("fix(keepscroll)");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","750","235","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("autofit");
            this.addChild(obj.name, obj);

            obj = new Button("Button05","750","300","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("mergecell");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_00_00","750","170","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("clear(keepscroll)");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_00_00_00","880","170","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("clear");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_00_01","880","105","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("fix");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1024,1060,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","ds_sample");
        };
        
        // User Script
        this.registerScript("RP_103761_Grid_setFixedColumn (1).xfdl", function() {

        this.Button01_onclick = function(obj,e)
        {
        	this.grd_sample.clearSort();
        };

        this.Button01_00_onclick = function(obj,e)
        {
        	this.grd_sample.clearFilter();
        };


        this.Button02_onclick = function(obj,e)
        {
        	var format = this.grd_sample.getCurFormatString();
        	trace(format);
        };

        this.Button04_onclick = function(obj,e)
        {
        	this.grd_sample.clearGroup();
        };

        this.Button06_onclick = function(obj,e)
        {
        };

        this.Button07_onclick = function(obj,e)
        {
        };


        this.Button09_onclick = function(obj,e)
        {
        	this.grd_sample.enableredraw = false;
        	this.grd_sample.setFormatColProperty(3, "band", "body");
        	this.grd_sample.setFormatColProperty(2, "band", "body");
        	this.grd_sample.setFormatColProperty(1, "band", "body");
        	this.grd_sample.setFormatColProperty(0, "band", "body");
        	this.grd_sample.setFormatColProperty(this.Spin00.value, "band", "left");
        	this.grd_sample.enableredraw = true;
        };


        this.Edit01_onchanged = function(obj,e)
        {

        };

        this.Button09_00_onclick = function(obj,e)
        {
        	this.grd_sample.setFixedRow(this.Spin00_00.value);
        };



        this.Button00_01_00_00_00_onclick = function(obj,e)
        {
        	var retn = ["col1", "col2", "col3", "col4"];
        	this.grd_sample.groupBy(retn);
        };

        this.Button00_01_00_00_00_00_00_onclick = function(obj,e)
        {
        	trace(this.grd_sample.getGroupingColumnIds());
        };

        this.Button00_01_00_00_00_00_onclick = function(obj,e)
        {
        	trace(this.grd_sample.getGroupInfo());
        };


        this.Static00_onclick = function(obj,e)
        {

        };

        this.url = "http://172.10.12.41:8080/nexacro17-xeni/XExportImport";
        this.Button00_onclick = function(obj,e)
        {
        	this.ExcelExportObject00 = new ExcelExportObject();


        	this.ExcelExportObject00.addEventHandler("onprogress", this.ExcelExportObject00_onprogress, this);
        	this.ExcelExportObject00.addEventHandler("onsuccess", this.ExcelExportObject00_onsuccess, this);
        	this.ExcelExportObject00.addEventHandler("onerror", this.ExcelExportObject00_onerror, this);

        	//var ret = this.ExcelExportObject00.addExportItem(nexacro.ExportItemTypes.GRID, this.gd_excel, "Sheet1!A1");

        	// background 설정시 제외
        	//var ret = this.ExcelExportObject00.addExportItem(nexacro.ExportItemTypes.GRID, this.Grid00, "Sheet1!A1", "allrecord", "allrecord", "suppress", "allstyle","none","background","both");
        	//var ret1 = this.ExcelExportObject00.addExportItem(nexacro.ExportItemTypes.GRID, this.gd_excel, "Sheet1!A2", "allband", "allrecord", "merge", "allstyle","none","none","both");
        	this.ExcelExportObject00.addExportItem(nexacro.ExportItemTypes.GRID, this.grd_sample, "Sheet1!A1","allband", "allrecord", "merge", "allstyle", "none", "none", "both");
        	//this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, objGrid, "Sheet1!A1","allband", "allrecord", "merge", "allstyle", "none", "none", "both");
        	this.ExcelExportObject00.set_exportmessageprocess("%d [ %d / %d ]");
        	this.ExcelExportObject00.set_exportuitype("exportprogress");
        	this.ExcelExportObject00.set_exporteventtype("itemrecord");
            this.ExcelExportObject00.set_exporttype(nexacro.ExportTypes.EXCEL2007);


        	//this.ExcelExportObject00.set_exportfilepassword(sPassWd);

            this.ExcelExportObject00.set_exporturl(this.url);
        	this.ExcelExportObject00.exportData();
        };

        this.Button02_00_onclick = function(obj,e)
        {
        	this.grd_sample.setFixedColumn(this.Spin00.value, true);
        };

        this.Button03_onclick = function(obj,e)
        {
        	this.grd_sample.autofittype = "col";
        };

        this.Button05_onclick = function(obj,e)
        {
        	this.grd_sample.mergeCell(4, 5, 0, 1)
        };

        this.grd_sample_ondrag = function(obj,e)
        {
        	//trace(e.id, e.canvasx);
        	return true;
        };

        this.grd_sample_ondragenter = function(obj,e)
        {
        	//trace(e.id, e.canvasx);
        };

        this.grd_sample_ondragleave = function(obj,e)
        {
        	//trace(e.id, e.canvasx);
        };

        this.grd_sample_ondragmove = function(obj,e)
        {
        	//trace(e.id, e.canvasx);
        };

        this.grd_sample_ondrop = function(obj,e)
        {
        	//trace(e.id, e.canvasx);
        };

        this.grd_sample_onclick = function(obj,e)
        {
        	//trace(e.id, e.canvasx);
        };

        this.grd_sample_oncelldblclick = function(obj,e)
        {
        	//trace(e.id, e.canvasx);
        };

        this.grd_sample_onheadclick = function(obj,e)
        {
        	trace(e.id, e.canvasx);
        };

        this.grd_sample_onheaddblclick = function(obj,e)
        {
        	//trace(e.id, e.canvasx);
        };

        this.grd_sample_onlbuttondown = function(obj,e)
        {
        	//trace(e.id, e.canvasx);
        };

        this.grd_sample_onlbuttonup = function(obj,e)
        {
        	//trace(e.id, e.canvasx);
        };

        this.grd_sample_onmousedown = function(obj,e)
        {
        	//trace(e.id, e.canvasx);
        };

        this.grd_sample_onmouseenter = function(obj,e)
        {
        	//trace(e.id, e.canvasx);
        };

        this.grd_sample_onmouseleave = function(obj,e)
        {
        	//trace(e.id, e.canvasx);
        };

        this.grd_sample_onmousemove = function(obj,e)
        {
        	//trace(e.id, e.canvasx);
        };

        this.grd_sample_onmouseup = function(obj,e)
        {
        //	trace(e.id, e.canvasx);
        };

        this.grd_sample_onrbuttondown = function(obj,e)
        {
        	//trace(e.id, e.canvasx);
        };

        this.grd_sample_onrbuttonup = function(obj,e)
        {
        	//trace(e.id, e.canvasx);
        };

        this.grd_sample_onsummaryclick = function(obj,e)
        {
        	//trace(e.id, e.canvasx);
        };

        this.grd_sample_onsummarydblclick = function(obj,e)
        {
        	//trace(e.id, e.canvasx);
        };

        this.grd_sample_ontouchend = function(obj,e)
        {
        	//trace(e.id, e.touchinputinfos[0].canvasx);
        };

        this.grd_sample_ontouchmove = function(obj,e)
        {
        	//trace(e.id, e.touchinputinfos[0].canvasx);
        };

        this.grd_sample_ontouchstart = function(obj,e)
        {
        //	trace(e.id, e.touchinputinfos[0].canvasx);
        };

        this.grd_sample_oncellclick = function(obj,e)
        {
        	//trace(e.id, e.canvasx);
        };

        this.Button02_00_00_onclick = function(obj,e)
        {
        	this.grd_sample.setFixedColumn(-1, true);
        };

        this.Button02_00_00_00_onclick = function(obj,e)
        {
        	this.grd_sample.setFixedColumn(-1, false);
        };

        this.Spin00_onchanged = function(obj,e)
        {

        };

        this.Button02_00_01_onclick = function(obj,e)
        {
        	this.grd_sample.setFixedColumn(this.Spin00.value);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.GridFilter_onload,this);
            this.grd_sample.addEventHandler("onselectchanged",this.grd_sample_onselectchanged,this);
            this.grd_sample.addEventHandler("oncellclick",this.grd_sample_oncellclick,this);
            this.grd_sample.addEventHandler("oncloseup",this.grd_sample_oncloseup,this);
            this.grd_sample.addEventHandler("ondrag",this.grd_sample_ondrag,this);
            this.grd_sample.addEventHandler("ondragenter",this.grd_sample_ondragenter,this);
            this.grd_sample.addEventHandler("ondragleave",this.grd_sample_ondragleave,this);
            this.grd_sample.addEventHandler("ondragmove",this.grd_sample_ondragmove,this);
            this.grd_sample.addEventHandler("ondrop",this.grd_sample_ondrop,this);
            this.grd_sample.addEventHandler("onclick",this.grd_sample_onclick,this);
            this.grd_sample.addEventHandler("oncelldblclick",this.grd_sample_oncelldblclick,this);
            this.grd_sample.addEventHandler("onheadclick",this.grd_sample_onheadclick,this);
            this.grd_sample.addEventHandler("onheaddblclick",this.grd_sample_onheaddblclick,this);
            this.grd_sample.addEventHandler("onlbuttondown",this.grd_sample_onlbuttondown,this);
            this.grd_sample.addEventHandler("onlbuttonup",this.grd_sample_onlbuttonup,this);
            this.grd_sample.addEventHandler("onmousedown",this.grd_sample_onmousedown,this);
            this.grd_sample.addEventHandler("onmouseenter",this.grd_sample_onmouseenter,this);
            this.grd_sample.addEventHandler("onmouseleave",this.grd_sample_onmouseleave,this);
            this.grd_sample.addEventHandler("onmousemove",this.grd_sample_onmousemove,this);
            this.grd_sample.addEventHandler("onmouseup",this.grd_sample_onmouseup,this);
            this.grd_sample.addEventHandler("onrbuttondown",this.grd_sample_onrbuttondown,this);
            this.grd_sample.addEventHandler("onrbuttonup",this.grd_sample_onrbuttonup,this);
            this.grd_sample.addEventHandler("onsummaryclick",this.grd_sample_onsummaryclick,this);
            this.grd_sample.addEventHandler("onsummarydblclick",this.grd_sample_onsummarydblclick,this);
            this.grd_sample.addEventHandler("ontouchend",this.grd_sample_ontouchend,this);
            this.grd_sample.addEventHandler("ontouchmove",this.grd_sample_ontouchmove,this);
            this.grd_sample.addEventHandler("ontouchstart",this.grd_sample_ontouchstart,this);
            this.Spin00.addEventHandler("onchanged",this.Spin00_onchanged,this);
            this.Button02_00.addEventHandler("onclick",this.Button02_00_onclick,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
            this.Button05.addEventHandler("onclick",this.Button05_onclick,this);
            this.Button02_00_00.addEventHandler("onclick",this.Button02_00_00_onclick,this);
            this.Button02_00_00_00.addEventHandler("onclick",this.Button02_00_00_00_onclick,this);
            this.Button02_00_01.addEventHandler("onclick",this.Button02_00_01_onclick,this);
        };
        this.loadIncludeScript("RP_103761_Grid_setFixedColumn (1).xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
