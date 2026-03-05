(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("menuPopup");
            this.set_titletext("Popup Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(700,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTree", this);
            obj._setContents("<ColumnInfo><Column id=\"moduleCd\" type=\"STRING\" size=\"256\"/><Column id=\"menuId\" type=\"INT\" size=\"256\"/><Column id=\"menuLv\" type=\"INT\" size=\"256\"/><Column id=\"menuNm\" type=\"STRING\" size=\"256\"/><Column id=\"menuUrl\" type=\"STRING\" size=\"256\"/><Column id=\"menuOrdr\" type=\"INT\" size=\"256\"/><Column id=\"menuUseYn\" type=\"STRING\" size=\"1\"/><Column id=\"menuDc\" type=\"STRING\" size=\"256\"/><Column id=\"menuUpMenuId\" type=\"INT\" size=\"256\"/><Column id=\"menuPrgmId\" type=\"STRING\" size=\"256\"/><Column id=\"menuPrgmNm\" type=\"STRING\" size=\"256\"/><Column id=\"act\" type=\"STRING\" size=\"1\"/><Column id=\"chk\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"authorNo\" type=\"STRING\" size=\"256\"/><Column id=\"authorCode\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAuthMenuList", this);
            obj._setContents("<ColumnInfo><Column id=\"menuId\" type=\"STRING\" size=\"256\"/><Column id=\"authorCode\" type=\"STRING\" size=\"256\"/><Column id=\"authorNo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00","25.00","10","161","43",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("메뉴 목록");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"50","28","25","10",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("취소");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnConfirm",null,null,"50","28","btnClose:3","10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Grid("grd03","25","53","330",null,null,"50",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsTree");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeuseimage("false");
            obj.set_treeusecheckbox("true");
            obj.set_treeuseexpandkey("false");
            obj.set_treeusebutton("use");
            obj.set_treeuseline("true");
            obj.set_treeasynctoggle("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"140\"/></Columns><Rows><Row size=\"32\"/></Rows><Band id=\"body\"><Cell text=\"bind:menuNm\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:menuLv\" cssclass=\"expr:menuLv==&apos;0&apos;?&quot;cell_WF_1Depth&quot;:menuLv==&apos;1&apos;?&quot;cell_WF_2Depth&quot;:menuLv==&apos;2&apos;?&quot;cell_WF_3Depth&quot;:&quot;&quot;\" treecheck=\"bind:chk\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"17","80","28","345",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("선택해제");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd00",null,"17","80","28","434",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("전체선택");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta06","368.00","54",null,"34","10",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta05","368.00","54","108","34",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("권한코드");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("sta06_00","368.00","87",null,"34","10",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta05_00","368.00","87","108","34",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("권한명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00","368.00","9","161","43",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("메뉴 목록");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","486","55","194","32",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00","486","88","194","32",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",700,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("menuPopup.xfdl", function() {
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
        this.authorNo = "";
        this.authorCode = "";
        this.authorNm = "";
        this.authorMenus;
        this.init = false;
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수
        	this.fnInit();
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.getSearchTran = function() {

        	this.authorNo = this.getOwnerFrame().authorNo;
        	this.authorCode = this.getOwnerFrame().authorCode;
        	this.authorNm = this.getOwnerFrame().authorNm;
        	this.authorMenus = this.getOwnerFrame().authorMenus;

        	this.dsSearch.setColumn(0, "authorNo", this.authorNo);
        	this.dsSearch.setColumn(0, "authorCode", this.authorCode);

        	this.sta01.set_text(this.authorCode);
        	this.sta01_00.set_text(this.authorNm);

        	var strSvcId    = "search";
        	var strSvcUrl   = "sysMng/menuMngPopupList.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsTree=dsTree";
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
        		this.dsAuthMenuList.copyData(this.authorMenus);
        		this.dsAuthMenuList.filter("authorNo=='"+this.authorNo+"'");
        		if(this.dsAuthMenuList.rowcount == 0) {
        			this.dsAuthMenuList.filter("authorCode=='"+this.authorCode+"'");
        		}

        		for(var i=0; i < this.dsAuthMenuList.rowcount; i++) {
        			var menuId = this.dsAuthMenuList.getColumn(i, "menuId");
        			var sRow = this.dsTree.findRow("menuId", menuId);
        			this.dsTree.setColumn(sRow, "chk", 1);
        		}
        		this.init = false;
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	this.init = true;
        	this.getSearchTran();
        }
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.btnClose_onclick = function(obj,e)
        {
        	this.gfnClosePopup();
        };


        this.btnConfirm_onclick = function(obj,e)
        {
        	var objRet = {};
        	var menuArr = [];

        	for(var i=0;i<this.dsTree.rowcount;i++) {
        		var chk = this.dsTree.getColumn(i, "chk");

        		if(chk == 1) {
        			var menuId = this.dsTree.getColumn(i, "menuId");
        			var menu = {
        				'menuId' : menuId,
        				'authorCode' : this.authorCode,
        				'authorNo' : this.authorNo
        			};
        			menuArr.push(menu);
        		}
        	}
        	objRet = {
        		'authorNo' : this.authorNo,
        		'authorCode' : this.authorCode,
        		'menuArr' : menuArr
        	}

        	this.gfnClosePopup(JSON.stringify(objRet));
        };

        this.btnAdd00_onclick = function(obj,e)
        {
        	for(var i=0;i<this.dsTree.rowcount;i++) {
        		this.dsTree.setColumn(i, "chk", 1);
        	}
        };

        this.btnAdd_onclick = function(obj,e)
        {
        	for(var i=0;i<this.dsTree.rowcount;i++) {
        		this.dsTree.setColumn(i, "chk", 0);
        	}
        };

        this.ds_tree_oncolumnchanged = function(obj,e)
        {

        	if(!this.init && e.columnid == "chk")
        	{
        		//현재 Row Index
        		var nRow = e.row;

        		//현재 Row Level
        		var nTargetLevel = nexacro.toNumber(obj.getColumn(nRow, "menuLv"));

        		//현재 Row의 다음 형제 또는 상위 레벨 Row 찾기
        		var nSiblingRow = obj.findRowExpr("nexacro.toNumber(menuLv)<="+nTargetLevel, nRow+1);

        		//변경할 Check 상태값
        		var sValue = e.newvalue;

        		//형제 Row가 없을 경우 마지막 Row를 선택
        		if(nSiblingRow==-1)
        		{
        			nSiblingRow = obj.rowcount;
        		}

        		//현재 Row부터 형재 Row전까지 Check
        		for(var i=nRow+1;i<nSiblingRow;i++)
        		{
        			obj.setColumn(i, "chk", sValue);
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.sta00.addEventHandler("onclick",this.sta00_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.btnConfirm.addEventHandler("onclick",this.btnConfirm_onclick,this);
            this.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
            this.btnAdd00.addEventHandler("onclick",this.btnAdd00_onclick,this);
            this.sta00_00.addEventHandler("onclick",this.sta00_onclick,this);
            this.dsTree.addEventHandler("oncolumnchanged",this.ds_tree_oncolumnchanged,this);
        };
        this.loadIncludeScript("menuPopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
