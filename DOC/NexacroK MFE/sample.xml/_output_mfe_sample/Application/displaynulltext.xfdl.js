(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("displaynulltext");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.Edit("Edit01","17.77%","24",null,"36","66.41%",null,null,null,null,null,this);
            obj.set_displaynulltext("testdisplaynull");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("Edit02","36.52%","24",null,"36","47.66%",null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00","19.14%","94",null,"56","63.28%",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("Edit00","0.59%","24",null,"36","83.59%",null,null,null,null,null,this);
            obj.set_taborder("0");
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
        this.registerScript("displaynulltext.xfdl", function(nexacro, system, trace, environment, application) {
        this.Edit01_onkillfocus = function(obj, e)
        {
        	this.Edit01.set_enable(false);
        }

        this.Edit02_onsetfocus = function(obj, e)
        {
        	//this.Edit01.set_enable(false);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ontimer",this.displaynulltext_ontimer,this);
            this.Edit01.addEventHandler("onkillfocus",this.Edit01_onkillfocus,this);
            this.Edit02.addEventHandler("onsetfocus",this.Edit02_onsetfocus,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };

        this.loadIncludeScript("displaynulltext.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
