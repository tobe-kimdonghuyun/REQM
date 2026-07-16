(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("nav_form");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.Button("btn00","34","58","188","47",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("navform");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00_00","232","57","188","47",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","mobile,medium,large,desktop",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("navform.xfdl", function(nexacro, system, trace, environment, application) {

        this.btn00_onclick = function(obj,e)
        {
        	trace("this.user1:"+ this.user1 + " this.user2:"+ this.user2);
        };

        this.nav_form_onurlduplicate = function(obj,e)
        {
        	trace("nav_form_onurlduplicate" + e.url);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onurlduplicate",this.nav_form_onurlduplicate,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn00_00.addEventHandler("onclick",this.btn00_onclick,this);
        };

        this.loadIncludeScript("navform.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
