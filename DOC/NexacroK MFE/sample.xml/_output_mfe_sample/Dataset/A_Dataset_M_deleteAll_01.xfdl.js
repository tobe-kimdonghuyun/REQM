(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TA_Dataset_M_deleteAll_01_v2");
            this.set_titletext("TA_Dataset_M_deleteAll_01_v2");
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
            obj.set_taborder("12");
            obj.set_text("Embedded Test");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static01","3","31","301","37",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("0");
            obj.set_text("[Dataset_M_deleteAll_48132_01]");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_Combo_menu","93","1","81","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_text("◀Dataset");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("txt_result","6","284","294","156",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("2");
            obj.set_text("//");
            obj.set_value("//");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_clear","232","240","63","35",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("3");
            obj.set_text("clear");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_main","8","1","81","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("4");
            obj.set_text("◀◀Main");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_deleteAll","114","240","107","37",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("5");
            obj.set_text("deleteAll");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","10","203","122","31",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("6");
            obj.set_text("canrowposchange return");
            this.addChild(obj.name, obj);

            obj = new nexacro.Radio("rd_canrowreturn","139","200","161","26",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_columncount("2");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("7");
            var rd_canrowreturn_innerdataset = new nexacro.NormalDataset("rd_canrowreturn_innerdataset", obj);
            rd_canrowreturn_innerdataset._setContents({"ColumnInfo" : {"Column" : [{"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "true","datacolumn" : "true"},{"codecolumn" : "false","datacolumn" : "false"}]});
            obj.set_innerdataset(rd_canrowreturn_innerdataset);
            obj.set_value("true");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_reset","24","240","79","37",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("8");
            obj.set_text("reset");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static03","10","171","97","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("9");
            obj.set_text("updatecontrol");
            this.addChild(obj.name, obj);

            obj = new nexacro.Radio("rd_updatecontrol","115","168","181","26",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_columncount("2");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("10");
            var rd_updatecontrol_innerdataset = new nexacro.NormalDataset("rd_updatecontrol_innerdataset", obj);
            rd_updatecontrol_innerdataset._setContents({"ColumnInfo" : {"Column" : [{"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "true","datacolumn" : "true"},{"codecolumn" : "false","datacolumn" : "false"}]});
            obj.set_innerdataset(rd_updatecontrol_innerdataset);
            obj.set_value("true");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_reload","230","8","73","29",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("11");
            obj.set_text("reload");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid00","5","61","295","99",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_data3");
            obj.set_formats("<Formats>\n  <Format id=\"default\">\n    <Columns>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n    </Columns>\n    <Rows>\n      <Row band=\"head\" size=\"24\"/>\n      <Row band=\"body\" size=\"24\"/>\n    </Rows>\n    <Band id=\"head\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"colA\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"colB\"/>\n      <Cell col=\"2\" disptype=\"normal\" text=\"ConstA\"/>\n      <Cell col=\"3\" disptype=\"normal\" text=\"ConstB\"/>\n      <Cell col=\"4\" disptype=\"normal\" text=\"ConstC\"/>\n    </Band>\n    <Band id=\"body\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"bind:colA\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"bind:colB\"/>\n      <Cell col=\"2\" disptype=\"normal\" text=\"bind:ConstA\"/>\n      <Cell col=\"3\" disptype=\"normal\" text=\"bind:ConstB\"/>\n      <Cell col=\"4\" disptype=\"normal\" text=\"bind:ConstC\"/>\n    </Band>\n  </Format>\n</Formats>\n");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("13");
            obj.getSetter("useinputpanel").set("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"colA\"/><Cell col=\"1\" text=\"colB\"/><Cell col=\"2\" text=\"ConstA\"/><Cell col=\"3\" text=\"ConstB\"/><Cell col=\"4\" text=\"ConstC\"/></Band><Band id=\"body\"><Cell displaytype=\"buttoncontrol\" text=\"bind:colA\"/><Cell col=\"1\" text=\"bind:colB\"/><Cell col=\"2\" displaytype=\"buttoncontrol\" text=\"bind:ConstA\"/><Cell col=\"3\" text=\"bind:ConstB\"/><Cell col=\"4\" text=\"bind:ConstC\"/></Band></Format></Formats>");
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
        this.addIncludeScript("A_Dataset_M_deleteAll_01.xfdl","lib::libCommon.xjs");
        this.addIncludeScript("A_Dataset_M_deleteAll_01.xfdl","libevent::event.util.xjs");
        this.registerScript("A_Dataset_M_deleteAll_01.xfdl", function(nexacro, system, trace, environment, application) {
        /***********************************************************************
        * 설명      : Dataset deleteAll Method
        ***********************************************************************
        *     수정일     작성자   내용
        ***********************************************************************
        *     2019.02.01  김형철   최초 작성
        	  2019.02.18  김형철   2019.02.15 엔진 적용
        	  2019.02.19  김형철   2019.02.19 엔진 적용
        ***********************************************************************
        */

        this.executeIncludeScript("lib::libCommon.xjs"); /*include "lib::libCommon.xjs"*/;
        this.executeIncludeScript("libevent::event.util.xjs"); /*include "libevent::event.util.xjs"*/;
        var tapi = this.gfnLoadTestAPI(0.71);

        /***********************************************************************
        * 01: Form 변수 선언부
        ***********************************************************************/
        this.dataset = this.ds_data3;

        /***********************************************************************
        * 02 : Test Case, Validator, Validation Case 선언부
        ***********************************************************************/
        var tc1  = {
        	description: "Dataset deleteAll Method Test",
        	//-------------- beign user defined section
        	userdata : {
        		eventReturnValue : "",	//canrowposchange 리턴값 설정
        		eventChkList1 : [],		//onrowsetchanged 확인용
        		eventChkList2 : [],		//canrowposchange 확인용
        		eventChkList3 : [],		//onrowposchanged 확인용
        		result : [],			//task 리턴값
        	},
        	//--------------  end  user defined section
        	initialize: function() {
        		this.dataset.addEventHandler("onrowsetchanged", this.ds_data3_onrowsetchanged, this);
        		this.dataset.addEventHandler("canrowposchange", this.ds_data3_canrowposchange, this);
        		this.dataset.addEventHandler("onrowposchanged", this.ds_data3_onrowposchanged, this);
        	},
        	checker : {},
        	validator : {},
        	task : {},
        	finalize : function() {
        	}
        };

        tc1.task['deleteAll'] = function() {
        	var result = [];

        	var rtnDeleteAll = this.dataset.deleteAll();
        	var getUpdateControl = this.dataset.updatecontrol;
        	var getRowPosition = this.dataset.rowposition;

        	result.push(rtnDeleteAll);
        	result.push(getUpdateControl);
        	result.push(getRowPosition);

        	return result;
        };

        tc1.task['eventChk'] = function() {
        	var result = [];

        	result.push(tc1.userdata.eventChkList1);
        	result.push(tc1.userdata.eventChkList2);
        	result.push(tc1.userdata.eventChkList3);

        	return result;
        };

        tc1.task['reset'] = function() {
        	this.dataset.reset();
        	//이미지 API 필요
        };

        tc1.checker['equal'] = function(alResultValues, alExpectedValues) {
        	var chk = true;
        	var chk = tapi.checkEqual(this, alResultValues, alExpectedValues);

        	return chk;
        };

        tc1.validator ['tc1_vd1'] = {
        	description: "canrowposchanged 리턴값 true, updatecontrol=true, deleteAll() 수행",
        	autoTaskFlow : ["deleteAll", "eventChk", "reset"],
        	vcinfo : {
        		argType : tapi.VCT_ARG_NONE,
        	},
        	prepare: function () {
        		tc1.userdata.eventReturnValue = "true";
        		tc1.userdata.eventChkList1 = [];
        		tc1.userdata.eventChkList2 = [];
        		tc1.userdata.eventChkList3 = [];
        		tc1.userdata.result = [];
        		this.dataset.set_updatecontrol(true);
        	},
        	run: function () {
        		var vdAdt = tapi.getVdAdaptor();
        		var taskName = vdAdt.getTaskFlowName();
        		var rtn;

        		switch(taskName) {
        		case "deleteAll":
        			rtn = tc1.task['deleteAll'].call(this);
        			tc1.userdata.result.push(rtn);
        			break;
        		case "eventChk":
        			rtn = tc1.task['eventChk'].call(this);
        			tc1.userdata.result.push(rtn);
        			break;
        		case "reset":
        			rtn = tc1.task['reset'].call(this);
        			break;
        		}

        		return tc1.userdata.result;
        	},
        	check: function (resultValue) {
        		//ev : 리턴값, updatecontrol, rowposition, 이벤트 정보
        		var expectedValue = [5, true, -1, "onrowsetchanged", 22, "", "onrowposchanged"]
        		var chk = tc1.checker['equal'].call(this, resultValue, expectedValue);
        		return chk;
        	},
        	teardown: function () {
        	}
        };

        tc1.validator ['tc1_vd2'] = {
        	description: "canrowposchanged 리턴값 true, updatecontrol=false, deleteAll() 수행",
        	autoTaskFlow : ["deleteAll", "eventChk", "reset"],
        	vcinfo : {
        		argType : tapi.VCT_ARG_NONE,
        	},
        	prepare: function () {
        		tc1.userdata.eventReturnValue = "true";
        		tc1.userdata.eventChkList1 = [];
        		tc1.userdata.eventChkList2 = [];
        		tc1.userdata.eventChkList3 = [];
        		tc1.userdata.result = [];
        		this.dataset.set_updatecontrol(false);
        	},
        	run: function () {
        		var vdAdt = tapi.getVdAdaptor();
        		var taskName = vdAdt.getTaskFlowName();
        		var rtn;

        		switch(taskName) {
        		case "deleteAll":
        			rtn = tc1.task['deleteAll'].call(this);
        			tc1.userdata.result.push(rtn);
        			break;
        		case "eventChk":
        			rtn = tc1.task['eventChk'].call(this);
        			tc1.userdata.result.push(rtn);
        			break;
        		case "reset":
        			rtn = tc1.task['reset'].call(this);
        			break;
        		}

        		return tc1.userdata.result;
        	},
        	check: function (resultValue) {
        		//ev : 리턴값, updatecontrol, rowposition, 이벤트 정보
        		var expectedValue = [5, false, -1, "onrowsetchanged", 22, "", ""]
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
        this.TA_Dataset_M_deleteAll_01_v2_onload = function(obj,e)
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
        };

        /***********************************************************************
        * 07 : 사용자 정의 함수 선언부
        ***********************************************************************/
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.TA_Dataset_M_deleteAll_01_v2_onload,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn_Combo_menu.addEventHandler("onclick",this.btn_button_menu_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_main.addEventHandler("onclick",this.btn_main_onclick,this);
            this.btn_deleteAll.addEventHandler("onclick",this.btn_deleteAll_onclick,this);
            this.btn_reset.addEventHandler("onclick",this.btn_reset_onclick,this);
            this.btn_reload.addEventHandler("onclick",this.btn_reload_onclick,this);
        };

        this.loadIncludeScript("A_Dataset_M_deleteAll_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
