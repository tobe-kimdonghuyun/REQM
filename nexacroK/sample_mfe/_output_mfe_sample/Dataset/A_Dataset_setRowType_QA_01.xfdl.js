(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("A_Dataset_insertRow_QC_01");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(440,580);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("ds00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "Col_STRING","size" : "256","type" : "STRING"},{"id" : "Col_INT","size" : "256","type" : "INT"},{"id" : "Col_FLOAT","size" : "256","type" : "FLOAT"},{"id" : "Col_BIGDECIMAL1","size" : "256","type" : "BIGDECIMAL"},{"id" : "Col_BIGDECIMAL2","size" : "256","type" : "BIGDECIMAL"},{"id" : "Col_DATE","size" : "256","type" : "DATE"},{"id" : "Col_TIME","size" : "256","type" : "TIME"},{"id" : "Col_DATETIME","size" : "256","type" : "DATETIME"},{"id" : "Col_BLOB","size" : "256","type" : "BLOB"}]},"Rows" : [{"Col_STRING" : "ABC가나다","Col_INT" : "123","Col_FLOAT" : "123.45","Col_BIGDECIMAL2" : "0.65000","Col_DATE" : "20190207","Col_TIME" : "123456012","Col_DATETIME" : "20190207123456012","Col_BIGDECIMAL1" : "123.456"}]});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("ds01", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "size","size" : "256","type" : "STRING"},{"id" : "Column0","size" : "256","type" : "STRING"}]},"Rows" : [{},{},{}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Grid("grd00","3","6","420","72",null,null,null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("ds00");
            obj.set_taborder("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"38\"/><Column size=\"39\"/><Column size=\"47\"/><Column size=\"40\"/><Column size=\"57\"/><Column size=\"62\"/><Column size=\"81\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"36\"/></Rows><Band id=\"head\"><Cell text=\"STRING\"/><Cell col=\"1\" text=\"INT\"/><Cell col=\"2\" text=\"FLOAT\"/><Cell col=\"3\" text=\"BIGDECIMAL1\"/><Cell col=\"4\" text=\"BIGDECIMAL2\"/><Cell col=\"5\" text=\"DATE\"/><Cell col=\"6\" text=\"TIME\"/><Cell col=\"7\" text=\"DATETIME\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:Col_STRING\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:Col_INT\"/><Cell col=\"2\" edittype=\"normal\" text=\"bind:Col_FLOAT\"/><Cell col=\"3\" edittype=\"normal\" text=\"bind:Col_BIGDECIMAL1\"/><Cell col=\"4\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"#,##0.#####\" text=\"bind:Col_BIGDECIMAL2\"/><Cell calendarpopuptype=\"normal\" col=\"5\" edittype=\"date\" text=\"bind:Col_DATE\"/><Cell calendardateformat=\"HH:mm:ss:sss\" calendareditformat=\"HH:mm:ss:sss\" calendarpopuptype=\"normal\" col=\"6\" edittype=\"mask\" maskeditformat=\"HH:mm:ss:sss\" text=\"bind:Col_TIME\"/><Cell calendardateformat=\"yyyy-MM-dd HH:mm:ss:sss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss:sss\" calendarpopuptype=\"normal\" col=\"7\" edittype=\"normal\" text=\"bind:Col_DATETIME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt00","4","86","44","33",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt01","47","86","41","33",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt02","87","86","40","33",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt03","126","86","50","33",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt04","175","86","44","33",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt05","273","86","64","33",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00","9","138","39","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("test");
            this.addChild(obj.name, obj);

            obj = new nexacro.Calendar("cal00","218","86","56","33",null,null,null,null,null,null,this);
            obj.set_popuptype("normal");
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new nexacro.Calendar("cal01","336","86","86","33",null,null,null,null,null,null,this);
            obj.set_dateformat("yyyy-MM-dd HH:mm:ss:sss");
            obj.set_editformat("yyyy-MM-dd HH:mm:ss:sss");
            obj.set_popuptype("normal");
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new nexacro.VideoPlayer("VideoPlayer00","632","441","200","200",null,null,null,null,null,null,this);
            obj.getSetter("taborder").set("10");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","",440,580,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new nexacro.BindItem("item0","edt00","value","ds00","Col_STRING");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item1","edt01","value","ds00","Col_INT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item2","edt02","value","ds00","Col_FLOAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item3","edt03","value","ds00","Col_BIGDECIMAL1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item4","edt04","value","ds00","Col_BIGDECIMAL2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item6","edt05","value","ds00","Col_TIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item5","cal00","value","ds00","Col_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item7","cal01","value","ds00","Col_DATETIME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("A_Dataset_setRowType_QA_01.xfdl","lib::libCommon.xjs");
        this.addIncludeScript("A_Dataset_setRowType_QA_01.xfdl","libevent::event.util.xjs");
        this.addIncludeScript("A_Dataset_setRowType_QA_01.xfdl","libevent::event.wrapper.xjs");
        this.registerScript("A_Dataset_setRowType_QA_01.xfdl", function(nexacro, system, trace, environment, application) {
        /***********************************************************************
        * 설명      : Dataset 과 바인딩된 컴포넌트들에서 값 변경 없이
                      클릭만 한 경우 RowType 동작 체크(Dataset의 Column type별로 체크, RP.83771 관련)
        * 작성일    : 2019.02.07
        * 작성자    : 윤재식
        * 수정이력  :
        ***********************************************************************
        *     수정일     작성자   내용
        ***********************************************************************
        *    2019.02.07   윤재식   최초 작성
        ***********************************************************************
        */

        this.executeIncludeScript("lib::libCommon.xjs"); /*include "lib::libCommon.xjs"*/;
        this.executeIncludeScript("libevent::event.util.xjs"); /*include "libevent::event.util.xjs"*/;
        this.executeIncludeScript("libevent::event.wrapper.xjs"); /*include "libevent::event.wrapper.xjs"*/

        var tapi = this.gfnLoadTestAPI(0.71);
        /***********************************************************************
        * 01 : Test Case, validator 선언부
        ***********************************************************************/
        /***********************************************************************
        * Test Case 생성
        ***********************************************************************/
        var tc1  = {
            // tc 설명
        	description: "Dataset_Method_setRowType Test",
            metadata : {
        			 objectId : "nexacro.Dataset",        // 객체 식별자 : typedef의 object id(개별)
        			 featureType: tapi.FT_METHOD,     		// object metainfo의 속성 종류
        			 elementName : "setRowType",        // 요소 이름 : [ object metainfo의 속성 이름 | undefined ]
        			 keyword : ["Dataset", "setRowType"]
            },
        	userdata : {
        		result : [],			//task 리턴값
        	},
        	//  테스트케이스 시작 전 해야할 일
        	initialize: function(){
        	},
        	checker : {},
        	// validator 구조체(객체 안의 객체)
        	validator : {},
        	task : {},

        	// 테스트케이스 종료 후 해야할 일
        	finalize : function()
        	{
        		this.ds00.reset();
        	}
        };

        tc1.checker['equal'] = function(alResultValues, alExpectedValues) {
        	var chk = true;
        	chk = tapi.checkEqual(this, alResultValues, alExpectedValues);

        	return chk;
        };

        tc1.task['showEditor'] = function() {
        	var vdAdt = tapi.getVdAdaptor();
        	vdAdt.beginWait(1000);
        	this.grd00.showEditor();
        };

        tc1.task['tab'] = function() {
        	// 마우스 클릭 & Tab 으로 편집 상태로 변경 및 이동
        	for(var i=0; i<8; i++)
        	{
        		var elem = this.grd00._bodyBand._matrix._rows[0]._cells[i];
        		// 마우스 클릭
        		nexacro.test.Event.nx_common_click(elem, 'lbutton', false, false, false, 2, 2);
        		this.sleep(500);
        		// Tab
        		nexacro.test.Event.key_downup(elem, 'Tab', 0, false, false, false,  2, 2);
        	}

        	// 일반 입력용 컴포넌트 클릭을 하여 RowType 변경 체크
        	var elem_com00=this.edt00;
        	var elem_com01=this.edt01;
        	var elem_com02=this.edt02;
        	var elem_com03=this.edt03;
        	var elem_com04=this.edt04;
        	var elem_com05=this.cal00;
        	var elem_com06=this.edt05;
        	var elem_com07=this.cal01;

        	for(var i=0; i<8; i++)
        	{
        		this.sleep(500);
        		var elem = eval("elem_com0"+i);
        		nexacro.test.Event.nx_common_click(elem, 'lbutton', false, false, false, 2, 2);
        	}

        	this.btn00.setFocus();
        };

        tc1.task['onkillfocus'] = function() {
        	var vdAdt = tapi.getVdAdaptor();
        	vdAdt.beginWait(1000);
        	this.btn00.setFocus();
        };


        /***********************************************************************
        * Test Case 유효성 검사1
        ***********************************************************************/
        // tc객체의 validator객체에 임의의 key(tc_vc1)를 생성하고 거기에 객체를 넣는 구조
        tc1.validator ['tc_vc1'] = {
            // 유효성 검사 설명
        	description: "getRowType",
        	autoTaskFlow : ["showEditor", "tab", "onkillfocus"],
        	// 수행전 준비에 해야할 일
        	prepare: function (){
        		var runner = this.gfnGetRunner();
        		runner.setAsync(false);
        		this.grd00.setFocus();
        	},

        	// 실행
        	run: function () {
        		var vdAdt = tapi.getVdAdaptor();
        		var taskName = vdAdt.getTaskFlowName();
        		var rtn;

        		switch(taskName) {
        		case "showEditor":
        			tc1.task['showEditor'].call(this);
        			break;
        		case "tab":
        			tc1.task['tab'].call(this);
        			break;
        		case "onkillfocus":
        			tc1.task['onkillfocus'].call(this);
        			break;
        		}

        		return rtn;
        	},

        	// 기대값 검사
        	check: function (resultValue) {
        		var rtn = this.ds00.getRowType(0);
        		var chk = tc1.checker['equal'].call(this, rtn, 1);
        		return chk;
        	},

        	// 유효성 확인 후 해야 할일
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
        	],
        	// tcInfo.allow : 특정 browser에서 추가할 tc 목록(browser : 'nexacro'/'IE'/'Chrome'/'Gecko'/'Safari')
        	allow : [
        	],
        	// tcInfo.adjustTcInfo : browser 버전 및 os 환경에 따른 실행 여부를 결정할 tc 목록
        	adjustTcInfo : function() {
        	}
        };

        /***********************************************************************
        * 04 : Runner API, Application Runner 띄우지 않고 실행하기 위함
        ***********************************************************************/
        this.btn00_onclick = function(obj,e)
        {

        	// Runner 획득
        	var runner = tapi.getRunner();
        	//------------ 선택 작업 Begin ------------------------------
        	// 메시지를 log로 기록할 수준 지정
        	// log level = [ FATAL | ERROR | WARN | INFO | DEBUG | TRACE ]
        	runner.setLogLevel(tapi.INFO);
        	if (runner.isTestMode() == false){
               var logger = new tapi.ConsoleLogger();
               runner.setLogger(logger);
           }
        	// Test 실행
        	runner.executeTest();
        };

        /***********************************************************************
        * 05 : 화면 로드 시 작업, gfnInit는 필수
        ***********************************************************************/
        this.A_Dataset_addColumn_QC_01_onload = function(obj,e)
        {
        	// debug mode : log level에서 지정한 모든 메시지 제공
        	tapi.systemDebugOn();          // Runner를 debug mode로 실행
        	tapi.debugOn();                  // 응용을 debug mode로 실행
        	// Runner Load
        	tapi.init(tcInfo, this);
        };

        /***********************************************************************
        * 03 : 사용자 정의 함수 선언부
        ***********************************************************************/


        this.grd00_onsetfocus = function(obj,e)
        {
        	var runner = this.gfnGetRunner();
        	runner.setAsync(true);
        };

        this.btn00_onsetfocus = function(obj,e)
        {
        	//대기상태 해제
         	var vdAdt = tapi.getVdAdaptor();
         	vdAdt.releaseWait();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.A_Dataset_addColumn_QC_01_onload,this);
            this.grd00.addEventHandler("oncellclick",this.grd00_oncellclick,this);
            this.grd00.addEventHandler("onsetfocus",this.grd00_onsetfocus,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn00.addEventHandler("onsetfocus",this.btn00_onsetfocus,this);
            this.ds00.addEventHandler("canrowposchange",this.ds00_canrowposchange,this);
        };

        this.loadIncludeScript("A_Dataset_setRowType_QA_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
