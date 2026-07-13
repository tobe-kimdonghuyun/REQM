(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TA_Dataset_M_getOrgColumnNF_01_v2");
            this.set_titletext("TA_Dataset_M_getOrgColumnNF_01_v2");
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
            obj.set_text("[Dataset_M_getOrgColumnNF_48142_01]");
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

            obj = new nexacro.TextArea("txt_result","6","400","298","42",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("4");
            obj.set_value("//");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_clear","260","396","44","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("5");
            obj.set_text("clear");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid00","5","61","295","90",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_data1");
            obj.set_formats("<Formats>\n  <Format id=\"default\">\n    <Columns>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n    </Columns>\n    <Rows>\n      <Row band=\"head\" size=\"24\"/>\n      <Row band=\"body\" size=\"24\"/>\n    </Rows>\n    <Band id=\"head\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"colA\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"colB\"/>\n      <Cell col=\"2\" disptype=\"normal\" text=\"colC\"/>\n      <Cell col=\"3\" disptype=\"normal\" text=\"colD\"/>\n      <Cell col=\"4\" disptype=\"normal\" text=\"ConstA\"/>\n      <Cell col=\"5\" disptype=\"normal\" text=\"ConstB\"/>\n      <Cell col=\"6\" disptype=\"normal\" text=\"ConstC\"/>\n    </Band>\n    <Band id=\"body\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"bind:colA\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"bind:colB\"/>\n      <Cell col=\"2\" disptype=\"normal\" text=\"bind:colC\"/>\n      <Cell col=\"3\" disptype=\"normal\" text=\"bind:colD\"/>\n      <Cell col=\"4\" disptype=\"normal\" text=\"bind:ConstA\"/>\n      <Cell col=\"5\" disptype=\"normal\" text=\"bind:ConstB\"/>\n      <Cell col=\"6\" disptype=\"normal\" text=\"bind:ConstC\"/>\n    </Band>\n  </Format>\n</Formats>\n");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("6");
            obj.getSetter("useinputpanel").set("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"colA\"/><Cell col=\"1\" text=\"colB\"/><Cell col=\"2\" text=\"colC\"/><Cell col=\"3\" text=\"colD\"/><Cell col=\"4\" text=\"ConstA\"/><Cell col=\"5\" text=\"ConstB\"/><Cell col=\"6\" text=\"ConstC\"/></Band><Band id=\"body\"><Cell edittype=\"text\" subsumtext=\"test\" text=\"bind:colA\"/><Cell col=\"1\" edittype=\"text\" subsumtext=\"test\" text=\"bind:colB\"/><Cell col=\"2\" edittype=\"text\" subsumtext=\"test\" text=\"bind:colC\"/><Cell col=\"3\" edittype=\"text\" subsumtext=\"test\" text=\"bind:colD\"/><Cell col=\"4\" edittype=\"text\" subsumtext=\"test\" text=\"bind:ConstA\"/><Cell col=\"5\" edittype=\"text\" subsumtext=\"test\" text=\"bind:ConstB\"/><Cell col=\"6\" edittype=\"text\" subsumtext=\"test\" text=\"bind:ConstC\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_keystring","93","184","110","26",null,null,null,null,null,null,this);
            obj.set_enable("false");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("7");
            obj.set_value("G:-colA");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static04","10","187","94","21",null,null,null,null,null,null,this);
            obj.set_enable("false");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("8");
            obj.set_text("keystring");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_set_keystring","217","184","35","27",null,null,null,null,null,null,this);
            obj.set_enable("false");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("9");
            obj.set_text("set");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_get_keystring","265","184","35","27",null,null,null,null,null,null,this);
            obj.set_enable("false");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("10");
            obj.set_text("get");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","10","155","112","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("11");
            obj.set_text("updatecontrol ");
            this.addChild(obj.name, obj);

            obj = new nexacro.Radio("rd_updatecontrol","108","149","109","35",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_columncount("2");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("position").set("absolute");
            obj.set_rowcount("1");
            obj.set_taborder("12");
            var rd_updatecontrol_innerdataset = new nexacro.NormalDataset("rd_updatecontrol_innerdataset", obj);
            rd_updatecontrol_innerdataset._setContents({"ColumnInfo" : {"Column" : [{"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "1","datacolumn" : "true"},{"codecolumn" : "2","datacolumn" : "false"}]});
            obj.set_innerdataset(rd_updatecontrol_innerdataset);
            obj.set_value("2");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_set","217","152","35","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("13");
            obj.set_text("set");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_get","265","152","35","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("14");
            obj.set_text("get");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static02","10","217","58","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("15");
            obj.set_text("nRow");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static03","10","241","82","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("16");
            obj.set_text("nColIdx");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_nRow1","93","217","110","20",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("17");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_nColIdx","93","241","110","20",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("18");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_setColumn1","211","217","93","43",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("19");
            obj.set_text("getOrgColumnNF");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static05","10","265","58","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("20");
            obj.set_text("nRow");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static06","10","290","82","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("21");
            obj.set_text("strColID");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_nRow2","93","265","110","20",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("22");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_strColID","93","289","110","20",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("23");
            obj.set_value("colA");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_setColumn2","211","265","93","43",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("24");
            obj.set_text("getOrgColumnNF");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_getRowType","200","367","101","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("25");
            obj.set_text("getRowType()");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_row","133","368","58","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("26");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static07","72","371","58","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("27");
            obj.set_text("nRow");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_nRow3","69","312","51","20",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("28");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_nColIdx1","197","312","51","20",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("29");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_varVal","69","340","120","20",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("30");
            obj.set_value("test");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static08","10","312","58","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("31");
            obj.set_text("nRow");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static09","131","311","63","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("32");
            obj.set_text("nColIdx");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static10","10","340","58","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("33");
            obj.set_text("varVal");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_setColumn","200","335","101","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("34");
            obj.set_text("setColumn()");
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
        this.addIncludeScript("A_Dataset_M_getOrgColumnNF_01.xfdl","lib::libCommon.xjs");
        this.addIncludeScript("A_Dataset_M_getOrgColumnNF_01.xfdl","libevent::event.util.xjs");
        this.registerScript("A_Dataset_M_getOrgColumnNF_01.xfdl", function(nexacro, system, trace, environment, application) {
        /***********************************************************************
        * 설명      : Dataset getOrgColumnNF Method
        ***********************************************************************
        *     수정일     작성자   내용
        ***********************************************************************
        *     2019.03.15  김형철   최초 작성
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
        	description: "Dataset getOrgColumnNF Method Test",
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

        tc1.task['setColumn'] = function() {
        	this.dataset.setColumn(0, 0, "변경");
        	this.dataset.setColumn(4, "ConstC", "변경");
        }

        tc1.task['getOrgColumnNF'] = function(nRow, nVar) {
        	var result = [];
        	var rtngetOrgColumnNF = this.dataset.getOrgColumnNF(nRow, nVar);

        	result.push(rtngetOrgColumnNF);

        	return result;
        };

        tc1.checker['equal'] = function(alResultValues, alExpectedValues) {
        	var chk = true;
        	var chk = tapi.checkEqual(this, alResultValues, alExpectedValues);

        	return chk;
        };

        tc1.validator ['tc1_vd1'] = {
        	description: "getOrgColumnNF(nRow, nVar) 수행",
        	autoTaskFlow : ["setColumn", "getOrgColumnNF"],
        	vcinfo : {
        		argType : tapi.VCT_ARG_LIST,
        		args : [
        				//vc : nRow, nVar, ev : 리턴값
        				{vc: [[tapi.VBT_LOWER,-1],[tapi.VBT_LOWER,-1]],   ev: [""]},
        				{vc: [[tapi.VBT_MIN,0],[tapi.VBT_MIN,"colA"]],    ev: [1]},
        				{vc: [[tapi.VBT_HIGHER,5],[tapi.VBT_HIGHER,7]],   ev: [""]},
        				{vc: [[tapi.VBT_MAX,4],[tapi.VBT_MAX,"ConstC"]],  ev: ["변경"]},
        				{vc: [[tapi.VBT_NORMAL,2],[tapi.VBT_NORMAL,0]],   ev: [2]},
        				{vc: [[tapi.VBT_NORMAL,2],[tapi.VBT_NORMAL,0]],   ev: [2]},
        				{vc: [[tapi.VBT_EXCEPTION,undefined],[tapi.VBT_MIN,"colA"]],   ev: [1]},
        				{vc: [[tapi.VBT_NORMAL,2],[tapi.VBT_EXCEPTION,null]],   ev: [2]},
        				//addRow 후
        				{vc: [[tapi.VBT_MAX,5],[tapi.VBT_NORMAL,0]],   ev: ["추가"]},
        				//filter 후
        				{vc: [[tapi.VBT_NORMAL,4],[tapi.VBT_MIN,"colA"]],   ev: [4]},
        				//grouping 후
        				{vc: [[tapi.VBT_NORMAL,1],[tapi.VBT_NORMAL,0]],   ev: [1]},
        			]
        	},
        	prepare: function () {
        		var vdAdt = tapi.getVdAdaptor();
        		if(vdAdt.getIndexVC() == 0)
        			this.dataset.set_updatecontrol(true);
        		//addRow
        		if(vdAdt.getIndexVC() == 8)
        		{
        			var rtnRow = this.dataset.addRow();
        			this.dataset.setColumn(rtnRow, 0, "추가");
        		}
        		//filter
         		if(vdAdt.getIndexVC() == 9)
         			this.dataset.set_filterstr("colA != 4");
        		//grouping
        		if(vdAdt.getIndexVC() == 10)
        		{
        			this.dataset.set_filterstr("");
        			this.dataset.set_keystring("G:+colA");
        		}
        	},
        	run: function () {
        		var vdAdt = tapi.getVdAdaptor();
        		var taskName = vdAdt.getTaskFlowName();
        		var nRow = vdAdt.getValue(0);
        		var nVar = vdAdt.getValue(1);

        		switch(taskName) {
        		case "setColumn":
        			tc1.task['setColumn'].call(this);
        			break;
        		case "getOrgColumnNF":
        			var rtn = tc1.task['getOrgColumnNF'].call(this, nRow, nVar);
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
        this.TA_Dataset_M_getOrgColumnNF_01_v2_onload = function(obj,e)
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
            this.addEventHandler("onload",this.TA_Dataset_M_getOrgColumnNF_01_v2_onload,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn_Combo_menu.addEventHandler("onclick",this.btn_button_menu_onclick,this);
            this.btn_main.addEventHandler("onclick",this.btn_main_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_set_keystring.addEventHandler("onclick",this.btn_set_keystring_onclick,this);
            this.btn_get_keystring.addEventHandler("onclick",this.btn_get_keystring_onclick,this);
            this.btn_set.addEventHandler("onclick",this.btn_set_onclick,this);
            this.btn_get.addEventHandler("onclick",this.btn_get_onclick,this);
            this.btn_setColumn1.addEventHandler("onclick",this.btn_setColumn1_onclick,this);
            this.btn_setColumn2.addEventHandler("onclick",this.btn_setColumn2_onclick,this);
            this.btn_getRowType.addEventHandler("onclick",this.btn_getRowType_onclick,this);
            this.btn_setColumn.addEventHandler("onclick",this.btn_setColumn_onclick,this);
        };

        this.loadIncludeScript("A_Dataset_M_getOrgColumnNF_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
