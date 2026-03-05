(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("src07");
            this.set_titletext("탐색_탭 바");
            this.set_accessibilityenable("false");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staH2","0","0","84","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("탭 바");
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
            obj.set_text("Tab bars");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","85",null,"100","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("탭바는 화면 하단에 고정하여 제공하는 탐색 수단으로 작은 디바이스나 좁은 화면에서 서비스의 핵심 화면으로 빠르게 접근할 수 있도록 도와준다.");
            obj.set_cssclass("sta_WF_Descript");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","0","Static00_01:80","360","93",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div07");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","0","0","72","72",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("홈");
            obj.set_cssclass("btn_BF_TabHomeS");
            obj.set_accessibilityrole("link");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button01_00","Button01:0","0","72","72",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("마이");
            obj.set_cssclass("btn_BF_TabMy");
            obj.set_accessibilityrole("link");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button01_01","Button01_00:0","0","72","72",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("민원");
            obj.set_cssclass("btn_BF_TabCComp");
            obj.set_accessibilityrole("link");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button01_02","Button01_01:0","0",null,"72","72",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("서비스");
            obj.set_cssclass("btn_BF_TabServ");
            obj.set_accessibilityrole("link");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button01_03",null,"0","72","72","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("전체");
            obj.set_cssclass("btn_BF_TabAll");
            obj.set_accessibilityrole("link");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static03","111",null,"139","5",null,"8",null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_BF_Indicator");
            obj.set_accessibilityenable("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div01_00","0","Div01:50","360","93",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div07");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","0","0","72","72",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("0");
            obj.set_text("홈");
            obj.set_cssclass("btn_BF_TabHomeS");
            obj.set_accessibilityrole("link");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button01_00","Button01:0","0","72","72",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("1");
            obj.set_text("마이");
            obj.set_cssclass("btn_BF_TabMyS");
            obj.set_accessibilityrole("link");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button01_01","Button01_00:0","0","72","72",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("2");
            obj.set_text("민원");
            obj.set_cssclass("btn_BF_TabCCompS");
            obj.set_accessibilityrole("link");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button01_02","Button01_01:0","0",null,"72","72",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("3");
            obj.set_text("서비스");
            obj.set_cssclass("btn_BF_TabServS");
            obj.set_accessibilityrole("link");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button01_03",null,"0","72","72","0",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("4");
            obj.set_text("전체");
            obj.set_cssclass("btn_BF_TabAllS");
            obj.set_accessibilityrole("link");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static03","111",null,"139","5",null,"8",null,null,null,null,this.Div01_00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_BF_Indicator");
            obj.set_accessibilityenable("false");
            this.Div01_00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01_00.form
            obj = new Layout("default","",0,0,this.Div01_00.form,function(p){});
            this.Div01_00.form.addLayout(obj.name, obj);

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
        this.registerScript("comp02_src07.xfdl", function() {

        this.src07_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.src07_onload,this);
        };
        this.loadIncludeScript("comp02_src07.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
