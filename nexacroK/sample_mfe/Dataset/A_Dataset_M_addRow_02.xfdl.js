(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TA_Dataset_M_addRow_01_v2");
            this.set_titletext("TA_Dataset_M_addRow_01_v2");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(440,560);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.DataObject("DataObject00", this);
            obj._setContents([
            	{
            		"colA" : "1",
            		"colB" : "a"
            	},
            		{
            		"colA" : "2",
            		"colB" : "b"
            	},
            		{
            		"colA" : "3",
            		"colB" : "c"
            	},
            		{
            		"colA" : "4",
            		"colB" : "d"
            	},
            		{
            		"colA" : "5",
            		"colB" : "e"
            	},
            ]);
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("ds_data4", this);
            obj.set_binddataobject("DataObject00");
            obj.set_dataobjectbindmode("twoway");
            obj.set_dataobjectpath("$[*]");
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents({"ColumnInfo" : {"ConstColumn" : [{"id" : "ConstA","size" : "30","type" : "STRING","value" : "a"},{"id" : "ConstB","size" : "30","type" : "STRING","value" : "b"},{"id" : "ConstC","size" : "30","type" : "STRING","value" : "c"}],"Column" : [{"datapath" : "@.colA","id" : "colA","size" : "256","type" : "STRING"},{"datapath" : "@.colB","id" : "colB","size" : "256","type" : "STRING"}]}});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("ds_data3", this);
            obj.set_binddataobject("DataObject00");
            obj.set_dataobjectbindmode("twoway");
            obj.set_dataobjectpath("$[*]");
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("false");
            obj.set_useclientlayout("false");
            obj._setContents({"ColumnInfo" : {"ConstColumn" : [{"id" : "ConstA","size" : "30","type" : "STRING","value" : "a"},{"id" : "ConstB","size" : "30","type" : "STRING","value" : "b"},{"id" : "ConstC","size" : "30","type" : "STRING","value" : "c"}],"Column" : [{"datapath" : "@.colA","id" : "colA","size" : "256","type" : "STRING"},{"datapath" : "@.colB","id" : "colB","size" : "256","type" : "STRING"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Static("Static01","3","31","301","37",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("0");
            obj.set_text("[Dataset_M_addRow_48096_01]");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_Combo_menu","93","1","81","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_text("◀Dataset");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("txt_result","6","307","298","125",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("2");
            obj.set_text("//");
            obj.set_value("//");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_clear","241","264","63","35",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("3");
            obj.set_text("clear");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_main","8","1","81","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("4");
            obj.set_text("◀◀Main");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_addRow","139","264","92","37",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("5");
            obj.set_text("addRow");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid00","5","61","295","123",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_data3");
            obj.set_formats("<Formats>\n  <Format id=\"default\">\n    <Columns>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n    </Columns>\n    <Rows>\n      <Row band=\"head\" size=\"24\"/>\n      <Row band=\"body\" size=\"24\"/>\n    </Rows>\n    <Band id=\"head\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"colA\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"colB\"/>\n      <Cell col=\"2\" disptype=\"normal\" text=\"ConstA\"/>\n      <Cell col=\"3\" disptype=\"normal\" text=\"ConstB\"/>\n      <Cell col=\"4\" disptype=\"normal\" text=\"ConstC\"/>\n    </Band>\n    <Band id=\"body\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"bind:colA\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"bind:colB\"/>\n      <Cell col=\"2\" disptype=\"normal\" text=\"bind:ConstA\"/>\n      <Cell col=\"3\" disptype=\"normal\" text=\"bind:ConstB\"/>\n      <Cell col=\"4\" disptype=\"normal\" text=\"bind:ConstC\"/>\n    </Band>\n  </Format>\n</Formats>\n");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("6");
            obj.getSetter("useinputpanel").set("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"colA\"/><Cell col=\"1\" text=\"colB\"/></Band><Band id=\"body\"><Cell text=\"bind:colA\"/><Cell col=\"1\" text=\"bind:colB\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static03","10","195","97","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("7");
            obj.set_text("updatecontrol");
            this.addChild(obj.name, obj);

            obj = new nexacro.Radio("rd_updatecontrol","115","192","181","26",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_columncount("2");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("8");
            var rd_updatecontrol_innerdataset = new nexacro.NormalDataset("rd_updatecontrol_innerdataset", obj);
            rd_updatecontrol_innerdataset._setContents({"ColumnInfo" : {"Column" : [{"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "true","datacolumn" : "true"},{"codecolumn" : "false","datacolumn" : "false"}]});
            obj.set_innerdataset(rd_updatecontrol_innerdataset);
            obj.set_value("true");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","10","227","122","31",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("9");
            obj.set_text("canrowposchange return");
            this.addChild(obj.name, obj);

            obj = new nexacro.Radio("rd_canrowreturn","139","224","161","26",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_columncount("2");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("10");
            var rd_canrowreturn_innerdataset = new nexacro.NormalDataset("rd_canrowreturn_innerdataset", obj);
            rd_canrowreturn_innerdataset._setContents({"ColumnInfo" : {"Column" : [{"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "true","datacolumn" : "true"},{"codecolumn" : "false","datacolumn" : "false"}]});
            obj.set_innerdataset(rd_canrowreturn_innerdataset);
            obj.set_value("true");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_idx2","212","2","29","29",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("11");
            obj.set_text("2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_idx1","180","2","29","29",null,null,null,null,null,null,this);
            obj.set_enable("false");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("12");
            obj.set_text("1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00","314","4","107","36",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Embedded Test");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid00_00","323","60","295","123",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_data4");
            obj.set_formats("<Formats>\n  <Format id=\"default\">\n    <Columns>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n    </Columns>\n    <Rows>\n      <Row band=\"head\" size=\"24\"/>\n      <Row band=\"body\" size=\"24\"/>\n    </Rows>\n    <Band id=\"head\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"colA\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"colB\"/>\n      <Cell col=\"2\" disptype=\"normal\" text=\"ConstA\"/>\n      <Cell col=\"3\" disptype=\"normal\" text=\"ConstB\"/>\n      <Cell col=\"4\" disptype=\"normal\" text=\"ConstC\"/>\n    </Band>\n    <Band id=\"body\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"bind:colA\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"bind:colB\"/>\n      <Cell col=\"2\" disptype=\"normal\" text=\"bind:ConstA\"/>\n      <Cell col=\"3\" disptype=\"normal\" text=\"bind:ConstB\"/>\n      <Cell col=\"4\" disptype=\"normal\" text=\"bind:ConstC\"/>\n    </Band>\n  </Format>\n</Formats>\n");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("14");
            obj.getSetter("useinputpanel").set("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"colA\"/><Cell col=\"1\" text=\"colB\"/></Band><Band id=\"body\"><Cell text=\"bind:colA\"/><Cell col=\"1\" text=\"bind:colB\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","",440,560,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("A_Dataset_M_addRow_02.xfdl","lib::libCommon.xjs");
        this.addIncludeScript("A_Dataset_M_addRow_02.xfdl","libevent::event.util.xjs");
        this.registerScript("A_Dataset_M_addRow_02.xfdl", function(nexacro, system, trace, environment, application) {
        /***********************************************************************
        * 설명      : Dataset addRow Method
        ***********************************************************************
        *     수정일     작성자   내용
        ***********************************************************************
        *     2021.07.28  함경곤   최초 작성

        ***********************************************************************
        */

        this.executeIncludeScript("lib::libCommon.xjs"); /*include "lib::libCommon.xjs"*/;
        this.executeIncludeScript("libevent::event.util.xjs"); /*include "libevent::event.util.xjs"*/;
        var tapi = this.gfnLoadTestAPI(0.71);
        //this.dev_status = tapi.DEV_HOLD;
        /***********************************************************************
        * 01: Form 변수 선언부
        ***********************************************************************/
        this.dataset = this.ds_data3;	//this.소문자 컴포넌트명

        /***********************************************************************
        * 02 : Test Case, Validator, Validation Case 선언부
        ***********************************************************************/
        var tc1  = {
        	description: "Dataset addRow Method Test",
        	//-------------- beign user defined section
        	userdata : {
        		eventReturnValue : "", 	//canrowposchange 리턴값 설정
        		eventChkList1 : [],		//onrowsetchanged 확인용
        		eventChkList2 : [],		//canrowposchange 확인용
        		eventChkList3 : [],		//onrowposchanged 확인용
        		eventChkList4 : [],		//onvaluechanged 확인용
        		result : [],			//task 리턴값
        	},
        	//--------------  end  user defined section
        	initialize: function() {
        		this.dataset.addEventHandler("onrowsetchanged", this.ds_data3_onrowsetchanged, this);
        		this.dataset.addEventHandler("canrowposchange", this.ds_data3_canrowposchange, this);
        		this.dataset.addEventHandler("onrowposchanged", this.ds_data3_onrowposchanged, this);
        		this.dataset.addEventHandler("onvaluechanged", this.ds_data3_onvaluechanged, this);
        		tc1.userdata.eventReturnValue = "";
        		tc1.userdata.eventChkList1 = [];
        		tc1.userdata.eventChkList2 = [];
        		tc1.userdata.eventChkList3 = [];
        		tc1.userdata.eventChkList4 = [];
        		tc1.userdata.result = [];
        	},
        	checker : {},
        	validator : {},
        	task : {},
        	finalize : function() {
        	}
        };

        tc1.task['addRow'] = function(bUpdateControl, bCanrowposchange) {
        	// 대기 상태 시작
        	var vdAdt = tapi.getVdAdaptor();
        	vdAdt.beginWait(100, tapi.CF_NEXTSTEP);

        	var result = [];

        	//this.dataset.set_updatecontrol(bUpdateControl);

        	if(bCanrowposchange == true)
        		tc1.userdata.eventReturnValue = "true";
        	else
        		tc1.userdata.eventReturnValue = "false";

        	var rtnAddRow = this.dataset.addRow();
        	var getRowType = this.dataset.getRowType(rtnAddRow);
        	var getCount = this.dataset.rowcount;

        	result.push(getRowType);
        	result.push(rtnAddRow);
        	result.push(getCount);

        	return result;
        };

        // 두번째 단계 : 검증을 위한 데이터 처리
        tc1.task['eventChk'] = function() {
        	var result = [];

        	result.push(tc1.userdata.eventChkList1);
        	result.push(tc1.userdata.eventChkList2);
        	result.push(tc1.userdata.eventChkList3);
        	result.push(tc1.userdata.eventChkList4);

        	return result;
        };

        tc1.checker['equal'] = function(alResultValues, alExpectedValues) {
        	var chk = true;
        	var chk = tapi.checkEqual(this, alResultValues, alExpectedValues);

        	return chk;
        };

        tc1.validator ['tc1_vd1'] = {
        	description: "updatecontrol 설정값, canrowposchange 이벤트 리턴값 조건 조합",
        	autoTaskFlow : ["addRow", "eventChk"],
        	vcinfo : {
        		argType : tapi.VCT_ARG_LIST,
        		args : [
        				//vc : 1.bUpdateControl, 2.bCanrowposchange, ev : 1.getRowType , 2.리턴값, 3.rowcount, 4.이벤트정보
        				{vc: [[tapi.VBT_NORMAL,true], [tapi.VBT_NORMAL,true]],  ev: [1,5,6,"onrowsetchanged", 43, "canrowposchange", "onrowposchanged", "onvaluechanged"]},
        				{vc: [[tapi.VBT_NORMAL,true], [tapi.VBT_NORMAL,false]],  ev: [1,6,7,"onrowsetchanged",43,"canrowposchange","",""]},
        				{vc: [[tapi.VBT_NORMAL,false], [tapi.VBT_NORMAL,true]],  ev: [1,7,8,"onrowsetchanged",43,"canrowposchange","onrowposchanged","onvaluechanged"]},
        				{vc: [[tapi.VBT_NORMAL,false], [tapi.VBT_NORMAL,false]],  ev: [1,8,9,"onrowsetchanged",43,"canrowposchange","",""]}
        		]
        	},
        	prepare: function () {
        	},
        	run: function () {
        		var vdAdt = tapi.getVdAdaptor();
        		var taskName = vdAdt.getTaskFlowName();

        		var rtn;
        		var bUpdateControl = vdAdt.getValue(0);
        		var bCanrowposchange = vdAdt.getValue(1);

        		switch(taskName) {
        		case "addRow":
        			rtn = tc1.task['addRow'].call(this, bUpdateControl, bCanrowposchange);
        			tc1.userdata.result.push(rtn);
        			break;
        		case "eventChk":
        			rtn = tc1.task['eventChk'].call(this);
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
        		tc1.userdata.eventReturnValue = "";
        		tc1.userdata.eventChkList1 = [];
        		tc1.userdata.eventChkList2 = [];
        		tc1.userdata.eventChkList3 = [];
        		tc1.userdata.eventChkList4 = [];
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
        this.TA_Dataset_M_addRow_01_v2_onload = function(obj,e)
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
        this.ds_data3_onrowsetchanged = function(obj,e)
        {
        	//tc1.userdata.eventChkList1.push(e.eventid);
        	//tc1.userdata.eventChkList1.push(e.reason);
        };
        /***********************************************************************
        * canrowposchange
        ***********************************************************************/
        this.ds_data3_canrowposchange = function(obj,e)
        {
        	if(tc1.userdata.eventReturnValue == "false")
        	{
        		//대기상태 해제
        		var vdAdt = tapi.getVdAdaptor();
        		vdAdt.releaseWait();

        		return false;
        	}
        	else if(tc1.userdata.eventReturnValue == "true")
        	{
        		return true;
        	}
        	else
        	{
        		return;
        	}
        };
        /***********************************************************************
        * onrowposchanged
        ***********************************************************************/
        this.ds_data3_onrowposchanged = function(obj,e)
        {
        //	tc1.userdata.eventChkList3.push(e.eventid);
        };
        /***********************************************************************
        * onvaluechanged
        ***********************************************************************/
        this.ds_data3_onvaluechanged = function(obj,e)
        {
        	//tc1.userdata.eventChkList4.push(e.eventid);

        	//대기상태 해제
        	//var vdAdt = tapi.getVdAdaptor();
        	//vdAdt.releaseWait();
        };

        /***********************************************************************
        * 07 : 사용자 정의 함수 선언부
        ***********************************************************************/
        this.ds_data4_onrowsetchanged = function(obj,e)
        {
        	tc1.userdata.eventChkList1.push(e.eventid);
        	tc1.userdata.eventChkList1.push(e.reason);
        };

        this.ds_data4_onvaluechanged = function(obj,e)
        {
        	tc1.userdata.eventChkList4.push(e.eventid);

        	//대기상태 해제
        	//var vdAdt = tapi.getVdAdaptor();
        	//vdAdt.releaseWait();
        };

        this.ds_data4_onrowposchanged = function(obj,e)
        {
        	tc1.userdata.eventChkList3.push(e.eventid);
        };

        this.ds_data4_canrowposchange = function(obj,e)
        {
        	tc1.userdata.eventChkList2.push(e.eventid);

        	if(tc1.userdata.eventReturnValue == "false")
        	{
        		//대기상태 해제
        		var vdAdt = tapi.getVdAdaptor();
        		vdAdt.releaseWait();

        		return false;
        	}
        	else if(tc1.userdata.eventReturnValue == "true")
        	{
        		return true;
        	}
        	else
        	{
        		return;
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.TA_Dataset_M_addRow_01_v2_onload,this);
            this.btn_Combo_menu.addEventHandler("onclick",this.btn_button_menu_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_main.addEventHandler("onclick",this.btn_main_onclick,this);
            this.btn_addRow.addEventHandler("onclick",this.btn_addRow_onclick,this);
            this.btn_idx2.addEventHandler("onclick",this.btn_idx2_onclick,this);
            this.btn_idx1.addEventHandler("onclick",this.btn_idx1_onclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.ds_data4.addEventHandler("canrowposchange",this.ds_data4_canrowposchange,this);
            this.ds_data4.addEventHandler("onrowposchanged",this.ds_data4_onrowposchanged,this);
            this.ds_data4.addEventHandler("onrowsetchanged",this.ds_data4_onrowsetchanged,this);
            this.ds_data4.addEventHandler("onvaluechanged",this.ds_data4_onvaluechanged,this);
        };

        this.loadIncludeScript("A_Dataset_M_addRow_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
