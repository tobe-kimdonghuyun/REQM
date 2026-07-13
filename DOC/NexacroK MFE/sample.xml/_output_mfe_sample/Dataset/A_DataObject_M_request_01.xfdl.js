(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ColumnInfo_P_type_01_v2");
            this.set_titletext("ColumnInfo_P_type_01_v2");
            this.getSetter("classname").set("23711_Buttoncssimage_01");
            this.getSetter("inheritanceid").set("");
            this.getSetter("position").set("absolute");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(440,560);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.DataObject("DataObject00", this);
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("ds00", this);
            obj.set_binddataobject("DataObject00");
            obj.set_dataobjectpath("$[*]");
            obj._setContents({"ColumnInfo" : {"Column" : [{"datapath" : "@.id","id" : "id","size" : "256","type" : "STRING"},{"datapath" : "@.content","id" : "content","size" : "256","type" : "STRING"},{"datapath" : "@.completed","id" : "completed","size" : "256","type" : "STRING"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Button("btn00","310","10","122","39",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("embedded test");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("grd00","16","76","244","114",null,null,null,null,null,null,this);
            obj.set_binddataset("ds00");
            obj.set_taborder("1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"id\"/><Cell col=\"1\" text=\"content\"/><Cell col=\"2\" text=\"completed\"/></Band><Band id=\"body\"><Cell text=\"bind:id\"/><Cell col=\"1\" text=\"bind:content\"/><Cell col=\"2\" text=\"bind:completed\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn01","328","114","88","41",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("init");
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
        this.addIncludeScript("A_DataObject_M_request_01.xfdl","lib::libCommon.xjs");
        this.addIncludeScript("A_DataObject_M_request_01.xfdl","libevent::event.util.xjs");
        this.registerScript("A_DataObject_M_request_01.xfdl", function(nexacro, system, trace, environment, application) {
        /***********************************************************************
        * 설명      : Dataset constcount Property
        ***********************************************************************
        *     수정일     작성자   내용
        ***********************************************************************
        *     2020.05.18  함경곤   최초 작성
        ***********************************************************************
        */

        this.executeIncludeScript("lib::libCommon.xjs"); /*include "lib::libCommon.xjs"*/;
        this.executeIncludeScript("libevent::event.util.xjs"); /*include "libevent::event.util.xjs"*/;

        var tapi = this.gfnLoadTestAPI(0.71);
        var server_ip = "http://172.10.12.253:5001/todos";
        var pthis = this;
        //this.dev_status = tapi.DEV_HOLD;

        /***********************************************************************
        * 01: Form 변수 선언부
        ***********************************************************************/
        this.dataset = this.ds00;
        this.dataobject = this.DataObject00;

        /***********************************************************************
        * 02 : Test Case, Validator, Validation Case 선언부
        ***********************************************************************/
        var tc1  = {
        	description: "Dataset reqeust Method Test",
        	//-------------- beign user defined section
        	userdata : {
        	eventChkList1 : [],		//GET 확인용
        	eventChkList2 : [],		//POST 확인용
        	eventChkList3 : [],		//PUT 확인용
        	eventChkList4 : [],		//PATCH 확인용
        	eventChkList5 : [],		//DELETE 확인용
        	eventChkList6 : [],		//HEAD 확인용
        		result : [],			//task 리턴값
        	},
        	//--------------  end  user defined section
        	initialize: function() {
        	  	this.initDB();
        		pausemillsec(5000);
        	},
        	checker : {},
        	validator : {},
        	task : {},
        	finalize : function() {
        	}
        };

        tc1.task['method'] = function(method)
        {
        	var result = [];
        	//////////////////////////////////////////////////////////////////////////////////////////
        	var ds = this.dataset;
        	var strdataobj = ds.binddataobject;
        	var obj = ds._binddataobject;

        	if (strdataobj && obj)
        	{
        		//*****Reqeust
        		//GET
        		if (method == "GET")
        		{
        			var json_param = {
        				"async" : false
        			}
        			this.DataObject00.request("no1","GET",server_ip,json_param);
        			pausemillsec(1000);
        			return tc1.userdata.eventChkList1;
        		}
        		else if  (method == "POST")
        		{

        			var header ={ 'Content-Type' : 'application/json'};
        			var senddata = {
        				"id": 4,
        				"content": "Angular",
        				"completed": true
        			};
        			var json_param = {
        				"httpheader" : header,
        				"postdata" : JSON.stringify(senddata),
        				"async" : false
        			}

        			this.DataObject00.request("post1","POST",server_ip,json_param);
        			pausemillsec(1000);
        			return tc1.userdata.eventChkList2;
        		}
        		else if  (method == "PUT")
        		{

        			var header ={ 'Content-Type' : 'application/json'};
        			var senddata = {
        				"id": 4,
        				"content": "React",
        				"completed": false
        			};
        			var json_param = {
        				"httpheader" : header,
        				"postdata" : JSON.stringify(senddata),
        				"async" : false
        			}

        			this.DataObject00.request("put1","PUT",server_ip+"/4",json_param);
        			pausemillsec(1000);
        			return tc1.userdata.eventChkList3;
        		}
        		else if  (method == "PATCH")
        		{
        			var header ={ 'Content-Type' : 'application/json'};
        			var senddata = {
        				"id": 4,
        				"content": "React",
        				"completed": true
        			};
        			var json_param = {
        				"httpheader" : header,
        				"postdata" : JSON.stringify(senddata),
        				"async" : false
        			}

        			this.DataObject00.request("patch1","PATCH",server_ip+"/4",json_param);
        			pausemillsec(1000);
        			return tc1.userdata.eventChkList4;
        		}
        		else if  (method == "DELETE")
        		{
        			var json_param = {
        				"async" : false
        			}

        			this.DataObject00.request("delete1","DELETE",server_ip+"/4", json_param);
        			pausemillsec(1000);
        			return tc1.userdata.eventChkList5;
        		}
        		else if  (method == "HEAD")
        		{

        			var header ={ 'Content-Type' : 'application/json'};
        			var json_param = {
        				"httpheader" : header,
        				"async" : false
        			}
        			this.DataObject00.request("head1","HEAD",server_ip,json_param);
        			pausemillsec(1000);
        			return tc1.userdata.eventChkList6;
        		}

        		//POST
        		//HEAD
        		//PATCH
        		//DELETE
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
        	description: "request 결과 데이터 확인",
        	autoTaskFlow : ["method"],		// task 수행 순서
        	vcinfo : {
        		argType : tapi.VCT_ARG_LIST,
        		args : [
        //			{vc : [[tapi.VBT_NORMAL, "GET"]], 		ev : ["Bandi"]},

        	//		{vc : [[tapi.VBT_NORMAL, "POST"]], 		ev : ["Kyobo"]},
        //			{vc : [[tapi.VBT_NORMAL, "PUT"]], 		ev : ["8.95"]},
        //			{vc : [[tapi.VBT_NORMAL, "DELETE"]], 		ev : ["reference"]},
        //			{vc : [[tapi.VBT_NORMAL, "HEAD"]], 		ev : ["Bandi"]},
        			{vc : [[tapi.VBT_NORMAL, "GET"]], 		ev : ['[{"id":1,"content":"HTML","completed":false},{"id":2,"content":"CSS","completed":true},{"id":3,"content":"Javascript","completed":false}]']},
        			{vc : [[tapi.VBT_NORMAL, "POST"]], 		ev : ['{"id":4,"content":"Angular","completed":true}']},
        			{vc : [[tapi.VBT_NORMAL, "PUT"]], 		ev : ['{"id":4,"content":"React","completed":false}']},
        			{vc : [[tapi.VBT_NORMAL, "PATCH"]], 		ev : ['{"id":4,"content":"React","completed":true}']},
        			{vc : [[tapi.VBT_NORMAL, "DELETE"]], 		ev : ['{}']},
        			{vc : [[tapi.VBT_NORMAL, "HEAD"]], 		ev : ['',"null data"]}

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
        			case "method": {
        				rtn = tc1.task['method'].call(this, v1);
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
        this.ColumnInfo_P_type_01_v2_onload = function(obj,e)
        {
        			   // debug mode : log level에서 지정한 모든 메시지 제공
           tapi.systemDebugOn();          // Runner를 debug mode로 실행
           tapi.debugOn();                  // 응용을 debug mode로 실행
           // Runner Load
           tapi.init(tcInfo, this);

        	//this.btn00_onclick();
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

        this.initDB = function()
        {
        	var xhr = new XMLHttpRequest;
        	if(xhr)
        	{
        		this.deleteALLDB();
        		pausemillsec(3000);
        		var pthis = this;
        		pthis.on_initDB();
        	}
        }


        this.deleteALLDB = function()
        {
        	var xhr_del = new XMLHttpRequest;
        		xhr_del.open("GET",server_ip, false);
        		xhr_del.onreadystatechange = this.deleteAllTodos;
        		xhr_del.send();
        		xhr_del = null;
        }

        this.deleteAllTodos = function ()
        {
        	if (this.readyState == 4)
        	{
        		var jsonobj = eval(this.response);
        		 for (var i = 0,len = jsonobj.length;i<len;i++)
        		{
        			 var xhr = new XMLHttpRequest();
        			 if (xhr)
        			 {
        					var item = jsonobj[i]
        					xhr.open("DELETE", server_ip + "/" + (item.id),false);
        					xhr.send();
        					pausemillsec(1000);
        					//xhr = null;
        			}
        		 }
        	}
        }


        this.on_initDB = function()
        {
        		var obj1 =  { "id": 1, "content": "HTML", "completed": false };
        		var obj2 =   { "id": 2, "content": "CSS", "completed": true };
        		var obj3 = { "id": 3, "content": "Javascript", "completed": false };
        		var xhr1 = new XMLHttpRequest;
        		xhr1.open("POST", server_ip,false);
        		xhr1.setRequestHeader('Content-Type','application/json');
                xhr1.send(JSON.stringify(obj1));
        		pausemillsec(1000);
        		//xhr1.abort();
        		xhr1 = new XMLHttpRequest;
        		xhr1.open("POST", server_ip,false);
        		xhr1.setRequestHeader('Content-Type','application/json');
        		 xhr1.send(JSON.stringify(obj2));
        		 pausemillsec(1000);
        		 //xhr1.abort();
        		 xhr1 = new XMLHttpRequest;
        		 xhr1.open("POST", server_ip,false);
        		xhr1.setRequestHeader('Content-Type','application/json');
        		 xhr1.send(JSON.stringify(obj3));
        		 pausemillsec(1000);
        		//xhr1 = null;
        }



        this.btn01_onclick = function(obj,e)
        {
        	this.initDB();
        };

        this.DataObject00_onsuccess = function(obj,e)
        {
        	if (e.serviceid == "no1")
        		tc1.userdata.eventChkList1.push(JSON.stringify(JSON.parse(e.response)));
        	else if (e.serviceid == "post1")
        		tc1.userdata.eventChkList2.push(JSON.stringify(JSON.parse(e.response)));
        	else if (e.serviceid == "put1")
        		tc1.userdata.eventChkList3.push(JSON.stringify(JSON.parse(e.response)));
        	else if (e.serviceid == "patch1")
        		tc1.userdata.eventChkList4.push(JSON.stringify(JSON.parse(e.response)));
        	else if (e.serviceid == "delete1")
        		tc1.userdata.eventChkList5.push(JSON.stringify(JSON.parse(e.response)));
        	else if (e.serviceid == "head1")
        	{
        		tc1.userdata.eventChkList6.push(e.response);
        		tc1.userdata.eventChkList6.push("null data");

        	}

        };



        this.ds00_onload = function(obj,e)
        {

        };

        this.DataObject00_onload = function(obj,e)
        {
        	//if (e.reason == 2)
        	//	tc1.userdata.eventChkList1.push(obj.serializeToString());
        };

        function pausemillsec (millsec)
        {
        	var date = new Date();
        	var curDate = null;
        	do { curDate = new Date();}
        	while (curDate - date < millsec);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ColumnInfo_P_type_01_v2_onload,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.DataObject00.addEventHandler("onload",this.DataObject00_onload,this);
            this.DataObject00.addEventHandler("onsuccess",this.DataObject00_onsuccess,this);
            this.ds00.addEventHandler("onload",this.ds00_onload,this);
        };

        this.loadIncludeScript("A_DataObject_M_request_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
