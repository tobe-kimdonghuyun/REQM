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
                this._setFormPosition(480,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new FileDialog("FileDialog00", this);
            obj.getSetter("onclose").set("FileDialog00_onclose");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","73","75","314","90",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("파일찾기");
            obj.set_background("pink");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","53","194","378","212",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Phone_screen,Desktop_screen",480,768,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("RP_101411_Form_Work.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.FileDialog00.open( "FileOpen", FileDialog.MULTILOAD );
        };

        this.FileDialog00_onclose = function(obj,e)
        {
        	this.TextArea00.value = e.virtualfiles.length;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("RP_101411_Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
