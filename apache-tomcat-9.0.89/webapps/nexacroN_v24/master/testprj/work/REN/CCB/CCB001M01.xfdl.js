(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CCB001M01");
            this.set_titletext("TSP 개발자 소통채널 상세");
            this.set_scrollbartype("none none");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(850,780);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsQuick", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"title\">기본정보</Col><Col id=\"code\">0</Col></Row><Row><Col id=\"title\">임차관련 정보</Col><Col id=\"code\">1</Col></Row><Row><Col id=\"title\">기타요청정보</Col><Col id=\"code\">2</Col></Row><Row><Col id=\"title\">증빙자료 첨부</Col><Col id=\"code\">3</Col></Row><Row><Col id=\"title\">임차희망서 검토의견</Col><Col id=\"code\">4</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGet", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"bbsMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bbsDvs\" type=\"STRING\" size=\"256\"/><Column id=\"titl\" type=\"STRING\" size=\"256\"/><Column id=\"cn\" type=\"STRING\" size=\"256\"/><Column id=\"wrtr\" type=\"STRING\" size=\"256\"/><Column id=\"wrtDt\" type=\"STRING\" size=\"256\"/><Column id=\"inqCnt\" type=\"STRING\" size=\"256\"/><Column id=\"delYmd\" type=\"STRING\" size=\"256\"/><Column id=\"atchFileMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"fullName\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cdId\">10</Col><Col id=\"cdNm\">공지사항</Col></Row><Row><Col id=\"cdId\">20</Col><Col id=\"cdNm\">자유게시판</Col></Row><Row><Col id=\"cdId\">31</Col><Col id=\"cdNm\">공통기능(API)</Col></Row><Row><Col id=\"cdId\">32</Col><Col id=\"cdNm\">공통화면</Col></Row><Row><Col id=\"cdId\">33</Col><Col id=\"cdNm\">표준문서</Col></Row><Row><Col id=\"cdId\">34</Col><Col id=\"cdNm\">참고문서</Col></Row><Row><Col id=\"cdId\">40</Col><Col id=\"cdNm\">테이블</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"fullName\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCmntList", this);
            obj._setContents("<ColumnInfo><Column id=\"cmntMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bbsMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"cnt\" type=\"STRING\" size=\"256\"/><Column id=\"cmntCn\" type=\"STRING\" size=\"256\"/><Column id=\"cmntWrtr\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staState","0","42","100.00%",null,null,"1458",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("표는 필수 입력 사항입니다.");
            obj.set_cssclass("sta_WF_EsentialTxt");
            this.addChild(obj.name, obj);

            obj = new RaonkUpload("RaonkUpload","728.00","876","68.82%","200",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_DevelopLangage("JAVA");
            obj.set_ExtensionAllowOrLimit("1");
            obj.set_RunTimes("html5");
            obj.set_ButtonBarView("0");
            obj.set_visible("false");
            obj.set_AllowDuplicationFile("1");
            obj.set_text("");
            obj.set_DisableDeleteConfirm("1");
            this.addChild(obj.name, obj);

            obj = new Div("divForm","0","0","100.00%","780",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_01","20","5","100%","60",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("17");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_type("vertical");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("start");
            obj.set_spacing("15px 0px 0px 5px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sttTitl\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel","0","0","800","800",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("13");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel03\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel04\"/><PanelItem id=\"PanelItem05\" componentid=\"Panel05\"/><PanelItem id=\"PanelItem06\" componentid=\"Panel06\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel04","0","112","100%","210",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("15");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Panel04_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel04_02\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel05_01_01_01","560","397","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("47");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel02","20","74","100%","55",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("12");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_01\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel05","10","98","80","200",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("내용*  ");
            obj.set_cssclass("sta_WF_Label");
            obj.set_background("#d4f4fa");
            obj.set_textAlign("center");
            this.divForm.addChild(obj.name, obj);

            obj = new TextArea("txtAreaCn","0","220","99.98422784011537%","200",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("4");
            obj.set_maxlength("1000");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01","20","74","100%","60",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("14");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_02\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("sttTitl","20.00","10","100%","60",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("16");
            obj.set_fittocontents("height");
            obj.set_font("bold 24px/normal \"pretendard\"");
            obj.set_text("제목");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnReg","228.00","17","80","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("7");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Yes");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnDel","268.00","17","80","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("8");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_No");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnClose","306.00","17","80","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("9");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_No");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02","228.00","17","70%","60",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("18");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexcrossaxisalign("center");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 0px 0px 46px");
            obj.set_tabledirection("horizontal");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnReg\"/><PanelItem id=\"PanelItem01\" componentid=\"btnDel\"/><PanelItem id=\"PanelItem02\" componentid=\"btnClose\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel02_01","21","68","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("19");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("start");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtTitl\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel01_00","0","0","80","45",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("20");
            obj.set_text("제목*  ");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexshrink("0");
            obj.set_background("#d4f4fa");
            obj.set_textAlign("center");
            this.divForm.addChild(obj.name, obj);

            obj = new Edit("edtTitl","841","24","100%","45",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_flexgrow("1");
            obj.set_maxlength("50");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel05_00","0","400","90","110",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("21");
            obj.set_text("첨부파일  ");
            obj.set_cssclass("sta_WF_Label");
            obj.set_background("#d4f4fa");
            obj.set_textAlign("center");
            this.divForm.addChild(obj.name, obj);

            obj = new Grid("fileGrid","20.00","114","550","110",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("22");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("none");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_autosizingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panFileGrid","40","480","100%","120",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("23");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"fileGrid\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panFileNum","20","190","550","120",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("24");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("5");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("start");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileGrid\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btn_file_1","124","58","125","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("5");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btn_del_file_1","512","135","120","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("6");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panBtnDel","517","141","200","100",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("25");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("start");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_spacing("0px 0px 0px 10px");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Panel05_01_01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel05_01_01_02\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel05_01_01","20","51","100%","110",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("26");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("start");
            obj.set_spacing("0px 0px 0px 10px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"panFileNum\"/><PanelItem id=\"PanelItem00\" componentid=\"panBtnDel\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel05_01","20","430","100%","130",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("27");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel05_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel05_01_01\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00","0","0","80","45",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("29");
            obj.set_text("작성자*  ");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            obj.set_background("#d4f4fa");
            obj.set_textAlign("center");
            this.divForm.addChild(obj.name, obj);

            obj = new Edit("edtWrtr","841","24","100%","45",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_flexgrow("1");
            obj.set_readonly("true");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel03_01","21","68","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("30");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("start");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edtWrtr\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel03","20","74","100%","55",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("31");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("start");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel03_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel03_02\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel03_03\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel04_01","8","183","90","200",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("37");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel04_02","90","170","100%","200",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("38");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"txtAreaCn\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel05","0","391","100.00%","120",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("28");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("start");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel05_01\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel05_01_01_02","549","419","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("48");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_del_file_1\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00","0","0","80","45",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("32");
            obj.set_text("작성일자*");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            obj.set_background("#d4f4fa");
            obj.set_textAlign("left");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel03_02","21","68","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("33");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("start");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 0px 0px 10px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Calendar01\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_01","0","0","80","45",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("34");
            obj.set_text("조회수");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            obj.set_background("#d4f4fa");
            obj.set_textAlign("left");
            this.divForm.addChild(obj.name, obj);

            obj = new Edit("edtInqCnt","841","24","100%","45",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("35");
            obj.set_flexgrow("1");
            obj.set_readonly("true");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel03_03","21","68","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("36");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("start");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 0px 0px 10px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"edtInqCnt\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("lblCmnt","0","0","100%","45",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("39");
            obj.set_text("댓글");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexshrink("0");
            obj.set_background("#d4f4fa");
            obj.set_textAlign("left");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel06_01","21","68","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("40");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("start");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"lblCmnt\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel06","20","74","100%","280",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("41");
            obj.set_flexcrossaxisalign("start");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel06_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel06_02\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel06_03\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Edit("edtCmntCn","841","24","100%","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("10");
            obj.set_flexgrow("1");
            obj.set_maxlength("50");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel06_03","21","68","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("42");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("start");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel07\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel06_02","20","74","100%","160",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("43");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"grdList\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel07","648","868","141","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("46");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnCmntReg\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel00","7","858","617","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("45");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"edtCmntCn\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Grid("grdList","0","44","100.00%","160",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("44");
            obj.set_binddataset("dsCmntList");
            obj.set_autofittype("col");
            obj.set_autosizingtype("col");
            obj.set_scrollbartype("auto");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"48\"/></Rows><Band id=\"body\"><Cell text=\"bind:cmntCn\"/></Band></Format></Formats>");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnCmntReg","228.00","17","100","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("11");
            obj.set_text("댓글저장");
            obj.set_cssclass("btn_WF_No");
            this.divForm.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","180.00","0","200","45",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("true");
            this.divForm.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel01_01.set_taborder("17");
                p.Panel01_01.set_flexcrossaxiswrapalign("start");
                p.Panel01_01.set_type("vertical");
                p.Panel01_01.set_flexcrossaxisalign("start");
                p.Panel01_01.set_flexmainaxisalign("start");
                p.Panel01_01.set_spacing("15px 0px 0px 5px");
                p.Panel01_01.move("20","5","100%","60",null,null);

                p.Panel.set_taborder("13");
                p.Panel.set_type("vertical");
                p.Panel.move("0","0","800","800",null,null);

                p.Panel04.set_taborder("15");
                p.Panel04.set_flexcrossaxisalign("start");
                p.Panel04.set_horizontalgap("10");
                p.Panel04.move("0","112","100%","210",null,null);

                p.Panel05_01_01_01.set_taborder("47");
                p.Panel05_01_01_01.move("560","397","100%","50",null,null);

                p.Panel02.set_taborder("12");
                p.Panel02.move("20","74","100%","55",null,null);

                p.staLabel05.set_taborder("0");
                p.staLabel05.set_text("내용*  ");
                p.staLabel05.set_cssclass("sta_WF_Label");
                p.staLabel05.set_background("#d4f4fa");
                p.staLabel05.set_textAlign("center");
                p.staLabel05.move("10","98","80","200",null,null);

                p.txtAreaCn.set_taborder("4");
                p.txtAreaCn.set_maxlength("1000");
                p.txtAreaCn.move("0","220","99.98422784011537%","200",null,null);

                p.Panel01.set_taborder("14");
                p.Panel01.move("20","74","100%","60",null,null);

                p.sttTitl.set_taborder("16");
                p.sttTitl.set_fittocontents("height");
                p.sttTitl.set_font("bold 24px/normal \"pretendard\"");
                p.sttTitl.set_text("제목");
                p.sttTitl.move("20.00","10","100%","60",null,null);

                p.btnReg.set_taborder("7");
                p.btnReg.set_text("저장");
                p.btnReg.set_cssclass("btn_WF_Yes");
                p.btnReg.move("228.00","17","80","40",null,null);

                p.btnDel.set_taborder("8");
                p.btnDel.set_text("삭제");
                p.btnDel.set_cssclass("btn_WF_No");
                p.btnDel.move("268.00","17","80","40",null,null);

                p.btnClose.set_taborder("9");
                p.btnClose.set_text("닫기");
                p.btnClose.set_cssclass("btn_WF_No");
                p.btnClose.move("306.00","17","80","40",null,null);

                p.Panel01_02.set_taborder("18");
                p.Panel01_02.set_flexcrossaxiswrapalign("start");
                p.Panel01_02.set_flexcrossaxisalign("center");
                p.Panel01_02.set_horizontalgap("10");
                p.Panel01_02.set_spacing("0px 0px 0px 46px");
                p.Panel01_02.set_tabledirection("horizontal");
                p.Panel01_02.set_flexmainaxisalign("end");
                p.Panel01_02.move("228.00","17","70%","60",null,null);

                p.Panel02_01.set_taborder("19");
                p.Panel02_01.set_flexcrossaxiswrapalign("start");
                p.Panel02_01.set_flexcrossaxisalign("center");
                p.Panel02_01.set_flexmainaxisalign("start");
                p.Panel02_01.set_horizontalgap("10");
                p.Panel02_01.move("21","68","100%","50",null,null);

                p.staLabel01_00.set_taborder("20");
                p.staLabel01_00.set_text("제목*  ");
                p.staLabel01_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00.set_flexshrink("0");
                p.staLabel01_00.set_background("#d4f4fa");
                p.staLabel01_00.set_textAlign("center");
                p.staLabel01_00.set_maxwidth("");
                p.staLabel01_00.move("0","0","80","45",null,null);

                p.edtTitl.set_taborder("1");
                p.edtTitl.set_flexgrow("1");
                p.edtTitl.set_maxlength("50");
                p.edtTitl.move("841","24","100%","45",null,null);

                p.staLabel05_00.set_taborder("21");
                p.staLabel05_00.set_text("첨부파일  ");
                p.staLabel05_00.set_cssclass("sta_WF_Label");
                p.staLabel05_00.set_background("#d4f4fa");
                p.staLabel05_00.set_textAlign("center");
                p.staLabel05_00.move("0","400","90","110",null,null);

                p.fileGrid.set_taborder("22");
                p.fileGrid.set_binddataset("dsFile1");
                p.fileGrid.set_autofittype("none");
                p.fileGrid.set_cssclass("grd_WF_FileAdd");
                p.fileGrid.set_autosizingtype("none");
                p.fileGrid.move("20.00","114","550","110",null,null);

                p.panFileGrid.set_taborder("23");
                p.panFileGrid.move("40","480","100%","120",null,null);

                p.panFileNum.set_taborder("24");
                p.panFileNum.set_flexgrow("1");
                p.panFileNum.set_horizontalgap("5");
                p.panFileNum.set_flexcrossaxisalign("start");
                p.panFileNum.set_flexcrossaxiswrapalign("start");
                p.panFileNum.set_type("vertical");
                p.panFileNum.set_flexmainaxisalign("start");
                p.panFileNum.move("20","190","550","120",null,null);

                p.btn_file_1.set_taborder("5");
                p.btn_file_1.set_text("파일선택");
                p.btn_file_1.set_cssclass("btn_WF_FileUp");
                p.btn_file_1.move("124","58","125","40",null,null);

                p.btn_del_file_1.set_taborder("6");
                p.btn_del_file_1.set_text("전체파일삭제");
                p.btn_del_file_1.set_cssclass("btn_WF_FileDel");
                p.btn_del_file_1.set_fittocontents("width");
                p.btn_del_file_1.move("512","135","120","40",null,null);

                p.panBtnDel.set_taborder("25");
                p.panBtnDel.set_flexcrossaxisalign("start");
                p.panBtnDel.set_flexmainaxisalign("start");
                p.panBtnDel.set_flexgrow("1");
                p.panBtnDel.set_horizontalgap("10");
                p.panBtnDel.set_flexcrossaxiswrapalign("start");
                p.panBtnDel.set_spacing("0px 0px 0px 10px");
                p.panBtnDel.set_type("vertical");
                p.panBtnDel.move("517","141","200","100",null,null);

                p.Panel05_01_01.set_taborder("26");
                p.Panel05_01_01.set_flexcrossaxisalign("start");
                p.Panel05_01_01.set_flexcrossaxiswrapalign("start");
                p.Panel05_01_01.set_flexmainaxisalign("start");
                p.Panel05_01_01.set_spacing("0px 0px 0px 10px");
                p.Panel05_01_01.move("20","51","100%","110",null,null);

                p.Panel05_01.set_taborder("27");
                p.Panel05_01.move("20","430","100%","130",null,null);

                p.staLabel01_00_00.set_taborder("29");
                p.staLabel01_00_00.set_text("작성자*  ");
                p.staLabel01_00_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel01_00_00.set_flexshrink("0");
                p.staLabel01_00_00.set_background("#d4f4fa");
                p.staLabel01_00_00.set_textAlign("center");
                p.staLabel01_00_00.set_maxwidth("");
                p.staLabel01_00_00.move("0","0","80","45",null,null);

                p.edtWrtr.set_taborder("2");
                p.edtWrtr.set_flexgrow("1");
                p.edtWrtr.set_readonly("true");
                p.edtWrtr.move("841","24","100%","45",null,null);

                p.Panel03_01.set_taborder("30");
                p.Panel03_01.set_flexcrossaxiswrapalign("start");
                p.Panel03_01.set_flexcrossaxisalign("center");
                p.Panel03_01.set_flexmainaxisalign("start");
                p.Panel03_01.set_horizontalgap("10");
                p.Panel03_01.move("21","68","100%","50",null,null);

                p.Panel03.set_taborder("31");
                p.Panel03.set_flexcrossaxisalign("start");
                p.Panel03.set_flexcrossaxiswrapalign("start");
                p.Panel03.set_flexmainaxisalign("start");
                p.Panel03.move("20","74","100%","55",null,null);

                p.Panel04_01.set_taborder("37");
                p.Panel04_01.move("8","183","90","200",null,null);

                p.Panel04_02.set_taborder("38");
                p.Panel04_02.move("90","170","100%","200",null,null);

                p.Panel05.set_taborder("28");
                p.Panel05.set_flexcrossaxisalign("start");
                p.Panel05.set_flexcrossaxiswrapalign("start");
                p.Panel05.set_flexmainaxisalign("start");
                p.Panel05.move("0","391","100.00%","120",null,null);

                p.Panel05_01_01_02.set_taborder("48");
                p.Panel05_01_01_02.move("549","419","100%","50",null,null);

                p.staLabel01_00_00_00.set_taborder("32");
                p.staLabel01_00_00_00.set_text("작성일자*");
                p.staLabel01_00_00_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel01_00_00_00.set_flexshrink("0");
                p.staLabel01_00_00_00.set_background("#d4f4fa");
                p.staLabel01_00_00_00.set_textAlign("left");
                p.staLabel01_00_00_00.set_maxwidth("");
                p.staLabel01_00_00_00.move("0","0","80","45",null,null);

                p.Panel03_02.set_taborder("33");
                p.Panel03_02.set_flexcrossaxiswrapalign("start");
                p.Panel03_02.set_flexcrossaxisalign("center");
                p.Panel03_02.set_flexmainaxisalign("start");
                p.Panel03_02.set_horizontalgap("10");
                p.Panel03_02.set_spacing("0px 0px 0px 10px");
                p.Panel03_02.move("21","68","100%","50",null,null);

                p.staLabel01_00_00_01.set_taborder("34");
                p.staLabel01_00_00_01.set_text("조회수");
                p.staLabel01_00_00_01.set_cssclass("sta_WF_SchLabel");
                p.staLabel01_00_00_01.set_flexshrink("0");
                p.staLabel01_00_00_01.set_background("#d4f4fa");
                p.staLabel01_00_00_01.set_textAlign("left");
                p.staLabel01_00_00_01.set_maxwidth("");
                p.staLabel01_00_00_01.move("0","0","80","45",null,null);

                p.edtInqCnt.set_taborder("35");
                p.edtInqCnt.set_flexgrow("1");
                p.edtInqCnt.set_readonly("true");
                p.edtInqCnt.move("841","24","100%","45",null,null);

                p.Panel03_03.set_taborder("36");
                p.Panel03_03.set_flexcrossaxiswrapalign("start");
                p.Panel03_03.set_flexcrossaxisalign("center");
                p.Panel03_03.set_flexmainaxisalign("start");
                p.Panel03_03.set_horizontalgap("10");
                p.Panel03_03.set_spacing("0px 0px 0px 10px");
                p.Panel03_03.move("21","68","100%","50",null,null);

                p.lblCmnt.set_taborder("39");
                p.lblCmnt.set_text("댓글");
                p.lblCmnt.set_cssclass("sta_WF_Label");
                p.lblCmnt.set_flexshrink("0");
                p.lblCmnt.set_background("#d4f4fa");
                p.lblCmnt.set_textAlign("left");
                p.lblCmnt.set_maxwidth("");
                p.lblCmnt.move("0","0","100%","45",null,null);

                p.Panel06_01.set_taborder("40");
                p.Panel06_01.set_flexcrossaxiswrapalign("start");
                p.Panel06_01.set_flexcrossaxisalign("start");
                p.Panel06_01.set_flexmainaxisalign("start");
                p.Panel06_01.set_horizontalgap("10");
                p.Panel06_01.move("21","68","100%","50",null,null);

                p.Panel06.set_taborder("41");
                p.Panel06.set_flexcrossaxisalign("start");
                p.Panel06.set_type("vertical");
                p.Panel06.move("20","74","100%","280",null,null);

                p.edtCmntCn.set_taborder("10");
                p.edtCmntCn.set_flexgrow("1");
                p.edtCmntCn.set_maxlength("50");
                p.edtCmntCn.move("841","24","100%","40",null,null);

                p.Panel06_03.set_taborder("42");
                p.Panel06_03.set_flexcrossaxiswrapalign("start");
                p.Panel06_03.set_flexcrossaxisalign("center");
                p.Panel06_03.set_flexmainaxisalign("start");
                p.Panel06_03.set_horizontalgap("10");
                p.Panel06_03.move("21","68","100%","50",null,null);

                p.Panel06_02.set_taborder("43");
                p.Panel06_02.move("20","74","100%","160",null,null);

                p.Panel07.set_taborder("46");
                p.Panel07.move("648","868","141","40",null,null);

                p.Panel00.set_taborder("45");
                p.Panel00.move("7","858","617","40",null,null);

                p.grdList.set_taborder("44");
                p.grdList.set_binddataset("dsCmntList");
                p.grdList.set_autofittype("col");
                p.grdList.set_autosizingtype("col");
                p.grdList.set_scrollbartype("auto");
                p.grdList.move("0","44","100.00%","160",null,null);

                p.btnCmntReg.set_taborder("11");
                p.btnCmntReg.set_text("댓글저장");
                p.btnCmntReg.set_cssclass("btn_WF_No");
                p.btnCmntReg.move("228.00","17","100","40",null,null);

                p.Calendar01.set_taborder("3");
                p.Calendar01.set_dateformat("yyyy-MM-dd");
                p.Calendar01.set_readonly("true");
                p.Calendar01.move("180.00","0","200","45",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_spacing("10px 0px 0px 10px");
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
            obj.set_spacing("10px 0px 0px 10px");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",850,780,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("TSP 개발자 소통채널 상세");
                p.set_scrollbartype("none none");
                p.set_scrolltype("none");

                p.staState.set_taborder("0");
                p.staState.set_text("표는 필수 입력 사항입니다.");
                p.staState.set_cssclass("sta_WF_EsentialTxt");
                p.staState.move("0","42","100.00%",null,null,"1458");

                p.RaonkUpload.set_taborder("1");
                p.RaonkUpload.set_DevelopLangage("JAVA");
                p.RaonkUpload.set_ExtensionAllowOrLimit("1");
                p.RaonkUpload.set_RunTimes("html5");
                p.RaonkUpload.set_ButtonBarView("0");
                p.RaonkUpload.set_visible("false");
                p.RaonkUpload.set_AllowDuplicationFile("1");
                p.RaonkUpload.set_text("");
                p.RaonkUpload.set_DisableDeleteConfirm("1");
                p.RaonkUpload.move("728.00","876","68.82%","200",null,null);

                p.divForm.set_taborder("2");
                p.divForm.set_text("Div00");
                p.divForm.set_cssclass("div_WF_Bg");
                p.divForm.set_fittocontents("height");
                p.divForm.move("0","0","100.00%","780",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            obj.set_spacing("0px 0px 0px 10px");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",390,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staState.move("20","50",null,"30","0",null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            obj.set_spacing("0px 0px 0px 10px");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","edt00_01_00","value","dsGet","bbsTtl");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.txtAreaCn","value","dsGet","cn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.staLabel01_00","value","dsSearch","pHireLohNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divForm.form.edtTitl","value","dsGet","titl");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.edtWrtr","value","dsGet","wrtr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.edtInqCnt","value","dsGet","inqCnt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.Calendar01","value","dsGet","wrtDt");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CCB001M01.xfdl", function() {
        /**
        *  인천공항 원스톱 입주자서비스 프로젝트
        *  @FileName 	CCB001M01.xfdl
        *  @Creator 	(주)이루온
        *  @CreateDate 	2024/10/11
        *  @Desction   ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/10/11			pys						최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        this.param;
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수

        	this.fnInit();
        }

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	//TODO..
        };

        //삭제
        this.cfnDel = function ()
        {
        	if (this.gfnIsNull(this.dsGet.getColumn(0,"bbsMngNo"))) {
        		this.gfnAlertMsg("msg", "MSG_011", ["조회된 내용이 없습니다."]);
        		return;
        	}

        	if (this.userNm != this.dsGet.getColumn(0,"wrtr")) {
        		this.gfnAlertMsg("msg", "MSG_011", ["작성자만 삭제 가능합니다."]);
        		return;
        	}

        	this.gfnConfirmMsg("delete_confirm", "MSG_005", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        };

        //저장
        this.cfnSave = function (param)
        {
        	if (param == "cmnt") {
        		if (this.divForm.form.edtCmntCn.text == "") {
        			this.gfnAlertMsg("msg", "MSG_011", ["댓글 내용이 없습니다."]);
        			return;
        		} else if (this.gfnIsNull(this.dsGet.getColumn(0,"bbsMngNo"))) {
        			this.gfnAlertMsg("msg", "MSG_011", ["조회된 내용이 없습니다."]);
        			return;
        		} else {
        			this.gfnConfirmMsg("cmnt_confirm", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        		}
        	} else {
        		if (this.gfnIsNull(this.dsGet.getColumn(0,"titl"))) {
        			this.gfnAlertMsg("msg", "MSG_011", ["제목을 입력하세요."]);
        			return;
        		}

        		if (this.gfnIsNull(this.dsGet.getColumn(0,"cn"))) {
        			this.gfnAlertMsg("msg", "MSG_011", ["내용을 입력하세요."]);
        			return;
        		}

        		if (this.gfnDsIsUpdated(this.dsGet) == false && this.gfnDsIsUpdated(this.dsFile1) == false) {
        			this.gfnAlertMsg("msg", "MSG_004");
        		} else if (this.gfnDsIsUpdated(this.dsGet) == true || this.gfnDsIsUpdated(this.dsFile1) == true ) {
        			this.gfnConfirmMsg("save_confirm", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        		}
        	}

        };

        this.cfnClose = function (){};

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        /**
        	strSvcId 		// transaction을 구분하기 위한 svc id값
        	strSvcUrl 		// trabsaction을 요청할 주소
        	inData 			// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        	outData 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        	strArg 			// 입력값으로 보낼 arguments, strFormData="20120607"
        	callBackFnc 	// transaction의 결과를 받을 Function 이름
        	isAsync 		// 비동기통신 여부 [생략가능]
        **/

        // 데이터 조회
        this.selectTransaction = function()
        {
        	var strSvcId    = "select";
        	var strSvcUrl   = "ren/com/selectCcbBbs.do";
        	var inData      = "";
        	var outData     = "dsGet=dsGet dsFile1=dsFile1";
        	var strArg      = "bbsMngNo=" + this.param.bbsMngNo;
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 데이터 조회
        this.selectCmntTransaction = function()
        {
        	var strSvcId    = "selectCmnt";
        	var strSvcUrl   = "ren/com/selectCcbBbsCmntList.do";
        	var inData      = "";
        	var outData     = "dsCmntList=dsCmntList";
        	var strArg      = "bbsMngNo=" + this.param.bbsMngNo;
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 데이터 저장
        this.saveTransaction = function()
        {
        	var strSvcId    = "save";
        	var strSvcUrl   = "ren/com/saveCcbBbs.do";
        	var inData      = "dsGet=dsGet:U dsFile=dsFile";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= false;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 댓글 데이터 저장
        this.saveCmntTransaction = function()
        {
        	var strSvcId    = "saveCmnt";
        	var strSvcUrl   = "ren/com/saveCcbBbsCmnt.do";
        	var inData      = "dsCmntList=dsCmntList:U";
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

        			if(this.dsFile1 && this.dsFile1.rowcount > 0) {
        				this.gfnDownloadSetting(this.RaonkUpload, this.dsFile1);
        				this.dsFile.insertRow();
        				this.dsFile.setColumn(0, "atflMngNo", this.dsFile1.getColumn(0, "atflMngNo"));
        				this.dsFile.setColumn(0, "colId", this.dsFile1.getColumn(0, "colId"));
        			}
        			this.selectCmntTransaction();
        			break;

        		case "selectCmnt":
        			if (!this.gfnIsNull(this.dsCmntList.getColumn(0,"cnt"))){
        				this.divForm.form.lblCmnt.text = "댓글 " + this.dsCmntList.getColumn(0,"cnt") + "건";
        			}

        			break;

        		case "save":
        			this.gfnAlertMsg("msg", "MSG_001");
        			var cMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        			this.close();
         			this._gfnOpenMenu(cMenuId.substring(0,14),"",true);
        			break;

        		case "saveCmnt":
        			this.gfnAlertMsg("msg", "MSG_001");
        			this.reload();
        			break;

        		case "uploadComplete":
        			// 파일 업로드가 완료 된 후 첨부파일 과 같이 데이터 저장
        			console.log(this.dsFile.saveJSON());
        			this.saveTransaction();
        			break;

        	}
        };

        //얼럿창 콜백 함수
        this.msgCallback = function(sPopupId, sRtn) {
        	var oRtn = JSON.parse(sRtn);

        	if (sPopupId == "save_confirm" && oRtn.result == "Y") {

        		if (this.param.status == "reg") {
        			this.dsGet.setColumn(0, "rowSttsCd", "I");
        		} else {
        			this.dsGet.setColumn(0, "rowSttsCd", "U");
        		}

        		var obj = {
        			"atchFileId" : this.dsGet.getColumn(0, "atchFileMngNo") // 기존 첨부파일 있을 경우 입력
        			,"bsnsSeCd" : "ccb"			// 업무구분코드
        			,"prgrmId" : "CCB001M01" 	// 프로그램ID (화면 ID)
        		}

        		var str = JSON.stringify(obj);
        		this.RaonkUpload.AddFormData('params', str);
        		this.RaonkUpload.Transfer();

        	} else if(sPopupId == "file_all_del1" && oRtn.result == "Y" ) {
        		this.gfnDeleteAllFile(this.RaonkUpload, this.dsFile1);
        		this.dsGet.setColumn(0,"atchFileMngNo", "");
        	} else if(sPopupId == "file_del1"  && oRtn.result == "Y") {
        		this.gfnDeleteFile(this.RaonkUpload, this.dsFile1, oRtn.paramArg);
        		this.dsGet.setColumn(0,"atchFileMngNo", "");
        	} else if (sPopupId == "delete_confirm" && oRtn.result == "Y") {
        		this.dsGet.setColumn(0, "rowSttsCd", "D");
        		this.dsGet.setColumn(0, "delYmd", this.vTdate);
        		this.saveTransaction();
        	} else if (sPopupId == "cmnt_confirm" && oRtn.result == "Y") {

        		this.dsCmntList.addRow();
        		var colCnt = this.dsCmntList.getRowCount()-1;

        		this.dsCmntList.setColumn(colCnt, "bbsMngNo", this.dsGet.getColumn(0,"bbsMngNo"));
        		this.dsCmntList.setColumn(colCnt, "cmntCn", this.divForm.form.edtCmntCn.text);
        		this.dsCmntList.setColumn(colCnt, "cmntWrtr", this.userNm);
        		this.dsCmntList.setColumn(colCnt, "rowSttsCd", "I");

        		this.saveCmntTransaction();

        	}

        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	this.userNm = this.objApp.gdsUser.getColumn(0, "userNm");
        	this.vTdate = this.gfn_getDate("date");

        	this.param = {
        		 "bbsMngNo" : this.getOwnerFrame().bbsMngNo
        		,"bbsDvs"   : this.getOwnerFrame().bbsDvs
        		,"status"   : this.getOwnerFrame().status
        	};

        	if (this.param.bbsDvs == "10") {
        		this.divForm.form.sttTitl.text = "공지사항";
        	} else if (this.param.bbsDvs == "20") {
        		this.divForm.form.sttTitl.text = "자유게시판";
        	} else if (this.param.bbsDvs == "30") {
        		this.divForm.form.sttTitl.text = "공통기능(API)";
        	} else if (this.param.bbsDvs == "31") {
        		this.divForm.form.sttTitl.text = "테스트";
        	} else if (this.param.bbsDvs == "40") {
        		this.divForm.form.sttTitl.text = "테이블";
        	} else if (this.param.bbsDvs == "50") {
        		this.divForm.form.sttTitl.text = "표준문서";
        	} else if (this.param.bbsDvs == "51") {
        		this.divForm.form.sttTitl.text = "참고문서";
        	}

        	if (!this.gfnIsNull(this.param.bbsMngNo)) {
        		this.selectTransaction();
        	} else {
        		this.dsGet.insertRow(); //등록화면시 dsGet 데이터셋 로우 생성
        		this.dsGet.setColumn(0,"bbsDvs", this.param.bbsDvs);
        		this.dsGet.setColumn(0,"wrtr", this.userNm);
        		this.dsGet.setColumn(0,"wrtDt", this.vTdate);
        		this.dsGet.setColumn(0,"rowSttsCd", "I");
         	}

        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        //취소
        this.divForm_divPopBtn_btnClose_onclick = function(obj,e)
        {
        	this.close();
        };

        //등록
        this.divForm_btnCmntReg_onclick = function(obj,e)
        {
        	this.cfnSave("cmnt");
        };

        /*******************************************************************************************************************************
         * 각 RAONK 별 EVENT 영역
        *******************************************************************************************************************************/
        // 파일 추가
        this.divForm_Div00_btn_file_1_onclick = function(obj,e)
        {
        	// 데이터의 첨부파일 관리번호 입력 컬럼명
        	this.gvUploadCategory = "atchNumber";		// 컬럼ID
        	this.RaonkUpload.OpenFileDialog();
        };


        // 파일 그리드 클릭 이벤트
        this.divForm_Div00_fileGrid_oncellclick = function(obj,e)
        {
        	if(e.col == 1) 	// 삭제 버튼 클릭
        	{
        		var param = {
        			"row" : e.row,
        			"col" : e.col
        		};
        		this.gfnConfirmMsg("file_del1", "MSG_005", "msgCallback", ["확인", "취소"], ["Y", "N"], param);
        	} else if(e.col == 0) // 파일명 클릭
        	{
        		this.gfnSelectFile(this.RaonkUpload, this.dsFile1, e);
        	}
        };

        // 파일 그리드 더블클릭 이벤트
        this.divForm_Div00_fileGrid_oncelldblclick = function(obj,e)
        {
        	if(e.col == 0) 	// 파일명을 더블클릭 시 다운로드
        	{
        		this.gfnDownloadFile(this.RaonkUpload, this.dsFile1, e);
        	}
        };

        this.divForm_Div00_btn_del_file_1_onclick = function(obj,e)
        {
        	this.gfnConfirmMsg("file_all_del1", "MSG_005", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        };

        // 페이지에서 라온K업로드 솔루션의 생성 이벤트
        this.RaonkUpload_RAONKUPLOAD_CreationComplete = function(obj,  paramObj)
        {
        	// 업로드 솔루션이 초기 생성시 업로드 할 경로를 지정해야 한다.
        	// /CMM/YYYY/MM/DD/  <<== CMM은 업무별 폴더 지정이고 기본적으로 /년도/월/일 의 폴더 구조를 갖는다.
        	this.RaonkUpload.SetConfig('FolderNameRule', '/CCB/YYYY/MM/DD/');
        };

        // 파일 업로드 시 에러 발생 이벤트
        this.divForm_Div00_RaonkUpload_RAONKUPLOAD_OnError = function(obj, paramObj)
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
        	if(this.gvUploadCategory == "atchNumber")
        	{
        		var nIdx = this.dsFile1.addRow();
        		this.dsFile1.setColumn(nIdx, "fullName", paramObj.userdata.strName + ' (' + paramObj.userdata.nSize + ')');
        		this.dsFile1.setColumn(nIdx, "orgnlFileNm", paramObj.userdata.strName);
        		this.dsFile1.setColumn(nIdx, "fileSz", paramObj.userdata.nSize);
        		this.dsFile1.setColumn(nIdx, "atflMngSno", paramObj.userdata.nIndex);
        		this.dsFile1.setColumn(nIdx, "colId", this.gvUploadCategory);
        		this.dsFile1.setColumn(nIdx, "atflMngNo", atflMngNo);
        	}
        };

        // 파일 업로드 완료 이벤트
        this.RaonkUpload_RAONKUPLOAD_UploadComplete = function(obj, paramObj)
        {
        	var allListArray = this.RaonkUpload.GetListInfo("json");

        	console.log(allListArray);
        	// 파일 업로드 후 첨부파일관리번호를 얻기 위한 함수

        	this.gfnUploadComplete("uploadComplete", allListArray, "dsFile", "fnCallback");
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterAddFile",this.RaonkUpload_RAONKUPLOAD_AfterAddFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_CreationComplete",this.RaonkUpload_RAONKUPLOAD_CreationComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_UploadComplete",this.RaonkUpload_RAONKUPLOAD_UploadComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_OnError",this.divForm_Div00_RaonkUpload_RAONKUPLOAD_OnError,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_BeforeAddFile",this.RaonkUpload_RAONKUPLOAD_BeforeAddFile,this);
            this.divForm.form.sttTitl.addEventHandler("onclick",this.bbsDvs,this);
            this.divForm.form.btnReg.addEventHandler("onclick",this.cfnSave,this);
            this.divForm.form.btnDel.addEventHandler("onclick",this.cfnDel,this);
            this.divForm.form.btnClose.addEventHandler("onclick",this.divForm_divPopBtn_btnClose_onclick,this);
            this.divForm.form.fileGrid.addEventHandler("oncelldblclick",this.divForm_Div00_fileGrid_oncelldblclick,this);
            this.divForm.form.fileGrid.addEventHandler("oncellclick",this.divForm_Div00_fileGrid_oncellclick,this);
            this.divForm.form.btn_file_1.addEventHandler("onclick",this.divForm_Div00_btn_file_1_onclick,this);
            this.divForm.form.btn_del_file_1.addEventHandler("onclick",this.divForm_Div00_btn_del_file_1_onclick,this);
            this.divForm.form.grdList.addEventHandler("oncelldblclick",this.divGrd_grdList_oncelldblclick,this);
            this.divForm.form.btnCmntReg.addEventHandler("onclick",this.divForm_btnCmntReg_onclick,this);
        };
        this.loadIncludeScript("CCB001M01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
