(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("tss8168");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.DataObject("DataObject00", this);
            obj._setContents({
            	"data" : {
            		"x" : "123",
            		"y": "abc",
            		"z": "xyz"
            	}
            });
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("Dataset00", this);
            obj.set_binddataobject("DataObject00");
            obj.set_dataobjectbindmode("twoway");
            obj.set_dataobjectpath("$.data");
            obj.set_updatecontrol("false");
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "Column0","size" : "256","type" : "STRING"},{"datapath" : "@.x","id" : "x","size" : "256","type" : "STRING"}]}});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("Dataset01", this);
            obj.set_binddataobject("DataObject00");
            obj.set_dataobjectbindmode("twoway");
            obj.set_dataobjectpath("$.data");
            obj.set_updatecontrol("false");
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "Column0","size" : "256","type" : "STRING"},{"datapath" : "@.x","id" : "x","size" : "256","type" : "STRING"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Static("StaticA","339","205","35","35",null,null,null,null,null,null,this);
            obj.set_background("aquamarine");
            obj.getSetter("onchanged").set("Common_onchanged");
            obj.set_taborder("0");
            obj.set_text("A");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("StaticTest","384","18","416","224",null,null,null,null,null,null,this);
            obj.set_background("powderblue");
            obj.set_font("12pt \"MS Gothic\"");
            obj.set_padding("8px 8px 8px 8px");
            obj.set_taborder("1");
            obj.set_text("1. Click Edit00\r\n2. Press End\r\n3. Press \'t\',\'e\',\'s\',\'t\',Enter\r\n4. Click [A]");
            obj.set_textAlign("left");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("StEventLog","16","296","952","245",null,null,null,null,null,null,this);
            obj.set_background("azure");
            obj.set_color("black");
            obj.set_font("12pt MS Gothic");
            obj.set_readonly("false");
            obj.set_taborder("2");
            obj.set_tabstop("false");
            obj.set_wordWrap("english");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("StLog","16","550","956","154",null,null,null,null,null,null,this);
            obj.set_color("black");
            obj.set_font("12pt MS Gothic");
            obj.set_readonly("false");
            obj.set_taborder("3");
            obj.set_tabstop("false");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","14","23","63","33",null,null,null,null,null,null,this);
            obj.set_font("14pt \"MS Gothic\"");
            obj.set_taborder("4");
            obj.set_text("Edit00");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("Edit00","83","22","238","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("Edit01","77","132","155","58",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00","102","205","120","65",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00","7","242","63","41",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("test");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","",1024,768,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("New Form");

                p.StaticA.set_background("aquamarine");
                p.StaticA.getSetter("onchanged").set("Common_onchanged");
                p.StaticA.set_taborder("0");
                p.StaticA.set_text("A");
                p.StaticA.set_textAlign("center");
                p.StaticA.set_verticalAlign("middle");
                p.StaticA.move("339","205","35","35",null,null);

                p.StaticTest.set_background("powderblue");
                p.StaticTest.set_font("12pt \"MS Gothic\"");
                p.StaticTest.set_padding("8px 8px 8px 8px");
                p.StaticTest.set_taborder("1");
                p.StaticTest.set_text("1. Click Edit00\r\n2. Press End\r\n3. Press \'t\',\'e\',\'s\',\'t\',Enter\r\n4. Click [A]");
                p.StaticTest.set_textAlign("left");
                p.StaticTest.set_verticalAlign("top");
                p.StaticTest.move("384","18","416","224",null,null);

                p.StEventLog.set_background("azure");
                p.StEventLog.set_color("black");
                p.StEventLog.set_font("12pt MS Gothic");
                p.StEventLog.set_readonly("false");
                p.StEventLog.set_taborder("2");
                p.StEventLog.set_tabstop("false");
                p.StEventLog.set_wordWrap("english");
                p.StEventLog.move("16","296","952","245",null,null);

                p.StLog.set_color("black");
                p.StLog.set_font("12pt MS Gothic");
                p.StLog.set_readonly("false");
                p.StLog.set_taborder("3");
                p.StLog.set_tabstop("false");
                p.StLog.set_wordWrap("char");
                p.StLog.move("16","550","956","154",null,null);

                p.Static00.set_font("14pt \"MS Gothic\"");
                p.Static00.set_taborder("4");
                p.Static00.set_text("Edit00");
                p.Static00.set_textAlign("right");
                p.Static00.set_verticalAlign("middle");
                p.Static00.move("14","23","63","33",null,null);

                p.Edit00.set_taborder("5");
                p.Edit00.move("83","22","238","35",null,null);

                p.Edit01.set_taborder("6");
                p.Edit01.move("77","132","155","58",null,null);

                p.Button00.set_taborder("7");
                p.Button00.set_text("Button00");
                p.Button00.move("102","205","120","65",null,null);

                p.btn00.set_taborder("8");
                p.btn00.set_text("test");
                p.btn00.move("7","242","63","41",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new nexacro.Layout("Layout0","tab",800,1280,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.StaticTest.move("384","30","396","224",null,null);

                p.StEventLog.move("16","296","764","245",null,null);

                p.StLog.move("16","550","768","154",null,null);
            	}
            );
            obj.set_mobileorientation("portrait");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new nexacro.BindItem("item0","Edit00","value","Dataset00","x");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("A_Dataset_RP_93315_dataobject_databind_01.xfdl","lib::libCommon.xjs");
        this.addIncludeScript("A_Dataset_RP_93315_dataobject_databind_01.xfdl","libevent::event.util.xjs");
        this.registerScript("A_Dataset_RP_93315_dataobject_databind_01.xfdl", function(nexacro, system, trace, environment, application) {
        /***********************************************************************
        * 설명      : Dataset setColumn Method
        * 작성일    : 2021.11.02
        * 작성자    : 함경곤
        * 수정이력  : DataObject Bind Test

        dataset updatecontrol = false
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
        this.dataset = this.ds_data1;
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

        tc1.task['set_value'] = function(strValue) {
        	//var result = [];
        	this.Edit00.set_value(strValue);

        	//r/eturn result;
        };

        tc1.task['eventChk'] = function() {
        	var result = [];
        	result.push(tc1.userdata.eventChkList1);
        	return result;
        };

        tc1.checker['equal'] = function(alResultValues, alExpectedValues) {
        	var chk = true;
        	var chk = tapi.checkEqual(this, alResultValues, alExpectedValues);
        	return chk;
        };

        tc1.validator ['tc1_vd1'] = {
        	description: "set_value 수행 bind되어있지 않은 dataset의 event 발생 확인",
        	autoTaskFlow : ["set_value", "eventChk"],
        	vcinfo : {
        		argType : tapi.VCT_ARG_LIST,
        		args : [
        				//vc : nRow, varCol, varVal, ev : 리턴값, 이벤트정보, getCellText
        			    {vc: [[tapi.VBT_LOWER,"1234"],[tapi.VBT_NORMAL,"TEST00"]],   ev: ["Dataset00","onvaluechanged","1","x","1234","123","0","DataObject00","onvaluechanged","0","Dataset00","1234","Dataset01","onvaluechanged","1","x","1234","123","0"]},
        				{vc: [[tapi.VBT_LOWER,"test"],[tapi.VBT_NORMAL,"TEST01"]],   ev: ["Dataset00","onvaluechanged","1","x","test","1234","0","DataObject00","onvaluechanged","0","Dataset00","test","Dataset01","onvaluechanged","1","x","test","1234","0"]},
        			]
        	},
        	prepare: function () {
        		tc1.userdata.eventChkList1 = [];
        		tc1.userdata.result = [];
        	},
        	run: function () {
        		var vdAdt = tapi.getVdAdaptor();
        		var taskName = vdAdt.getTaskFlowName();
        		var strValue = vdAdt.getValue(0);

        		switch(taskName) {
        		case "set_value":
        			var rtn = tc1.task['set_value'].call(this, strValue);
        			//tc1.userdata.result.push(rtn);
        			break;
        		case "eventChk":
        			var rtn = tc1.task['eventChk'].call(this);
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
        this.tss8168_onload = function(obj,e)
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

        this.tracePrint = function (str) {
        	this.StEventLog.insertText(str);
        };

        this.StaticA_onclick = function(obj,e)
        {

        };

        this.DataObject00_ondatachanged = function(obj,e)
        {
        	//this.tracePrint('@' + obj.id + '_' + e.eventid + ' ');
        	tc1.userdata.eventChkList1.push(obj.id);
        	tc1.userdata.eventChkList1.push(e.eventid);
        };

        this.DataObject00_onvaluechanged = function(obj,e)
        {
        	//this.tracePrint('@' + obj.id + '_' + e.eventid + '(' + e.index + '|' + e.key + '|' + e.sourcedatasetid + '|' + e.value + ') ');
        	tc1.userdata.eventChkList1.push(obj.id);
        	tc1.userdata.eventChkList1.push(e.eventid);
        	tc1.userdata.eventChkList1.push(e.index);
        	tc1.userdata.eventChkList1.push(e.sourcedatasetid);
        	tc1.userdata.eventChkList1.push(e.value);
        };

        this.Dataset00_onvaluechanged = function(obj,e)
        {
        	//this.tracePrint('@' + obj.id + '_' + e.eventid + '(' + e.col + '|' + e.columnid + '|' + e.newvalue + '|' + e.oldvalue + '|' + e.row + ') ');
        	tc1.userdata.eventChkList1.push(obj.id);
        	tc1.userdata.eventChkList1.push(e.eventid);
        	tc1.userdata.eventChkList1.push(e.col);
        	tc1.userdata.eventChkList1.push(e.columnid);
        	tc1.userdata.eventChkList1.push(e.newvalue);
        	tc1.userdata.eventChkList1.push(e.oldvalue);
        	tc1.userdata.eventChkList1.push(e.row);
        };

        this.Dataset01_onvaluechanged = function(obj,e)
        {
        	//this.tracePrint('@' + obj.id + '_' + e.eventid + '(' + e.col + '|' + e.columnid + '|' + e.newvalue + '|' + e.oldvalue + '|' + e.row + ') ');
        	tc1.userdata.eventChkList1.push(obj.id);
        	tc1.userdata.eventChkList1.push(e.eventid);
        	tc1.userdata.eventChkList1.push(e.col);
        	tc1.userdata.eventChkList1.push(e.columnid);
        	tc1.userdata.eventChkList1.push(e.newvalue);
        	tc1.userdata.eventChkList1.push(e.oldvalue);
        	tc1.userdata.eventChkList1.push(e.row);
        };

        this.Dataset01_onrowsetchanged = function(obj,e)
        {
        	//this.tracePrint('@' + obj.id + '_' + e.eventid + '(' + e.reason + ') ');
        };
        this.Button00_onclick = function(obj,e)
        {
        	this.Edit00.set_value("1234");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.tss8168_onload,this);
            this.StaticA.addEventHandler("onclick",this.StaticA_onclick,this);
            this.StaticTest.addEventHandler("onclick",this.StaticTest_onclick,this);
            this.Edit00.addEventHandler("onsetfocus",this.Edit_onsetfocus,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.DataObject00.addEventHandler("ondatachanged",this.DataObject00_ondatachanged,this);
            this.DataObject00.addEventHandler("onerror",this.DataObject00_onerror,this);
            this.DataObject00.addEventHandler("onload",this.DataObject00_onload,this);
            this.DataObject00.addEventHandler("onsuccess",this.DataObject_onsuccess,this);
            this.DataObject00.addEventHandler("onvaluechanged",this.DataObject00_onvaluechanged,this);
            this.Dataset00.addEventHandler("onvaluechanged",this.Dataset00_onvaluechanged,this);
            this.Dataset01.addEventHandler("onrowsetchanged",this.Dataset01_onrowsetchanged,this);
            this.Dataset01.addEventHandler("onvaluechanged",this.Dataset01_onvaluechanged,this);
        };

        this.loadIncludeScript("A_Dataset_RP_93315_dataobject_databind_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
