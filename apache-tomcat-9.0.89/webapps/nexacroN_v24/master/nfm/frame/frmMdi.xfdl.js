(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmMdi");
            this.set_titletext("MdiFrame");
            this.set_cssclass("frm_MDI_Bg");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1330,35);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsContextMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"name\">전체 탭 닫기</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"name\">다른 탭 닫기</Col></Row><Row><Col id=\"name\">오른쪽으로 탭 닫기</Col><Col id=\"code\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOpenMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"WIN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new PopupDiv("pdvContextMenu","0","100","180","74",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_cssclass("grd_MDI_List");
            this.addChild(obj.name, obj);

            obj = new Grid("grdContextMenu","0","0",null,null,"0","0",null,null,null,null,this.pdvContextMenu.form);
            obj.set_taborder("0");
            obj.set_cssclass("grd_MDI_List");
            obj.set_binddataset("dsContextMenu");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:name\" textAlign=\"left\"/></Band></Format></Formats>");
            this.pdvContextMenu.addChild(obj.name, obj);

            obj = new Button("btnHome","0","2","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_MDI_home_S");
            this.addChild(obj.name, obj);

            obj = new Tab("tabMdi","130","0",null,null,"27","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_MDI");
            obj.set_tabbuttongap("1");
            obj.set_tabbuttonheight("35");
            obj.set_selectedtabbuttonheight("35");
            obj.set_showextrabutton("true");
            obj.set_tabbuttonwidth("206");
            this.addChild(obj.name, obj);

            obj = new Button("btnCloseAll",null,"4","25","25","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_MDI_closeAll");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","39","9","29","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00","69","9","29","25",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00_00","99","9","29","25",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.pdvContextMenu.form
            obj = new Layout("default","",0,0,this.pdvContextMenu.form,function(p){});
            this.pdvContextMenu.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1330,35,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmMdi.xfdl", function() {
        /**
         *  @FileName 	frmMdi.xfdl
         *  @Creator 	박준하
         *  @CreateDate 2023/09/18
         *  @Desction
         ************** 소스 수정 이력 ***********************************************
         * Date					Modifier					Description
         *******************************************************************************
         * 2023/09/18			박준하						최초생성
         *******************************************************************************
        **/

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.bClose;
        this.fvContextMenuWinID = "";

        // todo 전체닫기 사용하려면 true
        this.fvUseContextMenu = true;

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        /**
         * @description Form 로드 완료
        **/
        this.form_onload = function(obj,e)
        {

        };

        /**
         * @description Form 크기 변경
        **/
        this.form_onsize = function(obj,e)
        {
        	this.fnResizeTab();
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/


        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        /**
         * @description 메세지 콜백
        **/
        this.fnMsgCallback = function (sMsgId, sVal)
        {
        	var arrMsgId = sMsgId.split("^");

        	switch (arrMsgId[0])
        	{
        		case "confirm.before.removeallpage" :	// 변경된 데이터가 있습니다. 전체 화면을 닫겠습니까?
        			if (sVal)
        			{
        				this.fnCloseAll(false);
        			}
        			break;
        		case "confirm.before.movepage" :	// 변경된 데이터가 있습니다. 현재 화면을 닫겠습니까?
        			var sWinId = arrMsgId[1];
        			if (sVal)
        			{
        				this.fnTabOnClose(sWinId);
        			}
        			break;
        		case "confirm.removeallpage" :	// 전체 화면을 닫겠습니까?
        			if (sVal)
        			{
        				this.fnCloseAll(false);
        			}
        			break;
        		default :
        			break;
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        /**
         * @description MDI 탭 버튼 넓이 조정
        **/
        this.fnResizeTab = function ()
        {
        	if (!this.tabMdi._org_tabbuttonwidth) this.tabMdi._org_tabbuttonwidth = this.tabMdi.tabbuttonwidth;

        	let nOffset = 10;
        	let nTotalTabButtonWidth = this.tabMdi.getTabpageCount() * (this.tabMdi._org_tabbuttonwidth + Number(this.tabMdi.tabbuttongap));
        	if (nTotalTabButtonWidth >= this.tabMdi.getOffsetWidth())
        	{
        		this.tabMdi.set_tabbuttonwidth(Math.floor((this.tabMdi.getOffsetWidth()-nOffset)/this.tabMdi.getTabpageCount()));
        	}
        	else
        	{
        		this.tabMdi.set_tabbuttonwidth(this.tabMdi._org_tabbuttonwidth);
        	}
        }

        /**
         * @description MDI Tab Button 활성화
         * @param {String} sWinId - 이동할 윈도우 ID
        **/
        this.fnSetActive = function (sWinId)
        {
        	let objTabPage = this.tabMdi.tabpages[sWinId];
        	if (!objTabPage) return false;

        	this.tabMdi.set_tabindex(objTabPage._tabbuttonitem._tabindex);

        	return true;
        }

        /**
         * @description 활성화된 MDI window id 반환
        **/
        this.fnGetActiveId = function()
        {
        	if (this.tabMdi.getTabpageCount() == 0) return;
        	return this.tabMdi.tabpages[this.tabMdi.tabindex].id;
        }

        /**
         * @description 윈도우 아이디를 기준으로 열려있는 화면 여부 확인
         * @param {string} sWinId : 윈도우 생성 키
         * @example
        **/
        this.fnActivateMdi = function (sWinId)
        {//trace('fnActivateMdi("'+sWinId+'")');

        	//trace(this.gfnGetDate("milli")+"==========start");

        	var framesInfo = app.gvFrsWork.form.components;

        	if (this.gfnIsNull(sWinId)) return true;

        	// home/mdi 버튼 스타일 변경
        	this.fnSetButtonStyle('mdi');
        	//trace(this.gfnGetDate("milli")+"==========0");
        	// GNB 메뉴 선택
        	var sMenuId = app.gdsOpenMenu.lookup(this.FRAME_MENUCOLUMNS.winId, sWinId, this.FRAME_MENUCOLUMNS.menuId);
        	app.gvFrmMenu.form.fnSelectMenu(sMenuId)
        	//trace(this.gfnGetDate("milli")+"==========1");
        	for (let div,i=0; i<framesInfo.length; i++)
        	{
        	//trace(this.gfnGetDate("milli")+"==========20"+i);
        		div = framesInfo[i];
        		if (div == framesInfo[sWinId])
        		{
        	//trace(this.gfnGetDate("milli")+"==========21");
        			nexacro._OnceCallbackTimer.callonce(this, function () {
        				this.gfnResizeFrameHeight(div.form.divWork.form, true);
        			}, 200);
        			this.fnMoveTab(sWinId);
        			div.setFocus(false);
        			div.set_visible(true);
        			app.gvFrmMain.set_visible(false);
        		}
        		else
        		{
        	//trace(this.gfnGetDate("milli")+"==========22");
        			div.set_enableevent(false);

        			div.set_visible(false);
        		}
        	}
        	//trace(this.gfnGetDate("milli")+"==========3");
        	app.gvFrsWork.set_enableevent(true);
        	app.gvFrsWork.set_visible(true);

        	//trace(this.gfnGetDate("milli")+"==========end");


        };

        /**
         * @description 메뉴 tab 이동
         * @param {string} sWinId - 메뉴키값
        **/
        this.fnMoveTab = function (sWinId)
        {
        	let objTabPage = this.tabMdi.tabpages[sWinId];
        	if (!objTabPage) return;

        	this.fnSetActive(sWinId);
        	this.fnResizeTab();
        }

        /**
         * @description 메뉴 tab Button 동적생성
         * @param {string} sWinId - 메뉴키값
         * @param {string} sName - 메뉴명
        **/
        this.fnAddTab = function (sWinId, sName)
        {
        	let objTabPage = this.tabMdi.tabpages[sWinId];
        	if (objTabPage) return;

        	this.tabMdi.insertTabpage(sWinId, -1, null, sName)

        	this.fnResizeTab();

        	this.bClose = true;

        	return true;
        }

        /**
         * @description 메뉴닫기(외부호출)
         * @param {String} sMenuId - 메뉴ID
        **/
        this.fnCloseMenu = function(sMenuId, bCheck)
        {
        	if (this.gfnIsNull(sMenuId)) return;
        	if (this.gfnIsNull(bCheck)) bCheck	= app.gvCloseCheck;

        	var sWinId = this.gfnGetLookupData(app.gdsOpenMenu, this.FRAME_MENUCOLUMNS.menuId, sMenuId, this.FRAME_MENUCOLUMNS.winId);

        	var objWork = app.gvFrsWork.form.components;
        	var objForm =  objWork[sWinId].form;

        	var rtn = objForm.fnWorkFrameClose(bCheck);

        	if (rtn == false)
        	{
        		// 변경된 데이터가 있습니다. 현재 화면을 닫겠습니까?
        		this.gfnAlert("confirm.before.movepage", "", "confirm.before.movepage^" + sWinId, "fnMsgCallback");
        	}
        	else
        	{
        		this.fnTabOnClose(sWinId);
        	}
        };

        /**
         * @description 화면 전체 닫기
         * @param {Boolean} bCheck - 전체닫기 체크
         * @return	:   N/A
        **/
        this.fnCloseAll = function(bCheck)
        {
        	if (app.gdsOpenMenu.getRowCount() < 1) return;

        	var iFramesCnt = app.gvFrsWork.form.components.length;//app.gvFrsWork.frames.length;
        	var isCloseCheck = this.fnCheckCloseAll(bCheck);

        	if (isCloseCheck)
        	{
        		for (var i=iFramesCnt; i>0; i--)
        		{
        			this.fnTabOnClose(app.gvFrsWork.form.components[i-1].name)//this.fnTabOnClose(app.gvFrsWork.frames[i-1].name);
        		}
        	}
        	else
        	{
        		// 변경된 데이터가 있습니다. 전체 화면을 닫겠습니까?
        		this.gfnAlert("confirm.before.removeallpage", "", "confirm.before.removeallpage", "fnMsgCallback");
        	}
        };

        /**
         * @description 화면 전체닫기 여부 체크
         * @param {Boolean} bCheck - 전체닫기 체크
         * @return	:   N/A
        **/
        this.fnCheckCloseAll = function(bCheck)
        {
        	// workFrame영역에 open된 childFrame 갯수
        	var iFramesCnt = app.gvFrsWork.form.components.length;//app.gvFrsWork.frames.length;
        	var isCloseCheck = true;

        	if (this.gfnIsNull(bCheck)) bCheck	= app.gvCloseCheck;

        	// 닫기할때 체크할지 여부(변경되도 강제로 닫을때 사용)
        	if (bCheck == true)
        	{
        		for (var i=0; i<iFramesCnt; i++)
        		{
        			if (this.gfnIsNull(app.gvFrsWork.form.components[i].form.fvDivWork.form.lookup("cfnClose")))//if (this.gfnIsNull(app.gvFrsWork.frames[i].form.fvDivWork.form.lookup("cfnClose")))
        			{}
        			else
        			{
        				if (app.gvFrsWork.form.components[i].form.fnWorkFrameClose() == false)//if (app.gvFrsWork.frames[i].form.fnWorkFrameClose() == false)
        				{
        					isCloseCheck =  false;
        					break;
        				}
        			}
        		}
        	}

        	return isCloseCheck;
        };

        /**
         * @description 메뉴 tab 닫기 실행 함수
         * @param {String} sWinId - 윈도우ID
        **/
        this.fnTabOnClose = function (sWinId)
        {
            var objWork = app.gvFrsWork.form.components;

        	var sCurWinId = this.tabMdi.tabpages[this.tabMdi.tabindex].name;//app.gvFrsWork.getActiveFrame().name;

        	var nRow = app.gdsOpenMenu.findRow(this.FRAME_MENUCOLUMNS.winId, sWinId);

        	// MDI Div 제거
        	if (!this.gfnIsNull(objWork[sWinId]) && nRow > -1)
        	{
        		this.bClose = false;
        		var objRemoveMdiDiv = app.gvFrsWork.form.removeChild(sWinId);
        		objRemoveMdiDiv.destroy();
        		objRemoveMdiDiv = null;

        		// MDI Tab 버튼 제거
        		this.fnDelTab(sWinId);
        	}

        	// 열린화면 데이터 제거
        	this.gfnRemoveOpenMenuDs(sWinId);

            if (objWork.length > 0)
            {
        		if (sWinId != sCurWinId )
        		{
        			app.gvFrsWork.form.components[sCurWinId].setFocus(false);//app.gvFrsWork[sCurWinId].setFocus();
        		}
        		else
        		{
        			if (sCurWinId != null)
        			{
        				this.fnSetActive(sCurWinId);
        			}
        		}
        	}
        	else
        	{
        		this.gfnSetMain();	//변경이후에 main에 포커스를 준다.
        	}
        };

        /**
         * @description메뉴 tab 삭제
         * @param {String} sWinId - 윈도우ID
        **/
        this.fnDelTab = function (sWinId)
        {
        	let objTabPage = this.tabMdi.tabpages[sWinId];
        	if (!objTabPage) return;

        	// Removing Tab button.
        	this.tabMdi.removeTabpage(this.tabMdi.tabpages[sWinId]._tabbuttonitem._tabindex);
        	this.bClose = true;

        	this.fnResizeTab();

        	return true;
        };

        /**
         * @description menu tab 다른 탭 삭제 함수
        **/
        this.fnCloseOtherTabs = function()
        {
        	if (this.fvContextMenuWinID)
        	{
        		for (let sWinId,i=this.tabMdi.tabpages.length-1; i>=0; i--)
        		{
        			sWinId = this.tabMdi.tabpages[i].name;
        			if (sWinId == this.fvContextMenuWinID) continue;
        			this.fnTabOnClose(sWinId);
        		}
        	}
        };

        /**
         * @description menu tab 우측 탭 삭제 함수
        **/
        this.fnCloseTabsToTheRight = function()
        {
        	if (this.fvContextMenuWinID)
        	{
        		for (let sWinId,i=this.tabMdi.tabpages.length-1; i>=0; i--)
        		{
        			sWinId = this.tabMdi.tabpages[i].name
        			if (sWinId == this.fvContextMenuWinID) break;
        			this.fnTabOnClose(sWinId);
        		}
        	}
        };

        /**
         * @description home/mdi 버튼 스타일 변경
        **/
        this.fnSetButtonStyle = function(type)
        {
        	if (type == 'home')
        	{
        		this.btnHome.set_cssclass('btn_MDI_home_S');
        		this.tabMdi.set_cssclass('tab_MDI_home');
        	}
        	else if (type == 'mdi')
        	{
        		this.btnHome.set_cssclass('btn_MDI_home');
        		this.tabMdi.set_cssclass('tab_MDI');
        	}
        }

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        /**
         * @description 홈버튼 onclick event
        **/
        this.btnHome_onclick = function(obj,e)
        {
        	// 메인으로 이동
        	this.gfnSetMain();

        	// home/mdi 버튼 스타일 변경
        	this.fnSetButtonStyle('home');
        };

        /**
         * @description 메뉴 전체닫기 버튼 클릭
        **/
        this.btnCloseAll_onclick = function(obj,e)
        {
        	if (app.gdsOpenMenu.getRowCount() > 0)
        	{
        		this.gfnAlert("confirm.removeallpage", "", "confirm.removeallpage", "fnMsgCallback");
        	}
        };

        // Context Menu 클릭
        this.pdvContextMenu_grdContextMenu_oncellclick = function(obj,e)
        {
        	var code = e.row;
        	switch (code) {
        		case 0 : // 전체 닫기
        			this.fnCloseAll();
        			break;
        		case 1 : // 다른 탭 닫기
        			this.fnCloseOtherTabs();
        			break;
        		case 2 : // 우측 탭 닫기
        			this.fnCloseTabsToTheRight();
        			break;
        	}

        	this.pdvContextMenu.closePopup();
        };

        /**
         * @description 메뉴 tab onlbuttonup event : mdi 선택/전환
        **/
        this.tabMdi_onlbuttonup = function(obj,e)
        {
        	let oTabButtonItemControl;
        	if (e.fromreferenceobject instanceof nexacro._TabButtonItemControl) oTabButtonItemControl = e.fromreferenceobject;
        	if (e.fromreferenceobject.parent instanceof nexacro._TabButtonItemControl) oTabButtonItemControl = e.fromreferenceobject.parent;
        	if (oTabButtonItemControl) this.fnActivateMdi(oTabButtonItemControl._tabpage.name);
        };

        /**
         * @description 메뉴 tab onchanged event
        **/
        this.tabMdi_onchanged = function(obj,e)
        {
        	var sWinId = obj.tabpages[e.postindex].name;
        	this.fnActivateMdi(sWinId);

        };

        /**
         * @description 메뉴 tab oncontextmenu event : 컨텍스트 메뉴 표시
        **/
        this.tabMdi_oncontextmenu = function(obj,e)
        {
        	if (!this.fvUseContextMenu) return;
        	if (obj == e.fromreferenceobject) return;

        	this.fvContextMenuWinID = e.fromreferenceobject.parent._tabpage.name;

            if (app.gdsOpenMenu.rowcount > 0)
        	{
        		this.pdvContextMenu.trackPopupByComponent(obj, e.canvasx, e.canvasy);
        		this.dsContextMenu.set_rowposition(-1);
        	}
        };

        /**
         * @description 메뉴 tab onextrabuttonclick event : mdi 닫기
        **/
        this.tabMdi_onextrabuttonclick = function(obj,e)
        {
        	var sWinId = obj.tabpages[e.index].name;
        	var sMenuId = this.gfnGetLookupData(app.gdsOpenMenu, this.FRAME_MENUCOLUMNS.winId, sWinId, this.FRAME_MENUCOLUMNS.menuId);

        	this.fnCloseMenu(sMenuId);

        	this.bClose = true;
        };

        /**
         * @description 메뉴 tab onmousemove event : 툴팁 표시
        **/
        this.tabMdi_onmousemove = function(obj,e)
        {
        	let oTabButtonItemControl;
        	if (e.fromreferenceobject instanceof nexacro._TabButtonItemControl) oTabButtonItemControl = e.fromreferenceobject;
        	if (e.fromreferenceobject.parent instanceof nexacro._TabButtonItemControl) oTabButtonItemControl = e.fromreferenceobject.parent;
        	if (oTabButtonItemControl) obj.set_tooltiptext(oTabButtonItemControl.text)
        };

        this.btn00_onclick = function(obj,e)
        {
        	this.gfnOpenMenu('DEV9999');
        };

        this.btn00_00_onclick = function(obj,e)
        {
        	this.gfnOpenMenu('DEV99991');
        };

        this.btn00_00_00_onclick = function(obj,e)
        {
        	this.gfnOpenMenu('DEV99992');
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onsize",this.form_onsize,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.pdvContextMenu.addEventHandler("onpopup",this.pdvContextMenu_onpopup,this);
            this.pdvContextMenu.form.grdContextMenu.addEventHandler("oncellclick",this.pdvContextMenu_grdContextMenu_oncellclick,this);
            this.btnHome.addEventHandler("onclick",this.btnHome_onclick,this);
            this.tabMdi.addEventHandler("oncontextmenu",this.tabMdi_oncontextmenu,this);
            this.tabMdi.addEventHandler("onextrabuttonclick",this.tabMdi_onextrabuttonclick,this);
            this.tabMdi.addEventHandler("onlbuttonup",this.tabMdi_onlbuttonup,this);
            this.tabMdi.addEventHandler("onchanged",this.tabMdi_onchanged,this);
            this.tabMdi.addEventHandler("onmousemove",this.tabMdi_onmousemove,this);
            this.btnCloseAll.addEventHandler("onclick",this.btnCloseAll_onclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn00_00.addEventHandler("onclick",this.btn00_00_onclick,this);
            this.btn00_00_00.addEventHandler("onclick",this.btn00_00_00_onclick,this);
        };
        this.loadIncludeScript("frmMdi.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
