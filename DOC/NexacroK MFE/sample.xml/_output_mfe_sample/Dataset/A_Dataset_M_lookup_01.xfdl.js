(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TA_Dataset_M_lookup_01_v2");
            this.set_titletext("TA_Dataset_M_lookup_01_v2");
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
            obj.set_taborder("17");
            obj.set_text("Embedded Test");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static01","3","31","301","37",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_text("[Dataset_M_lookup_48119_01]");
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

            obj = new nexacro.Button("btn_lookup","139","264","92","37",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("6");
            obj.set_text("lookup");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid00","5","61","295","99",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_data1");
            obj.set_formats("<Formats>\n  <Format id=\"default\">\n    <Columns>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n    </Columns>\n    <Rows>\n      <Row band=\"head\" size=\"24\"/>\n      <Row band=\"body\" size=\"24\"/>\n    </Rows>\n    <Band id=\"head\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"colA\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"colB\"/>\n      <Cell col=\"2\" disptype=\"normal\" text=\"colC\"/>\n      <Cell col=\"3\" disptype=\"normal\" text=\"colD\"/>\n      <Cell col=\"4\" disptype=\"normal\" text=\"ConstA\"/>\n      <Cell col=\"5\" disptype=\"normal\" text=\"ConstB\"/>\n      <Cell col=\"6\" disptype=\"normal\" text=\"ConstC\"/>\n    </Band>\n    <Band id=\"body\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"bind:colA\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"bind:colB\"/>\n      <Cell col=\"2\" disptype=\"normal\" text=\"bind:colC\"/>\n      <Cell col=\"3\" disptype=\"normal\" text=\"bind:colD\"/>\n      <Cell col=\"4\" disptype=\"normal\" text=\"bind:ConstA\"/>\n      <Cell col=\"5\" disptype=\"normal\" text=\"bind:ConstB\"/>\n      <Cell col=\"6\" disptype=\"normal\" text=\"bind:ConstC\"/>\n    </Band>\n  </Format>\n</Formats>\n");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("7");
            obj.getSetter("useinputpanel").set("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"colA\"/><Cell col=\"1\" text=\"colB\"/><Cell col=\"2\" text=\"colC\"/><Cell col=\"3\" text=\"colD\"/><Cell col=\"4\" text=\"ConstA\"/><Cell col=\"5\" text=\"ConstB\"/><Cell col=\"6\" text=\"ConstC\"/></Band><Band id=\"body\"><Cell text=\"bind:colA\"/><Cell col=\"1\" text=\"bind:colB\"/><Cell col=\"2\" text=\"bind:colC\"/><Cell col=\"3\" text=\"bind:colD\"/><Cell col=\"4\" text=\"bind:ConstA\"/><Cell col=\"5\" text=\"bind:ConstB\"/><Cell col=\"6\" text=\"bind:ConstC\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","10","171","94","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("8");
            obj.set_text("Col ID");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static02","10","203","58","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("9");
            obj.set_text("ColVal");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static03","10","235","97","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("10");
            obj.set_text("OutputColID");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("txtColID","114","168","182","26",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("11");
            obj.set_value("colB");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("txtColVal","112","200","182","26",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("12");
            obj.set_value("유동규");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("txtColoutput","112","232","182","26",null,null,null,null,null,null,this);
            obj.set_inputtype("");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("13");
            obj.set_value("colC");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_idx1","180","2","29","29",null,null,null,null,null,null,this);
            obj.set_enable("false");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("14");
            obj.set_text("1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_idx2","212","2","29","29",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("15");
            obj.set_text("2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_idx03","244","2","29","29",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("16");
            obj.set_text("3");
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
        this.addIncludeScript("A_Dataset_M_lookup_01.xfdl","lib::libCommon.xjs");
        this.addIncludeScript("A_Dataset_M_lookup_01.xfdl","libevent::event.util.xjs");
        this.registerScript("A_Dataset_M_lookup_01.xfdl", function(nexacro, system, trace, environment, application) {
        /***********************************************************************
        * 설명      : Dataset lookup Method
        ***********************************************************************
        *     수정일     작성자   내용
        ***********************************************************************
        *     2019.03.05  김형철   최초 작성
        *     2020.12.17  최창열   "$+idx" 케이스 수정 & 테스트 함수 추가
        ***********************************************************************
        */

        this.executeIncludeScript("lib::libCommon.xjs"); /*include "lib::libCommon.xjs"*/;
        this.executeIncludeScript("libevent::event.util.xjs"); /*include "libevent::event.util.xjs"*/;
        var tapi = this.gfnLoadTestAPI(0.71);
        //this.dev_status = tapi.DEV_HOLD;
        /***********************************************************************
        * 01: Form 변수 선언부
        ***********************************************************************/
        this.dataset = this.ds_data1;

        /***********************************************************************
        * 02 : Test Case, Validator, Validation Case 선언부
        ***********************************************************************/
        var tc1  = {
        	description: "Dataset lookup Method Test",
        	//-------------- beign user defined section
        	userdata : {
        		result : [],					//task 리턴값
        		arrArgs : new Array("colB"),
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

        tc1.task['lookup'] = function(strColID, varCmpVal, strOutputColID, arrArgs) {
        	var result = [];
        	var rtnlookup;

        	if(arrArgs == "생략")
        		rtnlookup = this.dataset.lookup(strColID, varCmpVal, strOutputColID);
        	else
        		rtnlookup = this.dataset.lookup(strColID, varCmpVal, strOutputColID, arrArgs);

        	result.push(rtnlookup);

        	return result;
        };

        tc1.checker['equal'] = function(alResultValues, alExpectedValues) {
        	var chk = true;
        	var chk = tapi.checkEqual(this, alResultValues, alExpectedValues);

        	return chk;
        };

        tc1.validator ['tc1_vd1'] = {
        	description: "lookup(strColID, varCmpVal, strOutputColID, arrArgs) 수행",
        	autoTaskFlow : ["lookup"],
        	vcinfo : {
        		argType : tapi.VCT_ARG_LIST,
        		args : [
        				//vc : strColID, varCmpVal, strOutputColID, arrArgs, ev : 리턴값
        			    {vc: [[tapi.VBT_NORMAL,"colB"],[tapi.VBT_NORMAL,"유동규"],[tapi.VBT_NORMAL,"colC"],[tapi.VBT_EXCEPTION,"생략"]],ev: [100]},
        				{vc: [[tapi.VBT_NORMAL,"colB"],[tapi.VBT_NORMAL,"유동규"],[tapi.VBT_EXCEPTION,"test"],[tapi.VBT_EXCEPTION,"생략"]],ev: [""]},
        				{vc: [[tapi.VBT_EXCEPTION,"test"],[tapi.VBT_NORMAL,"유동규"],[tapi.VBT_NORMAL,"colC"],[tapi.VBT_EXCEPTION,"생략"]],ev: [""]},
        				{vc: [[tapi.VBT_EXCEPTION,"test"],[tapi.VBT_EXCEPTION,"test"],[tapi.VBT_NORMAL,"colC"],[tapi.VBT_EXCEPTION,"생략"]],ev: [""]},
        				{vc: [[tapi.VBT_NORMAL,"colA"],[tapi.VBT_NORMAL,2],[tapi.VBT_NORMAL,"colD"],[tapi.VBT_EXCEPTION,"생략"]],ev: ["소오"]},
        				{vc: [[tapi.VBT_NORMAL,"colB"],[tapi.VBT_NORMAL,"유"],[tapi.VBT_NORMAL,"colC"],[tapi.VBT_EXCEPTION,"생략"]],ev: [""]},
        				{vc: [[tapi.VBT_MIN,0],[tapi.VBT_NORMAL,3],[tapi.VBT_NORMAL,1],[tapi.VBT_EXCEPTION,"생략"]],ev: ["이정빈"]},
        				{vc: [[tapi.VBT_LOWER,-1],[tapi.VBT_NORMAL,"소오"],[tapi.VBT_NORMAL,2],[tapi.VBT_EXCEPTION,"생략"]],ev: [""]},
        				{vc: [[tapi.VBT_MAX,3],[tapi.VBT_NORMAL,"비이"],[tapi.VBT_MIN,0],[tapi.VBT_EXCEPTION,"생략"]],ev: [1]},
        				{vc: [[tapi.VBT_HIGHER,10],[tapi.VBT_NORMAL,"비이"],[tapi.VBT_MIN,0],[tapi.VBT_EXCEPTION,"생략"]],ev: [""]},
        				{vc: [[tapi.VBT_NORMAL,2],[tapi.VBT_NORMAL,200],[tapi.VBT_NORMAL,"colB"],[tapi.VBT_EXCEPTION,"생략"]],ev: ["주인희"]},
        				{vc: [[tapi.VBT_NORMAL,"EXPR(comp.parent.ds_data1.id == 'ds_data1' ? 'colA' : 'colB')"],[tapi.VBT_NORMAL,2],[tapi.VBT_NORMAL,"colD"],[tapi.VBT_EXCEPTION,"생략"]],ev: ["소오"]},
        				//[확인필요] strColID에 $0 형태의 조건표현식 사용 시 값 가져오지 못함
        				{vc: [[tapi.VBT_NORMAL,"$0"],[tapi.VBT_NORMAL,"유동규"],[tapi.VBT_NORMAL,"colC"],[tapi.VBT_NORMAL,[tc1.userdata.arrArgs]]],ev: [100]},
         				//filter 후
        				{vc: [[tapi.VBT_NORMAL,"colB"],[tapi.VBT_NORMAL,"유동규"],[tapi.VBT_NORMAL,"colC"],[tapi.VBT_EXCEPTION,"생략"]],ev: [""]},
        				{vc: [[tapi.VBT_NORMAL,"colD"],[tapi.VBT_NORMAL,"비이"],[tapi.VBT_NORMAL,"colB"],[tapi.VBT_EXCEPTION,"생략"]],ev: ["김선주"]}
        			]
        	},
        	prepare: function () {
        		var vdAdt = tapi.getVdAdaptor();

        		if(vdAdt.getIndexVC() == 13)
        			this.dataset.filter("colA != '1'");
        	},
        	run: function () {
        		var vdAdt = tapi.getVdAdaptor();
        		var taskName = vdAdt.getTaskFlowName();
        		var strColID = vdAdt.getValue(0);
        		var varCmpVal = vdAdt.getValue(1);
        		var strOutputColID = vdAdt.getValue(2);
        		var arrArgs = vdAdt.getValue(3);

        		switch(taskName) {
        		case "lookup":
        			var rtn = tc1.task['lookup'].call(this, strColID, varCmpVal, strOutputColID, arrArgs);
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
        this.TA_Dataset_M_lookup_01_v2_onload = function(obj,e)
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
        this.btn_lookup_onclick = function(obj,e)
        {
        	var strColID = "$0";
        	var varCmpVal = "유동규"
        	var strOutputColID = "colC";
        	var arrArgs = new Array("colB");
        	var rtnlookup = this.dataset.lookup(strColID, varCmpVal, strOutputColID, arrArgs);

        	this.txt_result.set_value(this.txt_result.text + "\n Col ID : " + strColID);
        	this.txt_result.set_value(this.txt_result.text + "\n ColVal : " + varCmpVal);
        	this.txt_result.set_value(this.txt_result.text + "\n OutputColID : " + strOutputColID);
        	this.txt_result.set_value(this.txt_result.text + "\n result : " + rtnlookup);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.TA_Dataset_M_lookup_01_v2_onload,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn_Combo_menu.addEventHandler("onclick",this.btn_button_menu_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_main.addEventHandler("onclick",this.btn_main_onclick,this);
            this.btn_lookup.addEventHandler("onclick",this.btn_lookup_onclick,this);
            this.btn_idx1.addEventHandler("onclick",this.btn_idx1_onclick,this);
            this.btn_idx2.addEventHandler("onclick",this.btn_idx2_onclick,this);
            this.btn_idx03.addEventHandler("onclick",this.btn_idx03_onclick,this);
        };

        this.loadIncludeScript("A_Dataset_M_lookup_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
