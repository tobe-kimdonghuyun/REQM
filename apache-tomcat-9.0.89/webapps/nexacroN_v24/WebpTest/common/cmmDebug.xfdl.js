(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmDebug");
            this.set_titletext("디버그");
            if (Form == this.constructor)
            {
                this._setFormPosition(900,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDataset", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PATH\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGDS", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PATH\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGrid", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PATH\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGridDataset", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsComponents", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PATH\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"taborder\" type=\"INT\" size=\"256\"/><Column id=\"accessibilityenable\" type=\"STRING\" size=\"256\"/><Column id=\"visible\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProperties", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"FUNCTION\" type=\"STRING\" size=\"256\"/><Column id=\"COLOR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsVariableType", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">FORM</Col><Col id=\"NAME\">Form</Col></Row><Row><Col id=\"CODE\">GLOBAL</Col><Col id=\"NAME\">Global</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsVariable", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LVL\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDatasetView", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LVL\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"121","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle00","0","12","98","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("LOCAL");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("Combo01","56","-158","185","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var divSearch_form_Combo01_innerdataset = new nexacro.NormalDataset("divSearch_form_Combo01_innerdataset", obj);
            divSearch_form_Combo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_Combo01_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("Combo02","282","-158","185","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var divSearch_form_Combo02_innerdataset = new nexacro.NormalDataset("divSearch_form_Combo02_innerdataset", obj);
            divSearch_form_Combo02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_Combo02_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("Combo03","521","-158","184","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var divSearch_form_Combo03_innerdataset = new nexacro.NormalDataset("divSearch_form_Combo03_innerdataset", obj);
            divSearch_form_Combo03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_Combo03_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","785","-158","184","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_value("20190308");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle01","0","staTitle00:5","98","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("GLOBAL");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboDataset","staTitle00:0","12","330","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsDataset");
            obj.set_codecolumn("PATH");
            obj.set_datacolumn("NAME");
            obj.set_displayrowcount("25");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboGDS","staTitle01:0","45","330","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsGDS");
            obj.set_codecolumn("PATH");
            obj.set_datacolumn("NAME");
            obj.set_displayrowcount("25");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnLocalFilter","cboDataset:-1","12","85","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("필터해제");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("cbtnGlobalFilter","cboGDS:-1","45","85","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("필터해제");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtLocal","btnLocalFilter:-1","12",null,"28","20",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle02","0","staTitle01:5","98","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("GRID");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtGlobal","cbtnGlobalFilter:-1","45",null,"28","20",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboGrid","staTitle02:0","edtGlobal:5",null,"28","20",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_innerdataset("dsGrid");
            obj.set_codecolumn("PATH");
            obj.set_datacolumn("NAME");
            obj.set_text("cbo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Tab("tabComponent","0","divSearch:15",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.getSetter("scrollbars").set("autoboth");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tabpage1",this.tabComponent);
            obj.set_text("Dataset");
            this.tabComponent.addChild(obj.name, obj);

            obj = new Button("btnCreatSQL",null,"5","74","28","0",null,null,null,null,null,this.tabComponent.tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("SQL 생성");
            this.tabComponent.tabpage1.addChild(obj.name, obj);

            obj = new Button("btnSaveExcel",null,"5","78","28","btnCreatSQL:5",null,null,null,null,null,this.tabComponent.tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("Excel 저장");
            this.tabComponent.tabpage1.addChild(obj.name, obj);

            obj = new Grid("grdDataset","0","38",null,null,"0","0",null,null,null,null,this.tabComponent.tabpage1.form);
            obj.set_taborder("2");
            obj.getSetter("useinputpanel").set("false");
            obj.set_binddataset("dsGridDataset");
            obj.set_cellsizingtype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats/>");
            this.tabComponent.tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("tabpage2",this.tabComponent);
            obj.set_text("SaveXML");
            this.tabComponent.addChild(obj.name, obj);

            obj = new TextArea("txtSaveXML","0","10",null,null,"0","0",null,null,null,null,this.tabComponent.tabpage2.form);
            obj.set_taborder("0");
            this.tabComponent.tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("tabpage3",this.tabComponent);
            obj.set_text("Dataset To Grid");
            this.tabComponent.addChild(obj.name, obj);

            obj = new TextArea("txtSetGrid","0","10",null,null,"0","0",null,null,null,null,this.tabComponent.tabpage3.form);
            obj.set_taborder("0");
            this.tabComponent.tabpage3.addChild(obj.name, obj);

            obj = new Tabpage("tabpage4",this.tabComponent);
            obj.set_text("Grid Format");
            this.tabComponent.addChild(obj.name, obj);

            obj = new TextArea("txtGridFormat","0","10",null,null,"0","0",null,null,null,null,this.tabComponent.tabpage4.form);
            obj.set_taborder("0");
            this.tabComponent.tabpage4.addChild(obj.name, obj);

            obj = new Tabpage("tabpage5",this.tabComponent);
            obj.set_text("Components");
            this.tabComponent.addChild(obj.name, obj);

            obj = new Grid("grdProperties00","0","10","50%",null,null,"0",null,null,null,null,this.tabComponent.tabpage5.form);
            obj.set_taborder("0");
            obj.getSetter("useinputpanel").set("false");
            obj.set_binddataset("dsComponents");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("none");
            obj.set_selecttype("row");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"162\"/><Column size=\"105\"/><Column size=\"51\"/><Column size=\"55\"/><Column size=\"48\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"PATH\"/><Cell col=\"1\" text=\"NAME\"/><Cell col=\"2\" text=\"taborder\"/><Cell col=\"3\" text=\"access\"/><Cell col=\"4\" text=\"visible\"/></Band><Band id=\"body\"><Cell text=\"bind:PATH\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:NAME\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:taborder\"/><Cell col=\"3\" text=\"bind:accessibilityenable\"/><Cell col=\"4\" text=\"bind:visible\"/></Band></Format></Formats>");
            this.tabComponent.tabpage5.addChild(obj.name, obj);

            obj = new Grid("grdProperties","grdProperties00:5","10","277",null,null,"0",null,null,null,null,this.tabComponent.tabpage5.form);
            obj.set_taborder("1");
            obj.getSetter("useinputpanel").set("false");
            obj.set_binddataset("dsProperties");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"178\"/><Column size=\"186\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Properties Name\"/><Cell col=\"1\" text=\"Value\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:NAME\" textAlign=\"left\"/><Cell col=\"1\" edittype=\"normal\" style=\"align:left;\" text=\"bind:VALUE\" textAlign=\"left\"/></Band></Format></Formats>");
            this.tabComponent.tabpage5.addChild(obj.name, obj);

            obj = new TextArea("txtScript","grdProperties:5","10",null,null,"0","0",null,null,null,null,this.tabComponent.tabpage5.form);
            obj.set_taborder("2");
            this.tabComponent.tabpage5.addChild(obj.name, obj);

            obj = new Tabpage("tabpage6",this.tabComponent);
            obj.set_text("Variable");
            this.tabComponent.addChild(obj.name, obj);

            obj = new Grid("grdVariable","1","38",null,null,"1","5",null,null,null,null,this.tabComponent.tabpage6.form);
            obj.set_taborder("0");
            obj.getSetter("useinputpanel").set("false");
            obj.set_binddataset("dsVariable");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj.set_selecttype("area");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"451\"/><Column size=\"926\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"Variable Name\"/><Cell col=\"1\" text=\"Value\"/></Band><Band id=\"body\"><Cell style=\"align:left;color:BIND(COLOR);color2:BIND(COLOR);\" text=\"bind:NAME\" textAlign=\"left\"/><Cell col=\"1\" edittype=\"normal\" style=\"align:left;color:BIND(COLOR);color2:BIND(COLOR);\" text=\"bind:VALUE\" textAlign=\"left\"/></Band></Format></Formats>");
            this.tabComponent.tabpage6.addChild(obj.name, obj);

            obj = new Static("Static00","0","6","110","28",null,null,null,null,null,null,this.tabComponent.tabpage6.form);
            obj.set_text("Variable Type");
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_SchLabel");
            this.tabComponent.tabpage6.addChild(obj.name, obj);

            obj = new Combo("cboVariable","Static00:0","5","136","28",null,null,null,null,null,null,this.tabComponent.tabpage6.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsVariableType");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Local");
            obj.set_value("FORM");
            obj.set_index("0");
            this.tabComponent.tabpage6.addChild(obj.name, obj);

            obj = new Tabpage("tabpage7",this.tabComponent);
            obj.set_text("Run Script");
            this.tabComponent.addChild(obj.name, obj);

            obj = new TextArea("txtScript","0","38",null,null,"0","47",null,null,null,null,this.tabComponent.tabpage7.form);
            obj.set_taborder("0");
            obj.set_value("//디버그 실행 예제\n//alert(this.opener.dsList.saveXML());");
            this.tabComponent.tabpage7.addChild(obj.name, obj);

            obj = new Button("btnRunScript",null,"5","104","28","0",null,null,null,null,null,this.tabComponent.tabpage7.form);
            obj.set_taborder("1");
            obj.set_text("Run Script");
            this.tabComponent.tabpage7.addChild(obj.name, obj);

            obj = new TextArea("txtResult","0",null,null,"39","0","0",null,null,null,null,this.tabComponent.tabpage7.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            this.tabComponent.tabpage7.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tabComponent.tabpage1.form
            obj = new Layout("default","",0,0,this.tabComponent.tabpage1.form,function(p){});
            this.tabComponent.tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tabComponent.tabpage2.form
            obj = new Layout("default","",0,0,this.tabComponent.tabpage2.form,function(p){});
            this.tabComponent.tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tabComponent.tabpage3.form
            obj = new Layout("default","",0,0,this.tabComponent.tabpage3.form,function(p){});
            this.tabComponent.tabpage3.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tabComponent.tabpage4.form
            obj = new Layout("default","",0,0,this.tabComponent.tabpage4.form,function(p){});
            this.tabComponent.tabpage4.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tabComponent.tabpage5.form
            obj = new Layout("default","",0,0,this.tabComponent.tabpage5.form,function(p){});
            this.tabComponent.tabpage5.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tabComponent.tabpage6.form
            obj = new Layout("default","",0,0,this.tabComponent.tabpage6.form,function(p){});
            this.tabComponent.tabpage6.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tabComponent.tabpage7.form
            obj = new Layout("default","",0,0,this.tabComponent.tabpage7.form,function(p){});
            this.tabComponent.tabpage7.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",900,500,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","tabComponent.tabpage5.form.txtScript","value","dsProperties","FUNCTION");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmDebug.xfdl", function() {
        /**
        *  PcMdi 프로젝트
        *  @FileName 	cmmDebug.xfdl
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
        this.fvCurrentCombo = ""; // 현재선택이 로컬데이터셋인지 / GDS인지의 구분처리
        this.objApp 		= null;
        this.objEnv 		= null;
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수

        	//초기값 세팅
        	this.objApp = nexacro.getApplication();
        	this.objEnv = nexacro.getEnvironment();
        	this.fvCurrentCombo = "cboDataset";

        	// 로컬 데이터셋을 가져온다.
        	this.fnSaveDatasetList(this.opener);
        	this.divSearch.form.cboDataset.set_index(0);
        	this.fnMakeDatasetGrid();

        	// 글로벌 데이터셋을 가져온다.
        	this.fnSaveGDSList();
        	this.dsGDS.set_keystring("S:NAME");

            // 화면의 GRID의 목록을 가져온다.
        	this.fnSaveGridList(this.opener);
        	this.divSearch.form.cboGrid.set_index(0);

            // 화면의 컴포넌트의 목록을 가져온다.
        	this.fnSaveComponetsList(this.opener);
        	this.dsComponents.set_keystring("S:PATH+taborder");
        	this.dsComponents.set_rowposition(0);

        	// 화면에서 사용되는 변수목록을 가져온다.
        	this.dsVariable.clearData();
        	this.fnSaveVariableList(this.opener);

        	// 글로벌 변수 목록을 가져온다.
        	this.fnSaveGlobalVariableList();
        	this.dsVariable.set_keystring("S:LVL+NAME");
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
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
         * @description 데이터셋의 목록을 찾아 저장한다.
        */
        this.fnSaveDatasetList = function(targetObj, fullpath)
        {
            var datasetlist = targetObj.objects;
            for(var i=0;i<datasetlist.length;i++) {
        		if (datasetlist[i]+"" == "[object Dataset]") {
        			var nRow = this.dsDataset.addRow();
        			this.dsDataset.setColumn(nRow, "NAME", datasetlist[i].id);

        			if (this.gfnIsNull(fullpath)) {
        				this.dsDataset.setColumn(nRow, "PATH", datasetlist[i].id);
        			}
        			else {
        				var displayname = fullpath+"."+datasetlist[i].id;
        				this.dsDataset.setColumn(nRow, "NAME", displayname);
        				this.dsDataset.setColumn(nRow, "PATH", fullpath+"."+datasetlist[i].id);
        			}
                }
            }

            var objList = targetObj.components;
            var sObjType;
            for(var i=0;i<objList.length;i++)
            {
                sObjType = objList[i]+"";
                // Div
                if (sObjType == "[object Div]")
                {
                    if (this.gfnIsNull(fullpath))
                        this.fnSaveDatasetList(objList[i].form, objList[i].id+".form");
                    else
                        this.fnSaveDatasetList(objList[i].form, fullpath+"."+objList[i].id+".form");
                }
                // Tab
                else if (sObjType == "[object Tab]") {
                    var tabPageList = objList[i].tabpages;
                    for (var j=0;j<tabPageList.length;j++)
                    {
                        if (this.gfnIsNull(fullpath))
                            this.fnSaveDatasetList(tabPageList[j].form, objList[i].id+"."+tabPageList[j].id+".form");
                        else
                            this.fnSaveDatasetList(tabPageList[j].form, fullpath+"."+objList[i].id+"."+tabPageList[j].id+".form");
                    }
                }
            }
        };

        /**
         * @description 화면의 그리드목록을 저장한다.
        */
        this.fnSaveGridList = function(targetObj, fullpath)
        {
            var sObjType;

            var objList = targetObj.components;
            for(var i=0;i<objList.length;i++)
            {
                sObjType = objList[i]+"";

        		if (objList[i]+"" == "[object Grid]" )
        		{
                    var nRow = this.dsGrid.addRow();

        			var displayname = this.gfnIsNull(fullpath) ? objList[i].name : fullpath+"."+objList[i].name;
        			this.dsGrid.setColumn(nRow, "NAME", displayname);

                    if (this.gfnIsNull(fullpath)) {
                        this.dsGrid.setColumn(nRow, "PATH", objList[i].name);
                    }
        			else {
                        this.dsGrid.setColumn(nRow, "PATH", fullpath+"."+objList[i].name);
        			}
                }

                // Div
                if (sObjType == "[object Div]")
                {
                    if( this.gfnIsNull(fullpath) )
                        this.fnSaveGridList(objList[i].form, objList[i].name+".form");
                    else
                        this.fnSaveGridList(objList[i].form, fullpath+"."+objList[i].name+".form");
                }
                // PopupDiv
                if (sObjType == "[object PopupDiv]")
                {
                    if( this.gfnIsNull(fullpath) )
                        this.fnSaveGridList(objList[i].form, objList[i].name+".form");
                    else
                        this.fnSaveGridList(objList[i].form, fullpath+"."+objList[i].name+".form");
                }
                // Tab
                else if (sObjType == "[object Tab]")
                {
                    var tabPageList = objList[i].tabpages;
                    for(var j=0;j<tabPageList.length;j++)
                    {
                        if( this.gfnIsNull(fullpath) )
                            this.fnSaveGridList(tabPageList[j].form, objList[i].name+"."+tabPageList[j].name+".form");
                        else
                            this.fnSaveGridList(tabPageList[j].form, fullpath+"."+objList[i].name+"."+tabPageList[j].name+".form");
                    }
                }
            }
        };

        /**
         * @description 화면의 모든 Object를 저장한다.
        */
        this.fnSaveComponetsList = function(targetObj, fullpath)
        {
            var sObjType;
            var objList = targetObj.components;
            for (var i=0;i<objList.length;i++)
            {
                sObjType = objList[i]+"";

                // Div
                if (sObjType == "[object Div]")
                {
                    if (this.gfnIsNull(fullpath))
                        this.fnSaveComponetsList(objList[i].form, objList[i].name+".form");
                    else
                        this.fnSaveComponetsList(objList[i].form, fullpath+"."+objList[i].name+".form");
                }
                // PopupDiv
                if (sObjType == "[object PopupDiv]")
                {
                    if (this.gfnIsNull(fullpath))
                        this.fnSaveComponetsList(objList[i].form, objList[i].name+".form");
                    else
                        this.fnSaveComponetsList(objList[i].form, fullpath+"."+objList[i].name+".form");
                }
                // Tab
                else if (sObjType == "[object Tab]")
                {
        			var nRow = this.dsComponents.addRow();
        			this.dsComponents.setColumn(nRow, "PATH", fullpath);
        			this.dsComponents.setColumn(nRow, "NAME", objList[i].name);
        			this.dsComponents.setColumn(nRow, "taborder", objList[i].taborder);
        			this.dsComponents.setColumn(nRow, "accessibilityenable", objList[i].accessibilityenable);
        			this.dsComponents.setColumn(nRow, "visible", objList[i].visible);

                    var tabPageList = objList[i].tabpages;
                    for (var j=0;j<tabPageList.length;j++)
                    {
        				var nRow = this.dsComponents.addRow();
        				this.dsComponents.setColumn(nRow, "PATH", objList[i].name);
        				this.dsComponents.setColumn(nRow, "NAME", tabPageList[j].name);
        				this.dsComponents.setColumn(nRow, "taborder", tabPageList[j].taborder);
        				this.dsComponents.setColumn(nRow, "accessibilityenable", tabPageList[j].accessibilityenable);
        				this.dsComponents.setColumn(nRow, "visible", tabPageList[j].visible);

                        if (this.gfnIsNull(fullpath))
                            this.fnSaveComponetsList(tabPageList[j].form, objList[i].name + "." + tabPageList[j].name+".form");
                        else
                            this.fnSaveComponetsList(tabPageList[j].form, fullpath+"."+objList[i].name+"."+tabPageList[j].name+".form");
                    }
                }
                else
                {
        			if (!this.gfnIsNull(fullpath)) {
        	            var nRow = this.dsComponents.addRow();
        				this.dsComponents.setColumn(nRow, "PATH", fullpath);
        				this.dsComponents.setColumn(nRow, "NAME", objList[i].name);
        				this.dsComponents.setColumn(nRow, "taborder", objList[i].taborder);
        				this.dsComponents.setColumn(nRow, "accessibilityenable", objList[i].accessibilityenable);
        				this.dsComponents.setColumn(nRow, "visible", objList[i].visible);
        			}
        			else {
        	            var nRow = this.dsComponents.addRow();
        				this.dsComponents.setColumn(nRow, "PATH", "");
        				this.dsComponents.setColumn(nRow, "NAME", objList[i].name);
        				this.dsComponents.setColumn(nRow, "taborder", objList[i].taborder);
        				this.dsComponents.setColumn(nRow, "accessibilityenable", objList[i].accessibilityenable);
        				this.dsComponents.setColumn(nRow, "visible", objList[i].visible);
        			}
                }
            }
        };

        /**
         * @description 글로벌 데이터셋 목록을 만든다.
        */
        this.fnSaveGDSList = function()
        {
        	var applicationobj = this.objApp.all;
            for (var i=0;i<applicationobj.length;i++)
            {
        		if (applicationobj[i]+"" == "[object Dataset]")
        		{
        		    try{
                        if (applicationobj[i].id.indexOf(".") == -1)
                        {
                            var nRow = this.dsGDS.addRow();
                            this.dsGDS.setColumn(nRow, "NAME", applicationobj[i].id);
                            this.dsGDS.setColumn(nRow, "PATH", applicationobj[i].id);
                        }
                    }catch (e){
        				trace(">>>> e Message" + e);
                    }
        		}
            }
        };

        /**
         * @description Dataset을 GRID에 표시한다.
        */
        this.fnMakeDatasetGrid = function()
        {
            var dataset;

            if( this.fvCurrentCombo == "cboDataset" )
            {
                if( this.divSearch.form.cboDataset.index == -1 ) return;

                dataset = eval("this.opener."+this.divSearch.form.cboDataset.value);
            }
            else
            {
                if( this.divSearch.form.cboGDS.index == -1 ) return;

        		dataset = this.objApp[this.divSearch.form.cboGDS.text];
            }
        	this.dsDatasetView.assign(dataset);

            // 데이터셋의 정보가 존재하지 않으면
            if( dataset.getColCount() < 1 )
            {
                var formats = "";
                formats += '<Formats>\n';
                formats += '<Format id="default">\n';
                formats += '<Columns></Columns>\n';
                formats += '<Rows><Row size="31" band="head" /><Row size="31" /></Rows>\n';
                formats += '<Band id="head"></Band>\n';
                formats += '<Band id="body"></Band>\n';
                formats += '</Format>\n';
                formats += '</Formats>';

                this.tabComponent.tabpage1.form.grdDataset.set_formats(formats);
                return;
            }

            var columns = '    <Column size="30" />\n';
            var head    = '    <Cell col="0" text=""/>\n';
        	var body    = '    <Cell col="0" displaytype="normal" text="expr:(dataset.getRowType(currow)==2)?\'I\':(dataset.getRowType(currow)==4)?\'M\':(dataset.getRowType(currow)==8)?\'\':\'\'"/>\n';

            for(var i=0;i<dataset.getColCount();i++)
            {
                var columinfo = dataset.getColumnInfo(i);
                var columname = "";
                var columsize = "";
                var columtype = "";

                try{
                     columname = columinfo.name;
                     columsize = parseInt(columinfo.size);
                     columtype = columinfo.type.toUpperCase();
                } catch(e){
                     columname = "undefined";
                     columsize = 50;
                     columtype = "STRING";
                }
                var align     = "";

                if( columtype == "STRING" )
                {
                    columsize = columsize*9;

                    if( columsize < columname.length*9 )
                    {
                        columsize = columname.length*9;
                    }

                    if( columsize > 200 )
                        columns += '    <Column size="200" />\n';
                    else
                        columns += '    <Column size="'+columsize+'" />\n';

                    align = 'textAlign="left"';
                }
                else if( columtype == "INT" )
                {
                    columns += '<Column size="80" />\n';
                    align = 'textAlign="right"';
                }
                else if( columtype == "FLOAT" )
                {
                    columns += '<Column size="80" />\n';
                    align = 'textAlign="right;"';
                }
                else if( columtype == "DATE" )
                {
                    columns += '<Column size="88" />\n';
                    align = 'textAlign="center"';
                }
                else if( columtype == "TIME" )
                {
                    columns += '<Column size="88" />\n';
                    align = 'textAlign="center"';
                }
                else if( columtype == "DATETIME" )
                {
                    columns += '<Column size="120" />\n';
                    align = 'textAlign="center"';
                }
                else if( columtype == "BIGDECIMAL" )
                {
                    columns += '<Column size="120" />\n';
                    align = 'textAlign="right"';
                }
                else
                {
                    columns += '<Column size="120" />\n';
                    align = 'textAlign="left"';
                }

                head += '    <Cell col="'+(i+1)+'" text="'+columname+'"/>\n';
                body += '    <Cell col="'+(i+1)+'" '+align+' text="bind:'+columname+'" displaytype="normal" edittype="normal"/>\n';
            }

            var formats = "";
            formats += '<Formats>\n';
            formats += '<Format id="default">\n';
            formats += '<Columns>\n'+columns.substring(0,columns.length-1)+'\n</Columns>\n';
            formats += '<Rows>\n    <Row size="31" band="head" />\n    <Row size="31" />\n</Rows>\n';
            formats += '<Band id="head">\n'+head.substring(0,head.length-1)+'\n</Band>\n';
            formats += '<Band id="body">\n'+body.substring(0,body.length-1)+'\n</Band>\n';
            formats += '</Format>\n';
            formats += '</Formats>';

        	// 런타임 접속
        	if (system.navigatorname == "nexacro") {
        		// 수정 가능 처리(런타임만 가능, 수정 가능)
        		this.tabComponent.tabpage1.form.grdDataset.set_binddataset(dataset);
        	}
        	else {
        		// 수정 불가 처리(런타임/html5 모두 가능, 수정 불가)
        		this.tabComponent.tabpage1.form.grdDataset.set_binddataset(this.dsDatasetView);
        	}

            this.tabComponent.tabpage1.form.grdDataset.set_formats(formats);
        };

        /**
         * @description 데이터셋의 내용을 XML로 표시한다.
        */
        this.fnMakeDatasetXml = function()
        {
            var dataset;

            if( this.fvCurrentCombo == "cboDataset" )
            {
                if( this.divSearch.form.cboDataset.index == -1 ) return;

                dataset = eval("this.opener."+this.divSearch.form.cboDataset.value);
            }
            else
            {
                if( this.divSearch.form.cboGDS.index == -1 ) return;

        		dataset = this.objApp[this.divSearch.form.cboGDS.text];
            }

            var text = nexacro.replaceAll(dataset.saveXML(), '<Dataset id="'+dataset.id+'">', '');
            text = nexacro.replaceAll(text, '</Dataset>', '');
            this.tabComponent.tabpage2.form.txtSaveXML.set_value(text);
        };

        /**
         * @description 데이터셋을 GRID로 자동생성해준다
        */
        this.fnMakeDatasetGridFormat = function()
        {
            this.tabComponent.tabpage3.form.txtSetGrid.set_value(this.tabComponent.tabpage1.form.grdDataset.formats);
        };

        /**
         * @description 화면의 그리드의 포맷을 가져온다.
        */
        this.fnMakeGridFormats = function()
        {
            if( this.divSearch.form.cboGrid.index == -1 ) return;

            var targetgrid = eval("this.opener."+this.divSearch.form.cboGrid.value);

            var formats = nexacro.replaceAll(targetgrid.formats, "><", ">\n<");
        		formats = nexacro.replaceAll(formats, "<Column ", "    <Column ");
        		formats = nexacro.replaceAll(formats, "<Cell ", "    <Cell ");
        		formats = nexacro.replaceAll(formats, "<Row ", "    <Row ");

            // 리사이징한 그리드의 현재 컬럼 사이즈를 계산한다.
            var newcolumn = "";
            for(var i=0;i<targetgrid.getCellCount("Body");i++)
            {
                newcolumn += '    <Column size="'+targetgrid.getRealColSize(i, true)+'"/>\n';
            }
            formats = formats.split("<Columns>")[0]+"<Columns>\n"+newcolumn +"</Columns>"+formats.split("</Columns>")[1];

            this.tabComponent.tabpage4.form.txtGridFormat.set_value(formats);
            this.tabComponent.set_tabindex(3);
        };

        /**
         * @description 컴포넌트의 모든속성을 디스플레이한다
        */
        this.fnMakeCompoentsData = function()
        {
            if (this.dsComponents.rowposition == -1) return;

        	var sPath = this.dsComponents.getColumn(this.dsComponents.rowposition,"PATH");
        	var sName = this.dsComponents.getColumn(this.dsComponents.rowposition,"NAME");
        	var sCompName = "";
        	if (this.gfnIsNull(sPath)) {
        		sCompName = sName;
        	}
        	else {
        		sCompName = sPath + "." + sName;
        	}

            var targetobj = eval("this.opener."+sCompName);

            this.dsProperties.clearData();
            this.dsProperties.set_enableevent(false);
            for(var name in targetobj)
            {
                var value = targetobj[name]+"";

                if( name[0] == "_" ) continue;
                if( value == "[object Object]" ) continue;
                if( value.substring(0, 8) == "function" ) continue;
                if( value.substring(0, 7) == "control" ) continue;

                if( this.gfnIsNull(value) )
                {
                    var nrow = this.dsProperties.addRow();
                    this.dsProperties.setColumn(nrow, "NAME", name);
                    this.dsProperties.setColumn(nrow, "VALUE", "");
                }
                else
                {
                    // 이벤트에 대한 처리
                    if( value.indexOf("[object") != -1 )
                    {
                        if( value.indexOf("EventListener") != -1 )
                        {
                            var eventhandler = targetobj.getEventHandler(name, 0);

                            if( !this.gfnIsNull(eventhandler) )
                            {
                                var nrow = this.dsProperties.addRow();
                                this.dsProperties.setColumn(nrow, "NAME",    name);
                                this.dsProperties.setColumn(nrow, "VALUE",   "function");
                                this.dsProperties.setColumn(nrow, "FUNCTION", eventhandler);
                                this.dsProperties.setColumn(nrow, "COLOR",    "red");
                            }
                        }
                    }
                    else
                    {
                        var nrow = this.dsProperties.addRow();
                        this.dsProperties.setColumn(nrow, "NAME",    name);
                        this.dsProperties.setColumn(nrow, "VALUE", value);
                    }
                }
            }
            this.dsProperties.set_enableevent(true);
            this.dsProperties.set_rowposition(0);
        };

        /**
         * @description 화면에서 사용되는 모든 변수를 찾아 데이터셋에 저장한다.
        */
        this.fnSaveVariableList = function(targetObj, fullpath)
        {
        	var sObjType = targetObj +"";

            // 해당 OBJECT의 전역변수를 찾아낸다.
            this.dsVariable.set_enableevent(false);
            for(var name in targetObj)
            {
        		// 폼 변수는 fv로 Naming Rule 정의
        		var sVariName = name.substr(0,2).toUpperCase();
                if (sVariName == "FV")
                {
                    // 제외처리대상변수명
                    var value = targetObj[name]+"";
                    if( value.indexOf("[object") != -1 ) continue;
                    if( value.substring(0, 8) == "function" ) continue;
        			if( !targetObj.hasOwnProperty(name)) continue;

        			var nRow = this.dsVariable.addRow();
        			var displayname = this.gfnIsNull(fullpath) ? "this."+name : fullpath+"."+name;
        			this.dsVariable.setColumn(nRow, "NAME",  displayname);
        			//this.dsVariable.setColumn(nRow, "NAME",  name);
        			this.dsVariable.setColumn(nRow, "VALUE", value);
        			this.dsVariable.setColumn(nRow, "TYPE",  "FORM");
        			this.dsVariable.setColumn(nRow, "LVL",   name.split(".").length);
                }
            }
        	this.dsVariable.set_enableevent(true);

            // 해당 폼의 하위 OBJECT에 대한 변수도 같이 찾아온다.
            sObjType = "";
            var objList = targetObj.components;
            for(var i=0;i<objList.length;i++)
            {
                sObjType = objList[i]+"";

                // Div
                if( sObjType == "[object Div]" )
                {
                    if( this.gfnIsNull(fullpath) )
                        this.fnSaveVariableList(objList[i].form, objList[i].name+".form");
                    else
                        this.fnSaveVariableList(objList[i].form, fullpath+"."+objList[i].name+".form");
                }
                // Tab
                else if( sObjType == "[object Tab]" )
                {
                    var tabPageList = objList[i].tabpages;
                    for(var j=0;j<tabPageList.length;j++)
                    {
                        if( this.gfnIsNull(fullpath) )
                            this.fnSaveVariableList(tabPageList[j].form, objList[i].name+"."+tabPageList[j].name+".form");
                        else
                            this.fnSaveVariableList(tabPageList[j].form, fullpath+"."+objList[i].name+"."+tabPageList[j].name+".form");
                    }
                }
            }
        };

        /**
         * @description 글로벌 변수를 찾아 데이터셋에 저장한다.
        */
        this.fnSaveGlobalVariableList = function()
        {
            this.dsVariable.set_enableevent(false);

        	// Application 전역변수를 찾아낸다.
        	var targetObj = this.objApp;
            for(var name in targetObj)
            {
                // 글로벌 변수는 gv로 Naming Rule 정의
        		var sVariName = name.substr(0,2).toUpperCase();
                if (sVariName == "GV")
                {
                    // 제외처리대상변수명
                    var value = targetObj[name]+"";
                    if( value.indexOf("[object") != -1 ) continue;
                    if( value.substring(0, 8) == "function" ) continue;
        			if( !targetObj.hasOwnProperty(name)) continue;

        			// 글로벌 변수는 하나만이 존재하기 때문에..
        			if( this.dsVariable.findRow("NAME", name) == -1 )
        			{
        				var nRow = this.dsVariable.addRow();
        				this.dsVariable.setColumn(nRow, "NAME",  name);
        				this.dsVariable.setColumn(nRow, "VALUE", value);
        				this.dsVariable.setColumn(nRow, "TYPE",  "GLOBAL");
        				this.dsVariable.setColumn(nRow, "LVL",   0);
        			}
                }
            }

        	this.dsVariable.set_enableevent(true);
        };

        /**
         * @description 화면에서 사용되는 모든 변수를 보여준다.
        */
        this.fnMakeVariableList = function()
        {
            this.dsVariable.filter("TYPE == '"+this.tabComponent.tabpage6.form.cboVariable.value+"'");
            this.dsVariable.set_rowposition(0);
        };

        /**
         * @description 문장을 스크립트로 실행한다.
        */
        this.fnExecScript = function(obj,  e)
        {
            try
            {
        	    var result = eval(this.tabComponent.tabpage7.form.txtScript.text);

        	    if( this.gfnIsNull(result) ) result = "";

        	    this.tabComponent.tabpage7.form.txtResult.set_value("★★★ 성공 : "+result);
        	}
        	catch(ex)
        	{
        	    this.tabComponent.tabpage7.form.txtResult.set_value("＠＠＠ 실패 : "+ex);
        	}
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        /**
         * @description 선택한 TAB에 대한 처리를 한다.
        */
        this.tabComponent_onchanged = function(obj, e)
        {
        	var tabindex = this.tabComponent.tabindex;

        	switch(tabindex)
        	{
        	    case 0: this.fnMakeDatasetGrid();           break;
        	    case 1: this.fnMakeDatasetXml();            break;
        	    case 2: this.fnMakeDatasetGridFormat();     break;
        	    case 3: this.fnMakeGridFormats();           break;
        	    case 4: this.fnMakeCompoentsData();   		break;
        	    case 5: this.fnMakeVariableList();          break;
        	    default : break;
        	}
        };

        /**
         * @description 로컬 데이터셋의 내용을 보여준다.
        */
        this.divSearch.form.cboDataset_onitemchanged = function(obj, e)
        {
            this.fvCurrentCombo = obj.name;
            this.divSearch.form.edtLocal.set_value(obj.text);
        	this.divSearch.form.edtGlobal.set_value("");
            this.tabComponent.set_tabindex(0);
            this.tabComponent_onchanged();
        };

        /**
         * @description 글로벌 데이터셋의 내용을 보여준다.
        */
        this.divSearch.form.cboGDS_onitemchanged = function(obj, e)
        {
            this.fvCurrentCombo = obj.name;
            this.divSearch.form.edtGlobal.set_value(obj.value);
        	this.divSearch.form.edtLocal.set_value("");
            this.tabComponent.set_tabindex(0);
            this.tabComponent_onchanged();
        };

        /**
         * @description 변수의 형식을 선택한 타입으로 필터링한다.
        */
        this.tabComponent_tabpage6_cboVariable_onitemchanged = function(obj, e)
        {
            this.dsVariable.filter("TYPE == '"+this.tabComponent.tabpage6.form.cboVariable.value+"'");
            this.dsVariable.set_rowposition(0);
        };

        /**
         * @description 로컬 데이터셋 바로 찾기 기능
        */
        this.divSearch.form.edtLocal_onkeydown = function(obj, e)
        {
            if( e.keycode == 13 )
            {
        	    var nrow = this.dsDataset.findRow("NAME", obj.value);
        	    if( nrow != -1 )
        	    {

        	        fvCurrentCombo = "local";
                    this.divSearch.form.cboDataset.set_index(nrow);
                    this.fnMakeDatasetGrid();
                    this.divSearch.form.cboDataset_onitemchanged(this.divSearch.form.cboDataset);
                }
        	}
        };

        /**
         * @description 글로벌 데이터셋 바로 찾기 기능
        */
        this.divSearch.form.edtGlobal_onkeydown = function(obj, e)
        {
            if( e.keycode == 13 )
            {
        	    var nrow = this.dsGDS.findRow("NAME", obj.value);
        	    if( nrow != -1 )
        	    {
        	        fvCurrentCombo = "global";
                    this.divSearch.form.cboGDS.set_index(nrow);
                    this.divSearch.form.cboGDS_onitemchanged(this.divSearch.form.cboGDS);
                    //this.fnMakeDatasetGrid();
        	    }
        	}
        };

        /**
         * @description  DATASET 으로 INSERT SQL 만들기
         */
        this.btnCreatSQL_onclick = function(obj,  e)
        {
            var insertsql = "";
        	var dataset = this.tabComponent.tabpage1.form.grdDataset.getBindDataset();
            for(var i=0;i<dataset.getRowCount();i++)
            {

                var columlist = "";
                var valuelist = "";
                for(var j=0;j<dataset.getColCount();j++)
                {
                    var columname  = dataset.getColID(j);
                    var columvalue = this.gfnNvl(dataset.getColumn(i, columname),"NULL");

                    if( columvalue != "NULL" ) columvalue = "'"+columvalue+"'";

                    if( j == 0 )
                    {
                        columlist = columname;
                        valuelist = columvalue;
                    }
                    else
                    {
                        columlist += ", "+columname;
                        valuelist += ", "+columvalue;
                    }
                }

                insertsql += "INSERT INTO "+dataset.id+" ("+columlist+") VALUES ("+valuelist+");\n";
            }
        	system.clearClipboard();
        	system.setClipboard("CF_TEXT", insertsql);
        };

        /**
         * @description 컴포넌트의 textvalue 값을 클립보드에 복사한다.
        */
        this.combo_onkeydown = function(obj,e)
        {
        	system.clearClipboard();
        	system.setClipboard("CF_TEXT", obj.text);
        };

        /**
         * @description 로컬 데이터셋 필터 초기화
        */
        this.divSearch.form.btnLocalFilter_onclick = function(obj,e)
        {
            var dataset = eval("this.opener."+this.divSearch.form.cboDataset.value);
            dataset.filter("");
        };
        /**
         * @description 글로벌 데이타셋 필터 초기화
        */
        this.divSearch.form.cbtnGlobalFilter_onclick = function(obj,e)
        {
        	var dataset = this.objApp[this.divSearch.form.cboGDS.text];
            dataset.filter("");
        };

        /**
         * @description 닫기 버튼
        */
        this.btnClose_onclick = function(obj,e)
        {
        	this.close();
        };

        /**
         * @description 엑셀저장 버튼
        */
        this.tabComponent_tabpage1_btnSaveExcel_onclick = function(obj,e)
        {
        	var datasetNm = "dsData";

        	if( this.fvCurrentCombo == "cboDataset" ) {
                if( this.divSearch.form.cboDataset.index > -1 ) {
        			datasetNm = this.divSearch.form.cboDataset.text;
        		}
            } else {
        		if( this.divSearch.form.cboGDS.index > -1 ) {
        			datasetNm = this.divSearch.form.cboGDS.text;
        		}
            }

        	this.gfnExcelExport(this.tabComponent.tabpage1.form.grdDataset, datasetNm, datasetNm, "EXCEL2007");
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.cboDataset.addEventHandler("onitemchanged",this.divSearch.form.cboDataset_onitemchanged,this);
            this.divSearch.form.cboDataset.addEventHandler("onkeydown",this.combo_onkeydown,this);
            this.divSearch.form.cboGDS.addEventHandler("onkeydown",this.combo_onkeydown,this);
            this.divSearch.form.cboGDS.addEventHandler("onitemchanged",this.divSearch.form.cboGDS_onitemchanged,this);
            this.tabComponent.addEventHandler("onchanged",this.tabComponent_onchanged,this);
            this.tabComponent.tabpage1.form.btnCreatSQL.addEventHandler("onclick",this.btnCreatSQL_onclick,this);
            this.tabComponent.tabpage1.form.btnSaveExcel.addEventHandler("onclick",this.tabComponent_tabpage1_btnSaveExcel_onclick,this);
            this.tabComponent.tabpage6.form.cboVariable.addEventHandler("onitemchanged",this.tabComponent_tabpage6_cboVariable_onitemchanged,this);
            this.tabComponent.tabpage7.form.btnRunScript.addEventHandler("onclick",this.fnExecScript,this);
            this.dsComponents.addEventHandler("onrowposchanged",this.fnMakeCompoentsData,this);
        };
        this.loadIncludeScript("cmmDebug.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
