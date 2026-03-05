(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Scatter");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(768,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"category\" type=\"STRING\" size=\"256\"/><Column id=\"profit\" type=\"FLOAT\" size=\"256\"/><Column id=\"cost\" type=\"FLOAT\" size=\"256\"/><Column id=\"revenue\" type=\"FLOAT\" size=\"256\"/><Column id=\"profit1\" type=\"FLOAT\" size=\"256\"/><Column id=\"cost1\" type=\"FLOAT\" size=\"256\"/><Column id=\"revenue1\" type=\"FLOAT\" size=\"256\"/><Column id=\"select\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"category\">1</Col><Col id=\"profit\">600</Col><Col id=\"cost\">700</Col><Col id=\"revenue\">9999</Col><Col id=\"profit1\">400</Col><Col id=\"cost1\">200</Col><Col id=\"revenue1\">8000</Col></Row><Row><Col id=\"category\">2</Col><Col id=\"profit\">1000</Col><Col id=\"cost\">1400</Col><Col id=\"revenue\">5500</Col><Col id=\"profit1\">2200</Col><Col id=\"cost1\">4000</Col><Col id=\"revenue1\">4040</Col></Row><Row><Col id=\"category\">3</Col><Col id=\"profit\">1500</Col><Col id=\"cost\">1550</Col><Col id=\"revenue\">2200</Col><Col id=\"profit1\">1900</Col><Col id=\"cost1\">2000</Col><Col id=\"revenue1\">3000</Col></Row><Row><Col id=\"category\">4</Col><Col id=\"profit\">2200</Col><Col id=\"cost\">1300</Col><Col id=\"revenue\">1900</Col><Col id=\"profit1\">50</Col><Col id=\"cost1\">660</Col><Col id=\"revenue1\">200</Col></Row><Row><Col id=\"category\">5</Col><Col id=\"profit\">1400</Col><Col id=\"cost\">900</Col><Col id=\"revenue\">9900</Col><Col id=\"profit1\">3000</Col><Col id=\"cost1\">1500</Col><Col id=\"revenue1\">500</Col></Row><Row><Col id=\"category\">6</Col><Col id=\"profit\">2000</Col><Col id=\"cost\">500</Col><Col id=\"revenue\">27000</Col><Col id=\"profit1\">80</Col><Col id=\"cost1\">2900</Col><Col id=\"revenue1\">3050</Col><Col id=\"select\">1</Col></Row><Row><Col id=\"profit\">1800</Col><Col id=\"category\">7</Col><Col id=\"cost\">1400</Col><Col id=\"revenue\">8000</Col><Col id=\"profit1\">2500</Col><Col id=\"cost1\">800</Col><Col id=\"revenue1\">2000</Col></Row><Row><Col id=\"category\">8</Col><Col id=\"profit\">2500</Col><Col id=\"cost\">800</Col><Col id=\"revenue\">5700</Col><Col id=\"profit1\">3000</Col><Col id=\"cost1\">1900</Col><Col id=\"revenue1\">1900</Col><Col id=\"select\">1</Col></Row><Row><Col id=\"category\">9</Col><Col id=\"profit\">2550</Col><Col id=\"cost\">600</Col><Col id=\"revenue\">3000</Col><Col id=\"profit1\">1500</Col><Col id=\"cost1\">1300</Col><Col id=\"revenue1\">440</Col></Row><Row><Col id=\"category\">10</Col><Col id=\"profit\">1600</Col><Col id=\"cost\">1200</Col><Col id=\"revenue\">5000</Col><Col id=\"profit1\">8989</Col><Col id=\"cost1\">1500</Col><Col id=\"revenue1\">200</Col></Row><Row><Col id=\"category\">11</Col><Col id=\"profit\">650</Col><Col id=\"cost\">550</Col><Col id=\"revenue\">3087</Col><Col id=\"profit1\">2000</Col><Col id=\"cost1\">1500</Col><Col id=\"revenue1\">500</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new BubbleChart("BubbleChart00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.getSetter("taborder").set("0");
            obj.getSetter("binddataset").set("Dataset00");
            obj.getSetter("enableanimation").set("true");
            obj.getSetter("ondrag").set("BubbleChart00_ondrag");
            obj.getSetter("ondragmove").set("BubbleChart00_ondragmove");
            obj.getSetter("onlbuttonup").set("BubbleChart00_onlbuttonup");
            obj.getSetter("ondrawend").set("BubbleChart00_ondrawend");
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
        this.registerScript("Scatter_event.xfdl", function() {

        this.BubbleChart00_ondrag = function(obj,e)
        {
        	this.fn_DragItemView(obj, true, e.canvasx, e.canvasy);
        	return true;
        };


        this.BubbleChart00_ondragmove = function(obj,e)
        {
        	this.fn_DragItemMove(obj, e.canvasx, e.canvasy);
        };


        this.fn_DragItemView = function(oChart, v, xBase, yBase)
        {
        	var item = oChart.addUserControl("itemDragRect", "rect");
        	item.set_visible(v);
        	if(!v) return;

        	var pos = oChart.getBorderPosInfo();
        	var gapl = pos?pos.l:0;
        	var gapt = pos?pos.t:0;
        	item.set_x(xBase-gapl);
        	item.set_y(yBase-gapt);
        	item.set_width(0);
        	item.set_height(0);
        	item.set_opacity(0.7);
        	item.set_fillstyle("#dddddd");
        	item.set_strokepen("#000000");
        	item.basepos = { "x" : xBase, "y" : yBase };

        }

        this.fn_DragItemMove = function(oChart, x, y)
        {
        	// 아래에서 위로 등 반대로 drag시 position처리는 개발자분이 직접 처리하셔요..
        	var item = oChart.addUserControl("itemDragRect", "rect");
        	var basePos = item.basepos;
        	var w = x - basePos.x;
        	var h = y - basePos.y;
        	//item.set_x(x);
        	//item.set_y(y);
        	item.set_width(w);
        	item.set_height(h);

        	oChart.userControlDraw();
        }

        this.BubbleChart00_onlbuttonup = function(obj,e)
        {
        	var item = obj.addUserControl("itemDragRect", "rect");
        	if(item.visible)
        	{
        		var itembound = item._bounds;
        		var pos, bound;
        		var series = obj.seriesset;
        		var serieLengs = series.length;
        		for(var i=0;i<serieLengs;i++)	// column
        		{
        			for(var j=0;j<this.Dataset00.rowcount;j++)
        			{
        				pos = obj.getSeriesPointPos(i, j);
        				if(pos)
        				{
        					bound = pos.bound;
        					if(	bound.left >= itembound.left &&
        						bound.top >= itembound.top &&
        						bound.right <= itembound.right &&
        						bound.bottom <= itembound.bottom )
        					{
        						console.log("~~~", i, j, pos);
        					}
        				}
        			}
        		}
        		this.fn_DragItemView(obj, false, 0, 0);
        		obj.userControlDraw();
        	}
        };



        this.BubbleChart00_ondrawend = function(obj,e)
        {
        	// getAxisPointPos
        	// tick label을 찾아 위치정보를 얻는다.
        	// param 1 : category / value
        	// param 2 : tick 이 있어야 하며 tick label text - text가 존재해야 함.
        	//			 value axis인 경우 문자형으로 줄 경우 label text이며 숫자는 value를 찾음
        	// param 3 : valueaxis인 경우 index : default = 0
        	// param 4 : tick label 값을 찾지 않고 index로 가져올 경우로 param2보다 우선으로 찾음.

        	var pos = obj.getAxisPointPos("value", null, 0, 3);
        	if(!pos) return;
        	var boardPos = obj.getBorderPosInfo();
        	var itemrect1 = obj.addUserControl("itemuserrect1", "rect");
        	itemrect1.set_x(pos.x-1);
        	itemrect1.set_y(0);
        	itemrect1.set_width(3);
        	itemrect1.set_height(boardPos.h);
        	itemrect1.set_fillstyle("red");

        	pos = obj.getAxisPointPos("value", 1000, 1);
        	var itemrect2 = obj.addUserControl("itemuserrect2", "rect");
        	itemrect2.set_x(0);
        	itemrect2.set_y(pos.y);
        	itemrect2.set_width(boardPos.w);
        	itemrect2.set_height(3);
        	itemrect2.set_fillstyle("green");

        	var itemtext = obj.addUserControl("itemusertext1", "text");
        	itemtext.set_font('14pt Verdana');
        	itemtext.set_color("#E9B34E");
        	itemtext.set_x(boardPos.w/2);
        	itemtext.set_y(pos.y - 5);
        	itemtext.set_text("BASE LINE");
        	itemtext.set_textAlign("center");
        	itemtext.set_verticalAlign("bottom");

        	obj.userControlDraw();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("Scatter_event.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
