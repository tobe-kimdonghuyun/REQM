(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("heading");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","34.00","42","538","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("1. 보이지 않는 버튼이 heading일 때");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","34.00","97","713","103",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_accessibilityenable("false");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Button("btnHeading","34","60","0","0",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Button00");
            obj.set_accessibilityrole("heading");
            obj.set_accessibilitylabel("해딩입니다.");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","34.00","31","661","49",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("두번째 버튼입니다.");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","34.00","200","538","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("2. 보이는 버튼이 heading일 때");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_00","34.00","243","713","157",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_accessibilityenable("false");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","34.00","18","265","38",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            obj.set_text("헤딩버튼");
            obj.set_accessibilitylabel("헤딩입니다.");
            obj.set_accessibilityrole("heading");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button01","34.00","76","615","68",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("1");
            obj.set_text("일반 버튼");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","24.00","430","538","60",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("3. static이 heading일 때");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_00_00","34.00","469","713","223",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_accessibilityenable("false");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","34.00","24","253","60",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("스테틱 헤딩");
            obj.set_accessibilityrole("heading");
            obj.set_accessibilitylabel("헤딩입니다.");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Button("Button00","34.00","126","337","56",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("일반 버튼");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","34.00","697","538","60",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("4. static이 heading일 때 다음 컴포넌트가 static이라면");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_00_00_00","34.00","737","713","223",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div00");
            obj.set_accessibilityenable("false");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","34.00","27","112","94",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("스테틱 헤딩12");
            obj.set_accessibilityrole("heading");
            obj.set_accessibilitylabel("헤딩입니다.");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01","234.00","31","224","91",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("일반 스테틱");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Button("Button00","34.00","114","372","79",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("2");
            obj.set_text("일반 버튼");
            this.Div00_00_00_00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00_00.form
            obj = new Layout("default","",0,0,this.Div00_00.form,function(p){});
            this.Div00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00_00_00.form
            obj = new Layout("default","",0,0,this.Div00_00_00.form,function(p){});
            this.Div00_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00_00_00_00.form
            obj = new Layout("default","",0,0,this.Div00_00_00_00.form,function(p){});
            this.Div00_00_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_horizontalgap("0");
            obj.set_mobileorientation("landscape");
            obj.set_spacing("0px");
            obj.set_tabletemplate("1* / 1*");
            obj.set_verticalgap("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("RP_100182_heading2.xfdl", function() {

        this.heading_onload = function(obj,e)
        {
        	this.Grid02.nodatatext = "스크립트로 nodatatext 셋팅";
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.heading_onload,this);
        };
        this.loadIncludeScript("RP_100182_heading2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
