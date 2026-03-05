(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_Work");
            this.set_scrollbartype("none none");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1530,970);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divWork","0","10",null,null,"0","20",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Frame");
            obj.set_text("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divWork
            obj = new Layout("default","",0,0,this.divWork.form,function(p){});
            this.divWork.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1530,970,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_scrollbartype("none none");
                p.set_scrolltype("none");

                p.divWork.set_taborder("0");
                p.divWork.set_cssclass("div_WF_Frame");
                p.divWork.set_text("");
                p.divWork.set_maxheight("");
                p.divWork.set_maxwidth("");
                p.divWork.move("0","10",null,null,"0","20");
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Phone_screen","Phone_screen",390,618,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divWork.move("0","0",null,null,"0","20");
            	}
            );
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frm_Work.xfdl", function() {
        /**
        *  PcMdi 프로젝트
        *  @FileName 	frmWork.xfdl
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

        this.fvWinKey   		= "";			// WinKey
        this.fvMenuId   		= "";			// 메뉴 ID
        this.fvMenuNm   		= "";			// 메뉴 Name
        this.fvMenuUrl  		= "";			// 메뉴 URL
        this.fvPrgmId   		= "";			// 프로그램 ID
        this.fvMenuArgs 		= "";			// gfnOpenMenu에서 전달한 Argument
        this.fvObjArgs 			= "";			// 메뉴에서 등록한 Argument
        this.fvMenuHelpFlag 	= "";			// 메뉴 매뉴얼 작성 여부
        this.fvPrgmNm 			= "";			// 프로그램 이름
        this.fvActNm			= "";

        this.fvButtonAuth = "";			// 공통 버튼 권한
        this.fvSearchScopeCd = "";		// 조회범위코드(SM13)
        this.fvDivWork = this.divWork;	// 업무 화면 DIV

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	// 넘어온 아규먼트 셋팅
        	this.fnSetOwnFrameArgu(this);

        	// 타이틀영역 셋팅
        	//this.fnSetDivTitle();

        	// form 로딩시 화면에 표시할 page URL 설정
        	this.fvDivWork.form.set_url(this.fvMenuUrl);
        };

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

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnWorkFrameClose = function()
        {
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
        	this.fvActNm			= this.gfnGetArgument("ACT_NM");
        };

        this.fnSetDivTitle = function(vTitle)
        {
        	if(this.objApp.screenid == 'Desktop_screen') {
        		this.staTitle.set_text(this.gfnTrim(this.fvMenuNavi)+ " ");
        	} else {
        		this.staTitle.set_text(this.gfnTrim(this.fvMenuNavi)+ " ");
        	}

        	this.resetScroll();
        	//this.frm_Work.form.resetScroll();

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.divWork.addEventHandler("onhscroll",this.divWork_onhscroll,this);
        };
        this.loadIncludeScript("frm_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
