(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TA_Dataset_M_updateConstColID_01_v2");
            this.set_titletext("TA_Dataset_M_updateConstColID_01_v2");
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

            obj = new nexacro.Static("Static01","3","31","297","37",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_text("[Dataset_M_updateConstColID_48095_01]");
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

            obj = new nexacro.TextArea("txt_result","6","351","298","91",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("4");
            obj.set_value("//");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_clear","241","304","63","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("5");
            obj.set_text("clear");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid00","5","61","299","99",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_data1");
            obj.set_formats("<Formats>\n  <Format id=\"default\">\n    <Columns>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n    </Columns>\n    <Rows>\n      <Row band=\"head\" size=\"24\"/>\n      <Row band=\"body\" size=\"24\"/>\n    </Rows>\n    <Band id=\"head\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"colA\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"colB\"/>\n      <Cell col=\"2\" disptype=\"normal\" text=\"colC\"/>\n      <Cell col=\"3\" disptype=\"normal\" text=\"colD\"/>\n      <Cell col=\"4\" disptype=\"normal\" text=\"ConstA\"/>\n      <Cell col=\"5\" disptype=\"normal\" text=\"ConstB\"/>\n      <Cell col=\"6\" disptype=\"normal\" text=\"ConstC\"/>\n    </Band>\n    <Band id=\"body\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"bind:colA\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"bind:colB\"/>\n      <Cell col=\"2\" disptype=\"normal\" text=\"bind:colC\"/>\n      <Cell col=\"3\" disptype=\"normal\" text=\"bind:colD\"/>\n      <Cell col=\"4\" disptype=\"normal\" text=\"bind:ConstA\"/>\n      <Cell col=\"5\" disptype=\"normal\" text=\"bind:ConstB\"/>\n      <Cell col=\"6\" disptype=\"normal\" text=\"bind:ConstC\"/>\n    </Band>\n  </Format>\n</Formats>\n");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("6");
            obj.getSetter("useinputpanel").set("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"colA\"/><Cell col=\"1\" disptype=\"normal\" text=\"colB\"/><Cell col=\"2\" disptype=\"normal\" text=\"colC\"/><Cell col=\"3\" disptype=\"normal\" text=\"colD\"/><Cell col=\"4\" disptype=\"normal\" text=\"ConstA\"/><Cell col=\"5\" disptype=\"normal\" text=\"ConstB\"/><Cell col=\"6\" disptype=\"normal\" text=\"ConstC\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:colA\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:colB\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:colC\"/><Cell col=\"3\" disptype=\"normal\" text=\"bind:colD\"/><Cell col=\"4\" disptype=\"normal\" text=\"bind:ConstA\"/><Cell col=\"5\" disptype=\"normal\" text=\"bind:ConstB\"/><Cell col=\"6\" disptype=\"normal\" text=\"bind:ConstC\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","10","171","58","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("7");
            obj.set_text("nCol");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static02","10","203","90","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("8");
            obj.set_text("strNewColID");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_nCol","101","168","83","26",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("9");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_strNewColID","101","200","83","26",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("10");
            obj.set_value("AAA");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static03","10","243","86","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("11");
            obj.set_text("strOldColID");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static04","10","275","94","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("12");
            obj.set_text("strNewColID");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_strOldColID","101","240","83","26",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("13");
            obj.set_value("ConstC");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_strNewColID1","101","272","83","26",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("14");
            obj.set_value("BBB");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_updateConstColID1","196","168","108","56",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("15");
            obj.set_text("updateConstColID()");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_updateConstColID2","196","240","108","56",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("16");
            obj.set_text("updateConstColID()");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static05","10","315","58","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("17");
            obj.set_text("nColIdx");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_nColIdx","69","312","42","26",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("18");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_getConstColID","116","307","100","37",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("19");
            obj.set_text("getConstColID()");
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
        this.addIncludeScript("A_Dataset_M_updateConstColID_01.xfdl","lib::libCommon.xjs");
        this.addIncludeScript("A_Dataset_M_updateConstColID_01.xfdl","libevent::event.util.xjs");
        this.registerScript("A_Dataset_M_updateConstColID_01.xfdl", function(nexacro, system, trace, environment, application) {
        /***********************************************************************
        * 설명      : Dataset updateConstColID Method
        ***********************************************************************
        *     수정일     작성자   내용
        ***********************************************************************
        *     2019.03.07  김형철   최초 작성
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
        this.grid = this.Grid00;
        /***********************************************************************
        * 02 : Test Case, Validator, Validation Case 선언부
        ***********************************************************************/
        var tc1  = {
        	description: "Dataset updateConstColID Method Test",
        	//-------------- beign user defined section
        	userdata : {
        		result : [],			//task 리턴값
        		eventChkList1 : [],		//onrowsetchanged 확인용
        	},
        	//--------------  end  user defined section
        	initialize: function() {
        		this.dataset.addEventHandler("onrowsetchanged", this.ds_data1_onrowsetchanged, this);
        	},
        	checker : {},
        	validator : {},
        	task : {},
        	finalize : function() {
        	}
        };

        tc1.task['updateConstColID'] = function(varCol, strNewColID) {
        	var result = [];
        	var rtnupdateConstColID = this.dataset.updateConstColID(varCol, strNewColID);

        	result.push(rtnupdateConstColID);

        	return result;
        };

        tc1.task['eventChk'] = function() {
        	var result = [];

        	result.push(tc1.userdata.eventChkList1);

        	return result;
        };

        tc1.task['getConstColID'] = function(nColIdx) {
        	var result = [];

        	if(nColIdx == "NewColumn03") nColIdx = 2;
        	if(nColIdx == "test") nColIdx = -1;

        	var getConstColID = this.dataset.getConstColID(nColIdx);

        	result.push(getConstColID);

        	return result;
        };

        tc1.checker['equal'] = function(alResultValues, alExpectedValues) {
        	var chk = true;
        	var chk = tapi.checkEqual(this, alResultValues, alExpectedValues);

        	return chk;
        };

        tc1.validator ['tc1_vd1'] = {
        	description: "updateConstColID(varCol, strNewColID) 수행",
        	autoTaskFlow : ["updateConstColID", "eventChk", "getConstColID"],
        	vcinfo : {
        		argType : tapi.VCT_ARG_LIST,
        		args : [
        				//vc : varCol, strNewColID, ev : 리턴값, 이벤트정보, getConstColID
        				{vc: [[tapi.VBT_LOWER,-1],[tapi.VBT_NORMAL,"NewColumn00"]],   ev: [-1,"",""]},
        				{vc: [[tapi.VBT_MIN,0],[tapi.VBT_NORMAL,"NewColumn01"]],   ev: [0,"onrowsetchanged",34,"NewColumn01"]},
        				{vc: [[tapi.VBT_HIGHER,3],[tapi.VBT_NORMAL,"NewColumn02"]],   ev: [-1,"",""]},
        				{vc: [[tapi.VBT_MAX,2],[tapi.VBT_NORMAL,"NewColumn03"]],   ev: [2,"onrowsetchanged",34,"NewColumn03"]},
        			    {vc: [[tapi.VBT_NORMAL,1],[tapi.VBT_NORMAL,"NewColumn04"]],   ev: [1,"onrowsetchanged",34,"NewColumn04"]},
        				{vc: [[tapi.VBT_NORMAL,"NewColumn03"],[tapi.VBT_NORMAL,"NewColumn05"]],   ev: [2,"onrowsetchanged",34,"NewColumn05"]},
        				{vc: [[tapi.VBT_EXCEPTION,"test"],[tapi.VBT_NORMAL,"NewColumn06"]],   ev: [-1,"",""]},
        				//[확인필요] nCol로 null, undefined 설정 시 0으로 안됨, CHM에 "매개변수인 nCol 에 "undefined, null" 등의 "NaN" 값을 입력하면 ECMA의 정수 변환 규칙에 따라 "0" 이 됩니다."
        				{vc: [[tapi.VBT_EXCEPTION,undefined],[tapi.VBT_NORMAL,"NewColumn07"]],   ev: [0,"onrowsetchanged",34,"NewColumn07"]},
        				{vc: [[tapi.VBT_EXCEPTION,null],[tapi.VBT_NORMAL,"NewColumn08"]],   ev: [0,"onrowsetchanged",34,"NewColumn08"]},
        			]
        	},
        	prepare: function () {
        	},
        	run: function () {
        		var vdAdt = tapi.getVdAdaptor();
        		var taskName = vdAdt.getTaskFlowName();
        		var varCol = vdAdt.getValue(0);
        		var strNewColID = vdAdt.getValue(1);

        		switch(taskName) {
        		case "updateConstColID":
        			var rtn = tc1.task['updateConstColID'].call(this, varCol, strNewColID);
        			tc1.userdata.result.push(rtn);
        			break;
        		case "eventChk":
        			var rtn = tc1.task['eventChk'].call(this);
        			tc1.userdata.result.push(rtn);
        			break;
        		case "getConstColID":
        			var rtn = tc1.task['getConstColID'].call(this, varCol);
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
        this.TA_Dataset_M_updateConstColID_01_v2_onload = function(obj,e)
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
        * onrowsetchanged
        ***********************************************************************/
        this.ds_data1_onrowsetchanged = function(obj,e)
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
            this.addEventHandler("onload",this.TA_Dataset_M_updateConstColID_01_v2_onload,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn_Combo_menu.addEventHandler("onclick",this.btn_button_menu_onclick,this);
            this.btn_main.addEventHandler("onclick",this.btn_main_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.edt_nCol.addEventHandler("onchanged",this.edt_nCol_onchanged,this);
            this.btn_updateConstColID1.addEventHandler("onclick",this.btn_updateConstColID1_onclick,this);
            this.btn_updateConstColID2.addEventHandler("onclick",this.btn_updateConstColID2_onclick,this);
            this.btn_getConstColID.addEventHandler("onclick",this.btn_getConstColID_onclick,this);
        };

        this.loadIncludeScript("A_Dataset_M_updateConstColID_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
