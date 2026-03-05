(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("src05");
            this.set_titletext("탐색_콘텐츠 내 탐색");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staH2","0","0","233","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("콘텐츠 내 탐색");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("staDivider","staH2:16","19","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staEtit","staDivider:16","0","231","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("In-page navigation");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","85",null,"126","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("콘텐츠 내 탐색은 사용자가 본문의 구조를 훑어보고 원하는 콘텐츠로 빠르게 이동할 수 있도록 하는 탐색 수단이다. 화면을 스크롤 할 때 특정 위치에 고정되어 콘텐츠의 목차 역할을 하는 동시에 사용자가 페이지 내 탐색에서 특정 항목을 클릭하면 연결된 섹션으로 스크롤 된다.");
            obj.set_cssclass("sta_WF_Descript");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","Static00_01:80","168","402",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","3","0","160","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("이 페이지의 구성");
            obj.set_cssclass("sta_WF_PnavCap");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","3","24","160","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("페이지 제목");
            obj.set_cssclass("sta_WF_PnavTit");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01_05","3","Static03:16","160","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("contents title");
            obj.set_cssclass("btn_WF_PnavS");
            obj.set_accessibilityrole("link");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01","3","101","160","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("contents title");
            obj.set_cssclass("btn_WF_Pnav");
            obj.set_accessibilityrole("link");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01_00","3","136","160","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("contents title");
            obj.set_cssclass("btn_WF_Pnav");
            obj.set_accessibilityrole("link");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01_01","3","171","160","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("contents title");
            obj.set_cssclass("btn_WF_Pnav");
            obj.set_accessibilityrole("link");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01_02","3","206","160","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("contents title");
            obj.set_cssclass("btn_WF_Pnav");
            obj.set_accessibilityrole("link");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01_03","3","241","160","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("contents title");
            obj.set_cssclass("btn_WF_Pnav");
            obj.set_accessibilityrole("link");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01_04","3","276","160","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("contents title");
            obj.set_cssclass("btn_WF_Pnav");
            obj.set_accessibilityrole("link");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","3","323","160","48",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("버튼");
            obj.set_cssclass("btn_WF_Crud01");
            obj.set_accessibilityrole("link");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","0","379","165","23",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("부가적인 설명을 표시합니다");
            obj.set_cssclass("sta_WF_PnavDescrp");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,mobile_small",888,900,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comp02_src05.xfdl", function() {

        this.src05_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.src05_onload,this);
            this.Div00.form.Static02.addEventHandler("onclick",this.Div00_Static02_onclick,this);
        };
        this.loadIncludeScript("comp02_src05.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
