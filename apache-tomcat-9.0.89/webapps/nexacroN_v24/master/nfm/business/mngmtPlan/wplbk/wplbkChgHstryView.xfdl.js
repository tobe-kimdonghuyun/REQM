(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("wplbkChgHstryView");
            this.set_titletext("경영계획부 - 이력");
            if (Form == this.constructor)
            {
                this._setFormPosition(1240,1360);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"wplbkNo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWplbkChgList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchYn", this);
            obj._setContents("<ColumnInfo><Column id=\"wplbkNo\" type=\"STRING\" size=\"256\"/><Column id=\"rqdocNo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGisList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWplbkVO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("StaticWplbkChg","0","10","230","28",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("경영계획 변경이력 목록");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMngmtPlanChg","0","StaticWplbkChg:20",null,"272","0",null,null,null,null,null,this);
            obj.set_initvalueid("iv_Grid0");
            obj.set_taborder("2");
            obj.set_cssclass("grd_display");
            obj.set_binddataset("dsWplbkChgList");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_scrollbartype("auto auto");
            obj.set_fillareatype("none");
            obj.set_autosizingtype("row");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"189\"/><Column size=\"133\"/><Column size=\"121\"/><Column size=\"161\"/><Column size=\"500\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"변경일자\"/><Cell col=\"2\" text=\"변경자\"/><Cell col=\"3\" text=\"변경요청구분\"/><Cell col=\"4\" text=\"최종승인자\"/><Cell col=\"5\" text=\"변경사유\"/></Band><Band id=\"body\"><Cell expr=\"rowidx+1\"/><Cell col=\"1\" text=\"bind:lastAprvDt\"/><Cell col=\"2\" text=\"bind:userNm\"/><Cell col=\"3\" text=\"bind:wplbkChgAplyTpcd\"/><Cell col=\"4\" text=\"bind:aprvrUserNm\"/><Cell col=\"5\" text=\"bind:wplbkChgDmndRsn\" displaytype=\"text\" textAlign=\"left\" wordWrap=\"char\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("StaticWplbkChg00","0","grdMngmtPlanChg:30","230","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("소반경계변경이력");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdWplbkChg","0","StaticWplbkChg00:20",null,"202","0",null,null,null,null,null,this);
            obj.set_initvalueid("iv_Grid0");
            obj.set_taborder("4");
            obj.set_cssclass("grd_display");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_scrollbartype("auto auto");
            obj.set_fillareatype("none");
            obj.set_autosizingtype("none");
            obj.set_extendsizetype("row");
            obj.set_binddataset("dsGisList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"94\"/><Column size=\"111\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"200\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"관리소명\"/><Cell col=\"2\" text=\"계획구명\"/><Cell col=\"3\" text=\"임반\"/><Cell col=\"4\" text=\"소반\"/><Cell col=\"5\" text=\"차기\"/><Cell col=\"6\" text=\"변경일자\"/><Cell col=\"7\" text=\"변경사항\"/></Band><Band id=\"body\"><Cell expr=\"rowidx+1\"/><Cell col=\"1\" text=\"bind:mnoff_nm\"/><Cell col=\"2\" text=\"bind:wplar_nm\"/><Cell col=\"3\" text=\"bind:cmblc_id\"/><Cell col=\"4\" text=\"bind:sblt_id\"/><Cell col=\"5\" text=\"bind:nxtrm_no\"/><Cell col=\"6\" text=\"bind:idnty_dt\"/><Cell col=\"7\" text=\"bind:chg_cn\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","StaticWplbkChg:0","8","360","32",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("행을 더블 클릭하면 해당 이력이 상세조회됩니다.");
            obj.set_color("#2a6fce");
            obj.set_cssclass("sta_help_linebox_green");
            this.addChild(obj.name, obj);

            obj = new Button("btnList",null,"grdWplbkChg:30","78","32","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_common01");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle04_00","0","btnList:30","123","32",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("도면");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static02",null,"712","90","28","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("신규 차기 경계");
            obj.set_cssclass("sta_WF_legend_text");
            this.addChild(obj.name, obj);

            obj = new Div("divMap","0","staTitle04_00:20",null,"600","0",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("div_map");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("webFlrpln","0","0",null,null,"0","0",null,null,null,null,this.divMap.form);
            obj.set_taborder("0");
            this.divMap.addChild(obj.name, obj);

            obj = new Button("btnSbltmSearch",null,"640","116","32","btnList:6",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("소반도 보기");
            obj.set_cssclass("btn_WF_common02");
            obj.set_visible("true");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("staLegend_orange",null,"722","9","10","Static02:6",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_legend_red");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divMap.form
            obj = new Layout("default","",0,0,this.divMap.form,function(p){});
            this.divMap.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1240,1360,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("wplbkChgHstryView.xfdl","lib::lib_nfm.xjs");
        this.registerScript("wplbkChgHstryView.xfdl", function() {
        /**
        *  경영계획부 이력 화면
        *  @MenuPath    경영계획 > 경영계획부 관리 > 경영계획부 상세조회 > 이력
        *  @FileName 	wplbkHstryView.xfdl
        *  @Creator 	hdh
        *  @CreateDate 	2024.09.02
        *  @Desction         스크립트 표준 및 주석 표준 정의
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2024.09.02     		hdh(svn user) 	        최초 생성
        *******************************************************************************
        */
        this.executeIncludeScript("lib::lib_nfm.xjs"); /*include "lib::lib_nfm.xjs"*/;
        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        const publicArgs = this.gfnGetMdiRootDiv() ? this.gfnGetMdiRootDiv().arguments.menuParam : this.getOwnerFrame();

        this.result = "";
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e) {
        	this.gfnFormOnLoad(obj,e); //필수함수


        	if(publicArgs.formType == 'POPUP') {	//버튼정리
        		this.btnSbltmSearch.set_visible(false);
        		this.btnList.set_visible(false);
        	}

        	/*var codeArgs = [//cdId, useYn, defaultData, rds

        	];*/

        	//this.nfmCodeSet(codeArgs); //코드세팅

        	this.fnSearch(); //조회
        };

        this.fnCallback = function(svcID,errorCode,errorMsg) {
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0)
        	{
        		return;
        	}

        	switch(svcID)
        	{
        		case "codeSearch": //코드세팅
        			//this.fnSearch(); //조회
        			break;
        		case "search": //조회
        			this.loadGis();
        			break;
        		case "searchHstryYn":
        			if(this.result == "0"){
        				this.gfnAlert("msg.general", ["이력이 존재하지 않습니다."]);
        				return false;
        			}else{
        				//경영계획부 이력 상세조회
        				var wplbkNo = this.dsWplbkChgList.getColumn(this.grdMngmtPlanChg.currentrow, "wplbkNo");
        				var wplarId = this.dsWplbkChgList.getColumn(this.grdMngmtPlanChg.currentrow, "wplarId");
        				var nxtrmNo = this.dsWplbkChgList.getColumn(this.grdMngmtPlanChg.currentrow, "nxtrmNo");
        				var rqdocNo = this.dsWplbkChgList.getColumn(this.grdMngmtPlanChg.currentrow, "rqdocNo");

        				var oArg = {wplbkNo : wplbkNo, wplarId : wplarId, nxtrmNo : nxtrmNo, rqdocNo : rqdocNo, formType : "POPUP", callView : "H"};

        				var sTitle = "경영계획부 이력 조회";
        				var sPopupCallBack = "fnPopupCallback";
        				var oOption = {
        					 width:1215
        					,height:800			//모달리스는 width,height 필수지정
        					,popuptype:"modeless"
        					,autosize:false
        					,title:sTitle
        					,resize:false
        					,titlebar:true
        				};
        				this.gfnOpenPopup("popupModaless", "business::mngmtPlan/wplbk/popup/wplbkPopup.xfdl", oArg, sPopupCallBack, oOption);
        				//this.gfnOpenPopup("popupModaless", "business::mngmtPlan/wplbk/wplbkViewHstry.xfdl", oArg, sPopupCallBack, oOption);
        			}
        			break;

        	}
        }

        //조회
        this.fnSearch = function () {
        	this.dsSearch.setColumn(0, "wplbkNo", publicArgs.wplbkNo);
        	//this.dsSearch.setColumn(0, "aprvAt", "Y");

        	var strSvcId    = "search";
        	var strSvcUrl   = "nfm/wplbkChg/selectWplbkChgHstryList.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsWplbkChgList=resultList dsGisList=gisList dsWplbkVO=wplbkVO";
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
        };

        //조회
        this.fnWplbkHstryYnSearch = function (e) {

        	var wplbkNo = this.dsWplbkChgList.getColumn(e.row, "wplbkNo");
        	var rqdocNo = this.dsWplbkChgList.getColumn(e.row, "rqdocNo");

        	this.dsSearchYn.setColumn(0, "wplbkNo", wplbkNo);
        	this.dsSearchYn.setColumn(0, "rqdocNo", rqdocNo);

        	var strSvcId    = "searchHstryYn";
        	var strSvcUrl   = "nfm/wplbk/checkWplbkHstry.do";
        	var inData      = "dsSearch=dsSearchYn";
        	var outData     = "";
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
        };


        //그리드 셀 더블 클릭
        this.grdMngmtPlanChg_oncelldblclick = function(obj,e)
        {
        	//여부 파악 후 있으면 팝업 열리고 없으면 alert
        	this.fnWplbkHstryYnSearch(e);



        };

        //목록버튼
        this.btnList_onclick = function(obj,e)
        {
        	var backPage = 'business::mngmtPlan/wplbk/wplbkList.xfdl';
        	if(Object.keys(publicArgs).includes('backPage')) {
        		backPage = publicArgs['backPage'];
        	}

        	this.gfnSetUrl(backPage, publicArgs);
        };

        this.loadGis = function() {
        	var strReqParm = "callType=miniGis";
        	strReqParm += "&callMapWidth=" + this.divMap.form.webFlrpln.getOffsetWidth() + "px";
        	strReqParm += "&callMapHeight=" + this.divMap.form.webFlrpln.height + "px";
        	if(!this.gfnIsNull(publicArgs.wplbkNo) && !this.gfnIsEmpty(publicArgs.wplbkNo)){
        		console.log(''+this.dsGisList.getColumn(0, 'nxtrm_no'))
        		var reqParm = {			 	// GIS 인터페이스 파라미터
        			wplar_id : this.dsGisList.getColumn(0, 'wplar_id')
        			, nxtrm_no : ''+this.dsGisList.getColumn(0, 'nxtrm_no')
        			, cmblc_id : this.dsGisList.getColumn(0, 'cmblc_id')
        			, sblt_id : this.dsGisList.getColumn(0, 'sblt_id')
        			, isMove : true
        			, isOutput : true
        		};

        		strReqParm += "&callFunc=fgisNfmGisMoveIF.sbkfmGisMove";
        		strReqParm += "&callParm=";
        		strReqParm += encodeURIComponent(JSON.stringify(reqParm));
        	}

        	var urlPath = window.location.protocol + "//" + window.location.host; //localhost:8084까지 세팅
        	this.divMap.form.webFlrpln.set_url(urlPath+"/fgis/cmmn/fgisMain.do?"+strReqParm);
        }


        this.btnSbltmSearch_onclick = function(obj,e)
        {
        	if(this.dsWplbkVO.getRowCount() > 0) {
        		var reqParmJson = {}

        		reqParmJson["callFunc"] = "fgisNfmGisMoveIF.sbkHistSearch";
        		reqParmJson["callParm"] = {
        									  inten_id : this.dsWplbkVO.getColumn(0, 'upInstId')
        									, mnoff_id : this.dsWplbkVO.getColumn(0, 'instId')
        									, wplar_id : this.dsWplbkVO.getColumn(0, 'wplarId')
        									, nxtrm_no : ''+this.dsWplbkVO.getColumn(0, 'nxtrmNo')
        									, cmblc_id : this.dsWplbkVO.getColumn(0, 'cmblcId')
        									, sblt_id : this.dsWplbkVO.getColumn(0, 'sbltId')
        									, isMove:true
        									, isOutput:true
        								};
        		_pForm.openGisPopup(reqParmJson);
        	}
        };

        this.grd_oncellclick = function(obj,e)
        {
        	var strReqParm = "callType=miniGis";
        	strReqParm += "&callMapWidth=" + this.divMap.form.webFlrpln.getOffsetWidth() + "px";
        	strReqParm += "&callMapHeight=" + this.divMap.form.webFlrpln.height + "px";
        	if(!this.gfnIsNull(publicArgs.wplbkNo) && !this.gfnIsEmpty(publicArgs.wplbkNo)){
        		var reqParm = {			 	// GIS 인터페이스 파라미터
        			wplar_id : this.dsGisList.getColumn(e.row, 'wplar_id')
        			, nxtrm_no : ''+this.dsGisList.getColumn(e.row, 'nxtrm_no')
        			, cmblc_id : this.dsGisList.getColumn(e.row, 'cmblc_id')
        			, sblt_id : this.dsGisList.getColumn(e.row, 'sblt_id')
        			, isMove : true
        			, isOutput : true
        		};

        		strReqParm += "&callFunc=fgisNfmGisMoveIF.sbkfmGisMove";
        		strReqParm += "&callParm=";
        		strReqParm += encodeURIComponent(JSON.stringify(reqParm));
        	}

        	var urlPath = window.location.protocol + "//" + window.location.host; //localhost:8084까지 세팅
        	this.divMap.form.webFlrpln.set_url(urlPath+"/fgis/cmmn/fgisMain.do?"+strReqParm);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.StaticWplbkChg.addEventHandler("onclick",this.Static03_00_onclick,this);
            this.grdMngmtPlanChg.addEventHandler("oncelldblclick",this.grdMngmtPlanChg_oncelldblclick,this);
            this.StaticWplbkChg00.addEventHandler("onclick",this.Static03_00_onclick,this);
            this.grdWplbkChg.addEventHandler("onheadclick",this.grd_onheadclick,this);
            this.grdWplbkChg.addEventHandler("oncellclick",this.grd_oncellclick,this);
            this.sta00.addEventHandler("onclick",this.sta00_onclick,this);
            this.btnList.addEventHandler("onclick",this.btnList_onclick,this);
            this.btnSbltmSearch.addEventHandler("onclick",this.btnSbltmSearch_onclick,this);
        };
        this.loadIncludeScript("wplbkChgHstryView.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
