(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("nexacro_api");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("Dataset00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "Column0","size" : "256","type" : "STRING"}]},"Rows" : [{"Column0" : "1"},{"Column0" : "2"},{"Column0" : "3"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Button("Button00","42","54","245","46",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("nexacro.loadStyle(\"xcssrc::bb.xcss\");");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01","40","158","247","42",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00.set_url(\"Environment::nexacro_open.xfdl\")");
            this.addChild(obj.name, obj);

            obj = new nexacro.Div("Div00","300","50","470","270",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button02","42","330","176","41",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("getEnvironmentVariable");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button03","40","381","176","41",null,null,null,null,null,null,this);
            obj.set_border("2px dotted");
            obj.set_taborder("4");
            obj.set_text("getCookieVariable");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button04","40","431","176","41",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("getApplicationVariable");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("Edit00","285","335","199","41",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_value("env1");
            obj.set_text("env1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button05","40","104","247","46",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("nexacro.loadStyle(\"xcssrc::cc.xcss\");");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button06","41","211","244","42",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Div00.set_url(\"\")");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this.Div00
            obj = new nexacro.Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new nexacro.Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("nexacro_api.xfdl", function(nexacro, system, trace, environment, application) {

        this.Button00_onclick = function(obj,e)
        {
        	nexacro.loadStyle("xcssrc::bb.xcss");
        	trace("aaaaa");
        };

        this.Button01_onclick = function(obj,e)
        {
        	this.Div00.set_url("Environment::nexacro_open.xfdl");
        };

        this.TextArea00_onkeydown = function(obj,e)
        {
        	trace("TextArea00_onkeydown ");
        };

        this.nexacro_api_onkeydown = function(obj,e)
        {
        	trace("nexacro_api_onkeydown ");
        };

        this.Button01_onkeydown = function(obj,e)
        {
        	trace("Button01_onkeydown ");
        };

        this.Grid00_onkeydown = function(obj,e)
        {
        	trace("Grid00_onkeydown ");
        };

        this.Button01_onsetfocus = function(obj,e)
        {
        	trace("Button01_onsetfocus ");
        };

        this.Button02_onclick = function(obj,e)
        {
        	var text = "prop: "+  this.Edit00.value + " value: " + nexacro.getEnvironmentVariable(this.Edit00.value);
        	trace(text);
        };

        this.Button03_onclick = function(obj,e)
        {
        	var text = "prop: "+  this.Edit00.value + " value: " + nexacro.getCookieVariable(this.Edit00.value);
        	trace(text);
        };

        this.Button04_onclick = function(obj,e)
        {
        	var text = "prop: "+  this.Edit00.value + " value: " + nexacro.getApplication()[this.Edit00.value];
        	trace(text);
        };

        this.Button06_onclick = function(obj,e)
        {
        	this.Div00.set_url("");
        };

        this.Button05_onclick = function(obj,e)
        {
        	nexacro.loadStyle("xcssrc::cc.xcss");
        	trace("aaaaa");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown",this.nexacro_api_onkeydown,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button01.addEventHandler("onkeydown",this.Button01_onkeydown,this);
            this.Button01.addEventHandler("onsetfocus",this.Button01_onsetfocus,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
            this.Button04.addEventHandler("onclick",this.Button04_onclick,this);
            this.Button05.addEventHandler("onclick",this.Button05_onclick,this);
            this.Button06.addEventHandler("onclick",this.Button06_onclick,this);
            this.Button06.addEventHandler("onkeydown",this.Button01_onkeydown,this);
            this.Button06.addEventHandler("onsetfocus",this.Button01_onsetfocus,this);
        };

        this.loadIncludeScript("nexacro_api.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
