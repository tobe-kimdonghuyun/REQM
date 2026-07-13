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
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("ds00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "Column1","size" : "256","type" : "STRING"}]},"Rows" : [{"Column1" : "2"}]});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("ds01", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "size","size" : "256","type" : "STRING"},{"id" : "Column0","size" : "256","type" : "STRING"}]},"Rows" : [{},{},{}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Button("btn00","8","8","164","68",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","0","0","440","8",null,null,null,null,null,null,this);
            obj.set_background("darkcyan");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static02","0","0","8","552",null,null,null,null,null,null,this);
            obj.set_background("darkcyan");
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static03","0","76","440","8",null,null,null,null,null,null,this);
            obj.set_background("darkcyan");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static01","172","0","8","552",null,null,null,null,null,null,this);
            obj.set_background("darkcyan");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn01","201","14","143","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Embedded Test");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("A_Dataset_insertRow_QA_01.xfdl","lib::libCommon.xjs");
        this.registerScript("A_Dataset_insertRow_QA_01.xfdl", function(nexacro, system, trace, environment, application) {
        /***********************************************************************
        * 설명      : insertRow
        * 작성일    : 2018.08.29
        * 작성자    : 윤재식
        * 수정이력  :
        ***********************************************************************
        *     수정일     작성자   내용
        ***********************************************************************
        *     2018.08.29  윤재식   최초 작성
        ***********************************************************************
        */

        this.executeIncludeScript("lib::libCommon.xjs"); /*include "lib::libCommon.xjs"*/;
        var tapi = this.gfnGetTestAPI();
        /***********************************************************************
        * 01 : Test Case, validator 선언부
        ***********************************************************************/
        /***********************************************************************
        * Test Case 생성
        ***********************************************************************/
        var tc  = {
            // tc 설명
        	description: "Dataset_Method_insert Test",
            metadata : {
        			 objectId : "nexacro.Dataset",        // 객체 식별자 : typedef의 object id(개별)
        			 featureType: tapi.FT_METHOD,     		// object metainfo의 속성 종류
        			 elementName : "insertRow",        // 요소 이름 : [ object metainfo의 속성 이름 | undefined ]
        			 keyword : ["Dataset", "insertRow", "onrowposchanged", "canrowposchange"]
            },
        	//  테스트케이스 시작 전 해야할 일
        	initialize: function(){
        	},

        	// validator 구조체(객체 안의 객체)
        	validator : {
        	// 여기에 뭐 쓰시면 안되요
        	},

        	// 테스트케이스 종료 후 해야할 일
        	finalize : function()
        	{
        		this.ds00.clearData();
        	}
        };

        /***********************************************************************
        * Test Case 유효성 검사1
        ***********************************************************************/
        // tc객체의 validator객체에 임의의 key(tc_vc1)를 생성하고 거기에 객체를 넣는 구조
        tc.validator ['tc_vc1'] = {
            // 유효성 검사 설명
        	description: "insertRow",

        	// 수행전 준비에 해야할 일
        	prepare: function (){
        	},

        	// 실행
        	run: function () {
        		var rtn = this.btn00_onclick();
        		return rtn;
        	},

        	// 기대값 검사
        	check: function  (resultValue) {

        		return nexacro.test.checkEqual(this, resultValue, 0);
        	},

        	// 유효성 확인 후 해야 할일
        	teardown: function () {
        	}
        };

        /***********************************************************************
        * Test Case 유효성 검사1
        ***********************************************************************/
        tc.validator ['tc_vc2'] = {
            // 유효성 검사 설명
        	description: "이벤트 여부 확인",

        	// 수행전 준비에 해야할 일
        	prepare: function ()
        	{
        		this.ds00.addEventHandler("onrowposchanged", this.ds00_onrowposchanged , this);
        		this.ds00.addEventHandler("canrowposchange", this.ds00_canrowposchange , this);
        	},

        	// 실행
        	run: function () {
        		this.ds00.insertRow(0);
        		rtn = this.eventChkList;
        		return rtn;
        	},

        	// 기대값 검사
        	check: function  (resultValue) {
        	    var rtnResult;
        		var iCheckCount=0;
        		var rtnEventList = resultValue;
        		var expectEventList= ["canrowposchange","onrowposchanged"];

        		// 이벤트 발생한 순서 맞는지 체크
        		for( var i = 0;  i < rtnEventList.length; i++)
        		{
        			var rtn=nexacro.test.checkEqual(this, rtnEventList[i], expectEventList[i]);

        			// trace()

        			if(!rtn)
        			{
        				iCheckCount++;
        			}
        		}

        		// 결과 이벤트에 문제가 1개라도 생기면 에러
        		if(iCheckCount > 0)
        		{
        			rtnResult = false;
        		}
        		else
        		{
        			rtnResult = true;
        		}

        		return rtnResult;
        	},

        	// 유효성 확인 후 해야 할일
        	teardown: function (){
        	}
        };

        /***********************************************************************
        * 02 : Form 변수 선언부
        ***********************************************************************/
        this.tcList = [tc];      // 생성한 tc 목록 할당, 꼭 TC 생성부 아래 선언해야함
        this.eventChkList = [];  // 이벤트 목록을 위한 배열

        /***********************************************************************
        * 03 : 이벤트 선언부
        ***********************************************************************/
        /***********************************************************************
        * 버튼 클릭으로 기능 실행
        ***********************************************************************/
        this.btn00_onclick = function(obj,e)
        {
        	this.ds00.insertRow(0);
        	return this.ds00.rowposition;
        };

        /***********************************************************************
        * 화면 로드 시 작업, gfnInit는 필수
        ***********************************************************************/
        this.A_Dataset_addColumn_QC_01_onload = function(obj,e)
        {
        	//필수 : 테스트 러너에 테스트 케이스 전달
        	 this.gfnInit(this.tcList, this);
        };

        /***********************************************************************
        * onrowposchanged
        ***********************************************************************/
        this.ds00_onrowposchanged = function(obj,e)
        {
        	this.eventChkList[this.eventChkList.length] = e.eventid;
        };

        /***********************************************************************
        * canrowposchange
        ***********************************************************************/
        this.ds00_canrowposchange = function(obj,e)
        {
        	this.eventChkList[this.eventChkList.length] = e.eventid;
        };

        /***********************************************************************
        * 03 : 사용자 정의 함수 선언부
        ***********************************************************************/


        this.btn01_onclick = function(obj,e)
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.A_Dataset_addColumn_QC_01_onload,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
        };

        this.loadIncludeScript("A_Dataset_insertRow_QA_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
