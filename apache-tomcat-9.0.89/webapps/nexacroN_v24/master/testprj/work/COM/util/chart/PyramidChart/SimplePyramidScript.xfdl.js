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
                this._setFormPosition(768,390);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_browser_lanking", this);
            obj._setContents("<ColumnInfo><Column id=\"Browser\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"FLOAT\" size=\"256\"/><Column id=\"part\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"desc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Browser\">TYPEA</Col><Col id=\"value\">100</Col><Col id=\"part\">01</Col><Col id=\"title\">TITLE01</Col><Col id=\"desc\">ABCDEFG</Col></Row><Row><Col id=\"Browser\">TYPEB</Col><Col id=\"value\">100</Col><Col id=\"part\">02</Col><Col id=\"title\">TITLE02</Col><Col id=\"desc\">ABCDEFG</Col></Row><Row><Col id=\"Browser\">TYPEC</Col><Col id=\"value\">100</Col><Col id=\"part\">03</Col><Col id=\"title\">TITLE03</Col><Col id=\"desc\">ABCDEFG</Col></Row><Row><Col id=\"Browser\">TYPED</Col><Col id=\"value\">100</Col><Col id=\"part\">04</Col><Col id=\"title\">TITLE04</Col><Col id=\"desc\">ABCDEFG</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new PyramidChart("PyramidChart00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.getSetter("taborder").set("0");
            obj.getSetter("binddataset").set("ds_browser_lanking");
            obj.getSetter("categorycolumn").set("bind:value");
            obj.getSetter("ondrawend").set("PyramidChart00_ondrawend");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",768,390,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SimplePyramidScript.xfdl", function() {
        this.PyramidChart00_ondrawend = function(obj,e)
        {
        	var objDs = this.ds_browser_lanking;
        	var pos, posinfo, centerX, centerY, text;
        	var fontstyle = '14pt Verdana';
        	var color = ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728"];
        	for(var j=0;j<objDs.rowcount;j++)
        	{
        		// getSeriesPointPos
        		// item을 찾아 위치정보를 얻는다.
        		// param 1 : series index
        		// param 2 : data index
        		text = objDs.getColumn(j,"part");
        		pos = obj.getSeriesPointPos(0, j);
        		posinfo = pos.posinfo;

        		// rect
        		// x1,y1--------x2,y2
        		// x4,x4--------x3,y3

        		centerX = posinfo.x3 - ((posinfo.x3 - posinfo.x4)/2) - 10;
        		centerY = posinfo.y3 - ((posinfo.y3 - posinfo.y2)/2);

        		//-----------------------------------------------------------
        		// 숫자
        		//-----------------------------------------------------------
        		var item = obj.addUserControl("useritemtext_" + j, "text");
        		item.set_font(fontstyle);
        		item.set_color("#f1f1f1");

        		// get font size
        		var fontobj = nexacro.FontObject(fontstyle);
        		var sz = nexacro.getTextSize(text, fontobj);
        		fontobj = null;
        		item.set_x(centerX);
        		item.set_y(centerY);
        		item.set_text(text);
        		item.set_textAlign("center");
        		item.set_verticalAlign("middle");

        		//-----------------------------------------------------------
        		// 짝대기
        		//-----------------------------------------------------------
        		item = obj.addUserControl("useritemrect_" + j, "rect");
        		item.set_x(centerX + sz.nx);
        		item.set_y(centerY - (sz.ny/2));
        		item.set_width(5);
        		item.set_height(sz.ny);
        		item.set_fillstyle("#f1f1f1");

        		//-----------------------------------------------------------
        		// TITLE
        		//-----------------------------------------------------------
        		item = obj.addUserControl("useritemtitletext_" + j, "text");
        		item.set_font('12pt Verdana');
        		item.set_color(color[j]);
        		item.set_x(posinfo.x3);
        		item.set_y(posinfo.y2);
        		item.set_text(objDs.getColumn(j,"title"));
        		item.set_textAlign("left");
        		item.set_verticalAlign("top");

        		//-----------------------------------------------------------
        		// desc
        		//-----------------------------------------------------------
        		item = obj.addUserControl("useritemdesctext_" + j, "text");
        		item.set_font('7pt Verdana');
        		item.set_color("#000000");
        		item.set_x(posinfo.x3);
        		item.set_y(posinfo.y2 + 20);
        		item.set_text(objDs.getColumn(j,"desc"));
        		item.set_textAlign("left");
        		item.set_verticalAlign("top");

        		//-----------------------------------------------------------
        		// 짝대기2
        		//-----------------------------------------------------------
        		item = obj.addUserControl("useritemhorzrect_" + j, "rect");
        		item.set_x(posinfo.x3);
        		item.set_y(posinfo.y3-3);
        		item.set_width(300);
        		item.set_height(2);
        		item.set_fillstyle(color[j]);
        	}
        	obj.userControlDraw();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("SimplePyramidScript.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
