(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("test_CST006M02");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divCal","200","100","554","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_flexgrow("1");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Calendar("calAplyStDt","0","0","145","40",null,null,null,null,null,null,this.divCal.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            this.divCal.addChild(obj.name, obj);

            obj = new Static("staDash","calAplyStDt:10","0","10","40",null,null,null,null,null,null,this.divCal.form);
            obj.set_taborder("1");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_Dash");
            this.divCal.addChild(obj.name, obj);

            obj = new Calendar("calAplyEdDt","staDash:10","0","145","40",null,null,null,null,null,null,this.divCal.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            this.divCal.addChild(obj.name, obj);

            obj = new Div("divCal00","190","240","554","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_flexgrow("1");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Calendar("calAplyStDt","0","0","145","40",null,null,null,null,null,null,this.divCal00.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            this.divCal00.addChild(obj.name, obj);

            obj = new Static("staDash","calAplyStDt:10","0","10","40",null,null,null,null,null,null,this.divCal00.form);
            obj.set_taborder("1");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_Dash");
            this.divCal00.addChild(obj.name, obj);

            obj = new Calendar("calAplyEdDt","staDash:10","0","145","40",null,null,null,null,null,null,this.divCal00.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            this.divCal00.addChild(obj.name, obj);

            obj = new Panel("Panel00","195","169","618","46",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"calAplyStDt\"/><PanelItem id=\"PanelItem02\" componentid=\"staDash\"/><PanelItem id=\"PanelItem03\" componentid=\"calAplyEdDt\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Calendar("calAplyStDt","0","0","145","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Static("staDash","155","0","10","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_Dash");
            this.addChild(obj.name, obj);

            obj = new Calendar("calAplyEdDt","175","0","145","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","20","100","73","50",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("div");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","14","175","73","50",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("panal");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01","14","235","156","55",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("div2 - layout type default");
            this.addChild(obj.name, obj);

            obj = new Div("divCal01","190","310","43.28%","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Div00");
            obj.set_flexgrow("1");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Calendar("calAplyStDt","0","0","145","40",null,null,null,null,null,null,this.divCal01.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            this.divCal01.addChild(obj.name, obj);

            obj = new Static("staDash","calAplyStDt:10","0","10","40",null,null,null,null,null,null,this.divCal01.form);
            obj.set_taborder("1");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_Dash");
            this.divCal01.addChild(obj.name, obj);

            obj = new Calendar("calAplyEdDt","staDash:10","0","145","40",null,null,null,null,null,null,this.divCal01.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            this.divCal01.addChild(obj.name, obj);

            obj = new Button("Button00_01_00","15","305","170","55",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("div3 - layout type horizontal");
            this.addChild(obj.name, obj);

            obj = new Div("divCal02","198","380","177","260",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Div00");
            obj.set_flexgrow("1");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Calendar("calAplyStDt","0","0","145","40",null,null,null,null,null,null,this.divCal02.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            this.divCal02.addChild(obj.name, obj);

            obj = new Static("staDash","calAplyStDt:10","0","10","40",null,null,null,null,null,null,this.divCal02.form);
            obj.set_taborder("1");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_Dash");
            this.divCal02.addChild(obj.name, obj);

            obj = new Calendar("calAplyEdDt","staDash:10","0","145","40",null,null,null,null,null,null,this.divCal02.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            this.divCal02.addChild(obj.name, obj);

            obj = new Button("Button00_02","20","385","159","50",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("div4 - layout type vertical");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divCal.form
            obj = new Layout("default","",0,0,this.divCal.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.calAplyStDt.set_taborder("0");
                p.calAplyStDt.set_dateformat("yyyy-MM-dd");
                p.calAplyStDt.move("0","0","145","40",null,null);

                p.staDash.set_taborder("1");
                p.staDash.set_text("~");
                p.staDash.set_cssclass("sta_WF_Dash");
                p.staDash.move("calAplyStDt:10","0","10","40",null,null);

                p.calAplyEdDt.set_taborder("2");
                p.calAplyEdDt.set_dateformat("yyyy-MM-dd");
                p.calAplyEdDt.move("staDash:10","0","145","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            this.divCal.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divCal.form
            obj = new Layout("mobile","",0,0,this.divCal.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            this.divCal.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divCal00.form
            obj = new Layout("default","",0,0,this.divCal00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.calAplyStDt.set_taborder("0");
                p.calAplyStDt.set_dateformat("yyyy-MM-dd");
                p.calAplyStDt.move("0","0","145","40",null,null);

                p.staDash.set_taborder("1");
                p.staDash.set_text("~");
                p.staDash.set_cssclass("sta_WF_Dash");
                p.staDash.move("calAplyStDt:10","0","10","40",null,null);

                p.calAplyEdDt.set_taborder("2");
                p.calAplyEdDt.set_dateformat("yyyy-MM-dd");
                p.calAplyEdDt.move("staDash:10","0","145","40",null,null);
            	}
            );
            obj.set_horizontalgap("10");
            this.divCal00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divCal00.form
            obj = new Layout("mobile","",0,0,this.divCal00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_horizontalgap("10");
            this.divCal00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divCal01.form
            obj = new Layout("default","",0,0,this.divCal01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.calAplyStDt.set_taborder("0");
                p.calAplyStDt.set_dateformat("yyyy-MM-dd");
                p.calAplyStDt.move("0","0","145","40",null,null);

                p.staDash.set_taborder("1");
                p.staDash.set_text("~");
                p.staDash.set_cssclass("sta_WF_Dash");
                p.staDash.move("calAplyStDt:10","0","10","40",null,null);

                p.calAplyEdDt.set_taborder("2");
                p.calAplyEdDt.set_dateformat("yyyy-MM-dd");
                p.calAplyEdDt.move("staDash:10","0","145","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            this.divCal01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divCal01.form
            obj = new Layout("mobile","",0,0,this.divCal01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            this.divCal01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divCal02.form
            obj = new Layout("default","",0,0,this.divCal02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.calAplyStDt.set_taborder("0");
                p.calAplyStDt.set_dateformat("yyyy-MM-dd");
                p.calAplyStDt.move("0","0","145","40",null,null);

                p.staDash.set_taborder("1");
                p.staDash.set_text("~");
                p.staDash.set_cssclass("sta_WF_Dash");
                p.staDash.move("calAplyStDt:10","0","10","40",null,null);

                p.calAplyEdDt.set_taborder("2");
                p.calAplyEdDt.set_dateformat("yyyy-MM-dd");
                p.calAplyEdDt.move("staDash:10","0","145","40",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_horizontalgap("10");
            this.divCal02.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divCal02.form
            obj = new Layout("mobile","",0,0,this.divCal02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            obj.set_horizontalgap("10");
            this.divCal02.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divCal.form.calAplyStDt","value","dsSearch","aplyStDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divCal.form.calAplyEdDt","value","dsSearch","aplyEdDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divCal00.form.calAplyStDt","value","dsSearch","aplyStDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divCal00.form.calAplyEdDt","value","dsSearch","aplyEdDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","calAplyStDt","value","dsSearch","aplyStDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","calAplyEdDt","value","dsSearch","aplyEdDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divCal01.form.calAplyStDt","value","dsSearch","aplyStDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divCal01.form.calAplyEdDt","value","dsSearch","aplyEdDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divCal02.form.calAplyStDt","value","dsSearch","aplyStDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divCal02.form.calAplyEdDt","value","dsSearch","aplyEdDt");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("RP_101682_test_CST006M02.xfdl", function() {

        this.test_CST006M02_onload = function(obj,e)
        {
        	this.divCal.form.resetScroll();
        	this.resetScroll();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.test_CST006M02_onload,this);
            this.divCal.form.calAplyStDt.addEventHandler("onkeydown",this.Edit_onkeydown,this);
            this.divCal.form.calAplyEdDt.addEventHandler("onkeydown",this.Edit_onkeydown,this);
            this.divCal00.form.calAplyStDt.addEventHandler("onkeydown",this.Edit_onkeydown,this);
            this.divCal00.form.calAplyEdDt.addEventHandler("onkeydown",this.Edit_onkeydown,this);
            this.calAplyStDt.addEventHandler("onkeydown",this.Edit_onkeydown,this);
            this.calAplyEdDt.addEventHandler("onkeydown",this.Edit_onkeydown,this);
            this.divCal01.form.calAplyStDt.addEventHandler("onkeydown",this.Edit_onkeydown,this);
            this.divCal01.form.calAplyEdDt.addEventHandler("onkeydown",this.Edit_onkeydown,this);
            this.divCal02.form.calAplyStDt.addEventHandler("onkeydown",this.Edit_onkeydown,this);
            this.divCal02.form.calAplyEdDt.addEventHandler("onkeydown",this.Edit_onkeydown,this);
        };
        this.loadIncludeScript("RP_101682_test_CST006M02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
