(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TA_Dataset_M_appendData_01_v2");
            this.set_titletext("TA_Dataset_M_appendData_01_v2");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(440,560);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("ds_data2", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents({"ColumnInfo" : {"ConstColumn" : [{"id" : "ConstA","size" : "30","type" : "STRING","value" : "test"},{"id" : "ConstD","size" : "30","type" : "STRING","value" : "e"},{"id" : "ConstE","size" : "30","type" : "STRING","value" : "d"}],"Column" : [{"id" : "colA","size" : "256","type" : "STRING"},{"id" : "colB","size" : "256","type" : "STRING"},{"id" : "colC","size" : "256","type" : "INT"},{"id" : "colE","size" : "256","type" : "STRING"}]},"Rows" : [{"colB" : "윤형기","colA" : "7","colC" : "100","colE" : "투우"},{"colB" : "정해영","colA" : "7","colC" : "200","colE" : "비이"},{"colB" : "김선주","colA" : "8","colC" : "300","colE" : "소오"},{"colB" : "하성국","colA" : "9","colC" : "400","colE" : "프트"}]});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("ds_data0", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents({});
            this.addChild(obj.name, obj);


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
            obj.set_taborder("13");
            obj.set_text("Embedded Test");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static01","3","31","297","37",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_text("[Dataset_M_appendData_48102_01]");
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

            obj = new nexacro.TextArea("txt_result","6","360","298","82",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("4");
            obj.set_value("//");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_clear","233","264","63","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("5");
            obj.set_text("clear");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","226","76","78","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("6");
            obj.set_text("objDataset");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static02","13","203","76","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("7");
            obj.set_text("bCheckCol");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_strID","225","99","72","29",null,null,null,null,null,null,this);
            obj.set_enable("false");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("8");
            obj.set_value("ds_data2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Radio("rd_bCheckCol","147","198","109","33",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_columncount("2");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("9");
            var rd_bCheckCol_innerdataset = new nexacro.NormalDataset("rd_bCheckCol_innerdataset", obj);
            rd_bCheckCol_innerdataset._setContents({"ColumnInfo" : {"Column" : [{"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "1","datacolumn" : "true"},{"codecolumn" : "2","datacolumn" : "false"}]});
            obj.set_innerdataset(rd_bCheckCol_innerdataset);
            obj.set_value("2");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Radio("rd_bUpdateConstCol","147","230","109","33",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_columncount("2");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("10");
            var rd_bUpdateConstCol_innerdataset = new nexacro.NormalDataset("rd_bUpdateConstCol_innerdataset", obj);
            rd_bUpdateConstCol_innerdataset._setContents({"ColumnInfo" : {"Column" : [{"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "1","datacolumn" : "true"},{"codecolumn" : "2","datacolumn" : "false"}]});
            obj.set_innerdataset(rd_bUpdateConstCol_innerdataset);
            obj.set_value("2");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static03","13","235","130","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("11");
            obj.set_text("bUpdateConstCol");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_appendData1","8","264","216","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("12");
            obj.set_text("appendData(objDataset)");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_getCaseAvg2","8","296","296","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("13");
            obj.set_text("appendData(objDataset,bCheckCol)");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_getCaseAvg3","8","328","296","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("14");
            obj.set_text("appendData(objDataset,bCheckCol,bUpdateConstCol)");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static04","10","56","290","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("15");
            obj.set_text("Dataset에 Column이 없는 경우");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_idx2","212","2","29","29",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("16");
            obj.set_text("2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_idx1","180","2","29","29",null,null,null,null,null,null,this);
            obj.set_enable("false");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("17");
            obj.set_text("1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static05","12","174","140","23",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("18");
            obj.set_text("cancolumnchange  :");
            this.addChild(obj.name, obj);

            obj = new nexacro.Radio("rd_return","156","175","140","23",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_columncount("2");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("position").set("absolute");
            obj.set_rowcount("1");
            obj.set_taborder("19");
            var rd_return_innerdataset = new nexacro.NormalDataset("rd_return_innerdataset", obj);
            rd_return_innerdataset._setContents({"ColumnInfo" : {"Column" : [{"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "1","datacolumn" : "true"},{"codecolumn" : "2","datacolumn" : "false"}]});
            obj.set_innerdataset(rd_return_innerdataset);
            obj.set_value("2");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_reload","227","132","77","28",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("20");
            obj.set_text("reload");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid00","9","65","207","95",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_data1");
            obj.set_formats("<Formats>\n  <Format id=\"default\">\n    <Columns>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n    </Columns>\n    <Rows>\n      <Row band=\"head\" size=\"24\"/>\n      <Row band=\"body\" size=\"24\"/>\n    </Rows>\n    <Band id=\"head\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"colA\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"colB\"/>\n      <Cell col=\"2\" disptype=\"normal\" text=\"colC\"/>\n      <Cell col=\"3\" disptype=\"normal\" text=\"colD\"/>\n      <Cell col=\"4\" disptype=\"normal\" text=\"ConstA\"/>\n      <Cell col=\"5\" disptype=\"normal\" text=\"ConstB\"/>\n      <Cell col=\"6\" disptype=\"normal\" text=\"ConstC\"/>\n    </Band>\n    <Band id=\"body\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"bind:colA\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"bind:colB\"/>\n      <Cell col=\"2\" disptype=\"normal\" text=\"bind:colC\"/>\n      <Cell col=\"3\" disptype=\"normal\" text=\"bind:colD\"/>\n      <Cell col=\"4\" disptype=\"normal\" text=\"bind:ConstA\"/>\n      <Cell col=\"5\" disptype=\"normal\" text=\"bind:ConstB\"/>\n      <Cell col=\"6\" disptype=\"normal\" text=\"bind:ConstC\"/>\n    </Band>\n  </Format>\n</Formats>\n");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("21");
            obj.getSetter("useinputpanel").set("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"colA\"/><Cell col=\"1\" text=\"colB\"/><Cell col=\"2\" text=\"colC\"/><Cell col=\"3\" text=\"colD\"/><Cell col=\"4\" text=\"ConstA\"/><Cell col=\"5\" text=\"ConstB\"/><Cell col=\"6\" text=\"ConstC\"/></Band><Band id=\"body\"><Cell edittype=\"text\" text=\"bind:colA\"/><Cell col=\"1\" edittype=\"text\" text=\"bind:colB\"/><Cell col=\"2\" edittype=\"text\" text=\"bind:colC\"/><Cell col=\"3\" edittype=\"text\" text=\"bind:colD\"/><Cell col=\"4\" edittype=\"text\" text=\"bind:ConstA\"/><Cell col=\"5\" edittype=\"text\" text=\"bind:ConstB\"/><Cell col=\"6\" edittype=\"text\" text=\"bind:ConstC\"/></Band></Format></Formats>");
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

        };
        
        // User Script
        this.addIncludeScript("A_Dataset_M_appendData_01.xfdl","lib::libCommon.xjs");
        this.addIncludeScript("A_Dataset_M_appendData_01.xfdl","libevent::event.util.xjs");
        this.registerScript("A_Dataset_M_appendData_01.xfdl", function(nexacro, system, trace, environment, application) {
        /***********************************************************************
        * 설명      : Dataset appendData Method
        ***********************************************************************
        *     수정일     작성자   내용
        ***********************************************************************
        *     2019.02.21  김형철   최초 작성
        ***********************************************************************
        */

        this.executeIncludeScript("lib::libCommon.xjs"); /*include "lib::libCommon.xjs"*/;
        this.executeIncludeScript("libevent::event.util.xjs"); /*include "libevent::event.util.xjs"*/;
        var tapi = this.gfnLoadTestAPI(0.71);

        /***********************************************************************
        * 01: Form 변수 선언부
        ***********************************************************************/
        this.dataset0 = this.ds_data0;
        this.dataset1 = this.ds_data1;
        this.dataset2 = this.ds_data2;
        this.grid = this.Grid00;

        /***********************************************************************
        * 02 : Test Case, Validator, Validation Case 선언부
        ***********************************************************************/
        var tc1  = {
        	description: "Dataset appendData Method Test",
        	//-------------- beign user defined section
        	userdata : {
        		eventReturnValue : "", 	//canrowposchange 리턴값 설정
        		eventChkList1 : [],		//onrowsetchanged 확인용
        		eventChkList2 : [],		//canrowposchange 확인용
        		eventChkList3 : [],		//onrowposchanged 확인용
        		result : [],			//task 리턴값
        		checkRow : 5,			//getCellText 파라미터용
        	},
        	//--------------  end  user defined section
        	initialize: function() {
        		this.dataset1.addEventHandler("onrowsetchanged", this.ds_data1_onrowsetchanged, this);
        		this.dataset1.addEventHandler("canrowposchange", this.ds_data1_canrowposchange, this);
        		this.dataset1.addEventHandler("onrowposchanged", this.ds_data1_onrowposchanged, this);
        	},
        	checker : {},
        	validator : {},
        	task : {},
        	finalize : function() {
        	}
        };

        tc1.task['appendData'] = function(objDataset, bCheckCol, bUpdateConstCol) {
        	// 대기 상태 시작
        // 	var vdAdt = tapi.getVdAdaptor();
        // 	vdAdt.beginWait(2000, tapi.CF_NEXTSTEP);
        	var rtnappendData;
        	var result = [];

        	if(bCheckCol == "생략" && bUpdateConstCol == "생략")
        		rtnappendData = this.dataset1.appendData(objDataset);
        	else
        		rtnappendData = this.dataset1.appendData(objDataset, bCheckCol, bUpdateConstCol);

        	this.grid.createFormat();
        	var getrowPosition = this.dataset1.rowposition;

        	result.push(rtnappendData);
        	result.push(getrowPosition);

        	return result;
        };

        tc1.task['getCellText'] = function(){
        	var result = [];

        	for(var i=0; i<7; i++)
        	{
        		result.push(this.grid.getCellText(tc1.userdata.checkRow, i));
        	}

        	tc1.userdata.checkRow += 4;
        	return result;
        }

        // 두번째 단계 : 검증을 위한 데이터 처리
        tc1.task['eventChk'] = function() {
        	var result = [];

        	result.push(tc1.userdata.eventChkList1);
        	result.push(tc1.userdata.eventChkList2);
        	result.push(tc1.userdata.eventChkList3);

        	return result;
        };

        tc1.checker['equal'] = function(alResultValues, alExpectedValues) {
        	var chk = true;
        	var chk = tapi.checkEqual(this, alResultValues, alExpectedValues);

        	return chk;
        };

        tc1.validator ['tc1_vd1'] = {
        	description: "appendData(objDataset, bCheckCol, bUpdateConstCol)",
        	autoTaskFlow : ["appendData", "getCellText", "eventChk"],
        	vcinfo : {
        		argType : tapi.VCT_ARG_LIST,
        		args : [
        				//vc : objDataset, bCheckCol, bUpdateConstCol, ev : 리턴값, rowposition, getCellText, 이벤트 정보
        				{vc: [[tapi.VBT_NORMAL,this.dataset2], [tapi.VBT_NORMAL,true], [tapi.VBT_NORMAL,false]],  ev: [9,0,7,"윤형기",100,"","A","B","C","onrowsetchanged",12,"",""]},
         				{vc: [[tapi.VBT_NORMAL,this.dataset2], [tapi.VBT_NORMAL,false], [tapi.VBT_NORMAL,false]],  ev: [13,0,7,"윤형기",100,"투우","A","B","C","onrowsetchanged",12,"",""]},
         				{vc: [[tapi.VBT_NORMAL,this.dataset2], [tapi.VBT_NORMAL,true], [tapi.VBT_NORMAL,true]],  ev: [17,0,7,"윤형기",100,"","test","B","C","onrowsetchanged",12,"",""]},
         				{vc: [[tapi.VBT_NORMAL,this.dataset2], [tapi.VBT_NORMAL,false], [tapi.VBT_NORMAL,true]],  ev: [21,0,7,"윤형기",100,"투우","test","e","d","onrowsetchanged",12,"",""]},
        				{vc: [[tapi.VBT_NORMAL,this.dataset2], [tapi.VBT_EXCEPTION,"생략"], [tapi.VBT_EXCEPTION,"생략"]],  ev: [25,0,7,"윤형기",100,"투우","test","e","d","onrowsetchanged",12,"",""]},
        				{vc: [[tapi.VBT_NORMAL,this.dataset2], [tapi.VBT_EXCEPTION,1], [tapi.VBT_EXCEPTION,0]],  ev: [29,0,7,"윤형기",100,"","test","e","d","onrowsetchanged",12,"",""]},
        				{vc: [[tapi.VBT_NORMAL,this.dataset2], [tapi.VBT_EXCEPTION,"true"], [tapi.VBT_EXCEPTION,"false"]],  ev: [33,0,7,"윤형기",100,"","test","e","d","onrowsetchanged",12,"",""]},
        				{vc: [[tapi.VBT_NORMAL,this.dataset2], [tapi.VBT_EXCEPTION,"test"], [tapi.VBT_EXCEPTION,-1]],  ev: [37,0,7,"윤형기",100,"투우","test","e","d","onrowsetchanged",12,"",""]},
        				{vc: [[tapi.VBT_NORMAL,this.dataset2], [tapi.VBT_EXCEPTION,-1], [tapi.VBT_EXCEPTION,2]],  ev: [41,0,7,"윤형기",100,"투우","test","e","d","onrowsetchanged",12,"",""]},
        				{vc: [[tapi.VBT_EXCEPTION,this.test], [tapi.VBT_NORMAL,true], [tapi.VBT_NORMAL,false]],  ev: [-1,0,"","","","","","","","","",""]},
        		]
        	},
        	prepare: function () {
        		tc1.userdata.eventReturnValue = "false";
        		tc1.userdata.eventChkList1 = [];
        		tc1.userdata.eventChkList2 = [];
        		tc1.userdata.eventChkList3 = [];
        		tc1.userdata.result = [];
        	},
        	run: function () {
        		var vdAdt = tapi.getVdAdaptor();
        		var taskName = vdAdt.getTaskFlowName();

        		var rtn;
        		var objDataset = vdAdt.getValue(0);
        		var bCheckCol = vdAdt.getValue(1);
        		var bUpdateConstCol = vdAdt.getValue(2);

        		switch(taskName) {
        		case "appendData":
        			rtn = tc1.task['appendData'].call(this, objDataset, bCheckCol, bUpdateConstCol);
        			tc1.userdata.result.push(rtn);
        			break;
        		case "getCellText":
        			rtn = tc1.task['getCellText'].call(this);
        			tc1.userdata.result.push(rtn);
        			break;
        		case "eventChk":
        			rtn = tc1.task['eventChk'].call(this);
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

        tc1.validator ['tc1_vd2'] = {
        	description: "rowposition이 -1인 경우 appendData(objDataset, bCheckCol, bUpdateConstCol)",
        	autoTaskFlow : ["appendData", "getCellText", "eventChk"],
        	vcinfo : {
        		argType : tapi.VCT_ARG_LIST,
        		args : [
        				//vc : objDataset, bCheckCol, bUpdateConstCol, ev : 리턴값, rowposition, getCellText, 이벤트 정보
        				{vc: [[tapi.VBT_NORMAL,this.dataset2], [tapi.VBT_NORMAL,true], [tapi.VBT_NORMAL,false]],  ev: [4,0,7,"윤형기",100,"","test","e","d","onrowsetchanged",12,"canrowposchange","onrowposchanged"]},
        		]
        	},
        	prepare: function () {
        		this.dataset1.clearData();
        		tc1.userdata.checkRow = 0;
        		tc1.userdata.eventReturnValue = "true";
        		tc1.userdata.eventChkList1 = [];
        		tc1.userdata.eventChkList2 = [];
        		tc1.userdata.eventChkList3 = [];
        		tc1.userdata.result = [];
        	},
        	run: function () {
        		var vdAdt = tapi.getVdAdaptor();
        		var taskName = vdAdt.getTaskFlowName();

        		var rtn;
        		var objDataset = vdAdt.getValue(0);
        		var bCheckCol = vdAdt.getValue(1);
        		var bUpdateConstCol = vdAdt.getValue(2);

        		switch(taskName) {
        		case "appendData":
        			rtn = tc1.task['appendData'].call(this, objDataset, bCheckCol, bUpdateConstCol);
        			tc1.userdata.result.push(rtn);
        			break;
        		case "getCellText":
        			rtn = tc1.task['getCellText'].call(this);
        			tc1.userdata.result.push(rtn);
        			break;
        		case "eventChk":
        			rtn = tc1.task['eventChk'].call(this);
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
        this.TA_Dataset_M_appendData_01_v2_onload = function(obj,e)
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
        * canrowposchange
        ***********************************************************************/
        this.ds_data1_canrowposchange = function(obj,e)
        {
        	tc1.userdata.eventChkList2.push(e.eventid);

        	if(tc1.userdata.eventReturnValue == "false")
        	{
        		//대기상태 해제
        // 		var vdAdt = tapi.getVdAdaptor();
        // 		vdAdt.releaseWait();

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
        };
        /***********************************************************************
        * onrowposchanged
        ***********************************************************************/
        this.ds_data1_onrowposchanged = function(obj,e)
        {
        	tc1.userdata.eventChkList3.push(e.eventid);
        };

        /***********************************************************************
        * 07 : 사용자 정의 함수 선언부
        ***********************************************************************/
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.TA_Dataset_M_appendData_01_v2_onload,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn_Combo_menu.addEventHandler("onclick",this.btn_button_menu_onclick,this);
            this.btn_main.addEventHandler("onclick",this.btn_main_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_appendData1.addEventHandler("onclick",this.btn_getCaseAvg1_onclick,this);
            this.btn_getCaseAvg2.addEventHandler("onclick",this.btn_getCaseAvg2_onclick,this);
            this.btn_getCaseAvg3.addEventHandler("onclick",this.btn_getCaseAvg3_onclick,this);
            this.btn_idx2.addEventHandler("onclick",this.btn_idx2_onclick,this);
            this.btn_idx1.addEventHandler("onclick",this.btn_idx1_onclick,this);
            this.btn_reload.addEventHandler("onclick",this.Button00_onclick,this);
            this.Grid00.addEventHandler("onselectchanged",this.Grid00_onselectchanged,this);
        };

        this.loadIncludeScript("A_Dataset_M_appendData_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
