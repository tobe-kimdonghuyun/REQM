(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("eaiMng");
            this.set_titletext("List-Detail");
            this.set_cssclass("frm_WF_Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"searchText\" type=\"STRING\" size=\"256\"/><Column id=\"currentPageNo\" type=\"INT\" size=\"256\"/><Column id=\"recordCountPerPage\" type=\"INT\" size=\"256\"/><Column id=\"menuId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"recordCountPerPage\">100</Col><Col id=\"currentPageNo\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPage", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"50","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo01","56","-158","185","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
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
            obj.set_taborder("1");
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
            obj.set_taborder("2");
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

            obj = new Calendar("cal00","785","-158","184","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_value("20190308");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","8","12","86","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("검색라벨");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("searchText","94","12","140","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"9","30","30","25",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","0","50","342","43",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","0","93",null,null,"20","140",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"format_1040003\"><Columns><Column size=\"119\"/><Column size=\"160\"/><Column size=\"106\"/><Column size=\"120\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"1040003No\"/><Cell col=\"1\" text=\"메세지ID\"/><Cell col=\"2\" text=\"메세지순번\"/><Cell col=\"3\" text=\"수신일시\"/></Band><Band id=\"body\"><Cell text=\"bind:rno\"/><Cell col=\"1\" text=\"bind:messageid\"/><Cell col=\"2\" text=\"bind:msgseq\"/><Cell col=\"3\" text=\"bind:recvTime\"/></Band></Format><Format id=\"format_1040004\"><Columns><Column size=\"119\"/><Column size=\"160\"/><Column size=\"106\"/><Column size=\"120\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"1040004No\"/><Cell col=\"1\" text=\"메세지ID\"/><Cell col=\"2\" text=\"메세지순번\"/><Cell col=\"3\" text=\"수신일시\"/></Band><Band id=\"body\"><Cell text=\"bind:rno\"/><Cell col=\"1\" text=\"bind:messageid\"/><Cell col=\"2\" text=\"bind:msgseq\"/><Cell col=\"3\" text=\"bind:recvTime\"/></Band></Format><Format id=\"format_1040005\"><Columns><Column size=\"119\"/><Column size=\"160\"/><Column size=\"106\"/><Column size=\"120\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"1040005No\"/><Cell col=\"1\" text=\"메세지ID\"/><Cell col=\"2\" text=\"메세지순번\"/><Cell col=\"3\" text=\"수신일시\"/></Band><Band id=\"body\"><Cell text=\"bind:rno\"/><Cell col=\"1\" text=\"bind:messageid\"/><Cell col=\"2\" text=\"bind:msgseq\"/><Cell col=\"3\" text=\"bind:recvTime\"/></Band></Format><Format id=\"format_1040006\"><Columns><Column size=\"119\"/><Column size=\"160\"/><Column size=\"106\"/><Column size=\"120\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"1040006No\"/><Cell col=\"1\" text=\"메세지ID\"/><Cell col=\"2\" text=\"메세지순번\"/><Cell col=\"3\" text=\"수신일시\"/></Band><Band id=\"body\"><Cell text=\"bind:rno\"/><Cell col=\"1\" text=\"bind:messageid\"/><Cell col=\"2\" text=\"bind:msgseq\"/><Cell col=\"3\" text=\"bind:recvTime\"/></Band></Format><Format id=\"format_1040007\"><Columns><Column size=\"119\"/><Column size=\"160\"/><Column size=\"106\"/><Column size=\"120\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"1040007No\"/><Cell col=\"1\" text=\"메세지ID\"/><Cell col=\"2\" text=\"메세지순번\"/><Cell col=\"3\" text=\"수신일시\"/></Band><Band id=\"body\"><Cell text=\"bind:rno\"/><Cell col=\"1\" text=\"bind:messageid\"/><Cell col=\"2\" text=\"bind:msgseq\"/><Cell col=\"3\" text=\"bind:recvTime\"/></Band></Format><Format id=\"format_1040008\"><Columns><Column size=\"119\"/><Column size=\"160\"/><Column size=\"106\"/><Column size=\"120\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"1040008No\"/><Cell col=\"1\" text=\"메세지ID\"/><Cell col=\"2\" text=\"메세지순번\"/><Cell col=\"3\" text=\"수신일시\"/></Band><Band id=\"body\"><Cell text=\"bind:rno\"/><Cell col=\"1\" text=\"bind:messageid\"/><Cell col=\"2\" text=\"bind:msgseq\"/><Cell col=\"3\" text=\"bind:recvTime\"/></Band></Format><Format id=\"format_1040009\"><Columns><Column size=\"119\"/><Column size=\"160\"/><Column size=\"106\"/><Column size=\"120\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"1040009No\"/><Cell col=\"1\" text=\"메세지ID\"/><Cell col=\"2\" text=\"메세지순번\"/><Cell col=\"3\" text=\"수신일시\"/></Band><Band id=\"body\"><Cell text=\"bind:rno\"/><Cell col=\"1\" text=\"bind:messageid\"/><Cell col=\"2\" text=\"bind:msgseq\"/><Cell col=\"3\" text=\"bind:recvTime\"/></Band></Format><Format id=\"format_1040010\"><Columns><Column size=\"119\"/><Column size=\"160\"/><Column size=\"106\"/><Column size=\"120\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"1040010No\"/><Cell col=\"1\" text=\"메세지ID\"/><Cell col=\"2\" text=\"메세지순번\"/><Cell col=\"3\" text=\"수신일시\"/></Band><Band id=\"body\"><Cell text=\"bind:rno\"/><Cell col=\"1\" text=\"bind:messageid\"/><Cell col=\"2\" text=\"bind:msgseq\"/><Cell col=\"3\" text=\"bind:recvTime\"/></Band></Format><Format id=\"format_1040011\"><Columns><Column size=\"119\"/><Column size=\"160\"/><Column size=\"106\"/><Column size=\"120\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"1040011No\"/><Cell col=\"1\" text=\"메세지ID\"/><Cell col=\"2\" text=\"메세지순번\"/><Cell col=\"3\" text=\"수신일시\"/></Band><Band id=\"body\"><Cell text=\"bind:rno\"/><Cell col=\"1\" text=\"bind:messageid\"/><Cell col=\"2\" text=\"bind:msgseq\"/><Cell col=\"3\" text=\"bind:recvTime\"/></Band></Format><Format id=\"format_1040013\"><Columns><Column size=\"119\"/><Column size=\"160\"/><Column size=\"106\"/><Column size=\"120\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"1040013No\"/><Cell col=\"1\" text=\"메세지ID\"/><Cell col=\"2\" text=\"메세지순번\"/><Cell col=\"3\" text=\"수신일시\"/></Band><Band id=\"body\"><Cell text=\"bind:rno\"/><Cell col=\"1\" text=\"bind:messageid\"/><Cell col=\"2\" text=\"bind:msgseq\"/><Cell col=\"3\" text=\"bind:recvTime\"/></Band></Format><Format id=\"format_1040014\"><Columns><Column size=\"119\"/><Column size=\"160\"/><Column size=\"106\"/><Column size=\"120\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"1040014No\"/><Cell col=\"1\" text=\"메세지ID\"/><Cell col=\"2\" text=\"메세지순번\"/><Cell col=\"3\" text=\"수신일시\"/></Band><Band id=\"body\"><Cell text=\"bind:rno\"/><Cell col=\"1\" text=\"bind:messageid\"/><Cell col=\"2\" text=\"bind:msgseq\"/><Cell col=\"3\" text=\"bind:recvTime\"/></Band></Format><Format id=\"format_1040015\"><Columns><Column size=\"119\"/><Column size=\"160\"/><Column size=\"106\"/><Column size=\"120\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"1040015No\"/><Cell col=\"1\" text=\"메세지ID\"/><Cell col=\"2\" text=\"메세지순번\"/><Cell col=\"3\" text=\"수신일시\"/></Band><Band id=\"body\"><Cell text=\"bind:rno\"/><Cell col=\"1\" text=\"bind:messageid\"/><Cell col=\"2\" text=\"bind:msgseq\"/><Cell col=\"3\" text=\"bind:recvTime\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divPage02","223.00","635","555","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
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
            obj = new Layout("default","",1050,700,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","work::paging/pagenavigationdesign_type02.xfdl");
        };
        
        // User Script
        this.registerScript("eaiMng.xfdl", function() {
        /**
        *  PcMdi 프로젝트
        *  @FileName 	Temp04.xfdl
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
        this.objApp = nexacro.getApplication();
        this.fvMenuId;
        this.fvMenuNm;
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
        //삭제
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

        	this.dsSearch.setColumn(0, "searchText", this.divSearch.form.searchText.value);
        	this.dsSearch.setColumn(0, "menuId", this.fvMenuId);

        	var strSvcId    = ty;
        	var strSvcUrl   = "sysMng/eaiMngList.do";
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
        	this.parent.parent.dsSearch.setColumn(0, "currentPageNo", page);
        	this.parent.parent.dsSearch.setColumn(0, "recordCountPerPage", this.parent.parent.dsPage.getColumn(0, "recordCountPerPage"));
        	this.parent.parent.getSearchTran("search");
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function() {

        	//메뉴 번호
        	this.fvMenuId = this.gfnGetArgument(this.FRAME_MENUCOLUMNS.menuId);
        	this.fvMenuNm = this.gfnGetArgument(this.FRAME_MENUCOLUMNS.menuNm);
        	this.sta00.text = this.fvMenuNm;
        	this.grd00.setFormat("format_" + this.fvMenuId);

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
        this.loadIncludeScript("eaiMng.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
