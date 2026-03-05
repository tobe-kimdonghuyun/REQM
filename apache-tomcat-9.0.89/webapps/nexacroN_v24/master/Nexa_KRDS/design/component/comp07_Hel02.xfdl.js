(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("hel02");
            this.set_titletext("도움_따라하기 패널");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,1400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_accodian", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "BODY_TITLE","type" : "STRING","size" : "256"},{"id" : "DETAIL_CON","type" : "STRING","size" : "256"}]},"Rows" : [{"BODY_TITLE" : "아코디언 타이틀 영역"},{"BODY_TITLE" : "아코디언 타이틀 영역"},{"BODY_TITLE" : "아코디언 타이틀 영역"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staH2","0","0","220","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("따라하기 패널");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("staDivider","staH2:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staEtit","staDivider:15","15","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Tutorial panel");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_02","0","85",null,"100","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("따라하기 패널은 본문 콘텐츠와 관련된 이용 방법을 실제 이용 절차에 따라 단계적으로 수행할 수 있도록 도와주며 코치마크를 실행하는 데 사용되는 사이드 패널이다.");
            obj.set_cssclass("sta_WF_Descript");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0","Static00_01_00_02:80","91","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("도움말");
            obj.set_cssclass("btn_WF_OpenHelp");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_00","0","Button00:40","390","960",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("div_WF_PoPpnl");
            obj.set_text("");
            obj.set_tabstop("false");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"40","106","40","40",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            obj.set_text("접어두기");
            obj.set_cssclass("btn_WF_Fold");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button01","40","Button00:0","60","40",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("1");
            obj.set_text("도움");
            obj.set_cssclass("btn_WF_TabLsmall");
            obj.set_accessibilityrole("tab");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button01_00","Button01:8","80","94","40",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("2");
            obj.set_text("따라하기");
            obj.set_cssclass("btn_WF_TabLsmallS");
            obj.set_enable("true");
            obj.set_accessibilityrole("tab");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Div("Div00","40","152","309","768",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_accessibilityenable("false");
            obj.set_tabstop("false");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","157","29",null,null,null,null,null,null,this.Div00_00.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("타이틀영역입니다.");
            obj.set_cssclass("sta_WF_Para19B");
            obj.set_accessibilityrole("heading3");
            this.Div00_00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","Static00:16","309","29",null,null,null,null,null,null,this.Div00_00.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("선택한 신청 내용을 단계별로 알려드립니다.");
            obj.set_cssclass("sta_WF_Para17RG");
            this.Div00_00.form.Div00.addChild(obj.name, obj);

            obj = new ListView("ListView00","0","130",null,"288","0",null,null,null,null,null,this.Div00_00.form.Div00.form);
            obj.set_taborder("2");
            obj.set_binddataset("ds_accodian");
            obj.set_cssclass("lstv_WF_Line");
            obj._setContents("<Formats><Format id=\"default\"><Band id=\"body\" width=\"100%\" height=\"58\" expandbarsize=\"24 24\" expandbartype=\"true\"><Cell id=\"Cell01\" left=\"0\" top=\"4\" text=\"bind:BODY_TITLE\" right=\"0\" bottom=\"4\"/></Band><Band id=\"detail\" width=\"100%\" height=\"140\"><Cell id=\"Cell03\" left=\"0\" top=\"0\" text=\"bind:DETAIL_CON\" right=\"0\" bottom=\"20\"/></Band></Format></Formats>");
            this.Div00_00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","0","442",null,"32","0",null,null,null,null,null,this.Div00_00.form.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Divider");
            this.Div00_00.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","0","Static02:0","140","48",null,null,null,null,null,null,this.Div00_00.form.Div00.form);
            obj.set_taborder("4");
            obj.set_text("그만 따라하기");
            obj.set_cssclass("btn_WF_Custom");
            this.Div00_00.form.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00_00.form.Div00.form
            obj = new Layout("default","",0,0,this.Div00_00.form.Div00.form,function(p){});
            this.Div00_00.form.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00_00.form
            obj = new Layout("default","",0,0,this.Div00_00.form,function(p){});
            this.Div00_00.form.addLayout(obj.name, obj);

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
        this.registerScript("comp07_Hel02.xfdl", function() {

        this.hel02_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.hel02_onload,this);
            this.staEtit.addEventHandler("onclick",this.Div01_01_Static00_02_onclick,this);
        };
        this.loadIncludeScript("comp07_Hel02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
