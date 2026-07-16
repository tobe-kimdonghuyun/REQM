(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TA_Dataset_P_updatecontrol_01_v2");
            this.set_titletext("TA_Dataset_P_updatecontrol_01_v2");
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
            obj.set_taborder("11");
            obj.set_text("Embedded Test");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static01","3","31","297","37",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_text("[Dataset_P_updatecontrol_48084_01]");
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

            obj = new nexacro.TextArea("txt_result","6","344","298","98",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("4");
            obj.set_value("//");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_clear","241","312","63","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("5");
            obj.set_text("clear");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid00","5","61","295","99",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_data1");
            obj.set_formats("<Formats>\n  <Format id=\"default\">\n    <Columns>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n    </Columns>\n    <Rows>\n      <Row band=\"head\" size=\"24\"/>\n      <Row band=\"body\" size=\"24\"/>\n    </Rows>\n    <Band id=\"head\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"colA\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"colB\"/>\n      <Cell col=\"2\" disptype=\"normal\" text=\"colC\"/>\n      <Cell col=\"3\" disptype=\"normal\" text=\"colD\"/>\n      <Cell col=\"4\" disptype=\"normal\" text=\"ConstA\"/>\n      <Cell col=\"5\" disptype=\"normal\" text=\"ConstB\"/>\n      <Cell col=\"6\" disptype=\"normal\" text=\"ConstC\"/>\n    </Band>\n    <Band id=\"body\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"bind:colA\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"bind:colB\"/>\n      <Cell col=\"2\" disptype=\"normal\" text=\"bind:colC\"/>\n      <Cell col=\"3\" disptype=\"normal\" text=\"bind:colD\"/>\n      <Cell col=\"4\" disptype=\"normal\" text=\"bind:ConstA\"/>\n      <Cell col=\"5\" disptype=\"normal\" text=\"bind:ConstB\"/>\n      <Cell col=\"6\" disptype=\"normal\" text=\"bind:ConstC\"/>\n    </Band>\n  </Format>\n</Formats>\n");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("6");
            obj.getSetter("useinputpanel").set("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"colA\"/><Cell col=\"1\" text=\"colB\"/><Cell col=\"2\" text=\"colC\"/><Cell col=\"3\" text=\"colD\"/><Cell col=\"4\" text=\"ConstA\"/><Cell col=\"5\" text=\"ConstB\"/><Cell col=\"6\" text=\"ConstC\"/></Band><Band id=\"body\"><Cell edittype=\"text\" text=\"bind:colA\"/><Cell col=\"1\" text=\"bind:colB\"/><Cell col=\"2\" text=\"bind:colC\"/><Cell col=\"3\" text=\"bind:colD\"/><Cell col=\"4\" text=\"bind:ConstA\"/><Cell col=\"5\" text=\"bind:ConstB\"/><Cell col=\"6\" text=\"bind:ConstC\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_addRow","211","281","93","25",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("7");
            obj.set_text("addRow()");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_deleteRow","117","281","90","25",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("8");
            obj.set_text("deleteRow()");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static03","10","283","58","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("9");
            obj.set_text("nRow");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_nRow","64","280","47","26",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("10");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_getRowType","64","314","170","25",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("11");
            obj.set_text("all getRowType()");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static06","10","171","101","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("12");
            obj.set_text("updatecontrol");
            this.addChild(obj.name, obj);

            obj = new nexacro.Radio("rb_updatecontrol","115","164","101","36",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_columncount("2");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("13");
            var rb_updatecontrol_innerdataset = new nexacro.NormalDataset("rb_updatecontrol_innerdataset", obj);
            rb_updatecontrol_innerdataset._setContents({"ColumnInfo" : {"Column" : [{"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "1","datacolumn" : "true"},{"codecolumn" : "2","datacolumn" : "false"}]});
            obj.set_innerdataset(rb_updatecontrol_innerdataset);
            obj.set_value("2");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_set","225","168","35","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("14");
            obj.set_text("set");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_get","265","168","35","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("15");
            obj.set_text("get");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","10","211","58","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("16");
            obj.set_text("nRow");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static02","10","243","90","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("17");
            obj.set_text("nRowType");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_nRow1","93","208","110","26",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("18");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_setRowType1","211","208","93","56",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("19");
            obj.set_text("setRowType()");
            this.addChild(obj.name, obj);

            obj = new nexacro.Combo("cb_nRowType","93","240","110","26",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("20");
            var cb_nRowType_innerdataset = new nexacro.NormalDataset("cb_nRowType_innerdataset", obj);
            cb_nRowType_innerdataset._setContents({"ColumnInfo" : {"Column" : [{"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "1","datacolumn" : "0"},{"codecolumn" : "2","datacolumn" : "1"},{"codecolumn" : "3","datacolumn" : "2"},{"codecolumn" : "4","datacolumn" : "4"},{"codecolumn" : "5","datacolumn" : "8"},{"codecolumn" : "6","datacolumn" : "16"}]});
            obj.set_innerdataset(cb_nRowType_innerdataset);
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
        this.addIncludeScript("A_Dataset_P_updatecontrol_01.xfdl","lib::libCommon.xjs");
        this.addIncludeScript("A_Dataset_P_updatecontrol_01.xfdl","libevent::event.util.xjs");
        this.registerScript("A_Dataset_P_updatecontrol_01.xfdl", function(nexacro, system, trace, environment, application) {
        /***********************************************************************
        * 설명      : Dataset updatecontrol Property
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
        	description: "Dataset updatecontrol Method Test",
        	//-------------- beign user defined section
        	userdata : {
        		eventChkList1 : [],	//onload 이벤트 확인용
        		result : [],
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

        tc1.task['updatecontrol'] = function(bUpdatecontrol) {
        	if(bUpdatecontrol != "default")
        		this.dataset.set_updatecontrol(bUpdatecontrol);
        }

        tc1.task['addRow'] = function() {
        	this.dataset.addRow();
        }

        tc1.task['deleteRow'] = function() {
        	this.dataset.deleteRow(0);
        }

        tc1.task['setColumn'] = function() {
        	this.dataset.setColumn(0, 1, "수정고준영");
        }

        tc1.task['eventChk'] = function() {
        	var result = [];

        	result.push(tc1.userdata.eventChkList1);

        	return result;
        };

        tc1.task['getRowType'] = function() {
        	var result = [];
        	var rtnGetRowType;

        	for(var i=0; i<this.dataset.getRowCount(); i++)
        	{
        		rtnGetRowType = this.dataset.getRowType(i);

        		result.push(rtnGetRowType);
        	}

        	return result;
        };

        tc1.checker['equal'] = function(alResultValues, alExpectedValues) {
        	var chk = true;
        	var chk = tapi.checkEqual(this, alResultValues, alExpectedValues);

        	return chk;
        };

        tc1.validator ['tc1_vd1'] = {
        	description: "updatecontrol 수행",
        	autoTaskFlow : ["updatecontrol", "addRow", "deleteRow", "setColumn", "eventChk", "getRowType"],
        	vcinfo : {
        		argType : tapi.VCT_ARG_LIST,
        		args : [
        				//vc : bUpdatecontrol, ev : getRowType
        				{vc: [[tapi.VBT_NORMAL,"default"]],  ev: [4,1,1,1,2]},
        				{vc: [[tapi.VBT_NORMAL,false]],  	 ev: [1,1,1,2,1]},
        				{vc: [[tapi.VBT_NORMAL,true]],   	 ev: [4,1,2,1,2]}
        		]
        	},
        	prepare: function () {
        		tc1.userdata.eventChkList1 = [];
        		tc1.userdata.result = [];
        	},
        	run: function () {
        		var vdAdt = tapi.getVdAdaptor();
        		var taskName = vdAdt.getTaskFlowName();

        		var rtn;
        		var bUpdatecontrol = vdAdt.getValue(0);

        		switch(taskName) {
        		case "updatecontrol":
        			tc1.task['updatecontrol'].call(this, bUpdatecontrol);
        			break;
        		case "addRow":
        			tc1.task['addRow'].call(this);
        			break;
        		case "deleteRow":
        			tc1.task['deleteRow'].call(this);
        			break;
        		case "setColumn":
        			tc1.task['setColumn'].call(this);
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
        this.TA_Dataset_P_updatecontrol_01_v2_onload = function(obj,e)
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
            this.addEventHandler("onload",this.TA_Dataset_P_updatecontrol_01_v2_onload,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn_Combo_menu.addEventHandler("onclick",this.btn_button_menu_onclick,this);
            this.btn_main.addEventHandler("onclick",this.btn_main_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_addRow.addEventHandler("onclick",this.btn_addRow_onclick,this);
            this.btn_deleteRow.addEventHandler("onclick",this.btn_deleteRow_onclick,this);
            this.btn_getRowType.addEventHandler("onclick",this.btn_getRowType_onclick,this);
            this.btn_set.addEventHandler("onclick",this.btn_set_onclick,this);
            this.btn_get.addEventHandler("onclick",this.btn_get_onclick,this);
            this.btn_setRowType1.addEventHandler("onclick",this.btn_setRowType1_onclick,this);
        };

        this.loadIncludeScript("A_Dataset_P_updatecontrol_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
