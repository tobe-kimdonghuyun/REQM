(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleCheckbox");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column0","type" : "STRING","size" : "256"}]},"Rows" : [{},{"Column0" : "1"},{"Column0" : ""}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset01", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column0","type" : "STRING","size" : "256"}]},"Rows" : [{},{"Column0" : "1"},{"Column0" : ""}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","37","28","203","102",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column0\" displaytype=\"checkboxcontrol\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","353","36","127","42",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("CheckBox00");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","37","255","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","34","322","203","102",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("Dataset01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column0\" displaytype=\"checkboxcontrol\" checkboxtruevalue=\"1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00","350","330","127","42",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("CheckBox00");
            obj.set_truevalue("1");
            obj.set_value("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","CheckBox00","value","Dataset00","Column0");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","CheckBox00_00","value","Dataset01","Column0");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("RP_102729_sampleCheckbox (1).xfdl", function() {
        var _uCheckBox;
        _uCheckBox=  nexacro.CheckBox.prototype ;
        _uCheckBox._changeValue = function (v)
        {
        	var use_truevalue = !nexacro._isNull(this._p_truevalue);
        	var use_falsevalue = !nexacro._isNull(this._p_falsevalue);

        	//if (nexacro._isNull(v))
        	if (nexacro._isNull(v) || v === "")
        	{
        		if (use_falsevalue)
        		{
        			return this._p_falsevalue;
        		}
        		else
        		{
        			return false;
        		}
        	}

        	if (!this._is_created)
        	{
        		if (use_truevalue && v === "true")
        		{
        			return this._p_truevalue;
        		}
        		else if (use_falsevalue && v === "false")
        		{
        			return this._p_falsevalue;
        		}
        	}

        	v = v.toString();
        	if (use_truevalue)
        	{
        		if (v === this._p_truevalue)
        		{
        			// priority one
        			return v;
        		}

        		if (use_falsevalue)
        		{
        			// truevalue, falsevalue both
        			if (v === this._p_falsevalue)
        			{
        				return v;
        			}
        			else
        			{
        				return this._p_value;
        			}
        		}
        		else
        		{
        			// truevalue only
        			if (parseInt(v) === 0)
        			{
        				return 0;
        			}
        			else if (!nexacro._toBoolean(v))
        			{
        				return false;
        			}
        			else
        			{
        				return this._p_value;
        			}
        		}
        	}
        	else
        	{
        		if (use_falsevalue)
        		{
        			// falsevalue only
        			if (v === this._p_falsevalue)
        			{
        				return v;
        			}
        			else if (parseInt(v) === 1)
        			{
        				return 1;
        			}
        			else if (nexacro._toBoolean(v))
        			{
        				return true;
        			}
        			else
        			{
        				return this._p_value;
        			}
        		}
        		else
        		{
        			// not use truevalue, falsevalue
        			if (parseInt(v) === 0)
        			{
        				return 0;
        			}
        			else if (parseInt(v) === 1)
        			{
        				return 1;
        			}
        			else
        			{
        				return nexacro._toBoolean(v);
        			}
        		}
        	}
        };
        _uCheckBox = null;
        this.Button00_onclick = function(obj,e)
        {
        	trace(this.Dataset00.saveXML());
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("RP_102729_sampleCheckbox (1).xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
