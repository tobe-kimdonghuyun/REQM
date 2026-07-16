(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("Form_Work");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.Edit("Edit00","58","53","260","78",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_value("11111111111");
            obj.set_text("11111111111");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00","64","234",null,"72","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01","58","325","1002","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","Desktop_screen,mobile,medium,large,desktop",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Work.xfdl", function(nexacro, system, trace, environment, application) {

        this.Button00_onclick = function(obj,e)
        {

        	//alert(window._log);
        	//window._log = "";
        };

        this.Button01_onclick = function(obj,e)
        {

        };

        this.trlog = function(obj,e)
        {
        	if (e.eventid !="onmousemove" && e.eventid !="ontouchmove")
        		window._log += "\n" + obj.name  + " :"+ e.eventid +"\n";
        };

        this.div00_onmousewheel = function(obj,e)
        {

        	return true;
        };

        this.Form_Work_onload = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Work_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button00.addEventHandler("onlbuttondown",this.trlog,this);
            this.Button00.addEventHandler("onlbuttonup",this.trlog,this);
            this.Button00.addEventHandler("onsetfocus",this.trlog,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
        };

        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
