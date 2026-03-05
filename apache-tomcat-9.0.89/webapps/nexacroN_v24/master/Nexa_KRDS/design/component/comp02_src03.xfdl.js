(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("src03");
            this.set_titletext("탐색_브레드크럼");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staH2","0","0","174","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("브레드크럼");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_accessibilityrole("heading2");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("staDivider","staH2:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staEtit","staDivider:15","0","163","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Breadcrumb");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","85",null,"100","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("브레드크럼은 탐색 계층 구조를 표시하여 사용자가 현재 위치를 파악하고 계층 구조의 수준을 이동할 수 있게 해준다. 브레드크럼을 통해 사용자는 탐색 중인 화면의 상위 수준 화면으로 이동할 수 있다.");
            obj.set_cssclass("sta_WF_Descript");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","Static00_01:80",null,"87","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0","24","43","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("홈");
            obj.set_cssclass("btn_WF_Home");
            obj.set_accessibilityrole("link");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_01","43","24","24","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Depnext");
            obj.set_text("1Depth");
            obj.set_accessibilityenable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01","Static01_01:0","23","58","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("1Depth");
            obj.set_cssclass("btn_WF_Breadcrumb");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("link");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","Button00_01:0","24","24","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Depnext");
            obj.set_accessibilityenable("false");
            obj.set_text("2Depth");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_02","Static01_00_00:0","23","58","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("2Depth");
            obj.set_cssclass("btn_WF_Breadcrumb");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("link");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","Button00_02:0","24","24","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Depnext");
            obj.set_text("");
            obj.set_accessibilityenable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_03","Static01_01_00:0","23","58","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("3Depth");
            obj.set_cssclass("btn_WF_Breadcrumb");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("link");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","Button00_03:0","24","24","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_Depnext");
            obj.set_accessibilityenable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_04","Static01_00_00_00:0","23","58","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("4Depth");
            obj.set_cssclass("btn_WF_Breadcrumb");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("link");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,mobile_small",888,400,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comp02_src03.xfdl", function() {

        this.src03_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.src03_onload,this);
        };
        this.loadIncludeScript("comp02_src03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
