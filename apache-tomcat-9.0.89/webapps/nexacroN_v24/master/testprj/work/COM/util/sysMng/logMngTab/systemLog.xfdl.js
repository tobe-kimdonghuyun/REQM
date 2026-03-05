(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("loginLog");
            this.set_titletext("Tab Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1030,736);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"1\"/><Column id=\"rno\" type=\"INT\" size=\"256\"/><Column id=\"requstId\" type=\"STRING\" size=\"256\"/><Column id=\"occrrncDe\" type=\"DATETIME\" size=\"256\"/><Column id=\"rqesterIp\" type=\"STRING\" size=\"256\"/><Column id=\"rqesterId\" type=\"STRING\" size=\"256\"/><Column id=\"svcNm\" type=\"STRING\" size=\"256\"/><Column id=\"methodNm\" type=\"STRING\" size=\"256\"/><Column id=\"processSeCode\" type=\"STRING\" size=\"256\"/><Column id=\"processTime\" type=\"INT\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"searchText\" type=\"STRING\" size=\"256\"/><Column id=\"sDate\" type=\"STRING\" size=\"256\"/><Column id=\"eDate\" type=\"STRING\" size=\"256\"/><Column id=\"currentPageNo\" type=\"INT\" size=\"256\"/><Column id=\"recordCountPerPage\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"recordCountPerPage\">20</Col><Col id=\"currentPageNo\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPage", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta01","0","68","342","43",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("상세목록");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelDown",null,"75","119","28","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("엑셀다운로드");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_ExcelSave");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","0","115",null,null,"0","106",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.set_scrollbartype("auto auto");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"48\"/><Column size=\"160\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"160\"/><Column size=\"120\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"로그ID\"/><Cell col=\"3\" text=\"유저ID\"/><Cell col=\"4\" text=\"IP\"/><Cell col=\"5\" text=\"패키지명\"/><Cell col=\"6\" text=\"로그일시\"/><Cell col=\"7\" text=\"메소드명\"/><Cell col=\"8\" text=\"액션\"/><Cell col=\"9\" text=\"진행시간\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:rno\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:requstId\" displaytype=\"text\"/><Cell col=\"3\" text=\"bind:userId\" displaytype=\"text\"/><Cell col=\"4\" text=\"bind:rqesterIp\" displaytype=\"text\"/><Cell col=\"5\" text=\"bind:svcNm\" displaytype=\"text\"/><Cell col=\"6\" text=\"bind:occrrncDe\" displaytype=\"text\"/><Cell col=\"7\" text=\"bind:methodNm\"/><Cell col=\"8\" text=\"bind:processSeCode\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:processTime\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0.00","10",null,"50","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","12","98","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("등록일자");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cbo01","56","-158","185","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var divSearch_form_cbo01_innerdataset = new nexacro.NormalDataset("divSearch_form_cbo01_innerdataset", obj);
            divSearch_form_cbo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cbo01_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cbo02","282","-158","185","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var divSearch_form_cbo02_innerdataset = new nexacro.NormalDataset("divSearch_form_cbo02_innerdataset", obj);
            divSearch_form_cbo02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cbo02_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cbo03","521","-158","184","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var divSearch_form_cbo03_innerdataset = new nexacro.NormalDataset("divSearch_form_cbo03_innerdataset", obj);
            divSearch_form_cbo03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cbo03_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","378.00","12","86","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("검색라벨");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("searchText","464.00","12","140","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"9","30","30","5",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("sDate","88.00","12","140","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_cssclass("essential");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("eDate","238.00","12","140","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_cssclass("essential");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divPage02","293.00","660","555","35",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_url("work::paging/pagenavigationdesign_type02.xfdl");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPage02
            obj = new Layout("default","",0,0,this.divPage02.form,function(p){});
            this.divPage02.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1030,736,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","work::paging/pagenavigationdesign_type02.xfdl");
        };
        
        // User Script
        this.registerScript("systemLog.xfdl", function() {
        /**
        *  PcMdi 프로젝트
        *  @FileName 	Temp16_1.xfdl
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

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수
        	this.fnInit();
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        this.cfnClose = function ()
        {
        	trace('cfnClose');
        };
        //조회
        this.cfnSearch = function ()
        {
        	this.dsSearch.setColumn(0, "currentPageNo", 1);
        	this.dsSearch.setColumn(0, "recordCountPerPage", this.dsPage.getColumn(0, "recordCountPerPage"));
        	this.getSearchTran("list");
        };

        //저장
        this.cfnSave = function ()
        {
        	//TODO..
        };

        //추가
        this.cfnAdd = function ()
        {
        	//TODO..
        };

        //삭제
        this.cfnDel = function ()
        {
        	//TODO..
        };
        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.getSearchTran = function(ty) {

        	this.dsSearch.setColumn(0, "searchText"  , this.divSearch.form.searchText.value);
        	this.dsSearch.setColumn(0, "sDate"  , this.divSearch.form.sDate.value);
        	this.dsSearch.setColumn(0, "eDate"  , this.divSearch.form.eDate.value);

        	var strSvcId    = ty;
        	var strSvcUrl   = "sysMng/systemLogList.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsList=dsList dsPage=dsPage";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
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

        	if(svcID != null && svcID == 'list') {
        		this.divPage02.form.initPages(this.dsPage.getColumn(0, "totalRecordCount"), this.dsPage.getColumn(0, "recordCountPerPage"), this.dsPage.getColumn(0, "pageSize"), this.pagingCallback);
        	} else if(svcID != null && svcID == 'search') {

        	}
        };

        this.pagingCallback = function(page) {
        	console.log(this.parent.parent);
        	this.parent.parent.dsSearch.setColumn(0, "currentPageNo", page);
        	this.parent.parent.dsSearch.setColumn(0, "recordCountPerPage", this.parent.parent.dsPage.getColumn(0, "recordCountPerPage"));
        	this.parent.parent.getSearchTran("search");
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function() {
        	this.getSearchTran("list");
        }

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.cfnSearch,this);
        };
        this.loadIncludeScript("systemLog.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
