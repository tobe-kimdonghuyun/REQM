(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Dataset_P_preload_01");
            this.set_titletext("Dataset_P_preload_01");
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
            obj.set_preload("true");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_url("servicejsp::TA_Dataset_M_load_78826_01_v2.xml");
            obj.set_useclientlayout("false");
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "I_PJT","size" : "256","type" : "STRING"},{"id" : "N_PJT","size" : "256","type" : "STRING"},{"id" : "I_PO","size" : "256","type" : "STRING"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Static("Static01","3","31","301","37",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_text("[Dataset_P_preload_01]");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_Combo_menu","93","1","81","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("21");
            obj.set_text("◀Dataset");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("txt_result","6","312","298","131",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("28");
            obj.set_text("//");
            obj.set_value("//");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_clear","239","301","66","29",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("29");
            obj.set_text("clear");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_main","8","1","81","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("30");
            obj.set_text("◀◀Main");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid00","7","61","292","123",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_data7");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("42");
            obj.getSetter("useinputpanel").set("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"I_PJT\"/><Cell col=\"1\" disptype=\"normal\" text=\"N_PJT\"/><Cell col=\"2\" disptype=\"normal\" text=\"I_PO\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:I_PJT\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:N_PJT\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:I_PO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00","14","238","139","29",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("load()");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01","160","239","139","29",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("load(bAsync)");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button02","15","270","283","29",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("load(bAsync, bBinary)");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","15","191","67","21",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("bAsync:");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static02","151","191","67","21",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("bBinary:");
            this.addChild(obj.name, obj);

            obj = new nexacro.Radio("Radio00","77","191","66","40",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("horizontal");
            obj.set_taborder("54");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents({"ColumnInfo" : {"Column" : [{"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "1","datacolumn" : "true"},{"codecolumn" : "2","datacolumn" : "false"}]});
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Radio("Radio01","219","191","85","41",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_taborder("55");
            var Radio01_innerdataset = new nexacro.NormalDataset("Radio01_innerdataset", obj);
            Radio01_innerdataset._setContents({"ColumnInfo" : {"Column" : [{"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "1","datacolumn" : "true"},{"codecolumn" : "2","datacolumn" : "false"}]});
            obj.set_innerdataset(Radio01_innerdataset);
            obj.set_value("2");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00","314","4","107","36",null,null,null,null,null,null,this);
            obj.set_taborder("13");
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
            this._addPreloadList("data","servicejsp::TA_Dataset_M_load_78826_01_v2.xml","ds_data7");
        };
        
        // User Script
        this.addIncludeScript("A_Dataset_P_preload_01.xfdl","lib::libCommon.xjs");
        this.addIncludeScript("A_Dataset_P_preload_01.xfdl","libevent::event.util.xjs");
        this.registerScript("A_Dataset_P_preload_01.xfdl", function(nexacro, system, trace, environment, application) {
        /***********************************************************************
        * 설명      : Dataset preload Property
        ***********************************************************************
        *     수정일     작성자   내용
        ***********************************************************************
        *     2019.03.25  김형철   최초 작성
        ***********************************************************************
        */

        this.executeIncludeScript("lib::libCommon.xjs"); /*include "lib::libCommon.xjs"*/;
        this.executeIncludeScript("libevent::event.util.xjs"); /*include "libevent::event.util.xjs"*/;
        var tapi = this.gfnLoadTestAPI(0.71);

        /***********************************************************************
        * 01: Form 변수 선언부
        ***********************************************************************/
        this.dataset = this.ds_data7;
        this.grid = this.Grid00;
        /***********************************************************************
        * 02 : Test Case, Validator, Validation Case 선언부
        ***********************************************************************/
        var tc1  = {
        	description: "Dataset preload Property Test",
        	//-------------- beign user defined section
        	userdata : {
        		eventChkList1 : [],		//onload 이벤트 확인용
        		result : [],			//task 리턴값
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

        tc1.task['eventChk'] = function() {
        	var result = [];

        	result.push(tc1.userdata.eventChkList1);

        	return result;
        };

        tc1.task['getCellText'] = function(){
        	var result = [];

        	for(var j=0; j<this.dataset.rowcount; j++)
        	{
        		for(var i=0; i<3; i++)
        			result.push(this.grid.getCellText(j, i));
        	}

        	return result;
        }

        tc1.checker['equal'] = function(alResultValues, alExpectedValues) {
        	var chk = true;
        	var chk = tapi.checkEqual(this, alResultValues, alExpectedValues);

        	return chk;
        };

        tc1.validator ['tc1_vd1'] = {
        	description: "preload(bPreload) 수행",
        	autoTaskFlow : ["preload", "eventChk", "getCellText"],
        	vcinfo : {
        		argType : tapi.VCT_ARG_NONE,
        	},
        	prepare: function () {
        	},
        	run: function () {
        		var vdAdt = tapi.getVdAdaptor();
        		var taskName = vdAdt.getTaskFlowName();
        		var rtn;

        		switch(taskName) {
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
        	check: function (resultValue) {
        		// ev : Dataset onload -> Form onload 순서, getCellText
        		var expectedValue = ["[object Dataset]","[object Form]","DNL3-N611","0825_R VALVE SEAT FOR INDICATOR VALVE HJ-S TYPE (","H10Y3836","DNL3-N611","0825_R VALVE SEAT FOR INDICATOR VALVE HJ-S TYPE (","H10Y3836"];
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
        this.Dataset_P_preload_01_onload = function(obj,e)
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
        	tc1.userdata.eventChkList1.push(obj);
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
        	tc1.userdata.eventChkList1.push(obj);
        };
        /***********************************************************************
        * 07 : 사용자 정의 함수 선언부
        ***********************************************************************/
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Dataset_P_preload_01_onload,this);
            this.btn_Combo_menu.addEventHandler("onclick",this.btn_button_menu_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_main.addEventHandler("onclick",this.btn_main_onclick,this);
            this.Grid00.addEventHandler("onselectchanged",this.Grid00_onselectchanged,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.ds_data7.addEventHandler("onload",this.ds_data7_onload,this);
        };

        this.loadIncludeScript("A_Dataset_P_preload_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
