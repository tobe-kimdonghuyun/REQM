(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TA_Dataset_M_findRowExpr_01_v2");
            this.set_titletext("TA_Dataset_M_findRowExpr_01_v2");
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
            obj._setContents({"ColumnInfo" : {"ConstColumn" : [{"id" : "ConstA","size" : "30","type" : "STRING","value" : "A"},{"id" : "ConstB","size" : "30","type" : "STRING","value" : "B"},{"id" : "ConstC","size" : "30","type" : "STRING","value" : "C"}],"Column" : [{"id" : "colA","size" : "256","type" : "STRING"},{"id" : "colB","size" : "256","type" : "STRING"},{"id" : "colC","size" : "256","type" : "INT"},{"id" : "colD","size" : "256","type" : "STRING"}]},"Rows" : [{"colB" : "유동규","colA" : "1","colC" : "100","colD" : "투우"},{"colB" : "고준영","colA" : "2","colC" : "200","colD" : "비이"},{"colB" : "김선주","colA" : "3","colC" : "200","colD" : "소오"},{"colB" : "이정빈","colA" : "4","colC" : "300","colD" : "프트"},{"colA" : "5","colB" : "고준영","colC" : "400","colD" : "비이"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Button("btn00","314","4","107","36",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Embedded Test");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static01","3","31","297","37",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_text("[Dataset_M_findRowExprExpr_48162_01]");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_Combo_menu","93","1","81","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("2");
            obj.set_text("◀Dataset");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_main","8","1","81","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("3");
            obj.set_text("◀◀Main");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("txt_result","6","379","298","63",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("4");
            obj.set_value("//");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_clear","241","352","63","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("5");
            obj.set_text("clear");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid00","5","61","295","131",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_data1");
            obj.set_formats("<Formats>\n  <Format id=\"default\">\n    <Columns>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n    </Columns>\n    <Rows>\n      <Row band=\"head\" size=\"24\"/>\n      <Row band=\"body\" size=\"24\"/>\n    </Rows>\n    <Band id=\"head\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"colA\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"colB\"/>\n      <Cell col=\"2\" disptype=\"normal\" text=\"colC\"/>\n      <Cell col=\"3\" disptype=\"normal\" text=\"colD\"/>\n      <Cell col=\"4\" disptype=\"normal\" text=\"ConstA\"/>\n      <Cell col=\"5\" disptype=\"normal\" text=\"ConstB\"/>\n      <Cell col=\"6\" disptype=\"normal\" text=\"ConstC\"/>\n    </Band>\n    <Band id=\"body\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"bind:colA\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"bind:colB\"/>\n      <Cell col=\"2\" disptype=\"normal\" text=\"bind:colC\"/>\n      <Cell col=\"3\" disptype=\"normal\" text=\"bind:colD\"/>\n      <Cell col=\"4\" disptype=\"normal\" text=\"bind:ConstA\"/>\n      <Cell col=\"5\" disptype=\"normal\" text=\"bind:ConstB\"/>\n      <Cell col=\"6\" disptype=\"normal\" text=\"bind:ConstC\"/>\n    </Band>\n  </Format>\n</Formats>\n");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("6");
            obj.getSetter("useinputpanel").set("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"colA\"/><Cell col=\"1\" text=\"colB\"/><Cell col=\"2\" text=\"colC\"/><Cell col=\"3\" text=\"colD\"/><Cell col=\"4\" text=\"ConstA\"/><Cell col=\"5\" text=\"ConstB\"/><Cell col=\"6\" text=\"ConstC\"/></Band><Band id=\"body\"><Cell edittype=\"text\" subsumtext=\"test\" text=\"bind:colA\"/><Cell col=\"1\" edittype=\"text\" subsumtext=\"test\" text=\"bind:colB\"/><Cell col=\"2\" edittype=\"text\" subsumtext=\"test\" text=\"bind:colC\"/><Cell col=\"3\" edittype=\"text\" subsumtext=\"test\" text=\"bind:colD\"/><Cell col=\"4\" edittype=\"text\" subsumtext=\"test\" text=\"bind:ConstA\"/><Cell col=\"5\" edittype=\"text\" subsumtext=\"test\" text=\"bind:ConstB\"/><Cell col=\"6\" edittype=\"text\" subsumtext=\"test\" text=\"bind:ConstC\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_keystring","13","353","90","25",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("7");
            obj.set_text("keystring set");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_filterstr","117","353","90","25",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("8");
            obj.set_text("filterstr set");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_strExpr","69","198","227","24",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("9");
            obj.set_value("colB == \"고준영\"");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","6","199","65","22",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("10");
            obj.set_text("strExpr");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static03","9","229","74","22",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("11");
            obj.set_text("nStartIdx");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_nStartIdx","84","226","60","24",null,null,null,null,null,null,this);
            obj.set_inputtype("number");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("12");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static04","153","229","74","22",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("13");
            obj.set_text("nEndIdx");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_nEndIdx","236","226","60","24",null,null,null,null,null,null,this);
            obj.set_inputtype("number");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("14");
            obj.set_value("4");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_findRowExprExpr1","8","256","296","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("15");
            obj.set_text("findRowExprExpr(strExpr)");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_findRowExprExpr2","8","288","296","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("16");
            obj.set_text("findRowExprExpr(strExpr ,nStartIdx)");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_findRowExprExpr3","8","320","296","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("17");
            obj.set_text("findRowExprExpr(strExpr, nStartIdx, nEndIdx)");
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
        this.addIncludeScript("A_Dataset_M_findRowExpr_01.xfdl","lib::libCommon.xjs");
        this.addIncludeScript("A_Dataset_M_findRowExpr_01.xfdl","libevent::event.util.xjs");
        this.registerScript("A_Dataset_M_findRowExpr_01.xfdl", function(nexacro, system, trace, environment, application) {
        /***********************************************************************
        * 설명      : Dataset findRowExpr Method
        ***********************************************************************
        *     수정일     작성자   내용
        ***********************************************************************
        *     2019.02.25  김형철   최초 작성
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
        	description: "Dataset findRowExpr Method Test",
        	//-------------- beign user defined section
        	userdata : {
        		result : [],					//task 리턴값
        		arrArgs : new Array("200"),		//arrArgs 파라미터용
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

        tc1.task['findRowExpr'] = function(strExpr, nStartIdx, nEndIdx, arrArgs) {
        	var result = [];
        	var rtnfindRowExpr;

        	if(nStartIdx == "생략" && nEndIdx == "생략" && arrArgs == "생략")
        		rtnfindRowExpr = this.dataset.findRowExpr(strExpr);
        	else if(nEndIdx == "생략" && arrArgs == "생략")
        		rtnfindRowExpr = this.dataset.findRowExpr(strExpr, nStartIdx);
        	else if(arrArgs == "생략")
        		rtnfindRowExpr = this.dataset.findRowExpr(strExpr, nStartIdx, nEndIdx);
        	else
        		rtnfindRowExpr = this.dataset.findRowExpr(strExpr, nStartIdx, nEndIdx, arrArgs);

        	result.push(rtnfindRowExpr);

        	return result;
        };

        tc1.checker['equal'] = function(alResultValues, alExpectedValues) {
        	var chk = true;
        	var chk = tapi.checkEqual(this, alResultValues, alExpectedValues);

        	return chk;
        };

        tc1.validator ['tc1_vd1'] = {
        	description: "findRowExpr(strExpr, nStartIdx, nEndIdx, arrArgs) 수행",
        	autoTaskFlow : ["findRowExpr"],
        	vcinfo : {
        		argType : tapi.VCT_ARG_LIST,
        		args : [
        				//vc : strExpr, nStartIdx, nEndIdx, arrArgs, ev : 리턴값
        				{vc: [[tapi.VBT_NORMAL,"colC == '200'"],[tapi.VBT_MIN,0],[tapi.VBT_MAX,5],[tapi.VBT_EXCEPTION,"생략"]],ev: [1]},
         				{vc: [[tapi.VBT_NORMAL,"colA == '1'"],[tapi.VBT_MIN,0],[tapi.VBT_MAX,5],[tapi.VBT_EXCEPTION,"생략"]],ev: [0]},
        				{vc: [[tapi.VBT_NORMAL,"ConstC == 'C'"],[tapi.VBT_MIN,0],[tapi.VBT_MAX,5],[tapi.VBT_EXCEPTION,"생략"]],ev: [0]},
        				{vc: [[tapi.VBT_EXCEPTION,"test == 'C'"],[tapi.VBT_MIN,0],[tapi.VBT_MAX,5],[tapi.VBT_EXCEPTION,"생략"]],ev: [-1]},
        				{vc: [[tapi.VBT_EXCEPTION,"colC == '1000'"],[tapi.VBT_EXCEPTION,0],[tapi.VBT_MAX,5],[tapi.VBT_EXCEPTION,"생략"]],ev: [-1]},
        				{vc: [[tapi.VBT_NORMAL,"colC == '200'"],[tapi.VBT_NORMAL,2],[tapi.VBT_MAX,5],[tapi.VBT_EXCEPTION,"생략"]],ev: [2]},
        				{vc: [[tapi.VBT_NORMAL,"colC == '200'"],[tapi.VBT_MAX,5],[tapi.VBT_MAX,5],[tapi.VBT_EXCEPTION,"생략"]],ev: [-1]},
        				{vc: [[tapi.VBT_NORMAL,"colC == '200'"],[tapi.VBT_LOWER,-1],[tapi.VBT_MAX,5],[tapi.VBT_EXCEPTION,"생략"]],ev: [1]},
        				{vc: [[tapi.VBT_NORMAL,"colC == '200'"],[tapi.VBT_HIGHER,6],[tapi.VBT_MAX,5],[tapi.VBT_EXCEPTION,"생략"]],ev: [-1]},
        				{vc: [[tapi.VBT_NORMAL,"colC == '200'"],[tapi.VBT_EXCEPTION,undefined],[tapi.VBT_MAX,5],[tapi.VBT_EXCEPTION,"생략"]],ev: [1]},
        				{vc: [[tapi.VBT_NORMAL,"colC == '200'"],[tapi.VBT_MIN,0],[tapi.VBT_EXCEPTION,null],[tapi.VBT_EXCEPTION,"생략"]],ev: [1]},
        				{vc: [[tapi.VBT_NORMAL,"colC == '200'"],[tapi.VBT_EXCEPTION,"생략"],[tapi.VBT_EXCEPTION,"생략"],[tapi.VBT_EXCEPTION,"생략"]],ev: [1]},
        				{vc: [[tapi.VBT_NORMAL,"colC == '200'"],[tapi.VBT_NORMAL,2],[tapi.VBT_EXCEPTION,"생략"],[tapi.VBT_EXCEPTION,"생략"]],ev: [2]},
        				{vc: [[tapi.VBT_NORMAL,"colC == $0"],[tapi.VBT_MIN,0],[tapi.VBT_MAX,5],[tapi.VBT_NORMAL,tc1.userdata.arrArgs]],ev: [1]},
        				//filter 후
         				{vc: [[tapi.VBT_NORMAL,"colC == '200'"],[tapi.VBT_NORMAL,2],[tapi.VBT_EXCEPTION,"생략"],[tapi.VBT_EXCEPTION,"생략"]],ev: [-1]},
         				//grouping 후
        				{vc: [[tapi.VBT_NORMAL,"colC == '400'"],[tapi.VBT_MIN,0],[tapi.VBT_EXCEPTION,"생략"],[tapi.VBT_EXCEPTION,"생략"]],ev: [7]},
        			]
        	},
        	prepare: function () {
        		tc1.userdata.result = [];
        		var vdAdt = tapi.getVdAdaptor();

        		if(vdAdt.getIndexVC() == 14)
        			this.dataset.filter("colC != '200'");
        		if(vdAdt.getIndexVC() == 15)
        		{
        			this.dataset.filter("");
        			this.dataset.set_keystring("G:+colC");
        		}
        	},
        	run: function () {
        		var vdAdt = tapi.getVdAdaptor();
        		var taskName = vdAdt.getTaskFlowName();
        		var strExpr = vdAdt.getValue(0);
        		var nStartIdx = vdAdt.getValue(1);
        		var nEndIdx = vdAdt.getValue(2);
        		var arrArgs = vdAdt.getValue(3);

        		switch(taskName) {
        		case "findRowExpr":
        			var rtn = tc1.task['findRowExpr'].call(this, strExpr, nStartIdx, nEndIdx, arrArgs);
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
        this.TA_Dataset_M_findRowExpr_01_v2_onload = function(obj,e)
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
            this.addEventHandler("onload",this.TA_Dataset_M_findRowExpr_01_v2_onload,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn_Combo_menu.addEventHandler("onclick",this.btn_button_menu_onclick,this);
            this.btn_main.addEventHandler("onclick",this.btn_main_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_keystring.addEventHandler("onclick",this.btn_keystring_onclick,this);
            this.btn_filterstr.addEventHandler("onclick",this.btn_filterstr_onclick,this);
            this.btn_findRowExprExpr1.addEventHandler("onclick",this.btn_findRowExprExpr1_onclick,this);
            this.btn_findRowExprExpr2.addEventHandler("onclick",this.btn_findRowExprExpr2_onclick,this);
            this.btn_findRowExprExpr3.addEventHandler("onclick",this.btn_findRowExprExpr3_onclick,this);
        };

        this.loadIncludeScript("A_Dataset_M_findRowExpr_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
