(function()
{
    const fn = function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sub_form");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.Button("Button00","47","177","307","106",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("this.close");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","36","35","334","70",null,null,null,null,null,null,this);
            obj.set_font("36px/normal \"Malgun Gothic\"");
            obj.set_taborder("1");
            obj.set_text("nexacroK_mfe_sub3");
            this.addChild(obj.name, obj);

            obj = new nexacro.CheckBox("CheckBox00","420","188","319","80",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("CheckBox00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01","39","299","231","81",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("nexacro.setWheelZoom( objFrame, 80 );");
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
        this.registerScript("sub_form.xfdl", function(nexacro, system, trace, environment, application) {

        this.Button00_onclick = function(obj,e)
        {
        	this.close("sub_form close");
        };

        this.sub_form_onclose = function(obj,e)
        {

        };

        this.Button01_onclick = function(obj,e)
        {
        	var objFrame = this.getOwnerFrame();
        	nexacro.setWheelZoom( objFrame, 80 );
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.sub_form_onclose,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
        };

        this.loadIncludeScript("sub_form.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
    if (document.currentScript)
        document.currentScript.dispatchEvent(new CustomEvent("loadModule", { detail: fn }));

    return fn;
}
)();

//# sourceMappingURL=sub_form.xfdl.js.map
