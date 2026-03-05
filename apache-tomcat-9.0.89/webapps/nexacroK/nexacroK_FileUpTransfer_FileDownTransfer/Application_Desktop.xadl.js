(function()
{
    return function(nexacro, system, trace)  
	{
        this.on_loadAppVariables = function()
        {		
            var obj = null;

			// global dataobject
		

            // global dataset
            obj = new nexacro.Dataset("MENU", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "num","size" : "256","type" : "STRING"},{"id" : "code","size" : "256","type" : "STRING"}]},"Rows" : [{"num" : "1","code" : "Base::FileUpTransfer_FileDownTransfer_Sample00.xfdl"},{"num" : "2","code" : "Base::FileUpTransfer_FileDownTransfer_Sample01.xfdl"},{"num" : "3","code" : "Base::FileUpTransfer_FileDownTransfer_Sample02.xfdl"},{"num" : "4","code" : "Base::FileUpTransfer_FileDownTransfer_Sample03.xfdl"},{"num" : "5","code" : "Base::FileUpTransfer_FileDownTransfer_Sample04.xfdl"},{"num" : "6","code" : "Base::FileUpTransfer_FileDownTransfer_Sample05.xfdl"},{"num" : "7","code" : "Base::FileUpTransfer_FileDownTransfer_Sample06.xfdl"},{"num" : "8","code" : "Base::FileUpTransfer_FileDownTransfer_Sample07.xfdl"},{"num" : "9","code" : "Base::FileUpTransfer_FileDownTransfer_Sample08.xfdl"},{"num" : "10","code" : "Base::FileUpTransfer_FileDownTransfer_Sample09.xfdl"},{"num" : "11","code" : "Base::FileUpTransfer_FileDownTransfer_Sample10.xfdl"},{"code" : "Base::fileupdown_form.xfdl","num" : "12"}]});
            this._addDataset(obj.name, obj);
            
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
}
)();
