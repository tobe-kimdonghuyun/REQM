(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("popupForm1");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.Static("Static00","50","299","484","81",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("popup");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00","32","26","116","48",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("close");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01","266","27","242","33",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("nexacro.open ( ownerframe=null)");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button02","266","69","244","31",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("nexacro.open ( ownerframe)");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button03","266","156","242","34",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("nexacro.getPopupFrames().length");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button04","266","110","244","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("nexacro.open ( ownerframe=mainframe)");
            this.addChild(obj.name, obj);

            // Layout Functions
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
        this.registerScript("popupForm1.xfdl", function(nexacro, system, trace, environment, application) {

        this.Button00_onclick = function(obj,e)
        {
        	this.close();
        };

        this.Button01_onclick = function(obj,e)
        {
        	nexacro.open("1popup999999"
        	, "Environment::popupForm1.xfdl"
        	, nexacro.getApplication().mainframe.getOwnerFrame()
        	, ""
        	, "resizable=true"
        	, 0
        	, 0)
        };

        this.Button02_onclick = function(obj,e)
        {
        	nexacro.open("1popup999"
        	, "Environment::popupForm1.xfdl"
        	, this.getOwnerFrame()
        	, ""
        	, "resizable=true"
        	, 0
        	, 0)
        };

        this.Button03_onclick = function(obj,e)
        {
        const len = nexacro.getPopupFrames().length;
        		alert("length " + len);

        		for (var i = 0; i < len; i++)
        		{
        			trace("index:"+ nexacro.getPopupFrames()[i].name);
        		}
        };

        this.Button04_onclick = function(obj,e)
        {
        	nexacro.open("1popup99"
        	, "Environment::popupForm1.xfdl"
        	, nexacro.getApplication().mainframe
        	, ""
        	, "resizable=true"
        	, 0
        	, 0)
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
        };

        this.loadIncludeScript("popupForm1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
