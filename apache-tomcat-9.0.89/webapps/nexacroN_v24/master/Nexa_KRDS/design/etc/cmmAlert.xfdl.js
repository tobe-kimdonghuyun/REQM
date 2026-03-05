(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmAlert");
            this.set_titletext("madal");
            if (Form == this.constructor)
            {
                this._setFormPosition(560,340);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_Bg");
            obj.set_text("");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","40","71","26","26",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_POP_AlertTxt");
            obj.getSetter("onchanged").set("Common_onchanged");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","74","66",null,"36","136",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("타이틀");
            obj.set_cssclass("sta_WF_H4");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","40","118",null,"142","40",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("output");
            obj.set_value("대화 상자는 사용자에게 작업에 대해 알리고 중요한 정보를 포함하거나 결정이 필요하거나 여러 작업을 포함할 수 있습니다.");
            this.addChild(obj.name, obj);

            obj = new Button("Button01",null,null,"90","48","138","40",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00",null,null,"90","48","40","40",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"24","40","40","24",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_POP_Cancel");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",560,340,this,function(p){});
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
        this.loadIncludeScript("cmmAlert.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
