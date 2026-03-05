(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("scr_btbnt00_m01");
            this.set_titletext("공지사항목록조회_시스템");
            if (Form == this.constructor)
            {
                this._setFormPosition(1320,550);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSysNtc", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"rownum\" type=\"STRING\" size=\"256\"/><Column id=\"ntcMteTitlNm\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ntcMteTitlNm\">첫번째</Col><Col id=\"rownum\">1</Col><Col id=\"regDt\">2025/07/14</Col></Row><Row><Col id=\"ntcMteTitlNm\">두번째</Col><Col id=\"rownum\">2</Col><Col id=\"regDt\">2025/07/14</Col></Row><Row><Col id=\"ntcMteTitlNm\">세번째</Col><Col id=\"rownum\">3</Col><Col id=\"regDt\">2025/07/14</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","23","43","260","66",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("tabpage text 읽지 않음. ");
            this.addChild(obj.name, obj);

            obj = new Tab("tabMain","20","170",null,null,"160","90",null,null,null,null,this);
            obj.set_initvalueid("iv_Tab0");
            obj.set_tabindex("1");
            obj.set_taborder("1");
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
            obj = new Layout("default","desktopScr",1320,550,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("공지사항목록조회_시스템");

                p.Button00.set_taborder("0");
                p.Button00.set_text("tabpage text 읽지 않음. ");
                p.Button00.move("23","43","260","66",null,null);

                p.tabMain.set_taborder("1");
                p.tabMain.set_preload("false");
                p.tabMain.set_focusacceptable("true");
                p.tabMain.move("20","170",null,null,"160","90");

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
            obj = new Layout("tablet","desktopScr,tabletScr",780,550,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","desktopScr,mobileScr",450,963,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
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
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ontimer",this.form_ontimer,this);
            this.addEventHandler("oninit",this.form_oninit,this);
            this.tabMain.addEventHandler("onchanged",this.tabMain_onchanged,this);
        };
        this.loadIncludeScript("RP_103032_Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
