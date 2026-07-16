(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("nexacroapi");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.Button("Button00","24","25","192","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("nexacro.getProjectPath()");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01","25","103","163","49",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button02","32","177","172","52",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("nexacro.base64Encode");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button03","30","234","172","52",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("nexacro.base64Decode");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("Edit00","225","184","245","33",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("Edit01","226","246","238","29",null,null,null,null,null,null,this);
            obj.set_taborder("5");
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
        this.registerScript("nexacroapi.xfdl", function(nexacro, system, trace, environment, application) {

        this.Button00_onclick = function(obj,e)
        {
        	alert(nexacro.getProjectPath());
        };

        this.Button02_onclick = function(obj,e)
        {
         var st = new Date();
        for (var i = 0; i < 100000; i++)
        {
        var a = "가나다라abdced가나다라abcd각";
        var enc = nexacro.base64Encode(a);
        //trace(enc);
        //trace(nexacro.base64Decode(enc));
        nexacro.base64Decode(enc)
        }
        var et = new Date();
        trace(et-st);
        };


        this.Button03_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
            this.Edit00.addEventHandler("onchanged",this.Edit00_onchanged,this);
        };

        this.loadIncludeScript("nexacroapi.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
