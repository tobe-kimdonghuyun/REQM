(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GaugeChart_Basic");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(768,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_speed", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">속도</Col><Col id=\"Column1\">130</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new GaugeChart("GaugeChart01","0.52%","1.25%",null,null,"48%","12.5%",null,null,null,null,this);
            obj.getSetter("taborder").set("1");
            obj.getSetter("binddataset").set("ds_speed");
            obj.getSetter("categorycolumn").set("bind:Column0");
            obj.getSetter("gaugetype").set("circular");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","83.33%","87.5%",null,null,"1.04%","2.08%",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("runAnimation");
            this.addChild(obj.name, obj);

            obj = new GaugeChart("GaugeChart00","52%","1.25%",null,null,"1.04%","12.5%",null,null,null,null,this);
            obj.getSetter("taborder").set("2");
            obj.getSetter("binddataset").set("ds_speed");
            obj.getSetter("categorycolumn").set("bind:Column0");
            obj.getSetter("gaugetype").set("circular");
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
        this.registerScript("GaugeChart_speed.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.GaugeChart00.runAnimation();
        	this.GaugeChart01.runAnimation();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("GaugeChart_speed.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
