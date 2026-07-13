(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TA_Dataset_M_moveRow_01_v1");
            this.set_titletext("TA_Dataset_M_moveRow_01_v1");
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
            obj = new nexacro.Static("Static01","3","31","297","37",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_text("[Dataset_M_moveRow_48112_01]");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_Combo_menu","93","1","81","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("21");
            obj.set_text("◀Dataset");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_main","8","1","81","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("30");
            obj.set_text("◀◀Main");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("txt_result","6","283","298","159",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_value("//");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_clear","241","248","63","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_text("clear");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid00","5","61","295","150",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_data1");
            obj.set_formats("<Formats>\n  <Format id=\"default\">\n    <Columns>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n    </Columns>\n    <Rows>\n      <Row band=\"head\" size=\"24\"/>\n      <Row band=\"body\" size=\"24\"/>\n    </Rows>\n    <Band id=\"head\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"colA\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"colB\"/>\n      <Cell col=\"2\" disptype=\"normal\" text=\"colC\"/>\n      <Cell col=\"3\" disptype=\"normal\" text=\"colD\"/>\n      <Cell col=\"4\" disptype=\"normal\" text=\"ConstA\"/>\n      <Cell col=\"5\" disptype=\"normal\" text=\"ConstB\"/>\n      <Cell col=\"6\" disptype=\"normal\" text=\"ConstC\"/>\n    </Band>\n    <Band id=\"body\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"bind:colA\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"bind:colB\"/>\n      <Cell col=\"2\" disptype=\"normal\" text=\"bind:colC\"/>\n      <Cell col=\"3\" disptype=\"normal\" text=\"bind:colD\"/>\n      <Cell col=\"4\" disptype=\"normal\" text=\"bind:ConstA\"/>\n      <Cell col=\"5\" disptype=\"normal\" text=\"bind:ConstB\"/>\n      <Cell col=\"6\" disptype=\"normal\" text=\"bind:ConstC\"/>\n    </Band>\n  </Format>\n</Formats>\n");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.getSetter("useinputpanel").set("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"colA\"/><Cell col=\"1\" text=\"colB\"/><Cell col=\"2\" text=\"colC\"/><Cell col=\"3\" text=\"colD\"/><Cell col=\"4\" text=\"ConstA\"/><Cell col=\"5\" text=\"ConstB\"/><Cell col=\"6\" text=\"ConstC\"/></Band><Band id=\"body\"><Cell edittype=\"text\" text=\"bind:colA\"/><Cell col=\"1\" edittype=\"text\" text=\"bind:colB\"/><Cell col=\"2\" edittype=\"text\" text=\"bind:colC\"/><Cell col=\"3\" edittype=\"text\" text=\"bind:colD\"/><Cell col=\"4\" edittype=\"text\" text=\"bind:ConstA\"/><Cell col=\"5\" edittype=\"text\" text=\"bind:ConstB\"/><Cell col=\"6\" edittype=\"text\" text=\"bind:ConstC\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_moveRow","136","248","93","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_text("moveRow()");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_nOldRow","93","216","51","26",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_nNewRow","242","216","58","26",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_value("3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","10","219","75","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_text("nOldRow");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static02","150","219","79","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_text("nNewRow");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00","314","4","107","36",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Embedded Test");
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
        this.addIncludeScript("A_Dataset_M_moveRow_01.xfdl","lib::libCommon.xjs");
        this.addIncludeScript("A_Dataset_M_moveRow_01.xfdl","libevent::event.util.xjs");
        this.registerScript("A_Dataset_M_moveRow_01.xfdl", function(nexacro, system, trace, environment, application) {
        /***********************************************************************
        * 설명      : Dataset moveRow Method
        ***********************************************************************
        *     수정일     작성자   내용
        ***********************************************************************
        *     2019.02.14  김형철   최초 작성
        	  2019.02.18  김형철   2019.02.15 엔진 적용
        	  2019.02.19  김형철   2019.02.19 엔진 적용
        	  2020.04.01  이재환	undefined, null일때 기대값 수정
        ***********************************************************************
        */

        this.executeIncludeScript("lib::libCommon.xjs"); /*include "lib::libCommon.xjs"*/;
        this.executeIncludeScript("libevent::event.util.xjs"); /*include "libevent::event.util.xjs"*/;
        var tapi = this.gfnLoadTestAPI(0.71);

        /***********************************************************************
        * 01: Form 변수 선언부
        ***********************************************************************/
        this.dataset = this.ds_data1;
        this.grid = this.Grid00;
        /***********************************************************************
        * 02 : Test Case, Validator, Validation Case 선언부
        ***********************************************************************/
        var tc1  = {
        	description: "Dataset moveRow Method Test",
        	//-------------- beign user defined section
        	userdata : {
        		eventChkList1 : [],	//onrowsetchanged 확인용
        		result : [],
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

        tc1.task['moveRow'] = function(nOldRow, nNewRow) {
        	var result = [];

        	var getPreRowType = this.dataset.getRowType(nOldRow);
        	var rtnMoveRow = this.dataset.moveRow(nOldRow, nNewRow);
        	var getPostRowType = this.dataset.getRowType(nNewRow);

        	result.push(getPreRowType);
        	result.push(rtnMoveRow);
        	result.push(getPostRowType);

        	return result;
        };

        tc1.task['eventChk'] = function() {
        	var result = [];

        	result.push(tc1.userdata.eventChkList1);

        	return result;
        };

        tc1.task['getCellText'] = function(nOldRow, nNewRow){
        	var result = [];

        	if(nOldRow == -1 || nOldRow == undefined || nOldRow == null) nOldRow = 0;
        	if(nOldRow == 5) nOldRow = 4;
        	if(nNewRow == -1 || nNewRow == undefined || nNewRow == null) nNewRow = 0;
        	if(nNewRow == 5) nNewRow = 4;

        	result.push(this.grid.getCellText(nOldRow, 1));
        	result.push(this.grid.getCellText(nNewRow, 1));

        	return result;
        }

        tc1.checker['equal'] = function(alResultValues, alExpectedValues) {
        	var chk = true;
        	var chk = tapi.checkEqual(this, alResultValues, alExpectedValues);

        	return chk;
        };

        tc1.validator ['tc1_vd1'] = {
        	description: "nOldRow 파라미터, nNewRow 파라미터 조합",
        	autoTaskFlow : ["moveRow", "eventChk", "getCellText"],
        	vcinfo : {
        		argType : tapi.VCT_ARG_LIST,
        		args : [
        				//vc : nOldRow, nNewRow, ev : 이전 getRowType, 리턴값, 이후 getRowType, 이벤트정보, getCellText
        				{vc: [[tapi.VBT_MIN,0], [tapi.VBT_NORMAL,3]],  ev: [1,3,1,4,"onrowsetchanged","[object Dataset]","[object Dataset]",32,0,"주인희","유동규"]},
        				{vc: [[tapi.VBT_LOWER,-1], [tapi.VBT_NORMAL,3]],  ev: [0,-1,1,"","주인희","유동규"]},
        				{vc: [[tapi.VBT_HIGHER,5], [tapi.VBT_NORMAL,3]],  ev: [0,-1,1,"","김선주","유동규"]},
        				{vc: [[tapi.VBT_MAX,4], [tapi.VBT_NORMAL,3]],  ev: [1,3,1,2,"onrowsetchanged","[object Dataset]","[object Dataset]",32,3,"유동규","김선주"]},
        				{vc: [[tapi.VBT_NORMAL,2], [tapi.VBT_NORMAL,3]],  ev: [1,3,1,2,"onrowsetchanged","[object Dataset]","[object Dataset]",32,2,"김선주","이정빈"]},
        				{vc: [[tapi.VBT_UNDEFINED,undefined], [tapi.VBT_NORMAL,3]],  ev: [1,3,1,4,"onrowsetchanged","[object Dataset]","[object Dataset]",32,0,"고준영","주인희"]},
        				{vc: [[tapi.VBT_EXCEPTION,null], [tapi.VBT_NORMAL,3]],  ev: [1,3,1,4,"onrowsetchanged","[object Dataset]","[object Dataset]",32,0,"김선주","고준영"]},
         				{vc: [[tapi.VBT_NORMAL,2], [tapi.VBT_MIN,0]],  ev: [1,0,1,3,"onrowsetchanged","[object Dataset]","[object Dataset]",32,0,"이정빈","주인희"]},
         				{vc: [[tapi.VBT_NORMAL,2], [tapi.VBT_LOWER,-1]],  ev: [1,-1,0,"","이정빈","주인희"]},
         				{vc: [[tapi.VBT_NORMAL,2], [tapi.VBT_HIGHER,5]],  ev: [1,-1,0,"","이정빈","유동규"]},
         				{vc: [[tapi.VBT_NORMAL,2], [tapi.VBT_MAX,4]],  ev: [1,4,1,3,"onrowsetchanged","[object Dataset]","[object Dataset]",32,2,"고준영","이정빈"]},
         				{vc: [[tapi.VBT_NORMAL,2], [tapi.VBT_NORMAL,3]],  ev: [1,3,1,2,"onrowsetchanged","[object Dataset]","[object Dataset]",32,2,"유동규","고준영"]},
         				{vc: [[tapi.VBT_NORMAL,2], [tapi.VBT_UNDEFINED,undefined]],  ev: [1,0,1,3,"onrowsetchanged","[object Dataset]","[object Dataset]",32,0,"김선주","유동규"]},
         				{vc: [[tapi.VBT_NORMAL,2], [tapi.VBT_EXCEPTION,null]],  ev: [1,0,1,3,"onrowsetchanged","[object Dataset]","[object Dataset]",32,0,"주인희","김선주"]},
        		]
        	},
        	prepare: function () {
        	},
        	run: function () {
        		var vdAdt = tapi.getVdAdaptor();
        		var taskName = vdAdt.getTaskFlowName();

        		var rtn;
        		var nOldRow = vdAdt.getValue(0);
        		var nNewRow = vdAdt.getValue(1);

        		switch(taskName) {
        		case "moveRow":
        			rtn = tc1.task['moveRow'].call(this, nOldRow, nNewRow);
        			tc1.userdata.result.push(rtn);
        			break;
        		case "eventChk":
        			rtn = tc1.task['eventChk'].call(this);
        			tc1.userdata.result.push(rtn);
        			break;
        		case "getCellText":
        			rtn = tc1.task['getCellText'].call(this, nOldRow, nNewRow);
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
        this.TA_Dataset_M_moveRow_01_v1_onload = function(obj,e)
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
        	tc1.userdata.eventChkList1.push(e.count);
        	tc1.userdata.eventChkList1.push(e.eventid);
        	tc1.userdata.eventChkList1.push(e.fromobject);
        	tc1.userdata.eventChkList1.push(e.fromreferenceobject);
        	tc1.userdata.eventChkList1.push(e.reason);
        	tc1.userdata.eventChkList1.push(e.row);
        };

        /***********************************************************************
        * 07 : 사용자 정의 함수 선언부
        ***********************************************************************/
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.TA_Dataset_M_moveRow_01_v1_onload,this);
            this.btn_Combo_menu.addEventHandler("onclick",this.btn_button_menu_onclick,this);
            this.btn_main.addEventHandler("onclick",this.btn_main_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_moveRow.addEventHandler("onclick",this.btn_moveRow_onclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
        };

        this.loadIncludeScript("A_Dataset_M_moveRow_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
