(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("LayeredColumn");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(768,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"data\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">33.2</Col><Col id=\"name\">서울</Col></Row><Row><Col id=\"data\">14.5</Col><Col id=\"name\">대전</Col></Row><Row><Col id=\"data\">11.8</Col><Col id=\"name\">대구</Col></Row><Row><Col id=\"data\">10.2</Col><Col id=\"name\">광주</Col></Row><Row><Col id=\"data\">12.3</Col><Col id=\"name\">부산</Col></Row><Row><Col id=\"data\">9.2</Col><Col id=\"name\">전주</Col></Row><Row><Col id=\"data\">4.7</Col><Col id=\"name\">인천</Col></Row><Row><Col id=\"data\">4.8</Col><Col id=\"name\">경기</Col></Row><Row><Col id=\"data\">4.9</Col><Col id=\"name\">강원</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new BasicChart("BasicChart00","2","0",null,null,"18","0",null,null,null,null,this);
            obj.getSetter("taborder").set("0");
            obj.getSetter("binddataset").set("Dataset01");
            obj.getSetter("categorycolumn").set("bind:name");
            obj.getSetter("bargrouping").set("false");
            obj.getSetter("enableanimation").set("false");
            obj.getSetter("rotateaxis").set("true");
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
        this.registerScript("bar_arc_postaction.xfdl", function() {

        this.BasicChart00_ondrawend = function(obj,e)
        {
        	var pos, bound, item;
        	var x, y, w, h, r, b, h_half, centerx, centery;
        	for(var j=0;j<this.Dataset01.rowcount;j++)
        	{
        		// getSeriesPointPos
        		// item을 찾아 위치정보를 얻는다.
        		// param 1 : series index
        		// param 2 : data index
        		pos = obj.getSeriesPointPos(0, j);
        		bound = pos.bound;
        		//x = bound.left;
        		y = bound.top;
        		r = bound.right;
        		//b = bound.bottom;
        		h = bound.height;
        		h_half = h * 0.5;

        		centerx = r + h_half;
        		centery = y + h_half;

        		item = obj.addUserControl("itemarc_" + j, "arc");
        		item.setCenter(new nexacro.Point(centerx, centery));
        		item.set_width(h*1.2);
        		item.set_height(h*1.2);
        		item.set_fillstyle("red");
        	}
        	obj.userControlDraw();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("bar_arc_postaction.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
