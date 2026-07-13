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
            obj.set_text("navform1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt00","35","118","190","43",null,null,null,null,null,null,this);
            obj.set_taborder("1");
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
        this.registerScript("navform1.xfdl", function(nexacro, system, trace, environment, application) {

        this.btn00_onclick = function(obj,e)
        {
        	trace(this._url + " this.user1:"+ this.user1 + " this.user2:"+ this.user2);
        };

        this.nav_form_onurlduplicate = function(obj,e)
        {
        	trace("nav_form_onurlduplicate:" + e.url);
        };

        this.nav_form_oninit = function(obj,e)
        {

        	trace("nav_form_oninit : this.user1[" + this.user1 + "] this.user2[" + this.user2 + "]");
        };

        this.nav_form_onload = function(obj,e)
        {
        	trace("nav_form_onload : this.user1[" + this.user1 + "] this.user2[" + this.user2 + "]");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.nav_form_oninit,this);
            this.addEventHandler("onload",this.nav_form_onload,this);
            this.addEventHandler("onurlduplicate",this.nav_form_onurlduplicate,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
        };

        this.loadIncludeScript("navform1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
