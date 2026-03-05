(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Main");
            this.set_titletext("Form_Main");
            this.set_scrollbartype("none auto");
            if (Form == this.constructor)
            {
                this._setFormPosition(1440,1250);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBbsNotice", this);
            obj._setContents("<ColumnInfo><Column id=\"bbsId\" type=\"STRING\" size=\"256\"/><Column id=\"bbsNm\" type=\"STRING\" size=\"256\"/><Column id=\"bbsCn\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"popupYn\" type=\"STRING\" size=\"256\"/><Column id=\"popupTopSz\" type=\"STRING\" size=\"256\"/><Column id=\"popupLeftSz\" type=\"STRING\" size=\"256\"/><Column id=\"popupWdthSz\" type=\"STRING\" size=\"256\"/><Column id=\"popupVrtcSz\" type=\"STRING\" size=\"256\"/><Column id=\"popupBgngDt\" type=\"STRING\" size=\"256\"/><Column id=\"popupEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"bbsTy\" type=\"STRING\" size=\"256\"/><Column id=\"bbsInqCnt\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/><Column id=\"srvcSe\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"bbsId\">2024년 인천국제공항 Landside 토목시설...</Col><Col id=\"bbsNm\">2024년 인천국제공항 Landside 토목시설...</Col></Row><Row><Col id=\"bbsId\">정보통신서비스 이용약관(2024.01.01계정)</Col><Col id=\"bbsNm\">정보통신서비스 이용약관(2024.01.01계정)</Col></Row><Row><Col id=\"bbsId\">입주자용 종량제봉투 판매료 조정 등 변경사항 알림</Col><Col id=\"bbsNm\">입주자용 종량제봉투 판매료 조정 등 변경사항 알림</Col></Row><Row><Col id=\"bbsId\">스카이패스티벌(9.16~17) 행사 연기 알림</Col><Col id=\"bbsNm\">스카이패스티벌(9.16~17) 행사 연기 알림</Col></Row><Row><Col id=\"bbsId\">제목신규 사이버인재개발원(LMS) 서비스 오픈에...</Col><Col id=\"bbsNm\">제목신규 사이버인재개발원(LMS) 서비스 오픈에...</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBbsData", this);
            obj._setContents("<ColumnInfo><Column id=\"bbsId\" type=\"STRING\" size=\"256\"/><Column id=\"bbsNm\" type=\"STRING\" size=\"256\"/><Column id=\"bbsCn\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"popupYn\" type=\"STRING\" size=\"256\"/><Column id=\"popupTopSz\" type=\"STRING\" size=\"256\"/><Column id=\"popupLeftSz\" type=\"STRING\" size=\"256\"/><Column id=\"popupWdthSz\" type=\"STRING\" size=\"256\"/><Column id=\"popupVrtcSz\" type=\"STRING\" size=\"256\"/><Column id=\"popupBgngDt\" type=\"STRING\" size=\"256\"/><Column id=\"popupEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"bbsTy\" type=\"STRING\" size=\"256\"/><Column id=\"bbsInqCnt\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/><Column id=\"srvcSe\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"bbsId\">입주자 도면제출 양식자료</Col><Col id=\"bbsNm\">입주자 도면제출 양식자료</Col></Row><Row><Col id=\"bbsId\">이동지역 업체등록 절차 안내</Col><Col id=\"bbsNm\">이동지역 업체등록 절차 안내</Col></Row><Row><Col id=\"bbsId\">이동지역안전지침(Rev.22)</Col><Col id=\"bbsNm\">이동지역안전지침(Rev.22)</Col></Row><Row><Col id=\"bbsId\">양식(입주자 시설공사 시공검사서(ITP))</Col><Col id=\"bbsNm\">양식(입주자 시설공사 시공검사서(ITP))</Col></Row><Row><Col id=\"bbsId\">인천국제공항 전기사용약관 제13차 개정본</Col><Col id=\"bbsNm\">인천국제공항 전기사용약관 제13차 개정본</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBbsFaq", this);
            obj._setContents("<ColumnInfo><Column id=\"bbsId\" type=\"STRING\" size=\"256\"/><Column id=\"bbsNm\" type=\"STRING\" size=\"256\"/><Column id=\"bbsCn\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"popupYn\" type=\"STRING\" size=\"256\"/><Column id=\"popupTopSz\" type=\"STRING\" size=\"256\"/><Column id=\"popupLeftSz\" type=\"STRING\" size=\"256\"/><Column id=\"popupWdthSz\" type=\"STRING\" size=\"256\"/><Column id=\"popupVrtcSz\" type=\"STRING\" size=\"256\"/><Column id=\"popupBgngDt\" type=\"STRING\" size=\"256\"/><Column id=\"popupEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"bbsTy\" type=\"STRING\" size=\"256\"/><Column id=\"bbsInqCnt\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/><Column id=\"srvcSe\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"bbsId\">ID신청 방법 및 이용가능 서비스</Col><Col id=\"bbsNm\">ID신청 방법 및 이용가능 서비스</Col></Row><Row><Col id=\"bbsId\">시설운영-작업신고서, 시설물설치(변...</Col><Col id=\"bbsNm\">시설운영-작업신고서, 시설물설치(변...</Col></Row><Row><Col id=\"bbsId\">보안-보호구역위해물폼</Col><Col id=\"bbsNm\">보안-보호구역위해물폼</Col></Row><Row><Col id=\"bbsId\">전기-전기신청, 전기소모품교체, 난로...</Col><Col id=\"bbsNm\">전기-전기신청, 전기소모품교체, 난로...</Col></Row><Row><Col id=\"bbsId\">수도-수도신청</Col><Col id=\"bbsNm\">수도-수도신청</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dataSet00", this);
            obj._setContents("<ColumnInfo><Column id=\"MenuImg\" type=\"STRING\" size=\"256\"/><Column id=\"MenuNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MenuNm\">인수인계</Col></Row><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dataSet01", this);
            obj._setContents("<ColumnInfo><Column id=\"구분\" type=\"STRING\" size=\"256\"/><Column id=\"건수\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"구분\">접수</Col><Col id=\"건수\">0</Col></Row><Row><Col id=\"구분\">진행중</Col><Col id=\"건수\">0</Col></Row><Row><Col id=\"구분\">완료</Col><Col id=\"건수\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dataSet02", this);
            obj._setContents("<ColumnInfo><Column id=\"신청일시\" type=\"STRING\" size=\"256\"/><Column id=\"신청번호\" type=\"STRING\" size=\"256\"/><Column id=\"서비스구분\" type=\"STRING\" size=\"256\"/><Column id=\"제목\" type=\"STRING\" size=\"256\"/><Column id=\"진행현황\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"신청일시\">20240507</Col><Col id=\"신청번호\">AIS2111_01234</Col><Col id=\"서비스구분\">차량정비 반입신청</Col><Col id=\"제목\">-</Col><Col id=\"진행현황\">접수</Col></Row><Row><Col id=\"신청일시\">20240507</Col><Col id=\"신청번호\">AIS2111_01234</Col><Col id=\"서비스구분\">차량정비 반입신청</Col><Col id=\"제목\">-</Col><Col id=\"진행현황\">접수</Col></Row><Row><Col id=\"신청일시\">20240507</Col><Col id=\"신청번호\">AIS2111_01234</Col><Col id=\"서비스구분\">차량정비 반입신청</Col><Col id=\"제목\">일반직업/계류장/기동지역 토목작업</Col><Col id=\"진행현황\">진행중</Col></Row><Row><Col id=\"신청일시\">20240507</Col><Col id=\"신청번호\">AIS2111_01234</Col><Col id=\"서비스구분\">차량정비 반입신청</Col><Col id=\"진행현황\">접수</Col><Col id=\"제목\">-</Col></Row><Row><Col id=\"신청일시\">20240507</Col><Col id=\"신청번호\">AIS2111_01234</Col><Col id=\"서비스구분\">차량정비 반입신청</Col><Col id=\"진행현황\">접수</Col><Col id=\"제목\">-</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAplcntList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAplcntProcessList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAplcntProcessMenuList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAplcntProcessMenuList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Panel("panFavorite00","1570","1236","88.89%","600",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_type("horizontal");
            obj.set_fittocontents("height");
            obj.set_verticalgap("30");
            obj.set_visible("false");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents/>");
            this.addChild(obj.name, obj);

            obj = new Panel("PanelLink","0","326","100%","230",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_horizontalgap("36");
            obj.set_fittocontents("height");
            obj.set_verticalgap("20");
            obj.set_flexmainaxisalign("center");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"divLink1\"/><PanelItem id=\"PanelItem00\" componentid=\"divLink2\"/><PanelItem id=\"PanelItem01\" componentid=\"divLink3\"/><PanelItem id=\"PanelItem04\" componentid=\"divLink4\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("PanelMain","0","20","100.00%","3895",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_flexcrossaxisalign("center");
            obj.set_spacing("0px 20px 0px 20px");
            obj.set_fittocontents("height");
            obj.set_accessibilityrole("frame");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"PanelLogin\"/><PanelItem id=\"PanelItem03\" componentid=\"btn01_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"PanelContents\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("PanelLogin","2820","660","100%","360",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_fittocontents("height");
            obj.set_horizontalgap("60");
            obj.set_flexmainaxisalign("center");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("20");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexcrossaxisalign("center");
            obj.set_accessibilityrole("none");
            obj._setContents("<Contents><PanelItem id=\"PanelItem10\" componentid=\"Div00\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem05\" componentid=\"btn00\"/><PanelItem id=\"PanelItem09\" componentid=\"Button02\"/><PanelItem id=\"PanelItem07\" componentid=\"sta02\"/><PanelItem id=\"PanelItem06\" componentid=\"btn01\"/><PanelItem id=\"PanelItem02\" componentid=\"sta00\"/><PanelItem id=\"PanelItem04\" componentid=\"sta01\"/><PanelItem id=\"PanelItem01\" componentid=\"divLogin\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("divLogin","865","0","415","350",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
            obj.set_cssclass("div_MF_LoginBox02");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staLogo","146.00","36","100%","77",null,null,null,null,"50",null,this.divLogin.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_MF_Logo");
            this.divLogin.addChild(obj.name, obj);

            obj = new Static("staLoginUser","74.00","72","100%","40",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("11");
            obj.set_text("홍길동님");
            obj.set_cssclass("sta_MF_LoginUser");
            obj.set_visible("true");
            this.divLogin.addChild(obj.name, obj);

            obj = new Panel("panBtnMy","147","101","100%","40",null,null,null,null,"40",null,this.divLogin.form);
            obj.set_taborder("14");
            obj.set_horizontalgap("16");
            obj.set_flexmainaxisalign("center");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button01\"/><PanelItem id=\"PanelItem01\" componentid=\"Button02\"/></Contents>");
            this.divLogin.addChild(obj.name, obj);

            obj = new Panel("Panel00","58","143","100%","80",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("16");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLoginUser\"/><PanelItem id=\"PanelItem02\" componentid=\"panBtnMy\"/></Contents>");
            this.divLogin.addChild(obj.name, obj);

            obj = new Button("Button01","165","120","90","34",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("12");
            obj.set_text("나의 정보");
            obj.set_cssclass("btn_MF_LoginTxt");
            this.divLogin.addChild(obj.name, obj);

            obj = new Button("Button02","299","136","103","34",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("13");
            obj.set_text("나의 할일 (10)");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_MF_LoginTxtD");
            this.divLogin.addChild(obj.name, obj);

            obj = new Static("staCopy","0","staLogo:13","100%","46",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("0");
            obj.set_text("인천국제공항공사 입주자서비스플랫폼에\r\n오신 것을 환영합니다.");
            obj.set_cssclass("sta_MF_LogoCopy");
            obj.set_fittocontents("height");
            this.divLogin.addChild(obj.name, obj);

            obj = new Button("btn00_00","31","212","100%","50",null,null,null,null,"50",null,this.divLogin.form);
            obj.set_taborder("2");
            obj.set_text("로그인");
            obj.set_cssclass("btn_MF_Login03");
            this.divLogin.addChild(obj.name, obj);

            obj = new Panel("panBtnLogin","31","181","100%","50",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("15");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj.set_visible("true");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btn00_00\"/></Contents>");
            this.divLogin.addChild(obj.name, obj);

            obj = new Panel("Panel01","110","240","100%","160",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("17");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_flexmainaxisalign("center");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCopy\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnLogin\"/></Contents>");
            this.divLogin.addChild(obj.name, obj);

            obj = new Button("Button00","63","197","100%","50",null,null,null,null,"50",null,this.divLogin.form);
            obj.set_taborder("8");
            obj.set_text("로그아웃");
            obj.set_cssclass("btn_MF_LoginOut");
            obj.set_visible("false");
            this.divLogin.addChild(obj.name, obj);

            obj = new Button("btn01","31.00","296","69","17",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("3");
            obj.set_text("아이디 찾기");
            obj.set_cssclass("btn_MF_TxtBtn");
            obj.set_fittocontents("width");
            this.divLogin.addChild(obj.name, obj);

            obj = new Static("sta02","btn01:5","295","5","18",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("5");
            obj.set_text("|");
            obj.set_cssclass("btn_MF_TxtBtn");
            this.divLogin.addChild(obj.name, obj);

            obj = new Button("btn01_00","sta02:5","296","82","17",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("4");
            obj.set_text("비밀번호 찾기");
            obj.set_cssclass("btn_MF_TxtBtn");
            obj.set_fittocontents("width");
            this.divLogin.addChild(obj.name, obj);

            obj = new Button("btn01_00_00","334","296","52","17",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("6");
            obj.set_text("회원가입");
            obj.set_cssclass("btn_MF_TxtBtn");
            obj.set_fittocontents("width");
            this.divLogin.addChild(obj.name, obj);

            obj = new Panel("panID","176","131","100%","30",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("7");
            obj.set_flexcrossaxisalign("start");
            obj.set_visible("true");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("spacebetween");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panPW\"/><PanelItem id=\"PanelItem03\" componentid=\"panRegi\"/></Contents>");
            this.divLogin.addChild(obj.name, obj);

            obj = new Panel("panRegi","216","300","100","17",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("9");
            obj.set_flexcrossaxisalign("end");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn01_00_00\"/></Contents>");
            this.divLogin.addChild(obj.name, obj);

            obj = new Panel("panPW","110","300","177","18",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("10");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("end");
            obj.set_fittocontents("width");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btn01\"/><PanelItem id=\"PanelItem03\" componentid=\"sta02\"/><PanelItem id=\"PanelItem02\" componentid=\"btn01_00\"/></Contents>");
            this.divLogin.addChild(obj.name, obj);

            obj = new Div("divBottom","0","PanelMain:0",null,"280","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("div01");
            obj.set_url("frame::frm_Bottom.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("none");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("staFavoTitle","80","370","300","50",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("즐겨찾기");
            obj.set_cssclass("sta_MF_Title");
            this.addChild(obj.name, obj);

            obj = new Button("btnLeft","-4.00","0","63","140",null,null,"63",null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("btn_MF_SlideL");
            this.addChild(obj.name, obj);

            obj = new Div("divMyMenu","108.00","0","100%","200",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","108","0","120","180",null,null,null,null,null,null,this.divMyMenu.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_MF_MenuS");
            obj.set_icon("url(\'theme://icon/a_1_2.png\')");
            obj.set_text("인계인수\r\n(입주)");
            this.divMyMenu.addChild(obj.name, obj);

            obj = new Button("btn00_00","108","0","120","180",null,null,null,null,null,null,this.divMyMenu.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_MF_MenuN");
            obj.set_icon("url(\'theme://icon/b_1_4.png\')");
            obj.set_text("작업\r\n신청서");
            this.divMyMenu.addChild(obj.name, obj);

            obj = new Button("btn00_00_00","108","0","120","180",null,null,null,null,null,null,this.divMyMenu.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_MF_MenuN");
            obj.set_icon("url(\'theme://icon/b_1_1.png\')");
            obj.set_text("시설물 설치\r\n(변경)");
            this.divMyMenu.addChild(obj.name, obj);

            obj = new Button("btn00_00_00_00","108","0","120","180",null,null,null,null,null,null,this.divMyMenu.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_MF_MenuN");
            obj.set_icon("url(\'theme://icon/c_29_1.png\')");
            obj.set_text("원상회복\r\n(퇴거)");
            this.divMyMenu.addChild(obj.name, obj);

            obj = new Button("btn00_00_00_00_00","108","0","120","180",null,null,null,null,null,null,this.divMyMenu.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_MF_MenuN");
            obj.set_icon("url(\'theme://icon/b_18_2.png\')");
            obj.set_text("이동지역\r\n작업신청서");
            this.divMyMenu.addChild(obj.name, obj);

            obj = new Button("btn00_00_00_00_00_00","108","0","120","180",null,null,null,null,null,null,this.divMyMenu.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_MF_MenuN");
            obj.set_icon("url(\'theme://icon/b_18_1.png\')");
            obj.set_text("이동지역\r\n운전면허");
            this.divMyMenu.addChild(obj.name, obj);

            obj = new Button("btn00_00_00_00_00_00_00_00","108","0","120","180",null,null,null,null,null,null,this.divMyMenu.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_MF_MenuN");
            obj.set_icon("url(\'theme://icon/b_14_1.png\')");
            obj.set_text("보호구역\r\n위해물품");
            this.divMyMenu.addChild(obj.name, obj);

            obj = new Button("btnRight","1221.00","0","63","140",null,null,"63",null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("btn_MF_SlideR");
            this.addChild(obj.name, obj);

            obj = new Panel("PanelFavorite","80","410","100%","1690",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_fittocontents("height");
            obj.set_type("vertical");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("20");
            obj._setContents("<Contents><PanelItem id=\"PanelItem06\" componentid=\"panTitle00\"/><PanelItem id=\"PanelItem02\" componentid=\"div00\"/><PanelItem id=\"PanelItem00\" componentid=\"panFavorite\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("divLink1","0","0","293","230",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("div01");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","24","26","67","29",null,null,null,null,null,null,this.divLink1.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_MF_Info1");
            this.divLink1.addChild(obj.name, obj);

            obj = new Static("sta01","24.00","sta00:25","163","18",null,null,null,null,null,null,this.divLink1.form);
            obj.set_taborder("1");
            obj.set_text("Incheon AIRPORT");
            obj.set_cssclass("sta_MF_InfoTitle");
            obj.set_fittocontents("both");
            this.divLink1.addChild(obj.name, obj);

            obj = new Static("sta02","24","sta01:10","155","18",null,null,null,null,null,null,this.divLink1.form);
            obj.set_taborder("2");
            obj.set_text("공항, 그 한계를 뛰어넘다");
            obj.set_fittocontents("width");
            obj.set_cssclass("sta_MF_InfoTitle2");
            this.divLink1.addChild(obj.name, obj);

            obj = new Button("btn00","0","0",null,null,"0","0",null,null,null,null,this.divLink1.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_MF_Link");
            this.divLink1.addChild(obj.name, obj);

            obj = new Div("divLink2","329.00","0","293","230",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("div01");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","24","18","35","45",null,null,null,null,null,null,this.divLink2.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_MF_Info2");
            this.divLink2.addChild(obj.name, obj);

            obj = new Static("sta01","24","sta00:17","163","16",null,null,null,null,null,null,this.divLink2.form);
            obj.set_taborder("1");
            obj.set_text("인천국제공항");
            obj.set_cssclass("sta_MF_InfoTitle2");
            obj.set_fittocontents("width");
            this.divLink2.addChild(obj.name, obj);

            obj = new Static("sta02","24","sta01:10","155","46",null,null,null,null,null,null,this.divLink2.form);
            obj.set_taborder("2");
            obj.set_text("경비초소 보안시설\r\n정기점검계획 안내");
            obj.set_fittocontents("both");
            obj.set_cssclass("sta_MF_InfoTitle");
            this.divLink2.addChild(obj.name, obj);

            obj = new Button("btn00","0","0",null,null,"0","0",null,null,null,null,this.divLink2.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_MF_Link");
            this.divLink2.addChild(obj.name, obj);

            obj = new Div("divLink3","658.00","0","293","230",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("div01");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","24","29","27","34",null,null,null,null,null,null,this.divLink3.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_MF_Info3");
            this.divLink3.addChild(obj.name, obj);

            obj = new Static("sta01","24.00","sta00:17","199","46",null,null,null,null,null,null,this.divLink3.form);
            obj.set_taborder("1");
            obj.set_text("INCHEON AIRPORT\r\nTENANT GUIDEBOOK");
            obj.set_cssclass("sta_MF_InfoTitle");
            obj.set_fittocontents("both");
            this.divLink3.addChild(obj.name, obj);

            obj = new Static("sta02","24","sta01:10","155","18",null,null,null,null,null,null,this.divLink3.form);
            obj.set_taborder("2");
            obj.set_text("인천공항 입주자 가이드북");
            obj.set_fittocontents("width");
            obj.set_cssclass("sta_MF_InfoTitle2");
            this.divLink3.addChild(obj.name, obj);

            obj = new Button("btn00","0","0",null,null,"0","0",null,null,null,null,this.divLink3.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_MF_Link");
            this.divLink3.addChild(obj.name, obj);

            obj = new Div("divLink4","987.00","0","293","230",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("div01");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","24","25","45","31",null,null,null,null,null,null,this.divLink4.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_MF_Info4");
            this.divLink4.addChild(obj.name, obj);

            obj = new Static("sta01","24.00","sta00:24","200","46",null,null,null,null,null,null,this.divLink4.form);
            obj.set_taborder("1");
            obj.set_text("인천공항 입주자 시설공사\r\n가이드북 VOL.3");
            obj.set_cssclass("sta_MF_InfoTitle");
            obj.set_fittocontents("both");
            this.divLink4.addChild(obj.name, obj);

            obj = new Static("sta02","24","sta01:10","155","16",null,null,null,null,null,null,this.divLink4.form);
            obj.set_taborder("2");
            obj.set_text("공항, 그 한계를 뛰어넘다");
            obj.set_fittocontents("width");
            obj.set_cssclass("sta_MF_InfoTitle2");
            this.divLink4.addChild(obj.name, obj);

            obj = new Button("btn00","0","0",null,null,"0","0",null,null,null,null,this.divLink4.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_MF_Link");
            this.divLink4.addChild(obj.name, obj);

            obj = new Div("divNotice","0","0","300","270",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("div01");
            obj.set_cssclass("div_MF_Notice");
            obj.set_tooltiptext("공지사항");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","24","30","150","30",null,null,null,null,null,null,this.divNotice.form);
            obj.set_taborder("0");
            obj.set_text("공지사항");
            obj.set_tooltiptext("공지사항");
            obj.set_cssclass("sta_MF_NoticeTitle");
            obj.set_fittocontents("width");
            this.divNotice.addChild(obj.name, obj);

            obj = new Button("btn00",null,"30","30","30","22",null,null,null,null,null,this.divNotice.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_MF_More");
            obj.set_tooltiptext("더보기");
            obj.set_accessibilitylabel("공지사항 더보기");
            this.divNotice.addChild(obj.name, obj);

            obj = new Grid("grd00","24","sta00:20",null,null,"30","14",null,null,null,null,this.divNotice.form);
            obj.set_taborder("2");
            obj.set_cssclass("grd_MF_Notice");
            obj.set_binddataset("dsBbsNotice");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"365\"/></Columns><Rows><Row size=\"32\"/></Rows><Band id=\"body\"><Cell text=\"bind:bbsNm\" displaytype=\"buttoncontrol\" cssclass=\"expr:Ncode==&apos;1&apos;?&apos;CellNew&apos;:&apos; &apos;\"/></Band></Format></Formats>");
            this.divNotice.addChild(obj.name, obj);

            obj = new Div("divData","440.00","0","300","270",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("div01");
            obj.set_cssclass("div_MF_Notice");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn00",null,"30","30","30","22",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_MF_More");
            obj.set_tooltiptext("더보기");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","24.00","30","150","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("자료실");
            obj.set_tooltiptext("자료실");
            obj.set_cssclass("sta_MF_NoticeTitle");
            obj.set_fittocontents("width");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("grd00","24","sta00:20",null,null,"30","14",null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("grd_MF_Notice");
            obj.set_binddataset("dsBbsData");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"365\"/></Columns><Rows><Row size=\"32\"/></Rows><Band id=\"body\"><Cell text=\"bind:bbsNm\" displaytype=\"buttoncontrol\" cssclass=\"expr:Ncode==&apos;1&apos;?&apos;CellNew&apos;:&apos; &apos;\"/></Band></Format></Formats>");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divFaq","880.00","0","300","270",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("div01");
            obj.set_cssclass("div_MF_Faq");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","24.00","30","150","30",null,null,null,null,null,null,this.divFaq.form);
            obj.set_taborder("0");
            obj.set_text("FAQ");
            obj.set_tooltiptext("FAQ");
            obj.set_cssclass("sta_MF_NoticeTitle");
            obj.set_fittocontents("width");
            this.divFaq.addChild(obj.name, obj);

            obj = new Button("btn00",null,"30","30","30","22",null,null,null,null,null,this.divFaq.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_MF_More");
            obj.set_tooltiptext("더보기");
            this.divFaq.addChild(obj.name, obj);

            obj = new Grid("grd00","24","sta00:20",null,null,"30","14",null,null,null,null,this.divFaq.form);
            obj.set_taborder("2");
            obj.set_cssclass("grd_MF_Faq");
            obj.set_binddataset("dsBbsFaq");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"365\"/></Columns><Rows><Row size=\"32\"/></Rows><Band id=\"body\"><Cell text=\"bind:bbsNm\" displaytype=\"buttoncontrol\" cssclass=\"expr:Ncode==&apos;1&apos;?&apos;CellNew&apos;:&apos; &apos;\"/></Band></Format></Formats>");
            this.divFaq.addChild(obj.name, obj);

            obj = new Panel("PanelNotice","0.00","616","100%","270",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("40");
            obj.set_fittocontents("height");
            obj.set_verticalgap("20");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divNotice\"/><PanelItem id=\"PanelItem02\" componentid=\"divData\"/><PanelItem id=\"PanelItem03\" componentid=\"divFaq\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("divSysLink01","10.00","10","293","230",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("div01");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","24","18","90","53",null,null,null,null,null,null,this.divSysLink01.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_MF_Sys1");
            this.divSysLink01.addChild(obj.name, obj);

            obj = new Static("sta01","24.00","sta00:17","171","32",null,null,null,null,null,null,this.divSysLink01.form);
            obj.set_taborder("1");
            obj.set_text("인천공항 보호구역\r\n출입을 위한");
            obj.set_cssclass("sta_MF_InfoTitle2");
            obj.set_fittocontents("none");
            this.divSysLink01.addChild(obj.name, obj);

            obj = new Static("sta02","24","sta01:10","139","23",null,null,null,null,null,null,this.divSysLink01.form);
            obj.set_taborder("2");
            obj.set_text("출입증관리시스템");
            obj.set_fittocontents("both");
            obj.set_cssclass("sta_MF_InfoTitle");
            this.divSysLink01.addChild(obj.name, obj);

            obj = new Button("btn00","0","0",null,null,"0","0",null,null,null,null,this.divSysLink01.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_MF_Link");
            this.divSysLink01.addChild(obj.name, obj);

            obj = new Div("divSysLink02","339.00","10","293","230",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("div01");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","24.00","18","90","53",null,null,null,null,null,null,this.divSysLink02.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_MF_Sys2");
            this.divSysLink02.addChild(obj.name, obj);

            obj = new Static("sta01","24.00","sta00:17","171","32",null,null,null,null,null,null,this.divSysLink02.form);
            obj.set_taborder("1");
            obj.set_text("이동지역/지원실설 내\r\n차량운전 종사자 대상");
            obj.set_cssclass("sta_MF_InfoTitle2");
            obj.set_fittocontents("none");
            this.divSysLink02.addChild(obj.name, obj);

            obj = new Static("sta02","24","sta01:10","156","23",null,null,null,null,null,null,this.divSysLink02.form);
            obj.set_taborder("2");
            obj.set_text("이동지역운전자교육");
            obj.set_fittocontents("both");
            obj.set_cssclass("sta_MF_InfoTitle");
            this.divSysLink02.addChild(obj.name, obj);

            obj = new Button("btn00","0","0",null,null,"0","0",null,null,null,null,this.divSysLink02.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_MF_Link");
            this.divSysLink02.addChild(obj.name, obj);

            obj = new Div("divSysLink03","668.00","10","293","230",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("div01");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","24.00","18","90","53",null,null,null,null,null,null,this.divSysLink03.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_MF_Sys3");
            this.divSysLink03.addChild(obj.name, obj);

            obj = new Static("sta01","24.00","sta00:17","171","32",null,null,null,null,null,null,this.divSysLink03.form);
            obj.set_taborder("1");
            obj.set_text("인천공항 상주직원을 대상\r\n정기권 신청 및 요금결제");
            obj.set_cssclass("sta_MF_InfoTitle2");
            obj.set_fittocontents("none");
            this.divSysLink03.addChild(obj.name, obj);

            obj = new Static("sta02","24","sta01:10","139","18",null,null,null,null,null,null,this.divSysLink03.form);
            obj.set_taborder("2");
            obj.set_text("정기권관리시스템");
            obj.set_fittocontents("both");
            obj.set_cssclass("sta_MF_InfoTitle");
            this.divSysLink03.addChild(obj.name, obj);

            obj = new Button("btn00","0","0",null,null,"0","0",null,null,null,null,this.divSysLink03.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_MF_Link");
            this.divSysLink03.addChild(obj.name, obj);

            obj = new Div("divSysLink04","997.00","10","293","230",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("div01");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","24.00","18","90","53",null,null,null,null,null,null,this.divSysLink04.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_MF_Sys4");
            this.divSysLink04.addChild(obj.name, obj);

            obj = new Static("sta01","24.00","sta00:24","171","32",null,null,null,null,null,null,this.divSysLink04.form);
            obj.set_taborder("1");
            obj.set_text("인천공항 입주자 시설공사\r\n가이드북 VOL.3");
            obj.set_cssclass("sta_MF_InfoTitle2");
            obj.set_fittocontents("none");
            this.divSysLink04.addChild(obj.name, obj);

            obj = new Static("sta02","24","sta01:10","156","16",null,null,null,null,null,null,this.divSysLink04.form);
            obj.set_taborder("2");
            obj.set_text("안전관리정보시스템");
            obj.set_fittocontents("both");
            obj.set_cssclass("sta_MF_InfoTitle");
            this.divSysLink04.addChild(obj.name, obj);

            obj = new Button("btn00","0","0",null,null,"0","0",null,null,null,null,this.divSysLink04.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_MF_Link");
            this.divSysLink04.addChild(obj.name, obj);

            obj = new Panel("PanelSysLink","0","946","100%","230",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_horizontalgap("36");
            obj.set_fittocontents("height");
            obj.set_verticalgap("20");
            obj.set_flexmainaxisalign("center");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btn00\"/><PanelItem id=\"PanelItem03\" componentid=\"divSysLink01\"/><PanelItem id=\"PanelItem00\" componentid=\"divSysLink02\"/><PanelItem id=\"PanelItem01\" componentid=\"divSysLink03\"/><PanelItem id=\"PanelItem04\" componentid=\"divSysLink04\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staServTitle","10.00","10","88.89%","70",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("서비스 안내");
            obj.set_cssclass("sta_MF_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnLeft01","-4","0","63","150",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_cssclass("btn_MF_SlideL");
            this.addChild(obj.name, obj);

            obj = new Div("divServBtn","108.00","0","86.71875%","260",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("div01");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("divServ1","40","92","210","191",null,null,"194",null,null,null,this.divServBtn.form);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divServBtn.addChild(obj.name, obj);

            obj = new Static("sta00","0","130",null,"48","0",null,null,null,null,null,this.divServBtn.form.divServ1.form);
            obj.set_taborder("1");
            obj.set_text("처음 방문하셨나요?\r\n인천공항 입주자서비스를\r\n한 눈에 확인해보세요!");
            obj.set_cssclass("sta_MF_InfoTitle2C");
            obj.set_fittocontents("height");
            this.divServBtn.form.divServ1.addChild(obj.name, obj);

            obj = new Button("btn00","0","0",null,null,"0","0",null,null,null,null,this.divServBtn.form.divServ1.form);
            obj.set_taborder("0");
            obj.set_text("플랫폼 이용안내");
            obj.set_cssclass("btn_MF_Serv1");
            this.divServBtn.form.divServ1.addChild(obj.name, obj);

            obj = new Static("staLine1","297","25","1","190",null,null,null,null,null,null,this.divServBtn.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_MF_Line");
            obj.set_visible("false");
            this.divServBtn.addChild(obj.name, obj);

            obj = new Div("divServ1_00","40","92","210","191",null,null,"194",null,null,null,this.divServBtn.form);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divServBtn.addChild(obj.name, obj);

            obj = new Static("sta00","0","130",null,"48","0",null,null,null,null,null,this.divServBtn.form.divServ1_00.form);
            obj.set_taborder("1");
            obj.set_text("인천공항에 임대하여 입주생활\r\n하고 퇴거에 이르기까지 전\r\n과정의 서빗스를 지원 합니다.");
            obj.set_cssclass("sta_MF_InfoTitle2C");
            obj.set_fittocontents("height");
            this.divServBtn.form.divServ1_00.addChild(obj.name, obj);

            obj = new Button("btn00","0","0",null,null,"0","0",null,null,null,null,this.divServBtn.form.divServ1_00.form);
            obj.set_taborder("0");
            obj.set_text("입주자서비스센터");
            obj.set_cssclass("btn_MF_Serv2");
            this.divServBtn.form.divServ1_00.addChild(obj.name, obj);

            obj = new Static("staLine2","297","25","1","190",null,null,null,null,null,null,this.divServBtn.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_MF_Line");
            obj.set_visible("false");
            this.divServBtn.addChild(obj.name, obj);

            obj = new Div("divServ1_01","40","92","210","191",null,null,"194",null,null,null,this.divServBtn.form);
            obj.set_taborder("2");
            obj.set_text("div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divServBtn.addChild(obj.name, obj);

            obj = new Static("sta00","0","130",null,"48","0",null,null,null,null,null,this.divServBtn.form.divServ1_01.form);
            obj.set_taborder("1");
            obj.set_text("회원가입을 통해 인천공항 입주 생\r\n활의 모든 과정을 온라인으로 이용 \r\n할 수 있습니다.");
            obj.set_cssclass("sta_MF_InfoTitle2C");
            obj.set_fittocontents("height");
            this.divServBtn.form.divServ1_01.addChild(obj.name, obj);

            obj = new Button("btn00","0","0",null,null,"0","0",null,null,null,null,this.divServBtn.form.divServ1_01.form);
            obj.set_taborder("0");
            obj.set_text("플랫폼 가입안내");
            obj.set_cssclass("btn_MF_Serv3");
            this.divServBtn.form.divServ1_01.addChild(obj.name, obj);

            obj = new Static("staLine3","297","25","1","190",null,null,null,null,null,null,this.divServBtn.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_MF_Line");
            obj.set_visible("false");
            this.divServBtn.addChild(obj.name, obj);

            obj = new Div("divServ1_02","40","92","210","191",null,null,"194",null,null,null,this.divServBtn.form);
            obj.set_taborder("3");
            obj.set_text("div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divServBtn.addChild(obj.name, obj);

            obj = new Static("sta00","0","130",null,"48","0",null,null,null,null,null,this.divServBtn.form.divServ1_02.form);
            obj.set_taborder("1");
            obj.set_text("입주생활 중 발생하는 질의사항을 \r\n문의할 수 있는 대표전화와 관련\r\n부서의 연락처 입니다.");
            obj.set_cssclass("sta_MF_InfoTitle2C");
            obj.set_fittocontents("height");
            this.divServBtn.form.divServ1_02.addChild(obj.name, obj);

            obj = new Button("btn00","0","0",null,null,"0","0",null,null,null,null,this.divServBtn.form.divServ1_02.form);
            obj.set_taborder("0");
            obj.set_text("주요연락처");
            obj.set_cssclass("btn_MF_Serv4");
            this.divServBtn.form.divServ1_02.addChild(obj.name, obj);

            obj = new Button("btnRight01","1221.00","0","63","150",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_cssclass("btn_MF_SlideR");
            this.addChild(obj.name, obj);

            obj = new Panel("PanelServ","1861","3539","88.89%","260",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_horizontalgap("22");
            obj.set_fittocontents("height");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnLeft01\"/><PanelItem id=\"PanelItem01\" componentid=\"divServBtn\"/><PanelItem id=\"PanelItem03\" componentid=\"btnRight01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("PanelService","0","1236","100%","255",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_type("vertical");
            obj.set_flexwrap("wrap");
            obj.set_flexcrossaxisalign("start");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staServTitle\"/><PanelItem id=\"PanelItem02\" componentid=\"div02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("PanelContents","2110","324.173","100%","3535",null,null,"390","1280",null,null,this);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_verticalgap("40");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj.set_spacing("30px 0px 30px 0px");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"PanelFavorite\"/><PanelItem id=\"PanelItem06\" componentid=\"panProcess00\"/><PanelItem id=\"PanelItem02\" componentid=\"PanelLink\"/><PanelItem id=\"PanelItem04\" componentid=\"PanelNotice\"/><PanelItem id=\"PanelItem00\" componentid=\"PanelService\"/><PanelItem id=\"PanelItem05\" componentid=\"PanelSysLink\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","80","168","805","350",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("Div00");
            obj.set_url("frame::frm_MainImg.xfdl");
            this.addChild(obj.name, obj);

            obj = new Panel("panBtn","1000","400","300","50",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_horizontalgap("10");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn02\"/><PanelItem id=\"PanelItem01\" componentid=\"btn03\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("btn02","342","411","100","34",null,null,"100",null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("주요기능");
            obj.set_cssclass("btn_MF_Skill");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btn03","456","418","115","34",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("그룹메뉴관리");
            obj.set_cssclass("btn_MF_Group");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Panel("panTitle","0","0","100%","50",null,null,null,null,"50",null,this);
            obj.set_taborder("39");
            obj.set_flexmainaxisalign("spacebetween");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staFavoTitle\"/><PanelItem id=\"PanelItem04\" componentid=\"panBtn\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("PanelMyMenu","1546","435","100%","148",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_type("horizontal");
            obj.set_horizontalgap("22");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexwrap("nowrap");
            obj.set_verticalgap("10");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnLeft\"/><PanelItem id=\"PanelItem01\" componentid=\"divMyMenu\"/><PanelItem id=\"PanelItem03\" componentid=\"btnRight\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panTodo","80","763","100.00%","500",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_cssclass("pan_MF_TodoBox");
            obj.set_spacing("30px 20px 30px 20px");
            obj.set_fittocontents("height");
            obj.set_horizontalgap("60");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("30");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTodoGrd\"/><PanelItem id=\"PanelItem02\" componentid=\"panTodoGrd00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panProcess","80","1192","100%","600",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_cssclass("pan_MF_TodoBox");
            obj.set_spacing("30px 20px 30px 20px");
            obj.set_verticalgap("20");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panProcessTab\"/><PanelItem id=\"PanelItem03\" componentid=\"panFavorite00\"/><PanelItem id=\"PanelItem02\" componentid=\"panProcess02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("PanelMyMenu00","1524","750","100%","148",null,null,null,null,"140",null,this);
            obj.set_taborder("45");
            obj.set_type("horizontal");
            obj.set_horizontalgap("22");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexwrap("nowrap");
            obj.set_verticalgap("10");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnLeft00\"/><PanelItem id=\"PanelItem01\" componentid=\"divMyFavorite\"/><PanelItem id=\"PanelItem02\" componentid=\"btnRight00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("btnLeft00","-5","0","63","100",null,null,"63",null,null,null,this);
            obj.set_taborder("46");
            obj.set_cssclass("btn_MF_SlideL");
            this.addChild(obj.name, obj);

            obj = new Div("divMyFavorite","75","0","100%","200",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Button("myJob_btn","108","0","120","180",null,null,null,null,null,null,this.divMyFavorite.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_MF_MenuS");
            obj.set_icon("url(\'theme://icon/a_1_2.png\')");
            obj.set_text("나의할 일");
            this.divMyFavorite.addChild(obj.name, obj);

            obj = new Button("btn00_00","108","0","120","180",null,null,null,null,null,null,this.divMyFavorite.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_MF_MenuN");
            obj.set_icon("url(\'theme://icon/b_1_4.png\')");
            obj.set_text("작업\r\n신청서");
            obj.set_visible("false");
            this.divMyFavorite.addChild(obj.name, obj);

            obj = new Button("btn00_00_00","108","0","120","180",null,null,null,null,null,null,this.divMyFavorite.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_MF_MenuN");
            obj.set_icon("url(\'theme://icon/b_1_1.png\')");
            obj.set_text("시설물 설치\r\n(변경)");
            obj.set_visible("false");
            this.divMyFavorite.addChild(obj.name, obj);

            obj = new Button("btn00_00_00_00","108","0","120","180",null,null,null,null,null,null,this.divMyFavorite.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_MF_MenuN");
            obj.set_icon("url(\'theme://icon/c_29_1.png\')");
            obj.set_text("원상회복\r\n(퇴거)");
            obj.set_visible("false");
            this.divMyFavorite.addChild(obj.name, obj);

            obj = new Button("btn00_00_00_00_00_00","108","0","120","180",null,null,null,null,null,null,this.divMyFavorite.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_MF_MenuN");
            obj.set_icon("url(\'theme://icon/b_18_1.png\')");
            obj.set_text("이동지역\r\n운전면허");
            obj.set_visible("false");
            this.divMyFavorite.addChild(obj.name, obj);

            obj = new Button("btn00_00_00_00_00_00_00","108","0","120","180",null,null,null,null,null,null,this.divMyFavorite.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_MF_MenuN");
            obj.set_icon("url(\'theme://icon/b_18_1.png\')");
            obj.set_text("이동지역\r\n운전면허");
            obj.set_visible("false");
            this.divMyFavorite.addChild(obj.name, obj);

            obj = new Button("btn00_00_00_00_00_00_01","108","0","120","180",null,null,null,null,null,null,this.divMyFavorite.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_MF_MenuN");
            obj.set_icon("url(\'theme://icon/b_18_1.png\')");
            obj.set_text("이동지역\r\n운전면허");
            obj.set_visible("false");
            this.divMyFavorite.addChild(obj.name, obj);

            obj = new Button("btnRight00","1222","0","63","100",null,null,"63",null,null,null,this);
            obj.set_taborder("48");
            obj.set_cssclass("btn_MF_SlideR");
            this.addChild(obj.name, obj);

            obj = new Panel("panTodoGrd","101","754","300","250",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_type("vertical");
            obj.set_verticalgap("20");
            obj.set_fittocontents("height");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/><PanelItem id=\"PanelItem01\" componentid=\"grid00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","235","780","300","40",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("나의할 일");
            obj.set_cssclass("sta_MF_TodoTitle");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Grid("grid00","201","724","100%","205",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_binddataset("dataSet01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"180\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"건수\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:구분\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:건수\" cssclass=\"CellEnd\" displaytype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("panTodoGrd00","461","794","600","250",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_type("vertical");
            obj.set_verticalgap("20");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"grid00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","553","867","300","40",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("서비스 신청 목록");
            obj.set_cssclass("sta_MF_TodoTitle");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Grid("grid00_00","0","0","100%","205",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_binddataset("dataSet02");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"299\"/><Column size=\"100\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"신청일시\"/><Cell col=\"1\" text=\"신청번호\"/><Cell col=\"2\" text=\"서비스구분\"/><Cell col=\"3\" text=\"제목\"/><Cell col=\"4\" text=\"진행현황\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:신청일시\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"1\" text=\"bind:신청번호\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:서비스구분\" displaytype=\"text\"/><Cell col=\"3\" text=\"bind:제목\" displaytype=\"text\"/><Cell col=\"4\" text=\"bind:진행현황\" cssclass=\"CellEnd\" displaytype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","10","10","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("처리 절차");
            obj.set_cssclass("sta_MF_TodoTitle");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("panProcessTab","1622","694","100%","300",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_type("vertical");
            obj.set_verticalgap("20");
            obj.set_fittocontents("height");
            obj.set_spacing("0px 0px 10px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"tab00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Tab("tab00","101","1176","100.00%","250",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","10","10","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("주요기능");
            obj.set_cssclass("sta_MF_TodoTitle");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("panProcess02","1494","1009","100%","200",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_type("vertical");
            obj.set_verticalgap("20");
            obj.set_fittocontents("height");
            obj.set_spacing("20px 0px 0px 0px");
            obj.set_border("1px dashed #d8d8d8,0px none,0px none");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"divMyMenu01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("divMyMenu01","1495","1000","100%","150",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Panel("panTitle00","1438","570","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_flexmainaxisalign("spacebetween");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staFavoTitle00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staFavoTitle00","0","0","200","50",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("자주찾는 메뉴");
            obj.set_cssclass("sta_MF_Title");
            this.addChild(obj.name, obj);

            obj = new Panel("panFavorite","80","648","100%","1420",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_type("horizontal");
            obj.set_fittocontents("height");
            obj.set_verticalgap("30");
            obj.set_visible("false");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle\"/><PanelItem id=\"PanelItem05\" componentid=\"div01\"/><PanelItem id=\"PanelItem02\" componentid=\"panTodo\"/><PanelItem id=\"PanelItem03\" componentid=\"panProcess\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","20","20","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("주요기능");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_MF_TodoTitle");
            this.addChild(obj.name, obj);

            obj = new Div("divMyMenu01_00","1495","1000","100%","150",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Panel("panProcess02_00","1494","1009","100%","200",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_type("vertical");
            obj.set_verticalgap("20");
            obj.set_fittocontents("height");
            obj.set_spacing("20px 0px 0px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_01_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"divMyMenu01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panProcess00","80","1192","100%","600",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_spacing("30px 20px 30px 20px");
            obj.set_verticalgap("20");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            obj.set_cssclass("pan_MF_TodoBox");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"panProcess02_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("div00","124","478","100%","180",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Button("TSPTSC003","108","0","120","180",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_MF_MenuN");
            obj.set_icon("url(\'theme://icon/a_1_2.png\')");
            obj.set_text("작업\r\n신고서");
            obj.set_accessibilitydescription("팝업");
            this.div00.addChild(obj.name, obj);

            obj = new Button("TSPTSC001","108","0","120","180",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_MF_MenuN");
            obj.set_icon("url(\'theme://icon/b_1_4.png\')");
            obj.set_text("시설물\r\n설치(변경)");
            this.div00.addChild(obj.name, obj);

            obj = new Button("TSPTSC005","108","0","120","180",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_MF_MenuN");
            obj.set_icon("url(\'theme://icon/b_1_1.png\')");
            obj.set_text("인계인수\r\n(입주)");
            this.div00.addChild(obj.name, obj);

            obj = new Button("TSPTSC002","108","0","120","180",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_MF_MenuN");
            obj.set_icon("url(\'theme://icon/c_29_1.png\')");
            obj.set_text("원상회복\r\n(퇴거)");
            this.div00.addChild(obj.name, obj);

            obj = new Button("TSPAIS001","108","0","120","180",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_MF_MenuN");
            obj.set_icon("url(\'theme://icon/b_18_2.png\')");
            obj.set_text("이동지역\r\n작업신청서");
            this.div00.addChild(obj.name, obj);

            obj = new Button("TSPAIS005","108","0","120","180",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_MF_MenuN");
            obj.set_icon("url(\'theme://icon/b_18_1.png\')");
            obj.set_text("이동지역\r\n운전면허");
            this.div00.addChild(obj.name, obj);

            obj = new Button("TSPSEC001","108","0","120","180",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_MF_MenuN");
            obj.set_icon("url(\'theme://icon/b_14_1.png\')");
            obj.set_text("보호구역\r\n위해물품");
            this.div00.addChild(obj.name, obj);

            obj = new Button("TSPCMM007","108","0","120","180",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_MF_MenuN");
            obj.set_icon("url(\'theme://icon/a_1_2.png\')");
            obj.set_text("통신실출입\r\n작업계획서");
            this.div00.addChild(obj.name, obj);

            obj = new Button("TSPCMM008","108","0","120","180",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_MF_MenuN");
            obj.set_icon("url(\'theme://icon/b_1_4.png\')");
            obj.set_text("전산실\r\n작업신고서");
            this.div00.addChild(obj.name, obj);

            obj = new Div("div01","1546","5.763688760806916%","100%","185",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div01");
            obj.set_fittocontents("none");
            obj.set_url("");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Div("div02","282","3798","100%","185",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("div02");
            obj.set_formscrollbartype("none none");
            obj.set_url("");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Button("btn01_00_00","48","0","52","17",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("회원가입");
            obj.set_cssclass("btn_MF_TxtBtn");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","50","50","197","106",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divLogin.form
            obj = new Layout("default","",0,0,this.divLogin.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLogo.set_taborder("1");
                p.staLogo.set_cssclass("sta_MF_Logo");
                p.staLogo.set_minheight("50");
                p.staLogo.set_maxheight("");
                p.staLogo.move("146.00","36","100%","77",null,null);

                p.staLoginUser.set_taborder("11");
                p.staLoginUser.set_text("홍길동님");
                p.staLoginUser.set_cssclass("sta_MF_LoginUser");
                p.staLoginUser.set_visible("true");
                p.staLoginUser.set_maxheight("");
                p.staLoginUser.move("74.00","72","100%","40",null,null);

                p.panBtnMy.set_taborder("14");
                p.panBtnMy.set_horizontalgap("16");
                p.panBtnMy.set_flexmainaxisalign("center");
                p.panBtnMy.set_visible("true");
                p.panBtnMy.set_minheight("40");
                p.panBtnMy.set_maxheight("");
                p.panBtnMy.move("147","101","100%","40",null,null);

                p.Panel00.set_taborder("16");
                p.Panel00.set_type("vertical");
                p.Panel00.set_verticalgap("10");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_visible("false");
                p.Panel00.move("58","143","100%","80",null,null);

                p.Button01.set_taborder("12");
                p.Button01.set_text("나의 정보");
                p.Button01.set_cssclass("btn_MF_LoginTxt");
                p.Button01.move("165","120","90","34",null,null);

                p.Button02.set_taborder("13");
                p.Button02.set_text("나의 할일 (10)");
                p.Button02.set_fittocontents("width");
                p.Button02.set_cssclass("btn_MF_LoginTxtD");
                p.Button02.move("299","136","103","34",null,null);

                p.staCopy.set_taborder("0");
                p.staCopy.set_text("인천국제공항공사 입주자서비스플랫폼에\r\n오신 것을 환영합니다.");
                p.staCopy.set_cssclass("sta_MF_LogoCopy");
                p.staCopy.set_fittocontents("height");
                p.staCopy.set_maxheight("");
                p.staCopy.move("0","staLogo:13","100%","46",null,null);

                p.btn00_00.set_taborder("2");
                p.btn00_00.set_text("로그인");
                p.btn00_00.set_cssclass("btn_MF_Login03");
                p.btn00_00.set_minheight("50");
                p.btn00_00.set_maxheight("");
                p.btn00_00.move("31","212","100%","50",null,null);

                p.panBtnLogin.set_taborder("15");
                p.panBtnLogin.set_type("vertical");
                p.panBtnLogin.set_verticalgap("10");
                p.panBtnLogin.set_visible("true");
                p.panBtnLogin.set_flexmainaxisalign("center");
                p.panBtnLogin.move("31","181","100%","50",null,null);

                p.Panel01.set_taborder("17");
                p.Panel01.set_type("vertical");
                p.Panel01.set_fittocontents("height");
                p.Panel01.set_flexmainaxisalign("center");
                p.Panel01.set_verticalgap("10");
                p.Panel01.move("110","240","100%","160",null,null);

                p.Button00.set_taborder("8");
                p.Button00.set_text("로그아웃");
                p.Button00.set_cssclass("btn_MF_LoginOut");
                p.Button00.set_visible("false");
                p.Button00.set_minheight("50");
                p.Button00.set_maxheight("");
                p.Button00.move("63","197","100%","50",null,null);

                p.btn01.set_taborder("3");
                p.btn01.set_text("아이디 찾기");
                p.btn01.set_cssclass("btn_MF_TxtBtn");
                p.btn01.set_fittocontents("width");
                p.btn01.move("31.00","296","69","17",null,null);

                p.sta02.set_taborder("5");
                p.sta02.set_text("|");
                p.sta02.set_cssclass("btn_MF_TxtBtn");
                p.sta02.move("btn01:5","295","5","18",null,null);

                p.btn01_00.set_taborder("4");
                p.btn01_00.set_text("비밀번호 찾기");
                p.btn01_00.set_cssclass("btn_MF_TxtBtn");
                p.btn01_00.set_fittocontents("width");
                p.btn01_00.move("sta02:5","296","82","17",null,null);

                p.btn01_00_00.set_taborder("6");
                p.btn01_00_00.set_text("회원가입");
                p.btn01_00_00.set_cssclass("btn_MF_TxtBtn");
                p.btn01_00_00.set_fittocontents("width");
                p.btn01_00_00.move("334","296","52","17",null,null);

                p.panID.set_taborder("7");
                p.panID.set_flexcrossaxisalign("start");
                p.panID.set_visible("true");
                p.panID.set_flexcrossaxiswrapalign("start");
                p.panID.set_flexmainaxisalign("spacebetween");
                p.panID.move("176","131","100%","30",null,null);

                p.panRegi.set_taborder("9");
                p.panRegi.set_flexcrossaxisalign("end");
                p.panRegi.set_flexmainaxisalign("end");
                p.panRegi.move("216","300","100","17",null,null);

                p.panPW.set_taborder("10");
                p.panPW.set_horizontalgap("10");
                p.panPW.set_flexcrossaxisalign("end");
                p.panPW.set_fittocontents("width");
                p.panPW.move("110","300","177","18",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj.set_flexmainaxisalign("center");
            obj.set_spacing("30px");
            this.divLogin.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divLogin.form
            obj = new Layout("mobile","",0,0,this.divLogin.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel01.set_flexmainaxisalign("start");
                p.Panel01.move("110","240","100%","106",null,null);
            	}
            );
            obj.set_spacing("20px 15px");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj.set_flexmainaxisalign("center");
            this.divLogin.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divBottom
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMyMenu.form
            obj = new Layout("default","",0,0,this.divMyMenu.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btn00.set_taborder("0");
                p.btn00.set_cssclass("btn_MF_MenuS");
                p.btn00.set_icon("url(\'theme://icon/a_1_2.png\')");
                p.btn00.set_text("인계인수\r\n(입주)");
                p.btn00.move("108","0","120","180",null,null);

                p.btn00_00.set_taborder("1");
                p.btn00_00.set_cssclass("btn_MF_MenuN");
                p.btn00_00.set_icon("url(\'theme://icon/b_1_4.png\')");
                p.btn00_00.set_text("작업\r\n신청서");
                p.btn00_00.move("108","0","120","180",null,null);

                p.btn00_00_00.set_taborder("2");
                p.btn00_00_00.set_cssclass("btn_MF_MenuN");
                p.btn00_00_00.set_icon("url(\'theme://icon/b_1_1.png\')");
                p.btn00_00_00.set_text("시설물 설치\r\n(변경)");
                p.btn00_00_00.move("108","0","120","180",null,null);

                p.btn00_00_00_00.set_taborder("3");
                p.btn00_00_00_00.set_cssclass("btn_MF_MenuN");
                p.btn00_00_00_00.set_icon("url(\'theme://icon/c_29_1.png\')");
                p.btn00_00_00_00.set_text("원상회복\r\n(퇴거)");
                p.btn00_00_00_00.move("108","0","120","180",null,null);

                p.btn00_00_00_00_00.set_taborder("4");
                p.btn00_00_00_00_00.set_cssclass("btn_MF_MenuN");
                p.btn00_00_00_00_00.set_icon("url(\'theme://icon/b_18_2.png\')");
                p.btn00_00_00_00_00.set_text("이동지역\r\n작업신청서");
                p.btn00_00_00_00_00.move("108","0","120","180",null,null);

                p.btn00_00_00_00_00_00.set_taborder("5");
                p.btn00_00_00_00_00_00.set_cssclass("btn_MF_MenuN");
                p.btn00_00_00_00_00_00.set_icon("url(\'theme://icon/b_18_1.png\')");
                p.btn00_00_00_00_00_00.set_text("이동지역\r\n운전면허");
                p.btn00_00_00_00_00_00.move("108","0","120","180",null,null);

                p.btn00_00_00_00_00_00_00_00.set_taborder("6");
                p.btn00_00_00_00_00_00_00_00.set_cssclass("btn_MF_MenuN");
                p.btn00_00_00_00_00_00_00_00.set_icon("url(\'theme://icon/b_14_1.png\')");
                p.btn00_00_00_00_00_00_00_00.set_text("보호구역\r\n위해물품");
                p.btn00_00_00_00_00_00_00_00.move("108","0","120","180",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("40");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("10");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("center");
            this.divMyMenu.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divMyMenu.form
            obj = new Layout("mobile","",0,0,this.divMyMenu.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btn00.move("108","0","120","180",null,null);

                p.btn00_00.move("108","0","120","180",null,null);

                p.btn00_00_00.move("108","0","120","180",null,null);

                p.btn00_00_00_00.move("108","0","120","180",null,null);

                p.btn00_00_00_00_00.move("108","0","120","180",null,null);

                p.btn00_00_00_00_00_00.move("108","0","120","180",null,null);

                p.btn00_00_00_00_00_00_00_00.move("108","0","120","180",null,null);
            	}
            );
            obj.set_flexcrossaxisalign("center");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("center");
            obj.set_type("horizontal");
            obj.set_horizontalgap("40");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("10");
            this.divMyMenu.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divLink1.form
            obj = new Layout("default","",0,0,this.divLink1.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.sta00.set_taborder("0");
                p.sta00.set_cssclass("sta_MF_Info1");
                p.sta00.move("24","26","67","29",null,null);

                p.sta01.set_taborder("1");
                p.sta01.set_text("Incheon AIRPORT");
                p.sta01.set_cssclass("sta_MF_InfoTitle");
                p.sta01.set_fittocontents("both");
                p.sta01.move("24.00","sta00:25","163","18",null,null);

                p.sta02.set_taborder("2");
                p.sta02.set_text("공항, 그 한계를 뛰어넘다");
                p.sta02.set_fittocontents("width");
                p.sta02.set_cssclass("sta_MF_InfoTitle2");
                p.sta02.move("24","sta01:10","155","18",null,null);

                p.btn00.set_taborder("3");
                p.btn00.set_cssclass("btn_MF_Link");
                p.btn00.move("0","0",null,null,"0","0");
            	}
            );
            this.divLink1.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divLink1.form
            obj = new Layout("mobile","",0,0,this.divLink1.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divLink1.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divLink2.form
            obj = new Layout("default","",0,0,this.divLink2.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.sta00.set_taborder("0");
                p.sta00.set_cssclass("sta_MF_Info2");
                p.sta00.move("24","18","35","45",null,null);

                p.sta01.set_taborder("1");
                p.sta01.set_text("인천국제공항");
                p.sta01.set_cssclass("sta_MF_InfoTitle2");
                p.sta01.set_fittocontents("width");
                p.sta01.move("24","sta00:17","163","16",null,null);

                p.sta02.set_taborder("2");
                p.sta02.set_text("경비초소 보안시설\r\n정기점검계획 안내");
                p.sta02.set_fittocontents("both");
                p.sta02.set_cssclass("sta_MF_InfoTitle");
                p.sta02.move("24","sta01:10","155","46",null,null);

                p.btn00.set_taborder("3");
                p.btn00.set_cssclass("btn_MF_Link");
                p.btn00.move("0","0",null,null,"0","0");
            	}
            );
            this.divLink2.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divLink2.form
            obj = new Layout("mobile","",0,0,this.divLink2.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divLink2.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divLink3.form
            obj = new Layout("default","",0,0,this.divLink3.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.sta00.set_taborder("0");
                p.sta00.set_cssclass("sta_MF_Info3");
                p.sta00.move("24","29","27","34",null,null);

                p.sta01.set_taborder("1");
                p.sta01.set_text("INCHEON AIRPORT\r\nTENANT GUIDEBOOK");
                p.sta01.set_cssclass("sta_MF_InfoTitle");
                p.sta01.set_fittocontents("both");
                p.sta01.move("24.00","sta00:17","199","46",null,null);

                p.sta02.set_taborder("2");
                p.sta02.set_text("인천공항 입주자 가이드북");
                p.sta02.set_fittocontents("width");
                p.sta02.set_cssclass("sta_MF_InfoTitle2");
                p.sta02.move("24","sta01:10","155","18",null,null);

                p.btn00.set_taborder("3");
                p.btn00.set_cssclass("btn_MF_Link");
                p.btn00.move("0","0",null,null,"0","0");
            	}
            );
            this.divLink3.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divLink3.form
            obj = new Layout("mobile","",0,0,this.divLink3.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divLink3.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divLink4.form
            obj = new Layout("default","",0,0,this.divLink4.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.sta00.set_taborder("0");
                p.sta00.set_cssclass("sta_MF_Info4");
                p.sta00.move("24","25","45","31",null,null);

                p.sta01.set_taborder("1");
                p.sta01.set_text("인천공항 입주자 시설공사\r\n가이드북 VOL.3");
                p.sta01.set_cssclass("sta_MF_InfoTitle");
                p.sta01.set_fittocontents("both");
                p.sta01.move("24.00","sta00:24","200","46",null,null);

                p.sta02.set_taborder("2");
                p.sta02.set_text("공항, 그 한계를 뛰어넘다");
                p.sta02.set_fittocontents("width");
                p.sta02.set_cssclass("sta_MF_InfoTitle2");
                p.sta02.move("24","sta01:10","155","16",null,null);

                p.btn00.set_taborder("3");
                p.btn00.set_cssclass("btn_MF_Link");
                p.btn00.move("0","0",null,null,"0","0");
            	}
            );
            this.divLink4.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divLink4.form
            obj = new Layout("mobile","",0,0,this.divLink4.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divLink4.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divNotice.form
            obj = new Layout("default","",0,0,this.divNotice.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.sta00.set_taborder("0");
                p.sta00.set_text("공지사항");
                p.sta00.set_tooltiptext("공지사항");
                p.sta00.set_cssclass("sta_MF_NoticeTitle");
                p.sta00.set_fittocontents("width");
                p.sta00.move("24","30","150","30",null,null);

                p.btn00.set_taborder("1");
                p.btn00.set_cssclass("btn_MF_More");
                p.btn00.set_tooltiptext("더보기");
                p.btn00.set_accessibilitylabel("공지사항 더보기");
                p.btn00.move(null,"30","30","30","22",null);

                p.grd00.set_taborder("2");
                p.grd00.set_cssclass("grd_MF_Notice");
                p.grd00.set_binddataset("dsBbsNotice");
                p.grd00.set_autofittype("col");
                p.grd00.move("24","sta00:20",null,null,"30","14");
            	}
            );
            this.divNotice.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divNotice.form
            obj = new Layout("mobile","",0,0,this.divNotice.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.sta00.move("15","15","150","30",null,null);

                p.btn00.move(null,"15","30","30","22",null);

                p.grd00.move("20","sta00:20",null,null,"20","15");
            	}
            );
            this.divNotice.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divData.form
            obj = new Layout("default","",0,0,this.divData.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btn00.set_taborder("0");
                p.btn00.set_cssclass("btn_MF_More");
                p.btn00.set_tooltiptext("더보기");
                p.btn00.move(null,"30","30","30","22",null);

                p.sta00.set_taborder("1");
                p.sta00.set_text("자료실");
                p.sta00.set_tooltiptext("자료실");
                p.sta00.set_cssclass("sta_MF_NoticeTitle");
                p.sta00.set_fittocontents("width");
                p.sta00.move("24.00","30","150","30",null,null);

                p.grd00.set_taborder("2");
                p.grd00.set_cssclass("grd_MF_Notice");
                p.grd00.set_binddataset("dsBbsData");
                p.grd00.set_autofittype("col");
                p.grd00.move("24","sta00:20",null,null,"30","14");
            	}
            );
            this.divData.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divData.form
            obj = new Layout("mobile","",0,0,this.divData.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.sta00.move("15","15","150","30",null,null);

                p.btn00.move(null,"15","30","30","22",null);

                p.grd00.move("20","sta00:20",null,null,"20","15");
            	}
            );
            this.divData.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divFaq.form
            obj = new Layout("default","",0,0,this.divFaq.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.sta00.set_taborder("0");
                p.sta00.set_text("FAQ");
                p.sta00.set_tooltiptext("FAQ");
                p.sta00.set_cssclass("sta_MF_NoticeTitle");
                p.sta00.set_fittocontents("width");
                p.sta00.move("24.00","30","150","30",null,null);

                p.btn00.set_taborder("1");
                p.btn00.set_cssclass("btn_MF_More");
                p.btn00.set_tooltiptext("더보기");
                p.btn00.move(null,"30","30","30","22",null);

                p.grd00.set_taborder("2");
                p.grd00.set_cssclass("grd_MF_Faq");
                p.grd00.set_binddataset("dsBbsFaq");
                p.grd00.set_autofittype("col");
                p.grd00.move("24","sta00:20",null,null,"30","14");
            	}
            );
            this.divFaq.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divFaq.form
            obj = new Layout("mobile","",0,0,this.divFaq.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.sta00.move("15","15","150","30",null,null);

                p.btn00.move(null,"15","30","30","22",null);

                p.grd00.move("20","sta00:15",null,null,"20","15");
            	}
            );
            this.divFaq.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divSysLink01.form
            obj = new Layout("default","",0,0,this.divSysLink01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.sta00.set_taborder("0");
                p.sta00.set_cssclass("sta_MF_Sys1");
                p.sta00.move("24","18","90","53",null,null);

                p.sta01.set_taborder("1");
                p.sta01.set_text("인천공항 보호구역\r\n출입을 위한");
                p.sta01.set_cssclass("sta_MF_InfoTitle2");
                p.sta01.set_fittocontents("none");
                p.sta01.move("24.00","sta00:17","171","32",null,null);

                p.sta02.set_taborder("2");
                p.sta02.set_text("출입증관리시스템");
                p.sta02.set_fittocontents("both");
                p.sta02.set_cssclass("sta_MF_InfoTitle");
                p.sta02.move("24","sta01:10","139","23",null,null);

                p.btn00.set_taborder("3");
                p.btn00.set_cssclass("btn_MF_Link");
                p.btn00.move("0","0",null,null,"0","0");
            	}
            );
            this.divSysLink01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divSysLink01.form
            obj = new Layout("mobile","",0,0,this.divSysLink01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btn00.set_text("");
                p.btn00.move("0","0",null,null,"0","0");

                p.sta01.move("24.00","sta00:10","171","32",null,null);
            	}
            );
            this.divSysLink01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divSysLink02.form
            obj = new Layout("default","",0,0,this.divSysLink02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.sta00.set_taborder("0");
                p.sta00.set_cssclass("sta_MF_Sys2");
                p.sta00.move("24.00","18","90","53",null,null);

                p.sta01.set_taborder("1");
                p.sta01.set_text("이동지역/지원실설 내\r\n차량운전 종사자 대상");
                p.sta01.set_cssclass("sta_MF_InfoTitle2");
                p.sta01.set_fittocontents("none");
                p.sta01.move("24.00","sta00:17","171","32",null,null);

                p.sta02.set_taborder("2");
                p.sta02.set_text("이동지역운전자교육");
                p.sta02.set_fittocontents("both");
                p.sta02.set_cssclass("sta_MF_InfoTitle");
                p.sta02.move("24","sta01:10","156","23",null,null);

                p.btn00.set_taborder("3");
                p.btn00.set_cssclass("btn_MF_Link");
                p.btn00.move("0","0",null,null,"0","0");
            	}
            );
            this.divSysLink02.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divSysLink02.form
            obj = new Layout("mobile","",0,0,this.divSysLink02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.sta01.move("24.00","sta00:10","171","32",null,null);
            	}
            );
            this.divSysLink02.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divSysLink03.form
            obj = new Layout("default","",0,0,this.divSysLink03.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.sta00.set_taborder("0");
                p.sta00.set_cssclass("sta_MF_Sys3");
                p.sta00.move("24.00","18","90","53",null,null);

                p.sta01.set_taborder("1");
                p.sta01.set_text("인천공항 상주직원을 대상\r\n정기권 신청 및 요금결제");
                p.sta01.set_cssclass("sta_MF_InfoTitle2");
                p.sta01.set_fittocontents("none");
                p.sta01.move("24.00","sta00:17","171","32",null,null);

                p.sta02.set_taborder("2");
                p.sta02.set_text("정기권관리시스템");
                p.sta02.set_fittocontents("both");
                p.sta02.set_cssclass("sta_MF_InfoTitle");
                p.sta02.move("24","sta01:10","139","18",null,null);

                p.btn00.set_taborder("3");
                p.btn00.set_cssclass("btn_MF_Link");
                p.btn00.move("0","0",null,null,"0","0");
            	}
            );
            this.divSysLink03.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divSysLink03.form
            obj = new Layout("mobile","",0,0,this.divSysLink03.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.sta01.move("24.00","sta00:10","171","32",null,null);

                p.sta02.move("24","sta01:10","139","23",null,null);
            	}
            );
            this.divSysLink03.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divSysLink04.form
            obj = new Layout("default","",0,0,this.divSysLink04.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.sta00.set_taborder("0");
                p.sta00.set_cssclass("sta_MF_Sys4");
                p.sta00.move("24.00","18","90","53",null,null);

                p.sta01.set_taborder("1");
                p.sta01.set_text("인천공항 입주자 시설공사\r\n가이드북 VOL.3");
                p.sta01.set_cssclass("sta_MF_InfoTitle2");
                p.sta01.set_fittocontents("none");
                p.sta01.move("24.00","sta00:24","171","32",null,null);

                p.sta02.set_taborder("2");
                p.sta02.set_text("안전관리정보시스템");
                p.sta02.set_fittocontents("both");
                p.sta02.set_cssclass("sta_MF_InfoTitle");
                p.sta02.move("24","sta01:10","156","16",null,null);

                p.btn00.set_taborder("3");
                p.btn00.set_cssclass("btn_MF_Link");
                p.btn00.move("0","0",null,null,"0","0");
            	}
            );
            this.divSysLink04.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divSysLink04.form
            obj = new Layout("mobile","",0,0,this.divSysLink04.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.sta01.move("24.00","sta00:10","171","32",null,null);

                p.sta02.move("24","sta01:10","156","23",null,null);
            	}
            );
            this.divSysLink04.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divServBtn.form.divServ1.form
            obj = new Layout("default","",0,0,this.divServBtn.form.divServ1.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.sta00.set_taborder("1");
                p.sta00.set_text("처음 방문하셨나요?\r\n인천공항 입주자서비스를\r\n한 눈에 확인해보세요!");
                p.sta00.set_cssclass("sta_MF_InfoTitle2C");
                p.sta00.set_fittocontents("height");
                p.sta00.move("0","130",null,"48","0",null);

                p.btn00.set_taborder("0");
                p.btn00.set_text("플랫폼 이용안내");
                p.btn00.set_cssclass("btn_MF_Serv1");
                p.btn00.move("0","0",null,null,"0","0");
            	}
            );
            obj.set_flexmainaxisalign("start");
            this.divServBtn.form.divServ1.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divServBtn.form.divServ1.form
            obj = new Layout("mobile","",0,0,this.divServBtn.form.divServ1.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_flexmainaxisalign("start");
            this.divServBtn.form.divServ1.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divServBtn.form.divServ1_00.form
            obj = new Layout("default","",0,0,this.divServBtn.form.divServ1_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.sta00.set_taborder("1");
                p.sta00.set_text("인천공항에 임대하여 입주생활\r\n하고 퇴거에 이르기까지 전\r\n과정의 서빗스를 지원 합니다.");
                p.sta00.set_cssclass("sta_MF_InfoTitle2C");
                p.sta00.set_fittocontents("height");
                p.sta00.move("0","130",null,"48","0",null);

                p.btn00.set_taborder("0");
                p.btn00.set_text("입주자서비스센터");
                p.btn00.set_cssclass("btn_MF_Serv2");
                p.btn00.move("0","0",null,null,"0","0");
            	}
            );
            this.divServBtn.form.divServ1_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divServBtn.form.divServ1_00.form
            obj = new Layout("mobile","",0,0,this.divServBtn.form.divServ1_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divServBtn.form.divServ1_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divServBtn.form.divServ1_01.form
            obj = new Layout("default","",0,0,this.divServBtn.form.divServ1_01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.sta00.set_taborder("1");
                p.sta00.set_text("회원가입을 통해 인천공항 입주 생\r\n활의 모든 과정을 온라인으로 이용 \r\n할 수 있습니다.");
                p.sta00.set_cssclass("sta_MF_InfoTitle2C");
                p.sta00.set_fittocontents("height");
                p.sta00.move("0","130",null,"48","0",null);

                p.btn00.set_taborder("0");
                p.btn00.set_text("플랫폼 가입안내");
                p.btn00.set_cssclass("btn_MF_Serv3");
                p.btn00.move("0","0",null,null,"0","0");
            	}
            );
            this.divServBtn.form.divServ1_01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divServBtn.form.divServ1_01.form
            obj = new Layout("mobile","",0,0,this.divServBtn.form.divServ1_01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divServBtn.form.divServ1_01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divServBtn.form.divServ1_02.form
            obj = new Layout("default","",0,0,this.divServBtn.form.divServ1_02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.sta00.set_taborder("1");
                p.sta00.set_text("입주생활 중 발생하는 질의사항을 \r\n문의할 수 있는 대표전화와 관련\r\n부서의 연락처 입니다.");
                p.sta00.set_cssclass("sta_MF_InfoTitle2C");
                p.sta00.set_fittocontents("height");
                p.sta00.move("0","130",null,"48","0",null);

                p.btn00.set_taborder("0");
                p.btn00.set_text("주요연락처");
                p.btn00.set_cssclass("btn_MF_Serv4");
                p.btn00.move("0","0",null,null,"0","0");
            	}
            );
            this.divServBtn.form.divServ1_02.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divServBtn.form.divServ1_02.form
            obj = new Layout("mobile","",0,0,this.divServBtn.form.divServ1_02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divServBtn.form.divServ1_02.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divServBtn.form
            obj = new Layout("default","",0,0,this.divServBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divServ1.set_taborder("1");
                p.divServ1.set_text("div00");
                p.divServ1.set_formscrollbartype("none none");
                p.divServ1.set_formscrolltype("none");
                p.divServ1.set_flexgrow("1");
                p.divServ1.set_minwidth("194");
                p.divServ1.set_maxwidth("");
                p.divServ1.move("40","92","210","191",null,null);

                p.staLine1.set_taborder("4");
                p.staLine1.set_cssclass("sta_MF_Line");
                p.staLine1.set_visible("false");
                p.staLine1.move("297","25","1","190",null,null);

                p.divServ1_00.set_taborder("1");
                p.divServ1_00.set_text("div00");
                p.divServ1_00.set_formscrollbartype("none none");
                p.divServ1_00.set_formscrolltype("none");
                p.divServ1_00.set_flexgrow("1");
                p.divServ1_00.set_minwidth("194");
                p.divServ1_00.set_maxwidth("");
                p.divServ1_00.move("40","92","210","191",null,null);

                p.staLine2.set_taborder("5");
                p.staLine2.set_cssclass("sta_MF_Line");
                p.staLine2.set_visible("false");
                p.staLine2.move("297","25","1","190",null,null);

                p.divServ1_01.set_taborder("2");
                p.divServ1_01.set_text("div00");
                p.divServ1_01.set_formscrollbartype("none none");
                p.divServ1_01.set_formscrolltype("none");
                p.divServ1_01.set_flexgrow("1");
                p.divServ1_01.set_minwidth("194");
                p.divServ1_01.set_maxwidth("");
                p.divServ1_01.move("40","92","210","191",null,null);

                p.staLine3.set_taborder("6");
                p.staLine3.set_cssclass("sta_MF_Line");
                p.staLine3.set_visible("false");
                p.staLine3.move("297","25","1","190",null,null);

                p.divServ1_02.set_taborder("3");
                p.divServ1_02.set_text("div00");
                p.divServ1_02.set_formscrollbartype("none none");
                p.divServ1_02.set_formscrolltype("none");
                p.divServ1_02.set_flexgrow("1");
                p.divServ1_02.set_minwidth("194");
                p.divServ1_02.set_maxwidth("");
                p.divServ1_02.move("40","92","210","191",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("44");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexwrap("wrap");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_verticalgap("20");
            this.divServBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divServBtn.form
            obj = new Layout("mobile","",0,0,this.divServBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divServ1.set_flexgrow("0");
                p.divServ1.set_minwidth("0");
                p.divServ1.set_maxwidth("");
                p.divServ1.move("40","92","191","191",null,null);

                p.divServ1_00.set_flexgrow("0");
                p.divServ1_00.set_minwidth("0");
                p.divServ1_00.set_maxwidth("");
                p.divServ1_00.move("40","92","193","191",null,null);

                p.divServ1_01.set_flexgrow("0");
                p.divServ1_01.set_minwidth("0");
                p.divServ1_01.set_maxwidth("");
                p.divServ1_01.move("40","92","191","191",null,null);

                p.divServ1_02.set_flexgrow("0");
                p.divServ1_02.set_minwidth("0");
                p.divServ1_02.set_maxwidth("");
                p.divServ1_02.move("40","92","191","191",null,null);

                p.staLine1.move("297","25","1","190",null,null);

                p.staLine2.move("297","25","1","190",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("0");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("20");
            this.divServBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMyFavorite.form
            obj = new Layout("default","",0,0,this.divMyFavorite.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.myJob_btn.set_taborder("0");
                p.myJob_btn.set_cssclass("btn_MF_MenuS");
                p.myJob_btn.set_icon("url(\'theme://icon/a_1_2.png\')");
                p.myJob_btn.set_text("나의할 일");
                p.myJob_btn.move("108","0","120","180",null,null);

                p.btn00_00.set_taborder("1");
                p.btn00_00.set_cssclass("btn_MF_MenuN");
                p.btn00_00.set_icon("url(\'theme://icon/b_1_4.png\')");
                p.btn00_00.set_text("작업\r\n신청서");
                p.btn00_00.set_visible("false");
                p.btn00_00.move("108","0","120","180",null,null);

                p.btn00_00_00.set_taborder("2");
                p.btn00_00_00.set_cssclass("btn_MF_MenuN");
                p.btn00_00_00.set_icon("url(\'theme://icon/b_1_1.png\')");
                p.btn00_00_00.set_text("시설물 설치\r\n(변경)");
                p.btn00_00_00.set_visible("false");
                p.btn00_00_00.move("108","0","120","180",null,null);

                p.btn00_00_00_00.set_taborder("3");
                p.btn00_00_00_00.set_cssclass("btn_MF_MenuN");
                p.btn00_00_00_00.set_icon("url(\'theme://icon/c_29_1.png\')");
                p.btn00_00_00_00.set_text("원상회복\r\n(퇴거)");
                p.btn00_00_00_00.set_visible("false");
                p.btn00_00_00_00.move("108","0","120","180",null,null);

                p.btn00_00_00_00_00_00.set_taborder("4");
                p.btn00_00_00_00_00_00.set_cssclass("btn_MF_MenuN");
                p.btn00_00_00_00_00_00.set_icon("url(\'theme://icon/b_18_1.png\')");
                p.btn00_00_00_00_00_00.set_text("이동지역\r\n운전면허");
                p.btn00_00_00_00_00_00.set_visible("false");
                p.btn00_00_00_00_00_00.move("108","0","120","180",null,null);

                p.btn00_00_00_00_00_00_00.set_taborder("5");
                p.btn00_00_00_00_00_00_00.set_cssclass("btn_MF_MenuN");
                p.btn00_00_00_00_00_00_00.set_icon("url(\'theme://icon/b_18_1.png\')");
                p.btn00_00_00_00_00_00_00.set_text("이동지역\r\n운전면허");
                p.btn00_00_00_00_00_00_00.set_visible("false");
                p.btn00_00_00_00_00_00_00.move("108","0","120","180",null,null);

                p.btn00_00_00_00_00_00_01.set_taborder("6");
                p.btn00_00_00_00_00_00_01.set_cssclass("btn_MF_MenuN");
                p.btn00_00_00_00_00_00_01.set_icon("url(\'theme://icon/b_18_1.png\')");
                p.btn00_00_00_00_00_00_01.set_text("이동지역\r\n운전면허");
                p.btn00_00_00_00_00_00_01.set_visible("false");
                p.btn00_00_00_00_00_00_01.move("108","0","120","180",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("40");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("10");
            obj.set_flexmainaxisalign("center");
            this.divMyFavorite.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divMyFavorite.form
            obj = new Layout("mobile","",0,0,this.divMyFavorite.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_type("horizontal");
            obj.set_horizontalgap("40");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("10");
            this.divMyFavorite.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divMyMenu01.form
            obj = new Layout("default","",0,0,this.divMyMenu01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("45");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("10");
            this.divMyMenu01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divMyMenu01.form
            obj = new Layout("mobile","",0,0,this.divMyMenu01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("45");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("10");
            this.divMyMenu01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divMyMenu01_00.form
            obj = new Layout("default","",0,0,this.divMyMenu01_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("45");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("10");
            this.divMyMenu01_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divMyMenu01_00.form
            obj = new Layout("mobile","",0,0,this.divMyMenu01_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("45");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("10");
            this.divMyMenu01_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.TSPTSC003.set_taborder("0");
                p.TSPTSC003.set_cssclass("btn_MF_MenuN");
                p.TSPTSC003.set_icon("url(\'theme://icon/a_1_2.png\')");
                p.TSPTSC003.set_text("작업\r\n신고서");
                p.TSPTSC003.set_accessibilitydescription("팝업");
                p.TSPTSC003.move("108","0","120","180",null,null);

                p.TSPTSC001.set_taborder("1");
                p.TSPTSC001.set_cssclass("btn_MF_MenuN");
                p.TSPTSC001.set_icon("url(\'theme://icon/b_1_4.png\')");
                p.TSPTSC001.set_text("시설물\r\n설치(변경)");
                p.TSPTSC001.move("108","0","120","180",null,null);

                p.TSPTSC005.set_taborder("2");
                p.TSPTSC005.set_cssclass("btn_MF_MenuN");
                p.TSPTSC005.set_icon("url(\'theme://icon/b_1_1.png\')");
                p.TSPTSC005.set_text("인계인수\r\n(입주)");
                p.TSPTSC005.move("108","0","120","180",null,null);

                p.TSPTSC002.set_taborder("3");
                p.TSPTSC002.set_cssclass("btn_MF_MenuN");
                p.TSPTSC002.set_icon("url(\'theme://icon/c_29_1.png\')");
                p.TSPTSC002.set_text("원상회복\r\n(퇴거)");
                p.TSPTSC002.move("108","0","120","180",null,null);

                p.TSPAIS001.set_taborder("4");
                p.TSPAIS001.set_cssclass("btn_MF_MenuN");
                p.TSPAIS001.set_icon("url(\'theme://icon/b_18_2.png\')");
                p.TSPAIS001.set_text("이동지역\r\n작업신청서");
                p.TSPAIS001.move("108","0","120","180",null,null);

                p.TSPAIS005.set_taborder("5");
                p.TSPAIS005.set_cssclass("btn_MF_MenuN");
                p.TSPAIS005.set_icon("url(\'theme://icon/b_18_1.png\')");
                p.TSPAIS005.set_text("이동지역\r\n운전면허");
                p.TSPAIS005.move("108","0","120","180",null,null);

                p.TSPSEC001.set_taborder("6");
                p.TSPSEC001.set_cssclass("btn_MF_MenuN");
                p.TSPSEC001.set_icon("url(\'theme://icon/b_14_1.png\')");
                p.TSPSEC001.set_text("보호구역\r\n위해물품");
                p.TSPSEC001.move("108","0","120","180",null,null);

                p.TSPCMM007.set_taborder("7");
                p.TSPCMM007.set_cssclass("btn_MF_MenuN");
                p.TSPCMM007.set_icon("url(\'theme://icon/a_1_2.png\')");
                p.TSPCMM007.set_text("통신실출입\r\n작업계획서");
                p.TSPCMM007.move("108","0","120","180",null,null);

                p.TSPCMM008.set_taborder("8");
                p.TSPCMM008.set_cssclass("btn_MF_MenuN");
                p.TSPCMM008.set_icon("url(\'theme://icon/b_1_4.png\')");
                p.TSPCMM008.set_text("전산실\r\n작업신고서");
                p.TSPCMM008.move("108","0","120","180",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("20");
            obj.set_verticalgap("10");
            obj.set_flexmainaxisalign("center");
            obj.set_flexwrap("wrap");
            this.div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00.form
            obj = new Layout("mobile","",0,0,this.div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.TSPTSC003.set_cssclass("btn_MF_MenuS_M");
                p.TSPTSC003.set_icon("url(\'theme://icon30/a_1_2.png\')");
                p.TSPTSC003.move("108","0","90","136",null,null);

                p.TSPTSC001.set_cssclass("btn_MF_MenuN_M");
                p.TSPTSC001.set_icon("url(\'theme://icon30/b_1_4.png\')");
                p.TSPTSC001.move("108","0","90","135",null,null);

                p.TSPTSC005.set_cssclass("btn_MF_MenuN_M");
                p.TSPTSC005.set_icon("url(\'theme://icon30/b_1_1.png\')");
                p.TSPTSC005.move("108","0","90","135",null,null);

                p.TSPTSC002.set_cssclass("btn_MF_MenuN_M");
                p.TSPTSC002.set_icon("url(\'theme://icon30/c_29_1.png\')");
                p.TSPTSC002.move("108","0","90","135",null,null);

                p.TSPAIS001.set_cssclass("btn_MF_MenuN_M");
                p.TSPAIS001.set_icon("url(\'theme://icon30/b_18_2.png\')");
                p.TSPAIS001.move("108","0","90","135",null,null);

                p.TSPAIS005.set_cssclass("btn_MF_MenuN_M");
                p.TSPAIS005.set_icon("url(\'theme://icon30/b_18_1.png\')");
                p.TSPAIS005.move("108","0","90","135",null,null);

                p.TSPSEC001.set_cssclass("btn_MF_MenuN_M");
                p.TSPSEC001.set_icon("url(\'theme://icon30/b_14_1.png\')");
                p.TSPSEC001.move("108","0","90","135",null,null);

                p.TSPCMM007.set_cssclass("btn_MF_MenuN_M");
                p.TSPCMM007.set_icon("url(\'theme://icon30/a_1_2.png\')");
                p.TSPCMM007.move("108","0","90","136",null,null);

                p.TSPCMM008.set_cssclass("btn_MF_MenuN_M");
                p.TSPCMM008.set_icon("url(\'theme://icon30/b_1_4.png\')");
                p.TSPCMM008.move("108","0","90","135",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("20");
            obj.set_verticalgap("10");
            obj.set_flexmainaxisalign("center");
            obj.set_flexwrap("wrap");
            this.div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.div01
            obj = new Layout("default","",0,0,this.div01.form,function(p){});
            this.div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div02
            obj = new Layout("default","",0,0,this.div02.form,function(p){});
            this.div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1440,1250,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("Form_Main");
                p.set_scrollbartype("none auto");

                p.panFavorite00.set_taborder("65");
                p.panFavorite00.set_type("horizontal");
                p.panFavorite00.set_fittocontents("height");
                p.panFavorite00.set_verticalgap("30");
                p.panFavorite00.set_visible("false");
                p.panFavorite00.set_flexwrap("wrap");
                p.panFavorite00.move("1570","1236","88.89%","600",null,null);

                p.PanelLink.set_taborder("22");
                p.PanelLink.set_horizontalgap("36");
                p.PanelLink.set_fittocontents("height");
                p.PanelLink.set_verticalgap("20");
                p.PanelLink.set_flexmainaxisalign("center");
                p.PanelLink.set_flexwrap("wrap");
                p.PanelLink.move("0","326","100%","230",null,null);

                p.PanelMain.set_taborder("9");
                p.PanelMain.set_type("vertical");
                p.PanelMain.set_flexcrossaxisalign("center");
                p.PanelMain.set_spacing("0px 20px 0px 20px");
                p.PanelMain.set_fittocontents("height");
                p.PanelMain.set_accessibilityrole("frame");
                p.PanelMain.move("0","20","100.00%","3895",null,null);

                p.PanelLogin.set_taborder("10");
                p.PanelLogin.set_fittocontents("height");
                p.PanelLogin.set_horizontalgap("60");
                p.PanelLogin.set_flexmainaxisalign("center");
                p.PanelLogin.set_flexwrap("wrap");
                p.PanelLogin.set_verticalgap("20");
                p.PanelLogin.set_spacing("0px 0px 10px 0px");
                p.PanelLogin.set_flexcrossaxiswrapalign("start");
                p.PanelLogin.set_flexcrossaxisalign("center");
                p.PanelLogin.set_accessibilityrole("none");
                p.PanelLogin.set_maxheight("");
                p.PanelLogin.set_maxwidth("");
                p.PanelLogin.move("2820","660","100%","360",null,null);

                p.divLogin.set_taborder("2");
                p.divLogin.set_text("div00");
                p.divLogin.set_cssclass("div_MF_LoginBox02");
                p.divLogin.set_formscrollbartype("none none");
                p.divLogin.set_formscrolltype("none");
                p.divLogin.set_maxheight("");
                p.divLogin.move("865","0","415","350",null,null);

                p.divBottom.set_taborder("7");
                p.divBottom.set_text("div01");
                p.divBottom.set_url("frame::frm_Bottom.xfdl");
                p.divBottom.set_formscrollbartype("none none");
                p.divBottom.set_formscrolltype("none");
                p.divBottom.set_fittocontents("none");
                p.divBottom.set_visible("true");
                p.divBottom.set_maxheight("");
                p.divBottom.set_maxwidth("");
                p.divBottom.move("0","PanelMain:0",null,"280","0",null);

                p.staFavoTitle.set_taborder("12");
                p.staFavoTitle.set_text("즐겨찾기");
                p.staFavoTitle.set_cssclass("sta_MF_Title");
                p.staFavoTitle.move("80","370","300","50",null,null);

                p.btnLeft.set_taborder("13");
                p.btnLeft.set_cssclass("btn_MF_SlideL");
                p.btnLeft.set_minwidth("63");
                p.btnLeft.set_maxwidth("");
                p.btnLeft.move("-4.00","0","63","140",null,null);

                p.divMyMenu.set_taborder("14");
                p.divMyMenu.set_text("div01");
                p.divMyMenu.set_fittocontents("height");
                p.divMyMenu.set_formscrollbartype("none none");
                p.divMyMenu.move("108.00","0","100%","200",null,null);

                p.btnRight.set_taborder("15");
                p.btnRight.set_cssclass("btn_MF_SlideR");
                p.btnRight.set_minwidth("63");
                p.btnRight.set_maxwidth("");
                p.btnRight.move("1221.00","0","63","140",null,null);

                p.PanelFavorite.set_taborder("17");
                p.PanelFavorite.set_fittocontents("height");
                p.PanelFavorite.set_type("vertical");
                p.PanelFavorite.set_flexwrap("wrap");
                p.PanelFavorite.set_verticalgap("20");
                p.PanelFavorite.set_minwidth("");
                p.PanelFavorite.move("80","410","100%","1690",null,null);

                p.divLink1.set_taborder("18");
                p.divLink1.set_text("div01");
                p.divLink1.set_flexgrow("1");
                p.divLink1.move("0","0","293","230",null,null);

                p.divLink2.set_taborder("19");
                p.divLink2.set_text("div01");
                p.divLink2.set_flexgrow("1");
                p.divLink2.move("329.00","0","293","230",null,null);

                p.divLink3.set_taborder("20");
                p.divLink3.set_text("div01");
                p.divLink3.set_flexgrow("1");
                p.divLink3.move("658.00","0","293","230",null,null);

                p.divLink4.set_taborder("21");
                p.divLink4.set_text("div01");
                p.divLink4.set_flexgrow("1");
                p.divLink4.move("987.00","0","293","230",null,null);

                p.divNotice.set_taborder("23");
                p.divNotice.set_text("div01");
                p.divNotice.set_cssclass("div_MF_Notice");
                p.divNotice.set_tooltiptext("공지사항");
                p.divNotice.set_flexgrow("1");
                p.divNotice.move("0","0","300","270",null,null);

                p.divData.set_taborder("24");
                p.divData.set_text("div01");
                p.divData.set_cssclass("div_MF_Notice");
                p.divData.set_flexgrow("1");
                p.divData.move("440.00","0","300","270",null,null);

                p.divFaq.set_taborder("25");
                p.divFaq.set_text("div01");
                p.divFaq.set_cssclass("div_MF_Faq");
                p.divFaq.set_flexgrow("1");
                p.divFaq.move("880.00","0","300","270",null,null);

                p.PanelNotice.set_taborder("26");
                p.PanelNotice.set_flexwrap("wrap");
                p.PanelNotice.set_horizontalgap("40");
                p.PanelNotice.set_fittocontents("height");
                p.PanelNotice.set_verticalgap("20");
                p.PanelNotice.set_flexmainaxisalign("center");
                p.PanelNotice.move("0.00","616","100%","270",null,null);

                p.divSysLink01.set_taborder("27");
                p.divSysLink01.set_text("div01");
                p.divSysLink01.set_flexgrow("1");
                p.divSysLink01.move("10.00","10","293","230",null,null);

                p.divSysLink02.set_taborder("28");
                p.divSysLink02.set_text("div01");
                p.divSysLink02.set_flexgrow("1");
                p.divSysLink02.move("339.00","10","293","230",null,null);

                p.divSysLink03.set_taborder("29");
                p.divSysLink03.set_text("div01");
                p.divSysLink03.set_flexgrow("1");
                p.divSysLink03.move("668.00","10","293","230",null,null);

                p.divSysLink04.set_taborder("30");
                p.divSysLink04.set_text("div01");
                p.divSysLink04.set_flexgrow("1");
                p.divSysLink04.move("997.00","10","293","230",null,null);

                p.PanelSysLink.set_taborder("31");
                p.PanelSysLink.set_horizontalgap("36");
                p.PanelSysLink.set_fittocontents("height");
                p.PanelSysLink.set_verticalgap("20");
                p.PanelSysLink.set_flexmainaxisalign("center");
                p.PanelSysLink.set_flexwrap("wrap");
                p.PanelSysLink.move("0","946","100%","230",null,null);

                p.staServTitle.set_taborder("32");
                p.staServTitle.set_text("서비스 안내");
                p.staServTitle.set_cssclass("sta_MF_Title");
                p.staServTitle.set_fittocontents("width");
                p.staServTitle.move("10.00","10","88.89%","70",null,null);

                p.btnLeft01.set_taborder("33");
                p.btnLeft01.set_cssclass("btn_MF_SlideL");
                p.btnLeft01.set_maxwidth("");
                p.btnLeft01.move("-4","0","63","150",null,null);

                p.divServBtn.set_taborder("34");
                p.divServBtn.set_text("div01");
                p.divServBtn.set_fittocontents("height");
                p.divServBtn.move("108.00","0","86.71875%","260",null,null);

                p.btnRight01.set_taborder("35");
                p.btnRight01.set_cssclass("btn_MF_SlideR");
                p.btnRight01.set_maxwidth("");
                p.btnRight01.move("1221.00","0","63","150",null,null);

                p.PanelServ.set_taborder("36");
                p.PanelServ.set_type("horizontal");
                p.PanelServ.set_flexcrossaxisalign("center");
                p.PanelServ.set_horizontalgap("22");
                p.PanelServ.set_fittocontents("height");
                p.PanelServ.set_flexmainaxisalign("center");
                p.PanelServ.set_flexcrossaxiswrapalign("center");
                p.PanelServ.set_visible("false");
                p.PanelServ.move("1861","3539","88.89%","260",null,null);

                p.PanelService.set_taborder("37");
                p.PanelService.set_type("vertical");
                p.PanelService.set_flexwrap("wrap");
                p.PanelService.set_flexcrossaxisalign("start");
                p.PanelService.set_fittocontents("height");
                p.PanelService.set_minwidth("");
                p.PanelService.move("0","1236","100%","255",null,null);

                p.PanelContents.set_taborder("8");
                p.PanelContents.set_type("vertical");
                p.PanelContents.set_verticalgap("40");
                p.PanelContents.set_fittocontents("height");
                p.PanelContents.set_flexwrap("wrap");
                p.PanelContents.set_spacing("30px 0px 30px 0px");
                p.PanelContents.set_flexcrossaxisalign("center");
                p.PanelContents.set_maxheight("");
                p.PanelContents.set_minwidth("390");
                p.PanelContents.set_maxwidth("1280");
                p.PanelContents.move("2110","324.173","100%","3535",null,null);

                p.Div00.set_taborder("38");
                p.Div00.set_text("Div00");
                p.Div00.set_url("frame::frm_MainImg.xfdl");
                p.Div00.set_maxwidth("");
                p.Div00.move("80","168","805","350",null,null);

                p.panBtn.set_taborder("40");
                p.panBtn.set_horizontalgap("10");
                p.panBtn.set_flexmainaxisalign("end");
                p.panBtn.set_flexgrow("1");
                p.panBtn.move("1000","400","300","50",null,null);

                p.btn02.set_taborder("41");
                p.btn02.set_text("주요기능");
                p.btn02.set_cssclass("btn_MF_Skill");
                p.btn02.set_fittocontents("width");
                p.btn02.set_minwidth("100");
                p.btn02.set_maxwidth("");
                p.btn02.move("342","411","100","34",null,null);

                p.btn03.set_taborder("42");
                p.btn03.set_text("그룹메뉴관리");
                p.btn03.set_cssclass("btn_MF_Group");
                p.btn03.set_fittocontents("width");
                p.btn03.move("456","418","115","34",null,null);

                p.panTitle.set_taborder("39");
                p.panTitle.set_flexmainaxisalign("spacebetween");
                p.panTitle.set_flexwrap("wrap");
                p.panTitle.set_fittocontents("height");
                p.panTitle.set_minheight("50");
                p.panTitle.set_maxheight("");
                p.panTitle.move("0","0","100%","50",null,null);

                p.PanelMyMenu.set_taborder("16");
                p.PanelMyMenu.set_type("horizontal");
                p.PanelMyMenu.set_horizontalgap("22");
                p.PanelMyMenu.set_fittocontents("height");
                p.PanelMyMenu.set_flexcrossaxisalign("start");
                p.PanelMyMenu.set_flexwrap("nowrap");
                p.PanelMyMenu.set_verticalgap("10");
                p.PanelMyMenu.set_visible("false");
                p.PanelMyMenu.move("1546","435","100%","148",null,null);

                p.panTodo.set_taborder("43");
                p.panTodo.set_cssclass("pan_MF_TodoBox");
                p.panTodo.set_spacing("30px 20px 30px 20px");
                p.panTodo.set_fittocontents("height");
                p.panTodo.set_horizontalgap("60");
                p.panTodo.set_flexwrap("wrap");
                p.panTodo.set_verticalgap("30");
                p.panTodo.move("80","763","100.00%","500",null,null);

                p.panProcess.set_taborder("44");
                p.panProcess.set_cssclass("pan_MF_TodoBox");
                p.panProcess.set_spacing("30px 20px 30px 20px");
                p.panProcess.set_verticalgap("20");
                p.panProcess.set_type("vertical");
                p.panProcess.set_fittocontents("height");
                p.panProcess.set_visible("false");
                p.panProcess.move("80","1192","100%","600",null,null);

                p.PanelMyMenu00.set_taborder("45");
                p.PanelMyMenu00.set_type("horizontal");
                p.PanelMyMenu00.set_horizontalgap("22");
                p.PanelMyMenu00.set_fittocontents("height");
                p.PanelMyMenu00.set_flexcrossaxisalign("start");
                p.PanelMyMenu00.set_flexwrap("nowrap");
                p.PanelMyMenu00.set_verticalgap("10");
                p.PanelMyMenu00.set_visible("false");
                p.PanelMyMenu00.set_minheight("140");
                p.PanelMyMenu00.set_maxheight("");
                p.PanelMyMenu00.move("1524","750","100%","148",null,null);

                p.btnLeft00.set_taborder("46");
                p.btnLeft00.set_cssclass("btn_MF_SlideL");
                p.btnLeft00.set_minwidth("63");
                p.btnLeft00.set_maxwidth("");
                p.btnLeft00.move("-5","0","63","100",null,null);

                p.divMyFavorite.set_taborder("47");
                p.divMyFavorite.set_text("div01");
                p.divMyFavorite.set_fittocontents("height");
                p.divMyFavorite.set_formscrollbartype("none none");
                p.divMyFavorite.move("75","0","100%","200",null,null);

                p.btnRight00.set_taborder("48");
                p.btnRight00.set_cssclass("btn_MF_SlideR");
                p.btnRight00.set_minwidth("63");
                p.btnRight00.set_maxwidth("");
                p.btnRight00.move("1222","0","63","100",null,null);

                p.panTodoGrd.set_taborder("49");
                p.panTodoGrd.set_type("vertical");
                p.panTodoGrd.set_verticalgap("20");
                p.panTodoGrd.set_fittocontents("height");
                p.panTodoGrd.set_visible("true");
                p.panTodoGrd.move("101","754","300","250",null,null);

                p.Static00.set_taborder("11");
                p.Static00.set_text("나의할 일");
                p.Static00.set_cssclass("sta_MF_TodoTitle");
                p.Static00.set_fittocontents("height");
                p.Static00.move("235","780","300","40",null,null);

                p.grid00.set_taborder("50");
                p.grid00.set_binddataset("dataSet01");
                p.grid00.set_autofittype("col");
                p.grid00.move("201","724","100%","205",null,null);

                p.panTodoGrd00.set_taborder("51");
                p.panTodoGrd00.set_type("vertical");
                p.panTodoGrd00.set_verticalgap("20");
                p.panTodoGrd00.set_fittocontents("height");
                p.panTodoGrd00.set_flexgrow("1");
                p.panTodoGrd00.move("461","794","600","250",null,null);

                p.Static00_00.set_taborder("52");
                p.Static00_00.set_text("서비스 신청 목록");
                p.Static00_00.set_cssclass("sta_MF_TodoTitle");
                p.Static00_00.set_fittocontents("height");
                p.Static00_00.move("553","867","300","40",null,null);

                p.grid00_00.set_taborder("53");
                p.grid00_00.set_binddataset("dataSet02");
                p.grid00_00.set_maxwidth("");
                p.grid00_00.move("0","0","100%","205",null,null);

                p.Static00_01.set_taborder("54");
                p.Static00_01.set_text("처리 절차");
                p.Static00_01.set_cssclass("sta_MF_TodoTitle");
                p.Static00_01.set_fittocontents("height");
                p.Static00_01.move("10","10","100%","40",null,null);

                p.panProcessTab.set_taborder("55");
                p.panProcessTab.set_type("vertical");
                p.panProcessTab.set_verticalgap("20");
                p.panProcessTab.set_fittocontents("height");
                p.panProcessTab.set_spacing("0px 0px 10px 0px");
                p.panProcessTab.move("1622","694","100%","300",null,null);

                p.tab00.set_taborder("56");
                p.tab00.set_tabindex("0");
                p.tab00.set_maxheight("");
                p.tab00.move("101","1176","100.00%","250",null,null);

                p.Static00_01_00.set_taborder("57");
                p.Static00_01_00.set_text("주요기능");
                p.Static00_01_00.set_cssclass("sta_MF_TodoTitle");
                p.Static00_01_00.set_fittocontents("height");
                p.Static00_01_00.move("10","10","100%","40",null,null);

                p.panProcess02.set_taborder("58");
                p.panProcess02.set_type("vertical");
                p.panProcess02.set_verticalgap("20");
                p.panProcess02.set_fittocontents("height");
                p.panProcess02.set_spacing("20px 0px 0px 0px");
                p.panProcess02.set_border("1px dashed #d8d8d8,0px none,0px none");
                p.panProcess02.move("1494","1009","100%","200",null,null);

                p.divMyMenu01.set_taborder("59");
                p.divMyMenu01.set_text("div01");
                p.divMyMenu01.set_fittocontents("height");
                p.divMyMenu01.set_formscrollbartype("none none");
                p.divMyMenu01.move("1495","1000","100%","150",null,null);

                p.panTitle00.set_taborder("60");
                p.panTitle00.set_flexmainaxisalign("spacebetween");
                p.panTitle00.set_flexwrap("wrap");
                p.panTitle00.set_fittocontents("height");
                p.panTitle00.set_visible("true");
                p.panTitle00.move("1438","570","100%","50",null,null);

                p.staFavoTitle00.set_taborder("61");
                p.staFavoTitle00.set_text("자주찾는 메뉴");
                p.staFavoTitle00.set_cssclass("sta_MF_Title");
                p.staFavoTitle00.move("0","0","200","50",null,null);

                p.panFavorite.set_taborder("4");
                p.panFavorite.set_type("horizontal");
                p.panFavorite.set_fittocontents("height");
                p.panFavorite.set_verticalgap("30");
                p.panFavorite.set_visible("false");
                p.panFavorite.set_flexwrap("wrap");
                p.panFavorite.move("80","648","100%","1420",null,null);

                p.Static00_01_00_00.set_taborder("62");
                p.Static00_01_00_00.set_text("주요기능");
                p.Static00_01_00_00.set_fittocontents("height");
                p.Static00_01_00_00.set_cssclass("sta_MF_TodoTitle");
                p.Static00_01_00_00.move("20","20","100%","40",null,null);

                p.divMyMenu01_00.set_taborder("63");
                p.divMyMenu01_00.set_text("div01");
                p.divMyMenu01_00.set_fittocontents("height");
                p.divMyMenu01_00.set_formscrollbartype("none none");
                p.divMyMenu01_00.move("1495","1000","100%","150",null,null);

                p.panProcess02_00.set_taborder("64");
                p.panProcess02_00.set_type("vertical");
                p.panProcess02_00.set_verticalgap("20");
                p.panProcess02_00.set_fittocontents("height");
                p.panProcess02_00.set_spacing("20px 0px 0px 0px");
                p.panProcess02_00.move("1494","1009","100%","200",null,null);

                p.panProcess00.set_taborder("5");
                p.panProcess00.set_spacing("30px 20px 30px 20px");
                p.panProcess00.set_verticalgap("20");
                p.panProcess00.set_type("vertical");
                p.panProcess00.set_fittocontents("height");
                p.panProcess00.set_visible("false");
                p.panProcess00.set_cssclass("pan_MF_TodoBox");
                p.panProcess00.move("80","1192","100%","600",null,null);

                p.div00.set_taborder("1");
                p.div00.set_text("div00");
                p.div00.set_fittocontents("height");
                p.div00.set_formscrollbartype("none none");
                p.div00.move("124","478","100%","180",null,null);

                p.div01.set_taborder("3");
                p.div01.set_text("div01");
                p.div01.set_fittocontents("none");
                p.div01.set_url("");
                p.div01.set_formscrollbartype("none none");
                p.div01.move("1546","5.763688760806916%","100%","185",null,null);

                p.div02.set_taborder("6");
                p.div02.set_text("div02");
                p.div02.set_formscrollbartype("none none");
                p.div02.set_url("");
                p.div02.set_fittocontents("height");
                p.div02.move("282","3798","100%","185",null,null);

                p.btn01_00_00.set_taborder("66");
                p.btn01_00_00.set_text("회원가입");
                p.btn01_00_00.set_cssclass("btn_MF_TxtBtn");
                p.btn01_00_00.set_fittocontents("width");
                p.btn01_00_00.move("48","0","52","17",null,null);

                p.Button00.set_taborder("0");
                p.Button00.set_text("Button00");
                p.Button00.move("50","50","197","106",null,null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","",480,1250,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnLeft00.set_visible("false");
                p.btnLeft00.set_minwidth("0");
                p.btnLeft00.set_maxwidth("");
                p.btnLeft00.move("-5","0","60","100",null,null);

                p.btnLeft.set_visible("false");
                p.btnLeft.set_minwidth("0");
                p.btnLeft.set_maxwidth("");
                p.btnLeft.move("20","470","60","140",null,null);

                p.btnRight.set_visible("false");
                p.btnRight.set_minwidth("0");
                p.btnRight.set_maxwidth("");
                p.btnRight.move("1221.00","0","60","140",null,null);

                p.btnRight00.set_visible("false");
                p.btnRight00.set_minwidth("0");
                p.btnRight00.set_maxwidth("");
                p.btnRight00.move("1222","0","60","100",null,null);

                p.btnLeft01.set_visible("false");
                p.btnLeft01.move("-4","0","60","150",null,null);

                p.btnRight01.set_visible("false");
                p.btnRight01.move("395","2490","60","150",null,null);

                p.PanelLogin.set_minwidth("480");
                p.PanelLogin.set_maxwidth("");
                p.PanelLogin.move("2820","660","100.00%","755",null,null);

                p.Div00.set_text("Div00");
                p.Div00.move("80","168","100%","280",null,null);

                p.divBottom.move("0","PanelMain:0",null,"428","0",null);

                p.PanelMain.move("0","20","100.00%","6297",null,null);

                p.PanelContents.set_verticalgap("20");
                p.PanelContents.move("2110","324.173","100%","5542",null,null);

                p.PanelSysLink.set_type("horizontal");
                p.PanelSysLink.set_flexmainaxisalign("start");
                p.PanelSysLink.move("38","2790","100%","780",null,null);

                p.divSysLink04.set_flexgrow("0");
                p.divSysLink04.move("997.00","10","100%","180",null,null);

                p.divSysLink03.set_flexgrow("0");
                p.divSysLink03.move("668.00","10","100%","180",null,null);

                p.divSysLink02.set_flexgrow("0");
                p.divSysLink02.move("339.00","10","100%","180",null,null);

                p.divSysLink01.set_flexgrow("0");
                p.divSysLink01.move("10.00","10","100%","180",null,null);

                p.PanelService.set_flexmainaxisalign("center");
                p.PanelService.set_flexcrossaxiswrapalign("center");
                p.PanelService.set_flexcrossaxisalign("center");
                p.PanelService.move("20","2420","100%","472",null,null);

                p.divServBtn.set_flexgrow("0");
                p.divServBtn.move("91","2490","100%","191",null,null);

                p.PanelServ.move("635","5067","1280","296.5",null,null);

                p.PanelNotice.set_horizontalgap("20");
                p.PanelNotice.move("20","2110","100%","766",null,null);

                p.divNotice.move("0","0","300","242",null,null);

                p.divData.move("440.00","0","300","242",null,null);

                p.divFaq.move("880.00","0","300","242",null,null);

                p.divLink1.move("0","0","293","180",null,null);

                p.PanelLink.set_horizontalgap("20");
                p.PanelLink.move("20","1840","100%","780",null,null);

                p.divLink2.move("329.00","0","293","180",null,null);

                p.divLink3.move("658.00","0","293","180",null,null);

                p.divLink4.move("987.00","0","293","180",null,null);

                p.panFavorite.set_type("vertical");
                p.panFavorite.move("0","238","100%","1613",null,null);

                p.panTodo.move("20","896","100%","592",null,null);

                p.panTodoGrd00.move("461","794","100%","250",null,null);

                p.panTodoGrd.move("101","754","100%","250",null,null);

                p.PanelFavorite.move("20","400","100%","1984",null,null);

                p.PanelMyMenu.set_flexmainaxisalign("center");
                p.PanelMyMenu.set_flexcrossaxisalign("start");
                p.PanelMyMenu.set_flexcrossaxiswrapalign("center");
                p.PanelMyMenu.set_flexgrow("0");
                p.PanelMyMenu.move("706","434","1280","180",null,null);

                p.staServTitle.move("10.00","10","100%","70",null,null);

                p.divMyMenu.move("42","470","100%","180",null,null);

                p.PanelMyMenu00.set_horizontalgap("0");
                p.PanelMyMenu00.move("786","675","1280","180",null,null);

                p.divMyFavorite.move("38","1320","100%","180",null,null);

                p.divLogin.set_fittocontents("height");
                p.divLogin.set_minheight("0");
                p.divLogin.set_maxheight("");
                p.divLogin.move("865","0","415","425",null,null);

                p.div00.set_fittocontents("height");
                p.div00.move("124","478","100%","281",null,null);

                p.div01.set_fittocontents("height");
                p.div01.move("1546","5.763688760806916%","100%","281",null,null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frm_Bottom.xfdl");
            this._addPreloadList("fdl","frame::frm_MainImg.xfdl");
        };
        
        // User Script
        this.registerScript("frm_Main.xfdl", function() {
        /**
        *  인천공항 원스톱 입주자서비스 프로젝트
        *  @FileName 	frm_Main.xfdl
        *  @Creator 	(주)이루온
        *  @CreateDate 	2024/08/08
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/08/08				김완성						최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수
        	//this.fnInit();
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	//TODO..
        };

        //추가
        this.cfnAdd = function ()
        {
        	//TODO..
        };

        //삭제
        this.cfnDel = function ()
        {
        	//TODO..
        };

        //저장
        this.cfnSave = function ()
        {
        	//TODO..
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.selectMyjobTransaction = function() {
        	var strSvcId    = "selectMyjob";
        	var strSvcUrl   = "main/selectMyjobListInq.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsMyjobList=dsMyjobList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };
        // this.selectAplcntBkmkTransaction = function() {
        // 	var strSvcId    = "selectAplcnt";
        // 	var strSvcUrl   = "main/selectAplcntListInq.do";
        // 	var inData      = "";
        // 	var outData     = "dsAplcntList=dsAplcntList";
        // 	var strArg      = "";
        // 	var callBackFnc = "fnCallback";
        // 	var isAsync   	= true;
        //
        // 	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        // };

        this.selectAplcntProcessTransaction = function(grpId) {
        	var strSvcId    = "selectAplcntProcess";
        	var strSvcUrl   = "main/selectAplcntProcessListInq.do";
        	var inData      = "";
        	var outData     = "dsAplcntProcessList=dsAplcntProcessList dsAplcntProcessMenuList=dsAplcntProcessMenuList";
        	var strArg      = "grpId=" + grpId;
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        }

        this.selectAplcntProcess1Transaction = function() {
        	var strSvcId    = "selectAplcntProcess1";
        	var strSvcUrl   = "main/selectAplcntProcessMenu1ListInq.do";
        	var inData      = "";
        	var outData     = "dsAplcntProcessMenuList1=dsAplcntProcessMenuList1";
        	var strArg      = "grpId=''";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        }

        this.selectBbsTransaction1 = function() {
        	var strSvcId    = "selectBbs";
        	var strSvcUrl   = "main/selectBbsListInq.do";
        	var inData      = "";
        	var outData     = "dsBbsNotice=dsList";
        	var strArg      = "bbsTy=N";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= false;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        this.selectBbsTransaction2 = function() {
        	var strSvcId    = "selectBbs";
        	var strSvcUrl   = "main/selectBbsListInq.do";
        	var inData      = "";
        	var outData     = "dsBbsData=dsList";
        	var strArg      = "bbsTy=R";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= false;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        this.selectBbsTransaction3 = function() {
        	var strSvcId    = "selectBbs";
        	var strSvcUrl   = "main/selectBbsListInq.do";
        	var inData      = "";
        	var outData     = "dsBbsFaq=dsList";
        	var strArg      = "bbsTy=F";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= false;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };
        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0)
        	{
        		return;
        	}

        	switch(svcID)
        	{
        		case "selectAplcntProcess":

        			while(this.tab00.tabpages.length > 0) {
        				this.tab00.removeTabpage(0);
        			}

        			for(var i=0;i<this.dsAplcntProcessList.rowcount;i++) {
        				var procId = this.dsAplcntProcessList.getColumn(i, "procId");
        				var procNm = this.dsAplcntProcessList.getColumn(i, "procNm");

        				this.tab00.insertTabpage(procId, i, "work::COM/main/MF_Process.xfdl", procNm);
        			}

        			this.tab00.tabindex = 0;

        			break;

        		case "selectAplcntProcess1":

        			while(this.divMyMenu01_00.form._child_list.length > 0) {
        				this.divMyMenu01_00.removeChild(this.divMyMenu01_00.form._child_list[0].id);
        			}

        			for(var m=0;m<this.dsAplcntProcessMenuList1.rowcount;m++) {

        				var menuId = this.dsAplcntProcessMenuList1.getColumn(m, "menuId");
        				var menuNm = this.dsAplcntProcessMenuList1.getColumn(m, "menuNm");

        				var objBtn = new Button();
        				objBtn.init(menuId, 0, 0, 80, 100, null, null);
        				this.divMyMenu01_00.form.addChild(objBtn.name, objBtn);
        				objBtn.set_icon("theme://icon30/a_2_4.png");
        				objBtn.set_text(menuNm);
        				objBtn.set_cssclass("btn_MF_SkillN");
        				objBtn.show();

        				objBtn.setEventHandler("onclick", this.btnMyFavoriteMenu_onclick, this);
        			}

        			break;

        		case "selectBbs":

        			break;
        	}
        };

        this.fnPopupCallback = function(svcID, errorCode, errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0)
        	{
        		return;
        	}

        	switch(svcID)
        	{
        		case "COM041M02":
        			console.log("111111");
        			break;
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function () {

        	var userId = this.objApp.gdsUser.getColumn(0, "userId");
        	var userNm = this.objApp.gdsUser.getColumn(0, "userNm");
        	var blngAuthrt = this.objApp.gdsUser.getColumn(0, "blngAuthrt");

        	if (!this.gfnIsNull(userId)) {
        		this.divLogin.form.staLoginUser.set_text(userNm + "님");
        		this.divLogin.form.Panel00.set_visible(true);
        		this.divLogin.form.panBtnLogin.set_visible(false);
        		this.divLogin.form.panID.set_visible(false);
        		this.divLogin.form.Button00.set_visible(true);

        		if(blngAuthrt != null && blngAuthrt == "01") {
        			this.panTitle00.visible = false;
        			this.div00.visible = false;
        			this.panFavorite.visible = true;

        			this.selectMyjobTransaction();	//나의 할일
        			this.div01.form.aplcntBkmk();
        			this.selectAplcntProcess1Transaction("");

        		} else if(blngAuthrt != null && (blngAuthrt == "02" || blngAuthrt == "03" || blngAuthrt == "04")) {
        			this.panTitle00.visible = false;
        			this.div00.visible = false;
        			this.panFavorite.visible = true;

        			this.panTitle.visible = false;
        			this.div01.visible = false;
        			this.panProcess.visible = false;
        		}
        		this.resetScroll();
        	}

        	this.selectBbsTransaction1();		//공지사항
        	this.selectBbsTransaction2();		//자료실
        	this.selectBbsTransaction3();		//FAQ
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divLogin_btn_Lgn_onclick = function(obj,e)
        {
        	//로그인 페이지 이동
        	this.gfnGoLogin();
        };

        this.divLogin_btn01_00_00_onclick = function(obj,e)
        {
        	var sTitle = "회원가입 안내";
        	var objArg   = {};
        	var objOption;
        	if (this.objApp.screenid == "Desktop_screen") {
        		objOption = {
        			popuptype: "modal"	//modal,modaless
        			, width: 600
        			, height: 550			//width,height 지정하지 않음 popup form size적용
        			, autosize: false
        			, title: sTitle
        			, resize: true
        			, titlebar: true
        		};
        	} else {
        		objOption = {
        			popuptype: "modal"	//modal,modaless
        			, autosize: true
        			, title: sTitle
        			, resize: true
        			, titlebar: true
        		};
        	}
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("memberRegiGuide", "work::COM/member/COM000P031.xfdl", objArg, sPopupCallBack, objOption);
        };

        this.divLogin_Button00_onclick = function(obj,e)
        {
        	this.objApp.logoutTransaction();
        };

        this.btn03_onclick = function(obj,e)
        {
        	var sTitle = "그룹메뉴 관리";
        	var objArg   = {
        		"titlebar" : false
        	};

        	var objOption = {
        		popuptype: "modal"	//modal,modaless
        		, width: 1400
        		, height: 660
        		, autosize: false
        		, title: sTitle
        		, resize: false
        		, titlebar: true
        	};
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup("COM041M02", "work::COM/bkmk/COM041M02.xfdl", objArg, sPopupCallBack, objOption);


        };

        this.divLogin_btn01_onclick = function(obj,e)
        {
        	var sTitle = "아이디 찾기";
        	var objArg   = {};

        	var objOption = {
        		popuptype: "modal"	//modal,modaless
         		, width: 600
         		, height: 650			//width,height 지정하지 않음 popup form size적용
        		, autosize: false
        		, title: sTitle
        		, resize: true
        		, titlebar: true
        	};
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup("memberRegi", "work::COM/member/COM000P01.xfdl", objArg, sPopupCallBack, objOption);
        };

        this.divLogin_btn01_00_onclick = function(obj,e)
        {
        	var sTitle = "비밀번호 찾기";
        	var objArg   = {};

        	var objOption = {
        		popuptype: "modal"	//modal,modaless
         		, width: 600
         		, height: 750			//width,height 지정하지 않음 popup form size적용
        		, autosize: false
        		, title: sTitle
        		, resize: true
        		, titlebar: true
        	};
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup("memberRegi", "work::COM/member/COM000P02.xfdl", objArg, sPopupCallBack, objOption);
        };

        this.showMyjob = function() {
        	this.panTodo.visible = true;
        	this.panProcess.visible = false;
        };

        this.showBkmkMenu = function(id) {
        	this.panTodo.visible = false;
        	this.panProcess.visible = true;
        	this.selectAplcntProcessTransaction(id);
        };

        this.btnMyFavorite_onclick = function(obj,e)
        {
        	for(var i=0;i<this.divMyFavorite.form._child_list.length;i++) {
        		this.divMyFavorite.form._child_list[i].cssclass = "btn_MF_MenuN";
        	}

        	obj.cssclass = "btn_MF_MenuS";

        	if(obj.id == "myJob_btn") {
        		this.panTodo.visible = true;
        		this.panProcess.visible = false;
        	} else {
        		this.panTodo.visible = false;
        		this.panProcess.visible = true;

        		this.selectAplcntProcessTransaction(obj.id);
        	}

        	this.resetScroll();
        };

        this.tab00_onchanged = function(obj,e)
        {
        	var procId = this.dsAplcntProcessList.getColumn(e.postindex, "procId");

        	while(this.divMyMenu01.form._child_list.length > 0) {
        		this.divMyMenu01.removeChild(this.divMyMenu01.form._child_list[0].id);
        	}

        	this.dsAplcntProcessMenuList.filter("procId == '" + procId + "'");

        	for(var m=0;m<this.dsAplcntProcessMenuList.rowcount;m++) {

        		var menuId = this.dsAplcntProcessMenuList.getColumn(m, "menuId");
        		var menuNm = this.dsAplcntProcessMenuList.getColumn(m, "menuNm");

        		var objBtn = new Button();
        		objBtn.init(menuId, 0, 0, 80, 100, null, null);
        		this.divMyMenu01.form.addChild(objBtn.name, objBtn);
        		objBtn.set_icon("theme://icon30/a_2_4.png");
        		objBtn.set_text(menuNm);
        		objBtn.set_cssclass("btn_MF_SkillN");
        		objBtn.show();

        		objBtn.setEventHandler("onclick", this.btnMyFavoriteMenu_onclick, this);
        	}

        	this.dsAplcntProcessMenuList.filter("");
        };

        this.btnMyFavoriteMenu_onclick = function(obj,e)
        {
        	this.gfnMenuClick(obj.id);
        };
        this.btn02_onclick = function(obj,e)
        {
        	if(obj.text == "주요기능") {
        		this.panTodo.visible = false;
        		this.panProcess.visible = false;
        		this.PanelMyMenu00.visible = false;

        		this.panProcess00.visible = true;

        		obj.text = "마이폴";
        	} else {

        		var initpage = false;
        		for(var i=0;i<this.divMyFavorite.form._child_list.length;i++) {
        			if(this.divMyFavorite.form._child_list[i].id == "myJob_btn") {
        				if(this.divMyFavorite.form._child_list[i].cssclass == "btn_MF_MenuS") {
        					initpage = true;
        				}
        			}
        		}

        		if(initpage) {
        			this.panTodo.visible = true;
        			this.panProcess.visible = false;
        		} else {
        			this.panTodo.visible = false;
        			this.panProcess.visible = true;
        		}

        		this.PanelMyMenu00.visible = true;
        		this.panProcess00.visible = false;

        		obj.text = "주요기능";
        	}
        };
        this.divNotice_grd00_oncellclick = function(obj,e)
        {
        	if(e.cell == 0) {
        		var bbsId = this.dsBbsNotice.getColumn(e.row, "bbsId");

        		var sTitle = "공지사항";
        		var objArg   = {
        			"bbsId" : bbsId,
        			"listYn" : true
        		};

        		var objOption = {
        			popuptype: "modeless"	//modal,modaless
        			, width: 800
        			, height: 700			//width,height 지정하지 않음 popup form size적용
        			, autosize: false
        			, title: sTitle
        			, resize: true
        			, titlebar: true
        		};
        		var sPopupCallBack = "fnPopupCallback";

        		this.gfnOpenPopup("notice", "work::COM/sysMng/COM019P02.xfdl", objArg, sPopupCallBack, objOption);
        	}
        };

        this.divData_grd00_oncellclick = function(obj,e)
        {
        	if(e.cell == 0) {
        		var bbsId = this.dsBbsData.getColumn(e.row, "bbsId");

        		var sTitle = "자료실";
        		var objArg   = {
        			"bbsId" : bbsId
        		};

        		var objOption = {
        			popuptype: "modeless"	//modal,modaless
        			, width: 800
        			, height: 700			//width,height 지정하지 않음 popup form size적용
        			, autosize: false
        			, title: sTitle
        			, resize: true
        			, titlebar: true
        		};
        		var sPopupCallBack = "fnPopupCallback";

        		this.gfnOpenPopup("data", "work::COM/sysMng/COM019P03.xfdl", objArg, sPopupCallBack, objOption);
        	}
        };

        this.divFaq_grd00_oncellclick = function(obj,e)
        {
        	if(e.cell == 0) {
        		var bbsId = this.dsBbsFaq.getColumn(e.row, "bbsId");

        		var sTitle = "FAQ";
        		var objArg   = {
        			"bbsId" : bbsId
        		};

        		var objOption = {
        			popuptype: "modeless"	//modal,modaless
        			, width: 800
        			, height: 700			//width,height 지정하지 않음 popup form size적용
        			, autosize: false
        			, title: sTitle
        			, resize: true
        			, titlebar: true
        		};
        		var sPopupCallBack = "fnPopupCallback";

        		this.gfnOpenPopup("faq", "work::COM/sysMng/COM019P04.xfdl", objArg, sPopupCallBack, objOption);
        	}
        };

        this.divLogin_Button01_onclick = function(obj,e)
        {
        	this.gfnMenuClick("MNG_0000000043");
        };

        this.divLink1_btn00_onclick = function(obj,e)
        {
        	window.open("https://airport.kr/ap_ko/1037/subview.do", "_blank");
        };

        this.divSysLink01_btn00_onclick = function(obj,e)
        {
        	//출입증
        	window.open("https://pass.airport.kr", "_blank");
        };

        this.divSysLink02_btn00_onclick = function(obj,e)
        {
        	//이동지역
        	window.open("https://smartedu.airport.kr/edu/app/pages/main/main.html", "_blank");
        };

        this.divSysLink03_btn00_onclick = function(obj,e)
        {
        	//정기권
        	window.open("https://parking.airport.kr", "_blank");
        };

        this.divSysLink04_btn00_onclick = function(obj,e)
        {
        	//안정관리정보시스템
        };


        this.divMyMenu_btn00_onclick = function(obj,e)
        {
        	var sTitle = obj.text.replace('\r\n', '');

        	var objArg   = {
        		"popId" : obj.id
        		, "type" : "crtrUtztn"
        	};

        	var objOption = {
        		popuptype: "modal"	//modal,modaless
        		, width: 800
        		, height: 800			//width,height 지정하지 않음 popup form size적용
        		, autosize: false
        		, title: sTitle
        		, resize: false
        		, titlebar: true
        	};
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup("crtrUtztnPopup", "work::COM/crtr/crtrUtztnPopup.xfdl", objArg, sPopupCallBack, objOption);

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divLogin.form.Button01.addEventHandler("onclick",this.divLogin_Button01_onclick,this);
            this.divLogin.form.btn00_00.addEventHandler("onclick",this.divLogin_btn_Lgn_onclick,this);
            this.divLogin.form.Button00.addEventHandler("onclick",this.divLogin_Button00_onclick,this);
            this.divLogin.form.btn01.addEventHandler("onclick",this.divLogin_btn01_onclick,this);
            this.divLogin.form.btn01_00.addEventHandler("onclick",this.divLogin_btn01_00_onclick,this);
            this.divLogin.form.btn01_00_00.addEventHandler("onclick",this.divLogin_btn01_00_00_onclick,this);
            this.divMyMenu.form.btn00.addEventHandler("onclick",this.divMyMenu_btn00_onclick,this);
            this.divMyMenu.form.btn00_00.addEventHandler("onclick",this.divMyMenu_btn00_onclick,this);
            this.divMyMenu.form.btn00_00_00.addEventHandler("onclick",this.divMyMenu_btn00_onclick,this);
            this.divMyMenu.form.btn00_00_00_00.addEventHandler("onclick",this.divMyMenu_btn00_onclick,this);
            this.divMyMenu.form.btn00_00_00_00_00.addEventHandler("onclick",this.divMyMenu_btn00_onclick,this);
            this.divMyMenu.form.btn00_00_00_00_00_00.addEventHandler("onclick",this.divMyMenu_btn00_onclick,this);
            this.divMyMenu.form.btn00_00_00_00_00_00_00_00.addEventHandler("onclick",this.divMyMenu_btn00_onclick,this);
            this.divLink1.form.btn00.addEventHandler("onclick",this.divLink1_btn00_onclick,this);
            this.divLink4.form.btn00.addEventHandler("onclick",this.divLink4_btn00_onclick,this);
            this.divNotice.form.btn00.addEventHandler("onclick",this.divNotice_btn00_onclick,this);
            this.divNotice.form.grd00.addEventHandler("oncellclick",this.divNotice_grd00_oncellclick,this);
            this.divData.form.grd00.addEventHandler("oncellclick",this.divData_grd00_oncellclick,this);
            this.divFaq.form.grd00.addEventHandler("oncellclick",this.divFaq_grd00_oncellclick,this);
            this.divSysLink01.form.btn00.addEventHandler("onclick",this.divSysLink01_btn00_onclick,this);
            this.divSysLink02.form.btn00.addEventHandler("onclick",this.divSysLink02_btn00_onclick,this);
            this.divSysLink03.form.btn00.addEventHandler("onclick",this.divSysLink03_btn00_onclick,this);
            this.divSysLink04.form.btn00.addEventHandler("onclick",this.divSysLink04_btn00_onclick,this);
            this.divServBtn.form.divServ1.form.sta00.addEventHandler("onclick",this.divMyMenu00_divServ1_sta00_onclick,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
            this.btn03.addEventHandler("onclick",this.btn03_onclick,this);
            this.divMyFavorite.form.myJob_btn.addEventHandler("onclick",this.btnMyFavorite_onclick,this);
            this.Static00_00.addEventHandler("onclick",this.Static00_00_onclick,this);
            this.tab00.addEventHandler("onchanged",this.tab00_onchanged,this);
            this.div00.form.TSPTSC003.addEventHandler("onclick",this.divMyMenu_btn00_onclick,this);
            this.div00.form.TSPTSC001.addEventHandler("onclick",this.divMyMenu_btn00_onclick,this);
            this.div00.form.TSPTSC005.addEventHandler("onclick",this.divMyMenu_btn00_onclick,this);
            this.div00.form.TSPTSC002.addEventHandler("onclick",this.divMyMenu_btn00_onclick,this);
            this.div00.form.TSPAIS001.addEventHandler("onclick",this.divMyMenu_btn00_onclick,this);
            this.div00.form.TSPAIS005.addEventHandler("onclick",this.divMyMenu_btn00_onclick,this);
            this.div00.form.TSPSEC001.addEventHandler("onclick",this.divMyMenu_btn00_onclick,this);
            this.div00.form.TSPCMM007.addEventHandler("onclick",this.divMyMenu_btn00_onclick,this);
            this.div00.form.TSPCMM008.addEventHandler("onclick",this.divMyMenu_btn00_onclick,this);
            this.btn01_00_00.addEventHandler("onclick",this.divLogin_btn01_00_00_onclick,this);
        };
        this.loadIncludeScript("frm_Main.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
