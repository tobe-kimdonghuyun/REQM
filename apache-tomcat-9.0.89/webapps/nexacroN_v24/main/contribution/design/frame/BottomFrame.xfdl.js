(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BottomFrame");
            this.set_titletext("Bottom");
            this.set_cssclass("frm_WF_Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1070,36);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","20","0",null,"1","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_BF_Line");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","23","7",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("데이터가 처리되었습니다.");
            obj.set_cssclass("sta_BT_Default");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","23","57","1067","29",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("에러메세지입니다.");
            obj.set_cssclass("sta_BF_Error");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","23","97","1067","29",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("경고메세지입니다.");
            obj.set_cssclass("sta_BF_Warning");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","23","137","1067","29",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("정보메세지입니다.");
            obj.set_cssclass("sta_BF_Info");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1070,36,this,function(p){});
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
        this.loadIncludeScript("BottomFrame.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
