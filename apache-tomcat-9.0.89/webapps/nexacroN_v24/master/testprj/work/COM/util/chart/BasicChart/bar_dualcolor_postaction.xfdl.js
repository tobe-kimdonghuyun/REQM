(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PercentStackedColumn");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(768,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"category\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"Column2\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"category\">Alf</Col><Col id=\"Column1\">47</Col><Col id=\"Column2\">75</Col></Row><Row><Col id=\"category\">Bert</Col><Col id=\"Column1\">32</Col><Col id=\"Column2\">74</Col></Row><Row><Col id=\"category\">Craig</Col><Col id=\"Column1\">71</Col><Col id=\"Column2\">85</Col></Row><Row><Col id=\"category\">Dan</Col><Col id=\"Column1\">25</Col><Col id=\"Column2\">19</Col></Row><Row><Col id=\"category\">Edgar</Col><Col id=\"Column1\">23</Col><Col id=\"Column2\">71</Col></Row><Row><Col id=\"category\">Fred</Col><Col id=\"Column1\">81</Col><Col id=\"Column2\">59</Col></Row><Row><Col id=\"category\">Gary</Col><Col id=\"Column1\">43</Col><Col id=\"Column2\">130</Col></Row><Row><Col id=\"category\">Harry</Col><Col id=\"Column1\">23</Col><Col id=\"Column2\">20</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new BasicChart("BasicChart00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.getSetter("taborder").set("0");
            obj.getSetter("binddataset").set("Dataset00");
            obj.getSetter("categorycolumn").set("bind:category");
            obj.getSetter("enableanimation").set("false");
            obj.getSetter("bargrouping").set("true");
            obj.getSetter("stacktype").set("none");
            obj.getSetter("ondrawend").set("BasicChart00_ondrawend");
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
        this.registerScript("bar_dualcolor_postaction.xfdl", function() {

        this.BasicChart00_ondrawend = function(obj,e)
        {
        	var pos, bound, item;
        	var x, y, w, h;
        	for(var i=0;i<2;i++)	// column
        	{
        		for(var j=0;j<this.Dataset00.rowcount;j++)
        		{
        			// getSeriesPointPos
        			// item을 찾아 위치정보를 얻는다.
        			// param 1 : series index
        			// param 2 : data index
        			pos = obj.getSeriesPointPos(i, j);
        			bound = pos.bound;
        			x = bound.left;
        			y = bound.top;
        			w = bound.width/2;
        			h = bound.height;
        			item = obj.addUserControl("itemrect_" + i + "_" + j, "rect");
        			item.set_x(x);
        			item.set_y(y);
        			item.set_width(w);
        			item.set_height(h);
        			item.set_opacity(0.3);
        			item.set_fillstyle("#ffffff");
        		}
        	}
        	obj.userControlDraw();

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("bar_dualcolor_postaction.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
