(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Workcomm");
            this.set_titletext("업무공통");
            if (Form == this.constructor)
            {
                this._setFormPosition(1030,52);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btn17",null,"12","30","28","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_Help");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn18",null,"12","30","28","33",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_Print");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn19",null,"12","68","28","66",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_CrudSave");
            this.addChild(obj.name, obj);

            obj = new Button("btn15",null,"12","69","28","137",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("삭제");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_CrudDelete");
            this.addChild(obj.name, obj);

            obj = new Button("btn14",null,"12","67","28","209",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("추가");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_CrudAdd");
            this.addChild(obj.name, obj);

            obj = new Button("btn06_00","0","11","32","31",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Button("btn09","0","75","32","31",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_BookmarkS");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","25","4","547","44",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("영업>기준관리><fc v=\'#000000\'>제조공장별월목표</fc>");
            obj.set_cssclass("sta_WF_Location");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn14_00",null,"12","67","28","279",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("커스텀");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_Custom");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1030,52,this,function(p){});
            obj.set_mobileorientation("landscape");
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
        this.loadIncludeScript("Workcomm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
