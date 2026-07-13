(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Environment_Dataset");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("ds00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "Column0","size" : "256","type" : "STRING"}]},"Rows" : [{"Column0" : "1"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.GroupBox("grb00_00","431","0","399","429",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Environment Dataset");
            this.addChild(obj.name, obj);

            obj = new nexacro.GroupBox("grb00","10","0","399","429",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Form Dataset");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00","450","53","151","38",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt00","626","52","150","38",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00_00","35","54","151","38",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt00_00","211","53","150","38",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("grd00","450","108","324","259",null,null,null,null,null,null,this);
            obj.set_autofittype("col");
            obj.set_binddataset("envds");
            obj.set_taborder("4");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("grd00_00","35","110","324","259",null,null,null,null,null,null,this);
            obj.set_autofittype("col");
            obj.set_binddataset("ds00");
            obj.set_taborder("5");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.GroupBox("grb00_00_00","845","-1","399","429",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Application Dataset");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00_01","864","52","151","38",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt00_01","1040","51","150","38",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("grd00_01","864","107","324","259",null,null,null,null,null,null,this);
            obj.set_autofittype("col");
            obj.set_binddataset("gds");
            obj.set_taborder("11");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn01","79","478","172","39",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("nexacro.open");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn02","80","543","208","76",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_Button0");
            obj.set_taborder("13");
            obj.set_text("TEXT(\"Key00\",\"btn02\")");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn01_00","275","478","172","39",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("btn01");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new nexacro.BindItem("item0","btn00_00","text","ds00","Column0");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item1","edt00_00","value","ds00","Column0");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item2","btn00","text","envds","Column0");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item3","edt00","value","envds","Column0");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item4","btn00_01","text","gds","Column0");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item5","edt00_01","value","gds","Column0");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Environment_Dataset.xfdl", function(nexacro, system, trace, environment, application) {

        this.btn01_onclick = function(obj,e)
        {
        	nexacro.open("open", "Environment::Environment_Dataset.xfdl", this.getOwnerFrame(), null, "", 10, 10);
        };

        this.btn00_00_onclick = function(obj,e)
        {

        };

        this.btn01_00_onclick = function(obj,e)
        {
        	nexacro.open("open1", "Environment::environment_transaction.xfdl", this.getOwnerFrame(), null, "", 10, 10);

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn00_00.addEventHandler("onclick",this.btn00_00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.btn01_00.addEventHandler("onclick",this.btn01_00_onclick,this);
        };

        this.loadIncludeScript("Environment_Dataset.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
