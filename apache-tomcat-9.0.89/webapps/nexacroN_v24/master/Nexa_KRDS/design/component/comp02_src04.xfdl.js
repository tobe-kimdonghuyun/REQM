(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("src04");
            this.set_titletext("탐색_사이드메뉴");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,1300);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "MenuId","type" : "STRING","size" : "256"},{"id" : "MenuName","type" : "STRING","size" : "256"},{"id" : "MenuLev","type" : "STRING","size" : "256"},{"id" : "Url","type" : "STRING","size" : "256"}]},"Rows" : [{"MenuId" : "000","MenuName" : "컴포넌트","MenuLev" : "0"},{"MenuId" : "001","MenuName" : "아이덴티티","MenuLev" : "1"},{"MenuId" : "002","MenuName" : "공식 배너 Masthead","MenuLev" : "2","Url" : "design::component/Component_01.xfdl"},{"MenuId" : "003","MenuName" : "운영기관 식별자 Identifier","MenuLev" : "2","Url" : "design::component/Component_01.xfdl"},{"MenuId" : "004","MenuName" : "헤더 Header","MenuLev" : "2","Url" : "design::component/Component_01.xfdl"},{"MenuId" : "005","MenuName" : "푸터 Footer","MenuLev" : "2","Url" : "design::component/Component_01.xfdl"},{"MenuId" : "006","MenuName" : "탐색","MenuLev" : "1"},{"MenuId" : "007","MenuName" : "건너뛰기 링크 Skip link","MenuLev" : "2","Url" : "design::component/Component_02.xfdl"},{"MenuId" : "008","MenuName" : "메인 메뉴 Main menu","MenuLev" : "2","Url" : "design::component/Component_02.xfdl"},{"MenuId" : "009","MenuName" : "브레드크럼 Breadcrumb","MenuLev" : "2","Url" : "design::component/Component_02.xfdl"},{"MenuId" : "010","MenuName" : "사이드 메뉴 Side navigation","MenuLev" : "2","Url" : "design::component/Component_02.xfdl"},{"MenuId" : "011","MenuName" : "콘텐츠 내 탐색 In-page navigation","MenuLev" : "2","Url" : "design::component/Component_02.xfdl"},{"MenuId" : "012","MenuName" : "페이지네이션 Pagination","MenuLev" : "2","Url" : "design::component/Component_02.xfdl"},{"MenuId" : "013","MenuName" : "탭바 Tab bars","MenuLev" : "2","Url" : "design::component/Component_02.xfdl"},{"MenuId" : "014","MenuName" : "레이아웃 및 표현","MenuLev" : "1"},{"MenuId" : "015","MenuName" : "구조화 목록 Structured list","MenuLev" : "2","Url" : "design::component/Component_03.xfdl"},{"MenuId" : "016","MenuName" : "긴급 공지 Critical alerts","MenuLev" : "2","Url" : "design::component/Component_03.xfdl"},{"MenuId" : "017","MenuName" : "달력 Calendar","MenuLev" : "2","Url" : "design::component/Component_03.xfdl"},{"MenuId" : "018","MenuName" : "디스클로저 Disclosure","MenuLev" : "2","Url" : "design::component/Component_03.xfdl"},{"MenuId" : "019","MenuName" : "모달 Modal","MenuLev" : "2","Url" : "design::component/Component_03.xfdl"},{"MenuId" : "020","MenuName" : "배지 Badge","MenuLev" : "2","Url" : "design::component/Component_03.xfdl"},{"MenuId" : "021","MenuName" : "아코디언 Accordion","MenuLev" : "2","Url" : "design::component/Component_03.xfdl"},{"MenuId" : "022","MenuName" : "이미지 Image","MenuLev" : "2","Url" : "design::component/Component_03.xfdl"},{"MenuId" : "023","MenuName" : "캐러셀 Carousel","MenuLev" : "2","Url" : "design::component/Component_03.xfdl"},{"MenuId" : "024","MenuName" : "탭 Tab","MenuLev" : "2","Url" : "design::component/Component_03.xfdl"},{"MenuId" : "025","MenuName" : "표 Table","MenuLev" : "2","Url" : "design::component/Component_03.xfdl"},{"MenuId" : "026","MenuName" : "스플래시 스크린 Splash screen","MenuLev" : "2","Url" : "design::component/Component_03.xfdl"},{"MenuId" : "027","MenuName" : "텍스트 목록 Text list","MenuLev" : "2","Url" : "design::component/Component_03.xfdl"},{"MenuId" : "028","MenuName" : "액션","MenuLev" : "1"},{"MenuId" : "029","MenuName" : "링크 Link","MenuLev" : "2","Url" : "design::component/Component_04.xfdl"},{"MenuId" : "030","MenuName" : "버튼 Button","MenuLev" : "2","Url" : "design::component/Component_04.xfdl"},{"MenuId" : "031","MenuName" : "선택","MenuLev" : "1"},{"MenuId" : "032","MenuName" : "라디오 버튼 Radio button","MenuLev" : "2","Url" : "design::component/Component_05.xfdl"},{"MenuId" : "033","MenuName" : "체크박스 Checkbox","MenuLev" : "2","Url" : "design::component/Component_05.xfdl"},{"MenuId" : "034","MenuName" : "셀렉트 Select","MenuLev" : "2","Url" : "design::component/Component_05.xfdl"},{"MenuId" : "035","MenuName" : "태그 Tag","MenuLev" : "2","Url" : "design::component/Component_05.xfdl"},{"MenuId" : "036","MenuName" : "토글스위치 Toggle Switch","MenuLev" : "2","Url" : "design::component/Component_05.xfdl"},{"MenuId" : "037","MenuName" : "피드백","MenuLev" : "1"},{"MenuId" : "038","MenuName" : "단계표시기 Step indicator","MenuLev" : "2","Url" : "design::component/Component_06.xfdl"},{"MenuId" : "039","MenuName" : "스피너 (Spinner)","MenuLev" : "2","Url" : "design::component/Component_06.xfdl"},{"MenuId" : "040","MenuName" : "도움","MenuLev" : "1"},{"MenuId" : "041","MenuName" : "도움 패널(help panel)","MenuLev" : "2","Url" : "design::component/Component_07.xfdl"},{"MenuId" : "042","MenuName" : "따라하기 패널 Tutorial panel","MenuLev" : "2","Url" : "design::component/Component_07.xfdl"},{"MenuId" : "043","MenuName" : "맥락적 도움말 Contextual help","MenuLev" : "2","Url" : "design::component/Component_07.xfdl"},{"MenuId" : "044","MenuName" : "코치마크 Coach mark","MenuLev" : "2","Url" : "design::component/Component_07.xfdl"},{"MenuId" : "045","MenuName" : "툴팁 Tooltip","MenuLev" : "2","Url" : "design::component/Component_07.xfdl"},{"MenuId" : "046","MenuName" : "입력","MenuLev" : "1"},{"MenuId" : "047","MenuName" : "날짜 입력필드 Date input","MenuLev" : "2","Url" : "design::component/Component_08.xfdl"},{"MenuId" : "048","MenuName" : "텍스트 영역 Textarea","MenuLev" : "2","Url" : "design::component/Component_08.xfdl"},{"MenuId" : "049","MenuName" : "텍스트 입력 필드 Text input","MenuLev" : "2","Url" : "design::component/Component_08.xfdl"},{"MenuId" : "050","MenuName" : "파일 업로드 File upload","MenuLev" : "2","Url" : "design::component/Component_08.xfdl"},{"MenuId" : "051","MenuName" : "설정","MenuLev" : "1"},{"MenuId" : "052","MenuName" : "언어 변경 Language switcher","MenuLev" : "2","Url" : "design::component/Component_09.xfdl"},{"MenuId" : "053","MenuName" : "화면 크기 조정 Resize","MenuLev" : "2","Url" : "design::component/Component_09.xfdl"},{"MenuId" : "054","MenuName" : "콘텐츠","MenuLev" : "1"},{"MenuId" : "055","MenuName" : "접근 가능한 미디어 Accessible multimedia","MenuLev" : "2","Url" : "design::component/Component_10.xfdl"},{"MenuId" : "056","MenuName" : "숨긴 콘텐츠 Visually hidden","MenuLev" : "2","Url" : "design::component/Component_10.xfdl"},{"MenuId" : "057","MenuName" : "기본패턴","MenuLev" : "0"},{"MenuId" : "058","MenuName" : "개인 식별 정보 입력","MenuLev" : "1","Url" : "design::pattern/patten_01.xfdl"},{"MenuId" : "059","MenuName" : "도움","MenuLev" : "1","Url" : "design::pattern/patten_02.xfdl"},{"MenuId" : "060","MenuName" : "동의","MenuLev" : "1","Url" : "design::pattern/patten_03.xfdl"},{"MenuId" : "061","MenuName" : "목록 탐색","MenuLev" : "1","Url" : "design::pattern/patten_04.xfdl"},{"MenuId" : "062","MenuName" : "사용자 피드백","MenuLev" : "1","Url" : "design::pattern/patten_05.xfdl"},{"MenuId" : "063","MenuName" : "상세 정보 확인","MenuLev" : "1","Url" : "design::pattern/patten_06.xfdl"},{"MenuId" : "064","MenuName" : "오류","MenuLev" : "1","Url" : "design::pattern/patten_07.xfdl"},{"MenuId" : "065","MenuName" : "입력폼","MenuLev" : "1","Url" : "design::pattern/patten_08.xfdl"},{"MenuId" : "066","MenuName" : "첨부 파일","MenuLev" : "1","Url" : "design::pattern/patten_09.xfdl"},{"MenuId" : "067","MenuName" : "필터링·정렬","MenuLev" : "1","Url" : "design::pattern/patten_10.xfdl"},{"MenuId" : "068","MenuName" : "확인","MenuLev" : "1","Url" : "design::pattern/patten_11.xfdl"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staH2","0","0","174","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("사이드메뉴");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_accessibilityrole("heading2");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("staDivider","staH2:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staEtit","staDivider:15","0","185","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Side navigation");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","85",null,"126","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("사이드 메뉴는 서브 화면 내에서의 이동을 위해 사용하는 메뉴이다. 일반적으로 본문 영역의 좌측에 사이드바 형태로 제공된다. 메인 메뉴보다 훨씬 좁고 깊은 페이지 구조 탐색에 사용되기 때문에 링크의 개수가 많고 복잡하게 표현되기 쉽다. 사이트 규모가 클수록 사이드 메뉴를 단순하고 직관적으로 설계하여 사용자가 탐색 중에 길을 잃지 않도록 해야 한다.");
            obj.set_cssclass("sta_WF_Descript");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("staTit01","0","Static00_01:80","270","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("2depth");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","0","staTit01:24","248","435",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div01");
            obj.set_cssclass("div_WF_Bmline");
            obj.set_fittocontents("height");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","0","248","76",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("1Depth-title");
            obj.set_cssclass("sta_WF_Side1dpe");
            obj.set_accessibilityrole("heading2");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00","0","Static00_00:0","248","58",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("2Depth");
            obj.set_cssclass("btn_WF_Side2depExp");
            obj.set_accessibilityrole("link");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00","0","Button00:0","248","58",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("2Depth");
            obj.set_cssclass("btn_WF_Side2depColl");
            obj.set_accessibilityrole("link");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div00","0","Button00_00:0","248","126",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_accessibilityenable("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00","0","0",null,"42","0",null,null,null,null,null,this.Div01.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Last depth");
            obj.set_cssclass("btn_WF_SideLastdep");
            obj.set_accessibilityrole("link");
            this.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00","0","Button00:0",null,"42","0",null,null,null,null,null,this.Div01.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("Last depth");
            obj.set_cssclass("btn_WF_SideLastdep");
            obj.set_accessibilityrole("link");
            this.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01","0","Button00_00:0",null,"42","0",null,null,null,null,null,this.Div01.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("Last depth");
            obj.set_cssclass("btn_WF_SideLastdep");
            obj.set_accessibilityrole("link");
            this.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01","0","Div00:0",null,"58","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("2Depth");
            obj.set_cssclass("btn_WF_Side2depExp");
            obj.set_accessibilityrole("link");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_01_00","0","Button00_01:0",null,"58","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("2Depth");
            obj.set_cssclass("btn_WF_Side2depExp");
            obj.set_accessibilityrole("link");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","0","Div01:80","125","32",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("3depth");
            obj.set_cssclass("sta_WF_H4_pc");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0","Static00:24","248","81",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("3Depth-title");
            obj.set_cssclass("btn_WF_Side3depColl");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","Button00:16","248","210",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Div00");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0","0",null,"42","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Last depth");
            obj.set_cssclass("btn_WF_SideLastdep");
            obj.set_accessibilityrole("link");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00","0","Button00:0",null,"42","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("Last depth");
            obj.set_cssclass("btn_WF_SideLastdep");
            obj.set_accessibilityrole("link");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01","0","Button00_00:0",null,"42","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("Last depth");
            obj.set_cssclass("btn_WF_SideLastdep");
            obj.set_accessibilityrole("link");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_02","0","Button00_01:0",null,"42","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("Last depth");
            obj.set_cssclass("btn_WF_SideLastdep");
            obj.set_accessibilityrole("link");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_03","0","Button00_02:0",null,"42","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("Last depth");
            obj.set_cssclass("btn_WF_SideLastdep");
            obj.set_accessibilityrole("link");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","Div00:0","248","16",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_SideEndLine");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div01.form.Div00.form
            obj = new Layout("default","",0,0,this.Div01.form.Div00.form,function(p){});
            this.Div01.form.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,mobile_small",888,1300,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comp02_src04.xfdl", function() {

        this.src04_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.src04_onload,this);
        };
        this.loadIncludeScript("comp02_src04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
