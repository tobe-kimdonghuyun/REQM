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
                this._setFormPosition(990,520);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("Dataset00", this);
            obj.set_keystring("G:Column0");
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "Column0","prop" : "TEXT","size" : "256","sumtext" : "44","type" : "STRING"},{"id" : "Column1","prop" : "TEXT","size" : "256","sumtext" : "11","type" : "INT"}]},"Rows" : [{"Column0" : "100","Column1" : "100"},{"Column0" : "200","Column1" : "200"},{"Column0" : "100","Column1" : "300"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.GroupBox("grb00","350","77","441","64",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("open argument");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00","11","114","135","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("close()");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("Edit00","365","95","281","32",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01","11","75","135","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("open");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button02","10","155","210","35",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_Button1");
            obj.set_taborder("3");
            obj.set_text("setEnvironmentVariable");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("Edit01","10","205","87","34",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("Edit02","110","203","82","37",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button03","230","215","211","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("get http");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button04","229","271","211","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("set http variable");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button09","230","317","211","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("remove http variable");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button05","11","297","138","33",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Button05");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button06","230","155","210","35",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_Button1");
            obj.set_taborder("10");
            obj.set_text("getEnvironmentVariable");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button07","230","368","205","35",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("service.set_url");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button08","230","423","205","35",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("serive.url");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button10","11","344","186","33",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("savexml GlobalDataset ");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid00","445","215","261","245",null,null,null,null,null,null,this);
            obj.set_binddataset("gds");
            obj.set_taborder("15");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("Edit03","736","403","148","36",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            this.addChild(obj.name, obj);

            obj = new nexacro.CheckBox("chk00","664","89","162","38",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("chk00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Div("div00","65","465","233","188",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("div00");
            obj.set_url("Application::FontTest.xfdl");
            this.addChild(obj.name, obj);

            obj = new nexacro.Div("div01","343","472","547","218",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("div01");
            obj.set_url("Environment::history.xfdl");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01_00","146","75","185","35",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("open parent=null");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00","10","390","120","37",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("popupframe");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01_00_00","146","116","185","35",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("open parent=null");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt00","150","33","149","27",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_value("open");
            obj.set_text("open");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edurl","350","33","530","27",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_value("Environment::Environment_httpvariable.xfdl");
            obj.set_text("Environment::Environment_httpvariable.xfdl");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn01","11","255","138","32",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("TEXT(\"Key00\",\"btn01\")");
            this.addChild(obj.name, obj);

            obj = new nexacro.Div("div02","730","159","230","241",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("div02");
            obj.set_url("Environment::nexacro_api.xfdl");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this.div00
            obj = new nexacro.Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div01
            obj = new nexacro.Layout("default","",0,0,this.div01.form,function(p){});
            this.div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div02
            obj = new nexacro.Layout("default","",0,0,this.div02.form,function(p){});
            this.div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new nexacro.Layout("default","",990,520,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new nexacro.BindItem("item0","Edit03","value","app_ds","Column0");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Application::FontTest.xfdl");
            this._addPreloadList("fdl","Environment::history.xfdl");
            this._addPreloadList("fdl","Environment::nexacro_api.xfdl");
        };
        
        // User Script
        this.registerScript("openurl.xfdl", function(nexacro, system, trace, environment, application) {

        this.Button00_onclick = function(obj,  e)
        {
        	var obj = "return OK";

        	this.close(obj);
        	//this.close(this.Dataset00.saveXML());
        }

        this.ChildFrame_M_showModeless_46607_02_onload = function(obj, e)
        {
        trace("ChildFrame_M_showModeless_46607_02_onload ");
        	this.Edit00.set_value("{arg1:"+ this.parent.arg1 +", arg2:"+ this.parent.arg2 +", arg3:"+ this.parent.arg3 +"}");
        	//alert("aa");
        }

        this.Button01_onclick = function(obj,e)
        {
        	//var ret = nexacro.open("Open", "Application::Application_M_open_02.xfdl", this.getOwnerFrame(), {arg1:'aaa', arg2:this.Edit00.value, arg3:this.CheckBox00.value}, "showtitlebar=true showstatusbar=false", 100, 100);
            var ret = nexacro.open(this.edt00.value, this.edurl.value, this.getOwnerFrame(), {arg1:'aaa', arg2:this.Edit00.value, arg3:this.chk00.value}, "showtitlebar=true showstatusbar=false", 100, 100);
         //   var ret = nexacro.open("Open1", "Environment::Environment_httpvariable.xfdl", null, {arg1:'aaa', arg2:this.Edit00.value, arg3:this.CheckBox00.value}, "showtitlebar=true showstatusbar=false", 100, 100);

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

        this.Button05_onclick = function(obj,e)
        {
        	alert(nexacro.getEnvironmentVariable("test"));
        	alert(nexacro.getCookieVariable("Cookie0"));
        };

        this.Button06_onclick = function(obj,e)
        {
        	alert(nexacro.getEnvironmentVariable(this.Edit01.value));
        };

        this.Button07_onclick = function(obj,e)
        {
        	var env = nexacro.getEnvironment();
        	env.services["Environment"].set_url("./Environment/");
        	env.services["FrameBase"].set_url("./Environment/");
        };

        this.Button08_onclick = function(obj,e)
        {
        	var env = nexacro.getEnvironment();
        	alert(env.services["Environment"].url + " " + env.services["FrameBase"].url );
        };

        this.Button10_onclick = function(obj,e)
        {
        	var app = nexacro.getApplication();
        	trace(app.gds.saveXML());

        };

        this.Button01_00_onclick = function(obj,e)
        {
        	   var ret = nexacro.open(this.edt00.value, this.edurl.value, null, {arg1:'aaa', arg2:this.Edit00.value, arg3:this.chk00.value}, "showtitlebar=true showstatusbar=false", 100, 100);

        };

        this.btn00_onclick = function(obj,e)
        {
        	const popupframes = nexacro.getPopupFrames();
        	const cnt = popupframes.length;
        	for (let i = 0; i <cnt; i++)
        	{
        		alert("index:"+ i + "frame.formurl:"+ popupframes[i].formurl + " frame.id:"+ popupframes[i].id + " parent:"+ popupframes[i].parent);
        	}
        };

        this.Button01_00_00_onclick = function(obj,e)
        {
        	   var ret = nexacro.open(this.edt00.value, this.edurl.value, null, {arg1:'aaa', arg2:this.Edit00.value, arg3:this.chk00.value}, "showtitlebar=true showstatusbar=false", 100, 100);

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ChildFrame_M_showModeless_46607_02_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
            this.Button04.addEventHandler("onclick",this.Button04_onclick,this);
            this.Button09.addEventHandler("onclick",this.Button09_onclick,this);
            this.Button05.addEventHandler("onclick",this.Button05_onclick,this);
            this.Button06.addEventHandler("onclick",this.Button06_onclick,this);
            this.Button07.addEventHandler("onclick",this.Button07_onclick,this);
            this.Button08.addEventHandler("onclick",this.Button08_onclick,this);
            this.Button10.addEventHandler("onclick",this.Button10_onclick,this);
            this.Button01_00.addEventHandler("onclick",this.Button01_00_onclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.Button01_00_00.addEventHandler("onclick",this.Button01_00_00_onclick,this);
        };

        this.loadIncludeScript("openurl.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
