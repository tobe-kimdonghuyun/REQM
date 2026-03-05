(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("pattern06");
            this.set_titletext("상세 정보 확인");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,3030);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_infor", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "CATEGORY","type" : "STRING","size" : "256"},{"id" : "CASE01","type" : "STRING","size" : "256"},{"id" : "CASE02","type" : "STRING","size" : "256"}]},"Rows" : [{"CATEGORY" : "국민기초생활보장 생계 또는 의료급여 수급자","CASE01" : "22 만원","CASE02" : "11 만원"},{"CATEGORY" : "국민기초생활보장 주거 또는 교육급여 수급자 및 차상위계층","CASE01" : "17 만원","CASE02" : "11 만원"},{"CATEGORY" : "보장시설수급자(생계, 의료)","CASE01" : "9 만원","CASE02" : "3 만원"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Update", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "DATE","type" : "STRING","size" : "256"},{"id" : "VALUE","type" : "STRING","size" : "256"}]},"Rows" : [{"DATE" : "2023년 12월 4일","VALUE" : "2024년 기준 소득 금액 반영"},{"DATE" : "2021년 11월 12일","VALUE" : "최초 등록"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staH2","0","0","235","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("상세 정보 확인");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("height");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("staDivider","staH2:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staEtit","staDivider:15","15","185","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Check Detail");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","85",null,"126","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("상세 정보는 특정한 주제에 관한 정보를 제공하는 패턴으로, 효과적인 정보 전달을 위해 텍스트 이외에 다양한 시각적 요소들이 활용된다. 사용자들은 콘텐츠 목록에서 콘텐츠 제목이나 요약 정보를 포함한 링크를 통해 상세 정보에 접근하기 때문에, 사용자가 예상하는 정보를 명확하고 간결하게 전달할 수 있어야 한다.");
            obj.set_cssclass("sta_WF_Descript");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","Static00:80","150","60",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("구조");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","0","Static00_01:80","239","60",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("장애아동수당");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","Static00_02:24",null,"77","208",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("장애로 인하여 생활이 어려운 장애아동이 보다 편안한 생활을 할 수 있도록 지원합니다.");
            obj.set_cssclass("sta_WF_TitDetail");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("Div00",null,"Static01:48","168","402","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div00");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","3","0","160","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("이 페이지의 구성");
            obj.set_cssclass("sta_WF_PnavCap");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","3","24","160","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("장애아동수당");
            obj.set_cssclass("sta_WF_PnavTit");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01","3","101","160","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("서비스 상세");
            obj.set_cssclass("btn_WF_Pnav");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01_00","3","136","160","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("신청 방법 및 절차");
            obj.set_cssclass("btn_WF_Pnav");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01_01","3","171","160","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("제출 서류");
            obj.set_cssclass("btn_WF_Pnav");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01_02","3","206","160","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("함께 신청하는 서비스");
            obj.set_cssclass("btn_WF_Pnav");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01_03","3","241","160","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("부가정보");
            obj.set_cssclass("btn_WF_Pnav");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01_04","3","276","160","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("정보 변경 내역");
            obj.set_cssclass("btn_WF_Pnav");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","3","323","160","48",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("온라인 신청하기");
            obj.set_cssclass("btn_WF_Crud01");
            obj.set_visible("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","0","379","165","23",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("장애아동수당 외 <b v=\'true\'><fc v=\'#1E2124\'>1건</fc></b>");
            obj.set_cssclass("sta_WF_PnavDescrp");
            obj.set_usedecorate("true");
            obj.set_visible("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01_05","3","66","160","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("서비스 개요");
            obj.set_cssclass("btn_WF_PnavS");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","Static01:48","300","48",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("서비스 개요");
            obj.set_cssclass("sta_WF_ParaH3_pc");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","Static01_00:24",null,"24","208",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_Divider");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","Static03:0","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("서비스 대상");
            obj.set_cssclass("sta_WF_Para17B");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","144","Static03:0","221","26",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("18세~20세 미만 등록 장애인");
            obj.set_cssclass("sta_WF_Para17");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01","0","Static02:16","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("서비스 유형");
            obj.set_cssclass("sta_WF_Para17B");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_05","144","Static02_00:16","221","26",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("현금 지급 (매 월)");
            obj.set_cssclass("sta_WF_Para17");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02","0","Static02_01:16","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("선정 기준");
            obj.set_cssclass("sta_WF_Para17B");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_06","144","Static02_05:16","221","26",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("장애 · 연령 · 소득");
            obj.set_cssclass("sta_WF_Para17");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_03","0","Static02_02:16","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("신청 방법");
            obj.set_cssclass("sta_WF_Para17B");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_07","144","Static02_06:16",null,"26","208",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("복지로 PC/모바일웹 온라인 신청");
            obj.set_cssclass("sta_WF_Para17");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_08","144","Static02_07:8",null,"26","208",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("복지로 모바일 앱 온라인 신청");
            obj.set_cssclass("sta_WF_Para17");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_09","144","Static02_08:8",null,"26","208",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("오프라인 신청");
            obj.set_cssclass("sta_WF_Para17");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_04","0","Static02_03:84","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("문의처");
            obj.set_cssclass("sta_WF_Para17B");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_10","144","Static02_09:16",null,"26","208",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("국번 없이 129 (보건복지부 장애인자립기반과)");
            obj.set_cssclass("sta_WF_Para17");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","0","Static02_10:24",null,"80","208",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_Divider");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_01","0","Static03_00:0","200","48",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("서비스 상세");
            obj.set_cssclass("sta_WF_ParaH3_pc");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_02","0","Static03_01:40","300","37",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("제공 내용");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_03","0","Static03_02:20",null,"52","208",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("장애아동수당은 현금 지급형 서비스로 한 달에 한 번, 현금으로 지급합니다. 지급 금액은 장애 유형이나 소득 수준에 따라 달라질 수 있습니다.");
            obj.set_cssclass("sta_WF_Para17");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","Static03_03:16",null,"211","208",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_binddataset("ds_infor");
            obj.set_autofittype("col");
            obj.set_tabstop("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"230\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"57\"/></Rows><Band id=\"head\"><Cell text=\"대상인 구분\"/><Cell col=\"1\" text=\"중증 장애인\" cssclass=\"cell_WF_Right\"/><Cell col=\"2\" text=\"경증 장애인\" cssclass=\"cell_WF_Right\"/></Band><Band id=\"body\"><Cell text=\"bind:CATEGORY\" wordWrap=\"char\"/><Cell col=\"1\" text=\"bind:CASE01\" cssclass=\"cell_WF_Right\"/><Cell col=\"2\" text=\"bind:CASE02\" cssclass=\"cell_WF_Right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_04","0","Grid00:64","300","36",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("지원 대상 선정 기준");
            obj.set_cssclass("sta_WF_ParaH3_pc");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_05","0","Static03_04:24","300","29",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("장애");
            obj.set_cssclass("sta_WF_Para19B");
            obj.set_accessibilityrole("heading5");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_06","0","Static03_05:16",null,"76","208",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("⦁   [장애인복지법] 제32조에 따라 등록한 장애인(중증장애인, 경증장애인)을 대상으로 합니다. \r\n⦁   신청일을 기준으로 장애인 등록이 완료되어 있어야 합니다.");
            obj.set_cssclass("sta_WF_TxtlstUL01");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_07","0","Static03_06:4",null,"68","208",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("-   중증장애인: 장애인연금법상 중증장애인에 해당\r\n-   경증장애인: 장애인연금법상 중증장애인에 해당하지 않음");
            obj.set_cssclass("sta_WF_TxtlstLv02");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","35","Static03_07:44",null,"112","208",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_spacing("16px");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pnl_WF_Addinf");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static04\"/><PanelItem id=\"PanelItem01\" componentid=\"Static05\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","35","1886","100%","26",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("참고");
            obj.set_cssclass("sta_WF_InforboxB");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","56","1923","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("중증장애인은 장애인연금법상 중증장애인으로 장애유형별 의학적 판정기준에 부합하거나 장애 정도를 2개 이상 받은 사람으로서 그 장애 정도 중 하나가 심한 경우를 의미합니다.");
            obj.set_cssclass("sta_WF_Addinfor15GR");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","0","Panel00:80","274","48",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("부가 정보");
            obj.set_cssclass("sta_WF_ParaH3_pc");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00","0","Static06:40","274","36",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("참고서식");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","0","Static06_00:20",null,"137","208",null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_cssclass("pnl_WF_File");
            obj.set_spacing("16px 16px 16px 16px");
            obj.set_flexmainaxisalign("start");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxisalign("center");
            obj.set_type("vertical");
            obj.set_verticalgap("12");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Div01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","16","18","100%","32",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_flexmainaxisalign("spacebetween");
            obj.set_flexcrossaxisalign("center");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static06_03\"/><PanelItem id=\"PanelItem01\" componentid=\"Div02_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_03","40","438","75%","26",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("2023년 장애인연금 사업안내 [pdf, 1.2MB]");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("Div02_00","40","438","220","32",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("Div02");
            obj.set_visible("true");
            obj.set_accessibilityenable("false");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_02",null,"0","62","32","0",null,null,null,null,null,this.Div02_00.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Delete");
            obj.set_visible("false");
            obj.set_fittocontents("width");
            this.Div02_00.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00",null,"0","32","32","0",null,null,null,null,null,this.Div02_00.form);
            obj.set_taborder("1");
            obj.set_image("url(\'theme::NexaKRDS/images/img_WF_SpinnerTran.gif\')");
            obj.set_cssclass("img_WF_Trans");
            obj.set_stretch("fit");
            obj.set_visible("false");
            this.Div02_00.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00_00",null,"0","32","32","0",null,null,null,null,null,this.Div02_00.form);
            obj.set_taborder("2");
            obj.set_image("url(\'theme::NexaKRDS/images/img_WF_Complete.png\')");
            obj.set_cssclass("img_WF_Trans");
            obj.set_stretch("fixaspectratio");
            obj.set_visible("false");
            this.Div02_00.addChild(obj.name, obj);

            obj = new Button("Button00_02_00_00",null,"0","103","32","103",null,null,null,null,null,this.Div02_00.form);
            obj.set_taborder("3");
            obj.set_text("다운로드");
            obj.set_cssclass("btn_WF_DownloadR");
            obj.set_visible("true");
            this.Div02_00.addChild(obj.name, obj);

            obj = new Button("Button00_02_00",null,"0","96","32","0",null,null,null,null,null,this.Div02_00.form);
            obj.set_taborder("4");
            obj.set_text("바로보기");
            obj.set_cssclass("btn_WF_MoreL");
            obj.set_visible("true");
            this.Div02_00.addChild(obj.name, obj);

            obj = new Div("Div01_00","61","638","100%","64",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("Div01");
            obj.set_cssclass("div_WF_inforbox");
            obj.set_visible("false");
            obj.set_accessibilityenable("false");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","12","100%",null,null,"0",null,null,null,null,this.Div01_00.form);
            obj.set_taborder("0");
            obj.set_text("등록 가능한 파일 용량을 초과하였습니다. \r\n20MB 미만의 파일만 등록할 수 있습니다.");
            obj.set_cssclass("sta_WF_Error");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static07","0","Panel00_00:64","153","36",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("관련 웹사이트");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_08","0","Static07:24","34","26",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("⦁    ");
            obj.set_cssclass("sta_WF_TxtlstUL01");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","Static03_08:0","Static07:24","208","26",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("보건복지상담센터 웹사이트");
            obj.set_cssclass("btn_WF_LinklineBl");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_09","0","Static03_08:16","34","26",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("⦁    ");
            obj.set_cssclass("sta_WF_TxtlstUL01");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","Static03_09:0","Button00:16","200","26",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("보건복지부 대표 웹사이트");
            obj.set_cssclass("btn_WF_LinklineBl");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00","0","Button02:64","153","36",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("근거 법령");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_10","0","Static07_00:24","34","26",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("⦁    ");
            obj.set_cssclass("sta_WF_TxtlstUL01");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","34","Static07_00:24","286","26",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("장애인복지법(국가법령통합관리시스템)");
            obj.set_cssclass("btn_WF_LinklineBl");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","0","Button03:64","153","36",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("정보 변경 내역");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","0","Static07_00_00:24",null,"154","208",null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_binddataset("ds_Update");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"180\"/><Column size=\"500\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"57\"/></Rows><Band id=\"head\"><Cell text=\"변경 일자\"/><Cell col=\"1\" text=\"변경 내용\"/></Band><Band id=\"body\"><Cell text=\"bind:DATE\"/><Cell col=\"1\" text=\"bind:VALUE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("이 페이지의 구성");
                p.Static00.set_cssclass("sta_WF_PnavCap");
                p.Static00.move("3","0","160","20",null,null);

                p.Static03.set_taborder("1");
                p.Static03.set_text("장애아동수당");
                p.Static03.set_cssclass("sta_WF_PnavTit");
                p.Static03.move("3","24","160","26",null,null);

                p.Button01.set_taborder("2");
                p.Button01.set_text("서비스 상세");
                p.Button01.set_cssclass("btn_WF_Pnav");
                p.Button01.move("3","101","160","31",null,null);

                p.Button01_00.set_taborder("3");
                p.Button01_00.set_text("신청 방법 및 절차");
                p.Button01_00.set_cssclass("btn_WF_Pnav");
                p.Button01_00.move("3","136","160","31",null,null);

                p.Button01_01.set_taborder("4");
                p.Button01_01.set_text("제출 서류");
                p.Button01_01.set_cssclass("btn_WF_Pnav");
                p.Button01_01.move("3","171","160","31",null,null);

                p.Button01_02.set_taborder("5");
                p.Button01_02.set_text("함께 신청하는 서비스");
                p.Button01_02.set_cssclass("btn_WF_Pnav");
                p.Button01_02.move("3","206","160","31",null,null);

                p.Button01_03.set_taborder("6");
                p.Button01_03.set_text("부가정보");
                p.Button01_03.set_cssclass("btn_WF_Pnav");
                p.Button01_03.move("3","241","160","31",null,null);

                p.Button01_04.set_taborder("7");
                p.Button01_04.set_text("정보 변경 내역");
                p.Button01_04.set_cssclass("btn_WF_Pnav");
                p.Button01_04.move("3","276","160","31",null,null);

                p.Button00.set_taborder("8");
                p.Button00.set_text("온라인 신청하기");
                p.Button00.set_cssclass("btn_WF_Crud01");
                p.Button00.set_visible("true");
                p.Button00.move("3","323","160","48",null,null);

                p.Static02.set_taborder("9");
                p.Static02.set_text("장애아동수당 외 <b v=\'true\'><fc v=\'#1E2124\'>1건</fc></b>");
                p.Static02.set_cssclass("sta_WF_PnavDescrp");
                p.Static02.set_usedecorate("true");
                p.Static02.set_visible("true");
                p.Static02.move("0","379","165","23",null,null);

                p.Button01_05.set_taborder("10");
                p.Button01_05.set_text("서비스 개요");
                p.Button01_05.set_cssclass("btn_WF_PnavS");
                p.Button01_05.move("3","66","160","31",null,null);
            	}
            );
            this.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form
            obj = new Layout("Layout0","",0,0,this.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button01_05.move("3","66",null,"31","0",null);

                p.Button01.move("3","101",null,"31","0",null);

                p.Button01_00.move("3","136",null,"31","0",null);

                p.Button01_01.move("3","171",null,"31","0",null);

                p.Button01_02.move("3","206",null,"31","0",null);

                p.Button01_03.move("3","241",null,"31","0",null);

                p.Button01_04.move("3","276",null,"31","0",null);

                p.Static03.move("3","24",null,"26","0",null);

                p.Static00.move("3","0",null,"20","0",null);

                p.Button00.set_visible("false");

                p.Static02.set_visible("false");
            	}
            );
            this.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div02_00.form
            obj = new Layout("default","",0,0,this.Div02_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00_02.set_taborder("0");
                p.Button00_02.set_text("삭제");
                p.Button00_02.set_cssclass("btn_WF_Delete");
                p.Button00_02.set_visible("false");
                p.Button00_02.set_fittocontents("width");
                p.Button00_02.move(null,"0","62","32","0",null);

                p.ImageViewer00.set_taborder("1");
                p.ImageViewer00.set_image("url(\'theme::NexaKRDS/images/img_WF_SpinnerTran.gif\')");
                p.ImageViewer00.set_cssclass("img_WF_Trans");
                p.ImageViewer00.set_stretch("fit");
                p.ImageViewer00.set_visible("false");
                p.ImageViewer00.move(null,"0","32","32","0",null);

                p.ImageViewer00_00.set_taborder("2");
                p.ImageViewer00_00.set_image("url(\'theme::NexaKRDS/images/img_WF_Complete.png\')");
                p.ImageViewer00_00.set_cssclass("img_WF_Trans");
                p.ImageViewer00_00.set_stretch("fixaspectratio");
                p.ImageViewer00_00.set_visible("false");
                p.ImageViewer00_00.move(null,"0","32","32","0",null);

                p.Button00_02_00_00.set_taborder("3");
                p.Button00_02_00_00.set_text("다운로드");
                p.Button00_02_00_00.set_cssclass("btn_WF_DownloadR");
                p.Button00_02_00_00.set_visible("true");
                p.Button00_02_00_00.move(null,"0","103","32","103",null);

                p.Button00_02_00.set_taborder("4");
                p.Button00_02_00.set_text("바로보기");
                p.Button00_02_00.set_cssclass("btn_WF_MoreL");
                p.Button00_02_00.set_visible("true");
                p.Button00_02_00.move(null,"0","96","32","0",null);
            	}
            );
            obj.set_type("default");
            this.Div02_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div02_00.form
            obj = new Layout("Layout0","",0,0,this.Div02_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("default");
            this.Div02_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div02_00.form
            obj = new Layout("Layout0","",0,0,this.Div02_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("default");
            this.Div02_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div01_00.form
            obj = new Layout("default","",0,0,this.Div01_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("등록 가능한 파일 용량을 초과하였습니다. \r\n20MB 미만의 파일만 등록할 수 있습니다.");
                p.Static00.set_cssclass("sta_WF_Error");
                p.Static00.move("0","12","100%",null,null,"0");
            	}
            );
            this.Div01_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div01_00.form
            obj = new Layout("Layout0","",0,0,this.Div01_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div01_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div01_00.form
            obj = new Layout("Layout0","",0,0,this.Div01_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div01_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",888,3030,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("상세 정보 확인");

                p.staH2.set_taborder("0");
                p.staH2.set_text("상세 정보 확인");
                p.staH2.set_cssclass("sta_WF_H2_pc");
                p.staH2.set_fittocontents("height");
                p.staH2.set_accessibilityrole("heading2");
                p.staH2.move("0","0","235","60",null,null);

                p.staDivider.set_taborder("1");
                p.staDivider.set_cssclass("sta_WF_line");
                p.staDivider.set_accessibilityenable("false");
                p.staDivider.move("staH2:15","20","1","21",null,null);

                p.staEtit.set_taborder("2");
                p.staEtit.set_text("Check Detail");
                p.staEtit.set_cssclass("sta_WF_ParaH4_pc");
                p.staEtit.move("staDivider:15","15","185","30",null,null);

                p.Static00.set_taborder("3");
                p.Static00.set_text("상세 정보는 특정한 주제에 관한 정보를 제공하는 패턴으로, 효과적인 정보 전달을 위해 텍스트 이외에 다양한 시각적 요소들이 활용된다. 사용자들은 콘텐츠 목록에서 콘텐츠 제목이나 요약 정보를 포함한 링크를 통해 상세 정보에 접근하기 때문에, 사용자가 예상하는 정보를 명확하고 간결하게 전달할 수 있어야 한다.");
                p.Static00.set_cssclass("sta_WF_Descript");
                p.Static00.set_fittocontents("height");
                p.Static00.move("0","85",null,"126","0",null);

                p.Static00_01.set_taborder("4");
                p.Static00_01.set_text("구조");
                p.Static00_01.set_cssclass("sta_WF_H2_pc");
                p.Static00_01.set_accessibilityrole("heading3");
                p.Static00_01.move("0","Static00:80","150","60",null,null);

                p.Static00_02.set_taborder("5");
                p.Static00_02.set_text("장애아동수당");
                p.Static00_02.set_cssclass("sta_WF_H2_pc");
                p.Static00_02.set_accessibilityrole("heading2");
                p.Static00_02.move("0","Static00_01:80","239","60",null,null);

                p.Static01.set_taborder("6");
                p.Static01.set_text("장애로 인하여 생활이 어려운 장애아동이 보다 편안한 생활을 할 수 있도록 지원합니다.");
                p.Static01.set_cssclass("sta_WF_TitDetail");
                p.Static01.set_fittocontents("height");
                p.Static01.move("0","Static00_02:24",null,"77","208",null);

                p.Div00.set_taborder("7");
                p.Div00.set_text("Div00");
                p.Div00.set_fittocontents("height");
                p.Div00.move(null,"Static01:48","168","402","0",null);

                p.Static01_00.set_taborder("8");
                p.Static01_00.set_text("서비스 개요");
                p.Static01_00.set_cssclass("sta_WF_ParaH3_pc");
                p.Static01_00.set_accessibilityrole("heading3");
                p.Static01_00.move("0","Static01:48","300","48",null,null);

                p.Static03.set_taborder("9");
                p.Static03.set_cssclass("sta_WF_Divider");
                p.Static03.set_accessibilityenable("false");
                p.Static03.move("0","Static01_00:24",null,"24","208",null);

                p.Static02.set_taborder("10");
                p.Static02.set_text("서비스 대상");
                p.Static02.set_cssclass("sta_WF_Para17B");
                p.Static02.move("0","Static03:0","120","26",null,null);

                p.Static02_00.set_taborder("11");
                p.Static02_00.set_text("18세~20세 미만 등록 장애인");
                p.Static02_00.set_cssclass("sta_WF_Para17");
                p.Static02_00.set_fittocontents("height");
                p.Static02_00.move("144","Static03:0","221","26",null,null);

                p.Static02_01.set_taborder("12");
                p.Static02_01.set_text("서비스 유형");
                p.Static02_01.set_cssclass("sta_WF_Para17B");
                p.Static02_01.move("0","Static02:16","120","26",null,null);

                p.Static02_05.set_taborder("13");
                p.Static02_05.set_text("현금 지급 (매 월)");
                p.Static02_05.set_cssclass("sta_WF_Para17");
                p.Static02_05.set_fittocontents("height");
                p.Static02_05.move("144","Static02_00:16","221","26",null,null);

                p.Static02_02.set_taborder("14");
                p.Static02_02.set_text("선정 기준");
                p.Static02_02.set_cssclass("sta_WF_Para17B");
                p.Static02_02.move("0","Static02_01:16","120","26",null,null);

                p.Static02_06.set_taborder("15");
                p.Static02_06.set_text("장애 · 연령 · 소득");
                p.Static02_06.set_cssclass("sta_WF_Para17");
                p.Static02_06.set_fittocontents("height");
                p.Static02_06.move("144","Static02_05:16","221","26",null,null);

                p.Static02_03.set_taborder("16");
                p.Static02_03.set_text("신청 방법");
                p.Static02_03.set_cssclass("sta_WF_Para17B");
                p.Static02_03.move("0","Static02_02:16","120","26",null,null);

                p.Static02_07.set_taborder("17");
                p.Static02_07.set_text("복지로 PC/모바일웹 온라인 신청");
                p.Static02_07.set_cssclass("sta_WF_Para17");
                p.Static02_07.set_fittocontents("height");
                p.Static02_07.move("144","Static02_06:16",null,"26","208",null);

                p.Static02_08.set_taborder("18");
                p.Static02_08.set_text("복지로 모바일 앱 온라인 신청");
                p.Static02_08.set_cssclass("sta_WF_Para17");
                p.Static02_08.set_fittocontents("height");
                p.Static02_08.move("144","Static02_07:8",null,"26","208",null);

                p.Static02_09.set_taborder("19");
                p.Static02_09.set_text("오프라인 신청");
                p.Static02_09.set_cssclass("sta_WF_Para17");
                p.Static02_09.set_fittocontents("height");
                p.Static02_09.move("144","Static02_08:8",null,"26","208",null);

                p.Static02_04.set_taborder("20");
                p.Static02_04.set_text("문의처");
                p.Static02_04.set_cssclass("sta_WF_Para17B");
                p.Static02_04.move("0","Static02_03:84","120","26",null,null);

                p.Static02_10.set_taborder("21");
                p.Static02_10.set_text("국번 없이 129 (보건복지부 장애인자립기반과)");
                p.Static02_10.set_cssclass("sta_WF_Para17");
                p.Static02_10.set_fittocontents("height");
                p.Static02_10.move("144","Static02_09:16",null,"26","208",null);

                p.Static03_00.set_taborder("22");
                p.Static03_00.set_cssclass("sta_WF_Divider");
                p.Static03_00.set_accessibilityenable("false");
                p.Static03_00.move("0","Static02_10:24",null,"80","208",null);

                p.Static03_01.set_taborder("23");
                p.Static03_01.set_text("서비스 상세");
                p.Static03_01.set_cssclass("sta_WF_ParaH3_pc");
                p.Static03_01.set_accessibilityrole("heading3");
                p.Static03_01.move("0","Static03_00:0","200","48",null,null);

                p.Static03_02.set_taborder("24");
                p.Static03_02.set_text("제공 내용");
                p.Static03_02.set_cssclass("sta_WF_ParaH4_pc");
                p.Static03_02.set_accessibilityrole("heading4");
                p.Static03_02.move("0","Static03_01:40","300","37",null,null);

                p.Static03_03.set_taborder("25");
                p.Static03_03.set_text("장애아동수당은 현금 지급형 서비스로 한 달에 한 번, 현금으로 지급합니다. 지급 금액은 장애 유형이나 소득 수준에 따라 달라질 수 있습니다.");
                p.Static03_03.set_cssclass("sta_WF_Para17");
                p.Static03_03.set_fittocontents("height");
                p.Static03_03.move("0","Static03_02:20",null,"52","208",null);

                p.Grid00.set_taborder("26");
                p.Grid00.set_binddataset("ds_infor");
                p.Grid00.set_autofittype("col");
                p.Grid00.set_tabstop("false");
                p.Grid00.move("0","Static03_03:16",null,"211","208",null);

                p.Static03_04.set_taborder("27");
                p.Static03_04.set_text("지원 대상 선정 기준");
                p.Static03_04.set_cssclass("sta_WF_ParaH3_pc");
                p.Static03_04.set_accessibilityrole("heading4");
                p.Static03_04.move("0","Grid00:64","300","36",null,null);

                p.Static03_05.set_taborder("28");
                p.Static03_05.set_text("장애");
                p.Static03_05.set_cssclass("sta_WF_Para19B");
                p.Static03_05.set_accessibilityrole("heading5");
                p.Static03_05.move("0","Static03_04:24","300","29",null,null);

                p.Static03_06.set_taborder("29");
                p.Static03_06.set_text("⦁   [장애인복지법] 제32조에 따라 등록한 장애인(중증장애인, 경증장애인)을 대상으로 합니다. \r\n⦁   신청일을 기준으로 장애인 등록이 완료되어 있어야 합니다.");
                p.Static03_06.set_cssclass("sta_WF_TxtlstUL01");
                p.Static03_06.move("0","Static03_05:16",null,"76","208",null);

                p.Static03_07.set_taborder("30");
                p.Static03_07.set_text("-   중증장애인: 장애인연금법상 중증장애인에 해당\r\n-   경증장애인: 장애인연금법상 중증장애인에 해당하지 않음");
                p.Static03_07.set_cssclass("sta_WF_TxtlstLv02");
                p.Static03_07.move("0","Static03_06:4",null,"68","208",null);

                p.Panel00.set_taborder("31");
                p.Panel00.set_spacing("16px");
                p.Panel00.set_verticalgap("8");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_cssclass("pnl_WF_Addinf");
                p.Panel00.move("35","Static03_07:44",null,"112","208",null);

                p.Static04.set_taborder("32");
                p.Static04.set_text("참고");
                p.Static04.set_cssclass("sta_WF_InforboxB");
                p.Static04.move("35","1886","100%","26",null,null);

                p.Static05.set_taborder("33");
                p.Static05.set_text("중증장애인은 장애인연금법상 중증장애인으로 장애유형별 의학적 판정기준에 부합하거나 장애 정도를 2개 이상 받은 사람으로서 그 장애 정도 중 하나가 심한 경우를 의미합니다.");
                p.Static05.set_cssclass("sta_WF_Addinfor15GR");
                p.Static05.move("56","1923","100%","46",null,null);

                p.Static06.set_taborder("34");
                p.Static06.set_text("부가 정보");
                p.Static06.set_cssclass("sta_WF_ParaH3_pc");
                p.Static06.set_accessibilityrole("heading3");
                p.Static06.move("0","Panel00:80","274","48",null,null);

                p.Static06_00.set_taborder("35");
                p.Static06_00.set_text("참고서식");
                p.Static06_00.set_cssclass("sta_WF_ParaH4_pc");
                p.Static06_00.set_accessibilityrole("heading4");
                p.Static06_00.move("0","Static06:40","274","36",null,null);

                p.Panel00_00.set_taborder("36");
                p.Panel00_00.set_cssclass("pnl_WF_File");
                p.Panel00_00.set_spacing("16px 16px 16px 16px");
                p.Panel00_00.set_flexmainaxisalign("start");
                p.Panel00_00.set_fittocontents("height");
                p.Panel00_00.set_flexcrossaxisalign("center");
                p.Panel00_00.set_type("vertical");
                p.Panel00_00.set_verticalgap("12");
                p.Panel00_00.move("0","Static06_00:20",null,"137","208",null);

                p.Panel01_00.set_taborder("37");
                p.Panel01_00.set_flexmainaxisalign("spacebetween");
                p.Panel01_00.set_flexcrossaxisalign("center");
                p.Panel01_00.set_fittocontents("height");
                p.Panel01_00.move("16","18","100%","32",null,null);

                p.Static06_03.set_taborder("38");
                p.Static06_03.set_text("2023년 장애인연금 사업안내 [pdf, 1.2MB]");
                p.Static06_03.set_fittocontents("height");
                p.Static06_03.move("40","438","75%","26",null,null);

                p.Div02_00.set_taborder("39");
                p.Div02_00.set_text("Div02");
                p.Div02_00.set_visible("true");
                p.Div02_00.set_accessibilityenable("false");
                p.Div02_00.set_tabstop("false");
                p.Div02_00.move("40","438","220","32",null,null);

                p.Div01_00.set_taborder("40");
                p.Div01_00.set_text("Div01");
                p.Div01_00.set_cssclass("div_WF_inforbox");
                p.Div01_00.set_visible("false");
                p.Div01_00.set_accessibilityenable("false");
                p.Div01_00.set_tabstop("false");
                p.Div01_00.move("61","638","100%","64",null,null);

                p.Static07.set_taborder("41");
                p.Static07.set_text("관련 웹사이트");
                p.Static07.set_cssclass("sta_WF_ParaH4_pc");
                p.Static07.set_accessibilityrole("heading4");
                p.Static07.move("0","Panel00_00:64","153","36",null,null);

                p.Static03_08.set_taborder("42");
                p.Static03_08.set_text("⦁    ");
                p.Static03_08.set_cssclass("sta_WF_TxtlstUL01");
                p.Static03_08.move("0","Static07:24","34","26",null,null);

                p.Button00.set_taborder("43");
                p.Button00.set_text("보건복지상담센터 웹사이트");
                p.Button00.set_cssclass("btn_WF_LinklineBl");
                p.Button00.move("Static03_08:0","Static07:24","208","26",null,null);

                p.Static03_09.set_taborder("44");
                p.Static03_09.set_text("⦁    ");
                p.Static03_09.set_cssclass("sta_WF_TxtlstUL01");
                p.Static03_09.move("0","Static03_08:16","34","26",null,null);

                p.Button02.set_taborder("45");
                p.Button02.set_text("보건복지부 대표 웹사이트");
                p.Button02.set_cssclass("btn_WF_LinklineBl");
                p.Button02.move("Static03_09:0","Button00:16","200","26",null,null);

                p.Static07_00.set_taborder("46");
                p.Static07_00.set_text("근거 법령");
                p.Static07_00.set_cssclass("sta_WF_ParaH4_pc");
                p.Static07_00.set_accessibilityrole("heading4");
                p.Static07_00.move("0","Button02:64","153","36",null,null);

                p.Static03_10.set_taborder("47");
                p.Static03_10.set_text("⦁    ");
                p.Static03_10.set_cssclass("sta_WF_TxtlstUL01");
                p.Static03_10.move("0","Static07_00:24","34","26",null,null);

                p.Button03.set_taborder("48");
                p.Button03.set_text("장애인복지법(국가법령통합관리시스템)");
                p.Button03.set_cssclass("btn_WF_LinklineBl");
                p.Button03.move("34","Static07_00:24","286","26",null,null);

                p.Static07_00_00.set_taborder("49");
                p.Static07_00_00.set_text("정보 변경 내역");
                p.Static07_00_00.set_cssclass("sta_WF_ParaH4_pc");
                p.Static07_00_00.set_accessibilityrole("heading4");
                p.Static07_00_00.move("0","Button03:64","153","36",null,null);

                p.Grid01.set_taborder("50");
                p.Grid01.set_binddataset("ds_Update");
                p.Grid01.set_autofittype("col");
                p.Grid01.move("0","Static07_00_00:24",null,"154","208",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Desktop_screen,mobile_small",480,3490,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.move("0","85",null,"178","0",null);

                p.Static01.set_text("장애로 인하여 생활이 어려운 장애아동이 보다 편안한 생활을 할 수 있도록 지원합니다.");
                p.Static01.move("0","Static00_02:24",null,"77","0",null);

                p.Div00.set_text("Div00");
                p.Div00.move("0","Static01:32",null,"402","0",null);

                p.Static01_00.move("0","Div00:32",null,"48","0",null);

                p.Static03.move("0","Static01_00:16",null,"24","0",null);

                p.Static02.move("0","Static03:0","120","26",null,null);

                p.Static02_00.set_text("18세~20세 미만 등록 장애인");
                p.Static02_00.move("144","Static03:0",null,"26","0",null);

                p.Static02_01.move("0","Static02:12","120","26",null,null);

                p.Static02_02.move("0","Static02_01:12","120","26",null,null);

                p.Static02_03.move("0","Static02_02:12","120","26",null,null);

                p.Static02_04.move("0","Static02_09:12","120","26",null,null);

                p.Static02_05.move("144","Static02_00:12",null,"26","0",null);

                p.Static02_06.move("144","Static02_05:12",null,"26","0",null);

                p.Static02_07.move("144","Static02_06:12",null,"26","0",null);

                p.Static02_08.move("144","Static02_07:8",null,"26","0",null);

                p.Static02_09.move("144","Static02_08:8",null,"26","0",null);

                p.Static02_10.move("144","Static02_09:12",null,"26","0",null);

                p.Static03_00.move("0","1460",null,"40","0",null);

                p.Static03_02.move("0","Static03_01:40",null,"36","0",null);

                p.Static03_03.move("0","Static03_02:20",null,"52","0",null);

                p.Grid00.move("0","Static03_03:20",null,"211","0",null);

                p.Static03_06.set_text("⦁   [장애인복지법] 제32조에 따라 등록한 장애인(중증장애인, 경증장애인)을 대상으로 합니다. \r\n⦁   신청일을 기준으로 장애인 등록이 완료되어 있어야 합니다.");
                p.Static03_06.move("0","Static03_05:0",null,"76","0",null);

                p.Static03_04.move("0","Grid00:32","300","36",null,null);

                p.Static03_05.move("0","Static03_04:16","300","29",null,null);

                p.Static03_07.move("0","Static03_06:4",null,"68","0",null);

                p.Panel00.move("35","Static03_07:44",null,"138","0",null);

                p.Static05.move("56","1923","100%","70",null,null);

                p.Static06.move("0","Panel00:40","153","48",null,null);

                p.Static06_00.move("0","Static06:40","100","36",null,null);

                p.Panel00_00.move("0","Static06_00:20",null,"137","0",null);

                p.Static06_03.move("40","438","100%","26",null,null);

                p.Panel01_00.set_flexwrap("wrap");
                p.Panel01_00.set_verticalgap("8");
                p.Panel01_00.set_flexmainaxisalign("end");
                p.Panel01_00.set_fittocontents("none");
                p.Panel01_00.move("16","18","100%","70",null,null);

                p.Grid01.move("0","Static07_00_00:24",null,"154","0",null);

                p.Static00_01.move("0","Static00:80",null,"60","0",null);

                p.Static00_02.move("0","Static00_01:80",null,"60","0",null);

                p.Static03_01.move("0","Static03_00:0",null,"48","0",null);
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
        this.registerScript("pattern06.xfdl", function() {

        this.pattern06_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.pattern06_onload,this);
            this.Div00.form.Static02.addEventHandler("onclick",this.Div00_Static02_onclick,this);
            this.Static03_06.addEventHandler("onclick",this.Static03_06_onclick,this);
            this.Static03_07.addEventHandler("onclick",this.Static03_06_onclick,this);
            this.Static03_08.addEventHandler("onclick",this.Static03_06_onclick,this);
            this.Static03_09.addEventHandler("onclick",this.Static03_06_onclick,this);
            this.Static03_10.addEventHandler("onclick",this.Static03_06_onclick,this);
        };
        this.loadIncludeScript("pattern06.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
