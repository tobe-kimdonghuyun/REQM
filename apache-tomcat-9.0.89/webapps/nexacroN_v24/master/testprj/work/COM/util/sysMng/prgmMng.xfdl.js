(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("prgmMng");
            this.set_titletext("List-Detail");
            this.set_cssclass("frm_WF_Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,1030);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"INT\" size=\"1\"/><Column id=\"rno\" type=\"INT\" size=\"256\"/><Column id=\"progrmNo\" type=\"STRING\" size=\"256\"/><Column id=\"progrmFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"progrmStrePath\" type=\"STRING\" size=\"256\"/><Column id=\"progrmKoreanNm\" type=\"STRING\" size=\"256\"/><Column id=\"progrmDc\" type=\"STRING\" size=\"256\"/><Column id=\"url\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"searchText\" type=\"STRING\" size=\"256\"/><Column id=\"currentPageNo\" type=\"INT\" size=\"256\"/><Column id=\"recordCountPerPage\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"recordCountPerPage\">10</Col><Col id=\"currentPageNo\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPage", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDelList", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"INT\" size=\"1\"/><Column id=\"rno\" type=\"INT\" size=\"256\"/><Column id=\"progrmNo\" type=\"STRING\" size=\"256\"/><Column id=\"progrmFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"progrmStrePath\" type=\"STRING\" size=\"256\"/><Column id=\"progrmKoreanNm\" type=\"STRING\" size=\"256\"/><Column id=\"progrmDc\" type=\"STRING\" size=\"256\"/><Column id=\"url\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj.set_taborder("1");
            obj.set_text("프로그램 목록");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","0","93",null,null,"20","170",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"51\"/><Column size=\"160\"/><Column size=\"99\"/><Column size=\"106\"/><Column size=\"120\"/><Column size=\"88\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"프로그램명\"/><Cell col=\"3\" text=\"프로그램타입\"/><Cell col=\"4\" text=\"프로그램한글명\"/><Cell col=\"5\" text=\"설명\"/><Cell col=\"6\" text=\"연결URL\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/><Cell col=\"1\" text=\"bind:rno\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:progrmFileNm\" displaytype=\"text\"/><Cell col=\"3\" text=\"bind:progrmStrePath\" displaytype=\"text\"/><Cell col=\"4\" text=\"bind:progrmKoreanNm\" displaytype=\"text\"/><Cell col=\"5\" text=\"bind:progrmDc\" displaytype=\"text\"/><Cell col=\"6\" text=\"bind:url\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_02",null,"60","80","23","21",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("삭제");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00",null,"60","80","23","111",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Div("divPage02","223","915","555","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_url("work::COM/util/paging/paging.xfdl");
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
            obj = new Layout("default","",1050,1030,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","work::COM/util/paging/paging.xfdl");
        };
        
        // User Script
        this.registerScript("prgmMng.xfdl", function() {
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

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수
        	this.getSearchTran("list");
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

        	this.dsSearch.setColumn(0, "searchText"  , this.divSearch.form.searchText.value);

        	var strSvcId    = ty;
        	var strSvcUrl   = "sysMng/prgmMngList.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsList=dsList dsPage=dsPage";
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

        this.deleteTran = function() {

        	var strSvcId    = "delete";
        	var strSvcUrl   = "sysMng/deletePrgm.do";
        	var inData      = "dsDelList=dsDelList";
        	var outData     = "dsList=dsList";
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

        	switch(svcID)
        	{
        		case "list":
        			this.divPage02.form.initPages(this.dsPage.getColumn(0, "totalRecordCount"), this.dsPage.getColumn(0, "recordCountPerPage"), this.dsPage.getColumn(0, "pageSize"), this.pagingCallback);
        			break;
        		case "search":
        			break;
        		case "delete":
        			// 삭제 되었습니다.
        			var gvRetMsg = this.objApp.getVariable("gvRetMsg");
        			this.gfnAlertMsg("delete", gvRetMsg);
        			break;

        		case "subSave":
        			// 저장 되었습니다.
        			this.gfnAlert("msg.save.success");
        			break;

        	}
        };

        this.msgCallback = function(sPopupId, sRtn) {
        	if(sPopupId == "del_confirm") {
        		if(sRtn == "Y") {
        			this.deletePrgm();
        		}
        	} else if(sPopupId == "custom_alert") {
        		this.dsSearch.setColumn(0, "currentPageNo", 1);
        		this.dsSearch.setColumn(0, "recordCountPerPage", this.dsPage.getColumn(0, "recordCountPerPage"));
        		this.getSearchTran("search");
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
        this.deletePrgm = function() {
        	var chk = this.dsList.findRow("chk", 1);
        	if(chk != -1) {
        		for (var i=0; i < this.dsList.rowcount; i++)
        		{
        			if(this.dsList.getColumn(i, 2) == 1) {
        				var progrmNo = this.dsList.getColumn(i, 3);
        				if(progrmNo != null && progrmNo != '' && progrmNo != undefined) {
        					var nRow = this.dsDelList.addRow();
        					this.dsDelList.copyRow(nRow, this.dsList, i);
        				}
        			}
        		}

        		this.deleteTran();
        	} else {
        		this.gfnAlertMsg("delete", "선택하세요");
        	}
        }

        this.addPageOpen = function(param) {
        	var sMenuId = this.objApp.gvFrmLeft.form.currsMenuId.hi;
        	var sMenuUrl = 'work::sysMng/form/prgmForm.xfdl';
        	var actNm = '추가/상세';
        	this.gfnNewGetMdi(sMenuId, sMenuUrl, actNm, param);
        }

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.btn00_00_onclick = function(obj,e)
        {
        	this.addPageOpen();
        };

        this.btn00_02_onclick = function(obj,e)
        {
        	this.gfnConfirmMsg("del_confirm", "삭제하시겠습니까?", "", "", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        };

        this.grd00_oncelldblclick = function(obj,e)
        {
        	var progrmNo = this.dsList.getColumn(e.row, "progrmNo");
        	var progrmFileNm = this.dsList.getColumn(e.row, "progrmFileNm");
        	var progrmStrePath = this.dsList.getColumn(e.row, "progrmStrePath");
        	var progrmKoreanNm = this.dsList.getColumn(e.row, "progrmKoreanNm");
        	var progrmDc = this.dsList.getColumn(e.row, "progrmDc");
        	var url = this.dsList.getColumn(e.row, "url");

        	var param = "progrmNo=" + progrmNo;

        	this.addPageOpen(param);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.cfnSearch,this);
            this.grd00.addEventHandler("oncelldblclick",this.grd00_oncelldblclick,this);
            this.btn00_02.addEventHandler("onclick",this.btn00_02_onclick,this);
            this.btn00_00.addEventHandler("onclick",this.btn00_00_onclick,this);
        };
        this.loadIncludeScript("prgmMng.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
