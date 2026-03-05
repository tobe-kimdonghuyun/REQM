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
            obj = new Div("Div00","50","50","1200","600",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_border("3px double cadetblue");
            obj.set_background("mistyrose");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","51","50","164","68",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00","274","50","164","68",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("Button00");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","504","50","164","68",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("Button00");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00","726","50","164","68",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("Button00");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01","51","169","164","68",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("Button00");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01","274","169","164","68",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("Button00");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00","726","169","164","68",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("Button00");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_01","504","169","164","68",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("Button00");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00","51","289","164","68",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("Button00");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00","274","289","164","68",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("Button00");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00_00","726","289","164","68",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("Button00");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_01_00","504","289","164","68",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("Button00");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00","51","415","164","68",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("Button00");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_00","274","415","164","68",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("Button00");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00_00_00","726","415","164","68",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("Button00");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_01_00_00","504","415","164","68",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_text("Button00");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00_01","952","169","164","68",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_text("Button00");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00_00_01","952","289","164","68",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_text("Button00");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00_00_00_00","952","415","164","68",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_text("Button00");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_01","952","50","164","68",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_text("Button00");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

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
        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
