(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("idn03");
            this.set_titletext("아이덴티티_헤더");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,1120);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_utility", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Util","type" : "STRING","size" : "256"}]},"Rows" : [{"Util" : "유틸리티 레이블"},{"Util" : "유틸리티 레이블"},{"Util" : "유틸리티 레이블"},{"Util" : "유틸리티 레이블"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Mypage", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "data","type" : "STRING","size" : "256"}]},"Rows" : [{"data" : "나의 GOV 홈"},{"data" : "나의 신청내역"},{"data" : "나의 생활정보"},{"data" : "나의 정보관리"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staH2","0","0","70","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("헤더");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("staDivider","staH2:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staEtit","staDivider:15","0","115","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Header");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","85",null,"126","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("헤더는 사용자가 웹사이트에 접속하자마자 마주하게 되는 화면의 최상단 영역으로 디지털 정부 서비스의 브랜드 이미지를 전달하는 핵심 영역이다. 모든 화면에 일관성 있게 배치되며 통합검색, 메인 메뉴 등 서비스 정보를 탐색하고 이동할 수 있는 핵심 탐색 수단을 제공한다.");
            obj.set_cssclass("sta_WF_Descript");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00","0","Static00:80","220","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("헤더 PC");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","24","Static00_02_00_00:3",null,"48","24",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_flexmainaxisalign("end");
            obj.set_flexcrossaxisalign("center");
            obj.set_tablecellarea("0/1");
            obj.set_horizontalgap("12");
            obj.set_spacing("12px 0px 4px 0px");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem05\" componentid=\"Button01_00\"/><PanelItem id=\"PanelItem04\" componentid=\"Static01_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Button02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static01_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button03_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00","520","340","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Language");
            obj.set_cssclass("btn_TF_UtilLang");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","568","94","1","16",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_TF_Line");
            obj.set_visible("true");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_00","1405","80","56","28",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("지원");
            obj.set_cssclass("btn_TF_UtilLink");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","704","94","1","16",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_TF_Line");
            obj.set_visible("true");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_00","1431","95","126","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("글자·화면 설정");
            obj.set_cssclass("btn_TF_UtilLink");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","24","Panel01_00:0","220","56",null,null,"220",null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_TF_Logo");
            obj.set_tablecellarea("0/1");
            obj.set_usedecorate("true");
            obj.set_visible("true");
            obj.set_accessibilitylabel("대한민국정부");
            obj.set_accessibilityrole("link");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02","Static00_00_00_00:20","Panel01_00:0","114","56",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_TF_Slogan");
            obj.set_usedecorate("true");
            obj.set_visible("true");
            obj.set_accessibilitylabel("다시 대한민국! 새로운 국민의 나라");
            obj.set_accessibilityrole("image");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","460","Panel01_00:0",null,"56","24",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_horizontalgap("8");
            obj.set_tablecellarea("0/1");
            obj.set_flexmainaxisalign("end");
            obj.set_flexcrossaxisalign("center");
            obj.set_background(" ");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Button04_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Button04_03\"/><PanelItem id=\"PanelItem03\" componentid=\"Button04_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button04_01_00","662","24","107","56",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("메뉴명");
            obj.set_cssclass("btn_TF_NaviMnuH");
            obj.set_tablecellarea("0/1");
            obj.set_visible("true");
            obj.set_accessibilityrole("link");
            this.addChild(obj.name, obj);

            obj = new Button("Button04_03","768","24","107","56",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("메뉴명");
            obj.set_cssclass("btn_TF_NaviMnuH");
            obj.set_tablecellarea("0/1");
            obj.set_visible("true");
            obj.set_accessibilityrole("link");
            this.addChild(obj.name, obj);

            obj = new Button("Button04_00_00","874","24","107","56",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("메뉴명");
            obj.set_cssclass("btn_TF_NaviMnuH");
            obj.set_tablecellarea("0/1");
            obj.set_visible("true");
            obj.set_accessibilityrole("link");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_00","0","Panel02_00:8",null,"56","0",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Div00");
            obj.set_cssclass("div_TF_Mnuwrap");
            obj.set_visible("true");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","16","0","160","54",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            obj.set_text("main menu");
            obj.set_cssclass("btn_TF_MainMenuCol");
            obj.set_tablecellarea("0/1");
            obj.set_visible("true");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00","Button00_00_00:0","0","160","54",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("1");
            obj.set_text("main menu");
            obj.set_cssclass("btn_TF_MainMenuEx");
            obj.set_tablecellarea("0/1");
            obj.set_visible("true");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_02_00","Button00_01_00:0","0","160","54",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("2");
            obj.set_text("main menu");
            obj.set_cssclass("btn_TF_MainMenu");
            obj.set_tablecellarea("0/1");
            obj.set_visible("true");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_03_00","Button00_02_00:0","0","160","54",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("3");
            obj.set_text("main menu");
            obj.set_cssclass("btn_TF_MainMenu");
            obj.set_tablecellarea("0/1");
            obj.set_visible("true");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_04_00","Button00_03_00:0","0","160","54",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("4");
            obj.set_text("링크(anchor)");
            obj.set_cssclass("btn_TF_MainMenuSin");
            obj.set_tablecellarea("0/1");
            obj.set_visible("true");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","0","Div00_00:100",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("유틸리티 드랍다운");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_visible("true");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Div("Div02","0","Static00_02_00:50","182","230",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("Div02");
            obj.set_visible("true");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","4","11","176","208",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_Utildropbg");
            obj.set_text("");
            obj.set_visible("true");
            obj.set_accessibilityenable("false");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static03","57","0","70","12",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_POP_Utildrop");
            obj.set_text("");
            obj.set_visible("true");
            obj.set_accessibilityenable("false");
            this.Div02.addChild(obj.name, obj);

            obj = new Grid("Grid00","11","21","160","192",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_binddataset("ds_utility");
            obj.set_cssclass("grd_POP_Utility");
            obj.set_autofittype("col");
            obj.set_visible("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"186\"/></Columns><Rows><Row size=\"48\"/></Rows><Band id=\"body\"><Cell text=\"bind:Util\"/></Band></Format></Formats>");
            this.Div02.addChild(obj.name, obj);

            obj = new Div("Div03","252","Static00_02_00:50","195","406",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("Div03");
            obj.set_visible("true");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","4","11","187","387",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_Utildropbg");
            obj.set_text("");
            obj.set_visible("true");
            obj.set_accessibilityenable("false");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static03_00","62","0","70","12",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_POP_Utildrop");
            obj.set_text("");
            obj.set_visible("true");
            obj.set_accessibilityenable("false");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("StaName","27","9","128","53",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("2");
            obj.set_text("홍길동님");
            obj.set_cssclass("sta_WF_Txt19B");
            obj.set_visible("true");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static05","27","62","142","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("3");
            obj.set_text("로그아웃까지 남은 시간");
            obj.set_cssclass("sta_POP_Txt15R");
            obj.set_visible("true");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static06","27","Static05:5","66","23",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("4");
            obj.set_text("12:00");
            obj.set_cssclass("sta_POP_Time");
            obj.set_visible("true");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static05_00","109","Static05:5","60","23",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("5");
            obj.set_text("시간연장");
            obj.set_cssclass("sta_POP_15R");
            obj.set_visible("true");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static07","12","124","171","216",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_POP_UtilDropline");
            obj.set_visible("true");
            obj.set_accessibilityenable("false");
            this.Div03.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","12","132","171","200",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("7");
            obj.set_binddataset("ds_Mypage");
            obj.set_cssclass("grd_POP_Utility");
            obj.set_autofittype("col");
            obj.set_visible("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"179\"/></Columns><Rows><Row size=\"48\"/></Rows><Band id=\"body\"><Cell text=\"bind:data\"/></Band></Format></Formats>");
            this.Div03.addChild(obj.name, obj);

            obj = new Button("BtnLogout","11","340","171","48",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("8");
            obj.set_text("로그아웃");
            obj.set_cssclass("btn_POP_Logout");
            obj.set_visible("true");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static00_02","0","1152",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("헤더 Mobile");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_visible("false");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04","0","Static00_02:30",null,"32","0",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("sta_TF_MastheadBg");
            obj.set_visible("false");
            obj.set_text("");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("StaMth","16","Static00_02:29","334","32",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("이 누리집은 대한민국 공식 전자정부 누리집입니다.");
            obj.set_tablecellarea("0 0/1 2");
            obj.set_cssclass("sta_TF_MastheadTxt");
            obj.set_flexgrow("1");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01","0","Static00_04:0",null,"72","0",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("sta_TF_Divider");
            obj.set_visible("false");
            obj.set_text("");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("StaLogo","16","StaMth:20","134","32",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("sta_TF_MLogo");
            obj.set_visible("false");
            obj.set_accessibilitylabel("대한민국정부");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00",null,"Static00_04:6","84","56","84",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("메뉴명");
            obj.set_cssclass("btn_TF_MMnuV");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00",null,"Static00_04:6","84","56","0",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("전체메뉴");
            obj.set_cssclass("btn_TF_AllmnuV");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00_00.form
            obj = new Layout("default","",0,0,this.Div00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00_00_00.set_taborder("0");
                p.Button00_00_00.set_text("main menu");
                p.Button00_00_00.set_cssclass("btn_TF_MainMenuCol");
                p.Button00_00_00.set_tablecellarea("0/1");
                p.Button00_00_00.set_visible("true");
                p.Button00_00_00.move("16","0","160","54",null,null);

                p.Button00_01_00.set_taborder("1");
                p.Button00_01_00.set_text("main menu");
                p.Button00_01_00.set_cssclass("btn_TF_MainMenuEx");
                p.Button00_01_00.set_tablecellarea("0/1");
                p.Button00_01_00.set_visible("true");
                p.Button00_01_00.move("Button00_00_00:0","0","160","54",null,null);

                p.Button00_02_00.set_taborder("2");
                p.Button00_02_00.set_text("main menu");
                p.Button00_02_00.set_cssclass("btn_TF_MainMenu");
                p.Button00_02_00.set_tablecellarea("0/1");
                p.Button00_02_00.set_visible("true");
                p.Button00_02_00.move("Button00_01_00:0","0","160","54",null,null);

                p.Button00_03_00.set_taborder("3");
                p.Button00_03_00.set_text("main menu");
                p.Button00_03_00.set_cssclass("btn_TF_MainMenu");
                p.Button00_03_00.set_tablecellarea("0/1");
                p.Button00_03_00.set_visible("true");
                p.Button00_03_00.move("Button00_02_00:0","0","160","54",null,null);

                p.Button00_04_00.set_taborder("4");
                p.Button00_04_00.set_text("링크(anchor)");
                p.Button00_04_00.set_cssclass("btn_TF_MainMenuSin");
                p.Button00_04_00.set_tablecellarea("0/1");
                p.Button00_04_00.set_visible("true");
                p.Button00_04_00.move("Button00_03_00:0","0","160","54",null,null);
            	}
            );
            this.Div00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00_00.form
            obj = new Layout("Layout0","",0,0,this.Div00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00_00_00.set_visible("false");

                p.Button00_01_00.set_visible("false");

                p.Button00_02_00.set_visible("false");

                p.Button00_03_00.set_visible("false");

                p.Button00_04_00.set_visible("false");
            	}
            );
            this.Div00_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div02.form
            obj = new Layout("default","",0,0,this.Div02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static02.set_taborder("0");
                p.Static02.set_cssclass("sta_POP_Utildropbg");
                p.Static02.set_text("");
                p.Static02.set_visible("true");
                p.Static02.set_accessibilityenable("false");
                p.Static02.move("4","11","176","208",null,null);

                p.Static03.set_taborder("1");
                p.Static03.set_cssclass("sta_POP_Utildrop");
                p.Static03.set_text("");
                p.Static03.set_visible("true");
                p.Static03.set_accessibilityenable("false");
                p.Static03.move("57","0","70","12",null,null);

                p.Grid00.set_taborder("2");
                p.Grid00.set_binddataset("ds_utility");
                p.Grid00.set_cssclass("grd_POP_Utility");
                p.Grid00.set_autofittype("col");
                p.Grid00.set_visible("true");
                p.Grid00.move("11","21","160","192",null,null);
            	}
            );
            this.Div02.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div02.form
            obj = new Layout("Layout0","",0,0,this.Div02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Grid00.set_visible("false");

                p.Static03.set_visible("false");

                p.Static02.set_visible("false");
            	}
            );
            this.Div02.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div03.form
            obj = new Layout("default","",0,0,this.Div03.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static02_00.set_taborder("0");
                p.Static02_00.set_cssclass("sta_POP_Utildropbg");
                p.Static02_00.set_text("");
                p.Static02_00.set_visible("true");
                p.Static02_00.set_accessibilityenable("false");
                p.Static02_00.move("4","11","187","387",null,null);

                p.Static03_00.set_taborder("1");
                p.Static03_00.set_cssclass("sta_POP_Utildrop");
                p.Static03_00.set_text("");
                p.Static03_00.set_visible("true");
                p.Static03_00.set_accessibilityenable("false");
                p.Static03_00.move("62","0","70","12",null,null);

                p.StaName.set_taborder("2");
                p.StaName.set_text("홍길동님");
                p.StaName.set_cssclass("sta_WF_Txt19B");
                p.StaName.set_visible("true");
                p.StaName.move("27","9","128","53",null,null);

                p.Static05.set_taborder("3");
                p.Static05.set_text("로그아웃까지 남은 시간");
                p.Static05.set_cssclass("sta_POP_Txt15R");
                p.Static05.set_visible("true");
                p.Static05.move("27","62","142","24",null,null);

                p.Static06.set_taborder("4");
                p.Static06.set_text("12:00");
                p.Static06.set_cssclass("sta_POP_Time");
                p.Static06.set_visible("true");
                p.Static06.move("27","Static05:5","66","23",null,null);

                p.Static05_00.set_taborder("5");
                p.Static05_00.set_text("시간연장");
                p.Static05_00.set_cssclass("sta_POP_15R");
                p.Static05_00.set_visible("true");
                p.Static05_00.move("109","Static05:5","60","23",null,null);

                p.Static07.set_taborder("6");
                p.Static07.set_cssclass("sta_POP_UtilDropline");
                p.Static07.set_visible("true");
                p.Static07.set_accessibilityenable("false");
                p.Static07.move("12","124","171","216",null,null);

                p.Grid00_00.set_taborder("7");
                p.Grid00_00.set_binddataset("ds_Mypage");
                p.Grid00_00.set_cssclass("grd_POP_Utility");
                p.Grid00_00.set_autofittype("col");
                p.Grid00_00.set_visible("true");
                p.Grid00_00.move("12","132","171","200",null,null);

                p.BtnLogout.set_taborder("8");
                p.BtnLogout.set_text("로그아웃");
                p.BtnLogout.set_cssclass("btn_POP_Logout");
                p.BtnLogout.set_visible("true");
                p.BtnLogout.move("11","340","171","48",null,null);
            	}
            );
            this.Div03.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div03.form
            obj = new Layout("Layout0","",0,0,this.Div03.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Grid00_00.set_tabstop("false");

                p.Static05_00.set_visible("false");

                p.Static06.set_visible("false");

                p.Static05.set_visible("false");

                p.StaName.set_visible("false");

                p.Static03_00.set_visible("false");

                p.Static02_00.set_visible("false");
            	}
            );
            this.Div03.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",888,1120,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("아이덴티티_헤더");

                p.staH2.set_taborder("0");
                p.staH2.set_text("헤더");
                p.staH2.set_cssclass("sta_WF_H2_pc");
                p.staH2.set_fittocontents("width");
                p.staH2.set_accessibilityrole("heading2");
                p.staH2.move("0","0","70","60",null,null);

                p.staDivider.set_taborder("1");
                p.staDivider.set_cssclass("sta_WF_line");
                p.staDivider.set_accessibilityenable("false");
                p.staDivider.move("staH2:15","20","1","21",null,null);

                p.staEtit.set_taborder("2");
                p.staEtit.set_text("Header");
                p.staEtit.set_cssclass("sta_WF_ParaH4_pc");
                p.staEtit.move("staDivider:15","0","115","60",null,null);

                p.Static00.set_taborder("3");
                p.Static00.set_text("헤더는 사용자가 웹사이트에 접속하자마자 마주하게 되는 화면의 최상단 영역으로 디지털 정부 서비스의 브랜드 이미지를 전달하는 핵심 영역이다. 모든 화면에 일관성 있게 배치되며 통합검색, 메인 메뉴 등 서비스 정보를 탐색하고 이동할 수 있는 핵심 탐색 수단을 제공한다.");
                p.Static00.set_cssclass("sta_WF_Descript");
                p.Static00.set_fittocontents("height");
                p.Static00.move("0","85",null,"126","0",null);

                p.Static00_02_00_00.set_taborder("4");
                p.Static00_02_00_00.set_text("헤더 PC");
                p.Static00_02_00_00.set_cssclass("sta_WF_H4_pc");
                p.Static00_02_00_00.set_accessibilityrole("heading3");
                p.Static00_02_00_00.move("0","Static00:80","220","30",null,null);

                p.Panel01_00.set_taborder("5");
                p.Panel01_00.set_flexmainaxisalign("end");
                p.Panel01_00.set_flexcrossaxisalign("center");
                p.Panel01_00.set_tablecellarea("0/1");
                p.Panel01_00.set_horizontalgap("12");
                p.Panel01_00.set_spacing("12px 0px 4px 0px");
                p.Panel01_00.set_visible("true");
                p.Panel01_00.move("24","Static00_02_00_00:3",null,"48","24",null);

                p.Button01_00.set_taborder("6");
                p.Button01_00.set_text("Language");
                p.Button01_00.set_cssclass("btn_TF_UtilLang");
                p.Button01_00.set_visible("true");
                p.Button01_00.move("520","340","120","28",null,null);

                p.Static01_00_00.set_taborder("7");
                p.Static01_00_00.set_cssclass("sta_TF_Line");
                p.Static01_00_00.set_visible("true");
                p.Static01_00_00.set_accessibilityenable("false");
                p.Static01_00_00.move("568","94","1","16",null,null);

                p.Button02_00.set_taborder("8");
                p.Button02_00.set_text("지원");
                p.Button02_00.set_cssclass("btn_TF_UtilLink");
                p.Button02_00.set_visible("true");
                p.Button02_00.move("1405","80","56","28",null,null);

                p.Static01_01_00.set_taborder("9");
                p.Static01_01_00.set_cssclass("sta_TF_Line");
                p.Static01_01_00.set_visible("true");
                p.Static01_01_00.set_accessibilityenable("false");
                p.Static01_01_00.move("704","94","1","16",null,null);

                p.Button03_00.set_taborder("10");
                p.Button03_00.set_text("글자·화면 설정");
                p.Button03_00.set_cssclass("btn_TF_UtilLink");
                p.Button03_00.set_visible("true");
                p.Button03_00.move("1431","95","126","28",null,null);

                p.Static00_00_00_00.set_taborder("11");
                p.Static00_00_00_00.set_cssclass("sta_TF_Logo");
                p.Static00_00_00_00.set_tablecellarea("0/1");
                p.Static00_00_00_00.set_usedecorate("true");
                p.Static00_00_00_00.set_visible("true");
                p.Static00_00_00_00.set_accessibilitylabel("대한민국정부");
                p.Static00_00_00_00.set_accessibilityrole("link");
                p.Static00_00_00_00.set_minwidth("220");
                p.Static00_00_00_00.set_maxwidth("");
                p.Static00_00_00_00.move("24","Panel01_00:0","220","56",null,null);

                p.Static01_02.set_taborder("12");
                p.Static01_02.set_cssclass("sta_TF_Slogan");
                p.Static01_02.set_usedecorate("true");
                p.Static01_02.set_visible("true");
                p.Static01_02.set_accessibilitylabel("다시 대한민국! 새로운 국민의 나라");
                p.Static01_02.set_accessibilityrole("image");
                p.Static01_02.move("Static00_00_00_00:20","Panel01_00:0","114","56",null,null);

                p.Panel02_00.set_taborder("13");
                p.Panel02_00.set_horizontalgap("8");
                p.Panel02_00.set_tablecellarea("0/1");
                p.Panel02_00.set_flexmainaxisalign("end");
                p.Panel02_00.set_flexcrossaxisalign("center");
                p.Panel02_00.set_background(" ");
                p.Panel02_00.move("460","Panel01_00:0",null,"56","24",null);

                p.Button04_01_00.set_taborder("14");
                p.Button04_01_00.set_text("메뉴명");
                p.Button04_01_00.set_cssclass("btn_TF_NaviMnuH");
                p.Button04_01_00.set_tablecellarea("0/1");
                p.Button04_01_00.set_visible("true");
                p.Button04_01_00.set_accessibilityrole("link");
                p.Button04_01_00.move("662","24","107","56",null,null);

                p.Button04_03.set_taborder("15");
                p.Button04_03.set_text("메뉴명");
                p.Button04_03.set_cssclass("btn_TF_NaviMnuH");
                p.Button04_03.set_tablecellarea("0/1");
                p.Button04_03.set_visible("true");
                p.Button04_03.set_accessibilityrole("link");
                p.Button04_03.move("768","24","107","56",null,null);

                p.Button04_00_00.set_taborder("16");
                p.Button04_00_00.set_text("메뉴명");
                p.Button04_00_00.set_cssclass("btn_TF_NaviMnuH");
                p.Button04_00_00.set_tablecellarea("0/1");
                p.Button04_00_00.set_visible("true");
                p.Button04_00_00.set_accessibilityrole("link");
                p.Button04_00_00.move("874","24","107","56",null,null);

                p.Div00_00.set_taborder("17");
                p.Div00_00.set_text("Div00");
                p.Div00_00.set_cssclass("div_TF_Mnuwrap");
                p.Div00_00.set_visible("true");
                p.Div00_00.set_accessibilityenable("false");
                p.Div00_00.move("0","Panel02_00:8",null,"56","0",null);

                p.Static00_02_00.set_taborder("18");
                p.Static00_02_00.set_text("유틸리티 드랍다운");
                p.Static00_02_00.set_cssclass("sta_WF_H4_pc");
                p.Static00_02_00.set_visible("true");
                p.Static00_02_00.set_accessibilityrole("heading3");
                p.Static00_02_00.move("0","Div00_00:100",null,"30","0",null);

                p.Div02.set_taborder("19");
                p.Div02.set_text("Div02");
                p.Div02.set_visible("true");
                p.Div02.set_accessibilityenable("false");
                p.Div02.move("0","Static00_02_00:50","182","230",null,null);

                p.Div03.set_taborder("20");
                p.Div03.set_text("Div03");
                p.Div03.set_visible("true");
                p.Div03.set_accessibilityenable("false");
                p.Div03.move("252","Static00_02_00:50","195","406",null,null);

                p.Static00_02.set_taborder("21");
                p.Static00_02.set_text("헤더 Mobile");
                p.Static00_02.set_cssclass("sta_WF_H4_pc");
                p.Static00_02.set_visible("false");
                p.Static00_02.set_accessibilityrole("heading3");
                p.Static00_02.move("0","1152",null,"30","0",null);

                p.Static00_04.set_taborder("22");
                p.Static00_04.set_cssclass("sta_TF_MastheadBg");
                p.Static00_04.set_visible("false");
                p.Static00_04.set_text("");
                p.Static00_04.set_accessibilityenable("false");
                p.Static00_04.move("0","Static00_02:30",null,"32","0",null);

                p.StaMth.set_taborder("23");
                p.StaMth.set_text("이 누리집은 대한민국 공식 전자정부 누리집입니다.");
                p.StaMth.set_tablecellarea("0 0/1 2");
                p.StaMth.set_cssclass("sta_TF_MastheadTxt");
                p.StaMth.set_flexgrow("1");
                p.StaMth.set_visible("false");
                p.StaMth.move("16","Static00_02:29","334","32",null,null);

                p.Static02_01.set_taborder("24");
                p.Static02_01.set_cssclass("sta_TF_Divider");
                p.Static02_01.set_visible("false");
                p.Static02_01.set_text("");
                p.Static02_01.set_accessibilityenable("false");
                p.Static02_01.move("0","Static00_04:0",null,"72","0",null);

                p.StaLogo.set_taborder("25");
                p.StaLogo.set_cssclass("sta_TF_MLogo");
                p.StaLogo.set_visible("false");
                p.StaLogo.set_accessibilitylabel("대한민국정부");
                p.StaLogo.move("16","StaMth:20","134","32",null,null);

                p.Button00_00_00.set_taborder("26");
                p.Button00_00_00.set_text("메뉴명");
                p.Button00_00_00.set_cssclass("btn_TF_MMnuV");
                p.Button00_00_00.set_visible("false");
                p.Button00_00_00.move(null,"Static00_04:6","84","56","84",null);

                p.Button00_00.set_taborder("27");
                p.Button00_00.set_text("전체메뉴");
                p.Button00_00.set_cssclass("btn_TF_AllmnuV");
                p.Button00_00.set_visible("false");
                p.Button00_00.move(null,"Static00_04:6","84","56","0",null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Desktop_screen,mobile_small",480,580,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.move("0","85",null,"178","0",null);

                p.Static00_02_00_00.set_visible("false");
                p.Static00_02_00_00.move("0","700","220","30",null,null);

                p.Static00_02.set_visible("true");
                p.Static00_02.move("0","Static00:80",null,"30","0",null);

                p.Panel01_00.set_visible("false");

                p.Panel02_00.set_visible("false");

                p.Div00_00.set_visible("false");

                p.Static00_02_00.set_visible("false");

                p.Div02.set_visible("false");

                p.Div03.set_visible("false");

                p.Static00_04.set_visible("true");

                p.Static02_01.set_visible("true");

                p.StaMth.set_visible("true");

                p.StaLogo.set_visible("true");

                p.Button00_00_00.set_visible("true");

                p.Button00_00.set_visible("true");

                p.Button04_01_00.set_visible("false");

                p.Button04_03.set_visible("false");

                p.Button04_00_00.set_visible("false");

                p.Button01_00.set_visible("false");

                p.Static01_00_00.set_visible("false");

                p.Button02_00.set_visible("false");

                p.Static01_01_00.set_visible("false");

                p.Button03_00.set_visible("false");

                p.Static00_00_00_00.set_visible("false");

                p.Static01_02.set_visible("false");
            	}
            );
            obj.set_mobileorientation("Portrait");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comp01_idn03.xfdl", function() {

        this.idn03_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.idn03_onload,this);
            this.StaMth.addEventHandler("onclick",this.Static00_01_onclick,this);
        };
        this.loadIncludeScript("comp01_idn03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
