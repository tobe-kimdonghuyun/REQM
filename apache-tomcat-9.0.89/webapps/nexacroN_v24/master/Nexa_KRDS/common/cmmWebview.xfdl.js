(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmWebview");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("web00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.getSetter("taborder").set("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",888,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmWebview.xfdl", function() {
        /**
        *  devPro
        *  @FileName 	cmmWebview.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2024/03/11
        *  @Description
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/03/11			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();

        this.fvWinKey   		= "";			// WinKey
        this.fvMenuId   		= "";			// 메뉴 ID
        this.fvMenuNm   		= "";			// 메뉴 Name
        this.fvMenuUrl  		= "";			// 메뉴 URL
        this.fvPrgmId   		= "";			// 프로그램 ID
        this.fvMenuArgs 		= "";			// gfnOpenMenu에서 전달한 Argument
        this.fvObjArgs 			= "";			// 메뉴에서 등록한 Argument
        this.fvMenuHelpFlag 	= "";			// 메뉴 매뉴얼 작성 여부
        this.fvPrgmNm 			= "";			// 프로그램 이름
        this.fvParam			= "";			// 메뉴 파라미터
        this.fvMenuFlagCd		= "";			// 메뉴 구분

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.cmmWebview_onload = function(obj,e)
        {
        	// 넘어온 아규먼트 셋팅
        	this.fnSetOwnFrameArgu(this);

        };


        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
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
        	this.fvObjArgs   		= this.gfnGetArgument(this.FRAME_MENUCOLUMNS.param);
        	this.fvMenuHelpFlag		= this.gfnGetArgument(this.FRAME_MENUCOLUMNS.prgmHelpFlag);
        	this.fvPrgmNm			= this.gfnGetArgument(this.FRAME_MENUCOLUMNS.prgmNm);
        	this.fvMenuArgs   		= this.gfnGetArgument("menuParam");
        	this.fvMenuNavi 		= this.gfnGetArgument("menuNavi");
        	this.fvSearchScopeCd	= this.gfnGetArgument("searchScopeCd");
        	this.fvParam 			= this.gfnGetArgument(this.FRAME_MENUCOLUMNS.param);
        	this.fvMenuFlagCd 		= this.gfnGetArgument(this.FRAME_MENUCOLUMNS.menuFlagCd);

        	this.fnSetUrl();
        };

        /**
         * @description workFrame close 시 처리
         * @param N/A
         * @return N/A
        */
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

        this.fnSetUrl = function()
        {
        	if(!this.gfnIsNull(this.fvParam))
        	{
        		this.web00.set_url(this.fvParam);
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.cmmWebview_onload,this);
        };
        this.loadIncludeScript("cmmWebview.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
