(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmJoinInput");
            this.set_titletext("회원가입 기본정보 입력");
            if (Form == this.constructor)
            {
                this._setFormPosition(1126,2700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","50","56","130","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("주거급여정보포털");
            obj.set_cssclass("sta_WF_Navi");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","Static00:10.00","56","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("진행현황등록");
            obj.set_cssclass("sta_WF_Navi");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","Static00_00:10.00","56","56","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("회원가입");
            obj.set_cssclass("sta_WF_NaviEnd");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","46","80",null,"64","50",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("회원 가입");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","50","Static00_01:60",null,"70","50",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_WF_BoxTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","70","Static01_00:30",null,"30","70",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("아이디");
            obj.set_cssclass("sta_WF_LabelE");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","70","Static00_02:15",null,"60","203",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_displaynulltext("아이디 입력");
            obj.set_accessibilitylabel("아이디");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00_00_00","70","Edit00:0",null,"43","74",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("사용 가능합니다.");
            obj.set_cssclass("sta_WF_TxtBlue18");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"349","123","60","70",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("중복확인");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01","70","Static06_00_00_00:22",null,"30","70",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("비밀번호");
            obj.set_cssclass("sta_WF_LabelE");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","70","Static00_02_01:15",null,"60","70",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_displaynulltext("비밀번호 입력");
            obj.set_accessibilitylabel("비밀번호");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_00","70","Edit00_00:34",null,"30","70",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("비밀번호 재확인");
            obj.set_cssclass("sta_WF_LabelE");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","70","Static00_02_01_00:15",null,"60","70",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_displaynulltext("비밀번호 재확인 입력");
            obj.set_accessibilitylabel("비밀번호 재확인");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00_00_00_00","70","Edit00_00_00:0",null,"43","74",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("일치합니다.");
            obj.set_cssclass("sta_WF_TxtBlue18");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_00_00","70","Static06_00_00_00_00:22",null,"30","70",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("사업자명");
            obj.set_cssclass("sta_WF_LabelE");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00","70","Static00_02_01_00_00:15",null,"60","70",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_displaynulltext("사업자명 입력");
            obj.set_accessibilitylabel("사업자명");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_00_00_00","70","Edit00_00_00_00:34",null,"30","70",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("사업자 등록번호");
            obj.set_cssclass("sta_WF_LabelE");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","70","Static00_02_01_00_00_00:15",null,"60","70",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("msk_WF_TxtLeft");
            obj.set_accessibilitylabel("사업자등록번호");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_00_00_00_00","70","MaskEdit00:34",null,"30","70",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("대표자명");
            obj.set_cssclass("sta_WF_LabelE");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00_00","70","Static00_02_01_00_00_00_00:15",null,"60","70",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_displaynulltext("대표자명 입력");
            obj.set_accessibilitylabel("대표자명");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_00_00_00_00_00","70","Edit00_00_00_00_00_00:34",null,"30","70",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("대표자 연락처");
            obj.set_cssclass("sta_WF_LabelE");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00","70","Static00_02_01_00_00_00_00_00:25",null,"60","70",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("msk_WF_TxtLeft");
            obj.set_displaynulltext("대표자 연락처 입력");
            obj.set_accessibilitylabel("대표자 연락처");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_00_00_00_00_00_00","70","MaskEdit00_00:34",null,"30","70",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("사업자 주소");
            obj.set_cssclass("sta_WF_LabelE");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00_00_00_00","70","Static00_02_01_00_00_00_00_00_00:15",null,"60","203",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_accessibilitylabel("사업자 주소");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01",null,"1394","123","60","70",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("주소검색");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00_00_00_00_00","70","Edit00_00_00_00_00_00_00_00:10",null,"60","70",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_accessibilitylabel("사업자 상세 주소");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","50","Edit00_00_00_00_00_00_00_00_00:80",null,"70","50",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("업체 담당자");
            obj.set_cssclass("sta_WF_BoxTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_00_00_00_00_00_00_00","70","Static01_00_00:30",null,"30","70",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("담당자 명");
            obj.set_cssclass("sta_WF_LabelE");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00_00_00_00_01","70","Static00_02_01_00_00_00_00_00_00_00:15",null,"60","70",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_displaynulltext("담당자 명 입력");
            obj.set_accessibilitylabel("담당자명");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_00_00_00_00_00_01","70","Edit00_00_00_00_00_00_00_00_01:34",null,"30","70",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("담당자 연락처");
            obj.set_cssclass("sta_WF_LabelE");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00","70.00","Static00_02_01_00_00_00_00_00_01:15",null,"60","70",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_cssclass("msk_WF_TxtLeft");
            obj.set_displaynulltext("담당자 연락처 입력");
            obj.set_accessibilitylabel("담당자 연락처");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00_00_00_00_00","70","MaskEdit00_00_00:0",null,"64","70",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("로그인 2차 인증 시 인증번호 발송 연락처 입니다.\r\n정확히 입력해 주세요.");
            obj.set_cssclass("sta_WF_TxtBlue18");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","50","Static06_00_00_00_00_00:80",null,"70","50",null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("지역본부 감독관");
            obj.set_cssclass("sta_WF_BoxTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_00_00_00_00_00_00_00_00","70","Static01_00_00_00:30",null,"30","70",null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("담당 감독관");
            obj.set_cssclass("sta_WF_LabelE");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","70","Static00_02_01_00_00_00_00_00_00_00_00:15",null,"60","586",null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_accessibilityaction("alt+아래방향키 선택 후 ctrl+방향키로 값 선택 엔터 탭키 이동");
            var Combo00_innerdataset = new nexacro.NormalDataset("Combo00_innerdataset", obj);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">선택01</Col></Row><Row><Col id=\"codecolumn\">03</Col><Col id=\"datacolumn\">선택02</Col></Row><Row><Col id=\"codecolumn\">04</Col><Col id=\"datacolumn\">선택03</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_text("선택");
            obj.set_value("01");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00_00",null,"Static00_02_01_00_00_00_00_00_00_00_00:15","44.94%","60","79",null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_accessibilityaction("alt+아래방향키 선택 후 ctrl+방향키로 값 선택 엔터 탭키 이동");
            var Combo00_00_innerdataset = new nexacro.NormalDataset("Combo00_00_innerdataset", obj);
            Combo00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">선택01</Col></Row><Row><Col id=\"codecolumn\">03</Col><Col id=\"datacolumn\">선택02</Col></Row><Row><Col id=\"codecolumn\">04</Col><Col id=\"datacolumn\">선택03</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_00_innerdataset);
            obj.set_text("선택");
            obj.set_value("01");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","366","Combo00:80","192","68",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("임시저장");
            obj.set_cssclass("btn_WF_Crud02");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","Button00_00_00:10","Combo00_00:80","192","68",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("최종제출");
            obj.set_cssclass("btn_WF_Crud01");
            obj.set_accessibilitydescription("링크");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","481","Button00_00_00:0","164","80",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","323.00","2567","476","77",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("Static01은 버튼 하단 여백을 잡아주기 위함입니다. 높이값 80px");
            obj.set_background("#ffd799");
            obj.set_border("3px solid #ff7f1e");
            obj.set_textAlign("center");
            obj.set_font("bold 15px/normal \"Malgun Gothic\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1126,2700,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("RP_101548_frmJoinInput (1).xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
