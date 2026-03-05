(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("act01");
            this.set_titletext("액션_링크");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("stH2","0","0","76","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("링크");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("staDivider","stH2:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staEtit","staDivider:15","0","83","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Link");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","85",null,"100","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("링크는 다른 서비스/애플리케이션, 한 서비스 내의 다른 화면, 한 화면 내의 다른 섹션 등으로 이동하는 데 사용되는 탐색 요소이다.");
            obj.set_cssclass("sta_WF_Descript");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","Static00_01_00:80","200","41",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Size_medium");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0","Static00:24","62","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("버튼");
            obj.set_cssclass("btn_WF_LinklineBl");
            obj.set_accessibilityrole("link");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","0","Button00:30","62","26",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("버튼");
            obj.set_cssclass("btn_WF_Linkline");
            obj.set_accessibilityrole("link");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","0","Button00_00:30","62","26",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("버튼");
            obj.set_cssclass("btn_WF_Link");
            obj.set_accessibilityrole("link");
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
        this.registerScript("comp04_act01.xfdl", function() {

        this.act01_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.act01_onload,this);
            this.staEtit.addEventHandler("onclick",this.Div01_01_Static00_02_onclick,this);
        };
        this.loadIncludeScript("comp04_act01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
