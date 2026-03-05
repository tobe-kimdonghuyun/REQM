(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmConfirm");
            this.set_titletext("확인창");
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

            obj = new Button("btnOk","139","172","50","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel","btnOk:3","172","50","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("취소");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgLink","20","64","55","55",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_image("url(\'theme://images/img_POP_Confirm.png\')");
            obj.set_text("");
            obj.set_accessibilitylabel("알림 아이콘");
            obj.set_stretch("fit");
            this.addChild(obj.name, obj);

            obj = new Button("btnExtend","btnCancel:3","172","50","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("취소");
            obj.set_fittocontents("width");
            obj.set_visible("false");
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
        this.registerScript("cmmConfirm.xfdl", function() {
        /**
        *  PcMdi 프로젝트
        *  @FileName 	cmmConfirm.xfdl
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
        this.fvArrButton;
        this.fvArrRtn;
        this.fvOptSize;

        /********************************************************************************
         * Form Event 영역
         ********************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수

        	this.fvOptSize = this.getOwnerFrame().pOptSize;

        	var sContents = this.getOwnerFrame().paramContents;

        	this.fnMsgSetting(sContents);

        	this.fvArrButton = this.getOwnerFrame().paramButton;
        	this.fvArrRtn    = this.getOwnerFrame().paramRtn;

        	// 버튼 명칭 사용 시
        	if (!this.gfnIsNull(this.fvArrButton))
        	{
        		// 확장 버튼 사용 안할 경우 안보임 처리
        		if (this.fvArrButton.length == 3) this.btnExtend.set_visible(true);

        		for (var i=0; i<this.fvArrButton.length; i++)
        		{
        			if (i==0) this.btnOk.set_text(" " + this.fvArrButton[i] + " ");
        			if (i==1) this.btnCancel.set_text(" " + this.fvArrButton[i] + " ");
        			if (i==2) this.btnExtend.set_text(" " + this.fvArrButton[i] + " ");
        		}
        		this.resetScroll();

        		var nSize = 0;
        		if (this.fvArrButton.length < 3)
        		{
        			nSize = this.btnOk.getOffsetWidth() + this.btnCancel.getOffsetWidth() + 5;
        		} else {
        			nSize = this.btnOk.getOffsetWidth() + this.btnCancel.getOffsetWidth() + this.btnExtend.getOffsetWidth() + 10;
        		}

        		this.btnOk.move((this.width - nSize)/2, this.btnOk.top);
        		this.resetScroll();
        	} else
        	{
        		var nSize = this.btnOk.getOffsetWidth() + this.btnCancel.getOffsetWidth() + 5;
        		this.btnOk.move((this.width - nSize)/2, this.btnOk.top);
        		this.resetScroll();
        	}

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
        * @description 확인 버튼
        */
        this.btnOk_onclick = function(obj,e)
        {
        	// 버튼 명칭 사용 시
        	if (!this.gfnIsNull(this.fvArrButton))
        	{
        		this.close(this.fvArrRtn[0]);
        	}
        	else {
        		this.close(true);
        	}
        };

        /**
        * @description 취소 버튼
        */
        this.btnCancel_onclick = function(obj,e)
        {
        	// 버튼 명칭 사용 시
        	if (!this.gfnIsNull(this.fvArrButton))
        	{
        		this.close(this.fvArrRtn[1]);
        	} else
        	{
        		this.close(false);
        	}
        };

        /**
        * @description 확장 버튼
        */
        this.btnExtend_onclick = function(obj,e)
        {
        	// 버튼 명칭 사용 시
        	this.close(this.fvArrRtn[2]);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnOk.addEventHandler("onclick",this.btnOk_onclick,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.btnExtend.addEventHandler("onclick",this.btnExtend_onclick,this);
        };
        this.loadIncludeScript("cmmConfirm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
