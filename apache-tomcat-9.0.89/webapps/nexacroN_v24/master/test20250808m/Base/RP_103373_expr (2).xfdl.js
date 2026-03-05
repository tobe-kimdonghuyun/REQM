(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("expr");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Calendar("Calendar00","52","38","160","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new DateField("DateField00","51","117","160","53",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_labeltext("TEST");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","250","38","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","250","95","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Button01");
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
        this.registerScript("RP_103373_expr (2).xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.Calendar00.expr = "Date()";
        	this.DateField00.expr = "Date()";
        };

        this.Button01_onclick = function(obj,e)
        {
        	this.Calendar00.expr  = "new nexacro.Date().valueOf()";
        	this.DateField00.expr = "new nexacro.Date().valueOf()";
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
        };
        this.loadIncludeScript("RP_103373_expr (2).xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
