(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("bigdecimal");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">0.0000001</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn00","50","77","102","69",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","199","16","221","162",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/></Band></Format></Formats>");
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
        this.registerScript("RP_101245_bigdecimal.xfdl", function() {

        this.btn00_onclick = function(obj,e)
        {
        	var val1 = 0.0000001;
        	var val2 = 1.0000001;
        alert(val1)
        alert(val1.toFixed(7));

        	var val3 = new nexacro.Decimal(val1.toFixed(7));

        	this.ds00.setColumn(0, "Column0", val1.toFixed(7));

        trace(this.ds00.saveXML());

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
        };
        this.loadIncludeScript("RP_101245_bigdecimal.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
