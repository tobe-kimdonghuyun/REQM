(function()
{
    return function(nexacro, system, trace)  
	{
        this.on_loadAppVariables = function()
        {		
            var obj = null;

			// global dataobject
		

            // global dataset

            
            // global variable

            
			// global object


            obj = null;
        };
 
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.getSetter("csskey").set("SDS");
            this.set_id("Application_Desktop");
            this.set_screenid("Desktop_screen");

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
            var frame0 = new nexacro.ChildFrame("WorkFrame",null,null,null,null,null,null,"FrameBase::Form_Work.xfdl",this);
            frame0.set_showstatusbar("false");
            frame0.set_showtitlebar("false");
            this.addChild(frame0.name, frame0);
            frame0.set_formurl("FrameBase::Form_Work.xfdl");

            this.frame=frame0;
        };
        
        this.on_initEvent = function()
        {
            this.mainframe?.addEventHandler("onrootcssclasschange",this.mainframe_onrootcssclasschange,this);
            this.mainframe.WorkFrame.addEventHandler("onrootcssclasschange",this.mainframe_WorkFrame_onrootcssclasschange,this);
        };
        
        // script Compiler
        this.registerScript("Application_Desktop.xadl", function(nexacro, system, trace) {

        this.mainframe_onrootcssclasschange = function(obj,e)
        {
        	console.log(obj.id + ':' + e.precssclass + '/' + e.postcssclass);
        };

        this.mainframe_WorkFrame_onrootcssclasschange = function(obj,e)
        {

        };

        });

        this.checkLicense("");
        
        this.loadPreloadList();
        this.loadCss("xcssrc::SDS.xcss");
        this.loadCss("xcssrc::A.xcss");
        this.loadIncludeScript("Application_Desktop.xadl");
    };
}
)();
