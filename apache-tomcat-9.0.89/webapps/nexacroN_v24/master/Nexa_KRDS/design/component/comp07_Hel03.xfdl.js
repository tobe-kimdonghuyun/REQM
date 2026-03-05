(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("hel03");
            this.set_titletext("도움_맥락적 도움말");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,1860);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staH2","0","0","220","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("맥락적 도움말");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("staDivider","staH2:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staEtit","staDivider:15","15","220","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Contextual help");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Static("staDescript","0","85",null,"100","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("컴포넌트 주변에 배치되어 해당 컴포넌트의 상태나 관련된 상세 정보를 제공하는 컴포넌트이다. 맥락적 도움말은 정보 아이콘이나 도움 아이콘 버튼을 통해 사용자가 요청하는 경우에만 화면에 표시된다.");
            obj.set_cssclass("sta_WF_Descript");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("Div01_00","0","staDescript:80","360","179",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div01");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","360",null,null,"11",null,null,null,null,this.Div01_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_Bg");
            obj.set_text("");
            obj.set_accessibilityenable("false");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static00_00","24",null,"22","12",null,"0",null,null,null,null,this.Div01_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_POP_DireDown");
            obj.set_accessibilityenable("false");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static01","24","24","118","26",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("2");
            obj.set_text("도움말 제목");
            obj.set_cssclass("sta_POP_Txt17B");
            obj.set_accessibilityrole("heading3");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static02","24","Static01:16",null,"51","24",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("3");
            obj.set_text("컴포넌트 주변에 배치되어 해당 컴포넌트의 상태나 관련된 상세 정보를 제공하는 컴포넌트이다.");
            obj.set_cssclass("sta_POP_Infor15R");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01","24","Static02:8","76","26",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("4");
            obj.set_text("바로가기");
            obj.set_cssclass("btn_WF_More");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button00",null,"24","26","26","24",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_Helpclose");
            obj.set_accessibilitylabel("닫기");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button01","23","Div01_00:11","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_HelpEx");
            obj.set_accessibilitylabel("도움말");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00","80","Div01_00:11","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_HelpQu");
            obj.set_accessibilitylabel("도움말");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","0","Button01:50","360","179",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div01");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","360",null,null,"11",null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_Bg");
            obj.set_text("");
            obj.set_accessibilityenable("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00","24",null,"22","12",null,"0",null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_POP_DireDown");
            obj.set_accessibilityenable("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","24","24","118","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("도움말 제목");
            obj.set_cssclass("sta_POP_Txt17B");
            obj.set_accessibilityrole("heading3");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02","24","Static01:16",null,"51","24",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("컴포넌트 주변에 배치되어 해당 컴포넌트의 상태나 관련된 상세 정보를 제공하는 컴포넌트이다.");
            obj.set_cssclass("sta_POP_Infor15R");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01","24","Static02:8","76","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("바로가기");
            obj.set_cssclass("btn_WF_More");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00",null,"24","26","26","24",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_Helpclose");
            obj.set_accessibilitylabel("닫기");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div01_01","0","Div01:30","360","179",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Div01");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","360",null,null,"11",null,null,null,null,this.Div01_01.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_Bg");
            obj.set_text("");
            obj.set_accessibilityenable("false");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Static("Static00_00","169",null,"22","12",null,"0",null,null,null,null,this.Div01_01.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_POP_DireDown");
            obj.set_accessibilityenable("false");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Static("Static01","24","24","118","26",null,null,null,null,null,null,this.Div01_01.form);
            obj.set_taborder("2");
            obj.set_text("도움말 제목");
            obj.set_cssclass("sta_POP_Txt17B");
            obj.set_accessibilityrole("heading3");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Static("Static02","24","Static01:16",null,"51","24",null,null,null,null,null,this.Div01_01.form);
            obj.set_taborder("3");
            obj.set_text("컴포넌트 주변에 배치되어 해당 컴포넌트의 상태나 관련된 상세 정보를 제공하는 컴포넌트이다.");
            obj.set_cssclass("sta_POP_Infor15R");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01","24","Static02:8","76","26",null,null,null,null,null,null,this.Div01_01.form);
            obj.set_taborder("4");
            obj.set_text("바로가기");
            obj.set_cssclass("btn_WF_More");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Button("Button00",null,"24","26","26","24",null,null,null,null,null,this.Div01_01.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_Helpclose");
            obj.set_accessibilitylabel("닫기");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Div("Div01_01_00","0","Div01_01:30","360","179",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Div01");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","360",null,null,"11",null,null,null,null,this.Div01_01_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_Bg");
            obj.set_text("");
            obj.set_accessibilityenable("false");
            this.Div01_01_00.addChild(obj.name, obj);

            obj = new Static("Static00_00",null,null,"22","12","24","0",null,null,null,null,this.Div01_01_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_POP_DireDown");
            obj.set_accessibilityenable("false");
            this.Div01_01_00.addChild(obj.name, obj);

            obj = new Static("Static01","24","24","118","26",null,null,null,null,null,null,this.Div01_01_00.form);
            obj.set_taborder("2");
            obj.set_text("도움말 제목");
            obj.set_cssclass("sta_POP_Txt17B");
            obj.set_accessibilityrole("heading3");
            this.Div01_01_00.addChild(obj.name, obj);

            obj = new Static("Static02","24","Static01:16",null,"51","24",null,null,null,null,null,this.Div01_01_00.form);
            obj.set_taborder("3");
            obj.set_text("컴포넌트 주변에 배치되어 해당 컴포넌트의 상태나 관련된 상세 정보를 제공하는 컴포넌트이다.");
            obj.set_cssclass("sta_POP_Infor15R");
            this.Div01_01_00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01","24","Static02:8","76","26",null,null,null,null,null,null,this.Div01_01_00.form);
            obj.set_taborder("4");
            obj.set_text("바로가기");
            obj.set_cssclass("btn_WF_More");
            this.Div01_01_00.addChild(obj.name, obj);

            obj = new Button("Button00",null,"24","26","26","24",null,null,null,null,null,this.Div01_01_00.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_Helpclose");
            obj.set_accessibilitylabel("닫기");
            this.Div01_01_00.addChild(obj.name, obj);

            obj = new Div("Div01_02","0","Div01_01_00:30","360","179",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Div01");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","11","360",null,null,"0",null,null,null,null,this.Div01_02.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_Bg");
            obj.set_text("");
            obj.set_accessibilityenable("false");
            this.Div01_02.addChild(obj.name, obj);

            obj = new Static("Static00_00","24","0","22","12",null,null,null,null,null,null,this.Div01_02.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_POP_DireUp");
            obj.set_accessibilityenable("false");
            this.Div01_02.addChild(obj.name, obj);

            obj = new Static("Static01","24","35","118","26",null,null,null,null,null,null,this.Div01_02.form);
            obj.set_taborder("2");
            obj.set_text("도움말 제목");
            obj.set_cssclass("sta_POP_Txt17B");
            obj.set_accessibilityrole("heading3");
            this.Div01_02.addChild(obj.name, obj);

            obj = new Static("Static02","24","Static01:16",null,"51","24",null,null,null,null,null,this.Div01_02.form);
            obj.set_taborder("3");
            obj.set_text("컴포넌트 주변에 배치되어 해당 컴포넌트의 상태나 관련된 상세 정보를 제공하는 컴포넌트이다.");
            obj.set_cssclass("sta_POP_Infor15R");
            this.Div01_02.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01","24","Static02:8","76","26",null,null,null,null,null,null,this.Div01_02.form);
            obj.set_taborder("4");
            obj.set_text("바로가기");
            obj.set_cssclass("btn_WF_More");
            this.Div01_02.addChild(obj.name, obj);

            obj = new Button("Button00",null,"35","26","26","24",null,null,null,null,null,this.Div01_02.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_Helpclose");
            obj.set_accessibilitylabel("닫기");
            this.Div01_02.addChild(obj.name, obj);

            obj = new Div("Div01_01_01","0","Div01_02:30","360","179",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Div01");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","11","360","168",null,null,null,null,null,null,this.Div01_01_01.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_Bg");
            obj.set_text("");
            obj.set_accessibilityenable("false");
            this.Div01_01_01.addChild(obj.name, obj);

            obj = new Static("Static00_00","169","0","22","12",null,null,null,null,null,null,this.Div01_01_01.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_POP_DireUp");
            obj.set_accessibilityenable("false");
            this.Div01_01_01.addChild(obj.name, obj);

            obj = new Static("Static01","24","35","118","26",null,null,null,null,null,null,this.Div01_01_01.form);
            obj.set_taborder("2");
            obj.set_text("도움말 제목");
            obj.set_cssclass("sta_POP_Txt17B");
            obj.set_accessibilityrole("heading3");
            this.Div01_01_01.addChild(obj.name, obj);

            obj = new Static("Static02","24","Static01:16",null,"51","24",null,null,null,null,null,this.Div01_01_01.form);
            obj.set_taborder("3");
            obj.set_text("컴포넌트 주변에 배치되어 해당 컴포넌트의 상태나 관련된 상세 정보를 제공하는 컴포넌트이다.");
            obj.set_cssclass("sta_POP_Infor15R");
            this.Div01_01_01.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01","24","Static02:8","76","26",null,null,null,null,null,null,this.Div01_01_01.form);
            obj.set_taborder("4");
            obj.set_text("바로가기");
            obj.set_cssclass("btn_WF_More");
            this.Div01_01_01.addChild(obj.name, obj);

            obj = new Button("Button00",null,"35","26","26","24",null,null,null,null,null,this.Div01_01_01.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_Helpclose");
            obj.set_accessibilitylabel("닫기");
            this.Div01_01_01.addChild(obj.name, obj);

            obj = new Div("Div01_01_00_00","0","Div01_01_01:30","360","179",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Div01");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","11","360",null,null,"0",null,null,null,null,this.Div01_01_00_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_Bg");
            obj.set_text("");
            obj.set_accessibilityenable("false");
            this.Div01_01_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00",null,"0","22","12","24",null,null,null,null,null,this.Div01_01_00_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_POP_DireUp");
            obj.set_accessibilityenable("false");
            this.Div01_01_00_00.addChild(obj.name, obj);

            obj = new Static("Static01","24","35","118","26",null,null,null,null,null,null,this.Div01_01_00_00.form);
            obj.set_taborder("2");
            obj.set_text("도움말 제목");
            obj.set_cssclass("sta_POP_Txt17B");
            obj.set_accessibilityrole("heading3");
            this.Div01_01_00_00.addChild(obj.name, obj);

            obj = new Static("Static02","24","Static01:16",null,"51","24",null,null,null,null,null,this.Div01_01_00_00.form);
            obj.set_taborder("3");
            obj.set_text("컴포넌트 주변에 배치되어 해당 컴포넌트의 상태나 관련된 상세 정보를 제공하는 컴포넌트이다.");
            obj.set_cssclass("sta_POP_Infor15R");
            this.Div01_01_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01","24","Static02:8","76","26",null,null,null,null,null,null,this.Div01_01_00_00.form);
            obj.set_taborder("4");
            obj.set_text("바로가기");
            obj.set_cssclass("btn_WF_More");
            this.Div01_01_00_00.addChild(obj.name, obj);

            obj = new Button("Button00",null,"35","26","26","24",null,null,null,null,null,this.Div01_01_00_00.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_Helpclose");
            obj.set_accessibilitylabel("닫기");
            this.Div01_01_00_00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div01_00.form
            obj = new Layout("default","",0,0,this.Div01_00.form,function(p){});
            this.Div01_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01_01.form
            obj = new Layout("default","",0,0,this.Div01_01.form,function(p){});
            this.Div01_01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01_01_00.form
            obj = new Layout("default","",0,0,this.Div01_01_00.form,function(p){});
            this.Div01_01_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01_02.form
            obj = new Layout("default","",0,0,this.Div01_02.form,function(p){});
            this.Div01_02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01_01_01.form
            obj = new Layout("default","",0,0,this.Div01_01_01.form,function(p){});
            this.Div01_01_01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01_01_00_00.form
            obj = new Layout("default","",0,0,this.Div01_01_00_00.form,function(p){});
            this.Div01_01_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,mobile_small",888,1860,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comp07_Hel03.xfdl", function() {

        this.hel03_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.hel03_onload,this);
            this.staEtit.addEventHandler("onclick",this.Div01_01_Static00_02_onclick,this);
        };
        this.loadIncludeScript("comp07_Hel03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
