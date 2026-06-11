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
            this.set_titletext("CRUD멀티");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_boardList", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "id","type" : "string","size" : "256"},{"id" : "employee_name","type" : "string","size" : "256"},{"id" : "employee_salary","type" : "string","size" : "256"},{"id" : "employee_age","type" : "string","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_boardPage", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "totalDataCount","type" : "string","size" : "256"},{"id" : "totalPageCount","type" : "string","size" : "256"},{"id" : "pageIndex","type" : "string","size" : "256"},{"id" : "pageSize","type" : "string","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cboPageSize", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "pageSize","type" : "STRING","size" : "256"}]},"Rows" : [{"pageSize" : "10"},{"pageSize" : "20"},{"pageSize" : "30"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_param", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "pageIndex","type" : "STRING","size" : "256"},{"id" : "pageSize","type" : "STRING","size" : "256"}]},"Rows" : [{"pageIndex" : "1","pageSize" : "10"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_save_rowtype","915","14","160","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("멀티로우 저장(_rowtype)");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete","835","14","70","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add","745","17","70","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","650","20","70","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_PageSize","5","16","150","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_codecolumn("pageSize");
            obj.set_datacolumn("pageSize");
            obj.set_innerdataset("ds_cboPageSize");
            obj.set_text("10");
            obj.set_value("10");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","30.70%",null,"511","48",null,"6",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_url("cmm::cmmPaging.xfdl");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","160","15","150","42",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Combo00_innerdataset = new nexacro.NormalDataset("Combo00_innerdataset", obj);
            Combo00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"datacolumn" : "success","codecolumn" : "0"},{"codecolumn" : "1","datacolumn" : "bad_request"},{"codecolumn" : "2","datacolumn" : "unauthorized"},{"codecolumn" : "3","datacolumn" : "forbidden"},{"codecolumn" : "4","datacolumn" : "not_found"},{"codecolumn" : "5","datacolumn" : "validation"},{"codecolumn" : "6","datacolumn" : "server_error"},{"codecolumn" : "7","datacolumn" : "service_unavailable"}]});
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_text("success");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","320","14","80","43",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("jsp");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","409","12","81","49",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("api/error.json");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","495","13","135","49",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("첨부파일jsp");
            this.addChild(obj.name, obj);

            obj = new ListBox("ListBox00","17","71","523","405",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_paging
            obj = new Layout("default","",0,0,this.div_paging.form,function(p){});
            this.div_paging.form.addLayout(obj.name, obj);

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
            this._addPreloadList("fdl","cmm::cmmPaging.xfdl");
        };
        
        // User Script
        this.registerScript("crudMulti.xfdl", function() {
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
        	, url   : "GET::app03::/KHJ/RP_105454_data_sample_dataobject_01.jsp"
        	//, url   : "GET::app01::/service_jsp/RP_105454_data_sample_dataobject_500.jsp"
        	, inDs  : "ds_param"
        	, outDs : "ds_boardList=result ds_boardPage=pagination"
        }
        this.SVC_SAVE = {
        	svcId : "save"
        	, url   : "PUT::app01::user/save"
        	, inDs  : "ds_boardList:U"
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

        		case "save":
        			alert('저장완료!');
        			this.fn_search(1);
        			break;

        		default:
        	}
        }

         /*
         *	xeni Excel Import 후처리
         * @param {String} strSvcId       : 서비스 ID
         */
        this.fn_importCallback = function(strImportId)
        {
        	switch(strImportId) {
        	case "import":
        		alert(strImportId + " 성공!");
        		break;
        	default:
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
        this.fn_search = function (pageNum)
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
        	var nRow = this.ds_boardList.insertRow(0);
        	this.ds_boardList.set_rowposition(nRow);
        	this.grd_list.setCellPos(5);
        	this.grd_list.showEditor(true);
        };

        /**
        * @description 삭제버튼 클릭 시 이벤트
        */
        this.btn_delete_onclick = function(obj,e)
        {
        	var nRow = this.ds_boardList.rowposition;
        	this.ds_boardList.deleteRow(nRow);
        };

        /**
        * @description 저장버튼 클릭 시 이벤트
        */
        this.btn_save_rowtype_onclick = function(obj,e)
        {
        	this.gfn_dsRequest(this.SVC_SAVE, true);	// multirow 저장 통신
        };
        this.Button00_onclick = function(obj,e)
        {
        	this.SVC_LOCAL1 = {
        		svcId : "search"
        		, url   : "GET::app04::/api/json_api.jsp?scenario="+this.Combo00.text
        		, inDs  : "ds_param"
        		, outDs : "ds_boardList=result ds_boardPage=pagination"
        	}
        	this.gfn_dsRequest(this.SVC_LOCAL1, true);
        };

        this.Button01_onclick = function(obj,e)
        {
        	//error.json
        	this.SVC_LOCAL2 = {
        		svcId : "search"
        		, url   : "GET::app04::/api/error.json"
        		, inDs  : "ds_param"
        		, outDs : "ds_boardList=result ds_boardPage=pagination"
        	}
        	this.gfn_dsRequest(this.SVC_LOCAL2, true);
        };

        this.Button02_onclick = function(obj,e)
        {
        	this.SVC_LOCAL3 = {
        		svcId : "search"
        		, url   : "GET::app04::/api/RP_105454_data_sample_dataobject_01.jsp"
        		, inDs  : "ds_param"
        		, outDs : "ds_boardList=result ds_boardPage=pagination"
        	}
        	this.gfn_dsRequest(this.SVC_LOCAL3, true);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_save_rowtype.addEventHandler("onclick",this.btn_save_rowtype_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.cbo_PageSize.addEventHandler("onitemchanged",this.cbo_pageSize_onitemchanged,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
        };
        this.loadIncludeScript("crudMulti.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
