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
                this._setFormPosition(480,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"HIPO_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LEAF_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_STS\" type=\"STRING\" size=\"256\"/><Column id=\"SYTM_FLAG_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("test", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">종합서비스처리</Col></Row><Row><Col id=\"Column0\">배정신청 관리</Col></Row><Row><Col id=\"Column0\">인계인수 처리</Col></Row><Row><Col id=\"Column0\">전기사용료 내역</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divGuide","575","110","450","230",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("false");
            obj.set_cssclass("div_GD_Tip");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","45","117","314","73",null,null,null,null,null,null,this.divGuide.form);
            obj.set_taborder("0");
            obj.set_text("★★★ 로그인후 \r\npanLog  visible=true / false 적용");
            this.divGuide.addChild(obj.name, obj);

            obj = new Button("btnLogin","32","145","210","50",null,null,null,null,null,null,this.divGuide.form);
            obj.set_taborder("1");
            obj.set_tooltiptext("로그인");
            obj.set_cssclass("btn_TF_Login");
            obj.set_text("로그인을 해주세요");
            obj.set_fittocontents("width");
            this.divGuide.addChild(obj.name, obj);

            obj = new Button("btn01","0","0","69","20",null,null,null,null,null,null,this.divGuide.form);
            obj.set_taborder("2");
            obj.set_text("아이디 찾기");
            obj.set_cssclass("btn_MF_TxtBtn");
            obj.set_fittocontents("width");
            this.divGuide.addChild(obj.name, obj);

            obj = new Static("sta02","79.00","0","5","20",null,null,null,null,null,null,this.divGuide.form);
            obj.set_taborder("3");
            obj.set_text("|");
            obj.set_cssclass("btn_MF_TxtBtn");
            this.divGuide.addChild(obj.name, obj);

            obj = new Button("btn01_00","94.00","0","82","20",null,null,null,null,null,null,this.divGuide.form);
            obj.set_taborder("4");
            obj.set_text("비밀번호 찾기");
            obj.set_cssclass("btn_MF_TxtBtn");
            obj.set_fittocontents("width");
            this.divGuide.addChild(obj.name, obj);

            obj = new Panel("panPW","0","-2","54.44%","20",null,null,null,null,null,null,this.divGuide.form);
            obj.set_taborder("5");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btn01\"/><PanelItem id=\"PanelItem03\" componentid=\"sta02\"/><PanelItem id=\"PanelItem02\" componentid=\"btn01_00\"/></Contents>");
            this.divGuide.addChild(obj.name, obj);

            obj = new Button("btn01_00_00","53.00","0","52","20",null,null,null,null,null,null,this.divGuide.form);
            obj.set_taborder("6");
            obj.set_text("회원가입");
            obj.set_cssclass("btn_MF_TxtBtn");
            obj.set_fittocontents("width");
            this.divGuide.addChild(obj.name, obj);

            obj = new Panel("panRegi","245.00","-2","23.33%","20",null,null,null,null,null,null,this.divGuide.form);
            obj.set_taborder("7");
            obj.set_flexcrossaxisalign("end");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn01_00_00\"/></Contents>");
            this.divGuide.addChild(obj.name, obj);

            obj = new Panel("panID","0.00","70","77.78%","18",null,null,null,null,null,null,this.divGuide.form);
            obj.set_taborder("8");
            obj.set_flexcrossaxisalign("end");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panPW\"/><PanelItem id=\"PanelItem03\" componentid=\"panRegi\"/></Contents>");
            this.divGuide.addChild(obj.name, obj);

            obj = new Panel("panLog","29","17","350","90",null,null,null,null,null,null,this.divGuide.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_verticalgap("20");
            obj.set_background("#ffffff");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnLogin\"/><PanelItem id=\"PanelItem02\" componentid=\"panID\"/></Contents>");
            this.divGuide.addChild(obj.name, obj);

            obj = new Div("Div00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Panel("panLogIn","20","0",null,"100","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj.set_background("#ffffff");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnUser\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtn\"/></Contents>");
            this.Div00.addChild(obj.name, obj);

            obj = new Panel("PanLog","20","0",null,"100","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_type("vertical");
            obj.set_verticalgap("20");
            obj.set_background("#ffffff");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnLogin\"/><PanelItem id=\"PanelItem02\" componentid=\"panID\"/></Contents>");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnLogin","20","0","33.85%","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_tooltiptext("로그인");
            obj.set_cssclass("btn_TF_Login");
            obj.set_text("로그인을 해주세요");
            obj.set_fittocontents("width");
            this.Div00.addChild(obj.name, obj);

            obj = new Tab("Tab00","20","110",null,"590","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_WF_Menu");
            obj.set_tabjustify("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Div00.form.Tab00);
            obj.set_text("전체메뉴");
            this.Div00.form.Tab00.addChild(obj.name, obj);

            obj = new Grid("grdMenu","0","15",null,null,"0","0",null,null,null,null,this.Div00.form.Tab00.Tabpage1.form);
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"227\"/></Columns><Rows><Row size=\"46\"/></Rows><Band id=\"body\"><Cell text=\"bind:MENU_NM\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:MENU_LVL\" cssclass=\"expr:dataset.parent.fnSetGridCssClass(comp, MENU_LVL, currow)\" padding=\"0px\" autosizerow=\"limitmin\"/></Band></Format></Formats>");
            this.Div00.form.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Div00.form.Tab00);
            obj.set_text("즐겨찾기");
            this.Div00.form.Tab00.addChild(obj.name, obj);

            obj = new Button("Button00","0","15","100.00%","40",null,null,null,null,null,null,this.Div00.form.Tab00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("즐겨찾기 관리");
            obj.set_cssclass("btn_WF_Yes");
            this.Div00.form.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","60","100.00%",null,null,"0",null,null,null,null,this.Div00.form.Tab00.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_binddataset("test");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_LF_Mymenu");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"46\"/></Rows><Band id=\"body\"><Cell text=\"bind:Column0\" cssclass=\"CellEnd\"/></Band></Format></Formats>");
            this.Div00.form.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn01","0","1","69","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("아이디 찾기");
            obj.set_cssclass("btn_MF_TxtBtn");
            obj.set_fittocontents("width");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta02","79.00","0","5","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("|");
            obj.set_cssclass("btn_MF_TxtBtn");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn01_00","94.00","1","82","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("비밀번호 찾기");
            obj.set_cssclass("btn_MF_TxtBtn");
            obj.set_fittocontents("width");
            this.Div00.addChild(obj.name, obj);

            obj = new Panel("panPW","0","0","70%","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btn01\"/><PanelItem id=\"PanelItem03\" componentid=\"sta02\"/><PanelItem id=\"PanelItem02\" componentid=\"btn01_00\"/></Contents>");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn01_00_00","124.00","0","52","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("회원가입");
            obj.set_cssclass("btn_MF_TxtBtn");
            obj.set_fittocontents("width");
            this.Div00.addChild(obj.name, obj);

            obj = new Panel("panRegi","176.00","1","30%","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_flexcrossaxisalign("end");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn01_00_00\"/></Contents>");
            this.Div00.addChild(obj.name, obj);

            obj = new Panel("panID","30.00","325","100%","18",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_flexcrossaxisalign("end");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panPW\"/><PanelItem id=\"PanelItem03\" componentid=\"panRegi\"/></Contents>");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnUser","0","0.00%","210","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_tooltiptext("사용자");
            obj.set_cssclass("btn_TF_User");
            obj.set_text("홍길동님 안녕하세요.");
            obj.set_fittocontents("width");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01","0.00","0","103","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("나의 할일 (10)");
            obj.set_cssclass("btn_MF_LoginTxtD");
            obj.set_fittocontents("width");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button02","109.00","0","74","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("나의 정보");
            obj.set_cssclass("btn_MF_LoginTxt");
            obj.set_fittocontents("width");
            this.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel00","0.00","0","70%","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_horizontalgap("6");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button01\"/><PanelItem id=\"PanelItem01\" componentid=\"Button02\"/></Contents>");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","32.00","0","69","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("로그아웃");
            obj.set_cssclass("btn_WF_SmallBlack");
            obj.set_fittocontents("width");
            this.Div00.addChild(obj.name, obj);

            obj = new Panel("panBtnLogout","237.00","0","30%","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_horizontalgap("6");
            obj.set_visible("true");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00\"/></Contents>");
            this.Div00.addChild(obj.name, obj);

            obj = new Panel("panBtn","0.00","39","100%","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem02\" componentid=\"panBtnLogout\"/></Contents>");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"0","50","50","5",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_X");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divGuide.form
            obj = new Layout("default","",0,0,this.divGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("★★★ 로그인후 \r\npanLog  visible=true / false 적용");
                p.Static00.move("45","117","314","73",null,null);

                p.btnLogin.set_taborder("1");
                p.btnLogin.set_tooltiptext("로그인");
                p.btnLogin.set_cssclass("btn_TF_Login");
                p.btnLogin.set_text("로그인을 해주세요");
                p.btnLogin.set_fittocontents("width");
                p.btnLogin.move("32","145","210","50",null,null);

                p.btn01.set_taborder("2");
                p.btn01.set_text("아이디 찾기");
                p.btn01.set_cssclass("btn_MF_TxtBtn");
                p.btn01.set_fittocontents("width");
                p.btn01.move("0","0","69","20",null,null);

                p.sta02.set_taborder("3");
                p.sta02.set_text("|");
                p.sta02.set_cssclass("btn_MF_TxtBtn");
                p.sta02.move("79.00","0","5","20",null,null);

                p.btn01_00.set_taborder("4");
                p.btn01_00.set_text("비밀번호 찾기");
                p.btn01_00.set_cssclass("btn_MF_TxtBtn");
                p.btn01_00.set_fittocontents("width");
                p.btn01_00.move("94.00","0","82","20",null,null);

                p.panPW.set_taborder("5");
                p.panPW.set_horizontalgap("10");
                p.panPW.set_flexcrossaxisalign("end");
                p.panPW.move("0","-2","54.44%","20",null,null);

                p.btn01_00_00.set_taborder("6");
                p.btn01_00_00.set_text("회원가입");
                p.btn01_00_00.set_cssclass("btn_MF_TxtBtn");
                p.btn01_00_00.set_fittocontents("width");
                p.btn01_00_00.move("53.00","0","52","20",null,null);

                p.panRegi.set_taborder("7");
                p.panRegi.set_flexcrossaxisalign("end");
                p.panRegi.set_flexmainaxisalign("end");
                p.panRegi.move("245.00","-2","23.33%","20",null,null);

                p.panID.set_taborder("8");
                p.panID.set_flexcrossaxisalign("end");
                p.panID.set_visible("true");
                p.panID.move("0.00","70","77.78%","18",null,null);

                p.panLog.set_taborder("9");
                p.panLog.set_type("vertical");
                p.panLog.set_verticalgap("20");
                p.panLog.set_background("#ffffff");
                p.panLog.move("29","17","350","90",null,null);
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
            //-- Default Layout : this.Div00.form.Tab00.Tabpage1.form
            obj = new Layout("default","",0,0,this.Div00.form.Tab00.Tabpage1.form,function(p){});
            this.Div00.form.Tab00.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Tab00.Tabpage2.form
            obj = new Layout("default","",0,0,this.Div00.form.Tab00.Tabpage2.form,function(p){});
            this.Div00.form.Tab00.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            obj.set_spacing("10px 20px 20px 20px");
            obj.set_verticalgap("20");
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",480,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frm_MenuM.xfdl", function() {
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
        	this.fnInit();
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

        this.fnInit = function () {
        	this.dsMenu.copyData(this.objApp.gdsMenu, true);
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

        	if(!(this.gfnIsNull(sMenuId) || this.gfnIsNull(sPageUrl))){
        		// 메뉴 화면 호출

        		this.objApp.gvVfrs.set_separatesize("60,*,0,0");

        		this.fnFormOpen(sMenuId);

        		this.close();
        	}
        };


        this.btnClose_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Left_onload,this);
            this.Div00.form.Tab00.Tabpage1.form.grdMenu.addEventHandler("oncellclick",this.grdMenu_oncellclick,this);
            this.Div00.form.btnUser.addEventHandler("onclick",this.btn00_00_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
        };
        this.loadIncludeScript("frm_MenuM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
