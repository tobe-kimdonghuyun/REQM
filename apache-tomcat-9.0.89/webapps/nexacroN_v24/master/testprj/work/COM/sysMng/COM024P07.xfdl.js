(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM024P07");
            this.set_titletext("계정 승인/반려");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,2200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGet", this);
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"pswd\" type=\"STRING\" size=\"256\"/><Column id=\"idAplySe\" type=\"STRING\" size=\"256\"/><Column id=\"idAplyType\" type=\"STRING\" size=\"256\"/><Column id=\"idAply\" type=\"STRING\" size=\"256\"/><Column id=\"userNm\" type=\"STRING\" size=\"256\"/><Column id=\"telno\" type=\"STRING\" size=\"256\"/><Column id=\"mblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"eml\" type=\"STRING\" size=\"256\"/><Column id=\"userBrdt\" type=\"STRING\" size=\"256\"/><Column id=\"coId\" type=\"STRING\" size=\"256\"/><Column id=\"coNm\" type=\"STRING\" size=\"256\"/><Column id=\"esntlAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"chcAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"emlRcptnYn\" type=\"STRING\" size=\"256\"/><Column id=\"smsRcptnPrgrsYn\" type=\"STRING\" size=\"256\"/><Column id=\"smsRcptnAcntYn\" type=\"STRING\" size=\"256\"/><Column id=\"smsRcptnNewYn\" type=\"STRING\" size=\"256\"/><Column id=\"rltnCoActlOgdpYn\" type=\"STRING\" size=\"256\"/><Column id=\"evdncDocNo\" type=\"STRING\" size=\"256\"/><Column id=\"prcrId\" type=\"STRING\" size=\"256\"/><Column id=\"prcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcsSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcsSttsNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcsDsctn\" type=\"STRING\" size=\"256\"/><Column id=\"coInfo\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"flwMdngEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"jobCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrEml\" type=\"STRING\" size=\"256\"/><Column id=\"prcrMblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"prcrEmlRcptnYn\" type=\"STRING\" size=\"256\"/><Column id=\"prcrSmsRcptnPrgrsYn\" type=\"STRING\" size=\"256\"/><Column id=\"prcrSmsRcptnAcntYn\" type=\"STRING\" size=\"256\"/><Column id=\"prcrSmsRcptnNewYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"fullName\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"fullName\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile3", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"fullName\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile4", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"fullName\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile5", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"fullName\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutsideMail", this);
            obj._setContents("<ColumnInfo><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"cc\" type=\"STRING\" size=\"256\"/><Column id=\"subject\" type=\"STRING\" size=\"256\"/><Column id=\"contentId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"from\">81014uuu</Col><Col id=\"to\">81014uuu</Col><Col id=\"cc\">test</Col><Col id=\"contentId\">test</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSms", this);
            obj._setContents("<ColumnInfo><Column id=\"send_num\" type=\"STRING\" size=\"256\"/><Column id=\"recipient_num\" type=\"STRING\" size=\"256\"/><Column id=\"contentId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"send_num\">81014uuu</Col><Col id=\"recipient_num\">81014uuu</Col><Col id=\"contentId\">TSP_18</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","20","0",null,null,"20","70",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Panel("sub_tit01","0","0","100%","70",null,null,null,null,"70",null,this.divForm.form);
            obj.set_taborder("");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div01","0","0","100.00%","97",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("pan01_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staIdAply\"/><PanelItem id=\"PanelItem01\" componentid=\"edtIdAply\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staIdAply","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("ID신청구분 / 유형");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtIdAply","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01_03","10.00","98","300","1",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("3");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_spacing("10px 0p;x 0px 0px");
            obj.set_flexcrossaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01","0","60","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("4");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan01_02\"/><PanelItem id=\"PanelItem03\" componentid=\"pan01_03\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01_02","10.00","98","300","1",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("sub_tit02","0","0","100%","70",null,null,null,null,"70",null,this.divForm.form);
            obj.set_taborder("");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div02","0","0","100.00%","593",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel01_03","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("7");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel01_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("0");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edt01_01","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan01_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt01_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan01_02","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staLabel01_02\"/><PanelItem id=\"PanelItem00\" componentid=\"mEdtMblTelno\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan01_03","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj.set_horizontalgap("10");
            obj.set_spacing("10px 0p;x 0px 0px");
            obj.set_flexcrossaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel01_03\"/><PanelItem id=\"PanelItem01\" componentid=\"mEdtTelno\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan01","0","60","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("5");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan01_02\"/><PanelItem id=\"PanelItem03\" componentid=\"pan01_03\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new MaskEdit("mEdtMblTelno","578","66","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("35");
            obj.set_readonly("true");
            obj.set_format("###-####-####");
            obj.set_value("01000000000");
            obj.set_type("string");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel01_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("6");
            obj.set_text("휴대전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel01_01_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("8");
            obj.set_text("아이디");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edt01_01_00","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan02_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("10");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt01_01_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("11");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edt01_02_00","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("12");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan02_02","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("13");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staLabel01_02_00\"/><PanelItem id=\"PanelItem00\" componentid=\"edt01_02_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel01_03_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("14");
            obj.set_text("이동지역 회사 실제 소속 여부");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan02_03","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("15");
            obj.set_type("vertical");
            obj.set_horizontalgap("10");
            obj.set_spacing("10px 0p;x 0px 0px");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexgrow("1");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel01_03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"rdo03\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan02","0","60","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("16");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan02_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan02_02\"/><PanelItem id=\"PanelItem03\" componentid=\"pan02_03\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel01_01_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("17");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edt01_01_01","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("18");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan03_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("19");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt01_01_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staCoInfo","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("20");
            obj.set_text("회사정보");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtCoInfo","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("21");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan03_02","10.00","98","620","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("22");
            obj.set_type("vertical");
            obj.set_flexgrow("2");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staCoInfo\"/><PanelItem id=\"PanelItem00\" componentid=\"edtCoInfo\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan03","0","60","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("23");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan03_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan03_02\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan04","0","60","100.00%","171",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("24");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"txa00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new TextArea("txa00","0","14","100%","150",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("25");
            obj.set_value("개인정보 수집 및 이용 관련 안내문\n(필수, 선택 모두)");
            obj.set_readonly("true");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel01_01_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("26");
            obj.set_text("개인정보(필수) 사용동의여부");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan05_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("27");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_01_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Radio00_00_00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan05","0","60","100.00%","131",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("28");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan05_01\"/><PanelItem id=\"PanelItem03\" componentid=\"pan05_02\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_01_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("29");
            obj.set_text("개인정보(선택) 사용동의여부");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Radio("Radio00_00_00","127","203","280","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("30");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_readonly("true");
            var divForm_form_Div02_form_Radio00_00_00_innerdataset = new nexacro.NormalDataset("divForm_form_Div02_form_Radio00_00_00_innerdataset", obj);
            divForm_form_Div02_form_Radio00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">동의함</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">동의하지 않음</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div02_form_Radio00_00_00_innerdataset);
            obj.set_text("계약선택");
            obj.set_value("0");
            obj.set_index("0");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("sta00_00","20","20","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("31");
            obj.set_text("(선택 동의 항목은 동의하지 않으셔도 회원 가입이 가능합니다.)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan05_02","10.00","98","300","120",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("32");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("5");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Radio00_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"sta00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Radio("Radio00_00_00_00","127","203","280","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("33");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_readonly("true");
            var divForm_form_Div02_form_Radio00_00_00_00_innerdataset = new nexacro.NormalDataset("divForm_form_Div02_form_Radio00_00_00_00_innerdataset", obj);
            divForm_form_Div02_form_Radio00_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">동의함</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">동의하지 않음</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div02_form_Radio00_00_00_00_innerdataset);
            obj.set_text("계약선택");
            obj.set_value("0");
            obj.set_index("0");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Radio("rdo03","127","203","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("34");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            obj.set_readonly("true");
            var divForm_form_Div02_form_rdo03_innerdataset = new nexacro.NormalDataset("divForm_form_Div02_form_rdo03_innerdataset", obj);
            divForm_form_Div02_form_rdo03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오 (하도업체, 컨소시엄 등)</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div02_form_rdo03_innerdataset);
            obj.set_text("예");
            obj.set_value("Y");
            obj.set_index("0");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new MaskEdit("mEdtTelno","578","66","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("36");
            obj.set_readonly("true");
            obj.set_format("###-####-####");
            obj.set_value("01000000000");
            obj.set_type("string");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_00","30","50","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinBscInfo","1390.00","18","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_visible("true");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_00","710.00","50","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 20px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnMinBscInfo\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00","30","50","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("");
            obj.set_text("신청정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinAplyInfo","1390.00","18","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_visible("true");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02","710.00","50","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 20px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnMinAplyInfo\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_01","30","50","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("10");
            obj.set_text("증빙자료");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinAtfl","1390.00","18","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_visible("true");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_01","710.00","50","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("12");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 20px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnMinAtfl\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit03","0","0","100%","70",null,null,null,null,"70",null,this.divForm.form);
            obj.set_taborder("13");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_01\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div03","0","0","100.00%","941",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("14");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel00_02","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("0");
            obj.set_text("사업자등록증");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btn_file_1","124","58","116","34",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("1");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panBtnFile","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("2");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panTitle","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("3");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static00","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("4");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static01","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("5");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static02","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("6");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panFileNum","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("7");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btn_del_file_1","512","135","125","34",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("8");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panBtnDel","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("9");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_del_file_1\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Grid("Grid01","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("11");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/></Band></Format></Formats>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panFile","0","42","100.00%","195",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("12");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid01\"/><PanelItem id=\"PanelItem03\" componentid=\"sta00_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("sta00_00","20","20","100.00%","30",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("13");
            obj.set_text("사업자등록증의 <b v=\'true\'>사업자등록번호</b>와 입주자증명서류(임대계약서, 낙찰증명서 등)에 있는 <b v=\'true\'>사업자등록번호가 동일</b>해야 합니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_usedecorate("true");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("14");
            obj.set_text("재직증명서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btn_file_1_00","124","58","116","34",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("15");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("16");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panTitle00","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("17");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static00_00","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("18");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static01_00","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("19");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_00","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("20");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panFileNum00","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("21");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btn_del_file_1_00","512","135","125","34",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("22");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panBtnDel00","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("23");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_del_file_1_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("24");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Grid("Grid02","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("25");
            obj.set_binddataset("dsFile2");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/></Band></Format></Formats>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panFile00","0","42","100.00%","195",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("26");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid02\"/><PanelItem id=\"PanelItem05\" componentid=\"sta00_00_01_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_01","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("27");
            obj.set_text("공항입주관련 계약증빙서류");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            obj.set_wordWrap("char");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btn_file_1_01","124","58","116","34",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("28");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panBtnFile01","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("29");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1_01\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panTitle01","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("30");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_01\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile01\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static00_01","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("31");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static01_01","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("32");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_01","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("33");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panFileNum01","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("34");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02_01\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btn_del_file_1_01","512","135","125","34",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("35");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panBtnDel01","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("36");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_del_file_1_01\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("37");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum01\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel01\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Grid("Grid03","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("38");
            obj.set_binddataset("dsFile3");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/></Band></Format></Formats>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("sta00_00_01","20","20","100.00%","30",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("39");
            obj.set_text("임대계약서, 낙찰증명서 등 (<b v=\'true\'>인천국제공항공사와 계약된 서류</b>만 가능)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_usedecorate("true");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panFile01","0","42","100.00%","195",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("40");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid03\"/><PanelItem id=\"PanelItem03\" componentid=\"sta00_00_01\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_02","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("41");
            obj.set_text("이동지역관련 양사계약증빙");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            obj.set_wordWrap("char");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btn_file_1_02","124","58","116","34",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("42");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panBtnFile02","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("43");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1_02\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panTitle02","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("44");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_02\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile02\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static00_02","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("45");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static01_02","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("46");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_02","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("47");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panFileNum02","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("48");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02_02\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btn_del_file_1_02","512","135","125","34",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("49");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panBtnDel02","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("50");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_del_file_1_02\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_02","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("51");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum02\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel02\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Grid("Grid04","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("52");
            obj.set_binddataset("dsFile4");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/></Band></Format></Formats>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("sta00_00_02","20","20","100.00%","30",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("53");
            obj.set_text("<b v=\'true\'>이동지역 회사 및 실제 소속 회사</b>간 계약관련 증빙 서류");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_usedecorate("true");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panFile02","0","42","100.00%","195",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("54");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid04\"/><PanelItem id=\"PanelItem03\" componentid=\"sta00_00_02\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_03","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("55");
            obj.set_text("구내영업승인");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btn_file_1_03","124","58","116","34",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("56");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panBtnFile03","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("57");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1_03\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panTitle03","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("58");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_03\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile03\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static00_03","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("59");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static01_03","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("60");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_03","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("61");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panFileNum03","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("62");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_03\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_03\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02_03\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btn_del_file_1_03","512","135","125","34",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("63");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panBtnDel03","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("64");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_del_file_1_03\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_03","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("65");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum03\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel03\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Grid("Grid05","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("66");
            obj.set_binddataset("dsFile5");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/></Band></Format></Formats>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panFile03","0","42","100.00%","161",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("67");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle03\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_03\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid05\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_00","20","20","100.00%","30",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("68");
            obj.set_text("<fc v=\'red\'>재직증명서 내 주민등록번호, 생년월일, 자택주소 삭제(마스킹) 되었는지 확인 필요, 삭제(마스킹)하지 않고 가입신청 시 불승인</fc>");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_usedecorate("true");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staSubTitle04","30","50","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("15");
            obj.set_text("처리내역");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinPrcsDsctn","1390.00","18","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_visible("true");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel04_01","710.00","50","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("17");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 20px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnMinPrcsDsctn\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit04","0","0","100%","70",null,null,null,null,"70",null,this.divForm.form);
            obj.set_taborder("18");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle04\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel04_01\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div04","0","0","100%","304",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("19");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("pan01_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("0");
            obj.set_text("처리상태");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edt00_00","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("pan01","0","60","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("3");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan01_02\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("pan01_02","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("5");
            obj.set_text("처리자");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("7");
            obj.set_text("처리내역");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("pan01_01_00","10.00","98","300","196",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_01\"/><PanelItem id=\"PanelItem03\" componentid=\"txaPrcsDsctn\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("pan01_00","0","60","100.00%","207",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("9");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan01_01_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new TextArea("txaPrcsDsctn","0","14","100%","150",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("10");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Div("divPopBtn","20",null,null,"60","20","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            this.addChild(obj.name, obj);

            obj = new Button("btnHold","200.00","365","120","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("2");
            obj.set_text("서류보완");
            obj.set_cssclass("btn_WF_No");
            this.divPopBtn.addChild(obj.name, obj);

            obj = new Button("btnNo","200.00","365","120","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("1");
            obj.set_text("불승인");
            obj.set_cssclass("btn_WF_No");
            this.divPopBtn.addChild(obj.name, obj);

            obj = new Button("btnYes","457.00","30","100","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("0");
            obj.set_text("승인");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_fittocontents("width");
            this.divPopBtn.addChild(obj.name, obj);

            obj = new Div("divGuide00","1600.00","145","450","385",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
            obj.set_visible("false");
            obj.set_cssclass("div_GD_Tip");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","20.00","205","34","34",null,null,null,null,null,null,this.divGuide00.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.divGuide00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","64.00","205","34","34",null,null,null,null,null,null,this.divGuide00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divGuide00.addChild(obj.name, obj);

            obj = new Static("sta00_00","20.00","255","375","50",null,null,null,null,null,null,this.divGuide00.form);
            obj.set_taborder("2");
            obj.set_text("접혀있을때 class : btn_WF_ACPlus 로 접음");
            this.divGuide00.addChild(obj.name, obj);

            obj = new RaonkUpload("RaonkUpload","-826.00","6","49.46%","200",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_DevelopLangage("JAVA");
            obj.set_ExtensionAllowOrLimit("1");
            obj.set_HandlerUrl("/common/uploadDownload.do");
            obj.set_RunTimes("html5");
            obj.set_ButtonBarView("0");
            obj.set_visible("false");
            obj.set_AllowDuplicationFile("1");
            obj.set_text("");
            obj.set_DisableDeleteConfirm("1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form.Div01.form
            obj = new Layout("default","",0,0,this.divForm.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.pan01_01.set_taborder("2");
                p.pan01_01.set_type("vertical");
                p.pan01_01.set_flexgrow("1");
                p.pan01_01.set_minwidth("");
                p.pan01_01.move("10.00","98","300","86",null,null);

                p.staIdAply.set_taborder("0");
                p.staIdAply.set_text("ID신청구분 / 유형");
                p.staIdAply.set_cssclass("sta_WF_Label");
                p.staIdAply.move("10","98","100%","46",null,null);

                p.edtIdAply.set_taborder("1");
                p.edtIdAply.set_readonly("true");
                p.edtIdAply.move("10.00","158","100%","40",null,null);

                p.pan01_03.set_taborder("3");
                p.pan01_03.set_type("horizontal");
                p.pan01_03.set_horizontalgap("10");
                p.pan01_03.set_spacing("10px 0p;x 0px 0px");
                p.pan01_03.set_flexcrossaxisalign("end");
                p.pan01_03.set_flexgrow("1");
                p.pan01_03.set_minwidth("");
                p.pan01_03.move("10.00","98","300","1",null,null);

                p.pan01.set_taborder("4");
                p.pan01.set_horizontalgap("20");
                p.pan01.set_flexcrossaxiswrapalign("start");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_fittocontents("height");
                p.pan01.set_verticalgap("0");
                p.pan01.set_spacing("0px 20px 10px 20px");
                p.pan01.set_cssclass("pal_WF_DtlBg");
                p.pan01.move("0","60","100.00%","97",null,null);

                p.pan01_02.set_taborder("5");
                p.pan01_02.set_type("vertical");
                p.pan01_02.set_flexgrow("1");
                p.pan01_02.move("10.00","98","300","1",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div01.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.pan01_03.set_flexcrossaxisalign("center");
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div02.form
            obj = new Layout("default","",0,0,this.divForm.form.Div02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel01_03.set_taborder("7");
                p.staLabel01_03.set_text("전화번호");
                p.staLabel01_03.set_cssclass("sta_WF_Label");
                p.staLabel01_03.move("10","98","100%","46",null,null);

                p.staLabel01_01.set_taborder("0");
                p.staLabel01_01.set_text("성명");
                p.staLabel01_01.set_cssclass("sta_WF_Label");
                p.staLabel01_01.move("10","98","100%","46",null,null);

                p.edt01_01.set_taborder("1");
                p.edt01_01.set_readonly("true");
                p.edt01_01.move("10.00","158","100%","40",null,null);

                p.pan01_01.set_taborder("2");
                p.pan01_01.set_type("vertical");
                p.pan01_01.set_flexgrow("1");
                p.pan01_01.set_minwidth("");
                p.pan01_01.move("10.00","98","300","86",null,null);

                p.pan01_02.set_taborder("3");
                p.pan01_02.set_type("vertical");
                p.pan01_02.set_flexgrow("1");
                p.pan01_02.move("10.00","98","300","86",null,null);

                p.pan01_03.set_taborder("4");
                p.pan01_03.set_type("vertical");
                p.pan01_03.set_horizontalgap("10");
                p.pan01_03.set_spacing("10px 0p;x 0px 0px");
                p.pan01_03.set_flexcrossaxisalign("end");
                p.pan01_03.set_flexgrow("1");
                p.pan01_03.set_minwidth("");
                p.pan01_03.move("10.00","98","300","86",null,null);

                p.pan01.set_taborder("5");
                p.pan01.set_horizontalgap("20");
                p.pan01.set_flexcrossaxiswrapalign("start");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_fittocontents("height");
                p.pan01.set_verticalgap("0");
                p.pan01.set_spacing("0px 20px 10px 20px");
                p.pan01.set_cssclass("pal_WF_DtlBg");
                p.pan01.move("0","60","100.00%","97",null,null);

                p.mEdtMblTelno.set_taborder("35");
                p.mEdtMblTelno.set_readonly("true");
                p.mEdtMblTelno.set_format("###-####-####");
                p.mEdtMblTelno.set_value("01000000000");
                p.mEdtMblTelno.set_type("string");
                p.mEdtMblTelno.move("578","66","100%","40",null,null);

                p.staLabel01_02.set_taborder("6");
                p.staLabel01_02.set_text("휴대전화번호");
                p.staLabel01_02.set_cssclass("sta_WF_Label");
                p.staLabel01_02.move("10","98","100%","46",null,null);

                p.staLabel01_01_00.set_taborder("8");
                p.staLabel01_01_00.set_text("아이디");
                p.staLabel01_01_00.set_cssclass("sta_WF_Label");
                p.staLabel01_01_00.move("10","98","100%","46",null,null);

                p.edt01_01_00.set_taborder("9");
                p.edt01_01_00.set_readonly("true");
                p.edt01_01_00.move("10.00","158","100%","40",null,null);

                p.pan02_01.set_taborder("10");
                p.pan02_01.set_type("vertical");
                p.pan02_01.set_flexgrow("1");
                p.pan02_01.set_minwidth("");
                p.pan02_01.move("10.00","98","300","86",null,null);

                p.staLabel01_02_00.set_taborder("11");
                p.staLabel01_02_00.set_text("이메일");
                p.staLabel01_02_00.set_cssclass("sta_WF_Label");
                p.staLabel01_02_00.move("10","98","100%","46",null,null);

                p.edt01_02_00.set_taborder("12");
                p.edt01_02_00.set_readonly("true");
                p.edt01_02_00.move("10.00","158","100%","40",null,null);

                p.pan02_02.set_taborder("13");
                p.pan02_02.set_type("vertical");
                p.pan02_02.set_flexgrow("1");
                p.pan02_02.move("10.00","98","300","86",null,null);

                p.staLabel01_03_00.set_taborder("14");
                p.staLabel01_03_00.set_text("이동지역 회사 실제 소속 여부");
                p.staLabel01_03_00.set_cssclass("sta_WF_Label");
                p.staLabel01_03_00.move("10","98","100%","46",null,null);

                p.pan02_03.set_taborder("15");
                p.pan02_03.set_type("vertical");
                p.pan02_03.set_horizontalgap("10");
                p.pan02_03.set_spacing("10px 0p;x 0px 0px");
                p.pan02_03.set_flexcrossaxisalign("start");
                p.pan02_03.set_flexgrow("1");
                p.pan02_03.set_visible("false");
                p.pan02_03.set_minwidth("");
                p.pan02_03.move("10.00","98","300","86",null,null);

                p.pan02.set_taborder("16");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.move("0","60","100.00%","97",null,null);

                p.staLabel01_01_01.set_taborder("17");
                p.staLabel01_01_01.set_text("회사명");
                p.staLabel01_01_01.set_cssclass("sta_WF_Label");
                p.staLabel01_01_01.move("10","98","100%","46",null,null);

                p.edt01_01_01.set_taborder("18");
                p.edt01_01_01.set_readonly("true");
                p.edt01_01_01.move("10.00","158","100%","40",null,null);

                p.pan03_01.set_taborder("19");
                p.pan03_01.set_type("vertical");
                p.pan03_01.set_flexgrow("1");
                p.pan03_01.set_minwidth("");
                p.pan03_01.move("10.00","98","300","86",null,null);

                p.staCoInfo.set_taborder("20");
                p.staCoInfo.set_text("회사정보");
                p.staCoInfo.set_cssclass("sta_WF_Label");
                p.staCoInfo.move("10","98","100%","46",null,null);

                p.edtCoInfo.set_taborder("21");
                p.edtCoInfo.set_readonly("true");
                p.edtCoInfo.move("10.00","158","100%","40",null,null);

                p.pan03_02.set_taborder("22");
                p.pan03_02.set_type("vertical");
                p.pan03_02.set_flexgrow("2");
                p.pan03_02.move("10.00","98","620","86",null,null);

                p.pan03.set_taborder("23");
                p.pan03.set_horizontalgap("20");
                p.pan03.set_flexcrossaxiswrapalign("start");
                p.pan03.set_flexwrap("wrap");
                p.pan03.set_fittocontents("height");
                p.pan03.set_verticalgap("0");
                p.pan03.set_spacing("0px 20px 10px 20px");
                p.pan03.set_cssclass("pal_WF_DtlBg");
                p.pan03.move("0","60","100.00%","97",null,null);

                p.pan04.set_taborder("24");
                p.pan04.set_horizontalgap("20");
                p.pan04.set_flexcrossaxiswrapalign("start");
                p.pan04.set_flexwrap("wrap");
                p.pan04.set_fittocontents("height");
                p.pan04.set_verticalgap("0");
                p.pan04.set_spacing("10px 20px 10px 20px");
                p.pan04.set_cssclass("pal_WF_DtlBg");
                p.pan04.move("0","60","100.00%","171",null,null);

                p.txa00.set_taborder("25");
                p.txa00.set_value("개인정보 수집 및 이용 관련 안내문\n(필수, 선택 모두)");
                p.txa00.set_readonly("true");
                p.txa00.move("0","14","100%","150",null,null);

                p.staLabel01_01_00_00.set_taborder("26");
                p.staLabel01_01_00_00.set_text("개인정보(필수) 사용동의여부");
                p.staLabel01_01_00_00.set_cssclass("sta_WF_Label");
                p.staLabel01_01_00_00.move("10","98","100%","46",null,null);

                p.pan05_01.set_taborder("27");
                p.pan05_01.set_type("vertical");
                p.pan05_01.set_flexgrow("1");
                p.pan05_01.set_fittocontents("height");
                p.pan05_01.set_minwidth("");
                p.pan05_01.move("10.00","98","300","86",null,null);

                p.pan05.set_taborder("28");
                p.pan05.set_horizontalgap("20");
                p.pan05.set_flexcrossaxiswrapalign("start");
                p.pan05.set_flexwrap("wrap");
                p.pan05.set_fittocontents("height");
                p.pan05.set_verticalgap("0");
                p.pan05.set_spacing("0px 20px 10px 20px");
                p.pan05.set_cssclass("pal_WF_DtlBg");
                p.pan05.move("0","60","100.00%","131",null,null);

                p.staLabel01_00_01_00_00.set_taborder("29");
                p.staLabel01_00_01_00_00.set_text("개인정보(선택) 사용동의여부");
                p.staLabel01_00_01_00_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00_01_00_00.move("10","98","100%","46",null,null);

                p.Radio00_00_00.set_taborder("30");
                p.Radio00_00_00.set_fittocontents("width");
                p.Radio00_00_00.set_innerdataset(divForm_form_Div02_form_Radio00_00_00_innerdataset);
                p.Radio00_00_00.set_codecolumn("codecolumn");
                p.Radio00_00_00.set_datacolumn("datacolumn");
                p.Radio00_00_00.set_direction("vertical");
                p.Radio00_00_00.set_readonly("true");
                p.Radio00_00_00.set_value("0");
                p.Radio00_00_00.set_index("0");
                p.Radio00_00_00.move("127","203","280","40",null,null);

                p.sta00_00.set_taborder("31");
                p.sta00_00.set_text("(선택 동의 항목은 동의하지 않으셔도 회원 가입이 가능합니다.)");
                p.sta00_00.set_cssclass("sta_WF_Des");
                p.sta00_00.set_fittocontents("height");
                p.sta00_00.move("20","20","100%","40",null,null);

                p.pan05_02.set_taborder("32");
                p.pan05_02.set_type("vertical");
                p.pan05_02.set_flexgrow("1");
                p.pan05_02.set_verticalgap("5");
                p.pan05_02.set_fittocontents("height");
                p.pan05_02.move("10.00","98","300","120",null,null);

                p.Radio00_00_00_00.set_taborder("33");
                p.Radio00_00_00_00.set_fittocontents("width");
                p.Radio00_00_00_00.set_innerdataset(divForm_form_Div02_form_Radio00_00_00_00_innerdataset);
                p.Radio00_00_00_00.set_codecolumn("codecolumn");
                p.Radio00_00_00_00.set_datacolumn("datacolumn");
                p.Radio00_00_00_00.set_direction("vertical");
                p.Radio00_00_00_00.set_readonly("true");
                p.Radio00_00_00_00.set_value("0");
                p.Radio00_00_00_00.set_index("0");
                p.Radio00_00_00_00.move("127","203","280","40",null,null);

                p.rdo03.set_taborder("34");
                p.rdo03.set_fittocontents("width");
                p.rdo03.set_innerdataset(divForm_form_Div02_form_rdo03_innerdataset);
                p.rdo03.set_codecolumn("codecolumn");
                p.rdo03.set_datacolumn("datacolumn");
                p.rdo03.set_columncount("2");
                p.rdo03.set_readonly("true");
                p.rdo03.set_value("Y");
                p.rdo03.set_index("0");
                p.rdo03.move("127","203","100%","40",null,null);

                p.mEdtTelno.set_taborder("36");
                p.mEdtTelno.set_readonly("true");
                p.mEdtTelno.set_format("###-####-####");
                p.mEdtTelno.set_value("01000000000");
                p.mEdtTelno.set_type("string");
                p.mEdtTelno.move("578","66","100%","40",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div02.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div02.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div02.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div03.form
            obj = new Layout("default","",0,0,this.divForm.form.Div03.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel00_02.set_taborder("0");
                p.staLabel00_02.set_text("사업자등록증");
                p.staLabel00_02.set_cssclass("sta_WF_Label");
                p.staLabel00_02.set_fittocontents("width");
                p.staLabel00_02.move("0","44","305","46",null,null);

                p.btn_file_1.set_taborder("1");
                p.btn_file_1.set_text("파일선택");
                p.btn_file_1.set_cssclass("btn_WF_FileUp");
                p.btn_file_1.set_fittocontents("width");
                p.btn_file_1.set_visible("false");
                p.btn_file_1.move("124","58","116","34",null,null);

                p.panBtnFile.set_taborder("2");
                p.panBtnFile.set_flexgrow("1");
                p.panBtnFile.set_flexmainaxisalign("end");
                p.panBtnFile.set_horizontalgap("10");
                p.panBtnFile.move("433","58","305","46",null,null);

                p.panTitle.set_taborder("3");
                p.panTitle.set_cssclass("pan_WF_FileTitle");
                p.panTitle.set_flexwrap("wrap");
                p.panTitle.set_fittocontents("height");
                p.panTitle.move("0","124","100%","46",null,null);

                p.Static00.set_taborder("4");
                p.Static00.set_text("파일수 : ");
                p.Static00.set_fittocontents("width");
                p.Static00.move("88","123","48","46",null,null);

                p.Static01.set_taborder("5");
                p.Static01.set_text("0");
                p.Static01.set_fittocontents("width");
                p.Static01.move("165","143","9","46",null,null);

                p.Static02.set_taborder("6");
                p.Static02.set_text("개");
                p.Static02.set_fittocontents("width");
                p.Static02.move("293","131","13","46",null,null);

                p.panFileNum.set_taborder("7");
                p.panFileNum.set_flexgrow("1");
                p.panFileNum.set_horizontalgap("4");
                p.panFileNum.move("20","190","305","46",null,null);

                p.btn_del_file_1.set_taborder("8");
                p.btn_del_file_1.set_text("전체파일삭제");
                p.btn_del_file_1.set_cssclass("btn_WF_FileDel");
                p.btn_del_file_1.set_fittocontents("width");
                p.btn_del_file_1.set_visible("false");
                p.btn_del_file_1.move("512","135","125","34",null,null);

                p.panBtnDel.set_taborder("9");
                p.panBtnDel.set_flexcrossaxisalign("center");
                p.panBtnDel.set_flexmainaxisalign("end");
                p.panBtnDel.set_flexgrow("1");
                p.panBtnDel.move("517","141","305","46",null,null);

                p.Panel00.set_taborder("10");
                p.Panel00.move("20","51","100%","46",null,null);

                p.Grid01.set_taborder("11");
                p.Grid01.set_binddataset("dsFile1");
                p.Grid01.set_autofittype("col");
                p.Grid01.set_cssclass("grd_WF_FileAdd");
                p.Grid01.move("20.00","114","100%","40",null,null);

                p.panFile.set_taborder("12");
                p.panFile.set_fittocontents("height");
                p.panFile.set_spacing("10px 20px 10px 20px");
                p.panFile.set_flexwrap("wrap");
                p.panFile.set_cssclass("pal_WF_DtlBg");
                p.panFile.set_verticalgap("4");
                p.panFile.move("0","42","100.00%","195",null,null);

                p.sta00_00.set_taborder("13");
                p.sta00_00.set_text("사업자등록증의 <b v=\'true\'>사업자등록번호</b>와 입주자증명서류(임대계약서, 낙찰증명서 등)에 있는 <b v=\'true\'>사업자등록번호가 동일</b>해야 합니다.");
                p.sta00_00.set_cssclass("sta_WF_Des");
                p.sta00_00.set_fittocontents("height");
                p.sta00_00.set_usedecorate("true");
                p.sta00_00.move("20","20","100.00%","30",null,null);

                p.staLabel00_02_00.set_taborder("14");
                p.staLabel00_02_00.set_text("재직증명서");
                p.staLabel00_02_00.set_cssclass("sta_WF_Label");
                p.staLabel00_02_00.set_fittocontents("width");
                p.staLabel00_02_00.move("0","44","305","46",null,null);

                p.btn_file_1_00.set_taborder("15");
                p.btn_file_1_00.set_text("파일선택");
                p.btn_file_1_00.set_cssclass("btn_WF_FileUp");
                p.btn_file_1_00.set_fittocontents("width");
                p.btn_file_1_00.set_visible("false");
                p.btn_file_1_00.move("124","58","116","34",null,null);

                p.panBtnFile00.set_taborder("16");
                p.panBtnFile00.set_flexgrow("1");
                p.panBtnFile00.set_flexmainaxisalign("end");
                p.panBtnFile00.set_horizontalgap("10");
                p.panBtnFile00.move("433","58","305","46",null,null);

                p.panTitle00.set_taborder("17");
                p.panTitle00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00.set_flexwrap("wrap");
                p.panTitle00.set_fittocontents("height");
                p.panTitle00.move("0","124","100%","46",null,null);

                p.Static00_00.set_taborder("18");
                p.Static00_00.set_text("파일수 : ");
                p.Static00_00.set_fittocontents("width");
                p.Static00_00.move("88","123","48","46",null,null);

                p.Static01_00.set_taborder("19");
                p.Static01_00.set_text("0");
                p.Static01_00.set_fittocontents("width");
                p.Static01_00.move("165","143","9","46",null,null);

                p.Static02_00.set_taborder("20");
                p.Static02_00.set_text("개");
                p.Static02_00.set_fittocontents("width");
                p.Static02_00.move("293","131","13","46",null,null);

                p.panFileNum00.set_taborder("21");
                p.panFileNum00.set_flexgrow("1");
                p.panFileNum00.set_horizontalgap("4");
                p.panFileNum00.move("20","190","305","46",null,null);

                p.btn_del_file_1_00.set_taborder("22");
                p.btn_del_file_1_00.set_text("전체파일삭제");
                p.btn_del_file_1_00.set_cssclass("btn_WF_FileDel");
                p.btn_del_file_1_00.set_fittocontents("width");
                p.btn_del_file_1_00.set_visible("false");
                p.btn_del_file_1_00.move("512","135","125","34",null,null);

                p.panBtnDel00.set_taborder("23");
                p.panBtnDel00.set_flexcrossaxisalign("center");
                p.panBtnDel00.set_flexmainaxisalign("end");
                p.panBtnDel00.set_flexgrow("1");
                p.panBtnDel00.move("517","141","305","46",null,null);

                p.Panel00_00.set_taborder("24");
                p.Panel00_00.move("20","51","100%","46",null,null);

                p.Grid02.set_taborder("25");
                p.Grid02.set_binddataset("dsFile2");
                p.Grid02.set_autofittype("col");
                p.Grid02.set_cssclass("grd_WF_FileAdd");
                p.Grid02.move("20.00","114","100%","40",null,null);

                p.panFile00.set_taborder("26");
                p.panFile00.set_fittocontents("height");
                p.panFile00.set_spacing("10px 20px 10px 20px");
                p.panFile00.set_flexwrap("wrap");
                p.panFile00.set_cssclass("pal_WF_DtlBg");
                p.panFile00.set_verticalgap("4");
                p.panFile00.move("0","42","100.00%","195",null,null);

                p.staLabel00_02_01.set_taborder("27");
                p.staLabel00_02_01.set_text("공항입주관련 계약증빙서류");
                p.staLabel00_02_01.set_cssclass("sta_WF_Label");
                p.staLabel00_02_01.set_fittocontents("width");
                p.staLabel00_02_01.set_wordWrap("char");
                p.staLabel00_02_01.move("0","44","305","46",null,null);

                p.btn_file_1_01.set_taborder("28");
                p.btn_file_1_01.set_text("파일선택");
                p.btn_file_1_01.set_cssclass("btn_WF_FileUp");
                p.btn_file_1_01.set_fittocontents("width");
                p.btn_file_1_01.set_visible("false");
                p.btn_file_1_01.move("124","58","116","34",null,null);

                p.panBtnFile01.set_taborder("29");
                p.panBtnFile01.set_flexgrow("1");
                p.panBtnFile01.set_flexmainaxisalign("end");
                p.panBtnFile01.set_horizontalgap("10");
                p.panBtnFile01.move("433","58","305","46",null,null);

                p.panTitle01.set_taborder("30");
                p.panTitle01.set_cssclass("pan_WF_FileTitle");
                p.panTitle01.set_flexwrap("wrap");
                p.panTitle01.set_fittocontents("height");
                p.panTitle01.move("0","124","100%","46",null,null);

                p.Static00_01.set_taborder("31");
                p.Static00_01.set_text("파일수 : ");
                p.Static00_01.set_fittocontents("width");
                p.Static00_01.move("88","123","48","46",null,null);

                p.Static01_01.set_taborder("32");
                p.Static01_01.set_text("0");
                p.Static01_01.set_fittocontents("width");
                p.Static01_01.move("165","143","9","46",null,null);

                p.Static02_01.set_taborder("33");
                p.Static02_01.set_text("개");
                p.Static02_01.set_fittocontents("width");
                p.Static02_01.move("293","131","13","46",null,null);

                p.panFileNum01.set_taborder("34");
                p.panFileNum01.set_flexgrow("1");
                p.panFileNum01.set_horizontalgap("4");
                p.panFileNum01.move("20","190","305","46",null,null);

                p.btn_del_file_1_01.set_taborder("35");
                p.btn_del_file_1_01.set_text("전체파일삭제");
                p.btn_del_file_1_01.set_cssclass("btn_WF_FileDel");
                p.btn_del_file_1_01.set_fittocontents("width");
                p.btn_del_file_1_01.set_visible("false");
                p.btn_del_file_1_01.move("512","135","125","34",null,null);

                p.panBtnDel01.set_taborder("36");
                p.panBtnDel01.set_flexcrossaxisalign("center");
                p.panBtnDel01.set_flexmainaxisalign("end");
                p.panBtnDel01.set_flexgrow("1");
                p.panBtnDel01.move("517","141","305","46",null,null);

                p.Panel00_01.set_taborder("37");
                p.Panel00_01.move("20","51","100%","46",null,null);

                p.Grid03.set_taborder("38");
                p.Grid03.set_binddataset("dsFile3");
                p.Grid03.set_autofittype("col");
                p.Grid03.set_cssclass("grd_WF_FileAdd");
                p.Grid03.move("20.00","114","100%","40",null,null);

                p.sta00_00_01.set_taborder("39");
                p.sta00_00_01.set_text("임대계약서, 낙찰증명서 등 (<b v=\'true\'>인천국제공항공사와 계약된 서류</b>만 가능)");
                p.sta00_00_01.set_cssclass("sta_WF_Des");
                p.sta00_00_01.set_fittocontents("height");
                p.sta00_00_01.set_usedecorate("true");
                p.sta00_00_01.move("20","20","100.00%","30",null,null);

                p.panFile01.set_taborder("40");
                p.panFile01.set_fittocontents("height");
                p.panFile01.set_spacing("10px 20px 10px 20px");
                p.panFile01.set_flexwrap("wrap");
                p.panFile01.set_cssclass("pal_WF_DtlBg");
                p.panFile01.set_verticalgap("4");
                p.panFile01.move("0","42","100.00%","195",null,null);

                p.staLabel00_02_02.set_taborder("41");
                p.staLabel00_02_02.set_text("이동지역관련 양사계약증빙");
                p.staLabel00_02_02.set_cssclass("sta_WF_Label");
                p.staLabel00_02_02.set_fittocontents("width");
                p.staLabel00_02_02.set_wordWrap("char");
                p.staLabel00_02_02.move("0","44","305","46",null,null);

                p.btn_file_1_02.set_taborder("42");
                p.btn_file_1_02.set_text("파일선택");
                p.btn_file_1_02.set_cssclass("btn_WF_FileUp");
                p.btn_file_1_02.set_fittocontents("width");
                p.btn_file_1_02.set_visible("false");
                p.btn_file_1_02.move("124","58","116","34",null,null);

                p.panBtnFile02.set_taborder("43");
                p.panBtnFile02.set_flexgrow("1");
                p.panBtnFile02.set_flexmainaxisalign("end");
                p.panBtnFile02.set_horizontalgap("10");
                p.panBtnFile02.move("433","58","305","46",null,null);

                p.panTitle02.set_taborder("44");
                p.panTitle02.set_cssclass("pan_WF_FileTitle");
                p.panTitle02.set_flexwrap("wrap");
                p.panTitle02.set_fittocontents("height");
                p.panTitle02.move("0","124","100%","46",null,null);

                p.Static00_02.set_taborder("45");
                p.Static00_02.set_text("파일수 : ");
                p.Static00_02.set_fittocontents("width");
                p.Static00_02.move("88","123","48","46",null,null);

                p.Static01_02.set_taborder("46");
                p.Static01_02.set_text("0");
                p.Static01_02.set_fittocontents("width");
                p.Static01_02.move("165","143","9","46",null,null);

                p.Static02_02.set_taborder("47");
                p.Static02_02.set_text("개");
                p.Static02_02.set_fittocontents("width");
                p.Static02_02.move("293","131","13","46",null,null);

                p.panFileNum02.set_taborder("48");
                p.panFileNum02.set_flexgrow("1");
                p.panFileNum02.set_horizontalgap("4");
                p.panFileNum02.move("20","190","305","46",null,null);

                p.btn_del_file_1_02.set_taborder("49");
                p.btn_del_file_1_02.set_text("전체파일삭제");
                p.btn_del_file_1_02.set_cssclass("btn_WF_FileDel");
                p.btn_del_file_1_02.set_fittocontents("width");
                p.btn_del_file_1_02.set_visible("false");
                p.btn_del_file_1_02.move("512","135","125","34",null,null);

                p.panBtnDel02.set_taborder("50");
                p.panBtnDel02.set_flexcrossaxisalign("center");
                p.panBtnDel02.set_flexmainaxisalign("end");
                p.panBtnDel02.set_flexgrow("1");
                p.panBtnDel02.move("517","141","305","46",null,null);

                p.Panel00_02.set_taborder("51");
                p.Panel00_02.move("20","51","100%","46",null,null);

                p.Grid04.set_taborder("52");
                p.Grid04.set_binddataset("dsFile4");
                p.Grid04.set_autofittype("col");
                p.Grid04.set_cssclass("grd_WF_FileAdd");
                p.Grid04.move("20.00","114","100%","40",null,null);

                p.sta00_00_02.set_taborder("53");
                p.sta00_00_02.set_text("<b v=\'true\'>이동지역 회사 및 실제 소속 회사</b>간 계약관련 증빙 서류");
                p.sta00_00_02.set_cssclass("sta_WF_Des");
                p.sta00_00_02.set_fittocontents("height");
                p.sta00_00_02.set_usedecorate("true");
                p.sta00_00_02.move("20","20","100.00%","30",null,null);

                p.panFile02.set_taborder("54");
                p.panFile02.set_fittocontents("height");
                p.panFile02.set_spacing("10px 20px 10px 20px");
                p.panFile02.set_flexwrap("wrap");
                p.panFile02.set_cssclass("pal_WF_DtlBg");
                p.panFile02.set_verticalgap("4");
                p.panFile02.move("0","42","100.00%","195",null,null);

                p.staLabel00_02_03.set_taborder("55");
                p.staLabel00_02_03.set_text("구내영업승인");
                p.staLabel00_02_03.set_cssclass("sta_WF_Label");
                p.staLabel00_02_03.set_fittocontents("width");
                p.staLabel00_02_03.move("0","44","305","46",null,null);

                p.btn_file_1_03.set_taborder("56");
                p.btn_file_1_03.set_text("파일선택");
                p.btn_file_1_03.set_cssclass("btn_WF_FileUp");
                p.btn_file_1_03.set_fittocontents("width");
                p.btn_file_1_03.set_visible("false");
                p.btn_file_1_03.move("124","58","116","34",null,null);

                p.panBtnFile03.set_taborder("57");
                p.panBtnFile03.set_flexgrow("1");
                p.panBtnFile03.set_flexmainaxisalign("end");
                p.panBtnFile03.set_horizontalgap("10");
                p.panBtnFile03.move("433","58","305","46",null,null);

                p.panTitle03.set_taborder("58");
                p.panTitle03.set_cssclass("pan_WF_FileTitle");
                p.panTitle03.set_flexwrap("wrap");
                p.panTitle03.set_fittocontents("height");
                p.panTitle03.move("0","124","100%","46",null,null);

                p.Static00_03.set_taborder("59");
                p.Static00_03.set_text("파일수 : ");
                p.Static00_03.set_fittocontents("width");
                p.Static00_03.move("88","123","48","46",null,null);

                p.Static01_03.set_taborder("60");
                p.Static01_03.set_text("0");
                p.Static01_03.set_fittocontents("width");
                p.Static01_03.move("165","143","9","46",null,null);

                p.Static02_03.set_taborder("61");
                p.Static02_03.set_text("개");
                p.Static02_03.set_fittocontents("width");
                p.Static02_03.move("293","131","13","46",null,null);

                p.panFileNum03.set_taborder("62");
                p.panFileNum03.set_flexgrow("1");
                p.panFileNum03.set_horizontalgap("4");
                p.panFileNum03.move("20","190","305","46",null,null);

                p.btn_del_file_1_03.set_taborder("63");
                p.btn_del_file_1_03.set_text("전체파일삭제");
                p.btn_del_file_1_03.set_cssclass("btn_WF_FileDel");
                p.btn_del_file_1_03.set_fittocontents("width");
                p.btn_del_file_1_03.set_visible("false");
                p.btn_del_file_1_03.move("512","135","125","34",null,null);

                p.panBtnDel03.set_taborder("64");
                p.panBtnDel03.set_flexcrossaxisalign("center");
                p.panBtnDel03.set_flexmainaxisalign("end");
                p.panBtnDel03.set_flexgrow("1");
                p.panBtnDel03.move("517","141","305","46",null,null);

                p.Panel00_03.set_taborder("65");
                p.Panel00_03.move("20","51","100%","46",null,null);

                p.Grid05.set_taborder("66");
                p.Grid05.set_binddataset("dsFile5");
                p.Grid05.set_autofittype("col");
                p.Grid05.set_cssclass("grd_WF_FileAdd");
                p.Grid05.move("20.00","114","100%","40",null,null);

                p.panFile03.set_taborder("67");
                p.panFile03.set_fittocontents("height");
                p.panFile03.set_spacing("10px 20px 10px 20px");
                p.panFile03.set_flexwrap("wrap");
                p.panFile03.set_cssclass("pal_WF_DtlBg");
                p.panFile03.set_verticalgap("4");
                p.panFile03.move("0","42","100.00%","161",null,null);

                p.sta00_00_01_00.set_taborder("68");
                p.sta00_00_01_00.set_text("<fc v=\'red\'>재직증명서 내 주민등록번호, 생년월일, 자택주소 삭제(마스킹) 되었는지 확인 필요, 삭제(마스킹)하지 않고 가입신청 시 불승인</fc>");
                p.sta00_00_01_00.set_cssclass("sta_WF_Des");
                p.sta00_00_01_00.set_fittocontents("height");
                p.sta00_00_01_00.set_usedecorate("true");
                p.sta00_00_01_00.move("20","20","100.00%","30",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div03.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div03.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div03.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div03.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div04.form
            obj = new Layout("default","",0,0,this.divForm.form.Div04.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.pan01_01.set_taborder("2");
                p.pan01_01.set_type("vertical");
                p.pan01_01.set_flexgrow("1");
                p.pan01_01.set_minwidth("");
                p.pan01_01.move("10.00","98","300","86",null,null);

                p.staLabel00_00.set_taborder("0");
                p.staLabel00_00.set_text("처리상태");
                p.staLabel00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00.move("10","98","100%","46",null,null);

                p.edt00_00.set_taborder("1");
                p.edt00_00.set_readonly("true");
                p.edt00_00.move("10.00","158","100%","40",null,null);

                p.pan01.set_taborder("3");
                p.pan01.set_horizontalgap("20");
                p.pan01.set_flexcrossaxiswrapalign("start");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_fittocontents("height");
                p.pan01.set_verticalgap("0");
                p.pan01.set_spacing("0px 20px 10px 20px");
                p.pan01.set_cssclass("pal_WF_DtlBg");
                p.pan01.move("0","60","100.00%","97",null,null);

                p.pan01_02.set_taborder("4");
                p.pan01_02.set_type("vertical");
                p.pan01_02.set_flexgrow("1");
                p.pan01_02.move("10.00","98","300","86",null,null);

                p.staLabel00_00_00.set_taborder("5");
                p.staLabel00_00_00.set_text("처리자");
                p.staLabel00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00_00.move("10","98","100%","46",null,null);

                p.edt00_00_00.set_taborder("6");
                p.edt00_00_00.set_readonly("true");
                p.edt00_00_00.move("10.00","158","100%","40",null,null);

                p.staLabel00_00_01.set_taborder("7");
                p.staLabel00_00_01.set_text("처리내역");
                p.staLabel00_00_01.set_cssclass("sta_WF_Label");
                p.staLabel00_00_01.move("10","98","100%","46",null,null);

                p.pan01_01_00.set_taborder("8");
                p.pan01_01_00.set_type("vertical");
                p.pan01_01_00.set_flexgrow("1");
                p.pan01_01_00.set_minwidth("");
                p.pan01_01_00.move("10.00","98","300","196",null,null);

                p.pan01_00.set_taborder("9");
                p.pan01_00.set_horizontalgap("20");
                p.pan01_00.set_flexcrossaxiswrapalign("start");
                p.pan01_00.set_flexwrap("wrap");
                p.pan01_00.set_fittocontents("height");
                p.pan01_00.set_verticalgap("0");
                p.pan01_00.set_spacing("0px 20px 10px 20px");
                p.pan01_00.set_cssclass("pal_WF_DtlBg");
                p.pan01_00.move("0","60","100.00%","207",null,null);

                p.txaPrcsDsctn.set_taborder("10");
                p.txaPrcsDsctn.move("0","14","100%","150",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div04.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div04.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div04.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div04.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.sub_tit01.set_taborder("");
                p.sub_tit01.set_background("#ffffff");
                p.sub_tit01.set_flexcrossaxisalign("end");
                p.sub_tit01.set_minheight("70");
                p.sub_tit01.set_maxheight("");
                p.sub_tit01.move("0","0","100%","70",null,null);

                p.Div01.set_taborder("0");
                p.Div01.set_text("Div00");
                p.Div01.set_cssclass("div_WF_Bg");
                p.Div01.set_fittocontents("height");
                p.Div01.move("0","0","100.00%","97",null,null);

                p.sub_tit02.set_taborder("");
                p.sub_tit02.set_background("#ffffff");
                p.sub_tit02.set_flexcrossaxisalign("end");
                p.sub_tit02.set_minheight("70");
                p.sub_tit02.set_maxheight("");
                p.sub_tit02.move("0","0","100%","70",null,null);

                p.Div02.set_taborder("1");
                p.Div02.set_text("Div00");
                p.Div02.set_cssclass("div_WF_Bg");
                p.Div02.set_fittocontents("height");
                p.Div02.move("0","0","100.00%","593",null,null);

                p.staSubTitle02_00_00.set_taborder("");
                p.staSubTitle02_00_00.set_text("기본정보");
                p.staSubTitle02_00_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_00.move("30","50","100%","50",null,null);

                p.btnMinBscInfo.set_taborder("");
                p.btnMinBscInfo.set_cssclass("btn_WF_ACMinus");
                p.btnMinBscInfo.set_visible("true");
                p.btnMinBscInfo.move("1390.00","18","34","34",null,null);

                p.Panel01_02_00.set_taborder("");
                p.Panel01_02_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_00.set_spacing("0px 20px");
                p.Panel01_02_00.set_horizontalgap("10");
                p.Panel01_02_00.set_flexcrossaxisalign("center");
                p.Panel01_02_00.set_flexmainaxisalign("end");
                p.Panel01_02_00.move("710.00","50","100%","50",null,null);

                p.staSubTitle02_00.set_taborder("");
                p.staSubTitle02_00.set_text("신청정보");
                p.staSubTitle02_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00.move("30","50","100%","50",null,null);

                p.btnMinAplyInfo.set_taborder("");
                p.btnMinAplyInfo.set_cssclass("btn_WF_ACMinus");
                p.btnMinAplyInfo.set_visible("true");
                p.btnMinAplyInfo.move("1390.00","18","34","34",null,null);

                p.Panel01_02.set_taborder("");
                p.Panel01_02.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02.set_spacing("0px 20px");
                p.Panel01_02.set_horizontalgap("10");
                p.Panel01_02.set_flexcrossaxisalign("center");
                p.Panel01_02.set_flexmainaxisalign("end");
                p.Panel01_02.move("710.00","50","100%","50",null,null);

                p.staSubTitle02_00_01.set_taborder("10");
                p.staSubTitle02_00_01.set_text("증빙자료");
                p.staSubTitle02_00_01.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_01.move("30","50","100%","50",null,null);

                p.btnMinAtfl.set_taborder("11");
                p.btnMinAtfl.set_cssclass("btn_WF_ACMinus");
                p.btnMinAtfl.set_visible("true");
                p.btnMinAtfl.move("1390.00","18","34","34",null,null);

                p.Panel01_02_01.set_taborder("12");
                p.Panel01_02_01.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_01.set_spacing("0px 20px");
                p.Panel01_02_01.set_horizontalgap("10");
                p.Panel01_02_01.set_flexcrossaxisalign("center");
                p.Panel01_02_01.set_flexmainaxisalign("end");
                p.Panel01_02_01.move("710.00","50","100%","50",null,null);

                p.sub_tit03.set_taborder("13");
                p.sub_tit03.set_background("#ffffff");
                p.sub_tit03.set_flexcrossaxisalign("end");
                p.sub_tit03.set_minheight("70");
                p.sub_tit03.set_maxheight("");
                p.sub_tit03.move("0","0","100%","70",null,null);

                p.Div03.set_taborder("14");
                p.Div03.set_text("Div00");
                p.Div03.set_cssclass("div_WF_Bg");
                p.Div03.set_fittocontents("height");
                p.Div03.move("0","0","100.00%","941",null,null);

                p.staSubTitle04.set_taborder("15");
                p.staSubTitle04.set_text("처리내역");
                p.staSubTitle04.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle04.move("30","50","100%","50",null,null);

                p.btnMinPrcsDsctn.set_taborder("16");
                p.btnMinPrcsDsctn.set_cssclass("btn_WF_ACMinus");
                p.btnMinPrcsDsctn.set_visible("true");
                p.btnMinPrcsDsctn.move("1390.00","18","34","34",null,null);

                p.Panel04_01.set_taborder("17");
                p.Panel04_01.set_cssclass("pal_WF_TitBtnBg");
                p.Panel04_01.set_spacing("0px 20px");
                p.Panel04_01.set_horizontalgap("10");
                p.Panel04_01.set_flexcrossaxisalign("center");
                p.Panel04_01.set_flexmainaxisalign("end");
                p.Panel04_01.move("710.00","50","100%","50",null,null);

                p.sub_tit04.set_taborder("18");
                p.sub_tit04.set_background("#ffffff");
                p.sub_tit04.set_flexcrossaxisalign("end");
                p.sub_tit04.set_minheight("70");
                p.sub_tit04.set_maxheight("");
                p.sub_tit04.move("0","0","100%","70",null,null);

                p.Div04.set_taborder("19");
                p.Div04.set_text("Div00");
                p.Div04.set_cssclass("div_WF_Bg");
                p.Div04.set_fittocontents("height");
                p.Div04.move("0","0","100%","304",null,null);
            	}
            );
            obj.set_type("vertical");
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
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divPopBtn.form
            obj = new Layout("default","",0,0,this.divPopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnHold.set_taborder("2");
                p.btnHold.set_text("서류보완");
                p.btnHold.set_cssclass("btn_WF_No");
                p.btnHold.move("200.00","365","120","40",null,null);

                p.btnNo.set_taborder("1");
                p.btnNo.set_text("불승인");
                p.btnNo.set_cssclass("btn_WF_No");
                p.btnNo.move("200.00","365","120","40",null,null);

                p.btnYes.set_taborder("0");
                p.btnYes.set_text("승인");
                p.btnYes.set_cssclass("btn_WF_Yes");
                p.btnYes.set_fittocontents("width");
                p.btnYes.move("457.00","30","100","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("10");
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
            obj.set_horizontalgap("10");
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
            obj.set_horizontalgap("10");
            this.divPopBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divGuide00.form
            obj = new Layout("default","",0,0,this.divGuide00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00_00.set_taborder("0");
                p.Button00_00.set_cssclass("btn_WF_ACPlus");
                p.Button00_00.set_visible("false");
                p.Button00_00.move("20.00","205","34","34",null,null);

                p.Button00_00_00.set_taborder("1");
                p.Button00_00_00.set_cssclass("btn_WF_ACMinus");
                p.Button00_00_00.move("64.00","205","34","34",null,null);

                p.sta00_00.set_taborder("2");
                p.sta00_00.set_text("접혀있을때 class : btn_WF_ACPlus 로 접음");
                p.sta00_00.move("20.00","255","375","50",null,null);
            	}
            );
            this.divGuide00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divGuide00.form
            obj = new Layout("mobile","",0,0,this.divGuide00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divGuide00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divGuide00.form
            obj = new Layout("mobile","",0,0,this.divGuide00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divGuide00.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1480,2200,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("계정 승인/반려");

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.move("20","0",null,null,"20","70");

                p.divPopBtn.set_taborder("1");
                p.divPopBtn.set_text("Div00");
                p.divPopBtn.set_cssclass("div_WF_PopBtn");
                p.divPopBtn.move("20",null,null,"60","20","0");

                p.divGuide00.set_taborder("2");
                p.divGuide00.set_text("div00");
                p.divGuide00.set_visible("false");
                p.divGuide00.set_cssclass("div_GD_Tip");
                p.divGuide00.move("1600.00","145","450","385",null,null);

                p.RaonkUpload.set_taborder("3");
                p.RaonkUpload.set_DevelopLangage("JAVA");
                p.RaonkUpload.set_ExtensionAllowOrLimit("1");
                p.RaonkUpload.set_HandlerUrl("/common/uploadDownload.do");
                p.RaonkUpload.set_RunTimes("html5");
                p.RaonkUpload.set_ButtonBarView("0");
                p.RaonkUpload.set_visible("false");
                p.RaonkUpload.set_AllowDuplicationFile("1");
                p.RaonkUpload.set_text("");
                p.RaonkUpload.set_DisableDeleteConfirm("1");
                p.RaonkUpload.move("-826.00","6","49.46%","200",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",480,600,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divPopBtn.set_text("Div00");
                p.divPopBtn.move("20",null,null,"80","20","0");

                p.divForm.move("20","0",null,null,"20","90");
            	}
            );
            obj.set_mobileorientation("Portrait");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.Div02.form.edt01_01","value","dsGet","userNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.Div02.form.edt01_01_00","value","dsGet","userId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.Div02.form.edt01_02_00","value","dsGet","eml");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.Div02.form.rdo03","value","dsGet","rltnCoActlOgdpYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.Div02.form.edt01_01_01","value","dsGet","coNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divForm.form.Div02.form.Radio00_00_00_00","value","dsGet","esntlAgreYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divForm.form.Div02.form.Radio00_00_00","value","dsGet","chcAgreYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divForm.form.Div04.form.edt00_00_00","value","dsGet","prcrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divForm.form.Div04.form.txaPrcsDsctn","value","dsGet","prcsDsctn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divForm.form.Div04.form.edt00_00","value","dsGet","prcsSttsNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.Div01.form.edtIdAply","value","dsGet","idAply");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.Div02.form.edtCoInfo","value","dsGet","coInfo");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("COM024P07.xfdl", function() {
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
        * 2024/12/02			조규완					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        this.param;
        var cMenuId;
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수
        	// 전달받은 파라메터 팝업창과 페이지오픈으로 파라메터 불러오는 방식이 달라짐
        	if(this.opener) {
        		this.param = {
        			"id" : this.getOwnerFrame().id,
        			"type" : this.getOwnerFrame().type
        		}
        	} else {
        		this.param = this.getOwnerFrame().form.fvObjArgs;
        	}

        	if(this.objApp.screenid == "Desktop_screen") {
        		cMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        	}
        	this.fnInit();
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	this.selectTransaction();
        };

        this.cfnClose = function() {
        	if(this.objApp.screenid == "Desktop_screen") {
        		var sWinId = this.objApp.gdsOpenMenu.lookupAs(this.FRAME_MENUCOLUMNS.menuId, cMenuId.substring(0, 14), this.FRAME_MENUCOLUMNS.winId);
        		var objForm = this.objApp.gvFrsWork.all[sWinId];
        		objForm.form.divWork.form.cfnSearch(1);
        	}
        };
        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.selectTransaction = function()
        {
        	var strSvcId    = "select";
        	var strSvcUrl   = "sysMng/acntAplyInfoInq.do";
        	var inData      = "";
        	var outData     = "dsGet=dsGet:U dsFile1=dsFile1 dsFile2=dsFile2 dsFile3=dsFile3 dsFile4=dsFile4 dsFile5=dsFile5";
        	var strArg      = "id=" + this.param.id;
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc, 	// transaction의 결과를 받을 Function 이름
        						isAsync); 		// 비동기통신 여부 [생략가능]
        };

        // 데이터 저장
        this.saveTransaction = function()
        {
        	var strSvcId    = "save";
        	var strSvcUrl   = "sysMng/acntAprvRjctPrcs.do";
        	var inData      = "dsGet=dsGet";
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
        			this.gfnDownloadSetting(this.RaonkUpload, this.dsFile1);

        			var nRow1 = this.dsFile.addRow();
        			this.dsFile.setColumn(nRow1, "atflMngNo", this.dsFile1.getColumn(0, "atflMngNo"));
        			this.dsFile.setColumn(nRow1, "colId", this.dsFile1.getColumn(0, "colId"));
        			var nRow2 = this.dsFile.addRow();
        			this.dsFile.setColumn(nRow2, "atflMngNo", this.dsFile2.getColumn(0, "atflMngNo"));
        			this.dsFile.setColumn(nRow2, "colId", this.dsFile2.getColumn(0, "colId"));
        			var nRow3 = this.dsFile.addRow();
        			this.dsFile.setColumn(nRow3, "atflMngNo", this.dsFile3.getColumn(0, "atflMngNo"));
        			this.dsFile.setColumn(nRow3, "colId", this.dsFile3.getColumn(0, "colId"));
        			var nRow4 = this.dsFile.addRow();
        			this.dsFile.setColumn(nRow4, "atflMngNo", this.dsFile4.getColumn(0, "atflMngNo"));
        			this.dsFile.setColumn(nRow4, "colId", this.dsFile4.getColumn(0, "colId"));
        			var nRow5 = this.dsFile.addRow();
        			this.dsFile.setColumn(nRow5, "atflMngNo", this.dsFile5.getColumn(0, "atflMngNo"));
        			this.dsFile.setColumn(nRow5, "colId", this.dsFile5.getColumn(0, "colId"));

        			this.fnSetSelect();

        			break;
        		case "save":
        			var gvRetMsg = this.objApp.getVariable("gvRetMsg");
        			this.gfnAlertMsg("save", gvRetMsg, "msgCallback");
        			if (this.type == "APRV") {
        				var eml = this.dsGet.getColumn(0, "eml")
        				var emlChk = eml.substring(eml.length - 13);
        				if (this.dsGet.getColumn(0, "emlRcptnYn") == "Y") {
        					//this.fnSendEml();
        				}
        				if (this.dsGet.getColumn(0, "smsRcptnPrgrsYn") == "Y") {
        					//this.fnSendSms();
        				}
        			}

        			if(this.opener) {
        				this.close();
        			} else {
        				if(this.objApp.screenid == "Desktop_screen") {
        					var cMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        					this.gfnCloseMenu(cMenuId);
        				}
        			}
        			break;
        	}
        };

        this.msgCallback = function(sPopupId, sRtn)
        {
        	var oRtn = JSON.parse(sRtn);

        	if(sPopupId == "save_confirm") {
        		if(oRtn.result == "Y") {
        			this.saveTransaction();
        		}
        	} else if(sPopupId == "save") {
        		if(this.opener) {
        			this.close();
        		} else {
        			if(this.objApp.screenid == "Desktop_screen") {
        				var cMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        				this.gfnCloseMenu(cMenuId);
        			}
        		}
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	this.gfnCmmCode("combo", "dsCombo", "PRCS_STTS", "");

        	if(this.param != null && this.param.id != null && this.param.id != '') {
        		this.selectTransaction();
        	}

        	if (this.param != null && this.param.type != null && this.param.type == 'read') {
        		this.divForm.form.Div04.form.txaPrcsDsctn.readonly = true;
        		this.divPopBtn.visible = false;
        	}
        };

        this.fnSetSelect = function()
        {
        	var telno = this.dsGet.getColumn(0, "telno");
        	if (telno.length == 9) {
        		this.divForm.form.Div02.form.mEdtTelno.format = "##-###-####";
        	} else if (telno.length == 10) {
        		if (telno.substr(0, 2) == "02") {
        			this.divForm.form.Div02.form.mEdtTelno.format = "##-####-####";
        		} else {
        			this.divForm.form.Div02.form.mEdtTelno.format = "###-###-####";
        		}
        	}
        	if (this.dsGet.getColumn(0, "jobCd") != "TAS20005") {
        		this.divPopBtn.form.btnHold.enable = false;
        		this.divPopBtn.form.btnNo.enable = false;
        		this.divPopBtn.form.btnYes.enable = false;
        	}
        }

        // 처리자 처리 후 메일발송
        this.fnSendEml = function()
        {
        	//	dsOutsideMail dataset
        	// 	from		// 받는사람 사용자ID
        	// 	to			// 보내는사람 사용자ID
        	// 	cc			// 참조
        	// 	subject		// 제목
        	// 	content		// 내용 템플릿ID

        	var from = this.dsGet.getColumn(0, "prcrEml");
        	var to = this.dsGet.getColumn(0, "eml");
        	var subject = "TEST";
        	var cc = "";

        	var contentId = "ELE.Mail.Content";
        	var http = this.objSrv.url;
        	var id = "testId";
        	var tas_name = "test_tas_name";
        	var cat_name = "test_cat_name";
        	var t_roomno = "test_t_roomno";
        	var t_req_emp_name = "test_t_req_emp_name";
        	var t_req_dttm = "test_t_req_dttm";
        	var ass_emp_name = "test_ass_emp_name";
        	var ass_wog_name = "test_ass_wog_name";

        	this.dsOutsideMail.addColumn("http", "STRING");
        	this.dsOutsideMail.addColumn("id", "STRING");
        	this.dsOutsideMail.addColumn("tas_name", "STRING");
        	this.dsOutsideMail.addColumn("cat_name", "STRING");
        	this.dsOutsideMail.addColumn("t_roomno", "STRING");
        	this.dsOutsideMail.addColumn("t_req_emp_name", "STRING");
        	this.dsOutsideMail.addColumn("t_req_dttm", "STRING");
        	this.dsOutsideMail.addColumn("ass_emp_name", "STRING");
        	this.dsOutsideMail.addColumn("ass_wog_name", "STRING");

        	this.dsOutsideMail.setColumn(0, "from", from);
        	this.dsOutsideMail.setColumn(0, "to", to);
        	this.dsOutsideMail.setColumn(0, "subject", subject);
        	this.dsOutsideMail.setColumn(0, "cc", cc);
        	this.dsOutsideMail.setColumn(0, "contentId", contentId);

        	this.dsOutsideMail.setColumn(0, "http", http);
        	this.dsOutsideMail.setColumn(0, "id", id);
        	this.dsOutsideMail.setColumn(0, "tas_name", tas_name);
        	this.dsOutsideMail.setColumn(0, "cat_name", cat_name);
        	this.dsOutsideMail.setColumn(0, "t_roomno", t_roomno);
        	this.dsOutsideMail.setColumn(0, "t_req_emp_name", t_req_emp_name);
        	this.dsOutsideMail.setColumn(0, "t_req_dttm", t_req_dttm);
        	this.dsOutsideMail.setColumn(0, "ass_emp_name", ass_emp_name);
        	this.dsOutsideMail.setColumn(0, "ass_emp_name", ass_emp_name);
        	this.dsOutsideMail.setColumn(0, "ass_wog_name", ass_wog_name);


        	this.gfn_Api_outsideMail(
        		"outsideMail"		// API ID
        		, "dsOutsideMail"	// 데이터셋명
        		, "apiCallback");	// 콜백명
        }

        // 처리자 처리 후 SMS발송
        this.fnSendSms = function()
        {
        	var send_num = "15881234";
        	var recipient_num = this.dsGet.getColumn(0, "mblTelno");
        	var contentId = "TSP_36R1";

        	var prcsSttsNm = this.dsGet.getColumn(0, "prcsSttsNm");
        	this.dsSms.addColumn("prcsSttsNm", "STRING");

        	this.dsSms.setColumn(0, "send_num", send_num);
        	this.dsSms.setColumn(0, "recipient_num", recipient_num);
        	this.dsSms.setColumn(0, "contentId", contentId);
        	this.dsSms.setColumn(0, "prcsSttsNm", prcsSttsNm);

        	this.gfn_Api_sms(
        		"sms"		// API ID
        		, "dsSms"	// 데이터셋명
        		, "apiCallback");	// 콜백명
        }
        /*******************************************************************************************************************************
         * 각 RAONK 별 EVENT 영역
        *******************************************************************************************************************************/
        // 페이지에서 라온K업로드 솔루션의 생성 이벤트
        this.RaonkUpload_RAONKUPLOAD_CreationComplete = function(obj,  paramObj)
        {
        	// 업로드 솔루션이 초기 생성시 업로드 할 경로를 지정해야 한다.
        	// /CMM/YYYY/MM/DD/  <<== CMM은 업무별 폴더 지정이고 기본적으로 /년도/월/일 의 폴더 구조를 갖는다.
        	this.RaonkUpload.SetConfig('FolderNameRule', '/COM/YYYY/MM/DD/');
        };

        // 파일 업로드 시 에러 발생 이벤트
        this.RaonkUpload_RAONKUPLOAD_OnError = function(obj, paramObj)
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
        // 	if(this.gvUploadCategory == 'attfiles')
        // 	{
        // 		if(this.dsFile1.rowcount >= 1)
        // 		{
        // 			this.gfnAlertMsg("MSG_001", "msgCallback");
        // 			//this.gfnAlertMsg("beforeAddFile", "파일 1개만 업로드 가능 합니다.", "msgCallback");
        // 			return false;
        // 		}
        // 	}

        	return true;
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
        	if(this.gvUploadCategory == 'attfiles') {
        		var nIdx = this.dsFile1.addRow();
        		this.dsFile1.setColumn(nIdx, "fullName", paramObj.userdata.strName + ' (' + paramObj.userdata.nSize + ')');
        		this.dsFile1.setColumn(nIdx, "orgnlFileNm", paramObj.userdata.strName);
        		this.dsFile1.setColumn(nIdx, "fileSz", paramObj.userdata.nSize);
        		this.dsFile1.setColumn(nIdx, "atflMngSno", paramObj.userdata.nIndex);
        		this.dsFile1.setColumn(nIdx, "colId", this.gvUploadCategory);
        	}
        };

        // 파일 업로드 완료 이벤트
        this.RaonkUpload_RAONKUPLOAD_UploadComplete = function(obj, paramObj)
        {
        	var allListArray = this.RaonkUpload.GetListInfo("json");
        	// 파일 업로드 후 첨부파일관리번호를 얻기 위한 함수
        	this.gfnUploadComplete("uploadComplete", allListArray, "dsFile", "fnCallback");
        };

        // 파일 그리드 더블클릭 이벤트
        this.divForm_Div03_Grid01_oncellclick = function(obj,e)
        {
        	if(e.col == 0) 	// 파일명을 더블클릭 시 다운로드
        	{
        		console.log(obj);
        		this.gfnDownloadFile(this.RaonkUpload, this.dsFile1, e);
        	}
        };

        // 파일 그리드 더블클릭 이벤트
        this.divForm_Div03_Grid02_oncellclick = function(obj,e)
        {
        	if(e.col == 0) 	// 파일명을 더블클릭 시 다운로드
        	{
        		this.gfnDownloadFile(this.RaonkUpload, this.dsFile2, e);
        	}
        };

        // 파일 그리드 더블클릭 이벤트
        this.divForm_Div03_Grid03_oncellclick = function(obj,e)
        {
        	if(e.col == 0) 	// 파일명을 더블클릭 시 다운로드
        	{
        		this.gfnDownloadFile(this.RaonkUpload, this.dsFile3, e);
        	}
        };

        // 파일 그리드 더블클릭 이벤트
        this.divForm_Div03_Grid04_oncellclick = function(obj,e)
        {
        	if(e.col == 0) 	// 파일명을 더블클릭 시 다운로드
        	{
        		this.gfnDownloadFile(this.RaonkUpload, this.dsFile4, e);
        	}
        };

        // 파일 그리드 더블클릭 이벤트
        this.divForm_Div03_Grid05_oncellclick = function(obj,e)
        {
        	if(e.col == 0) 	// 파일명을 더블클릭 시 다운로드
        	{
        		this.gfnDownloadFile(this.RaonkUpload, this.dsFile5, e);
        	}
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divPopBtn_btn_onclick = function(obj,e)
        {
        	this.dsGet.addColumn("prcsSeCd", "string", "256");
        	if (obj.name == "btnYes") {
        		this.dsGet.setColumn(0, "prcsSttsCd", "TIDSTATUS001");
        		this.dsGet.setColumn(0, "prcsSttsNm", "승인및발급");
        		this.dsGet.setColumn(0, "prcsSeCd", "CTL20005");
        		this.dsGet.setColumn(0, "cmptnCd", "TSPCLO010");
        	} else if (obj.name == "btnNo") {
        		this.dsGet.setColumn(0, "prcsSttsCd", "TIDSTATUS002");
        		this.dsGet.setColumn(0, "prcsSttsNm", "불승인");
        		this.dsGet.setColumn(0, "prcsSeCd", "CTL20006");
        	} else if (obj.name == "btnHold") {
        		this.dsGet.setColumn(0, "prcsSttsCd", "TIDSTATUS003");
        		this.dsGet.setColumn(0, "prcsSttsNm", "서류보완");
        		this.dsGet.setColumn(0, "prcsSeCd", "CTL20007");
        	}

        	this.gfnConfirmMsg("save_confirm", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"], null);
        };

        this.btnMin_onclick = function(obj,e)
        {
        	var objNm = obj.name;
        	var objClass = obj.cssclass;
        	var objDiv = null;
        	var divVisible = false;

        	// 해당 div 찾아줌.
        	if(objNm == "btnMinAplyInfo") {
        		objDiv = this.divForm.form.Div01;
        	} else if(objNm == "btnMinBscInfo") {
        		objDiv = this.divForm.form.Div02;
        	} else if(objNm == "btnMinAtfl") {
        		objDiv = this.divForm.form.Div03;
        	} else if(objNm == "btnMinPrcsDsctn") {
        		objDiv = this.divForm.form.Div04;
        	} else{
        		return;
        	}

        	if (objClass == "btn_WF_ACMinus") { // - 버튼 일때
        		divVisible = false; // visible 세팅
        		obj.cssclass = "btn_WF_ACPlus"; // 클래스 수정
        	} else if (objClass == "btn_WF_ACPlus") { // + 버튼 일때
        		divVisible = true; // visible 세팅
        		obj.cssclass = "btn_WF_ACMinus";
        	}

        	objDiv.visible = divVisible;
        	this.resetScroll();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.Div02.form.Radio00_00_00.addEventHandler("onitemchanged",this.divForm_Div00_Radio00_00_onitemchanged,this);
            this.divForm.form.Div02.form.Radio00_00_00_00.addEventHandler("onitemchanged",this.divForm_Div00_Radio00_00_onitemchanged,this);
            this.divForm.form.Div02.form.rdo03.addEventHandler("onitemchanged",this.divForm_Div03_rdo03_onitemchanged,this);
            this.divForm.form.btnMinBscInfo.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.btnMinAplyInfo.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.btnMinAtfl.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.Div03.form.btn_file_1.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.divForm.form.Div03.form.btn_del_file_1.addEventHandler("onclick",this.divForm_Div04_btn_del_file_1_onclick,this);
            this.divForm.form.Div03.form.Grid01.addEventHandler("oncellclick",this.divForm_Div03_Grid01_oncellclick,this);
            this.divForm.form.Div03.form.sta00_00.addEventHandler("onclick",this.divForm_Div00_Div03_sta00_00_onclick,this);
            this.divForm.form.Div03.form.btn_file_1_00.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.divForm.form.Div03.form.btn_del_file_1_00.addEventHandler("onclick",this.divForm_Div04_btn_del_file_1_onclick,this);
            this.divForm.form.Div03.form.Grid02.addEventHandler("oncellclick",this.divForm_Div03_Grid02_oncellclick,this);
            this.divForm.form.Div03.form.staLabel00_02_01.addEventHandler("onclick",this.divForm_Div03_staLabel00_02_01_onclick,this);
            this.divForm.form.Div03.form.btn_file_1_01.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.divForm.form.Div03.form.btn_del_file_1_01.addEventHandler("onclick",this.divForm_Div04_btn_del_file_1_onclick,this);
            this.divForm.form.Div03.form.Grid03.addEventHandler("oncellclick",this.divForm_Div03_Grid03_oncellclick,this);
            this.divForm.form.Div03.form.sta00_00_01.addEventHandler("onclick",this.divForm_Div00_Div03_sta00_00_onclick,this);
            this.divForm.form.Div03.form.btn_file_1_02.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.divForm.form.Div03.form.btn_del_file_1_02.addEventHandler("onclick",this.divForm_Div04_btn_del_file_1_onclick,this);
            this.divForm.form.Div03.form.Grid04.addEventHandler("oncellclick",this.divForm_Div03_Grid04_oncellclick,this);
            this.divForm.form.Div03.form.sta00_00_02.addEventHandler("onclick",this.divForm_Div00_Div03_sta00_00_onclick,this);
            this.divForm.form.Div03.form.btn_file_1_03.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.divForm.form.Div03.form.btn_del_file_1_03.addEventHandler("onclick",this.divForm_Div04_btn_del_file_1_onclick,this);
            this.divForm.form.Div03.form.Grid05.addEventHandler("oncellclick",this.divForm_Div03_Grid05_oncellclick,this);
            this.divForm.form.btnMinPrcsDsctn.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divPopBtn.form.btnHold.addEventHandler("onclick",this.divPopBtn_btn_onclick,this);
            this.divPopBtn.form.btnNo.addEventHandler("onclick",this.divPopBtn_btn_onclick,this);
            this.divPopBtn.form.btnYes.addEventHandler("onclick",this.divPopBtn_btn_onclick,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterAddFile",this.RaonkUpload_RAONKUPLOAD_AfterAddFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_CreationComplete",this.RaonkUpload_RAONKUPLOAD_CreationComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_UploadComplete",this.RaonkUpload_RAONKUPLOAD_UploadComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_OnError",this.RaonkUpload_RAONKUPLOAD_OnError,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_BeforeAddFile",this.RaonkUpload_RAONKUPLOAD_BeforeAddFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterAddAllFile",this.RaonkUpload_RAONKUPLOAD_AfterAddAllFile,this);
        };
        this.loadIncludeScript("COM024P07.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
