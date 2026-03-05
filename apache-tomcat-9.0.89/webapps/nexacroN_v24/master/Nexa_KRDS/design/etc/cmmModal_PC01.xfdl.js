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
                this._setFormPosition(760,648);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","40","56",null,"36","40",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("타이틀");
            obj.set_cssclass("sta_WF_H4");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","40","108",null,null,"24","104",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_formscrolltype("vertical");
            obj.set_formscrollbartype("none auto");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","0","0","664","160",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_image("url(\'theme::NexaKRDS/images/img_dummyimg.png\')");
            this.Div00.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","0","ImageViewer00:16","664","356",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("output");
            obj.set_value("대화 상자는 사용자에게 작업에 대해 알리고 중요한 정보를 포함하거나 결정이 필요하거나 여러 작업을 포함할 수 있습니다. 대화 상자는 사용자에게 작업에 대해 알리고 중요한 정보를 포함하거나 결정이 필요하거나 여러 작업을 포함할 수 있습니다. 대화 상자는 사용자에게 작업에 대해 알리고 중요한 정보를 포함하거나 결정이 필요하거나 여러 작업을 포함할 수 있습니다. 대화 상자는 사용자에게 작업에 대해 알리고 중요한 정보를 포함하거나 결정이 필요하거나 여러 작업을 포함할 수 있습니다. 대화 상자는 사용자에게 작업에 대해 알리고 중요한 정보를 포함하거나 결정이 필요하거나 여러 작업을 포함할 수 있습니다. 대화 상자는 사용자에게 작업에 대해 알리고 중요한 정보를 포함하거나 결정이 필요하거나 여러 작업을 포함할 수 있습니다. 대화 상자는 사용자에게 작업에 대해 알리고 중요한 정보를 포함하거나 결정이 필요하거나 여러 작업을 포함할 수 있습니다. 에게 작업에 대해 알리고 중요한 정보를 포함하거나 결정이 필요하거나 여러 작업을 포함할 수 있습니다.");
            this.Div00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","40",null,"254","40",null,"40",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("오늘 하루 보지 않기");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button01",null,null,"90","48","40","40",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"24","40","40","24",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_POP_Cancel");
            obj.set_enable("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",760,648,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmModal_PC01.xfdl", function() {

        this.Static02_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("cmmModal_PC01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
