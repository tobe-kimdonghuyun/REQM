(function()
{
    const fn = function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("Form_Work");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.NexacroPortal("NexacroPortal_00","41","30","619","523",null,null,null,null,null,null,this);
            obj.set_appkey("nexacroK_mfe_sub2");
            obj.set_apppath("http://172.10.12.45:9090/nexacroK/nexacroK_mfe_sub2");
            obj.set_automount("true");
            obj.set_taborder("0");
            obj.getSetter("text").set("Button00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01","682","33","178","54",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("TextArea00","684","97","496","426",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00","873","35","155","52",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("mount function");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","Desktop_screen",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Work.xfdl", function(nexacro, system, trace, environment, application) {

        this.Button01_onclick = function(obj,e)
        {
        	this.TextArea00.insertText(" appkey = "+this.NexacroPortal_00.appkey+
        							   +"\n apppath = "+ this.NexacroPortal_00.apppath
        							   +"\n formurl = "+ this.NexacroPortal_00.formurl
        							   +"\n automount = "+ this.NexacroPortal_00.automount
        							   +"\n mainframe = "+ this.NexacroPortal_00.mainframe
        							   +"\n form = "+ this.NexacroPortal_00.form);
        };

        this.Button00_onclick = function(obj,e)
        {
        	this.NexacroPortal_00.mount();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };

        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
    if (document.currentScript)
        document.currentScript.dispatchEvent(new CustomEvent("loadModule", { detail: fn }));

    return fn;
}
)();

//# sourceMappingURL=Form_Work.xfdl.js.map
