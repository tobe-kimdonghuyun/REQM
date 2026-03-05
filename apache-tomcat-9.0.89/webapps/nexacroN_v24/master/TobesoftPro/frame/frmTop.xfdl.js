(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmTop");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,80);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divButton","140","0","586","44",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_fittocontents("width");
            obj.set_cssclass("div_TF_MenuBackground,backdrop");
            this.addChild(obj.name, obj);

            obj = new Button("btnHOME","740","19","95","36",null,null,null,null,null,null,this.divButton.form);
            obj.set_taborder("0");
            obj.set_text("Home");
            obj.set_fittocontents("both");
            obj.set_cssclass("btn_TF_MenuItemMS");
            obj.getSetter("uType").set("intro");
            this.divButton.addChild(obj.name, obj);

            obj = new Static("Static00","220","26","2","36",null,null,null,null,null,null,this.divButton.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_TF_Bar");
            this.divButton.addChild(obj.name, obj);

            obj = new Button("btnUXPRO","600","19","95","36",null,null,null,null,null,null,this.divButton.form);
            obj.set_taborder("1");
            obj.set_text("UXPro");
            obj.set_fittocontents("both");
            obj.set_cssclass("btn_TF_MenuItemM");
            obj.getSetter("uType").set("intro");
            obj.getSetter("uIntroType").set("UXPRO");
            this.divButton.addChild(obj.name, obj);

            obj = new Button("btnDEVPRO","880","19","95","36",null,null,null,null,null,null,this.divButton.form);
            obj.set_taborder("2");
            obj.set_text("DevPro");
            obj.set_fittocontents("both");
            obj.set_cssclass("btn_TF_MenuItemM");
            obj.getSetter("uType").set("intro");
            obj.getSetter("uIntroType").set("DEVPRO");
            this.divButton.addChild(obj.name, obj);

            obj = new Button("btnPROGEN","880","19","95","36",null,null,null,null,null,null,this.divButton.form);
            obj.set_taborder("3");
            obj.set_text("ProGen");
            obj.set_fittocontents("both");
            obj.set_cssclass("btn_TF_MenuItemM");
            obj.getSetter("uType").set("intro");
            obj.getSetter("uIntroType").set("PROGEN");
            this.divButton.addChild(obj.name, obj);

            obj = new Static("Static00_00","230","36","2","36",null,null,null,null,null,null,this.divButton.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_TF_Bar");
            this.divButton.addChild(obj.name, obj);

            obj = new Button("btnEXPERIEN","610","29","95","36",null,null,null,null,null,null,this.divButton.form);
            obj.set_taborder("4");
            obj.set_text("체험하기");
            obj.set_fittocontents("both");
            obj.set_cssclass("btn_TF_MenuItemS");
            obj.getSetter("uType").set("app");
            obj.set_visible("true");
            this.divButton.addChild(obj.name, obj);

            obj = new Button("btnINQUIRY","620","39","95","36",null,null,null,null,null,null,this.divButton.form);
            obj.set_taborder("5");
            obj.set_text("문의하기");
            obj.set_fittocontents("both");
            obj.set_cssclass("btn_TF_MenuItemS");
            obj.getSetter("uType").set("app");
            obj.set_visible("true");
            this.divButton.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","0",null,"80","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tablecellarea("0/1");
            obj.set_flexgrow("1");
            obj.set_visible("true");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divButton\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("divTopM","920","0","359","64",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnHOME","16","12","143","40",null,null,null,null,null,null,this.divTopM.form);
            obj.set_taborder("0");
            obj.set_visible("true");
            obj.set_cssclass("btn_TF_Logo");
            obj.getSetter("uType").set("intro");
            this.divTopM.addChild(obj.name, obj);

            obj = new Button("btnHamburger",null,"12","40","40","16",null,null,null,null,null,this.divTopM.form);
            obj.set_taborder("1");
            obj.set_flexgrow("1");
            obj.set_visible("true");
            obj.set_cssclass("btn_TF_Menu");
            this.divTopM.addChild(obj.name, obj);

            obj = new PopupDiv("pdivMenu","510","120","416","440",null,null,null,null,null,null,this);
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            obj.set_url("frame::frmTopMobile.xfdl");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divButton.form
            obj = new Layout("default","",0,0,this.divButton.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnHOME.set_taborder("0");
                p.btnHOME.set_text("Home");
                p.btnHOME.set_fittocontents("both");
                p.btnHOME.set_cssclass("btn_TF_MenuItemMS");
                p.btnHOME.getSetter("uType").set("intro");
                p.btnHOME.move("740","19","95","36",null,null);

                p.Static00.set_taborder("6");
                p.Static00.set_cssclass("sta_TF_Bar");
                p.Static00.move("220","26","2","36",null,null);

                p.btnUXPRO.set_taborder("1");
                p.btnUXPRO.set_text("UXPro");
                p.btnUXPRO.set_fittocontents("both");
                p.btnUXPRO.set_cssclass("btn_TF_MenuItemM");
                p.btnUXPRO.getSetter("uType").set("intro");
                p.btnUXPRO.getSetter("uIntroType").set("UXPRO");
                p.btnUXPRO.move("600","19","95","36",null,null);

                p.btnDEVPRO.set_taborder("2");
                p.btnDEVPRO.set_text("DevPro");
                p.btnDEVPRO.set_fittocontents("both");
                p.btnDEVPRO.set_cssclass("btn_TF_MenuItemM");
                p.btnDEVPRO.getSetter("uType").set("intro");
                p.btnDEVPRO.getSetter("uIntroType").set("DEVPRO");
                p.btnDEVPRO.move("880","19","95","36",null,null);

                p.btnPROGEN.set_taborder("3");
                p.btnPROGEN.set_text("ProGen");
                p.btnPROGEN.set_fittocontents("both");
                p.btnPROGEN.set_cssclass("btn_TF_MenuItemM");
                p.btnPROGEN.getSetter("uType").set("intro");
                p.btnPROGEN.getSetter("uIntroType").set("PROGEN");
                p.btnPROGEN.move("880","19","95","36",null,null);

                p.Static00_00.set_taborder("7");
                p.Static00_00.set_cssclass("sta_TF_Bar");
                p.Static00_00.move("230","36","2","36",null,null);

                p.btnEXPERIEN.set_taborder("4");
                p.btnEXPERIEN.set_text("체험하기");
                p.btnEXPERIEN.set_fittocontents("both");
                p.btnEXPERIEN.set_cssclass("btn_TF_MenuItemS");
                p.btnEXPERIEN.getSetter("uType").set("app");
                p.btnEXPERIEN.set_visible("true");
                p.btnEXPERIEN.move("610","29","95","36",null,null);

                p.btnINQUIRY.set_taborder("5");
                p.btnINQUIRY.set_text("문의하기");
                p.btnINQUIRY.set_fittocontents("both");
                p.btnINQUIRY.set_cssclass("btn_TF_MenuItemS");
                p.btnINQUIRY.getSetter("uType").set("app");
                p.btnINQUIRY.set_visible("true");
                p.btnINQUIRY.move("620","39","95","36",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_spacing("4px");
            obj.set_horizontalgap("4");
            this.divButton.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divButton.form
            obj = new Layout("Layout0","",0,0,this.divButton.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_spacing("4px");
            obj.set_horizontalgap("4");
            this.divButton.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divButton.form
            obj = new Layout("Layout0","",0,0,this.divButton.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_spacing("4px");
            obj.set_horizontalgap("4");
            this.divButton.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divTopM.form
            obj = new Layout("default","",0,0,this.divTopM.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnHOME.set_taborder("0");
                p.btnHOME.set_visible("true");
                p.btnHOME.set_cssclass("btn_TF_Logo");
                p.btnHOME.getSetter("uType").set("intro");
                p.btnHOME.move("16","12","143","40",null,null);

                p.btnHamburger.set_taborder("1");
                p.btnHamburger.set_flexgrow("1");
                p.btnHamburger.set_visible("true");
                p.btnHamburger.set_cssclass("btn_TF_Menu");
                p.btnHamburger.move(null,"12","40","40","16",null);
            	}
            );
            this.divTopM.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divTopM.form
            obj = new Layout("Layout0","",0,0,this.divTopM.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnHamburger.set_flexgrow("0");
            	}
            );
            this.divTopM.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divTopM.form
            obj = new Layout("Layout0","",0,0,this.divTopM.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divTopM.form.addLayout(obj.name, obj);
            //-- Default Layout : this.pdivMenu
            obj = new Layout("default","",0,0,this.pdivMenu.form,function(p){});
            this.pdivMenu.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,80,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("New Form");

                p.divButton.set_taborder("0");
                p.divButton.set_text("Div00");
                p.divButton.set_fittocontents("width");
                p.divButton.set_cssclass("div_TF_MenuBackground,backdrop");
                p.divButton.set_minwidth("");
                p.divButton.move("140","0","586","44",null,null);

                p.Panel00.set_taborder("1");
                p.Panel00.set_tablecellarea("0/1");
                p.Panel00.set_flexgrow("1");
                p.Panel00.set_visible("true");
                p.Panel00.set_flexcrossaxisalign("center");
                p.Panel00.set_flexmainaxisalign("center");
                p.Panel00.move("0","0",null,"80","0",null);

                p.divTopM.set_taborder("2");
                p.divTopM.set_text("Div01");
                p.divTopM.set_visible("false");
                p.divTopM.move("920","0","359","64",null,null);

                p.pdivMenu.set_text("PopupDiv00");
                p.pdivMenu.set_visible("false");
                p.pdivMenu.set_url("frame::frmTopMobile.xfdl");
                p.pdivMenu.move("510","120","416","440",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Mobile_screen,Desktop_screen",500,64,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.set_visible("false");
                p.Panel00.move("0","100",null,"64","0",null);

                p.divTopM.set_visible("true");
                p.divTopM.move("0","0",null,"64","0",null);

                p.pdivMenu.set_text("PopupDiv00");
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmTopMobile.xfdl");
        };
        
        // User Script
        this.registerScript("frmTop.xfdl", function() {
        /**
        *  proPortal
        *  @FileName 	frmTop.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2025/02/26
        *  @Description
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2025/02/26			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fvExpreineCd		= "EXPERIEN";	// 체험하기
        this.fvInquiryCd		= "INQUIRY";	// 문의하기

        this.objApp = nexacro.getApplication();
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);

        	document.getElementById(this.divButton._unique_id).style.setProperty("background-color", "rgba(35, 40, 95, 0.3)");
        	document.getElementById(this.divTopM._unique_id).style.setProperty("background-color", "rgba(35, 40, 95, 0.3)");
        	document.getElementById(this.divButton._unique_id).style.setProperty("backdrop-filter", "blur(20px)");
        	document.getElementById(this.divTopM._unique_id).style.setProperty("backdrop-filter", "blur(20px)");
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
        //소개 페이지에 따른 체험하기/문의하기 버튼 visible 처리
        this.fnAppButtonVisibleControl = function(sApp)
        {
        	if(this.gfnIsNull(sApp)) {
        		sApp = "EXPERIEN,INQUIRY";
        	}

        	var aApp = sApp.split(",");

        	var comps = this.divButton.form.components;

        	for(var i = 0; i < comps.length; i++) {
        		if(comps[i].uType == "app") {
        			var id = comps[i].id.replace(/^btn/, "");
        			if(aApp.indexOf(id) > -1) {
        				comps[i].set_visible(true);
        			}
        			else comps[i].set_visible(false);
        		}
        	}
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        // 메인~소개페이지 메뉴 onclick 이벤트
        this.inrtoButton_onclick = function(obj,e)
        {
        	var sMenuNm =  obj.name.replace(/^btn/, "");
        	this.objApp.gvIntroType = sMenuNm;
        	var sIntroType = obj.uIntroType; // 제거 예정
        	this.objApp.gvBase.form.fnFormOpen(sMenuNm, sIntroType);
        };

        // 모바일 사이즈 시 햄버거 메뉴 버튼 onclick
        this.divTopM_btnHamburger_onclick = function(obj,e)
        {
        	 var nWidth = this.divTopM.getOffsetWidth();
        	 var nHeight = this.objApp.gvBase.form.height;
        	 this.pdivMenu.trackPopupByComponent(this.divTopM, 0, 0, nWidth, nHeight);
        };

        this.frmTop_onsize = function(obj,e)
        {
        	var nX = obj.getOffsetWidth();

        	if(nX < this.objApp.gvMobileSize) return;

        	if(!this.gfnIsNull(this.fvCurBtn)) {
        		this.gfnTopButtonClickCss(this.fvCurBtn);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.frmTop_onsize,this);
            this.divButton.addEventHandler("onsize",this.divButton_onsize,this);
            this.divButton.form.btnHOME.addEventHandler("onclick",this.inrtoButton_onclick,this);
            this.divButton.form.btnUXPRO.addEventHandler("onclick",this.inrtoButton_onclick,this);
            this.divButton.form.btnDEVPRO.addEventHandler("onclick",this.inrtoButton_onclick,this);
            this.divButton.form.btnPROGEN.addEventHandler("onclick",this.inrtoButton_onclick,this);
            this.divTopM.form.btnHOME.addEventHandler("onclick",this.inrtoButton_onclick,this);
            this.divTopM.form.btnHamburger.addEventHandler("onclick",this.divTopM_btnHamburger_onclick,this);
        };
        this.loadIncludeScript("frmTop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
