(function()
{
    return function()
    {
        this.on_loadAppVariables = function()
        {		
            var obj = null;
            
			// global dataobject
		
            // global dataset
            obj = new Dataset("gdsOpenList", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"caption\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_EX_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsLeftMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_CD\">0100</Col><Col id=\"UP_MENU_CD\">0</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"MENU_NM\">RestAPI 통신</Col></Row><Row><Col id=\"MENU_CD\">0101</Col><Col id=\"UP_MENU_CD\">0100</Col><Col id=\"MENU_NM\">멀티로우</Col><Col id=\"PGM_PATH\">Base</Col><Col id=\"PGM_ID\">rest-sample/crudMulti.xfdl</Col><Col id=\"MENU_LVL\">1</Col></Row><Row><Col id=\"MENU_CD\">0102</Col><Col id=\"UP_MENU_CD\">0100</Col><Col id=\"MENU_NM\">단건처리(버튼페이징)</Col><Col id=\"PGM_PATH\">Base</Col><Col id=\"PGM_ID\">rest-sample/crudSingleBtn.xfdl</Col><Col id=\"MENU_LVL\">1</Col></Row><Row><Col id=\"MENU_CD\">0103</Col><Col id=\"UP_MENU_CD\">0100</Col><Col id=\"MENU_NM\">단건처리(스크롤페이징)</Col><Col id=\"PGM_PATH\">Base</Col><Col id=\"PGM_ID\">rest-sample/crudSingleScroll.xfdl</Col><Col id=\"MENU_LVL\">1</Col></Row><Row><Col id=\"MENU_CD\">0104</Col><Col id=\"UP_MENU_CD\">0100</Col><Col id=\"MENU_NM\">파일 업/다운</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"PGM_PATH\">Base</Col><Col id=\"PGM_ID\">rest-sample/filetransfer.xfdl</Col></Row><Row><Col id=\"MENU_CD\">0105</Col><Col id=\"UP_MENU_CD\">0100</Col><Col id=\"MENU_NM\">대용량데이터</Col><Col id=\"PGM_PATH\">Base</Col><Col id=\"PGM_ID\">rest-sample/largeData.xfdl</Col><Col id=\"MENU_LVL\">1</Col></Row><Row><Col id=\"MENU_CD\">0200</Col><Col id=\"UP_MENU_CD\">0</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"MENU_NM\">RestAPI 프로미스 통신</Col></Row><Row><Col id=\"MENU_CD\">0201</Col><Col id=\"UP_MENU_CD\">0200</Col><Col id=\"MENU_NM\">멀티로우</Col><Col id=\"PGM_PATH\">Base</Col><Col id=\"PGM_ID\">rest-sample-promise/crudMulti.xfdl</Col><Col id=\"MENU_LVL\">1</Col></Row><Row><Col id=\"MENU_CD\">0202</Col><Col id=\"UP_MENU_CD\">0200</Col><Col id=\"MENU_NM\">단건처리(버튼페이징)</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"PGM_PATH\">Base</Col><Col id=\"PGM_ID\">rest-sample-promise/crudSingleBtn.xfdl</Col></Row><Row><Col id=\"MENU_CD\">0203</Col><Col id=\"UP_MENU_CD\">0200</Col><Col id=\"MENU_NM\">단건처리(스크롤페이징)</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"PGM_PATH\">Base</Col><Col id=\"PGM_ID\">rest-sample-promise/crudSingleScroll.xfdl</Col></Row><Row><Col id=\"MENU_CD\">0204</Col><Col id=\"UP_MENU_CD\">0200</Col><Col id=\"MENU_NM\">파일 업/다운</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"PGM_PATH\">Base</Col><Col id=\"PGM_ID\">rest-sample-promise/filetransfer.xfdl</Col></Row><Row><Col id=\"MENU_CD\">0205</Col><Col id=\"UP_MENU_CD\">0200</Col><Col id=\"MENU_NM\">대용량데이터</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"PGM_PATH\">Base</Col><Col id=\"PGM_ID\">rest-sample-promise/largeData.xfdl</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsOpenMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" type=\"STRING\" size=\"8\"/><Column id=\"UP_MENU_CD\" type=\"STRING\" size=\"8\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"50\"/><Column id=\"MENU_LVL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PGM_PATH\" type=\"STRING\" size=\"200\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"200\"/><Column id=\"WINID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_domain", this);
            obj._setContents("<ColumnInfo><Column id=\"group\" type=\"STRING\" size=\"256\"/><Column id=\"mode\" type=\"STRING\" size=\"256\"/><Column id=\"prod\" type=\"STRING\" size=\"256\"/><Column id=\"qa\" type=\"STRING\" size=\"256\"/><Column id=\"dev\" type=\"STRING\" size=\"256\"/><Column id=\"local\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"group\">app01</Col><Col id=\"mode\">local</Col><Col id=\"prod\">https://demo.tobesoft.com/</Col><Col id=\"qa\">https://demo.tobesoft.com/</Col><Col id=\"dev\">https://demo.tobesoft.com/</Col><Col id=\"local\">http://172.10.12.45:9090/</Col></Row><Row><Col id=\"group\">app02</Col><Col id=\"mode\">dev</Col><Col id=\"prod\">https://demo.tobesoft.com/</Col><Col id=\"qa\">https://demo.tobesoft.com/</Col><Col id=\"dev\">https://demo.tobesoft.com/</Col><Col id=\"local\">http://localhost:8081/</Col></Row><Row><Col id=\"group\">app03</Col><Col id=\"mode\">dev</Col><Col id=\"prod\">https://demo.tobesoft.com/</Col><Col id=\"qa\">https://demo.tobesoft.com/</Col><Col id=\"dev\">https://demo.tobesoft.com/</Col><Col id=\"local\">http://localhost:8082/</Col></Row></Rows>");
            this._addDataset(obj.name, obj);
            
            // global variable

            
            obj = null;
        };
        
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("App_Desktop");
            this.set_screenid("Desktop_screen");

            if (this._is_attach_childframe)
            	return;
            
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","1280","720",null,null,this);
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("false");
            mainframe.set_titletext("MDI (Frameset)");
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
        this.registerScript("App_Desktop.xadl", function() {
        this.VFSet01;
        this.VFSet02;
        this.HFSet01;
        this.TopFrame;
        this.LeftFrame;
        this.MdiFrame;
        this.BottomFrame;
        this.WorkFrame;

        this.Application_onload = function(obj,e)
        {
        	this.VFSet01 = this.mainframe.VFSet01;
        	this.VFSet02 = this.mainframe.VFSet01.HFSet01.VFSet02;
        	this.HFSet01 = this.mainframe.VFSet01.HFSet01;
        	this.TopFrame = this.mainframe.VFSet01.TopFrame;
        	this.LeftFrame = this.mainframe.VFSet01.HFSet01.LeftFrame;
        	this.MdiFrame = this.mainframe.VFSet01.HFSet01.VFSet02.MdiFrame;
        	this.BottomFrame = this.mainframe.VFSet01.BottomFrame;
        	this.WorkFrame = this.mainframe.VFSet01.HFSet01.VFSet02.WorkFrame;
        };

        });
		this.checkLicense("");
        
        this.loadPreloadList();
        this.loadCss("xcssrc::temp_main.xcss");
        this.loadIncludeScript("App_Desktop.xadl");
    };
}
)();
