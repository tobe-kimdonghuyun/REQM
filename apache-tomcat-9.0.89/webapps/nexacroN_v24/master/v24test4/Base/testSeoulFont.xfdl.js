(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("testSeoulFont");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00_00_02_00","27.00","24","146","76",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("총괄 KR-L 환급");
            obj.set_font("normal 800 20px/normal \"Noto Sans KR\"");
            obj.set_color("#111111");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_02_00_00","217.00","20","146","76",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("총괄 KR-L 환급");
            obj.set_font("normal 800 20px/normal \"Noto Sans KR\"");
            obj.set_color("#111111");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_02_00_01","60","242","146","76",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("총괄 KR-L 환급");
            obj.set_font("normal 700 13px/normal \"Noto Sans KR\"");
            obj.set_color("#111111");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_02_00_00_00","224","142","146","76",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("총괄 KR-L 환급");
            obj.set_font("normal 800 13px/normal \"Noto Sans KR\"");
            obj.set_color("#000000");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","519","50","45","41",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Button00");
            obj.set_font("normal 10pt/normal \"Pretendard ExtraBold\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_02_00_01_00","40","134","146","76",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("총괄 KR-L 환급");
            obj.set_font("normal 700 13px/normal \"Noto Sans KR\"");
            obj.set_color("#000000");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_02_00_00_00_00","220","244","146","76",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("총괄 KR-L 환급");
            obj.set_font("normal 800 13px/normal \"Noto Sans KR\"");
            obj.set_color("#111111");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_02_00_01_01","61","390","146","76",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("총괄 KR-L 환급");
            obj.set_font("normal 700 13px/normal \"NotoSans\"");
            obj.set_color("#000000");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_02_00_01_01_00","67","504","146","76",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("총괄 KR-L 환급");
            obj.set_font("normal 700 20px/normal \"NotoSans\"");
            obj.set_color("#000000");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_02_00_01_01_00_00","64","610","146","76",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("총괄 KR-L 환급");
            obj.set_font("normal 700 20px/normal \"NotoSans5\"");
            obj.set_color("#000000");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
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
        this.loadIncludeScript("testSeoulFont.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
