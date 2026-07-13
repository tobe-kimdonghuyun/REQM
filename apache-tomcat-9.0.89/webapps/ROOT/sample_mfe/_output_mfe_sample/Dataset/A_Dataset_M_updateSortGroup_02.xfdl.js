(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Dataset_M_updateSortGroup_48092_01_v2");
            this.set_titletext("Dataset_M_updateSortGroup_48092_01_v2");
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
            			"GroupCode" : "111",
            			"TeamCode" : "111a",
            			"Name" : "원빈",
            			"Pay" : 4000
            		},
            		{
            			"GroupCode" : "112",
            			"TeamCode" : "112a",
            			"Name" : "장동건",
            			"Pay" : 5000
            		},
            		{
            			"GroupCode" : "111",
            			"TeamCode" : "111b",
            			"Name" : "현빈",
            			"Pay" : 6000
            		},
            		{
            			"GroupCode" : "113",
            			"TeamCode" : "113a",
            			"Name" : "이병헌",
            			"Pay" : 7000
            		},
            		{
            			"GroupCode" : "114",
            			"TeamCode" : "114c",
            			"Name" : "이나영",
            			"Pay" : 8000
            		},
            		{
            			"GroupCode" : "114",
            			"TeamCode" : "114c",
            			"Name" : "김태희",
            			"Pay" : 9000
            		},
            		{
            			"GroupCode" : "112",
            			"TeamCode" : "112b",
            			"Name" : "비",
            			"Pay" : 10000
            		}
            	]
            });
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("ds_data6", this);
            obj.set_binddataobject("DataObject00");
            obj.set_dataobjectpath("$.dataset[*]");
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents({"ColumnInfo" : {"Column" : [{"datapath" : "@.GroupCode","id" : "그룹코드","size" : "256","type" : "INT"},{"datapath" : "@.TeamCode","id" : "부서코드","size" : "256","type" : "STRING"},{"datapath" : "@.Name","id" : "이름","size" : "256","type" : "STRING"},{"datapath" : "@.Pay","id" : "연봉","prop" : "","size" : "256","sumtext" : "1","type" : "INT"},{"id" : "비고","prop" : "","size" : "256","sumtext" : "","type" : "STRING"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Grid("Grid00","286","57","558","236",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_data6");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("0");
            obj.getSetter("useinputpanel").set("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"그룹코드\"/><Cell col=\"1\" text=\"부서코드\"/><Cell col=\"2\" text=\"이름\"/><Cell col=\"3\" text=\"연봉\"/><Cell col=\"4\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:그룹코드\"/><Cell col=\"1\" text=\"bind:부서코드\"/><Cell col=\"2\" text=\"bind:이름\"/><Cell col=\"3\" text=\"bind:연봉\"/><Cell col=\"4\" text=\"bind:비고\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00","314","4","107","36",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Embedded Test");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static02","9","300","290","74",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("- strKeyString parameter에 두개 이상의 Column을 지정하여 sort할 수 있어야 한다.\r\n *두개 이상의 Column을 지정 시 bigdecimal Column type이 포함되어 있는경우 sort가 잘못 처리되는 현상(NTT버그) \r\n  예) S:-bigdecimal-string");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("txt_result","8","376","295","70",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("3");
            obj.set_text("//");
            obj.set_value("//");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_clear","233","365","63","23",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("4");
            obj.set_text("clear");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_strKeyString","104","201","197","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("5");
            obj.set_value("S:-string");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_updateSortGroup","8","262","141","31",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("6");
            obj.set_text("updateSortGroup()");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","6","198","106","35",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("7");
            obj.set_text("strKeyString::");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_updateSortGroup_keystring","6","229","222","31",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("8");
            obj.set_text("updateSortGroup(strKeyString)");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_keystring","85","172","131","26",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("9");
            obj.set_value("S:+string");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static04","10","175","70","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("10");
            obj.set_text("keystring");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_set_keystring","229","172","35","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("11");
            obj.set_text("set");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_get_keystring","269","172","35","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("12");
            obj.set_text("get");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00","213","263","87","32",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("13");
            obj.set_text("insertrow()");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("Edit00","155","263","53","34",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static01","3","31","297","37",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("15");
            obj.set_text("[Dataset_M_updateSortGroup_48092_01]");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_Combo_menu","93","1","81","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("16");
            obj.set_text("◀Dataset");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_main","8","1","81","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("17");
            obj.set_text("◀◀Main");
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
            this._addPreloadList("data","","ds_data6");
        };
        
        // User Script
        this.addIncludeScript("A_Dataset_M_updateSortGroup_02.xfdl","lib::libCommon.xjs");
        this.addIncludeScript("A_Dataset_M_updateSortGroup_02.xfdl","libevent::event.util.xjs");
        this.registerScript("A_Dataset_M_updateSortGroup_02.xfdl", function(nexacro, system, trace, environment, application) {
        /***********************************************************************
        * 설명      : Dataset updateSortGroup Method
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
        this.dataset = this.ds_data6;
        this.grid = this.Grid00;

        /***********************************************************************
        * 02 : Test Case, Validator, Validation Case 선언부
        ***********************************************************************/
        var tc1  = {
        	description: "Dataset updateSortGroup Method Test",
        	//-------------- beign user defined section
        	userdata : {
        		result : [],			//task 리턴값
        		eventChkList1 : [],		//onrowsetchanged 확인용
        	},
        	//--------------  end  user defined section
        	initialize: function() {
        		this.dataset.addEventHandler("onrowsetchanged", this.ds_data6_onrowsetchanged, this);
        	},
        	checker : {},
        	validator : {},
        	task : {},
        	finalize : function() {
        	}
        };

        tc1.task['updateSortGroup'] = function(strKeyString) {
        	var result = [];
        	var rtnupdateSortGroup;

        	if(strKeyString == "생략")
        		rtnupdateSortGroup = this.dataset.updateSortGroup();
        	else
        		rtnupdateSortGroup = this.dataset.updateSortGroup(strKeyString);

        	result.push(rtnupdateSortGroup);

        	return result;
        };

        tc1.task['eventChk'] = function() {
        	var result = [];

        	result.push(tc1.userdata.eventChkList1);

        	return result;
        };

        tc1.task['getCellText'] = function() {
        	var vdAdt = tapi.getVdAdaptor();

        	var result = [];
        	var nRow = [];

        	switch(vdAdt.getIndexVC()) {
        	//단일 그룹 내림차순
        	case 3 :
        		nRow = [2,4,7,10];
        		break;
        	// , 사용한 다중 그룹
        	case 4 :
        		nRow = [1,3,4,6,8,9,11,12,15,16];
        		break;
        	// , 사용하지 않은 다중 그룹
        	case 5 :
        		nRow = [1,3,5,7,9,12];
        		break;
        	//단일 정렬 오름차순, 내림차순, 다중정렬
        	case 6 :
        	case 7 :
        	case 8 :
        	case 9 :
        		nRow = [0,1,2,3,4,5,6];
        		break;
        	//단일 그룹 오름차순
        	default :
        		nRow = [2,5,7,10];
        		break;
        	}

        	// 그룹은 row가 많아져 논리적 row만 검증
        	for(var i=0; i<5; i++)
        	{
        		if(i == 0 || i == 3)
        		{
        			for(var j=0; j < nRow.length; j++)
        				result.push(this.grid.getCellText(nRow[j], i));
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
        	description: "updateSortGroup 설정",
        	autoTaskFlow : ["updateSortGroup", "eventChk", "getCellText"],
        	vcinfo : {
        		argType : tapi.VCT_ARG_LIST,
        		args : [
        				//vc : strKeyString, ev : 이벤트 정보, getCellText
        				{vc: [[tapi.VBT_NORMAL,"그룹코드"]],  ev: [true,"onrowsetchanged","30","111","112","113","114","10,000","15,000","7,000","17,000"]},
        				{vc: [[tapi.VBT_NORMAL,"G:그룹코드"]],  ev: [true,"onrowsetchanged","30","111","112","113","114","10,000","15,000","7,000","17,000"]},
        				{vc: [[tapi.VBT_NORMAL,"G:+그룹코드"]],  ev: [true,"onrowsetchanged","30","111","112","113","114","10,000","15,000","7,000","17,000"]},
        				{vc: [[tapi.VBT_NORMAL,"G:-그룹코드"]],  ev: [true,"onrowsetchanged","30","114","113","112","111","17,000","7,000","15,000","10,000"]},
        				{vc: [[tapi.VBT_NORMAL,"G:그룹코드,부서코드"]],  ev: [true,"onrowsetchanged","30","111","111","111","112","112","112","113","113","114","114","4,000","6,000","10,000","5,000","10,000","15,000","7,000","7,000","17,000","17,000"]},
        				{vc: [[tapi.VBT_NORMAL,"G:+그룹코드-부서코드"]],  ev: [true,"onrowsetchanged","30","111","111","112","112","113","114","6,000","4,000","10,000","5,000","7,000","17,000"]},
        				{vc: [[tapi.VBT_NORMAL,"S:그룹코드"]],  ev: [true,"onrowsetchanged","30","111","111","112","112","113","114","114","4,000","6,000","5,000","10,000","7,000","8,000","9,000"]},
        				{vc: [[tapi.VBT_NORMAL,"S:+그룹코드"]],  ev: [true,"onrowsetchanged","30","111","111","112","112","113","114","114","4,000","6,000","5,000","10,000","7,000","8,000","9,000"]},
        				{vc: [[tapi.VBT_NORMAL,"S:-그룹코드"]],  ev: [true,"onrowsetchanged","30","114","114","113","112","112","111","111","8,000","9,000","7,000","5,000","10,000","4,000","6,000"]},
        				{vc: [[tapi.VBT_NORMAL,"S:+그룹코드-부서코드"]],  ev: [true,"onrowsetchanged","30","111","111","112","112","113","114","114","6,000","4,000","10,000","5,000","7,000","8,000","9,000"]},
        				//keystring 미설정 후
        				{vc: [[tapi.VBT_NORMAL,"생략"]],  ev: [false,"","111","114","","","6,000","9,000","",""]},
        				//keystring 설정 후
        				{vc: [[tapi.VBT_NORMAL,"생략"]],  ev: [true,"onrowsetchanged","30","111","112","113","114","10,000","15,000","7,000","17,000"]},
        		]
        	},
        	prepare: function () {
        		var vdAdt = tapi.getVdAdaptor();

        		if(vdAdt.getIndexVC() == 11)
        		{
        			this.dataset.set_keystring("G:+그룹코드");
        			tc1.userdata.eventChkList1 = [];
        		}
        	},
        	run: function () {
        		var vdAdt = tapi.getVdAdaptor();
        		var taskName = vdAdt.getTaskFlowName();

        		var rtn;
        		var strKeyString = vdAdt.getValue(0);

        		switch(taskName) {
        		case "updateSortGroup":
        			rtn = tc1.task['updateSortGroup'].call(this, strKeyString);
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
        		this.dataset.set_keystring();
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
        this.Dataset_M_updateSortGroup_48092_01_v2_onload = function(obj,e)
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
        this.ds_data6_onrowsetchanged = function(obj,e)
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
            this.addEventHandler("onload",this.Dataset_M_updateSortGroup_48092_01_v2_onload,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_updateSortGroup.addEventHandler("onclick",this.btn_updateSortGroup_onclick,this);
            this.btn_updateSortGroup_keystring.addEventHandler("onclick",this.btn_updateSortGroup_keystring_onclick,this);
            this.btn_set_keystring.addEventHandler("onclick",this.btn_set_keystring_onclick,this);
            this.btn_get_keystring.addEventHandler("onclick",this.btn_get_keystring_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.btn_Combo_menu.addEventHandler("onclick",this.btn_button_menu_onclick,this);
            this.btn_main.addEventHandler("onclick",this.btn_main_onclick,this);
            this.ds_data6.addEventHandler("onrowsetchanged",this.ds_data6_onrowsetchanged,this);
        };

        this.loadIncludeScript("A_Dataset_M_updateSortGroup_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
