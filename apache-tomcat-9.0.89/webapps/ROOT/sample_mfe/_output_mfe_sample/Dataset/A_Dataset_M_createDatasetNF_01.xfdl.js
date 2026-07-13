(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TA_Dataset_M_createDatasetNF_01_v2");
            this.set_titletext("TA_Dataset_M_createDatasetNF_01_v2");
            this.getSetter("classname").set("23711_Buttoncssimage_01");
            this.getSetter("inheritanceid").set("");
            this.getSetter("position").set("absolute");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(440,560);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("ds_data1", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents({"ColumnInfo" : {"ConstColumn" : [{"id" : "ConstA","size" : "30","type" : "STRING","value" : "A"},{"id" : "ConstB","size" : "30","type" : "STRING","value" : "B"},{"id" : "ConstC","size" : "30","type" : "STRING","value" : "C"}],"Column" : [{"id" : "colA","size" : "256","type" : "STRING"},{"id" : "colB","size" : "256","type" : "STRING"},{"id" : "colC","size" : "256","type" : "INT"},{"id" : "colD","size" : "256","type" : "STRING"}]},"Rows" : [{"colB" : "유동규","colA" : "1","colC" : "100","colD" : "투우"},{"colB" : "주인희","colA" : "1","colC" : "200","colD" : "비이"},{"colB" : "고준영","colA" : "2","colC" : "200","colD" : "소오"},{"colB" : "이정빈","colA" : "3","colC" : "300","colD" : "프트"},{"colA" : "4","colB" : "김선주","colC" : "400","colD" : "비이"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Button("btn00","314","4","107","36",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Embedded Test");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid00","5","61","295","161",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_data1");
            obj.set_formats("<Formats>\n  <Format id=\"default\">\n    <Columns>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n    </Columns>\n    <Rows>\n      <Row band=\"head\" size=\"24\"/>\n      <Row band=\"body\" size=\"24\"/>\n    </Rows>\n    <Band id=\"head\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"colA\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"colB\"/>\n      <Cell col=\"2\" disptype=\"normal\" text=\"colC\"/>\n      <Cell col=\"3\" disptype=\"normal\" text=\"colD\"/>\n      <Cell col=\"4\" disptype=\"normal\" text=\"ConstA\"/>\n      <Cell col=\"5\" disptype=\"normal\" text=\"ConstB\"/>\n      <Cell col=\"6\" disptype=\"normal\" text=\"ConstC\"/>\n    </Band>\n    <Band id=\"body\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"bind:colA\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"bind:colB\"/>\n      <Cell col=\"2\" disptype=\"normal\" text=\"bind:colC\"/>\n      <Cell col=\"3\" disptype=\"normal\" text=\"bind:colD\"/>\n      <Cell col=\"4\" disptype=\"normal\" text=\"bind:ConstA\"/>\n      <Cell col=\"5\" disptype=\"normal\" text=\"bind:ConstB\"/>\n      <Cell col=\"6\" disptype=\"normal\" text=\"bind:ConstC\"/>\n    </Band>\n  </Format>\n</Formats>\n");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("0");
            obj.getSetter("useinputpanel").set("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"colA\"/><Cell col=\"1\" disptype=\"normal\" text=\"colB\"/><Cell col=\"2\" disptype=\"normal\" text=\"colC\"/><Cell col=\"3\" disptype=\"normal\" text=\"colD\"/><Cell col=\"4\" disptype=\"normal\" text=\"ConstA\"/><Cell col=\"5\" disptype=\"normal\" text=\"ConstB\"/><Cell col=\"6\" disptype=\"normal\" text=\"ConstC\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:colA\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:colB\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:colC\"/><Cell col=\"3\" disptype=\"normal\" text=\"bind:colD\"/><Cell col=\"4\" disptype=\"normal\" text=\"bind:ConstA\"/><Cell col=\"5\" disptype=\"normal\" text=\"bind:ConstB\"/><Cell col=\"6\" disptype=\"normal\" text=\"bind:ConstC\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static01","3","31","301","37",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_text("[Dataset_M_createDatasetNF]");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_main","8","1","81","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("2");
            obj.set_text("◀◀Main");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_Combo_menu","93","1","81","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("3");
            obj.set_text("◀Dataset");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("txt_result","6","403","424","147",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("4");
            obj.set_text("//");
            obj.set_value("//");
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
        this.addIncludeScript("A_Dataset_M_createDatasetNF_01.xfdl","lib::libCommon.xjs");
        this.addIncludeScript("A_Dataset_M_createDatasetNF_01.xfdl","libevent::event.util.xjs");
        this.registerScript("A_Dataset_M_createDatasetNF_01.xfdl", function(nexacro, system, trace, environment, application) {
        /***********************************************************************
        * 설명      : Dataset createDatasetNF Method
        ***********************************************************************
        *     수정일     작성자   내용
        ***********************************************************************
        *     2019.03.12  김형철   최초 작성
        ***********************************************************************
        */

        this.executeIncludeScript("lib::libCommon.xjs"); /*include "lib::libCommon.xjs"*/;
        this.executeIncludeScript("libevent::event.util.xjs"); /*include "libevent::event.util.xjs"*/;
        var tapi = this.gfnLoadTestAPI(0.71);

        /***********************************************************************
        * 01: Form 변수 선언부
        ***********************************************************************/
        this.dataset = this.ds_data1;

        /***********************************************************************
        * 02 : Test Case, Validator, Validation Case 선언부
        ***********************************************************************/
        var tc1  = {
        	description: "Dataset createDatasetNF Method Test",
        	//-------------- beign user defined section
        	userdata : {
        		result : [],					//task 리턴값
        		arrColList : new Array(),
        		strExpr : 3*5,
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

        tc1.task['createDatasetNF'] = function(strDatasetID, arrColList, strWhereExpr, nStartIdx, nEndIdx) {
        	var result = [];
        	var rtncreateDatasetNF;
        	var rtnsaveCSV;

        	if(strWhereExpr == "생략" && nStartIdx == "생략" && nEndIdx == "생략")
        		rtncreateDatasetNF = this.dataset.createDatasetNF(strDatasetID, arrColList);
        	else if(nStartIdx == "생략" && nEndIdx == "생략")
        		rtncreateDatasetNF = this.dataset.createDatasetNF(strDatasetID, arrColList, strWhereExpr);
        	else if(nEndIdx == "생략")
        		rtncreateDatasetNF = this.dataset.createDatasetNF(strDatasetID, arrColList, strWhereExpr, nStartIdx);
        	else
        		rtncreateDatasetNF = this.dataset.createDatasetNF(strDatasetID, arrColList, strWhereExpr, nStartIdx, nEndIdx);

        	getSaveCSV = rtncreateDatasetNF.saveCSV();

        	this.txt_result.set_value(getSaveCSV);
        	rtnsaveCSV = this.txt_result.value;

        	result.push(rtncreateDatasetNF);
        	result.push(rtnsaveCSV);

        	return result;
        };


        tc1.checker['equal'] = function(alResultValues, alExpectedValues) {
        	var chk = true;
        	var chk = tapi.checkEqual(this, alResultValues, alExpectedValues);

        	return chk;
        };

        tc1.validator ['tc1_vd1'] = {
        	description: "createDatasetNF(strDatasetID, arrColList, strWhereExpr, nStartIdx, nEndIdx) 수행",
        	autoTaskFlow : ["createDatasetNF"],
        	vcinfo : {
        		argType : tapi.VCT_ARG_LIST,
        		args : [
        				//vc : strDatasetID, arrColList, strWhereExpr, nStartIdx, nEndIdx, ev : 리턴값
        			    {vc: [[tapi.VBT_NORMAL,"dataset00"],[tapi.VBT_NORMAL,tc1.userdata.arrColList = ["colD"]],[tapi.VBT_EXCEPTION,"생략"],[tapi.VBT_EXCEPTION,"생략"],[tapi.VBT_EXCEPTION,"생략"]],ev: ["[object Dataset]","Dataset:dataset00\ncolD:STRING(256)\n투우\n비이\n소오\n프트\n비이\n\n"]},
        				//[확인필요] arrColList에 OldColID 설정 시 첫번째 Column 값만 적용되며 두번째 Column 부터는 적용되지 않음
        				{vc: [[tapi.VBT_NORMAL,"dataset01"],[tapi.VBT_NORMAL,tc1.userdata.arrColList = ["NewCol1:colB"]],[tapi.VBT_EXCEPTION,"생략"],[tapi.VBT_EXCEPTION,"생략"],[tapi.VBT_EXCEPTION,"생략"]],ev: ["[object Dataset]","Dataset:dataset01\nNewCol1:STRING(256)\n유동규\n주인희\n고준영\n이정빈\n김선주\n\n"]},
        				{vc: [[tapi.VBT_NORMAL,"dataset02"],[tapi.VBT_NORMAL,tc1.userdata.arrColList = ["NewCol1:colA"]],[tapi.VBT_NORMAL,"colC == 200"],[tapi.VBT_EXCEPTION,"생략"],[tapi.VBT_EXCEPTION,"생략"]],ev: ["[object Dataset]","Dataset:dataset02\nNewCol1:STRING(256)\n1\n2\n\n"]},
        				{vc: [[tapi.VBT_NORMAL,"dataset03"],[tapi.VBT_NORMAL,tc1.userdata.arrColList = ["colB","colD"]],[tapi.VBT_NORMAL,"colC > 100"],[tapi.VBT_MIN,0],[tapi.VBT_EXCEPTION,"생략"]],ev: ["[object Dataset]","Dataset:dataset03\ncolB:STRING(256),colD:STRING(256)\n주인희,비이\n고준영,소오\n이정빈,프트\n김선주,비이\n\n"]},
        				{vc: [[tapi.VBT_NORMAL,"dataset04"],[tapi.VBT_NORMAL,tc1.userdata.arrColList = ["colB","colD"]],[tapi.VBT_NORMAL,"colC > 100"],[tapi.VBT_MAX,5],[tapi.VBT_NORMAL,2]],ev: ["[object Dataset]","Dataset:dataset04\ncolB:STRING(256),colD:STRING(256)\n\n"]},
        				{vc: [[tapi.VBT_NORMAL,"dataset05"],[tapi.VBT_NORMAL,tc1.userdata.arrColList = ["colB","colD"]],[tapi.VBT_NORMAL,"colC > 100"],[tapi.VBT_NORMAL,3],[tapi.VBT_MAX,5]],ev: ["[object Dataset]","Dataset:dataset05\ncolB:STRING(256),colD:STRING(256)\n이정빈,프트\n김선주,비이\n\n"]},
        				{vc: [[tapi.VBT_NORMAL,"dataset06"],[tapi.VBT_NORMAL,tc1.userdata.arrColList = ["colB","colD"]],[tapi.VBT_NORMAL,"colC > 100"],[tapi.VBT_LOWER,-1],[tapi.VBT_HIGHER,10]],ev: ["[object Dataset]","Dataset:dataset06\ncolB:STRING(256),colD:STRING(256)\n주인희,비이\n고준영,소오\n이정빈,프트\n김선주,비이\n\n"]},
        				{vc: [[tapi.VBT_NORMAL,"dataset07"],[tapi.VBT_NORMAL,tc1.userdata.arrColList = ["colB","colD"]],[tapi.VBT_NORMAL,"colC > 100"],[tapi.VBT_HIGHER,10],[tapi.VBT_LOWER,-1]],ev: ["[object Dataset]","Dataset:dataset07\ncolB:STRING(256),colD:STRING(256)\n\n"]},
        				{vc: [[tapi.VBT_NORMAL,"dataset08"],[tapi.VBT_NORMAL,tc1.userdata.arrColList = ["colB","colD"]],[tapi.VBT_NORMAL,"colC > 100"],[tapi.VBT_EXCEPTION,undefined],[tapi.VBT_EXCEPTION,"생략"]],ev: ["[object Dataset]","Dataset:dataset08\ncolB:STRING(256),colD:STRING(256)\n주인희,비이\n고준영,소오\n이정빈,프트\n김선주,비이\n\n"]},
        				{vc: [[tapi.VBT_NORMAL,"dataset09"],[tapi.VBT_NORMAL,tc1.userdata.arrColList = ["colB","colD"]],[tapi.VBT_NORMAL,"colC > 100"],[tapi.VBT_MIN,0],[tapi.VBT_EXCEPTION,null]],ev: ["[object Dataset]","Dataset:dataset09\ncolB:STRING(256),colD:STRING(256)\n주인희,비이\n고준영,소오\n이정빈,프트\n김선주,비이\n\n"]},
        				//filter 후
        				{vc: [[tapi.VBT_NORMAL,"dataset10"],[tapi.VBT_NORMAL,tc1.userdata.arrColList = ["colC"]],[tapi.VBT_EXCEPTION,"생략"],[tapi.VBT_EXCEPTION,"생략"],[tapi.VBT_EXCEPTION,"생략"]],ev: ["[object Dataset]","Dataset:dataset10\ncolC:INT(256)\n100\n200\n200\n300\n400\n\n"]},
        			]
        	},
        	prepare: function () {
        		var vdAdt = tapi.getVdAdaptor();

        		if(vdAdt.getIndexVC() == 10)
        			this.dataset.set_filterstr("colC == 400");

        		tc1.userdata.result = [];
        	},
        	run: function () {
        		var vdAdt = tapi.getVdAdaptor();
        		var taskName = vdAdt.getTaskFlowName();
        		var strDatasetID = vdAdt.getValue(0);
        		var arrColList = vdAdt.getValue(1);
        		var strWhereExpr = vdAdt.getValue(2);
        		var nStartIdx = vdAdt.getValue(3);
        		var nEndIdx = vdAdt.getValue(4);

        		switch(taskName) {
        		case "createDatasetNF":
        			var rtn = tc1.task['createDatasetNF'].call(this, strDatasetID, arrColList, strWhereExpr, nStartIdx, nEndIdx);
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
        this.TA_Dataset_M_createDatasetNF_01_v2_onload = function(obj,e)
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.TA_Dataset_M_createDatasetNF_01_v2_onload,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn_main.addEventHandler("onclick",this.btn_main_onclick,this);
            this.btn_Combo_menu.addEventHandler("onclick",this.btn_button_menu_onclick,this);
        };

        this.loadIncludeScript("A_Dataset_M_createDatasetNF_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
