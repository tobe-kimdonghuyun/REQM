(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("test");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.Button("btn00","73","109","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("TEXT(\"Key00\",\"btn00\")");
            this.addChild(obj.name, obj);

            obj = new nexacro.Div("div00","263","43","175","197",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn01","74","204","123","49",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("btn01");
            this.addChild(obj.name, obj);

            obj = new nexacro.Div("div01","467","45","200","150",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div01");
            obj.set_url("Environment::strres1.xfdl");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this.div00
            obj = new nexacro.Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div01
            obj = new nexacro.Layout("default","",0,0,this.div01.form,function(p){});
            this.div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new nexacro.Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Environment::strres1.xfdl");
        };
        
        // User Script
        this.registerScript("strres.xfdl", function(nexacro, system, trace, environment, application) {

        this.btn01_onclick = function(obj,e)
        {
        	this.div00.url = "Environment::strres1.xfdl";
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
        };

        this.loadIncludeScript("strres.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
