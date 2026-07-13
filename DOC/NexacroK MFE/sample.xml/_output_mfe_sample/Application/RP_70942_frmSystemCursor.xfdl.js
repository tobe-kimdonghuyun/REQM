(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmSystemCursor");
            this.set_titletext("New Form");
            this.getSetter("classname").set("frmSystemCursor");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.TextArea("TextArea00","20","50","500","200",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static01","30","0","500","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("system.getCursorX / system.getCursorY Test");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00","550","50","100","200",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("getCursor");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","",1024,768,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("RP_70942_frmSystemCursor.xfdl", function(nexacro, system, trace, environment, application) {
        var cnt = 0;

        this.Button00_onclick = function(obj,  e)
        {

        	cnt++;

        	var tempStr1 = "・current mouse cursor x : " + system.getCursorX();
        	var tempStr2 = "・current mouse cursor Y : " + system.getCursorY();

        	var tempStrAll = tempStr1 + "\n" + tempStr2
        					+ "\n\n" + "browser : " + system.navigatorname
        					+ "\n\n" + "Button Click Count : " + 	cnt
        	this.TextArea00.set_value(tempStrAll);
        }

        this.Form_onmousemove = function(obj,e)
        {
        	cnt++;

        	var tempStr1 = "・current mouse cursor x : " + system.getCursorX();
        	var tempStr2 = "・current mouse cursor Y : " + system.getCursorY();

        	var tempStrAll = tempStr1 + "\n" + tempStr2
        					+ "\n\n" + "browser : " + system.navigatorname
        					+ "\n\n" + "Button Click Count : " + 	cnt
        	this.TextArea00.set_value(tempStrAll);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onmousemove",this.Form_onmousemove,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };

        this.loadIncludeScript("RP_70942_frmSystemCursor.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
