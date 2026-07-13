(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("nexacro_open_20180202");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.Button("Button00","30","61","237","59",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("nexacro.open openframe = null");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01","191","240","319","106",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("popup 확인");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button02","302","63","245","61",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Button02");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("RP_78258_nexacro_open_20180202.xfdl", function(nexacro, system, trace, environment, application) {
        this.Button00_onclick = function(obj,e)
        {
        	//nexacro.ope
        	nexacro.open("popup999999"
        	, "Environment::popupForm1.xfdl"
        	, nexacro.getApplication().mainframe.getOwnerFrame()
        	, ""
        	, "resizable=true"
        	, 0
        	, 0)
        };

        this.Button01_onclick = function(obj,e)
        {
        		alert("length " + nexacro.getPopupFrames().length);
        		trace(nexacro.getPopupFrames()[0].name);
        };

        this.Button02_onclick = function(obj,e)
        {
        	nexacro.open("popup999"
        	, "Environment::popupForm1.xfdl"
        	, this.getOwnerFrame()
        	, ""
        	, "resizable=true"
        	, 0
        	, 0)
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
        };

        this.loadIncludeScript("RP_78258_nexacro_open_20180202.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
