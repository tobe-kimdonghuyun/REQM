(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GaugeChart_Highlight");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(768,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_highlight", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">52</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_highlight00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">75</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_highlight01", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">24</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new GaugeChart("GaugeChart01","37.76%","2.08%",null,null,"37.5%","2.08%",null,null,null,null,this);
            obj.getSetter("taborder").set("0");
            obj.getSetter("binddataset").set("ds_highlight00");
            obj.getSetter("categorycolumn").set("bind:Column0");
            obj.getSetter("gaugetype").set("vertical");
            this.addChild(obj.name, obj);

            obj = new GaugeChart("GaugeChart00","1.3%","2.08%",null,null,"73.96%","2.08%",null,null,null,null,this);
            obj.getSetter("taborder").set("1");
            obj.getSetter("binddataset").set("ds_highlight");
            obj.getSetter("categorycolumn").set("bind:Column0");
            obj.getSetter("gaugetype").set("vertical");
            this.addChild(obj.name, obj);

            obj = new GaugeChart("GaugeChart02","72.92%","2.08%",null,null,"2.34%","2.08%",null,null,null,null,this);
            obj.getSetter("taborder").set("2");
            obj.getSetter("binddataset").set("ds_highlight01");
            obj.getSetter("categorycolumn").set("bind:Column0");
            obj.getSetter("gaugetype").set("vertical");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",768,480,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("GaugeChart_Basic_vertical.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
