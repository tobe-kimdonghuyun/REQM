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
                this._setFormPosition(1070,808);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divTitle","20","0",null,"52","53",null,"995",null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Div("divWork","20","52",null,null,"0","20","1048",null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_Frame");
            this.addChild(obj.name, obj);

            obj = new Button("btnFull","divTitle:3","12","30","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.getSetter("uStatus").set("normal");
            obj.set_cssclass("btn_WF_Full");
            this.addChild(obj.name, obj);

            obj = new Static("staTerm","btnFull:0","19","20","21",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTitle
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divWork
            obj = new Layout("default","",0,0,this.divWork.form,function(p){});
            this.divWork.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","desktop",1070,808,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
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
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();

        this.fvWinKey   = "";			// WinKey
        this.fvMenuUrl  = "";			// 메뉴 URL
        this.fvMenuNm   = "";			// 메뉴 Name
        this.fvMenuId   = "";			// 메뉴 ID
        this.fvMenuArgs = "";			// 메뉴에서 등록한 Argument
        this.fvObjArgs = "";			// gfnOpenMenu에서 전달한 Argument
        this.fvButtonAuthorYn = "";		// 공통 버튼 권한
        this.fvSearchScopeCd = "";		// 조회범위코드(SM13)
        this.fvDivWork = this.divWork;	// 업무 화면 DIV

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        /**
         * @description 화면 오픈
         */
        this.form_onload = function(obj,e)
        {
        	// QuickView 실행
        	if(nexacro._quickview_formurl) {
        		this.btnFull.set_visible(false);
        		this.btnFull.set_width(0);
        		this.resetScroll();
        		this.fvDivWork.form.set_url(nexacro._quickview_formurl);
        		this.divTitle.form.fnSetAuthBtn("1111000");

        		// title 처리
        		var pThis = this
        		nexacro._OnceCallbackTimer.callonce(pThis, function () {
        			pThis.fnSetDivTitle("[QUICKVIEW]\t" + pThis.fvDivWork.form.titletext);
        		}, 1000);
        		return;
        	}

        	// 넘어온 아규먼트 셋팅
        	this.fnSetOwnFrameArgu(this);

        	// 타이틀영역 셋팅
        	this.fnSetDivTitle();


        	//조회권한 가져오기
        	this.fvSearchScopeCd = this.gfnGetSearchScopeCd(this.fvMenuId);

        	// form로딩시 화면에 표시할 page URL 설정
        	this.fvDivWork.form.set_url(this.fvMenuUrl);
        	//this.form_onsize();

        	//setMenuOpenLog
        	this.fnMenuOpenLog();
        };

        /**
         * @description 화면 닫기
         */
        this.form_onclose = function(obj, e)
        {
        	if(nexacro._quickview_formurl) return;
        	try
        	{
        		// WorkFrame 화면일때만 창 닫기
        		if (e.fromobject == "[object Form]" && e.fromobject.name == "frmWork")
        		{
        			var sWinId = this.getOwnerFrame().name;
        			if (this.objApp.gvFrmMdi.form.bClose)
        			{
        				this.objApp.gvFrmMdi.form.bClose = false;
        				this.objApp.gvFrmMdi.form.fnTabOnClose(sWinId);
        				this.fvDivWork.set_url("");
        			}
        		}
        	}
        	catch(e)
        	{

        	}
        }

        this.form_onsize = function(obj,e)
        {
        	this.divWork.set_right(0);
        };
        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        //메뉴오픈로그
        this.fnMenuOpenLog = function ()
        {
        	if(nexacro._quickview_formurl) return;
        	//this.gfnSaveMenuOpenLog("MENU", this.fvPrgmId, this.fvMenuId);
        };
        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        /**
         * @description workFrame close 시 처리
         * @param {boolean} bCheck 화면 닫을때 cfnClose 함수 체크할지 여부
         * @return {boolean} bReturn true면 화면닫기, false면 변경된 데이터 존재 확인창
        */
        this.fnWorkFrameClose = function(bCheck)
        {
        	if(nexacro._quickview_formurl) return;

        	var bReturn = true;

        	if(!bCheck) return bReturn;

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
         */
        this.fnSetOwnFrameArgu = function(objForm)
        {
        	if(nexacro._quickview_formurl) return;
        	this.fvWinKey     		= this.gfnGetArgument(this.FRAME_MENUCOLUMNS.winId);
        	this.fvMenuId     		= this.gfnGetArgument(this.FRAME_MENUCOLUMNS.menuId);
        	this.fvMenuNm     		= this.gfnGetArgument(this.FRAME_MENUCOLUMNS.menuNm);
        	this.fvMenuUrl			= this.gfnGetArgument(this.FRAME_MENUCOLUMNS.menuUrl);
        	this.fvPrgmId			= this.gfnGetArgument(this.FRAME_MENUCOLUMNS.prgmId);
        	this.fvMenuArgs   		= this.gfnGetArgument(this.FRAME_MENUCOLUMNS.objParam);
        	this.fvMenuNavi 		= this.gfnGetArgument("menuNavi");
        	this.fvSearchScopeCd	= this.gfnGetArgument("searchScopeCd");
        };

        /**
         * @description 타이틀영역의 타이틀텍스트, 공통버튼 셋팅
         * @param N/A
         * @return N/A
         * @example
         * this.fnSetOwnFrameArgu(this);
         */
        this.fnSetDivTitle = function(vTitle)
        {
        	// QucikView 실행
        	if(nexacro._quickview_formurl) {
        		this.divTitle.form.staNavi.set_text(vTitle + " ");
        		return;
        	}
        	//타이틀 세팅
        	this.divTitle.form.staNavi.set_text(this.gfnTrim(this.fvMenuNavi) + " ");
        	this.divTitle.form.resetScroll();

        	// 타이틀 콤보만들기
        	var nTitleWidth = 0;
        	var nTitleHeight = 0;
        	nTitleWidth = (this.divTitle.form.staNavi.getOffsetWidth() / this.gfnGetTextSize(this.fvMenuNavi + " ")[0]) * this.gfnGetTextSize(this.fvMenuNm + " ")[0];
        	nTitleHeight = this.divTitle.form.staNavi.getOffsetHeight();

        	this.divTitle.form.staNull.set_width(nexacro.ceil(nTitleWidth));
        	this.divTitle.form.staNull.set_height(nTitleHeight);
        	this.divTitle.form.staNull.set_left("staNavi:-" + nTitleWidth + "px");
        	this.divTitle.form.staNull.set_top("staNavi:-" + nTitleHeight + "px");

        	this.divTitle.form.cboMenu.set_width(nexacro.ceil(nTitleWidth));
        	this.divTitle.form.cboMenu.set_height(nTitleHeight);
        	this.divTitle.form.cboMenu.set_left("staNavi:-" + nTitleWidth + "px");
        	this.divTitle.form.cboMenu.set_top("staNavi:-" + nTitleHeight + "px");



        	// 공통 버튼 사용유무
        	if(this.objApp.gvIsComBtnUse)
        	{
        		// 공통 버튼권한세팅
        		var sAuth = this.gfnGetAuth(this.fvMenuId);  //권한조회
        		this.divTitle.form.fnSetAuthBtn(sAuth);
        	}
        };

        this.fnSetStatus = function ()
        {

        	var sStatus = this.btnFull.uStatus;
        	if( this.gfnIsNull(sStatus)) sStatus = "normal";

        	var sGoStatus = (sStatus=="normal"?"max":"normal");
        	var sFullText = (sGoStatus=="normal"?"btn_WF_Full":"btn_WF_Normal");

        	this.btnFull.uStatus = sGoStatus;
        	this.btnFull.set_cssclass(sFullText);

        	return sGoStatus;
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.btnFull_onclick = function(obj,e)
        {
        	var sGoStatus = this.fnSetStatus();
        	this.gfnSetWorkMode(sGoStatus);

        	this.resetScroll();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.btnFull.addEventHandler("onclick",this.btnFull_onclick,this);
        };
        this.loadIncludeScript("frmWork.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
