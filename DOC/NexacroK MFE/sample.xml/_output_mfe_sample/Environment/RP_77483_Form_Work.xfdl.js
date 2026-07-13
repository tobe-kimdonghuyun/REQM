(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("Form_Work");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("Dataset00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "Column0","size" : "256","type" : "STRING"},{"id" : "Column1","size" : "256","type" : "STRING"}]},"Rows" : [{"Column0" : "1","Column1" : "11"},{"Column0" : "2","Column1" : "22"},{"Column0" : "3","Column1" : "33"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Button("Button00","50","1940","305","72",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01","43","55","265","85",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);

            obj = new nexacro.Combo("Combo00","103","193","312","48",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_taborder("2");
            var Combo00_innerdataset = new nexacro.NormalDataset("Combo00_innerdataset", obj);
            Combo00_innerdataset._setContents({"ColumnInfo" : {"Column" : [{"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "1","datacolumn" : "111"},{"codecolumn" : "2","datacolumn" : "2222"}]});
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_text("Comb000");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Combo("Combo01","200","324","164","31",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Combo01");
            this.addChild(obj.name, obj);

            obj = new nexacro.WebBrowser("WebBrowser00","476","85","282","205",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new nexacro.BasicChart("BasicChart00","810","133","120","222",null,null,null,null,null,null,this);
            obj.getSetter("taborder").set("5");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","502","386","157","66",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Static00");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","Desktop_screen",1280,720,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("Form_Work");

                p.Button00.set_taborder("0");
                p.Button00.set_text("Button00");
                p.Button00.move("50","1940","305","72",null,null);

                p.Button01.set_taborder("1");
                p.Button01.set_text("Button01");
                p.Button01.move("43","55","265","85",null,null);

                p.Combo00.set_codecolumn("codecolumn");
                p.Combo00.set_datacolumn("datacolumn");
                p.Combo00.set_innerdataset(Combo00_innerdataset);
                p.Combo00.set_taborder("2");
                p.Combo00.set_value("1");
                p.Combo00.set_index("0");
                p.Combo00.move("103","193","312","48",null,null);

                p.Combo01.set_taborder("3");
                p.Combo01.set_text("Combo01");
                p.Combo01.move("200","324","164","31",null,null);

                p.WebBrowser00.set_taborder("4");
                p.WebBrowser00.move("476","85","282","205",null,null);

                p.BasicChart00.getSetter("taborder").set("5");
                p.BasicChart00.move("810","133","120","222",null,null);

                p.Static00.set_taborder("6");
                p.Static00.set_text("Static00");
                p.Static00.move("502","386","157","66",null,null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new nexacro.Layout("Phone_screen","Phone_screen,Screen_D_1",480,768,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Combo00.set_text("111");
                p.Combo00.set_value("1");
                p.Combo00.set_index("0");
            	}
            );
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new nexacro.BindItem("item0","Combo00","value","Dataset00","Column0");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item1","Combo01","value","Dataset00","Column0");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("RP_77483_Form_Work.xfdl", function(nexacro, system, trace, environment, application) {

        this.Button00_onclick = function(obj,e)
        {
        	trace("abab");
        	trace("gggg");
        };

        this.Button01_onclick = function(obj,e)
        {
        	obj.set_text("aaa");
        	trace("a");
        	trace("a");
        	trace("a");
        	this.alert("a");
        	trace("b");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
        };

        this.loadIncludeScript("RP_77483_Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
