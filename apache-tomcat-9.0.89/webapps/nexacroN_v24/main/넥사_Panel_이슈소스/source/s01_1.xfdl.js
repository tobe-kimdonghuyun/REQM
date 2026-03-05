(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("s01_1");
            this.set_titletext("URL아이템 불러오기 1 [Div]");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,330);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00","0","0",null,"150","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_url("source::s01.xfdl");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","160",null,"60","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("<b v=\'true\'>[Div만] 있을 때,</b> URL로 s01.xfdl을 불러오면 <b v=\'true\'>높이 조절이 잘 됨</b>");
            obj.set_font("20px/normal \"맑은 고딕\"");
            obj.set_color("#000000");
            obj.set_visible("false");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,330,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","source::s01.xfdl");
        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("s01_1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
