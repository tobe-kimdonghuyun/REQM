(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Component_02");
            this.set_titletext("탐색_메뉴");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,1890);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "MenuId","type" : "STRING","size" : "256"},{"id" : "MenuName","type" : "STRING","size" : "256"},{"id" : "MenuLev","type" : "STRING","size" : "256"},{"id" : "Url","type" : "STRING","size" : "256"}]},"Rows" : [{"MenuId" : "000","MenuName" : "컴포넌트","MenuLev" : "0"},{"MenuId" : "001","MenuName" : "아이덴티티","MenuLev" : "1"},{"MenuId" : "002","MenuName" : "공식 배너 Masthead","MenuLev" : "2","Url" : "design::component/Component_01.xfdl"},{"MenuId" : "003","MenuName" : "운영기관 식별자 Identifier","MenuLev" : "2","Url" : "design::component/Component_01.xfdl"},{"MenuId" : "004","MenuName" : "헤더 Header","MenuLev" : "2","Url" : "design::component/Component_01.xfdl"},{"MenuId" : "005","MenuName" : "푸터 Footer","MenuLev" : "2","Url" : "design::component/Component_01.xfdl"},{"MenuId" : "006","MenuName" : "탐색","MenuLev" : "1"},{"MenuId" : "007","MenuName" : "건너뛰기 링크 Skip link","MenuLev" : "2","Url" : "design::component/Component_02.xfdl"},{"MenuId" : "008","MenuName" : "메인 메뉴 Main menu","MenuLev" : "2","Url" : "design::component/Component_02.xfdl"},{"MenuId" : "009","MenuName" : "브레드크럼 Breadcrumb","MenuLev" : "2","Url" : "design::component/Component_02.xfdl"},{"MenuId" : "010","MenuName" : "사이드 메뉴 Side navigation","MenuLev" : "2","Url" : "design::component/Component_02.xfdl"},{"MenuId" : "011","MenuName" : "콘텐츠 내 탐색 In-page navigation","MenuLev" : "2","Url" : "design::component/Component_02.xfdl"},{"MenuId" : "012","MenuName" : "페이지네이션 Pagination","MenuLev" : "2","Url" : "design::component/Component_02.xfdl"},{"MenuId" : "013","MenuName" : "탭바 Tab bars","MenuLev" : "2","Url" : "design::component/Component_02.xfdl"},{"MenuId" : "014","MenuName" : "레이아웃 및 표현","MenuLev" : "1"},{"MenuId" : "015","MenuName" : "구조화 목록 Structured list","MenuLev" : "2","Url" : "design::component/Component_03.xfdl"},{"MenuId" : "016","MenuName" : "긴급 공지 Critical alerts","MenuLev" : "2","Url" : "design::component/Component_03.xfdl"},{"MenuId" : "017","MenuName" : "달력 Calendar","MenuLev" : "2","Url" : "design::component/Component_03.xfdl"},{"MenuId" : "018","MenuName" : "디스클로저 Disclosure","MenuLev" : "2","Url" : "design::component/Component_03.xfdl"},{"MenuId" : "019","MenuName" : "모달 Modal","MenuLev" : "2","Url" : "design::component/Component_03.xfdl"},{"MenuId" : "020","MenuName" : "배지 Badge","MenuLev" : "2","Url" : "design::component/Component_03.xfdl"},{"MenuId" : "021","MenuName" : "아코디언 Accordion","MenuLev" : "2","Url" : "design::component/Component_03.xfdl"},{"MenuId" : "022","MenuName" : "이미지 Image","MenuLev" : "2","Url" : "design::component/Component_03.xfdl"},{"MenuId" : "023","MenuName" : "캐러셀 Carousel","MenuLev" : "2","Url" : "design::component/Component_03.xfdl"},{"MenuId" : "024","MenuName" : "탭 Tab","MenuLev" : "2","Url" : "design::component/Component_03.xfdl"},{"MenuId" : "025","MenuName" : "표 Table","MenuLev" : "2","Url" : "design::component/Component_03.xfdl"},{"MenuId" : "026","MenuName" : "스플래시 스크린 Splash screen","MenuLev" : "2","Url" : "design::component/Component_03.xfdl"},{"MenuId" : "027","MenuName" : "텍스트 목록 Text list","MenuLev" : "2","Url" : "design::component/Component_03.xfdl"},{"MenuId" : "028","MenuName" : "액션","MenuLev" : "1"},{"MenuId" : "029","MenuName" : "링크 Link","MenuLev" : "2","Url" : "design::component/Component_04.xfdl"},{"MenuId" : "030","MenuName" : "버튼 Button","MenuLev" : "2","Url" : "design::component/Component_04.xfdl"},{"MenuId" : "031","MenuName" : "선택","MenuLev" : "1"},{"MenuId" : "032","MenuName" : "라디오 버튼 Radio button","MenuLev" : "2","Url" : "design::component/Component_05.xfdl"},{"MenuId" : "033","MenuName" : "체크박스 Checkbox","MenuLev" : "2","Url" : "design::component/Component_05.xfdl"},{"MenuId" : "034","MenuName" : "셀렉트 Select","MenuLev" : "2","Url" : "design::component/Component_05.xfdl"},{"MenuId" : "035","MenuName" : "태그 Tag","MenuLev" : "2","Url" : "design::component/Component_05.xfdl"},{"MenuId" : "036","MenuName" : "토글스위치 Toggle Switch","MenuLev" : "2","Url" : "design::component/Component_05.xfdl"},{"MenuId" : "037","MenuName" : "피드백","MenuLev" : "1"},{"MenuId" : "038","MenuName" : "단계표시기 Step indicator","MenuLev" : "2","Url" : "design::component/Component_06.xfdl"},{"MenuId" : "039","MenuName" : "스피너 (Spinner)","MenuLev" : "2","Url" : "design::component/Component_06.xfdl"},{"MenuId" : "040","MenuName" : "도움","MenuLev" : "1"},{"MenuId" : "041","MenuName" : "도움 패널(help panel)","MenuLev" : "2","Url" : "design::component/Component_07.xfdl"},{"MenuId" : "042","MenuName" : "따라하기 패널 Tutorial panel","MenuLev" : "2","Url" : "design::component/Component_07.xfdl"},{"MenuId" : "043","MenuName" : "맥락적 도움말 Contextual help","MenuLev" : "2","Url" : "design::component/Component_07.xfdl"},{"MenuId" : "044","MenuName" : "코치마크 Coach mark","MenuLev" : "2","Url" : "design::component/Component_07.xfdl"},{"MenuId" : "045","MenuName" : "툴팁 Tooltip","MenuLev" : "2","Url" : "design::component/Component_07.xfdl"},{"MenuId" : "046","MenuName" : "입력","MenuLev" : "1"},{"MenuId" : "047","MenuName" : "날짜 입력필드 Date input","MenuLev" : "2","Url" : "design::component/Component_08.xfdl"},{"MenuId" : "048","MenuName" : "텍스트 영역 Textarea","MenuLev" : "2","Url" : "design::component/Component_08.xfdl"},{"MenuId" : "049","MenuName" : "텍스트 입력 필드 Text input","MenuLev" : "2","Url" : "design::component/Component_08.xfdl"},{"MenuId" : "050","MenuName" : "파일 업로드 File upload","MenuLev" : "2","Url" : "design::component/Component_08.xfdl"},{"MenuId" : "051","MenuName" : "설정","MenuLev" : "1"},{"MenuId" : "052","MenuName" : "언어 변경 Language switcher","MenuLev" : "2","Url" : "design::component/Component_09.xfdl"},{"MenuId" : "053","MenuName" : "화면 크기 조정 Resize","MenuLev" : "2","Url" : "design::component/Component_09.xfdl"},{"MenuId" : "054","MenuName" : "콘텐츠","MenuLev" : "1"},{"MenuId" : "055","MenuName" : "접근 가능한 미디어 Accessible multimedia","MenuLev" : "2","Url" : "design::component/Component_10.xfdl"},{"MenuId" : "056","MenuName" : "숨긴 콘텐츠 Visually hidden","MenuLev" : "2","Url" : "design::component/Component_10.xfdl"},{"MenuId" : "057","MenuName" : "기본패턴","MenuLev" : "0"},{"MenuId" : "058","MenuName" : "개인 식별 정보 입력","MenuLev" : "1","Url" : "design::pattern/patten_01.xfdl"},{"MenuId" : "059","MenuName" : "도움","MenuLev" : "1","Url" : "design::pattern/patten_02.xfdl"},{"MenuId" : "060","MenuName" : "동의","MenuLev" : "1","Url" : "design::pattern/patten_03.xfdl"},{"MenuId" : "061","MenuName" : "목록 탐색","MenuLev" : "1","Url" : "design::pattern/patten_04.xfdl"},{"MenuId" : "062","MenuName" : "사용자 피드백","MenuLev" : "1","Url" : "design::pattern/patten_05.xfdl"},{"MenuId" : "063","MenuName" : "상세 정보 확인","MenuLev" : "1","Url" : "design::pattern/patten_06.xfdl"},{"MenuId" : "064","MenuName" : "오류","MenuLev" : "1","Url" : "design::pattern/patten_07.xfdl"},{"MenuId" : "065","MenuName" : "입력폼","MenuLev" : "1","Url" : "design::pattern/patten_08.xfdl"},{"MenuId" : "066","MenuName" : "첨부 파일","MenuLev" : "1","Url" : "design::pattern/patten_09.xfdl"},{"MenuId" : "067","MenuName" : "필터링·정렬","MenuLev" : "1","Url" : "design::pattern/patten_10.xfdl"},{"MenuId" : "068","MenuName" : "확인","MenuLev" : "1","Url" : "design::pattern/patten_11.xfdl"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staH2","0","0","156","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("메인 메뉴");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_accessibilityrole("heading2");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("staDivider","staH2:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staEtit","staDivider:15","0","163","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Main Menu");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","85",null,"126","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("메인 메뉴는 사용자가 서비스의 정보 구조를 탐색할 때, 가장 많이 사용하는 유형의 메뉴이다. 일반적으로 헤더와 함께 거의 모든 화면에 제공되며, 사용자가 자주 방문하거나 중요도가 높은 화면으로 이동할 수 있는 링크가 포함되어 있다. 빈번하게 활용되는 사용자의 일차적인 이동 수단이기 때문에 사용하기 쉽게 설계해야 한다.");
            obj.set_cssclass("sta_WF_Descript");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","Static00_01:80",null,"56","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_cssclass("div_TF_Mnuwrap");
            obj.set_visible("true");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","0","0","160","54",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("main menu");
            obj.set_tablecellarea("0/1");
            obj.set_cssclass("btn_TF_MainMenuCol");
            obj.set_visible("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00","Button00_00_00:0","0","160","54",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("main menu");
            obj.set_cssclass("btn_TF_MainMenuEx");
            obj.set_tablecellarea("0/1");
            obj.set_visible("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_02_00","Button00_01_00:0","0","160","54",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("main menu");
            obj.set_cssclass("btn_TF_MainMenu");
            obj.set_tablecellarea("0/1");
            obj.set_visible("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_03_00","Button00_02_00:0","0","160","54",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("링크(anchor)");
            obj.set_cssclass("btn_TF_MainMenuSinS");
            obj.set_tablecellarea("0/1");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_04_00","Button00_03_00:0","0","160","54",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("링크(anchor)");
            obj.set_cssclass("btn_TF_MainMenuSin");
            obj.set_tablecellarea("0/1");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","0","Div00:0",null,"386","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div01");
            obj.set_cssclass("div_TF_MnuBg");
            obj.set_visible("true");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","0","266","384",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_cssclass("grd_TF_2dep");
            obj.set_binddataset("Dataset");
            obj.set_autofittype("col");
            obj.set_visible("true");
            obj.set_showcellselection("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"267\"/></Columns><Rows><Row size=\"58\"/></Rows><Band id=\"body\"><Cell text=\"bind:MenuName\" displaytype=\"buttoncontrol\" edittype=\"button\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Btn2dep","Grid00:44","38","133","56",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("2dept Title");
            obj.set_cssclass("btn_TF_2Deptitlink");
            obj.set_visible("true");
            obj.set_accessibilityrole("link");
            obj.set_accessibilitylabel("2dept Title");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00","459","55","100","23",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("바로가기");
            obj.set_cssclass("btn_WF_Moreline");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            obj.set_accessibilityrole("link");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div00","Grid00:40","102","264","208",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_flexgrow("1");
            obj.set_visible("true");
            obj.set_accessibilityenable("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00","0","0","240","46",null,null,null,null,null,null,this.Div01.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Last depth");
            obj.set_cssclass("btn_TF_Lastdep");
            obj.set_flexgrow("1");
            obj.set_visible("true");
            obj.set_accessibilityrole("link");
            this.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button01_01","0","54","240","46",null,null,null,null,null,null,this.Div01.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("Last depth");
            obj.set_cssclass("btn_TF_Lastdep");
            obj.set_flexgrow("1");
            obj.set_visible("true");
            obj.set_accessibilityrole("link");
            this.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button01_02","0","108","240","46",null,null,null,null,null,null,this.Div01.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("Last depth");
            obj.set_cssclass("btn_TF_Lastdeplink");
            obj.set_flexgrow("1");
            obj.set_visible("true");
            obj.set_accessibilitylabel("바로가기");
            obj.set_accessibilityrole("link");
            this.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button01_03","0","162","240","46",null,null,null,null,null,null,this.Div01.form.Div00.form);
            obj.set_taborder("3");
            obj.set_text("Last depth");
            obj.set_cssclass("btn_TF_Lastdep");
            obj.set_flexgrow("1");
            obj.set_visible("true");
            obj.set_accessibilityrole("link");
            this.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div03_00","Div00:40","16","266",null,null,"16",null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_cssclass("div_TF_BannerBg");
            obj.set_text("");
            obj.set_visible("true");
            obj.set_accessibilityenable("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","24","24","91","24",null,null,null,null,null,null,this.Div01.form.Div03_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_Bedge01s");
            obj.set_text("신규서비스");
            obj.set_visible("true");
            this.Div01.form.Div03_00.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","24","Static01:8",null,"120","24",null,null,null,null,null,this.Div01.form.Div03_00.form);
            obj.set_taborder("1");
            obj.set_visible("true");
            this.Div01.form.Div03_00.addChild(obj.name, obj);

            obj = new Button("Button00","24","ImageViewer00:32","100","32",null,null,null,null,null,null,this.Div01.form.Div03_00.form);
            obj.set_taborder("2");
            obj.set_text("메뉴명");
            obj.set_cssclass("btn_WF_More");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            obj.set_accessibilityrole("link");
            this.Div01.form.Div03_00.addChild(obj.name, obj);

            obj = new Button("Button00_00","24","248","100","32",null,null,null,null,null,null,this.Div01.form.Div03_00.form);
            obj.set_taborder("3");
            obj.set_text("메뉴명");
            obj.set_cssclass("btn_WF_More");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            obj.set_accessibilityrole("link");
            this.Div01.form.Div03_00.addChild(obj.name, obj);

            obj = new Div("DivMnu","0","Div01:100","840","982",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Div00");
            obj.set_cssclass("div_TF_MnuBg");
            obj.set_visible("false");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","16","16","121","28",null,null,null,null,null,null,this.DivMnu.form);
            obj.set_taborder("0");
            obj.set_text("글자·화면 설정");
            obj.set_cssclass("btn_TF_UtilView");
            obj.set_visible("false");
            this.DivMnu.addChild(obj.name, obj);

            obj = new Static("Static01_01","153","22","1","16",null,null,null,null,null,null,this.DivMnu.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_TF_Line");
            obj.set_visible("false");
            obj.set_accessibilityenable("false");
            this.DivMnu.addChild(obj.name, obj);

            obj = new Button("Button04_01_00","170","16","72","28",null,null,null,null,null,null,this.DivMnu.form);
            obj.set_taborder("2");
            obj.set_text("메뉴명");
            obj.set_cssclass("btn_TF_UtilLink");
            obj.set_accessibilityrole("link");
            obj.set_visible("false");
            this.DivMnu.addChild(obj.name, obj);

            obj = new Panel("Panel02","16","94","96.19047619047619%","80",null,null,null,null,null,null,this.DivMnu.form);
            obj.set_taborder("3");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Button05\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/></Contents>");
            this.DivMnu.addChild(obj.name, obj);

            obj = new Button("Button05","537","119","528","65",null,null,null,null,null,null,this.DivMnu.form);
            obj.set_taborder("4");
            obj.set_text("로그인을 해주세요");
            obj.set_cssclass("btn_LF_LoginTxt");
            obj.set_visible("false");
            obj.set_accessibilityrole("link");
            this.DivMnu.addChild(obj.name, obj);

            obj = new Panel("Panel01","236","94","280","80",null,null,"280",null,null,null,this.DivMnu.form);
            obj.set_taborder("5");
            obj.set_spacing("8px 0px 16px 0px");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("8");
            obj.set_visible("false");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Button01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Button01_01\"/><PanelItem id=\"PanelItem03\" componentid=\"Button01_02\"/></Contents>");
            this.DivMnu.addChild(obj.name, obj);

            obj = new Button("Button01_00","507","190","84","56",null,null,null,null,null,null,this.DivMnu.form);
            obj.set_taborder("6");
            obj.set_text("통합검색");
            obj.set_cssclass("btn_TF_NaviMnuV");
            obj.set_visible("false");
            this.DivMnu.addChild(obj.name, obj);

            obj = new Button("Button01_01","517","200","84","56",null,null,null,null,null,null,this.DivMnu.form);
            obj.set_taborder("7");
            obj.set_text("로그인");
            obj.set_cssclass("btn_TF_NaviLoginV");
            obj.set_visible("false");
            this.DivMnu.addChild(obj.name, obj);

            obj = new Button("Button01_02","527","210","84","56",null,null,null,null,null,null,this.DivMnu.form);
            obj.set_taborder("8");
            obj.set_text("메뉴명");
            obj.set_cssclass("btn_TF_NaviJoinV");
            obj.set_visible("false");
            this.DivMnu.addChild(obj.name, obj);

            obj = new Edit("Edit00","16","Panel02:0",null,"48","16",null,null,null,null,null,this.DivMnu.form);
            obj.set_taborder("9");
            obj.set_displaynulltext("메뉴명을 입력해주세요");
            obj.set_cssclass("edt_WF_Sch");
            obj.set_visible("false");
            obj.set_accessibilitylabel("메뉴검색");
            obj.set_text("");
            this.DivMnu.addChild(obj.name, obj);

            obj = new Button("Button02",null,"Panel02:4","40","40","22",null,null,null,null,null,this.DivMnu.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_EdtSch");
            obj.set_enable("true");
            obj.set_visible("false");
            obj.set_accessibilitylabel("메뉴검색");
            this.DivMnu.addChild(obj.name, obj);

            obj = new Static("Static02","0","Edit00:0",null,"24","0",null,null,null,null,null,this.DivMnu.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_TF_Divider");
            obj.set_visible("false");
            obj.set_accessibilityenable("false");
            this.DivMnu.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","Static02:0","160","600",null,null,null,null,null,null,this.DivMnu.form);
            obj.set_taborder("12");
            obj.set_cssclass("grd_LF_Depbar");
            obj.set_binddataset("Dataset");
            obj.set_autofittype("col");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"141\"/></Columns><Rows><Row size=\"58\"/></Rows><Band id=\"body\"><Cell text=\"bind:MenuName\" treestartlevel=\"bind:MenuLev\"/></Band></Format></Formats>");
            this.DivMnu.addChild(obj.name, obj);

            obj = new Static("Static00","Grid00:16","Static02:34",null,"45","16",null,null,null,null,null,this.DivMnu.form);
            obj.set_taborder("13");
            obj.set_text("1Depth title");
            obj.set_cssclass("sta_LF_1dep");
            obj.set_visible("false");
            obj.set_accessibilityrole("heading2");
            this.DivMnu.addChild(obj.name, obj);

            obj = new Button("Button01","Grid00:16","Static00:8",null,"50","16",null,null,null,null,null,this.DivMnu.form);
            obj.set_taborder("14");
            obj.set_text("2Depth title");
            obj.set_visible("false");
            obj.set_accessibilityrole("link");
            obj.set_cssclass("btn_LF_2dep");
            this.DivMnu.addChild(obj.name, obj);

            obj = new Button("Button01_03","Grid00:16","Button01:8",null,"50","16",null,null,null,null,null,this.DivMnu.form);
            obj.set_taborder("15");
            obj.set_text("2Depth title");
            obj.set_cssclass("btn_LF_2depCollS");
            obj.set_visible("false");
            obj.set_accessibilityrole("link");
            this.DivMnu.addChild(obj.name, obj);

            obj = new Div("Div00","Grid00:16","Button01_03:8","668","184","16",null,null,null,null,null,this.DivMnu.form);
            obj.set_taborder("16");
            obj.set_text("Div00");
            obj.set_visible("false");
            obj.set_accessibilityenable("false");
            this.DivMnu.addChild(obj.name, obj);

            obj = new Button("Button00","0","0",null,"46","0",null,null,null,null,null,this.DivMnu.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Last depth");
            obj.set_cssclass("btn_TF_Lastdep");
            obj.set_visible("false");
            obj.set_accessibilityrole("link");
            this.DivMnu.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00","0","46",null,"46","0",null,null,null,null,null,this.DivMnu.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("Last depth");
            obj.set_cssclass("btn_TF_Lastdep");
            obj.set_visible("false");
            obj.set_accessibilityrole("link");
            this.DivMnu.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01","0","92",null,"46","0",null,null,null,null,null,this.DivMnu.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("Last depth");
            obj.set_cssclass("btn_TF_Lastdep");
            obj.set_visible("false");
            obj.set_accessibilityrole("link");
            this.DivMnu.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_02","0","138",null,"46","0",null,null,null,null,null,this.DivMnu.form.Div00.form);
            obj.set_taborder("3");
            obj.set_text("Last depth");
            obj.set_cssclass("btn_TF_Lastdep");
            obj.set_visible("false");
            obj.set_accessibilityrole("link");
            this.DivMnu.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button01_03_00","Grid00:16","Div00:0",null,"50","16",null,null,null,null,null,this.DivMnu.form);
            obj.set_taborder("17");
            obj.set_text("2Depth title");
            obj.set_cssclass("btn_LF_2depExp");
            obj.set_visible("false");
            obj.set_accessibilityrole("link");
            this.DivMnu.addChild(obj.name, obj);

            obj = new Panel("Panel03","0","Grid00:0","840","136",null,null,null,null,null,null,this.DivMnu.form);
            obj.set_taborder("18");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_verticalgap("16");
            obj.set_spacing("16px 16px 16px 16px");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button04\"/><PanelItem id=\"PanelItem01\" componentid=\"Button04_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Button04_01\"/></Contents>");
            this.DivMnu.addChild(obj.name, obj);

            obj = new Button("Button04","33","1090","95","24",null,null,null,null,null,null,this.DivMnu.form);
            obj.set_taborder("19");
            obj.set_text("유틸 메뉴명");
            obj.set_cssclass("btn_LF_Txtlink");
            obj.set_visible("false");
            obj.set_accessibilityrole("link");
            this.DivMnu.addChild(obj.name, obj);

            obj = new Button("Button04_00","43","1100","95","24",null,null,null,null,null,null,this.DivMnu.form);
            obj.set_taborder("20");
            obj.set_text("유틸 메뉴명");
            obj.set_cssclass("btn_LF_Txtlink");
            obj.set_visible("false");
            obj.set_accessibilityrole("link");
            this.DivMnu.addChild(obj.name, obj);

            obj = new Button("Button04_01","53","1110","95","24",null,null,null,null,null,null,this.DivMnu.form);
            obj.set_taborder("21");
            obj.set_text("유틸 메뉴명");
            obj.set_cssclass("btn_LF_Txtlink");
            obj.set_visible("false");
            obj.set_accessibilityrole("link");
            this.DivMnu.addChild(obj.name, obj);

            obj = new Button("Button00",null,"16","32","32","16",null,null,null,null,null,this.DivMnu.form);
            obj.set_taborder("22");
            obj.set_cssclass("btn_POP_Cancel");
            obj.set_visible("false");
            obj.set_accessibilitylabel("닫기");
            this.DivMnu.addChild(obj.name, obj);

            obj = new Button("Button01_03_00_00","Grid00:16","Button01_03_00:8",null,"50","16",null,null,null,null,null,this.DivMnu.form);
            obj.set_taborder("23");
            obj.set_text("2Depth title");
            obj.set_cssclass("btn_LF_2depColl");
            obj.set_visible("false");
            obj.set_accessibilityrole("link");
            this.DivMnu.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00_00_00.set_taborder("0");
                p.Button00_00_00.set_text("main menu");
                p.Button00_00_00.set_tablecellarea("0/1");
                p.Button00_00_00.set_cssclass("btn_TF_MainMenuCol");
                p.Button00_00_00.set_visible("true");
                p.Button00_00_00.move("0","0","160","54",null,null);

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
                p.Button00_03_00.set_text("링크(anchor)");
                p.Button00_03_00.set_cssclass("btn_TF_MainMenuSinS");
                p.Button00_03_00.set_tablecellarea("0/1");
                p.Button00_03_00.set_visible("false");
                p.Button00_03_00.move("Button00_02_00:0","0","160","54",null,null);

                p.Button00_04_00.set_taborder("4");
                p.Button00_04_00.set_text("링크(anchor)");
                p.Button00_04_00.set_cssclass("btn_TF_MainMenuSin");
                p.Button00_04_00.set_tablecellarea("0/1");
                p.Button00_04_00.set_visible("false");
                p.Button00_04_00.move("Button00_03_00:0","0","160","54",null,null);
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
                p.Button00_00_00.set_visible("false");

                p.Button00_01_00.set_visible("false");

                p.Button00_02_00.set_visible("false");
            	}
            );
            this.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div01.form.Div00.form
            obj = new Layout("default","",0,0,this.Div01.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00.set_taborder("0");
                p.Button00.set_text("Last depth");
                p.Button00.set_cssclass("btn_TF_Lastdep");
                p.Button00.set_flexgrow("1");
                p.Button00.set_visible("true");
                p.Button00.set_accessibilityrole("link");
                p.Button00.move("0","0","240","46",null,null);

                p.Button01_01.set_taborder("1");
                p.Button01_01.set_text("Last depth");
                p.Button01_01.set_cssclass("btn_TF_Lastdep");
                p.Button01_01.set_flexgrow("1");
                p.Button01_01.set_visible("true");
                p.Button01_01.set_accessibilityrole("link");
                p.Button01_01.move("0","54","240","46",null,null);

                p.Button01_02.set_taborder("2");
                p.Button01_02.set_text("Last depth");
                p.Button01_02.set_cssclass("btn_TF_Lastdeplink");
                p.Button01_02.set_flexgrow("1");
                p.Button01_02.set_visible("true");
                p.Button01_02.set_accessibilitylabel("바로가기");
                p.Button01_02.set_accessibilityrole("link");
                p.Button01_02.move("0","108","240","46",null,null);

                p.Button01_03.set_taborder("3");
                p.Button01_03.set_text("Last depth");
                p.Button01_03.set_cssclass("btn_TF_Lastdep");
                p.Button01_03.set_flexgrow("1");
                p.Button01_03.set_visible("true");
                p.Button01_03.set_accessibilityrole("link");
                p.Button01_03.move("0","162","240","46",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("24");
            obj.set_verticalgap("8");
            this.Div01.form.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div01.form.Div00.form
            obj = new Layout("Mobile_screen","",0,0,this.Div01.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("24");
            obj.set_verticalgap("8");
            this.Div01.form.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div01.form.Div00.form
            obj = new Layout("Layout0","",0,0,this.Div01.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("24");
            obj.set_verticalgap("8");
            this.Div01.form.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div01.form.Div03_00.form
            obj = new Layout("default","",0,0,this.Div01.form.Div03_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static01.set_taborder("0");
                p.Static01.set_cssclass("sta_WF_Bedge01s");
                p.Static01.set_text("신규서비스");
                p.Static01.set_visible("true");
                p.Static01.move("24","24","91","24",null,null);

                p.ImageViewer00.set_taborder("1");
                p.ImageViewer00.set_visible("true");
                p.ImageViewer00.move("24","Static01:8",null,"120","24",null);

                p.Button00.set_taborder("2");
                p.Button00.set_text("메뉴명");
                p.Button00.set_cssclass("btn_WF_More");
                p.Button00.set_fittocontents("width");
                p.Button00.set_visible("true");
                p.Button00.set_accessibilityrole("link");
                p.Button00.move("24","ImageViewer00:32","100","32",null,null);

                p.Button00_00.set_taborder("3");
                p.Button00_00.set_text("메뉴명");
                p.Button00_00.set_cssclass("btn_WF_More");
                p.Button00_00.set_fittocontents("width");
                p.Button00_00.set_visible("true");
                p.Button00_00.set_accessibilityrole("link");
                p.Button00_00.move("24","248","100","32",null,null);
            	}
            );
            this.Div01.form.Div03_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div01.form.Div03_00.form
            obj = new Layout("Layout0","",0,0,this.Div01.form.Div03_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div01.form.Div03_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Grid00.set_taborder("0");
                p.Grid00.set_cssclass("grd_TF_2dep");
                p.Grid00.set_binddataset("Dataset");
                p.Grid00.set_autofittype("col");
                p.Grid00.set_visible("true");
                p.Grid00.set_showcellselection("true");
                p.Grid00.move("0","0","266","384",null,null);

                p.Btn2dep.set_taborder("1");
                p.Btn2dep.set_text("2dept Title");
                p.Btn2dep.set_cssclass("btn_TF_2Deptitlink");
                p.Btn2dep.set_visible("true");
                p.Btn2dep.set_accessibilityrole("link");
                p.Btn2dep.set_accessibilitylabel("2dept Title");
                p.Btn2dep.move("Grid00:44","38","133","56",null,null);

                p.Button00.set_taborder("2");
                p.Button00.set_text("바로가기");
                p.Button00.set_cssclass("btn_WF_Moreline");
                p.Button00.set_fittocontents("width");
                p.Button00.set_visible("true");
                p.Button00.set_accessibilityrole("link");
                p.Button00.move("459","55","100","23",null,null);

                p.Div00.set_taborder("3");
                p.Div00.set_text("Div00");
                p.Div00.set_flexgrow("1");
                p.Div00.set_visible("true");
                p.Div00.set_accessibilityenable("false");
                p.Div00.move("Grid00:40","102","264","208",null,null);

                p.Div03_00.set_taborder("4");
                p.Div03_00.set_cssclass("div_TF_BannerBg");
                p.Div03_00.set_text("");
                p.Div03_00.set_visible("true");
                p.Div03_00.set_accessibilityenable("false");
                p.Div03_00.move("Div00:40","16","266",null,null,"16");
            	}
            );
            this.Div01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div01.form
            obj = new Layout("Mobile_screen","",0,0,this.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div01.form
            obj = new Layout("Layout0","",0,0,this.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Btn2dep.set_visible("false");
                p.Btn2dep.move("Grid00:44","38","133","56",null,null);

                p.Grid00.set_visible("false");
            	}
            );
            this.Div01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.DivMnu.form.Div00.form
            obj = new Layout("default","",0,0,this.DivMnu.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00.set_taborder("0");
                p.Button00.set_text("Last depth");
                p.Button00.set_cssclass("btn_TF_Lastdep");
                p.Button00.set_visible("false");
                p.Button00.set_accessibilityrole("link");
                p.Button00.move("0","0",null,"46","0",null);

                p.Button00_00.set_taborder("1");
                p.Button00_00.set_text("Last depth");
                p.Button00_00.set_cssclass("btn_TF_Lastdep");
                p.Button00_00.set_visible("false");
                p.Button00_00.set_accessibilityrole("link");
                p.Button00_00.move("0","46",null,"46","0",null);

                p.Button00_01.set_taborder("2");
                p.Button00_01.set_text("Last depth");
                p.Button00_01.set_cssclass("btn_TF_Lastdep");
                p.Button00_01.set_visible("false");
                p.Button00_01.set_accessibilityrole("link");
                p.Button00_01.move("0","92",null,"46","0",null);

                p.Button00_02.set_taborder("3");
                p.Button00_02.set_text("Last depth");
                p.Button00_02.set_cssclass("btn_TF_Lastdep");
                p.Button00_02.set_visible("false");
                p.Button00_02.set_accessibilityrole("link");
                p.Button00_02.move("0","138",null,"46","0",null);
            	}
            );
            this.DivMnu.form.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.DivMnu.form.Div00.form
            obj = new Layout("Mobile_screen","",0,0,this.DivMnu.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.DivMnu.form.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.DivMnu.form.Div00.form
            obj = new Layout("Layout0","",0,0,this.DivMnu.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00.set_visible("true");

                p.Button00_00.set_visible("true");

                p.Button00_01.set_visible("true");

                p.Button00_02.set_visible("true");
            	}
            );
            this.DivMnu.form.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.DivMnu.form
            obj = new Layout("default","",0,0,this.DivMnu.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button03.set_taborder("0");
                p.Button03.set_text("글자·화면 설정");
                p.Button03.set_cssclass("btn_TF_UtilView");
                p.Button03.set_visible("false");
                p.Button03.move("16","16","121","28",null,null);

                p.Static01_01.set_taborder("1");
                p.Static01_01.set_cssclass("sta_TF_Line");
                p.Static01_01.set_visible("false");
                p.Static01_01.set_accessibilityenable("false");
                p.Static01_01.move("153","22","1","16",null,null);

                p.Button04_01_00.set_taborder("2");
                p.Button04_01_00.set_text("메뉴명");
                p.Button04_01_00.set_cssclass("btn_TF_UtilLink");
                p.Button04_01_00.set_accessibilityrole("link");
                p.Button04_01_00.set_visible("false");
                p.Button04_01_00.set_maxheight("");
                p.Button04_01_00.move("170","16","72","28",null,null);

                p.Panel02.set_taborder("3");
                p.Panel02.set_flexwrap("wrap");
                p.Panel02.set_fittocontents("height");
                p.Panel02.set_visible("false");
                p.Panel02.move("16","94","96.19047619047619%","80",null,null);

                p.Button05.set_taborder("4");
                p.Button05.set_text("로그인을 해주세요");
                p.Button05.set_cssclass("btn_LF_LoginTxt");
                p.Button05.set_visible("false");
                p.Button05.set_accessibilityrole("link");
                p.Button05.move("537","119","528","65",null,null);

                p.Panel01.set_taborder("5");
                p.Panel01.set_spacing("8px 0px 16px 0px");
                p.Panel01.set_flexmainaxisalign("end");
                p.Panel01.set_horizontalgap("8");
                p.Panel01.set_visible("false");
                p.Panel01.set_fittocontents("height");
                p.Panel01.set_minwidth("280");
                p.Panel01.set_maxwidth("");
                p.Panel01.move("236","94","280","80",null,null);

                p.Button01_00.set_taborder("6");
                p.Button01_00.set_text("통합검색");
                p.Button01_00.set_cssclass("btn_TF_NaviMnuV");
                p.Button01_00.set_visible("false");
                p.Button01_00.move("507","190","84","56",null,null);

                p.Button01_01.set_taborder("7");
                p.Button01_01.set_text("로그인");
                p.Button01_01.set_cssclass("btn_TF_NaviLoginV");
                p.Button01_01.set_visible("false");
                p.Button01_01.move("517","200","84","56",null,null);

                p.Button01_02.set_taborder("8");
                p.Button01_02.set_text("메뉴명");
                p.Button01_02.set_cssclass("btn_TF_NaviJoinV");
                p.Button01_02.set_visible("false");
                p.Button01_02.move("527","210","84","56",null,null);

                p.Edit00.set_taborder("9");
                p.Edit00.set_displaynulltext("메뉴명을 입력해주세요");
                p.Edit00.set_cssclass("edt_WF_Sch");
                p.Edit00.set_visible("false");
                p.Edit00.set_accessibilitylabel("메뉴검색");
                p.Edit00.move("16","Panel02:0",null,"48","16",null);

                p.Button02.set_taborder("10");
                p.Button02.set_cssclass("btn_WF_EdtSch");
                p.Button02.set_enable("true");
                p.Button02.set_visible("false");
                p.Button02.set_accessibilitylabel("메뉴검색");
                p.Button02.move(null,"Panel02:4","40","40","22",null);

                p.Static02.set_taborder("11");
                p.Static02.set_cssclass("sta_TF_Divider");
                p.Static02.set_visible("false");
                p.Static02.set_accessibilityenable("false");
                p.Static02.move("0","Edit00:0",null,"24","0",null);

                p.Grid00.set_taborder("12");
                p.Grid00.set_cssclass("grd_LF_Depbar");
                p.Grid00.set_binddataset("Dataset");
                p.Grid00.set_autofittype("col");
                p.Grid00.set_visible("false");
                p.Grid00.move("0","Static02:0","160","600",null,null);

                p.Static00.set_taborder("13");
                p.Static00.set_text("1Depth title");
                p.Static00.set_cssclass("sta_LF_1dep");
                p.Static00.set_visible("false");
                p.Static00.set_accessibilityrole("heading2");
                p.Static00.move("Grid00:16","Static02:34",null,"45","16",null);

                p.Button01.set_taborder("14");
                p.Button01.set_text("2Depth title");
                p.Button01.set_visible("false");
                p.Button01.set_accessibilityrole("link");
                p.Button01.set_cssclass("btn_LF_2dep");
                p.Button01.move("Grid00:16","Static00:8",null,"50","16",null);

                p.Button01_03.set_taborder("15");
                p.Button01_03.set_text("2Depth title");
                p.Button01_03.set_cssclass("btn_LF_2depCollS");
                p.Button01_03.set_visible("false");
                p.Button01_03.set_accessibilityrole("link");
                p.Button01_03.move("Grid00:16","Button01:8",null,"50","16",null);

                p.Div00.set_taborder("16");
                p.Div00.set_text("Div00");
                p.Div00.set_visible("false");
                p.Div00.set_accessibilityenable("false");
                p.Div00.move("Grid00:16","Button01_03:8","668","184","16",null);

                p.Button01_03_00.set_taborder("17");
                p.Button01_03_00.set_text("2Depth title");
                p.Button01_03_00.set_cssclass("btn_LF_2depExp");
                p.Button01_03_00.set_visible("false");
                p.Button01_03_00.set_accessibilityrole("link");
                p.Button01_03_00.move("Grid00:16","Div00:0",null,"50","16",null);

                p.Panel03.set_taborder("18");
                p.Panel03.set_type("vertical");
                p.Panel03.set_fittocontents("height");
                p.Panel03.set_verticalgap("16");
                p.Panel03.set_spacing("16px 16px 16px 16px");
                p.Panel03.set_visible("false");
                p.Panel03.move("0","Grid00:0","840","136",null,null);

                p.Button04.set_taborder("19");
                p.Button04.set_text("유틸 메뉴명");
                p.Button04.set_cssclass("btn_LF_Txtlink");
                p.Button04.set_visible("false");
                p.Button04.set_accessibilityrole("link");
                p.Button04.move("33","1090","95","24",null,null);

                p.Button04_00.set_taborder("20");
                p.Button04_00.set_text("유틸 메뉴명");
                p.Button04_00.set_cssclass("btn_LF_Txtlink");
                p.Button04_00.set_visible("false");
                p.Button04_00.set_accessibilityrole("link");
                p.Button04_00.move("43","1100","95","24",null,null);

                p.Button04_01.set_taborder("21");
                p.Button04_01.set_text("유틸 메뉴명");
                p.Button04_01.set_cssclass("btn_LF_Txtlink");
                p.Button04_01.set_visible("false");
                p.Button04_01.set_accessibilityrole("link");
                p.Button04_01.move("53","1110","95","24",null,null);

                p.Button00.set_taborder("22");
                p.Button00.set_cssclass("btn_POP_Cancel");
                p.Button00.set_visible("false");
                p.Button00.set_accessibilitylabel("닫기");
                p.Button00.move(null,"16","32","32","16",null);

                p.Button01_03_00_00.set_taborder("23");
                p.Button01_03_00_00.set_text("2Depth title");
                p.Button01_03_00_00.set_cssclass("btn_LF_2depColl");
                p.Button01_03_00_00.set_visible("false");
                p.Button01_03_00_00.set_accessibilityrole("link");
                p.Button01_03_00_00.move("Grid00:16","Button01_03_00:8",null,"50","16",null);
            	}
            );
            this.DivMnu.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.DivMnu.form
            obj = new Layout("Layout0","",0,0,this.DivMnu.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Edit00.set_visible("true");
                p.Edit00.move("16","Panel02:0",null,"48","16",null);

                p.Panel03.set_visible("true");
                p.Panel03.move("0","Grid00:0",null,"136","0",null);

                p.Panel02.set_visible("true");
                p.Panel02.move("16","94","92.78%","145",null,null);

                p.Div00.set_visible("true");
                p.Div00.move("Grid00:16","Button01_03:8",null,"184","16",null);

                p.Static01_01.set_visible("true");
                p.Static01_01.move("153","24","1","16",null,null);

                p.Button04_01_00.set_visible("true");
                p.Button04_01_00.move("170","20","65","24",null,null);

                p.Panel01.set_flexmainaxisalign("spacearound");
                p.Panel01.set_visible("true");
                p.Panel01.move("236","94","100%","80",null,null);

                p.Button00.set_visible("true");

                p.Button03.set_visible("true");

                p.Button01_00.set_visible("true");

                p.Button01_01.set_visible("true");

                p.Button01_02.set_visible("true");

                p.Button02.set_visible("true");

                p.Static02.set_visible("true");

                p.Grid00.set_visible("true");

                p.Static00.set_visible("true");

                p.Button01.set_visible("true");

                p.Button01_03.set_visible("true");

                p.Button01_03_00.set_visible("true");

                p.Button04.set_visible("true");

                p.Button04_00.set_visible("true");

                p.Button04_01.set_visible("true");

                p.Button05.set_visible("true");
            	}
            );
            this.DivMnu.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",888,1890,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("탐색_메뉴");

                p.staH2.set_taborder("0");
                p.staH2.set_text("메인 메뉴");
                p.staH2.set_cssclass("sta_WF_H2_pc");
                p.staH2.set_accessibilityrole("heading2");
                p.staH2.set_fittocontents("width");
                p.staH2.move("0","0","156","60",null,null);

                p.staDivider.set_taborder("1");
                p.staDivider.set_cssclass("sta_WF_line");
                p.staDivider.set_accessibilityenable("false");
                p.staDivider.move("staH2:15","20","1","21",null,null);

                p.staEtit.set_taborder("2");
                p.staEtit.set_text("Main Menu");
                p.staEtit.set_cssclass("sta_WF_ParaH4_pc");
                p.staEtit.move("staDivider:15","0","163","60",null,null);

                p.Static00_01.set_taborder("3");
                p.Static00_01.set_text("메인 메뉴는 사용자가 서비스의 정보 구조를 탐색할 때, 가장 많이 사용하는 유형의 메뉴이다. 일반적으로 헤더와 함께 거의 모든 화면에 제공되며, 사용자가 자주 방문하거나 중요도가 높은 화면으로 이동할 수 있는 링크가 포함되어 있다. 빈번하게 활용되는 사용자의 일차적인 이동 수단이기 때문에 사용하기 쉽게 설계해야 한다.");
                p.Static00_01.set_cssclass("sta_WF_Descript");
                p.Static00_01.set_fittocontents("height");
                p.Static00_01.move("0","85",null,"126","0",null);

                p.Div00.set_taborder("4");
                p.Div00.set_text("Div00");
                p.Div00.set_cssclass("div_TF_Mnuwrap");
                p.Div00.set_visible("true");
                p.Div00.set_accessibilityenable("false");
                p.Div00.move("0","Static00_01:80",null,"56","0",null);

                p.Div01.set_taborder("5");
                p.Div01.set_text("Div01");
                p.Div01.set_cssclass("div_TF_MnuBg");
                p.Div01.set_visible("true");
                p.Div01.set_accessibilityenable("false");
                p.Div01.move("0","Div00:0",null,"386","0",null);

                p.DivMnu.set_taborder("6");
                p.DivMnu.set_text("Div00");
                p.DivMnu.set_cssclass("div_TF_MnuBg");
                p.DivMnu.set_visible("false");
                p.DivMnu.set_accessibilityenable("false");
                p.DivMnu.move("0","Div01:100","840","982",null,null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Desktop_screen,mobile_small",480,1890,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00_01.move("0","85",null,"204","0",null);

                p.DivMnu.set_visible("true");
                p.DivMnu.move("0","Static00_01:80",null,"1071","0",null);

                p.Div00.set_visible("false");
                p.Div00.move("509","369",null,"56","-509",null);

                p.Div01.set_visible("false");
                p.Div01.move("509","425",null,"384","-509",null);
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
        this.registerScript("comp02_src02.xfdl", function() {
        this.Component_02_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Component_02_onload,this);
            this.Div00.form.Button00_00_00.addEventHandler("onclick",this.Div00_Button00_00_00_onclick,this);
            this.Div00.form.Button00_01_00.addEventHandler("onclick",this.Div00_Button00_01_00_onclick,this);
        };
        this.loadIncludeScript("comp02_src02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
