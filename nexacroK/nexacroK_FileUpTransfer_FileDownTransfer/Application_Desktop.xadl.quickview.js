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
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "num","size" : "256","type" : "STRING"},{"id" : "code","size" : "256","type" : "STRING"}]},"Rows" : [{"num" : "1","code" : "Base::FileUpTransfer_FileDownTransfer_Sample00.xfdl"},{"code" : "Base::fileupdown_form.xfdl","num" : "2"}]});
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


		this.checkLicense("");
        
        this.loadPreloadList();

        this.loadIncludeScript("Application_Desktop.xadl");
    };
}
)();
