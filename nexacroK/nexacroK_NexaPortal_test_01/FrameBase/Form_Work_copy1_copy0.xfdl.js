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
            obj = new nexacro.NexacroPortal("NexacroPortal00","41","30","150","100",null,null,null,null,null,null,this);
            obj.set_appkey("nexacroK_mfe_sub1");
            obj.set_apppath("http://172.10.12.45:7070/nexacroK/nexacroK_mfe_sub1");
            obj.set_automount("true");
            obj.set_formurl("");
            obj.set_taborder("0");
            obj.getSetter("text").set("NexacroPortal00");
            this.addChild(obj.name, obj);

            obj = new nexacro.NexacroPortal("NexacroPortal01","205","30","150","100",null,null,null,null,null,null,this);
            obj.set_appkey("nexacroK_mfe_sub2");
            obj.set_apppath("http://172.10.12.45:7070/nexacroK/nexacroK_mfe_sub2");
            obj.set_automount("true");
            obj.set_formurl("");
            obj.set_taborder("1");
            obj.getSetter("text").set("NexacroPortal01");
            this.addChild(obj.name, obj);

            obj = new nexacro.NexacroPortal("NexacroPortal02","375","30","150","100",null,null,null,null,null,null,this);
            obj.set_appkey("nexacroK_mfe_sub3");
            obj.set_apppath("http://172.10.12.45:7070/nexacroK/nexacroK_mfe_sub3");
            obj.set_automount("true");
            obj.set_formurl("");
            obj.set_taborder("2");
            obj.getSetter("text").set("NexacroPortal02");
            this.addChild(obj.name, obj);

            obj = new nexacro.NexacroPortal("NexacroPortal03","535","30","150","100",null,null,null,null,null,null,this);
            obj.set_appkey("nexacroK_mfe_sub4");
            obj.set_apppath("http://172.10.12.45:7070/nexacroK/nexacroK_mfe_sub4");
            obj.set_automount("true");
            obj.set_formurl("");
            obj.set_taborder("2");
            obj.getSetter("text").set("NexacroPortal03");
            this.addChild(obj.name, obj);

            obj = new nexacro.NexacroPortal("NexacroPortal04","700","30","150","100",null,null,null,null,null,null,this);
            obj.set_appkey("nexacroK_mfe_sub5");
            obj.set_apppath("http://172.10.12.45:7070/nexacroK/nexacroK_mfe_sub5");
            obj.set_automount("true");
            obj.set_formurl("");
            obj.set_taborder("3");
            obj.getSetter("text").set("NexacroPortal04");
            this.addChild(obj.name, obj);

            obj = new nexacro.NexacroPortal("NexacroPortal05","865","30","150","100",null,null,null,null,null,null,this);
            obj.set_appkey("nexacroK_mfe_sub6");
            obj.set_apppath("http://172.10.12.45:7070/nexacroK/nexacroK_mfe_sub6");
            obj.set_automount("true");
            obj.set_formurl("");
            obj.set_taborder("4");
            obj.getSetter("text").set("NexacroPortal05");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("TextArea00","40","160","989","400",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00","1100","20","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("all unmout()");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01","1102","84","121","45",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("mount");
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
        this.registerScript("Form_Work_copy1_copy0.xfdl", function(nexacro, system, trace, environment, application) {
        this.NexacroPortal00_onmount = function(obj, e)
        {

        	this.TextArea00.insertText("NexacroPortal00_onmount obj = "+ obj+" NexacroPortal00_onmount e = "+e+"\n");
        	trace("===================================");
        }
        this.NexacroPortal01_onmount = function(obj, e)
        {

        	this.TextArea00.insertText("NexacroPortal01_onmount obj = "+ obj+" NexacroPortal01_onmount e = "+e+"\n");
        	trace("===================================");
        }

        this.NexacroPortal02_onmount = function(obj, e)
        {

        	this.TextArea00.insertText("NexacroPortal02_onmount obj = "+ obj+" NexacroPortal02_onmount e = "+e+"\n");
        	trace("===================================");
        }

        this.NexacroPortal03_onmount = function(obj, e)
        {
        ;
        	this.TextArea00.insertText("NexacroPortal03_onmount obj = "+ obj+" NexacroPortal03_onmount e = "+e+"\n");
        	trace("===================================");
        }

        this.NexacroPortal04_onmount = function(obj, e)
        {

        	this.TextArea00.insertText("NexacroPortal04_onmount obj = "+ obj+" NexacroPortal04_onmount e = "+e+"\n");
        	trace("===================================");
        }

        this.NexacroPortal05_onmount = function(obj, e)
        {

        	this.TextArea00.insertText("NexacroPortal05_onmount obj = "+ obj+" NexacroPortal05_onmount e = "+e+"\n");
        	trace("===================================");
        }



        this.NexacroPortal00_onunmount = function(obj, e)
        {

        	this.TextArea00.insertText("NexacroPortal00_onunmount obj = "+ obj+" NexacroPortal00_onunmount e = "+e+"\n");
        	trace("===================================");
        }
        this.NexacroPortal01_onunmount = function(obj, e)
        {

        	this.TextArea00.insertText("NexacroPortal01_onunmount obj = "+ obj+" NexacroPortal01_onunmount e = "+e+"\n");
        	trace("===================================");
        }

        this.NexacroPortal02_onunmount = function(obj, e)
        {

        	this.TextArea00.insertText("NexacroPortal02_onunmount obj = "+ obj+" NexacroPortal02_onunmount e = "+e+"\n");
        	trace("===================================");
        }

        this.NexacroPortal03_onunmount = function(obj, e)
        {
        ;
        	this.TextArea00.insertText("NexacroPortal03_onunmount obj = "+ obj+" NexacroPortal03_onunmount e = "+e+"\n");
        	trace("===================================");
        }

        this.NexacroPortal04_onunmount = function(obj, e)
        {

        	this.TextArea00.insertText("NexacroPortal04_onunmount obj = "+ obj+" NexacroPortal04_onunmount e = "+e+"\n");
        	trace("===================================");
        }

        this.NexacroPortal05_onunmount = function(obj, e)
        {

        	this.TextArea00.insertText("NexacroPortal05_onunmount obj = "+ obj+" NexacroPortal05_onunmount e = "+e+"\n");
        	trace("===================================");
        }



        this.NexacroPortal00_onerror = function(obj, e)
        {

        	this.TextArea00.insertText("NexacroPortal00_onerrort obj = "+ obj+" NexacroPortal00_onerror e = "+e+"\n");
        	trace("===================================");
        }
        this.NexacroPortal01_onerror = function(obj, e)
        {

        	this.TextArea00.insertText("NexacroPortal01_onerror obj = "+ obj+" NexacroPortal01_onerror e = "+e+"\n");
        	trace("===================================");
        }

        this.NexacroPortal02_onerror = function(obj, e)
        {

        	this.TextArea00.insertText("NexacroPortal02_onerror obj = "+ obj+" NexacroPortal02_onerror e = "+e+"\n");
        	trace("===================================");
        }

        this.NexacroPortal03_onerror = function(obj, e)
        {
        ;
        	this.TextArea00.insertText("NexacroPortal03_onerror obj = "+ obj+" NexacroPortal03_onerror e = "+e+"\n");
        	trace("===================================");
        }

        this.NexacroPortal04_onerror = function(obj, e)
        {

        	this.TextArea00.insertText("NexacroPortal04_onerror obj = "+ obj+" NexacroPortal04_onerror e = "+e+"\n");
        	trace("===================================");
        }

        this.NexacroPortal05_onerror = function(obj, e)
        {

        	this.TextArea00.insertText("NexacroPortal05_onerror obj = "+ obj+" NexacroPortal05_onerror e = "+e+"\n");
        	trace("===================================");
        }

        this.Button00_onclick = function(obj,e)
        {
        	this.TextArea00.deleteText();
        	this.NexacroPortal00.unmount();
        	this.NexacroPortal01.unmount();
        	this.NexacroPortal02.unmount();
        	this.NexacroPortal03.unmount();
        	this.NexacroPortal04.unmount();
        	this.NexacroPortal05.unmount();

        };

        this.Button01_onclick = function(obj,e)
        {
        	this.TextArea00.deleteText();
        	this.NexacroPortal00.mount();
        	this.NexacroPortal01.mount();
        	this.NexacroPortal02.mount();
        	this.NexacroPortal03.mount();
        	this.NexacroPortal04.mount();
        	this.NexacroPortal05.mount();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.NexacroPortal00.addEventHandler("onerror",this.NexacroPortal00_onerror,this);
            this.NexacroPortal00.addEventHandler("onmount",this.NexacroPortal00_onmount,this);
            this.NexacroPortal00.addEventHandler("onunmount",this.NexacroPortal00_onunmount,this);
            this.NexacroPortal01.addEventHandler("onerror",this.NexacroPortal01_onerror,this);
            this.NexacroPortal01.addEventHandler("onmount",this.NexacroPortal01_onmount,this);
            this.NexacroPortal01.addEventHandler("onunmount",this.NexacroPortal01_onunmount,this);
            this.NexacroPortal02.addEventHandler("onerror",this.NexacroPortal02_onerror,this);
            this.NexacroPortal02.addEventHandler("onmount",this.NexacroPortal02_onmount,this);
            this.NexacroPortal02.addEventHandler("onunmount",this.NexacroPortal02_onunmount,this);
            this.NexacroPortal03.addEventHandler("onerror",this.NexacroPortal03_onerror,this);
            this.NexacroPortal03.addEventHandler("onmount",this.NexacroPortal03_onmount,this);
            this.NexacroPortal03.addEventHandler("onunmount",this.NexacroPortal03_onunmount,this);
            this.NexacroPortal04.addEventHandler("onerror",this.NexacroPortal04_onerror,this);
            this.NexacroPortal04.addEventHandler("onmount",this.NexacroPortal04_onmount,this);
            this.NexacroPortal04.addEventHandler("onunmount",this.NexacroPortal04_onunmount,this);
            this.NexacroPortal05.addEventHandler("onerror",this.NexacroPortal05_onerror,this);
            this.NexacroPortal05.addEventHandler("onmount",this.NexacroPortal05_onmount,this);
            this.NexacroPortal05.addEventHandler("onunmount",this.NexacroPortal05_onunmount,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
        };

        this.loadIncludeScript("Form_Work_copy1_copy0.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
    if (document.currentScript)
        document.currentScript.dispatchEvent(new CustomEvent("loadModule", { detail: fn }));

    return fn;
}
)();

//# sourceMappingURL=Form_Work_copy1_copy0.xfdl.js.map
