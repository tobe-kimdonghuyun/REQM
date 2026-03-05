(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Child");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(640,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","0","0","640","480",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("640x480");
            obj.set_background("magenta");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",640,480,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Child.xfdl", function() {

        this.Child_onload = function(obj,e)
        {
        	var	objFrame = this.getOwnerFrame() ;
        	objFrame.set_border("1px solid #00FF"); // set
        };

        this.Static00_onclick = function(obj,e)
        {
        	var	objFrame = this.getOwnerFrame() ;
        	var	strMsg = "H:"
        	strMsg += objFrame.getOffsetWidth() ;
        	strMsg += ", V:" ;
        	strMsg += objFrame.getOffsetHeight() ;
        	alert(strMsg);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Child_onload,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
        };
        this.loadIncludeScript("Child.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
