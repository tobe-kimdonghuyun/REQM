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
                this._setFormPosition(300,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","80","230",null,"60","80",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("1");
            obj.set_textAlign("center");
            obj.set_font("40pt \"Arial Black\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","80","230",null,"60","80",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("2");
            obj.set_textAlign("center");
            obj.set_font("40pt \"Arial Black\"");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","80","230",null,"60","80",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("3");
            obj.set_textAlign("center");
            obj.set_font("40pt \"Arial Black\"");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","80","230",null,"60","80",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("4");
            obj.set_textAlign("center");
            obj.set_font("40pt \"Arial Black\"");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","80","230",null,"60","80",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("5");
            obj.set_textAlign("center");
            obj.set_font("40pt \"Arial Black\"");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","50",null,"150","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_background("gray");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_00","30","60",null,"50","30",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div00_00","0","50",null,"150","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Div00");
            obj.set_positionstep("1");
            obj.set_background("gray");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_00","30","60",null,"50","30",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Div("Div00_00_00","0","50",null,"150","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div00");
            obj.set_positionstep("2");
            obj.set_background("gray");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_00","30","60",null,"50","30",null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("0");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Div("Div00_00_00_00","0","50",null,"150","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Div00");
            obj.set_positionstep("3");
            obj.set_background("gray");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_00","30","60",null,"50","30",null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("0");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Div("Div00_00_00_00_00","0","50",null,"150","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Div00");
            obj.set_positionstep("4");
            obj.set_background("gray");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_00","30","60",null,"50","30",null,null,null,null,null,this.Div00_00_00_00_00.form);
            obj.set_taborder("0");
            this.Div00_00_00_00_00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00_00.form
            obj = new Layout("default","",0,0,this.Div00_00.form,function(p){});
            this.Div00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00_00_00.form
            obj = new Layout("default","",0,0,this.Div00_00_00.form,function(p){});
            this.Div00_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00_00_00_00.form
            obj = new Layout("default","",0,0,this.Div00_00_00_00.form,function(p){});
            this.Div00_00_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00_00_00_00_00.form
            obj = new Layout("default","",0,0,this.Div00_00_00_00_00.form,function(p){});
            this.Div00_00_00_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",300,400,this,function(p){});
            obj.set_stepcount("5");
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
        this.loadIncludeScript("RP_95532_Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
