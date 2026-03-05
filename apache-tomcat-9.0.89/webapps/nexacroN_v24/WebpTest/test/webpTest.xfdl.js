(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("test");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,1000);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btnDevGuideDown","20","50","169","168",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("초보자를 위한 자습서");
            obj.set_cssclass("btn_MF_Quick1_03");
            obj.getSetter("uLinkUrl").set("http://docs.tobesoft.com/getting_started_nexacro_n_ko");
            obj.getSetter("uLinkType").set("url");
            this.addChild(obj.name, obj);

            obj = new Button("btnDsgGuideDown","193","50","168","168",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("개발도구가이드");
            obj.set_cssclass("btn_MF_Quick1_02");
            obj.getSetter("uLinkUrl").set("http://docs.tobesoft.com/development_tools_guide_nexacro_n_ko");
            obj.getSetter("uLinkType").set("url");
            this.addChild(obj.name, obj);

            obj = new Button("btnGoIdeaBoard","365","50","168","168",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("컴퍼넌트 활용 워크북");
            obj.set_cssclass("btn_MF_Quick1_03");
            obj.getSetter("uLinkUrl").set("http://docs.tobesoft.com/developer_guide_nexacro_n_ko");
            obj.getSetter("uLinkType").set("url");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","20","509","200","200",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Img01");
            this.addChild(obj.name, obj);

            obj = new Div("div00","590","259","200","200",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("div_WF_Sample");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00","270","509","200","200",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("url(\'..\\_resource_\\_theme_\\DesktopMDI\\images\\webp\\sample01.webp\') no-repeat center center");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img00","590","509","200","200",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_image("url(\'theme::DesktopMDI/images/webp/sample04.webp\')");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","20","259","200","200",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("btn_Icon_css적용");
            obj.set_cssclass("btn_WF_Icon");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00","270","259","200","200",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("btn_icon_properties 적용");
            obj.set_cssclass("btn_WF_Icon");
            obj.set_icon("url(\'../_resource_/_theme_/DesktopMDI/images/webp/sample02.webp\')");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","20","14","343","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("[Button]Background_css적용");
            obj.set_cssclass("sta_MF_tile");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00","20","474","220","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("[Static]background_css 적용");
            obj.set_cssclass("sta_MF_tile");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_00","270","474","303","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("[Static]background_properties 적용");
            obj.set_cssclass("sta_MF_tile");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_01","20","724","220","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("[Static]background_css(Gif)");
            obj.set_cssclass("sta_MF_tile");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_00_00","270","224","263","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("[Button]-nexa-icon_properties");
            obj.set_cssclass("sta_MF_tile");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_00_00_00","590","474","330","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("[Imageviewer] image_properties");
            obj.set_cssclass("sta_MF_tile");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_01_00","590","224","350","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("[div]background_css 적용");
            obj.set_cssclass("sta_MF_tile");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","20","759","200","200",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_Gif01");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_01_01","270","724","240","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("[Static]background_css(webp)");
            obj.set_cssclass("sta_MF_tile");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_00","270","759","200","200",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_Gif02");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_00_00_01","20","224","263","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("[Button]-nexa-icon_css");
            obj.set_cssclass("sta_MF_tile");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_00_00_00_00","860","474","330","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("[Imageviewer] image_properties");
            obj.set_cssclass("sta_MF_tile");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img00_00","860","509","200","200",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_image("url(\'theme::DesktopMDI/images/webp/sample03.webp\')");
            obj.set_text("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,1000,this,function(p){});
            obj.set_horizontalgap("0");
            obj.set_mobileorientation("landscape");
            obj.set_spacing("0px");
            obj.set_tabletemplate("1* / 1*");
            obj.set_verticalgap("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnDevGuideDown.addEventHandler("onclick",this.btnLink_onclick,this);
            this.btnDsgGuideDown.addEventHandler("onclick",this.btnLink_onclick,this);
            this.btnGoIdeaBoard.addEventHandler("onclick",this.btnLink_onclick,this);
        };
        this.loadIncludeScript("webpTest.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
