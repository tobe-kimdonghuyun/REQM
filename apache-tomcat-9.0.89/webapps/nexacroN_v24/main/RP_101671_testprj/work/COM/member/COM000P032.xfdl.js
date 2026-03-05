(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM000P032");
            this.set_titletext("회원가입");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,4500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGet", this);
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"idAplySe\" type=\"STRING\" size=\"256\"/><Column id=\"idAplyType\" type=\"STRING\" size=\"256\"/><Column id=\"userPswd\" type=\"STRING\" size=\"256\"/><Column id=\"userNm\" type=\"STRING\" size=\"256\"/><Column id=\"eml\" type=\"STRING\" size=\"256\"/><Column id=\"mblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"telno\" type=\"STRING\" size=\"256\"/><Column id=\"coId\" type=\"STRING\" size=\"256\"/><Column id=\"coNmHwrt\" type=\"STRING\" size=\"256\"/><Column id=\"prvcAgreDocId\" type=\"STRING\" size=\"256\"/><Column id=\"esntlAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"chcAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"prcsSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcsDsctn\" type=\"STRING\" size=\"256\"/><Column id=\"emlRcptnYn\" type=\"STRING\" size=\"256\"/><Column id=\"smsRcptnPrgrsYn\" type=\"STRING\" size=\"256\"/><Column id=\"smsRcptnAcntYn\" type=\"STRING\" size=\"256\"/><Column id=\"smsRcptnNewYn\" type=\"STRING\" size=\"256\"/><Column id=\"rltnCoActlOgdpYn\" type=\"STRING\" size=\"256\"/><Column id=\"evdncDocNo\" type=\"STRING\" size=\"256\"/><Column id=\"prcrId\" type=\"STRING\" size=\"256\"/><Column id=\"evdncDocKnd\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"coNm\" type=\"STRING\" size=\"256\"/><Column id=\"agreType\" type=\"STRING\" size=\"256\"/><Column id=\"docCn\" type=\"STRING\" size=\"256\"/><Column id=\"esntlAgreCn\" type=\"STRING\" size=\"256\"/><Column id=\"chcAgreCn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"esntlAgreYn\">Y</Col><Col id=\"chcAgreYn\">Y</Col><Col id=\"emlRcptnYn\">Y</Col><Col id=\"smsRcptnPrgrsYn\">Y</Col><Col id=\"smsRcptnAcntYn\">Y</Col><Col id=\"smsRcptnNewYn\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"fullName\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile2", this);
            obj._setContents("<ColumnInfo><Column id=\"fullName\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile3", this);
            obj._setContents("<ColumnInfo><Column id=\"fullName\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile4", this);
            obj._setContents("<ColumnInfo><Column id=\"fullName\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"acntType\" type=\"STRING\" size=\"256\"/><Column id=\"fld\" type=\"STRING\" size=\"256\"/><Column id=\"aplySrvc\" type=\"STRING\" size=\"256\"/><Column id=\"joinAsk\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"acntType\"/><Col id=\"fld\"/><Col id=\"aplySrvc\"/><Col id=\"joinAsk\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staState","20","20",null,"30","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("표는 필수 입력 사항입니다.");
            obj.set_cssclass("sta_WF_EsentialTxt");
            this.addChild(obj.name, obj);

            obj = new Div("divForm","0","40","100%",null,null,"60",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","0","30","100%","330",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle","0","0","100.00%","50",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("처리내역");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel02_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("2");
            obj.set_text("처리내역");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("3");
            obj.set_text("처리자");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("4");
            obj.set_text("처리상태");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_02","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_02_00","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_02_03","10.00","158","100%","110",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Div("Div02","0","30","100%","883",null,null,null,null,"300",null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle","0","0","100.00%","50",null,null,null,null,"50",null,this.divForm.form.Div02.form);
            obj.set_taborder("0");
            obj.set_text("신청정보 (입주사용)");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel01_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("3");
            obj.set_text("ID신청유형");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel02_01","10","98","100%","10",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("4");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("5");
            obj.set_text("ID신청구분(최초권한신청)");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","40.00","150","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("6");
            obj.set_text("복수 권한 필요 시, 회원가입 승인 후 [포털메인>MyPage>계정권한 신청(신청자)] 화면을 이용하시기 바랍니다.)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00","40.00","150","100%","90",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("7");
            obj.set_text("1. 일반사용자 : 해당 입주사에 소속된 직원으로 하단의 서비스를 신청하고자 하는 경우입니다.\r\n2. 계정관리자 : 하단 서비스 이용 외 해당 입주사에 소속된 직원(일반사용자)의 계정 신청에 대하여 승인 및 해제할 수 있는 권한을 부여합니다.\r\n※ 공항공사와 직접계약을 맺은 업체가 아닌경우(하도업체 등), 상위에 직접계약을 맺은 사업자 소속의 일반사용자로 가입하시기 바랍니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Radio("rdo02","200.00","328","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_columncount("2");
            var divForm_form_Div02_form_rdo02_innerdataset = new nexacro.NormalDataset("divForm_form_Div02_form_rdo02_innerdataset", obj);
            divForm_form_Div02_form_rdo02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">TIDREQCD001</Col><Col id=\"datacolumn\">일반사용자</Col></Row><Row><Col id=\"codecolumn\">TIDREQCD002</Col><Col id=\"datacolumn\">계정관리자</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div02_form_rdo02_innerdataset);
            obj.set_text("일반사용자");
            obj.set_value("TIDREQCD001");
            obj.set_index("0");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Radio("rdo01","200.00","328","100%","62",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_columncount("3");
            var divForm_form_Div02_form_rdo01_innerdataset = new nexacro.NormalDataset("divForm_form_Div02_form_rdo01_innerdataset", obj);
            divForm_form_Div02_form_rdo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">TIDCATCD001</Col><Col id=\"datacolumn\">입주사용</Col></Row><Row><Col id=\"codecolumn\">TIDCATCD003</Col><Col id=\"datacolumn\">이동지역신청</Col></Row><Row><Col id=\"datacolumn\">신규임차희망</Col><Col id=\"codecolumn\">TIDCATCD006</Col></Row><Row><Col id=\"datacolumn\">구내영업신청</Col><Col id=\"codecolumn\">TIDCATCD008</Col></Row><Row><Col id=\"datacolumn\">행사시설신청</Col><Col id=\"codecolumn\">TIDCATCD009</Col></Row><Row><Col id=\"datacolumn\">납품/용역/기타</Col><Col id=\"codecolumn\">TIDCATCD010</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div02_form_rdo01_innerdataset);
            obj.set_text("입주사용");
            obj.set_value("TIDCATCD001");
            obj.set_index("0");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Grid("grd00","0","8","100.00%","250",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("8");
            obj.set_autofittype("col");
            obj.set_binddataset("dsInfo");
            obj.set_autosizingtype("row");
            obj.set_suppresshorzcell("right");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"60\"/><Column size=\"300\"/><Column size=\"130\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"60\"/><Row size=\"44\"/><Row size=\"44\"/><Row size=\"44\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"계정유형\" wordWrap=\"char\"/><Cell col=\"1\" text=\"분야\" wordWrap=\"char\"/><Cell col=\"2\" text=\"신청 서비스\" wordWrap=\"char\"/><Cell col=\"3\" text=\"회원가입 문의처\" cssclass=\"CellEnd\" wordWrap=\"char\"/></Band><Band id=\"body\"><Cell rowspan=\"5\" text=\"입주사\" suppress=\"1\" suppressalign=\"middle\" textAlign=\"center\" wordWrap=\"char\"/><Cell col=\"1\" text=\"시설운영\" textAlign=\"center\" wordWrap=\"char\"/><Cell col=\"2\" text=\"인계인수(입주), 원상회복(퇴거), 시설물설치(변경),&#13;&#10;작업신고서, 열쇠추가제작, 부가시설물설치 및 연장,&#13;&#10;배정룸도면, 운항정보/미디어 표출, 전동차등록 및 운전허가\" textAlign=\"left\" autosizecol=\"default\" wordWrap=\"char\"/><Cell col=\"3\" rowspan=\"5\" cssclass=\"CellEnd\" textAlign=\"center\" text=\"입주자서비스센터&#13;&#10;T1 : 032-741-3301~2&#13;&#10;T2 : 032-741-3535~6\" suppress=\"1\" suppressalign=\"middle\" displaytype=\"decoratetext\" edittype=\"textarea\" wordWrap=\"char\"/><Cell row=\"1\" col=\"1\" text=\"보안\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"1\" col=\"2\" text=\"보호구역 위해물품\" textAlign=\"left\" autosizecol=\"default\" wordWrap=\"char\"/><Cell row=\"2\" col=\"1\" text=\"전기\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"2\" col=\"2\" text=\"전기 사용/해지(공사건물, 공사미소유/옥외),&#13;&#10;전기소모품 교체(램프 등), 난로 사용/해지\" textAlign=\"left\" autosizecol=\"default\" wordWrap=\"char\"/><Cell row=\"3\" col=\"1\" text=\"수도\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"3\" col=\"2\" text=\"수도 사용/해지\" textAlign=\"left\" autosizecol=\"default\" wordWrap=\"char\"/><Cell row=\"4\" col=\"1\" text=\"ICT\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"4\" col=\"2\" text=\"통신 사용/변경/해지/일시이용중단/일시이용중단 해제,&#13;&#10;통신실/전산실 출입 작업신고서\" textAlign=\"left\" autosizecol=\"default\" wordWrap=\"char\"/></Band></Format></Formats>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel02_01_00","10","98","100%","10",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("9");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Grid("grd00_00","0","8","100%","150",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("10");
            obj.set_autofittype("col");
            obj.set_autosizingtype("row");
            obj.set_suppresshorzcell("right");
            obj.set_binddataset("dsInfo");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"70\"/><Column size=\"300\"/><Column size=\"130\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/><Row size=\"44\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"계정유형\" wordWrap=\"char\"/><Cell col=\"1\" text=\"분야\" wordWrap=\"char\"/><Cell col=\"2\" text=\"신청 서비스\" wordWrap=\"char\"/><Cell col=\"3\" text=\"회원가입 문의처\" cssclass=\"CellEnd\" wordWrap=\"char\"/></Band><Band id=\"body\"><Cell rowspan=\"3\" text=\"이동지역\" suppress=\"1\" suppressalign=\"middle\" textAlign=\"center\" wordWrap=\"char\"/><Cell col=\"1\" text=\"이동지역\" textAlign=\"center\" wordWrap=\"char\"/><Cell col=\"2\" text=\"이동지역 작업계획서, 이동지역 운전자 면허,&#13;&#10;이동지역 차량/장비 등록, 말소, 반출입\" textAlign=\"left\" autosizecol=\"default\" wordWrap=\"char\"/><Cell col=\"3\" rowspan=\"3\" cssclass=\"CellEnd\" textAlign=\"center\" text=\"이동지역안전관리소&#13;&#10;032-741-2613\" suppress=\"1\" suppressalign=\"middle\" displaytype=\"normal\" edittype=\"none\" wordWrap=\"char\"/><Cell row=\"1\" col=\"1\" text=\"시설운영\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"1\" col=\"2\" text=\"작업신고서(이동지역 외)\" textAlign=\"left\" autosizecol=\"default\" wordWrap=\"char\"/><Cell row=\"2\" col=\"1\" text=\"보안\" textAlign=\"center\" wordWrap=\"char\"/><Cell row=\"2\" col=\"2\" text=\"보호구역 위해물품\" textAlign=\"left\" autosizecol=\"default\" wordWrap=\"char\"/></Band></Format></Formats>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Div("divBscInfo","0","0","100%","725",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle","0","0","100.00%","50",null,null,null,null,"50",null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("0");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Static("staLabel00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("6");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Edit("edtNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("1");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Static("staLabel00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("10");
            obj.set_text("휴대전화번호 (숫자만 입력하세요)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Static("staLabel01_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("11");
            obj.set_text("아이디");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Edit("edtId","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("12");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Static("sta00","20","20","100%","100%",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("13");
            obj.set_text("비밀번호는 9자~16자[영문+특수문자+숫자] 조합으로 설정해 주세요   * 사용가능 특수문자 : ! @ # $ ^ & * ( )");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Static("staLabel04_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("14");
            obj.set_text("비밀번호확인");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Static("staLabel04_01_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("15");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_00_01","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("4");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Static("staLabel04_00_00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("16");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Edit("edt00_01_00_01_01","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("5");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("17");
            obj.set_text("소속회사");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Button("btnGrdRegi00","943.00","50","69","40",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("9");
            obj.set_text("신규등록");
            obj.set_cssclass("btn_WF_SmallGray");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Div("divEdtPop00","280","274","150","40",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("18");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Edit("Edit00","0","0",null,"40","0",null,null,null,null,null,this.divForm.form.divBscInfo.form.divEdtPop00.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_readonly("false");
            this.divForm.form.divBscInfo.form.divEdtPop00.addChild(obj.name, obj);

            obj = new Button("btnPop","Edit00:-40","0","40","40",null,null,null,null,null,null,this.divForm.form.divBscInfo.form.divEdtPop00.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_EdtSch");
            this.divForm.form.divBscInfo.form.divEdtPop00.addChild(obj.name, obj);

            obj = new Button("Button00","870.00","180","40","40",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_Information");
            obj.set_flexshrink("0");
            obj.set_flexgrow("1");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Button("Button00_00","950.00","187","40","40",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_CodeX");
            obj.set_text("");
            obj.set_flexshrink("0");
            obj.set_flexgrow("1");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Static("sta00_00","20","20","100%","40",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("19");
            obj.set_text("돋보기 모양을 클릭하여 본인이 소속된 회사를 찾아 선택하여 주세요.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Edit("edtPswd02","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("3");
            obj.set_readonly("false");
            obj.set_password("true");
            obj.set_text("");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Static("staLabel05_01","10","98","305","46",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("20");
            obj.set_text("비밀번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Edit("edtPswd01","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("2");
            obj.set_readonly("false");
            obj.set_password("true");
            obj.set_text("");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","20","20","100%","80",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("21");
            obj.set_visible("true");
            obj.set_text("회사ID : \r\n회사명 : \r\n사업자등록번호 : \r\n주소 : ");
            obj.set_cssclass("sta_WF_Des004");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Edit("edtMblTelno","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.divBscInfo.form);
            obj.set_taborder("22");
            obj.set_readonly("false");
            obj.set_inputfilter("dot,comma,alpha,sign,space,symbol");
            obj.set_text("");
            this.divForm.form.divBscInfo.addChild(obj.name, obj);

            obj = new Div("Div04","0","30","100%","250",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle","0","0","100.00%","50",null,null,null,null,"50",null,this.divForm.form.Div04.form);
            obj.set_taborder("0");
            obj.set_text("알림설정 발송 여부");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel01_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("1");
            obj.set_text("뉴스 및 이벤트 (SMS 또는 카카오톡)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Radio("Radio00_00","127","203","280","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("6");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            var divForm_form_Div04_form_Radio00_00_innerdataset = new nexacro.NormalDataset("divForm_form_Div04_form_Radio00_00_innerdataset", obj);
            divForm_form_Div04_form_Radio00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div04_form_Radio00_00_innerdataset);
            obj.set_text("예");
            obj.set_value("Y");
            obj.set_index("0");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("2");
            obj.set_text("서비스 진행현황 (SMS 또는 카카오톡)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Radio("Radio00_00_00","127","203","280","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("4");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            var divForm_form_Div04_form_Radio00_00_00_innerdataset = new nexacro.NormalDataset("divForm_form_Div04_form_Radio00_00_00_innerdataset", obj);
            divForm_form_Div04_form_Radio00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div04_form_Radio00_00_00_innerdataset);
            obj.set_text("예");
            obj.set_value("Y");
            obj.set_index("0");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("5");
            obj.set_text("서비스 진행현황 (이메일)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Radio("Radio00_00_01","127","203","280","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("3");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            var divForm_form_Div04_form_Radio00_00_01_innerdataset = new nexacro.NormalDataset("divForm_form_Div04_form_Radio00_00_01_innerdataset", obj);
            divForm_form_Div04_form_Radio00_00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div04_form_Radio00_00_01_innerdataset);
            obj.set_text("예");
            obj.set_value("Y");
            obj.set_index("0");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("8");
            obj.set_text("계정승인요청현황 (SMS 또는 카카오톡)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Radio("Radio00_01","127","203","280","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("7");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            var divForm_form_Div04_form_Radio00_01_innerdataset = new nexacro.NormalDataset("divForm_form_Div04_form_Radio00_01_innerdataset", obj);
            divForm_form_Div04_form_Radio00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div04_form_Radio00_01_innerdataset);
            obj.set_text("예");
            obj.set_value("Y");
            obj.set_index("0");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Div("Div05","0","30","100%","516",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle","0","0","100.00%","50",null,null,null,null,"50",null,this.divForm.form.Div05.form);
            obj.set_taborder("0");
            obj.set_text("개인정보 수집·이용 동의");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staLabel00","10","98","100%","10",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("1");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_00_00","30.00","98","100.00%","140",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_value("개인정보 수집 및 이용 관련 안내문(필수)");
            obj.set_text("개인정보 수집 및 이용 관련 안내문(필수)");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("3");
            obj.set_text("개인정보(필수) 사용동의여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Radio("Radio00","127","203","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("6");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            var divForm_form_Div05_form_Radio00_innerdataset = new nexacro.NormalDataset("divForm_form_Div05_form_Radio00_innerdataset", obj);
            divForm_form_Div05_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">동의함</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">동의하지 않음</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div05_form_Radio00_innerdataset);
            obj.set_text("동의함");
            obj.set_value("Y");
            obj.set_index("0");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_01_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("4");
            obj.set_text("개인정보(선택) 사용동의여부");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Radio("Radio00_00_00","127","203","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("8");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            var divForm_form_Div05_form_Radio00_00_00_innerdataset = new nexacro.NormalDataset("divForm_form_Div05_form_Radio00_00_00_innerdataset", obj);
            divForm_form_Div05_form_Radio00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">동의함</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">동의하지 않음</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div05_form_Radio00_00_00_innerdataset);
            obj.set_text("동의함");
            obj.set_value("Y");
            obj.set_index("0");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("sta00_00","20","20","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("5");
            obj.set_text("(선택 동의 항목은 동의하지 않으셔도 회원 가입이 가능합니다.)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","10","98","100%","10",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("7");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_00_00_00","30.00","98","100.00%","140",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_value("개인정보 수집 및 이용 관련 안내문(선택)");
            obj.set_text("개인정보 수집 및 이용 관련 안내문(선택)");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Div("Div03","0","570.392","100%","1400",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            obj.set_visible("true");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle","0","0","100.00%","50",null,null,null,null,"50",null,this.divForm.form.Div03.form);
            obj.set_taborder("0");
            obj.set_text("증빙 자료");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel00_02","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("1");
            obj.set_text("사업자등록증");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btn_file_1","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("2");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static00","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("3");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static01","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("4");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static02","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("5");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btn_del_file_1","512","135","125","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("6");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Grid("Grid01","20.00","114","100%","120",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("7");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("8");
            obj.set_text("재직증명서");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btn_file_2","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("10");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static00_00","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("11");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static01_00","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("12");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_00","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("13");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btn_del_file_2","512","135","125","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("14");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Grid("Grid02","20.00","114","100%","120",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("15");
            obj.set_binddataset("dsFile2");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","40.00","150","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("16");
            obj.set_text("(중요)재직증명서 내 주민등록번호, 생년월일, 자택주소는 삭제(마스킹)하셔야 하며, 삭제(마스킹)하지 않고 가입신청 시 불승인 처리됩니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","32","52","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("17");
            obj.set_text("이동지역 회사 실제 소속 여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Radio("rdo03","127","203","50%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("9");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            var divForm_form_Div03_form_rdo03_innerdataset = new nexacro.NormalDataset("divForm_form_Div03_form_rdo03_innerdataset", obj);
            divForm_form_Div03_form_rdo03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오 (하도업체, 컨소시엄 등)</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div03_form_rdo03_innerdataset);
            obj.set_text("예");
            obj.set_value("Y");
            obj.set_index("0");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_01","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("18");
            obj.set_text("이동지역 관련 양사 계약 증빙 서류");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btn_file_3","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("19");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static00_01","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("20");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static01_01","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("21");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_01","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("22");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btn_del_file_3","512","135","125","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("23");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Grid("Grid04","20.00","114","100%","120",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("24");
            obj.set_binddataset("dsFile4");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("sta00_00_01","40.00","150","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("25");
            obj.set_text("이동지역 회사 및 실제 소속 회사간 계약관련 증빙 서류");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00","40.00","150","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("26");
            obj.set_text("사업자등록증의 사업자등록번호와 입주자증명서류(임대계약서, 낙찰증명서 등)에 있는 사업자등록번호가 동일해야 합니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_01_00","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("27");
            obj.set_text("공항 입주 관련 계약 증빙 서류");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btn_file_4","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("28");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("29");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("30");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("31");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btn_del_file_4","512","135","125","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("32");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Grid("Grid03","20.00","114","100%","120",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("33");
            obj.set_binddataset("dsFile3");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_00","40.00","150","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("34");
            obj.set_text("임대계약서, 낙찰증명서 등 (인천국제공항공사와 계약된 서류만 가능)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Div("divPopBtn","0",null,null,"60","0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","457.00","30","100","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("1");
            obj.set_text("신청");
            obj.set_cssclass("btn_WF_Yes");
            this.divPopBtn.addChild(obj.name, obj);

            obj = new Edit("edit_coId","-1090.00","20","140","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_prvcAgreDocId","-1090.00","73","140","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_brno","-940.00","20","140","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_coId01","-790.00","20","140","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_coAddr","-640.00","20","140","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_coDtlAddr","-490.00","20","140","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","364","13","103","39",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("222");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form.Div01.form
            obj = new Layout("default","",0,0,this.divForm.form.Div01.form,function(p){});
            obj.set_type("vertical");
            this.divForm.form.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.Div02.form
            obj = new Layout("default","",0,0,this.divForm.form.Div02.form,function(p){});
            obj.set_type("vertical");
            this.divForm.form.Div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.divBscInfo.form.divEdtPop00.form
            obj = new Layout("default","",0,0,this.divForm.form.divBscInfo.form.divEdtPop00.form,function(p){});
            this.divForm.form.divBscInfo.form.divEdtPop00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.divBscInfo.form
            obj = new Layout("default","",0,0,this.divForm.form.divBscInfo.form,function(p){});
            obj.set_type("vertical");
            this.divForm.form.divBscInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.Div04.form
            obj = new Layout("default","",0,0,this.divForm.form.Div04.form,function(p){});
            obj.set_type("vertical");
            this.divForm.form.Div04.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.Div05.form
            obj = new Layout("default","",0,0,this.divForm.form.Div05.form,function(p){});
            obj.set_type("vertical");
            this.divForm.form.Div05.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.Div03.form
            obj = new Layout("default","",0,0,this.divForm.form.Div03.form,function(p){});
            obj.set_type("vertical");
            this.divForm.form.Div03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,function(p){});
            obj.set_verticalgap("20");
            obj.set_type("horizontal");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            this.divForm.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPopBtn.form
            obj = new Layout("default","",0,0,this.divPopBtn.form,function(p){});
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("20");
            this.divPopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Phone_screen",800,4500,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.Div01.form.edt00_02_00","value","dsGet","prcrId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.Div01.form.edt00_02","value","dsGet","prcsSttsCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.Div01.form.edt00_02_03","value","dsGet","prcsDsctn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.Div02.form.rdo02","value","dsGet","idAplyType");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.Div02.form.rdo01","value","dsGet","idAplySe");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.divBscInfo.form.edtNm","value","dsGet","userNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divForm.form.divBscInfo.form.edtId","value","dsGet","userId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divForm.form.divBscInfo.form.edt00_00_00_00_01","value","dsGet","eml");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divForm.form.divBscInfo.form.edt00_01_00_01_01","value","dsGet","telno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divForm.form.divBscInfo.form.divEdtPop00.form.Edit00","value","dsGet","coNmHwrt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divForm.form.Div04.form.Radio00_00_01","value","dsGet","emlRcptnYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divForm.form.Div04.form.Radio00_00_00","value","dsGet","smsRcptnPrgrsYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divForm.form.Div04.form.Radio00_01","value","dsGet","smsRcptnAcntYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divForm.form.Div05.form.edt00_00_00_00_00","value","dsGet","esntlAgreCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divForm.form.Div05.form.edt00_00_00_00_00_00","value","dsGet","chcAgreCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divForm.form.Div03.form.rdo03","value","dsGet","rltnCoActlOgdpYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edit_coId","value","dsGet","coId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edtId00","value","dsGet","userId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divForm.form.divBscInfo.form.edtPswd01","value","dsGet","userPswd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edit_prvcAgreDocId","value","dsGet","prvcAgreDocId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divForm.form.Div04.form.Radio00_00","value","dsGet","smsRcptnNewYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divForm.form.Div05.form.Radio00","value","dsGet","esntlAgreYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divForm.form.Div05.form.Radio00_00_00","value","dsGet","chcAgreYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divForm.form.divBscInfo.form.edtMblTelno","value","dsGet","mblTelno");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("COM000P032.xfdl", function() {
        /********************************************************************
            created:	  2024/08/08
            filename: 	C:\developer\tsp_view\publishing\work\LIF\test.xfdl
            file path:	C:\developer\tsp_view\publishing\work\LIF
            file base: 	test
            file ext:	  xfdl
            author:

            purpose:
        *********************************************************************/

        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	test.xfdl
        *  @Creator 	ELUON INS
        *  @CreateDate 	2024/08/08
        *  @Desction
        *  @Author
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/08/08			김완성					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        this.param;
        //var cMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        this.pswdChk = false;
        this.coChk = false;
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
         	this.gfnFormOnload(obj); //필수함수

        // 	// 전달받은 파라메터 팝업창과 페이지오픈으로 파라메터 불러오는 방식이 달라짐
        // 	if(this.opener)
        // 	{
        // 		this.param = {
        // 			"id" : this.getOwnerFrame().userId
        // 		}
        // 	} else
        // 	{
        // 		this.param = this.getOwnerFrame().form.fvObjArgs;
        // 	}

         	this.fnInit();
        };

        // 페이지에서 라온K업로드 솔루션의 생성 이벤트
        this.RaonkUpload_RAONKUPLOAD_CreationComplete = function(obj,  paramObj)
        {
        	// 업로드 솔루션이 초기 생성시 업로드 할 경로를 지정해야 한다.
        	// /CMM/YYYY/MM/DD/  <<== CMM은 업무별 폴더 지정이고 기본적으로 /년도/월/일 의 폴더 구조를 갖는다.
        	this.RaonkUpload.SetConfig('FolderNameRule', '/COM/YYYY/MM/DD/');
        };

        // 파일 업로드 시 에러 발생 이벤트
        this.RaonkUpload_RAONKUPLOAD_OnError = function(obj, paramObj)
        {
        	console.log(paramObj);
        };

        // 파일 추가 시 발생 이벤트
        // 파일 추가 시 타입을 정해야 한다.(사업자등록증, 증빙자료, 첨부파일, 등등)
        this.RaonkUpload_RAONKUPLOAD_AfterAddAllFile = function(obj, paramObj)
        {
        	// 파일 카테고리 초기화
        	this.gvUploadCategory = "";
        };

        this.RaonkUpload_RAONKUPLOAD_BeforeAddFile = function(obj, paramObj)
        {
        	if(this.gvUploadCategory == 'bizFile')
        	{
        		if(this.dsFile1.rowcount >= 1)
        		{
        			this.gfnAlertMsg("MSG_001", "msgCallback");
        			//this.gfnAlertMsg("beforeAddFile", "파일 1개만 업로드 가능 합니다.", "msgCallback");
        			return false;
        		}
        	}

        	return true;
        };

        this.RaonkUpload_RAONKUPLOAD_AfterAddFile = function(obj, paramObj)
        {
        	// 파일에 카테고리 셋팅
        	var sRow = this.dsFile.findRow("colId", this.gvUploadCategory);
        	var atflMngNo = this.dsFile.getColumn(sRow, "atflMngNo");

        	var cvObj = {
        		"strCustomValue" : this.gvUploadCategory,
        		"atflMngNo" : atflMngNo
        	};
        	this.RaonkUpload.SetFileCustomValue(-1, JSON.stringify(cvObj));

        	// 파일 카테고리별 구분으로 파일 리스트에 추가
        	if(this.gvUploadCategory == 'bulicFile') {
        		var nIdx = this.dsFile1.addRow();
        		this.dsFile1.setColumn(nIdx, "fullName", paramObj.userdata.strName + ' (' + paramObj.userdata.nSize + ')');
        		this.dsFile1.setColumn(nIdx, "orgnlFileNm", paramObj.userdata.strName);
        		this.dsFile1.setColumn(nIdx, "fileSz", paramObj.userdata.nSize);
        		this.dsFile1.setColumn(nIdx, "atflMngSno", paramObj.userdata.nIndex);
        		this.dsFile1.setColumn(nIdx, "colId", this.gvUploadCategory);
        	} else if(this.gvUploadCategory == 'hdofPrdocFile') {
        		var nIdx = this.dsFile2.addRow();
        		this.dsFile2.setColumn(nIdx, "fullName", paramObj.userdata.strName + ' (' + paramObj.userdata.nSize + ')');
        		this.dsFile2.setColumn(nIdx, "orgnlFileNm", paramObj.userdata.strName);
        		this.dsFile2.setColumn(nIdx, "fileSz", paramObj.userdata.nSize);
        		this.dsFile2.setColumn(nIdx, "atflMngSno", paramObj.userdata.nIndex);
        		this.dsFile2.setColumn(nIdx, "colId", this.gvUploadCategory);
        	} else if(this.gvUploadCategory == 'arptMvnFile') {
        		var nIdx = this.dsFile3.addRow();
        		this.dsFile3.setColumn(nIdx, "fullName", paramObj.userdata.strName + ' (' + paramObj.userdata.nSize + ')');
        		this.dsFile3.setColumn(nIdx, "orgnlFileNm", paramObj.userdata.strName);
        		this.dsFile3.setColumn(nIdx, "fileSz", paramObj.userdata.nSize);
        		this.dsFile3.setColumn(nIdx, "atflMngSno", paramObj.userdata.nIndex);
        		this.dsFile3.setColumn(nIdx, "colId", this.gvUploadCategory);
        	} else if(this.gvUploadCategory == 'mvzFile') {
        		var nIdx = this.dsFile4.addRow();
        		this.dsFile4.setColumn(nIdx, "fullName", paramObj.userdata.strName + ' (' + paramObj.userdata.nSize + ')');
        		this.dsFile4.setColumn(nIdx, "orgnlFileNm", paramObj.userdata.strName);
        		this.dsFile4.setColumn(nIdx, "fileSz", paramObj.userdata.nSize);
        		this.dsFile4.setColumn(nIdx, "atflMngSno", paramObj.userdata.nIndex);
        		this.dsFile4.setColumn(nIdx, "colId", this.gvUploadCategory);
        	}
        };

        // 파일 업로드 완료 이벤트
        this.RaonkUpload_RAONKUPLOAD_UploadComplete = function(obj, paramObj)
        {
        	var allListArray = this.RaonkUpload.GetListInfo("json");
        	// 파일 업로드 후 첨부파일관리번호를 얻기 위한 함수
        	this.gfnUploadComplete("uploadComplete", allListArray, "dsFile", "fnCallback");
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        this.cfnClose = function()
        {
        	console.log('cfnClose');
        	//부모창 검색 조회
         	var sWinId = this.objApp.gdsOpenMenu.lookupAs(this.FRAME_MENUCOLUMNS.menuId, this.getOwnerFrame().form.fvMenuId.substring(0, 8), this.FRAME_MENUCOLUMNS.winId);
         	var objForm = this.objApp.gvFrsWork.all[sWinId];
        	objForm.form.divWork.form.cfnSearch(1);
        };
        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        // 데이터 조회
        this.selectTransaction = function()
        {
        	var strSvcId    = "select";
        	var strSvcUrl   = "member/mbrJoinAplyInfoInq.do";
        	var inData      = "";
        	var outData     = "dsGet=dsGet dsFile1=dsFile1 dsFile2=dsFile2 dsFile3=dsFile3";
        	var strArg      = "id=" + this.param.id;
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 데이터 저장
        this.saveTransaction = function()
        {
        	var strSvcId    = "save";
        	var strSvcUrl   = "member/mbrJoinAplyInfoStrg.do";
        	var inData      = "dsGet=dsGet dsFile=dsFile";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= false;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };
        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0)
        	{
        		return;
        	}

        	switch(svcID)
        	{
        		case "select":
        			// 데이터 조회 후 파일리스트에 셋팅
        			this.gfnDownloadSetting(this.RaonkUpload, this.dsFile1);
        			this.gfnDownloadSetting(this.RaonkUpload, this.dsFile2);
        			this.gfnDownloadSetting(this.RaonkUpload, this.dsFile3);
        			this.gfnDownloadSetting(this.RaonkUpload, this.dsFile4);
        			this.fnVisibleSetting();
        			break;
        		case "save":
        			var gvRetMsg = this.objApp.getVariable("gvRetMsg");
        			this.gfnAlertMsg("save", gvRetMsg, null, "msgCallback");
        			break;
        		case "uploadComplete":
        			// 파일 업로드가 완료 된 후 첨부파일 과 같이 데이터 저장
        			this.saveTransaction();
        			break;
        		case "combo":
        			this.divForm.form.Div02.form.rdo01.set_index(0);
        			this.divForm.form.Div02.form.rdo02.set_index(0);
        			this.divForm.form.Div03.form.rdo03.set_index(0);
        			break;
        	}
        };

        this.msgCallback = function(sPopupId, sRtn)
        {
        	var oRtn = JSON.parse(sRtn);

        	if(sPopupId == "save_confirm") {
        		if(oRtn.result == "Y") {
        			var obj = {
        				"atchFileId" : "",			// 기존 첨부파일 있을 경우 입력
        				"bsnsSeCd" : "COM",			// 업무구분코드
        				"prgrmId" : "COM000P032" 	// 프로그램ID (화면 ID)
        			}
        			var str = JSON.stringify(obj);
        			this.RaonkUpload.AddFormData('params', str);
        			this.RaonkUpload.Transfer();
        		}
        	} else if(sPopupId == "save")  {
        		if(this.opener) {
        			this.close();
        		} else {
        			var cMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        			this.gfnCloseMenu(cMenuId);
        		}
        	} else if(sPopupId == "file_all_del1") {
        		this.gfnDeleteAllFile(this.RaonkUpload, this.dsFile1);
        	} else if(sPopupId == "file_all_del2") {
        		this.gfnDeleteAllFile(this.RaonkUpload, this.dsFile2);
        	} else if(sPopupId == "file_all_del3") {
        		this.gfnDeleteAllFile(this.RaonkUpload, this.dsFile3);
        	} else if(sPopupId == "file_all_del4") {
        		this.gfnDeleteAllFile(this.RaonkUpload, this.dsFile4);
        	} else if(sPopupId == "file_del1") {
        		this.gfnDeleteFile(this.RaonkUpload, this.dsFile1, oRtn.paramArg);
        	} else if(sPopupId == "file_del2") {
        		this.gfnDeleteFile(this.RaonkUpload, this.dsFile2, oRtn.paramArg);
        	} else if(sPopupId == "file_del3") {
        		this.gfnDeleteFile(this.RaonkUpload, this.dsFile3, oRtn.paramArg);
        	} else if(sPopupId == "file_del4") {
        		this.gfnDeleteFile(this.RaonkUpload, this.dsFile4, oRtn.paramArg);
        	}
        };

        this.fnPopupCallback = function(svcId, ret)
        {
        	switch(svcId) {
        		case "userIdDpcnSrch":
        			if (ret != "") {
        				var param = JSON.parse(ret);
        				this.dsGet.setColumn(0, "userId", param.userId);
        			}
        			break;

        		case "coSch":
        			if (ret != "") {
        				var param = JSON.parse(ret);
        				this.dsGet.setColumn(0, "coId", param.coId);
        				this.dsGet.setColumn(0, "coNm", param.coNm);
        				this.dsGet.setColumn(0, "coNmHwrt", param.coNm);
        				this.edit_brno.set_value(param.brno);
        				this.edit_coAddr.set_value(param.coAddr);
        				this.edit_coDtlAddr.set_value(param.coDtlAddr);
        				this.coChk = true;
        			}
        			break;
        	}
        }
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	//this.divForm.form.Div02.form.pan03.visible = false;
        	this.divForm.form.Div03.visible = false;
        	//this.divForm.form.Div03.form.pan00_00.visible = false;
        	//this.divForm.form.Div03.form.panFile04.visible = false;
        	this.divForm.form.divBscInfo.form.btnGrdRegi00.visible = false;
        	//this.divForm.form.divBscInfo.form.Panel04_02_00_00.visible = false;

        	this.resetScroll();

        	this.gfnCmmCode("combo", "dsCombo", "PRCS_STTS", "A");

        // 	if(this.param != null && this.param.id != null && this.param.id != '') {
        // 		this.selectTransaction();
        // 	}
        }

        this.fnVisibleSetting = function()
        {
        	var idAplySe = this.dsGet.getColumn(0, "idAplySe");
        	var prcsSttsCd = this.dsGet.getColumn(0, "prcsSttsCd");

        	if (!this.gfnIsNull(prcsSttsCd)) {
        		this.divForm.form.Div01.set_visible(true);
        	}
        }

        this.fnPswdChk = function()
        {
        	var regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$^&*()])[a-zA-z\d!@#$^&*()]{9,16}$/;
        	var userPswd =	this.divForm.form.divBscInfo.form.edtPswd01.value;
        	var userPswdChk = this.divForm.form.divBscInfo.form.edtPswd02.value;
        	console.log(userPswd);
        	if (regex.test(userPswd)) {
        		if (userPswd == userPswdChk) {
        			this.divForm.form.divBscInfo.form.sta00.text = "유효한 비밀번호 입니다.";
        			this.divForm.form.divBscInfo.form.sta00.set_color("green");
        			this.pswdChk = true;
        		} else {
        			if (!this.gfnIsNull(userPswdChk)) {
        				this.divForm.form.divBscInfo.form.sta00.text = "비밀번호가 일치하지 않습니다.";
        				this.divForm.form.divBscInfo.form.sta00.set_color("red");
        				this.pswdChk = false;
        			} else {
        				this.divForm.form.divBscInfo.form.sta00.text = "비밀번호 확인을 입력해주세요.";
        				this.divForm.form.divBscInfo.form.sta00.set_color("red");
        				this.pswdChk = false;
        			}
        		}
        	} else {
        		this.divForm.form.divBscInfo.form.sta00.text = "비밀번호는 9자~16자[영문+특수문자+숫자] 조합으로 설정해 주세요   * 사용가능 특수문자 : ! @ # $ ^ & * ( )";
        		this.divForm.form.divBscInfo.form.sta00.set_color("red");
        		this.pswdChk = false;
        	}
        }
        /*******************************************************************************************************************************
         * 각 RAONK 별 EVENT 영역
        *******************************************************************************************************************************/
        // 파일 추가
        this.divForm_Div03_btn_file_1_onclick = function(obj,e)
        {
        	// 데이터의 첨부파일 관리번호 입력 컬럼명
        	this.gvUploadCategory = "bulicFile";		// 컬럼ID
        	this.RaonkUpload.OpenFileDialog();
        };

        this.divForm_Div03_btn_file_2_onclick = function(obj,e)
        {
        	this.gvUploadCategory = "hdofPrdocFile";
        	this.RaonkUpload.OpenFileDialog();
        };

        this.divForm_Div03_btn_file_3_onclick = function(obj,e)
        {
        	this.gvUploadCategory = "arptMvnFile";
        	this.RaonkUpload.OpenFileDialog();
        };

        this.divForm_Div03_btn_file_4_onclick = function(obj,e)
        {
        	this.gvUploadCategory = "mvzFile";
        	this.RaonkUpload.OpenFileDialog();
        };

        // 파일 그리드 클릭 이벤트
        this.divForm_Div03_Grid01_oncellclick = function(obj,e)
        {

        	if(e.col == 1) 	// 삭제 버튼 클릭
        	{
        		var param = {
        			"row" : e.row,
        			"col" : e.col
        		};
        		this.gfnConfirmMsg("file_del1", "MSG_002", "msgCallback", ["확인", "취소"], ["Y", "N"], param);
        	} else if(e.col == 0) // 파일명 클릭
        	{
        		this.gfnSelectFile(this.RaonkUpload, this.dsFile1, e);
        	}
        };

        // 파일 그리드 더블클릭 이벤트
        this.divForm_Div03_Grid01_oncelldblclick = function(obj,e)
        {
        	if(e.col == 0) 	// 파일명을 더블클릭 시 다운로드
        	{
        		this.gfnDownloadFile(this.RaonkUpload, this.dsFile1, e);
        	}
        };

        this.divForm_Div03_Grid02_oncellclick = function(obj,e)
        {
        	if(e.col == 1) 	// 삭제 버튼 클릭
        	{
        		var param = {
        			"row" : e.row,
        			"col" : e.col
        		};

        		this.gfnConfirmMsg("file_del2", "MSG_002", "msgCallback", ["확인", "취소"], ["Y", "N"], param);
        	} else if(e.col == 0) // 파일명 클릭
        	{
        		this.gfnSelectFile(this.RaonkUpload, this.dsFile2, e);
        	}
        };

        this.divForm_Div03_Grid02_oncelldblclick = function(obj,e)
        {
        	if(e.col == 0) 	// 파일명을 더블클릭 시 다운로드
        	{
        		this.gfnDownloadFile(this.RaonkUpload, this.dsFile2, e);
        	}
        };

        this.divForm_Div03_Grid03_oncellclick = function(obj,e)
        {
        	if(e.col == 1) 	// 삭제 버튼 클릭
        	{
        		var param = {
        			"row" : e.row,
        			"col" : e.col
        		};

        		this.gfnConfirmMsg("file_del3", "MSG_002", "msgCallback", ["확인", "취소"], ["Y", "N"], param);
        	} else if(e.col == 0) // 파일명 클릭
        	{
        		this.gfnSelectFile(this.RaonkUpload, this.dsFile3, e);
        	}
        };

        this.divForm_Div03_Grid03_oncelldblclick = function(obj,e)
        {
        	if(e.col == 0) 	// 파일명을 더블클릭 시 다운로드
        	{
        		this.gfnDownloadFile(this.RaonkUpload, this.dsFile3, e);
        	}
        };

        this.divForm_Div03_Grid04_oncellclick = function(obj,e)
        {
        	if(e.col == 1) 	// 삭제 버튼 클릭
        	{
        		var param = {
        			"row" : e.row,
        			"col" : e.col
        		};

        		this.gfnConfirmMsg("file_del4", "MSG_002", "msgCallback", ["확인", "취소"], ["Y", "N"], param);
        	} else if(e.col == 0) // 파일명 클릭
        	{
        		this.gfnSelectFile(this.RaonkUpload, this.dsFile4, e);
        	}
        };

        this.divForm_Div03_Grid04_oncelldblclick = function(obj,e)
        {
        	if(e.col == 0) 	// 파일명을 더블클릭 시 다운로드
        	{
        		this.gfnDownloadFile(this.RaonkUpload, this.dsFile4, e);
        	}
        };

        this.divForm_Div03_btn_del_file_1_onclick = function(obj,e)
        {
        	this.gfnConfirmMsg("file_all_del1", "MSG_002", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        };

        this.divForm_Div03_btn_del_file_2_onclick = function(obj,e)
        {
        	this.gfnConfirmMsg("file_all_del2", "MSG_002", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        };

        this.divForm_Div03_btn_del_file_3_onclick = function(obj,e)
        {
        	this.gfnConfirmMsg("file_all_del3", "MSG_002", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        };

        this.divForm_Div03_btn_del_file_4_onclick = function(obj,e)
        {
        	this.gfnConfirmMsg("file_all_del4", "MSG_002", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        // ID 입력 edit 클릭 이벤트
        this.divForm_divBscInfo_edtId_oneditclick = function(obj,e)
        {
        	var sTitle = "아이디 중복 체크";
        	var objArg   = {};

        	var objOption = {
        		popuptype: "modal"	//modal,modaless
         		, width: 600
         		, height: 300			//width,height 지정하지 않음 popup form size적용
        		, autosize: true
        		, title: sTitle
        		, resize: true
        		, titlebar: true
        	};
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup("userIdDpcnSrch", "work::COM/member/COM000P033.xfdl", objArg, sPopupCallBack, objOption);
        };
        // ID신청구분 버튼 변경시
        this.divForm_Div02_rdo01_onitemchanged = function(obj,e)
        {
        	this.divForm.form.Div03.set_visible(false);

        	if (obj.value == "TIDCATCD001") {
        		this.divForm.form.Div02.form.pan01.visible = true;
        		this.divForm.form.Div02.form.pan02.visible = true;
        		trace("test0");
        	} else {
        		this.divForm.form.Div02.form.pan01.visible = false;
        		this.divForm.form.Div02.form.pan02.visible = false;
        		//this.divForm.form.Div03.form.panFile03.visible = false;
        		//this.divForm.form.Div02.form.rdo02.set_index(0);
        		trace("test1");
        	}

        	if (obj.value == "TIDCATCD003") {
        		this.divForm.form.Div02.form.pan03.visible = true;
        		this.divForm.form.Div03.visible = true;
        		this.divForm.form.Div03.form.pan00_00.visible = true;
        		this.divForm.form.divBscInfo.form.btnGrdRegi00.visible = true;
        	} else {
        		this.divForm.form.Div02.form.pan03.visible = false;
        		this.divForm.form.Div03.form.pan00_00.visible = false;
        		this.divForm.form.divBscInfo.form.btnGrdRegi00.visible = false;
        		this.divForm.form.Div03.form.panFile04.visible = false;
        	}
        	trace("test3");
        	if (obj.value == "TIDCATCD006" || obj.value == "TIDCATCD008" || obj.value == "TIDCATCD010") {
        		this.divForm.form.Div03.set_visible(true);
        	}

        	this.resetScroll();
        	this.divForm.form.resetScroll();
        };
        // ID신청유형 버튼 변경시
        this.divForm_Div02_rdo02_onitemchanged = function(obj,e)
        {
        	if (obj.value == "TIDREQCD001") {
        		this.divForm.form.Div03.visible = false;
        		this.divForm.form.Div03.form.panFile03.visible = false;
        	} else {
        		this.divForm.form.Div03.visible = true;
        		this.divForm.form.Div03.form.panFile03.visible = true;
        	}
        };
        // 이동지역회사 실제 소속여부 버튼 변경시
        this.divForm_Div03_rdo03_onitemchanged = function(obj,e)
        {
        	if (obj.value == "N") {
        		this.divForm.form.Div03.form.panFile04.visible = true;
        	} else {
        		this.divForm.form.Div03.form.panFile04.visible = false;
        	}
        };
        // 회사 선택 버튼
        this.divForm_divBscInfo_divEdtPop00_btnPop_onclick = function(obj,e)
        {
        	var sTitle = "회사 선택 팝업";
        	var objArg   = {};

        	var objOption = {
        		popuptype: "modal"	//modal,modaless
         		, width: 1000
         		, height: 460			//width,height 지정하지 않음 popup form size적용
        		, autosize: true
        		, title: sTitle
        		, resize: true
        		, titlebar: true
        	};
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup("coSch", "work::COM/crtr/COM100P01.xfdl", objArg, sPopupCallBack, objOption);
        };
        // 회사 등록 버튼
        this.divForm_divBscInfo_btnGrdRegi00_onclick = function(obj,e)
        {
        	var sTitle = "회사 등록 팝업";
        	var objArg   = {};

        	var objOption = {
        		popuptype: "modal"	//modal,modaless
         		, width: 1000
         		, height: 600			//width,height 지정하지 않음 popup form size적용
        		, autosize: false
        		, title: sTitle
        		, resize: true
        		, titlebar: true
        	};
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup("coRegi", "work::COM/crtr/COM023P01.xfdl", objArg, sPopupCallBack, objOption);
        };
        // 신청버튼
        this.divPopBtn_Button00_00_onclick = function(obj,e)
        {
        	// TODO : 추후 개인정보동의문서 ID 추가
        	this.dsGet.setColumn(0, "prvcAgreDocId", "1111");
        	this.gfnConfirmMsg("save_confirm", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"], null);
        };
        // 비밀번호체크
        this.divForm_divBscInfo_edtPswd01_onkillfocus = function(obj,e)
        {
        	this.fnPswdChk();
        };
        // 비밀번호체크
        this.divForm_divBscInfo_edtPswd02_onkillfocus = function(obj,e)
        {
        	this.fnPswdChk();
        };
        // 회사 취소 버튼
        this.divForm_divBscInfo_Button00_00_onclick = function(obj,e)
        {
        	this.dsGet.setColumn(0, "coId", null);
        	this.dsGet.setColumn(0, "coNm", null);
        	this.dsGet.setColumn(0, "coNmHwrt", null);
        	this.edit_brno.set_value("");
        	this.edit_coAddr.set_value("");
        	this.edit_coDtlAddr.set_value("");
        	this.divForm.form.divBscInfo.form.Panel04_02_00_00.set_visible(false);
        };
        // 회사 정보 버튼
        this.divForm_divBscInfo_Button00_onclick = function(obj,e)
        {
        	var coId = this.dsGet.getColumn(0, "coId");
        	var coNm = this.dsGet.getColumn(0, "coNm");
        	var brno = this.edit_brno.value;
        	var coAddr = this.edit_coAddr.value;
        	var coDtlAddr = this.edit_coDtlAddr.value;

        	if (!this.gfnIsNull(coId) && this.coChk) {
        		console.log(coId + "\n" + coNm);
        		var coText = "회사ID : " + coId + "\n" + "회사명 : " + coNm + "\n" + "사업자등록번호 : " + brno + "\n" + "주소 : " + coAddr + " " + coDtlAddr;
        		this.divForm.form.divBscInfo.form.Panel04_02_00_00.set_visible(true);
        		this.divForm.form.divBscInfo.form.sta00_00_00.set_text(coText);
        		this.coChk = false;
        	} else {
        		this.divForm.form.divBscInfo.form.Panel04_02_00_00.set_visible(false);
        		this.divForm.form.divBscInfo.form.sta00_00_00.set_text("");
        		this.coChk = true;
        	}
        };



        this.Button00_onclick = function(obj,e)
        {
        	this.resetScroll();
        	this.re
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.Div02.form.rdo02.addEventHandler("onitemchanged",this.divForm_Div02_rdo02_onitemchanged,this);
            this.divForm.form.Div02.form.rdo01.addEventHandler("onitemchanged",this.divForm_Div02_rdo01_onitemchanged,this);
            this.divForm.form.divBscInfo.form.edtId.addEventHandler("oneditclick",this.divForm_divBscInfo_edtId_oneditclick,this);
            this.divForm.form.divBscInfo.form.btnGrdRegi00.addEventHandler("onclick",this.divForm_divBscInfo_btnGrdRegi00_onclick,this);
            this.divForm.form.divBscInfo.form.divEdtPop00.form.btnPop.addEventHandler("onclick",this.divForm_divBscInfo_divEdtPop00_btnPop_onclick,this);
            this.divForm.form.divBscInfo.form.Button00.addEventHandler("onclick",this.divForm_divBscInfo_Button00_onclick,this);
            this.divForm.form.divBscInfo.form.Button00_00.addEventHandler("onclick",this.divForm_divBscInfo_Button00_00_onclick,this);
            this.divForm.form.divBscInfo.form.edtPswd02.addEventHandler("onkillfocus",this.divForm_divBscInfo_edtPswd02_onkillfocus,this);
            this.divForm.form.divBscInfo.form.edtPswd01.addEventHandler("onkillfocus",this.divForm_divBscInfo_edtPswd01_onkillfocus,this);
            this.divForm.form.Div05.form.Radio00_00_00.addEventHandler("onitemchanged",this.divForm_Div00_Radio00_00_onitemchanged,this);
            this.divForm.form.Div03.form.btn_file_1.addEventHandler("onclick",this.divForm_Div03_btn_file_1_onclick,this);
            this.divForm.form.Div03.form.btn_del_file_1.addEventHandler("onclick",this.divForm_Div03_btn_del_file_1_onclick,this);
            this.divForm.form.Div03.form.Grid01.addEventHandler("oncellclick",this.divForm_Div03_Grid01_oncellclick,this);
            this.divForm.form.Div03.form.Grid01.addEventHandler("oncelldblclick",this.divForm_Div03_Grid01_oncelldblclick,this);
            this.divForm.form.Div03.form.btn_file_2.addEventHandler("onclick",this.divForm_Div03_btn_file_2_onclick,this);
            this.divForm.form.Div03.form.btn_del_file_2.addEventHandler("onclick",this.divForm_Div03_btn_del_file_2_onclick,this);
            this.divForm.form.Div03.form.Grid02.addEventHandler("oncellclick",this.divForm_Div03_Grid02_oncellclick,this);
            this.divForm.form.Div03.form.Grid02.addEventHandler("oncelldblclick",this.divForm_Div03_Grid02_oncelldblclick,this);
            this.divForm.form.Div03.form.rdo03.addEventHandler("onitemchanged",this.divForm_Div03_rdo03_onitemchanged,this);
            this.divForm.form.Div03.form.btn_file_3.addEventHandler("onclick",this.divForm_Div03_btn_file_3_onclick,this);
            this.divForm.form.Div03.form.btn_del_file_3.addEventHandler("onclick",this.divForm_Div03_btn_del_file_3_onclick,this);
            this.divForm.form.Div03.form.Grid04.addEventHandler("oncellclick",this.divForm_Div03_Grid04_oncellclick,this);
            this.divForm.form.Div03.form.Grid04.addEventHandler("oncelldblclick",this.divForm_Div03_Grid04_oncelldblclick,this);
            this.divForm.form.Div03.form.btn_file_4.addEventHandler("onclick",this.divForm_Div03_btn_file_3_onclick,this);
            this.divForm.form.Div03.form.btn_del_file_4.addEventHandler("onclick",this.divForm_Div03_btn_del_file_3_onclick,this);
            this.divForm.form.Div03.form.Grid03.addEventHandler("oncellclick",this.divForm_Div03_Grid03_oncellclick,this);
            this.divForm.form.Div03.form.Grid03.addEventHandler("oncelldblclick",this.divForm_Div03_Grid03_oncelldblclick,this);
            this.divPopBtn.form.Button00_00.addEventHandler("onclick",this.divPopBtn_Button00_00_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("COM000P032.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
