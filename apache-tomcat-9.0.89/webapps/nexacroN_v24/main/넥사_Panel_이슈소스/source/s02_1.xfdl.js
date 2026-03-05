(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("s02");
            this.set_titletext("높이 자동조절 - Panel");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,1654);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","147","59","150","150",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("visible : false");
            obj.set_background("darkorange");
            obj.set_font("normal 20px/normal \"Arial\"");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","170","100.00%","170",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_spacing("10px");
            obj.set_background("lightblue");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("center");
            obj.set_verticalgap("10");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","147","59","150","150",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("visible : false");
            obj.set_background("darkorange");
            obj.set_font("normal 20px/normal \"Arial\"");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","0","350","100.00%","170",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_spacing("10px");
            obj.set_background("lightblue");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("center");
            obj.set_verticalgap("10");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","575","20","150","150",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("visible : true");
            obj.set_background("darkorange");
            obj.set_font("normal 20px/normal \"Arial\"");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","630","100.00%","300",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_background("green");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","147","59","150","150",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("visible : false");
            obj.set_background("darkorange");
            obj.set_font("normal 20px/normal \"Arial\"");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","0","100%","280",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_spacing("10px");
            obj.set_background("lightblue");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("center");
            obj.set_verticalgap("10");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static00_00_00\"/></Contents>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","575","20","150","150",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("visible : false");
            obj.set_background("darkorange");
            obj.set_font("normal 20px/normal \"Arial\"");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div00_00","0","940","100.00%","300",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Div00");
            obj.set_background("green");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","147","59","150","150",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            obj.set_text("visible : false");
            obj.set_background("darkorange");
            obj.set_font("normal 20px/normal \"Arial\"");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","0","100.00%","280",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("1");
            obj.set_spacing("10px");
            obj.set_background("lightblue");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("center");
            obj.set_verticalgap("10");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static00_00_00\"/></Contents>");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","575","20","150","150",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("2");
            obj.set_text("visible : true");
            obj.set_background("darkorange");
            obj.set_font("normal 20px/normal \"Arial\"");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","0",null,"60","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Panel의 하위 자손이 <b v=\'true\'>단 한 개도 visible:true가 아니면</b> 높이조절을 못함");
            obj.set_font("20px/normal \"맑은 고딕\"");
            obj.set_color("#000000");
            obj.set_visible("true");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","655","20","150","150",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("visible : false");
            obj.set_background("darkorange");
            obj.set_font("normal 20px/normal \"Arial\"");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","110",null,"60","5",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("1. Panel만 있는 경우, spacing 간격만 남음 ↓");
            obj.set_font("20px/normal \"맑은 고딕\"");
            obj.set_color("#000000");
            obj.set_visible("true");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","0","570",null,"60","5",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("2. Div로 Panel을 감싼 경우, Panel의 높이 그대로 남음 ↓");
            obj.set_font("20px/normal \"맑은 고딕\"");
            obj.set_color("#000000");
            obj.set_visible("true");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            obj.set_type("vertical");
            obj.set_spacing("10px");
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00_00.form
            obj = new Layout("default","",0,0,this.Div00_00.form,function(p){});
            obj.set_type("vertical");
            obj.set_spacing("10px");
            this.Div00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,1654,this,function(p){});
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
        this.loadIncludeScript("s02_1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
