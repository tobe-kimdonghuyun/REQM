(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM001P012");
            this.set_titletext("고객정보확인서_계약정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGet", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNm\" type=\"STRING\" size=\"256\"/><Column id=\"itgrnCtrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtType\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtYmd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"rfctTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"rfctTrgtCtrtEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"rfctTrgtCtrtEndDtHwrt\" type=\"STRING\" size=\"256\"/><Column id=\"taxfrTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"taxfrTrgtCtrtEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"taxfrTrgtCtrtEndDtHwrt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"fullName\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_fittocontents("none");
            obj.set_formscrollbartype("default default");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","125.00","10","100%","480",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan00_02\"/><PanelItem id=\"PanelItem03\" componentid=\"pan00_03\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staId","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("4");
            obj.set_text("ID");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_01","10.00","98","250","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staId\"/><PanelItem id=\"PanelItem02\" componentid=\"edtId\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staCtrtNo","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("6");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtCtrtNo","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_02","10.00","98","250","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCtrtNo\"/><PanelItem id=\"PanelItem01\" componentid=\"edtCtrtNo\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staCtrtNm","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("9");
            obj.set_text("계약명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_03","10.00","98","250","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("10");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCtrtNm\"/><PanelItem id=\"PanelItem02\" componentid=\"edtCtrtNm\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staItgrnCtrtNo","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("11");
            obj.set_text("통합계약번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan01_01","10.00","98","250","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("12");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staItgrnCtrtNo\"/><PanelItem id=\"PanelItem02\" componentid=\"edtItgrnCtrtNo\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan01","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("1");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"pan01_01\"/><PanelItem id=\"PanelItem03\" componentid=\"pan01_02\"/><PanelItem id=\"PanelItem01\" componentid=\"pan01_03\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staCtrtType","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("13");
            obj.set_text("계약유형");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan01_02","10.00","98","250","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("14");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCtrtType\"/><PanelItem id=\"PanelItem02\" componentid=\"edtCtrtType\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staCtrtBgngYmd","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("15");
            obj.set_text("계약시작일");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan02_02","10.00","98","250","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("16");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCtrtBgngYmd\"/><PanelItem id=\"PanelItem02\" componentid=\"calCtrtBgngYmd\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan02","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("2");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem04\" componentid=\"pan02_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan02_02\"/><PanelItem id=\"PanelItem03\" componentid=\"pan02_03\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staCtrtEndYmd","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("17");
            obj.set_text("계약종료일");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan02_03","10.00","98","250","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("18");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCtrtEndYmd\"/><PanelItem id=\"PanelItem02\" componentid=\"calCtrtEndYmd\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Calendar("calCtrtBgngYmd","0","0","150","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("19");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("true");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Calendar("calCtrtEndYmd","0","0","150","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("20");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("true");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staRfctTrgtCtrtEndDt","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("21");
            obj.set_text("식음종료일");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan03_02","10.00","98","250","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("22");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staRfctTrgtCtrtEndDt\"/><PanelItem id=\"PanelItem02\" componentid=\"calRfctTrgtCtrtEndDt\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staRfctTrgtCtrtEndDtHwrt","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("23");
            obj.set_text("식음종료일(수기입력)");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan03_03","10.00","98","250","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("24");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staRfctTrgtCtrtEndDtHwrt\"/><PanelItem id=\"PanelItem02\" componentid=\"calRfctTrgtCtrtEndDtHwrt\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan03","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("3");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"pan03_01\"/><PanelItem id=\"PanelItem00\" componentid=\"pan03_02\"/><PanelItem id=\"PanelItem02\" componentid=\"pan03_03\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtCtrtNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("25");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staCtrtYmd","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("26");
            obj.set_text("계약일");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan02_01","10.00","98","250","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("27");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCtrtYmd\"/><PanelItem id=\"PanelItem02\" componentid=\"calCtrtYmd\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staRfctTrgtYn","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("28");
            obj.set_text("식음대상여부");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan03_01","10.00","98","250","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("29");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staRfctTrgtYn\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoRfctTrgtYn\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staTaxfrTrgtYn","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("30");
            obj.set_text("면세대상여부");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan04_01_00","10.00","98","250","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("31");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTaxfrTrgtYn\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoTaxfrTrgtYn\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staTaxfrTrgtCtrtEndDt","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("32");
            obj.set_text("면세종료일");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan04_02_00","10.00","98","250","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("33");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTaxfrTrgtCtrtEndDt\"/><PanelItem id=\"PanelItem02\" componentid=\"calTaxfrTrgtCtrtEndDt\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan04_03_00","10.00","98","250","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("34");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staTaxfrTrgtCtrtEndDtHwrt\"/><PanelItem id=\"PanelItem01\" componentid=\"calTaxfrTrgtCtrtEndDtHwrt\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan04_00","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("35");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan04_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan04_02_00\"/><PanelItem id=\"PanelItem03\" componentid=\"pan04_03_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtId","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("36");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staTaxfrTrgtCtrtEndDtHwrt","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("37");
            obj.set_text("면세종료일(수기입력)");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan01_03","10.00","98","250","1",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("38");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtItgrnCtrtNo","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("39");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Calendar("calRfctTrgtCtrtEndDt","0","0","150","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("40");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("true");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Calendar("calTaxfrTrgtCtrtEndDt","0","0","150","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("41");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("true");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Calendar("calTaxfrTrgtCtrtEndDtHwrt","0","0","150","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("42");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("true");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Calendar("calRfctTrgtCtrtEndDtHwrt","0","0","150","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("43");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("true");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtCtrtType","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("44");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Radio("rdoRfctTrgtYn","51","580","100.00%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("45");
            obj.set_fittocontents("width");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_Div00_form_rdoRfctTrgtYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div00_form_rdoRfctTrgtYn_innerdataset", obj);
            divForm_form_Div00_form_rdoRfctTrgtYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div00_form_rdoRfctTrgtYn_innerdataset);
            obj.set_text("예");
            obj.set_value("Y");
            obj.set_index("0");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Radio("rdoTaxfrTrgtYn","51","580","100.00%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("46");
            obj.set_fittocontents("width");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_Div00_form_rdoTaxfrTrgtYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div00_form_rdoTaxfrTrgtYn_innerdataset", obj);
            divForm_form_Div00_form_rdoTaxfrTrgtYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div00_form_rdoTaxfrTrgtYn_innerdataset);
            obj.set_text("예");
            obj.set_value("Y");
            obj.set_index("0");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Calendar("calCtrtYmd","0","0","150","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("47");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("true");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new RaonkUpload("RaonkUpload","1028.00","30","14.20%","120",null,null,null,null,null,null,this);
            obj.set_taborder("1");
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
            //-- Default Layout : this.divForm.form.Div00.form
            obj = new Layout("default","",0,0,this.divForm.form.Div00.form,
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

                p.staId.set_taborder("4");
                p.staId.set_text("ID");
                p.staId.set_cssclass("sta_WF_Label");
                p.staId.move("10","98","100%","46",null,null);

                p.pan00_01.set_taborder("5");
                p.pan00_01.set_type("vertical");
                p.pan00_01.set_flexgrow("1");
                p.pan00_01.set_minwidth("");
                p.pan00_01.move("10.00","98","250","86",null,null);

                p.staCtrtNo.set_taborder("6");
                p.staCtrtNo.set_text("계약번호");
                p.staCtrtNo.set_cssclass("sta_WF_Label");
                p.staCtrtNo.move("10","98","100%","46",null,null);

                p.edtCtrtNo.set_taborder("7");
                p.edtCtrtNo.set_readonly("true");
                p.edtCtrtNo.move("10.00","158","100%","40",null,null);

                p.pan00_02.set_taborder("8");
                p.pan00_02.set_type("vertical");
                p.pan00_02.set_flexgrow("1");
                p.pan00_02.set_minwidth("");
                p.pan00_02.move("10.00","98","250","86",null,null);

                p.staCtrtNm.set_taborder("9");
                p.staCtrtNm.set_text("계약명");
                p.staCtrtNm.set_cssclass("sta_WF_Label");
                p.staCtrtNm.move("10","98","100%","46",null,null);

                p.pan00_03.set_taborder("10");
                p.pan00_03.set_type("vertical");
                p.pan00_03.set_flexgrow("1");
                p.pan00_03.move("10.00","98","250","86",null,null);

                p.staItgrnCtrtNo.set_taborder("11");
                p.staItgrnCtrtNo.set_text("통합계약번호");
                p.staItgrnCtrtNo.set_cssclass("sta_WF_Label");
                p.staItgrnCtrtNo.move("10","98","100%","46",null,null);

                p.pan01_01.set_taborder("12");
                p.pan01_01.set_type("vertical");
                p.pan01_01.set_flexgrow("1");
                p.pan01_01.move("10.00","98","250","86",null,null);

                p.pan01.set_taborder("1");
                p.pan01.set_horizontalgap("20");
                p.pan01.set_flexcrossaxiswrapalign("start");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_verticalgap("0");
                p.pan01.set_spacing("0px 20px 10px 20px");
                p.pan01.set_cssclass("pal_WF_DtlBg");
                p.pan01.set_flexshrink("1");
                p.pan01.set_fittocontents("height");
                p.pan01.move("0","60","100.00%","96",null,null);

                p.staCtrtType.set_taborder("13");
                p.staCtrtType.set_text("계약유형");
                p.staCtrtType.set_cssclass("sta_WF_Label");
                p.staCtrtType.move("10","98","100%","46",null,null);

                p.pan01_02.set_taborder("14");
                p.pan01_02.set_type("vertical");
                p.pan01_02.set_flexgrow("1");
                p.pan01_02.move("10.00","98","250","86",null,null);

                p.staCtrtBgngYmd.set_taborder("15");
                p.staCtrtBgngYmd.set_text("계약시작일");
                p.staCtrtBgngYmd.set_cssclass("sta_WF_Label");
                p.staCtrtBgngYmd.move("10","98","100%","46",null,null);

                p.pan02_02.set_taborder("16");
                p.pan02_02.set_type("vertical");
                p.pan02_02.set_flexgrow("1");
                p.pan02_02.move("10.00","98","250","86",null,null);

                p.pan02.set_taborder("2");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.move("0","60","100.00%","96",null,null);

                p.staCtrtEndYmd.set_taborder("17");
                p.staCtrtEndYmd.set_text("계약종료일");
                p.staCtrtEndYmd.set_cssclass("sta_WF_Label");
                p.staCtrtEndYmd.move("10","98","100%","46",null,null);

                p.pan02_03.set_taborder("18");
                p.pan02_03.set_type("vertical");
                p.pan02_03.set_flexgrow("1");
                p.pan02_03.move("10.00","98","250","86",null,null);

                p.calCtrtBgngYmd.set_taborder("19");
                p.calCtrtBgngYmd.set_dateformat("yyyy-MM-dd");
                p.calCtrtBgngYmd.set_readonly("true");
                p.calCtrtBgngYmd.move("0","0","150","40",null,null);

                p.calCtrtEndYmd.set_taborder("20");
                p.calCtrtEndYmd.set_dateformat("yyyy-MM-dd");
                p.calCtrtEndYmd.set_readonly("true");
                p.calCtrtEndYmd.move("0","0","150","40",null,null);

                p.staRfctTrgtCtrtEndDt.set_taborder("21");
                p.staRfctTrgtCtrtEndDt.set_text("식음종료일");
                p.staRfctTrgtCtrtEndDt.set_cssclass("sta_WF_Label");
                p.staRfctTrgtCtrtEndDt.move("10","98","100%","46",null,null);

                p.pan03_02.set_taborder("22");
                p.pan03_02.set_type("vertical");
                p.pan03_02.set_flexgrow("1");
                p.pan03_02.move("10.00","98","250","86",null,null);

                p.staRfctTrgtCtrtEndDtHwrt.set_taborder("23");
                p.staRfctTrgtCtrtEndDtHwrt.set_text("식음종료일(수기입력)");
                p.staRfctTrgtCtrtEndDtHwrt.set_cssclass("sta_WF_Label");
                p.staRfctTrgtCtrtEndDtHwrt.move("10","98","100%","46",null,null);

                p.pan03_03.set_taborder("24");
                p.pan03_03.set_type("vertical");
                p.pan03_03.set_flexgrow("1");
                p.pan03_03.move("10.00","98","250","86",null,null);

                p.pan03.set_taborder("3");
                p.pan03.set_horizontalgap("20");
                p.pan03.set_flexcrossaxiswrapalign("start");
                p.pan03.set_flexwrap("wrap");
                p.pan03.set_fittocontents("height");
                p.pan03.set_verticalgap("0");
                p.pan03.set_spacing("0px 20px 10px 20px");
                p.pan03.set_cssclass("pal_WF_DtlBg");
                p.pan03.move("0","60","100.00%","96",null,null);

                p.edtCtrtNm.set_taborder("25");
                p.edtCtrtNm.set_readonly("true");
                p.edtCtrtNm.move("10.00","158","100%","40",null,null);

                p.staCtrtYmd.set_taborder("26");
                p.staCtrtYmd.set_text("계약일");
                p.staCtrtYmd.set_cssclass("sta_WF_Label");
                p.staCtrtYmd.move("10","98","100%","46",null,null);

                p.pan02_01.set_taborder("27");
                p.pan02_01.set_type("vertical");
                p.pan02_01.set_flexgrow("1");
                p.pan02_01.move("10.00","98","250","86",null,null);

                p.staRfctTrgtYn.set_taborder("28");
                p.staRfctTrgtYn.set_text("식음대상여부");
                p.staRfctTrgtYn.set_cssclass("sta_WF_Label");
                p.staRfctTrgtYn.move("10","98","100%","46",null,null);

                p.pan03_01.set_taborder("29");
                p.pan03_01.set_type("vertical");
                p.pan03_01.set_flexgrow("1");
                p.pan03_01.move("10.00","98","250","86",null,null);

                p.staTaxfrTrgtYn.set_taborder("30");
                p.staTaxfrTrgtYn.set_text("면세대상여부");
                p.staTaxfrTrgtYn.set_cssclass("sta_WF_Label");
                p.staTaxfrTrgtYn.move("10","98","100%","46",null,null);

                p.pan04_01_00.set_taborder("31");
                p.pan04_01_00.set_type("vertical");
                p.pan04_01_00.set_flexgrow("1");
                p.pan04_01_00.move("10.00","98","250","86",null,null);

                p.staTaxfrTrgtCtrtEndDt.set_taborder("32");
                p.staTaxfrTrgtCtrtEndDt.set_text("면세종료일");
                p.staTaxfrTrgtCtrtEndDt.set_cssclass("sta_WF_Label");
                p.staTaxfrTrgtCtrtEndDt.move("10","98","100%","46",null,null);

                p.pan04_02_00.set_taborder("33");
                p.pan04_02_00.set_type("vertical");
                p.pan04_02_00.set_flexgrow("1");
                p.pan04_02_00.move("10.00","98","250","86",null,null);

                p.pan04_03_00.set_taborder("34");
                p.pan04_03_00.set_type("vertical");
                p.pan04_03_00.set_flexgrow("1");
                p.pan04_03_00.move("10.00","98","250","86",null,null);

                p.pan04_00.set_taborder("35");
                p.pan04_00.set_horizontalgap("20");
                p.pan04_00.set_flexcrossaxiswrapalign("start");
                p.pan04_00.set_flexwrap("wrap");
                p.pan04_00.set_fittocontents("height");
                p.pan04_00.set_verticalgap("0");
                p.pan04_00.set_spacing("0px 20px 10px 20px");
                p.pan04_00.set_cssclass("pal_WF_DtlBg");
                p.pan04_00.move("0","60","100.00%","96",null,null);

                p.edtId.set_taborder("36");
                p.edtId.set_readonly("true");
                p.edtId.move("10.00","158","100%","40",null,null);

                p.staTaxfrTrgtCtrtEndDtHwrt.set_taborder("37");
                p.staTaxfrTrgtCtrtEndDtHwrt.set_text("면세종료일(수기입력)");
                p.staTaxfrTrgtCtrtEndDtHwrt.set_cssclass("sta_WF_Label");
                p.staTaxfrTrgtCtrtEndDtHwrt.move("10","98","100%","46",null,null);

                p.pan01_03.set_taborder("38");
                p.pan01_03.set_type("vertical");
                p.pan01_03.set_flexgrow("1");
                p.pan01_03.move("10.00","98","250","1",null,null);

                p.edtItgrnCtrtNo.set_taborder("39");
                p.edtItgrnCtrtNo.set_readonly("true");
                p.edtItgrnCtrtNo.move("10.00","158","100%","40",null,null);

                p.calRfctTrgtCtrtEndDt.set_taborder("40");
                p.calRfctTrgtCtrtEndDt.set_dateformat("yyyy-MM-dd");
                p.calRfctTrgtCtrtEndDt.set_readonly("true");
                p.calRfctTrgtCtrtEndDt.move("0","0","150","40",null,null);

                p.calTaxfrTrgtCtrtEndDt.set_taborder("41");
                p.calTaxfrTrgtCtrtEndDt.set_dateformat("yyyy-MM-dd");
                p.calTaxfrTrgtCtrtEndDt.set_readonly("true");
                p.calTaxfrTrgtCtrtEndDt.move("0","0","150","40",null,null);

                p.calTaxfrTrgtCtrtEndDtHwrt.set_taborder("42");
                p.calTaxfrTrgtCtrtEndDtHwrt.set_dateformat("yyyy-MM-dd");
                p.calTaxfrTrgtCtrtEndDtHwrt.set_readonly("true");
                p.calTaxfrTrgtCtrtEndDtHwrt.move("0","0","150","40",null,null);

                p.calRfctTrgtCtrtEndDtHwrt.set_taborder("43");
                p.calRfctTrgtCtrtEndDtHwrt.set_dateformat("yyyy-MM-dd");
                p.calRfctTrgtCtrtEndDtHwrt.set_readonly("true");
                p.calRfctTrgtCtrtEndDtHwrt.move("0","0","150","40",null,null);

                p.edtCtrtType.set_taborder("44");
                p.edtCtrtType.set_readonly("true");
                p.edtCtrtType.move("10.00","158","100%","40",null,null);

                p.rdoRfctTrgtYn.set_taborder("45");
                p.rdoRfctTrgtYn.set_fittocontents("width");
                p.rdoRfctTrgtYn.set_direction("vertical");
                p.rdoRfctTrgtYn.set_innerdataset(divForm_form_Div00_form_rdoRfctTrgtYn_innerdataset);
                p.rdoRfctTrgtYn.set_codecolumn("codecolumn");
                p.rdoRfctTrgtYn.set_datacolumn("datacolumn");
                p.rdoRfctTrgtYn.set_value("Y");
                p.rdoRfctTrgtYn.set_index("0");
                p.rdoRfctTrgtYn.move("51","580","100.00%","40",null,null);

                p.rdoTaxfrTrgtYn.set_taborder("46");
                p.rdoTaxfrTrgtYn.set_fittocontents("width");
                p.rdoTaxfrTrgtYn.set_direction("vertical");
                p.rdoTaxfrTrgtYn.set_innerdataset(divForm_form_Div00_form_rdoTaxfrTrgtYn_innerdataset);
                p.rdoTaxfrTrgtYn.set_codecolumn("codecolumn");
                p.rdoTaxfrTrgtYn.set_datacolumn("datacolumn");
                p.rdoTaxfrTrgtYn.set_value("Y");
                p.rdoTaxfrTrgtYn.set_index("0");
                p.rdoTaxfrTrgtYn.move("51","580","100.00%","40",null,null);

                p.calCtrtYmd.set_taborder("47");
                p.calCtrtYmd.set_dateformat("yyyy-MM-dd");
                p.calCtrtYmd.set_readonly("true");
                p.calCtrtYmd.move("0","0","150","40",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div00.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Div00.set_taborder("0");
                p.Div00.set_text("Div00");
                p.Div00.set_cssclass("div_WF_Bg");
                p.Div00.set_fittocontents("height");
                p.Div00.move("125.00","10","100%","480",null,null);
            	}
            );
            obj.set_verticalgap("10");
            obj.set_type("horizontal");
            obj.set_flexmainaxisalign("center");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 20px 10px 20px");
            this.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form
            obj = new Layout("Layout0","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("10");
            obj.set_type("horizontal");
            obj.set_flexmainaxisalign("center");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 20px 10px 20px");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1000,500,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("고객정보확인서_계약정보");

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_fittocontents("none");
                p.divForm.set_formscrollbartype("default default");
                p.divForm.set_formscrolltype("both");
                p.divForm.move("0","0",null,null,"0","0");

                p.RaonkUpload.set_taborder("1");
                p.RaonkUpload.set_DevelopLangage("JAVA");
                p.RaonkUpload.set_ExtensionAllowOrLimit("1");
                p.RaonkUpload.set_HandlerUrl("/common/uploadDownload.do");
                p.RaonkUpload.set_RunTimes("html5");
                p.RaonkUpload.set_ButtonBarView("0");
                p.RaonkUpload.set_visible("false");
                p.RaonkUpload.set_AllowDuplicationFile("1");
                p.RaonkUpload.set_text("");
                p.RaonkUpload.set_DisableDeleteConfirm("1");
                p.RaonkUpload.move("1028.00","30","14.20%","120",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Phone_screen",480,781,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divForm.set_fittocontents("none");
                p.divForm.move("0","0",null,null,"0","60");
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item4","divForm.form.Div00.form.edtCtrtNo","value","dsGet","ctrtNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divForm.form.Div00.form.calCtrtBgngYmd","value","dsGet","ctrtBgngYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divForm.form.Div00.form.calCtrtEndYmd","value","dsGet","ctrtEndYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divForm.form.Div00.form.edtCtrtNm","value","dsGet","ctrtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divForm.form.Div00.form.edtId","value","dsGet","ctrtSe");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.Div00.form.edtItgrnCtrtNo","value","dsGet","itgrnCtrtNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.Div00.form.calRfctTrgtCtrtEndDt","value","dsGet","rfctTrgtCtrtEndDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.Div00.form.calTaxfrTrgtCtrtEndDt","value","dsGet","taxfrTrgtCtrtEndDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divForm.form.Div00.form.calTaxfrTrgtCtrtEndDtHwrt","value","dsGet","taxfrTrgtCtrtEndDtHwrt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divForm.form.Div00.form.calRfctTrgtCtrtEndDtHwrt","value","dsGet","rfctTrgtCtrtEndDtHwrt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divForm.form.Div00.form.edtCtrtType","value","dsGet","ctrtType");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.Div00.form.rdoRfctTrgtYn","value","dsGet","rfctTrgtYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divForm.form.Div00.form.rdoTaxfrTrgtYn","value","dsGet","taxfrTrgtYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.Div00.form.calCtrtYmd","value","dsGet","ctrtYmd");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("COM001P012.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	COM001P012.xfdl
        *  @Creator 	ELUON INS
        *  @CreateDate 	2025/01/15
        *  @Desction
        *  @Author
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2025/01/15			조규완					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        this.param;
        var cMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수

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
        //조회
        this.cfnSearch = function ()
        {
        	this.getSearchTransaction();
        };

        // 닫기
        this.cfnClose = function() {
         	var sWinId = this.objApp.gdsOpenMenu.lookupAs(this.FRAME_MENUCOLUMNS.menuId, this.getOwnerFrame().form.fvMenuId.substring(0, 14), this.FRAME_MENUCOLUMNS.winId);
         	var objForm = this.objApp.gvFrsWork.all[sWinId];
        	objForm.form.divWork.form.cfnSearch(1);
        };
        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.getSearchTransaction = function()
        {
        	var strSvcId    = "search";
        	var strSvcUrl   = "doc/ctrtInfoInq.do";
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
        			if(this.dsFile.getRowCount() > 0) {
        				this.divForm.form.Div00.form.staFileCnt.text = this.dsFile.getRowCount();

        				// 데이터 조회 후 파일리스트에 셋팅
        				this.gfnDownloadSetting(this.RaonkUpload, this.dsFile1);
        			}
        			break;
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	if(this.param != null && this.param.id != null && this.param.id != '')
        	{
        		this.getSearchTransaction();
        	}
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
        	if(this.gvUploadCategory == 'file')
        	{
        		if(this.dsFile1.rowcount >= 1)
        		{
        			this.gfnAlertMsg("beforeAddFile", "MSG_011", ["파일 1개만 업로드 가능 합니다."]);
        			for (var i = 1; i < this.dsFile1.rowcount; i++) {
        				this.dsFile1.deleteRow(i);
        				var deleteParam = {
        					"row" : i,
        					"col" : 1
        				};
        				this.gfnDeleteFile(this.RaonkUpload, this.dsFile1, deleteParam);
        			}
        			return false;
        		}
        	}

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
        	if(this.gvUploadCategory == 'file') {
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
        this.divForm_Div00_Grid01_oncellclick = function(obj,e)
        {

        	if(e.col == 0) // 파일명 클릭
        	{
        		this.gfnSelectFile(this.RaonkUpload, this.dsFile1, e);
        	}
        };

        // 파일 그리드 더블클릭 이벤트
        this.divForm_Div00_Grid01_oncelldblclick = function(obj,e)
        {
        	if(e.col == 0) 	// 파일명을 더블클릭 시 다운로드
        	{
        		this.gfnDownloadFile(this.RaonkUpload, this.dsFile1, e);
        	}
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.Div00.form.staId.addEventHandler("onclick",this.divForm_Div00_staCoId_onclick,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_CreationComplete",this.RaonkUpload_RAONKUPLOAD_CreationComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_OnError",this.RaonkUpload_RAONKUPLOAD_OnError,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterAddFile",this.RaonkUpload_RAONKUPLOAD_AfterAddFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterAddAllFile",this.RaonkUpload_RAONKUPLOAD_AfterAddAllFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_BeforeAddFile",this.RaonkUpload_RAONKUPLOAD_BeforeAddFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_UploadComplete",this.RaonkUpload_RAONKUPLOAD_UploadComplete,this);
        };
        this.loadIncludeScript("COM001P012.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
