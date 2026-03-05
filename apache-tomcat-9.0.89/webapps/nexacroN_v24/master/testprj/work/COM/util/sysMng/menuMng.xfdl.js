(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("menuMng");
            this.set_titletext("Tree");
            this.set_cssclass("frm_WF_Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1450,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTree", this);
            obj._setContents("<ColumnInfo><Column id=\"MODULE_CD\" type=\"STRING\" size=\"32\"/><Column id=\"DISPLAY_PATH\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_SEQ\" type=\"STRING\" size=\"16\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LVL\" type=\"STRING\" size=\"16\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"32\"/><Column id=\"UP_MENU_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"act\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"searchText\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOrg", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"160\"/><Column id=\"LEVEL\" type=\"STRING\" size=\"1\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PARENT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">투비소프트</Col><Col id=\"LEVEL\">0</Col></Row><Row><Col id=\"NAME\">사업본부</Col><Col id=\"LEVEL\">1</Col></Row><Row><Col id=\"NAME\">사업그룹</Col><Col id=\"LEVEL\">2</Col></Row><Row><Col id=\"NAME\">사업1팀(제조)</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"NAME\">사업2팀(공공)</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"NAME\">사업3팀(금융)</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"NAME\">기술융합그룹</Col><Col id=\"LEVEL\">2</Col></Row><Row><Col id=\"NAME\">프리세일즈팀</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"NAME\">기술융합팀</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"NAME\">교육서비스팀</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"NAME\">마케팅팀</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"NAME\">사업전략팀</Col><Col id=\"LEVEL\">2</Col></Row><Row><Col id=\"NAME\">사업지원팀</Col><Col id=\"LEVEL\">2</Col></Row><Row><Col id=\"NAME\">기술지원본부</Col><Col id=\"LEVEL\">1</Col></Row><Row><Col id=\"NAME\">제품컨설팅그룹</Col><Col id=\"LEVEL\">2</Col></Row><Row><Col id=\"NAME\">사업관리팀</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"NAME\">제품컨설팅팀</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"NAME\">UX디자인팀</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"NAME\">제품컨설팅1팀(제조)</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"NAME\">제품컨설팅2팀(공공)</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"NAME\">제품컨설팅3팀(금융)</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"NAME\">기술지원그룹</Col><Col id=\"LEVEL\">2</Col></Row><Row><Col id=\"NAME\">기술지원팀</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"NAME\">테크솔루션팀</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"NAME\">일본사업지원팀</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"NAME\">서버솔루션팀</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"NAME\">솔루션사업본부</Col><Col id=\"LEVEL\">1</Col></Row><Row><Col id=\"NAME\">솔루션사업그룹</Col><Col id=\"LEVEL\">2</Col></Row><Row><Col id=\"LEVEL\">2</Col><Col id=\"NAME\">오픈소스사업그룹</Col></Row><Row><Col id=\"NAME\">솔루션사업본부</Col><Col id=\"LEVEL\">1</Col></Row><Row><Col id=\"NAME\">신규사업팀</Col><Col id=\"LEVEL\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00","0","50","342","43",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("메뉴구조");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","350.00","50","342","43",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("메뉴상세");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Div("div01","340.00","93",null,"412","350",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","10","3",null,"34","30",null,null,null,null,null,this.div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta06","10.00","36",null,"34","30",null,null,null,null,null,this.div01.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta04","10.00","102",null,"34","30",null,null,null,null,null,this.div01.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta24","10","135",null,null,"30","96",null,null,null,null,this.div01.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta02","10.00","3","108","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("2");
            obj.set_text("메뉴ID");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta05","10","36","108","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("3");
            obj.set_text("사용유무");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta09","350.00","3","108","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("4");
            obj.set_text("메뉴명");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta17","10","102","108","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("5");
            obj.set_text("메뉴URL");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt05","122.00","8","224","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            this.div01.addChild(obj.name, obj);

            obj = new Radio("rdo00","122.00","41","224","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("7");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var div01_form_rdo00_innerdataset = new nexacro.NormalDataset("div01_form_rdo00_innerdataset", obj);
            div01_form_rdo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(div01_form_rdo00_innerdataset);
            obj.set_text("체크");
            obj.set_value("0");
            obj.set_index("0");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta26","10","135","108",null,null,"96",null,null,null,null,this.div01.form);
            obj.set_taborder("10");
            obj.set_text("메뉴설명");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt07","122.00","107",null,"24","90",null,null,null,null,null,this.div01.form);
            obj.set_taborder("11");
            obj.set_enable("false");
            this.div01.addChild(obj.name, obj);

            obj = new TextArea("txa00","122.00","140",null,null,"90","100",null,null,null,null,this.div01.form);
            obj.set_taborder("12");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt05_01","462.00","8","208","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("13");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta14_00","350.00","36","108","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("14");
            obj.set_text("메뉴순서");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt05_01_00","462.00","41","208","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("15");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta04_00","10","69",null,"34","30",null,null,null,null,null,this.div01.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta17_00","10","69","108","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("17");
            obj.set_text("프로그램명");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt00","122.00","75","548","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("18");
            obj.set_enable("false");
            obj.set_cssclass("edi_WF_Search");
            obj.set_text("");
            this.div01.addChild(obj.name, obj);

            obj = new Button("btn02","640.00","75","28","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_EdiSch");
            obj.set_enable("true");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta04_01","10","315",null,"34","30",null,null,null,null,null,this.div01.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta17_01","10","315","108","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("21");
            obj.set_text("아이콘");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Grid("grd03","0","93","330",null,null,"240",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsTree");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeuseimage("true");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseexpandkey("false");
            obj.set_treeusebutton("use");
            obj.set_treeuseline("true");
            obj.set_treeasynctoggle("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"140\"/></Columns><Rows><Row size=\"32\"/></Rows><Band id=\"body\"><Cell text=\"bind:MENU_NM\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:MENU_LVL\" suppress=\"0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"50","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","8.00","12","86","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("검색라벨");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("searchText","94.00","12","140","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"9","30","30","25",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btn00","250","60","80","23",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00","191","60","50","23",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_01",null,"60","70","23","430",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_02","250","60","80","23",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("삭제취소");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00_00","110","60","70","23",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("ROOT");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTree","0.00","597","330","427",null,null,null,null,null,null,this);
            obj.set_binddataset("dsTree");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj.set_taborder("10");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"301\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell displaytype=\"treeitemcontrol\" edittype=\"tree\" text=\"bind:MENU_NM\" treelevel=\"bind:MENU_LVL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div01.form
            obj = new Layout("default","",0,0,this.div01.form,function(p){});
            this.div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1450,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div01.form.edt05","value","dsTree","menuId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div01.form.edt05_01","value","dsTree","menuNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div01.form.edt05_01_00","value","dsTree","menuOrdr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div01.form.edt07","value","dsTree","menuUrl");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div01.form.txa00","value","dsTree","menuDc");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div01.form.edt00","value","dsTree","menuPrgmNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div01.form.rdo00","value","dsTree","menuUseYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div01.form.edt05_01_00_00","value","dsGet","menuOrdr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.searchText","value","dsSearch","searchText");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div01.form.sta17_01","value","dsTree","menuUrl");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div01.form.sta04_01","value","dsTree","menuUrl");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("menuMng.xfdl","xjs::treegrid.xjs");
        this.registerScript("menuMng.xfdl", function() {
        /**
        *  PcMdi 프로젝트
        *  @FileName 	Temp14.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2023/10/30
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2023/10/30			TOBESOFT					최초생성
        *******************************************************************************
        */

        /**************************************************************************
         * include 영역
         **************************************************************************/
        this.executeIncludeScript("xjs::treegrid.xjs"); /*include "xjs::treegrid.xjs"*/;

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수

        	this.fnInit(obj);
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        this.fnInit = function(obj)
        {
        	var objForm = obj;
        	var objConfig = {
        		orgGrid	: this.grdTree,
        		targetGrid : this.grdTree,
        		levelColumn : "MENU_LVL",
        		option : "m"
        	}

        	this.fnInitForm(objForm,objConfig);

        	this.searchTran();
        }

        this.cfnClose = function ()
        {
        	trace('menuMngClose');
        };
        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.searchTran = function() {

        	this.dsSearch.setColumn(0, "searchText"  , this.divSearch.form.searchText.value);

         	var strSvcId    = "search";
        	var strSvcUrl   = "sysMng/menuMngList.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsTree=dsTree";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc, 	// transaction의 결과를 받을 Function 이름
        						isAsync); 		// 비동기통신 여부 [생략가능]
        }

        this.saveTran = function() {

        	var strSvcId    = "save";
        	var strSvcUrl   = "sysMng/updateMenu.do";
        	var inData      = "dsTree=dsTree:U";
        	var outData     = "gdsMenu=gdsMenu";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc, 	// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// transaction의 결과를 받을 Function 이름
        						isAsync); 		// 비동기통신 여부 [생략가능]
        }

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0)
        	{
        		return;
        	}

        	if(svcID != null && svcID == "search")
        	{

        	} else if(svcID != null && svcID == "save")
        	{
        		//메뉴 새로고침

        		this.dsTree.filter("act == 0");
        		var closeMenus = this.dsTree.extractRowsNF("act == 1");

        		for(var i=0;i<closeMenus.length;i++) {
        			var menuId = this.dsTree.getColumnNF(closeMenus[i], "MENU_ID");
        			this.objApp.gvFrmMdi.form.fnCloseMenu(menuId, false);
        		}

        		var currTopMenuId = this.objApp.gvFrmLeft.form.currTopMenuId;
        		this.objApp.gvFrmTop.form.fnMenuClick(currTopMenuId);
        		this.objApp.gvFrmTop.form.reload();
        	}
        };

        this.fnPopupCallback = function(sPopupId, sRtn)
        {
        	if (sPopupId == "popupSearch")
        	{
        		if (this.gfnIsNull(sRtn)) return;

        		var objRtn = JSON.parse(sRtn);

        		var sPrgmId = objRtn.rPrgmId;
        		var sPrgmNm = objRtn.rPrgmNm;
        		var sUrl = objRtn.rUrl;

        		if (!this.gfnIsNull(sPrgmId)) {
        			var nRow = this.dsTree.rowposition;
        			this.dsTree.setColumn(nRow, "PRGM_ID", sPrgmId);
        			this.dsTree.setColumn(nRow, "PRGM_NM", sPrgmNm);
        			this.dsTree.setColumn(nRow, "MENU_URL", sUrl);
        		}
        	}
        }

        this.msgCallback = function(sPopupId, sRtn) {

        	if(sPopupId == "save_confirm") {
        		if(sRtn == "Y") {
        			this.saveTran();
        		}
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnOpenSearchPop = function()
        {
        	var sTitle = "프로그램 검색 팝업";
        	var objArg   = {};

        	var objOption = {
        		popuptype: "modal"	//modal,modaless
        		//, width: 700
        		//, height: 394			//width,height 지정하지 않음 popup form size적용
        		, autosize: false
        		, title: sTitle
        		, resize: false
        		, titlebar: true
        	};
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup("popupSearch", "work::sysMng/popup/prgmPopup.xfdl", objArg, sPopupCallBack, objOption);
        }

        this.addMenu = function(ty) {
        	var sRow;
        	var sMooduleCd;
        	var sMenuId;
        	var sMenuLv;
        	var sMenuNm;
        	var sMenuUpMenuId;

        	if(ty == 'root') {
        		var maxMenuId = this.dsTree.getCaseMax("UP_MENU_ID == 0", "MENU_ID");
        		sRow = this.dsTree.insertRow(0);
        		sRow = nRow;
        		sMenuLv = 0;
        		sMenuId = maxMenuId + 1000000;
        		sMenuNm = '대메뉴';
        		sMenuUpMenuId = 0;
        		sMooduleCd = 'MN' + sMenuId;

        	} else if(ty == 'child') {
        		var menuLv = this.dsTree.getColumn(this.dsTree.rowposition, "MENU_LVL");
        		var menuId = this.dsTree.getColumn(this.dsTree.rowposition, "MENU_ID");
        		var maxMenuId = this.dsTree.getCaseMax("UP_MENU_ID == " + menuId, "MENU_ID");
        		var nextMenuId = 0;
        		var nMenuLv = menuLv + 1;
        		if(nMenuLv >= 3) {
        			this.gfnAlertMsg("child", "최하위 메뉴에서는 추가 할수 없습니다.");
        			return ;
        		}

        		var nRow = this.dsTree.findRow("MENU_ID", menuId);

        		if(menuLv == 0) {
        			if(this.gfnIsNull(maxMenuId)) {
        				nextMenuId = menuId + 10000;
        			} else {
        				nextMenuId = maxMenuId + 10000;
        			}
        		} else if(menuLv == 1) {
        			if(this.gfnIsNull(maxMenuId)) {
        				nextMenuId = menuId + 1;
        			} else {
        				nextMenuId = maxMenuId + 1;
        			}
        		}

        		sRow = this.dsTree.insertRow(nRow+1);
        		sMooduleCd = this.dsTree.getColumn(this.dsTree.rowposition, "MODULE_CD");
        		sMenuId = nextMenuId;
        		sMenuLv = nMenuLv;
        		sMenuNm = '추가메뉴';
        		sMenuUpMenuId = menuId;
        	}

        	this.dsTree.setColumn(sRow, "MODULE_CD", sMooduleCd);
        	this.dsTree.setColumn(sRow, "MENU_ID", sMenuId);
        	this.dsTree.setColumn(sRow, "MENU_LVL", sMenuLv);
        	this.dsTree.setColumn(sRow, "MENU_NM", sMenuNm);
        	this.dsTree.setColumn(sRow, "USE_YN", 'Y');
        	this.dsTree.setColumn(sRow, "UP_MENU_ID", sMenuUpMenuId);
        	this.dsTree.setColumn(sRow, "act", "0");

        }
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/

        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.searchTran();
        };

        this.btn00_00_onclick = function(obj,e)
        {
        	this.addMenu('child');
        };

        this.btn00_onclick = function(obj,e)
        {
        	var menuLv = this.dsTree.getColumn(this.dsTree.rowposition, "MENU_LVL");
        	var menuId = this.dsTree.getColumn(this.dsTree.rowposition, "MENU_ID");
        	var childMenus = this.dsTree.extractRows("UP_MENU_ID==" + menuId);

        	if(menuLv != 2) {
        		this.dsTree.setColumn(this.dsTree.rowposition, "act", "1");
        		for(var i=0; i < childMenus.length; i++) {
        			this.dsTree.setColumn(childMenus[i], "act", "1");
        			var childMenuId = this.dsTree.getColumn(childMenus[i], "MENU_ID");
        			var subChildMenus = this.dsTree.extractRows("UP_MENU_ID==" + childMenuId);
        			for(var ii=0; ii < subChildMenus.length; ii++) {
        				this.dsTree.setColumn(subChildMenus[ii], "act", "1");
        			}
        		}
        	} else {
        		this.dsTree.setColumn(this.dsTree.rowposition, "act", "1");
        	}

        	this.btn00.set_visible(false);
        	this.btn00_02.set_visible(true);
        	this.div01.set_enable(false);
        };

        this.btn00_02_onclick = function(obj,e)
        {
        	var menuLv = this.dsTree.getColumn(this.dsTree.rowposition, "MENU_LVL");
        	var menuId = this.dsTree.getColumn(this.dsTree.rowposition, "MENU_ID");
        	var childMenus = this.dsTree.extractRows("UP_MENU_ID==" + menuId);

        	var menuUpMenuId = this.dsTree.getColumn(this.dsTree.rowposition, "UP_MENU_ID");
        	var upMenus = this.dsTree.extractRows("MENU_ID ==" + menuUpMenuId);

        	if(menuLv != 2) {
        		this.dsTree.setColumn(this.dsTree.rowposition, "act", "0");
        		for(var i=0; i < childMenus.length; i++) {
        			this.dsTree.setColumn(childMenus[i], "act", "0");
        			var childMenuId = this.dsTree.getColumn(childMenus[i], "MENU_ID");
        			var subChildMenus = this.dsTree.extractRows("UP_MENU_ID==" + childMenuId);
        			for(var ii=0; ii < subChildMenus.length; ii++) {
        				this.dsTree.setColumn(subChildMenus[ii], "act", "0");
        			}
        		}

        		for(var i=0; i < upMenus.length; i++) {
        			this.dsTree.setColumn(upMenus[i], "act", "0");
        		}
        	} else {
        		this.dsTree.setColumn(this.dsTree.rowposition, "act", "0");
        		for(var i=0; i < upMenus.length; i++) {
        			this.dsTree.setColumn(upMenus[i], "act", "0");
        			var upMenuId = this.dsTree.getColumn(upMenus[i], "UP_MENU_ID");
        			var subUpMenus = this.dsTree.extractRows("MENU_ID==" + upMenuId);
        			for(var ii=0; ii < subUpMenus.length; ii++) {
        				this.dsTree.setColumn(subUpMenus[ii], "act", "0");
        			}

        		}
        	}

        	this.btn00.set_visible(true);
        	this.btn00_02.set_visible(false);
        	this.div01.set_enable(true);
        };

        this.Div00_Button01_onclick = function(obj,e)
        {
        	this.fnOpenSearchPop();
        };

        this.btn00_01_onclick = function(obj,e)
        {
        	if (this.gfnDsIsUpdated(this.dsTree) == false) {
        		this.gfnAlertMsg("not_save_confirm", "변경된 내역이 없습니다.");
        		return;
        	} else {
        		this.gfnConfirmMsg("save_confirm", "변경 하시겠습니까?.", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        	}
        };

        this.btn00_00_00_onclick = function(obj,e)
        {
        	this.addMenu('root');
        };

        this.grd03_oncellclick = function(obj,e)
        {
        	var cRow = this.dsTree.rowposition;
        	var act = this.dsTree.getColumn(cRow, "act");

        	if(act == "0") {
        		this.btn00.set_visible(true);
        		this.btn00_02.set_visible(false);
        		this.div01.set_enable(true);
        	} else {
        		this.btn00.set_visible(false);
        		this.btn00_02.set_visible(true);
        		this.div01.set_enable(false);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.sta00.addEventHandler("onclick",this.sta00_onclick,this);
            this.div01.form.rdo00.addEventHandler("onitemchanged",this.div01_rdo00_onitemchanged,this);
            this.div01.form.sta26.addEventHandler("onclick",this.div01_sta26_onclick,this);
            this.div01.form.btn02.addEventHandler("onclick",this.Div00_Button01_onclick,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn00_00.addEventHandler("onclick",this.btn00_00_onclick,this);
            this.btn00_01.addEventHandler("onclick",this.btn00_01_onclick,this);
            this.btn00_02.addEventHandler("onclick",this.btn00_02_onclick,this);
            this.btn00_00_00.addEventHandler("onclick",this.btn00_00_00_onclick,this);
            this.grdTree.addEventHandler("oncellclick",this.grd03_oncellclick,this);
        };
        this.loadIncludeScript("menuMng.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
