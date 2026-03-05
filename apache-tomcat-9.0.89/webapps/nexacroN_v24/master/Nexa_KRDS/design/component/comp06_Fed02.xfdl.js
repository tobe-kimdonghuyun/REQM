(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("fed02");
            this.set_titletext("피드백_스피너");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staH2","0","0","105","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("스피너");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("staDivider","staH2:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staEtit","staDivider:15","0","104","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("spinner");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","85",null,"100","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("스피너는 화면이나 요소의 다양한 처리 상태를 시각적으로 표시한 것으로 화면 전체나 일부 요소에 접근하기 위해 일정 시간 동안 대기해야 함을 사용자에게 안내한다.");
            obj.set_cssclass("sta_WF_Descript");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","0","Static00:80","300","300",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_image("url(\'theme::NexaKRDS/images/img_WF_Spinner.gif\')");
            obj.set_stretch("fit");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00_00","310","Static00:80","50","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_image("url(\'theme::NexaKRDS/images/img_WF_SpinnerTran.gif\')");
            obj.set_stretch("none");
            obj.set_cssclass("img_MF_Trans");
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
        this.registerScript("comp06_Fed02.xfdl", function() {

        this.fed02_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fed02_onload,this);
            this.staEtit.addEventHandler("onclick",this.Div01_01_Static00_02_onclick,this);
        };
        this.loadIncludeScript("comp06_Fed02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
