(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sddd");
            this.set_titletext("Mobile Tob Menu");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divButton","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("btnEXPERIEN","682","660","1000","56",null,null,null,null,null,null,this.divButton.form);
            obj.set_taborder("6");
            obj.set_text("체험하기");
            obj.set_flexgrow("1");
            obj.set_cssclass("btn_TF_MenuItem03");
            obj.getSetter("uType").set("app");
            this.divButton.addChild(obj.name, obj);

            obj = new Button("btnINQUIRY","833","660","1000","56",null,null,null,null,null,null,this.divButton.form);
            obj.set_taborder("7");
            obj.set_text("문의하기");
            obj.set_flexgrow("1");
            obj.set_cssclass("btn_TF_MenuItem03");
            obj.getSetter("uType").set("app");
            this.divButton.addChild(obj.name, obj);

            obj = new Panel("Panel01","0",null,null,"162","0","0",null,null,null,null,this.divButton.form);
            obj.set_taborder("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("20px");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnEXPERIEN\"/><PanelItem id=\"PanelItem01\" componentid=\"btnINQUIRY\"/></Contents>");
            this.divButton.addChild(obj.name, obj);

            obj = new Button("btnLogo","16","12","143","40",null,null,null,null,null,null,this.divButton.form);
            obj.set_taborder("0");
            obj.set_visible("true");
            obj.set_cssclass("btn_TF_Logo");
            this.divButton.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"12","40","40","16",null,null,null,null,null,this.divButton.form);
            obj.set_taborder("1");
            obj.set_flexgrow("1");
            obj.set_visible("true");
            obj.set_cssclass("btn_TF_Close");
            this.divButton.addChild(obj.name, obj);

            obj = new Button("btnHOME","480","388","1000","56",null,null,null,null,null,null,this.divButton.form);
            obj.set_taborder("2");
            obj.set_text("Home");
            obj.set_flexgrow("1");
            obj.set_cssclass("btn_TF_MenuItem02");
            this.divButton.addChild(obj.name, obj);

            obj = new Button("btnUXPRO","490","398","1000","56",null,null,null,null,null,null,this.divButton.form);
            obj.set_taborder("3");
            obj.set_text("UXPro");
            obj.set_flexgrow("1");
            obj.set_cssclass("btn_TF_MenuItem02");
            this.divButton.addChild(obj.name, obj);

            obj = new Button("btnDEVPRO","500","408","1000","56",null,null,null,null,null,null,this.divButton.form);
            obj.set_taborder("4");
            obj.set_text("DevPro");
            obj.set_flexgrow("1");
            obj.set_cssclass("btn_TF_MenuItem02");
            this.divButton.addChild(obj.name, obj);

            obj = new Button("btnPROGEN","510","418","1000","56",null,null,null,null,null,null,this.divButton.form);
            obj.set_taborder("5");
            obj.set_text("ProGen");
            obj.set_flexgrow("1");
            obj.set_cssclass("btn_TF_MenuItem02");
            this.divButton.addChild(obj.name, obj);

            obj = new Panel("Panel02","0","64",null,null,"0","162",null,null,null,null,this.divButton.form);
            obj.set_taborder("9");
            obj.set_flexwrap("wrap");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxiswrapalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnHOME\"/><PanelItem id=\"PanelItem02\" componentid=\"btnUXPRO\"/><PanelItem id=\"PanelItem03\" componentid=\"btnDEVPRO\"/><PanelItem id=\"PanelItem04\" componentid=\"btnPROGEN\"/></Contents>");
            this.divButton.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divButton.form
            obj = new Layout("default","",0,0,this.divButton.form,function(p){});
            this.divButton.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",480,768,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmTopMobile.xfdl", function() {
        /**
        *  proPortal
        *  @FileName 	frmTopMobile.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2025/03/05
        *  @Description
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2025/03/05			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp   = nexacro.getApplication();
        this.fvCurBtn = "";
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);

        	document.getElementById(this.divButton._unique_id).style.setProperty("background-color", "rgba(35, 40, 95, 0.8)");
        	document.getElementById(this.divButton._unique_id).style.setProperty("backdrop-filter", "blur(20px)");
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

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/


        // this.inrtoButton_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        // {
        // 	var sMenuNm =  obj.name.replace(/^btn/, "");
        // 	this.objApp.gvIntroType = sMenuNm;
        // 	var sIntroType = obj.uIntroType; // 제거 예정
        // 	this.objApp.gvBase.form.fnFormOpen(sMenuNm, sIntroType);
        //
        // 	//this.gfnTopButtonClickCss(obj.id);
        // };


        // 모바일 사이즈 시 햄버거 메뉴 버튼 onclick
        this.divTopM_btnHamburger_onclick = function(obj,e)
        {
        	 var nWidth = this.objApp.gvBase.form.width;
        	 var nHeight = this.objApp.gvBase.form.height;
        	this.pdivMenu.trackPopup(0,0, nWidth, nHeight, "pdivCallback");
        };

        // X 버튼 onclick
        this.divButton_btnClose_onclick = function(obj,e)
        {
        	this.parent.closePopup();
        };

        this.introButtons_onclick = function(obj,e)
        {
        	var sMenuNm =  obj.name.replace(/^btn/, "");
        	this.objApp.gvIntroType = sMenuNm;
        	var sIntroType = obj.uIntroType; // 제거 예정
        	this.objApp.gvBase.form.fnFormOpen(sMenuNm, sIntroType);
        	this.parent.closePopup();
        };

        this.appButtons_onclick = function(obj,e)
        {
        	this.parent.closePopup();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divButton.addEventHandler("onsize",this.divButton_onsize,this);
            this.divButton.form.btnEXPERIEN.addEventHandler("onclick",this.appButtons_onclick,this);
            this.divButton.form.btnINQUIRY.addEventHandler("onclick",this.appButtons_onclick,this);
            this.divButton.form.btnClose.addEventHandler("onclick",this.divButton_btnClose_onclick,this);
            this.divButton.form.btnHOME.addEventHandler("onclick",this.introButtons_onclick,this);
            this.divButton.form.btnUXPRO.addEventHandler("onclick",this.introButtons_onclick,this);
            this.divButton.form.btnDEVPRO.addEventHandler("onclick",this.introButtons_onclick,this);
            this.divButton.form.btnPROGEN.addEventHandler("onclick",this.introButtons_onclick,this);
        };
        this.loadIncludeScript("frmTopMobile.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
