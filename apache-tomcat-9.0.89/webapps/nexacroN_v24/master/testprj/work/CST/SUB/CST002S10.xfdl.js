(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST002M00_01");
            this.set_titletext("신청자정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFile1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"fullName\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"fullName\">Iaad010101 [PDF, 328KB]</Col><Col id=\"fileSz\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staSubTitle","0","20","100.00%","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("표는 필수 입력 사항입니다.");
            obj.set_cssclass("sta_WF_EsentialTxt");
            this.addChild(obj.name, obj);

            obj = new Div("div00","0","staSubTitle:0","100.00%","964",null,null,null,null,null,null,this);
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

            obj = new Edit("edt00","10.00","158","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_value("입주자서비스▶시설물설치(변경)신청");
            obj.set_text("입주자서비스▶시설물설치(변경)신청");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","10.00","98","305","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel01_00","10","98","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("계약선택여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","10.00","98","305","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Radio00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("panBlank","10.00","98","305","1",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan01","0","60","100.00%","96",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"panBlank\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Radio("Radio00","127","203","280","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("15");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var div00_form_Radio00_innerdataset = new nexacro.NormalDataset("div00_form_Radio00_innerdataset", obj);
            div00_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">계약선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">수기입력</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_Radio00_innerdataset);
            obj.set_text("계약선택");
            obj.set_value("0");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00","10","98","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_text("신청자");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_02","20.00","288","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_readonly("false");
            obj.set_value("신청자 성명");
            obj.set_text("신청자 성명");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","20.00","242","305","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("10");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_02\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan02","0","242","100.00%","96",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("11");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_01\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_01","970","270","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("12");
            obj.set_text("신청자 회사명");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_03_01","970","315","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("13");
            obj.set_readonly("true");
            obj.set_value("신청자 성명");
            obj.set_text("신청자 성명");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel02_01","970.00","270","305","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("14");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_03_01\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00","10","98","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("16");
            obj.set_text("등록자");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_02_00","20.00","288","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("17");
            obj.set_readonly("false");
            obj.set_value("등록자 성명");
            obj.set_displaynulltext("등록자 성명");
            obj.set_text("등록자 성명");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan_04_00","20.00","242","305","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("18");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_02_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00","970","270","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("19");
            obj.set_text("등록자 회사명");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_03_01_00","970","315","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("20");
            obj.set_displaynulltext("회사명");
            obj.set_value("회사명");
            obj.set_readonly("true");
            obj.set_text("회사명");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan04_01","970.00","270","305","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("21");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_03_01_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan03","0","242","100.00%","96",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("22");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan_04_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan04_01\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01","10","98","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("23");
            obj.set_text("건물구분");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00","20.00","242","305","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("24");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"panComb\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("PanelBlank","970.00","270","305","1",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("25");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan04","0","242","100.00%","96",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("26");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"PanelBlank\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","50","491","150","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("29");
            obj.set_flexgrow("1");
            obj.set_text("제2여객터미널");
            obj.set_value("");
            obj.set_index("-1");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","50","491","150","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("28");
            obj.set_flexgrow("1");
            obj.set_text("제1터미널역");
            obj.set_value("");
            obj.set_index("-1");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("panComb","52","493","100%","50",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("27");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Combo00\"/><PanelItem id=\"PanelItem02\" componentid=\"Combo00_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("30");
            obj.set_text("계약명");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new Div("divEdtPop01","20.00","715","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("31");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","0","0","100%","40",null,null,null,null,null,null,this.div00.form.divEdtPop01.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            this.div00.form.divEdtPop01.addChild(obj.name, obj);

            obj = new Button("btnPop","Edit00:-40","0","40","40",null,null,null,null,null,null,this.div00.form.divEdtPop01.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            this.div00.form.divEdtPop01.addChild(obj.name, obj);

            obj = new Panel("pan06_00","20.00","242","305","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("32");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"divEdtPop01\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00_00","970","270","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("33");
            obj.set_text("위치정보(룸번호)");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan06_01","970.00","270","305","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("34");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan05","0","242","100.00%","96",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("35");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan06_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan06_01\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","580","590","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("36");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_01","10","98","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("37");
            obj.set_text("청구고객코드");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_02_00_00","20.00","288","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("38");
            obj.set_readonly("false");
            obj.set_value("청구고객코드");
            obj.set_displaynulltext("청구고객코드");
            obj.set_text("청구고객코드");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan_04_00_00","20.00","242","305","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("39");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_02_00_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00_01","970","270","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("40");
            obj.set_text("청구주소");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_03_01_00_00","970","315","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("41");
            obj.set_value("청구주소");
            obj.set_displaynulltext("청구주소");
            obj.set_text("청구주소");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan04_01_00","970.00","270","305","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("42");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_03_01_00_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan06","0","242","100.00%","96",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("43");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan_04_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan04_01_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_01_00","10","98","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("44");
            obj.set_text("신청자(수기입력)");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_02_00_00_00","20.00","288","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("45");
            obj.set_readonly("false");
            obj.set_value("신청자(수기입력)");
            obj.set_displaynulltext("신청자(수기입력)");
            obj.set_text("신청자(수기입력)");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan_04_00_00_00","20.00","242","305","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("46");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_02_00_00_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00_01_00","970","270","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("47");
            obj.set_text("계약번호(수기입력)");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_03_01_00_00_00","970","315","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("48");
            obj.set_value("계약번호(수기입력)");
            obj.set_displaynulltext("계약번호(수기입력)");
            obj.set_text("계약번호(수기입력)");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan04_01_00_00","970.00","270","305","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("49");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_03_01_00_00_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan07","0","242","100.00%","96",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("50");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan_04_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan04_01_00_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel05_00_00","10","98","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("51");
            obj.set_text("휴대폰 번호");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit01","70","819","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("52");
            obj.set_readonly("true");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_00","20","20","100%","42",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("53");
            obj.set_text("휴대폰번호는 우측상단 \"사용자 이름\" 클릭 후 해당 메뉴에서 등록 및 수정이 가능합니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel00","61","817","100%","85",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("54");
            obj.set_type("vertical");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Edit01\"/><PanelItem id=\"PanelItem02\" componentid=\"sta00_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan04_00","10.00","98","305","136",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("55");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel05_01_00","10","98","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("56");
            obj.set_text("위치정보(수기입력)");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit01_00","675","820","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("57");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","675","850","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("58");
            obj.set_text("예)건물명 / 층별 / 룸번호");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","675","820","100%","80",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("59");
            obj.set_type("vertical");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Edit01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"sta00_00_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan05_01","10.00","98","305","136",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("60");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_01\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan08","0","60","100.00%","146",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("61");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_fittocontents("height");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan04_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan05_01\"/></Contents>");
            this.div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00.form.divEdtPop01.form
            obj = new Layout("default","",0,0,this.div00.form.divEdtPop01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Edit00.set_taborder("0");
                p.Edit00.set_cssclass("edt_WF_EdtSch");
                p.Edit00.move("0","0","100%","40",null,null);

                p.btnPop.set_taborder("1");
                p.btnPop.set_cssclass("btn_WF_EdtSch");
                p.btnPop.move("Edit00:-40","0","40","40",null,null);
            	}
            );
            this.div00.form.divEdtPop01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00.form.divEdtPop01.form
            obj = new Layout("mobile","",0,0,this.div00.form.divEdtPop01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.div00.form.divEdtPop01.form.addLayout(obj.name, obj);
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

                p.edt00.set_taborder("2");
                p.edt00.set_readonly("true");
                p.edt00.set_value("입주자서비스▶시설물설치(변경)신청");
                p.edt00.move("10.00","158","100%","40",null,null);

                p.Panel00_00.set_taborder("3");
                p.Panel00_00.set_type("vertical");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.set_minwidth("");
                p.Panel00_00.move("10.00","98","305","86",null,null);

                p.staLabel01_00.set_taborder("4");
                p.staLabel01_00.set_text("계약선택여부");
                p.staLabel01_00.set_cssclass("sta_WF_Label_E");
                p.staLabel01_00.move("10","98","100%","46",null,null);

                p.Panel01_00.set_taborder("5");
                p.Panel01_00.set_type("vertical");
                p.Panel01_00.set_flexgrow("1");
                p.Panel01_00.move("10.00","98","305","86",null,null);

                p.panBlank.set_taborder("6");
                p.panBlank.set_type("vertical");
                p.panBlank.set_flexgrow("1");
                p.panBlank.move("10.00","98","305","1",null,null);

                p.pan01.set_taborder("7");
                p.pan01.set_horizontalgap("20");
                p.pan01.set_flexcrossaxiswrapalign("start");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_verticalgap("0");
                p.pan01.set_spacing("0px 20px 10px 20px");
                p.pan01.set_cssclass("pal_WF_DtlBg");
                p.pan01.set_flexshrink("1");
                p.pan01.set_fittocontents("height");
                p.pan01.move("0","60","100.00%","96",null,null);

                p.Radio00.set_taborder("15");
                p.Radio00.set_fittocontents("width");
                p.Radio00.set_innerdataset(div00_form_Radio00_innerdataset);
                p.Radio00.set_codecolumn("codecolumn");
                p.Radio00.set_datacolumn("datacolumn");
                p.Radio00.set_direction("vertical");
                p.Radio00.set_value("0");
                p.Radio00.set_index("0");
                p.Radio00.move("127","203","280","40",null,null);

                p.staLabel03_00.set_taborder("8");
                p.staLabel03_00.set_text("신청자");
                p.staLabel03_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00.move("10","98","100%","46",null,null);

                p.edt00_02.set_taborder("9");
                p.edt00_02.set_readonly("false");
                p.edt00_02.set_value("신청자 성명");
                p.edt00_02.move("20.00","288","100%","40",null,null);

                p.Panel02_00.set_taborder("10");
                p.Panel02_00.set_type("vertical");
                p.Panel02_00.set_flexgrow("1");
                p.Panel02_00.move("20.00","242","305","86",null,null);

                p.pan02.set_taborder("11");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.move("0","242","100.00%","96",null,null);

                p.staLabel03_01.set_taborder("12");
                p.staLabel03_01.set_text("신청자 회사명");
                p.staLabel03_01.set_cssclass("sta_WF_Label");
                p.staLabel03_01.move("970","270","100%","46",null,null);

                p.edt00_03_01.set_taborder("13");
                p.edt00_03_01.set_readonly("true");
                p.edt00_03_01.set_value("신청자 성명");
                p.edt00_03_01.move("970","315","100%","40",null,null);

                p.Panel02_01.set_taborder("14");
                p.Panel02_01.set_type("vertical");
                p.Panel02_01.set_flexgrow("1");
                p.Panel02_01.move("970.00","270","305","86",null,null);

                p.staLabel03_00_00.set_taborder("16");
                p.staLabel03_00_00.set_text("등록자");
                p.staLabel03_00_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00_00.move("10","98","100%","46",null,null);

                p.edt00_02_00.set_taborder("17");
                p.edt00_02_00.set_readonly("false");
                p.edt00_02_00.set_value("등록자 성명");
                p.edt00_02_00.set_displaynulltext("등록자 성명");
                p.edt00_02_00.move("20.00","288","100%","40",null,null);

                p.pan_04_00.set_taborder("18");
                p.pan_04_00.set_type("vertical");
                p.pan_04_00.set_flexgrow("1");
                p.pan_04_00.move("20.00","242","305","86",null,null);

                p.staLabel03_01_00.set_taborder("19");
                p.staLabel03_01_00.set_text("등록자 회사명");
                p.staLabel03_01_00.set_cssclass("sta_WF_Label");
                p.staLabel03_01_00.move("970","270","100%","46",null,null);

                p.edt00_03_01_00.set_taborder("20");
                p.edt00_03_01_00.set_displaynulltext("회사명");
                p.edt00_03_01_00.set_value("회사명");
                p.edt00_03_01_00.set_readonly("true");
                p.edt00_03_01_00.move("970","315","100%","40",null,null);

                p.pan04_01.set_taborder("21");
                p.pan04_01.set_type("vertical");
                p.pan04_01.set_flexgrow("1");
                p.pan04_01.move("970.00","270","305","86",null,null);

                p.pan03.set_taborder("22");
                p.pan03.set_horizontalgap("20");
                p.pan03.set_flexcrossaxiswrapalign("start");
                p.pan03.set_flexwrap("wrap");
                p.pan03.set_fittocontents("height");
                p.pan03.set_verticalgap("0");
                p.pan03.set_spacing("0px 20px 10px 20px");
                p.pan03.set_cssclass("pal_WF_DtlBg");
                p.pan03.move("0","242","100.00%","96",null,null);

                p.staLabel03_00_01.set_taborder("23");
                p.staLabel03_00_01.set_text("건물구분");
                p.staLabel03_00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_01.move("10","98","100%","46",null,null);

                p.Panel02_00_00.set_taborder("24");
                p.Panel02_00_00.set_type("vertical");
                p.Panel02_00_00.set_flexgrow("1");
                p.Panel02_00_00.move("20.00","242","305","86",null,null);

                p.PanelBlank.set_taborder("25");
                p.PanelBlank.set_type("vertical");
                p.PanelBlank.set_flexgrow("1");
                p.PanelBlank.move("970.00","270","305","1",null,null);

                p.pan04.set_taborder("26");
                p.pan04.set_horizontalgap("20");
                p.pan04.set_flexcrossaxiswrapalign("start");
                p.pan04.set_flexwrap("wrap");
                p.pan04.set_fittocontents("height");
                p.pan04.set_verticalgap("0");
                p.pan04.set_spacing("0px 20px 10px 20px");
                p.pan04.set_cssclass("pal_WF_DtlBg");
                p.pan04.move("0","242","100.00%","96",null,null);

                p.Combo00_00.set_taborder("29");
                p.Combo00_00.set_flexgrow("1");
                p.Combo00_00.set_text("제2여객터미널");
                p.Combo00_00.set_value("");
                p.Combo00_00.set_index("-1");
                p.Combo00_00.move("50","491","150","40",null,null);

                p.Combo00.set_taborder("28");
                p.Combo00.set_flexgrow("1");
                p.Combo00.set_text("제1터미널역");
                p.Combo00.set_value("");
                p.Combo00.set_index("-1");
                p.Combo00.move("50","491","150","40",null,null);

                p.panComb.set_taborder("27");
                p.panComb.set_flexgrow("1");
                p.panComb.set_horizontalgap("10");
                p.panComb.move("52","493","100%","50",null,null);

                p.staLabel03_00_00_00.set_taborder("30");
                p.staLabel03_00_00_00.set_text("계약명");
                p.staLabel03_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_00_00.move("10","98","100%","46",null,null);

                p.divEdtPop01.set_taborder("31");
                p.divEdtPop01.set_text("Div00");
                p.divEdtPop01.set_formscrollbartype("none none");
                p.divEdtPop01.set_formscrolltype("none");
                p.divEdtPop01.set_flexgrow("1");
                p.divEdtPop01.move("20.00","715","100%","40",null,null);

                p.pan06_00.set_taborder("32");
                p.pan06_00.set_type("vertical");
                p.pan06_00.set_flexgrow("1");
                p.pan06_00.move("20.00","242","305","86",null,null);

                p.staLabel03_01_00_00.set_taborder("33");
                p.staLabel03_01_00_00.set_text("위치정보(룸번호)");
                p.staLabel03_01_00_00.set_cssclass("sta_WF_Label");
                p.staLabel03_01_00_00.move("970","270","100%","46",null,null);

                p.pan06_01.set_taborder("34");
                p.pan06_01.set_type("vertical");
                p.pan06_01.set_flexgrow("1");
                p.pan06_01.move("970.00","270","305","86",null,null);

                p.pan05.set_taborder("35");
                p.pan05.set_horizontalgap("20");
                p.pan05.set_flexcrossaxiswrapalign("start");
                p.pan05.set_flexwrap("wrap");
                p.pan05.set_fittocontents("height");
                p.pan05.set_verticalgap("0");
                p.pan05.set_spacing("0px 20px 10px 20px");
                p.pan05.set_cssclass("pal_WF_DtlBg");
                p.pan05.move("0","242","100.00%","96",null,null);

                p.Edit00.set_taborder("36");
                p.Edit00.move("580","590","100%","40",null,null);

                p.staLabel03_00_00_01.set_taborder("37");
                p.staLabel03_00_00_01.set_text("청구고객코드");
                p.staLabel03_00_00_01.set_cssclass("sta_WF_Label");
                p.staLabel03_00_00_01.move("10","98","100%","46",null,null);

                p.edt00_02_00_00.set_taborder("38");
                p.edt00_02_00_00.set_readonly("false");
                p.edt00_02_00_00.set_value("청구고객코드");
                p.edt00_02_00_00.set_displaynulltext("청구고객코드");
                p.edt00_02_00_00.move("20.00","288","100%","40",null,null);

                p.pan_04_00_00.set_taborder("39");
                p.pan_04_00_00.set_type("vertical");
                p.pan_04_00_00.set_flexgrow("1");
                p.pan_04_00_00.move("20.00","242","305","86",null,null);

                p.staLabel03_01_00_01.set_taborder("40");
                p.staLabel03_01_00_01.set_text("청구주소");
                p.staLabel03_01_00_01.set_cssclass("sta_WF_Label");
                p.staLabel03_01_00_01.move("970","270","100%","46",null,null);

                p.edt00_03_01_00_00.set_taborder("41");
                p.edt00_03_01_00_00.set_value("청구주소");
                p.edt00_03_01_00_00.set_displaynulltext("청구주소");
                p.edt00_03_01_00_00.move("970","315","100%","40",null,null);

                p.pan04_01_00.set_taborder("42");
                p.pan04_01_00.set_type("vertical");
                p.pan04_01_00.set_flexgrow("1");
                p.pan04_01_00.move("970.00","270","305","86",null,null);

                p.pan06.set_taborder("43");
                p.pan06.set_horizontalgap("20");
                p.pan06.set_flexcrossaxiswrapalign("start");
                p.pan06.set_flexwrap("wrap");
                p.pan06.set_fittocontents("height");
                p.pan06.set_verticalgap("0");
                p.pan06.set_spacing("0px 20px 10px 20px");
                p.pan06.set_cssclass("pal_WF_DtlBg");
                p.pan06.move("0","242","100.00%","96",null,null);

                p.staLabel03_00_00_01_00.set_taborder("44");
                p.staLabel03_00_00_01_00.set_text("신청자(수기입력)");
                p.staLabel03_00_00_01_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00_00_01_00.move("10","98","100%","46",null,null);

                p.edt00_02_00_00_00.set_taborder("45");
                p.edt00_02_00_00_00.set_readonly("false");
                p.edt00_02_00_00_00.set_value("신청자(수기입력)");
                p.edt00_02_00_00_00.set_displaynulltext("신청자(수기입력)");
                p.edt00_02_00_00_00.move("20.00","288","100%","40",null,null);

                p.pan_04_00_00_00.set_taborder("46");
                p.pan_04_00_00_00.set_type("vertical");
                p.pan_04_00_00_00.set_flexgrow("1");
                p.pan_04_00_00_00.move("20.00","242","305","86",null,null);

                p.staLabel03_01_00_01_00.set_taborder("47");
                p.staLabel03_01_00_01_00.set_text("계약번호(수기입력)");
                p.staLabel03_01_00_01_00.set_cssclass("sta_WF_Label");
                p.staLabel03_01_00_01_00.move("970","270","100%","46",null,null);

                p.edt00_03_01_00_00_00.set_taborder("48");
                p.edt00_03_01_00_00_00.set_value("계약번호(수기입력)");
                p.edt00_03_01_00_00_00.set_displaynulltext("계약번호(수기입력)");
                p.edt00_03_01_00_00_00.move("970","315","100%","40",null,null);

                p.pan04_01_00_00.set_taborder("49");
                p.pan04_01_00_00.set_type("vertical");
                p.pan04_01_00_00.set_flexgrow("1");
                p.pan04_01_00_00.move("970.00","270","305","86",null,null);

                p.pan07.set_taborder("50");
                p.pan07.set_horizontalgap("20");
                p.pan07.set_flexcrossaxiswrapalign("start");
                p.pan07.set_flexwrap("wrap");
                p.pan07.set_fittocontents("height");
                p.pan07.set_verticalgap("0");
                p.pan07.set_spacing("0px 20px 10px 20px");
                p.pan07.set_cssclass("pal_WF_DtlBg");
                p.pan07.move("0","242","100.00%","96",null,null);

                p.staLabel05_00_00.set_taborder("51");
                p.staLabel05_00_00.set_text("휴대폰 번호");
                p.staLabel05_00_00.set_cssclass("sta_WF_Label");
                p.staLabel05_00_00.move("10","98","100%","46",null,null);

                p.Edit01.set_taborder("52");
                p.Edit01.set_readonly("true");
                p.Edit01.move("70","819","100%","40",null,null);

                p.sta00_00.set_taborder("53");
                p.sta00_00.set_text("휴대폰번호는 우측상단 \"사용자 이름\" 클릭 후 해당 메뉴에서 등록 및 수정이 가능합니다.");
                p.sta00_00.set_cssclass("sta_WF_Des");
                p.sta00_00.set_fittocontents("height");
                p.sta00_00.set_flexgrow("1");
                p.sta00_00.move("20","20","100%","42",null,null);

                p.Panel00.set_taborder("54");
                p.Panel00.set_type("vertical");
                p.Panel00.set_verticalgap("4");
                p.Panel00.set_fittocontents("height");
                p.Panel00.move("61","817","100%","85",null,null);

                p.pan04_00.set_taborder("55");
                p.pan04_00.set_type("vertical");
                p.pan04_00.set_flexgrow("1");
                p.pan04_00.set_fittocontents("height");
                p.pan04_00.move("10.00","98","305","136",null,null);

                p.staLabel05_01_00.set_taborder("56");
                p.staLabel05_01_00.set_text("위치정보(수기입력)");
                p.staLabel05_01_00.set_cssclass("sta_WF_Label_E");
                p.staLabel05_01_00.move("10","98","100%","46",null,null);

                p.Edit01_00.set_taborder("57");
                p.Edit01_00.move("675","820","100%","40",null,null);

                p.sta00_00_00.set_taborder("58");
                p.sta00_00_00.set_text("예)건물명 / 층별 / 룸번호");
                p.sta00_00_00.set_cssclass("sta_WF_Des");
                p.sta00_00_00.set_fittocontents("height");
                p.sta00_00_00.set_flexgrow("1");
                p.sta00_00_00.move("675","850","100%","40",null,null);

                p.Panel00_01.set_taborder("59");
                p.Panel00_01.set_type("vertical");
                p.Panel00_01.set_verticalgap("4");
                p.Panel00_01.set_fittocontents("height");
                p.Panel00_01.move("675","820","100%","80",null,null);

                p.pan05_01.set_taborder("60");
                p.pan05_01.set_type("vertical");
                p.pan05_01.set_flexgrow("1");
                p.pan05_01.set_fittocontents("height");
                p.pan05_01.move("10.00","98","305","136",null,null);

                p.pan08.set_taborder("61");
                p.pan08.set_horizontalgap("20");
                p.pan08.set_flexcrossaxiswrapalign("start");
                p.pan08.set_flexwrap("wrap");
                p.pan08.set_verticalgap("0");
                p.pan08.set_spacing("0px 20px 10px 20px");
                p.pan08.set_fittocontents("height");
                p.pan08.set_cssclass("pal_WF_DtlBg");
                p.pan08.move("0","60","100.00%","146",null,null);
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
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("CST002S10.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
