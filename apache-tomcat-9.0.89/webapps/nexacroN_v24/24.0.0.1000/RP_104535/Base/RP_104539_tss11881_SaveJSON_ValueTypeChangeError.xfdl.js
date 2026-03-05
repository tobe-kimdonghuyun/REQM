(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("LoadJSON_ValueTypeChangeError");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1900,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new DataObject("DataObject00", this);
            obj._setContents({
            	"id" : "Dataset00",
            	"ColumnInfo" : {
            		"Column" : [
            			{
            				"id" : "RowDataDiscription",
            				"type" : "STRING",
            				"size" : "256"
            			},
            			{
            				"id" : "STRING",
            				"type" : "STRING",
            				"size" : "256"
            			},
            			{
            				"id" : "INT",
            				"type" : "INT",
            				"size" : "256"
            			},
            			{
            				"id" : "FLOAT",
            				"type" : "FLOAT",
            				"size" : "256"
            			},
            			{
            				"id" : "BIGDECIMAL",
            				"type" : "BIGDECIMAL",
            				"size" : "256"
            			},
            			{
            				"id" : "DATE",
            				"type" : "DATE",
            				"size" : "256"
            			},
            			{
            				"id" : "TIME",
            				"type" : "TIME",
            				"size" : "256"
            			},
            			{
            				"id" : "DATETIME",
            				"type" : "DATETIME",
            				"size" : "256"
            			},
            			{
            				"id" : "LITERAL",
            				"type" : "STRING",
            				"size" : "256"
            			}
            		]
            	},
            	"Rows" : [
            		{
            			"RowDataDiscription" : "ALL Strings",
            			"STRING" : "AAA",
            			"INT" : "0",
            			"FLOAT" : "0",
            			"BIGDECIMAL" : "0",
            			"DATE" : "20260218",
            			"TIME" : "110000000",
            			"DATETIME" : "20260219231530000",
            			"LITERAL" : "true"
            		},
            		{
            			"RowDataDiscription" : "ALL Strings",
            			"STRING" : "AAA",
            			"INT" : "0",
            			"FLOAT" : "0",
            			"BIGDECIMAL" : "0",
            			"DATE" : "20260218",
            			"TIME" : "110000000",
            			"DATETIME" : "20260219231530000",
            			"LITERAL" : "true"
            		}
            	]
            });
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset00", this);
            obj.set_binddataobject("DataObject00");
            obj.set_dataobjectpath("$.Rows[*]");
            obj.set_updatecontrol("false");
            obj.set_dataobjectbindmode("twoway");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "RowDataDiscription","type" : "STRING","size" : "256","datapath" : "@.RowDataDiscription","prop" : "TEXT","sumtext" : "aaa"},{"id" : "STRING","type" : "STRING","size" : "256","datapath" : "@.STRING"},{"id" : "INT","type" : "INT","size" : "256","datapath" : "@.INT","prop" : "MAX"},{"id" : "FLOAT","type" : "FLOAT","size" : "256","datapath" : "@.FLOAT","prop" : "MIN"},{"id" : "BIGDECIMAL","type" : "BIGDECIMAL","size" : "256","datapath" : "@.BIGDECIMAL"},{"id" : "DATE","type" : "DATE","size" : "256","datapath" : "@.DATE"},{"id" : "TIME","type" : "TIME","size" : "256","datapath" : "@.TIME"},{"id" : "DATETIME","type" : "DATETIME","size" : "256","datapath" : "@.DATETIME"},{"id" : "LITERAL","type" : "STRING","size" : "256","datapath" : "@.LITERAL"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new TextArea("taLoadJSON","13","12","1171","148",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_value("{\"id\":\"Dataset00\",\"ColumnInfo\":{\"Column\":[{\"id\":\"RowDataDiscription\",\"type\":\"STRING\",\"size\":\"256\", \"datapath\":\"@.RowDataDiscription\"}\n,{\"id\":\"STRING\",\"type\":\"STRING\",\"size\":\"256\", \"datapath\":\"@.STRING\"}\n,{\"id\":\"INT\",\"type\":\"INT\",\"size\":\"256\", \"datapath\":\"@.INT\"}\n,{\"id\":\"FLOAT\",\"type\":\"FLOAT\",\"size\":\"256\", \"datapath\":\"@.FLOAT\"}\n,{\"id\":\"BIGDECIMAL\",\"type\":\"BIGDECIMAL\",\"size\":\"256\", \"datapath\":\"@.BIGDECIMAL\"}\n,{\"id\":\"DATE\",\"type\":\"DATE\",\"size\":\"256\", \"datapath\":\"@.DATE\"}\n,{\"id\":\"TIME\",\"type\":\"TIME\",\"size\":\"256\", \"datapath\":\"@.TIME\"}\n,{\"id\":\"DATETIME\",\"type\":\"DATETIME\",\"size\":\"256\", \"datapath\":\"@.DATETIME\"}\n,{\"id\":\"LITERAL\",\"type\":\"STRING\",\"size\":\"256\", \"datapath\":\"@.LITERAL\"}\n]}\n,\"Rows\":[\n\t{\"RowDataDiscription\":\"integer_zero string\",\"STRING\":\"0\",\"INT\":\"0\",\"FLOAT\":\"0\",\"BIGDECIMAL\":\"0\",\"DATE\":\"0\",\"TIME\":\"0\",\"DATETIME\":\"0\",\"LITERAL\":\"0\"},\n\t{\"RowDataDiscription\":\"integer_zero Literal(Exclude datetime type)\",\"STRING\":0,\"INT\":0,\"FLOAT\":0,\"BIGDECIMAL\":0,\"DATE\":\"0\",\"TIME\":\"0\",\"DATETIME\":\"0\",\"LITERAL\":0},\n\n\t{\"RowDataDiscription\":\"integer_positive string\",\"STRING\":\"123\",\"INT\":\"123\",\"FLOAT\":\"123\",\"BIGDECIMAL\":\"123\",\"DATE\":\"123\",\"TIME\":\"123\",\"DATETIME\":\"123\",\"LITERAL\":\"123\"},\n\t{\"RowDataDiscription\":\"integer_positive Literal(Exclude datetime type)\",\"STRING\":123,\"INT\":123,\"FLOAT\":123,\"BIGDECIMAL\":123,\"DATE\":\"123\",\"TIME\":\"123\",\"DATETIME\":\"123\",\"LITERAL\":123},\n\n\t{\"RowDataDiscription\":\"integer_negative string\",\"STRING\":\"-123\",\"INT\":\"-123\",\"FLOAT\":\"-123\",\"BIGDECIMAL\":\"-123\",\"DATE\":\"-123\",\"TIME\":\"-123\",\"DATETIME\":\"-123\",\"LITERAL\":\"-123\"},\n\t{\"RowDataDiscription\":\"integer_negative Literal(Exclude datetime type)\",\"STRING\":-123,\"INT\":-123,\"FLOAT\":-123,\"BIGDECIMAL\":\"-123\",\"DATE\":\"-123\",\"TIME\":\"-123\",\"DATETIME\":\"-123\",\"LITERAL\":-123},\n\n\t{\"RowDataDiscription\":\"integer_large string\",\"STRING\":\"1234567890123450000\",\"INT\":\"1234567890123450000\",\"FLOAT\":\"1234567890123450000\",\"BIGDECIMAL\":\"1234567890123450000\",\"DATE\":\"1234567890123450000\",\"TIME\":\"1234567890123450000\",\"DATETIME\":\"1234567890123450000\",\"LITERAL\":\"1234567890123450000\"},\n\t{\"RowDataDiscription\":\"integer_large Literal(Exclude datetime type)\",\"STRING\":1234567890123450000,\"INT\":1234567890123450000,\"FLOAT\":1234567890123450000,\"BIGDECIMAL\":1234567890123450000,\"DATE\":\"1234567890123450000\",\"TIME\":\"1234567890123450000\",\"DATETIME\":\"1234567890123450000\",\"LITERAL\":1234567890123450000},\n\n\t{\"RowDataDiscription\":\"float_simple string\",\"STRING\":\"1.23\",\"INT\":\"1.23\",\"FLOAT\":\"1.23\",\"BIGDECIMAL\":\"1.23\",\"DATE\":\"1.23\",\"TIME\":\"1.23\",\"DATETIME\":\"1.23\",\"LITERAL\":\"1.23\"},\n\t{\"RowDataDiscription\":\"float_simple Literal(Exclude datetime type)\",\"STRING\":1.23,\"INT\":1.23,\"FLOAT\":1.23,\"BIGDECIMAL\":1.23,\"DATE\":\"1.23\",\"TIME\":\"1.23\",\"DATETIME\":\"1.23\",\"LITERAL\":1.23},\n\n\t{\"RowDataDiscription\":\"float_negative string\",\"STRING\":\"-1.23\",\"INT\":\"-1.23\",\"FLOAT\":\"-1.23\",\"BIGDECIMAL\":\"-1.23\",\"DATE\":\"-1.23\",\"TIME\":\"-1.23\",\"DATETIME\":\"-1.23\",\"LITERAL\":\"-1.23\"},\n\t{\"RowDataDiscription\":\"float_negative Literal(Exclude datetime type)\",\"STRING\":-1.23,\"INT\":-1.23,\"FLOAT\":-1.23,\"BIGDECIMAL\":-1.23,\"DATE\":\"-1.23\",\"TIME\":\"-1.23\",\"DATETIME\":\"-1.23\",\"LITERAL\":-1.23},\n\n\t{\"RowDataDiscription\":\"float_exponent_positive string\",\"STRING\":\"1e10\",\"INT\":\"1e10\",\"FLOAT\":\"1e10\",\"BIGDECIMAL\":\"1e10\",\"DATE\":\"1e10\",\"TIME\":\"1e10\",\"DATETIME\":\"1e10\",\"LITERAL\":\"1e10\"},\n\t{\"RowDataDiscription\":\"float_exponent_positive Literal(Exclude datetime type)\",\"STRING\":1e10,\"INT\":1e10,\"FLOAT\":1e10,\"BIGDECIMAL\":1e10,\"DATE\":\"1e10\",\"TIME\":\"1e10\",\"DATETIME\":\"1e10\",\"LITERAL\":1e10},\n\n\t{\"RowDataDiscription\":\"float_exponent_negative string\",\"STRING\":\"1e-10\",\"INT\":\"1e-10\",\"FLOAT\":\"1e-10\",\"BIGDECIMAL\":\"1e-10\",\"DATE\":\"1e-10\",\"TIME\":\"1e-10\",\"DATETIME\":\"1e-10\",\"LITERAL\":\"1e-10\"},\n\t{\"RowDataDiscription\":\"float_exponent_negative Literal(Exclude datetime type)\",\"STRING\":1e-10,\"INT\":1e-10,\"FLOAT\":1e-10,\"BIGDECIMAL\":1e-10,\"DATE\":\"1e-10\",\"TIME\":\"1e-10\",\"DATETIME\":\"1e-10\",\"LITERAL\":1e-10},\n\n\t{\"RowDataDiscription\":\"float_exponent_signed string\",\"STRING\":\"-1.23E+10\",\"INT\":\"-1.23E+10\",\"FLOAT\":\"-1.23E+10\",\"BIGDECIMAL\":\"-1.23E+10\",\"DATE\":\"-1.23E+10\",\"TIME\":\"-1.23E+10\",\"DATETIME\":\"-1.23E+10\",\"LITERAL\":\"-1.23E+10\"},\n\t{\"RowDataDiscription\":\"float_exponent_signed Literal(Exclude datetime type)\",\"STRING\":-1.23E+10,\"INT\":-1.23E+10,\"FLOAT\":-1.23E+10,\"BIGDECIMAL\":-1.23E+10,\"DATE\":\"-1.23E+10\",\"TIME\":\"-1.23E+10\",\"DATETIME\":\"-1.23E+10\",\"LITERAL\":-1.23E+10},\n\n\t{\"RowDataDiscription\":\"ALL empty string\",\"STRING\":\"\",\"INT\":\"\",\"FLOAT\":\"\",\"BIGDECIMAL\":\"\",\"DATE\":\"\",\"TIME\":\"\",\"DATETIME\":\"\",\"LITERAL\":\"\"},\n\n\t{\"RowDataDiscription\":\"Literals true_value\",\"STRING\":true,\"INT\":true,\"FLOAT\":true,\"BIGDECIMAL\":true,\"DATE\":\"\",\"TIME\":\"\",\"DATETIME\":\"\",\"LITERAL\":true},\n\t{\"RowDataDiscription\":\"Literals false_value\",\"STRING\":false,\"INT\":false,\"FLOAT\":false,\"BIGDECIMAL\":false,\"DATE\":\"\",\"TIME\":\"\",\"DATETIME\":\"\",\"LITERAL\":false},\n\t{\"RowDataDiscription\":\"Literals null_value\",\"STRING\":null,\"INT\":null,\"FLOAT\":null,\"BIGDECIMAL\":null,\"DATE\":\"\",\"TIME\":\"\",\"DATETIME\":\"\",\"LITERAL\":null}\n]}\n");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","13","220","1171",null,null,"180",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"352\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"50\"/></Rows><Band id=\"head\"><Cell text=\"RowDataDiscription\"/><Cell col=\"1\" text=\"STRING\"/><Cell col=\"2\" text=\"INT\"/><Cell col=\"3\" text=\"FLOAT\"/><Cell col=\"4\" text=\"BIGDECIMAL\"/><Cell col=\"5\" text=\"DATE\"/><Cell col=\"6\" text=\"TIME\"/><Cell col=\"7\" text=\"DATETIME\"/><Cell col=\"8\" text=\"LITERAL\"/></Band><Band id=\"body\"><Cell text=\"bind:RowDataDiscription\" wordWrap=\"english\" edittype=\"textarea\"/><Cell col=\"1\" text=\"bind:STRING\" edittype=\"textarea\"/><Cell col=\"2\" text=\"bind:INT\" edittype=\"textarea\"/><Cell col=\"3\" text=\"bind:FLOAT\" edittype=\"textarea\"/><Cell col=\"4\" text=\"bind:BIGDECIMAL\" edittype=\"textarea\"/><Cell col=\"5\" text=\"bind:DATE\" edittype=\"textarea\"/><Cell col=\"6\" text=\"bind:TIME\" edittype=\"textarea\"/><Cell col=\"7\" text=\"bind:DATETIME\" edittype=\"textarea\"/><Cell col=\"8\" text=\"bind:LITERAL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnLoadJSON","150","161","190","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Dataset.loadJSON");
            this.addChild(obj.name, obj);

            obj = new Button("btnClearDataset","18","161","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Clear Dataset");
            this.addChild(obj.name, obj);

            obj = new Button("btnJSONparse","355","161","190","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("JSON.parse -> DataObject");
            this.addChild(obj.name, obj);

            obj = new TextArea("taSaveJSON","13",null,"1171","100",null,"20",null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Button("btnSaveJSON","150",null,"190","50",null,"123",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Dataset.saveJSON");
            this.addChild(obj.name, obj);

            obj = new Button("btnJSONstringify","355",null,"190","50",null,"123",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("ADataObject -> JSON.stringify");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","599","177","70","27",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1900,900,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("RP_104539_tss11881_SaveJSON_ValueTypeChangeError.xfdl", function() {

        this.btnLoadJSON_onclick = function(obj,e)
        {
        	var sJSON = this.taLoadJSON.value;
        	try {
        		this.Dataset00.loadJSON(sJSON);
        	} catch(e) {
        		trace("Dataset.loadJSON Exception : " + e);
        		alert("Dataset.loadJSON Exception : " + e);
        	}
        };

        this.btnClearDataset_onclick = function(obj,e)
        {
        	this.Dataset00.clearData();
        };

        this.btnJSONparse_onclick = function(obj,e)
        {
        	var sJSON = this.taLoadJSON.value;
        	try {
        		var oJSON = JSON.parse(sJSON);
        		trace("oJSON=[[[" + oJSON + "]]]");
        		this.DataObject00.set_data(oJSON);
        	} catch(e) {
        		trace("JSON.parse Exception : " + e);
        		alert("JSON.parse Exception : " + e);
        	}
        };

        this.btnSaveJSON_onclick = function(obj,e)
        {
        	try {
        		var sJSON = this.Dataset00.saveJSON();
        		this.taSaveJSON.set_value(sJSON);
        	} catch(e) {
        		trace("Dataset.saveJSON() Fire Exception!!\n" + e);
        		alert("Dataset.saveJSON() Fire Exception!!\n" + e);
        	}
        };

        this.btnJSONstringify_onclick = function(obj,e)
        {
        	try {
        		var oJSON = this.DataObject00.data;
        		var sJSON = JSON.stringify(oJSON);
        		sJSON = sJSON.replaceAll("},", "},\n");
        		this.taSaveJSON.set_value(sJSON);
        	} catch(e) {
        		trace("DataObject sava JSON String Fire Exception!!\n" + e);
        		alert("DataObject sava JSON String Fire Exception!!\n" + e);
        	}
        };

        this.Button00_onclick = function(obj,e)
        {

        	this.taSaveJSON.set_value(this.Dataset00.saveXML());
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnLoadJSON.addEventHandler("onclick",this.btnLoadJSON_onclick,this);
            this.btnClearDataset.addEventHandler("onclick",this.btnClearDataset_onclick,this);
            this.btnJSONparse.addEventHandler("onclick",this.btnJSONparse_onclick,this);
            this.btnSaveJSON.addEventHandler("onclick",this.btnSaveJSON_onclick,this);
            this.btnJSONstringify.addEventHandler("onclick",this.btnJSONstringify_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("RP_104539_tss11881_SaveJSON_ValueTypeChangeError.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
