(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("A_Dataset_addColumn_QC_01");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("ds00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "Column1","size" : "256","type" : "STRING"}]},"Rows" : [{"Column1" : "2"},{}]});
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

            obj = new nexacro.Static("Static01","172","0","8","552",null,null,null,null,null,null,this);
            obj.set_background("darkcyan");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static03","0","76","440","8",null,null,null,null,null,null,this);
            obj.set_background("darkcyan");
            obj.set_taborder("4");
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
        this.addIncludeScript("A_Dataset_addColumn_QA_01.xfdl","lib::libCommon.xjs");
        this.registerScript("A_Dataset_addColumn_QA_01.xfdl", function(nexacro, system, trace, environment, application) {
        /***********************************************************************
        * 설명      : addColumn 테스트 시스템 고도화 팀원 교육용 샘플
        * 작성일    : 2018.08.23
        * 작성자    : 윤재식
        * 수정이력  :
        ***********************************************************************
        *     수정일     작성자   내용
        ***********************************************************************
        *     2018.08.23  윤재식   최초 작성
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
        	description: "Dataset_Method_addColumn Test",
            metadata : {
        			 objectId : "nexacro.Dataset",        // 객체 식별자 : typedef의 object id(개별)
        			 featureType: tapi.FT_METHOD,     		// object metainfo의 속성 종류
        			 elementName : "addColumn",        // 요소 이름 : [ object metainfo의 속성 이름 | undefined ]
        			 keyword : ["Dataset", "addColumn"]
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
        tc.validator ['tc_vc'] = {

            // 유효성 검사 설명
        	description: "addColumn",

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
        		return nexacro.test.checkEqual(this, resultValue, 2);
        	},

        	// 유효성 확인 후 해야 할일
        	teardown: function () {

        	}
        };

        /***********************************************************************
        * 02 : Form 변수 선언부
        ***********************************************************************/
        this.tcList = [tc]; // 생성한 tc 목록 할당, 꼭 TC 생성부 아래 선언해야함

        /***********************************************************************
        * 03 : 이벤트 선언부
        ***********************************************************************/
        /***********************************************************************
        * 버튼 클릭으로 기능 실행
        ***********************************************************************/
        this.btn00_onclick = function(obj,e)
        {
        	this.ds00.addColumn("test01","STRING", 255);

        	return this.ds00.getColCount();
        };

        /***********************************************************************
        * 화면 로드 시 작업, gfnInit는 필수
        ***********************************************************************/
        this.A_Dataset_addColumn_QC_01_onload = function(obj,e)
        {
        	//필수 : 테스트 러너에 테스트 케이스 전달
        	this.gfnInit(this.tcList, this);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.A_Dataset_addColumn_QC_01_onload,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
        };

        this.loadIncludeScript("A_Dataset_addColumn_QA_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
