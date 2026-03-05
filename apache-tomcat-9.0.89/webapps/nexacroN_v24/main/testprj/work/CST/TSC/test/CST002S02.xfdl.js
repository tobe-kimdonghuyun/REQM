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

        //include "xjs::TaskCom.xjs";  // 업무공통
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







        //test
        /**
        *  입주자 서비스 플랫폼 구축(업무공통)
        *  @FileName 	TaskCom.xjs
        *  @Creator 	김주화
        *  @CreateDate 	2024/08/27
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        * 2024/08/27			김주화	T				업무공통 Library
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.FV_DS_INPT_GRD_PRZT_INFO  = "dsInptGrdPrztInfo"  ;  // 개인화정보관련 입력 데이터셋
        this.FV_DS_OTPT_GRD_PRZT_INFO  = "dsOtptGrdPrztInfo"  ;  // 개인화정보관련 출력 데이터셋
        this.FV_DS_INPT_WORK_FLOW_INFO = "dsInptWorkFlowInfo" ;  // 워크플로우 입력 데이터셋
        this.FV_DS_OTPT_WORK_FLOW_INFO = "dsOtptWorkFlowInfo" ;  // 워크플로우 출력 데이터셋
        this.FV_DS_OTPT_TASK_FLOW_INFO = "dsOtptTaskPrcsFlwWf";  // 업무처리흐름 출력 데이터셋
        this.FV_DS_OTPT_GET_APLY_SE_NM = "dsOtptGetAplySeNm"  ;  // 신청구분명 가져오기 출력 데이터셋
        this.FV_DS_ATRB_NAME           = "dsAtrb"             ;  // 속성 데이터셋
        this.FV_DS_FILE_DWNLD          = "dsFileDwnld"        ;  // 파일 다운로드용 데이터셋
        this.FV_ARGS_WORK_FLOW_INFO    = "";                     // 워크플로우 조회 조건


        /**
        * @class grid 필수입력여부 체크하기
        * @param objGrid : 그리드 정보
        * @return true/false
        * @example if (this.cfnGrdIsValidated(this.divGrd.form.grdList) == false) return
        */
        this.cfnGrdIsValidated = function(objGrid) {

        	for (var i = 0; i < objGrid.rowcount; i++) {
        		for (var j = 0; j < objGrid.getCellCount("head"); j++) {
        			if (objGrid.getCellPropertyValue(-1,j,"cssclass" ) == "CellHead_E") {
        				if (objGrid.getCellPropertyValue(i,j,"edittype" ) == "date") {
        					if (!this.gfn_isYMD(objGrid.getCellValue(i,j))) {
        						// {0} 날짜 오류입니다.
        						this.gfnAlertMsg("msg", "REN_013", [(i+1) + "라인에 " + objGrid.getHeadValue(j) ]);
        						//objGrid.setFocusRow(i);
        						objGrid.setCellPos(j, i);
        						//objGrid.showEditor(true);

        						return false;
        					}
        				} else {
        					if (this.gfnIsNull(objGrid.getCellValue(i,j))) {
        						//{0} 을(를) 입력하십시오.
        						this.gfnAlertMsg("msg", "MSG_009", [(i+1) + "라인에 " + objGrid.getHeadValue(j) ]);
        						//objGrid.setFocusRow(i);
        						objGrid.setCellPos(j, i);
        						//objGrid.showEditor(true);

        						return false;
        					}
        				}
        			}
        		}
        	}

        	return true;
        };

        /**
        * @class 공통코드 불러오기
        * @param objJson : 공통코드 정보
        * @return 없음
        * @example this.cfnComCdLoad({ id:"commonCodeSearch", cbf:"fn_callBack", dsCd1:"EMPTIT:A", dsCd2:"SVCCD:S", dsCd3:"Y10:B", dsCd4:"COMPROC" });
        *          :A = "전체", :S = "선택", :B 또는 : = ""
        *
        */
        this.cfnComCdLoad = function(objJson) {
            var strSvcId    = objJson.id || "_cfnComCdLoad_";
        	var strSvcUrl   = "com/comCdLoad.do";
        	var inData      = "";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = objJson.cbf;
        	var isASync     = true;

        	for(key in objJson) {
        		if(key.startsWith("ds")) {
        			strArg  += " " + key + ":" + objJson[key];
        			outData += " " + key + "=" + key;
        		}
        	}

        	strArg   = "inData=" + nexacro.wrapQuote(strArg.trim());
        	outData = outData.trim();

            this.gfnTransaction (strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isASync);
        };

        /**
        * @class 기타코드 불러오기
        * @param objJson : 기타코드 정보
        * @return 없음
        * @example this.cfnEtcCdLoad({ id:"etcCodeSearch", cbf:"fn_callBack", dsCd1:"selectEtcCode:A", dsCd2:"selectEtcCode2:S", dsCd3:"selectEtcCode3:B", dsCd4:"selectEtcCode4" });
        *          :A = "전체", :S = "선택", :B 또는 : = ""
        *
        */
        this.cfnEtcCdLoad = function(objJson) {
            var strSvcId    = objJson.id || "_cfnEtcCdLoad_";
        	var strSvcUrl   = "com/etcCdLoad.do";
        	var inData      = "";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = objJson.cbf;
        	var isASync     = true;

        	for(key in objJson) {
        		if(key.startsWith("ds")) {
        			strArg  += "|" + key + ";" + objJson[key];
        			outData += " " + key + "=" + key;
        		}
        	}

        	strArg   = "inData=" + nexacro.wrapQuote(strArg.trim());
        	outData = outData.trim();

            this.gfnTransaction (strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isASync);
        };

        /**
        * @class 개인화정보 불러오기
        * @param objJson : 그리드ID 정보
        * @return 없음
        * @example this.cfnSetGrdPrztInfo({ userId:"admin", scrnId:"CST002M00" });
        *          this.cfnSetGrdPrztInfo();
        */
        this.cfnSetGrdPrztInfo = function(objJson) {
            objJson = objJson ? objJson : {};

            // 입력 데이터셋
        	this[this.FV_DS_INPT_GRD_PRZT_INFO] = new Dataset(this.FV_DS_INPT_GRD_PRZT_INFO);
        	this[this.FV_DS_INPT_GRD_PRZT_INFO].addColumn("userId", 'String');
        	this[this.FV_DS_INPT_GRD_PRZT_INFO].addColumn("scrnId", 'String');

        	var nRow = this[this.FV_DS_INPT_GRD_PRZT_INFO].addRow();
        	this[this.FV_DS_INPT_GRD_PRZT_INFO].setColumn(nRow, "userId", this.objApp.gdsUser.getColumn(0,"userId") || objJson.userId || "test");
        	this[this.FV_DS_INPT_GRD_PRZT_INFO].setColumn(nRow, "scrnId", this.name || objJson.scrnId || "TEST");

            // 출력 데이터셋
        	this[this.FV_DS_OTPT_GRD_PRZT_INFO] = new Dataset(this.FV_DS_OTPT_GRD_PRZT_INFO);

            // 서비스 호출
            var strSvcId    = "_cfnSetGrdPrztInfo_";
        	var strSvcUrl   = "com/comGrdPrztInfoLoad.do";
        	var inData      = this.FV_DS_INPT_GRD_PRZT_INFO + "=" + this.FV_DS_INPT_GRD_PRZT_INFO;
        	var outData     = this.FV_DS_OTPT_GRD_PRZT_INFO + "=" + this.FV_DS_OTPT_GRD_PRZT_INFO;
        	var strArg      = "";
        	var callBackFnc = "cbfComGrdPrztInfo";
        	var isASync     = true;

            this.gfnTransaction (strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isASync);
        };

        /**
        * @class 개인화정보 저장
        * @param objJson : 그리드ID 정보
        * @return 없음
        * @example this.cfnStrgGrdPrztInfo({ userId:"admin", scrnId:"CST002M00", objtId:"grdList", prztInfo:"그리드format" });
        *          this.cfnStrgGrdPrztInfo({ userId:"admin", scrnId:"CST002M00", objtId:"this.tabMain.tpgWord.form.divForm.form.divGrd.form.grdList", prztInfo:"그리드format" });
        *
        */
        this.cfnStrgGrdPrztInfo = function(objJson) {
            // 입력 데이터셋
        	this[this.FV_DS_INPT_GRD_PRZT_INFO] = new Dataset(this.FV_DS_INPT_GRD_PRZT_INFO);
        	this[this.FV_DS_INPT_GRD_PRZT_INFO].addColumn("userId"  , 'String');
        	this[this.FV_DS_INPT_GRD_PRZT_INFO].addColumn("scrnId"  , 'String');
        	this[this.FV_DS_INPT_GRD_PRZT_INFO].addColumn("objtId"  , 'String');
        	this[this.FV_DS_INPT_GRD_PRZT_INFO].addColumn("prztInfo", 'String');

        	var nRow = this[this.FV_DS_INPT_GRD_PRZT_INFO].addRow();
        	this[this.FV_DS_INPT_GRD_PRZT_INFO].setColumn(nRow, "userId"  , this.objApp.gdsUser.getColumn(0,"userId") || objJson.userId || "test");
        	this[this.FV_DS_INPT_GRD_PRZT_INFO].setColumn(nRow, "scrnId"  , objJson.scrnId || this.name || "TEST");
        	this[this.FV_DS_INPT_GRD_PRZT_INFO].setColumn(nRow, "objtId"  , objJson.objtId);
        	this[this.FV_DS_INPT_GRD_PRZT_INFO].setColumn(nRow, "prztInfo", objJson.prztInfo);

            // 서비스 호출
            var strSvcId    = "_cfnStrgGrdPrztInfo_";
        	var strSvcUrl   = "com/comGrdPrztInfoStrg.do";
        	var inData      = this.FV_DS_INPT_GRD_PRZT_INFO + "=" + this.FV_DS_INPT_GRD_PRZT_INFO;
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "cbfComGrdPrztInfo";
        	var isASync     = true;

            this.gfnTransaction (strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isASync);
        };

        /**
        * @class 개인화정보 불러오기 콜백함수
        * @param
        * @return 없음
        * @example
        *
        */
        this.cbfComGrdPrztInfo = function(srvcId, errCd, errMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errCd != 0) { return; }

        	if(srvcId == "_cfnSetGrdPrztInfo_") {   // 개인화정보 조회
        		if(this[this.FV_DS_OTPT_GRD_PRZT_INFO].rowcount == 0) { return; };

        		for(var i = 0; i < this[this.FV_DS_OTPT_GRD_PRZT_INFO].rowcount; i++) {
        			var objGrd = [this, this[this.FV_DS_OTPT_GRD_PRZT_INFO].getColumn(i, "objtId").split(".")].map(function(v, i, o) { if(i == 0) { for(var x of o[1]) { v = v[x]; } return v; } })[0];
        			objGrd["orgnlFrm"] = objGrd.getFormatString();  // 원본 형식을 저장
        			objGrd.set_formats(this[this.FV_DS_OTPT_GRD_PRZT_INFO].getColumn(i, "prztInfo"));
        		}

        		if(this.isValidObject(this.FV_DS_OTPT_GRD_PRZT_INFO)) this.removeChild(this.FV_DS_OTPT_GRD_PRZT_INFO);
        		if(this.isValidObject(this.FV_DS_OTPT_GRD_PRZT_INFO)) this.removeChild(this.FV_DS_OTPT_GRD_PRZT_INFO);
        	} else if(srvcId == "_cfnStrgGrdPrztInfo_") {  // 개인화정보 저장

        	}
        };

        /**
        * @class 버튼생성
        * @param objJson : 조회조건(조회 조건 중 필요한 항목만 전달하면 됨)
        * @return 없음
        * @example this.cfnBtnCrt({ crtTrgt:this.divBtn, lnkgEvnt:this.Button_onclick, cbf:"fnCallback", inqCnd : { jobSeCd:"TSC", jobTycoSeCd:"TSPTSC003", taskPrcsStepSeCd:"ACT10135", jobPrcsPrgrsSeCd:"TAS10397", prcsSeCd:"CTL10875", nextStepJobPrcsPrgrsSeCd:"TAS10397"} });
        *
        */
        this.cfnBtnCrt = function(objJson) {
            this.FV_ARGS_WORK_FLOW_INFO = objJson;  // 조회조건 저장

            // 입력 데이터셋
        	this[this.FV_DS_INPT_WORK_FLOW_INFO] = new Dataset(this.FV_DS_INPT_WORK_FLOW_INFO);

        	// 컬럼생성
        	for(key in objJson.inqCnd) {
        	    this[this.FV_DS_INPT_WORK_FLOW_INFO].addColumn(key, 'String');
        	}

        	var nRow = this[this.FV_DS_INPT_WORK_FLOW_INFO].addRow();
        	// 컬럼값 지정
        	for(key in objJson.inqCnd) {
        		this[this.FV_DS_INPT_WORK_FLOW_INFO].setColumn(nRow, key, objJson.inqCnd[key]);
        	}

        	// 출력 데이터셋
        	this[this.FV_DS_OTPT_WORK_FLOW_INFO] = new Dataset(this.FV_DS_OTPT_WORK_FLOW_INFO);
        	this[this.FV_DS_OTPT_TASK_FLOW_INFO] = new Dataset(this.FV_DS_OTPT_TASK_FLOW_INFO);

            // 서비스 호출
            var strSvcId    = this.FV_ARGS_WORK_FLOW_INFO.id || "_cfnBtnCrt_";
        	var strSvcUrl   = "com/workFlowLoad.do";
        	var inData      = this.FV_DS_INPT_WORK_FLOW_INFO + "=" + this.FV_DS_INPT_WORK_FLOW_INFO;
        	var outData     = this.FV_DS_OTPT_WORK_FLOW_INFO + "=" + this.FV_DS_OTPT_WORK_FLOW_INFO + " "
        	                + this.FV_DS_OTPT_TASK_FLOW_INFO + "=" + this.FV_DS_OTPT_TASK_FLOW_INFO
        					;
        	var strArg      = "";
        	var callBackFnc = "cbfBtnCrt";
        	var isASync     = false;

            this.gfnTransaction (strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isASync);
        };

        /**
        * @class 버튼생성 콜백함수
        * @param
        * @return 없음
        * @example
        *
        */
        this.cbfBtnCrt = function(srvcId, errCd, errMsg)
        {
        	// 버튼을 생성할 대상이 있으면...
        	if(this.FV_ARGS_WORK_FLOW_INFO.crtTrgt) {
        		// 기존 버튼 제거
        		Array.from(this.FV_ARGS_WORK_FLOW_INFO.crtTrgt.form.components).forEach(function(v) {
        			if(v.name.startsWith("CTL")) { v.destroy(); v = null; }
        		});

        		// 에러 시 화면 처리 내역
        		if(errCd != 0) { return; }

        		var dsOtpt = this[this.FV_DS_OTPT_WORK_FLOW_INFO];
        		for(var i = 0; i < dsOtpt.rowcount; i++) {
        			var btnNew = new nexacro.Button;
        			var btnId  = dsOtpt.getColumn(i, "prcsSeCd");
        			var btnNm  = dsOtpt.getColumn(i, "prcsSeCdNm");

        			btnNew.init(btnId, 0, 0, 0, 40);          // 초기화
        			btnNew.fittocontents = "width";           // 넓이 자동조절
        			btnNew.text          = btnNm;             // 버튼 문자
        			btnNew.cssclass      = dsOtpt.getColumn(i, "cssClass") || "btn_WF_No";
        			btnNew.addEventHandler("onclick", this.FV_ARGS_WORK_FLOW_INFO.lnkgEvnt, this);
        			this.FV_ARGS_WORK_FLOW_INFO.crtTrgt.addChild(btnId, btnNew);
        			btnNew.expr = dsOtpt.getColumn(i, "exclCnd");

        			if(this.FV_ARGS_WORK_FLOW_INFO.crtTrgt.form.isValidObject(btnId)) {
        				btnNew.show();
        			} else {
        				this.FV_ARGS_WORK_FLOW_INFO.crtTrgt.form[btnId] = null;
        			}
        		}
        	}

        	if(this.isValidObject(this.FV_DS_INPT_WORK_FLOW_INFO)) { this.removeChild(this.FV_DS_INPT_WORK_FLOW_INFO) };
        	//if(this.isValidObject(this.FV_DS_OTPT_WORK_FLOW_INFO)) { this.removeChild(this.FV_DS_OTPT_WORK_FLOW_INFO) };

        	if(this.FV_ARGS_WORK_FLOW_INFO.cbf) {
        		this.lookupFunc(this.FV_ARGS_WORK_FLOW_INFO.cbf).call(srvcId, errCd, errMsg);
        	}

        	// 버튼 Div
        	this.FV_ARGS_WORK_FLOW_INFO.crtTrgt.form.resetScroll();
        };

        /**
        * @class 신청구분명 불러오기
        * @param objJson : 신청구분 정보
        * @return 없음
        * @example this.cfnGetAplySeNm({ id:"getAplySeNm", cbf:"fnCallBack", aplySeCd:"TSPTSC001" });
        *
        */
        this.cfnGetAplySeNm = function(objJson) {
            var strSvcId    = objJson.id || "_cfnGetAplySeNm_";
        	var strSvcUrl   = "com/getAplySeNm.do";
        	var inData      = "";
        	var outData     = this.FV_DS_OTPT_GET_APLY_SE_NM + "=" + this.FV_DS_OTPT_GET_APLY_SE_NM;
        	var strArg      = "inData=" + nexacro.wrapQuote(objJson.aplySeCd);
        	var callBackFnc = objJson.cbf;
        	var isASync     = true;

        	// 출력 데이터셋
        	this[this.FV_DS_OTPT_GET_APLY_SE_NM] = new Dataset(this.FV_DS_OTPT_GET_APLY_SE_NM);

            this.gfnTransaction (strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isASync);
        };

        /**
        * @class 신청구분명 돌려주기
        * @param
        * @return aplySeNm : 신청구분명
        * @example this.cfnGvbkAplySeNm();
        *
        */
        this.cfnGvbkAplySeNm = function()
        {
            var aplySeNm = "";

            if(this[this.FV_DS_OTPT_GET_APLY_SE_NM].rowcount > 0) {
        		aplySeNm = this[this.FV_DS_OTPT_GET_APLY_SE_NM].getColumn(0, "aplySeNm");
        	}

        	if(this.isValidObject(this.FV_DS_OTPT_GET_APLY_SE_NM)) this.removeChild(this.FV_DS_OTPT_GET_APLY_SE_NM);

        	return aplySeNm;
        };

        /**
        * @class panel의 Items의 항목을 배열로 반환한다.
        * @param pan : panel
        * @return 배열
        * @example this.cfnToArray(this.panel);
        *
        */
        this.cfnToArray = function(pan)
        {
            var oArry = new Array();
            if(!pan || !pan.items || !pan.items.length) { return oArry; }

        	for(var i = 0; i < pan.items.length; i++) {
        		oArry.push(pan.parent[pan.items[i].componentid]);
        	}

        	return oArry;
        };

        /**
        * @class 현재 사용자의 공사 직원 여부를 반환한다.
        * @param
        * @return boolean
        * @example this.cfnIsCstrnEmp();
        *
        */
        this.cfnIsCstrnEmp = function()
        {
            return this.objApp.gdsUser.getColumn(0, "iiacEmpYn") == "1";  // 공사직원여부
        };

        /**
        * @class 현재 사용자의 처리자 직원 여부를 반환한다.
        * @param
        * @return boolean
        * @example this.cfnIsPrcrEmp();
        *
        */
        this.cfnIsPrcrEmp = function()
        {
            return this.objApp.gdsUser.getColumn(0, "cpatcoEmpYn") == "1";  // 협력사직원여부
        };

        /**
        * @class 현재 사용자의 공사 직원 및 처리자 직원 여부를 반환한다.
        * @param
        * @return boolean
        * @example this.cfnIsEmp();
        *
        */
        this.cfnIsEmp = function()
        {
            return this.cfnIsCstrnEmp() || this.cfnIsPrcrEmp();  // 공사직원 Or 협력사직원
        };

        /**
        * @class 화면에서 접기(펼침) 버튼 클릭시 접기 또는 펼침 기능 수행
        * @param  obj : 버튼
        * @return
        * @example this.cfnFold(obj);
        *
        */
        this.cfnFold = function(obj, ctrlkey)
        {
            // 서브 타이틀 그룹
            if(this.getPanel(obj)) {
        		var oForm = this;
        		var oDiv = this["div" + obj.name.substr(3)];
        		obj.cssclass = obj.cssclass == "btn_WF_ACPlus" ? "btn_WF_ACMinus" : "btn_WF_ACPlus";  // +,- css 변경
        		oDiv.visible = obj.cssclass != "btn_WF_ACPlus";

        		if(ctrlkey) {
        			this.cfnToArray(this.panForm).forEach(function(v) {
        				if(oForm["pan" + v.name.substr(3)]) {
        					if(v.name == oDiv.name || v instanceof Panel) { return; }
        					if(oForm["pan" + v.name.substr(3)].visible) {
        						v.visible = oDiv.visible;
        						oForm["btn" + v.name.substr(3)].cssclass = obj.cssclass;
        					}
        				}
        			});
        		}
        	// Div(가이드, 업무처리흐름도...)
        	} else {
        	    obj.parent.parent.upheight        = !obj.parent.parent.upheight        ? obj.parent.parent.height        : obj.parent.parent.upheight       ;  // div height 저장
        	    obj.parent.parent.upfittocontents = !obj.parent.parent.upfittocontents ? obj.parent.parent.fittocontents : obj.parent.parent.upfittocontents;  // div fittocontents 저장
        		obj.parent.parent.height          = obj.cssclass == "btn_WF_ACPlus" ? obj.parent.parent.upheight        : "54"  ;  // div height 변경
        		obj.parent.parent.fittocontents   = obj.cssclass == "btn_WF_ACPlus" ? obj.parent.parent.upfittocontents : "none";  // div fittocontents 변경
        		obj.cssclass = obj.cssclass == "btn_WF_ACPlus" ? "btn_WF_ACMinus" : "btn_WF_ACPlus";             // +,- css 변경
        	}
        };

        /**
        * @class Left Menu 및 화면전환
        * @param oItems : 화면ID
        * @return
        * @example this.fnMovePage(Left MenuID, 화면ID, 화면Url);
        *          this.fnMovePage("MNG_0000000021", "MNG_0000000144", "work::CST/CAD/CST009M01.xfdl");
        */
        this.fnMovePage = function(leftId, menuId, menuUrl)
        {
        	var objArg   = {};
        	this.objApp.gvVfrs.set_separatesize("108,*,0,0");

        	this.gfnLeftMenuCreate(leftId);
        	this.gfnMenuFocus(leftId);
        	this.gfnLeftTit(leftId);

        	var actNm = '';
        	this.gfnPageOpen(menuId, menuUrl, actNm, objArg);
        };

        /**
        * @class Dataset의 현재 행 정보를 JSON 형태로 변환하여 돌려준다
        * @param  obj : Dataset
        * @return
        * @example this.cfnFold(obj);
        *
        */
        this.cfnGetToJson = function(obj) {
        	var oJson = {};
        	for(var i = 0; i < obj.getColCount(); i++) {
        		oJson[obj.getColID(i)] = obj.getColumn(obj.rowposition, obj.getColID(i));
        	}

        	return oJson;
        };

        /**
        * @class obj 그룹 내의 Grid를 찾아 바인딩된 첫번째 컬럼명(colId)을 돌려준다
        * @param  ru : RaonkUpload, obj : Object
        * @return
        * @example this.cfnSetAtflInfo(this.RaonkUpload, obj).OpenFileDialog();
        *
        */
        this.cfnSetAtflInfo = function(ru, obj) {
        	// Grid 에서 찾기
        	if(obj instanceof Grid) {
        		ru.upatflinfo = { colid:obj.getCellProperty("body", 0, "text").substr(5) };
        		return ru;
            // PANEL 에서 찾기
        	} else if(this.getPanel(obj) instanceof Panel) {
        		for(var i = 0, obj = this.getPanel(obj); i <= 5; i++) {
        			var grd = null;
        			Array.from(obj.items).forEach(function(v) { if(obj.parent[v.componentid] instanceof Grid) { grd = obj.parent[v.componentid]; }});
        			if(grd) {
        				ru.upatflinfo = { colid:grd.getCellProperty("body", 0, "text").substr(5) };
        				return ru;
        			} else {
        				obj = this.getPanel(obj);
        			}
        		}
        	}

        	return null;
        };

        /**
        * @class RaonkUpload용 customValue를 돌려준다.
        * @param  str : String("bgncstAprvRvwY06110" 또는 JSON.stringify({ "strCustomValue" : "bgncstAprvRvwY06110" }))
        * @return customValue
        * @example this.cfnGetCustomValue(JSON.stringify({ "strCustomValue" : colid }));
        *
        */
        this.cfnGetCustomValue = function(str) {
            try {
        	    return JSON.parse(str).strCustomValue;
        	} catch (e) {
        	    return str;
        	}
        };

        /**
        * @class obj 그룹 내의 특정 유형을 찾아 돌려준다
        * @param  obj : Object, type : 컴포넌트 유형
        * @return  Object
        * @example this.cfnSetObjInGroup(obj, Div);
        *
        */
        this.cfnFindObjByAtrb = function(obj, atrb, name) {
         	for(var i = 0, comps = obj.components; i <= 20; i++) {
        	    var obj = Array.from(comps).filter(function(v) {
        			return v[atrb]  == name; })[0];
        		if(obj) { return obj; };
        	}

        	return null;
        };

        /**
        * @class 현재 단계의 속성 값을 생성한다
        * @param dsAtrb:속성DS, taskCd:현재업무코드, isEdtrPsblty:정보편집권한여부
        * @return 없음
        * @example this.cfnAtrbCrt(dsAtrb, taskCd, isEdtrPsblty);
        */
        this.cfnAtrbCrt = function(ds, taskCd, isEdtrPsblty) {
            this.FV_DS_ATRB_NAME = ds.name;  // 속성 DS 명

        	ds.enableevent = false;
        	ds.clearData();
            // DS 컬럼 초기화
        	for(var i = ds.colcount - 1; i >= 0; i--) { ds.deleteColumn(i);	}

            // 데이터셋 컬럼 생성
        	for(var i = 0; i < ds.getConstCount(); i++) {
        		var colId = ds.getConstColID(i);
        		ds.addColumn("vs" + colId, "INT"   );  // visible
        		ds.addColumn("ro" + colId, "INT"   );  // readonly
        		ds.addColumn("cc" + colId, "STRING");  // cssclass
        	}
        	ds.addRow();

        	// 데이터셋 컬럼 값 생성
        	for(var i = 0; i < ds.getConstCount(); i++) {
        		var colId = ds.getConstColID(i);
        		var json  = JSON.parse(ds.getConstColumn(i));
        		var isEditable = json.editable.indexOf(taskCd) != -1;  // 편집가능여부
        		var isReadonly = json.readonly.indexOf(taskCd) != -1;  // 읽기전용여부

                // 이미 처리된 단계 여부 확인
        	    var bIsPrcs = this[this.FV_DS_OTPT_TASK_FLOW_INFO] && this[this.FV_DS_OTPT_TASK_FLOW_INFO].findRowExpr(nexacro.wrapQuote(json.editable) + ".indexOf(jobCd) != -1") != -1;

        		ds.setColumn(0, "vs" + colId, !isEdtrPsblty && (colId.endsWith("Edtr") || !bIsPrcs) ? false : !isEdtrPsblty || isEditable || isReadonly);
        		ds.setColumn(0, "ro" + colId, !isEdtrPsblty && (colId.endsWith("Edtr") || !bIsPrcs) ? true  : !isEdtrPsblty || !isEditable);
        		ds.setColumn(0, "cc" + colId, "sta_WF_Label" + (isEdtrPsblty && isEditable ? "_E" : ""));
        	}

        	ds.enableevent = true;
        };


        /**
        * @class 워크플로우 정보 가져오기
        * @param prcsSeCd : 기능ID(버튼ID)
        * @return 워크플로우 정보(JSON)
        * @example this.getWfInfo("CTL00459");
        *
        */
        this.cfnGetWfInfo = function(prcsSeCd) {
        	this[this.FV_DS_OTPT_WORK_FLOW_INFO].updatecontrol = false;
        	this[this.FV_DS_OTPT_WORK_FLOW_INFO].rowposition = this[this.FV_DS_OTPT_WORK_FLOW_INFO].findRow("prcsSeCd", prcsSeCd);
        	this[this.FV_DS_OTPT_WORK_FLOW_INFO].setRowType(this[this.FV_DS_OTPT_WORK_FLOW_INFO].rowposition, Dataset.ROWTYPE_UPDATE);
        	this[this.FV_DS_OTPT_WORK_FLOW_INFO].updatecontrol = true;

        	return this.cfnGetToJson(this[this.FV_DS_OTPT_WORK_FLOW_INFO]);
        };

        // Main 화면의 함수만 호출하기 위한 처리
        // -------------------------------------
        if(this.parent.name == "divWork") {
        	/**
        	* @class 단계의 속성 값을 돌려준다
        	* @param colId : 속성 컬럼 ID
        	* @return 없음
        	* @example this.cfnGetAtrb(colId);
        	*/
        	this.cfnGetAtrb = function(colId) {
        		var ds = this[this.FV_DS_ATRB_NAME];
        		return colId.split(",").filter(function(v) { return ds.getColumn(0, v); }).length > 0;
        	};

        	/**
        	* @class 업무처리흐름 정보 유무 확인
        	* @param cnd : 조건
        	* @return 여부
        	* @example this.cfnIsExstTaskPrcsFlw({ seq:"999", jobCd:"TAS10453", nextJobCd:"TAS10404" }));
        	*
        	*/
        	this.cfnIsExstTaskPrcsFlw = function(cnd) {
        		if(this.isValidObject(this.FV_DS_OTPT_TASK_FLOW_INFO)) {
        			return this[this.FV_DS_OTPT_TASK_FLOW_INFO].findRowExpr(Object.keys(cnd).map(function(k) { return (k + " == '" + cnd[k] + "'"); }).join(" && ")) != -1;
        		}

        		return false;
        	};
        }

        /**
        * @class 탭페이지 Index 찾기
        * @param this.tab : Tab Object, name : TabPageName
        * @return TabPageName의 Index
        * @example this.cfnGetTabIndex(this.tab, tappagename);
        *
        */
        this.cfnGetTabIndex = function(obj, name) {
            return Array.from(obj.tabpages).map(function(v) { return v.name; }).indexOf(name);
        };

        /**
        * @class 첨부파일 다운로드
        * @param ru : RaonkUpload, ds : dataset, colId : 다운로드 대상 column ID, e : event
        * @return
        * @example this.cfnFileDwnld(RaonkUpload, ds, colId, e);
        *
        */
        this.cfnFileDwnld = function(ru, ds, colId, e) {
            this[this.FV_DS_FILE_DWNLD] = new Dataset(this.FV_DS_FILE_DWNLD);  // 데이터셋 생성
        	var dsFile = this[this.FV_DS_FILE_DWNLD];
        	dsFile.copyData(ds);  // 데이터셋 형식 복사를 위한 처리
        	dsFile.clearData();   // 데이터셋 행 삭제
        	dsFile.copyRow(dsFile.addRow(), ds, ds.findRow("colId", colId));  // 다운로드 대상 파일 정보 복사
        	//console.log(dsFile.saveXML());
            this.gfnDownloadFile(ru, dsFile, e);  // 다운로드
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
