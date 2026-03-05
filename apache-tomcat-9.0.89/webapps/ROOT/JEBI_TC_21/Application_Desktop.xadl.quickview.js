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
            obj._setContents("<ColumnInfo><Column id=\"browserCode\" type=\"STRING\" size=\"256\"/><Column id=\"browserName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"browserCode\">1</Col><Col id=\"browserName\">ALL</Col></Row><Row><Col id=\"browserCode\">2</Col><Col id=\"browserName\">Chrome</Col></Row><Row><Col id=\"browserCode\">3</Col><Col id=\"browserName\">Edge</Col></Row><Row><Col id=\"browserCode\">4</Col><Col id=\"browserName\">Safari</Col></Row><Row><Col id=\"browserCode\">5</Col><Col id=\"browserName\">Opera</Col></Row><Row><Col id=\"browserCode\">6</Col><Col id=\"browserName\">Windows_NRE</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsActionType", this);
            obj._setContents("<ColumnInfo><Column id=\"actionCode\" type=\"STRING\" size=\"256\"/><Column id=\"actionData\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row><Col id=\"actionCode\">0</Col><Col id=\"actionData\">click</Col></Row><Row><Col id=\"actionCode\">1</Col><Col id=\"actionData\">input</Col></Row><Row><Col id=\"actionData\">imekey</Col><Col id=\"actionCode\">2</Col></Row><Row><Col id=\"actionData\">tab</Col><Col id=\"actionCode\">3</Col></Row><Row><Col id=\"actionData\">scroll</Col><Col id=\"actionCode\">4</Col></Row><Row><Col id=\"actionData\">sleep</Col><Col id=\"actionCode\">5</Col></Row><Row><Col id=\"actionData\">compare</Col><Col id=\"actionCode\">6</Col></Row><Row><Col id=\"actionData\">screenShot</Col><Col id=\"actionCode\">7</Col></Row><Row><Col id=\"actionCode\">8</Col><Col id=\"actionData\">elementscreenShot</Col></Row><Row><Col id=\"actionCode\">9</Col><Col id=\"actionData\">mouseMove</Col></Row><Row><Col id=\"actionCode\">10</Col><Col id=\"actionData\">keypress</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsImeType", this);
            obj._setContents("<ColumnInfo><Column id=\"imeCode\" type=\"STRING\" size=\"256\"/><Column id=\"imeData\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row><Col id=\"imeCode\">1</Col><Col id=\"imeData\">KO</Col></Row><Row><Col id=\"imeCode\">2</Col><Col id=\"imeData\">EN</Col></Row><Row><Col id=\"imeCode\">3</Col><Col id=\"imeData\">JP</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsTC", this);
            obj._setContents("<ColumnInfo><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"check\" type=\"INT\" size=\"256\"/><Column id=\"testscript_no\" type=\"STRING\" size=\"256\"/><Column id=\"testscript_id\" type=\"STRING\" size=\"256\"/><Column id=\"description\" type=\"STRING\" size=\"256\"/><Column id=\"browser\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"action\" type=\"STRING\" size=\"256\"/><Column id=\"element\" type=\"STRING\" size=\"256\"/><Column id=\"dictionaryKey\" type=\"STRING\" size=\"256\"/><Column id=\"count\" type=\"STRING\" size=\"256\"/><Column id=\"time\" type=\"STRING\" size=\"256\"/><Column id=\"input\" type=\"STRING\" size=\"256\"/><Column id=\"zoom\" type=\"STRING\" size=\"256\"/><Column id=\"ime\" type=\"STRING\" size=\"256\"/><Column id=\"key\" type=\"STRING\" size=\"256\"/><Column id=\"compareType\" type=\"STRING\" size=\"256\"/><Column id=\"resultValue\" type=\"STRING\" size=\"256\"/><Column id=\"expectValue\" type=\"STRING\" size=\"256\"/><Column id=\"expectUI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsCompareType", this);
            obj._setContents("<ColumnInfo><Column id=\"compareCode\" type=\"STRING\" size=\"256\"/><Column id=\"compareData\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row><Col id=\"compareData\">textValue</Col><Col id=\"compareCode\">1</Col></Row><Row><Col id=\"compareData\">comboValue</Col><Col id=\"compareCode\">2</Col></Row><Row><Col id=\"compareCode\">3</Col><Col id=\"compareData\">ui</Col></Row><Row><Col id=\"compareCode\">4</Col><Col id=\"compareData\">checkStatus</Col></Row><Row><Col id=\"compareCode\">5</Col><Col id=\"compareData\">position</Col></Row><Row><Col id=\"compareData\">textareaValue</Col><Col id=\"compareCode\">6</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsExeption", this);
            obj._setContents("<ColumnInfo><Column id=\"nre_exception\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"nre_exception\">:input</Col></Row><Row><Col id=\"nre_exception\">:textarea</Col></Row><Row><Col id=\"nre_exception\">:icontext</Col></Row></Rows>");
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
		this.checkLicense("");
        
        this.loadPreloadList();

        this.loadIncludeScript("Application_Desktop.xadl");
    };
}
)();
