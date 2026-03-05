(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PS_UI_0028");
            this.set_titletext("사업안내 주거급여소개");
            this.set_accessibilityenable("false");
            if (Form == this.constructor)
            {
                this._setFormPosition(1126,4370);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">중위소득 48%</Col><Col id=\"Column1\">1,069,654</Col><Col id=\"Column2\">1,767,652</Col><Col id=\"Column3\">2,263,035</Col><Col id=\"Column4\">2,750,358</Col><Col id=\"Column5\">3,213,953</Col><Col id=\"Column6\">3,656,817</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset00_00", this);
            obj._setContents("<ColumnInfo><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"NO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NO\">0</Col><Col id=\"TITLE\">공지사항첫번째</Col></Row><Row><Col id=\"NO\">1</Col><Col id=\"TITLE\">공지사항두번째</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds1", this);
            obj._setContents("<ColumnInfo><Column id=\"no\" type=\"STRING\" size=\"256\"/><Column id=\"status\" type=\"STRING\" size=\"256\"/><Column id=\"alert\" type=\"STRING\" size=\"256\"/><Column id=\"nm\" type=\"STRING\" size=\"256\"/><Column id=\"birth\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"no\">1</Col><Col id=\"status\">진행</Col><Col id=\"alert\">발송</Col><Col id=\"nm\">A</Col><Col id=\"birth\">19990417</Col></Row><Row><Col id=\"no\">2</Col><Col id=\"status\">접수</Col><Col id=\"alert\">발송</Col><Col id=\"nm\">B</Col><Col id=\"birth\">19000101</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","0","0","0","0",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("바로가기메뉴");
            this.addChild(obj.name, obj);

            obj = new Div("divAccess","330","1","529","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_background("pink");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnAccess","145","0","225",null,null,"5",null,null,null,null,this.divAccess.form);
            obj.set_taborder("1");
            obj.set_text("본문바로가기");
            this.divAccess.addChild(obj.name, obj);

            obj = new Div("Div00_00","0","0",null,"72","6",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_cssclass("div_WF_BannerBg");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","30","18","220","36",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            obj.set_text("시스템 긴급점검 안내");
            obj.set_wordWrap("char");
            obj.set_fittocontents("width");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00","Static01_00:16","18","107","36",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("1");
            obj.set_text("자세히보기");
            obj.set_cssclass("btn_WF_More");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00",null,"11","50","50","14",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_PopClose");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","33","85","387","85",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("주거급여정보포털");
            obj.set_cssclass("sta_MF_Title01");
            obj.set_accessibilityrole("heading1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","468","106","130","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("주거급여정보포털");
            obj.set_cssclass("sta_WF_Navi");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","Static00:10","106","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("사업안내");
            obj.set_cssclass("sta_WF_Navi");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","Static00_00:10","106","84","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("주거급여소개");
            obj.set_cssclass("sta_WF_NaviEnd");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","50","180","212","68",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("주거급여소개");
            obj.set_cssclass("btn_WF_TabBtnS");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","Button00:6","180","212","68",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("주거급여관리");
            obj.set_cssclass("btn_WF_TabBtn");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_02","486","180","212","68",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("부정수급신고");
            obj.set_cssclass("btn_WF_TabBtn");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_02_00","Button00_00_02:6","180","212","68",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("임차가구지원");
            obj.set_cssclass("btn_WF_TabBtn");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_02_00_00","Button00_00_02_00:6","180","212","68",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("자가가구지원");
            obj.set_cssclass("btn_WF_TabBtn");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_02_00_00_00","Button00_00_02_00_00:6","180","212","68",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("청년가구지원");
            obj.set_cssclass("btn_WF_TabBtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","40","269",null,"70","60",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("기본정보2");
            obj.set_cssclass("sta_WF_BoxTitle");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","60","369",null,"30","80",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("아이디");
            obj.set_cssclass("sta_WF_LabelE");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","60","414",null,"60","213",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_displaynulltext("아이디 입력");
            obj.set_accessibilitylabel("아이디");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01",null,"414","123","60","80",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("중복확인");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00_00_00","60","474",null,"43","84",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("사용 가능합니다.");
            obj.set_cssclass("sta_WF_TxtBlue18");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01","60","539",null,"30","80",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("비밀번호");
            obj.set_cssclass("sta_WF_LabelE");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","60","584",null,"60","80",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_displaynulltext("비밀번호 입력");
            obj.set_accessibilitylabel("비밀번호");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_00","60","678",null,"30","80",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("비밀번호 재확인");
            obj.set_cssclass("sta_WF_LabelE");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","60","723",null,"60","80",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_displaynulltext("비밀번호 재확인 입력");
            obj.set_accessibilitylabel("비밀번호 재확인");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00_00_00_00","60","783",null,"43","84",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("일치합니다.");
            obj.set_cssclass("sta_WF_TxtBlue18");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_00_00_00_00","58","840",null,"30","82",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("대표자명");
            obj.set_cssclass("sta_WF_LabelE");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00_00","58","885",null,"60","82",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_displaynulltext("대표자명 입력");
            obj.set_accessibilitylabel("대표자명");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_00_00_00_00_00","58","979",null,"30","82",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("대표자 연락처");
            obj.set_cssclass("sta_WF_LabelE");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00","58","1034",null,"60","82",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_cssclass("msk_WF_TxtLeft");
            obj.set_displaynulltext("대표자 연락처 입력");
            obj.set_accessibilitylabel("대표자 연락처");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","40","1115",null,"70","60",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("지역본부 감독관");
            obj.set_cssclass("sta_WF_BoxTitle");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_00_00_00_00_00_00_00_00","60","1215",null,"30","80",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("담당 감독관");
            obj.set_cssclass("sta_WF_LabelE");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","40","1260","470","60",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_accessibilityaction("alt+아래방향키 선택 후 ctrl+방향키로 값 선택 엔터 탭키 이동");
            var Combo00_innerdataset = new nexacro.NormalDataset("Combo00_innerdataset", obj);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">라면</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">김치</Col></Row><Row><Col id=\"codecolumn\">03</Col><Col id=\"datacolumn\">구두</Col></Row><Row><Col id=\"codecolumn\">04</Col><Col id=\"datacolumn\">신발</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","533","1260","470","60",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_accessibilityaction("alt+아래방향키 선택 후 ctrl+방향키로 값 선택 엔터 탭키 이동");
            var Combo00_00_innerdataset = new nexacro.NormalDataset("Combo00_00_innerdataset", obj);
            Combo00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">라면</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">김치</Col></Row><Row><Col id=\"codecolumn\">03</Col><Col id=\"datacolumn\">구두</Col></Row><Row><Col id=\"codecolumn\">04</Col><Col id=\"datacolumn\">신발</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_00_innerdataset);
            obj.set_text("선택01");
            obj.set_value("02");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","43","1355","184","66",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("CheckBox00");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00","260","1355","184","66",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("CheckBox00");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","464","1350","232","76",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_accessibilitylabel("테스트중");
            obj.set_direction("vertical");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">aa</Col><Col id=\"datacolumn\">aa</Col></Row><Row><Col id=\"codecolumn\">bb</Col><Col id=\"datacolumn\">bb</Col></Row><Row><Col id=\"codecolumn\">cc</Col><Col id=\"datacolumn\">cc</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00_00","715","1350","311","76",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_accessibilitylabel("테스트중");
            obj.set_direction("vertical");
            obj.set_accessibilitydesclevel("child");
            var Radio00_00_innerdataset = new nexacro.NormalDataset("Radio00_00_innerdataset", obj);
            Radio00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">aa</Col><Col id=\"datacolumn\">aa</Col></Row><Row><Col id=\"codecolumn\">bb</Col><Col id=\"datacolumn\">bb</Col></Row><Row><Col id=\"codecolumn\">cc</Col><Col id=\"datacolumn\">cc</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00_01","37","1437",null,"203","63",null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_binddataset("Dataset00_00");
            obj.set_selecttype("cell");
            obj.set_accessibilitylabel("공지사항표");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"363\"/><Column size=\"56\"/></Columns><Rows><Row size=\"60\" band=\"head\"/><Row size=\"70\"/></Rows><Band id=\"head\" accessibilityenable=\"false\"><Cell accessibilitylabel=\"전체선택\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"제목\"/><Cell col=\"2\" text=\"상세\"/></Band><Band id=\"body\" accessibilityenable=\"false\"><Cell text=\"bind:NO\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" accessibilitylabel=\"bind:TITLE\"/><Cell col=\"1\" text=\"bind:TITLE\"/><Cell col=\"2\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"이동\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","30","1681","1060","149",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_autoenter("select");
            obj.set_createrowstype("all");
            obj.set_selecttype("cell");
            obj.set_accessibilitylabel("대상 가구 조회");
            obj.set_binddataset("ds1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"82\"/><Column size=\"70\"/><Column size=\"65\"/><Column size=\"93\"/><Column size=\"108\"/><Column size=\"186\"/><Column size=\"128\"/><Column size=\"314\"/><Column size=\"237\"/><Column size=\"112\"/><Column size=\"126\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"37\" band=\"head\"/><Row size=\"42\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"상태\"/><Cell col=\"2\" text=\"알림톡\"/><Cell col=\"3\" text=\"가구주명\"/><Cell col=\"4\" text=\"생년월일\"/><Cell col=\"5\" text=\"연락처\"/><Cell col=\"6\" text=\"보수한도금액(원)\"/><Cell col=\"7\" text=\"가구주소\"/><Cell col=\"8\" text=\"공사내용\"/><Cell col=\"9\" text=\"수선이력여부\"/><Cell col=\"10\" text=\"도서지역여부\"/><Cell col=\"11\" text=\"본부\"/><Cell col=\"12\" text=\"사업소\"/><Cell col=\"13\" text=\"담당감독관\"/><Cell col=\"14\" text=\"감독관연락처\"/><Cell col=\"15\" text=\"보기\"/></Band><Band id=\"body\"><Cell text=\"bind:no\"/><Cell col=\"1\"/><Cell col=\"2\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"발송\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\" displaytype=\"text\"/><Cell col=\"13\" displaytype=\"text\"/><Cell col=\"14\"/><Cell col=\"15\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"상세보기\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","38","1876",null,"64","62",null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("주거급여소개");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","38","Static00_01:16",null,"60","62",null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("기초생활보장제도 내 주거급여를 개편, 소득·주거형태·주거비 부담수준 등을 종합적으로 고려하여 저소득층의 주거비를 지원하는 제도입니다.");
            obj.set_wordWrap("char");
            obj.set_cssclass("sta_WF_Txt20");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","38","Static01_00:5","82","30",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("근거법 :");
            obj.set_wordWrap("char");
            obj.set_cssclass("sta_WF_BlitText01");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","Static01_00_00:-10","Static01_00:5","155","30",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("「주거급여법」");
            obj.set_cssclass("btn_WF_Quest");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_00","Button02:8","Static01_00:5","246","30",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("및 「국민기초생활보장법」");
            obj.set_cssclass("btn_WF_Quest");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","24","2085",null,"35","76",null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("지원대상");
            obj.set_cssclass("sta_WF_DesTitle");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_03","24","Static03:12",null,"60","76",null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("부양의무자 소득 및 재산 유무와 상관없이, <fc v=\'#D54302\'>신청가구의 소득과 재산만을 종합적으로 반영</fc>한 소득 인정액이 기준 중위소득의 48%(4인 기준 275만 원)이하 가구가 지원 대상입니다.");
            obj.set_wordWrap("char");
            obj.set_cssclass("sta_WF_Txt20");
            obj.set_usedecorate("true");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00",null,"Static01_00_03:-3","273","26","76",null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("2024년도 적용기준 / (단위 : 원/월)");
            obj.set_wordWrap("char");
            obj.set_cssclass("sta_WF_BlitText02");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","24","Static01_00_00_00:24",null,"133","76",null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj.set_selecttype("cell");
            obj.set_cssclass("grd_WF_AllLine");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/></Columns><Rows><Row size=\"60\" band=\"head\"/><Row size=\"70\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"1인 가구\"/><Cell col=\"2\" text=\"2인 가구\"/><Cell col=\"3\" text=\"3인 가구\"/><Cell col=\"4\" text=\"4인 가구\"/><Cell col=\"5\" text=\"5인 가구\"/><Cell col=\"6\" text=\"6인 가구\" cssclass=\"cell_WF_End\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" cssclass=\"cell_WF_SubHead\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:Column1\" displaytype=\"mask\" textAlign=\"center\"/><Cell col=\"2\" displaytype=\"mask\" textAlign=\"center\" text=\"bind:Column2\"/><Cell col=\"3\" displaytype=\"mask\" textAlign=\"center\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\" displaytype=\"mask\" edittype=\"combo\" textAlign=\"center\"/><Cell col=\"5\" displaytype=\"mask\" maskeditformat=\"###,###\" textAlign=\"center\" text=\"bind:Column5\"/><Cell col=\"6\" displaytype=\"mask\" maskeditformat=\"###,###\" textAlign=\"center\" text=\"bind:Column6\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","24","Grid00_00:24",null,"26","76",null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("중위소득 : 전체가구를 소득순으로 순위를 매긴 다음, 중간순서 가구의 소득수준");
            obj.set_wordWrap("char");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_BlitText02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00","24","Static01_00_00_01:3",null,"26","76",null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("소득인정액 : 소득평가액 + 재산의 소득환산액");
            obj.set_wordWrap("char");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_BlitText02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_02","24","Static01_00_00_01_00:50",null,"70","76",null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("주거급여 지원 현황");
            obj.set_cssclass("sta_WF_BoxTitle");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00",null,"Static01_00_00_01_00:68","157","26","76",null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("단위 : 만가구, 만원");
            obj.set_wordWrap("char");
            obj.set_cssclass("sta_WF_BlitText02");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00","24","Static01_00_02:-2",null,"413","76",null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_binddataset("Dataset01");
            obj.set_selecttype("cell");
            obj.set_cssclass("grd_WF_AllLine");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"60\" band=\"head\"/><Row size=\"70\"/><Row size=\"70\"/><Row size=\"70\"/><Row size=\"70\"/><Row size=\"70\"/></Rows><Band id=\"head\"><Cell text=\"기준연도\"/><Cell col=\"1\" text=\"&apos;15.12\"/><Cell col=\"2\" text=\"&apos;16.12\"/><Cell col=\"3\" text=\"&apos;17.12\"/><Cell col=\"4\" text=\"&apos;18.12\"/><Cell col=\"5\" text=\"&apos;19.12\"/><Cell col=\"6\" text=\"&apos;20.12\"/><Cell col=\"7\" text=\"&apos;21.12\"/><Cell col=\"8\" text=\"&apos;22.12\"/><Cell col=\"9\" text=\"&apos;23.12\" cssclass=\"cell_WF_End\"/></Band><Band id=\"body\"><Cell cssclass=\"cell_WF_SubHead,cell_WF_Bold\" displaytype=\"text\" text=\"수급권자\"/><Cell col=\"1\" displaytype=\"number\" textAlign=\"center\" text=\"95.9\"/><Cell col=\"2\" displaytype=\"number\" textAlign=\"center\" text=\"94.1\"/><Cell col=\"3\" displaytype=\"number\" textAlign=\"center\" text=\"93.2\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"combo\" textAlign=\"center\" text=\"107.0\"/><Cell col=\"5\" displaytype=\"number\" maskeditformat=\"###,###\" textAlign=\"center\" text=\"118.8\"/><Cell col=\"6\" displaytype=\"number\" textAlign=\"center\" text=\"136.7\"/><Cell col=\"7\" displaytype=\"number\" textAlign=\"center\" text=\"153.4\"/><Cell col=\"8\" displaytype=\"number\" textAlign=\"center\" text=\"162.9\"/><Cell col=\"9\" displaytype=\"number\" maskeditformat=\"###,###\" textAlign=\"center\" text=\"172.4\"/><Cell row=\"1\" text=\"수급자\" cssclass=\"cell_WF_SubHead,cell_WF_Bold\" displaytype=\"text\"/><Cell row=\"1\" col=\"1\" displaytype=\"number\" textAlign=\"center\" text=\"80.0\"/><Cell row=\"1\" col=\"2\" displaytype=\"number\" textAlign=\"center\" text=\"80.4\"/><Cell row=\"1\" col=\"3\" displaytype=\"number\" textAlign=\"center\" text=\"81.0\"/><Cell row=\"1\" col=\"4\" displaytype=\"number\" edittype=\"combo\" textAlign=\"center\" text=\"94\"/><Cell row=\"1\" col=\"5\" displaytype=\"number\" maskeditformat=\"###,###\" textAlign=\"center\" text=\"104\"/><Cell row=\"1\" col=\"6\" displaytype=\"number\" textAlign=\"center\" text=\"118.9\"/><Cell row=\"1\" col=\"7\" displaytype=\"number\" textAlign=\"center\" text=\"127.3\"/><Cell row=\"1\" col=\"8\" displaytype=\"number\" textAlign=\"center\" text=\"134.5\"/><Cell row=\"1\" col=\"9\" displaytype=\"number\" maskeditformat=\"###,###\" textAlign=\"center\" text=\"141.5\"/><Cell row=\"2\" text=\"임차가구\" cssclass=\"cell_WF_SubHead\" displaytype=\"text\" background=\"#F5F5F5\"/><Cell row=\"2\" col=\"1\" displaytype=\"number\" textAlign=\"center\" text=\"72.1\" background=\"#F5F5F5\"/><Cell row=\"2\" col=\"2\" displaytype=\"number\" textAlign=\"center\" text=\"72.7\" background=\"#F5F5F5\"/><Cell row=\"2\" col=\"3\" displaytype=\"number\" textAlign=\"center\" text=\"73.7\" background=\"#F5F5F5\"/><Cell row=\"2\" col=\"4\" displaytype=\"number\" edittype=\"combo\" textAlign=\"center\" text=\"85.7\" background=\"#F5F5F5\"/><Cell row=\"2\" col=\"5\" displaytype=\"number\" maskeditformat=\"###,###\" textAlign=\"center\" text=\"95.2\" background=\"#F5F5F5\"/><Cell row=\"2\" col=\"6\" displaytype=\"number\" textAlign=\"center\" text=\"109.3\" background=\"#F5F5F5\"/><Cell row=\"2\" col=\"7\" displaytype=\"number\" textAlign=\"center\" text=\"116.5\" background=\"#F5F5F5\"/><Cell row=\"2\" col=\"8\" displaytype=\"number\" textAlign=\"center\" text=\"123.2\" background=\"#F5F5F5\"/><Cell row=\"2\" col=\"9\" displaytype=\"number\" maskeditformat=\"###,###\" textAlign=\"center\" text=\"130.8\" background=\"#F5F5F5\"/><Cell row=\"3\" text=\"자가가구\" cssclass=\"cell_WF_SubHead\" displaytype=\"text\" background=\"#F5F5F5\"/><Cell row=\"3\" col=\"1\" displaytype=\"number\" textAlign=\"center\" text=\"7.8\" background=\"#F5F5F5\"/><Cell row=\"3\" col=\"2\" displaytype=\"number\" textAlign=\"center\" text=\"7.7\" background=\"#F5F5F5\"/><Cell row=\"3\" col=\"3\" displaytype=\"number\" textAlign=\"center\" text=\"7.3\" background=\"#F5F5F5\"/><Cell row=\"3\" col=\"4\" displaytype=\"number\" edittype=\"combo\" textAlign=\"center\" text=\"8.3\" background=\"#F5F5F5\"/><Cell row=\"3\" col=\"5\" displaytype=\"number\" maskeditformat=\"###,###\" textAlign=\"center\" text=\"8.8\" background=\"#F5F5F5\"/><Cell row=\"3\" col=\"6\" displaytype=\"number\" textAlign=\"center\" text=\"9.6\" background=\"#F5F5F5\"/><Cell row=\"3\" col=\"7\" displaytype=\"number\" textAlign=\"center\" text=\"10.8\" background=\"#F5F5F5\"/><Cell row=\"3\" col=\"8\" displaytype=\"number\" textAlign=\"center\" text=\"11.3\" background=\"#F5F5F5\"/><Cell row=\"3\" col=\"9\" displaytype=\"number\" maskeditformat=\"###,###\" textAlign=\"center\" text=\"10.7\" background=\"#F5F5F5\"/><Cell row=\"4\" text=\"평균임차급여액\" cssclass=\"cell_WF_SubHead,cell_WF_Bold\" displaytype=\"text\"/><Cell row=\"4\" col=\"1\" displaytype=\"number\" textAlign=\"center\" text=\"10.8\"/><Cell row=\"4\" col=\"2\" displaytype=\"number\" textAlign=\"center\" text=\"11.2\"/><Cell row=\"4\" col=\"3\" displaytype=\"number\" textAlign=\"center\" text=\"11.7\"/><Cell row=\"4\" col=\"4\" displaytype=\"number\" edittype=\"combo\" textAlign=\"center\" text=\"12.9\"/><Cell row=\"4\" col=\"5\" displaytype=\"number\" maskeditformat=\"###,###\" textAlign=\"center\" text=\"13.5\"/><Cell row=\"4\" col=\"6\" displaytype=\"number\" textAlign=\"center\" text=\"15.5\"/><Cell row=\"4\" col=\"7\" displaytype=\"number\" textAlign=\"center\" text=\"17.1\"/><Cell row=\"4\" col=\"8\" displaytype=\"number\" textAlign=\"center\" text=\"17.8\"/><Cell row=\"4\" col=\"9\" displaytype=\"number\" maskeditformat=\"###,###\" textAlign=\"center\" text=\"18.1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_01","24","Grid00_00_00:24",null,"26","76",null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("수급권자 : 주거급여 선정기준(\'24년 기준 소득인정액이 기준중위소득 48% 이하)을 충족하여 수급자격이 있는 자");
            obj.set_wordWrap("char");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_BlitText02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00","24","Static01_00_00_01_01:3",null,"26","76",null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("수급자 : 수급권자 중 주거급여 미지급 대상(보장시설 거주, 무료거주 등)을 제외하고 실제 급여를 받는 자");
            obj.set_wordWrap("char");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_BlitText02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_02_00","28","3080",null,"70","72",null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("개편제도 요약");
            obj.set_cssclass("sta_WF_BoxTitle");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00_00","28","Static01_00_02_00:-2",null,"573","72",null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_binddataset("Dataset01");
            obj.set_selecttype("cell");
            obj.set_cssclass("grd_WF_AllLine");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"400\"/><Column size=\"600\"/></Columns><Rows><Row size=\"60\" band=\"head\"/><Row size=\"70\"/><Row size=\"70\"/><Row size=\"100\"/><Row size=\"100\"/><Row size=\"100\"/><Row size=\"70\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"개편 전 주거급여\"/><Cell col=\"2\" text=\"개편 후 주거급여(‘24년 기준)\" cssclass=\"cell_WF_End\"/></Band><Band id=\"body\"><Cell cssclass=\"cell_WF_SubHead\" displaytype=\"text\" text=\"근거법\"/><Cell col=\"1\" text=\"국민기초생활보장법\" displaytype=\"text\"/><Cell col=\"2\" maskeditformat=\"###,###\" text=\"주거급여법 + 국민기초생활보장법\" displaytype=\"text\"/><Cell row=\"1\" text=\"소관부처\" cssclass=\"cell_WF_SubHead\" displaytype=\"text\"/><Cell row=\"1\" col=\"1\" text=\"보건복지부\" displaytype=\"text\"/><Cell row=\"1\" col=\"2\" maskeditformat=\"###,###\" text=\"국토교통부\" displaytype=\"text\"/><Cell row=\"2\" text=\"지급대상\" cssclass=\"cell_WF_SubHead\" displaytype=\"text\"/><Cell row=\"2\" col=\"1\" text=\"소득인정액이 현금급여기준선&#13;&#10;(중위소득 33%) 이하\" displaytype=\"text\"/><Cell row=\"2\" col=\"2\" maskeditformat=\"###,###\" text=\"소득인정액이 중위소득 48% 이하\" displaytype=\"text\"/><Cell row=\"3\" text=\"임차\" cssclass=\"cell_WF_SubHead\" displaytype=\"text\"/><Cell row=\"3\" col=\"1\" text=\"(현금급여기준액-소득인정액)의 약 22%\" displaytype=\"text\"/><Cell row=\"3\" col=\"2\" maskeditformat=\"###,###\" text=\"수급권자의 소득인정액, 가구원수, 주거유형, 주거비 부담수준 등을&#13;&#10;고려하여 지급\" displaytype=\"text\"/><Cell row=\"4\" text=\"자가\" cssclass=\"cell_WF_SubHead\" displaytype=\"text\"/><Cell row=\"4\" col=\"1\" text=\"현금급여, 현물급여 병행하여 지급\" displaytype=\"text\"/><Cell row=\"4\" col=\"2\" maskeditformat=\"###,###\" text=\"수급자의 가구규모, 소득인정액, 수선유지비 소요액, 주택의 노후도 등을&#13;&#10;고려하여 지급\" displaytype=\"text\"/><Cell row=\"5\" text=\"전달체계\" cssclass=\"cell_WF_SubHead\" displaytype=\"text\"/><Cell row=\"5\" col=\"1\" text=\"보장기관\" displaytype=\"text\"/><Cell row=\"5\" col=\"2\" maskeditformat=\"###,###\" text=\"보장기관\" displaytype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_01","302","3965","476","77",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("Static01은 버튼 하단 여백을 잡아주기 위함입니다. 높이값 80px");
            obj.set_background("#ffd799");
            obj.set_border("3px solid #ff7f1e");
            obj.set_textAlign("center");
            obj.set_font("bold 15px/normal \"Malgun Gothic\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00","29","3744",null,"35","71",null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("주거급여 상세안내");
            obj.set_cssclass("sta_WF_DesTitle");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","435","3828","240","75",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_03","460","3923","164","80",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divAccess.form
            obj = new Layout("default","",0,0,this.divAccess.form,function(p){});
            this.divAccess.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00_00.form
            obj = new Layout("default","",0,0,this.Div00_00.form,function(p){});
            this.Div00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1126,4370,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("사업안내 주거급여소개");
                p.set_accessibilityenable("false");

                p.Static01.set_taborder("0");
                p.Static01.set_text("바로가기메뉴");
                p.Static01.move("0","0","0","0",null,null);

                p.divAccess.set_taborder("1");
                p.divAccess.set_text("Div00");
                p.divAccess.set_background("pink");
                p.divAccess.set_accessibilityenable("false");
                p.divAccess.move("330","1","529","20",null,null);

                p.Div00_00.set_taborder("2");
                p.Div00_00.set_text("");
                p.Div00_00.set_cssclass("div_WF_BannerBg");
                p.Div00_00.set_accessibilityenable("false");
                p.Div00_00.move("0","0",null,"72","6",null);

                p.Static00_01_00.set_taborder("3");
                p.Static00_01_00.set_text("주거급여정보포털");
                p.Static00_01_00.set_cssclass("sta_MF_Title01");
                p.Static00_01_00.set_accessibilityrole("heading1");
                p.Static00_01_00.move("33","85","387","85",null,null);

                p.Static00.set_taborder("4");
                p.Static00.set_text("주거급여정보포털");
                p.Static00.set_cssclass("sta_WF_Navi");
                p.Static00.set_fittocontents("width");
                p.Static00.move("468","106","130","24",null,null);

                p.Static00_00.set_taborder("5");
                p.Static00_00.set_text("사업안내");
                p.Static00_00.set_cssclass("sta_WF_Navi");
                p.Static00_00.move("Static00:10","106","70","24",null,null);

                p.Static00_00_00.set_taborder("6");
                p.Static00_00_00.set_text("주거급여소개");
                p.Static00_00_00.set_cssclass("sta_WF_NaviEnd");
                p.Static00_00_00.move("Static00_00:10","106","84","24",null,null);

                p.Button00.set_taborder("7");
                p.Button00.set_text("주거급여소개");
                p.Button00.set_cssclass("btn_WF_TabBtnS");
                p.Button00.move("50","180","212","68",null,null);

                p.Button00_00.set_taborder("8");
                p.Button00_00.set_text("주거급여관리");
                p.Button00_00.set_cssclass("btn_WF_TabBtn");
                p.Button00_00.move("Button00:6","180","212","68",null,null);

                p.Button00_00_02.set_taborder("9");
                p.Button00_00_02.set_text("부정수급신고");
                p.Button00_00_02.set_cssclass("btn_WF_TabBtn");
                p.Button00_00_02.move("486","180","212","68",null,null);

                p.Button00_00_02_00.set_taborder("10");
                p.Button00_00_02_00.set_text("임차가구지원");
                p.Button00_00_02_00.set_cssclass("btn_WF_TabBtn");
                p.Button00_00_02_00.move("Button00_00_02:6","180","212","68",null,null);

                p.Button00_00_02_00_00.set_taborder("11");
                p.Button00_00_02_00_00.set_text("자가가구지원");
                p.Button00_00_02_00_00.set_cssclass("btn_WF_TabBtn");
                p.Button00_00_02_00_00.move("Button00_00_02_00:6","180","212","68",null,null);

                p.Button00_00_02_00_00_00.set_taborder("12");
                p.Button00_00_02_00_00_00.set_text("청년가구지원");
                p.Button00_00_02_00_00_00.set_cssclass("btn_WF_TabBtn");
                p.Button00_00_02_00_00_00.move("Button00_00_02_00_00:6","180","212","68",null,null);

                p.Static01_00_01.set_taborder("13");
                p.Static01_00_01.set_text("기본정보2");
                p.Static01_00_01.set_cssclass("sta_WF_BoxTitle");
                p.Static01_00_01.set_accessibilityrole("heading2");
                p.Static01_00_01.move("40","269",null,"70","60",null);

                p.Static00_02.set_taborder("14");
                p.Static00_02.set_text("아이디");
                p.Static00_02.set_cssclass("sta_WF_LabelE");
                p.Static00_02.move("60","369",null,"30","80",null);

                p.Edit00.set_taborder("15");
                p.Edit00.set_displaynulltext("아이디 입력");
                p.Edit00.set_accessibilitylabel("아이디");
                p.Edit00.move("60","414",null,"60","213",null);

                p.Button00_01.set_taborder("16");
                p.Button00_01.set_text("중복확인");
                p.Button00_01.move(null,"414","123","60","80",null);

                p.Static06_00_00_00.set_taborder("17");
                p.Static06_00_00_00.set_text("사용 가능합니다.");
                p.Static06_00_00_00.set_cssclass("sta_WF_TxtBlue18");
                p.Static06_00_00_00.move("60","474",null,"43","84",null);

                p.Static00_02_01.set_taborder("18");
                p.Static00_02_01.set_text("비밀번호");
                p.Static00_02_01.set_cssclass("sta_WF_LabelE");
                p.Static00_02_01.move("60","539",null,"30","80",null);

                p.Edit00_00.set_taborder("19");
                p.Edit00_00.set_displaynulltext("비밀번호 입력");
                p.Edit00_00.set_accessibilitylabel("비밀번호");
                p.Edit00_00.move("60","584",null,"60","80",null);

                p.Static00_02_01_00.set_taborder("20");
                p.Static00_02_01_00.set_text("비밀번호 재확인");
                p.Static00_02_01_00.set_cssclass("sta_WF_LabelE");
                p.Static00_02_01_00.move("60","678",null,"30","80",null);

                p.Edit00_00_00.set_taborder("21");
                p.Edit00_00_00.set_displaynulltext("비밀번호 재확인 입력");
                p.Edit00_00_00.set_accessibilitylabel("비밀번호 재확인");
                p.Edit00_00_00.move("60","723",null,"60","80",null);

                p.Static06_00_00_00_00.set_taborder("22");
                p.Static06_00_00_00_00.set_text("일치합니다.");
                p.Static06_00_00_00_00.set_cssclass("sta_WF_TxtBlue18");
                p.Static06_00_00_00_00.move("60","783",null,"43","84",null);

                p.Static00_02_01_00_00_00_00.set_taborder("23");
                p.Static00_02_01_00_00_00_00.set_text("대표자명");
                p.Static00_02_01_00_00_00_00.set_cssclass("sta_WF_LabelE");
                p.Static00_02_01_00_00_00_00.move("58","840",null,"30","82",null);

                p.Edit00_00_00_00_00_00.set_taborder("24");
                p.Edit00_00_00_00_00_00.set_displaynulltext("대표자명 입력");
                p.Edit00_00_00_00_00_00.set_accessibilitylabel("대표자명");
                p.Edit00_00_00_00_00_00.move("58","885",null,"60","82",null);

                p.Static00_02_01_00_00_00_00_00.set_taborder("25");
                p.Static00_02_01_00_00_00_00_00.set_text("대표자 연락처");
                p.Static00_02_01_00_00_00_00_00.set_cssclass("sta_WF_LabelE");
                p.Static00_02_01_00_00_00_00_00.move("58","979",null,"30","82",null);

                p.MaskEdit00_00.set_taborder("26");
                p.MaskEdit00_00.set_cssclass("msk_WF_TxtLeft");
                p.MaskEdit00_00.set_displaynulltext("대표자 연락처 입력");
                p.MaskEdit00_00.set_accessibilitylabel("대표자 연락처");
                p.MaskEdit00_00.move("58","1034",null,"60","82",null);

                p.Static01_00_00_00_01.set_taborder("27");
                p.Static01_00_00_00_01.set_text("지역본부 감독관");
                p.Static01_00_00_00_01.set_cssclass("sta_WF_BoxTitle");
                p.Static01_00_00_00_01.set_accessibilityrole("heading2");
                p.Static01_00_00_00_01.move("40","1115",null,"70","60",null);

                p.Static00_02_01_00_00_00_00_00_00_00_00.set_taborder("28");
                p.Static00_02_01_00_00_00_00_00_00_00_00.set_text("담당 감독관");
                p.Static00_02_01_00_00_00_00_00_00_00_00.set_cssclass("sta_WF_LabelE");
                p.Static00_02_01_00_00_00_00_00_00_00_00.move("60","1215",null,"30","80",null);

                p.Combo00.set_taborder("29");
                p.Combo00.set_innerdataset(Combo00_innerdataset);
                p.Combo00.set_codecolumn("codecolumn");
                p.Combo00.set_datacolumn("datacolumn");
                p.Combo00.set_accessibilityaction("alt+아래방향키 선택 후 ctrl+방향키로 값 선택 엔터 탭키 이동");
                p.Combo00.set_value("");
                p.Combo00.set_index("-1");
                p.Combo00.move("40","1260","470","60",null,null);

                p.Combo00_00.set_taborder("30");
                p.Combo00_00.set_innerdataset(Combo00_00_innerdataset);
                p.Combo00_00.set_codecolumn("codecolumn");
                p.Combo00_00.set_datacolumn("datacolumn");
                p.Combo00_00.set_accessibilityaction("alt+아래방향키 선택 후 ctrl+방향키로 값 선택 엔터 탭키 이동");
                p.Combo00_00.set_text("선택01");
                p.Combo00_00.set_value("02");
                p.Combo00_00.set_index("1");
                p.Combo00_00.move("533","1260","470","60",null,null);

                p.CheckBox00.set_taborder("31");
                p.CheckBox00.set_text("CheckBox00");
                p.CheckBox00.move("43","1355","184","66",null,null);

                p.CheckBox00_00.set_taborder("32");
                p.CheckBox00_00.set_text("CheckBox00");
                p.CheckBox00_00.move("260","1355","184","66",null,null);

                p.Radio00.set_taborder("33");
                p.Radio00.set_innerdataset(Radio00_innerdataset);
                p.Radio00.set_codecolumn("codecolumn");
                p.Radio00.set_datacolumn("datacolumn");
                p.Radio00.set_accessibilitylabel("테스트중");
                p.Radio00.set_direction("vertical");
                p.Radio00.move("464","1350","232","76",null,null);

                p.Radio00_00.set_taborder("34");
                p.Radio00_00.set_innerdataset(Radio00_00_innerdataset);
                p.Radio00_00.set_codecolumn("codecolumn");
                p.Radio00_00.set_datacolumn("datacolumn");
                p.Radio00_00.set_accessibilitylabel("테스트중");
                p.Radio00_00.set_direction("vertical");
                p.Radio00_00.set_accessibilitydesclevel("child");
                p.Radio00_00.move("715","1350","311","76",null,null);

                p.Grid00_00_00_01.set_taborder("35");
                p.Grid00_00_00_01.set_binddataset("Dataset00_00");
                p.Grid00_00_00_01.set_selecttype("cell");
                p.Grid00_00_00_01.set_accessibilitylabel("공지사항표");
                p.Grid00_00_00_01.set_autoenter("select");
                p.Grid00_00_00_01.set_autofittype("col");
                p.Grid00_00_00_01.move("37","1437",null,"203","63",null);

                p.Grid00.set_taborder("36");
                p.Grid00.set_autoenter("select");
                p.Grid00.set_createrowstype("all");
                p.Grid00.set_selecttype("cell");
                p.Grid00.set_accessibilitylabel("대상 가구 조회");
                p.Grid00.set_binddataset("ds1");
                p.Grid00.move("30","1681","1060","149",null,null);

                p.Static00_01.set_taborder("37");
                p.Static00_01.set_text("주거급여소개");
                p.Static00_01.set_cssclass("sta_WF_Title");
                p.Static00_01.set_fittocontents("width");
                p.Static00_01.set_accessibilityrole("heading1");
                p.Static00_01.move("38","1876",null,"64","62",null);

                p.Static01_00.set_taborder("38");
                p.Static01_00.set_text("기초생활보장제도 내 주거급여를 개편, 소득·주거형태·주거비 부담수준 등을 종합적으로 고려하여 저소득층의 주거비를 지원하는 제도입니다.");
                p.Static01_00.set_wordWrap("char");
                p.Static01_00.set_cssclass("sta_WF_Txt20");
                p.Static01_00.set_fittocontents("height");
                p.Static01_00.move("38","Static00_01:16",null,"60","62",null);

                p.Static01_00_00.set_taborder("39");
                p.Static01_00_00.set_text("근거법 :");
                p.Static01_00_00.set_wordWrap("char");
                p.Static01_00_00.set_cssclass("sta_WF_BlitText01");
                p.Static01_00_00.set_fittocontents("width");
                p.Static01_00_00.move("38","Static01_00:5","82","30",null,null);

                p.Button02.set_taborder("40");
                p.Button02.set_text("「주거급여법」");
                p.Button02.set_cssclass("btn_WF_Quest");
                p.Button02.set_fittocontents("width");
                p.Button02.move("Static01_00_00:-10","Static01_00:5","155","30",null,null);

                p.Button02_00.set_taborder("41");
                p.Button02_00.set_text("및 「국민기초생활보장법」");
                p.Button02_00.set_cssclass("btn_WF_Quest");
                p.Button02_00.set_fittocontents("width");
                p.Button02_00.move("Button02:8","Static01_00:5","246","30",null,null);

                p.Static03.set_taborder("42");
                p.Static03.set_text("지원대상");
                p.Static03.set_cssclass("sta_WF_DesTitle");
                p.Static03.set_accessibilityrole("heading2");
                p.Static03.move("24","2085",null,"35","76",null);

                p.Static01_00_03.set_taborder("43");
                p.Static01_00_03.set_text("부양의무자 소득 및 재산 유무와 상관없이, <fc v=\'#D54302\'>신청가구의 소득과 재산만을 종합적으로 반영</fc>한 소득 인정액이 기준 중위소득의 48%(4인 기준 275만 원)이하 가구가 지원 대상입니다.");
                p.Static01_00_03.set_wordWrap("char");
                p.Static01_00_03.set_cssclass("sta_WF_Txt20");
                p.Static01_00_03.set_usedecorate("true");
                p.Static01_00_03.set_fittocontents("height");
                p.Static01_00_03.move("24","Static03:12",null,"60","76",null);

                p.Static01_00_00_00.set_taborder("44");
                p.Static01_00_00_00.set_text("2024년도 적용기준 / (단위 : 원/월)");
                p.Static01_00_00_00.set_wordWrap("char");
                p.Static01_00_00_00.set_cssclass("sta_WF_BlitText02");
                p.Static01_00_00_00.set_fittocontents("width");
                p.Static01_00_00_00.move(null,"Static01_00_03:-3","273","26","76",null);

                p.Grid00_00.set_taborder("45");
                p.Grid00_00.set_binddataset("Dataset00");
                p.Grid00_00.set_autofittype("col");
                p.Grid00_00.set_selecttype("cell");
                p.Grid00_00.set_cssclass("grd_WF_AllLine");
                p.Grid00_00.move("24","Static01_00_00_00:24",null,"133","76",null);

                p.Static01_00_00_01.set_taborder("46");
                p.Static01_00_00_01.set_text("중위소득 : 전체가구를 소득순으로 순위를 매긴 다음, 중간순서 가구의 소득수준");
                p.Static01_00_00_01.set_wordWrap("char");
                p.Static01_00_00_01.set_usedecorate("true");
                p.Static01_00_00_01.set_cssclass("sta_WF_BlitText02");
                p.Static01_00_00_01.move("24","Grid00_00:24",null,"26","76",null);

                p.Static01_00_00_01_00.set_taborder("47");
                p.Static01_00_00_01_00.set_text("소득인정액 : 소득평가액 + 재산의 소득환산액");
                p.Static01_00_00_01_00.set_wordWrap("char");
                p.Static01_00_00_01_00.set_usedecorate("true");
                p.Static01_00_00_01_00.set_cssclass("sta_WF_BlitText02");
                p.Static01_00_00_01_00.move("24","Static01_00_00_01:3",null,"26","76",null);

                p.Static01_00_02.set_taborder("48");
                p.Static01_00_02.set_text("주거급여 지원 현황");
                p.Static01_00_02.set_cssclass("sta_WF_BoxTitle");
                p.Static01_00_02.set_accessibilityrole("heading2");
                p.Static01_00_02.move("24","Static01_00_00_01_00:50",null,"70","76",null);

                p.Static01_00_00_00_00.set_taborder("49");
                p.Static01_00_00_00_00.set_text("단위 : 만가구, 만원");
                p.Static01_00_00_00_00.set_wordWrap("char");
                p.Static01_00_00_00_00.set_cssclass("sta_WF_BlitText02");
                p.Static01_00_00_00_00.set_fittocontents("width");
                p.Static01_00_00_00_00.move(null,"Static01_00_00_01_00:68","157","26","76",null);

                p.Grid00_00_00.set_taborder("50");
                p.Grid00_00_00.set_binddataset("Dataset01");
                p.Grid00_00_00.set_selecttype("cell");
                p.Grid00_00_00.set_cssclass("grd_WF_AllLine");
                p.Grid00_00_00.set_autofittype("col");
                p.Grid00_00_00.move("24","Static01_00_02:-2",null,"413","76",null);

                p.Static01_00_00_01_01.set_taborder("51");
                p.Static01_00_00_01_01.set_text("수급권자 : 주거급여 선정기준(\'24년 기준 소득인정액이 기준중위소득 48% 이하)을 충족하여 수급자격이 있는 자");
                p.Static01_00_00_01_01.set_wordWrap("char");
                p.Static01_00_00_01_01.set_usedecorate("true");
                p.Static01_00_00_01_01.set_cssclass("sta_WF_BlitText02");
                p.Static01_00_00_01_01.move("24","Grid00_00_00:24",null,"26","76",null);

                p.Static01_00_00_01_00_00.set_taborder("52");
                p.Static01_00_00_01_00_00.set_text("수급자 : 수급권자 중 주거급여 미지급 대상(보장시설 거주, 무료거주 등)을 제외하고 실제 급여를 받는 자");
                p.Static01_00_00_01_00_00.set_wordWrap("char");
                p.Static01_00_00_01_00_00.set_usedecorate("true");
                p.Static01_00_00_01_00_00.set_cssclass("sta_WF_BlitText02");
                p.Static01_00_00_01_00_00.move("24","Static01_00_00_01_01:3",null,"26","76",null);

                p.Static01_00_02_00.set_taborder("53");
                p.Static01_00_02_00.set_text("개편제도 요약");
                p.Static01_00_02_00.set_cssclass("sta_WF_BoxTitle");
                p.Static01_00_02_00.set_accessibilityrole("heading2");
                p.Static01_00_02_00.move("28","3080",null,"70","72",null);

                p.Grid00_00_00_00.set_taborder("54");
                p.Grid00_00_00_00.set_binddataset("Dataset01");
                p.Grid00_00_00_00.set_selecttype("cell");
                p.Grid00_00_00_00.set_cssclass("grd_WF_AllLine");
                p.Grid00_00_00_00.set_autofittype("col");
                p.Grid00_00_00_00.move("28","Static01_00_02_00:-2",null,"573","72",null);

                p.Static00_02_00_01.set_taborder("55");
                p.Static00_02_00_01.set_text("Static01은 버튼 하단 여백을 잡아주기 위함입니다. 높이값 80px");
                p.Static00_02_00_01.set_background("#ffd799");
                p.Static00_02_00_01.set_border("3px solid #ff7f1e");
                p.Static00_02_00_01.set_textAlign("center");
                p.Static00_02_00_01.set_font("bold 15px/normal \"Malgun Gothic\"");
                p.Static00_02_00_01.set_visible("false");
                p.Static00_02_00_01.move("302","3965","476","77",null,null);

                p.Static03_00_00.set_taborder("56");
                p.Static03_00_00.set_text("주거급여 상세안내");
                p.Static03_00_00.set_cssclass("sta_WF_DesTitle");
                p.Static03_00_00.set_accessibilityrole("heading2");
                p.Static03_00_00.move("29","3744",null,"35","71",null);

                p.Button01.set_taborder("57");
                p.Button01.set_text("Button01");
                p.Button01.move("435","3828","240","75",null,null);

                p.Static01_03.set_taborder("58");
                p.Static01_03.set_accessibilityenable("false");
                p.Static01_03.move("460","3923","164","80",null,null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","mobile",480,4350,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Grid00_00.set_autofittype("none");
                p.Grid00_00.set_createrowstype("all");
                p.Grid00_00.move("40","2654",null,"133","9",null);

                p.Grid00_00_00.set_autofittype("none");
                p.Grid00_00_00.set_createrowstype("all");
                p.Grid00_00_00.move("40","Static01_00_02:-2",null,"413","19",null);

                p.Grid00_00_00_00.set_autofittype("none");
                p.Grid00_00_00_00.set_createrowstype("all");
                p.Grid00_00_00_00.move("35","3580",null,"573","41",null);

                p.Static00_01.set_text("주거급여소개1");
                p.Static00_01.move("40","1991",null,"64","60",null);

                p.Button00_00_02.move("64","186","212","68",null,null);

                p.Button00_00_02_00.move("252","172","212","68",null,null);

                p.Button00_00_02_00_00.move("2","210","212","68",null,null);

                p.Button00_00_02_00_00_00.move("185","220","212","68",null,null);

                p.Button02_00.move("88","Static01_00:37","246","30",null,null);

                p.Static00_02_00_01.move("3","4361","476","77",null,null);

                p.Static01_03.move("161","4349","164","80",null,null);

                p.Static01_00.move("40","2071",null,"60","60",null);

                p.Static01_00_00.move("40","2136","82","30",null,null);

                p.Button02.move("114","Static01_00:5","155","30",null,null);

                p.Static03.move("40","2500",null,"35","60",null);

                p.Static01_00_03.move("40","2547",null,"60","60",null);

                p.Static01_00_00_00.move(null,"2604","273","26","60",null);

                p.Static01_00_00_01.move("40","2811",null,"26","60",null);

                p.Static01_00_00_01_00.move("40","2840",null,"26","60",null);

                p.Static01_00_02.move("40","2916",null,"70","60",null);

                p.Static01_00_00_00_00.move(null,"Static01_00_00_01_00:68","157","26","60",null);

                p.Static01_00_00_01_01.move("40","3421",null,"26","60",null);

                p.Static01_00_00_01_00_00.move("40","3450",null,"26","60",null);

                p.Static01_00_02_00.move("61","3507",null,"70","39",null);

                p.Static03_00_00.move("48","4170",null,"35","52",null);

                p.divAccess.move("0","1",null,"20","0",null);

                p.Static00_00.move("190","76","70","24",null,null);

                p.Static00.move("50","76","130","24",null,null);

                p.Static00_00_00.move("270","76","84","24",null,null);

                p.Button00.move("50","140","212","68",null,null);

                p.Button00_00.move("268","140","212","68",null,null);

                p.Static01_00_01.move("45","292",null,"70","55",null);

                p.Static00_02.move("65","392",null,"30","75",null);

                p.Edit00.move("65","437",null,"60","208",null);

                p.Button00_01.move(null,"437","123","60","75",null);

                p.Edit00_00.move("65","607",null,"60","75",null);

                p.Static00_02_01.move("65","562",null,"30","75",null);

                p.Static00_02_01_00.move("65","701",null,"30","75",null);

                p.Edit00_00_00.move("65","746",null,"60","75",null);

                p.Static00_02_01_00_00_00_00.move("63","833",null,"30","77",null);

                p.Edit00_00_00_00_00_00.move("63","878",null,"60","77",null);

                p.Static00_02_01_00_00_00_00_00.move("63","972",null,"30","77",null);

                p.MaskEdit00_00.move("63","1027",null,"60","77",null);

                p.Radio00_00.move("40","1494","371","46",null,null);

                p.Radio00.set_value("bb");
                p.Radio00.set_index("1");
                p.Radio00.move("37","1444","371","46",null,null);

                p.Static01_00_00_00_01.move("40","1115",null,"70","60",null);

                p.Grid00_00_00_01.move("17","1560",null,"203","16",null);

                p.Grid00.move("20","1790",null,"150","16",null);

                p.Static06_00_00_00.move("62","507",null,"43","82",null);

                p.Static06_00_00_00_00.move("224","805",null,"43","55",null);

                p.Static00_02_01_00_00_00_00_00_00_00_00.move("28","1190",null,"30","112",null);

                p.Combo00.move("27","1230",null,"60","33",null);

                p.CheckBox00.move("23","1395","184","36",null,null);

                p.CheckBox00_00.move("249","1395","184","36",null,null);

                p.Static00_01_00.move("14","102","387","45",null,null);

                p.Combo00_00.move("27","1300",null,"60","37",null);

                p.Button01.move("120","4245","240","75",null,null);
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
        this.registerScript("RP_101710_PS_UI_0028.xfdl", function() {


        this.Grid00_00_00_01_oncellclick = function(obj,e)
        {
        	if (e.col == 2)
        	{
        		this.alert("test");
        	}
        };

        this.btnAccess_onkillfocus = function(obj,e)
        {
        	this.divAccess.set_height(0);

        	//RP 95735
        	if (system.navigatorname != "nexacro" )
        	{
        		var elem = this.divAccess.getElement();
        		if(elem)
        		{
        			elem.setElementZIndex("");
        		}
        	}
        };

        this.btnAccess_onsetfocus = function(obj,e)
        {
        	this.divAccess.set_height(50);

        	//RP 95735
        	if (system.navigatorname != "nexacro" )
        	{
        		var elem = this.divAccess.getElement();
        		if(elem)
        		{
        			elem.setElementZIndex(1);
        		}
        	}
        };



        this.Div00_Button00_00_onclick = function(obj,e)
        {
        	this.Div00.set_visible(false);
        	this.Static00.setFocus();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.divAccess.addEventHandler("onkillfocus",this.divAccess_onkillfocus,this);
            this.divAccess.addEventHandler("onsetfocus",this.divAccess_onsetfocus,this);
            this.divAccess.form.btnAccess.addEventHandler("onkillfocus",this.btnAccess_onkillfocus,this);
            this.divAccess.form.btnAccess.addEventHandler("onsetfocus",this.btnAccess_onsetfocus,this);
            this.Div00_00.form.Button00_00.addEventHandler("onclick",this.Div00_Button00_00_onclick,this);
            this.Grid00_00_00_01.addEventHandler("oncellclick",this.Grid00_00_00_01_oncellclick,this);
            this.Static00_01.addEventHandler("onclick",this.Static00_01_onclick,this);
        };
        this.loadIncludeScript("RP_101710_PS_UI_0028.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
