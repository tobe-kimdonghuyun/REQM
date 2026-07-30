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
            obj = new nexacro.NexacroPortal("NexacroPortal00","41","30","619","523",null,null,null,null,null,null,this);
            obj.set_appkey("nexacroK_mfe_sub2");
            obj.set_apppath("http://172.10.12.45:9090/nexacroK/nexacroK_mfe_sub2");
            obj.set_automount("true");
            obj.set_formurl("");
            obj.set_taborder("0");
            obj.getSetter("text").set("Button00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01","682","33","138","54",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("NexacroPortal\r\nproperties");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("TextArea00","680","257","396","323",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00","830","34","117","52",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("mount function");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00_00","960","34","117","52",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("unmount function");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button02","681","93","139","47",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("appkey set");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button03","828","93","119","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("apppath set");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button04","961","93","121","51",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("formurl set");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button05","685","152","133","45",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("automount true");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button06","829","152","125","45",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("automount false");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button07","972","151","113","51",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("properties rest");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button08","681","207","130","44",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("mainframe");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button09","832","208","98","43",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("form");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button10","940","211","144","42",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("TextArea00.deleteText");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button11","40","568","170","72",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("NexacroPortal에 연결된 화면의 checkbox 값 변경 하기");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button11_00","220","568","170","72",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("NexacroPortal에 연결된 화면의 컴포넌트 함수 실행");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button11_00_00","400","568","170","72",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("NexacroPortal에 연결된 화면에 선언된 함수 호출");
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
        this.registerScript("Form_Work_copy1.xfdl", function(nexacro, system, trace, environment, application) {
        let objPortal = null;
        let eventPortal = null;
        this.Button01_onclick = function(obj,e)
        {
        	this.TextArea00.deleteText();
        	this.TextArea00.insertText(" appkey = "+this.NexacroPortal00.appkey
        							   +"\n apppath = "+ this.NexacroPortal00.apppath
        							   +"\n formurl = "+ this.NexacroPortal00.formurl
        							   +"\n automount = "+ this.NexacroPortal00.automount
        							   +"\n mainframe = "+ this.NexacroPortal00.mainframe
        							   +"\n form = "+ this.NexacroPortal00.form);
        };

        this.Button00_onclick = function(obj,e)
        {
        	this.NexacroPortal00.mount();
        };
        this.Button02_onclick = function(obj,e)
        {
        	this.NexacroPortal00.appkey="nexacroK_mfe_sub6";
        	this.TextArea00.deleteText();
        	this.TextArea00.insertText("NexacroPortal00.appkey set" + this.NexacroPortal00.appkey);
        };

        this.Button00_00_onclick = function(obj,e)
        {
        	this.NexacroPortal00.unmount();
        };

        this.Button03_onclick = function(obj,e)
        {
        	this.NexacroPortal00.apppath="http://172.10.12.45:9090/nexacroK/nexacroK_mfe_sub6";
        	this.TextArea00.deleteText();
        	this.TextArea00.insertText("NexacroPortal00.apppath set" + this.NexacroPortal00.apppath);
        };

        this.Button04_onclick = function(obj,e)
        {
        	this.NexacroPortal00.formurl = "FrameBase::Form_Work.xfdl";
        	this.TextArea00.deleteText();
        	this.TextArea00.insertText("NexacroPortal00.formurl set" + this.NexacroPortal00.formurl);
        };

        this.Button05_onclick = function(obj,e)
        {

        	this.NexacroPortal00.automount ="true";
        	this.TextArea00.deleteText();
        	this.TextArea00.insertText("NexacroPortal00.automount true set" + this.NexacroPortal00.automount);
        };

        this.Button06_onclick = function(obj,e)
        {
        	this.NexacroPortal00.automount = "false";
        	this.TextArea00.deleteText();
        	this.TextArea00.insertText("NexacroPortal00.automount false set" + this.NexacroPortal00.automount);
        };

        this.Button07_onclick = function(obj,e)
        {
        	this.NexacroPortal00.automount ="";
        	this.NexacroPortal00.formurl ="";
        	this.NexacroPortal00.apppath="";
        	this.NexacroPortal00.appkey="";
        };

        this.Button08_onclick = function(obj,e)
        {
        	this.TextArea00.deleteText();
        	this.TextArea00.insertText(".NexacroPortal00.mainframe = "+ this.NexacroPortal00.mainframe);
        };

        this.Button09_onclick = function(obj,e)
        {
        	this.TextArea00.deleteText();
        	this.TextArea00.insertText("NexacroPortal00.form = "+ this.NexacroPortal00.form);
        };
        this.NexacroPortal00_onmount = function(obj, e)
        {
        	this.TextArea00.deleteText();;
        	this.TextArea00.insertText("NexacroPortal00_onmount obj = "+ obj+" NexacroPortal00_onmount e = "+e);
        	objPortal = obj;
        	eventPortal = e;
        // 	trace(obj)
        // 	trace(e);
        // 	trace(e.appkey);
        	trace("===================================");
        }

        this.NexacroPortal00_onunmount = function(obj, e)
        {
        	this.TextArea00.deleteText();
        	this.TextArea00.insertText("NexacroPortal00_onunmount obj = "+ obj
        								+" NexacroPortal00_onmount e = "+e);
        	objPortal = null;
        	eventPortal = null;
        	trace(obj)
        	trace(e);
        	trace("===================================");
        }

        this.NexacroPortal00_onerror = function(obj, e)
        {
        	this.TextArea00.deleteText();
        	this.TextArea00.insertText("NexacroPortal00_onerror obj = "+ obj
        								+" NexacroPortal00_onerror e = "+e);
        }
        this.Button10_onclick = function(obj,e)
        {
        	this.TextArea00.deleteText();
        };

        this.Button11_onclick = function(obj,e)
        {
        	//trace(objPortal);
        	//trace(eventPortal);
        	//trace(eventPortal.appkey);
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
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button00_00.addEventHandler("onclick",this.Button00_00_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
            this.Button04.addEventHandler("onclick",this.Button04_onclick,this);
            this.Button05.addEventHandler("onclick",this.Button05_onclick,this);
            this.Button06.addEventHandler("onclick",this.Button06_onclick,this);
            this.Button07.addEventHandler("onclick",this.Button07_onclick,this);
            this.Button08.addEventHandler("onclick",this.Button08_onclick,this);
            this.Button09.addEventHandler("onclick",this.Button09_onclick,this);
            this.Button10.addEventHandler("onclick",this.Button10_onclick,this);
            this.Button11.addEventHandler("onclick",this.Button11_onclick,this);
            this.Button11_00.addEventHandler("onclick",this.Button11_00_onclick,this);
            this.Button11_00_00.addEventHandler("onclick",this.Button11_00_00_onclick,this);
        };

        this.loadIncludeScript("Form_Work_copy1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
    if (document.currentScript)
        document.currentScript.dispatchEvent(new CustomEvent("loadModule", { detail: fn }));

    return fn;
}
)();

//# sourceMappingURL=Form_Work_copy1.xfdl.js.map
