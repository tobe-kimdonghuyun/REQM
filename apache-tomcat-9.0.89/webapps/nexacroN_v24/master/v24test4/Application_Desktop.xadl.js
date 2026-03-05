(function()
{
    return function()  
	{
        this.on_loadAppVariables = function()
        {		
            var obj = null;
			// global dataobject
		
            // global dataset

            
            // global variable

            
            obj = null;
        };
 
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("Application_Desktop");
            this.set_screenid("Desktop_screen,mobile");
            this.set_licenseurl("http://172.10.12.45:9090/NexacroN_client_license.xml");

            if (this._is_attach_childframe)
            	return;
        
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","1280","720",null,null,this);
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("true");
            mainframe.set_titletext("FullFrame");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;        
            // tray

        };
        
        this.loadPreloadList = function()
        {

        };
        
        this.mainframe_createBodyFrame = function()
        {
            var frame0 = new ChildFrame("WorkFrame",null,null,null,null,null,null,"Base::testSeoulFont.xfdl",this);
            frame0.set_showtitlebar("false");
            frame0.set_showstatusbar("false");
            this.addChild(frame0.name, frame0);
            frame0.set_formurl("Base::testSeoulFont.xfdl");

            this.frame=frame0;
        };
        
        this.on_initEvent = function()
        {
            this.addEventHandler("onduplicateexecution",this.Application_onduplicateexecution,this);
            this.addEventHandler("onbeforeexit",this.Application_onbeforeexit,this);
            this.addEventHandler("onload",this.Application_onload,this);
        };
        
        // script Compiler
        this.registerScript("Application_Desktop.xadl", function() {

        this.Application_onduplicateexecution = function(obj,e)
        {
        	this.alert("test");
        	this.exit();
        };

        this.Application_onbeforeexit = function(obj,e)
        {

        };

        this.Application_onload = function(obj,e)
        {
        	//alert("test : " + system.navigatorname);
        };

        });
        this.checkLicense("http://172.10.12.45:9090/NexacroN_client_license.xml");
        
        this.loadPreloadList();

        this.loadIncludeScript("Application_Desktop.xadl");
    };
}
)();
