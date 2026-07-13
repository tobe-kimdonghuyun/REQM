(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("A_DatasetValidation_Dataset_load");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("ds_load", this);
            obj.set_useclientlayout("true");
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "data","size" : "256","type" : "STRING"}]}});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("ds_in", this);
            obj._setContents({});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("ds_validation", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "type","size" : "256","type" : "STRING"},{"id" : "ColIn","size" : "256","type" : "STRING"},{"id" : "Col_string","size" : "256","type" : "STRING"},{"id" : "Col_int","size" : "256","type" : "STRING"},{"id" : "Col_float","size" : "256","type" : "STRING"},{"id" : "Col_bigdecimal","size" : "256","type" : "STRING"},{"id" : "Col_date","size" : "256","type" : "STRING"},{"id" : "Col_datetime","size" : "256","type" : "STRING"},{"id" : "Col_time","size" : "256","type" : "STRING"}]},"Rows" : [{"ColIn" : "abcd","type" : "string","Col_string" : "\"abcd\""},{"ColIn" : "null","type" : "string","Col_string" : "null"},{"ColIn" : "undefined","type" : "string","Col_string" : "undefined"},{"ColIn" : "NaN","type" : "string","Col_string" : "\"NaN\""},{"ColIn" : "Infinity","type" : "string","Col_string" : "\"Infinity\""},{"ColIn" : "-Infinity","type" : "string","Col_string" : "\"-Infinity\""},{"ColIn" : "abcd","type" : "int","Col_int" : "NaN"},{"ColIn" : "","type" : "int","Col_int" : "\"\""},{"ColIn" : "null","type" : "int","Col_int" : "undefined"},{"ColIn" : "undefined","type" : "int","Col_int" : "undefined"},{"ColIn" : "NaN","type" : "int","Col_int" : "NaN"},{"ColIn" : "Infinity","type" : "int","Col_int" : "NaN"},{"ColIn" : "-Infinity","type" : "int","Col_int" : "NaN"},{"ColIn" : "1004","type" : "int","Col_int" : "1004"},{"ColIn" : "1.2E+4","type" : "int","Col_int" : "12000"},{"ColIn" : "-2147483649","type" : "int","Col_int" : "2147483647"},{"ColIn" : "2147483648","type" : "int","Col_int" : "-2147483648"},{"ColIn" : "123abc","type" : "int","Col_int" : "NaN"},{"ColIn" : "abcd","type" : "float","Col_float" : "NaN"},{"ColIn" : "\"\"","type" : "float","Col_float" : "\"\""},{"ColIn" : "null","type" : "float","Col_float" : "undefined"},{"ColIn" : "undefined","type" : "float","Col_float" : "undefined"},{"ColIn" : "NaN","type" : "float","Col_float" : "NaN"},{"ColIn" : "Infinity","type" : "float","Col_float" : "Infinity"},{"ColIn" : "-Infinity","type" : "float","Col_float" : "-Infinity"},{"ColIn" : "123.456","type" : "float","Col_float" : "123.456"},{"ColIn" : "1.2E-3","type" : "float","Col_float" : "0.0012"},{"ColIn" : "-1.7E+309 ","type" : "float","Col_float" : "-Infinity"},{"ColIn" : "1.7E+309","type" : "float","Col_float" : "Infinity"},{"ColIn" : "2.2E-324","type" : "float","Col_float" : "0"},{"ColIn" : "123.4ab","type" : "float","Col_float" : "NaN"},{"ColIn" : "abcd","type" : "bigdecimal","Col_bigdecimal" : "NaN"},{"ColIn" : "\"\"","type" : "bigdecimal","Col_bigdecimal" : "\"\""},{"ColIn" : "null","type" : "bigdecimal","Col_bigdecimal" : "undefined"},{"ColIn" : "undefined","type" : "bigdecimal","Col_bigdecimal" : "undefined"},{"ColIn" : "NaN","type" : "bigdecimal","Col_bigdecimal" : "NaN"},{"ColIn" : "Infinity","type" : "bigdecimal","Col_bigdecimal" : "Infinity"},{"ColIn" : "-Infinity","type" : "bigdecimal","Col_bigdecimal" : "-Infinity"},{"ColIn" : "123.456","type" : "bigdecimal","Col_bigdecimal" : "123.456"},{"ColIn" : "1.2E-3","type" : "bigdecimal","Col_bigdecimal" : "0.0012"},{"ColIn" : "-1.7E+309 ","type" : "bigdecimal","Col_bigdecimal" : "-Infinity"},{"ColIn" : "1.7E+309","type" : "bigdecimal","Col_bigdecimal" : "Infinity"},{"ColIn" : "2.2E-324","type" : "bigdecimal","Col_bigdecimal" : "0"},{"ColIn" : "123.4ab","type" : "bigdecimal","Col_bigdecimal" : "NaN"},{"ColIn" : "20180327","type" : "date","Col_date" : "20180327"},{"ColIn" : "\"\"","type" : "date","Col_date" : "\"\""},{"ColIn" : "null","type" : "date","Col_date" : "undefined"},{"ColIn" : "undefined","type" : "date","Col_date" : "undefined"},{"ColIn" : "NaN","type" : "date","Col_date" : "Invalid Date"},{"ColIn" : "Infinity","type" : "date","Col_date" : "Invalid Date"},{"ColIn" : "-Infinity","type" : "date","Col_date" : "Invalid Date"},{"ColIn" : "20180327","type" : "date","Col_date" : "20180327"},{"ColIn" : "20180027","type" : "date","Col_date" : "20171227"},{"ColIn" : "20181427","type" : "date","Col_date" : "20190227"},{"ColIn" : "20180300","type" : "date","Col_date" : "20180228"},{"ColIn" : "20180362","type" : "date","Col_date" : "20180501"},{"ColIn" : "170327","type" : "date","Col_date" : "Invalid Date"},{"ColIn" : "170027","type" : "date","Col_date" : "Invalid Date"},{"ColIn" : "171427","type" : "date","Col_date" : "Invalid Date"},{"ColIn" : "170300","type" : "date","Col_date" : "Invalid Date"},{"ColIn" : "170362","type" : "date","Col_date" : "Invalid Date"},{"ColIn" : "210327","type" : "date","Col_date" : "Invalid Date"},{"ColIn" : "210027","type" : "date","Col_date" : "Invalid Date"},{"ColIn" : "211427","type" : "date","Col_date" : "Invalid Date"},{"ColIn" : "210300","type" : "date","Col_date" : "Invalid Date"},{"ColIn" : "210362","type" : "date","Col_date" : "Invalid Date"},{"ColIn" : "18032","type" : "date","Col_date" : "Invalid Date"},{"ColIn" : "180327","type" : "date","Col_date" : "Invalid Date"},{"ColIn" : "2018037","type" : "date","Col_date" : "Invalid Date"},{"ColIn" : "111111327","type" : "date","Col_date" : "Invalid Date"},{"ColIn" : "a","type" : "date","Col_date" : "Invalid Date"},{"ColIn" : "9","type" : "date","Col_date" : "00090101"},{"ColIn" : "09","type" : "date","Col_date" : "00090101"},{"ColIn" : "99","type" : "date","Col_date" : "00990101"},{"ColIn" : "2018","type" : "date","Col_date" : "20180101"},{"ColIn" : "201a0327","type" : "date","Col_date" : "Invalid Date"},{"ColIn" : "20180327041520800","type" : "datetime","Col_datetime" : "20180327041520800"},{"ColIn" : "\"\"","type" : "datetime","Col_datetime" : "\"\""},{"ColIn" : "null","type" : "datetime","Col_datetime" : "undefined"},{"ColIn" : "undefined","type" : "datetime","Col_datetime" : "undefined"},{"ColIn" : "NaN","type" : "datetime","Col_datetime" : "Invalid Date"},{"ColIn" : "Infinity","type" : "datetime","Col_datetime" : "Invalid Date"},{"ColIn" : "-Infinity","type" : "datetime","Col_datetime" : "Invalid Date"},{"ColIn" : "20180327041520888","type" : "datetime","Col_datetime" : "20180327041520888"},{"ColIn" : "20180027041520888","type" : "datetime","Col_datetime" : "20171227041520888"},{"ColIn" : "20181427041520888","type" : "datetime","Col_datetime" : "20190227041520888"},{"ColIn" : "20180300041520888","type" : "datetime","Col_datetime" : "20180228041520888"},{"ColIn" : "20180362041520888","type" : "datetime","Col_datetime" : "20180501041520888"},{"ColIn" : "20180327481520888","type" : "datetime","Col_datetime" : "20180329001520888"},{"ColIn" : "20180327046220888","type" : "datetime","Col_datetime" : "20180327050220888"},{"ColIn" : "20180327041562888","type" : "datetime","Col_datetime" : "20180327041602888"},{"ColIn" : "170327041520888","type" : "datetime","Col_datetime" : "Invalid Date"},{"ColIn" : "170027041520888","type" : "datetime","Col_datetime" : "Invalid Date"},{"ColIn" : "171427041520888","type" : "datetime","Col_datetime" : "Invalid Date"},{"ColIn" : "170300041520888","type" : "datetime","Col_datetime" : "Invalid Date"},{"ColIn" : "170362041520888","type" : "datetime","Col_datetime" : "Invalid Date"},{"ColIn" : "170327481520888","type" : "datetime","Col_datetime" : "Invalid Date"},{"ColIn" : "170327046220888","type" : "datetime","Col_datetime" : "Invalid Date"},{"ColIn" : "170327041562888","type" : "datetime","Col_datetime" : "Invalid Date"},{"ColIn" : "210327041520888","type" : "datetime","Col_datetime" : "Invalid Date"},{"ColIn" : "210027041520888","type" : "datetime","Col_datetime" : "Invalid Date"},{"ColIn" : "211427041520888","type" : "datetime","Col_datetime" : "Invalid Date"},{"ColIn" : "210300041520888","type" : "datetime","Col_datetime" : "Invalid Date"},{"ColIn" : "210362041520888","type" : "datetime","Col_datetime" : "Invalid Date"},{"ColIn" : "210327481520888","type" : "datetime","Col_datetime" : "Invalid Date"},{"ColIn" : "210327046220888","type" : "datetime","Col_datetime" : "Invalid Date"},{"ColIn" : "210327041562888","type" : "datetime","Col_datetime" : "Invalid Date"},{"ColIn" : "20180327041520","type" : "datetime","Col_datetime" : "20180327041520000"},{"ColIn" : "20180027041520","type" : "datetime","Col_datetime" : "20171227041520000"},{"ColIn" : "20181427041520","type" : "datetime","Col_datetime" : "20190227041520000"},{"ColIn" : "20180300041520","type" : "datetime","Col_datetime" : "20180228041520000"},{"ColIn" : "20180362041520","type" : "datetime","Col_datetime" : "20180501041520000"},{"ColIn" : "20180327481520","type" : "datetime","Col_datetime" : "20180329001520000"},{"ColIn" : "20180327046220","type" : "datetime","Col_datetime" : "20180327050220000"},{"ColIn" : "20180327041562","type" : "datetime","Col_datetime" : "20180327041602000"},{"ColIn" : "170327041520","type" : "datetime","Col_datetime" : "Invalid Date"},{"ColIn" : "170027041520","type" : "datetime","Col_datetime" : "Invalid Date"},{"ColIn" : "171427041520","type" : "datetime","Col_datetime" : "Invalid Date"},{"ColIn" : "170300041520","type" : "datetime","Col_datetime" : "Invalid Date"},{"ColIn" : "170362041520","type" : "datetime","Col_datetime" : "Invalid Date"},{"ColIn" : "170327481520","type" : "datetime","Col_datetime" : "Invalid Date"},{"ColIn" : "170327046220","type" : "datetime","Col_datetime" : "Invalid Date"},{"ColIn" : "170327041562","type" : "datetime","Col_datetime" : "Invalid Date"},{"ColIn" : "210327041520","type" : "datetime","Col_datetime" : "Invalid Date"},{"ColIn" : "210027041520","type" : "datetime","Col_datetime" : "Invalid Date"},{"ColIn" : "211427041520","type" : "datetime","Col_datetime" : "Invalid Date"},{"ColIn" : "210300041520","type" : "datetime","Col_datetime" : "Invalid Date"},{"ColIn" : "210362041520","type" : "datetime","Col_datetime" : "Invalid Date"},{"ColIn" : "210327481520","type" : "datetime","Col_datetime" : "Invalid Date"},{"ColIn" : "210327046220","type" : "datetime","Col_datetime" : "Invalid Date"},{"ColIn" : "210327041562","type" : "datetime","Col_datetime" : "Invalid Date"},{"ColIn" : "2018032704","type" : "datetime","Col_datetime" : "Invalid Date"},{"ColIn" : "180327041520","type" : "datetime","Col_datetime" : "Invalid Date"},{"ColIn" : "1803270415208","type" : "datetime","Col_datetime" : "Invalid Date"},{"ColIn" : "180327041520888","type" : "datetime","Col_datetime" : "Invalid Date"},{"ColIn" : "201803270415208899","type" : "datetime","Col_datetime" : "Invalid Date"},{"ColIn" : "a","type" : "datetime","Col_datetime" : "Invalid Date"},{"ColIn" : "9","type" : "datetime","Col_datetime" : "00090101000000000"},{"ColIn" : "09","type" : "datetime","Col_datetime" : "00090101000000000"},{"ColIn" : "99","type" : "datetime","Col_datetime" : "00990101000000000"},{"ColIn" : "2018","type" : "datetime","Col_datetime" : "__m__"},{"ColIn" : "2018032704a520800","type" : "datetime","Col_datetime" : "Invalid Date"},{"ColIn" : "141520800","type" : "time","Col_time" : "141520800"},{"ColIn" : "\"\"","type" : "time","Col_time" : "\"\""},{"ColIn" : "null","type" : "time","Col_time" : "undefined"},{"ColIn" : "undefined","type" : "time","Col_time" : "undefined"},{"ColIn" : "NaN","type" : "time","Col_time" : "Invalid Date"},{"ColIn" : "Infinity","type" : "time","Col_time" : "Invalid Date"},{"ColIn" : "-Infinity","type" : "time","Col_time" : "Invalid Date"},{"ColIn" : "041520888","type" : "time","Col_time" : "041520888"},{"ColIn" : "481520888","type" : "time","Col_time" : "001520888"},{"ColIn" : "048820888","type" : "time","Col_time" : "052820888"},{"ColIn" : "041588888","type" : "time","Col_time" : "041628888"},{"ColIn" : "041520","type" : "time","Col_time" : "041520000"},{"ColIn" : "481520","type" : "time","Col_time" : "001520000"},{"ColIn" : "048820","type" : "time","Col_time" : "052820000"},{"ColIn" : "041588","type" : "time","Col_time" : "041628000"},{"ColIn" : "1415208888","type" : "time","Col_time" : "Invalid Date"},{"ColIn" : "04152","type" : "time","Col_time" : "__m__"},{"ColIn" : "a","type" : "time","Col_time" : "Invalid Date"},{"ColIn" : "9","type" : "time","Col_time" : "Invalid Date"},{"ColIn" : "09","type" : "time","Col_time" : "Invalid Date"},{"ColIn" : "99","type" : "time","Col_time" : "Invalid Date"},{"ColIn" : "4a1520888","type" : "time","Col_time" : "Invalid Date"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Button("btn00","54","49","168","29",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("loadXML");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00_00","54","89","168","29",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("loadSSV");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00_00_00","53","129","168","29",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("loadCSV");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00_00_00_00","52","169","168","29",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("loadBIN");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00_01","314","4","107","36",null,null,null,null,null,null,this);
            obj.set_taborder("4");
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
        this.addIncludeScript("A_DatasetValidation_Dataset_load.xfdl","lib::libCommon.xjs");
        this.addIncludeScript("A_DatasetValidation_Dataset_load.xfdl","libevent::event.util.xjs");
        this.addIncludeScript("A_DatasetValidation_Dataset_load.xfdl","libevent::event.wrapper.xjs");
        this.registerScript("A_DatasetValidation_Dataset_load.xfdl", function(nexacro, system, trace, environment, application) {
        /***********************************************************************
        * 설명      : DatasetValidation 스팩 변경 검증 > load
        * 작성일    : 2019.08.23
        * 작성자    : 성현준
        * 수정내역
        ***********************************************************************
        *     수정일     작성자   내용
        ***********************************************************************
        *    2019.08.12   성현준   최초 작성
        ***********************************************************************
        */

        this.executeIncludeScript("lib::libCommon.xjs"); /*include "lib::libCommon.xjs"*/;
        this.executeIncludeScript("libevent::event.util.xjs"); /*include "libevent::event.util.xjs"*/
        this.executeIncludeScript("libevent::event.wrapper.xjs"); /*include "libevent::event.wrapper.xjs"*/

        var tapi = this.gfnLoadTestAPI(0.71);

        /***********************************************************************
        * 01 : Test Case, validator 선언부
        ***********************************************************************/
        /***********************************************************************
        * Test Case 생성
        ***********************************************************************/
        var tc  = {
            // tc 설명
        	description: "DatasetValidation - load",
           userdata : {
        		//-------------- beign user defined section
        		result : [],
        		eventChkList1 : [],		//
        		//--------------  end  user defined section
        	},
        	initialize: function() {
        		// tapi.logger.trace("tc1 initialize")
        		// this.Tab00.addEventHandler("canchange", this.Tab00_canchange, this);
        	},
        	checker: {},
        	validator : {},
        	task: {},
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

        tc.checker['equal'] = function(alResultValues, alExpectedValues) {
        	   var chk = true;
        	   var chk = tapi.checkEqual(this, alResultValues, alExpectedValues);

        	   return chk;
        };

        /***********************************************************************
        * Test Case 유효성 검사1
        ***********************************************************************/
        // tc객체의 validator객체에 임의의 key(tc_vc1)를 생성하고 거기에 객체를 넣는 구조

        tc.task['LOAD'] = function(type) {
        	var result = [];
        	//////////////////////////////////////////////////////////////////////////////////////////

        	ret = this._testRun(type);

        	result.push(ret);

        	//////////////////////////////////////////////////////////////////////////////////////////
        	return result;
        };


        tc.validator ['tc_vc1'] = {
            // 유효성 검사 설명
        	description: "Dataset.load",
        	autoTaskFlow : ["LOAD"],		// task 수행 순서
        	vcinfo : {
        		argType : tapi.VCT_ARG_LIST,
        		args : [
        			////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        			// textwidth : Button에 표시되는 텍스트의 출력영역 너비를 설정하는 속성

        			// Remark
        			// 1. 컴포넌트에 표시되어야 할 텍스트가 길 경우 줄바꿈 처리를 하기 위해 설정
        			//    줄바꿈을 위해서는 "-nexa-word-wrap" 속성을 설정하여야 합니다.

        			// 						input																		설정전				설정후
        			{vc : [[tapi.VBT_NORMAL, "XML"]], ev : [true]},
        			{vc : [[tapi.VBT_NORMAL, "SSV"]], ev : [true]},
        			{vc : [[tapi.VBT_NORMAL, "CSV"]], ev : [true]},
        			{vc : [[tapi.VBT_NORMAL, "BIN"]], ev : [true]}
        			/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        		]
        	},
        	prepare: function () {
        		tc.userdata.result = [];
        		tc.userdata.eventChkList1 = [];
        	},
        	// 실행
        	run: function () {
        		var vdAdt = tapi.getVdAdaptor();
        		var taskName = vdAdt.getTaskFlowName();	// task 단계를 찾아서 실행
        		var rtn;

        		/////////////////////////////////////////////////////////////////////////////////////////
        		var v1 = vdAdt.getValue(0);

        		switch(taskName) {
        			case "LOAD" : {
        				rtn = tc.task['LOAD'].call(this, v1);
        				tc.userdata.result.push(rtn);
        				break;
        			}
        		}
        		/////////////////////////////////////////////////////////////////////////////////////////

        		return tc.userdata.result;
        	},

        	// 기대값 검사
        	check: function (resultValue, expectedValue) {
        		var chk = tc.checker['equal'].call(this, resultValue, expectedValue);
        		return chk;
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
        this.A_DatasetValidation_Dataset_load_onload = function(obj,e)
        {
        	// debug mode : log level에서 지정한 모든 메시지 제공
        	tapi.systemDebugOn();          // Runner를 debug mode로 실행
        	tapi.debugOn();                  // 응용을 debug mode로 실행
        	// Runner Load
        	tapi.init(tcInfo, this);

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
        };

        /***********************************************************************
        * 사용자 정의 함수 선언부
        ***********************************************************************/

        this._loadProc = function(type, coltype, ds)
        {
        	var loaddata = this.__get_data(type, coltype);
        	ds.clearData();
        	var colinfo = this.ds_load.getColumnInfo(0);
        	colinfo.set_type(coltype);

        	ds["load" + type](loaddata);
        };


        this._testRun = function(type)
        {
        	var arr_coltype = ["string","int","float","bigdecimal","date","datetime","time"];
        	var ret;
        	var errinfo = [];
        	for (var i = 0; i < arr_coltype.length; i++)
        	{
        		this._loadProc(type, arr_coltype[i], this.ds_in);
        		this._loadProc(type, arr_coltype[i], this.ds_load);

        		//trace("================"+arr_coltype[i]+"=================");
        		var ret = this._testProc(type, arr_coltype[i], this.ds_in, this.ds_load);
        		 if (!ret)
        		 {
        			errinfo.push(arr_coltype[i]);
        		 }

        	};

        	if (errinfo.length > 0)
        	{
        		//trace(errinfo);
        		return false;
        	}

        	return true;
        };

        this._testProc = function(type, coltype, in_ds, out_ds)
        {
        	this.ds_validation.set_filterstr("type=='" + coltype + "'");
        	var colname = "Col_" + coltype;

        	if (type == "BIN")	type = "SSV";

        	var rowcnt = in_ds.getRowCount();
        	var rowidx, in_v, out_v, expected_v;
        	var retarr = [];


        	for (var i = 0; i < rowcnt; i++)
        	{
        		in_v = in_ds.getColumn(i, "data");
        		rowidx = this.ds_validation.findRow("ColIn",in_v) ;
        		if (rowidx >= 0 || in_v === undefined)
        		{
        			if (in_v !== undefined)
        			{
        				expected_v = this.ds_validation.getColumn(rowidx, colname);
        				expected_v = nexacro._unQuoteStr(expected_v);
        			}
        			else
        				expected_v = undefined;

        			out_v = out_ds.getColumn(i,"data");

        			if (type == "SSV" || type == "CSV")
        			{
        				if (this._isExceptProc(in_v , type))
        				{
        					if (coltype == "int" || coltype == "float" || coltype == "bigdecimal")
        					{
        						expected_v = NaN;
        					}
        					else if (coltype == "date" || coltype == "datetime" || coltype == "time")
        						expected_v = "Invalid Date";
        				}

        			}



        			if (expected_v == "__m__" && (coltype == "date" || coltype == "datetime" || coltype == "time"))
        			{
        				return true;	//skip , javascript date rule에 따르는 값....
        			}

        			if (!nexacro._isNull(out_v) && (isNaN(out_v) || out_v) && out_v.toString)
        				out_v = out_v.toString();
        			if (!(expected_v == out_v) && !(isNaN(expected_v) && isNaN(out_v)))
        			{
        				//retarr.push({"in":in_v,"out":out_v,"expected":expected_v});
        				return false;
        			}
        		}

        	};

        	return true;
        };

        this.btn00_onclick = function(obj,e)
        {
        	var type = obj.text.substring(4);
        	this._testRun(type);
        };


        this.__get_data = function(type, coltype)
        {
        	var ret = "";
        	switch(type)
        	{
        		case "XML":
        			ret = this.__xmldata[coltype];
        		break;
        		case "SSV":
        			ret = this.__ssvdata[coltype];
        			ret = ret.replace(/\*/g,String.fromCharCode(30));
        			ret = ret.replace(/\#/g,String.fromCharCode(31));
        			ret = ret.replace(/\&/g,String.fromCharCode(3));
        			//ret = ret.replace(/null/g,String.fromCharCode(3));
        		break;
        		case "CSV":
        			ret = this.__csvdata[coltype];
        		break;
        		case "BIN":
        			ret = this.__bindata[coltype];
        		break;
        		default: break;
        	}

        	return ret;
        };

        this._isExceptProc = function (v, type)
        {
        	var ret = false;
        	switch(type)
        	{
        		case "SSV":
        			if (v == "null")
        				ret = true;
        			break;
        		case "CSV":
        			if (v == "null" || v == "undefined")
        				ret = true;
        			break;
        		default:
        			break;
        	};

        	return ret;

        };

        this.__xmldata = {};
        this.__csvdata = {};
        this.__ssvdata = {};
        this.__bindata = {};

        this.__xmldata["string"] = '<Dataset id="ds_string">';
        this.__xmldata["string"] += '	<ColumnInfo>';
        this.__xmldata["string"] += '		<Column id="data" type="STRING" size="256" />';
        this.__xmldata["string"] += '		<Column id="type" type="STRING" size="256" />';
        this.__xmldata["string"] += '	</ColumnInfo>';
        this.__xmldata["string"] += '	<Rows>';
        this.__xmldata["string"] += '		<Row>';
        this.__xmldata["string"] += '			<Col id="data">abcd</Col>';
        this.__xmldata["string"] += '		</Row>';
        this.__xmldata["string"] += '		<Row>';
        this.__xmldata["string"] += '			<Col id="data">this.Button00</Col>';
        this.__xmldata["string"] += '			<Col id="type">1</Col>';
        this.__xmldata["string"] += '		</Row>';
        this.__xmldata["string"] += '		<Row>';
        this.__xmldata["string"] += '			<Col id="data">1234</Col>';
        this.__xmldata["string"] += '			<Col id="type">1</Col>';
        this.__xmldata["string"] += '		</Row>';
        this.__xmldata["string"] += '		<Row>';
        this.__xmldata["string"] += '			<Col id="type">1</Col>';
        this.__xmldata["string"] += '		</Row>';
        this.__xmldata["string"] += '		<Row>';
        this.__xmldata["string"] += '			<Col id="type">1</Col>';
        this.__xmldata["string"] += '		</Row>';
        this.__xmldata["string"] += '		<Row>';
        this.__xmldata["string"] += '			<Col id="data">NaN</Col>';
        this.__xmldata["string"] += '			<Col id="type">1</Col>';
        this.__xmldata["string"] += '		</Row>';
        this.__xmldata["string"] += '		<Row>';
        this.__xmldata["string"] += '			<Col id="data">Infinity</Col>';
        this.__xmldata["string"] += '			<Col id="type">1</Col>';
        this.__xmldata["string"] += '		</Row>';
        this.__xmldata["string"] += '		<Row>';
        this.__xmldata["string"] += '			<Col id="data">-Infinity</Col>';
        this.__xmldata["string"] += '			<Col id="type">1</Col>';
        this.__xmldata["string"] += '		</Row>';
        this.__xmldata["string"] += '	</Rows>';
        this.__xmldata["string"] += '</Dataset>';

        this.__xmldata["int"] = '<Dataset id="ds_int">';
        this.__xmldata["int"] += '	<ColumnInfo>';
        this.__xmldata["int"] += '		<Column id="data" type="STRING" size="256" />';
        this.__xmldata["int"] += '		<Column id="type" type="STRING" size="256" />';
        this.__xmldata["int"] += '	</ColumnInfo>';
        this.__xmldata["int"] += '	<Rows>';
        this.__xmldata["int"] += '		<Row>';
        this.__xmldata["int"] += '			<Col id="data">abcd</Col>';
        this.__xmldata["int"] += '		</Row>';
        this.__xmldata["int"] += '		<Row>';
        this.__xmldata["int"] += '			<Col id="data">this.Button00</Col>';
        this.__xmldata["int"] += '			<Col id="type">1</Col>';
        this.__xmldata["int"] += '		</Row>';
        this.__xmldata["int"] += '		<Row>';
        this.__xmldata["int"] += '			<Col id="data">1234</Col>';
        this.__xmldata["int"] += '			<Col id="type">1</Col>';
        this.__xmldata["int"] += '		</Row>';
        this.__xmldata["int"] += '		<Row>';
        this.__xmldata["int"] += '			<Col id="data"></Col>';
        this.__xmldata["int"] += '			<Col id="type">1</Col>';
        this.__xmldata["int"] += '		</Row>';
        this.__xmldata["int"] += '		<Row>';
        this.__xmldata["int"] += '			<Col id="type">1</Col>';
        this.__xmldata["int"] += '		</Row>';
        this.__xmldata["int"] += '		<Row>';
        this.__xmldata["int"] += '			<Col id="data"/>';
        this.__xmldata["int"] += '			<Col id="type">1</Col>';
        this.__xmldata["int"] += '		</Row>';
        this.__xmldata["int"] += '		<Row>';
        this.__xmldata["int"] += '			<Col id="data">NaN</Col>';
        this.__xmldata["int"] += '			<Col id="type">1</Col>';
        this.__xmldata["int"] += '		</Row>';
        this.__xmldata["int"] += '		<Row>';
        this.__xmldata["int"] += '			<Col id="data">Infinity</Col>';
        this.__xmldata["int"] += '			<Col id="type">1</Col>';
        this.__xmldata["int"] += '		</Row>';
        this.__xmldata["int"] += '		<Row>';
        this.__xmldata["int"] += '			<Col id="data">-Infinity</Col>';
        this.__xmldata["int"] += '			<Col id="type">1</Col>';
        this.__xmldata["int"] += '		</Row>';
        this.__xmldata["int"] += '		<Row>';
        this.__xmldata["int"] += '			<Col id="data">1004</Col>';
        this.__xmldata["int"] += '			<Col id="type">1</Col>';
        this.__xmldata["int"] += '		</Row>';
        this.__xmldata["int"] += '		<Row>';
        this.__xmldata["int"] += '			<Col id="data">1004</Col>';
        this.__xmldata["int"] += '		</Row>';
        this.__xmldata["int"] += '		<Row>';
        this.__xmldata["int"] += '			<Col id="data">1.2E+4</Col>';
        this.__xmldata["int"] += '			<Col id="type">1</Col>';
        this.__xmldata["int"] += '		</Row>';
        this.__xmldata["int"] += '		<Row>';
        this.__xmldata["int"] += '			<Col id="data">1.2E+4</Col>';
        this.__xmldata["int"] += '		</Row>';
        this.__xmldata["int"] += '		<Row>';
        this.__xmldata["int"] += '			<Col id="data">-2147483649</Col>';
        this.__xmldata["int"] += '			<Col id="type">1</Col>';
        this.__xmldata["int"] += '		</Row>';
        this.__xmldata["int"] += '		<Row>';
        this.__xmldata["int"] += '			<Col id="data">2147483648</Col>';
        this.__xmldata["int"] += '			<Col id="type">1</Col>';
        this.__xmldata["int"] += '		</Row>';
        this.__xmldata["int"] += '		<Row>';
        this.__xmldata["int"] += '			<Col id="data">123abc</Col>';
        this.__xmldata["int"] += '		</Row>';
        this.__xmldata["int"] += '	</Rows>';
        this.__xmldata["int"] += '</Dataset>';

        this.__xmldata["float"] = '<Dataset id="ds_float">';
        this.__xmldata["float"] += '	<ColumnInfo>';
        this.__xmldata["float"] += '		<Column id="data" type="STRING" size="256" />';
        this.__xmldata["float"] += '		<Column id="type" type="STRING" size="256" />';
        this.__xmldata["float"] += '	</ColumnInfo>';
        this.__xmldata["float"] += '	<Rows>';
        this.__xmldata["float"] += '		<Row>';
        this.__xmldata["float"] += '			<Col id="data">abcd</Col>';
        this.__xmldata["float"] += '		</Row>';
        this.__xmldata["float"] += '		<Row>';
        this.__xmldata["float"] += '			<Col id="data">this.Button00</Col>';
        this.__xmldata["float"] += '			<Col id="type">1</Col>';
        this.__xmldata["float"] += '		</Row>';
        this.__xmldata["float"] += '		<Row>';
        this.__xmldata["float"] += '			<Col id="data">1234</Col>';
        this.__xmldata["float"] += '			<Col id="type">1</Col>';
        this.__xmldata["float"] += '		</Row>';
        this.__xmldata["float"] += '		<Row>';
        this.__xmldata["float"] += '			<Col id="data"></Col>';
        this.__xmldata["float"] += '			<Col id="type">1</Col>';
        this.__xmldata["float"] += '		</Row>';
        this.__xmldata["float"] += '		<Row>';
        this.__xmldata["float"] += '			<Col id="type">1</Col>';
        this.__xmldata["float"] += '		</Row>';
        this.__xmldata["float"] += '		<Row>';
        this.__xmldata["float"] += '			<Col id="type">1</Col>';
        this.__xmldata["float"] += '		</Row>';
        this.__xmldata["float"] += '		<Row>';
        this.__xmldata["float"] += '			<Col id="data">NaN</Col>';
        this.__xmldata["float"] += '			<Col id="type">1</Col>';
        this.__xmldata["float"] += '		</Row>';
        this.__xmldata["float"] += '		<Row>';
        this.__xmldata["float"] += '			<Col id="data">Infinity</Col>';
        this.__xmldata["float"] += '			<Col id="type">1</Col>';
        this.__xmldata["float"] += '		</Row>';
        this.__xmldata["float"] += '		<Row>';
        this.__xmldata["float"] += '			<Col id="data">-Infinity</Col>';
        this.__xmldata["float"] += '			<Col id="type">1</Col>';
        this.__xmldata["float"] += '		</Row>';
        this.__xmldata["float"] += '		<Row>';
        this.__xmldata["float"] += '			<Col id="data">123.456</Col>';
        this.__xmldata["float"] += '			<Col id="type">1</Col>';
        this.__xmldata["float"] += '		</Row>';
        this.__xmldata["float"] += '		<Row>';
        this.__xmldata["float"] += '			<Col id="data">123.456</Col>';
        this.__xmldata["float"] += '		</Row>';
        this.__xmldata["float"] += '		<Row>';
        this.__xmldata["float"] += '			<Col id="data">1.2E-3</Col>';
        this.__xmldata["float"] += '			<Col id="type">1</Col>';
        this.__xmldata["float"] += '		</Row>';
        this.__xmldata["float"] += '		<Row>';
        this.__xmldata["float"] += '			<Col id="data">1.2E-3</Col>';
        this.__xmldata["float"] += '		</Row>';
        this.__xmldata["float"] += '		<Row>';
        this.__xmldata["float"] += '			<Col id="data">-1.7E+309</Col>';
        this.__xmldata["float"] += '			<Col id="type">1</Col>';
        this.__xmldata["float"] += '		</Row>';
        this.__xmldata["float"] += '		<Row>';
        this.__xmldata["float"] += '			<Col id="data">1.7E+309</Col>';
        this.__xmldata["float"] += '			<Col id="type">1</Col>';
        this.__xmldata["float"] += '		</Row>';
        this.__xmldata["float"] += '		<Row>';
        this.__xmldata["float"] += '			<Col id="data">2.2E-324</Col>';
        this.__xmldata["float"] += '			<Col id="type">1</Col>';
        this.__xmldata["float"] += '		</Row>';
        this.__xmldata["float"] += '		<Row>';
        this.__xmldata["float"] += '			<Col id="data">123.4ab</Col>';
        this.__xmldata["float"] += '		</Row>';
        this.__xmldata["float"] += '	</Rows>';
        this.__xmldata["float"] += '</Dataset>';

        this.__xmldata["bigdecimal"] = '<Dataset id="ds_bigdecimal">';
        this.__xmldata["bigdecimal"] += '	<ColumnInfo>';
        this.__xmldata["bigdecimal"] += '		<Column id="data" type="STRING" size="256" />';
        this.__xmldata["bigdecimal"] += '		<Column id="type" type="STRING" size="256" />';
        this.__xmldata["bigdecimal"] += '	</ColumnInfo>';
        this.__xmldata["bigdecimal"] += '	<Rows>';
        this.__xmldata["bigdecimal"] += '		<Row>';
        this.__xmldata["bigdecimal"] += '			<Col id="data">abcd</Col>';
        this.__xmldata["bigdecimal"] += '		</Row>';
        this.__xmldata["bigdecimal"] += '		<Row>';
        this.__xmldata["bigdecimal"] += '			<Col id="data">this.Button00</Col>';
        this.__xmldata["bigdecimal"] += '			<Col id="type">1</Col>';
        this.__xmldata["bigdecimal"] += '		</Row>';
        this.__xmldata["bigdecimal"] += '		<Row>';
        this.__xmldata["bigdecimal"] += '			<Col id="data">1234</Col>';
        this.__xmldata["bigdecimal"] += '			<Col id="type">1</Col>';
        this.__xmldata["bigdecimal"] += '		</Row>';
        this.__xmldata["bigdecimal"] += '		<Row>';
        this.__xmldata["bigdecimal"] += '			<Col id="data"></Col>';
        this.__xmldata["bigdecimal"] += '			<Col id="type">1</Col>';
        this.__xmldata["bigdecimal"] += '		</Row>';
        this.__xmldata["bigdecimal"] += '		<Row>';
        this.__xmldata["bigdecimal"] += '			<Col id="type">1</Col>';
        this.__xmldata["bigdecimal"] += '		</Row>';
        this.__xmldata["bigdecimal"] += '		<Row>';
        this.__xmldata["bigdecimal"] += '			<Col id="type">1</Col>';
        this.__xmldata["bigdecimal"] += '		</Row>';
        this.__xmldata["bigdecimal"] += '		<Row>';
        this.__xmldata["bigdecimal"] += '			<Col id="data">NaN</Col>';
        this.__xmldata["bigdecimal"] += '			<Col id="type">1</Col>';
        this.__xmldata["bigdecimal"] += '		</Row>';
        this.__xmldata["bigdecimal"] += '		<Row>';
        this.__xmldata["bigdecimal"] += '			<Col id="data">Infinity</Col>';
        this.__xmldata["bigdecimal"] += '			<Col id="type">1</Col>';
        this.__xmldata["bigdecimal"] += '		</Row>';
        this.__xmldata["bigdecimal"] += '		<Row>';
        this.__xmldata["bigdecimal"] += '			<Col id="data">-Infinity</Col>';
        this.__xmldata["bigdecimal"] += '			<Col id="type">1</Col>';
        this.__xmldata["bigdecimal"] += '		</Row>';
        this.__xmldata["bigdecimal"] += '		<Row>';
        this.__xmldata["bigdecimal"] += '			<Col id="data">123.456</Col>';
        this.__xmldata["bigdecimal"] += '			<Col id="type">1</Col>';
        this.__xmldata["bigdecimal"] += '		</Row>';
        this.__xmldata["bigdecimal"] += '		<Row>';
        this.__xmldata["bigdecimal"] += '			<Col id="data">123.456</Col>';
        this.__xmldata["bigdecimal"] += '		</Row>';
        this.__xmldata["bigdecimal"] += '		<Row>';
        this.__xmldata["bigdecimal"] += '			<Col id="data">1.2E-3</Col>';
        this.__xmldata["bigdecimal"] += '			<Col id="type">1</Col>';
        this.__xmldata["bigdecimal"] += '		</Row>';
        this.__xmldata["bigdecimal"] += '		<Row>';
        this.__xmldata["bigdecimal"] += '			<Col id="data">1.2E-3</Col>';
        this.__xmldata["bigdecimal"] += '		</Row>';
        this.__xmldata["bigdecimal"] += '		<Row>';
        this.__xmldata["bigdecimal"] += '			<Col id="data">-1.7E+309</Col>';
        this.__xmldata["bigdecimal"] += '			<Col id="type">1</Col>';
        this.__xmldata["bigdecimal"] += '		</Row>';
        this.__xmldata["bigdecimal"] += '		<Row>';
        this.__xmldata["bigdecimal"] += '			<Col id="data">1.7E+309</Col>';
        this.__xmldata["bigdecimal"] += '			<Col id="type">1</Col>';
        this.__xmldata["bigdecimal"] += '		</Row>';
        this.__xmldata["bigdecimal"] += '		<Row>';
        this.__xmldata["bigdecimal"] += '			<Col id="data">2.2E-324</Col>';
        this.__xmldata["bigdecimal"] += '			<Col id="type">1</Col>';
        this.__xmldata["bigdecimal"] += '		</Row>';
        this.__xmldata["bigdecimal"] += '		<Row>';
        this.__xmldata["bigdecimal"] += '			<Col id="data">123.4ab</Col>';
        this.__xmldata["bigdecimal"] += '		</Row>';
        this.__xmldata["bigdecimal"] += '	</Rows>';
        this.__xmldata["bigdecimal"] += '</Dataset>';

        this.__xmldata["date"] = '<Dataset id="ds_date">';
        this.__xmldata["date"] += '	<ColumnInfo>';
        this.__xmldata["date"] += '		<Column id="data" type="STRING" size="256" />';
        this.__xmldata["date"] += '		<Column id="type" type="STRING" size="256" />';
        this.__xmldata["date"] += '	</ColumnInfo>';
        this.__xmldata["date"] += '	<Rows>';
        this.__xmldata["date"] += '		<Row>';
        this.__xmldata["date"] += '			<Col id="data">20180327</Col>';
        this.__xmldata["date"] += '		</Row>';
        this.__xmldata["date"] += '		<Row>';
        this.__xmldata["date"] += '			<Col id="data">20180327</Col>';
        this.__xmldata["date"] += '			<Col id="type">10</Col>';
        this.__xmldata["date"] += '		</Row>';
        this.__xmldata["date"] += '		<Row>';
        this.__xmldata["date"] += '			<Col id="data">20180327</Col>';
        this.__xmldata["date"] += '			<Col id="type">11</Col>';
        this.__xmldata["date"] += '		</Row>';
        this.__xmldata["date"] += '		<Row>';
        this.__xmldata["date"] += '			<Col id="data">this.Button00</Col>';
        this.__xmldata["date"] += '			<Col id="type">1</Col>';
        this.__xmldata["date"] += '		</Row>';
        this.__xmldata["date"] += '		<Row>';
        this.__xmldata["date"] += '			<Col id="data">20180327</Col>';
        this.__xmldata["date"] += '			<Col id="type">1</Col>';
        this.__xmldata["date"] += '		</Row>';
        this.__xmldata["date"] += '		<Row>';
        this.__xmldata["date"] += '			<Col id="data"></Col>';
        this.__xmldata["date"] += '			<Col id="type">1</Col>';
        this.__xmldata["date"] += '		</Row>';
        this.__xmldata["date"] += '		<Row>';
        this.__xmldata["date"] += '			<Col id="type">1</Col>';
        this.__xmldata["date"] += '		</Row>';
        this.__xmldata["date"] += '		<Row>';
        this.__xmldata["date"] += '			<Col id="type">1</Col>';
        this.__xmldata["date"] += '		</Row>';
        this.__xmldata["date"] += '		<Row>';
        this.__xmldata["date"] += '			<Col id="data">NaN</Col>';
        this.__xmldata["date"] += '			<Col id="type">1</Col>';
        this.__xmldata["date"] += '		</Row>';
        this.__xmldata["date"] += '		<Row>';
        this.__xmldata["date"] += '			<Col id="data">Infinity</Col>';
        this.__xmldata["date"] += '			<Col id="type">1</Col>';
        this.__xmldata["date"] += '		</Row>';
        this.__xmldata["date"] += '		<Row>';
        this.__xmldata["date"] += '			<Col id="data">-Infinity</Col>';
        this.__xmldata["date"] += '			<Col id="type">1</Col>';
        this.__xmldata["date"] += '		</Row>';
        this.__xmldata["date"] += '		<Row>';
        this.__xmldata["date"] += '			<Col id="data">20180327</Col>';
        this.__xmldata["date"] += '		</Row>';
        this.__xmldata["date"] += '		<Row>';
        this.__xmldata["date"] += '			<Col id="data">20180027</Col>';
        this.__xmldata["date"] += '			<Col id="type" />';
        this.__xmldata["date"] += '		</Row>';
        this.__xmldata["date"] += '		<Row>';
        this.__xmldata["date"] += '			<Col id="data">20181427</Col>';
        this.__xmldata["date"] += '		</Row>';
        this.__xmldata["date"] += '		<Row>';
        this.__xmldata["date"] += '			<Col id="data">20180300</Col>';
        this.__xmldata["date"] += '			<Col id="type" />';
        this.__xmldata["date"] += '		</Row>';
        this.__xmldata["date"] += '		<Row>';
        this.__xmldata["date"] += '			<Col id="data">20180362</Col>';
        this.__xmldata["date"] += '			<Col id="type" />';
        this.__xmldata["date"] += '		</Row>';
        this.__xmldata["date"] += '		<Row>';
        this.__xmldata["date"] += '			<Col id="data">170327</Col>';
        this.__xmldata["date"] += '			<Col id="type" />';
        this.__xmldata["date"] += '		</Row>';
        this.__xmldata["date"] += '		<Row>';
        this.__xmldata["date"] += '			<Col id="data">170027</Col>';
        this.__xmldata["date"] += '		</Row>';
        this.__xmldata["date"] += '		<Row>';
        this.__xmldata["date"] += '			<Col id="data">171427</Col>';
        this.__xmldata["date"] += '		</Row>';
        this.__xmldata["date"] += '		<Row>';
        this.__xmldata["date"] += '			<Col id="data">170300</Col>';
        this.__xmldata["date"] += '		</Row>';
        this.__xmldata["date"] += '		<Row>';
        this.__xmldata["date"] += '			<Col id="data">170362</Col>';
        this.__xmldata["date"] += '		</Row>';
        this.__xmldata["date"] += '		<Row>';
        this.__xmldata["date"] += '			<Col id="data">210327</Col>';
        this.__xmldata["date"] += '		</Row>';
        this.__xmldata["date"] += '		<Row>';
        this.__xmldata["date"] += '			<Col id="data">210027</Col>';
        this.__xmldata["date"] += '		</Row>';
        this.__xmldata["date"] += '		<Row>';
        this.__xmldata["date"] += '			<Col id="data">211427</Col>';
        this.__xmldata["date"] += '		</Row>';
        this.__xmldata["date"] += '		<Row>';
        this.__xmldata["date"] += '			<Col id="data">210300</Col>';
        this.__xmldata["date"] += '		</Row>';
        this.__xmldata["date"] += '		<Row>';
        this.__xmldata["date"] += '			<Col id="data">210362</Col>';
        this.__xmldata["date"] += '		</Row>';
        this.__xmldata["date"] += '		<Row>';
        this.__xmldata["date"] += '			<Col id="data">18032</Col>';
        this.__xmldata["date"] += '		</Row>';
        this.__xmldata["date"] += '		<Row>';
        this.__xmldata["date"] += '			<Col id="data">180327</Col>';
        this.__xmldata["date"] += '		</Row>';
        this.__xmldata["date"] += '		<Row>';
        this.__xmldata["date"] += '			<Col id="data">2018037</Col>';
        this.__xmldata["date"] += '		</Row>';
        this.__xmldata["date"] += '		<Row>';
        this.__xmldata["date"] += '			<Col id="data">111111327</Col>';
        this.__xmldata["date"] += '		</Row>';
        this.__xmldata["date"] += '		<Row>';
        this.__xmldata["date"] += '			<Col id="data">a</Col>';
        this.__xmldata["date"] += '		</Row>';
        this.__xmldata["date"] += '		<Row>';
        this.__xmldata["date"] += '			<Col id="data">9</Col>';
        this.__xmldata["date"] += '		</Row>';
        this.__xmldata["date"] += '		<Row>';
        this.__xmldata["date"] += '			<Col id="data">09</Col>';
        this.__xmldata["date"] += '		</Row>';
        this.__xmldata["date"] += '		<Row>';
        this.__xmldata["date"] += '			<Col id="data">99</Col>';
        this.__xmldata["date"] += '		</Row>';
        this.__xmldata["date"] += '		<Row>';
        this.__xmldata["date"] += '			<Col id="data">2018</Col>';
        this.__xmldata["date"] += '		</Row>';
        this.__xmldata["date"] += '		<Row>';
        this.__xmldata["date"] += '			<Col id="data">201a0327</Col>';
        this.__xmldata["date"] += '		</Row>';
        this.__xmldata["date"] += '	</Rows>';
        this.__xmldata["date"] += '</Dataset>';

        this.__xmldata["datetime"] = '<Dataset id="ds_datetime">';
        this.__xmldata["datetime"] += '	<ColumnInfo>';
        this.__xmldata["datetime"] += '		<Column id="data" type="STRING" size="256" />';
        this.__xmldata["datetime"] += '		<Column id="type" type="STRING" size="256" />';
        this.__xmldata["datetime"] += '	</ColumnInfo>';
        this.__xmldata["datetime"] += '	<Rows>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">20180327</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">20180327</Col>';
        this.__xmldata["datetime"] += '			<Col id="type">10</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">20180327</Col>';
        this.__xmldata["datetime"] += '			<Col id="type">11</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">this.Button00</Col>';
        this.__xmldata["datetime"] += '			<Col id="type">1</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">20180327041520800</Col>';
        this.__xmldata["datetime"] += '			<Col id="type">1</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data"></Col>';
        this.__xmldata["datetime"] += '			<Col id="type">1</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="type">1</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="type">1</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">NaN</Col>';
        this.__xmldata["datetime"] += '			<Col id="type">1</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">Infinity</Col>';
        this.__xmldata["datetime"] += '			<Col id="type">1</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">-Infinity</Col>';
        this.__xmldata["datetime"] += '			<Col id="type">1</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">20180327041520888</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">20180027041520888</Col>';
        this.__xmldata["datetime"] += '			<Col id="type" />';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">20181427041520888</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">20180300041520888</Col>';
        this.__xmldata["datetime"] += '			<Col id="type" />';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">20180362041520888</Col>';
        this.__xmldata["datetime"] += '			<Col id="type" />';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">20180327481520888</Col>';
        this.__xmldata["datetime"] += '			<Col id="type" />';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">20180327046220888</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">20180327041562888</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">170327041520888</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">170027041520888</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">171427041520888</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">170300041520888</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">170362041520888</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">170327481520888</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">170327046220888</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">170327041562888</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">210327041520888</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">210027041520888</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">211427041520888</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">210300041520888</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">210362041520888</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">210327481520888</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">210327046220888</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">210327041562888</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">20180327041520</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">20180027041520</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">20181427041520</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">20180300041520</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">20180362041520</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">20180327481520</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">20180327046220</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">20180327041562</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">170327041520</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">170027041520</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">171427041520</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">170300041520</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">170362041520</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">170327481520</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">170327046220</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">170327041562</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">210327041520</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">210027041520</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">211427041520</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">210300041520</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">210362041520</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">210327481520</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">210327046220</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">210327041562</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">2018032704</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">180327041520</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">1803270415208</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">180327041520888</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">201803270415208899</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">a</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">9</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">09</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">99</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">2018</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '		<Row>';
        this.__xmldata["datetime"] += '			<Col id="data">2018032704a520800</Col>';
        this.__xmldata["datetime"] += '		</Row>';
        this.__xmldata["datetime"] += '	</Rows>';
        this.__xmldata["datetime"] += '</Dataset>';

        this.__xmldata["time"] = '<Dataset id="ds_time">';
        this.__xmldata["time"] += '	<ColumnInfo>';
        this.__xmldata["time"] += '		<Column id="data" type="STRING" size="256" />';
        this.__xmldata["time"] += '		<Column id="type" type="STRING" size="256" />';
        this.__xmldata["time"] += '	</ColumnInfo>';
        this.__xmldata["time"] += '	<Rows>';
        this.__xmldata["time"] += '		<Row>';
        this.__xmldata["time"] += '			<Col id="data">20180327</Col>';
        this.__xmldata["time"] += '		</Row>';
        this.__xmldata["time"] += '		<Row>';
        this.__xmldata["time"] += '			<Col id="data">20180327</Col>';
        this.__xmldata["time"] += '			<Col id="type">10</Col>';
        this.__xmldata["time"] += '		</Row>';
        this.__xmldata["time"] += '		<Row>';
        this.__xmldata["time"] += '			<Col id="data">20180327</Col>';
        this.__xmldata["time"] += '			<Col id="type">11</Col>';
        this.__xmldata["time"] += '		</Row>';
        this.__xmldata["time"] += '		<Row>';
        this.__xmldata["time"] += '			<Col id="data">this.Button00</Col>';
        this.__xmldata["time"] += '			<Col id="type">1</Col>';
        this.__xmldata["time"] += '		</Row>';
        this.__xmldata["time"] += '		<Row>';
        this.__xmldata["time"] += '			<Col id="data">141520800</Col>';
        this.__xmldata["time"] += '			<Col id="type">1</Col>';
        this.__xmldata["time"] += '		</Row>';
        this.__xmldata["time"] += '		<Row>';
        this.__xmldata["time"] += '			<Col id="data"></Col>';
        this.__xmldata["time"] += '			<Col id="type">1</Col>';
        this.__xmldata["time"] += '		</Row>';
        this.__xmldata["time"] += '		<Row>';
        this.__xmldata["time"] += '			<Col id="type">1</Col>';
        this.__xmldata["time"] += '		</Row>';
        this.__xmldata["time"] += '		<Row>';
        this.__xmldata["time"] += '			<Col id="type">1</Col>';
        this.__xmldata["time"] += '		</Row>';
        this.__xmldata["time"] += '		<Row>';
        this.__xmldata["time"] += '			<Col id="data">NaN</Col>';
        this.__xmldata["time"] += '			<Col id="type">1</Col>';
        this.__xmldata["time"] += '		</Row>';
        this.__xmldata["time"] += '		<Row>';
        this.__xmldata["time"] += '			<Col id="data">Infinity</Col>';
        this.__xmldata["time"] += '			<Col id="type">1</Col>';
        this.__xmldata["time"] += '		</Row>';
        this.__xmldata["time"] += '		<Row>';
        this.__xmldata["time"] += '			<Col id="data">-Infinity</Col>';
        this.__xmldata["time"] += '			<Col id="type">1</Col>';
        this.__xmldata["time"] += '		</Row>';
        this.__xmldata["time"] += '		<Row>';
        this.__xmldata["time"] += '			<Col id="data">041520888</Col>';
        this.__xmldata["time"] += '		</Row>';
        this.__xmldata["time"] += '		<Row>';
        this.__xmldata["time"] += '			<Col id="data">481520888</Col>';
        this.__xmldata["time"] += '			<Col id="type" />';
        this.__xmldata["time"] += '		</Row>';
        this.__xmldata["time"] += '		<Row>';
        this.__xmldata["time"] += '			<Col id="data">048820888</Col>';
        this.__xmldata["time"] += '		</Row>';
        this.__xmldata["time"] += '		<Row>';
        this.__xmldata["time"] += '			<Col id="data">041588888</Col>';
        this.__xmldata["time"] += '			<Col id="type" />';
        this.__xmldata["time"] += '		</Row>';
        this.__xmldata["time"] += '		<Row>';
        this.__xmldata["time"] += '			<Col id="data">041520</Col>';
        this.__xmldata["time"] += '			<Col id="type" />';
        this.__xmldata["time"] += '		</Row>';
        this.__xmldata["time"] += '		<Row>';
        this.__xmldata["time"] += '			<Col id="data">481520</Col>';
        this.__xmldata["time"] += '			<Col id="type" />';
        this.__xmldata["time"] += '		</Row>';
        this.__xmldata["time"] += '		<Row>';
        this.__xmldata["time"] += '			<Col id="data">048820</Col>';
        this.__xmldata["time"] += '		</Row>';
        this.__xmldata["time"] += '		<Row>';
        this.__xmldata["time"] += '			<Col id="data">041588</Col>';
        this.__xmldata["time"] += '		</Row>';
        this.__xmldata["time"] += '		<Row>';
        this.__xmldata["time"] += '			<Col id="data">1415208888</Col>';
        this.__xmldata["time"] += '		</Row>';
        this.__xmldata["time"] += '		<Row>';
        this.__xmldata["time"] += '			<Col id="data">04152</Col>';
        this.__xmldata["time"] += '		</Row>';
        this.__xmldata["time"] += '		<Row>';
        this.__xmldata["time"] += '			<Col id="data">a</Col>';
        this.__xmldata["time"] += '		</Row>';
        this.__xmldata["time"] += '		<Row>';
        this.__xmldata["time"] += '			<Col id="data">9</Col>';
        this.__xmldata["time"] += '		</Row>';
        this.__xmldata["time"] += '		<Row>';
        this.__xmldata["time"] += '			<Col id="data">09</Col>';
        this.__xmldata["time"] += '		</Row>';
        this.__xmldata["time"] += '		<Row>';
        this.__xmldata["time"] += '			<Col id="data">99</Col>';
        this.__xmldata["time"] += '		</Row>';
        this.__xmldata["time"] += '		<Row>';
        this.__xmldata["time"] += '			<Col id="data">4a1520888</Col>';
        this.__xmldata["time"] += '		</Row>';
        this.__xmldata["time"] += '	</Rows>';
        this.__xmldata["time"] += '</Dataset>';

        this.__csvdata["string"] = "Dataset:ds_string" + "\n";
        this.__csvdata["string"] += "data:STRING(256),type:STRING(256)" + "\n";
        this.__csvdata["string"] += "abcd," + "\n";
        this.__csvdata["string"] += "this.Button00,1" + "\n";
        this.__csvdata["string"] += "1234,1" + "\n";
        this.__csvdata["string"] += "null,1" + "\n";
        this.__csvdata["string"] += "undefined,1" + "\n";
        this.__csvdata["string"] += "NaN,1" + "\n";
        this.__csvdata["string"] += "Infinity,1" + "\n";
        this.__csvdata["string"] += "-Infinity,1";

        this.__csvdata["int"] = "Dataset:ds_int"+"\n";;
        this.__csvdata["int"] += "data:STRING(256),type:STRING(256)" + "\n";
        this.__csvdata["int"] += "abcd,"+"\n";
        this.__csvdata["int"] += "this.Button00,1"+"\n";
        this.__csvdata["int"] += "1234,1"+"\n";
        this.__csvdata["int"] += ",1"+"\n";
        this.__csvdata["int"] += "null,1"+"\n";
        this.__csvdata["int"] += "undefined,1"+"\n";
        this.__csvdata["int"] += "NaN,1"+"\n";
        this.__csvdata["int"] += "Infinity,1"+"\n";
        this.__csvdata["int"] += "-Infinity,1"+"\n";
        this.__csvdata["int"] += "1004,1"+"\n";
        this.__csvdata["int"] += "1004,"+"\n";
        this.__csvdata["int"] += "1.2E+4,1"+"\n";
        this.__csvdata["int"] += "1.2E+4,"+"\n";
        this.__csvdata["int"] += "-2147483649,1"+"\n";
        this.__csvdata["int"] += "2147483648,1"+"\n";
        this.__csvdata["int"] += "123abc,";

        this.__csvdata["float"] = "Dataset:ds_float"+"\n";
        this.__csvdata["float"] += "data:STRING(256),type:STRING(256)"+"\n";
        this.__csvdata["float"] += "abcd,"+"\n";
        this.__csvdata["float"] += "this.Button00,1"+"\n";
        this.__csvdata["float"] += "1234,1"+"\n";
        this.__csvdata["float"] += ",1"+"\n";
        this.__csvdata["float"] += "null,1"+"\n";
        this.__csvdata["float"] += "undefined,1"+"\n";
        this.__csvdata["float"] += "NaN,1"+"\n";
        this.__csvdata["float"] += "Infinity,1"+"\n";
        this.__csvdata["float"] += "-Infinity,1"+"\n";
        this.__csvdata["float"] += "123.456,1"+"\n";
        this.__csvdata["float"] += "123.456,"+"\n";
        this.__csvdata["float"] += "1.2E-3,1"+"\n";
        this.__csvdata["float"] += "1.2E-3,"+"\n";
        this.__csvdata["float"] += "-1.7E+309,1"+"\n";
        this.__csvdata["float"] += "1.7E+309,1"+"\n";
        this.__csvdata["float"] += "2.2E-324,1"+"\n";
        this.__csvdata["float"] += "123.4ab,"+"\n";
        this.__csvdata["float"] += ""+"\n";
        this.__csvdata["float"] += ""+"\n";
        this.__csvdata["float"] += "Dataset:ds_bigdecimal"+"\n";
        this.__csvdata["float"] += "data:STRING(256),type:STRING(256)"+"\n";
        this.__csvdata["float"] += "abcd,"+"\n";
        this.__csvdata["float"] += "this.Button00,1"+"\n";
        this.__csvdata["float"] += "1234,1"+"\n";
        this.__csvdata["float"] += ",1"+"\n";
        this.__csvdata["float"] += ",1"+"\n";
        this.__csvdata["float"] += ",1"+"\n";
        this.__csvdata["float"] += "NaN,1"+"\n";
        this.__csvdata["float"] += "Infinity,1"+"\n";
        this.__csvdata["float"] += "-Infinity,1"+"\n";
        this.__csvdata["float"] += "123.456,1"+"\n";
        this.__csvdata["float"] += "123.456,"+"\n";
        this.__csvdata["float"] += "1.2E-3,1"+"\n";
        this.__csvdata["float"] += "1.2E-3,"+"\n";
        this.__csvdata["float"] += "-1.7E+309,1"+"\n";
        this.__csvdata["float"] += "1.7E+309,1"+"\n";
        this.__csvdata["float"] += "2.2E-324,1"+"\n";
        this.__csvdata["float"] += "123.4ab,";

        this.__csvdata["date"] = "Dataset:ds_date"+"\n";
        this.__csvdata["date"] += "data:STRING(256),type:STRING(256)"+"\n";
        this.__csvdata["date"] += "20180327,"+"\n";
        this.__csvdata["date"] += "20180327,10"+"\n";
        this.__csvdata["date"] += "20180327,11"+"\n";
        this.__csvdata["date"] += "this.Button00,1"+"\n";
        this.__csvdata["date"] += "20180327,1"+"\n";
        this.__csvdata["date"] += ",1"+"\n";
        this.__csvdata["date"] += "null,1"+"\n";
        this.__csvdata["date"] += "undefined,1"+"\n";
        this.__csvdata["date"] += "NaN,1"+"\n";
        this.__csvdata["date"] += "Infinity,1"+"\n";
        this.__csvdata["date"] += "-Infinity,1"+"\n";
        this.__csvdata["date"] += "20180327,"+"\n";
        this.__csvdata["date"] += "20180027,"+"\n";
        this.__csvdata["date"] += "20181427,"+"\n";
        this.__csvdata["date"] += "20180300,"+"\n";
        this.__csvdata["date"] += "20180362,"+"\n";
        this.__csvdata["date"] += "170327,"+"\n";
        this.__csvdata["date"] += "170027,"+"\n";
        this.__csvdata["date"] += "171427,"+"\n";
        this.__csvdata["date"] += "170300,"+"\n";
        this.__csvdata["date"] += "170362,"+"\n";
        this.__csvdata["date"] += "210327,"+"\n";
        this.__csvdata["date"] += "210027,"+"\n";
        this.__csvdata["date"] += "211427,"+"\n";
        this.__csvdata["date"] += "210300,"+"\n";
        this.__csvdata["date"] += "210362,"+"\n";
        this.__csvdata["date"] += "18032,"+"\n";
        this.__csvdata["date"] += "180327,"+"\n";
        this.__csvdata["date"] += "2018037,"+"\n";
        this.__csvdata["date"] += "111111327,"+"\n";
        this.__csvdata["date"] += "a,"+"\n";
        this.__csvdata["date"] += "9,"+"\n";
        this.__csvdata["date"] += "09,"+"\n";
        this.__csvdata["date"] += "99,"+"\n";
        this.__csvdata["date"] += "2018,"+"\n";
        this.__csvdata["date"] += "201a0327,";

        this.__csvdata["datetime"] = "Dataset:ds_datetime"+"\n";
        this.__csvdata["datetime"] += "data:STRING(256),type:STRING(256)"+"\n";
        this.__csvdata["datetime"] += "20180327,"+"\n";
        this.__csvdata["datetime"] += "20180327,10"+"\n";
        this.__csvdata["datetime"] += "20180327,11"+"\n";
        this.__csvdata["datetime"] += "this.Button00,1"+"\n";
        this.__csvdata["datetime"] += "20180327041520800,1"+"\n";
        this.__csvdata["datetime"] += ",1"+"\n";
        this.__csvdata["datetime"] += "null,1"+"\n";
        this.__csvdata["datetime"] += "undefined,1"+"\n";
        this.__csvdata["datetime"] += "NaN,1"+"\n";
        this.__csvdata["datetime"] += "Infinity,1"+"\n";
        this.__csvdata["datetime"] += "-Infinity,1"+"\n";
        this.__csvdata["datetime"] += "20180327041520888,"+"\n";
        this.__csvdata["datetime"] += "20180027041520888,"+"\n";
        this.__csvdata["datetime"] += "20181427041520888,"+"\n";
        this.__csvdata["datetime"] += "20180300041520888,"+"\n";
        this.__csvdata["datetime"] += "20180362041520888,"+"\n";
        this.__csvdata["datetime"] += "20180327481520888,"+"\n";
        this.__csvdata["datetime"] += "20180327046220888,"+"\n";
        this.__csvdata["datetime"] += "20180327041562888,"+"\n";
        this.__csvdata["datetime"] += "170327041520888,"+"\n";
        this.__csvdata["datetime"] += "170027041520888,"+"\n";
        this.__csvdata["datetime"] += "171427041520888,"+"\n";
        this.__csvdata["datetime"] += "170300041520888,"+"\n";
        this.__csvdata["datetime"] += "170362041520888,"+"\n";
        this.__csvdata["datetime"] += "170327481520888,"+"\n";
        this.__csvdata["datetime"] += "170327046220888,"+"\n";
        this.__csvdata["datetime"] += "170327041562888,"+"\n";
        this.__csvdata["datetime"] += "210327041520888,"+"\n";
        this.__csvdata["datetime"] += "210027041520888,"+"\n";
        this.__csvdata["datetime"] += "211427041520888,"+"\n";
        this.__csvdata["datetime"] += "210300041520888,"+"\n";
        this.__csvdata["datetime"] += "210362041520888,"+"\n";
        this.__csvdata["datetime"] += "210327481520888,"+"\n";
        this.__csvdata["datetime"] += "210327046220888,"+"\n";
        this.__csvdata["datetime"] += "210327041562888,"+"\n";
        this.__csvdata["datetime"] += "20180327041520,"+"\n";
        this.__csvdata["datetime"] += "20180027041520,"+"\n";
        this.__csvdata["datetime"] += "20181427041520,"+"\n";
        this.__csvdata["datetime"] += "20180300041520,"+"\n";
        this.__csvdata["datetime"] += "20180362041520,"+"\n";
        this.__csvdata["datetime"] += "20180327481520,"+"\n";
        this.__csvdata["datetime"] += "20180327046220,"+"\n";
        this.__csvdata["datetime"] += "20180327041562,"+"\n";
        this.__csvdata["datetime"] += "170327041520,"+"\n";
        this.__csvdata["datetime"] += "170027041520,"+"\n";
        this.__csvdata["datetime"] += "171427041520,"+"\n";
        this.__csvdata["datetime"] += "170300041520,"+"\n";
        this.__csvdata["datetime"] += "170362041520,"+"\n";
        this.__csvdata["datetime"] += "170327481520,"+"\n";
        this.__csvdata["datetime"] += "170327046220,"+"\n";
        this.__csvdata["datetime"] += "170327041562,"+"\n";
        this.__csvdata["datetime"] += "210327041520,"+"\n";
        this.__csvdata["datetime"] += "210027041520,"+"\n";
        this.__csvdata["datetime"] += "211427041520,"+"\n";
        this.__csvdata["datetime"] += "210300041520,"+"\n";
        this.__csvdata["datetime"] += "210362041520,"+"\n";
        this.__csvdata["datetime"] += "210327481520,"+"\n";
        this.__csvdata["datetime"] += "210327046220,"+"\n";
        this.__csvdata["datetime"] += "210327041562,"+"\n";
        this.__csvdata["datetime"] += "2018032704,"+"\n";
        this.__csvdata["datetime"] += "180327041520,"+"\n";
        this.__csvdata["datetime"] += "1803270415208,"+"\n";
        this.__csvdata["datetime"] += "180327041520888,"+"\n";
        this.__csvdata["datetime"] += "201803270415208899,"+"\n";
        this.__csvdata["datetime"] += "a,"+"\n";
        this.__csvdata["datetime"] += "9,"+"\n";
        this.__csvdata["datetime"] += "09,"+"\n";
        this.__csvdata["datetime"] += "99,"+"\n";
        this.__csvdata["datetime"] += "2018,"+"\n";
        this.__csvdata["datetime"] += "2018032704a520800,";

        this.__csvdata["time"] = "Dataset:ds_time"+"\n";
        this.__csvdata["time"] += "data:STRING(256),type:STRING(256)"+"\n";
        this.__csvdata["time"] += "20180327,"+"\n";
        this.__csvdata["time"] += "20180327,10"+"\n";
        this.__csvdata["time"] += "20180327,11"+"\n";
        this.__csvdata["time"] += "this.Button00,1"+"\n";
        this.__csvdata["time"] += "141520800,1"+"\n";
        this.__csvdata["time"] += ",1"+"\n";
        this.__csvdata["time"] += "null,1"+"\n";
        this.__csvdata["time"] += "undefined,1"+"\n";
        this.__csvdata["time"] += "NaN,1"+"\n";
        this.__csvdata["time"] += "Infinity,1"+"\n";
        this.__csvdata["time"] += "-Infinity,1"+"\n";
        this.__csvdata["time"] += "041520888,"+"\n";
        this.__csvdata["time"] += "481520888,"+"\n";
        this.__csvdata["time"] += "048820888,"+"\n";
        this.__csvdata["time"] += "041588888,"+"\n";
        this.__csvdata["time"] += "041520,"+"\n";
        this.__csvdata["time"] += "481520,"+"\n";
        this.__csvdata["time"] += "048820,"+"\n";
        this.__csvdata["time"] += "041588,"+"\n";
        this.__csvdata["time"] += "1415208888,"+"\n";
        this.__csvdata["time"] += "04152,"+"\n";
        this.__csvdata["time"] += "a,"+"\n";
        this.__csvdata["time"] += "9,"+"\n";
        this.__csvdata["time"] += "09,"+"\n";
        this.__csvdata["time"] += "99,"+"\n";
        this.__csvdata["time"] += "4a1520888,";


        this.__ssvdata["string"] = "Dataset:ds_string*_RowType_#data:STRING(256)#type:STRING(256)*N#abcd#&*N#this.Button00#1*N#1234#1*N#null#1*N#&#1*N#NaN#1*N#Infinity#1*N#-Infinity#1**";
        this.__ssvdata["int"] = "Dataset:ds_int*_RowType_#data:STRING(256)#type:STRING(256)*N#abcd#&*N#this.Button00#1*N#1234#1*N##1*N#null#1*N#&#1*N#NaN#1*N#Infinity#1*N#-Infinity#1*N#1004#1*N#1004#&*N#1.2E+4#1*N#1.2E+4#&*N#-2147483649#1*N#2147483648#1*N#123abc#&**";
        this.__ssvdata["float"] = "Dataset:ds_float*_RowType_#data:STRING(256)#type:STRING(256)*N#abcd#&*N#this.Button00#1*N#1234#1*N##1*N#null#1*N#&#1*N#NaN#1*N#Infinity#1*N#-Infinity#1*N#123.456#1*N#123.456#&*N#1.2E-3#1*N#1.2E-3#&*N#-1.7E+309#1*N#1.7E+309#1*N#2.2E-324#1*N#123.4ab#&**";
        this.__ssvdata["bigdecimal"] = "Dataset:ds_bigdecimal*_RowType_#data:STRING(256)#type:STRING(256)*N#abcd#&*N#this.Button00#1*N#1234#1*N##1*N#null#1*N#&#1*N#NaN#1*N#Infinity#1*N#-Infinity#1*N#123.456#1*N#123.456#&*N#1.2E-3#1*N#1.2E-3#&*N#-1.7E+309#1*N#1.7E+309#1*N#2.2E-324#1*N#123.4ab#&**";
        this.__ssvdata["date"] = "Dataset:ds_date*_RowType_#data:STRING(256)#type:STRING(256)*N#20180327#&*N#20180327#10*N#20180327#11*N#this.Button00#1*N#20180327#1*N##1*N#null#1*N#&#1*N#NaN#1*N#Infinity#1*N#-Infinity#1*N#20180327#&*N#20180027#*N#20181427#&*N#20180300#*N#20180362#*N#170327#*N#170027#&*N#171427#&*N#170300#&*N#170362#&*N#210327#&*N#210027#&*N#211427#&*N#210300#&*N#210362#&*N#18032#&*N#180327#&*N#2018037#&*N#111111327#&*N#a#&*N#9#&*N#09#&*N#99#&*N#2018#&*N#201a0327#&**";
        this.__ssvdata["datetime"] = "Dataset:ds_datetime*_RowType_#data:STRING(256)#type:STRING(256)*N#20180327#&*N#20180327#10*N#20180327#11*N#this.Button00#1*N#20180327041520800#1*N##1*N#null#1*N#&#1*N#NaN#1*N#Infinity#1*N#-Infinity#1*N#20180327041520888#&*N#20180027041520888#*N#20181427041520888#&*N#20180300041520888#*N#20180362041520888#*N#20180327481520888#*N#20180327046220888#&*N#20180327041562888#&*N#170327041520888#&*N#170027041520888#&*N#171427041520888#&*N#170300041520888#&*N#170362041520888#&*N#170327481520888#&*N#170327046220888#&*N#170327041562888#&*N#210327041520888#&*N#210027041520888#&*N#211427041520888#&*N#210300041520888#&*N#210362041520888#&*N#210327481520888#&*N#210327046220888#&*N#210327041562888#&*N#20180327041520#&*N#20180027041520#&*N#20181427041520#&*N#20180300041520#&*N#20180362041520#&*N#20180327481520#&*N#20180327046220#&*N#20180327041562#&*N#170327041520#&*N#170027041520#&*N#171427041520#&*N#170300041520#&*N#170362041520#&*N#170327481520#&*N#170327046220#&*N#170327041562#&*N#210327041520#&*N#210027041520#&*N#211427041520#&*N#210300041520#&*N#210362041520#&*N#210327481520#&*N#210327046220#&*N#210327041562#&*N#2018032704#&*N#180327041520#&*N#1803270415208#&*N#180327041520888#&*N#201803270415208899#&*N#a#&*N#9#&*N#09#&*N#99#&*N#2018#&*N#2018032704a520800#&**";
        this.__ssvdata["time"] = "Dataset:ds_time*_RowType_#data:STRING(256)#type:STRING(256)*N#20180327#&*N#20180327#10*N#20180327#11*N#this.Button00#1*N#141520800#1*N##1*N#null#1*N#&#1*N#NaN#1*N#Infinity#1*N#-Infinity#1*N#041520888#&*N#481520888#*N#048820888#&*N#041588888#*N#041520#*N#481520#*N#048820#&*N#041588#&*N#1415208888#&*N#04152#&*N#a#&*N#9#&*N#09#&*N#99#&*N#4a1520888#&**";


        this.__bindata["string"]     = "/gETiAAtAAlkc19zdHJpbmf+EBOIAAIAAAACAARkYXRhAAEBAAAAAAR0eXBlAAEBAAAAAA4AAQACABUABGFiY2QAAAAaAAEAAgAVAA10aGlzLkJ1dHRvbjAwABUAATEAEQABAAIAFQAEMTIzNAAVAAExABEAAQACABUABG51bGwAFQABMQALAAEAAgAAABUAATEAEAABAAIAFQADTmFOABUAATEAFQABAAIAFQAISW5maW5pdHkAFQABMQAWAAEAAgAVAAktSW5maW5pdHkAFQABMQAAAAA=";
        this.__bindata["int"]        = "/gETiAAqAAZkc19pbnT+EBOIAAIAAAACAARkYXRhAAEBAAAAAAR0eXBlAAEBAAAAABAAAQACABUABiJhYmNkIgAAABoAAQACABUADXRoaXMuQnV0dG9uMDAAFQABMQARAAEAAgAVAAQxMjM0ABUAATEADQABAAIAFQAAABUAATEAEQABAAIAFQAEbnVsbAAVAAExAAsAAQACAAAAFQABMQAQAAEAAgAVAANOYU4AFQABMQAVAAEAAgAVAAhJbmZpbml0eQAVAAExABYAAQACABUACS1JbmZpbml0eQAVAAExABEAAQACABUABDEwMDQAFQABMQAQAAEAAgAVAAYiMTAwNCIAAAATAAEAAgAVAAYxLjJFKzQAFQABMQASAAEAAgAVAAgiMS4yRSs0IgAAABgAAQACABUACy0yMTQ3NDgzNjQ5ABUAATEAFwABAAIAFQAKMjE0NzQ4MzY0OAAVAAExABIAAQACABUACCIxMjNhYmMiAAAAAAAA";
        this.__bindata["float"]      = "/gETiAAsAAhkc19mbG9hdP4QE4gAAgAAAAIABGRhdGEAAQEAAAAABHR5cGUAAQEAAAAAEAABAAIAFQAGImFiY2QiAAAAGgABAAIAFQANdGhpcy5CdXR0b24wMAAVAAExABEAAQACABUABDEyMzQAFQABMQANAAEAAgAVAAAAFQABMQARAAEAAgAVAARudWxsABUAATEACwABAAIAAAAVAAExABAAAQACABUAA05hTgAVAAExABUAAQACABUACEluZmluaXR5ABUAATEAFgABAAIAFQAJLUluZmluaXR5ABUAATEAFAABAAIAFQAHMTIzLjQ1NgAVAAExABMAAQACABUACSIxMjMuNDU2IgAAABMAAQACABUABjEuMkUtMwAVAAExABIAAQACABUACCIxLjJFLTMiAAAAFgABAAIAFQAJLTEuN0UrMzA5ABUAATEAFQABAAIAFQAIMS43RSszMDkAFQABMQAVAAEAAgAVAAgyLjJFLTMyNAAVAAExABMAAQACABUACSIxMjMuNGFiIgAAAAAAAA==";
        this.__bindata["bigdecimal"] = "/gETiAAxAA1kc19iaWdkZWNpbWFs/hATiAACAAAAAgAEZGF0YQABAQAAAAAEdHlwZQABAQAAAAAQAAEAAgAVAAYiYWJjZCIAAAAaAAEAAgAVAA10aGlzLkJ1dHRvbjAwABUAATEAEQABAAIAFQAEMTIzNAAVAAExAAwAAQACABUAAAAVAAAAEQABAAIAFQAEbnVsbAAVAAExAAsAAQACAAAAFQABMQAQAAEAAgAVAANOYU4AFQABMQAVAAEAAgAVAAhJbmZpbml0eQAVAAExABYAAQACABUACS1JbmZpbml0eQAVAAExABQAAQACABUABzEyMy40NTYAFQABMQATAAEAAgAVAAkiMTIzLjQ1NiIAAAATAAEAAgAVAAYxLjJFLTMAFQABMQASAAEAAgAVAAgiMS4yRS0zIgAAABYAAQACABUACS0xLjdFKzMwOQAVAAExABUAAQACABUACDEuN0UrMzA5ABUAATEAFQABAAIAFQAIMi4yRS0zMjQAFQABMQATAAEAAgAVAAkiMTIzLjRhYiIAAAAAAAA=";
        this.__bindata["date"]       = "/gETiAArAAdkc19kYXRl/hATiAACAAAAAgAEZGF0YQABAQAAAAAEdHlwZQABAQAAAAAUAAEAAgAVAAoiMjAxODAzMjciAAAAFgABAAIAFQAIMjAxODAzMjcAFQACMTAAFgABAAIAFQAIMjAxODAzMjcAFQACMTEAGgABAAIAFQANdGhpcy5CdXR0b24wMAAVAAExABUAAQACABUACDIwMTgwMzI3ABUAATEADQABAAIAFQAAABUAATEAEQABAAIAFQAEbnVsbAAVAAExAAsAAQACAAAAFQABMQAQAAEAAgAVAANOYU4AFQABMQAVAAEAAgAVAAhJbmZpbml0eQAVAAExABYAAQACABUACS1JbmZpbml0eQAVAAExABIAAQACABUACDIwMTgwMzI3AAAAFAABAAIAFQAIMjAxODAwMjcAFQAAABIAAQACABUACDIwMTgxNDI3AAAAFAABAAIAFQAIMjAxODAzMDAAFQAAABQAAQACABUACDIwMTgwMzYyABUAAAASAAEAAgAVAAYxNzAzMjcAFQAAABAAAQACABUABjE3MDAyNwAAABAAAQACABUABjE3MTQyNwAAABAAAQACABUABjE3MDMwMAAAABAAAQACABUABjE3MDM2MgAAABAAAQACABUABjIxMDMyNwAAABAAAQACABUABjIxMDAyNwAAABAAAQACABUABjIxMTQyNwAAABAAAQACABUABjIxMDMwMAAAABAAAQACABUABjIxMDM2MgAAAA8AAQACABUABTE4MDMyAAAAEAABAAIAFQAGMTgwMzI3AAAAEQABAAIAFQAHMjAxODAzNwAAABMAAQACABUACTExMTExMTMyNwAAAAsAAQACABUAAWEAAAALAAEAAgAVAAE5AAAADAABAAIAFQACMDkAAAAMAAEAAgAVAAI5OQAAAA4AAQACABUABDIwMTgAAAASAAEAAgAVAAgyMDFhMDMyNwAAAAAAAA==";
        this.__bindata["datetime"]   = "/gETiAAvAAtkc19kYXRldGltZf4QE4gAAgAAAAIABGRhdGEAAQEAAAAABHR5cGUAAQEAAAAAFAABAAIAFQAKIjIwMTgwMzI3IgAAABYAAQACABUACDIwMTgwMzI3ABUAAjEwABYAAQACABUACDIwMTgwMzI3ABUAAjExABoAAQACABUADXRoaXMuQnV0dG9uMDAAFQABMQAeAAEAAgAVABEyMDE4MDMyNzA0MTUyMDgwMAAVAAExAA0AAQACABUAAAAVAAExABEAAQACABUABG51bGwAFQABMQALAAEAAgAAABUAATEAEAABAAIAFQADTmFOABUAATEAFQABAAIAFQAISW5maW5pdHkAFQABMQAWAAEAAgAVAAktSW5maW5pdHkAFQABMQAbAAEAAgAVABEyMDE4MDMyNzA0MTUyMDg4OAAAAB0AAQACABUAETIwMTgwMDI3MDQxNTIwODg4ABUAAAAbAAEAAgAVABEyMDE4MTQyNzA0MTUyMDg4OAAAAB0AAQACABUAETIwMTgwMzAwMDQxNTIwODg4ABUAAAAdAAEAAgAVABEyMDE4MDM2MjA0MTUyMDg4OAAVAAAAHQABAAIAFQARMjAxODAzMjc0ODE1MjA4ODgAFQAAABsAAQACABUAETIwMTgwMzI3MDQ2MjIwODg4AAAAGwABAAIAFQARMjAxODAzMjcwNDE1NjI4ODgAAAAZAAEAAgAVAA8xNzAzMjcwNDE1MjA4ODgAAAAZAAEAAgAVAA8xNzAwMjcwNDE1MjA4ODgAAAAZAAEAAgAVAA8xNzE0MjcwNDE1MjA4ODgAAAAZAAEAAgAVAA8xNzAzMDAwNDE1MjA4ODgAAAAZAAEAAgAVAA8xNzAzNjIwNDE1MjA4ODgAAAAZAAEAAgAVAA8xNzAzMjc0ODE1MjA4ODgAAAAZAAEAAgAVAA8xNzAzMjcwNDYyMjA4ODgAAAAZAAEAAgAVAA8xNzAzMjcwNDE1NjI4ODgAAAAZAAEAAgAVAA8yMTAzMjcwNDE1MjA4ODgAAAAZAAEAAgAVAA8yMTAwMjcwNDE1MjA4ODgAAAAZAAEAAgAVAA8yMTE0MjcwNDE1MjA4ODgAAAAZAAEAAgAVAA8yMTAzMDAwNDE1MjA4ODgAAAAZAAEAAgAVAA8yMTAzNjIwNDE1MjA4ODgAAAAZAAEAAgAVAA8yMTAzMjc0ODE1MjA4ODgAAAAZAAEAAgAVAA8yMTAzMjcwNDYyMjA4ODgAAAAZAAEAAgAVAA8yMTAzMjcwNDE1NjI4ODgAAAAYAAEAAgAVAA4yMDE4MDMyNzA0MTUyMAAAABgAAQACABUADjIwMTgwMDI3MDQxNTIwAAAAGAABAAIAFQAOMjAxODE0MjcwNDE1MjAAAAAYAAEAAgAVAA4yMDE4MDMwMDA0MTUyMAAAABgAAQACABUADjIwMTgwMzYyMDQxNTIwAAAAGAABAAIAFQAOMjAxODAzMjc0ODE1MjAAAAAYAAEAAgAVAA4yMDE4MDMyNzA0NjIyMAAAABgAAQACABUADjIwMTgwMzI3MDQxNTYyAAAAFgABAAIAFQAMMTcwMzI3MDQxNTIwAAAAFgABAAIAFQAMMTcwMDI3MDQxNTIwAAAAFgABAAIAFQAMMTcxNDI3MDQxNTIwAAAAFgABAAIAFQAMMTcwMzAwMDQxNTIwAAAAFgABAAIAFQAMMTcwMzYyMDQxNTIwAAAAFgABAAIAFQAMMTcwMzI3NDgxNTIwAAAAFgABAAIAFQAMMTcwMzI3MDQ2MjIwAAAAFgABAAIAFQAMMTcwMzI3MDQxNTYyAAAAFgABAAIAFQAMMjEwMzI3MDQxNTIwAAAAFgABAAIAFQAMMjEwMDI3MDQxNTIwAAAAFgABAAIAFQAMMjExNDI3MDQxNTIwAAAAFgABAAIAFQAMMjEwMzAwMDQxNTIwAAAAFgABAAIAFQAMMjEwMzYyMDQxNTIwAAAAFgABAAIAFQAMMjEwMzI3NDgxNTIwAAAAFgABAAIAFQAMMjEwMzI3MDQ2MjIwAAAAFgABAAIAFQAMMjEwMzI3MDQxNTYyAAAAFAABAAIAFQAKMjAxODAzMjcwNAAAABYAAQACABUADDE4MDMyNzA0MTUyMAAAABcAAQACABUADTE4MDMyNzA0MTUyMDgAAAAZAAEAAgAVAA8xODAzMjcwNDE1MjA4ODgAAAAcAAEAAgAVABIyMDE4MDMyNzA0MTUyMDg4OTkAAAALAAEAAgAVAAFhAAAACwABAAIAFQABOQAAAAwAAQACABUAAjA5AAAADAABAAIAFQACOTkAAAAOAAEAAgAVAAQyMDE4AAAAGwABAAIAFQARMjAxODAzMjcwNGE1MjA4MDAAAAAAAAA=";
        this.__bindata["time"]       = "/gETiAArAAdkc190aW1l/hATiAACAAAAAgAEZGF0YQABAQAAAAAEdHlwZQABAQAAAAAUAAEAAgAVAAoiMjAxODAzMjciAAAAFgABAAIAFQAIMjAxODAzMjcAFQACMTAAFgABAAIAFQAIMjAxODAzMjcAFQACMTEAGgABAAIAFQANdGhpcy5CdXR0b24wMAAVAAExABYAAQACABUACTE0MTUyMDgwMAAVAAExAA0AAQACABUAAAAVAAExABEAAQACABUABG51bGwAFQABMQALAAEAAgAAABUAATEAEAABAAIAFQADTmFOABUAATEAFQABAAIAFQAISW5maW5pdHkAFQABMQAWAAEAAgAVAAktSW5maW5pdHkAFQABMQATAAEAAgAVAAkwNDE1MjA4ODgAAAAVAAEAAgAVAAk0ODE1MjA4ODgAFQAAABMAAQACABUACTA0ODgyMDg4OAAAABUAAQACABUACTA0MTU4ODg4OAAVAAAAEgABAAIAFQAGMDQxNTIwABUAAAASAAEAAgAVAAY0ODE1MjAAFQAAABAAAQACABUABjA0ODgyMAAAABAAAQACABUABjA0MTU4OAAAABQAAQACABUACjE0MTUyMDg4ODgAAAAPAAEAAgAVAAUwNDE1MgAAAAsAAQACABUAAWEAAAALAAEAAgAVAAE5AAAADAABAAIAFQACMDkAAAAMAAEAAgAVAAI5OQAAABMAAQACABUACTRhMTUyMDg4OAAAAAAAAA==";




        this.btn00_01_onclick = function(obj,e)
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


        this.A_DatasetValidation_Dataset_load_oninit = function(obj,e)
        {
        	trace("A_DatasetValidation_Dataset_load_oninit");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.A_DatasetValidation_Dataset_load_oninit,this);
            this.addEventHandler("onload",this.A_DatasetValidation_Dataset_load_onload,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn00_00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn00_00_00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn00_00_00_00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn00_01.addEventHandler("onclick",this.btn00_01_onclick,this);
        };

        this.loadIncludeScript("A_DatasetValidation_Dataset_load.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
