(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("RadarChart_Circle");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(768,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_browser_lanking", this);
            obj._setContents("<ColumnInfo><Column id=\"Browser\" type=\"STRING\" size=\"256\"/><Column id=\"Perr\" type=\"FLOAT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Browser\">Edge</Col><Col id=\"Perr\">5</Col></Row><Row><Col id=\"Browser\">Android</Col><Col id=\"Perr\">20</Col></Row><Row><Col id=\"Browser\">Samsung Internet</Col><Col id=\"Perr\">31</Col></Row><Row><Col id=\"Browser\">IE</Col><Col id=\"Perr\">35</Col></Row><Row><Col id=\"Browser\">Opera</Col><Col id=\"Perr\">38</Col></Row><Row><Col id=\"Browser\">Firefox</Col><Col id=\"Perr\">57</Col></Row><Row><Col id=\"Browser\">UCBrowser</Col><Col id=\"Perr\">80</Col></Row><Row><Col id=\"Browser\">Safari</Col><Col id=\"Perr\">44</Col></Row><Row><Col id=\"Browser\">Chrome</Col><Col id=\"Perr\">55</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new RadarChart("RadarChart00","0%","0%",null,null,"0%","0%",null,null,null,null,this);
            obj.getSetter("taborder").set("1");
            obj.getSetter("binddataset").set("ds_browser_lanking");
            obj.getSetter("categorycolumn").set("bind:Browser");
            obj.getSetter("radius").set("80");
            obj.getSetter("background").set("black");
            obj.getSetter("radartype").set("circle");
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
        this.registerScript("RadarChart_Basic.xfdl", function() {

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("RadarChart_Basic.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
