(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sample_grid_24");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new DataObject("DataObject00", this);
            obj._setContents({
            	"id" : "Dataset00",
            	"ColumnInfo" : {
            		"Column" : [
            			{
            				"id" : "Name",
            				"type" : "STRING",
            				"size" : "256",
            				"prop" : "TEXT",
            				"sumtext" : "合計"
            			},
            			{
            				"id" : "Address",
            				"type" : "STRING",
            				"size" : "256"
            			},
            			{
            				"id" : "Company",
            				"type" : "STRING",
            				"size" : "256"
            			},
            			{
            				"id" : "Department",
            				"type" : "STRING",
            				"size" : "256"
            			},
            			{
            				"id" : "Salary",
            				"type" : "INT",
            				"size" : "256",
            				"prop" : "MIN"
            			}
            		]
            	},
            	"Rows" : [
            		{
            			"Name" : "John",
            			"Address" : "Seoul, KOREA",
            			"Company" : "1dollar",
            			"Department" : "Sales",
            			"Salary" : "15000"
            		},
            		{
            			"Name" : "James",
            			"Address" : "Barcelona, Spain",
            			"Company" : "EBOT",
            			"Department" : "Consulting",
            			"Salary" : "25000"
            		},
            		{
            			"Name" : "Donald",
            			"Address" : "Califonia, USA",
            			"Company" : "EBOT",
            			"Department" : "Research Institute",
            			"Salary" : "1000000"
            		},
            		{
            			"Name" : "Lisa",
            			"Address" : "London, United Kingdom",
            			"Company" : "1dollar",
            			"Department" : "Quality Assurance",
            			"Salary" : "3000"
            		},
            		{
            			"Name" : "Joe",
            			"Address" : "São Paulo, Brazil",
            			"Company" : "hangul",
            			"Department" : "R&D",
            			"Salary" : "8600"
            		},
            		{
            			"Name" : "Michael",
            			"Address" : "Mumbai, India",
            			"Company" : "1dollar",
            			"Department" : "Personnel",
            			"Salary" : "1300"
            		},
            		{
            			"Name" : "Lilli",
            			"Address" : "Ankara, Turkey",
            			"Company" : "hangul",
            			"Department" : "Quality Assurance",
            			"Salary" : "4400"
            		},
            		{
            			"Name" : "Colt",
            			"Address" : "Sydney, NSW, Australia ",
            			"Company" : "hangul",
            			"Department" : "Sales",
            			"Salary" : "62000"
            		}
            	]
            });
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset00", this);
            obj.set_binddataobject("DataObject00");
            obj.set_dataobjectpath("$.Rows[*]");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Name","type" : "STRING","size" : "256","prop" : "TEXT","sumtext" : "グループ","datapath" : "@.Name"},{"id" : "Address","type" : "STRING","size" : "256","datapath" : "@.Address"},{"id" : "Company","type" : "STRING","size" : "256","datapath" : "@.Company"},{"id" : "Department","type" : "STRING","size" : "256","datapath" : "@.Department","prop" : "TEXT","sumtext" : "最小値"},{"id" : "Salary","type" : "INT","size" : "256","prop" : "MIN","datapath" : "@.Salary"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_group","480","403","100","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("GROUP\r\nby Company");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_font("9pt Arial");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","30","182","560","211",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj.set_autosizingtype("row");
            obj.set_extendsizetype("none");
            obj.set_autosizebandtype("body");
            obj.getSetter("text").set("");
            obj.set_autoenter("none");
            obj.set_fillareatype("none");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("none");
            obj.set_cellmovingtype("none");
            obj.set_cellsizebandtype("body");
            obj.set_border("");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Name\" border=\"\"/><Cell col=\"1\" text=\"Address\" border=\"\"/><Cell col=\"2\" text=\"Company\" border=\"\"/><Cell col=\"3\" text=\"Department\" border=\"\"/><Cell col=\"4\" text=\"Salary\" border=\"\"/></Band><Band id=\"body\"><Cell text=\"bind:Name\" textAlign=\"left\" border=\"\"/><Cell col=\"1\" text=\"bind:Address\" textAlign=\"left\" wordWrap=\"char\" border=\"\"/><Cell col=\"2\" text=\"bind:Company\" textAlign=\"left\" border=\"\"/><Cell col=\"3\" text=\"bind:Department\" textAlign=\"left\" wordWrap=\"english\" border=\"\"/><Cell col=\"4\" text=\"bind:Salary\" displaytype=\"currency\" textAlign=\"right\" border=\"\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new TextArea("taLoadJSON","29","7","821","124",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_value("{\n\t\"id\": \"Dataset00\",\n\t\"ColumnInfo\" :\n\t{\n\t\t\"Column\":\n\t\t[\n\t\t\t{ \"id\":\"Name\", \"type\":\"STRING\", \"size\":\"100\", \"datapath\":\"@.Name\" },\n\t\t\t{ \"id\":\"Address\", \"type\":\"STRING\", \"size\":\"90\", \"datapath\":\"@.Address\" },\n\t\t\t{ \"id\":\"Company\", \"type\":\"STRING\", \"size\":\"80\", \"prop\":\"TEXT\", \"sumtext\":\"デーパート毎\", \"datapath\":\"@.Company\" },\n\t\t\t{ \"id\":\"Department\", \"type\":\"STRING\", \"size\":\"110\", \"prop\":\"TEXT\", \"sumtext\":\"合計\", \"datapath\":\"@.Department\" },\n\t\t\t{ \"id\":\"Salary\", \"type\":\"BIGDECIMAL\", \"size\":\"200\", \"prop\":\"SUM\", \"datapath\":\"@.Salary\" }\n\t\t]\n\t},\n\t\"Rows\":\n\t[\n\t\t{\n\t\t \"Name\":\"John\", \"Address\":\"Seoul, KOREA\", \"Company\":\"1dollar\", \"Department\":\"Sales\", \"Salary\":\"15000\"\n\t\t},\n\t\t{\n\t\t \"Name\":\"James\", \"Address\":\"Barcelona, Spain\", \"Company\":\"EBOT\", \"Department\":\"Consulting\", \"Salary\":\"25000\"\n\t\t},\n\t\t{\n\t\t \"Name\":\"Donald\", \"Address\":\"Califonia, USA\", \"Company\":\"EBOT\", \"Department\":\"Research Institute\", \"Salary\":\"1000000\"\n\t\t},\n\t\t{\n\t\t \"Name\":\"Lisa\", \"Address\":\"London, United Kingdom\", \"Company\":\"1dollar\", \"Department\":\"Quality Assurance\", \"Salary\":\"3000\"\n\t\t},\n\t\t{\n\t\t \"Name\":\"Joe\", \"Address\":\"São Paulo, Brazil\", \"Company\":\"hangul\", \"Department\":\"R&D\", \"Salary\":\"8600\"\n\t\t},\n\t\t{\n\t\t \"Name\":\"Michael\", \"Address\":\"Mumbai, India\", \"Company\":\"1dollar\", \"Department\":\"Personnel\", \"Salary\":\"1300\"\n\t\t},\n\t\t{\n\t\t \"Name\":\"Lilli\", \"Address\":\"Ankara, Turkey\", \"Company\":\"hangul\", \"Department\":\"Quality Assurance\", \"Salary\":\"4400\"\n\t\t},\n\t\t{\n\t\t \"Name\":\"Colt\", \"Address\":\"Sydney, NSW, Australia \", \"Company\":\"hangul\", \"Department\":\"Sales\", \"Salary\":\"62000\"\n\t\t}\n\t]\n}");
            this.addChild(obj.name, obj);

            obj = new TextArea("taSaveJSON","30","446","820","144",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("btnLoadJSON","30","139","122","33",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Dataset.loadJSON");
            this.addChild(obj.name, obj);

            obj = new Button("btnCopySaveToLoad","850","10","164","580",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Copy Save to Load");
            this.addChild(obj.name, obj);

            obj = new Button("btnSaveJSON","30","404","122","33",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Dataset.saveJSON");
            this.addChild(obj.name, obj);

            obj = new Button("btnJSONparse","178","139","182","33",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("JSON.parse -> DataObject");
            this.addChild(obj.name, obj);

            obj = new Button("btnJSONstringify","178","404","182","33",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("DataObject -> JSON.stringify");
            this.addChild(obj.name, obj);

            obj = new Button("btnClearDataset","490","141","90","39",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Clear Data");
            this.addChild(obj.name, obj);

            obj = new Button("btnClearAllDataset","380","141","100","39",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Clear All Dataset");
            this.addChild(obj.name, obj);

            obj = new Button("btnClearGroup","380","404","100","32",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Clear GROUP");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_font("9pt Arial");
            this.addChild(obj.name, obj);

            obj = new Button("btnCheckColumnInfo","598","183","143","52",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Check Column Info");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","600","240","141","47",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("saveXML");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1024,768,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("RP_104535_tss11877_SaveJSON_StructureError.xfdl", function() {
        this.btn_group_onclick = function(obj,e)
        {
        	this.Dataset00.set_keystring("G:Company");
        };
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

        this.btnSaveJSON_onclick = function(obj,e)
        {
        	var sJSON = this.Dataset00.saveJSON();
        	this.taSaveJSON.set_value(sJSON);
        };

        this.btnCopySaveToLoad_onclick = function(obj,e)
        {
        	this.taLoadJSON.set_value(this.taSaveJSON.value);
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

        this.btnJSONstringify_onclick = function(obj,e)
        {
        	var oJSON = this.DataObject00.data;
        	var sJSON = JSON.stringify(oJSON);
        	this.taSaveJSON.set_value(sJSON);
        };

        this.btnClearDataset_onclick = function(obj,e)
        {
        	this.Dataset00.clearData();
        };

        this.btnClearAllDataset_onclick = function(obj,e)
        {
        	this.Dataset00.clear();
        };

        this.btnClearGroup_onclick = function(obj,e)
        {
        	this.Dataset00.set_keystring("");
        };

        this.btnCheckColumnInfo_onclick = function(obj,e)
        {
        	var iColCount = this.Dataset00.getColCount();
        	var sColInfo = "";
        	for(var i = 0; i < iColCount; i++) {
        		var oColInfo = this.Dataset00.getColumnInfo(i);
        		sColInfo += "" + oColInfo.name + " : type=" + oColInfo.type + "; size=" + oColInfo.size + "; prop=" + oColInfo.prop + "; sumtext=" + oColInfo.sumtext + "; datapath=" + oColInfo.datapath + ";\n";
        	}
        	sColInfo = "--- ColumnInfo ---------\n" + sColInfo + "---\n";
        	trace(sColInfo);
        	alert(sColInfo);
        };

        this.Button00_onclick = function(obj,e)
        {
        	trace(this.Dataset00.saveXML());
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_group.addEventHandler("onclick",this.btn_group_onclick,this);
            this.btnLoadJSON.addEventHandler("onclick",this.btnLoadJSON_onclick,this);
            this.btnCopySaveToLoad.addEventHandler("onclick",this.btnCopySaveToLoad_onclick,this);
            this.btnSaveJSON.addEventHandler("onclick",this.btnSaveJSON_onclick,this);
            this.btnJSONparse.addEventHandler("onclick",this.btnJSONparse_onclick,this);
            this.btnJSONstringify.addEventHandler("onclick",this.btnJSONstringify_onclick,this);
            this.btnClearDataset.addEventHandler("onclick",this.btnClearDataset_onclick,this);
            this.btnClearAllDataset.addEventHandler("onclick",this.btnClearAllDataset_onclick,this);
            this.btnClearGroup.addEventHandler("onclick",this.btnClearGroup_onclick,this);
            this.btnCheckColumnInfo.addEventHandler("onclick",this.btnCheckColumnInfo_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("RP_104535_tss11877_SaveJSON_StructureError.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
