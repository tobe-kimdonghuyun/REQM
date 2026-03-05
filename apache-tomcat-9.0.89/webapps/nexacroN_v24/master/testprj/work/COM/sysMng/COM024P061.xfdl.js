(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM024P061");
            this.set_titletext("직원 상세 (PC)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,2700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGet", this);
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userNm\" type=\"STRING\" size=\"256\"/><Column id=\"acntAutzrId\" type=\"STRING\" size=\"256\"/><Column id=\"acntAutzrNm\" type=\"STRING\" size=\"256\"/><Column id=\"pswd\" type=\"STRING\" size=\"256\"/><Column id=\"eml\" type=\"STRING\" size=\"256\"/><Column id=\"userTelno\" type=\"STRING\" size=\"256\"/><Column id=\"userMblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"copId\" type=\"STRING\" size=\"256\"/><Column id=\"coId\" type=\"STRING\" size=\"256\"/><Column id=\"coNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptId\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"empExtNo\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNm\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"handyEmlUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"mngrIp\" type=\"STRING\" size=\"256\"/><Column id=\"emlRcptnYn\" type=\"STRING\" size=\"256\"/><Column id=\"smsRcptnPrgrsYn\" type=\"STRING\" size=\"256\"/><Column id=\"smsRcptnNewYn\" type=\"STRING\" size=\"256\"/><Column id=\"smsRcptnAcntYn\" type=\"STRING\" size=\"256\"/><Column id=\"rfslDt\" type=\"STRING\" size=\"256\"/><Column id=\"refwEblcPrcsDt\" type=\"STRING\" size=\"256\"/><Column id=\"delTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"delTrgtRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"flrplnPrmIp\" type=\"STRING\" size=\"256\"/><Column id=\"userTat1Yn\" type=\"STRING\" size=\"256\"/><Column id=\"userTat2Yn\" type=\"STRING\" size=\"256\"/><Column id=\"mvmnRgnYn\" type=\"STRING\" size=\"256\"/><Column id=\"hireHpeYn\" type=\"STRING\" size=\"256\"/><Column id=\"cpatcoEmpYn\" type=\"STRING\" size=\"256\"/><Column id=\"iiacEmpYn\" type=\"STRING\" size=\"256\"/><Column id=\"tatYn\" type=\"STRING\" size=\"256\"/><Column id=\"prmsSalsYn\" type=\"STRING\" size=\"256\"/><Column id=\"evntFcltYn\" type=\"STRING\" size=\"256\"/><Column id=\"lbsvcEtcYn\" type=\"STRING\" size=\"256\"/><Column id=\"idAplyType\" type=\"STRING\" size=\"256\"/><Column id=\"userSe\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCtrtInfoList", this);
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNm\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtType\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtTypeNm\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtYmd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtEndYmd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAuthInfoList", this);
            obj._setContents("<ColumnInfo><Column id=\"authYn\" type=\"STRING\" size=\"256\"/><Column id=\"authrtId\" type=\"STRING\" size=\"256\"/><Column id=\"authrtNm\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsIpBand", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cdNm\">사용안함</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAuthInfoSave", this);
            obj._setContents("<ColumnInfo><Column id=\"authYn\" type=\"STRING\" size=\"256\"/><Column id=\"authrtId\" type=\"STRING\" size=\"256\"/><Column id=\"authrtNm\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divGuide","1590.00","135","450","385",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("false");
            obj.set_cssclass("div_GD_Tip");
            this.addChild(obj.name, obj);

            obj = new Div("divForm","20","10",null,null,"20","70",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Panel("sub_tit01","-14","28","100%","70",null,null,null,null,"70",null,this.divForm.form);
            obj.set_taborder("10");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","678","56","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("9");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 20px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnMinBscInfo\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinBscInfo","1319","64","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_visible("true");
            obj.set_text("");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle01","-17","56","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("7");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div01","0","0","100%","480",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_01_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel00_01_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("1");
            obj.set_text("아이디");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtUserId","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtUserId\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("4");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"edtEml\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("6");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Pane01_02\"/><PanelItem id=\"PanelItem03\" componentid=\"Pane01_02_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel03","626","265","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("47");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divEdtPop00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("7");
            obj.set_text("휴대전화번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Pane01_02","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02\"/><PanelItem id=\"PanelItem02\" componentid=\"edtUserMblTelno\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel02","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("9");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel06_01_02_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel06_01_00\"/><PanelItem id=\"PanelItem04\" componentid=\"pan02_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtEml","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("10");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtUserMblTelno","0.00","46","100.00%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("11");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel00_01_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("12");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtUserNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("13");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel00_01_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("14");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtUserNm\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel00_01_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("15");
            obj.set_text("계정관리자(승인자)");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtAcntAutzrId","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("16");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel00_01_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("17");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtAcntAutzrId\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("18");
            obj.set_text("협업포털ID");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtCopId","0.00","46","100.00%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("19");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Pane01_02_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("20");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edtCopId\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel06_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("21");
            obj.set_text("내선번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtEmpExtNo","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("22");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel06_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("23");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel06_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtEmpExtNo\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel06_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("24");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Radio("rdoUseYn","0.00","46","313","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("25");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div01_form_rdoUseYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div01_form_rdoUseYn_innerdataset", obj);
            divForm_form_Div01_form_rdoUseYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div01_form_rdoUseYn_innerdataset);
            obj.set_text("");
            obj.set_value("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel06_02","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("26");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel06_02\"/><PanelItem id=\"PanelItem03\" componentid=\"rdoUseYn\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel06","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("27");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel06_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel06_01\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel06_01_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel06_01_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("28");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtUserTelno","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("29");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel06_01_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("30");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel06_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtUserTelno\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("31");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Div("divEdtPop","43.00","393","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("32");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtDeptNm","0","0",null,"40","0",null,null,null,null,null,this.divForm.form.Div01.form.divEdtPop.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_readonly("true");
            this.divForm.form.Div01.form.divEdtPop.addChild(obj.name, obj);

            obj = new Button("btnPop","edtDeptNm:-40","0","40","40",null,null,null,null,null,null,this.divForm.form.Div01.form.divEdtPop.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            this.divForm.form.Div01.form.divEdtPop.addChild(obj.name, obj);

            obj = new Panel("pan02_00","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("33");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"divEdtPop\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel06_01_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("34");
            obj.set_text("계약명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtCtrtNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("35");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel06_01_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("36");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel06_01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtCtrtNm\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel06_02_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("37");
            obj.set_text("핸디메일 사용여부");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Radio("rdoHandyEmlUseYn","0.00","46","313","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("38");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div01_form_rdoHandyEmlUseYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div01_form_rdoHandyEmlUseYn_innerdataset", obj);
            divForm_form_Div01_form_rdoHandyEmlUseYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div01_form_rdoHandyEmlUseYn_innerdataset);
            obj.set_text("");
            obj.set_value("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel06_02_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("39");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel06_02_00\"/><PanelItem id=\"PanelItem03\" componentid=\"rdoHandyEmlUseYn\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel06_01_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("40");
            obj.set_text("관리자IP");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtIp","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("41");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel06_01_02","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("42");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel06_01_02\"/><PanelItem id=\"PanelItem01\" componentid=\"edtIp\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel06_01_01_00","10.00","98","305","1",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("43");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel06_00","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("44");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel06_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel06_01_02\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel06_01_01_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel06_01_02_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("45");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel06_01_02_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("46");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel06_01_02_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel03\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Div("divEdtPop00","43.00","393","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("48");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtCoNm","0","0",null,"40","0",null,null,null,null,null,this.divForm.form.Div01.form.divEdtPop00.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_readonly("true");
            this.divForm.form.Div01.form.divEdtPop00.addChild(obj.name, obj);

            obj = new Button("btnPop","edtCoNm:-40","0","40","40",null,null,null,null,null,null,this.divForm.form.Div01.form.divEdtPop00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            this.divForm.form.Div01.form.divEdtPop00.addChild(obj.name, obj);

            obj = new Panel("sub_tit02","-14","28","100%","70",null,null,null,null,"70",null,this.divForm.form);
            obj.set_taborder("14");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel02","668","652","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("13");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 20px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnMinCtrtInfo\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinCtrtInfo","1309","660","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_visible("true");
            obj.set_text("");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle02","-27","652","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("11");
            obj.set_text("관련 계약 정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div02","0","30","100%","251",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divGrd","0","30","100.00%","100%",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Div("divPage","0","637","100.00%","36",null,null,null,null,"36",null,this.divForm.form.Div02.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_url("work::COM/util/paging/paging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.Div02.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn",null,"0","450","34","0",null,null,null,null,null,this.divForm.form.Div02.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_fittocontents("width");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"btnGrdDel\"/><PanelItem id=\"PanelItem00\" componentid=\"btnGrdRegi\"/></Contents>");
            this.divForm.form.Div02.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("grdCtrtInfoList","0","PanelGrdBtn:10","100.00%","186",null,null,null,null,null,null,this.divForm.form.Div02.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsCtrtInfoList");
            obj.set_autofittype("col");
            obj.getSetter("uFunction").set("checkbox");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"59\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"계약번호\"/><Cell col=\"2\" text=\"계약명\"/><Cell col=\"3\" text=\"계약상태\"/><Cell col=\"4\" text=\"계약유형명\"/><Cell col=\"5\" text=\"계약일\"/><Cell col=\"6\" text=\"계약시작일\"/><Cell col=\"7\" text=\"계약종료일\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:ctrtNo\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:ctrtNm\" displaytype=\"text\" textAlign=\"left\" tooltiptext=\"bind:ctrtNm\"/><Cell col=\"3\" text=\"bind:계약상태\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:ctrtTypeNm\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:ctrtYmd\" displaytype=\"date\" cssclass=\"expr:state==&apos;0&apos;?&apos;CellTxtRed&apos;:&apos;CellTxtBlue&apos;\" textAlign=\"center\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" text=\"bind:ctrtBgngYmd\" textAlign=\"center\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" text=\"bind:ctrtEndYmd\" textAlign=\"center\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.divForm.form.Div02.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","200","34",null,null,null,null,null,null,this.divForm.form.Div02.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_text("총 <fc v=\'#1e4ebe\'>100</fc>건");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            this.divForm.form.Div02.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdRegi","405.00","0","55","34",null,null,null,null,null,null,this.divForm.form.Div02.form.divGrd.form);
            obj.set_taborder("4");
            obj.set_text("연결");
            obj.set_cssclass("btn_WF_SmallBlack");
            obj.set_visible("true");
            this.divForm.form.Div02.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDel","350.00","0","55","34",null,null,null,null,null,null,this.divForm.form.Div02.form.divGrd.form);
            obj.set_taborder("5");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("true");
            this.divForm.form.Div02.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","10.00","98","100%","230",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("1");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divGrd\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","251",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("2");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("sub_tit03","-14","28","100%","70",null,null,null,null,"70",null,this.divForm.form);
            obj.set_taborder("18");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle03\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel03\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div03","0","0","100%","192",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel06_02_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("0");
            obj.set_text("서비스 진행현황 (이메일)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Radio("rdoEmlRcptnYn","200.00","328","160","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div03_form_rdoEmlRcptnYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div03_form_rdoEmlRcptnYn_innerdataset", obj);
            divForm_form_Div03_form_rdoEmlRcptnYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div03_form_rdoEmlRcptnYn_innerdataset);
            obj.set_text("");
            obj.set_value("");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel06_02_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel06_02_00\"/><PanelItem id=\"PanelItem03\" componentid=\"rdoEmlRcptnYn\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel06_00","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("3");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel06_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel06_02_00_00\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel06_02_00_01\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel06_02_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("4");
            obj.set_text("서비스 진행현황 (SMS 또는 카카오톡)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Radio("rdoSmsRcptnPrgrsYn","200.00","328","160","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div03_form_rdoSmsRcptnPrgrsYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div03_form_rdoSmsRcptnPrgrsYn_innerdataset", obj);
            divForm_form_Div03_form_rdoSmsRcptnPrgrsYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div03_form_rdoSmsRcptnPrgrsYn_innerdataset);
            obj.set_text("");
            obj.set_value("");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel06_02_00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel06_02_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"rdoSmsRcptnPrgrsYn\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel06_02_00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("7");
            obj.set_text("뉴스 및 이벤트 (SMS 또는 카카오톡)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Radio("rdoSmsRcptnNewYn","200.00","328","160","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div03_form_rdoSmsRcptnNewYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div03_form_rdoSmsRcptnNewYn_innerdataset", obj);
            divForm_form_Div03_form_rdoSmsRcptnNewYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div03_form_rdoSmsRcptnNewYn_innerdataset);
            obj.set_text("");
            obj.set_value("");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel06_02_00_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel06_02_00_01\"/><PanelItem id=\"PanelItem03\" componentid=\"rdoSmsRcptnNewYn\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel06_02_00_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("10");
            obj.set_text("계정승인 요청현황 (SMS 또는 카카오톡)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Radio("rdoSmsRcptnAcntYn","200.00","328","160","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("11");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_readonly("false");
            obj.set_enableevent("true");
            obj.set_enable("false");
            var divForm_form_Div03_form_rdoSmsRcptnAcntYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div03_form_rdoSmsRcptnAcntYn_innerdataset", obj);
            divForm_form_Div03_form_rdoSmsRcptnAcntYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div03_form_rdoSmsRcptnAcntYn_innerdataset);
            obj.set_text("");
            obj.set_value("");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel06_02_00_02","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("12");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel06_02_00_02\"/><PanelItem id=\"PanelItem03\" componentid=\"rdoSmsRcptnAcntYn\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel06_02_00_00_00","10.00","98","305","1",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("13");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel06_02_00_01_00","10.00","98","305","1",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("14");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel06_00_00","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("15");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel06_02_00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel06_02_00_00_00\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel06_02_00_01_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("sub_tit04","-14","28","100%","70",null,null,null,null,"70",null,this.divForm.form);
            obj.set_taborder("26");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle04\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel04\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div04","0","0","100%","288",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel06_02_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("0");
            obj.set_text("입주자(기본)");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Radio("rdoIdAplyType1","200.00","328","160","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div04_form_rdoIdAplyType1_innerdataset = new nexacro.NormalDataset("divForm_form_Div04_form_rdoIdAplyType1_innerdataset", obj);
            divForm_form_Div04_form_rdoIdAplyType1_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div04_form_rdoIdAplyType1_innerdataset);
            obj.set_text("");
            obj.set_value("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel06_02_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel06_02_00\"/><PanelItem id=\"PanelItem03\" componentid=\"rdoIdAplyType1\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel06_00","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("3");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel06_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel06_02_00_00\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel06_02_00_01\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel06_02_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("4");
            obj.set_text("입주자(계정관리자)");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Radio("rdoIdAplyType2","200.00","328","160","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div04_form_rdoIdAplyType2_innerdataset = new nexacro.NormalDataset("divForm_form_Div04_form_rdoIdAplyType2_innerdataset", obj);
            divForm_form_Div04_form_rdoIdAplyType2_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div04_form_rdoIdAplyType2_innerdataset);
            obj.set_text("");
            obj.set_value("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel06_02_00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel06_02_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"rdoIdAplyType2\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel06_02_00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("7");
            obj.set_text("이동지역 신청");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Radio("rdoMvmnRgnYn","200.00","328","160","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div04_form_rdoMvmnRgnYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div04_form_rdoMvmnRgnYn_innerdataset", obj);
            divForm_form_Div04_form_rdoMvmnRgnYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div04_form_rdoMvmnRgnYn_innerdataset);
            obj.set_text("");
            obj.set_value("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel06_02_00_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel06_02_00_01\"/><PanelItem id=\"PanelItem03\" componentid=\"rdoMvmnRgnYn\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel06_02_00_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("10");
            obj.set_text("신규 임차희망");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Radio("rdoHireHpeYn","200.00","328","160","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("11");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div04_form_rdoHireHpeYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div04_form_rdoHireHpeYn_innerdataset", obj);
            divForm_form_Div04_form_rdoHireHpeYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div04_form_rdoHireHpeYn_innerdataset);
            obj.set_text("");
            obj.set_value("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel06_02_00_02","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("12");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel06_02_00_02\"/><PanelItem id=\"PanelItem03\" componentid=\"rdoHireHpeYn\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel06_00_00","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("13");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel06_02_00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel06_02_00_02_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel06_02_00_02_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel06_02_00_02_00","902.00","184","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("14");
            obj.set_text("구내영업 신청");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Radio("rdoPrmsSalsYn","902.00","230","160","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("15");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div04_form_rdoPrmsSalsYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div04_form_rdoPrmsSalsYn_innerdataset", obj);
            divForm_form_Div04_form_rdoPrmsSalsYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div04_form_rdoPrmsSalsYn_innerdataset);
            obj.set_text("");
            obj.set_value("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel06_02_00_02_00","902.00","184","305","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("16");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel06_02_00_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"rdoPrmsSalsYn\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel06_02_00_02_00_00","899.00","182","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("17");
            obj.set_text("행사시설 신청");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Radio("rdoEvntFcltYn","899.00","229","160","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("18");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div04_form_rdoEvntFcltYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div04_form_rdoEvntFcltYn_innerdataset", obj);
            divForm_form_Div04_form_rdoEvntFcltYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div04_form_rdoEvntFcltYn_innerdataset);
            obj.set_text("");
            obj.set_value("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel06_02_00_02_00_00","899.00","182","305","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("19");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel06_02_00_02_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"rdoEvntFcltYn\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel06_02_00_02_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("20");
            obj.set_text("납품/용역/기타");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Radio("rdoLbsvcEtcYn","200.00","328","160","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("21");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div04_form_rdoLbsvcEtcYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div04_form_rdoLbsvcEtcYn_innerdataset", obj);
            divForm_form_Div04_form_rdoLbsvcEtcYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div04_form_rdoLbsvcEtcYn_innerdataset);
            obj.set_text("");
            obj.set_value("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel06_02_00_02_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("22");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel06_02_00_02_01\"/><PanelItem id=\"PanelItem03\" componentid=\"rdoLbsvcEtcYn\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel06_02_00_02_00_01","902.00","184","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("23");
            obj.set_text("자회사처리자");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Radio("rdoCpatcoEmpYn","902.00","230","160","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("24");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div04_form_rdoCpatcoEmpYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div04_form_rdoCpatcoEmpYn_innerdataset", obj);
            divForm_form_Div04_form_rdoCpatcoEmpYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div04_form_rdoCpatcoEmpYn_innerdataset);
            obj.set_text("");
            obj.set_value("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel06_02_00_02_00_01","902.00","184","305","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("25");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel06_02_00_02_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"rdoCpatcoEmpYn\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel06_02_00_02_00_00_00","899.00","182","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("26");
            obj.set_text("공사직원");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Radio("rdoIiacEmpYn","899.00","229","160","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("27");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div04_form_rdoIiacEmpYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div04_form_rdoIiacEmpYn_innerdataset", obj);
            divForm_form_Div04_form_rdoIiacEmpYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div04_form_rdoIiacEmpYn_innerdataset);
            obj.set_text("");
            obj.set_value("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel06_02_00_02_00_00_00","899.00","182","305","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("28");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel06_02_00_02_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"rdoIiacEmpYn\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel06_00_00_00","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("29");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel06_02_00_02_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel06_02_00_02_00_01\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel06_02_00_02_00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("sub_tit05","-14","28","100%","70",null,null,null,null,"70",null,this.divForm.form);
            obj.set_taborder("22");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle05\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel05\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div05","0","1491","100%","192",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_01_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staLabel00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("1");
            obj.set_text("알림 거부 설정 상태");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Edit("edtRfslDt","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtRfslDt\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staLabel00_01_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("4");
            obj.set_text("거부기간 메시지 일괄 발송 설정 상태");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Edit("edtRefwEblcPrcsDt","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel00_01_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtRefwEblcPrcsDt\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staLabel06_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("7");
            obj.set_text("삭제 대상 등록 일시");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Edit("edtDelTrgtRegDt","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel06_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel06_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtDelTrgtRegDt\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staLabel06_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("10");
            obj.set_text("삭제 대상 여부");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Radio("rdoDelTrgtYn","200.00","328","393","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("11");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div05_form_rdoDelTrgtYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div05_form_rdoDelTrgtYn_innerdataset", obj);
            divForm_form_Div05_form_rdoDelTrgtYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div05_form_rdoDelTrgtYn_innerdataset);
            obj.set_text("");
            obj.set_value("");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel06_02","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("12");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel06_02\"/><PanelItem id=\"PanelItem03\" componentid=\"rdoDelTrgtYn\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel06","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("13");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel06_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel06_01\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("sub_tit06","-14","28","100%","70",null,null,null,null,"70",null,this.divForm.form);
            obj.set_taborder("30");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle06\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel06\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div06","0","0","100%","557",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_01_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel00_01_00_00\"/></Contents>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Button("btnPswdReset","510","120","100%","40",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("7");
            obj.set_text("비밀번호 초기화");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Static("staLabel00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("1");
            obj.set_text("비밀번호 초기화");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"btnPswdReset\"/></Contents>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("Panel00_01_00","10.00","98","305","1",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Div("divGrd","0","30","100.00%","100%",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("4");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Div("divPage","0","637","100.00%","36",null,null,null,null,"36",null,this.divForm.form.Div06.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_url("work::COM/util/paging/paging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.Div06.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn",null,"7","450","34","0",null,null,null,null,null,this.divForm.form.Div06.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_fittocontents("width");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnAuthSave\"/></Contents>");
            this.divForm.form.Div06.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("grdAuthInfoList","0","PanelGrdBtn:10","100.00%","363",null,null,null,null,null,null,this.divForm.form.Div06.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsAuthInfoList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"150\"/><Column size=\"800\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"ID\"/><Cell col=\"2\" text=\"권한명\"/></Band><Band id=\"body\"><Cell text=\"bind:authYn\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:authrtId\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:authrtNm\" displaytype=\"text\" textAlign=\"left\"/></Band></Format></Formats>");
            this.divForm.form.Div06.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","7","200","34",null,null,null,null,null,null,this.divForm.form.Div06.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_text("권한");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            this.divForm.form.Div06.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnAuthSave","774.00","10","90","34",null,null,null,null,null,null,this.divForm.form.Div06.form.divGrd.form);
            obj.set_taborder("4");
            obj.set_text("권한적용");
            obj.set_cssclass("btn_WF_SmallBlack");
            obj.set_visible("true");
            this.divForm.form.Div06.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("pan01_01","10.00","98","970","450",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"divGrd\"/></Contents>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("pan01","0","60","100.00%","461",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("6");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan01_01\"/></Contents>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("Panel00_01_00_00","10.00","98","305","1",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("sub_tit07","-14","28","100%","70",null,null,null,null,"70",null,this.divForm.form);
            obj.set_taborder("34");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle07\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel07\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div07","0","0","100%","140",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("6");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","60","100.00%","140",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Panel00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_01_00\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("Panel00_01_00","10.00","98","305","1",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("1");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("2");
            obj.set_text("도면허용 IP");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("Panel01","378","200","100%","110",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"pan01_01_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"sta00\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","10.00","98","305","150",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel01\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Combo("cmbIpBand","-60.00","65","30%","40",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("5");
            obj.set_flexgrow("1");
            obj.set_innerdataset("dsIpBand");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("사용안함");
            obj.set_value("");
            obj.set_index("0");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Edit("edtFlrplnPrmIp01","180.00","114","30%","40",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_01_00_00","10","98","6","40",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("7");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Edit("edtFlrplnPrmIp02","180.00","114","30%","40",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("pan01_01_01_00","30.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("9");
            obj.set_type("horizontal");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"cmbIpBand\"/><PanelItem id=\"PanelItem02\" componentid=\"edtFlrplnPrmIp01\"/><PanelItem id=\"PanelItem05\" componentid=\"staLabel01_00_01_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"edtFlrplnPrmIp02\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Static("sta00","43.00","1383","100%","40",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("10");
            obj.set_text("등록 가능한 IP는 인천국제공항공사가 관리하는 네트워크 대역 한정입니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_wordWrap("char");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("Panel00_01_00_00","10.00","98","305","1",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("11");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Static("staSubTitle03","-27","652","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("15");
            obj.set_text("알림설정 발송 여부");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinAlrmYn","1309","660","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_visible("true");
            obj.set_text("");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel03","668","652","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("17");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 20px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnMinAlrmYn\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle05","-27","652","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("19");
            obj.set_text("알림 거부 설정, 업무 위임 설정, 삭제대상 여부");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinEtc","1309","660","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_visible("true");
            obj.set_text("");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel05","668","652","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("21");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 20px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnMinEtc\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle04","-27","652","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("23");
            obj.set_text("사용자 구분 설정");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinUserSe","1309","660","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_visible("true");
            obj.set_text("");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel04","668","652","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("25");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 20px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnMinUserSe\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle06","-27","652","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("27");
            obj.set_text("중요정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinImportInfo","1309","660","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("28");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_visible("true");
            obj.set_text("");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel06","668","652","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("29");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 20px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnMinImportInfo\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle07","-27","652","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("31");
            obj.set_text("도면허용 IP 정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinIpInfo","1309","660","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("32");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_visible("true");
            obj.set_text("");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel07","668","652","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("33");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 20px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnMinIpInfo\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divPopBtn","20",null,null,"60","20","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","457.00","30","100","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("0");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_fittocontents("width");
            this.divPopBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divGuide.form
            obj = new Layout("default","",0,0,this.divGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divGuide.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divGuide.form
            obj = new Layout("mobile","",0,0,this.divGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divGuide.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div01.form.divEdtPop.form
            obj = new Layout("default","",0,0,this.divForm.form.Div01.form.divEdtPop.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.edtDeptNm.set_taborder("0");
                p.edtDeptNm.set_cssclass("edt_WF_EdtSch");
                p.edtDeptNm.set_readonly("true");
                p.edtDeptNm.move("0","0",null,"40","0",null);

                p.btnPop.set_taborder("1");
                p.btnPop.set_cssclass("btn_WF_EdtSch");
                p.btnPop.move("edtDeptNm:-40","0","40","40",null,null);
            	}
            );
            this.divForm.form.Div01.form.divEdtPop.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div01.form.divEdtPop.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div01.form.divEdtPop.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.Div01.form.divEdtPop.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div01.form.divEdtPop.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div01.form.divEdtPop.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.Div01.form.divEdtPop.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div01.form.divEdtPop00.form
            obj = new Layout("default","",0,0,this.divForm.form.Div01.form.divEdtPop00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.edtCoNm.set_taborder("0");
                p.edtCoNm.set_cssclass("edt_WF_EdtSch");
                p.edtCoNm.set_readonly("true");
                p.edtCoNm.move("0","0",null,"40","0",null);

                p.btnPop.set_taborder("1");
                p.btnPop.set_cssclass("btn_WF_EdtSch");
                p.btnPop.move("edtCoNm:-40","0","40","40",null,null);
            	}
            );
            this.divForm.form.Div01.form.divEdtPop00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div01.form.divEdtPop00.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div01.form.divEdtPop00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.Div01.form.divEdtPop00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div01.form
            obj = new Layout("default","",0,0,this.divForm.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.set_taborder("0");
                p.Panel00.set_horizontalgap("20");
                p.Panel00.set_flexcrossaxiswrapalign("start");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_verticalgap("0");
                p.Panel00.set_spacing("0px 20px 10px 20px");
                p.Panel00.set_cssclass("pal_WF_DtlBg");
                p.Panel00.move("0","60","100.00%","96",null,null);

                p.staLabel00_01.set_taborder("1");
                p.staLabel00_01.set_text("아이디");
                p.staLabel00_01.set_cssclass("sta_WF_Label");
                p.staLabel00_01.move("10","98","100%","46",null,null);

                p.edtUserId.set_taborder("2");
                p.edtUserId.set_readonly("true");
                p.edtUserId.move("10.00","158","100%","40",null,null);

                p.Panel00_01.set_taborder("3");
                p.Panel00_01.set_type("vertical");
                p.Panel00_01.set_flexgrow("1");
                p.Panel00_01.move("10.00","98","305","86",null,null);

                p.staLabel01_01.set_taborder("4");
                p.staLabel01_01.set_text("이메일");
                p.staLabel01_01.set_cssclass("sta_WF_Label_E");
                p.staLabel01_01.move("10","98","100%","46",null,null);

                p.Panel01_01.set_taborder("5");
                p.Panel01_01.set_type("vertical");
                p.Panel01_01.set_flexgrow("1");
                p.Panel01_01.move("10.00","98","305","86",null,null);

                p.Panel01.set_taborder("6");
                p.Panel01.set_horizontalgap("20");
                p.Panel01.set_flexcrossaxiswrapalign("start");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.set_verticalgap("0");
                p.Panel01.set_spacing("0px 20px 10px 20px");
                p.Panel01.set_cssclass("pal_WF_DtlBg");
                p.Panel01.set_flexshrink("1");
                p.Panel01.set_fittocontents("height");
                p.Panel01.move("0","60","100.00%","96",null,null);

                p.Panel03.set_taborder("47");
                p.Panel03.set_horizontalgap("10");
                p.Panel03.move("626","265","100%","40",null,null);

                p.staLabel01_02.set_taborder("7");
                p.staLabel01_02.set_text("휴대전화번호");
                p.staLabel01_02.set_cssclass("sta_WF_Label_E");
                p.staLabel01_02.move("10","98","100%","46",null,null);

                p.Pane01_02.set_taborder("8");
                p.Pane01_02.set_type("vertical");
                p.Pane01_02.set_flexgrow("1");
                p.Pane01_02.move("10.00","98","305","86",null,null);

                p.Panel02.set_taborder("9");
                p.Panel02.set_horizontalgap("20");
                p.Panel02.set_flexcrossaxiswrapalign("start");
                p.Panel02.set_flexwrap("wrap");
                p.Panel02.set_verticalgap("0");
                p.Panel02.set_spacing("0px 20px 10px 20px");
                p.Panel02.set_cssclass("pal_WF_DtlBg");
                p.Panel02.set_flexshrink("1");
                p.Panel02.set_fittocontents("height");
                p.Panel02.move("0","60","100.00%","96",null,null);

                p.edtEml.set_taborder("10");
                p.edtEml.set_readonly("false");
                p.edtEml.move("10.00","158","100%","40",null,null);

                p.edtUserMblTelno.set_taborder("11");
                p.edtUserMblTelno.set_readonly("false");
                p.edtUserMblTelno.move("0.00","46","100.00%","40",null,null);

                p.staLabel00_01_00.set_taborder("12");
                p.staLabel00_01_00.set_text("성명");
                p.staLabel00_01_00.set_cssclass("sta_WF_Label");
                p.staLabel00_01_00.move("10","98","100%","46",null,null);

                p.edtUserNm.set_taborder("13");
                p.edtUserNm.set_readonly("true");
                p.edtUserNm.move("10.00","158","100%","40",null,null);

                p.Panel00_01_00.set_taborder("14");
                p.Panel00_01_00.set_type("vertical");
                p.Panel00_01_00.set_flexgrow("1");
                p.Panel00_01_00.move("10.00","98","305","86",null,null);

                p.staLabel00_01_01.set_taborder("15");
                p.staLabel00_01_01.set_text("계정관리자(승인자)");
                p.staLabel00_01_01.set_cssclass("sta_WF_Label");
                p.staLabel00_01_01.move("10","98","100%","46",null,null);

                p.edtAcntAutzrId.set_taborder("16");
                p.edtAcntAutzrId.set_readonly("true");
                p.edtAcntAutzrId.move("10.00","158","100%","40",null,null);

                p.Panel00_01_01.set_taborder("17");
                p.Panel00_01_01.set_type("vertical");
                p.Panel00_01_01.set_flexgrow("1");
                p.Panel00_01_01.move("10.00","98","305","86",null,null);

                p.staLabel01_02_00.set_taborder("18");
                p.staLabel01_02_00.set_text("협업포털ID");
                p.staLabel01_02_00.set_cssclass("sta_WF_Label");
                p.staLabel01_02_00.move("10","98","100%","46",null,null);

                p.edtCopId.set_taborder("19");
                p.edtCopId.set_readonly("false");
                p.edtCopId.move("0.00","46","100.00%","40",null,null);

                p.Pane01_02_00.set_taborder("20");
                p.Pane01_02_00.set_type("vertical");
                p.Pane01_02_00.set_flexgrow("1");
                p.Pane01_02_00.move("10.00","98","305","86",null,null);

                p.staLabel06_01.set_taborder("21");
                p.staLabel06_01.set_text("내선번호");
                p.staLabel06_01.set_cssclass("sta_WF_Label");
                p.staLabel06_01.move("10","98","100%","46",null,null);

                p.edtEmpExtNo.set_taborder("22");
                p.edtEmpExtNo.set_readonly("false");
                p.edtEmpExtNo.move("10.00","158","100%","40",null,null);

                p.Panel06_01.set_taborder("23");
                p.Panel06_01.set_type("vertical");
                p.Panel06_01.set_flexgrow("1");
                p.Panel06_01.set_minwidth("");
                p.Panel06_01.move("10.00","98","305","86",null,null);

                p.staLabel06_02.set_taborder("24");
                p.staLabel06_02.set_text("사용여부");
                p.staLabel06_02.set_cssclass("sta_WF_Label_E");
                p.staLabel06_02.move("10","98","100%","46",null,null);

                p.rdoUseYn.set_taborder("25");
                p.rdoUseYn.set_innerdataset(divForm_form_Div01_form_rdoUseYn_innerdataset);
                p.rdoUseYn.set_codecolumn("codecolumn");
                p.rdoUseYn.set_datacolumn("datacolumn");
                p.rdoUseYn.set_direction("vertical");
                p.rdoUseYn.set_fittocontents("width");
                p.rdoUseYn.set_value("");
                p.rdoUseYn.move("0.00","46","313","40",null,null);

                p.Panel06_02.set_taborder("26");
                p.Panel06_02.set_type("vertical");
                p.Panel06_02.set_flexgrow("1");
                p.Panel06_02.set_minwidth("");
                p.Panel06_02.move("10.00","98","305","86",null,null);

                p.Panel06.set_taborder("27");
                p.Panel06.set_horizontalgap("20");
                p.Panel06.set_flexcrossaxiswrapalign("start");
                p.Panel06.set_flexwrap("wrap");
                p.Panel06.set_fittocontents("height");
                p.Panel06.set_verticalgap("0");
                p.Panel06.set_spacing("0px 20px 10px 20px");
                p.Panel06.set_cssclass("pal_WF_DtlBg");
                p.Panel06.set_type("horizontal");
                p.Panel06.move("0","60","100.00%","96",null,null);

                p.staLabel06_01_00.set_taborder("28");
                p.staLabel06_01_00.set_text("전화번호");
                p.staLabel06_01_00.set_cssclass("sta_WF_Label");
                p.staLabel06_01_00.move("10","98","100%","46",null,null);

                p.edtUserTelno.set_taborder("29");
                p.edtUserTelno.set_readonly("false");
                p.edtUserTelno.move("10.00","158","100%","40",null,null);

                p.Panel06_01_00.set_taborder("30");
                p.Panel06_01_00.set_type("vertical");
                p.Panel06_01_00.set_flexgrow("1");
                p.Panel06_01_00.set_minwidth("");
                p.Panel06_01_00.move("10.00","98","305","86",null,null);

                p.staLabel03_00_00.set_taborder("31");
                p.staLabel03_00_00.set_text("부서");
                p.staLabel03_00_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00_00.move("10","98","100%","46",null,null);

                p.divEdtPop.set_taborder("32");
                p.divEdtPop.set_text("Div00");
                p.divEdtPop.set_formscrollbartype("none none");
                p.divEdtPop.set_formscrolltype("none");
                p.divEdtPop.set_flexgrow("1");
                p.divEdtPop.move("43.00","393","100%","40",null,null);

                p.pan02_00.set_taborder("33");
                p.pan02_00.set_type("vertical");
                p.pan02_00.set_flexgrow("1");
                p.pan02_00.move("10.00","98","300","86",null,null);

                p.staLabel06_01_01.set_taborder("34");
                p.staLabel06_01_01.set_text("계약명");
                p.staLabel06_01_01.set_cssclass("sta_WF_Label");
                p.staLabel06_01_01.move("10","98","100%","46",null,null);

                p.edtCtrtNm.set_taborder("35");
                p.edtCtrtNm.set_readonly("false");
                p.edtCtrtNm.move("10.00","158","100%","40",null,null);

                p.Panel06_01_01.set_taborder("36");
                p.Panel06_01_01.set_type("vertical");
                p.Panel06_01_01.set_flexgrow("1");
                p.Panel06_01_01.set_minwidth("");
                p.Panel06_01_01.move("10.00","98","305","86",null,null);

                p.staLabel06_02_00.set_taborder("37");
                p.staLabel06_02_00.set_text("핸디메일 사용여부");
                p.staLabel06_02_00.set_cssclass("sta_WF_Label");
                p.staLabel06_02_00.move("10","98","100%","46",null,null);

                p.rdoHandyEmlUseYn.set_taborder("38");
                p.rdoHandyEmlUseYn.set_innerdataset(divForm_form_Div01_form_rdoHandyEmlUseYn_innerdataset);
                p.rdoHandyEmlUseYn.set_codecolumn("codecolumn");
                p.rdoHandyEmlUseYn.set_datacolumn("datacolumn");
                p.rdoHandyEmlUseYn.set_direction("vertical");
                p.rdoHandyEmlUseYn.set_fittocontents("width");
                p.rdoHandyEmlUseYn.set_value("");
                p.rdoHandyEmlUseYn.move("0.00","46","313","40",null,null);

                p.Panel06_02_00.set_taborder("39");
                p.Panel06_02_00.set_type("vertical");
                p.Panel06_02_00.set_flexgrow("1");
                p.Panel06_02_00.set_minwidth("");
                p.Panel06_02_00.move("10.00","98","305","86",null,null);

                p.staLabel06_01_02.set_taborder("40");
                p.staLabel06_01_02.set_text("관리자IP");
                p.staLabel06_01_02.set_cssclass("sta_WF_Label");
                p.staLabel06_01_02.move("10","98","100%","46",null,null);

                p.edtIp.set_taborder("41");
                p.edtIp.set_readonly("false");
                p.edtIp.move("10.00","158","100%","40",null,null);

                p.Panel06_01_02.set_taborder("42");
                p.Panel06_01_02.set_type("vertical");
                p.Panel06_01_02.set_flexgrow("1");
                p.Panel06_01_02.set_minwidth("");
                p.Panel06_01_02.move("10.00","98","305","86",null,null);

                p.Panel06_01_01_00.set_taborder("43");
                p.Panel06_01_01_00.set_type("vertical");
                p.Panel06_01_01_00.set_flexgrow("1");
                p.Panel06_01_01_00.set_minwidth("");
                p.Panel06_01_01_00.move("10.00","98","305","1",null,null);

                p.Panel06_00.set_taborder("44");
                p.Panel06_00.set_horizontalgap("20");
                p.Panel06_00.set_flexcrossaxiswrapalign("start");
                p.Panel06_00.set_flexwrap("wrap");
                p.Panel06_00.set_fittocontents("height");
                p.Panel06_00.set_verticalgap("0");
                p.Panel06_00.set_spacing("0px 20px 10px 20px");
                p.Panel06_00.set_cssclass("pal_WF_DtlBg");
                p.Panel06_00.set_type("horizontal");
                p.Panel06_00.move("0","60","100.00%","96",null,null);

                p.staLabel06_01_02_00.set_taborder("45");
                p.staLabel06_01_02_00.set_text("회사명");
                p.staLabel06_01_02_00.set_cssclass("sta_WF_Label");
                p.staLabel06_01_02_00.move("10","98","100%","46",null,null);

                p.Panel06_01_02_00.set_taborder("46");
                p.Panel06_01_02_00.set_type("vertical");
                p.Panel06_01_02_00.set_flexgrow("1");
                p.Panel06_01_02_00.set_minwidth("");
                p.Panel06_01_02_00.move("10.00","98","305","86",null,null);

                p.divEdtPop00.set_taborder("48");
                p.divEdtPop00.set_text("Div00");
                p.divEdtPop00.set_formscrollbartype("none none");
                p.divEdtPop00.set_formscrolltype("none");
                p.divEdtPop00.set_flexgrow("1");
                p.divEdtPop00.move("43.00","393","100%","40",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div01.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.set_type("horizontal");
                p.Panel00.set_spacing("0px 10px 10px 10px");
                p.Panel00.move("0","56.713","100.00%","193",null,null);

                p.Panel01.set_spacing("0px 10px 10px 10px");
                p.Panel01.set_type("horizontal");
                p.Panel01.move("0","60","100.00%","231",null,null);
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
            //-- Default Layout : this.divForm.form.Div02.form.divGrd.form.divPage
            obj = new Layout("default","",0,0,this.divForm.form.Div02.form.divGrd.form.divPage.form,function(p){});
            this.divForm.form.Div02.form.divGrd.form.divPage.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.Div02.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.Div02.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divPage.set_taborder("0");
                p.divPage.set_text("Div00");
                p.divPage.set_url("work::COM/util/paging/paging.xfdl");
                p.divPage.set_formscrollbartype("none none");
                p.divPage.set_formscrolltype("none");
                p.divPage.set_minheight("36");
                p.divPage.set_maxheight("");
                p.divPage.move("0","637","100.00%","36",null,null);

                p.PanelGrdBtn.set_taborder("3");
                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_fittocontents("width");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.move(null,"0","450","34","0",null);

                p.grdCtrtInfoList.set_taborder("1");
                p.grdCtrtInfoList.set_binddataset("dsCtrtInfoList");
                p.grdCtrtInfoList.set_autofittype("col");
                p.grdCtrtInfoList.getSetter("uFunction").set("checkbox");
                p.grdCtrtInfoList.move("0","PanelGrdBtn:10","100.00%","186",null,null);

                p.staTotal.set_taborder("2");
                p.staTotal.set_text("총 <fc v=\'#1e4ebe\'>100</fc>건");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.move("0","0","200","34",null,null);

                p.btnGrdRegi.set_taborder("4");
                p.btnGrdRegi.set_text("연결");
                p.btnGrdRegi.set_cssclass("btn_WF_SmallBlack");
                p.btnGrdRegi.set_visible("true");
                p.btnGrdRegi.move("405.00","0","55","34",null,null);

                p.btnGrdDel.set_taborder("5");
                p.btnGrdDel.set_text("삭제");
                p.btnGrdDel.set_cssclass("btn_WF_SmallRed");
                p.btnGrdDel.set_visible("true");
                p.btnGrdDel.move("350.00","0","55","34",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.Div02.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div02.form.divGrd.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div02.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdCtrtInfoList.set_autofittype("none");

                p.btnGrdRegi.set_visible("false");

                p.btnGrdDel.set_visible("false");
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.Div02.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div02.form.divGrd.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div02.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.Div02.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div02.form
            obj = new Layout("default","",0,0,this.divForm.form.Div02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divGrd.set_taborder("0");
                p.divGrd.set_text("Div01");
                p.divGrd.set_fittocontents("height");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.move("0","30","100.00%","100%",null,null);

                p.Panel00_00.set_taborder("1");
                p.Panel00_00.set_type("vertical");
                p.Panel00_00.set_minwidth("");
                p.Panel00_00.move("10.00","98","100%","230",null,null);

                p.pan00.set_taborder("2");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("10px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.move("0","60","100.00%","251",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div02.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div02.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

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
                p.staLabel06_02_00.set_taborder("0");
                p.staLabel06_02_00.set_text("서비스 진행현황 (이메일)");
                p.staLabel06_02_00.set_cssclass("sta_WF_Label_E");
                p.staLabel06_02_00.move("10","98","100%","46",null,null);

                p.rdoEmlRcptnYn.set_taborder("1");
                p.rdoEmlRcptnYn.set_innerdataset(divForm_form_Div03_form_rdoEmlRcptnYn_innerdataset);
                p.rdoEmlRcptnYn.set_codecolumn("codecolumn");
                p.rdoEmlRcptnYn.set_datacolumn("datacolumn");
                p.rdoEmlRcptnYn.set_direction("vertical");
                p.rdoEmlRcptnYn.set_fittocontents("width");
                p.rdoEmlRcptnYn.set_value("");
                p.rdoEmlRcptnYn.move("200.00","328","160","40",null,null);

                p.Panel06_02_00.set_taborder("2");
                p.Panel06_02_00.set_type("vertical");
                p.Panel06_02_00.set_flexgrow("1");
                p.Panel06_02_00.set_minwidth("");
                p.Panel06_02_00.move("10.00","98","305","86",null,null);

                p.Panel06_00.set_taborder("3");
                p.Panel06_00.set_horizontalgap("20");
                p.Panel06_00.set_flexcrossaxiswrapalign("start");
                p.Panel06_00.set_flexwrap("wrap");
                p.Panel06_00.set_fittocontents("height");
                p.Panel06_00.set_verticalgap("0");
                p.Panel06_00.set_spacing("0px 20px 10px 20px");
                p.Panel06_00.set_cssclass("pal_WF_DtlBg");
                p.Panel06_00.set_type("horizontal");
                p.Panel06_00.move("0","60","100.00%","96",null,null);

                p.staLabel06_02_00_00.set_taborder("4");
                p.staLabel06_02_00_00.set_text("서비스 진행현황 (SMS 또는 카카오톡)");
                p.staLabel06_02_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel06_02_00_00.move("10","98","100%","46",null,null);

                p.rdoSmsRcptnPrgrsYn.set_taborder("5");
                p.rdoSmsRcptnPrgrsYn.set_innerdataset(divForm_form_Div03_form_rdoSmsRcptnPrgrsYn_innerdataset);
                p.rdoSmsRcptnPrgrsYn.set_codecolumn("codecolumn");
                p.rdoSmsRcptnPrgrsYn.set_datacolumn("datacolumn");
                p.rdoSmsRcptnPrgrsYn.set_direction("vertical");
                p.rdoSmsRcptnPrgrsYn.set_fittocontents("width");
                p.rdoSmsRcptnPrgrsYn.set_value("");
                p.rdoSmsRcptnPrgrsYn.move("200.00","328","160","40",null,null);

                p.Panel06_02_00_00.set_taborder("6");
                p.Panel06_02_00_00.set_type("vertical");
                p.Panel06_02_00_00.set_flexgrow("1");
                p.Panel06_02_00_00.set_minwidth("");
                p.Panel06_02_00_00.move("10.00","98","305","86",null,null);

                p.staLabel06_02_00_01.set_taborder("7");
                p.staLabel06_02_00_01.set_text("뉴스 및 이벤트 (SMS 또는 카카오톡)");
                p.staLabel06_02_00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel06_02_00_01.move("10","98","100%","46",null,null);

                p.rdoSmsRcptnNewYn.set_taborder("8");
                p.rdoSmsRcptnNewYn.set_innerdataset(divForm_form_Div03_form_rdoSmsRcptnNewYn_innerdataset);
                p.rdoSmsRcptnNewYn.set_codecolumn("codecolumn");
                p.rdoSmsRcptnNewYn.set_datacolumn("datacolumn");
                p.rdoSmsRcptnNewYn.set_direction("vertical");
                p.rdoSmsRcptnNewYn.set_fittocontents("width");
                p.rdoSmsRcptnNewYn.set_value("");
                p.rdoSmsRcptnNewYn.move("200.00","328","160","40",null,null);

                p.Panel06_02_00_01.set_taborder("9");
                p.Panel06_02_00_01.set_type("vertical");
                p.Panel06_02_00_01.set_flexgrow("1");
                p.Panel06_02_00_01.set_minwidth("");
                p.Panel06_02_00_01.move("10.00","98","305","86",null,null);

                p.staLabel06_02_00_02.set_taborder("10");
                p.staLabel06_02_00_02.set_text("계정승인 요청현황 (SMS 또는 카카오톡)");
                p.staLabel06_02_00_02.set_cssclass("sta_WF_Label_E");
                p.staLabel06_02_00_02.move("10","98","100%","46",null,null);

                p.rdoSmsRcptnAcntYn.set_taborder("11");
                p.rdoSmsRcptnAcntYn.set_innerdataset(divForm_form_Div03_form_rdoSmsRcptnAcntYn_innerdataset);
                p.rdoSmsRcptnAcntYn.set_codecolumn("codecolumn");
                p.rdoSmsRcptnAcntYn.set_datacolumn("datacolumn");
                p.rdoSmsRcptnAcntYn.set_direction("vertical");
                p.rdoSmsRcptnAcntYn.set_fittocontents("width");
                p.rdoSmsRcptnAcntYn.set_readonly("false");
                p.rdoSmsRcptnAcntYn.set_enableevent("true");
                p.rdoSmsRcptnAcntYn.set_enable("false");
                p.rdoSmsRcptnAcntYn.set_value("");
                p.rdoSmsRcptnAcntYn.move("200.00","328","160","40",null,null);

                p.Panel06_02_00_02.set_taborder("12");
                p.Panel06_02_00_02.set_type("vertical");
                p.Panel06_02_00_02.set_flexgrow("1");
                p.Panel06_02_00_02.set_minwidth("");
                p.Panel06_02_00_02.move("10.00","98","305","86",null,null);

                p.Panel06_02_00_00_00.set_taborder("13");
                p.Panel06_02_00_00_00.set_type("vertical");
                p.Panel06_02_00_00_00.set_flexgrow("1");
                p.Panel06_02_00_00_00.set_minwidth("");
                p.Panel06_02_00_00_00.move("10.00","98","305","1",null,null);

                p.Panel06_02_00_01_00.set_taborder("14");
                p.Panel06_02_00_01_00.set_type("vertical");
                p.Panel06_02_00_01_00.set_flexgrow("1");
                p.Panel06_02_00_01_00.set_minwidth("");
                p.Panel06_02_00_01_00.move("10.00","98","305","1",null,null);

                p.Panel06_00_00.set_taborder("15");
                p.Panel06_00_00.set_horizontalgap("20");
                p.Panel06_00_00.set_flexcrossaxiswrapalign("start");
                p.Panel06_00_00.set_flexwrap("wrap");
                p.Panel06_00_00.set_fittocontents("height");
                p.Panel06_00_00.set_verticalgap("0");
                p.Panel06_00_00.set_spacing("0px 20px 10px 20px");
                p.Panel06_00_00.set_cssclass("pal_WF_DtlBg");
                p.Panel06_00_00.set_type("horizontal");
                p.Panel06_00_00.move("0","60","100.00%","96",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div03.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div03.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div03.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

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
                p.staLabel06_02_00.set_taborder("0");
                p.staLabel06_02_00.set_text("입주자(기본)");
                p.staLabel06_02_00.set_cssclass("sta_WF_Label");
                p.staLabel06_02_00.move("10","98","100%","46",null,null);

                p.rdoIdAplyType1.set_taborder("1");
                p.rdoIdAplyType1.set_innerdataset(divForm_form_Div04_form_rdoIdAplyType1_innerdataset);
                p.rdoIdAplyType1.set_codecolumn("codecolumn");
                p.rdoIdAplyType1.set_datacolumn("datacolumn");
                p.rdoIdAplyType1.set_direction("vertical");
                p.rdoIdAplyType1.set_fittocontents("width");
                p.rdoIdAplyType1.set_value("");
                p.rdoIdAplyType1.move("200.00","328","160","40",null,null);

                p.Panel06_02_00.set_taborder("2");
                p.Panel06_02_00.set_type("vertical");
                p.Panel06_02_00.set_flexgrow("1");
                p.Panel06_02_00.set_minwidth("");
                p.Panel06_02_00.move("10.00","98","305","86",null,null);

                p.Panel06_00.set_taborder("3");
                p.Panel06_00.set_horizontalgap("20");
                p.Panel06_00.set_flexcrossaxiswrapalign("start");
                p.Panel06_00.set_flexwrap("wrap");
                p.Panel06_00.set_fittocontents("height");
                p.Panel06_00.set_verticalgap("0");
                p.Panel06_00.set_spacing("0px 20px 10px 20px");
                p.Panel06_00.set_cssclass("pal_WF_DtlBg");
                p.Panel06_00.set_type("horizontal");
                p.Panel06_00.move("0","60","100.00%","96",null,null);

                p.staLabel06_02_00_00.set_taborder("4");
                p.staLabel06_02_00_00.set_text("입주자(계정관리자)");
                p.staLabel06_02_00_00.set_cssclass("sta_WF_Label");
                p.staLabel06_02_00_00.move("10","98","100%","46",null,null);

                p.rdoIdAplyType2.set_taborder("5");
                p.rdoIdAplyType2.set_innerdataset(divForm_form_Div04_form_rdoIdAplyType2_innerdataset);
                p.rdoIdAplyType2.set_codecolumn("codecolumn");
                p.rdoIdAplyType2.set_datacolumn("datacolumn");
                p.rdoIdAplyType2.set_direction("vertical");
                p.rdoIdAplyType2.set_fittocontents("width");
                p.rdoIdAplyType2.set_value("");
                p.rdoIdAplyType2.move("200.00","328","160","40",null,null);

                p.Panel06_02_00_00.set_taborder("6");
                p.Panel06_02_00_00.set_type("vertical");
                p.Panel06_02_00_00.set_flexgrow("1");
                p.Panel06_02_00_00.set_minwidth("");
                p.Panel06_02_00_00.move("10.00","98","305","86",null,null);

                p.staLabel06_02_00_01.set_taborder("7");
                p.staLabel06_02_00_01.set_text("이동지역 신청");
                p.staLabel06_02_00_01.set_cssclass("sta_WF_Label");
                p.staLabel06_02_00_01.move("10","98","100%","46",null,null);

                p.rdoMvmnRgnYn.set_taborder("8");
                p.rdoMvmnRgnYn.set_innerdataset(divForm_form_Div04_form_rdoMvmnRgnYn_innerdataset);
                p.rdoMvmnRgnYn.set_codecolumn("codecolumn");
                p.rdoMvmnRgnYn.set_datacolumn("datacolumn");
                p.rdoMvmnRgnYn.set_direction("vertical");
                p.rdoMvmnRgnYn.set_fittocontents("width");
                p.rdoMvmnRgnYn.set_value("");
                p.rdoMvmnRgnYn.move("200.00","328","160","40",null,null);

                p.Panel06_02_00_01.set_taborder("9");
                p.Panel06_02_00_01.set_type("vertical");
                p.Panel06_02_00_01.set_flexgrow("1");
                p.Panel06_02_00_01.set_minwidth("");
                p.Panel06_02_00_01.move("10.00","98","305","86",null,null);

                p.staLabel06_02_00_02.set_taborder("10");
                p.staLabel06_02_00_02.set_text("신규 임차희망");
                p.staLabel06_02_00_02.set_cssclass("sta_WF_Label");
                p.staLabel06_02_00_02.move("10","98","100%","46",null,null);

                p.rdoHireHpeYn.set_taborder("11");
                p.rdoHireHpeYn.set_innerdataset(divForm_form_Div04_form_rdoHireHpeYn_innerdataset);
                p.rdoHireHpeYn.set_codecolumn("codecolumn");
                p.rdoHireHpeYn.set_datacolumn("datacolumn");
                p.rdoHireHpeYn.set_direction("vertical");
                p.rdoHireHpeYn.set_fittocontents("width");
                p.rdoHireHpeYn.set_value("");
                p.rdoHireHpeYn.move("200.00","328","160","40",null,null);

                p.Panel06_02_00_02.set_taborder("12");
                p.Panel06_02_00_02.set_type("vertical");
                p.Panel06_02_00_02.set_flexgrow("1");
                p.Panel06_02_00_02.set_minwidth("");
                p.Panel06_02_00_02.move("10.00","98","305","86",null,null);

                p.Panel06_00_00.set_taborder("13");
                p.Panel06_00_00.set_horizontalgap("20");
                p.Panel06_00_00.set_flexcrossaxiswrapalign("start");
                p.Panel06_00_00.set_flexwrap("wrap");
                p.Panel06_00_00.set_fittocontents("height");
                p.Panel06_00_00.set_verticalgap("0");
                p.Panel06_00_00.set_spacing("0px 20px 10px 20px");
                p.Panel06_00_00.set_cssclass("pal_WF_DtlBg");
                p.Panel06_00_00.set_type("horizontal");
                p.Panel06_00_00.move("0","60","100.00%","96",null,null);

                p.staLabel06_02_00_02_00.set_taborder("14");
                p.staLabel06_02_00_02_00.set_text("구내영업 신청");
                p.staLabel06_02_00_02_00.set_cssclass("sta_WF_Label");
                p.staLabel06_02_00_02_00.move("902.00","184","100%","46",null,null);

                p.rdoPrmsSalsYn.set_taborder("15");
                p.rdoPrmsSalsYn.set_innerdataset(divForm_form_Div04_form_rdoPrmsSalsYn_innerdataset);
                p.rdoPrmsSalsYn.set_codecolumn("codecolumn");
                p.rdoPrmsSalsYn.set_datacolumn("datacolumn");
                p.rdoPrmsSalsYn.set_direction("vertical");
                p.rdoPrmsSalsYn.set_fittocontents("width");
                p.rdoPrmsSalsYn.set_value("");
                p.rdoPrmsSalsYn.move("902.00","230","160","40",null,null);

                p.Panel06_02_00_02_00.set_taborder("16");
                p.Panel06_02_00_02_00.set_type("vertical");
                p.Panel06_02_00_02_00.set_flexgrow("1");
                p.Panel06_02_00_02_00.set_minwidth("");
                p.Panel06_02_00_02_00.move("902.00","184","305","86",null,null);

                p.staLabel06_02_00_02_00_00.set_taborder("17");
                p.staLabel06_02_00_02_00_00.set_text("행사시설 신청");
                p.staLabel06_02_00_02_00_00.set_cssclass("sta_WF_Label");
                p.staLabel06_02_00_02_00_00.move("899.00","182","100%","46",null,null);

                p.rdoEvntFcltYn.set_taborder("18");
                p.rdoEvntFcltYn.set_innerdataset(divForm_form_Div04_form_rdoEvntFcltYn_innerdataset);
                p.rdoEvntFcltYn.set_codecolumn("codecolumn");
                p.rdoEvntFcltYn.set_datacolumn("datacolumn");
                p.rdoEvntFcltYn.set_direction("vertical");
                p.rdoEvntFcltYn.set_fittocontents("width");
                p.rdoEvntFcltYn.set_value("");
                p.rdoEvntFcltYn.move("899.00","229","160","40",null,null);

                p.Panel06_02_00_02_00_00.set_taborder("19");
                p.Panel06_02_00_02_00_00.set_type("vertical");
                p.Panel06_02_00_02_00_00.set_flexgrow("1");
                p.Panel06_02_00_02_00_00.set_minwidth("");
                p.Panel06_02_00_02_00_00.move("899.00","182","305","86",null,null);

                p.staLabel06_02_00_02_01.set_taborder("20");
                p.staLabel06_02_00_02_01.set_text("납품/용역/기타");
                p.staLabel06_02_00_02_01.set_cssclass("sta_WF_Label");
                p.staLabel06_02_00_02_01.move("10","98","100%","46",null,null);

                p.rdoLbsvcEtcYn.set_taborder("21");
                p.rdoLbsvcEtcYn.set_innerdataset(divForm_form_Div04_form_rdoLbsvcEtcYn_innerdataset);
                p.rdoLbsvcEtcYn.set_codecolumn("codecolumn");
                p.rdoLbsvcEtcYn.set_datacolumn("datacolumn");
                p.rdoLbsvcEtcYn.set_direction("vertical");
                p.rdoLbsvcEtcYn.set_fittocontents("width");
                p.rdoLbsvcEtcYn.set_value("");
                p.rdoLbsvcEtcYn.move("200.00","328","160","40",null,null);

                p.Panel06_02_00_02_01.set_taborder("22");
                p.Panel06_02_00_02_01.set_type("vertical");
                p.Panel06_02_00_02_01.set_flexgrow("1");
                p.Panel06_02_00_02_01.set_minwidth("");
                p.Panel06_02_00_02_01.move("10.00","98","305","86",null,null);

                p.staLabel06_02_00_02_00_01.set_taborder("23");
                p.staLabel06_02_00_02_00_01.set_text("자회사처리자");
                p.staLabel06_02_00_02_00_01.set_cssclass("sta_WF_Label");
                p.staLabel06_02_00_02_00_01.move("902.00","184","100%","46",null,null);

                p.rdoCpatcoEmpYn.set_taborder("24");
                p.rdoCpatcoEmpYn.set_innerdataset(divForm_form_Div04_form_rdoCpatcoEmpYn_innerdataset);
                p.rdoCpatcoEmpYn.set_codecolumn("codecolumn");
                p.rdoCpatcoEmpYn.set_datacolumn("datacolumn");
                p.rdoCpatcoEmpYn.set_direction("vertical");
                p.rdoCpatcoEmpYn.set_fittocontents("width");
                p.rdoCpatcoEmpYn.set_value("");
                p.rdoCpatcoEmpYn.move("902.00","230","160","40",null,null);

                p.Panel06_02_00_02_00_01.set_taborder("25");
                p.Panel06_02_00_02_00_01.set_type("vertical");
                p.Panel06_02_00_02_00_01.set_flexgrow("1");
                p.Panel06_02_00_02_00_01.set_minwidth("");
                p.Panel06_02_00_02_00_01.move("902.00","184","305","86",null,null);

                p.staLabel06_02_00_02_00_00_00.set_taborder("26");
                p.staLabel06_02_00_02_00_00_00.set_text("공사직원");
                p.staLabel06_02_00_02_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel06_02_00_02_00_00_00.move("899.00","182","100%","46",null,null);

                p.rdoIiacEmpYn.set_taborder("27");
                p.rdoIiacEmpYn.set_innerdataset(divForm_form_Div04_form_rdoIiacEmpYn_innerdataset);
                p.rdoIiacEmpYn.set_codecolumn("codecolumn");
                p.rdoIiacEmpYn.set_datacolumn("datacolumn");
                p.rdoIiacEmpYn.set_direction("vertical");
                p.rdoIiacEmpYn.set_fittocontents("width");
                p.rdoIiacEmpYn.set_value("");
                p.rdoIiacEmpYn.move("899.00","229","160","40",null,null);

                p.Panel06_02_00_02_00_00_00.set_taborder("28");
                p.Panel06_02_00_02_00_00_00.set_type("vertical");
                p.Panel06_02_00_02_00_00_00.set_flexgrow("1");
                p.Panel06_02_00_02_00_00_00.set_minwidth("");
                p.Panel06_02_00_02_00_00_00.move("899.00","182","305","86",null,null);

                p.Panel06_00_00_00.set_taborder("29");
                p.Panel06_00_00_00.set_horizontalgap("20");
                p.Panel06_00_00_00.set_flexcrossaxiswrapalign("start");
                p.Panel06_00_00_00.set_flexwrap("wrap");
                p.Panel06_00_00_00.set_fittocontents("height");
                p.Panel06_00_00_00.set_verticalgap("0");
                p.Panel06_00_00_00.set_spacing("0px 20px 10px 20px");
                p.Panel06_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.Panel06_00_00_00.set_type("horizontal");
                p.Panel06_00_00_00.move("0","60","100.00%","96",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div04.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div04.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div04.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

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
                p.Panel00.set_taborder("0");
                p.Panel00.set_horizontalgap("20");
                p.Panel00.set_flexcrossaxiswrapalign("start");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_verticalgap("0");
                p.Panel00.set_spacing("0px 20px 10px 20px");
                p.Panel00.set_cssclass("pal_WF_DtlBg");
                p.Panel00.move("0","60","100.00%","96",null,null);

                p.staLabel00_01.set_taborder("1");
                p.staLabel00_01.set_text("알림 거부 설정 상태");
                p.staLabel00_01.set_cssclass("sta_WF_Label");
                p.staLabel00_01.move("10","98","100%","46",null,null);

                p.edtRfslDt.set_taborder("2");
                p.edtRfslDt.set_readonly("true");
                p.edtRfslDt.move("10.00","158","100%","40",null,null);

                p.Panel00_01.set_taborder("3");
                p.Panel00_01.set_type("vertical");
                p.Panel00_01.set_flexgrow("1");
                p.Panel00_01.move("10.00","98","305","86",null,null);

                p.staLabel00_01_00.set_taborder("4");
                p.staLabel00_01_00.set_text("거부기간 메시지 일괄 발송 설정 상태");
                p.staLabel00_01_00.set_cssclass("sta_WF_Label");
                p.staLabel00_01_00.move("10","98","100%","46",null,null);

                p.edtRefwEblcPrcsDt.set_taborder("5");
                p.edtRefwEblcPrcsDt.set_readonly("true");
                p.edtRefwEblcPrcsDt.move("10.00","158","100%","40",null,null);

                p.Panel00_01_00.set_taborder("6");
                p.Panel00_01_00.set_type("vertical");
                p.Panel00_01_00.set_flexgrow("1");
                p.Panel00_01_00.move("10.00","98","305","86",null,null);

                p.staLabel06_01.set_taborder("7");
                p.staLabel06_01.set_text("삭제 대상 등록 일시");
                p.staLabel06_01.set_cssclass("sta_WF_Label");
                p.staLabel06_01.move("10","98","100%","46",null,null);

                p.edtDelTrgtRegDt.set_taborder("8");
                p.edtDelTrgtRegDt.set_readonly("true");
                p.edtDelTrgtRegDt.move("10.00","158","100%","40",null,null);

                p.Panel06_01.set_taborder("9");
                p.Panel06_01.set_type("vertical");
                p.Panel06_01.set_flexgrow("1");
                p.Panel06_01.set_minwidth("");
                p.Panel06_01.move("10.00","98","305","86",null,null);

                p.staLabel06_02.set_taborder("10");
                p.staLabel06_02.set_text("삭제 대상 여부");
                p.staLabel06_02.set_cssclass("sta_WF_Label");
                p.staLabel06_02.move("10","98","100%","46",null,null);

                p.rdoDelTrgtYn.set_taborder("11");
                p.rdoDelTrgtYn.set_innerdataset(divForm_form_Div05_form_rdoDelTrgtYn_innerdataset);
                p.rdoDelTrgtYn.set_codecolumn("codecolumn");
                p.rdoDelTrgtYn.set_datacolumn("datacolumn");
                p.rdoDelTrgtYn.set_direction("vertical");
                p.rdoDelTrgtYn.set_fittocontents("width");
                p.rdoDelTrgtYn.set_value("");
                p.rdoDelTrgtYn.move("200.00","328","393","40",null,null);

                p.Panel06_02.set_taborder("12");
                p.Panel06_02.set_type("vertical");
                p.Panel06_02.set_flexgrow("1");
                p.Panel06_02.set_minwidth("");
                p.Panel06_02.move("10.00","98","305","86",null,null);

                p.Panel06.set_taborder("13");
                p.Panel06.set_horizontalgap("20");
                p.Panel06.set_flexcrossaxiswrapalign("start");
                p.Panel06.set_flexwrap("wrap");
                p.Panel06.set_fittocontents("height");
                p.Panel06.set_verticalgap("0");
                p.Panel06.set_spacing("0px 20px 10px 20px");
                p.Panel06.set_cssclass("pal_WF_DtlBg");
                p.Panel06.set_type("horizontal");
                p.Panel06.move("0","60","100.00%","96",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div05.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div05.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div05.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.set_type("horizontal");
                p.Panel00.set_spacing("0px 10px 10px 10px");
                p.Panel00.move("0","56.713","100.00%","193",null,null);
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
            //-- Default Layout : this.divForm.form.Div06.form.divGrd.form.divPage
            obj = new Layout("default","",0,0,this.divForm.form.Div06.form.divGrd.form.divPage.form,function(p){});
            this.divForm.form.Div06.form.divGrd.form.divPage.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.Div06.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.Div06.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divPage.set_taborder("0");
                p.divPage.set_text("Div00");
                p.divPage.set_url("work::COM/util/paging/paging.xfdl");
                p.divPage.set_formscrollbartype("none none");
                p.divPage.set_formscrolltype("none");
                p.divPage.set_minheight("36");
                p.divPage.set_maxheight("");
                p.divPage.move("0","637","100.00%","36",null,null);

                p.PanelGrdBtn.set_taborder("3");
                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_fittocontents("width");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.move(null,"7","450","34","0",null);

                p.grdAuthInfoList.set_taborder("1");
                p.grdAuthInfoList.set_binddataset("dsAuthInfoList");
                p.grdAuthInfoList.set_autofittype("col");
                p.grdAuthInfoList.move("0","PanelGrdBtn:10","100.00%","363",null,null);

                p.staTotal.set_taborder("2");
                p.staTotal.set_text("권한");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.move("0","7","200","34",null,null);

                p.btnAuthSave.set_taborder("4");
                p.btnAuthSave.set_text("권한적용");
                p.btnAuthSave.set_cssclass("btn_WF_SmallBlack");
                p.btnAuthSave.set_visible("true");
                p.btnAuthSave.move("774.00","10","90","34",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.Div06.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div06.form.divGrd.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div06.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdAuthInfoList.set_autofittype("none");

                p.btnAuthSave.set_visible("false");

                p.btnGrdDel.set_visible("false");
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.Div06.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div06.form.divGrd.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div06.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.Div06.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div06.form
            obj = new Layout("default","",0,0,this.divForm.form.Div06.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.set_taborder("0");
                p.Panel00.set_horizontalgap("20");
                p.Panel00.set_flexcrossaxiswrapalign("start");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_verticalgap("0");
                p.Panel00.set_spacing("0px 20px 10px 20px");
                p.Panel00.set_cssclass("pal_WF_DtlBg");
                p.Panel00.move("0","60","100.00%","96",null,null);

                p.btnPswdReset.set_taborder("7");
                p.btnPswdReset.set_text("비밀번호 초기화");
                p.btnPswdReset.move("510","120","100%","40",null,null);

                p.staLabel00_01.set_taborder("1");
                p.staLabel00_01.set_text("비밀번호 초기화");
                p.staLabel00_01.set_cssclass("sta_WF_Label");
                p.staLabel00_01.move("10","98","100%","46",null,null);

                p.Panel00_01.set_taborder("2");
                p.Panel00_01.set_type("vertical");
                p.Panel00_01.set_flexgrow("1");
                p.Panel00_01.move("10.00","98","305","86",null,null);

                p.Panel00_01_00.set_taborder("3");
                p.Panel00_01_00.set_type("vertical");
                p.Panel00_01_00.set_flexgrow("1");
                p.Panel00_01_00.move("10.00","98","305","1",null,null);

                p.divGrd.set_taborder("4");
                p.divGrd.set_text("Div01");
                p.divGrd.set_fittocontents("height");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.move("0","30","100.00%","100%",null,null);

                p.pan01_01.set_taborder("5");
                p.pan01_01.set_type("vertical");
                p.pan01_01.set_flexgrow("1");
                p.pan01_01.move("10.00","98","970","450",null,null);

                p.pan01.set_taborder("6");
                p.pan01.set_horizontalgap("20");
                p.pan01.set_flexcrossaxiswrapalign("start");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_fittocontents("height");
                p.pan01.set_verticalgap("0");
                p.pan01.set_spacing("0px 20px 10px 20px");
                p.pan01.set_cssclass("pal_WF_DtlBg");
                p.pan01.move("0","60","100.00%","461",null,null);

                p.Panel00_01_00_00.set_taborder("8");
                p.Panel00_01_00_00.set_type("vertical");
                p.Panel00_01_00_00.set_flexgrow("1");
                p.Panel00_01_00_00.move("10.00","98","305","1",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div06.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div06.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div06.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.set_type("horizontal");
                p.Panel00.set_spacing("0px 10px 10px 10px");
                p.Panel00.move("0","56.713","100.00%","193",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div06.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div06.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div06.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div06.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div07.form
            obj = new Layout("default","",0,0,this.divForm.form.Div07.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.set_taborder("0");
                p.Panel00.set_horizontalgap("20");
                p.Panel00.set_flexcrossaxiswrapalign("start");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_verticalgap("0");
                p.Panel00.set_spacing("0px 20px 10px 20px");
                p.Panel00.set_cssclass("pal_WF_DtlBg");
                p.Panel00.move("0","60","100.00%","140",null,null);

                p.Panel00_01_00.set_taborder("1");
                p.Panel00_01_00.set_type("vertical");
                p.Panel00_01_00.set_flexgrow("1");
                p.Panel00_01_00.move("10.00","98","305","1",null,null);

                p.staLabel00_00.set_taborder("2");
                p.staLabel00_00.set_text("도면허용 IP");
                p.staLabel00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_00.move("10","98","100%","46",null,null);

                p.Panel01.set_taborder("3");
                p.Panel01.set_type("vertical");
                p.Panel01.set_verticalgap("10");
                p.Panel01.set_fittocontents("height");
                p.Panel01.move("378","200","100%","110",null,null);

                p.Panel00_00_00.set_taborder("4");
                p.Panel00_00_00.set_type("vertical");
                p.Panel00_00_00.set_flexgrow("1");
                p.Panel00_00_00.set_fittocontents("height");
                p.Panel00_00_00.set_minwidth("");
                p.Panel00_00_00.move("10.00","98","305","150",null,null);

                p.cmbIpBand.set_taborder("5");
                p.cmbIpBand.set_flexgrow("1");
                p.cmbIpBand.set_innerdataset("dsIpBand");
                p.cmbIpBand.set_codecolumn("cdId");
                p.cmbIpBand.set_datacolumn("cdNm");
                p.cmbIpBand.set_text("사용안함");
                p.cmbIpBand.set_value("");
                p.cmbIpBand.set_index("0");
                p.cmbIpBand.move("-60.00","65","30%","40",null,null);

                p.edtFlrplnPrmIp01.set_taborder("6");
                p.edtFlrplnPrmIp01.set_readonly("true");
                p.edtFlrplnPrmIp01.move("180.00","114","30%","40",null,null);

                p.staLabel01_00_01_00_00.set_taborder("7");
                p.staLabel01_00_01_00_00.set_text("-");
                p.staLabel01_00_01_00_00.set_textAlign("center");
                p.staLabel01_00_01_00_00.move("10","98","6","40",null,null);

                p.edtFlrplnPrmIp02.set_taborder("8");
                p.edtFlrplnPrmIp02.set_readonly("true");
                p.edtFlrplnPrmIp02.move("180.00","114","30%","40",null,null);

                p.pan01_01_01_00.set_taborder("9");
                p.pan01_01_01_00.set_type("horizontal");
                p.pan01_01_01_00.set_horizontalgap("5");
                p.pan01_01_01_00.move("30.00","114","100%","40",null,null);

                p.sta00.set_taborder("10");
                p.sta00.set_text("등록 가능한 IP는 인천국제공항공사가 관리하는 네트워크 대역 한정입니다.");
                p.sta00.set_cssclass("sta_WF_Des");
                p.sta00.set_fittocontents("height");
                p.sta00.set_wordWrap("char");
                p.sta00.move("43.00","1383","100%","40",null,null);

                p.Panel00_01_00_00.set_taborder("11");
                p.Panel00_01_00_00.set_type("vertical");
                p.Panel00_01_00_00.set_flexgrow("1");
                p.Panel00_01_00_00.move("10.00","98","305","1",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div07.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div07.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div07.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.set_type("horizontal");
                p.Panel00.set_spacing("0px 10px 10px 10px");
                p.Panel00.move("0","56.713","100.00%","193",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div07.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div07.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div07.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div07.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.sub_tit01.set_taborder("10");
                p.sub_tit01.set_background("#ffffff");
                p.sub_tit01.set_flexcrossaxisalign("end");
                p.sub_tit01.set_minheight("70");
                p.sub_tit01.set_maxheight("");
                p.sub_tit01.move("-14","28","100%","70",null,null);

                p.Panel01_00.set_taborder("9");
                p.Panel01_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_00.set_spacing("0px 20px");
                p.Panel01_00.set_horizontalgap("10");
                p.Panel01_00.set_flexcrossaxisalign("center");
                p.Panel01_00.set_flexmainaxisalign("end");
                p.Panel01_00.move("678","56","100%","50",null,null);

                p.btnMinBscInfo.set_taborder("8");
                p.btnMinBscInfo.set_cssclass("btn_WF_ACMinus");
                p.btnMinBscInfo.set_visible("true");
                p.btnMinBscInfo.set_text("");
                p.btnMinBscInfo.move("1319","64","34","34",null,null);

                p.staSubTitle01.set_taborder("7");
                p.staSubTitle01.set_text("기본정보");
                p.staSubTitle01.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle01.move("-17","56","100%","50",null,null);

                p.Div01.set_taborder("0");
                p.Div01.set_text("Div00");
                p.Div01.set_cssclass("div_WF_Bg");
                p.Div01.set_fittocontents("height");
                p.Div01.set_maxheight("");
                p.Div01.move("0","0","100%","480",null,null);

                p.sub_tit02.set_taborder("14");
                p.sub_tit02.set_background("#ffffff");
                p.sub_tit02.set_flexcrossaxisalign("end");
                p.sub_tit02.set_minheight("70");
                p.sub_tit02.set_maxheight("");
                p.sub_tit02.move("-14","28","100%","70",null,null);

                p.Panel02.set_taborder("13");
                p.Panel02.set_cssclass("pal_WF_TitBtnBg");
                p.Panel02.set_spacing("0px 20px");
                p.Panel02.set_horizontalgap("10");
                p.Panel02.set_flexcrossaxisalign("center");
                p.Panel02.set_flexmainaxisalign("end");
                p.Panel02.move("668","652","100%","50",null,null);

                p.btnMinCtrtInfo.set_taborder("12");
                p.btnMinCtrtInfo.set_cssclass("btn_WF_ACMinus");
                p.btnMinCtrtInfo.set_visible("true");
                p.btnMinCtrtInfo.set_text("");
                p.btnMinCtrtInfo.move("1309","660","34","34",null,null);

                p.staSubTitle02.set_taborder("11");
                p.staSubTitle02.set_text("관련 계약 정보");
                p.staSubTitle02.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02.move("-27","652","100%","50",null,null);

                p.Div02.set_taborder("1");
                p.Div02.set_text("Div00");
                p.Div02.set_cssclass("div_WF_Bg");
                p.Div02.set_fittocontents("height");
                p.Div02.set_maxheight("");
                p.Div02.move("0","30","100%","251",null,null);

                p.sub_tit03.set_taborder("18");
                p.sub_tit03.set_background("#ffffff");
                p.sub_tit03.set_flexcrossaxisalign("end");
                p.sub_tit03.set_minheight("70");
                p.sub_tit03.set_maxheight("");
                p.sub_tit03.move("-14","28","100%","70",null,null);

                p.Div03.set_taborder("2");
                p.Div03.set_text("Div00");
                p.Div03.set_cssclass("div_WF_Bg");
                p.Div03.set_fittocontents("height");
                p.Div03.set_maxheight("");
                p.Div03.move("0","0","100%","192",null,null);

                p.sub_tit04.set_taborder("26");
                p.sub_tit04.set_background("#ffffff");
                p.sub_tit04.set_flexcrossaxisalign("end");
                p.sub_tit04.set_minheight("70");
                p.sub_tit04.set_maxheight("");
                p.sub_tit04.move("-14","28","100%","70",null,null);

                p.Div04.set_taborder("3");
                p.Div04.set_text("Div00");
                p.Div04.set_cssclass("div_WF_Bg");
                p.Div04.set_fittocontents("height");
                p.Div04.set_maxheight("");
                p.Div04.move("0","0","100%","288",null,null);

                p.sub_tit05.set_taborder("22");
                p.sub_tit05.set_background("#ffffff");
                p.sub_tit05.set_flexcrossaxisalign("end");
                p.sub_tit05.set_minheight("70");
                p.sub_tit05.set_maxheight("");
                p.sub_tit05.move("-14","28","100%","70",null,null);

                p.Div05.set_taborder("4");
                p.Div05.set_text("Div00");
                p.Div05.set_cssclass("div_WF_Bg");
                p.Div05.set_fittocontents("height");
                p.Div05.set_maxheight("");
                p.Div05.move("0","1491","100%","192",null,null);

                p.sub_tit06.set_taborder("30");
                p.sub_tit06.set_background("#ffffff");
                p.sub_tit06.set_flexcrossaxisalign("end");
                p.sub_tit06.set_minheight("70");
                p.sub_tit06.set_maxheight("");
                p.sub_tit06.move("-14","28","100%","70",null,null);

                p.Div06.set_taborder("5");
                p.Div06.set_text("Div00");
                p.Div06.set_cssclass("div_WF_Bg");
                p.Div06.set_fittocontents("height");
                p.Div06.set_maxheight("");
                p.Div06.move("0","0","100%","557",null,null);

                p.sub_tit07.set_taborder("34");
                p.sub_tit07.set_background("#ffffff");
                p.sub_tit07.set_flexcrossaxisalign("end");
                p.sub_tit07.set_minheight("70");
                p.sub_tit07.set_maxheight("");
                p.sub_tit07.move("-14","28","100%","70",null,null);

                p.Div07.set_taborder("6");
                p.Div07.set_text("Div00");
                p.Div07.set_cssclass("div_WF_Bg");
                p.Div07.set_fittocontents("height");
                p.Div07.set_maxheight("");
                p.Div07.move("0","0","100%","140",null,null);

                p.staSubTitle03.set_taborder("15");
                p.staSubTitle03.set_text("알림설정 발송 여부");
                p.staSubTitle03.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle03.move("-27","652","100%","50",null,null);

                p.btnMinAlrmYn.set_taborder("16");
                p.btnMinAlrmYn.set_cssclass("btn_WF_ACMinus");
                p.btnMinAlrmYn.set_visible("true");
                p.btnMinAlrmYn.set_text("");
                p.btnMinAlrmYn.move("1309","660","34","34",null,null);

                p.Panel03.set_taborder("17");
                p.Panel03.set_cssclass("pal_WF_TitBtnBg");
                p.Panel03.set_spacing("0px 20px");
                p.Panel03.set_horizontalgap("10");
                p.Panel03.set_flexcrossaxisalign("center");
                p.Panel03.set_flexmainaxisalign("end");
                p.Panel03.move("668","652","100%","50",null,null);

                p.staSubTitle05.set_taborder("19");
                p.staSubTitle05.set_text("알림 거부 설정, 업무 위임 설정, 삭제대상 여부");
                p.staSubTitle05.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle05.move("-27","652","100%","50",null,null);

                p.btnMinEtc.set_taborder("20");
                p.btnMinEtc.set_cssclass("btn_WF_ACMinus");
                p.btnMinEtc.set_visible("true");
                p.btnMinEtc.set_text("");
                p.btnMinEtc.move("1309","660","34","34",null,null);

                p.Panel05.set_taborder("21");
                p.Panel05.set_cssclass("pal_WF_TitBtnBg");
                p.Panel05.set_spacing("0px 20px");
                p.Panel05.set_horizontalgap("10");
                p.Panel05.set_flexcrossaxisalign("center");
                p.Panel05.set_flexmainaxisalign("end");
                p.Panel05.move("668","652","100%","50",null,null);

                p.staSubTitle04.set_taborder("23");
                p.staSubTitle04.set_text("사용자 구분 설정");
                p.staSubTitle04.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle04.move("-27","652","100%","50",null,null);

                p.btnMinUserSe.set_taborder("24");
                p.btnMinUserSe.set_cssclass("btn_WF_ACMinus");
                p.btnMinUserSe.set_visible("true");
                p.btnMinUserSe.set_text("");
                p.btnMinUserSe.move("1309","660","34","34",null,null);

                p.Panel04.set_taborder("25");
                p.Panel04.set_cssclass("pal_WF_TitBtnBg");
                p.Panel04.set_spacing("0px 20px");
                p.Panel04.set_horizontalgap("10");
                p.Panel04.set_flexcrossaxisalign("center");
                p.Panel04.set_flexmainaxisalign("end");
                p.Panel04.move("668","652","100%","50",null,null);

                p.staSubTitle06.set_taborder("27");
                p.staSubTitle06.set_text("중요정보");
                p.staSubTitle06.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle06.move("-27","652","100%","50",null,null);

                p.btnMinImportInfo.set_taborder("28");
                p.btnMinImportInfo.set_cssclass("btn_WF_ACMinus");
                p.btnMinImportInfo.set_visible("true");
                p.btnMinImportInfo.set_text("");
                p.btnMinImportInfo.move("1309","660","34","34",null,null);

                p.Panel06.set_taborder("29");
                p.Panel06.set_cssclass("pal_WF_TitBtnBg");
                p.Panel06.set_spacing("0px 20px");
                p.Panel06.set_horizontalgap("10");
                p.Panel06.set_flexcrossaxisalign("center");
                p.Panel06.set_flexmainaxisalign("end");
                p.Panel06.move("668","652","100%","50",null,null);

                p.staSubTitle07.set_taborder("31");
                p.staSubTitle07.set_text("도면허용 IP 정보");
                p.staSubTitle07.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle07.move("-27","652","100%","50",null,null);

                p.btnMinIpInfo.set_taborder("32");
                p.btnMinIpInfo.set_cssclass("btn_WF_ACMinus");
                p.btnMinIpInfo.set_visible("true");
                p.btnMinIpInfo.set_text("");
                p.btnMinIpInfo.move("1309","660","34","34",null,null);

                p.Panel07.set_taborder("33");
                p.Panel07.set_cssclass("pal_WF_TitBtnBg");
                p.Panel07.set_spacing("0px 20px");
                p.Panel07.set_horizontalgap("10");
                p.Panel07.set_flexcrossaxisalign("center");
                p.Panel07.set_flexmainaxisalign("end");
                p.Panel07.move("668","652","100%","50",null,null);
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
                p.Button00_00.set_taborder("0");
                p.Button00_00.set_text("확인");
                p.Button00_00.set_cssclass("btn_WF_Yes");
                p.Button00_00.set_fittocontents("width");
                p.Button00_00.move("457.00","30","100","40",null,null);
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
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Phone_screen",1480,2700,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("직원 상세 (PC)");

                p.divGuide.set_taborder("0");
                p.divGuide.set_text("div00");
                p.divGuide.set_visible("false");
                p.divGuide.set_cssclass("div_GD_Tip");
                p.divGuide.move("1590.00","135","450","385",null,null);

                p.divForm.set_taborder("1");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.move("20","10",null,null,"20","70");

                p.divPopBtn.set_taborder("2");
                p.divPopBtn.set_text("Div00");
                p.divPopBtn.set_cssclass("div_WF_PopBtn");
                p.divPopBtn.move("20",null,null,"60","20","0");
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","",480,600,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_mobileorientation("Portrait");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.Div01.form.edtUserId","value","dsGet","userId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.Div01.form.edtUserNm","value","dsGet","userNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.Div01.form.edtAcntAutzrId","value","dsGet","acntAutzrId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.Div01.form.edtEml","value","dsGet","eml");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.Div01.form.edtUserMblTelno","value","dsGet","userMblTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.Div01.form.edtCopId","value","dsGet","copId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.Div01.form.edtUserTelno","value","dsGet","userTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divForm.form.Div01.form.divEdtPop.form.edtDeptNm","value","dsGet","deptNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divForm.form.Div01.form.edtEmpExtNo","value","dsGet","empExtNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divForm.form.Div01.form.edtCtrtNm","value","dsGet","ctrtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divForm.form.Div01.form.rdoUseYn","value","dsGet","useYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divForm.form.Div01.form.rdoHandyEmlUseYn","value","dsGet","handyEmlUseYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divForm.form.Div01.form.edtIp","value","dsGet","mngrIp");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divForm.form.Div01.form.rdoEmlRcptnYn","value","dsGet","emlRcptnYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divForm.form.Div01.form.rdoSmsRcptnPrgrsYn","value","dsGet","smsRcptnPrgrsYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divForm.form.Div01.form.rdoSmsRcptnNewYn","value","dsGet","smsRcptnNewYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divForm.form.Div01.form.rdoSmsRcptnAcntYn","value","dsGet","smsRcptnAcntYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divForm.form.Div01.form.rdoIdAplyType1","value","dsGet","userTat1Yn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divForm.form.Div01.form.rdoIdAplyType2","value","dsGet","userTat2Yn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divForm.form.Div01.form.rdoMvmnRgnYn","value","dsGet","mvmnRgnYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divForm.form.Div01.form.rdoHireHpeYn","value","dsGet","hireHpeYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divForm.form.Div01.form.rdoCpatcoEmpYn","value","dsGet","cpatcoEmpYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divForm.form.Div01.form.rdoIiacEmpYn","value","dsGet","iiacEmpYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divForm.form.Div01.form.rdoPrmsSalsYn","value","dsGet","prmsSalsYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divForm.form.Div01.form.rdoEvntFcltYn","value","dsGet","evntFcltYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divForm.form.Div01.form.rdoLbsvcEtcYn","value","dsGet","lbsvcEtcYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divForm.form.Div01.form.rdoDelTrgtYn","value","dsGet","delTrgtYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divForm.form.Div01.form.edtRfslDt","value","dsGet","rfslDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divForm.form.Div01.form.edtDelTrgtRegDt","value","dsGet","delTrgtRegDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divForm.form.Div01.form.edtRefwEblcPrcsDt","value","dsGet","refwEblcPrcsDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divEdtPop00.form.edtCoNm","value","dsGet","coNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","edtIp","value","dsGet","shrtx8");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divForm.form.Div01.form.divEdtPop00.form.edtCoNm","value","dsGet","coNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divForm.form.Div03.form.rdoEmlRcptnYn","value","dsGet","emlRcptnYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divForm.form.Div03.form.rdoSmsRcptnPrgrsYn","value","dsGet","smsRcptnPrgrsYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divForm.form.Div03.form.rdoSmsRcptnNewYn","value","dsGet","smsRcptnNewYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divForm.form.Div03.form.rdoSmsRcptnAcntYn","value","dsGet","smsRcptnAcntYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divForm.form.Div04.form.rdoMvmnRgnYn","value","dsGet","mvmnRgnYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divForm.form.Div04.form.rdoIdAplyType1","value","dsGet","userTat1Yn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divForm.form.Div04.form.rdoIdAplyType2","value","dsGet","userTat2Yn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divForm.form.Div04.form.rdoHireHpeYn","value","dsGet","hireHpeYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divForm.form.Div04.form.rdoPrmsSalsYn","value","dsGet","prmsSalsYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","divForm.form.Div04.form.rdoEvntFcltYn","value","dsGet","evntFcltYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","divForm.form.Div04.form.rdoLbsvcEtcYn","value","dsGet","lbsvcEtcYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","divForm.form.Div04.form.rdoCpatcoEmpYn","value","dsGet","cpatcoEmpYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","divForm.form.Div04.form.rdoIiacEmpYn","value","dsGet","iiacEmpYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","divForm.form.Div05.form.rdoDelTrgtYn","value","dsGet","delTrgtYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","divForm.form.Div05.form.edtDelTrgtRegDt","value","dsGet","delTrgtRegDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","divForm.form.Div05.form.edtRfslDt","value","dsGet","rfslDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","divForm.form.Div05.form.edtRefwEblcPrcsDt","value","dsGet","refwEblcPrcsDt");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","work::COM/util/paging/paging.xfdl");
        };
        
        // User Script
        this.registerScript("COM024P061.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	COM024P061.xfdl
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
        this.objApp = nexacro.getApplication();
        this.userId;

        var userSe = "";

        this.validateColumn = [];

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수
        	this.fnInit();

        	this.validateColumn.push({"title" : "이메일", "com": this.divForm.form.Div01.form.edtEml});
        	this.validateColumn.push({"title" : "휴대전화번호", "com": this.divForm.form.Div01.form.edtUserMblTelno});
        	this.validateColumn.push({"title" : "사용여부", "com": this.divForm.form.Div01.form.rdoUseYn});

        	if(!this.gfnIsNull(this.getOwnerFrame().userId)) {
        		this.userId = this.getOwnerFrame().userId;
        		this.cfnSearch();
        	}
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	this.getSearchTransaction();
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

        this.cfnClose = function ()
        {

        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.getSearchTransaction = function()
        {
        	var strSvcId    = "search";
        	var strSvcUrl   = "sysMng/empDtlInfoInq.do";
        	var inData      = "";
        	var outData     = "dsGet=dsGet dsCtrtInfoList=dsCtrtInfoList dsAuthInfoList=dsAuthInfoList";
        	var strArg      = "id=" + this.userId;
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

        // 권한 조회
        this.getSearchAuthInfoTransaction = function()
        {
        	var strSvcId    = "searchAuthInfo";
        	var strSvcUrl   = "sysMng/empAuthInfoListInq.do";
        	var inData      = "";
        	var outData     = "dsAuthInfoList=dsAuthInfoList";
        	var strArg      = "id=" + this.userId;
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
        	var strSvcUrl   = "sysMng/empDtlInfoStrg.do";
        	var inData      = "dsGet=dsGet:A dsCtrtInfoList=dsCtrtInfoList:U";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= false;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 권한적용
        this.saveAuthInfoTransaction = function()
        {
        	var strSvcId    = "saveAuthInfo";
        	var strSvcUrl   = "sysMng/empAuthrtInfoStrg.do";
        	var inData      = "dsAuthInfoList=dsAuthInfoSave:U";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= false;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 비밀번호 초기화
        this.savePwResetTransaction = function()
        {
        	var strSvcId    = "pwReset";
        	var strSvcUrl   = "sysMng/empPswdReset.do";
        	var inData      = "";
        	var outData     = "";
        	var strArg      = "id=" + this.userId;
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
        		case "search":
        			this.divForm.form.Div02.form.divGrd.form.staTotal.text = "총 <fc v='#1e4ebe'>" + this.dsCtrtInfoList.getRowCount() + "</fc>건";

        			userSe = this.dsGet.getColumn(0, "userSe");
        			if(userSe == "EMPCAT20") { // 입주자
        				if(this.dsGet.getColumn(0, "idAplyType") == "TIDREQCD002") { // 계정관리자
        					this.divForm.form.Div03.form.rdoSmsRcptnAcntYn.enable = true;
        				}
        			}

        			// 도면허용 IP
        			var flrplnPrmIp = this.dsGet.getColumn(0, "flrplnPrmIp");
        			if(this.gfnIsNull(flrplnPrmIp) != true) {
        				var arr = flrplnPrmIp.split(".");
        				this.divForm.form.Div07.form.edtFlrplnPrmIp01.value = arr[0] + "." + arr[1] + ".";
        				this.divForm.form.Div07.form.edtFlrplnPrmIp02.value = arr[2] + "." + arr[3];

        				var sRow = this.dsIpBand.findRow("cdNm", arr[0] + "." + arr[1]);
        				if(sRow > -1) {
        					this.divForm.form.Div07.form.cmbIpBand.index = sRow;
        				}
        			}
        			break;
        		case "searchAuthInfo":
        			break;
        		case "save" :
        			this.gfnAlertMsg("save", "MSG_001", "", "msgCallback");
        			break;
        		case "saveAuthInfo" :
        			this.gfnAlertMsg("saveAuthInfo", "MSG_001", "", "msgCallback");
        			break;
        		case "pwReset" :
        			this.gfnAlertMsg("pwReset", "MSG_011", ["비밀번호가 초기화 되었습니다."]);
        			break;
        	}
        };

        /**
        	sPopupId	// 페세지창을 구분하기 위한 ID
        	sRtn		// 메세지창에서 리턴 해주는 변수값 (JSON 형태의 스트링 리턴)
        **/
        this.msgCallback = function(sPopupId, sRtn)
        {
        	var oRtn = JSON.parse(sRtn);
        	if(sPopupId == "ctrt_del") {
        		if(oRtn.result == "Y") {
        			var chk = this.dsCtrtInfoList.extractRows("chk == " + 1);
        			if(chk.length > 0) {
        				this.dsCtrtInfoList.deleteMultiRows(chk);
        			}
        		}
        	}
        	else if(sPopupId == "user_save") {
        		if(oRtn.result == "Y") {
        			this.saveTransaction();
        		}
        	}
        	else if(sPopupId == "authInfo_save") {
        		if(oRtn.result == "Y") {
        			this.dsAuthInfoSave.clearData();
        			for(var i=0; i<this.dsAuthInfoList.getRowCount(); i++) {
        				if(this.dsAuthInfoList.getColumn(i, "authYn") == "1") {
        					var nRow = this.dsAuthInfoSave.addRow();
        					this.dsAuthInfoSave.copyRow(nRow, this.dsAuthInfoList, i);
        				}
        			}

        			this.saveAuthInfoTransaction();
        		}
        	}
        	else if(sPopupId == "save") {
        		this.close();
        	}
        	else if(sPopupId == "saveAuthInfo") {
        		this.getSearchAuthInfoTransaction();
        	}
        	else if(sPopupId == "pswd_reset") {
        		if(oRtn.result == "Y") {
        			this.savePwResetTransaction();
        		}
        	}
        };

        this.fnPopupCallback = function(sPopupId, sRtn)
        {
        	if(sPopupId =="coIdSearchPopup") {
        		if (this.gfnIsNull(sRtn)) return;
        		var objRtn = JSON.parse(sRtn);
        		this.dsGet.setColumn(0, "coId", objRtn.coId);
        		this.dsGet.setColumn(0, "coNm", objRtn.coNm);
        	}
        	else if(sPopupId == "deptSearchPopup") {
        		if (this.gfnIsNull(sRtn)) return;
        		var objRtn = JSON.parse(sRtn);
        		this.dsGet.setColumn(0, "deptId", objRtn.deptId);
        		this.dsGet.setColumn(0, "deptNm", objRtn.deptNm);
        	}
        	else if(sPopupId == "ctrtSearchPopup") {
        		if (this.gfnIsNull(sRtn)) return;
        		var objRtn = JSON.parse(sRtn);
        		var nRow = this.dsCtrtInfoList.addRow();
        		this.dsCtrtInfoList.setColumn(nRow, "userId", this.userId);
        		this.dsCtrtInfoList.setColumn(nRow, "ctrtNo", objRtn.ctrtNo);
        		this.dsCtrtInfoList.setColumn(nRow, "ctrtNm", objRtn.ctrtNm);
        		this.dsCtrtInfoList.setColumn(nRow, "ctrtType", objRtn.ctrtType);
        		this.dsCtrtInfoList.setColumn(nRow, "ctrtTypeNm", objRtn.ctrtTypeNm);
        		this.dsCtrtInfoList.setColumn(nRow, "ctrtYmd", objRtn.ctrtYmd);
        		this.dsCtrtInfoList.setColumn(nRow, "ctrtBgngYmd", objRtn.ctrtBgngYmd);
        		this.dsCtrtInfoList.setColumn(nRow, "ctrtEndYmd", objRtn.ctrtEndYmd);
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	this.gfnCmmCode("flrplnPrmIp", "dsIpBand", "IP_BAND", "");
        	this.dsIpBand.insertRow(0);
        	this.dsIpBand.setColumn(0, "cdId", "");
        	this.dsIpBand.setColumn(0, "cdNm", "사용안함");
        	this.divForm.form.Div07.form.cmbIpBand.index = 0;
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        // 회사 정보 팝업
        this.divForm_Div00_divEdtPop00_btnPop_onclick = function(obj,e)
        {
        	var sTitle = "회사 목록";
        	var objArg   = {};

        	var objOption = {
        		popuptype: "modal"	//modal,modaless
         		, width: 1221
         		, height: 650			//width,height 지정하지 않음 popup form size적용
        		, autosize: false
        		, title: sTitle
        		, resize: false
        		, titlebar: true
        	};
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup("coIdSearchPopup", "work::COM/crtr/COM100P01.xfdl", objArg, sPopupCallBack, objOption);
        };

        // 부서 정보 팝업
        this.divForm_Div00_divEdtPop_btnPop_onclick = function(obj,e)
        {
        	var sTitle = "부서 목록";
        	var objArg   = {};

        	var objOption = {
        		popuptype: "modal"	//modal,modaless
         		, width: 1221
         		, height: 650			//width,height 지정하지 않음 popup form size적용
        		, autosize: false
        		, title: sTitle
        		, resize: false
        		, titlebar: true
        	};
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup("deptSearchPopup", "work::COM/crtr/COM100P03.xfdl", objArg, sPopupCallBack, objOption);
        };

        // 계약정보 팝업
        this.divForm_Div01_divGrd_btnGrdRegi_onclick = function(obj,e)
        {
        	var sTitle = "계약신청_계약정보 연결";
        	var objArg   = {};

        	var objOption = {
        		popuptype: "modal"	//modal,modaless
        		, autosize: true
        		, title: sTitle
        		, resize: true
        		, titlebar: true
        	};
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup("ctrtSearchPopup", "work::COM/sysMng/COM024P063.xfdl", objArg, sPopupCallBack, objOption);
        };

        // 계정정보 삭제
        this.divForm_Div01_divGrd_btnGrdDel_onclick = function(obj,e)
        {
        	var chk = this.dsCtrtInfoList.findRow("chk", 1);
        	if(chk != -1) {
        		this.gfnConfirmMsg("ctrt_del", "MSG_005", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        	} else {
        		this.gfnAlertMsg("msg", "MSG_006");
        	}
        };

        // 권한적용
        this.divForm_Div05_divGrd_btnAuthSave_onclick = function(obj,e)
        {
        	if(this.gfnDsIsUpdated(this.dsAuthInfoList) != true) {
        		this.gfnAlertMsg("msg", "MSG_004");
        	} else {
        		this.gfnConfirmMsg("authInfo_save", "CST_001", "msgCallback", ["확인", "취소"], ["Y", "N"], "", ["권한적용"]);
        	}
        };

        // 사용자 정보 저장
        this.divBtn_btnSave_onclick = function(obj,e)
        {
        	if(this.gfnDsIsUpdated(this.dsGet) != true && this.gfnDsIsUpdated(this.dsCtrtInfoList) != true) {
        		this.gfnAlertMsg("msg", "MSG_004");
        	} else {
        		if(this.gfnDsIsValidated(this.validateColumn)) {
        			this.gfnConfirmMsg("user_save", "CST_001", "msgCallback", ["확인", "취소"], ["Y", "N"], "", ["사용자 정보 변경"]);
        		}
        	}
        };

        // 비밀번호 초기화
        this.divForm_Div05_btnPswdReset_onclick = function(obj,e)
        {
        	var msg = "비밀번호가 사용자ID로 초기화됩니다.\n로그인 시 비밀번호 변경 바랍니다.\n\n정말로 초기화 하시겠습니까?";
        	this.gfnConfirmMsg("pswd_reset", "MSG_011", "msgCallback", ["확인", "취소"], ["Y", "N"], "", [msg]);
        };

        // 입주자(기본)
        this.divForm_Div03_rdoIdAplyType1_onitemchanged = function(obj,e)
        {
        	if(e.postvalue == "Y") {
        		this.dsGet.setColumn(0, "userTat2Yn", "N");
        		this.dsGet.setColumn(0, "idAplyType", "TIDREQCD001");

        		if(this.dsGet.getColumn(0, "userSe") != "EMPCAT20") {
        			this.dsGet.setColumn(0, "userSe", "EMPCAT20");
        		}
        	} else if(e.postvalue == "N") {
        		this.dsGet.setColumn(0, "userTat2Yn", "Y");
        		this.dsGet.setColumn(0, "idAplyType", "TIDREQCD002");
        	}
        };

        // 입주자(계정관리자)
        this.divForm_Div03_rdoIdAplyType2_onitemchanged = function(obj,e)
        {
        	if(e.postvalue == "Y") {
        		this.dsGet.setColumn(0, "userTat1Yn", "N");
        		this.dsGet.setColumn(0, "idAplyType", "TIDREQCD002");

        		if(this.dsGet.getColumn(0, "userSe") != "EMPCAT20") {
        			this.dsGet.setColumn(0, "userSe", "EMPCAT20");
        		}
        	} else if(e.postvalue == "N") {
        		this.dsGet.setColumn(0, "userTat1Yn", "Y");
        		this.dsGet.setColumn(0, "idAplyType", "TIDREQCD001");
        	}
        };

        // 도면허용 IP 콤보 변경시
        this.divForm_Div06_cmbIpBand_onitemchanged = function(obj,e)
        {
        	if(this.gfnIsNull(e.postvalue)) {
        		this.divForm.form.Div07.form.edtFlrplnPrmIp01.value = "";
        		this.divForm.form.Div07.form.edtFlrplnPrmIp02.value = "";

        		this.divForm.form.Div07.form.edtFlrplnPrmIp02.readonly = true;
        	} else {
        		this.divForm.form.Div07.form.edtFlrplnPrmIp01.value = e.posttext;

        		this.divForm.form.Div07.form.edtFlrplnPrmIp02.readonly = false;
        		this.divForm.form.Div07.form.edtFlrplnPrmIp02.value = "";
        		this.dsGet.setColumn(0, "flrplnPrmIp", "");
        	}
        };

        // 도면허용 IP 값 변경시
        this.divForm_Div06_edtFlrplnPrmIp02_onchanged = function(obj,e)
        {
        	if(this.gfnIsNull(e.postvalue)) {
        		if(this.gfnIsNull(this.divForm.form.Div07.form.cmbIpBand.value)) {
        			this.dsGet.setColumn(0, "flrplnPrmIp", "");
        		}
        	} else {
        		if(this.gfnIsNull(this.divForm.form.Div07.form.cmbIpBand.value) != true) {
        			var flrplnPrmIp = this.divForm.form.Div07.form.edtFlrplnPrmIp01.value + "." + this.divForm.form.Div07.form.edtFlrplnPrmIp02.value;
        			this.dsGet.setColumn(0, "flrplnPrmIp", flrplnPrmIp);
        		}
        	}
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
        	} else if(objNm == "btnMinCtrtInfo") {
        		objDiv = this.divForm.form.Div02;
        	} else if(objNm == "btnMinAlrmYn") {
        		objDiv = this.divForm.form.Div03;
        	} else if(objNm == "btnMinUserSe") {
        		objDiv = this.divForm.form.Div04;
        	} else if(objNm == "btnMinEtc") {
        		objDiv = this.divForm.form.Div05;
        	} else if(objNm == "btnMinImportInfo") {
        		objDiv = this.divForm.form.Div06;
        	} else if(objNm == "btnMinIpInfo") {
        		objDiv = this.divForm.form.Div07;
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
            this.divForm.form.btnMinBscInfo.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.Div01.form.divEdtPop.form.btnPop.addEventHandler("onclick",this.divForm_Div00_divEdtPop_btnPop_onclick,this);
            this.divForm.form.Div01.form.divEdtPop00.form.btnPop.addEventHandler("onclick",this.divForm_Div00_divEdtPop00_btnPop_onclick,this);
            this.divForm.form.btnMinCtrtInfo.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.Div02.form.divGrd.form.btnGrdRegi.addEventHandler("onclick",this.divForm_Div01_divGrd_btnGrdRegi_onclick,this);
            this.divForm.form.Div02.form.divGrd.form.btnGrdDel.addEventHandler("onclick",this.divForm_Div01_divGrd_btnGrdDel_onclick,this);
            this.divForm.form.Div04.form.rdoIdAplyType1.addEventHandler("onitemchanged",this.divForm_Div03_rdoIdAplyType1_onitemchanged,this);
            this.divForm.form.Div04.form.rdoIdAplyType2.addEventHandler("onitemchanged",this.divForm_Div03_rdoIdAplyType2_onitemchanged,this);
            this.divForm.form.Div06.form.btnPswdReset.addEventHandler("onclick",this.divForm_Div05_btnPswdReset_onclick,this);
            this.divForm.form.Div06.form.divGrd.form.btnAuthSave.addEventHandler("onclick",this.divForm_Div05_divGrd_btnAuthSave_onclick,this);
            this.divForm.form.Div07.form.cmbIpBand.addEventHandler("onitemchanged",this.divForm_Div06_cmbIpBand_onitemchanged,this);
            this.divForm.form.Div07.form.edtFlrplnPrmIp02.addEventHandler("onchanged",this.divForm_Div06_edtFlrplnPrmIp02_onchanged,this);
            this.divForm.form.btnMinAlrmYn.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.btnMinEtc.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.btnMinUserSe.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.btnMinImportInfo.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.btnMinIpInfo.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divPopBtn.form.Button00_00.addEventHandler("onclick",this.divBtn_btnSave_onclick,this);
        };
        this.loadIncludeScript("COM024P061.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
