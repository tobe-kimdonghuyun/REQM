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
            obj = new PopupDiv("pdvMenu","293","130","226","188",null,null,null,null,null,null,this);
            obj.set_cssclass("pdiv_TF_Mnu\n");
            this.addChild(obj.name, obj);

            obj = new Div("divMenu","17","17",null,null,"17","17",null,null,null,null,this.pdvMenu.form);
            obj.set_taborder("0");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none none");
            obj.set_text("");
            this.pdvMenu.addChild(obj.name, obj);

            obj = new Button("Button00","13","14","162","34",null,null,null,null,null,null,this.pdvMenu.form.divMenu.form);
            obj.set_taborder("0");
            obj.set_text("Button1");
            this.pdvMenu.form.divMenu.addChild(obj.name, obj);

            obj = new Button("Button00_00","13","58","162","34",null,null,null,null,null,null,this.pdvMenu.form.divMenu.form);
            obj.set_taborder("1");
            obj.set_text("Button2");
            this.pdvMenu.form.divMenu.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","14","102","162","34",null,null,null,null,null,null,this.pdvMenu.form.divMenu.form);
            obj.set_taborder("2");
            obj.set_text("Button3");
            this.pdvMenu.form.divMenu.addChild(obj.name, obj);

            obj = new Button("btnEndFocus",null,null,"0","0","0","0",null,null,null,null,this.pdvMenu.form);
            obj.set_taborder("1");
            this.pdvMenu.addChild(obj.name, obj);

            obj = new Button("Button00","10","6","130","62",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("popupDiv");
            this.addChild(obj.name, obj);

            obj = new Div("divTopBtn","289","58",null,"72","82",null,null,null,null,null,this);
            obj.set_visible("true");
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none none");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","26","10","204","45",null,null,null,null,null,null,this.divTopBtn.form);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.divTopBtn.addChild(obj.name, obj);

            obj = new Button("Button01","308","19","276","31",null,null,null,null,null,null,this.divTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("Button01");
            this.divTopBtn.addChild(obj.name, obj);

            obj = new Button("Button02","660","15","160","32",null,null,null,null,null,null,this.divTopBtn.form);
            obj.set_taborder("2");
            obj.set_text("Button02");
            this.divTopBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.pdvMenu.form.divMenu.form
            obj = new Layout("default","",0,0,this.pdvMenu.form.divMenu.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00.set_taborder("0");
                p.Button00.set_text("Button1");
                p.Button00.move("13","14","162","34",null,null);

                p.Button00_00.set_taborder("1");
                p.Button00_00.set_text("Button2");
                p.Button00_00.move("13","58","162","34",null,null);

                p.Button00_00_00.set_taborder("2");
                p.Button00_00_00.set_text("Button3");
                p.Button00_00_00.move("14","102","162","34",null,null);
            	}
            );
            this.pdvMenu.form.divMenu.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.pdvMenu.form.divMenu.form
            obj = new Layout("tablet","",0,0,this.pdvMenu.form.divMenu.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.pdvMenu.form.divMenu.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.pdvMenu.form.divMenu.form
            obj = new Layout("mobile","",0,0,this.pdvMenu.form.divMenu.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.pdvMenu.form.divMenu.form.addLayout(obj.name, obj);
            //-- Default Layout : this.pdvMenu.form
            obj = new Layout("default","",0,0,this.pdvMenu.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divMenu.set_taborder("0");
                p.divMenu.set_formscrolltype("none");
                p.divMenu.set_formscrollbartype("none none");
                p.divMenu.set_text("");
                p.divMenu.move("17","17",null,null,"17","17");

                p.btnEndFocus.set_taborder("1");
                p.btnEndFocus.move(null,null,"0","0","0","0");
            	}
            );
            this.pdvMenu.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.pdvMenu.form
            obj = new Layout("tablet","",0,0,this.pdvMenu.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.pdvMenu.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.pdvMenu.form
            obj = new Layout("mobile","",0,0,this.pdvMenu.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.pdvMenu.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divTopBtn.form
            obj = new Layout("default","",0,0,this.divTopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00.set_taborder("0");
                p.Button00.set_text("Button00");
                p.Button00.move("26","10","204","45",null,null);

                p.Button01.set_taborder("1");
                p.Button01.set_text("Button01");
                p.Button01.move("308","19","276","31",null,null);

                p.Button02.set_taborder("2");
                p.Button02.set_text("Button02");
                p.Button02.move("660","15","160","32",null,null);
            	}
            );
            this.divTopBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divTopBtn.form
            obj = new Layout("tablet","",0,0,this.divTopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divTopBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divTopBtn.form
            obj = new Layout("mobile","",0,0,this.divTopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divTopBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","desktopScr",1280,720,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("Form_Work");

                p.pdvMenu.set_cssclass("pdiv_TF_Mnu\n");
                p.pdvMenu.move("293","130","226","188",null,null);

                p.Button00.set_taborder("0");
                p.Button00.set_text("popupDiv");
                p.Button00.move("10","6","130","62",null,null);

                p.divTopBtn.set_taborder("1");
                p.divTopBtn.set_text("");
                p.divTopBtn.set_formscrolltype("none");
                p.divTopBtn.set_formscrollbartype("none none");
                p.divTopBtn.set_visible("true");
                p.divTopBtn.set_accessibilityenable("false");
                p.divTopBtn.move("289","58",null,"72","82",null);
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
        this.registerScript("rp103023.xfdl", function() {

        this.Button_onclick = function(obj,e)
        {
        	this.pdvMenu.trackPopupByComponent(obj, 50, 50, 250, 192, "", false);
        };

        this.pdvMenu_divMenu_onkeydown = function(obj,e)
        {
        	if(e.keycode == 27)
        	{
        		this.pdvMenu.closePopup();
        	}
        };

        //메뉴 마지막 콤포넌트 도착시
        this.pdvMenu_btnEndFocus_onsetfocus = function(obj,e)
        {
        	this.pdvMenu.form.divMenu.setFocus();

        	this.pdvMenu.closePopup();
        };

        this.pdvMenu_onpopup = function(obj,e)
        {
        	this.pdvMenu.form.divMenu.form.Button00.setFocus();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.pdvMenu.addEventHandler("onpopup",this.pdvMenu_onpopup,this);
            this.pdvMenu.form.divMenu.addEventHandler("onkeydown",this.pdvMenu_divMenu_onkeydown,this);
            this.pdvMenu.form.divMenu.addEventHandler("onsetfocus",this.pdvMenu_divMenu_onsetfocus,this);
            this.pdvMenu.form.btnEndFocus.addEventHandler("onsetfocus",this.pdvMenu_btnEndFocus_onsetfocus,this);
            this.divTopBtn.form.Button00.addEventHandler("onclick",this.Button_onclick,this);
            this.divTopBtn.form.Button01.addEventHandler("onclick",this.Button_onclick,this);
            this.divTopBtn.form.Button02.addEventHandler("onclick",this.Button_onclick,this);
        };
        this.loadIncludeScript("rp103023.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
