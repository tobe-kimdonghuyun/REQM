(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmMain");
            this.set_titletext("Main(Home) Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1240,835);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1240,835,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmMain.xfdl", function() {
        /**
         *  @FileName 	frmMain.xfdl
         *  @Creator 	박준하
         *  @CreateDate 2023/09/18
         *  @Desction
         ************** 소스 수정 이력 ***********************************************
         * Date					Modifier					Description
         *******************************************************************************
         * 2023/09/18			박준하						최초생성
         *******************************************************************************
        **/

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        /**
         * @description Form 로드 완료
        **/
        this.form_onload = function(obj,e)
        {//trace(obj.name, e.eventid);
        	app.gvFrmMain = obj.parent;
        	app.gvFrmMain.org_right = Number(obj.parent.right);
        	obj.parent._mdi_root = true;

        	// todo 메인화면 분기처리
        	obj.parent.arguments = {};
        	var authrtId = app.gdsUserInfo.getColumn(0, 'athry');

        	if (authrtId == 'MNGMT_PIC' || authrtId == 'MNGMT_DPCHF' || authrtId == 'MNGMT_TMHDR' || authrtId == 'MNGMT_BIZ_PIC' || authrtId == 'FXTRM_RPT_PIC')
        	{
        		//경영 & 정기보고
        		obj.parent.arguments[this.FRAME_MENUCOLUMNS.menuUrl] = "common::cmmMainMngmtPic.xfdl";

        		if(authrtId == 'MNGMT_PIC'){
        			obj.parent.arguments[this.FRAME_MENUCOLUMNS.menuNm] = "메인화면.경영담당자";
        		}else if(authrtId == 'MNGMT_DPCHF'){
        			obj.parent.arguments[this.FRAME_MENUCOLUMNS.menuNm] = "메인화면.경영과장";
        		}else if(authrtId == 'MNGMT_TMHDR'){
        			obj.parent.arguments[this.FRAME_MENUCOLUMNS.menuNm] = "메인화면.경영팀장";
        		}else if(authrtId == 'MNGMT_BIZ_PIC'){
        			obj.parent.arguments[this.FRAME_MENUCOLUMNS.menuNm] = "메인화면.경영사업담당자";
        		}else if (authrtId == 'FXTRM_RPT_PIC') {
        			obj.parent.arguments[this.FRAME_MENUCOLUMNS.menuNm] = "메인화면.정기보고담당자";
        		}
        	}else if (authrtId == 'RSRC_BIZ_PIC' || authrtId == 'RSRC_TKCG' || authrtId == 'RSRC_TMHDR' || authrtId == 'RSRC_DPCHF' || authrtId == 'RSRC_UNTY_USER' || authrtId == 'NTFRT_MNOFF_MNGR' || authrtId == 'RSRC_MNGR') {
        		//자원
        		obj.parent.arguments[this.FRAME_MENUCOLUMNS.menuUrl] = "common::cmmMainRsrcPic.xfdl";

        		if(authrtId == 'RSRC_BIZ_PIC'){
        			obj.parent.arguments[this.FRAME_MENUCOLUMNS.menuNm] = "메인화면.자원사업담당자";
        		}else if(authrtId == 'RSRC_TKCG'){
        			obj.parent.arguments[this.FRAME_MENUCOLUMNS.menuNm] = "메인화면.자원담당자";
        		}else if(authrtId == 'RSRC_TMHDR'){
        			obj.parent.arguments[this.FRAME_MENUCOLUMNS.menuNm] = "메인화면.자원팀장";
        		}else if(authrtId == 'RSRC_DPCHF'){
        			obj.parent.arguments[this.FRAME_MENUCOLUMNS.menuNm] = "메인화면.자원과장";
        		}else if (authrtId == 'RSRC_UNTY_USER') {
        			obj.parent.arguments[this.FRAME_MENUCOLUMNS.menuNm] = "메인화면.자원통합사용자";
        		}else if (authrtId == 'NTFRT_MNOFF_MNGR') {
        			obj.parent.arguments[this.FRAME_MENUCOLUMNS.menuNm] = "메인화면.자원 국유림관리소 관리자";
        		}else if (authrtId == 'RSRC_MNGR') {
        			obj.parent.arguments[this.FRAME_MENUCOLUMNS.menuNm] = "메인화면.자원관리자";
        		}
        	}else if (authrtId == 'ERCNT' || authrtId == 'FRRD_ERCNT' || authrtId == 'FRRD' ) {
        		//토목  cmmMainBkUp
        		obj.parent.arguments[this.FRAME_MENUCOLUMNS.menuUrl] = "common::cmmMainEnwrkPic.xfdl";

        		if(authrtId == 'ERCNT'){
        			obj.parent.arguments[this.FRAME_MENUCOLUMNS.menuNm] = "메인화면.사방담당자";
        		}else if(authrtId == 'FRRD_ERCNT'){
        			obj.parent.arguments[this.FRAME_MENUCOLUMNS.menuNm] = "메인화면.토목담당자";
        		}else if(authrtId == 'FRRD'){
        			obj.parent.arguments[this.FRAME_MENUCOLUMNS.menuNm] = "메인화면.임도담당자";
        		}
        	}else{
        		//obj.parent.arguments[this.FRAME_MENUCOLUMNS.menuUrl] = "common::cmmMainMngr.xfdl";
        		obj.parent.arguments[this.FRAME_MENUCOLUMNS.menuNm] = "메인화면.본청관리자";
        	}



        	obj.go('frame::frmWork.xfdl');
        };

        /**
         * @description Form 크기 변경
        **/
        this.form_onsize = function(obj,e)
        {//trace(obj.name, e.eventid);
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


        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.addEventHandler("onvscroll",this.frmMain_onvscroll,this);
        };
        this.loadIncludeScript("frmMain.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
