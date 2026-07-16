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

            obj = new nexacro.TextArea("txa00","180","38",null,"152","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_value("let obj = new nexacro.Dataset");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn01","24","210","146","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("btn01");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt00","185","282","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new nexacro.Spin("spn00","370","291","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new nexacro.ListBox("lsb00","289","333","170","100",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            // Layout Functions
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
                p.txa00.move("180","38",null,"152","10",null);

                p.btn01.set_taborder("4");
                p.btn01.set_text("btn01");
                p.btn01.move("24","210","146","50",null,null);

                p.edt00.set_taborder("5");
                p.edt00.move("185","282","140","20",null,null);

                p.spn00.set_taborder("6");
                p.spn00.move("370","291","150","20",null,null);

                p.lsb00.set_taborder("7");
                p.lsb00.move("289","333","170","100",null,null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new nexacro.Layout("Layout1","mobile",720,720,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btn00.move("24","210","146","44",null,null);

                p.btn00_00.move("17","38","146","44",null,null);

                p.btn00_00_00.move("180","208","146","44",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new nexacro.Layout("Layout0","mobile",850,720,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_scrollbartype("auto auto");

                p.txa00.move("24","220","346","152",null,null);

                p.btn00.move("24","38","346","44",null,null);

                p.btn00_00.move("24","92","346","44",null,null);

                p.btn00_00_00.move("24","156","346","44",null,null);
            	}
            );
            obj.set_mobileorientation("portrait");
            obj.set_stepcount("1");
            obj.set_type("default");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new nexacro.Layout("Layout2","mobile",1280,720,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btn00.set_background("aliceblue");
            	}
            );
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
        this.registerScript("MLM.xfdl", function(nexacro, system, trace, environment, application) {


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

        this.btn__onclick = function(obj,e)
        {
            let log = "";
        	log = ("zoomfactor:"+ nexacro.getEnvironment()._zoom_factor + " mainframeWidth:" + nexacro.getApplication().mainframe.getOffsetWidth())
        	      + (" window.innerWidth:"+ window.innerWidth + " screen.availWidth:"+ screen.availWidth);
        	alert(log);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn00_00.addEventHandler("onclick",this.btn00_00_onclick,this);
            this.btn00_00_00.addEventHandler("onclick",this.btn00_00_00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn__onclick,this);
        };

        this.loadIncludeScript("MLM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
