(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmCode");
            this.set_titletext("Master-Detail-V(n:n)");
            this.set_cssclass("frm_WF_Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,736);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSubList", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"1\"/><Column id=\"rno\" type=\"INT\" size=\"256\"/><Column id=\"codeId\" type=\"STRING\" size=\"256\"/><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"codeNm\" type=\"STRING\" size=\"256\"/><Column id=\"codeDc\" type=\"STRING\" size=\"256\"/><Column id=\"useAt\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMainList", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"1\"/><Column id=\"rno\" type=\"INT\" size=\"256\"/><Column id=\"codeId\" type=\"STRING\" size=\"256\"/><Column id=\"codeTy\" type=\"STRING\" size=\"256\"/><Column id=\"codeIdNm\" type=\"STRING\" size=\"256\"/><Column id=\"codeIdDc\" type=\"STRING\" size=\"256\"/><Column id=\"useAt\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"searchText\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">Y</Col></Row><Row><Col id=\"value\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div01","0","88",null,"37.91%","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div01");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","0","5",null,null,"0","9.016999999999996",null,null,null,null,this.div01.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsMainList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"48\"/><Column size=\"60\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"160\"/><Column size=\"70\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"공통코드CD\" cssclass=\"essential\"/><Cell col=\"3\" text=\"공통코드명\" cssclass=\"essential\"/><Cell col=\"4\" text=\"공통코드타입\" cssclass=\"essential\"/><Cell col=\"5\" text=\"공통코드설명\"/><Cell col=\"6\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" displaytype=\"text\" text=\"bind:rno\"/><Cell col=\"2\" text=\"bind:codeId\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:codeIdNm\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"4\" text=\"bind:codeTy\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"5\" text=\"bind:codeIdDc\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"6\" text=\"bind:useAt\" textAlign=\"center\" edittype=\"combo\" comboautoselect=\"bind:useAt\" displaytype=\"combotext\" combodataset=\"dsUseYn\" combodatacol=\"value\" combocodecol=\"value\"/></Band></Format></Formats>");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00","0","50","342","43",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("공통코드");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Div("divCmmnBtn",null,"60","572","28","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","72","28","0",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("1");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Add");
            obj.set_visible("true");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"0","72","28","75",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("2");
            obj.set_text("삭제");
            obj.set_visible("true");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"0","72","28","150",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_visible("true");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"50","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","25","12","86","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("검색라벨");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("searchText","111","12","140","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"9","30","30","25",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("div00","0","div01:4.3%",null,null,"20","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Div("div00_00",null,"5","467","28","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("div00");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btnSubAdd",null,"0","72","28","0",null,null,null,null,null,this.div00.form.div00_00.form);
            obj.set_taborder("0");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Add");
            obj.set_visible("true");
            obj.set_enable("false");
            this.div00.form.div00_00.addChild(obj.name, obj);

            obj = new Button("btnSubDel",null,"0","72","28","75",null,null,null,null,null,this.div00.form.div00_00.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_visible("true");
            obj.set_enable("false");
            this.div00.form.div00_00.addChild(obj.name, obj);

            obj = new Static("sta01","0","-5","342","43",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("공통상세코드");
            obj.set_cssclass("sta_WF_SubTitle");
            this.div00.addChild(obj.name, obj);

            obj = new Grid("grd01","0","38",null,null,"0","0",null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsSubList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"48\"/><Column size=\"109\"/><Column size=\"109\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"89\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"공통코드CD\" cssclass=\"essential\"/><Cell col=\"3\" text=\"공통코드\" cssclass=\"essential\"/><Cell col=\"4\" text=\"공통코드명\" cssclass=\"essential\"/><Cell col=\"5\" text=\"공통코드설명\"/><Cell col=\"6\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:rno\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:codeId\" displaytype=\"text\"/><Cell col=\"3\" text=\"bind:code\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"4\" text=\"bind:codeNm\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"5\" text=\"bind:codeDc\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"6\" text=\"bind:useAt\" textAlign=\"center\" displaytype=\"combotext\" edittype=\"combo\" comboautoselect=\"bind:useAt\" combodataset=\"dsUseYn\" combodatacol=\"value\" combocodecol=\"value\"/></Band></Format></Formats>");
            this.div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div01.form
            obj = new Layout("default","",0,0,this.div01.form,function(p){});
            this.div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCmmnBtn.form
            obj = new Layout("default","",0,0,this.divCmmnBtn.form,function(p){});
            this.divCmmnBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00.form.div00_00.form
            obj = new Layout("default","",0,0,this.div00.form.div00_00.form,function(p){});
            this.div00.form.div00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1050,736,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmCodeMng.xfdl", function() {
        /**
        *  PcMdi 프로젝트
        *  @FileName 	Temp06.xfdl
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
        var selectedCmmCd = '';

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수
        	this.init();
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        this.cfnClose = function ()
        {
        	trace('cfnClose');
        };
        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.getSearchTran = function() {
        	this.dsSearch.setColumn(0, "searchText"  , this.divSearch.form.searchText.value);

        	var strSvcId    = "search";
        	var strSvcUrl   = "sysMng/cmmCodeMngList.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsMainList=dsMainList dsSubList=dsSubList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, callBackFnc, strArg, isAsync);
        }

        this.getSaveTran = function() {
        	var strSvcId    = "save";
        	var strSvcUrl   = "sysMng/updateCmmCodeMng.do";
        	var inData      = "dsMainList=dsMainList:U dsSubList=dsSubList:U";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, callBackFnc, strArg, isAsync);
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
        		this.dsSubList.filter("codeId == ''");
        		this.div00.form.div00_00.form.btnSubAdd.set_enable(false);
        		this.div00.form.div00_00.form.btnSubDel.set_enable(false);
        	} else if(svcID != null && svcID == "save")
        	{

        	}
        };

        this.msgCallback = function(sPopupId, sRtn) {
        	if(sPopupId == "save_confirm") {
        		if(sRtn == "Y") {
        			this.getSaveTran();
        		}
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.init = function() {
        	this.getSearchTran();
        }
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divSearch1_btnSearch_onclick = function(obj,e)
        {
        	this.getSearchTran();
        };

        this.div01_grd00_oncellclick = function(obj,e)
        {
        	var selectedCmmCd = this.dsMainList.getColumn(e.row, "codeId");
        	this.dsSubList.filter("codeId == '" + selectedCmmCd + "'");
        	this.div00.form.div00_00.form.btnSubAdd.set_enable(true);
        	this.div00.form.div00_00.form.btnSubDel.set_enable(true);
        };

        this.div00_div00_00_btnSubAdd_onclick = function(obj,e)
        {

        	var selRow = this.dsMainList.rowposition;
        	var codeId = this.dsMainList.getColumn(selRow, "codeId");
        	if(codeId != null && codeId != undefined) {
        		var nRow = this.dsSubList.insertRow(0);
        		this.dsSubList.setColumn(nRow, "codeId", codeId);
        		this.dsSubList.setColumn(nRow, "useAt", "Y");
        	} else {
        		this.gfnAlertMsg("select", "공통코드CD를 입력해주세요");
        	}
        };

        this.div00_div00_00_btnSubDel_onclick = function(obj,e)
        {
        	var chk = this.dsSubList.extractRows("chk == " + 1);
        	if(chk.length > 0) {
        		this.dsSubList.deleteMultiRows(chk);
        	} else {
        		this.gfnAlertMsg("select", "선택해주세요");
        	}
        };

        this.divCmmnBtn_btnAdd_onclick = function(obj,e)
        {
        	var nRow = this.dsMainList.insertRow();
        	this.dsMainList.setColumn(nRow, "useAt", 'Y');
        };

        this.divCmmnBtn_btnDel_onclick = function(obj,e)
        {
        	var chk = this.dsMainList.extractRows("chk == " + 1);
        	if(chk.length > 0) {
        		this.dsMainList.deleteMultiRows(chk);
        	} else {
        		this.gfnAlertMsg("select", "선택해주세요");
        	}
        };

        this.divCmmnBtn_btnSave_onclick = function(obj,e)
        {
        	if (this.gfnDsIsUpdated(this.dsMainList) == false && this.gfnDsIsUpdated(this.dsSubList) == false) {
        		this.gfnAlertMsg("not_save_confirm", "변경된 내역이 없습니다.");
        		return;
        	} else {
        		this.gfnConfirmMsg("save_confirm", "변경 하시겠습니까?.", "", "", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclose",this.form_onclose,this);
            this.div01.form.grd00.addEventHandler("oncellclick",this.div01_grd00_oncellclick,this);
            this.divCmmnBtn.form.btnAdd.addEventHandler("onclick",this.divCmmnBtn_btnAdd_onclick,this);
            this.divCmmnBtn.form.btnDel.addEventHandler("onclick",this.divCmmnBtn_btnDel_onclick,this);
            this.divCmmnBtn.form.btnSave.addEventHandler("onclick",this.divCmmnBtn_btnSave_onclick,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch1_btnSearch_onclick,this);
            this.div00.form.div00_00.form.btnSubAdd.addEventHandler("onclick",this.div00_div00_00_btnSubAdd_onclick,this);
            this.div00.form.div00_00.form.btnSubDel.addEventHandler("onclick",this.div00_div00_00_btnSubDel_onclick,this);
        };
        this.loadIncludeScript("cmmCodeMng.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
