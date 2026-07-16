(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("datacolumn");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("Dataset00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "code","size" : "256","type" : "STRING"},{"id" : "data","size" : "256","type" : "STRING"}]},"Rows" : [{"code" : "1","data" : "test_01"},{"code" : "2","data" : "data_02"},{"code" : "3","data" : "data_03"},{"code" : "4","data" : "DATA_04"},{"code" : "5","data" : "new_05"},{"code" : "6","data" : "new_06"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Combo("Combo00","133","25","257","46",null,null,null,null,null,null,this);
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("Dataset00");
            obj.set_taborder("0");
            obj.set_type("filter");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Combo("Combo00_00","133","76","257","46",null,null,null,null,null,null,this);
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("Dataset00");
            obj.set_taborder("1");
            obj.set_type("filterlike");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Combo("Combo00_00_00","133","127","257","46",null,null,null,null,null,null,this);
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("Dataset00");
            obj.set_taborder("2");
            obj.set_type("caseifilter");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Combo("Combo00_00_00_00","133","229","257","46",null,null,null,null,null,null,this);
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("Dataset00");
            obj.set_taborder("4");
            obj.set_type("search");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Combo("Combo00_00_01","133","178","257","46",null,null,null,null,null,null,this);
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("Dataset00");
            obj.set_taborder("3");
            obj.set_type("caseifilterlike");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Combo("Combo00_00_00_00_00","133","280","257","46",null,null,null,null,null,null,this);
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("Dataset00");
            obj.set_taborder("5");
            obj.set_type("caseisearch");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","26","25","90","46",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("filter");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00_00","26","76","90","46",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("filterlike");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00_00_00","26","127","90","46",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("caseifilter");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00_00_00_00","26","178","90","46",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("caseifilterlike");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00_00_00_00_00","26","229","90","46",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("search");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00_00_00_00_00_00","26","280","90","46",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("caseisearch");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid00","466","49","214","180",null,null,null,null,null,null,this);
            obj.set_binddataset("Dataset00");
            obj.set_taborder("12");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"code\"/><Cell col=\"1\" text=\"data\"/></Band><Band id=\"body\"><Cell text=\"bind:code\"/><Cell col=\"1\" text=\"bind:data\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00_01","465","7","90","46",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Dataset00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00","590","270","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("2. filter = \"data\"");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00_00","450","270","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("1. filter = \"dat\"");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01","453","340","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button02","596","343","129","46",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Button02");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00","700","14","132","57",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("test");
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
        this.addIncludeScript("A_Dataset_P_filterstr_RP_93116_datacolumn.xfdl","lib::libCommon.xjs");
        this.addIncludeScript("A_Dataset_P_filterstr_RP_93116_datacolumn.xfdl","libevent::event.util.xjs");
        this.registerScript("A_Dataset_P_filterstr_RP_93116_datacolumn.xfdl", function(nexacro, system, trace, environment, application) {
        /***********************************************************************
        * 설명      : Dataset filterstr
        * 작성일    : 2021.10.21
        * 작성자    : 함경곤
        * 수정이력  :
        ***********************************************************************
        *     수정일     작성자   내용
        ***********************************************************************
        -   21.10.21     함경곤   신규 작성
        ***********************************************************************
        */

        this.executeIncludeScript("lib::libCommon.xjs"); /*include "lib::libCommon.xjs"*/;
        this.executeIncludeScript("libevent::event.util.xjs"); /*include "libevent::event.util.xjs"*/;
        var tapi = this.gfnLoadTestAPI(0.71);
        //this.dev_status = tapi.DEV_HOLD;
        /***********************************************************************
        * 01: Form 변수 선언부
        ***********************************************************************/
        this.dataset = this.Dataset00;
        /***********************************************************************
        * 02 : Test Case, Validator, Validation Case 선언부
        ***********************************************************************/
        var tc1  = {
        	description: "Dataset set_filterstr Property Test",
        	//-------------- beign user defined section
        	userdata : {
        		result : [],			//task 리턴값
        		eventChkList1 : [],		//cancolumnchange 확인용
        		eventChkList2 : [],		//oncolumnchanged 확인용
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

        tc1.task['filterstr'] = function(filterstr, varVal)
        {
        	var dataset= this.Dataset00;
        	dataset.set_filterstr(filterstr);
        };

        tc1.task['getCellText'] = function(nRow, varCol){
        	var result = [];

        	result.push(this.Grid00.getCellText(0, 1));
        	result.push(this.Grid00.getCellText(1, 1));

        	return result;
        }

        tc1.checker['equal'] = function(alResultValues, alExpectedValues) {
        	var chk = true;
        	var chk = tapi.checkEqual(this, alResultValues, alExpectedValues);

        	return chk;
        };

        tc1.validator ['tc1_vd1'] = {
        	description: "filterstr reg expression test",
        	autoTaskFlow : ["filterstr", "getCellText"],
        	vcinfo : {
        		argType : tapi.VCT_ARG_LIST,
        		args : [
        				//vc : nRow, varCol, varVal, ev : 리턴값, 이벤트정보, getCellText
        				{vc: [[tapi.VBT_MIN,"data.match(/^(dat)/)"],[tapi.VBT_NORMAL,"TEST01"]],   ev: ["data_02","data_03"]},
        				{vc: [[tapi.VBT_MIN,"data.match(/^(data)/)"],[tapi.VBT_NORMAL,"TEST02"]],   ev: ["data_02","data_03"]},
        				{vc: [[tapi.VBT_MIN,"data.match('data')"],[tapi.VBT_NORMAL,"TEST03"]],   ev: ["data_02","data_03"]},
        			]
        	},
        	prepare: function () {
        		tc1.userdata.result = [];
        		this.Dataset00.set_filterstr("");
        	},
        	run: function () {
        		var vdAdt = tapi.getVdAdaptor();
        		var taskName = vdAdt.getTaskFlowName();
        		var nRow = vdAdt.getValue(0);
        		var varCol = vdAdt.getValue(1);

        		switch(taskName) {
        		case "filterstr":
        			var rtn = tc1.task['filterstr'].call(this, nRow, varCol);
        			//tc1.userdata.result.push(rtn);
        			break;
        		case "getCellText":
        			var rtn = tc1.task['getCellText'].call(this, nRow, varCol);
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
        		tc1.userdata.eventChkList1 = [];
        		tc1.userdata.eventChkList2 = [];
        		tc1.userdata.result = [];
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
        this.datacolumn_onload = function(obj,e)
        {
        	   // debug mode : log level에서 지정한 모든 메시지 제공
           tapi.systemDebugOn();          // Runner를 debug mode로 실행
           tapi.debugOn();                  // 응용을 debug mode로 실행
           // Runner Load
           tapi.init(tcInfo, this);
          	//LogViewer 미팝업용
        	var runner = tapi.getRunner();

        	if (runner.isTestMode() == false){
         		var logger = new tapi.ConsoleLogger();
         		runner.setLogger(logger);
        	}
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


        /***********************************************************************
        * 07 : 사용자 정의 함수 선언부
        ***********************************************************************/
        this.Button00_onclick = function(obj,e)
        {
        	this.Dataset00.set_filterstr("data.match(/^(data)/)");
        };

        this.Button00_00_onclick = function(obj,e)
        {
        	this.Dataset00.set_filterstr("data.match(/^(dat)/)");
        };

        this.Button01_onclick = function(obj,e)
        {
        	this.Dataset00.set_filterstr("data.match('data')");
        };

        this.Button02_onclick = function(obj,e)
        {
        	this.Dataset00.set_filterstr("data.match(/^(data)/g)");
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.datacolumn_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button00_00.addEventHandler("onclick",this.Button00_00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
        };

        this.loadIncludeScript("A_Dataset_P_filterstr_RP_93116_datacolumn.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
