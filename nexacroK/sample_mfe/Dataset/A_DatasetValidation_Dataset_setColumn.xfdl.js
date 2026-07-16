(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("A_DatasetValidation_Dataset_setColumn");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("ds_validation", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "Col_string","size" : "256","type" : "STRING"},{"id" : "Col_int","size" : "256","type" : "INT"},{"id" : "Col_float","size" : "256","type" : "FLOAT"},{"id" : "Col_bigdecimal","size" : "256","type" : "BIGDECIMAL"},{"id" : "Col_date","size" : "256","type" : "DATE"},{"id" : "Col_datetime","size" : "256","type" : "DATETIME"},{"id" : "Col_time","size" : "256","type" : "TIME"}]},"Rows" : [{}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Button("btn00","48","35","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00_00","314","4","107","36",null,null,null,null,null,null,this);
            obj.set_taborder("1");
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
        this.addIncludeScript("A_DatasetValidation_Dataset_setColumn.xfdl","lib::libCommon.xjs");
        this.addIncludeScript("A_DatasetValidation_Dataset_setColumn.xfdl","libevent::event.util.xjs");
        this.registerScript("A_DatasetValidation_Dataset_setColumn.xfdl", function(nexacro, system, trace, environment, application) {
        /***********************************************************************
        * 설명      : DatasetValidation 스팩 변경 검증 > setColumn
        * 작성일    : 2019.08.26
        * 작성자    : 성현준
        * 수정내역
        ***********************************************************************
        *     수정일     작성자   내용
        ***********************************************************************
        *    2019.08.26   성현준   최초 작성
        ***********************************************************************
        */

        this.executeIncludeScript("lib::libCommon.xjs"); /*include "lib::libCommon.xjs"*/;
        this.executeIncludeScript("libevent::event.util.xjs"); /*include "libevent::event.util.xjs"*/
        var tapi = this.gfnGetTestAPI();
        /***********************************************************************
        * 01 : Test Case, validator 선언부
        ***********************************************************************/
        /***********************************************************************
        * Test Case 생성
        ***********************************************************************/
        var tc  = {
            // tc 설명
        	description: "DatasetValidation - setColumn",
            metadata : "",
        	//  테스트케이스 시작 전 해야할 일
        	initialize: function(){
        	},

        	// validator 구조체(객체 안의 객체)
        	validator : {
        	},

        	// 테스트케이스 종료 후 해야할 일
        	finalize : function()
        	{
        		var env = nexacro.getEnvironment();
        		nexacro._is_loaded_application = false;
        		env.set_datatyperule(this._datatyperule_bak);
        		var comp;
        		for (id in this.objects)
        		{
        			comp = this[id];
        			if (comp && comp._type_name == "Dataset")
        				comp._initDatasetRuleFuncs(this._datatyperule_bak);
        		}
        		nexacro._is_loaded_application = true;
        	}
        };

        /***********************************************************************
        * Test Case 유효성 검사1
        ***********************************************************************/
        // tc객체의 validator객체에 임의의 key(tc_vc1)를 생성하고 거기에 객체를 넣는 구조
        tc.validator ['tc_vc1'] = {
            // 유효성 검사 설명
        	description: "string",

        	// 수행전 준비에 해야할 일
        	prepare: function (){
        //		var runner = this.gfnGetRunner();
        	},

        	// 실행
        	run: function () {
        		var ret ;

        		ret = this._testRun("string");

        		return ret;
        	},

        	// 기대값 검사
        	check: function  (resultValue) {
        		return nexacro.test.checkEqual(this, resultValue, true);
        	},

        	// 유효성 확인 후 해야 할일
        	teardown: function () {
        	}
        };

        tc.validator ['tc_vc2'] = {
            // 유효성 검사 설명
        	description: "int",

        	// 수행전 준비에 해야할 일
        	prepare: function (){
        //		var runner = this.gfnGetRunner();
        	},

        	// 실행
        	run: function () {
        		var ret ;

        		ret = this._testRun("int");

        		return ret;
        	},

        	// 기대값 검사
        	check: function  (resultValue) {
        		return nexacro.test.checkEqual(this, resultValue, true);
        	},

        	// 유효성 확인 후 해야 할일
        	teardown: function () {
        	}
        };

        tc.validator ['tc_vc3'] = {
            // 유효성 검사 설명
        	description: "float",

        	// 수행전 준비에 해야할 일
        	prepare: function (){
        //		var runner = this.gfnGetRunner();
        	},

        	// 실행
        	run: function () {
        		var ret ;

        		ret = this._testRun("float");

        		return ret;
        	},

        	// 기대값 검사
        	check: function  (resultValue) {
        		return nexacro.test.checkEqual(this, resultValue, true);
        	},

        	// 유효성 확인 후 해야 할일
        	teardown: function () {
        	}
        };

        tc.validator ['tc_vc4'] = {
            // 유효성 검사 설명
        	description: "bigdecimal",

        	// 수행전 준비에 해야할 일
        	prepare: function (){
        //		var runner = this.gfnGetRunner();
        	},

        	// 실행
        	run: function () {
        		var ret ;

        		ret = this._testRun("bigdecimal");

        		return ret;
        	},

        	// 기대값 검사
        	check: function  (resultValue) {
        		return nexacro.test.checkEqual(this, resultValue, true);
        	},

        	// 유효성 확인 후 해야 할일
        	teardown: function () {
        	}
        };

        tc.validator ['tc_vc5'] = {
            // 유효성 검사 설명
        	description: "date",

        	// 수행전 준비에 해야할 일
        	prepare: function (){
        //		var runner = this.gfnGetRunner();
        	},

        	// 실행
        	run: function () {
        		var ret ;

        		ret = this._testRun("date");

        		return ret;
        	},

        	// 기대값 검사
        	check: function  (resultValue) {
        		return nexacro.test.checkEqual(this, resultValue, true);
        	},

        	// 유효성 확인 후 해야 할일
        	teardown: function () {
        	}
        };

        tc.validator ['tc_vc6'] = {
            // 유효성 검사 설명
        	description: "datetime",

        	// 수행전 준비에 해야할 일
        	prepare: function (){
        //		var runner = this.gfnGetRunner();
        	},

        	// 실행
        	run: function () {
        		var ret ;

        		ret = this._testRun("datetime");

        		return ret;
        	},

        	// 기대값 검사
        	check: function  (resultValue) {
        		return nexacro.test.checkEqual(this, resultValue, true);
        	},

        	// 유효성 확인 후 해야 할일
        	teardown: function () {
        	}
        };

        tc.validator ['tc_vc7'] = {
            // 유효성 검사 설명
        	description: "time",

        	// 수행전 준비에 해야할 일
        	prepare: function (){
        //		var runner = this.gfnGetRunner();
        	},

        	// 실행
        	run: function () {
        		var ret ;

        		ret = this._testRun("time");

        		return ret;
        	},

        	// 기대값 검사
        	check: function  (resultValue) {
        		return nexacro.test.checkEqual(this, resultValue, true);
        	},

        	// 유효성 확인 후 해야 할일
        	teardown: function () {
        	}
        };


        var tcInfo = {
        	// tcInfo.tcList : 모든 browser에서 실행할 tc 목록
        	tcList : [tc],
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
        * 02 : Form 변수 선언부
        ***********************************************************************/
        this.tcList = [tc];      // 생성한 tc 목록 할당, 꼭 TC 생성부 아래 선언해야함
        this.eventChkList = [];  // 이벤트 목록을 위한 배열

        /***********************************************************************
        * 화면 로드 시 작업, gfnInit는 필수
        ***********************************************************************/
        this.A_DatasetValidation_Dataset_setColumn_onload = function(obj,e)
        {
        	//필수 : 테스트 러너에 테스트 케이스 전달
        	 this.gfnInit(this.tcList, this);

        	var env = nexacro.getEnvironment();
        	this._datatyperule_bak = env.datatyperule;

        	nexacro._is_loaded_application = false;
        	env.set_datatyperule("2.0");
        	var comp;
        	for (id in this.objects)
        	{
        		comp = this[id];
        		if (comp && comp._type_name == "Dataset")
        			comp._initDatasetRuleFuncs("2.0");
        	}

        	nexacro._is_loaded_application = true;

        	this._reset_colinfo(this.ds_validation);

        };

        /***********************************************************************
        * 사용자 정의 함수 선언부
        ***********************************************************************/

        this._testRun = function (type)
        {
        	trace("=======================" + type + "=======================");
        	var test_in = this._test_data_in[type];
        	var test_expected = this._test_data_expected[type];
        	var pre_v;

        	var in_v, out_v, expected_v, nrow;
        	var ret = true;
        	var col_name = "Col_" + type;
        	var ds = this.ds_validation;

        	ds.clearData();

        	for (var i = 0; i < test_in.length; i++)
        	{
        		in_v = test_in[i];
        		nrow = ds.addRow();

        		pre_v = ds.getColumn(nrow,col_name);
        		ds.setColumn(nrow,col_name,in_v);
        		out_v = ds.getColumn(nrow,col_name);

        		expected_v = test_expected[i];

        		if (expected_v && (typeof expected_v == "object"))
        			expected_v = expected_v.toString();

        		if (out_v && (typeof out_v == "object"))
        		{
        			out_v = out_v.toString();
        		}


        		if (expected_v == "__ignore__" && out_v === undefined)
        			continue;

        		if (expected_v != out_v)
        		{
        			trace("[" + i +"]", in_v, expected_v, out_v);
        			return false;
        		}
        	};

        	return true;

        };

        this._test_data_in = {};
        this._test_data_expected = {};

        this._test_data_in["string"] = ["abcd",this.btn00,1234,null,undefined,NaN,Infinity,-Infinity];
        this._test_data_expected["string"] = ["abcd","[object Button]","1234",undefined,undefined,"NaN","Infinity","-Infinity"];

        this._test_data_in["int"] = ["abcd",this.btn00,1234,"",null,undefined,NaN,Infinity,-Infinity,1004,"1004",1.2E+4,"1.2E+4",-2147483649,2147483648,"123abc"];
        this._test_data_expected["int"] = ["__ignore__","__ignore__",1234,"",null,undefined,"__ignore__","__ignore__","__ignore__",1004,1004,12000,12000,2147483647,-2147483648,"__ignore__"];

        this._test_data_in["float"] = ["abcd",this.btn00,1234,"",null,undefined,NaN,Infinity,-Infinity,123.456,"123.456",1.2E-3,"1.2E-3",-1.7E+309 ,1.7E+309,2.2E-324,"123.4ab"];
        this._test_data_expected["float"] = ["__ignore__","__ignore__",1234,"",undefined,undefined,"__ignore__","__ignore__","__ignore__",123.456,123.456,0.0012,0.0012,"__ignore__","__ignore__",0,"__ignore__"];

        this._test_data_in["bigdecimal"] = ["abcd",this.btn00,1234,"",null,undefined,NaN,Infinity,-Infinity,123.456,"123.456",1.2E-3,"1.2E-3",-1.7E+309 ,1.7E+309,2.2E-324,"123.4ab"];
        this._test_data_expected["bigdecimal"] = ["__ignore__","__ignore__",1234,"",undefined,undefined,"__ignore__","__ignore__","__ignore__",123.456,123.456,0.0012,0.0012,"__ignore__","__ignore__",0,"__ignore__"];

        var test_date = new nexacro.Date(2019,08,26);
        this._test_data_in["date"] =       ["20180327",test_date,this.btn00  ,"20180327","",null     ,undefined,NaN         ,Infinity    ,-Infinity   ,"20180327","20180027","20181427","20180300","20180362","18032"     ,"180327"    ,"2018037"   ,"111111327" ,"a"         ,"9"         ,"09"        ,"99"        ,"2018"      ,"201a0327"];
        this._test_data_expected["date"] = ["20180327",test_date,"__ignore__","20180327","",undefined,undefined,"__ignore__","__ignore__","__ignore__","20180327","20171227","20190227","20180228","20180501","__ignore__","__ignore__","__ignore__","__ignore__","__ignore__","00090101"  ,"00090101"  ,"00990101"  ,"20180101"  ,"__ignore__"];

        var test_datetime = new nexacro.Date(2019,08,26,17,17,30,151);
        this._test_data_in["datetime"] = ["20180327041520800",test_datetime,this.btn00,"20180327041520800","",null,undefined,NaN,Infinity,-Infinity,"20180327041520888","20180027041520888","20181427041520888","20180300041520888","20180362041520888","20180327481520888","20180327046220888","20180327041562888","20180327041520","20180027041520","20181427041520","20180300041520","20180362041520","20180327481520","20180327046220","20180327041562","2018032704","180327041520","1803270415208","180327041520888","201803270415208899"                                   ,"a"         ,"9"                ,"09"               ,"99"               ,"2018032704a520800"];
        this._test_data_expected["datetime"] = ["20180327041520800",test_datetime,"__ignore__","20180327041520800","",undefined,undefined,"__ignore__","__ignore__","__ignore__","20180327041520888","20171227041520888","20190227041520888","20180228041520888","20180501041520888","20180329001520888","20180327050220888","20180327041602888","20180327041520000","20171227041520000","20190227041520000","20180228041520000","20180501041520000","20180329001520000","20180327050220000","20180327041602000","__ignore__","__ignore__","__ignore__","__ignore__","__ignore__","__ignore__","00090101000000000","00090101000000000","00990101000000000","__ignore__"];

        var test_time = new nexacro.Date(2019,08,26,17,17,30,151);
        test_time._timecheck = true;
        test_time._timeonly = true;

        this._test_data_in["time"] = ["041520800",test_time,this.btn00,"141520800","",null,undefined,NaN,Infinity,-Infinity,"041520888","481520888","048820888","041588888","041520","481520","048820","041588","1415208888","04152","a","9","09","99","4a1520888"];
        if (system.navigatorname != "IE")
        	this._test_data_expected["time"] = ["041520800",test_time,"__ignore__","141520800","",undefined,undefined,"__ignore__","__ignore__","__ignore__","041520888","001520888","052820888","041628888","041520000","001520000","052820000","041628000","__ignore__","000000000","__ignore__","000000000","000000000","000000000","__ignore__"];
        else
        	this._test_data_expected["time"] = ["041520800",test_time,"__ignore__","141520800","",undefined,undefined,"__ignore__","__ignore__","__ignore__","041520888","001520888","052820888","041628888","041520000","001520000","052820000","041628000","__ignore__","__ignore__","__ignore__","__ignore__","__ignore__","__ignore__","__ignore__"];

        this.btn00_onclick = function(obj,e)
        {
        	this._testRun("string");
        	this._testRun("int");
        	this._testRun("float");
        	this._testRun("bigdecimal");
        	this._testRun("date");
        	this._testRun("datetime");
        	this._testRun("time");
        };

        this._reset_colinfo = function(ds)
        {
        	if (!ds)
        		return;

        	var colcount = ds.getColCount();
        	var colinfo;

        	for (var i = 0; i < colcount; i++)
        	{
        		colinfo = ds.getColumnInfo(i);
        		if (colinfo)
        			colinfo._on_apply_columntype();
        	}
        };

        this.btn00_00_onclick = function(obj,e)
        {
        	// Runner 획득
        	var runner = tapi.getRunner();
        	//------------ 선택 작업 Begin ------------------------------
        	// 메시지를 log로 기록할 수준 지정
        	// log level = [ FATAL | ERROR | WARN | INFO | DEBUG | TRACE ]
        	runner.setLogLevel(tapi.INFO);
        	if (runner.isTestMode() == false){
               var logger = new tapi.ConsoleLogger();
               runner.setLogger(logger);
           }
        	// Test 실행
        	runner.executeTest();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.A_DatasetValidation_Dataset_setColumn_onload,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn00_00.addEventHandler("onclick",this.btn00_00_onclick,this);
        };

        this.loadIncludeScript("A_DatasetValidation_Dataset_setColumn.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
