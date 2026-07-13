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
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "Col_BIGDECIMAL1","size" : "256","type" : "BIGDECIMAL"},{"id" : "Col_BIGDECIMAL2","size" : "256","type" : "BIGDECIMAL"}]},"Rows" : [{"Col_BIGDECIMAL2" : "0.65000","Col_BIGDECIMAL1" : "123.456"}]});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("ds01", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "Col_BIGDECIMAL1","size" : "256","type" : "BIGDECIMAL"},{"id" : "Col_BIGDECIMAL2","size" : "256","type" : "BIGDECIMAL"}]},"Rows" : [{"Col_BIGDECIMAL2" : "0.65000","Col_BIGDECIMAL1" : "123.456"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Static("Static00","0","0","990","8",null,null,null,null,null,null,this);
            obj.set_background("darkcyan");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static02","0","0","8","552",null,null,null,null,null,null,this);
            obj.set_background("darkcyan");
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static03","0","124","990","8",null,null,null,null,null,null,this);
            obj.set_background("darkcyan");
            obj.set_taborder("3");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static01","251","-2","8","552",null,null,null,null,null,null,this);
            obj.set_background("darkcyan");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("grd00","10","10","239","72",null,null,null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_binddataset("ds00");
            obj.set_taborder("5");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"115\"/><Column size=\"120\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"36\"/></Rows><Band id=\"head\"><Cell text=\"Col_BIGDECIMAL1\"/><Cell col=\"1\" text=\"Col_BIGDECIMAL2\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:Col_BIGDECIMAL1\"/><Cell col=\"1\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"#,##0.#####\" text=\"bind:Col_BIGDECIMAL2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt03","9","90","113","33",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt04","126","90","119","33",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00","262","89","39","34",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("test");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static04","3","82","990","8",null,null,null,null,null,null,this);
            obj.set_background("darkcyan");
            obj.set_taborder("8");
            obj.set_text("");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new nexacro.BindItem("item3","edt03","value","ds00","Col_BIGDECIMAL1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item4","edt04","value","ds00","Col_BIGDECIMAL2");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("A_Dataset_setRowType_QA_02.xfdl","lib::libCommon.xjs");
        this.addIncludeScript("A_Dataset_setRowType_QA_02.xfdl","libevent::event.util.xjs");
        this.registerScript("A_Dataset_setRowType_QA_02.xfdl", function(nexacro, system, trace, environment, application) {
        /***********************************************************************
        * 설명      : RP.83771 관련
        * 작성일    : 2019.02.08
        * 작성자    : 윤재식
        * 수정이력  :
        ***********************************************************************
        *     수정일     작성자   내용
        ***********************************************************************
        *    2019.02.08   윤재식   최초 작성
        ***********************************************************************
        */

        this.executeIncludeScript("lib::libCommon.xjs"); /*include "lib::libCommon.xjs"*/;
        this.executeIncludeScript("libevent::event.util.xjs"); /*include "libevent::event.util.xjs"*/
        var tapi = this.gfnGetTestAPI();
        /***********************************************************************
        * 01 : Test Case, validator 선언부
        ***********************************************************************/
        /***********************************************************************
        * Test Case 생성
        ***********************************************************************/
        var tc  = {
            // tc 설명
        	description: "Dataset_Method_setRowType Test",
            metadata : {
        			 objectId : "nexacro.Dataset",        // 객체 식별자 : typedef의 object id(개별)
        			 featureType: tapi.FT_METHOD,     		// object metainfo의 속성 종류
        			 elementName : "setRowType",        // 요소 이름 : [ object metainfo의 속성 이름 | undefined ]
        			 keyword : ["Dataset", "setRowType"]
            },
        	//  테스트케이스 시작 전 해야할 일
        	initialize: function(){
        	},

        	// validator 구조체(객체 안의 객체)
        	validator : {
        	},

        	// 테스트케이스 종료 후 해야할 일
        	finalize : function()
        	{

        	}
        };

        /***********************************************************************
        * Test Case 유효성 검사1
        ***********************************************************************/
        // tc객체의 validator객체에 임의의 key(tc_vc1)를 생성하고 거기에 객체를 넣는 구조
        tc.validator ['tc_vc1'] = {
            // 유효성 검사 설명
        	description: "getRowType",

        	// 수행전 준비에 해야할 일
        	prepare: function (){
        		var runner = this.gfnGetRunner();
        		runner.setAsync(false);
        		this.grd00.setFocus();
        	},

        	// 실행
        	run: function () {
        		var runner = this.gfnGetRunner();
        		runner.setAsync(false);
        		this.grd00.showEditor();
        		this.sleep(1000);

        		// 마우스 클릭 & Tab 으로 편집 상태로 변경 및 이동
        		for(var i=0; i<2; i++)
        		{
        		    var elem = this.grd00._bodyBand._matrix._rows[0]._cells[i];

        			// 마우스 클릭
        			nexacro.test.Event.nx_common_click(elem, 'lbutton', false, false, false, 2, 2);
        			this.sleep(1000);
        			// Tab키
        			nexacro.test.Event.key_downup(elem, 'Tab', 0, false, false, false,  2, 2);
        		}


        		// 클릭할 컴포넌트
        		var arrComp=[this.edt03,this.edt04];

        		// 값변경 및 원래값으로 복원
        		for(var i=0; i<arrComp.length; i++)
        		{
        			var elem_com = eval(arrComp[i]);

        			elem_com.setFocus();
        			var elem = elem_com._input_element;
        			elem_com.setSelect();

        			// 입력 & 완성
        			this.sleep(1000);
        			nexacro.test.Event.sendKeys(elem, ['0.01']); // test 입력
        			nexacro.test.Event.key_downup(elem, 'Enter', 0, false, false, false,  2, 2);

        			// 원래 값으로 다시 입력
        			this.ds00.setColumn(0, i, this.ds01.getColumn(0,i));
        		}

        		this.btn00.setFocus();
        	},

        	// 기대값 검사
        	check: function  (resultValue) {
        		var rtn = this.ds00.getRowType(0) ;
        		return nexacro.test.checkEqual(this, rtn, 1);
        	},

        	// 유효성 확인 후 해야 할일
        	teardown: function () {
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
        * 화면 로드 시 작업, gfnInit는 필수
        ***********************************************************************/
        this.A_Dataset_addColumn_QC_01_onload = function(obj,e)
        {
        	//필수 : 테스트 러너에 테스트 케이스 전달
        	 this.gfnInit(this.tcList, this);
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
        	var runner = this.gfnGetRunner();
        	runner.setAsync(true);
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
            this.ds01.addEventHandler("canrowposchange",this.ds00_canrowposchange,this);
        };

        this.loadIncludeScript("A_Dataset_setRowType_QA_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
