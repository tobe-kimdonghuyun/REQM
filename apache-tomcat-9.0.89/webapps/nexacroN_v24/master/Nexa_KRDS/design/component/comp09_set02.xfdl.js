(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("set02");
            this.set_titletext("설정_화면 크기 조정");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,1360);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staH2","0","0","240","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("화면 크기 조정");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("staDivider","staH2:15","19","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staEtit","staDivider:15","0","99","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            obj.set_text("Resize");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_02","0","85",null,"178","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("화면 크기 조정은 텍스트를 포함하여 화면에 표시되는 정보를 확대하거나 축소하는 데 사용되는 요소이다.\r\n사용자에 따라 읽을 수 있는 텍스트의 크기, 조작할 수 있는 요소의 크기는 다르다. 디바이스나 사용자 에이전트가 지원하는 여러 가지 설정 기능을 활용하면 사용자가 선호하는 방식으로 콘텐츠의 표시 방식을 수정할 수 있다. 그러나 화면 크기 조정 기능을 필요로 하는 사용자는 관련 기능을 찾아 설정하는 데 어려움을 겪을 가능성이 높으므로 서비스 자체적으로 화면 크기 조정 기능을 제공하고 접근하기 쉽게 만드는 것이 중요하다.");
            obj.set_cssclass("sta_WF_Descript");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("Div03","0","Static00_01_00_02:80",null,"511","112",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_fittocontents("height");
            obj.set_text("");
            obj.set_accessibilityenable("false");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","4","4",null,null,"12","12",null,null,null,null,this.Div03.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_Utildropbg");
            obj.set_text("");
            obj.set_accessibilityenable("false");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static00","44","60","363","36",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("1");
            obj.set_text("글자·화면 표시 설정");
            obj.set_cssclass("sta_WF_H4");
            obj.set_accessibilityrole("heading2");
            this.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel02","44","120",null,"271","52",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("2");
            obj.set_horizontalgap("24");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("24");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/></Contents>");
            this.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00","44","120","240","249",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_enableevent("false");
            obj.set_verticalgap("16");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Radio00\"/></Contents>");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static00_00","44","0","230","23",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("4");
            obj.set_text("글자·화면 표시 설정");
            obj.set_cssclass("sta_WF_Subtit15B");
            obj.set_accessibilityrole("heading3");
            this.Div03.addChild(obj.name, obj);

            obj = new Radio("Radio00","47","20.72","250","210",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div03_form_Radio00_innerdataset = new nexacro.NormalDataset("Div03_form_Radio00_innerdataset", obj);
            Div03_form_Radio00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "작게"},{"codecolumn" : "1","datacolumn" : "보통"},{"codecolumn" : "2","datacolumn" : "조금 크게"},{"codecolumn" : "3","datacolumn" : "크게"},{"codecolumn" : "4","datacolumn" : "가장 크게"}]});
            obj.set_innerdataset(Div03_form_Radio00_innerdataset);
            this.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel01","346","106","360","271",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_verticalgap("16");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel05\"/></Contents>");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","10","10","230","20",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("7");
            obj.set_text("화면 표시 모드");
            obj.set_cssclass("sta_WF_Subtit15B");
            obj.set_accessibilityrole("heading3");
            this.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel05","0","25","360","232",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("8");
            obj.set_horizontalgap("16");
            obj.set_type("vertical");
            obj.set_verticalgap("20");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel04\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel06\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel07\"/></Contents>");
            this.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel04","0","0","335","64",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("9");
            obj.set_horizontalgap("16");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"ImageViewer00\"/><PanelItem id=\"PanelItem01\" componentid=\"RdoLt\"/></Contents>");
            this.Div03.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","306","159","120","64",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("10");
            obj.set_cssclass("img_POP_Radius8");
            obj.set_image("url(\'theme::NexaKRDS/images/img_POP_ScreenLight.png\')");
            obj.set_text("");
            obj.set_accessibilitylabel("기본(밝은배경)");
            this.Div03.addChild(obj.name, obj);

            obj = new Radio("RdoLt","308","156","199","64",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("11");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div03_form_RdoLt_innerdataset = new nexacro.NormalDataset("Div03_form_RdoLt_innerdataset", obj);
            Div03_form_RdoLt_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "기본 (밝은 배경)"}]});
            obj.set_innerdataset(Div03_form_RdoLt_innerdataset);
            this.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel06","0","58","335","64",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("12");
            obj.set_horizontalgap("16");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"ImageViewer00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"RdoCon\"/></Contents>");
            this.Div03.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00_01","20","51","120","64",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("13");
            obj.set_text("");
            obj.set_cssclass("img_POP_Radius8");
            obj.set_image("url(\'theme::NexaKRDS/images/img_POP_ScreenDark.png\')");
            obj.set_accessibilitylabel("선명하게(어두운배경)");
            this.Div03.addChild(obj.name, obj);

            obj = new Radio("RdoCon","146","10","199","64",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("14");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div03_form_RdoCon_innerdataset = new nexacro.NormalDataset("Div03_form_RdoCon_innerdataset", obj);
            Div03_form_RdoCon_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "선명하게 (어두운 배경)"}]});
            obj.set_innerdataset(Div03_form_RdoCon_innerdataset);
            this.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel07","0","116","335","64",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("15");
            obj.set_horizontalgap("16");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"ImageViewer00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"RdoSys\"/></Contents>");
            this.Div03.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00_00","10","41","120","64",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("16");
            obj.set_cssclass("img_POP_Radius8");
            obj.set_image("url(\'theme::NexaKRDS/images/img_POP_ScreenSystem.png\')");
            obj.set_accessibilitylabel("시스템설정");
            this.Div03.addChild(obj.name, obj);

            obj = new Radio("RdoSys","130","10","199","64",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("17");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div03_form_RdoSys_innerdataset = new nexacro.NormalDataset("Div03_form_RdoSys_innerdataset", obj);
            Div03_form_RdoSys_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "시스템 설정"}]});
            obj.set_innerdataset(Div03_form_RdoSys_innerdataset);
            this.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel03","44","Panel02:8",null,"112","52",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("18");
            obj.set_horizontalgap("8");
            obj.set_flexmainaxisalign("end");
            obj.set_flexcrossaxisalign("start");
            obj.set_spacing("16px 0px 48px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00_00\"/></Contents>");
            this.Div03.addChild(obj.name, obj);

            obj = new Button("Button00","514","16","78","48",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("19");
            obj.set_text("초기화");
            this.Div03.addChild(obj.name, obj);

            obj = new Button("Button00_00","600","16","78","48",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("20");
            obj.set_text("설정");
            obj.set_cssclass("btn_WF_Crud01");
            this.Div03.addChild(obj.name, obj);

            obj = new Button("Button00_01",null,"32","40","40","40",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("21");
            obj.set_cssclass("btn_POP_Cancel");
            obj.set_enable("true");
            obj.set_accessibilitylabel("닫기");
            this.Div03.addChild(obj.name, obj);

            obj = new Div("Div00","0","Div03:40","204","346",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_accessibilityenable("false");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","4","11",null,null,"12","12",null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_Utildropbg");
            obj.set_text("");
            obj.set_accessibilityenable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_00","62","0","70","12",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_POP_Utildrop");
            obj.set_accessibilityenable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01","12","20",null,"48","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("작게");
            obj.set_cssclass("btn_POP_Textsize01");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01_00","12","68",null,"48","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("보통");
            obj.set_cssclass("btn_POP_Textsize02");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01_01","12","116",null,"48","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("조금 크게");
            obj.set_cssclass("btn_POP_Textsize03");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01_02","12","164",null,"48","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("크게");
            obj.set_cssclass("btn_POP_Textsize04");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01_03","12","212",null,"48","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("가장 크게");
            obj.set_cssclass("btn_POP_Textsize05");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static07","12","271","171","1",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_POP_divider");
            obj.set_accessibilityenable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","11","278","171","48",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("초기화");
            obj.set_cssclass("btn_POP_Reset");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div03.form
            obj = new Layout("default","",0,0,this.Div03.form,function(p){});
            obj.set_type("default");
            this.Div03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,mobile_small",888,1360,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comp09_set02.xfdl", function() {

        this.set02_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.set02_onload,this);
            this.staEtit.addEventHandler("onclick",this.Div01_01_Static00_02_onclick,this);
            this.Div00.form.Static02_00.addEventHandler("onclick",this.Div00_Static02_00_onclick,this);
        };
        this.loadIncludeScript("comp09_set02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
