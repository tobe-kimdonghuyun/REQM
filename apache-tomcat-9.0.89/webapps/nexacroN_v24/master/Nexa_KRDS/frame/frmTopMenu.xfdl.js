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
                this._setFormPosition(1200,560);
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
            obj = new Grid("grdMenu","0.00%","0","266","560",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("grd_TF_2dep");
            obj.set_binddataset("dsMenu1");
            obj.set_autofittype("col");
            obj.set_selecttype("cell");
            obj.set_showcellselection("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"267\"/></Columns><Rows><Row size=\"58\"/></Rows><Band id=\"body\" accessibilityenable=\"false\"><Cell text=\"bind:MENU_NM\" displaytype=\"buttoncontrol\" edittype=\"button\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnMenu1","306","30","133","56",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("2dept Title");
            obj.set_cssclass("btn_TF_2Deptitlink");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Div("divMenu2","306","102",null,"418","40",null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divMenu2.form
            obj = new Layout("default","",0,0,this.divMenu2.form,
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
            this.divMenu2.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divMenu2.form
            obj = new Layout("Mobile_screen","",0,0,this.divMenu2.form,
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
            this.divMenu2.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1200,560,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdMenu.set_taborder("0");
                p.grdMenu.set_cssclass("grd_TF_2dep");
                p.grdMenu.set_binddataset("dsMenu1");
                p.grdMenu.set_autofittype("col");
                p.grdMenu.set_selecttype("cell");
                p.grdMenu.set_showcellselection("true");
                p.grdMenu.move("0.00%","0","266","560",null,null);

                p.btnMenu1.set_taborder("1");
                p.btnMenu1.set_text("2dept Title");
                p.btnMenu1.set_cssclass("btn_TF_2Deptitlink");
                p.btnMenu1.set_fittocontents("width");
                p.btnMenu1.set_accessibilityrole("heading3");
                p.btnMenu1.move("306","30","133","56",null,null);

                p.divMenu2.set_taborder("2");
                p.divMenu2.move("306","102",null,"418","40",null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Mobile_screen","",1022,104,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

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
        this.registerScript("frmTopMenu.xfdl", function() {
        /**
        *  KRDS
        *  @FileName 	frmTopMenu.xfdl
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
        this.objApp = nexacro.getApplication();
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        /**
         * @description 화면 오픈
         */
        this.form_onload = function(obj,e)
        {

        };

        this.btnSubMenu_onclick = function(obj,e)
        {
        	//var sMenuUrl = this.objApp.gdsMenu.lookup(this.FRAME_MENUCOLUMNS.menuId, obj.menuid, this.FRAME_MENUCOLUMNS.menuUrl);
        	this.objApp.mainframe.ChildFrame00.form.fnOpen(obj.menuid);
        }

        this.divMenu_staMenu1_onclick = function(obj,e)
        {
        	//var sMenuUrl = this.objApp.gdsMenu.lookup(this.FRAME_MENUCOLUMNS.menuId, obj.menuid, this.FRAME_MENUCOLUMNS.menuUrl);
        	this.objApp.mainframe.ChildFrame00.form.fnOpen(obj.menuid);
        };

        this.divMenu_btnMenu1_onclick = function(obj,e)
        {
        	this.objApp.mainframe.ChildFrame00.form.fnOpen(obj.menuid);
        };

        this.grdMenu_oncellclick = function(obj,e)
        {
        	this.fnCreateMenu(e.row);
        };

        this.fnCreateMenu = function(nRow)
        {
        	if(this.gfnIsNull(nRow)) nRow = 0;
        	trace("nRow : " + nRow);
        	for (var i = this.divMenu2.form.components.length - 1; i > -1; i--) {
        		var objDel = this.divMenu2.removeChild(this.divMenu2.form.components[i].name);
        		objDel.destroy();
        		objDel = null;
        	}

        	var sMenuId = this.dsMenu1.getColumn(nRow, this.FRAME_MENUCOLUMNS.menuId);
        	var sMenuNm = this.dsMenu1.getColumn(nRow, this.FRAME_MENUCOLUMNS.menuNm);
        	var sFilter = this.FRAME_MENUCOLUMNS.menuLevel + " == '2' ";
        	    sFilter+= "&& " + this.FRAME_MENUCOLUMNS.upMenuId + " == '" + sMenuId + "'" ;
        	this.objApp.gdsMenu.filter(sFilter);
        	this.dsMenu2.copyData(this.objApp.gdsMenu, true);
        	this.objApp.gdsMenu.filter("");
        	this.btnMenu1.text = sMenuNm;
        	this.btnMenu1.menuid = sMenuId;
        	this.resetScroll();
        	for (var i = 0; i < this.dsMenu2.getRowCount(); i++)
        	{
        		var sMenuNm = this.dsMenu2.getColumn(i, this.FRAME_MENUCOLUMNS.menuNm);
        		var sMenuId = this.dsMenu2.getColumn(i, this.FRAME_MENUCOLUMNS.menuId);
        		// Creating page button
        		var objBtn = new Button();
        		objBtn.init("SUB2_" + sMenuNm, 0, 0, 300, 46, null, null);
        		this.divMenu2.addChild(objBtn.name, objBtn);
        		objBtn.set_text(sMenuNm);
        		objBtn.flexgrow = "2";
        		objBtn.set_cssclass("btn_TF_Lastdep");
        		objBtn.menuid = sMenuId;
        		objBtn.show();
        		objBtn.setEventHandler("onclick", this.btnSubMenu_onclick, this);
        	}
        	this.divMenu2.form.resetScroll();
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onlayoutchanged",this.form_onlayoutchanged,this);
            this.grdMenu.addEventHandler("oncellclick",this.grdMenu_oncellclick,this);
            this.btnMenu1.addEventHandler("onclick",this.divMenu_btnMenu1_onclick,this);
        };
        this.loadIncludeScript("frmTopMenu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
