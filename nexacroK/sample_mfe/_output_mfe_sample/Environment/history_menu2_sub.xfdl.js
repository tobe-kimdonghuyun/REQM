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
            obj = new nexacro.Static("sta00","22","7","228","66",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("history - menu2 - sub");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt00","20","62","225","45",null,null,null,null,null,null,this);
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
        this.registerScript("history_menu2_sub.xfdl", function(nexacro, system, trace, environment, application) {

        this.history_onfetchstatedata = function(obj,e)
        {
        	trace("onfetchstatedata:  "+ obj.parent.id + "   " +obj._url);

        	return false;
        };

        this.history_onrestorestatedata = function(obj,e)
        {
        	trace("onrestorestatedata:  "+ obj.parent.id + "   " +obj._url);
        };

        this.history_onload = function(obj,e)
        {
            trace("history_onload : menu2_sub");
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

        this.loadIncludeScript("history_menu2_sub.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
