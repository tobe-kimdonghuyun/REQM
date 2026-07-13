(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Left");
            this.set_titletext("Form_Left");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(200,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.Static("sta00","20","40","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Form_Left");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00","13","141","174","47",null,null,null,null,null,null,this);
            obj.set_navtarget("TargetFrameSet");
            obj.set_navtargetproperties("{\"showtitlebar\":\"false\"}");
            obj.set_navurl("sample_nav::navform.xfdl");
            obj.set_taborder("1");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn01","12","207","174","44",null,null,null,null,null,null,this);
            obj.set_navtarget("TargetFrameSet");
            obj.set_navurl("sample_nav::navform1.xfdl");
            obj.set_taborder("2");
            obj.set_text("btn01");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","mobile,medium,large,desktop",200,670,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("Form_Left");

                p.sta00.set_taborder("0");
                p.sta00.set_text("Form_Left");
                p.sta00.move("20","40","120","60",null,null);

                p.btn00.set_navtarget("TargetFrameSet");
                p.btn00.set_navtargetproperties("{\"showtitlebar\":\"false\"}");
                p.btn00.set_navurl("sample_nav::navform.xfdl");
                p.btn00.set_taborder("1");
                p.btn00.set_text("btn00");
                p.btn00.move("13","141","174","47",null,null);

                p.btn01.set_navtarget("TargetFrameSet");
                p.btn01.set_navurl("sample_nav::navform1.xfdl");
                p.btn01.set_taborder("2");
                p.btn01.set_text("btn01");
                p.btn01.move("12","207","174","44",null,null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new nexacro.Layout("screen01","",200,1280,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("Form_Left.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
