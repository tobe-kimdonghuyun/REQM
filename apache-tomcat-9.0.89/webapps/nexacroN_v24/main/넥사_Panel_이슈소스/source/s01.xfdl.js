(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("s01");
            this.set_titletext("URL아이템");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,330);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","147","59","150","150",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("BOX");
            obj.set_background("darkorange");
            obj.set_font("normal 20px/normal \"Arial\"");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_09","110","110","150","150",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("BOX");
            obj.set_background("darkorange");
            obj.set_font("normal 20px/normal \"Arial\"");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_08","100","100","150","150",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("BOX");
            obj.set_background("darkorange");
            obj.set_font("normal 20px/normal \"Arial\"");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","20","150","150",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("BOX");
            obj.set_background("darkorange");
            obj.set_font("normal 20px/normal \"Arial\"");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","40","40","150","150",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("BOX");
            obj.set_background("darkorange");
            obj.set_font("normal 20px/normal \"Arial\"");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","30","30","150","150",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("BOX");
            obj.set_background("darkorange");
            obj.set_font("normal 20px/normal \"Arial\"");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03","50","50","150","150",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("BOX");
            obj.set_background("darkorange");
            obj.set_font("normal 20px/normal \"Arial\"");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_06","80","80","150","150",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("BOX");
            obj.set_background("darkorange");
            obj.set_font("normal 20px/normal \"Arial\"");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04","60","60","150","150",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("BOX");
            obj.set_background("darkorange");
            obj.set_font("normal 20px/normal \"Arial\"");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_05","70","70","150","150",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("BOX");
            obj.set_background("darkorange");
            obj.set_font("normal 20px/normal \"Arial\"");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_07","90","90","150","150",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("BOX");
            obj.set_background("darkorange");
            obj.set_font("normal 20px/normal \"Arial\"");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","0","100.00%","330",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_spacing("10px");
            obj.set_background("lightblue");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("center");
            obj.set_verticalgap("10");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static00_09\"/><PanelItem id=\"PanelItem03\" componentid=\"Static00_08\"/><PanelItem id=\"PanelItem11\" componentid=\"Static00_00\"/><PanelItem id=\"PanelItem09\" componentid=\"Static00_02\"/><PanelItem id=\"PanelItem10\" componentid=\"Static00_01\"/><PanelItem id=\"PanelItem08\" componentid=\"Static00_03\"/><PanelItem id=\"PanelItem05\" componentid=\"Static00_06\"/><PanelItem id=\"PanelItem07\" componentid=\"Static00_04\"/><PanelItem id=\"PanelItem06\" componentid=\"Static00_05\"/><PanelItem id=\"PanelItem04\" componentid=\"Static00_07\"/></Contents>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,330,this,function(p){});
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
        this.loadIncludeScript("s01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
