(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("RadarChart_polygon");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(768,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("budget_vas_spending", this);
            obj._setContents("<ColumnInfo><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"FLOAT\" size=\"256\"/><Column id=\"value2\" type=\"FLOAT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"title\">Sales</Col><Col id=\"value\">48000</Col><Col id=\"value2\">50000</Col></Row><Row><Col id=\"title\">Marketing</Col><Col id=\"value2\">38000</Col><Col id=\"value\">23000</Col></Row><Row><Col id=\"title\">Development</Col><Col id=\"value\">67000</Col><Col id=\"value2\">41000</Col></Row><Row><Col id=\"title\">CustomerSupport</Col><Col id=\"value\">26500</Col><Col id=\"value2\">27800</Col></Row><Row><Col id=\"title\">InformationTechnology</Col><Col id=\"value\">19500</Col><Col id=\"value2\">25000</Col></Row><Row><Col id=\"title\">Administration</Col><Col id=\"value\">14000</Col><Col id=\"value2\">16000</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new RadarChart("RadarChart00","0%","0%",null,null,"0%","0%",null,null,null,null,this);
            obj.getSetter("taborder").set("1");
            obj.getSetter("binddataset").set("budget_vas_spending");
            obj.getSetter("categorycolumn").set("bind:title");
            obj.getSetter("radius").set("80");
            obj.getSetter("enableanimation").set("true");
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
        this.loadIncludeScript("RadarChart_Budget_vs_Spending.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
