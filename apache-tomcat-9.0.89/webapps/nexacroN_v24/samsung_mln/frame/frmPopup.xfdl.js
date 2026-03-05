(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmPopup");
            this.set_titletext("팝업프레임");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divTitle","0","0",null,"55","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("divTitle");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","30","0",null,"50","0",null,null,null,null,null,this.divTitle.form);
            obj.set_taborder("0");
            obj.set_text("팝업타이틀영역");
            obj.set_cssclass("sta_WF_PopTit");
            this.divTitle.addChild(obj.name, obj);

            obj = new Static("sta01","0",null,null,"1","0","0",null,null,null,null,this.divTitle.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_TF_Line");
            this.divTitle.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"0","50","50","20",null,null,null,null,null,this.divTitle.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_TF_CloseB");
            this.divTitle.addChild(obj.name, obj);

            obj = new Div("divWork","0","55",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("divWork");
            this.addChild(obj.name, obj);

            obj = new Div("divWork2","0","0",null,null,"0","0",null,null,null,null,this.divWork.form);
            obj.set_taborder("0");
            this.divWork.addChild(obj.name, obj);

            obj = new Div("divDetailTitle","490","0",null,"55","-490",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("divDetailTitle");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","30","0",null,"55","75",null,null,null,null,null,this.divDetailTitle.form);
            obj.set_taborder("0");
            obj.set_text("팝업 상세타이틀영역");
            obj.set_cssclass("sta_TF_DTitle");
            this.divDetailTitle.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"0","55","55","20",null,null,null,null,null,this.divDetailTitle.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_TF_Close");
            this.divDetailTitle.addChild(obj.name, obj);

            obj = new Static("sta01","0",null,null,"1","0","0",null,null,null,null,this.divDetailTitle.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_TF_Line");
            this.divDetailTitle.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","54",null,"1","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_ConLine");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTitle.form
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divWork.form.divWork2.form
            obj = new Layout("default","",0,0,this.divWork.form.divWork2.form,function(p){});
            this.divWork.form.divWork2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divWork.form
            obj = new Layout("default","",0,0,this.divWork.form,function(p){});
            this.divWork.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetailTitle.form
            obj = new Layout("default","",0,0,this.divDetailTitle.form,function(p){});
            this.divDetailTitle.form.addLayout(obj.name, obj);

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
        this.registerScript("frmPopup.xfdl", function() {
        /**
        *  Mobile 프로젝트
        *  @FileName 	frmPopup.xfdl
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
         this.objApp = nexacro.getApplication();

         /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        /**
         * @description 화면 onload시 처리내역(필수)
        */
        this.frmPopup_onload = function(obj,e)
        {
        	//필수함수
        	this.gfnFormOnLoadM(obj);
        	this.objApp.gvPopup = this;
        	var sUrl = this.parent.oCFInfo.sUrl;
        	var bIsDetail = this.parent.oCFInfo.bIsDetail;
        	var sTitleText = this.parent.oCFInfo.sTitleText;

        	this.divDetailTitle.set_left(0);
        	this.divDetailTitle.set_right(0);

        	if(bIsDetail)
        	{
        		this.divDetailTitle.set_visible(true);
        		this.divDetailTitle.form.sta00.set_text(sTitleText);
        		this.divTitle.set_visible(false);
        	}else{
        		this.divDetailTitle.set_visible(false);
        		this.divTitle.set_visible(true);
        		this.divTitle.form.sta00.set_text(sTitleText);
        	}

        	this.divWork.form.divWork2.set_url(sUrl);

        	this.webBrowserVisible(this.opener, false);
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/

        /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/


         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/


        this.btnClose_onclick = function(obj,e)
        {
        	this.close();
        };


        this.frmPopup_ondevicebuttonup = function(obj,e)
        {
        	this.objApp.gvBase.fnClosePopupByDeviceButton(this);
        };
        this.frmPopup_onbeforeclose = function(obj,e)
        {
        	this.webBrowserVisible(this.opener, true);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frmPopup_onload,this);
            this.addEventHandler("ondevicebuttonup",this.frmPopup_ondevicebuttonup,this);
            this.addEventHandler("onbeforeclose",this.frmPopup_onbeforeclose,this);
            this.divTitle.form.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.divDetailTitle.form.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
        };
        this.loadIncludeScript("frmPopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
