(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work_workcommon");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,87);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staHome","0","24","45","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("홈");
            obj.set_cssclass("sta_WF_Home");
            this.addChild(obj.name, obj);

            obj = new Static("staNavi1","staHome:0","24","66","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("민원");
            obj.set_cssclass("sta_WF_Depnext");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            obj.set_accessibilityrole("link");
            this.addChild(obj.name, obj);

            obj = new Static("staNavi2","staNavi1:0","24","66","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("민원");
            obj.set_cssclass("sta_WF_Depnext");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            obj.set_accessibilityrole("link");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,mobile_small",888,87,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmNavi.xfdl", function() {
        /**
        *  KRDS
        *  @FileName 	frmnNavi.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2025/03/24
        *  @Description
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2025/03/24			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
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

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.staNavi1_onclick = function(obj,e)
        {
        	this.objApp.mainframe.ChildFrame00.form.fnOpen(obj.menuid);
        };

        this.staNavi2_onclick = function(obj,e)
        {
        	this.objApp.mainframe.ChildFrame00.form.fnOpen(obj.menuid);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.staNavi1.addEventHandler("onclick",this.staNavi1_onclick,this);
            this.staNavi2.addEventHandler("onclick",this.staNavi2_onclick,this);
        };
        this.loadIncludeScript("frmNavi.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
