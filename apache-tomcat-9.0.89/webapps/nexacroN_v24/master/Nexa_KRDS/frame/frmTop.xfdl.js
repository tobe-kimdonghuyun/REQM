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
            this.set_accessibilityenable("false");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,152);
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


            obj = new Dataset("dsLang", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "ID","type" : "STRING","size" : "256"},{"id" : "LANGUAGE","type" : "STRING","size" : "256"}]},"Rows" : [{"LANGUAGE" : "한국어"},{"LANGUAGE" : "English(영어)"},{"LANGUAGE" : "中文(중국어)"},{"LANGUAGE" : "日本(일본어)"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnFirst","0","0","0","0",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_accessibilitylabel("KRDS");
            obj.set_accessibilityrole("none");
            this.addChild(obj.name, obj);

            obj = new Div("divSkip","0","0",null,"32","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_visible("true");
            obj.set_text("본문 바로가기");
            obj.set_background("transparent");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnGoBody","524","0","200",null,null,"0",null,null,null,null,this.divSkip.form);
            obj.set_taborder("0");
            obj.set_text("본문 바로가기");
            obj.set_cssclass("btn_TF_Skiplink");
            this.divSkip.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","100%","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_TF_MastheadBg");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staMastHead","0","0","391","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("이 누리집은 대한민국 공식 전자정부 누리집입니다.");
            obj.set_tablecellarea("0 0/1 2");
            obj.set_cssclass("sta_TF_MastheadTxt");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("btnLogin","1126","2","74","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("로그인");
            obj.set_cssclass("btn_TF_UtilLogin");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","984","30","1","16",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_TF_Utilline");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnUtilView","1066","16","125","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("글자·화면 설정");
            obj.set_cssclass("btn_TF_UtilView");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","24","44",null,"32","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_flexmainaxisalign("end");
            obj.set_flexcrossaxisalign("center");
            obj.set_tablecellarea("0/1");
            obj.set_horizontalgap("12");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"btnLogin\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_01_00\"/><PanelItem id=\"PanelItem00\" componentid=\"btnUtilView\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLogo","0","80","340","63",null,null,"240",null,null,null,this);
            obj.set_taborder("8");
            obj.set_tablecellarea("0/1");
            obj.set_text("유엑스Pro KRDS");
            obj.set_color("transparent");
            obj.set_cssclass("sta_TF_LogoUXPro");
            obj.set_accessibilityrole("heading1");
            this.addChild(obj.name, obj);

            obj = new Div("divTopBtn","450","80",null,"72","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_accessibilityenable("false");
            obj.set_formscrollbartype("none");
            obj.set_visible("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnAllMenu",null,"48","104","40","0",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("전체메뉴");
            obj.set_cssclass("btn_TF_AllmnuH");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","140",null,"12","0",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("div_TF_MnuwrapB");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSkip.form
            obj = new Layout("default","",0,0,this.divSkip.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnGoBody.set_taborder("0");
                p.btnGoBody.set_text("본문 바로가기");
                p.btnGoBody.set_cssclass("btn_TF_Skiplink");
                p.btnGoBody.move("524","0","200",null,null,"0");
            	}
            );
            this.divSkip.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divSkip.form
            obj = new Layout("Mobile_screen","",0,0,this.divSkip.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnGoBody.move("0%","0","100%",null,null,"0");
            	}
            );
            this.divSkip.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divTopBtn.form
            obj = new Layout("default","",0,0,this.divTopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("8");
            this.divTopBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divTopBtn.form
            obj = new Layout("Mobile_screen","",0,0,this.divTopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("8");
            this.divTopBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form
            obj = new Layout("Mobile_screen","",0,0,this.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1200,152,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_accessibilityenable("false");

                p.btnFirst.set_taborder("0");
                p.btnFirst.set_accessibilitylabel("KRDS");
                p.btnFirst.set_accessibilityrole("none");
                p.btnFirst.move("0","0","0","0",null,null);

                p.divSkip.set_taborder("1");
                p.divSkip.set_visible("true");
                p.divSkip.set_text("본문 바로가기");
                p.divSkip.set_background("transparent");
                p.divSkip.set_accessibilityenable("false");
                p.divSkip.move("0","0",null,"32","0",null);

                p.Static00.set_taborder("2");
                p.Static00.set_cssclass("sta_TF_MastheadBg");
                p.Static00.set_accessibilityenable("false");
                p.Static00.move("0","0","100%","32",null,null);

                p.staMastHead.set_taborder("3");
                p.staMastHead.set_text("이 누리집은 대한민국 공식 전자정부 누리집입니다.");
                p.staMastHead.set_tablecellarea("0 0/1 2");
                p.staMastHead.set_cssclass("sta_TF_MastheadTxt");
                p.staMastHead.set_flexgrow("1");
                p.staMastHead.move("0","0","391","32",null,null);

                p.btnLogin.set_taborder("4");
                p.btnLogin.set_text("로그인");
                p.btnLogin.set_cssclass("btn_TF_UtilLogin");
                p.btnLogin.set_visible("true");
                p.btnLogin.move("1126","2","74","28",null,null);

                p.Static01_01_00.set_taborder("5");
                p.Static01_01_00.set_cssclass("sta_TF_Utilline");
                p.Static01_01_00.set_accessibilityenable("false");
                p.Static01_01_00.move("984","30","1","16",null,null);

                p.btnUtilView.set_taborder("6");
                p.btnUtilView.set_text("글자·화면 설정");
                p.btnUtilView.set_cssclass("btn_TF_UtilView");
                p.btnUtilView.set_visible("true");
                p.btnUtilView.move("1066","16","125","28",null,null);

                p.Panel01_00.set_taborder("7");
                p.Panel01_00.set_flexmainaxisalign("end");
                p.Panel01_00.set_flexcrossaxisalign("center");
                p.Panel01_00.set_tablecellarea("0/1");
                p.Panel01_00.set_horizontalgap("12");
                p.Panel01_00.set_visible("true");
                p.Panel01_00.move("24","44",null,"32","0",null);

                p.staLogo.set_taborder("8");
                p.staLogo.set_tablecellarea("0/1");
                p.staLogo.set_text("유엑스Pro KRDS");
                p.staLogo.set_color("transparent");
                p.staLogo.set_cssclass("sta_TF_LogoUXPro");
                p.staLogo.set_accessibilityrole("heading1");
                p.staLogo.set_minwidth("240");
                p.staLogo.set_maxwidth("");
                p.staLogo.move("0","80","340","63",null,null);

                p.divTopBtn.set_taborder("9");
                p.divTopBtn.set_accessibilityenable("false");
                p.divTopBtn.set_formscrollbartype("none");
                p.divTopBtn.set_visible("true");
                p.divTopBtn.set_text("");
                p.divTopBtn.move("450","80",null,"72","0",null);

                p.btnAllMenu.set_taborder("10");
                p.btnAllMenu.set_text("전체메뉴");
                p.btnAllMenu.set_cssclass("btn_TF_AllmnuH");
                p.btnAllMenu.set_visible("false");
                p.btnAllMenu.move(null,"48","104","40","0",null);

                p.Div00.set_taborder("11");
                p.Div00.set_cssclass("div_TF_MnuwrapB");
                p.Div00.set_accessibilityenable("false");
                p.Div00.move("0","140",null,"12","0",null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Mobile_screen","Desktop_screen,mobile_small",1022,104,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divTopBtn.set_visible("false");
                p.divTopBtn.move("0","122",null,"56","0",null);

                p.staLogo.set_cssclass("sta_TF_MLogoUXpro");
                p.staLogo.move("0","52","160","32",null,null);

                p.staMastHead.move("0","0",null,"32","0",null);

                p.btnAllMenu.set_visible("true");
                p.btnAllMenu.move(null,"48","104","40","0",null);

                p.Panel01_00.set_visible("false");
                p.Panel01_00.move("27.40%","44",null,"48","10.18%",null);

                p.Static00.move("0","0","100%","32",null,null);

                p.divSkip.set_background("black");

                p.Div00.set_visible("false");
                p.Div00.move("0","112",null,"12","0",null);

                p.btnLogin.set_visible("false");

                p.btnUtilView.set_visible("false");
            	}
            );
            obj.set_mobileorientation("Landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmTop.xfdl", function() {
        /**
        *  KRDS
        *  @FileName 	frmTop.xfdl
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
        this.fvFirstGap 		= "0";
        this.fvBtnGap 			= 0;
        this.fvBtnHeight 		= 71;
        this.fvTopBtnPrefix 	= "TOP_";
        this.fvMenuId			= "";
        this.objApp = nexacro.getApplication();
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        /**
         * @description 화면 오픈
         */
        this.form_onload = function(obj,e)
        {
        	this.divSkip.set_height(0);
        	this.fnLoad();
        };

        /**
         * @description topmenu를 dsMenu로 copy
         */
        this.fnLoad = function ()
        {
        	var sFilter = this.FRAME_MENUCOLUMNS.menuLevel + " == '0' ";
        	this.objApp.gdsMenu.filter(sFilter);

        	// Top 메뉴 복사
        	this.dsMenu.copyData(this.objApp.gdsMenu, true);
        	this.objApp.gdsMenu.filter("");
        	// Top 메뉴 셋팅
        	this.fnSetTopMenu();
        };

        /**
         * @description topmenu 셋팅
         */
        this.fnSetTopMenu = function ()
        {
        	for (var i = 0; i < this.dsMenu.getRowCount(); i++)
        	{
        		var sMenuId = this.dsMenu.getColumn(i, this.FRAME_MENUCOLUMNS.menuId);
        		var sMenuName = this.dsMenu.getColumn(i, this.FRAME_MENUCOLUMNS.menuNm);

        		this.fnCreateTopMenu(sMenuId, sMenuName, i);
        	}

        	// 메뉴버튼 Redraw
        	//this.fnRedrawBtn();
        };

        /**
         * @description Top menu creation
         */
        this.fnCreateTopMenu = function (sTopId, sName, index)
        {
        	// Creating button
        	var objBtn = new Button();
        	//objBtn.init("btn"+this.fvTopBtnPrefix + sTopId, this.fnGetLeft(sTopId), 0, 160, this.fvBtnHeight, null, null);
        	objBtn.init("btn"+this.fvTopBtnPrefix + sTopId, 0, 0, 160, 71, null, null);
        	this.divTopBtn.form.addChild(objBtn.name, objBtn);

        	objBtn.set_text(sName);
        	objBtn.set_cssclass("btn_TF_MainMenuSin");
        	objBtn.menuid = sTopId;
        	objBtn.show();

        // 	// width 셋팅
        // 	objBtn.set_fittocontents("width");
        // 	var nWidth = objBtn.getOffsetWidth();
        // 	objBtn.set_fittocontents("none");
        // 	objBtn.set_width(nWidth + 20);

        	objBtn.setEventHandler("onclick", this.btnTopMenu_onclick, this);

        	// Creating div
        	var objDiv = new Div();
        	objDiv.init("div"+this.fvTopBtnPrefix + sTopId, 0, 62, null, 560, 0, null);
        	this.divTopBtn.form.addChild(objDiv.name, objDiv);

        	objDiv.url = "frame::frmTopMenu.xfdl";
        	objDiv.menuid = sTopId;
        	objDiv.show();

        };

        /**
         * @description 이전 버튼을 기준으로 버튼위치 리턴
         */
        this.fnGetLeft = function (sTopId)
        {
        	var nCurRow = this.dsMenu.findRow(this.FRAME_MENUCOLUMNS.menuId, sTopId);
        	if (nCurRow == 0) return this.fvFirstGap;

        	var objPrevTab = this.fnFindObj("btn"+this.fvTopBtnPrefix + this.dsMenu.getColumn(nCurRow - 1, this.FRAME_MENUCOLUMNS.menuId));
        	return objPrevTab.name+":0";
        };

        /**
         * @description Top 메뉴 버튼 click
         */
        this.objBtnTopMenu = "";
        this.btnTopMenu_onclick = function(obj,e)
        {
        	//trace("btnTopMenu_onclick : " + obj.menuid);
        	this.objBtnTopMenu = obj.menuid;
        	var sMenuId = obj.menuid;
        	if (this.gfnIsNull(sMenuId)) return;
        	// 선택된 메뉴버튼 css 활성화
        	this.fnSetActiveBtn(sMenuId);
        	// Top 메뉴 click
        	this.fnMenuClick(sMenuId);
        }

        /**
         * @description Top 메뉴 click
         */
        this.fnMenuClick = function(sMenuId)
        {
        	//trace("this.fvMenuId : " + this.fvMenuId + " sMenuId : " + sMenuId);
        	if(this.gfnIsNull(this.fvMenuId) || this.fvMenuId != sMenuId) {
        		var sFilter  = this.FRAME_MENUCOLUMNS.menuLevel + " == '1' ";
        			sFilter	+= "&& " + this.FRAME_MENUCOLUMNS.upMenuId + " == '" + sMenuId + "'" ;
        		this.objApp.gdsMenu.filter(sFilter);

        		// Top 메뉴 복사
        		this.divTopBtn.form.components["div"+this.fvTopBtnPrefix+sMenuId].form.dsMenu1.copyData(this.objApp.gdsMenu, true);
        		this.objApp.gdsMenu.filter("");
        	}
        	this.divTopBtn.form.components["div"+this.fvTopBtnPrefix+sMenuId].form.fnCreateMenu(0);
        	this.fvMenuId = sMenuId;
        	this.objApp.mainframe.ChildFrame00.form.fnOpen(sMenuId);
        // 	//try{
        //
        // 	// 맨 앞으로
        // 	var elem = this.parent.parent.divTop.getElement();
        // 	if(elem)
        // 	{
        // 		this.parent.parent.divTop.height = 866;
        // 		elem.setElementZIndex(1);
        // 	}
        // 	for(var i=0; i < this.divTopBtn.form.components.length; i++){
        // 		if(this.divTopBtn.form.components[i] instanceof nexacro.Div)
        // 		{
        // 			if(this.divTopBtn.form.components[i].menuid == this.objBtnTopMenu){
        // 				this.divTopBtn.form.components[i].visible = true;
        // 			}else{
        // 				this.divTopBtn.form.components[i].visible = false;
        // 			}
        // 		}
        // 	}
        // 	this.divTopBtn.height=622;
        // 	this.height=866;
        // 	this.parent.parent.resetScroll();
        // 	this.objApp.mainframe.ChildFrame00.form.divTopMenuBg.visible =true;
        // 	this.objApp.mainframe.ChildFrame00.form.back_dim.visible =true;

        };

        /**
         * @description menu tab 찾는 함수
         */
        this.fnFindObj = function (sId)
        {
        	return this.divTopBtn.form.components[sId];
        };

        /**
         * @description 메뉴버튼 활성화
         */
        this.fnSetActiveBtn = function (sMenuId)
        {
        	var objMenu;
        	for (var i = 0; i < this.dsMenu.getRowCount(); i++)
        	{
        		objMenu = this.fnFindObj("btn"+this.fvTopBtnPrefix + this.dsMenu.getColumn(i, this.FRAME_MENUCOLUMNS.menuId));
        		if (sMenuId == this.dsMenu.getColumn(i, this.FRAME_MENUCOLUMNS.menuId)) {
        			objMenu.set_cssclass("btn_TF_MainMenuSinS");
        		} else {
        			objMenu.set_cssclass("btn_TF_MainMenuSin");
        		}
        	}
        };

        this.form_onlayoutchanged = function(obj,e)
        {
        	//trace("form_onlayoutchanged : "+ e.newlayout + " : " + e.newlayoutwidth);
        // 	if(e.newlayout == "default"){
        // 		this.Panel02.visible = true;
        // 		this.Panel01_00.visible = true;
        // 		this.divTopBtn.visible = true;
        // 	}else{
        // 		this.height=104;
        // 		this.parent.parent.divTop.height = 104;
        // 	}
        // 	this.resetScroll();
        // 	this.parent.parent.resetScroll();
        };

        this.btnAllMenu_onclick = function(obj,e)
        {
        	var sTitle = "전체메뉴";
        	var oArg   = {};
        	var oOption = {
        		popuptype:"modal"	//modal,modaless
        		,width:this.objApp.mainframe.width
        		,height:this.objApp.mainframe.height			//width,height 지정하지 않음 popup form size적용
        		,title:sTitle
        		,titlebar:false};
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("mobileMenu", "frame::frmMobile.xfdl", oArg, sPopupCallBack, oOption);

        // 	this.parent.parent.divMobile.visible = true;
        // 	this.parent.parent.divMobile.move(0,0,this.objApp.mainframe.width,this.objApp.mainframe.height);
        //	this.resetScroll();
        };

        this.btnLanguage_onclick = function(obj,e)
        {
        	this.cboLanguage.set_visible(true);
        	this.cboLanguage.dropdown();
        };

        this.btnUtilView_onclick = function(obj,e)
        {
        	var sTitle = "글자·화면 설정";
        	var oArg   = {};
        	var oOption = {
        		popuptype:"modal"	//modal,modaless
        		,title:sTitle
        		,titlebar:false};
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("utilView", "common::cmmUtilView2.xfdl", oArg, sPopupCallBack, oOption);
        };

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnPopupCallback = function (sPopupId, sRtn)
        {
        	//trace("sPopupId : " + sPopupId + " sRtn : " + sRtn);
        	if(!this.gfnIsNull(sRtn))
        	{
        		if(sPopupId == "mobileMenu"){
        			if(sRtn == "utilView2"){
        				var sTitle = "메뉴검색";
        				var oArg   = {};
        				var oOption = {
        					popuptype:"modal"	//modal,modaless
        					,width:this.objApp.mainframe.width
        					,height:this.objApp.mainframe.height			//width,height 지정하지 않음 popup form size적용
        					,autosize:false
        					,title:sTitle
        					,titlebar:false};
        				var sPopupCallBack = "fnPopupCallback";
        				this.gfnOpenPopup("utilView2", "frame::frmMobileSearch.xfdl", oArg, sPopupCallBack, oOption);
        			}
        		}
        	}
        };

        this.divSkip_onkillfocus = function(obj,e)
        {
        	this.divSkip.set_height(0);
        	var elem = this.divSkip.getElement();
        	if(elem)
        	{
        		elem.setElementZIndex("");
        	}
        };

        this.divSkip_onsetfocus = function(obj,e)
        {
        	this.divSkip.set_height(32);

        	var elem = this.divSkip.getElement();
        	if(elem)
        	{
        		elem.setElementZIndex(1);
        	}
        };

        this.cboLanguage_onitemchanged = function(obj,e)
        {
        	obj.set_visible(false);
        };

        this.divSkip_btnGoBody_onclick = function(obj,e)
        {
        	var divFirstFocus = this.parent.parent.divMain.form.divWork.form.getFirstAccessibilityComponent(true);
        	//trace(divFirstFocus.name);

            divFirstFocus.setFocus();
        };

        this.staLogo_onclick = function(obj,e)
        {
        	this.parent.parent.fnOpenHome();
        };

        this.Combo00_00_onitemchanged = function(obj,e)
        {

        };

        this.Combo00_00_oncloseup = function(obj,e)
        {
        	obj.value = "";
        };

        this.Combo00_00_onkillfocus = function(obj,e)
        {
        	obj.value = "";
        };

        this.btnLogin_onclick = function(obj,e)
        {
        	this.parent.parent.fnOpenLogin();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onlayoutchanged",this.form_onlayoutchanged,this);
            this.divSkip.addEventHandler("onkillfocus",this.divSkip_onkillfocus,this);
            this.divSkip.addEventHandler("onsetfocus",this.divSkip_onsetfocus,this);
            this.divSkip.form.btnGoBody.addEventHandler("onclick",this.divSkip_btnGoBody_onclick,this);
            this.btnLogin.addEventHandler("onclick",this.btnLogin_onclick,this);
            this.btnUtilView.addEventHandler("onclick",this.btnUtilView_onclick,this);
            this.staLogo.addEventHandler("onclick",this.staLogo_onclick,this);
            this.divTopBtn.addEventHandler("onkillfocus",this.divTopBtn_onkillfocus,this);
            this.btnAllMenu.addEventHandler("onclick",this.btnAllMenu_onclick,this);
            this.dsMenu1.addEventHandler("onrowposchanged",this.dsMenu1_onrowposchanged,this);
        };
        this.loadIncludeScript("frmTop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
