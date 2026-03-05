(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("Form_Work");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Calendar("Calendar00","120","30","333","63",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_value("20241224");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","112","152","609","227",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Work.xfdl", function() {

        this.Calendar00_onchanged = function(obj,e)
        {
        	this.TextArea00("Calendar00_onchanged : e.prevalue "+e.prevalue+", e.postvalue "+e.postvalue)
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Calendar00.addEventHandler("onchanged",this.Calendar00_onchanged,this);
        };
        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
