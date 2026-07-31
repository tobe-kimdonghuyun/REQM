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
            obj = new nexacro.NexacroPortal("NexacroPortal00","15","30","619","583",null,null,null,null,null,null,this);
            obj.set_appkey("DynamicSample");
            obj.set_apppath("http://172.10.12.45:7070/nexacroK/DynamicSample");
            obj.set_automount("true");
            obj.set_formurl("InvisibleComp::DatasetSample.xfdl");
            obj.set_taborder("0");
            obj.getSetter("text").set("NexacroPortal00");
            this.addChild(obj.name, obj);

            obj = new nexacro.NexacroPortal("NexacroPortal01","700","30","619","523",null,null,null,null,null,null,this);
            obj.set_appkey("DataObjectRestSample");
            obj.set_apppath("http://172.10.12.45:7070/nexacroK/DataObjectRestSample");
            obj.set_automount("true");
            obj.set_formurl("");
            obj.set_taborder("1");
            obj.getSetter("text").set("NexacroPortal01");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("TextArea00","882","594","396","123",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_wordWrap("char");
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
        let objPortal = null;
        let eventPortal = null;

        let objPortal_sub = null;
        let eventPortal_sub = null;

        this.Button01_onclick = function(obj,e)
        {
        	this.TextArea00.deleteText();
        	if(this.Radio00.value == 0){
        		this.TextArea00.insertText("NexacroPortal00 appkey = "+this.NexacroPortal00.appkey
        								   +"\n apppath = "+ this.NexacroPortal00.apppath
        								   +"\n formurl = "+ this.NexacroPortal00.formurl
        								   +"\n automount = "+ this.NexacroPortal00.automount
        								   +"\n mainframe = "+ this.NexacroPortal00.mainframe
        								   +"\n form = "+ this.NexacroPortal00.form);
        	}else{
        		this.TextArea00.insertText("NexacroPortal01 appkey = "+this.NexacroPortal01.appkey
        								   +"\n apppath = "+ this.NexacroPortal01.apppath
        								   +"\n formurl = "+ this.NexacroPortal01.formurl
        								   +"\n automount = "+ this.NexacroPortal01.automount
        								   +"\n mainframe = "+ this.NexacroPortal01.mainframe
        								   +"\n form = "+ this.NexacroPortal01.form);
        	}
        };

        this.Button00_onclick = function(obj,e)
        {
        	if(this.Radio00.value == 0)
        		this.NexacroPortal00.mount();
        	else
        		this.NexacroPortal01.mount();
        };
        this.Button02_onclick = function(obj,e)
        {
        	if(this.Radio00.value == 0){
        		this.NexacroPortal00.appkey="nexacroK_mfe_sub6";
        		this.TextArea00.deleteText();
        		this.TextArea00.insertText("NexacroPortal00.appkey set" + this.NexacroPortal00.appkey);
        	}else{
        		this.NexacroPortal01.appkey="nexacroK_mfe_sub6";
        		this.TextArea00.deleteText();
        		this.TextArea00.insertText("NexacroPortal01.appkey set" + this.NexacroPortal01.appkey);
        	}
        };

        this.Button00_00_onclick = function(obj,e)
        {
        	if(this.Radio00.value == 0){
        		this.NexacroPortal00.unmount();
        	}else{
        		this.NexacroPortal01.unmount();
        	}

        };

        this.Button03_onclick = function(obj,e)
        {
        	if(this.Radio00.value == 0){
        		this.NexacroPortal00.apppath="http://172.10.12.45:9090/nexacroK/nexacroK_mfe_sub6";
        		this.TextArea00.deleteText();
        		this.TextArea00.insertText("NexacroPortal00.apppath set" + this.NexacroPortal00.apppath);
        	}else{
        		this.NexacroPortal01.apppath="http://172.10.12.45:9090/nexacroK/nexacroK_mfe_sub6";
        		this.TextArea00.deleteText();
        		this.TextArea00.insertText("NexacroPortal01.apppath set" + this.NexacroPortal01.apppath);
        	}

        };

        this.Button04_onclick = function(obj,e)
        {
        	if(this.Radio00.value == 0){
        		this.NexacroPortal00.formurl = "FrameBase::Form_Work.xfdl";
        		this.TextArea00.deleteText();
        		this.TextArea00.insertText("NexacroPortal00.formurl set" + this.NexacroPortal00.formurl);
        	}else{
        		this.NexacroPortal01.formurl = "FrameBase::Form_Work.xfdl";
        		this.TextArea00.deleteText();
        		this.TextArea00.insertText("NexacroPortal01.formurl set" + this.NexacroPortal01.formurl);
        	}
        };

        this.Button05_onclick = function(obj,e)
        {
        	if(this.Radio00.value == 0){
        		this.NexacroPortal00.automount ="true";
        		this.TextArea00.deleteText();
        		this.TextArea00.insertText("NexacroPortal00.automount true set" + this.NexacroPortal00.automount);
        	}else{
        		this.NexacroPortal01.automount ="true";
        		this.TextArea00.deleteText();
        		this.TextArea00.insertText("NexacroPortal01.automount true set" + this.NexacroPortal01.automount);
        	}
        };

        this.Button06_onclick = function(obj,e)
        {


        	if(this.Radio00.value == 0){
        		this.NexacroPortal00.automount = "false";
        		this.TextArea00.deleteText();
        		this.TextArea00.insertText("NexacroPortal00.automount false set" + this.NexacroPortal00.automount);
        	}else{
        		this.NexacroPortal01.automount = "false";
        		this.TextArea00.deleteText();
        		this.TextArea00.insertText("NexacroPortal01.automount false set" + this.NexacroPortal01.automount);
        	}
        };

        this.Button07_onclick = function(obj,e)
        {

        	if(this.Radio00.value == 0){
        		this.NexacroPortal00.automount ="";
        		this.NexacroPortal00.formurl ="";
        		this.NexacroPortal00.apppath="";
        		this.NexacroPortal00.appkey="";
        		this.TextArea00.deleteText();
        		this.TextArea00.insertText("NexacroPortal00 properteis reset");
        	}else{
        		this.NexacroPortal01.automount ="";
        		this.NexacroPortal01.formurl ="";
        		this.NexacroPortal01.apppath="";
        		this.NexacroPortal01.appkey="";
        		this.TextArea00.deleteText();
        		this.TextArea00.insertText("NexacroPortal01 properteis reset");
        	}

        };

        this.Button08_onclick = function(obj,e)
        {


        	if(this.Radio00.value == 0){
        		this.TextArea00.deleteText();
        		this.TextArea00.insertText(".NexacroPortal00.mainframe = "+ this.NexacroPortal00.mainframe);
        	}else{
        		this.TextArea00.deleteText();
        		this.TextArea00.insertText(".NexacroPortal01.mainframe = "+ this.NexacroPortal01.mainframe);
        	}
        };

        this.Button09_onclick = function(obj,e)
        {
        	if(this.Radio00.value == 0){
        		this.TextArea00.deleteText();
        		this.TextArea00.insertText(".NexacroPortal00.form = "+ this.NexacroPortal00.form);
        	}else{
        		this.TextArea00.deleteText();
        		this.TextArea00.insertText(".NexacroPortal01.form = "+ this.NexacroPortal01.form);
        	}
        };
        this.NexacroPortal00_onmount = function(obj, e)
        {
        	//this.TextArea00.deleteText();
        	this.TextArea00.insertText("NexacroPortal00_onmount obj = "+ obj+" NexacroPortal00_onmount e = "+e+"\n");
        	objPortal = obj;
        	eventPortal = e;
        	trace("===================================");
        }
        this.NexacroPortal01_onmount = function(obj, e)
        {
        	//this.TextArea00.deleteText();;
        	this.TextArea00.insertText("NexacroPortal01_onmount obj = "+ obj+" NexacroPortal01_onmount e = "+e+"\n");
        	objPortal_sub = obj;
        	eventPortal_sub = e;
        	trace("===================================");
        }
        this.NexacroPortal00_onunmount = function(obj, e)
        {
        	//this.TextArea00.deleteText();
        	this.TextArea00.insertText("NexacroPortal00_onunmount obj = "+ obj
        								+" NexacroPortal00_onmount e = "+e+"\n");
        	objPortal = null;
        	eventPortal = null;
        	trace(obj)
        	trace(e);
        	trace("===================================");
        }
        this.NexacroPortal01_onunmount = function(obj, e)
        {
        	//this.TextArea00.deleteText();
        	this.TextArea00.insertText("NexacroPortal01_onunmount obj = "+ obj
        								+" NexacroPortal01_onmount e = "+e+"\n");
        	objPortal_sub = null;
        	eventPortal_sub = null;
        	trace(obj)
        	trace(e);
        	trace("===================================");
        }
        this.NexacroPortal00_onerror = function(obj, e)
        {
        	//this.TextArea00.deleteText();
        	this.TextArea00.insertText("NexacroPortal00_onerror obj = "+ obj
        								+" NexacroPortal00_onerror e = "+e+"\n");
        }

        this.NexacroPortal01_onerror = function(obj, e)
        {
        	//this.TextArea00.deleteText();
        	this.TextArea00.insertText("NexacroPortal01_onerror obj = "+ obj
        								+" NexacroPortal01_onerror e = "+e+"\n");
        }


        this.Button10_onclick = function(obj,e)
        {
        	this.TextArea00.deleteText();
        };

        this.Button11_onclick = function(obj,e)
        {
        	objPortal.get_form().CheckBox00.value=true;
        	objPortal.get_form().CheckBox01.value=true;
        	objPortal.get_form().CheckBox02.value=true;

        };


        this.Button11_00_onclick = function(obj,e)
        {
        	objPortal.get_form().Button00.click();
        };

        this.Button11_00_00_onclick = function(obj,e)
        {
        	objPortal.get_form().customFunction();
        };

        this.customFunction = function()
        {
        	alert("nexacroK_NexaPortal_test_00 alert");
        }

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
