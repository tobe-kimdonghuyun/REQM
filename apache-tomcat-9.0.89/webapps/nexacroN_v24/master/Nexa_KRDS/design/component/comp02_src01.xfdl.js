(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("src01");
            this.set_titletext("탐색_건너뛰기링크");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,370);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staH2","0","0","210","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("건너뛰기링크");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("staDivider","staH2:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("StaEtit","staDivider:15","0","98","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Skip link");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","85",null,"126","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("건너뛰기 링크는 웹사이트에서 웹 페이지의 주요 콘텐츠 섹션의 탐색을 도와주는 페이지 내부 링크이다. 키보드나 가상 초점을 이용하여 콘텐츠를 탐색하는 사용자는 건너뛰기 링크를 이용하여 대부분의 페이지에서 반복되는 콘텐츠 영역을 건너뛰고 주요 콘텐츠로 빠르게 이동할 수 있다.");
            obj.set_cssclass("sta_WF_Descript");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0","Static00_01:80",null,"32","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("본문 바로가기");
            obj.set_cssclass("btn_TF_Skiplink");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,mobile_small",888,370,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comp02_src01.xfdl", function() {

        this.src01_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.src01_onload,this);
        };
        this.loadIncludeScript("comp02_src01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
