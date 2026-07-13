(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("parent");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.Button("Button00","57","42","196","81",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("open");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01","293","38","189","86",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("popupframes");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("TextArea00","59","151","419","202",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_value("popupFrame 정보\n");
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
        this.registerScript("RP_80639_parent.xfdl", function(nexacro, system, trace, environment, application) {

        this.Button00_onclick = function(obj,e)
        {
        	nexacro.open("test", "Application::RP_80639_child1.xfdl", this.getOwnerFrame(), "", "", 100, 100, 500, 500, this);
        };

        this.Button01_onclick = function(obj,e)
        {
        	var txtOrg = this.TextArea00.value;
        	trace("check1");
        	var txtStr = "popupFrames 갯수 : " + nexacro.getPopupFrames().length + " \n";
        	trace("check2");
        	var objPopup = nexacro.getPopupFrames();
        	trace("check3");
        	trace(txtStr);
        	for(var i = 0; i < nexacro.getPopupFrames().length; i++)
        	{
        		txtStr += "popupID==> " + objPopup[i].id + "\n";
        	}
        	trace("check4");
        	txtStr += "****************************************** \n";
        	this.TextArea00.set_value(txtOrg + txtStr);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
        };

        this.loadIncludeScript("RP_80639_parent.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
