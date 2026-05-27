(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("crudSample");
            this.set_titletext("CRUD단일(버튼형)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_boardList", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "id","type" : "string","size" : "256"},{"id" : "employee_name","type" : "string","size" : "256"},{"id" : "employee_salary","type" : "string","size" : "256"},{"id" : "employee_age","type" : "string","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_boardPage", this);
            obj._setContents({});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cboPageSize", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "pageSize","type" : "STRING","size" : "256"}]},"Rows" : [{"pageSize" : "10"},{"pageSize" : "20"},{"pageSize" : "30"},{"pageSize" : "50"},{"pageSize" : "70"},{"pageSize" : "100"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_param", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "pageIndex","type" : "STRING","size" : "256"},{"id" : "pageSize","type" : "STRING","size" : "256"}]},"Rows" : [{"pageIndex" : "1","pageSize" : "10"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_add",null,"17","70","40","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"17","70","40","btn_add:10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","70",null,null,"20","65",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_boardList");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"id\"/><Cell col=\"1\" text=\"employee_name\"/><Cell col=\"2\" text=\"employee_salary\"/><Cell col=\"3\" text=\"employee_age\"/></Band><Band id=\"body\"><Cell text=\"bind:id\"/><Cell col=\"1\" text=\"bind:employee_name\"/><Cell col=\"2\" text=\"bind:employee_salary\"/><Cell col=\"3\" text=\"bind:employee_age\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_PageSize","20","17","150","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_codecolumn("pageSize");
            obj.set_datacolumn("pageSize");
            obj.set_innerdataset("ds_cboPageSize");
            obj.set_text("10");
            obj.set_value("10");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","30.78%",null,"511","48",null,"6",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_url("cmm::cmmPaging.xfdl");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_paging
            obj = new Layout("default","",0,0,this.div_paging.form,function(p){});
            this.div_paging.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cbo_PageSize","value","ds_param","pageSize");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmPaging.xfdl");
        };
        
        // User Script
        this.registerScript("crudSingleBtn.xfdl", function() {
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
        this.SVC_SEARCH = {
        	svcId : "search"
        	, url   : "GET::app01::user"
        	, inDs  : "ds_param"
        	, outDs : "ds_boardList=result ds_boardPage=pagination"
        }

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	//페이징 세팅
        	//nPage = "1"; 선택 페이지
        	//nPageSize = "10"; //그리드 노출 글수
        	//nPageTotal = "0"; //전체 글수
        	//vPageFunc = "fn_search"; //본화면 조회함수명
        	//this.div_paging.form.init(nPage, nPageSize, nPageTotal, vPageFunc)
        	this.div_paging.form.init(1, 10, 0, "fn_search");
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
        /**
        * @desc : 팝업 후 처리
        * @param {String} svcId : 서비스 ID
        * @param {String} strVal : 결과 값

        */
        this.fn_popupCallback =function(strId, strVal)
        {
        	if (this.gfn_isNull(strVal) ) return;

        	switch (strId)
        	{
        		case "createBoardContents" :
        			if(strVal)
        			{
        				alert("생성완료");
        				this.fn_search(1);
        			}
        			break;
        		case "boardDetail" :
        			if(strVal == "UPDATE")
        			{
        				alert("수정완료");
        				this.fn_search(1);
        			}
        			else if (strVal == "DELETE")
        			{
        				alert("삭제완료");
        				this.fn_search(1);
        			}
        			break;

        	}
        };

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
        		case "search" :
        			// Div Paging 처리
        			var nPageTotal = this.ds_boardPage.getColumn(0, 'totalDataCount');
        			this.div_paging.form.fn_resetPaging(this.cbo_PageSize.value, nPageTotal);//페이징 재설정

         			trace(this.ds_boardList.saveXML());
        			break;

        		default:
        	}
        }

         /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
        * @description 데이터 조회
        * @param {Number} pageNum 출력될 페이저 번호
        * @return N/A
        */
        this.fn_search = function(pageNum)
        {
        	this.ds_param.setColumn(0, 'pageIndex', pageNum);
        	this.gfn_dsRequest(this.SVC_SEARCH, true);
        };

         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/

        /**
        * @description 조회버튼 클릭 시 이벤트
        */
        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_search(1);
        };
        /**
        * @description 추가버튼 클릭 시 이벤트
        */
        this.btn_add_onclick = function(obj,e)
        {
        	var oArg = {pageType : 'BTN', TITLE:"추가"};
        	var oOption = {titlebar:"false", width:"1080",height:"720"};
        	this.gfn_openPopup("createBoardContents", "Base::rest-sample/crudPopupCreate.xfdl", oArg, "fn_popupCallback", oOption);

        };
        /**
        * @description 그리드 더블클릭 시 이벤트
        */
        this.grd_list_oncelldblclick = function(obj,e)
        {
        	var nRow = e.row;
        	var bbsId = obj.getBindDataset().getColumn(nRow, 'id');
        	var oArg = {
        		TITLE    :"수정",
        		pageType : 'BTN',
        		bbsId    : bbsId
        	};
        	var oOption = {titlebar:"false", width:"1080",height:"720"};
        	this.gfn_openPopup("boardDetail", "Base::rest-sample/crudPopupUpdate.xfdl", oArg, "fn_popupCallback", oOption);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.grd_list.addEventHandler("oncelldblclick",this.grd_list_oncelldblclick,this);
            this.cbo_PageSize.addEventHandler("onitemchanged",this.cbo_PageSize_onitemchanged,this);
        };
        this.loadIncludeScript("crudSingleBtn.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
