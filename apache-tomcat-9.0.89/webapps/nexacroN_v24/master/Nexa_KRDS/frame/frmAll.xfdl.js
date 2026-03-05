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
                this._setFormPosition(1248,2000);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMenu", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "MENU_ID","type" : "STRING","size" : "256"},{"id" : "MENU_NM","type" : "STRING","size" : "256"},{"id" : "MENU_LV","type" : "STRING","size" : "256"},{"id" : "MENU_URL","type" : "STRING","size" : "256"}]},"Rows" : [{"MENU_ID" : "000","MENU_NM" : "컴포넌트","MENU_LV" : "0"},{"MENU_ID" : "001","MENU_NM" : "아이덴티티","MENU_LV" : "1"},{"MENU_ID" : "002","MENU_NM" : "공식 배너 Masthead","MENU_LV" : "2","MENU_URL" : "design::component/Component_01.xfdl"},{"MENU_ID" : "003","MENU_NM" : "운영기관 식별자 Identifier","MENU_LV" : "2","MENU_URL" : "design::component/Component_01.xfdl"},{"MENU_ID" : "004","MENU_NM" : "헤더 Header","MENU_LV" : "2","MENU_URL" : "design::component/Component_01.xfdl"},{"MENU_ID" : "005","MENU_NM" : "푸터 Footer","MENU_LV" : "2","MENU_URL" : "design::component/Component_01.xfdl"},{"MENU_ID" : "006","MENU_NM" : "탐색","MENU_LV" : "1"},{"MENU_ID" : "007","MENU_NM" : "건너뛰기 링크 Skip link","MENU_LV" : "2","MENU_URL" : "design::component/Component_02.xfdl"},{"MENU_ID" : "008","MENU_NM" : "메인 메뉴 Main menu","MENU_LV" : "2","MENU_URL" : "design::component/Component_02.xfdl"},{"MENU_ID" : "009","MENU_NM" : "브레드크럼 Breadcrumb","MENU_LV" : "2","MENU_URL" : "design::component/Component_02.xfdl"},{"MENU_ID" : "010","MENU_NM" : "사이드 메뉴 Side navigation","MENU_LV" : "2","MENU_URL" : "design::component/Component_02.xfdl"},{"MENU_ID" : "011","MENU_NM" : "콘텐츠 내 탐색 In-page navigation","MENU_LV" : "2","MENU_URL" : "design::component/Component_02.xfdl"},{"MENU_ID" : "012","MENU_NM" : "페이지네이션 Pagination","MENU_LV" : "2","MENU_URL" : "design::component/Component_02.xfdl"},{"MENU_ID" : "013","MENU_NM" : "탭바 Tab bars","MENU_LV" : "2","MENU_URL" : "design::component/Component_02.xfdl"},{"MENU_ID" : "014","MENU_NM" : "레이아웃 및 표현","MENU_LV" : "1"},{"MENU_ID" : "015","MENU_NM" : "구조화 목록 Structured list","MENU_LV" : "2","MENU_URL" : "design::component/Component_03.xfdl"},{"MENU_ID" : "016","MENU_NM" : "긴급 공지 Critical alerts","MENU_LV" : "2","MENU_URL" : "design::component/Component_03.xfdl"},{"MENU_ID" : "017","MENU_NM" : "달력 Calendar","MENU_LV" : "2","MENU_URL" : "design::component/Component_03.xfdl"},{"MENU_ID" : "018","MENU_NM" : "디스클로저 Disclosure","MENU_LV" : "2","MENU_URL" : "design::component/Component_03.xfdl"},{"MENU_ID" : "019","MENU_NM" : "모달 Modal","MENU_LV" : "2","MENU_URL" : "design::component/Component_03.xfdl"},{"MENU_ID" : "020","MENU_NM" : "배지 Badge","MENU_LV" : "2","MENU_URL" : "design::component/Component_03.xfdl"},{"MENU_ID" : "021","MENU_NM" : "아코디언 Accordion","MENU_LV" : "2","MENU_URL" : "design::component/Component_03.xfdl"},{"MENU_ID" : "022","MENU_NM" : "이미지 Image","MENU_LV" : "2","MENU_URL" : "design::component/Component_03.xfdl"},{"MENU_ID" : "023","MENU_NM" : "캐러셀 Carousel","MENU_LV" : "2","MENU_URL" : "design::component/Component_03.xfdl"},{"MENU_ID" : "024","MENU_NM" : "탭 Tab","MENU_LV" : "2","MENU_URL" : "design::component/Component_03.xfdl"},{"MENU_ID" : "025","MENU_NM" : "표 Table","MENU_LV" : "2","MENU_URL" : "design::component/Component_03.xfdl"},{"MENU_ID" : "026","MENU_NM" : "스플래시 스크린 Splash screen","MENU_LV" : "2","MENU_URL" : "design::component/Component_03.xfdl"},{"MENU_ID" : "027","MENU_NM" : "텍스트 목록 Text list","MENU_LV" : "2","MENU_URL" : "design::component/Component_03.xfdl"},{"MENU_ID" : "028","MENU_NM" : "액션","MENU_LV" : "1"},{"MENU_ID" : "029","MENU_NM" : "링크 Link","MENU_LV" : "2","MENU_URL" : "design::component/Component_04.xfdl"},{"MENU_ID" : "030","MENU_NM" : "버튼 Button","MENU_LV" : "2","MENU_URL" : "design::component/Component_04.xfdl"},{"MENU_ID" : "031","MENU_NM" : "선택","MENU_LV" : "1"},{"MENU_ID" : "032","MENU_NM" : "라디오 버튼 Radio button","MENU_LV" : "2","MENU_URL" : "design::component/Component_05.xfdl"},{"MENU_ID" : "033","MENU_NM" : "체크박스 Checkbox","MENU_LV" : "2","MENU_URL" : "design::component/Component_05.xfdl"},{"MENU_ID" : "034","MENU_NM" : "셀렉트 Select","MENU_LV" : "2","MENU_URL" : "design::component/Component_05.xfdl"},{"MENU_ID" : "035","MENU_NM" : "태그 Tag","MENU_LV" : "2","MENU_URL" : "design::component/Component_05.xfdl"},{"MENU_ID" : "036","MENU_NM" : "토글스위치 Toggle Switch","MENU_LV" : "2","MENU_URL" : "design::component/Component_05.xfdl"},{"MENU_ID" : "037","MENU_NM" : "피드백","MENU_LV" : "1"},{"MENU_ID" : "038","MENU_NM" : "단계표시기 Step indicator","MENU_LV" : "2","MENU_URL" : "design::component/Component_06.xfdl"},{"MENU_ID" : "039","MENU_NM" : "스피너 (Spinner)","MENU_LV" : "2","MENU_URL" : "design::component/Component_06.xfdl"},{"MENU_ID" : "040","MENU_NM" : "도움","MENU_LV" : "1"},{"MENU_ID" : "041","MENU_NM" : "도움 패널(help panel)","MENU_LV" : "2","MENU_URL" : "design::component/Component_07.xfdl"},{"MENU_ID" : "042","MENU_NM" : "따라하기 패널 Tutorial panel","MENU_LV" : "2","MENU_URL" : "design::component/Component_07.xfdl"},{"MENU_ID" : "043","MENU_NM" : "맥락적 도움말 Contextual help","MENU_LV" : "2","MENU_URL" : "design::component/Component_07.xfdl"},{"MENU_ID" : "044","MENU_NM" : "코치마크 Coach mark","MENU_LV" : "2","MENU_URL" : "design::component/Component_07.xfdl"},{"MENU_ID" : "045","MENU_NM" : "툴팁 Tooltip","MENU_LV" : "2","MENU_URL" : "design::component/Component_07.xfdl"},{"MENU_ID" : "046","MENU_NM" : "입력","MENU_LV" : "1"},{"MENU_ID" : "047","MENU_NM" : "날짜 입력필드 Date input","MENU_LV" : "2","MENU_URL" : "design::component/Component_08.xfdl"},{"MENU_ID" : "048","MENU_NM" : "텍스트 영역 Textarea","MENU_LV" : "2","MENU_URL" : "design::component/Component_08.xfdl"},{"MENU_ID" : "049","MENU_NM" : "텍스트 입력 필드 Text input","MENU_LV" : "2","MENU_URL" : "design::component/Component_08.xfdl"},{"MENU_ID" : "050","MENU_NM" : "파일 업로드 File upload","MENU_LV" : "2","MENU_URL" : "design::component/Component_08.xfdl"},{"MENU_ID" : "051","MENU_NM" : "설정","MENU_LV" : "1"},{"MENU_ID" : "052","MENU_NM" : "언어 변경 Language switcher","MENU_LV" : "2","MENU_URL" : "design::component/Component_09.xfdl"},{"MENU_ID" : "053","MENU_NM" : "화면 크기 조정 Resize","MENU_LV" : "2","MENU_URL" : "design::component/Component_09.xfdl"},{"MENU_ID" : "054","MENU_NM" : "콘텐츠","MENU_LV" : "1"},{"MENU_ID" : "055","MENU_NM" : "접근 가능한 미디어 Accessible multimedia","MENU_LV" : "2","MENU_URL" : "design::component/Component_10.xfdl"},{"MENU_ID" : "056","MENU_NM" : "숨긴 콘텐츠 Visually hidden","MENU_LV" : "2","MENU_URL" : "design::component/Component_10.xfdl"},{"MENU_ID" : "057","MENU_NM" : "기본패턴","MENU_LV" : "0"},{"MENU_ID" : "058","MENU_NM" : "개인 식별 정보 입력","MENU_LV" : "1","MENU_URL" : "design::pattern/patten_01.xfdl"},{"MENU_ID" : "059","MENU_NM" : "도움","MENU_LV" : "1","MENU_URL" : "design::pattern/patten_02.xfdl"},{"MENU_ID" : "060","MENU_NM" : "동의","MENU_LV" : "1","MENU_URL" : "design::pattern/patten_03.xfdl"},{"MENU_ID" : "061","MENU_NM" : "목록 탐색","MENU_LV" : "1","MENU_URL" : "design::pattern/patten_04.xfdl"},{"MENU_ID" : "062","MENU_NM" : "사용자 피드백","MENU_LV" : "1","MENU_URL" : "design::pattern/patten_05.xfdl"},{"MENU_ID" : "063","MENU_NM" : "상세 정보 확인","MENU_LV" : "1","MENU_URL" : "design::pattern/patten_06.xfdl"},{"MENU_ID" : "064","MENU_NM" : "오류","MENU_LV" : "1","MENU_URL" : "design::pattern/patten_07.xfdl"},{"MENU_ID" : "065","MENU_NM" : "입력폼","MENU_LV" : "1","MENU_URL" : "design::pattern/patten_08.xfdl"},{"MENU_ID" : "066","MENU_NM" : "첨부 파일","MENU_LV" : "1","MENU_URL" : "design::pattern/patten_09.xfdl"},{"MENU_ID" : "067","MENU_NM" : "필터링·정렬","MENU_LV" : "1","MENU_URL" : "design::pattern/patten_10.xfdl"},{"MENU_ID" : "068","MENU_NM" : "확인","MENU_LV" : "1","MENU_URL" : "design::pattern/patten_11.xfdl"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenu1", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "MENU_ID","type" : "STRING","size" : "256"},{"id" : "MENU_NM","type" : "STRING","size" : "256"},{"id" : "MENU_LV","type" : "STRING","size" : "256"},{"id" : "MENU_URL","type" : "STRING","size" : "256"}]},"Rows" : [{"MENU_ID" : "000","MENU_NM" : "컴포넌트","MENU_LV" : "0"},{"MENU_ID" : "001","MENU_NM" : "아이덴티티","MENU_LV" : "1"},{"MENU_ID" : "002","MENU_NM" : "공식 배너 Masthead","MENU_LV" : "2","MENU_URL" : "design::component/Component_01.xfdl"},{"MENU_ID" : "003","MENU_NM" : "운영기관 식별자 Identifier","MENU_LV" : "2","MENU_URL" : "design::component/Component_01.xfdl"},{"MENU_ID" : "004","MENU_NM" : "헤더 Header","MENU_LV" : "2","MENU_URL" : "design::component/Component_01.xfdl"},{"MENU_ID" : "005","MENU_NM" : "푸터 Footer","MENU_LV" : "2","MENU_URL" : "design::component/Component_01.xfdl"},{"MENU_ID" : "006","MENU_NM" : "탐색","MENU_LV" : "1"},{"MENU_ID" : "007","MENU_NM" : "건너뛰기 링크 Skip link","MENU_LV" : "2","MENU_URL" : "design::component/Component_02.xfdl"},{"MENU_ID" : "008","MENU_NM" : "메인 메뉴 Main menu","MENU_LV" : "2","MENU_URL" : "design::component/Component_02.xfdl"},{"MENU_ID" : "009","MENU_NM" : "브레드크럼 Breadcrumb","MENU_LV" : "2","MENU_URL" : "design::component/Component_02.xfdl"},{"MENU_ID" : "010","MENU_NM" : "사이드 메뉴 Side navigation","MENU_LV" : "2","MENU_URL" : "design::component/Component_02.xfdl"},{"MENU_ID" : "011","MENU_NM" : "콘텐츠 내 탐색 In-page navigation","MENU_LV" : "2","MENU_URL" : "design::component/Component_02.xfdl"},{"MENU_ID" : "012","MENU_NM" : "페이지네이션 Pagination","MENU_LV" : "2","MENU_URL" : "design::component/Component_02.xfdl"},{"MENU_ID" : "013","MENU_NM" : "탭바 Tab bars","MENU_LV" : "2","MENU_URL" : "design::component/Component_02.xfdl"},{"MENU_ID" : "014","MENU_NM" : "레이아웃 및 표현","MENU_LV" : "1"},{"MENU_ID" : "015","MENU_NM" : "구조화 목록 Structured list","MENU_LV" : "2","MENU_URL" : "design::component/Component_03.xfdl"},{"MENU_ID" : "016","MENU_NM" : "긴급 공지 Critical alerts","MENU_LV" : "2","MENU_URL" : "design::component/Component_03.xfdl"},{"MENU_ID" : "017","MENU_NM" : "달력 Calendar","MENU_LV" : "2","MENU_URL" : "design::component/Component_03.xfdl"},{"MENU_ID" : "018","MENU_NM" : "디스클로저 Disclosure","MENU_LV" : "2","MENU_URL" : "design::component/Component_03.xfdl"},{"MENU_ID" : "019","MENU_NM" : "모달 Modal","MENU_LV" : "2","MENU_URL" : "design::component/Component_03.xfdl"},{"MENU_ID" : "020","MENU_NM" : "배지 Badge","MENU_LV" : "2","MENU_URL" : "design::component/Component_03.xfdl"},{"MENU_ID" : "021","MENU_NM" : "아코디언 Accordion","MENU_LV" : "2","MENU_URL" : "design::component/Component_03.xfdl"},{"MENU_ID" : "022","MENU_NM" : "이미지 Image","MENU_LV" : "2","MENU_URL" : "design::component/Component_03.xfdl"},{"MENU_ID" : "023","MENU_NM" : "캐러셀 Carousel","MENU_LV" : "2","MENU_URL" : "design::component/Component_03.xfdl"},{"MENU_ID" : "024","MENU_NM" : "탭 Tab","MENU_LV" : "2","MENU_URL" : "design::component/Component_03.xfdl"},{"MENU_ID" : "025","MENU_NM" : "표 Table","MENU_LV" : "2","MENU_URL" : "design::component/Component_03.xfdl"},{"MENU_ID" : "026","MENU_NM" : "스플래시 스크린 Splash screen","MENU_LV" : "2","MENU_URL" : "design::component/Component_03.xfdl"},{"MENU_ID" : "027","MENU_NM" : "텍스트 목록 Text list","MENU_LV" : "2","MENU_URL" : "design::component/Component_03.xfdl"},{"MENU_ID" : "028","MENU_NM" : "액션","MENU_LV" : "1"},{"MENU_ID" : "029","MENU_NM" : "링크 Link","MENU_LV" : "2","MENU_URL" : "design::component/Component_04.xfdl"},{"MENU_ID" : "030","MENU_NM" : "버튼 Button","MENU_LV" : "2","MENU_URL" : "design::component/Component_04.xfdl"},{"MENU_ID" : "031","MENU_NM" : "선택","MENU_LV" : "1"},{"MENU_ID" : "032","MENU_NM" : "라디오 버튼 Radio button","MENU_LV" : "2","MENU_URL" : "design::component/Component_05.xfdl"},{"MENU_ID" : "033","MENU_NM" : "체크박스 Checkbox","MENU_LV" : "2","MENU_URL" : "design::component/Component_05.xfdl"},{"MENU_ID" : "034","MENU_NM" : "셀렉트 Select","MENU_LV" : "2","MENU_URL" : "design::component/Component_05.xfdl"},{"MENU_ID" : "035","MENU_NM" : "태그 Tag","MENU_LV" : "2","MENU_URL" : "design::component/Component_05.xfdl"},{"MENU_ID" : "036","MENU_NM" : "토글스위치 Toggle Switch","MENU_LV" : "2","MENU_URL" : "design::component/Component_05.xfdl"},{"MENU_ID" : "037","MENU_NM" : "피드백","MENU_LV" : "1"},{"MENU_ID" : "038","MENU_NM" : "단계표시기 Step indicator","MENU_LV" : "2","MENU_URL" : "design::component/Component_06.xfdl"},{"MENU_ID" : "039","MENU_NM" : "스피너 (Spinner)","MENU_LV" : "2","MENU_URL" : "design::component/Component_06.xfdl"},{"MENU_ID" : "040","MENU_NM" : "도움","MENU_LV" : "1"},{"MENU_ID" : "041","MENU_NM" : "도움 패널(help panel)","MENU_LV" : "2","MENU_URL" : "design::component/Component_07.xfdl"},{"MENU_ID" : "042","MENU_NM" : "따라하기 패널 Tutorial panel","MENU_LV" : "2","MENU_URL" : "design::component/Component_07.xfdl"},{"MENU_ID" : "043","MENU_NM" : "맥락적 도움말 Contextual help","MENU_LV" : "2","MENU_URL" : "design::component/Component_07.xfdl"},{"MENU_ID" : "044","MENU_NM" : "코치마크 Coach mark","MENU_LV" : "2","MENU_URL" : "design::component/Component_07.xfdl"},{"MENU_ID" : "045","MENU_NM" : "툴팁 Tooltip","MENU_LV" : "2","MENU_URL" : "design::component/Component_07.xfdl"},{"MENU_ID" : "046","MENU_NM" : "입력","MENU_LV" : "1"},{"MENU_ID" : "047","MENU_NM" : "날짜 입력필드 Date input","MENU_LV" : "2","MENU_URL" : "design::component/Component_08.xfdl"},{"MENU_ID" : "048","MENU_NM" : "텍스트 영역 Textarea","MENU_LV" : "2","MENU_URL" : "design::component/Component_08.xfdl"},{"MENU_ID" : "049","MENU_NM" : "텍스트 입력 필드 Text input","MENU_LV" : "2","MENU_URL" : "design::component/Component_08.xfdl"},{"MENU_ID" : "050","MENU_NM" : "파일 업로드 File upload","MENU_LV" : "2","MENU_URL" : "design::component/Component_08.xfdl"},{"MENU_ID" : "051","MENU_NM" : "설정","MENU_LV" : "1"},{"MENU_ID" : "052","MENU_NM" : "언어 변경 Language switcher","MENU_LV" : "2","MENU_URL" : "design::component/Component_09.xfdl"},{"MENU_ID" : "053","MENU_NM" : "화면 크기 조정 Resize","MENU_LV" : "2","MENU_URL" : "design::component/Component_09.xfdl"},{"MENU_ID" : "054","MENU_NM" : "콘텐츠","MENU_LV" : "1"},{"MENU_ID" : "055","MENU_NM" : "접근 가능한 미디어 Accessible multimedia","MENU_LV" : "2","MENU_URL" : "design::component/Component_10.xfdl"},{"MENU_ID" : "056","MENU_NM" : "숨긴 콘텐츠 Visually hidden","MENU_LV" : "2","MENU_URL" : "design::component/Component_10.xfdl"},{"MENU_ID" : "057","MENU_NM" : "기본패턴","MENU_LV" : "0"},{"MENU_ID" : "058","MENU_NM" : "개인 식별 정보 입력","MENU_LV" : "1","MENU_URL" : "design::pattern/patten_01.xfdl"},{"MENU_ID" : "059","MENU_NM" : "도움","MENU_LV" : "1","MENU_URL" : "design::pattern/patten_02.xfdl"},{"MENU_ID" : "060","MENU_NM" : "동의","MENU_LV" : "1","MENU_URL" : "design::pattern/patten_03.xfdl"},{"MENU_ID" : "061","MENU_NM" : "목록 탐색","MENU_LV" : "1","MENU_URL" : "design::pattern/patten_04.xfdl"},{"MENU_ID" : "062","MENU_NM" : "사용자 피드백","MENU_LV" : "1","MENU_URL" : "design::pattern/patten_05.xfdl"},{"MENU_ID" : "063","MENU_NM" : "상세 정보 확인","MENU_LV" : "1","MENU_URL" : "design::pattern/patten_06.xfdl"},{"MENU_ID" : "064","MENU_NM" : "오류","MENU_LV" : "1","MENU_URL" : "design::pattern/patten_07.xfdl"},{"MENU_ID" : "065","MENU_NM" : "입력폼","MENU_LV" : "1","MENU_URL" : "design::pattern/patten_08.xfdl"},{"MENU_ID" : "066","MENU_NM" : "첨부 파일","MENU_LV" : "1","MENU_URL" : "design::pattern/patten_09.xfdl"},{"MENU_ID" : "067","MENU_NM" : "필터링·정렬","MENU_LV" : "1","MENU_URL" : "design::pattern/patten_10.xfdl"},{"MENU_ID" : "068","MENU_NM" : "확인","MENU_LV" : "1","MENU_URL" : "design::pattern/patten_11.xfdl"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0","100%","32",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_TF_MastheadBg");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Div("divTopBtn","0","140",null,"12","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_TF_MnuwrapB");
            obj.set_accessibilityenable("false");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Panel("pnlTopWrap","0","0",null,"152","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexcrossaxisalign("center");
            obj.set_spacing("0px 24px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divTop\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("divTop","0","0","100%","152",null,null,null,"1200","140",null,this);
            obj.set_taborder("3");
            obj.set_url("frame::frmTop.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_fittocontents("height");
            obj.set_text("");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("back_dim","1472","206",null,null,"-1472","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.set_background("#000000");
            obj.set_opacity("0.5");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Div("divMain","24","0","100%","960",null,null,null,"1200",null,null,this);
            obj.set_taborder("5");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("divLeft","0","0","0","960",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("0");
            obj.set_url("frame::frmLeft.xfdl");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none none");
            this.divMain.addChild(obj.name, obj);

            obj = new Div("divNavi","divLeft:0","0",null,"0","0",null,null,null,null,null,this.divMain.form);
            obj.set_taborder("1");
            obj.set_url("frame::frmNavi.xfdl");
            this.divMain.addChild(obj.name, obj);

            obj = new Div("divWork","divLeft:0","divNavi:0",null,"960","0",null,null,null,null,null,this.divMain.form);
            obj.set_url("frame::frmMain.xfdl");
            obj.set_taborder("2");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("indicator");
            this.divMain.addChild(obj.name, obj);

            obj = new Panel("pnlMainwrap","0","pnlTopWrap:0",null,"960","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_spacing("0px 24px 0px 24px");
            obj.set_flexcrossaxisalign("center");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divMain\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staBfBg","0","pnlMainwrap:116",null,"580","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_BF_Bfbg");
            obj.set_text("");
            obj.set_flexgrow("1");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staRelsitbg","0","pnlMainwrap:60",null,"56","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_BF_Relsitwrap");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Div("divTopMenuBg","1472","1405","100.00%","560",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("div_TF_MnuBg");
            obj.set_accessibilityenable("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divBottom","24","1172","100%","590",null,null,null,"1200",null,null,this);
            obj.set_taborder("10");
            obj.set_text("Div00");
            obj.set_url("frame::frmBottom.xfdl");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("pnlBottomWrap","0","pnlMainwrap:60",null,"600","0",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_type("vertical");
            obj.set_flexcrossaxisalign("center");
            obj.set_spacing("0px 24px 24px 24px");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divBottom\"/></Contents>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTopBtn.form
            obj = new Layout("default","",0,0,this.divTopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
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
            this.divTopBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divTopBtn.form
            obj = new Layout("Layout0","",0,0,this.divTopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divTopBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divTop
            obj = new Layout("default","",0,0,this.divTop.form,function(p){});
            this.divTop.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain.form.divLeft
            obj = new Layout("default","",0,0,this.divMain.form.divLeft.form,function(p){});
            this.divMain.form.divLeft.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain.form.divNavi
            obj = new Layout("default","",0,0,this.divMain.form.divNavi.form,function(p){});
            this.divMain.form.divNavi.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain.form.divWork
            obj = new Layout("default","",0,0,this.divMain.form.divWork.form,function(p){});
            this.divMain.form.divWork.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain.form
            obj = new Layout("default","",0,0,this.divMain.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divLeft.set_taborder("0");
                p.divLeft.set_url("frame::frmLeft.xfdl");
                p.divLeft.set_formscrolltype("none");
                p.divLeft.set_formscrollbartype("none none");
                p.divLeft.move("0","0","0","960",null,null);

                p.divNavi.set_taborder("1");
                p.divNavi.set_url("frame::frmNavi.xfdl");
                p.divNavi.move("divLeft:0","0",null,"0","0",null);

                p.divWork.set_taborder("2");
                p.divWork.set_fittocontents("height");
                p.divWork.set_formscrollbartype("indicator");
                p.divWork.move("divLeft:0","divNavi:0",null,"960","0",null);
            	}
            );
            this.divMain.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divMain.form
            obj = new Layout("Layout0","",0,0,this.divMain.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divLeft.move("0","0","0",null,null,"0");

                p.divNavi.move("divLeft:0","0",null,"0","0",null);

                p.divWork.set_text("");
                p.divWork.move("divLeft:0","divNavi:0",null,null,"0","0");
            	}
            );
            this.divMain.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divTopMenuBg.form
            obj = new Layout("default","",0,0,this.divTopMenuBg.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divTopMenuBg.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divTopMenuBg.form
            obj = new Layout("Mobile_screen","",0,0,this.divTopMenuBg.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divTopMenuBg.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divTopMenuBg.form
            obj = new Layout("Layout0","",0,0,this.divTopMenuBg.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divTopMenuBg.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divBottom
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,mobile_small",1248,2000,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_cssclass("sta_TF_MastheadBg");
                p.Static00.set_accessibilityenable("false");
                p.Static00.move("0","0","100%","32",null,null);

                p.divTopBtn.set_taborder("1");
                p.divTopBtn.set_cssclass("div_TF_MnuwrapB");
                p.divTopBtn.set_accessibilityenable("false");
                p.divTopBtn.set_tabstop("false");
                p.divTopBtn.move("0","140",null,"12","0",null);

                p.pnlTopWrap.set_taborder("2");
                p.pnlTopWrap.set_type("vertical");
                p.pnlTopWrap.set_flexcrossaxisalign("center");
                p.pnlTopWrap.set_spacing("0px 24px");
                p.pnlTopWrap.move("0","0",null,"152","0",null);

                p.divTop.set_taborder("3");
                p.divTop.set_url("frame::frmTop.xfdl");
                p.divTop.set_formscrollbartype("none none");
                p.divTop.set_fittocontents("height");
                p.divTop.set_text("");
                p.divTop.set_accessibilityenable("false");
                p.divTop.set_minheight("140");
                p.divTop.set_maxheight("");
                p.divTop.set_maxwidth("1200");
                p.divTop.move("0","0","100%","152",null,null);

                p.back_dim.set_taborder("4");
                p.back_dim.set_text("Static01");
                p.back_dim.set_visible("false");
                p.back_dim.set_background("#000000");
                p.back_dim.set_opacity("0.5");
                p.back_dim.set_accessibilityenable("false");
                p.back_dim.move("1472","206",null,null,"-1472","0");

                p.divMain.set_taborder("5");
                p.divMain.set_fittocontents("height");
                p.divMain.set_minwidth("");
                p.divMain.set_maxwidth("1200");
                p.divMain.move("24","0","100%","960",null,null);

                p.pnlMainwrap.set_taborder("6");
                p.pnlMainwrap.set_type("vertical");
                p.pnlMainwrap.set_spacing("0px 24px 0px 24px");
                p.pnlMainwrap.set_flexcrossaxisalign("center");
                p.pnlMainwrap.set_fittocontents("height");
                p.pnlMainwrap.move("0","pnlTopWrap:0",null,"960","0",null);

                p.staBfBg.set_taborder("7");
                p.staBfBg.set_cssclass("sta_BF_Bfbg");
                p.staBfBg.set_text("");
                p.staBfBg.set_flexgrow("1");
                p.staBfBg.set_accessibilityenable("false");
                p.staBfBg.move("0","pnlMainwrap:116",null,"580","0",null);

                p.staRelsitbg.set_taborder("8");
                p.staRelsitbg.set_cssclass("sta_BF_Relsitwrap");
                p.staRelsitbg.set_accessibilityenable("false");
                p.staRelsitbg.move("0","pnlMainwrap:60",null,"56","0",null);

                p.divTopMenuBg.set_taborder("9");
                p.divTopMenuBg.set_cssclass("div_TF_MnuBg");
                p.divTopMenuBg.set_accessibilityenable("false");
                p.divTopMenuBg.set_visible("false");
                p.divTopMenuBg.move("1472","1405","100.00%","560",null,null);

                p.divBottom.set_taborder("10");
                p.divBottom.set_text("Div00");
                p.divBottom.set_url("frame::frmBottom.xfdl");
                p.divBottom.set_fittocontents("height");
                p.divBottom.set_minheight("");
                p.divBottom.set_minwidth("");
                p.divBottom.set_maxwidth("1200");
                p.divBottom.move("24","1172","100%","590",null,null);

                p.pnlBottomWrap.set_taborder("11");
                p.pnlBottomWrap.set_type("vertical");
                p.pnlBottomWrap.set_flexcrossaxisalign("center");
                p.pnlBottomWrap.set_spacing("0px 24px 24px 24px");
                p.pnlBottomWrap.set_fittocontents("height");
                p.pnlBottomWrap.move("0","pnlMainwrap:60",null,"600","0",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Desktop_screen,mobile_small",1088,2000,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divTop.set_text("");
                p.divTop.move("0","0","100%","104",null,null);

                p.divTopBtn.move("0","0",null,"104","0",null);

                p.staRelsitbg.set_cssclass("sta_BF_RelsitwrapNON");
                p.staRelsitbg.move("0","pnlMainwrap:230",null,"56","0",null);

                p.back_dim.set_text("Static01");

                p.staBfBg.move("0","pnlMainwrap:283",null,"760","0",null);

                p.pnlTopWrap.set_spacing("0px 16px");
                p.pnlTopWrap.move("0","0",null,"104","0",null);

                p.pnlMainwrap.set_spacing("0px 16px 0px 16px");
                p.pnlMainwrap.move("0","pnlTopWrap:0",null,"960","0",null);

                p.divBottom.set_text("Div00");
                p.divBottom.set_minwidth("");

                p.pnlBottomWrap.set_fittocontents("height");
                p.pnlBottomWrap.set_spacing("0px 16px 16px 16px");
                p.pnlBottomWrap.move("0","pnlMainwrap:60",null,"1224","0",null);
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
            this._addPreloadList("fdl","frame::frmTop.xfdl");
            this._addPreloadList("fdl","frame::frmLeft.xfdl");
            this._addPreloadList("fdl","frame::frmNavi.xfdl");
            this._addPreloadList("fdl","frame::frmBottom.xfdl");
        };
        
        // User Script
        this.registerScript("frmAll.xfdl", function() {
        /**
        *  KRDS
        *  @FileName 	frmAll.xfdl
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
        this.objApp.gvFrmTop = this.divTop;
        this.objApp.gvFrmMain = this.divMain;
        this.objApp.gvFrmLeft 	= this.divMain.form.divLeft;
        this.objApp.gvFrsWork = this.divMain.form.divWork;
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	var sFilter = this.FRAME_MENUCOLUMNS.menuLevel + " == '0' ";
        	this.objApp.gdsMenu.filter(sFilter);

        	// Top 메뉴 복사
        	this.dsMenu.copyData(this.objApp.gdsMenu, true);
        	this.objApp.gdsMenu.filter("");
        	if (system.navigatorname != "nexacro")
        	{
         		MyHistory.init(this.fn_onChangeHistory, this);

         		var hash = MyHistory.getLocationHash();

        // 		if (hash)
        // 		{
        // 			var data = MyHistory.getData(hash);
        // 			if (data)
        // 			{
        // 				this.fn_onChangeHistory(hash, data);
        // 				return;
        // 			}
        // 		}
        	}

        	this.fnOpenHome();
        	this.form_onsize(obj,e);

        };

        /**
         * @description topmenu를 dsMenu로 copy
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
        	//this.fnSetMenu();
        };

        /**
         * @description topmenu 셋팅
         */
        this.fnSetMenu = function ()
        {
        	for (var i = this.divMobile.form.divMenu.form.components.length - 1; i > -1; i--) {
        		var objDel = this.divMobile.form.divMenu.removeChild(this.divMobile.form.divMenu.form.components[i].name);
        		//trace(objDel.name);
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
        	for (var i = 0; i < this.divMobile.form.divMenu.form.components.length; i++)
        	{
        		var objComp = this.divMobile.form.divMenu.form.components[i];
        		//trace("objComp.name : " + objComp.name + " obj.menuid : " + obj.menuid + " objComp.upmenuid : " + objComp.upmenuid);
        		if(objComp.visible) {
        		    //trace("objComp.name : " + objComp.name);
        			nHeight+=nexacro.toNumber(objComp.height);
        		}
        	}
        	//trace("nHeight : " + nHeight);
        	//this.parent.height = nHeight+1;
            this.divMobile.form.divMenu.form.resetScroll();
        };

        /**
         * @description Top menu creation
         */
        this.fnCreateMenu = function (sMenuId, sMenuName, nMenuLevel, sUpMenuId, sMenuUrl, index)
        {
        	//trace("sMenuId : " + sMenuId + " sMenuName : " + sMenuName + " nMenuLevel : " + nMenuLevel + " sUpMenuId : " + sUpMenuId + " sMenuUrl : " + sMenuUrl + " index : " + index);
        	//trace("this.divMobile.form.divMenu.width: " + this.divMobile.form.divMenu.getOffsetWidth());
        	var sClass = "";
        	if(nMenuLevel == 0){
        		var objComp = new Static();
        		objComp.init(this.fvBtnPrefix + sMenuId, 0, 0, this.divMobile.form.divMenu.getOffsetWidth(), "53", null, null);
        		sClass = "sta_LF_1dep"
        	}else if(nMenuLevel == 1){
        		var objComp = new Button();
        		objComp.init(this.fvBtnPrefix + sMenuId, 0, 0, this.divMobile.form.divMenu.getOffsetWidth(), "58", null, null);
        		if(this.dsMenu1.findRow( this.FRAME_MENUCOLUMNS.upMenuId, sMenuId ) > -1)
        		    sClass = "btn_LF_2depExp";
        		else
        		    sClass = "btn_LF_2dep";
        		objComp.setEventHandler("onclick", this.btnMenu_onclick, this);
        	}else if(nMenuLevel == 2){
        		var objComp = new Button();
        		objComp.init(this.fvBtnPrefix + sMenuId, 0, 0, this.divMobile.form.divMenu.getOffsetWidth(), "45", null, null);
        		sClass = "btn_TF_Lastdep";
        		objComp.visible = false;
        		objComp.setEventHandler("onclick", this.btnMenu_onclick, this);
        	}

        	this.divMobile.form.divMenu.addChild(objComp.name, objComp);
        	objComp.set_text(sMenuName);
        	objComp.cssclass = sClass;
        	objComp.menuid = sMenuId;
        	objComp.upmenuid = sUpMenuId;
        	objComp.menuurl = sMenuUrl;
        	objComp.show();
        	this.resetScroll();
        };

        this.btnMenu_onclick = function (obj, e)
        {
        	//trace("btnLeftMenu_onclick : obj.menuurl : " + obj.menuurl);
        	if(obj.cssclass == "btn_TF_Lastdep") {
        		this.fnOpen(obj.menuid);
        		this.divMobile.visible = false;
        		return;
        	}else if(obj.cssclass == "btn_LF_2dep") {
        		this.fnOpen(obj.menuid);
        		this.divMobile.visible = false;
        		return;
        	}else {
        		if(obj.cssclass == "btn_LF_2depColl")
        			obj.cssclass = "btn_LF_2depExp";
        		else
        			obj.cssclass = "btn_LF_2depColl";
        	}
        	for (var i = 0; i < this.divMobile.form.divMenu.form.components.length; i++)
        	{
        		var objComp = this.divMobile.form.divMenu.form.components[i];
        		if(objComp.upmenuid == obj.menuid) {
        			objComp.visible = !objComp.visible;
        		}
        	}
        	var nHeight=0;
        	for (var i = 0; i < this.divMobile.form.divMenu.form.components.length; i++)
        	{
        		var objComp = this.divMobile.form.divMenu.form.components[i];
        		if(objComp.visible) {
        			nHeight+=nexacro.toNumber(objComp.height);
        		}
        	}
        	//trace("nHeight : " + nHeight);
        	this.divMobile.height = nHeight+1;
        	this.divMobile.form.divMenu.form.resetScroll();
        	this.divMobile.form.resetScroll();

        };

        this.form_onsetfocus = function(obj,e)
        {
        	//trace("form_onsetfocus");
        	//this.divTop.form.divMenu.visible = false;
        // 	for(var i=0; i < this.divTop.form.divTopBtn.form.components.length; i++){
        // 		if(this.divTop.form.divTopBtn.form.components[i] instanceof nexacro.Div)
        // 		{
        // 			this.divTop.form.divTopBtn.form.components[i].visible = false;
        // 		}
        // 	}
        // 	this.divTop.form.divTopBtn.height = 56;
        // 	this.divTop.height = 200;
        // 	this.divTopMenuBg.visible =false;
        // 	this.back_dim.visible = false;
        };

        this.divMain_onsetfocus = function(obj,e)
        {
        	//trace("divMain_onsetfocus");
        	//this.divTop.form.divMenu.visible = false;
        // 	for(var i=0; i < this.divTop.form.divTopBtn.form.components.length; i++){
        // 		if(this.divTop.form.divTopBtn.form.components[i] instanceof nexacro.Div)
        // 		{
        // 			this.divTop.form.divTopBtn.form.components[i].visible = false;
        // 		}
        // 	}
        // 	this.divTop.form.divTopBtn.height = 56;
        // 	this.divTop.height = 200;
        // 	this.divTopMenuBg.visible = false;
        // 	this.back_dim.visible = false;
        };

        this.form_onclick = function(obj,e)
        {
        	//trace("form_onclick");
        	//this.divTop.form.divMenu.visible = false;
        // 	for(var i=0; i < this.divTop.form.divTopBtn.form.components.length; i++){
        // 		if(this.divTop.form.divTopBtn.form.components[i] instanceof nexacro.Div)
        // 		{
        // 			this.divTop.form.divTopBtn.form.components[i].visible = false;
        // 		}
        // 	}
        // 	this.divTop.form.divTopBtn.height = 56;
        // 	this.divTop.height = 200;
        // 	this.divTopMenuBg.visible = false;
        // 	this.back_dim.visible = false;
        };

        this.fnOpen = function(sMenuId)
        {

        	if(this.curlayout != "default"){
        	    this.divMain.form.divLeft.visible = false;
        	}else{
        	    this.divMain.form.divLeft.setOffsetWidth(248);
        		this.divMain.form.divLeft.visible = true;
        	    this.divMain.form.divNavi.left = "divLeft:40";
        		this.divMain.form.divWork.left = "divLeft:40";
        	}

        	this.divMain.form.divNavi.setOffsetTop(0);
        	this.divMain.form.divNavi.setOffsetHeight(87);
        	this.divMain.form.divNavi.visible = true;

        	var sMenuUrl = this.objApp.gdsMenu.lookup(this.FRAME_MENUCOLUMNS.menuId, sMenuId, this.FRAME_MENUCOLUMNS.menuUrl);
        	var sMenuNm = this.objApp.gdsMenu.lookup(this.FRAME_MENUCOLUMNS.menuId, sMenuId, this.FRAME_MENUCOLUMNS.menuNm);
        	if(this.gfnIsNull(sMenuUrl)){

         		var strUpMenuId = this.objApp.gdsMenu.lookup(this.FRAME_MENUCOLUMNS.upMenuId, sMenuId, this.FRAME_MENUCOLUMNS.menuId);
        // 		//trace("strUpMenuId : " + strUpMenuId);
        		this.fnOpen(strUpMenuId);
        		return;
        	}
        	if(this.objApp.gdsMenu.lookup(this.FRAME_MENUCOLUMNS.menuId, sMenuId, this.FRAME_MENUCOLUMNS.menuLevel) == "2"){
        	    var strUpMenuId2 = this.objApp.gdsMenu.lookup(this.FRAME_MENUCOLUMNS.menuId, sMenuId, this.FRAME_MENUCOLUMNS.upMenuId);
        		var strNavi2 = this.objApp.gdsMenu.getColumn(this.objApp.gdsMenu.findRow(this.FRAME_MENUCOLUMNS.menuId, strUpMenuId2), this.FRAME_MENUCOLUMNS.menuNm);
        		//trace("strNavi2 : " + strNavi2 + " strUpMenuId2 : " + strUpMenuId2);
        		this.divMain.form.divNavi.form.staNavi2.text = strNavi2;
        		this.divMain.form.divNavi.form.staNavi2.menuid = strUpMenuId2;
        		this.divMain.form.divNavi.form.staNavi2.visible = true;
        		if(this.objApp.gdsMenu.lookup(this.FRAME_MENUCOLUMNS.menuId, strUpMenuId2, this.FRAME_MENUCOLUMNS.menuLevel) == "1"){
        			var strUpMenuId1 = this.objApp.gdsMenu.lookup(this.FRAME_MENUCOLUMNS.menuId, strUpMenuId2, this.FRAME_MENUCOLUMNS.upMenuId);
        			var strNavi1 = this.objApp.gdsMenu.getColumn(this.objApp.gdsMenu.findRow(this.FRAME_MENUCOLUMNS.menuId, strUpMenuId1), this.FRAME_MENUCOLUMNS.menuNm);
        			//trace("strNavi1 : " + strNavi1);
        			this.divMain.form.divNavi.form.staNavi1.text = strNavi1;
        			this.divMain.form.divNavi.form.staNavi1.menuid = strUpMenuId1;
        			this.divMain.form.divNavi.form.staNavi1.visible = true;
        		}
        	}
        	if(this.objApp.gdsMenu.lookup(this.FRAME_MENUCOLUMNS.menuId, sMenuId, this.FRAME_MENUCOLUMNS.menuLevel) == "1"){
        	    var strUpMenuId = this.objApp.gdsMenu.lookup(this.FRAME_MENUCOLUMNS.menuId, sMenuId, this.FRAME_MENUCOLUMNS.upMenuId);
        		var strNavi1 = this.objApp.gdsMenu.getColumn(this.objApp.gdsMenu.findRow(this.FRAME_MENUCOLUMNS.menuId, strUpMenuId), this.FRAME_MENUCOLUMNS.menuNm);
        		//trace("strNavi1 : " + strNavi1);
        		this.divMain.form.divNavi.form.staNavi1.text = strNavi1;
        		this.divMain.form.divNavi.form.staNavi1.menuid = strUpMenuId;
        		this.divMain.form.divNavi.form.staNavi1.visible = true;
        		this.divMain.form.divNavi.form.staNavi2.visible = false;
        	}
        	this.divMain.form.divNavi.form.resetScroll();


        	var sGroupId = this.objApp.gdsMenu.lookup(this.FRAME_MENUCOLUMNS.menuId, sMenuId, this.FRAME_MENUCOLUMNS.groupId);
        	if(sMenuUrl){
        		//history setting
        		if (system.navigatorname != "nexacro")
        		{
        			var hash = "Menu:"+sMenuId;
        			var data = {"menuId": sMenuId};

        			MyHistory.setLocationHash(hash, data);
        		}
        		this.divMain.form.divLeft.form.fnLoad(sGroupId, sMenuId);
        		this.divMain.form.divWork.set_url(sMenuUrl);

        		if(this.gfnIsNull(strNavi2))
        			nexacro.getApplication().mainframe.set_titletext("UXPro KRDS > " + strNavi1 + " > " + sMenuNm);
        		else
        		    nexacro.getApplication().mainframe.set_titletext("UXPro KRDS > " + strNavi1 + " > " + strNavi2 + " > " + sMenuNm);

        	}
        }

        this.fnOpenHome = function()
        {
        	if(this.curlayout != "default"){
        	    //this.divMain.form.divNavi.left = "divLeft:16";
        		//this.divMain.form.divWork.left = "divLeft:16";
        	}else{
        	    this.divMain.form.divNavi.left = "divLeft:0";
        		this.divMain.form.divWork.left = "divLeft:0";
        	}

        	this.divMain.form.divWork.set_url("frame::frmMain.xfdl");
        	this.divMain.form.divLeft.setOffsetWidth(0);
        	this.divMain.form.divLeft.visible = false;
        	this.divMain.form.divNavi.setOffsetTop(20);
        	this.divMain.form.divNavi.setOffsetHeight(0);
        	this.divMain.form.divNavi.visible = false;

        	for(var i=0; i < this.divTop.form.divTopBtn.form.components.length; i++){
        		if(this.divTop.form.divTopBtn.form.components[i] instanceof nexacro.Div)
        		{
        			this.divTop.form.divTopBtn.form.components[i].visible = false;
        		}
        	}
        // 	this.divTop.form.divTopBtn.height = 56;
        // 	this.divTop.height = 200;
        // 	this.divTopMenuBg.visible = false;
        // 	this.back_dim.visible = false;
        	nexacro.getApplication().mainframe.set_titletext("UXPro KRDS");
        	//history setting
        	if (system.navigatorname != "nexacro")
        	{
        		var hash = "Menu:HOME";
        		var data = {"menuId": "HOME"};

        		MyHistory.setLocationHash(hash, data);
        	}
        }

        this.fnOpenLogin = function()
        {
        	if(this.curlayout != "default"){
        	    this.divMain.form.divNavi.left = "divLeft:16";
        		this.divMain.form.divWork.left = "divLeft:16";
        	}else{
        	    this.divMain.form.divNavi.left = "divLeft:0";
        		this.divMain.form.divWork.left = "divLeft:0";
        	}

        	this.divMain.form.divWork.set_url("frame::frmLogin.xfdl");
        	this.divMain.form.divLeft.setOffsetWidth(0);
        	this.divMain.form.divLeft.visible = false;
        	this.divMain.form.divNavi.setOffsetTop(20);
        	this.divMain.form.divNavi.setOffsetHeight(0);
        	this.divMain.form.divNavi.visible = false;

        	for(var i=0; i < this.divTop.form.divTopBtn.form.components.length; i++){
        		if(this.divTop.form.divTopBtn.form.components[i] instanceof nexacro.Div)
        		{
        			this.divTop.form.divTopBtn.form.components[i].visible = false;
        		}
        	}
        // 	this.divTop.form.divTopBtn.height = 56;
        // 	this.divTop.height = 200;
        // 	this.divTopMenuBg.visible = false;
        // 	this.back_dim.visible = false;
            nexacro.getApplication().mainframe.set_titletext("UXPro KRDS > Login");
        	//history setting
        	if (system.navigatorname != "nexacro")
        	{
        		var hash = "Menu:LOGIN";
        		var data = {"menuId": "LOGIN"};

        		MyHistory.setLocationHash(hash, data);
        	}
        }

         this.fn_onChangeHistory = function(hash, data)
        {
        //trace("hash : " + hash + " data : " + data.menuId);
        	//히스토리 동작시 팝업 close
        	if (nexacro.getPopupFrames().length > 0)
        	{
        		var objframes = nexacro.getPopupFrames();
        		for(var i=0; i< objframes.length; i++)
        		{
        			objframes[i].form.close();
        		}
        		return;
        	}

        	//직전 화면이 없거나 HOME인 경우.
        	if (this.gfnIsNull(hash) || hash == "Menu:HOME")
            {
                this.fnOpenHome();
            }else if (hash == "Menu:LOGIN")
            {
                this.fnOpenLogin();
            }
        	//Home이 아닌 직전 화면이 있는 경우 해당 메뉴 data 통해 form open
        	else
        	{
         		this.fnOpen(data.menuId);
        	}
        }

        this.form_onsize = function(obj,e)
        {return;
        	//trace("obj.vscrollbar : " + obj.vscrollbar.max);
        	var nWidth = -1;
        	//if(obj.vscrollbar.max){
        		//nWidth = nexacro.getApplication().mainframe.width-34;
        	//}else{
        		nWidth = nexacro.getApplication().mainframe.width;
        	//}
        	//if(nexacro.getApplication().mainframe.width > 1022){
        		var nLeft = nexacro.toNumber(nWidth) / 2 - Math.round((this.divTop.getOffsetWidth()+34) / 2);
        		//var nTop = (nexacro.getApplication().mainframe.height / 2) - Math.round((this.divTop.getOffsetHeight()) / 2);

        		if(nLeft <= 0){
        			this.divTop.setOffsetLeft(0);
        		}else{
        			this.divTop.setOffsetLeft(nLeft);
        			//this.divTop.setOffsetTop(nTop);
        		}

        		 var nLeft = nexacro.toNumber(nWidth) / 2 - Math.round((this.divMain.getOffsetWidth()+34) / 2);
        		//var nTop = (nexacro.getApplication().mainframe.height / 2) - Math.round((this.divTop.getOffsetHeight()) / 2);

        		if(nLeft <= 0){
        			this.divMain.setOffsetLeft(0);
        		}else{
        			this.divMain.setOffsetLeft(nLeft);
        			//this.divTop.setOffsetTop(nTop);
        		}

        		var nLeft = nexacro.toNumber(nWidth) / 2 - Math.round((this.divBottom.getOffsetWidth()+34) / 2);
        		//var nTop = (nexacro.getApplication().mainframe.height / 2) - Math.round((this.divTop.getOffsetHeight()) / 2);

        		if(nLeft <= 0){
        			this.divBottom.setOffsetLeft(0);
        		}else{
        			this.divBottom.setOffsetLeft(nLeft);
        			//this.divTop.setOffsetTop(nTop);
        		}
        	//}

            var arrPopFrame = nexacro.getPopupFrames();
        	for(var i=0; i < arrPopFrame.length; i++)
        	{
        		arrPopFrame[i].form.close();
        	}
        };

        this.form_onvscroll = function(obj,e)
        {
        	//trace("form_onvscroll : " + this.getOffsetHeight() + " : " + this.getVScrollPos() );
        	this.back_dim.height = this.getOffsetHeight() + this.getVScrollPos();
        };

        this.back_dim_onclick = function(obj,e)
        {
        	//trace("back_dim_onclick");
        	//this.divTop.form.divMenu.visible = false;
        // 	for(var i=0; i < this.divTop.form.divTopBtn.form.components.length; i++){
        // 		if(this.divTop.form.divTopBtn.form.components[i] instanceof nexacro.Div)
        // 		{
        // 			this.divTop.form.divTopBtn.form.components[i].visible = false;
        // 		}
        // 	}
        // 	this.divTop.form.divTopBtn.height = 56;
        // 	this.divTop.height = 200;
        // 	this.divTopMenuBg.visible = false;
        // 	obj.visible = false;
        };

        this.dsMenu_onrowposchanged = function(obj,e)
        {
        	//trace("dsMenu_onrowposchanged : " + e.reason);
        	if(e.reason == "51") this.fnLoad(obj.getColumn(e.newrow,this.FRAME_MENUCOLUMNS.menuId));
        };

        this.curlayout="default";
        this.form_onlayoutchanged = function(obj,e)
        {
        	//trace("e.newlayout ; " + e.newlayout);
        	this.curlayout = e.newlayout;
        	//this.scrollbartype="autoindicator";
        // 	else this.scrollbartype="auto";
        	if(this.divMain.form.divWork.url == "frame::frmMain.xfdl"){
        	//trace("여기!!!!");
        		this.divMain.form.divNavi.setOffsetTop(20);
        		this.divMain.form.divNavi.setOffsetHeight(0);
        	}else{
        	//trace("여기");
        		this.divMain.form.divNavi.setOffsetTop(20);
        		this.divMain.form.divNavi.setOffsetHeight(87);
        		if(e.newlayout !="default") {
        			this.divMain.form.divLeft.visible = false;
        			this.divMain.form.divLeft.setOffsetWidth(0);
        			//this.divMain.form.divNavi.setOffsetLeft(0);
        		}else{
        			this.divMain.form.divLeft.visible = true;
        			this.divMain.form.divLeft.setOffsetWidth(248);
        			this.divMain.form.divNavi.left = "divLeft:40";
        			this.divMain.form.divWork.left = "divLeft:40";
        			//this.divMain.form.divNavi.setOffsetHeight(0);
        		}
        	}
        	this.divMain.form.divLeft.form.fnLoad(this.divMain.form.divLeft.form.fvGroupId, this.divMain.form.divLeft.form.fv2DepId);
        };

        this.divMobile_grdMenu_oncellclick = function(obj,e)
        {
        	//trace("divMobile_grdMenu_oncellclick : " + this.dsMenu.getColumn(e.row,this.FRAME_MENUCOLUMNS.menuId));
        	//this.fnLoad(this.dsMenu1.getColumn(e.row,this.FRAME_MENUCOLUMNS.menuId));
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onsetfocus",this.form_onsetfocus,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.addEventHandler("onvscroll",this.form_onvscroll,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onlayoutchanged",this.form_onlayoutchanged,this);
            this.back_dim.addEventHandler("onclick",this.back_dim_onclick,this);
            this.divMain.addEventHandler("onsetfocus",this.divMain_onsetfocus,this);
            this.dsMenu.addEventHandler("onrowposchanged",this.dsMenu_onrowposchanged,this);
        };
        this.loadIncludeScript("frmAll.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
