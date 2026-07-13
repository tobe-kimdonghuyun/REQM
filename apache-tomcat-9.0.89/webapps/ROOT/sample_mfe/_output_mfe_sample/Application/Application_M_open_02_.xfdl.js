(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Application_M_open_02");
            this.set_titletext("Application_M_open_02");
            this.getSetter("classname").set("23688_ShowModal_02");
            this.getSetter("inheritanceid").set("");
            this.getSetter("position").set("absolute");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(310,156);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.Static("sta_popupdiv00","6","10","289","25",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_text("[Application_M_open_02]");
            obj.getSetter("transparenthittest").set("true");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00","88","100","120","42",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_text("close()");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("Edit00","15","51","281","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","",310,156,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Application_M_open_02_.xfdl", function(nexacro, system, trace, environment, application) {

        this.Button00_onclick = function(obj,  e)
        {
        	var obj = "return OK";

        	this.close(obj);
        	//this.close(this.Dataset00.saveXML());
        }

        this.ChildFrame_M_showModeless_46607_02_onload = function(obj, e)
        {
        	this.Edit00.set_value("{arg1:"+ this.parent.arg1 +", arg2:"+ this.parent.arg2 +", arg3:"+ this.parent.arg3 +"}");
        	//alert("aa");
        }

        this._onactivate = function(obj,e)
        {
        	trace("onactivate Event");
        };

        this._onsetfocus = function(obj,e)
        {
        	trace("onsetfocus Event");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onactivate",this._onactivate,this);
            this.addEventHandler("onload",this.ChildFrame_M_showModeless_46607_02_onload,this);
            this.addEventHandler("onsetfocus",this._onsetfocus,this);
            this.sta_popupdiv00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };

        this.loadIncludeScript("Application_M_open_02_.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
