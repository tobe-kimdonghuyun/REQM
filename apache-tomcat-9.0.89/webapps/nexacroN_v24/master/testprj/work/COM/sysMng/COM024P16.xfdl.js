(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM024P16");
            this.set_titletext("계정연장 신청/승인 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,1900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGet", this);
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"prlgRsn\" type=\"STRING\" size=\"256\"/><Column id=\"prlgDmndBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"prlgDmndEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"mblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"eml\" type=\"STRING\" size=\"256\"/><Column id=\"coNm\" type=\"STRING\" size=\"256\"/><Column id=\"tpbiz\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"rmnmNo\" type=\"STRING\" size=\"256\"/><Column id=\"prlgDmndSe\" type=\"STRING\" size=\"256\"/><Column id=\"expcEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"emlRcptnYn\" type=\"STRING\" size=\"256\"/><Column id=\"smsRcptnYn\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"prvcAgreDocId\" type=\"STRING\" size=\"256\"/><Column id=\"esntlAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"chcAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"prcrId\" type=\"STRING\" size=\"256\"/><Column id=\"prcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcsSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcsSttsNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcsDsctn\" type=\"STRING\" size=\"256\"/><Column id=\"userNm\" type=\"STRING\" size=\"256\"/><Column id=\"userSe\" type=\"STRING\" size=\"256\"/><Column id=\"idAplySe\" type=\"STRING\" size=\"256\"/><Column id=\"idAplySeNm\" type=\"STRING\" size=\"256\"/><Column id=\"idAplyType\" type=\"STRING\" size=\"256\"/><Column id=\"idAplyTypeNm\" type=\"STRING\" size=\"256\"/><Column id=\"mngrYn\" type=\"STRING\" size=\"256\"/><Column id=\"acmtSe\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"fullName\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo1", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo2", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo3", this);
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
            obj.set_taborder("4");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div01","0","0","100.00%","550",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("pan01_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("11");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("신청인 계정 구분");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("10");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01","0","60","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("12");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan01_02\"/><PanelItem id=\"PanelItem03\" componentid=\"pan01_03\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("13");
            obj.set_text("신청인 휴대전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan02_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("14");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"edtMblTelno\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan02","0","60","100.00%","150",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("15");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_tabledirection("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem04\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem00\" componentid=\"pan02_04\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01","90","217","100%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("47");
            obj.set_horizontalgap("20");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"pan02_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan02_02\"/><PanelItem id=\"PanelItem04\" componentid=\"pan03_04\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new MaskEdit("edtMblTelno","316","156","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("1");
            obj.set_type("string");
            obj.set_format("###-####-####");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("16");
            obj.set_text("신청인 ID");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_02","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("17");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01_02","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("18");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_00_02\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_03","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("19");
            obj.set_text("신청인명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_03","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("20");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01_03","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("21");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_03\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_00_03\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan02_02","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("22");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("10");
            obj.set_spacing("10px 0p;x 0px 0px");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"PanelGrdBtn01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("23");
            obj.set_text("신청인 이메일ID");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan03_04","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("24");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00_02\"/><PanelItem id=\"PanelItem02\" componentid=\"edtEml\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00_01_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("25");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtCoNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("3");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan03_02","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("26");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtCoNm\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("27");
            obj.set_text("업종분류");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan03_03","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("28");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edtTpbiz\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan03","0","60","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("29");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"pan03_02\"/><PanelItem id=\"PanelItem03\" componentid=\"pan03_03\"/><PanelItem id=\"PanelItem01\" componentid=\"pan04_02\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtEml","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("2");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00_02_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("30");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan04_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("31");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00_02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edtCtrtNo\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00_01_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("32");
            obj.set_text("호실번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtRmnmNo","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("6");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan04_02","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("33");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtRmnmNo\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan04","0","60","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("34");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan04_01\"/><PanelItem id=\"PanelItem04\" componentid=\"pan04_03\"/><PanelItem id=\"PanelItem02\" componentid=\"pan01_03_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtCtrtNo","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("5");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("35");
            obj.set_text("연장기간");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01_01_00","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("36");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_02_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("37");
            obj.set_text("연장사유");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtPrlgRsn","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("9");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01_02_00","10.00","98","620","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("38");
            obj.set_type("vertical");
            obj.set_flexgrow("2");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtPrlgRsn\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01_00","0","60","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("39");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan01_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan01_02_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Button("btnMblCert","1026","108","40%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("40");
            obj.set_text("휴대폰 본인인증");
            obj.set_fittocontents("width");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Button("btnSimpleCert","1226","120","40%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("41");
            obj.set_text("간편인증");
            obj.set_fittocontents("width");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn01","685","50","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("42");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"btnMblCert\"/><PanelItem id=\"PanelItem00\" componentid=\"btnSimpleCert\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","30","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("43");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_Dash");
            obj.set_fittocontents("width");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Calendar("calEnd","0","0","48%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel00","147","232","100%","45",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("44");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"calStart\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00\"/><PanelItem id=\"PanelItem02\" componentid=\"calEnd\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtTpbiz","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("4");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Calendar("calStart","0","0","48%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta05","20","20","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("45");
            obj.set_text("계정연장 신청은 본인인증 후 가능합니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan02_04","20","150","100.00%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("46");
            obj.set_fittocontents("height");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta05\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_03_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("48");
            obj.set_text("문자/카카오톡 알림 여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Radio("rdo03","127","203","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("49");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            obj.set_readonly("false");
            var divForm_form_Div01_form_rdo03_innerdataset = new nexacro.NormalDataset("divForm_form_Div01_form_rdo03_innerdataset", obj);
            divForm_form_Div01_form_rdo03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div01_form_rdo03_innerdataset);
            obj.set_text("예");
            obj.set_value("Y");
            obj.set_index("0");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan04_03","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("50");
            obj.set_type("vertical");
            obj.set_horizontalgap("10");
            obj.set_spacing("10px 0p;x 0px 0px");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexgrow("1");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel01_03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"rdo03\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_03_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("51");
            obj.set_text("이메일 알림 여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Radio("rdo03_00","127","203","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("52");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            obj.set_readonly("false");
            var divForm_form_Div01_form_rdo03_00_innerdataset = new nexacro.NormalDataset("divForm_form_Div01_form_rdo03_00_innerdataset", obj);
            divForm_form_Div01_form_rdo03_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div01_form_rdo03_00_innerdataset);
            obj.set_text("예");
            obj.set_value("Y");
            obj.set_index("0");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01_03_00","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("53");
            obj.set_type("vertical");
            obj.set_horizontalgap("10");
            obj.set_spacing("10px 0p;x 0px 0px");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexgrow("1");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel01_03_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"rdo03_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00","30","50","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinAplyInfo","1390.00","18","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02","710.00","50","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 20px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnMinAplyInfo\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_00_00","30","50","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("5");
            obj.set_text("증빙 자료");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinAtfl","1390.00","18","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_00_00","710.00","50","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("7");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 20px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnMinAtfl\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit03","0","0","100%","70",null,null,null,null,"70",null,this.divForm.form);
            obj.set_taborder("8");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div03","0","0","100%","382",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("9");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_01_00","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("0");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btn_file_1","124","58","116","34",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("1");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_00","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("2");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("3");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("4");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static01","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("5");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("6");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panFileNum00_00","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("7");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02_00_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btn_del_file_1","512","135","125","34",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("8");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panBtnDel00_00","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("9");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_del_file_1\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel00_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panFile02","0","50","100.00%","241",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("11");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid01\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("pan01","0","60","100.00%","141",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("12");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("sta00","0","146","100.00%","120",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("13");
            obj.set_text("필요 증빙자료 : 공항 입주 관련 계약 증빙 서류, 사업자등록증\r\n- 사업자등록증의 사업자등록번호와 입주자증명서류(임대계약서, 낙찰증명서 등)에 있는 사업자등록번호가 동일해야 합니다.\r\n- (중요)재직증명서 내 주민등록번호, 생년월일, 자택주소는 삭제(마스킹)하셔야 하며, 삭제(마스킹)하지 않고 가입신청 시 불승인 처리됩니다.\r\n- 임대계약서, 낙찰증명서 등 (인천국제공항공사와 계약된 서류만 가능)\r\n- 이동지역 관련 양사 계약 증빙 서류는 이동지역 회사 및 실제 소속 회사간 계약관련 증빙 서류만 인정\r\n");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Grid("Grid01","20.00","114","100%","120",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("14");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_00_00_00","30","50","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("10");
            obj.set_text("개인정보 수집·이용 동의");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinAgre","1390.00","18","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_00_00_00","710.00","50","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("12");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 20px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnMinAgre\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit04","0","0","100%","70",null,null,null,null,"70",null,this.divForm.form);
            obj.set_taborder("13");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_00_00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div04","0","0","100%","350",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("14");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("pan00","90","178","100.00%","200",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"edt00_02\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edt00_02","60","78","100%","150",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_value("개인정보 수집 및 이용 관련 안내문 및 동의 여부 체크");
            obj.set_text("개인정보 수집 및 이용 관련 안내문 및 동의 여부 체크");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("2");
            obj.set_text("개인정보(필수) 사용동의여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Radio("rdoEsntl","127","203","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("7");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            var divForm_form_Div04_form_rdoEsntl_innerdataset = new nexacro.NormalDataset("divForm_form_Div04_form_rdoEsntl_innerdataset", obj);
            divForm_form_Div04_form_rdoEsntl_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">동의함</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">동의하지 않음</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div04_form_rdoEsntl_innerdataset);
            obj.set_text("동의함");
            obj.set_value("Y");
            obj.set_index("0");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"rdoEsntl\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_01_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("4");
            obj.set_text("개인정보(선택) 사용동의여부");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Radio("rdoChc","127","203","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("8");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            var divForm_form_Div04_form_rdoChc_innerdataset = new nexacro.NormalDataset("divForm_form_Div04_form_rdoChc_innerdataset", obj);
            divForm_form_Div04_form_rdoChc_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">동의함</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">동의하지 않음</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div04_form_rdoChc_innerdataset);
            obj.set_text("동의함");
            obj.set_value("Y");
            obj.set_index("0");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("5");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"rdoChc\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("pan04","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("6");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel01_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("sta05","20","20","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("9");
            obj.set_text("(선택 동의 항목은 동의하지 않으셔도 신청이 가능합니다.)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel04_02_00_00_00","20","150","100.00%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("10");
            obj.set_spacing("0px 20px 0px 20px");
            obj.set_fittocontents("height");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta05\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel04","0","560","100%","146",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("11");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_fittocontents("height");
            obj.set_spacing("0px 0px 10px 0px ");
            obj.set_tabledirection("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"pan04\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel04_02_00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_00_00_00_00","30","50","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("15");
            obj.set_text("처리내역");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinPrcsDsctn","1390.00","18","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_text("");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_00_00_00_00","710.00","50","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("17");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 20px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnMinPrcsDsctn\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit05","0","0","100%","70",null,null,null,null,"70",null,this.divForm.form);
            obj.set_taborder("18");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_00_00_00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div05","0","0","100%","266",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("19");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staPrcsSttsCd","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("0");
            obj.set_text("처리상태");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("pan01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("1");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPrcsSttsCd\"/><PanelItem id=\"PanelItem02\" componentid=\"edtPrcsSttsCd\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staPrcrNm","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("2");
            obj.set_text("처리자");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Edit("edtPrcrNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("pan02","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPrcrNm\"/><PanelItem id=\"PanelItem02\" componentid=\"edtPrcrNm\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("5");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"pan01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan02\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staPrcsDsctn","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("6");
            obj.set_text("처리내역");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Edit("edtPrcsDsctn","10.00","158","100%","110",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("pan02_02","10.00","98","300","100%",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPrcsDsctn\"/><PanelItem id=\"PanelItem02\" componentid=\"edtPrcsDsctn\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("pan03","0","60","100.00%","170",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("9");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"pan02_02\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Edit("edtPrcsSttsCd","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("10");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Div("divPopBtn","20",null,null,"60","20","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_03","217.00","10","120","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("2");
            obj.set_text("서류보완");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_No");
            this.divPopBtn.addChild(obj.name, obj);

            obj = new Button("Button00_02","217.00","10","120","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("1");
            obj.set_text("계정연장 불승인");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_No");
            this.divPopBtn.addChild(obj.name, obj);

            obj = new Button("Button00_01","457.00","30","120","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("0");
            obj.set_text("계정연장 승인");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            this.divPopBtn.addChild(obj.name, obj);

            obj = new Button("Button00_05","217.00","10","120","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("3");
            obj.set_text("신청취소");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            obj.set_cssclass("btn_WF_No");
            obj.set_enable("false");
            this.divPopBtn.addChild(obj.name, obj);

            obj = new Button("Button00_00","217.00","10","120","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("4");
            obj.set_text("계정연장 신청");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_enable("false");
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
                p.pan01_01.set_taborder("11");
                p.pan01_01.set_type("vertical");
                p.pan01_01.set_flexgrow("1");
                p.pan01_01.set_minwidth("");
                p.pan01_01.move("10.00","98","300","86",null,null);

                p.staLabel00_00.set_taborder("0");
                p.staLabel00_00.set_text("신청인 계정 구분");
                p.staLabel00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00.move("10","98","100%","46",null,null);

                p.edt00_00.set_taborder("10");
                p.edt00_00.set_readonly("true");
                p.edt00_00.move("10.00","158","100%","40",null,null);

                p.pan01.set_taborder("12");
                p.pan01.set_horizontalgap("20");
                p.pan01.set_flexcrossaxiswrapalign("start");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_fittocontents("height");
                p.pan01.set_verticalgap("0");
                p.pan01.set_spacing("0px 20px 10px 20px");
                p.pan01.set_cssclass("pal_WF_DtlBg");
                p.pan01.move("0","60","100.00%","97",null,null);

                p.staLabel00_00_00.set_taborder("13");
                p.staLabel00_00_00.set_text("신청인 휴대전화번호");
                p.staLabel00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00_00.move("10","98","100%","46",null,null);

                p.pan02_01.set_taborder("14");
                p.pan02_01.set_type("vertical");
                p.pan02_01.set_flexgrow("1");
                p.pan02_01.set_minwidth("");
                p.pan02_01.move("10.00","98","300","86",null,null);

                p.pan02.set_taborder("15");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.set_tabledirection("vertical");
                p.pan02.move("0","60","100.00%","150",null,null);

                p.Panel01.set_taborder("47");
                p.Panel01.set_horizontalgap("20");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.move("90","217","100%","96",null,null);

                p.edtMblTelno.set_taborder("1");
                p.edtMblTelno.set_type("string");
                p.edtMblTelno.set_format("###-####-####");
                p.edtMblTelno.move("316","156","100%","40",null,null);

                p.staLabel00_00_02.set_taborder("16");
                p.staLabel00_00_02.set_text("신청인 ID");
                p.staLabel00_00_02.set_cssclass("sta_WF_Label");
                p.staLabel00_00_02.move("10","98","100%","46",null,null);

                p.edt00_00_02.set_taborder("17");
                p.edt00_00_02.set_readonly("true");
                p.edt00_00_02.move("10.00","158","100%","40",null,null);

                p.pan01_02.set_taborder("18");
                p.pan01_02.set_type("vertical");
                p.pan01_02.set_flexgrow("1");
                p.pan01_02.set_minwidth("");
                p.pan01_02.move("10.00","98","300","86",null,null);

                p.staLabel00_00_03.set_taborder("19");
                p.staLabel00_00_03.set_text("신청인명");
                p.staLabel00_00_03.set_cssclass("sta_WF_Label");
                p.staLabel00_00_03.move("10","98","100%","46",null,null);

                p.edt00_00_03.set_taborder("20");
                p.edt00_00_03.set_readonly("true");
                p.edt00_00_03.move("10.00","158","100%","40",null,null);

                p.pan01_03.set_taborder("21");
                p.pan01_03.set_type("vertical");
                p.pan01_03.set_flexgrow("1");
                p.pan01_03.set_minwidth("");
                p.pan01_03.move("10.00","98","300","86",null,null);

                p.pan02_02.set_taborder("22");
                p.pan02_02.set_type("vertical");
                p.pan02_02.set_flexgrow("1");
                p.pan02_02.set_flexcrossaxisalign("start");
                p.pan02_02.set_horizontalgap("10");
                p.pan02_02.set_spacing("10px 0p;x 0px 0px");
                p.pan02_02.set_flexcrossaxiswrapalign("start");
                p.pan02_02.set_flexmainaxisalign("end");
                p.pan02_02.set_minwidth("");
                p.pan02_02.move("10.00","98","300","86",null,null);

                p.staLabel00_00_00_02.set_taborder("23");
                p.staLabel00_00_00_02.set_text("신청인 이메일ID");
                p.staLabel00_00_00_02.set_cssclass("sta_WF_Label");
                p.staLabel00_00_00_02.move("10","98","100%","46",null,null);

                p.pan03_04.set_taborder("24");
                p.pan03_04.set_type("vertical");
                p.pan03_04.set_flexgrow("1");
                p.pan03_04.set_minwidth("");
                p.pan03_04.move("10.00","98","300","86",null,null);

                p.staLabel00_00_00_01_00.set_taborder("25");
                p.staLabel00_00_00_01_00.set_text("회사명");
                p.staLabel00_00_00_01_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00_00_01_00.move("10","98","100%","46",null,null);

                p.edtCoNm.set_taborder("3");
                p.edtCoNm.set_readonly("false");
                p.edtCoNm.move("10.00","158","100%","40",null,null);

                p.pan03_02.set_taborder("26");
                p.pan03_02.set_type("vertical");
                p.pan03_02.set_flexgrow("1");
                p.pan03_02.set_minwidth("");
                p.pan03_02.move("10.00","98","300","86",null,null);

                p.staLabel00_00_00_00_00.set_taborder("27");
                p.staLabel00_00_00_00_00.set_text("업종분류");
                p.staLabel00_00_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00_00_00_00.move("10","98","100%","46",null,null);

                p.pan03_03.set_taborder("28");
                p.pan03_03.set_type("vertical");
                p.pan03_03.set_flexgrow("1");
                p.pan03_03.set_minwidth("");
                p.pan03_03.move("10.00","98","300","86",null,null);

                p.pan03.set_taborder("29");
                p.pan03.set_horizontalgap("20");
                p.pan03.set_flexcrossaxiswrapalign("start");
                p.pan03.set_flexwrap("wrap");
                p.pan03.set_fittocontents("height");
                p.pan03.set_verticalgap("0");
                p.pan03.set_spacing("0px 20px 10px 20px");
                p.pan03.set_cssclass("pal_WF_DtlBg");
                p.pan03.move("0","60","100.00%","97",null,null);

                p.edtEml.set_taborder("2");
                p.edtEml.set_readonly("false");
                p.edtEml.move("10.00","158","100%","40",null,null);

                p.staLabel00_00_00_02_00.set_taborder("30");
                p.staLabel00_00_00_02_00.set_text("계약번호");
                p.staLabel00_00_00_02_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00_00_02_00.move("10","98","100%","46",null,null);

                p.pan04_01.set_taborder("31");
                p.pan04_01.set_type("vertical");
                p.pan04_01.set_flexgrow("1");
                p.pan04_01.set_minwidth("");
                p.pan04_01.move("10.00","98","300","86",null,null);

                p.staLabel00_00_00_01_00_00.set_taborder("32");
                p.staLabel00_00_00_01_00_00.set_text("호실번호");
                p.staLabel00_00_00_01_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00_00_01_00_00.move("10","98","100%","46",null,null);

                p.edtRmnmNo.set_taborder("6");
                p.edtRmnmNo.set_readonly("false");
                p.edtRmnmNo.move("10.00","158","100%","40",null,null);

                p.pan04_02.set_taborder("33");
                p.pan04_02.set_type("vertical");
                p.pan04_02.set_flexgrow("1");
                p.pan04_02.set_minwidth("");
                p.pan04_02.move("10.00","98","300","86",null,null);

                p.pan04.set_taborder("34");
                p.pan04.set_horizontalgap("20");
                p.pan04.set_flexcrossaxiswrapalign("start");
                p.pan04.set_flexwrap("wrap");
                p.pan04.set_fittocontents("height");
                p.pan04.set_verticalgap("0");
                p.pan04.set_spacing("0px 20px 10px 20px");
                p.pan04.set_cssclass("pal_WF_DtlBg");
                p.pan04.move("0","60","100.00%","97",null,null);

                p.edtCtrtNo.set_taborder("5");
                p.edtCtrtNo.set_readonly("false");
                p.edtCtrtNo.move("10.00","158","100%","40",null,null);

                p.staLabel00_00_01.set_taborder("35");
                p.staLabel00_00_01.set_text("연장기간");
                p.staLabel00_00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel00_00_01.move("10","98","100%","46",null,null);

                p.pan01_01_00.set_taborder("36");
                p.pan01_01_00.set_type("vertical");
                p.pan01_01_00.set_flexgrow("1");
                p.pan01_01_00.set_minwidth("");
                p.pan01_01_00.move("10.00","98","300","86",null,null);

                p.staLabel00_00_02_00.set_taborder("37");
                p.staLabel00_00_02_00.set_text("연장사유");
                p.staLabel00_00_02_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_00_02_00.move("10","98","100%","46",null,null);

                p.edtPrlgRsn.set_taborder("9");
                p.edtPrlgRsn.set_readonly("false");
                p.edtPrlgRsn.move("10.00","158","100%","40",null,null);

                p.pan01_02_00.set_taborder("38");
                p.pan01_02_00.set_type("vertical");
                p.pan01_02_00.set_flexgrow("2");
                p.pan01_02_00.set_minwidth("");
                p.pan01_02_00.move("10.00","98","620","86",null,null);

                p.pan01_00.set_taborder("39");
                p.pan01_00.set_horizontalgap("20");
                p.pan01_00.set_flexcrossaxiswrapalign("start");
                p.pan01_00.set_flexwrap("wrap");
                p.pan01_00.set_fittocontents("height");
                p.pan01_00.set_verticalgap("0");
                p.pan01_00.set_spacing("0px 20px 10px 20px");
                p.pan01_00.set_cssclass("pal_WF_DtlBg");
                p.pan01_00.move("0","60","100.00%","97",null,null);

                p.btnMblCert.set_taborder("40");
                p.btnMblCert.set_text("휴대폰 본인인증");
                p.btnMblCert.set_fittocontents("width");
                p.btnMblCert.move("1026","108","40%","40",null,null);

                p.btnSimpleCert.set_taborder("41");
                p.btnSimpleCert.set_text("간편인증");
                p.btnSimpleCert.set_fittocontents("width");
                p.btnSimpleCert.move("1226","120","40%","40",null,null);

                p.PanelGrdBtn01.set_taborder("42");
                p.PanelGrdBtn01.set_horizontalgap("10");
                p.PanelGrdBtn01.set_flexcrossaxisalign("end");
                p.PanelGrdBtn01.move("685","50","100%","40",null,null);

                p.Static00.set_taborder("43");
                p.Static00.set_text("~");
                p.Static00.set_cssclass("sta_WF_Dash");
                p.Static00.set_fittocontents("width");
                p.Static00.move("0","0","30","40",null,null);

                p.calEnd.set_taborder("8");
                p.calEnd.set_dateformat("yyyy-MM-dd");
                p.calEnd.move("0","0","48%","40",null,null);

                p.Panel00.set_taborder("44");
                p.Panel00.move("147","232","100%","45",null,null);

                p.edtTpbiz.set_taborder("4");
                p.edtTpbiz.set_readonly("false");
                p.edtTpbiz.move("10.00","158","100%","40",null,null);

                p.calStart.set_taborder("7");
                p.calStart.set_dateformat("yyyy-MM-dd");
                p.calStart.move("0","0","48%","40",null,null);

                p.sta05.set_taborder("45");
                p.sta05.set_text("계정연장 신청은 본인인증 후 가능합니다.");
                p.sta05.set_cssclass("sta_WF_Des");
                p.sta05.set_fittocontents("height");
                p.sta05.move("20","20","100%","40",null,null);

                p.pan02_04.set_taborder("46");
                p.pan02_04.set_fittocontents("height");
                p.pan02_04.set_type("vertical");
                p.pan02_04.move("20","150","100.00%","40",null,null);

                p.staLabel01_03_00.set_taborder("48");
                p.staLabel01_03_00.set_text("문자/카카오톡 알림 여부");
                p.staLabel01_03_00.set_cssclass("sta_WF_Label_E");
                p.staLabel01_03_00.move("10","98","100%","46",null,null);

                p.rdo03.set_taborder("49");
                p.rdo03.set_fittocontents("width");
                p.rdo03.set_innerdataset(divForm_form_Div01_form_rdo03_innerdataset);
                p.rdo03.set_codecolumn("codecolumn");
                p.rdo03.set_datacolumn("datacolumn");
                p.rdo03.set_columncount("2");
                p.rdo03.set_readonly("false");
                p.rdo03.set_value("Y");
                p.rdo03.set_index("0");
                p.rdo03.move("127","203","100%","40",null,null);

                p.pan04_03.set_taborder("50");
                p.pan04_03.set_type("vertical");
                p.pan04_03.set_horizontalgap("10");
                p.pan04_03.set_spacing("10px 0p;x 0px 0px");
                p.pan04_03.set_flexcrossaxisalign("start");
                p.pan04_03.set_flexgrow("1");
                p.pan04_03.set_visible("true");
                p.pan04_03.set_minwidth("");
                p.pan04_03.move("10.00","98","300","86",null,null);

                p.staLabel01_03_00_00.set_taborder("51");
                p.staLabel01_03_00_00.set_text("이메일 알림 여부");
                p.staLabel01_03_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel01_03_00_00.move("10","98","100%","46",null,null);

                p.rdo03_00.set_taborder("52");
                p.rdo03_00.set_fittocontents("width");
                p.rdo03_00.set_innerdataset(divForm_form_Div01_form_rdo03_00_innerdataset);
                p.rdo03_00.set_codecolumn("codecolumn");
                p.rdo03_00.set_datacolumn("datacolumn");
                p.rdo03_00.set_columncount("2");
                p.rdo03_00.set_readonly("false");
                p.rdo03_00.set_value("Y");
                p.rdo03_00.set_index("0");
                p.rdo03_00.move("127","203","100%","40",null,null);

                p.pan01_03_00.set_taborder("53");
                p.pan01_03_00.set_type("vertical");
                p.pan01_03_00.set_horizontalgap("10");
                p.pan01_03_00.set_spacing("10px 0p;x 0px 0px");
                p.pan01_03_00.set_flexcrossaxisalign("start");
                p.pan01_03_00.set_flexgrow("1");
                p.pan01_03_00.set_visible("true");
                p.pan01_03_00.set_minwidth("");
                p.pan01_03_00.move("10.00","98","300","86",null,null);
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

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div03.form
            obj = new Layout("default","",0,0,this.divForm.form.Div03.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel00_02_01_00.set_taborder("0");
                p.staLabel00_02_01_00.set_text("첨부파일");
                p.staLabel00_02_01_00.set_cssclass("sta_WF_Label");
                p.staLabel00_02_01_00.set_fittocontents("width");
                p.staLabel00_02_01_00.move("0","44","305","46",null,null);

                p.btn_file_1.set_taborder("1");
                p.btn_file_1.set_text("파일선택");
                p.btn_file_1.set_cssclass("btn_WF_FileUp");
                p.btn_file_1.set_fittocontents("width");
                p.btn_file_1.set_visible("true");
                p.btn_file_1.move("124","58","116","34",null,null);

                p.panBtnFile00_00.set_taborder("2");
                p.panBtnFile00_00.set_flexgrow("1");
                p.panBtnFile00_00.set_flexmainaxisalign("end");
                p.panBtnFile00_00.set_horizontalgap("10");
                p.panBtnFile00_00.move("433","58","305","46",null,null);

                p.panTitle00_00.set_taborder("3");
                p.panTitle00_00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00_00.set_flexwrap("wrap");
                p.panTitle00_00.set_fittocontents("height");
                p.panTitle00_00.move("0","124","100%","46",null,null);

                p.Static00_00_00.set_taborder("4");
                p.Static00_00_00.set_text("파일수 : ");
                p.Static00_00_00.set_fittocontents("width");
                p.Static00_00_00.move("88","123","48","46",null,null);

                p.Static01.set_taborder("5");
                p.Static01.set_text("0");
                p.Static01.set_fittocontents("width");
                p.Static01.move("165","143","9","46",null,null);

                p.Static02_00_00.set_taborder("6");
                p.Static02_00_00.set_text("개");
                p.Static02_00_00.set_fittocontents("width");
                p.Static02_00_00.move("293","131","13","46",null,null);

                p.panFileNum00_00.set_taborder("7");
                p.panFileNum00_00.set_flexgrow("1");
                p.panFileNum00_00.set_horizontalgap("4");
                p.panFileNum00_00.move("20","190","305","46",null,null);

                p.btn_del_file_1.set_taborder("8");
                p.btn_del_file_1.set_text("전체파일삭제");
                p.btn_del_file_1.set_cssclass("btn_WF_FileDel");
                p.btn_del_file_1.set_fittocontents("width");
                p.btn_del_file_1.set_visible("false");
                p.btn_del_file_1.move("512","135","125","34",null,null);

                p.panBtnDel00_00.set_taborder("9");
                p.panBtnDel00_00.set_flexcrossaxisalign("center");
                p.panBtnDel00_00.set_flexmainaxisalign("end");
                p.panBtnDel00_00.set_flexgrow("1");
                p.panBtnDel00_00.move("517","141","305","46",null,null);

                p.Panel00_00_00.set_taborder("10");
                p.Panel00_00_00.move("20","51","100%","46",null,null);

                p.panFile02.set_taborder("11");
                p.panFile02.set_fittocontents("height");
                p.panFile02.set_spacing("10px 20px 10px 20px");
                p.panFile02.set_flexwrap("wrap");
                p.panFile02.set_cssclass("pal_WF_DtlBg");
                p.panFile02.set_verticalgap("4");
                p.panFile02.move("0","50","100.00%","241",null,null);

                p.pan01.set_taborder("12");
                p.pan01.set_horizontalgap("20");
                p.pan01.set_flexcrossaxiswrapalign("start");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_fittocontents("height");
                p.pan01.set_verticalgap("0");
                p.pan01.set_spacing("10px 20px 10px 20px");
                p.pan01.set_cssclass("pal_WF_DtlBg");
                p.pan01.move("0","60","100.00%","141",null,null);

                p.sta00.set_taborder("13");
                p.sta00.set_text("필요 증빙자료 : 공항 입주 관련 계약 증빙 서류, 사업자등록증\r\n- 사업자등록증의 사업자등록번호와 입주자증명서류(임대계약서, 낙찰증명서 등)에 있는 사업자등록번호가 동일해야 합니다.\r\n- (중요)재직증명서 내 주민등록번호, 생년월일, 자택주소는 삭제(마스킹)하셔야 하며, 삭제(마스킹)하지 않고 가입신청 시 불승인 처리됩니다.\r\n- 임대계약서, 낙찰증명서 등 (인천국제공항공사와 계약된 서류만 가능)\r\n- 이동지역 관련 양사 계약 증빙 서류는 이동지역 회사 및 실제 소속 회사간 계약관련 증빙 서류만 인정\r\n");
                p.sta00.set_cssclass("sta_WF_Des");
                p.sta00.set_fittocontents("height");
                p.sta00.move("0","146","100.00%","120",null,null);

                p.Grid01.set_taborder("14");
                p.Grid01.set_binddataset("dsFile1");
                p.Grid01.set_autofittype("col");
                p.Grid01.set_cssclass("grd_WF_FileAdd");
                p.Grid01.move("20.00","114","100%","120",null,null);
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
                p.pan00.set_taborder("0");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("10px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.move("90","178","100.00%","200",null,null);

                p.edt00_02.set_taborder("1");
                p.edt00_02.set_readonly("true");
                p.edt00_02.set_value("개인정보 수집 및 이용 관련 안내문 및 동의 여부 체크");
                p.edt00_02.move("60","78","100%","150",null,null);

                p.staLabel01_00_01.set_taborder("2");
                p.staLabel01_00_01.set_text("개인정보(필수) 사용동의여부");
                p.staLabel01_00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel01_00_01.move("10","98","100%","46",null,null);

                p.rdoEsntl.set_taborder("7");
                p.rdoEsntl.set_fittocontents("width");
                p.rdoEsntl.set_innerdataset(divForm_form_Div04_form_rdoEsntl_innerdataset);
                p.rdoEsntl.set_codecolumn("codecolumn");
                p.rdoEsntl.set_datacolumn("datacolumn");
                p.rdoEsntl.set_columncount("2");
                p.rdoEsntl.set_value("Y");
                p.rdoEsntl.set_index("0");
                p.rdoEsntl.move("127","203","100%","40",null,null);

                p.Panel01_00.set_taborder("3");
                p.Panel01_00.set_type("vertical");
                p.Panel01_00.set_flexgrow("1");
                p.Panel01_00.set_fittocontents("height");
                p.Panel01_00.move("10.00","98","300","86",null,null);

                p.staLabel01_00_01_00_00.set_taborder("4");
                p.staLabel01_00_01_00_00.set_text("개인정보(선택) 사용동의여부");
                p.staLabel01_00_01_00_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00_01_00_00.move("10","98","100%","46",null,null);

                p.rdoChc.set_taborder("8");
                p.rdoChc.set_fittocontents("width");
                p.rdoChc.set_innerdataset(divForm_form_Div04_form_rdoChc_innerdataset);
                p.rdoChc.set_codecolumn("codecolumn");
                p.rdoChc.set_datacolumn("datacolumn");
                p.rdoChc.set_columncount("2");
                p.rdoChc.set_value("Y");
                p.rdoChc.set_index("0");
                p.rdoChc.move("127","203","100%","40",null,null);

                p.Panel01_00_00.set_taborder("5");
                p.Panel01_00_00.set_type("vertical");
                p.Panel01_00_00.set_flexgrow("1");
                p.Panel01_00_00.set_verticalgap("5");
                p.Panel01_00_00.set_fittocontents("height");
                p.Panel01_00_00.move("10.00","98","300","86",null,null);

                p.pan04.set_taborder("6");
                p.pan04.set_horizontalgap("20");
                p.pan04.set_flexcrossaxiswrapalign("start");
                p.pan04.set_flexwrap("wrap");
                p.pan04.set_fittocontents("height");
                p.pan04.set_verticalgap("0");
                p.pan04.set_spacing("0px 20px 10px 20px");
                p.pan04.set_flexgrow("1");
                p.pan04.move("0","60","100.00%","96",null,null);

                p.sta05.set_taborder("9");
                p.sta05.set_text("(선택 동의 항목은 동의하지 않으셔도 신청이 가능합니다.)");
                p.sta05.set_cssclass("sta_WF_Des");
                p.sta05.set_fittocontents("height");
                p.sta05.move("20","20","100%","40",null,null);

                p.Panel04_02_00_00_00.set_taborder("10");
                p.Panel04_02_00_00_00.set_spacing("0px 20px 0px 20px");
                p.Panel04_02_00_00_00.set_fittocontents("height");
                p.Panel04_02_00_00_00.set_type("vertical");
                p.Panel04_02_00_00_00.move("20","150","100.00%","40",null,null);

                p.Panel04.set_taborder("11");
                p.Panel04.set_type("vertical");
                p.Panel04.set_cssclass("pal_WF_DtlBg");
                p.Panel04.set_fittocontents("height");
                p.Panel04.set_spacing("0px 0px 10px 0px ");
                p.Panel04.set_tabledirection("vertical");
                p.Panel04.move("0","560","100%","146",null,null);
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
            //-- Default Layout : this.divForm.form.Div05.form
            obj = new Layout("default","",0,0,this.divForm.form.Div05.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staPrcsSttsCd.set_taborder("0");
                p.staPrcsSttsCd.set_text("처리상태");
                p.staPrcsSttsCd.set_cssclass("sta_WF_Label");
                p.staPrcsSttsCd.move("10","98","100%","46",null,null);

                p.pan01.set_taborder("1");
                p.pan01.set_type("vertical");
                p.pan01.set_flexgrow("1");
                p.pan01.move("10.00","98","300","86",null,null);

                p.staPrcrNm.set_taborder("2");
                p.staPrcrNm.set_text("처리자");
                p.staPrcrNm.set_cssclass("sta_WF_Label");
                p.staPrcrNm.move("10","98","100%","46",null,null);

                p.edtPrcrNm.set_taborder("3");
                p.edtPrcrNm.set_readonly("true");
                p.edtPrcrNm.move("10.00","158","100%","40",null,null);

                p.pan02.set_taborder("4");
                p.pan02.set_type("vertical");
                p.pan02.set_flexgrow("1");
                p.pan02.move("10.00","98","300","86",null,null);

                p.pan00.set_taborder("5");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("0px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.set_type("horizontal");
                p.pan00.move("0","60","100.00%","96",null,null);

                p.staPrcsDsctn.set_taborder("6");
                p.staPrcsDsctn.set_text("처리내역");
                p.staPrcsDsctn.set_cssclass("sta_WF_Label");
                p.staPrcsDsctn.move("10","98","100%","46",null,null);

                p.edtPrcsDsctn.set_taborder("7");
                p.edtPrcsDsctn.set_readonly("true");
                p.edtPrcsDsctn.move("10.00","158","100%","110",null,null);

                p.pan02_02.set_taborder("8");
                p.pan02_02.set_type("vertical");
                p.pan02_02.set_flexgrow("1");
                p.pan02_02.move("10.00","98","300","100%",null,null);

                p.pan03.set_taborder("9");
                p.pan03.set_horizontalgap("20");
                p.pan03.set_flexcrossaxiswrapalign("start");
                p.pan03.set_flexwrap("wrap");
                p.pan03.set_fittocontents("height");
                p.pan03.set_verticalgap("0");
                p.pan03.set_spacing("0px 20px 10px 20px");
                p.pan03.set_cssclass("pal_WF_DtlBg");
                p.pan03.move("0","60","100.00%","170",null,null);

                p.edtPrcsSttsCd.set_taborder("10");
                p.edtPrcsSttsCd.set_readonly("true");
                p.edtPrcsSttsCd.move("10.00","158","100%","40",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div05.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div05.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div05.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div05.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.sub_tit01.set_taborder("4");
                p.sub_tit01.set_background("#ffffff");
                p.sub_tit01.set_flexcrossaxisalign("end");
                p.sub_tit01.set_minheight("70");
                p.sub_tit01.set_maxheight("");
                p.sub_tit01.move("0","0","100%","70",null,null);

                p.Div01.set_taborder("0");
                p.Div01.set_text("Div00");
                p.Div01.set_cssclass("div_WF_Bg");
                p.Div01.set_fittocontents("height");
                p.Div01.move("0","0","100.00%","550",null,null);

                p.staSubTitle02_00.set_taborder("1");
                p.staSubTitle02_00.set_text("기본정보");
                p.staSubTitle02_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00.move("30","50","100%","50",null,null);

                p.btnMinAplyInfo.set_taborder("2");
                p.btnMinAplyInfo.set_cssclass("btn_WF_ACMinus");
                p.btnMinAplyInfo.move("1390.00","18","34","34",null,null);

                p.Panel01_02.set_taborder("3");
                p.Panel01_02.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02.set_spacing("0px 20px");
                p.Panel01_02.set_horizontalgap("10");
                p.Panel01_02.set_flexcrossaxisalign("center");
                p.Panel01_02.set_flexmainaxisalign("end");
                p.Panel01_02.move("710.00","50","100%","50",null,null);

                p.staSubTitle02_00_00_00.set_taborder("5");
                p.staSubTitle02_00_00_00.set_text("증빙 자료");
                p.staSubTitle02_00_00_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_00_00.move("30","50","100%","50",null,null);

                p.btnMinAtfl.set_taborder("6");
                p.btnMinAtfl.set_cssclass("btn_WF_ACMinus");
                p.btnMinAtfl.move("1390.00","18","34","34",null,null);

                p.Panel01_02_00_00.set_taborder("7");
                p.Panel01_02_00_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_00_00.set_spacing("0px 20px");
                p.Panel01_02_00_00.set_horizontalgap("10");
                p.Panel01_02_00_00.set_flexcrossaxisalign("center");
                p.Panel01_02_00_00.set_flexmainaxisalign("end");
                p.Panel01_02_00_00.move("710.00","50","100%","50",null,null);

                p.sub_tit03.set_taborder("8");
                p.sub_tit03.set_background("#ffffff");
                p.sub_tit03.set_flexcrossaxisalign("end");
                p.sub_tit03.set_minheight("70");
                p.sub_tit03.set_maxheight("");
                p.sub_tit03.move("0","0","100%","70",null,null);

                p.Div03.set_taborder("9");
                p.Div03.set_text("Div00");
                p.Div03.set_cssclass("div_WF_Bg");
                p.Div03.set_fittocontents("height");
                p.Div03.move("0","0","100%","382",null,null);

                p.staSubTitle02_00_00_00_00.set_taborder("10");
                p.staSubTitle02_00_00_00_00.set_text("개인정보 수집·이용 동의");
                p.staSubTitle02_00_00_00_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_00_00_00.move("30","50","100%","50",null,null);

                p.btnMinAgre.set_taborder("11");
                p.btnMinAgre.set_cssclass("btn_WF_ACMinus");
                p.btnMinAgre.move("1390.00","18","34","34",null,null);

                p.Panel01_02_00_00_00.set_taborder("12");
                p.Panel01_02_00_00_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_00_00_00.set_spacing("0px 20px");
                p.Panel01_02_00_00_00.set_horizontalgap("10");
                p.Panel01_02_00_00_00.set_flexcrossaxisalign("center");
                p.Panel01_02_00_00_00.set_flexmainaxisalign("end");
                p.Panel01_02_00_00_00.move("710.00","50","100%","50",null,null);

                p.sub_tit04.set_taborder("13");
                p.sub_tit04.set_background("#ffffff");
                p.sub_tit04.set_flexcrossaxisalign("end");
                p.sub_tit04.set_minheight("70");
                p.sub_tit04.set_maxheight("");
                p.sub_tit04.move("0","0","100%","70",null,null);

                p.Div04.set_taborder("14");
                p.Div04.set_text("Div00");
                p.Div04.set_cssclass("div_WF_Bg");
                p.Div04.set_fittocontents("height");
                p.Div04.move("0","0","100%","350",null,null);

                p.staSubTitle02_00_00_00_00_00.set_taborder("15");
                p.staSubTitle02_00_00_00_00_00.set_text("처리내역");
                p.staSubTitle02_00_00_00_00_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_00_00_00_00.move("30","50","100%","50",null,null);

                p.btnMinPrcsDsctn.set_taborder("16");
                p.btnMinPrcsDsctn.set_cssclass("btn_WF_ACMinus");
                p.btnMinPrcsDsctn.set_text("");
                p.btnMinPrcsDsctn.move("1390.00","18","34","34",null,null);

                p.Panel01_02_00_00_00_00.set_taborder("17");
                p.Panel01_02_00_00_00_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_00_00_00_00.set_spacing("0px 20px");
                p.Panel01_02_00_00_00_00.set_horizontalgap("10");
                p.Panel01_02_00_00_00_00.set_flexcrossaxisalign("center");
                p.Panel01_02_00_00_00_00.set_flexmainaxisalign("end");
                p.Panel01_02_00_00_00_00.move("710.00","50","100%","50",null,null);

                p.sub_tit05.set_taborder("18");
                p.sub_tit05.set_background("#ffffff");
                p.sub_tit05.set_flexcrossaxisalign("end");
                p.sub_tit05.set_minheight("70");
                p.sub_tit05.set_maxheight("");
                p.sub_tit05.move("0","0","100%","70",null,null);

                p.Div05.set_taborder("19");
                p.Div05.set_text("Div00");
                p.Div05.set_cssclass("div_WF_Bg");
                p.Div05.set_fittocontents("height");
                p.Div05.move("0","0","100%","266",null,null);
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
                p.Button00_03.set_taborder("2");
                p.Button00_03.set_text("서류보완");
                p.Button00_03.set_fittocontents("width");
                p.Button00_03.set_visible("true");
                p.Button00_03.set_cssclass("btn_WF_No");
                p.Button00_03.move("217.00","10","120","40",null,null);

                p.Button00_02.set_taborder("1");
                p.Button00_02.set_text("계정연장 불승인");
                p.Button00_02.set_fittocontents("width");
                p.Button00_02.set_visible("true");
                p.Button00_02.set_cssclass("btn_WF_No");
                p.Button00_02.move("217.00","10","120","40",null,null);

                p.Button00_01.set_taborder("0");
                p.Button00_01.set_text("계정연장 승인");
                p.Button00_01.set_cssclass("btn_WF_Yes");
                p.Button00_01.set_fittocontents("width");
                p.Button00_01.set_visible("true");
                p.Button00_01.move("457.00","30","120","40",null,null);

                p.Button00_05.set_taborder("3");
                p.Button00_05.set_text("신청취소");
                p.Button00_05.set_fittocontents("width");
                p.Button00_05.set_visible("false");
                p.Button00_05.set_cssclass("btn_WF_No");
                p.Button00_05.set_enable("false");
                p.Button00_05.move("217.00","10","120","40",null,null);

                p.Button00_00.set_taborder("4");
                p.Button00_00.set_text("계정연장 신청");
                p.Button00_00.set_fittocontents("width");
                p.Button00_00.set_visible("true");
                p.Button00_00.set_cssclass("btn_WF_Yes");
                p.Button00_00.set_enable("false");
                p.Button00_00.move("217.00","10","120","40",null,null);
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
            obj = new Layout("default","Desktop_screen",1480,1900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("계정연장 신청/승인 관리");

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
                p.divPopBtn.move("20",null,null,"60","20","0");
            	}
            );
            obj.set_mobileorientation("Portrait");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divForm.form.Div01.form.calEnd","value","dsGet","prlgDmndEndYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.Div01.form.edtEml","value","dsGet","eml");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.Div01.form.edtCoNm","value","dsGet","coNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.Div01.form.edtCtrtNo","value","dsGet","ctrtNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divForm.form.Div01.form.edtRmnmNo","value","dsGet","rmnmNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divForm.form.Div01.form.edtPrlgRsn","value","dsGet","prlgRsn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divForm.form.Div04.form.rdoEsntl","value","dsGet","esntlAgreYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divForm.form.Div04.form.rdoChc","value","dsGet","chcAgreYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divForm.form.Div01.form.edt00_00","value","dsGet","acntSe");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divForm.form.Div01.form.edt00_00_02","value","dsGet","userId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divForm.form.Div01.form.edt00_00_03","value","dsGet","userNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.Div01.form.edtTpbiz","value","dsGet","tpbiz");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divForm.form.Div01.form.calStart","value","dsGet","prlgDmndBgngYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divForm.form.Div05.form.edtPrcrNm","value","dsGet","prcrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divForm.form.Div05.form.edtPrcsDsctn","value","dsGet","prcsDsctn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divForm.form.Div01.form.edtMblTelno","value","dsGet","mblTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.Div05.form.edtPrcsSttsCd","value","dsGet","prcsSttsNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divForm.form.Div01.form.rdo03","value","dsGet","smsRcptnYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divForm.form.Div01.form.rdo03_00","value","dsGet","emlRcptnYn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("COM024P16.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	COM024P16.xfdl
        *  @Creator 	ELUON INS
        *  @CreateDate 	2024/11/19
        *  @Desction
        *  @Author
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/11/19			조규완					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        this.param;
        this.type = "APLY";
        this.validateColumn = [];
        var cMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수
        	// 전달받은 파라메터 팝업창과 페이지오픈으로 파라메터 불러오는 방식이 달라짐
        	if(this.opener)
        	{
        		this.param = {
        			"id" : this.getOwnerFrame().id
        		}
        	} else
        	{
        		this.param = this.getOwnerFrame().form.fvObjArgs;
        	}
        	this.fnInit();

        	this.validateColumn.push({"title" : "연장시작기간", "com": this.divForm.form.Div01.form.calStart});
        	this.validateColumn.push({"title" : "연장종료기간", "com": this.divForm.form.Div01.form.calEnd});
        	this.validateColumn.push({"title" : "연장사유", "com": this.divForm.form.Div01.form.edtPrlgRsn});
        	this.validateColumn.push({"title" : "문자/카카오톡 알림 여부", "com": this.divForm.form.Div01.form.rdo03});
        	this.validateColumn.push({"title" : "이메일 알림 여부", "com": this.divForm.form.Div01.form.rdo03_00});
        	this.validateColumn.push({"title" : "개인정보(필수) 사용동의여부", "com": this.divForm.form.Div04.form.rdoEsntl});
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
         	var sWinId = this.objApp.gdsOpenMenu.lookupAs(this.FRAME_MENUCOLUMNS.menuId, cMenuId.substring(0, 14), this.FRAME_MENUCOLUMNS.winId);
         	var objForm = this.objApp.gvFrsWork.all[sWinId];
        	objForm.form.divWork.form.cfnSearch(1);
        };
        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.selectTransaction = function()
        {
        	var strSvcId    = "select";
        	var strSvcUrl   = "sysMng/acntPrlgAplyInfoInq.do";
        	var inData      = "";
        	var outData     = "dsGet=dsGet dsFile1=dsFile1";
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

        this.selectLoginInfoTransaction = function()
        {
        	var strSvcId    = "loginInfo";
        	var strSvcUrl   = "member/loginInfoInq.do";
        	var inData      = "";
        	var outData     = "dsGet=dsGet";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc, 	// transaction의 결과를 받을 Function 이름
        						isAsync); 		// 비동기통신 여부 [생략가능]
        }

        // 데이터 저장
        this.saveTransaction = function()
        {
        	var strSvcId    = "save";
        	var strSvcUrl   = "sysMng/acntPrlgAplyAprvInfoStrg.do";
        	var inData      = "dsGet=dsGet dsFile=dsFile";
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

        			this.dsFile.insertRow();
        			this.dsFile.setColumn(0, "atflMngNo", this.dsFile1.getColumn(0, "atflMngNo"));
        			this.dsFile.setColumn(0, "colId", this.dsFile1.getColumn(0, "colId"));
        			this.divForm.form.Div03.form.Static01.text = this.dsFile1.rowcount;

        			this.fnGetSetting();
        			break;
        		case "loginInfo":
        			this.fnGetSetting();
        			break;
        		case "save":
        			var gvRetMsg = this.objApp.getVariable("gvRetMsg");
        			this.gfnAlertMsg("save", gvRetMsg, "msgCallback");
        			if (this.type == "APRV") {
        				if (this.dsGet.getColumn(0, "emlRcptnYn") == "Y") {
        					//this.fnSendEml();
        				}
        				if (this.dsGet.getColumn(0, "smsRcptnYn") == "Y") {
        					//this.fnSendSms();
        				}
        			}

        			if(this.opener) {
        				this.close();
        			} else {
        				var cMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        				this.gfnCloseMenu(cMenuId);
        			}
        			break;
        		case "uploadComplete":
        			// 파일 업로드가 완료 된 후 첨부파일 과 같이 데이터 저장
        			this.saveTransaction();
        			break;
        		case "combo3":
        			var prcsSttsCd = this.dsGet.getColumn(0, "prcsSttsCd");
        			var nRow = this.dsCombo3.findRow("cdId", prcsSttsCd);
        			var cdNm = this.dsGet.getColumn(nRow, "cdNm");
        			this.divForm.form.Div05.form.edtPrcsSttsCd.value = cdNm;
        			break;
        	}
        };

        this.msgCallback = function(sPopupId, sRtn)
        {
        	var oRtn = JSON.parse(sRtn);

        	if(sPopupId == "save_confirm") {
        		if(oRtn.result == "Y") {
        			var obj = {
        				"bsnsSeCd" : "sysMng",			// 업무구분코드
        				"prgrmId" : "COM024P16" 	// 프로그램ID (화면 ID)
        			}
        			var str = JSON.stringify(obj);
        			this.RaonkUpload.AddFormData('params', str);
        			this.RaonkUpload.Transfer();
        		}
        	} else if(sPopupId == "save") {
        		if(this.opener) {
        			this.close();
        		} else {
        			var cMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        			this.gfnCloseMenu(cMenuId);
        		}
        	} else if(sPopupId == "file_all_del1") {
        		this.gfnDeleteAllFile(this.RaonkUpload, this.dsFile1);
        	} else if(sPopupId == "file_del1") {
        		this.gfnDeleteFile(this.RaonkUpload, this.dsFile1, oRtn.paramArg);
        	}
        };

        this.fnPopupCallback = function(sPopupId, sRtn)
        {
        	if (this.gfnIsNull(sRtn)) return;

        	var objRtn = JSON.parse(sRtn);
        	if(sPopupId =="withAuth") {
        		this.fnCertInfo(objRtn);
        	} else if(sPopupId =="hpAuth") {
        		this.fnCertInfo(objRtn);
        	}
        };

        //API 콜백은 업데이트 중
        this.apiCallback = function(svcID, ret)
        {
        	switch(svcID) {
        		case "outsideMail":
        			this.gfnAlertMsg("outsideMail", "MSG_027", "", "msgCallback");

        			break;
        		case "sms":
        			this.gfnAlertMsg("insideMail", "MSG_027", "", "msgCallback");

        			break;
        	}
        }
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	this.type = "APLY";
        	if(this.param != null && this.param.id != null && this.param.id != '') {
        		this.selectTransaction();
        	} else {
        		this.selectLoginInfoTransaction();
        	}
        };

        this.fnCertInfo = function(objRtn)
        {
        	var userNm = this.objApp.gdsUser.getColumn(0, "userNm");
        	var userMblTelno = this.objApp.gdsUser.getColumn(0, "userMblTelno");
        	if (userNm == objRtn.name && userMblTelno == objRtn.phone) {
        		this.dsGet.setColumn(0, "mblTelno", objRtn.phone);
        		this.divPopBtn.form.Button00_00.enable = true;
        		this.divPopBtn.form.Button00_05.enable = true;
        	} else {
        		this.gfnAlertMsg("msg", "MSG_011", ["본인인증이 일치하지 않습니다."]);
        	}
        }

        this.fnGetSetting = function()
        {
        	var idAplySe = this.dsGet.getColumn(0, "idAplySeNm");
        	var idAplyType = this.dsGet.getColumn(0, "idAplyTypeNm");
        	var acntSe = "";

        	if (this.gfnIsNull(this.dsGet.getColumn(0, "prcsSttsNm"))) {
        		this.dsGet.setColumn(0, "prcsSttsNm", "신청중");
        	}

        	if (!this.gfnIsNull(idAplySe)) {
        		acntSe = idAplySe;

        		if (!this.gfnIsNull(idAplyType)) {
        			acntSe = acntSe + "/" + idAplyType;
        		}
        	}

        	this.dsGet.addColumn("acntSe", "STRING", 256);
        	this.dsGet.setColumn(0, "acntSe", acntSe);
        	this.dsGet.setColumn(0, "prvcAgreDocId", "AGDOC_20240701_000001");
        	this.dsGet.addColumn("prcsSeCd", "STRING", 256);

        	var gdsUserId = this.objApp.gdsUser.getColumn(0, "userId");
        	var prcsSttsCd = this.dsGet.getColumn(0, "prcsSttsCd");
        	if(this.param != null && this.param.id != null && this.param.id != '') {
        		if (!this.gfnIsNull(prcsSttsCd) && prcsSttsCd != "TIDSTATUS003") {
        			this.fnSetModeRead();
        		} else if (gdsUserId == this.dsGet.getColumn(0, "userId")) {
        			this.fnSetModeAply()
        		} else if (this.param.type == "PRCR" || this.param.type == "MNGR" || this.param.type == "ADMIN") {
        			this.fnSetModeAprv();
        		} else {
        			this.fnSetModeRead();
        		}
        	} else {
        		this.fnSetModeAply();
        	}
        }

        this.fnSetModeRead = function()
        {
        	this.fnSetModeCom();
        	this.divPopBtn.form.Button00_00.visible = false;
        	this.divPopBtn.form.Button00_05.visible = false;
        	this.divPopBtn.form.Button00_01.enable = false;
        	this.divPopBtn.form.Button00_02.enable = false;
        	this.divPopBtn.form.Button00_03.enable = false;
        }

        this.fnSetModeAprv = function()
        {
        	this.fnSetModeCom();
        	this.divForm.form.Div05.form.edtPrcsDsctn.readonly = false;
        	this.divPopBtn.form.Button00_00.visible = false;
        	this.divPopBtn.form.Button00_05.visible = false;
        	this.dsGet.addColumn("type", "string", "256");
        	this.dsGet.setColumn(0, "type", "aprvEnd");
        }

        this.fnSetModeAply = function()
        {
        	this.divForm.form.sub_tit05.visible = false;
        	this.divForm.form.Div05.visible = false;
        	this.divPopBtn.form.Button00_01.visible = false;
        	this.divPopBtn.form.Button00_02.visible = false;
        	this.divPopBtn.form.Button00_03.visible = false;
        	if (this.param != null && this.param.id != null && this.param.id != '') {
        		this.divPopBtn.form.Button00_05.visible = true;
        	}
        }

        this.fnSetModeCom = function()
        {
        	this.divForm.form.Div01.form.edtMblTelno.readonly = true;
        	this.divForm.form.Div01.form.edtEml.readonly = true;
        	this.divForm.form.Div01.form.edtCoNm.readonly = true;
        	this.divForm.form.Div01.form.edtTpbiz.readonly = true;
        	this.divForm.form.Div01.form.edtCtrtNo.readonly = true;
        	this.divForm.form.Div01.form.edtRmnmNo.readonly = true;
        	this.divForm.form.Div01.form.calStart.readonly = true;
        	this.divForm.form.Div01.form.calEnd.readonly = true;
        	this.divForm.form.Div01.form.edtPrlgRsn.readonly = true;
        	this.divForm.form.Div01.form.rdo03.readonly = true;
        	this.divForm.form.Div01.form.rdo03_00.readonly = true;
        	this.divForm.form.Div04.form.rdoEsntl.readonly = true;
        	this.divForm.form.Div04.form.rdoChc.readonly = true;

        	this.divForm.form.Div01.form.btnMblCert.visible = false;
        	this.divForm.form.Div01.form.btnSimpleCert.visible = false;
        	this.divForm.form.Div01.form.pan02_04.visible = false;

        	this.divForm.form.Div03.form.btn_file_1.visible = false;
        	this.divForm.form.Div03.form.btn_del_file_1.visible = false;
        	this.divForm.form.Div03.form.Grid01.deleteContentsCol("right", 1);
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

        	var from = "81014uuu";
        	var to = "81014uuu";
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

        // 파일 추가
        this.divForm_Div03_btn_file_1_onclick = function(obj,e)
        {
        	// 데이터의 첨부파일 관리번호 입력 컬럼명
        	this.gvUploadCategory = "attfiles";		// 컬럼ID
        	this.RaonkUpload.OpenFileDialog();
        };

        // 파일 그리드 클릭 이벤트
        this.divForm_Div03_Grid01_oncellclick = function(obj,e)
        {

        	if(e.col == 1) 	// 삭제 버튼 클릭
        	{
        		var param = {
        			"row" : e.row,
        			"col" : e.col
        		};
        		this.gfnConfirmMsg("file_del1", "MSG_002", "msgCallback", ["확인", "취소"], ["Y", "N"], param);
        	} else if(e.col == 0) // 파일명 클릭
        	{
        		this.gfnSelectFile(this.RaonkUpload, this.dsFile1, e);
        	}
        };

        // 파일 그리드 더블클릭 이벤트
        this.divForm_Div03_Grid01_oncelldblclick = function(obj,e)
        {
        	if(e.col == 0) 	// 파일명을 더블클릭 시 다운로드
        	{
        		this.gfnDownloadFile(this.RaonkUpload, this.dsFile1, e);
        	}
        };

        this.divForm_Div03_btn_del_file_1_onclick = function(obj,e)
        {
        	this.gfnConfirmMsg("file_all_del1", "MSG_002", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divForm_Div01_btnMblCert_onclick = function(obj,e)
        {
        	var sTitle = "본인인증";		// 팝업 파이틀
        	var objArg   = {};			// 팝업창에 보낸 파라메터

        	var objOption = {
        		popuptype: "modal"	//modal,modaless
         		, width: 0			// 팝업창 width
         		, height: 0			// 팝업창 height
        		, autosize: false		// 사이즈 자동 여부
        		, title: sTitle			// 팝업타이틀
        		, resize: false			// 사이즈 조정 여부
        		, titlebar: false		// 팝업 타이틀바 여부
        	};
        	var sPopupCallBack = "fnPopupCallback";		// 콜백명

        	this.gfnOpenPopup("hpAuth"		// 팝업ID
        	, "work::COM/cert/hpAuthPopup.xfdl"	// 팝업 호출 화면
        	, objArg, sPopupCallBack, objOption);
        };

        this.divForm_Div01_btnSimpleCert_onclick = function(obj,e)
        {
        	var sTitle = "간편인증";		// 팝업 파이틀
        	var objArg   = {};			// 팝업창에 보낸 파라메터

        	var objOption = {
        		popuptype: "modal"		//modal,modaless
        // 		, width: 700			// 팝업창 width
        // 		, height: 700			// 팝업창 height
        		, autosize: false		// 사이즈 자동 여부
        		, title: sTitle			// 팝업타이틀
        		, resize: false			// 사이즈 조정 여부
        		, titlebar: true		// 팝업 타이틀바 여부
        	};
        	var sPopupCallBack = "fnPopupCallback";		// 콜백명

        	this.gfnOpenPopup("withAuth" , "work::COM/cert/withAuthPopup.xfdl", objArg, sPopupCallBack, objOption);
        };

        this.divPopBtn_Button00_00_onclick = function(obj,e)
        {
        	if(this.gfnDsIsValidated(this.validateColumn)) {
        		var jobCd = this.dsGet.getColumn(0, "jobCd");
        		if (!this.gfnIsNull(jobCd) && jobCd == "TAS20022") {
        			this.dsGet.setColumn(0, "prcsSeCd", "CTL20022");
        		} else {
        			this.dsGet.setColumn(0, "prcsSeCd", "CTL20021");
        		}
        		this.dsGet.setColumn(0, "prcsSttsCd", "");
        		this.gfnConfirmMsg("save_confirm", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"], null);
        	}
        };

        this.divPopBtn_Button00_05_onclick = function(obj,e)
        {
        	this.dsGet.setColumn(0, "prcsSeCd", "CTL20023");
        	this.dsGet.setColumn(0, "prcsSttsCd", "TIDSTATUS004");
        	this.gfnConfirmMsg("save_confirm", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"], null);
        };

        this.divPopBtn_Button00_01_onclick = function(obj,e)
        {
        	this.type = "APRV";
        	this.dsGet.setColumn(0, "prcsSeCd", "CTL20025");
        	this.dsGet.setColumn(0, "prcsSttsCd", "TIDSTATUS001");
        	this.dsGet.setColumn(0, "prcsSttsNm", "승인");
        	this.gfnConfirmMsg("save_confirm", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"], null);
        };

        this.divPopBtn_Button00_02_onclick = function(obj,e)
        {
        	this.type = "APRV";
        	this.dsGet.setColumn(0, "prcsSeCd", "CTL20026");
        	this.dsGet.setColumn(0, "prcsSttsCd", "TIDSTATUS002");
        	this.dsGet.setColumn(0, "prcsSttsNm", "불승인");
        	this.gfnConfirmMsg("save_confirm", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"], null);
        };

        this.divPopBtn_Button00_03_onclick = function(obj,e)
        {
        	this.type = "APRV";
        	this.dsGet.setColumn(0, "prcsSeCd", "CTL20027");
        	this.dsGet.setColumn(0, "prcsSttsCd", "TIDSTATUS003");
        	this.dsGet.setColumn(0, "prcsSttsNm", "서류보완");
        	this.gfnConfirmMsg("save_confirm", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"], null);
        };

        this.dsFile1_onvaluechanged = function(obj,e)
        {
        	this.divForm.form.Div03.form.Static01.text = this.dsFile1.rowcount;
        	if (this.dsFile1.rowcount > 0) {
        		this.divForm.form.Div03.form.btn_del_file_1.visible = true;
        	} else {
        		this.divForm.form.Div03.form.btn_del_file_1.visible = false;
        	}
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
        	} else if(objNm == "btnMinAtfl") {
        		objDiv = this.divForm.form.Div03;
        	} else if(objNm == "btnMinAgre") {
        		objDiv = this.divForm.form.Div04;
        	} else if(objNm == "btnMinPrcsDsctn") {
        		objDiv = this.divForm.form.Div05;
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
            this.divForm.form.Div01.form.btnMblCert.addEventHandler("onclick",this.divForm_Div01_btnMblCert_onclick,this);
            this.divForm.form.Div01.form.btnSimpleCert.addEventHandler("onclick",this.divForm_Div01_btnSimpleCert_onclick,this);
            this.divForm.form.Div01.form.rdo03.addEventHandler("onitemchanged",this.divForm_Div03_rdo03_onitemchanged,this);
            this.divForm.form.Div01.form.rdo03_00.addEventHandler("onitemchanged",this.divForm_Div03_rdo03_onitemchanged,this);
            this.divForm.form.btnMinAplyInfo.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.btnMinAtfl.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.Div03.form.btn_file_1.addEventHandler("onclick",this.divForm_Div03_btn_file_1_onclick,this);
            this.divForm.form.Div03.form.btn_del_file_1.addEventHandler("onclick",this.divForm_Div03_btn_del_file_1_onclick,this);
            this.divForm.form.Div03.form.Grid01.addEventHandler("oncellclick",this.divForm_Div03_Grid01_oncellclick,this);
            this.divForm.form.Div03.form.Grid01.addEventHandler("oncelldblclick",this.divForm_Div03_Grid01_oncelldblclick,this);
            this.divForm.form.btnMinAgre.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.Div04.form.rdoChc.addEventHandler("onitemchanged",this.divForm_Div00_Radio00_00_onitemchanged,this);
            this.divForm.form.btnMinPrcsDsctn.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divPopBtn.form.Button00_03.addEventHandler("onclick",this.divPopBtn_Button00_03_onclick,this);
            this.divPopBtn.form.Button00_02.addEventHandler("onclick",this.divPopBtn_Button00_02_onclick,this);
            this.divPopBtn.form.Button00_01.addEventHandler("onclick",this.divPopBtn_Button00_01_onclick,this);
            this.divPopBtn.form.Button00_05.addEventHandler("onclick",this.divPopBtn_Button00_05_onclick,this);
            this.divPopBtn.form.Button00_00.addEventHandler("onclick",this.divPopBtn_Button00_00_onclick,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterAddFile",this.RaonkUpload_RAONKUPLOAD_AfterAddFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_CreationComplete",this.RaonkUpload_RAONKUPLOAD_CreationComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_UploadComplete",this.RaonkUpload_RAONKUPLOAD_UploadComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_OnError",this.RaonkUpload_RAONKUPLOAD_OnError,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_BeforeAddFile",this.RaonkUpload_RAONKUPLOAD_BeforeAddFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterAddAllFile",this.RaonkUpload_RAONKUPLOAD_AfterAddAllFile,this);
            this.dsFile1.addEventHandler("onvaluechanged",this.dsFile1_onvaluechanged,this);
        };
        this.loadIncludeScript("COM024P16.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
