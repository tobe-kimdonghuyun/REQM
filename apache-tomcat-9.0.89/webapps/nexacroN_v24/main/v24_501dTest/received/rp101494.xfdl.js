(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("Form_Work");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,1090);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00","71","45","839","72",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("방향키로 이동 시 Div의 마지막 컴포넌트가 accessibility=false인 경우 한 번 더 방향키를 눌러야 다음 컴포넌트로 이동함.");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","77","193","994","97",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_accessibilityenable("false");
            obj.set_background("aliceblue");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0",null,"40","49",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_ConTitle");
            obj.set_usedecorate("true");
            obj.set_text("제목제목제목제목");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","0","90",null,"1","49",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_ConLine");
            obj.set_accessibilityenable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","77","327","994","82",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_accessibilityenable("false");
            obj.set_background("aliceblue");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0",null,"40","90",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_ConTitle");
            obj.set_usedecorate("true");
            obj.set_text("제목제목제목제목");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","237","0","205","78",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("접근성false");
            obj.set_accessibilityenable("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","513","0","279","72",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("접근성 true");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div01_00","77","462","994","102",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_accessibilityenable("false");
            obj.set_background("aliceblue");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0",null,"40","90",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_ConTitle");
            obj.set_usedecorate("true");
            obj.set_text("제목제목제목제목");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static03","0","60",null,"1","90",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_ConLine");
            obj.set_accessibilityenable("false");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button00","26","72","158","20",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("2");
            obj.set_text("Button00");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Div("Div01_00_00","67","622","994","122",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_accessibilityenable("false");
            obj.set_background("aliceblue");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0",null,"40","90",null,null,null,null,null,this.Div01_00_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_ConTitle");
            obj.set_usedecorate("true");
            obj.set_text("제목제목제목제목");
            this.Div01_00_00.addChild(obj.name, obj);

            obj = new Static("Static03","0","60",null,"30","90",null,null,null,null,null,this.Div01_00_00.form);
            obj.set_taborder("1");
            obj.set_accessibilityenable("false");
            obj.set_text("접근성 false");
            this.Div01_00_00.addChild(obj.name, obj);

            obj = new Button("Button01","68","801","223","49",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","71","872","217","39",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("접근성 false");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","72","938","272","46",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Button02");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01_00.form
            obj = new Layout("default","",0,0,this.Div01_00.form,function(p){});
            this.Div01_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01_00_00.form
            obj = new Layout("default","",0,0,this.Div01_00_00.form,function(p){});
            this.Div01_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1300,1090,this,function(p){});
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
            this.addEventHandler("onload",this.Form_Work_onload,this);
            this.Div00.form.staTitle.addEventHandler("onclick",this.staTitle_onclick,this);
            this.Div01.form.staTitle.addEventHandler("onclick",this.staTitle_onclick,this);
            this.Div01_00.form.staTitle.addEventHandler("onclick",this.staTitle_onclick,this);
            this.Div01_00_00.form.staTitle.addEventHandler("onclick",this.staTitle_onclick,this);
        };
        this.loadIncludeScript("rp101494.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
