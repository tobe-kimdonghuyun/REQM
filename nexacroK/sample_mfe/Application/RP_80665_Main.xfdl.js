(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("showmodal_parent");
            this.set_titletext("Show modal form");
            this.getSetter("classname").set("popup_test1");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(760,430);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.Button("Button01","87","30","103","42",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","",760,430,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("RP_80665_Main.xfdl", function(nexacro, system, trace, environment, application) {

        this.Button01_onclick = function(obj,e)
        {
        	nexacro.open("modeless","Application::RP_80665_Popup.xfdl", this.getOwnerFrame(), "123",  "showtitlebar=true showstatusbar=false autosize=false", 3000, 0);
        	nexacro.open("modeless1","Application::RP_80665_Popup.xfdl", this.getOwnerFrame(), "123",  "showtitlebar=true showstatusbar=false", 3000, 0);
        	nexacro.open("modeless2","Application::RP_80665_Popup.xfdl", this.getOwnerFrame(), "123",  "showtitlebar=true showstatusbar=false", 3000, 0);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
        };

        this.loadIncludeScript("RP_80665_Main.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
