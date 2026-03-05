(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("bbrssMngme");
            this.set_titletext("게시판관리");
            this.getSetter("classname").set("Work");
            this.getSetter("inheritanceid").set("");
            if (Form == this.constructor)
            {
                this._setFormPosition(1240,818);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"rn\" type=\"STRING\" size=\"256\"/><Column id=\"bbsId\" type=\"STRING\" size=\"256\"/><Column id=\"taskTpcd\" type=\"STRING\" size=\"256\"/><Column id=\"bbsTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"bbsNm\" type=\"STRING\" size=\"256\"/><Column id=\"pstOtptCnt\" type=\"STRING\" size=\"256\"/><Column id=\"ansUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"ntcSkillFg\" type=\"STRING\" size=\"256\"/><Column id=\"ntcSntnPrmsoCnt\" type=\"STRING\" size=\"256\"/><Column id=\"atchFileUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"atchPsbltyFileNo\" type=\"STRING\" size=\"256\"/><Column id=\"atchPsbltyFileSz\" type=\"STRING\" size=\"256\"/><Column id=\"atchFileExtnLmtYn\" type=\"STRING\" size=\"256\"/><Column id=\"atchFileExtnNm\" type=\"STRING\" size=\"256\"/><Column id=\"atchFileStrgPath\" type=\"STRING\" size=\"256\"/><Column id=\"dwnldYn\" type=\"STRING\" size=\"256\"/><Column id=\"edtrUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"bfrSntnNextSntnUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"srchCndtnOtptArtclCn\" type=\"STRING\" size=\"256\"/><Column id=\"newSntnIndctDcnt\" type=\"STRING\" size=\"256\"/><Column id=\"ctgryUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"bbsUpendCn\" type=\"STRING\" size=\"256\"/><Column id=\"bbsLwprtCn\" type=\"STRING\" size=\"256\"/><Column id=\"regSntnCnt\" type=\"STRING\" size=\"256\"/><Column id=\"bbsIntrdCn\" type=\"STRING\" size=\"256\"/><Column id=\"secrtSntnSkillUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"mainUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"frstRgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastMdfrId\" type=\"STRING\" size=\"256\"/><Column id=\"lastMdfcnDt\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPaging", this);
            obj._setContents("<ColumnInfo><Column id=\"currentPageNo\" type=\"STRING\" size=\"256\"/><Column id=\"recordCountPerPage\" type=\"STRING\" size=\"256\"/><Column id=\"pageSize\" type=\"STRING\" size=\"256\"/><Column id=\"totalRecordCount\" type=\"STRING\" size=\"256\"/><Column id=\"totalPageCount\" type=\"STRING\" size=\"256\"/><Column id=\"firstPageNoOnPageList\" type=\"STRING\" size=\"256\"/><Column id=\"lastPageNoOnPageList\" type=\"STRING\" size=\"256\"/><Column id=\"firstRecordIndex\" type=\"STRING\" size=\"256\"/><Column id=\"lastRecordIndex\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"bbsTypeCd\" type=\"STRING\" size=\"100\"/><Column id=\"pageIndex\" type=\"STRING\" size=\"100\"/><Column id=\"pageUnit\" type=\"STRING\" size=\"256\"/><Column id=\"pageSize\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"bbsTypeCd\"/><Col id=\"pageIndex\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCodeList", this);
            obj._setContents("<ColumnInfo><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"defaultData\" type=\"STRING\" size=\"256\"/><Column id=\"rds\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cdId\">BBS_TYPE_CD</Col><Col id=\"useYn\">Y</Col><Col id=\"defaultData\">전체</Col><Col id=\"rds\">dsBbsTypeCd</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBbsTypeCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">01</Col><Col id=\"data\">첨부파일게시판</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"data\">펼침게시판</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"data\">답변형게시판</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTitle00","0","0","164","32",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","staTitle00:12",null,"101","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SA");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel_00","20","10","110","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("게시판유형");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("bbsTypeCd","staLabel_00:0","10","20%","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_bbsTypeCd_innerdataset = new nexacro.NormalDataset("divSearch_form_bbsTypeCd_innerdataset", obj);
            divSearch_form_bbsTypeCd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">첨부파일게시판</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">펼침게시판</Col></Row><Row><Col id=\"codecolumn\">03</Col><Col id=\"datacolumn\">답변형게시판</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_bbsTypeCd_innerdataset);
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staBg_bottom","0",null,null,"53","0","0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_SA_comBG");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,null,"88","32","20","10",null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("검색");
            obj.set_cssclass("btn_SA_search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle01","0","divSearch:24","164","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("목록");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","0","staTitle01:12",null,"386","0",null,null,null,null,null,this);
            obj.set_initvalueid("iv_Grid0");
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"65\"/><Column size=\"65\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"게시판유형\"/><Cell col=\"2\" text=\"게시판명\"/><Cell col=\"3\" text=\"최초생성일\"/><Cell col=\"4\" text=\"최종수정일\"/><Cell col=\"5\" text=\"사용여부\"/><Cell col=\"6\" text=\"게시글수\"/></Band><Band id=\"body\"><Cell text=\"bind:rn\"/><Cell col=\"1\" text=\"bind:bbsTypeCd\" edittype=\"none\" displaytype=\"combotext\" combodataset=\"dsBbsTypeCd\" combodatacol=\"data\" combocodecol=\"code\"/><Cell col=\"2\" text=\"bind:bbsNm\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:frstRegDt\" displaytype=\"text\"/><Cell col=\"4\" text=\"bind:lastMdfcnDt\" displaytype=\"text\"/><Cell col=\"5\" text=\"bind:useYn\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"none\" text=\"bind:pstOtptCnt\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divPaging","0","grdList:20",null,"28","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_url("common::cmmPaging.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divCmmBtn","0","divPaging:20",null,"32","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Button("btn_02_00",null,"0","78","32","0",null,null,null,null,null,this.divCmmBtn.form);
            obj.set_taborder("0");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_common01");
            this.divCmmBtn.addChild(obj.name, obj);

            obj = new Static("Static_help","85","169","370","32",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("행을 더블클릭 하면 상세내용 화면이 호출됩니다.");
            obj.set_cssclass("sta_help_linebox_green");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPaging
            obj = new Layout("default","",0,0,this.divPaging.form,function(p){});
            this.divPaging.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCmmBtn.form
            obj = new Layout("default","",0,0,this.divCmmBtn.form,function(p){});
            this.divCmmBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.bbsTypeCd","value","dsSearch","bbsTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::cmmPaging.xfdl");
        };
        
        // User Script
        this.registerScript("bbsMngList.xfdl", function() {
        /**
        *  게시판관리 목록
        *  @MenuPath    시스템관리 > 게시판관리 > 게시판관리 목록
        *  @FileName 	bbrssMngmeList
        *  @Creator 	jjl
        *  @CreateDate 	2023.10.18
        *  @Desction         스크립트 표준 및 주석 표준 정의
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2023.10.18     		jjl 	           		최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/

        /***********************************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        /***********************************************************************************************/
        /**
         * @description 화면 onload시 처리내역(필수)
        */
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);
        	this.dsSearch.setColumn(0,'bbsTypeCd',null);
        	this.btnSearch_onclick();
        };

        /**
         * @description 화면 닫힐때 변경사항 체크(입력 화면에서 변경되는 Dataset 체크 필요, 선택)
         * @return {boolean} false(화면 닫음) / true(화면 닫지 않음)
        */
        this.fnClose = function()
        {
        	if (this.gfnDsIsUpdated(this.dsList)) {
        		return true;
        	}
        	return false;
        };


        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/
        /**
         * @description Transaction CallBack 함수(선택)
        */
        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0)
        	{
        		return;
        	}

        	switch(svcID)
        	{
        		case "search":
        			//trace(this.dsList.saveXML());
        			this.divPaging.form.fnCreatePage(this.grdList, "setPageAfter", this.dsPaging.getColumn(0, 'currentPageNo'), 0, this.dsPaging.getColumn(0, 'totalRecordCount'));
        			//this.dsSearch.setColumn(0, "pageIndex"  , 1);
        			break;
        	}
        };

        /************************************************************************************************
        * CRUD 및 TRANSACTION 서비스 호출 처리
        ************************************************************************************************/
        /**
         * @description 조회
        */
        this.fnSearch = function (pageIndex)
        {
        	// 조회조건 설정
        	this.dsSearch.setColumn(0, "bbsTypeCd", this.divSearch.form.bbsTypeCd.value);

        	// 페이징 설정
        	this.dsSearch.setColumn(0, "paging", "Y") ;
        	this.dsSearch.setColumn(0, "pageIndex", pageIndex );
        	this.dsSearch.setColumn(0, "pageUnit", this.divPaging.form.cboCnt.value);
        	// 페이징 갯수 설정시 추가 default 10
        	//this.dsSearch.setColumn(0, "pageSize", 10);

        	var strSvcId    = "search";
        	var strSvcUrl   = "/cmmnn/sysMng/bbsMng/readBbsMngList.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsList=dsList dsPaging=paginationInfo";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc, 	// transaction의 결과를 받을 Function 이름
        						isAsync, 		// 비동기통신 여부 [생략가능]
        						3);				// nDataType :: 3(JSON)
        };

        this.setPageAfter = function (nPage)
        {
        	this.fnSearch(nPage);
        }

        /**
         * @description 입력
        */
        this.fnReg = function()
        {
        		var sTitle = "게시판관리 등록";
        		var oArg   = {};
        		var oOption = {
        			popuptype:"modal"	//modal,modaless
        			,autosize:true
        			,title:sTitle
        			,resize:true
        			,titlebar:true
        		};

        		this.gfnOpenPopup("bbsMngDtl","business::sysMng/bbsMng/bbsMngReg.xfdl", oArg, "fnPopupCallback", oOption);

        };

        this.fnPopupCallback = function(strId, strVal)
        {
        	if ('bbsMngDtl' == strId){
        	this.btnSearch_onclick();
        	};

        }
        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/


        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.grdList_oncelldblclick = function(obj,e)
        {

        	var sTitle = "게시판관리 수정";
        	var oArg   = {bbsId : this.dsList.getColumn(this.dsList.rowposition, "bbsId")};
        	var oOption = {
        		popuptype:"modal"	//modal,modaless
        		,autosize:true
        		,title:sTitle
        		,resize:true
        		,titlebar:true
        	};

        	this.gfnOpenPopup("bbsMngDtl","business::sysMng/bbsMng/bbsMngDtl.xfdl", oArg, "fnPopupCallback", oOption);
        };

        this.grdList_oncellclick = function(obj,e)
        {
        	if (e.row != null)
        	{
        		if (e.cell == "6")
        		{
        			var sTitle = this.dsList.getColumn(e.row, 'bbrssNm');

        			var oOption = {
        				popuptype:"modal"	//modal,modaless
        				,autosize:true
        				,title:sTitle
        				,resize:true
        				,titlebar:true
        			};

        			this.gfnOpenPopup(this.dsList.getColumn(e.row, "bbrssId"),this.dsList.getColumn(e.row, "bbrssCrse"), {'bbrssId':  this.dsList.getColumn(e.row, "bbrssId")}, "fnPopupCallback", oOption);
        		}
        	}
        };


        this.btnSearch_onclick = function(obj,e)
        {
        	this.fnSearch(1);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.staTitle00.addEventHandler("onclick",this.staTitle00_onclick,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.grdList.addEventHandler("oncellclick",this.grdList_oncellclick,this);
            this.grdList.addEventHandler("oncelldblclick",this.grdList_oncelldblclick,this);
            this.divCmmBtn.form.btn_02_00.addEventHandler("onclick",this.fnReg,this);
            this.Static_help.addEventHandler("onclick",this.Static_help_onclick,this);
        };
        this.loadIncludeScript("bbsMngList.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
