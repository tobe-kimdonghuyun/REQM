(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("certRequest");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("web00","0","0","600","800",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",600,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("certRequest.xfdl", function() {
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수
        	this.fnInit();
        };

        this.fnInit = function() {

        	this.params = this.getOwnerFrame().params;

        	this.gfnWebBrowserSendPost(this, this.web00, "/api/certRequest.do", "params="+JSON.stringify(this.params));
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("certRequest.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
