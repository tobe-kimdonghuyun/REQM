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
            obj = new nexacro.Static("sta00","200","34","478","76",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn01","27","40","143","43",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("btn01");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00","30","93","140","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("sta01","206","141","472","60",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","mobile,medium,large",1280,720,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_font("11px/normal \"-apple-system\",\"BlinkMacSystemFont\",\"Roboto\",\"Helvetica\",\"Arial\",\"Apple SD Gothic Neo\",\"sans-serif\"");
                p.set_scrollbartype("auto auto");
                p.set_titletext("New Form");

                p.sta00.set_taborder("0");
                p.sta00.set_text("");
                p.sta00.move("200","34","478","76",null,null);

                p.btn01.set_taborder("1");
                p.btn01.set_text("btn01");
                p.btn01.move("27","40","143","43",null,null);

                p.btn00.set_taborder("2");
                p.btn00.set_text("btn00");
                p.btn00.move("30","93","140","50",null,null);

                p.sta01.set_taborder("3");
                p.sta01.set_text("");
                p.sta01.move("206","141","472","60",null,null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new nexacro.Layout("Layout1","mobile,medium,large",480,720,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("default");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new nexacro.Layout("Layout0","mobile,medium,large",720,480,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_scrollbartype("auto auto");

                p.btn00.move("30","93","140","50",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("1");
            obj.set_type("default");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new nexacro.Layout("Layout2","mobile,large,medium",640,1280,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("default");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new nexacro.Layout("Layout3","medium,large,mobile",800,1280,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

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
        this.registerScript("MLM_small.xfdl", function(nexacro, system, trace, environment, application) {


        this.btn00_onclick = function(obj,e)
        {
        	this.sta01.text = "layout : " + this.getCurrentLayoutID() + " width:"+  this.getLayoutInfo(this.getCurrentLayoutID(), "width") +  " height:"+ this.getLayoutInfo(this.getCurrentLayoutID(), "height");
        	this.getCurrentLayoutID()
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
        	const main = nexacro.getApplication().mainframe;
        	this.sta00.text = "width:"+ main.getOffsetWidth() + " height:"+ main.getOffsetHeight();

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

        this.Environment_onlayoutchanged = function(obj,e)
        {
        	this.btn00_onclick ();
        	this.btn_onclick();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onlayoutchanged",this.Environment_onlayoutchanged,this);
            this.btn01.addEventHandler("onclick",this.btn_onclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
        };

        this.loadIncludeScript("MLM_small.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
