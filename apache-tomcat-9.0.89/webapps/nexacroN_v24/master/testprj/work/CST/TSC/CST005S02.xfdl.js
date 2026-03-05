(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST005S02");
            this.set_titletext("신청정보(퇴거)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTpbizCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cdId\">TSCFICINS001</Col><Col id=\"cdNm\">신규조성</Col></Row><Row><Col id=\"cdId\">TSCFICINS002</Col><Col id=\"cdNm\">리노베이션</Col></Row><Row><Col id=\"cdId\">TSCFICINS003</Col><Col id=\"cdNm\">레이아웃변경</Col></Row><Row><Col id=\"cdId\">TSCFICINS004</Col><Col id=\"cdNm\">파사드변경</Col></Row><Row><Col id=\"cdId\">TSCFICINS005</Col><Col id=\"cdNm\">칸막이변경</Col></Row><Row><Col id=\"cdId\">TSCFICINS006</Col><Col id=\"cdNm\">장비변경</Col></Row><Row><Col id=\"cdId\">TSCFICINS007</Col><Col id=\"cdNm\">간판교체</Col></Row><Row><Col id=\"cdId\">TSCFICINS008</Col><Col id=\"cdNm\">기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Panel("panForm","0","0","100.00%","3624",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_fittocontents("height");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panAplyInfo\"/><PanelItem id=\"PanelItem02\" componentid=\"divAplyInfo\"/><PanelItem id=\"PanelItem03\" componentid=\"panAtfl\"/><PanelItem id=\"PanelItem04\" componentid=\"divAtfl\"/><PanelItem id=\"PanelItem05\" componentid=\"panMtrlInfoDmnd\"/><PanelItem id=\"PanelItem06\" componentid=\"divMtrlInfoDmnd\"/><PanelItem id=\"PanelItem07\" componentid=\"panIdntyAplcnt\"/><PanelItem id=\"PanelItem08\" componentid=\"divIdntyAplcnt\"/></Contents>");
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

            obj = new Div("divAplyInfo","1540","0","100.00%","870",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Panel("pan03","1350","386","100.00%","93",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("12");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"pan_04_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"pan_04_00\"/></Contents>");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Panel("panTpbizEtcCn","1350","479","100.00%","93",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("33");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_00_00\"/></Contents>");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Panel("pan04_01_00_00","1350","479","100.00%","93",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("36");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_00_00_00_00_00_00\"/></Contents>");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Panel("pan04_01_00_00_00","1350","479","100.00%","93",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("45");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_00_00_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_00_00_00_00_00_00_00\"/></Contents>");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Panel("pan08","1350","572","100.00%","195",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("23");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_fittocontents("height");
            obj.set_spacing("0px 0px 10px 0px ");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"pan05_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel04_02\"/></Contents>");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_00_00_00_01","30.00","30","100%","46",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("41");
            obj.set_text("원상회복 확인요청일");
            obj.set_cssclass("sta_WF_Label_E");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Calendar("calRtosIdntyDmndYmd","93","456","150","40",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("42");
            obj.set_dateformat("yyyy-MM-dd");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00_00_00_01","50.00","30","200","86",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("43");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staLabel03_00_01_00_00_00_01\"/><PanelItem id=\"PanelItem00\" componentid=\"calRtosIdntyDmndYmd\"/></Contents>");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00_00_00_00_00","20","0","200","0",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("44");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents/>");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Calendar("calCtrtPrdBgngYmd","93","456","150","40",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("37");
            obj.set_dateformat("yyyy-MM-dd");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_00_00_00_00","525","455","100%","46",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("38");
            obj.set_text("계약기간종료일");
            obj.set_cssclass("sta_WF_Label_E");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00_00_00_00","20","0","200","86",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("40");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_01_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"calCtrtPrdEndYmd\"/></Contents>");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Calendar("calCtrtPrdEndYmd","93","456","150","40",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("39");
            obj.set_dateformat("yyyy-MM-dd");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Panel("pan_04_00_00","20","0","305","86",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("28");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"cmTpbizCd\"/></Contents>");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_00","540","60","100%","46",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("27");
            obj.set_text("업종");
            obj.set_cssclass("sta_WF_Label_E");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Static("staLabel03_00","10.00","10","100%","46",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("0");
            obj.set_text("시행사유");
            obj.set_cssclass("sta_WF_Label_E");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Edit("edtEnfcRsnCn","10.00","56","100%","40",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("1");
            obj.set_readonly("false");
            obj.set_displaynulltext("설치사유 기타");
            obj.set_text("");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","30.00","10","1240","175",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtEnfcRsnCn\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel04_02_00\"/></Contents>");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Panel("panInstlEtcRsn","1331","293","100.00%","186",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("3");
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
            obj.set_taborder("4");
            obj.set_text("공사(작업)분야");
            obj.set_cssclass("sta_WF_Label_E");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new CheckBox("chkArch","0.00","0","74","40",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("5");
            obj.set_text("건축");
            obj.set_fittocontents("width");
            obj.set_truevalue("Y06110");
            obj.set_value("false");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","74.00","0","74","40",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("6");
            obj.set_text("기계");
            obj.set_fittocontents("width");
            obj.set_truevalue("Y06120");
            obj.set_value("false");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox02","148.00","0","74","40",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("7");
            obj.set_text("전기");
            obj.set_fittocontents("width");
            obj.set_truevalue("Y06140");
            obj.set_value("false");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox03","222.00","0","74","40",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("8");
            obj.set_text("통신");
            obj.set_fittocontents("width");
            obj.set_truevalue("Y06130");
            obj.set_value("false");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox04","296.00","0","74","40",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("9");
            obj.set_text("소방");
            obj.set_fittocontents("width");
            obj.set_truevalue("Y06180");
            obj.set_value("false");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Panel("panCstrnJobFldCd","20.00","66","100%","40",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("10");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem04\" componentid=\"chkArch\"/><PanelItem id=\"PanelItem05\" componentid=\"CheckBox00\"/><PanelItem id=\"PanelItem00\" componentid=\"CheckBox02\"/><PanelItem id=\"PanelItem01\" componentid=\"CheckBox03\"/><PanelItem id=\"PanelItem02\" componentid=\"CheckBox04\"/></Contents>");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Panel("pan_04_00","40.00","20","305","86",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("11");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staLabel03_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"panCstrnJobFldCd\"/></Contents>");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Combo("cmTpbizCd","453","100","100%","40",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("29");
            obj.set_innerdataset("dsTpbizCd");
            obj.set_datacolumn("cdNm");
            obj.set_codecolumn("cdId");
            obj.set_value("");
            obj.set_index("-1");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Static("staLabel05_00_00","0","0","100%","46",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("13");
            obj.set_text("착공예정일");
            obj.set_cssclass("sta_WF_Label_E");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Calendar("calBgncstPrnmntYmd","0","46","150","40",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("14");
            obj.set_dateformat("yyyy-MM-dd");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Panel("pan04_00","20.00","0","200","86",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("15");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"calBgncstPrnmntYmd\"/></Contents>");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Static("staLabel05_01_00","10.00","10","100%","46",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("16");
            obj.set_text("준공예정일");
            obj.set_cssclass("sta_WF_Label_E");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Calendar("calCmcnPrnmntYmd","10.00","56","150","40",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("17");
            obj.set_dateformat("yyyy-MM-dd");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Panel("pan05_01","650.00","0","200","86",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("18");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staLabel05_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"calCmcnPrnmntYmd\"/></Contents>");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Panel("pan05_00","10","10","100.00%","95",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("19");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan04_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan05_01\"/></Contents>");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Static("sta00","20.00","0","100%","40",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("20");
            obj.set_text("착공·준공 예정일은 공항공사 담당자와 상의 후 여유있게 설정해주시길 바랍니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Static("sta00_00","20.00","44","100%","40",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("21");
            obj.set_text("원상회복(퇴거)관련 작업신고서 신청은 착공·준공 예정일 내 기간만 가능합니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Panel("Panel04_02","0","95","100.00%","89",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("22");
            obj.set_spacing("0px 20px 0px 20px");
            obj.set_fittocontents("height");
            obj.set_type("vertical");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta00\"/><PanelItem id=\"PanelItem02\" componentid=\"sta00_00\"/></Contents>");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_02","390","1110","100%","46",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("24");
            obj.set_text("공사개요");
            obj.set_cssclass("sta_WF_Label");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","380","1146","100%","60",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("25");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Panel("pan02_00","1350","858","100.00%","117",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("26");
            obj.set_horizontalgap("20");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"TextArea00\"/></Contents>");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_00_00","30.00","30","100%","46",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("30");
            obj.set_text("업종 기타");
            obj.set_cssclass("sta_WF_Label_E");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Edit("edtTpbizEtcCn","30.00","76","100%","40",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("31");
            obj.set_inputfilter("none");
            obj.set_maxlength("4");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00_00","50.00","30","300","86",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("32");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"edtTpbizEtcCn\"/></Contents>");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_00_00_00","30.00","30","100%","46",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("34");
            obj.set_text("계약기간시작일");
            obj.set_cssclass("sta_WF_Label_E");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00_00_00","50.00","30","200","86",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("35");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staLabel03_00_01_00_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"calCtrtPrdBgngYmd\"/></Contents>");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Static("sta00_01","20.00","0","100%","40",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("46");
            obj.set_text("업로드하는 파일의 크기는 100mb 이하로 제한됩니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","20.00","44","100%","40",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("47");
            obj.set_text("안전관리계획서는 3억원 이상 또는 3개월 이상 시설공사 추진시 업로드하시기 바랍니다");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divAplyInfo.addChild(obj.name, obj);

            obj = new Panel("Panel04_02_00","0","95","100.00%","89",null,null,null,null,null,null,this.divAplyInfo.form);
            obj.set_taborder("48");
            obj.set_fittocontents("height");
            obj.set_type("vertical");
            obj.set_verticalgap("4");
            obj.set_spacing("4px 0px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"sta00_00_00\"/></Contents>");
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

            obj = new Div("divAtfl","1740","1010","100.00%","1152",null,null,null,null,null,null,this);
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
            obj.set_text("원상회복 설계도면(기계)");
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
            obj.set_text("원상회복 설계도면(전기)");
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
            obj.set_text("원상회복 설계도면(통신)");
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
            obj.set_text("원상회복 설계도면(소방)");
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
            obj.set_text("원상회복 설계도면(건축)");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divAtfl.addChild(obj.name, obj);

            obj = new Div("divMtrlInfoDmnd","0","3363","100.00%","849",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("div00");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","137","3798","100%","46",null,null,null,null,null,null,this.divMtrlInfoDmnd.form);
            obj.set_taborder("0");
            obj.set_text("자재정보필요여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divMtrlInfoDmnd.addChild(obj.name, obj);

            obj = new Static("Static06","45","3881","100%","30",null,null,null,null,null,null,this.divMtrlInfoDmnd.form);
            obj.set_taborder("1");
            obj.set_text("<u v=\'true\'><fc v=\'#1e4ebe\'>건물별 자재목록 다운로드</fc></u>");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_usedecorate("true");
            this.divMtrlInfoDmnd.addChild(obj.name, obj);

            obj = new Panel("Panel10","20","10","100%","162",null,null,null,null,null,null,this.divMtrlInfoDmnd.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static05\"/><PanelItem id=\"PanelItem03\" componentid=\"rdoMtrlInfoNeedYn\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/></Contents>");
            this.divMtrlInfoDmnd.addChild(obj.name, obj);

            obj = new Panel("Panel09","0","0","100.00%","183",null,null,null,null,null,null,this.divMtrlInfoDmnd.form);
            obj.set_taborder("3");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_horizontalgap("20");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel10\"/></Contents>");
            this.divMtrlInfoDmnd.addChild(obj.name, obj);

            obj = new Panel("Panel00","20","104","100%","68",null,null,null,null,null,null,this.divMtrlInfoDmnd.form);
            obj.set_taborder("5");
            obj.set_spacing("4px 0px 0px");
            obj.set_type("vertical");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static06\"/><PanelItem id=\"PanelItem02\" componentid=\"Static06_00\"/></Contents>");
            this.divMtrlInfoDmnd.addChild(obj.name, obj);

            obj = new Radio("rdoMtrlInfoNeedYn","188","55","100%","40",null,null,null,null,null,null,this.divMtrlInfoDmnd.form);
            obj.set_taborder("4");
            obj.set_rowcount("-1");
            obj.set_columncount("-1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divMtrlInfoDmnd_form_rdoMtrlInfoNeedYn_innerdataset = new nexacro.NormalDataset("divMtrlInfoDmnd_form_rdoMtrlInfoNeedYn_innerdataset", obj);
            divMtrlInfoDmnd_form_rdoMtrlInfoNeedYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">필요</Col><Col id=\"codecolumn\">1</Col></Row><Row><Col id=\"datacolumn\">불필요</Col><Col id=\"codecolumn\">0</Col></Row></Rows>");
            obj.set_innerdataset(divMtrlInfoDmnd_form_rdoMtrlInfoNeedYn_innerdataset);
            this.divMtrlInfoDmnd.addChild(obj.name, obj);

            obj = new Static("Static06_00","45","3881","100%","30",null,null,null,null,null,null,this.divMtrlInfoDmnd.form);
            obj.set_taborder("6");
            obj.set_text("‘건물별 자재목록‘의 정보가 현황과 상이하거나, 없는 경우에만 자재정보를 요청하여 주시기 바랍니다 .");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_usedecorate("true");
            this.divMtrlInfoDmnd.addChild(obj.name, obj);

            obj = new Div("divMtrlInfoNeedList","0","863","100.00%","666",null,null,null,null,null,null,this.divMtrlInfoDmnd.form);
            obj.set_taborder("7");
            obj.set_text("div00");
            obj.set_fittocontents("height");
            this.divMtrlInfoDmnd.addChild(obj.name, obj);

            obj = new CheckBox("cb00_01","55","248","74","40",null,null,null,null,null,null,this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.form);
            obj.set_taborder("3");
            obj.set_text("벽체");
            obj.set_fittocontents("width");
            obj.set_truevalue("TSCARCH003");
            obj.set_value("false");
            this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.addChild(obj.name, obj);

            obj = new CheckBox("cb00_00","55","248","74","40",null,null,null,null,null,null,this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.form);
            obj.set_taborder("2");
            obj.set_text("도어");
            obj.set_fittocontents("width");
            obj.set_truevalue("TSCARCH002");
            obj.set_value("false");
            this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.addChild(obj.name, obj);

            obj = new Static("Static05_00","127","130","100%","46",null,null,null,null,null,null,this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.form);
            obj.set_taborder("0");
            obj.set_text("건축");
            obj.set_cssclass("sta_WF_Label");
            this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.addChild(obj.name, obj);

            obj = new Panel("panDmndMtrlInfoArch","127","180","100%","40",null,null,null,null,null,null,this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.form);
            obj.set_taborder("5");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"cbFlof\"/><PanelItem id=\"PanelItem01\" componentid=\"cb00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"cb00_01\"/><PanelItem id=\"PanelItem03\" componentid=\"cb00_02\"/></Contents>");
            this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.addChild(obj.name, obj);

            obj = new CheckBox("cb00_02","55","248","74","40",null,null,null,null,null,null,this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.form);
            obj.set_taborder("4");
            obj.set_text("천장");
            obj.set_fittocontents("width");
            obj.set_truevalue("TSCARCH004");
            obj.set_value("false");
            this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.addChild(obj.name, obj);

            obj = new CheckBox("cbFlof","55","248","74","40",null,null,null,null,null,null,this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.form);
            obj.set_taborder("1");
            obj.set_text("바닥");
            obj.set_fittocontents("width");
            obj.set_truevalue("TSCARCH001");
            obj.set_value("false");
            this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.addChild(obj.name, obj);

            obj = new Panel("Panel09_00","0","0","100.00%","111",null,null,null,null,null,null,this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.form);
            obj.set_taborder("7");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_horizontalgap("20");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel10_00\"/></Contents>");
            this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.addChild(obj.name, obj);

            obj = new Panel("Panel09_00_00","0","0","100.00%","111",null,null,null,null,null,null,this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.form);
            obj.set_taborder("14");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_horizontalgap("20");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel10_00_00\"/></Contents>");
            this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.addChild(obj.name, obj);

            obj = new Panel("Panel09_00_00_00","0","0","100.00%","111",null,null,null,null,null,null,this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.form);
            obj.set_taborder("19");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_horizontalgap("20");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel10_00_00_00\"/></Contents>");
            this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.addChild(obj.name, obj);

            obj = new Panel("Panel10_00","127","130","100%","90",null,null,null,null,null,null,this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static05_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panDmndMtrlInfoArch\"/></Contents>");
            this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.addChild(obj.name, obj);

            obj = new Static("Static05_00_00","137","357","100%","46",null,null,null,null,null,null,this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.form);
            obj.set_taborder("8");
            obj.set_text("전기");
            obj.set_cssclass("sta_WF_Label");
            this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.addChild(obj.name, obj);

            obj = new CheckBox("cb00_01_00","55","248","116","40",null,null,null,null,null,null,this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.form);
            obj.set_taborder("11");
            obj.set_text("화재감지기");
            obj.set_fittocontents("width");
            obj.set_truevalue("TSCELEC003");
            obj.set_value("false");
            this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.addChild(obj.name, obj);

            obj = new CheckBox("cb00_00_00","55","248","116","40",null,null,null,null,null,null,this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.form);
            obj.set_taborder("10");
            obj.set_text("비상유도등");
            obj.set_fittocontents("width");
            obj.set_truevalue("TSCELEC002");
            obj.set_value("false");
            this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.addChild(obj.name, obj);

            obj = new CheckBox("cb00_03","55","248","74","40",null,null,null,null,null,null,this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.form);
            obj.set_taborder("9");
            obj.set_text("전등");
            obj.set_fittocontents("width");
            obj.set_truevalue("TSCELEC001");
            obj.set_value("false");
            this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.addChild(obj.name, obj);

            obj = new Panel("panDmndMtrlInfoElcty","137","407","100%","40",null,null,null,null,null,null,this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.form);
            obj.set_taborder("12");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"cb00_03\"/><PanelItem id=\"PanelItem01\" componentid=\"cb00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"cb00_01_00\"/></Contents>");
            this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.addChild(obj.name, obj);

            obj = new Panel("Panel10_00_00","137","357","100%","90",null,null,null,null,null,null,this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.form);
            obj.set_taborder("13");
            obj.set_type("vertical");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static05_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panDmndMtrlInfoElcty\"/></Contents>");
            this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_00","110","347","100%","46",null,null,null,null,null,null,this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.form);
            obj.set_taborder("15");
            obj.set_text("기계");
            obj.set_cssclass("sta_WF_Label");
            this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.addChild(obj.name, obj);

            obj = new CheckBox("cb00_03_00","55","248","116","40",null,null,null,null,null,null,this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.form);
            obj.set_taborder("16");
            obj.set_text("스프링쿨러");
            obj.set_fittocontents("width");
            obj.set_truevalue("TSCMACH001");
            obj.set_value("false");
            this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.addChild(obj.name, obj);

            obj = new Panel("panDmndMtrlInfoMchn","110","397","100%","40",null,null,null,null,null,null,this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.form);
            obj.set_taborder("17");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"cb00_03_00\"/></Contents>");
            this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.addChild(obj.name, obj);

            obj = new Panel("Panel10_00_00_00","110","347","100%","90",null,null,null,null,null,null,this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.form);
            obj.set_taborder("18");
            obj.set_type("vertical");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static05_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panDmndMtrlInfoMchn\"/></Contents>");
            this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_00_00","114","424","100%","46",null,null,null,null,null,null,this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.form);
            obj.set_taborder("20");
            obj.set_text("통신");
            obj.set_cssclass("sta_WF_Label");
            this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.addChild(obj.name, obj);

            obj = new CheckBox("cb00_03_00_00","55","248","143","40",null,null,null,null,null,null,this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.form);
            obj.set_taborder("21");
            obj.set_text("비상방송스피커");
            obj.set_fittocontents("width");
            obj.set_truevalue("TSCCOMM001");
            obj.set_value("false");
            this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.addChild(obj.name, obj);

            obj = new Panel("panDmndMtrlInfoCmnct","114","474","100%","40",null,null,null,null,null,null,this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.form);
            obj.set_taborder("22");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"cb00_03_00_00\"/></Contents>");
            this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.addChild(obj.name, obj);

            obj = new Panel("Panel10_00_00_00_00","114","424","100%","90",null,null,null,null,null,null,this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.form);
            obj.set_taborder("23");
            obj.set_type("vertical");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static05_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panDmndMtrlInfoCmnct\"/></Contents>");
            this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.addChild(obj.name, obj);

            obj = new Panel("Panel09_00_00_00_00","0","0","100.00%","111",null,null,null,null,null,null,this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.form);
            obj.set_taborder("24");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_horizontalgap("20");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel10_00_00_00_00\"/></Contents>");
            this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_00_00_00","77","515","100%","46",null,null,null,null,null,null,this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.form);
            obj.set_taborder("25");
            obj.set_text("기타");
            obj.set_cssclass("sta_WF_Label");
            this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.addChild(obj.name, obj);

            obj = new Panel("Panel10_00_00_00_00_00","77","515","100%","90",null,null,null,null,null,null,this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.form);
            obj.set_taborder("28");
            obj.set_type("vertical");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static05_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panDmndMtrlInfoEtc\"/></Contents>");
            this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.addChild(obj.name, obj);

            obj = new Panel("Panel09_00_00_00_00_00","0","0","100.00%","111",null,null,null,null,null,null,this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.form);
            obj.set_taborder("29");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_horizontalgap("20");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel10_00_00_00_00_00\"/></Contents>");
            this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.addChild(obj.name, obj);

            obj = new Panel("panDmndMtrlInfoEtc","77","565","100%","40",null,null,null,null,null,null,this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.form);
            obj.set_taborder("27");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"cb00_03_00_00_00\"/></Contents>");
            this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.addChild(obj.name, obj);

            obj = new CheckBox("cb00_03_00_00_00","55","248","143","40",null,null,null,null,null,null,this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.form);
            obj.set_taborder("26");
            obj.set_text("기타");
            obj.set_fittocontents("width");
            obj.set_truevalue("TSCETC001");
            obj.set_value("false");
            this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_01_00_00_00_00_00","0","0","300","46",null,null,null,null,null,null,this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.form);
            obj.set_taborder("30");
            obj.set_text("기타 자재정보 요청");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("0");
            obj.set_fittocontents("width");
            this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.addChild(obj.name, obj);

            obj = new Panel("Panel00_01_00_00_00_00_00","98","658","100%","46",null,null,null,null,null,null,this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.form);
            obj.set_taborder("32");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_flexmainaxisalign("spacebetween");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_01_01_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01_00_00_00_00_00\"/></Contents>");
            this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_00_00_00","398","664","200","34",null,null,null,null,null,null,this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.form);
            obj.set_taborder("31");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents/>");
            this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.addChild(obj.name, obj);

            obj = new TextArea("txtEtcMtrlInfoDmndCn","98","658","100%","60",null,null,null,null,null,null,this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.form);
            obj.set_taborder("33");
            this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_01_00_00_00_00_00","98","658","100%","90",null,null,null,null,null,null,this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.form);
            obj.set_taborder("34");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_01_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"txtEtcMtrlInfoDmndCn\"/></Contents>");
            this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.addChild(obj.name, obj);

            obj = new Panel("panEtcMtrlInfoDmndCn","1350","2009","100%","111",null,null,null,null,null,null,this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.form);
            obj.set_taborder("35");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_01_00_00_00_00_00\"/></Contents>");
            this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00","1866","3263","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("확인신청인");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btnIdntyAplcnt","3030","3280","34","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_02_00","3000","3263","136","50",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnIdntyAplcnt\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panIdntyAplcnt","0","4212","100%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("15");
            obj.set_flexcrossaxisalign("end");
            obj.set_visible("true");
            obj.set_fittocontents("none");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_02_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("divIdntyAplcnt","0","3151","100.00%","228",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("div01");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_00","0","0","100%","46",null,null,null,null,null,null,this.divIdntyAplcnt.form);
            obj.set_taborder("0");
            obj.set_text("직위");
            obj.set_cssclass("sta_WF_Label");
            this.divIdntyAplcnt.addChild(obj.name, obj);

            obj = new Edit("edt00_02_00_00","0","46","100%","40",null,null,null,null,null,null,this.divIdntyAplcnt.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.divIdntyAplcnt.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_01","30.00","10","300","86",null,null,null,null,null,null,this.divIdntyAplcnt.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_02_00_00\"/></Contents>");
            this.divIdntyAplcnt.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00_00","10.00","10","100%","46",null,null,null,null,null,null,this.divIdntyAplcnt.form);
            obj.set_taborder("3");
            obj.set_text("휴대폰 번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.divIdntyAplcnt.addChild(obj.name, obj);

            obj = new Edit("edt00_03_01_00_00","10.00","56","100%","40",null,null,null,null,null,null,this.divIdntyAplcnt.form);
            obj.set_taborder("4");
            obj.set_displaynulltext("010-123-4567");
            obj.set_readonly("true");
            obj.set_text("");
            this.divIdntyAplcnt.addChild(obj.name, obj);

            obj = new Panel("Panel02_01_00_00","745","0","300","120",null,null,null,null,null,null,this.divIdntyAplcnt.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_03_01_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00\"/></Contents>");
            this.divIdntyAplcnt.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","86","100%","34",null,null,null,null,null,null,this.divIdntyAplcnt.form);
            obj.set_taborder("8");
            obj.set_spacing("4px 0px 0px");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/></Contents>");
            this.divIdntyAplcnt.addChild(obj.name, obj);

            obj = new Panel("panBstrPicMchnFldNmInfo","0","0","100.00%","131",null,null,null,null,null,null,this.divIdntyAplcnt.form);
            obj.set_taborder("6");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_01_00_00\"/></Contents>");
            this.divIdntyAplcnt.addChild(obj.name, obj);

            obj = new Static("Static00","846","126","100%","30",null,null,null,null,null,null,this.divIdntyAplcnt.form);
            obj.set_taborder("7");
            obj.set_text("휴대폰번호는 우측상단 \"사용자 이름\" 클릭 후 해당 메뉴에서 등록 및 수정이 가능합니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divIdntyAplcnt.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_00_00","0","0","100%","46",null,null,null,null,null,null,this.divIdntyAplcnt.form);
            obj.set_taborder("9");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_Label");
            this.divIdntyAplcnt.addChild(obj.name, obj);

            obj = new Edit("edt00_02_00_00_00","0","46","100%","40",null,null,null,null,null,null,this.divIdntyAplcnt.form);
            obj.set_taborder("10");
            obj.set_readonly("true");
            obj.set_text("");
            this.divIdntyAplcnt.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_01_00","30.00","10","300","86",null,null,null,null,null,null,this.divIdntyAplcnt.form);
            obj.set_taborder("11");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_02_00_00_00\"/></Contents>");
            this.divIdntyAplcnt.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00_00_00","10.00","10","100%","46",null,null,null,null,null,null,this.divIdntyAplcnt.form);
            obj.set_taborder("12");
            obj.set_text("소속");
            obj.set_cssclass("sta_WF_Label_E");
            this.divIdntyAplcnt.addChild(obj.name, obj);

            obj = new Edit("edt00_03_01_00_00_00","10.00","56","100%","40",null,null,null,null,null,null,this.divIdntyAplcnt.form);
            obj.set_taborder("13");
            obj.set_readonly("true");
            obj.set_text("");
            this.divIdntyAplcnt.addChild(obj.name, obj);

            obj = new Panel("Panel02_01_00_00_00","745","0","305","86",null,null,null,null,null,null,this.divIdntyAplcnt.form);
            obj.set_taborder("14");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_03_01_00_00_00\"/></Contents>");
            this.divIdntyAplcnt.addChild(obj.name, obj);

            obj = new Panel("panBstrPicMchnFldNmInfo00","0","0","100.00%","97",null,null,null,null,null,null,this.divIdntyAplcnt.form);
            obj.set_taborder("15");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_01_00_00_00\"/></Contents>");
            this.divIdntyAplcnt.addChild(obj.name, obj);

            obj = new Static("staSubTitle01_00","-75","2613","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("자재정보요청");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btnMtrlInfoDmnd","2570","2626","34","31",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel05_00","1071","2613","132","50",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnMtrlInfoDmnd\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panMtrlInfoDmnd","0","3293","100%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("20");
            obj.set_flexcrossaxisalign("end");
            obj.set_fittocontents("none");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel05_00\"/></Contents>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divAplyInfo.form
            obj = new Layout("default","",0,0,this.divAplyInfo.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.pan03.set_taborder("12");
                p.pan03.set_horizontalgap("20");
                p.pan03.set_flexcrossaxiswrapalign("start");
                p.pan03.set_flexwrap("wrap");
                p.pan03.set_fittocontents("height");
                p.pan03.set_verticalgap("0");
                p.pan03.set_spacing("0px 20px 10px 20px");
                p.pan03.set_cssclass("pal_WF_DtlBg");
                p.pan03.move("1350","386","100.00%","93",null,null);

                p.panTpbizEtcCn.set_taborder("33");
                p.panTpbizEtcCn.set_horizontalgap("20");
                p.panTpbizEtcCn.set_flexcrossaxiswrapalign("start");
                p.panTpbizEtcCn.set_flexwrap("wrap");
                p.panTpbizEtcCn.set_fittocontents("height");
                p.panTpbizEtcCn.set_verticalgap("0");
                p.panTpbizEtcCn.set_spacing("0px 20px 10px 20px");
                p.panTpbizEtcCn.set_cssclass("pal_WF_DtlBg");
                p.panTpbizEtcCn.move("1350","479","100.00%","93",null,null);

                p.pan04_01_00_00.set_taborder("36");
                p.pan04_01_00_00.set_horizontalgap("20");
                p.pan04_01_00_00.set_flexcrossaxiswrapalign("start");
                p.pan04_01_00_00.set_flexwrap("wrap");
                p.pan04_01_00_00.set_fittocontents("height");
                p.pan04_01_00_00.set_verticalgap("0");
                p.pan04_01_00_00.set_spacing("0px 20px 10px 20px");
                p.pan04_01_00_00.set_cssclass("pal_WF_DtlBg");
                p.pan04_01_00_00.move("1350","479","100.00%","93",null,null);

                p.pan04_01_00_00_00.set_taborder("45");
                p.pan04_01_00_00_00.set_horizontalgap("20");
                p.pan04_01_00_00_00.set_flexcrossaxiswrapalign("start");
                p.pan04_01_00_00_00.set_flexwrap("wrap");
                p.pan04_01_00_00_00.set_fittocontents("height");
                p.pan04_01_00_00_00.set_verticalgap("0");
                p.pan04_01_00_00_00.set_spacing("0px 20px 10px 20px");
                p.pan04_01_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.pan04_01_00_00_00.move("1350","479","100.00%","93",null,null);

                p.pan08.set_taborder("23");
                p.pan08.set_type("vertical");
                p.pan08.set_cssclass("pal_WF_DtlBg");
                p.pan08.set_fittocontents("height");
                p.pan08.set_spacing("0px 0px 10px 0px ");
                p.pan08.move("1350","572","100.00%","195",null,null);

                p.staLabel03_00_01_00_00_00_01.set_taborder("41");
                p.staLabel03_00_01_00_00_00_01.set_text("원상회복 확인요청일");
                p.staLabel03_00_01_00_00_00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_01_00_00_00_01.move("30.00","30","100%","46",null,null);

                p.calRtosIdntyDmndYmd.set_taborder("42");
                p.calRtosIdntyDmndYmd.set_dateformat("yyyy-MM-dd");
                p.calRtosIdntyDmndYmd.move("93","456","150","40",null,null);

                p.Panel02_00_00_00_00_00_01.set_taborder("43");
                p.Panel02_00_00_00_00_00_01.set_type("vertical");
                p.Panel02_00_00_00_00_00_01.set_flexgrow("1");
                p.Panel02_00_00_00_00_00_01.move("50.00","30","200","86",null,null);

                p.Panel02_00_00_00_00_00_00_00.set_taborder("44");
                p.Panel02_00_00_00_00_00_00_00.set_type("vertical");
                p.Panel02_00_00_00_00_00_00_00.set_flexgrow("1");
                p.Panel02_00_00_00_00_00_00_00.set_fittocontents("height");
                p.Panel02_00_00_00_00_00_00_00.move("20","0","200","0",null,null);

                p.calCtrtPrdBgngYmd.set_taborder("37");
                p.calCtrtPrdBgngYmd.set_dateformat("yyyy-MM-dd");
                p.calCtrtPrdBgngYmd.move("93","456","150","40",null,null);

                p.staLabel03_00_01_00_00_00_00.set_taborder("38");
                p.staLabel03_00_01_00_00_00_00.set_text("계약기간종료일");
                p.staLabel03_00_01_00_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_01_00_00_00_00.move("525","455","100%","46",null,null);

                p.Panel02_00_00_00_00_00_00.set_taborder("40");
                p.Panel02_00_00_00_00_00_00.set_type("vertical");
                p.Panel02_00_00_00_00_00_00.set_flexgrow("1");
                p.Panel02_00_00_00_00_00_00.move("20","0","200","86",null,null);

                p.calCtrtPrdEndYmd.set_taborder("39");
                p.calCtrtPrdEndYmd.set_dateformat("yyyy-MM-dd");
                p.calCtrtPrdEndYmd.move("93","456","150","40",null,null);

                p.pan_04_00_00.set_taborder("28");
                p.pan_04_00_00.set_type("vertical");
                p.pan_04_00_00.set_flexgrow("1");
                p.pan_04_00_00.set_fittocontents("height");
                p.pan_04_00_00.move("20","0","305","86",null,null);

                p.staLabel03_00_00_00.set_taborder("27");
                p.staLabel03_00_00_00.set_text("업종");
                p.staLabel03_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_00_00.move("540","60","100%","46",null,null);

                p.staLabel03_00.set_taborder("0");
                p.staLabel03_00.set_text("시행사유");
                p.staLabel03_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00.move("10.00","10","100%","46",null,null);

                p.edtEnfcRsnCn.set_taborder("1");
                p.edtEnfcRsnCn.set_readonly("false");
                p.edtEnfcRsnCn.set_displaynulltext("설치사유 기타");
                p.edtEnfcRsnCn.move("10.00","56","100%","40",null,null);

                p.Panel02_00.set_taborder("2");
                p.Panel02_00.set_type("vertical");
                p.Panel02_00.set_flexgrow("1");
                p.Panel02_00.set_fittocontents("height");
                p.Panel02_00.move("30.00","10","1240","175",null,null);

                p.panInstlEtcRsn.set_taborder("3");
                p.panInstlEtcRsn.set_horizontalgap("20");
                p.panInstlEtcRsn.set_flexcrossaxiswrapalign("start");
                p.panInstlEtcRsn.set_flexwrap("wrap");
                p.panInstlEtcRsn.set_fittocontents("height");
                p.panInstlEtcRsn.set_verticalgap("0");
                p.panInstlEtcRsn.set_spacing("0px 20px 10px 20px");
                p.panInstlEtcRsn.set_cssclass("pal_WF_DtlBg");
                p.panInstlEtcRsn.move("1331","293","100.00%","186",null,null);

                p.staLabel03_00_00.set_taborder("4");
                p.staLabel03_00_00.set_text("공사(작업)분야");
                p.staLabel03_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_00.move("20.00","20","100%","46",null,null);

                p.chkArch.set_taborder("5");
                p.chkArch.set_text("건축");
                p.chkArch.set_fittocontents("width");
                p.chkArch.set_truevalue("Y06110");
                p.chkArch.set_value("false");
                p.chkArch.move("0.00","0","74","40",null,null);

                p.CheckBox00.set_taborder("6");
                p.CheckBox00.set_text("기계");
                p.CheckBox00.set_fittocontents("width");
                p.CheckBox00.set_truevalue("Y06120");
                p.CheckBox00.set_value("false");
                p.CheckBox00.move("74.00","0","74","40",null,null);

                p.CheckBox02.set_taborder("7");
                p.CheckBox02.set_text("전기");
                p.CheckBox02.set_fittocontents("width");
                p.CheckBox02.set_truevalue("Y06140");
                p.CheckBox02.set_value("false");
                p.CheckBox02.move("148.00","0","74","40",null,null);

                p.CheckBox03.set_taborder("8");
                p.CheckBox03.set_text("통신");
                p.CheckBox03.set_fittocontents("width");
                p.CheckBox03.set_truevalue("Y06130");
                p.CheckBox03.set_value("false");
                p.CheckBox03.move("222.00","0","74","40",null,null);

                p.CheckBox04.set_taborder("9");
                p.CheckBox04.set_text("소방");
                p.CheckBox04.set_fittocontents("width");
                p.CheckBox04.set_truevalue("Y06180");
                p.CheckBox04.set_value("false");
                p.CheckBox04.move("296.00","0","74","40",null,null);

                p.panCstrnJobFldCd.set_taborder("10");
                p.panCstrnJobFldCd.set_fittocontents("height");
                p.panCstrnJobFldCd.set_flexwrap("wrap");
                p.panCstrnJobFldCd.move("20.00","66","100%","40",null,null);

                p.pan_04_00.set_taborder("11");
                p.pan_04_00.set_type("vertical");
                p.pan_04_00.set_flexgrow("1");
                p.pan_04_00.set_fittocontents("height");
                p.pan_04_00.move("40.00","20","305","86",null,null);

                p.cmTpbizCd.set_taborder("29");
                p.cmTpbizCd.set_innerdataset("dsTpbizCd");
                p.cmTpbizCd.set_datacolumn("cdNm");
                p.cmTpbizCd.set_codecolumn("cdId");
                p.cmTpbizCd.set_value("");
                p.cmTpbizCd.set_index("-1");
                p.cmTpbizCd.move("453","100","100%","40",null,null);

                p.staLabel05_00_00.set_taborder("13");
                p.staLabel05_00_00.set_text("착공예정일");
                p.staLabel05_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel05_00_00.move("0","0","100%","46",null,null);

                p.calBgncstPrnmntYmd.set_taborder("14");
                p.calBgncstPrnmntYmd.set_dateformat("yyyy-MM-dd");
                p.calBgncstPrnmntYmd.move("0","46","150","40",null,null);

                p.pan04_00.set_taborder("15");
                p.pan04_00.set_type("vertical");
                p.pan04_00.set_flexgrow("1");
                p.pan04_00.move("20.00","0","200","86",null,null);

                p.staLabel05_01_00.set_taborder("16");
                p.staLabel05_01_00.set_text("준공예정일");
                p.staLabel05_01_00.set_cssclass("sta_WF_Label_E");
                p.staLabel05_01_00.move("10.00","10","100%","46",null,null);

                p.calCmcnPrnmntYmd.set_taborder("17");
                p.calCmcnPrnmntYmd.set_dateformat("yyyy-MM-dd");
                p.calCmcnPrnmntYmd.move("10.00","56","150","40",null,null);

                p.pan05_01.set_taborder("18");
                p.pan05_01.set_type("vertical");
                p.pan05_01.set_flexgrow("1");
                p.pan05_01.move("650.00","0","200","86",null,null);

                p.pan05_00.set_taborder("19");
                p.pan05_00.set_horizontalgap("20");
                p.pan05_00.set_flexcrossaxiswrapalign("start");
                p.pan05_00.set_flexwrap("wrap");
                p.pan05_00.set_verticalgap("0");
                p.pan05_00.set_spacing("0px 20px 10px 20px");
                p.pan05_00.set_fittocontents("height");
                p.pan05_00.move("10","10","100.00%","95",null,null);

                p.sta00.set_taborder("20");
                p.sta00.set_text("착공·준공 예정일은 공항공사 담당자와 상의 후 여유있게 설정해주시길 바랍니다.");
                p.sta00.set_cssclass("sta_WF_Des");
                p.sta00.set_fittocontents("height");
                p.sta00.move("20.00","0","100%","40",null,null);

                p.sta00_00.set_taborder("21");
                p.sta00_00.set_text("원상회복(퇴거)관련 작업신고서 신청은 착공·준공 예정일 내 기간만 가능합니다.");
                p.sta00_00.set_cssclass("sta_WF_Des");
                p.sta00_00.set_fittocontents("height");
                p.sta00_00.move("20.00","44","100%","40",null,null);

                p.Panel04_02.set_taborder("22");
                p.Panel04_02.set_spacing("0px 20px 0px 20px");
                p.Panel04_02.set_fittocontents("height");
                p.Panel04_02.set_type("vertical");
                p.Panel04_02.set_verticalgap("4");
                p.Panel04_02.move("0","95","100.00%","89",null,null);

                p.staLabel03_00_02.set_taborder("24");
                p.staLabel03_00_02.set_text("공사개요");
                p.staLabel03_00_02.set_cssclass("sta_WF_Label");
                p.staLabel03_00_02.move("390","1110","100%","46",null,null);

                p.TextArea00.set_taborder("25");
                p.TextArea00.move("380","1146","100%","60",null,null);

                p.pan02_00.set_taborder("26");
                p.pan02_00.set_horizontalgap("20");
                p.pan02_00.set_verticalgap("0");
                p.pan02_00.set_spacing("0px 20px 10px 20px");
                p.pan02_00.set_cssclass("pal_WF_DtlBg");
                p.pan02_00.set_type("horizontal");
                p.pan02_00.set_flexwrap("wrap");
                p.pan02_00.set_fittocontents("height");
                p.pan02_00.move("1350","858","100.00%","117",null,null);

                p.staLabel03_00_01_00_00.set_taborder("30");
                p.staLabel03_00_01_00_00.set_text("업종 기타");
                p.staLabel03_00_01_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_01_00_00.move("30.00","30","100%","46",null,null);

                p.edtTpbizEtcCn.set_taborder("31");
                p.edtTpbizEtcCn.set_inputfilter("none");
                p.edtTpbizEtcCn.set_maxlength("4");
                p.edtTpbizEtcCn.move("30.00","76","100%","40",null,null);

                p.Panel02_00_00_00_00.set_taborder("32");
                p.Panel02_00_00_00_00.set_type("vertical");
                p.Panel02_00_00_00_00.set_flexgrow("1");
                p.Panel02_00_00_00_00.move("50.00","30","300","86",null,null);

                p.staLabel03_00_01_00_00_00.set_taborder("34");
                p.staLabel03_00_01_00_00_00.set_text("계약기간시작일");
                p.staLabel03_00_01_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_01_00_00_00.move("30.00","30","100%","46",null,null);

                p.Panel02_00_00_00_00_00.set_taborder("35");
                p.Panel02_00_00_00_00_00.set_type("vertical");
                p.Panel02_00_00_00_00_00.set_flexgrow("1");
                p.Panel02_00_00_00_00_00.move("50.00","30","200","86",null,null);

                p.sta00_01.set_taborder("46");
                p.sta00_01.set_text("업로드하는 파일의 크기는 100mb 이하로 제한됩니다.");
                p.sta00_01.set_cssclass("sta_WF_Des");
                p.sta00_01.set_fittocontents("height");
                p.sta00_01.move("20.00","0","100%","40",null,null);

                p.sta00_00_00.set_taborder("47");
                p.sta00_00_00.set_text("안전관리계획서는 3억원 이상 또는 3개월 이상 시설공사 추진시 업로드하시기 바랍니다");
                p.sta00_00_00.set_cssclass("sta_WF_Des");
                p.sta00_00_00.set_fittocontents("height");
                p.sta00_00_00.move("20.00","44","100%","40",null,null);

                p.Panel04_02_00.set_taborder("48");
                p.Panel04_02_00.set_fittocontents("height");
                p.Panel04_02_00.set_type("vertical");
                p.Panel04_02_00.set_verticalgap("4");
                p.Panel04_02_00.set_spacing("4px 0px 0px");
                p.Panel04_02_00.move("0","95","100.00%","89",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divAplyInfo.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divAplyInfo.form
            obj = new Layout("Layout0","",0,0,this.divAplyInfo.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divAplyInfo.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divAtfl.form
            obj = new Layout("default","",0,0,this.divAtfl.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panTitle.set_taborder("2");
                p.panTitle.set_cssclass("pan_WF_FileTitle");
                p.panTitle.move("20","10","100%","46",null,null);

                p.Grid00.set_taborder("3");
                p.Grid00.set_binddataset("dsFile");
                p.Grid00.set_autofittype("col");
                p.Grid00.set_cssclass("grd_WF_FileAdd");
                p.Grid00.move("20.00","60","100%","40",null,null);

                p.panFile.set_taborder("4");
                p.panFile.set_fittocontents("height");
                p.panFile.set_spacing("10px 20px 10px 20px");
                p.panFile.set_flexwrap("wrap");
                p.panFile.set_cssclass("pal_WF_DtlBg");
                p.panFile.set_verticalgap("4");
                p.panFile.move("0","0","100%","111",null,null);

                p.staLabel00_02_00.set_taborder("5");
                p.staLabel00_02_00.set_text("원상회복 설계도면(기계)");
                p.staLabel00_02_00.set_cssclass("sta_WF_Label");
                p.staLabel00_02_00.set_flexgrow("1");
                p.staLabel00_02_00.move("0","0","490","46",null,null);

                p.panBtnFile00.set_taborder("6");
                p.panBtnFile00.set_flexgrow("1");
                p.panBtnFile00.set_flexcrossaxisalign("start");
                p.panBtnFile00.set_flexmainaxisalign("end");
                p.panBtnFile00.set_horizontalgap("10");
                p.panBtnFile00.move("490.00","0","490","46",null,null);

                p.panTitle00.set_taborder("7");
                p.panTitle00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00.move("20","10","100%","46",null,null);

                p.Grid00_00.set_taborder("8");
                p.Grid00_00.set_binddataset("dsFile");
                p.Grid00_00.set_autofittype("col");
                p.Grid00_00.set_cssclass("grd_WF_FileAdd");
                p.Grid00_00.move("1080.00","756","100%","40",null,null);

                p.panFile00.set_taborder("9");
                p.panFile00.set_fittocontents("height");
                p.panFile00.set_spacing("10px 20px 10px 20px");
                p.panFile00.set_flexwrap("wrap");
                p.panFile00.set_cssclass("pal_WF_DtlBg");
                p.panFile00.set_verticalgap("4");
                p.panFile00.move("0","111","100%","111",null,null);

                p.staLabel00_02_00_00.set_taborder("10");
                p.staLabel00_02_00_00.set_text("원상회복 설계도면(전기)");
                p.staLabel00_02_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_02_00_00.set_flexgrow("1");
                p.staLabel00_02_00_00.move("0","0","490","46",null,null);

                p.panBtnFile00_00.set_taborder("11");
                p.panBtnFile00_00.set_flexgrow("1");
                p.panBtnFile00_00.set_flexcrossaxisalign("start");
                p.panBtnFile00_00.set_flexmainaxisalign("end");
                p.panBtnFile00_00.set_horizontalgap("10");
                p.panBtnFile00_00.move("490.00","0","490","46",null,null);

                p.panTitle00_00.set_taborder("12");
                p.panTitle00_00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00_00.move("20","10","100%","46",null,null);

                p.Grid00_00_00.set_taborder("13");
                p.Grid00_00_00.set_binddataset("dsFile");
                p.Grid00_00_00.set_autofittype("col");
                p.Grid00_00_00.set_cssclass("grd_WF_FileAdd");
                p.Grid00_00_00.move("20.00","60","100%","40",null,null);

                p.panFile00_00.set_taborder("14");
                p.panFile00_00.set_fittocontents("height");
                p.panFile00_00.set_spacing("10px 20px 10px 20px");
                p.panFile00_00.set_flexwrap("wrap");
                p.panFile00_00.set_cssclass("pal_WF_DtlBg");
                p.panFile00_00.set_verticalgap("4");
                p.panFile00_00.move("0","222","100%","111",null,null);

                p.staLabel00_02_00_00_00.set_taborder("15");
                p.staLabel00_02_00_00_00.set_text("원상회복 설계도면(통신)");
                p.staLabel00_02_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_02_00_00_00.set_flexgrow("1");
                p.staLabel00_02_00_00_00.move("0","0","490","46",null,null);

                p.panBtnFile00_00_00.set_taborder("16");
                p.panBtnFile00_00_00.set_flexgrow("1");
                p.panBtnFile00_00_00.set_flexcrossaxisalign("start");
                p.panBtnFile00_00_00.set_flexmainaxisalign("end");
                p.panBtnFile00_00_00.set_horizontalgap("10");
                p.panBtnFile00_00_00.move("490.00","0","490","46",null,null);

                p.panTitle00_00_00.set_taborder("17");
                p.panTitle00_00_00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00_00_00.move("20","10","100%","46",null,null);

                p.Grid00_00_00_00.set_taborder("18");
                p.Grid00_00_00_00.set_binddataset("dsFile");
                p.Grid00_00_00_00.set_autofittype("col");
                p.Grid00_00_00_00.set_cssclass("grd_WF_FileAdd");
                p.Grid00_00_00_00.move("20.00","60","100%","40",null,null);

                p.panFile00_00_00.set_taborder("19");
                p.panFile00_00_00.set_fittocontents("height");
                p.panFile00_00_00.set_spacing("10px 20px 10px 20px");
                p.panFile00_00_00.set_flexwrap("wrap");
                p.panFile00_00_00.set_cssclass("pal_WF_DtlBg");
                p.panFile00_00_00.set_verticalgap("4");
                p.panFile00_00_00.move("0","333","100%","111",null,null);

                p.staLabel00_02_00_00_00_00.set_taborder("20");
                p.staLabel00_02_00_00_00_00.set_text("원상회복 설계도면(소방)");
                p.staLabel00_02_00_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_02_00_00_00_00.set_flexgrow("1");
                p.staLabel00_02_00_00_00_00.move("0","0","490","46",null,null);

                p.panBtnFile00_00_00_00.set_taborder("21");
                p.panBtnFile00_00_00_00.set_flexgrow("1");
                p.panBtnFile00_00_00_00.set_flexcrossaxisalign("start");
                p.panBtnFile00_00_00_00.set_flexmainaxisalign("end");
                p.panBtnFile00_00_00_00.set_horizontalgap("10");
                p.panBtnFile00_00_00_00.move("490.00","0","490","46",null,null);

                p.panTitle00_00_00_00.set_taborder("22");
                p.panTitle00_00_00_00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00_00_00_00.move("20","10","100%","46",null,null);

                p.Grid00_00_00_00_00.set_taborder("23");
                p.Grid00_00_00_00_00.set_binddataset("dsFile");
                p.Grid00_00_00_00_00.set_autofittype("col");
                p.Grid00_00_00_00_00.set_cssclass("grd_WF_FileAdd");
                p.Grid00_00_00_00_00.move("20.00","60","100%","40",null,null);

                p.panFile00_00_00_00.set_taborder("24");
                p.panFile00_00_00_00.set_fittocontents("height");
                p.panFile00_00_00_00.set_spacing("10px 20px 10px 20px");
                p.panFile00_00_00_00.set_flexwrap("wrap");
                p.panFile00_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.panFile00_00_00_00.set_verticalgap("4");
                p.panFile00_00_00_00.move("0","444","100%","111",null,null);

                p.staLabel00_02_00_00_00_00_00.set_taborder("25");
                p.staLabel00_02_00_00_00_00_00.set_text("공정표");
                p.staLabel00_02_00_00_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_02_00_00_00_00_00.set_flexgrow("1");
                p.staLabel00_02_00_00_00_00_00.move("0","0","490","46",null,null);

                p.panBtnFile00_00_00_00_00.set_taborder("26");
                p.panBtnFile00_00_00_00_00.set_flexgrow("1");
                p.panBtnFile00_00_00_00_00.set_flexcrossaxisalign("start");
                p.panBtnFile00_00_00_00_00.set_flexmainaxisalign("end");
                p.panBtnFile00_00_00_00_00.set_horizontalgap("10");
                p.panBtnFile00_00_00_00_00.move("490.00","0","490","46",null,null);

                p.panTitle00_00_00_00_00.set_taborder("27");
                p.panTitle00_00_00_00_00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00_00_00_00_00.move("20","10","100%","46",null,null);

                p.Grid00_00_00_00_00_00.set_taborder("28");
                p.Grid00_00_00_00_00_00.set_binddataset("dsFile");
                p.Grid00_00_00_00_00_00.set_autofittype("col");
                p.Grid00_00_00_00_00_00.set_cssclass("grd_WF_FileAdd");
                p.Grid00_00_00_00_00_00.move("20.00","60","100%","40",null,null);

                p.panFile00_00_00_00_00.set_taborder("29");
                p.panFile00_00_00_00_00.set_fittocontents("height");
                p.panFile00_00_00_00_00.set_spacing("10px 20px 10px 20px");
                p.panFile00_00_00_00_00.set_flexwrap("wrap");
                p.panFile00_00_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.panFile00_00_00_00_00.set_verticalgap("4");
                p.panFile00_00_00_00_00.move("0","555","100%","111",null,null);

                p.staLabel00_02_00_00_00_00_00_00.set_taborder("30");
                p.staLabel00_02_00_00_00_00_00_00.set_text("폐기물,자재및인력동선계획");
                p.staLabel00_02_00_00_00_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_02_00_00_00_00_00_00.set_flexgrow("1");
                p.staLabel00_02_00_00_00_00_00_00.move("0","0","490","46",null,null);

                p.panBtnFile00_00_00_00_00_00.set_taborder("31");
                p.panBtnFile00_00_00_00_00_00.set_flexgrow("1");
                p.panBtnFile00_00_00_00_00_00.set_flexcrossaxisalign("start");
                p.panBtnFile00_00_00_00_00_00.set_flexmainaxisalign("end");
                p.panBtnFile00_00_00_00_00_00.set_horizontalgap("10");
                p.panBtnFile00_00_00_00_00_00.move("490.00","0","490","46",null,null);

                p.panTitle00_00_00_00_00_00.set_taborder("32");
                p.panTitle00_00_00_00_00_00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00_00_00_00_00_00.move("20","10","100%","46",null,null);

                p.Grid00_00_00_00_00_00_00.set_taborder("33");
                p.Grid00_00_00_00_00_00_00.set_binddataset("dsFile");
                p.Grid00_00_00_00_00_00_00.set_autofittype("col");
                p.Grid00_00_00_00_00_00_00.set_cssclass("grd_WF_FileAdd");
                p.Grid00_00_00_00_00_00_00.move("20.00","60","100%","40",null,null);

                p.panFile00_00_00_00_00_00.set_taborder("34");
                p.panFile00_00_00_00_00_00.set_fittocontents("height");
                p.panFile00_00_00_00_00_00.set_spacing("10px 20px 10px 20px");
                p.panFile00_00_00_00_00_00.set_flexwrap("wrap");
                p.panFile00_00_00_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.panFile00_00_00_00_00_00.set_verticalgap("4");
                p.panFile00_00_00_00_00_00.move("0","666","100%","111",null,null);

                p.staLabel00_02_00_00_00_00_00_00_00.set_taborder("35");
                p.staLabel00_02_00_00_00_00_00_00_00.set_text("안전관리계획서");
                p.staLabel00_02_00_00_00_00_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_02_00_00_00_00_00_00_00.set_flexgrow("1");
                p.staLabel00_02_00_00_00_00_00_00_00.move("0","0","490","46",null,null);

                p.panBtnFile00_00_00_00_00_00_00.set_taborder("36");
                p.panBtnFile00_00_00_00_00_00_00.set_flexgrow("1");
                p.panBtnFile00_00_00_00_00_00_00.set_flexcrossaxisalign("start");
                p.panBtnFile00_00_00_00_00_00_00.set_flexmainaxisalign("end");
                p.panBtnFile00_00_00_00_00_00_00.set_horizontalgap("10");
                p.panBtnFile00_00_00_00_00_00_00.move("490.00","0","490","46",null,null);

                p.panTitle00_00_00_00_00_00_00.set_taborder("37");
                p.panTitle00_00_00_00_00_00_00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00_00_00_00_00_00_00.move("20","10","100%","46",null,null);

                p.Static00.set_taborder("38");
                p.Static00.set_text("공사금액 3억원 이상 또는 공사기간 3개월 이상인 경우");
                p.Static00.set_fittocontents("height");
                p.Static00.set_cssclass("sta_WF_Des");
                p.Static00.move("20.00","60","100%","40",null,null);

                p.Grid00_00_00_00_00_00_00_00.set_taborder("39");
                p.Grid00_00_00_00_00_00_00_00.set_binddataset("dsFile");
                p.Grid00_00_00_00_00_00_00_00.set_autofittype("col");
                p.Grid00_00_00_00_00_00_00_00.set_cssclass("grd_WF_FileAdd");
                p.Grid00_00_00_00_00_00_00_00.move("20.00","104","100%","40",null,null);

                p.panFile00_00_00_00_00_00_00.set_taborder("40");
                p.panFile00_00_00_00_00_00_00.set_fittocontents("height");
                p.panFile00_00_00_00_00_00_00.set_spacing("10px 20px 10px 20px");
                p.panFile00_00_00_00_00_00_00.set_flexwrap("wrap");
                p.panFile00_00_00_00_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.panFile00_00_00_00_00_00_00.set_verticalgap("4");
                p.panFile00_00_00_00_00_00_00.move("0","827","100.00%","153",null,null);

                p.staLabel00_02_00_00_00_00_00_01.set_taborder("41");
                p.staLabel00_02_00_00_00_00_00_01.set_text("기타서류1");
                p.staLabel00_02_00_00_00_00_00_01.set_cssclass("sta_WF_Label");
                p.staLabel00_02_00_00_00_00_00_01.set_flexgrow("1");
                p.staLabel00_02_00_00_00_00_00_01.move("0","0","490","46",null,null);

                p.panBtnFile00_00_00_00_00_01.set_taborder("42");
                p.panBtnFile00_00_00_00_00_01.set_flexgrow("1");
                p.panBtnFile00_00_00_00_00_01.set_flexcrossaxisalign("start");
                p.panBtnFile00_00_00_00_00_01.set_flexmainaxisalign("end");
                p.panBtnFile00_00_00_00_00_01.set_horizontalgap("10");
                p.panBtnFile00_00_00_00_00_01.move("490.00","0","490","46",null,null);

                p.panTitle00_00_00_00_00_01.set_taborder("43");
                p.panTitle00_00_00_00_00_01.set_cssclass("pan_WF_FileTitle");
                p.panTitle00_00_00_00_00_01.move("20","10","100%","46",null,null);

                p.Grid00_00_00_00_00_00_01.set_taborder("44");
                p.Grid00_00_00_00_00_00_01.set_binddataset("dsFile");
                p.Grid00_00_00_00_00_00_01.set_autofittype("col");
                p.Grid00_00_00_00_00_00_01.set_cssclass("grd_WF_FileAdd");
                p.Grid00_00_00_00_00_00_01.move("20.00","60","100%","40",null,null);

                p.panFile00_00_00_00_00_01.set_taborder("45");
                p.panFile00_00_00_00_00_01.set_fittocontents("height");
                p.panFile00_00_00_00_00_01.set_spacing("10px 20px 10px 20px");
                p.panFile00_00_00_00_00_01.set_flexwrap("wrap");
                p.panFile00_00_00_00_00_01.set_cssclass("pal_WF_DtlBg");
                p.panFile00_00_00_00_00_01.set_verticalgap("4");
                p.panFile00_00_00_00_00_01.move("0","888","100%","111",null,null);

                p.staLabel00_02_00_00_00_00_00_02.set_taborder("46");
                p.staLabel00_02_00_00_00_00_00_02.set_text("기타서류2");
                p.staLabel00_02_00_00_00_00_00_02.set_cssclass("sta_WF_Label");
                p.staLabel00_02_00_00_00_00_00_02.set_flexgrow("1");
                p.staLabel00_02_00_00_00_00_00_02.move("0","0","490","46",null,null);

                p.panBtnFile00_00_00_00_00_02.set_taborder("47");
                p.panBtnFile00_00_00_00_00_02.set_flexgrow("1");
                p.panBtnFile00_00_00_00_00_02.set_flexcrossaxisalign("start");
                p.panBtnFile00_00_00_00_00_02.set_flexmainaxisalign("end");
                p.panBtnFile00_00_00_00_00_02.set_horizontalgap("10");
                p.panBtnFile00_00_00_00_00_02.move("490.00","0","490","46",null,null);

                p.panTitle00_00_00_00_00_02.set_taborder("48");
                p.panTitle00_00_00_00_00_02.set_cssclass("pan_WF_FileTitle");
                p.panTitle00_00_00_00_00_02.move("20","10","100%","46",null,null);

                p.Grid00_00_00_00_00_00_02.set_taborder("49");
                p.Grid00_00_00_00_00_00_02.set_binddataset("dsFile");
                p.Grid00_00_00_00_00_00_02.set_autofittype("col");
                p.Grid00_00_00_00_00_00_02.set_cssclass("grd_WF_FileAdd");
                p.Grid00_00_00_00_00_00_02.move("20.00","60","100%","40",null,null);

                p.panFile00_00_00_00_00_02.set_taborder("50");
                p.panFile00_00_00_00_00_02.set_fittocontents("height");
                p.panFile00_00_00_00_00_02.set_spacing("10px 20px 10px 20px");
                p.panFile00_00_00_00_00_02.set_flexwrap("wrap");
                p.panFile00_00_00_00_00_02.set_cssclass("pal_WF_DtlBg");
                p.panFile00_00_00_00_00_02.set_verticalgap("4");
                p.panFile00_00_00_00_00_02.move("0","999","100%","111",null,null);

                p.panBtnFile.set_taborder("1");
                p.panBtnFile.set_flexgrow("1");
                p.panBtnFile.set_flexcrossaxisalign("start");
                p.panBtnFile.set_flexmainaxisalign("end");
                p.panBtnFile.set_horizontalgap("10");
                p.panBtnFile.move("490.00","0","490","46",null,null);

                p.staLabel00_02.set_taborder("0");
                p.staLabel00_02.set_text("원상회복 설계도면(건축)");
                p.staLabel00_02.set_cssclass("sta_WF_Label");
                p.staLabel00_02.set_flexgrow("1");
                p.staLabel00_02.move("0","0","490","46",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divAtfl.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divAtfl.form
            obj = new Layout("Layout0","",0,0,this.divAtfl.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divAtfl.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.form
            obj = new Layout("default","",0,0,this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.cb00_01.set_taborder("3");
                p.cb00_01.set_text("벽체");
                p.cb00_01.set_fittocontents("width");
                p.cb00_01.set_truevalue("TSCARCH003");
                p.cb00_01.set_value("false");
                p.cb00_01.move("55","248","74","40",null,null);

                p.cb00_00.set_taborder("2");
                p.cb00_00.set_text("도어");
                p.cb00_00.set_fittocontents("width");
                p.cb00_00.set_truevalue("TSCARCH002");
                p.cb00_00.set_value("false");
                p.cb00_00.move("55","248","74","40",null,null);

                p.Static05_00.set_taborder("0");
                p.Static05_00.set_text("건축");
                p.Static05_00.set_cssclass("sta_WF_Label");
                p.Static05_00.move("127","130","100%","46",null,null);

                p.panDmndMtrlInfoArch.set_taborder("5");
                p.panDmndMtrlInfoArch.set_fittocontents("height");
                p.panDmndMtrlInfoArch.move("127","180","100%","40",null,null);

                p.cb00_02.set_taborder("4");
                p.cb00_02.set_text("천장");
                p.cb00_02.set_fittocontents("width");
                p.cb00_02.set_truevalue("TSCARCH004");
                p.cb00_02.set_value("false");
                p.cb00_02.move("55","248","74","40",null,null);

                p.cbFlof.set_taborder("1");
                p.cbFlof.set_text("바닥");
                p.cbFlof.set_fittocontents("width");
                p.cbFlof.set_truevalue("TSCARCH001");
                p.cbFlof.set_value("false");
                p.cbFlof.move("55","248","74","40",null,null);

                p.Panel09_00.set_taborder("7");
                p.Panel09_00.set_spacing("10px 20px 10px 20px");
                p.Panel09_00.set_horizontalgap("20");
                p.Panel09_00.set_flexwrap("wrap");
                p.Panel09_00.set_cssclass("pal_WF_DtlBg");
                p.Panel09_00.set_fittocontents("height");
                p.Panel09_00.move("0","0","100.00%","111",null,null);

                p.Panel09_00_00.set_taborder("14");
                p.Panel09_00_00.set_spacing("10px 20px 10px 20px");
                p.Panel09_00_00.set_horizontalgap("20");
                p.Panel09_00_00.set_flexwrap("wrap");
                p.Panel09_00_00.set_cssclass("pal_WF_DtlBg");
                p.Panel09_00_00.set_fittocontents("height");
                p.Panel09_00_00.move("0","0","100.00%","111",null,null);

                p.Panel09_00_00_00.set_taborder("19");
                p.Panel09_00_00_00.set_spacing("10px 20px 10px 20px");
                p.Panel09_00_00_00.set_horizontalgap("20");
                p.Panel09_00_00_00.set_flexwrap("wrap");
                p.Panel09_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.Panel09_00_00_00.set_fittocontents("height");
                p.Panel09_00_00_00.move("0","0","100.00%","111",null,null);

                p.Panel10_00.set_taborder("6");
                p.Panel10_00.set_type("vertical");
                p.Panel10_00.set_verticalgap("4");
                p.Panel10_00.set_fittocontents("height");
                p.Panel10_00.set_flexgrow("1");
                p.Panel10_00.move("127","130","100%","90",null,null);

                p.Static05_00_00.set_taborder("8");
                p.Static05_00_00.set_text("전기");
                p.Static05_00_00.set_cssclass("sta_WF_Label");
                p.Static05_00_00.move("137","357","100%","46",null,null);

                p.cb00_01_00.set_taborder("11");
                p.cb00_01_00.set_text("화재감지기");
                p.cb00_01_00.set_fittocontents("width");
                p.cb00_01_00.set_truevalue("TSCELEC003");
                p.cb00_01_00.set_value("false");
                p.cb00_01_00.move("55","248","116","40",null,null);

                p.cb00_00_00.set_taborder("10");
                p.cb00_00_00.set_text("비상유도등");
                p.cb00_00_00.set_fittocontents("width");
                p.cb00_00_00.set_truevalue("TSCELEC002");
                p.cb00_00_00.set_value("false");
                p.cb00_00_00.move("55","248","116","40",null,null);

                p.cb00_03.set_taborder("9");
                p.cb00_03.set_text("전등");
                p.cb00_03.set_fittocontents("width");
                p.cb00_03.set_truevalue("TSCELEC001");
                p.cb00_03.set_value("false");
                p.cb00_03.move("55","248","74","40",null,null);

                p.panDmndMtrlInfoElcty.set_taborder("12");
                p.panDmndMtrlInfoElcty.set_fittocontents("height");
                p.panDmndMtrlInfoElcty.move("137","407","100%","40",null,null);

                p.Panel10_00_00.set_taborder("13");
                p.Panel10_00_00.set_type("vertical");
                p.Panel10_00_00.set_verticalgap("4");
                p.Panel10_00_00.set_fittocontents("height");
                p.Panel10_00_00.set_flexgrow("1");
                p.Panel10_00_00.move("137","357","100%","90",null,null);

                p.Static05_00_00_00.set_taborder("15");
                p.Static05_00_00_00.set_text("기계");
                p.Static05_00_00_00.set_cssclass("sta_WF_Label");
                p.Static05_00_00_00.move("110","347","100%","46",null,null);

                p.cb00_03_00.set_taborder("16");
                p.cb00_03_00.set_text("스프링쿨러");
                p.cb00_03_00.set_fittocontents("width");
                p.cb00_03_00.set_truevalue("TSCMACH001");
                p.cb00_03_00.set_value("false");
                p.cb00_03_00.move("55","248","116","40",null,null);

                p.panDmndMtrlInfoMchn.set_taborder("17");
                p.panDmndMtrlInfoMchn.set_fittocontents("height");
                p.panDmndMtrlInfoMchn.move("110","397","100%","40",null,null);

                p.Panel10_00_00_00.set_taborder("18");
                p.Panel10_00_00_00.set_type("vertical");
                p.Panel10_00_00_00.set_verticalgap("4");
                p.Panel10_00_00_00.set_fittocontents("height");
                p.Panel10_00_00_00.set_flexgrow("1");
                p.Panel10_00_00_00.move("110","347","100%","90",null,null);

                p.Static05_00_00_00_00.set_taborder("20");
                p.Static05_00_00_00_00.set_text("통신");
                p.Static05_00_00_00_00.set_cssclass("sta_WF_Label");
                p.Static05_00_00_00_00.move("114","424","100%","46",null,null);

                p.cb00_03_00_00.set_taborder("21");
                p.cb00_03_00_00.set_text("비상방송스피커");
                p.cb00_03_00_00.set_fittocontents("width");
                p.cb00_03_00_00.set_truevalue("TSCCOMM001");
                p.cb00_03_00_00.set_value("false");
                p.cb00_03_00_00.move("55","248","143","40",null,null);

                p.panDmndMtrlInfoCmnct.set_taborder("22");
                p.panDmndMtrlInfoCmnct.set_fittocontents("height");
                p.panDmndMtrlInfoCmnct.move("114","474","100%","40",null,null);

                p.Panel10_00_00_00_00.set_taborder("23");
                p.Panel10_00_00_00_00.set_type("vertical");
                p.Panel10_00_00_00_00.set_verticalgap("4");
                p.Panel10_00_00_00_00.set_fittocontents("height");
                p.Panel10_00_00_00_00.set_flexgrow("1");
                p.Panel10_00_00_00_00.move("114","424","100%","90",null,null);

                p.Panel09_00_00_00_00.set_taborder("24");
                p.Panel09_00_00_00_00.set_spacing("10px 20px 10px 20px");
                p.Panel09_00_00_00_00.set_horizontalgap("20");
                p.Panel09_00_00_00_00.set_flexwrap("wrap");
                p.Panel09_00_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.Panel09_00_00_00_00.set_fittocontents("height");
                p.Panel09_00_00_00_00.move("0","0","100.00%","111",null,null);

                p.Static05_00_00_00_00_00.set_taborder("25");
                p.Static05_00_00_00_00_00.set_text("기타");
                p.Static05_00_00_00_00_00.set_cssclass("sta_WF_Label");
                p.Static05_00_00_00_00_00.move("77","515","100%","46",null,null);

                p.Panel10_00_00_00_00_00.set_taborder("28");
                p.Panel10_00_00_00_00_00.set_type("vertical");
                p.Panel10_00_00_00_00_00.set_verticalgap("4");
                p.Panel10_00_00_00_00_00.set_fittocontents("height");
                p.Panel10_00_00_00_00_00.set_flexgrow("1");
                p.Panel10_00_00_00_00_00.move("77","515","100%","90",null,null);

                p.Panel09_00_00_00_00_00.set_taborder("29");
                p.Panel09_00_00_00_00_00.set_spacing("10px 20px 10px 20px");
                p.Panel09_00_00_00_00_00.set_horizontalgap("20");
                p.Panel09_00_00_00_00_00.set_flexwrap("wrap");
                p.Panel09_00_00_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.Panel09_00_00_00_00_00.set_fittocontents("height");
                p.Panel09_00_00_00_00_00.move("0","0","100.00%","111",null,null);

                p.panDmndMtrlInfoEtc.set_taborder("27");
                p.panDmndMtrlInfoEtc.set_fittocontents("height");
                p.panDmndMtrlInfoEtc.move("77","565","100%","40",null,null);

                p.cb00_03_00_00_00.set_taborder("26");
                p.cb00_03_00_00_00.set_text("기타");
                p.cb00_03_00_00_00.set_fittocontents("width");
                p.cb00_03_00_00_00.set_truevalue("TSCETC001");
                p.cb00_03_00_00_00.set_value("false");
                p.cb00_03_00_00_00.move("55","248","143","40",null,null);

                p.staLabel03_00_01_01_00_00_00_00_00.set_taborder("30");
                p.staLabel03_00_01_01_00_00_00_00_00.set_text("기타 자재정보 요청");
                p.staLabel03_00_01_01_00_00_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_01_01_00_00_00_00_00.set_flexgrow("0");
                p.staLabel03_00_01_01_00_00_00_00_00.set_fittocontents("width");
                p.staLabel03_00_01_01_00_00_00_00_00.move("0","0","300","46",null,null);

                p.Panel00_01_00_00_00_00_00.set_taborder("32");
                p.Panel00_01_00_00_00_00_00.set_tabletemplate("1* / 1* 1*");
                p.Panel00_01_00_00_00_00_00.set_fittocontents("height");
                p.Panel00_01_00_00_00_00_00.set_cssclass("pan_WF_FileTitle");
                p.Panel00_01_00_00_00_00_00.set_flexwrap("wrap");
                p.Panel00_01_00_00_00_00_00.set_verticalgap("0");
                p.Panel00_01_00_00_00_00_00.set_flexmainaxisalign("spacebetween");
                p.Panel00_01_00_00_00_00_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_01_00_00_00_00_00.set_flexcrossaxisalign("center");
                p.Panel00_01_00_00_00_00_00.move("98","658","100%","46",null,null);

                p.Panel01_01_00_00_00_00_00.set_taborder("31");
                p.Panel01_01_00_00_00_00_00.set_flexmainaxisalign("end");
                p.Panel01_01_00_00_00_00_00.set_flexgrow("1");
                p.Panel01_01_00_00_00_00_00.set_horizontalgap("10");
                p.Panel01_01_00_00_00_00_00.set_flexwrap("wrap");
                p.Panel01_01_00_00_00_00_00.set_fittocontents("height");
                p.Panel01_01_00_00_00_00_00.move("398","664","200","34",null,null);

                p.txtEtcMtrlInfoDmndCn.set_taborder("33");
                p.txtEtcMtrlInfoDmndCn.move("98","658","100%","60",null,null);

                p.Panel02_00_00_01_00_00_00_00_00.set_taborder("34");
                p.Panel02_00_00_01_00_00_00_00_00.set_type("vertical");
                p.Panel02_00_00_01_00_00_00_00_00.set_flexgrow("1");
                p.Panel02_00_00_01_00_00_00_00_00.set_verticalgap("4");
                p.Panel02_00_00_01_00_00_00_00_00.set_fittocontents("height");
                p.Panel02_00_00_01_00_00_00_00_00.move("98","658","100%","90",null,null);

                p.panEtcMtrlInfoDmndCn.set_taborder("35");
                p.panEtcMtrlInfoDmndCn.set_flexwrap("wrap");
                p.panEtcMtrlInfoDmndCn.set_fittocontents("height");
                p.panEtcMtrlInfoDmndCn.set_spacing("10px 20px 10px 20px");
                p.panEtcMtrlInfoDmndCn.set_cssclass("pal_WF_DtlBg");
                p.panEtcMtrlInfoDmndCn.set_verticalgap("4");
                p.panEtcMtrlInfoDmndCn.set_visible("false");
                p.panEtcMtrlInfoDmndCn.move("1350","2009","100%","111",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.form
            obj = new Layout("Layout0","",0,0,this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divMtrlInfoDmnd.form
            obj = new Layout("default","",0,0,this.divMtrlInfoDmnd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static05.set_taborder("0");
                p.Static05.set_text("자재정보필요여부");
                p.Static05.set_cssclass("sta_WF_Label_E");
                p.Static05.move("137","3798","100%","46",null,null);

                p.Static06.set_taborder("1");
                p.Static06.set_text("<u v=\'true\'><fc v=\'#1e4ebe\'>건물별 자재목록 다운로드</fc></u>");
                p.Static06.set_cssclass("sta_WF_Des");
                p.Static06.set_fittocontents("height");
                p.Static06.set_usedecorate("true");
                p.Static06.move("45","3881","100%","30",null,null);

                p.Panel10.set_taborder("2");
                p.Panel10.set_type("vertical");
                p.Panel10.set_verticalgap("4");
                p.Panel10.set_fittocontents("height");
                p.Panel10.set_flexgrow("1");
                p.Panel10.move("20","10","100%","162",null,null);

                p.Panel09.set_taborder("3");
                p.Panel09.set_spacing("10px 20px 10px 20px");
                p.Panel09.set_horizontalgap("20");
                p.Panel09.set_flexwrap("wrap");
                p.Panel09.set_cssclass("pal_WF_DtlBg");
                p.Panel09.set_fittocontents("height");
                p.Panel09.move("0","0","100.00%","183",null,null);

                p.Panel00.set_taborder("5");
                p.Panel00.set_spacing("4px 0px 0px");
                p.Panel00.set_type("vertical");
                p.Panel00.set_verticalgap("4");
                p.Panel00.set_fittocontents("height");
                p.Panel00.move("20","104","100%","68",null,null);

                p.rdoMtrlInfoNeedYn.set_taborder("4");
                p.rdoMtrlInfoNeedYn.set_rowcount("-1");
                p.rdoMtrlInfoNeedYn.set_columncount("-1");
                p.rdoMtrlInfoNeedYn.set_innerdataset(divMtrlInfoDmnd_form_rdoMtrlInfoNeedYn_innerdataset);
                p.rdoMtrlInfoNeedYn.set_codecolumn("codecolumn");
                p.rdoMtrlInfoNeedYn.set_datacolumn("datacolumn");
                p.rdoMtrlInfoNeedYn.move("188","55","100%","40",null,null);

                p.Static06_00.set_taborder("6");
                p.Static06_00.set_text("‘건물별 자재목록‘의 정보가 현황과 상이하거나, 없는 경우에만 자재정보를 요청하여 주시기 바랍니다 .");
                p.Static06_00.set_cssclass("sta_WF_Des");
                p.Static06_00.set_fittocontents("height");
                p.Static06_00.set_usedecorate("true");
                p.Static06_00.move("45","3881","100%","30",null,null);

                p.divMtrlInfoNeedList.set_taborder("7");
                p.divMtrlInfoNeedList.set_text("div00");
                p.divMtrlInfoNeedList.set_fittocontents("height");
                p.divMtrlInfoNeedList.move("0","863","100.00%","666",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divMtrlInfoDmnd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divMtrlInfoDmnd.form
            obj = new Layout("Layout0","",0,0,this.divMtrlInfoDmnd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divMtrlInfoDmnd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divIdntyAplcnt.form
            obj = new Layout("default","",0,0,this.divIdntyAplcnt.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel03_00_00_00.set_taborder("0");
                p.staLabel03_00_00_00.set_text("직위");
                p.staLabel03_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00_00_00.move("0","0","100%","46",null,null);

                p.edt00_02_00_00.set_taborder("1");
                p.edt00_02_00_00.move("0","46","100%","40",null,null);

                p.Panel02_00_01.set_taborder("2");
                p.Panel02_00_01.set_type("vertical");
                p.Panel02_00_01.set_flexgrow("1");
                p.Panel02_00_01.move("30.00","10","300","86",null,null);

                p.staLabel03_01_00_00.set_taborder("3");
                p.staLabel03_01_00_00.set_text("휴대폰 번호");
                p.staLabel03_01_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_01_00_00.move("10.00","10","100%","46",null,null);

                p.edt00_03_01_00_00.set_taborder("4");
                p.edt00_03_01_00_00.set_displaynulltext("010-123-4567");
                p.edt00_03_01_00_00.set_readonly("true");
                p.edt00_03_01_00_00.move("10.00","56","100%","40",null,null);

                p.Panel02_01_00_00.set_taborder("5");
                p.Panel02_01_00_00.set_type("vertical");
                p.Panel02_01_00_00.set_flexgrow("1");
                p.Panel02_01_00_00.set_fittocontents("height");
                p.Panel02_01_00_00.move("745","0","300","120",null,null);

                p.Panel00.set_taborder("8");
                p.Panel00.set_spacing("4px 0px 0px");
                p.Panel00.set_fittocontents("height");
                p.Panel00.move("0","86","100%","34",null,null);

                p.panBstrPicMchnFldNmInfo.set_taborder("6");
                p.panBstrPicMchnFldNmInfo.set_horizontalgap("20");
                p.panBstrPicMchnFldNmInfo.set_flexcrossaxiswrapalign("start");
                p.panBstrPicMchnFldNmInfo.set_flexwrap("wrap");
                p.panBstrPicMchnFldNmInfo.set_fittocontents("height");
                p.panBstrPicMchnFldNmInfo.set_verticalgap("0");
                p.panBstrPicMchnFldNmInfo.set_spacing("0px 20px 10px 20px");
                p.panBstrPicMchnFldNmInfo.set_cssclass("pal_WF_DtlBg");
                p.panBstrPicMchnFldNmInfo.move("0","0","100.00%","131",null,null);

                p.Static00.set_taborder("7");
                p.Static00.set_text("휴대폰번호는 우측상단 \"사용자 이름\" 클릭 후 해당 메뉴에서 등록 및 수정이 가능합니다.");
                p.Static00.set_cssclass("sta_WF_Des");
                p.Static00.set_fittocontents("height");
                p.Static00.move("846","126","100%","30",null,null);

                p.staLabel03_00_00_00_00.set_taborder("9");
                p.staLabel03_00_00_00_00.set_text("성명");
                p.staLabel03_00_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00_00_00_00.move("0","0","100%","46",null,null);

                p.edt00_02_00_00_00.set_taborder("10");
                p.edt00_02_00_00_00.set_readonly("true");
                p.edt00_02_00_00_00.move("0","46","100%","40",null,null);

                p.Panel02_00_01_00.set_taborder("11");
                p.Panel02_00_01_00.set_type("vertical");
                p.Panel02_00_01_00.set_flexgrow("1");
                p.Panel02_00_01_00.move("30.00","10","300","86",null,null);

                p.staLabel03_01_00_00_00.set_taborder("12");
                p.staLabel03_01_00_00_00.set_text("소속");
                p.staLabel03_01_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_01_00_00_00.move("10.00","10","100%","46",null,null);

                p.edt00_03_01_00_00_00.set_taborder("13");
                p.edt00_03_01_00_00_00.set_readonly("true");
                p.edt00_03_01_00_00_00.move("10.00","56","100%","40",null,null);

                p.Panel02_01_00_00_00.set_taborder("14");
                p.Panel02_01_00_00_00.set_type("vertical");
                p.Panel02_01_00_00_00.set_flexgrow("1");
                p.Panel02_01_00_00_00.move("745","0","305","86",null,null);

                p.panBstrPicMchnFldNmInfo00.set_taborder("15");
                p.panBstrPicMchnFldNmInfo00.set_horizontalgap("20");
                p.panBstrPicMchnFldNmInfo00.set_flexcrossaxiswrapalign("start");
                p.panBstrPicMchnFldNmInfo00.set_flexwrap("wrap");
                p.panBstrPicMchnFldNmInfo00.set_fittocontents("height");
                p.panBstrPicMchnFldNmInfo00.set_verticalgap("0");
                p.panBstrPicMchnFldNmInfo00.set_spacing("0px 20px 10px 20px");
                p.panBstrPicMchnFldNmInfo00.set_cssclass("pal_WF_DtlBg");
                p.panBstrPicMchnFldNmInfo00.move("0","0","100.00%","97",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divIdntyAplcnt.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divIdntyAplcnt.form
            obj = new Layout("Layout0","",0,0,this.divIdntyAplcnt.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divIdntyAplcnt.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,800,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("신청정보(퇴거)");

                p.panForm.set_taborder("2");
                p.panForm.set_fittocontents("height");
                p.panForm.set_type("vertical");
                p.panForm.move("0","0","100.00%","3624",null,null);

                p.staSubTitle00.set_taborder("3");
                p.staSubTitle00.set_text("신청정보");
                p.staSubTitle00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle00.move("-26","20","100%","50",null,null);

                p.Panel01.set_taborder("4");
                p.Panel01.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01.set_spacing("0px 10px 0px 10px");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.set_flexcrossaxisalign("center");
                p.Panel01.set_flexmainaxisalign("end");
                p.Panel01.move("1110","20","139","50",null,null);

                p.panAplyInfo.set_taborder("5");
                p.panAplyInfo.set_visible("true");
                p.panAplyInfo.set_fittocontents("none");
                p.panAplyInfo.set_flexcrossaxisalign("end");
                p.panAplyInfo.set_minheight("70");
                p.panAplyInfo.set_maxheight("");
                p.panAplyInfo.move("-26","20","100.00%","70",null,null);

                p.btnAplyInfo.set_taborder("6");
                p.btnAplyInfo.set_cssclass("btn_WF_ACMinus");
                p.btnAplyInfo.set_text("");
                p.btnAplyInfo.move("1210","23","34","30",null,null);

                p.divAplyInfo.set_taborder("0");
                p.divAplyInfo.set_text("Div00");
                p.divAplyInfo.set_fittocontents("height");
                p.divAplyInfo.set_formscrollbartype("none none");
                p.divAplyInfo.set_formscrolltype("none");
                p.divAplyInfo.move("1540","0","100.00%","870",null,null);

                p.staSubTitle.set_taborder("7");
                p.staSubTitle.set_text("첨부파일");
                p.staSubTitle.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle.move("60","1085","100%","50",null,null);

                p.Panel00_00.set_taborder("8");
                p.Panel00_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel00_00.set_spacing("0px 10px 0px 10px");
                p.Panel00_00.set_horizontalgap("10");
                p.Panel00_00.set_flexcrossaxisalign("center");
                p.Panel00_00.set_flexmainaxisalign("end");
                p.Panel00_00.move("1190","1085","148","50",null,null);

                p.panAtfl.set_taborder("9");
                p.panAtfl.set_fittocontents("none");
                p.panAtfl.set_flexcrossaxisalign("end");
                p.panAtfl.set_minheight("70");
                p.panAtfl.set_maxheight("");
                p.panAtfl.move("60","1085","100.00%","70",null,null);

                p.btnAtfl.set_taborder("10");
                p.btnAtfl.set_cssclass("btn_WF_ACMinus");
                p.btnAtfl.move("1220","1085","34","32",null,null);

                p.divAtfl.set_taborder("1");
                p.divAtfl.set_text("Div00");
                p.divAtfl.set_fittocontents("height");
                p.divAtfl.set_formscrollbartype("none none");
                p.divAtfl.set_formscrolltype("none");
                p.divAtfl.move("1740","1010","100.00%","1152",null,null);

                p.divMtrlInfoDmnd.set_taborder("11");
                p.divMtrlInfoDmnd.set_text("div00");
                p.divMtrlInfoDmnd.set_fittocontents("height");
                p.divMtrlInfoDmnd.move("0","3363","100.00%","849",null,null);

                p.staSubTitle02_00.set_taborder("12");
                p.staSubTitle02_00.set_text("확인신청인");
                p.staSubTitle02_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00.move("1866","3263","100%","50",null,null);

                p.btnIdntyAplcnt.set_taborder("13");
                p.btnIdntyAplcnt.set_cssclass("btn_WF_ACMinus");
                p.btnIdntyAplcnt.set_visible("true");
                p.btnIdntyAplcnt.move("3030","3280","34","30",null,null);

                p.Panel00_02_00.set_taborder("14");
                p.Panel00_02_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel00_02_00.set_spacing("0px 10px 0px 10px");
                p.Panel00_02_00.set_flexcrossaxisalign("center");
                p.Panel00_02_00.set_flexmainaxisalign("end");
                p.Panel00_02_00.set_horizontalgap("10");
                p.Panel00_02_00.move("3000","3263","136","50",null,null);

                p.panIdntyAplcnt.set_taborder("15");
                p.panIdntyAplcnt.set_flexcrossaxisalign("end");
                p.panIdntyAplcnt.set_visible("true");
                p.panIdntyAplcnt.set_fittocontents("none");
                p.panIdntyAplcnt.set_minheight("70");
                p.panIdntyAplcnt.set_maxheight("");
                p.panIdntyAplcnt.move("0","4212","100%","70",null,null);

                p.divIdntyAplcnt.set_taborder("16");
                p.divIdntyAplcnt.set_text("div01");
                p.divIdntyAplcnt.set_fittocontents("height");
                p.divIdntyAplcnt.move("0","3151","100.00%","228",null,null);

                p.staSubTitle01_00.set_taborder("17");
                p.staSubTitle01_00.set_text("자재정보요청");
                p.staSubTitle01_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle01_00.move("-75","2613","100%","50",null,null);

                p.btnMtrlInfoDmnd.set_taborder("18");
                p.btnMtrlInfoDmnd.set_cssclass("btn_WF_ACMinus");
                p.btnMtrlInfoDmnd.set_visible("true");
                p.btnMtrlInfoDmnd.move("2570","2626","34","31",null,null);

                p.Panel05_00.set_taborder("19");
                p.Panel05_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel05_00.set_spacing("0px 10px 0px 10px");
                p.Panel05_00.set_horizontalgap("10");
                p.Panel05_00.set_flexcrossaxisalign("center");
                p.Panel05_00.set_flexmainaxisalign("end");
                p.Panel05_00.move("1071","2613","132","50",null,null);

                p.panMtrlInfoDmnd.set_taborder("20");
                p.panMtrlInfoDmnd.set_flexcrossaxisalign("end");
                p.panMtrlInfoDmnd.set_fittocontents("none");
                p.panMtrlInfoDmnd.set_minheight("70");
                p.panMtrlInfoDmnd.set_maxheight("");
                p.panMtrlInfoDmnd.move("0","3293","100%","70",null,null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Phone_screen",480,800,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panForm.set_spacing("0px 20px 10px 20px");
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","divAplyInfo.form.edtEnfcRsnCn","value","dsRtosAplcfm","enfcRsnCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divAplyInfo.form.calBgncstPrnmntYmd","value","dsRtosAplcfm","bgncstPrnmntYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divAplyInfo.form.calCmcnPrnmntYmd","value","dsRtosAplcfm","cmcnPrnmntYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divAplyInfo.form.TextArea00","value","dsRtosAplcfm","cstrnOtlnCn");
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

            obj = new BindItem("item16","divAplyInfo.form.edtEnfcRsnCn","readonly","dsAtrb","roAplcfmWrtRcpt");
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

            obj = new BindItem("item2","divAplyInfo.form.cmTpbizCd","value","dsRtosAplcfm","tpbizCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divAplyInfo.form.edtTpbizEtcCn","value","dsRtosAplcfm","tpbizEtcCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divAplyInfo.form.calCtrtPrdBgngYmd","value","dsRtosAplcfm","ctrtPrdBgngYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divAplyInfo.form.calCtrtPrdEndYmd","value","dsRtosAplcfm","ctrtPrdEndYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divAplyInfo.form.calRtosIdntyDmndYmd","value","dsRtosAplcfm","rtosIdntyDmndYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divMtrlInfoDmnd.form.rdoMtrlInfoNeedYn","value","dsRtosAplcfm","mtrlInfoNeedYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divIdntyAplcnt.form.edt00_02_00_00","value","dsRtosAplcfm","aplcntJbpsNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divIdntyAplcnt.form.edt00_03_01_00_00","value","dsRtosAplcfm","aplcntMblTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divIdntyAplcnt.form.edt00_02_00_00_00","value","dsRtosAplcfm","aplcntNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divIdntyAplcnt.form.edt00_03_01_00_00_00","value","dsRtosAplcfm","aplcntOgdpNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divIdntyAplcnt.form.edt00_02_00_00","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divAplyInfo.form.staLabel03_00_01_00_00_00_01","cssclass","dsAtrb","ccAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divAplyInfo.form.staLabel03_00_01_00_00_00","cssclass","dsAtrb","ccAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divAplyInfo.form.staLabel03_00_01_00_00","cssclass","dsAtrb","ccAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divAplyInfo.form.staLabel03_00_00_00","cssclass","dsAtrb","ccAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divAplyInfo.form.calRtosIdntyDmndYmd","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divAplyInfo.form.calCtrtPrdBgngYmd","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divAplyInfo.form.calCtrtPrdEndYmd","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divAplyInfo.form.edtTpbizEtcCn","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divAplyInfo.form.cmTpbizCd","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divAplyInfo.form.staLabel03_00_01_00_00_00_00","cssclass","dsAtrb","ccAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divMtrlInfoDmnd.form.Static05","cssclass","dsAtrb","ccAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divMtrlInfoDmnd.form.rdoMtrlInfoNeedYn","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divMtrlInfoDmnd.form.divMtrlInfoNeedList.form.txtEtcMtrlInfoDmndCn","value","dsRtosAplcfm","etcMtrlInfoDmndCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divMtrlInfoDmnd.form.divMtrlInfoNeedList.form.cbFlof","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","divMtrlInfoDmnd.form.divMtrlInfoNeedList.form.cb00_00","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","divMtrlInfoDmnd.form.divMtrlInfoNeedList.form.cb00_01","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","divMtrlInfoDmnd.form.divMtrlInfoNeedList.form.cb00_02","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","divMtrlInfoDmnd.form.divMtrlInfoNeedList.form.cb00_03","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","divMtrlInfoDmnd.form.divMtrlInfoNeedList.form.cb00_00_00","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","divMtrlInfoDmnd.form.divMtrlInfoNeedList.form.cb00_01_00","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","divMtrlInfoDmnd.form.divMtrlInfoNeedList.form.cb00_03_00","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","divMtrlInfoDmnd.form.divMtrlInfoNeedList.form.cb00_03_00_00","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","divMtrlInfoDmnd.form.divMtrlInfoNeedList.form.cb00_03_00_00_00","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","divMtrlInfoDmnd.form.divMtrlInfoNeedList.form.txtEtcMtrlInfoDmndCn","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CST005S02.xfdl","xjs::TaskCom.xjs");
        this.registerScript("CST005S02.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	CST005S02.xfdl
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
        	// 원상회복확인(퇴거) Dataset
            this.dsRtosAplcfm = this.lookup("dsRtosAplcfm");
        	this.dsRtosAplcfm.addEventHandler("onvaluechanged", this.dsRtosAplcfm_onvaluechanged, this);
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
        	this.cfnComCdLoad({ dsTpbizCd:"RAAPTYPE" });  // 업종

        	// 원상회복확인(퇴거) DS onvaluechanged 이벤트 호출
        	this.dsRtosAplcfm_onvaluechanged(this.dsRtosAplcfm, { columnid:"" });
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

        this.dsRtosAplcfm_onvaluechanged = function(obj,e)
        {
        	// 신규 건 시 처리
            if(this.gfnIsNull(e.columnid) && this.gfnIsNull(this.dsRtosAplcfm.getColumn(0, "aplcntNm"))) {
        		this.dsRtosAplcfm.setColumn(0, "aplcntJbpsNm"  , this.objApp.gdsUser.getColumn(0, "userJbpsNm"  ));  // 신청자 직위
        		this.dsRtosAplcfm.setColumn(0, "aplcntMblTelno", this.objApp.gdsUser.getColumn(0, "userMblTelno"));  // 신청자 휴대폰 번호
        		this.dsRtosAplcfm.setColumn(0, "aplcntNm"      , this.objApp.gdsUser.getColumn(0, "userNm"      ));  // 신청자 명
        		this.dsRtosAplcfm.setColumn(0, "aplcntOgdpNm"  , this.objApp.gdsUser.getColumn(0, "coNm"        ));  // 신청자 소속
        	}

            // 업종 기타
        	if(this.gfnIsNull(e.columnid) || e.columnid == "tpbizCd") {
        		this.divAplyInfo.form.panTpbizEtcCn.visible = this.dsRtosAplcfm.getColumn(0, "tpbizCd") == "RAAPTYPE40";
        	}

        	// 자재정보필요여부
        	if(this.gfnIsNull(e.columnid) || e.columnid == "mtrlInfoNeedYn") {
        		var mtrlInfoNeedYn = obj.getColumn(0, "mtrlInfoNeedYn");  // 자재정보필요여부
        		var mtrlInfoDmndCn = obj.getColumn(0, "mtrlInfoDmndCn");  // 자재정보요청내용
        		// 필요자재정보목록
        	    this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.visible =  mtrlInfoNeedYn == "1";  // 필요("1")
        		if(this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.visible) {
        			// 기타 자재정보 요청 내용
        			this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.form.panEtcMtrlInfoDmndCn.visible = mtrlInfoDmndCn && mtrlInfoDmndCn.indexOf("TSCETC001") != -1;  // 기타 선택시("TSCETC001")
        			// 조회시 값 셋팅
        			var cfnToArray = this.cfnToArray;
        			var div = this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.form;
        			["panDmndMtrlInfoArch", "panDmndMtrlInfoElcty", "panDmndMtrlInfoMchn", "panDmndMtrlInfoCmnct", "panDmndMtrlInfoEtc"].forEach(function(v) {
        				cfnToArray(div[v]).forEach(function(c) {
        					c.value = mtrlInfoDmndCn && mtrlInfoDmndCn.indexOf(c.truevalue) != -1 ? c.truevalue : c.falsevalue;
        				});
        			});
        			// 기타(TSCETC001) 선택시 기타 자재정보 요청 내용 보임
        			this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.form.panEtcMtrlInfoDmndCn.visible = mtrlInfoDmndCn && mtrlInfoDmndCn.indexOf("TSCETC001") != -1;
        		} else {
        		    // 필요자재정보 초기화
        			this.dsRtosAplcfm.setColumn(0, "mtrlInfoDmndCn"   , "");
        			this.dsRtosAplcfm.setColumn(0, "etcMtrlInfoDmndCn", "");
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
        	if(!this.cfnGetAtrb.call("vsAplcfmWrt")) { return true; }

        	// 업종
        	if(this.gfnIsNull( this.dsRtosAplcfm.getColumn(0, "tpbizCd"))) {
        		// {0}는(은) 필수 항목입니다!
        		this.gfnAlertMsg("CST_004", "CST_004", ["업종"], function() {
        			this.parent.parent.setStepIndex(1);
        			this.divAplyInfo.form.cmTpbizCd.setFocus();
        		});

        		return false;
        	}

        	// 업종 기타
        	if(this.divAplyInfo.form.panTpbizEtcCn.visible) {
        		if(this.gfnIsNull( this.dsRtosAplcfm.getColumn(0, "tpbizEtcCn"))) {
        			// {0}는(은) 필수 항목입니다!
        			this.gfnAlertMsg("CST_004", "CST_004", ["업종 기타"], function() {
        				this.parent.parent.setStepIndex(1);
        				this.divAplyInfo.form.edtTpbizEtcCn.setFocus();
        			});

        			return false;
        		}
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

        	// 계약기간시작일
        	if(this.gfnIsNull( this.dsRtosAplcfm.getColumn(0, "ctrtPrdBgngYmd"))) {
        		// {0}는(은) 필수 항목입니다!
        		this.gfnAlertMsg("CST_004", "CST_004", ["계약기간시작일"], function() {
        			this.parent.parent.setStepIndex(1);
        			this.divAplyInfo.form.calCtrtPrdBgngYmd.setFocus();
        		});

        		return false;
        	}

        	// 계약기간종료일
        	if(this.gfnIsNull( this.dsRtosAplcfm.getColumn(0, "ctrtPrdEndYmd"))) {
        		// {0}는(은) 필수 항목입니다!
        		this.gfnAlertMsg("CST_004", "CST_004", ["계약기간종료일"], function() {
        			this.parent.parent.setStepIndex(1);
        			this.divAplyInfo.form.calCtrtPrdEndYmd.setFocus();
        		});

        		return false;
        	}

        	// 원상회복 확인요청일
        	if(this.gfnIsNull( this.dsRtosAplcfm.getColumn(0, "rtosIdntyDmndYmd"))) {
        		// {0}는(은) 필수 항목입니다!
        		this.gfnAlertMsg("CST_004", "CST_004", ["계약기간종료일"], function() {
        			this.parent.parent.setStepIndex(1);
        			this.divAplyInfo.form.calRtosIdntyDmndYmd.setFocus();
        		});

        		return false;
        	}

        	// 착공예정일
        	if(this.gfnIsNull( this.dsRtosAplcfm.getColumn(0, "bgncstPrnmntYmd"))) {
        		// {0}는(은) 필수 항목입니다!
        		this.gfnAlertMsg("CST_004", "CST_004", ["착공예정일"], function() {
        			this.parent.parent.setStepIndex(1);
        			this.divAplyInfo.form.calBgncstPrnmntYmd.setFocus();
        		});

        		return false;
        	}

        	// 준공예정일
        	if(this.gfnIsNull( this.dsRtosAplcfm.getColumn(0, "cmcnPrnmntYmd"))) {
        		// {0}는(은) 필수 항목입니다!
        		this.gfnAlertMsg("CST_004", "CST_004", ["준공예정일"], function() {
        			this.parent.parent.setStepIndex(1);
        			this.divAplyInfo.form.calCmcnPrnmntYmd.setFocus();
        		});

        		return false;
        	}

        	// 시행사유
        	if(this.gfnIsNull( this.dsRtosAplcfm.getColumn(0, "enfcRsnCn"))) {
        		// {0}는(은) 필수 항목입니다!
        		this.gfnAlertMsg("CST_004", "CST_004", ["시행사유"], function() {
        			this.parent.parent.setStepIndex(1);
        			this.divAplyInfo.form.edtEnfcRsnCn.setFocus();
        		});

        		return false;
        	}

        	// 자재정보필요여부
        	if(this.gfnIsNull( this.dsRtosAplcfm.getColumn(0, "mtrlInfoNeedYn"))) {
        		// {0}는(은) 필수 항목입니다!
        		this.gfnAlertMsg("CST_004", "CST_004", ["자재정보필요여부"], function() {
        			this.parent.parent.setStepIndex(1);
        			this.divMtrlInfoDmnd.form.rdoMtrlInfoNeedYn.setFocus();
        		});

        		return false;
        	}

        	// 필요자재정보내용
        	if(this.gfnIsNull(this.dsRtosAplcfm.getColumn(0, "mtrlInfoDmndCn"))) {
        		// {0}는(은) 필수 항목입니다!
        		this.gfnAlertMsg("CST_004", "CST_004", ["필요자재정보"], function() {
        			this.parent.parent.setStepIndex(1);
        			this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.form.cbFlof.setFocus();
        		});

        		return false;
        	}

        	// 기타 자재정보 요청
        	if(this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.form.panEtcMtrlInfoDmndCn.visible) {
        	    if(this.gfnIsNull(this.dsRtosAplcfm.getColumn(0, "etcMtrlInfoDmndCn"))) {
        			// {0}는(은) 필수 항목입니다!
        			this.gfnAlertMsg("CST_004", "CST_004", ["기타 자재정보 요청"], function() {
        				this.parent.parent.setStepIndex(1);
        				this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.form.txtEtcMtrlInfoDmndCn.setFocus();
        			});

        			return false;
        		}
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
            // 공사(작업)분야
            if(this.getPanel(obj).name == this.divAplyInfo.form.panCstrnJobFldCd.name) {
        		this.dsMst.setColumn(0, "cstrnJobFldCd", this.cfnToArray(this.divAplyInfo.form.panCstrnJobFldCd).filter(function(v) { return v.isChecked(); } ).map(function(v) { return v.truevalue; }).join(","));
            // 필요자재정보목록
        	} else {
        	    var cfnToArray = this.cfnToArray;
        		var div = this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.form;
        		var arrMtrlInfoDmndCn = [];
                ["panDmndMtrlInfoArch", "panDmndMtrlInfoElcty", "panDmndMtrlInfoMchn", "panDmndMtrlInfoCmnct", "panDmndMtrlInfoEtc"].forEach(function(v) {
        			cfnToArray(div[v]).forEach(function(c) { if(c.isChecked()) { arrMtrlInfoDmndCn.push(c.truevalue); } });
        		});

        		// 자재정보요청내용
        		this.dsRtosAplcfm.setColumn(0, "mtrlInfoDmndCn", arrMtrlInfoDmndCn.join(","));
        		// 기타(TSCETC001) 선택시 기타 자재정보 요청 내용 보임
        		this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.form.panEtcMtrlInfoDmndCn.visible = arrMtrlInfoDmndCn.indexOf("TSCETC001") != -1;
        		// 기타(TSCETC001) 선택시 기타 자재정보 요청 내용 초기화
        		if(!this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.form.panEtcMtrlInfoDmndCn.visible) {
        			this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.form.txtEtcMtrlInfoDmndCn.value = "";
        		}
        	}
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
            this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.form.cb00_01.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.form.cb00_00.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.form.cb00_02.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.form.cbFlof.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.form.cb00_01_00.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.form.cb00_00_00.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.form.cb00_03.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.form.cb00_03_00.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.form.cb00_03_00_00.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.divMtrlInfoDmnd.form.divMtrlInfoNeedList.form.cb00_03_00_00_00.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.btnIdntyAplcnt.addEventHandler("onclick",this.Button_onclick,this);
            this.btnIdntyAplcnt.addEventHandler("ondblclick",this.Button_ondblclick,this);
            this.btnMtrlInfoDmnd.addEventHandler("onclick",this.Button_onclick,this);
            this.btnMtrlInfoDmnd.addEventHandler("ondblclick",this.Button_ondblclick,this);
        };
        this.loadIncludeScript("CST005S02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
