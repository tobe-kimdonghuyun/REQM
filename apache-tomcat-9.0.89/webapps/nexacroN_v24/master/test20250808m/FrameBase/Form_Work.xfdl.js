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
                this._setFormPosition(480,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new TextField("TextField00","145","106","261","103",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_labeltext("aaaa");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","112","362","210","61",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new MultiLineTextField("MultiLineTextField00","125","236","270","80",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_labeltext("MultiLineTextField00");
            this.addChild(obj.name, obj);

            obj = new DateField("DateField00","178","40","239","70",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_labeltext("DateField00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Phone_screen",480,768,this,function(p){});
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
        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
