(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("webToolTest");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\"/><Col id=\"Column0\">21111 11</Col></Row><Row><Col id=\"Column1\"/><Col id=\"Column0\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Edit("Edit00","21","18","169","47",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_value("  ");
            obj.set_text("  ");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","20","75","172","52",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","18","140","174","47",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("RP_102168_webToolTest.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	alert("clicked");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("RP_102168_webToolTest.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
