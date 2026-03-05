(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Popup_Sub");
            this.set_titletext("New Form");
            this.getSetter("classname").set("Popup_Sub");
            if (Form == this.constructor)
            {
                this._setFormPosition(620,640);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00","21.4%","66",null,"56","34.6%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("close11111111");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","142","210","178","60",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("RP_104435_Popup_Sub.xfdl", function() {

        this.Button00_onclick = function(obj,  e)
        {
        // 	var pheight = this.parent.parent.parent.height;
        // 	var pWidth = this.parent.parent.parent.width;
        // 	this.parent.set_height(pheight);
        // 	this.parent.set_width(pWidth);
        // 	this.parent.init("Popup1"
        //                 , 0, 0, pWidth, pheight, null, null
        //                 , "Base::Popup_Sub.xfdl");
        	this.close('a');
        }

        this.Button01_onclick = function(obj,e)
        {

        	this.reload();

        	alert(this.opener);
        };

        this.Popup_Sub_onload = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onactivate",this.Popup_Sub_onactivate,this);
            this.addEventHandler("onload",this.Popup_Sub_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
        };
        this.loadIncludeScript("RP_104435_Popup_Sub.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
