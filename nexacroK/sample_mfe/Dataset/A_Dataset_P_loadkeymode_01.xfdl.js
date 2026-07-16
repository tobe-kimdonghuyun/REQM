(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TA_Dataset_P_loadkeymode_48062_01_v2");
            this.set_titletext("TA_Dataset_P_loadkeymode_48062_01_v2");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(440,560);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("ds_data6", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_keystring("S:-args");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "args","size" : "256","type" : "INT"},{"id" : "method_name","size" : "256","type" : "STRING"},{"id" : "result","size" : "256","type" : "STRING"},{"id" : "exp_result","size" : "256","type" : "STRING"},{"id" : "comp_results","size" : "256","type" : "STRING"},{"id" : "run_code","size" : "256","type" : "STRING"},{"id" : "Mi_run_code","size" : "256","type" : "STRING"}]},"Rows" : [{"args" : "1","method_name" : "all","result" : "","exp_result" : "[object Static]","comp_results" : "","run_code" : "","Mi_run_code" : "Find(\"Static00\")"},{"args" : "2","method_name" : "addVariable","result" : "","exp_result" : "1","comp_results" : "","run_code" : "","Mi_run_code" : "AddVariable('var1','10')"},{"args" : "3","method_name" : "addVariable","result" : "","exp_result" : "-1","comp_results" : "","run_code" : "","Mi_run_code" : "AddVariable('var2','10')"},{"args" : "4","method_name" : "getKeyState","result" : "","exp_result" : "왼쪽Ctrl Press면 true","comp_results" : "","run_code" : "","Mi_run_code" : "IsDigit('123')"},{"args" : "5","method_name" : "removeVariable","result" : "","exp_result" : "isExistVariable로 확인","comp_results" : "","run_code" : "","Mi_run_code" : "DeleteVariable('var2')"},{"args" : "6","method_name" : "isExistVariable","result" : "","exp_result" : "false","comp_results" : "","run_code" : "","Mi_run_code" : "IsExistVariable(\"var2\""}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Button("btn00","314","4","107","36",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Embedded Test");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static01","3","31","301","37",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_text("[Dataset_P_loadkeymode_48065_01]");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_Combo_menu","93","1","81","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("2");
            obj.set_text("◀Dataset");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("txt_result","6","329","298","115",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("3");
            obj.set_text("//");
            obj.set_value("//");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_clear","240","328","63","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("4");
            obj.set_text("clear");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_main","8","1","81","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("5");
            obj.set_text("◀◀Main");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_set_loadkeymode","160","264","35","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("6");
            obj.set_text("set");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_get_loadkeymode","200","264","35","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("7");
            obj.set_text("get");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static02","5","240","99","20",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("8");
            obj.set_text("loadkeymode ");
            this.addChild(obj.name, obj);

            obj = new nexacro.Combo("cb_loadkeymode","22","264","127","27",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("9");
            var cb_loadkeymode_innerdataset = new nexacro.NormalDataset("cb_loadkeymode_innerdataset", obj);
            cb_loadkeymode_innerdataset._setContents({"ColumnInfo" : {"Column" : [{"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "1","datacolumn" : "keep"},{"codecolumn" : "2","datacolumn" : "reset"}]});
            obj.set_innerdataset(cb_loadkeymode_innerdataset);
            obj.set_text("keep");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_set_keystring","223","297","35","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("10");
            obj.set_text("set");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_get_keystring","263","297","35","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("11");
            obj.set_text("get");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_keystring","83","297","115","26",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("12");
            obj.set_value("S:args");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static04","8","300","75","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("13");
            obj.set_text("keystring");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid00","2","124","281","116",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_data6");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("14");
            obj.getSetter("useinputpanel").set("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"46\"/><Column size=\"113\"/><Column size=\"20\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"args\"/><Cell col=\"1\" text=\"method_name\"/><Cell col=\"2\" text=\"result\"/><Cell col=\"3\" text=\"exp_result\"/><Cell col=\"4\" text=\"comp_results\"/><Cell col=\"5\" text=\"run_code\"/><Cell col=\"6\" text=\"Mi_run_code\"/><Cell col=\"7\" text=\"rtype\"/><Cell col=\"8\" text=\"ridx\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"normal\" text=\"bind:args\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"normal\" text=\"bind:method_name\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"normal\" text=\"bind:result\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"normal\" text=\"bind:exp_result\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"normal\" text=\"bind:comp_results\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"normal\" text=\"bind:run_code\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"normal\" text=\"bind:Mi_run_code\"/><Cell col=\"7\" expr=\"expr:ds_math.getRowType(currow)\"/><Cell col=\"8\" expr=\"currow\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button02","75","86","85","28",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("15");
            obj.set_text("deleteRow");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01","2","84","67","28",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("16");
            obj.set_text("addRow");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00","166","86","122","28",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("17");
            obj.set_text("transaction()");
            this.addChild(obj.name, obj);

            obj = new nexacro.Combo("c_opt","114","55","122","28",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("18");
            var c_opt_innerdataset = new nexacro.NormalDataset("c_opt_innerdataset", obj);
            c_opt_innerdataset._setContents({"ColumnInfo" : {"Column" : [{"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : ":N","datacolumn" : ":N"},{"codecolumn" : ":A","datacolumn" : ":A"},{"codecolumn" : ":U","datacolumn" : ":U"}]});
            obj.set_innerdataset(c_opt_innerdataset);
            obj.set_text(":N");
            obj.set_value(":N");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static06","7","53","89","28",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("19");
            obj.set_text("Dataset옵션");
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
            this._addPreloadList("data","","ds_data6");
        };
        
        // User Script
        this.addIncludeScript("A_Dataset_P_loadkeymode_01.xfdl","lib::libCommon.xjs");
        this.registerScript("A_Dataset_P_loadkeymode_01.xfdl", function(nexacro, system, trace, environment, application) {
        /***********************************************************************
        * 설명      : Dataset loadkeymode Property
        ***********************************************************************
        *     수정일     작성자   내용
        ***********************************************************************
        *     2019.03.08  김형철   최초 작성
        ***********************************************************************
        */

        this.executeIncludeScript("lib::libCommon.xjs"); /*include "lib::libCommon.xjs"*/;
        var tapi = this.gfnLoadTestAPI(0.71);

        /***********************************************************************
        * 01: Form 변수 선언부
        ***********************************************************************/
        this.dataset = this.ds_data6;
        this.grid = this.Grid00;

        /***********************************************************************
        * 02 : Test Case, Validator, Validation Case 선언부
        ***********************************************************************/
        var tc1  = {
        	description: "Dataset loadkeymode Property Test",
        	//-------------- beign user defined section
        	userdata : {
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

        tc1.task['loadkeymode'] = function(enumMode) {
        	if(enumMode != "default")
        		this.dataset.set_loadkeymode(enumMode);
        };

        tc1.task['keystring'] = function() {
        	this.dataset.set_keystring("S:args");
        };

        tc1.task['transaction'] = function() {
        	// 대기 상태 시작
        	var vdAdt = tapi.getVdAdaptor();
        	vdAdt.beginWait(1000);

        	this.transaction("search","servicejsp::TA_Dataset_P_loadkeymode_48065_01_v2.jsp","ds_data6=ds_data6:N","ds_data6=ds_data6","dsType=XML:N","fn_callback");
        };

        tc1.task['getCellText'] = function() {
        	var result = [];

        	for(var i=0; i<8; i++)
        	{
        		result.push(this.grid.getCellText(0, i));
        	}
        	for(var i=0; i<8; i++)
        	{
        		result.push(this.grid.getCellText(5, i));
        	}

        	return result;
        }

        tc1.checker['equal'] = function(alResultValues, alExpectedValues) {
        	var chk = true;
        	var chk = tapi.checkEqual(this, alResultValues, alExpectedValues);

        	return chk;
        };

        tc1.validator ['tc1_vd1'] = {
        	description: "loadkeymode 설정값",
        	autoTaskFlow : ["loadkeymode", "keystring", "transaction", "getCellText"],
        	vcinfo : {
        		argType : tapi.VCT_ARG_LIST,
        		args : [
        				//vc : enumMode, ev : Column Text
        				{vc: [[tapi.VBT_NORMAL,"default"]],  ev: [1,"all","","[object Static]","","",'Find("Static00")',"",6,"isExistVariable","",false,"","",'IsExistVariable("var2"',""]},
        				{vc: [[tapi.VBT_NORMAL,"reset"]],  	 ev: [6,"isExistVariable","",false,"","",'IsExistVariable("var2"',"",1,"all","","[object Static]","","",'Find("Static00")',""]},
         				{vc: [[tapi.VBT_NORMAL,"keep"]],  	 ev: [1,"all","","[object Static]","","",'Find("Static00")',"",6,"isExistVariable","",false,"","",'IsExistVariable("var2"',""]},
         				{vc: [[tapi.VBT_EXCEPTION,"test"]],  ev: [1,"all","","[object Static]","","",'Find("Static00")',"",6,"isExistVariable","",false,"","",'IsExistVariable("var2"',""]},
        		]
        	},
        	prepare: function () {
        	},
        	run: function () {
        		var vdAdt = tapi.getVdAdaptor();
        		var taskName = vdAdt.getTaskFlowName();

        		var rtn;
        		var enumMode = vdAdt.getValue(0);

        		switch(taskName) {
        		case "loadkeymode":
        			tc1.task['loadkeymode'].call(this, enumMode);
        			break;
        		case "keystring":
        			tc1.task['keystring'].call(this);
        			break;
        		case "transaction":
        			tc1.task['transaction'].call(this);
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
        this.TA_Dataset_P_loadkeymode_48062_01_v2_onload = function(obj,e)
        {
           // debug mode : log level에서 지정한 모든 메시지 제공
           tapi.systemDebugOn();          // Runner를 debug mode로 실행
           tapi.debugOn();                  // 응용을 debug mode로 실행
           // Runner Load
           tapi.init(tcInfo, this);
          	//LogViewer 미팝업용
        // 	var runner = tapi.getRunner();
        //
        // 	if (runner.isTestMode() == false){
        //  		var logger = new tapi.ConsoleLogger();
        //  		runner.setLogger(logger);
        // 	}
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
        this.fn_callback = function(sId, nErrCode, sErrMsg)
        {
        	//대기상태 해제
        	var vdAdt = tapi.getVdAdaptor();
        	vdAdt.releaseWait();
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.TA_Dataset_P_loadkeymode_48062_01_v2_onload,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn_Combo_menu.addEventHandler("onclick",this.btn_button_menu_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_main.addEventHandler("onclick",this.btn_main_onclick,this);
            this.btn_set_loadkeymode.addEventHandler("onclick",this.btn_set_loadkeymode_onclick,this);
            this.btn_get_loadkeymode.addEventHandler("onclick",this.btn_get_loadkeymode_onclick,this);
            this.btn_set_keystring.addEventHandler("onclick",this.btn_set_keystring_onclick,this);
            this.btn_get_keystring.addEventHandler("onclick",this.btn_get_keystring_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };

        this.loadIncludeScript("A_Dataset_P_loadkeymode_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
