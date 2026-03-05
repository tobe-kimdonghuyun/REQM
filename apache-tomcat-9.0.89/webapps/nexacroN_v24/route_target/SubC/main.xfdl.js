(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("main");
            this.set_titletext("New Form");
            this.set_background("#f9eab7");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","5","5",null,"60","5",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("route_target : Sub System C");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","233","210","374","191",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("main.xfdl", function() {

        this.main_onload = function(obj,e)
        {
        	this.Static00.text = "route_target : Sub System C main.xfdl : "+`loaded from ${this._url}`;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.main_onload,this);
        };
        this.loadIncludeScript("main.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
