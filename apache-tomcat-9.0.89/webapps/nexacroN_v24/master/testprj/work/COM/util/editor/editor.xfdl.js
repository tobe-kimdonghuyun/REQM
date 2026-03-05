(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("editor");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(702,200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("web00","0","0","100%","200",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",702,200,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("editor.xfdl", function() {
        /**
        *  PcMdi 프로젝트
        *  @FileName 	editor.xfdl
        *  @Creator 	조규완
        *  @CreateDate 	2024/06/19
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
        this.callback;
        this.init = false;
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.readData = function(sCallback, thisObj) {
        	this.callback = sCallback;
        	this.web00.callMethod("readData", sCallback, thisObj);
        }

        this.writeData = function(sData) {
        	this.web00.callMethod("writeData", JSON.stringify(sData));
        }

        this.fnInit = function(obj) {
        	this.web00.set_height(obj.height + 100);
        	var url = this.objApp.objSrv.url+ "common/webEditorView.do";
        	this.gfnWebBrowserSendPost(this, this.web00, url, "params="+JSON.stringify(obj));
        }

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.web00_onloadcompleted = function(obj,e)
        {
        	this.parent.parent.parent.parent.parent.parent.tranInit();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.web00.addEventHandler("onloadcompleted",this.web00_onloadcompleted,this);
        };
        this.loadIncludeScript("editor.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
