(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("authMng");
            this.set_titletext("List-Detail");
            this.set_cssclass("frm_WF_Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,736);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"1\"/><Column id=\"rno\" type=\"INT\" size=\"256\"/><Column id=\"authorCode\" type=\"STRING\" size=\"256\"/><Column id=\"authorNm\" type=\"STRING\" size=\"256\"/><Column id=\"authorDc\" type=\"STRING\" size=\"256\"/><Column id=\"authorNo\" type=\"STRING\" size=\"256\"/><Column id=\"authorCreatDe\" type=\"STRING\" size=\"256\"/><Column id=\"act\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPage", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"searchText\" type=\"STRING\" size=\"256\"/><Column id=\"currentPageNo\" type=\"INT\" size=\"256\"/><Column id=\"recordCountPerPage\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"recordCountPerPage\">10</Col><Col id=\"currentPageNo\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAuthMenuList", this);
            obj._setContents("<ColumnInfo><Column id=\"menuId\" type=\"STRING\" size=\"256\"/><Column id=\"authorCode\" type=\"STRING\" size=\"256\"/><Column id=\"authorNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAuthIpList", this);
            obj._setContents("<ColumnInfo><Column id=\"ip\" type=\"STRING\" size=\"256\"/><Column id=\"authorCode\" type=\"STRING\" size=\"256\"/><Column id=\"authorNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00","0","50","342","43",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("권한리스트");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","0","93",null,null,"20","116",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"30\"/><Column size=\"94\"/><Column size=\"145\"/><Column size=\"143\"/><Column size=\"150\"/><Column size=\"48\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"권한ID\"/><Cell col=\"3\" text=\"권한코드\"/><Cell col=\"4\" text=\"권한명\"/><Cell col=\"5\" text=\"권한설명\"/><Cell col=\"6\" text=\"메뉴권한\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:rno\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:authorNo\" displaytype=\"text\" edittype=\"none\"/><Cell col=\"3\" text=\"bind:authorCode\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"4\" text=\"bind:authorNm\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"5\" text=\"bind:authorDc\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"6\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"메뉴선택\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"50","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo01","56","-158","185","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var divSearch_form_cbo01_innerdataset = new nexacro.NormalDataset("divSearch_form_cbo01_innerdataset", obj);
            divSearch_form_cbo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cbo01_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cbo02","282","-158","185","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var divSearch_form_cbo02_innerdataset = new nexacro.NormalDataset("divSearch_form_cbo02_innerdataset", obj);
            divSearch_form_cbo02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cbo02_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cbo03","521","-158","184","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var divSearch_form_cbo03_innerdataset = new nexacro.NormalDataset("divSearch_form_cbo03_innerdataset", obj);
            divSearch_form_cbo03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cbo03_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("cal00","785","-158","184","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_value("20190308");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","8","12","86","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("검색라벨");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("searchText","104","12","140","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"9","30","30","25",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divCmmnBtn",null,"60","572","28","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"0","72","28","76",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("1");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Delete");
            obj.set_visible("true");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","72","28","152",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("0");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Add");
            obj.set_visible("true");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"0","72","28","0",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Save");
            obj.set_visible("true");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Div("divPage02","220","643","555","35",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_url("work::paging/pagenavigationdesign_type02.xfdl");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCmmnBtn.form
            obj = new Layout("default","",0,0,this.divCmmnBtn.form,function(p){});
            this.divCmmnBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPage02
            obj = new Layout("default","",0,0,this.divPage02.form,function(p){});
            this.divPage02.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1050,736,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","work::paging/pagenavigationdesign_type02.xfdl");
        };
        
        // User Script
        this.registerScript("authMng.xfdl", function() {
        /**
        *  PcMdi 프로젝트
        *  @FileName 	Temp03.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2023/10/30
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2023/10/30			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수
        	this.getSearchTran("list");
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        //삭제
        this.cfnClose = function ()
        {
        	trace('cfnClose');
        };
        //조회
        this.cfnSearch = function ()
        {
        	//TODO..
        };

        //저장
        this.cfnSave = function ()
        {
        	//TODO..
        };

        //추가
        this.cfnAdd = function ()
        {
        	//TODO..
        };

        //삭제
        this.cfnDel = function ()
        {
        	//TODO..
        };
        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.getSearchTran = function(ty) {

        	this.dsSearch.setColumn(0, "searchText"  , this.divSearch.form.searchText.value);

        	var strSvcId    = ty;
        	var strSvcUrl   = "sysMng/authMngList.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsList=dsList dsPage=dsPage dsAuthMenuList=dsAuthMenuList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, callBackFnc, strArg, isAsync);
        }

        this.saveTran = function() {
        	var strSvcId    = "save";
        	var strSvcUrl   = "sysMng/updateAuth.do";
        	var inData      = "dsList=dsList:U dsAuthMenuList=dsAuthMenuList:U";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, callBackFnc, strArg, isAsync);
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

        	if(svcID != null && svcID == "list")
        	{
        		this.divPage02.form.initPages(this.dsPage.getColumn(0, "totalRecordCount"), this.dsPage.getColumn(0, "pageSize"), this.dsPage.getColumn(0, "recordCountPerPage"), this.pagingCallback);
        	} else if(svcID != null && svcID == "search")
        	{

        	} else if(svcID != null && svcID == "save")
        	{
        		var gvRetMsg = this.objApp.getVariable("gvRetMsg");
        		this.gfnAlertMsg("delete", gvRetMsg);
        	}
        };

        this.fnPopupCallback = function(sPopupId, sRtn)
        {
        	if (sPopupId == "menuPopupSearch")
        	{
        		if (this.gfnIsNull(sRtn)) return;

        		var objRtn = JSON.parse(sRtn);
        		var authorCode = objRtn.authorCode;
        		var authorNo = objRtn.authorNo;

        		for(var i=this.dsAuthMenuList.rowcount; i>=0; i--) {
        			var cMenuId = this.dsAuthMenuList.getColumn(i, "menuId");
        			var cAuthorNo = this.dsAuthMenuList.getColumn(i, "authorNo");
        			var cAuthorCode = this.dsAuthMenuList.getColumn(i, "authorCode");

        			if(authorNo == cAuthorNo) {
        				this.dsAuthMenuList.deleteRow(i);
        			}
        		}

        		for(var i=0; i<objRtn.menuArr.length; i++) {
        			var nMenuId = objRtn.menuArr[i].menuId;
        			var nAuthorCode = objRtn.menuArr[i].authorCode;
        			var nAuthorNo = objRtn.menuArr[i].authorNo;

        			var nRow = this.dsAuthMenuList.addRow();
        			this.dsAuthMenuList.setColumn(nRow, "menuId", nMenuId.hi);
        			this.dsAuthMenuList.setColumn(nRow, "authorCode", nAuthorCode);
        			this.dsAuthMenuList.setColumn(nRow, "authorNo", nAuthorNo);

        		}
        	}
        }

        this.msgCallback = function(sPopupId, sRtn) {
        	if(sPopupId == "save_confirm") {
        		if(sRtn == "Y") {
        			this.saveTran();
        		}
        	}
        };

        this.pagingCallback = function(page) {
        	this.parent.parent.dsSearch.setColumn(0, "currentPageNo", page);
        	this.parent.parent.dsSearch.setColumn(0, "recordCountPerPage", this.parent.parent.dsPage.getColumn(0, "recordCountPerPage"));
        	this.parent.parent.getSearchTran("search");
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.grd00_oncellclick = function(obj,e)
        {
        	if(e.cell == 6) {
        		this.fnOpenSearchPop();
        	}
        };

        this.fnOpenSearchPop = function()
        {
        	var authorNo = this.dsList.getColumn(this.dsList.rowposition, "authorNo");
        	var authorCode = this.dsList.getColumn(this.dsList.rowposition, "authorCode");
        	var authorNm = this.dsList.getColumn(this.dsList.rowposition, "authorNm");

        	if (this.gfnIsNull(authorCode)) {
        		this.gfnAlertMsg("auth", "권한코드는 필수 입니다.");
        		return;
        	}

        	var sTitle = "메뉴 선택 팝업";
        	var objArg = {
        		authorNo : authorNo,
        		authorMenus : this.dsAuthMenuList,
        		authorCode : authorCode,
        		authorNm : authorNm
        	};

        	var sPopupCallBack = "fnPopupCallback";
        	var objOption = {
        		popuptype:"modal"	//modal,modaless
        // 		width:700
        // 		,height:700			//width,height 지정하지 않음 popup form size적용
        		,autosize:false
        		,title:sTitle
        		,resize:false
        		,titlebar:true};

        	this.gfnOpenPopup("menuPopupSearch", "work::sysMng/popup/menuPopup.xfdl", objArg, sPopupCallBack, objOption);
        }



        this.btn00_01_onclick = function(obj,e)
        {
        	if (this.gfnDsIsUpdated(this.ds_get) == false) {
        		this.gfnAlert("msg.save.nochange");
        		return;
        	}
        };

        this.divCmmnBtn_btnAdd_onclick = function(obj,e)
        {
        	this.dsList.insertRow();
        };

        this.divCmmnBtn_btnDel_onclick = function(obj,e)
        {
        	var arr = this.dsList.extractRows("chk == 1");
        	console.log(arr);
        	this.dsList.deleteMultiRows(arr);
        };

        this.ds_grid_oncolumnchanged = function(obj,e)
        {
        	this.dsList.setColumn(e.row, "chk", e.newvalue);
        };

        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.dsSearch.setColumn(0, "currentPageNo", 1);
        	this.dsSearch.setColumn(0, "recordCountPerPage", this.dsPage.getColumn(0, "recordCountPerPage"));
        	this.getSearchTran("list");
        };

        this.divCmmnBtn_btnSave_onclick = function(obj,e)
        {
        	if (this.gfnDsIsUpdated(this.dsList) == false && this.gfnDsIsUpdated(this.dsAuthMenuList) == false) {
        		this.gfnAlertMsg("not_save_confirm", "변경된 내역이 없습니다.");
        		return;
        	} else {
        		this.gfnConfirmMsg("save_confirm", "변경 하시겠습니까?.", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        	}
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.grd00.addEventHandler("oncellclick",this.grd00_oncellclick,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.divCmmnBtn.form.btnDel.addEventHandler("onclick",this.divCmmnBtn_btnDel_onclick,this);
            this.divCmmnBtn.form.btnAdd.addEventHandler("onclick",this.divCmmnBtn_btnAdd_onclick,this);
            this.divCmmnBtn.form.btnSave.addEventHandler("onclick",this.divCmmnBtn_btnSave_onclick,this);
            this.dsList.addEventHandler("oncolumnchanged",this.ds_grid_oncolumnchanged,this);
        };
        this.loadIncludeScript("authMng.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
