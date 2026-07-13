(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ConstColumnExpr");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("ds00", this);
            obj._setContents({"ColumnInfo" : {"ConstColumn" : [{"id" : "ConstColumn0","size" : "30","type" : "STRING","value" : "expr:Column0"},{"id" : "ConstColumn1","size" : "30","type" : "STRING","value" : "expr:Column1"},{"id" : "ConstColumn2","size" : "30","type" : "STRING","value" : "expr:currow"},{"id" : "ConstColumn3","size" : "30","type" : "STRING","value" : "1111"},{"id" : "ConstColumn4","size" : "30","type" : "STRING","value" : "expr:ConstColumn0"},{"id" : "ConstColumn5","size" : "30","type" : "STRING","value" : "expr:Column0+ConstColumn5"},{"id" : "ConstColumn6","size" : "30","type" : "STRING","value" : "expr:ConstColumn6"},{"id" : "ConstColumn7","size" : "30","type" : "STRING","value" : "expr:ConstColumn8"},{"id" : "ConstColumn8","size" : "30","type" : "STRING","value" : "expr:ConstColumn7"}],"Column" : [{"id" : "Column0","size" : "256","type" : "STRING"},{"id" : "Column1","size" : "256","type" : "STRING"}]},"Rows" : [{"Column0" : "1","Column1" : "2"},{"Column0" : "가","Column1" : "나"},{}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Grid("grd00","20","43","1060","137",null,null,null,null,null,null,this);
            obj.set_autosizingtype("none");
            obj.set_binddataset("ds00");
            obj.set_cellsizingtype("col");
            obj.set_taborder("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"111\"/><Column size=\"124\"/><Column size=\"71\"/><Column size=\"52\"/><Column size=\"75\"/><Column size=\"72\"/><Column size=\"58\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"73\"/><Column size=\"71\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ConstColumn2\"/><Cell col=\"1\" text=\"ConstColumn0\"/><Cell col=\"2\" text=\"ConstColumn1\"/><Cell col=\"3\" text=\"ConstColumn3\"/><Cell col=\"4\" text=\"ConstColumn4\"/><Cell col=\"5\" text=\"ConstColumn5\"/><Cell col=\"6\" text=\"ConstColumn6\"/><Cell col=\"7\" text=\"ConstColumn7\"/><Cell col=\"8\" text=\"ConstColumn8\"/><Cell col=\"9\" text=\"Column0\"/><Cell col=\"10\" text=\"Column1\"/></Band><Band id=\"body\"><Cell text=\"bind:ConstColumn2\"/><Cell col=\"1\" text=\"bind:ConstColumn0\"/><Cell col=\"2\" text=\"bind:ConstColumn1\"/><Cell col=\"3\" text=\"bind:ConstColumn3\"/><Cell col=\"4\" text=\"bind:ConstColumn4\"/><Cell col=\"5\" text=\"bind:ConstColumn5\"/><Cell col=\"6\" text=\"bind:ConstColumn6\"/><Cell col=\"7\" text=\"bind:ConstColumn7\"/><Cell col=\"8\" text=\"bind:ConstColumn8\"/><Cell col=\"9\" text=\"bind:Column0\"/><Cell col=\"10\" text=\"bind:Column1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00","18","208","101","57",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00_00","19","270","101","57",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00_00_00","18","337","101","57",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn01","129","209","120","48",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("addConstColumn");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00_00_00_00","18","400","101","57",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn02","128","268","123","42",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("saveXML");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn02_00","128","319","123","42",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("saveJSON");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn02_00_00","129","365","123","42",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("saveSSV");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","medium,large,desktop,mobile",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new nexacro.BindItem("item0","btn00","text","ds00","ConstColumn4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item1","btn00_00","text","ds00","ConstColumn1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item2","btn00_00_00","text","ds00","ConstColumn2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item3","btn00_00_00_00","text","ds00","ConstColumn5");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("ConstColumnExpr.xfdl", function(nexacro, system, trace, environment, application) {

        this.btn01_onclick = function(obj,e)
        {
        	this.ds00.addConstColumn("NConst0", "expr:Column0*2");
        };

        this.btn02_onclick = function(obj,e)
        {
        	trace(this.ds00.saveXML());
        };

        this.btn03_onclick = function(obj,e)
        {
        	trace(this.ds00.saveJSON());
        };

        this.btn04_onclick = function(obj,e)
        {
        	trace(this.ds00.saveSSV());
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
            this.btn02_00.addEventHandler("onclick",this.btn03_onclick,this);
            this.btn02_00_00.addEventHandler("onclick",this.btn04_onclick,this);
        };

        this.loadIncludeScript("ConstColumnExpr.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
