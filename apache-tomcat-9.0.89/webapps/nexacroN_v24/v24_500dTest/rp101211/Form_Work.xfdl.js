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
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divTop","0","0",null,"80","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_url("FrameBase::topFrame.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","300",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("divWork");
            obj.set_url("FrameBase::workFrame.xfdl");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTop
            obj = new Layout("default","",0,0,this.divTop.form,function(p){});
            this.divTop.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","FrameBase::topFrame.xfdl");
            this._addPreloadList("fdl","FrameBase::workFrame.xfdl");
        };
        
        // User Script
        this.registerScript("Form_Work.xfdl", function() {

        this.Div00_onsetfocus = function(obj,e)
        {
        	this.divTop.set_height(80);
        	this.divTop.form.divMenu.set_visible(false);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.addEventHandler("onsetfocus",this.Div00_onsetfocus,this);
        };
        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
