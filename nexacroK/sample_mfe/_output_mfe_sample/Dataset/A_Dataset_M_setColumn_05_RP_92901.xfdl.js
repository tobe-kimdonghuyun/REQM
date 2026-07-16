(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmJsonTest");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,910);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.DataObject("DataObject00", this);
            obj._setContents({
            	"data" : {
            		"box" : {
            			"name" : "test",
            			"size" : 100
            		},
            		"name" : "XYZ",
            		"book" : {
            		     "a" : { "b": "b"}
            		}
            	}
            });
            this.addChild(obj.name, obj);


            obj = new nexacro.DataObject("DataObject01", this);
            obj._setContents({
            	"data" : {
            		"box" : {
            			"name" : "test",
            			"size" : 100
            		},
            		"name" : "XYZ",
            		"book" : {
            			"a" : {
            				"b" : "b"
            			}
            		}
            	}
            });
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("Dataset00", this);
            obj.set_binddataobject("DataObject00");
            obj.set_dataobjectbindmode("twoway");
            obj.set_dataobjectpath("$.data");
            obj.set_updatecontrol("false");
            obj._setContents({"ColumnInfo" : {"Column" : [{"datapath" : "@.box.name","id" : "name","size" : "256","type" : "STRING"},{"datapath" : "@.box.size","id" : "size","size" : "256","type" : "STRING"},{"datapath" : "@.name","id" : "name0","size" : "256","type" : "STRING"},{"datapath" : "@.book.a.b","id" : "b","size" : "256","type" : "STRING"}]}});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("Dataset01", this);
            obj.set_binddataobject("DataObject01");
            obj.set_dataobjectbindmode("twoway");
            obj.set_dataobjectpath("$.data");
            obj.set_updatecontrol("true");
            obj._setContents({"ColumnInfo" : {"Column" : [{"datapath" : "@.box.name","id" : "name","size" : "256","type" : "STRING"},{"datapath" : "@.box.size","id" : "size","size" : "256","type" : "STRING"},{"datapath" : "@.name","id" : "name0","size" : "256","type" : "STRING"},{"datapath" : "@.book.a.b","id" : "b","size" : "256","type" : "STRING"}]}});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("Dataset03", this);
            obj.set_binddataobject("DataObject00");
            obj.set_dataobjectbindmode("twoway");
            obj.set_dataobjectpath("$.data");
            obj.set_updatecontrol("false");
            obj._setContents({"ColumnInfo" : {"Column" : [{"datapath" : "@.box.name","id" : "name","size" : "256","type" : "STRING"},{"datapath" : "@.box.size","id" : "size","size" : "256","type" : "STRING"},{"datapath" : "@.name","id" : "name0","size" : "256","type" : "STRING"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Edit("Edit00","191","77","179","44",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("Edit00_00","191","151","179","44",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("Edit00_00_00","191","225","179","44",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","69","77","121","43",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("box.name");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00_00","69","152","121","43",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("box.size");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00_00_00","69","226","121","43",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("name");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00","420","77","120","43",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("trace json");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("Edit00_00_01","191","451","179","44",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("Edit00_00_00_00","191","525","179","44",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00_01","69","377","121","43",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("box.name");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00_00_01","69","452","121","43",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("box.size");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00_00_00_00","69","526","121","43",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("name");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("Edit00_01","191","377","179","44",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("TextArea00","591","24","499","536",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static01","55","285","480","7",null,null,null,null,null,null,this);
            obj.set_background("black");
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static02","65","302","420","60",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("dataobjectbindmode : twoway / updatecontrol : true");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static02_00","65","12","420","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("dataobjectbindmode : twoway / updatecontrol : false");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01","430","376","110","40",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("trace json");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button02","460","482","83","36",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("Button02");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00","414","10","92","50",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("test");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn01","470","213","97","57",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("btn01");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt00","410","142","151","45",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt01","427","435","150","36",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","",1280,910,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new nexacro.BindItem("item0","Edit00","value","Dataset00","name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item1","Edit00_00","value","Dataset00","size");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item2","Edit00_00_00","value","Dataset00","name0");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item3","Edit00_01","value","Dataset01","name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item4","Edit00_00_01","value","Dataset01","size");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item5","Edit00_00_00_00","value","Dataset01","name0");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item6","edt00","value","Dataset00","b");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item7","edt01","value","Dataset01","b");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("A_Dataset_M_setColumn_05_RP_92901.xfdl","lib::libCommon.xjs");
        this.addIncludeScript("A_Dataset_M_setColumn_05_RP_92901.xfdl","libevent::event.util.xjs");
        this.registerScript("A_Dataset_M_setColumn_05_RP_92901.xfdl", function(nexacro, system, trace, environment, application) {
        /***********************************************************************
        * 설명      : Dataset setColumn Method
        * 작성일    : 2021.08.24
        * 작성자    : 함경곤
        * 수정이력  : DataObject Bind Test

        dataset updatecontrol = true
        ***********************************************************************
        *     수정일     작성자   내용
        ***********************************************************************
        -
        ***********************************************************************
        */

        this.executeIncludeScript("lib::libCommon.xjs"); /*include "lib::libCommon.xjs"*/;
        this.executeIncludeScript("libevent::event.util.xjs"); /*include "libevent::event.util.xjs"*/;
        var tapi = this.gfnLoadTestAPI(0.71);
        //this.dev_status = tapi.DEV_HOLD;
        /***********************************************************************
        * 01: Form 변수 선언부
        ***********************************************************************/
        this.dataset = this.Dataset00;
        this.grid = this.Grid00;
        /***********************************************************************
        * 02 : Test Case, Validator, Validation Case 선언부
        ***********************************************************************/
        var tc1  = {
        	description: "Dataset setColumn Method Test",
        	//-------------- beign user defined section
        	userdata : {
        		result : [],			//task 리턴값
        		eventChkList1 : [],		//cancolumnchange 확인용
        		eventChkList2 : [],		//oncolumnchanged 확인용
        	},
        	//--------------  end  user defined section
        	initialize: function() {

        	this.DataObject00.set_data(this.org_data);
        	},
        	checker : {},
        	validator : {},
        	task : {},
        	finalize : function() {
        	}
        };

        tc1.task['setColumn'] = function(varVal) {
        	var result = [];
        	//var rtnSetColumn = this.dataset.setColumn(nRow, varCol, varVal);

        	//if (this.dataset.updatecontrol == true)
        	if (varVal == "TEST00")
        		this.Edit00.set_value("TEST00");
        	else if (varVal == "TEST01")
        		this.Edit00_00_00.set_value("TEST01");
        	else if (varVal == "TEST02")
        		this.Edit00_00_01.set_value("TEST02");
        	else if (varVal == "TEST03")
        		this.Edit00_00_00_00.set_value("TEST03");
        	else if (varVal == "TEST04")
        	{
        		this.edt00.set_value("TEST04");
        	}
        	else if (varVal == "TEST05")
        	{
        		this.edt01.set_value("TEST05");
        		this.Dataset01.applyChange();
        	}

        	result.push(varVal);

        	return result;
        };

        tc1.task['eventChk'] = function() {
        	var result = [];

        	result.push(tc1.userdata.eventChkList1);
        	//result.push(tc1.userdata.eventChkList2);

        	return result;
        };

        tc1.task['getDataValue'] = function(nRow, varCol){
        	var result = [];
        	var _value;
        	if (varVal == "TEST00")
        		_value = this.Edit00.value;
        	else if (varVal == "TEST01")
        		_value = this.Edit00_00_00.value;
        	else if (varVal == "TEST02")
        		_value = this.Edit00_00_01.value;
        	else if (varVal == "TEST03")
        		_value = this.Edit00_00_00_00.value;
        	else if (varVal == "TEST04")
        		_value = this.edt00.value;
        	else if (varVal == "TEST05")
        		_value = this.edt01.value;
        	result.push(_value);

        	return result;
        }

        tc1.checker['equal'] = function(alResultValues, alExpectedValues) {
        	var chk = true;
        	var chk = tapi.checkEqual(this, alResultValues, alExpectedValues);

        	return chk;
        };

        tc1.validator ['tc1_vd1'] = {
        	description: "set_valu 리턴값, setColumn(nRow, varCol, varVal) 수행",
        	autoTaskFlow : ["setColumn",'eventChk',"getDataText"],
        	vcinfo : {
        		argType : tapi.VCT_ARG_LIST,
        		args : [
        				//vc : nRow, varCol, varVal, ev : 리턴값, 이벤트정보, getCellText
        			    {vc: [[tapi.VBT_NORMAL,"TEST00"]],   ev: ["TEST00","TEST00","TEST00"]},
        				{vc: [[tapi.VBT_NORMAL,"TEST01"]],   ev: ["TEST01","TEST01","TEST01"]},
        				{vc: [[tapi.VBT_NORMAL,"TEST02"]],   ev: ["TEST02",""]},
        				{vc: [[tapi.VBT_NORMAL,"TEST03"]],   ev: ["TEST03",""]},
        				{vc: [[tapi.VBT_NORMAL,"TEST04"]],   ev: ["TEST04","TEST04","TEST04"]},
        				{vc: [[tapi.VBT_NORMAL,"TEST05"]],   ev: ["TEST05","TEST02","TEST03","TEST05"]},

        			]
        	},
        	prepare: function () {
        		tc1.userdata.result = [];
        		tc1.eventReturnValue = "true";
        		var vdAdt = tapi.getVdAdaptor();
        	},
        	run: function () {
        		var vdAdt = tapi.getVdAdaptor();
        		var taskName = vdAdt.getTaskFlowName();
        		var varVal = vdAdt.getValue(0);

        		switch(taskName) {
        		case "setColumn":
        			var rtn = tc1.task['setColumn'].call(this, varVal);
        			tc1.userdata.result.push(rtn);
        			break;
        		case "eventChk":
        			var rtn = tc1.task['eventChk'].call(this);
        			tc1.userdata.result.push(rtn);
        			break;
        		case "getCellText":
        			var rtn = tc1.task['getCellText'].call(this, nRow, varCol);
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


        this.frmJsonTest_onload = function(obj,e)
        {
        	//this.TextArea00.set_value(this.TextArea00.text + this.DataObject00.serializeToString() +"\n");
        	//this.TextArea00.set_value(this.TextArea00.text + this.DataObject01.serializeToString() +"\n");
        	//this.TextArea00.set_value(this.TextArea00.text + "--------------------------------------------------------------------- \n");
        	//trace("1 /// Dataset00 : "+this.Dataset00.getRowType(0)+" /  Dataset01 : "+this.Dataset01.getRowType(0));
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


        this.Button00_onclick = function(obj,e)
        {
        	this.TextArea00.set_value(this.TextArea00.text + this.DataObject00.serializeToString() +"\n");
        	trace(this.Dataset00.saveXML());
        	trace("2 /// Dataset00 : "+this.Dataset00.getRowType(0)+" /  Dataset01 : "+this.Dataset01.getRowType(0));
        };


        this.Button01_onclick = function(obj,e)
        {
        	this.Dataset01.applyChange();
        	this.TextArea00.set_value(this.TextArea00.text + this.DataObject01.serializeToString() +"\n");
        	trace("3 /// Dataset00 : "+this.Dataset00.getRowType(0)+" /  Dataset01 : "+this.Dataset01.getRowType(0));
        	trace(this.Dataset01.saveXML());
        };


        this.DataObject00_onvaluechanged = function(obj,e)
        {
        	trace("DataObject00_onvaluechanged ");
        	tc1.userdata.eventChkList1.push(e.value);
        	if (e.key == "box[name]")
        		tc1.userdata.eventChkList1.push(obj.data.data.box.name);
        	else if (e.key == "name")
        		tc1.userdata.eventChkList1.push(obj.data.data.name);
        	else if (e.key == "book[a][b]")
        		tc1.userdata.eventChkList1.push(obj.data.data.book.a.b);
        };

        this.DataObject01_ondatachanged = function(obj,e)
        {
        	trace("DataObject01_ondatachanged ");
        	tc1.userdata.eventChkList1.push(obj.data.data.box.size);
        	tc1.userdata.eventChkList1.push(obj.data.data.name);
        	tc1.userdata.eventChkList1.push(obj.data.data.book.a.b);
        };

        this.btn01_onclick = function(obj,e)
        {
        	this.Edit00.set_value("ttt");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frmJsonTest_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.DataObject00.addEventHandler("ondatachanged",this.DataObject00_ondatachanged,this);
            this.DataObject00.addEventHandler("onsuccess",this.DataObject00_onsuccess,this);
            this.DataObject00.addEventHandler("onvaluechanged",this.DataObject00_onvaluechanged,this);
            this.Dataset00.addEventHandler("cancolumnchange",this.Dataset00_cancolumnchange,this);
            this.Dataset00.addEventHandler("oncolumnchanged",this.Dataset00_oncolumnchanged,this);
            this.DataObject01.addEventHandler("ondatachanged",this.DataObject01_ondatachanged,this);
            this.DataObject01.addEventHandler("onvaluechanged",this.DataObject01_onvaluechanged,this);
            this.Dataset01.addEventHandler("cancolumnchange",this.Dataset01_cancolumnchange,this);
            this.Dataset01.addEventHandler("oncolumnchanged",this.Dataset01_oncolumnchanged,this);
            this.Dataset03.addEventHandler("cancolumnchange",this.Dataset00_cancolumnchange,this);
            this.Dataset03.addEventHandler("oncolumnchanged",this.Dataset00_oncolumnchanged,this);
        };

        this.loadIncludeScript("A_Dataset_M_setColumn_05_RP_92901.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
