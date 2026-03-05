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
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_browser_lanking", this);
            obj._setContents("<ColumnInfo><Column id=\"Browser\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"FLOAT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Browser\">Monday</Col><Col id=\"to\">10</Col></Row><Row><Col id=\"Browser\">Tuesday</Col><Col id=\"to\">10</Col></Row><Row><Col id=\"Browser\">Wednesday</Col><Col id=\"to\">5</Col></Row><Row><Col id=\"Browser\">Thusday</Col><Col id=\"to\">-2</Col></Row><Row><Col id=\"Browser\">Friday</Col><Col id=\"to\">-5</Col></Row><Row><Col id=\"Browser\">Saturday</Col><Col id=\"to\">6</Col></Row><Row><Col id=\"Browser\">Sunday</Col><Col id=\"to\">-5</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new FloatChart("FloatChart00","0","0",null,null,"0","10",null,null,null,null,this);
            obj.getSetter("taborder").set("0");
            obj.getSetter("binddataset").set("ds_browser_lanking");
            obj.getSetter("categorycolumn").set("bind:Browser");
            obj.getSetter("rotateaxis").set("false");
            obj.getSetter("waterfall").set("true");
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("floatbase_waterful.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
