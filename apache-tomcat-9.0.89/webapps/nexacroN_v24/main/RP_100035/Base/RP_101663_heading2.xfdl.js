(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("heading2");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00","43","37","774","323",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_border("1px solid red");
            obj.set_accessibilityrole("heading1");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","99","58","332","110",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div00_00","36","387","774","323",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_border("1px solid red");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","208","64","290","88",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00","96","766","400","88",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Button00");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","131","928","532","169",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Button01");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","132","1151","731","162",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Button02");
            obj.set_accessibilityrole("heading1");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","117","1347","886","180",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Button03");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","58","1545","788","146",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Button04");
            obj.set_accessibilityrole("heading1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00_00.form
            obj = new Layout("default","",0,0,this.Div00_00.form,function(p){});
            this.Div00_00.form.addLayout(obj.name, obj);

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
        this.registerScript("RP_101663_heading2.xfdl", function() {

        this.heading2_onload = function(obj,e)
        {
        	this.Div00.set_accessibilityrole("heading1");
        	this.Div00_00.set_accessibilityrole("heading2");
        	this.Button00.set_accessibilityrole("heading3");
        	this.Button01.set_accessibilityrole("heading4");
        	this.Button02.set_accessibilityrole("heading5");
        	this.Button03.set_accessibilityrole("heading6");

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.heading2_onload,this);
        };
        this.loadIncludeScript("RP_101663_heading2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
