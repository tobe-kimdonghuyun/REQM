(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("all");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,1080);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,"100","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_TF_TopBg");
            this.addChild(obj.name, obj);

            obj = new Div("divLeft","0","100","280","793",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_url("Frame::left.xfdl");
            obj.set_cssclass("div_LF_LeftBox");
            this.addChild(obj.name, obj);

            obj = new Div("divWork","divLeft:0","100",null,"793","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_url("Frame::work.xfdl");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divMain","divLeft:0","100",null,"793","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_url("Frame::main.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("stcMainMenu","20","20","400","60",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("<fc v=\'#ED392B\'>Daewooenc</fc> & Nexacro BMT");
            obj.set_cssclass("sta_LF_LeftTitle");
            obj.set_cursor("pointer");
            obj.set_fittocontents("width");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00",null,"20","122","20","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "dat","datacolumn" : "SSV"},{"codecolumn" : "xml","datacolumn" : "XML"}]});
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_text("SSV");
            obj.set_value("dat");
            obj.set_index("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divLeft
            obj = new Layout("default","",0,0,this.divLeft.form,function(p){});
            this.divLeft.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divWork
            obj = new Layout("default","",0,0,this.divWork.form,function(p){});
            this.divWork.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain
            obj = new Layout("default","",0,0,this.divMain.form,function(p){});
            this.divMain.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1920,1080,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame::left.xfdl");
            this._addPreloadList("fdl","Frame::work.xfdl");
            this._addPreloadList("fdl","Frame::main.xfdl");
        };
        
        // User Script
        this.registerScript("all.xfdl", function() {

        /*
         *	root 온로드
         */
        this.all_onload = function(obj,e)
        {
        	this.stcMainMenu.set_text("<fc v='#ED392B'>Daewooenc</fc> & Nexacro BMT " + "(메인화면)");
        	this.resetScroll();
        };

        this.showMenuPage = function(menuId, menuUrl)
        {
        	const workForm = this.divWork.form;

        	this.divMain.set_visible(false);
        	this.divWork.set_visible(true);

        	this.stcMainMenu.set_text("<fc v='#ED392B'>Daewooenc</fc> & Nexacro BMT (" + nexacro.getApplication().gdsMenu.lookup("id", menuId, "caption") + ")");
        	workForm["loadMenuPage"].call(workForm, menuId, menuUrl);
        	this.resetScroll();
        };

        this.showMainPage = function(menuId, menuUrl)
        {
        	const workForm = this.divWork.form;

        	this.divMain.set_visible(true);
        	this.divWork.set_visible(false);

        	this.stcMainMenu.set_text("<fc v='#ED392B'>Daewooenc</fc> & Nexacro BMT " + "(메인화면)");
        	workForm["unloadMenuPage"].call(workForm, menuId, menuUrl);
        	this.resetScroll();
        };

        this.stcMainMenu_onclick = function(obj,e)
        {
        	this.showMainPage();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.all_onload,this);
            this.stcMainMenu.addEventHandler("onclick",this.stcMainMenu_onclick,this);
            this.Radio00.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
        };
        this.loadIncludeScript("all.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
