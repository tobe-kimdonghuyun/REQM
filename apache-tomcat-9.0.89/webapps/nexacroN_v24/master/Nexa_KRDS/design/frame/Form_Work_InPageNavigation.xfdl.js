(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work_InPageNavigation");
            this.set_titletext("콘테츠내 탐색");
            if (Form == this.constructor)
            {
                this._setFormPosition(160,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","0","0","160","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("이 페이지의 구성");
            obj.set_cssclass("sta_WF_PnavCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","24","160","26",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("페이지 제목");
            obj.set_cssclass("sta_WF_PnavTit");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","66","160","31",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("페이지 제목");
            obj.set_cssclass("sta_WF_PnavTitSm");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_04","0","276","160","31",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("contents title");
            obj.set_cssclass("btn_WF_Pnav");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0","323","160","48",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("버튼");
            obj.set_cssclass("btn_WF_Crud01");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","379","165","23",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("부가적인 설명을 표시합니다");
            obj.set_cssclass("sta_WF_PnavDescrp");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","0","101","160","31",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("contents title");
            obj.set_cssclass("btn_WF_Pnav");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00","0","136","160","31",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("contents title");
            obj.set_cssclass("btn_WF_Pnav");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_01","0","171","160","31",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("contents title");
            obj.set_cssclass("btn_WF_Pnav");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_02","0","206","160","31",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("contents title");
            obj.set_cssclass("btn_WF_Pnav");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_03","0","241","160","31",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("contents title");
            obj.set_cssclass("btn_WF_Pnav");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",160,720,this,function(p){});
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
        this.loadIncludeScript("Form_Work_InPageNavigation.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
