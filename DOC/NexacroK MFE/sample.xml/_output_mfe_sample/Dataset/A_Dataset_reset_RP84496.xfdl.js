(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("A_Dataset_reset_RP84496");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("Dataset00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "Column0","size" : "256","type" : "STRING"},{"id" : "Column1","size" : "256","type" : "STRING"},{"id" : "Column2","size" : "256","type" : "STRING"},{"id" : "Column3","size" : "256","type" : "STRING"}]},"Rows" : [{"Column0" : "1","Column1" : "a","Column2" : "aa","Column3" : "aaa"},{"Column0" : "2","Column1" : "b","Column2" : "bb","Column3" : "bbb"},{"Column0" : "3","Column1" : "c","Column2" : "cc","Column3" : "ccc"},{"Column0" : "4","Column1" : "d","Column2" : "dd","Column3" : "ddd"},{"Column0" : "5","Column1" : "e","Column2" : "ee","Column3" : "eee"}]});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("Dataset01", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "Column0","size" : "256","type" : "STRING"},{"id" : "Column1","size" : "256","type" : "STRING"},{"id" : "Column2","size" : "256","type" : "STRING"},{"id" : "Column3","size" : "256","type" : "STRING"}]},"Rows" : [{"Column0" : "1","Column1" : "a","Column2" : "aa","Column3" : "aaa"},{"Column0" : "2","Column1" : "b","Column2" : "bb","Column3" : "bbb"},{"Column0" : "3","Column1" : "c","Column2" : "cc","Column3" : "ccc"},{"Column0" : "4","Column1" : "d","Column2" : "dd","Column3" : "ddd"},{"Column0" : "5","Column1" : "e","Column2" : "ee","Column3" : "eee"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Grid("Grid00","16","14","468","332",null,null,null,null,null,null,this);
            obj.set_binddataset("Dataset00");
            obj.set_taborder("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"48\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"expr:dataset.getRowType(currow)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button02","510","116","207","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("delete");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00","510","70","174","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("reset");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01","507","26","207","34",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("insert");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("A_Dataset_reset_RP84496.xfdl","lib::libCommon.xjs");
        this.registerScript("A_Dataset_reset_RP84496.xfdl", function(nexacro, system, trace, environment, application) {
        this.executeIncludeScript("lib::libCommon.xjs"); /*include "lib::libCommon.xjs"*/;
        var tapi = this.gfnGetTestAPI();
        var tc  = {
        	description: "Dataset.reset 검증",
            metadata : {
        			 objectId : "nexacro.Dataset",        // 객체 식별자 : typedef의 object id(개별)
        			 featureType: tapi.FT_METHOD,     		// object metainfo의 속성 종류
        			 elementName : "reset",        // 요소 이름 : [ object metainfo의 속성 이름 | undefined ]
        			 keyword : ["Dataset", "reset"]
            },
        	initialize: function() {
        		this.logger.trace("initialize")
        		},
        	validator : {},
        	finalize : function() {
        		this.logger.trace("finalize");

        		}
        };

        tc.validator ['tc_vc1'] = { 				//validation id
        	description: "insert -> reset",
        	prepare: function () {
        		this.logger.trace("prepare");
        	},
        	run: function () {
        		this.logger.trace("Test Code");

        		this._run(0);
        		this._run(1);

        		return this._checkvalue();
        	},
        	check: function  (rtn) {
        		return nexacro.test.checkEqual(this, rtn , true); //”validation id”, Test	Result, expected Result
        	},
        	teardown: function () {
        		this.logger.trace("teardown");
        	}
        };

        tc.validator ['tc_vc2'] = { 				//validation id
        	description: "delete -> reset",
        	prepare: function () {
        		this.logger.trace("prepare");
        	},
        	run: function () {
        		this.logger.trace("Test Code");

        		this._run(2);
        		this._run(1);

        		return this._checkvalue();
        	},
        	check: function  (rtn) {
        		return nexacro.test.checkEqual(this, rtn, true); //”validation id”, Test	Result, expected Result
        	},
        	teardown: function () {
        		this.logger.trace("teardown");
        	}
        };

        this.tcList = [tc]; //수행 할 테스트케이스 리스트

        this.A_Dataset_reset_RP84496_onload = function(obj,e)
        {
        	 this.gfnInit(this.tcList, this); //러너에 테스트케이스 등록
        };

        this.Button01_onclick = function(obj,e)
        {
        	this._run(2);
        };

        this.Button00_onclick = function(obj,e)
        {
        	this._run(1);
        };

        this.Button02_onclick = function(obj,e)
        {
        		this._run(0);
        };

        this._run = function(step)
        {
        	switch(step)
        	{
        		case 0:
        			this.Dataset00.insertRow(0);
        			break;
        		case 1:
        			this.Dataset00.reset();
        			break;
        		case 2:
        			this.Dataset00.deleteRow(0);
        			break;

        		default:
        			break;
        	};
        };

        this._checkvalue = function()
        {
        	var records = this.Dataset00._rawRecords.slice(0);
        	var len = records.length;
        	var orgidx, rawidx;
        	if (len > 0)
        	{
        		for (var i = 0; i < len; i++)
        		{
        			orgidx = records[i]._orgidx;
        			rawidx = records[i]._rawidx;
        			//trace(orgidx, rawidx);
        			if (orgidx != rawidx)
        				return false;
        		}
        	}
        	else
        		return false;

        	return true;
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.A_Dataset_reset_RP84496_onload,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
        };

        this.loadIncludeScript("A_Dataset_reset_RP84496.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
