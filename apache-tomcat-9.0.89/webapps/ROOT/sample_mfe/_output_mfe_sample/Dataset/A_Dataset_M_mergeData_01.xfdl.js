(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TA_Dataset_M_mergeData_01_v2");
            this.set_titletext("TA_Dataset_M_mergeData_01_v2");
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


            obj = new nexacro.Dataset("ds_data5", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "colA","size" : "256","type" : "STRING"},{"id" : "int_","size" : "256","type" : "INT"},{"id" : "float_","size" : "256","type" : "FLOAT"},{"id" : "bigdecimal_","size" : "256","type" : "BIGDECIMAL"},{"id" : "string_","size" : "256","type" : "STRING"}]},"Rows" : [{"int_" : "1","float_" : "10.1","bigdecimal_" : "10.5","string_" : "1","colA" : "1"},{"float_" : "20.2","int_" : "2","bigdecimal_" : "20.3","string_" : "2","colA" : "2"},{"float_" : "30.3","int_" : "3","bigdecimal_" : "20.7","string_" : "3","colA" : "2"},{"int_" : "9","float_" : "12.145","bigdecimal_" : "2.45","string_" : "9","colA" : "2"},{"int_" : "12","float_" : "58.18","bigdecimal_" : "2.84","string_" : "12","colA" : "1"}]});
            this.addChild(obj.name, obj);


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
            obj.set_taborder("13");
            obj.set_text("Embedded Test");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static01","3","31","297","37",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_text("[Dataset_M_mergeData_48114_01]");
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

            obj = new nexacro.Button("btn_mergeData","211","216","93","26",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("6");
            obj.set_text("mergeData()");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","10","219","75","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("7");
            obj.set_text("objDataset");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_objDataset","93","216","110","26",null,null,null,null,null,null,this);
            obj.set_enable("false");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("8");
            obj.set_value("ds_data1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_mergeData00","211","248","93","26",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("9");
            obj.set_text("mergeData()");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static02","10","251","75","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("10");
            obj.set_text("objDataset");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_objDataset00","93","248","110","26",null,null,null,null,null,null,this);
            obj.set_enable("false");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("11");
            obj.set_value("ds_data5");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_reload","169","280","63","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("12");
            obj.set_text("reload");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid00","8","60","413","150",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_data3");
            obj.set_formats("<Formats>\n  <Format id=\"default\">\n    <Columns>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n    </Columns>\n    <Rows>\n      <Row band=\"head\" size=\"24\"/>\n      <Row band=\"body\" size=\"24\"/>\n    </Rows>\n    <Band id=\"head\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"colA\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"colB\"/>\n      <Cell col=\"2\" disptype=\"normal\" text=\"ConstA\"/>\n      <Cell col=\"3\" disptype=\"normal\" text=\"ConstB\"/>\n      <Cell col=\"4\" disptype=\"normal\" text=\"ConstC\"/>\n    </Band>\n    <Band id=\"body\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"bind:colA\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"bind:colB\"/>\n      <Cell col=\"2\" disptype=\"normal\" text=\"bind:ConstA\"/>\n      <Cell col=\"3\" disptype=\"normal\" text=\"bind:ConstB\"/>\n      <Cell col=\"4\" disptype=\"normal\" text=\"bind:ConstC\"/>\n    </Band>\n  </Format>\n</Formats>\n");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("13");
            obj.getSetter("useinputpanel").set("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"45\"/><Column size=\"45\"/><Column size=\"45\"/><Column size=\"45\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"colA\"/><Cell col=\"1\" text=\"colB\"/><Cell col=\"2\" text=\"ConstA\"/><Cell col=\"3\" text=\"ConstB\"/><Cell col=\"4\" text=\"ConstC\"/></Band><Band id=\"body\"><Cell text=\"bind:colA\"/><Cell col=\"1\" text=\"bind:colB\"/><Cell col=\"2\" text=\"bind:ConstA\"/><Cell col=\"3\" text=\"bind:ConstB\"/><Cell col=\"4\" text=\"bind:ConstC\"/></Band></Format></Formats>");
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
        this.addIncludeScript("A_Dataset_M_mergeData_01.xfdl","lib::libCommon.xjs");
        this.addIncludeScript("A_Dataset_M_mergeData_01.xfdl","libevent::event.util.xjs");
        this.registerScript("A_Dataset_M_mergeData_01.xfdl", function(nexacro, system, trace, environment, application) {
        /***********************************************************************
        * 설명      : Dataset mergeData Method
        ***********************************************************************
        *     수정일     작성자   내용
        ***********************************************************************
        *     2019.03.05  김형철   최초 작성
        *     2020.05.20  김동열   DEV_HOLD 해제
        ***********************************************************************
        */

        this.executeIncludeScript("lib::libCommon.xjs"); /*include "lib::libCommon.xjs"*/;
        this.executeIncludeScript("libevent::event.util.xjs"); /*include "libevent::event.util.xjs"*/;
        var tapi = this.gfnLoadTestAPI(0.71);

        /***********************************************************************
        * 01: Form 변수 선언부
        ***********************************************************************/
        this.dataset1 = this.ds_data1;
        this.dataset3 = this.ds_data3;
        this.dataset5 = this.ds_data5;
        this.grid = this.Grid00;
        /***********************************************************************
        * 02 : Test Case, Validator, Validation Case 선언부
        ***********************************************************************/
        var tc1  = {
        	description: "Dataset mergeData Method Test",
        	//-------------- beign user defined section
        	userdata : {
        		nRow : 5,				//getCellText 확인용
        		eventReturnValue : "", 	//canrowposchange 리턴값 설정
        		eventChkList1 : [],		//onrowsetchanged 확인용
        		eventChkList2 : [],		//canrowposchange 확인용
        		eventChkList3 : [],		//onrowposchanged 확인용
        		result : [],			//task 리턴값
        	},
        	//--------------  end  user defined section
        	initialize: function() {
        		this.dataset3.addEventHandler("onrowsetchanged", this.ds_data3_onrowsetchanged, this);
        		this.dataset3.addEventHandler("canrowposchange", this.ds_data3_canrowposchange, this);
        		this.dataset3.addEventHandler("onrowposchanged", this.ds_data3_onrowposchanged, this);
        	},
        	checker : {},
        	validator : {},
        	task : {},
        	finalize : function() {
        	}
        };

        tc1.task['returnValue'] = function(bCanrowposchange) {

        	if(bCanrowposchange == true)
        		tc1.userdata.eventReturnValue = "true";
        	else if(bCanrowposchange == false)
        		tc1.userdata.eventReturnValue = "false";
        	else
        		tc1.userdata.eventReturnValue = "";
        };

        tc1.task['mergeData'] = function(objDataset) {
         	// 대기 상태 시작
        	var vdAdt = tapi.getVdAdaptor();
        	vdAdt.beginWait(2000, tapi.CF_NEXTSTEP);

        	var result = [];

        	var rtnmergeData = this.dataset3.mergeData(objDataset);

        	this.grid.createFormat();

        	var getrowCount = this.dataset3.rowcount;
        	var getcolCount = this.dataset3.colcount;

        	result.push(rtnmergeData);
        	result.push(getrowCount);
        	result.push(getcolCount);

        	return result;
        };

        tc1.task['getCellText'] = function() {
        	var result = [];

        	for(var i=0; i<5; i++)
        	{
        		result.push(this.grid.getCellText(tc1.userdata.nRow, i));
        	}

        	tc1.userdata.nRow += 5;

        	return result;
        }

        tc1.task['eventChk'] = function() {
        	var result = [];

        	result.push(tc1.userdata.eventChkList1);
        	result.push(tc1.userdata.eventChkList2);
        	result.push(tc1.userdata.eventChkList3);

        	return result;
        };

        tc1.checker['equal'] = function(alResultValues, alExpectedValues) {
        	var chk = true;
        	var chk = tapi.checkEqual(this, alResultValues, alExpectedValues);

        	return chk;
        };

        tc1.validator ['tc1_vd1'] = {
        	description: "canrowposchange 리턴값 별 mergeData() 수행",
        	autoTaskFlow : ["returnValue", "mergeData", "eventChk", "getCellText"],
        	vcinfo : {
        		argType : tapi.VCT_ARG_LIST,
        		args : [
        				//vc : bCanrowposchange 리턴값, objDataset, ev : 리턴값, rowcount, colcount, 이벤트정보, getCellText
        				{vc: [[tapi.VBT_NORMAL,false], [tapi.VBT_NORMAL,this.dataset5]],  ev: [10,10,5,"onrowsetchanged",13,"","",1,"","a","b","c"]},
        				{vc: [[tapi.VBT_NORMAL,false], [tapi.VBT_NORMAL,this.dataset1]],  ev: [15,15,5,"onrowsetchanged",13,"","",1,"유동규","a","b","c"]},
        				{vc: [[tapi.VBT_NORMAL,false], [tapi.VBT_NORMAL,this.dataset5]],  ev: [20,20,5,"onrowsetchanged",13,"canrowposchange","",1,"","a","b","c"]},
        				{vc: [[tapi.VBT_NORMAL,true], [tapi.VBT_NORMAL,this.dataset5]],   ev: [25,25,5,"onrowsetchanged",13,"canrowposchange","onrowposchanged",1,"","a","b","c"]},
        				{vc: [[tapi.VBT_NORMAL,true], [tapi.VBT_EXCEPTION,this.test]],    ev: [-1,25,5,"","","","","","","",""]},
        		]
        	},
        	prepare: function () {
        		var vdAdt = tapi.getVdAdaptor();
        		//rowposition -1로 변경
        		if(vdAdt.getIndexVC() == 2 || vdAdt.getIndexVC() == 3)
        		{
        			this.dataset3.set_enableevent(false);
        			this.dataset3.set_rowposition(-1);
        			this.dataset3.set_enableevent(true);
        		}
        		tc1.userdata.result = [];
        		tc1.userdata.eventChkList1 = [];
        		tc1.userdata.eventChkList2 = [];
        		tc1.userdata.eventChkList3 = [];
        	},
        	run: function () {
        		var vdAdt = tapi.getVdAdaptor();
        		var taskName = vdAdt.getTaskFlowName();

        		var rtn;
        		var bCanrowposchange = vdAdt.getValue(0);
        		var objDataset = vdAdt.getValue(1);

        		switch(taskName) {
        		case "returnValue":
        			tc1.task['returnValue'].call(this, bCanrowposchange);
        			break;
        		case "mergeData":
        			rtn = tc1.task['mergeData'].call(this, objDataset);
        			tc1.userdata.result.push(rtn);
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
        	teardown: function () {}
        };

        /***********************************************************************
        * 03 : 생성된 Test Case
        ***********************************************************************/
        var tcInfo = {
        	tcList : [tc1],
        	deny : [],
        	allow : [],
        	adjustTcInfo : function() {}
        };

        /***********************************************************************
        * 04 : 화면 로드 시 작업, gfnInit는 필수
        ***********************************************************************/
        this.TA_Dataset_M_mergeData_01_v2_onload = function(obj,e)
        {
           tapi.systemDebugOn();
           tapi.debugOn();

           tapi.init(tcInfo, this);

          	//LogViewer 미팝업용
        	var runner = tapi.getRunner();
        	if (runner.isTestMode() == false)
        	{
         		var logger = new tapi.ConsoleLogger();
         		runner.setLogger(logger);
        	}
        };

        /***********************************************************************
        * 05 : Runner API, Application Runner 띄우지 않고 실행하기 위함
        ***********************************************************************/
        this.btn00_onclick = function(obj,e)
        {
           var runner = tapi.getRunner();
           //------------ 선택 작업 Begin ------------------------------
        	runner.setLogLevel(tapi.TRACE);
           //------------ 선택 작업 End ------------------------------
           runner.executeTest();
        };

        /***********************************************************************
        * 06 : 이벤트 선언부
        ***********************************************************************/
        this.ds_data3_onrowsetchanged = function(obj,e)
        {
        	tc1.userdata.eventChkList1.push(e.eventid);
        	tc1.userdata.eventChkList1.push(e.reason);
        };

        this.ds_data3_canrowposchange = function(obj,e)
        {
        	tc1.userdata.eventChkList2.push(e.eventid);

        	if(tc1.userdata.eventReturnValue == "false")
        	{
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

        this.ds_data3_onrowposchanged = function(obj,e)
        {
        	tc1.userdata.eventChkList3.push(e.eventid);
        };

        /***********************************************************************
        * 07 : 사용자 정의 함수 선언부
        ***********************************************************************/
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.TA_Dataset_M_mergeData_01_v2_onload,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn_Combo_menu.addEventHandler("onclick",this.btn_button_menu_onclick,this);
            this.btn_main.addEventHandler("onclick",this.btn_main_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_mergeData.addEventHandler("onclick",this.btn_mergeData_onclick,this);
            this.btn_mergeData00.addEventHandler("onclick",this.btn_mergeData00_onclick,this);
            this.btn_reload.addEventHandler("onclick",this.btn_reload_onclick,this);
        };

        this.loadIncludeScript("A_Dataset_M_mergeData_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
