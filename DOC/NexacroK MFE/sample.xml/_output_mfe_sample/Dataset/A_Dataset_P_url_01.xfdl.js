(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Dataset_P_url_48087_01");
            this.set_titletext("Dataset_P_url_48087_01");
            this.getSetter("classname").set("23711_Buttoncssimage_01");
            this.getSetter("inheritanceid").set("");
            this.getSetter("position").set("absolute");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(440,560);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("ds_data7", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_preload("");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_url("");
            obj.set_useclientlayout("false");
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "I_PJT","size" : "256","type" : "STRING"},{"id" : "N_PJT","size" : "256","type" : "STRING"},{"id" : "I_PO","size" : "256","type" : "STRING"}]}});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("ds_data8", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_preload("false");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "aName","size" : "256","type" : "STRING"},{"id" : "Title","size" : "256","type" : "STRING"},{"id" : "Note","size" : "256","type" : "STRING"},{"id" : "RegDt","size" : "256","type" : "STRING"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Static("Static01","3","31","301","37",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_text("[Dataset_P_url_48087_01]");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_Combo_menu","93","1","81","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("21");
            obj.set_text("◀Dataset");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("txt_result","6","344","298","98",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("28");
            obj.set_text("//");
            obj.set_value("//");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_main","8","1","81","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("30");
            obj.set_text("◀◀Main");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid00","7","61","292","123",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_data7");
            obj.set_formats("<Formats>\n  <Format id=\"default\">\n    <Columns>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n    </Columns>\n    <Rows>\n      <Row band=\"head\" size=\"24\"/>\n      <Row band=\"body\" size=\"24\"/>\n    </Rows>\n    <Band id=\"head\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"I_PJT\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"N_PJT\"/>\n      <Cell col=\"2\" disptype=\"normal\" text=\"I_PO\"/>\n    </Band>\n    <Band id=\"body\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"bind:I_PJT\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"bind:N_PJT\"/>\n      <Cell col=\"2\" disptype=\"normal\" text=\"bind:I_PO\"/>\n    </Band>\n  </Format>\n</Formats>\n");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("42");
            obj.getSetter("useinputpanel").set("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"I_PJT\"/><Cell col=\"1\" disptype=\"normal\" text=\"N_PJT\"/><Cell col=\"2\" disptype=\"normal\" text=\"I_PO\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:I_PJT\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:N_PJT\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:I_PO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid01","7","203","293","127",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_data8");
            obj.set_fillareatype("linerow");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("12");
            obj.getSetter("useinputpanel").set("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Name\"/><Cell col=\"1\" text=\"Title\"/><Cell col=\"2\" text=\"Note\"/><Cell col=\"3\" text=\"RegDt\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:Name\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:Title\"/><Cell col=\"2\" edittype=\"normal\" text=\"bind:Note\"/><Cell col=\"3\" edittype=\"normal\" text=\"bind:RegDt\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00","314","4","107","36",null,null,null,null,null,null,this);
            obj.set_taborder("6");
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
        this.addIncludeScript("A_Dataset_P_url_01.xfdl","lib::libCommon.xjs");
        this.addIncludeScript("A_Dataset_P_url_01.xfdl","libevent::event.util.xjs");
        this.registerScript("A_Dataset_P_url_01.xfdl", function(nexacro, system, trace, environment, application) {
        /***********************************************************************
        * 설명      : Dataset url Property
        ***********************************************************************
        *     수정일     작성자   내용
        ***********************************************************************
        *     2019.03.26  김형철   최초 작성
        *     2020.05.25  김동열   DEV_HOLD 제거.
        ***********************************************************************
        */

        this.executeIncludeScript("lib::libCommon.xjs"); /*include "lib::libCommon.xjs"*/;
        this.executeIncludeScript("libevent::event.util.xjs"); /*include "libevent::event.util.xjs"*/;
        var tapi = this.gfnLoadTestAPI(0.71);

        /***********************************************************************
        * 01: Form 변수 선언부
        ***********************************************************************/
        this.dataset = this.ds_data7;
        this.dataset2 = this.ds_data8;
        this.grid = this.Grid00;
        this.grid2 = this.Grid01;
        /***********************************************************************
        * 02 : Test Case, Validator, Validation Case 선언부
        ***********************************************************************/
        var tc1  = {
        	description: "Dataset url Property Test",
        	//-------------- beign user defined section
        	userdata : {
        		eventChkList1 : [],		//onload 이벤트 확인용
        		eventChkList2 : [],		//onload 이벤트 확인용
        		result : [],			//task 리턴값
        	},
        	//--------------  end  user defined section
        	initialize: function() {
        		this.dataset.addEventHandler("onload", this.ds_data7_onload, this);
        		this.dataset2.addEventHandler("onload", this.ds_data8_onload, this);
        	},
        	checker : {},
        	validator : {},
        	task : {},
        	finalize : function() {
        	}
        };

        tc1.task['url'] = function(strUrl) {
        	var vdAdt = tapi.getVdAdaptor();

        	switch(vdAdt.getIndexVC()) {
        	case 0 :
        	case 1 :
        	case 2 :
        		this.dataset.set_url(strUrl);
        		break;
        	default:
        		this.dataset2.set_serverdatasetid("ds_data8");
        		this.dataset2.set_url(strUrl);
        		break;
        	}
        }

        tc1.task['load'] = function() {
          	// 대기 상태 시작
         	var vdAdt = tapi.getVdAdaptor();
         	vdAdt.beginWait(2000, tapi.CF_NEXTSTEP);

        	var result = [];

        	switch(vdAdt.getIndexVC()) {
        		case 0 :
        		case 1 :
        		case 2 :
        			this.dataset.load(false);
        			this.grid.createFormat();
        			break;
        		default :
        			this.dataset2.load(false);
        			this.grid2.createFormat();
        			break;
        	}
        };

        tc1.task['eventChk'] = function() {
         	var vdAdt = tapi.getVdAdaptor();
        	var result = [];

        		switch(vdAdt.getIndexVC()) {
        			case 0 :
        			case 1 :
        			case 2 :
        				result.push(tc1.userdata.eventChkList1);
        				break;
        			default :
        				result.push(tc1.userdata.eventChkList2);
        				break;
        	}
        	return result;
        };

        tc1.task['getCellText'] = function(){
         	var vdAdt = tapi.getVdAdaptor();
        	var result = [];

        	switch(vdAdt.getIndexVC()) {
        		case 0 :
        		case 1 :
        		case 2 :
        			for(var j=0; j<this.dataset.rowcount; j++)
        			{
        				for(var i=0; i<3; i++)
        					result.push(this.grid.getCellText(j, i));
        			}
        			break;
        		default :
        			for(var j=0; j<this.dataset2.rowcount; j++)
        			{
        				for(var i=0; i<4; i++)
        					result.push(this.grid2.getCellText(j, i));
        			}
        			break;
        	}
        	return result;
        }

        tc1.checker['equal'] = function(alResultValues, alExpectedValues) {
        	var chk = true;
        	var chk = tapi.checkEqual(this, alResultValues, alExpectedValues);

        	return chk;
        };

        tc1.validator ['tc1_vd1'] = {
        	description: "url(strUrl) 수행",
        	autoTaskFlow : ["url", "load", "eventChk", "getCellText"],
        	vcinfo : {
        		argType : tapi.VCT_ARG_LIST,
        		args : [
        				//vc : strUrl, ev : 이벤트 발생, getCellText
        			    {vc: [[tapi.VBT_NORMAL,"servicejsp::A_Dataset_P_url_01.xml"]], ev: ["onload","DNL3-N611","0825_R VALVE SEAT FOR INDICATOR VALVE HJ-S TYPE (","H10Y3836","DNL3-N611","0825_R VALVE SEAT FOR INDICATOR VALVE HJ-S TYPE (","H10Y3836"]},
        				{vc: [[tapi.VBT_NORMAL,"http://172.10.12.253:8080/nx17TestSystem/jsp/A_Dataset_P_url_01.xml"]], ev: ["onload","DNL3-N611","0825_R VALVE SEAT FOR INDICATOR VALVE HJ-S TYPE (","H10Y3836","DNL3-N611","0825_R VALVE SEAT FOR INDICATOR VALVE HJ-S TYPE (","H10Y3836"]},
        				{vc: [[tapi.VBT_NORMAL,"../jsp/A_Dataset_P_url_01.xml"]], ev: ["onload","DNL3-N611","0825_R VALVE SEAT FOR INDICATOR VALVE HJ-S TYPE (","H10Y3836","DNL3-N611","0825_R VALVE SEAT FOR INDICATOR VALVE HJ-S TYPE (","H10Y3836"]},
        				{vc: [[tapi.VBT_NORMAL,"servicejsp::A_Dataset_P_url_01.jsp"]], ev: ["onload","홍길동","TEST 공지사항입니다.","TEST 입니다.","20110209","길성준","금일의 게시글","게시글 테스트 입니다.","20110210","현빈","시크릿가든","시크릿가든 재미있습니다.","20110209"]},
        				{vc: [[tapi.VBT_NORMAL,"http://172.10.12.253:8080/nx17TestSystem/jsp/A_Dataset_P_url_01.jsp"]], ev: ["onload","홍길동","TEST 공지사항입니다.","TEST 입니다.","20110209","길성준","금일의 게시글","게시글 테스트 입니다.","20110210","현빈","시크릿가든","시크릿가든 재미있습니다.","20110209"]},
        				{vc: [[tapi.VBT_NORMAL,"../jsp/A_Dataset_P_url_01.jsp"]], ev: ["onload","홍길동","TEST 공지사항입니다.","TEST 입니다.","20110209","길성준","금일의 게시글","게시글 테스트 입니다.","20110210","현빈","시크릿가든","시크릿가든 재미있습니다.","20110209"]},
        		]
        	},
        	prepare: function () {
        		tc1.userdata.eventChkList1 = [];
        		tc1.userdata.eventChkList2 = [];
        		tc1.userdata.result = [];
        	},
        	run: function () {
        		var vdAdt = tapi.getVdAdaptor();
        		var taskName = vdAdt.getTaskFlowName();
        		var strUrl = vdAdt.getValue(0);
        		var rtn;

        		switch(taskName) {
        		case "url":
        			tc1.task['url'].call(this, strUrl);
        			break;
        		case "load":
        			tc1.task['load'].call(this);
        			break;
        		case "eventChk":
        			rtn = tc1.task['eventChk'].call(this);
        			tc1.userdata.result.push(rtn);
        			break;
        		case "getCellText":
        			rtn = tc1.task['getCellText'].call(this);
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
         		this.dataset.clearData();
         		this.dataset2.clearData();
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
        this.Dataset_P_url_48087_01_onload = function(obj,e)
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
        * onload
        ***********************************************************************/
        this.ds_data7_onload = function(obj,e)
        {
        	tc1.userdata.eventChkList1.push(e.eventid);

        	//대기상태 해제
         	var vdAdt = tapi.getVdAdaptor();
         	vdAdt.releaseWait();
        };

        this.ds_data8_onload = function(obj,e)
        {
        	tc1.userdata.eventChkList2.push(e.eventid);

        	//대기상태 해제
         	var vdAdt = tapi.getVdAdaptor();
         	vdAdt.releaseWait();
        };
        /***********************************************************************
        * 07 : 사용자 정의 함수 선언부
        ***********************************************************************/
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Dataset_P_url_48087_01_onload,this);
            this.btn_Combo_menu.addEventHandler("onclick",this.btn_button_menu_onclick,this);
            this.btn_main.addEventHandler("onclick",this.btn_main_onclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
        };

        this.loadIncludeScript("A_Dataset_P_url_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
