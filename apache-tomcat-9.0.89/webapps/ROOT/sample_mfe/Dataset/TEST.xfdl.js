(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TEST");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.Div("div01","0","0","790","400",null,null,null,null,null,null,this);
            obj.set_background("beige");
            obj.set_taborder("1");
            obj.set_text("div01");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00","30","165","120","50",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("0");
            obj.set_text("btn00");
            this.div01.addChild(obj.name, obj);

            obj = new nexacro.Button("btn01","612","417","120","50",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("1");
            obj.set_text("btn01");
            this.div01.addChild(obj.name, obj);

            obj = new nexacro.Div("div00","0","0","770","138",null,null,null,null,null,null,this);
            obj.set_background("aqua");
            obj.set_taborder("0");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Tab("tab00","872","298","150","100",null,null,null,null,null,null,this);
            obj.set_tabindex("0");
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Tabpage("Tabpage1",this.tab00);
            obj.set_text("Tabpage1");
            this.tab00.addChild(obj.name, obj);

            obj = new nexacro.Tabpage("Tabpage2",this.tab00);
            obj.set_text("Tabpage2");
            this.tab00.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this.div01.form
            obj = new nexacro.Layout("default","",0,0,this.div01.form,function(p){});
            this.div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00.form
            obj = new nexacro.Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab00.Tabpage1
            obj = new nexacro.Layout("default","",0,0,this.tab00.Tabpage1.form,function(p){});
            this.tab00.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab00.Tabpage2
            obj = new nexacro.Layout("default","",0,0,this.tab00.Tabpage2.form,function(p){});
            this.tab00.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new nexacro.Layout("default","large,medium,mobile,desktop",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("TEST.xfdl", function(nexacro, system, trace, environment, application) {

        this.div01_btn00_onclick = function(obj,e)
        {
        	trace(this.lookup("frame")._type_name);;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div01.form.btn00.addEventHandler("onclick",this.div01_btn00_onclick,this);
        };

        this.loadIncludeScript("TEST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
