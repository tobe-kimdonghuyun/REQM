(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frameMenu");
            this.set_titletext("메뉴프레임");
            this.set_cssclass("frm_RF_Menu");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBtnMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LV\" type=\"STRING\" size=\"256\"/><Column id=\"HIPO_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MODULE_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSettingsMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ENGL_NM\" type=\"string\" size=\"32\"/><Column id=\"ENGL_DISPLAY_PATH\" type=\"string\" size=\"32\"/><Column id=\"MODULE_CD\" type=\"string\" size=\"32\"/><Column id=\"CMMNBTNADD\" type=\"string\" size=\"32\"/><Column id=\"DISPLAY_PATH\" type=\"string\" size=\"32\"/><Column id=\"SYTM_FLAG_CD\" type=\"string\" size=\"32\"/><Column id=\"MENU_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"PARM\" type=\"undefined\" size=\"0\"/><Column id=\"CMMNBTNSAVE\" type=\"string\" size=\"32\"/><Column id=\"MENU_ID\" type=\"string\" size=\"32\"/><Column id=\"MENU_URL\" type=\"undefined\" size=\"0\"/><Column id=\"PRGM_FILE_NM\" type=\"undefined\" size=\"0\"/><Column id=\"MENU_LV\" type=\"bigdecimal\" size=\"16\"/><Column id=\"SEARCH_SCOPE_CD\" type=\"undefined\" size=\"0\"/><Column id=\"MENU_PATH\" type=\"string\" size=\"32\"/><Column id=\"MENU_FLAG_CD\" type=\"string\" size=\"32\"/><Column id=\"CMMNBTNINIT\" type=\"string\" size=\"32\"/><Column id=\"CMMNBTNPRINT\" type=\"string\" size=\"32\"/><Column id=\"CMMNBTNEXCELDOWN\" type=\"string\" size=\"32\"/><Column id=\"CMMNBTNSEARCH\" type=\"string\" size=\"32\"/><Column id=\"CMMNBTNDEL\" type=\"string\" size=\"32\"/><Column id=\"MENU_NM\" type=\"string\" size=\"32\"/><Column id=\"REMK\" type=\"undefined\" size=\"0\"/><Column id=\"HIPO_MENU_ID\" type=\"string\" size=\"32\"/><Column id=\"PRGM_ID\" type=\"undefined\" size=\"0\"/><Column id=\"PRGM_PATH\" type=\"undefined\" size=\"0\"/></ColumnInfo><Rows><Row><Col id=\"MENU_ENGL_NM\">설정</Col><Col id=\"ENGL_DISPLAY_PATH\">설정</Col><Col id=\"CMMNBTNADD\">0</Col><Col id=\"DISPLAY_PATH\">설정</Col><Col id=\"SYTM_FLAG_CD\">MO</Col><Col id=\"MENU_ORDR\">5</Col><Col id=\"CMMNBTNSAVE\">0</Col><Col id=\"MENU_ID\">SET00M</Col><Col id=\"MENU_LV\">0</Col><Col id=\"MENU_PATH\">,SET00M</Col><Col id=\"MENU_FLAG_CD\">M</Col><Col id=\"CMMNBTNINIT\">0</Col><Col id=\"CMMNBTNPRINT\">0</Col><Col id=\"CMMNBTNEXCELDOWN\">0</Col><Col id=\"CMMNBTNSEARCH\">0</Col><Col id=\"CMMNBTNDEL\">0</Col><Col id=\"MENU_NM\">설정</Col><Col id=\"REMK\"/><Col id=\"HIPO_MENU_ID\">0000000000</Col><Col id=\"MODULE_CD\">US</Col></Row><Row><Col id=\"MENU_ENGL_NM\">사용자 설정</Col><Col id=\"ENGL_DISPLAY_PATH\">설정 &gt; 사용자 설정</Col><Col id=\"CMMNBTNADD\">0</Col><Col id=\"DISPLAY_PATH\">설정 &gt; 사용자 설정</Col><Col id=\"SYTM_FLAG_CD\">MO</Col><Col id=\"MENU_ORDR\">1</Col><Col id=\"CMMNBTNSAVE\">0</Col><Col id=\"MENU_ID\">SET10M</Col><Col id=\"MENU_LV\">1</Col><Col id=\"MENU_PATH\">,SET00M,SET10M</Col><Col id=\"MENU_FLAG_CD\">M</Col><Col id=\"CMMNBTNINIT\">0</Col><Col id=\"CMMNBTNPRINT\">0</Col><Col id=\"CMMNBTNEXCELDOWN\">0</Col><Col id=\"CMMNBTNSEARCH\">0</Col><Col id=\"CMMNBTNDEL\">0</Col><Col id=\"MENU_NM\">사용자 설정</Col><Col id=\"HIPO_MENU_ID\">SET00M</Col><Col id=\"MODULE_CD\">US</Col></Row><Row><Col id=\"MENU_ENGL_NM\">테마 설정</Col><Col id=\"ENGL_DISPLAY_PATH\">설정 &gt; 사용자 설정 &gt; 테마 설정</Col><Col id=\"CMMNBTNADD\">0</Col><Col id=\"DISPLAY_PATH\">설정 &gt; 사용자 설정 &gt; 테마 설정</Col><Col id=\"SYTM_FLAG_CD\">MO</Col><Col id=\"MENU_ORDR\">1</Col><Col id=\"CMMNBTNSAVE\">0</Col><Col id=\"MENU_ID\">SET11M</Col><Col id=\"MENU_LV\">2</Col><Col id=\"MENU_PATH\">,SET00M,SET10M,SET11M</Col><Col id=\"MENU_FLAG_CD\">M</Col><Col id=\"CMMNBTNPRINT\">0</Col><Col id=\"CMMNBTNINIT\">0</Col><Col id=\"CMMNBTNEXCELDOWN\">0</Col><Col id=\"CMMNBTNSEARCH\">0</Col><Col id=\"CMMNBTNDEL\">0</Col><Col id=\"MENU_NM\">테마 설정</Col><Col id=\"HIPO_MENU_ID\">SET10M</Col><Col id=\"MODULE_CD\">US</Col><Col id=\"MENU_URL\">frame::frmThemeSetting.xfdl</Col><Col id=\"PRGM_FILE_NM\">frmThemeSetting.xfdl</Col><Col id=\"PRGM_PATH\">frame::frmThemeSetting.xfdl</Col><Col id=\"PRGM_ID\">SET11M</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGrdMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LV\" type=\"STRING\" size=\"256\"/><Column id=\"HIPO_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MODULE_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ENGL_NM\" type=\"string\" size=\"32\"/><Column id=\"ENGL_DISPLAY_PATH\" type=\"string\" size=\"32\"/><Column id=\"MODULE_CD\" type=\"string\" size=\"32\"/><Column id=\"CMMNBTNADD\" type=\"string\" size=\"32\"/><Column id=\"DISPLAY_PATH\" type=\"string\" size=\"32\"/><Column id=\"SYTM_FLAG_CD\" type=\"string\" size=\"32\"/><Column id=\"MENU_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"PARM\" type=\"undefined\" size=\"0\"/><Column id=\"CMMNBTNSAVE\" type=\"string\" size=\"32\"/><Column id=\"MENU_ID\" type=\"string\" size=\"32\"/><Column id=\"MENU_URL\" type=\"undefined\" size=\"0\"/><Column id=\"PRGM_FILE_NM\" type=\"undefined\" size=\"0\"/><Column id=\"MENU_LV\" type=\"bigdecimal\" size=\"16\"/><Column id=\"SEARCH_SCOPE_CD\" type=\"undefined\" size=\"0\"/><Column id=\"MENU_PATH\" type=\"string\" size=\"32\"/><Column id=\"MENU_FLAG_CD\" type=\"string\" size=\"32\"/><Column id=\"CMMNBTNINIT\" type=\"string\" size=\"32\"/><Column id=\"CMMNBTNPRINT\" type=\"string\" size=\"32\"/><Column id=\"CMMNBTNEXCELDOWN\" type=\"string\" size=\"32\"/><Column id=\"CMMNBTNSEARCH\" type=\"string\" size=\"32\"/><Column id=\"CMMNBTNDEL\" type=\"string\" size=\"32\"/><Column id=\"MENU_NM\" type=\"string\" size=\"32\"/><Column id=\"REMK\" type=\"undefined\" size=\"0\"/><Column id=\"HIPO_MENU_ID\" type=\"string\" size=\"32\"/><Column id=\"PRGM_ID\" type=\"undefined\" size=\"0\"/><Column id=\"PRGM_PATH\" type=\"undefined\" size=\"0\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00","0","0",null,"160","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_RF_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divMenu","0","160","120",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_RF_1Depth");
            this.addChild(obj.name, obj);

            obj = new Static("Static00",null,"0","1",null,"0","0",null,null,null,null,this.divMenu.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_RF_LineDepth");
            this.divMenu.addChild(obj.name, obj);

            obj = new Grid("grdMenu","142","180",null,null,"0","40",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsGrdMenu");
            obj.set_treeuseimage("true");
            obj.set_treeuseexpandkey("false");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseline("false");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_RF_Menu");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusebutton("no");
            obj.set_extendsizetype("none");
            obj.set_visible("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"55\"/></Rows><Band id=\"body\"><Cell displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:MENU_LV\" text=\"bind:MENU_NM\" treestartlevel=\"1\" cssclass=\"EXPR(MENU_LV==&apos;1&apos;?&quot;cell_RF_Lev0&quot;:MENU_LV==&apos;2&apos;?&quot;cell_RF_Lev1&quot;:&quot;&quot;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdivSearchMenu","550","100","420","225",null,null,null,null,null,null,this);
            obj.set_text("pdiv00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","0","0","420",null,null,"0",null,null,null,null,this.pdivSearchMenu.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsSearchMenu");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_RF_MenuSch");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"50\"/></Rows><Band id=\"body\"><Cell text=\"bind:MENU_NM\"/></Band></Format></Formats>");
            this.pdivSearchMenu.addChild(obj.name, obj);

            obj = new Static("Static02","35","71",null,"1","35",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_RF_Line");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"20","40","40","30",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_TF_Close");
            this.addChild(obj.name, obj);

            obj = new Button("btnHome",null,"20","40","40","75",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_RF_Home");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","30","20","110","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("홍길동");
            obj.set_cssclass("sta_RF_Name");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","sta01:0","20","30","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("님");
            obj.set_cssclass("sta_RF_Id");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnLogout","Static01_00:10","25","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_RF_Logout");
            obj.set_text("로그아웃");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSearch","30","90",null,"50","30",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("edt_RF_Sch");
            obj.set_tooltiptype("default");
            obj.set_hotkey("");
            obj.set_displaynulltext("메뉴명을 입력해주세요.");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch","edtSearch:-50","90","50","50",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_RF_Sch");
            obj.set_text("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divMenu.form
            obj = new Layout("default","",0,0,this.divMenu.form,function(p){});
            this.divMenu.form.addLayout(obj.name, obj);

            //-- Default Layout : this.pdivSearchMenu.form
            obj = new Layout("default","",0,0,this.pdivSearchMenu.form,function(p){});
            this.pdivSearchMenu.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",480,768,this,function(p){});
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmMenu.xfdl", function() {
        /**
        *  Mobile 프로젝트
        *  @FileName 	frmMenu.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2023/10/30
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2023/10/30			TOBESOFT					최초생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.objApp = nexacro.getApplication();

        this.fvFirstGap 		= 0;
        this.fvBtnGap 			= 0;
        this.fvBtnHeight 		= 110;
        this.fvLeftBtnPrefix 	= "LEFT_";
        this.fvLeftBtnCss 	=
        {
        	"10100000M" 	: "btn_RF_1Depth02",	//디자인
        	"10300000M" 	: "btn_RF_1Depth03",	//기능샘플
        	"10400000M" 	: "btn_RF_1Depth04",	//시스템관리
        	"10500000M" 	: "btn_RF_1Depth01",	//커뮤니티
        	"SET00M"	    : "btn_RF_1Depth05"		//설정
        }
        this.fvSelectedBtn;

         /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        /**
         * @description 화면 onload시 처리내역(필수)
        */
        this.frameMenu_onload = function(obj,e)
        {
        	if (system.navigatorname == "nexacro" && this.objApp.gvOs.indexOf("ANDROID") == -1)
        	{
        		this.grdMenu.set_bottom(60);
        	}
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/


        /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
         * @description menulevel이 0인 메뉴 dsBtnMenu로 세팅, 설정(사용자설정)은 직접 추가.
         * 로그인 시 실행
         */
        this.fnsetDsBtnMenu = function()
        {
        	//설정 메뉴데이터 append
        	//this.objApp.gdsMenu.appendData(this.dsSettingsMenu, true, false)
        	//0 depth인 메뉴 -> dsBtnMenu
        	var sFilter = this.FRAME_MENUCOLUMNS.menuLevel + " == '0' ";
        	this.objApp.gdsMenu.filter(sFilter);
        	this.dsBtnMenu.set_enableevent(false);
        	this.dsBtnMenu.copyData(this.objApp.gdsMenu, true);
        	this.dsBtnMenu.set_enableevent(true);
        	//0 depth 아닌 메뉴 -> dsGrdMenu
        	var sFilter = this.FRAME_MENUCOLUMNS.menuLevel + " != '0' ";
        	this.objApp.gdsMenu.filter(sFilter);
        	this.dsGrdMenu.set_enableevent(false);
        	this.dsGrdMenu.copyData(this.objApp.gdsMenu, true);
        	this.dsGrdMenu.set_enableevent(true);

        	this.objApp.gdsMenu.filter("");
        	//메뉴 검색을 위한 ds 세팅
        	this.dsSearchMenu.copyData(this.objApp.gdsMenu);

        	this.fnSetLeftMenu();
        }

        /**
         * @description LeftMenu 버튼 추가하는 함수 호출
         */
        this.fnSetLeftMenu = function()
        {
        	var sMenuId;
        	var sMenuName;
        	for(var i=0; i < this.dsBtnMenu.getRowCount(); i++)
        	{
        		sMenuId = this.dsBtnMenu.getColumn(i, this.FRAME_MENUCOLUMNS.menuId);
        		sMenuName = this.dsBtnMenu.getColumn(i, this.FRAME_MENUCOLUMNS.menuNm);
        		if(this.gfnIsNull(this.divMenu.form.components[this.fvLeftBtnPrefix + sMenuId]))
        		{
        			this.fnCreateLeftMenu(sMenuId, sMenuName, i);
        		}else{
        			break;
        		}
        	}
        	//초기 화면은 left menu 첫번째 클릭한 화면
        	var sInitMenuId = this.dsBtnMenu.getColumn(0, this.FRAME_MENUCOLUMNS.menuId);
        	this.fnSetClickedBtnCss(sInitMenuId);
        	this.fnSetGrd(sInitMenuId);
        }

        /**
         * @description 버튼 생성, CSS 및 이벤트 추가
         */
        this.fnCreateLeftMenu = function(sLeftId, sMenuName, index)
        {
        	var objBtn = new Button();
        	objBtn.init(this.fvLeftBtnPrefix + sLeftId, 0, this.fnGetTop(sLeftId), null, this.fvBtnHeight, 0, null);
        	this.divMenu.form.addChild(objBtn.name, objBtn);

        	objBtn.set_text(sMenuName);
        	objBtn.set_cssclass(this.fvLeftBtnCss[sLeftId]);
        	objBtn.menuId = sLeftId;
        	objBtn.show();

        	//Left menu 버튼 클릭시 이벤트 추가
        	objBtn.setEventHandler("onclick", this.btnLeftMenu_onclick, this);
        }

        /**
         * @description 이전 메뉴버튼 기준으로 메뉴버튼 Top position 값 계산
         */
        this.fnGetTop = function(sLeftId)
        {
        	var nCurRow = this.dsBtnMenu.findRow(this.FRAME_MENUCOLUMNS.menuId, sLeftId);
        	if (nCurRow == 0) return this.fvFirstGap;

        	var objPrevBtn = this.fnFindObj(this.fvLeftBtnPrefix + this.dsBtnMenu.getColumn(nCurRow - 1, this.FRAME_MENUCOLUMNS.menuId));

        	return objPrevBtn.getOffsetBottom() + this.fvBtnGap;
        }

        /**
         * @description menu btn 찾는 함수
         */
        this.fnFindObj = function (sId)
        {
        	return this.divMenu.form.components[sId];
        };

        /**
         * @description 클릭시 css 적용 스크립트 처리.
         */
        this.fnSetClickedBtnCss = function(sMenuId)
        {
        	if(!this.gfnIsNull(this.fvSelectedBtn))
        	{
        		if(this.fvSelectedBtn.menuId == sMenuId) return;
        		this.fvSelectedBtn.set_cssclass(this.fvLeftBtnCss[this.fvSelectedBtn.menuId]);
        	}
        		this.fvSelectedBtn = this.divMenu.form.components[this.fvLeftBtnPrefix + sMenuId];
        		this.fvSelectedBtn.set_cssclass(this.fvLeftBtnCss[sMenuId]+"S");
        }

        /**
         * @description 클릭시 grdMenu filter 처리
         */
        this.fnSetGrd = function(sMenuId)
        {
        	var sModuleCd = this.objApp.gdsMenu.lookup(this.FRAME_MENUCOLUMNS.menuId, sMenuId, this.FRAME_MENUCOLUMNS.groupId);
        	var sFilter = this.FRAME_MENUCOLUMNS.groupId + " == '" + sModuleCd + "' ";
        	this.dsGrdMenu.filter(sFilter);
        }

        /**
         * @description 선택한 메뉴 화면 open
         */
        this.fnFormOpen = function(objDs,nTargetRow)
        {
        	if (this.gfnIsNull(objDs)) 		return;
        	if (this.gfnIsNull(nTargetRow)) return;

        	var oObj = {
        		ds    : objDs,  	// 메뉴 dataset
        		nRow  : nTargetRow, // 선택된
                sMenu : "Y"         // 메뉴클릭 여부
        	};
            this.gfnCallM(oObj);
        };

        /**
         * @description 검색을 위한 데이터셋 검색어로 필터링
         */
        this.fnSetDsSearchMenuFilter = function(sSearchVal)
        {
        	this.dsSearchMenu.filter("");
        	if(this.gfnIsNull(sSearchVal) || this.dsSearchMenu.getRowCount() < 1)
        	{
        		return;
        	} else
        	{
        		var sSearchValue = sSearchVal.toLowerCase();
        		var sExpr = "(String(" + this.FRAME_MENUCOLUMNS.menuNm + ").replace(/\\s/gi, '').toLowerCase()).indexOf('" + sSearchValue + "') >= 0"
        					+ " && (" + this.FRAME_MENUCOLUMNS.prgmFileNm + " != undefined )";
        		var iSearchCount = this.dsSearchMenu.getCaseCountNF(sExpr);

        		if(iSearchCount >= 0)
        		{
        			var nRowIdx = 0;
        			this.fnOpenMenuSearchPopup();
        			this.dsSearchMenu.filter(sExpr);
        			this.fnResetBtnMenuCssClass();
        		}else{
        			this.dsSearchMenu.filter("NONE");
        		}
        	}
        }

        /**
         * @description 메뉴 검색시 pdiv 출력
         */
        this.fnOpenMenuSearchPopup = function()
        {
        	if(!this.pdivSearchMenu.isPopup())
        	{
        		var nWidth = this.edtSearch.getOffsetWidth();
        		this.pdivSearchMenu.form.grd00.setOffsetWidth(nWidth);
        		this.pdivSearchMenu.trackPopupByComponent(this.edtSearch, 0, 0 + this.edtSearch.height, nWidth, 225, "", false);
        	}
        };


        /**
         * @description click된 메뉴 버튼이 있을 경우 검색시 cssclass 원복 및 버튼 할당된 form value 비우기.
         */
        this.fnResetBtnMenuCssClass = function()
        {
        	if(!this.gfnIsNull(this.fvSelectedBtn))
        	{
        		var sOriCssClass = this.fvSelectedBtn.cssclass;
        		var sNewCssClass = sOriCssClass.substr(0, sOriCssClass.length-1);
        		this.fvSelectedBtn.set_cssclass(sNewCssClass);
        		this.fvSelectedBtn = null;
        	}
        }

         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/

        //닫기버튼 클릭
        this.btnClose_onclick = function(obj,e)
        {
        	this.objApp.gvBase.fnAction("MENU", false);
        };
        //홈버튼 클릭
        this.btnHome_onclick = function(obj,e)
        {
        	this.objApp.gvBase.divCenter.form.divWork.set_url("");
        	this.objApp.gvBase.fnAction("HOME", true);
        };
        //css 처리 및 그리드 필터 적용
        this.btnLeftMenu_onclick = function(obj,e)
        {
        	var sMenuId = obj.menuId;
        	this.fnSetClickedBtnCss(sMenuId);
        	this.fnSetGrd(sMenuId);
        };
        //메뉴 그리드 셀 클릭시 tree status 처리 및 navigation
        this.grdMenu_oncellclick = function(obj,e)
        {
        	if (obj.isTreeLeafRow(e.row))
        	{
        		this.fnFormOpen(this.dsGrdMenu, e.row);
        	}
        	else
        	{
        		var nStatus  = obj.getTreeStatus(obj.getTreeRow(e.row));
        		var nStatusRow = obj.getTreeRow(e.row);

        		if (nStatus == 1)
        		{
        			obj.setTreeStatus(nStatusRow, false);
        		}
        		else
        		{
        			obj.setTreeStatus(nStatusRow, true);
        		}
        	}
        };

        //로그아웃
        this.btnLogout_onclick = function(obj,e)
        {
        	this.objApp.gvBase.fnAction("EXIT", false);
        };

        //메뉴 검색버튼 클릭
        this.btnSearch_onclick = function(obj,e)
        {
        	var objEdit = this.edtSearch;
        	var sMenuStr = objEdit.value;
        	if(this.gfnIsNull(sMenuStr))
        	{
        		return;
        	}
        	this.fnSetDsSearchMenuFilter(objEdit.value.replace(/ /gi, ''));
        };

        //edtSearch에서 enter 누를시 메뉴 검색
        this.edtSearch_onkeydown = function(obj,e)
        {
        	if( e.keycode == 13)
        	{
        		var objEdit = this.edtSearch;
        		var sMenuStr = objEdit.value;
        		if(this.gfnIsNull(sMenuStr))
        		{
        			return;
        		}
        		this.fnSetDsSearchMenuFilter(objEdit.value.replace(/ /gi, ''));
        	}
        };

        this.pdivSearchMenu_grd00_oncellclick = function(obj,e)
        {
        	//gdsMenu에서 해당 메뉴명의 row 받아오기.
        	var objDs = obj.getBindDataset();
        	var sMenuNm = objDs.getColumn(e.row, this.FRAME_MENUCOLUMNS.menuNm);
        	var nRowNum = this.objApp.gdsMenu.findRow(this.FRAME_MENUCOLUMNS.menuNm, sMenuNm);

        	//cell 클릭시 pdiv close처리
        	this.pdivSearchMenu.closePopup();
        	//검색 edt 값 초기화
        	this.edtSearch.set_value(null);
        	//navigation.
        	this.fnFormOpen(this.objApp.gdsMenu, nRowNum);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frameMenu_onload,this);
            this.grdMenu.addEventHandler("oncellclick",this.grdMenu_oncellclick,this);
            this.pdivSearchMenu.form.grd00.addEventHandler("oncellclick",this.pdivSearchMenu_grd00_oncellclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.btnHome.addEventHandler("onclick",this.btnHome_onclick,this);
            this.sta01.addEventHandler("onclick",this.sta01_onclick,this);
            this.btnLogout.addEventHandler("onclick",this.btnLogout_onclick,this);
            this.edtSearch.addEventHandler("onkeydown",this.edtSearch_onkeydown,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
        };
        this.loadIncludeScript("frmMenu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
