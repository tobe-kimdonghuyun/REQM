(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TA_Dataset_M_");
            this.set_titletext("TA_Dataset_P_colcount_01_v2");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(440,560);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.DataObject("DataObject00", this);
            obj._setContents({
              "store": [
                {
                  "name": "Bandi",
                  "product": {
                    "book": [
                      {
                        "category": "reference",
                        "author": ["Nigel Rees","Tobe"],
                        "title": "Sayings of the Century",
                        "price": 8.95,
                         "status" : { "new": 8.95, "used" : 3}
                      },
                      {
                        "category": "fiction",
                        "author": ["Evelyn Waugh","apple"],
                        "title": "Sword of Honour",
                        "price": 12.99,
                           "status" : { "new": 5, "used" : 0}
                      },
                      {
                        "category": "fiction",
                        "author": ["Herman Melville", "LG"],
                        "title": "Moby Dick",
                        "isbn": "0-553-21311-3",
                        "price": 8.99,
                           "status" : { "new": 0.95, "used" : 0.3}
                      },
                      {
                        "category": "fiction",
                        "author": ["J. R. R. Tolkien","기믕ㄴ희"],
                        "title": "The Lord of the Rings",
                        "isbn": "0-395-19395-8",
                        "price": 22.99,
                           "status" : { "new": 21, "used" : 3}
                      }
                    ],
                    "bicycle": {
                      "color": "red",
                      "price": 19.95
                    }
                  },
                  "expensive": 10
                },
                {
                  "name": "Kyobo",
                  "product": {
                    "book": [
                      {
                        "category": "comic",
                        "author": ["Na", "Pro"],
                        "title": "Dragon Ball",
                        "price": 5.95
                      },
                      {
                        "category": "thriler",
                        "author": ["Edward", "Smith"],
                        "title": "MilkMan",
                        "price": 12.99
                      }
                    ],
                    "pencil": {
                      "color": "black",
                      "price": 1,
                      "size": [3, 4, 5]
                    }
                  },
                  "expensive": 15
                }
              ]
            });
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("ds00", this);
            obj.set_binddataobject("DataObject00");
            obj.getSetter("dataobject").set("DataObject00");
            obj._setContents({});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Button("btn00","311","28","128","49",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Embedded test");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","",440,560,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("A_DataObject_M_getObjectByPath_01.xfdl","lib::libCommon.xjs");
        this.addIncludeScript("A_DataObject_M_getObjectByPath_01.xfdl","libevent::event.util.xjs");
        this.registerScript("A_DataObject_M_getObjectByPath_01.xfdl", function(nexacro, system, trace, environment, application) {
        /***********************************************************************
        * 설명      : Dataset constcount Property
        ***********************************************************************
        *     수정일     작성자   내용
        ***********************************************************************
        *     2019.03.07  함경곤   최초 작성
        ***********************************************************************
        */

        this.executeIncludeScript("lib::libCommon.xjs"); /*include "lib::libCommon.xjs"*/;
        this.executeIncludeScript("libevent::event.util.xjs"); /*include "libevent::event.util.xjs"*/;

        var tapi = this.gfnLoadTestAPI(0.71);

        /***********************************************************************
        * 01: Form 변수 선언부
        ***********************************************************************/
        this.dataset = this.ds00;
        //this.grid = this.Grid00;

        /***********************************************************************
        * 02 : Test Case, Validator, Validation Case 선언부
        ***********************************************************************/
        var tc1  = {
        	description: "Dataset constcount Property Test",
        	//-------------- beign user defined section
        	userdata : {
        		result : [],			//task 리턴값
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

        tc1.task['getObjectByPath'] = function(dataobjectpath) {
        	var result = [];
        	//////////////////////////////////////////////////////////////////////////////////////////
        	var ds = this.dataset;
        	var strdataobj = ds.binddataobject;
        	var obj = ds._binddataobject;
        	if (strdataobj && obj)
        	{
        		result.push(JSON.stringify(obj.getObjectByPath(dataobjectpath)));
        	}

        	// nexacro.test.Event.clickEx(combo00, 'lbutton', false, false, false, 92, 21);

        	//////////////////////////////////////////////////////////////////////////////////////////
        	return result;
        };

        tc1.checker['equal'] = function(alResultValues, alExpectedValues) {
        	var chk = true;
        	var chk = tapi.checkEqual(this, alResultValues, alExpectedValues);

        	return chk;
        };
        tc1.validator ['tc_vd1'] = {
        	description: "getObjectByPath 데이터 확인",
        	autoTaskFlow : ["getObjectByPath"],		// task 수행 순서
        	vcinfo : {
        		argType : tapi.VCT_ARG_LIST,
        		args : [
        			{vc : [[tapi.VBT_NORMAL, "$"]], 		ev : ['[{"store":[{"name":"Bandi","product":{"book":[{"category":"reference","author":["Nigel Rees","Tobe"],"title":"Sayings of the Century","price":8.95,"status":{"new":8.95,"used":3}},{"category":"fiction","author":["Evelyn Waugh","apple"],"title":"Sword of Honour","price":12.99,"status":{"new":5,"used":0}},{"category":"fiction","author":["Herman Melville","LG"],"title":"Moby Dick","isbn":"0-553-21311-3","price":8.99,"status":{"new":0.95,"used":0.3}},{"category":"fiction","author":["J. R. R. Tolkien","기믕ㄴ희"],"title":"The Lord of the Rings","isbn":"0-395-19395-8","price":22.99,"status":{"new":21,"used":3}}],"bicycle":{"color":"red","price":19.95}},"expensive":10},{"name":"Kyobo","product":{"book":[{"category":"comic","author":["Na","Pro"],"title":"Dragon Ball","price":5.95},{"category":"thriler","author":["Edward","Smith"],"title":"MilkMan","price":12.99}],"pencil":{"color":"black","price":1,"size":[3,4,5]}},"expensive":15}]}]']},
        			{vc : [[tapi.VBT_NORMAL, "$..book"]], 		ev : ['[[{"category":"reference","author":["Nigel Rees","Tobe"],"title":"Sayings of the Century","price":8.95,"status":{"new":8.95,"used":3}},{"category":"fiction","author":["Evelyn Waugh","apple"],"title":"Sword of Honour","price":12.99,"status":{"new":5,"used":0}},{"category":"fiction","author":["Herman Melville","LG"],"title":"Moby Dick","isbn":"0-553-21311-3","price":8.99,"status":{"new":0.95,"used":0.3}},{"category":"fiction","author":["J. R. R. Tolkien","기믕ㄴ희"],"title":"The Lord of the Rings","isbn":"0-395-19395-8","price":22.99,"status":{"new":21,"used":3}}],[{"category":"comic","author":["Na","Pro"],"title":"Dragon Ball","price":5.95},{"category":"thriler","author":["Edward","Smith"],"title":"MilkMan","price":12.99}]]']},

        			/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        		]
        	},
        	prepare: function () {
        		tc1.userdata.result = [];
        		tc1.userdata.eventChkList1 = [];
        	},
        	run: function () {
        		var vdAdt = tapi.getVdAdaptor();
        		var taskName = vdAdt.getTaskFlowName();	// task 단계를 찾아서 실행
        		var rtn;

        		/////////////////////////////////////////////////////////////////////////////////////////
        		var v1 = vdAdt.getValue(0);

        		switch(taskName) {
        			case "getObjectByPath": {
        				rtn = tc1.task['getObjectByPath'].call(this, v1);
        				tc1.userdata.result.push(rtn);
        				break;
        			}
        		}
        		/////////////////////////////////////////////////////////////////////////////////////////

        		return tc1.userdata.result;
        	},
        	check: function (resultValue, expectedValue) {
        		var chk = tc1.checker['equal'].call(this, resultValue, expectedValue);
        		return chk;
        	},
        	teardown: function () {
        		// tc1.userdata.result = [];
        		// tc1.userdata.eventChkList1 = [];
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

        this.TA_Dataset_P_colcount_01_v2_onload = function(obj,e)
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
        	runner.setLogLevel(tapi.TRACE);
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
            this.addEventHandler("onload",this.TA_Dataset_P_colcount_01_v2_onload,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
        };

        this.loadIncludeScript("A_DataObject_M_getObjectByPath_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
