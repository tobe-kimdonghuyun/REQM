(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM023P04");
            this.set_titletext("계약 등록/수정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGet", this);
            obj._setContents("<ColumnInfo><Column id=\"ctrtSe\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNm\" type=\"STRING\" size=\"256\"/><Column id=\"itgrnCtrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtType\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtTypeNm\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtCustClsf\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtCustClsfNm\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtYmd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"bscCtrtPrd\" type=\"STRING\" size=\"256\"/><Column id=\"optCtrtPrd\" type=\"STRING\" size=\"256\"/><Column id=\"bsrgt\" type=\"STRING\" size=\"256\"/><Column id=\"exnAwadSe\" type=\"STRING\" size=\"256\"/><Column id=\"rsvtCol1\" type=\"STRING\" size=\"256\"/><Column id=\"rsctCol2\" type=\"STRING\" size=\"256\"/><Column id=\"rsvtCol3\" type=\"STRING\" size=\"256\"/><Column id=\"dateTime\" type=\"STRING\" size=\"256\"/><Column id=\"mnlMngSeMnl\" type=\"STRING\" size=\"256\"/><Column id=\"cocId\" type=\"STRING\" size=\"256\"/><Column id=\"rfctTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"rfctTrgtCtrtEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"rfctTrgtCtrtEndDtHwrt\" type=\"STRING\" size=\"256\"/><Column id=\"taxfrTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"taxfrTrgtCtrtEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"taxfrTrgtCtrtEndDtHwrt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCtrtType", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cdNm\">선택</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","0","0",null,null,"0","70",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_fittocontents("none");
            obj.set_formscrollbartype("default default");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","231","10","100%","390",null,null,null,null,null,null,this.divForm.form);
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
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan00_02\"/><PanelItem id=\"PanelItem03\" componentid=\"pan01_01\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtCtrtNo","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_01","10.00","98","250","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtCtrtNo\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("4");
            obj.set_text("계약명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_02","10.00","98","250","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"edtCtrtNm\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel01_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("6");
            obj.set_text("통합계약번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan01_01","10.00","98","250","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("7");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edtItgrnCtrtNo\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel05_01_00","10","98","305","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("8");
            obj.set_text("계약일");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan04_00","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("10");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"pan04_02_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan04_02_00\"/><PanelItem id=\"PanelItem03\" componentid=\"pan00_02_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan04_02_00","10.00","98","250","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"calCtrtYmd\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel05_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("11");
            obj.set_text("면세대상여부");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Radio("rdoTaxfrTrgtYn","51","580","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("12");
            obj.set_fittocontents("width");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_Div00_form_rdoTaxfrTrgtYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div00_form_rdoTaxfrTrgtYn_innerdataset", obj);
            divForm_form_Div00_form_rdoTaxfrTrgtYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div00_form_rdoTaxfrTrgtYn_innerdataset);
            obj.set_text("계약선택");
            obj.set_value("0");
            obj.set_index("0");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan04_01_00_00","10.00","98","250","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("13");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoTaxfrTrgtYn\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("15");
            obj.set_text("계약종료일");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_01_00","10.00","98","250","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("16");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"calCtrtEndYmd\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_00","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("17");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"pan00_01_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"pan00_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan00_02_00_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan04_00_00","0","60","100%","96",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("14");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"pan04_01_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"pan04_01_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"pan00_02_00_00_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("18");
            obj.set_text("계약시작일");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel05_01_00_00","10","98","305","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("20");
            obj.set_text("계약유형");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan04_02_00_00","10.00","98","250","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("22");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_01_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"cmbCtrgType\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Combo("cmbCtrgType","788.00","145","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("21");
            obj.set_flexgrow("1");
            obj.set_innerdataset("dsCtrtType");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("0");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtCtrtNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("23");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtItgrnCtrtNo","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("24");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel05_00_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("25");
            obj.set_text("식음대상여부");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Radio("rdoRfctTrgtYn","51","580","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("26");
            obj.set_fittocontents("width");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_Div00_form_rdoRfctTrgtYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div00_form_rdoRfctTrgtYn_innerdataset", obj);
            divForm_form_Div00_form_rdoRfctTrgtYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div00_form_rdoRfctTrgtYn_innerdataset);
            obj.set_text("계약선택");
            obj.set_value("0");
            obj.set_index("0");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan04_01_00_00_00","10.00","98","250","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("27");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoRfctTrgtYn\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Calendar("calCtrtYmd","0","0","150","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("28");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Calendar("calCtrtBgngYmd","0","0","150","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("29");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Calendar("calCtrtEndYmd","0","0","150","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("30");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_01_00","437","119","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("31");
            obj.set_text("식음종료일");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Calendar("calRfctTrgtCtrtEndYmd","437","165","150","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("32");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_02_00","437.00","119","250","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("33");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"calRfctTrgtCtrtEndYmd\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_01_00_00","880","214","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("34");
            obj.set_text("면세종료일");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Calendar("calTaxfrTrgtCtrtEndYmd","880","260","150","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("35");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_02_00_00","880.00","214","250","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("36");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"calTaxfrTrgtCtrtEndYmd\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_02_00_00_00","870.00","305","250","0",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("37");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_01_00_00","10.00","98","250","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("19");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"calCtrtBgngYmd\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Div("divPopBtn","0",null,null,"60","0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","457.00","30","68","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_fittocontents("width");
            this.divPopBtn.addChild(obj.name, obj);
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

                p.staLabel00.set_taborder("1");
                p.staLabel00.set_text("계약번호");
                p.staLabel00.set_cssclass("sta_WF_Label");
                p.staLabel00.move("10","98","100%","46",null,null);

                p.edtCtrtNo.set_taborder("2");
                p.edtCtrtNo.set_readonly("true");
                p.edtCtrtNo.move("10.00","158","100%","40",null,null);

                p.pan00_01.set_taborder("3");
                p.pan00_01.set_type("vertical");
                p.pan00_01.set_flexgrow("1");
                p.pan00_01.set_minwidth("");
                p.pan00_01.move("10.00","98","250","86",null,null);

                p.staLabel00_01.set_taborder("4");
                p.staLabel00_01.set_text("계약명");
                p.staLabel00_01.set_cssclass("sta_WF_Label");
                p.staLabel00_01.move("10","98","100%","46",null,null);

                p.pan00_02.set_taborder("5");
                p.pan00_02.set_type("vertical");
                p.pan00_02.set_flexgrow("1");
                p.pan00_02.set_minwidth("");
                p.pan00_02.move("10.00","98","250","86",null,null);

                p.staLabel01_00.set_taborder("6");
                p.staLabel01_00.set_text("통합계약번호");
                p.staLabel01_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00.move("10","98","100%","46",null,null);

                p.pan01_01.set_taborder("7");
                p.pan01_01.set_type("vertical");
                p.pan01_01.set_flexgrow("1");
                p.pan01_01.move("10.00","98","250","86",null,null);

                p.staLabel05_01_00.set_taborder("8");
                p.staLabel05_01_00.set_text("계약일");
                p.staLabel05_01_00.set_cssclass("sta_WF_Label");
                p.staLabel05_01_00.move("10","98","305","46",null,null);

                p.pan04_00.set_taborder("10");
                p.pan04_00.set_horizontalgap("20");
                p.pan04_00.set_flexcrossaxiswrapalign("start");
                p.pan04_00.set_flexwrap("wrap");
                p.pan04_00.set_fittocontents("height");
                p.pan04_00.set_verticalgap("0");
                p.pan04_00.set_spacing("0px 20px 10px 20px");
                p.pan04_00.set_cssclass("pal_WF_DtlBg");
                p.pan04_00.move("0","60","100.00%","96",null,null);

                p.pan04_02_00.set_taborder("9");
                p.pan04_02_00.set_type("vertical");
                p.pan04_02_00.set_flexgrow("1");
                p.pan04_02_00.move("10.00","98","250","86",null,null);

                p.staLabel05_00_00_00.set_taborder("11");
                p.staLabel05_00_00_00.set_text("면세대상여부");
                p.staLabel05_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel05_00_00_00.move("10","98","100%","46",null,null);

                p.rdoTaxfrTrgtYn.set_taborder("12");
                p.rdoTaxfrTrgtYn.set_fittocontents("width");
                p.rdoTaxfrTrgtYn.set_direction("vertical");
                p.rdoTaxfrTrgtYn.set_innerdataset(divForm_form_Div00_form_rdoTaxfrTrgtYn_innerdataset);
                p.rdoTaxfrTrgtYn.set_codecolumn("codecolumn");
                p.rdoTaxfrTrgtYn.set_datacolumn("datacolumn");
                p.rdoTaxfrTrgtYn.set_value("0");
                p.rdoTaxfrTrgtYn.set_index("0");
                p.rdoTaxfrTrgtYn.move("51","580","100%","40",null,null);

                p.pan04_01_00_00.set_taborder("13");
                p.pan04_01_00_00.set_type("vertical");
                p.pan04_01_00_00.set_flexgrow("1");
                p.pan04_01_00_00.move("10.00","98","250","86",null,null);

                p.staLabel00_00.set_taborder("15");
                p.staLabel00_00.set_text("계약종료일");
                p.staLabel00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00.move("10","98","100%","46",null,null);

                p.pan00_01_00.set_taborder("16");
                p.pan00_01_00.set_type("vertical");
                p.pan00_01_00.set_flexgrow("1");
                p.pan00_01_00.set_minwidth("");
                p.pan00_01_00.move("10.00","98","250","86",null,null);

                p.pan00_00.set_taborder("17");
                p.pan00_00.set_horizontalgap("20");
                p.pan00_00.set_flexcrossaxiswrapalign("start");
                p.pan00_00.set_flexwrap("wrap");
                p.pan00_00.set_fittocontents("height");
                p.pan00_00.set_verticalgap("0");
                p.pan00_00.set_spacing("0px 20px 10px 20px");
                p.pan00_00.set_cssclass("pal_WF_DtlBg");
                p.pan00_00.move("0","60","100.00%","96",null,null);

                p.pan04_00_00.set_taborder("14");
                p.pan04_00_00.set_horizontalgap("20");
                p.pan04_00_00.set_flexcrossaxiswrapalign("start");
                p.pan04_00_00.set_flexwrap("wrap");
                p.pan04_00_00.set_fittocontents("height");
                p.pan04_00_00.set_verticalgap("0");
                p.pan04_00_00.set_spacing("0px 20px 10px 20px");
                p.pan04_00_00.set_cssclass("pal_WF_DtlBg");
                p.pan04_00_00.move("0","60","100%","96",null,null);

                p.staLabel00_00_00.set_taborder("18");
                p.staLabel00_00_00.set_text("계약시작일");
                p.staLabel00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00_00.move("10","98","100%","46",null,null);

                p.staLabel05_01_00_00.set_taborder("20");
                p.staLabel05_01_00_00.set_text("계약유형");
                p.staLabel05_01_00_00.set_cssclass("sta_WF_Label");
                p.staLabel05_01_00_00.move("10","98","305","46",null,null);

                p.pan04_02_00_00.set_taborder("22");
                p.pan04_02_00_00.set_type("vertical");
                p.pan04_02_00_00.set_flexgrow("1");
                p.pan04_02_00_00.move("10.00","98","250","86",null,null);

                p.cmbCtrgType.set_taborder("21");
                p.cmbCtrgType.set_flexgrow("1");
                p.cmbCtrgType.set_innerdataset("dsCtrtType");
                p.cmbCtrgType.set_codecolumn("cdId");
                p.cmbCtrgType.set_datacolumn("cdNm");
                p.cmbCtrgType.set_text("선택");
                p.cmbCtrgType.set_value("");
                p.cmbCtrgType.set_index("0");
                p.cmbCtrgType.move("788.00","145","100%","40",null,null);

                p.edtCtrtNm.set_taborder("23");
                p.edtCtrtNm.set_readonly("false");
                p.edtCtrtNm.move("10.00","158","100%","40",null,null);

                p.edtItgrnCtrtNo.set_taborder("24");
                p.edtItgrnCtrtNo.set_readonly("false");
                p.edtItgrnCtrtNo.move("10.00","158","100%","40",null,null);

                p.staLabel05_00_00_00_00.set_taborder("25");
                p.staLabel05_00_00_00_00.set_text("식음대상여부");
                p.staLabel05_00_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel05_00_00_00_00.move("10","98","100%","46",null,null);

                p.rdoRfctTrgtYn.set_taborder("26");
                p.rdoRfctTrgtYn.set_fittocontents("width");
                p.rdoRfctTrgtYn.set_direction("vertical");
                p.rdoRfctTrgtYn.set_innerdataset(divForm_form_Div00_form_rdoRfctTrgtYn_innerdataset);
                p.rdoRfctTrgtYn.set_codecolumn("codecolumn");
                p.rdoRfctTrgtYn.set_datacolumn("datacolumn");
                p.rdoRfctTrgtYn.set_value("0");
                p.rdoRfctTrgtYn.set_index("0");
                p.rdoRfctTrgtYn.move("51","580","100%","40",null,null);

                p.pan04_01_00_00_00.set_taborder("27");
                p.pan04_01_00_00_00.set_type("vertical");
                p.pan04_01_00_00_00.set_flexgrow("1");
                p.pan04_01_00_00_00.move("10.00","98","250","86",null,null);

                p.calCtrtYmd.set_taborder("28");
                p.calCtrtYmd.set_dateformat("yyyy-MM-dd");
                p.calCtrtYmd.move("0","0","150","40",null,null);

                p.calCtrtBgngYmd.set_taborder("29");
                p.calCtrtBgngYmd.set_dateformat("yyyy-MM-dd");
                p.calCtrtBgngYmd.move("0","0","150","40",null,null);

                p.calCtrtEndYmd.set_taborder("30");
                p.calCtrtEndYmd.set_dateformat("yyyy-MM-dd");
                p.calCtrtEndYmd.move("0","0","150","40",null,null);

                p.staLabel00_01_00.set_taborder("31");
                p.staLabel00_01_00.set_text("식음종료일");
                p.staLabel00_01_00.set_cssclass("sta_WF_Label");
                p.staLabel00_01_00.move("437","119","100%","46",null,null);

                p.calRfctTrgtCtrtEndYmd.set_taborder("32");
                p.calRfctTrgtCtrtEndYmd.set_dateformat("yyyy-MM-dd");
                p.calRfctTrgtCtrtEndYmd.move("437","165","150","40",null,null);

                p.pan00_02_00.set_taborder("33");
                p.pan00_02_00.set_type("vertical");
                p.pan00_02_00.set_flexgrow("1");
                p.pan00_02_00.set_minwidth("");
                p.pan00_02_00.move("437.00","119","250","86",null,null);

                p.staLabel00_01_00_00.set_taborder("34");
                p.staLabel00_01_00_00.set_text("면세종료일");
                p.staLabel00_01_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_01_00_00.move("880","214","100%","46",null,null);

                p.calTaxfrTrgtCtrtEndYmd.set_taborder("35");
                p.calTaxfrTrgtCtrtEndYmd.set_dateformat("yyyy-MM-dd");
                p.calTaxfrTrgtCtrtEndYmd.move("880","260","150","40",null,null);

                p.pan00_02_00_00.set_taborder("36");
                p.pan00_02_00_00.set_type("vertical");
                p.pan00_02_00_00.set_flexgrow("1");
                p.pan00_02_00_00.set_minwidth("");
                p.pan00_02_00_00.move("880.00","214","250","86",null,null);

                p.pan00_02_00_00_00.set_taborder("37");
                p.pan00_02_00_00_00.set_type("vertical");
                p.pan00_02_00_00_00.set_flexgrow("1");
                p.pan00_02_00_00_00.set_minwidth("");
                p.pan00_02_00_00_00.move("870.00","305","250","0",null,null);

                p.pan00_01_00_00.set_taborder("19");
                p.pan00_01_00_00.set_type("vertical");
                p.pan00_01_00_00.set_flexgrow("1");
                p.pan00_01_00_00.set_minwidth("");
                p.pan00_01_00_00.move("10.00","98","250","86",null,null);
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
                p.Div00.move("231","10","100%","390",null,null);
            	}
            );
            obj.set_verticalgap("20");
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
            obj.set_verticalgap("20");
            obj.set_type("horizontal");
            obj.set_flexmainaxisalign("center");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 20px 10px 20px");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divPopBtn.form
            obj = new Layout("default","",0,0,this.divPopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnSave.set_taborder("1");
                p.btnSave.set_text("저장");
                p.btnSave.set_cssclass("btn_WF_Yes");
                p.btnSave.set_fittocontents("width");
                p.btnSave.move("457.00","30","68","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("10");
            this.divPopBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divPopBtn.form
            obj = new Layout("Layout0","",0,0,this.divPopBtn.form,
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
            obj = new Layout("default","Desktop_screen",1000,480,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("계약 등록/수정");

                p.divForm.set_taborder("1");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_fittocontents("none");
                p.divForm.set_formscrollbartype("default default");
                p.divForm.set_formscrolltype("both");
                p.divForm.move("0","0",null,null,"0","70");

                p.divPopBtn.set_taborder("1");
                p.divPopBtn.set_text("Div00");
                p.divPopBtn.set_cssclass("div_WF_PopBtn");
                p.divPopBtn.move("0",null,null,"60","0","0");
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Phone_screen",480,480,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.Div00.form.cmbCtrgType","value","dsGet","ctrtType");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.Div00.form.calCtrtYmd","value","dsGet","ctrtYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.Div00.form.edtCtrtNo","value","dsGet","ctrtNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.Div00.form.edtCtrtNm","value","dsGet","ctrtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.Div00.form.edtItgrnCtrtNo","value","dsGet","itgrnCtrtNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.Div00.form.calCtrtBgngYmd","value","dsGet","ctrtBgngYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.Div00.form.calCtrtEndYmd","value","dsGet","ctrtEndYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divForm.form.Div00.form.calRfctTrgtCtrtEndYmd","value","dsGet","rfctTrgtCtrtEndDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divForm.form.Div00.form.calTaxfrTrgtCtrtEndYmd","value","dsGet","taxfrTrgtCtrtEndDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divForm.form.Div00.form.rdoRfctTrgtYn","value","dsGet","rfctTrgtYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divForm.form.Div00.form.rdoTaxfrTrgtYn","value","dsGet","taxfrTrgtYn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("COM023P04.xfdl", function() {
        /**
        *  PcMdi 프로젝트
        *  @FileName 	COM023P04.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2023/10/30
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2023/10/30			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        this.ctrtNo;

        this.validateColumn = [];

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수
        	this.fnInit();

        	this.validateColumn.push({"title" : "계약명", "com": this.divForm.form.Div00.form.edtCtrtNm});
        	this.validateColumn.push({"title" : "계약유형", "com": this.divForm.form.Div00.form.cmbCtrgType});
        	this.validateColumn.push({"title" : "계약일", "com": this.divForm.form.Div00.form.calCtrtYmd});
        	this.validateColumn.push({"title" : "계약시작일", "com": this.divForm.form.Div00.form.calCtrtBgngYmd});
        	this.validateColumn.push({"title" : "계약종료일", "com": this.divForm.form.Div00.form.calCtrtEndYmd});

        	if(this.opener) {
        		this.ctrtNo = this.getOwnerFrame().ctrtNo;
        	} else {
        		if(!this.gfnIsNull(this.gfnGetArgument("PARM")) != true) {
        			this.param = this.gfnGetArgument("PARM");
        			if(this.gfnIsNull(this.param.ctrtNo) != true) {
        				this.ctrtNo = this.param.ctrtNo;
        			}
        		}
        	}

        	if(this.gfnIsNull(this.ctrtNo)) {
        		this.dsGet.addRow();
        		this.dsGet.setColumn(0, "ctrtSe", "I");
        		this.dsGet.setColumn(0, "mnlMngSeMnl", "N");
        		this.dsGet.setColumn(0, "rfctTrgtYn", "N");
        		this.dsGet.setColumn(0, "taxfrTrgtYn", "N");
        	} else {
        		this.cfnSearch();
        	}
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	this.getSearchTransaction();
        };

        //저장
        this.cfnSave = function ()
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

        this.cfnClose = function()
        {
        	this.close();
        // 	console.log('cfnClose');
        // 	//부모창 검색 조회
        //  	var sWinId = this.objApp.gdsOpenMenu.lookupAs(this.FRAME_MENUCOLUMNS.menuId, this.getOwnerFrame().form.fvMenuId.substring(0, 8), this.FRAME_MENUCOLUMNS.winId);
        //  	var objForm = this.objApp.gvFrsWork.all[sWinId];
        // 	objForm.form.divWork.form.cfnSearch(1);
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.getSearchTransaction = function()
        {
        	var strSvcId    = "search";
        	var strSvcUrl   = "crtr/ctrtInfoInq.do";
        	var inData      = "";
        	var outData     = "dsGet=dsGet";
        	var strArg      = "id=" + this.ctrtNo;
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
        	var strSvcUrl   = "crtr/ctrtInfoStrg.do";
        	var inData      = "dsGet=dsGet:U";
        	var outData     = "";
        	var strArg      = "";
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
        			break;
        		case "save" :
        			this.gfnAlertMsg("saveAfter", "MSG_001", "", "msgCallback");
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
        	if(sPopupId == "save") {
        		if(oRtn.result == "Y") {
        			this.saveTransaction();
        		}
        	}
        	else if(sPopupId == "saveAfter") {
        		var arr = {"saveFlag" : "Y"};
        		this.close(JSON.stringify(arr));
        // 		var cMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        // 		this.gfnCloseMenu(cMenuId);
        // 		this._gfnOpenMenu(cMenuId.substring(0,14),"",true);
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	this.gfnCmmCode("ctrtType", "dsCtrtType", "CONTYPE", "S");
        	this.divForm.form.Div00.form.cmbCtrgType.index = 0;
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divForm_divPopBtn_btnSave_onclick = function(obj,e)
        {
        	if(this.gfnDsIsUpdated(this.dsGet) != true) {
        		this.gfnAlertMsg("msg", "MSG_004");
        	} else {
        		if(this.gfnDsIsValidated(this.validateColumn)) {
        			this.gfnConfirmMsg("save", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        		}
        	}
        };

        this.divForm_Div00_cmbCtrgType_onitemchanged = function(obj,e)
        {
        	this.dsGet.setColumn(0, "ctrtTypeNm", e.posttext);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.Div00.form.cmbCtrgType.addEventHandler("onitemchanged",this.divForm_Div00_cmbCtrgType_onitemchanged,this);
            this.divPopBtn.form.btnSave.addEventHandler("onclick",this.divForm_divPopBtn_btnSave_onclick,this);
        };
        this.loadIncludeScript("COM023P04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
