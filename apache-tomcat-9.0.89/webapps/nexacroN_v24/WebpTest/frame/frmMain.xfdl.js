(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmMain");
            this.set_titletext("MainFrame");
            this.set_cssclass("frm_MF_Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1070,772);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsNotiList", this);
            obj._setContents("<ColumnInfo><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_DTTM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TITLE\">Nexacro 24 버전 출시</Col><Col id=\"INPT_DTTM\">2023-10-30</Col></Row><Row><Col id=\"TITLE\">프로젝트형 넥사크로 전문가 양성과정 안내</Col><Col id=\"INPT_DTTM\">2023-10-27</Col></Row><Row><Col id=\"TITLE\">투비소프트 고객지원 사이트 리뉴얼</Col><Col id=\"INPT_DTTM\">2023-10-27</Col></Row><Row><Col id=\"TITLE\">하반기 개발자 채용 공고</Col><Col id=\"INPT_DTTM\">2023-10-25</Col></Row><Row><Col id=\"TITLE\">법정의무교육 시행의 건</Col><Col id=\"INPT_DTTM\">2023-10-24</Col></Row><Row><Col id=\"TITLE\">하반기 신규입사자 교육 안내</Col><Col id=\"INPT_DTTM\">2023-10-20</Col></Row><Row><Col id=\"TITLE\">공휴일 및 주말 당직제도 안내</Col><Col id=\"INPT_DTTM\">2023-10-19</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTodo", this);
            obj._setContents("<ColumnInfo><Column id=\"INPT_EMP_NO\" type=\"string\" size=\"32\"/><Column id=\"START_TIME\" type=\"string\" size=\"32\"/><Column id=\"LAST_DATE\" type=\"string\" size=\"32\"/><Column id=\"CHGE_IP\" type=\"string\" size=\"32\"/><Column id=\"SCD_SECT_CD\" type=\"string\" size=\"32\"/><Column id=\"START_MINUTES\" type=\"string\" size=\"32\"/><Column id=\"END_DAY\" type=\"string\" size=\"32\"/><Column id=\"FILE_ID\" type=\"undefined\" size=\"0\"/><Column id=\"CHGE_ID\" type=\"string\" size=\"32\"/><Column id=\"CAL_DATE\" type=\"string\" size=\"32\"/><Column id=\"INPT_IP\" type=\"string\" size=\"32\"/><Column id=\"FIRST_DATE\" type=\"string\" size=\"32\"/><Column id=\"END_TIME\" type=\"string\" size=\"32\"/><Column id=\"SCD_ID\" type=\"bigdecimal\" size=\"16\"/><Column id=\"CHGE_DTTM\" type=\"datetime\" size=\"17\"/><Column id=\"SCD_NM\" type=\"string\" size=\"32\"/><Column id=\"TITLE\" type=\"string\" size=\"32\"/><Column id=\"SSC_CD_KORN_NM\" type=\"string\" size=\"32\"/><Column id=\"INPT_DTTM\" type=\"datetime\" size=\"17\"/><Column id=\"END_MINUTES\" type=\"string\" size=\"32\"/><Column id=\"SCD_CD\" type=\"string\" size=\"32\"/><Column id=\"START_DAY\" type=\"string\" size=\"32\"/><Column id=\"INPT_ID\" type=\"string\" size=\"32\"/><Column id=\"CLASSID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"INPT_EMP_NO\">관리자</Col><Col id=\"START_TIME\">10</Col><Col id=\"LAST_DATE\">20230930</Col><Col id=\"CHGE_IP\">172.10.11.205</Col><Col id=\"SCD_SECT_CD\">ED</Col><Col id=\"START_MINUTES\">00</Col><Col id=\"END_DAY\">20230922</Col><Col id=\"CHGE_ID\">0000000002</Col><Col id=\"CAL_DATE\">20230920</Col><Col id=\"INPT_IP\">172.10.11.205</Col><Col id=\"FIRST_DATE\">20230827</Col><Col id=\"END_TIME\">12</Col><Col id=\"SCD_ID\">2281</Col><Col id=\"CHGE_DTTM\">20230811141943000</Col><Col id=\"SCD_NM\">컨설팅팀</Col><Col id=\"TITLE\">모바일 교육</Col><Col id=\"SSC_CD_KORN_NM\">교육</Col><Col id=\"INPT_DTTM\">20230811141943000</Col><Col id=\"END_MINUTES\">00</Col><Col id=\"SCD_CD\">1010410</Col><Col id=\"START_DAY\">20230920</Col><Col id=\"INPT_ID\">0000000002</Col><Col id=\"CLASSID\">label05</Col></Row><Row><Col id=\"INPT_EMP_NO\">강남</Col><Col id=\"START_TIME\">10</Col><Col id=\"LAST_DATE\">20230930</Col><Col id=\"CHGE_IP\">172.10.11.205</Col><Col id=\"SCD_SECT_CD\">VC</Col><Col id=\"START_MINUTES\">00</Col><Col id=\"END_DAY\">20230922</Col><Col id=\"CHGE_ID\">0000000002</Col><Col id=\"CAL_DATE\">20230920</Col><Col id=\"INPT_IP\">172.10.11.205</Col><Col id=\"FIRST_DATE\">20230827</Col><Col id=\"END_TIME\">12</Col><Col id=\"SCD_ID\">2281</Col><Col id=\"CHGE_DTTM\">20230811141943000</Col><Col id=\"SCD_NM\">컨설팅팀</Col><Col id=\"TITLE\">개인휴가</Col><Col id=\"SSC_CD_KORN_NM\">휴가</Col><Col id=\"INPT_DTTM\">20230811141943000</Col><Col id=\"END_MINUTES\">00</Col><Col id=\"SCD_CD\">1010410</Col><Col id=\"START_DAY\">20230920</Col><Col id=\"INPT_ID\">0000000002</Col><Col id=\"CLASSID\">label03</Col></Row><Row><Col id=\"INPT_EMP_NO\">홍길동</Col><Col id=\"START_TIME\">14</Col><Col id=\"LAST_DATE\">20230930</Col><Col id=\"CHGE_IP\">172.10.11.205</Col><Col id=\"SCD_SECT_CD\">MT</Col><Col id=\"START_MINUTES\">00</Col><Col id=\"END_DAY\">20230922</Col><Col id=\"CHGE_ID\">0000000002</Col><Col id=\"CAL_DATE\">20230920</Col><Col id=\"INPT_IP\">172.10.11.205</Col><Col id=\"FIRST_DATE\">20230827</Col><Col id=\"END_TIME\">16</Col><Col id=\"SCD_ID\">2561</Col><Col id=\"CHGE_DTTM\">20230811141943000</Col><Col id=\"SCD_NM\">컨설팅팀</Col><Col id=\"TITLE\">프로젝트 투입관련 미팅</Col><Col id=\"SSC_CD_KORN_NM\">미팅</Col><Col id=\"INPT_DTTM\">20230811141943000</Col><Col id=\"END_MINUTES\">00</Col><Col id=\"SCD_CD\">1010410</Col><Col id=\"START_DAY\">20230920</Col><Col id=\"INPT_ID\">0000000002</Col><Col id=\"CLASSID\">label01</Col></Row><Row><Col id=\"INPT_EMP_NO\">이순신</Col><Col id=\"START_TIME\">09</Col><Col id=\"LAST_DATE\">20230930</Col><Col id=\"CHGE_IP\">172.10.11.171</Col><Col id=\"SCD_SECT_CD\">ED</Col><Col id=\"START_MINUTES\">00</Col><Col id=\"END_DAY\">20230922</Col><Col id=\"CHGE_ID\">0000000009</Col><Col id=\"CAL_DATE\">20230920</Col><Col id=\"INPT_IP\">172.10.11.171</Col><Col id=\"FIRST_DATE\">20230827</Col><Col id=\"END_TIME\">18</Col><Col id=\"SCD_ID\">2601</Col><Col id=\"CHGE_DTTM\">20230811141943000</Col><Col id=\"SCD_NM\">컨설팅팀</Col><Col id=\"TITLE\">컨버팅 교육</Col><Col id=\"SSC_CD_KORN_NM\">교육</Col><Col id=\"INPT_DTTM\">20230811141943000</Col><Col id=\"END_MINUTES\">00</Col><Col id=\"SCD_CD\">1010410</Col><Col id=\"START_DAY\">20230920</Col><Col id=\"INPT_ID\">0000000009</Col><Col id=\"CLASSID\">label05</Col></Row><Row><Col id=\"INPT_EMP_NO\">철수</Col><Col id=\"START_TIME\">09</Col><Col id=\"LAST_DATE\">20230930</Col><Col id=\"CHGE_IP\">172.10.11.171</Col><Col id=\"SCD_SECT_CD\">ED</Col><Col id=\"START_MINUTES\">00</Col><Col id=\"END_DAY\">20230929</Col><Col id=\"CHGE_ID\">0000000009</Col><Col id=\"CAL_DATE\">20230927</Col><Col id=\"INPT_IP\">172.10.11.171</Col><Col id=\"FIRST_DATE\">20230827</Col><Col id=\"END_TIME\">18</Col><Col id=\"SCD_ID\">2601</Col><Col id=\"CHGE_DTTM\">20230811141943000</Col><Col id=\"SCD_NM\">nexacro 24</Col><Col id=\"TITLE\">넥사크로 버전 교육</Col><Col id=\"SSC_CD_KORN_NM\">교육</Col><Col id=\"INPT_DTTM\">20230811141943000</Col><Col id=\"END_MINUTES\">00</Col><Col id=\"SCD_CD\">1010410</Col><Col id=\"START_DAY\">20230927</Col><Col id=\"INPT_ID\">0000000009</Col><Col id=\"CLASSID\">label05</Col></Row><Row><Col id=\"INPT_EMP_NO\">짱구</Col><Col id=\"START_TIME\">09</Col><Col id=\"LAST_DATE\">20230930</Col><Col id=\"CHGE_IP\">172.10.11.171</Col><Col id=\"SCD_SECT_CD\">ED</Col><Col id=\"START_MINUTES\">00</Col><Col id=\"END_DAY\">20230906</Col><Col id=\"CHGE_ID\">0000000009</Col><Col id=\"CAL_DATE\">20230906</Col><Col id=\"INPT_IP\">172.10.11.171</Col><Col id=\"FIRST_DATE\">20230827</Col><Col id=\"END_TIME\">18</Col><Col id=\"SCD_ID\">2601</Col><Col id=\"CHGE_DTTM\">20230811141943000</Col><Col id=\"SCD_NM\">지원</Col><Col id=\"TITLE\">템플릿 교육</Col><Col id=\"SSC_CD_KORN_NM\">교육</Col><Col id=\"INPT_DTTM\">20230811141943000</Col><Col id=\"END_MINUTES\">00</Col><Col id=\"SCD_CD\">1010410</Col><Col id=\"START_DAY\">20230906</Col><Col id=\"INPT_ID\">0000000009</Col><Col id=\"CLASSID\">label05</Col></Row><Row><Col id=\"INPT_EMP_NO\">투비</Col><Col id=\"START_TIME\">09</Col><Col id=\"LAST_DATE\">20230930</Col><Col id=\"CHGE_IP\">172.10.11.171</Col><Col id=\"SCD_SECT_CD\">ED</Col><Col id=\"START_MINUTES\">00</Col><Col id=\"END_DAY\">20230922</Col><Col id=\"CHGE_ID\">0000000009</Col><Col id=\"CAL_DATE\">20230908</Col><Col id=\"INPT_IP\">172.10.11.171</Col><Col id=\"FIRST_DATE\">20230827</Col><Col id=\"END_TIME\">18</Col><Col id=\"SCD_ID\">2601</Col><Col id=\"CHGE_DTTM\">20230811141943000</Col><Col id=\"SCD_NM\">지원</Col><Col id=\"TITLE\">개선된 교육</Col><Col id=\"SSC_CD_KORN_NM\">교육</Col><Col id=\"INPT_DTTM\">20230811141943000</Col><Col id=\"END_MINUTES\">00</Col><Col id=\"SCD_CD\">1010410</Col><Col id=\"START_DAY\">20230908</Col><Col id=\"INPT_ID\">0000000009</Col><Col id=\"CLASSID\">label05</Col></Row><Row><Col id=\"INPT_EMP_NO\">에즈이즈</Col><Col id=\"START_TIME\">09</Col><Col id=\"LAST_DATE\">20230930</Col><Col id=\"CHGE_IP\">172.10.11.171</Col><Col id=\"SCD_SECT_CD\">ED</Col><Col id=\"START_MINUTES\">00</Col><Col id=\"END_DAY\">20230922</Col><Col id=\"CHGE_ID\">0000000009</Col><Col id=\"CAL_DATE\">20230911</Col><Col id=\"INPT_IP\">172.10.11.171</Col><Col id=\"FIRST_DATE\">20230827</Col><Col id=\"END_TIME\">18</Col><Col id=\"SCD_ID\">2601</Col><Col id=\"CHGE_DTTM\">20230811141943000</Col><Col id=\"SCD_NM\">테스트</Col><Col id=\"TITLE\">통합테스트 사전 교육</Col><Col id=\"SSC_CD_KORN_NM\">교육</Col><Col id=\"INPT_DTTM\">20230811141943000</Col><Col id=\"END_MINUTES\">00</Col><Col id=\"SCD_CD\">1010410</Col><Col id=\"START_DAY\">20230911</Col><Col id=\"INPT_ID\">0000000009</Col><Col id=\"CLASSID\">label05</Col></Row><Row><Col id=\"INPT_EMP_NO\">test</Col><Col id=\"START_TIME\">09</Col><Col id=\"LAST_DATE\">20230930</Col><Col id=\"CHGE_IP\">172.10.11.171</Col><Col id=\"SCD_SECT_CD\">ED</Col><Col id=\"START_MINUTES\">00</Col><Col id=\"END_DAY\">20230912</Col><Col id=\"CHGE_ID\">0000000009</Col><Col id=\"CAL_DATE\">20230912</Col><Col id=\"INPT_IP\">172.10.11.171</Col><Col id=\"FIRST_DATE\">20230827</Col><Col id=\"END_TIME\">18</Col><Col id=\"SCD_ID\">2601</Col><Col id=\"CHGE_DTTM\">20230811141943000</Col><Col id=\"SCD_NM\">컨설팅사업1팀</Col><Col id=\"TITLE\">교육</Col><Col id=\"SSC_CD_KORN_NM\">교육</Col><Col id=\"INPT_DTTM\">20230811141943000</Col><Col id=\"END_MINUTES\">00</Col><Col id=\"SCD_CD\">1010410</Col><Col id=\"START_DAY\">20230911</Col><Col id=\"INPT_ID\">0000000009</Col><Col id=\"CLASSID\">label05</Col></Row><Row><Col id=\"INPT_EMP_NO\">김김철수</Col><Col id=\"START_TIME\">09</Col><Col id=\"LAST_DATE\">20230930</Col><Col id=\"CHGE_IP\">172.10.11.171</Col><Col id=\"SCD_SECT_CD\">ED</Col><Col id=\"START_MINUTES\">00</Col><Col id=\"END_DAY\">20230914</Col><Col id=\"CHGE_ID\">0000000009</Col><Col id=\"CAL_DATE\">20230914</Col><Col id=\"INPT_IP\">172.10.11.171</Col><Col id=\"FIRST_DATE\">20230827</Col><Col id=\"END_TIME\">18</Col><Col id=\"SCD_ID\">2601</Col><Col id=\"CHGE_DTTM\">20230811141943000</Col><Col id=\"SCD_NM\">컨설팅사업1팀</Col><Col id=\"TITLE\">단위테스트 교육</Col><Col id=\"SSC_CD_KORN_NM\">교육</Col><Col id=\"INPT_DTTM\">20230811141943000</Col><Col id=\"END_MINUTES\">00</Col><Col id=\"SCD_CD\">1010410</Col><Col id=\"START_DAY\">20230914</Col><Col id=\"INPT_ID\">0000000009</Col><Col id=\"CLASSID\">label05</Col></Row><Row><Col id=\"INPT_EMP_NO\">홍철수</Col><Col id=\"START_TIME\">09</Col><Col id=\"LAST_DATE\">20230930</Col><Col id=\"CHGE_IP\">172.10.11.171</Col><Col id=\"SCD_SECT_CD\">ED</Col><Col id=\"START_MINUTES\">00</Col><Col id=\"END_DAY\">20230914</Col><Col id=\"CHGE_ID\">0000000009</Col><Col id=\"CAL_DATE\">20230914</Col><Col id=\"INPT_IP\">172.10.11.171</Col><Col id=\"FIRST_DATE\">20230827</Col><Col id=\"END_TIME\">18</Col><Col id=\"SCD_ID\">2601</Col><Col id=\"CHGE_DTTM\">20230811141943000</Col><Col id=\"SCD_NM\">모듈테스트</Col><Col id=\"TITLE\">모듈테스트 교육</Col><Col id=\"SSC_CD_KORN_NM\">교육</Col><Col id=\"INPT_DTTM\">20230811141943000</Col><Col id=\"END_MINUTES\">00</Col><Col id=\"SCD_CD\">1010410</Col><Col id=\"START_DAY\">20230914</Col><Col id=\"INPT_ID\">0000000009</Col><Col id=\"CLASSID\">label05</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTodoGrid", this);
            obj._setContents("<ColumnInfo><Column id=\"CAL_IMAGE\" type=\"STRING\" size=\"256\"/><Column id=\"TODO_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TODO_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"TODO_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"CAL_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SCD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SCD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SCD_SECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SSC_CD_KORN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"START_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"START_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"START_MINUTES\" type=\"STRING\" size=\"256\"/><Column id=\"END_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"END_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"END_MINUTES\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_IP\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"CHGE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHGE_IP\" type=\"STRING\" size=\"256\"/><Column id=\"CHGE_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CLASSID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divMain","0","0","1070","772",null,null,"1070",null,"772",null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_cssclass("div_MF_Main");
            this.addChild(obj.name, obj);

            obj = new Div("divBoard","720","304","330","320",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("sta00","28","20","159","45",null,null,null,null,null,null,this.divMain.form.divBoard.form);
            obj.set_taborder("0");
            obj.set_text("공지사항");
            obj.set_cssclass("sta_MF_tile");
            this.divMain.form.divBoard.addChild(obj.name, obj);

            obj = new Button("btnPlus",null,"27","30","30","20",null,null,null,null,null,this.divMain.form.divBoard.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_MF_More");
            obj.getSetter("uLinkType").set("menu");
            obj.getSetter("uLinkUrl").set("10501001");
            this.divMain.form.divBoard.addChild(obj.name, obj);

            obj = new Grid("grdNoti","25","63",null,null,"20","25",null,null,null,null,this.divMain.form.divBoard.form);
            obj.set_taborder("2");
            obj.set_cssclass("grd_MF_Notice");
            obj.set_binddataset("dsNotiList");
            obj.set_autofittype("col");
            obj.set_scrollbardecbuttonsize("0");
            obj.set_scrollbarincbuttonsize("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"176\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\"/></Rows><Band id=\"body\"><Cell text=\"bind:TITLE\"/><Cell col=\"1\" text=\"bind:INPT_DTTM\" cssclass=\"cell_WF_Right,cell_WF_DecoNo\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
            this.divMain.form.divBoard.addChild(obj.name, obj);

            obj = new Div("divCalendar","20","304","680","320",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_MF_Box2");
            obj.set_background("");
            obj.set_text("");
            this.divMain.addChild(obj.name, obj);

            obj = new Calendar("calTodo","47","30",null,null,"376","30",null,null,null,null,this.divMain.form.divCalendar.form);
            obj.set_taborder("0");
            obj.set_type("monthonly");
            obj.set_usetrailingday("true");
            obj.set_weekformat("S M T W T F S");
            obj.set_innerdataset("dsTodo");
            obj.set_backgroundcolumn("CAL_IMAGE");
            obj.set_daysize("30 30");
            obj.set_datecolumn("CAL_DATE");
            obj.set_datepickerchangetype("spin");
            obj.set_cssclass("cal_MF_Cal");
            obj.set_value("20230920");
            obj.set_headheight("40");
            this.divMain.form.divCalendar.addChild(obj.name, obj);

            obj = new Div("divTodolist","370","304","330","320",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("2");
            obj.set_cssclass("div_MF_BoxColor");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("staTitle","35","22","159","45",null,null,null,null,null,null,this.divMain.form.divTodolist.form);
            obj.set_taborder("0");
            obj.set_text("TO-DO LIST");
            obj.set_cssclass("sta_MF_tile2");
            this.divMain.form.divTodolist.addChild(obj.name, obj);

            obj = new Button("btnNew",null,"29","30","30","20",null,null,null,null,null,this.divMain.form.divTodolist.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_MF_New");
            obj.getSetter("uLinkType").set("popup");
            obj.getSetter("uLinkUrl").set("add");
            this.divMain.form.divTodolist.addChild(obj.name, obj);

            obj = new Grid("grdTodo","30","75",null,null,"30","30",null,null,null,null,this.divMain.form.divTodolist.form);
            obj.set_taborder("2");
            obj.set_cssclass("grd_MF_Todo");
            obj.set_autofittype("col");
            obj.set_binddataset("dsTodo");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"40\"/><Column size=\"180\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:SCD_ID\"/><Cell col=\"1\" displaytype=\"text\" cssclass=\"bind:CLASSID\" text=\"bind:SSC_CD_KORN_NM\"/><Cell col=\"2\" text=\"bind:TITLE\" tooltiptext=\"expr:dataset.parent.fnGetWriterDate(dataset, currow)\" expr=\"expr:TITLE.length &gt; 13 ? TITLE.substr(0,13)+&apos;...&apos; : TITLE\"/><Cell col=\"3\" text=\"expr:INPT_EMP_NO.substr(0, INPT_EMP_NO.indexOf(&quot;(&quot;))\"/></Band></Format></Formats>");
            this.divMain.form.divTodolist.addChild(obj.name, obj);

            obj = new Button("btnRefresh",null,"29","30","30","50",null,null,null,null,null,this.divMain.form.divTodolist.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_MF_Restore");
            obj.set_visible("true");
            this.divMain.form.divTodolist.addChild(obj.name, obj);

            obj = new Div("divLink","20","100",null,"168","20",null,null,null,null,null,this.divMain.form);
            obj.set_taborder("3");
            obj.set_cssclass("div_MF_Box");
            this.divMain.addChild(obj.name, obj);

            obj = new Button("btnDevGuideDown","0","0","169","168",null,null,null,null,null,null,this.divMain.form.divLink.form);
            obj.set_taborder("0");
            obj.set_text("초보자를 위한 자습서");
            obj.set_cssclass("btn_MF_Quick01");
            obj.getSetter("uLinkUrl").set("http://docs.tobesoft.com/getting_started_nexacro_n_ko");
            obj.getSetter("uLinkType").set("url");
            this.divMain.form.divLink.addChild(obj.name, obj);

            obj = new Button("btnDsgGuideDown","173","0","168","168",null,null,null,null,null,null,this.divMain.form.divLink.form);
            obj.set_taborder("1");
            obj.set_text("개발도구가이드");
            obj.set_cssclass("btn_MF_Quick02");
            obj.getSetter("uLinkUrl").set("http://docs.tobesoft.com/development_tools_guide_nexacro_n_ko");
            obj.getSetter("uLinkType").set("url");
            this.divMain.form.divLink.addChild(obj.name, obj);

            obj = new Button("btnGoIdeaBoard","345","0","168","168",null,null,null,null,null,null,this.divMain.form.divLink.form);
            obj.set_taborder("2");
            obj.set_text("컴퍼넌트 활용 워크북");
            obj.set_cssclass("btn_MF_Quick03");
            obj.getSetter("uLinkUrl").set("http://docs.tobesoft.com/developer_guide_nexacro_n_ko");
            obj.getSetter("uLinkType").set("url");
            this.divMain.form.divLink.addChild(obj.name, obj);

            obj = new Button("btnGoSupport","862","0","168","168",null,null,null,null,null,null,this.divMain.form.divLink.form);
            obj.set_taborder("3");
            obj.set_text("기술지원");
            obj.set_cssclass("btn_MF_Quick06");
            obj.getSetter("uLinkUrl").set("http://support.tobesoft.co.kr/Support/index.html");
            obj.getSetter("uLinkType").set("url");
            this.divMain.form.divLink.addChild(obj.name, obj);

            obj = new Button("btnGoPlayNexacro","690","0","168","168",null,null,null,null,null,null,this.divMain.form.divLink.form);
            obj.set_taborder("4");
            obj.set_text("플레이넥사크로");
            obj.set_cssclass("btn_MF_Quick05");
            obj.getSetter("uLinkUrl").set("https://www.playnexacro.com/#");
            obj.getSetter("uLinkType").set("url");
            this.divMain.form.divLink.addChild(obj.name, obj);

            obj = new Button("btnGoTobesoft","517","0","169","168",null,null,null,null,null,null,this.divMain.form.divLink.form);
            obj.set_taborder("5");
            obj.set_text("투비소프트");
            obj.set_cssclass("btn_MF_Quick04");
            obj.getSetter("uLinkUrl").set("https://www.tobesoft.com/");
            obj.getSetter("uLinkType").set("url");
            this.divMain.form.divLink.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divMain.form.divBoard.form
            obj = new Layout("default","",0,0,this.divMain.form.divBoard.form,function(p){});
            this.divMain.form.divBoard.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain.form.divCalendar.form
            obj = new Layout("default","",0,0,this.divMain.form.divCalendar.form,function(p){});
            this.divMain.form.divCalendar.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain.form.divTodolist.form
            obj = new Layout("default","",0,0,this.divMain.form.divTodolist.form,function(p){});
            this.divMain.form.divTodolist.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain.form.divLink.form
            obj = new Layout("default","",0,0,this.divMain.form.divLink.form,function(p){});
            this.divMain.form.divLink.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain.form
            obj = new Layout("default","",0,0,this.divMain.form,function(p){});
            this.divMain.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1070,772,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmMain.xfdl", function() {
        /**
        *  PcMdi 프로젝트
        *  @FileName 	frmMain.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2023/10/30
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2023/10/30			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.nDivMainTerm 		= 10;  			//divMain 가로세로 최소 여백
        this.fvDate 			= ""; 			//TodoList에서 사용할 날짜
        this.objApp = nexacro.getApplication();
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.fnDivMainResize(); //div리사이즈(가운데로)

        	this.fvDate = this.divMain.form.divCalendar.form.calTodo.value;

        	this.fnSetCalImage();

        	this.fnSetTodoList();
        };

        //max size 변경
        this.form_onsize = function(obj,e)
        {
        	this.fnDivMainResize();
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        //main div 가운데정렬
        this.fnDivMainResize = function ()
        {
        	var nLeft = nexacro.round((this.getOffsetWidth() - this.divMain.getOffsetWidth() ) /2);
        	var nTop = nexacro.round((this.getOffsetHeight() - this.divMain.getOffsetHeight() ) /2);

        	if( nLeft < this.nDivMainTerm ) nLeft = this.nDivMainTerm;
        	if( nTop < this.nDivMainTerm ) nTop = this.nDivMainTerm;

        	this.divMain.move(nLeft, nTop);
        	this.resetScroll();
        };

        //TODO LIST 세팅
        this.fnSetTodoList = function ()
        {
        	this.dsTodoGrid.clearData();
        	this.dsTodo.set_enableevent(false);
        	this.divMain.form.divTodolist.form.grdTodo.set_binddataset("");

        	if(this.fvDate != "20230920")
        	{
        		this.divMain.form.divTodolist.form.staTitle.set_text(this.fvDate.substr(4,2) + "월 " + this.fvDate.substr(6,2) + "일"
        			+ " (" + this.gfnGetDayKor(this.fvDate) + ")");

        		this.dsTodo.filter("CAL_DATE=='"+this.fvDate+"'");
        	}
        	else
        	{
        		this.divMain.form.divTodolist.form.staTitle.set_text("09월 " + "20일"
        			+ " (" + this.gfnGetDayKor("20230920") + ")");

        		this.dsTodo.filter("CAL_DATE=='"+"20230920"+"'");
        	}

        	this.dsTodoGrid.copyData(this.dsTodo, true);

        	this.dsTodo.filter("");
        	this.divMain.form.divTodolist.form.grdTodo.set_binddataset("dsTodoGrid");
        	this.dsTodo.set_enableevent(true);
        };

        //링크처리 URL..
        this.fnSetLinkUrl = function (sUrl)
        {
        	if(system.navigatorname == "nexacro"){
        		system.execBrowser(sUrl);
        	}else{
        		var newwin = window.open('about:blank');
        		newwin.location.href = sUrl;
        	}
        };

        // 월 1~9까지 앞에 0 붙임.
        this.fnMakeMonth =function(nMonth)
        {
        	if(this.gfnIsNull(nMonth)) return;
        	if(10 > nMonth)  nMonth = "0"+nMonth;
        	return nMonth;
        };

        // todoGrid - tooltiptext
        this.fnGetWriterDate = function(dataset, currow)
        {
        	var sTitle		= dataset.getColumn(currow, 'TITLE');
        	var nStartDay	= dataset.getColumn(currow,'START_DAY');
        	var nEndDay	 	= dataset.getColumn(currow,'END_DAY');
        	var nStartTime	= dataset.getColumn(currow,'START_TIME');
        	var nStartMinutes = dataset.getColumn(currow, 'START_MINUTES');
        	var nEndTime	= dataset.getColumn(currow, 'END_TIME');
        	var nEndMinutes	= dataset.getColumn(currow, 'END_MINUTES');
        	var sRtn	  = "";

        	if(nStartDay == nEndDay){
        		sRtn = sTitle + " [" + nStartDay.substr(0,4) + "." + nStartDay.substr(4,2) + "." + nStartDay.substr(6,2) + "(" + this.gfnGetDayKor(nStartDay) + ") "
        			   + nStartTime + ":" + nStartMinutes + " ~ " + nEndTime + ":" + nEndMinutes + "]" ;
        	}else{
        		sRtn = sTitle + " [" + nStartDay.substr(0,4) + "." + nStartDay.substr(4,2) + "." + nStartDay.substr(6,2) + "(" + this.gfnGetDayKor(nStartDay) + ") "
        			   + nStartTime + ":" + nStartMinutes +  " ~ "
        			   + nEndDay.substr(0,4) + "." + nEndDay.substr(4,2) + "." + nEndDay.substr(6,2) + "(" + this.gfnGetDayKor(nEndDay) + ") " + nEndTime + ":" + nEndMinutes + "]";
        	}

        	return sRtn;
        }

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        //캘린더 하단에 . 표시(일정이 있을 경우);
        this.fnSetCalImage = function()
        {
        	this.dsTodo.set_enableevent(false);
        	this.dsTodo.addColumn("CAL_IMAGE", "STRING");
         	for(var i=0; i<this.dsTodo.getRowCount(); i++){
         		this.dsTodo.setColumn(i, "CAL_IMAGE", "url('theme://images/cal_MF_Dot.png') no-repeat center bottom");
         	}
        	this.dsTodo.set_enableevent(true);
        }

        //TODO
        this.divMain_divCalendar_calTodo_ondayclick = function(obj,e)
        {
        	//this.fvDate = e.date;
        	//2022.08.03 분기 후 값 대입하는 것으로 변경.

        	//다른 달을 클릭하면 해당 월 일정 조회
        	if(e.date.substr(0,6)!=this.fvDate.substr(0,6)){
        		this.fvDate = e.date;
        	}else{
        		this.fvDate = e.date;
        		this.fnSetTodoList();
        	}
        };

        //Link 클릭
        this.btnLink_onclick = function(obj,e)
        {
        	var sUrl = obj.uLinkUrl;
        	var sLinkType = obj.uLinkType;

        	//링크타입별 처리
        	switch(sLinkType) {
        		case "url":
        			this.fnSetLinkUrl(sUrl);
        			break;
        	}
        };

        // 캘린더 <>버튼
        this.divMain_divCalendar_calTodo_onlbuttonup = function(obj,e)
        {
        	var sName = e.fromreferenceobject.name;
        	if(sName=='nextbutton'){
        		this.fvDate = this.gfnAddMonth(this.fvDate.substr(0,6)+"01", +1);
        		if(this.fvDate.substr(0,6)==this.gfnGetDate().substr(0,6))  this.fvDate = this.gfnGetDate();
        	}else if(sName=='prevbutton'){
        		this.fvDate = this.gfnAddMonth(this.fvDate.substr(0,6)+"01", -1);
        		if(this.fvDate.substr(0,6)==this.gfnGetDate().substr(0,6))  this.fvDate = this.gfnGetDate();
        	}
        };

        // 캘린더 년도,월 변경 후 엔터 눌렀을 경우.
        this.divMain_divCalendar_calTodo_onkeydown = function(obj,e)
        {
        	if( e.keycode == "13" && e.fromreferenceobject.name =="spinedit"){
        		var nSpinYyyy	= this.divMain.form.divCalendar.form.calTodo.datepicker.head.yearspin.spinedit.value;
        		var nSpinMm		= this.fnMakeMonth(this.divMain.form.divCalendar.form.calTodo.datepicker.head.monthspin.spinedit.value);
        		var nTodayYyyy	= this.gfnGetDate().substr(0,4);
        		var nTodayMm	= this.gfnGetDate().substr(4,2);
        		var nTodayDd	= this.gfnGetDate().substr(6,2);

        		if(nSpinYyyy+nSpinMm == nTodayYyyy+nTodayMm){
        			obj.set_value(nTodayYyyy+nTodayMm+nTodayDd);
        			this.fvDate = nTodayYyyy+nTodayMm;
        		}else{
        			obj.set_value(nSpinYyyy+nSpinMm+"01");
        			this.fvDate = nSpinYyyy+nSpinMm;
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.divMain.form.divBoard.form.sta00.addEventHandler("onclick",this.divMain_divBoard_sta00_onclick,this);
            this.divMain.form.divCalendar.form.calTodo.addEventHandler("ondayclick",this.divMain_divCalendar_calTodo_ondayclick,this);
            this.divMain.form.divCalendar.form.calTodo.addEventHandler("onlbuttonup",this.divMain_divCalendar_calTodo_onlbuttonup,this);
            this.divMain.form.divCalendar.form.calTodo.addEventHandler("onkeydown",this.divMain_divCalendar_calTodo_onkeydown,this);
            this.divMain.form.divTodolist.form.btnNew.addEventHandler("onclick",this.btnLink_onclick,this);
            this.divMain.form.divLink.form.btnDevGuideDown.addEventHandler("onclick",this.btnLink_onclick,this);
            this.divMain.form.divLink.form.btnDsgGuideDown.addEventHandler("onclick",this.btnLink_onclick,this);
            this.divMain.form.divLink.form.btnGoIdeaBoard.addEventHandler("onclick",this.btnLink_onclick,this);
            this.divMain.form.divLink.form.btnGoSupport.addEventHandler("onclick",this.btnLink_onclick,this);
            this.divMain.form.divLink.form.btnGoPlayNexacro.addEventHandler("onclick",this.btnLink_onclick,this);
            this.divMain.form.divLink.form.btnGoTobesoft.addEventHandler("onclick",this.btnLink_onclick,this);
        };
        this.loadIncludeScript("frmMain.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
