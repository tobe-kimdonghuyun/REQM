(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("lay12");
            this.set_titletext("레이아웃 및 표현_스플레시 스크린");
            this.set_cssclass("btn_WF_Txt");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,1130);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_accodian", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "BODY_TITLE","type" : "STRING","size" : "256"},{"id" : "DETAIL_CON","type" : "STRING","size" : "256"}]},"Rows" : [{"BODY_TITLE" : "아코디언 타이틀 영역"},{"BODY_TITLE" : "아코디언 타이틀 영역"},{"BODY_TITLE" : "아코디언 타이틀 영역"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grid", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "content01","type" : "STRING","size" : "256"},{"id" : "content02","type" : "STRING","size" : "256"},{"id" : "context","type" : "STRING","size" : "256"}]},"Rows" : [{"content01" : "내용","content02" : "내용","context" : "표는 데이터를 하나 이상의 행과 열로 조직화하여 표현하는 형식으로 사용자가 빠르게 많은 양의 정보를 확인하고 비교할 수 있도록 도와준다."},{"content01" : "내용","content02" : "내용","context" : "표는 데이터를 하나 이상의 행과 열로 조직화하여 표현하는 형식으로 사용자가 빠르게 많은 양의 정보를 확인하고 비교할 수 있도록 도와준다."}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gridSample", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "BodyTitle","type" : "STRING","size" : "256"},{"id" : "DetailText","type" : "STRING","size" : "256"}]},"Rows" : [{"BodyTitle" : "기본형 아코디언","DetailText" : "내용"},{"BodyTitle" : "기본형 아코디언","DetailText" : "내용"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staH2","0","0","260","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("스플레시 스크린");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("staDivider","staH2:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staEtit","staDivider:15","0","179","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Splash screen");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","85",null,"100","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("스플래시 스크린은 응용 프로그램이 실행되기 전에 사용자에게 짧은 시간 동안 제공되는 화면으로 모바일 애플리케이션 전용 컴포넌트이다.");
            obj.set_cssclass("sta_WF_Descript");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","Static00_01_00:80","360","768",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_SPLASH_Bg");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","80","Static00_01_00:370","200","48",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_SPLASH_Logo");
            obj.set_accessibilitylabel("대한민국정부");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","70","Static01:7","220","26",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_SPLASH_Txt");
            obj.set_text("더 나은 내일을 함께합니다.");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("ProgressBar00","80","Static01_00:242","200","4",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("ProgressBar00");
            obj.set_smooth("true");
            obj.set_min("0");
            obj.set_max("100");
            obj.set_pos("50");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","80","Static01_00:254","174","23",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("잠시만 기다려 주세요.");
            obj.set_cssclass("sta_POP_Txt15R");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","mobile_small,Desktop_screen",888,1130,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comp03_lay12.xfdl", function() {

        this.lay12_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.lay12_onload,this);
            this.staEtit.addEventHandler("onclick",this.Div01_01_Static00_02_onclick,this);
        };
        this.loadIncludeScript("comp03_lay12.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
