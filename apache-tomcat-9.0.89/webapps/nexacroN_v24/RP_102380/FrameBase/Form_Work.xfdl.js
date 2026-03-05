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
            obj = new Button("Button00","76","64","404","103",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","60","41","734","198",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","144","263","176","58",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","45","329","973","383",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_border("3px solid greenyellow");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","56","10","922","326",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_border("3px solid red");
            this.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel00","84","46","701","214",null,null,null,null,null,null,this.Div01.form.Div00.form);
            obj.set_taborder("0");
            obj.set_border("2px solid blue");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button01\"/><PanelItem id=\"PanelItem02\" componentid=\"Button02\"/></Contents>");
            this.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","120","66","120","50",null,null,null,null,null,null,this.Div01.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("Button00");
            this.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button01","254","50","120","50",null,null,null,null,null,null,this.Div01.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("Button01");
            this.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button02","384","57","120","50",null,null,null,null,null,null,this.Div01.form.Div00.form);
            obj.set_taborder("3");
            obj.set_text("Button02");
            this.Div01.form.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div01.form.Div00.form
            obj = new Layout("default","",0,0,this.Div01.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.set_taborder("0");
                p.Panel00.set_border("2px solid blue");
                p.Panel00.set_type("horizontal");
                p.Panel00.move("84","46","701","214",null,null);

                p.Button00.set_taborder("1");
                p.Button00.set_text("Button00");
                p.Button00.move("120","66","120","50",null,null);

                p.Button01.set_taborder("2");
                p.Button01.set_text("Button01");
                p.Button01.move("254","50","120","50",null,null);

                p.Button02.set_taborder("3");
                p.Button02.set_text("Button02");
                p.Button02.move("384","57","120","50",null,null);
            	}
            );
            this.Div01.form.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div01.form.Div00.form
            obj = new Layout("Tablet_screen","",0,0,this.Div01.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.set_type("vertical");
            	}
            );
            this.Div01.form.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div01.form.Div00.form
            obj = new Layout("Phone_screen","",0,0,this.Div01.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.set_type("vertical");
            	}
            );
            this.Div01.form.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Div00.set_taborder("0");
                p.Div00.set_text("Div00");
                p.Div00.set_border("3px solid red");
                p.Div00.move("56","10","922","326",null,null);
            	}
            );
            this.Div01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div01.form
            obj = new Layout("Tablet_screen","",0,0,this.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Div00.move("56","10","616","326",null,null);
            	}
            );
            this.Div01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div01.form
            obj = new Layout("Phone_screen","",0,0,this.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div01.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,720,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("Form_Work");

                p.Button00.set_taborder("0");
                p.Button00.set_text("Button00");
                p.Button00.move("76","64","404","103",null,null);

                p.Panel00.set_taborder("1");
                p.Panel00.move("60","41","734","198",null,null);

                p.Button01.set_taborder("2");
                p.Button01.set_text("Button01");
                p.Button01.move("144","263","176","58",null,null);

                p.Div01.set_taborder("3");
                p.Div01.set_text("Div01");
                p.Div01.set_border("3px solid greenyellow");
                p.Div01.move("45","329","973","383",null,null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Tablet_screen","Tablet_screen",800,1280,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Div01.move("45","329","705","383",null,null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Phone_screen","Phone_screen",480,768,this,
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

        };
        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
