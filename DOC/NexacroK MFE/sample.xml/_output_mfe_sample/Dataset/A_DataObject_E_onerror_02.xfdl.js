(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("A_DataObject_E_onerror_02");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.DataObject("DataObject00", this);
            obj.set_preload("false");
            obj.set_url("commonfile::store11.json");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Button("btn00","345","5","130","45",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("embedded test");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn01","350","202","203","61",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("btn01");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("A_DataObject_E_onerror_02.xfdl","lib::libCommon.xjs");
        this.addIncludeScript("A_DataObject_E_onerror_02.xfdl","libevent::event.util.xjs");
        this.addIncludeScript("A_DataObject_E_onerror_02.xfdl","libevent::event.wrapper.xjs");
        this.registerScript("A_DataObject_E_onerror_02.xfdl", function(nexacro, system, trace, environment, application) {
        /***********************************************************************
        * 설명      : Dataset onload Event
        ***********************************************************************
        *     수정일     작성자   내용
        ***********************************************************************
        *     2019.02.13  함경곤   최초 작성
        ***********************************************************************
        */
        this.executeIncludeScript("lib::libCommon.xjs"); /*include "lib::libCommon.xjs"*/;
        this.executeIncludeScript("libevent::event.util.xjs"); /*include "libevent::event.util.xjs"*/;
        this.executeIncludeScript("libevent::event.wrapper.xjs"); /*include "libevent::event.wrapper.xjs"*/
        var tapi = this.gfnLoadTestAPI(0.71);
        this.dev_status = tapi.DEV_HOLD;

        /***********************************************************************
        * 01: Form 변수 선언부
        ***********************************************************************/
        //this.dataset = this.ds00;
        //this.dataobject = this.DataObject00;
        //this.grid = this.Grid00;

        /***********************************************************************
        * 02 : Test Case, Validator, Validation Case 선언부
        ***********************************************************************/

        var tc1  = {
        	description: "DataObject onerror Event Test",
        	//-------------- beign user defined section
        	userdata : {

        	//	eventChkList1 : [],		//onload 확인용
        	//	eventChkList2 : [],
        	//	result : [],			// test 단계별 실행 결과 저장
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

        tc1.task['eventChk'] = function(eventtype) {
        	var result = [];
        	if (eventtype == "404")
        		//result.push(tc1.userdata.eventChkList2);
        		return tc1.userdata.eventChkList1;
        	else if (eventtype == "preload")
        		//result.push(tc1.userdata.eventChkList2);
        		return tc1.userdata.eventChkList2;
        	else if (eventtype == "")
        		//result.push(tc1.userdata.eventChkList2);
        		return "";
        	//return result;
        };
        tc1.checker['equal'] = function(alResultValues, alExpectedValues) {
        	var chk = true;
        	var chk = tapi.checkEqual(this, alResultValues, alExpectedValues);

        	return chk;
        };

        tc1.validator ['tc1_vd1'] = {
        	description: "404 에러 테스트",
        	autoTaskFlow : ["eventChk"],
        	vcinfo : {
        		argType : tapi.VCT_ARG_LIST,
        		args : [
        			{vc : [[tapi.VBT_NORMAL, "test"]], 		ev : [""]}
        		//	{vc : [[tapi.VBT_NORMAL, "404"]], 		ev : ["DataObject00","onerror","로딩하는 중에 에러가 발생하였습니다. 주소가 정확한지 확인하고 다시 시도하십시오. 경로 [http://172.10.12.253:8080/nx17TestSystem/jsp/RESTAPI/store1.json] 상태코드 [404] ","ObjectError","","http://172.10.12.253:8080/nx17TestSystem/jsp/RESTAPI/store1.json",404]},
        		//	{vc : [[tapi.VBT_NORMAL, "preload"]], 		ev : ["DataObject01","onerror","로딩하는 중에 에러가 발생하였습니다. 주소가 정확한지 확인하고 다시 시도하십시오. 경로 [http://172.10.12.253:8080/nx17TestSystem/jsp/RESTAPI/store1.json] 상태코드 [404] ","ObjectError","","http://172.10.12.253:8080/nx17TestSystem/jsp/RESTAPI/store1.json",404]}
        			/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        		]
        	},
        	prepare: function () {
        	        		tc1.userdata.result = [];
        	},
        	run: function () {
        		var vdAdt = tapi.getVdAdaptor();
        		var taskName = vdAdt.getTaskFlowName();	// task 단계를 찾아서 실행
        		var rtn;

        		/////////////////////////////////////////////////////////////////////////////////////////
        		var v1 = vdAdt.getValue(0);

        		switch(taskName) {
        			case "eventChk": {
        				rtn = tc1.task['eventChk'].call(this, v1);
        				tc1.userdata.result.push(rtn);
        				break;
        			}
        		}
        		/////////////////////////////////////////////////////////////////////////////////////////

        		return tc1.userdata.result;
        	},
        	check: function (resultValue, expectedValue) {
        	//trace(resultValue, expectedValue);
        		var chk = tc1.checker['equal'].call(this, resultValue, expectedValue);
        		return chk;
        	},
        	teardown: function () {
        	//	tc1.userdata.eventChkList1 = [];
        	//	tc1.userdata.result = [];
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

        this.A_DataObject_E_onerror_02_onload = function(obj,e)
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
        this.DataObject00_onerror = function(obj,e)
        {
        	trace("DataObject00_onerror");
        	//trace(e.errormsg, e.requesturi, e.statuscode,e.eventid,e.errortype);
        	/*
        	tc1.userdata.eventChkList1.push(obj.name);
        	tc1.userdata.eventChkList1.push(e.eventid);
        	tc1.userdata.eventChkList1.push(e.errormsg);
        	tc1.userdata.eventChkList1.push(e.errortype);
        	tc1.userdata.eventChkList1.push(e.locationuri);
        	tc1.userdata.eventChkList1.push(e.requesturi);
        	tc1.userdata.eventChkList1.push(e.statuscode);
        	*/
        };

        this.DataObject01_onerror = function(obj,e)
        {
        	trace("DataObject01_onerror");
        	//trace(e.errormsg, e.requesturi, e.statuscode,e.eventid,e.errortype);
        /*
        	tc1.userdata.eventChkList2.push(obj.name);
        	tc1.userdata.eventChkList2.push(e.eventid);
        	tc1.userdata.eventChkList2.push(e.errormsg);
        	tc1.userdata.eventChkList2.push(e.errortype);
        	tc1.userdata.eventChkList2.push(e.locationuri);
        	tc1.userdata.eventChkList2.push(e.requesturi);
        	tc1.userdata.eventChkList2.push(e.statuscode);
        	*/
        };

        this.DataObject00_onload = function(obj,e)
        {

        	trace("DataObject00_onload",e.url);
        };

        this.btn01_onclick = function(obj,e)
        {
        	this.DataObject00.load();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.A_DataObject_E_onerror_02_onload,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.DataObject00.addEventHandler("onerror",this.DataObject00_onerror,this);
            this.DataObject00.addEventHandler("onload",this.DataObject00_onload,this);
        };

        this.loadIncludeScript("A_DataObject_E_onerror_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
