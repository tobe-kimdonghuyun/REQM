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
            obj = new Tab("Tab00","422","53","117","140",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("Tabpage1");
            this.Tab00.addChild(obj.name, obj);

            obj = new Button("Button01","-62","62","190","52",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("Button01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("Tabpage2");
            this.Tab00.addChild(obj.name, obj);

            obj = new Panel("Panel00","77","291",null,"291","609",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_border("1px solid blue");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","262","301","253","138",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_border("1px solid red");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj.set_flexshrink("1");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00\"/><PanelItem id=\"PanelItem02\" componentid=\"Button01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","664","86","150","70",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","755","122","150","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","664","86","150","70",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00","755","122","150","50",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","10","10","253","138",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_border("1px solid red");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Button01_00\"/></Contents>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Tab00.Tabpage1.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage1.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button01.set_taborder("0");
                p.Button01.set_text("Button01");
                p.Button01.move("-62","62","190","52",null,null);
            	}
            );
            this.Tab00.Tabpage1.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Tab00.Tabpage1.form
            obj = new Layout("Layout0","",0,0,this.Tab00.Tabpage1.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Tab00.Tabpage1.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Tab00.Tabpage2.form
            obj = new Layout("Layout0","",0,0,this.Tab00.Tabpage2.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Tab00.Tabpage2.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Tab00.Tabpage2.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage2.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Tab00.Tabpage2.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,720,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("Form_Work");

                p.Tab00.set_taborder("0");
                p.Tab00.set_tabindex("0");
                p.Tab00.move("422","53","117","140",null,null);

                p.Tab00.Tabpage1.set_text("Tabpage1");

                p.Tab00.Tabpage2.set_text("Tabpage2");

                p.Panel00.set_taborder("1");
                p.Panel00.set_border("1px solid blue");
                p.Panel00.set_flexgrow("1");
                p.Panel00.move("77","291",null,"291","609",null);

                p.Panel01.set_taborder("2");
                p.Panel01.set_border("1px solid red");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.set_flexgrow("1");
                p.Panel01.set_flexshrink("1");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.move("262","301","253","138",null,null);

                p.Button00.set_taborder("3");
                p.Button00.set_text("Button00");
                p.Button00.move("664","86","150","70",null,null);

                p.Button01.set_taborder("4");
                p.Button01.set_text("Button01");
                p.Button01.move("755","122","150","50",null,null);

                p.Button00_00.set_taborder("5");
                p.Button00_00.set_text("Button00");
                p.Button00_00.move("664","86","150","70",null,null);

                p.Button01_00.set_taborder("6");
                p.Button01_00.set_text("Button01");
                p.Button01_00.move("755","122","150","50",null,null);

                p.Panel01_00.set_taborder("7");
                p.Panel01_00.set_border("1px solid red");
                p.Panel01_00.set_horizontalgap("10");
                p.Panel01_00.set_flexgrow("1");
                p.Panel01_00.set_flexwrap("wrap");
                p.Panel01_00.move("10","10","253","138",null,null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","",1280,720,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_horizontalgap("0");
            obj.set_mobileorientation("Landscape");
            obj.set_spacing("0px");
            obj.set_tabletemplate("1* / 1*");
            obj.set_type("vertical");
            obj.set_verticalgap("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Work.xfdl", function() {

        this.Button01_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Tab00.Tabpage1.form.Button01.addEventHandler("onclick",this.Button01_onclick,this);
        };
        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
