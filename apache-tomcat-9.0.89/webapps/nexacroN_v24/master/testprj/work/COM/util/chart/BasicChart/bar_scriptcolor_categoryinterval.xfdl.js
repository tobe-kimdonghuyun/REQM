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
                this._setFormPosition(768,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"data\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">1987 Q1</Col><Col id=\"name\">-0.1</Col></Row><Row><Col id=\"data\">1987 Q2</Col><Col id=\"name\">-1.6</Col></Row><Row><Col id=\"data\">1987 Q3</Col><Col id=\"name\">-1.8</Col></Row><Row><Col id=\"data\">1987 Q4</Col><Col id=\"name\">-3</Col></Row><Row><Col id=\"data\">1988 Q1</Col><Col id=\"name\">-3.3</Col></Row><Row><Col id=\"data\">1988 Q2</Col><Col id=\"name\">-3.3</Col></Row><Row><Col id=\"data\">1988 Q3</Col><Col id=\"name\">-3.3</Col></Row><Row><Col id=\"data\">1988 Q4</Col><Col id=\"name\">-5.1</Col></Row><Row><Col id=\"data\">1989 Q1</Col><Col id=\"name\">-4.2</Col></Row><Row><Col id=\"data\">1989 Q2</Col><Col id=\"name\">-4.6</Col></Row><Row><Col id=\"data\">1989 Q3</Col><Col id=\"name\">-4.9</Col></Row><Row><Col id=\"data\">1989 Q4</Col><Col id=\"name\">-3.8</Col></Row><Row><Col id=\"data\">1990 Q1</Col><Col id=\"name\">-4.3</Col></Row><Row><Col id=\"data\">1990 Q2</Col><Col id=\"name\">-4.1</Col></Row><Row><Col id=\"data\">1990 Q3</Col><Col id=\"name\">-2.4</Col></Row><Row><Col id=\"data\">1990 Q4</Col><Col id=\"name\">-2.5</Col></Row><Row><Col id=\"data\">1991 Q1</Col><Col id=\"name\">-1.8</Col></Row><Row><Col id=\"data\">1991 Q2</Col><Col id=\"name\">-1</Col></Row><Row><Col id=\"data\">1991 Q3</Col><Col id=\"name\">-1.5</Col></Row><Row><Col id=\"data\">1991 Q4</Col><Col id=\"name\">-1.1</Col></Row><Row><Col id=\"data\">1992 Q1</Col><Col id=\"name\">-1.3</Col></Row><Row><Col id=\"data\">1992 Q2</Col><Col id=\"name\">-1.7</Col></Row><Row><Col id=\"data\">1992 Q3</Col><Col id=\"name\">-1.9</Col></Row><Row><Col id=\"data\">1992 Q4</Col><Col id=\"name\">-1.6</Col></Row><Row><Col id=\"data\">1993 Q1</Col><Col id=\"name\">-1.3</Col></Row><Row><Col id=\"data\">1993 Q2</Col><Col id=\"name\">-1.8</Col></Row><Row><Col id=\"data\">1993 Q3</Col><Col id=\"name\">-1.3</Col></Row><Row><Col id=\"data\">1993 Q4</Col><Col id=\"name\">-1.2</Col></Row><Row><Col id=\"data\">1994 Q1</Col><Col id=\"name\">-0.5</Col></Row><Row><Col id=\"data\">1994 Q2</Col><Col id=\"name\">-0.9</Col></Row><Row><Col id=\"data\">1994 Q3</Col><Col id=\"name\">-0.2</Col></Row><Row><Col id=\"data\">1994 Q4</Col><Col id=\"name\">-0.3</Col></Row><Row><Col id=\"data\">1995 Q1</Col><Col id=\"name\">0.4</Col></Row><Row><Col id=\"data\">1995 Q2</Col><Col id=\"name\">-1.5</Col></Row><Row><Col id=\"data\">1995 Q3</Col><Col id=\"name\">-1.2</Col></Row><Row><Col id=\"data\">1995 Q4</Col><Col id=\"name\">-0.5</Col></Row><Row><Col id=\"data\">1996 Q1</Col><Col id=\"name\">-0.7</Col></Row><Row><Col id=\"data\">1996 Q2</Col><Col id=\"name\">-0.5</Col></Row><Row><Col id=\"data\">1996 Q3</Col><Col id=\"name\">-0.6</Col></Row><Row><Col id=\"data\">1996 Q4</Col><Col id=\"name\">-0.5</Col></Row><Row><Col id=\"data\">1997 Q1</Col><Col id=\"name\">-0.3</Col></Row><Row><Col id=\"data\">1997 Q2</Col><Col id=\"name\">-0.2</Col></Row><Row><Col id=\"data\">1997 Q3</Col><Col id=\"name\">0.7</Col></Row><Row><Col id=\"data\">1997 Q4</Col><Col id=\"name\">-1</Col></Row><Row><Col id=\"data\">1998 Q1</Col><Col id=\"name\">-1</Col></Row><Row><Col id=\"data\">1998 Q2</Col><Col id=\"name\">-1.3</Col></Row><Row><Col id=\"data\">1998 Q3</Col><Col id=\"name\">0.8</Col></Row><Row><Col id=\"data\">1998 Q4</Col><Col id=\"name\">-0.2</Col></Row><Row><Col id=\"data\">1999 Q1</Col><Col id=\"name\">-2.7</Col></Row><Row><Col id=\"data\">1999 Q2</Col><Col id=\"name\">-2.2</Col></Row><Row><Col id=\"data\">1999 Q3</Col><Col id=\"name\">-2.6</Col></Row><Row><Col id=\"data\">1999 Q4</Col><Col id=\"name\">-2.1</Col></Row><Row><Col id=\"data\">2000 Q1</Col><Col id=\"name\">-2.1</Col></Row><Row><Col id=\"data\">2000 Q2</Col><Col id=\"name\">-2.5</Col></Row><Row><Col id=\"data\">2000 Q3</Col><Col id=\"name\">-2.2</Col></Row><Row><Col id=\"data\">2000 Q4</Col><Col id=\"name\">-1.9</Col></Row><Row><Col id=\"data\">2001 Q1</Col><Col id=\"name\">-1.6</Col></Row><Row><Col id=\"data\">2001 Q2</Col><Col id=\"name\">-2.3</Col></Row><Row><Col id=\"data\">2001 Q3</Col><Col id=\"name\">-2.1</Col></Row><Row><Col id=\"data\">2001 Q4</Col><Col id=\"name\">-1.8</Col></Row><Row><Col id=\"data\">2002 Q1</Col><Col id=\"name\">-2</Col></Row><Row><Col id=\"data\">2002 Q2</Col><Col id=\"name\">-2.6</Col></Row><Row><Col id=\"data\">2002 Q3</Col><Col id=\"name\">-1.6</Col></Row><Row><Col id=\"data\">2002 Q4</Col><Col id=\"name\">-1.7</Col></Row><Row><Col id=\"data\">2003 Q1</Col><Col id=\"name\">-0.9</Col></Row><Row><Col id=\"data\">2003 Q2</Col><Col id=\"name\">-2</Col></Row><Row><Col id=\"data\">2003 Q3</Col><Col id=\"name\">-2.3</Col></Row><Row><Col id=\"data\">2003 Q4</Col><Col id=\"name\">-1.3</Col></Row><Row><Col id=\"data\">2004 Q1</Col><Col id=\"name\">-1.8</Col></Row><Row><Col id=\"data\">2004 Q2</Col><Col id=\"name\">-1.7</Col></Row><Row><Col id=\"data\">2004 Q3</Col><Col id=\"name\">-2.8</Col></Row><Row><Col id=\"data\">2004 Q4</Col><Col id=\"name\">-0.8</Col></Row><Row><Col id=\"data\">2005 Q1</Col><Col id=\"name\">-1.3</Col></Row><Row><Col id=\"data\">2005 Q2</Col><Col id=\"name\">-0.1</Col></Row><Row><Col id=\"data\">2005 Q3</Col><Col id=\"name\">-1.7</Col></Row><Row><Col id=\"data\">2005 Q4</Col><Col id=\"name\">-1.6</Col></Row><Row><Col id=\"data\">2006 Q1</Col><Col id=\"name\">-2.1</Col></Row><Row><Col id=\"data\">2006 Q2</Col><Col id=\"name\">-1.4</Col></Row><Row><Col id=\"data\">2006 Q3</Col><Col id=\"name\">-2.8</Col></Row><Row><Col id=\"data\">2007 Q1</Col><Col id=\"name\">-2.6</Col></Row><Row><Col id=\"data\">2007 Q2</Col><Col id=\"name\">-1.5</Col></Row><Row><Col id=\"data\">2007 Q3</Col><Col id=\"name\">-3.1</Col></Row><Row><Col id=\"data\">2007 Q4</Col><Col id=\"name\">-2.5</Col></Row><Row><Col id=\"data\">2008 Q1</Col><Col id=\"name\">-3.2</Col></Row><Row><Col id=\"data\">2008 Q2</Col><Col id=\"name\">-3.9</Col></Row><Row><Col id=\"data\">2008 Q3</Col><Col id=\"name\">-3.1</Col></Row><Row><Col id=\"data\">2008 Q4</Col><Col id=\"name\">-3.9</Col></Row><Row><Col id=\"data\">2009 Q1</Col><Col id=\"name\">-4.6</Col></Row><Row><Col id=\"data\">2009 Q2</Col><Col id=\"name\">-3.9</Col></Row><Row><Col id=\"data\">2009 Q3</Col><Col id=\"name\">-1.5</Col></Row><Row><Col id=\"data\">2009 Q4</Col><Col id=\"name\">-1.9</Col></Row><Row><Col id=\"data\">2010 Q1</Col><Col id=\"name\">-2.5</Col></Row><Row><Col id=\"data\">2010 Q2</Col><Col id=\"name\">-2.1</Col></Row><Row><Col id=\"data\">2010 Q3</Col><Col id=\"name\">-3.5</Col></Row><Row><Col id=\"data\">2010 Q4</Col><Col id=\"name\">-2.8</Col></Row><Row><Col id=\"data\">2011 Q1</Col><Col id=\"name\">-1</Col></Row><Row><Col id=\"data\">2011 Q2</Col><Col id=\"name\">-0.2</Col></Row><Row><Col id=\"data\">2011 Q3</Col><Col id=\"name\">-3</Col></Row><Row><Col id=\"data\">2011 Q4</Col><Col id=\"name\">-2.9</Col></Row><Row><Col id=\"data\">2012 Q1</Col><Col id=\"name\">-2.8</Col></Row><Row><Col id=\"data\">2012 Q2</Col><Col id=\"name\">-4.1</Col></Row><Row><Col id=\"data\">2012 Q3</Col><Col id=\"name\">-3.5</Col></Row><Row><Col id=\"data\">2012 Q4</Col><Col id=\"name\">-4.3</Col></Row><Row><Col id=\"data\">2013 Q1</Col><Col id=\"name\">-3.7</Col></Row><Row><Col id=\"data\">2013 Q2</Col><Col id=\"name\">-3.2</Col></Row><Row><Col id=\"data\">2013 Q3</Col><Col id=\"name\">-4.7</Col></Row><Row><Col id=\"data\">2013 Q4</Col><Col id=\"name\">-6</Col></Row><Row><Col id=\"data\">2014 Q1</Col><Col id=\"name\">-4.7</Col></Row><Row><Col id=\"data\">2014 Q2</Col><Col id=\"name\">-3.9</Col></Row><Row><Col id=\"data\">2014 Q3</Col><Col id=\"name\">-4.6</Col></Row><Row><Col id=\"data\">2014 Q4</Col><Col id=\"name\">-5.4</Col></Row><Row><Col id=\"data\">2015 Q1</Col><Col id=\"name\">-5.4</Col></Row><Row><Col id=\"data\">2015 Q2</Col><Col id=\"name\">-4.7</Col></Row><Row><Col id=\"data\">2015 Q3</Col><Col id=\"name\">-4.4</Col></Row><Row><Col id=\"data\">2015 Q4</Col><Col id=\"name\">-7</Col></Row><Row><Col id=\"data\">2016 Q1</Col><Col id=\"name\">-5.7</Col></Row><Row><Col id=\"data\">2016 Q2</Col><Col id=\"name\">-5.9</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new BasicChart("BasicChart00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.getSetter("taborder").set("0");
            obj.getSetter("binddataset").set("Dataset00");
            obj.getSetter("categorycolumn").set("bind:data");
            obj.getSetter("bargrouping").set("false");
            obj.getSetter("enableanimation").set("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",768,500,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("bar_scriptcolor_categoryinterval.xfdl", function() {

        this.ColumnAndLine_onload = function(obj,e)
        {
        	var colors = "";
        	var val;
        	for(var i=0;i<this.Dataset00.rowcount;i++) {
        		val = this.Dataset00.getColumn(i,"name");
        		if(i>0) colors += ",";
        		if(val > 0) colors += "#7CB5EC";
        		else colors += "#B03060";
        	}
        	this.BasicChart00.seriesset[0].set_barfillstyle(colors);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ColumnAndLine_onload,this);
        };
        this.loadIncludeScript("bar_scriptcolor_categoryinterval.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
