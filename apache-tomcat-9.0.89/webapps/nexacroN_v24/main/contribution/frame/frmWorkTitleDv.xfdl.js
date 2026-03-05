(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmWorkTitleDv");
            this.set_titletext("WorkFrameTitle");
            this.set_scrolltype("none");
            this.set_scrollbartype("none none");
            if (Form == this.constructor)
            {
                this._setFormPosition(995,52);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBtnSeq", this);
            obj._setContents("<ColumnInfo><Column id=\"btnId\" type=\"string\" size=\"50\"/><Column id=\"btnNm\" type=\"string\" size=\"50\"/></ColumnInfo><Rows><Row><Col id=\"btnId\">btnSelect</Col><Col id=\"btnNm\">조회</Col></Row><Row><Col id=\"btnId\">btnAdd</Col><Col id=\"btnNm\">추가</Col></Row><Row><Col id=\"btnId\">btnDel</Col><Col id=\"btnNm\">삭제</Col></Row><Row><Col id=\"btnId\">btnSave</Col><Col id=\"btnNm\">저장</Col></Row><Row><Col id=\"btnId\">btnExcel</Col><Col id=\"btnNm\">엑셀</Col></Row><Row><Col id=\"btnId\">btnPrint</Col><Col id=\"btnNm\">출력</Col></Row><Row><Col id=\"btnId\">btnClose</Col><Col id=\"btnNm\">닫기</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAddBtn", this);
            obj._setContents("<ColumnInfo><Column id=\"SYTM_FLAG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BTTN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"BTTN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BTTN_ENGL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BTTN_STYLE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnExcel",null,"12","67","28","70",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("엑셀");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_CrudExcel");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"12","68","28","btnExcel:3",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("저장");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_CrudSave");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"12","69","28","btnSave:3",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("삭제");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_CrudDelete");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"12","67","28","btnDel:3",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("추가");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_CrudAdd");
            this.addChild(obj.name, obj);

            obj = new Button("btnMyMenu","0","11","32","31",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("staNavi","btnMyMenu:-7","4","255","44",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_Location");
            obj.set_fittocontents("width");
            obj.set_verticalAlign("middle");
            obj.set_wordWrap("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnHelp",null,"62","30","28","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_Help");
            obj.set_enable("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnPrint",null,"65","68","28","171",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_CrudPrint");
            obj.set_enable("true");
            obj.set_text("인쇄");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","-8","459","20","0",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_Search");
            obj.set_cssclass("btn_WF_Search");
            obj.set_text("조회");
            obj.set_fittocontents("width");
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Div("divAddBtn","staNavi:0","12","502","28",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn14_00",null,"62","67","28","66",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("커스텀");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_Custom");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staNull","540","35","199","60",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Combo("cboMenu","804","188","208","56",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_visible("false");
            obj.set_innerdataset("dsCboMenu");
            obj.set_codecolumn("MENU_ID");
            obj.set_datacolumn("MENU_NM");
            obj.set_text("cbo00");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"12","67","28","0",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("닫기");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_CrudClose");
            this.addChild(obj.name, obj);

            obj = new Button("btnSelect",null,"12","67","28","btnAdd:3",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("조회");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_CrudSelect");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divAddBtn
            obj = new Layout("default","",0,0,this.divAddBtn.form,function(p){});
            this.divAddBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",995,52,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("WorkFrameTitle");
                p.set_scrolltype("none");
                p.set_scrollbartype("none none");

                p.btnExcel.set_taborder("13");
                p.btnExcel.set_text("엑셀");
                p.btnExcel.set_fittocontents("width");
                p.btnExcel.set_cssclass("btn_WF_CrudExcel");
                p.btnExcel.move(null,"12","67","28","70",null);

                p.btnSave.set_taborder("4");
                p.btnSave.set_text("저장");
                p.btnSave.set_fittocontents("width");
                p.btnSave.set_cssclass("btn_WF_CrudSave");
                p.btnSave.move(null,"12","68","28","btnExcel:3",null);

                p.btnDel.set_taborder("5");
                p.btnDel.set_text("삭제");
                p.btnDel.set_fittocontents("width");
                p.btnDel.set_cssclass("btn_WF_CrudDelete");
                p.btnDel.move(null,"12","69","28","btnSave:3",null);

                p.btnAdd.set_taborder("6");
                p.btnAdd.set_text("추가");
                p.btnAdd.set_fittocontents("width");
                p.btnAdd.set_cssclass("btn_WF_CrudAdd");
                p.btnAdd.move(null,"12","67","28","btnDel:3",null);

                p.btnMyMenu.set_taborder("1");
                p.btnMyMenu.set_cssclass("btn_WF_Bookmark");
                p.btnMyMenu.move("0","11","32","31",null,null);

                p.staNavi.set_taborder("0");
                p.staNavi.set_cssclass("sta_WF_Location");
                p.staNavi.set_fittocontents("width");
                p.staNavi.set_verticalAlign("middle");
                p.staNavi.set_wordWrap("none");
                p.staNavi.set_text("");
                p.staNavi.move("btnMyMenu:-7","4","255","44",null,null);

                p.btnHelp.set_taborder("2");
                p.btnHelp.set_cssclass("btn_WF_Help");
                p.btnHelp.set_enable("true");
                p.btnHelp.set_visible("false");
                p.btnHelp.move(null,"62","30","28","0",null);

                p.btnPrint.set_taborder("3");
                p.btnPrint.set_cssclass("btn_WF_CrudPrint");
                p.btnPrint.set_enable("true");
                p.btnPrint.set_text("인쇄");
                p.btnPrint.move(null,"65","68","28","171",null);

                p.btn00.set_cssclass("btn_WF_Search");
                p.btn00.set_text("조회");
                p.btn00.set_fittocontents("width");
                p.btn00.set_taborder("7");
                p.btn00.move("-8","459","20","0",null,null);

                p.divAddBtn.set_taborder("8");
                p.divAddBtn.set_text("");
                p.divAddBtn.set_maxwidth("");
                p.divAddBtn.move("staNavi:0","12","502","28",null,null);

                p.btn14_00.set_taborder("9");
                p.btn14_00.set_text("커스텀");
                p.btn14_00.set_fittocontents("width");
                p.btn14_00.set_cssclass("btn_WF_Custom");
                p.btn14_00.set_visible("false");
                p.btn14_00.move(null,"62","67","28","66",null);

                p.staNull.set_taborder("10");
                p.staNull.set_background("transparent");
                p.staNull.move("540","35","199","60",null,null);

                p.cboMenu.set_taborder("11");
                p.cboMenu.set_visible("false");
                p.cboMenu.set_innerdataset("dsCboMenu");
                p.cboMenu.set_codecolumn("MENU_ID");
                p.cboMenu.set_datacolumn("MENU_NM");
                p.cboMenu.set_text("cbo00");
                p.cboMenu.move("804","188","208","56",null,null);

                p.btnClose.set_taborder("12");
                p.btnClose.set_text("닫기");
                p.btnClose.set_fittocontents("width");
                p.btnClose.set_cssclass("btn_WF_CrudClose");
                p.btnClose.move(null,"12","67","28","0",null);

                p.btnSelect.set_taborder("14");
                p.btnSelect.set_text("조회");
                p.btnSelect.set_fittocontents("width");
                p.btnSelect.set_cssclass("btn_WF_CrudSelect");
                p.btnSelect.move(null,"12","67","28","btnAdd:3",null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("default0","",1080,600,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmWorkTitleDv.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	frmWorkTitle.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2020/12/17
        *  @Desction   	업무화면의 타이틀&공통버튼 영역
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2020/12/17			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();

        this.fvMenuId = "";						// 화면 ID

        this.fvObjArray = new Array();			// 공통버튼 배열
        // this.fvObjArray[0] = "btnAdd";  		// 추가
        // this.fvObjArray[1] = "btnDel";  		// 삭제
        // this.fvObjArray[2] = "btnSave"; 		// 저장
        // this.fvObjArray[3] = "btnPrint";  		// 출력
        // this.fvObjArray[4] = "btnHelp"; 		// 도움말
        // this.fvObjArray[5] = "btnExcelUp"; 		// 엑셀업로드
        // this.fvObjArray[6] = "btnExcelDown";	// 엑셀다운로드

        this.fvObjArray[0] = "btnSelect";  		// 조회
        this.fvObjArray[1] = "btnAdd";  		// 신규
        this.fvObjArray[2] = "btnDel"; 			// 삭제
        this.fvObjArray[3] = "btnSave";  		// 저장
        this.fvObjArray[4] = "btnExcel"; 		// 엑셀
        this.fvObjArray[5] = "btnPrint"; 		// 인쇄
        this.fvObjArray[6] = "btnClose";		// 닫기
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        /**
         * @description 화면 오픈
         */
        this.form_onload = function(obj,e)
        {
        	// QucikView 실행
        	if(nexacro._quickview_formurl) {
        		this.btnMyMenu.set_enable(false);
        		return;
        	}

        	this.fvMenuId = this.gfnGetArgument(this.FRAME_MENUCOLUMNS.menuId);

        	//추가버튼조회
        	var oDs = nexacro.getApplication().gdsAddBtn;
        	oDs.filter("MENU_ID=='"+this.fvMenuId+"'");
        	this.dsAddBtn.copyData(oDs,true);
        	oDs.filter("");

        	// 마이메뉴 버튼 셋팅
        	this.fnSetMyMenuBtn();

        	// dsCboMenu 데이터 세팅
        	this.fnSetDsCboMenu();
        };

        this.form_onsize = function(obj,e)
        {
        	//버튼정렬 후 추가 버튼 div사이즈 변경
        	var oLast = this.divAddBtn.uLast;

        	var nWidth = 0;
        	if(this.gfnIsNull(oLast)) nWidth = this.getOffsetWidth() - this.staNavi.getOffsetRight();
        	else  nWidth = oLast.getOffsetLeft() - this.staNavi.getOffsetRight()-3;

        	this.divAddBtn.setOffsetWidth(nWidth);
        	this.resetScroll();
        };
        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/


        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/


        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        /**
         * @description 마이메뉴버튼 css 셋팅<br>
        	즐겨찾기되어있는 화면 -> ★ <br>
        	즐겨찾기가안되있는화면 -> ☆
        */
        this.fnSetMyMenuBtn = function ()
        {
        	//var objDs = this.objApp.gdsMyMenu;
        	var objDs = this.objApp.gvFrmLeft.form.dsMyMenu;
        	var nRow = objDs.findRow(this.FRAME_MENUCOLUMNS.menuId, this.fvMenuId);

        	if( nRow < 0 ){
        		this.btnMyMenu.set_cssclass("btn_WF_Bookmark");
        	}else{
        		this.btnMyMenu.set_cssclass("btn_WF_BookmarkS");
        	}
        };

        /**
         * @description  폼권한에 따른 공통버튼 셋팅
        */
        this.fnSetAuthBtn = function(sAuth)
        {
        	var nRigth = 0; // right기준값
        	var nGap = 3;    // 버튼사이 폭
        	var nFindRow;

        	// 버튼 Visible 처리
        	for (var i = 0; i < this.fvObjArray.length; i++)
        	{
        		var objBtn = this[this.fvObjArray[i]];

        		if (this.gfnIsNull(objBtn))
        		{
        			nFindRow = this.dsBtnSeq.findRow("btnId", this.fvObjArray[i]);
        			if(nFindRow != -1) this.dsBtnSeq.deleteRow(nFindRow);
        		} else
        		{
        			if(sAuth.substr(i, 1) == "1")
        			{
        				objBtn.set_visible(true);
        			} else
        			{
        				objBtn.set_visible(false);
        				nFindRow = this.dsBtnSeq.findRow("btnId", this.fvObjArray[i]);
        				if(nFindRow != -1) this.dsBtnSeq.deleteRow(nFindRow);
        			}
        		}
        	}

        	var oLast = null;
        	// 버튼 재정렬
        	for(var i = this.dsBtnSeq.getRowCount()-1; i > -1; i--)
        	{
        		var sBtnId = this.dsBtnSeq.getColumn(i, "btnId");
        		var objBtn = this[sBtnId];

        		objBtn.move(null, 12, objBtn.getOffsetWidth(), objBtn.getOffsetHeight(), nRigth);
        		nRigth = nRigth + nexacro.toNumber(nGap) + nexacro.toNumber(objBtn.getOffsetWidth());

        		if(objBtn.visible) {
        			oLast = objBtn;
        		}
        	}

        	//버튼정렬 후 추가 버튼 div사이즈 변경
        	this.divAddBtn.uLast = oLast;
        	var nWidth = 0;
        	if( this.gfnIsNull(oLast)) nWidth = this.getOffsetWidth() - this.staNavi.getOffsetRight();
        	else nWidth = oLast.getOffsetLeft() - this.staNavi.getOffsetRight()-3;

        	this.divAddBtn.setOffsetWidth(nWidth);
        	this.resetScroll();

        	//추가버튼
        	var nLen = this.dsAddBtn.rowcount;
        	if( nLen == 0 ){
        		this.divAddBtn.set_visible(false);
        	}else{
        		this.fnMakeAddBtn(nLen);
        	}
        };

        /**
         * @description 추가버튼생성
        */
        this.fnMakeAddBtn = function (nLen)
        {
        	var sId 	= "";
        	var sTxt 	= "";
        	var sCss 	= "";
        	var nRight 	= 0;
        	var nWidth	= 60;
        	var nHeight = 28;
        	var oBtn 	= null;

        	for( var i=0; i<nLen;i++)
        	{
        		sId  = this.dsAddBtn.getColumn(i, "BTTN_ID");
        		sTxt = this.dsAddBtn.getColumn(i, "BTTN_NM");
        		sCss = this.dsAddBtn.getColumn(i, "BTTN_STYLE");

        		oBtn = new nexacro.Button;
        		oBtn.init(sId, null, 0, nWidth, nHeight, nRight, 0);
        		this.divAddBtn.addChild(sId, oBtn);

        		oBtn.addEventHandler("onclick", this.addBtn_onclick, this);
        		oBtn.set_cssclass(sCss);
        		oBtn.set_text(sTxt);
        		oBtn.set_fittocontents("width");
        		oBtn.show();

        		this.divAddBtn.form.resetScroll();

        		nRight += oBtn.getOffsetWidth() + 3;
        	}

        	this.divAddBtn.set_visible(true);
        };
        /**
         * @description  북마크버튼 css 변경
         * @param {Object} objBtn - 북마크 버튼
        */
        this.fnSetBookmarkCss = function(objBtn)
        {
        	if (this.gfnIsNull(objBtn)) return;

        	var sCssclass = objBtn.cssclass;

        	if (sCssclass == "btn_WF_Bookmark")
        	{
        		objBtn.set_cssclass("btn_WF_BookmarkS");
        	} else
        	{
        		objBtn.set_cssclass("btn_WF_Bookmark");
        	}
        };


        // dsCboMenu 데이터 세팅
        this.fnSetDsCboMenu = function ()
        {
        	var nRow = this.objApp.gdsMenu.findRow(this.FRAME_MENUCOLUMNS.menuId, this.fvMenuId);
        	var sUpMenuId = this.objApp.gdsMenu.getColumn(nRow, this.FRAME_MENUCOLUMNS.upMenuId);
        	var sFilter = this.FRAME_MENUCOLUMNS.upMenuId + " == '" + sUpMenuId + "' && "
        				+ this.FRAME_MENUCOLUMNS.menuFlagCd + " == 'P' && "
        				+ this.FRAME_MENUCOLUMNS.useYn + " == '1'";

        	this.objApp.gdsMenu.filter(sFilter);
        	this.dsCboMenu.set_enableevent(false);
        	this.dsCboMenu.copyData(this.objApp.gdsMenu, true);
        	this.dsCboMenu.set_enableevent(true);
        	this.objApp.gdsMenu.filter("");

        	// cboMenu에 index설정
        	var nIndex = this.dsCboMenu.findRow(this.FRAME_MENUCOLUMNS.menuId, this.fvMenuId);
        	this.cboMenu.set_index(nIndex);

        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역x
        *******************************************************************************************************************************/
        /**
         * @description 추가버튼 click
         */
        this.addBtn_onclick = function (obj, e)
        {
        	if (!obj.enable) return;

        	var objTargetForm = this.getOwnerFrame().form.fvDivWork.form;

        	var sFunctionPrefix = "cfn";
        	var sFunctionNm = sFunctionPrefix + obj.name;

        	// 업무화면의 cfn+버튼명 (ex : cfnbtnAddMg ) 함수 호출
        	if (objTargetForm[sFunctionNm]) objTargetForm.lookupFunc(sFunctionNm).call(obj, e);
        };

        /**
         * @description 공통버튼 click
         */
        this.btnCmmn_onclick = function(obj,e)
        {
        	if (!obj.enable) return;

        	var objTargetForm = this.getOwnerFrame().form.fvDivWork.form;

        	var sFunctionPrefix = "cfn";
        	var sBtnNm = obj.name.substr(3);
        	var sFunctionNm = sFunctionPrefix + sBtnNm;

        	//"cfnClose"
        	var sBtnClose = this.btnClose.id;
        	var sFunctionClose = sFunctionPrefix + sBtnClose.substr(3);
        	// cfnClose의 경우 cfnClose함수 실행 후 화면 닫기 실행
        	if(sFunctionNm == sFunctionClose)
        	{
        		var sWinId = this.getOwnerFrame().id;
        		var sMenuId = this.gfnGetLookupData(this.objApp.gdsOpenMenu, this.FRAME_MENUCOLUMNS.winId, sWinId, this.FRAME_MENUCOLUMNS.menuId);

        		//this.objApp.gvFrmMdi.form.lookupFunc("fnCloseMenu").call(sMenuId);
        		this.objApp.gvFrmMdi.form.fnCloseMenu(sMenuId);
        	}
        	// 업무화면의 cfnAdd, cfnDel, cfnSave 함수 호출(Print, Help는 공통에서 처리..)
        	else if (objTargetForm[sFunctionNm]) objTargetForm.lookupFunc(sFunctionNm).call();
        };

        /**
         * @description 프린트 버튼 click
         */
        this.btnPrint_onclick = function(obj,e)
        {

        };

        /**
         * @description 도움말 click
         */
        this.btnHelp_onclick = function(obj,e)
        {

        };

        /**
         * @description 마이메뉴(Bookmark) click
         */
        this.btnMyMenu_onclick = function(obj,e)
        {

        	var bIsMymenu = false;
        	if(this.btnMyMenu.cssclass == "btn_WF_BookmarkS")	bIsMymenu = true;

        	var objDs = this.objApp.gvFrmLeft.form.dsMyMenu;
        	var objMenuDs = this.objApp.gdsMenu;

        	objDs.set_enableevent(false);
        	this.objApp.gvFrmLeft.form.divLnb.form.grdMyMenu.set_enableredraw(false);


        	if(bIsMymenu)
        	{
        		// 마이메뉴 해제
        		var nRow = objDs.findRow(this.FRAME_MENUCOLUMNS.menuId, this.fvMenuId);

        		if(nRow > -1) objDs.deleteRow(nRow);
        	} else
        	{
        		// 마이메뉴 추가
        		//var nRow = objMenuDs.findRow(this.FRAME_MENUCOLUMNS.menuId, this.fvMenuId);

        		var nNewRow =  objDs.addRow();
        		var nSortOrdr = (nNewRow == 0 ? 1 : nexacro.toNumber((objDs.getColumn((nNewRow-1), "SORT_ORDR"))  + 1) );
        		objDs.setColumn(nNewRow, "U_ID", this.objApp.gdsUser.getColumn(0, "USER_ID"));
        		objDs.setColumn(nNewRow, this.FRAME_MENUCOLUMNS.menuId, this.fvMenuId);
        		objDs.setColumn(nNewRow, "SORT_ORDR", nSortOrdr);
        		objDs.setColumn(nNewRow, this.FRAME_MENUCOLUMNS.menuNm, this.gfnGetArgument(this.FRAME_MENUCOLUMNS.menuNm));

        	}

        // 	// 좌측 마이메뉴 편집상태 check
        // 	if(!this.objApp.gvFrmLeft.form.fvMyMenuEdit)

        	// 마이메뉴 저장 트랜잭션
        	this.objApp.gvFrmLeft.form.fnSaveMyMenu();


         	objDs.set_enableevent(true);
         	this.objApp.gvFrmLeft.form.divLnb.form.grdMyMenu.set_enableredraw(true);

        	// 북마크버튼 css 변경
        	this.fnSetBookmarkCss(obj);

        };

        // 클릭시 메뉴 콤보 open
        this.staNull_onclick = function(obj,e)
        {
        	this.cboMenu.set_visible(true);
        	this.cboMenu.dropdown();
        };


        // 콤보 밖으로 마우스 클릭시 콤보가 보이지 않게 처리
        this.cboMenu_oncloseup = function(obj,e)
        {
        	this.cboMenu.set_visible(false);
        };



        // 콤보 선택시 화면이동
        this.cboMenu_canitemchange = function(obj,e)
        {
        	this.objApp.gvFrmLeft.form.fnFormOpen(e.postvalue);
        	return false;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.btnExcel.addEventHandler("onclick",this.btnCmmn_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnCmmn_onclick,this);
            this.btnDel.addEventHandler("onclick",this.btnCmmn_onclick,this);
            this.btnAdd.addEventHandler("onclick",this.btnCmmn_onclick,this);
            this.btnMyMenu.addEventHandler("onclick",this.btnMyMenu_onclick,this);
            this.btnHelp.addEventHandler("onclick",this.btnHelp_onclick,this);
            this.btnPrint.addEventHandler("onclick",this.btnCmmn_onclick,this);
            this.btn00.addEventHandler("onclick",this.Div00_Button01_onclick,this);
            this.staNull.addEventHandler("onclick",this.staNull_onclick,this);
            this.cboMenu.addEventHandler("oncloseup",this.cboMenu_oncloseup,this);
            this.cboMenu.addEventHandler("canitemchange",this.cboMenu_canitemchange,this);
            this.btnClose.addEventHandler("onclick",this.btnCmmn_onclick,this);
            this.btnSelect.addEventHandler("onclick",this.btnCmmn_onclick,this);
        };
        this.loadIncludeScript("frmWorkTitleDv.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
