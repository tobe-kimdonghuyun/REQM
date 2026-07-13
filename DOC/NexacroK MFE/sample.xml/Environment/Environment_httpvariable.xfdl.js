(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Environment_httpvariable");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(872,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.GroupBox("grb01_00","16","286","504","88",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("cookie variable");
            this.addChild(obj.name, obj);

            obj = new nexacro.GroupBox("grb01","14","181","504","88",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("environment variable");
            this.addChild(obj.name, obj);

            obj = new nexacro.GroupBox("grb00","8","59","512","101",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("http variable");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00","25","102","140","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("get ");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01","174","102","140","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("set ");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("Edit00","50","27","114","26",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("Edit01","253","26","135","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","30","26","32","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("id");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static01","194","26","86","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("value");
            this.addChild(obj.name, obj);

            obj = new nexacro.Div("Div00","18","394","324","185",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button02","367","395","223","51",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("div.set_url(\"Environment::strres1.xfdl\")");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button03","367","461","223","51",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("div.set_url(\"Environment::strres.xfdl\")");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button04","30","210","130","42",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("get");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button05","176","210","134","42",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("set");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button06","327","210","139","42",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("remove");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button07","528","209","228","42",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Get localstorage(runtime)");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button08","528","293","102","45",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("open");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button09","326","102","140","40",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("remove");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button04_00","32","315","130","42",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("get");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button05_00","178","315","134","42",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("set");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button06_00","329","315","139","42",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("remove");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("sta00","451","24","202","32",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this.Div00
            obj = new nexacro.Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new nexacro.Layout("default","",872,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Environment_httpvariable.xfdl", function(nexacro, system, trace, environment, application) {

        this.Button00_onclick = function(obj,e)
        {
        	this.sta00.text = ( nexacro.getHTTPHeaderVariable(this.Edit00.value));
        };

        this.Button01_onclick = function(obj,e)
        {
        	 nexacro.setHTTPHeaderVariable(this.Edit00.value, this.Edit01.value);
        	 this.Edit01.value = "";

        };

        this.Button02_onclick = function(obj,e)
        {
        	this.Div00.set_url("Environment::strres1.xfdl");
        };

        this.Button03_onclick = function(obj,e)
        {
        	this.Div00.set_url("Environment::strres.xfdl");
        };

        this.Button04_onclick = function(obj,e)
        {
        	this.Edit01.set_value( nexacro.getEnvironmentVariable(this.Edit00.value));


        };

        this.Button05_onclick = function(obj,e)
        {
        	nexacro.setEnvironmentVariable(this.Edit00.value, this.Edit01.value);
        };

        this.Button06_onclick = function(obj,e)
        {
        	nexacro.removeEnvironmentVariable(this.Edit00.value);
        	 this.Edit01.value = "";
        	 this.Edit00.value = "";
        };

        this.Button07_onclick = function(obj,e)
        {
        	for(var i in nexacro._enginevar)
        	{
        	//trace("nexacro._enginevar type:"+ nexacro._enginevar[i]);
        	var aa = nexacro._enginevar[i];
        		for (var j in aa)
        		{
        		trace( "nexacro._enginevar type:" + i  +  "key:"+ j + " keytype:" + aa[j].type +  " keyvalue:"+ aa[j].value);
        		}
        	}
        };

        this.Button08_onclick = function(obj,e)
        {
        	var ret = nexacro.open("Open", "Application::Application_M_open_02.xfdl", this.getOwnerFrame(), {arg1:'aaa'}, "showtitlebar=true showstatusbar=false", 100, 100);

        };

        this.Button09_onclick = function(obj,e)
        {
        	 nexacro.removeHTTPHeaderVariable(this.Edit00.value);
        };

        this.Button09_onmouseleave = function(obj,e)
        {
        	trace("Button09_onmouseleave " + e.button);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
            this.Button04.addEventHandler("onclick",this.Button04_onclick,this);
            this.Button05.addEventHandler("onclick",this.Button05_onclick,this);
            this.Button06.addEventHandler("onclick",this.Button06_onclick,this);
            this.Button07.addEventHandler("onclick",this.Button07_onclick,this);
            this.Button08.addEventHandler("onclick",this.Button08_onclick,this);
            this.Button09.addEventHandler("onclick",this.Button09_onclick,this);
            this.Button09.addEventHandler("onmouseleave",this.Button09_onmouseleave,this);
            this.Button04_00.addEventHandler("onclick",this.Button04_onclick,this);
            this.Button05_00.addEventHandler("onclick",this.Button05_onclick,this);
            this.Button06_00.addEventHandler("onclick",this.Button06_onclick,this);
        };

        this.loadIncludeScript("Environment_httpvariable.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
