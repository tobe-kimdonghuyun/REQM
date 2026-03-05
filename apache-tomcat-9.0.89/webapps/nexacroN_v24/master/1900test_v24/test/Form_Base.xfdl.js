(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Base");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,1040);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_tree", this);
            obj._setContents("<ColumnInfo><Column id=\"lev\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"lev\">0</Col><Col id=\"data\">1뎁스메뉴_1번</Col></Row><Row><Col id=\"lev\">1</Col><Col id=\"data\">2뎁스메뉴</Col></Row><Row><Col id=\"lev\">2</Col><Col id=\"data\">3뎁스메뉴</Col></Row><Row><Col id=\"data\">3뎁스메뉴</Col><Col id=\"lev\">2</Col></Row><Row><Col id=\"lev\">2</Col><Col id=\"data\">3뎁스메뉴</Col></Row><Row><Col id=\"data\">3뎁스메뉴</Col><Col id=\"lev\">2</Col></Row><Row><Col id=\"data\">3뎁스메뉴</Col><Col id=\"lev\">2</Col></Row><Row><Col id=\"lev\">0</Col><Col id=\"data\">1뎁스메뉴_2번</Col></Row><Row><Col id=\"lev\">1</Col><Col id=\"data\">2뎁스메뉴</Col></Row><Row><Col id=\"lev\">2</Col><Col id=\"data\">3뎁스메뉴</Col></Row><Row><Col id=\"lev\">2</Col><Col id=\"data\">3뎁스메뉴</Col></Row><Row><Col id=\"data\">3뎁스메뉴</Col><Col id=\"lev\">2</Col></Row><Row><Col id=\"data\">3뎁스메뉴</Col><Col id=\"lev\">2</Col></Row><Row><Col id=\"data\">3뎁스메뉴</Col><Col id=\"lev\">2</Col></Row><Row><Col id=\"data\">1뎁스메뉴_3번</Col><Col id=\"lev\">0</Col></Row><Row><Col id=\"data\">2뎁스메뉴</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"data\">3뎁스메뉴</Col><Col id=\"lev\">2</Col></Row><Row><Col id=\"data\">3뎁스메뉴</Col><Col id=\"lev\">2</Col></Row><Row><Col id=\"data\">3뎁스메뉴</Col><Col id=\"lev\">2</Col></Row><Row><Col id=\"data\">3뎁스메뉴</Col><Col id=\"lev\">2</Col></Row><Row><Col id=\"lev\">2</Col><Col id=\"data\">3뎁스메뉴</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","50","36","457","113",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("안드로이드 Tab");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","50","225","370","150",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_Tab0");
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_focusacceptable("true");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("텝페이지01");
            obj.set_accessibilityenable("false");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static00","10","10",null,"30","10",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("첫번째 탭 페이지입니다.");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("텝페이지02");
            obj.set_accessibilityenable("false");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static00","10","10",null,"30","10",null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("두번째 탭 페이지입니다.");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Tab00);
            obj.set_text("텝페이지03");
            obj.set_accessibilityenable("false");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static00","10","10",null,"30","10",null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_text("세번째 탭 페이지입니다.");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.Tab00);
            obj.set_text("텝페이지04");
            obj.set_accessibilityenable("false");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static00","10","10",null,"30","10",null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("0");
            obj.set_text("네번째 탭 페이지입니다.");
            this.Tab00.Tabpage4.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Tab00.Tabpage1.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage1.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("첫번째 탭 페이지입니다.");
                p.Static00.move("10","10",null,"30","10",null);
            	}
            );
            this.Tab00.Tabpage1.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Tab00.Tabpage1.form
            obj = new Layout("mobile","",0,0,this.Tab00.Tabpage1.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.move("10","10",null,"30","10",null);
            	}
            );
            this.Tab00.Tabpage1.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Tab00.Tabpage2.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage2.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("두번째 탭 페이지입니다.");
                p.Static00.move("10","10",null,"30","10",null);
            	}
            );
            this.Tab00.Tabpage2.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Tab00.Tabpage2.form
            obj = new Layout("mobile","",0,0,this.Tab00.Tabpage2.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Tab00.Tabpage2.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Tab00.Tabpage3.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage3.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("세번째 탭 페이지입니다.");
                p.Static00.move("10","10",null,"30","10",null);
            	}
            );
            this.Tab00.Tabpage3.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Tab00.Tabpage3.form
            obj = new Layout("mobile","",0,0,this.Tab00.Tabpage3.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Tab00.Tabpage3.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Tab00.Tabpage4.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage4.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("네번째 탭 페이지입니다.");
                p.Static00.move("10","10",null,"30","10",null);
            	}
            );
            this.Tab00.Tabpage4.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Tab00.Tabpage4.form
            obj = new Layout("mobile","",0,0,this.Tab00.Tabpage4.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Tab00.Tabpage4.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,desktopScr",1280,1040,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00.set_taborder("0");
                p.Button00.set_text("안드로이드 Tab");
                p.Button00.move("50","36","457","113",null,null);

                p.Tab00.set_taborder("1");
                p.Tab00.set_tabindex("0");
                p.Tab00.set_focusacceptable("true");
                p.Tab00.move("50","225","370","150",null,null);

                p.Tab00.Tabpage1.set_text("텝페이지01");
                p.Tab00.Tabpage1.set_accessibilityenable("false");

                p.Tab00.Tabpage2.set_text("텝페이지02");
                p.Tab00.Tabpage2.set_accessibilityenable("false");

                p.Tab00.Tabpage3.set_text("텝페이지03");
                p.Tab00.Tabpage3.set_accessibilityenable("false");

                p.Tab00.Tabpage4.set_text("텝페이지04");
                p.Tab00.Tabpage4.set_accessibilityenable("false");
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Mobile_screen,Screen0,mobileScr,desktopScr,tableScr",480,678,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00.set_text("모바일 Tab");
                p.Button00.move("13","34","457","113",null,null);

                p.Tab00.move("50","225","300","150",null,null);
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
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ontimer",this.Base_ontimer,this);
            this.Tab00.addEventHandler("onchanged",this.Tab00_onchanged,this);
        };
        this.loadIncludeScript("Form_Base.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
