(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("i18n");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1070,560);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.DataObject("DataObject00", this);
            obj._setContents({
            	"code" : [
            		{
            			"locale" : "ko",
            			"label" : "Korean"
            		},
            		{
            			"locale" : "ja",
            			"label" : "Japanese"
            		},
            		{
            			"locale" : "en",
            			"label" : "English"
            		}
            	],
            	"data" : {
            		"ko" : {
            			"btn_submit" : "전송",
            			"btn_save" : "저장",
            			"btn_cancel" : "취소"
            		},
            		"ja" : {
            			"btn_submit" : "送信",
            			"btn_save" : "保存",
            			"btn_cancel" : "キャンセル"
            		},
            		"en" : {
            			"btn_submit" : "Submit",
            			"btn_save" : "Save",
            			"btn_cancel" : "Cancel"
            		}
            	}
            });
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("Dataset00", this);
            obj.set_binddataobject("DataObject00");
            obj.set_dataobjectpath("$.code[*]");
            obj._setContents({"ColumnInfo" : {"Column" : [{"datapath" : "@.locale","id" : "locale","size" : "256","type" : "STRING"},{"datapath" : "@.label","id" : "label","size" : "256","type" : "STRING"}]}});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("Dataset01", this);
            obj.set_binddataobject("DataObject00");
            obj.set_dataobjectpath("$.data.ko");
            obj._setContents({"ColumnInfo" : {"Column" : [{"datapath" : "@.btn_submit","id" : "btn_submit","size" : "256","type" : "STRING"},{"datapath" : "@.btn_save","id" : "btn_save","size" : "256","type" : "STRING"},{"datapath" : "@.btn_cancel","id" : "btn_cancel","size" : "256","type" : "STRING"}]}});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("Dataset02", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "Column0","size" : "256","type" : "STRING"},{"id" : "Column1","size" : "256","type" : "STRING"}]},"Rows" : [{"Column0" : "1","Column1" : "1"},{"Column0" : "2","Column1" : "2"},{"Column0" : "3","Column1" : "3"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Radio("Radio00","39","37","280","33",null,null,null,null,null,null,this);
            obj.set_codecolumn("locale");
            obj.set_datacolumn("label");
            obj.set_direction("vertical");
            obj.set_innerdataset("Dataset00");
            obj.set_taborder("0");
            obj.set_text("Korean");
            obj.set_value("ko");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_submit","39","115","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("btn_submit");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_save","170","115","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("btn_save");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_cancel","300","115","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("btn_cancel");
            this.addChild(obj.name, obj);

            obj = new nexacro.Combo("Combo00","340","37","191","33",null,null,null,null,null,null,this);
            obj.set_codecolumn("locale");
            obj.set_datacolumn("label");
            obj.set_innerdataset("Dataset00");
            obj.set_taborder("4");
            obj.set_text("Korean");
            obj.set_value("ko");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Radio("Radio01","43","215","280","50",null,null,null,null,null,null,this);
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_direction("vertical");
            obj.set_innerdataset("Dataset02");
            obj.set_taborder("5");
            obj.set_text("1");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00","526","100","124","50",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Embedded Test");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","",1070,560,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new nexacro.BindItem("item0","btn_submit","text","Dataset01","btn_submit");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item1","btn_save","text","Dataset01","btn_save");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item2","btn_cancel","text","Dataset01","btn_cancel");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("A_DataObject_Innerdataset_RP_90050.xfdl","lib::libCommon.xjs");
        this.addIncludeScript("A_DataObject_Innerdataset_RP_90050.xfdl","libevent::event.util.xjs");
        this.addIncludeScript("A_DataObject_Innerdataset_RP_90050.xfdl","libevent::event.wrapper.xjs");
        this.registerScript("A_DataObject_Innerdataset_RP_90050.xfdl", function(nexacro, system, trace, environment, application) {
        /***********************************************************************
        * 설명      : Dataset onload Event
        ***********************************************************************
        *     수정일     작성자   내용
        ***********************************************************************
        *     2020.09.08  함경곤   최초 작성
        ***********************************************************************
        */

        this.executeIncludeScript("lib::libCommon.xjs"); /*include "lib::libCommon.xjs"*/;
        this.executeIncludeScript("libevent::event.util.xjs"); /*include "libevent::event.util.xjs"*/;
        this.executeIncludeScript("libevent::event.wrapper.xjs"); /*include "libevent::event.wrapper.xjs"*/
        var tapi = this.gfnLoadTestAPI(0.71);

        /***********************************************************************
        * 01: Form 변수 선언부
        ***********************************************************************/


        /***********************************************************************
        * 02 : Test Case, Validator, Validation Case 선언부
        ***********************************************************************/
        var tc1  = {
        	description: "DataObject에 바인드된 Dataset에 바인드 된 컴포넌트 생성 및 프로퍼티 확인",
        	//-------------- beign user defined section
        	userdata : {
        		eventChkList1 : [],		//onsuccess 확인용
        		result : [],			// test 단계별 실행 결과 저장
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

        tc1.task['Create'] = function(comptype) {
        	var result = [];
        	if (comptype =="Radio")
        	{
        		result.push(this.Radio00.getCount());
        	}
        	else if(comptype == "Combo")
        	{
        		result.push(this.Combo00.index);
        	}


        	return result;
        };
        tc1.checker['equal'] = function(alResultValues, alExpectedValues) {
        	var chk = true;
        	var chk = tapi.checkEqual(this, alResultValues, alExpectedValues);

        	return chk;
        };

        tc1.validator ['tc1_vd1'] = {
        	description: "폼 실행시 DataObject에 innnderdataset 바인딩된 컴포넌트 생성확인",
        	autoTaskFlow : ["Create"],
        	vcinfo : {
        		argType : tapi.VCT_ARG_LIST,
        		args : [
        			{vc : [[tapi.VBT_NORMAL, "Radio"]], 		ev : [3]},
        			{vc : [[tapi.VBT_NORMAL, "Combo"]], 		ev : [0]}
        			/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        		]
        	},
        	prepare: function () {
        	        		tc1.userdata.result = [];

        	},
        	run: function () {
        		var vdAdt = tapi.getVdAdaptor();
        		var taskName = vdAdt.getTaskFlowName();	// task 단계를 찾아서 실행
        		var rtn;

        		/////////////////////////////////////////////////////////////////////////////////////////
        		var v1 = vdAdt.getValue(0);

        		switch(taskName) {
        			case "Create": {
        				rtn = tc1.task['Create'].call(this, v1);
        				tc1.userdata.result.push(rtn);
        				break;
        			}
        		}
        		/////////////////////////////////////////////////////////////////////////////////////////

        		return tc1.userdata.result;
        	},
        	check: function (resultValue, expectedValue) {
        		var chk = tc1.checker['equal'].call(this, resultValue, expectedValue);
        		return chk;
        	},
        	teardown: function () {
        	//	tc1.userdata.eventChkList1 = [];
        	//	tc1.userdata.result = [];
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

        this.i18n_onload = function(obj,e)
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
        * onload
        ***********************************************************************/


        /***********************************************************************
        * 07 : 사용자 정의 함수 선언부
        ***********************************************************************/

        this.Radio00_onitemchanged = function(obj,e)
        {
        	this.Dataset01.set_dataobjectpath("$.data."+e.postvalue);
        };

        this.Combo00_onitemchanged = function(obj,e)
        {
        	this.Dataset01.set_dataobjectpath("$.data."+e.postvalue);
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.i18n_onload,this);
            this.Radio00.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
            this.Combo00.addEventHandler("onitemchanged",this.Combo00_onitemchanged,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
        };

        this.loadIncludeScript("A_DataObject_Innerdataset_RP_90050.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
