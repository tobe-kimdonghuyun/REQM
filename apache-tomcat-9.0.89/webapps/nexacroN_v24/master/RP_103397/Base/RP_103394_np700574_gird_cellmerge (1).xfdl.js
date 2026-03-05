(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("np700574_gird_cellmerge");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column0","type" : "STRING","size" : "256"}]},"Rows" : [{"Column0" : "202533-AR-HHP-A-008\n\t\n\tNormal Scenario(Due Week)"},{"Column0" : "202533-AR-HHP-A-008\n\t\n\tNormal Scenario(Due Week)"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","40","70","373","243",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"102\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" verticalAlign=\"middle\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","500","80","230","80",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("this.Grid00.mergeCell(0,0,0,1);");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","500","184","230","76",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("this.Grid00.mergeCell(0,0,0,1,true);");
            this.addChild(obj.name, obj);
            // Layout Functions
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
        this.registerScript("RP_103394_np700574_gird_cellmerge (1).xfdl", function() {

        this.np700574_gird_cellmerge_onload = function(obj,e)
        {
        	this.Grid00.mergeCell(0,0,0,1,true);
        	//this.Grid00.mergeCell(0,0,0,1);
        };

        this.Button00_onclick = function(obj,e)
        {
        	this.Grid00.mergeCell(0,0,0,1);
        };

        this.Button01_onclick = function(obj,e)
        {
        	this.Grid00.mergeCell(0,0,0,1,true);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.np700574_gird_cellmerge_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
        };
        this.loadIncludeScript("RP_103394_np700574_gird_cellmerge (1).xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
