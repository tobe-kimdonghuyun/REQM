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
            obj._setContents("<ColumnInfo><Column id=\"Browser\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"DATETIME\" size=\"256\"/><Column id=\"to\" type=\"DATETIME\" size=\"256\"/><Column id=\"percent\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Browser\">제우스</Col><Col id=\"from\">201102201000</Col><Col id=\"to\">201102201700</Col><Col id=\"percent\">ON</Col></Row><Row><Col id=\"Browser\">아프로디테</Col><Col id=\"from\">201102201000</Col><Col id=\"to\">201102201100</Col><Col id=\"percent\">ON</Col></Row><Row><Col id=\"Browser\">포세이돈</Col><Col id=\"from\">201102201000</Col><Col id=\"to\">201102201100</Col><Col id=\"percent\">OFF</Col></Row><Row><Col id=\"Browser\">아테나</Col><Col id=\"from\">201102201000</Col><Col id=\"to\">201102201100</Col><Col id=\"percent\">ON</Col></Row><Row><Col id=\"Browser\">아테나</Col><Col id=\"from\">201102201300</Col><Col id=\"to\">201102201500</Col><Col id=\"percent\">OFF</Col></Row><Row><Col id=\"Browser\">아테나</Col><Col id=\"from\">201102201630</Col><Col id=\"to\">201102201800</Col><Col id=\"percent\">ON</Col></Row><Row><Col id=\"Browser\">헤르메스</Col><Col id=\"from\">201102201000</Col><Col id=\"to\">201102201100</Col><Col id=\"percent\">OFF</Col></Row><Row><Col id=\"Browser\">에스티아</Col><Col id=\"from\">201102201000</Col><Col id=\"to\">201102201700</Col><Col id=\"percent\">ON</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new FloatChart("FloatChart00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.getSetter("taborder").set("0");
            obj.getSetter("binddataset").set("ds_browser_lanking");
            obj.getSetter("categorycolumn").set("bind:Browser");
            obj.getSetter("isdatetimevalue").set("true");
            obj.getSetter("rotateaxis").set("true");
            obj.getSetter("ondrawend").set("FloatChart00_ondrawend");
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
        this.registerScript("floatbase_plan_hour.xfdl", function() {

        this.FloatChart00_ondrawend = function(obj,e)
        {
        	if(obj._alreadyset) return;

        	var colorList = "";
        	var ds = obj._binddataset;
        	var rowcnt = ds.rowcount;
        	var v, c;
        	for(var i=0;i<rowcnt;i++) {
        		v = ds.getColumn(i,"percent");
        		if(v == "ON") c = "green";
        		else c = "red";
        		if(i>0) colorList += ",";
        		colorList += c;
        	}
        	obj._alreadyset = true;	// set_positivebarfillstyle 호출시 FloatChart00_ondrawend가 호출됨 flag.
        	obj.seriesset[0].set_positivebarfillstyle(colorList);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("floatbase_plan_hour.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
