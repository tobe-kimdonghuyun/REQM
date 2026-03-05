(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("floatbase");
            this.set_titletext("New Form");
            this.getSetter("_isTimeData").set("true");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_browser_lanking", this);
            obj._setContents("<ColumnInfo><Column id=\"Browser\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"DATE\" size=\"256\"/><Column id=\"to\" type=\"DATE\" size=\"256\"/><Column id=\"percent\" type=\"FLOAT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Browser\">Edge</Col><Col id=\"from\">20110220</Col><Col id=\"to\">20110320</Col><Col id=\"percent\">50</Col></Row><Row><Col id=\"Browser\">IE</Col><Col id=\"from\">20110120</Col><Col id=\"to\">20110220</Col><Col id=\"percent\">70</Col></Row><Row><Col id=\"Browser\">IE1</Col><Col id=\"from\">20110301</Col><Col id=\"to\">20110322</Col><Col id=\"percent\">0</Col></Row><Row><Col id=\"Browser\">Opera</Col><Col id=\"from\">20110210</Col><Col id=\"to\">20110310</Col><Col id=\"percent\">10</Col></Row><Row><Col id=\"Browser\">Firefox</Col><Col id=\"from\">20110110</Col><Col id=\"to\">20110220</Col><Col id=\"percent\">40</Col></Row><Row><Col id=\"Browser\">Chrome</Col><Col id=\"from\">20110220</Col><Col id=\"to\">20110303</Col><Col id=\"percent\">90</Col></Row><Row><Col id=\"Browser\">Chrome</Col><Col id=\"from\">20110310</Col><Col id=\"to\">20110420</Col><Col id=\"percent\">100</Col></Row><Row><Col id=\"Browser\">Edge1</Col><Col id=\"from\">20110220</Col><Col id=\"to\">20110320</Col><Col id=\"percent\">50</Col></Row><Row><Col id=\"Browser\">IE1</Col><Col id=\"from\">20110120</Col><Col id=\"to\">20110220</Col><Col id=\"percent\">70</Col></Row><Row><Col id=\"Browser\">IE</Col><Col id=\"from\">20110301</Col><Col id=\"to\">20110322</Col><Col id=\"percent\">0</Col></Row><Row><Col id=\"Browser\">Opera1</Col><Col id=\"from\">20110210</Col><Col id=\"to\">20110310</Col><Col id=\"percent\">10</Col></Row><Row><Col id=\"Browser\">Firefox1</Col><Col id=\"from\">20110110</Col><Col id=\"to\">20110220</Col><Col id=\"percent\">40</Col></Row><Row><Col id=\"Browser\">Chrome1</Col><Col id=\"from\">20110220</Col><Col id=\"to\">20110303</Col><Col id=\"percent\">90</Col></Row><Row><Col id=\"Browser\">Chrome</Col><Col id=\"from\">20110310</Col><Col id=\"to\">20110420</Col><Col id=\"percent\">100</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new FloatChart("FloatChart00","0","0",null,null,"0","10",null,null,null,null,this);
            obj.getSetter("taborder").set("0");
            obj.getSetter("categorycolumn").set("bind:Browser");
            obj.getSetter("rotateaxis").set("true");
            obj.getSetter("binddataset").set("ds_browser_lanking");
            obj.getSetter("isdatetimevalue").set("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("floatbase_plan.xfdl", function() {

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("floatbase_plan.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
