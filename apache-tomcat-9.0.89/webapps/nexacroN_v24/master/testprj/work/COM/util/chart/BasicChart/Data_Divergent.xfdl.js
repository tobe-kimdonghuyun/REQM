(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Data_Divergent");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(768,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSurvey", this);
            obj._setContents("<ColumnInfo><Column id=\"category\" type=\"STRING\" size=\"256\"/><Column id=\"Protect\" type=\"INT\" size=\"256\"/><Column id=\"Embrace\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"category\">France</Col><Col id=\"Protect\">-54</Col><Col id=\"Embrace\">46</Col></Row><Row><Col id=\"category\">Germany</Col><Col id=\"Protect\">-54</Col><Col id=\"Embrace\">46</Col></Row><Row><Col id=\"category\">Italy</Col><Col id=\"Protect\">-50</Col><Col id=\"Embrace\">50</Col></Row><Row><Col id=\"category\">Poland</Col><Col id=\"Protect\">-55</Col><Col id=\"Embrace\">45</Col></Row><Row><Col id=\"category\">Spain</Col><Col id=\"Protect\">-30</Col><Col id=\"Embrace\">70</Col></Row><Row><Col id=\"category\">UK</Col><Col id=\"Protect\">-41</Col><Col id=\"Embrace\">59</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new BasicChart("BasicChart00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.getSetter("taborder").set("1");
            obj.getSetter("binddataset").set("dsSurvey");
            obj.getSetter("categorycolumn").set("bind:category");
            obj.getSetter("rotateaxis").set("true");
            obj.getSetter("bargrouping").set("false");
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
        this.registerScript("Data_Divergent.xfdl", function() {

        this.Div00_BtnBarType_onclick = function(obj,e)
        {
        	var rows = this.dsSurvey.getRowCount();
        	for (var i=0;i<rows;i++)
        	{
        		var val = this.dsSurvey.getColumn(i, "Protect");
        		if (val < 0)
        		{
        			this.dsSurvey.setColumn(i, "Protect", -val);
        		}
        	}

        	this.BasicChart00.set_bargrouping(true);
        	this.BasicChart00.valueaxes[0].set_boardlinevisible(false);
        };

        this.Div00_BtnDivergent_onclick = function(obj,e)
        {
        	var rows = this.dsSurvey.getRowCount();
        	for (var i=0;i<rows;i++)
        	{
        		var val = this.dsSurvey.getColumn(i, "Protect");
        		if (val > 0)
        		{
        			this.dsSurvey.setColumn(i, "Protect", -val);
        		}
        	}

        	this.BasicChart00.set_bargrouping(false);
        	this.BasicChart00.valueaxes[0].set_boardlinevisible(true);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("Data_Divergent.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
