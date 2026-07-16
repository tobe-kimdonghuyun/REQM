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
            obj = new nexacro.Dataset("ds00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "Column0","size" : "256","type" : "DATETIME"},{"id" : "Column1","size" : "256","type" : "DATETIME"},{"id" : "Column2","size" : "256","type" : "DATETIME"}]},"Rows" : [{"Column0" : "","Column1" : "\"\""}]});
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

            obj = new nexacro.TextArea("txt_result","6","347","298","95",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("4");
            obj.set_value("//");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_clear","241","312","63","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("5");
            obj.set_text("clear");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid00","5","37","295","81",null,null,null,null,null,null,this);
            obj.set_binddataset("");
            obj.set_formats("<Formats>\n  <Format id=\"default\">\n    <Columns>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n    </Columns>\n    <Rows>\n      <Row band=\"head\" size=\"24\"/>\n      <Row band=\"body\" size=\"24\"/>\n    </Rows>\n    <Band id=\"head\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"colA\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"colB\"/>\n      <Cell col=\"2\" disptype=\"normal\" text=\"colC\"/>\n      <Cell col=\"3\" disptype=\"normal\" text=\"colD\"/>\n      <Cell col=\"4\" disptype=\"normal\" text=\"ConstA\"/>\n      <Cell col=\"5\" disptype=\"normal\" text=\"ConstB\"/>\n      <Cell col=\"6\" disptype=\"normal\" text=\"ConstC\"/>\n    </Band>\n    <Band id=\"body\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"bind:colA\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"bind:colB\"/>\n      <Cell col=\"2\" disptype=\"normal\" text=\"bind:colC\"/>\n      <Cell col=\"3\" disptype=\"normal\" text=\"bind:colD\"/>\n      <Cell col=\"4\" disptype=\"normal\" text=\"bind:ConstA\"/>\n      <Cell col=\"5\" disptype=\"normal\" text=\"bind:ConstB\"/>\n      <Cell col=\"6\" disptype=\"normal\" text=\"bind:ConstC\"/>\n    </Band>\n  </Format>\n</Formats>\n");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("6");
            obj.getSetter("useinputpanel").set("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Check\"/><Cell col=\"1\" text=\"colA\"/><Cell col=\"2\" text=\"colB\"/><Cell col=\"3\" text=\"colC\"/><Cell col=\"4\" text=\"colD\"/><Cell col=\"5\" text=\"ConstA\"/><Cell col=\"6\" text=\"ConstB\"/><Cell col=\"7\" text=\"ConstC\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:Check\"/><Cell col=\"1\" text=\"bind:colA\"/><Cell col=\"2\" text=\"bind:colB\"/><Cell col=\"3\" text=\"bind:colC\"/><Cell col=\"4\" text=\"bind:colD\"/><Cell col=\"5\" text=\"bind:ConstA\"/><Cell col=\"6\" text=\"bind:ConstB\"/><Cell col=\"7\" text=\"bind:ConstC\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","10","123","58","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("7");
            obj.set_text("nRow");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static02","10","155","90","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("8");
            obj.set_text("nColIdx");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_nRow1","93","120","110","26",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("9");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static03","10","219","86","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("10");
            obj.set_text("nRow");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static04","10","251","94","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("11");
            obj.set_text("strColID");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_nRow2","93","216","110","26",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("12");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_setColumn1","211","120","93","90",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("13");
            obj.set_text("setColumn()");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_setColumn2","211","216","93","90",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("14");
            obj.set_text("setColumn()");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_nColIdx","93","152","110","26",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("15");
            obj.set_value("1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_varVal1","93","184","110","26",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("16");
            obj.set_value("TEST00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static05","10","187","90","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("17");
            obj.set_text("varVal");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_strColID","93","248","110","26",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("18");
            obj.set_value("colA");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static06","10","283","94","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("19");
            obj.set_text("varVal");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_varVal2","93","280","110","26",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("20");
            obj.set_value("TEST01");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static07","12","308","103","35",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("21");
            obj.set_text("cancolumnchange \r\nEvent Return :");
            this.addChild(obj.name, obj);

            obj = new nexacro.Radio("rd_return","124","317","109","19",null,null,null,null,null,null,this);
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
        this.addIncludeScript("A_Dataset_M_setColumn_Datavalidation_01.xfdl","lib::libCommon.xjs");
        this.addIncludeScript("A_Dataset_M_setColumn_Datavalidation_01.xfdl","libevent::event.util.xjs");
        this.registerScript("A_Dataset_M_setColumn_Datavalidation_01.xfdl", function(nexacro, system, trace, environment, application) {
        /***********************************************************************
        * 설명      : Dataset setColumn Method
        * 작성일    : 2020.09.22
        * 작성자    : 함경곤
        * 수정이력  :
        ***********************************************************************
        *     수정일     작성자   내용
        ***********************************************************************
        *   2020. 09. 22 함경곤
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
        	description: "Dataset setColumn Method Validation Test",
        	//-------------- beign user defined section
        	userdata : {
        		result : [],			//task 리턴값
        		eventChkList1 : [],		//cancolumnchange 확인용
        		eventChkList2 : [],		//oncolumnchanged 확인용
        	},
        	//--------------  end  user defined section
        	initialize: function()
        	{
        	},
        	checker : {},
        	validator : {},
        	task : {},
        	finalize : function() {
        	}
        };

        tc1.task['setColumn'] = function(nRow, varCol, varVal) {
        	var result = [];
        	//var rtnSetColumn = this.dataset.setColumn(nRow, varCol, varVal);
        	var is_nullstring = false;
        	var is_undefined = false;
        	if (this.ds00.getColumn(0,0) === "")
        			is_nullstring = true;
        	if (this.ds00.getColumn(0,2) === undefined)
        			is_undefined = true;


        	result.push(is_nullstring, true, is_undefined);

        	return result;
        };


        tc1.checker['equal'] = function(alResultValues, alExpectedValues) {
        	var chk = true;
        	var chk = tapi.checkEqual(this, alResultValues, alExpectedValues);

        	return chk;
        };

        tc1.validator ['tc1_vd1'] = {
        	description: "datavalidation",
        	autoTaskFlow : ["setColumn"],
        	vcinfo : {
        		argType : tapi.VCT_ARG_LIST,
        		args : [
        				//vc : nRow, varCol, varVal, ev : 리턴값, 이벤트정보, getCellText
        			    {vc: [[tapi.VBT_NORMAL,"Null"]],   ev: [true, true, true]},
        			]
        	},
        	prepare: function () {
        		tc1.userdata.result = [];
        		tc1.eventReturnValue = "true";
        	},
        	run: function () {
        		var vdAdt = tapi.getVdAdaptor();
        		var taskName = vdAdt.getTaskFlowName();
        		var nRow = vdAdt.getValue(0);

        		switch(taskName) {
        		case "setColumn":
        			var rtn = tc1.task['setColumn'].call(this, nRow);
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
            this.addEventHandler("onload",this.TA_Dataset_M_setColumn_01_v2_onload,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn_Combo_menu.addEventHandler("onclick",this.btn_button_menu_onclick,this);
            this.btn_main.addEventHandler("onclick",this.btn_main_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_setColumn1.addEventHandler("onclick",this.btn_setColumn1_onclick,this);
            this.btn_setColumn2.addEventHandler("onclick",this.btn_setColumn2_onclick,this);
            this.btn_idx1.addEventHandler("onclick",this.btn_idx1_onclick,this);
            this.btn_idx2.addEventHandler("onclick",this.btn_idx2_onclick,this);
        };

        this.loadIncludeScript("A_Dataset_M_setColumn_Datavalidation_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
