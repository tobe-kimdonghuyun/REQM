(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_MO_Splash");
            this.set_titletext("모바일 스플레시");
            if (Form == this.constructor)
            {
                this._setFormPosition(360,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_SPLASH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","80","290","200","48",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_SPLASH_Logo");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","80","Static01:20",null,"26","80",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_SPLASH_Txt");
            obj.set_text("더 나은 내일을 함께합니다.");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("ProgressBar00","80","Static01_00:229",null,"4","80",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("ProgressBar00");
            obj.set_smooth("true");
            obj.set_min("0");
            obj.set_max("100");
            obj.set_pos("50");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","80","ProgressBar00:8","174","23",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("잠시만 기다려 주세요.");
            obj.set_cssclass("sta_POP_Txt15R");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",360,768,this,function(p){});
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

        };
        this.loadIncludeScript("Form_Mobile_Splash.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
