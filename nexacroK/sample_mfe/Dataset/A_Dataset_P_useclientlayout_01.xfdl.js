(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TA_Dataset_P_useclientlayout_01_v2");
            this.set_titletext("TA_Dataset_P_useclientlayout_01_v2");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(440,560);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("ds_data8", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "aName","size" : "256","type" : "STRING"},{"id" : "Title","size" : "256","type" : "STRING"},{"id" : "Note","size" : "256","type" : "STRING"},{"id" : "RegDt","size" : "256","type" : "STRING"}]}});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("ds_data9", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "col0","size" : "256","type" : "STRING"},{"id" : "col1","size" : "256","type" : "STRING"}]},"Rows" : [{"col0" : "test","col1" : "테스트"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Button("btn00","314","4","107","36",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Embedded Test");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static01","3","31","301","37",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("0");
            obj.set_text("[Dataset_P_useclientlayout_48089_01]");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_Combo_menu","93","1","81","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_text("◀Dataset");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("txt_result","6","288","264","140",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("2");
            obj.set_text("//");
            obj.set_value("//");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_clear","273","288","32","134",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("3");
            obj.set_text("c\r\nl\r\ne\r\na\r\nr");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_main","8","1","81","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("4");
            obj.set_text("◀◀Main");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","8","197","106","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("5");
            obj.set_text("useclientlayout");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_set","81","240","66","37",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("6");
            obj.set_text("set");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_get","152","240","66","37",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("7");
            obj.set_text("get");
            this.addChild(obj.name, obj);

            obj = new nexacro.Radio("rd_useclientlayout","128","205","170","20",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_columncount("2");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("8");
            var rd_useclientlayout_innerdataset = new nexacro.NormalDataset("rd_useclientlayout_innerdataset", obj);
            rd_useclientlayout_innerdataset._setContents({"ColumnInfo" : {"Column" : [{"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "true","datacolumn" : "true"},{"codecolumn" : "false","datacolumn" : "false"}]});
            obj.set_innerdataset(rd_useclientlayout_innerdataset);
            obj.set_value("true");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_select","10","240","66","37",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("9");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid00","19","57","293","127",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_data8");
            obj.set_fillareatype("linerow");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("10");
            obj.getSetter("useinputpanel").set("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Name\"/><Cell col=\"1\" text=\"Title\"/><Cell col=\"2\" text=\"Note\"/><Cell col=\"3\" text=\"RegDt\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:Name\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:Title\"/><Cell col=\"2\" edittype=\"normal\" text=\"bind:Note\"/><Cell col=\"3\" edittype=\"normal\" text=\"bind:RegDt\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00","223","240","80","37",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("11");
            obj.set_text("clearData");
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
        this.addIncludeScript("A_Dataset_P_useclientlayout_01.xfdl","lib::libCommon.xjs");
        this.addIncludeScript("A_Dataset_P_useclientlayout_01.xfdl","libevent::event.util.xjs");
        this.registerScript("A_Dataset_P_useclientlayout_01.xfdl", function(nexacro, system, trace, environment, application) {
        /***********************************************************************
        * 설명      : Dataset useclientlayout Property
        ***********************************************************************
        *     수정일     작성자   내용
        ***********************************************************************
        *     2019.03.07  김형철   최초 작성
        ***********************************************************************
        */

        this.executeIncludeScript("lib::libCommon.xjs"); /*include "lib::libCommon.xjs"*/;
        this.executeIncludeScript("libevent::event.util.xjs"); /*include "libevent::event.util.xjs"*/;
        var tapi = this.gfnLoadTestAPI(0.71);

        /***********************************************************************
        * 01: Form 변수 선언부
        ***********************************************************************/
        this.dataset8 = this.ds_data8;
        this.dataset9 = this.ds_data9;
        this.grid = this.Grid00;

        /***********************************************************************
        * 02 : Test Case, Validator, Validation Case 선언부
        ***********************************************************************/
        var tc1  = {
        	description: "Dataset useclientlayout Property Test",
        	//-------------- beign user defined section
        	userdata : {
        		result : [],			//task 리턴값
        		strXML : [],
        	},
        	//--------------  end  user defined section
        	initialize: function() {
        		tc1.userdata.strXML = this.dataset8.saveXML();
        	},
        	checker : {},
        	validator : {},
        	task : {},
        	finalize : function() {
        	}
        };

        tc1.task['useclientlayout'] = function(bUseclient) {
        	if(bUseclient == true || bUseclient == false)
        		this.dataset8.set_useclientlayout(bUseclient);
        };

        tc1.task['transaction'] = function() {
        	// 대기 상태 시작
        	var vdAdt = tapi.getVdAdaptor();
        	vdAdt.beginWait(2000);

        	this.transaction("test","servicejsp::TA_Dataset_P_useclientlayout_48089_01_v2.jsp","dsIn=ds_data9","ds_data8=ds_boder","","fn_callback", true);
        };

        tc1.task['getColumn'] = function() {
        	var result = [];

        	for(var i=0; i<3; i++)
        		result.push(this.dataset8.getColumn(i, 0));

        	return result;
        }

        tc1.checker['equal'] = function(alResultValues, alExpectedValues) {
        	var chk = true;
        	var chk = tapi.checkEqual(this, alResultValues, alExpectedValues);

        	return chk;
        };

        tc1.validator ['tc1_vd1'] = {
        	description: "useclientlayout 설정값",
        	autoTaskFlow : ["useclientlayout", "transaction", "getColumn"],
        	vcinfo : {
        		argType : tapi.VCT_ARG_LIST,
        		args : [
        				//vc : bUseclient, ev : Column Text
        				{vc: [[tapi.VBT_NORMAL,"default"]],  ev: ["홍길동","길성준","현빈"]},
        				{vc: [[tapi.VBT_NORMAL,false]],  	 ev: ["홍길동","길성준","현빈"]},
        				{vc: [[tapi.VBT_NORMAL,true]],  	 ev: ["","",""]},
        		]
        	},
        	prepare: function () {
        		tc1.userdata.strXML = this.dataset8.saveXML();
        	},
        	run: function () {
        		var vdAdt = tapi.getVdAdaptor();
        		var taskName = vdAdt.getTaskFlowName();

        		var rtn;
        		var bUseclient = vdAdt.getValue(0);

        		switch(taskName) {
        		case "useclientlayout":
        			tc1.task['useclientlayout'].call(this, bUseclient);
        			break;
        		case "transaction":
        			tc1.task['transaction'].call(this);
        			break;
        		case "getColumn":
        			rtn = tc1.task['getColumn'].call(this);
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
        		this.dataset8.loadXML(tc1.userdata.strXML);
        		this.grid.createFormat();
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
        this.TA_Dataset_P_useclientlayout_01_v2_onload = function(obj,e)
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
            this.addEventHandler("onload",this.TA_Dataset_P_useclientlayout_01_v2_onload,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn_Combo_menu.addEventHandler("onclick",this.btn_button_menu_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_main.addEventHandler("onclick",this.btn_main_onclick,this);
            this.btn_set.addEventHandler("onclick",this.btn_set_onclick,this);
            this.btn_get.addEventHandler("onclick",this.btn_get_onclick,this);
            this.btn_select.addEventHandler("onclick",this.btn_select_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };

        this.loadIncludeScript("A_Dataset_P_useclientlayout_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
