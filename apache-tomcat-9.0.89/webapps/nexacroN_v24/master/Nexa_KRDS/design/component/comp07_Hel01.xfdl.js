(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("hel01");
            this.set_titletext("도움_도움 패널");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,1400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staH2","0","0","150","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("도움 패널");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("staDivider","staH2:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staEtit","staDivider:15","0","139","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Help panel");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","85",null,"100","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("도움 패널은 본문 콘텐츠의 섹션이나 일부 요소에 대한 개념/용어 설명, 옵션의 구성, 이용 방법 등과 관련된 정보나 도움말 콘텐츠를 제공하는 사이드 패널이다.");
            obj.set_cssclass("sta_WF_Descript");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0","Static00:80","91","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("도움말");
            obj.set_cssclass("btn_WF_OpenHelp");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","Button00:40","390","960",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("div_WF_PoPpnl");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"40","106","40","40",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("접어두기");
            obj.set_cssclass("btn_WF_Fold");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01","40","Button00:0","60","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("도움");
            obj.set_cssclass("btn_WF_TabLsmallS");
            obj.set_accessibilityrole("tab");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01_00","Button01:8","80","94","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("따라하기");
            obj.set_cssclass("btn_WF_TabLsmall");
            obj.set_enable("true");
            obj.set_accessibilityrole("tab");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div00","40","152","309","768",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","157","29",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("타이틀영역입니다.");
            obj.set_cssclass("sta_WF_Para19B");
            obj.set_accessibilityrole("heading3");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","Static00:16","309","29",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("선택한 신청 내용을 단계별로 알려드립니다.");
            obj.set_cssclass("sta_WF_Para17RG");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","0","Static00_00:16","176","23",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("관련 서비스 바로가기");
            obj.set_cssclass("btn_WF_More");
            obj.set_accessibilityrole("link");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00","0","Button00:12","176","23",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("3");
            obj.set_text("관련 서비스 바로가기");
            obj.set_cssclass("btn_WF_More");
            obj.set_accessibilityrole("link");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","0","442",null,"32","0",null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Divider");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","Static02:0","254","35",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("5");
            obj.set_text("관련 서비스/민원");
            obj.set_cssclass("sta_WF_Subtit15B");
            obj.set_accessibilityrole("heading4");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01","0","Static01:16","176","23",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("6");
            obj.set_text("관련 서비스 바로가기");
            obj.set_cssclass("btn_WF_More");
            obj.set_accessibilityrole("link");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_02","0","Button00_01:12","176","23",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("7");
            obj.set_text("관련 서비스 바로가기");
            obj.set_cssclass("btn_WF_More");
            obj.set_accessibilityrole("link");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_03","0","Button00_02:12","176","23",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("8");
            obj.set_text("관련 서비스 바로가기");
            obj.set_cssclass("btn_WF_More");
            obj.set_accessibilityrole("link");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","Button00_03:32","254","35",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("9");
            obj.set_text("기타 문의/도움말");
            obj.set_cssclass("sta_WF_Subtit15B");
            obj.set_accessibilityrole("heading4");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_04","0","Static01_00:16","106","23",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("10");
            obj.set_text("바로가기");
            obj.set_cssclass("btn_WF_More");
            obj.set_accessibilityrole("link");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_05","0","Button00_04:12","106","23",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("11");
            obj.set_text("바로가기");
            obj.set_cssclass("btn_WF_More");
            obj.set_accessibilityrole("link");
            this.Div00.form.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form.Div00.form,function(p){});
            this.Div00.form.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,mobile_small",888,1400,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comp07_Hel01.xfdl", function() {

        this.hel01_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.hel01_onload,this);
            this.staEtit.addEventHandler("onclick",this.Div01_01_Static00_02_onclick,this);
        };
        this.loadIncludeScript("comp07_Hel01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
