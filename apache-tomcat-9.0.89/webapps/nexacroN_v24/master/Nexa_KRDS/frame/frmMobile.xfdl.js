(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("form");
            if (Form == this.constructor)
            {
                this._setFormPosition(840,1000);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMenu1", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "MENU_ID","type" : "STRING","size" : "256"},{"id" : "MENU_NM","type" : "STRING","size" : "256"},{"id" : "MENU_LV","type" : "STRING","size" : "256"},{"id" : "MENU_URL","type" : "STRING","size" : "256"}]},"Rows" : [{"MENU_ID" : "000","MENU_NM" : "컴포넌트","MENU_LV" : "0"},{"MENU_ID" : "001","MENU_NM" : "아이덴티티","MENU_LV" : "1"},{"MENU_ID" : "002","MENU_NM" : "공식 배너 Masthead","MENU_LV" : "2","MENU_URL" : "design::component/Component_01.xfdl"},{"MENU_ID" : "003","MENU_NM" : "운영기관 식별자 Identifier","MENU_LV" : "2","MENU_URL" : "design::component/Component_01.xfdl"},{"MENU_ID" : "004","MENU_NM" : "헤더 Header","MENU_LV" : "2","MENU_URL" : "design::component/Component_01.xfdl"},{"MENU_ID" : "005","MENU_NM" : "푸터 Footer","MENU_LV" : "2","MENU_URL" : "design::component/Component_01.xfdl"},{"MENU_ID" : "006","MENU_NM" : "탐색","MENU_LV" : "1"},{"MENU_ID" : "007","MENU_NM" : "건너뛰기 링크 Skip link","MENU_LV" : "2","MENU_URL" : "design::component/Component_02.xfdl"},{"MENU_ID" : "008","MENU_NM" : "메인 메뉴 Main menu","MENU_LV" : "2","MENU_URL" : "design::component/Component_02.xfdl"},{"MENU_ID" : "009","MENU_NM" : "브레드크럼 Breadcrumb","MENU_LV" : "2","MENU_URL" : "design::component/Component_02.xfdl"},{"MENU_ID" : "010","MENU_NM" : "사이드 메뉴 Side navigation","MENU_LV" : "2","MENU_URL" : "design::component/Component_02.xfdl"},{"MENU_ID" : "011","MENU_NM" : "콘텐츠 내 탐색 In-page navigation","MENU_LV" : "2","MENU_URL" : "design::component/Component_02.xfdl"},{"MENU_ID" : "012","MENU_NM" : "페이지네이션 Pagination","MENU_LV" : "2","MENU_URL" : "design::component/Component_02.xfdl"},{"MENU_ID" : "013","MENU_NM" : "탭바 Tab bars","MENU_LV" : "2","MENU_URL" : "design::component/Component_02.xfdl"},{"MENU_ID" : "014","MENU_NM" : "레이아웃 및 표현","MENU_LV" : "1"},{"MENU_ID" : "015","MENU_NM" : "구조화 목록 Structured list","MENU_LV" : "2","MENU_URL" : "design::component/Component_03.xfdl"},{"MENU_ID" : "016","MENU_NM" : "긴급 공지 Critical alerts","MENU_LV" : "2","MENU_URL" : "design::component/Component_03.xfdl"},{"MENU_ID" : "017","MENU_NM" : "달력 Calendar","MENU_LV" : "2","MENU_URL" : "design::component/Component_03.xfdl"},{"MENU_ID" : "018","MENU_NM" : "디스클로저 Disclosure","MENU_LV" : "2","MENU_URL" : "design::component/Component_03.xfdl"},{"MENU_ID" : "019","MENU_NM" : "모달 Modal","MENU_LV" : "2","MENU_URL" : "design::component/Component_03.xfdl"},{"MENU_ID" : "020","MENU_NM" : "배지 Badge","MENU_LV" : "2","MENU_URL" : "design::component/Component_03.xfdl"},{"MENU_ID" : "021","MENU_NM" : "아코디언 Accordion","MENU_LV" : "2","MENU_URL" : "design::component/Component_03.xfdl"},{"MENU_ID" : "022","MENU_NM" : "이미지 Image","MENU_LV" : "2","MENU_URL" : "design::component/Component_03.xfdl"},{"MENU_ID" : "023","MENU_NM" : "캐러셀 Carousel","MENU_LV" : "2","MENU_URL" : "design::component/Component_03.xfdl"},{"MENU_ID" : "024","MENU_NM" : "탭 Tab","MENU_LV" : "2","MENU_URL" : "design::component/Component_03.xfdl"},{"MENU_ID" : "025","MENU_NM" : "표 Table","MENU_LV" : "2","MENU_URL" : "design::component/Component_03.xfdl"},{"MENU_ID" : "026","MENU_NM" : "스플래시 스크린 Splash screen","MENU_LV" : "2","MENU_URL" : "design::component/Component_03.xfdl"},{"MENU_ID" : "027","MENU_NM" : "텍스트 목록 Text list","MENU_LV" : "2","MENU_URL" : "design::component/Component_03.xfdl"},{"MENU_ID" : "028","MENU_NM" : "액션","MENU_LV" : "1"},{"MENU_ID" : "029","MENU_NM" : "링크 Link","MENU_LV" : "2","MENU_URL" : "design::component/Component_04.xfdl"},{"MENU_ID" : "030","MENU_NM" : "버튼 Button","MENU_LV" : "2","MENU_URL" : "design::component/Component_04.xfdl"},{"MENU_ID" : "031","MENU_NM" : "선택","MENU_LV" : "1"},{"MENU_ID" : "032","MENU_NM" : "라디오 버튼 Radio button","MENU_LV" : "2","MENU_URL" : "design::component/Component_05.xfdl"},{"MENU_ID" : "033","MENU_NM" : "체크박스 Checkbox","MENU_LV" : "2","MENU_URL" : "design::component/Component_05.xfdl"},{"MENU_ID" : "034","MENU_NM" : "셀렉트 Select","MENU_LV" : "2","MENU_URL" : "design::component/Component_05.xfdl"},{"MENU_ID" : "035","MENU_NM" : "태그 Tag","MENU_LV" : "2","MENU_URL" : "design::component/Component_05.xfdl"},{"MENU_ID" : "036","MENU_NM" : "토글스위치 Toggle Switch","MENU_LV" : "2","MENU_URL" : "design::component/Component_05.xfdl"},{"MENU_ID" : "037","MENU_NM" : "피드백","MENU_LV" : "1"},{"MENU_ID" : "038","MENU_NM" : "단계표시기 Step indicator","MENU_LV" : "2","MENU_URL" : "design::component/Component_06.xfdl"},{"MENU_ID" : "039","MENU_NM" : "스피너 (Spinner)","MENU_LV" : "2","MENU_URL" : "design::component/Component_06.xfdl"},{"MENU_ID" : "040","MENU_NM" : "도움","MENU_LV" : "1"},{"MENU_ID" : "041","MENU_NM" : "도움 패널(help panel)","MENU_LV" : "2","MENU_URL" : "design::component/Component_07.xfdl"},{"MENU_ID" : "042","MENU_NM" : "따라하기 패널 Tutorial panel","MENU_LV" : "2","MENU_URL" : "design::component/Component_07.xfdl"},{"MENU_ID" : "043","MENU_NM" : "맥락적 도움말 Contextual help","MENU_LV" : "2","MENU_URL" : "design::component/Component_07.xfdl"},{"MENU_ID" : "044","MENU_NM" : "코치마크 Coach mark","MENU_LV" : "2","MENU_URL" : "design::component/Component_07.xfdl"},{"MENU_ID" : "045","MENU_NM" : "툴팁 Tooltip","MENU_LV" : "2","MENU_URL" : "design::component/Component_07.xfdl"},{"MENU_ID" : "046","MENU_NM" : "입력","MENU_LV" : "1"},{"MENU_ID" : "047","MENU_NM" : "날짜 입력필드 Date input","MENU_LV" : "2","MENU_URL" : "design::component/Component_08.xfdl"},{"MENU_ID" : "048","MENU_NM" : "텍스트 영역 Textarea","MENU_LV" : "2","MENU_URL" : "design::component/Component_08.xfdl"},{"MENU_ID" : "049","MENU_NM" : "텍스트 입력 필드 Text input","MENU_LV" : "2","MENU_URL" : "design::component/Component_08.xfdl"},{"MENU_ID" : "050","MENU_NM" : "파일 업로드 File upload","MENU_LV" : "2","MENU_URL" : "design::component/Component_08.xfdl"},{"MENU_ID" : "051","MENU_NM" : "설정","MENU_LV" : "1"},{"MENU_ID" : "052","MENU_NM" : "언어 변경 Language switcher","MENU_LV" : "2","MENU_URL" : "design::component/Component_09.xfdl"},{"MENU_ID" : "053","MENU_NM" : "화면 크기 조정 Resize","MENU_LV" : "2","MENU_URL" : "design::component/Component_09.xfdl"},{"MENU_ID" : "054","MENU_NM" : "콘텐츠","MENU_LV" : "1"},{"MENU_ID" : "055","MENU_NM" : "접근 가능한 미디어 Accessible multimedia","MENU_LV" : "2","MENU_URL" : "design::component/Component_10.xfdl"},{"MENU_ID" : "056","MENU_NM" : "숨긴 콘텐츠 Visually hidden","MENU_LV" : "2","MENU_URL" : "design::component/Component_10.xfdl"},{"MENU_ID" : "057","MENU_NM" : "기본패턴","MENU_LV" : "0"},{"MENU_ID" : "058","MENU_NM" : "개인 식별 정보 입력","MENU_LV" : "1","MENU_URL" : "design::pattern/patten_01.xfdl"},{"MENU_ID" : "059","MENU_NM" : "도움","MENU_LV" : "1","MENU_URL" : "design::pattern/patten_02.xfdl"},{"MENU_ID" : "060","MENU_NM" : "동의","MENU_LV" : "1","MENU_URL" : "design::pattern/patten_03.xfdl"},{"MENU_ID" : "061","MENU_NM" : "목록 탐색","MENU_LV" : "1","MENU_URL" : "design::pattern/patten_04.xfdl"},{"MENU_ID" : "062","MENU_NM" : "사용자 피드백","MENU_LV" : "1","MENU_URL" : "design::pattern/patten_05.xfdl"},{"MENU_ID" : "063","MENU_NM" : "상세 정보 확인","MENU_LV" : "1","MENU_URL" : "design::pattern/patten_06.xfdl"},{"MENU_ID" : "064","MENU_NM" : "오류","MENU_LV" : "1","MENU_URL" : "design::pattern/patten_07.xfdl"},{"MENU_ID" : "065","MENU_NM" : "입력폼","MENU_LV" : "1","MENU_URL" : "design::pattern/patten_08.xfdl"},{"MENU_ID" : "066","MENU_NM" : "첨부 파일","MENU_LV" : "1","MENU_URL" : "design::pattern/patten_09.xfdl"},{"MENU_ID" : "067","MENU_NM" : "필터링·정렬","MENU_LV" : "1","MENU_URL" : "design::pattern/patten_10.xfdl"},{"MENU_ID" : "068","MENU_NM" : "확인","MENU_LV" : "1","MENU_URL" : "design::pattern/patten_11.xfdl"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenu", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "MENU_ID","type" : "STRING","size" : "256"},{"id" : "MENU_NM","type" : "STRING","size" : "256"},{"id" : "MENU_LV","type" : "STRING","size" : "256"},{"id" : "HIPO_MENU_ID","type" : "STRING","size" : "256"},{"id" : "MENU_URL","type" : "STRING","size" : "256"},{"id" : "MODULE_CD","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenu2", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "MENU_ID","type" : "STRING","size" : "256"},{"id" : "MENU_NM","type" : "STRING","size" : "256"},{"id" : "MENU_LV","type" : "STRING","size" : "256"},{"id" : "MENU_URL","type" : "STRING","size" : "256"}]},"Rows" : [{"MENU_ID" : "000","MENU_NM" : "컴포넌트","MENU_LV" : "0"},{"MENU_ID" : "001","MENU_NM" : "아이덴티티","MENU_LV" : "1"},{"MENU_ID" : "002","MENU_NM" : "공식 배너 Masthead","MENU_LV" : "2","MENU_URL" : "design::component/Component_01.xfdl"},{"MENU_ID" : "003","MENU_NM" : "운영기관 식별자 Identifier","MENU_LV" : "2","MENU_URL" : "design::component/Component_01.xfdl"},{"MENU_ID" : "004","MENU_NM" : "헤더 Header","MENU_LV" : "2","MENU_URL" : "design::component/Component_01.xfdl"},{"MENU_ID" : "005","MENU_NM" : "푸터 Footer","MENU_LV" : "2","MENU_URL" : "design::component/Component_01.xfdl"},{"MENU_ID" : "006","MENU_NM" : "탐색","MENU_LV" : "1"},{"MENU_ID" : "007","MENU_NM" : "건너뛰기 링크 Skip link","MENU_LV" : "2","MENU_URL" : "design::component/Component_02.xfdl"},{"MENU_ID" : "008","MENU_NM" : "메인 메뉴 Main menu","MENU_LV" : "2","MENU_URL" : "design::component/Component_02.xfdl"},{"MENU_ID" : "009","MENU_NM" : "브레드크럼 Breadcrumb","MENU_LV" : "2","MENU_URL" : "design::component/Component_02.xfdl"},{"MENU_ID" : "010","MENU_NM" : "사이드 메뉴 Side navigation","MENU_LV" : "2","MENU_URL" : "design::component/Component_02.xfdl"},{"MENU_ID" : "011","MENU_NM" : "콘텐츠 내 탐색 In-page navigation","MENU_LV" : "2","MENU_URL" : "design::component/Component_02.xfdl"},{"MENU_ID" : "012","MENU_NM" : "페이지네이션 Pagination","MENU_LV" : "2","MENU_URL" : "design::component/Component_02.xfdl"},{"MENU_ID" : "013","MENU_NM" : "탭바 Tab bars","MENU_LV" : "2","MENU_URL" : "design::component/Component_02.xfdl"},{"MENU_ID" : "014","MENU_NM" : "레이아웃 및 표현","MENU_LV" : "1"},{"MENU_ID" : "015","MENU_NM" : "구조화 목록 Structured list","MENU_LV" : "2","MENU_URL" : "design::component/Component_03.xfdl"},{"MENU_ID" : "016","MENU_NM" : "긴급 공지 Critical alerts","MENU_LV" : "2","MENU_URL" : "design::component/Component_03.xfdl"},{"MENU_ID" : "017","MENU_NM" : "달력 Calendar","MENU_LV" : "2","MENU_URL" : "design::component/Component_03.xfdl"},{"MENU_ID" : "018","MENU_NM" : "디스클로저 Disclosure","MENU_LV" : "2","MENU_URL" : "design::component/Component_03.xfdl"},{"MENU_ID" : "019","MENU_NM" : "모달 Modal","MENU_LV" : "2","MENU_URL" : "design::component/Component_03.xfdl"},{"MENU_ID" : "020","MENU_NM" : "배지 Badge","MENU_LV" : "2","MENU_URL" : "design::component/Component_03.xfdl"},{"MENU_ID" : "021","MENU_NM" : "아코디언 Accordion","MENU_LV" : "2","MENU_URL" : "design::component/Component_03.xfdl"},{"MENU_ID" : "022","MENU_NM" : "이미지 Image","MENU_LV" : "2","MENU_URL" : "design::component/Component_03.xfdl"},{"MENU_ID" : "023","MENU_NM" : "캐러셀 Carousel","MENU_LV" : "2","MENU_URL" : "design::component/Component_03.xfdl"},{"MENU_ID" : "024","MENU_NM" : "탭 Tab","MENU_LV" : "2","MENU_URL" : "design::component/Component_03.xfdl"},{"MENU_ID" : "025","MENU_NM" : "표 Table","MENU_LV" : "2","MENU_URL" : "design::component/Component_03.xfdl"},{"MENU_ID" : "026","MENU_NM" : "스플래시 스크린 Splash screen","MENU_LV" : "2","MENU_URL" : "design::component/Component_03.xfdl"},{"MENU_ID" : "027","MENU_NM" : "텍스트 목록 Text list","MENU_LV" : "2","MENU_URL" : "design::component/Component_03.xfdl"},{"MENU_ID" : "028","MENU_NM" : "액션","MENU_LV" : "1"},{"MENU_ID" : "029","MENU_NM" : "링크 Link","MENU_LV" : "2","MENU_URL" : "design::component/Component_04.xfdl"},{"MENU_ID" : "030","MENU_NM" : "버튼 Button","MENU_LV" : "2","MENU_URL" : "design::component/Component_04.xfdl"},{"MENU_ID" : "031","MENU_NM" : "선택","MENU_LV" : "1"},{"MENU_ID" : "032","MENU_NM" : "라디오 버튼 Radio button","MENU_LV" : "2","MENU_URL" : "design::component/Component_05.xfdl"},{"MENU_ID" : "033","MENU_NM" : "체크박스 Checkbox","MENU_LV" : "2","MENU_URL" : "design::component/Component_05.xfdl"},{"MENU_ID" : "034","MENU_NM" : "셀렉트 Select","MENU_LV" : "2","MENU_URL" : "design::component/Component_05.xfdl"},{"MENU_ID" : "035","MENU_NM" : "태그 Tag","MENU_LV" : "2","MENU_URL" : "design::component/Component_05.xfdl"},{"MENU_ID" : "036","MENU_NM" : "토글스위치 Toggle Switch","MENU_LV" : "2","MENU_URL" : "design::component/Component_05.xfdl"},{"MENU_ID" : "037","MENU_NM" : "피드백","MENU_LV" : "1"},{"MENU_ID" : "038","MENU_NM" : "단계표시기 Step indicator","MENU_LV" : "2","MENU_URL" : "design::component/Component_06.xfdl"},{"MENU_ID" : "039","MENU_NM" : "스피너 (Spinner)","MENU_LV" : "2","MENU_URL" : "design::component/Component_06.xfdl"},{"MENU_ID" : "040","MENU_NM" : "도움","MENU_LV" : "1"},{"MENU_ID" : "041","MENU_NM" : "도움 패널(help panel)","MENU_LV" : "2","MENU_URL" : "design::component/Component_07.xfdl"},{"MENU_ID" : "042","MENU_NM" : "따라하기 패널 Tutorial panel","MENU_LV" : "2","MENU_URL" : "design::component/Component_07.xfdl"},{"MENU_ID" : "043","MENU_NM" : "맥락적 도움말 Contextual help","MENU_LV" : "2","MENU_URL" : "design::component/Component_07.xfdl"},{"MENU_ID" : "044","MENU_NM" : "코치마크 Coach mark","MENU_LV" : "2","MENU_URL" : "design::component/Component_07.xfdl"},{"MENU_ID" : "045","MENU_NM" : "툴팁 Tooltip","MENU_LV" : "2","MENU_URL" : "design::component/Component_07.xfdl"},{"MENU_ID" : "046","MENU_NM" : "입력","MENU_LV" : "1"},{"MENU_ID" : "047","MENU_NM" : "날짜 입력필드 Date input","MENU_LV" : "2","MENU_URL" : "design::component/Component_08.xfdl"},{"MENU_ID" : "048","MENU_NM" : "텍스트 영역 Textarea","MENU_LV" : "2","MENU_URL" : "design::component/Component_08.xfdl"},{"MENU_ID" : "049","MENU_NM" : "텍스트 입력 필드 Text input","MENU_LV" : "2","MENU_URL" : "design::component/Component_08.xfdl"},{"MENU_ID" : "050","MENU_NM" : "파일 업로드 File upload","MENU_LV" : "2","MENU_URL" : "design::component/Component_08.xfdl"},{"MENU_ID" : "051","MENU_NM" : "설정","MENU_LV" : "1"},{"MENU_ID" : "052","MENU_NM" : "언어 변경 Language switcher","MENU_LV" : "2","MENU_URL" : "design::component/Component_09.xfdl"},{"MENU_ID" : "053","MENU_NM" : "화면 크기 조정 Resize","MENU_LV" : "2","MENU_URL" : "design::component/Component_09.xfdl"},{"MENU_ID" : "054","MENU_NM" : "콘텐츠","MENU_LV" : "1"},{"MENU_ID" : "055","MENU_NM" : "접근 가능한 미디어 Accessible multimedia","MENU_LV" : "2","MENU_URL" : "design::component/Component_10.xfdl"},{"MENU_ID" : "056","MENU_NM" : "숨긴 콘텐츠 Visually hidden","MENU_LV" : "2","MENU_URL" : "design::component/Component_10.xfdl"},{"MENU_ID" : "057","MENU_NM" : "기본패턴","MENU_LV" : "0"},{"MENU_ID" : "058","MENU_NM" : "개인 식별 정보 입력","MENU_LV" : "1","MENU_URL" : "design::pattern/patten_01.xfdl"},{"MENU_ID" : "059","MENU_NM" : "도움","MENU_LV" : "1","MENU_URL" : "design::pattern/patten_02.xfdl"},{"MENU_ID" : "060","MENU_NM" : "동의","MENU_LV" : "1","MENU_URL" : "design::pattern/patten_03.xfdl"},{"MENU_ID" : "061","MENU_NM" : "목록 탐색","MENU_LV" : "1","MENU_URL" : "design::pattern/patten_04.xfdl"},{"MENU_ID" : "062","MENU_NM" : "사용자 피드백","MENU_LV" : "1","MENU_URL" : "design::pattern/patten_05.xfdl"},{"MENU_ID" : "063","MENU_NM" : "상세 정보 확인","MENU_LV" : "1","MENU_URL" : "design::pattern/patten_06.xfdl"},{"MENU_ID" : "064","MENU_NM" : "오류","MENU_LV" : "1","MENU_URL" : "design::pattern/patten_07.xfdl"},{"MENU_ID" : "065","MENU_NM" : "입력폼","MENU_LV" : "1","MENU_URL" : "design::pattern/patten_08.xfdl"},{"MENU_ID" : "066","MENU_NM" : "첨부 파일","MENU_LV" : "1","MENU_URL" : "design::pattern/patten_09.xfdl"},{"MENU_ID" : "067","MENU_NM" : "필터링·정렬","MENU_LV" : "1","MENU_URL" : "design::pattern/patten_10.xfdl"},{"MENU_ID" : "068","MENU_NM" : "확인","MENU_LV" : "1","MENU_URL" : "design::pattern/patten_11.xfdl"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnUtilView","16","16","121","32",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("글자·화면 설정");
            obj.set_cssclass("btn_TF_UtilView");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","153","24","1","16",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_TF_Utilline");
            obj.set_visible("false");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button04_01_00","170","16","65","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("메뉴명");
            obj.set_cssclass("btn_LF_Txtlink");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02","16","94","96.19047619047619%","80",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","16","94","528","65",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("로그인을 해주세요");
            obj.set_cssclass("sta_LF_LoginTxt");
            obj.set_flexgrow("2");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","236","94","280","80",null,null,"280",null,null,null,this);
            obj.set_taborder("5");
            obj.set_spacing("8px 0px 16px 0px");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Button01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Button01_01\"/><PanelItem id=\"PanelItem03\" componentid=\"Button01_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00","507","190","84","56",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("통합검색");
            obj.set_cssclass("btn_TF_NaviMnuV");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_01","517","200","75","56",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("로그인");
            obj.set_cssclass("btn_TF_NaviLoginV");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_02","527","210","92","56",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("회원가입");
            obj.set_cssclass("btn_TF_NaviJoinV");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSearch","16","174",null,"48","16",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_displaynulltext("메뉴명을 입력해주세요");
            obj.set_cssclass("edt_WF_Sch");
            obj.set_accessibilitylabel("메뉴 검색");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"178","40","40","22",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_EdtSch");
            obj.set_enable("true");
            obj.set_accessibilitylabel("메뉴 검색");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","222",null,"24","0",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_TF_Divider");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMenu","0","246","140",null,null,"0",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("grd_LF_Depbar");
            obj.set_binddataset("dsMenu");
            obj.set_autofittype("col");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"141\"/></Columns><Rows><Row size=\"58\"/></Rows><Band id=\"body\" accessibilityenable=\"false\"><Cell text=\"bind:MENU_NM\" treestartlevel=\"bind:MENU_LV\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_04_02","926","48",null,"50","-754",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("btn_LF_2dep");
            obj.set_cssclass("btn_LF_2dep");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"16","32","32","16",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("btn_POP_Cancel");
            obj.set_accessibilitylabel("닫기");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_04_00_01","926","118",null,"50","-754",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("btn_LF_2dep");
            obj.set_cssclass("btn_LF_2depS");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_04_00_00_00","926","265",null,"50","-754",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("btn_LF_2depCollS");
            obj.set_cssclass("btn_LF_2depCollS");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_04_01_00","926","195",null,"50","-754",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("btn_LF_2depColl");
            obj.set_cssclass("btn_LF_2depColl");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_03_00_01","926","335",null,"50","-754",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("btn_LF_2depExp");
            obj.set_cssclass("btn_LF_2depExp");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divMenu","142","246",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Div("divBtnMenu","0","0",null,null,"0","0",null,null,null,null,this.divMenu.form);
            obj.set_taborder("0");
            obj.set_accessibilityenable("false");
            this.divMenu.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divMenu.form.divBtnMenu.form
            obj = new Layout("default","",0,0,this.divMenu.form.divBtnMenu.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            obj.set_flexwrap("nowrap");
            obj.set_flexcrossaxiswrapalign("start");
            this.divMenu.form.divBtnMenu.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divMenu.form.divBtnMenu.form
            obj = new Layout("Layout0","",0,0,this.divMenu.form.divBtnMenu.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            obj.set_flexwrap("nowrap");
            obj.set_flexcrossaxiswrapalign("start");
            this.divMenu.form.divBtnMenu.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divMenu.form
            obj = new Layout("default","",0,0,this.divMenu.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divBtnMenu.set_taborder("0");
                p.divBtnMenu.set_accessibilityenable("false");
                p.divBtnMenu.move("0","0",null,null,"0","0");
            	}
            );
            this.divMenu.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divMenu.form
            obj = new Layout("Layout0","",0,0,this.divMenu.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divMenu.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,mobile_small",840,1000,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmMobile.xfdl", function() {
        /**
        *  KRDS
        *  @FileName 	frmMobile.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2025/03/24
        *  @Description
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2025/03/24			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fvBtnPrefix 	= "Mob_";
        this.objApp = nexacro.getApplication();
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose.)
        *******************************************************************************************************************************/
        /**
         * @description 화면 오픈
         */
        this.form_onload = function(obj,e)
        {
        	var sFilter = this.FRAME_MENUCOLUMNS.menuLevel + " == '0' ";
        	this.objApp.gdsMenu.filter(sFilter);

        	// Top 메뉴 복사
        	this.dsMenu.copyData(this.objApp.gdsMenu, true);
        	this.objApp.gdsMenu.filter("");
        };

        /**
         * @description menu를 dsMenu로 copy
         */
        this.fnLoad = function (sGroupId)
        {
        	//trace("sGroupId : " + sGroupId);
        	var sFilter = this.FRAME_MENUCOLUMNS.groupId + " == '" + sGroupId + "' ";
        	this.objApp.gdsMenu.filter(sFilter);
        	// Top 메뉴 복사
        	this.dsMenu1.copyData(this.objApp.gdsMenu, true);
        	this.objApp.gdsMenu.filter("");
        	//trace(" this.dsMenu1 : " + this.dsMenu1.saveXML());
        	// Top 메뉴 셋팅
        	this.fnSetMenu();
        };

        /**
         * @description menu 셋팅
         */
        this.fnSetMenu = function ()
        {
        	for (var i = this.divMenu.form.divBtnMenu.form.components.length - 1; i > -1; i--) {
        		var objDel = this.divMenu.form.divBtnMenu.removeChild(this.divMenu.form.divBtnMenu.form.components[i].name);
        		trace(objDel.name);
        		objDel.destroy();
        		objDel = null;
        	}

        	//for (var i = 0; i < this.dsMenu1.getRowCount(); i++)
        	for (var i = 0; i < this.dsMenu1.getRowCount(); i++)
        	{
        		var sMenuId = this.dsMenu1.getColumn(i, this.FRAME_MENUCOLUMNS.menuId);
        		var sMenuName = this.dsMenu1.getColumn(i, this.FRAME_MENUCOLUMNS.menuNm);
        		var sUpMenuId = this.dsMenu1.getColumn(i, this.FRAME_MENUCOLUMNS.upMenuId);
        		var sMenuUrl = this.dsMenu1.getColumn(i, this.FRAME_MENUCOLUMNS.menuUrl);
        		var nMenuLevel = this.dsMenu1.getColumn(i, this.FRAME_MENUCOLUMNS.menuLevel);
        		this.fnCreateMenu(sMenuId, sMenuName, nMenuLevel, sUpMenuId, sMenuUrl, i);
        	}

        	var nHeight=0;
        	for (var i = 0; i < this.divMenu.form.divBtnMenu.form.components.length; i++)
        	{
        		var objComp = this.divMenu.form.divBtnMenu.form.components[i];
        		//trace("objComp.name : " + objComp.name + " obj.menuid : " + obj.menuid + " objComp.upmenuid : " + objComp.upmenuid);
        		if(objComp.visible) {
        		    //trace("objComp.name : " + objComp.name);
        			nHeight+=nexacro.toNumber(objComp.height);
        		}
        	}
        	trace("nHeight : " + nHeight);
        	this.divMenu.form.divBtnMenu.height = nHeight;
        	if(this.grdMenu.height < this.divMenu.height) this.grdMenu.height = nHeight;
        	this.divMenu.form.resetScroll();
        };

        /**
         * @description menu creation
         */
        this.fnCreateMenu = function (sMenuId, sMenuName, nMenuLevel, sUpMenuId, sMenuUrl, index)
        {
        	//trace("sMenuId : " + sMenuId + " sMenuName : " + sMenuName + " nMenuLevel : " + nMenuLevel + " sUpMenuId : " + sUpMenuId + " sMenuUrl : " + sMenuUrl + " index : " + index);
        	//trace("this.divMenu.width: " + this.divMenu.form.divBtnMenu.getOffsetWidth());
        	var sClass = "";
        	if(nMenuLevel == 0){
        		var objComp = new Static();
        		objComp.init(this.fvBtnPrefix + sMenuId, 0, 0, "100%", "53", null, null);
        		sClass = "sta_LF_1dep"
        	}else if(nMenuLevel == 1){
        		var objComp = new Button();
        		objComp.init(this.fvBtnPrefix + sMenuId, 0, 0, "100%", "50", null, null);
        		if(this.dsMenu1.findRow( this.FRAME_MENUCOLUMNS.upMenuId, sMenuId ) > -1){
        		    sClass = "btn_LF_2depExp";
        			objComp.accessibilitydescription = "펼침";
        		}else{
        		    sClass = "btn_LF_2dep";
        		}
        		objComp.setEventHandler("onclick", this.btnMenu_onclick, this);
        	}else if(nMenuLevel == 2){
        		var objComp = new Button();
        		objComp.init(this.fvBtnPrefix + sMenuId, 0, 0, "100%", "50", null, null);
        		sClass = "btn_TF_Lastdep";
        		objComp.visible = false;
        		objComp.accessibilityrole = "link";
        		objComp.setEventHandler("onclick", this.btnMenu_onclick, this);
        	}

        	this.divMenu.form.divBtnMenu.addChild(objComp.name, objComp);
        	objComp.set_text(sMenuName);
        	objComp.cssclass = sClass;
        	objComp.menuid = sMenuId;
        	objComp.upmenuid = sUpMenuId;
        	objComp.menuurl = sMenuUrl;
        	objComp.show();
        };

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnPopupCallback = function (sPopupId, sRtn)
        {
        	trace("sPopupId : " + sPopupId + " sRtn : " + sRtn);
        	if(!this.gfnIsNull(sRtn))
        	{
        		if(sPopupId == "utilView2"){

        		}
        	}
        };

        this.btnMenu_onclick = function (obj, e)
        {
        	//trace("btnLeftMenu_onclick : obj.menuurl : " + obj.menuurl);
        	if(obj.cssclass == "btn_TF_Lastdep") {
        		this.objApp.mainframe.ChildFrame00.form.fnOpen(obj.menuid);
        		this.close();
        		//this.divMobile.visible = false;
        		return;
        	}else if(obj.cssclass == "btn_LF_2dep") {
        		this.objApp.mainframe.ChildFrame00.form.fnOpen(obj.menuid);
        		this.close();
        		//this.divMobile.visible = false;
        		return;
        	}else {
        		if(obj.cssclass == "btn_LF_2depColl") {
        			obj.cssclass = "btn_LF_2depExp";
        			obj.accessibilitydescription = "펼침";
        		}else{
        			obj.cssclass = "btn_LF_2depColl";
        			obj.accessibilitydescription = "접기";
        		}
        	}
        	for (var i = 0; i < this.divMenu.form.divBtnMenu.form.components.length; i++)
        	{
        		var objComp = this.divMenu.form.divBtnMenu.form.components[i];
        		if(objComp.upmenuid == obj.menuid) {
        			objComp.visible = !objComp.visible;
        		}
        	}
        	var nHeight=0;
        	for (var i = 0; i < this.divMenu.form.divBtnMenu.form.components.length; i++)
        	{
        		var objComp = this.divMenu.form.divBtnMenu.form.components[i];
        		if(objComp.visible) {
        			nHeight+=nexacro.toNumber(objComp.height);
        		}
        	}
        	trace("nHeight : " + nHeight);
        	this.divMenu.form.divBtnMenu.height = nHeight;
        	if(this.grdMenu.height < this.divMenu.height) this.grdMenu.height = nHeight;
        	this.divMenu.form.resetScroll();
        };

        this.dsMenu_onrowposchanged = function(obj,e)
        {
        	//trace("dsMenu_onrowposchanged : " + e.reason);
        	if(e.reason == "51") this.fnLoad(obj.getColumn(e.newrow,this.FRAME_MENUCOLUMNS.menuId));
        };

        this.btnClose_onclick = function(obj,e)
        {
        	this.close();
        };

        this.btnUtilView_onclick = function(obj,e)
        {
        	//trace("this.objApp.mainframe.width : " + this.objApp.mainframe.width + " this.objApp.mainframe.height : " + this.objApp.mainframe.height);
        	var sTitle = "글자·화면 설정";
        	var oArg   = {};
        	var oOption = {
        		popuptype:"modal"	//modal,modaless
        		//,width:this.objApp.mainframe.width
        		//,height:this.objApp.mainframe.height			//width,height 지정하지 않음 popup form size적용
        		,height:495			//width,height 지정하지 않음 popup form size적용
        		,autosize:false
        		,title:sTitle
        		,titlebar:false};
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("utilView2", "common::cmmUtilView2.xfdl", oArg, sPopupCallBack, oOption);
        };

        this.edtSearch_oneditclick = function(obj,e)
        {
        	this.close("utilView2");
        // 	var sTitle = "메뉴검색";
        // 	var oArg   = {};
        // 	var oOption = {
        // 		popuptype:"modal"	//modal,modaless
        // 		,width:this.objApp.mainframe.width
        // 		,height:this.objApp.mainframe.height			//width,height 지정하지 않음 popup form size적용
        // 		,autosize:false
        // 		,title:sTitle
        // 		,titlebar:false};
        // 	var sPopupCallBack = "fnPopupCallback";
        // 	this.gfnOpenPopup("utilView2", "frame::frmMobileSearch.xfdl", oArg, sPopupCallBack, oOption);
        };

        this.btnSearch_onclick = function(obj,e)
        {
            this.close("utilView2");
        // 	var sTitle = "메뉴검색";
        // 	var oArg   = {};
        // 	var oOption = {
        // 		popuptype:"modal"	//modal,modaless
        // 		,width:this.objApp.mainframe.width
        // 		,height:this.objApp.mainframe.height			//width,height 지정하지 않음 popup form size적용
        // 		,autosize:false
        // 		,title:sTitle
        // 		,titlebar:false};
        // 	var sPopupCallBack = "fnPopupCallback";
        // 	this.gfnOpenPopup("utilView2", "frame::frmMobileSearch.xfdl", oArg, sPopupCallBack, oOption);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onlayoutchanged",this.form_onlayoutchanged,this);
            this.btnUtilView.addEventHandler("onclick",this.btnUtilView_onclick,this);
            this.edtSearch.addEventHandler("oneditclick",this.edtSearch_oneditclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.dsMenu1.addEventHandler("onrowposchanged",this.dsMenu1_onrowposchanged,this);
            this.dsMenu.addEventHandler("onrowposchanged",this.dsMenu_onrowposchanged,this);
        };
        this.loadIncludeScript("frmMobile.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
