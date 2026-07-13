(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TA_Dataset_M_setColumn_01_v2");
            this.set_titletext("TA_Dataset_M_setColumn_01_v2");
            this.getSetter("classname").set("23711_Buttoncssimage_01");
            this.getSetter("inheritanceid").set("");
            this.getSetter("position").set("absolute");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(440,560);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.DataObject("DataObject00", this);
            obj._setContents({
              "dataset" : [
                {
                "Check" : "1",
                  "colA" : "1",
                  "colB" : "유동규",
                  "colC" : 100,
                  "colD" : "투우"
                },
                {
                     "Check" : "0",
                  "colA" : "1",
                    "colB" : "주인희",
                  "colC" : 200,
                  "colD" : "비이"
                },
                    {
                         "Check" : "1",
                  "colA" : "2",
                        "colB" : "고준영",
                  "colC" : 200,
                  "colD" : "소오"
                },
                    {
                         "Check" : "1",
                  "colA" : "3",
                  "colB" : "이정빈",
                  "colC" : 300,
                  "colD" : "프트"
                },
                {
                     "Check" : "0",
                  "colA" : "4",
                  "colB" : "김선주",
                  "colC" : 400,
                  "colD" : "비이"
                }
              ]
            });
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("ds_data1", this);
            obj.set_binddataobject("DataObject00");
            obj.set_dataobjectbindmode("twoway");
            obj.set_dataobjectpath("$.dataset[*]");
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("false");
            obj.set_useclientlayout("false");
            obj._setContents({"ColumnInfo" : {"ConstColumn" : [{"id" : "ConstA","size" : "30","type" : "STRING","value" : "A"},{"id" : "ConstB","size" : "30","type" : "STRING","value" : "B"},{"id" : "ConstC","size" : "30","type" : "STRING","value" : "C"}],"Column" : [{"datapath" : "@.Check","id" : "Check","size" : "256","type" : "STRING"},{"datapath" : "@.colA","id" : "colA","size" : "256","type" : "STRING"},{"datapath" : "@.colB","id" : "colB","size" : "256","type" : "STRING"},{"datapath" : "@.colC","id" : "colC","size" : "256","type" : "INT"},{"datapath" : "@.colD","id" : "colD","size" : "256","type" : "STRING"}]}});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("ds_data2", this);
            obj.set_binddataobject("DataObject00");
            obj.set_dataobjectbindmode("twoway");
            obj.set_dataobjectpath("$.dataset[*]");
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents({"ColumnInfo" : {"ConstColumn" : [{"id" : "ConstA","size" : "30","type" : "STRING","value" : "A"},{"id" : "ConstB","size" : "30","type" : "STRING","value" : "B"},{"id" : "ConstC","size" : "30","type" : "STRING","value" : "C"}],"Column" : [{"datapath" : "@.Check","id" : "Check","size" : "256","type" : "STRING"},{"datapath" : "@.colA","id" : "colA","size" : "256","type" : "STRING"},{"datapath" : "@.colB","id" : "colB","size" : "256","type" : "STRING"},{"datapath" : "@.colC","id" : "colC","size" : "256","type" : "INT"},{"datapath" : "@.colD","id" : "colD","size" : "256","type" : "STRING"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Button("btn00","314","4","107","36",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Embedded Test");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static01","235","3","69","28",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_text("[48105]");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_Combo_menu","85","1","75","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("2");
            obj.set_text("◀Dataset");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_main","8","1","70","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("3");
            obj.set_text("◀◀Main");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("txt_result","4","703","298","95",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("4");
            obj.set_value("//");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_clear","239","668","63","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("5");
            obj.set_text("clear");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid00","5","37","585","203",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_data1");
            obj.set_formats("<Formats>\n  <Format id=\"default\">\n    <Columns>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n    </Columns>\n    <Rows>\n      <Row band=\"head\" size=\"24\"/>\n      <Row band=\"body\" size=\"24\"/>\n    </Rows>\n    <Band id=\"head\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"colA\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"colB\"/>\n      <Cell col=\"2\" disptype=\"normal\" text=\"colC\"/>\n      <Cell col=\"3\" disptype=\"normal\" text=\"colD\"/>\n      <Cell col=\"4\" disptype=\"normal\" text=\"ConstA\"/>\n      <Cell col=\"5\" disptype=\"normal\" text=\"ConstB\"/>\n      <Cell col=\"6\" disptype=\"normal\" text=\"ConstC\"/>\n    </Band>\n    <Band id=\"body\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"bind:colA\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"bind:colB\"/>\n      <Cell col=\"2\" disptype=\"normal\" text=\"bind:colC\"/>\n      <Cell col=\"3\" disptype=\"normal\" text=\"bind:colD\"/>\n      <Cell col=\"4\" disptype=\"normal\" text=\"bind:ConstA\"/>\n      <Cell col=\"5\" disptype=\"normal\" text=\"bind:ConstB\"/>\n      <Cell col=\"6\" disptype=\"normal\" text=\"bind:ConstC\"/>\n    </Band>\n  </Format>\n</Formats>\n");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("6");
            obj.getSetter("useinputpanel").set("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Check\"/><Cell col=\"1\" text=\"colA\"/><Cell col=\"2\" text=\"colB\"/><Cell col=\"3\" text=\"colC\"/><Cell col=\"4\" text=\"colD\"/><Cell col=\"5\" text=\"ConstA\"/><Cell col=\"6\" text=\"ConstB\"/><Cell col=\"7\" text=\"ConstC\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:Check\"/><Cell col=\"1\" text=\"bind:colA\"/><Cell col=\"2\" text=\"bind:colB\"/><Cell col=\"3\" text=\"bind:colC\"/><Cell col=\"4\" text=\"bind:colD\"/><Cell col=\"5\" text=\"bind:ConstA\"/><Cell col=\"6\" text=\"bind:ConstB\"/><Cell col=\"7\" text=\"bind:ConstC\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","8","479","58","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("7");
            obj.set_text("nRow");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static02","8","511","90","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("8");
            obj.set_text("nColIdx");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_nRow1","91","476","110","26",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("9");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static03","8","575","86","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("10");
            obj.set_text("nRow");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static04","8","607","94","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("11");
            obj.set_text("strColID");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_nRow2","91","572","110","26",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("12");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_setColumn1","209","476","93","90",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("13");
            obj.set_text("setColumn()");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_setColumn2","209","572","93","90",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("14");
            obj.set_text("setColumn()");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_nColIdx","91","508","110","26",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("15");
            obj.set_value("1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_varVal1","91","540","110","26",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("16");
            obj.set_value("TEST00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static05","8","543","90","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("17");
            obj.set_text("varVal");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_strColID","91","604","110","26",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("18");
            obj.set_value("colA");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static06","8","639","94","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("19");
            obj.set_text("varVal");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_varVal2","91","636","110","26",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("20");
            obj.set_value("TEST01");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static07","10","664","103","35",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("21");
            obj.set_text("cancolumnchange \r\nEvent Return :");
            this.addChild(obj.name, obj);

            obj = new nexacro.Radio("rd_return","122","673","109","19",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_columncount("2");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("position").set("absolute");
            obj.set_rowcount("1");
            obj.set_taborder("22");
            var rd_return_innerdataset = new nexacro.NormalDataset("rd_return_innerdataset", obj);
            rd_return_innerdataset._setContents({"ColumnInfo" : {"Column" : [{"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "1","datacolumn" : "true"},{"codecolumn" : "2","datacolumn" : "false"}]});
            obj.set_innerdataset(rd_return_innerdataset);
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_idx1","164","2","29","29",null,null,null,null,null,null,this);
            obj.set_enable("false");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("23");
            obj.set_text("1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_idx2","196","2","29","29",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("24");
            obj.set_text("2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid2","17","257","573","203",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_data2");
            obj.set_formats("<Formats>\n  <Format id=\"default\">\n    <Columns>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n    </Columns>\n    <Rows>\n      <Row band=\"head\" size=\"24\"/>\n      <Row band=\"body\" size=\"24\"/>\n    </Rows>\n    <Band id=\"head\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"colA\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"colB\"/>\n      <Cell col=\"2\" disptype=\"normal\" text=\"colC\"/>\n      <Cell col=\"3\" disptype=\"normal\" text=\"colD\"/>\n      <Cell col=\"4\" disptype=\"normal\" text=\"ConstA\"/>\n      <Cell col=\"5\" disptype=\"normal\" text=\"ConstB\"/>\n      <Cell col=\"6\" disptype=\"normal\" text=\"ConstC\"/>\n    </Band>\n    <Band id=\"body\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"bind:colA\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"bind:colB\"/>\n      <Cell col=\"2\" disptype=\"normal\" text=\"bind:colC\"/>\n      <Cell col=\"3\" disptype=\"normal\" text=\"bind:colD\"/>\n      <Cell col=\"4\" disptype=\"normal\" text=\"bind:ConstA\"/>\n      <Cell col=\"5\" disptype=\"normal\" text=\"bind:ConstB\"/>\n      <Cell col=\"6\" disptype=\"normal\" text=\"bind:ConstC\"/>\n    </Band>\n  </Format>\n</Formats>\n");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("25");
            obj.getSetter("useinputpanel").set("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Check\"/><Cell col=\"1\" text=\"colA\"/><Cell col=\"2\" text=\"colB\"/><Cell col=\"3\" text=\"colC\"/><Cell col=\"4\" text=\"colD\"/><Cell col=\"5\" text=\"ConstA\"/><Cell col=\"6\" text=\"ConstB\"/><Cell col=\"7\" text=\"ConstC\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:Check\"/><Cell col=\"1\" text=\"bind:colA\"/><Cell col=\"2\" text=\"bind:colB\"/><Cell col=\"3\" text=\"bind:colC\"/><Cell col=\"4\" text=\"bind:colD\"/><Cell col=\"5\" text=\"bind:ConstA\"/><Cell col=\"6\" text=\"bind:ConstB\"/><Cell col=\"7\" text=\"bind:ConstC\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn01","485","5","92","33",null,null,null,null,null,null,this);
            obj.set_taborder("26");
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

        };
        
        // User Script
        this.addIncludeScript("A_DataObject_M_removeChangedInfo_01.xfdl","lib::libCommon.xjs");
        this.addIncludeScript("A_DataObject_M_removeChangedInfo_01.xfdl","libevent::event.util.xjs");
        this.registerScript("A_DataObject_M_removeChangedInfo_01.xfdl", function(nexacro, system, trace, environment, application) {
        /***********************************************************************
        * 설명      : Dataset onvaluechanged Event
        * 작성일    : 2021.09.14
        * 작성자    : 함경곤
        * 수정이력  : DataObject removeChangedInfo, getChangedInfo, clearChangedInfo
        ***********************************************************************
        *     수정일     작성자   내용
        ***********************************************************************
        -   21.09.14     함경곤   테스트케이스 추가
        ***********************************************************************
        */

        this.executeIncludeScript("lib::libCommon.xjs"); /*include "lib::libCommon.xjs"*/;
        this.executeIncludeScript("libevent::event.util.xjs"); /*include "libevent::event.util.xjs"*/;
        var tapi = this.gfnLoadTestAPI(0.71);
        //this.dev_status = tapi.DEV_HOLD;
        /***********************************************************************
        * 01: Form 변수 선언부
        ***********************************************************************/
        this.dataset = this.ds_data1;
        this.grid = this.Grid00;
        /***********************************************************************
        * 02 : Test Case, Validator, Validation Case 선언부
        ***********************************************************************/
        var tc1  = {
        	description: "DataObject Method Test",
        	//-------------- beign user defined section
        	userdata : {
        		result : [],			//task 리턴값
        		eventChkList1 : [],		//cancolumnchange 확인용
        		eventChkList2 : [],		//oncolumnchanged 확인용
        	},
        	//--------------  end  user defined section
        	initialize: function() {

        	this.DataObject00.set_data(this.org_data);
        	this.dataset.setColumn(0, 1, "TEST01");
        	this.dataset.setColumn(1, 2, "TEST02");
        	this.dataset.setColumn(3, 3, "TEST03");
        	},
        	checker : {},
        	validator : {},
        	task : {},
        	finalize : function() {
        	}
        };

        tc1.task['getChangedInfo'] = function() {
        	var result = [];
        	var retval = this.DataObject00.getChangedInfo();
        	result.push(retval.length);

        	return result;
        };

        tc1.task['removeChangedInfo'] = function() {
        	var result = [];
        	var retVal = this.DataObject00.removeChangedInfo(this.uid);
        	retVal = retVal === false ? false : true;
        	result.push(retVal);
        	retval = this.DataObject00.getChangedInfo();
        	result.push(retval.length);
        	return result;
        };

        tc1.task['clearChangedInfo'] = function() {
        	var result = [];
        	this.DataObject00.clearChangedInfo();
        	var retval = this.DataObject00.getChangedInfo();
        	result.push(retval.length);
        	return result;
        };

        tc1.task['eventChk'] = function() {
        	var result = [];
        	//result.push(tc1.userdata.eventChkList1);
        	//result.push(tc1.userdata.eventChkList2);

        	return result;
        };

        tc1.checker['equal'] = function(alResultValues, alExpectedValues) {
        	var chk = true;
        	var chk = tapi.checkEqual(this, alResultValues, alExpectedValues);

        	return chk;
        };

        tc1.validator ['tc1_vd1'] = {
        	description: "changedInfo 관련 메서드 테스트",
        	autoTaskFlow : ["getChangedInfo","removeChangedInfo","clearChangedInfo"],
        	vcinfo : {
        		argType : tapi.VCT_ARG_LIST,
        		args : [
        				//vc : nRow, varCol, varVal, ev : 리턴값, 이벤트정보, getCellText
        				{vc: [[tapi.VBT_MIN,"CASE0"]],   ev: [3,true,2,0]},
        			]
        	},
        	prepare: function () {
        		tc1.userdata.result = [];

        	},
        	run: function () {
        		var vdAdt = tapi.getVdAdaptor();
        		var taskName = vdAdt.getTaskFlowName();
        		//var method = vdAdt.getValue(0);
        		//var varCol = vdAdt.getValue(1);
        		//var varVal = vdAdt.getValue(2);

        		switch(taskName) {
        		case "getChangedInfo":
        			var rtn = tc1.task['getChangedInfo'].call(this);
        			tc1.userdata.result.push(rtn);
        			break;
        		case "removeChangedInfo":
        			var rtn = tc1.task['removeChangedInfo'].call(this);
        			tc1.userdata.result.push(rtn);
        			break;
        		case "clearChangedInfo":
        			var rtn = tc1.task['clearChangedInfo'].call(this);
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
        this.TA_Dataset_M_setColumn_01_v2_onload = function(obj,e)
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
        	this.org_data = this.ds_data1.data;
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


        this.DataObject00_ondatachanged = function(obj,e)
        {
        	tc1.userdata.eventChkList1.push(e.eventid);
        	tc1.userdata.eventChkList1.push(e.infoarray.length);
        	tc1.userdata.eventChkList1.push(e.fromobject.id);
        };

        this.DataObject00_onvaluechanged = function(obj,e)
        {
        	this.uid = e.uid;
        	/*
        	var is_valid = false;
        	if (uid)
        		is_valid = uid.indexOf("_")  > -1 ? true : false;
        	tc1.userdata.eventChkList1.push(e.eventid);
        	tc1.userdata.eventChkList1.push(is_valid);
        	tc1.userdata.eventChkList1.push(e.dataobjectpath);
        	tc1.userdata.eventChkList1.push(e.fromobject.id);
        	tc1.userdata.eventChkList1.push(e.index);
        	tc1.userdata.eventChkList1.push(e.key);
        	tc1.userdata.eventChkList1.push(e.sourcedatasetid);
        	tc1.userdata.eventChkList1.push(e.value);
        	*/
        };

        this.btn01_onclick = function(obj,e)
        {
        	trace(this.DataObject00.getChangedInfo());
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.TA_Dataset_M_setColumn_01_v2_onload,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn_Combo_menu.addEventHandler("onclick",this.btn_button_menu_onclick,this);
            this.btn_main.addEventHandler("onclick",this.btn_main_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_setColumn1.addEventHandler("onclick",this.btn_setColumn1_onclick,this);
            this.btn_setColumn2.addEventHandler("onclick",this.btn_setColumn2_onclick,this);
            this.btn_idx1.addEventHandler("onclick",this.btn_idx1_onclick,this);
            this.btn_idx2.addEventHandler("onclick",this.btn_idx2_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.DataObject00.addEventHandler("ondatachanged",this.DataObject00_ondatachanged,this);
            this.DataObject00.addEventHandler("onvaluechanged",this.DataObject00_onvaluechanged,this);
            this.ds_data2.addEventHandler("cancolumnchange",this.ds_data2_cancolumnchange,this);
            this.ds_data2.addEventHandler("oncolumnchanged",this.ds_data2_oncolumnchanged,this);
        };

        this.loadIncludeScript("A_DataObject_M_removeChangedInfo_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
