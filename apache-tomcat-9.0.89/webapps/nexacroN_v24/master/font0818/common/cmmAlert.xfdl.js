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
            if (Form == this.constructor)
            {
                this._setFormPosition(450,210);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new TextArea("txtMsgContent","90","20",null,null,"20","48",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_cssclass("txt_POP_Text");
            this.addChild(obj.name, obj);

            obj = new Button("btnOk","200",null,"50","28",null,"10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgLink","20","64","53","53",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_accessibilitylabel("알림 아이콘");
            obj.set_image("url(\'theme://images/img_POP_Warning.png\')");
            obj.set_stretch("fit");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",450,210,this,function(p){});
            obj.set_mobileorientation("landscape");
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
        *  PcMdi 프로젝트
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

        /********************************************************************************
         * Form 변수선언 영역
         ********************************************************************************/
        this.fvOptSize;

        /********************************************************************************
         * Form Event 영역
         ********************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수

        	var sMsgId    = this.getOwnerFrame().paramId;
        	var paramType = this.getOwnerFrame().paramType;
        	var sContents = this.getOwnerFrame().paramContents;
        	this.fvOptSize = this.getOwnerFrame().pOptSize;

        	switch(paramType)
        	{
        		case "ERR":
        			this.imgLink.set_image("theme://images/img_POP_Error.png");
        			break;
        		case "WAN":
        			this.imgLink.set_image("theme://images/img_POP_Warning.png");
        			break;
        	}

        	this.fnMsgSetting(sContents);

        	this.btnOk.setFocus();
        };

        /********************************************************************************
         * 사용자 Function 영역
         ********************************************************************************/
        /**
        * @description 메세지설정
        */
        this.fnMsgSetting = function (sMsgContent)
        {
        	this.txtMsgContent.set_value(sMsgContent);
        };


        /********************************************************************************
         * Component Event 영역
         ********************************************************************************/
        /**
        * @description OK버튼이벤트
        */
        this.btnOk_onclick = function(obj,e)
        {
        	this.close(true);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnOk.addEventHandler("onclick",this.btnOk_onclick,this);
        };
        this.loadIncludeScript("cmmAlert.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
