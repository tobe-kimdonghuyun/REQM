(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_Top");
            this.set_scrollbartype("none");
            this.set_border("5px solid yellow");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,70);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"UP_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MODULE_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","90","5","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","410","5","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1920,70,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_scrollbartype("none");
                p.set_border("5px solid yellow");

                p.Button00.set_taborder("0");
                p.Button00.set_text("Button00");
                p.Button00.move("90","5","120","50",null,null);

                p.Button00_00.set_taborder("1");
                p.Button00_00.set_text("Button00");
                p.Button00_00.move("410","5","120","50",null,null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","",480,60,this,
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
            this.addEventHandler("onload",this.Form_Top_onload,this);
        };
        this.loadIncludeScript("frm_Top_copy1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
