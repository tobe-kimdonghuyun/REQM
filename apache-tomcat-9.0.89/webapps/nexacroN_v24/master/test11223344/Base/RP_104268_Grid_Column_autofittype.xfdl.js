(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Grid_Column_fix");
            this.set_titletext("autofit");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column0","type" : "STRING","size" : "256"},{"id" : "Column1","type" : "STRING","size" : "256"},{"id" : "Column2","type" : "STRING","size" : "256"},{"id" : "Column3","type" : "STRING","size" : "256"},{"id" : "Column4","type" : "STRING","size" : "256"}]},"Rows" : [{},{},{}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","30","70","400","270",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"Column0\" autosizecol=\"none\"/><Cell col=\"2\" text=\"Column1\"/><Cell col=\"3\" text=\"Column2\"/><Cell col=\"4\" text=\"Column3\"/><Cell col=\"5\" text=\"Column4\"/></Band><Band id=\"body\"><Cell autosizecol=\"limitmax\"/><Cell col=\"1\" text=\"bind:Column0\" autosizecol=\"none\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","610","20","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","536","154","501","294",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","711","279","152","66",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","97","364","239","133",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","87","40","62","37",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","389","360","241","207",null,null,null,null,null,null,this);
            obj.set_text("Div00");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","87","40","62","37",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.Div01.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("RP_104268_Grid_Column_autofittype.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {

        	this.Grid00.setRealColSize("body",1,110);

        };

        this.Grid_Column_fix_onload = function(obj,e)
        {
        	this.Grid00.setRealColSize("body",1,110);

        };

        this.Grid00_oncellclick = function(obj,e)
        {
        	trace("Grid00 " + this.Grid00.getRealColSize(e.col) );
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Grid_Column_fix_onload,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("RP_104268_Grid_Column_autofittype.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
