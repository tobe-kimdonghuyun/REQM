(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("prgmPopup");
            this.set_titletext("Popup Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(700,394);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"progrmNo\" type=\"STRING\" size=\"256\"/><Column id=\"progrmFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"progrmStrePath\" type=\"STRING\" size=\"256\"/><Column id=\"progrmKoreanNm\" type=\"STRING\" size=\"256\"/><Column id=\"progrmDc\" type=\"STRING\" size=\"256\"/><Column id=\"url\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"searchText\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","25","20",null,"50","25",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","12","104","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("프로그램명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("searchText","sta00:0.00","12","140","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"10","30","30","20",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","25","70","342","43",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("프로그램 리스트");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","25","113",null,null,"25","68",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"프로그램명\"/><Cell col=\"2\" text=\"프로그램타입\"/><Cell col=\"3\" text=\"한글명\"/><Cell col=\"4\" text=\"설명\"/><Cell col=\"5\" text=\"URL\"/></Band><Band id=\"body\"><Cell text=\"bind:progrmNo\"/><Cell col=\"1\" text=\"bind:progrmFileNm\"/><Cell col=\"2\" text=\"bind:progrmStrePath\"/><Cell col=\"3\" text=\"bind:progrmKoreanNm\"/><Cell col=\"4\" text=\"bind:progrmDc\"/><Cell col=\"5\" text=\"bind:url\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"50","28","25","20",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("취소");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnConfirm",null,null,"50","28","btnClose:3","20",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("확인");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",700,394,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("prgmPopup.xfdl", function() {
        /**
        *  PcMdi 프로젝트
        *  @FileName 	Temp17_1.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2023/10/30
        *  @Desction    팝업 유형 화면
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2023/10/30			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fvSearch = "";	// 부모에서 넘긴 검색조건

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수

        	// 초기화
        	this.fnInit();
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        this.cfnSearch = function(obj,e)
        {
        	this.searchTran();
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.searchTran = function() {

        	this.dsSearch.setColumn(0, "searchText"  , this.divSearch.form.searchText.value);

         	var strSvcId    = "search";
        	var strSvcUrl   = "sysMng/prgmMngPopupList.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsList=dsList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        }
        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0)
        	{
        		return;
        	}

        	if(svcID != null && svcID == "search")
        	{

        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	this.searchTran();
        }

        this.selectItem = function() {
        	var nRow = this.dsList.rowposition;

        	var sProgrmNo = this.dsList.getColumn(nRow, "progrmNo");
        	var sProgrmFileNm = this.dsList.getColumn(nRow, "progrmFileNm");
        	var sUrl = this.dsList.getColumn(nRow, "url");

        	var rtnValue = {
        		rPrgmId : sProgrmNo,
        		rPrgmNm : sProgrmFileNm,
        		rUrl : sUrl
        	}

        	this.gfnClosePopup(JSON.stringify(rtnValue));
        }
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        /**
         * @description 취소 버튼 클릭 이벤트
        */
        this.btnClose_onclick = function(obj,e)
        {
        	this.gfnClosePopup();
        };

        /**
         * @description 확인 버튼 클릭 이벤트
        */
        this.btnConfirm_onclick = function(obj,e)
        {
        	this.selectItem();
        };

        /**
         * @description 그리드셀 더블클릭 이벤트
        */
        this.grdList_oncelldblclick = function(obj,e)
        {
        	this.selectItem();
        };




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.searchText.addEventHandler("onkeyup",this.divSearch_edtName_onkeyup,this);
            this.divSearch.form.searchText.addEventHandler("oninput",this.divSearch_edtName_oninput,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.cfnSearch,this);
            this.sta00.addEventHandler("onclick",this.sta00_onclick,this);
            this.grdList.addEventHandler("oncelldblclick",this.grdList_oncelldblclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.btnConfirm.addEventHandler("onclick",this.btnConfirm_onclick,this);
        };
        this.loadIncludeScript("prgmPopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
