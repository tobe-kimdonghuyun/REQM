(function()
{
    const fn = function(nexacro, system, trace, environment, application)
    {
        this.on_loadAppVariables = function()
        {		
            var obj = null;
            
			// global dataobject
		

            // global dataset

            
            // global variable
            this._addVariable("app_variable","app_variable");
            
			// global object

            
            obj = null;
        };
        
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("Application_Desktop");
            this.getSetter("licenseurl").set("./NexacroN_client_license.xml");
            this.set_screenid("Desktop_screen_sub2");

            if (this._is_attach_childframe)
            	return;
            
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","1280","720",null,null,this);
            mainframe.set_showstatusbar("true");
            mainframe.set_showtitlebar("true");
            mainframe.set_titletext("FullFrame");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;

            // tray

        };
        
        this.loadPreloadList = function()
        {

        };
        
        this.mainframe_createBodyFrame = function()
        {
            var obj = new nexacro.ChildFrame("QuickViewFrame", null, null, null, null, null, null, "", this);
            
            obj.set_showtitlebar("false");
            obj.set_showstatusbar("false");
            obj.set_border("0px none");
			
            this.addChild(obj.name, obj);

            obj.set_formurl(nexacro._quickview_formurl);

            this.frame = obj;
            
            obj = null;
        };
        
        this.on_initEvent = function()
        {
        };

		// script Compiler


		this.checkLicense("./NexacroN_client_license.xml");
        
        this.loadPreloadList();

        this.loadIncludeScript("Application_Desktop.xadl");
    };
    if (document.currentScript)
        document.currentScript.dispatchEvent(new CustomEvent("loadModule", { detail: fn }));

    return fn;
}
)();
