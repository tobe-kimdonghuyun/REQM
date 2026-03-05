(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("lay09");
            this.set_titletext("레이아웃 및 표현_캐러셀");
            this.set_cssclass("btn_WF_Txt");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,1210);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staH2","0","0","110","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("캐러셀");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("staDivider","staH2:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staEtit","staDivider:15","0","119","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Carousel");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","85",null,"100","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("캐러셀은 하나의 콘텐츠 영역 내에 여러 개의 서로 다른 콘텐츠를 표시할 수 있는 컴포넌트이다. 캐러셀에 포함된 콘텐츠는 가로로 배치되어 있으며, 사용자가 좌/우로 콘텐츠를 회전시켜 콘텐츠를 탐색하도록 하거나 자동으로 회전하도록 설정할 수 있다.");
            obj.set_cssclass("sta_WF_Descript");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","0","Static00_01_00:80",null,"538","88",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_cssclass("div_WF_CardBg");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","0","100%","466",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_fittocontents("height");
            obj.set_accessibilityenable("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01","32","37","386","230",null,null,null,null,null,null,this.Div01.form.Div00.form);
            obj.set_taborder("0");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_verticalgap("24");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Static00\"/><PanelItem id=\"PanelItem00\" componentid=\"Static01\"/></Contents>");
            this.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","32","37","100%","140",null,null,null,null,null,null,this.Div01.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("나와 내 가족의 보조금 혜택 정보를 지금, 한 번에 확인해 보세요.");
            obj.set_cssclass("sta_WF_H3_pc");
            obj.set_fittocontents("height");
            obj.set_accessibilityrole("heading3");
            this.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","32","169","100%","64",null,null,null,null,null,null,this.Div01.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("나와 내 가족의 보조금 혜택 정보를 지금, 한 번에 확인해 보세요.");
            obj.set_fittocontents("height");
            this.Div01.form.Div00.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","486","0","326","360",null,null,null,null,null,null,this.Div01.form.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("img_MF_Trans");
            obj.set_image("url(\'theme::NexaKRDS/images/img_MF_img01.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_text("");
            obj.set_flexgrow("1");
            obj.set_imagealign("center bottom");
            obj.set_accessibilitylabel("보조금 해택 정보");
            this.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div00_00","511","394","100%","72",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_accessibilityenable("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static09_00_00","0","0","65","40",null,null,null,null,null,null,this.Div01.form.Div00_00.form);
            obj.set_taborder("0");
            obj.set_text("<fc v=\"#052B57\">1 </fc>of 8");
            obj.set_cssclass("sta_WF_CaroNum");
            obj.set_usedecorate("true");
            obj.set_accessibilitylabel("슬라이드");
            this.Div01.form.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button04_03_00","73","0","40","40",null,null,null,null,null,null,this.Div01.form.Div00_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_CaroPlay");
            obj.set_accessibilitylabel("슬라이드 재생");
            this.Div01.form.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button04_00_00_00","121","0","40","40",null,null,null,null,null,null,this.Div01.form.Div00_00.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_CaroPrev");
            obj.set_accessibilitylabel("슬라이드 이전");
            this.Div01.form.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button04_01_00_00","169","0","40","40",null,null,null,null,null,null,this.Div01.form.Div00_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_CaroNext");
            obj.set_accessibilitylabel("슬라이드 다음");
            this.Div01.form.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button04_02_00_00","217","0","40","40",null,null,null,null,null,null,this.Div01.form.Div00_00.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_CaroMore");
            obj.set_accessibilitylabel("슬라이드 더보기");
            this.Div01.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static13_00","0","Div01:80",null,"320","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_GUIDE_Inforbg");
            obj.set_text("");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static11_01_00","20","Div01:109","281","36",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Carousel__dot / arrow");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_00","20","Static11_01_00:12","300","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div00");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","0","0","100","40",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_CaroBg");
            obj.set_text("");
            obj.set_accessibilityenable("false");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static10_01","15","15","20","8",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_CaroDotO");
            obj.set_accessibilitylabel("1번 슬라이드");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static10_00_03","Static10_01:4","15","8","8",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_CaroDot");
            obj.set_accessibilitylabel("2번 슬라이드");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00","Static10_00_03:4","15","8","8",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_CaroDot");
            obj.set_accessibilitylabel("3번 슬라이드");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static10_00_01_00","Static10_00_00_00:4","15","8","8",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_CaroDot");
            obj.set_accessibilitylabel("4번 슬라이드");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static10_00_02_00","75","15","8","8",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_CaroDot");
            obj.set_accessibilitylabel("5번 슬라이드");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button04_03_00","108","0","40","40",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_CaroPlay");
            obj.set_accessibilitylabel("슬라이드 재생");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button04_00_00_00","156","0","40","40",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_CaroPrev");
            obj.set_accessibilitylabel("슬라이드 이전");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button04_01_00_00","204","0","40","40",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_CaroNext");
            obj.set_accessibilitylabel("슬라이드 다음");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button04_02_00_00","252","0","40","40",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_CaroMore");
            obj.set_accessibilitylabel("슬라이드 더보기");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static11_01","20","Div00_00:32","281","36",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Swiper__atomic");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","20","Static11_01:12","290","100",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_04","0","0","64","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_SwipBgGL");
            obj.set_text("");
            obj.set_accessibilityenable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button05","8","4","32","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_SwipPrev");
            obj.set_accessibilitylabel("슬라이드 이전");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_04_00","97","0","64","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_SwipBgGR");
            obj.set_accessibilityenable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button05_00","121","4","32","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_SwipNext");
            obj.set_accessibilitylabel("슬라이드 다음");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_04_01","0","60","64","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_SwipBgGL");
            obj.set_accessibilityenable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button05_01","0","60","32","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_SwipPrevSqu");
            obj.set_accessibilitylabel("슬라이드 이전");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_04_02","96","60","64","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_SwipBgGR");
            obj.set_accessibilityenable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button05_02","128","60","32","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_SwipNextSqu");
            obj.set_accessibilitylabel("슬라이드 다음");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_04_03","226","0","64","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_SwipBgGR");
            obj.set_accessibilityenable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button05_03","250","4","32","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_SwipDown");
            obj.set_accessibilitylabel("슬라이드 더보기");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div01.form.Div00.form
            obj = new Layout("default","",0,0,this.Div01.form.Div00.form,function(p){});
            obj.set_type("horizontal");
            obj.set_spacing("32px");
            obj.set_horizontalgap("24");
            obj.set_verticalgap("24");
            obj.set_flexwrap("wrap");
            this.Div01.form.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form.Div00_00.form
            obj = new Layout("default","",0,0,this.Div01.form.Div00_00.form,function(p){});
            obj.set_type("horizontal");
            obj.set_horizontalgap("8");
            obj.set_flexmainaxisalign("end");
            obj.set_spacing("0px 32px 32px 0px");
            this.Div01.form.Div00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            obj.set_type("vertical");
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00_00.form
            obj = new Layout("default","",0,0,this.Div00_00.form,function(p){});
            obj.set_type("default");
            this.Div00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,mobile_small",888,1210,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comp03_lay09.xfdl", function() {

        this.lay09_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.lay09_onload,this);
            this.staEtit.addEventHandler("onclick",this.Div01_01_Static00_02_onclick,this);
            this.Static11_01_00.addEventHandler("onclick",this.Static11_01_onclick,this);
            this.Static11_01.addEventHandler("onclick",this.Static11_01_onclick,this);
        };
        this.loadIncludeScript("comp03_lay09.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
