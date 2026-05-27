(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("CRUD단일(스크롤)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_boardList", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "id","type" : "string","size" : "256"},{"id" : "employee_name","type" : "string","size" : "256"},{"id" : "employee_salary","type" : "string","size" : "256"},{"id" : "employee_age","type" : "string","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_boardListClient", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "id","type" : "string","size" : "256"},{"id" : "employee_name","type" : "string","size" : "256"},{"id" : "employee_salary","type" : "string","size" : "256"},{"id" : "employee_age","type" : "string","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_boardPage", this);
            obj._setContents({});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmbPageSize", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "pageSize","type" : "STRING","size" : "256"}]},"Rows" : [{"pageSize" : "3"},{"pageSize" : "10"},{"pageSize" : "20"},{"pageSize" : "30"}]});
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

            obj = new Grid("grdList","20","70",null,null,"20","20",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_boardListClient");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"80\"/></Rows><Band id=\"head\"><Cell text=\"id\"/><Cell col=\"1\" text=\"employee_name\"/><Cell col=\"2\" text=\"employee_salary\"/><Cell col=\"3\" text=\"employee_age\"/></Band><Band id=\"body\"><Cell text=\"bind:id\"/><Cell col=\"1\" text=\"bind:employee_name\"/><Cell col=\"2\" text=\"bind:employee_salary\"/><Cell col=\"3\" text=\"bind:employee_age\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_PageSize","20","17","150","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_codecolumn("pageSize");
            obj.set_datacolumn("pageSize");
            obj.set_innerdataset("ds_cmbPageSize");
            obj.set_text("10");
            obj.set_value("10");
            obj.set_index("1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","cbo_PageSize","value","ds_param","pageSize");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("crudSingleScroll.xfdl", function() {
        /**
        *  컨설팅 표준화 작업
        *  @MenuPath        sample > CRUD단일(스크롤)
        *  @FileName 		crudSingleScroll.xfdl
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
        this.SVC_SEARCH = {
        	url   : "GET::app01::user"
        	, inDs  : "ds_param"
        	, outDs : "ds_boardList=result ds_boardPage=pagination"
        }

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.Form_Work_onload = function(obj,e)
        {
        	// 스크롤페이징 세팅
        	// this			 => 본화면 form
        	// this.grid	 => 스크롤이벤트가 일어날 그리드
        	// this.dsClient => 그리드에 바인딩한 Dataset
        	// this.dsServer => 서버에서 데이터를 받아올 Dataset
        	// "fn_search"   => 본화면 조회함수명
        	this.scrollPage01 = new ScrollPage(this, this.grdList, this.ds_boardListClient, this.ds_boardList, "fn_search");
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
        				this.scrollPage01.gfn_retrieve(true); // 스크롤 페이징 (첫페이지 여부)
        			}
        			break;
        		case "boardDetail" :
        			if(strVal == "UPDATE")
        			{
        				alert("수정완료");
        				this.scrollPage01.gfn_retrieve(true); // 스크롤 페이징 (첫페이지 여부)
        			}
        			else if (strVal == "DELETE")
        			{
        				alert("삭제완료");
        				this.scrollPage01.gfn_retrieve(true); // 스크롤 페이징 (첫페이지 여부)
        			}
        			break;

        	}
        };

         /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
        * @description 데이터 조회
        * @param {Number} pageNum 출력될 페이저 번호
        * @return N/A
        */
        this.fn_search = async function (pageNum)
        {
        	this.ds_param.setColumn(0, 'pageIndex', pageNum);
        	// 프로미스 RestAPI 통신
        	try {
        		let {strSvcId, nErrorCode, objResolveData, elapsedTime} = await this.gfn_dsFetch(this.SVC_SEARCH);
        		// 스크롤 페이징 재설정
        		this.scrollPage01.gfn_resetPaging(this.ds_boardPage.getColumn(0, 'totalDataCount'));
        		//trace(this.ds_boardList.saveXML());
        	} catch (err) {
        		console.error(err);
        	}
        };

         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
        * @description 조회버튼 클릭 시 이벤트
        */
        this.btn_search_onclick = function(obj,e)
        {
        	// 스크롤 페이징 (첫페이지 여부)
        	this.scrollPage01.gfn_retrieve(true);
        };

        /**
        * @description 추가버튼 클릭 시 이벤트
        */
        this.btn_add_onclick = function(obj,e)
        {
        	var oArg = {pageType : 'BTN', TITLE:"추가"};
        	var oOption = {titlebar:"false", width:"1080",height:"720"};
        	this.gfn_openPopup("createBoardContents", "Base::rest-sample-promise/crudPopupCreate.xfdl", oArg, "fn_popupCallback", oOption);

        };

        /**
        * @description 그리드 더블클릭 시 이벤트
        */
        this.grd_list_oncelldblclick = function(obj,e)
        {
        	var nRow = e.row;
        	var bbsId = obj.getBindDataset().getColumn(nRow, 'id');
        	console.log(nRow, bbsId)
        	var oArg = {
        		TITLE    :"수정",
        		bbsId    : bbsId
        	};
        	var oOption = {titlebar:"false", width:"1080",height:"720"};
        	this.gfn_openPopup("boardDetail", "Base::rest-sample-promise/crudPopupUpdate.xfdl", oArg, "fn_popupCallback", oOption);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Work_onload,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.grdList.addEventHandler("oncelldblclick",this.grd_list_oncelldblclick,this);
            this.cbo_PageSize.addEventHandler("onitemchanged",this.cmbPageSize_onitemchanged,this);
        };
        this.loadIncludeScript("crudSingleScroll.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
