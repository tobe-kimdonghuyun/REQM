(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST005P18");
            this.set_titletext("디자인 자가 체크리스트");
            this.set_cssclass("CST001P03");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,1600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsChkList01", this);
            obj._setContents("<ColumnInfo><Column id=\"slfCheckDvsNm\" type=\"STRING\" size=\"256\"/><Column id=\"slfCheckDvsCd\" type=\"STRING\" size=\"256\"/><Column id=\"slfCheckChckNm\" type=\"STRING\" size=\"256\"/><Column id=\"slfCheckCd\" type=\"STRING\" size=\"256\"/><Column id=\"chkItem\" type=\"STRING\" size=\"256\"/><Column id=\"Y\" type=\"STRING\" size=\"256\"/><Column id=\"N\" type=\"STRING\" size=\"256\"/><Column id=\"NA\" type=\"STRING\" size=\"256\"/><Column id=\"비고\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"slfCheckDvsNm\">자가&#13;&#10;Check-List&#13;&#10;대상검토</Col><Col id=\"slfCheckChckNm\">ⓛ 미관심의 대상 시설 중 “경미한 사항＂에 해당한다.&#13;&#10;1. 운영을 위한 임시 시설물&#13;&#10;2. 유사 자문/심의 등을 거친 시설물&#13;&#10;3. 기타 미관관리부서와 협의한 사항</Col><Col id=\"비고\">“경미한 사항“에 해당 될 경우“체크리스트“를 시행결의에 첨부하여 미관 관리&#10;</Col><Col id=\"slfCheckDvsCd\">A01</Col></Row><Row><Col id=\"slfCheckDvsNm\">자가&#13;&#10;Check-List&#13;&#10;대상검토</Col><Col id=\"slfCheckChckNm\">② 미관심의 예외 대상에 해당하지 않는다.&#13;&#10;1. 인천공항 단계별 건설계획에 따라 건설되는 시설물&#13;&#10;2. 이사회 또는 디자인혁신자문위원회에서 미관/디자인 등에 대하여 검토 및 결정한 시설물&#13;&#10;3. 「건축법」 제4조(건축위원회)에 의거하여 심의를 시행한 기본 시설물&#13;&#10;4. 정기적인 시설물 교체 및 유지관리&#10;</Col><Col id=\"비고\">“예외 사항”에 해당될 경우 별도의 미관관리를 시행하지 않음</Col><Col id=\"slfCheckDvsCd\">A01</Col></Row><Row><Col id=\"slfCheckDvsNm\">자가&#13;&#10;Check-List&#13;&#10;대상검토</Col><Col id=\"slfCheckChckNm\">1. 인천공항 단계별 건설계획에 따라 건설되는 시설물</Col><Col id=\"비고\">“예외 사항”에 해당될 경우 별도의 미관관리를 시행하지 않음</Col><Col id=\"slfCheckDvsCd\">A01</Col></Row><Row><Col id=\"slfCheckDvsNm\">자가&#13;&#10;Check-List&#13;&#10;대상검토</Col><Col id=\"slfCheckChckNm\">2. 이사회 또는 디자인혁신자문위원회에서 미관/디자인 등에 대하여 검토 및 결정한 시설물</Col><Col id=\"비고\">“예외 사항”에 해당될 경우 별도의 미관관리를 시행하지 않음</Col><Col id=\"slfCheckDvsCd\">A01</Col></Row><Row><Col id=\"slfCheckDvsNm\">자가&#13;&#10;Check-List&#13;&#10;대상검토</Col><Col id=\"slfCheckChckNm\">3. 「건축법」 제4조(건축위원회)에 의거하여 심의를 시행한 기본 시설물</Col><Col id=\"비고\">“예외 사항”에 해당될 경우 별도의 미관관리를 시행하지 않음</Col><Col id=\"slfCheckDvsCd\">A01</Col></Row><Row><Col id=\"slfCheckDvsNm\">자가&#13;&#10;Check-List&#13;&#10;대상검토</Col><Col id=\"slfCheckChckNm\">4. 정기적인 시설물 교체 및 유지관리</Col><Col id=\"비고\">“예외 사항”에 해당될 경우 별도의 미관관리를 시행하지 않음</Col><Col id=\"slfCheckDvsCd\">A01</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChkList", this);
            obj._setContents("<ColumnInfo><Column id=\"slfCheckDvsNm\" type=\"STRING\" size=\"256\"/><Column id=\"slfCheckDvsCd\" type=\"STRING\" size=\"256\"/><Column id=\"slfCheckNm\" type=\"STRING\" size=\"256\"/><Column id=\"slfCheckCd\" type=\"STRING\" size=\"256\"/><Column id=\"remark\" type=\"STRING\" size=\"256\"/><Column id=\"slfCheckVal\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"slfCheckDvsNm\">자가&#13;&#10;Check-List&#13;&#10;대상검토</Col><Col id=\"slfCheckNm\">ⓛ 미관심의 대상 시설 중 “경미한 사항＂에 해당한다.&#13;&#10;1. 운영을 위한 임시 시설물&#13;&#10;2. 유사 자문/심의 등을 거친 시설물&#13;&#10;3. 기타 미관관리부서와 협의한 사항</Col><Col id=\"remark\">“경미한 사항“에 해당 될 경우“체크리스트“를 시행결의에 첨부하여 미관 관리&#10;</Col><Col id=\"slfCheckDvsCd\">A01</Col><Col id=\"slfCheckCd\">01</Col></Row><Row><Col id=\"slfCheckDvsNm\">자가&#13;&#10;Check-List&#13;&#10;대상검토</Col><Col id=\"slfCheckNm\">② 미관심의 예외 대상에 해당하지 않는다.&#13;&#10;1. 인천공항 단계별 건설계획에 따라 건설되는 시설물&#13;&#10;2. 이사회 또는 디자인혁신자문위원회에서 미관/디자인 등에 대하여 검토 및 결정한 시설물&#13;&#10;3. 「건축법」 제4조(건축위원회)에 의거하여 심의를 시행한 기본 시설물&#13;&#10;4. 정기적인 시설물 교체 및 유지관리&#10;</Col><Col id=\"remark\">“예외 사항”에 해당될 경우 별도의 미관관리를 시행하지 않음</Col><Col id=\"slfCheckDvsCd\">A01</Col><Col id=\"slfCheckCd\">02</Col></Row><Row><Col id=\"slfCheckDvsNm\">자가&#13;&#10;Check-List&#13;&#10;대상검토</Col><Col id=\"slfCheckNm\">1. 인천공항 단계별 건설계획에 따라 건설되는 시설물</Col><Col id=\"remark\">“예외 사항”에 해당될 경우 별도의 미관관리를 시행하지 않음</Col><Col id=\"slfCheckDvsCd\">A01</Col><Col id=\"slfCheckCd\">03</Col></Row><Row><Col id=\"slfCheckDvsNm\">자가&#13;&#10;Check-List&#13;&#10;대상검토</Col><Col id=\"slfCheckNm\">2. 이사회 또는 디자인혁신자문위원회에서 미관/디자인 등에 대하여 검토 및 결정한 시설물</Col><Col id=\"remark\">“예외 사항”에 해당될 경우 별도의 미관관리를 시행하지 않음</Col><Col id=\"slfCheckDvsCd\">A01</Col><Col id=\"slfCheckCd\">04</Col></Row><Row><Col id=\"slfCheckDvsNm\">자가&#13;&#10;Check-List&#13;&#10;대상검토</Col><Col id=\"slfCheckNm\">3. 「건축법」 제4조(건축위원회)에 의거하여 심의를 시행한 기본 시설물</Col><Col id=\"remark\">“예외 사항”에 해당될 경우 별도의 미관관리를 시행하지 않음</Col><Col id=\"slfCheckDvsCd\">A01</Col><Col id=\"slfCheckCd\">05</Col></Row><Row><Col id=\"slfCheckDvsNm\">자가&#13;&#10;Check-List&#13;&#10;대상검토</Col><Col id=\"slfCheckNm\">4. 정기적인 시설물 교체 및 유지관리</Col><Col id=\"remark\">“예외 사항”에 해당될 경우 별도의 미관관리를 시행하지 않음</Col><Col id=\"slfCheckDvsCd\">A01</Col><Col id=\"slfCheckCd\">06</Col></Row><Row><Col id=\"slfCheckNm\">시설물의 배치가 여객의 이동 동선 및 공항의 운영에 지장을 주지 않는다.</Col><Col id=\"slfCheckDvsNm\">배치</Col><Col id=\"slfCheckDvsCd\">B01</Col><Col id=\"slfCheckCd\">01</Col></Row><Row><Col id=\"slfCheckNm\">시설 본연의 기능성 및 공간 효율성을 고려하여 배치한다.</Col><Col id=\"slfCheckDvsNm\">배치</Col><Col id=\"slfCheckDvsCd\">B01</Col><Col id=\"slfCheckCd\">02</Col></Row><Row><Col id=\"slfCheckNm\">주변 공용시설물의 사용에 지장을 주지 않는다. </Col><Col id=\"slfCheckDvsNm\">배치</Col><Col id=\"slfCheckDvsCd\">B01</Col><Col id=\"slfCheckCd\">03</Col></Row><Row><Col id=\"slfCheckNm\">코튼월 혹은 커브사이드 주변 등 개방성이 중요한 공간에서는 여객의 시선 높이 등을 고려하여 개방감과 공간감에 과한 지장을 주지 않는다. </Col><Col id=\"slfCheckDvsNm\">배치</Col><Col id=\"slfCheckDvsCd\">B01</Col><Col id=\"slfCheckCd\">04</Col></Row><Row><Col id=\"slfCheckDvsNm\">형태</Col><Col id=\"slfCheckNm\">인접 시설물과 조화성을 고려하여 크기(높이,  두께, 너비)를 결정한다. </Col><Col id=\"slfCheckDvsCd\">C01</Col><Col id=\"slfCheckCd\">01</Col></Row><Row><Col id=\"slfCheckDvsNm\">형태</Col><Col id=\"slfCheckNm\">휴먼스케일을 고려한 형태 및 높이, 크기를 설정한다.</Col><Col id=\"slfCheckDvsCd\">C01</Col><Col id=\"slfCheckCd\">02</Col></Row><Row><Col id=\"slfCheckDvsNm\">형태</Col><Col id=\"slfCheckNm\">과도하고 인위적인 형태를 지양하고, 간결한 형태를 통해 주변 환경과 조회를 유도한다. </Col><Col id=\"slfCheckDvsCd\">C01</Col><Col id=\"slfCheckCd\">03</Col></Row><Row><Col id=\"slfCheckDvsNm\">형태</Col><Col id=\"slfCheckNm\">교통약자를 고려한 디자인 적용 여부를 검토한다.</Col><Col id=\"slfCheckDvsCd\">C01</Col><Col id=\"slfCheckCd\">04</Col></Row><Row><Col id=\"slfCheckDvsNm\">색채 및 자재</Col><Col id=\"slfCheckNm\">설계 시 색채표기는 표준기준법(NCS코드)를 따른다.</Col><Col id=\"slfCheckDvsCd\">D01</Col><Col id=\"slfCheckCd\">01</Col></Row><Row><Col id=\"slfCheckNm\">과도한 원색 및 고채도의 색사용은 지양한다.</Col><Col id=\"slfCheckDvsNm\">색채 및 자재</Col><Col id=\"slfCheckDvsCd\">D01</Col><Col id=\"slfCheckCd\">02</Col></Row><Row><Col id=\"slfCheckNm\">단일 대상에 과도하게 많은 색상의 사용은 지앙한다. </Col><Col id=\"slfCheckDvsNm\">색채 및 자재</Col><Col id=\"slfCheckDvsCd\">D01</Col><Col id=\"slfCheckCd\">03</Col></Row><Row><Col id=\"slfCheckNm\">인근 공용지역 마감과 조화를 이루도록 유도한다.</Col><Col id=\"slfCheckDvsNm\">색채 및 자재</Col><Col id=\"slfCheckDvsCd\">D01</Col><Col id=\"slfCheckCd\">04</Col></Row><Row><Col id=\"slfCheckNm\">인천국제공항의 주조색(백색계약 / 회색계약 / 우드패턴 등) 우선적용을 검토한 후, 강조가 필요한 시설물로 판단되는 경우에만 강조색을 적용했다.</Col><Col id=\"slfCheckDvsNm\">색채 및 자재</Col><Col id=\"slfCheckDvsCd\">D01</Col><Col id=\"slfCheckCd\">05</Col></Row><Row><Col id=\"slfCheckNm\">커튼월 혹은 커브사이드 주변에 설치할 경우 자연재료 및 투명소재를 사용하여 개방적은 공간을 되도록 유지했다. </Col><Col id=\"slfCheckDvsNm\">색채 및 자재</Col><Col id=\"slfCheckDvsCd\">D01</Col><Col id=\"slfCheckCd\">06</Col></Row><Row><Col id=\"slfCheckNm\">설치 위치가 속해있는 터미널(T1, T2 및 탑승동)의 디자인·미관 콘셉트 및 주변 시설물과의 통일성·조화로움을 고려했다.</Col><Col id=\"slfCheckDvsNm\">콘셉트</Col><Col id=\"slfCheckDvsCd\">E01</Col><Col id=\"slfCheckCd\">01</Col></Row><Row><Col id=\"slfCheckNm\">시설물에 대한 카트프로텍터 필요 여부를 검토한다.</Col><Col id=\"slfCheckDvsNm\">기타</Col><Col id=\"slfCheckDvsCd\">F01</Col><Col id=\"slfCheckCd\">01</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"bfhdCnsltnNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWrtr", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"slfCheckYmd\" type=\"STRING\" size=\"256\"/><Column id=\"slfCheckWrtrId\" type=\"STRING\" size=\"256\"/><Column id=\"slfCheckRvwCn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBfhdClsltn", this);
            obj._setContents("<ColumnInfo><Column id=\"ctrtGubn\" type=\"STRING\" size=\"256\"/><Column id=\"bfhdCnsltnNo\" type=\"STRING\" size=\"256\"/><Column id=\"bfhdCnsltnYmd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntId\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntMblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"coId\" type=\"STRING\" size=\"256\"/><Column id=\"coNm\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtCtrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptPstnInfoCn\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtPstnInfoCn\" type=\"STRING\" size=\"256\"/><Column id=\"jobNm\" type=\"STRING\" size=\"256\"/><Column id=\"instlRsnCd\" type=\"STRING\" size=\"256\"/><Column id=\"dsinCnsltnYn\" type=\"STRING\" size=\"256\"/><Column id=\"dsinCnsltnCn\" type=\"STRING\" size=\"256\"/><Column id=\"dsinPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ctrtGubn\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMsg", this);
            obj._setContents("<ColumnInfo><Column id=\"bfhdCnsltnNo\" type=\"STRING\" size=\"256\"/><Column id=\"msg\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDsinPicList", this);
            obj._setContents("<ColumnInfo><Column id=\"bfhdCnsltnNo\" type=\"STRING\" size=\"256\"/><Column id=\"dsinPicId\" type=\"STRING\" size=\"256\"/><Column id=\"dsinPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"idntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"idntyYmd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","0","0","100.00%",null,null,"60",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("default autoindicator");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","40","383","100%","46",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("13");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Grid("grdChkList","20.00","0","95.83%","1150",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsChkList");
            obj.set_autosizingtype("row");
            obj.set_autofittype("col");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"140\"/><Column size=\"390\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"210\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"75\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"구분\"/><Cell col=\"1\" rowspan=\"2\" text=\"점검사항\"/><Cell col=\"2\" colspan=\"3\" text=\"점검결과\"/><Cell col=\"5\" rowspan=\"2\" cssclass=\"CellEnd\" text=\"비고\"/><Cell row=\"1\" col=\"2\" text=\"Y\"/><Cell row=\"1\" col=\"3\" text=\"N\"/><Cell row=\"1\" col=\"4\" text=\"N/A\"/></Band><Band id=\"body\"><Cell text=\"bind:slfCheckDvsNm\" suppress=\"1\" suppressalign=\"middle\" cssclass=\"CellHead\" autosizerow=\"default\"/><Cell col=\"1\" text=\"bind:slfCheckNm\" wordWrap=\"char\" autosizerow=\"default\"/><Cell col=\"2\" text=\"bind:slfCheckVal\" displaytype=\"radioitemcontrol\" edittype=\"radioitem\" autosizerow=\"default\" radioitemcodevalue=\"Y\"/><Cell col=\"3\" text=\"bind:slfCheckVal\" displaytype=\"radioitemcontrol\" edittype=\"radioitem\" autosizerow=\"default\" radioitemcodevalue=\"N\"/><Cell col=\"4\" text=\"bind:slfCheckVal\" displaytype=\"radioitemcontrol\" edittype=\"radioitem\" autosizerow=\"default\" radioitemcodevalue=\"F\"/><Cell col=\"5\" cssclass=\"CellEnd\" text=\"bind:비고\" wordWrap=\"char\" autosizerow=\"default\"/></Band></Format></Formats>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel02","20.00","10","100%","1249",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("15");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"grdChkList\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("자가 체크리스트 작성일자");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_01","20.00","84","305","86",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"calSlfCheckYmd\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_00_00_00","974.00","151","100%","46",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_text("자가 체크리스트 작성자");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("pan06_00_00_00","974.00","151","305","86",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_00_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Edit00\"/><PanelItem id=\"PanelItem01\" componentid=\"divEdtPop\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("pan00_00_00","0","60","100.00%","100",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("5");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan06_00_00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divEdtPop","484","395","100%","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("7");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            this.divForm.addChild(obj.name, obj);

            obj = new Edit("edtSlfCheckWrtrId","0","0","100%","40",null,null,null,null,null,null,this.divForm.form.divEdtPop.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_readonly("true");
            this.divForm.form.divEdtPop.addChild(obj.name, obj);

            obj = new Button("Button00","edtSlfCheckWrtrId:-40","0","40","40",null,null,null,null,null,null,this.divForm.form.divEdtPop.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            this.divForm.form.divEdtPop.addChild(obj.name, obj);

            obj = new Calendar("calSlfCheckYmd","40.00","1306","170","38",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_01_00","40.00","383","70%","46",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("8");
            obj.set_text("검토의견");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_01_00","20.00","84","920","150",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem01\" componentid=\"txtRvwCn\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("pan00_00_00_00","0","60","100%","161",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("10");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_01_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01","668.00","447","30%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("14");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnSendSms\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new TextArea("txtRvwCn","94","535","100%","100",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("11");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnSendSms","750","383","109","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("12");
            obj.set_text("검토의견발송");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_SmallGray");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divGuide","1590.00","135","450","385",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_visible("false");
            obj.set_cssclass("div_GD_Tip");
            this.addChild(obj.name, obj);

            obj = new Button("btnSchClose","24.00","55","52","30",null,null,null,null,null,null,this.divGuide.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_SchClose");
            this.divGuide.addChild(obj.name, obj);

            obj = new Button("btnSchOpen","100.00","55","52","30",null,null,null,null,null,null,this.divGuide.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_SchOpen");
            this.divGuide.addChild(obj.name, obj);

            obj = new Div("divPopBtn","0",null,"100.00%","60",null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            this.addChild(obj.name, obj);

            obj = new Button("btnDownload","283.00","10","173","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("2");
            obj.set_text("미관심의운영기준");
            obj.set_cssclass("btn_WF_No");
            obj.set_fittocontents("width");
            this.divPopBtn.addChild(obj.name, obj);

            obj = new Button("btnConfirm","476.00","10","110","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("1");
            obj.set_text("확인완료");
            obj.set_cssclass("btn_WF_Yes");
            this.divPopBtn.addChild(obj.name, obj);

            obj = new Button("btnSave","457.00","30","100","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Yes");
            this.divPopBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form.divEdtPop.form
            obj = new Layout("default","",0,0,this.divForm.form.divEdtPop.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.edtSlfCheckWrtrId.set_taborder("0");
                p.edtSlfCheckWrtrId.set_cssclass("edt_WF_EdtSch");
                p.edtSlfCheckWrtrId.set_readonly("true");
                p.edtSlfCheckWrtrId.move("0","0","100%","40",null,null);

                p.Button00.set_taborder("1");
                p.Button00.set_cssclass("btn_WF_EdtSch");
                p.Button00.move("edtSlfCheckWrtrId:-40","0","40","40",null,null);
            	}
            );
            this.divForm.form.divEdtPop.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divEdtPop.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divEdtPop.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.divEdtPop.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.set_taborder("13");
                p.Panel00.move("40","383","100%","46",null,null);

                p.grdChkList.set_taborder("0");
                p.grdChkList.set_binddataset("dsChkList");
                p.grdChkList.set_autosizingtype("row");
                p.grdChkList.set_autofittype("col");
                p.grdChkList.set_extendsizetype("row");
                p.grdChkList.move("20.00","0","95.83%","1150",null,null);

                p.Panel02.set_taborder("15");
                p.Panel02.set_spacing("0px 20px 10px 20px");
                p.Panel02.set_fittocontents("height");
                p.Panel02.move("20.00","10","100%","1249",null,null);

                p.staLabel00_00_01.set_taborder("1");
                p.staLabel00_00_01.set_text("자가 체크리스트 작성일자");
                p.staLabel00_00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel00_00_01.move("10","98","100%","46",null,null);

                p.Panel00_00_00_01.set_taborder("2");
                p.Panel00_00_00_01.set_type("vertical");
                p.Panel00_00_00_01.set_flexgrow("1");
                p.Panel00_00_00_01.set_fittocontents("height");
                p.Panel00_00_00_01.set_verticalgap("4");
                p.Panel00_00_00_01.set_minwidth("");
                p.Panel00_00_00_01.move("20.00","84","305","86",null,null);

                p.staLabel03_00_00_00_00_00.set_taborder("3");
                p.staLabel03_00_00_00_00_00.set_text("자가 체크리스트 작성자");
                p.staLabel03_00_00_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00_00_00_00_00.move("974.00","151","100%","46",null,null);

                p.pan06_00_00_00.set_taborder("4");
                p.pan06_00_00_00.set_type("vertical");
                p.pan06_00_00_00.set_flexgrow("1");
                p.pan06_00_00_00.set_fittocontents("height");
                p.pan06_00_00_00.set_verticalgap("4");
                p.pan06_00_00_00.move("974.00","151","305","86",null,null);

                p.pan00_00_00.set_taborder("5");
                p.pan00_00_00.set_horizontalgap("20");
                p.pan00_00_00.set_flexcrossaxiswrapalign("start");
                p.pan00_00_00.set_flexwrap("wrap");
                p.pan00_00_00.set_fittocontents("height");
                p.pan00_00_00.set_verticalgap("0");
                p.pan00_00_00.set_spacing("0px 20px 10px 20px");
                p.pan00_00_00.set_cssclass("pal_WF_DtlBg");
                p.pan00_00_00.move("0","60","100.00%","100",null,null);

                p.divEdtPop.set_taborder("7");
                p.divEdtPop.set_text("Div00");
                p.divEdtPop.set_formscrollbartype("none none");
                p.divEdtPop.move("484","395","100%","40",null,null);

                p.calSlfCheckYmd.set_taborder("6");
                p.calSlfCheckYmd.set_dateformat("yyyy-MM-dd");
                p.calSlfCheckYmd.move("40.00","1306","170","38",null,null);

                p.staLabel00_00_01_00.set_taborder("8");
                p.staLabel00_00_01_00.set_text("검토의견");
                p.staLabel00_00_01_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00_01_00.move("40.00","383","70%","46",null,null);

                p.Panel00_00_00_01_00.set_taborder("9");
                p.Panel00_00_00_01_00.set_type("vertical");
                p.Panel00_00_00_01_00.set_flexgrow("1");
                p.Panel00_00_00_01_00.set_fittocontents("height");
                p.Panel00_00_00_01_00.set_verticalgap("4");
                p.Panel00_00_00_01_00.set_minwidth("");
                p.Panel00_00_00_01_00.move("20.00","84","920","150",null,null);

                p.pan00_00_00_00.set_taborder("10");
                p.pan00_00_00_00.set_horizontalgap("20");
                p.pan00_00_00_00.set_flexcrossaxiswrapalign("start");
                p.pan00_00_00_00.set_flexwrap("wrap");
                p.pan00_00_00_00.set_fittocontents("height");
                p.pan00_00_00_00.set_verticalgap("0");
                p.pan00_00_00_00.set_spacing("0px 20px 10px 20px");
                p.pan00_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.pan00_00_00_00.move("0","60","100%","161",null,null);

                p.Panel01.set_taborder("14");
                p.Panel01.set_flexcrossaxisalign("center");
                p.Panel01.set_flexmainaxisalign("end");
                p.Panel01.move("668.00","447","30%","50",null,null);

                p.txtRvwCn.set_taborder("11");
                p.txtRvwCn.move("94","535","100%","100",null,null);

                p.btnSendSms.set_taborder("12");
                p.btnSendSms.set_text("검토의견발송");
                p.btnSendSms.set_fittocontents("width");
                p.btnSendSms.set_cssclass("btn_WF_SmallGray");
                p.btnSendSms.move("750","383","109","34",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("0");
            obj.set_spacing("10px 20px 10px 20px");
            this.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form
            obj = new Layout("mobile","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("0");
            obj.set_spacing("10px 20px 10px 20px");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divGuide.form
            obj = new Layout("default","",0,0,this.divGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnSchClose.set_taborder("0");
                p.btnSchClose.set_cssclass("btn_WF_SchClose");
                p.btnSchClose.move("24.00","55","52","30",null,null);

                p.btnSchOpen.set_taborder("1");
                p.btnSchOpen.set_cssclass("btn_WF_SchOpen");
                p.btnSchOpen.move("100.00","55","52","30",null,null);
            	}
            );
            this.divGuide.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divGuide.form
            obj = new Layout("mobile","",0,0,this.divGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divGuide.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divPopBtn.form
            obj = new Layout("default","",0,0,this.divPopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnDownload.set_taborder("2");
                p.btnDownload.set_text("미관심의운영기준");
                p.btnDownload.set_cssclass("btn_WF_No");
                p.btnDownload.set_fittocontents("width");
                p.btnDownload.move("283.00","10","173","40",null,null);

                p.btnConfirm.set_taborder("1");
                p.btnConfirm.set_text("확인완료");
                p.btnConfirm.set_cssclass("btn_WF_Yes");
                p.btnConfirm.move("476.00","10","110","40",null,null);

                p.btnSave.set_taborder("1");
                p.btnSave.set_text("저장");
                p.btnSave.set_cssclass("btn_WF_Yes");
                p.btnSave.move("457.00","30","100","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("20");
            obj.set_spacing("0px 10px 0px 10px");
            this.divPopBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divPopBtn.form
            obj = new Layout("mobile","",0,0,this.divPopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("20");
            obj.set_spacing("0px 10px 0px 10px");
            this.divPopBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1000,1600,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("디자인 자가 체크리스트");
                p.set_cssclass("CST001P03");

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_formscrollbartype("default autoindicator");
                p.divForm.set_maxwidth("");
                p.divForm.move("0","0","100.00%",null,null,"60");

                p.divGuide.set_taborder("1");
                p.divGuide.set_text("div00");
                p.divGuide.set_visible("false");
                p.divGuide.set_cssclass("div_GD_Tip");
                p.divGuide.move("1590.00","135","450","385",null,null);

                p.divPopBtn.set_taborder("2");
                p.divPopBtn.set_text("Div00");
                p.divPopBtn.set_cssclass("div_WF_PopBtn");
                p.divPopBtn.move("0",null,"100.00%","60",null,"0");
            	}
            );
            obj.set_mobileorientation("landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",480,700,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.divEdtPop.form.edtSlfCheckWrtrId","value","dsWrtr","slfCheckWrtrId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.calSlfCheckYmd","value","dsWrtr","slfCheckYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.txtRvwCn","value","dsWrtr","slfCheckRvwCn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CST001P03.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	CST001P03.xfdl
        *  @Creator 	ELUON INS
        *  @CreateDate 	2024/08/08
        *  @Desction
        *  @Author
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/08/08			이규철					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fvCurDate = this.gfnGetDate();

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수

        	this.fnInit();
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/


        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.fnSearch = function () {
        	var strSvcId    = "search";
        	var strSvcUrl   = "cst/bfh/instlBfhdSlfCheckListInq.do";
        	var inData      = "dsIn=dsSearch";
        	var outData     = "dsBfhdClsltn=dsBfhdClsltn dsList=dsList dsWrtr=dsWrtr dsDsinPicList=dsDsinPicList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc, 	// transaction의 결과를 받을 Function 이름
        						isAsync); 		// 비동기통신 여부 [생략가능]
        }

        this.fnSave = function () {
        	var strSvcId    = "save";
        	var strSvcUrl   = "cst/bfh/instlBfhdSlfCheckListStrg.do";
        	var inData      = "dsChkList=dsChkList:A dsWrtr=dsWrtr:A";
        	var outData     = "";
        	var strArg      = "bfhdCnsltnNo=" + this.sBfhdCnsltnNo;
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc, 	// transaction의 결과를 받을 Function 이름
        						isAsync); 		// 비동기통신 여부 [생략가능]
        }

        this.fnSendSms = function () {
        	//메시지 DataSet 클리어
        	this.dsMsg.clearData();

        	var strSvcId    = "sendSms";
        	var strSvcUrl   = "cst/bfh/instlBfhdSlfCheckSendSms.do";
        	var inData      = "dsWrtr=dsWrtr:A";
        	var outData     = "";
        	var strArg      = "bfhdCnsltnNo=" + this.sBfhdCnsltnNo;
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc, 	// transaction의 결과를 받을 Function 이름
        						isAsync); 		// 비동기통신 여부 [생략가능]
        }

        this.fnConfirm = function () {
        	//메시지 DataSet 클리어
        	this.dsMsg.clearData();

        	var strSvcId    = "confirm";
        	var strSvcUrl   = "cst/bfh/instlBfhdSlfCheckConfirm.do";
        	var inData      = "";
        	var outData     = "dsMsg=dsMsg";
        	var strArg      = "bfhdCnsltnNo=" + this.sBfhdCnsltnNo + " jobCd=TAS00501";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc, 	// transaction의 결과를 받을 Function 이름
        						isAsync); 		// 비동기통신 여부 [생략가능]
        }
        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function(svcId, errCd, errMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errCd != 0) { return; }

        	switch(svcId) {
        	case "search" :
        		try {
        			this.dsWrtr.updatecontrol = false;
        			this.dsChkList.updatecontrol = false;
        			if (this.dsWrtr.getRowCount() == 0) {
        				this.dsWrtr.clearData();
        				this.dsWrtr.addRow();
        				this.dsWrtr.setColumn(0, "slfCheckYmd", this.fvCurDate);
        				this.dsWrtr.setColumn(0, "slfCheckWrtrId", nexacro.getApplication().gdsUser.getColumn(0, "userId"));

        				this.dsWrtr.setRowType(0, Dataset.ROWTYPE_INSERT);

        				for (let i=0; i<this.dsChkList.getRowCount(); i++) {
        					this.dsChkList.setRowType(i, Dataset.ROWTYPE_INSERT);
        				}
        			}

        			else {

        				// 조회된 내용을 그리드에 표기하기 위해 처리
        				this.dsChkList.enableevent = false;
        				this.divForm.form.grdChkList.enableredraw = false;
        				for (let i=0; i<this.dsList.getRowCount(); i++) {
        					const nFindRow = this.dsChkList.findRowExpr(`slfCheckDvsCd == '${this.dsList.getColumn(i, "slfCheckDvsCd")}'
					                                          && slfCheckCd == '${this.dsList.getColumn(i, "slfCheckCd")}'`);
					this.dsChkList.setColumn(nFindRow, "slfCheckVal", this.dsList.getColumn(i, "slfCheckVal"));
        				}
        				this.divForm.form.grdChkList.enableredraw = true;
        				this.dsChkList.enableevent = true;

        				// 초기화
        				this.dsChkList.applyChange();
        			}
        		} finally {
        			this.dsWrtr.updatecontrol = true;
        			this.dsChkList.updatecontrol = true;
        		}

        		// 1. 등록자, 디자인 리스트 담당자 여부 확인(2025-01-08)
        		const gdsUser = nexacro.getApplication().gdsUser;
        		var gUserId = gdsUser.getColumn(0, "userId");
        		if(this.dsBfhdClsltn.getColumn(0, "aplcntId") == gUserId) {
        			//등록자일 때 저장버튼 보임
        			this.divPopBtn.form.btnSave.visible = true;
        		} else {
        			//등록자가 아닐 때 저장버튼 안 보임
        			this.divPopBtn.form.btnSave.visible = false;
        		}
        		var chkListFlag = false;
        		for (let i=0; i<this.dsDsinPicList.getRowCount(); i++) {
        			if(this.dsDsinPicList.getColumn(i, "dsinPicId") == gUserId) {
        				chkListFlag = true;
        				break;
        			}
        		}
        		if(chkListFlag) {
        			//디자인 리스트 담당자
        			this.divPopBtn.form.btnConfirm.visible = true;
        		} else {
        			//디자인 리스트 담당자에 없는 사람이라면 확인완료 버튼 안 보임
        			this.divPopBtn.form.btnConfirm.visible = false;
        		}

        		// 2. 현재 상태코드 확인
        		const sJobCd = this.dsBfhdClsltn.getColumn(0, "jobCd");
        		// 임시저장
        		if (sJobCd == "TAS00496") {
        			this.divPopBtn.form.btnConfirm.visible = false;
        		}
        		// 확인완료
        		else if (this.gfnIsNull(sJobCd) || sJobCd == "TAS00501") {
        			this.divForm.form.grdChkList.readonly = true;
        			this.divForm.form.calSlfCheckYmd.readonly = true;
        			this.divForm.form.divEdtPop.form.edtSlfCheckWrtrId.readonly = true;
        			this.divForm.form.divEdtPop.form.Button00.readonly = false;
        			this.divForm.form.txtRvwCn.readonly = true;
        			this.divForm.form.btnSendSms.enable = false;
        			this.divPopBtn.form.btnConfirm.visible = false;
        			this.divPopBtn.form.btnSave.visible = false;
        		}

        		break;

        	case "save" :
        		this.gfnAlertMsg("save", "MSG_001");
        		this.fnSearch();
        		break;

        	case "sendSms" :
        		if(this.gfnIsNull(this.dsMsg.getColumn(0, "msg"))) {
        			this.gfnAlertMsg("save", "CST_003");
        			this.fnSearch();
        		} else {
        			this.gfnAlertMsg("error", "MSG_011", [this.dsMsg.getColumn(0, "msg")]);	// 오류메시지 전달
        		}
        		break;

        	case "confirm" :
        		if(this.gfnIsNull(this.dsMsg.getColumn(0, "msg"))) {
        			this.gfnAlertMsg("save", "CST_003");
        			this.fnSearch();
        		} else {
        			this.gfnAlertMsg("error", "MSG_011", [this.dsMsg.getColumn(0, "msg")]);	// 오류메시지 전달
        		}

        		break;

        	default:
        		break;
        	}
        }
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function () {
        	this.dsList.clearData();

        	this.sBfhdCnsltnNo = this.getOwnerFrame().bfhdCnsltnNo;

        	if (this.gfnIsNull(this.sBfhdCnsltnNo)) {
        		return;
        	}

        	this.dsSearch.clearData();
        	this.dsSearch.addRow();
        	this.dsSearch.setColumn(0, "bfhdCnsltnNo", this.sBfhdCnsltnNo);
        	this.fnSearch();
        }
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        // 미관심의운영기준 다운로드
        this.divPopBtn_btnDownload_onclick = function(obj,e)
        {
        	this.gfnAlertMsg("msg", "MSG_007", ["미관심의운영기준 다운로드 준비 중입니다."]);
        };

        // 확인완료
        this.divPopBtn_btnConfirm_onclick = function(obj,e)
        {
        	const sCurJobCd = this.dsBfhdClsltn.getColumn(0, "jobCd");

        	// 임시저장, 종료
        	if (sCurJobCd == "TAS00496" || sCurJobCd == "TAS00501") {
        		this.gfnAlertMsg("valid", "MSG_011", ["처리 할 수 없습니다."]);
        		return;
        	}

        	// {0}(을)를 하시겠습니까?
        	this.gfnConfirmMsg("msg", "CST_001", (sMsgId, oRet) => {
        		if (!JSON.parse(oRet).result) return;
        		this.fnConfirm();
        	}, null, null, null, ["확인완료"]);
        };

        // 저장
        this.divPopBtn_btnSave_onclick = function(obj,e)
        {
        	const sCurJobCd = this.dsBfhdClsltn.getColumn(0, "jobCd");

        	// 임시저장, 종료
        	if (/*sCurJobCd == "TAS00496" || */sCurJobCd == "TAS00501") {
        		this.gfnAlertMsg("valid", "MSG_011", ["처리 할 수 없습니다."]);
        		return;
        	}

        	if (!this.gfnDsIsUpdated(this.dsChkList) && !this.gfnDsIsUpdated(this.dsWrtr)) {
        		this.gfnAlertMsg("valid", "MSG_004"); // 변경된 내역이 없습니다.
        		return;
        	}

        	// 누락된 검토의견
        	const nFindRow = this.dsChkList.findRowExpr("dataset.parent.gfnIsNull(slfCheckVal)");
        	if (nFindRow > -1) {
        		this.gfnAlertMsg("valid", "MSG_011", ["입력되지 않은 점검결과 값이 존재합니다."]);
        		this.dsChkList.set_rowposition(nFindRow);
        		this.divForm.form.grdChkList.setFocus();
        		this.divForm.form.grdChkList.setCellPos(4);
        		this.divForm.form.grdChkList.showEditor(true);
        		return;
        	}

        	// 자가 체크리스트작성일자, 자가체크리스트 작성자
        	if (this.gfnIsNull(this.dsWrtr.getColumn(0, "slfCheckYmd"))) {
        		this.divForm.form.calSlfCheckYmd.setFocus();
        		this.gfnAlertMsg("valid", "MSG_011", ["자가 체크리스트 작성일자는 필수입력 항목 입니다."]);
        		return;
        	}

        	else if (this.gfnIsNull(this.dsWrtr.getColumn(0, "slfCheckWrtrId"))) {
        		this.divForm.form.divEdtPop.form.edtSlfCheckWrtrId.setFocus();
        		this.gfnAlertMsg("valid", "MSG_011", ["자가 체크리스트 작성자는 필수입력 항목 입니다."]);
        		return;
        	}

        	// 저장 하시겠습니까?
        	this.gfnConfirmMsg("msg", "MSG_003", (sMsgId, oRet) => {
        		if (!JSON.parse(oRet).result) return;
        		this.fnSave();
        	});
        };

        // 검토의견발송
        this.divForm_btnSendSms_onclick = function(obj,e)
        {
        	const sSslfCheckRvwCn = this.dsWrtr.getColumn(0, "slfCheckRvwCn");
        	if (this.gfnIsNull(sSslfCheckRvwCn)) {
        		this.divForm.form.txtRvwCn.setFocus();
        		this.gfnAlertMsg("valid", "MSG_011", ["검토의견은 필수입력 항목 입니다."]);
        		return;
        	}

        	// {0}(을)를 하시겠습니까?
        	this.gfnConfirmMsg("msg", "CST_001", (sMsgId, oRet) => {
        		if (!JSON.parse(oRet).result) return;
        		this.fnSendSms();
        	}, null, null, null, ["검토의견발송"]);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.btnSendSms.addEventHandler("onclick",this.divForm_btnSendSms_onclick,this);
            this.divPopBtn.form.btnDownload.addEventHandler("onclick",this.divPopBtn_btnDownload_onclick,this);
            this.divPopBtn.form.btnConfirm.addEventHandler("onclick",this.divPopBtn_btnConfirm_onclick,this);
            this.divPopBtn.form.btnSave.addEventHandler("onclick",this.divPopBtn_btnSave_onclick,this);
            this.dsChkList.addEventHandler("oncolumnchanged",this.dsChkList_oncolumnchanged,this);
            this.dsBfhdClsltn.addEventHandler("oncolumnchanged",this.dsBfhdClsltn_oncolumnchanged,this);
            this.dsDsinPicList.addEventHandler("oncolumnchanged",this.dsDsinPicList_oncolumnchanged,this);
            this.dsDsinPicList.addEventHandler("cancolumnchange",this.dsDsinPicList_cancolumnchange,this);
        };
        this.loadIncludeScript("CST001P03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
