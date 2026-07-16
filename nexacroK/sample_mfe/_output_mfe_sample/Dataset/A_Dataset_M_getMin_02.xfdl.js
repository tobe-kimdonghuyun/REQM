(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("A_Dataset_M_getMin_02");
            this.set_titletext("A_Dataset_M_getMin_02");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(440,560);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("ds_data", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "string_","size" : "256","type" : "STRING"}]},"Rows" : [{"string_" : "1"},{"string_" : "2"},{"string_" : "3"},{"string_" : "9"},{"string_" : "12"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Button("btn00","314","4","107","36",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Embedded Test");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("grd00","24","81","252","178",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_data");
            obj.set_taborder("1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"string_\"/></Band><Band id=\"body\"><Cell text=\"bind:string_\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            // Layout Functions
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
        this.addIncludeScript("A_Dataset_M_getMin_02.xfdl","lib::libCommon.xjs");
        this.addIncludeScript("A_Dataset_M_getMin_02.xfdl","libevent::event.util.xjs");
        this.registerScript("A_Dataset_M_getMin_02.xfdl", function(nexacro, system, trace, environment, application) {
        /***********************************************************************
        * 설명      : Dataset getMin Method
        ***********************************************************************
        *     수정일     작성자   내용
        ***********************************************************************
        *     2020.05.11  김동열   최초 작성
        ***********************************************************************
        */

        this.executeIncludeScript("lib::libCommon.xjs"); /*include "lib::libCommon.xjs"*/;
        this.executeIncludeScript("libevent::event.util.xjs"); /*include "libevent::event.util.xjs"*/;
        var tapi = this.gfnLoadTestAPI(0.71);

        /***********************************************************************
        * 01: Form 변수 선언부
        ***********************************************************************/
        this.dataset = this.ds_data;

        /***********************************************************************
        * 02 : Test Case, Validator, Validation Case 선언부
        ***********************************************************************/
        var tc1  = {
        	description: "Dataset getMin Method Test",
        	userdata : {
        		result : [],
        		arrArgs :new Array(10, 500)
        	},
        	initialize: function() {
        		this.ds_data.getColumnInfo("string_").set_type("STRING");
        	},
        	checker : {},
        	validator : {},
        	task : {},
        	finalize : function() {}
        };

        tc1.task['changeType'] = function(strType) {
        	this.ds_data.getColumnInfo("string_").set_type(strType);
        };

        tc1.task['getMin'] = function(strExpr, nStartIdx, EndIdx, arrArgs) {
        	var result = [];

        	var min = this.ds_data.getMin(strExpr, nStartIdx, EndIdx);
        	result.push(min);

        	return result;
        };

        tc1.checker['equal'] = function(alResultValues, alExpectedValues) {
        	var chk = true;
        	var chk = tapi.checkEqual(this, alResultValues, alExpectedValues);

        	return chk;
        };

        tc1.validator ['tc1_vd1'] = {
        	description: "타입변경후 getMin 수행결과",
        	autoTaskFlow : ["changeType", "getMin"],
        	vcinfo : {
        		argType : tapi.VCT_ARG_LIST,
        		args : [
        			{vc: [[tapi.VBT_NORMAL,"STRING"], [tapi.VBT_NORMAL,"string_"], [tapi.VBT_NORMAL,0], [tapi.VBT_NORMAL,5]],ev: ["1"]},
        			{vc: [[tapi.VBT_NORMAL,"INT"], [tapi.VBT_NORMAL,"string_"], [tapi.VBT_NORMAL,0], [tapi.VBT_NORMAL,5]],ev: [1]},
        		]
        	},
        	prepare: function () {
        		tc1.userdata.result = [];
        	},
        	run: function () {
        		var vdAdt = tapi.getVdAdaptor();
        		var taskName = vdAdt.getTaskFlowName();

        		var strType = vdAdt.getValue(0);
        		var strExpr = vdAdt.getValue(1);
        		var nStartIdx = vdAdt.getValue(2);
        		var nEndIdx = vdAdt.getValue(3);

        		switch(taskName) {
        		case "changeType":
        			tc1.task['changeType'].call(this, strType);
        			break;
        		case "getMin":
        			var rtn = tc1.task['getMin'].call(this, strExpr, nStartIdx, nEndIdx);
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
        	tcList : [tc1],
        	deny : [],
        	allow : [],
        	adjustTcInfo : function() {}
        };

        /***********************************************************************
        * 04 : 화면 로드 시 작업, gfnInit는 필수
        ***********************************************************************/
        this.A_Dataset_M_getMin_02_onload = function(obj,e)
        {
           tapi.systemDebugOn();
           tapi.debugOn();

           tapi.init(tcInfo, this);
        };

        /***********************************************************************
        * 05 : Runner API, Application Runner 띄우지 않고 실행하기 위함
        ***********************************************************************/
        this.btn00_onclick = function(obj,e)
        {
           var runner = tapi.getRunner();
           runner.executeTest();
        };

        /***********************************************************************
        * 06 : 이벤트 선언부
        ***********************************************************************/

        /***********************************************************************
        * 07 : 사용자 정의 함수 선언부
        ***********************************************************************/
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.A_Dataset_M_getMin_02_onload,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
        };

        this.loadIncludeScript("A_Dataset_M_getMin_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
