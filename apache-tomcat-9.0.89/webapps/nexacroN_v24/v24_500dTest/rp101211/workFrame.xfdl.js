(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("workFrame");
            this.set_titletext("Form_Work");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00","28","23","212","55",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("!!! Work영역 버튼 !!!");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","251","25","144","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Static00");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","28","101","227","59",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","280","104","272","58",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("← displaynullText 없음");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","26","177","227","59",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_displaynulltext("널텍스트");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","278","180","272","58",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("← displaynullText 있음");
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
        this.registerScript("workFrame.xfdl", function() {

        this.Button_onclick = function(obj,e)
        {
        	this.divMenu.set_visible(true);
        };

        this.divMenu_onkillfocus = function(obj,e)
        {
        	this.divMenu.set_visible(false);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("workFrame.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
