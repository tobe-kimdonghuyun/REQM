(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("samplePopup");
            this.set_titletext("팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btnPopup","30","30",null,"60","51.04%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("모달팝업");
            this.addChild(obj.name, obj);

            obj = new Button("btnPopup00","btnPopup:10","30",null,"60","30",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("모달리스 팝업");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",480,768,this,function(p){});
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("samplePopup.xfdl", function() {
        /**
        *  Mobile 프로젝트
        *  @FileName 	samplePopup.xfdl
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
        	this.gfnFormOnLoadM(obj); //필수함수
        };

        this.fnClose = function()
        {
            trace("fnClose 호출");
        }
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
         this.fnPopupCallback = function(strId, strVal)
         {
        	if(this.gfnIsNull(strVal)){
        		trace("strId : " + strId + " objVal : " + this._variant);
        	}else{
        		trace(" strId : " + strId + " strVal : " + strVal);
        	}
         };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        /**
        * btnPopup_onclick : modal popup open
        * @param  : obj		   - [object]Button
        * @param  : e		   - [string]ClickEventInfo
        * @return : N/A
        */
        this.btnPopup_onclick = function(obj,e)
        {
        	var oArg = {paramCode:"abcd", paramNum:12345};

        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopupM( "popup","design::Template/Temp19P.xfdl",oArg,sPopupCallBack);
        };
        /**
        * btnPopup00_onclick : modaless popup open
        * @param  : obj		   - [object]Button
        * @param  : e		   - [string]ClickEventInfo
        * @return : N/A
        */
        this.btnPopup00_onclick = function(obj,e)
        {
            //모바일앱이면
            if (system.navigatorname =="nexacro" && this.objApp.gvOs.indexOf("WINDOWS") == -1)
            {
                alert("현재 브라우저에서는 지원하지 않습니다");
                return;
            }

        	var oArg = {paramCode:"abcd", paramNum:12345};
        	var oOption = {popuptype:"modeless"};
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopupM( "popup","design::Template/Temp19P.xfdl",oArg,sPopupCallBack,oOption);
        };




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnPopup.addEventHandler("onclick",this.btnPopup_onclick,this);
            this.btnPopup00.addEventHandler("onclick",this.btnPopup00_onclick,this);
        };
        this.loadIncludeScript("samplePopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
