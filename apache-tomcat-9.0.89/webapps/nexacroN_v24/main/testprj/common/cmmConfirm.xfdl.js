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
            obj = new Static("txtMsgContent","35.00","20",null,null,"35","90",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_Attention");
            obj.set_text("계속 진행 하시겠습니까?\r\n짓[힌 시항은 도움말을 확인하세요.");
            this.addChild(obj.name, obj);

            obj = new Div("divPopBtn","0",null,"100.00%","90",null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel","457.00","30","100","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("1");
            obj.set_text("아니오");
            obj.set_cssclass("btn_WF_No");
            this.divPopBtn.addChild(obj.name, obj);

            obj = new Button("btnOk","457.00","30","100","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Yes");
            this.divPopBtn.addChild(obj.name, obj);

            obj = new Button("btnExtend","btnCancel:3","172","100","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("4");
            obj.set_text("취소");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            obj.set_cssclass("btn_WF_No");
            this.divPopBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divPopBtn.form
            obj = new Layout("default","",0,0,this.divPopBtn.form,function(p){});
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("end");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("20");
            obj.set_spacing("0px 0px 30px 0px");
            this.divPopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Phone_screen",400,200,this,function(p){});
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
        this.fvArrArg;
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
        	this.fvArrArg    = this.getOwnerFrame().paramArg;

        	// 버튼 명칭 사용 시
        	if (!this.gfnIsNull(this.fvArrButton))
        	{
        		// 확장 버튼 사용 안할 경우 안보임 처리
        		if (this.fvArrButton.length == 3) this.divPopBtn.form.btnExtend.set_visible(true);

        		for (var i=0; i<this.fvArrButton.length; i++)
        		{
        			if (i==0) this.divPopBtn.form.btnOk.text = " " + this.fvArrButton[i] + " ";
        			if (i==1) this.divPopBtn.form.btnCancel.text = " " + this.fvArrButton[i] + " ";
        			if (i==2) this.divPopBtn.form.btnExtend.text = " " + this.fvArrButton[i] + " ";
        		}
        		this.resetScroll();

        		var nSize = 0;
        		if (this.fvArrButton.length < 3)
        		{
        			nSize = this.divPopBtn.form.btnOk.getOffsetWidth() + this.divPopBtn.form.btnCancel.getOffsetWidth() + 5;
        		} else {
        			nSize = this.divPopBtn.form.btnOk.getOffsetWidth() + this.divPopBtn.form.btnCancel.getOffsetWidth() + this.divPopBtn.form.btnExtend.getOffsetWidth() + 10;
        		}

        		this.divPopBtn.form.btnOk.move((this.width - nSize)/2, this.divPopBtn.form.btnOk.top);
        		this.resetScroll();
        	} else
        	{
        		var nSize = this.divPopBtn.form.btnOk.getOffsetWidth() + this.divPopBtn.form.btnCancel.getOffsetWidth() + 5;
        		this.divPopBtn.form.btnOk.move((this.width - nSize)/2, this.divPopBtn.form.btnOk.top);
        		this.resetScroll();
        	}

        	this.divPopBtn.form.btnOk.setFocus();
        };

        /********************************************************************************
         * 사용자 Function 영역
         ********************************************************************************/
        /**
        * @description 메세지설정
        */
        this.fnMsgSetting = function (sMsgContent)
        {
        	this.txtMsgContent.text = sMsgContent;
         	//this.txtMsgContent.set_value(sMsgContent);
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
        		var obj = {
        			result: this.fvArrRtn[0],
        			paramArg: this.fvArrArg
        		}
        		this.close(JSON.stringify(obj));
        	}
        	else {
        		var obj = {
        			result: true,
        			paramArg: this.fvArrArg
        		}
        		this.close(JSON.stringify(obj));
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
        		var obj = {
        			result: this.fvArrRtn[1],
        			paramArg: this.fvArrArg
        		}

        		this.close(JSON.stringify(obj));
        	} else
        	{
        		var obj = {
        			result: false,
        			paramArg: this.fvArrArg
        		}
        		this.close(JSON.stringify(obj));
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
            this.divPopBtn.form.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.divPopBtn.form.btnOk.addEventHandler("onclick",this.btnOk_onclick,this);
            this.divPopBtn.form.btnExtend.addEventHandler("onclick",this.btnExtend_onclick,this);
        };
        this.loadIncludeScript("cmmConfirm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
