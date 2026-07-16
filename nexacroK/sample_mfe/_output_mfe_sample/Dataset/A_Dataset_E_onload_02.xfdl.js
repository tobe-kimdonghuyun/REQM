(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("A_Dataset_E_onload_02");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("Dataset00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "Column0","size" : "256","type" : "STRING"},{"id" : "Column1","size" : "256","type" : "INT"},{"id" : "Column2","size" : "256","type" : "FLOAT"},{"id" : "Column3","size" : "256","type" : "BIGDECIMAL"},{"id" : "Column4","size" : "256","type" : "DATE"},{"id" : "Column5","size" : "256","type" : "DATETIME"},{"id" : "Column6","size" : "256","type" : "TIME"}]},"Rows" : [{"Column0" : "test","Column1" : "100","Column2" : "100.1","Column3" : "123456","Column4" : "20200101","Column5" : "20200101235959","Column6" : "235959"}]});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("Dataset01", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "Column0","size" : "256","type" : "STRING"},{"id" : "Column1","size" : "256","type" : "INT"},{"id" : "Column2","size" : "256","type" : "FLOAT"},{"id" : "Column3","size" : "256","type" : "BIGDECIMAL"},{"id" : "Column4","size" : "256","type" : "DATE"},{"id" : "Column5","size" : "256","type" : "DATETIME"},{"id" : "Column6","size" : "256","type" : "TIME"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Button("Button00","11","165","223","32",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("success (normal)");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00_00","11","205","223","32",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("success (errorcode > 0)");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01","11","288","223","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("error");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00_01","11","245","223","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("success (errormsg != \"SUCCESS\")");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("TextArea00","275","167","419","160",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new nexacro.Combo("Combo00","123","19","104","26",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_taborder("5");
            var Combo00_innerdataset = new nexacro.NormalDataset("Combo00_innerdataset", obj);
            Combo00_innerdataset._setContents({"ColumnInfo" : {"Column" : [{"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "SSV","datacolumn" : "SSV"},{"codecolumn" : "XML","datacolumn" : "XML"},{"codecolumn" : "BIN","datacolumn" : "BIN"}]});
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_text("XML");
            obj.set_value("XML");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","19","16","105","29",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("data type");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid00","14","70","687","82",null,null,null,null,null,null,this);
            obj.set_binddataset("Dataset00");
            obj.set_taborder("7");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/><Cell col=\"5\" text=\"Column5\"/><Cell col=\"6\" text=\"Column6\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid00_00","11","338","687","82",null,null,null,null,null,null,this);
            obj.set_binddataset("Dataset01");
            obj.set_taborder("8");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/><Cell col=\"5\" text=\"Column5\"/><Cell col=\"6\" text=\"Column6\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button02","700","167","48","23",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("clear");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00_00","258","16","105","29",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("datasetloadtype");
            this.addChild(obj.name, obj);

            obj = new nexacro.Combo("Combo00_00","362","19","194","26",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_taborder("11");
            var Combo00_00_innerdataset = new nexacro.NormalDataset("Combo00_00_innerdataset", obj);
            Combo00_00_innerdataset._setContents({"ColumnInfo" : {"Column" : [{"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "onsuccess","datacolumn" : "onsuccess"},{"codecolumn" : "errorallow","datacolumn" : "errorallow"}]});
            obj.set_innerdataset(Combo00_00_innerdataset);
            obj.set_text("XML");
            obj.set_value("XML");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00","613","9","107","36",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Embedded Test");
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
        this.addIncludeScript("A_Dataset_E_onload_02.xfdl","lib::libCommon.xjs");
        this.addIncludeScript("A_Dataset_E_onload_02.xfdl","libevent::event.util.xjs");
        this.addIncludeScript("A_Dataset_E_onload_02.xfdl","libevent::event.wrapper.xjs");
        this.registerScript("A_Dataset_E_onload_02.xfdl", function(nexacro, system, trace, environment, application) {
        /***********************************************************************
        * 설명      : Dataset onload Event >> DSLoadEventInfo.errorcode , errormsg
        ***********************************************************************
        *     수정일     작성자   내용
        ***********************************************************************
        *     2020.01.08  성현준   최초 작성
        ***********************************************************************
        */

        this.executeIncludeScript("lib::libCommon.xjs"); /*include "lib::libCommon.xjs"*/;
        this.executeIncludeScript("libevent::event.util.xjs"); /*include "libevent::event.util.xjs"*/;
        this.executeIncludeScript("libevent::event.wrapper.xjs"); /*include "libevent::event.wrapper.xjs"*/
        var tapi = this.gfnLoadTestAPI(0.71);

        this._datasetloadtype_org = "";
        this._eventChkList = [];
        var tc1  = {
        	description: "DSLoadEventInfo.errorcode/errormsg test",
        	//-------------- beign user defined section
        	userdata : {
        		result : [],			// test 단계별 실행 결과 저장
        	},
        	//--------------  end  user defined section
        	initialize: function() {
        		var env = nexacro.getEnvironment();
        		this._datasetloadtype_org = env.datasetloadtype;
        		env.set_datasetloadtype("errorallow");
        	},
        	checker : {},
        	validator : {},
        	task : {},
        	finalize : function() {
        		var env = nexacro.getEnvironment();
        		env.set_datasetloadtype(this._datasetloadtype_org);
        	}
        };

        tc1.task['transaction'] = function(testtype, datatype) {
        	var result = [];

        	var runner = this.gfnGetRunner();
        	runner.setAsync(false);

        	this.fn_transaction(testtype, datatype);

        	return result;
        };

        tc1.checker['equal'] = function(alResultValues, alExpectedValues) {
        	var chk = tapi.checkEqual(this, alResultValues, alExpectedValues);
        	return chk;
        };

        tc1.validator ['tc1_vd1'] = {
        	description: "XML, SSV 통신타입별 확인",
        	autoTaskFlow : ["XML", "SSV"],
        	vcinfo : {
        		argType : tapi.VCT_ARG_LIST,
        		args : [
        				{vc: [[tapi.VBT_NORMAL, 0]],  ev: [0, "SUCCESS", 0, "SUCCESS", 0, "SUCCESS", 0, "SUCCESS"]},
        				{vc: [[tapi.VBT_NORMAL, 1]],  ev: [0, "SUCCESS", 10, "SUCCESS", 0, "SUCCESS", 10, "SUCCESS"]},
        				{vc: [[tapi.VBT_NORMAL, 2]],  ev: [0, "SUCCESS", 0, "OK", 0, "SUCCESS", 0, "OK"]},
        				{vc: [[tapi.VBT_NORMAL, 3]],  ev: [-5, "WARNING",-5, "WARNING", -5, "WARNING",-5, "WARNING"]}
        		]
        	},
        	prepare: function () {
        		this._eventChkList = [];
        	},
        	run: function () {
        		var vdAdt = tapi.getVdAdaptor();
        		var taskname = vdAdt.getTaskFlowName();
        		var rtn;

        		// args 데이터 가져오기
        		var testtype = vdAdt.getValue(0);

        		switch(taskname) {
        		case "XML":	case "SSV":
        			tc1.task['transaction'].call(this, testtype, taskname);
        			break;
        		}

        		return tc1.userdata.result;
        	},
        	check: function (resultValue, expectedValue) {
        		// ev : 이벤트 정보
        		var chk = tc1.checker['equal'].call(this, this._eventChkList, expectedValue);
        		return chk;
        	},
        	teardown: function () {
        		this._eventChkList = [];
        		tc1.userdata.eventChkList1 = [];
        		tc1.userdata.result = [];
        	}
        };

        var tc2  = {
        	description: "DSLoadEventInfo.errorcode/errormsg test",
        	//-------------- beign user defined section
        	userdata : {
        		result : [],			// test 단계별 실행 결과 저장
        	},
        	//--------------  end  user defined section
        	initialize: function() {
        		var env = nexacro.getEnvironment();
        		this._datasetloadtype_org = env.datasetloadtype;
        		env.set_datasetloadtype("errorallow");
        	},
        	checker : {},
        	validator : {},
        	task : {},
        	finalize : function() {
        		var env = nexacro.getEnvironment();
        		env.set_datasetloadtype(this._datasetloadtype_org);
        	}
        };

        tc2.task['transaction'] = function(testtype, datatype) {
        	var result = [];

        	var runner = this.gfnGetRunner();
        	runner.setAsync(false);

        	this.fn_transaction(testtype, datatype);

        	return result;
        };

        tc2.checker['equal'] = function(alResultValues, alExpectedValues) {
        	var chk = tapi.checkEqual(this, alResultValues, alExpectedValues);

        	return chk;
        };

        tc2.validator ['tc2_vd1'] = {
        	description: "BIN 통신타입 확인",
        	autoTaskFlow : ["BIN"],
        	vcinfo : {
        		argType : tapi.VCT_ARG_LIST,
        		args : [
        				{vc: [[tapi.VBT_NORMAL, 0]],  ev: [0, "SUCCESS", 0, "SUCCESS"]},
        				{vc: [[tapi.VBT_NORMAL, 1]],  ev: [0, "SUCCESS", 10, "SUCCESS"]},
        				{vc: [[tapi.VBT_NORMAL, 2]],  ev: [0, "SUCCESS", 0, "OK"]},
        				{vc: [[tapi.VBT_NORMAL, 3]],  ev: [-5, "WARNING",-5, "WARNING"]}
        		]
        	},
        	prepare: function () {
        		this._eventChkList = [];
        	},
        	run: function () {
        		var vdAdt = tapi.getVdAdaptor();
        		var taskname = vdAdt.getTaskFlowName();
        		var rtn;

        		// args 데이터 가져오기
        		var testtype = vdAdt.getValue(0);

        		switch(taskname) {
        		case "BIN":
        			tc2.task['transaction'].call(this, testtype, taskname);
        			break;
        		}

        		return tc2.userdata.result;
        	},
        	check: function (resultValue, expectedValue) {
        		// ev : 이벤트 정보
        		var chk = tc2.checker['equal'].call(this, this._eventChkList, expectedValue);
        		return chk;
        	},
        	teardown: function () {
        		this._eventChkList = [];
        		tc2.userdata.eventChkList1 = [];
        		tc2.userdata.result = [];
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
        			 { tc: tc2, browser: ['nexacro'] },
        	],
        	// tcInfo.adjustTcInfo : browser 버전 및 os 환경에 따른 실행 여부를 결정할 tc 목록
           adjustTcInfo : function() {
        	}
        };


        this.Button00_onclick = function(obj,e)
        {
        	this.fn_transaction(0);
        };

        this.Button00_00_onclick = function(obj,e)
        {
        	this.fn_transaction(1);
        };

        this.Button00_01_onclick = function(obj,e)
        {
        	this.fn_transaction(2);
        };

        this.Button01_onclick = function(obj,e)
        {
        	this.fn_transaction(3);
        };


        this.fn_transaction = function (testtype, datatype)
        {
        	//var url = "http://172.10.12.73:8080/JSP/echo.jsp";
        	var url = "servicejsp::echo.jsp";
        	if (!datatype)
        		datatype = this.Combo00.value;
        	var errorcode = 0;
        	var errormsg = "SUCCESS";

            this._testtype = testtype;
        	switch(testtype)
        	{
        		case 0:
        			break;
        		case 1:
        			errorcode = 10;
        			break;
        		case 2:
        			errormsg = "OK";
        			break;
        		case 3:
        			errorcode = -5;
        			errormsg = "WARNING";
        		break;
        	};


        	this.transaction("test", url, "Dataset00=Dataset00","Dataset01=Dataset00","type=" + datatype + " errorcode=" + errorcode + " errormsg=" + errormsg,"fn_callback");
        };

        this.fn_callback = function(sid,errcd,errmsg)
        {
        	//trace("["+ this._testtype + "]", errcd,errmsg, this._eventChkList);
        	this._eventChkList.push(errcd);
        	this._eventChkList.push(errmsg);


        	var runner = this.gfnGetRunner();
        	if (runner)
        		runner.setAsync(true);


        	/*
        	var str = "[fn_callback]" +"\nerrorcode :"+ errcd+"\nerrormsg :"+ errmsg;
        	trace(str);
        	if (this.TextArea00.value)
        		str = this.TextArea00.value +"\n\n"+str;
        	this.TextArea00.set_value(str);
        	*/

        };

        this.Dataset01_onload = function(obj,e)
        {
        	//trace("["+ this._testtype + "]", e.errorcode,e.errormsg, this._eventChkList);
        	this._eventChkList.push(e.errorcode);
        	this._eventChkList.push(e.errormsg);

        	/*
        	var str = "[Dataset01_onload]" +"\nerrorcode :"+ e.errorcode+"\nerrormsg :"+  e.errormsg +"\nreason :"+  e.reason;
        	trace(str);
        	if (this.TextArea00.value)
        		str = this.TextArea00.value +"\n\n"+str;
        	this.TextArea00.set_value(str);
        	*/
        };

        this.Button02_onclick = function(obj,e)
        {
        	this.TextArea00.set_value("");
        };

        this.A_Dataset_E_onload_02_onload = function(obj,e)
        {
           // debug mode : log level에서 지정한 모든 메시지 제공
        	tapi.systemDebugOn();	// Runner를 debug mode로 실행
        	tapi.debugOn();			// 응용을 debug mode로 실행

        	// Runner Load
        	tapi.init(tcInfo, this);


        };

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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.A_Dataset_E_onload_02_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button00_00.addEventHandler("onclick",this.Button00_00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button00_01.addEventHandler("onclick",this.Button00_01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.Dataset01.addEventHandler("onload",this.Dataset01_onload,this);
        };

        this.loadIncludeScript("A_Dataset_E_onload_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
