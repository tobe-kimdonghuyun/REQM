(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("A_Dataset_addColumn_RP81262");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("ds00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "Column1","size" : "256","type" : "STRING"}]},"Rows" : [{"Column1" : "2"},{}]});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("ds01", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "size","size" : "256","type" : "STRING"},{"id" : "Column0","size" : "256","type" : "STRING"}]},"Rows" : [{},{},{}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Button("btn00","25","30","235","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("setColumn_forCreatedColumn");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn01","287","30","247","41",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("addColumn_id:size");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("grd00","290","89","200","121",null,null,null,null,null,null,this);
            obj.set_binddataset("ds00");
            obj.set_taborder("2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column1\"/></Band><Band id=\"body\"><Cell text=\"bind:Column1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("grd01","30","89","170","108",null,null,null,null,null,null,this);
            obj.set_binddataset("ds01");
            obj.set_taborder("3");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"size\"/><Cell col=\"1\" text=\"Column0\"/></Band><Band id=\"body\"><Cell text=\"bind:size\"/><Cell col=\"1\" text=\"bind:Column0\"/></Band></Format></Formats>");
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
        this.addIncludeScript("A_Dataset_addColumn_RP81262.xfdl","lib::libCommon.xjs");
        this.registerScript("A_Dataset_addColumn_RP81262.xfdl", function(nexacro, system, trace, environment, application) {

        this.executeIncludeScript("lib::libCommon.xjs"); /*include "lib::libCommon.xjs"*/;
        var tapi = this.gfnGetTestAPI();
        var tc  = {
        	description: "Dataset_Method_addColumn Columnid:size",
            metadata : {
        			 objectId : "nexacro.Dataset",        // 객체 식별자 : typedef의 object id(개별)
        			 featureType: tapi.FT_METHOD,     		// object metainfo의 속성 종류
        			 elementName : "addColumn",        // 요소 이름 : [ object metainfo의 속성 이름 | undefined ]
        			 keyword : ["Dataset", "addColumn", "setColumn"]
            },
        	initialize: function(){
        	this.ds00.set_updatecontrol(true);
        	this.ds00.addRow();
        	this.ds01.addRow();

        	},
        	validator : {

        	},
        	finalize : function()
        	{

        		this.ds00.clearData();
        		this.ds01.clearData();
        		this.ds00.set_updatecontrol(false);
        		this.ds00.deleteColumn("size");
        	}
        };

        tc.validator ['tc_vc'] = {
        	description: "setColumn_forCreatedColumn",
        	prepare: function (){},
        	run: function () {

        		var rtn = this.btn00_onclick();
        		return rtn;
        	},
        	check: function  (resultValue) {

        		return nexacro.test.checkEqual(this, resultValue, "Test");
        	},
        	teardown: function () {

        	}
        };

        tc.validator ['tc_vc2'] = {
        	description: "addColumn_id:size",
        	prepare: function (){

        	},
        	run: function () {

        		var rtn = this.btn01_onclick();
        		return rtn;
        	},
        	check: function  (resultValue) {

        		return nexacro.test.checkEqual(this, resultValue, "newColumn");
        	},
        	teardown: function () {


        	}
        };

        this.tcList = [tc];
        this.btn00_onclick = function(obj,e)
        {
        	this.ds01.setColumn(0, "size", "Test");
        	return this.ds01.getColumn(0, "size");
        };


        this.A_Dataset_addColumn_RP81262_onload = function(obj,e)
        {
        	 this.gfnInit(this.tcList, this); //러너에 테스트케이스 등록
        };

        this.btn01_onclick = function(obj,e)
        {

        	var idx = this.ds00.addColumn("size");
        	if (idx == -1)
        		return -1;
        	this.ds00.setColumn(0, "size", "newColumn")
        	this.grd00.createFormat();
        	return this.ds00.getColumn(0, "size");

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.A_Dataset_addColumn_RP81262_onload,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
        };

        this.loadIncludeScript("A_Dataset_addColumn_RP81262.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
