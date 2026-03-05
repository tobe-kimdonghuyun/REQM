(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_Mdi");
            this.set_cssclass("frm_MDI_bg");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,38);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTab", this);
            obj._setContents("<ColumnInfo><Column id=\"tabId\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"winId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOpenMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"WIN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dataSet00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">화면명1</Col></Row><Row><Col id=\"Column0\">화면명2</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00_01","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_MDI_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0",null,null,"1","0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_MDI_Line");
            this.addChild(obj.name, obj);

            obj = new Button("btnLeftMenuShowHide","10","91","20","42",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_MDI_Open");
            obj.set_text("");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnHome","60","3","40",null,null,"3",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_MDI_Home");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00",null,"100","1","14","10",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_MDI_Line");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnHorizontal",null,"91","23","31","sta00:-35",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("btn_MDI_Horizontal");
            obj.set_tooltiptext("vertical");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnVertical",null,"91","23","31","btnHorizontal:0",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_MDI_Vertical");
            obj.set_tooltiptext("horizontal");
            obj.set_visible("false");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnCascade",null,"91","23","29","btnVertical:0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_MDI_Restore");
            obj.set_tooltiptext("cascade");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnMaximize",null,"91","23","31","btnCascade:0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_MDI_Max");
            obj.set_tooltiptext("최대화");
            obj.set_visible("false");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00",null,"100","1","14","73",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_MDI_Line");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnCloseAll",null,"5","28","28","60",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_tooltiptext("전체닫기");
            obj.set_cssclass("btn_MDI_CloseAll");
            this.addChild(obj.name, obj);

            obj = new Button("btnList",null,"5","28","28","btnCloseAll:8",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_tooltiptext("열린메뉴");
            obj.set_cssclass("btn_MDI_List");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnNexMdi",null,"5","28","28","btnCloseAll:8",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_tooltiptext("다음 화면목록으로");
            obj.set_cssclass("btn_MDI_Next");
            this.addChild(obj.name, obj);

            obj = new Button("btnPreMdi",null,"5","28","28","btnNexMdi:8",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_tooltiptext("이전 화면목록으로");
            obj.set_cssclass("btn_MDI_Prev");
            this.addChild(obj.name, obj);

            obj = new Div("divTab","btnHome:4","0",null,null,"btnPreMdi:18","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdvOpenMenu","790","42","245","200",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_cssclass("pdiv_MDI_Bg");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pDiv00","1181","79","243","205",null,null,null,null,null,null,this);
            obj.set_text("pDiv00");
            obj.set_visible("false");
            obj.set_cssclass("popdiv_WF_TTPoP");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Grid("grdOpenMenu","15","41",null,null,"0","0",null,null,null,null,this.pDiv00.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("gdsOpenMenu");
            obj.set_cssclass("grd_MDI_List");
            obj.set_scrollbardecbuttonsize("0");
            obj.set_scrollbarincbuttonsize("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:MENU_NM\" tooltiptext=\"bind:MENU_NM\"/></Band></Format></Formats>");
            this.pDiv00.addChild(obj.name, obj);

            obj = new Static("Static00","15","3","145","38",null,null,null,null,null,null,this.pDiv00.form);
            obj.set_taborder("1");
            obj.set_text("전체목록");
            this.pDiv00.addChild(obj.name, obj);

            obj = new Button("btn00",null,"3","38","38","3",null,null,null,null,null,this.pDiv00.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_MDI_ListX");
            this.pDiv00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTab.form
            obj = new Layout("default","",0,0,this.divTab.form,function(p){});
            this.divTab.form.addLayout(obj.name, obj);

            //-- Default Layout : this.pdvOpenMenu.form
            obj = new Layout("default","",0,0,this.pdvOpenMenu.form,function(p){});
            this.pdvOpenMenu.form.addLayout(obj.name, obj);

            //-- Default Layout : this.pDiv00.form
            obj = new Layout("default","",0,0,this.pDiv00.form,function(p){});
            this.pDiv00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1920,38,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_cssclass("frm_MDI_bg");

                p.sta00_01.set_taborder("14");
                p.sta00_01.set_cssclass("sta_MDI_Bg");
                p.sta00_01.move("0","0",null,null,"0","0");

                p.Static00.set_taborder("1");
                p.Static00.set_cssclass("sta_MDI_Line");
                p.Static00.move("0",null,null,"1","0","0");

                p.btnLeftMenuShowHide.set_taborder("2");
                p.btnLeftMenuShowHide.set_cssclass("btn_MDI_Open");
                p.btnLeftMenuShowHide.set_text("");
                p.btnLeftMenuShowHide.set_visible("false");
                p.btnLeftMenuShowHide.move("10","91","20","42",null,null);

                p.btnHome.set_taborder("7");
                p.btnHome.set_cssclass("btn_MDI_Home");
                p.btnHome.set_text("");
                p.btnHome.move("60","3","40",null,null,"3");

                p.sta00.set_taborder("13");
                p.sta00.set_cssclass("sta_MDI_Line");
                p.sta00.set_visible("false");
                p.sta00.move(null,"100","1","14","10",null);

                p.btnHorizontal.set_taborder("11");
                p.btnHorizontal.set_cssclass("btn_MDI_Horizontal");
                p.btnHorizontal.set_tooltiptext("vertical");
                p.btnHorizontal.set_visible("false");
                p.btnHorizontal.move(null,"91","23","31","sta00:-35",null);

                p.btnVertical.set_taborder("10");
                p.btnVertical.set_cssclass("btn_MDI_Vertical");
                p.btnVertical.set_tooltiptext("horizontal");
                p.btnVertical.set_visible("false");
                p.btnVertical.set_text("");
                p.btnVertical.move(null,"91","23","31","btnHorizontal:0",null);

                p.btnCascade.set_taborder("9");
                p.btnCascade.set_cssclass("btn_MDI_Restore");
                p.btnCascade.set_tooltiptext("cascade");
                p.btnCascade.set_visible("false");
                p.btnCascade.move(null,"91","23","29","btnVertical:0",null);

                p.btnMaximize.set_taborder("8");
                p.btnMaximize.set_cssclass("btn_MDI_Max");
                p.btnMaximize.set_tooltiptext("최대화");
                p.btnMaximize.set_visible("false");
                p.btnMaximize.set_text("");
                p.btnMaximize.move(null,"91","23","31","btnCascade:0",null);

                p.sta00_00.set_taborder("12");
                p.sta00_00.set_cssclass("sta_MDI_Line");
                p.sta00_00.set_visible("false");
                p.sta00_00.move(null,"100","1","14","73",null);

                p.btnCloseAll.set_taborder("6");
                p.btnCloseAll.set_tooltiptext("전체닫기");
                p.btnCloseAll.set_cssclass("btn_MDI_CloseAll");
                p.btnCloseAll.move(null,"5","28","28","60",null);

                p.btnList.set_taborder("3");
                p.btnList.set_tooltiptext("열린메뉴");
                p.btnList.set_cssclass("btn_MDI_List");
                p.btnList.set_visible("true");
                p.btnList.move(null,"5","28","28","btnCloseAll:8",null);

                p.btnNexMdi.set_taborder("4");
                p.btnNexMdi.set_tooltiptext("다음 화면목록으로");
                p.btnNexMdi.set_cssclass("btn_MDI_Next");
                p.btnNexMdi.move(null,"5","28","28","btnCloseAll:8",null);

                p.btnPreMdi.set_taborder("5");
                p.btnPreMdi.set_tooltiptext("이전 화면목록으로");
                p.btnPreMdi.set_cssclass("btn_MDI_Prev");
                p.btnPreMdi.move(null,"5","28","28","btnNexMdi:8",null);

                p.divTab.set_taborder("0");
                p.divTab.set_text("");
                p.divTab.set_formscrollbartype("none none");
                p.divTab.set_formscrolltype("none");
                p.divTab.move("btnHome:4","0",null,null,"btnPreMdi:18","0");

                p.pdvOpenMenu.set_visible("false");
                p.pdvOpenMenu.set_cssclass("pdiv_MDI_Bg");
                p.pdvOpenMenu.move("790","42","245","200",null,null);

                p.pDiv00.set_text("pDiv00");
                p.pDiv00.set_visible("false");
                p.pDiv00.set_cssclass("popdiv_WF_TTPoP");
                p.pDiv00.set_background("#ffffff");
                p.pDiv00.move("1181","79","243","205",null,null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Phone_screen","Phone_screen",480,50,this,
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
        this.registerScript("frm_Mdi.xfdl", function() {
        /**
        *  PcMdi 프로젝트
        *  @FileName 	frmMdi.xfdl
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
        this.fvFirstGap = 0;
        this.fvBtnGap = 4;
        this.fvTabHeight = 38;
        this.fvTabExtraRightGap = 30;
        this.fvExtraWidth = 30;
        this.fvExtraTop = 10;
        this.fvExtraHeight = 20;
        this.fvExtraBtnPrefix = "EXTRA_";
        this.fvTabBtnPrefix = "TAB_";
        this.bClose;
        this.fvContextMenuWinID = "";

        this.fvCurrentRow = -1;
        this.objApp = nexacro.getApplication();

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.frm_Mdi_onload = function(obj,e)
        {
        	//this.fnRedrawTab();
        	//this.fnAddTab("a111", "sName");
        };

        this.form_onsize = function(obj,e)
        {
        	this.fnRedrawTab();
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
        this.fnAddTab = function (sWindId, sName)
        {
        	trace("fnAddTab >> " + sWindId );

        	var nRow = this.dsTab.findRow("winId", sWindId);

        	if (nRow > -1) return nRow;

        	var sTabID = this.fvTabBtnPrefix + sWindId;

        	nRow = this.dsTab.addRow();
        	this.dsTab.setColumn(nRow, "tabId", sTabID);
        	this.dsTab.setColumn(nRow, "winId", sWindId);
        	this.dsTab.setColumn(nRow, "title", sName);

        	this.fnAddTabBtn(sTabID, sName);
        	this.fnRedrawTab();

        	this.bClose = true;

        	return nRow;
        }

        this.fnAddTabBtn = function (sTabID, sTabName)
        {

        	trace("fnAddTabBtn >> /////////// " + sTabID );

        	var objTab;
        	var objBtn;
        	var sExBtnId = this.fvExtraBtnPrefix + sTabID;   //extra button id

        	var objTextWidth =  "";

        	if (this.gfnIsNull(this.fnFindObj(sTabID)))
        	{
        		//trace("fnAddTabBtn >11>  " + sTabID  + " >> " + this.fnGetLeft(sTabID) );
        		objTab = new Button();
        		objTab.init(sTabID, this.fnGetLeft(sTabID), 0, 0, this.fvTabHeight, null, null);
        		this.divTab.addChild(sTabID, objTab);
        	}

        	objTab.set_text(sTabName);
        	objTab.set_textAlign("left");
        	objTab.set_padding("7px 36px 6px 14px");
        	objTab.set_cssclass("btn_MDI_Menu_S");
        	var nCompWidth = this.gfnGetTextSize(sTabName)[0]+ 80;
        	objTab.set_width(nCompWidth);
        	objTab.show();

        	objTab.setEventHandler("onclick", this.btnTab_onclick, this);

        	if (this.fnFindObj(sExBtnId) == null)
        	{
        		objBtn = new Button();
        		objBtn.init(sExBtnId, objTab.getOffsetRight() - this.fvTabExtraRightGap, this.fvExtraTop, objTab.getOffsetRight() - this.fvTabExtraRightGap + this.fvExtraWidth - (objTab.getOffsetRight() - this.fvTabExtraRightGap), this.fvExtraTop + this.fvExtraHeight - this.fvExtraTop);

        		this.divTab.addChild(sExBtnId, objBtn);

        		objBtn.set_cssclass("btn_MDI_TabClose");
        		objBtn.set_cursor("pointer");
        		objBtn.show();

        		objBtn.setEventHandler("onclick", this.btnExtra_onclick, this);
        	}
        }

        this.fnFindObj = function (sId)
        {
        	return this.divTab.form.components[sId];
        }

        this.fnGetLeft = function (sTabId)
        {
        	var nCurRow = this.dsTab.findRow("tabId", sTabId);
        	if (nCurRow == 0) return this.fvFirstGap;

        	var objPrevTab = this.fnFindObj(this.dsTab.getColumn(nCurRow - 1, "tabId"));
        	return objPrevTab.getOffsetRight() + this.fvBtnGap;
        }

        this.fnRedrawTab = function (sGubn)
        {
        	if (this.gfnIsNull(sGubn)) sGubn = "move";

        	this.fnSetTabSpinBtnShow();

        	if (this.dsTab.rowcount < 1) return;

        	var objTabFirst = this.fnFindObj(this.dsTab.getColumn(0, "tabId"));
        	var nLeft = objTabFirst.getOffsetLeft();

        	var objTabLast  = this.fnFindObj(this.dsTab.getColumn(this.dsTab.rowcount - 1, "tabId"));
        	var nRight = objTabLast.getOffsetRight();

        	if (this.divTab.getOffsetWidth() >= (nRight - nLeft))
        	{
        		this.fnMoveFirst(0);
        	} else
        	{
        		// 메뉴 추가 시 버튼 잘림 방지
        		if (sGubn == "add")
        		{
        			this.fnMoveFirst(this.fnGetFirstTabIndex() + 1);
        		}
        	}

        }

        this.fnSetTabSpinBtnShow = function ()
        {
        	var objTab;

        	if (this.dsTab.rowcount == 0)
        	{
        		this.btnPreMdi.set_enable(false);
        		this.btnNexMdi.set_enable(false);
        		return;
        	}

        	objTab = this.fnFindObj(this.dsTab.getColumn(this.dsTab.rowcount - 1, "tabId"));

        	if (this.divTab.getOffsetWidth() < objTab.getOffsetRight())
        	{
        		this.btnNexMdi.set_enable(true);
        	} else
        	{
        		this.btnNexMdi.set_enable(false);
        	}

        	objTab = this.fnFindObj(this.dsTab.getColumn(0, "tabId"));

        	if (objTab.getOffsetLeft() < 0)
        	{
        		this.btnPreMdi.set_enable(true);
        	} else
        	{
        		this.btnPreMdi.set_enable(false);
        	}

        }

        this.fnMoveFirst = function (nMoveIdx)
        {
        	var nIndex;
        	var sTabId;
        	var objTab;
        	var objExtraBtn;
        	var objTabFirst;

        	nIndex = this.fnGetFirstTabIndex();

        	if (nIndex < 0)
        	{
        		return;
        	}

        	if (nMoveIdx < 0)
        	{
        		return;
        	}

        	if (nMoveIdx >= this.dsTab.rowcount)
        	{
        		return;
        	}

        	sTabId = this.dsTab.getColumn(nIndex, "tabId");
        	objTabFirst = this.fnFindObj(sTabId);

        	sTabId = this.dsTab.getColumn(nMoveIdx, "tabId");
        	objTab = this.fnFindObj(sTabId);

        	var nShiftPos = objTab.getOffsetLeft() - objTabFirst.getOffsetLeft();

        	for (var i = 0; i < this.dsTab.rowcount; i++)
        	{
        		sTabId = this.dsTab.getColumn(i, "tabId");
        		objTab = this.fnFindObj(sTabId);
        		objExtraBtn = this.fnFindObj(this.fvExtraBtnPrefix + sTabId);
        		objTab.move(objTab.getOffsetLeft() - nShiftPos, objTab.getOffsetTop());
        		if (this.gfnIsNull(objExtraBtn) == false )
        			objExtraBtn.move(objExtraBtn.getOffsetLeft() - nShiftPos, objExtraBtn.getOffsetTop());
        	}



        }

        this.fnGetFirstTabIndex = function ()
        {
        	for (var i=0; i < this.dsTab.rowcount;i++)
        	{
        		var sTabID  = this.dsTab.getColumn(i, "tabId");
        		var objTab = this.fnFindObj(sTabID);
        		if (this.gfnIsNull(objTab) == false)
        		{
        			if (0 <= objTab.getOffsetLeft()) return i;
        		}
        	}
        	return -1;
        }

        this.isActiveFrame = function (sWinId)
        {
        	var framesInfo = this.objApp.gvFrsWork.frames;

        	var sMenuId = framesInfo[sWinId].arguments.MENU_ID

        	this.objApp.gvFrmLeft.form.currsMenuId = sMenuId;

        	if(sMenuId.length > 14) {
        		sMenuId = sMenuId.substring(0, 14);
        	}

        	var sModuleCd = framesInfo[sWinId].arguments.MODULE_CD;

        	if(this.objApp.gvFrmLeft.form.currsModuleCd != sModuleCd) {
        		this.gfnLeftMenuCreate(sMenuId);
        	}
        	this.gfnLeftTit(sMenuId);
        	this.gfnLeftSelt(sMenuId);
        	this.gfnMenuFocus(sMenuId);


        	this.objApp.gvFrmLeft.form.currsModuleCd = sModuleCd;

        	if (this.gfnIsNull(sWinId))
        	{
        		return true;
        	}

        	if (framesInfo[sWinId])
        	{
        	    this.gfnSetSub();
        		this.fnMoveTab(sWinId);   //tab이동
        		framesInfo[sWinId].setFocus();

        		return true;
        	}


        };

        this.fnSetStyle = function(sType)
        {
        	if (sType == "sub")
        	{
        		// 서브일때 정렬 사용
        		//this.fnSetEnableArrange(true);

        		// 화면버튼 디자인 설정
        		var sCurWinId = this.objApp.gvFrsWork.getActiveFrame().name;
        		this.fnSetActive(this.fvTabBtnPrefix + sCurWinId.name);

        		// 메인버튼 디자인 설정
        		this.btnHome.set_cssclass("btn_MDI_Home");
        	} else
        	{
        		// 메인일때 정렬 사용못함
        		//this.fnSetEnableArrange(false);

        		// 메인버튼 디자인 설정
        		this.btnHome.set_cssclass("btn_MDI_HomeS");

        		// 화면버튼 디자인 설정
        		this.fnSetActiveBtn("btnHome");
        	}
        };

        this.fnSetActive = function (sTabID)
        {
        	var nRow = this.dsTab.findRow("tabId", sTabID);

        	if (nRow < 0)
        	{
        		return false;
        	}

        	this.dsTab.set_rowposition(nRow);
        	this.fnSetActiveBtn(sTabID);

        	var sWinId = this.dsTab.getColumn(nRow, "winId");
        	var sRow = this.objApp.gdsOpenMenu.findRow("WIN_ID", sWinId);
        	var sMenuId = this.objApp.gdsOpenMenu.getColumn(sRow, "MENU_ID");
        	this.objApp.gvFrmLeft.form.currsMenuId = sMenuId;

        	return true;
        }

        this.fnMoveTab = function (sWindId)
        {
        	var nRow = this.dsTab.findRow("winId", sWindId);
        	if (nRow < 0) return nRow;

        	var sTabId = this.fvTabBtnPrefix + sWindId;
        	this.fnSetActive(sTabId);
        	this.fnRedrawTab();
        }

        this.fnSetActiveBtn = function (sTabId)
        {
        	var objTab;
        	var objExtraBtn;

        	for (var i = 0; i < this.dsTab.rowcount; i++)
        	{
        		objTab = this.fnFindObj(this.dsTab.getColumn(i, "tabId"));
        		objExtraBtn = this.fnFindObj(this.fvExtraBtnPrefix + this.dsTab.getColumn(i, "tabId"));

        		if (sTabId == this.dsTab.getColumn(i, "tabId"))
        		{
        			objTab.set_cssclass("btn_MDI_Menu_S");
        			this.fnShowTabBtn(i);
        		}
        		else
        		{
        		   objTab.set_cssclass("btn_MDI_Menu");
        		}
        	}
        }

        this.fnShowTabBtn = function (nIdx)
        {
        	var n;
        	var nLeft;
        	var nRight;

        	var objTab = this.fnFindObj(this.dsTab.getColumn(nIdx, "tabId"));
        	nLeft = objTab.getOffsetLeft();
        	nRight = objTab.getOffsetRight();

        	if (0 <= nLeft && this.divTab.getOffsetWidth() >= nRight)
        	{
        		return;
        	}

        	if (nLeft < 0)
        	{
        		this.fnMoveFirst(nIdx);
        		return;
        	}

        	var nMoveIdx = nIdx;

        	for (var i = this.fnGetFirstTabIndex() + 1; i < this.dsTab.rowcount; i++)
        	{
        		objTab = this.fnFindObj(this.dsTab.getColumn(i, "tabId"));
        		if (nRight - objTab.getOffsetLeft() <= this.divTab.getOffsetWidth())
        		{
        			nMoveIdx = i;
        			break;
        		}
        	}

        	this.fnMoveFirst(nMoveIdx);
        }

        this.fnCloseMenu = function(sMenuId, bCheck)
        {
        	if (this.gfnIsNull(sMenuId)) return;
        	if (this.gfnIsNull(bCheck)) bCheck	= this.objApp.gvCloseCheck;
        	var sWinId = this.gfnGetLookupData(this.objApp.gdsOpenMenu, this.FRAME_MENUCOLUMNS.menuId, sMenuId, this.FRAME_MENUCOLUMNS.winId);

        	if (this.gfnIsNull(sWinId)) return;

        	var objFrame = this.objApp.gvFrsWork.frames;
        	var objForm =  objFrame[sWinId].form;

        	var rtn = objForm.fnWorkFrameClose(bCheck);

        	if (rtn == false)
        	{
        		// 변경된 데이터가 있습니다. 현재 화면을 닫겠습니까?
        		this.gfnAlert("confirm.before.movepage", "", "confirm.before.movepage^" + sWinId, "fnMsgCallback");
        	} else
        	{
        		this.fnTabOnClose(sWinId);
        	}
        };

        this.fnTabOnClose = function (sWinId)
        {
            var objFrame = this.objApp.gvFrsWork.frames;

        	var sCurWinId = this.objApp.gvFrsWork.getActiveFrame().name;

        	var nRow = this.objApp.gdsOpenMenu.findRow(this.FRAME_MENUCOLUMNS.winId, sWinId);

        	// MDI 탭버튼 삭제
        	if (!this.gfnIsNull(objFrame[sWinId]) && nRow > -1)
        	{
        		this.bClose = false;
        		var objRemoveChildFrame = this.objApp.gvFrsWork.removeChild(sWinId);

        		// test
        		objRemoveChildFrame.destroy();
        		objRemoveChildFrame = null;
        		this.fnDelTab(sWinId);
        	}

        	// 열린화면 제거
        	this.gfnRemoveOpenMenuDs(sWinId);

            if (objFrame.length > 0)
            {
        		if (sWinId != sCurWinId )
        		{
        			this.objApp.gvFrsWork[sCurWinId].setFocus();
        		} else
        		{
        			sCurWinId = this.objApp.gvFrsWork.getActiveFrame();

        			if (sCurWinId != null)
        			{
        				this.fnSetActive(this.fvTabBtnPrefix + sCurWinId.name);
        			}
        		}
        	} else
        	{
        		this.gfnSetMain();	//변경이후에 main에 포커스를 준다.
        	}
        };

        this.fnDelTab = function (sWinId)
        {
        	var nRow = this.dsTab.findRow("winId", sWinId);
        	if (nRow < 0) return false;
        	var sTabId = this.fvTabBtnPrefix + sWinId;

        	// Removing Tab button.
        	this.fnDelTabBtn(sTabId);
        	this.dsTab.deleteRow(nRow);
        	this.fnRedrawTab();
        	return true;
        };

        this.fnDelTabBtn = function (sTabId)
        {
        	var sExtraBtnId = this.fvExtraBtnPrefix + sTabId;
        	var objTab = this.fnFindObj(sTabId);
        	var objExtraBtn = this.fnFindObj(sExtraBtnId);

        	var nShitLeft = objTab.getOffsetWidth() + this.fvBtnGap;
        	var nCurRow = this.dsTab.findRow("tabId", sTabId);

        	var nTabLeft = objTab.getOffsetLeft();

        	if (nTabLeft == 0)
        	{
        		if (this.dsTab.rowcount > 1)
        		{
        			this.btnPreMdi_onclick();
        		}
        	}

        	this.fnRemoveObj(sExtraBtnId);
        	this.fnRemoveObj(sTabId);

        	var sWinId = sTabId.replace(this.fvTabBtnPrefix, "");
        	var nRow = this.dsTab.findRow("winId", sWinId);

        	if (nTabLeft < 0)
        	{
        		for (var i = 0 ; i < nRow ; i++)
        		{
        			objTab = this.fnFindObj(this.dsTab.getColumn(i, "tabId"));
        			objExtraBtn = this.fnFindObj(this.fvExtraBtnPrefix + this.dsTab.getColumn(i, "tabId"));
        			objTab.move(objTab.getOffsetLeft() + nShitLeft, objTab.getOffsetTop());
        			objExtraBtn.move(objExtraBtn.getOffsetLeft() + nShitLeft, objExtraBtn.getOffsetTop());
        		}
        	} else
        	{
        		for (var i = nCurRow + 1; i < this.dsTab.rowcount; i++)
        		{
        			objTab = this.fnFindObj(this.dsTab.getColumn(i, "tabId"));
        			objExtraBtn = this.fnFindObj(this.fvExtraBtnPrefix + this.dsTab.getColumn(i, "tabId"));
        			objTab.move(objTab.getOffsetLeft() - nShitLeft, objTab.getOffsetTop());
        			objExtraBtn.move(objExtraBtn.getOffsetLeft() - nShitLeft, objExtraBtn.getOffsetTop());
        		}
        	 }

        	this.bClose = true;
        };

        this.fnRemoveObj = function (sObjId)
        {
        	if (this.fnFindObj(sObjId) == null)
        	{
        		return;
        	}
        	var objDelBtn = this.divTab.removeChild(sObjId);
        	if (objDelBtn != null)
        	{
        		objDelBtn.destroy();
        	}
        };

        this.fnCloseAll = function(bCheck)
        {
        	if (this.objApp.gdsOpenMenu.getRowCount() < 1) return;

        	var iFramesCnt = this.objApp.gvFrsWork.frames.length;

        	if (!bCheck)
        	{
        		for (var i=iFramesCnt; i>0; i--)
        		{
        			this.fnTabOnClose(this.objApp.gvFrsWork.frames[i-1].name);
        		}
        	} else
        	{
        		// 변경된 데이터가 있습니다. 전체 화면을 닫겠습니까?
        		this.gfnAlert("confirm.before.removeallpage", "", "confirm.before.removeallpage", "fnMsgCallback");
        	}
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.btnHome_onclick = function(obj,e)
        {
        	// 메인으로 이동
        	this.gfnSetMain();
        };

        this.btnTab_onclick = function (obj, e)
        {
        	var sWinId = obj.name.split(this.fvTabBtnPrefix).join("");

        	if(system.navigatorname.indexOf("nexacro")==-1)
        	{
        		var sMenuId = this.gfnGetLookupData(this.objApp.gdsOpenMenu, this.FRAME_MENUCOLUMNS.winId, sWinId, this.FRAME_MENUCOLUMNS.menuId);
        		var hash = "sMenuId:"+sMenuId;
        		//MyHistory.setLocationHash(hash, "");
        	}
        	this.isActiveFrame(sWinId);
        };

        this.btnExtra_onclick = function (obj, e)
        {
        	var sWinId = obj.name.split(this.fvTabBtnPrefix).join("").split(this.fvExtraBtnPrefix).join("");
        	var sMenuId = this.gfnGetLookupData(this.objApp.gdsOpenMenu, this.FRAME_MENUCOLUMNS.winId, sWinId, this.FRAME_MENUCOLUMNS.menuId);

        	this.fnCloseMenu(sMenuId);

        	this.bClose = true;
        };

        this.btnPreMdi_onclick = function (obj, e)
        {
        	this.fnMoveFirst(this.fnGetFirstTabIndex() - 1);
        	this.fnRedrawTab();
        };

        this.btnNexMdi_onclick = function (obj, e)
        {
        	this.fnMoveFirst(this.fnGetFirstTabIndex() + 1);
        	this.fnRedrawTab();
        };

        this.btnCloseAll_onclick = function(obj,e)
        {
        	this.fnCloseAll(false);
        };

        this.btnList_onclick = function(obj,e)
        {
        	console.log("btnList_onclick");
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frm_Mdi_onload,this);
            this.btnLeftMenuShowHide.addEventHandler("onclick",this.btnLeftMenuShowHide_onclick,this);
            this.btnHome.addEventHandler("onclick",this.btnHome_onclick,this);
            this.btnHorizontal.addEventHandler("onclick",this.btnArrange_onclick,this);
            this.btnVertical.addEventHandler("onclick",this.btnArrange_onclick,this);
            this.btnCascade.addEventHandler("onclick",this.btnArrange_onclick,this);
            this.btnMaximize.addEventHandler("onclick",this.btnArrange_onclick,this);
            this.btnCloseAll.addEventHandler("onclick",this.btnCloseAll_onclick,this);
            this.btnList.addEventHandler("onclick",this.btnList_onclick,this);
            this.btnNexMdi.addEventHandler("onclick",this.btnNexMdi_onclick,this);
            this.btnPreMdi.addEventHandler("onclick",this.btnPreMdi_onclick,this);
            this.pDiv00.form.grdOpenMenu.addEventHandler("oncellclick",this.pdvOpenMenu_grdOpenMenu_oncellclick,this);
        };
        this.loadIncludeScript("frm_Mdi.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
