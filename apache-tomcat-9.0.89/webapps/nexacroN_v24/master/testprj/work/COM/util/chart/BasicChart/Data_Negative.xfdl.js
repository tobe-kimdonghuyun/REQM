(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Data_Negative");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(768,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTempo", this);
            obj._setContents("<ColumnInfo><Column id=\"month\" type=\"STRING\" size=\"256\"/><Column id=\"c1\" type=\"FLOAT\" size=\"256\"/><Column id=\"c2\" type=\"FLOAT\" size=\"256\"/><Column id=\"c3\" type=\"FLOAT\" size=\"256\"/><Column id=\"c4\" type=\"FLOAT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"month\">1월</Col><Col id=\"c1\">-7.5</Col><Col id=\"c2\">-5.3</Col><Col id=\"c3\">-4</Col><Col id=\"c4\">-1.5</Col></Row><Row><Col id=\"month\">2월</Col><Col id=\"c1\">-3.2</Col><Col id=\"c2\">-1.5</Col><Col id=\"c3\">-3.2</Col><Col id=\"c4\">0.2</Col></Row><Row><Col id=\"month\">3월</Col><Col id=\"c1\">2.5</Col><Col id=\"c2\">5.3</Col><Col id=\"c3\">3.5</Col><Col id=\"c4\">5.6</Col></Row><Row><Col id=\"month\">4월</Col><Col id=\"c1\">7</Col><Col id=\"c2\">9</Col><Col id=\"c3\">10</Col><Col id=\"c4\">7</Col></Row><Row><Col id=\"month\">5월</Col><Col id=\"c1\">8</Col><Col id=\"c2\">9</Col><Col id=\"c3\">8</Col><Col id=\"c4\">10</Col></Row><Row><Col id=\"month\">6월</Col><Col id=\"c1\">12</Col><Col id=\"c2\">11</Col><Col id=\"c3\">9</Col><Col id=\"c4\">11</Col></Row><Row><Col id=\"month\">7월</Col><Col id=\"c1\">19</Col><Col id=\"c2\">21</Col><Col id=\"c3\">18</Col><Col id=\"c4\">20</Col></Row><Row><Col id=\"month\">8월</Col><Col id=\"c1\">25</Col><Col id=\"c2\">27</Col><Col id=\"c3\">26</Col><Col id=\"c4\">22</Col></Row><Row><Col id=\"month\">9월</Col><Col id=\"c1\">20</Col><Col id=\"c2\">20</Col><Col id=\"c3\">22</Col><Col id=\"c4\">18</Col></Row><Row><Col id=\"month\">10월</Col><Col id=\"c1\">15</Col><Col id=\"c2\">13</Col><Col id=\"c3\">12</Col><Col id=\"c4\">17</Col></Row><Row><Col id=\"month\">11월</Col><Col id=\"c1\">8</Col><Col id=\"c2\">9</Col><Col id=\"c3\">7</Col><Col id=\"c4\">7</Col></Row><Row><Col id=\"month\">12월</Col><Col id=\"c1\">-2</Col><Col id=\"c2\">-4.5</Col><Col id=\"c3\">-1.2</Col><Col id=\"c4\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new BasicChart("BasicChart00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.getSetter("taborder").set("1");
            obj.getSetter("binddataset").set("dsTempo");
            obj.getSetter("categorycolumn").set("bind:month");
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
        this.registerScript("Data_Negative.xfdl", function() {

        this.Div00_BtnBarType_onclick = function(obj,e)
        {
        	var cnt = this.BasicChart00.seriesset.length;
        	for (var i=0;i<cnt;i++)
        	{
        		this.BasicChart00.seriesset[i].set_barvisible(true);
        		this.BasicChart00.seriesset[i].set_linevisible(false);
        		this.BasicChart00.seriesset[i].set_lineareavisible(false);
        		this.BasicChart00.seriesset[i].set_pointvisible(false);
        	}
        };

        this.Div00_BtnLineType_onclick = function(obj,e)
        {
        	var cnt = this.BasicChart00.seriesset.length;
        	for (var i=0;i<cnt;i++)
        	{
        		this.BasicChart00.seriesset[i].set_barvisible(false);
        		this.BasicChart00.seriesset[i].set_linevisible(true);
        		this.BasicChart00.seriesset[i].set_lineareavisible(false);
        		this.BasicChart00.seriesset[i].set_pointvisible(false);
        	}
        };

        this.Div00_BtnLineAreaType_onclick = function(obj,e)
        {
        	var cnt = this.BasicChart00.seriesset.length;
        	for (var i=0;i<cnt;i++)
        	{
        		this.BasicChart00.seriesset[i].set_barvisible(false);
        		this.BasicChart00.seriesset[i].set_linevisible(true);
        		this.BasicChart00.seriesset[i].set_lineareavisible(true);
        		this.BasicChart00.seriesset[i].set_pointvisible(false);
        	}
        };


        this.Div00_BtnLineBarType_onclick = function(obj,e)
        {
        	var cnt = this.BasicChart00.seriesset.length;
        	for (var i=0;i<cnt;i++)
        	{
        		this.BasicChart00.seriesset[i].set_barvisible(i==0 ? false : true);
        		this.BasicChart00.seriesset[i].set_linevisible(i==0 ? true : false);
        		this.BasicChart00.seriesset[i].set_lineareavisible(false);
        		this.BasicChart00.seriesset[i].set_pointvisible(false);
        	}
        };

        this.Div00_BtnLineAreaBarType_onclick = function(obj,e)
        {
        	var cnt = this.BasicChart00.seriesset.length;
        	for (var i=0;i<cnt;i++)
        	{
        		this.BasicChart00.seriesset[i].set_barvisible(i==0 ? false : true);
        		this.BasicChart00.seriesset[i].set_linevisible(i==0 ? true : false);
        		this.BasicChart00.seriesset[i].set_lineareavisible(i==0 ? true : false);
        		this.BasicChart00.seriesset[i].set_pointvisible(false);
        	}
        };

        this.Div00_BtnLinePointType_onclick = function(obj,e)
        {
        	var cnt = this.BasicChart00.seriesset.length;
        	for (var i=0;i<cnt;i++)
        	{
        		this.BasicChart00.seriesset[i].set_barvisible(false);
        		this.BasicChart00.seriesset[i].set_linevisible(true);
        		this.BasicChart00.seriesset[i].set_lineareavisible(false);
        		this.BasicChart00.seriesset[i].set_pointvisible(true);
        	}
        };

        this.Div00_BtnRotate_onclick = function(obj,e)
        {
        	this.BasicChart00.set_rotateaxis(!this.BasicChart00.rotateaxis);
        };

        this.Div00_BtnGrouping_onclick = function(obj,e)
        {
        	this.BasicChart00.set_bargrouping(!this.BasicChart00.bargrouping);
        };

        this.Div00_BtnStack_onclick = function(obj,e)
        {
        	var type = this.BasicChart00.stacktype;
        	switch (type)
        	{
        	case "none":
        		this.BasicChart00.set_stacktype("normal");
        	break;
        	case "normal":
        		this.BasicChart00.set_stacktype("percent");
        	break;
        	case "percent":
        		this.BasicChart00.set_stacktype("none");
        	break;
        	}

        };

        this.Div00_BtnCategoryRotate_onclick = function(obj,e)
        {
        	var angle = this.BasicChart00.categoryaxis.labelrotate | 0;
        	angle -= 15;
        	this.BasicChart00.categoryaxis.set_labelrotate(angle);
        };

        this.Div00_BtnCategoryOpposite_onclick = function(obj,e)
        {
        	this.BasicChart00.categoryaxis.set_opposite(!this.BasicChart00.categoryaxis.opposite);
        };

        this.Div00_BtnLineShape_onclick = function(obj,e)
        {
        	var cnt = this.BasicChart00.seriesset.length;
        	for (var i=0;i<cnt;i++)
        	{
        		if ( this.BasicChart00.seriesset[i].linevisible)
        		{
        			var type = this.BasicChart00.seriesset[i].linetype;
        			switch (type)
        			{
        				case "":
        				case "segment":
        					this.BasicChart00.seriesset[i].set_linetype("step");
        					break;

        				case "step":
        					this.BasicChart00.seriesset[i].set_linetype("curve");
        					break;

        				case "curve":
        					this.BasicChart00.seriesset[i].set_linetype("segment");
        					break;
        			}
        		}
        	}
        };

        var shape_pos = 0, same_shape = true;
        this.Div00_BtnPointShape_onclick = function(obj,e)
        {
        	shape_pos++;

        	var cnt = this.BasicChart00.seriesset.length;
        	if (same_shape && shape_pos >= 5 || !same_shape && shape_pos >= (6-cnt))
        	{
        		shape_pos = 0; same_shape = !same_shape;
        	}

        	var shapeset = ["circle", "square", "diamond", "triangle", "cross"];
        	var cnt = this.BasicChart00.seriesset.length;
        	for (var i=0;i<cnt;i++)
        	{
        		if (same_shape)
        		{
        			this.BasicChart00.seriesset[i].set_pointshape(shapeset[shape_pos]);
        		}
        		else
        		{
        			this.BasicChart00.seriesset[i].set_pointshape(shapeset[shape_pos + i]);
        		}
        	}

        };

        this.Div00_BtnPointType_onclick = function(obj,e)
        {
        	var cnt = this.BasicChart00.seriesset.length;
        	for (var i=0;i<cnt;i++)
        	{
        		this.BasicChart00.seriesset[i].set_barvisible(false);
        		this.BasicChart00.seriesset[i].set_linevisible(false);
        		this.BasicChart00.seriesset[i].set_lineareavisible(false);
        		this.BasicChart00.seriesset[i].set_pointvisible(true);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("Data_Negative.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
