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
            var obj = new ChildFrame("QuickViewFrame", null, null, null, null, null, null, "", this);
            
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
