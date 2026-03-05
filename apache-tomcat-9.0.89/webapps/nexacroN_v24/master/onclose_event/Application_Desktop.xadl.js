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
            this.set_screenid("Desktop_screen");

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
            var frame0 = new VFrameSet("vFrameSet",null,null,null,null,null,null,this);
            frame0.set_separatesize("100,*");
            this.addChild(frame0.name, frame0);
            this.frame=frame0;

            var frame1 = new ChildFrame("childFrame",null,null,null,null,null,null,"FrameBase::mdiFrame.xfdl",frame0);
            frame1.set_showtitlebar("false");
            frame0.addChild(frame1.name, frame1);
            frame1.set_formurl("FrameBase::mdiFrame.xfdl");


            var frame2 = new FrameSet("frameSet",null,null,null,null,null,null,frame0);
            frame0.addChild(frame2.name, frame2);
        };
        
        this.on_initEvent = function()
        {
            this.mainframe.vFrameSet.childFrame.addEventHandler("onbeforeclose",this.mainframe_vFrameSet_childFrame_onbeforeclose,this);
        };
        
        // script Compiler
        this.registerScript("Application_Desktop.xadl", function() {
        this.mainframe_vFrameSet_childFrame_onbeforeclose = function(obj,e)
        {
        // 	 var popupframes = nexacro.getPopupFrames(nexacro.getApplication().mainframe.vFrameSet.frameSet);
        //     if (popupframes)
        //     {
        // 		var popup_frame_len = popupframes.length;
        // 		for (i = popup_frame_len - 1; i >= 0; i--)
        // 		{
        // 			var chframe = popupframes[i]; //open으로 띄운 프레임들
        // 			if (chframe )
        // 			{
        // 				var objForm = chframe.getForm(); //open으로 띄운 프레임의 폼
        // 				trace("=================>>>>" + objForm.name);
        // 				var str = objForm.close();
        // 			}
        // 		}
        //     }
        };

        });
        this.checkLicense("");
        
        this.loadPreloadList();

        this.loadIncludeScript("Application_Desktop.xadl");
    };
}
)();
