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
            obj.set_appkey("nexacroK_mfe_sub1");
            obj.set_apppath("http://172.10.12.45:9090/nexacroK/nexacroK_mfe_sub1");
            obj.set_automount("true");
            obj.set_taborder("0");
            obj.getSetter("text").set("Button00");
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
        this.registerScript("Form_Work_copy0_copy0.xfdl", function(nexacro, system, trace, environment, application) {

        this.Button01_onclick = function(obj,e)
        {
        	this.TextArea00.deleteText();
        	this.TextArea00.insertText(" appkey = "+this.NexacroPortal_00.appkey
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
        this.Button02_onclick = function(obj,e)
        {
        	this.NexacroPortal_00.appkey="nexacroK_mfe_sub2";
        };

        this.Button00_00_onclick = function(obj,e)
        {
        	this.NexacroPortal_00.unmount();
        };

        this.Button03_onclick = function(obj,e)
        {
        	this.NexacroPortal_00.apppath="http://172.10.12.45:7070/nexacroK/nexacroK_mfe_sub2";
        };

        this.Button04_onclick = function(obj,e)
        {
        	//this.NexacroPortal_00.formurl = "FrameBase::Form_Work_00.xfdl";
        };

        this.Button05_onclick = function(obj,e)
        {

        	this.NexacroPortal_00.automount ="true";
        };

        this.Button06_onclick = function(obj,e)
        {
        	this.NexacroPortal_00.automount = "false";
        };

        this.Button07_onclick = function(obj,e)
        {
        	this.NexacroPortal_00.unmount();
        	this.NexacroPortal_00.automount ="";
        	this.NexacroPortal_00.formurl ="";
        	this.NexacroPortal_00.apppath="";
        	this.NexacroPortal_00.appkey="";
        };

        this.Button08_onclick = function(obj,e)
        {
        	this.TextArea00.deleteText();
        	this.TextArea00.insertText(".NexacroPortal_00.mainframe = "+ this.NexacroPortal_00.mainframe);
        };

        this.Button09_onclick = function(obj,e)
        {
        	this.TextArea00.deleteText();
        	this.TextArea00.insertText("NexacroPortal_00.form = "+ this.NexacroPortal_00.form);
        };//onmount="NexacroPortal_00_onmount" onunmount="NexacroPortal_00_onunmount" onerror="NexacroPortal_00_onerror"/>
        this.NexacroPortal_00_onmount = function(obj, e)
        {
        	this.TextArea00.deleteText();;
        	this.TextArea00.insertText("NexacroPortal_00_onmount obj = "+ obj
        								+" NexacroPortal_00_onmount e = "+e);
        }

        this.NexacroPortal_00_onunmount = function(obj, e)
        {
        	this.TextArea00.deleteText();
        	this.TextArea00.insertText("NexacroPortal_00_onunmount obj = "+ obj
        								+" NexacroPortal_00_onmount e = "+e);
        }

        this.NexacroPortal_00_onerror = function(obj, e)
        {
        	this.TextArea00.deleteText();
        	this.TextArea00.insertText("NexacroPortal_00_onerror obj = "+ obj
        								+" NexacroPortal_00_onerror e = "+e);
        }
        this.Button10_onclick = function(obj,e)
        {
        	this.NexacroPortal_00.redraw();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.NexacroPortal_00.addEventHandler("onerror",this.NexacroPortal_00_onerror,this);
            this.NexacroPortal_00.addEventHandler("onmount",this.NexacroPortal_00_onmount,this);
            this.NexacroPortal_00.addEventHandler("onunmount",this.NexacroPortal_00_onunmount,this);
        };

        this.loadIncludeScript("Form_Work_copy0_copy0.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
    if (document.currentScript)
        document.currentScript.dispatchEvent(new CustomEvent("loadModule", { detail: fn }));

    return fn;
}
)();

//# sourceMappingURL=Form_Work_copy0_copy0.xfdl.js.map
