(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST016M00");
            this.set_titletext("신청자정보(통신작업실)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Panel("panForm","0","10","100.00%","1248",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"panTitle00\"/><PanelItem id=\"PanelItem00\" componentid=\"divInfoGuide\"/><PanelItem id=\"PanelItem02\" componentid=\"panTitle\"/><PanelItem id=\"PanelItem03\" componentid=\"div00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle","130","65","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("신청자정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","1200","65","209","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnFold2\"/><PanelItem id=\"PanelItem00\" componentid=\"Button01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","1210","11","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnFold2","1180","10","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_ACMinus");
            this.addChild(obj.name, obj);

            obj = new Panel("panTitle","1401","131","100.00%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("4");
            obj.set_flexcrossaxisalign("end");
            obj.set_fittocontents("none");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("div00","0","207","100.00%","819",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("신청자정보");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","96",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel00","10","98","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("신청구분");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtAplySeNm","10.00","158","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","10.00","98","305","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtAplySeNm\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00","10","98","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("계약선택여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","20.00","242","305","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"rdoCtrtChcYn\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan02","0","242","100.00%","96",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Radio("rdoCtrtChcYn","114","210","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("20");
            obj.set_fittocontents("none");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var div00_form_rdoCtrtChcYn_innerdataset = new nexacro.NormalDataset("div00_form_rdoCtrtChcYn_innerdataset", obj);
            div00_form_rdoCtrtChcYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">계약선택</Col><Col id=\"codecolumn\">Y</Col></Row><Row><Col id=\"datacolumn\">수기입력</Col><Col id=\"codecolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_rdoCtrtChcYn_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_01","10","98","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_text("신청자");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtAplcntNm","20.00","288","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_readonly("false");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan_04_00_00","20.00","242","305","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtAplcntNm\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00_01","970","270","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("10");
            obj.set_text("신청자 회사명");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtAplcntInstNm","970","315","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan04_01_00","970.00","270","305","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("12");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtAplcntInstNm\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan06","0","242","100.00%","96",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("13");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan_04_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan04_01_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_01_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("14");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan_04_00_00_00_00_00","20.00","242","305","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("15");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_01_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Div00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00_01_00_00_00","970","270","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("16");
            obj.set_text("위치정보(룸번호)");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtPstnInfoRnb","970","315","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("17");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan04_01_00_00_00_00","970.00","270","305","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("18");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00_01_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtPstnInfoRnb\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan_04_00_00_00_00_00_00","20.00","-366","610","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("23");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_01_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt01\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_01_00_00_00_00","0","-366","47.66%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("24");
            obj.set_text("등록자");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan04_01_00_00_00_00_00","650","-366","610","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("25");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00_01_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_03_01_00_00_00_00_00_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00_01_00_00_00_00","0","-366","47.66%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("26");
            obj.set_text("등록자 회사명");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_03_01_00_00_00_00_00_00","0","-321","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("27");
            obj.set_readonly("true");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan06_00_00_00_00","-43","326","100.00%","96",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("22");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan_04_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"pan04_01_00_00_00_00_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan06_00_00_00","0","242","100.00%","96",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("19");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan_04_00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan04_01_00_00_00_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt01","96","303","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("28");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtHwrtInptPstnInfoCn","816","756","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("51");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00","754","708","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("50");
            obj.set_text("위치정보(수기입력)");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new Div("Div00","84","502","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            obj.set_taborder("21");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtCtrtNo","0","0",null,"40","0",null,null,null,null,null,this.div00.form.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            this.div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("btnPop","edtCtrtNo:-40","0","40","40",null,null,null,null,null,null,this.div00.form.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            this.div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_01_00_00_00_00_00","0","-366","47.66%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("29");
            obj.set_text("청구고객코드");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtClmCustCd","96","303","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("30");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan_04_00_00_00_00_00_00_00","20.00","-366","610","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("31");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_01_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtClmCustCd\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00_01_00_00_00_00_00","0","-366","47.66%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("32");
            obj.set_text("청구주소");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtClmAddr","0","-321","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("33");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan04_01_00_00_00_00_00_00","650","-366","610","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("34");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00_01_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtClmAddr\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan06_00_00_00_00_00","-43","326","100.00%","96",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("35");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan_04_00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"pan04_01_00_00_00_00_00_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_01_00_00_00_00_01","0","-366","47.66%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("36");
            obj.set_text("신청자(수기입력)");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtHwrtInptAplcntNm","96","303","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("37");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan_04_00_00_00_00_00_00_01","20.00","-366","610","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("38");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_01_00_00_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtHwrtInptAplcntNm\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00_01_00_00_00_00_01","0","-366","47.66%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("39");
            obj.set_text("계약번호(수기입력)");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtHwrtInptCtrtNo","0","-321","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("40");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan04_01_00_00_00_00_00_01","650","-366","610","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("41");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00_01_00_00_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtHwrtInptCtrtNo\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan06_00_00_00_00_01","-43","326","100.00%","96",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("42");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan_04_00_00_00_00_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"pan04_01_00_00_00_00_00_01\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("43");
            obj.set_text("휴대폰번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtMblTelno","20.00","288","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("44");
            obj.set_readonly("true");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_00","22","316","100%","41",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("45");
            obj.set_text("휴대폰번호는 우측상단 \"사용자 이름\" 클릭 후 해당 메뉴에서 등록 및 수정이 가능합니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","20","303","100%","85",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("46");
            obj.set_type("vertical");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"edtMblTelno\"/><PanelItem id=\"PanelItem01\" componentid=\"sta00_00_00_00_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan_04_00_01","20.00","242","305","136",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("47");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("panBlank00","970.00","270","305","136",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("48");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtHwrtInptPstnInfoCn\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan03_00","0","242","100.00%","147",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("49");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan_04_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"panBlank00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Div("divInfoGuide","0","0","100.00%","289",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("서비스 흐름 및 작업방법 안내");
            obj.set_cssclass("div_WF_InfoGuide");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"10","34","34","20",null,null,null,null,null,this.divInfoGuide.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.divInfoGuide.addChild(obj.name, obj);

            obj = new Static("staSubTitle00","130","65","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("작업방법 안내");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btnFold1","1180","10","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_ACMinus");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00","1210","11","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","1200","65","209","50",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnFold1\"/><PanelItem id=\"PanelItem00\" componentid=\"Button01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panTitle00","10","299","100.00%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("12");
            obj.set_flexcrossaxisalign("end");
            obj.set_fittocontents("none");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00.form.Div00.form
            obj = new Layout("default","",0,0,this.div00.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.edtCtrtNo.set_taborder("0");
                p.edtCtrtNo.set_cssclass("edt_WF_EdtSch");
                p.edtCtrtNo.move("0","0",null,"40","0",null);

                p.btnPop.set_taborder("1");
                p.btnPop.set_cssclass("btn_WF_EdtSch");
                p.btnPop.move("edtCtrtNo:-40","0","40","40",null,null);
            	}
            );
            this.div00.form.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00.form.Div00.form
            obj = new Layout("mobile","",0,0,this.div00.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.div00.form.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00.form.Div00.form
            obj = new Layout("Layout0","",0,0,this.div00.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.div00.form.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.pan00.set_taborder("0");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("0px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.move("0","60","100.00%","96",null,null);

                p.staLabel00.set_taborder("1");
                p.staLabel00.set_text("신청구분");
                p.staLabel00.set_cssclass("sta_WF_Label");
                p.staLabel00.move("10","98","100%","46",null,null);

                p.edtAplySeNm.set_taborder("2");
                p.edtAplySeNm.set_readonly("true");
                p.edtAplySeNm.move("10.00","158","100%","40",null,null);

                p.Panel00_00.set_taborder("3");
                p.Panel00_00.set_type("vertical");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.set_fittocontents("height");
                p.Panel00_00.set_minwidth("");
                p.Panel00_00.move("10.00","98","305","86",null,null);

                p.staLabel03_00.set_taborder("4");
                p.staLabel03_00.set_text("계약선택여부");
                p.staLabel03_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00.move("10","98","100%","46",null,null);

                p.Panel02_00.set_taborder("5");
                p.Panel02_00.set_type("vertical");
                p.Panel02_00.set_flexgrow("1");
                p.Panel02_00.set_fittocontents("height");
                p.Panel02_00.move("20.00","242","305","86",null,null);

                p.pan02.set_taborder("6");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.move("0","242","100.00%","96",null,null);

                p.rdoCtrtChcYn.set_taborder("20");
                p.rdoCtrtChcYn.set_fittocontents("none");
                p.rdoCtrtChcYn.set_innerdataset(div00_form_rdoCtrtChcYn_innerdataset);
                p.rdoCtrtChcYn.set_codecolumn("codecolumn");
                p.rdoCtrtChcYn.set_datacolumn("datacolumn");
                p.rdoCtrtChcYn.set_direction("vertical");
                p.rdoCtrtChcYn.set_columncount("-1");
                p.rdoCtrtChcYn.set_rowcount("-1");
                p.rdoCtrtChcYn.set_value("");
                p.rdoCtrtChcYn.set_index("0");
                p.rdoCtrtChcYn.move("114","210","100%","40",null,null);

                p.staLabel03_00_00_01.set_taborder("7");
                p.staLabel03_00_00_01.set_text("신청자");
                p.staLabel03_00_00_01.set_cssclass("sta_WF_Label");
                p.staLabel03_00_00_01.move("10","98","100%","46",null,null);

                p.edtAplcntNm.set_taborder("8");
                p.edtAplcntNm.set_readonly("false");
                p.edtAplcntNm.move("20.00","288","100%","40",null,null);

                p.pan_04_00_00.set_taborder("9");
                p.pan_04_00_00.set_type("vertical");
                p.pan_04_00_00.set_flexgrow("1");
                p.pan_04_00_00.set_fittocontents("height");
                p.pan_04_00_00.move("20.00","242","305","86",null,null);

                p.staLabel03_01_00_01.set_taborder("10");
                p.staLabel03_01_00_01.set_text("신청자 회사명");
                p.staLabel03_01_00_01.set_cssclass("sta_WF_Label");
                p.staLabel03_01_00_01.move("970","270","100%","46",null,null);

                p.edtAplcntInstNm.set_taborder("11");
                p.edtAplcntInstNm.set_readonly("true");
                p.edtAplcntInstNm.move("970","315","100%","40",null,null);

                p.pan04_01_00.set_taborder("12");
                p.pan04_01_00.set_type("vertical");
                p.pan04_01_00.set_flexgrow("1");
                p.pan04_01_00.set_fittocontents("height");
                p.pan04_01_00.move("970.00","270","305","86",null,null);

                p.pan06.set_taborder("13");
                p.pan06.set_horizontalgap("20");
                p.pan06.set_flexcrossaxiswrapalign("start");
                p.pan06.set_flexwrap("wrap");
                p.pan06.set_fittocontents("height");
                p.pan06.set_verticalgap("0");
                p.pan06.set_spacing("0px 20px 10px 20px");
                p.pan06.set_cssclass("pal_WF_DtlBg");
                p.pan06.move("0","242","100.00%","96",null,null);

                p.staLabel03_00_00_01_00_00_00.set_taborder("14");
                p.staLabel03_00_00_01_00_00_00.set_text("계약번호");
                p.staLabel03_00_00_01_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_00_01_00_00_00.move("10","98","100%","46",null,null);

                p.pan_04_00_00_00_00_00.set_taborder("15");
                p.pan_04_00_00_00_00_00.set_type("vertical");
                p.pan_04_00_00_00_00_00.set_flexgrow("1");
                p.pan_04_00_00_00_00_00.set_fittocontents("height");
                p.pan_04_00_00_00_00_00.move("20.00","242","305","86",null,null);

                p.staLabel03_01_00_01_00_00_00.set_taborder("16");
                p.staLabel03_01_00_01_00_00_00.set_text("위치정보(룸번호)");
                p.staLabel03_01_00_01_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel03_01_00_01_00_00_00.move("970","270","100%","46",null,null);

                p.edtPstnInfoRnb.set_taborder("17");
                p.edtPstnInfoRnb.move("970","315","100%","40",null,null);

                p.pan04_01_00_00_00_00.set_taborder("18");
                p.pan04_01_00_00_00_00.set_type("vertical");
                p.pan04_01_00_00_00_00.set_flexgrow("1");
                p.pan04_01_00_00_00_00.set_fittocontents("height");
                p.pan04_01_00_00_00_00.move("970.00","270","305","86",null,null);

                p.pan_04_00_00_00_00_00_00.set_taborder("23");
                p.pan_04_00_00_00_00_00_00.set_type("vertical");
                p.pan_04_00_00_00_00_00_00.set_flexgrow("1");
                p.pan_04_00_00_00_00_00_00.set_fittocontents("height");
                p.pan_04_00_00_00_00_00_00.move("20.00","-366","610","86",null,null);

                p.staLabel03_00_00_01_00_00_00_00.set_taborder("24");
                p.staLabel03_00_00_01_00_00_00_00.set_text("등록자");
                p.staLabel03_00_00_01_00_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_00_01_00_00_00_00.move("0","-366","47.66%","46",null,null);

                p.pan04_01_00_00_00_00_00.set_taborder("25");
                p.pan04_01_00_00_00_00_00.set_type("vertical");
                p.pan04_01_00_00_00_00_00.set_flexgrow("1");
                p.pan04_01_00_00_00_00_00.set_fittocontents("height");
                p.pan04_01_00_00_00_00_00.move("650","-366","610","86",null,null);

                p.staLabel03_01_00_01_00_00_00_00.set_taborder("26");
                p.staLabel03_01_00_01_00_00_00_00.set_text("등록자 회사명");
                p.staLabel03_01_00_01_00_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel03_01_00_01_00_00_00_00.move("0","-366","47.66%","46",null,null);

                p.edt00_03_01_00_00_00_00_00_00.set_taborder("27");
                p.edt00_03_01_00_00_00_00_00_00.set_readonly("true");
                p.edt00_03_01_00_00_00_00_00_00.move("0","-321","100%","40",null,null);

                p.pan06_00_00_00_00.set_taborder("22");
                p.pan06_00_00_00_00.set_horizontalgap("20");
                p.pan06_00_00_00_00.set_flexcrossaxiswrapalign("start");
                p.pan06_00_00_00_00.set_flexwrap("wrap");
                p.pan06_00_00_00_00.set_fittocontents("height");
                p.pan06_00_00_00_00.set_verticalgap("0");
                p.pan06_00_00_00_00.set_spacing("0px 20px 10px 20px");
                p.pan06_00_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.pan06_00_00_00_00.move("-43","326","100.00%","96",null,null);

                p.pan06_00_00_00.set_taborder("19");
                p.pan06_00_00_00.set_horizontalgap("20");
                p.pan06_00_00_00.set_flexcrossaxiswrapalign("start");
                p.pan06_00_00_00.set_flexwrap("wrap");
                p.pan06_00_00_00.set_fittocontents("height");
                p.pan06_00_00_00.set_verticalgap("0");
                p.pan06_00_00_00.set_spacing("0px 20px 10px 20px");
                p.pan06_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.pan06_00_00_00.move("0","242","100.00%","96",null,null);

                p.edt01.set_taborder("28");
                p.edt01.move("96","303","100%","40",null,null);

                p.edtHwrtInptPstnInfoCn.set_taborder("51");
                p.edtHwrtInptPstnInfoCn.move("816","756","100%","40",null,null);

                p.Static00.set_taborder("50");
                p.Static00.set_text("위치정보(수기입력)");
                p.Static00.set_cssclass("sta_WF_Label_E");
                p.Static00.move("754","708","100%","46",null,null);

                p.Div00.set_text("Div00");
                p.Div00.set_formscrollbartype("none none");
                p.Div00.set_formscrolltype("none");
                p.Div00.set_flexgrow("1");
                p.Div00.set_taborder("21");
                p.Div00.move("84","502","100%","40",null,null);

                p.staLabel03_00_00_01_00_00_00_00_00.set_taborder("29");
                p.staLabel03_00_00_01_00_00_00_00_00.set_text("청구고객코드");
                p.staLabel03_00_00_01_00_00_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_00_01_00_00_00_00_00.move("0","-366","47.66%","46",null,null);

                p.edtClmCustCd.set_taborder("30");
                p.edtClmCustCd.move("96","303","100%","40",null,null);

                p.pan_04_00_00_00_00_00_00_00.set_taborder("31");
                p.pan_04_00_00_00_00_00_00_00.set_type("vertical");
                p.pan_04_00_00_00_00_00_00_00.set_flexgrow("1");
                p.pan_04_00_00_00_00_00_00_00.move("20.00","-366","610","86",null,null);

                p.staLabel03_01_00_01_00_00_00_00_00.set_taborder("32");
                p.staLabel03_01_00_01_00_00_00_00_00.set_text("청구주소");
                p.staLabel03_01_00_01_00_00_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel03_01_00_01_00_00_00_00_00.move("0","-366","47.66%","46",null,null);

                p.edtClmAddr.set_taborder("33");
                p.edtClmAddr.move("0","-321","100%","40",null,null);

                p.pan04_01_00_00_00_00_00_00.set_taborder("34");
                p.pan04_01_00_00_00_00_00_00.set_type("vertical");
                p.pan04_01_00_00_00_00_00_00.set_flexgrow("1");
                p.pan04_01_00_00_00_00_00_00.move("650","-366","610","86",null,null);

                p.pan06_00_00_00_00_00.set_taborder("35");
                p.pan06_00_00_00_00_00.set_horizontalgap("20");
                p.pan06_00_00_00_00_00.set_flexcrossaxiswrapalign("start");
                p.pan06_00_00_00_00_00.set_flexwrap("wrap");
                p.pan06_00_00_00_00_00.set_fittocontents("height");
                p.pan06_00_00_00_00_00.set_verticalgap("0");
                p.pan06_00_00_00_00_00.set_spacing("0px 20px 10px 20px");
                p.pan06_00_00_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.pan06_00_00_00_00_00.move("-43","326","100.00%","96",null,null);

                p.staLabel03_00_00_01_00_00_00_00_01.set_taborder("36");
                p.staLabel03_00_00_01_00_00_00_00_01.set_text("신청자(수기입력)");
                p.staLabel03_00_00_01_00_00_00_00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_00_01_00_00_00_00_01.move("0","-366","47.66%","46",null,null);

                p.edtHwrtInptAplcntNm.set_taborder("37");
                p.edtHwrtInptAplcntNm.move("96","303","100%","40",null,null);

                p.pan_04_00_00_00_00_00_00_01.set_taborder("38");
                p.pan_04_00_00_00_00_00_00_01.set_type("vertical");
                p.pan_04_00_00_00_00_00_00_01.set_flexgrow("1");
                p.pan_04_00_00_00_00_00_00_01.move("20.00","-366","610","86",null,null);

                p.staLabel03_01_00_01_00_00_00_00_01.set_taborder("39");
                p.staLabel03_01_00_01_00_00_00_00_01.set_text("계약번호(수기입력)");
                p.staLabel03_01_00_01_00_00_00_00_01.set_cssclass("sta_WF_Label");
                p.staLabel03_01_00_01_00_00_00_00_01.move("0","-366","47.66%","46",null,null);

                p.edtHwrtInptCtrtNo.set_taborder("40");
                p.edtHwrtInptCtrtNo.move("0","-321","100%","40",null,null);

                p.pan04_01_00_00_00_00_00_01.set_taborder("41");
                p.pan04_01_00_00_00_00_00_01.set_type("vertical");
                p.pan04_01_00_00_00_00_00_01.set_flexgrow("1");
                p.pan04_01_00_00_00_00_00_01.move("650","-366","610","86",null,null);

                p.pan06_00_00_00_00_01.set_taborder("42");
                p.pan06_00_00_00_00_01.set_horizontalgap("20");
                p.pan06_00_00_00_00_01.set_flexcrossaxiswrapalign("start");
                p.pan06_00_00_00_00_01.set_flexwrap("wrap");
                p.pan06_00_00_00_00_01.set_fittocontents("height");
                p.pan06_00_00_00_00_01.set_verticalgap("0");
                p.pan06_00_00_00_00_01.set_spacing("0px 20px 10px 20px");
                p.pan06_00_00_00_00_01.set_cssclass("pal_WF_DtlBg");
                p.pan06_00_00_00_00_01.move("-43","326","100.00%","96",null,null);

                p.staLabel03_00_00_00.set_taborder("43");
                p.staLabel03_00_00_00.set_text("휴대폰번호");
                p.staLabel03_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_00_00.move("10","98","100%","46",null,null);

                p.edtMblTelno.set_taborder("44");
                p.edtMblTelno.set_readonly("true");
                p.edtMblTelno.move("20.00","288","100%","40",null,null);

                p.sta00_00_00_00_00.set_taborder("45");
                p.sta00_00_00_00_00.set_text("휴대폰번호는 우측상단 \"사용자 이름\" 클릭 후 해당 메뉴에서 등록 및 수정이 가능합니다.");
                p.sta00_00_00_00_00.set_cssclass("sta_WF_Des");
                p.sta00_00_00_00_00.set_fittocontents("height");
                p.sta00_00_00_00_00.set_flexgrow("1");
                p.sta00_00_00_00_00.move("22","316","100%","41",null,null);

                p.Panel01_00.set_taborder("46");
                p.Panel01_00.set_type("vertical");
                p.Panel01_00.set_verticalgap("4");
                p.Panel01_00.set_fittocontents("height");
                p.Panel01_00.move("20","303","100%","85",null,null);

                p.pan_04_00_01.set_taborder("47");
                p.pan_04_00_01.set_type("vertical");
                p.pan_04_00_01.set_flexgrow("1");
                p.pan_04_00_01.set_fittocontents("height");
                p.pan_04_00_01.set_verticalgap("4");
                p.pan_04_00_01.move("20.00","242","305","136",null,null);

                p.panBlank00.set_taborder("48");
                p.panBlank00.set_type("vertical");
                p.panBlank00.set_flexgrow("1");
                p.panBlank00.set_fittocontents("height");
                p.panBlank00.move("970.00","270","305","136",null,null);

                p.pan03_00.set_taborder("49");
                p.pan03_00.set_horizontalgap("20");
                p.pan03_00.set_flexcrossaxiswrapalign("start");
                p.pan03_00.set_flexwrap("wrap");
                p.pan03_00.set_fittocontents("height");
                p.pan03_00.set_verticalgap("0");
                p.pan03_00.set_spacing("0px 20px 10px 20px");
                p.pan03_00.set_cssclass("pal_WF_DtlBg");
                p.pan03_00.move("0","242","100.00%","147",null,null);
            	}
            );
            obj.set_type("vertical");
            this.div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00.form
            obj = new Layout("mobile","",0,0,this.div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00.form
            obj = new Layout("Layout0","",0,0,this.div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.pan06.move("0","242","100.00%","183",null,null);

                p.pan06_00_00_00_00.move("-43","326","100.00%","183",null,null);

                p.pan06_00_00_00.move("0","242","100.00%","183",null,null);

                p.pan06_00_00_00_00_00.move("-43","326","100.00%","183",null,null);

                p.pan06_00_00_00_00_01.move("-43","326","100.00%","183",null,null);

                p.pan03_00.move("0","242","100.00%","283",null,null);

                p.pan04_01_00_00_00_00_00_01.set_fittocontents("height");

                p.pan_04_00_00_00_00_00_00_01.set_fittocontents("height");

                p.pan04_01_00_00_00_00_00_00.set_fittocontents("height");

                p.pan_04_00_00_00_00_00_00_00.set_fittocontents("height");

                p.pan04_01_00_00_00_00.set_fittocontents("height");

                p.pan_04_00_00_00_00_00.set_fittocontents("height");

                p.pan04_01_00_00_00_00_00.set_fittocontents("height");

                p.pan_04_00_00_00_00_00_00.set_fittocontents("height");

                p.pan04_01_00.set_fittocontents("height");

                p.pan_04_00_00.set_fittocontents("height");

                p.Panel02_00.set_fittocontents("height");

                p.Panel00_00.set_fittocontents("height");

                p.rdoCtrtChcYn.move("114","210","100%","60",null,null);
            	}
            );
            obj.set_type("vertical");
            this.div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divInfoGuide.form
            obj = new Layout("default","",0,0,this.divInfoGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnClose.set_taborder("0");
                p.btnClose.set_cssclass("btn_WF_ACPlus");
                p.btnClose.set_visible("false");
                p.btnClose.move(null,"10","34","34","20",null);
            	}
            );
            this.divInfoGuide.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divInfoGuide.form
            obj = new Layout("mobile","",0,0,this.divInfoGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divInfoGuide.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divInfoGuide.form
            obj = new Layout("Layout0","",0,0,this.divInfoGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divInfoGuide.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,570,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("신청자정보(통신작업실)");

                p.panForm.set_taborder("1");
                p.panForm.set_type("vertical");
                p.panForm.set_fittocontents("height");
                p.panForm.move("0","10","100.00%","1248",null,null);

                p.staSubTitle.set_taborder("2");
                p.staSubTitle.set_text("신청자정보");
                p.staSubTitle.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle.move("130","65","100%","50",null,null);

                p.Panel00_00.set_taborder("3");
                p.Panel00_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel00_00.set_flexcrossaxisalign("center");
                p.Panel00_00.set_flexmainaxisalign("end");
                p.Panel00_00.set_horizontalgap("10");
                p.Panel00_00.set_spacing("0px 10px 0px 10px");
                p.Panel00_00.move("1200","65","209","50",null,null);

                p.Button01.set_taborder("5");
                p.Button01.set_cssclass("btn_WF_ACPlus");
                p.Button01.set_visible("false");
                p.Button01.move("1210","11","34","34",null,null);

                p.btnFold2.set_taborder("6");
                p.btnFold2.set_cssclass("btn_WF_ACMinus");
                p.btnFold2.move("1180","10","34","34",null,null);

                p.panTitle.set_taborder("4");
                p.panTitle.set_flexcrossaxisalign("end");
                p.panTitle.set_fittocontents("none");
                p.panTitle.set_minheight("70");
                p.panTitle.set_maxheight("");
                p.panTitle.move("1401","131","100.00%","70",null,null);

                p.div00.set_taborder("0");
                p.div00.set_text("신청자정보");
                p.div00.set_cssclass("div_WF_Bg");
                p.div00.set_fittocontents("height");
                p.div00.move("0","207","100.00%","819",null,null);

                p.divInfoGuide.set_taborder("7");
                p.divInfoGuide.set_text("서비스 흐름 및 작업방법 안내");
                p.divInfoGuide.set_cssclass("div_WF_InfoGuide");
                p.divInfoGuide.move("0","0","100.00%","289",null,null);

                p.staSubTitle00.set_taborder("8");
                p.staSubTitle00.set_text("작업방법 안내");
                p.staSubTitle00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle00.move("130","65","100%","50",null,null);

                p.btnFold1.set_taborder("9");
                p.btnFold1.set_cssclass("btn_WF_ACMinus");
                p.btnFold1.move("1180","10","34","34",null,null);

                p.Button01_00.set_taborder("10");
                p.Button01_00.set_cssclass("btn_WF_ACPlus");
                p.Button01_00.set_visible("false");
                p.Button01_00.move("1210","11","34","34",null,null);

                p.Panel00_00_00.set_taborder("11");
                p.Panel00_00_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel00_00_00.set_flexcrossaxisalign("center");
                p.Panel00_00_00.set_flexmainaxisalign("end");
                p.Panel00_00_00.set_horizontalgap("10");
                p.Panel00_00_00.set_spacing("0px 10px 0px 10px");
                p.Panel00_00_00.move("1200","65","209","50",null,null);

                p.panTitle00.set_taborder("12");
                p.panTitle00.set_flexcrossaxisalign("end");
                p.panTitle00.set_fittocontents("none");
                p.panTitle00.set_minheight("70");
                p.panTitle00.set_maxheight("");
                p.panTitle00.move("10","299","100.00%","70",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Phone_screen",480,570,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panForm.set_spacing("0px 20px 10px 20px");
                p.panForm.move("0","10","100.00%","1829",null,null);

                p.div00.move("0","207","100.00%","1390",null,null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div00.form.rdoCtrtChcYn","value","dsFcltOperMst","ctrtChcYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div00.form.edtAplcntNm","value","dsFcltOperMst","aplcntNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div00.form.edtAplcntInstNm","value","dsFcltOperMst","aplcntInstNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div00.form.Div00.form.edtCtrtNo","value","dsFcltOperMst","ctrtNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div00.form.edtPstnInfoRnb","value","dsFcltOperMst","pstnInfoRnb");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div00.form.edtClmCustCd","value","dsFcltOperMst","clmCustCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div00.form.edtClmAddr","value","dsFcltOperMst","clmAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div00.form.edtHwrtInptAplcntNm","value","dsFcltOperMst","hwrtInptAplcntNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div00.form.edtHwrtInptCtrtNo","value","dsFcltOperMst","hwrtInptCtrtNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div00.form.edtMblTelno","value","dsFcltOperMst","mblTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div00.form.edtHwrtInptPstnInfoCn","value","dsFcltOperMst","hwrtInptPstnInfoCn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CST015M01.xfdl", function() {
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

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수

        	obj.cssclass = obj.cssclass == "btn_WF_ACPlus" ? "btn_WF_ACMinus" : "btn_WF_ACPlus";  // +,- css 변경
        	this.divInfoGuide.visible = false;
        	this.divInfoGuide.form.resetScroll();
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

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        /**************************************************************************
         * @name : btnFold1_onclick
         * @description : 작업방법 안내 접기/펴기
         ***************************************************************************/
        this.btnFold1_onclick = function(obj,e)
        {
        	if (obj.cssclass == "btn_WF_ACPlus") {
        		this.divInfoGuide.visible = true;
        	} else {
        		this.divInfoGuide.visible = false;
        	}
        	// 펼침(축소)
        	obj.cssclass = obj.cssclass == "btn_WF_ACPlus" ? "btn_WF_ACMinus" : "btn_WF_ACPlus";  // +,- css 변경
        	this.divInfoGuide.form.resetScroll();
        };

        /**************************************************************************
         * @name : btnFold2_onclick
         * @description : 신청자 정보 접기/펴기
         ***************************************************************************/
        this.btnFold2_onclick = function(obj,e)
        {
        	if (obj.cssclass == "btn_WF_ACPlus") {
        		this.div00.visible = true;
        	} else {
        		this.div00.visible = false;
        	}
        	// 펼침(축소)
        	obj.cssclass = obj.cssclass == "btn_WF_ACPlus" ? "btn_WF_ACMinus" : "btn_WF_ACPlus";  // +,- css 변경
        	this.div00.form.resetScroll();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnFold2.addEventHandler("onclick",this.btnFold2_onclick,this);
            this.divInfoGuide.form.btnClose.addEventHandler("onclick",this.divInfoGuide_btnSchClose_onclick,this);
            this.btnFold1.addEventHandler("onclick",this.btnFold1_onclick,this);
        };
        this.loadIncludeScript("CST015M01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
