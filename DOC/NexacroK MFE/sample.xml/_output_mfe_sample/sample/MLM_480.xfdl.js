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
            this.set_rtl("false");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(480,720);
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
            obj = new nexacro.Static("sta00","200","34",null,"76","0",null,null,null,null,null,this);
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

            obj = new nexacro.Static("sta01","206","141",null,"60","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn02","30","270","440","50",null,null,null,null,null,null,this);
            obj.set_icon("url(\'theme://images/btn_RF_1Depth01.png\')");
            obj.set_taborder("4");
            obj.set_text("480");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","mobile,medium,large,desktop",480,720,this,function(p){});
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
        this.registerScript("MLM_480.xfdl", function(nexacro, system, trace, environment, application) {


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
        	alert(this.sta00.text);
        	alert(this.sta01.text);
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

        this.lsb00_onitemchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onlayoutchanged",this.Environment_onlayoutchanged,this);
            this.btn01.addEventHandler("onclick",this.btn_onclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
        };

        this.loadIncludeScript("MLM_480.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
