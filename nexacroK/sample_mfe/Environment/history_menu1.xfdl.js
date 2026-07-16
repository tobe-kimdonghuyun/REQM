(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("history");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.Static("sta00","16","17","358","33",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("history - menu1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt00","17","50","253","41",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("history_menu1.xfdl", function(nexacro, system, trace, environment, application) {

        this.history_onfetchstatedata = function(obj,e)
        {
            let data = {"url": this.parent.url, "edit00_value" : this.edt00.value};

            nexacro.History.setCurrentStateData("menu1", data);

        	trace("onfetchstatedata:  "+ obj.parent.id + "   " +obj._url);
        	//return false;
        };

        this.history_onrestorestatedata = function(obj,e)
        {
        	let data = nexacro.History.getCurrentStateData("menu1");
        	if (data)
        		this.edt00.value = data.edit00_value;

        	this.sta00.text = this.parent.userdata;
        	trace("onrestorestatedata:  "+ obj.parent.id + "   " +obj._url);
        	//return false;
        };

        this.history_onload = function(obj,e)
        {
            trace("history_onload : menu1");
            let data = nexacro.History.getCurrentStateData("menu1");
        	if (data)
        		this.edt00.value = data.edit00_value;

        	this.sta00.text = this.parent.userdata;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onfetchstatedata",this.history_onfetchstatedata,this);
            this.addEventHandler("onload",this.history_onload,this);
            this.addEventHandler("onrestorestatedata",this.history_onrestorestatedata,this);
        };

        this.loadIncludeScript("history_menu1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
