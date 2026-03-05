(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM024P25");
            this.set_titletext("계정권한 승인관리 (승인자용)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,3000);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCtrt", this);
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNm\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtType\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtTypeNm\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtYmd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtEndYmd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAuthrt", this);
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"authrtId\" type=\"STRING\" size=\"256\"/><Column id=\"authrtNm\" type=\"STRING\" size=\"256\"/><Column id=\"authrtExpln\" type=\"STRING\" size=\"256\"/><Column id=\"rgnPstnSe\" type=\"STRING\" size=\"256\"/><Column id=\"hetrAuthrtYn\" type=\"STRING\" size=\"256\"/><Column id=\"authrtRgn\" type=\"STRING\" size=\"256\"/><Column id=\"docList\" type=\"STRING\" size=\"256\"/><Column id=\"docNmList\" type=\"STRING\" size=\"256\"/><Column id=\"docNeedList\" type=\"STRING\" size=\"256\"/><Column id=\"docNeedNmList\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGet", this);
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userNm\" type=\"STRING\" size=\"256\"/><Column id=\"acntAutzrId\" type=\"STRING\" size=\"256\"/><Column id=\"acntAutzrNm\" type=\"STRING\" size=\"256\"/><Column id=\"pswd\" type=\"STRING\" size=\"256\"/><Column id=\"eml\" type=\"STRING\" size=\"256\"/><Column id=\"userTelno\" type=\"STRING\" size=\"256\"/><Column id=\"userMblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"copId\" type=\"STRING\" size=\"256\"/><Column id=\"coId\" type=\"STRING\" size=\"256\"/><Column id=\"coNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptId\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"empExtNo\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNm\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"handyEmlUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"shrtx8\" type=\"STRING\" size=\"256\"/><Column id=\"emlRcptnYn\" type=\"STRING\" size=\"256\"/><Column id=\"smsRcptnPrgrsYn\" type=\"STRING\" size=\"256\"/><Column id=\"smsRcptnNewYn\" type=\"STRING\" size=\"256\"/><Column id=\"smsRcptnAcntYn\" type=\"STRING\" size=\"256\"/><Column id=\"rfslDt\" type=\"STRING\" size=\"256\"/><Column id=\"refwEblcPrcsDt\" type=\"STRING\" size=\"256\"/><Column id=\"delTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"delTrgtRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"flrplnPrmIp\" type=\"STRING\" size=\"256\"/><Column id=\"userTat1Yn\" type=\"STRING\" size=\"256\"/><Column id=\"userTat2Yn\" type=\"STRING\" size=\"256\"/><Column id=\"mvmnRgnYn\" type=\"STRING\" size=\"256\"/><Column id=\"hireHpeYn\" type=\"STRING\" size=\"256\"/><Column id=\"cpatcoEmpYn\" type=\"STRING\" size=\"256\"/><Column id=\"iiacEmpYn\" type=\"STRING\" size=\"256\"/><Column id=\"tatYn\" type=\"STRING\" size=\"256\"/><Column id=\"prmsSalsYn\" type=\"STRING\" size=\"256\"/><Column id=\"evntFcltYn\" type=\"STRING\" size=\"256\"/><Column id=\"lbsvcEtcYn\" type=\"STRING\" size=\"256\"/><Column id=\"idAplyType\" type=\"STRING\" size=\"256\"/><Column id=\"userSe\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"prcsSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcsSttsNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcsDsctn\" type=\"STRING\" size=\"256\"/><Column id=\"evdncDocNo\" type=\"STRING\" size=\"256\"/><Column id=\"prvcAgreDocId\" type=\"STRING\" size=\"256\"/><Column id=\"esntlAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"chcAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"prcrId\" type=\"STRING\" size=\"256\"/><Column id=\"prcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"jobCd\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"fullName\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsApln", this);
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplnId\" type=\"STRING\" size=\"256\"/><Column id=\"aplnNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplnDeptId\" type=\"STRING\" size=\"256\"/><Column id=\"aplnDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"atrzSeq\" type=\"STRING\" size=\"256\"/><Column id=\"aplnMblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"aplnEml\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Div("Div01","0","0","100.00%","844",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("pan01_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("아이디");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01","0","60","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("3");
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
            obj.set_taborder("4");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan02_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan02","0","60","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("7");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan02_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan02_02\"/><PanelItem id=\"PanelItem03\" componentid=\"pan02_03\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("8");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_02","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01_02","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("10");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_00_02\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_03","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("11");
            obj.set_text("계정관리자(승인자)");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_03","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("12");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01_03","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("13");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_03\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_00_03\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("14");
            obj.set_text("협업포털ID");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_00","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("15");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan02_03","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("16");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_00_00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("17");
            obj.set_text("휴대전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan02_02","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("18");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"mEdtMblTelno\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new MaskEdit("mEdtMblTelno","535","159","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("44");
            obj.set_readonly("true");
            obj.set_type("string");
            obj.set_format("###-{####}-####");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Button("btnCoInfo","398.00","1859","40","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_Information");
            obj.set_flexshrink("0");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("20");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan03_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("21");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00_02\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00_01_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("22");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_01_00","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("23");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan03_02","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("24");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_00_00_01_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("25");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_00_00","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("26");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan03_03","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("27");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_00_00_00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan03","0","60","100.00%","200",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("28");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("10");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem04\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem01\" componentid=\"pan03_04\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01","37","307","100%","97",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("43");
            obj.set_horizontalgap("20");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan03_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan03_02\"/><PanelItem id=\"PanelItem03\" componentid=\"pan03_03\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_02_00","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("30");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel00","304","394","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("29");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"edt00_00_00_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"btnCoInfo\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00_01_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("31");
            obj.set_text("내선번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_01_00_00","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("32");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan04_02","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("33");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_00_00_01_00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("34");
            obj.set_text("계약명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_00_00_00","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("35");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan04_03","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("36");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_00_00_00_00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan04","0","60","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("37");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel04_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan04_02\"/><PanelItem id=\"PanelItem03\" componentid=\"pan04_03\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00_02_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("38");
            obj.set_text("관련 계약정보");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","0","100.00%","200",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("40");
            obj.set_binddataset("dsCtrt");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"400\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"계약번호\"/><Cell col=\"1\" text=\"계약명\"/><Cell col=\"2\" text=\"계약상태\"/><Cell col=\"3\" text=\"계약유형명\"/><Cell col=\"4\" text=\"계약일\"/><Cell col=\"5\" text=\"계약시작일\"/><Cell col=\"6\" text=\"계약종료일\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:ctrtNo\" displaytype=\"normal\" textAlign=\"center\" textDecoration=\"underline\"/><Cell col=\"1\" text=\"bind:ctrtNm\" displaytype=\"normal\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:계약상태\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:ctrtTypeNm\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:ctrtYmd\" displaytype=\"date\" cssclass=\"expr:state==&apos;0&apos;?&apos;CellTxtRed&apos;:&apos;CellTxtBlue&apos;\" textAlign=\"center\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"5\" text=\"bind:ctrtBgngYmd\" textAlign=\"center\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"6\" text=\"bind:ctrtEndYmd\" textAlign=\"center\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" cssclass=\"CellEnd\"/></Band></Format></Formats>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan03_04","0","685","100%","80",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("42");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCoInfo\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staCoInfo","20","20","100%","80",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("41");
            obj.set_visible("true");
            obj.set_text("회사ID : \r\n회사명 : \r\n사업자등록번호 : \r\n주소 : ");
            obj.set_cssclass("sta_WF_Des004");
            obj.set_verticalAlign("middle");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel06_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("45");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Radio("rdoUseYn","0","46","313","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("46");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_readonly("true");
            var divForm_form_Div01_form_rdoUseYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div01_form_rdoUseYn_innerdataset", obj);
            divForm_form_Div01_form_rdoUseYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div01_form_rdoUseYn_innerdataset);
            obj.set_text("예");
            obj.set_value("Y");
            obj.set_index("0");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel04_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("47");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel06_02\"/><PanelItem id=\"PanelItem03\" componentid=\"rdoUseYn\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel06_02_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("48");
            obj.set_text("핸디메일 사용여부");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Radio("rdoHandyEmlUseYn","0","46","313","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("49");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_readonly("true");
            var divForm_form_Div01_form_rdoHandyEmlUseYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div01_form_rdoHandyEmlUseYn_innerdataset", obj);
            divForm_form_Div01_form_rdoHandyEmlUseYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div01_form_rdoHandyEmlUseYn_innerdataset);
            obj.set_text("예");
            obj.set_value("Y");
            obj.set_index("0");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan05_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("50");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel06_02_00\"/><PanelItem id=\"PanelItem03\" componentid=\"rdoHandyEmlUseYn\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel06_01_02","10.00","98","305","1",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("51");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel06_01_01_00","10.00","98","305","1",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("52");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan05","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("53");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"pan05_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel06_01_02\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel06_01_01_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan06","0","60","100.00%","257",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("39");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staLabel00_00_00_02_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00","30","50","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinBscInfo","1390.00","18","34","34",null,null,null,null,null,null,this.divForm.form);
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
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnMinBscInfo\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_00","30","50","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("5");
            obj.set_text("계정권한 신청정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinAuthrtInfo","1390.00","18","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_00","710.00","50","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("7");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 20px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnMinAuthrtInfo\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit02","0","0","100%","70",null,null,null,null,"70",null,this.divForm.form);
            obj.set_taborder("8");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div02","0","0","100.00%","257",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("9");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00_02_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("0");
            obj.set_text("신청 권한 목록");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan07","0","60","100.00%","257",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("1");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staLabel00_00_00_02_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","0","54","100.00%","200",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsAuthrt");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"300\"/><Column size=\"150\"/><Column size=\"100\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"권한명\"/><Cell col=\"1\" text=\"권한설명\"/><Cell col=\"2\" text=\"위치\"/><Cell col=\"3\" text=\"난로권한\"/></Band><Band id=\"body\"><Cell text=\"bind:authrtNm\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:authrtExpln\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:authrtRgn\" textAlign=\"left\"/><Cell col=\"3\" text=\"expr:hetrAuthrtYn == &quot;Y&quot; ? &quot;신청&quot; : &quot;&quot;\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_00_00","30","50","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("10");
            obj.set_text("증빙 자료");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinAtfl","1390.00","18","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_00_00","710.00","50","100%","50",null,null,null,null,null,null,this.divForm.form);
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
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div03","0","0","100%","382",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("14");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel01","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("0");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btn_file_2_00_00","124","58","116","34",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("1");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_00","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("2");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_file_2_00_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("3");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00_00\"/></Contents>");
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

            obj = new Panel("panFileNum01","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("7");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02_00_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btn_del_file_2_00","512","135","125","34",null,null,null,null,null,null,this.divForm.form.Div03.form);
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
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_del_file_2_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum01\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel00_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Grid("Grid00_01_00","20.00","114","100%","120",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("11");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/></Band></Format></Formats>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panFile01","0","50","100.00%","241",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("12");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_01_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("pan01","0","60","100.00%","141",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("13");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staNeedAtfl\"/><PanelItem id=\"PanelItem00\" componentid=\"sta00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("sta00","0","146","100.00%","90",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("14");
            obj.set_text("- 사업자등록증의 사업자등록번호와 입주자증명서류(임대계약서, 낙찰증명서 등)에 있는 사업자등록번호가 동일해야 합니다.\r\n- (중요)재직증명서 내 주민등록번호, 생년월일, 자택주소는 삭제(마스킹)하셔야 하며, 삭제(마스킹)하지 않고 가입신청 시 불승인 처리됩니다.\r\n- 임대계약서, 낙찰증명서 등 (인천국제공항공사와 계약된 서류만 가능)\r\n- 이동지역 관련 양사 계약 증빙 서류는 이동지역 회사 및 실제 소속 회사간 계약관련 증빙 서류만 인정");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staNeedAtfl","0","146","100.00%","30",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("15");
            obj.set_text("필요 증빙자료 : 공항 입주 관련 계약 증빙 서류, 사업자등록증");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_00_00_00","30","50","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("15");
            obj.set_text("개인정보 수집·이용 동의");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinAreYn","1390.00","18","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_00_00_00","710.00","50","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("17");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 20px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnMinAreYn\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit04","0","0","100%","70",null,null,null,null,"70",null,this.divForm.form);
            obj.set_taborder("18");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_00_00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div04","0","0","100.00%","213",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("19");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","110","188","100%","96",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("0");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"edt00_02\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("pan00","90","178","100.00%","117",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("1");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edt00_02","60","78","100%","150",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_value("개인정보 수집 및 이용 관련 안내문 및 동의 여부 체크");
            obj.set_text("개인정보 수집 및 이용 관련 안내문 및 동의 여부 체크");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("3");
            obj.set_text("개인정보(필수) 사용동의여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Radio("rdoEsntl","127","203","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("4");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            obj.set_readonly("true");
            var divForm_form_Div04_form_rdoEsntl_innerdataset = new nexacro.NormalDataset("divForm_form_Div04_form_rdoEsntl_innerdataset", obj);
            divForm_form_Div04_form_rdoEsntl_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">동의함</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">동의하지 않음</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div04_form_rdoEsntl_innerdataset);
            obj.set_text("계약선택");
            obj.set_value("0");
            obj.set_index("0");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"rdoEsntl\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_01_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("6");
            obj.set_text("개인정보(선택) 사용동의여부");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Radio("Radio00_00_00","127","203","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("7");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            obj.set_readonly("true");
            var divForm_form_Div04_form_Radio00_00_00_innerdataset = new nexacro.NormalDataset("divForm_form_Div04_form_Radio00_00_00_innerdataset", obj);
            divForm_form_Div04_form_Radio00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">동의함</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">동의하지 않음</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div04_form_Radio00_00_00_innerdataset);
            obj.set_text("계약선택");
            obj.set_value("0");
            obj.set_index("0");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("5");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Radio00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("pan04","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("9");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel01_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_00_00_00_00","30","50","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("20");
            obj.set_text("처리내역");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinPrcs","1390.00","18","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_00_00_00_00","710.00","50","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("22");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 20px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnMinPrcs\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit05","0","0","100%","70",null,null,null,null,"70",null,this.divForm.form);
            obj.set_taborder("23");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_00_00_00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div05","0","0","100%","304",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("24");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("pan01_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("0");
            obj.set_text("처리상태");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Edit("edt00_00","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("pan01","0","60","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("3");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan01_02\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("4");
            obj.set_text("처리자명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Edit("edt00_00_02","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("pan01_02","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_00_02\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("7");
            obj.set_text("처리내역");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("pan01_01_00","10.00","98","100%","196",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"txa00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("pan01_00","0","60","100.00%","207",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("9");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan01_01_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new TextArea("txa00","200.00","728","100%","150",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("10");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Div("divPopBtn","20",null,null,"60","20","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_02","457.00","30","120","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("2");
            obj.set_text("서류보완");
            obj.set_cssclass("btn_WF_No");
            obj.set_fittocontents("none");
            this.divPopBtn.addChild(obj.name, obj);

            obj = new Button("Button00_01","217.00","10","120","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("1");
            obj.set_text("불승인");
            obj.set_fittocontents("none");
            obj.set_visible("true");
            this.divPopBtn.addChild(obj.name, obj);

            obj = new Button("Button00_00","457.00","30","120","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("0");
            obj.set_text("권한승인");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_fittocontents("none");
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

                p.staLabel00_00.set_taborder("0");
                p.staLabel00_00.set_text("아이디");
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

                p.staLabel00_00_00.set_taborder("4");
                p.staLabel00_00_00.set_text("이메일");
                p.staLabel00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00_00.move("10","98","100%","46",null,null);

                p.edt00_00_00.set_taborder("5");
                p.edt00_00_00.set_readonly("true");
                p.edt00_00_00.move("10.00","158","100%","40",null,null);

                p.pan02_01.set_taborder("6");
                p.pan02_01.set_type("vertical");
                p.pan02_01.set_flexgrow("1");
                p.pan02_01.set_minwidth("");
                p.pan02_01.move("10.00","98","300","86",null,null);

                p.pan02.set_taborder("7");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.move("0","60","100.00%","97",null,null);

                p.staLabel00_00_02.set_taborder("8");
                p.staLabel00_00_02.set_text("성명");
                p.staLabel00_00_02.set_cssclass("sta_WF_Label");
                p.staLabel00_00_02.move("10","98","100%","46",null,null);

                p.edt00_00_02.set_taborder("9");
                p.edt00_00_02.set_readonly("true");
                p.edt00_00_02.move("10.00","158","100%","40",null,null);

                p.pan01_02.set_taborder("10");
                p.pan01_02.set_type("vertical");
                p.pan01_02.set_flexgrow("1");
                p.pan01_02.set_minwidth("");
                p.pan01_02.move("10.00","98","300","86",null,null);

                p.staLabel00_00_03.set_taborder("11");
                p.staLabel00_00_03.set_text("계정관리자(승인자)");
                p.staLabel00_00_03.set_cssclass("sta_WF_Label");
                p.staLabel00_00_03.move("10","98","100%","46",null,null);

                p.edt00_00_03.set_taborder("12");
                p.edt00_00_03.set_readonly("true");
                p.edt00_00_03.move("10.00","158","100%","40",null,null);

                p.pan01_03.set_taborder("13");
                p.pan01_03.set_type("vertical");
                p.pan01_03.set_flexgrow("1");
                p.pan01_03.set_minwidth("");
                p.pan01_03.move("10.00","98","300","86",null,null);

                p.staLabel00_00_00_00.set_taborder("14");
                p.staLabel00_00_00_00.set_text("협업포털ID");
                p.staLabel00_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00_00_00.move("10","98","100%","46",null,null);

                p.edt00_00_00_00.set_taborder("15");
                p.edt00_00_00_00.set_readonly("true");
                p.edt00_00_00_00.move("10.00","158","100%","40",null,null);

                p.pan02_03.set_taborder("16");
                p.pan02_03.set_type("vertical");
                p.pan02_03.set_flexgrow("1");
                p.pan02_03.set_minwidth("");
                p.pan02_03.move("10.00","98","300","86",null,null);

                p.staLabel00_00_00_01.set_taborder("17");
                p.staLabel00_00_00_01.set_text("휴대전화번호");
                p.staLabel00_00_00_01.set_cssclass("sta_WF_Label");
                p.staLabel00_00_00_01.move("10","98","100%","46",null,null);

                p.pan02_02.set_taborder("18");
                p.pan02_02.set_type("vertical");
                p.pan02_02.set_flexgrow("1");
                p.pan02_02.set_minwidth("");
                p.pan02_02.move("10.00","98","300","86",null,null);

                p.mEdtMblTelno.set_taborder("44");
                p.mEdtMblTelno.set_readonly("true");
                p.mEdtMblTelno.set_type("string");
                p.mEdtMblTelno.set_format("###-{####}-####");
                p.mEdtMblTelno.move("535","159","100%","40",null,null);

                p.btnCoInfo.set_taborder("19");
                p.btnCoInfo.set_cssclass("btn_WF_Information");
                p.btnCoInfo.set_flexshrink("0");
                p.btnCoInfo.move("398.00","1859","40","40",null,null);

                p.staLabel00_00_00_02.set_taborder("20");
                p.staLabel00_00_00_02.set_text("회사명");
                p.staLabel00_00_00_02.set_cssclass("sta_WF_Label");
                p.staLabel00_00_00_02.move("10","98","100%","46",null,null);

                p.pan03_01.set_taborder("21");
                p.pan03_01.set_type("vertical");
                p.pan03_01.set_flexgrow("1");
                p.pan03_01.set_minwidth("");
                p.pan03_01.move("10.00","98","300","86",null,null);

                p.staLabel00_00_00_01_00.set_taborder("22");
                p.staLabel00_00_00_01_00.set_text("전화번호");
                p.staLabel00_00_00_01_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00_00_01_00.move("10","98","100%","46",null,null);

                p.edt00_00_00_01_00.set_taborder("23");
                p.edt00_00_00_01_00.set_readonly("true");
                p.edt00_00_00_01_00.move("10.00","158","100%","40",null,null);

                p.pan03_02.set_taborder("24");
                p.pan03_02.set_type("vertical");
                p.pan03_02.set_flexgrow("1");
                p.pan03_02.set_minwidth("");
                p.pan03_02.move("10.00","98","300","86",null,null);

                p.staLabel00_00_00_00_00.set_taborder("25");
                p.staLabel00_00_00_00_00.set_text("부서");
                p.staLabel00_00_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00_00_00_00.move("10","98","100%","46",null,null);

                p.edt00_00_00_00_00.set_taborder("26");
                p.edt00_00_00_00_00.set_readonly("true");
                p.edt00_00_00_00_00.move("10.00","158","100%","40",null,null);

                p.pan03_03.set_taborder("27");
                p.pan03_03.set_type("vertical");
                p.pan03_03.set_flexgrow("1");
                p.pan03_03.set_minwidth("");
                p.pan03_03.move("10.00","98","300","86",null,null);

                p.pan03.set_taborder("28");
                p.pan03.set_horizontalgap("20");
                p.pan03.set_flexcrossaxiswrapalign("start");
                p.pan03.set_flexwrap("wrap");
                p.pan03.set_fittocontents("height");
                p.pan03.set_verticalgap("10");
                p.pan03.set_spacing("0px 20px 10px 20px");
                p.pan03.set_cssclass("pal_WF_DtlBg");
                p.pan03.set_type("vertical");
                p.pan03.move("0","60","100.00%","200",null,null);

                p.Panel01.set_taborder("43");
                p.Panel01.set_horizontalgap("20");
                p.Panel01.move("37","307","100%","97",null,null);

                p.edt00_00_00_02_00.set_taborder("30");
                p.edt00_00_00_02_00.set_readonly("true");
                p.edt00_00_00_02_00.move("10.00","158","100%","40",null,null);

                p.Panel00.set_taborder("29");
                p.Panel00.set_horizontalgap("10");
                p.Panel00.move("304","394","100%","40",null,null);

                p.staLabel00_00_00_01_00_00.set_taborder("31");
                p.staLabel00_00_00_01_00_00.set_text("내선번호");
                p.staLabel00_00_00_01_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00_00_01_00_00.move("10","98","100%","46",null,null);

                p.edt00_00_00_01_00_00.set_taborder("32");
                p.edt00_00_00_01_00_00.set_readonly("true");
                p.edt00_00_00_01_00_00.move("10.00","158","100%","40",null,null);

                p.pan04_02.set_taborder("33");
                p.pan04_02.set_type("vertical");
                p.pan04_02.set_flexgrow("1");
                p.pan04_02.set_minwidth("");
                p.pan04_02.move("10.00","98","300","86",null,null);

                p.staLabel00_00_00_00_00_00.set_taborder("34");
                p.staLabel00_00_00_00_00_00.set_text("계약명");
                p.staLabel00_00_00_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00_00_00_00_00.move("10","98","100%","46",null,null);

                p.edt00_00_00_00_00_00.set_taborder("35");
                p.edt00_00_00_00_00_00.set_readonly("true");
                p.edt00_00_00_00_00_00.move("10.00","158","100%","40",null,null);

                p.pan04_03.set_taborder("36");
                p.pan04_03.set_type("vertical");
                p.pan04_03.set_flexgrow("1");
                p.pan04_03.set_minwidth("");
                p.pan04_03.move("10.00","98","300","86",null,null);

                p.pan04.set_taborder("37");
                p.pan04.set_horizontalgap("20");
                p.pan04.set_flexcrossaxiswrapalign("start");
                p.pan04.set_flexwrap("wrap");
                p.pan04.set_fittocontents("height");
                p.pan04.set_verticalgap("0");
                p.pan04.set_spacing("0px 20px 10px 20px");
                p.pan04.set_cssclass("pal_WF_DtlBg");
                p.pan04.move("0","60","100.00%","97",null,null);

                p.staLabel00_00_00_02_00_00.set_taborder("38");
                p.staLabel00_00_00_02_00_00.set_text("관련 계약정보");
                p.staLabel00_00_00_02_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00_00_02_00_00.move("10","98","100%","46",null,null);

                p.Grid00.set_taborder("40");
                p.Grid00.set_binddataset("dsCtrt");
                p.Grid00.set_autofittype("col");
                p.Grid00.move("0","0","100.00%","200",null,null);

                p.pan03_04.set_taborder("42");
                p.pan03_04.set_visible("false");
                p.pan03_04.move("0","685","100%","80",null,null);

                p.staCoInfo.set_taborder("41");
                p.staCoInfo.set_visible("true");
                p.staCoInfo.set_text("회사ID : \r\n회사명 : \r\n사업자등록번호 : \r\n주소 : ");
                p.staCoInfo.set_cssclass("sta_WF_Des004");
                p.staCoInfo.set_verticalAlign("middle");
                p.staCoInfo.move("20","20","100%","80",null,null);

                p.staLabel06_02.set_taborder("45");
                p.staLabel06_02.set_text("사용여부");
                p.staLabel06_02.set_cssclass("sta_WF_Label");
                p.staLabel06_02.move("10","98","100%","46",null,null);

                p.rdoUseYn.set_taborder("46");
                p.rdoUseYn.set_innerdataset(divForm_form_Div01_form_rdoUseYn_innerdataset);
                p.rdoUseYn.set_codecolumn("codecolumn");
                p.rdoUseYn.set_datacolumn("datacolumn");
                p.rdoUseYn.set_direction("vertical");
                p.rdoUseYn.set_fittocontents("width");
                p.rdoUseYn.set_readonly("true");
                p.rdoUseYn.set_value("Y");
                p.rdoUseYn.set_index("0");
                p.rdoUseYn.move("0","46","313","40",null,null);

                p.Panel04_01.set_taborder("47");
                p.Panel04_01.set_type("vertical");
                p.Panel04_01.set_flexgrow("1");
                p.Panel04_01.set_minwidth("");
                p.Panel04_01.move("10.00","98","305","86",null,null);

                p.staLabel06_02_00.set_taborder("48");
                p.staLabel06_02_00.set_text("핸디메일 사용여부");
                p.staLabel06_02_00.set_cssclass("sta_WF_Label");
                p.staLabel06_02_00.move("10","98","100%","46",null,null);

                p.rdoHandyEmlUseYn.set_taborder("49");
                p.rdoHandyEmlUseYn.set_innerdataset(divForm_form_Div01_form_rdoHandyEmlUseYn_innerdataset);
                p.rdoHandyEmlUseYn.set_codecolumn("codecolumn");
                p.rdoHandyEmlUseYn.set_datacolumn("datacolumn");
                p.rdoHandyEmlUseYn.set_direction("vertical");
                p.rdoHandyEmlUseYn.set_fittocontents("width");
                p.rdoHandyEmlUseYn.set_readonly("true");
                p.rdoHandyEmlUseYn.set_value("Y");
                p.rdoHandyEmlUseYn.set_index("0");
                p.rdoHandyEmlUseYn.move("0","46","313","40",null,null);

                p.pan05_01.set_taborder("50");
                p.pan05_01.set_type("vertical");
                p.pan05_01.set_flexgrow("1");
                p.pan05_01.set_minwidth("");
                p.pan05_01.move("10.00","98","305","86",null,null);

                p.Panel06_01_02.set_taborder("51");
                p.Panel06_01_02.set_type("vertical");
                p.Panel06_01_02.set_flexgrow("1");
                p.Panel06_01_02.set_minwidth("");
                p.Panel06_01_02.move("10.00","98","305","1",null,null);

                p.Panel06_01_01_00.set_taborder("52");
                p.Panel06_01_01_00.set_type("vertical");
                p.Panel06_01_01_00.set_flexgrow("1");
                p.Panel06_01_01_00.set_minwidth("");
                p.Panel06_01_01_00.move("10.00","98","305","1",null,null);

                p.pan05.set_taborder("53");
                p.pan05.set_horizontalgap("20");
                p.pan05.set_flexcrossaxiswrapalign("start");
                p.pan05.set_flexwrap("wrap");
                p.pan05.set_fittocontents("height");
                p.pan05.set_verticalgap("0");
                p.pan05.set_spacing("0px 20px 10px 20px");
                p.pan05.set_cssclass("pal_WF_DtlBg");
                p.pan05.set_type("horizontal");
                p.pan05.move("0","60","100.00%","96",null,null);

                p.pan06.set_taborder("39");
                p.pan06.set_horizontalgap("20");
                p.pan06.set_flexcrossaxiswrapalign("start");
                p.pan06.set_flexwrap("wrap");
                p.pan06.set_fittocontents("height");
                p.pan06.set_verticalgap("0");
                p.pan06.set_spacing("0px 20px 10px 20px");
                p.pan06.set_cssclass("pal_WF_DtlBg");
                p.pan06.move("0","60","100.00%","257",null,null);
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
            //-- Default Layout : this.divForm.form.Div02.form
            obj = new Layout("default","",0,0,this.divForm.form.Div02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel00_00_00_02_00_00.set_taborder("0");
                p.staLabel00_00_00_02_00_00.set_text("신청 권한 목록");
                p.staLabel00_00_00_02_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00_00_02_00_00.move("10","98","100%","46",null,null);

                p.pan07.set_taborder("1");
                p.pan07.set_horizontalgap("20");
                p.pan07.set_flexcrossaxiswrapalign("start");
                p.pan07.set_flexwrap("wrap");
                p.pan07.set_fittocontents("height");
                p.pan07.set_verticalgap("0");
                p.pan07.set_spacing("0px 20px 10px 20px");
                p.pan07.set_cssclass("pal_WF_DtlBg");
                p.pan07.move("0","60","100.00%","257",null,null);

                p.Grid00_00.set_taborder("2");
                p.Grid00_00.set_binddataset("dsAuthrt");
                p.Grid00_00.set_autofittype("col");
                p.Grid00_00.move("0","54","100.00%","200",null,null);
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
                p.staLabel01.set_taborder("0");
                p.staLabel01.set_text("첨부파일");
                p.staLabel01.set_cssclass("sta_WF_Label");
                p.staLabel01.set_fittocontents("width");
                p.staLabel01.move("0","44","305","46",null,null);

                p.btn_file_2_00_00.set_taborder("1");
                p.btn_file_2_00_00.set_text("파일선택");
                p.btn_file_2_00_00.set_cssclass("btn_WF_FileUp");
                p.btn_file_2_00_00.set_fittocontents("width");
                p.btn_file_2_00_00.set_visible("false");
                p.btn_file_2_00_00.move("124","58","116","34",null,null);

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

                p.panFileNum01.set_taborder("7");
                p.panFileNum01.set_flexgrow("1");
                p.panFileNum01.set_horizontalgap("4");
                p.panFileNum01.move("20","190","305","46",null,null);

                p.btn_del_file_2_00.set_taborder("8");
                p.btn_del_file_2_00.set_text("전체파일삭제");
                p.btn_del_file_2_00.set_cssclass("btn_WF_FileDel");
                p.btn_del_file_2_00.set_fittocontents("width");
                p.btn_del_file_2_00.set_visible("false");
                p.btn_del_file_2_00.move("512","135","125","34",null,null);

                p.panBtnDel00_00.set_taborder("9");
                p.panBtnDel00_00.set_flexcrossaxisalign("center");
                p.panBtnDel00_00.set_flexmainaxisalign("end");
                p.panBtnDel00_00.set_flexgrow("1");
                p.panBtnDel00_00.move("517","141","305","46",null,null);

                p.Panel00_00_00.set_taborder("10");
                p.Panel00_00_00.move("20","51","100%","46",null,null);

                p.Grid00_01_00.set_taborder("11");
                p.Grid00_01_00.set_binddataset("dsFile1");
                p.Grid00_01_00.set_autofittype("col");
                p.Grid00_01_00.set_cssclass("grd_WF_FileAdd");
                p.Grid00_01_00.move("20.00","114","100%","120",null,null);

                p.panFile01.set_taborder("12");
                p.panFile01.set_fittocontents("height");
                p.panFile01.set_spacing("10px 20px 10px 20px");
                p.panFile01.set_flexwrap("wrap");
                p.panFile01.set_cssclass("pal_WF_DtlBg");
                p.panFile01.set_verticalgap("4");
                p.panFile01.move("0","50","100.00%","241",null,null);

                p.pan01.set_taborder("13");
                p.pan01.set_horizontalgap("20");
                p.pan01.set_flexcrossaxiswrapalign("start");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_fittocontents("height");
                p.pan01.set_verticalgap("0");
                p.pan01.set_spacing("10px 20px 10px 20px");
                p.pan01.set_cssclass("pal_WF_DtlBg");
                p.pan01.move("0","60","100.00%","141",null,null);

                p.sta00.set_taborder("14");
                p.sta00.set_text("- 사업자등록증의 사업자등록번호와 입주자증명서류(임대계약서, 낙찰증명서 등)에 있는 사업자등록번호가 동일해야 합니다.\r\n- (중요)재직증명서 내 주민등록번호, 생년월일, 자택주소는 삭제(마스킹)하셔야 하며, 삭제(마스킹)하지 않고 가입신청 시 불승인 처리됩니다.\r\n- 임대계약서, 낙찰증명서 등 (인천국제공항공사와 계약된 서류만 가능)\r\n- 이동지역 관련 양사 계약 증빙 서류는 이동지역 회사 및 실제 소속 회사간 계약관련 증빙 서류만 인정");
                p.sta00.set_cssclass("sta_WF_Des");
                p.sta00.set_fittocontents("height");
                p.sta00.move("0","146","100.00%","90",null,null);

                p.staNeedAtfl.set_taborder("15");
                p.staNeedAtfl.set_text("필요 증빙자료 : 공항 입주 관련 계약 증빙 서류, 사업자등록증");
                p.staNeedAtfl.set_cssclass("sta_WF_Des");
                p.staNeedAtfl.set_fittocontents("height");
                p.staNeedAtfl.move("0","146","100.00%","30",null,null);
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
                p.Panel00_00.set_taborder("0");
                p.Panel00_00.set_type("vertical");
                p.Panel00_00.set_minwidth("");
                p.Panel00_00.move("110","188","100%","96",null,null);

                p.pan00.set_taborder("1");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("10px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.move("90","178","100.00%","117",null,null);

                p.edt00_02.set_taborder("2");
                p.edt00_02.set_readonly("true");
                p.edt00_02.set_value("개인정보 수집 및 이용 관련 안내문 및 동의 여부 체크");
                p.edt00_02.move("60","78","100%","150",null,null);

                p.staLabel01_00_01.set_taborder("3");
                p.staLabel01_00_01.set_text("개인정보(필수) 사용동의여부");
                p.staLabel01_00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel01_00_01.move("10","98","100%","46",null,null);

                p.rdoEsntl.set_taborder("4");
                p.rdoEsntl.set_fittocontents("width");
                p.rdoEsntl.set_innerdataset(divForm_form_Div04_form_rdoEsntl_innerdataset);
                p.rdoEsntl.set_codecolumn("codecolumn");
                p.rdoEsntl.set_datacolumn("datacolumn");
                p.rdoEsntl.set_columncount("2");
                p.rdoEsntl.set_readonly("true");
                p.rdoEsntl.set_value("0");
                p.rdoEsntl.set_index("0");
                p.rdoEsntl.move("127","203","100%","40",null,null);

                p.Panel01_00.set_taborder("5");
                p.Panel01_00.set_type("vertical");
                p.Panel01_00.set_flexgrow("1");
                p.Panel01_00.set_fittocontents("height");
                p.Panel01_00.move("10.00","98","300","86",null,null);

                p.staLabel01_00_01_00_00.set_taborder("6");
                p.staLabel01_00_01_00_00.set_text("개인정보(선택) 사용동의여부");
                p.staLabel01_00_01_00_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00_01_00_00.move("10","98","100%","46",null,null);

                p.Radio00_00_00.set_taborder("7");
                p.Radio00_00_00.set_fittocontents("width");
                p.Radio00_00_00.set_innerdataset(divForm_form_Div04_form_Radio00_00_00_innerdataset);
                p.Radio00_00_00.set_codecolumn("codecolumn");
                p.Radio00_00_00.set_datacolumn("datacolumn");
                p.Radio00_00_00.set_columncount("2");
                p.Radio00_00_00.set_readonly("true");
                p.Radio00_00_00.set_value("0");
                p.Radio00_00_00.set_index("0");
                p.Radio00_00_00.move("127","203","100%","40",null,null);

                p.Panel01_00_00.set_taborder("8");
                p.Panel01_00_00.set_type("vertical");
                p.Panel01_00_00.set_flexgrow("1");
                p.Panel01_00_00.set_verticalgap("5");
                p.Panel01_00_00.set_fittocontents("height");
                p.Panel01_00_00.move("10.00","98","300","86",null,null);

                p.pan04.set_taborder("9");
                p.pan04.set_horizontalgap("20");
                p.pan04.set_flexcrossaxiswrapalign("start");
                p.pan04.set_flexwrap("wrap");
                p.pan04.set_fittocontents("height");
                p.pan04.set_verticalgap("0");
                p.pan04.set_spacing("0px 20px 10px 20px");
                p.pan04.set_cssclass("pal_WF_DtlBg");
                p.pan04.move("0","60","100.00%","96",null,null);
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

                p.staLabel00_00_02.set_taborder("4");
                p.staLabel00_00_02.set_text("처리자명");
                p.staLabel00_00_02.set_cssclass("sta_WF_Label");
                p.staLabel00_00_02.move("10","98","100%","46",null,null);

                p.edt00_00_02.set_taborder("5");
                p.edt00_00_02.set_readonly("true");
                p.edt00_00_02.move("10.00","158","100%","40",null,null);

                p.pan01_02.set_taborder("6");
                p.pan01_02.set_type("vertical");
                p.pan01_02.set_flexgrow("1");
                p.pan01_02.set_minwidth("");
                p.pan01_02.move("10.00","98","300","86",null,null);

                p.staLabel00_00_00.set_taborder("7");
                p.staLabel00_00_00.set_text("처리내역");
                p.staLabel00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00_00.move("10","98","100%","46",null,null);

                p.pan01_01_00.set_taborder("8");
                p.pan01_01_00.set_type("vertical");
                p.pan01_01_00.set_flexgrow("1");
                p.pan01_01_00.set_minwidth("");
                p.pan01_01_00.move("10.00","98","100%","196",null,null);

                p.pan01_00.set_taborder("9");
                p.pan01_00.set_horizontalgap("20");
                p.pan01_00.set_flexcrossaxiswrapalign("start");
                p.pan01_00.set_flexwrap("wrap");
                p.pan01_00.set_fittocontents("height");
                p.pan01_00.set_verticalgap("0");
                p.pan01_00.set_spacing("0px 20px 10px 20px");
                p.pan01_00.set_cssclass("pal_WF_DtlBg");
                p.pan01_00.move("0","60","100.00%","207",null,null);

                p.txa00.set_taborder("10");
                p.txa00.move("200.00","728","100%","150",null,null);
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
                p.Div01.move("0","0","100.00%","844",null,null);

                p.staSubTitle02_00.set_taborder("1");
                p.staSubTitle02_00.set_text("기본정보");
                p.staSubTitle02_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00.move("30","50","100%","50",null,null);

                p.btnMinBscInfo.set_taborder("2");
                p.btnMinBscInfo.set_cssclass("btn_WF_ACMinus");
                p.btnMinBscInfo.move("1390.00","18","34","34",null,null);

                p.Panel01_02.set_taborder("3");
                p.Panel01_02.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02.set_spacing("0px 20px");
                p.Panel01_02.set_horizontalgap("10");
                p.Panel01_02.set_flexcrossaxisalign("center");
                p.Panel01_02.set_flexmainaxisalign("end");
                p.Panel01_02.move("710.00","50","100%","50",null,null);

                p.staSubTitle02_00_00.set_taborder("5");
                p.staSubTitle02_00_00.set_text("계정권한 신청정보");
                p.staSubTitle02_00_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_00.move("30","50","100%","50",null,null);

                p.btnMinAuthrtInfo.set_taborder("6");
                p.btnMinAuthrtInfo.set_cssclass("btn_WF_ACMinus");
                p.btnMinAuthrtInfo.move("1390.00","18","34","34",null,null);

                p.Panel01_02_00.set_taborder("7");
                p.Panel01_02_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_00.set_spacing("0px 20px");
                p.Panel01_02_00.set_horizontalgap("10");
                p.Panel01_02_00.set_flexcrossaxisalign("center");
                p.Panel01_02_00.set_flexmainaxisalign("end");
                p.Panel01_02_00.move("710.00","50","100%","50",null,null);

                p.sub_tit02.set_taborder("8");
                p.sub_tit02.set_background("#ffffff");
                p.sub_tit02.set_flexcrossaxisalign("end");
                p.sub_tit02.set_minheight("70");
                p.sub_tit02.set_maxheight("");
                p.sub_tit02.move("0","0","100%","70",null,null);

                p.Div02.set_taborder("9");
                p.Div02.set_text("Div00");
                p.Div02.set_cssclass("div_WF_Bg");
                p.Div02.set_fittocontents("height");
                p.Div02.move("0","0","100.00%","257",null,null);

                p.staSubTitle02_00_00_00.set_taborder("10");
                p.staSubTitle02_00_00_00.set_text("증빙 자료");
                p.staSubTitle02_00_00_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_00_00.move("30","50","100%","50",null,null);

                p.btnMinAtfl.set_taborder("11");
                p.btnMinAtfl.set_cssclass("btn_WF_ACMinus");
                p.btnMinAtfl.move("1390.00","18","34","34",null,null);

                p.Panel01_02_00_00.set_taborder("12");
                p.Panel01_02_00_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_00_00.set_spacing("0px 20px");
                p.Panel01_02_00_00.set_horizontalgap("10");
                p.Panel01_02_00_00.set_flexcrossaxisalign("center");
                p.Panel01_02_00_00.set_flexmainaxisalign("end");
                p.Panel01_02_00_00.move("710.00","50","100%","50",null,null);

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
                p.Div03.move("0","0","100%","382",null,null);

                p.staSubTitle02_00_00_00_00.set_taborder("15");
                p.staSubTitle02_00_00_00_00.set_text("개인정보 수집·이용 동의");
                p.staSubTitle02_00_00_00_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_00_00_00.move("30","50","100%","50",null,null);

                p.btnMinAreYn.set_taborder("16");
                p.btnMinAreYn.set_cssclass("btn_WF_ACMinus");
                p.btnMinAreYn.move("1390.00","18","34","34",null,null);

                p.Panel01_02_00_00_00.set_taborder("17");
                p.Panel01_02_00_00_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_00_00_00.set_spacing("0px 20px");
                p.Panel01_02_00_00_00.set_horizontalgap("10");
                p.Panel01_02_00_00_00.set_flexcrossaxisalign("center");
                p.Panel01_02_00_00_00.set_flexmainaxisalign("end");
                p.Panel01_02_00_00_00.move("710.00","50","100%","50",null,null);

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
                p.Div04.move("0","0","100.00%","213",null,null);

                p.staSubTitle02_00_00_00_00_00.set_taborder("20");
                p.staSubTitle02_00_00_00_00_00.set_text("처리내역");
                p.staSubTitle02_00_00_00_00_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_00_00_00_00.move("30","50","100%","50",null,null);

                p.btnMinPrcs.set_taborder("21");
                p.btnMinPrcs.set_cssclass("btn_WF_ACMinus");
                p.btnMinPrcs.move("1390.00","18","34","34",null,null);

                p.Panel01_02_00_00_00_00.set_taborder("22");
                p.Panel01_02_00_00_00_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_00_00_00_00.set_spacing("0px 20px");
                p.Panel01_02_00_00_00_00.set_horizontalgap("10");
                p.Panel01_02_00_00_00_00.set_flexcrossaxisalign("center");
                p.Panel01_02_00_00_00_00.set_flexmainaxisalign("end");
                p.Panel01_02_00_00_00_00.move("710.00","50","100%","50",null,null);

                p.sub_tit05.set_taborder("23");
                p.sub_tit05.set_background("#ffffff");
                p.sub_tit05.set_flexcrossaxisalign("end");
                p.sub_tit05.set_minheight("70");
                p.sub_tit05.set_maxheight("");
                p.sub_tit05.move("0","0","100%","70",null,null);

                p.Div05.set_taborder("24");
                p.Div05.set_text("Div00");
                p.Div05.set_cssclass("div_WF_Bg");
                p.Div05.set_fittocontents("height");
                p.Div05.move("0","0","100%","304",null,null);
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
                p.Button00_02.set_taborder("2");
                p.Button00_02.set_text("서류보완");
                p.Button00_02.set_cssclass("btn_WF_No");
                p.Button00_02.set_fittocontents("none");
                p.Button00_02.move("457.00","30","120","40",null,null);

                p.Button00_01.set_taborder("1");
                p.Button00_01.set_text("불승인");
                p.Button00_01.set_fittocontents("none");
                p.Button00_01.set_visible("true");
                p.Button00_01.move("217.00","10","120","40",null,null);

                p.Button00_00.set_taborder("0");
                p.Button00_00.set_text("권한승인");
                p.Button00_00.set_cssclass("btn_WF_Yes");
                p.Button00_00.set_fittocontents("none");
                p.Button00_00.move("457.00","30","120","40",null,null);
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
            obj = new Layout("default","Desktop_screen",1480,3000,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("계정권한 승인관리 (승인자용)");

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
            obj = new BindItem("item0","divForm.form.Div01.form.edt00_00","value","dsGet","userId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.Div01.form.edt00_00_02","value","dsGet","userNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.Div01.form.edt00_00_03","value","dsGet","acntAutzrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.Div01.form.edt00_00_00","value","dsGet","eml");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.Div01.form.mEdtMblTelno","value","dsGet","userMblTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.Div01.form.edt00_00_00_00","value","dsGet","copId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.Div01.form.edt00_00_00_02_00","value","dsGet","coNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divForm.form.Div01.form.edt00_00_00_01_00","value","dsGet","userTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divForm.form.Div01.form.edt00_00_00_00_00","value","dsGet","deptNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divForm.form.Div01.form.edt00_00_00_01_00_00","value","dsGet","empExtNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divForm.form.Div01.form.edt00_00_00_00_00_00","value","dsGet","ctrtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divForm.form.Div01.form.rdoUseYn","value","dsGet","useYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divForm.form.Div01.form.rdoHandyEmlUseYn","value","dsGet","handyEmlUseYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divForm.form.Div04.form.rdoEsntl","value","dsGet","esntlAgreYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divForm.form.Div04.form.Radio00_00_00","value","dsGet","chcAgreYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divForm.form.Div05.form.edt00_00","value","dsGet","prcsSttsNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divForm.form.Div05.form.edt00_00_02","value","dsGet","prcrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divForm.form.Div05.form.txa00","value","dsGet","prcsDsctn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("COM024P25.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	COM024P25.xfdl
        *  @Creator 	ELUON INS
        *  @CreateDate 	2024/12/04
        *  @Desction
        *  @Author
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/12/04			조규완					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        this.param;
        this.prcsSeCd = "";
        this.type = "aprv";
        var cMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수
        	// 전달받은 파라메터 팝업창과 페이지오픈으로 파라메터 불러오는 방식이 달라짐
        	if(this.opener) {
        		this.param = {
        			"id" : this.getOwnerFrame().id
        		}
        	} else {
        		this.param = this.getOwnerFrame().form.fvObjArgs;
        	}
        	this.fnInit();
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
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
        	var strSvcUrl   = "sysMng/acntAuthrtAprvInfoInq.do";
        	var inData      = "";
        	var outData     = "dsGet=dsGet dsCrtr=dsCrtr dsApln=dsApln dsAuthrt=dsAuthrt dsFile1=dsFile1";
        	var strArg      = "id=" + this.param.id;
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        this.saveTransaction = function()
        {
        	var strSvcId    = "save";
        	var strSvcUrl   = "sysMng/acntAuthrtAplyInfoStrg.do";
        	var inData      = "dsGet=dsGet";
        	var outData     = "";
        	var strArg      = "type=" + this.type + " prcsSeCd=" + this.prcsSeCd;
        	var callBackFnc = "fnCallback";
        	var isAsync   	= false;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };
        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0)
        	{
        		return;
        	}

        	switch(svcID)
        	{
        		case "select":
        			if (!this.gfnIsNull(this.dsGet.getColumn(0, "prcsSttsCd"))) {
        				this.divPopBtn.form.Button00_00.enable = false;
        				this.divPopBtn.form.Button00_01.enable = false;
        				this.divPopBtn.form.Button00_02.enable = false;
        			}
        			break;
        		case "save":
        			var gvRetMsg = this.objApp.getVariable("gvRetMsg");
        			this.gfnAlertMsg("save_complete", gvRetMsg, null, "msgCallback");
        			if(this.opener) {
        				this.close();
        			} else {
        				var cMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        				this.gfnCloseMenu(cMenuId);
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
        			var cMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        			this.gfnCloseMenu(cMenuId);
        		}
        	}
        }
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	if(this.param != null && this.param.id != null && this.param.id != '') {
        		this.selectTransaction();
        	}
        }

        this.sendSms = function()
        {
        	//	dsSms dataset
        	// 	send_num		// 보내는사람 전화번호
        	// 	recipient_num	// 받는사람 전화번호
        	// 	msg_cont_rep	// 제목
        	// 	template		// 내용 템플릿ID

        	var send_num = "15881234";
        	var recipient_num = "821045805111";
        	var contentId = "TSP_36R1";

        	var 신청계정구분 = "신청계정구분";
        	var 아이디 = "아이디";
        	var 임시비밀번호 = "임시비밀번호";
        	var 문의처연락처 = "문의처연락처";


        	this.dsSms.addColumn("신청계정구분", "STRING");
        	this.dsSms.addColumn("아이디", "STRING");
        	this.dsSms.addColumn("임시비밀번호", "STRING");
        	this.dsSms.addColumn("문의처연락처", "STRING");

        	this.dsSms.setColumn(0, "send_num", send_num);
        	this.dsSms.setColumn(0, "recipient_num", recipient_num);
        	this.dsSms.setColumn(0, "contentId", contentId);
        	this.dsSms.setColumn(0, "신청계정구분", 신청계정구분);
        	this.dsSms.setColumn(0, "아이디", 아이디);
        	this.dsSms.setColumn(0, "임시비밀번호", 임시비밀번호);
        	this.dsSms.setColumn(0, "문의처연락처", 문의처연락처);


        	this.gfn_Api_sms(
        		"sms"		// API ID
        		, "dsSms"	// 데이터셋명
        		, "apiCallback");	// 콜백명
        }

        this.sendEml = function()
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

        // 파일 그리드 클릭 이벤트
        this.divForm_Div03_Grid_oncellclick = function(obj,e)
        {
        	if(e.col == 0) {
        		this.gfnDownloadFile(this.RaonkUpload, this.dsFile1, e);
        	}
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divPopBtn_Button00_00_onclick = function(obj,e)
        {
        	var prcrId = this.dsGet.getColumn(0, "prcrId");
        	this.dsGet.setColumn(0, "bfrPrcrId", prcrId);
        	var aplnId = this.dsApln.getColumn(0, "aplnId");

        	if (!this.gfnIsNull(aplnId)) {
        		this.type = "aprv";
        		this.prcsSeCd = "CTL20011";
        		this.dsGet.setColumn(0, "prcsSttsCd", "");
        		this.dsGet.setColumn(0, "prcrId", aplnId);
        		this.gfnConfirmMsg("save_confirm", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"], null);
        	} else {
        		this.type = "aprvEnd";
        		this.prcsSeCd = "CTL20015";
        		this.dsGet.setColumn(0, "prcsSttsCd", "TIDSTATUS001");
        		this.gfnConfirmMsg("save_confirm", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"], null);
        	}

        	// 메일발송
        };

        this.divForm_divPopBtn_Button00_01_onclick = function(obj,e)
        {
        	this.type = "aprvEnd";
        	this.prcsSeCd = "CTL20016";
        	this.dsGet.setColumn(0, "prcsSttsCd", "TIDSTATUS002");
        	this.gfnConfirmMsg("save_confirm", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"], null);
        };

        this.divPopBtn_Button00_02_onclick = function(obj,e)
        {
        	this.type = "aprv";
        	this.prcsSeCd = "CTL20017";
        	this.dsGet.setColumn(0, "prcsSttsCd", "TIDSTATUS003");
        	this.gfnConfirmMsg("save_confirm", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"], null);
        };

        this.divForm_Div01_btnCoInfo_onclick = function(obj,e)
        {
        	if (this.divForm.form.Div01.form.pan03_04.visible == false) {
        		var coInfo = "";
        		var coId = this.dsGet.getColumn(0, "coId");
        		var coNm = this.dsGet.getColumn(0, "coNm");
        		var brno = this.dsGet.getColumn(0, "brno");
        		var coAddr = this.dsGet.getColumn(0, "coAddr");

        		if (!this.gfnIsNull(coId)) {
        			coInfo = "회사ID : " + coId + "\n";
        			coInfo = coInfo + "회사명 : " + coNm + "\n";
        			coInfo = coInfo + "사업자등록번호 : " + brno + "\n";
        			coInfo = coInfo + "주소 : " + coAddr;
        		} else {
        			coInfo = "회사ID : \n회사명 : \사업자등록번호 : \주소 : ";
        		}
        		this.divForm.form.Div01.form.staCoInfo.text = coInfo;
        		this.divForm.form.Div01.form.pan03_04.visible = true;
        	} else {
        		this.divForm.form.Div01.form.pan03_04.visible = false;
        	}

        	this.divForm.form.resetScroll();
        };

        // +, - 버튼
        this.btnMin_onclick = function(obj,e)
        {
        	var objNm = obj.name;
        	var objClass = obj.cssclass;
        	var objDiv = null;
        	var divVisible = false;

        	// 해당 div 찾아줌.
        	if(objNm == "btnMinBscInfo") {
        		objDiv = this.divForm.form.Div01;
        	} else if(objNm == "btnMinAuthrtInfo") {
        		objDiv = this.divForm.form.Div02;
        	} else if(objNm == "btnMinAtfl") {
        		objDiv = this.divForm.form.Div03;
        	} else if(objNm == "btnMinAreYn") {
        		objDiv = this.divForm.form.Div04;
        	} else if(objNm == "btnMinPrcs") {
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
            this.divForm.form.Div01.form.btnCoInfo.addEventHandler("onclick",this.divForm_Div01_btnCoInfo_onclick,this);
            this.divForm.form.btnMinBscInfo.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.btnMinAuthrtInfo.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.btnMinAtfl.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.Div03.form.btn_file_2_00_00.addEventHandler("onclick",this.divForm_Div04_btn_file_2_onclick,this);
            this.divForm.form.Div03.form.btn_del_file_2_00.addEventHandler("onclick",this.divForm_Div04_btn_del_file_2_onclick,this);
            this.divForm.form.Div03.form.Grid00_01_00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_01_oncellclick,this);
            this.divForm.form.Div03.form.Grid00_01_00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_01_oncelldblclick,this);
            this.divForm.form.btnMinAreYn.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.Div04.form.Radio00_00_00.addEventHandler("onitemchanged",this.divForm_Div00_Radio00_00_onitemchanged,this);
            this.divForm.form.btnMinPrcs.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divPopBtn.form.Button00_02.addEventHandler("onclick",this.divPopBtn_Button00_02_onclick,this);
            this.divPopBtn.form.Button00_01.addEventHandler("onclick",this.divPopBtn_Button00_01_onclick,this);
            this.divPopBtn.form.Button00_00.addEventHandler("onclick",this.divPopBtn_Button00_00_onclick,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterAddFile",this.RaonkUpload_RAONKUPLOAD_AfterAddFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_CreationComplete",this.RaonkUpload_RAONKUPLOAD_CreationComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_UploadComplete",this.RaonkUpload_RAONKUPLOAD_UploadComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_OnError",this.RaonkUpload_RAONKUPLOAD_OnError,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_BeforeAddFile",this.RaonkUpload_RAONKUPLOAD_BeforeAddFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterAddAllFile",this.RaonkUpload_RAONKUPLOAD_AfterAddAllFile,this);
        };
        this.loadIncludeScript("COM024P25.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
