(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("Form_Work");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,680);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00","25","73","257","91",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("A메뉴 이동");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","25","215","255","85",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("B메뉴 이동");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","25","490","255","85",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("C메뉴 이동");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",480,680,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmMenu.xfdl", function() {
        this.Form_Work_onload = function(obj,e)
        {
        	//var comp = nexacro.getApplication().mainframe.WorkFrame.form.getFirstAccessibilityComponent(true);
        	//trace("comp: " + comp + ", compId: " + comp.id);
        	//comp.setFocus();
        };


        this.Button00_onclick = function(obj,e)
        {
        	this.getOwnerFrame().form.divWork.url = "FrameBase::frmA.xfdl";
        };


        this.Button01_onclick = function(obj,e)
        {
        	this.getOwnerFrame().form.divWork.url = "FrameBase::frmB.xfdl";
        };


        this.Button02_onclick = function(obj,e)
        {
        	this.getOwnerFrame().form.divWork.url = "FrameBase::frmC.xfdl";
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Work_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
        };
        this.loadIncludeScript("frmMenu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
