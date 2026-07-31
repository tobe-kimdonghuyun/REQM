(function()
{
    const fn = function(nexacro, system, trace, environment, application)  
	{
        this.on_loadAppVariables = function()
        {		
            var obj = null;

			// global dataobject
		

            // global dataset
            obj = new nexacro.Dataset("gds_nexacroK_mfe_sub1", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "Column0","size" : "256","type" : "STRING"},{"id" : "Column1","size" : "256","type" : "STRING"},{"id" : "Column2","size" : "256","type" : "STRING"},{"id" : "Column3","size" : "256","type" : "STRING"}]},"Rows" : [{"Column0" : "가","Column1" : "나","Column2" : "다","Column3" : "라"},{"Column0" : "가","Column1" : "나","Column2" : "다","Column3" : "라"},{"Column0" : "가","Column1" : "나","Column2" : "다","Column3" : "라"},{"Column0" : "가","Column1" : "나","Column2" : "다","Column3" : "라"},{"Column0" : "가","Column1" : "나","Column2" : "다","Column3" : "라"}]});
            this._addDataset(obj.name, obj);
            
            // global variable
            this._addVariable("app_variable","nexacroK_mfe_sub1_application");
            
			// global object


            obj = null;
        };
 
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("Application_Desktop");
            this.set_screenid("Desktop_screen_sub1");

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
