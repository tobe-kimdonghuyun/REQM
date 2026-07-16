(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_cssclass("aajj");
            this.set_scrollbartype("auto auto");
            this.set_font("11px/normal \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"");
            this.set_name("Environment");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
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
            obj = new nexacro.Button("btn00","24","38","146","44",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("addChild");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00_00","24","92","146","44",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("removeChild");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00_00_00","24","156","146","44",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("all");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("txa00","180","38","239","152",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_value("let obj = new nexacro.Dataset");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00_00_00_00","24","216","146","44",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("licenseurl");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("staLog","440","38","623","442",null,null,null,null,null,null,this);
            obj.set_cssclass("DIVCSS");
            obj.set_background("azure");
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_value("");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00_00_00_00_00","27","270","146","44",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("transaction - error");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn01","196","268","177","48",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Dataset ");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn02","200","411","222","69",null,null,null,null,null,null,this);
            obj.set_border("2px solid aqua,2px solid black,2px solid blue,2px solid red");
            obj.set_borderRadius("20% 20%");
            obj.set_taborder("8");
            obj.set_text("btn02");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00_00_00_00_00_00","27","330","146","44",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("transaction");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn03","990","4","75","32",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Clear");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn01_00","196","326","177","48",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Dataset ");
            this.addChild(obj.name, obj);

            obj = new nexacro.Div("div00","75","513","250","109",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00","92","37","120","50",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("btn00");
            this.div00.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this.div00.form
            obj = new nexacro.Layout("default","",0,0,this.div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btn00.set_taborder("0");
                p.btn00.set_text("btn00");
                p.btn00.move("92","37","120","50",null,null);
            	}
            );
            this.div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00.form
            obj = new nexacro.Layout("Layout0","",0,0,this.div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btn00.move("215","37","120","50",null,null);
            	}
            );
            this.div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new nexacro.Layout("default","mobile",1280,720,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_font("11px/normal \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"");
                p.set_scrollbartype("auto auto");
                p.set_titletext("New Form");

                p.btn00.set_taborder("0");
                p.btn00.set_text("addChild");
                p.btn00.move("24","38","146","44",null,null);

                p.btn00_00.set_taborder("1");
                p.btn00_00.set_text("removeChild");
                p.btn00_00.move("24","92","146","44",null,null);

                p.btn00_00_00.set_taborder("2");
                p.btn00_00_00.set_text("all");
                p.btn00_00_00.move("24","156","146","44",null,null);

                p.txa00.set_taborder("3");
                p.txa00.set_value("let obj = new nexacro.Dataset");
                p.txa00.move("180","38","239","152",null,null);

                p.btn00_00_00_00.set_taborder("4");
                p.btn00_00_00_00.set_text("licenseurl");
                p.btn00_00_00_00.move("24","216","146","44",null,null);

                p.staLog.set_background("azure");
                p.staLog.set_taborder("5");
                p.staLog.set_value("");
                p.staLog.move("440","38","623","442",null,null);

                p.btn00_00_00_00_00.set_taborder("6");
                p.btn00_00_00_00_00.set_text("transaction - error");
                p.btn00_00_00_00_00.move("27","270","146","44",null,null);

                p.btn01.set_taborder("7");
                p.btn01.set_text("Dataset ");
                p.btn01.move("196","268","177","48",null,null);

                p.btn02.set_border("2px solid aqua,2px solid black,2px solid blue,2px solid red");
                p.btn02.set_borderRadius("20% 20%");
                p.btn02.set_taborder("8");
                p.btn02.set_text("btn02");
                p.btn02.move("200","411","222","69",null,null);

                p.btn00_00_00_00_00_00.set_taborder("9");
                p.btn00_00_00_00_00_00.set_text("transaction");
                p.btn00_00_00_00_00_00.move("27","330","146","44",null,null);

                p.btn03.set_taborder("10");
                p.btn03.set_text("Clear");
                p.btn03.move("990","4","75","32",null,null);

                p.btn01_00.set_taborder("11");
                p.btn01_00.set_text("Dataset ");
                p.btn01_00.move("196","326","177","48",null,null);

                p.div00.set_taborder("12");
                p.div00.set_text("div00");
                p.div00.move("75","513","250","109",null,null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new nexacro.Layout("Layout0","mobile",480,720,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_scrollbartype("auto auto");

                p.btn02.move("27","386","222","69",null,null);

                p.staLog.move("27","469","443","221",null,null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_stepcount("1");
            obj.set_type("default");
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
        this.addIncludeScript("environment_transaction.xfdl","sample::env.xjs");
        this.registerScript("environment_transaction.xfdl", function(nexacro, system, trace, environment, application) {
        this.executeIncludeScript("sample::env.xjs"); /*include "sample::env.xjs"*/;

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

        this.btn1_onclick = function(obj,e)
        {
        	const env = nexacro.getEnvironment();
        	if (env)
        	{
        		env.transaction("searchSampleList", "samplefile::searchSampleList1.xml", "input1=Dataset0", "Dataset1=outDs", "", "callbackDS");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn00_00.addEventHandler("onclick",this.btn00_00_onclick,this);
            this.btn00_00_00.addEventHandler("onclick",this.btn00_00_00_onclick,this);
            this.btn00_00_00_00_00.addEventHandler("onclick",this.btn1_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
            this.btn00_00_00_00_00_00.addEventHandler("onclick",this.btn_onclick,this);
            this.btn03.addEventHandler("onclick",this.btn03_onclick,this);
            this.btn01_00.addEventHandler("onclick",this.btn01_onclick,this);
        };

        this.loadIncludeScript("environment_transaction.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
