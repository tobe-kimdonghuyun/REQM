(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmLeft");
            this.set_titletext("LeftFrame");
            this.set_cssclass("frm_LF_Bg");
            if (Form == this.constructor)
            {
                this._setFormPosition(210,850);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LV\" type=\"STRING\" size=\"256\"/><Column id=\"HIPO_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LEAF_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_STS\" type=\"STRING\" size=\"256\"/><Column id=\"SYTM_FLAG_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenuSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMyMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"PRGM_FULL_PATH\" type=\"STRING\" size=\"32\"/><Column id=\"SORT_ORDR\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"m_id\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_NM_EN\" type=\"STRING\" size=\"32\"/><Column id=\"m_name\" type=\"STRING\" size=\"32\"/><Column id=\"PRGM_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRGM_PATH\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divLnb","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMenu","15","94",null,null,"1","0",null,null,null,null,this.divLnb.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsMenu");
            obj.set_treeuseline("false");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseimage("false");
            obj.set_treeinitstatus("expand,all");
            obj.set_cssclass("grd_LF_Menu");
            obj.set_extendsizetype("row");
            obj.set_autofittype("col");
            obj.set_autosizingtype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"199\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:m_name\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:m_level\" treestartlevel=\"0\" cssclass=\"expr:MENU_FLAG_CD==&apos;M&apos;?&apos;cell_LF_Lev&apos;:&apos;&apos;\"/></Band></Format></Formats>");
            this.divLnb.addChild(obj.name, obj);

            obj = new Button("btnMenu","20","54","79","30",null,null,null,null,null,null,this.divLnb.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_LF_MenuS");
            obj.set_tooltiptext("전체메뉴");
            this.divLnb.addChild(obj.name, obj);

            obj = new Button("btnMyMenu","111","54","79","30",null,null,null,null,null,null,this.divLnb.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_LF_Fav");
            obj.set_tooltiptext("즐겨찾기메뉴");
            this.divLnb.addChild(obj.name, obj);

            obj = new Grid("grdMyMenu","15","128",null,null,"1","0",null,null,null,null,this.divLnb.form);
            obj.set_taborder("3");
            obj.set_binddataset("dsMyMenu");
            obj.set_treeuseline("false");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseimage("false");
            obj.set_treeinitstatus("expand,all");
            obj.set_cssclass("grd_LF_Menu");
            obj.set_extendsizetype("row");
            obj.set_autofittype("col");
            obj.set_autosizingtype("row");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"152\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:m_name\"/></Band></Format></Formats>");
            this.divLnb.addChild(obj.name, obj);

            obj = new Div("divMyMenuEdit","15","97","182","26",null,null,null,null,null,null,this.divLnb.form);
            obj.set_taborder("4");
            obj.set_text("div00");
            obj.set_visible("false");
            this.divLnb.addChild(obj.name, obj);

            obj = new Button("btnEdit","150","0","32","20",null,null,null,null,null,null,this.divLnb.form.divMyMenuEdit.form);
            obj.set_taborder("0");
            obj.set_text("편집");
            obj.set_cssclass("btn_LF_Edit");
            this.divLnb.form.divMyMenuEdit.addChild(obj.name, obj);

            obj = new Button("btnCancel","107","0","40","20",null,null,null,null,null,null,this.divLnb.form.divMyMenuEdit.form);
            obj.set_taborder("1");
            obj.set_text("취소");
            obj.set_cssclass("btn_LF_Cancel");
            obj.set_visible("false");
            this.divLnb.form.divMyMenuEdit.addChild(obj.name, obj);

            obj = new Button("btnSave","64","0","40","20",null,null,null,null,null,null,this.divLnb.form.divMyMenuEdit.form);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_LF_Save");
            obj.set_visible("false");
            this.divLnb.form.divMyMenuEdit.addChild(obj.name, obj);

            obj = new Button("btnUp","0","0","20","20",null,null,null,null,null,null,this.divLnb.form.divMyMenuEdit.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_LF_Up");
            obj.set_visible("false");
            this.divLnb.form.divMyMenuEdit.addChild(obj.name, obj);

            obj = new Button("btnDown","23","0","20","20",null,null,null,null,null,null,this.divLnb.form.divMyMenuEdit.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_LF_Down");
            obj.set_visible("false");
            this.divLnb.form.divMyMenuEdit.addChild(obj.name, obj);

            obj = new Static("staLine","0","25","182","1",null,null,null,null,null,null,this.divLnb.form.divMyMenuEdit.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_LF_Line");
            obj.set_visible("false");
            this.divLnb.form.divMyMenuEdit.addChild(obj.name, obj);

            obj = new PopupDiv("pdivSearchMenu","226","44","210","220",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_cssclass("pdiv_LF_Sch");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMenuList","20","10",null,null,"0","0",null,null,null,null,this.pdivSearchMenu.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsMenuSearch");
            obj.set_treeuseline("false");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseimage("false");
            obj.set_treeinitstatus("expand,all");
            obj.set_cssclass("grd_LF_Menu");
            obj.set_extendsizetype("row");
            obj.set_autofittype("col");
            obj.set_autosizingtype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"152\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:m_name\"/></Band></Format></Formats>");
            this.pdivSearchMenu.addChild(obj.name, obj);

            obj = new Edit("edtMenuSearch","0","0",null,"42","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("edi_LF_Sch");
            obj.set_displaynulltext("메뉴명을 입력하세요.");
            this.addChild(obj.name, obj);

            obj = new Button("btnMenuSearch","edtMenuSearch:-36","7","27","25",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_LF_Sch");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divLnb.form.divMyMenuEdit.form
            obj = new Layout("default","",0,0,this.divLnb.form.divMyMenuEdit.form,function(p){});
            this.divLnb.form.divMyMenuEdit.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divLnb.form
            obj = new Layout("default","",0,0,this.divLnb.form,function(p){});
            this.divLnb.form.addLayout(obj.name, obj);

            //-- Default Layout : this.pdivSearchMenu.form
            obj = new Layout("default","",0,0,this.pdivSearchMenu.form,function(p){});
            this.pdivSearchMenu.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",210,850,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("frmLeft.xfdl","Lib::Lib_Util.xjs");
        this.registerScript("frmLeft.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	frmLeft.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2020/11/24
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2020/11/24			TOBESOFT					최초생성
        *******************************************************************************
        */
        this.executeIncludeScript("Lib::Lib_Util.xjs"); /*include "Lib::Lib_Util.xjs"*/;
        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();

        this.fvMenuStatus	= "close";		// Left 메뉴 접기/펼치기 상태값 (open, close)
        this.fvIsBackSpace 	= "N";			// 메뉴검색에서 백스페이스 눌렀는 지 여부
        this.fvMenuType		= "menu";		// menu, mymenu
        this.fvMyMenuEdit	= false;
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        /**
         * @description 화면 오픈
         */

        this.form_onload = function(obj,e)
        {
        	//this.gfnFormOnload(obj,e); //필수함수

        	this.divLnb.form.set_scrollbartype("none");

        	// 마이메뉴 gdsMyMenu 카피
        	this.fnCopyMyMenu();

        	// 그리드 Row Size 셋팅
        	this.fnSetGridRowSize();

        	// 메뉴 찾기 셋팅
        	this.fnSetMenuSearch();

        	// left top mdi화면 오픈 확인 후 sessionStorage 확인
        	this.lfnOpenFrmCount();
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/


        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	switch(sSvcId)
        	{

        	}
        };

        /**
         * @description 메세지 콜백
        */
        this.fnMsgCallback = function (sMsgId, sVal)
        {
        	// 해당 메뉴를 즐겨찾기 목록에서 삭제하시겠습니까?
        	if(sMsgId =="confirm.general")
        	{
        		if(sVal == true)
        		{
        			// 마이메뉴 저장 트랜잭션 호출
        			this.fnSaveMyMenu();
        		}
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/


        /**
         * @description 좌측 메뉴 변경
         * @param 필수 {string} sClickMenuId – 클릭한 메뉴 ID
         */
        this.fnChangeLeftMenu = function(sClickMenuId)
        {
        	var nClickMenuRow = -1;
        	var nFirstMenuRow = -1;

        	nFirstMenuRow = this.gfnFindData(this.objApp.gdsMenu, this.FRAME_MENUCOLUMNS.menuId, this.dsMenu.getColumn(0, this.FRAME_MENUCOLUMNS.menuId));
        	nClickMenuRow = this.gfnFindData(this.objApp.gdsMenu, this.FRAME_MENUCOLUMNS.menuId, sClickMenuId);

        	if( nClickMenuRow > -1 ) {
        		this.fnSetGridRowSize();
        	}
        };

        /**
         * @description 메뉴 접기/펼치기 상태값 가져오기
         */
        this.fnGetMenuOpenClose = function()
        {
        	return this.fvMenuStatus;
        };

        /**
         * @description 메뉴 접기/펼치기 상태값 셋팅
         */
        this.fnSetMenuOpenClose = function(sStatus)
        {
        	if (sStatus == "open")
        	{
        		this.gfnShowLeftFrame();
        	} else if (sStatus == "close")
        	{
        		this.gfnHideLeftFrame();
        	}
        };

        /**
         * @description  tree 메뉴에서 선택한 Row의 Root를 제외한 collapse 처리
        */
        this.fnExceptSelfCollapse = function(objGrid, nCurRow)
        {
        	objGrid.set_enableredraw(false);
        	objGrid.set_enableevent(false);

        	var sTreePath = objGrid.getTreePath(nCurRow);
        	var sLeaf;
        	var bRet;

        	//선택한 행 하단 startlevel collapse 처리
        	for (var i = nCurRow+1; i < objGrid.getBindDataset().rowcount; i++)
        	{
        		bRet = objGrid.isTreeLeafRow(i);
        		//자식이 있다면
        		if (!bRet) {

        			if (objGrid.getTreePath(i).indexOf(sTreePath) > -1) {
        				var nParentRow   = objGrid.getTreeParentRow(i);
        				var nFirstRow    = objGrid.getTreeChildRow(nCurRow, 0);
        				var nParnetRow2  = objGrid.getTreeParentRow(nCurRow);
        				var nFirstRow2   = objGrid.getTreeChildRow(i, 0);

        				if(objGrid.getBindDataset().getColumn(nCurRow, this.FRAME_MENUCOLUMNS.menuLevel) instanceof nexacro.Decimal) {
        					sLeaf = parseInt(objGrid.getBindDataset().getColumn(nCurRow, this.FRAME_MENUCOLUMNS.menuLevel));
        				} else {
        					sLeaf = objGrid.getBindDataset().getColumn(nCurRow, this.FRAME_MENUCOLUMNS.menuLevel);
        				}

        				if(sLeaf == 1) {
        					if(nCurRow == nParentRow && i == nFirstRow) {
        						objGrid.setTreeStatus(objGrid.getTreeRow(i), true);
        					} else {
        						objGrid.setTreeStatus(objGrid.getTreeRow(i), false);
        					}
        				} else {
        					if(nParentRow == nParnetRow2 && nFirstRow == nFirstRow2) {
        						objGrid.setTreeStatus(objGrid.getTreeRow(i), true);
        						sTreePath = objGrid.getTreePath(i);
        					} else {
        						objGrid.setTreeStatus(objGrid.getTreeRow(i), false);
        					}
        				}
        			} else {
        				objGrid.setTreeStatus(objGrid.getTreeRow(i), false);
        			}
        		}
        	}

        	//선택한 행 상단 startlevel collapse 처리
        	for (var i = nCurRow; i >= 0; --i)
        	{
        		bRet = objGrid.isTreeLeafRow(i);
        		//자식이 있다면
        		if (!bRet) {
        			if (sTreePath.indexOf(objGrid.getTreePath(i)) > -1 ) {

        			} else {
        				objGrid.setTreeStatus(objGrid.getTreeRow(i) ,false);
        			}
        		}
        	}

        	objGrid.set_enableevent(true);
        	objGrid.set_enableredraw(true);
        };

        /**
         * @description FORM오픈 [공통함수호출]
        */
        this.fnFormOpen = function (sMenuId, objParam)
        {
        	// Frame.js 에서 sMenuId nullcheck를 한다
        	// if(this.gfnIsNull(sMenuId)) return;


        	this.gfnOpenMenu(sMenuId, objParam, false);

        	trace("test");
        //
        // 	var param = {
        // 		"status" : "detail"
        // 	};
        //
        // 	var sMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        // 	var sMenuUrl = 'testsample::/LIF052M00.xfdl';
        // 	var actNm = '인계인수신청 상세';
        //
        // 	this.gfnPageOpen(sMenuId, sMenuUrl, actNm, param);
        };

        /**
         * @description 그리드 RowSize 셋팅
        */
        this.fnSetGridRowSize = function()
        {
        	var objGrid = this.divLnb.form.grdMenu;
        	objGrid.set_enableredraw(false);

        	for(var i=0; i < this.dsMenu.rowcount; i++)
        	{
        		var grdRow = objGrid.getTreeRow(i);
        		var css = objGrid.getCellPropertyValue(grdRow, 0, "cssclass");

        		if( css == "cell_LF_Lev"){
        			objGrid.setRealRowSize(grdRow,"50");
        		}else{
        			objGrid.setRealRowSize(grdRow,"25");
        		}
        	}
        	objGrid.set_enableredraw(true);
        };

        /**
         * @description 메뉴 찾기 셋팅(Menu List Box 생성)
        */
        this.fnSetMenuSearch = function()
        {
        	// 메뉴 검색 팝업DIV 위치 에디트 하단으로 이동
        	this.pdivSearchMenu.move(0, 42);

        	// 메뉴 Datset 복사
        	this.fnSetMenuSearchDataset();
        };

        /**
         * @description Menu List Control
        */
        this.fnSetSearchGrid = function(searchValue)
        {
        	if(this.gfnIsNull(searchValue) || this.dsMenuSearch.getRowCount() < 1)
        	{
        		// 메뉴검색 팝업 닫기
        		this.fnCloseMenuSearchPopup();
        	} else
        	{
        		//var iSearchCount = this.dsMenu.getCaseCount("(String(" + this.FRAME_MENUCOLUMNS.menuNm + ").toLowerCase()).indexOf('" + sSearchValue + "') >= 0");
        		//trace("iSearchCount : " + iSearchCount);
        		//trace("this.FRAME_MENUCOLUMNS : " + "(String(" + this.FRAME_MENUCOLUMNS.menuNm + ").toLowerCase()).indexOf('" + sSearchValue + "') >= 0");

        		var sSearchValue = searchValue.toLowerCase();

        		//if(iSearchCount >= 0)
        		//{


        		// 메뉴검색 팝업 열기
        		this.fnOpenMenuSearchPopup();



         		this.dsMenuSearch.filter("( (String(" + this.FRAME_MENUCOLUMNS.menuNm + ").toLowerCase()).indexOf('" + sSearchValue + "') >= 0"
         								+ " || (String(" + this.FRAME_MENUCOLUMNS.menuId + ").toLowerCase()).indexOf('" + sSearchValue + "') == 0 )"
         								+ " && " + this.FRAME_MENUCOLUMNS.useYn + " == '1' && " + this.FRAME_MENUCOLUMNS.menuLevel + " == '1'");

        		if(this.dsMenuSearch.getRowCount() > 1)
        		{
        			this.dsMenuSearch.set_rowposition(0);
        		}


        		//}
        	}

        	this.edtMenuSearch.setFocus();
        };

        /**
         * @description 전체메뉴 dataset 변경 함수
        */
        this.fnSetMenuSearchDataset = function()
        {
        	var filterExpr = "";

        	if (this.fvMenuType == "menu"){
        		// 메뉴일 경우
        		this.objApp.gdsMenu.set_enableevent(false);
        		this.dsMenuSearch.set_enableevent(false);
        		this.objApp.gdsMenu.filter(filterExpr);

        		this.dsMenuSearch.copyData(this.objApp.gdsMenu, true);
        		this.objApp.gdsMenu.filter("");

        		this.objApp.gdsMenu.set_enableevent(true);
        		this.dsMenuSearch.set_enableevent(true);

        	} else {
        // 		// 마이메뉴일 경우
        // 		this.objApp.gdsMyMenu.set_enableevent(false);
        // 		this.dsMenuSearch.set_enableevent(false);
        //
        // 		this.dsMenuSearch.copyData(this.objApp.gdsMyMenu, true);
        // 		this.dsMenuSearch.filter(filterExpr);
        //
        // 		this.objApp.gdsMyMenu.set_enableevent(true);
        // 		this.dsMenuSearch.set_enableevent(true);
        	}
        };

        /**
         * @description 메뉴 검색시 셋팅 & 메뉴 이동
        */
        this.fnSetMenuMove = function(obj)
        {
        	// 검색 Column Name Setting
        	var sColNm = "";
        	if(obj.name == "edtMenuSearch") sColNm = this.FRAME_MENUCOLUMNS.menuNm;
        	else sColNm = this.FRAME_MENUCOLUMNS.menuId;

        	// 메뉴ID 검색
        	var nMenuRow = 0;

        	var nRow = this.dsMenuSearch.rowposition;
        	var sMenuId = this.dsMenuSearch.getColumn(nRow, this.FRAME_MENUCOLUMNS.menuId);

        	// 그리드에서 선택된 값을 텍스트 에디터로 입력
        	if(obj.name == "grdMenuList")
        	{
        		var selectValue = this.dsMenuSearch.getColumn(nRow, this.FRAME_MENUCOLUMNS.menuNm);
        		this.edtMenuSearch.set_value(selectValue);
        	}

        	// 존재하지 않는 메뉴를 검색을 했을 경우 미진행
        	if(this.gfnIsNull(sMenuId)) return;

        	// Dataset Row Number
        	nMenuRow = this.dsMenu.findRow(sColNm, sMenuId);

        	// 그리드 선택
        	var objGrid = this.divLnb.form.grdMenu;

        	// 메뉴 선택
        	var curRow = objGrid.getTreeRow(nMenuRow);
        	objGrid.selectRow(curRow);

        	// Frame.js 에서 sMenuId nullcheck를 한다
        // 	// 검색한 메뉴 선택
        // 	if(this.gfnIsNull(sMenuId) == false)
        // 	{
        // 		// 메뉴 화면 호출
        // 		this.fnFormOpen(sMenuId);
        // 	}

        	// 메뉴 화면 호출
        	this.fnFormOpen(sMenuId);
        };

        /**
         * @description 메뉴 검색 팝업 열기
         */
        this.fnOpenMenuSearchPopup = function()
        {
        	if(!this.pdivSearchMenu.isPopup())
        	{
        		this.pdivSearchMenu.trackPopupByComponent(this.edtMenuSearch, 0, 0 + this.edtMenuSearch.height, 210, 220, "", false);
        	}
        };

        /**
         * @description 메뉴 검색 팝업 닫기
         */
        this.fnCloseMenuSearchPopup = function()
        {
        	if(this.pdivSearchMenu.isPopup())
        	{
        		this.pdivSearchMenu.closePopup();
        		return;
        	}
        };

        /**
         * @description 메뉴/마이메뉴 설정
         */
        this.fnSetMenuType = function(sType)
        {
        	if(sType == "menu")	{
        		// 메뉴
        		this.divLnb.form.grdMenu.set_visible(true);
        		this.divLnb.form.grdMyMenu.set_visible(false);
        		this.divLnb.form.btnMenu.set_cssclass("btn_LF_MenuS");
        		this.divLnb.form.btnMyMenu.set_cssclass("btn_LF_Fav");
        		this.divLnb.form.divMyMenuEdit.set_visible(false);
        // 			this.divLnb.form.btnUp.set_visible(false);
        // 			this.divLnb.form.btnDown.set_visible(false);
        // 			this.divLnb.form.btnSave.set_visible(false);
        // 			this.divLnb.form.btnCancel.set_visible(false);
        // 			this.divLnb.form.staLine.set_visible(false);
        // 			this.divLnb.form.btnEdit.set_visible(false);
        	} else{
        		 // 마이메뉴
        		this.divLnb.form.grdMyMenu.set_visible(true);
        		this.divLnb.form.grdMenu.set_visible(false);
        		this.divLnb.form.btnMenu.set_cssclass("btn_LF_Menu");
        		this.divLnb.form.btnMyMenu.set_cssclass("btn_LF_FavS");
        		this.divLnb.form.divMyMenuEdit.set_visible(true);
        // 			this.divLnb.form.staLine.set_visible(true);
        // 			this.divLnb.form.btnEdit.set_enable(true);
        // 			this.divLnb.form.btnEdit.set_visible(true);
        // 			this.divLnb.form.grdMyMenu.set_formats('<Formats><Format id="default"><Columns><Column size="152"/></Columns><Rows><Row size="24"/></Rows><Band id="body"><Cell text="bind:MENU_NM"/></Band></Format></Formats>');
        	}

        	this.fvMenuType = sType;
        };

        // 마이메뉴 저장
        this.fnSaveMyMenu = function ()
        {
        	var strMymenu = "";
        	var nRow = this.dsMyMenu.getRowCount();
        	for(var i=0; i<nRow; i++)
        	{
        		strMymenu += (this.dsMyMenu.getColumn(i, this.FRAME_MENUCOLUMNS.menuId) + ",");
        	}

        	nexacro.setPrivateProfile(this.objApp.gdsUser.getColumn(0, "USER_ID"),strMymenu);

        	this.fnEndMyMenuEdit();
        };


        /**
         * @description 마이메뉴 gdsMyMenu 카피
         */
        this.fnCopyMyMenu = function()
        {
        	var objGdsMyMenu = this.objApp.gdsMyMenu;

        	this.dsMyMenu.clear();
        	this.dsMyMenu.copyData(objGdsMyMenu);
        };

        // 마이메뉴 편집상태에서 기본상태로 돌리기
        this.fnEndMyMenuEdit = function ()
        {
        	this.fvMyMenuEdit = false;
        	this.divLnb.form.divMyMenuEdit.form.btnUp.set_visible(false);
        	this.divLnb.form.divMyMenuEdit.form.btnDown.set_visible(false);
        	this.divLnb.form.divMyMenuEdit.form.btnSave.set_visible(false);
        	this.divLnb.form.divMyMenuEdit.form.btnCancel.set_visible(false);
        	this.divLnb.form.divMyMenuEdit.form.btnEdit.set_enable(true);
        	//this.Grid00.deleteContentsCol("body", 1 ,false);
        	this.divLnb.form.grdMyMenu.set_formats('<Formats><Format id="default"><Columns><Column size="152"/></Columns><Rows><Row size="24"/></Rows><Band id="body"><Cell text="bind:m_name"/></Band></Format></Formats>');
        };


        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        /**
         * @description 그리드 메뉴 click
         */
        this.grdMenu_oncellclick = function(obj,e)
        {
        	// Tree 이미지 클릭시 리턴
        	if(e.clickitem == "treeitembutton") return;

        	var nRow = obj.getTreeRow(e.row);

        	// true 는 false 로 false 는 true 로 변경^1
        	var nStat = obj.getTreeStatus(nRow)^1;

        	// 자식이 없으면
        	if(nStat != 2)
        	{
        		obj.setTreeStatus(nRow ,nStat);
        		return;
        	}


        	// Click시 해당 메뉴 호출
        	var sMenuId = this.dsMenu.getColumn(this.dsMenu.rowposition, this.FRAME_MENUCOLUMNS.menuId);
        	var sPageUrl = this.dsMenu.getColumn(this.dsMenu.rowposition, this.FRAME_MENUCOLUMNS.menuUrl);


        	// Frame.js 에서 sMenuId nullcheck를 한다
        // 	if(!(this.gfnIsNull(sMenuId) || this.gfnIsNull(sPageUrl))){
        // 		// 메뉴 화면 호출
        // 		this.fnFormOpen(sMenuId);
        // 	}

        	// 메뉴 화면 호출
        	this.fnFormOpen(sMenuId);
        };

        /**
         * @description  메뉴/마이메뉴 버튼 클릭
        */
        this.btnMenu_onclick = function(obj,e)
        {
        	this.fvMyMenuClick = true;
        	var sType = String(obj.name).substr(3).toLowerCase();
        	var sCssClass = obj.cssclass;

        	if (sCssClass.indexOf("S") == sCssClass.length -1) return;

        	// 메뉴 설정
        	this.fnSetMenuType(sType);

        	// 메뉴검색 Dataset 변경
        	this.fnSetMenuSearchDataset();
        };

        /**
         * @description  마이메뉴 그리드 삭제버튼 클릭
        */
        this.divLnb_grdMyMenu_oncellclick = function(obj,e)
        {
        	var nCellIdx = e.cell;

        	// 선택한 메뉴 아이디
        	var sMenuId = this.dsMyMenu.getColumn(this.dsMyMenu.rowposition, this.FRAME_MENUCOLUMNS.menuId);

        	if (nCellIdx == 0){
        		if(this.fvMyMenuEdit) return;
        		// 메뉴 클릭일 경우
        		this.fnFormOpen(sMenuId);
        	} else if (nCellIdx == 1) {
        		if(!this.fvMyMenuEdit) return;
        		// X 버튼일 경우
        		this.dsMyMenu.deleteRow(obj.getDatasetRow(e.row));
        	}
        };

        /**
         * @description 메뉴 검색 버튼 클릭 이벤트
         */
        this.btnMenuSearch_onclick = function(obj,e)
        {
        	var objEdit = this.edtMenuSearch;
        	var sMenuStr = objEdit.value;
        	if(this.gfnIsNull(sMenuStr))
        	{
        		return;
        	}

        	this.dsMenuSearch.set_enableevent(false);
        	this.dsMenuSearch.filter("");
        	this.fnSetSearchGrid(objEdit.value);
        	this.dsMenuSearch.set_enableevent(true);

        };

        /**
         * @description 메뉴 검색 입력창 키입력 이벤트
         */
        this.edtMenuSearch_onkeyup = function(obj,e)
        {
        	 var searchValue = obj.value;

        	if(e.keycode == "40"){
        		// 아래 화살표를 눌렀을 경우 : 리스트 선택하기
        		if(this.pdivSearchMenu.isPopup()){
        			var nRow = this.dsMenuSearch.rowposition;
        			this.pdivSearchMenu.form.grdMenuList.setFocus();

        			if (nRow == this.dsMenuSearch.getRowCount() -1){
        				this.dsMenuSearch.set_rowposition(0);
        			} else {
        				this.dsMenuSearch.set_rowposition(nRow + 1);
        			}
        		}
        		return;
        	}else if(e.keycode == "13"){
        		//enter
        		this.fvIsBackSpace = "N";
        		this.btnMenuSearch_onclick();
        	}else if(e.keycode == "27"){
        		//Esc키를 눌렀을 경우 : 그리드를 사라지게 구성
        		this.fnCloseMenuSearchPopup();
        		return;
        	}
        };

        /**
         * @description 메뉴 검색 그리드 oncellclick 이벤트
        */
        this.pdivSearchMenu_grdMenuList_oncellclick = function(obj,e)
        {
        	this.fnSetMenuMove(obj);
            this.fnCloseMenuSearchPopup();
        };

        /**
         * @description  메뉴 검색 그리드 onkeyup 이벤트
        */
        this.pdivSearchMenu_grdMenuList_onkeyup = function(obj,e)
        {
        	if(e.keycode == "13"){
        		// 그리드에서 Enter키를 눌렀을 경우 : 선택된 값을 TextBox에 입력하고 그리드는 사라지게 구성
        		// 메뉴 이동 및 호출
        		this.fnSetMenuMove(obj);

        		// 메뉴 호출 후 그리드 닫기
        		this.fnCloseMenuSearchPopup();
        	}else if(e.keycode == "27"){
        		// 그리드에서 Esc키를 눌렀을 경우 : 그리드를 사라지게 구성
        		this.fnCloseMenuSearchPopup();
        	}
        };

        this.divLnb_btnUp_onclick = function(obj,e)
        {
        	if(this.dsMyMenu.rowposition != 0){
        		var nSortOrdr1 = this.dsMyMenu.getColumn(this.dsMyMenu.rowposition-1,"SORT_ORDR");
        		var nSortOrdr2 = this.dsMyMenu.getColumn(this.dsMyMenu.rowposition,"SORT_ORDR");
        		this.dsMyMenu.setColumn(this.dsMyMenu.rowposition, "SORT_ORDR", nSortOrdr1);
        		this.dsMyMenu.setColumn(this.dsMyMenu.rowposition-1, "SORT_ORDR", nSortOrdr2);
        		this.dsMyMenu.exchangeRow(this.dsMyMenu.rowposition,this.dsMyMenu.rowposition-1);

        	}
        };

        this.divLnb_btnDown_onclick = function(obj,e)
        {
        	if(this.dsMyMenu.rowposition < this.dsMyMenu.rowcount-1){
        		var nSortOrdr1 = this.dsMyMenu.getColumn(this.dsMyMenu.rowposition+1,"SORT_ORDR");
        		var nSortOrdr2 = this.dsMyMenu.getColumn(this.dsMyMenu.rowposition,"SORT_ORDR");
        		this.dsMyMenu.setColumn(this.dsMyMenu.rowposition, "SORT_ORDR", nSortOrdr1);
        		this.dsMyMenu.setColumn(this.dsMyMenu.rowposition+1, "SORT_ORDR", nSortOrdr2);
        		this.dsMyMenu.exchangeRow(this.dsMyMenu.rowposition,this.dsMyMenu.rowposition+1);
        	}
        };

        this.divLnb_btnSave_onclick = function(obj,e)
        {
        	if (this.gfnDsIsUpdated(this.dsMyMenu) == false) {
        		// 저장할 데이터가 없습니다.
        		this.gfnAlert("msg.save.nochange");
        		return;
        	}
        	var sMsgId = "confirm.general";
        	var sPopId = sMsgId;
        	var sCallback = "fnMsgCallback";
        	var arrArg = ["즐겨찾기 목록을 저장하시겠습니까?"];

        	// 해당 메뉴를 즐겨찾기 목록에서 삭제하시겠습니까?
        	this.gfnAlert(sMsgId, arrArg, sPopId, sCallback);
        };

        this.divLnb_btnEdit_onclick = function(obj,e)
        {
        	this.fvMyMenuEdit = true;
        	this.divLnb.form.divMyMenuEdit.form.btnUp.set_visible(true);
        	this.divLnb.form.divMyMenuEdit.form.btnDown.set_visible(true);
        	this.divLnb.form.divMyMenuEdit.form.btnSave.set_visible(true);
        	this.divLnb.form.divMyMenuEdit.form.btnCancel.set_visible(true);
        	this.divLnb.form.divMyMenuEdit.form.btnEdit.set_enable(false);
        	//this.divLnb.form.grdMyMenu.setFormatColProperty(1,"size",40);
        	//this.divLnb.form.grdMyMenu.setCellProperty( "body", 1, "displaytype", "buttoncontrol");
        	//this.divLnb.form.grdMyMenu.setCellProperty( "body", 1, "edittype", "button");
        	this.divLnb.form.grdMyMenu.set_formats('<Formats><Format id="default"><Columns><Column size="152"/><Column size="40"/></Columns><Rows><Row size="24"/></Rows><Band id="body"><Cell text="bind:m_name"/><Cell col="1" displaytype="buttoncontrol" edittype="button"/></Band></Format></Formats>');
        };

        this.divLnb_btnCancel_onclick = function(obj,e)
        {
        	this.fnEndMyMenuEdit();

        	this.dsMyMenu.reset();

        	this.dsMyMenu.set_keystring("S:+SORT_ORDR");
        };




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divLnb.form.grdMenu.addEventHandler("oncellclick",this.grdMenu_oncellclick,this);
            this.divLnb.form.btnMenu.addEventHandler("onclick",this.btnMenu_onclick,this);
            this.divLnb.form.btnMyMenu.addEventHandler("onclick",this.btnMenu_onclick,this);
            this.divLnb.form.grdMyMenu.addEventHandler("oncellclick",this.divLnb_grdMyMenu_oncellclick,this);
            this.divLnb.form.divMyMenuEdit.form.btnEdit.addEventHandler("onclick",this.divLnb_btnEdit_onclick,this);
            this.divLnb.form.divMyMenuEdit.form.btnCancel.addEventHandler("onclick",this.divLnb_btnCancel_onclick,this);
            this.divLnb.form.divMyMenuEdit.form.btnSave.addEventHandler("onclick",this.divLnb_btnSave_onclick,this);
            this.divLnb.form.divMyMenuEdit.form.btnUp.addEventHandler("onclick",this.divLnb_btnUp_onclick,this);
            this.divLnb.form.divMyMenuEdit.form.btnDown.addEventHandler("onclick",this.divLnb_btnDown_onclick,this);
            this.pdivSearchMenu.form.grdMenuList.addEventHandler("oncellclick",this.pdivSearchMenu_grdMenuList_oncellclick,this);
            this.pdivSearchMenu.form.grdMenuList.addEventHandler("onkeyup",this.pdivSearchMenu_grdMenuList_onkeyup,this);
            this.edtMenuSearch.addEventHandler("onkeyup",this.edtMenuSearch_onkeyup,this);
            this.btnMenuSearch.addEventHandler("onclick",this.btnMenuSearch_onclick,this);
        };
        this.loadIncludeScript("frmLeft.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
