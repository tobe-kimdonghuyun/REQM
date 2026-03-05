(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("Form_Work");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00","10","6","130","62",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("tabpage");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","20","100",null,"75","120",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("공지사항");
            obj.set_cssclass("sta_WF_Title");
            obj.set_accessibilityrole("heading");
            this.addChild(obj.name, obj);

            obj = new Tab("tabMain","20","170",null,null,"120","33",null,null,null,null,this);
            obj.set_initvalueid("iv_Tab0");
            obj.set_tabindex("1");
            obj.set_taborder("2");
            obj.set_preload("false");
            obj.set_focusacceptable("true");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tabpage_svcNtc",this.tabMain);
            obj.set_text("서비스");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.tabMain.addChild(obj.name, obj);

            obj = new Button("Button00","26","46","354","115",null,null,null,null,null,null,this.tabMain.tabpage_svcNtc.form);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.tabMain.tabpage_svcNtc.addChild(obj.name, obj);

            obj = new Tabpage("tabpage_sysNtc",this.tabMain);
            obj.set_text("시스템");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.tabMain.addChild(obj.name, obj);

            obj = new Button("Button00","84","38","431","197",null,null,null,null,null,null,this.tabMain.tabpage_sysNtc.form);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.tabMain.tabpage_sysNtc.addChild(obj.name, obj);

            obj = new Tabpage("tabpage_clsIapNtc",this.tabMain);
            obj.set_text("학급알림");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.tabMain.addChild(obj.name, obj);

            obj = new Button("Button00","104","87","277","88",null,null,null,null,null,null,this.tabMain.tabpage_clsIapNtc.form);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.tabMain.tabpage_clsIapNtc.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.tabMain.tabpage_svcNtc.form
            obj = new Layout("default","",0,0,this.tabMain.tabpage_svcNtc.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00.set_taborder("0");
                p.Button00.set_text("Button00");
                p.Button00.move("26","46","354","115",null,null);
            	}
            );
            this.tabMain.tabpage_svcNtc.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.tabMain.tabpage_svcNtc.form
            obj = new Layout("Tablet_screen","",0,0,this.tabMain.tabpage_svcNtc.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.tabMain.tabpage_svcNtc.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.tabMain.tabpage_svcNtc.form
            obj = new Layout("Phone_screen","",0,0,this.tabMain.tabpage_svcNtc.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.tabMain.tabpage_svcNtc.form.addLayout(obj.name, obj);
            //-- Default Layout : this.tabMain.tabpage_sysNtc.form
            obj = new Layout("default","",0,0,this.tabMain.tabpage_sysNtc.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00.set_taborder("0");
                p.Button00.set_text("Button00");
                p.Button00.move("84","38","431","197",null,null);
            	}
            );
            this.tabMain.tabpage_sysNtc.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.tabMain.tabpage_sysNtc.form
            obj = new Layout("Tablet_screen","",0,0,this.tabMain.tabpage_sysNtc.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.tabMain.tabpage_sysNtc.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.tabMain.tabpage_sysNtc.form
            obj = new Layout("Phone_screen","",0,0,this.tabMain.tabpage_sysNtc.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.tabMain.tabpage_sysNtc.form.addLayout(obj.name, obj);
            //-- Default Layout : this.tabMain.tabpage_clsIapNtc.form
            obj = new Layout("default","",0,0,this.tabMain.tabpage_clsIapNtc.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00.set_taborder("0");
                p.Button00.set_text("Button00");
                p.Button00.move("104","87","277","88",null,null);
            	}
            );
            this.tabMain.tabpage_clsIapNtc.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.tabMain.tabpage_clsIapNtc.form
            obj = new Layout("Tablet_screen","",0,0,this.tabMain.tabpage_clsIapNtc.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.tabMain.tabpage_clsIapNtc.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.tabMain.tabpage_clsIapNtc.form
            obj = new Layout("Phone_screen","",0,0,this.tabMain.tabpage_clsIapNtc.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.tabMain.tabpage_clsIapNtc.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","desktopScr",1280,720,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("Form_Work");

                p.Button00.set_taborder("0");
                p.Button00.set_text("tabpage");
                p.Button00.move("10","6","130","62",null,null);

                p.staTitle.set_taborder("1");
                p.staTitle.set_text("공지사항");
                p.staTitle.set_cssclass("sta_WF_Title");
                p.staTitle.set_accessibilityrole("heading");
                p.staTitle.move("20","100",null,"75","120",null);

                p.tabMain.set_taborder("2");
                p.tabMain.set_preload("false");
                p.tabMain.set_focusacceptable("true");
                p.tabMain.move("20","170",null,null,"120","33");

                p.tabMain.tabpage_svcNtc.set_text("서비스");
                p.tabMain.tabpage_svcNtc.set_formscrollbartype("none none");
                p.tabMain.tabpage_svcNtc.set_formscrolltype("none");

                p.tabMain.tabpage_sysNtc.set_text("시스템");
                p.tabMain.tabpage_sysNtc.set_formscrollbartype("none none");
                p.tabMain.tabpage_sysNtc.set_formscrolltype("none");

                p.tabMain.tabpage_clsIapNtc.set_text("학급알림");
                p.tabMain.tabpage_clsIapNtc.set_formscrollbartype("none none");
                p.tabMain.tabpage_clsIapNtc.set_formscrolltype("none");
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Tablet_screen","tableScr",800,1280,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Phone_screen","mobileScr",480,768,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.tabMain.addEventHandler("onchanged",this.tabMain_onchanged,this);
        };
        this.loadIncludeScript("rp103024.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
