(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("idn04");
            this.set_titletext("아이덴티티_푸터");
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
            obj.set_text("푸터");
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
            obj.set_text("Footer");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","85",null,"126","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("푸터는 화면을 구성하는 가장 마지막 요소로 헤더와 본문에서 원하는 정보를 찾지 못하였거나 사이트 구조 탐색 중에 길을 잃은 사용자들이 대면하게 되는 정보이다. 따라서 푸터에는 사용자가 서비스를 탐색할 수 있는 추가적인 수단, 문제를 해결하는 데 참고할 수 있는 유용한 링크가 제공되어야 한다.");
            obj.set_cssclass("sta_WF_Descript");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","Static00:80","220","38",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("푸터 PC");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_accessibilityrole("heading3");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","10","10","70","28",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("이용안내");
            obj.set_cssclass("btn_WF_Txtsm");
            obj.set_visible("true");
            obj.set_accessibilityrole("link");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","0","56","80","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("저작권정책");
            obj.set_cssclass("btn_WF_Txtsm");
            obj.set_visible("true");
            obj.set_accessibilityrole("link");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","68","366","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("개인정보처리방침");
            obj.set_cssclass("btn_WF_TxtsmB");
            obj.set_visible("true");
            obj.set_accessibilityrole("link");
            this.addChild(obj.name, obj);

            obj = new Button("Button07","291","0","180","28",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("웹 접근성 품질인증 마크 획득");
            obj.set_cssclass("btn_WF_Txtsm");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_03","0","28","442","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("© The Government of the Republic of Korea. All rights reserved.");
            obj.set_cssclass("sta_BF_Copyright_pc");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02","55","2230","503","52",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_tablecellarea("0/1");
            obj.set_horizontalgap("8");
            obj.set_verticalgap("0");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Button00_00_00\"/><PanelItem id=\"PanelItem06\" componentid=\"Button00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button07\"/><PanelItem id=\"PanelItem03\" componentid=\"Static02_03\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","1155","2400","97","48",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_BF_Mark");
            obj.set_visible("true");
            obj.set_accessibilityrole("image");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_01","1165","2410","97","48",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_BF_Mark");
            obj.set_visible("true");
            obj.set_accessibilityrole("image");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_02","1175","2420","97","48",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_BF_Mark");
            obj.set_visible("true");
            obj.set_accessibilityrole("image");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_03","1185","2430","97","48",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_BF_Mark");
            obj.set_visible("true");
            obj.set_accessibilityrole("image");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","1155","2400","340","48",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_horizontalgap("8");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static03_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Static03_02\"/><PanelItem id=\"PanelItem03\" componentid=\"Static03_03\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","Static00_01:16",null,"73","0",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_type("horizontal");
            obj.set_cssclass("pnl_BF_Copyright");
            obj.set_fittocontents("height");
            obj.set_spacing("16px 0px 0px 0px");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("40");
            obj.set_verticalgap("16");
            obj.set_flexmainaxisalign("spacebetween");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel02\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","500","220","38",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("푸터 Mobile");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_accessibilityrole("heading3");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00","86","10","68","24",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("저작권정책");
            obj.set_cssclass("btn_WF_Txtsm");
            obj.set_visible("false");
            obj.set_accessibilityrole("link");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01","10","10","68","24",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("이용안내");
            obj.set_cssclass("btn_WF_Txtsm");
            obj.set_visible("false");
            obj.set_accessibilityrole("link");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01","162","10","124","24",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("개인정보처리방침");
            obj.set_cssclass("btn_WF_TxtsmB");
            obj.set_visible("false");
            obj.set_accessibilityrole("link");
            this.addChild(obj.name, obj);

            obj = new Button("Button07_00","314","10","180","28",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("웹 접근성 품질인증 마크 획득");
            obj.set_cssclass("btn_WF_Txtsm");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_00","55","2230","503","52",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_tablecellarea("0/1");
            obj.set_horizontalgap("8");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("4");
            obj.set_visible("false");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Button00_01\"/><PanelItem id=\"PanelItem03\" componentid=\"Button07_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","1155","2400","97","48",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_BF_Mark");
            obj.set_visible("false");
            obj.set_accessibilityrole("image");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01","1165","2410","97","48",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("sta_BF_Mark");
            obj.set_visible("false");
            obj.set_accessibilityrole("image");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_02","1175","2420","97","48",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("sta_BF_Mark");
            obj.set_visible("false");
            obj.set_accessibilityrole("image");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_03","1185","2430","97","48",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_cssclass("sta_BF_Mark");
            obj.set_visible("false");
            obj.set_accessibilityrole("image");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_01","1155","2400","388","48",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_horizontalgap("8");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static05\"/><PanelItem id=\"PanelItem01\" componentid=\"Static05_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Static05_02\"/><PanelItem id=\"PanelItem03\" componentid=\"Static05_03\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","703","2470","442","24",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("© Ministry of Employment and Labor. All rights reserved.");
            obj.set_cssclass("sta_BF_Copyright_pc");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03","0","Static00_01_00:39","360","177",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_type("horizontal");
            obj.set_cssclass("pnl_BF_Copyright");
            obj.set_fittocontents("height");
            obj.set_spacing("16px 0px 0px 0px");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("40");
            obj.set_verticalgap("16");
            obj.set_flexmainaxisalign("start");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel04_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel04_01\"/><PanelItem id=\"PanelItem03\" componentid=\"Static06\"/></Contents>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",888,1120,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("아이덴티티_푸터");

                p.staH2.set_taborder("0");
                p.staH2.set_text("푸터");
                p.staH2.set_cssclass("sta_WF_H2_pc");
                p.staH2.set_fittocontents("width");
                p.staH2.set_accessibilityrole("heading2");
                p.staH2.move("0","0","70","60",null,null);

                p.staDivider.set_taborder("1");
                p.staDivider.set_cssclass("sta_WF_line");
                p.staDivider.set_accessibilityenable("false");
                p.staDivider.move("staH2:15","20","1","21",null,null);

                p.staEtit.set_taborder("2");
                p.staEtit.set_text("Footer");
                p.staEtit.set_cssclass("sta_WF_ParaH4_pc");
                p.staEtit.move("staDivider:15","0","115","60",null,null);

                p.Static00.set_taborder("3");
                p.Static00.set_text("푸터는 화면을 구성하는 가장 마지막 요소로 헤더와 본문에서 원하는 정보를 찾지 못하였거나 사이트 구조 탐색 중에 길을 잃은 사용자들이 대면하게 되는 정보이다. 따라서 푸터에는 사용자가 서비스를 탐색할 수 있는 추가적인 수단, 문제를 해결하는 데 참고할 수 있는 유용한 링크가 제공되어야 한다.");
                p.Static00.set_cssclass("sta_WF_Descript");
                p.Static00.set_fittocontents("height");
                p.Static00.move("0","85",null,"126","0",null);

                p.Static00_01.set_taborder("4");
                p.Static00_01.set_text("푸터 PC");
                p.Static00_01.set_cssclass("sta_WF_H4_pc");
                p.Static00_01.set_accessibilityrole("heading3");
                p.Static00_01.set_visible("true");
                p.Static00_01.move("0","Static00:80","220","38",null,null);

                p.Button00_00.set_taborder("5");
                p.Button00_00.set_text("이용안내");
                p.Button00_00.set_cssclass("btn_WF_Txtsm");
                p.Button00_00.set_visible("true");
                p.Button00_00.set_accessibilityrole("link");
                p.Button00_00.move("10","10","70","28",null,null);

                p.Button00_00_00.set_taborder("6");
                p.Button00_00_00.set_text("저작권정책");
                p.Button00_00_00.set_cssclass("btn_WF_Txtsm");
                p.Button00_00_00.set_visible("true");
                p.Button00_00_00.set_accessibilityrole("link");
                p.Button00_00_00.move("0","56","80","28",null,null);

                p.Button00.set_taborder("7");
                p.Button00.set_text("개인정보처리방침");
                p.Button00.set_cssclass("btn_WF_TxtsmB");
                p.Button00.set_visible("true");
                p.Button00.set_accessibilityrole("link");
                p.Button00.move("68","366","130","28",null,null);

                p.Button07.set_taborder("8");
                p.Button07.set_text("웹 접근성 품질인증 마크 획득");
                p.Button07.set_cssclass("btn_WF_Txtsm");
                p.Button07.set_fittocontents("width");
                p.Button07.move("291","0","180","28",null,null);

                p.Static02_03.set_taborder("9");
                p.Static02_03.set_text("© The Government of the Republic of Korea. All rights reserved.");
                p.Static02_03.set_cssclass("sta_BF_Copyright_pc");
                p.Static02_03.set_visible("true");
                p.Static02_03.set_maxwidth("");
                p.Static02_03.move("0","28","442","24",null,null);

                p.Panel02.set_taborder("10");
                p.Panel02.set_tablecellarea("0/1");
                p.Panel02.set_horizontalgap("8");
                p.Panel02.set_verticalgap("0");
                p.Panel02.set_fittocontents("height");
                p.Panel02.set_flexwrap("wrap");
                p.Panel02.set_visible("true");
                p.Panel02.set_maxwidth("");
                p.Panel02.move("55","2230","503","52",null,null);

                p.Static03_00.set_taborder("11");
                p.Static03_00.set_cssclass("sta_BF_Mark");
                p.Static03_00.set_visible("true");
                p.Static03_00.set_accessibilityrole("image");
                p.Static03_00.move("1155","2400","97","48",null,null);

                p.Static03_01.set_taborder("12");
                p.Static03_01.set_cssclass("sta_BF_Mark");
                p.Static03_01.set_visible("true");
                p.Static03_01.set_accessibilityrole("image");
                p.Static03_01.move("1165","2410","97","48",null,null);

                p.Static03_02.set_taborder("13");
                p.Static03_02.set_cssclass("sta_BF_Mark");
                p.Static03_02.set_visible("true");
                p.Static03_02.set_accessibilityrole("image");
                p.Static03_02.move("1175","2420","97","48",null,null);

                p.Static03_03.set_taborder("14");
                p.Static03_03.set_cssclass("sta_BF_Mark");
                p.Static03_03.set_visible("true");
                p.Static03_03.set_accessibilityrole("image");
                p.Static03_03.move("1185","2430","97","48",null,null);

                p.Panel02_00.set_taborder("15");
                p.Panel02_00.set_horizontalgap("8");
                p.Panel02_00.set_visible("true");
                p.Panel02_00.move("1155","2400","340","48",null,null);

                p.Panel01.set_taborder("16");
                p.Panel01.set_type("horizontal");
                p.Panel01.set_cssclass("pnl_BF_Copyright");
                p.Panel01.set_fittocontents("height");
                p.Panel01.set_spacing("16px 0px 0px 0px");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.set_horizontalgap("40");
                p.Panel01.set_verticalgap("16");
                p.Panel01.set_flexmainaxisalign("spacebetween");
                p.Panel01.set_visible("true");
                p.Panel01.move("0","Static00_01:16",null,"73","0",null);

                p.Static00_01_00.set_taborder("17");
                p.Static00_01_00.set_text("푸터 Mobile");
                p.Static00_01_00.set_cssclass("sta_WF_H4_pc");
                p.Static00_01_00.set_accessibilityrole("heading3");
                p.Static00_01_00.set_visible("false");
                p.Static00_01_00.move("0","500","220","38",null,null);

                p.Button00_00_00_00.set_taborder("18");
                p.Button00_00_00_00.set_text("저작권정책");
                p.Button00_00_00_00.set_cssclass("btn_WF_Txtsm");
                p.Button00_00_00_00.set_visible("false");
                p.Button00_00_00_00.set_accessibilityrole("link");
                p.Button00_00_00_00.move("86","10","68","24",null,null);

                p.Button00_00_01.set_taborder("19");
                p.Button00_00_01.set_text("이용안내");
                p.Button00_00_01.set_cssclass("btn_WF_Txtsm");
                p.Button00_00_01.set_visible("false");
                p.Button00_00_01.set_accessibilityrole("link");
                p.Button00_00_01.move("10","10","68","24",null,null);

                p.Button00_01.set_taborder("20");
                p.Button00_01.set_text("개인정보처리방침");
                p.Button00_01.set_cssclass("btn_WF_TxtsmB");
                p.Button00_01.set_visible("false");
                p.Button00_01.set_accessibilityrole("link");
                p.Button00_01.move("162","10","124","24",null,null);

                p.Button07_00.set_taborder("21");
                p.Button07_00.set_text("웹 접근성 품질인증 마크 획득");
                p.Button07_00.set_cssclass("btn_WF_Txtsm");
                p.Button07_00.set_fittocontents("width");
                p.Button07_00.move("314","10","180","28",null,null);

                p.Panel04_00.set_taborder("22");
                p.Panel04_00.set_tablecellarea("0/1");
                p.Panel04_00.set_horizontalgap("8");
                p.Panel04_00.set_fittocontents("height");
                p.Panel04_00.set_flexwrap("wrap");
                p.Panel04_00.set_verticalgap("4");
                p.Panel04_00.set_visible("false");
                p.Panel04_00.set_type("horizontal");
                p.Panel04_00.set_maxwidth("");
                p.Panel04_00.move("55","2230","503","52",null,null);

                p.Static05.set_taborder("23");
                p.Static05.set_cssclass("sta_BF_Mark");
                p.Static05.set_visible("false");
                p.Static05.set_accessibilityrole("image");
                p.Static05.move("1155","2400","97","48",null,null);

                p.Static05_01.set_taborder("24");
                p.Static05_01.set_cssclass("sta_BF_Mark");
                p.Static05_01.set_visible("false");
                p.Static05_01.set_accessibilityrole("image");
                p.Static05_01.move("1165","2410","97","48",null,null);

                p.Static05_02.set_taborder("25");
                p.Static05_02.set_cssclass("sta_BF_Mark");
                p.Static05_02.set_visible("false");
                p.Static05_02.set_accessibilityrole("image");
                p.Static05_02.move("1175","2420","97","48",null,null);

                p.Static05_03.set_taborder("26");
                p.Static05_03.set_cssclass("sta_BF_Mark");
                p.Static05_03.set_visible("false");
                p.Static05_03.set_accessibilityrole("image");
                p.Static05_03.move("1185","2430","97","48",null,null);

                p.Panel04_01.set_taborder("27");
                p.Panel04_01.set_horizontalgap("8");
                p.Panel04_01.set_visible("false");
                p.Panel04_01.move("1155","2400","388","48",null,null);

                p.Static06.set_taborder("28");
                p.Static06.set_text("© Ministry of Employment and Labor. All rights reserved.");
                p.Static06.set_cssclass("sta_BF_Copyright_pc");
                p.Static06.set_visible("false");
                p.Static06.set_maxwidth("");
                p.Static06.move("703","2470","442","24",null,null);

                p.Panel03.set_taborder("29");
                p.Panel03.set_type("horizontal");
                p.Panel03.set_cssclass("pnl_BF_Copyright");
                p.Panel03.set_fittocontents("height");
                p.Panel03.set_spacing("16px 0px 0px 0px");
                p.Panel03.set_flexwrap("wrap");
                p.Panel03.set_horizontalgap("40");
                p.Panel03.set_verticalgap("16");
                p.Panel03.set_flexmainaxisalign("start");
                p.Panel03.set_visible("false");
                p.Panel03.move("0","Static00_01_00:39","360","177",null,null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Desktop_screen,mobile_small",480,640,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.move("0","85",null,"178","0",null);

                p.Static00_01.set_visible("false");
                p.Static00_01.move("0","700","220","30",null,null);

                p.Static00_01_00.set_visible("true");
                p.Static00_01_00.move("0","Static00:80","220","38",null,null);

                p.Panel03.set_visible("true");
                p.Panel03.set_flexmainaxisalign("start");
                p.Panel03.move("0","Static00_01_00:39",null,"177","0",null);

                p.Button00_00.set_visible("false");

                p.Button00_00_00.set_visible("false");

                p.Button00.set_visible("false");

                p.Panel02.set_visible("false");

                p.Static03_00.set_visible("false");

                p.Static03_01.set_visible("false");

                p.Static03_02.set_visible("false");

                p.Static03_03.set_visible("false");

                p.Panel02_00.set_visible("false");

                p.Panel01.set_visible("false");

                p.Button00_00_00_00.set_visible("true");

                p.Button00_00_01.set_visible("true");

                p.Button00_01.set_visible("true");

                p.Panel04_00.set_visible("true");

                p.Static05.set_visible("true");

                p.Static05_01.set_visible("true");

                p.Static05_02.set_visible("true");

                p.Static05_03.set_visible("true");

                p.Panel04_01.set_visible("true");

                p.Static06.set_visible("true");
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
        this.registerScript("comp01_idn04.xfdl", function() {

        this.idn04_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.idn04_onload,this);
        };
        this.loadIncludeScript("comp01_idn04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
