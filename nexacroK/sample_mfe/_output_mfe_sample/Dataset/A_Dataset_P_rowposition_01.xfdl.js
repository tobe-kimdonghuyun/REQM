(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TA_Dataset_P_rowposition_01_v2");
            this.set_titletext("TA_Dataset_P_rowposition_01_v2");
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
            obj._setContents({"ColumnInfo" : {"ConstColumn" : [{"id" : "ConstA","size" : "30","type" : "STRING","value" : "A"},{"id" : "ConstB","size" : "30","type" : "STRING","value" : "B"},{"id" : "ConstC","size" : "30","type" : "STRING","value" : "C"}],"Column" : [{"id" : "colA","size" : "256","type" : "STRING"},{"id" : "colB","size" : "256","type" : "STRING"},{"id" : "colC","size" : "256","type" : "INT"},{"id" : "colD","size" : "256","type" : "STRING"}]},"Rows" : [{"colB" : "유동규","colA" : "1","colC" : "100","colD" : "투우"},{"colB" : "주인희","colA" : "1","colC" : "200","colD" : "비이"},{"colB" : "고준영","colA" : "2","colC" : "200","colD" : "소오"},{"colB" : "이정빈","colA" : "3","colC" : "300","colD" : "프트"},{"colA" : "4","colB" : "김선주","colC" : "400","colD" : "비이"},{"colA" : "5","colB" : "우태호","colC" : "400","colD" : "비이"},{"colA" : "6","colB" : "김형철","colC" : "400","colD" : "비이"},{"colA" : "7","colB" : "김지현","colC" : "400","colD" : "비이"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Button("btn00","314","4","107","36",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Embedded Test");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static01","3","31","301","37",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_text("[Dataset_P_rowposition_48083_01]");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_Combo_menu","93","1","81","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("2");
            obj.set_text("◀Dataset");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("txt_result","6","328","298","116",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("3");
            obj.set_text("//");
            obj.set_value("//");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_clear","241","296","63","29",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("4");
            obj.set_text("clear");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_main","8","1","81","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("5");
            obj.set_text("◀◀Main");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","8","229","99","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("6");
            obj.set_text("rowposition");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("txt_value","113","230","107","31",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("7");
            obj.set_value("2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_set","227","230","35","31",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("8");
            obj.set_text("set");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_get","269","230","35","31",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("9");
            obj.set_text("get");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid00","5","61","295","127",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_data1");
            obj.set_formats("<Formats>\n  <Format id=\"default\">\n    <Columns>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n    </Columns>\n    <Rows>\n      <Row band=\"head\" size=\"24\"/>\n      <Row band=\"body\" size=\"24\"/>\n    </Rows>\n    <Band id=\"head\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"colA\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"colB\"/>\n      <Cell col=\"2\" disptype=\"normal\" text=\"colC\"/>\n      <Cell col=\"3\" disptype=\"normal\" text=\"colD\"/>\n      <Cell col=\"4\" disptype=\"normal\" text=\"ConstA\"/>\n      <Cell col=\"5\" disptype=\"normal\" text=\"ConstB\"/>\n      <Cell col=\"6\" disptype=\"normal\" text=\"ConstC\"/>\n    </Band>\n    <Band id=\"body\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"bind:colA\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"bind:colB\"/>\n      <Cell col=\"2\" disptype=\"normal\" text=\"bind:colC\"/>\n      <Cell col=\"3\" disptype=\"normal\" text=\"bind:colD\"/>\n      <Cell col=\"4\" disptype=\"normal\" text=\"bind:ConstA\"/>\n      <Cell col=\"5\" disptype=\"normal\" text=\"bind:ConstB\"/>\n      <Cell col=\"6\" disptype=\"normal\" text=\"bind:ConstC\"/>\n    </Band>\n  </Format>\n</Formats>\n");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("10");
            obj.getSetter("useinputpanel").set("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"colA\"/><Cell col=\"1\" disptype=\"normal\" text=\"colB\"/><Cell col=\"2\" disptype=\"normal\" text=\"colC\"/><Cell col=\"3\" disptype=\"normal\" text=\"colD\"/><Cell col=\"4\" disptype=\"normal\" text=\"ConstA\"/><Cell col=\"5\" disptype=\"normal\" text=\"ConstB\"/><Cell col=\"6\" disptype=\"normal\" text=\"ConstC\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:colA\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:colB\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:colC\"/><Cell col=\"3\" disptype=\"normal\" text=\"bind:colD\"/><Cell col=\"4\" disptype=\"normal\" text=\"bind:ConstA\"/><Cell col=\"5\" disptype=\"normal\" text=\"bind:ConstB\"/><Cell col=\"6\" disptype=\"normal\" text=\"bind:ConstC\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static02","8","269","128","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("11");
            obj.set_text("canrowposchange return");
            this.addChild(obj.name, obj);

            obj = new nexacro.Radio("rd_return","144","269","156","28",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_columncount("2");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("12");
            var rd_return_innerdataset = new nexacro.NormalDataset("rd_return_innerdataset", obj);
            rd_return_innerdataset._setContents({"ColumnInfo" : {"Column" : [{"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "true","datacolumn" : "true"},{"codecolumn" : "false","datacolumn" : "false"}]});
            obj.set_innerdataset(rd_return_innerdataset);
            obj.set_value("false");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_del","92","296","140","29",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("13");
            obj.set_text("delete All Dataset");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static03","10","189","91","27",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("enableevent");
            this.addChild(obj.name, obj);

            obj = new nexacro.Radio("rd_enableevent","113","196","106","20",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_columncount("2");
            obj.set_datacolumn("datacolumn");
            obj.set_taborder("15");
            var rd_enableevent_innerdataset = new nexacro.NormalDataset("rd_enableevent_innerdataset", obj);
            rd_enableevent_innerdataset._setContents({"ColumnInfo" : {"Column" : [{"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "true","datacolumn" : "true"},{"codecolumn" : "false","datacolumn" : "false"}]});
            obj.set_innerdataset(rd_enableevent_innerdataset);
            obj.set_value("true");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_enableevent_set","227","191","35","31",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("set");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_enableevent_get","269","191","35","31",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("get");
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
        this.addIncludeScript("A_Dataset_P_rowposition_01.xfdl","lib::libCommon.xjs");
        this.addIncludeScript("A_Dataset_P_rowposition_01.xfdl","libevent::event.util.xjs");
        this.registerScript("A_Dataset_P_rowposition_01.xfdl", function(nexacro, system, trace, environment, application) {
        /***********************************************************************
        * 설명      : Dataset rowposition Property
        ***********************************************************************
        *     수정일     작성자   내용
        ***********************************************************************
        *     2019.03.11  김형철   최초 작성
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
        	description: "Dataset rowposition Method Test",
        	//-------------- beign user defined section
        	userdata : {
        		eventReturnValue : "",	//canrowposchange 리턴값 설정
        		eventChkList1 : [],		//canrowposchange 확인용
        		eventChkList1 : [],		//onrowposchanged 확인용
        		result : [],			//task 리턴값
        	},
        	//--------------  end  user defined section
        	initialize: function() {
        		this.dataset.addEventHandler("canrowposchange", this.ds_data1_canrowposchange, this);
        		this.dataset.addEventHandler("onrowposchanged", this.ds_data1_onrowposchanged, this);
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

        tc1.task['rowposition'] = function(nRow) {
        	var result = [];

        	this.dataset.set_rowposition(nRow);
        	var getRowPosition = this.dataset.rowposition;

        	result.push(getRowPosition);

        	return result;
        };

        tc1.task['eventChk'] = function() {
        	var result = [];

        	result.push(tc1.userdata.eventChkList1);
        	result.push(tc1.userdata.eventChkList2);

        	return result;
        };

        tc1.task['currentrow'] = function() {
        	var result = [];

        	var getCurrentRow = this.grid.currentrow;

        	result.push(getCurrentRow);

        	return result;
        }

        tc1.checker['equal'] = function(alResultValues, alExpectedValues) {
        	var chk = true;
        	var chk = tapi.checkEqual(this, alResultValues, alExpectedValues);

        	return chk;
        };

        tc1.validator ['tc1_vd1'] = {
        	description: "canrowposchanged 리턴값 및 selecttype에 따른 rowposition(nRow) 수행",
        	autoTaskFlow : ["returnValue", "rowposition", "eventChk", "currentrow"],
        	vcinfo : {
        		argType : tapi.VCT_ARG_LIST,
        		args : [
        				//vc : bCancolumnchange ,nRow, ev : rowposition, 이벤트정보, currentrow
        			    {vc: [[tapi.VBT_NORMAL,true],[tapi.VBT_LOWER,-1]],   ev: [-1,"canrowposchange","onrowposchanged",-1]},
        				{vc: [[tapi.VBT_NORMAL,true],[tapi.VBT_MIN,0]],      ev: [0,"canrowposchange","onrowposchanged",0]},
        				{vc: [[tapi.VBT_NORMAL,true],[tapi.VBT_HIGHER,8]],   ev: [-1,"canrowposchange","onrowposchanged",-1]},
        				{vc: [[tapi.VBT_NORMAL,true],[tapi.VBT_MAX,7]],      ev: [7,"canrowposchange","onrowposchanged",7]},
        				{vc: [[tapi.VBT_NORMAL,true],[tapi.VBT_NORMAL,4]],   ev: [4,"canrowposchange","onrowposchanged",4]},
        				{vc: [[tapi.VBT_NORMAL,false],[tapi.VBT_NORMAL,5]],  ev: [4,"canrowposchange","",4]},
        				{vc: [[tapi.VBT_NORMAL,""],[tapi.VBT_NORMAL,5]],     ev: [4,"canrowposchange","",4]},
        				//Grid selecttype = "cell"
        				{vc: [[tapi.VBT_NORMAL,true],[tapi.VBT_NORMAL,6]],   ev: [6,"canrowposchange","onrowposchanged",6]},
        				//Grid selecttype = "row", "cell" 이외의 값
        				{vc: [[tapi.VBT_NORMAL,true],[tapi.VBT_NORMAL,2]],   ev: [2,"canrowposchange","onrowposchanged",6]},
        		]
        	},
        	prepare: function () {
        		var vdAdt = tapi.getVdAdaptor();

        		//Grid selecttype = "cell"
        		if(vdAdt.getIndexVC() == 7)
        			this.grid.set_selecttype("cell");
        		//Grid selecttype = "row", "cell" 이외의 값
        		if(vdAdt.getIndexVC() == 8)
        			this.grid.set_selecttype("multirow");

        		tc1.userdata.eventChkList1 = [];
        		tc1.userdata.eventChkList2 = [];
        		tc1.userdata.result = [];
        	},
        	run: function () {
        		var vdAdt = tapi.getVdAdaptor();
        		var taskName = vdAdt.getTaskFlowName();
        		var bCancolumnchange = vdAdt.getValue(0);
        		var nRow = vdAdt.getValue(1);
        		var rtn;

        		switch(taskName) {
        		case "returnValue":
        			tc1.task['returnValue'].call(this, bCancolumnchange);
        			break;
        		case "rowposition":
        			rtn = tc1.task['rowposition'].call(this, nRow);
        			tc1.userdata.result.push(rtn);
        			break;
        		case "eventChk":
        			rtn = tc1.task['eventChk'].call(this);
        			tc1.userdata.result.push(rtn);
        			break;
        		case "currentrow":
        			rtn = tc1.task['currentrow'].call(this);
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
        this.TA_Dataset_P_rowposition_01_v2_onload = function(obj,e)
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
        * canrowposchange
        ***********************************************************************/
        this.ds_data1_canrowposchange = function(obj,e)
        {
        	tc1.userdata.eventChkList1.push(e.eventid);

        	if(tc1.userdata.eventReturnValue == "false")
        	{
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
        this.ds_data1_onrowposchanged = function(obj,e)
        {
        	if(tc1.userdata.eventChkList2 == null) return;
        	tc1.userdata.eventChkList2.push(e.eventid);
        };
        /***********************************************************************
        * 07 : 사용자 정의 함수 선언부
        ***********************************************************************/
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.TA_Dataset_P_rowposition_01_v2_onload,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.Static01.addEventHandler("onclick",this.Static01_onclick,this);
            this.btn_Combo_menu.addEventHandler("onclick",this.btn_button_menu_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_main.addEventHandler("onclick",this.btn_main_onclick,this);
            this.btn_set.addEventHandler("onclick",this.btn_set_onclick,this);
            this.btn_get.addEventHandler("onclick",this.btn_get_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_enableevent_set.addEventHandler("onclick",this.btn_enableevent_set_onclick,this);
            this.btn_enableevent_get.addEventHandler("onclick",this.btn_enableevent_get_onclick,this);
        };

        this.loadIncludeScript("A_Dataset_P_rowposition_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
