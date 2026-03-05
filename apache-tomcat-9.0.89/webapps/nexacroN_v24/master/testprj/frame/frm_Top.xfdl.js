(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_Top");
            this.set_scrollbartype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,70);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"UP_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MODULE_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staLogo","40.00","10","155","54",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_TF_Logo");
            this.addChild(obj.name, obj);

            obj = new Button("btnGo","50%","0","318","0",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("본문바로가기");
            this.addChild(obj.name, obj);

            obj = new Menu("Menu01","240","12",null,null,"250","10",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_innerdataset("dsMenu");
            obj.set_levelcolumn("MENU_LVL");
            obj.set_captioncolumn("MENU_NM");
            obj.set_idcolumn("MENU_ID");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnLogout",null,"110","39",null,"-220","-110",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_tooltiptext("로그아웃");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divTopBtn","250.00","210","1420","70",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_formscrollbartype("none none");
            obj.set_visible("false");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Panel("PanelRigntBtn",null,"12","222","50","40",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_flexmainaxisalign("end");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"btn00_00_00_00\"/><PanelItem id=\"PanelItem04\" componentid=\"btn01\"/><PanelItem id=\"PanelItem01\" componentid=\"btn00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"btn00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00_00_00","56.00","0","36","36",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_tooltiptext("검색");
            obj.set_cssclass("btn_TF_Search");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","116.00","0","36","36",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_tooltiptext("로그인");
            obj.set_cssclass("btn_TF_Login");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00","176.00","0","36","36",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_tooltiptext("사용자");
            obj.set_cssclass("btn_TF_Join");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","236.00","0","36","36",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_tooltiptext("메뉴");
            obj.set_cssclass("btn_TF_MenuList");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTopBtn.form
            obj = new Layout("default","",0,0,this.divTopBtn.form,function(p){});
            obj.set_type("horizontal");
            obj.set_horizontalgap("40");
            obj.set_spacing("                            ");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("start");
            obj.set_flexwrap("nowrap");
            this.divTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1920,70,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_scrollbartype("none");

                p.staLogo.set_taborder("0");
                p.staLogo.set_cssclass("sta_TF_Logo");
                p.staLogo.move("40.00","10","155","54",null,null);

                p.btnGo.set_taborder("1");
                p.btnGo.set_text("본문바로가기");
                p.btnGo.move("50%","0","318","0",null,null);

                p.Menu01.set_taborder("2");
                p.Menu01.set_innerdataset("dsMenu");
                p.Menu01.set_levelcolumn("MENU_LVL");
                p.Menu01.set_captioncolumn("MENU_NM");
                p.Menu01.set_idcolumn("MENU_ID");
                p.Menu01.set_visible("true");
                p.Menu01.move("240","12",null,null,"250","10");

                p.btnLogout.set_taborder("3");
                p.btnLogout.set_tooltiptext("로그아웃");
                p.btnLogout.set_visible("false");
                p.btnLogout.move(null,"110","39",null,"-220","-110");

                p.divTopBtn.set_taborder("4");
                p.divTopBtn.set_text("");
                p.divTopBtn.set_formscrollbartype("none none");
                p.divTopBtn.set_visible("false");
                p.divTopBtn.set_formscrolltype("none");
                p.divTopBtn.move("250.00","210","1420","70",null,null);

                p.PanelRigntBtn.set_taborder("5");
                p.PanelRigntBtn.set_flexmainaxisalign("end");
                p.PanelRigntBtn.set_flexcrossaxisalign("center");
                p.PanelRigntBtn.move(null,"12","222","50","40",null);

                p.btn00_00_00_00.set_taborder("6");
                p.btn00_00_00_00.set_tooltiptext("검색");
                p.btn00_00_00_00.set_cssclass("btn_TF_Search");
                p.btn00_00_00_00.move("56.00","0","36","36",null,null);

                p.btn01.set_taborder("7");
                p.btn01.set_tooltiptext("로그인");
                p.btn01.set_cssclass("btn_TF_Login");
                p.btn01.set_text("");
                p.btn01.move("116.00","0","36","36",null,null);

                p.btn00_00.set_taborder("8");
                p.btn00_00.set_tooltiptext("사용자");
                p.btn00_00.set_cssclass("btn_TF_Join");
                p.btn00_00.move("176.00","0","36","36",null,null);

                p.btn00.set_taborder("9");
                p.btn00.set_tooltiptext("메뉴");
                p.btn00.set_cssclass("btn_TF_MenuList");
                p.btn00.set_visible("false");
                p.btn00.move("236.00","0","36","36",null,null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","",480,60,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divTopBtn.set_visible("false");

                p.staLogo.set_cssclass("sta_TF_LogoM");
                p.staLogo.move("10.00","13","176","33",null,null);

                p.PanelRigntBtn.move(null,"18","222","24","10",null);


                p.Menu01.set_visible("false");

                p.btn00.set_visible("true");
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
        this.registerScript("frm_Top.xfdl", function() {
        /**
        *  인천공항 원스톱 입주자서비스 프로젝트
        *  @FileName 	frm_Top.xfdl
        *  @Creator 	(주)이루온
        *  @CreateDate 	2024/07/24
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/07/24				김완성						최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        this.fvFirstGap 		= 0;
        this.fvBtnGap 			= 0;
        this.fvBtnHeight 		= 46;
        this.fvTopBtnPrefix 	= "TOP_";

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.Form_Top_onload = function(obj,e) {
        	this.gfnFormOnload(obj);

        	//this.divTopBtn.form.set_scrollbartype("none");

        	this.fnInit();

        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        this.fnInit = function () {

        	var userId = this.objApp.gdsUser.getColumn(0, "userId");

        	if(this.gfnIsNull(userId))
        	{
        		this.btn00_00.set_cssclass("btn_TF_Join");
        		this.btn00_00.set_tooltiptext("회원가입");
        		this.btn01.set_cssclass("btn_TF_Login");
        		this.btn01.set_tooltiptext("로그인");
        	} else {
        		this.btn00_00.set_cssclass("btn_TF_User");
        		this.btn00_00.set_tooltiptext("사용자");
        		this.btn01.set_cssclass("btn_TF_Logout");
        		this.btn01.set_tooltiptext("로그아웃");
        	}

        	var sFilter = this.FRAME_MENUCOLUMNS.menuLevel + " == '0' ";
        	this.objApp.gdsMenu.filter(sFilter);

        	// Top 메뉴 복사
        	this.dsMenu.copyData(this.objApp.gdsMenu, true);
        	this.objApp.gdsMenu.filter("");
        	// Top 메뉴 셋팅
        //	this.fnSetTopMenu();
        };

        this.fnSetTopMenu = function () {

        	for (var i = 0; i < this.dsMenu.getRowCount(); i++)
        	{
        		var sMenuId = this.dsMenu.getColumn(i, this.FRAME_MENUCOLUMNS.menuId);
        		var sMenuName = this.dsMenu.getColumn(i, this.FRAME_MENUCOLUMNS.menuNm);

        		this.fnCreateTopMenu(sMenuId, sMenuName, i);
        	}

        	// 메뉴버튼 Redraw
        	this.fnRedrawBtn();
        };

        this.fnCreateTopMenu = function (sTopId, sName, index) {

        	// Creating page button
        	var objBtn = new Button();
        	objBtn.init(this.fvTopBtnPrefix + sTopId, this.fnGetLeft(sTopId), 0, 0, this.fvBtnHeight, null, null);

        	if(this.divTopBtn.form.components[objBtn.name] != undefined) {
        		this.divTopBtn.form.removeChild(this.divTopBtn.form.components[objBtn.name].id);
        	}

        	this.divTopBtn.form.addChild(objBtn.name, objBtn);
        	objBtn.set_text(sName);
        	objBtn.set_cssclass("btn_TF_Menu");
        	objBtn.menuid = sTopId;
        	objBtn.show();

        	// 버튼 width 셋팅
        	objBtn.set_fittocontents("width");
        	var nWidth = objBtn.getOffsetWidth();
        	objBtn.set_fittocontents("none");
        	objBtn.set_width(nWidth + 20);

        	objBtn.setEventHandler("onclick", this.btnTopMenu_onclick, this);
        };

        this.fnRedrawBtn = function () {
        	// 모든 버튼 체크
        	this.fnCheckShowBtnAll();
        };

        this.fnCheckShowBtnAll = function () {
        	if (this.dsMenu.rowcount == 0) return;

        	var objTopFirst = this.fnFindObj(this.fvTopBtnPrefix + this.dsMenu.getColumn(0, this.FRAME_MENUCOLUMNS.menuId));
        	var objTopLast = this.fnFindObj(this.fvTopBtnPrefix + this.dsMenu.getColumn(this.dsMenu.rowcount - 1, this.FRAME_MENUCOLUMNS.menuId));

        	var nLeft = objTopFirst.getOffsetLeft();
        	var nRight = objTopLast.getOffsetRight();

        	if (this.divTopBtn.getOffsetWidth() >= (nRight - nLeft))
        	{
        		this.fnMoveFirst(0);
        		return;
        	}
        };

        this.fnMoveFirst = function (nMoveIdx) {
        	var nIndex;
        	var sTopId;
        	var objTop;
        	var objTopFirst;

        	nIndex = this.fnGetFirstTopIndex();

        	if (nIndex < 0) return;

        	if (nMoveIdx < 0) return;

        	if (nMoveIdx >= this.dsMenu.rowcount) return;

        	sTopId = this.dsMenu.getColumn(nIndex, this.FRAME_MENUCOLUMNS.menuId);
        	objTopFirst = this.fnFindObj(this.fvTopBtnPrefix + sTopId);

        	sTopId = this.dsMenu.getColumn(nMoveIdx, this.FRAME_MENUCOLUMNS.menuId);
        	objTop = this.fnFindObj(this.fvTopBtnPrefix + sTopId);

        	var nShiftPos = objTop.getOffsetLeft() - objTopFirst.getOffsetLeft();
        	for (var i = 0; i < this.dsMenu.rowcount; i++)
        	{
        		sTopId = this.dsMenu.getColumn(i, this.FRAME_MENUCOLUMNS.menuId);
        		objTop = this.fnFindObj(this.fvTopBtnPrefix + sTopId);
        		objTop.move(objTop.getOffsetLeft() - nShiftPos, objTop.getOffsetTop());
        	}
        };

        this.fnGetFirstTopIndex = function () {
        	for (var i=0; i < this.dsMenu.rowcount;i++)
        	{
        		var sTopID  = this.dsMenu.getColumn(i, this.FRAME_MENUCOLUMNS.menuId);
        		var objTop = this.fnFindObj(this.fvTopBtnPrefix + sTopID);
        		if (this.gfnIsNull(objTop) == false)
        		{
        			if (0 <= objTop.getOffsetLeft()) return i;
        		}
        	}
        	return -1;
        };

        this.fnFindObj = function (sId) {
        	return this.divTopBtn.form.components[sId];
        };

        this.fnGetLeft = function (sTopId) {
        	var nCurRow = this.dsMenu.findRow(this.FRAME_MENUCOLUMNS.menuId, sTopId);
        	if (nCurRow == 0) return this.fvFirstGap;

        	var objPrevTab = this.fnFindObj(this.fvTopBtnPrefix + this.dsMenu.getColumn(nCurRow - 1, this.FRAME_MENUCOLUMNS.menuId));

        	return objPrevTab.getOffsetRight() + this.fvBtnGap;
        };

        this.fnMenuClick = function(sMenuId) {

        	this.objApp.gvVfrs.set_separatesize("108,*,0,0");


        //	this.gfnLeftMenuCreate(sMenuId);
        //	this.gfnMenuFocus(sMenuId);
        //	this.gfnLeftTit(sMenuId);

        	var cMenuId = "0";

        	for(var i=0;i<this.objApp.gvFrmLeft.form.dsMenu.rowcount;i++) {
        		var lv = this.objApp.gvFrmLeft.form.dsMenu.getColumn(i, "MENU_LVL");
        		if(lv == 2) {
        			cMenuId = this.objApp.gvFrmLeft.form.dsMenu.getColumn(i, "MENU_ID");
        			break;
        		}
        	}

        	this.fnFormOpen(cMenuId);
        };



        this.fnFormOpen = function (sMenuId, objParam)
        {
        	if(this.gfnIsNull(sMenuId)) return;
        	this.gfnOpenMenu(sMenuId, objParam, false);
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


        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.btnTopMenu_onclick = function(obj,e) {
        	var sMenuId = obj.menuid;

        	if (this.gfnIsNull(sMenuId)) return;

        	// Top 메뉴 click
        	this.fnMenuClick(sMenuId);
        }

        this.btnLogout_onclick = function(obj,e) {
        	this.gfnAlert("confirm.logout", "", "logout", "fnMsgCallback");
        };

        this.staLogo_onclick = function(obj,e)
        {
        	// 메인으로 이동
        	this.gfnSetMain();
        };


        this.Menu01_onmenuclick = function(obj,e)
        {
        	var userId = this.objApp.gdsUser.getColumn(0, "userId");

        	userId = "admin";

        	if(userId != null && userId != '') {
        		var sMenuId = e.id;

        		this.objApp.gvVfrs.set_separatesize("108,*,0,0");

        		this.gfnLeftMenuCreate(sMenuId);
        		this.gfnMenuFocus(sMenuId);
        		this.gfnLeftTit(sMenuId);

        		var cMenuId = "0";

        		var menuArr = this.objApp.gvFrmLeft.form.dsMenu.extractRows("MENU_LVL == 2");
        		cMenuId = this.objApp.gvFrmLeft.form.dsMenu.getColumn(menuArr[0], "MENU_ID");

        		this.fnFormOpen(cMenuId);
        	} else {
        		var sTitle = "이용안내";
        		var objArg   = {};

        		var objOption = {
        			popuptype: "modal"	//modal,modaless
        	 		, width: 720
        	 		, height: 800			//width,height 지정하지 않음 popup form size적용
        			, autosize: false
        			, title: sTitle
        			, resize: false
        			, titlebar: true
        		};
        		var sPopupCallBack = "fnPopupCallback";

        		this.gfnOpenPopup("crtrUtztnPopup", "work::COM/crtr/crtrUtztnPopup.xfdl", objArg, sPopupCallBack, objOption);
        	}
        };

        this.btn01_onclick = function(obj,e)
        {
        	var userId = this.objApp.gdsUser.getColumn(0, "userId");

        	if (this.gfnIsNull(userId)) {
        		//로그인 페이지 이동
        		this.gfnGoLogin();
        	} else {
        		this.objApp.logoutTransaction();
        	}
        };

        this.btn00_00_onclick = function(obj,e)
        {
        	var userId = this.objApp.gdsUser.getColumn(0, "userId");

        	if (this.gfnIsNull(userId)) {
        		var sTitle = "회원가입 안내";
        		var objArg   = {};

        		var objOption = {
        			popuptype: "modal"	//modal,modaless
        			, width: 800
        			, height: 500			//width,height 지정하지 않음 popup form size적용
        			, autosize: false
        			, title: sTitle
        			, resize: true
        			, titlebar: true
        		};
        		var sPopupCallBack = "fnPopupCallback";

        		this.gfnOpenPopup("memberRegiGuide", "work::COM/member/COM000P031.xfdl", objArg, sPopupCallBack, objOption);
        	} else {
        		var sMenuId = 'MNG_0000000021';

        		this.objApp.gvVfrs.set_separatesize("108,*,0,0");

        		this.gfnLeftMenuCreate(sMenuId);
        		this.gfnMenuFocus(sMenuId);
        		this.gfnLeftTit(sMenuId);

        		var cMenuId = "MNG_0000000043";
        		var sMenuUrl = 'work::COM/sysMng/COM001M05.xfdl';
        		var actNm = '';
        		this.gfnPageOpen(cMenuId, sMenuUrl, actNm, objArg);
        	}
        };

        this.btn00_onclick = function(obj,e)
        {
        	var sTitle = "메뉴";
        	var objArg   = {};

        	var objOption = {
        		popuptype: "modal"	//modal,modaless
        		//, width: 800
        		//, height: 500			//width,height 지정하지 않음 popup form size적용
        		, autosize: false
        		, title: sTitle
        		, resize: false
        		, titlebar: false
        	};
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup("menu", "frame::frm_MenuM.xfdl", objArg, sPopupCallBack, objOption);
        };






        this.btnGo_onkillfocus = function(obj,e)
        {
        	this.btnGo.set_height(0);
        	var elem = this.btnGo.getElement();
        	if(elem)
        	{
        		elem.setElementZIndex("");
        	}
        };

        this.btnGo_onsetfocus = function(obj,e)
        {
        	this.btnGo.set_height(40);

        	var elem = this.btnGo.getElement();
        	if(elem)
        	{
        		elem.setElementZIndex(1);
        	}
        };


        this.btnGo_onclick = function(obj,e)
        {
        	//업무영역 Form 안의 첫번째 컴포넌트 반환
        	var divFirstFocus = nexacro.getApplication().gvFrmMain.form.getFirstComponent(true);
            divFirstFocus.setFocus();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Top_onload,this);
            this.staLogo.addEventHandler("onclick",this.staLogo_onclick,this);
            this.btnGo.addEventHandler("onclick",this.btnGo_onclick,this);
            this.btnGo.addEventHandler("onkillfocus",this.btnGo_onkillfocus,this);
            this.btnGo.addEventHandler("onsetfocus",this.btnGo_onsetfocus,this);
            this.Menu01.addEventHandler("onmenuclick",this.Menu01_onmenuclick,this);
            this.btnLogout.addEventHandler("onclick",this.btnLogout_onclick,this);
            this.divTopBtn.addEventHandler("onclick",this.div_Tab_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.btn00_00.addEventHandler("onclick",this.btn00_00_onclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
        };
        this.loadIncludeScript("frm_Top.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
