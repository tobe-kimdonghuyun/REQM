(function()
{
    return function(nexacro, system, trace)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Menu_Work");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.Button("Button00","30","85","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("스타일 방식");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01","30","145","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Position 방식");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00_00","30.00","25","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("HOME");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01_00","30.00","205","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("XCSS Group 변경");
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
        this.registerScript("Menu_Work.xfdl", function(nexacro, system, trace) {

        this.Button00_00_onclick = function(obj,e)
        {
        	this.getOwnerFrame().getOwnerFrame().ChildFrame01.formurl = "FrameBase::Form_Work.xfdl";
        };

        this.Button00_onclick = function(obj,e)
        {
        	this.getOwnerFrame().getOwnerFrame().ChildFrame01.formurl = "FrameBase::Perf_Work.xfdl";
        };

        this.Button01_onclick = function(obj,e)
        {
        	this.getOwnerFrame().getOwnerFrame().ChildFrame01.formurl = "FrameBase::Perf_Work_JS.xfdl";
        };

        this.Button01_00_onclick = function(obj,e)
        {
        	var objApp = nexacro.getApplication();

        	if(objApp.xcssgroup == "")
        		objApp.xcssgroup = "Large";
        	else
        		objApp.xcssgroup = "";
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button00_00.addEventHandler("onclick",this.Button00_00_onclick,this);
            this.Button01_00.addEventHandler("onclick",this.Button01_00_onclick,this);
        };

        this.loadIncludeScript("Menu_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
