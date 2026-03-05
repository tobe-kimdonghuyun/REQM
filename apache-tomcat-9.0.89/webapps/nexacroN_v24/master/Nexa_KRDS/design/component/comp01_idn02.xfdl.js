(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("idn02");
            this.set_titletext("아이덴티티-운영기관 식별자");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staH2","0","0","255","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("운영기관 식별자");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("staDivider","staH2:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staEtit","staDivider:15","0","115","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Identifier");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","85",null,"100","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("운영기관 식별자는 디지털 정부서비스에 대한 신뢰성을 위해 서비스 운영 및 관리 주체를 안내하는 요소로 공식 배너, 푸터와 함께 서비스의 일관성, 브랜드를 확인할 수 있는 핵심 요소이다.");
            obj.set_cssclass("sta_WF_Descript");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","112","462","77","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_tablecellarea("0/1");
            obj.set_text("");
            obj.set_cssclass("sta_BF_Identiimg");
            obj.set_accessibilitylabel("KRDS - Korea Design System");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","105","456","280","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("이 누리집은 정부 산하기관 누리집입니다.");
            obj.set_tablecellarea("0/1");
            obj.set_cssclass("sta_BF_IdentiTxt");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","Static00:80",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("pnl_BF_Identi");
            obj.set_type("horizontal");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_spacing("8px 16px 8px 16px");
            obj.set_horizontalgap("8");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Static01\"/><PanelItem id=\"PanelItem00\" componentid=\"Static02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","112","462","77","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_tablecellarea("0/1");
            obj.set_text("");
            obj.set_cssclass("sta_BF_IdentiimgW");
            obj.set_accessibilitylabel("KRDS - Korea Design System");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","105","456","280","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("이 누리집은 정부 산하기관 누리집입니다.");
            obj.set_tablecellarea("0/1");
            obj.set_cssclass("sta_BF_IdentiTxtW");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02","0","Panel01:80",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("pnl_BF_IdentiB");
            obj.set_type("horizontal");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_spacing("8px 16px 8px 16px");
            obj.set_horizontalgap("8");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Static03\"/><PanelItem id=\"PanelItem00\" componentid=\"Static04\"/></Contents>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,mobile_small",888,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comp01_idn02.xfdl", function() {

        this.idn02_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.idn02_onload,this);
        };
        this.loadIncludeScript("comp01_idn02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
