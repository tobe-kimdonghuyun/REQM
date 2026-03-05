(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ColumnAndLine");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(768,540);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"category\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">7000</Col><Col id=\"category\">JAN</Col></Row><Row><Col id=\"Column0\">26000</Col><Col id=\"category\">FEB</Col></Row><Row><Col id=\"Column0\">11000</Col><Col id=\"category\">MAR</Col></Row><Row><Col id=\"Column0\">16000</Col><Col id=\"category\">APR</Col></Row><Row><Col id=\"Column0\">28000</Col><Col id=\"category\">MAY</Col></Row><Row><Col id=\"Column0\">13000</Col><Col id=\"category\">JUN</Col></Row><Row><Col id=\"Column0\">23000</Col><Col id=\"category\">JUL</Col></Row><Row><Col id=\"Column0\">28500</Col><Col id=\"Column1\">28500</Col><Col id=\"category\">AUG</Col></Row><Row><Col id=\"Column1\">11000</Col><Col id=\"category\">SEP</Col></Row><Row><Col id=\"Column1\">14000</Col><Col id=\"category\">OCT</Col></Row><Row><Col id=\"Column1\">9000</Col><Col id=\"category\">NOV</Col></Row><Row><Col id=\"Column1\">10000</Col><Col id=\"category\">DEC</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new BasicChart("BasicChart00","0","10",null,null,"8","30",null,null,null,null,this);
            obj.getSetter("taborder").set("0");
            obj.getSetter("binddataset").set("Dataset00");
            obj.getSetter("categorycolumn").set("bind:category");
            obj.getSetter("bargrouping").set("false");
            obj.getSetter("enableanimation").set("false");
            obj.getSetter("ondrawend").set("BasicChart00_ondrawend");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",768,540,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("line_event.xfdl", function() {

        this.BasicChart00_ondrawend = function(obj,e)
        {
        	// getAxisPointPos
        	// tick label을 찾아 위치정보를 얻는다.
        	// param 1 : category / value
        	// param 2 : tick 이 있어야 하며 tick label text
        	var pos = obj.getAxisPointPos("category", "AUG");
        	if(!pos) return;

        	var text = "BASE";
        	var fontstyle = '14pt Verdana';

        	// addUserControl
        	// series group에 control을 생성한다.
        	// param 1 : control name
        	// param 2 : text / rect / path / arc
        	var item = obj.addUserControl("itemtext1", "text");
        	item.set_font(fontstyle);
        	item.set_color("#E9B34E");

        	// get font size
        	var fontobj = nexacro.FontObject(fontstyle);
        	var sz = nexacro.getTextSize(text, fontobj);

        	fontobj = null;
        	item.set_x(pos.x);
        	item.set_y(30);
        	item.set_text(text);

        	var item2 = obj.addUserControl("itemrect1", "rect");
        	item2.set_x(pos.x-1);
        	item2.set_y(30+sz.ny+2);
        	item2.set_width(3);
        	item2.set_height(obj.getOffsetHeight() - 150);
        	item2.set_fillstyle("#E9B34E");

        	obj.userControlDraw();

        	// delete
        	/*
        	obj.removeUserControl("itemtext1");
        	obj.userControlDraw();
        	*/

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("line_event.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
