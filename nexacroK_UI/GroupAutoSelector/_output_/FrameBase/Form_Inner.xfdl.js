(function()
{
    return function(nexacro, system, trace)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Inner");
            this.set_titletext("New Form");
            this.getSetter("onrootcssclasschanged").set("Form_Inner_onrootcssclasschanged");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.Button("Button00","50","45","30em","65",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Inner Form 버튼  (em width 적용)");
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
        this.registerScript("Form_Inner.xfdl", function(nexacro, system, trace) {

        this.Form_Inner_onrootcssclasschange = function(obj,e)
        {
        	console.log('InnerForm :' + e.precssclass + '/' + e.postcssclass);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onrootcssclasschange",this.Form_Inner_onrootcssclasschange,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };

        this.loadIncludeScript("Form_Inner.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
