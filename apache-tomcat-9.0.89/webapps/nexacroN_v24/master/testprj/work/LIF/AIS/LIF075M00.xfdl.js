(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("LIF075M00");
            this.set_titletext("이동지역작업시간등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMenu00", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_CD\">01</Col><Col id=\"MENU_NM\">상세메뉴1</Col></Row><Row><Col id=\"MENU_CD\">02</Col><Col id=\"MENU_NM\">상세메뉴2</Col></Row><Row><Col id=\"MENU_CD\">03</Col><Col id=\"MENU_NM\">상세메뉴3</Col></Row><Row><Col id=\"MENU_CD\">04</Col><Col id=\"MENU_NM\">상세메뉴4</Col></Row><Row><Col id=\"MENU_CD\">05</Col><Col id=\"MENU_NM\">상세메뉴5</Col></Row><Row><Col id=\"MENU_CD\">06</Col><Col id=\"MENU_NM\">상세메뉴6</Col></Row><Row><Col id=\"MENU_CD\">07</Col><Col id=\"MENU_NM\">상세메뉴7</Col></Row><Row><Col id=\"MENU_CD\">08</Col><Col id=\"MENU_NM\">상세메뉴8</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsQuick", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"title\">기본정보</Col><Col id=\"code\">0</Col></Row><Row><Col id=\"title\">임차관련 정보</Col><Col id=\"code\">1</Col></Row><Row><Col id=\"title\">기타요청정보</Col><Col id=\"code\">2</Col></Row><Row><Col id=\"title\">증빙자료 첨부</Col><Col id=\"code\">3</Col></Row><Row><Col id=\"title\">임차희망서 검토의견</Col><Col id=\"code\">4</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cbo", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"hh\" type=\"STRING\" size=\"256\"/><Column id=\"mm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"hh\">선택</Col><Col id=\"code\">0</Col><Col id=\"mm\">선택</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"hh\">01</Col><Col id=\"mm\">5</Col></Row><Row><Col id=\"hh\">02</Col><Col id=\"code\">2</Col><Col id=\"mm\">10</Col></Row><Row><Col id=\"hh\">03</Col><Col id=\"code\">3</Col><Col id=\"mm\">15</Col></Row><Row><Col id=\"hh\">04</Col><Col id=\"code\">4</Col><Col id=\"mm\">20</Col></Row><Row><Col id=\"hh\">05</Col><Col id=\"code\">5</Col><Col id=\"mm\">25</Col></Row><Row><Col id=\"hh\">06</Col><Col id=\"code\">6</Col><Col id=\"mm\">30</Col></Row><Row><Col id=\"hh\">07</Col><Col id=\"code\">7</Col><Col id=\"mm\">35</Col></Row><Row><Col id=\"hh\">08</Col><Col id=\"code\">8</Col><Col id=\"mm\">40</Col></Row><Row><Col id=\"hh\">09</Col><Col id=\"code\">9</Col><Col id=\"mm\">45</Col></Row><Row><Col id=\"hh\">10</Col><Col id=\"code\">10</Col><Col id=\"mm\">50</Col></Row><Row><Col id=\"hh\">11</Col><Col id=\"code\">11</Col><Col id=\"mm\">60</Col></Row><Row><Col id=\"hh\">12</Col><Col id=\"code\">12</Col></Row><Row><Col id=\"hh\">13</Col><Col id=\"code\">13</Col></Row><Row><Col id=\"hh\">14</Col><Col id=\"code\">14</Col></Row><Row><Col id=\"code\">15</Col><Col id=\"hh\">15</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"신청번호\" type=\"STRING\" size=\"256\"/><Column id=\"단계\" type=\"STRING\" size=\"256\"/><Column id=\"구분\" type=\"STRING\" size=\"256\"/><Column id=\"종료구분\" type=\"STRING\" size=\"256\"/><Column id=\"서비스\" type=\"STRING\" size=\"256\"/><Column id=\"발생일시\" type=\"STRING\" size=\"256\"/><Column id=\"작성일시\" type=\"STRING\" size=\"256\"/><Column id=\"작성자명\" type=\"STRING\" size=\"256\"/><Column id=\"연락처\" type=\"STRING\" size=\"256\"/><Column id=\"업체명\" type=\"STRING\" size=\"256\"/><Column id=\"내용\" type=\"STRING\" size=\"256\"/><Column id=\"처리자명\" type=\"STRING\" size=\"256\"/><Column id=\"처리완료일시\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"신청번호\">ptn01</Col><Col id=\"단계\">이동지역</Col><Col id=\"구분\">2024-10-21</Col><Col id=\"종료구분\">전*동</Col><Col id=\"서비스\">0000100001</Col><Col id=\"발생일시\">대한항공</Col><Col id=\"작성일시\">110-81-*****</Col><Col id=\"작성자명\"/><Col id=\"연락처\">2050-06-11</Col><Col id=\"업체명\"/><Col id=\"내용\">032-***-0000</Col><Col id=\"처리자명\">010-****-5678</Col><Col id=\"처리완료일시\">○</Col></Row><Row><Col id=\"신청번호\">steg1</Col><Col id=\"단계\">입주자</Col><Col id=\"구분\">2024-10-15</Col><Col id=\"종료구분\">홍*동</Col><Col id=\"서비스\">100000001</Col><Col id=\"발생일시\">㈜대한항공</Col><Col id=\"작성일시\">110-81-*****</Col><Col id=\"작성자명\"/><Col id=\"연락처\">2050-07-10</Col></Row><Row><Col id=\"신청번호\">steg1</Col><Col id=\"단계\">공사직원</Col><Col id=\"구분\">2024-09-21</Col><Col id=\"종료구분\">오*수</Col><Col id=\"서비스\">100000001</Col><Col id=\"발생일시\">인천국제공항공사</Col><Col id=\"작성일시\">123-45-*****</Col><Col id=\"작성자명\"/><Col id=\"연락처\">9000-12-31</Col><Col id=\"업체명\">터미널건축팀</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTitle","0","0",null,"48","60",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divForm","0","divTitle:10",null,"930","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("divSch","0","0","100.00%","244",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panLabel","20","14","100%","146",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("0");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("40");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan01\"/><PanelItem id=\"PanelItem01\" componentid=\"pan02\"/><PanelItem id=\"PanelItem02\" componentid=\"pan03\"/><PanelItem id=\"PanelItem06\" componentid=\"pan04\"/><PanelItem id=\"PanelItem05\" componentid=\"pan05\"/><PanelItem id=\"PanelItem04\" componentid=\"pan06\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panClose","30","151","100%","30",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_SchLine");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnSchClose\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnSchClose","1251","185","52","29",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_SchClose");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panSchBtn","632","235","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("3");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnSch\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnSch","570","192","112","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("4");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Search");
            obj.set_fittocontents("width");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel03_01","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("5");
            obj.set_text("기준일자");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divCal","1030","75","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("6");
            obj.set_text("Div00");
            obj.set_flexgrow("1");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cbo00_01_00","0","0","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form.divCal.form);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_cbo");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_displaynulltext("선택");
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.divSch.form.divCal.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","0","0","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form.divCal.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.divSch.form.divCal.addChild(obj.name, obj);

            obj = new Static("staDash","Calendar00:10","0","10","40",null,null,null,null,null,null,this.divForm.form.divSch.form.divCal.form);
            obj.set_taborder("1");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_Dash");
            obj.set_fittocontents("width");
            this.divForm.form.divSch.form.divCal.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","staDash:10","0","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form.divCal.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.divSch.form.divCal.addChild(obj.name, obj);

            obj = new Panel("pan01","20.00","67","560","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("7");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("nowrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staLabel03_01\"/><PanelItem id=\"PanelItem01\" componentid=\"divCal\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("8");
            obj.set_text("처리자");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edt00_01_00","140.00","30","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("9");
            obj.set_flexgrow("1");
            obj.set_displaynulltext("검색어 입력");
            obj.set_text("");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan06","1694.00","398","560","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("10");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_01_00\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan02","20.00","67","560","1",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("11");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("nowrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel00","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("12");
            obj.set_text("신청번호");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edt00_01_00_00","140.00","30","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("13");
            obj.set_flexgrow("1");
            obj.set_displaynulltext("검색어 입력");
            obj.set_text("");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan03","1694.00","398","560","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("14");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_01_00_00\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("15");
            obj.set_text("신청자");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edt00_01_00_00_00","140.00","30","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("16");
            obj.set_flexgrow("1");
            obj.set_displaynulltext("검색어 입력");
            obj.set_text("");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan05","1694.00","398","560","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("17");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_01_00_00_00\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel00_01","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("18");
            obj.set_text("위치정보\r\n(룸번호)");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edt00_01_00_00_01","140.00","30","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("19");
            obj.set_flexgrow("1");
            obj.set_displaynulltext("검색어 입력");
            obj.set_text("");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan04","1694.00","398","560","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("20");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_01_00_00_01\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divGrd","0","divSch:54","100.00%","666",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn",null,"0","550","34","0",null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_fittocontents("width");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staTotal00\"/><PanelItem id=\"PanelItem02\" componentid=\"cmbGrdList\"/><PanelItem id=\"PanelItem03\" componentid=\"btnGrdDel\"/><PanelItem id=\"PanelItem04\" componentid=\"btnGrdRegi\"/><PanelItem id=\"PanelItem06\" componentid=\"btnGrdDw\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","0","PanelGrdBtn:10","100%",null,null,"46",null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("10");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"신청번호\"/><Cell col=\"1\" text=\"단계\"/><Cell col=\"2\" text=\"신청구분\"/><Cell col=\"3\" text=\"서비스구분\"/><Cell col=\"4\" text=\"작업명\"/><Cell col=\"5\" text=\"신청자\"/><Cell col=\"6\" text=\"등록자\"/><Cell col=\"7\" text=\"신청일시\"/><Cell col=\"8\" text=\"처리자\"/><Cell col=\"9\" text=\"처리작업그룹\"/><Cell col=\"10\" cssclass=\"CellEnd\" text=\"작업종료시간\"/></Band><Band id=\"body\"><Cell text=\"bind:calYmd\"/><Cell col=\"1\" text=\"bind:dowCd\"/><Cell col=\"2\" text=\"bind:hldyCd\"/><Cell col=\"3\" text=\"bind:frstRegDt\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\" cssclass=\"CellEnd\"/></Band></Format></Formats>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Div("divPage","0","Grid00_00:10",null,"36","0",null,null,null,"36",null,this.divForm.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_url("work::COM/util/paging/paging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDw","774.00","10","124","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("4");
            obj.set_text("다운로드(엑셀)");
            obj.set_cssclass("btn_WF_GrdDw");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","27","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("7");
            obj.set_text("총");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal01","staTotal:0","0","43","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("6");
            obj.set_text("1000");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal02","staTotal01:0","0","30","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("5");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDel","316.00","0","45","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("8");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("false");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdRegi","371.00","0","45","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("9");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_SmallBlack");
            obj.set_visible("false");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Combo("cmbGrdList","1230","0","80","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal00","1165","0","65","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_text("목록수");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Div("divGuide","1590.00","135","450","385",null,null,null,null,null,null,this);
            obj.set_taborder("2");
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
            // Layout Functions
            //-- Default Layout : this.divTitle
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.divSch.form.divCal.form
            obj = new Layout("default","",0,0,this.divForm.form.divSch.form.divCal.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.cbo00_01_00.set_taborder("3");
                p.cbo00_01_00.set_innerdataset("ds_cbo");
                p.cbo00_01_00.set_codecolumn("code");
                p.cbo00_01_00.set_datacolumn("data");
                p.cbo00_01_00.set_displaynulltext("선택");
                p.cbo00_01_00.set_text("");
                p.cbo00_01_00.set_index("-1");
                p.cbo00_01_00.move("0","0","100%","40",null,null);

                p.Calendar00.set_taborder("0");
                p.Calendar00.set_dateformat("yyyy-MM-dd");
                p.Calendar00.move("0","0","100%","40",null,null);

                p.staDash.set_taborder("1");
                p.staDash.set_text("~");
                p.staDash.set_cssclass("sta_WF_Dash");
                p.staDash.set_fittocontents("width");
                p.staDash.move("Calendar00:10","0","10","40",null,null);

                p.Calendar01.set_taborder("2");
                p.Calendar01.set_dateformat("yyyy-MM-dd");
                p.Calendar01.move("staDash:10","0","100%","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            this.divForm.form.divSch.form.divCal.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divSch.form.divCal.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divSch.form.divCal.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            this.divForm.form.divSch.form.divCal.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divSch.form
            obj = new Layout("default","",0,0,this.divForm.form.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panLabel.set_taborder("0");
                p.panLabel.set_verticalgap("8");
                p.panLabel.set_flexwrap("wrap");
                p.panLabel.set_spacing("0px 0px 10px 0px");
                p.panLabel.set_type("horizontal");
                p.panLabel.set_flexcrossaxisalign("start");
                p.panLabel.set_horizontalgap("40");
                p.panLabel.set_fittocontents("height");
                p.panLabel.set_maxheight("");
                p.panLabel.move("20","14","100%","146",null,null);

                p.panClose.set_taborder("2");
                p.panClose.set_type("vertical");
                p.panClose.set_cssclass("pal_WF_SchLine");
                p.panClose.set_flexcrossaxisalign("end");
                p.panClose.move("30","151","100%","30",null,null);

                p.btnSchClose.set_taborder("1");
                p.btnSchClose.set_cssclass("btn_WF_SchClose");
                p.btnSchClose.move("1251","185","52","29",null,null);

                p.panSchBtn.set_taborder("3");
                p.panSchBtn.set_flexmainaxisalign("center");
                p.panSchBtn.move("632","235","100%","40",null,null);

                p.btnSch.set_taborder("4");
                p.btnSch.set_text("조회하기");
                p.btnSch.set_cssclass("btn_WF_Search");
                p.btnSch.set_fittocontents("width");
                p.btnSch.move("570","192","112","40",null,null);

                p.staLabel03_01.set_taborder("5");
                p.staLabel03_01.set_text("기준일자");
                p.staLabel03_01.set_cssclass("sta_WF_SchLabel");
                p.staLabel03_01.set_flexshrink("0");
                p.staLabel03_01.set_maxwidth("");
                p.staLabel03_01.move("0","0","100","40",null,null);

                p.divCal.set_taborder("6");
                p.divCal.set_text("Div00");
                p.divCal.set_flexgrow("1");
                p.divCal.set_formscrollbartype("none none");
                p.divCal.set_formscrolltype("none");
                p.divCal.move("1030","75","100%","40",null,null);

                p.pan01.set_taborder("7");
                p.pan01.set_type("horizontal");
                p.pan01.set_horizontalgap("10");
                p.pan01.set_flexwrap("nowrap");
                p.pan01.set_fittocontents("height");
                p.pan01.set_flexgrow("1");
                p.pan01.set_minwidth("");
                p.pan01.move("20.00","67","560","40",null,null);

                p.staLabel.set_taborder("8");
                p.staLabel.set_text("처리자");
                p.staLabel.set_cssclass("sta_WF_SchLabel");
                p.staLabel.set_flexshrink("0");
                p.staLabel.set_minwidth("");
                p.staLabel.move("0","0","100","40",null,null);

                p.edt00_01_00.set_taborder("9");
                p.edt00_01_00.set_flexgrow("1");
                p.edt00_01_00.set_displaynulltext("검색어 입력");
                p.edt00_01_00.set_maxwidth("");
                p.edt00_01_00.move("140.00","30","100%","40",null,null);

                p.pan06.set_taborder("10");
                p.pan06.set_type("horizontal");
                p.pan06.set_horizontalgap("10");
                p.pan06.set_flexgrow("1");
                p.pan06.set_fittocontents("height");
                p.pan06.set_maxheight("");
                p.pan06.set_minwidth("");
                p.pan06.move("1694.00","398","560","40",null,null);

                p.pan02.set_taborder("11");
                p.pan02.set_type("horizontal");
                p.pan02.set_horizontalgap("10");
                p.pan02.set_flexwrap("nowrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_flexgrow("1");
                p.pan02.set_minwidth("");
                p.pan02.move("20.00","67","560","1",null,null);

                p.staLabel00.set_taborder("12");
                p.staLabel00.set_text("신청번호");
                p.staLabel00.set_cssclass("sta_WF_SchLabel");
                p.staLabel00.set_flexshrink("0");
                p.staLabel00.set_minwidth("");
                p.staLabel00.move("0","0","100","40",null,null);

                p.edt00_01_00_00.set_taborder("13");
                p.edt00_01_00_00.set_flexgrow("1");
                p.edt00_01_00_00.set_displaynulltext("검색어 입력");
                p.edt00_01_00_00.set_maxwidth("");
                p.edt00_01_00_00.move("140.00","30","100%","40",null,null);

                p.pan03.set_taborder("14");
                p.pan03.set_type("horizontal");
                p.pan03.set_horizontalgap("10");
                p.pan03.set_flexgrow("1");
                p.pan03.set_fittocontents("height");
                p.pan03.set_maxheight("");
                p.pan03.set_minwidth("");
                p.pan03.move("1694.00","398","560","40",null,null);

                p.staLabel00_00.set_taborder("15");
                p.staLabel00_00.set_text("신청자");
                p.staLabel00_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel00_00.set_flexshrink("0");
                p.staLabel00_00.set_minwidth("");
                p.staLabel00_00.move("0","0","100","40",null,null);

                p.edt00_01_00_00_00.set_taborder("16");
                p.edt00_01_00_00_00.set_flexgrow("1");
                p.edt00_01_00_00_00.set_displaynulltext("검색어 입력");
                p.edt00_01_00_00_00.set_maxwidth("");
                p.edt00_01_00_00_00.move("140.00","30","100%","40",null,null);

                p.pan05.set_taborder("17");
                p.pan05.set_type("horizontal");
                p.pan05.set_horizontalgap("10");
                p.pan05.set_flexgrow("1");
                p.pan05.set_fittocontents("height");
                p.pan05.set_maxheight("");
                p.pan05.set_minwidth("");
                p.pan05.move("1694.00","398","560","40",null,null);

                p.staLabel00_01.set_taborder("18");
                p.staLabel00_01.set_text("위치정보\r\n(룸번호)");
                p.staLabel00_01.set_cssclass("sta_WF_SchLabel");
                p.staLabel00_01.set_flexshrink("0");
                p.staLabel00_01.set_minwidth("");
                p.staLabel00_01.move("0","0","100","40",null,null);

                p.edt00_01_00_00_01.set_taborder("19");
                p.edt00_01_00_00_01.set_flexgrow("1");
                p.edt00_01_00_00_01.set_displaynulltext("검색어 입력");
                p.edt00_01_00_00_01.set_maxwidth("");
                p.edt00_01_00_00_01.move("140.00","30","100%","40",null,null);

                p.pan04.set_taborder("20");
                p.pan04.set_type("horizontal");
                p.pan04.set_horizontalgap("10");
                p.pan04.set_flexgrow("1");
                p.pan04.set_fittocontents("height");
                p.pan04.set_maxheight("");
                p.pan04.set_minwidth("");
                p.pan04.move("1694.00","398","560","40",null,null);
            	}
            );
            obj.set_spacing("14px 20px 12px 20px");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            this.divForm.form.divSch.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divSch.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_spacing("14px 20px 12px 20px");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            this.divForm.form.divSch.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divGrd.form.divPage
            obj = new Layout("default","",0,0,this.divForm.form.divGrd.form.divPage.form,function(p){});
            this.divForm.form.divGrd.form.divPage.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.PanelGrdBtn.set_taborder("3");
                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_fittocontents("width");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.move(null,"0","550","34","0",null);

                p.Grid00_00.set_taborder("10");
                p.Grid00_00.set_binddataset("dsList");
                p.Grid00_00.move("0","PanelGrdBtn:10","100%",null,null,"46");

                p.divPage.set_taborder("0");
                p.divPage.set_text("Div00");
                p.divPage.set_url("work::COM/util/paging/paging.xfdl");
                p.divPage.set_formscrollbartype("none none");
                p.divPage.set_formscrolltype("none");
                p.divPage.set_minheight("36");
                p.divPage.set_maxheight("");
                p.divPage.move("0","Grid00_00:10",null,"36","0",null);

                p.btnGrdDw.set_taborder("4");
                p.btnGrdDw.set_text("다운로드(엑셀)");
                p.btnGrdDw.set_cssclass("btn_WF_GrdDw");
                p.btnGrdDw.set_visible("true");
                p.btnGrdDw.set_fittocontents("width");
                p.btnGrdDw.move("774.00","10","124","34",null,null);

                p.staTotal.set_taborder("7");
                p.staTotal.set_text("총");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("width");
                p.staTotal.move("0","0","27","34",null,null);

                p.staTotal01.set_taborder("6");
                p.staTotal01.set_text("1000");
                p.staTotal01.set_cssclass("sta_WF_Total");
                p.staTotal01.set_usedecorate("true");
                p.staTotal01.set_fittocontents("width");
                p.staTotal01.move("staTotal:0","0","43","34",null,null);

                p.staTotal02.set_taborder("5");
                p.staTotal02.set_text("건");
                p.staTotal02.set_usedecorate("true");
                p.staTotal02.move("staTotal01:0","0","30","34",null,null);

                p.btnGrdDel.set_taborder("8");
                p.btnGrdDel.set_text("삭제");
                p.btnGrdDel.set_cssclass("btn_WF_SmallRed");
                p.btnGrdDel.set_visible("false");
                p.btnGrdDel.set_fittocontents("width");
                p.btnGrdDel.move("316.00","0","45","34",null,null);

                p.btnGrdRegi.set_taborder("9");
                p.btnGrdRegi.set_text("등록");
                p.btnGrdRegi.set_cssclass("btn_WF_SmallBlack");
                p.btnGrdRegi.set_visible("false");
                p.btnGrdRegi.set_fittocontents("width");
                p.btnGrdRegi.move("371.00","0","45","34",null,null);

                p.cmbGrdList.set_taborder("2");
                p.cmbGrdList.set_text("10");
                p.cmbGrdList.set_value("");
                p.cmbGrdList.set_index("-1");
                p.cmbGrdList.move("1230","0","80","34",null,null);

                p.staTotal00.set_taborder("1");
                p.staTotal00.set_text("목록수");
                p.staTotal00.set_cssclass("sta_WF_SchLabel");
                p.staTotal00.set_fittocontents("width");
                p.staTotal00.move("1165","0","65","34",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divGrd.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divSch.set_taborder("0");
                p.divSch.set_text("Div00");
                p.divSch.set_cssclass("div_WF_SchBg");
                p.divSch.set_formscrollbartype("none none");
                p.divSch.set_formscrolltype("none");
                p.divSch.set_fittocontents("height");
                p.divSch.move("0","0","100.00%","244",null,null);

                p.divGrd.set_taborder("1");
                p.divGrd.set_text("Div01");
                p.divGrd.set_fittocontents("height");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.move("0","divSch:54","100.00%","666",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("20");
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
            obj.set_verticalgap("20");
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
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Phone_screen",1480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("이동지역작업시간등록");

                p.divTitle.set_taborder("1");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.move("0","0",null,"48","60",null);

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_formscrollbartype("none none");
                p.divForm.set_formscrolltype("none");
                p.divForm.set_fittocontents("height");
                p.divForm.set_maxwidth("");
                p.divForm.move("0","divTitle:10",null,"930","60",null);

                p.divGuide.set_taborder("2");
                p.divGuide.set_text("div00");
                p.divGuide.set_visible("false");
                p.divGuide.set_cssclass("div_GD_Tip");
                p.divGuide.move("1590.00","135","450","385",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","",480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divForm.move("20","divTitle:10",null,"834","20",null);

                p.divTitle.move("0","0",null,"48","0",null);
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
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
            this._addPreloadList("fdl","work::COM/util/paging/paging.xfdl");
        };
        
        // User Script
        this.registerScript("LIF075M00.xfdl", function() {
        this.form_onload = function(obj,e)
        {
        	this.divForm.form.divSch.set_width("100%");
        	this.divForm.form.divSch.fittocontents = "height";
        }



        this.divForm_divSch_btnSchClose_onclick = function(obj,e)
        {
        	this.divForm.form.divSch.form.panLabel.fittocontents="none";
        	this.divForm.form.divSch.form.panLabel.set_height("45px");
        	this.divForm.form.divSch.fittocontents="none";
        	this.divForm.form.divSch.set_height("145px");
        	this.divForm.form.divSch.form.btnSchClose.set_cssclass("btn_WF_SchOpen");
        	this.resetScroll();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.divSch.form.btnSchClose.addEventHandler("onclick",this.divForm_divSch_btnSchClose_onclick,this);
            this.divForm.form.divSch.form.divCal.form.cbo00_01_00.addEventHandler("onitemchanged",this.cbo00_onitemchanged,this);
            this.divForm.form.divSch.form.staLabel.addEventHandler("onclick",this.divForm_divSch_staLabel_onclick,this);
            this.divForm.form.divSch.form.staLabel00.addEventHandler("onclick",this.divForm_divSch_staLabel_onclick,this);
            this.divForm.form.divSch.form.staLabel00_00.addEventHandler("onclick",this.divForm_divSch_staLabel_onclick,this);
            this.divForm.form.divSch.form.staLabel00_01.addEventHandler("onclick",this.divForm_divSch_staLabel_onclick,this);
        };
        this.loadIncludeScript("LIF075M00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
