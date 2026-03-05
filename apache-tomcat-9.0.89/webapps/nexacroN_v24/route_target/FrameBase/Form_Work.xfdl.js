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
                this._setFormPosition(810,590);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divSubA","0","290","100.00%","100%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_url("SubD::main.xfdl");
            obj.set_tablecellarea("1/0");
            this.addChild(obj.name, obj);

            obj = new Div("divSubB","380","-182","100%","100%",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_tablecellarea("1/1");
            obj.set_url("SubD::main2.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("staSubD1","140","9","100%","100%",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Load SubD::main.xfdl");
            obj.set_tablecellarea("0/0");
            obj.set_background("dodgerblue");
            obj.set_font("bold 12px/normal \"Malgun Gothic\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("staSubB","140","9","100%","100%",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Load SubD::main2.xfdl");
            obj.set_tablecellarea("0/1");
            obj.set_background("dodgerblue");
            obj.set_font("bold 12px/normal \"Malgun Gothic\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSubA
            obj = new Layout("default","",0,0,this.divSubA.form,function(p){});
            this.divSubA.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSubB
            obj = new Layout("default","",0,0,this.divSubB.form,function(p){});
            this.divSubB.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",810,590,this,function(p){});
            obj.set_type("table");
            obj.set_tabletemplate("30px 1* / 1* 1*");
            obj.set_verticalgap("5");
            obj.set_horizontalgap("5");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","SubD::main.xfdl");
            this._addPreloadList("fdl","SubD::main2.xfdl");
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
