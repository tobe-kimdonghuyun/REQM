(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("RestAPI_boiler_popup");
            this.set_titletext("수정팝업");
            this.set_cssclass("frm_POP");
            if (Form == this.constructor)
            {
                this._setFormPosition(1040,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_boardDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"string\" size=\"256\"/><Column id=\"employee_name\" type=\"string\" size=\"256\"/><Column id=\"employee_salary\" type=\"string\" size=\"256\"/><Column id=\"employee_age\" type=\"string\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_update","20","65","70","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("수정");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete","105","65","70","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_id","150","125",null,"40","30",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_employeeAge","150","275",null,"40","30",null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("sta_bbsTitl","26","275","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("employee_age");
            this.addChild(obj.name, obj);

            obj = new Static("sta_id","26","125","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("id");
            this.addChild(obj.name, obj);

            obj = new Static("sta_updtUserId","26","175","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("employee_name");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_employeeName","150","175",null,"40","30",null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_employeeSalary","150","225",null,"40","30",null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Static("sta_bbsId","26","225","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("employee_salary");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","30","20","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_POP_Title");
            this.addChild(obj.name, obj);

            obj = new Button("Button03",null,"15","30","30","15",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("btn_POP_Close");
            obj.set_text("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1040,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_employeeName","value","ds_boardDetail","employee_name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_employeeSalary","value","ds_boardDetail","employee_salary");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edt_employeeAge","value","ds_boardDetail","employee_age");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edt_id","value","ds_boardDetail","id");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("crudPopupUpdate.xfdl", function() {
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
        gfn_dsFetch Arguments
        	url   	 - [필수] method::그룹::uri
        	inDs  	 - [옵션] dataset  입력 ([key=]inDS:{sType||rownum}) (GET 메소드 사용시 queryString으로 변환)
        	outDs 	 - [옵션] dataset  출력 (outDS=key)
        	args  	 - [옵션] argument 입력 (key=val)
        */
        this.SVC_SEARCH_DETAIL = {
        	url : "GET::app01::user/"
        	, outDs : "ds_boardDetail=result"
        }
        this.SVC_UPDATE = {
        	url : "PUT::app01::user/"
        	, inDs : "ds_boardDetail:0"
        }
        this.SVC_DELETE = {
        	url : "DELETE::app01::user/"
        }

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.RestAPI_boiler_popup_onload = async function(obj,e)
        {
        	this.bbsId = this.parent.bbsId;
        	this.sta_title.set_text(this.parent.TITLE);

        	// 데이터 조회 통신
        	this.SVC_SEARCH_DETAIL.url = this.SVC_SEARCH_DETAIL.url + this.bbsId	// path variable
        	// 프로미스 RestAPI 통신
        	try {
        		let {strSvcId, nErrorCode, objResolveData, elapsedTime} = await this.gfn_dsFetch(this.SVC_SEARCH_DETAIL);
        		//trace(this.ds_boardDetail.saveXML())
        	} catch (err) {
        		console.error(err);
        	}
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
         /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
        * @description 데이터 수정버튼 클릭 시 이벤트
        */
        this.btn_update_onclick = async function(obj,e)
        {
        	// 데이터 수정 통신
        	this.SVC_UPDATE.url = this.SVC_UPDATE.url + this.bbsId	// path variable
        	// 프로미스 RestAPI 통신
        	try {
        		let {strSvcId, nErrorCode, objResolveData, elapsedTime} = await this.gfn_dsFetch(this.SVC_UPDATE, true);
        		this.close("UPDATE");
        	} catch (err) {
        		console.error(err);
        	}
        };

        /**
        * @description 데이터 삭제버튼 클릭 시 이벤트
        */
        this.btn_delete_onclick = async function(obj,e)
        {
        	// 데이터 삭제 통신
        	this.SVC_DELETE.url = this.SVC_DELETE.url + this.bbsId	// path variable
        	// 프로미스 RestAPI 통신
        	try {
        		let {strSvcId, nErrorCode, objResolveData, elapsedTime} = await this.gfn_dsFetch(this.SVC_DELETE);
        		this.close("DELETE");
        	} catch (err) {
        		console.error(err);
        	}
        };

        /**
        * @description x 버튼 클릭 시 이벤트
        */
        this.Button03_onclick = function(obj,e)
        {
        	this.close();
        };



        this.sta_regUserId_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.RestAPI_boiler_popup_onload,this);
            this.btn_update.addEventHandler("onclick",this.btn_update_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.sta_id.addEventHandler("onclick",this.sta_regUserId_onclick,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
        };
        this.loadIncludeScript("crudPopupUpdate.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
