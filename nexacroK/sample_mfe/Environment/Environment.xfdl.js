(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_font("normal 15px/normal \"Arial\"");
            this.set_name("Environment");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,810);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.DataObject("DataObject00", this);
            obj.set_preload("true");
            obj.set_url("samplefile::dataobject.json");
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("ds00", this);
            obj.set_preload("true");
            obj.set_url("samplefile::dataobject.json.xml");
            obj._setContents({});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.GroupBox("grb00","23","746","726","160",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00","24","38","146","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("addChild");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00_00","24","75","146","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("removeChild");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00_00_00","24","110","146","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("all");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("txa00","180","38","239","152",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_value("let obj = new nexacro.Dataset");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00_00_00_00","24","145","146","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("licenseurl");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("staLog","440","38","623","442",null,null,null,null,null,null,this);
            obj.set_background("azure");
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_value("");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00_00_00_00_00","27","270","146","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("transaction");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn01","192","270","177","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Dataset ");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn02","34","565","177","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("include fncall ");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btnTr","30","305","146","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("transaction Error");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn03","990","4","75","32",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Clear");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn04","33","424","132","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("open");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn05","34","490","176","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("nexacro.loadStyle1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn05_00","33","530","177","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("nexacro.loadStyle2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn05_00_00","223","530","177","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("nexacro.loadStyle2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn04_00","224","420","132","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("open1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Combo("cbobrowserreloadkey","206","651","228","31",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_taborder("16");
            var cbobrowserreloadkey_innerdataset = new nexacro.NormalDataset("cbobrowserreloadkey_innerdataset", obj);
            cbobrowserreloadkey_innerdataset._setContents({"ColumnInfo" : {"Column" : [{"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "custom","datacolumn" : "custom"},{"codecolumn" : "reloadactiveform","datacolumn" : "reloadactiveform"},{"codecolumn" : "prevent","datacolumn" : "prevent"}]});
            obj.set_innerdataset(cbobrowserreloadkey_innerdataset);
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("sta00","39","647","137","39",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("browserreloadkey");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn06","39","686","226","50",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("lookup(\"Dataset0\")");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn07","40","760","225","50",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("addEventHandlerLookup");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn08","590","760","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("CLICK");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn07_00","40","820","225","50",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("setEventHandlerLookup");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn07_00_00","282","760","225","50",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("removeEventHandlerLookup");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn07_00_00_00","282","825","225","50",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("findEventHandlerLookup");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","",1280,810,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","samplefile::dataobject.json.xml","ds00");
            this._addPreloadList("dataobject","samplefile::dataobject.json","DataObject00");
        };
        
        // User Script
        this.addIncludeScript("Environment.xfdl","Environment::env.xjs");
        this.registerScript("Environment.xfdl", function(nexacro, system, trace, environment, application) {
        this.executeIncludeScript("Environment::env.xjs"); /*include "Environment::env.xjs"*/;

        this.btn00_onclick = function(obj,e)
        {
        	var obj = new Dataset("ds01");
        	const env = nexacro.getEnvironment();
        	let ret = -1;
        	if (env)
        		ret = env.addChild(obj.name, obj);

        	if (ret >= 0)
        		this.Log(`\n ${obj.name} addChild SUCC`);
        	else
        	    this.Log(`\n ${obj.name} addChild FAIL`);
        };


        this.Log = function(str)
        {
        	this.staLog.value += str ;
        }

        this.btn00_00_onclick = function(obj,e)
        {

        	const env = nexacro.getEnvironment();
        	let ret = null;
        	if (env)
        		ret = env.removeChild("ds01");

        	if (ret)
        		this.Log(`\n ${obj.name} removeChild SUCC`);
        	else
        	    this.Log(`\n ${obj.name} removeChild FAIL`);
        };

        this.btn00_00_00_onclick = function(obj,e)
        {
        	const env = nexacro.getEnvironment();
        	if (env)
        	{
        		let len = env.all.length
        		for (len = 0; len < env.all.length; len++)
        		{
        			this.Log(`\n ${len} - ${env.all[len].name}`);
        		}
        	}
        };

        this.btn_onclick = function(obj,e)
        {
        	const env = nexacro.getEnvironment();
        	if (env)
        	{
        		env.transaction("searchSampleList", "samplefile::searchSampleList.xml", "input1=Dataset0", "Dataset1=outDs", "", "callbackDS");
        	}
        };



        this.btn01_onclick = function(obj,e)
        {
        	const env = nexacro.getEnvironment();
        	if (env)
        	{
        		this.Log (env.Dataset0.saveXML("aa"));
        		this.Log (env.Dataset1.saveXML("aa"));
        		this.Log (env.DataObject0.serializeToString());
        	}
        };

        this.btn02_onclick = function(obj,e)
        {
        	this.fnTEST("aa")
        };

        this.btn03_onclick = function(obj,e)
        {
        	this.staLog.value = "";
        };

        this.btnTr_onclick = function(obj,e)
        {
        	const env = nexacro.getEnvironment();
        	if (env)
        	{
        		env.transaction("searchSampleList", "samplefile::searchSampleList1.xml", "input1=Dataset0", "Dataset1=outDs", "", "callbackDS");
        	}
        };

        this.btn04_onclick = function(obj,e)
        {
        	nexacro.open("11", "Environment::Environment.xfdl", this.getOwnerFrame())
        };

        this.btn05_onclick = function(obj,e)
        {
        	nexacro.loadStyle("xcssrc::bb.xcss");
        };

        this.btn06_onclick = function(obj,e)
        {

        	nexacro.loadStyle("xcssrc::aa.xcss");
        };

        this.btn05_00_00_onclick = function(obj,e)
        {
        	 nexacro.addErrorMessage("ko", "reference_not_define111", "[\"%0\", \"가 정의되지 않았습니다. \"]");
        };

        this.btn04_00_onclick = function(obj,e)
        {
        	nexacro.open("22", "Environment::Environment.xfdl", this.getOwnerFrame())
        };

        this.fnbrowserreloadkey = function(obj,e)
        {

        };

        this.Environment_onload = function(obj,e)
        {

        };

        this.cbobrowserreloadkey_onitemchanged = function(obj,e)
        {
        	let env = nexacro.getEnvironment();
        	env.browserreloadkey = e.postvalue;
        };

        this.btn07_onclick = function(obj,e)
        {
        	let env = nexacro.getEnvironment();
        	trace(env.lookup("Dataset0"));

        	trace(this.lookup("Dataset0"));



        };

        this.btn08_onclick = function(obj,e)
        {

        	trace("addEvent gfnclick1:"+ this.btn08.addEventHandlerLookup("onclick", "gfnclick1", this.btn08));
        	trace("addEvent appfn1:" + this.btn08.addEventHandlerLookup("onclick", "appfn1", this.btn08));

        	trace("addEvent gfnclick:"+ this.btn08.addEventHandlerLookup("onclick", "gfnclick", this.btn08));
        	trace("addEvent appfn:" + this.btn08.addEventHandlerLookup("onclick", "appfn", this.btn08));

        	let app = nexacro.getApplication();
        	trace("addEvent gfnclick:"+ app.addEventHandlerLookup("onload", "gfnclick", app));
        	trace("addEvent appfn:" + app.addEventHandlerLookup("onload", "appfn", app));
        	trace("addEvent gfnclick:"+ app.setEventHandlerLookup("onload", "gfnclick1", app));

        	let eventinfo = new nexacro.LoadEventInfo(app, "onload", "aaaaaaaa");
        	app.onload.fireEvent(app, eventinfo, true);
        	//this.btn08.addEventHandlerLookup("onclick", "gfnclick", this.btn08);
        	//this.btn08.addEventHandlerLookup("onclick", "appfn", this.btn08);
        };

        this.btn09_onclick = function(obj,e)
        {
        	trace("setEvent gfnclick1 : " +this.btn08.setEventHandlerLookup("onclick", "gfnclick1", this.btn08));
        	trace("setEvent appfn1 : " +this.btn08.setEventHandlerLookup("onclick", "appfn1", this.btn08));

        	trace("setEvent gfnclick : " + this.btn08.setEventHandlerLookup("onclick", "gfnclick", this.btn08));
        	trace("setEvent appfn : " +this.btn08.setEventHandlerLookup("onclick", "appfn", this.btn08));
        };

        this.btn10_onclick = function(obj,e)
        {
        	trace("removeEvent gfnclick1:"+ this.btn08.removeEventHandlerLookup("onclick", "gfnclick1", this.btn08));
        	trace("removeEvent appfn1:" + this.btn08.removeEventHandlerLookup("onclick", "appfn1", this.btn08));
        	let app = nexacro.getApplication();
        	trace("removeEvent app gfnclick:"+ app.removeEventHandlerLookup("onload", "gfnclick", app));
        	let eventinfo = new nexacro.LoadEventInfo(app, "onload", "aaaaaaaa");
        	app.onload.fireEvent(app, eventinfo, true);
        };

        this.btn11_onclick = function(obj,e)
        {
        	trace("findEvent gfnclick1:"+ this.btn08.findEventHandlerLookup("onclick", "gfnclick1", this.btn08));
        	trace("findEvent appfn1:" + this.btn08.findEventHandlerLookup("onclick", "appfn1", this.btn08));

        	trace("findEvent gfnclick:"+ this.btn08.findEventHandlerLookup("onclick", "gfnclick", this.btn08));
        	trace("findEvent appfn:" + this.btn08.findEventHandlerLookup("onclick", "appfn", this.btn08));


        	let app = nexacro.getApplication();
        	trace("findEvent app gfnclick:"+ app.findEventHandlerLookup("onload", "gfnclick", app));
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Environment_onload,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn00_00.addEventHandler("onclick",this.btn00_00_onclick,this);
            this.btn00_00_00.addEventHandler("onclick",this.btn00_00_00_onclick,this);
            this.btn00_00_00_00_00.addEventHandler("onclick",this.btn_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
            this.btnTr.addEventHandler("onclick",this.btnTr_onclick,this);
            this.btn03.addEventHandler("onclick",this.btn03_onclick,this);
            this.btn04.addEventHandler("onclick",this.btn04_onclick,this);
            this.btn05.addEventHandler("onclick",this.btn06_onclick,this);
            this.btn05_00.addEventHandler("onclick",this.btn05_onclick,this);
            this.btn05_00_00.addEventHandler("onclick",this.btn05_00_00_onclick,this);
            this.btn04_00.addEventHandler("onclick",this.btn04_00_onclick,this);
            this.cbobrowserreloadkey.addEventHandler("onitemchanged",this.cbobrowserreloadkey_onitemchanged,this);
            this.btn06.addEventHandler("onclick",this.btn07_onclick,this);
            this.btn07.addEventHandler("onclick",this.btn08_onclick,this);
            this.btn07_00.addEventHandler("onclick",this.btn09_onclick,this);
            this.btn07_00_00.addEventHandler("onclick",this.btn10_onclick,this);
            this.btn07_00_00_00.addEventHandler("onclick",this.btn11_onclick,this);
        };

        this.loadIncludeScript("Environment.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
