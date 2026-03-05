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
            obj._setContents("<ColumnInfo><Column id=\"Browser\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"FLOAT\" size=\"256\"/><Column id=\"to\" type=\"FLOAT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Browser\">Edge</Col><Col id=\"from\">22</Col><Col id=\"to\">60</Col></Row><Row><Col id=\"Browser\">Android</Col><Col id=\"from\">20</Col><Col id=\"to\">65</Col></Row><Row><Col id=\"Browser\">Samsung Internet</Col><Col id=\"from\">31</Col><Col id=\"to\">35</Col></Row><Row><Col id=\"Browser\">IE</Col><Col id=\"from\">10</Col><Col id=\"to\">40</Col></Row><Row><Col id=\"Browser\">Opera</Col><Col id=\"from\">0</Col><Col id=\"to\">30</Col></Row><Row><Col id=\"Browser\">Firefox</Col><Col id=\"from\">56</Col><Col id=\"to\">10</Col></Row><Row><Col id=\"Browser\">UCBrowser</Col><Col id=\"from\">22</Col><Col id=\"to\">43</Col></Row><Row><Col id=\"Browser\">Safari</Col><Col id=\"from\">12</Col><Col id=\"to\">33</Col></Row><Row><Col id=\"Browser\">Chrome</Col><Col id=\"from\">5</Col><Col id=\"to\">56</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new FloatChart("FloatChart00","27","51","670","336",null,null,null,null,null,null,this);
            obj.getSetter("taborder").set("0");
            obj.getSetter("binddataset").set("ds_browser_lanking");
            obj.getSetter("categorycolumn").set("bind:Browser");
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
        this.loadIncludeScript("floatbase_copy.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
