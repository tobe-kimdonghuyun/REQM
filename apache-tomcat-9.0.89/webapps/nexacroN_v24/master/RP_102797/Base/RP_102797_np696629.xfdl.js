(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("np696629");
            this.set_titletext("롯데멤버스");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00","30","30","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","170","25","790","60",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("- 신규 제휴단위 생성 후 \'제휴가맹점 관리\' TAB에서 해당 제휴단위 대표가맹점 검색 > \' 현금성  엘포인트 소득공제 처리\' 항목 입력  해주세요");
            obj.set_fittocontents("width");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,570,this,function(p){});
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
        this.loadIncludeScript("RP_102797_np696629.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
