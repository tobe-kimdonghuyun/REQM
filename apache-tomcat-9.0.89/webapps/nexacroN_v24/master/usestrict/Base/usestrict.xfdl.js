(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("usestrict");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btn00","137","247","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("usestrict.xfdl","Base::dummy.xjs");
        this.registerScript("usestrict.xfdl", function() {
        ////직접 화면에 코딩처리하면 동작은됨.

        this.executeIncludeScript("Base::dummy.xjs"); /*include "Base::dummy.xjs"*/;

        /*
         *	/
         */

        g_myGlobalVar = "I am Global";
        g_num = 0;

        this.usestrict_onload = function(obj,e)
        {
        	this.fnFormOnload();
        };

        this.btn00_onclick = function(obj,e)
        {
            g_myGlobalVar = "I am Global";
        	g_num = 1;
            trace("g_myGlobalVar: " + g_myGlobalVar);
        	trace("g_num: " + g_num);

            this.fn_a();
        };

        this.fn_a = function()
        {
            trace(">>" + g_myGlobalVar , g_num);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.usestrict_onload,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
        };
        this.loadIncludeScript("usestrict.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
