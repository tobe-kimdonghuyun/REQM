(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TA_Dataset_E_cancolumnchange_01_v2");
            this.set_titletext("TA_Dataset_E_cancolumnchange_01_v2");
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
            obj = new nexacro.Static("Static01","3","31","297","37",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_text("[Dataset_E_cancolumnchange_48088_01]");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_Combo_menu","93","1","81","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("21");
            obj.set_text("◀Dataset");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_main","8","1","81","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("30");
            obj.set_text("◀◀Main");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("txt_result","6","307","298","135",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_value("//");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_clear","237","269","63","30",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_text("clear");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid00","5","61","295","99",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_data1");
            obj.set_formats("<Formats>\n  <Format id=\"default\">\n    <Columns>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n    </Columns>\n    <Rows>\n      <Row band=\"head\" size=\"24\"/>\n      <Row band=\"body\" size=\"24\"/>\n    </Rows>\n    <Band id=\"head\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"colA\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"colB\"/>\n      <Cell col=\"2\" disptype=\"normal\" text=\"colC\"/>\n      <Cell col=\"3\" disptype=\"normal\" text=\"colD\"/>\n      <Cell col=\"4\" disptype=\"normal\" text=\"ConstA\"/>\n      <Cell col=\"5\" disptype=\"normal\" text=\"ConstB\"/>\n      <Cell col=\"6\" disptype=\"normal\" text=\"ConstC\"/>\n    </Band>\n    <Band id=\"body\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"bind:colA\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"bind:colB\"/>\n      <Cell col=\"2\" disptype=\"normal\" text=\"bind:colC\"/>\n      <Cell col=\"3\" disptype=\"normal\" text=\"bind:colD\"/>\n      <Cell col=\"4\" disptype=\"normal\" text=\"bind:ConstA\"/>\n      <Cell col=\"5\" disptype=\"normal\" text=\"bind:ConstB\"/>\n      <Cell col=\"6\" disptype=\"normal\" text=\"bind:ConstC\"/>\n    </Band>\n  </Format>\n</Formats>\n");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.getSetter("useinputpanel").set("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"45\"/><Column size=\"45\"/><Column size=\"45\"/><Column size=\"45\"/><Column size=\"45\"/><Column size=\"45\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"colA\"/><Cell col=\"1\" text=\"colB\"/><Cell col=\"2\" text=\"colC\"/><Cell col=\"3\" text=\"colD\"/><Cell col=\"4\" text=\"ConstA\"/><Cell col=\"5\" text=\"ConstB\"/><Cell col=\"6\" text=\"ConstC\"/></Band><Band id=\"body\"><Cell text=\"bind:colA\"/><Cell col=\"1\" edittpye=\"normal\" text=\"bind:colB\"/><Cell col=\"2\" text=\"bind:colC\"/><Cell col=\"3\" text=\"bind:colD\"/><Cell col=\"4\" text=\"bind:ConstA\"/><Cell col=\"5\" text=\"bind:ConstB\"/><Cell col=\"6\" text=\"bind:ConstC\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","10","171","46","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_text("nRow");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static02","132","171","62","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_text("nColIdx");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_nRow1","61","168","58","26",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_setColumn1","104","267","119","30",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_text("setColumn");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_nColIdx","202","168","58","26",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_varVal1","77","200","183","26",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_value("TEST00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static05","10","203","56","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_text("varVal");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static07","6","229","132","35",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_text("cancolumnchange\r\nReturn");
            this.addChild(obj.name, obj);

            obj = new nexacro.Radio("rd_return","144","229","156","35",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_columncount("2");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("position").set("absolute");
            obj.set_rowcount("1");
            obj.set_taborder("1");
            var rd_return_innerdataset = new nexacro.NormalDataset("rd_return_innerdataset", obj);
            rd_return_innerdataset._setContents({"ColumnInfo" : {"Column" : [{"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "1","datacolumn" : "true"},{"codecolumn" : "2","datacolumn" : "false"}]});
            obj.set_innerdataset(rd_return_innerdataset);
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00","314","4","107","36",null,null,null,null,null,null,this);
            obj.set_taborder("15");
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

        };
        
        // User Script
        this.addIncludeScript("A_Dataset_E_cancolumnchange_01.xfdl","lib::libCommon.xjs");
        this.addIncludeScript("A_Dataset_E_cancolumnchange_01.xfdl","libevent::event.util.xjs");
        this.registerScript("A_Dataset_E_cancolumnchange_01.xfdl", function(nexacro, system, trace, environment, application) {
        /**********************************************************************
        * 설명      : Dataset cancolumnchange Event
        ***********************************************************************
        *     수정일     작성자   내용
        ***********************************************************************
        *     2019.01.11  김형철   최초 작성
        	  2019.02.01  김형철   this.gfnLoadTestAPI, tcInfo 적용
        	  2019.02.18  김형철   2019.02.15 엔진 적용
        	  2019.02.19  김형철   2019.02.19 엔진 적용
        ***********************************************************************/

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
        	description: "Dataset cancolumnchange Event Test",
        	//-------------- beign user defined section
        	userdata : {
        		eventReturnValue : "", 	//canrowposchange 리턴값 설정
        		eventChkList1 : [],		//onrowsetchanged 확인용
        		eventChkList2 : [],		//canrowposchange 확인용
        		result : [],			// test 단계별 실행 결과 저장
        	},
        	//--------------  end  user defined section
        	initialize: function() {
        		this.dataset.addEventHandler("cancolumnchange", this.ds_data1_cancolumnchange, this);
        		this.dataset.addEventHandler("oncolumnchanged", this.ds_data1_oncolumnchanged, this);
        	},
        	checker : {},
        	validator : {},
        	task : {},
        	finalize : function() {
        	}
        };

        tc1.task['returnValue'] = function(bCancolumnchange) {

        	if(bCancolumnchange == true)
        		tc1.userdata.eventReturnValue = "true";
        	else if(bCancolumnchange == false)
        		tc1.userdata.eventReturnValue = "false";
        	else
        		tc1.userdata.eventReturnValue = "";
        };

        tc1.task['setColumn'] = function(nRow, nColIdx, varVal) {
        	// 대기 상태 시작
        	var vdAdt = tapi.getVdAdaptor();
        	vdAdt.beginWait(1);

        	this.dataset.setColumn(nRow, nColIdx, varVal);
        };

        tc1.task['eventChk'] = function(nRow, nColIdx, varVal) {
        	var result = [];
        	var getColumnText = this.grid.getCellText(0, nColIdx);

        	result.push(tc1.userdata.eventChkList1);
        	result.push(tc1.userdata.eventChkList2);
        	result.push(getColumnText);

        	return result;
        };

        tc1.checker['equal'] = function(alResultValues, alExpectedValues) {
        	var chk = true;
        	var chk = tapi.checkEqual(this, alResultValues, alExpectedValues);

        	return chk;
        };

        tc1.validator ['tc1_vd1'] = {
        	description: "cancolumnchange 이벤트 리턴값 조건 조합",
        	autoTaskFlow : ["returnValue", "setColumn", "eventChk"],
        	vcinfo : {
        		argType : tapi.VCT_ARG_LIST,
        		args : [
        				//vc : 1.bCancolumnchange, 2.nRow, 3.nColIdx, 4.varVal, ev : 1.이벤트 정보, 2.cellText
        			    {vc: [[tapi.VBT_NORMAL,false], [tapi.VBT_NORMAL,0], [tapi.VBT_NORMAL,0], [tapi.VBT_NORMAL,"TEST00"]], ev: ["ds_data1", 0, -1, "colA", "cancolumnchange", "[object Dataset]", "[object Dataset]", "TEST00", "1", 0, "", "1"]},
        				{vc: [[tapi.VBT_NORMAL,false], [tapi.VBT_NORMAL,0], [tapi.VBT_NORMAL,1], [tapi.VBT_NORMAL,"TEST00"]], ev: ["ds_data1", 1, -1, "colB", "cancolumnchange", "[object Dataset]", "[object Dataset]", "TEST00", "유동규", 0, "", "유동규"]},
        				{vc: [[tapi.VBT_NORMAL,true],  [tapi.VBT_NORMAL,0], [tapi.VBT_NORMAL,0], [tapi.VBT_NORMAL,"TEST00"]], ev: ["ds_data1", 0, -1, "colA", "cancolumnchange", "[object Dataset]", "[object Dataset]", "TEST00", "1", 0, "oncolumnchanged", "TEST00"]},
        				{vc: [[tapi.VBT_NORMAL,true],  [tapi.VBT_NORMAL,0], [tapi.VBT_NORMAL,1], [tapi.VBT_NORMAL,"TEST00"]], ev: ["ds_data1", 1, -1, "colB", "cancolumnchange", "[object Dataset]", "[object Dataset]", "TEST00", "유동규", 0, "oncolumnchanged", "TEST00"]},
        				{vc: [[tapi.VBT_EXCEPTION,"생략"],  [tapi.VBT_NORMAL,0], [tapi.VBT_NORMAL,1], [tapi.VBT_NORMAL,"TEST01"]], ev: ["ds_data1", 1, -1, "colB", "cancolumnchange", "[object Dataset]", "[object Dataset]", "TEST01", "TEST00", 0, "oncolumnchanged", "TEST01"]}
        		]
        	},
        	prepare: function () {
        	},
        	run: function () {
        		var vdAdt = tapi.getVdAdaptor();
        		var taskName = vdAdt.getTaskFlowName();

        		var rtn;
        		var bCancolumnchange = vdAdt.getValue(0);
        		var nRow = vdAdt.getValue(1);
        		var nColIdx = vdAdt.getValue(2);
        		var varVal = vdAdt.getValue(3);

        		switch(taskName) {
        		case "returnValue":
        			tc1.task['returnValue'].call(this, bCancolumnchange);
        			break;
        		case "setColumn":
        			tc1.task['setColumn'].call(this, nRow, nColIdx, varVal);
        			break;
        		case "eventChk":
        			var rtn = tc1.task['eventChk'].call(this, nRow, nColIdx, varVal);
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
        this.TA_Dataset_E_cancolumnchange_01_v2_onload = function(obj,e)
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
        * cancolumnchange
        ***********************************************************************/
        this.ds_data1_cancolumnchange = function(obj, e)
        {
        	tc1.userdata.eventChkList1.push(obj.name);
        	tc1.userdata.eventChkList1.push(e.col);
        	tc1.userdata.eventChkList1.push(e.colidx);
        	tc1.userdata.eventChkList1.push(e.columnid);
        	tc1.userdata.eventChkList1.push(e.eventid);
        	tc1.userdata.eventChkList1.push(e.fromobject);
        	tc1.userdata.eventChkList1.push(e.fromreferenceobject);
        	tc1.userdata.eventChkList1.push(e.newvalue);
        	tc1.userdata.eventChkList1.push(e.oldvalue);
        	tc1.userdata.eventChkList1.push(e.row);

        	if(tc1.userdata.eventReturnValue == "false")
        	{
        		//대기상태 해제
        		var vdAdt = tapi.getVdAdaptor();
        		vdAdt.releaseWait();

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
        }
        /***********************************************************************
        * oncolumnchanged
        ***********************************************************************/
        this.ds_data1_oncolumnchanged = function(obj, e)
        {
        	tc1.userdata.eventChkList2.push(e.eventid);

        	//대기상태 해제
        	var vdAdt = tapi.getVdAdaptor();
        	vdAdt.releaseWait();
        }

        /***********************************************************************
        * 07 : 사용자 정의 함수 선언부
        ***********************************************************************/
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.TA_Dataset_E_cancolumnchange_01_v2_onload,this);
            this.btn_Combo_menu.addEventHandler("onclick",this.btn_button_menu_onclick,this);
            this.btn_main.addEventHandler("onclick",this.btn_main_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_setColumn1.addEventHandler("onclick",this.btn_setColumn1_onclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
        };

        this.loadIncludeScript("A_Dataset_E_cancolumnchange_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
