(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Left");
            if (Form == this.constructor)
            {
                this._setFormPosition(440,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"HIPO_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LEAF_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_STS\" type=\"STRING\" size=\"256\"/><Column id=\"SYTM_FLAG_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMyMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MODULE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAY_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UP_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Panel("panMenuTab","60","15",null,"44","60",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnMenu\"/><PanelItem id=\"PanelItem01\" componentid=\"btnMyMenu\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00","60.00","panMenuTab:20",null,"40","60",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_LF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMenu","60","sta00_00:10",null,null,"60","20",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsMenu");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseline("false");
            obj.set_scrollbartype("autoindicator");
            obj.set_autofittype("col");
            obj.set_treeuseexpandkey("false");
            obj.set_treeuseimage("true");
            obj.set_treeusebutton("no");
            obj.set_cssclass("grd_LF_Menu");
            obj.set_autosizingtype("row");
            obj.set_extendsizetype("row");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"227\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"expr:MENU_NM  +&quot;-&quot;+ MENU_URL\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:MENU_LVL\" cssclass=\"expr:dataset.parent.fnSetGridCssClass(comp, MENU_LVL, currow)\" padding=\"0px\" autosizerow=\"limitmin\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnMyMenu","225","30","135","100%",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_LF_Menu");
            obj.set_tooltiptext("즐겨찾기메뉴");
            obj.set_text("즐겨찾기");
            obj.set_flexgrow("1");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnMenu","60","30","135","100%",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_LF_MenuS");
            obj.set_tooltiptext("전체메뉴");
            obj.set_text("메뉴");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Div("divGuide","625.00","47","450","385",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("div00");
            obj.set_visible("false");
            obj.set_cssclass("div_GD_Tip");
            this.addChild(obj.name, obj);

            obj = new Button("btnLeftMenuShowHide","51.00","162","30","30",null,null,null,null,null,null,this.divGuide.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_LF_Close");
            this.divGuide.addChild(obj.name, obj);

            obj = new Button("btnMyMenu","180.00","57","135","12.21%",null,null,null,null,null,null,this.divGuide.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_LF_Menu");
            obj.set_tooltiptext("즐겨찾기메뉴");
            obj.set_text("즐겨찾기");
            obj.set_flexgrow("1");
            this.divGuide.addChild(obj.name, obj);

            obj = new Button("btnMenu","45.00","57","135","12.21%",null,null,null,null,null,null,this.divGuide.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_LF_MenuS");
            obj.set_tooltiptext("전체메뉴");
            obj.set_text("메뉴");
            obj.set_flexgrow("1");
            this.divGuide.addChild(obj.name, obj);

            obj = new Static("Static00","50","230","314","122",null,null,null,null,null,null,this.divGuide.form);
            obj.set_taborder("3");
            obj.set_text("divMymenu  visible=true / false 적용");
            this.divGuide.addChild(obj.name, obj);

            obj = new Button("Button00","51","112","62.00%","40",null,null,null,null,null,null,this.divGuide.form);
            obj.set_taborder("4");
            obj.set_text("즐겨찾기 관리");
            obj.set_cssclass("btn_WF_Yes");
            this.divGuide.addChild(obj.name, obj);

            obj = new Div("divMymenu","60","sta00_00:10",null,null,"60","20",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div00");
            obj.set_background("#ffffff");
            obj.set_formscrollbartype("none none");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","0",null,null,"0","0",null,null,null,null,this.divMymenu.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsMyMenu");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_LF_Mymenu");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"219\"/><Column size=\"40\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:Column0\" cssclass=\"CellEnd\"/><Cell col=\"1\" cssclass=\"CellX\" displaytype=\"buttoncontrol\" edittype=\"button\" border=\"1px solid #dddddd,0px solid #dddddd\"/></Band></Format></Formats>");
            this.divMymenu.addChild(obj.name, obj);

            obj = new Button("btnLeftMenuShowHide00","0","72","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_LF_Open");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnLeftMenuShowHide",null,"72","30","30","60",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_LF_Close");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divGuide.form
            obj = new Layout("default","",0,0,this.divGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnLeftMenuShowHide.set_taborder("0");
                p.btnLeftMenuShowHide.set_cssclass("btn_LF_Close");
                p.btnLeftMenuShowHide.move("51.00","162","30","30",null,null);

                p.btnMyMenu.set_taborder("1");
                p.btnMyMenu.set_cssclass("btn_LF_Menu");
                p.btnMyMenu.set_tooltiptext("즐겨찾기메뉴");
                p.btnMyMenu.set_text("즐겨찾기");
                p.btnMyMenu.set_flexgrow("1");
                p.btnMyMenu.move("180.00","57","135","12.21%",null,null);

                p.btnMenu.set_taborder("2");
                p.btnMenu.set_cssclass("btn_LF_MenuS");
                p.btnMenu.set_tooltiptext("전체메뉴");
                p.btnMenu.set_text("메뉴");
                p.btnMenu.set_flexgrow("1");
                p.btnMenu.move("45.00","57","135","12.21%",null,null);

                p.Static00.set_taborder("3");
                p.Static00.set_text("divMymenu  visible=true / false 적용");
                p.Static00.move("50","230","314","122",null,null);

                p.Button00.set_taborder("4");
                p.Button00.set_text("즐겨찾기 관리");
                p.Button00.set_cssclass("btn_WF_Yes");
                p.Button00.move("51","112","62.00%","40",null,null);
            	}
            );
            this.divGuide.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divGuide.form
            obj = new Layout("Layout0","",0,0,this.divGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divGuide.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divMymenu.form
            obj = new Layout("default","",0,0,this.divMymenu.form,function(p){});
            this.divMymenu.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",440,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frm_Left.xfdl", function() {
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
        this.currsMenuId;
        this.currsModuleCd;
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.Form_Left_onload = function(obj,e) {
        	this.gfnFormOnload(obj);
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/

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
        * @description 		: Depth별 CSSCLASS를 적용하기 위한 expr용 함수
        * @param objGrid	: 그리드 컴포넌트
        * @param nLevel     : 현재 Row의 Tree Level
        * @param nRow       : 현재 Row Index
        * @return 			: 없음
        */
        this.fnSetGridCssClass = function(objGrid, nLevel, nRow)
        {
        	if(objGrid == null) {
        		objGrid = this.grdMenu;
        	}

        	//Tree Row Index 가져오기
        	var nTreeRow = objGrid.getTreeRow(nRow)

        	//현재 트리 상태 가져오기
        	var sStatus = objGrid.getTreeStatus(nTreeRow);

        	var sCssClass = "";

        	//접기 상태일 경우 접기상태 표시를 위한 CSSCLASS 적용
        	if(sStatus=="0")
        	{
        		sCssClass = "treeCellCollapse";
        	}
        	//펼치기 상태일 경우 펼치기 상태 표시를 위한 CSSCLASS 적용
        	else if(sStatus=="1")
        	{
        		sCssClass = "treeCellExpand";
        	}

        	if(sStatus!="2") sCssClass +=", ";

        	//Tree Level 0을 표현하기 위한 CSSCLASS 적용
        	if(nLevel==0)
        	{
        		sCssClass += "cellTreeLevel0";
        	}
        	//Tree Level 1을 표현하기 위한 CSSCLASS 적용
        	else if(nLevel==1)
        	{
        		sCssClass += "cellTreeLevel1";
        	}
        	//Tree Level 2을 표현하기 위한 CSSCLASS 적용
        	else if(nLevel==2)
        	{
        		sCssClass += "cellTreeLevel2";
        	}

        	//설정될 CSSCLASS 리스트 정보를 리턴
        	return sCssClass;
        }

        this.fnFormOpen = function (sMenuId, objParam)
        {
        	if(this.gfnIsNull(sMenuId)) return;

        	this.gfnOpenMenu(sMenuId, objParam, false);
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.grdMenu_oncellclick = function(obj,e)
        {
        	// Tree 이미지 클릭시 리턴
        	if(e.clickitem == "treeitembutton") return;

        	var nRow = obj.getTreeRow(e.row);

        	// true 는 false 로 false 는 true 로 변경^1
        	var nStat = obj.getTreeStatus(nRow)^1;

        	// 자식이 없으면
        	if(nStat != 2) obj.setTreeStatus(nRow ,nStat);

        	// Click시 해당 메뉴 호출
        	var sMenuId = this.dsMenu.getColumn(this.dsMenu.rowposition, this.FRAME_MENUCOLUMNS.menuId);
        	var sPageUrl = this.dsMenu.getColumn(this.dsMenu.rowposition, this.FRAME_MENUCOLUMNS.menuUrl);

        	trace( "MenuId : " + sMenuId + "  // " + sPageUrl );
        	if(!(this.gfnIsNull(sMenuId) || this.gfnIsNull(sPageUrl))){
        		// 메뉴 화면 호출
        		this.fnFormOpen(sMenuId);
        	}
        };

        this.btnMenu_onclick = function(obj,e)
        {
        	this.divMymenu.visible = false;
        	this.btnMenu.set_cssclass("btn_LF_MenuS"); //class 교체 추가
        	this.btnMyMenu.set_cssclass("btn_LF_Menu");
        	this.btnMenu.cssclass = "btn_LF_MenuS";
        	this.btnMyMenu.cssclass = "btn_LF_Menu";
        };

        this.btnMyMenu_onclick = function(obj,e)
        {
        	this.divMymenu.visible = true;
        	this.btnMyMenu.set_cssclass("btn_LF_MenuS"); //class 교체 추가
        	this.btnMenu.set_cssclass("btn_LF_Menu");
        	this.btnMyMenu.cssclass = "btn_LF_MenuS";
        	this.btnMenu.cssclass = "btn_LF_Menu";
        };

        this.btnLeftMenuShowHide_onclick = function(obj,e)
        {
        	this.btnLeftMenuShowHide00.visible = true;
        	this.objApp.gvVfrsBody.set_separatesize("60,*"); //440,*
        };

        this.btnLeftMenuShowHide00_onclick = function(obj,e)
        {
        	this.objApp.gvVfrsBody.set_separatesize("390,*"); //440,*
        	this.btnLeftMenuShowHide00.visible = false;
        };

        this.divMymenu_Grid00_oncellclick = function(obj,e)
        {
        	// Click시 해당 메뉴 호출
        	var sMenuId = this.dsMyMenu.getColumn(this.dsMyMenu.rowposition, this.FRAME_MENUCOLUMNS.menuId);
        	var sPageUrl = this.dsMyMenu.getColumn(this.dsMyMenu.rowposition, this.FRAME_MENUCOLUMNS.menuUrl);

        	if(!(this.gfnIsNull(sMenuId) || this.gfnIsNull(sPageUrl))){
        		// 메뉴 화면 호출
        		this.fnFormOpen(sMenuId);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Left_onload,this);
            this.grdMenu.addEventHandler("oncellclick",this.grdMenu_oncellclick,this);
            this.btnMyMenu.addEventHandler("onclick",this.btnMyMenu_onclick,this);
            this.btnMenu.addEventHandler("onclick",this.btnMenu_onclick,this);
            this.divGuide.form.btnLeftMenuShowHide.addEventHandler("onclick",this.btnLeftMenuShowHide_onclick,this);
            this.divGuide.form.btnMyMenu.addEventHandler("onclick",this.btnMenu_onclick,this);
            this.divGuide.form.btnMenu.addEventHandler("onclick",this.btnMenu_onclick,this);
            this.divMymenu.form.Grid00.addEventHandler("oncellclick",this.divMymenu_Grid00_oncellclick,this);
            this.btnLeftMenuShowHide00.addEventHandler("onclick",this.btnLeftMenuShowHide00_onclick,this);
            this.btnLeftMenuShowHide.addEventHandler("onclick",this.btnLeftMenuShowHide_onclick,this);
        };
        this.loadIncludeScript("frm_Left.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
