(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("tes132123123");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">aa</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">bb</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">cc</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">dd</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","194","45","200","68",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","20","130","405","321",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column2\"/><Cell col=\"2\" text=\"Column3\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column2\"/><Cell col=\"2\" text=\"bind:Column3\"/></Band></Format></Formats>");
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
        this.registerScript("tes132123123.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	var objGrid = new Grid("grid_a", 500, 100,500, 500, null, null);

        	objGrid.formats = this.Grid00.formats;
        	objGrid.formatid = "exportFormat";

        	var objDs = new Dataset;
        	objDs.copyData(this.Dataset00, true);
        	objGrid.binddataset = objDs;
        	objGrid.createFormat();
        	this.addChild("grid_a", objGrid);
        	objGrid.show();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("tes132123123.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
