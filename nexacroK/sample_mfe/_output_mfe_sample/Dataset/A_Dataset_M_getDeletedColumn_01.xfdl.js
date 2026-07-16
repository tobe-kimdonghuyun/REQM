(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TA_Dataset_M_getDeletedColumn_01_v2");
            this.set_titletext("TA_Dataset_M_getDeletedColumn_01_v2");
            this.getSetter("classname").set("23711_Buttoncssimage_01");
            this.getSetter("inheritanceid").set("");
            this.getSetter("position").set("absolute");
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
            obj._setContents({"ColumnInfo" : {"ConstColumn" : [{"id" : "ConstA","size" : "30","type" : "STRING","value" : "ConstA"},{"id" : "ConstB","size" : "30","type" : "STRING","value" : "ConstB"},{"id" : "ConstC","size" : "30","type" : "STRING","value" : "ConstC"}],"Column" : [{"id" : "colA","size" : "256","type" : "STRING"},{"id" : "colB","size" : "256","type" : "STRING"}]},"Rows" : [{"colA" : "colA1","colB" : "colB1"},{"colA" : "colA2","colB" : "colB2"},{"colA" : "colA3","colB" : "colB3"},{"colA" : "colA4","colB" : "colB4"},{"colA" : "colA5","colB" : "colB5"},{"colA" : "colA6","colB" : "colB6"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Button("btn00","314","4","107","36",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Embedded Test");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static01","3","31","301","37",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_text("[Dataset_M_getDeletedColumn_48160_01]");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_Combo_menu","93","1","81","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("2");
            obj.set_text("◀Dataset");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("txt_result","6","437","298","99",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("3");
            obj.set_text("//");
            obj.set_value("//");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_clear","233","392","63","37",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("4");
            obj.set_text("clear");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_main","8","1","81","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("5");
            obj.set_text("◀◀Main");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_getDelColumn01","196","258","104","56",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("6");
            obj.set_text("getDelColumn");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static03","10","293","79","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("7");
            obj.set_text("Row");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("txtColID","119","258","73","26",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("8");
            obj.set_value("colA");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("txtRow","119","290","73","26",null,null,null,null,null,null,this);
            obj.set_inputtype("");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("9");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_deleteAll","118","392","104","37",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("10");
            obj.set_text("deleteAll");
            this.addChild(obj.name, obj);

            obj = new nexacro.Combo("cb_idIndex","6","258","103","26",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("11");
            var cb_idIndex_innerdataset = new nexacro.NormalDataset("cb_idIndex_innerdataset", obj);
            cb_idIndex_innerdataset._setContents({"ColumnInfo" : {"Column" : [{"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "id","datacolumn" : "id"},{"codecolumn" : "index","datacolumn" : "index"}]});
            obj.set_innerdataset(cb_idIndex_innerdataset);
            obj.set_text("id");
            obj.set_value("id");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","10","365","99","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("12");
            obj.set_text("updatecontrol");
            this.addChild(obj.name, obj);

            obj = new nexacro.Radio("rd_updateControl","118","365","179","23",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_columncount("2");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("13");
            var rd_updateControl_innerdataset = new nexacro.NormalDataset("rd_updateControl_innerdataset", obj);
            rd_updateControl_innerdataset._setContents({"ColumnInfo" : {"Column" : [{"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "true","datacolumn" : "true"},{"codecolumn" : "false","datacolumn" : "false"}]});
            obj.set_innerdataset(rd_updateControl_innerdataset);
            obj.set_value("true");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_keystring","26","392","81","37",null,null,null,null,null,null,this);
            obj.set_enable("false");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("14");
            obj.set_text("keystring");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid00","6","68","295","172",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_data3");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("15");
            obj.getSetter("useinputpanel").set("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"colA\"/><Cell col=\"1\" disptype=\"normal\" text=\"colB\"/><Cell col=\"2\" disptype=\"normal\" text=\"ConstA\"/><Cell col=\"3\" disptype=\"normal\" text=\"ConstB\"/><Cell col=\"4\" disptype=\"normal\" text=\"ConstC\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:colA\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:colB\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:ConstA\"/><Cell col=\"3\" disptype=\"normal\" text=\"bind:ConstB\"/><Cell col=\"4\" disptype=\"normal\" text=\"bind:ConstC\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_deleteRow","160","320","107","37",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("16");
            obj.set_text("deleteRow");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static02","10","325","78","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("17");
            obj.set_text("row index:");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("txt_value","98","320","54","37",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("18");
            obj.set_value("1");
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
        this.addIncludeScript("A_Dataset_M_getDeletedColumn_01.xfdl","lib::libCommon.xjs");
        this.addIncludeScript("A_Dataset_M_getDeletedColumn_01.xfdl","libevent::event.util.xjs");
        this.registerScript("A_Dataset_M_getDeletedColumn_01.xfdl", function(nexacro, system, trace, environment, application) {
        /***********************************************************************
        * 설명      : Dataset getDeletedColumn Method
        ***********************************************************************
        *     수정일     작성자   내용
        ***********************************************************************
        *     2019.02.28  김형철   최초 작성
        ***********************************************************************
        */

        this.executeIncludeScript("lib::libCommon.xjs"); /*include "lib::libCommon.xjs"*/;
        this.executeIncludeScript("libevent::event.util.xjs"); /*include "libevent::event.util.xjs"*/;
        var tapi = this.gfnLoadTestAPI(0.71);
        this.dev_status = tapi.DEV_HOLD;
        /***********************************************************************
        * 01: Form 변수 선언부
        ***********************************************************************/
        this.dataset = this.ds_data3;

        /***********************************************************************
        * 02 : Test Case, Validator, Validation Case 선언부
        ***********************************************************************/
        var tc1  = {
        	description: "Dataset getDeletedColumn Method Test",
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

        tc1.task['deleteRow'] = function() {
        	for(var i=0; i<3; i++)
        		this.dataset.deleteRow(0);
        }

        tc1.task['getDeletedColumn'] = function(nRow, nVar) {
        	var result = [];
        	var rtngetDeletedColumn = this.dataset.getDeletedColumn(nRow, nVar);

        	result.push(rtngetDeletedColumn);

        	return result;
        };

        tc1.checker['equal'] = function(alResultValues, alExpectedValues) {
        	var chk = true;
        	var chk = tapi.checkEqual(this, alResultValues, alExpectedValues);

        	return chk;
        };

        tc1.validator ['tc1_vd1'] = {
        	description: "updatecontrol=true, getDeletedColumn(nRow, nVar) 수행",
        	autoTaskFlow : ["deleteRow", "getDeletedColumn"],
        	vcinfo : {
        		argType : tapi.VCT_ARG_LIST,
        		args : [
        				//vc : nRow, nVar, ev : 리턴값
        				{vc: [[tapi.VBT_LOWER,-1],[tapi.VBT_LOWER,-1]],   ev: [""]},
        				{vc: [[tapi.VBT_MIN,0],[tapi.VBT_MIN,"colA"]],    ev: ["colA1"]},
        				{vc: [[tapi.VBT_HIGHER,3],[tapi.VBT_HIGHER,5]],   ev: [""]},
        				{vc: [[tapi.VBT_MAX,2],[tapi.VBT_MAX,"ConstC"]],  ev: ["ConstC"]},
        				{vc: [[tapi.VBT_NORMAL,1],[tapi.VBT_NORMAL,2]],   ev: ["ConstA"]},
        			]
        	},
        	prepare: function () {
        		var vdAdt = tapi.getVdAdaptor();
        		if(vdAdt.getIndexVC() == 0)
        			this.dataset.set_updatecontrol(true);
        	},
        	run: function () {
        		var vdAdt = tapi.getVdAdaptor();
        		var taskName = vdAdt.getTaskFlowName();
        		var nRow = vdAdt.getValue(0);
        		var nVar = vdAdt.getValue(1);

        		switch(taskName) {
        		case "deleteRow":
        			if(vdAdt.getIndexVC() == 0)
        				tc1.task['deleteRow'].call(this);
        			break;
        		case "getDeletedColumn":
        			var rtn = tc1.task['getDeletedColumn'].call(this, nRow, nVar);
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

        tc1.validator ['tc1_vd2'] = {
        	description: "updatecontrol=false, getDeletedColumn(nRow, nVar) 수행",
        	autoTaskFlow : ["deleteRow", "getDeletedColumn"],
        	vcinfo : {
        		argType : tapi.VCT_ARG_LIST,
        		args : [
        				//vc : nRow, nVar, ev : 리턴값
        				{vc: [[tapi.VBT_LOWER,-1],[tapi.VBT_MIN,-1]],   ev: [""]},
        				{vc: [[tapi.VBT_MIN,3],[tapi.VBT_MIN,"colA"]],   	ev: [""]},
        				{vc: [[tapi.VBT_HIGHER,6],[tapi.VBT_MIN,5]],   ev: [""]},
        				//[확인필요] updatecontrol이 false일 때 삭제된 Row의 ConstColumn 값을 가져오고 있음
        				{vc: [[tapi.VBT_MAX,5],[tapi.VBT_MIN,"ConstC"]],  	ev: [""]},
        				{vc: [[tapi.VBT_NORMAL,4],[tapi.VBT_MIN,2]],   ev: [""]},
        			]
        	},
        	prepare: function () {
        		var vdAdt = tapi.getVdAdaptor();
        		if(vdAdt.getIndexVC() == 0)
        			this.dataset.set_updatecontrol(false);
        	},
        	run: function () {
        		var vdAdt = tapi.getVdAdaptor();
        		var taskName = vdAdt.getTaskFlowName();
        		var nRow = vdAdt.getValue(0);
        		var nVar = vdAdt.getValue(1);

        		switch(taskName) {
        		case "deleteRow":
        			if(vdAdt.getIndexVC() == 0)
        				tc1.task['deleteRow'].call(this);
        			break;
        		case "getDeletedColumn":
        			var rtn = tc1.task['getDeletedColumn'].call(this, nRow, nVar);
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
        this.TA_Dataset_M_getDeletedColumn_01_v2_onload = function(obj,e)
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
            this.addEventHandler("onload",this.TA_Dataset_M_getDeletedColumn_01_v2_onload,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn_Combo_menu.addEventHandler("onclick",this.btn_button_menu_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_main.addEventHandler("onclick",this.btn_main_onclick,this);
            this.btn_getDelColumn01.addEventHandler("onclick",this.btn_getDelColumn01_onclick,this);
            this.btn_deleteAll.addEventHandler("onclick",this.btn_deleteAll_onclick,this);
            this.btn_keystring.addEventHandler("onclick",this.btn_keystring_onclick,this);
            this.btn_deleteRow.addEventHandler("onclick",this.btn_deleteRow_onclick,this);
        };

        this.loadIncludeScript("A_Dataset_M_getDeletedColumn_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
