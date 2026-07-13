(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("showmodal_popup");
            this.set_titletext("Display popup by showmodal");
            this.getSetter("classname").set("popup_test2");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(300,300);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.Button("Button00","91","223","92","32",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("close");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static07","17","13","268","35",null,null,null,null,null,null,this);
            obj.set_cssclass("sta_WF_subtitP");
            obj.set_taborder("1");
            obj.set_text("   This popup receives paremeter from parent");
            obj.set_verticalAlign("top");
            obj.getSetter("wordwrap").set("english");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","5.67%","66",null,"25","5%",null,null,null,null,null,this);
            obj.set_cssclass("sta_WF_subtitP");
            obj.set_taborder("2");
            obj.set_text("   Received \"123\" from parent");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("Edit00","5.67%","110",null,"41","5%",null,null,null,null,null,this);
            obj.set_readonly("true");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","",300,300,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("np_Form_Showmodal_Popup1.xfdl", function(nexacro, system, trace, environment, application) {

        this.showmodal_popup_onload = function(obj,e)
        {
        	this.Edit00.set_value(this.parent.pv_arg);
        };

        this.Button00_onclick = function(obj,e)
        {
        	var v = "Callback Parameter, while closing ";
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.showmodal_popup_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };

        this.loadIncludeScript("np_Form_Showmodal_Popup1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
