(function()
{
    return function(nexacro, system, trace)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("Form_Work");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.Combo("Combo00","10","10","301","48",null,null,null,null,null,null,this);
            obj.set_codecolumn("num");
            obj.set_datacolumn("code");
            obj.set_innerdataset("MENU");
            obj.set_taborder("0");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Div("Div00","9","68","1262","642",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this.Div00
            obj = new nexacro.Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new nexacro.Layout("default","Desktop_screen",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Work.xfdl", function(nexacro, system, trace) {

        this.Combo00_onitemchanged = function(obj,e)
        {
        	this.Div00.set_url(obj.text);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Combo00.addEventHandler("onitemchanged",this.Combo00_onitemchanged,this);
        };

        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
