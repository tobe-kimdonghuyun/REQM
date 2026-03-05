(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("maxlength_fl");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Edit("Edit00","227","98","443","78",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_maxlength("9");
            obj.set_font("18px/normal \"Meiryo\",\"Verdana\",\"Roboto\",\"Droid Sans\",\"游ゴシック\",\"YuGothic\",\"ヒラギノ角ゴ ProN W3\",\"Hiragino Kaku Gothic ProN\",\"ＭＳ Ｐゴシック\",\"MS Gothic\",\"sans-serif\"");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","227","210","443","78",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_font("18px/normal \"Meiryo\",\"Verdana\",\"Roboto\",\"Droid Sans\",\"游ゴシック\",\"YuGothic\",\"ヒラギノ角ゴ ProN W3\",\"Hiragino Kaku Gothic ProN\",\"ＭＳ Ｐゴシック\",\"MS Gothic\",\"sans-serif\"");
            obj.set_maxlength("15");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","19","105","187","70",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("maxlength=9");
            obj.set_font("18pt \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","19","214","187","70",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("maxlength=12");
            obj.set_font("18pt \"Arial\"");
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
        this.loadIncludeScript("RP_103741_maxlength_fl.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
