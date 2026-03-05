(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmToast");
            this.set_titletext("토스트 메세지");
            if (Form == this.constructor)
            {
                this._setFormPosition(720,118);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divToast","10","10",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_ToastInfor");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staToastTitle","28","18","160","26",null,null,null,null,null,null,this.divToast.form);
            obj.set_taborder("0");
            obj.set_text("Information");
            obj.set_cssclass("sta_POP_InforTxt");
            this.divToast.addChild(obj.name, obj);

            obj = new Static("staToast","60","staToastTitle:8",null,"20","80",null,null,null,null,null,this.divToast.form);
            obj.set_taborder("1");
            obj.set_text("토스트 메세지입니다.");
            obj.set_cssclass("sta_WF_Toast");
            obj.set_fittocontents("width");
            this.divToast.addChild(obj.name, obj);

            obj = new Static("Static05_00","12","138","720","118",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_POP_Infor");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","28","154","300","26",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("메시지 타이틀");
            obj.set_cssclass("sta_POP_InforTxt");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea05","60","Static05:8","656","52",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("output");
            obj.set_value("콘텐츠 내 알럿은 최대 2줄 이내로 작성합니다  콘텐츠 내 알럿은 최대 2줄 이내로 작성합니다  콘텐츠 내 알럿은 최대 2줄 이내로 작성합니다");
            obj.set_scrolltype("none");
            obj.set_scrollbartype("none none");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divToast.form
            obj = new Layout("default","",0,0,this.divToast.form,function(p){});
            this.divToast.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",720,118,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmToast.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	cmmToast.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2024/03/29
        *  @Description 	화면설명
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/03/29			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {

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
        this.divToast_btnClose_onclick = function(obj,e)
        {
        	this.divToast.set_width(0);
        	this.divToast.set_height(0);
        	this.divToast.set_visible(false);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("cmmToast.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
