(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("StackedColumn");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(768,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"category\" type=\"STRING\" size=\"256\"/><Column id=\"d1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"d2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"d3\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"category\">John</Col><Col id=\"d1\">5.33</Col><Col id=\"d2\">2.33</Col><Col id=\"d3\">3.32</Col></Row><Row><Col id=\"category\">James</Col><Col id=\"d1\">3.42</Col><Col id=\"d2\">2.23</Col><Col id=\"d3\">4.22</Col></Row><Row><Col id=\"category\">Hooper</Col><Col id=\"d1\">4.23</Col><Col id=\"d2\">3.23</Col><Col id=\"d3\">4.99</Col></Row><Row><Col id=\"category\">Luke</Col><Col id=\"d1\">7.99</Col><Col id=\"d2\">2.98</Col><Col id=\"d3\">2.35</Col></Row><Row><Col id=\"category\">Ryu</Col><Col id=\"d1\">2.75</Col><Col id=\"d2\">1.02</Col><Col id=\"d3\">5.24</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new BasicChart("BasicChart00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.getSetter("taborder").set("0");
            obj.getSetter("binddataset").set("Dataset00");
            obj.getSetter("categorycolumn").set("bind:category");
            obj.getSetter("enableanimation").set("false");
            obj.getSetter("stacktotalshadowstyle").set("");
            obj.getSetter("stacktotalvisible").set("true");
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
        this.loadIncludeScript("bar_stacktotal_bargradation.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
