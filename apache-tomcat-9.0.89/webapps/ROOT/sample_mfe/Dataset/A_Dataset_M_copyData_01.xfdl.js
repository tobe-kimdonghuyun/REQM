(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TA_Dataset_M_copyData_01_v2");
            this.set_titletext("TA_Dataset_M_copyData_01_v2");
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


            obj = new nexacro.Dataset("ds_data4", this);
            obj.set_enableevent("true");
            obj.set_filterstr("colA == \"11\"");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents({"ColumnInfo" : {"ConstColumn" : [{"id" : "ConstA","size" : "30","type" : "STRING","value" : "변경a"},{"id" : "ConstB","size" : "30","type" : "STRING","value" : "변경b"},{"id" : "ConstC","size" : "30","type" : "STRING","value" : "변경c"}],"Column" : [{"id" : "colA","size" : "256","type" : "STRING"},{"id" : "colB","size" : "256","type" : "STRING"}]},"Rows" : [{"colA" : "10","colB" : "변경a"},{"colA" : "11","colB" : "변경b"},{"colA" : "12","colB" : "변경c"},{"colA" : "13","colB" : "변경d"}]});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("ds_data5", this);
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
            obj.set_taborder("13");
            obj.set_text("Embedded Test");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static01","3","31","301","37",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_text("[Dataset_M_copyData_48125_01]");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_Combo_menu","93","1","81","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("2");
            obj.set_text("◀Dataset");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("txt_result","6","299","294","141",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("3");
            obj.set_text("//");
            obj.set_value("//");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_clear","232","256","63","35",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("4");
            obj.set_text("clear");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_main","8","1","81","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("5");
            obj.set_text("◀◀Main");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_copyData","114","256","107","37",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("6");
            obj.set_text("copyData");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid00","11","61","291","101",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_data3");
            obj.set_formats("<Formats>\n  <Format id=\"default\">\n    <Columns>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n    </Columns>\n    <Rows>\n      <Row band=\"head\" size=\"24\"/>\n      <Row band=\"body\" size=\"24\"/>\n    </Rows>\n    <Band id=\"head\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"colA\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"colB\"/>\n      <Cell col=\"2\" disptype=\"normal\" text=\"ConstA\"/>\n      <Cell col=\"3\" disptype=\"normal\" text=\"ConstB\"/>\n      <Cell col=\"4\" disptype=\"normal\" text=\"ConstC\"/>\n    </Band>\n    <Band id=\"body\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"bind:colA\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"bind:colB\"/>\n      <Cell col=\"2\" disptype=\"normal\" text=\"bind:ConstA\"/>\n      <Cell col=\"3\" disptype=\"normal\" text=\"bind:ConstB\"/>\n      <Cell col=\"4\" disptype=\"normal\" text=\"bind:ConstC\"/>\n    </Band>\n  </Format>\n</Formats>\n");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("7");
            obj.getSetter("useinputpanel").set("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"colA\"/><Cell col=\"1\" disptype=\"normal\" text=\"colB\"/><Cell col=\"2\" disptype=\"normal\" text=\"ConstA\"/><Cell col=\"3\" disptype=\"normal\" text=\"ConstB\"/><Cell col=\"4\" disptype=\"normal\" text=\"ConstC\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:colA\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:colB\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:ConstA\"/><Cell col=\"3\" disptype=\"normal\" text=\"bind:ConstB\"/><Cell col=\"4\" disptype=\"normal\" text=\"bind:ConstC\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","10","163","122","31",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("8");
            obj.set_text("canrowposchange return");
            this.addChild(obj.name, obj);

            obj = new nexacro.Radio("rd_canrowreturn","139","160","161","26",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_columncount("2");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("9");
            var rd_canrowreturn_innerdataset = new nexacro.NormalDataset("rd_canrowreturn_innerdataset", obj);
            rd_canrowreturn_innerdataset._setContents({"ColumnInfo" : {"Column" : [{"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "true","datacolumn" : "true"},{"codecolumn" : "false","datacolumn" : "false"}]});
            obj.set_innerdataset(rd_canrowreturn_innerdataset);
            obj.set_value("true");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static02","10","203","58","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("10");
            obj.set_text("Dataset");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("txtDataset","77","200","219","26",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_readonly("true");
            obj.set_taborder("11");
            obj.set_value("ds_data4");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static03","10","227","58","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("12");
            obj.set_text("Filtered");
            this.addChild(obj.name, obj);

            obj = new nexacro.Radio("rd_Filtered","91","224","204","26",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_columncount("2");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("13");
            var rd_Filtered_innerdataset = new nexacro.NormalDataset("rd_Filtered_innerdataset", obj);
            rd_Filtered_innerdataset._setContents({"ColumnInfo" : {"Column" : [{"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "true","datacolumn" : "true"},{"codecolumn" : "false","datacolumn" : "false"}]});
            obj.set_innerdataset(rd_Filtered_innerdataset);
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_reload","30","256","73","37",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("14");
            obj.set_text("reload");
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
        this.addIncludeScript("A_Dataset_M_copyData_01.xfdl","lib::libCommon.xjs");
        this.addIncludeScript("A_Dataset_M_copyData_01.xfdl","libevent::event.util.xjs");
        this.registerScript("A_Dataset_M_copyData_01.xfdl", function(nexacro, system, trace, environment, application) {
        /***********************************************************************
        * 설명      : Dataset copyData Method
        ***********************************************************************
        *     수정일     작성자   내용
        ***********************************************************************
        *     2019.02.22  김형철   최초 작성
        ***********************************************************************
        */

        this.executeIncludeScript("lib::libCommon.xjs"); /*include "lib::libCommon.xjs"*/;
        this.executeIncludeScript("libevent::event.util.xjs"); /*include "libevent::event.util.xjs"*/;
        var tapi = this.gfnLoadTestAPI(0.71);

        /***********************************************************************
        * 01: Form 변수 선언부
        ***********************************************************************/
        this.dataset3 = this.ds_data3;
        this.dataset4 = this.ds_data4;
        this.dataset5 = this.ds_data5;
        this.grid = this.Grid00;

        /***********************************************************************
        * 02 : Test Case, Validator, Validation Case 선언부
        ***********************************************************************/
        var tc1  = {
        	description: "Dataset copyData Method Test",
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
        		this.dataset3.addEventHandler("onrowsetchanged", this.ds_data3_onrowsetchanged, this);
        		this.dataset3.addEventHandler("canrowposchange", this.ds_data3_canrowposchange, this);
        		this.dataset3.addEventHandler("onrowposchanged", this.ds_data3_onrowposchanged, this);
        		this.dataset3.addEventHandler("onvaluechanged", this.ds_data3_onvaluechanged, this);
        	},
        	checker : {},
        	validator : {},
        	task : {},
        	finalize : function() {
        	}
        };

        tc1.task['returnValue'] = function(bCancolumnchange) {
        	if(bCancolumnchange == true)
        		tc1.userdata.eventReturnValue = "true";
        	else if(bCancolumnchange == false)
        		tc1.userdata.eventReturnValue = "false";
        	else
        		tc1.userdata.eventReturnValue = "";
        };

        tc1.task['copyData'] = function(objDataset, bFilteredOnly) {
        	// 대기 상태 시작
        // 	var vdAdt = tapi.getVdAdaptor();
        // 	vdAdt.beginWait(5000, tapi.CF_NEXTSTEP);

        	var result = [];
        	var rtncopyData;

        	if(bFilteredOnly == "생략")
        		rtncopyData = this.dataset3.copyData(objDataset);
        	else
        		rtncopyData = this.dataset3.copyData(objDataset, bFilteredOnly);

        	var getrowCount = this.dataset3.rowcount;
        	var getcolCount = this.dataset3.colcount;

        	result.push(rtncopyData);
        	result.push(getrowCount);
        	result.push(getcolCount);

        	return result;
        };

        tc1.task['eventChk'] = function() {
        	var result = [];

        	result.push(tc1.userdata.eventChkList1);
        	result.push(tc1.userdata.eventChkList2);
        	result.push(tc1.userdata.eventChkList3);
        	result.push(tc1.userdata.eventChkList4);

        	return result;
        };

        tc1.task['getRowType'] = function() {
        	var result = [];

        	var rtnGetRowType = this.dataset3.getRowType(0);

        	result.push(rtnGetRowType);

        	return result;
        };

        tc1.checker['equal'] = function(alResultValues, alExpectedValues) {
        	var chk = true;
        	var chk = tapi.checkEqual(this, alResultValues, alExpectedValues);

        	return chk;
        };

        tc1.validator ['tc1_vd1'] = {
        	description: "canrowposchange 리턴값 별 copyData() 수행",
        	autoTaskFlow : ["returnValue", "copyData", "eventChk", "getRowType"],
        	vcinfo : {
        		argType : tapi.VCT_ARG_LIST,
        		args : [
        				//vc : bCanrowposchange, objDataset, bFilteredOnly, ev : 리턴값, rowcount, colcount, 이벤트정보, getRowType
        				{vc: [[tapi.VBT_NORMAL,true],[tapi.VBT_NORMAL,this.dataset4],[tapi.VBT_NORMAL,false]],  	ev: [4,4,5,"onrowsetchanged",11,"canrowposchange","onrowposchanged",0,"onvaluechanged",1]},
        				{vc: [[tapi.VBT_NORMAL,false],[tapi.VBT_NORMAL,this.dataset4],[tapi.VBT_NORMAL,false]],  	ev: [4,4,5,"onrowsetchanged",11,"canrowposchange","","",1]},
        				//filter 후
        				{vc: [[tapi.VBT_EXCEPTION,"생략"],[tapi.VBT_NORMAL,this.dataset4],[tapi.VBT_NORMAL,false]],	ev: [4,4,5,"onrowsetchanged",11,"canrowposchange","onrowposchanged",0,"onvaluechanged",1]},
        				{vc: [[tapi.VBT_NORMAL,true],[tapi.VBT_NORMAL,this.dataset4],[tapi.VBT_NORMAL,true]],  		ev: [1,1,5,"onrowsetchanged",11,"canrowposchange","onrowposchanged",0,"onvaluechanged",1]},
        				{vc: [[tapi.VBT_NORMAL,true],[tapi.VBT_NORMAL,this.dataset4],[tapi.VBT_EXCEPTION,"생략"]], 	ev: [4,4,5,"onrowsetchanged",11,"canrowposchange","onrowposchanged",0,"onvaluechanged",1]},
        				{vc: [[tapi.VBT_NORMAL,true],[tapi.VBT_EXCEPTION,this.test],[tapi.VBT_NORMAL,false]],  		ev: [-1,5,5,"","","","",1]},
        		]
        	},
        	prepare: function () {
        		var vdAdt = tapi.getVdAdaptor();

        		if(vdAdt.getIndexVC() == 2 || vdAdt.getIndexVC() == 3 || vdAdt.getIndexVC() == 4)
        			this.dataset4.set_filterstr("colA == '10'");
        		if(vdAdt.getIndexVC() == 5)
        			this.dataset4.set_filterstr("");

        		tc1.userdata.eventChkList3 = [];
        		tc1.userdata.eventChkList4 = [];
        	},
        	run: function () {
        		var vdAdt = tapi.getVdAdaptor();
        		var taskName = vdAdt.getTaskFlowName();

        		var rtn;
        		var bCancolumnchange = vdAdt.getValue(0);
        		var objDataset = vdAdt.getValue(1);
        		var bFilteredOnly = vdAdt.getValue(2);

        		switch(taskName) {
        		case "returnValue":
        			tc1.task['returnValue'].call(this, bCancolumnchange);
        			break;
        		case "copyData":
        			rtn = tc1.task['copyData'].call(this, objDataset, bFilteredOnly);
        			tc1.userdata.result.push(rtn);
        			break;
        		case "eventChk":
        			rtn = tc1.task['eventChk'].call(this);
        			tc1.userdata.result.push(rtn);
        			break;
        		case "getRowType":
        			rtn = tc1.task['getRowType'].call(this);
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
        		//초기 상태로 변경
        		this.dataset3.assign(this.dataset5);
        		this.grid.createFormat();

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
        this.TA_Dataset_M_copyData_01_v2_onload = function(obj,e)
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
        	tc1.userdata.eventChkList1.push(e.eventid);
        	tc1.userdata.eventChkList1.push(e.reason);
        };
        /***********************************************************************
        * canrowposchange
        ***********************************************************************/
        this.ds_data3_canrowposchange = function(obj,e)
        {
        	tc1.userdata.eventChkList2.push(e.eventid);

        	if(tc1.userdata.eventReturnValue == "false")
        	{
        		//대기상태 해제
        // 		var vdAdt = tapi.getVdAdaptor();
        // 		vdAdt.releaseWait();

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
        	tc1.userdata.eventChkList3.push(e.eventid);
        	tc1.userdata.eventChkList3.push(this.dataset3.rowposition);
        };
        /***********************************************************************
        * onvaluechanged
        ***********************************************************************/
        this.ds_data3_onvaluechanged = function(obj,e)
        {
        	tc1.userdata.eventChkList4.push(e.eventid);

        	//대기상태 해제
        // 	var vdAdt = tapi.getVdAdaptor();
        // 	vdAdt.releaseWait();
        };

        /***********************************************************************
        * 07 : 사용자 정의 함수 선언부
        ***********************************************************************/
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.TA_Dataset_M_copyData_01_v2_onload,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn_Combo_menu.addEventHandler("onclick",this.btn_button_menu_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_main.addEventHandler("onclick",this.btn_main_onclick,this);
            this.btn_copyData.addEventHandler("onclick",this.btn_copyData_onclick,this);
            this.Grid00.addEventHandler("onlbuttondown",this.Grid00_onlbuttondown,this);
            this.btn_reload.addEventHandler("onclick",this.btn_reload_onclick,this);
            this.ds_data3.addEventHandler("canrowposchange",this.ds_data3_canrowposchange,this);
            this.ds_data3.addEventHandler("onrowposchanged",this.ds_data3_onrowposchanged,this);
            this.ds_data3.addEventHandler("onrowsetchanged",this.ds_data3_onrowsetchanged,this);
            this.ds_data3.addEventHandler("onvaluechanged",this.ds_data3_onvaluechanged,this);
            this.ds_data5.addEventHandler("canrowposchange",this.ds_data3_canrowposchange,this);
            this.ds_data5.addEventHandler("onrowposchanged",this.ds_data3_onrowposchanged,this);
            this.ds_data5.addEventHandler("onrowsetchanged",this.ds_data3_onrowsetchanged,this);
            this.ds_data5.addEventHandler("onvaluechanged",this.ds_data3_onvaluechanged,this);
        };

        this.loadIncludeScript("A_Dataset_M_copyData_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
