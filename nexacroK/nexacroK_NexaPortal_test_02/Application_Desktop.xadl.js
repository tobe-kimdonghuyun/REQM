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

            
			// global object


            obj = null;
        };
 
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("Application_Desktop");
            this.set_screenid("Desktop_screen");

            if (this._is_attach_childframe)
            	return;
        
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","1280","720",null,null,this);
            mainframe.set_showstatusbar("true");
            mainframe.set_showtitlebar("true");
            mainframe.set_titletext("TopFrame");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;        

            // tray

        };
        
        this.loadPreloadList = function()
        {

        };
        
        this.mainframe_createBodyFrame = function()
        {
            var frame0 = new nexacro.VFrameSet("VFrameSet00",null,null,null,null,null,null,this);
            frame0.set_separatesize("200,*");
            this.addChild(frame0.name, frame0);
            this.frame=frame0;

            var frame1 = new nexacro.ChildFrame("TopFrame",null,null,null,null,null,null,"FrameBase::Form_Top.xfdl",frame0);
            frame1.set_showstatusbar("false");
            frame1.set_showtitlebar("false");
            frame0.addChild(frame1.name, frame1);
            frame1.set_formurl("FrameBase::Form_Top.xfdl");


            var frame2 = new nexacro.ChildFrame("WorkFrame",null,null,null,null,null,null,"FrameBase::Form_Work.xfdl",frame0);
            frame2.set_showstatusbar("false");
            frame2.set_showtitlebar("false");
            frame0.addChild(frame2.name, frame2);
            frame2.set_formurl("FrameBase::Form_Work.xfdl");
        };
        
        this.on_initEvent = function()
        {

        };
        
        // script Compiler


        this.checkLicense("");
        
        this.loadPreloadList();

        this.loadIncludeScript("Application_Desktop.xadl");
    };
    if (document.currentScript)
        document.currentScript.dispatchEvent(new CustomEvent("loadModule", { detail: fn }));

    return fn;
}
)();
