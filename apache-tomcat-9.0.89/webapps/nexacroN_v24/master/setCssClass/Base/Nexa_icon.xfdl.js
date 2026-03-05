(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Nexa_icon");
            this.set_titletext("Nexa_icon");
            if (Form == this.constructor)
            {
                this._setFormPosition(760,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("CssClass_Sample","117","130","86","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("TEST");
            obj.set_cssclass("BookMark_Test_nexaIcon");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","20","65","143","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("NexaIcon_css 적용");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","200","65","163","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Background_CSS 적용");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","20","246","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("CssClass 동적 변경");
            obj.set_font("bold 18px/normal \"Pretendard\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","220","246","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("CssClass 정상 적용 예시");
            obj.set_font("bold 18px/normal \"Pretendard\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_01","160","270","134","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Background_CSS");
            obj.set_cssclass("Background_CSS");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01","20","270","136","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("NexaIcon_css");
            obj.set_cssclass("NexaIcon_css");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","248","139","156","64",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",760,670,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Nexa_icon.xfdl", function() {

        this.Button00_00_onclick = function(obj,e)
        {
        	this.CssClass_Sample.set_cssclass("NexaIcon_css");
        };

        this.Button00_00_00_onclick = function(obj,e)
        {
        	this.CssClass_Sample.set_cssclass("Background_CSS");
        };
        this.Button00_onclick = function(obj,e)
        {
        	this.reload();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00_00.addEventHandler("onclick",this.Button00_00_onclick,this);
            this.Button00_00_00.addEventHandler("onclick",this.Button00_00_00_onclick,this);
            this.Button00_00_00_01.addEventHandler("onclick",this.Button00_00_00_01_onclick,this);
            this.Button00_00_01.addEventHandler("onclick",this.Button00_00_01_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("Nexa_icon.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
