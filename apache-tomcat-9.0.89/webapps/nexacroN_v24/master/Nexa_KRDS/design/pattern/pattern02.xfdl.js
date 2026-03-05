(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("pattern02");
            this.set_titletext("도움");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,6950);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "BODY_TIL","type" : "STRING","size" : "256"},{"id" : "DETAIL_TXT","type" : "STRING","size" : "256"}]},"Rows" : [{"BODY_TIL" : "유의사항 확인하기","DETAIL_TXT" : "이 단계의 실습에서는 다음 내용을 안내합니다."},{"BODY_TIL" : "신청인 정보 입력하기","DETAIL_TXT" : "이 단계의 실습에서는 다음 내용을 안내합니다."}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staH2","0","0","70","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("도움");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("staDivider","staH2:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staEtit","staDivider:15","0","100","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Help");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","85",null,"126","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("도움 패턴은 사용자에게 서비스를 이용하는 동안 사용자 인터페이스의 작동 방식과 사용 방법, 진행 중인 과업 플로(Flow) 등과 관련된 도움 정보를 제공하는 데 사용되는 다양한 유형의 컴포넌트 조합이다. 사용자의 능숙도와 이용 맥락에 적합한 도움 컴포넌트를 설계하여 제공함으로써 사용자는 보다 쉽고 빠르게 서비스를 이해하고 이용할 수 있게 된다.");
            obj.set_cssclass("sta_WF_Descript");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","Static00:80","300","60",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("유형");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0","Static00_00:24","300","32",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("안내 영역");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","Static00_00_00:40","44","26",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("1단계");
            obj.set_cssclass("sta_WF_Point17B");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","Static01:7","Static00_00_00:40","57","26",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("/ 4단계");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","Static01_00:24","790","48",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("유의사항 확인");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","Static02:48",null,"448","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_StartInfor");
            obj.set_fittocontents("height");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","39","39","194","36",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("시작하기 전에");
            obj.set_cssclass("sta_WF_Before");
            obj.set_accessibilityrole("heading3");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","39","99",null,"87","39",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("주민등록 관련 신고는 행정청이 수리한 때부터 신고의 효력이 발생합니다. \r\n근무시간(18:00) 이후나 토요일, 공휴일에 신청하는 경우 다음 근무일(세대주 확인이 필요한 경우 세대주 확인 완료일)에 신청이 접수되어 담당자 확인 후 신고가 수리 또는 반려됩니다.");
            obj.set_cssclass("sta_WF_Para19RLeft");
            obj.set_fittocontents("height");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","39","Static01:48","149","29",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("본인확인 필요");
            obj.set_cssclass("sta_WF_Para19RChk");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00","39","Static02:16","149","29",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("인증서 필요");
            obj.set_cssclass("sta_WF_Para19RChk");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","39","Static02_00:16","426","29",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("세대주 정보(이름, 주민등록번호, 휴대전화번호) 필요");
            obj.set_cssclass("sta_WF_Para19RChk");
            obj.set_fittocontents("height");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button02","39","Static02_00_00:24","286","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("온라인 신청 유의사항 자세히 보기");
            obj.set_cssclass("btn_WF_DiscExpand");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","40","Button02:0","119","39",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_accessibilityenable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","Div00:80","300","38",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("섹션 헤딩 및 설명");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","Static00_01:40",null,"23","0",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("대한민국 디지털정부 사용자 로그인");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_01","0","Static00_01_00:16",null,"60","0",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("로그인 방식을 선택해주세요.");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","Static00_01_01:24",null,"87","0",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("통합 로그인을 사용해 보세요. 통합 로그인은 한 번의 회원가입과 로그인으로 연계된 모든 공공 서비스를 이용할 수 있는 인증 서비스입니다. \r\n한 번 로그인으로 모든 정부기관의 서비스를 이용하실 수 있습니다. ");
            obj.set_cssclass("sta_WF_Para19RTop");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","154","266","168","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("통합 로그인 사용");
            obj.set_cssclass("chk_WF_Switch");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01_01","336","266","220","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("키보드 보안 프로그램 사용");
            obj.set_cssclass("chk_WF_Switch");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","543","266","26","26",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_HelpEx");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","182","259","270","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"CheckBox01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Button01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","Static03:48",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_horizontalgap("24");
            obj.set_verticalgap("16");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxiswrapalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"CheckBox01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","476","1508","282","90",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("한번에 본인인증하고\r\n모든 서비스 이용하기");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_flexgrow("1");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Div("Div03_01","830","1508","486","201",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("Div03");
            obj.set_cssclass("div_WF_LoginOpt");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","31","31",null,"40","31",null,null,null,null,null,this.Div03_01.form);
            obj.set_taborder("0");
            obj.set_text("모바일 신분증");
            obj.set_cssclass("btn_WF_LoginOpt01");
            obj.set_accessibilityrole("heading4");
            this.Div03_01.addChild(obj.name, obj);

            obj = new Static("Static04","95","84",null,"52","71",null,null,null,null,null,this.Div03_01.form);
            obj.set_taborder("1");
            obj.set_text("행정안전부에서 제공하는 모바일 신분증 앱을 이용하여 로그인하기");
            obj.set_cssclass("sta_WF_aliTop");
            obj.set_fittocontents("height");
            this.Div03_01.addChild(obj.name, obj);

            obj = new Button("Button00","95","144",null,"26","71",null,null,null,null,null,this.Div03_01.form);
            obj.set_taborder("2");
            obj.set_text("모바일 신분증 발급하러 가기");
            obj.set_cssclass("btn_WF_More");
            this.Div03_01.addChild(obj.name, obj);

            obj = new Static("Static03","40","Button00:0","119","31",null,null,null,null,null,null,this.Div03_01.form);
            obj.set_taborder("3");
            obj.set_accessibilityenable("false");
            this.Div03_01.addChild(obj.name, obj);

            obj = new Div("Div03_00_00","830","1725","486","193",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("Div03");
            obj.set_cssclass("div_WF_LoginOpt");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","31","31",null,"40","31",null,null,null,null,null,this.Div03_00_00.form);
            obj.set_taborder("0");
            obj.set_text("공동·금융 인증서");
            obj.set_cssclass("btn_WF_LoginOpt02");
            obj.set_accessibilityrole("heading4");
            this.Div03_00_00.addChild(obj.name, obj);

            obj = new Static("Static04","95","84",null,"78","71",null,null,null,null,null,this.Div03_00_00.form);
            obj.set_taborder("1");
            obj.set_text("별도로 은행같은 금융기관이나 공식인증기관에서 발급받은 전자서명용 공인인증서 또는 금융 인증서를 이용하여 로그인하기");
            obj.set_flexgrow("1");
            obj.set_cssclass("sta_WF_aliTop");
            obj.set_fittocontents("height");
            this.Div03_00_00.addChild(obj.name, obj);

            obj = new Static("Static03","40","Static04:0","119","31",null,null,null,null,null,null,this.Div03_00_00.form);
            obj.set_taborder("2");
            obj.set_accessibilityenable("false");
            this.Div03_00_00.addChild(obj.name, obj);

            obj = new Div("Div03_00_00_00","830","1934","486","227",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("Div03");
            obj.set_cssclass("div_WF_LoginOpt");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","31","31",null,"40","31",null,null,null,null,null,this.Div03_00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("간편 인증");
            obj.set_cssclass("btn_WF_LoginOpt03");
            obj.set_accessibilityrole("heading4");
            this.Div03_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static04","95","84",null,"78","71",null,null,null,null,null,this.Div03_00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("네이버, 카카오, 또는 금융기관등 민간 전자서명 사업자가 제공하는 전자서명을 이용하여 로그인하기");
            obj.set_cssclass("sta_WF_aliTop");
            obj.set_fittocontents("height");
            this.Div03_00_00_00.addChild(obj.name, obj);

            obj = new Button("Button02","95","Static04:8",null,"26","31",null,null,null,null,null,this.Div03_00_00_00.form);
            obj.set_taborder("2");
            obj.set_text("이용 가능한 간편 인증 서비스 목록보기");
            obj.set_cssclass("btn_WF_DiscExpand");
            obj.set_fittocontents("height");
            this.Div03_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static03","141","Button02:0","119","31",null,null,null,null,"31",null,this.Div03_00_00_00.form);
            obj.set_taborder("3");
            obj.set_accessibilityenable("false");
            this.Div03_00_00_00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","830","1508","486","653",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_type("horizontal");
            obj.set_verticalgap("16");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Div03_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Div03_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Div03_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","0","Panel01:40",null,"708","0",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_horizontalgap("24");
            obj.set_verticalgap("16");
            obj.set_cssclass("pnl_WF_Loginbox");
            obj.set_flexwrap("wrap");
            obj.set_spacing("23px 0px 23px 0px ");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","0","Panel01_00:80","300","32",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("레이블");
            obj.set_cssclass("sta_WF_H5");
            obj.set_accessibilityrole("heading5");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_00","0","Static00_02:24",null,"200","0",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("");
            obj.set_cssclass("div_GUIDE_SubBg");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("StaStartDt","84","47","280","23",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            obj.set_text("시작날짜");
            obj.set_cssclass("sta_WF_Lable15R");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","502","141","280","48",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("1");
            obj.set_value("20241002");
            obj.set_dateformat("yyyy.MM.dd ddd");
            obj.set_editformat("yyyy.MM.dd");
            obj.set_accessibilitylabel("시작날짜");
            obj.set_popupsize("384 437");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel00","84","47","280","79",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_verticalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"StaStartDt\"/><PanelItem id=\"PanelItem01\" componentid=\"Calendar00\"/></Contents>");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static00","502","-2321","7","48",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("3");
            obj.set_text("-");
            obj.set_visible("true");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("StaEndDt","84","47","280","23",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("4");
            obj.set_text("종료날짜");
            obj.set_cssclass("sta_WF_Lable15R");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00","502","141","280","48",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("5");
            obj.set_editformat("yyyy.MM.dd");
            obj.set_dateformat("yyyy.MM.dd ddd");
            obj.set_value("20241202");
            obj.set_accessibilitylabel("종료날짜");
            obj.set_popupsize("384 437");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","84","47","280","79",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_verticalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"StaEndDt\"/><PanelItem id=\"PanelItem01\" componentid=\"Calendar00_00\"/></Contents>");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","0","600","79",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("7");
            obj.set_horizontalgap("16");
            obj.set_flexcrossaxisalign("end");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("24");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem03\" componentid=\"Static00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00\"/></Contents>");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static00_03","0","Div00_00:80","300","24",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("인라인 텍스트");
            obj.set_cssclass("sta_WF_H5");
            obj.set_accessibilityrole("heading5");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_01","0","Static00_03:16",null,"200","0",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("Div00");
            obj.set_cssclass("div_GUIDE_SubBg");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("StaName","84","47","280","23",null,null,null,null,null,null,this.Div00_01.form);
            obj.set_taborder("0");
            obj.set_text("신청인 성명(영문)");
            obj.set_cssclass("sta_WF_Lable15R");
            this.Div00_01.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_02_01","84","StaName:8","280","20",null,null,null,null,null,null,this.Div00_01.form);
            obj.set_taborder("1");
            obj.set_text("대문자로 입력해주세요");
            obj.set_cssclass("sta_WF_Infor13");
            this.Div00_01.addChild(obj.name, obj);

            obj = new TextField("TextField00_00","84","Static01_01_00_02_01:8","280","48",null,null,null,null,null,null,this.Div00_01.form);
            obj.set_taborder("2");
            obj.set_labelposition("outside");
            obj.set_helpertext("메시지를 입력해주세요");
            obj.set_value("HONG KIL DONG");
            obj.set_contentheight("48");
            this.Div00_01.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","0","280","107",null,null,null,null,null,null,this.Div00_01.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_verticalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"StaName\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_01_00_02_01\"/><PanelItem id=\"PanelItem02\" componentid=\"TextField00_00\"/></Contents>");
            this.Div00_01.addChild(obj.name, obj);

            obj = new Static("Static00_04","0","Div00_01:80","300","24",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("플레이스홀더");
            obj.set_cssclass("sta_WF_H5");
            obj.set_accessibilityrole("heading5");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_01_00","0","Static00_04:24",null,"200","0",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("Div00");
            obj.set_cssclass("div_GUIDE_SubBg");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_02_01","84","47","280","23",null,null,null,null,null,null,this.Div00_01_00.form);
            obj.set_taborder("0");
            obj.set_text("신청인 이메일");
            obj.set_cssclass("sta_WF_Lable15R");
            this.Div00_01_00.addChild(obj.name, obj);

            obj = new TextField("TextField00_00","84","45","280","48",null,null,null,null,null,null,this.Div00_01_00.form);
            obj.set_taborder("1");
            obj.set_labelposition("outside");
            obj.set_displaynulltext("이메일 주소를 입력하세요");
            obj.set_contentheight("48");
            this.Div00_01_00.addChild(obj.name, obj);

            obj = new Panel("Panel00","84","47","280","74",null,null,null,null,null,null,this.Div00_01_00.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_verticalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static01_01_02_01\"/><PanelItem id=\"PanelItem02\" componentid=\"TextField00_00\"/></Contents>");
            this.Div00_01_00.addChild(obj.name, obj);

            obj = new Static("Static00_05","0","Div00_01_00:80","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("사용자 요청에 의한 도움말");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_06","0","Static00_05:40","300","24",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("툴팁");
            obj.set_cssclass("sta_WF_H5");
            obj.set_accessibilityrole("heading5");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_01_02","0","Static00_06:24",null,"265","0",null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("Div00");
            obj.set_cssclass("div_GUIDE_SubBg");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div01_00","0","80","360","82",null,null,null,null,null,null,this.Div00_01_02.form);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_accessibilityenable("false");
            this.Div00_01_02.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","360",null,null,"11",null,null,null,null,this.Div00_01_02.form.Div01_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_Bg");
            obj.set_text("");
            obj.set_accessibilityenable("false");
            this.Div00_01_02.form.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static00_00","169",null,"22","12",null,"0",null,null,null,null,this.Div00_01_02.form.Div01_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_POP_DireDown");
            obj.set_accessibilityenable("false");
            this.Div00_01_02.form.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static02","24","24","312","23",null,null,null,null,null,null,this.Div00_01_02.form.Div01_00.form);
            obj.set_taborder("2");
            obj.set_text("건물 주인이 1명인 3층 이하 단독 주택");
            obj.set_cssclass("sta_POP_Infor15R");
            this.Div00_01_02.form.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static01","456","176","74","23",null,null,null,null,null,null,this.Div00_01_02.form);
            obj.set_taborder("1");
            obj.set_text("다가구주택");
            this.Div00_01_02.addChild(obj.name, obj);

            obj = new Button("BtnTip","23","11","24","24",null,null,null,null,null,null,this.Div00_01_02.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_HelpEx");
            obj.set_accessibilitylabel("다가구주택설명");
            this.Div00_01_02.addChild(obj.name, obj);

            obj = new Panel("Panel00","540","150","144","24",null,null,null,null,null,null,this.Div00_01_02.form);
            obj.set_taborder("3");
            obj.set_fittocontents("width");
            obj.set_horizontalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static01\"/><PanelItem id=\"PanelItem01\" componentid=\"BtnTip\"/></Contents>");
            this.Div00_01_02.addChild(obj.name, obj);

            obj = new Static("Static00_07","0","Div00_01_02:83","300","24",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("맥락적 도움말");
            obj.set_cssclass("sta_WF_H5");
            obj.set_accessibilityrole("heading5");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_01_03","0","Static00_07:24",null,"265","0",null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("Div00");
            obj.set_cssclass("div_GUIDE_SubBg");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div01_00","0","80","360","179",null,null,null,null,null,null,this.Div00_01_03.form);
            obj.set_taborder("0");
            obj.set_text("Div01");
            this.Div00_01_03.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","360",null,null,"11",null,null,null,null,this.Div00_01_03.form.Div01_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_Bg");
            obj.set_text("");
            obj.set_accessibilityenable("false");
            this.Div00_01_03.form.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static00_00","169",null,"22","12",null,"0",null,null,null,null,this.Div00_01_03.form.Div01_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_POP_DireDown");
            obj.set_accessibilityenable("false");
            this.Div00_01_03.form.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static01","24","24","118","26",null,null,null,null,null,null,this.Div00_01_03.form.Div01_00.form);
            obj.set_taborder("2");
            obj.set_text("도움말 제목");
            obj.set_cssclass("sta_POP_Txt17B");
            obj.set_accessibilityrole("heading3");
            this.Div00_01_03.form.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static02","24","Static01:16",null,"51","24",null,null,null,null,null,this.Div00_01_03.form.Div01_00.form);
            obj.set_taborder("3");
            obj.set_text("컴포넌트 주변에 배치되어 해당 컴포넌트의 상태나 관련된 상세 정보를 제공하는 컴포넌트이다.");
            obj.set_cssclass("sta_POP_Infor15R");
            this.Div00_01_03.form.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01","24","Static02:8","207","26",null,null,null,null,null,null,this.Div00_01_03.form.Div01_00.form);
            obj.set_taborder("4");
            obj.set_text("바로가기");
            obj.set_cssclass("btn_WF_More");
            this.Div00_01_03.form.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button00",null,"24","26","26","24",null,null,null,null,null,this.Div00_01_03.form.Div01_00.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_Helpclose");
            obj.set_accessibilitylabel("닫기");
            this.Div00_01_03.form.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button01","23","11","24","24",null,null,null,null,null,null,this.Div00_01_03.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_HelpEx");
            obj.set_accessibilitylabel("도움말 설명");
            this.Div00_01_03.addChild(obj.name, obj);

            obj = new Static("Static00_08","0","Div00_01_03:80","300","24",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("도움 패널");
            obj.set_cssclass("sta_WF_H5");
            obj.set_accessibilityrole("heading5");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_01_04","0","Static00_08:24",null,"480","0",null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("Div00");
            obj.set_cssclass("div_GUIDE_SubBg");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","130","80","91","40",null,null,null,null,null,null,this.Div00_01_04.form);
            obj.set_taborder("0");
            obj.set_text("도움말");
            obj.set_cssclass("btn_WF_OpenHelp");
            this.Div00_01_04.addChild(obj.name, obj);

            obj = new Div("Div00_02","249","40","390","400",null,null,null,null,null,null,this.Div00_01_04.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_PoPpnl");
            obj.set_text("");
            obj.set_accessibilityenable("false");
            this.Div00_01_04.addChild(obj.name, obj);

            obj = new Button("Button00",null,"40","106","40","40",null,null,null,null,null,this.Div00_01_04.form.Div00_02.form);
            obj.set_taborder("0");
            obj.set_text("접어두기");
            obj.set_cssclass("btn_WF_Fold");
            this.Div00_01_04.form.Div00_02.addChild(obj.name, obj);

            obj = new Button("Button01","40","Button00:0","60","40",null,null,null,null,null,null,this.Div00_01_04.form.Div00_02.form);
            obj.set_taborder("1");
            obj.set_text("도움");
            obj.set_cssclass("btn_WF_TabLsmallS");
            obj.set_accessibilityrole("tab");
            this.Div00_01_04.form.Div00_02.addChild(obj.name, obj);

            obj = new Button("Button01_00","Button01:8","80","94","40",null,null,null,null,null,null,this.Div00_01_04.form.Div00_02.form);
            obj.set_taborder("2");
            obj.set_text("따라하기");
            obj.set_cssclass("btn_WF_TabLsmall");
            obj.set_enable("true");
            obj.set_accessibilityrole("tab");
            this.Div00_01_04.form.Div00_02.addChild(obj.name, obj);

            obj = new Div("Div00","40","152","309","117",null,null,null,null,null,null,this.Div00_01_04.form.Div00_02.form);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_accessibilityrole("tabpage");
            this.Div00_01_04.form.Div00_02.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","300","29",null,null,null,null,null,null,this.Div00_01_04.form.Div00_02.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("민원 신청 중에 어려움이 있으신가요?");
            obj.set_cssclass("sta_WF_Para19B");
            obj.set_accessibilityrole("heading3");
            this.Div00_01_04.form.Div00_02.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","Static00:16","309","64",null,null,null,null,null,null,this.Div00_01_04.form.Div00_02.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("      버튼을 눌러 지금 나에게 필요한 여러 가지 정보를 확인해 보세요.");
            obj.set_cssclass("sta_WF_Para17RG");
            this.Div00_01_04.form.Div00_02.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button01_01_00","0","43","28","28",null,null,null,null,null,null,this.Div00_01_04.form.Div00_02.form.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_Tooltip");
            obj.set_text("");
            obj.set_accessibilitylabel("도움말");
            this.Div00_01_04.form.Div00_02.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_09","0","Div00_01_04:80","300","24",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("코치 마크");
            obj.set_cssclass("sta_WF_H5");
            obj.set_accessibilityrole("heading5");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_01_05","0","Static00_09:24",null,"562","0",null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("Div00");
            obj.set_cssclass("div_GUIDE_SubBg");
            obj.set_fittocontents("height");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02","48","40","791","482",null,null,null,null,null,null,this.Div00_01_05.form);
            obj.set_taborder("0");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("24");
            obj.set_tablecellarea("0/0");
            obj.set_cssclass("pnl_WF_Detailbox");
            obj.set_spacing("39px 39px 39px 39px");
            obj.set_fittocontents("height");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Static06\"/><PanelItem id=\"PanelItem02\" componentid=\"Static06_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel06\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel00\"/></Contents>");
            this.Div00_01_05.addChild(obj.name, obj);

            obj = new Static("Static06","0","590","100%","38",null,null,null,null,null,null,this.Div00_01_05.form);
            obj.set_taborder("1");
            obj.set_text("이사 전에 살던 곳");
            obj.set_positionstep("0");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            obj.set_tablecellarea("0/0");
            obj.set_flexgrow("1");
            obj.set_accessibilityrole("heading4");
            this.Div00_01_05.addChild(obj.name, obj);

            obj = new Static("Static06_00","0","590","100%","29",null,null,null,null,null,null,this.Div00_01_05.form);
            obj.set_taborder("2");
            obj.set_text("이사 전 살던 곳 주소(전출지)");
            obj.set_positionstep("0");
            obj.set_cssclass("sta_WF_Txt19B");
            obj.set_tablecellarea("0/0");
            obj.set_flexgrow("1");
            this.Div00_01_05.addChild(obj.name, obj);

            obj = new Panel("Panel06","40","143","711","50",null,null,null,null,null,null,this.Div00_01_05.form);
            obj.set_taborder("3");
            obj.set_horizontalgap("16");
            obj.set_verticalgap("24");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Combo01_02\"/><PanelItem id=\"PanelItem00\" componentid=\"Combo01_03\"/><PanelItem id=\"PanelItem02\" componentid=\"Button00\"/></Contents>");
            this.Div00_01_05.addChild(obj.name, obj);

            obj = new Combo("Combo01_02","27","757","252","48",null,null,null,null,null,null,this.Div00_01_05.form);
            obj.set_taborder("4");
            obj.set_flexgrow("1");
            obj.set_accessibilitylabel("지역 도 선택");
            obj.set_text("세종특별시");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00_01_05.addChild(obj.name, obj);

            obj = new Combo("Combo01_03","37","767","252","48",null,null,null,null,null,null,this.Div00_01_05.form);
            obj.set_taborder("5");
            obj.set_flexgrow("1");
            obj.set_enable("false");
            obj.set_text("시군구 선택");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00_01_05.addChild(obj.name, obj);

            obj = new Button("Button00","624","153","112","50",null,null,null,null,null,null,this.Div00_01_05.form);
            obj.set_taborder("6");
            obj.set_text("주소 조회");
            obj.set_cssclass("btn_WF_Custom");
            this.Div00_01_05.addChild(obj.name, obj);

            obj = new Panel("Panel00","95","260","711","213",null,null,null,null,null,null,this.Div00_01_05.form);
            obj.set_taborder("7");
            obj.set_cssclass("pnl_WF_Output");
            obj.set_flexgrow("1");
            obj.set_type("horizontal");
            obj.set_spacing("31px 31px 31px 31px ");
            obj.set_horizontalgap("24");
            obj.set_verticalgap("24");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Static00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Static00_00_00\"/><PanelItem id=\"PanelItem04\" componentid=\"Static01\"/><PanelItem id=\"PanelItem05\" componentid=\"Static00_01_00\"/><PanelItem id=\"PanelItem06\" componentid=\"Static00_00_00_00\"/></Contents>");
            this.Div00_01_05.addChild(obj.name, obj);

            obj = new Static("Static00","150","320","196","26",null,null,null,null,null,null,this.Div00_01_05.form);
            obj.set_taborder("8");
            obj.set_text("기본주소");
            obj.set_cssclass("sta_WF_Txt17B");
            this.Div00_01_05.addChild(obj.name, obj);

            obj = new Static("Static00_00","150","320","428","26",null,null,null,null,null,null,this.Div00_01_05.form);
            obj.set_taborder("9");
            obj.set_text("세종특별자치시 도움6로 42(어진동)");
            obj.set_fittocontents("height");
            this.Div00_01_05.addChild(obj.name, obj);

            obj = new Static("Static00_01","150","320","196","26",null,null,null,null,null,null,this.Div00_01_05.form);
            obj.set_taborder("10");
            obj.set_text("상세주소");
            obj.set_cssclass("sta_WF_Txt17B");
            this.Div00_01_05.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","150","320","428","26",null,null,null,null,null,null,this.Div00_01_05.form);
            obj.set_taborder("11");
            obj.set_text("행정안전부");
            obj.set_fittocontents("height");
            this.Div00_01_05.addChild(obj.name, obj);

            obj = new Static("Static01","146","401","100%","1",null,null,null,null,null,null,this.Div00_01_05.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_Divider");
            obj.set_accessibilityenable("false");
            this.Div00_01_05.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","150","320","196","26",null,null,null,null,null,null,this.Div00_01_05.form);
            obj.set_taborder("13");
            obj.set_text("관할 읍·면사무소/동 주민센터");
            obj.set_cssclass("sta_WF_Txt17B");
            this.Div00_01_05.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","150","320","428","26",null,null,null,null,null,null,this.Div00_01_05.form);
            obj.set_taborder("14");
            obj.set_text("어진동 행정복지센터");
            obj.set_fittocontents("height");
            this.Div00_01_05.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","Static00_09:120",null,"217","0",null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_flexmainaxisalign("end");
            obj.set_spacing("0px 60px 0px 60px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Div04\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("Div04",null,"Static00_09:120","360","217","80",null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","360",null,null,"10",null,null,null,null,this.Div04.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_CoachBg");
            obj.set_text("");
            obj.set_accessibilityenable("false");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static00_00",null,null,"22","12","24","0",null,null,null,null,this.Div04.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_POP_CoachDown");
            obj.set_accessibilityenable("false");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static01","24","24","159","26",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("2");
            obj.set_text("2단계 : 이사 전 살던 곳");
            obj.set_cssclass("sta_POP_Step15B");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static02","24","Static01:16",null,"51","24",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("3");
            obj.set_text("이사 전에 살던 곳의 주소를 선택 후 \'주소 조회\'를 클릭해주세요.");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static02_00","24","142","50","40",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("4");
            obj.set_text("<fc v=\"#0B50D0\">1</fc>/4");
            obj.set_usedecorate("true");
            this.Div04.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00",null,null,"64","40","206","35",null,null,null,null,this.Div04.form);
            obj.set_taborder("5");
            obj.set_text("그만보기");
            obj.set_cssclass("btn_POP_TxtSm");
            this.Div04.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00",null,null,"64","40","126","35",null,null,null,null,this.Div04.form);
            obj.set_taborder("6");
            obj.set_text("이전으로");
            obj.set_cssclass("btn_POP_TxtSm");
            this.Div04.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01",null,null,"86","40","24","35",null,null,null,null,this.Div04.form);
            obj.set_taborder("7");
            obj.set_text("다음으로");
            obj.set_cssclass("btn_POP_DefaultSm");
            this.Div04.addChild(obj.name, obj);

            obj = new Button("BtnClose",null,"24","26","26","24",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_Helpclose");
            obj.set_accessibilitylabel("닫기");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static00_09_00","0","Div00_01_05:80","300","24",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("따라하기 패널");
            obj.set_cssclass("sta_WF_H5");
            obj.set_accessibilityrole("heading5");
            this.addChild(obj.name, obj);

            obj = new Div("Div03","0","Static00_09_00:24",null,"761","0",null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("Div03");
            obj.set_formscrolltype("both");
            obj.set_cssclass("div_GUIDE_SubBg");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","905","5569","91","40",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("0");
            obj.set_text("도움말");
            obj.set_cssclass("btn_WF_OpenHelp");
            this.Div03.addChild(obj.name, obj);

            obj = new Div("Div00_02","1019","5569","390","680",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_PoPpnl");
            obj.set_text("");
            obj.set_accessibilityenable("false");
            this.Div03.addChild(obj.name, obj);

            obj = new Button("Button00",null,"40","106","40","40",null,null,null,null,null,this.Div03.form.Div00_02.form);
            obj.set_taborder("0");
            obj.set_text("접어두기");
            obj.set_cssclass("btn_WF_Fold");
            this.Div03.form.Div00_02.addChild(obj.name, obj);

            obj = new Button("Button01","40","Button00:0","60","40",null,null,null,null,null,null,this.Div03.form.Div00_02.form);
            obj.set_taborder("1");
            obj.set_text("도움");
            obj.set_cssclass("btn_WF_TabLsmall");
            this.Div03.form.Div00_02.addChild(obj.name, obj);

            obj = new Button("Button01_00","Button01:8","80","94","40",null,null,null,null,null,null,this.Div03.form.Div00_02.form);
            obj.set_taborder("2");
            obj.set_text("따라하기");
            obj.set_cssclass("btn_WF_TabLsmallS");
            obj.set_enable("true");
            this.Div03.form.Div00_02.addChild(obj.name, obj);

            obj = new Div("Div00","40","152","309","520",null,null,null,null,null,null,this.Div03.form.Div00_02.form);
            obj.set_taborder("3");
            obj.set_text("");
            this.Div03.form.Div00_02.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","300","29",null,null,null,null,null,null,this.Div03.form.Div00_02.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("실습을 진행할 내용을 선택해주세요.");
            obj.set_cssclass("sta_WF_Para19B");
            this.Div03.form.Div00_02.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","Static00:16","309","29",null,null,null,null,null,null,this.Div03.form.Div00_02.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("선택한 신청 내용을 단계별로 알려드립니다.");
            this.Div03.form.Div00_02.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","0","Static00_00:16",null,"23","0",null,null,null,null,null,this.Div03.form.Div00_02.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("자주 묻는 질문 페이지에서 확인하기");
            obj.set_cssclass("btn_WF_More");
            this.Div03.form.Div00_02.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00","0","125",null,"23","0",null,null,null,null,null,this.Div03.form.Div00_02.form.Div00.form);
            obj.set_taborder("3");
            obj.set_text("문서 버전 다운로드 받기");
            obj.set_cssclass("btn_WF_More");
            this.Div03.form.Div00_02.form.Div00.addChild(obj.name, obj);

            obj = new ListView("ListView00","0","Button00_00:32",null,"288","0",null,null,null,null,null,this.Div03.form.Div00_02.form.Div00.form);
            obj.set_taborder("4");
            obj.set_binddataset("Dataset00");
            obj.set_cssclass("lstv_WF_Line");
            obj.set_bandinitstatus("collapse");
            obj.set_bandexpandtype("expand");
            obj._setContents("<Formats><Format id=\"default\"><Band id=\"body\" width=\"100%\" height=\"58\" expandbarsize=\"24 24\" expandbartype=\"true\"><Cell id=\"Cell01\" left=\"0\" top=\"4\" text=\"bind:BODY_TIL\" right=\"0\" bottom=\"4\"/></Band><Band id=\"detail\" width=\"100%\" height=\"140\"><Cell id=\"Cell03\" left=\"0\" top=\"0\" text=\"bind:DETAIL_TXT\" right=\"0\" bottom=\"20\"/></Band></Format></Formats>");
            this.Div03.form.Div00_02.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_01","0","Div03:80","300","60",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("예시");
            obj.set_cssclass("sta_WF_ParaH3_pc");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","Static01_01:40","300","38",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("기본");
            obj.set_cssclass("sta_WF_H5");
            obj.set_accessibilityrole("heading5");
            this.addChild(obj.name, obj);

            obj = new Div("Div03_00","0","Static01_00_00:24",null,"330","0",null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_cssclass("div_WF_Detailbox");
            obj.set_text("");
            obj.set_fittocontents("height");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("StaHelp","40","56","86","24",null,null,null,null,null,null,this.Div03_00.form);
            obj.set_taborder("0");
            obj.set_text("맥락적 도움말");
            obj.set_fittocontents("width");
            obj.set_cssclass("sta_WF_Lable15R");
            this.Div03_00.addChild(obj.name, obj);

            obj = new Button("Button01_01","StaHelp:0","56","24","24",null,null,null,null,null,null,this.Div03_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_Infor");
            obj.set_text("");
            obj.set_accessibilitylabel("[@StaHelp]");
            this.Div03_00.addChild(obj.name, obj);

            obj = new Button("Button02","40","Button01_01:26","200","30",null,null,null,null,null,null,this.Div03_00.form);
            obj.set_taborder("2");
            obj.set_text("디스클로저");
            obj.set_cssclass("btn_WF_DiscExpand");
            this.Div03_00.addChild(obj.name, obj);

            obj = new Static("StaName","39","Button02:26",null,"23","39",null,null,null,null,null,this.Div03_00.form);
            obj.set_taborder("3");
            obj.set_text("이름");
            obj.set_cssclass("sta_WF_Lable15R");
            this.Div03_00.addChild(obj.name, obj);

            obj = new Edit("Edit00","39","StaName:8",null,"48","39",null,null,null,null,null,this.Div03_00.form);
            obj.set_taborder("4");
            obj.set_accessibilitylabel("이름");
            this.Div03_00.addChild(obj.name, obj);

            obj = new Div("Div02","39","Edit00:5",null,"26","39",null,null,null,null,null,this.Div03_00.form);
            obj.set_taborder("5");
            obj.set_text("Div02");
            obj.set_fittocontents("height");
            this.Div03_00.addChild(obj.name, obj);

            obj = new Static("Static01_02","39","0","361","26",null,null,null,null,null,null,this.Div03_00.form.Div02.form);
            obj.set_taborder("0");
            obj.set_text("개명한 경우 회원 정보에서 이름을 변경한 후 신청 가능합니다. 관련");
            obj.set_cssclass("sta_WF_Infor13N");
            this.Div03_00.form.Div02.addChild(obj.name, obj);

            obj = new Button("Button00","39","0","39","26",null,null,null,null,null,null,this.Div03_00.form.Div02.form);
            obj.set_taborder("1");
            obj.set_text("도움말");
            obj.set_cssclass("btn_WF_Link13");
            obj.set_accessibilityrole("link");
            this.Div03_00.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_02_01_00","39","0","79","26",null,null,null,null,null,null,this.Div03_00.form.Div02.form);
            obj.set_taborder("2");
            obj.set_text("을 참고하세요.");
            obj.set_cssclass("sta_WF_Infor13");
            obj.set_fittocontents("width");
            this.Div03_00.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static01","46","Div02:0","42","55",null,null,null,null,null,null,this.Div03_00.form);
            obj.set_taborder("6");
            this.Div03_00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("시작하기 전에");
                p.Static00.set_cssclass("sta_WF_Before");
                p.Static00.set_accessibilityrole("heading3");
                p.Static00.move("39","39","194","36",null,null);

                p.Static01.set_taborder("1");
                p.Static01.set_text("주민등록 관련 신고는 행정청이 수리한 때부터 신고의 효력이 발생합니다. \r\n근무시간(18:00) 이후나 토요일, 공휴일에 신청하는 경우 다음 근무일(세대주 확인이 필요한 경우 세대주 확인 완료일)에 신청이 접수되어 담당자 확인 후 신고가 수리 또는 반려됩니다.");
                p.Static01.set_cssclass("sta_WF_Para19RLeft");
                p.Static01.set_fittocontents("height");
                p.Static01.move("39","99",null,"87","39",null);

                p.Static02.set_taborder("2");
                p.Static02.set_text("본인확인 필요");
                p.Static02.set_cssclass("sta_WF_Para19RChk");
                p.Static02.move("39","Static01:48","149","29",null,null);

                p.Static02_00.set_taborder("3");
                p.Static02_00.set_text("인증서 필요");
                p.Static02_00.set_cssclass("sta_WF_Para19RChk");
                p.Static02_00.move("39","Static02:16","149","29",null,null);

                p.Static02_00_00.set_taborder("4");
                p.Static02_00_00.set_text("세대주 정보(이름, 주민등록번호, 휴대전화번호) 필요");
                p.Static02_00_00.set_cssclass("sta_WF_Para19RChk");
                p.Static02_00_00.set_fittocontents("height");
                p.Static02_00_00.move("39","Static02_00:16","426","29",null,null);

                p.Button02.set_taborder("5");
                p.Button02.set_text("온라인 신청 유의사항 자세히 보기");
                p.Button02.set_cssclass("btn_WF_DiscExpand");
                p.Button02.move("39","Static02_00_00:24","286","30",null,null);

                p.Static03.set_taborder("6");
                p.Static03.set_accessibilityenable("false");
                p.Static03.move("40","Button02:0","119","39",null,null);
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
                p.Static02_00_00.move("39","Static02_00:16",null,"58","39",null);
            	}
            );
            this.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div03_01.form
            obj = new Layout("default","",0,0,this.Div03_01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button01.set_taborder("0");
                p.Button01.set_text("모바일 신분증");
                p.Button01.set_cssclass("btn_WF_LoginOpt01");
                p.Button01.set_accessibilityrole("heading4");
                p.Button01.move("31","31",null,"40","31",null);

                p.Static04.set_taborder("1");
                p.Static04.set_text("행정안전부에서 제공하는 모바일 신분증 앱을 이용하여 로그인하기");
                p.Static04.set_cssclass("sta_WF_aliTop");
                p.Static04.set_fittocontents("height");
                p.Static04.move("95","84",null,"52","71",null);

                p.Button00.set_taborder("2");
                p.Button00.set_text("모바일 신분증 발급하러 가기");
                p.Button00.set_cssclass("btn_WF_More");
                p.Button00.move("95","144",null,"26","71",null);

                p.Static03.set_taborder("3");
                p.Static03.set_accessibilityenable("false");
                p.Static03.move("40","Button00:0","119","31",null,null);
            	}
            );
            this.Div03_01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div03_01.form
            obj = new Layout("Layout0","",0,0,this.Div03_01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button01.move("24","24",null,"40","24",null);

                p.Static04.move("24","Button01:8",null,"52","24",null);

                p.Button00.move("24","Static04:8",null,"26","24",null);

                p.Static03.move("40","Button00:0","119","24",null,null);
            	}
            );
            this.Div03_01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div03_00_00.form
            obj = new Layout("default","",0,0,this.Div03_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button01.set_taborder("0");
                p.Button01.set_text("공동·금융 인증서");
                p.Button01.set_cssclass("btn_WF_LoginOpt02");
                p.Button01.set_accessibilityrole("heading4");
                p.Button01.move("31","31",null,"40","31",null);

                p.Static04.set_taborder("1");
                p.Static04.set_text("별도로 은행같은 금융기관이나 공식인증기관에서 발급받은 전자서명용 공인인증서 또는 금융 인증서를 이용하여 로그인하기");
                p.Static04.set_flexgrow("1");
                p.Static04.set_cssclass("sta_WF_aliTop");
                p.Static04.set_fittocontents("height");
                p.Static04.move("95","84",null,"78","71",null);

                p.Static03.set_taborder("2");
                p.Static03.set_accessibilityenable("false");
                p.Static03.move("40","Static04:0","119","31",null,null);
            	}
            );
            this.Div03_00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div03_00_00.form
            obj = new Layout("Layout0","",0,0,this.Div03_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button01.move("24","24",null,"40","24",null);

                p.Static04.set_fittocontents("height");
                p.Static04.move("24","Button01:8",null,"54","24",null);

                p.Static03.move("24","Static04:0","119","24",null,null);
            	}
            );
            this.Div03_00_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div03_00_00_00.form
            obj = new Layout("default","",0,0,this.Div03_00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button01.set_taborder("0");
                p.Button01.set_text("간편 인증");
                p.Button01.set_cssclass("btn_WF_LoginOpt03");
                p.Button01.set_accessibilityrole("heading4");
                p.Button01.move("31","31",null,"40","31",null);

                p.Static04.set_taborder("1");
                p.Static04.set_text("네이버, 카카오, 또는 금융기관등 민간 전자서명 사업자가 제공하는 전자서명을 이용하여 로그인하기");
                p.Static04.set_cssclass("sta_WF_aliTop");
                p.Static04.set_fittocontents("height");
                p.Static04.move("95","84",null,"78","71",null);

                p.Button02.set_taborder("2");
                p.Button02.set_text("이용 가능한 간편 인증 서비스 목록보기");
                p.Button02.set_cssclass("btn_WF_DiscExpand");
                p.Button02.set_fittocontents("height");
                p.Button02.move("95","Static04:8",null,"26","31",null);

                p.Static03.set_taborder("3");
                p.Static03.set_accessibilityenable("false");
                p.Static03.set_minheight("31");
                p.Static03.set_maxheight("");
                p.Static03.move("141","Button02:0","119","31",null,null);
            	}
            );
            this.Div03_00_00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div03_00_00_00.form
            obj = new Layout("Layout0","",0,0,this.Div03_00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button02.set_fittocontents("height");
                p.Button02.move("24","Static04:8",null,"26","24",null);

                p.Button01.move("24","24",null,"40","24",null);

                p.Static04.set_text("네이버, 카카오, 또는 금융기관등 민간 전자서명 사업자가 제공하는 전자서명을 이용하여 로그인하기");
                p.Static04.move("24","Button01:8",null,"54","24",null);

                p.Static03.move("24","Button02:0","119","24",null,null);
            	}
            );
            this.Div03_00_00_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00_00.form
            obj = new Layout("default","",0,0,this.Div00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.StaStartDt.set_taborder("0");
                p.StaStartDt.set_text("시작날짜");
                p.StaStartDt.set_cssclass("sta_WF_Lable15R");
                p.StaStartDt.move("84","47","280","23",null,null);

                p.Calendar00.set_taborder("1");
                p.Calendar00.set_value("20241002");
                p.Calendar00.set_dateformat("yyyy.MM.dd ddd");
                p.Calendar00.set_editformat("yyyy.MM.dd");
                p.Calendar00.set_accessibilitylabel("시작날짜");
                p.Calendar00.set_popupsize("384 437");
                p.Calendar00.move("502","141","280","48",null,null);

                p.Panel00.set_taborder("2");
                p.Panel00.set_type("vertical");
                p.Panel00.set_verticalgap("8");
                p.Panel00.move("84","47","280","79",null,null);

                p.Static00.set_taborder("3");
                p.Static00.set_text("-");
                p.Static00.set_visible("true");
                p.Static00.move("502","-2321","7","48",null,null);

                p.StaEndDt.set_taborder("4");
                p.StaEndDt.set_text("종료날짜");
                p.StaEndDt.set_cssclass("sta_WF_Lable15R");
                p.StaEndDt.move("84","47","280","23",null,null);

                p.Calendar00_00.set_taborder("5");
                p.Calendar00_00.set_editformat("yyyy.MM.dd");
                p.Calendar00_00.set_dateformat("yyyy.MM.dd ddd");
                p.Calendar00_00.set_value("20241202");
                p.Calendar00_00.set_accessibilitylabel("종료날짜");
                p.Calendar00_00.set_popupsize("384 437");
                p.Calendar00_00.move("502","141","280","48",null,null);

                p.Panel00_00.set_taborder("6");
                p.Panel00_00.set_type("vertical");
                p.Panel00_00.set_verticalgap("8");
                p.Panel00_00.move("84","47","280","79",null,null);

                p.Panel01.set_taborder("7");
                p.Panel01.set_horizontalgap("16");
                p.Panel01.set_flexcrossaxisalign("end");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.set_fittocontents("height");
                p.Panel01.set_verticalgap("24");
                p.Panel01.move("0","0","600","79",null,null);
            	}
            );
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("16");
            obj.set_type("horizontal");
            this.Div00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00_00.form
            obj = new Layout("Layout0","",0,0,this.Div00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel01.set_flexmainaxisalign("center");
                p.Panel01.move("460","0","285","254",null,null);

                p.Static00.set_visible("false");

                p.Calendar00.move("502","141","280","48",null,null);
            	}
            );
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("16");
            obj.set_type("horizontal");
            this.Div00_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00_01.form
            obj = new Layout("default","",0,0,this.Div00_01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.StaName.set_taborder("0");
                p.StaName.set_text("신청인 성명(영문)");
                p.StaName.set_cssclass("sta_WF_Lable15R");
                p.StaName.move("84","47","280","23",null,null);

                p.Static01_01_00_02_01.set_taborder("1");
                p.Static01_01_00_02_01.set_text("대문자로 입력해주세요");
                p.Static01_01_00_02_01.set_cssclass("sta_WF_Infor13");
                p.Static01_01_00_02_01.move("84","StaName:8","280","20",null,null);

                p.TextField00_00.set_taborder("2");
                p.TextField00_00.set_labelposition("outside");
                p.TextField00_00.set_helpertext("메시지를 입력해주세요");
                p.TextField00_00.set_value("HONG KIL DONG");
                p.TextField00_00.set_contentheight("48");
                p.TextField00_00.move("84","Static01_01_00_02_01:8","280","48",null,null);

                p.Panel00.set_taborder("3");
                p.Panel00.set_type("vertical");
                p.Panel00.set_verticalgap("8");
                p.Panel00.move("0","0","280","107",null,null);
            	}
            );
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("16");
            obj.set_type("horizontal");
            this.Div00_01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00_01.form
            obj = new Layout("Layout0","",0,0,this.Div00_01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("16");
            obj.set_type("horizontal");
            this.Div00_01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00_01_00.form
            obj = new Layout("default","",0,0,this.Div00_01_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static01_01_02_01.set_taborder("0");
                p.Static01_01_02_01.set_text("신청인 이메일");
                p.Static01_01_02_01.set_cssclass("sta_WF_Lable15R");
                p.Static01_01_02_01.move("84","47","280","23",null,null);

                p.TextField00_00.set_taborder("1");
                p.TextField00_00.set_labelposition("outside");
                p.TextField00_00.set_displaynulltext("이메일 주소를 입력하세요");
                p.TextField00_00.set_contentheight("48");
                p.TextField00_00.move("84","45","280","48",null,null);

                p.Panel00.set_taborder("2");
                p.Panel00.set_type("vertical");
                p.Panel00.set_verticalgap("8");
                p.Panel00.move("84","47","280","74",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("16");
            this.Div00_01_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00_01_00.form
            obj = new Layout("Layout0","",0,0,this.Div00_01_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("16");
            this.Div00_01_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00_01_02.form.Div01_00.form
            obj = new Layout("default","",0,0,this.Div00_01_02.form.Div01_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_cssclass("sta_POP_Bg");
                p.Static00.set_text("");
                p.Static00.set_accessibilityenable("false");
                p.Static00.move("0","0","360",null,null,"11");

                p.Static00_00.set_taborder("1");
                p.Static00_00.set_cssclass("sta_POP_DireDown");
                p.Static00_00.set_accessibilityenable("false");
                p.Static00_00.move("169",null,"22","12",null,"0");

                p.Static02.set_taborder("2");
                p.Static02.set_text("건물 주인이 1명인 3층 이하 단독 주택");
                p.Static02.set_cssclass("sta_POP_Infor15R");
                p.Static02.move("24","24","312","23",null,null);
            	}
            );
            this.Div00_01_02.form.Div01_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00_01_02.form.Div01_00.form
            obj = new Layout("Layout0","",0,0,this.Div00_01_02.form.Div01_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div00_01_02.form.Div01_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00_01_02.form
            obj = new Layout("default","",0,0,this.Div00_01_02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Div01_00.set_taborder("0");
                p.Div01_00.set_text("Div01");
                p.Div01_00.set_accessibilityenable("false");
                p.Div01_00.move("0","80","360","82",null,null);

                p.Static01.set_taborder("1");
                p.Static01.set_text("다가구주택");
                p.Static01.move("456","176","74","23",null,null);

                p.BtnTip.set_taborder("2");
                p.BtnTip.set_cssclass("btn_WF_HelpEx");
                p.BtnTip.set_accessibilitylabel("다가구주택설명");
                p.BtnTip.move("23","11","24","24",null,null);

                p.Panel00.set_taborder("3");
                p.Panel00.set_fittocontents("width");
                p.Panel00.set_horizontalgap("8");
                p.Panel00.move("540","150","144","24",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("16");
            this.Div00_01_02.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00_01_02.form
            obj = new Layout("Layout0","",0,0,this.Div00_01_02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("16");
            this.Div00_01_02.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00_01_03.form.Div01_00.form
            obj = new Layout("default","",0,0,this.Div00_01_03.form.Div01_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_cssclass("sta_POP_Bg");
                p.Static00.set_text("");
                p.Static00.set_accessibilityenable("false");
                p.Static00.move("0","0","360",null,null,"11");

                p.Static00_00.set_taborder("1");
                p.Static00_00.set_cssclass("sta_POP_DireDown");
                p.Static00_00.set_accessibilityenable("false");
                p.Static00_00.move("169",null,"22","12",null,"0");

                p.Static01.set_taborder("2");
                p.Static01.set_text("도움말 제목");
                p.Static01.set_cssclass("sta_POP_Txt17B");
                p.Static01.set_accessibilityrole("heading3");
                p.Static01.move("24","24","118","26",null,null);

                p.Static02.set_taborder("3");
                p.Static02.set_text("컴포넌트 주변에 배치되어 해당 컴포넌트의 상태나 관련된 상세 정보를 제공하는 컴포넌트이다.");
                p.Static02.set_cssclass("sta_POP_Infor15R");
                p.Static02.move("24","Static01:16",null,"51","24",null);

                p.Button00_01_00_01.set_taborder("4");
                p.Button00_01_00_01.set_text("바로가기");
                p.Button00_01_00_01.set_cssclass("btn_WF_More");
                p.Button00_01_00_01.move("24","Static02:8","207","26",null,null);

                p.Button00.set_taborder("5");
                p.Button00.set_cssclass("btn_WF_Helpclose");
                p.Button00.set_accessibilitylabel("닫기");
                p.Button00.move(null,"24","26","26","24",null);
            	}
            );
            this.Div00_01_03.form.Div01_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00_01_03.form.Div01_00.form
            obj = new Layout("Layout0","",0,0,this.Div00_01_03.form.Div01_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div00_01_03.form.Div01_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00_01_03.form
            obj = new Layout("default","",0,0,this.Div00_01_03.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Div01_00.set_taborder("0");
                p.Div01_00.set_text("Div01");
                p.Div01_00.move("0","80","360","179",null,null);

                p.Button01.set_taborder("1");
                p.Button01.set_cssclass("btn_WF_HelpEx");
                p.Button01.set_accessibilitylabel("도움말 설명");
                p.Button01.move("23","11","24","24",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("16");
            this.Div00_01_03.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00_01_03.form
            obj = new Layout("Layout0","",0,0,this.Div00_01_03.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("16");
            this.Div00_01_03.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00_01_04.form.Div00_02.form.Div00.form
            obj = new Layout("default","",0,0,this.Div00_01_04.form.Div00_02.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("민원 신청 중에 어려움이 있으신가요?");
                p.Static00.set_cssclass("sta_WF_Para19B");
                p.Static00.set_accessibilityrole("heading3");
                p.Static00.move("0","0","300","29",null,null);

                p.Static00_00.set_taborder("1");
                p.Static00_00.set_text("      버튼을 눌러 지금 나에게 필요한 여러 가지 정보를 확인해 보세요.");
                p.Static00_00.set_cssclass("sta_WF_Para17RG");
                p.Static00_00.move("0","Static00:16","309","64",null,null);

                p.Button01_01_00.set_taborder("2");
                p.Button01_01_00.set_cssclass("btn_WF_Tooltip");
                p.Button01_01_00.set_text("");
                p.Button01_01_00.set_accessibilitylabel("도움말");
                p.Button01_01_00.move("0","43","28","28",null,null);
            	}
            );
            this.Div00_01_04.form.Div00_02.form.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00_01_04.form.Div00_02.form.Div00.form
            obj = new Layout("Layout0","",0,0,this.Div00_01_04.form.Div00_02.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div00_01_04.form.Div00_02.form.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00_01_04.form.Div00_02.form
            obj = new Layout("default","",0,0,this.Div00_01_04.form.Div00_02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00.set_taborder("0");
                p.Button00.set_text("접어두기");
                p.Button00.set_cssclass("btn_WF_Fold");
                p.Button00.move(null,"40","106","40","40",null);

                p.Button01.set_taborder("1");
                p.Button01.set_text("도움");
                p.Button01.set_cssclass("btn_WF_TabLsmallS");
                p.Button01.set_accessibilityrole("tab");
                p.Button01.move("40","Button00:0","60","40",null,null);

                p.Button01_00.set_taborder("2");
                p.Button01_00.set_text("따라하기");
                p.Button01_00.set_cssclass("btn_WF_TabLsmall");
                p.Button01_00.set_enable("true");
                p.Button01_00.set_accessibilityrole("tab");
                p.Button01_00.move("Button01:8","80","94","40",null,null);

                p.Div00.set_taborder("3");
                p.Div00.set_text("");
                p.Div00.set_accessibilityrole("tabpage");
                p.Div00.move("40","152","309","117",null,null);
            	}
            );
            this.Div00_01_04.form.Div00_02.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00_01_04.form.Div00_02.form
            obj = new Layout("Layout0","",0,0,this.Div00_01_04.form.Div00_02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div00_01_04.form.Div00_02.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00_01_04.form
            obj = new Layout("default","",0,0,this.Div00_01_04.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00.set_taborder("0");
                p.Button00.set_text("도움말");
                p.Button00.set_cssclass("btn_WF_OpenHelp");
                p.Button00.move("130","80","91","40",null,null);

                p.Div00_02.set_taborder("1");
                p.Div00_02.set_cssclass("div_WF_PoPpnl");
                p.Div00_02.set_text("");
                p.Div00_02.set_accessibilityenable("false");
                p.Div00_02.move("249","40","390","400",null,null);
            	}
            );
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxisalign("start");
            obj.set_verticalgap("16");
            obj.set_type("horizontal");
            obj.set_spacing("40px");
            obj.set_horizontalgap("24");
            obj.set_flexwrap("wrap");
            this.Div00_01_04.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00_01_04.form
            obj = new Layout("Layout0","",0,0,this.Div00_01_04.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxisalign("start");
            obj.set_verticalgap("16");
            obj.set_type("horizontal");
            obj.set_spacing("40px");
            obj.set_horizontalgap("24");
            obj.set_flexwrap("wrap");
            this.Div00_01_04.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00_01_05.form
            obj = new Layout("default","",0,0,this.Div00_01_05.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel02.set_taborder("0");
                p.Panel02.set_flexwrap("wrap");
                p.Panel02.set_verticalgap("24");
                p.Panel02.set_tablecellarea("0/0");
                p.Panel02.set_cssclass("pnl_WF_Detailbox");
                p.Panel02.set_spacing("39px 39px 39px 39px");
                p.Panel02.set_fittocontents("height");
                p.Panel02.set_type("horizontal");
                p.Panel02.move("48","40","791","482",null,null);

                p.Static06.set_taborder("1");
                p.Static06.set_text("이사 전에 살던 곳");
                p.Static06.set_positionstep("0");
                p.Static06.set_cssclass("sta_WF_ParaH4_pc");
                p.Static06.set_tablecellarea("0/0");
                p.Static06.set_flexgrow("1");
                p.Static06.set_accessibilityrole("heading4");
                p.Static06.set_maxwidth("");
                p.Static06.move("0","590","100%","38",null,null);

                p.Static06_00.set_taborder("2");
                p.Static06_00.set_text("이사 전 살던 곳 주소(전출지)");
                p.Static06_00.set_positionstep("0");
                p.Static06_00.set_cssclass("sta_WF_Txt19B");
                p.Static06_00.set_tablecellarea("0/0");
                p.Static06_00.set_flexgrow("1");
                p.Static06_00.set_maxwidth("");
                p.Static06_00.move("0","590","100%","29",null,null);

                p.Panel06.set_taborder("3");
                p.Panel06.set_horizontalgap("16");
                p.Panel06.set_verticalgap("24");
                p.Panel06.set_flexwrap("wrap");
                p.Panel06.set_fittocontents("height");
                p.Panel06.set_flexgrow("1");
                p.Panel06.set_type("horizontal");
                p.Panel06.move("40","143","711","50",null,null);

                p.Combo01_02.set_taborder("4");
                p.Combo01_02.set_flexgrow("1");
                p.Combo01_02.set_accessibilitylabel("지역 도 선택");
                p.Combo01_02.set_text("세종특별시");
                p.Combo01_02.set_value("");
                p.Combo01_02.set_index("-1");
                p.Combo01_02.move("27","757","252","48",null,null);

                p.Combo01_03.set_taborder("5");
                p.Combo01_03.set_flexgrow("1");
                p.Combo01_03.set_enable("false");
                p.Combo01_03.set_text("시군구 선택");
                p.Combo01_03.set_value("");
                p.Combo01_03.set_index("-1");
                p.Combo01_03.move("37","767","252","48",null,null);

                p.Button00.set_taborder("6");
                p.Button00.set_text("주소 조회");
                p.Button00.set_cssclass("btn_WF_Custom");
                p.Button00.move("624","153","112","50",null,null);

                p.Panel00.set_taborder("7");
                p.Panel00.set_cssclass("pnl_WF_Output");
                p.Panel00.set_flexgrow("1");
                p.Panel00.set_type("horizontal");
                p.Panel00.set_spacing("31px 31px 31px 31px ");
                p.Panel00.set_horizontalgap("24");
                p.Panel00.set_verticalgap("24");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.move("95","260","711","213",null,null);

                p.Static00.set_taborder("8");
                p.Static00.set_text("기본주소");
                p.Static00.set_cssclass("sta_WF_Txt17B");
                p.Static00.move("150","320","196","26",null,null);

                p.Static00_00.set_taborder("9");
                p.Static00_00.set_text("세종특별자치시 도움6로 42(어진동)");
                p.Static00_00.set_fittocontents("height");
                p.Static00_00.move("150","320","428","26",null,null);

                p.Static00_01.set_taborder("10");
                p.Static00_01.set_text("상세주소");
                p.Static00_01.set_cssclass("sta_WF_Txt17B");
                p.Static00_01.move("150","320","196","26",null,null);

                p.Static00_00_00.set_taborder("11");
                p.Static00_00_00.set_text("행정안전부");
                p.Static00_00_00.set_fittocontents("height");
                p.Static00_00_00.move("150","320","428","26",null,null);

                p.Static01.set_taborder("12");
                p.Static01.set_cssclass("sta_WF_Divider");
                p.Static01.set_accessibilityenable("false");
                p.Static01.move("146","401","100%","1",null,null);

                p.Static00_01_00.set_taborder("13");
                p.Static00_01_00.set_text("관할 읍·면사무소/동 주민센터");
                p.Static00_01_00.set_cssclass("sta_WF_Txt17B");
                p.Static00_01_00.move("150","320","196","26",null,null);

                p.Static00_00_00_00.set_taborder("14");
                p.Static00_00_00_00.set_text("어진동 행정복지센터");
                p.Static00_00_00_00.set_fittocontents("height");
                p.Static00_00_00_00.move("150","320","428","26",null,null);
            	}
            );
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxisalign("start");
            obj.set_verticalgap("16");
            obj.set_type("horizontal");
            obj.set_spacing("40px");
            obj.set_horizontalgap("24");
            this.Div00_01_05.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00_01_05.form
            obj = new Layout("Layout0","",0,0,this.Div00_01_05.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.move("95","260","320","363",null,null);

                p.Panel02.set_spacing("23px 23px 23px 23px");
                p.Panel02.move("48","40","400","600",null,null);
            	}
            );
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxisalign("start");
            obj.set_verticalgap("16");
            obj.set_type("horizontal");
            obj.set_spacing("40px");
            obj.set_horizontalgap("24");
            this.Div00_01_05.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div04.form
            obj = new Layout("default","",0,0,this.Div04.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_cssclass("sta_POP_CoachBg");
                p.Static00.set_text("");
                p.Static00.set_accessibilityenable("false");
                p.Static00.move("0","0","360",null,null,"10");

                p.Static00_00.set_taborder("1");
                p.Static00_00.set_cssclass("sta_POP_CoachDown");
                p.Static00_00.set_accessibilityenable("false");
                p.Static00_00.move(null,null,"22","12","24","0");

                p.Static01.set_taborder("2");
                p.Static01.set_text("2단계 : 이사 전 살던 곳");
                p.Static01.set_cssclass("sta_POP_Step15B");
                p.Static01.move("24","24","159","26",null,null);

                p.Static02.set_taborder("3");
                p.Static02.set_text("이사 전에 살던 곳의 주소를 선택 후 \'주소 조회\'를 클릭해주세요.");
                p.Static02.move("24","Static01:16",null,"51","24",null);

                p.Static02_00.set_taborder("4");
                p.Static02_00.set_text("<fc v=\"#0B50D0\">1</fc>/4");
                p.Static02_00.set_usedecorate("true");
                p.Static02_00.move("24","142","50","40",null,null);

                p.Button00_01_00_01_00_00.set_taborder("5");
                p.Button00_01_00_01_00_00.set_text("그만보기");
                p.Button00_01_00_01_00_00.set_cssclass("btn_POP_TxtSm");
                p.Button00_01_00_01_00_00.move(null,null,"64","40","206","35");

                p.Button00_01_00_01_00.set_taborder("6");
                p.Button00_01_00_01_00.set_text("이전으로");
                p.Button00_01_00_01_00.set_cssclass("btn_POP_TxtSm");
                p.Button00_01_00_01_00.move(null,null,"64","40","126","35");

                p.Button00_01_00_01.set_taborder("7");
                p.Button00_01_00_01.set_text("다음으로");
                p.Button00_01_00_01.set_cssclass("btn_POP_DefaultSm");
                p.Button00_01_00_01.move(null,null,"86","40","24","35");

                p.BtnClose.set_taborder("8");
                p.BtnClose.set_cssclass("btn_WF_Helpclose");
                p.BtnClose.set_accessibilitylabel("닫기");
                p.BtnClose.move(null,"24","26","26","24",null);
            	}
            );
            this.Div04.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div04.form
            obj = new Layout("Layout0","",0,0,this.Div04.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div04.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div03.form.Div00_02.form.Div00.form
            obj = new Layout("default","",0,0,this.Div03.form.Div00_02.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("실습을 진행할 내용을 선택해주세요.");
                p.Static00.set_cssclass("sta_WF_Para19B");
                p.Static00.move("0","0","300","29",null,null);

                p.Static00_00.set_taborder("1");
                p.Static00_00.set_text("선택한 신청 내용을 단계별로 알려드립니다.");
                p.Static00_00.move("0","Static00:16","309","29",null,null);

                p.Button00.set_taborder("2");
                p.Button00.set_text("자주 묻는 질문 페이지에서 확인하기");
                p.Button00.set_cssclass("btn_WF_More");
                p.Button00.move("0","Static00_00:16",null,"23","0",null);

                p.Button00_00.set_taborder("3");
                p.Button00_00.set_text("문서 버전 다운로드 받기");
                p.Button00_00.set_cssclass("btn_WF_More");
                p.Button00_00.move("0","125",null,"23","0",null);

                p.ListView00.set_taborder("4");
                p.ListView00.set_binddataset("Dataset00");
                p.ListView00.set_cssclass("lstv_WF_Line");
                p.ListView00.set_bandinitstatus("collapse");
                p.ListView00.set_bandexpandtype("expand");
                p.ListView00.move("0","Button00_00:32",null,"288","0",null);
            	}
            );
            this.Div03.form.Div00_02.form.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div03.form.Div00_02.form.Div00.form
            obj = new Layout("Layout0","",0,0,this.Div03.form.Div00_02.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div03.form.Div00_02.form.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div03.form.Div00_02.form
            obj = new Layout("default","",0,0,this.Div03.form.Div00_02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00.set_taborder("0");
                p.Button00.set_text("접어두기");
                p.Button00.set_cssclass("btn_WF_Fold");
                p.Button00.move(null,"40","106","40","40",null);

                p.Button01.set_taborder("1");
                p.Button01.set_text("도움");
                p.Button01.set_cssclass("btn_WF_TabLsmall");
                p.Button01.move("40","Button00:0","60","40",null,null);

                p.Button01_00.set_taborder("2");
                p.Button01_00.set_text("따라하기");
                p.Button01_00.set_cssclass("btn_WF_TabLsmallS");
                p.Button01_00.set_enable("true");
                p.Button01_00.move("Button01:8","80","94","40",null,null);

                p.Div00.set_taborder("3");
                p.Div00.set_text("");
                p.Div00.move("40","152","309","520",null,null);
            	}
            );
            this.Div03.form.Div00_02.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div03.form.Div00_02.form
            obj = new Layout("Layout0","",0,0,this.Div03.form.Div00_02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div03.form.Div00_02.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div03.form
            obj = new Layout("default","",0,0,this.Div03.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00.set_taborder("0");
                p.Button00.set_text("도움말");
                p.Button00.set_cssclass("btn_WF_OpenHelp");
                p.Button00.move("905","5569","91","40",null,null);

                p.Div00_02.set_taborder("1");
                p.Div00_02.set_cssclass("div_WF_PoPpnl");
                p.Div00_02.set_text("");
                p.Div00_02.set_accessibilityenable("false");
                p.Div00_02.move("1019","5569","390","680",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("24");
            obj.set_spacing("39px 39px 39px 39px");
            obj.set_verticalgap("16");
            this.Div03.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div03.form
            obj = new Layout("Layout0","",0,0,this.Div03.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Div00_02.move("1019","5569","385","672",null,null);
            	}
            );
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("24");
            obj.set_spacing("39px 39px 39px 39px");
            obj.set_verticalgap("16");
            this.Div03.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div03_00.form.Div02.form
            obj = new Layout("default","",0,0,this.Div03_00.form.Div02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static01_02.set_taborder("0");
                p.Static01_02.set_text("개명한 경우 회원 정보에서 이름을 변경한 후 신청 가능합니다. 관련");
                p.Static01_02.set_cssclass("sta_WF_Infor13N");
                p.Static01_02.move("39","0","361","26",null,null);

                p.Button00.set_taborder("1");
                p.Button00.set_text("도움말");
                p.Button00.set_cssclass("btn_WF_Link13");
                p.Button00.set_accessibilityrole("link");
                p.Button00.move("39","0","39","26",null,null);

                p.Static01_01_00_02_01_00.set_taborder("2");
                p.Static01_01_00_02_01_00.set_text("을 참고하세요.");
                p.Static01_01_00_02_01_00.set_cssclass("sta_WF_Infor13");
                p.Static01_01_00_02_01_00.set_fittocontents("width");
                p.Static01_01_00_02_01_00.move("39","0","79","26",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            this.Div03_00.form.Div02.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div03_00.form.Div02.form
            obj = new Layout("Layout0","",0,0,this.Div03_00.form.Div02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            this.Div03_00.form.Div02.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div03_00.form
            obj = new Layout("default","",0,0,this.Div03_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.StaHelp.set_taborder("0");
                p.StaHelp.set_text("맥락적 도움말");
                p.StaHelp.set_fittocontents("width");
                p.StaHelp.set_cssclass("sta_WF_Lable15R");
                p.StaHelp.move("40","56","86","24",null,null);

                p.Button01_01.set_taborder("1");
                p.Button01_01.set_cssclass("btn_WF_Infor");
                p.Button01_01.set_text("");
                p.Button01_01.set_accessibilitylabel("[@StaHelp]");
                p.Button01_01.move("StaHelp:0","56","24","24",null,null);

                p.Button02.set_taborder("2");
                p.Button02.set_text("디스클로저");
                p.Button02.set_cssclass("btn_WF_DiscExpand");
                p.Button02.move("40","Button01_01:26","200","30",null,null);

                p.StaName.set_taborder("3");
                p.StaName.set_text("이름");
                p.StaName.set_cssclass("sta_WF_Lable15R");
                p.StaName.move("39","Button02:26",null,"23","39",null);

                p.Edit00.set_taborder("4");
                p.Edit00.set_accessibilitylabel("이름");
                p.Edit00.move("39","StaName:8",null,"48","39",null);

                p.Div02.set_taborder("5");
                p.Div02.set_text("Div02");
                p.Div02.set_fittocontents("height");
                p.Div02.move("39","Edit00:5",null,"26","39",null);

                p.Static01.set_taborder("6");
                p.Static01.move("46","Div02:0","42","55",null,null);
            	}
            );
            this.Div03_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div03_00.form
            obj = new Layout("Layout0","",0,0,this.Div03_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Div02.move("39","Edit00:8","400","39","39",null);
            	}
            );
            this.Div03_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",888,6950,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("도움");

                p.staH2.set_taborder("0");
                p.staH2.set_text("도움");
                p.staH2.set_cssclass("sta_WF_H2_pc");
                p.staH2.set_fittocontents("width");
                p.staH2.set_accessibilityrole("heading2");
                p.staH2.move("0","0","70","60",null,null);

                p.staDivider.set_taborder("1");
                p.staDivider.set_cssclass("sta_WF_line");
                p.staDivider.set_accessibilityenable("false");
                p.staDivider.move("staH2:15","20","1","21",null,null);

                p.staEtit.set_taborder("2");
                p.staEtit.set_text("Help");
                p.staEtit.set_cssclass("sta_WF_ParaH4_pc");
                p.staEtit.move("staDivider:15","0","100","60",null,null);

                p.Static00.set_taborder("3");
                p.Static00.set_text("도움 패턴은 사용자에게 서비스를 이용하는 동안 사용자 인터페이스의 작동 방식과 사용 방법, 진행 중인 과업 플로(Flow) 등과 관련된 도움 정보를 제공하는 데 사용되는 다양한 유형의 컴포넌트 조합이다. 사용자의 능숙도와 이용 맥락에 적합한 도움 컴포넌트를 설계하여 제공함으로써 사용자는 보다 쉽고 빠르게 서비스를 이해하고 이용할 수 있게 된다.");
                p.Static00.set_cssclass("sta_WF_Descript");
                p.Static00.set_fittocontents("height");
                p.Static00.move("0","85",null,"126","0",null);

                p.Static00_00.set_taborder("4");
                p.Static00_00.set_text("유형");
                p.Static00_00.set_cssclass("sta_WF_H2_pc");
                p.Static00_00.set_accessibilityrole("heading2");
                p.Static00_00.move("0","Static00:80","300","60",null,null);

                p.Static00_00_00.set_taborder("5");
                p.Static00_00_00.set_text("안내 영역");
                p.Static00_00_00.set_cssclass("sta_WF_ParaH4_pc");
                p.Static00_00_00.set_accessibilityrole("heading3");
                p.Static00_00_00.move("0","Static00_00:24","300","32",null,null);

                p.Static01.set_taborder("6");
                p.Static01.set_text("1단계");
                p.Static01.set_cssclass("sta_WF_Point17B");
                p.Static01.move("0","Static00_00_00:40","44","26",null,null);

                p.Static01_00.set_taborder("7");
                p.Static01_00.set_text("/ 4단계");
                p.Static01_00.move("Static01:7","Static00_00_00:40","57","26",null,null);

                p.Static02.set_taborder("8");
                p.Static02.set_text("유의사항 확인");
                p.Static02.set_cssclass("sta_WF_H2_pc");
                p.Static02.set_accessibilityrole("heading2");
                p.Static02.move("0","Static01_00:24","790","48",null,null);

                p.Div00.set_taborder("9");
                p.Div00.set_text("Div00");
                p.Div00.set_cssclass("div_WF_StartInfor");
                p.Div00.set_fittocontents("height");
                p.Div00.set_accessibilityenable("false");
                p.Div00.move("0","Static02:48",null,"448","0",null);

                p.Static00_01.set_taborder("10");
                p.Static00_01.set_text("섹션 헤딩 및 설명");
                p.Static00_01.set_cssclass("sta_WF_ParaH4_pc");
                p.Static00_01.set_accessibilityrole("heading3");
                p.Static00_01.move("0","Div00:80","300","38",null,null);

                p.Static00_01_00.set_taborder("11");
                p.Static00_01_00.set_text("대한민국 디지털정부 사용자 로그인");
                p.Static00_01_00.set_cssclass("sta_WF_Subtit15");
                p.Static00_01_00.move("0","Static00_01:40",null,"23","0",null);

                p.Static00_01_01.set_taborder("12");
                p.Static00_01_01.set_text("로그인 방식을 선택해주세요.");
                p.Static00_01_01.set_cssclass("sta_WF_H2_pc");
                p.Static00_01_01.set_accessibilityrole("heading2");
                p.Static00_01_01.move("0","Static00_01_00:16",null,"60","0",null);

                p.Static03.set_taborder("13");
                p.Static03.set_text("통합 로그인을 사용해 보세요. 통합 로그인은 한 번의 회원가입과 로그인으로 연계된 모든 공공 서비스를 이용할 수 있는 인증 서비스입니다. \r\n한 번 로그인으로 모든 정부기관의 서비스를 이용하실 수 있습니다. ");
                p.Static03.set_cssclass("sta_WF_Para19RTop");
                p.Static03.move("0","Static00_01_01:24",null,"87","0",null);

                p.CheckBox01.set_taborder("14");
                p.CheckBox01.set_text("통합 로그인 사용");
                p.CheckBox01.set_cssclass("chk_WF_Switch");
                p.CheckBox01.move("154","266","168","30",null,null);

                p.CheckBox01_01.set_taborder("15");
                p.CheckBox01_01.set_text("키보드 보안 프로그램 사용");
                p.CheckBox01_01.set_cssclass("chk_WF_Switch");
                p.CheckBox01_01.set_value("true");
                p.CheckBox01_01.move("336","266","220","30",null,null);

                p.Button01.set_taborder("16");
                p.Button01.set_cssclass("btn_WF_HelpEx");
                p.Button01.move("543","266","26","26",null,null);

                p.Panel00_00.set_taborder("17");
                p.Panel00_00.set_flexcrossaxisalign("center");
                p.Panel00_00.move("182","259","270","30",null,null);

                p.Panel01.set_taborder("18");
                p.Panel01.set_horizontalgap("24");
                p.Panel01.set_verticalgap("16");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.set_fittocontents("height");
                p.Panel01.set_flexcrossaxiswrapalign("center");
                p.Panel01.move("0","Static03:48",null,"30","0",null);

                p.Static00_02_00.set_taborder("19");
                p.Static00_02_00.set_text("한번에 본인인증하고\r\n모든 서비스 이용하기");
                p.Static00_02_00.set_cssclass("sta_WF_H4_pc");
                p.Static00_02_00.set_flexgrow("1");
                p.Static00_02_00.set_accessibilityrole("heading3");
                p.Static00_02_00.move("476","1508","282","90",null,null);

                p.Div03_01.set_taborder("20");
                p.Div03_01.set_text("Div03");
                p.Div03_01.set_cssclass("div_WF_LoginOpt");
                p.Div03_01.set_flexgrow("1");
                p.Div03_01.set_fittocontents("height");
                p.Div03_01.set_accessibilityenable("false");
                p.Div03_01.move("830","1508","486","201",null,null);

                p.Div03_00_00.set_taborder("21");
                p.Div03_00_00.set_text("Div03");
                p.Div03_00_00.set_cssclass("div_WF_LoginOpt");
                p.Div03_00_00.set_flexgrow("1");
                p.Div03_00_00.set_fittocontents("height");
                p.Div03_00_00.set_accessibilityenable("false");
                p.Div03_00_00.move("830","1725","486","193",null,null);

                p.Div03_00_00_00.set_taborder("22");
                p.Div03_00_00_00.set_text("Div03");
                p.Div03_00_00_00.set_cssclass("div_WF_LoginOpt");
                p.Div03_00_00_00.set_flexgrow("1");
                p.Div03_00_00_00.set_fittocontents("height");
                p.Div03_00_00_00.set_accessibilityenable("false");
                p.Div03_00_00_00.move("830","1934","486","227",null,null);

                p.Panel00_00_00.set_taborder("23");
                p.Panel00_00_00.set_type("horizontal");
                p.Panel00_00_00.set_verticalgap("16");
                p.Panel00_00_00.set_fittocontents("height");
                p.Panel00_00_00.set_flexgrow("1");
                p.Panel00_00_00.set_flexwrap("wrap");
                p.Panel00_00_00.move("830","1508","486","653",null,null);

                p.Panel01_00.set_taborder("24");
                p.Panel01_00.set_horizontalgap("24");
                p.Panel01_00.set_verticalgap("16");
                p.Panel01_00.set_cssclass("pnl_WF_Loginbox");
                p.Panel01_00.set_flexwrap("wrap");
                p.Panel01_00.set_spacing("23px 0px 23px 0px ");
                p.Panel01_00.set_fittocontents("height");
                p.Panel01_00.set_flexgrow("1");
                p.Panel01_00.set_maxheight("");
                p.Panel01_00.move("0","Panel01:40",null,"708","0",null);

                p.Static00_02.set_taborder("25");
                p.Static00_02.set_text("레이블");
                p.Static00_02.set_cssclass("sta_WF_H5");
                p.Static00_02.set_accessibilityrole("heading5");
                p.Static00_02.move("0","Panel01_00:80","300","32",null,null);

                p.Div00_00.set_taborder("26");
                p.Div00_00.set_text("");
                p.Div00_00.set_cssclass("div_GUIDE_SubBg");
                p.Div00_00.set_accessibilityenable("false");
                p.Div00_00.move("0","Static00_02:24",null,"200","0",null);

                p.Static00_03.set_taborder("27");
                p.Static00_03.set_text("인라인 텍스트");
                p.Static00_03.set_cssclass("sta_WF_H5");
                p.Static00_03.set_accessibilityrole("heading5");
                p.Static00_03.move("0","Div00_00:80","300","24",null,null);

                p.Div00_01.set_taborder("28");
                p.Div00_01.set_text("Div00");
                p.Div00_01.set_cssclass("div_GUIDE_SubBg");
                p.Div00_01.set_accessibilityenable("false");
                p.Div00_01.move("0","Static00_03:16",null,"200","0",null);

                p.Static00_04.set_taborder("29");
                p.Static00_04.set_text("플레이스홀더");
                p.Static00_04.set_cssclass("sta_WF_H5");
                p.Static00_04.set_accessibilityrole("heading5");
                p.Static00_04.move("0","Div00_01:80","300","24",null,null);

                p.Div00_01_00.set_taborder("30");
                p.Div00_01_00.set_text("Div00");
                p.Div00_01_00.set_cssclass("div_GUIDE_SubBg");
                p.Div00_01_00.set_accessibilityenable("false");
                p.Div00_01_00.move("0","Static00_04:24",null,"200","0",null);

                p.Static00_05.set_taborder("31");
                p.Static00_05.set_text("사용자 요청에 의한 도움말");
                p.Static00_05.set_cssclass("sta_WF_H4_pc");
                p.Static00_05.set_accessibilityrole("heading4");
                p.Static00_05.move("0","Div00_01_00:80","340","40",null,null);

                p.Static00_06.set_taborder("32");
                p.Static00_06.set_text("툴팁");
                p.Static00_06.set_cssclass("sta_WF_H5");
                p.Static00_06.set_accessibilityrole("heading5");
                p.Static00_06.move("0","Static00_05:40","300","24",null,null);

                p.Div00_01_02.set_taborder("33");
                p.Div00_01_02.set_text("Div00");
                p.Div00_01_02.set_cssclass("div_GUIDE_SubBg");
                p.Div00_01_02.set_accessibilityenable("false");
                p.Div00_01_02.move("0","Static00_06:24",null,"265","0",null);

                p.Static00_07.set_taborder("34");
                p.Static00_07.set_text("맥락적 도움말");
                p.Static00_07.set_cssclass("sta_WF_H5");
                p.Static00_07.set_accessibilityrole("heading5");
                p.Static00_07.move("0","Div00_01_02:83","300","24",null,null);

                p.Div00_01_03.set_taborder("35");
                p.Div00_01_03.set_text("Div00");
                p.Div00_01_03.set_cssclass("div_GUIDE_SubBg");
                p.Div00_01_03.set_accessibilityenable("false");
                p.Div00_01_03.move("0","Static00_07:24",null,"265","0",null);

                p.Static00_08.set_taborder("36");
                p.Static00_08.set_text("도움 패널");
                p.Static00_08.set_cssclass("sta_WF_H5");
                p.Static00_08.set_accessibilityrole("heading5");
                p.Static00_08.move("0","Div00_01_03:80","300","24",null,null);

                p.Div00_01_04.set_taborder("37");
                p.Div00_01_04.set_text("Div00");
                p.Div00_01_04.set_cssclass("div_GUIDE_SubBg");
                p.Div00_01_04.set_accessibilityenable("false");
                p.Div00_01_04.move("0","Static00_08:24",null,"480","0",null);

                p.Static00_09.set_taborder("38");
                p.Static00_09.set_text("코치 마크");
                p.Static00_09.set_cssclass("sta_WF_H5");
                p.Static00_09.set_accessibilityrole("heading5");
                p.Static00_09.move("0","Div00_01_04:80","300","24",null,null);

                p.Div00_01_05.set_taborder("39");
                p.Div00_01_05.set_text("Div00");
                p.Div00_01_05.set_cssclass("div_GUIDE_SubBg");
                p.Div00_01_05.set_fittocontents("height");
                p.Div00_01_05.set_accessibilityenable("false");
                p.Div00_01_05.move("0","Static00_09:24",null,"562","0",null);

                p.Panel00.set_taborder("40");
                p.Panel00.set_flexmainaxisalign("end");
                p.Panel00.set_spacing("0px 60px 0px 60px");
                p.Panel00.move("0","Static00_09:120",null,"217","0",null);

                p.Div04.set_taborder("41");
                p.Div04.set_text("Div01");
                p.Div04.move(null,"Static00_09:120","360","217","80",null);

                p.Static00_09_00.set_taborder("42");
                p.Static00_09_00.set_text("따라하기 패널");
                p.Static00_09_00.set_cssclass("sta_WF_H5");
                p.Static00_09_00.set_accessibilityrole("heading5");
                p.Static00_09_00.move("0","Div00_01_05:80","300","24",null,null);

                p.Div03.set_taborder("43");
                p.Div03.set_text("Div03");
                p.Div03.set_formscrolltype("both");
                p.Div03.set_cssclass("div_GUIDE_SubBg");
                p.Div03.set_accessibilityenable("false");
                p.Div03.move("0","Static00_09_00:24",null,"761","0",null);

                p.Static01_01.set_taborder("44");
                p.Static01_01.set_text("예시");
                p.Static01_01.set_cssclass("sta_WF_ParaH3_pc");
                p.Static01_01.set_accessibilityrole("heading4");
                p.Static01_01.move("0","Div03:80","300","60",null,null);

                p.Static01_00_00.set_taborder("45");
                p.Static01_00_00.set_text("기본");
                p.Static01_00_00.set_cssclass("sta_WF_H5");
                p.Static01_00_00.set_accessibilityrole("heading5");
                p.Static01_00_00.move("0","Static01_01:40","300","38",null,null);

                p.Div03_00.set_taborder("46");
                p.Div03_00.set_cssclass("div_WF_Detailbox");
                p.Div03_00.set_text("");
                p.Div03_00.set_fittocontents("height");
                p.Div03_00.set_accessibilityenable("false");
                p.Div03_00.move("0","Static01_00_00:24",null,"330","0",null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Desktop_screen,mobile_small",480,7640,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Div00.move("0","697",null,"473","0",null);

                p.Static00.move("0","85",null,"230","0",null);

                p.Div00_00.set_text("");
                p.Div00_00.move("0","Static00_02:2",null,"400","0",null);

                p.Panel00.set_spacing("0px 20px 0px 0px");
                p.Panel00.move("0","5334",null,"217","0",null);

                p.Panel00_00_00.move("830","1508","480","548",null,null);

                p.Div03_00_00_00.set_text("Div03");
                p.Div03_00_00_00.move("830","1934","480","184",null,null);

                p.Panel01_00.set_fittocontents("height");
                p.Panel01_00.move("0","Panel01:34",null,"702","0",null);

                p.Div00_01_04.move("0","4511","480","536",null,null);

                p.Div00_01_05.move("0","5175",null,"680","0",null);

                p.Div03.move("0","5983",null,"814","0",null);

                p.Div03_00.move("0","7039","480","341",null,null);

                p.Div03_01.move("830","1508","480","182",null,null);

                p.Div03_00_00.set_text("Div03");
                p.Div03_00_00.move("830","1725","480","150",null,null);

                p.Static03.set_text("통합 로그인을 사용해 보세요. 통합 로그인은 한 번의 회원가입과 로그인으로 연계된 모든 공공 서비스를 이용할 수 있는 인증 서비스입니다. \r\n한 번 로그인으로 모든 정부기관의 서비스를 이용하실 수 있습니다. ");

                p.Static00_02.move("0","Panel01_00:80","100%","32",null,null);

                p.Static00_03.move("0","Div00_00:80","100%","24",null,null);

                p.Static00_04.move("0","Div00_01:80","100%","24",null,null);

                p.Static00_05.move("0","Div00_01_00:80","100%","40",null,null);

                p.Static00_06.move("0","Static00_05:40",null,"24","0",null);
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
        this.registerScript("pattern02.xfdl", function() {

        this.pattern02_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.pattern02_onload,this);
            this.Static01_01.addEventHandler("onclick",this.Static00_00_00_00_00_00_00_onclick,this);
            this.Static01_00_00.addEventHandler("onclick",this.Static00_00_00_00_00_00_00_onclick,this);
            this.Div03_00.form.StaName.addEventHandler("onclick",this.Div03_00_Static01_01_02_01_onclick,this);
        };
        this.loadIncludeScript("pattern02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
