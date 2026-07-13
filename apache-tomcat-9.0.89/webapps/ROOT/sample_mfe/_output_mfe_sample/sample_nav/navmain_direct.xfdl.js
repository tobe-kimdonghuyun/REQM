(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("navmain");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("ds_menu", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "idcolumn","size" : "256","type" : "STRING"},{"id" : "captioncolumn","size" : "256","type" : "STRING"},{"id" : "captionTest","size" : "256","type" : "STRING"},{"id" : "levelcolumn","size" : "256","type" : "STRING"},{"id" : "iconcolumn","size" : "256","type" : "STRING"},{"id" : "enablecolumn","size" : "256","type" : "STRING"},{"id" : "checkboxcolumn","size" : "256","type" : "STRING"},{"id" : "hotkeycolumn","size" : "256","type" : "STRING"},{"id" : "userdatcolumn","size" : "256","type" : "STRING"},{"id" : "navtargetcolumn","size" : "256","type" : "STRING"},{"id" : "navurlcolumn","size" : "256","type" : "STRING"},{"id" : "navtargetpropertiescolumn","size" : "256","type" : "STRING"}]},"Rows" : [{"idcolumn" : "1","captioncolumn" : "File","levelcolumn" : "0","checkboxcolumn" : "false","hotkeycolumn" : "F","iconcolumn" : "file","captionTest" : "파일","enablecolumn" : "true","userdatcolumn" : "data01","navtargetcolumn" : "targetDivMenu","navurlcolumn" : "sample_nav::navform.xfdl"},{"idcolumn" : "2","captioncolumn" : "New","levelcolumn" : "1","enablecolumn" : "true","hotkeycolumn" : "CTRL+N","iconcolumn" : "theme://images/signal_Green.png","captionTest" : "신규","userdatcolumn" : "data02","navtargetcolumn" : "targetDivMenu","navurlcolumn" : "sample_nav::navform1.xfdl"},{"idcolumn" : "3","captioncolumn" : "Open","levelcolumn" : "1","hotkeycolumn" : "CTRL+O","enablecolumn" : "true","iconcolumn" : "open","captionTest" : "열기","userdatcolumn" : "data03","navtargetcolumn" : "targetDivMenu","navurlcolumn" : "sample_nav::navform1.xfdl"},{"idcolumn" : "4","captioncolumn" : "Project","levelcolumn" : "2","checkboxcolumn" : "true","hotkeycolumn" : "CTRL+P","enablecolumn" : "true","iconcolumn" : "projectopen","captionTest" : "프로젝트","userdatcolumn" : "data04","navtargetcolumn" : "targetDivMenu","navurlcolumn" : "sample_nav::navform2.xfdl"},{"idcolumn" : "5","captioncolumn" : "File..","levelcolumn" : "2","checkboxcolumn" : "true","hotkeycolumn" : "CTRL+F","enablecolumn" : "true","iconcolumn" : "fileopen","captionTest" : "파일...","userdatcolumn" : "data05","navtargetcolumn" : "targetDivMenu","navurlcolumn" : "sample_nav::navform2.xfdl"},{"idcolumn" : "6","captioncolumn" : "Save","levelcolumn" : "1","checkboxcolumn" : "true","hotkeycolumn" : "CTRL+S","enablecolumn" : "true","iconcolumn" : "save","captionTest" : "저장","userdatcolumn" : "data06","navtargetcolumn" : "targetDivMenu","navurlcolumn" : "sample_nav::navform1.xfdl"},{"idcolumn" : "7","captioncolumn" : "Exit","levelcolumn" : "1","enablecolumn" : "true","checkboxcolumn" : "true","hotkeycolumn" : "CTRL+E","iconcolumn" : "exit","captionTest" : "종료","userdatcolumn" : "data07","navtargetcolumn" : "targetDivMenu","navurlcolumn" : "sample_nav::navform1.xfdl"},{"idcolumn" : "8","captioncolumn" : "Edit","levelcolumn" : "0","enablecolumn" : "false","hotkeycolumn" : "E","iconcolumn" : "edit0","captionTest" : "수정","userdatcolumn" : "data08","navtargetcolumn" : "targetDivMenu","navurlcolumn" : "sample_nav::navform.xfdl"},{"idcolumn" : "9","captioncolumn" : "Cut","levelcolumn" : "1","checkboxcolumn" : "true","hotkeycolumn" : "Alt+X","enablecolumn" : "true","iconcolumn" : "cut","captionTest" : "자르기","userdatcolumn" : "data09","navtargetcolumn" : "targetDivMenu","navurlcolumn" : "sample_nav::navform1.xfdl"},{"idcolumn" : "10","captioncolumn" : "Copy","levelcolumn" : "1","checkboxcolumn" : "true","hotkeycolumn" : "CTRL+C","enablecolumn" : "true","iconcolumn" : "copy","captionTest" : "복사하기","userdatcolumn" : "data10","navtargetcolumn" : "targetDivMenu","navurlcolumn" : "sample_nav::navform1.xfdl"},{"idcolumn" : "11","captioncolumn" : "Undo","levelcolumn" : "1","checkboxcolumn" : "false","hotkeycolumn" : "CTRL+U","enablecolumn" : "true","iconcolumn" : "undo","captionTest" : "되돌리기","userdatcolumn" : "data11","navtargetcolumn" : "targetDivMenu","navurlcolumn" : "sample_nav::navform1.xfdl"},{"idcolumn" : "12","captioncolumn" : "1","levelcolumn" : "0","enablecolumn" : "true","iconcolumn" : "theme://images/signal_Red.png","captionTest" : "1","userdatcolumn" : "data12","navtargetcolumn" : "targetDivMenu","navurlcolumn" : "sample_nav::navform.xfdl"},{"idcolumn" : "13","captioncolumn" : "1-1","levelcolumn" : "1","enablecolumn" : "true","iconcolumn" : "theme://images/signal_Red.png","captionTest" : "1-1","hotkeycolumn" : "Shift+V","userdatcolumn" : "data13","navtargetcolumn" : "targetDivMenu","navurlcolumn" : "sample_nav::navform1.xfdl"},{"idcolumn" : "14","captioncolumn" : "1-2","levelcolumn" : "1","enablecolumn" : "true","iconcolumn" : "theme://images/signal_Red.png","captionTest" : "1-2","hotkeycolumn" : "","userdatcolumn" : "data14","navtargetcolumn" : "targetDivMenu","navurlcolumn" : "sample_nav::navform1.xfdl"},{"idcolumn" : "15","captioncolumn" : "1-2-1","levelcolumn" : "2","enablecolumn" : "true","iconcolumn" : "theme://images/signal_Red.png","captionTest" : "1-2-1","hotkeycolumn" : "CTRL+Q","userdatcolumn" : "data15","navtargetcolumn" : "targetDivMenu","navurlcolumn" : "sample_nav::navform2.xfdl"},{"idcolumn" : "16","captioncolumn" : "1-2-2","levelcolumn" : "2","iconcolumn" : "theme://images/signal_Red.png","enablecolumn" : "true","captionTest" : "1-2-2","hotkeycolumn" : "","userdatcolumn" : "data16","navtargetcolumn" : "targetDivMenu","navurlcolumn" : "sample_nav::navform2.xfdl"},{"idcolumn" : "17","captioncolumn" : "1-2-2-1","levelcolumn" : "3","iconcolumn" : "theme://images/signal_Yellow.png","enablecolumn" : "true","captionTest" : "1-2-2-1","userdatcolumn" : "data17","navtargetcolumn" : "targetDivMenu","navurlcolumn" : "sample_nav::navform3.xfdl"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Button("btn00","30","80","141","42",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00_00","29","128","141","42",null,null,null,null,null,null,this);
            obj.set_navtarget("targetDiv");
            obj.set_navurl("sample_nav::navform2.xfdl?user1=\"111\"&user2=\"222\"#btn00");
            obj.set_taborder("1");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00_00_00","29","178","141","42",null,null,null,null,null,null,this);
            obj.set_navtarget("targetDiv");
            obj.set_navurl("sample_nav::navform3.xfdl?user1=\"111\"&user2=\"222\"#btn00");
            obj.set_taborder("2");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00_00_00_00","30","230","141","42",null,null,null,null,null,null,this);
            obj.set_navtarget("targetDiv");
            obj.set_navurl("sample_nav::navform.xfdl?user1=\"111\"&user2=\"222\"#btn00");
            obj.set_taborder("3");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Div("div00","177","80","322","192",null,null,null,null,null,null,this);
            obj.set_border("1px solid blue");
            obj.set_navid("targetDiv");
            obj.set_taborder("4");
            obj.set_text("div00");
            obj.set_url("sample_nav::navform.xfdl");
            this.addChild(obj.name, obj);

            obj = new nexacro.Menu("mnu00","33","318","466","47",null,null,null,null,null,null,this);
            obj.set_captioncolumn("captioncolumn");
            obj.set_checkboxcolumn("checkboxcolumn");
            obj.set_enablecolumn("enablecolumn");
            obj.set_hotkeycolumn("hotkeycolumn");
            obj.set_iconcolumn("iconcolumn");
            obj.set_idcolumn("idcolumn");
            obj.set_innerdataset("ds_menu");
            obj.set_levelcolumn("levelcolumn");
            obj.set_navtargetcolumn("navtargetcolumn");
            obj.set_navtargetpropertiescolumn("navtargetpropertiescolumn");
            obj.set_navurlcolumn("navurlcolumn");
            obj.set_taborder("5");
            obj.set_userdatacolumn("userdatcolumn");
            this.addChild(obj.name, obj);

            obj = new nexacro.Div("div00_00","177","390","322","192",null,null,null,null,null,null,this);
            obj.set_border("1px solid blue");
            obj.set_navid("targetDivMenu");
            obj.set_taborder("6");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("grd00","545","79","135","191",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new nexacro.Div("div00_01","688","78","322","192",null,null,null,null,null,null,this);
            obj.set_border("1px solid blue");
            obj.set_taborder("8");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Tab("tab00","548","316","314","200",null,null,null,null,null,null,this);
            obj.set_navid("targetTab");
            obj.set_tabindex("0");
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new nexacro.Tabpage("Tabpage1",this.tab00);
            obj.set_initvalueid("iv_Tabpage");
            this.tab00.addChild(obj.name, obj);

            obj = new nexacro.Tabpage("Tabpage2",this.tab00);
            obj.set_text("Tabpage2");
            obj.set_url("sample_nav::navform1.xfdl");
            this.tab00.addChild(obj.name, obj);

            obj = new nexacro.Button("btn01","928","335","117","35",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("addNavTabpage");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn01_00","928","375","117","35",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("insertTabpage");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn01_00_00","928","416","117","35",null,null,null,null,null,null,this);
            obj.set_navtarget("targetTab");
            obj.set_navurl("sample_nav::navform3.xfdl");
            obj.set_taborder("12");
            obj.set_text("navtarget");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this.div00
            obj = new nexacro.Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00_00
            obj = new nexacro.Layout("default","",0,0,this.div00_00.form,function(p){});
            this.div00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00_01
            obj = new nexacro.Layout("default","",0,0,this.div00_01.form,function(p){});
            this.div00_01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab00.Tabpage1
            obj = new nexacro.Layout("default","",0,0,this.tab00.Tabpage1.form,function(p){});
            this.tab00.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab00.Tabpage2
            obj = new nexacro.Layout("default","",0,0,this.tab00.Tabpage2.form,function(p){});
            this.tab00.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new nexacro.Layout("default","mobile,medium,large,desktop",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","sample_nav::navform.xfdl");
            this._addPreloadList("fdl","sample_nav::navform1.xfdl");
        };
        
        // User Script
        this.registerScript("navmain_direct.xfdl", function(nexacro, system, trace, environment, application) {

        this.div00_onsetfocus = function(obj,e)
        {
        	trace("div00_onsetfocus");
        };

        this.navmain_onactivate = function(obj,e)
        {
        trace("navmain_onactivate");

        };

        this.navmain_onsetfocus = function(obj,e)
        {
        	trace("navmain_onsetfocus");
        };

        this.btn00_onclick = function(obj,e)
        {
         this.div00.url = "sample_nav::navform1.xfdl";
        	//navtarget="targetDiv" navurl="sample_nav::navform1.xfdl?user1=&quot;111&quot;&amp;user2=&quot;222&quot;#btn00"
        };

        this.btn01_onclick = function(obj,e)
        {


         this.tab00.defaulttabpageinitvalueid = "iv_Tabpage";
           this.tab00.addNavTabpage("sample_nav::navform3.xfdl");

         return;
        	var tabpage = new nexacro.Tabpage("tabpage00", this.tab00)
        	tabpage.url = "sample_nav::navform.xfdl"
        	tabpage.text = "Sample";
        	this.tab00.addChild("tabpage00", tabpage);
        	tabpage.show();

        };

        this.btn02_onclick = function(obj,e)
        {
        	this.tab00.insertTabpage("tabpage111", -1, "sample_nav::navform2.xfdl");
        };

        this.mnu00_onmenuclick = function(obj,e)
        {
        	trace("menuclick: userdata [" + e.userdata + "] index [" + e.index+ "]") ;
        };

        this.navmain_onurlduplicate = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onactivate",this.navmain_onactivate,this);
            this.addEventHandler("onsetfocus",this.navmain_onsetfocus,this);
            this.addEventHandler("onurlduplicate",this.navmain_onurlduplicate,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.div00.addEventHandler("onsetfocus",this.div00_onsetfocus,this);
            this.mnu00.addEventHandler("onmenuclick",this.mnu00_onmenuclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.btn01_00.addEventHandler("onclick",this.btn02_onclick,this);
            this.btn01_00_00.addEventHandler("onclick",this.btn02_onclick,this);
        };

        this.loadIncludeScript("navmain_direct.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
