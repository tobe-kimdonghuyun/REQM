(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM012P01");
            this.set_titletext("확인창");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,300);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("txtMsgContent","35.00","20",null,null,"35","90",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_Attention");
            obj.set_text("계속 진행 하시겠습니까?\r\n짓[힌 시항은 도움말을 확인하세요.");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Div("divPopBtn","0",null,"100.00%","90",null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel","457.00","30","100","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_No");
            this.divPopBtn.addChild(obj.name, obj);

            obj = new Button("btnOk","457.00","30","100","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("0");
            obj.set_text("발송완료");
            obj.set_cssclass("btn_WF_Yes");
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
            obj = new Layout("default","Desktop_screen,Phone_screen",600,300,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("COM012P01.xfdl", function() {
        /**
        *  PcMdi 프로젝트
        *  @FileName 	COM012P01.xfdl
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
        this.objApp = nexacro.getApplication();

        /********************************************************************************
         * Form Event 영역
         ********************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수

        	var sContents = this.getOwnerFrame().paramContents;
        	if(this.gfnIsNull(sContents) != true) {
        		this.txtMsgContent.text = sContents;
        	}
        };

        /********************************************************************************
         * 사용자 Function 영역
         ********************************************************************************/

        /********************************************************************************
         * Component Event 영역
         ********************************************************************************/
        /**
        * @description 확인 버튼
        */
        this.btnOk_onclick = function(obj,e)
        {
        	var obj = { result: "Y"
        	          };
        	this.close(JSON.stringify(obj));
        };

        /**
        * @description 취소 버튼
        */
        this.btnCancel_onclick = function(obj,e)
        {
        	var obj = { result: "N"
        	          };
        	this.close(JSON.stringify(obj));
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divPopBtn.form.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.divPopBtn.form.btnOk.addEventHandler("onclick",this.btnOk_onclick,this);
        };
        this.loadIncludeScript("COM012P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
