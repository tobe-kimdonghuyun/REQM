(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SimplePyramid");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(768,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_browser_lanking", this);
            obj._setContents("<ColumnInfo><Column id=\"Browser\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"FLOAT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Browser\">Edge</Col><Col id=\"value\">1000</Col></Row><Row><Col id=\"Browser\">IE</Col><Col id=\"value\">200</Col></Row><Row><Col id=\"Browser\">Opera</Col><Col id=\"value\">400</Col></Row><Row><Col id=\"Browser\">Firefox</Col><Col id=\"value\">600</Col></Row><Row><Col id=\"Browser\">Safari</Col><Col id=\"value\">100</Col></Row><Row><Col id=\"Browser\">Chrome</Col><Col id=\"value\">180</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new PyramidChart("PyramidChart00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.getSetter("taborder").set("0");
            obj.getSetter("binddataset").set("ds_browser_lanking");
            obj.getSetter("categorycolumn").set("bind:value");
            obj.getSetter("graphtype").set("funnel");
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
        this.loadIncludeScript("SimpleFunnel.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
