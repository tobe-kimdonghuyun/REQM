(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("REN003M04");
            this.set_titletext("배정후보공간안내 상세");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,1350);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"polSpceId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGet", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"hireLohNo\" type=\"STRING\" size=\"256\"/><Column id=\"rcptNo\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyNm\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyClsfCd\" type=\"STRING\" size=\"256\"/><Column id=\"picDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"picNm\" type=\"STRING\" size=\"256\"/><Column id=\"picJbpsNm\" type=\"STRING\" size=\"256\"/><Column id=\"picTelno\" type=\"STRING\" size=\"256\"/><Column id=\"picMblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"picEmlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"rentRsnPrps\" type=\"STRING\" size=\"256\"/><Column id=\"pstnCd\" type=\"STRING\" size=\"256\"/><Column id=\"bldgCd\" type=\"STRING\" size=\"256\"/><Column id=\"bldgNofl\" type=\"STRING\" size=\"256\"/><Column id=\"zoneCd\" type=\"STRING\" size=\"256\"/><Column id=\"rntar\" type=\"STRING\" size=\"256\"/><Column id=\"usgCd\" type=\"STRING\" size=\"256\"/><Column id=\"dtlUsgCd\" type=\"STRING\" size=\"256\"/><Column id=\"mvnHpeYmd\" type=\"STRING\" size=\"256\"/><Column id=\"etcDmndMttr\" type=\"STRING\" size=\"256\"/><Column id=\"polSpceId\" type=\"STRING\" size=\"256\"/><Column id=\"bldgCd2\" type=\"STRING\" size=\"256\"/><Column id=\"rmnmNo\" type=\"STRING\" size=\"256\"/><Column id=\"rntar2\" type=\"STRING\" size=\"256\"/><Column id=\"vccYn\" type=\"STRING\" size=\"256\"/><Column id=\"prgrsSttsCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboBzentyClsfCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboPstnCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboBldgCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboUsgCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboDtlUsgCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboPstnCd2", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboPrgrsSttsCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divForm","0","divTitle:0",null,"1300","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_fittocontents("height");
            obj.set_cssclass("div_WF_QuickFrBg");
            this.addChild(obj.name, obj);

            obj = new Panel("sub_tit00","1630","674","100%","70",null,null,null,null,"70",null,this.divForm.form);
            obj.set_taborder("7");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div00","0","0","100%","288",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","0","100.00%","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_01\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel00_02\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","10","0","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("업체명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtHirerNm","10.00","0","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","20.00","0","305","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtHirerNm\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel01_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("4");
            obj.set_text("담당자 성명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edtPicNm\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("6");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel01_02\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","417","62","305","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("15");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"cboBzentyClsfCd\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Combo("cboBzentyClsfCd","516","113","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("26");
            obj.set_readonly("true");
            obj.set_innerdataset("dsCboBzentyClsfCd");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel01_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("7");
            obj.set_text("담당자 직위(직급)");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel01_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"edtPicJbpsNm\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtPicJbpsNm","704","180","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("20");
            obj.set_readonly("true");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel01_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("9");
            obj.set_text("담당자 전화");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel01_02","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("10");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02\"/><PanelItem id=\"PanelItem03\" componentid=\"edtPicTelno\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("11");
            obj.set_text("담당자 휴대폰");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel03_00","10.00","98","360","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("12");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edtPicMblTelno\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel03","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("13");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel03_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel03_01\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtPicMblTelno","720","294","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("22");
            obj.set_readonly("true");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtPicTelno","295","288","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("21");
            obj.set_readonly("true");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtPicNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("14");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("16");
            obj.set_text("업체분류");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("17");
            obj.set_text("접수번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtRcptNo","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("18");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_02","417","62","305","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("19");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"edtRcptNo\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("23");
            obj.set_text("담당자 이메일");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtPicEmlAddr","720","294","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("24");
            obj.set_readonly("true");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel03_01","10.00","98","360","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("25");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01\"/><PanelItem id=\"PanelItem02\" componentid=\"edtPicEmlAddr\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("sub_tit01","0","0","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("10");
            obj.set_background("#ffffff");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel","1458","332","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("9");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 20px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle01","950","332","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("8");
            obj.set_text("임차문의 - 임차관련 정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div01","0","Div00:30","100.00%","410",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel04","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_type("horizontal");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel04_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel04_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("1");
            obj.set_text("임대사유/목적");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel04_00","10.00","98","360","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel04_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edtRentRsnPrps\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtRentRsnPrps","40","105","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel05","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("3");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel05_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel05_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel05_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("4");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel05_00","10.00","98","360","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_00\"/><PanelItem id=\"PanelItem02\" componentid=\"cboPstnCd\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cboPstnCd","49","198","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("25");
            obj.set_readonly("true");
            obj.set_innerdataset("dsCboPstnCd");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel05_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("6");
            obj.set_text("건물명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel05_01","10.00","98","360","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("7");
            obj.set_type("vertical");
            obj.set_flexgrow("2");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_01\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel05_01_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel05_01_00","1071","192","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("9");
            obj.set_horizontalgap("16");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"cboBldgCd\"/><PanelItem id=\"PanelItem00\" componentid=\"rdoZoneCd\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","0","0","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("10");
            obj.set_text("층");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtBldgNofl","0","56","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan00_00","30.00","10","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("12");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtBldgNofl\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel00_01","0","0","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("13");
            obj.set_text("면적 (m2)");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtRentAr","20.00","66","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("14");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan00_01","660.00","10","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("15");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtRentAr\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel00_02","0.00","0","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("16");
            obj.set_text("입주희망일자");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan00_02","20.00","86","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("17");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02\"/><PanelItem id=\"PanelItem02\" componentid=\"edtMvnHpeYmd\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan00","85","401","100.00%","100",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("18");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan00_01\"/><PanelItem id=\"PanelItem03\" componentid=\"pan00_02\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_00","10.00","10","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("19");
            obj.set_text("용도");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","20.00","338","360","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("20");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"cboUsgCd\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_01","0","10","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("21");
            obj.set_text("상세용도");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_01","30.00","10","360","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("22");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"cboDtlUsgCd\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01","384","516","100%","120",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("23");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("20");
            obj.set_type("horizontal");
            obj.set_verticalgap("0");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel01_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtMvnHpeYmd","20.00","66","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("24");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cboBldgCd","49","198","80%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("26");
            obj.set_readonly("true");
            obj.set_innerdataset("dsCboBldgCd");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cboUsgCd","49","198","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("27");
            obj.set_readonly("true");
            obj.set_innerdataset("dsCboUsgCd");
            obj.set_codecolumn("grp2CdId");
            obj.set_datacolumn("grp2CdNm");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cboDtlUsgCd","49","198","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("28");
            obj.set_readonly("true");
            obj.set_innerdataset("dsCboDtlUsgCd");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Radio("rdoZoneCd","0.00","46","280","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("29");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_readonly("true");
            var divForm_form_Div01_form_rdoZoneCd_innerdataset = new nexacro.NormalDataset("divForm_form_Div01_form_rdoZoneCd_innerdataset", obj);
            divForm_form_Div01_form_rdoZoneCd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">A/S</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">L/S</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div01_form_rdoZoneCd_innerdataset);
            obj.set_text("계약선택");
            obj.set_value("0");
            obj.set_index("0");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("sub_tit02","-84","397","100.00%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("13");
            obj.set_background("#ffffff");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","424","397","50.00%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("12");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 20px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_00_01\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle02","-84","397","50.00%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("11");
            obj.set_text("기타 요청사항");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00_00_01","1703","620","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div02","0","Div01:30","100.00%","130",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new TextArea("textAreaEtcDmndMttr","20.00","60","100%","100.00%",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_value("기타요청사항");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel02_01","10.00","98","100%","105",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("1");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"textAreaEtcDmndMttr\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan02","0","60","100.00%","110",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("2");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("14px 20px 14px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("0");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00","1703","620","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit03","0","0","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("17");
            obj.set_background("#ffffff");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle03\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel03_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel03_00","415","1030","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("16");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 20px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_00_01_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle03","-275","1030","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("15");
            obj.set_text("추천 후보공간 정보 ");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div03","-26","1580","100.00%","242",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel06_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("0");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel06_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("1");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel06_00\"/><PanelItem id=\"PanelItem02\" componentid=\"cboPstnCd2\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel06","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("2");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel06_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel06_01\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel06_02\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel06_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("3");
            obj.set_text("건물명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel06_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel06_01\"/><PanelItem id=\"PanelItem02\" componentid=\"cboBldgCd2\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel07","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("5");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel07_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel07_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel07_02\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel07_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("6");
            obj.set_text("면적 (m2)");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edtRentAr2","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel07_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel07_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtRentAr2\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel07_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("9");
            obj.set_text("공실여부");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel07_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("10");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel07_01\"/><PanelItem id=\"PanelItem02\" componentid=\"cboVccYn\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Combo("cboPstnCd2","49","198","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_innerdataset("dsCboPstnCd2");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Combo("cboBldgCd2","49","198","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("12");
            obj.set_readonly("true");
            obj.set_innerdataset("dsCboBldgCd");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Combo("cboVccYn","49","198","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("13");
            obj.set_readonly("true");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_Div03_form_cboVccYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div03_form_cboVccYn_innerdataset", obj);
            divForm_form_Div03_form_cboVccYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">공실</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">임대중</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div03_form_cboVccYn_innerdataset);
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel06_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("14");
            obj.set_text("호실번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edtRmnmNo","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("15");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel06_02","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("16");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel06_02\"/><PanelItem id=\"PanelItem01\" componentid=\"edtRmnmNo\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel07_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("17");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Combo("cboPrgrsSttsCd","49","198","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("18");
            obj.set_readonly("true");
            obj.set_innerdataset("dsCboPrgrsSttsCd");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel07_02","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("19");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel07_02\"/><PanelItem id=\"PanelItem02\" componentid=\"cboPrgrsSttsCd\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staSubTitle00","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("4");
            obj.set_text("임차문의 - 기본정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00_00","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel00","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("6");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 20px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divQuick",null,"70","296","210","62",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_QuickMenu");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","17","20","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("0");
            obj.set_text("기본정보");
            obj.set_cssclass("btn_WF_Quick_S");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn01","17.00","110","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("1");
            obj.set_text("임차관련 정보");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn02","17.00","110","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("2");
            obj.set_text("기타요청사항");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn03","17.00","110","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("3");
            obj.set_text("추천 후보공간 정보");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Div("divBtn",null,"divQuick:0","296","131","62",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_QuickBtnBg");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel","200.00","365","100","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("2");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_No");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("btnCnddReg","200.00","365","100","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("0");
            obj.set_text("후보등록");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_visible("false");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("btnPstn","457.00","30","100","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("1");
            obj.set_text("위치조회");
            obj.set_cssclass("btn_WF_Yes");
            this.divBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTitle.form
            obj = new Layout("default","",0,0,this.divTitle.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divTitle.form
            obj = new Layout("mobile","",0,0,this.divTitle.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divTitle.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div00.form
            obj = new Layout("default","",0,0,this.divForm.form.Div00.form,
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
                p.Panel00.move("0","0","100.00%","86",null,null);

                p.staLabel00_00.set_taborder("1");
                p.staLabel00_00.set_text("업체명");
                p.staLabel00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00.move("10","0","100%","46",null,null);

                p.edtHirerNm.set_taborder("2");
                p.edtHirerNm.set_readonly("true");
                p.edtHirerNm.move("10.00","0","100%","40",null,null);

                p.Panel00_00.set_taborder("3");
                p.Panel00_00.set_type("vertical");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.move("20.00","0","305","86",null,null);

                p.staLabel01_00.set_taborder("4");
                p.staLabel01_00.set_text("담당자 성명");
                p.staLabel01_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00.move("10","98","100%","46",null,null);

                p.Panel01_00.set_taborder("5");
                p.Panel01_00.set_type("vertical");
                p.Panel01_00.set_flexgrow("1");
                p.Panel01_00.move("10.00","98","305","86",null,null);

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

                p.Panel00_01.set_taborder("15");
                p.Panel00_01.set_type("vertical");
                p.Panel00_01.set_flexgrow("1");
                p.Panel00_01.move("417","62","305","86",null,null);

                p.cboBzentyClsfCd.set_taborder("26");
                p.cboBzentyClsfCd.set_readonly("true");
                p.cboBzentyClsfCd.set_innerdataset("dsCboBzentyClsfCd");
                p.cboBzentyClsfCd.set_codecolumn("cdId");
                p.cboBzentyClsfCd.set_datacolumn("cdNm");
                p.cboBzentyClsfCd.set_value("");
                p.cboBzentyClsfCd.set_index("-1");
                p.cboBzentyClsfCd.move("516","113","100%","40",null,null);

                p.staLabel01_01.set_taborder("7");
                p.staLabel01_01.set_text("담당자 직위(직급)");
                p.staLabel01_01.set_cssclass("sta_WF_Label");
                p.staLabel01_01.move("10","98","100%","46",null,null);

                p.Panel01_01.set_taborder("8");
                p.Panel01_01.set_type("vertical");
                p.Panel01_01.set_flexgrow("1");
                p.Panel01_01.move("10.00","98","305","86",null,null);

                p.edtPicJbpsNm.set_taborder("20");
                p.edtPicJbpsNm.set_readonly("true");
                p.edtPicJbpsNm.move("704","180","100%","40",null,null);

                p.staLabel01_02.set_taborder("9");
                p.staLabel01_02.set_text("담당자 전화");
                p.staLabel01_02.set_cssclass("sta_WF_Label");
                p.staLabel01_02.move("10","98","100%","46",null,null);

                p.Panel01_02.set_taborder("10");
                p.Panel01_02.set_type("vertical");
                p.Panel01_02.set_flexgrow("1");
                p.Panel01_02.move("10.00","98","305","86",null,null);

                p.staLabel03_00.set_taborder("11");
                p.staLabel03_00.set_text("담당자 휴대폰");
                p.staLabel03_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00.move("10","98","100%","46",null,null);

                p.Panel03_00.set_taborder("12");
                p.Panel03_00.set_type("vertical");
                p.Panel03_00.set_flexgrow("1");
                p.Panel03_00.move("10.00","98","360","86",null,null);

                p.Panel03.set_taborder("13");
                p.Panel03.set_horizontalgap("20");
                p.Panel03.set_flexcrossaxiswrapalign("start");
                p.Panel03.set_flexwrap("wrap");
                p.Panel03.set_verticalgap("0");
                p.Panel03.set_spacing("0px 20px 10px 20px");
                p.Panel03.set_cssclass("pal_WF_DtlBg");
                p.Panel03.set_flexshrink("1");
                p.Panel03.set_fittocontents("height");
                p.Panel03.move("0","60","100.00%","96",null,null);

                p.edtPicMblTelno.set_taborder("22");
                p.edtPicMblTelno.set_readonly("true");
                p.edtPicMblTelno.move("720","294","100%","40",null,null);

                p.edtPicTelno.set_taborder("21");
                p.edtPicTelno.set_readonly("true");
                p.edtPicTelno.move("295","288","100%","40",null,null);

                p.edtPicNm.set_taborder("14");
                p.edtPicNm.set_readonly("true");
                p.edtPicNm.move("10.00","158","100%","40",null,null);

                p.staLabel00_01.set_taborder("16");
                p.staLabel00_01.set_text("업체분류");
                p.staLabel00_01.set_cssclass("sta_WF_Label");
                p.staLabel00_01.move("10","98","100%","46",null,null);

                p.staLabel00_02.set_taborder("17");
                p.staLabel00_02.set_text("접수번호");
                p.staLabel00_02.set_cssclass("sta_WF_Label");
                p.staLabel00_02.move("10","98","100%","46",null,null);

                p.edtRcptNo.set_taborder("18");
                p.edtRcptNo.set_readonly("true");
                p.edtRcptNo.move("10.00","158","100%","40",null,null);

                p.Panel00_02.set_taborder("19");
                p.Panel00_02.set_type("vertical");
                p.Panel00_02.set_flexgrow("1");
                p.Panel00_02.move("417","62","305","86",null,null);

                p.staLabel03_01.set_taborder("23");
                p.staLabel03_01.set_text("담당자 이메일");
                p.staLabel03_01.set_cssclass("sta_WF_Label");
                p.staLabel03_01.set_flexgrow("1");
                p.staLabel03_01.move("10","98","100%","46",null,null);

                p.edtPicEmlAddr.set_taborder("24");
                p.edtPicEmlAddr.set_readonly("true");
                p.edtPicEmlAddr.move("720","294","100%","40",null,null);

                p.Panel03_01.set_taborder("25");
                p.Panel03_01.set_type("vertical");
                p.Panel03_01.set_flexgrow("1");
                p.Panel03_01.move("10.00","98","360","86",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div00.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div00.form,
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
            //-- Default Layout : this.divForm.form.Div01.form
            obj = new Layout("default","",0,0,this.divForm.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel04.set_taborder("0");
                p.Panel04.set_horizontalgap("20");
                p.Panel04.set_flexcrossaxiswrapalign("start");
                p.Panel04.set_flexwrap("wrap");
                p.Panel04.set_fittocontents("height");
                p.Panel04.set_verticalgap("0");
                p.Panel04.set_spacing("0px 20px 10px 20px");
                p.Panel04.set_type("horizontal");
                p.Panel04.set_cssclass("pal_WF_DtlBg");
                p.Panel04.move("0","60","100.00%","96",null,null);

                p.staLabel04_00.set_taborder("1");
                p.staLabel04_00.set_text("임대사유/목적");
                p.staLabel04_00.set_cssclass("sta_WF_Label");
                p.staLabel04_00.move("10","98","100%","46",null,null);

                p.Panel04_00.set_taborder("2");
                p.Panel04_00.set_type("vertical");
                p.Panel04_00.set_flexgrow("1");
                p.Panel04_00.set_minwidth("");
                p.Panel04_00.move("10.00","98","360","86",null,null);

                p.edtRentRsnPrps.set_taborder("8");
                p.edtRentRsnPrps.set_readonly("true");
                p.edtRentRsnPrps.move("40","105","100%","40",null,null);

                p.Panel05.set_taborder("3");
                p.Panel05.set_horizontalgap("20");
                p.Panel05.set_flexcrossaxiswrapalign("start");
                p.Panel05.set_flexwrap("wrap");
                p.Panel05.set_fittocontents("height");
                p.Panel05.set_verticalgap("0");
                p.Panel05.set_spacing("0px 20px 10px 20px");
                p.Panel05.set_cssclass("pal_WF_DtlBg");
                p.Panel05.move("0","60","100.00%","96",null,null);

                p.staLabel05_00.set_taborder("4");
                p.staLabel05_00.set_text("구분");
                p.staLabel05_00.set_cssclass("sta_WF_Label");
                p.staLabel05_00.move("10","98","100%","46",null,null);

                p.Panel05_00.set_taborder("5");
                p.Panel05_00.set_type("vertical");
                p.Panel05_00.set_flexgrow("1");
                p.Panel05_00.set_minwidth("");
                p.Panel05_00.move("10.00","98","360","86",null,null);

                p.cboPstnCd.set_taborder("25");
                p.cboPstnCd.set_readonly("true");
                p.cboPstnCd.set_innerdataset("dsCboPstnCd");
                p.cboPstnCd.set_codecolumn("cdId");
                p.cboPstnCd.set_datacolumn("cdNm");
                p.cboPstnCd.set_value("");
                p.cboPstnCd.set_index("-1");
                p.cboPstnCd.move("49","198","100%","40",null,null);

                p.staLabel05_01.set_taborder("6");
                p.staLabel05_01.set_text("건물명");
                p.staLabel05_01.set_cssclass("sta_WF_Label");
                p.staLabel05_01.move("10","98","100%","46",null,null);

                p.Panel05_01.set_taborder("7");
                p.Panel05_01.set_type("vertical");
                p.Panel05_01.set_flexgrow("2");
                p.Panel05_01.set_minwidth("");
                p.Panel05_01.move("10.00","98","360","86",null,null);

                p.Panel05_01_00.set_taborder("9");
                p.Panel05_01_00.set_horizontalgap("16");
                p.Panel05_01_00.move("1071","192","100%","40",null,null);

                p.staLabel00_00.set_taborder("10");
                p.staLabel00_00.set_text("층");
                p.staLabel00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00.move("0","0","100%","46",null,null);

                p.edtBldgNofl.set_taborder("11");
                p.edtBldgNofl.set_readonly("true");
                p.edtBldgNofl.move("0","56","100%","40",null,null);

                p.pan00_00.set_taborder("12");
                p.pan00_00.set_type("vertical");
                p.pan00_00.set_flexgrow("1");
                p.pan00_00.move("30.00","10","300","86",null,null);

                p.staLabel00_01.set_taborder("13");
                p.staLabel00_01.set_text("면적 (m2)");
                p.staLabel00_01.set_cssclass("sta_WF_Label");
                p.staLabel00_01.move("0","0","100%","46",null,null);

                p.edtRentAr.set_taborder("14");
                p.edtRentAr.set_readonly("true");
                p.edtRentAr.move("20.00","66","100%","40",null,null);

                p.pan00_01.set_taborder("15");
                p.pan00_01.set_type("vertical");
                p.pan00_01.set_flexgrow("1");
                p.pan00_01.move("660.00","10","300","86",null,null);

                p.staLabel00_02.set_taborder("16");
                p.staLabel00_02.set_text("입주희망일자");
                p.staLabel00_02.set_cssclass("sta_WF_Label");
                p.staLabel00_02.move("0.00","0","100%","46",null,null);

                p.pan00_02.set_taborder("17");
                p.pan00_02.set_type("vertical");
                p.pan00_02.set_flexgrow("1");
                p.pan00_02.move("20.00","86","300","86",null,null);

                p.pan00.set_taborder("18");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("0px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.move("85","401","100.00%","100",null,null);

                p.staLabel01_00.set_taborder("19");
                p.staLabel01_00.set_text("용도");
                p.staLabel01_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00.move("10.00","10","100%","46",null,null);

                p.Panel01_00.set_taborder("20");
                p.Panel01_00.set_type("vertical");
                p.Panel01_00.set_flexgrow("1");
                p.Panel01_00.move("20.00","338","360","86",null,null);

                p.staLabel01_01.set_taborder("21");
                p.staLabel01_01.set_text("상세용도");
                p.staLabel01_01.set_cssclass("sta_WF_Label");
                p.staLabel01_01.move("0","10","100%","46",null,null);

                p.Panel01_01.set_taborder("22");
                p.Panel01_01.set_type("vertical");
                p.Panel01_01.set_flexgrow("1");
                p.Panel01_01.move("30.00","10","360","86",null,null);

                p.pan01.set_taborder("23");
                p.pan01.set_cssclass("pal_WF_DtlBg");
                p.pan01.set_spacing("0px 20px 10px 20px");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_horizontalgap("20");
                p.pan01.set_type("horizontal");
                p.pan01.set_verticalgap("0");
                p.pan01.set_fittocontents("height");
                p.pan01.move("384","516","100%","120",null,null);

                p.edtMvnHpeYmd.set_taborder("24");
                p.edtMvnHpeYmd.set_readonly("true");
                p.edtMvnHpeYmd.move("20.00","66","100%","40",null,null);

                p.cboBldgCd.set_taborder("26");
                p.cboBldgCd.set_readonly("true");
                p.cboBldgCd.set_innerdataset("dsCboBldgCd");
                p.cboBldgCd.set_codecolumn("cdId");
                p.cboBldgCd.set_datacolumn("cdNm");
                p.cboBldgCd.set_value("");
                p.cboBldgCd.set_index("-1");
                p.cboBldgCd.move("49","198","80%","40",null,null);

                p.cboUsgCd.set_taborder("27");
                p.cboUsgCd.set_readonly("true");
                p.cboUsgCd.set_innerdataset("dsCboUsgCd");
                p.cboUsgCd.set_codecolumn("grp2CdId");
                p.cboUsgCd.set_datacolumn("grp2CdNm");
                p.cboUsgCd.set_value("");
                p.cboUsgCd.set_index("-1");
                p.cboUsgCd.move("49","198","100%","40",null,null);

                p.cboDtlUsgCd.set_taborder("28");
                p.cboDtlUsgCd.set_readonly("true");
                p.cboDtlUsgCd.set_innerdataset("dsCboDtlUsgCd");
                p.cboDtlUsgCd.set_codecolumn("cdId");
                p.cboDtlUsgCd.set_datacolumn("cdNm");
                p.cboDtlUsgCd.set_value("");
                p.cboDtlUsgCd.set_index("-1");
                p.cboDtlUsgCd.move("49","198","100%","40",null,null);

                p.rdoZoneCd.set_taborder("29");
                p.rdoZoneCd.set_fittocontents("width");
                p.rdoZoneCd.set_innerdataset(divForm_form_Div01_form_rdoZoneCd_innerdataset);
                p.rdoZoneCd.set_codecolumn("codecolumn");
                p.rdoZoneCd.set_datacolumn("datacolumn");
                p.rdoZoneCd.set_direction("vertical");
                p.rdoZoneCd.set_readonly("true");
                p.rdoZoneCd.set_value("0");
                p.rdoZoneCd.set_index("0");
                p.rdoZoneCd.move("0.00","46","280","40",null,null);
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
                p.Panel04.set_spacing("0px 10px 10px 10px");
                p.Panel04.set_type("horizontal");
                p.Panel04.move("0","60","100.00%","126",null,null);

                p.Panel05.set_spacing("0px 10px 10px 10px");
                p.Panel05.set_type("horizontal");
                p.Panel05.move("0","60","100.00%","336",null,null);
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
                p.textAreaEtcDmndMttr.set_taborder("0");
                p.textAreaEtcDmndMttr.set_readonly("true");
                p.textAreaEtcDmndMttr.set_value("기타요청사항");
                p.textAreaEtcDmndMttr.move("20.00","60","100%","100.00%",null,null);

                p.Panel02_01.set_taborder("1");
                p.Panel02_01.set_type("vertical");
                p.Panel02_01.set_minwidth("");
                p.Panel02_01.move("10.00","98","100%","105",null,null);

                p.pan02.set_taborder("2");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("14px 20px 14px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.set_flexgrow("1");
                p.pan02.set_horizontalgap("0");
                p.pan02.set_flexwrap("wrap");
                p.pan02.move("0","60","100.00%","110",null,null);
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
            //-- Default Layout : this.divForm.form.Div03.form
            obj = new Layout("default","",0,0,this.divForm.form.Div03.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel06_00.set_taborder("0");
                p.staLabel06_00.set_text("구분");
                p.staLabel06_00.set_cssclass("sta_WF_Label");
                p.staLabel06_00.move("10","98","100%","46",null,null);

                p.Panel06_00.set_taborder("1");
                p.Panel06_00.set_type("vertical");
                p.Panel06_00.set_flexgrow("1");
                p.Panel06_00.set_minwidth("");
                p.Panel06_00.move("10.00","98","305","86",null,null);

                p.Panel06.set_taborder("2");
                p.Panel06.set_horizontalgap("20");
                p.Panel06.set_flexcrossaxiswrapalign("start");
                p.Panel06.set_flexwrap("wrap");
                p.Panel06.set_fittocontents("height");
                p.Panel06.set_verticalgap("0");
                p.Panel06.set_spacing("0px 20px 10px 20px");
                p.Panel06.set_cssclass("pal_WF_DtlBg");
                p.Panel06.set_type("horizontal");
                p.Panel06.move("0","60","100.00%","96",null,null);

                p.staLabel06_01.set_taborder("3");
                p.staLabel06_01.set_text("건물명");
                p.staLabel06_01.set_cssclass("sta_WF_Label");
                p.staLabel06_01.move("10","98","100%","46",null,null);

                p.Panel06_01.set_taborder("4");
                p.Panel06_01.set_type("vertical");
                p.Panel06_01.set_flexgrow("1");
                p.Panel06_01.set_minwidth("");
                p.Panel06_01.move("10.00","98","305","86",null,null);

                p.Panel07.set_taborder("5");
                p.Panel07.set_horizontalgap("20");
                p.Panel07.set_flexcrossaxiswrapalign("start");
                p.Panel07.set_flexwrap("wrap");
                p.Panel07.set_fittocontents("height");
                p.Panel07.set_verticalgap("0");
                p.Panel07.set_spacing("0px 20px 10px 20px");
                p.Panel07.set_cssclass("pal_WF_DtlBg");
                p.Panel07.set_type("horizontal");
                p.Panel07.move("0","60","100.00%","96",null,null);

                p.staLabel07_00.set_taborder("6");
                p.staLabel07_00.set_text("면적 (m2)");
                p.staLabel07_00.set_cssclass("sta_WF_Label");
                p.staLabel07_00.move("10","98","100%","46",null,null);

                p.edtRentAr2.set_taborder("7");
                p.edtRentAr2.set_readonly("true");
                p.edtRentAr2.move("10.00","158","100%","40",null,null);

                p.Panel07_00.set_taborder("8");
                p.Panel07_00.set_type("vertical");
                p.Panel07_00.set_flexgrow("1");
                p.Panel07_00.set_minwidth("");
                p.Panel07_00.move("10.00","98","305","86",null,null);

                p.staLabel07_01.set_taborder("9");
                p.staLabel07_01.set_text("공실여부");
                p.staLabel07_01.set_cssclass("sta_WF_Label");
                p.staLabel07_01.move("10","98","100%","46",null,null);

                p.Panel07_01.set_taborder("10");
                p.Panel07_01.set_type("vertical");
                p.Panel07_01.set_flexgrow("1");
                p.Panel07_01.set_minwidth("");
                p.Panel07_01.move("10.00","98","305","86",null,null);

                p.cboPstnCd2.set_taborder("11");
                p.cboPstnCd2.set_readonly("true");
                p.cboPstnCd2.set_innerdataset("dsCboPstnCd2");
                p.cboPstnCd2.set_codecolumn("cdId");
                p.cboPstnCd2.set_datacolumn("cdNm");
                p.cboPstnCd2.set_value("");
                p.cboPstnCd2.set_index("-1");
                p.cboPstnCd2.move("49","198","100%","40",null,null);

                p.cboBldgCd2.set_taborder("12");
                p.cboBldgCd2.set_readonly("true");
                p.cboBldgCd2.set_innerdataset("dsCboBldgCd");
                p.cboBldgCd2.set_codecolumn("cdId");
                p.cboBldgCd2.set_datacolumn("cdNm");
                p.cboBldgCd2.set_value("");
                p.cboBldgCd2.set_index("-1");
                p.cboBldgCd2.move("49","198","100%","40",null,null);

                p.cboVccYn.set_taborder("13");
                p.cboVccYn.set_readonly("true");
                p.cboVccYn.set_innerdataset(divForm_form_Div03_form_cboVccYn_innerdataset);
                p.cboVccYn.set_codecolumn("codecolumn");
                p.cboVccYn.set_datacolumn("datacolumn");
                p.cboVccYn.set_value("");
                p.cboVccYn.set_index("-1");
                p.cboVccYn.move("49","198","100%","40",null,null);

                p.staLabel06_02.set_taborder("14");
                p.staLabel06_02.set_text("호실번호");
                p.staLabel06_02.set_cssclass("sta_WF_Label");
                p.staLabel06_02.move("10","98","100%","46",null,null);

                p.edtRmnmNo.set_taborder("15");
                p.edtRmnmNo.set_readonly("true");
                p.edtRmnmNo.move("10.00","158","100%","40",null,null);

                p.Panel06_02.set_taborder("16");
                p.Panel06_02.set_type("vertical");
                p.Panel06_02.set_flexgrow("1");
                p.Panel06_02.set_minwidth("");
                p.Panel06_02.move("10.00","98","305","86",null,null);

                p.staLabel07_02.set_taborder("17");
                p.staLabel07_02.set_text("상태");
                p.staLabel07_02.set_cssclass("sta_WF_Label");
                p.staLabel07_02.move("10","98","100%","46",null,null);

                p.cboPrgrsSttsCd.set_taborder("18");
                p.cboPrgrsSttsCd.set_readonly("true");
                p.cboPrgrsSttsCd.set_innerdataset("dsCboPrgrsSttsCd");
                p.cboPrgrsSttsCd.set_codecolumn("cdId");
                p.cboPrgrsSttsCd.set_datacolumn("cdNm");
                p.cboPrgrsSttsCd.set_value("");
                p.cboPrgrsSttsCd.set_index("-1");
                p.cboPrgrsSttsCd.move("49","198","100%","40",null,null);

                p.Panel07_02.set_taborder("19");
                p.Panel07_02.set_type("vertical");
                p.Panel07_02.set_flexgrow("1");
                p.Panel07_02.set_minwidth("");
                p.Panel07_02.move("10.00","98","305","86",null,null);
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
                p.Panel06.set_flexgrow("1");

                p.Panel07_02.set_fittocontents("height");

                p.Panel07_01.set_fittocontents("height");

                p.Panel07_00.set_fittocontents("height");

                p.Panel07.set_flexgrow("1");
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
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.sub_tit00.set_taborder("7");
                p.sub_tit00.set_background("#ffffff");
                p.sub_tit00.set_flexcrossaxisalign("end");
                p.sub_tit00.set_minheight("70");
                p.sub_tit00.set_maxheight("");
                p.sub_tit00.move("1630","674","100%","70",null,null);

                p.Div00.set_taborder("0");
                p.Div00.set_text("Div00");
                p.Div00.set_cssclass("div_WF_Bg");
                p.Div00.set_fittocontents("height");
                p.Div00.move("0","0","100%","288",null,null);

                p.sub_tit01.set_taborder("10");
                p.sub_tit01.set_background("#ffffff");
                p.sub_tit01.move("0","0","100%","50",null,null);

                p.Panel.set_taborder("9");
                p.Panel.set_cssclass("pal_WF_TitBtnBg");
                p.Panel.set_spacing("0px 20px");
                p.Panel.set_horizontalgap("10");
                p.Panel.set_flexcrossaxisalign("center");
                p.Panel.set_flexmainaxisalign("end");
                p.Panel.move("1458","332","50%","50",null,null);

                p.staSubTitle01.set_taborder("8");
                p.staSubTitle01.set_text("임차문의 - 임차관련 정보");
                p.staSubTitle01.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle01.move("950","332","50%","50",null,null);

                p.Button00_00_00.set_taborder("14");
                p.Button00_00_00.set_cssclass("btn_WF_ACMinus");
                p.Button00_00_00.move("2890.00","692","34","34",null,null);

                p.Div01.set_taborder("1");
                p.Div01.set_text("Div00");
                p.Div01.set_cssclass("div_WF_Bg");
                p.Div01.set_fittocontents("height");
                p.Div01.move("0","Div00:30","100.00%","410",null,null);

                p.sub_tit02.set_taborder("13");
                p.sub_tit02.set_background("#ffffff");
                p.sub_tit02.move("-84","397","100.00%","50",null,null);

                p.Panel02_00.set_taborder("12");
                p.Panel02_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel02_00.set_spacing("0px 20px");
                p.Panel02_00.set_horizontalgap("10");
                p.Panel02_00.set_flexcrossaxisalign("center");
                p.Panel02_00.set_flexmainaxisalign("end");
                p.Panel02_00.move("424","397","50.00%","50",null,null);

                p.staSubTitle02.set_taborder("11");
                p.staSubTitle02.set_text("기타 요청사항");
                p.staSubTitle02.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02.move("-84","397","50.00%","50",null,null);

                p.Button00_00_01.set_taborder("18");
                p.Button00_00_01.set_cssclass("btn_WF_ACMinus");
                p.Button00_00_01.move("1703","620","34","34",null,null);

                p.Div02.set_taborder("2");
                p.Div02.set_text("Div00");
                p.Div02.set_cssclass("div_WF_Bg");
                p.Div02.set_fittocontents("height");
                p.Div02.move("0","Div01:30","100.00%","130",null,null);

                p.Button00_00_01_00.set_taborder("19");
                p.Button00_00_01_00.set_cssclass("btn_WF_ACMinus");
                p.Button00_00_01_00.move("1703","620","34","34",null,null);

                p.sub_tit03.set_taborder("17");
                p.sub_tit03.set_background("#ffffff");
                p.sub_tit03.move("0","0","100%","50",null,null);

                p.Panel03_00.set_taborder("16");
                p.Panel03_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel03_00.set_spacing("0px 20px");
                p.Panel03_00.set_horizontalgap("10");
                p.Panel03_00.set_flexcrossaxisalign("center");
                p.Panel03_00.set_flexmainaxisalign("end");
                p.Panel03_00.move("415","1030","50%","50",null,null);

                p.staSubTitle03.set_taborder("15");
                p.staSubTitle03.set_text("추천 후보공간 정보 ");
                p.staSubTitle03.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle03.move("-275","1030","50%","50",null,null);

                p.Div03.set_taborder("3");
                p.Div03.set_text("Div00");
                p.Div03.set_cssclass("div_WF_Bg");
                p.Div03.set_fittocontents("height");
                p.Div03.move("-26","1580","100.00%","242",null,null);

                p.staSubTitle00.set_taborder("4");
                p.staSubTitle00.set_text("임차문의 - 기본정보");
                p.staSubTitle00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle00.move("1630.00","690","50%","50",null,null);

                p.Button00_00.set_taborder("5");
                p.Button00_00.set_cssclass("btn_WF_ACMinus");
                p.Button00_00.move("2890.00","692","34","34",null,null);

                p.Panel00.set_taborder("6");
                p.Panel00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel00.set_spacing("0px 20px");
                p.Panel00.set_horizontalgap("10");
                p.Panel00.set_flexcrossaxisalign("center");
                p.Panel00.set_flexmainaxisalign("end");
                p.Panel00.move("2340.00","690","50%","50",null,null);
            	}
            );
            obj.set_verticalgap("0");
            obj.set_type("vertical");
            obj.set_flexwrap("nowrap");
            obj.set_spacing("10px 400px 0px 0px");
            this.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form
            obj = new Layout("mobile","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Div00.set_fittocontents("height");
                p.Div00.set_flexgrow("1");
                p.Div00.move("20","27.544","100%","745",null,null);

                p.Div01.set_fittocontents("height");
                p.Div01.set_flexgrow("1");
                p.Div01.move("0","Div00:50","100%","745",null,null);

                p.Div02.set_fittocontents("height");
                p.Div02.set_flexgrow("1");
                p.Div02.move("0","Div01:50","100%","176",null,null);

                p.sub_tit00.set_fittocontents("height");
                p.sub_tit00.set_flexgrow("1");

                p.sub_tit01.set_fittocontents("height");
                p.sub_tit01.set_flexgrow("1");

                p.sub_tit02.set_fittocontents("height");
                p.sub_tit02.set_flexgrow("1");

                p.sub_tit03.set_fittocontents("height");
                p.sub_tit03.set_flexgrow("1");

                p.Div03.set_fittocontents("height");
                p.Div03.set_flexgrow("1");
            	}
            );
            obj.set_type("vertical");
            obj.set_spacing("0px 20px 0px 20px");
            obj.set_flexcrossaxisalign("start");
            obj.set_verticalgap("20");
            obj.set_flexwrap("nowrap");
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
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_verticalgap("0");
            obj.set_type("vertical");
            obj.set_flexwrap("nowrap");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divQuick.form
            obj = new Layout("default","",0,0,this.divQuick.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btn00.set_taborder("0");
                p.btn00.set_text("기본정보");
                p.btn00.set_cssclass("btn_WF_Quick_S");
                p.btn00.move("17","20","100%","45",null,null);

                p.btn01.set_taborder("1");
                p.btn01.set_text("임차관련 정보");
                p.btn01.set_cssclass("btn_WF_Quick");
                p.btn01.move("17.00","110","100%","45",null,null);

                p.btn02.set_taborder("2");
                p.btn02.set_text("기타요청사항");
                p.btn02.set_cssclass("btn_WF_Quick");
                p.btn02.move("17.00","110","100%","45",null,null);

                p.btn03.set_taborder("3");
                p.btn03.set_text("추천 후보공간 정보");
                p.btn03.set_cssclass("btn_WF_Quick");
                p.btn03.move("17.00","110","100%","45",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_spacing("20px 17px  0px 17px");
            this.divQuick.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divQuick.form
            obj = new Layout("mobile","",0,0,this.divQuick.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btn00.set_cssclass("btn_WF_QuickM_S");
                p.btn00.set_fittocontents("width");
                p.btn00.move("17","20","100","45",null,null);

                p.btn01.set_fittocontents("width");
                p.btn01.set_cssclass("btn_WF_QuickM");
                p.btn01.move("17.00","110","100","45",null,null);

                p.btn02.set_fittocontents("width");
                p.btn02.set_cssclass("btn_WF_QuickM");
                p.btn02.move("17.00","110","100","45",null,null);

                p.btn03.set_fittocontents("width");
                p.btn03.set_cssclass("btn_WF_QuickM");
                p.btn03.move("17.00","110","100","45",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_spacing("0px 0px 0px 0px");
            this.divQuick.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divBtn.form
            obj = new Layout("default","",0,0,this.divBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnCancel.set_taborder("2");
                p.btnCancel.set_text("취소");
                p.btnCancel.set_cssclass("btn_WF_No");
                p.btnCancel.move("200.00","365","100","40",null,null);

                p.btnCnddReg.set_taborder("0");
                p.btnCnddReg.set_text("후보등록");
                p.btnCnddReg.set_cssclass("btn_WF_Yes");
                p.btnCnddReg.set_visible("false");
                p.btnCnddReg.move("200.00","365","100","40",null,null);

                p.btnPstn.set_taborder("1");
                p.btnPstn.set_text("위치조회");
                p.btnPstn.set_cssclass("btn_WF_Yes");
                p.btnPstn.move("457.00","30","100","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_verticalgap("10");
            obj.set_horizontalgap("10");
            obj.set_spacing("20px 10px");
            obj.set_flexwrap("wrap");
            obj.set_flexcrossaxiswrapalign("start");
            this.divBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divBtn.form
            obj = new Layout("mobile","",0,0,this.divBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnCancel.set_fittocontents("width");

                p.btnCnddReg.set_fittocontents("width");

                p.btnPstn.set_fittocontents("width");
            	}
            );
            obj.set_flexmainaxisalign("start");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("10");
            obj.set_horizontalgap("10");
            obj.set_spacing("20px 10px");
            obj.set_flexwrap("wrap");
            obj.set_flexcrossaxiswrapalign("start");
            this.divBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1480,1350,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("배정후보공간안내 상세");

                p.divTitle.set_taborder("1");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.move("0","0",null,"50","60",null);

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_fittocontents("height");
                p.divForm.set_cssclass("div_WF_QuickFrBg");
                p.divForm.move("0","divTitle:0",null,"1300","60",null);

                p.divQuick.set_taborder("2");
                p.divQuick.set_text("div00");
                p.divQuick.set_cssclass("div_WF_QuickMenu");
                p.divQuick.set_fittocontents("height");
                p.divQuick.move(null,"70","296","210","62",null);

                p.divBtn.set_taborder("3");
                p.divBtn.set_text("div00");
                p.divBtn.set_cssclass("div_WF_QuickBtnBg");
                p.divBtn.set_fittocontents("height");
                p.divBtn.move(null,"divQuick:0","296","131","62",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",480,1450,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divTitle.set_visible("false");
                p.divTitle.move("0","0",null,"50","0",null);

                p.divForm.set_fittocontents("none");
                p.divForm.set_cssclass("div_WF_QuickFrBgM");
                p.divForm.move("0","70",null,null,"0","80");

                p.divQuick.set_cssclass("div_WF_QuickMenuM");
                p.divQuick.move("20","10",null,"60","20",null);

                p.divBtn.set_cssclass("div_WF_QuickBtnBgM");
                p.divBtn.move("0",null,null,"80","0","0");
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.Div00.form.edtHirerNm","value","dsGet","bzentyNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.Div00.form.edtRcptNo","value","dsGet","rcptNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.Div00.form.edtPicNm","value","dsGet","picNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.Div00.form.edtPicJbpsNm","value","dsGet","picJbpsNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.Div00.form.edtPicTelno","value","dsGet","picTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.Div00.form.edtPicMblTelno","value","dsGet","picMblTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.Div00.form.edtPicEmlAddr","value","dsGet","picEmlAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divForm.form.Div01.form.edtRentRsnPrps","value","dsGet","rentRsnPrps");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divForm.form.Div01.form.cboPstnCd","value","dsGet","pstnCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divForm.form.Div01.form.cboBldgCd","value","dsGet","bldgCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divForm.form.Div01.form.edtBldgNofl","value","dsGet","bldgNofl");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divForm.form.Div01.form.edtRentAr","value","dsGet","rntar");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divForm.form.Div01.form.edtMvnHpeYmd","value","dsGet","mvnHpeYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divForm.form.Div01.form.cboUsgCd","value","dsGet","usgCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divForm.form.Div01.form.cboDtlUsgCd","value","dsGet","dtlUsgCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divForm.form.Div02.form.textAreaEtcDmndMttr","value","dsGet","etcDmndMttr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divForm.form.Div03.form.cboPstnCd2","value","dsGet","pstnCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divForm.form.Div03.form.cboBldgCd2","value","dsGet","bldgCd2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divForm.form.Div03.form.edtRentAr2","value","dsGet","rntar");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divForm.form.Div00.form.cboBzentyClsfCd","value","dsGet","bzentyClsfCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divForm.form.Div01.form.rdoZoneCd","value","dsGet","zoneCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divForm.form.Div03.form.cboVccYn","value","dsGet","vccYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divForm.form.Div03.form.edtRmnmNo","value","dsGet","rmnmNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divForm.form.Div03.form.cboPrgrsSttsCd","value","dsGet","prgrsSttsCd");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
        };
        
        // User Script
        this.addIncludeScript("REN003M04.xfdl","xjs::TaskCom.xjs");
        this.registerScript("REN003M04.xfdl", function() {
        /**
        *  인천공항 원스톱 입주자서비스 프로젝트
        *  @FileName 	REN003M04.xfdl
        *  @Creator 	(주)이루온
        *  @CreateDate 	2024/10/22
        *  @Desction   ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/10/22			박영수						최초생성
        *******************************************************************************
        */

        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;  // 업무공통
        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        this.param;

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수

        	this.fnInit();
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        // 조회
        this.cfnSearch = function ()
        {
        	this.selectTransaction();
        };

        this.cfnClose = function (){};

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        // 데이터 조회
        this.selectTransaction = function()
        {
        	var strSvcId    = "select";
        	var strSvcUrl   = "ren/frs/selectCnddSpceGd.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsGet=dsGet";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 후보등록
        this.cnddRegTransaction = function()
        {
        	var strSvcId    = "cnddReg";
        	var strSvcUrl   = "ren/frs/updateHireLohSpcePrgsSttsCd.do";
        	var inData      = "dsList=dsGet:A ";
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
        	if (errorCode != 0) {
        		return;
        	}

        	switch (svcID) {
        		case "_cfnComCdLoad_":
        			break;

        		case "select":
        			if (this.param.status == "rentAvblDetail") {
        				this.divForm.form.sub_tit00.set_visible(false); // 추천후보공간만 표출
        				this.divForm.form.Div00.set_visible(false);
        				this.divForm.form.sub_tit01.set_visible(false);
        				this.divForm.form.Div01.set_visible(false);
        				this.divForm.form.sub_tit02.set_visible(false);
        				this.divForm.form.Div02.set_visible(false);

        				this.divQuick.set_visible(false);
        				this.divBtn.set_top(50);
        				this.divBtn.form.btnCnddReg.set_visible(false);

        				this.dsGet.addRow();
        				this.dsGet.setColumn(0, "pstnCd", this.param.pstnCd);
        				this.dsGet.setColumn(0, "bldgCd2", this.param.bldgCd);
        				this.dsGet.setColumn(0, "rmnmNo", this.param.rmnmNo);
        				this.dsGet.setColumn(0, "rntar", this.param.rntar);
        				this.dsGet.setColumn(0, "vccYn", this.param.vccYn);
        			} else {
        				if (this.dsGet.getColumn(0,"prgrsSttsCd") == "20") {
        					this.divBtn.form.btnCnddReg.set_visible(true);
        				} else {
        					this.divBtn.form.btnCnddReg.set_visible(false);
        				}
        			}

        			break;

        		case "cnddReg":
        			this.gfnAlertMsg("msg", "MSG_007", [ this.objApp.getVariable("gvRetMsg") ]);

        			if (this.objApp.screenid == "Desktop_screen") {
        				var cMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        				this.gfnCloseMenu(cMenuId);
        				this._gfnOpenMenu(cMenuId.substring(0,14),"",true);
        			} else {
        				this.close();
        			}

        			break;
        	}
        };

        // 얼럿창 콜백 함수
        this.msgCallback = function(sPopupId, sRtn)
        {
        	var oRtn = JSON.parse(sRtn);

        	if (sPopupId == "cnddReg_confirm" && oRtn.result == "Y") {
        		if (this.param.status == "detail" && this.param.polSpceId != "") {
        			this.dsGet.setColumn(0, "rowSttsCd", "U");
        			this.dsGet.setColumn(0, "prgrsSttsCd", "21");
        			this.cnddRegTransaction();
        		}
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	if (this.opener) {
        		this.param = {
        			"status" : this.getOwnerFrame().status
        			,"polSpceId" : this.getOwnerFrame().polSpceId
        		}
        	} else {
        		this.param = this.getOwnerFrame().form.fvObjArgs;
        	}

        	this.dsSearch.setColumn(0, "polSpceId", this.param.polSpceId);

        	// 공통코드 함수 호출
        	this.cfnComCdLoad({dsCboBzentyClsfCd:"BZENTY_CLSF_CD:B", dsCboPstnCd:"ZONE_SE_CD:B"
        					  ,dsCboPstnCd2:"ZONE_SE_CD:B", dsCboPrgrsSttsCd:"HIRE_ASN_STTS_CD:B"});
        	this.cfnEtcCdLoad({dsCboBldgCd:"{id:'selectTaskComListCd', cnd:{cdTyId:'RENT_ASN_BLDG'}, opt:'A:cdNm'}"
        					  ,dsCboUsgCd:"{id:'selectTaskComListCd', cnd:{cdTyId:'RENT_USE'}, opt:'B:grp2CdNm'}"
        					  ,dsCboDtlUsgCd:"{id:'selectTaskComListCd', cnd:{cdTyId:'RENT_USE'}, opt:'B:cdNm'}"});

        	if (this.param != null) {
        		this.cfnSearch();
        	}
        };

        // 상세 페이지 옆 버튼 부분 플로팅 스크롤
        this.form_onvscroll = function(obj,e)
        {
        	if (this.objApp.screenid == "Desktop_screen") {
        		this.divQuick.top = e.pos+50;
        		this.divBtn.top = "divQuick:0";

        		if (this.param.status == "rentAvblDetail") {
        			this.divBtn.set_top(50);
        		}
        	}
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        // 퀵메뉴
        this.divQuick_onclick = function(obj,e)
        {
        	if (obj.name == "btn00") {
        		this.divForm.form.sub_tit00.setFocus(); // 기본정보
        	} else if (obj.name == "btn01") {
        		this.divForm.form.sub_tit01.setFocus(); // 임차관련정보
        	} else if (obj.name == "btn02") {
        		this.divForm.form.sub_tit02.setFocus();	// 기타 요청사항
        	} else if (obj.name == "btn03") {
        		this.divForm.form.sub_tit03.setFocus();	// 추천 후보공간 정보
        	}
        };

        // 취소
        this.divBtn_btnCancel_onclick = function(obj,e)
        {
        	var cMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        	this.gfnCloseMenu(cMenuId);
        }

        // 후보등록
        this.divBtn_btnCnddReg_onclick = function(obj,e)
        {
        	if (this.dsGet.getColumn(0,"prgrsSttsCd") != "20") {
        		this.alert("대기후보 상태가 아닙니다.");
        		return;
         	} else {
        		this.gfnConfirmMsg("cnddReg_confirm", "CST_001", "msgCallback", ["확인", "취소"], ["Y", "N"], "", ["후보등록"]);
        	}
        };

        // 위치조회
        this.divBtn_btnPstn_onclick = function(obj,e)
        {
        	var sTitle = "현황도";		// 팝업 파이틀
        	var objArg   = {};			// 팝업창에 보낸 파라메터

        	var objOption = {
        		popuptype: "modaless"	// modal,modaless
        		, width: 1300			// 팝업창 width
        		, height: 1000			// 팝업창 height
        		, autosize: false		// 사이즈 자동 여부
        		, title: sTitle			// 팝업타이틀
        		, resize: true			// 사이즈 조정 여부
        		, titlebar: true		// 팝업 타이틀바 여부
        	};
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup("stsmap", "work::COM/stsmap/COM018P04.xfdl", objArg, sPopupCallBack, objOption);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onvscroll",this.form_onvscroll,this);
            this.divForm.addEventHandler("onvscroll",this.divForm_onvscroll,this);
            this.divForm.form.Div01.form.staLabel00_00.addEventHandler("onclick",this.divForm_staLabel05_00_onclick,this);
            this.divForm.form.Div01.form.staLabel00_01.addEventHandler("onclick",this.divForm_staLabel05_01_onclick,this);
            this.divForm.form.Div01.form.rdoZoneCd.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
            this.divQuick.form.btn00.addEventHandler("onclick",this.divQuick_onclick,this);
            this.divQuick.form.btn01.addEventHandler("onclick",this.divQuick_onclick,this);
            this.divQuick.form.btn02.addEventHandler("onclick",this.divQuick_onclick,this);
            this.divQuick.form.btn03.addEventHandler("onclick",this.divQuick_onclick,this);
            this.divBtn.form.btnCancel.addEventHandler("onclick",this.divBtn_btnCancel_onclick,this);
            this.divBtn.form.btnCnddReg.addEventHandler("onclick",this.divBtn_btnCnddReg_onclick,this);
        };
        this.loadIncludeScript("REN003M04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
