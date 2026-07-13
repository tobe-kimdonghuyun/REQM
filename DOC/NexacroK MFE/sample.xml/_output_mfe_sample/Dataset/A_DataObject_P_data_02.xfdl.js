(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TA_Dataset_M_getColumn_01_v2");
            this.set_titletext("TA_Dataset_M_getColumn_01_v2");
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
            			"colB" : "유동규",
            			"colC" : [
            				100
            			],
            			"colD" : [
            				"투",
            				"우"
            			]
            		},
            		{
            			"colA" : "1",
            			"colB" : "주인희",
            			"colC" : 200,
            			"colD" : [
            				"비이"
            			]
            		},
            		{
            			"colA" : "2",
            			"colB" : "고준영",
            			"colC" : 200,
            			"colD" : [
            				[
            					"소오"
            				]
            			]
            		},
            		{
            			"colA" : "3",
            			"colB" : "이정빈",
            			"colC" : 300,
            			"colD" : {"key":"value"}
            		},
            		{
            			"colA" : "4",
            			"colB" : "김선주",
            			"colC" : 400,
            			"colD" : [
            				100
            			]
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
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents({"ColumnInfo" : {"ConstColumn" : [{"id" : "ConstA","size" : "30","type" : "STRING","value" : "A"},{"id" : "ConstB","size" : "30","type" : "STRING","value" : "B"},{"id" : "ConstC","size" : "30","type" : "STRING","value" : "C"}],"Column" : [{"datapath" : "@.colA","id" : "colA","size" : "256","type" : "STRING"},{"datapath" : "@.colB","id" : "colB","size" : "256","type" : "STRING"},{"datapath" : "@.colC","id" : "colC","size" : "256","type" : "INT"},{"datapath" : "@.colD","id" : "colD","size" : "256","type" : "STRING"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Button("btn00","314","4","107","36",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Embedded Test");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static01","3","31","297","37",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_text("[Dataset_M_getColumn_48170_01]");
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

            obj = new nexacro.TextArea("txt_result","13","459","298","90",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("4");
            obj.set_value("//");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_clear","268","451","43","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("5");
            obj.set_text("clear");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","17","262","58","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("6");
            obj.set_text("nRow");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static02","17","294","78","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("7");
            obj.set_text("nColIdx");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_nRow1","100","259","110","26",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("8");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static03","17","326","75","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("9");
            obj.set_text("nRow");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static04","17","358","78","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("10");
            obj.set_text("strColID");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_nRow2","100","323","110","26",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("11");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_getColumn1","218","259","93","56",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("12");
            obj.set_text("getColumn()");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_getColumn2","218","323","93","56",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("13");
            obj.set_text("getColumn()");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_nColIdx","100","291","110","26",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("14");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_strColID","100","355","110","26",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("15");
            obj.set_value("colA");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid00","5","61","295","169",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_data1");
            obj.set_formats("<Formats>\n  <Format id=\"default\">\n    <Columns>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n    </Columns>\n    <Rows>\n      <Row band=\"head\" size=\"24\"/>\n      <Row band=\"body\" size=\"24\"/>\n    </Rows>\n    <Band id=\"head\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"colA\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"colB\"/>\n      <Cell col=\"2\" disptype=\"normal\" text=\"colC\"/>\n      <Cell col=\"3\" disptype=\"normal\" text=\"colD\"/>\n      <Cell col=\"4\" disptype=\"normal\" text=\"ConstA\"/>\n      <Cell col=\"5\" disptype=\"normal\" text=\"ConstB\"/>\n      <Cell col=\"6\" disptype=\"normal\" text=\"ConstC\"/>\n    </Band>\n    <Band id=\"body\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"bind:colA\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"bind:colB\"/>\n      <Cell col=\"2\" disptype=\"normal\" text=\"bind:colC\"/>\n      <Cell col=\"3\" disptype=\"normal\" text=\"bind:colD\"/>\n      <Cell col=\"4\" disptype=\"normal\" text=\"bind:ConstA\"/>\n      <Cell col=\"5\" disptype=\"normal\" text=\"bind:ConstB\"/>\n      <Cell col=\"6\" disptype=\"normal\" text=\"bind:ConstC\"/>\n    </Band>\n  </Format>\n</Formats>\n");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("16");
            obj.getSetter("useinputpanel").set("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"colA\"/><Cell col=\"1\" text=\"colB\"/><Cell col=\"2\" text=\"colC\"/><Cell col=\"3\" text=\"colD\"/><Cell col=\"4\" text=\"ConstA\"/><Cell col=\"5\" text=\"ConstB\"/><Cell col=\"6\" text=\"ConstC\"/></Band><Band id=\"body\"><Cell subsumtext=\"test\" text=\"bind:colA\"/><Cell col=\"1\" subsumtext=\"test\" text=\"bind:colB\"/><Cell col=\"2\" subsumtext=\"test\" text=\"bind:colC\"/><Cell col=\"3\" subsumtext=\"test\" text=\"bind:colD\"/><Cell col=\"4\" subsumtext=\"test\" text=\"bind:ConstA\"/><Cell col=\"5\" subsumtext=\"test\" text=\"bind:ConstB\"/><Cell col=\"6\" subsumtext=\"test\" text=\"bind:ConstC\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_keystring","100","419","110","26",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("17");
            obj.set_value("S:-colA");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_filterstr","100","387","110","26",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("18");
            obj.set_value("colA == \"1\"");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static05","17","422","94","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("19");
            obj.set_text("keystring");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static06","17","390","86","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("20");
            obj.set_text("filterstr");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_set_filterstr","216","387","35","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("21");
            obj.set_text("set");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_get_filterstr","264","387","35","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("22");
            obj.set_text("get");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_set_keystring","216","419","35","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("23");
            obj.set_text("set");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_get_keystring","264","419","35","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("24");
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
        this.addIncludeScript("A_DataObject_P_data_02.xfdl","lib::libCommon.xjs");
        this.addIncludeScript("A_DataObject_P_data_02.xfdl","libevent::event.util.xjs");
        this.registerScript("A_DataObject_P_data_02.xfdl", function(nexacro, system, trace, environment, application) {
        /***********************************************************************
        * 설명      : DataObject data property
        ***********************************************************************
        *     수정일     작성자   내용
        ***********************************************************************
        *    2021.08.12  함경곤   신규작성
        ***********************************************************************
        */

        this.executeIncludeScript("lib::libCommon.xjs"); /*include "lib::libCommon.xjs"*/;
        this.executeIncludeScript("libevent::event.util.xjs"); /*include "libevent::event.util.xjs"*/;
        var tapi = this.gfnLoadTestAPI(0.71);

        /***********************************************************************
        * 01: Form 변수 선언부
        ***********************************************************************/
        this.dataset = this.ds_data1;

        /***********************************************************************
        * 02 : Test Case, Validator, Validation Case 선언부
        ***********************************************************************/
        var tc1  = {
        	description: "Dataset getColumn Method Test",
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

        tc1.task['getColumn'] = function(nRow,nCol, nVar) {
        	var result = [];
        	//var rtngetColumn = this.dataset.setColumn(nRow, nVar);
        	this.dataset.setColumn(nRow, nCol, nVar);
        	//if (nRow == 4)
        		this.dataset.applyChange();
        	//result.push(rtngetColumn);

        	return result;
        };

        tc1.checker['equal'] = function(alResultValues, alExpectedValues) {
        	var chk = true;
        	var chk = tapi.checkEqual(this, alResultValues, alExpectedValues);

        	return chk;
        };

        tc1.validator ['tc1_vd1'] = {
        	description: "getColumn(nRow, nVar) 수행",
        	autoTaskFlow : ["getColumn"],
        	vcinfo : {
        		argType : tapi.VCT_ARG_LIST,
        		args : [
        				//vc : nRow, nVar, ev : 리턴값
        				{vc: [[tapi.VBT_LOWER,0],[tapi.VBT_LOWER,1],[tapi.VBT_LOWER,"a"]],   ev: ["object","투","우","투","우",""]},
        				{vc: [[tapi.VBT_MIN,1],[tapi.VBT_MIN,1],[tapi.VBT_LOWER,"b"]],   	  ev: ["object","비이","비이",""]},
        				{vc: [[tapi.VBT_HIGHER,2],[tapi.VBT_HIGHER,1],[tapi.VBT_LOWER,"c"]],   ev: ["object","소오","소오",""]},
        				{vc: [[tapi.VBT_MAX,3],[tapi.VBT_MAX,1],[tapi.VBT_LOWER,"d"]],  		  ev: ["object","[object Object]","[object Object]",""]},
        				{vc: [[tapi.VBT_NORMAL,4],[tapi.VBT_NORMAL,1],[tapi.VBT_LOWER,"e"]],   ev: ["object","100","100",""]},
        			]
        	},
        	prepare: function () {
        		tc1.userdata.result = [];

        	},
        	run: function () {
        		var vdAdt = tapi.getVdAdaptor();
        		var taskName = vdAdt.getTaskFlowName();
        		var nRow = vdAdt.getValue(0);
        		var nCol = vdAdt.getValue(1);
        		var nVar = vdAdt.getValue(2);

        		switch(taskName) {
        		case "getColumn":
        			var rtn = tc1.task['getColumn'].call(this, nRow, nCol, nVar);
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
        this.TA_Dataset_M_getColumn_01_v2_onload = function(obj,e)
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
        this.DataObject00_ondatachanged = function(obj,e)
        {
        	for (var i =0;i<e.infoarray.length;i++)
        	{
        		var item = e.infoarray[i];
        		if (typeof item.data.colD == "object")
        			tc1.userdata.result.push("object");
        		tc1.userdata.result.push(item.data.colD);
        		tc1.userdata.result.push(obj.data.dataset[item.index].colD);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.TA_Dataset_M_getColumn_01_v2_onload,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn_Combo_menu.addEventHandler("onclick",this.btn_button_menu_onclick,this);
            this.btn_main.addEventHandler("onclick",this.btn_main_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_getColumn1.addEventHandler("onclick",this.btn_getColumn1_onclick,this);
            this.btn_getColumn2.addEventHandler("onclick",this.btn_getColumn2_onclick,this);
            this.btn_set_filterstr.addEventHandler("onclick",this.btn_set_filterstr_onclick,this);
            this.btn_get_filterstr.addEventHandler("onclick",this.btn_get_filterstr_onclick,this);
            this.btn_set_keystring.addEventHandler("onclick",this.btn_set_keystring_onclick,this);
            this.btn_get_keystring.addEventHandler("onclick",this.btn_get_keystring_onclick,this);
            this.DataObject00.addEventHandler("ondatachanged",this.DataObject00_ondatachanged,this);
        };

        this.loadIncludeScript("A_DataObject_P_data_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
