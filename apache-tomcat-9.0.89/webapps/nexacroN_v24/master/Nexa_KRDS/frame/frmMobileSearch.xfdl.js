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
            obj = new Button("btnClose",null,"16","32","32","16",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_POP_Cancel");
            obj.set_accessibilitylabel("닫기");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSearch","16","174",null,"48","16",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_displaynulltext("메뉴명을 입력해주세요");
            obj.set_cssclass("edt_WF_Sch");
            obj.set_accessibilitylabel("메뉴 검색");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"178","40","40","22",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_EdtSch");
            obj.set_enable("true");
            obj.set_accessibilitylabel("메뉴 검색");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","222",null,"24","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_TF_Divider");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Div("divMenu","0","246",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("div_LF_Linklist");
            this.addChild(obj.name, obj);

            obj = new Div("divBtnMenu","0","0",null,null,"0","0",null,null,null,null,this.divMenu.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_LF_Linklist");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none");
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
            obj.set_spacing("24px 16px");
            obj.set_verticalgap("24");
            obj.set_flexwrap("nowrap");
            this.divMenu.form.divBtnMenu.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divMenu.form.divBtnMenu.form
            obj = new Layout("Mobile_screen","",0,0,this.divMenu.form.divBtnMenu.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            obj.set_spacing("24px 16px");
            obj.set_verticalgap("24");
            obj.set_flexwrap("nowrap");
            this.divMenu.form.divBtnMenu.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divMenu.form
            obj = new Layout("default","",0,0,this.divMenu.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divBtnMenu.set_taborder("0");
                p.divBtnMenu.set_cssclass("div_LF_Linklist");
                p.divBtnMenu.set_fittocontents("height");
                p.divBtnMenu.set_formscrollbartype("none");
                p.divBtnMenu.set_accessibilityenable("false");
                p.divBtnMenu.move("0","0",null,null,"0","0");
            	}
            );
            obj.set_spacing("24px 16px");
            obj.set_verticalgap("24");
            obj.set_flexwrap("nowrap");
            this.divMenu.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divMenu.form
            obj = new Layout("Mobile_screen","",0,0,this.divMenu.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_spacing("24px 16px");
            obj.set_verticalgap("24");
            obj.set_flexwrap("nowrap");
            this.divMenu.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","mobile_small,Desktop_screen",840,1000,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmMobileSearch.xfdl", function() {
        /**
        *  KRDS
        *  @FileName 	frmMobileSearch.xfdl
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

        };

        this.btnClose_onclick = function(obj,e)
        {
        	this.close();
        };

        this.edtSearch_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13) this.fnSearch(obj.value);
        };

        this.fnSearch = function(sWord)
        {
        	for (var i = this.divMenu.form.divBtnMenu.form.components.length - 1; i > -1; i--) {
        		var objDel = this.divMenu.form.divBtnMenu.removeChild(this.divMenu.form.divBtnMenu.form.components[i].name);
        		//trace(objDel.name);
        		objDel.destroy();
        		objDel = null;
        	}
        	var objDs = this.objApp.gdsMenu;
        	var sMenuId = "";
        	var sMenuNm = "";
        	var nMenuLevel = -1;
        	var objCompDiv = "";
        	var objComp = "";
        	var sFont = "normal 400 17px/150% 'GOV'";
        	for(var i=0; i < objDs.rowcount; i++){
        	    var nLeft = 0;
        		if(objDs.getColumn(i, this.FRAME_MENUCOLUMNS.menuNm).indexOf(sWord) > -1 && !this.gfnIsNull(objDs.getColumn(i, this.FRAME_MENUCOLUMNS.menuUrl))){
        			sMenuId = objDs.getColumn(i, this.FRAME_MENUCOLUMNS.menuId);
        			sMenuNm = objDs.getColumn(i, this.FRAME_MENUCOLUMNS.menuNm);
        			//trace(sMenuId + " : " + sMenuNm + " : " + nMenuLevel + " : "+ i);
        			objCompDiv = new Div();
        			objCompDiv.init(this.fvBtnPrefix + sMenuId, 0, 0, 100, 26, null, null);
        			this.divMenu.form.divBtnMenu.addChild(objCompDiv.name, objCompDiv);
        			objCompDiv.fittocontents = "width";
        			objCompDiv.show();

        			if(objDs.lookup(this.FRAME_MENUCOLUMNS.menuId, sMenuId, this.FRAME_MENUCOLUMNS.menuLevel) == 2){
        				var strUpMenuId2 = objDs.lookup(this.FRAME_MENUCOLUMNS.menuId, sMenuId, this.FRAME_MENUCOLUMNS.upMenuId);
        				var strNavi2 = objDs.getColumn(objDs.findRow(this.FRAME_MENUCOLUMNS.menuId, strUpMenuId2), this.FRAME_MENUCOLUMNS.menuNm);
        				//trace("strNavi2 : " + strNavi2 + " strUpMenuId2 : " + strUpMenuId2);
        				if(objDs.lookup(this.FRAME_MENUCOLUMNS.menuId, strUpMenuId2, this.FRAME_MENUCOLUMNS.menuLevel) == 1){
        					var strUpMenuId1 = objDs.lookup(this.FRAME_MENUCOLUMNS.menuId, strUpMenuId2, this.FRAME_MENUCOLUMNS.upMenuId);
        					var strNavi1 = objDs.getColumn(objDs.findRow(this.FRAME_MENUCOLUMNS.menuId, strUpMenuId1), this.FRAME_MENUCOLUMNS.menuNm);
        					//trace("strNavi1 : " + strNavi1);

        					objComp = new Static();
        					objComp.init(this.fvBtnPrefix + sMenuId + "_" + strUpMenuId1, nLeft, 0, 100, 26, null, null);
        					objComp.setEventHandler("onclick", this.btnMenu_onclick, this);
        					objCompDiv.addChild(objComp.name, objComp);
        					objComp.set_text(strNavi1);
        					objComp.cssclass = "sta_WF_Dep";
        					objComp.fittocontents = "width";
        					objComp.usedecorate = true;
        					objComp.menuid = strUpMenuId1;
        					objComp.accessibilityrole = "link";
        					objComp.show();
        					var objSize = nexacro.getTextSize( objComp.text, sFont);
        					nLeft+=objSize.nx;
        					//trace("nLeft : " + nLeft);
        				}

        				objComp = new Static();
        				objComp.init(this.fvBtnPrefix + sMenuId + "_" + strUpMenuId2, nLeft, 0, 100, 26, null, null);
        				objComp.setEventHandler("onclick", this.btnMenu_onclick, this);
        				objCompDiv.addChild(objComp.name, objComp);
        				objComp.set_text(strNavi2);
        				objComp.cssclass = "sta_WF_Depnext";
        				objComp.fittocontents = "width";
        				objComp.usedecorate = true;
        				objComp.menuid = strUpMenuId2;
        				objComp.accessibilityrole = "link";
        				objComp.show();
        				var objSize = nexacro.getTextSize( objComp.text, sFont);
        				nLeft+=objSize.nx+24;
        				//trace("nLeft : " + nLeft);

        			}

        			if(objDs.lookup(this.FRAME_MENUCOLUMNS.menuId, sMenuId, this.FRAME_MENUCOLUMNS.menuLevel) == 1){
        				var strUpMenuId = objDs.lookup(this.FRAME_MENUCOLUMNS.menuId, sMenuId, this.FRAME_MENUCOLUMNS.upMenuId);
        				var strNavi1 = objDs.getColumn(objDs.findRow(this.FRAME_MENUCOLUMNS.menuId, strUpMenuId), this.FRAME_MENUCOLUMNS.menuNm);
        				//trace("strNavi1 : " + strNavi1);
        				objComp = new Static();
        				objComp.init(this.fvBtnPrefix + sMenuId + "_" + strUpMenuId1, nLeft, 0, 100, 26, null, null);
        				objComp.setEventHandler("onclick", this.btnMenu_onclick, this);
        				objCompDiv.addChild(objComp.name, objComp);
        				objComp.set_text(strNavi1);
        				objComp.cssclass = "sta_WF_Dep";
        				objComp.fittocontents = "width";
        				objComp.usedecorate = true;
        				objComp.menuid = strUpMenuId;
        				objComp.accessibilityrole = "link";
        				objComp.show();
        				var objSize = nexacro.getTextSize( objComp.text, sFont);
        				nLeft+=objSize.nx;
        				//trace("nLeft : " + nLeft);
        			}

        			objComp = new Static();
        			objComp.init(this.fvBtnPrefix + sMenuId, nLeft, 0, 100, 26, null, null);
        			objComp.setEventHandler("onclick", this.btnMenu_onclick, this);
        			objCompDiv.addChild(objComp.name, objComp);
        			objComp.set_text(nexacro.replaceAll(sMenuNm, sWord, "<b v='true'>" + sWord +"</b>"));
        			objComp.cssclass = "sta_WF_Depnext";
        			objComp.fittocontents = "width";
        			objComp.usedecorate = true;
        			objComp.menuid = sMenuId;
        			objComp.accessibilityrole = "link";
        			objComp.show();

        		}
        	}
        	this.divMenu.form.divBtnMenu.form.resetScroll();
        	this.divMenu.form.resetScroll();
        }

        this.btnMenu_onclick = function (obj, e)
        {
        // 	var arrPopFrame = nexacro.getPopupFrames();
        // 	for(var i=0; i < arrPopFrame.length; i++)
        // 	{
        // 		arrPopFrame[i].form.close();
        // 	}
        	nexacro._OnceCallbackTimer.callonce(this, function () {
        		this.objApp.mainframe.ChildFrame00.form.fnOpen(obj.menuid);
        	}, 100);
        	this.close();
        };

        this.btnSearch_onclick = function(obj,e)
        {
        	this.fnSearch(this.edtSearch.text);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onlayoutchanged",this.form_onlayoutchanged,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.edtSearch.addEventHandler("onkeydown",this.edtSearch_onkeydown,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.dsMenu1.addEventHandler("onrowposchanged",this.dsMenu1_onrowposchanged,this);
            this.dsMenu.addEventHandler("onrowposchanged",this.dsMenu_onrowposchanged,this);
        };
        this.loadIncludeScript("frmMobileSearch.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
