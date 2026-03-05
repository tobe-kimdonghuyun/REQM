(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GaugeChart_");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(768,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_total", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">total</Col><Col id=\"Column1\">87</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_male", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">male</Col><Col id=\"Column1\">81</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_female", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">female</Col><Col id=\"Column1\">93</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new GaugeChart("GaugeChart00","1%","1%",null,null,"50%","1%",null,null,null,null,this);
            obj.getSetter("taborder").set("0");
            obj.getSetter("gaugetype").set("circular");
            obj.getSetter("binddataset").set("ds_total");
            obj.getSetter("categorycolumn").set("bind:Column0");
            this.addChild(obj.name, obj);

            obj = new GaugeChart("GaugeChart01","50%","1%",null,null,"1%","50%",null,null,null,null,this);
            obj.getSetter("taborder").set("1");
            obj.getSetter("gaugetype").set("circular");
            obj.getSetter("binddataset").set("ds_male");
            obj.getSetter("categorycolumn").set("bind:Column0");
            this.addChild(obj.name, obj);

            obj = new GaugeChart("GaugeChart02","50%","50%",null,null,"1%","1%",null,null,null,null,this);
            obj.getSetter("taborder").set("2");
            obj.getSetter("gaugetype").set("circular");
            obj.getSetter("binddataset").set("ds_female");
            obj.getSetter("categorycolumn").set("bind:Column0");
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
        this.loadIncludeScript("GaugeChart_gender survey.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
