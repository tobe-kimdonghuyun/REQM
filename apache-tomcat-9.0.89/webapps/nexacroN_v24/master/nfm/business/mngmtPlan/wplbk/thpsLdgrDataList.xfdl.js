(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("thpsLdgrDataList");
            this.set_titletext("과거대장자료");
            if (Form == this.constructor)
            {
                this._setFormPosition(1240,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"thpsLdgrDataTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"frstFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"kwrdCn\" type=\"STRING\" size=\"256\"/><Column id=\"upInstId\" type=\"STRING\" size=\"256\"/><Column id=\"instId\" type=\"STRING\" size=\"256\"/><Column id=\"pageIndex\" type=\"STRING\" size=\"256\"/><Column id=\"pageUnit\" type=\"STRING\" size=\"256\"/><Column id=\"pageSize\" type=\"STRING\" size=\"256\"/><Column id=\"paging\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInten", this);
            obj._setContents("<Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"sname\" type=\"STRING\" size=\"256\"/>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNtfrtMnoff", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"sname\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsThpsLdgrDataList", this);
            obj._setContents("<ColumnInfo><Column id=\"thpsLdgrDataSeq\" type=\"STRING\" size=\"256\"/><Column id=\"thpsLdgrDataTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"thpsLdgrDataTypeDtlCd\" type=\"STRING\" size=\"256\"/><Column id=\"kwrdCn\" type=\"STRING\" size=\"256\"/><Column id=\"regYr\" type=\"STRING\" size=\"256\"/><Column id=\"rcrd_bgngYr\" type=\"STRING\" size=\"256\"/><Column id=\"rcrd_endYr\" type=\"STRING\" size=\"256\"/><Column id=\"instId\" type=\"STRING\" size=\"256\"/><Column id=\"atchFileId\" type=\"STRING\" size=\"256\"/><Column id=\"rn\" type=\"STRING\" size=\"256\"/><Column id=\"upInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"instNm\" type=\"STRING\" size=\"256\"/><Column id=\"frstFileNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsThpsLdgrDataTypeCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPaging", this);
            obj._setContents("<ColumnInfo><Column id=\"currentPageNo\" type=\"STRING\" size=\"256\"/><Column id=\"recordCountPerPage\" type=\"STRING\" size=\"256\"/><Column id=\"pageSize\" type=\"STRING\" size=\"256\"/><Column id=\"totalRecordCount\" type=\"STRING\" size=\"256\"/><Column id=\"totalPageCount\" type=\"STRING\" size=\"256\"/><Column id=\"firstPageNoOnPageList\" type=\"STRING\" size=\"256\"/><Column id=\"lastPageNoOnPageList\" type=\"STRING\" size=\"256\"/><Column id=\"firstRecordIndex\" type=\"STRING\" size=\"256\"/><Column id=\"lastRecordIndex\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("fileDnTransfer", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"104","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SA");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel_00","20","8","80","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("지방산림청");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cmbUpInstId","staLabel_00:10","8","160","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsInten");
            obj.set_codecolumn("value");
            obj.set_datacolumn("name");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staLabel_01","cmbUpInstId:20","8","89","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("국유림관리소");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cmbInstId","staLabel_01:10","8","181","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsNtfrtMnoff");
            obj.set_codecolumn("value");
            obj.set_datacolumn("name");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staLabel_01_00","cmbInstId:20","8","40","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("유형");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cmbTypeCd","staLabel_01_00:10","8","150","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsThpsLdgrDataTypeCd");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staLabel_02","cmbTypeCd:20","8","50","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("대장명");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staBg_bottom","0",null,null,"33","0","20",null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_SA_comBG");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,null,"88","32","20","10",null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("검색");
            obj.set_cssclass("btn_SA_search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtLdgrNm","staLabel_02:10","8",null,"28","20",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("StaticDtlSttus","0","divSearch:30","201","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("과거대장자료 목록");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdThpsLdgrDataList","0","StaticDtlSttus:20",null,"388","0",null,null,null,null,null,this);
            obj.set_initvalueid("iv_Grid0");
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("dsThpsLdgrDataList");
            obj.set_nodatatext("데이터가 없습니다.");
            obj.set_selecttype("row");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"55\"/><Column size=\"103\"/><Column size=\"103\"/><Column size=\"300\"/><Column size=\"103\"/><Column size=\"103\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"지방산림청\"/><Cell col=\"2\" text=\"국유림관리소\"/><Cell col=\"3\" text=\"대장명\"/><Cell col=\"4\" text=\"유형\"/><Cell col=\"5\" text=\"다운로드\"/></Band><Band id=\"body\"><Cell text=\"bind:rn\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:upInstNm\" textAlign=\"center\"/><Cell col=\"2\" displaytype=\"text\" text=\"bind:instNm\"/><Cell col=\"3\" text=\"bind:frstFileNm\" displaytype=\"text\" calendardateformat=\"yyyy-MM-dd\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:thpsLdgrDataTypeCd\" expr=\"thpsLdgrDataTypeCd==1 ? &quot;사업이력&quot; : &quot;계획&quot;\"/><Cell col=\"5\" text=\"다운로드\" displaytype=\"buttoncontrol\" calendardateformat=\"yyyy-MM-dd\" edittype=\"button\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divPaging","0","grdThpsLdgrDataList:20",null,"28","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_url("common::cmmPaging.xfdl");
            obj.set_text("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPaging
            obj = new Layout("default","",0,0,this.divPaging.form,function(p){});
            this.divPaging.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1240,650,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("thpsLdgrDataList.xfdl","lib::lib_nfm.xjs");
        this.registerScript("thpsLdgrDataList.xfdl", function() {
        /**
        *  과거대장자료 조회
        *  @MenuPath    경영계획부 - 과거대장자료
        *  @FileName 	thpsLdgrDataList.xfdl
        *  @Creator 	gmj
        *  @CreateDate 	240715
        *  @Desction      경영계획수립
        ************************ 소스 수정 이력 **************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  240715               gmj                     최초생성
        *******************************************************************************
        */
        this.executeIncludeScript("lib::lib_nfm.xjs"); /*include "lib::lib_nfm.xjs"*/;

        this.thpsLdgrDataList_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this); //초기화[필수]

        	this.nfmUserAuthrtSrchCndtnStng();

        	var codeArgs = [
        		 {'cdId' : 'THPS_LDGR_DATA_TYPE_CD', 'defaultData' : '전체'}
        	];

        	this.nfmCodeSet(codeArgs); //코드세팅

        };


        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/
        this.fnCallback = function(svcID,errorCode,errorMsg){
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0){
        		return;
        	}
        	switch(svcID){
        		case "codeSearch": //코드세팅
        			this.divSearch.form.cmbTypeCd.set_index(0);
        			break;
        		case "search":
        			//this.dsSearch.clearData();
        			//this.dsSearch.addRow();
        			//this.dsSearch.setColumn(0, "instId", this.dsSttus.getColumn(0,"instId"));
        			//this.fnDtlSearch();
        			this.divPaging.form.fnCreatePage(this.grdThpsLdgrDataList, "setPageAfter", this.dsPaging.getColumn(0, 'currentPageNo'), 0, this.dsPaging.getColumn(0, 'totalRecordCount'));
        		break;
        	}
        };

        this.setPageAfter = function (pageIndex) {
        	this.fnSearch(pageIndex);
        }

        this.fnSearch = function(pageIndex){
        	this.dsThpsLdgrDataList.clearData();
        	if(this.dsSearch.getRowCount() == 0) {
        		this.dsSearch.addRow();
        	}
        	this.dsSearch.setColumn(0, "upInstId", this.divSearch.form.cmbUpInstId.value);
        	this.dsSearch.setColumn(0, "instId",  this.divSearch.form.cmbInstId.value);
        	this.dsSearch.setColumn(0, "thpsLdgrDataTypeCd",  this.divSearch.form.cmbTypeCd.value);
        	this.dsSearch.setColumn(0, "frstFileNm",  this.divSearch.form.edtLdgrNm.value);

        	this.dsSearch.setColumn(0, "paging", "Y");
        	// 페이징 설정
        	this.dsSearch.setColumn(0, "pageIndex", pageIndex);
         	this.dsSearch.setColumn(0, "pageUnit", this.divPaging.form.cboCnt.value);
         	this.dsSearch.setColumn(0, "pageSize", 10);

        	var strSvcId    = "search";
        	var strSvcUrl   = "nfm/thpsLdgrData/selectThpsLdgrDataList.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsThpsLdgrDataList=dsList dsPaging=dsPaging";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc, 	// transaction의 결과를 받을 Function 이름
        						isAsync, 		// 비동기통신 여부 [생략가능]
        						3);				// nDataType :: 3(JSON)
        }
        //검색
        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.fnSearch(1);
        };
        this.grdThpsLdgrDataList_oncellclick = function(obj,e)
        {
        	var idx = obj.getCellPos();
        	//var fileNm = this.dsThpsLdgrDataList.getColumn(e.row, "frstFileNm");
        	//var fileCrse = "";

        	if(idx == 5){

        		//파일다운로드 실행
        		//this.fileDnTransfer.download();
        		var fileId = this.dsThpsLdgrDataList.getColumn(e.row, "atchFileId");
        		this.gfnFileDownloadByAtchFileId(fileId);
        	}
        };

        //검색조건 input keydown 이벤트
        this.divSearch_onkeydown = function(obj,e) {
        	if(e.keycode == 13) {
        		this.fnSearch(1);
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.thpsLdgrDataList_onload,this);
            this.divSearch.form.cmbUpInstId.addEventHandler("onitemchanged",this.nfmCmmndivSearch_onitemchanged,this);
            this.divSearch.form.cmbInstId.addEventHandler("onitemchanged",this.nfmCmmndivSearch_onitemchanged,this);
            this.divSearch.form.cmbTypeCd.addEventHandler("onitemchanged",this.divSearch_scanTpeCd_onitemchanged,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.divSearch.form.edtLdgrNm.addEventHandler("onkeydown",this.divSearch_onkeydown,this);
            this.grdThpsLdgrDataList.addEventHandler("oncellclick",this.grdThpsLdgrDataList_oncellclick,this);
        };
        this.loadIncludeScript("thpsLdgrDataList.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
