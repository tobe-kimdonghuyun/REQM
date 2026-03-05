(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST006M01");
            this.set_titletext("신청자정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,900);
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


            obj = new Dataset("ds00", this);
            obj._setContents("<ColumnInfo><Column id=\"체크\" type=\"STRING\" size=\"256\"/><Column id=\"작업일\" type=\"STRING\" size=\"256\"/><Column id=\"작업시작시간\" type=\"STRING\" size=\"256\"/><Column id=\"작업종료시간\" type=\"STRING\" size=\"256\"/><Column id=\"개요\" type=\"STRING\" size=\"256\"/><Column id=\"작업내역\" type=\"STRING\" size=\"256\"/><Column id=\"작업자회사\" type=\"STRING\" size=\"256\"/><Column id=\"신청자\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"fullName\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"fullName\">Iaad010101 [PDF, 328KB]</Col><Col id=\"fileSz\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Panel("panForm","0","0","100.00%","3000",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem05\" componentid=\"panAplcntInfo00_00\"/><PanelItem id=\"PanelItem04\" componentid=\"divInfoGuide00\"/><PanelItem id=\"PanelItem01\" componentid=\"panAplcntInfo00\"/><PanelItem id=\"PanelItem06\" componentid=\"divTaskPrcsFlw\"/><PanelItem id=\"PanelItem02\" componentid=\"panTitle\"/><PanelItem id=\"PanelItem03\" componentid=\"div00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle","100","30","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("신청자정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","917","30","200","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","765","30","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_ACMinus");
            this.addChild(obj.name, obj);

            obj = new Panel("panTitle","1357","451","100.00%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("4");
            obj.set_fittocontents("none");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("div00","0","110","100.00%","2000",null,null,null,null,null,null,this);
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

            obj = new Panel("Panel00_00","10.00","98","300","86",null,null,null,null,null,null,this.div00.form);
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

            obj = new Panel("Panel01_00","10.00","98","300","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Radio00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan01","0","60","100.00%","97",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Radio("Radio00","127","203","280","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("14");
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
            obj.set_taborder("7");
            obj.set_text("신청자");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_02","20.00","288","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_readonly("false");
            obj.set_value("신청자 성명");
            obj.set_text("신청자 성명");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","20.00","242","300","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_02\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan02","0","242","100.00%","96",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("10");
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
            obj.set_taborder("11");
            obj.set_text("신청자 회사명");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_03_01","970","315","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("12");
            obj.set_readonly("true");
            obj.set_value("신청자 성명");
            obj.set_text("신청자 성명");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel02_01","970.00","270","300","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("13");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_03_01\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00","10","98","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("15");
            obj.set_text("등록자");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_02_00","20.00","288","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("16");
            obj.set_readonly("false");
            obj.set_value("등록자 성명");
            obj.set_displaynulltext("등록자 성명");
            obj.set_text("등록자 성명");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan_04_00","20.00","242","300","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("17");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_02_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00","970","270","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("18");
            obj.set_text("등록자 회사명");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_03_01_00","970","315","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("19");
            obj.set_displaynulltext("회사명");
            obj.set_value("회사명");
            obj.set_readonly("true");
            obj.set_text("회사명");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan04_01","970.00","270","300","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("20");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_03_01_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan03","0","242","100.00%","96",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("21");
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
            obj.set_taborder("22");
            obj.set_text("건물구분");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00","20.00","242","300","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("23");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"panComb\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("PanelBlank","970.00","270","300","1",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("24");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan04","0","242","100.00%","96",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("25");
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
            obj.set_taborder("28");
            obj.set_flexgrow("1");
            obj.set_text("제2여객터미널");
            obj.set_value("");
            obj.set_index("-1");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","50","491","150","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("27");
            obj.set_flexgrow("1");
            obj.set_text("제1터미널역");
            obj.set_value("");
            obj.set_index("-1");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("panComb","52","493","100%","50",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("26");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Combo00\"/><PanelItem id=\"PanelItem02\" componentid=\"Combo00_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("29");
            obj.set_text("계약명");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new Div("divEdtPop01","20.00","715","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("30");
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

            obj = new Panel("pan06_00","20.00","242","300","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("31");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"divEdtPop01\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00_00","970","270","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("32");
            obj.set_text("위치정보(룸번호)");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan05","0","242","100.00%","96",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("34");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan06_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan06_01\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_01","10","98","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("36");
            obj.set_text("청구고객코드");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_02_00_00","20.00","288","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("37");
            obj.set_readonly("false");
            obj.set_value("청구고객코드");
            obj.set_displaynulltext("청구고객코드");
            obj.set_text("청구고객코드");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan_04_00_00","20.00","242","300","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("38");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_02_00_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00_01","970","270","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("39");
            obj.set_text("청구주소");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_03_01_00_00","970","315","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("40");
            obj.set_value("청구주소");
            obj.set_displaynulltext("청구주소");
            obj.set_text("청구주소");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan04_01_00","970.00","270","300","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("41");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_03_01_00_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan06","0","242","100.00%","96",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("42");
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
            obj.set_taborder("43");
            obj.set_text("신청자(수기입력)");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_02_00_00_00","20.00","288","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("44");
            obj.set_readonly("false");
            obj.set_value("신청자(수기입력)");
            obj.set_displaynulltext("신청자(수기입력)");
            obj.set_text("신청자(수기입력)");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan_04_00_00_00","20.00","242","300","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("45");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_02_00_00_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00_01_00","970","270","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("46");
            obj.set_text("계약번호(수기입력)");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_03_01_00_00_00","970","315","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("47");
            obj.set_value("계약번호(수기입력)");
            obj.set_displaynulltext("계약번호(수기입력)");
            obj.set_text("계약번호(수기입력)");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan04_01_00_00","970.00","270","300","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("48");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_03_01_00_00_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan07","0","242","100.00%","96",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("49");
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
            obj.set_taborder("50");
            obj.set_text("휴대폰 번호");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit01","70","819","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("51");
            obj.set_readonly("true");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_00","20","20","100%","42",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("52");
            obj.set_text("휴대폰번호는 우측상단 \"사용자 이름\" 클릭 후 해당 메뉴에서 등록 및 수정이 가능합니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel00","61","817","100%","85",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("53");
            obj.set_type("vertical");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Edit01\"/><PanelItem id=\"PanelItem02\" componentid=\"sta00_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan04_00","10.00","98","300","136",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("54");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel05_01_00","10","98","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("55");
            obj.set_text("위치정보(수기입력)");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit01_00","675","820","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("56");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","675","850","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("57");
            obj.set_text("예)건물명 / 층별 / 룸번호");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","675","820","100%","80",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("58");
            obj.set_type("vertical");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Edit01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"sta00_00_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan05_01","10.00","98","300","136",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("59");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_01\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan08","0","60","100.00%","146",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("60");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_fittocontents("height");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan04_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan05_01\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan06_01","970.00","270","300","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("33");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","580","590","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("35");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staSubTitle00_00_00","0","20","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("작업방법 안내");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btnAplcntInfo00_00","59","6","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_ACMinus");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00","1176","20","103","50",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnAplcntInfo00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panAplcntInfo00_00","1440","173","100.00%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("9");
            obj.set_visible("true");
            obj.set_fittocontents("none");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("divInfoGuide00","1440","243","100.00%","277",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("서비스 흐름 및 작업방법 안내");
            obj.set_cssclass("div_WF_InfoGuide");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle00_00","0","20","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("서비스흐름 안내");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btnAplcntInfo00","44","6","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_ACMinus");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00","1191","20","88","50",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnAplcntInfo00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panAplcntInfo00","1460","260","100.00%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("14");
            obj.set_visible("true");
            obj.set_fittocontents("none");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("divTaskPrcsFlw","1460","330","100.00%","240",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("서비스 흐름 및 작업방법 안내");
            obj.set_cssclass("div_WF_InfoGuide");
            obj.set_fittocontents("height");
            obj.set_url("publishing::template/template18.xfdl");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00.form.divEdtPop01.form
            obj = new Layout("default","",0,0,this.div00.form.divEdtPop01.form,function(p){});
            this.div00.form.divEdtPop01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            obj.set_type("vertical");
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divInfoGuide00.form
            obj = new Layout("default","",0,0,this.divInfoGuide00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divInfoGuide00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divInfoGuide00.form
            obj = new Layout("mobile","",0,0,this.divInfoGuide00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divInfoGuide00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divTaskPrcsFlw.form
            obj = new Layout("default","",0,0,this.divTaskPrcsFlw.form,function(p){});
            this.divTaskPrcsFlw.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Phone_screen",1280,900,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","publishing::template/template18.xfdl");
        };
        
        // User Script
        this.registerScript("CST006S01.xfdl", function() {
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

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수
        	this.divForm.form.divSch.set_width("100%");
        	this.divForm.form.divSch.fittocontents = "height";
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


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.accordionmenu_onload,this);
            this.btnAplcntInfo00_00.addEventHandler("onclick",this.Button_onclick,this);
            this.btnAplcntInfo00_00.addEventHandler("ondblclick",this.Button_ondblclick,this);
            this.btnAplcntInfo00.addEventHandler("onclick",this.Button_onclick,this);
            this.btnAplcntInfo00.addEventHandler("ondblclick",this.Button_ondblclick,this);
        };
        this.loadIncludeScript("CST006S01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
