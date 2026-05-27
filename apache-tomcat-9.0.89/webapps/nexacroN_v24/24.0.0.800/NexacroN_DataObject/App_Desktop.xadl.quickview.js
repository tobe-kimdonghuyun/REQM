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
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "code","type" : "STRING","size" : "256"},{"id" : "caption","type" : "STRING","size" : "256"},{"id" : "BTN_ID","type" : "STRING","size" : "256"},{"id" : "BTN_EX_ID","type" : "STRING","size" : "256"}]}});
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsLeftMenu", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "MENU_CD","type" : "STRING","size" : "256"},{"id" : "UP_MENU_CD","type" : "STRING","size" : "256"},{"id" : "MENU_NM","type" : "STRING","size" : "256"},{"id" : "MENU_LVL","type" : "STRING","size" : "256"},{"id" : "PGM_PATH","type" : "STRING","size" : "256"},{"id" : "PGM_ID","type" : "STRING","size" : "256"}]},"Rows" : [{"MENU_CD" : "0100","UP_MENU_CD" : "0","MENU_LVL" : "0","MENU_NM" : "RestAPI 통신"},{"MENU_CD" : "0101","UP_MENU_CD" : "0100","MENU_NM" : "멀티로우","PGM_PATH" : "Base","PGM_ID" : "rest-sample/crudMulti.xfdl","MENU_LVL" : "1"},{"MENU_CD" : "0102","UP_MENU_CD" : "0100","MENU_NM" : "단건처리(버튼페이징)","PGM_PATH" : "Base","PGM_ID" : "rest-sample/crudSingleBtn.xfdl","MENU_LVL" : "1"},{"MENU_CD" : "0103","UP_MENU_CD" : "0100","MENU_NM" : "단건처리(스크롤페이징)","PGM_PATH" : "Base","PGM_ID" : "rest-sample/crudSingleScroll.xfdl","MENU_LVL" : "1"},{"MENU_CD" : "0104","UP_MENU_CD" : "0100","MENU_NM" : "파일 업/다운","MENU_LVL" : "1","PGM_PATH" : "Base","PGM_ID" : "rest-sample/filetransfer.xfdl"},{"MENU_CD" : "0105","UP_MENU_CD" : "0100","MENU_NM" : "대용량데이터","PGM_PATH" : "Base","PGM_ID" : "rest-sample/largeData.xfdl","MENU_LVL" : "1"},{"MENU_CD" : "0200","UP_MENU_CD" : "0","MENU_LVL" : "0","MENU_NM" : "RestAPI 프로미스 통신"},{"MENU_CD" : "0201","UP_MENU_CD" : "0200","MENU_NM" : "멀티로우","PGM_PATH" : "Base","PGM_ID" : "rest-sample-promise/crudMulti.xfdl","MENU_LVL" : "1"},{"MENU_CD" : "0202","UP_MENU_CD" : "0200","MENU_NM" : "단건처리(버튼페이징)","MENU_LVL" : "1","PGM_PATH" : "Base","PGM_ID" : "rest-sample-promise/crudSingleBtn.xfdl"},{"MENU_CD" : "0203","UP_MENU_CD" : "0200","MENU_NM" : "단건처리(스크롤페이징)","MENU_LVL" : "1","PGM_PATH" : "Base","PGM_ID" : "rest-sample-promise/crudSingleScroll.xfdl"},{"MENU_CD" : "0204","UP_MENU_CD" : "0200","MENU_NM" : "파일 업/다운","MENU_LVL" : "1","PGM_PATH" : "Base","PGM_ID" : "rest-sample-promise/filetransfer.xfdl"},{"MENU_CD" : "0205","UP_MENU_CD" : "0200","MENU_NM" : "대용량데이터","MENU_LVL" : "1","PGM_PATH" : "Base","PGM_ID" : "rest-sample-promise/largeData.xfdl"}]});
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsOpenMenu", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "MENU_CD","type" : "STRING","size" : "8"},{"id" : "UP_MENU_CD","type" : "STRING","size" : "8"},{"id" : "MENU_NM","type" : "STRING","size" : "50"},{"id" : "MENU_LVL","type" : "BIGDECIMAL","size" : "22"},{"id" : "PGM_PATH","type" : "STRING","size" : "200"},{"id" : "PGM_ID","type" : "STRING","size" : "200"},{"id" : "WINID","type" : "STRING","size" : "256"}]}});
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_domain", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "group","type" : "STRING","size" : "256"},{"id" : "mode","type" : "STRING","size" : "256"},{"id" : "prod","type" : "STRING","size" : "256"},{"id" : "qa","type" : "STRING","size" : "256"},{"id" : "dev","type" : "STRING","size" : "256"},{"id" : "local","type" : "STRING","size" : "256"}]},"Rows" : [{"group" : "app01","mode" : "local","prod" : "http://172.10.12.45:9090/","qa" : "http://172.10.12.45:9090/","dev" : "http://172.10.12.45:9090/","local" : "http://172.10.12.45:9090/"},{"group" : "app02","mode" : "dev","prod" : "https://demo.tobesoft.com/","qa" : "https://demo.tobesoft.com/","dev" : "https://demo.tobesoft.com/","local" : "http://localhost:8081/"},{"group" : "app03","mode" : "dev","prod" : "https://demo.tobesoft.com/","qa" : "https://demo.tobesoft.com/","dev" : "https://demo.tobesoft.com/","local" : "http://localhost:8082/"},{"mode" : "dev","prod" : "http://172.10.12.45:9091/","qa" : "http://172.10.12.45:9091/","dev" : "http://172.10.12.45:9091/","local" : "http://172.10.12.45:9091/","group" : "app04"},{"group" : "app05","mode" : "local","prod" : "https://demo.tobesoft.com/","qa" : "https://demo.tobesoft.com/","dev" : "https://demo.tobesoft.com/","local" : "http://172.10.12.45:8080/"}]});
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
