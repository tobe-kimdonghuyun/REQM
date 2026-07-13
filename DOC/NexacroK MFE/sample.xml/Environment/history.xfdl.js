(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_font("normal 700 18px/normal \"-apple-system,BlinkMacSystemFont,Roboto,Helvetica,Arial,Apple SD Gothic Neo,sans-serif\"");
            this.set_name("history");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.Button("btnmenu1","23","93","150","34",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("menu1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn01","23","297","150","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("fetchStateData");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btnmenu2","23","133","150","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("menu2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btnmenu3","23","173","150","34",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("menu3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Div("div00","239","92","311","135",null,null,null,null,null,null,this);
            obj.set_background("azure");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn01_00","23","337","150","34",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("restoreStateData");
            this.addChild(obj.name, obj);

            obj = new nexacro.Div("div00_00","236","240","311","137",null,null,null,null,null,null,this);
            obj.set_background("cornsilk");
            obj.set_taborder("6");
            obj.set_url("Environment::history_menu4.xfdl");
            this.addChild(obj.name, obj);

            obj = new nexacro.Tab("tab00","713","92","427","285",null,null,null,null,null,null,this);
            obj.set_border("1px solid pink");
            obj.set_tabindex("0");
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new nexacro.Tabpage("Tabpage1",this.tab00);
            obj.set_text("Tabpage1");
            obj.set_url("Environment::history_menu1.xfdl");
            this.tab00.addChild(obj.name, obj);

            obj = new nexacro.Tabpage("Tabpage2",this.tab00);
            obj.set_text("Tabpage2");
            obj.set_url("Environment::history_menu2.xfdl");
            this.tab00.addChild(obj.name, obj);

            obj = new nexacro.Tabpage("Tabpage3",this.tab00);
            obj.set_text("Tabpage3");
            this.tab00.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt03","23","231","194","36",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new nexacro.View("View00","562","91","137","286",null,null,null,null,null,null,this);
            obj.set_background("linen");
            obj.set_taborder("10");
            obj.set_text("View00");
            obj.set_viewdataset("viewdataset");
            this.addChild(obj.name, obj);

            obj = new nexacro.Combo("cbobrowserreloadkey","230","10","228","31",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_taborder("11");
            var cbobrowserreloadkey_innerdataset = new nexacro.NormalDataset("cbobrowserreloadkey_innerdataset", obj);
            cbobrowserreloadkey_innerdataset._setContents({"ColumnInfo" : {"Column" : [{"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "custom","datacolumn" : "custom"},{"codecolumn" : "reloadactiveform","datacolumn" : "reloadactiveform"},{"codecolumn" : "prevent","datacolumn" : "prevent"}]});
            obj.set_innerdataset(cbobrowserreloadkey_innerdataset);
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("sta00_01","23","6","181","39",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("browserreloadkey");
            obj.set_wordWrap("none");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("strbreadcrumb","234","40","656","40",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stlog","30","420","650","348",null,null,null,null,null,null,this);
            obj.set_border("1px solid black");
            obj.set_font("normal 700 14px/normal \"-apple-system,BlinkMacSystemFont,Roboto,Helvetica,Arial,Apple SD Gothic Neo,sans-serif\"");
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_textAlign("left");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stlog00","715","416","650","348",null,null,null,null,null,null,this);
            obj.set_border("1px solid black");
            obj.set_font("normal 700 14px/normal \"-apple-system,BlinkMacSystemFont,Roboto,Helvetica,Arial,Apple SD Gothic Neo,sans-serif\"");
            obj.set_taborder("14");
            obj.set_text("");
            obj.set_textAlign("left");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("sta00","29","384","168","32",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("fetch");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("sta00_00","714","384","168","32",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("restore");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00","525","9","89","28",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("back");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn02","624","9","89","28",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("forward");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this.div00
            obj = new nexacro.Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00_00
            obj = new nexacro.Layout("default","",0,0,this.div00_00.form,function(p){});
            this.div00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab00.Tabpage1
            obj = new nexacro.Layout("default","",0,0,this.tab00.Tabpage1.form,function(p){});
            this.tab00.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab00.Tabpage2
            obj = new nexacro.Layout("default","",0,0,this.tab00.Tabpage2.form,function(p){});
            this.tab00.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab00.Tabpage3.form
            obj = new nexacro.Layout("default","",0,0,this.tab00.Tabpage3.form,function(p){});
            this.tab00.Tabpage3.form.addLayout(obj.name, obj);

            //-- Default Layout : this.View00
            obj = new nexacro.Layout("default","",0,0,this.View00.form,function(p){});
            this.View00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new nexacro.Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Environment::history_menu4.xfdl");
            this._addPreloadList("fdl","Environment::history_menu1.xfdl");
            this._addPreloadList("fdl","Environment::history_menu2.xfdl");
        };
        
        // User Script
        this.registerScript("history.xfdl", function(nexacro, system, trace, environment, application) {

        this.menuid = "";
        this.btn00_onclick = function(obj,e)
        {
            let url = "history_" + obj.text + ".xfdl";
        	this.goMenu(obj.id, url);
        };

        let count = 0;
        let strbreadcrumb = "";
        this.goMenu = function(key, url, data)
        {
        	this.fetchStateData(true);  // 이전 데이타 저장

        	this.div00.userdata = this.edt03.value =key + ":"+ count++;
            this.div00.url = "Environment::"+url;
        	this.menuid = key;
        	strbreadcrumb += " > " + key;
        	this.strbreadcrumb.text = strbreadcrumb;
        	nexacro.History.pushState(key, "#="+url);
        	//nexacro.History.pushState(key);
        	//this.fetchStateData();  // 이후 데이타 저장

        };

        this.goMenubyBackButton = function(key, url, data)
        {
        	if (data)
        	{
        	this.restoreStateData(true);
        	/*
        		this.div00.userdata = this.edt03.value =key + ":"+ count++;
        		this.div00.url = data.formurl;
            //this.div00.url = "Environment::"+url;	*/
        		this.menuid = key;
        		strbreadcrumb += " > " + key;
        		this.strbreadcrumb.text = strbreadcrumb;
        	}
        	else
        	{
        		this.div00.userdata = this.edt03.value = key + ":"+ count++;
        		this.div00.url = "";
        	}

        };

        this.btn01_onclick = function(obj,e)
        {
        	this.fetchStateData(true);
        };

        this.stlogtext = "";
        this.history_onfetchstatedata = function(obj,e)
        {

        this.save_State();
        	trace("onfetchstatedata:  "+ this.div00.url);
        	trace("onfetchstatedata:  "+ nexacro.History._currentstate);

        	let data = nexacro.History.getCurrentState();
        	this.stlogtext  += "[" + JSON.stringify(data) + "]\n";
        	this.stlog.text = this.stlogtext;
        	//return false;
        };

        this.save_State = function()
        {
            nexacro.History.setCurrentStateData("formurl", this.div00.url);
            nexacro.History.setCurrentStateData("currentmenu", this.menuid);
            nexacro.History.setCurrentStateData("randomtime", this.div00.userdata);
        }

        let strestorelogtext = "";
        this.history_onrestorestatedata = function(obj,e)
        {
        	let formurl = nexacro.History.getCurrentStateData("formurl");
        	let currentmenu = nexacro.History.getCurrentStateData("currentmenu");
        	let randomtime = nexacro.History.getCurrentStateData("randomtime");

        	trace("onrestorestatedata:  formid ["+formurl + "] currentmenu :[" +  currentmenu +" ]" );

        	let data = nexacro.History.getCurrentState();
        	strestorelogtext  += "[" + JSON.stringify(data)+ "]\n";
        	this.stlog00.text = strestorelogtext;

        	this.edt03.value  = randomtime;
        	this.div00.userdata = randomtime;
        	this.div00.url = formurl;
        	//return false;
        };

        this.btn01_00_onclick = function(obj,e)
        {
        	this.restoreStateData(true);
        };



        this.cbobrowserreloadkey_onitemchanged = function(obj,e)
        {
        	let env = nexacro.getEnvironment();
        	env.browserreloadkey = e.postvalue;
        };

        this.history_onload = function(obj,e)
        {
        	 trace("history_onload : history");
        };

        this.btn02_onclick = function(obj,e)
        {
        	nexacro.History.forward();
        };

        this.btnback_onclick = function(obj,e)
        {
        	nexacro.History.back();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onfetchstatedata",this.history_onfetchstatedata,this);
            this.addEventHandler("onload",this.history_onload,this);
            this.addEventHandler("onrestorestatedata",this.history_onrestorestatedata,this);
            this.btnmenu1.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.btnmenu2.addEventHandler("onclick",this.btn00_onclick,this);
            this.btnmenu3.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn01_00.addEventHandler("onclick",this.btn01_00_onclick,this);
            this.cbobrowserreloadkey.addEventHandler("onitemchanged",this.cbobrowserreloadkey_onitemchanged,this);
            this.btn00.addEventHandler("onclick",this.btnback_onclick,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
        };

        this.loadIncludeScript("history.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
