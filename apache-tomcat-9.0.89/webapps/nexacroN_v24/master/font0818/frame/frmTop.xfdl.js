(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmTop");
            this.set_titletext("TopFrame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,50);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMenu", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "MENU_ID","type" : "STRING","size" : "256"},{"id" : "MENU_NM","type" : "STRING","size" : "256"},{"id" : "MENU_LV","type" : "STRING","size" : "256"},{"id" : "HIPO_MENU_ID","type" : "STRING","size" : "256"},{"id" : "MENU_URL","type" : "STRING","size" : "256"},{"id" : "MODULE_CD","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_TF_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staLogo","0","0","210",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("TOBESOFT");
            obj.set_cssclass("sta_TF_Logo");
            this.addChild(obj.name, obj);

            obj = new Div("divTopBtn","229","0",null,"50","342",null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("staUserInfo",null,"12","142","22","49",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("컨설팅팀 홍길동");
            obj.set_cssclass("sta_TF_User");
            this.addChild(obj.name, obj);

            obj = new Button("btnLogout",null,"0","39",null,"10","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_TF_Logout");
            obj.set_tooltiptext("로그아웃");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTopBtn.form
            obj = new Layout("default","",0,0,this.divTopBtn.form,function(p){});
            this.divTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,50,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmTop.xfdl", function() {
        /**
        *  PcMdi 프로젝트
        *  @FileName 	frmTop.xfdl
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
        this.fvFirstGap 		= 0;
        this.fvBtnGap 			= 0;
        this.fvBtnHeight 		= 50;
        this.fvTopBtnPrefix 	= "TOP_";

        this.objApp = nexacro.getApplication();
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        /**
         * @description 화면 오픈
         */
        this.form_onload = function(obj,e)
        {
        	this.divTopBtn.form.set_scrollbartype("none");

        	// 메뉴 데이터셋, 버튼 생성
        	this.fnLoad();
        };

        /**
         * @description 화면 리사이징
         */
        this.form_onsize = function(obj,e)
        {
        	// 메뉴버튼 Redraw
        	this.fnRedrawBtn();
        };
        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        //message
        this.fnMsgCallback = function (sMsgId, sRtn)
        {
        	switch(sMsgId) {
        		case "logout":
        			if(sRtn=="false"||sRtn==false||this.gfnIsNull(sRtn)){
        				return;
        			}
        			this.fnLogout();
        			break;
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        //로그아웃
        this.fnLogout = function ()
        {
        	if(system.navigatorname == "nexacro")
        	{
        		nexacro.getApplication().exit();
        	}
        	else
        	{
        		window.top.location.reload(true);
        	}
        };

        /**
         * @description topmenu를 dsMenu로 copy
         */
        this.fnLoad = function ()
        {
        	var sFilter = this.FRAME_MENUCOLUMNS.menuLevel + " == '0' ";//&& " + this.FRAME_MENUCOLUMNS.useYn + " == 'Y'";
        	this.objApp.gdsMenu.filter(sFilter);

        	// Top 메뉴 복사
        	this.dsMenu.copyData(this.objApp.gdsMenu, true);
        	this.objApp.gdsMenu.filter("");
        	// Top 메뉴 셋팅
        	this.fnSetTopMenu();
        };

        /**
         * @description topmenu 셋팅
         */
        this.fnSetTopMenu = function ()
        {
        	for (var i = 0; i < this.dsMenu.getRowCount(); i++)
        	{
        		var sMenuId = this.dsMenu.getColumn(i, this.FRAME_MENUCOLUMNS.menuId);
        		var sMenuName = this.dsMenu.getColumn(i, this.FRAME_MENUCOLUMNS.menuNm);

        		this.fnCreateTopMenu(sMenuId, sMenuName, i);
        	}

        	// 메뉴버튼 Redraw
        	this.fnRedrawBtn();
        };

        /**
         * @description Top menu creation
         */
        this.fnCreateTopMenu = function (sTopId, sName, index)
        {
        	// Creating page button
        	var objBtn = new Button();
        	objBtn.init(this.fvTopBtnPrefix + sTopId, this.fnGetLeft(sTopId), 0, 130, this.fvBtnHeight, null, null);
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

        /**
         * @description 이전 버튼을 기준으로 버튼위치 리턴
         */
        this.fnGetLeft = function (sTopId)
        {
        	var nCurRow = this.dsMenu.findRow(this.FRAME_MENUCOLUMNS.menuId, sTopId);
        	if (nCurRow == 0) return this.fvFirstGap;

        	var objPrevTab = this.fnFindObj(this.fvTopBtnPrefix + this.dsMenu.getColumn(nCurRow - 1, this.FRAME_MENUCOLUMNS.menuId));
        	return objPrevTab.getOffsetRight() + this.fvBtnGap;
        };

        /**
         * @description Top 메뉴 click
         */
        this.fnMenuClick = function(sMenuId)
        {
        	this.objApp.gvFrmLeft.form.divLnb.form.grdMenu.set_enableevent(false);
        	this.objApp.gvFrmLeft.form.divLnb.form.grdMenu.set_enableredraw(false);
        	this.objApp.gvFrmLeft.form.dsMenu.set_enableevent(false);

        	this.objApp.gvFrmLeft.form.divLnb.form.grdMenu.set_binddataset("");
        	this.objApp.gvFrmLeft.form.divLnb.form.grdMenu.set_treeinitstatus("expand,all");

        	// 좌측 메뉴 만들기
        	this.objApp.gvFrmLeft.form.dsMenu.clearData();
        	var sModuleCd = this.dsMenu.lookup("MENU_ID", sMenuId, "MODULE_CD");
        	var sFilter = this.FRAME_MENUCOLUMNS.menuLevel + " != '0' && "
        				+ this.FRAME_MENUCOLUMNS.groupId + " == '" + sModuleCd + "' " ;
        	this.objApp.gdsMenu.filter(sFilter);
        	this.objApp.gvFrmLeft.form.dsMenu.copyData(this.objApp.gdsMenu, true);
        	this.objApp.gdsMenu.filter("");


        	// Left 메뉴 열린상태가 아닐 경우, 열어주기
        	if (this.objApp.gvFrmLeft.form.fnGetMenuOpenClose() != "open") {
        		this.objApp.gvFrmLeft.form.fnSetMenuOpenClose("open");
        	}
        	this.objApp.gvFrmLeft.form.divLnb.form.grdMenu.set_binddataset("dsMenu");
        	this.objApp.gvFrmLeft.form.divLnb.form.grdMenu.set_enableevent(true);
        	this.objApp.gvFrmLeft.form.divLnb.form.grdMenu.set_enableredraw(true);
        	this.objApp.gvFrmLeft.form.dsMenu.set_enableevent(true);

        	// 클릭한 Top 메뉴에 해당하는 SubMenu(Left) 셋팅
        	this.objApp.gvFrmLeft.form.fnChangeLeftMenu(sMenuId);

        	// My 메뉴 활성화 시 Left 메뉴 활성화
        	if (this.objApp.gvFrmLeft.form.divLnb.form.grdMyMenu.visible == true) {
        		this.objApp.gvFrmLeft.form.fnSetMenuType("menu");
        	}
        };

        /**
         * @description 버튼 redraw
         */
        this.fnRedrawBtn = function ()
        {
        	// 모든 버튼 체크
        	this.fnCheckShowBtnAll();
        };

        /**
         * @description 모든 버튼 체크
         */
        this.fnCheckShowBtnAll = function ()
        {
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

        /**
         * @description menu tab 버튼 첫번째 이동 함수
         */
        this.fnMoveFirst = function (nMoveIdx)
        {
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

        /**
         * @description menu top 버튼 첫번째 index 가져오는 함수
         */
        this.fnGetFirstTopIndex = function ()
        {
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

        /**
         * @description menu tab 찾는 함수
         */
        this.fnFindObj = function (sId)
        {
        	return this.divTopBtn.form.components[sId];
        };

        /**
         * @description 메뉴버튼 활성화
         */
        this.fnSetActiveBtn = function (sMenuId)
        {
        	var objMenu;

        	for (var i = 0; i < this.dsMenu.getRowCount(); i++)
        	{
        		objMenu = this.fnFindObj(this.fvTopBtnPrefix + this.dsMenu.getColumn(i, this.FRAME_MENUCOLUMNS.menuId));
        		if (sMenuId == this.dsMenu.getColumn(i, this.FRAME_MENUCOLUMNS.menuId)) {
        			objMenu.set_cssclass("btn_TF_MenuS");
        		} else {
        			objMenu.set_cssclass("btn_TF_Menu");
        		}
        	}
        };

        // /*******************************************************************************************************************************
        //  * 각 COMPONENT 별 EVENT 영역
        // *******************************************************************************************************************************/
        /**
         * @description Logo click
         */
        this.staLogo_onclick = function(obj,e)
        {
        	// 메인으로 이동
        	this.gfnSetMain();
        };

        /**
         * @description Top 메뉴 버튼 click
         */
        this.btnTopMenu_onclick = function(obj,e)
        {
        	var sMenuId = obj.menuid;

        	if (this.gfnIsNull(sMenuId)) return;

        	// 선택된 메뉴버튼 css 활성화
        	this.fnSetActiveBtn(sMenuId);

        	// Top 메뉴 click
        	this.fnMenuClick(sMenuId);
        }

        //로그아웃
        this.btnLogout_onclick = function(obj,e)
        {
        	this.gfnAlert("confirm.logout", "", "logout", "fnMsgCallback");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.addEventHandler("onlayoutchanged",this.frmTop_onlayoutchanged,this);
            this.staLogo.addEventHandler("onclick",this.staLogo_onclick,this);
            this.divTopBtn.addEventHandler("onclick",this.div_Tab_onclick,this);
            this.btnLogout.addEventHandler("onclick",this.btnLogout_onclick,this);
        };
        this.loadIncludeScript("frmTop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
