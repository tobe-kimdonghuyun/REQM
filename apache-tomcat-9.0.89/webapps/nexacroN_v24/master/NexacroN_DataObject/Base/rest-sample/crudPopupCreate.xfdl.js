(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("seegeneRestAPI_boiler_popup");
            this.set_titletext("추가팝업");
            this.set_cssclass("frm_POP");
            if (Form == this.constructor)
            {
                this._setFormPosition(1040,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_boardCreate", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "id","type" : "string","size" : "256"},{"id" : "employee_name","type" : "string","size" : "256"},{"id" : "employee_salary","type" : "string","size" : "256"},{"id" : "employee_age","type" : "string","size" : "256"}]},"Rows" : [{}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_create","26","65","70","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("생성");
            this.addChild(obj.name, obj);

            obj = new Button("Button03",null,"15","30","30","15",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_POP_Close");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","30","20","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_POP_Title");
            this.addChild(obj.name, obj);

            obj = new Static("sta_updtUserId","26","130","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("employee_name");
            this.addChild(obj.name, obj);

            obj = new Static("sta_bbsId","26","180","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("employee_salary");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_employeeAge","150","230",null,"40","30",null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_employeeSalary","150","180",null,"40","30",null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_employeeName","150","130",null,"40","30",null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Static("sta_bbsTitl","26","230","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("employee_age");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1040,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_employeeName","value","ds_boardCreate","employee_name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_employeeSalary","value","ds_boardCreate","employee_salary");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_employeeAge","value","ds_boardCreate","employee_age");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("crudPopupCreate.xfdl", function() {
        /**
        *  컨설팅 표준화 작업
        *  @MenuPath        sample > CRUD단일
        *  @FileName 		crudSample.xfdl
        *  @Creator 		consulting
        *  @CreateDate 		2022.11.17
        *  @Desction        CRUD단일 셈플
        ************** 소스 수정 이력 ***************************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2022.11.17     		consulting 	           최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        /*
        dsRequest Arguments
        	svcId 	 - [필수] 통신을 구분하기위한 고유ID
        	url   	 - [필수] method::그룹::uri
        	inDs  	 - [옵션] dataset  입력 ([key=]inDS:{sType||rownum}) (GET 메소드 사용시 queryString으로 변환)
        	outDs 	 - [옵션] dataset  출력 (outDS=key)
        	args  	 - [옵션] argument 입력 (key=val)
        	callback - [옵션] 콜백함수 (기본 fn_apiCallback)
        */
        this.SVC_SAVE = {
        	svcId : "create"
        	, url   : "POST::app01::user"
        	, inDs  : "ds_boardCreate:0"
        }
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.seegeneRestAPI_boiler_popup_onload = function(obj,e)
        {
        	this.pageType = this.parent.pageType;
        	this.sta_title.set_text(this.parent.TITLE);
        };

        /***********************************************************************************
        /* Common Library
        /***********************************************************************************/
        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/
        /************************************************************************************************
         * CALLBACK 콜백 처리부분
         ************************************************************************************************/
          /*
         *	트랜잭션 후처리
         * @param {String} strSvcId       : 서비스 ID
         * @param {Number} nErrorCode     : 결과 값 (0:성공 -1:실패)
         * @param {Object} objResolveData : response data
         */
        this.fn_apiCallback = function(strSvcId, nErrorCode, objResolveData) {
        	if (nErrorCode < 0)	// 통신에러
        		return;

        	trace(JSON.stringify(objResolveData, null, 4));
        	// service id 에 따라 callback 분기처리
        	switch(strSvcId) {
        		case "create" :
        			this.close(true);
        			break;
        		default:
        	}
        }

         /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
        * @description 생성버튼 클릭 시 이벤트
        */
        this.btn_create_onclick = function(obj,e)
        {
        	// 데이터 생성 통신
        	this.gfn_dsRequest(this.SVC_SAVE, true);
        };

        /**
        * @description x 버튼 클릭 시 이벤트
        */
        this.Button03_onclick = function(obj,e)
        {
        	this.close();
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.seegeneRestAPI_boiler_popup_onload,this);
            this.btn_create.addEventHandler("onclick",this.btn_create_onclick,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
        };
        this.loadIncludeScript("crudPopupCreate.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
