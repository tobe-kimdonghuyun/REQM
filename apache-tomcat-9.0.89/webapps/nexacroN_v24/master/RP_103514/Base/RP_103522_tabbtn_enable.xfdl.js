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
            obj = new Tab("Tab00","101","91","557","294",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("Tabpage1");
            this.Tab00.addChild(obj.name, obj);

            obj = new Button("Button00","57","76","113","67",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("Tabpage2");
            obj.set_enable("false");
            this.Tab00.addChild(obj.name, obj);

            obj = new Button("Button00","398","50","125","74",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Tab00);
            obj.set_text("Tabpage3");
            this.Tab00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Tab00.Tabpage1.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage1.form,function(p){});
            this.Tab00.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage2.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage2.form,function(p){});
            this.Tab00.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage3.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage3.form,function(p){});
            this.Tab00.Tabpage3.form.addLayout(obj.name, obj);

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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("RP_103522_tabbtn_enable.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
