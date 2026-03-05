(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleCheckbox");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column0","type" : "STRING","size" : "256"}]},"Rows" : [{},{"Column0" : "1"},{"Column0" : ""}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset01", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column0","type" : "STRING","size" : "256"}]},"Rows" : [{},{"Column0" : "1"},{"Column0" : ""}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset02", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column0","type" : "STRING","size" : "256"},{"id" : "Column1","type" : "STRING","size" : "256"}]},"Rows" : [{},{},{"Column0" : "","Column1" : ""},{},{"Column0" : "1","Column1" : "1"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","37","28","203","102",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column0\" displaytype=\"checkboxcontrol\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","353","36","127","42",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("CheckBox00");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","37","255","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","34","322","203","102",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("Dataset01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column0\" displaytype=\"checkboxcontrol\" checkboxtruevalue=\"1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00","350","330","127","42",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("CheckBox00");
            obj.set_truevalue("1");
            obj.set_value("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","CheckBox00","value","Dataset00","Column0");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","CheckBox00_00","value","Dataset01","Column0");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("RP_102729_sampleCheckbox.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	trace(this.Dataset00.saveXML());
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("RP_102729_sampleCheckbox.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
