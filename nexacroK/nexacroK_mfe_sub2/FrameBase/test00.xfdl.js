(function()
{
    const fn = function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("test00");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.Button("Button00","121","93","242","132",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("this.close();");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00_00","120","244","242","132",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("this.close();");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("test00.xfdl", function(nexacro, system, trace, environment, application) {

        this.Button00_onclick = function(obj,e)
        {
        	this.close();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button00_00.addEventHandler("onclick",this.Button00_00_onclick,this);
        };

        this.loadIncludeScript("test00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
    if (document.currentScript)
        document.currentScript.dispatchEvent(new CustomEvent("loadModule", { detail: fn }));

    return fn;
}
)();

//# sourceMappingURL=test00.xfdl.js.map
