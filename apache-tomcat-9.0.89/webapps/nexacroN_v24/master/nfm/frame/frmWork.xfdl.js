(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmWork");
            this.set_titletext("WorkFrame");
            this.set_cssclass("frm_WF_Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1407,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"menuId\" type=\"STRING\" size=\"256\"/><Column id=\"biznDivCd\" type=\"STRING\" size=\"256\"/><Column id=\"authrtId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenuInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"menuId\" type=\"STRING\" size=\"256\"/><Column id=\"taskTpcd\" type=\"STRING\" size=\"256\"/><Column id=\"menuNm\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"upMenuId\" type=\"STRING\" size=\"256\"/><Column id=\"menuTargtCd\" type=\"STRING\" size=\"256\"/><Column id=\"menuOrdVl\" type=\"STRING\" size=\"256\"/><Column id=\"menuLvl\" type=\"INT\" size=\"256\"/><Column id=\"menuExplnCn\" type=\"STRING\" size=\"256\"/><Column id=\"popupMenuAttrbCn\" type=\"STRING\" size=\"256\"/><Column id=\"menuImgPath\" type=\"STRING\" size=\"256\"/><Column id=\"menuImgNm\" type=\"STRING\" size=\"256\"/><Column id=\"menuTpcd\" type=\"STRING\" size=\"256\"/><Column id=\"menuUrl\" type=\"STRING\" size=\"256\"/><Column id=\"frstRgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastMdfrId\" type=\"STRING\" size=\"256\"/><Column id=\"lastMdfcnDt\" type=\"STRING\" size=\"256\"/><Column id=\"saveCd\" type=\"STRING\" size=\"256\"/><Column id=\"result\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"atchFileId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"rn\" type=\"STRING\" size=\"256\"/><Column id=\"lgnPolcyId\" type=\"STRING\" size=\"256\"/><Column id=\"authrtId\" type=\"STRING\" size=\"256\"/><Column id=\"taskTpcd\" type=\"STRING\" size=\"256\"/><Column id=\"lgnIp\" type=\"STRING\" size=\"256\"/><Column id=\"lgnIpLmtYn\" type=\"STRING\" size=\"256\"/><Column id=\"lgnPolcyExpln\" type=\"STRING\" size=\"256\"/><Column id=\"frstRgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastMdfrId\" type=\"STRING\" size=\"256\"/><Column id=\"lastMdfcnDt\" type=\"STRING\" size=\"256\"/><Column id=\"authrtNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTitle","90","20",null,"45","77",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("staTitleBg","0","0",null,"45","0",null,null,null,null,null,this.divTitle.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_mainTitle_bg");
            this.divTitle.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","102","45",null,null,null,null,null,null,this.divTitle.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_mainTitle");
            obj.set_fittocontents("width");
            this.divTitle.addChild(obj.name, obj);

            obj = new Static("staTitleSub","staTitle:0","0","105","45",null,null,null,null,null,null,this.divTitle.form);
            obj.set_taborder("2");
            obj.set_text("(subtitle)");
            obj.set_cssclass("sta_WF_mainTitle_sub");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divTitle.addChild(obj.name, obj);

            obj = new Div("divNavigator",null,"0","77","45","0",null,null,null,null,null,this.divTitle.form);
            obj.set_taborder("3");
            obj.set_formscrolltype("none");
            obj.set_visible("true");
            this.divTitle.addChild(obj.name, obj);

            obj = new Static("staHome","0","10","80","25",null,null,null,null,null,null,this.divTitle.form.divNavigator.form);
            obj.set_textDecoration("underline");
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_navigator_manual_S");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            obj.set_usedecorate("false");
            obj.set_text("매뉴얼");
            obj.set_tooltiptext("해당화면의 매뉴얼을 다운로드 받을 수 있습니다.");
            this.divTitle.form.divNavigator.addChild(obj.name, obj);

            obj = new Button("btn00","1050","10","88","28",null,null,null,null,null,null,this.divTitle.form);
            obj.set_taborder("4");
            obj.set_text("reload");
            this.divTitle.addChild(obj.name, obj);

            obj = new Div("divWork","90","divTitle:24",null,null,"77","43",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTitle.form.divNavigator.form
            obj = new Layout("default","",0,0,this.divTitle.form.divNavigator.form,function(p){});
            this.divTitle.form.divNavigator.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divTitle.form
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divWork
            obj = new Layout("default","",0,0,this.divWork.form,function(p){});
            this.divWork.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","desktop",1407,900,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmWork.xfdl", function() {
        /**
         *  DevPACK
         *  @FileName 	frmWork.xfdl
         *  @Creator 	TOBESOFT
         *  @CreateDate 	2020/11/24
         *  @Desction
         ************** 소스 수정 이력 ***********************************************
         * Date					Modifier					Description
         *******************************************************************************
         * 2020/11/24			TOBESOFT					최초생성
         *******************************************************************************
        **/

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        //this.fvWinKey   		= "";			// WinKey
        this.fvMenuId   		= "";			// 메뉴 ID
        this.fvMenuNm   		= "";			// 메뉴 Name
        this.fvMenuUrl  		= "";			// 메뉴 URL
        //this.fvPrgmId   		= "";			// 프로그램 ID
        //this.fvMenuArgs 		= "";			// gfnOpenMenu에서 전달한 Argument
        //this.fvObjArgs 			= "";			// 메뉴에서 등록한 Argument
        //this.fvMenuHelpFlag 	= "";			// 메뉴 매뉴얼 작성 여부
        //this.fvPrgmNm 			= "";			// 프로그램 이름

        //this.fvButtonAuth = "";			// 공통 버튼 권한
        //this.fvSearchScopeCd = "";		// 조회범위코드(SM13)
        this.fvDivWork = this.divWork;	// 업무 화면 DIV

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        /**
         * @description Form 로드 완료
        **/
        this.form_onload = function(obj,e)
        {//trace(obj.name, e.eventid);
        	// QuickView 실행
        	if (nexacro._quickview_formurl)
        	{
        		this.fvDivWork.form.set_url(nexacro._quickview_formurl);

        		// title 처리
        		var pThis = this
        		nexacro._OnceCallbackTimer.callonce(pThis, function () {
        			pThis.fnSetDivTitle("[QUICKVIEW]\t" + pThis.fvDivWork.form.titletext);
        		}, 2000);
        		return;
        	}

        	// 넘어온 아규먼트 셋팅
        	this.fnSetOwnFrameArgu(this);

        	// 권한 가져오기
        	//this.fvButtonAuth    = this.gfnGetAuthButton(this.fvMenuId);	// 공통버튼 권한

        	// 타이틀영역 셋팅
        	this.fnSetDivTitle();

        	// 업무화면 연결
        	this.fvDivWork.form.set_url(this.fvMenuUrl);
        	// 프로그램 호출 현황
        	this.fnMenuOpenLog();

        };

        this.fnCallback = function(svcID,errorCode,errorMsg) {
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0)
        	{
        		return;
        	}

        	switch(svcID)
        	{
        		case "searchMenu": //조회
        			var fileId = this.dsMenuInfo.getColumn(0, "atchFileId");
        			if(this.gfnIsNull(fileId) || this.gfnIsEmpty(fileId)){
        				this.gfnAlert("msg.general", ["매뉴얼이 존재하지 않습니다.\n매뉴얼을 등록해주세요."]);
        				return false;
        			}else{
        				this.gfnFileDownloadByAtchFileId(fileId);
        			}

        			break;

        	}
        }
        /**
         * @description 화면 닫기
        **/
        this.form_onclose = function(obj, e)
        {
        	if(nexacro._quickview_formurl) return;
        	try
        	{
        		// WorkFrame 화면일때만 창 닫기
        		if (e.fromobject == "[object Form]" && e.fromobject.name == "frmWork")
        		{
        			var sWinId = this.getOwnerFrame().name;
        			if (app.gvFrmMdi.form.bClose)
        			{
        				app.gvFrmMdi.form.bClose = false;
        				app.gvFrmMdi.form.fnTabOnClose(sWinId);
        				this.fvDivWork.set_url("");
        			}
        		}
        	}
        	catch(e)
        	{

        	}
        }

        /**
         * @description Form 크기 변경
        **/
        this.form_onsize = function(obj,e)
        {
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        // //메뉴오픈로그
        this.fnMenuOpenLog = function ()
        {
        	if(nexacro._quickview_formurl) return;
        	this.gfnSaveMenuOpenLog("MENU", this.fvMenuId);
        };

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/

        this.fnMsgCallback = function (sMsgId, sRtn)
        {
        	switch (sMsgId)
        	{
        		case "exportButton":
        			if (sRtn)
        			{
        				app.gvFrmMdi.form.fnOpenPuGubun();
        			}
        			break;
        		default:
        			break;
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/

        /**
         * @description workFrame close 시 처리
         * @param N/A
         * @return N/A
        **/
        this.fnWorkFrameClose = function()
        {
        	if(nexacro._quickview_formurl) return;
        	var bReturn = true;

        	// 마지막 컴포넌트 데이터셋  업데이트
        	this.gfnUpdateToDataset();

        	try
        	{
        		if (this.gfnIsNull(this.fvDivWork.form.lookup("cfnClose")))
        		{
        			// 로컬환경에서 fnClose 함수 없음 알림
        			if (this.gfnGetRunMode() == "L" || this.gfnGetRunMode() == "S")
        			{
        				this.gfnLog("해당화면에 cfnClose 함수가 없습니다. cfnClose 함수가 없으면 데이타 변경여부 체크를 하지 않습니다.");
        			}
        		} else
        		{
        			bReturn = this.fvDivWork.form.cfnClose();
        		}
        	} catch(e)
        	{
        		bReturn = true;
        		this.gfnLog("cfnClose() : " + e.message ,"error");
        	}

        	return bReturn;
        };

        /**
         * @description 넘어온 아규먼트 처리 설정
         * @param  {Object} objForm - this(현재form)
         * @return N/A
         * @example
         * this.fnSetOwnFrameArgu(this);
        **/
        this.fnSetOwnFrameArgu = function(objForm)
        {
        	if(nexacro._quickview_formurl) return;
        	//this.fvWinKey     		= this.gfnGetArgument(this.FRAME_MENUCOLUMNS.winId);
        	this.fvMenuId     		= this.gfnGetArgument(this.FRAME_MENUCOLUMNS.menuId);
        	this.fvMenuNm     		= this.gfnGetArgument(this.FRAME_MENUCOLUMNS.menuNm);
        	this.fvMenuUrl			= this.gfnGetArgument(this.FRAME_MENUCOLUMNS.menuUrl);
        	//this.fvPrgmId			= this.gfnGetArgument(this.FRAME_MENUCOLUMNS.prgmId);
        	//this.fvObjArgs   		= this.gfnGetArgument(this.FRAME_MENUCOLUMNS.param);
        	//this.fvMenuHelpFlag			= this.gfnGetArgument(this.FRAME_MENUCOLUMNS.prgmHelpFlag);
        	//this.fvPrgmNm				= this.gfnGetArgument(this.FRAME_MENUCOLUMNS.prgmNm);
        	//this.fvMenuArgs   		= this.gfnGetArgument("menuParam");
        	this.fvMenuNavi 		= this.gfnGetArgument("menuNavi");
        };

        /**
         * @description 타이틀영역의 타이틀텍스트, 공통버튼 셋팅
         * @param N/A
         * @return N/A
         * @example
         * this.fnSetOwnFrameArgu(this);
        **/
        this.fnSetDivTitle = function(vTitle)
        {
        	// QucikView 실행
        	if (nexacro._quickview_formurl) {
        		this.divTitle.form.staNavi.set_text(vTitle);
        		return;
        	}

        	// 메뉴 타이틀 입력
        	let aMenuNm = this.fvMenuNm.split('.');
        	this.divTitle.form.staTitle.set_text(aMenuNm[0]);
        	if (aMenuNm.length > 1)
        	{
        		this.divTitle.form.staTitleSub.set_visible(true);
        		this.divTitle.form.staTitleSub.set_text('('+aMenuNm[1]+')')
        	}

        	// 네비게이터 생성
        	if(this.gfnIsEmpty(this.fvMenuId)||this.gfnIsNull(this.fvMenuId)){ //메인화면일때
        		 this.divTitle.form.divNavigator.set_visible(false);
        	}else{															   //상세화면일때
        		if (this.fvMenuNavi)
        		{
        			let divNavigator = this.divTitle.form.divNavigator;
        			let compBase = divNavigator.form.staHome;
        			this.fvMenuNavi.split('.').forEach
        			(
        				function(v,i)
        				{
        					let staNavi = new Static('staNavi'+i, compBase.name+':0', 10, 0, 25);
        					//staNavi.set_cssclass('sta_WF_navigator_step');
        					staNavi.set_text(v);
        					staNavi.set_fittocontents('width');
        					divNavigator.form.addChild(staNavi.name, staNavi);
        					staNavi.show();
        					compBase = staNavi;
        				}
        			);
        			//compBase.set_cssclass(compBase.cssclass+'_S')

        			// 업무화면 물리 경로를 툴팁으로 표시 : 개발환경에서만 사용
        			if (this.gvRunMode != 'R')
        			{
        				compBase.set_tooltiptype('default,mouseleave');
        				compBase.set_cursor('help');
        				compBase.addEventHandler('onmouseenter', function(obj,e)
        				{
        					obj.set_tooltiptext(this.fvMenuUrl);
        				}, this);
        			}

        			divNavigator.form.resetScroll();
        			divNavigator.set_width(compBase.getOffsetRight());
        		}
        	}
        	// 타이틀 영역 갱신
        	this.divTitle.form.resetScroll();
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/

        //온라인매뉴얼 다운로드 및 열기
        this.divTitle_divNavigator_staHome_onclick = function(obj,e)
        {
        	//eval("debugger;");
        	if(this.dsSearch.getRowCount() == 0) {
        		this.dsSearch.addRow();
        	}

        	this.dsSearch.setColumn(0, "menuId", this.fvMenuId);
        	this.dsSearch.setColumn(0, "biznDivCd", "NFM");

        	var strSvcId    = "searchMenu";
        	var strSvcUrl   = "cmmn/sysMng/menuMng/readMenuMng.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsMenuInfo=dsMenuInfo";
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


        this.divTitle_btn00_onclick = function(obj,e)
        {
        	this.divWork.form.reload();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.divTitle.form.divNavigator.form.staHome.addEventHandler("onclick",this.divTitle_divNavigator_staHome_onclick,this);
            this.divTitle.form.btn00.addEventHandler("onclick",this.divTitle_btn00_onclick,this);
        };
        this.loadIncludeScript("frmWork.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
