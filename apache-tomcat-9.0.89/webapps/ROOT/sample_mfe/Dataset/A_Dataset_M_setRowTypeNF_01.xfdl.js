(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TA_Dataset_M_setRowTypeNF_01_v2");
            this.set_titletext("TA_Dataset_M_setRowTypeNF_01_v2");
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
            obj.set_taborder("17");
            obj.set_text("Embedded Test");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static01","3","31","297","37",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_text("[Dataset_M_setRowTypeNF_48101_01]");
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

            obj = new nexacro.TextArea("txt_result","6","352","298","90",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("4");
            obj.set_value("//");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_clear","241","320","63","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("5");
            obj.set_text("clear");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid00","5","61","295","81",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_data1");
            obj.set_formats("<Formats>\n  <Format id=\"default\">\n    <Columns>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n    </Columns>\n    <Rows>\n      <Row band=\"head\" size=\"24\"/>\n      <Row band=\"body\" size=\"24\"/>\n    </Rows>\n    <Band id=\"head\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"colA\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"colB\"/>\n      <Cell col=\"2\" disptype=\"normal\" text=\"colC\"/>\n      <Cell col=\"3\" disptype=\"normal\" text=\"colD\"/>\n      <Cell col=\"4\" disptype=\"normal\" text=\"ConstA\"/>\n      <Cell col=\"5\" disptype=\"normal\" text=\"ConstB\"/>\n      <Cell col=\"6\" disptype=\"normal\" text=\"ConstC\"/>\n    </Band>\n    <Band id=\"body\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"bind:colA\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"bind:colB\"/>\n      <Cell col=\"2\" disptype=\"normal\" text=\"bind:colC\"/>\n      <Cell col=\"3\" disptype=\"normal\" text=\"bind:colD\"/>\n      <Cell col=\"4\" disptype=\"normal\" text=\"bind:ConstA\"/>\n      <Cell col=\"5\" disptype=\"normal\" text=\"bind:ConstB\"/>\n      <Cell col=\"6\" disptype=\"normal\" text=\"bind:ConstC\"/>\n    </Band>\n  </Format>\n</Formats>\n");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("6");
            obj.getSetter("useinputpanel").set("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"colA\"/><Cell col=\"1\" text=\"colB\"/><Cell col=\"2\" text=\"colC\"/><Cell col=\"3\" text=\"colD\"/><Cell col=\"4\" text=\"ConstA\"/><Cell col=\"5\" text=\"ConstB\"/><Cell col=\"6\" text=\"ConstC\"/></Band><Band id=\"body\"><Cell subsumtext=\"test\" text=\"bind:colA\"/><Cell col=\"1\" subsumtext=\"test\" text=\"bind:colB\"/><Cell col=\"2\" subsumtext=\"test\" text=\"bind:colC\"/><Cell col=\"3\" subsumtext=\"test\" text=\"bind:colD\"/><Cell col=\"4\" subsumtext=\"test\" text=\"bind:ConstA\"/><Cell col=\"5\" subsumtext=\"test\" text=\"bind:ConstB\"/><Cell col=\"6\" subsumtext=\"test\" text=\"bind:ConstC\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","10","147","58","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("7");
            obj.set_text("nRow");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static02","10","179","90","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("8");
            obj.set_text("nRowType");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_nRow1","93","144","110","26",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("9");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static03","10","211","86","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("10");
            obj.set_text("nRow");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static04","10","243","94","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("11");
            obj.set_text("strRowType");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_nRow2","93","208","110","26",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("12");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_setRowTypeNF1","211","144","93","56",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("13");
            obj.set_text("setRowTypeNF()");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_setRowTypeNF2","211","208","93","56",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("14");
            obj.set_text("setRowTypeNF()");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static05","14","318","58","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("15");
            obj.set_text("nRow");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_nRow3","73","315","42","26",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("16");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_getRowType","120","310","100","37",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("17");
            obj.set_text("getRowType()");
            this.addChild(obj.name, obj);

            obj = new nexacro.Combo("cb_nRowType","93","176","110","26",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("18");
            var cb_nRowType_innerdataset = new nexacro.NormalDataset("cb_nRowType_innerdataset", obj);
            cb_nRowType_innerdataset._setContents({"ColumnInfo" : {"Column" : [{"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "1","datacolumn" : "0"},{"codecolumn" : "2","datacolumn" : "1"},{"codecolumn" : "3","datacolumn" : "2"},{"codecolumn" : "4","datacolumn" : "4"},{"codecolumn" : "5","datacolumn" : "8"},{"codecolumn" : "6","datacolumn" : "16"}]});
            obj.set_innerdataset(cb_nRowType_innerdataset);
            obj.set_text("0");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Combo("cb_strRowType","93","240","110","26",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("19");
            var cb_strRowType_innerdataset = new nexacro.NormalDataset("cb_strRowType_innerdataset", obj);
            cb_strRowType_innerdataset._setContents({"ColumnInfo" : {"Column" : [{"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "1","datacolumn" : "Dataset.ROWTYPE_EMPTY"},{"codecolumn" : "2","datacolumn" : "Dataset.ROWTYPE_NORMAL"},{"codecolumn" : "3","datacolumn" : "Dataset.ROWTYPE_INSERT"},{"codecolumn" : "4","datacolumn" : "Dataset.ROWTYPE_UPDATE"},{"codecolumn" : "5","datacolumn" : "Dataset.ROWTYPE_DELETE"},{"codecolumn" : "6","datacolumn" : "Dataset.ROWTYPE_GROUP"}]});
            obj.set_innerdataset(cb_strRowType_innerdataset);
            obj.set_text("Dataset.ROWTYPE_EMPTY");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static06","10","275","101","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("20");
            obj.set_text("updatecontrol");
            this.addChild(obj.name, obj);

            obj = new nexacro.Radio("rb_updatecontrol","115","268","101","36",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_columncount("2");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("21");
            var rb_updatecontrol_innerdataset = new nexacro.NormalDataset("rb_updatecontrol_innerdataset", obj);
            rb_updatecontrol_innerdataset._setContents({"ColumnInfo" : {"Column" : [{"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "1","datacolumn" : "true"},{"codecolumn" : "2","datacolumn" : "false"}]});
            obj.set_innerdataset(rb_updatecontrol_innerdataset);
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_set","225","272","35","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("22");
            obj.set_text("set");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_get","265","272","35","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("23");
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
        this.addIncludeScript("A_Dataset_M_setRowTypeNF_01.xfdl","lib::libCommon.xjs");
        this.addIncludeScript("A_Dataset_M_setRowTypeNF_01.xfdl","libevent::event.util.xjs");
        this.registerScript("A_Dataset_M_setRowTypeNF_01.xfdl", function(nexacro, system, trace, environment, application) {
        /***********************************************************************
        * 설명      : Dataset setRowTypeNF Method
        ***********************************************************************
        *     수정일     작성자   내용
        ***********************************************************************
        *     2019.03.25  김형철   최초 작성
        ***********************************************************************
        */

        this.executeIncludeScript("lib::libCommon.xjs"); /*include "lib::libCommon.xjs"*/;
        this.executeIncludeScript("libevent::event.util.xjs"); /*include "libevent::event.util.xjs"*/;
        var tapi = this.gfnLoadTestAPI(0.71);
        this.dev_status = tapi.DEV_HOLD;
        /***********************************************************************
        * 01: Form 변수 선언부
        ***********************************************************************/
        this.dataset = this.ds_data1;
        this.grid = this.Grid00;
        /***********************************************************************
        * 02 : Test Case, Validator, Validation Case 선언부
        ***********************************************************************/
        var tc1  = {
        	description: "Dataset setRowTypeNF Method Test",
        	//-------------- beign user defined section
        	userdata : {
        		result : [],			//task 리턴값
        		eventChkList1 : [],		//onrowsetchanged 확인용
        	},
        	//--------------  end  user defined section
        	initialize: function() {
        		this.dataset.addEventHandler("onrowsetchanged", this.ds_data1_onrowsetchanged, this);
        	},
        	checker : {},
        	validator : {},
        	task : {},
        	finalize : function() {
        	}
        };

        tc1.task['setRowTypeNF'] = function(nRow, varRowType) {
        	var result = [];
        	var rtnsetRowTypeNF = this.dataset.setRowTypeNF(nRow, varRowType);

        	result.push(rtnsetRowTypeNF);

        	return result;
        };

        tc1.task['eventChk'] = function() {
        	var result = [];

        	result.push(tc1.userdata.eventChkList1);

        	return result;
        };

        tc1.task['getRowType'] = function(nRow) {
        	var result = [];

        	var rtnGetRowType = this.dataset.getRowType(nRow);

        	result.push(rtnGetRowType);

        	return result;
        };

        tc1.checker['equal'] = function(alResultValues, alExpectedValues) {
        	var chk = true;
        	var chk = tapi.checkEqual(this, alResultValues, alExpectedValues);

        	return chk;
        };

        tc1.validator ['tc1_vd1'] = {
        	description: "updatecontrol에 따른 setRowTypeNF(varCol, varVal) 수행",
        	autoTaskFlow : ["setRowTypeNF", "eventChk", "getRowType"],
        	vcinfo : {
        		argType : tapi.VCT_ARG_LIST,
        		args : [
        				//vc : nRow, varRowType, ev : 리턴값, 이벤트정보
        				{vc: [[tapi.VBT_LOWER,-1],[tapi.VBT_NORMAL,Dataset.ROWTYPE_UPDATE]],   ev: [false,"",0]},
        				{vc: [[tapi.VBT_MIN,0],[tapi.VBT_NORMAL,4]],   ev: [true,"onrowsetchanged",40,4]},
        				{vc: [[tapi.VBT_HIGHER,5],[tapi.VBT_NORMAL,"u"]],   ev: [false,"",0]},
        				{vc: [[tapi.VBT_MAX,4],[tapi.VBT_NORMAL,"U"]],   ev: [true,"onrowsetchanged",40,4]},
        			    {vc: [[tapi.VBT_NORMAL,3],[tapi.VBT_NORMAL,Dataset.ROWTYPE_UPDATE]],   ev: [true,"onrowsetchanged",40,4]},
        				{vc: [[tapi.VBT_NORMAL,3],[tapi.VBT_NORMAL,0]],   ev: [true,"onrowsetchanged",40,0]},
        				{vc: [[tapi.VBT_NORMAL,3],[tapi.VBT_NORMAL,1]],   ev: [true,"onrowsetchanged",40,1]},
        				{vc: [[tapi.VBT_NORMAL,3],[tapi.VBT_NORMAL,4]],   ev: [true,"onrowsetchanged",40,4]},
        				{vc: [[tapi.VBT_NORMAL,3],[tapi.VBT_NORMAL,8]],   ev: [true,"onrowsetchanged",40,8]},
        				{vc: [[tapi.VBT_NORMAL,3],[tapi.VBT_NORMAL,16]],   ev: [true,"onrowsetchanged",40,16]},
        				{vc: [[tapi.VBT_MIN,0],[tapi.VBT_NORMAL,"i"]],   ev: [true,"onrowsetchanged",40,2]},
        				{vc: [[tapi.VBT_MIN,0],[tapi.VBT_NORMAL,"I"]],   ev: [true,"",2]},
        				{vc: [[tapi.VBT_MIN,0],[tapi.VBT_NORMAL,"d"]],   ev: [true,"onrowsetchanged",40,8]},
        				{vc: [[tapi.VBT_MIN,0],[tapi.VBT_NORMAL,"D"]],   ev: [true,"",8]},
        				{vc: [[tapi.VBT_MIN,0],[tapi.VBT_EXCEPTION,"test"]],   ev: [true,"onrowsetchanged",40,1]},
        				{vc: [[tapi.VBT_MAX,4],[tapi.VBT_NORMAL,Dataset.ROWTYPE_EMPTY]],   ev: [true,"onrowsetchanged",40,0]},
        				{vc: [[tapi.VBT_MAX,4],[tapi.VBT_NORMAL,Dataset.ROWTYPE_NORMAL]],   ev: [true,"onrowsetchanged",40,1]},
        				{vc: [[tapi.VBT_MAX,4],[tapi.VBT_NORMAL,Dataset.ROWTYPE_INSERT]],   ev: [true,"onrowsetchanged",40,2]},
        				{vc: [[tapi.VBT_MAX,4],[tapi.VBT_NORMAL,Dataset.ROWTYPE_DELETE]],   ev: [true,"onrowsetchanged",40,8]},
        				{vc: [[tapi.VBT_MAX,4],[tapi.VBT_NORMAL,Dataset.ROWTYPE_GROUP]],   ev: [true,"onrowsetchanged",40,16]},
        				//[확인필요] nRow로 null, undefined 설정 시 nRow 값이 0으로 안됨..리턴값 자체가 0으로 적용되고 있음, CHM에 "nRow  에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 "0" 이 됩니다."
        				{vc: [[tapi.VBT_EXCEPTION,undefined],[tapi.VBT_NORMAL,Dataset.ROWTYPE_UPDATE]],   ev: [true,"onrowsetchanged",40,4]},
        				{vc: [[tapi.VBT_EXCEPTION,null],[tapi.VBT_NORMAL,Dataset.ROWTYPE_UPDATE]],   ev: [true,"",4]},
        				//updatecontrol = true
        				{vc: [[tapi.VBT_NORMAL,3],[tapi.VBT_NORMAL,Dataset.ROWTYPE_EMPTY]],   ev: [false,"",16]},
        				//filter 후
        				{vc: [[tapi.VBT_NORMAL,3],[tapi.VBT_NORMAL,Dataset.ROWTYPE_EMPTY]],   ev: [true,"onrowsetchanged",40,0]},
        			]
        	},
        	prepare: function () {
        		var vdAdt = tapi.getVdAdaptor();
        		//updatecontrol = false
        		if(vdAdt.getIndexVC() == 0)
        			this.dataset.set_updatecontrol(false);
        		//updatecontrol = true
        		if(vdAdt.getIndexVC() == 22)
        			this.dataset.set_updatecontrol(true);
        		//filter
        		if(vdAdt.getIndexVC() == 23)
        		{
        			this.dataset.set_updatecontrol(false);
        			this.dataset.set_filterstr("ColA == '1'");
        			//filter에 의한 이벤트 정보 초기화
        			tc1.userdata.eventChkList1 = [];
        		}
        	},
        	run: function () {
        		var vdAdt = tapi.getVdAdaptor();
        		var taskName = vdAdt.getTaskFlowName();
        		var nRow = vdAdt.getValue(0);
        		var varRowType = vdAdt.getValue(1);

        		switch(taskName) {
        		case "setRowTypeNF":
        			var rtn = tc1.task['setRowTypeNF'].call(this, nRow, varRowType);
        			tc1.userdata.result.push(rtn);
        			break;
        		case "eventChk":
        			var rtn = tc1.task['eventChk'].call(this);
        			tc1.userdata.result.push(rtn);
        			break;
        		case "getRowType":
        			var rtn = tc1.task['getRowType'].call(this, nRow);
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
        this.TA_Dataset_M_setRowTypeNF_01_v2_onload = function(obj,e)
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
        this.ds_data1_onrowsetchanged = function(obj,e)
        {
        	tc1.userdata.eventChkList1.push(e.eventid);
        	tc1.userdata.eventChkList1.push(e.reason);
        };
        /***********************************************************************
        * 07 : 사용자 정의 함수 선언부
        ***********************************************************************/

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.TA_Dataset_M_setRowTypeNF_01_v2_onload,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn_Combo_menu.addEventHandler("onclick",this.btn_button_menu_onclick,this);
            this.btn_main.addEventHandler("onclick",this.btn_main_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_setRowTypeNF1.addEventHandler("onclick",this.btn_setRowTypeNF1_onclick,this);
            this.btn_setRowTypeNF2.addEventHandler("onclick",this.btn_setRowTypeNF2_onclick,this);
            this.btn_getRowType.addEventHandler("onclick",this.btn_getRowType_onclick,this);
            this.btn_set.addEventHandler("onclick",this.btn_set_onclick,this);
            this.btn_get.addEventHandler("onclick",this.btn_get_onclick,this);
        };

        this.loadIncludeScript("A_Dataset_M_setRowTypeNF_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
