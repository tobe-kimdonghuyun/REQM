(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TA_Dataset_M_getRowsMin_01_v2");
            this.set_titletext("TA_Dataset_M_getRowsMin_01_v2");
            this.getSetter("classname").set("23711_Buttoncssimage_01");
            this.getSetter("inheritanceid").set("");
            this.getSetter("position").set("absolute");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(440,560);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("ds_data5", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "colA","size" : "256","type" : "STRING"},{"id" : "int_","size" : "256","type" : "INT"},{"id" : "float_","size" : "256","type" : "FLOAT"},{"id" : "bigdecimal_","size" : "256","type" : "BIGDECIMAL"},{"id" : "string_","size" : "256","type" : "STRING"}]},"Rows" : [{"int_" : "1","float_" : "10.1","bigdecimal_" : "10.5","string_" : "1","colA" : "1"},{"float_" : "20.2","int_" : "2","bigdecimal_" : "20.3","string_" : "2","colA" : "2"},{"float_" : "30.3","int_" : "3","bigdecimal_" : "20.7","string_" : "3","colA" : "2"},{"int_" : "9","float_" : "12.145","bigdecimal_" : "2.45","string_" : "9","colA" : "2"},{"int_" : "12","float_" : "58.18","bigdecimal_" : "2.84","string_" : "12","colA" : "1"},{"colA" : "6"},{"colA" : "7","int_" : ""},{"colA" : "8","int_" : "null"},{"colA" : "9","int_" : "undefined"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Button("btn00","314","4","107","36",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Embedded Test");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static01","3","31","301","37",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("0");
            obj.set_text("[Dataset_M_getRowsMin_01]");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_Combo_menu","93","1","81","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_text("◀Dataset");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("txt_result","6","341","298","91",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("2");
            obj.set_text("//");
            obj.set_value("//");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_main","8","1","81","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("3");
            obj.set_text("◀◀Main");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid00","6","61","295","163",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_data5");
            obj.set_formats("<Formats>\n  <Format id=\"default\">\n    <Columns>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n    </Columns>\n    <Rows>\n      <Row band=\"head\" size=\"24\"/>\n      <Row band=\"body\" size=\"24\"/>\n    </Rows>\n    <Band id=\"head\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"colA\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"int_\"/>\n      <Cell col=\"2\" disptype=\"normal\" text=\"float_\"/>\n      <Cell col=\"3\" disptype=\"normal\" text=\"bigdecimal_\"/>\n      <Cell col=\"4\" disptype=\"normal\" text=\"string_\"/>\n    </Band>\n    <Band id=\"body\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"bind:colA\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"bind:int_\"/>\n      <Cell col=\"2\" disptype=\"normal\" text=\"bind:float_\"/>\n      <Cell col=\"3\" disptype=\"normal\" text=\"bind:bigdecimal_\"/>\n      <Cell col=\"4\" disptype=\"normal\" text=\"bind:string_\"/>\n    </Band>\n  </Format>\n</Formats>\n");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("4");
            obj.getSetter("useinputpanel").set("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"colA\"/><Cell col=\"1\" text=\"int_\"/><Cell col=\"2\" text=\"float_\"/><Cell col=\"3\" text=\"bigdecimal_\"/><Cell col=\"4\" text=\"string_\"/></Band><Band id=\"body\"><Cell edittype=\"none\" text=\"bind:colA\"/><Cell col=\"1\" text=\"bind:int_\"/><Cell col=\"2\" text=\"bind:float_\"/><Cell col=\"3\" text=\"bind:bigdecimal_\"/><Cell col=\"4\" text=\"bind:string_\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_idx2","212","2","29","29",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("5");
            obj.set_text("2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_idx1","180","2","29","29",null,null,null,null,null,null,this);
            obj.set_enable("false");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("6");
            obj.set_text("1");
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
        this.addIncludeScript("A_Dataset_M_getRowsMin_01.xfdl","lib::libCommon.xjs");
        this.addIncludeScript("A_Dataset_M_getRowsMin_01.xfdl","libevent::event.util.xjs");
        this.registerScript("A_Dataset_M_getRowsMin_01.xfdl", function(nexacro, system, trace, environment, application) {
        /***********************************************************************
        * 설명      : Dataset getRowsMin Method
        ***********************************************************************
        *     수정일     작성자   내용
        ***********************************************************************
        *     2019.03.19  김형철   최초 작성
        ***********************************************************************
        */

        this.executeIncludeScript("lib::libCommon.xjs"); /*include "lib::libCommon.xjs"*/;
        this.executeIncludeScript("libevent::event.util.xjs"); /*include "libevent::event.util.xjs"*/;
        var tapi = this.gfnLoadTestAPI(0.71);

        /***********************************************************************
        * 01: Form 변수 선언부
        ***********************************************************************/
        this.dataset = this.ds_data5;

        /***********************************************************************
        * 02 : Test Case, Validator, Validation Case 선언부
        ***********************************************************************/
        var tc1  = {
        	description: "Dataset getRowsMin Method Test",
        	//-------------- beign user defined section
        	userdata : {
        		result : [],		//task 리턴값
        	},
        	//--------------  end  user defined section
        	initialize: function() {
        	},
        	checker : {},
        	validator : {},
        	task : {},
        	finalize : function() {
        	}
        };

        tc1.task['getRowsMin'] = function(arrRows, strColExpr, arrArgs) {
        	var result = [];
        	var rtngetRowsMin;

        	if(arrArgs == "생략")
        		rtngetRowsMin = this.dataset.getRowsMin(arrRows, strColExpr);
        	else
        		rtngetRowsMin = this.dataset.getRowsMin(arrRows, strColExpr, arrArgs);

        	result.push(rtngetRowsMin);

        	return result;
        };

        tc1.checker['equal'] = function(alResultValues, alExpectedValues) {
        	var chk = true;
        	var chk = tapi.checkEqual(this, alResultValues, alExpectedValues);

        	return chk;
        };

        tc1.validator ['tc1_vd1'] = {
        	description: "getRowsMin(arrRows, strColExpr, arrArgs) 수행",
        	autoTaskFlow : ["getRowsMin"],
        	vcinfo : {
        		argType : tapi.VCT_ARG_LIST,
        		args : [
        				//vc : arrRows, strColExpr, arrArgs, ev : 리턴값
        			    {vc: [[tapi.VBT_NORMAL,[0,1,2,3,4,5,6,7,8]],[tapi.VBT_NORMAL,"int_"],[tapi.VBT_EXCEPTION,"생략"]],ev: [1]},
        				{vc: [[tapi.VBT_EXCEPTION,[0,1,2,3,4,5,6,7,8,9]],[tapi.VBT_NORMAL,"int_"],[tapi.VBT_EXCEPTION,"생략"]],ev: [1]},
        				{vc: [[tapi.VBT_EXCEPTION,[9]],[tapi.VBT_NORMAL,"int_"],[tapi.VBT_EXCEPTION,"생략"]],ev: [""]},
        				{vc: [[tapi.VBT_NORMAL,[2,3,4]],[tapi.VBT_NORMAL,"int_"],[tapi.VBT_EXCEPTION,"생략"]],ev: [3]},
         				{vc: [[tapi.VBT_NORMAL,[0,1,2,3,4,5,6,7,8]],[tapi.VBT_NORMAL,"int_"],[tapi.VBT_EXCEPTION,"생략"]],ev: [1]},
        				{vc: [[tapi.VBT_NORMAL,[0,1,2,3,4,5,6,7,8]],[tapi.VBT_NORMAL,"parseInt(int_) + $0 + $1"],[tapi.VBT_NORMAL,[3,1]]],ev: [5]},
        				{vc: [[tapi.VBT_NORMAL,[0,1,2,3,4,5,6,7,8]],[tapi.VBT_NORMAL,"float_"],[tapi.VBT_EXCEPTION,"생략"]],ev: [10.1]},
        				{vc: [[tapi.VBT_NORMAL,[0,1,2,3,4,5,6,7,8]],[tapi.VBT_NORMAL,"bigdecimal_"],[tapi.VBT_EXCEPTION,"생략"]],ev: [2.45]},
        				//filter 후
        				{vc: [[tapi.VBT_NORMAL,[0,1,2,3,4,5,6,7,8]],[tapi.VBT_NORMAL,"int_"],[tapi.VBT_EXCEPTION,"생략"]],ev: [2]},
        			]
        	},
        	prepare: function () {
        		tc1.userdata.result = [];
        		var vdAdt = tapi.getVdAdaptor();

        		if(vdAdt.getIndexVC() == 8)
        			this.dataset.filter("colA != '1'");
        	},
        	run: function () {
        		var vdAdt = tapi.getVdAdaptor();
        		var taskName = vdAdt.getTaskFlowName();
        		var arrRows = vdAdt.getValue(0);
        		var strColExpr = vdAdt.getValue(1);
        		var arrArgs = vdAdt.getValue(2);

        		switch(taskName) {
        		case "getRowsMin":
        			var rtn = tc1.task['getRowsMin'].call(this, arrRows, strColExpr, arrArgs);
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
        	// tcInfo.tcList : 모든 browser에서 실행할 tc 목록
        	tcList : [tc1],
        	// tcInfo.deny : 특정 browser에서 제외할 tc 목록(browser : 'nexacro'/'IE'/'Chrome'/'Gecko'/'Safari')
        	deny : [
        			  //{ tc: tc3, browser: ['IE'] },
        	],
        	// tcInfo.allow : 특정 browser에서 추가할 tc 목록(browser : 'nexacro'/'IE'/'Chrome'/'Gecko'/'Safari')
        	allow : [
        			 //{ tc: tc2, browser: ['nexacro'] },
        	],
        	// tcInfo.adjustTcInfo : browser 버전 및 os 환경에 따른 실행 여부를 결정할 tc 목록
           adjustTcInfo : function() {
        	}
        };

        /***********************************************************************
        * 04 : 화면 로드 시 작업, gfnInit는 필수
        ***********************************************************************/
        this.TA_Dataset_M_getRowsMin_01_v2_onload = function(obj,e)
        {
           // debug mode : log level에서 지정한 모든 메시지 제공
           tapi.systemDebugOn();          // Runner를 debug mode로 실행
           tapi.debugOn();                  // 응용을 debug mode로 실행
           // Runner Load
           tapi.init(tcInfo, this);
        };

        /***********************************************************************
        * 05 : Runner API, Application Runner 띄우지 않고 실행하기 위함
        ***********************************************************************/
        this.btn00_onclick = function(obj,e)
        {
        	// Runner 획득
           var runner = tapi.getRunner();
           //------------ 선택 작업 Begin ------------------------------
           // 메시지를 log로 기록할 수준 지정
        	// log level = [ FATAL | ERROR | WARN | INFO | DEBUG | TRACE | TRACE2 ]
        	//runner.setLogLevel(tapi. INFO);
           //------------ 선택 작업 End ------------------------------
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
            this.addEventHandler("onload",this.TA_Dataset_M_getRowsMin_01_v2_onload,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn_Combo_menu.addEventHandler("onclick",this.btn_button_menu_onclick,this);
            this.btn_main.addEventHandler("onclick",this.btn_main_onclick,this);
            this.btn_idx2.addEventHandler("onclick",this.btn_idx2_onclick,this);
            this.btn_idx1.addEventHandler("onclick",this.btn_idx1_onclick,this);
        };

        this.loadIncludeScript("A_Dataset_M_getRowsMin_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
