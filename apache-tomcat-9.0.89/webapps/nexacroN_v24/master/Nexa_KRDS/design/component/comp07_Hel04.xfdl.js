(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("hel04");
            this.set_titletext("도움_코치 마크");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,1920);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staH2","0","0","155","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("코치 마크");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("staDivider","staH2:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staEtit","staDivider:15","0","164","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Coach mark");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","85",null,"100","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("코치마크는 사용자에게 새로 도입된 기능을 안내하거나, 여러 단계를 거쳐 수행해야 하는 복잡한 과업을 사용자가 보다 쉽게 완료할 수 있도록 세부 수행 단계별로 고맥락적 도움말을 제공하는 컴포넌트이다.");
            obj.set_cssclass("sta_WF_Descript");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("Div01_03","0","Static00:80","360","217",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div01");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","360",null,null,"10",null,null,null,null,this.Div01_03.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_CoachBg");
            obj.set_text("");
            obj.set_accessibilityenable("false");
            this.Div01_03.addChild(obj.name, obj);

            obj = new Static("Static00_00","24",null,"22","12",null,"0",null,null,null,null,this.Div01_03.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_POP_CoachDown");
            obj.set_accessibilityenable("false");
            this.Div01_03.addChild(obj.name, obj);

            obj = new Static("Static01","24","24","118","26",null,null,null,null,null,null,this.Div01_03.form);
            obj.set_taborder("2");
            obj.set_text("도움말 제목");
            obj.set_cssclass("sta_POP_Step15B");
            obj.set_accessibilityrole("heading3");
            this.Div01_03.addChild(obj.name, obj);

            obj = new Static("Static02","24","Static01:16",null,"51","24",null,null,null,null,null,this.Div01_03.form);
            obj.set_taborder("3");
            obj.set_text("코치마크의 제목과 지시 사항은 간결하고 명확하게 작성한다.");
            this.Div01_03.addChild(obj.name, obj);

            obj = new Static("Static02_00","24","142","50","40",null,null,null,null,null,null,this.Div01_03.form);
            obj.set_taborder("4");
            obj.set_text("<fc v=\"#0B50D0\">1</fc>/4");
            obj.set_usedecorate("true");
            this.Div01_03.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00",null,null,"64","40","206","35",null,null,null,null,this.Div01_03.form);
            obj.set_taborder("5");
            obj.set_text("그만보기");
            obj.set_cssclass("btn_POP_TxtSm");
            this.Div01_03.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00",null,null,"64","40","126","35",null,null,null,null,this.Div01_03.form);
            obj.set_taborder("6");
            obj.set_text("이전으로");
            obj.set_cssclass("btn_POP_TxtSm");
            this.Div01_03.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01",null,null,"86","40","24","35",null,null,null,null,this.Div01_03.form);
            obj.set_taborder("7");
            obj.set_text("다음으로");
            obj.set_cssclass("btn_POP_DefaultSm");
            this.Div01_03.addChild(obj.name, obj);

            obj = new Button("Button00",null,"24","26","26","24",null,null,null,null,null,this.Div01_03.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_Helpclose");
            obj.set_accessibilitylabel("닫기");
            this.Div01_03.addChild(obj.name, obj);

            obj = new Div("Div01_01_02","0","Div01_03:30","360","217",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div01");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","360",null,null,"10",null,null,null,null,this.Div01_01_02.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_CoachBg");
            obj.set_text("");
            obj.set_accessibilityenable("false");
            this.Div01_01_02.addChild(obj.name, obj);

            obj = new Static("Static00_00","169",null,"22","12",null,"0",null,null,null,null,this.Div01_01_02.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_POP_CoachDown");
            obj.set_accessibilityenable("false");
            this.Div01_01_02.addChild(obj.name, obj);

            obj = new Static("Static01","24","24","118","26",null,null,null,null,null,null,this.Div01_01_02.form);
            obj.set_taborder("2");
            obj.set_text("도움말 제목");
            obj.set_cssclass("sta_POP_Step15B");
            obj.set_accessibilityrole("heading3");
            this.Div01_01_02.addChild(obj.name, obj);

            obj = new Static("Static02","24","Static01:16",null,"51","24",null,null,null,null,null,this.Div01_01_02.form);
            obj.set_taborder("3");
            obj.set_text("코치마크의 제목과 지시 사항은 간결하고 명확하게 작성한다.");
            this.Div01_01_02.addChild(obj.name, obj);

            obj = new Static("Static02_00","24","142","50","40",null,null,null,null,null,null,this.Div01_01_02.form);
            obj.set_taborder("4");
            obj.set_text("<fc v=\"#0B50D0\">1</fc>/4");
            obj.set_usedecorate("true");
            this.Div01_01_02.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00",null,null,"64","40","206","35",null,null,null,null,this.Div01_01_02.form);
            obj.set_taborder("5");
            obj.set_text("그만보기");
            obj.set_cssclass("btn_POP_TxtSm");
            this.Div01_01_02.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00",null,null,"64","40","126","35",null,null,null,null,this.Div01_01_02.form);
            obj.set_taborder("6");
            obj.set_text("이전으로");
            obj.set_cssclass("btn_POP_TxtSm");
            this.Div01_01_02.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01",null,null,"86","40","24","35",null,null,null,null,this.Div01_01_02.form);
            obj.set_taborder("7");
            obj.set_text("다음으로");
            obj.set_cssclass("btn_POP_DefaultSm");
            this.Div01_01_02.addChild(obj.name, obj);

            obj = new Button("Button00",null,"24","26","26","24",null,null,null,null,null,this.Div01_01_02.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_Helpclose");
            obj.set_accessibilitylabel("닫기");
            this.Div01_01_02.addChild(obj.name, obj);

            obj = new Div("Div01_01_00_01","0","Div01_01_02:30","360","217",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Div01");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","360",null,null,"10",null,null,null,null,this.Div01_01_00_01.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_CoachBg");
            obj.set_text("");
            obj.set_accessibilityenable("false");
            this.Div01_01_00_01.addChild(obj.name, obj);

            obj = new Static("Static00_00",null,null,"22","12","24","0",null,null,null,null,this.Div01_01_00_01.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_POP_CoachDown");
            obj.set_accessibilityenable("false");
            this.Div01_01_00_01.addChild(obj.name, obj);

            obj = new Static("Static01","24","24","118","26",null,null,null,null,null,null,this.Div01_01_00_01.form);
            obj.set_taborder("2");
            obj.set_text("도움말 제목");
            obj.set_cssclass("sta_POP_Step15B");
            obj.set_accessibilityrole("heading3");
            this.Div01_01_00_01.addChild(obj.name, obj);

            obj = new Static("Static02","24","Static01:16",null,"51","24",null,null,null,null,null,this.Div01_01_00_01.form);
            obj.set_taborder("3");
            obj.set_text("코치마크의 제목과 지시 사항은 간결하고 명확하게 작성한다.");
            this.Div01_01_00_01.addChild(obj.name, obj);

            obj = new Static("Static02_00","24","142","50","40",null,null,null,null,null,null,this.Div01_01_00_01.form);
            obj.set_taborder("4");
            obj.set_text("<fc v=\"#0B50D0\">1</fc>/4");
            obj.set_usedecorate("true");
            this.Div01_01_00_01.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00",null,null,"64","40","206","35",null,null,null,null,this.Div01_01_00_01.form);
            obj.set_taborder("5");
            obj.set_text("그만보기");
            obj.set_cssclass("btn_POP_TxtSm");
            this.Div01_01_00_01.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00",null,null,"64","40","126","35",null,null,null,null,this.Div01_01_00_01.form);
            obj.set_taborder("6");
            obj.set_text("이전으로");
            obj.set_cssclass("btn_POP_TxtSm");
            this.Div01_01_00_01.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01",null,null,"86","40","24","35",null,null,null,null,this.Div01_01_00_01.form);
            obj.set_taborder("7");
            obj.set_text("다음으로");
            obj.set_cssclass("btn_POP_DefaultSm");
            this.Div01_01_00_01.addChild(obj.name, obj);

            obj = new Button("Button00",null,"24","26","26","24",null,null,null,null,null,this.Div01_01_00_01.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_Helpclose");
            obj.set_accessibilitylabel("닫기");
            this.Div01_01_00_01.addChild(obj.name, obj);

            obj = new Div("Div01_02_00","0","Div01_01_00_01:80","360","217",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div01");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","10","360",null,null,"0",null,null,null,null,this.Div01_02_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_CoachBg");
            obj.set_text("");
            obj.set_accessibilityenable("false");
            this.Div01_02_00.addChild(obj.name, obj);

            obj = new Static("Static00_00","24","0","22","12",null,null,null,null,null,null,this.Div01_02_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_POP_CoachUp");
            obj.set_accessibilityenable("false");
            this.Div01_02_00.addChild(obj.name, obj);

            obj = new Static("Static01","24","35","118","26",null,null,null,null,null,null,this.Div01_02_00.form);
            obj.set_taborder("2");
            obj.set_text("도움말 제목");
            obj.set_cssclass("sta_POP_Step15B");
            obj.set_accessibilityrole("heading3");
            this.Div01_02_00.addChild(obj.name, obj);

            obj = new Static("Static02","24","Static01:16","312","78","24",null,null,null,null,null,this.Div01_02_00.form);
            obj.set_taborder("3");
            obj.set_text("코치마크의 제목과 지시 사항은 간결하고 명확하게 작성한다.");
            this.Div01_02_00.addChild(obj.name, obj);

            obj = new Static("Static02_00","24","153","50","40",null,null,null,null,null,null,this.Div01_02_00.form);
            obj.set_taborder("4");
            obj.set_text("<fc v=\"#0B50D0\">1</fc>/4");
            obj.set_usedecorate("true");
            this.Div01_02_00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00",null,null,"64","40","206","24",null,null,null,null,this.Div01_02_00.form);
            obj.set_taborder("5");
            obj.set_text("그만보기");
            obj.set_cssclass("btn_POP_TxtSm");
            this.Div01_02_00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00",null,null,"64","40","126","24",null,null,null,null,this.Div01_02_00.form);
            obj.set_taborder("6");
            obj.set_text("이전으로");
            obj.set_cssclass("btn_POP_TxtSm");
            this.Div01_02_00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01",null,null,"86","40","24","24",null,null,null,null,this.Div01_02_00.form);
            obj.set_taborder("7");
            obj.set_text("다음으로");
            obj.set_cssclass("btn_POP_DefaultSm");
            this.Div01_02_00.addChild(obj.name, obj);

            obj = new Button("Button00",null,"35","26","26","24",null,null,null,null,null,this.Div01_02_00.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_Helpclose");
            obj.set_accessibilitylabel("닫기");
            this.Div01_02_00.addChild(obj.name, obj);

            obj = new Div("Div01_01_01_00","0","Div01_02_00:30","360","217",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Div01");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","10","360",null,null,"0",null,null,null,null,this.Div01_01_01_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_CoachBg");
            obj.set_text("");
            obj.set_accessibilityenable("false");
            this.Div01_01_01_00.addChild(obj.name, obj);

            obj = new Static("Static00_00","169","0","22","12",null,null,null,null,null,null,this.Div01_01_01_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_POP_CoachUp");
            obj.set_accessibilityenable("false");
            this.Div01_01_01_00.addChild(obj.name, obj);

            obj = new Static("Static01","24","35","118","26",null,null,null,null,null,null,this.Div01_01_01_00.form);
            obj.set_taborder("2");
            obj.set_text("도움말 제목");
            obj.set_cssclass("sta_POP_Step15B");
            obj.set_accessibilityrole("heading3");
            this.Div01_01_01_00.addChild(obj.name, obj);

            obj = new Static("Static02","24","Static01:16",null,"51","24",null,null,null,null,null,this.Div01_01_01_00.form);
            obj.set_taborder("3");
            obj.set_text("코치마크의 제목과 지시 사항은 간결하고 명확하게 작성한다.");
            this.Div01_01_01_00.addChild(obj.name, obj);

            obj = new Static("Static02_00","24","153","50","40",null,null,null,null,null,null,this.Div01_01_01_00.form);
            obj.set_taborder("4");
            obj.set_text("<fc v=\"#0B50D0\">1</fc>/4");
            obj.set_usedecorate("true");
            this.Div01_01_01_00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00",null,null,"64","40","206","24",null,null,null,null,this.Div01_01_01_00.form);
            obj.set_taborder("5");
            obj.set_text("그만보기");
            obj.set_cssclass("btn_POP_TxtSm");
            this.Div01_01_01_00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00",null,null,"64","40","126","24",null,null,null,null,this.Div01_01_01_00.form);
            obj.set_taborder("6");
            obj.set_text("이전으로");
            obj.set_cssclass("btn_POP_TxtSm");
            this.Div01_01_01_00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01",null,"153","86","40","24",null,null,null,null,null,this.Div01_01_01_00.form);
            obj.set_taborder("7");
            obj.set_text("다음으로");
            obj.set_cssclass("btn_POP_DefaultSm");
            this.Div01_01_01_00.addChild(obj.name, obj);

            obj = new Button("Button00",null,"35","26","26","24",null,null,null,null,null,this.Div01_01_01_00.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_Helpclose");
            obj.set_accessibilitylabel("닫기");
            this.Div01_01_01_00.addChild(obj.name, obj);

            obj = new Div("Div01_01_00_00_00","0","Div01_01_01_00:30","360","217",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Div01");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","10","360",null,null,"0",null,null,null,null,this.Div01_01_00_00_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_CoachBg");
            obj.set_text("");
            obj.set_accessibilityenable("false");
            this.Div01_01_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00",null,"0","22","12","24",null,null,null,null,null,this.Div01_01_00_00_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_POP_CoachUp");
            obj.set_accessibilityenable("false");
            this.Div01_01_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01","24","35","118","26",null,null,null,null,null,null,this.Div01_01_00_00_00.form);
            obj.set_taborder("2");
            obj.set_text("도움말 제목");
            obj.set_cssclass("sta_POP_Step15B");
            obj.set_accessibilityrole("heading3");
            this.Div01_01_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static02","24","Static01:16",null,"51","24",null,null,null,null,null,this.Div01_01_00_00_00.form);
            obj.set_taborder("3");
            obj.set_text("코치마크의 제목과 지시 사항은 간결하고 명확하게 작성한다.");
            this.Div01_01_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00","24","153","50","40",null,null,null,null,null,null,this.Div01_01_00_00_00.form);
            obj.set_taborder("4");
            obj.set_text("<fc v=\"#0B50D0\">1</fc>/4");
            obj.set_usedecorate("true");
            this.Div01_01_00_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00",null,null,"64","40","206","24",null,null,null,null,this.Div01_01_00_00_00.form);
            obj.set_taborder("5");
            obj.set_text("그만보기");
            obj.set_cssclass("btn_POP_TxtSm");
            this.Div01_01_00_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00",null,null,"64","40","126","24",null,null,null,null,this.Div01_01_00_00_00.form);
            obj.set_taborder("6");
            obj.set_text("이전으로");
            obj.set_cssclass("btn_POP_TxtSm");
            this.Div01_01_00_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01",null,"153","86","40","24",null,null,null,null,null,this.Div01_01_00_00_00.form);
            obj.set_taborder("7");
            obj.set_text("다음으로");
            obj.set_cssclass("btn_POP_DefaultSm");
            this.Div01_01_00_00_00.addChild(obj.name, obj);

            obj = new Button("Button00",null,"35","26","26","24",null,null,null,null,null,this.Div01_01_00_00_00.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_Helpclose");
            obj.set_accessibilitylabel("닫기");
            this.Div01_01_00_00_00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div01_03.form
            obj = new Layout("default","",0,0,this.Div01_03.form,function(p){});
            this.Div01_03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01_01_02.form
            obj = new Layout("default","",0,0,this.Div01_01_02.form,function(p){});
            this.Div01_01_02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01_01_00_01.form
            obj = new Layout("default","",0,0,this.Div01_01_00_01.form,function(p){});
            this.Div01_01_00_01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01_02_00.form
            obj = new Layout("default","",0,0,this.Div01_02_00.form,function(p){});
            this.Div01_02_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01_01_01_00.form
            obj = new Layout("default","",0,0,this.Div01_01_01_00.form,function(p){});
            this.Div01_01_01_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01_01_00_00_00.form
            obj = new Layout("default","",0,0,this.Div01_01_00_00_00.form,function(p){});
            this.Div01_01_00_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,mobile_small",888,1920,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comp07_Hel04.xfdl", function() {

        this.hel04_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.hel04_onload,this);
            this.staDivider.addEventHandler("onclick",this.Static01_onclick,this);
            this.staEtit.addEventHandler("onclick",this.Div01_01_Static00_02_onclick,this);
        };
        this.loadIncludeScript("comp07_Hel04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
