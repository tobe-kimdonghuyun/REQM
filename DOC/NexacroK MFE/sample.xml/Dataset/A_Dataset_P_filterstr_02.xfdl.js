(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TA_Dataset_P_filterstr_01_v2");
            this.set_titletext("TA_Dataset_P_filterstr_01_v2");
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
             "A" : "A",
             "B" : "B",
             "C" : "C",
              "dataset" : [
                {
                  "colA" : "1",
                  "colB" : "유동규",
                  "colC" : 100,
                  "colD" : "투우"
                },
                {
                  "colA" : "1",
                  "colB" : "주인희",
                  "colC" : 200,
                  "colD" : "비이"
                },
                    {
                  "colA" : "2",
                  "colB" : "고준영",
                  "colC" : 200,
                  "colD" : "소오"
                },
                    {
                  "colA" : "3",
                  "colB" : "이정빈",
                  "colC" : 300,
                  "colD" : "프트"
                },
                {
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
            obj.set_dataobjectpath("$.dataset[*]");
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents({"ColumnInfo" : {"ConstColumn" : [{"id" : "ConstA","size" : "30","type" : "STRING","value" : "A"},{"datapath" : "$.B","id" : "ConstB","size" : "30","type" : "STRING","value" : ""},{"datapath" : "$.C","id" : "ConstC","size" : "30","type" : "STRING","value" : "A"}],"Column" : [{"datapath" : "@.colA","id" : "colA","size" : "256","type" : "STRING"},{"datapath" : "@.colB","id" : "colB","size" : "256","type" : "STRING"},{"datapath" : "@.colC","id" : "colC","size" : "256","type" : "INT"},{"datapath" : "@.colD","id" : "colD","size" : "256","type" : "STRING"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Button("btn00","314","4","107","36",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Embedded Test");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static01","3","31","301","37",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_text("[Dataset_P_filterstr_46610_01]");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_Combo_menu","93","1","81","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("2");
            obj.set_text("◀Dataset");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("txt_result","6","348","298","94",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("3");
            obj.set_text("//");
            obj.set_value("//");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_clear","241","349","63","25",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("4");
            obj.set_text("clear");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_main","8","1","81","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("5");
            obj.set_text("◀◀Main");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","13","163","67","14",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("6");
            obj.set_text("filterstr");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("txt_value","85","158","132","24",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("7");
            obj.set_value("colC >= 200");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_filterstr","224","157","79","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("8");
            obj.set_text("set");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_get","139","253","92","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("9");
            obj.set_text("get");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("txt_current","85","190","132","24",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("10");
            obj.set_value("colB == \'유동규\'");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static02","13","195","67","14",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("11");
            obj.set_text("current");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static03","13","227","67","14",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("12");
            obj.set_text("default");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("txt_default","85","222","132","24",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("13");
            obj.set_value("colB == \'주인희\'");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_current","224","189","79","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("14");
            obj.set_text("set");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_default","224","221","79","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("15");
            obj.set_text("set");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_load","35","253","92","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("16");
            obj.set_text("load");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_set_loadfiltermode","229","283","35","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("17");
            obj.set_text("set");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_get_loadfiltermode","269","283","35","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("18");
            obj.set_text("get");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static04","10","286","106","20",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("19");
            obj.set_text("loadfiltermode ");
            this.addChild(obj.name, obj);

            obj = new nexacro.Combo("cb_loadfiltermode","112","283","115","27",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("20");
            var cb_loadfiltermode_innerdataset = new nexacro.NormalDataset("cb_loadfiltermode_innerdataset", obj);
            cb_loadfiltermode_innerdataset._setContents({"ColumnInfo" : {"Column" : [{"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "1","datacolumn" : "keep"},{"codecolumn" : "2","datacolumn" : "reset"}]});
            obj.set_innerdataset(cb_loadfiltermode_innerdataset);
            obj.set_text("keep");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_set_filterstr","228","316","35","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("21");
            obj.set_text("set");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_get_filterstr","268","316","35","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("22");
            obj.set_text("get");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_filterstr","112","316","115","26",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("23");
            obj.set_value("colA > 3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static05","13","319","72","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("24");
            obj.set_text("filterstr");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid00","1.14%","61",null,"239","-34.09%",null,null,null,null,null,this);
            obj.set_binddataset("ds_data1");
            obj.set_taborder("25");
            obj.getSetter("useinputpanel").set("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ConstA\"/><Cell col=\"1\" text=\"ConstB\"/><Cell col=\"2\" text=\"ConstC\"/><Cell col=\"3\" text=\"colA\"/><Cell col=\"4\" text=\"colB\"/><Cell col=\"5\" text=\"colC\"/><Cell col=\"6\" text=\"colD\"/></Band><Band id=\"body\"><Cell text=\"bind:ConstA\"/><Cell col=\"1\" text=\"bind:ConstB\"/><Cell col=\"2\" text=\"bind:ConstC\"/><Cell col=\"3\" text=\"bind:colA\"/><Cell col=\"4\" text=\"bind:colB\"/><Cell col=\"5\" text=\"bind:colC\"/><Cell col=\"6\" text=\"bind:colD\"/></Band></Format></Formats>");
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
        this.addIncludeScript("A_Dataset_P_filterstr_02.xfdl","lib::libCommon.xjs");
        this.addIncludeScript("A_Dataset_P_filterstr_02.xfdl","libevent::event.util.xjs");
        this.registerScript("A_Dataset_P_filterstr_02.xfdl", function(nexacro, system, trace, environment, application) {
        /***********************************************************************
        * 설명      : Dataset filterstr Property
        ***********************************************************************
        *     수정일     작성자   내용
        ***********************************************************************
        *     2020.05.27 함경곤   DataObject내용 작성
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
        	description: "Dataset filter Method Test",
        	//-------------- beign user defined section
        	userdata : {
        		eventChkList1 : [],		//onrowsetchanged 확인용
        		result : [],			//task 리턴값
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

        tc1.task['filterstr'] = function(strFilter) {
        	var result = [];

        	this.dataset.set_filterstr(strFilter);
        	var getRowCount = this.dataset.rowcount;

        	result.push(getRowCount);

        	return result;
        };

        tc1.task['eventChk'] = function() {
        	var result = [];

        	result.push(tc1.userdata.eventChkList1);

        	return result;
        };

        tc1.task['getCellText'] = function() {
        	var result = [];
        	var getRowCount = this.dataset.rowcount;

        	for(var j=0; j<getRowCount; j++)
        	{
        		for(var i=0; i<7; i++)
        		{
        			result.push(this.grid.getCellText(j, i));
        		}
        	}

        	return result;
        }

        tc1.checker['equal'] = function(alResultValues, alExpectedValues) {
        	var chk = true;
        	var chk = tapi.checkEqual(this, alResultValues, alExpectedValues);

        	return chk;
        };

        tc1.validator ['tc1_vd1'] = {
        	description: "filterstr(strFilter) 수행",
        	autoTaskFlow : ["filterstr", "eventChk", "getCellText"],
        	vcinfo : {
        		argType : tapi.VCT_ARG_LIST,
        		args : [
        				//vc : strFilter, ev : rowcount, 이벤트정보, getCellText
        			    {vc: [[tapi.VBT_NORMAL,"colA > '3'"]],   ev: [1,"onrowsetchanged",31,"A","B","C",4,"김선주",400,"비이"]},
        				{vc: [[tapi.VBT_NORMAL,"colC == '200'"]],   ev: [2,"onrowsetchanged",31,"A","B","C",1,"주인희",200,"비이","A","B","C",2,"고준영",200,"소오"]},
        				{vc: [[tapi.VBT_NORMAL,""]],   ev: [5,"onrowsetchanged",31,"A","B","C",1,"유동규",100,"투우","A","B","C",1,"주인희",200,"비이","A","B","C",2,"고준영",200,"소오","A","B","C",3,"이정빈",300,"프트","A","B","C",4,"김선주",400,"비이"]},
        		]
        	},
        	prepare: function () {
        		tc1.userdata.eventChkList1 = [];
        		tc1.userdata.result = [];
        	},
        	run: function () {
        		var vdAdt = tapi.getVdAdaptor();
        		var taskName = vdAdt.getTaskFlowName();
        		var strFilter = vdAdt.getValue(0);
        		var rtn;

        		switch(taskName) {
        		case "filterstr":
        			rtn = tc1.task['filterstr'].call(this, strFilter);
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
        this.TA_Dataset_P_filterstr_01_v2_onload = function(obj,e)
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
            this.addEventHandler("onload",this.TA_Dataset_P_filterstr_01_v2_onload,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn_Combo_menu.addEventHandler("onclick",this.btn_button_menu_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_main.addEventHandler("onclick",this.btn_main_onclick,this);
            this.btn_filterstr.addEventHandler("onclick",this.btn_filterstr_set_onclick,this);
            this.btn_get.addEventHandler("onclick",this.btn_get_onclick,this);
            this.btn_current.addEventHandler("onclick",this.btn_current_set_onclick,this);
            this.btn_default.addEventHandler("onclick",this.btn_default_set_onclick,this);
            this.btn_load.addEventHandler("onclick",this.btn_load_onclick,this);
            this.btn_set_loadfiltermode.addEventHandler("onclick",this.btn_set_loadfiltermode_onclick,this);
            this.btn_get_loadfiltermode.addEventHandler("onclick",this.btn_get_loadfiltermode_onclick,this);
            this.btn_set_filterstr.addEventHandler("onclick",this.btn_set_filterstr_onclick,this);
            this.btn_get_filterstr.addEventHandler("onclick",this.btn_get_filterstr_onclick,this);
            this.ds_data1.addEventHandler("onrowsetchanged",this.ds_data1_onrowsetchanged,this);
        };

        this.loadIncludeScript("A_Dataset_P_filterstr_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
