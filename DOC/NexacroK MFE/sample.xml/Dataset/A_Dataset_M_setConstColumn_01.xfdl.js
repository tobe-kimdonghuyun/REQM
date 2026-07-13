(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TA_Dataset_M_setConstColumn_01_v2");
            this.set_titletext("TA_Dataset_M_setConstColumn_01_v2");
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
            obj._setContents({"ColumnInfo" : {"ConstColumn" : [{"id" : "ConstA","size" : "30","type" : "STRING","value" : "a"},{"id" : "ConstB","size" : "30","type" : "STRING","value" : "b"},{"id" : "ConstC","size" : "30","type" : "STRING","value" : "c"}],"Column" : [{"id" : "colA","size" : "256","type" : "STRING"},{"id" : "colB","size" : "256","type" : "STRING"}]},"Rows" : [{"colA" : "1","colB" : "a"},{"colA" : "2","colB" : "b"},{"colA" : "3","colB" : "c"},{"colA" : "4","colB" : "d"},{"colA" : "5","colB" : "e"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Button("btn00","314","4","107","36",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Embedded Test");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static01","3","31","297","37",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_text("[Dataset_M_setConstColumn_48103_01]");
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

            obj = new nexacro.TextArea("txt_result","6","296","298","146",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("4");
            obj.set_value("//");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_clear","241","264","63","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("5");
            obj.set_text("clear");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid00","5","61","295","57",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_data3");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("6");
            obj.getSetter("useinputpanel").set("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ConstA\"/><Cell col=\"1\" text=\"ConstB\"/><Cell col=\"2\" text=\"ConstC\"/></Band><Band id=\"body\"><Cell text=\"bind:ConstA\"/><Cell col=\"1\" text=\"bind:ConstB\"/><Cell col=\"2\" text=\"bind:ConstC\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","10","123","58","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("7");
            obj.set_text("nColIdx");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static02","10","155","90","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("8");
            obj.set_text("varVal");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_nColIdx","101","120","83","26",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("9");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_varVal1","101","152","83","26",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("10");
            obj.set_value("AAA");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static03","10","187","86","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("11");
            obj.set_text("strColID");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static04","10","219","94","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("12");
            obj.set_text("varVal");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_strColID","101","184","83","26",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("13");
            obj.set_value("ConstC");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_varVal2","101","216","83","26",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("14");
            obj.set_value("BBB");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_setConstColumn1","196","120","108","56",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("15");
            obj.set_text("setConstColumn()");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_setConstColumn2","196","184","108","56",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("16");
            obj.set_text("setConstColumn()");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static05","12","254","103","35",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("17");
            obj.set_text("cancolumnchange Event\r\nReturn Type :");
            this.addChild(obj.name, obj);

            obj = new nexacro.Radio("rd_return","124","255","109","35",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_columncount("2");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("position").set("absolute");
            obj.set_rowcount("1");
            obj.set_taborder("18");
            var rd_return_innerdataset = new nexacro.NormalDataset("rd_return_innerdataset", obj);
            rd_return_innerdataset._setContents({"ColumnInfo" : {"Column" : [{"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "1","datacolumn" : "true"},{"codecolumn" : "2","datacolumn" : "false"}]});
            obj.set_innerdataset(rd_return_innerdataset);
            obj.set_value("2");
            obj.set_index("1");
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
        this.addIncludeScript("A_Dataset_M_setConstColumn_01.xfdl","lib::libCommon.xjs");
        this.addIncludeScript("A_Dataset_M_setConstColumn_01.xfdl","libevent::event.util.xjs");
        this.registerScript("A_Dataset_M_setConstColumn_01.xfdl", function(nexacro, system, trace, environment, application) {
        /***********************************************************************
        * 설명      : Dataset setConstColumn Method
        ***********************************************************************
        *     수정일     작성자   내용
        ***********************************************************************
        *     2019.03.06  김형철   최초 작성
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
        this.grid = this.Grid00;
        /***********************************************************************
        * 02 : Test Case, Validator, Validation Case 선언부
        ***********************************************************************/
        var tc1  = {
        	description: "Dataset setConstColumn Method Test",
        	//-------------- beign user defined section
        	userdata : {
        		result : [],			//task 리턴값
        		eventChkList1 : [],		//cancolumnchange 확인용
        		eventChkList2 : [],		//oncolumnchanged 확인용
        	},
        	//--------------  end  user defined section
        	initialize: function() {
        		this.dataset.addEventHandler("cancolumnchange", this.ds_data3_cancolumnchange, this);
        		this.dataset.addEventHandler("oncolumnchanged", this.ds_data3_oncolumnchanged, this);
        	},
        	checker : {},
        	validator : {},
        	task : {},
        	finalize : function() {
        	}
        };

        tc1.task['setConstColumn'] = function(varCol, varVal) {
        	var result = [];
        	var rtnsetConstColumn = this.dataset.setConstColumn(varCol, varVal);

        	result.push(rtnsetConstColumn);

        	return result;
        };

        tc1.task['eventChk'] = function() {
        	var result = [];

        	result.push(tc1.userdata.eventChkList1);
        	result.push(tc1.userdata.eventChkList2);

        	return result;
        };

        tc1.task['getCellText'] = function(varCol){
        	var result = [];

        	if(varCol == -1) varCol = -3
        	if(varCol == "ConstA" || varCol == undefined || varCol == null) varCol = 0;

        	result.push(this.grid.getCellText(0, varCol));

        	return result;
        }

        tc1.checker['equal'] = function(alResultValues, alExpectedValues) {
        	var chk = true;
        	var chk = tapi.checkEqual(this, alResultValues, alExpectedValues);

        	return chk;
        };

        tc1.validator ['tc1_vd1'] = {
        	description: "cancolumnchange 리턴값, setConstColumn(varCol, varVal) 수행",
        	autoTaskFlow : ["setConstColumn", "eventChk", "getCellText"],
        	vcinfo : {
        		argType : tapi.VCT_ARG_LIST,
        		args : [
        				//vc : varCol, varVal, ev : 리턴값, 이벤트정보, getCellText
        				{vc: [[tapi.VBT_LOWER,-1],[tapi.VBT_NORMAL,"TEST00"]],   ev: [false,"","",""]},
        				{vc: [[tapi.VBT_MIN,0],[tapi.VBT_NORMAL,"TEST01"]],   ev: [true,"cancolumnchange","a","TEST01","oncolumnchanged","a","TEST01","TEST01"]},
        				{vc: [[tapi.VBT_HIGHER,3],[tapi.VBT_NORMAL,"TEST02"]],   ev: [false,"","",""]},
        				{vc: [[tapi.VBT_MAX,2],[tapi.VBT_NORMAL,"TEST03"]],   ev: [true,"cancolumnchange","c","TEST03","oncolumnchanged","c","TEST03","TEST03"]},
        			    {vc: [[tapi.VBT_NORMAL,1],[tapi.VBT_NORMAL,"TEST004"]],   ev: [true,"cancolumnchange","b","TEST004","oncolumnchanged","b","TEST004","TEST004"]},
        				{vc: [[tapi.VBT_NORMAL,"ConstA"],[tapi.VBT_NORMAL,"TEST05"]],   ev: [true,"cancolumnchange","TEST01","TEST05","oncolumnchanged","TEST01","TEST05","TEST05"]},
        				{vc: [[tapi.VBT_NORMAL,"test"],[tapi.VBT_NORMAL,"TEST06"]],   ev: [false,"","",""]},
        				//[확인필요] nColIdx로 null, undefined 설정 시 0으로 안됨, CHM에 "매개변수인 nColIdx 에 "undefined, null" 등의 "NaN" 값을 입력하면 ECMA의 정수 변환 규칙에 따라 "0" 이 됩니다."
        				{vc: [[tapi.VBT_EXCEPTION,undefined],[tapi.VBT_NORMAL,"TEST07"]],   ev: [true,"cancolumnchange","TEST05","TEST07","oncolumnchanged","TEST05","TEST07","TEST07"]},
        				{vc: [[tapi.VBT_EXCEPTION,null],[tapi.VBT_NORMAL,"TEST08"]],   ev: [true,"cancolumnchange","TEST07","TEST08","oncolumnchanged","TEST07","TEST08","TEST08"]},
        				//cancolumnchange false
        				{vc: [[tapi.VBT_MAX,2],[tapi.VBT_NORMAL,"TEST09"]],   ev: [false,"cancolumnchange","TEST03","TEST09","","TEST03"]},
        			]
        	},
        	prepare: function () {
        		tc1.userdata.result = [];
        		tc1.eventReturnValue = "true";
        		var vdAdt = tapi.getVdAdaptor();

        		if(vdAdt.getIndexVC() == 9)
        			tc1.eventReturnValue = "false";
        	},
        	run: function () {
        		var vdAdt = tapi.getVdAdaptor();
        		var taskName = vdAdt.getTaskFlowName();
        		var varCol = vdAdt.getValue(0);
        		var varVal = vdAdt.getValue(1);

        		switch(taskName) {
        		case "setConstColumn":
        			var rtn = tc1.task['setConstColumn'].call(this, varCol, varVal);
        			tc1.userdata.result.push(rtn);
        			break;
        		case "eventChk":
        			var rtn = tc1.task['eventChk'].call(this);
        			tc1.userdata.result.push(rtn);
        			break;
        		case "getCellText":
        			var rtn = tc1.task['getCellText'].call(this, varCol);
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
        this.TA_Dataset_M_setConstColumn_01_v2_onload = function(obj,e)
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
        * cancolumnchange
        ***********************************************************************/
        this.ds_data3_cancolumnchange = function(obj,e)
        {
        	tc1.userdata.eventChkList1.push(e.eventid);
        	tc1.userdata.eventChkList1.push(e.oldvalue);
        	tc1.userdata.eventChkList1.push(e.newvalue);

        	if(tc1.eventReturnValue == "false")
        	{
        		return false;
        	}
        	else if(tc1.eventReturnValue == "true")
        	{
        		return true;
        	}
        	else
        	{
        		return;
        	}
        };
        /***********************************************************************
        * oncolumnchange
        ***********************************************************************/
        this.ds_data3_oncolumnchanged = function(obj,e)
        {
        	tc1.userdata.eventChkList2.push(e.eventid);
        	tc1.userdata.eventChkList2.push(e.oldvalue);
        	tc1.userdata.eventChkList2.push(e.newvalue);
        };
        /***********************************************************************
        * 07 : 사용자 정의 함수 선언부
        ***********************************************************************/


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.TA_Dataset_M_setConstColumn_01_v2_onload,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn_Combo_menu.addEventHandler("onclick",this.btn_button_menu_onclick,this);
            this.btn_main.addEventHandler("onclick",this.btn_main_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_setConstColumn1.addEventHandler("onclick",this.btn_setConstColumn1_onclick,this);
            this.btn_setConstColumn2.addEventHandler("onclick",this.btn_setConstColumn2_onclick,this);
            this.ds_data3.addEventHandler("cancolumnchange",this.ds_data3_cancolumnchange,this);
            this.ds_data3.addEventHandler("oncolumnchanged",this.ds_data3_oncolumnchanged,this);
        };

        this.loadIncludeScript("A_Dataset_M_setConstColumn_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
