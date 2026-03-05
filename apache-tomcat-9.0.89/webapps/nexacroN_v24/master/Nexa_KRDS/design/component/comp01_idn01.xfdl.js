(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("idn01");
            this.set_titletext("아이덴티티-공식배너");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,550);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staH2","0","0","140","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("공식배너");
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
            obj.set_text("Masthead");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","85",null,"100","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("공식 배너는 사용자가 대한민국 정부 조직 및 관련 기관에서 운영 및 관리하는 디지털 정부서비스임을 식별할 수 있도록 제공하는 정보 배너이다.");
            obj.set_cssclass("sta_WF_Descript");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","Static00:80",null,"32","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_TF_MastheadBg");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","3.75%","Static00:80","391","32",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("이 누리집은 대한민국 공식 전자정부 누리집입니다.");
            obj.set_tablecellarea("0 0/1 2");
            obj.set_cssclass("sta_TF_MastheadTxt");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,mobile_small",888,550,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comp01_idn01.xfdl", function() {

        this.idn01_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.idn01_onload,this);
            this.Static00_01.addEventHandler("onclick",this.Static00_01_onclick,this);
        };
        this.loadIncludeScript("comp01_idn01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
