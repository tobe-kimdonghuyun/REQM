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
            obj.set_url("commonfile::store.json");
            this.addChild(obj.name, obj);


            obj = new nexacro.DataObject("DataObject01", this);
            obj.set_preload("true");
            obj.set_url("commonfile::store.json");
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("ds00", this);
            obj.set_binddataobject("DataObject00");
            obj.getSetter("dataobject").set("DataObject00");
            obj.set_dataobjectpath("$..book[*]");
            obj._setContents({"ColumnInfo" : {"ConstColumn" : [{"datapath" : "$.store[0].name","id" : "valuedatapath","size" : "30","type" : "STRING","value" : "value"},{"datapath" : "$.store[1].name","id" : "datapath","size" : "30","type" : "STRING"},{"datapath" : "@.price","id" : "datapath_at","size" : "30","type" : "STRING"}],"Column" : [{"datapath" : "@.category","id" : "category","size" : "256","type" : "STRING"},{"datapath" : "$.store[0].name","id" : "storename","size" : "256","type" : "STRING"},{"datapath" : "test","id" : "test","size" : "256","type" : "STRING"},{"id" : "nulltext","size" : "256","type" : "STRING"},{"datapath" : "@.author","id" : "array","size" : "256","type" : "STRING"},{"datapath" : "@.status","id" : "object","size" : "256","type" : "STRING"},{"datapath" : "@.test","id" : "nonproperty","size" : "256","type" : "STRING"}]}});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("ds01", this);
            obj.set_binddataobject("DataObject01");
            obj.getSetter("dataobject").set("DataObject00");
            obj.set_dataobjectpath("$..book[*]");
            obj._setContents({"ColumnInfo" : {"ConstColumn" : [{"datapath" : "$.store[0].name","id" : "valuedatapath","size" : "30","type" : "STRING","value" : "value"},{"datapath" : "$.store[1].name","id" : "datapath","size" : "30","type" : "STRING"},{"datapath" : "@.price","id" : "datapath_at","size" : "30","type" : "STRING"}],"Column" : [{"datapath" : "@.category","id" : "category","size" : "256","type" : "STRING"},{"datapath" : "$.store[0].name","id" : "storename","size" : "256","type" : "STRING"},{"datapath" : "test","id" : "test","size" : "256","type" : "STRING"},{"id" : "nulltext","size" : "256","type" : "STRING"},{"datapath" : "@.author","id" : "array","size" : "256","type" : "STRING"},{"datapath" : "@.status","id" : "object","size" : "256","type" : "STRING"},{"datapath" : "@.test","id" : "nonproperty","size" : "256","type" : "STRING"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Button("btn00","310","10","122","39",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("embedded test");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("grd00","22","76","178","114",null,null,null,null,null,null,this);
            obj.set_binddataset("ds00");
            obj.set_taborder("1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"valuedatapath\"/><Cell col=\"1\" text=\"datapath\"/><Cell col=\"2\" text=\"datapath_at\"/><Cell col=\"3\" text=\"category\"/><Cell col=\"4\" text=\"storename\"/><Cell col=\"5\" text=\"test\"/><Cell col=\"6\" text=\"nulltext\"/><Cell col=\"7\" text=\"array\"/><Cell col=\"8\" text=\"object\"/><Cell col=\"9\" text=\"nonproperty\"/></Band><Band id=\"body\"><Cell text=\"bind:valuedatapath\"/><Cell col=\"1\" text=\"bind:datapath\"/><Cell col=\"2\" text=\"bind:datapath_at\"/><Cell col=\"3\" text=\"bind:category\"/><Cell col=\"4\" text=\"bind:storename\"/><Cell col=\"5\" text=\"bind:test\"/><Cell col=\"6\" text=\"bind:nulltext\"/><Cell col=\"7\" text=\"bind:array\"/><Cell col=\"8\" text=\"bind:object\"/><Cell col=\"9\" text=\"bind:nonproperty\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("grd01","232","76","196","115",null,null,null,null,null,null,this);
            obj.set_binddataset("ds01");
            obj.set_taborder("2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"valuedatapath\"/><Cell col=\"1\" text=\"datapath\"/><Cell col=\"2\" text=\"datapath_at\"/><Cell col=\"3\" text=\"category\"/><Cell col=\"4\" text=\"storename\"/><Cell col=\"5\" text=\"test\"/><Cell col=\"6\" text=\"nulltext\"/><Cell col=\"7\" text=\"array\"/><Cell col=\"8\" text=\"object\"/><Cell col=\"9\" text=\"nonproperty\"/></Band><Band id=\"body\"><Cell text=\"bind:valuedatapath\"/><Cell col=\"1\" text=\"bind:datapath\"/><Cell col=\"2\" text=\"bind:datapath_at\"/><Cell col=\"3\" text=\"bind:category\"/><Cell col=\"4\" text=\"bind:storename\"/><Cell col=\"5\" text=\"bind:test\"/><Cell col=\"6\" text=\"bind:nulltext\"/><Cell col=\"7\" text=\"bind:array\"/><Cell col=\"8\" text=\"bind:object\"/><Cell col=\"9\" text=\"bind:nonproperty\"/></Band></Format></Formats>");
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
            this._addPreloadList("dataobject","commonfile::store.json","DataObject01");
        };
        
        // User Script
        this.addIncludeScript("A_DataObject_M_load_01.xfdl","lib::libCommon.xjs");
        this.addIncludeScript("A_DataObject_M_load_01.xfdl","libevent::event.util.xjs");
        this.registerScript("A_DataObject_M_load_01.xfdl", function(nexacro, system, trace, environment, application) {
        /***********************************************************************
        * 설명      : Dataset constcount Property
        ***********************************************************************
        *     수정일     작성자   내용
        ***********************************************************************
        *     2020.05.19  함경곤   최초 작성
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
        	description: "DataObject load test",
        	//-------------- beign user defined section
        	userdata : {
        		result : [],			//task 리턴값
        		eventChkList1 : [],		//GET 확인용
        		eventChkList2 : []		//POST 확인용
        	},
        	//--------------  end  user defined section
        	initialize: function() {
        	pausemillsec(3000);
        	},
        	checker : {},
        	validator : {},
        	task : {},
        	finalize : function() {
        	}
        };

        tc1.task['load'] = function(preload) {
        	var result = [];
        	//////////////////////////////////////////////////////////////////////////////////////////
        	var ds = this.ds00;
        	var strdataobj = ds.binddataobject;
        	var obj = ds._binddataobject;
        	if (strdataobj && obj)
        	{
        		if (preload == false)
        		{
        			tc1.userdata.eventChkList1.push(ds._viewRecords[0][0]);
        			tc1.userdata.eventChkList1.push(ds._viewRecords[0][1]);
        			return tc1.userdata.eventChkList1;
        		}
        	}
        	ds = this.ds01;
        	var strdataobj = ds.binddataobject;
        	var obj = ds._binddataobject;
        	if (strdataobj && obj)
        	{
        		if (preload == true)
        		{
        			tc1.userdata.eventChkList2.push(ds._viewRecords[0][0]);
        			tc1.userdata.eventChkList2.push(ds._viewRecords[0][1]);
        			return tc1.userdata.eventChkList2;
        		}
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
        	description: "load 결과 데이터 확인",
        	autoTaskFlow : ["load"],		// task 수행 순서
        	vcinfo : {
        		argType : tapi.VCT_ARG_LIST,
        		args : [
        			{vc : [[tapi.VBT_NORMAL, false]], 		ev : ["reference","Bandi"]},
        			{vc : [[tapi.VBT_NORMAL, true]], 		ev : ["reference","Bandi"]}

        			/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        		]
        	},
        	prepare: function () {
        		this.DataObject00.load();
        		var vdAdt = tapi.getVdAdaptor();
        		vdAdt.beginWait(3000);

        	},
        	run: function () {
        		var vdAdt = tapi.getVdAdaptor();
        		var taskName = vdAdt.getTaskFlowName();	// task 단계를 찾아서 실행
        		var rtn;

        		/////////////////////////////////////////////////////////////////////////////////////////
        		var v1 = vdAdt.getValue(0);

        		switch(taskName) {
        			case "load": {
        				rtn = tc1.task['load'].call(this, v1);
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
        		 tc1.userdata.result = [];
        		 tc1.userdata.eventChkList1 = [];
        		 tc1.userdata.eventChkList2 = [];
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

        this.DataObject00_onload = function(obj,e)
        {
        	var vdAdt = tapi.getVdAdaptor();
        	if (vdAdt)
        		vdAdt.releaseWait();
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
            this.ds00.addEventHandler("onload",this.ds00_onload,this);
            this.DataObject00.addEventHandler("onload",this.DataObject00_onload,this);
            this.DataObject01.addEventHandler("onload",this.DataObject01_onload,this);
        };

        this.loadIncludeScript("A_DataObject_M_load_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
