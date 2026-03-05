(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("lay06");
            this.set_titletext("레이아웃 및 표현_배지");
            this.set_cssclass("btn_WF_Txt");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,900);
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
            obj = new Static("staH2","0","0","70","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("배지");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("staDivider","staH2:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staEtit","staDivider:15","0","90","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Badge");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","85",null,"100","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("컴포넌트에 대한 빠른 인지와 탐색을 돕기 위해 컴포넌트 근처에 표시되는 작은 문자 또는 숫자 데이터이다. 컴포넌트의 분류 체계, 구조화된 정보, 상태 정보, 기타 메타 데이터를 표시할 수 있으며 사용자의 주의를 끌기 위해 색상을 활용할 수 있다.");
            obj.set_cssclass("sta_WF_Descript");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03","0","Static00_01_00:80",null,"232","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("60");
            obj.set_fittocontents("height");
            obj.set_flexmainaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","560","900","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_horizontalgap("20");
            obj.set_verticalgap("24");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_02_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Static00_02_02\"/><PanelItem id=\"PanelItem03\" componentid=\"Static00_02_03\"/><PanelItem id=\"PanelItem04\" componentid=\"Static00_02_04\"/><PanelItem id=\"PanelItem05\" componentid=\"Static00_02_05\"/><PanelItem id=\"PanelItem06\" componentid=\"Static00_02_06\"/><PanelItem id=\"PanelItem07\" componentid=\"Static00_02_07\"/><PanelItem id=\"PanelItem08\" componentid=\"Static00_02_08\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","0","560","46","26",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("뱃지");
            obj.set_cssclass("sta_WF_Badgeline01");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01","104","560","46","26",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("뱃지");
            obj.set_cssclass("sta_WF_Badgeline02");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_02","212","560","46","26",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("뱃지");
            obj.set_cssclass("sta_WF_Badgeline03");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_03","318","560","46","26",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("뱃지");
            obj.set_cssclass("sta_WF_Badgeline04");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_04","424","560","46","26",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("뱃지");
            obj.set_cssclass("sta_WF_Badgeline05");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_05","530","560","46","26",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("뱃지");
            obj.set_cssclass("sta_WF_Badgeline06");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_06","636","560","46","26",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("뱃지");
            obj.set_cssclass("sta_WF_Badgeline07");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_07","742","560","46","26",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("뱃지");
            obj.set_cssclass("sta_WF_Badgeline08");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_08","848","560","46","26",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("뱃지");
            obj.set_cssclass("sta_WF_Badgeline09");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","646","900","26",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_horizontalgap("20");
            obj.set_verticalgap("24");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_02_09\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_02_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static00_02_02_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Static00_02_03_00\"/><PanelItem id=\"PanelItem04\" componentid=\"Static00_02_04_00\"/><PanelItem id=\"PanelItem05\" componentid=\"Static00_02_05_00\"/><PanelItem id=\"PanelItem06\" componentid=\"Static00_02_06_00\"/><PanelItem id=\"PanelItem07\" componentid=\"Static00_02_07_00\"/><PanelItem id=\"PanelItem08\" componentid=\"Static00_02_08_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_09","0","630","46","26",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("뱃지");
            obj.set_cssclass("sta_WF_Badge01");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_00","104","630","46","26",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("뱃지");
            obj.set_cssclass("sta_WF_Badge02");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_02_00","212","630","46","26",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("뱃지");
            obj.set_cssclass("sta_WF_Badge03");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_03_00","318","630","46","26",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("뱃지");
            obj.set_cssclass("sta_WF_Badge04");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_04_00","424","630","46","26",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("뱃지");
            obj.set_cssclass("sta_WF_Badge05");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_05_00","530","630","46","26",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("뱃지");
            obj.set_cssclass("sta_WF_Badge06");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_06_00","636","630","46","26",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("뱃지");
            obj.set_cssclass("sta_WF_Badge07");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_07_00","742","630","46","26",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("뱃지");
            obj.set_cssclass("sta_WF_Badge08");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_08_00","848","630","46","26",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("뱃지");
            obj.set_cssclass("sta_WF_Badge09");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02","-1","732","900","26",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_horizontalgap("20");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("24");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_02_09_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_02_01_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static00_02_02_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Static00_02_03_00_00\"/><PanelItem id=\"PanelItem04\" componentid=\"Static00_02_04_00_00\"/><PanelItem id=\"PanelItem05\" componentid=\"Static00_02_05_00_00\"/><PanelItem id=\"PanelItem06\" componentid=\"Static00_02_06_00_00\"/><PanelItem id=\"PanelItem07\" componentid=\"Static00_02_07_00_00\"/><PanelItem id=\"PanelItem08\" componentid=\"Static00_02_08_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_09_00","0","700","46","26",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("뱃지");
            obj.set_cssclass("sta_WF_BadgeLit01");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_00_00","104","700","46","26",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("뱃지");
            obj.set_cssclass("sta_WF_BadgeLit02");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_02_00_00","212","700","46","26",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("뱃지");
            obj.set_cssclass("sta_WF_BadgeLit03");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_03_00_00","318","700","46","26",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("뱃지");
            obj.set_cssclass("sta_WF_BadgeLit04");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_04_00_00","424","700","46","26",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("뱃지");
            obj.set_cssclass("sta_WF_BadgeLit05");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_05_00_00","530","700","46","26",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("뱃지");
            obj.set_cssclass("sta_WF_BadgeLit06");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_06_00_00","636","700","46","26",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("뱃지");
            obj.set_cssclass("sta_WF_BadgeLit07");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_07_00_00","742","700","46","26",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("뱃지");
            obj.set_cssclass("sta_WF_BadgeLit08");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_08_00_00","848","700","46","26",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("뱃지");
            obj.set_cssclass("sta_WF_Badge09");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","Panel03:80","105","46",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("숫자형");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_visible("true");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04","0","Static01:24",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_horizontalgap("40");
            obj.set_flexwrap("wrap");
            obj.set_flexcrossaxisalign("center");
            obj.set_fittocontents("height");
            obj.set_verticalgap("24");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static03\"/><PanelItem id=\"PanelItem01\" componentid=\"Static04\"/><PanelItem id=\"PanelItem02\" componentid=\"Static04_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Static03_00\"/><PanelItem id=\"PanelItem04\" componentid=\"Static04_01\"/><PanelItem id=\"PanelItem05\" componentid=\"Static04_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","306","6","6",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_BadgeDot01");
            obj.set_accessibilitylabel("알람있음");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","2","364","26","20",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("5");
            obj.set_cssclass("sta_WF_BadgeNum01");
            obj.set_accessibilitylabel("알람있음");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00","42","364","52","20",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("+999");
            obj.set_cssclass("sta_WF_BadgeNum01");
            obj.set_accessibilitylabel("알람있음");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","70","306","6","6",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_BadgeDot02");
            obj.set_accessibilitylabel("알람있음");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01","122","364","26","20",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("5");
            obj.set_cssclass("sta_WF_BadgeNum02");
            obj.set_accessibilitylabel("알림 있음");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00","162","364","52","20",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("+999");
            obj.set_cssclass("sta_WF_BadgeNum02");
            obj.set_accessibilitylabel("알람있음");
            this.addChild(obj.name, obj);
            // Layout Functions
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
        this.registerScript("comp03_lay06.xfdl", function() {

        this.lay06_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.lay06_onload,this);
            this.staEtit.addEventHandler("onclick",this.Div01_01_Static00_02_onclick,this);
            this.Static01.addEventHandler("onclick",this.Static01_onclick,this);
        };
        this.loadIncludeScript("comp03_lay06.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
