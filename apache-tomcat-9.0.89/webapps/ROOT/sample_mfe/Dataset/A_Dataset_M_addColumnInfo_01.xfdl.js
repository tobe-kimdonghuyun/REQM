(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TA_Dataset_M_addColumnInfo_01_v2");
            this.set_titletext("TA_Dataset_M_addColumnInfo_01_v2");
            this.getSetter("classname").set("23711_Buttoncssimage_01");
            this.getSetter("inheritanceid").set("");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(440,560);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("ds_data3", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents({"ColumnInfo" : {"ConstColumn" : [{"id" : "ConstA","size" : "30","type" : "STRING","value" : "a"},{"id" : "ConstB","size" : "30","type" : "STRING","value" : "b"},{"id" : "ConstC","size" : "30","type" : "STRING","value" : "c"}],"Column" : [{"id" : "colA","size" : "256","type" : "STRING"},{"id" : "colB","size" : "256","type" : "STRING"}]},"Rows" : [{"colA" : "1","colB" : "a"},{"colA" : "2","colB" : "b"},{"colA" : "3","colB" : "c"},{"colA" : "4","colB" : "d"},{"colA" : "5","colB" : "e"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Button("btn00","314","4","107","36",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Embedded Test");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static01","3","31","301","37",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_text("[Dataset_M_addColumnInfoInfo_48093_01]");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_Combo_menu","93","1","81","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("2");
            obj.set_text("◀Dataset");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("txt_result","6","307","298","125",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("3");
            obj.set_text("//");
            obj.set_value("//");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_clear","241","264","63","35",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("4");
            obj.set_text("clear");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_main","8","1","81","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("5");
            obj.set_text("◀◀Main");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_addColumnInfoInfo","112","264","119","37",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("6");
            obj.set_text("addColumnInfoInfo");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid00","5","61","295","99",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_data3");
            obj.set_formats("<Formats>\n  <Format id=\"default\">\n    <Columns>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n    </Columns>\n    <Rows>\n      <Row band=\"head\" size=\"24\"/>\n      <Row band=\"body\" size=\"24\"/>\n    </Rows>\n    <Band id=\"head\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"colA\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"colB\"/>\n      <Cell col=\"2\" disptype=\"normal\" text=\"ConstA\"/>\n      <Cell col=\"3\" disptype=\"normal\" text=\"ConstB\"/>\n      <Cell col=\"4\" disptype=\"normal\" text=\"ConstC\"/>\n    </Band>\n    <Band id=\"body\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"bind:colA\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"bind:colB\"/>\n      <Cell col=\"2\" disptype=\"normal\" text=\"bind:ConstA\"/>\n      <Cell col=\"3\" disptype=\"normal\" text=\"bind:ConstB\"/>\n      <Cell col=\"4\" disptype=\"normal\" text=\"bind:ConstC\"/>\n    </Band>\n  </Format>\n</Formats>\n");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("7");
            obj.getSetter("useinputpanel").set("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"colA\"/><Cell col=\"1\" disptype=\"normal\" text=\"colB\"/><Cell col=\"2\" disptype=\"normal\" text=\"ConstA\"/><Cell col=\"3\" disptype=\"normal\" text=\"ConstB\"/><Cell col=\"4\" disptype=\"normal\" text=\"ConstC\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:colA\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:colB\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:ConstA\"/><Cell col=\"3\" disptype=\"normal\" text=\"bind:ConstB\"/><Cell col=\"4\" disptype=\"normal\" text=\"bind:ConstC\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","10","171","58","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("8");
            obj.set_text("ColID");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static02","10","203","58","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("9");
            obj.set_text("ColType");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static03","10","235","58","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("10");
            obj.set_text("ColSize");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("txtColID","77","168","219","26",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("11");
            obj.set_value("colC");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("txtColType","77","200","219","26",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("12");
            obj.set_value("string");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("txtColSize","77","232","219","26",null,null,null,null,null,null,this);
            obj.set_inputtype("number");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("13");
            obj.set_value("255");
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
        this.addIncludeScript("A_Dataset_M_addColumnInfo_01.xfdl","lib::libCommon.xjs");
        this.addIncludeScript("A_Dataset_M_addColumnInfo_01.xfdl","libevent::event.util.xjs");
        this.registerScript("A_Dataset_M_addColumnInfo_01.xfdl", function(nexacro, system, trace, environment, application) {
        /***********************************************************************
        * 설명      : Dataset addColumnInfo Method
        ***********************************************************************
        *     수정일     작성자   내용
        ***********************************************************************
        *     2019.02.21  김형철   최초 작성
        ***********************************************************************
        */

        this.executeIncludeScript("lib::libCommon.xjs"); /*include "lib::libCommon.xjs"*/;
        this.executeIncludeScript("libevent::event.util.xjs"); /*include "libevent::event.util.xjs"*/;
        var tapi = this.gfnLoadTestAPI(0.71);

        /***********************************************************************
        * 01: Form 변수 선언부
        ***********************************************************************/
        this.dataset = this.ds_data3;
        this.grid = this.Grid00;

        /***********************************************************************
        * 02 : Test Case, Validator, Validation Case 선언부
        ***********************************************************************/
        var tc1  = {
        	description: "Dataset addColumnInfo Method Test",
        	initialize: function() {
        		this.dataset.addEventHandler("onrowsetchanged", this.ds_data3_onrowsetchanged, this);
        	},
        	checker : {},
        	validator : {},
        	task : {},
        	//-------------- beign user defined section
        	userdata : {
        		result : [],			// test 단계별 실행 결과 저장
        		eventChkList1 : [],		//onrowsetchanged 확인용
        	},
        	//--------------  end  user defined section
        	finalize : function() {
        	}
        };

        tc1.task['addColumnInfo'] = function(strColID, strColType, nColSize) {
        	var result = [];
        	var rtnaddColumnInfo;
        	var objColinfo = new ColumnInfo();

        	//선택적 파라미터 생략 시
        	if(nColSize == "생략")
        	{
        		objColinfo.set_type(strColType);
        		rtnaddColumnInfo = this.dataset.addColumnInfo(strColID, strColType);
        	}
        	//선택적 파라미터 미생략 시
        	else
        	{
        		objColinfo.set_type(strColType);
        		objColinfo.set_size(nColSize);
        		rtnaddColumnInfo = this.dataset.addColumnInfo(strColID, strColType, nColSize);
        	}

        	var getColCount = this.dataset.colcount;

        	this.grid.createFormat();

        	result.push(rtnaddColumnInfo);
        	result.push(getColCount);

        	return result;
        };

        tc1.task['eventChk'] = function() {
        	var result = [];

        	result.push(tc1.userdata.eventChkList1);

        	return result;
        };

        tc1.checker['equal'] = function(alResultValues, alExpectedValues) {
        	var chk = true;
        	var chk = tapi.checkEqual(this, alResultValues, alExpectedValues);

        	return chk;
        };

        tc1.validator ['tc1_vd1'] = {
        	description: "addColumnInfo(strColID, strColType, nColSize) 수행",
        	autoTaskFlow : ["addColumnInfo", "eventChk"],
        	vcinfo : {
        		argType : tapi.VCT_ARG_LIST,	// [VCT_ARG_NONE 없음 | VCT_ARG_LIST list형 | VCT_ARG_COMBI 조합형 ]
        			args : [
        					//vc : strColID, strColType, nColSize, ev : 리턴값, colcount, 이벤트 정보
        					{vc: [[tapi.VBT_NORMAL, "colString"],      [tapi.VBT_NORMAL, "string"],     [tapi.VBT_NORMAL, 256]],       ev : [2, 6, "onrowsetchanged", 34]},
        					{vc: [[tapi.VBT_NORMAL, "colInt"],         [tapi.VBT_NORMAL, "int"],        [tapi.VBT_NORMAL, 256]],       ev : [3, 7, "onrowsetchanged", 34]},
        					{vc: [[tapi.VBT_NORMAL, "colFloat"],       [tapi.VBT_NORMAL, "float"],      [tapi.VBT_NORMAL, 256]],       ev : [4, 8, "onrowsetchanged", 34]},
        					{vc: [[tapi.VBT_NORMAL, "colBigDecimal"],  [tapi.VBT_NORMAL, "bigdecimal"], [tapi.VBT_NORMAL, 256]],       ev : [5, 9, "onrowsetchanged", 34]},
        					{vc: [[tapi.VBT_NORMAL, "colDate"],        [tapi.VBT_NORMAL, "date"],       [tapi.VBT_NORMAL, 256]],       ev : [6, 10, "onrowsetchanged", 34]},
        					{vc: [[tapi.VBT_NORMAL, "colTime"],        [tapi.VBT_NORMAL, "time"],       [tapi.VBT_NORMAL, 256]],       ev : [7, 11, "onrowsetchanged", 34]},
        					{vc: [[tapi.VBT_NORMAL, "colDateTime"],    [tapi.VBT_NORMAL, "datetime"],   [tapi.VBT_NORMAL, 256]],       ev : [8, 12, "onrowsetchanged", 34]},
        					{vc: [[tapi.VBT_NORMAL, "colBlob"],        [tapi.VBT_NORMAL, "blob"],       [tapi.VBT_NORMAL, 256]],       ev : [9, 13, "onrowsetchanged", 34]},
        					{vc: [[tapi.VBT_EXCEPTION, "colString"],   [tapi.VBT_NORMAL, "string"],     [tapi.VBT_NORMAL, 256]],       ev : [-1, 13, ""]},
        					{vc: [[tapi.VBT_EXCEPTION, "colString2"],  [tapi.VBT_NORMAL, "string"],     [tapi.VBT_LOWER, -1]],         ev : [10, 14, "onrowsetchanged", 34]},
        					{vc: [[tapi.VBT_EXCEPTION, "colInt2"],     [tapi.VBT_NORMAL, "int"],        [tapi.VBT_MIN, 0]],            ev : [11, 15, "onrowsetchanged", 34]},
        					{vc: [[tapi.VBT_NORMAL, "colFloat2"],      [tapi.VBT_NORMAL, "float"],      [tapi.VBT_HIGHER, 257]],       ev : [12, 16, "onrowsetchanged", 34]},
        					{vc: [[tapi.VBT_NORMAL, "colBigDecimal2"], [tapi.VBT_NORMAL, "bigdecimal"], [tapi.VBT_NORMAL, 178]],       ev : [13, 17, "onrowsetchanged", 34]},
        					{vc: [[tapi.VBT_NORMAL, "colDate2"],       [tapi.VBT_EXCEPTION, "test"],    [tapi.VBT_MAX, 256]],          ev : [14, 18, "onrowsetchanged", 34]},
        					{vc: [[tapi.VBT_NORMAL, "colTime2"],       [tapi.VBT_NORMAL, "time"],       [tapi.VBT_EXCEPTION, "생략"]], ev : [15, 19, "onrowsetchanged", 34]}
        				   ]
        	},
        	prepare: function () {
        	},
        	run: function () {
        		var vdAdt = tapi.getVdAdaptor();
        		var taskName = vdAdt.getTaskFlowName();	// task 단계를 찾아서 실행

        		var rtn;
        		var strColID = vdAdt.getValue(0);
        		var strColType = vdAdt.getValue(1);
        		var nColSize = vdAdt.getValue(2);

        		switch(taskName) {
        			case "addColumnInfo":
        				rtn = tc1.task['addColumnInfo'].call(this, strColID, strColType, nColSize);
        				tc1.userdata.result.push(rtn);
        				break;
        			case "eventChk":
        				rtn = tc1.task['eventChk'].call(this);
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
        		tc1.userdata.result = [];
        		tc1.userdata.eventChkList1 = [];
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
        this.TA_Dataset_M_addColumnInfo_01_v2_onload = function(obj,e)
        {
        	// debug mode : log level에서 지정한 모든 메시지 제공
        	tapi.systemDebugOn();	// Runner를 debug mode로 실행
        	tapi.debugOn();			// 응용을 debug mode로 실행

        	// Runner Load
        	tapi.init(tcInfo, this);
        	//LogViewer 미팝업용
        // 	var runner = tapi.getRunner();
        //
        // 	if (runner.isTestMode() == false){
        //  		var logger = new tapi.ConsoleLogger();
        //  		runner.setLogger(logger);
        // 	}
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
           //runner.setLogLevel(tapi.INFO);
        	//------------ 선택 작업 End ------------------------------
        	runner.executeTest();
        };

        /***********************************************************************
        * 06 : 이벤트 선언부
        ***********************************************************************/
        /***********************************************************************
        * onrowsetchanged
        ***********************************************************************/
        this.ds_data3_onrowsetchanged = function(obj,e)
        {
        	tc1.userdata.eventChkList1.push(e.eventid);
        	tc1.userdata.eventChkList1.push(e.reason);
        };

        /***********************************************************************
        * 07 : 사용자 정의 함수 선언부
        ***********************************************************************/
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.TA_Dataset_M_addColumnInfo_01_v2_onload,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn_Combo_menu.addEventHandler("onclick",this.btn_button_menu_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_main.addEventHandler("onclick",this.btn_main_onclick,this);
            this.btn_addColumnInfoInfo.addEventHandler("onclick",this.btn_addColumnInfoInfo_onclick,this);
        };

        this.loadIncludeScript("A_Dataset_M_addColumnInfo_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
