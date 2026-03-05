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
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","205","87","393","94",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Static00");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","200","227","442","136",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Static01");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","199","398","445","146",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Static02");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","191","643","556","165",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Static03");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","175","860","665","189",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Static04");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","174","1101","782","187",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Static05");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","182","1349","679","165",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Static06");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,720,this,function(p){});
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
        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
