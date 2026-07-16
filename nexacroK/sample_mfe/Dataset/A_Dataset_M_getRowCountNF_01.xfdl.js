(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TA_Dataset_M_getRowCountNF_01_v2");
            this.set_titletext("TA_Dataset_M_getRowCountNF_01_v2");
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
            obj.set_text("[Dataset_M_getRowCountNF_48140_01]");
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

            obj = new nexacro.TextArea("txt_result","6","312","298","130",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("4");
            obj.set_value("//");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_clear","241","280","63","27",null,null,null,null,null,null,this);
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"colA\"/><Cell col=\"1\" text=\"colB\"/><Cell col=\"2\" text=\"colC\"/><Cell col=\"3\" text=\"colD\"/><Cell col=\"4\" text=\"ConstA\"/><Cell col=\"5\" text=\"ConstB\"/><Cell col=\"6\" text=\"ConstC\"/></Band><Band id=\"body\"><Cell text=\"bind:colA\"/><Cell col=\"1\" text=\"bind:colB\"/><Cell col=\"2\" text=\"bind:colC\"/><Cell col=\"3\" text=\"bind:colD\"/><Cell col=\"4\" text=\"bind:ConstA\"/><Cell col=\"5\" text=\"bind:ConstB\"/><Cell col=\"6\" text=\"bind:ConstC\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_addRow","211","249","93","25",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("7");
            obj.set_text("addRow()");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_deleteRow","117","249","90","25",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("8");
            obj.set_text("deleteRow()");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static03","10","251","58","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("9");
            obj.set_text("nRow");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_nRow","64","248","47","26",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("10");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_keystring","13","281","90","25",null,null,null,null,null,null,this);
            obj.set_enable("false");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("11");
            obj.set_text("keystring set");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_filterstr","117","281","90","25",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("12");
            obj.set_text("filterstr set");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_getRowCountNF","64","203","238","35",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("13");
            obj.set_text("getRowCountNF()");
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
        this.addIncludeScript("A_Dataset_M_getRowCountNF_01.xfdl","lib::libCommon.xjs");
        this.addIncludeScript("A_Dataset_M_getRowCountNF_01.xfdl","libevent::event.util.xjs");
        this.registerScript("A_Dataset_M_getRowCountNF_01.xfdl", function(nexacro, system, trace, environment, application) {
        /***********************************************************************
        * 설명      : Dataset getRowCountNF Method
        ***********************************************************************
        *     수정일     작성자   내용
        ***********************************************************************
        *     2019.03.15  김형철   최초 작성
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
        	description: "Dataset getRowCountNF Method Test",
        	//-------------- beign user defined section
        	userdata : {
        		result : [],			//task 리턴값
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

        tc1.task['getRowCountNF'] = function() {
        	var result = [];
        	var rtnggetRowCountNF = this.dataset.getRowCountNF();

        	result.push(rtnggetRowCountNF);

        	return result;
        };

        tc1.checker['equal'] = function(alResultValues, alExpectedValues) {
        	var chk = true;
        	var chk = tapi.checkEqual(this, alResultValues, alExpectedValues);

        	return chk;
        };

        tc1.validator ['tc1_vd1'] = {
        	description: "getRowCountNF() 수행",
        	autoTaskFlow : ["getRowCountNF"],
        	vcinfo : {
        		argType : tapi.VCT_ARG_NONE,
        	},
        	prepare: function () {
        		tc1.userdata.result = [];
        	},
        	run: function () {
        		var vdAdt = tapi.getVdAdaptor();
        		var taskName = vdAdt.getTaskFlowName();

        		switch(taskName) {
        		case "getRowCountNF":
        			var rtn = tc1.task['getRowCountNF'].call(this);
        			tc1.userdata.result.push(rtn);
        			break;
        		}

        		return tc1.userdata.result;
        	},
        	check: function (resultValue) {
        		// ev : getRowcount 리턴값
        		var expectedValue = [5]
        		var chk = tc1.checker['equal'].call(this, resultValue, expectedValue);
        		return chk;
        	},
        	teardown: function () {
        	}
        };

        tc1.validator ['tc1_vd2'] = {
        	description: "deleteRow 후 getRowCountNF() 수행",
        	autoTaskFlow : ["getRowCountNF"],
        	vcinfo : {
        		argType : tapi.VCT_ARG_NONE,
        	},
        	prepare: function () {
        		tc1.userdata.result = [];
        		var rtn = this.dataset.deleteRow(0);
        		tc1.userdata.result.push(rtn);
        	},
        	run: function () {
        		var vdAdt = tapi.getVdAdaptor();
        		var taskName = vdAdt.getTaskFlowName();

        		switch(taskName) {
        		case "getRowCountNF":
        			var rtn = tc1.task['getRowCountNF'].call(this);
        			tc1.userdata.result.push(rtn);
        			break;
        		}

        		return tc1.userdata.result;
        	},
        	check: function (resultValue) {
        		// ev : deleteRow 리턴값, getRowcount 리턴값
        		var expectedValue = [true, 4]
        		var chk = tc1.checker['equal'].call(this, resultValue, expectedValue);
        		return chk;
        	},
        	teardown: function () {
        	}
        };

        tc1.validator ['tc1_vd3'] = {
        	description: "addRow 후 getRowCountNF() 수행",
        	autoTaskFlow : ["getRowCountNF"],
        	vcinfo : {
        		argType : tapi.VCT_ARG_NONE,
        	},
        	prepare: function () {
        		tc1.userdata.result = [];
        		var rtn = this.dataset.addRow();
        		tc1.userdata.result.push(rtn);
        	},
        	run: function () {
        		var vdAdt = tapi.getVdAdaptor();
        		var taskName = vdAdt.getTaskFlowName();

        		switch(taskName) {
        		case "getRowCountNF":
        			var rtn = tc1.task['getRowCountNF'].call(this);
        			tc1.userdata.result.push(rtn);
        			break;
        		}

        		return tc1.userdata.result;
        	},
        	check: function (resultValue) {
        		// ev : addRow 리턴값, getRowcount 리턴값
        		var expectedValue = [4, 5]
        		var chk = tc1.checker['equal'].call(this, resultValue, expectedValue);
        		return chk;
        	},
        	teardown: function () {
        	}
        };

        tc1.validator ['tc1_vd4'] = {
        	description: "filterstr 후 getRowCountNF() 수행",
        	autoTaskFlow : ["getRowCountNF"],
        	vcinfo : {
        		argType : tapi.VCT_ARG_NONE,
        	},
        	prepare: function () {
        		tc1.userdata.result = [];
        		this.dataset.set_filterstr("colA == 1");
        		var rtn = this.dataset.filterstr;
        		tc1.userdata.result.push(rtn);
        	},
        	run: function () {
        		var vdAdt = tapi.getVdAdaptor();
        		var taskName = vdAdt.getTaskFlowName();

        		switch(taskName) {
        		case "getRowCountNF":
        			var rtn = tc1.task['getRowCountNF'].call(this);
        			tc1.userdata.result.push(rtn);
        			break;
        		}

        		return tc1.userdata.result;
        	},
        	check: function (resultValue) {
        		// ev : filterstr, getRowcount 리턴값
        		var expectedValue = ["colA == 1", 5]
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
        this.TA_Dataset_M_getRowCountNF_01_v2_onload = function(obj,e)
        {
           // debug mode : log level에서 지정한 모든 메시지 제공
           tapi.systemDebugOn();          // Runner를 debug mode로 실행
           tapi.debugOn();                  // 응용을 debug mode로 실행
           // Runner Load
           tapi.init(tcInfo, this);
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
            this.addEventHandler("onload",this.TA_Dataset_M_getRowCountNF_01_v2_onload,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn_Combo_menu.addEventHandler("onclick",this.btn_button_menu_onclick,this);
            this.btn_main.addEventHandler("onclick",this.btn_main_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_addRow.addEventHandler("onclick",this.btn_addRow_onclick,this);
            this.btn_deleteRow.addEventHandler("onclick",this.btn_deleteRow_onclick,this);
            this.btn_keystring.addEventHandler("onclick",this.btn_keystring_onclick,this);
            this.btn_filterstr.addEventHandler("onclick",this.btn_filterstr_onclick,this);
            this.btn_getRowCountNF.addEventHandler("onclick",this.btn_getRowCountNF_onclick,this);
        };

        this.loadIncludeScript("A_Dataset_M_getRowCountNF_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
