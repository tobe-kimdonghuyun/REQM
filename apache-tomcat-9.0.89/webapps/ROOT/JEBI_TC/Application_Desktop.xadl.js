(function()
{
    return function()  
	{
        this.on_loadAppVariables = function()
        {		
            var obj = null;
			// global dataobject
		
            // global dataset
            obj = new Dataset("gdsBrowserType", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "browserCode","type" : "STRING","size" : "256"},{"id" : "browserName","type" : "STRING","size" : "256"}]},"Rows" : [{"browserCode" : "1","browserName" : "ALL"},{"browserCode" : "2","browserName" : "Chrome"},{"browserCode" : "3","browserName" : "Edge"},{"browserCode" : "4","browserName" : "Safari"},{"browserCode" : "5","browserName" : "Opera"},{"browserCode" : "6","browserName" : "Windows_NRE"}]});
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsActionType", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "actionCode","type" : "STRING","size" : "256"},{"id" : "actionData","type" : "STRING","size" : "256"}]},"Rows" : [{},{"actionCode" : "0","actionData" : "click"},{"actionCode" : "1","actionData" : "input"},{"actionData" : "imekey","actionCode" : "2"},{"actionData" : "tab","actionCode" : "3"},{"actionData" : "scroll","actionCode" : "4"},{"actionData" : "sleep","actionCode" : "5"},{"actionData" : "compare","actionCode" : "6"},{"actionData" : "screenShot","actionCode" : "7"},{"actionCode" : "8","actionData" : "elementscreenShot"},{"actionCode" : "9","actionData" : "mouseMove"},{"actionCode" : "10","actionData" : "keypress"},{"actionCode" : "11","actionData" : "keydown"},{"actionData" : "keyup","actionCode" : "12"}]});
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsImeType", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "imeCode","type" : "STRING","size" : "256"},{"id" : "imeData","type" : "STRING","size" : "256"}]},"Rows" : [{},{"imeCode" : "1","imeData" : "KO"},{"imeCode" : "2","imeData" : "EN"},{"imeCode" : "3","imeData" : "JP"}]});
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsTC", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "level","type" : "STRING","size" : "256"},{"id" : "check","type" : "INT","size" : "256"},{"id" : "testscript_no","type" : "STRING","size" : "256"},{"id" : "testscript_id","type" : "STRING","size" : "256"},{"id" : "description","type" : "STRING","size" : "256"},{"id" : "browser","type" : "STRING","size" : "256"},{"id" : "type","type" : "STRING","size" : "256"},{"id" : "action","type" : "STRING","size" : "256"},{"id" : "element","type" : "STRING","size" : "256"},{"id" : "dictionaryKey","type" : "STRING","size" : "256"},{"id" : "count","type" : "STRING","size" : "256"},{"id" : "time","type" : "STRING","size" : "256"},{"id" : "input","type" : "STRING","size" : "256"},{"id" : "zoom","type" : "STRING","size" : "256"},{"id" : "ime","type" : "STRING","size" : "256"},{"id" : "key","type" : "STRING","size" : "256"},{"id" : "compareType","type" : "STRING","size" : "256"},{"id" : "resultValue","type" : "STRING","size" : "256"},{"id" : "expectValue","type" : "STRING","size" : "256"},{"id" : "expectUI","type" : "STRING","size" : "256"}]}});
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsCompareType", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "compareCode","type" : "STRING","size" : "256"},{"id" : "compareData","type" : "STRING","size" : "256"}]},"Rows" : [{},{"compareData" : "textValue","compareCode" : "1"},{"compareData" : "comboValue","compareCode" : "2"},{"compareCode" : "3","compareData" : "ui"},{"compareCode" : "4","compareData" : "checkStatus"},{"compareCode" : "5","compareData" : "position"},{"compareData" : "textareaValue","compareCode" : "6"}]});
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsExeption", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "nre_exception","type" : "STRING","size" : "256"}]},"Rows" : [{"nre_exception" : ":input"},{"nre_exception" : ":textarea"},{"nre_exception" : ":icontext"}]});
            this._addDataset(obj.name, obj);
            
            // global variable
            this._addVariable("workForm","");
            this._addVariable("workTC","");
            this._addVariable("bOpen","FALSE");
            
            obj = null;
        };
 
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("Application_Desktop");
            this.set_screenid("Desktop_screen");
            this.set_licenseurl("http://localhost:9090/NexacroN_client_license.xml");

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
            var frame0 = new ChildFrame("WorkFrame",null,null,null,null,null,null,"FrameBase::Form_Work.xfdl",this);
            frame0.set_showtitlebar("false");
            frame0.set_showstatusbar("false");
            this.addChild(frame0.name, frame0);
            frame0.set_formurl("FrameBase::Form_Work.xfdl");

            this.frame=frame0;
        };
        
        this.on_initEvent = function()
        {

        };
        
        // script Compiler
        this.registerScript("Application_Desktop.xadl", function() {
        this.getBrowserName = function(name)
        {
        	var len = this.gdsBrowserType.rowcount;

        	for ( var i = 0; i < len ; i++ )
        	{
        		var value = this.gdsBrowserType.getColumn(i, "browserName");

        		if ( value.toLowerCase() == name.toLowerCase() )
        			return value;
        	}

        	return "";
        }
        });
        this.checkLicense("http://localhost:9090/NexacroN_client_license.xml");
        
        this.loadPreloadList();

        this.loadIncludeScript("Application_Desktop.xadl");
    };
}
)();
