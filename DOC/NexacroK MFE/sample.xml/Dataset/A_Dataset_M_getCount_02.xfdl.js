(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TA_Dataset_M_getCount_01_v2");
            this.set_titletext("TA_Dataset_M_getCount_01_v2");
            this.getSetter("classname").set("23711_Buttoncssimage_01");
            this.getSetter("inheritanceid").set("");
            this.getSetter("position").set("absolute");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(440,560);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.DataObject("DataObject00", this);
            obj._setContents({
              "dataset" : [
                {
                  "colA" : "1",
                  "colB" : "유동규",
                  "colC" : 100,
                  "colD" : "투우",
                  "123" : 1,
                  "4a" : 2
                },
                {
                  "colA" : "1",
                  "colC" : 200,
                  "colD" : "비이",
                  "123" : 1,
                  "4a" : 2
                },
                    {
                  "colA" : "2",
                  "colC" : 200,
                  "colD" : "소오",
                  "123" : 1,
                  "4a" : 2
                },
                    {
                  "colA" : "3",
                  "colB" : "이정빈",
                  "colC" : 300,
                  "colD" : "프트",
                    "123" : 1,
                  "4a" : 2
                },
                {
                  "colA" : "4",
                  "colB" : "김선주",
                  "colC" : 400,
                  "colD" : "비이",
                  "123" : 1,
                  "4a" : 2
                }
              ]
            });
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("ds_data1", this);
            obj.set_binddataobject("DataObject00");
            obj.set_dataobjectpath("$.dataset[*]");
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents({"ColumnInfo" : {"ConstColumn" : [{"id" : "ConstA","size" : "30","type" : "STRING","value" : "A"},{"id" : "ConstB","size" : "30","type" : "STRING","value" : "B"},{"id" : "ConstC","size" : "30","type" : "STRING","value" : "C"}],"Column" : [{"datapath" : "@.colA","id" : "colA","size" : "256","type" : "STRING"},{"datapath" : "@.colB","id" : "colB","size" : "256","type" : "STRING"},{"datapath" : "@.colC","id" : "colC","size" : "256","type" : "INT"},{"datapath" : "@.colD","id" : "colD","size" : "256","type" : "STRING"},{"datapath" : "@.123","id" : "123","size" : "256","type" : "STRING"},{"datapath" : "@.4a","id" : "4a","size" : "256","type" : "STRING"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Button("btn00","314","4","107","36",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Embedded Test");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static01","3","31","301","37",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_text("[Dataset_M_getCount_48161_01]");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_Combo_menu","93","1","81","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("2");
            obj.set_text("◀Dataset");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("txt_result","6","323","298","119",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("3");
            obj.set_text("//");
            obj.set_value("//");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_clear","241","280","63","35",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("4");
            obj.set_text("clear");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_main","8","1","81","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("5");
            obj.set_text("◀◀Main");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_getCount01","150","216","154","29",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("6");
            obj.set_text("getCount(strColID)");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","10","219","47","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("7");
            obj.set_text("ID");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("txtColID","66","216","80","26",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("8");
            obj.set_value("colA");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_filter","174","280","59","37",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("9");
            obj.set_text("Filter");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static02","10","251","47","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("10");
            obj.set_text("Index");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("txtColIndex","66","248","80","26",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("11");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_getCount02","150","248","154","29",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("12");
            obj.set_text("getCount(nColIdx)");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid00","6","61","664","236",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_data1");
            obj.set_formats("<Formats>\n  <Format id=\"default\">\n    <Columns>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n    </Columns>\n    <Rows>\n      <Row band=\"head\" size=\"24\"/>\n      <Row band=\"body\" size=\"24\"/>\n    </Rows>\n    <Band id=\"head\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"colA\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"colB\"/>\n      <Cell col=\"2\" disptype=\"normal\" text=\"colC\"/>\n      <Cell col=\"3\" disptype=\"normal\" text=\"colD\"/>\n      <Cell col=\"4\" disptype=\"normal\" text=\"ConstA\"/>\n      <Cell col=\"5\" disptype=\"normal\" text=\"ConstB\"/>\n      <Cell col=\"6\" disptype=\"normal\" text=\"ConstC\"/>\n    </Band>\n    <Band id=\"body\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"bind:colA\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"bind:colB\"/>\n      <Cell col=\"2\" disptype=\"normal\" text=\"bind:colC\"/>\n      <Cell col=\"3\" disptype=\"normal\" text=\"bind:colD\"/>\n      <Cell col=\"4\" disptype=\"normal\" text=\"bind:ConstA\"/>\n      <Cell col=\"5\" disptype=\"normal\" text=\"bind:ConstB\"/>\n      <Cell col=\"6\" disptype=\"normal\" text=\"bind:ConstC\"/>\n    </Band>\n  </Format>\n</Formats>\n");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("13");
            obj.getSetter("useinputpanel").set("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"50\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"colA\"/><Cell col=\"1\" text=\"colB\"/><Cell col=\"2\" text=\"colC\"/><Cell col=\"3\" text=\"colD\"/><Cell col=\"4\" text=\"123\"/><Cell col=\"5\" text=\"4a\"/><Cell col=\"6\" text=\"ConstA\"/><Cell col=\"7\" text=\"ConstB\"/><Cell col=\"8\" text=\"ConstC\"/></Band><Band id=\"body\"><Cell subsumtext=\"test\" text=\"bind:colA\"/><Cell col=\"1\" subsumtext=\"test\" text=\"bind:colB\"/><Cell col=\"2\" text=\"bind:colC\"/><Cell col=\"3\" text=\"bind:colD\"/><Cell col=\"4\" subsumtext=\"test\" text=\"bind:123\"/><Cell col=\"5\" subsumtext=\"test\" text=\"bind:4a\"/><Cell col=\"6\" subsumtext=\"test\" text=\"bind:ConstA\"/><Cell col=\"7\" subsumtext=\"test\" text=\"bind:ConstB\"/><Cell col=\"8\" subsumtext=\"test\" text=\"bind:ConstC\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_keystring","93","184","110","26",null,null,null,null,null,null,this);
            obj.set_enable("false");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("14");
            obj.set_value("G:-colA");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static04","10","187","94","21",null,null,null,null,null,null,this);
            obj.set_enable("false");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("15");
            obj.set_text("keystring");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_set_keystring","217","184","35","27",null,null,null,null,null,null,this);
            obj.set_enable("false");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("16");
            obj.set_text("set");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_get_keystring","265","184","35","27",null,null,null,null,null,null,this);
            obj.set_enable("false");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("17");
            obj.set_text("get");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_getCount00","32","286","132","29",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("18");
            obj.set_text("getCount()");
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
        this.addIncludeScript("A_Dataset_M_getCount_02.xfdl","lib::libCommon.xjs");
        this.addIncludeScript("A_Dataset_M_getCount_02.xfdl","libevent::event.util.xjs");
        this.registerScript("A_Dataset_M_getCount_02.xfdl", function(nexacro, system, trace, environment, application) {
        /***********************************************************************
        * 설명      : Dataset getCount Method
        ***********************************************************************
        *     수정일     작성자   내용
        ***********************************************************************
        *     2020.05.27  함경곤   DataObject 내용 추가
        ***********************************************************************
        */

        this.executeIncludeScript("lib::libCommon.xjs"); /*include "lib::libCommon.xjs"*/;
        this.executeIncludeScript("libevent::event.util.xjs"); /*include "libevent::event.util.xjs"*/;
        var tapi = this.gfnLoadTestAPI(0.71);
        this.dev_status = tapi.DEV_HOLD;
        /***********************************************************************
        * 01: Form 변수 선언부
        ***********************************************************************/
        this.dataset = this.ds_data1;

        /***********************************************************************
        * 02 : Test Case, Validator, Validation Case 선언부
        ***********************************************************************/
        var tc1  = {
        	description: "Dataset getCount Method Test",
        	//-------------- beign user defined section
        	userdata : {
        		result : [],					//task 리턴값
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

        tc1.task['getCount'] = function(strColID, nStartIdx , nEndIdx) {
        	var result = [];
        	var rtngetCount;

        	if(nStartIdx == "생략" && nEndIdx == "생략")
        		rtngetCount = this.dataset.getCount(strColID);
        	else if(nEndIdx == "생략")
        		rtngetCount = this.dataset.getCount(strColID, nStartIdx);
        	else
        		rtngetCount = this.dataset.getCount(strColID, nStartIdx, nEndIdx);

        	result.push(rtngetCount);

        	return result;
        };

        tc1.checker['equal'] = function(alResultValues, alExpectedValues) {
        	var chk = true;
        	var chk = tapi.checkEqual(this, alResultValues, alExpectedValues);

        	return chk;
        };

        tc1.validator ['tc1_vd1'] = {
        	description: "getCount(strColID, nStartIdx , nEndIdx) 수행",
        	autoTaskFlow : ["getCount"],
        	vcinfo : {
        		argType : tapi.VCT_ARG_LIST,
        		args : [
        				//vc : strColID, nStartIdx , nEndIdx, ev : 리턴값
        				{vc: [[tapi.VBT_NORMAL,4],[tapi.VBT_EXCEPTION,"생략"],[tapi.VBT_EXCEPTION,"생략"]],ev: [5]},
        				{vc: [[tapi.VBT_NORMAL,4],[tapi.VBT_MIN,0],[tapi.VBT_EXCEPTION,"생략"]],ev: [5]},
        			    {vc: [[tapi.VBT_NORMAL,4],[tapi.VBT_MIN,0],[tapi.VBT_MAX,5]],ev: [5]},
        				{vc: [[tapi.VBT_MIN,0],[tapi.VBT_MIN,0],[tapi.VBT_MAX,5]],ev: [5]},
        				{vc: [[tapi.VBT_MAX,8],[tapi.VBT_MIN,0],[tapi.VBT_MAX,5]],ev: [5]},
        				{vc: [[tapi.VBT_LOWER,-1],[tapi.VBT_MIN,0],[tapi.VBT_MAX,5]],ev: [0]},
        				{vc: [[tapi.VBT_HIGHER,9],[tapi.VBT_MIN,0],[tapi.VBT_MAX,5]],ev: [0]},
        				//[확인필요] strColID가 0일때 nStartIdx , nEndIdx가 설정값 무시됨
        				{vc: [[tapi.VBT_NORMAL,0],[tapi.VBT_NORMAL,2],[tapi.VBT_MAX,5]],ev: [3]},
        				{vc: [[tapi.VBT_NORMAL,"colA"],[tapi.VBT_MAX,2],[tapi.VBT_MAX,5]],ev: [3]},
        				{vc: [[tapi.VBT_NORMAL,"colA"],[tapi.VBT_MAX,4],[tapi.VBT_MAX,5]],ev: [1]},
        				//데이터 없는경우 확인 용
        				{vc: [[tapi.VBT_NORMAL,"colB"],[tapi.VBT_LOWER,-1],[tapi.VBT_MAX,5]],ev: [4]},
        				{vc: [[tapi.VBT_NORMAL,"colA"],[tapi.VBT_HIGHER,5],[tapi.VBT_MAX,5]],ev: [0]},
        				{vc: [[tapi.VBT_NORMAL,"colA"],[tapi.VBT_EXCEPTION,undefined],[tapi.VBT_MAX,5]],ev: [5]},
        				{vc: [[tapi.VBT_NORMAL,"colA"],[tapi.VBT_MIN,0],[tapi.VBT_EXCEPTION,null]],ev: [5]},
        				{vc: [[tapi.VBT_NORMAL,"colA"],[tapi.VBT_MIN,0],[tapi.VBT_MIN,0]],ev: [0]},
        				{vc: [[tapi.VBT_NORMAL,"colA"],[tapi.VBT_MIN,0],[tapi.VBT_NORMAL,3]],ev: [3]},
        				{vc: [[tapi.VBT_NORMAL,"colA"],[tapi.VBT_MIN,0],[tapi.VBT_LOWER,-1]],ev: [5]},
        				{vc: [[tapi.VBT_NORMAL,"colA"],[tapi.VBT_MIN,0],[tapi.VBT_HIGHER,6]],ev: [5]},
        				//filter 후
         				{vc: [[tapi.VBT_NORMAL,"ConstA"],[tapi.VBT_MIN,0],[tapi.VBT_MAX,5]],ev: [3]},
         				//grouping 후
         				{vc: [[tapi.VBT_NORMAL,"ConstB"],[tapi.VBT_MIN,0],[tapi.VBT_MAX,5]],ev: [5]},
        			]
        	},
        	prepare: function () {
         		var vdAdt = tapi.getVdAdaptor();

         		if(vdAdt.getIndexVC() == 18)
         			this.dataset.filter("colC != '200'");
         		if(vdAdt.getIndexVC() == 19)
         		{
         			this.dataset.filter("");
         			this.dataset.set_keystring("G:+colC");
         		}
        	},
        	run: function () {
        		var vdAdt = tapi.getVdAdaptor();
        		var taskName = vdAdt.getTaskFlowName();
        		var strColID = vdAdt.getValue(0);
        		var nStartIdx = vdAdt.getValue(1);
        		var nEndIdx = vdAdt.getValue(2);

        		switch(taskName) {
        		case "getCount":
        			var rtn = tc1.task['getCount'].call(this, strColID, nStartIdx, nEndIdx);
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
        this.TA_Dataset_M_getCount_01_v2_onload = function(obj,e)
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
            this.addEventHandler("onload",this.TA_Dataset_M_getCount_01_v2_onload,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn_Combo_menu.addEventHandler("onclick",this.btn_button_menu_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_main.addEventHandler("onclick",this.btn_main_onclick,this);
            this.btn_getCount01.addEventHandler("onclick",this.btn_getCount01_onclick,this);
            this.btn_filter.addEventHandler("onclick",this.btn_filter_onclick,this);
            this.btn_getCount02.addEventHandler("onclick",this.btn_getCount02_onclick,this);
            this.btn_set_keystring.addEventHandler("onclick",this.btn_set_keystring_onclick,this);
            this.btn_get_keystring.addEventHandler("onclick",this.btn_get_keystring_onclick,this);
            this.btn_getCount00.addEventHandler("onclick",this.btn_getCount00_onclick,this);
        };

        this.loadIncludeScript("A_Dataset_M_getCount_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
