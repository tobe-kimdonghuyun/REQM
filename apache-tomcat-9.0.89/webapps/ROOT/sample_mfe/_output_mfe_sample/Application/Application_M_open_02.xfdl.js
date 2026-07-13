(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Application_M_open_02");
            this.set_titletext("Application_M_open_02");
            this.getSetter("classname").set("23688_ShowModal_02");
            this.getSetter("inheritanceid").set("");
            this.getSetter("position").set("absolute");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(904,520);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.Static("sta_popupdiv00","6","10","289","25",null,null,null,null,null,null,this);
            obj.set_text("[Application_M_open_02]");
            obj.getSetter("transparenthittest").set("true");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00","88","100","120","42",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("close()");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("Edit00","15","51","281","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01","232","103","135","35",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_Button0");
            obj.set_taborder("3");
            obj.set_text("open");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button02","240","149","135","35",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_Button1");
            obj.set_taborder("3");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);

            obj = new nexacro.CheckBox("CheckBox00","184","10","101","36",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("CheckBox00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("Edit01","60","229","87","34",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("Edit02","160","227","82","37",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button03","276","215","140","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("get http");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button04","275","271","140","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("set http variable");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button09","276","317","140","40",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("remove http variable");
            this.addChild(obj.name, obj);

            obj = new nexacro.ImageViewer("ImageViewer00","64","405","251","97",null,null,null,null,null,null,this);
            obj.set_image("URL(\"https://www.google.co.kr/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png\")");
            obj.set_taborder("11");
            obj.set_text("ImageViewer00");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","",904,520,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Application_M_open_02.xfdl", function(nexacro, system, trace, environment, application) {

        this.Button00_onclick = function(obj,  e)
        {
        	var obj = "return OK";

        	this.close(obj);
        	//this.close(this.Dataset00.saveXML());
        }

        this.ChildFrame_M_showModeless_46607_02_onload = function(obj, e)
        {
        	this.Edit00.set_value("{arg1:"+ this.parent.arg1 +", arg2:"+ this.parent.arg2 +", arg3:"+ this.parent.arg3 +"}");
        	//alert("aa");
        }

        this.Button01_onclick = function(obj,e)
        {
        	//var ret = nexacro.open("Open", "Application::Application_M_open_02.xfdl", this.getOwnerFrame(), {arg1:'aaa', arg2:this.Edit00.value, arg3:this.CheckBox00.value}, "showtitlebar=true showstatusbar=false", 100, 100);
            var ret = nexacro.open("Open1", "Environment::Environment_httpvariable.xfdl", this.getOwnerFrame(), {arg1:'aaa', arg2:this.Edit00.value, arg3:this.CheckBox00.value}, "showtitlebar=true showstatusbar=false", 100, 100);

        };

        this.Button02_onclick = function(obj,e)
        {
        	nexacro.setEnvironmentVariable(this.Edit01.value, this.Edit02.value);
        };

        this.Button03_onclick = function(obj,e)
        {
        	this.Edit01.set_value( nexacro.getHTTPHeaderVariable(this.Edit01.value));
        };

        this.Button04_onclick = function(obj,e)
        {
        	 nexacro.setHTTPHeaderVariable(this.Edit01.value, this.Edit02.value);
        };

        this.Button09_onclick = function(obj,e)
        {
        nexacro.removeHTTPHeaderVariable(this.Edit01.value);

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ChildFrame_M_showModeless_46607_02_onload,this);
            this.sta_popupdiv00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
            this.Button04.addEventHandler("onclick",this.Button04_onclick,this);
            this.Button09.addEventHandler("onclick",this.Button09_onclick,this);
        };

        this.loadIncludeScript("Application_M_open_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
