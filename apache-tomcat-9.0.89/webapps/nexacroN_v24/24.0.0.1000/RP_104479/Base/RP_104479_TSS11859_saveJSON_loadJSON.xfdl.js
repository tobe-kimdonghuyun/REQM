(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TSS11859_saveJSON_loadJSON");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new DataObject("DataObject00", this);
            obj._setContents({
            	"id": "Dataset00",
            	"ColumnInfo" :
            	{
            		"Column":
            		[
            			{ "id":"Column1", "type":"STRING", "size":"256" },
            			{ "id":"Column2", "type":"STRING", "size":"256" },
            			{ "id":"Column3", "type":"STRING", "size":"256" }
            		]
            	},
            	"Rows":
            	[
            		{
            		 "Column1":"JAAA\nBBB", "Column2":"JCCC\\nDDD", "Column3":"JEEE\\\\nFFF"
            		}
            	]
            }
            );
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column1","type" : "STRING","size" : "256"},{"id" : "Column2","type" : "STRING","size" : "256"},{"id" : "Column3","type" : "STRING","size" : "256"}]},"Rows" : [{"Column1" : "DAAA\nBBB","Column2" : "DCCC\\nDDD","Column3" : "DEEE\\\\nFFF"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset01", this);
            obj.set_binddataobject("DataObject00");
            obj.set_dataobjectpath("$.Rows[*]");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column1","datapath" : "@.Column1","type" : "STRING","size" : "256"},{"id" : "Column2","datapath" : "@.Column2","type" : "STRING","size" : "256"},{"id" : "Column3","datapath" : "@.Column3","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset02", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column1","type" : "STRING","size" : "256"},{"id" : "Column2","type" : "STRING","size" : "256"},{"id" : "Column3","type" : "STRING","size" : "256"}]},"Rows" : [{"Column1" : "DAAA\nBBB","Column2" : "DCCC\\nDDD","Column3" : "DEEE\\\\nFFF"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","11","15","129","25",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Load JSON String : ");
            this.addChild(obj.name, obj);

            obj = new TextArea("taLoadJSONString","130","10","1050","120",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_value("{\"id\": \"Dataset00\",\"ColumnInfo\" :{\"Column\":[{ \"id\":\"Column1\", \"type\":\"STRING\", \"size\":\"256\" },{ \"id\":\"Column2\", \"type\":\"STRING\", \"size\":\"256\" },{ \"id\":\"Column3\", \"type\":\"STRING\", \"size\":\"256\" }]},\"Rows\":[{ \"Column1\":\"AAA\\nBBB\", \"Column2\":\"CCC\\\\nDDD\", \"Column3\":\"EEE\\\\\\\\nFFF\"}]}");
            obj.set_wordWrap("english");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","30","231","300","120",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"66\"/></Rows><Band id=\"head\"><Cell text=\"Column1\"/><Cell col=\"1\" text=\"Column2\"/><Cell col=\"2\" text=\"Column3\"/></Band><Band id=\"body\"><Cell text=\"bind:Column1\"/><Cell col=\"1\" text=\"bind:Column2\"/><Cell col=\"2\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","420","230","300","120",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("Dataset01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"63\"/></Rows><Band id=\"head\"><Cell text=\"Column1\"/><Cell col=\"1\" text=\"Column2\"/><Cell col=\"2\" text=\"Column3\"/></Band><Band id=\"body\"><Cell text=\"bind:Column1\"/><Cell col=\"1\" text=\"bind:Column2\"/><Cell col=\"2\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnLoadJSON01","30","160","300","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Dataset.loadJSON()");
            this.addChild(obj.name, obj);

            obj = new Button("btnJSONParseToLoadJSON","420","160","300","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("JSON.parse -> Dataobject.set_data()");
            this.addChild(obj.name, obj);

            obj = new Button("btnSaveJSON01","30","369","300","50",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Dataset.saveJSON()");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","11","468","129","25",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Save JSON String : ");
            this.addChild(obj.name, obj);

            obj = new TextArea("taSaveJSONString","130","463","1050","367",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_wordWrap("english");
            this.addChild(obj.name, obj);

            obj = new Button("btnJSONStringify","420","369","300","50",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Dataobject.data -> JSON.stringify");
            this.addChild(obj.name, obj);

            obj = new Button("btnCopySaveJSONStringToLoadJSONString","810","247","300","93",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Copy Save JSON String -> Load JSON String");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("RP_104479_TSS11859_saveJSON_loadJSON.xfdl", function() {

        this.btnLoadJSON_onclick = function(obj,e)
        {
        	var sJSON = this.taLoadJSONString.value;
        	trace("JSON String = [[[" + sJSON + "]]]\n");
        	this.Dataset00.loadJSON(sJSON);
        };

        this.btnJSONParseToLoadJSON_onclick = function(obj,e)
        {
        	var sJSON = this.taLoadJSONString.value;
        	trace("JSON String = [[[" + sJSON + "]]]\n");
        	var oJSON = JSON.parse(sJSON);
        	this.DataObject00.set_data(oJSON);
        };


        this.btnSaveJSON01_onclick = function(obj,e)
        {
        	var sJSON = this.Dataset00.saveJSON();
        	trace("JSON String = [[[" + sJSON + "]]]\n");
        	this.taSaveJSONString.set_value(sJSON);
        };

        this.btnJSONStringify_onclick = function(obj,e)
        {
        	var oJSON = this.DataObject00.data;
        	var sJSON = JSON.stringify(oJSON);
        	trace("JSON String = [[[" + sJSON + "]]]\n");
        	this.taSaveJSONString.set_value(sJSON);
        };

        this.btnCopySaveJSONStringToLoadJSONString_onclick = function(obj,e)
        {
        	this.taLoadJSONString.set_value(this.taSaveJSONString.value);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnLoadJSON01.addEventHandler("onclick",this.btnLoadJSON_onclick,this);
            this.btnJSONParseToLoadJSON.addEventHandler("onclick",this.btnJSONParseToLoadJSON_onclick,this);
            this.btnSaveJSON01.addEventHandler("onclick",this.btnSaveJSON01_onclick,this);
            this.btnJSONStringify.addEventHandler("onclick",this.btnJSONStringify_onclick,this);
            this.btnCopySaveJSONStringToLoadJSONString.addEventHandler("onclick",this.btnCopySaveJSONStringToLoadJSONString_onclick,this);
        };
        this.loadIncludeScript("RP_104479_TSS11859_saveJSON_loadJSON.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
