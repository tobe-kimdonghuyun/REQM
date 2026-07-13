(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_cssclass("InitClass");
            this.set_name("sample");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("ds00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "Column0","size" : "256","type" : "STRING"},{"id" : "Column1","size" : "256","type" : "STRING"}]}});
            this.addChild(obj.name, obj);


            obj = new nexacro.VirtualFile("VirtualFile00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Button("btn00","132","90","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("TEXT(\"Key00\",\"btn00\")");
            this.addChild(obj.name, obj);

            obj = new nexacro.GoogleMap("GoogleMap00","663","54","300","300",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Menu("mnu00","150","271","685","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt00","139","192","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Div("div00","330","165","115","120",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("grd00","83","294","375","270",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new nexacro.Combo("cbo00","379","46","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("txa00","429","147","90","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn01","312","97","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("btn01");
            this.addChild(obj.name, obj);

            obj = new nexacro.ProgressBar("pgb00","677","86","138","48",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("pgb00");
            obj.set_max("100");
            obj.set_pos("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel00","700","377","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj._setContents("");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this.div00
            obj = new nexacro.Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new nexacro.Layout("default","mobile",1280,720,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("New Form");

                p.btn00.set_taborder("0");
                p.btn00.set_text("TEXT(\"Key00\",\"btn00\")");
                p.btn00.move("132","90","120","50",null,null);

                p.GoogleMap00.set_taborder("1");
                p.GoogleMap00.move("663","54","300","300",null,null);

                p.mnu00.set_taborder("2");
                p.mnu00.move("150","271","685","25",null,null);

                p.edt00.set_taborder("3");
                p.edt00.move("139","192","140","20",null,null);

                p.div00.set_taborder("4");
                p.div00.set_text("div00");
                p.div00.move("330","165","115","120",null,null);

                p.grd00.set_taborder("5");
                p.grd00.move("83","294","375","270",null,null);

                p.cbo00.set_taborder("6");
                p.cbo00.set_text("");
                p.cbo00.move("379","46","150","20",null,null);

                p.txa00.set_taborder("7");
                p.txa00.move("429","147","90","20",null,null);

                p.btn01.set_taborder("8");
                p.btn01.set_text("btn01");
                p.btn01.move("312","97","120","50",null,null);

                p.pgb00.set_taborder("9");
                p.pgb00.set_text("pgb00");
                p.pgb00.set_max("100");
                p.pgb00.set_pos("0");
                p.pgb00.move("677","86","138","48",null,null);

                p.Panel00.set_taborder("10");
                p.Panel00.move("700","377","120","50",null,null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new nexacro.Layout("Layout0","",1280,720,this,
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
            obj = new nexacro.BindItem("item0","btn00","text","ds00","Column0");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sample.xfdl", function(nexacro, system, trace, environment, application) {

        this.btn00_onclick = function(obj,e)
        {

        };

        this.mnu00_onmenuclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.mnu00.addEventHandler("onmenuclick",this.mnu00_onmenuclick,this);
        };

        this.loadIncludeScript("sample.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
