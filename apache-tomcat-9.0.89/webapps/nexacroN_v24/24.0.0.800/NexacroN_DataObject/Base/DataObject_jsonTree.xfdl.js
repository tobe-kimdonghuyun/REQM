(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("jsonTreeTest");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new DataObject("DataObject00", this);
            obj._setContents([
            	{
            		"name" : "Android",
            		"age" : 70,
            		"isStrong" : true,
            		"knownWeakness" : null,
            		"nicknames" : [
            			{"Terminator":1},
            			{"The Governator":2}
            		],
            		"extra" : {
            			"foo" : "bar"
            		}
            	},
            	{
            		"name" : "ios",
            		"age" : 70,
            		"isStrong" : true,
            		"knownWeakness" : null,
            		"nicknames" : [
            			"Terminator",
            			"The Governator"
            		],
            		"extra" : {
            			"foo" : "bar"
            		}
            	},
            	{
            		"name" : "window",
            		"age" : 70,
            		"isStrong" : true,
            		"knownWeakness" : null,
            		"nicknames" : [
            			"Terminator",
            			"The Governator"
            		],
            		"extra" : {
            			"foo" : "bar"
            		}
            	},
            	{
            		"name" : "mac os",
            		"age" : 70,
            		"isStrong" : true,
            		"knownWeakness" : null,
            		"nicknames" : [
            			"Terminator",
            			"The Governator"
            		],
            		"extra" : {
            			"foo" : "bar"
            		}
            	}
            ]);
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset00", this);
            obj.set_binddataobject("DataObject00");
            obj.set_dataobjectpath("$[*]");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "name","datapath" : "@.name","type" : "STRING","size" : "256"},{"id" : "age","datapath" : "@.age","type" : "STRING","size" : "256"},{"id" : "isStrong","datapath" : "@.isStrong","type" : "STRING","size" : "256"},{"id" : "knownWeakness","datapath" : "@.knownWeakness","type" : "STRING","size" : "256"},{"id" : "nicknames","datapath" : "@.nicknames","type" : "STRING","size" : "256"},{"id" : "extra","datapath" : "@.extra","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","28","91","815","352",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"name\"/><Cell col=\"1\" text=\"age\"/><Cell col=\"2\" text=\"isStrong\"/><Cell col=\"3\" text=\"knownWeakness\"/><Cell col=\"4\" text=\"nicknames\"/><Cell col=\"5\" text=\"extra\"/></Band><Band id=\"body\"><Cell text=\"bind:name\"/><Cell col=\"1\" text=\"bind:age\"/><Cell col=\"2\" text=\"bind:isStrong\"/><Cell col=\"3\" text=\"bind:knownWeakness\"/><Cell col=\"4\" text=\"bind:nicknames\"/><Cell col=\"5\" text=\"bind:extra\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","38","35","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Button00");
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
        this.registerScript("DataObject_jsonTree.xfdl", function() {

        this.jsonTreeTest_onload = function(obj,e)
        {
        	console.log(this.DataObject00.data)
        };

        this.Grid00_oncellclick = function(obj,e)
        {
        	console.log(this.Dataset00.getColumn(e.row, e.col));
        	try {
        		console.log(JSON.parse(this.Dataset00.getColumn(e.row, e.col)));
            } catch(e) {
        		console.log('파싱 실패')
            }
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.jsonTreeTest_onload,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("DataObject_jsonTree.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
