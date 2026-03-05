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
                this._setFormPosition(720,118);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_Alert");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","16","16","300","26",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("메시지 타이틀");
            obj.set_cssclass("sta_POP_AlertTxt");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","48","Static01:8","656","52",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("output");
            obj.set_value("콘텐츠 내 알럿은 최대 2줄 이내로 작성합니다  콘텐츠 내 알럿은 최대 2줄 이내로 작성합니다  콘텐츠 내 알럿은 최대 2줄 이내로 작성합니다");
            obj.set_scrolltype("none");
            obj.set_scrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","0","182",null,"58","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_POP_Alert");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","16","198","26","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_POP_AlertTxt");
            obj.getSetter("onchanged").set("Common_onchanged");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea02","48","198","656","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("output");
            obj.set_value("메시지 내용 최대 1줄");
            obj.set_scrolltype("none");
            obj.set_scrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","0","289",null,null,"0","-289",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_POP_Warn");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","16","305","300","26",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("메시지 타이틀");
            obj.set_cssclass("sta_POP_WarnTxt");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea03","48","339","656","52",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("output");
            obj.set_value("콘텐츠 내 알럿은 최대 2줄 이내로 작성합니다  콘텐츠 내 알럿은 최대 2줄 이내로 작성합니다  콘텐츠 내 알럿은 최대 2줄 이내로 작성합니다");
            obj.set_scrolltype("none");
            obj.set_scrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00","0","432",null,null,"0","-432",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_POP_Succ");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","16","448","300","26",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("메시지 타이틀");
            obj.set_cssclass("sta_POP_SuccTxt");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea04","48","482","656","52",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("output");
            obj.set_value("콘텐츠 내 알럿은 최대 2줄 이내로 작성합니다  콘텐츠 내 알럿은 최대 2줄 이내로 작성합니다  콘텐츠 내 알럿은 최대 2줄 이내로 작성합니다");
            obj.set_scrolltype("none");
            obj.set_scrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00","0","578",null,null,"0","-578",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_POP_Infor");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","16","594","300","26",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("메시지 타이틀");
            obj.set_cssclass("sta_POP_InforTxt");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea05","48","628","656","52",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("output");
            obj.set_value("콘텐츠 내 알럿은 최대 2줄 이내로 작성합니다  콘텐츠 내 알럿은 최대 2줄 이내로 작성합니다  콘텐츠 내 알럿은 최대 2줄 이내로 작성합니다");
            obj.set_scrolltype("none");
            obj.set_scrollbartype("none none");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",720,118,this,function(p){});
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
            this.TextArea02.addEventHandler("onchanged",this.Common_onchanged,this);
        };
        this.loadIncludeScript("cmmToast.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
