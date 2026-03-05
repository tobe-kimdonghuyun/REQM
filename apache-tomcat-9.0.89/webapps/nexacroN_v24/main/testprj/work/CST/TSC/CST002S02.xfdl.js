(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST002S02");
            this.set_titletext("신청정보(시설물설치)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsInstlRsnCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cdId\">TSCFICINS001</Col><Col id=\"cdNm\">신규조성</Col></Row><Row><Col id=\"cdId\">TSCFICINS002</Col><Col id=\"cdNm\">리노베이션</Col></Row><Row><Col id=\"cdId\">TSCFICINS003</Col><Col id=\"cdNm\">레이아웃변경</Col></Row><Row><Col id=\"cdId\">TSCFICINS004</Col><Col id=\"cdNm\">파사드변경</Col></Row><Row><Col id=\"cdId\">TSCFICINS005</Col><Col id=\"cdNm\">칸막이변경</Col></Row><Row><Col id=\"cdId\">TSCFICINS006</Col><Col id=\"cdNm\">장비변경</Col></Row><Row><Col id=\"cdId\">TSCFICINS007</Col><Col id=\"cdNm\">간판교체</Col></Row><Row><Col id=\"cdId\">TSCFICINS008</Col><Col id=\"cdNm\">기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Panel("panForm","0","0","100%","3000",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_fittocontents("height");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panAplyInfo\"/><PanelItem id=\"PanelItem02\" componentid=\"divAplyInfo\"/><PanelItem id=\"PanelItem03\" componentid=\"panAtfl\"/><PanelItem id=\"PanelItem04\" componentid=\"divAtfl\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle00","-26","20","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("신청정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","1110","20","139","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnAplyInfo\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panAplyInfo","-26","20","100.00%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("5");
            obj.set_visible("true");
            obj.set_fittocontents("none");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("btnAplyInfo","1210","23","34","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divAplyInfo","1540","0","100.00%","990",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","0.00","0","100.00%","96",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("2");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_horizontalgap("20");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtChgFcltCstrnCn\"/></Contents>");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Static("sta00_00_01","20.00","0","100%","57",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("3");
            obj.set_text("예) ~~~회의실 조성공사, ~~~ 환복실 변경공사, ~~~팀 마련공사\r\n(업무용시설의 칸막이, 천장, 바닥, 출입문 등을 설치(변경) 경우)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Panel("Panel00_02","0.00","96","100.00%","50",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("4");
            obj.set_verticalgap("0");
            obj.set_fittocontents("height");
            obj.set_spacing("0px 20px 0px 20px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"sta00_00_01\"/></Contents>");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Panel("pan00","1331","0","100.00%","152",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("5");
            obj.set_fittocontents("height");
            obj.set_spacing("0px 0px 10px 0px ");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_02\"/></Contents>");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Static("staLabel01_00","0.00","0","100%","46",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("6");
            obj.set_text("설치사유");
            obj.set_cssclass("sta_WF_Label_E");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Panel("panBlank","20.00","86","610","160",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents/>");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","20.00","0","300%","120",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"rdoInstlRsnCd\"/></Contents>");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Panel("pan01","0.00","133","100.00%","150",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("10");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"panBlank\"/></Contents>");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Static("staLabel03_00","10.00","10","100%","46",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("11");
            obj.set_text("설치사유 기타");
            obj.set_cssclass("sta_WF_Label_E");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Edit("edtInstlRsnEtcCn","10.00","56","100%","40",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("12");
            obj.set_readonly("false");
            obj.set_value("설치사유 기타");
            obj.set_displaynulltext("설치사유 기타");
            obj.set_text("설치사유 기타");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","30.00","10","300","86",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("13");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtInstlRsnEtcCn\"/></Contents>");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Panel("panInstlEtcRsn","1331","293","100.00%","97",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("14");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00\"/></Contents>");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00","20.00","20","100%","46",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("15");
            obj.set_text("공사(작업)분야");
            obj.set_cssclass("sta_WF_Label_E");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new CheckBox("chkArch","0.00","0","74","40",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("16");
            obj.set_text("건축");
            obj.set_fittocontents("width");
            obj.set_truevalue("Y06110");
            obj.set_value("false");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","74.00","0","74","40",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("17");
            obj.set_text("기계");
            obj.set_fittocontents("width");
            obj.set_truevalue("Y06120");
            obj.set_value("false");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox02","148.00","0","74","40",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("18");
            obj.set_text("전기");
            obj.set_fittocontents("width");
            obj.set_truevalue("Y06140");
            obj.set_value("false");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox03","222.00","0","74","40",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("19");
            obj.set_text("통신");
            obj.set_fittocontents("width");
            obj.set_truevalue("Y06130");
            obj.set_value("false");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox04","296.00","0","74","40",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("20");
            obj.set_text("소방");
            obj.set_fittocontents("width");
            obj.set_truevalue("Y06180");
            obj.set_value("false");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Panel("panCstrnJobFldCd","20.00","66","100%","40",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("21");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem04\" componentid=\"chkArch\"/><PanelItem id=\"PanelItem05\" componentid=\"CheckBox00\"/><PanelItem id=\"PanelItem00\" componentid=\"CheckBox02\"/><PanelItem id=\"PanelItem01\" componentid=\"CheckBox03\"/><PanelItem id=\"PanelItem02\" componentid=\"CheckBox04\"/></Contents>");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Panel("pan_04_00","40.00","20","300","86",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("22");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staLabel03_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"panCstrnJobFldCd\"/></Contents>");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Panel("pan03","1350","386","100.00%","93",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("23");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan_04_00\"/></Contents>");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01","30.00","30","100%","46",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("24");
            obj.set_text("임대면적");
            obj.set_cssclass("sta_WF_Label");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Edit("Edit02","30.00","76","100%","40",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("25");
            obj.set_inputfilter("none");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00","50.00","30","300","86",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("26");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staLabel03_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Edit02\"/></Contents>");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Panel("pan04","1350","479","100.00%","93",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("27");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00\"/></Contents>");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Static("staLabel05_00_00","0","0","100%","46",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("28");
            obj.set_text("착공예정일");
            obj.set_cssclass("sta_WF_Label_E");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Calendar("calBgncstPrnmntYmd","0.00","46","145","40",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("29");
            obj.set_dateformat("yyyy-MM-dd");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Panel("pan04_00","20.00","0","300","86",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("30");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"calBgncstPrnmntYmd\"/></Contents>");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Static("staLabel05_01_00","10.00","10","100%","46",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("31");
            obj.set_text("준공예정일");
            obj.set_cssclass("sta_WF_Label_E");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Calendar("calCmcnPrnmntYmd","10.00","56","145","40",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("32");
            obj.set_dateformat("yyyy-MM-dd");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Panel("pan05_01","650.00","0","300","86",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("33");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staLabel05_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"calCmcnPrnmntYmd\"/></Contents>");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Panel("pan05_00","10","10","100.00%","95",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("34");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan04_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan05_01\"/></Contents>");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Static("sta00","20.00","0","100%","40",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("35");
            obj.set_text("전화번호는 우측상단 \"사용자 이름\" 클릭 후 해당 메뉴에서 등록 및 수정이 가능합니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Static("sta00_00","20.00","44","100%","40",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("36");
            obj.set_text("시설물설치(변경)관련 작업신고서 신청은 착공·준공 예정일 내 기간만 가능합니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Panel("Panel04_02","0","95","100.00%","89",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("37");
            obj.set_spacing("0px 20px 0px 20px");
            obj.set_fittocontents("height");
            obj.set_type("vertical");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta00\"/><PanelItem id=\"PanelItem02\" componentid=\"sta00_00\"/></Contents>");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Static("sta00_01","20.00","4","100%","40",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("38");
            obj.set_text("업로드하는 파일의 크기는 100mb 이하로 제한됩니다.");
            obj.set_cssclass("sta_WF_Des2");
            obj.set_fittocontents("height");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","20.00","48","100%","40",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("39");
            obj.set_text("안전관리계획서는 3억원 이상 또는 3개월 이상 시설공사 추진시 업로드하시기 바랍니다");
            obj.set_cssclass("sta_WF_Des2");
            obj.set_fittocontents("height");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Panel("Panel04_02_00","0","185","100.00%","89",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("40");
            obj.set_spacing("4px 20px 0px 20px");
            obj.set_fittocontents("height");
            obj.set_type("vertical");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"sta00_00_00\"/></Contents>");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Panel("pan08","1350","572","100.00%","286",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("41");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_fittocontents("height");
            obj.set_spacing("0px 0px 10px 0px ");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"pan05_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel04_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel04_02_00\"/></Contents>");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_02","390","1110","100%","46",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("42");
            obj.set_text("공사개요");
            obj.set_cssclass("sta_WF_Label");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","380","1146","100%","60",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("43");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Panel("pan02_00","1350","858","100.00%","117",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("44");
            obj.set_horizontalgap("20");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"TextArea00\"/></Contents>");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Radio("rdoInstlRsnCd","20","206","100%","93",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsInstlRsnCd");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_fittocontents("width");
            obj.set_direction("horizontal");
            obj.set_columncount("3");
            obj.set_text("계약선택");
            obj.set_value("0");
            obj.set_index("0");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Static("staLabel00","20.00","0","100%","46",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("0");
            obj.set_text("시설공사명(변경공사명)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Edit("edtChgFcltCstrnCn","20.00","46","100%","40",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("1");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Static("staSubTitle","60","1085","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","1190","1085","148","50",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnAtfl\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panAtfl","60","1085","100.00%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("9");
            obj.set_fittocontents("none");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("btnAtfl","1220","1085","34","32",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_ACMinus");
            this.addChild(obj.name, obj);

            obj = new Div("divAtfl","1740","1010","100%","1210",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Panel("panTitle","20","10","100%","46",null,null,null,null,null,null,this.divAtfl.form);
            obj.set_taborder("2");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile\"/></Contents>");
            this.divAtfl.addChild(obj.name, obj);

            obj = new Grid("Grid00","20.00","60","100%","40",null,null,null,null,null,null,this.divAtfl.form);
            obj.set_taborder("3");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) || !A110 ? &quot;&quot; : &quot;CellFile&quot;\" text=\"bind:A110\"/><Cell col=\"1\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roAplcfmWrtRcpt&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) &amp;&amp; !A110 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roAplcfmWrtRcpt&quot;) ? &quot;none&quot;  : &quot;buttoncontrol&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) &amp;&amp; !A110 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divAtfl.addChild(obj.name, obj);

            obj = new Panel("panFile","0","0","100%","111",null,null,null,null,null,null,this.divAtfl.form);
            obj.set_taborder("4");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00\"/></Contents>");
            this.divAtfl.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00","0","0","490","46",null,null,null,null,null,null,this.divAtfl.form);
            obj.set_taborder("5");
            obj.set_text("기본설계도면(기계)");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divAtfl.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00","490.00","0","490","46",null,null,null,null,null,null,this.divAtfl.form);
            obj.set_taborder("6");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divAtfl.addChild(obj.name, obj);

            obj = new Panel("panTitle00","20","10","100%","46",null,null,null,null,null,null,this.divAtfl.form);
            obj.set_taborder("7");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00\"/></Contents>");
            this.divAtfl.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","1080.00","756","100%","40",null,null,null,null,null,null,this.divAtfl.form);
            obj.set_taborder("8");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:A120\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) || !A120 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roAplcfmWrtRcpt&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) &amp;&amp; !A120 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roAplcfmWrtRcpt&quot;) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) &amp;&amp; !A120 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divAtfl.addChild(obj.name, obj);

            obj = new Panel("panFile00","0","111","100%","111",null,null,null,null,null,null,this.divAtfl.form);
            obj.set_taborder("9");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00\"/></Contents>");
            this.divAtfl.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00_00","0","0","490","46",null,null,null,null,null,null,this.divAtfl.form);
            obj.set_taborder("10");
            obj.set_text("기본설계도면(전기)");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divAtfl.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_00","490.00","0","490","46",null,null,null,null,null,null,this.divAtfl.form);
            obj.set_taborder("11");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divAtfl.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00","20","10","100%","46",null,null,null,null,null,null,this.divAtfl.form);
            obj.set_taborder("12");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00_00\"/></Contents>");
            this.divAtfl.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00","20.00","60","100%","40",null,null,null,null,null,null,this.divAtfl.form);
            obj.set_taborder("13");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:A130\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) || !A130 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roAplcfmWrtRcpt&quot;) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roAplcfmWrtRcpt&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) &amp;&amp; !A130 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) &amp;&amp; !A130 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divAtfl.addChild(obj.name, obj);

            obj = new Panel("panFile00_00","0","222","100%","111",null,null,null,null,null,null,this.divAtfl.form);
            obj.set_taborder("14");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00_00\"/></Contents>");
            this.divAtfl.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00_00_00","0","0","490","46",null,null,null,null,null,null,this.divAtfl.form);
            obj.set_taborder("15");
            obj.set_text("기본설계도면(통신)");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divAtfl.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_00_00","490.00","0","490","46",null,null,null,null,null,null,this.divAtfl.form);
            obj.set_taborder("16");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divAtfl.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00_00","20","10","100%","46",null,null,null,null,null,null,this.divAtfl.form);
            obj.set_taborder("17");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00_00_00\"/></Contents>");
            this.divAtfl.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00_00","20.00","60","100%","40",null,null,null,null,null,null,this.divAtfl.form);
            obj.set_taborder("18");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:A140\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) || !A140 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roAplcfmWrtRcpt&quot;) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roAplcfmWrtRcpt&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) &amp;&amp; !A140 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) &amp;&amp; !A140 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divAtfl.addChild(obj.name, obj);

            obj = new Panel("panFile00_00_00","0","333","100%","111",null,null,null,null,null,null,this.divAtfl.form);
            obj.set_taborder("19");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00_00_00\"/></Contents>");
            this.divAtfl.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00_00_00_00","0","0","490","46",null,null,null,null,null,null,this.divAtfl.form);
            obj.set_taborder("20");
            obj.set_text("기본설계도면(소방)");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divAtfl.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_00_00_00","490.00","0","490","46",null,null,null,null,null,null,this.divAtfl.form);
            obj.set_taborder("21");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divAtfl.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00_00_00","20","10","100%","46",null,null,null,null,null,null,this.divAtfl.form);
            obj.set_taborder("22");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00_00_00_00\"/></Contents>");
            this.divAtfl.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00_00_00","20.00","60","100%","40",null,null,null,null,null,null,this.divAtfl.form);
            obj.set_taborder("23");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:A150\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) || !A150 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roAplcfmWrtRcpt&quot;) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roAplcfmWrtRcpt&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) &amp;&amp; !A150 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) &amp;&amp; !A150 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divAtfl.addChild(obj.name, obj);

            obj = new Panel("panFile00_00_00_00","0","444","100%","111",null,null,null,null,null,null,this.divAtfl.form);
            obj.set_taborder("24");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00_00_00_00\"/></Contents>");
            this.divAtfl.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00_00_00_00_00","0","0","490","46",null,null,null,null,null,null,this.divAtfl.form);
            obj.set_taborder("25");
            obj.set_text("공정표");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divAtfl.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_00_00_00_00","490.00","0","490","46",null,null,null,null,null,null,this.divAtfl.form);
            obj.set_taborder("26");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divAtfl.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00_00_00_00","20","10","100%","46",null,null,null,null,null,null,this.divAtfl.form);
            obj.set_taborder("27");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00_00_00_00_00\"/></Contents>");
            this.divAtfl.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00_00_00_00","20.00","60","100%","40",null,null,null,null,null,null,this.divAtfl.form);
            obj.set_taborder("28");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:A160\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) || !A160 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roAplcfmWrtRcpt&quot;) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roAplcfmWrtRcpt&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) &amp;&amp; !A160 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) &amp;&amp; !A160 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divAtfl.addChild(obj.name, obj);

            obj = new Panel("panFile00_00_00_00_00","0","555","100%","111",null,null,null,null,null,null,this.divAtfl.form);
            obj.set_taborder("29");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00_00_00_00_00\"/></Contents>");
            this.divAtfl.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00_00_00_00_00_00","0","0","490","46",null,null,null,null,null,null,this.divAtfl.form);
            obj.set_taborder("30");
            obj.set_text("폐기물,자재및인력동선계획");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divAtfl.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_00_00_00_00_00","490.00","0","490","46",null,null,null,null,null,null,this.divAtfl.form);
            obj.set_taborder("31");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divAtfl.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00_00_00_00_00","20","10","100%","46",null,null,null,null,null,null,this.divAtfl.form);
            obj.set_taborder("32");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00_00_00_00_00_00\"/></Contents>");
            this.divAtfl.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00_00_00_00_00","20.00","60","100%","40",null,null,null,null,null,null,this.divAtfl.form);
            obj.set_taborder("33");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:A170\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) || !A170 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roAplcfmWrtRcpt&quot;) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roAplcfmWrtRcpt&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) &amp;&amp; !A170 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) &amp;&amp; !A170 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divAtfl.addChild(obj.name, obj);

            obj = new Panel("panFile00_00_00_00_00_00","0","666","100%","111",null,null,null,null,null,null,this.divAtfl.form);
            obj.set_taborder("34");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00_00_00_00_00_00\"/></Contents>");
            this.divAtfl.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00_00_00_00_00_00_00","0","0","490","46",null,null,null,null,null,null,this.divAtfl.form);
            obj.set_taborder("35");
            obj.set_text("안전관리계획서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divAtfl.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_00_00_00_00_00_00","490.00","0","490","46",null,null,null,null,null,null,this.divAtfl.form);
            obj.set_taborder("36");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divAtfl.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00_00_00_00_00_00","20","10","100%","46",null,null,null,null,null,null,this.divAtfl.form);
            obj.set_taborder("37");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00_00_00_00_00_00_00\"/></Contents>");
            this.divAtfl.addChild(obj.name, obj);

            obj = new Static("Static00","20.00","60","100%","40",null,null,null,null,null,null,this.divAtfl.form);
            obj.set_taborder("38");
            obj.set_text("공사금액 3억원 이상 또는 공사기간 3개월 이상인 경우");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_Des");
            this.divAtfl.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00_00_00_00_00_00","20.00","104","100%","40",null,null,null,null,null,null,this.divAtfl.form);
            obj.set_taborder("39");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:A180\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) || !A180 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roAplcfmWrtRcpt&quot;) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roAplcfmWrtRcpt&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) &amp;&amp; !A180 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) &amp;&amp; !A180 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divAtfl.addChild(obj.name, obj);

            obj = new Panel("panFile00_00_00_00_00_00_00","0","827","100.00%","153",null,null,null,null,null,null,this.divAtfl.form);
            obj.set_taborder("40");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Static00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00_00_00_00_00_00_00\"/></Contents>");
            this.divAtfl.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00_00_00_00_00_01","0","0","490","46",null,null,null,null,null,null,this.divAtfl.form);
            obj.set_taborder("41");
            obj.set_text("기타서류1");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divAtfl.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_00_00_00_00_01","490.00","0","490","46",null,null,null,null,null,null,this.divAtfl.form);
            obj.set_taborder("42");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divAtfl.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00_00_00_00_01","20","10","100%","46",null,null,null,null,null,null,this.divAtfl.form);
            obj.set_taborder("43");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00_00_00_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00_00_00_00_00_01\"/></Contents>");
            this.divAtfl.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00_00_00_00_01","20.00","60","100%","40",null,null,null,null,null,null,this.divAtfl.form);
            obj.set_taborder("44");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:A190\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) || !A190 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roAplcfmWrtRcpt&quot;) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roAplcfmWrtRcpt&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) &amp;&amp; !A190 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) &amp;&amp; !A190 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divAtfl.addChild(obj.name, obj);

            obj = new Panel("panFile00_00_00_00_00_01","0","888","100%","111",null,null,null,null,null,null,this.divAtfl.form);
            obj.set_taborder("45");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00_00_00_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00_00_00_00_00_01\"/></Contents>");
            this.divAtfl.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00_00_00_00_00_02","0","0","490","46",null,null,null,null,null,null,this.divAtfl.form);
            obj.set_taborder("46");
            obj.set_text("기타서류2");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divAtfl.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_00_00_00_00_02","490.00","0","490","46",null,null,null,null,null,null,this.divAtfl.form);
            obj.set_taborder("47");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divAtfl.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00_00_00_00_02","20","10","100%","46",null,null,null,null,null,null,this.divAtfl.form);
            obj.set_taborder("48");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00_00_00_00_00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00_00_00_00_00_02\"/></Contents>");
            this.divAtfl.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00_00_00_00_02","20.00","60","100%","40",null,null,null,null,null,null,this.divAtfl.form);
            obj.set_taborder("49");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:A200\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) || !A200 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roAplcfmWrtRcpt&quot;) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roAplcfmWrtRcpt&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) &amp;&amp; !A200 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) &amp;&amp; !A200 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divAtfl.addChild(obj.name, obj);

            obj = new Panel("panFile00_00_00_00_00_02","0","999","100%","111",null,null,null,null,null,null,this.divAtfl.form);
            obj.set_taborder("50");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00_00_00_00_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00_00_00_00_00_02\"/></Contents>");
            this.divAtfl.addChild(obj.name, obj);

            obj = new Panel("panBtnFile","490.00","0","490","46",null,null,null,null,null,null,this.divAtfl.form);
            obj.set_taborder("1");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divAtfl.addChild(obj.name, obj);

            obj = new Static("staLabel00_02","0","0","490","46",null,null,null,null,null,null,this.divAtfl.form);
            obj.set_taborder("0");
            obj.set_text("기본설계도면(건축)");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divAtfl.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divAplyInfo.form
            obj = new Layout("default","",0,0,this.divAplyInfo.form,function(p){});
            obj.set_type("vertical");
            this.divAplyInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divAtfl.form
            obj = new Layout("default","",0,0,this.divAtfl.form,function(p){});
            obj.set_type("vertical");
            this.divAtfl.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","TextArea00","value","dsInstlChg","cstrnOtlnCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divAplyInfo.form.edtChgFcltCstrnCn","value","dsInstlChg","chgFcltCstrnCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divAplyInfo.form.rdoInstlRsnCd","value","dsInstlChg","instlRsnCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divAplyInfo.form.edtInstlRsnEtcCn","value","dsInstlChg","instlRsnEtcCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divAplyInfo.form.Edit02","value","dsInstlChg","rntar");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divAplyInfo.form.calBgncstPrnmntYmd","value","dsInstlChg","bgncstPrnmntYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divAplyInfo.form.calCmcnPrnmntYmd","value","dsInstlChg","cmcnPrnmntYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divAplyInfo.form.TextArea00","value","dsInstlChg","cstrnOtlnCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divAplyInfo.form.staLabel00","cssclass","dsAtrb","ccAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divAplyInfo.form.staLabel01_00","cssclass","dsAtrb","ccAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divAplyInfo.form.staLabel03_00","cssclass","dsAtrb","ccAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divAplyInfo.form.staLabel03_00_00","cssclass","dsAtrb","ccAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divAplyInfo.form.staLabel05_00_00","cssclass","dsAtrb","ccAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divAplyInfo.form.staLabel05_01_00","cssclass","dsAtrb","ccAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divAplyInfo.form.edtChgFcltCstrnCn","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divAplyInfo.form.rdoInstlRsnCd","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divAplyInfo.form.edtInstlRsnEtcCn","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divAplyInfo.form.chkArch","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divAplyInfo.form.CheckBox00","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divAplyInfo.form.CheckBox02","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divAplyInfo.form.CheckBox03","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divAplyInfo.form.CheckBox04","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divAplyInfo.form.calBgncstPrnmntYmd","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divAplyInfo.form.calCmcnPrnmntYmd","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divAplyInfo.form.TextArea00","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divAplyInfo.form.Edit02","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CST002S02.xfdl","xjs::TaskCom.xjs");
        this.registerScript("CST002S02.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	CST002S02.xfdl
        *  @Creator 	ELUON INS
        *  @CreateDate 	2024/09/25
        *  @Desction
        *  @Author
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/09/25			김주화					최초생성
        *******************************************************************************
        */

        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;  // 업무공통
        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
            trace(this.name + "_LLLLLLLLLLLLLLLLLLLLLLLLLL_11111");
        	this.gfnFormOnload(obj);        // 필수함수

        	// Master Dataset
            this.dsMst = this.lookup("dsMst");
        	this.dsMst.addEventHandler("onload", this.dsMst_onload, this);
        	this.dsMst.addEventHandler("onvaluechanged", this.dsMst_onvaluechanged, this);
        	// 시설물 설치(변경) Dataset
            this.dsInstlChg = this.lookup("dsInstlChg");
        	this.dsInstlChg.addEventHandler("onvaluechanged", this.dsInstlChg_onvaluechanged, this);
        	// 첨부파일 Dataset
            this.dsAtfl = this.lookup("dsAtfl");
        	// 첨부파일 표출용 Dataset
            this.dsFile = this.lookup("dsFile");
        	// 속성 Dataset
            this.dsAtrb = this.lookup("dsAtrb");
        	this.dsAtrb.addEventHandler("onvaluechanged", this.dsAtrb_onvaluechanged, this);
        	// 단계별 속성 값 조회
        	this.cfnGetAtrb = this.lookupFunc("cfnGetAtrb");
        	// 업무처리흐름 정보 유무 확인
        	this.cfnIsExstTaskPrcsFlw = this.lookupFunc("cfnIsExstTaskPrcsFlw");
        	// Raonk Upload
        	this.RaonkUpload = this.lookup("RaonkUpload");
        	// 공통코드 불러오기
        	this.cfnComCdLoad({ dsInstlRsnCd:"TSCFICINS" });  // 설치사유
        	trace(this.name + "_LLLLLLLLLLLLLLLLLLLLLLLLLL_22222");


        	trace(this.name + "CST002S02 : " + this.dsAtfl.getRowCount());
        	trace(this.name + "CST002S02 : " + this.dsFile.getRowCount());
        	trace(this.name + "CST002S02 : " + this.dsAtrb.getRowCount());
        };

        this.dsMst_onload = function(obj,e)
        {
        // 	// (미)첨부파일 숨김 처리
        // 	var form = this;
        // 	var isVisible = this.cfnGetAtrb.call("isTAS00233");  // TAS00233:신청서작성
        // 	Array.from(this.divAtfl.form.components).forEach(function(v) {
        // 		if(v instanceof Grid) {
        // 			if(nexacro.main.gfnIsNull(nexacro.main.dsFile.getColumn(0, v.getCellProperty("body", 0, "text").substr(5)))) {
        // 				form.getPanel(v).visible = isVisible;
        // 			}
        // 		}
        // 	});

        	this.resetScroll();
        };

        this.dsMst_onvaluechanged= function(obj,e)
        {
        	// 공사(작업)분야
        	if(this.gfnIsNull(e.columnid) || e.columnid == "cstrnJobFldCd") {
        	    // 조회시 값 설정
        		if(this.gfnIsNull(e.columnid)) {
        		    var cstrnJobFldCd = this.dsMst.getColumn(0, "cstrnJobFldCd") || "";
        			this.cfnToArray(this.divAplyInfo.form.panCstrnJobFldCd).forEach(function(v) {
        			    v.value = cstrnJobFldCd.indexOf(v.truevalue) == -1 ? v.falsevalue : v.truevalue;
        			});
        		}
        	}

        	this.resetScroll();
        };

        this.dsInstlChg_onvaluechanged = function(obj,e)
        {
        	trace("test 02 dsInstlChg_onvaluechanged : ");
        	// 설치사유
        	if(this.gfnIsNull(e.columnid) || e.columnid == "instlRsnCd") {
        	    this.divAplyInfo.form.panInstlEtcRsn.visible = obj.getColumn(0, "instlRsnCd") == "TSCFICINS008";  // 기타("TSCFICINS008")
        		if(!this.divAplyInfo.form.panInstlEtcRsn.visible) {
        			obj.setColumn(0, "instlRsnEtcCn","");  // 기타 설치사유
        		}
        	}

        	this.resetScroll();
        };

        this.dsAtrb_onvaluechanged = function(obj,e)
        {
        	// 그리드 Expr 실행
        	Array.from(this.divAtfl.form.components).forEach(function(v) {
        	    if(v instanceof Grid) {
        		    v.redrawExprCell();
        		}
        	});
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
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
        this.cfnIsVldDat = function() {
            console.log(this.name + "_VVVVVVVVVVVVVVVVVVVVVVVVVVVVVV");

        	// 신청서 작성 및 보완 단계만 점검
        	if(!this.cfnGetAtrb.call("isTAS00233")) { return true; }

        	// 시설공사명(변경공사명)
        	if(this.gfnIsNull( this.dsInstlChg.getColumn(0, "chgFcltCstrnCn"))) {
        		// {0}는(은) 필수 항목입니다!
        		this.gfnAlertMsg("CST_004", "CST_004", ["시설공사명(변경공사명)"], function() {
        			this.parent.parent.setStepIndex(1);
        			this.divAplyInfo.form.edtChgFcltCstrnCn.setFocus();
        		});

        		return false;
        	}

        	// 설치사유
        	if(this.gfnIsNull( this.dsInstlChg.getColumn(0, "instlRsnCd"))) {
        		// {0}는(은) 필수 항목입니다!
        		this.gfnAlertMsg("CST_004", "CST_004", ["설치사유"], function() {
        			this.parent.parent.setStepIndex(1);
        			this.divAplyInfo.form.rdoInstlRsnCd.setFocus();
        		});

        		return false;
        	}

        	// 설치사유 기타
        	if(this.gfnIsNull( this.dsInstlChg.getColumn(0, "instlRsnEtcCn")) && this.divAplyInfo.form.panInstlEtcRsn.visible) {
        		// {0}는(은) 필수 항목입니다!
        		this.gfnAlertMsg("CST_004", "CST_004", ["설치사유 기타"], function() {
        			this.parent.parent.setStepIndex(1);
        			this.divAplyInfo.form.edtInstlRsnEtcCn.setFocus();
        		});

        		return false;
        	}

        	// 공사(작업)분야
        	if(this.gfnIsNull( this.dsMst.getColumn(0, "cstrnJobFldCd"))) {
        		// {0}는(은) 필수 항목입니다!
        		this.gfnAlertMsg("CST_004", "CST_004", ["공사(작업)분야"], function() {
        			this.parent.parent.setStepIndex(1);
        			this.divAplyInfo.form.chkArch.setFocus();
        		});

        		return false;
        	}

        	// 착공예정일
        	if(this.gfnIsNull( this.dsInstlChg.getColumn(0, "bgncstPrnmntYmd"))) {
        		// {0}는(은) 필수 항목입니다!
        		this.gfnAlertMsg("CST_004", "CST_004", ["착공예정일"], function() {
        			this.parent.parent.setStepIndex(1);
        			this.divAplyInfo.form.calBgncstPrnmntYmd.setFocus();
        		});

        		return false;
        	}

        	// 준공예정일
        	if(this.gfnIsNull( this.dsInstlChg.getColumn(0, "cmcnPrnmntYmd"))) {
        		// {0}는(은) 필수 항목입니다!
        		this.gfnAlertMsg("CST_004", "CST_004", ["준공예정일"], function() {
        			this.parent.parent.setStepIndex(1);
        			this.divAplyInfo.form.calCmcnPrnmntYmd.setFocus();
        		});

        		return false;
        	}

        	return true;
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.Grid_oncellclick = function(obj,e)
        {
            // 그리드 내의 버튼 클릭
        	if(e.col == 0) {
        		if(obj.getCellPropertyValue(0, 0, "cssclass") == "CellFile") {  // 파일
        			// 파일 다운로드
        			this.cfnFileDwnld(this.RaonkUpload, this.dsAtfl, obj.getCellProperty("body", 0, "text").substr(5), e);
        		}
            } else if(e.col == 1) {
        	    if(obj.getCellPropertyValue(0, 1, "edittype") != "none") {
        			if(obj.getCellPropertyValue(0, 1, "cssclass") == "CellFileUp") {  // 파일찾기
        				// 첨부파일 선택 창 열기
        				this.cfnSetAtflInfo(this.RaonkUpload, obj).OpenFileDialog();
        			} else {  // 파일삭제
        				// 첨부 파일 삭제
        				this.cfnSetAtflInfo(this.RaonkUpload, obj).cfnDelAtfl();
        			}
        		}
        	}
        };

        // 공사(작업)분야
        this.CheckBox_onchanged = function(obj,e)
        {
        	this.dsMst.setColumn(0, "cstrnJobFldCd", this.cfnToArray(this.divAplyInfo.form.panCstrnJobFldCd).filter(function(v) { return v.isChecked(); } ).map(function(v) { return v.truevalue; }).join(","));
        };

        // 펼침(축소) 버튼 클릭
        this.Button_onclick = function(obj,e)
        {
        	// 접기(펼침)
            this.cfnFold(obj, e.ctrlkey);
        };

        this.Button_ondblclick = function(obj,e)
        {
        	// 접기(펼침)
            this.cfnFold(obj, true);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnAplyInfo.addEventHandler("onclick",this.Button_onclick,this);
            this.btnAplyInfo.addEventHandler("ondblclick",this.Button_ondblclick,this);
            this.divAplyInfo.form.chkArch.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.divAplyInfo.form.CheckBox00.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.divAplyInfo.form.CheckBox02.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.divAplyInfo.form.CheckBox03.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.divAplyInfo.form.CheckBox04.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.btnAtfl.addEventHandler("onclick",this.Button_onclick,this);
            this.btnAtfl.addEventHandler("ondblclick",this.Button_ondblclick,this);
            this.divAtfl.form.Grid00.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divAtfl.form.Grid00_00.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divAtfl.form.Grid00_00_00.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divAtfl.form.Grid00_00_00_00.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divAtfl.form.Grid00_00_00_00_00.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divAtfl.form.Grid00_00_00_00_00_00.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divAtfl.form.Grid00_00_00_00_00_00_00.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divAtfl.form.Grid00_00_00_00_00_00_00_00.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divAtfl.form.Grid00_00_00_00_00_00_01.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divAtfl.form.Grid00_00_00_00_00_00_02.addEventHandler("oncellclick",this.Grid_oncellclick,this);
        };
        this.loadIncludeScript("CST002S02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
