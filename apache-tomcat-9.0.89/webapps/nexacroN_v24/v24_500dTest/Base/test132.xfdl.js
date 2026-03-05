(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("test132");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Edit("Edit00","208","169","327","105",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","60","315","368","125",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("nexacro.getEnvironment().usesoftkeyboard");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","472","304","488","141",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("nexacro.getEnvironment().usesoftkeyboard= true;");
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
        this.registerScript("test132.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	alert(nexacro.getEnvironment().usesoftkeyboard)
        };

        this.Button01_onclick = function(obj,e)
        {
        	nexacro.getEnvironment().usesoftkeyboard= true;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
        };
        this.loadIncludeScript("test132.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
