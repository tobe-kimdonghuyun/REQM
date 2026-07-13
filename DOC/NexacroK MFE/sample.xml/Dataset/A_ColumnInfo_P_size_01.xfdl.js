(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ColumnInfo_P_size_01_v2");
            this.set_titletext("ColumnInfo_P_size_01_v2");
            this.getSetter("classname").set("23711_Buttoncssimage_01");
            this.getSetter("inheritanceid").set("");
            this.getSetter("position").set("absolute");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(440,560);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("ds_data6", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "그룹코드","size" : "256","type" : "INT"},{"id" : "부서코드","size" : "256","type" : "STRING"},{"id" : "이름","size" : "256","type" : "STRING"},{"id" : "연봉","prop" : "","size" : "256","sumtext" : "1"},{"id" : "비고","size" : "256","type" : "STRING"}]},"Rows" : [{"그룹코드" : "111","이름" : "원빈","부서코드" : "111a","연봉" : "4000"},{"그룹코드" : "112","이름" : "장동건","연봉" : "5000","부서코드" : "112a"},{"그룹코드" : "111","이름" : "현빈","연봉" : "6000","부서코드" : "111b"},{"그룹코드" : "113","이름" : "이병헌","연봉" : "7000","부서코드" : "113a"},{"그룹코드" : "114","이름" : "이나영","연봉" : "8000","부서코드" : "114c"},{"그룹코드" : "114","이름" : "김태희","연봉" : "9000","부서코드" : "114c"},{"그룹코드" : "112","이름" : "비","연봉" : "10000","부서코드" : "112b"},{"그룹코드" : "115","부서코드" : "115a","이름" : "이범수","연봉" : "15000"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Static("Static01","3","31","297","37",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_text("[ColumnInfo_P_size_01]");
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

            obj = new nexacro.TextArea("txt_result","6","368","298","74",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_value("//");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_clear","241","364","63","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_text("clear");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid00","4","68","426","212",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_data6");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.getSetter("useinputpanel").set("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"126\"/><Column size=\"323\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"그룹코드\"/><Cell col=\"1\" text=\"부서코드\"/><Cell col=\"2\" text=\"이름\"/><Cell col=\"3\" text=\"연봉\"/><Cell col=\"4\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:그룹코드\"/><Cell col=\"1\" text=\"bind:부서코드\"/><Cell col=\"2\" text=\"bind:이름\"/><Cell col=\"3\" text=\"bind:연봉\"/><Cell col=\"4\" text=\"bind:비고\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00","314","4","107","36",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("Embedded Test");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn01","316","302","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("btn01");
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
            this._addPreloadList("data","","ds_data6");
        };
        
        // User Script
        this.addIncludeScript("A_ColumnInfo_P_size_01.xfdl","lib::libCommon.xjs");
        this.addIncludeScript("A_ColumnInfo_P_size_01.xfdl","libevent::event.util.xjs");
        this.registerScript("A_ColumnInfo_P_size_01.xfdl", function(nexacro, system, trace, environment, application) {
        /***********************************************************************
        * 설명      : ColumnInfo size Property
        ***********************************************************************
        *     수정일     작성자   내용
        ***********************************************************************
        *     2019.03.28  김형철   최초 작성
        ***********************************************************************
        */

        this.executeIncludeScript("lib::libCommon.xjs"); /*include "lib::libCommon.xjs"*/;
        this.executeIncludeScript("libevent::event.util.xjs"); /*include "libevent::event.util.xjs"*/;
        var tapi = this.gfnLoadTestAPI(0.71);
        this.dev_status = tapi.DEV_HOLD;
        /***********************************************************************
        * 01: Form 변수 선언부
        ***********************************************************************/
        this.dataset = this.ds_data6;
        this.grid = this.Grid00;
        /***********************************************************************
        * 02 : Test Case, Validator, Validation Case 선언부
        ***********************************************************************/
        var tc1  = {
        	description: "ColumnInfo size Property Test",
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

        tc1.task['type'] = function(strType) {
        	if(strType != "default")
        		this.dataset.colinfos["연봉"].set_type(strType);
        	if(strType == "TIME")
        		this.grid.setCellProperty("body", 3, "calendardateformat", "HH:mm:ss:sss");
        	if(strType == "DATETIME")
        		this.grid.setCellProperty("body", 3, "calendardateformat", "yyyy-MM-dd ddd HH:mm:ss:sss");
        	if(strType == "BLOB")
        		this.grid.setCellProperty("body", 3, "displaytype", "imagecontrol");
        }

        tc1.task['size'] = function(nColSize) {
        	this.dataset.colinfos["연봉"].set_size(nColSize);
        }

        tc1.task['getColumnInfo'] = function() {
        	var result = [];
        	var objColInfo;

        	objColInfo = this.dataset.getColumnInfo("연봉");

        	result.push(objColInfo.size);

        	return result;
        }

        tc1.task['setColumn'] = function() {
        	var result = [];

        	//default
        	this.dataset.setColumn(0,"연봉","abc123");
        	//string
        	this.dataset.setColumn(0,"연봉","abc123");
        	//int
        	this.dataset.setColumn(1,"연봉",123);
        	//float
        	this.dataset.setColumn(2,"연봉",123.456789456789456789456789456789456789);
        	//bigdecimal
        	this.dataset.setColumn(3,"연봉",123.456789456789456789456789456789456789);
        	//date
        	this.dataset.setColumn(4,"연봉",20190327);
        	//time
        	this.dataset.setColumn(5,"연봉",132410123);
        	//datetime
        	this.dataset.setColumn(6,"연봉",20190327132410123);
        	//blob
        	this.dataset.setColumn(7,"연봉","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");
        }

        tc1.task['getCellText'] = function(strType) {
        	var vdAdt = tapi.getVdAdaptor();
        	var nRow = vdAdt.getIndexVC();
        	var result = [];

        	if(strType != "BLOB")
        	{
        		if(nRow == 0 || nRow == 1 || nRow == 9)
        			nRow = 0;
        		else
        			nRow = nRow - 1;

        		result.push(this.grid.getCellText(nRow,3));
        	}
        	else
        	{
        		result.push(this.Grid00._bodyBand._matrix._rows[7]._cells[3]._control_element.linkedcontrol._subComp.image);
        	}

        	return result;
        }

        tc1.checker['equal'] = function(alResultValues, alExpectedValues) {
        	var chk = true;
        	var chk = tapi.checkEqual(this, alResultValues, alExpectedValues);

        	return chk;
        };

        tc1.validator ['tc1_vd1'] = {
        	description: "size(nColSize) 설정하고 getColumnInfo 확인",
        	autoTaskFlow : ["type", "size", "getColumnInfo", "setColumn", "getCellText"],
        	vcinfo : {
        		argType : tapi.VCT_ARG_LIST,
        		args : [
        				//vc : strType, ev : getColumnInfo
        				//[확인필요] 2. nColSize 파라미터에 invalid 데이터 설정 시 getColumnInfo.size 값 접근하면 invalid 데이터가 설정되어 있음
        				{vc: [[tapi.VBT_NORMAL,"default"],[tapi.VBT_LOWER,-1]],  ev: [256,"abc123"]},
        				{vc: [[tapi.VBT_NORMAL,"STRING"],[tapi.VBT_MIN,0]],  ev: [256,"abc123"]},

        				{vc: [[tapi.VBT_NORMAL,"INT"],[tapi.VBT_MAX,256]],  ev: [256,123]},
        				{vc: [[tapi.VBT_NORMAL,"FLOAT"],[tapi.VBT_HIGHER,257]],  ev: [257,123.45678945678945]},
        				//[확인필요] 1. size 속성 설정 시 적용되지 않음, addColumn, 툴에서 설정시에도 동일
        				{vc: [[tapi.VBT_NORMAL,"BIGDECIMAL"],[tapi.VBT_NORMAL,3]],  ev: [3,123]},
        		]
        	},
        	prepare: function () {
        	},
        	run: function () {
        		var vdAdt = tapi.getVdAdaptor();
        		var taskName = vdAdt.getTaskFlowName();

        		var rtn;
        		var strType = vdAdt.getValue(0);
        		var nColSize = vdAdt.getValue(1);

        		switch(taskName) {
        		case "type":
        			tc1.task['type'].call(this, strType);
        			break;
        		case "size":
        			tc1.task['size'].call(this, nColSize);
        			break;
        		case "getColumnInfo":
        			rtn = tc1.task['getColumnInfo'].call(this);
        			tc1.userdata.result.push(rtn);
        			break;
        		case "setColumn":
        			tc1.task['setColumn'].call(this);
        			break;
        		case "getCellText":
        			rtn = tc1.task['getCellText'].call(this, strType);
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
        this.ColumnInfo_P_size_01_v2_onload = function(obj,e)
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
            this.addEventHandler("onload",this.ColumnInfo_P_size_01_v2_onload,this);
            this.btn_Combo_menu.addEventHandler("onclick",this.btn_button_menu_onclick,this);
            this.btn_main.addEventHandler("onclick",this.btn_main_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
        };

        this.loadIncludeScript("A_ColumnInfo_P_size_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
