(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmAlert");
            this.set_titletext("알림창");
            this.set_borderRadius("10px");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,300);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btnOk","30","200","340",null,null,"40",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Full");
            this.addChild(obj.name, obj);

            obj = new Static("staMsgContent","30","60",null,"100","30",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Static00");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",400,300,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmAlert.xfdl", function() {
        /**
        *  Mobile 프로젝트
        *  @FileName 	cmmAlert.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2023/10/30
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2023/10/30			TOBESOFT					최초생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoadM(this); //초기화[필수]

        	var sContents = this.getOwnerFrame().paramContents;
        	this.fnMsgSetting(sContents);

        	this.webBrowserVisible(this.opener, false);
        };

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

        /************************************************************************************************
         * CALLBACK 콜백 처리부분
         ************************************************************************************************/

         /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
        * @description 메세지설정
        */
         this.fnMsgSetting = function (sMsgContent)
         {
        	this.staMsgContent.set_text(sMsgContent);
         };

         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
        * @description OK버튼이벤트
        */
        this.btnOk_onclick = function(obj,e)
        {
        	this.close(true);
        };


        this.cmmAlert_onbeforeclose = function(obj,e)
        {
        	this.webBrowserVisible(this.opener, true);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onbeforeclose",this.cmmAlert_onbeforeclose,this);
            this.btnOk.addEventHandler("onclick",this.btnOk_onclick,this);
        };
        this.loadIncludeScript("cmmAlert.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
