(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("A_Dataset_deleteMultiRows_RP83712");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("Dataset00", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "Column01","size" : "256","type" : "STRING"}]},"Rows" : [{"Column01" : "A"},{"Column01" : "B"},{"Column01" : "C"},{"Column01" : "D"},{"Column01" : "E"},{"Column01" : "F"},{"Column01" : "Drink"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Button("btn00","19","13","123","37",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("setRowType_delete");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn03","20","65","113","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("deleteMultiRows");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn01","27","144","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("check");
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
        this.addIncludeScript("A_Dataset_deleteMultiRows_RP83712.xfdl","lib::libCommon.xjs");
        this.registerScript("A_Dataset_deleteMultiRows_RP83712.xfdl", function(nexacro, system, trace, environment, application) {

        this.executeIncludeScript("lib::libCommon.xjs"); /*include "lib::libCommon.xjs"*/;
        var tapi = this.gfnGetTestAPI();
        var tc  = {
        	description: "Dataset_Method_deleteMultiRows",
            metadata : {
        			 objectId : "nexacro.Dataset",        // 객체 식별자 : typedef의 object id(개별)
        			 featureType: tapi.FT_METHOD,     		// object metainfo의 속성 종류
        			 elementName : "deleteMultiRows",        // 요소 이름 : [ object metainfo의 속성 이름 | undefined ]
        			 keyword : ["Dataset", "deleteMultiRows"]
            },
        	initialize: function(){
        	//
        	},
        	validator : {

        	},
        	finalize : function()
        	{
        		//
        	}
        };

        tc.validator ['tc_vc'] = {
        	description: "deleteMultiRows",
        	prepare: function (){},
        	run: function () {

        		var rtn = this._checkRun();
        		return rtn;
        	},
        	check: function  (resultValue) {

        		return nexacro.test.checkEqual(this, resultValue, "A");
        	},
        	teardown: function () {

        	}
        };

        this.tcList = [tc];

        this.A_Dataset_deleteMultiRows_RP83712_onload = function(obj,e)
        {
        	 this.gfnInit(this.tcList, this); //러너에 테스트케이스 등록
        };

        this.btn00_onclick = function(obj,e)
        {
        	this.Dataset00.set_updatecontrol(false);
        	this.Dataset00.setRowType(0,"D");
        };

        this.btn03_onclick = function(obj,e)
        {
        	this.Dataset00.deleteMultiRows([1,2]);
        };

        this.btn01_onclick = function(obj,e)
        {
        	var v = this.Dataset00.getColumn(0,0);

        };

        this._checkRun = function()
        {
        	this.Dataset00.set_updatecontrol(false);
        	this.Dataset00.setRowType(0,"D");
        	this.Dataset00.deleteMultiRows([1,2]);
        	var v = this.Dataset00.getColumn(0,0);

        	return  v;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.A_Dataset_deleteMultiRows_RP83712_onload,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn03.addEventHandler("onclick",this.btn03_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
        };

        this.loadIncludeScript("A_Dataset_deleteMultiRows_RP83712.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
