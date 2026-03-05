(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("REN009M01");
            this.set_titletext("임대배정확정 상세");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"hireLoiNo\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyNm\" type=\"STRING\" size=\"256\"/><Column id=\"rcptNo\" type=\"STRING\" size=\"256\"/><Column id=\"pstnCd\" type=\"STRING\" size=\"256\"/><Column id=\"polSpceId\" type=\"STRING\" size=\"256\"/><Column id=\"bldgCd\" type=\"STRING\" size=\"256\"/><Column id=\"bldgNm\" type=\"STRING\" size=\"256\"/><Column id=\"rmnmNo\" type=\"STRING\" size=\"256\"/><Column id=\"rntar\" type=\"STRING\" size=\"256\"/><Column id=\"hireYnNm\" type=\"STRING\" size=\"256\"/><Column id=\"hireYnRegNm\" type=\"STRING\" size=\"256\"/><Column id=\"hireYnRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"rentBgngDt\" type=\"STRING\" size=\"256\"/><Column id=\"rentEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"cfmtnRentBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"cfmtnRentEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"cfmtnRmnmNo\" type=\"STRING\" size=\"256\"/><Column id=\"cfmtnRntar\" type=\"STRING\" size=\"256\"/><Column id=\"prgrsSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"prgrsSttsNm\" type=\"STRING\" size=\"256\"/><Column id=\"asnCfmtnDt\" type=\"STRING\" size=\"256\"/><Column id=\"asnCfmtnNm\" type=\"STRING\" size=\"256\"/><Column id=\"noteMttr\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"hireLoiNo\" type=\"STRING\" size=\"256\"/><Column id=\"polSpceId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divForm","0","50",null,"1188","60",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","50.00","478","100.00%","384",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan00_02\"/><PanelItem id=\"PanelItem03\" componentid=\"pan00_03\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("1");
            obj.set_text("접수번호(의향서)");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan00_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("4");
            obj.set_text("업체명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan00_02","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan00_03","10.00","98","725","1",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("17");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel03_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("11");
            obj.set_text("임차여부");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_01_00_00","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("24");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan02_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("12");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edt00_00_01_00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("7");
            obj.set_text("건물명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan02_03","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("22");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edt00_00_01_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_01_00","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("23");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01_02","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("18");
            obj.set_text("호실번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_01_02","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("19");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01_03","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("20");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_01_02\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel03_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("13");
            obj.set_text("임차확정등록자");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_01","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("14");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan02_02","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("15");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_00_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("21");
            obj.set_text("임차확정등록일자");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("10");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"pan01_02\"/><PanelItem id=\"PanelItem03\" componentid=\"pan01_03\"/><PanelItem id=\"PanelItem04\" componentid=\"pan01_04\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel00","1400","227","400","1",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("28");
            obj._setContents("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_01_02_00","0","-4","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("27");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_01_00","0","-50","31.41%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("26");
            obj.set_text("면적(m2)");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01_04","1385","118","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("25");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_01_02_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan02","0","60","100%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("16");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan02_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan02_02\"/><PanelItem id=\"PanelItem03\" componentid=\"pan02_03\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan03","-21","285","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("29");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan03_01\"/><PanelItem id=\"PanelItem01\" componentid=\"pan03_02\"/><PanelItem id=\"PanelItem02\" componentid=\"pan03_03\"/><PanelItem id=\"PanelItem03\" componentid=\"pan03_04\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan03_01","20","-50","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("30");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_01_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00","0","-50","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("31");
            obj.set_text("임대시작일자");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan03_04","1142","-50","400","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("39");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_01_02_00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_01_00_00","0","-50","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("40");
            obj.set_text("임대면적(m2)");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_01_02_00_00","0","-4","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("41");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan03_03","861","-50","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("36");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_01_02_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_01_01","0","-50","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("37");
            obj.set_text("임대공간번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_01_02_01","0","-4","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("38");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan03_02","440","-50","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("33");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_00_00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_00","0","-50","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("34");
            obj.set_text("임대종료일자");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_00","0","-4","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("35");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_01_00","0","-4","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("32");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan04","0","388","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("42");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan02_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"pan02_02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan02_03_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan02_01_00","20","-50","306","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("43");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_00_01_00_00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01","0","-50","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("44");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","998","-50","400","1",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("52");
            obj._setContents("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan02_03_00","672","-50","306","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("49");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_00_01_00_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_00","0","-50","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("50");
            obj.set_text("임대배정확정등록자");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_01_00_01","0","-4","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("51");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan02_02_00","345","-50","306","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("46");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_00_01_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00","0","-50","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("47");
            obj.set_text("임대배정확정등록일자");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_01_01","0","-4","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("48");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_01_00_00_00","0","-4","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("45");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","1400","227","400","1",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("53");
            obj._setContents("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("sub_tit02","0","0","100%","70",null,null,null,null,"70",null,this.divForm.form);
            obj.set_taborder("6");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div02","50.00","478","100.00%","146",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new TextArea("txtNoteMttr","171","111","100%","100",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("0");
            obj.set_readonly("false");
            obj.set_displaynulltext("내용 입력");
            obj.set_visible("true");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","50","100.00%","130",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("1");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("div_WF_InfoGuide");
            obj.set_verticalgap("0");
            obj.set_horizontalgap("20");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"txtNoteMttr\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Div("divPopBtn","0","1540","99.99577482641578%","60",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnCancel","217.00","10","120","40",null,null,null,null,null,null,this.divForm.form.divPopBtn.form);
            obj.set_taborder("1");
            obj.set_text("취소");
            obj.set_visible("true");
            this.divForm.form.divPopBtn.addChild(obj.name, obj);

            obj = new Button("btnSave","789.97","10","120","40",null,null,null,null,null,null,this.divForm.form.divPopBtn.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Yes");
            this.divForm.form.divPopBtn.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_00","30","50","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00","1390.00","18","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_00","710.00","50","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("5");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 20px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_00_00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

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
            // Layout Functions
            //-- Default Layout : this.divTitle
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.Div01.form
            obj = new Layout("default","",0,0,this.divForm.form.Div01.form,
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

                p.edt00.set_taborder("2");
                p.edt00.set_readonly("true");
                p.edt00.move("10.00","158","100%","40",null,null);

                p.staLabel00.set_taborder("1");
                p.staLabel00.set_text("접수번호(의향서)");
                p.staLabel00.set_cssclass("sta_WF_Label");
                p.staLabel00.move("10","98","100%","46",null,null);

                p.pan00_01.set_taborder("3");
                p.pan00_01.set_type("vertical");
                p.pan00_01.set_flexgrow("1");
                p.pan00_01.set_minwidth("");
                p.pan00_01.move("10.00","98","305","86",null,null);

                p.staLabel00_01.set_taborder("4");
                p.staLabel00_01.set_text("업체명");
                p.staLabel00_01.set_cssclass("sta_WF_Label");
                p.staLabel00_01.move("10","98","100%","46",null,null);

                p.edt00_00.set_taborder("5");
                p.edt00_00.set_readonly("true");
                p.edt00_00.move("10.00","158","100%","40",null,null);

                p.pan00_02.set_taborder("6");
                p.pan00_02.set_type("vertical");
                p.pan00_02.set_flexgrow("1");
                p.pan00_02.set_minwidth("");
                p.pan00_02.move("10.00","98","305","86",null,null);

                p.pan00_03.set_taborder("17");
                p.pan00_03.set_type("vertical");
                p.pan00_03.set_flexgrow("1");
                p.pan00_03.move("10.00","98","725","1",null,null);

                p.staLabel03_00.set_taborder("11");
                p.staLabel03_00.set_text("임차여부");
                p.staLabel03_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00.move("10","98","100%","46",null,null);

                p.edt00_00_01_00_00.set_taborder("24");
                p.edt00_00_01_00_00.set_readonly("true");
                p.edt00_00_01_00_00.move("10.00","158","100%","40",null,null);

                p.pan02_01.set_taborder("12");
                p.pan02_01.set_type("vertical");
                p.pan02_01.set_flexgrow("1");
                p.pan02_01.move("10.00","98","305","86",null,null);

                p.staLabel01_02.set_taborder("7");
                p.staLabel01_02.set_text("건물명");
                p.staLabel01_02.set_cssclass("sta_WF_Label");
                p.staLabel01_02.move("10","98","100%","46",null,null);

                p.pan02_03.set_taborder("22");
                p.pan02_03.set_type("vertical");
                p.pan02_03.set_flexgrow("1");
                p.pan02_03.move("10.00","98","305","86",null,null);

                p.edt00_00_01_00.set_taborder("23");
                p.edt00_00_01_00.set_readonly("true");
                p.edt00_00_01_00.move("10.00","158","100%","40",null,null);

                p.edt00_00_00.set_taborder("8");
                p.edt00_00_00.set_readonly("true");
                p.edt00_00_00.move("10.00","158","100%","40",null,null);

                p.pan01_02.set_taborder("9");
                p.pan01_02.set_type("vertical");
                p.pan01_02.set_flexgrow("1");
                p.pan01_02.move("10.00","98","305","86",null,null);

                p.staLabel01_00_01.set_taborder("18");
                p.staLabel01_00_01.set_text("호실번호");
                p.staLabel01_00_01.set_cssclass("sta_WF_Label");
                p.staLabel01_00_01.move("10","98","100%","46",null,null);

                p.edt00_01_02.set_taborder("19");
                p.edt00_01_02.set_readonly("true");
                p.edt00_01_02.move("10.00","158","100%","40",null,null);

                p.pan01_03.set_taborder("20");
                p.pan01_03.set_type("vertical");
                p.pan01_03.set_flexgrow("1");
                p.pan01_03.move("10.00","98","305","86",null,null);

                p.staLabel03_01.set_taborder("13");
                p.staLabel03_01.set_text("임차확정등록자");
                p.staLabel03_01.set_cssclass("sta_WF_Label");
                p.staLabel03_01.move("10","98","100%","46",null,null);

                p.edt00_00_01.set_taborder("14");
                p.edt00_00_01.set_readonly("true");
                p.edt00_00_01.move("10.00","158","100%","40",null,null);

                p.pan02_02.set_taborder("15");
                p.pan02_02.set_type("vertical");
                p.pan02_02.set_flexgrow("1");
                p.pan02_02.move("10.00","98","305","86",null,null);

                p.staLabel03_00_00.set_taborder("21");
                p.staLabel03_00_00.set_text("임차확정등록일자");
                p.staLabel03_00_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00_00.move("10","98","100%","46",null,null);

                p.pan01.set_taborder("10");
                p.pan01.set_horizontalgap("20");
                p.pan01.set_flexcrossaxiswrapalign("start");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_verticalgap("0");
                p.pan01.set_spacing("0px 20px 10px 20px");
                p.pan01.set_cssclass("pal_WF_DtlBg");
                p.pan01.set_flexshrink("1");
                p.pan01.set_fittocontents("height");
                p.pan01.move("0","60","100.00%","96",null,null);

                p.Panel00.set_taborder("28");
                p.Panel00.move("1400","227","400","1",null,null);

                p.edt00_01_02_00.set_taborder("27");
                p.edt00_01_02_00.set_readonly("true");
                p.edt00_01_02_00.move("0","-4","100%","40",null,null);

                p.staLabel01_00_01_00.set_taborder("26");
                p.staLabel01_00_01_00.set_text("면적(m2)");
                p.staLabel01_00_01_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00_01_00.move("0","-50","31.41%","46",null,null);

                p.pan01_04.set_taborder("25");
                p.pan01_04.set_type("vertical");
                p.pan01_04.set_flexgrow("1");
                p.pan01_04.move("1385","118","305","86",null,null);

                p.pan02.set_taborder("16");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.move("0","60","100%","96",null,null);

                p.pan03.set_taborder("29");
                p.pan03.set_horizontalgap("20");
                p.pan03.set_flexcrossaxiswrapalign("start");
                p.pan03.set_flexwrap("wrap");
                p.pan03.set_verticalgap("0");
                p.pan03.set_spacing("0px 20px 10px 20px");
                p.pan03.set_cssclass("pal_WF_DtlBg");
                p.pan03.set_flexshrink("1");
                p.pan03.set_fittocontents("height");
                p.pan03.move("-21","285","100.00%","96",null,null);

                p.pan03_01.set_taborder("30");
                p.pan03_01.set_type("vertical");
                p.pan03_01.set_flexgrow("1");
                p.pan03_01.move("20","-50","305","86",null,null);

                p.staLabel01_00_00.set_taborder("31");
                p.staLabel01_00_00.set_text("임대시작일자");
                p.staLabel01_00_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00_00.move("0","-50","100%","46",null,null);

                p.pan03_04.set_taborder("39");
                p.pan03_04.set_type("vertical");
                p.pan03_04.set_flexgrow("1");
                p.pan03_04.move("1142","-50","400","86",null,null);

                p.staLabel01_00_01_00_00.set_taborder("40");
                p.staLabel01_00_01_00_00.set_text("임대면적(m2)");
                p.staLabel01_00_01_00_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00_01_00_00.move("0","-50","100%","46",null,null);

                p.edt00_01_02_00_00.set_taborder("41");
                p.edt00_01_02_00_00.set_readonly("true");
                p.edt00_01_02_00_00.move("0","-4","100%","40",null,null);

                p.pan03_03.set_taborder("36");
                p.pan03_03.set_type("vertical");
                p.pan03_03.set_flexgrow("1");
                p.pan03_03.move("861","-50","305","86",null,null);

                p.staLabel01_00_01_01.set_taborder("37");
                p.staLabel01_00_01_01.set_text("임대공간번호");
                p.staLabel01_00_01_01.set_cssclass("sta_WF_Label");
                p.staLabel01_00_01_01.move("0","-50","100%","46",null,null);

                p.edt00_01_02_01.set_taborder("38");
                p.edt00_01_02_01.set_readonly("true");
                p.edt00_01_02_01.move("0","-4","100%","40",null,null);

                p.pan03_02.set_taborder("33");
                p.pan03_02.set_type("vertical");
                p.pan03_02.set_flexgrow("1");
                p.pan03_02.move("440","-50","305","86",null,null);

                p.staLabel01_02_00.set_taborder("34");
                p.staLabel01_02_00.set_text("임대종료일자");
                p.staLabel01_02_00.set_cssclass("sta_WF_Label");
                p.staLabel01_02_00.move("0","-50","100%","46",null,null);

                p.edt00_00_00_00.set_taborder("35");
                p.edt00_00_00_00.set_readonly("true");
                p.edt00_00_00_00.move("0","-4","100%","40",null,null);

                p.edt00_01_00.set_taborder("32");
                p.edt00_01_00.set_readonly("true");
                p.edt00_01_00.move("0","-4","100%","40",null,null);

                p.pan04.set_taborder("42");
                p.pan04.set_horizontalgap("20");
                p.pan04.set_flexcrossaxiswrapalign("start");
                p.pan04.set_flexwrap("wrap");
                p.pan04.set_fittocontents("height");
                p.pan04.set_verticalgap("0");
                p.pan04.set_spacing("0px 20px 10px 20px");
                p.pan04.set_cssclass("pal_WF_DtlBg");
                p.pan04.move("0","388","100.00%","96",null,null);

                p.pan02_01_00.set_taborder("43");
                p.pan02_01_00.set_type("vertical");
                p.pan02_01_00.set_flexgrow("1");
                p.pan02_01_00.move("20","-50","306","86",null,null);

                p.staLabel03_00_01.set_taborder("44");
                p.staLabel03_00_01.set_text("상태");
                p.staLabel03_00_01.set_cssclass("sta_WF_Label");
                p.staLabel03_00_01.move("0","-50","100%","46",null,null);

                p.Panel00_00.set_taborder("52");
                p.Panel00_00.move("998","-50","400","1",null,null);

                p.pan02_03_00.set_taborder("49");
                p.pan02_03_00.set_type("vertical");
                p.pan02_03_00.set_flexgrow("1");
                p.pan02_03_00.move("672","-50","306","86",null,null);

                p.staLabel03_00_00_00.set_taborder("50");
                p.staLabel03_00_00_00.set_text("임대배정확정등록자");
                p.staLabel03_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00_00_00.move("0","-50","100%","46",null,null);

                p.edt00_00_01_00_01.set_taborder("51");
                p.edt00_00_01_00_01.set_readonly("true");
                p.edt00_00_01_00_01.move("0","-4","100%","40",null,null);

                p.pan02_02_00.set_taborder("46");
                p.pan02_02_00.set_type("vertical");
                p.pan02_02_00.set_flexgrow("1");
                p.pan02_02_00.move("345","-50","306","86",null,null);

                p.staLabel03_01_00.set_taborder("47");
                p.staLabel03_01_00.set_text("임대배정확정등록일자");
                p.staLabel03_01_00.set_cssclass("sta_WF_Label");
                p.staLabel03_01_00.move("0","-50","100%","46",null,null);

                p.edt00_00_01_01.set_taborder("48");
                p.edt00_00_01_01.set_readonly("true");
                p.edt00_00_01_01.move("0","-4","100%","40",null,null);

                p.edt00_00_01_00_00_00.set_taborder("45");
                p.edt00_00_01_00_00_00.set_readonly("true");
                p.edt00_00_01_00_00_00.move("0","-4","100%","40",null,null);

                p.Panel00_01.set_taborder("53");
                p.Panel00_01.move("1400","227","400","1",null,null);
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
                p.txtNoteMttr.set_taborder("0");
                p.txtNoteMttr.set_readonly("false");
                p.txtNoteMttr.set_displaynulltext("내용 입력");
                p.txtNoteMttr.set_visible("true");
                p.txtNoteMttr.move("171","111","100%","100",null,null);

                p.Panel01.set_taborder("1");
                p.Panel01.set_fittocontents("height");
                p.Panel01.set_spacing("10px 20px 10px 20px");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.set_cssclass("div_WF_InfoGuide");
                p.Panel01.set_verticalgap("0");
                p.Panel01.set_horizontalgap("20");
                p.Panel01.move("0","50","100.00%","130",null,null);
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
            //-- Default Layout : this.divForm.form.divPopBtn.form
            obj = new Layout("default","",0,0,this.divForm.form.divPopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnCancel.set_taborder("1");
                p.btnCancel.set_text("취소");
                p.btnCancel.set_visible("true");
                p.btnCancel.move("217.00","10","120","40",null,null);

                p.btnSave.set_taborder("0");
                p.btnSave.set_text("저장");
                p.btnSave.set_cssclass("btn_WF_Yes");
                p.btnSave.move("789.97","10","120","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            this.divForm.form.divPopBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divPopBtn.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divPopBtn.form,
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
            obj.set_spacing("0px 10px 0px 10px");
            this.divForm.form.divPopBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Div01.set_taborder("0");
                p.Div01.set_text("Div00");
                p.Div01.set_cssclass("div_WF_Bg");
                p.Div01.set_fittocontents("height");
                p.Div01.move("50.00","478","100.00%","384",null,null);

                p.sub_tit02.set_taborder("6");
                p.sub_tit02.set_background("#ffffff");
                p.sub_tit02.set_flexcrossaxisalign("end");
                p.sub_tit02.set_minheight("70");
                p.sub_tit02.set_maxheight("");
                p.sub_tit02.move("0","0","100%","70",null,null);

                p.Div02.set_taborder("1");
                p.Div02.set_text("Div00");
                p.Div02.set_cssclass("div_WF_Bg");
                p.Div02.set_fittocontents("height");
                p.Div02.move("50.00","478","100.00%","146",null,null);

                p.divPopBtn.set_taborder("2");
                p.divPopBtn.set_text("Div00");
                p.divPopBtn.set_cssclass("div_WF_PopBtn");
                p.divPopBtn.move("0","1540","99.99577482641578%","60",null,null);

                p.staSubTitle02_00_00.set_taborder("3");
                p.staSubTitle02_00_00.set_text("비고");
                p.staSubTitle02_00_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_00.move("30","50","100%","50",null,null);

                p.Button00_00_00_00.set_taborder("4");
                p.Button00_00_00_00.set_cssclass("btn_WF_ACMinus");
                p.Button00_00_00_00.set_visible("false");
                p.Button00_00_00_00.move("1390.00","18","34","34",null,null);

                p.Panel01_02_00.set_taborder("5");
                p.Panel01_02_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_00.set_spacing("0px 20px");
                p.Panel01_02_00.set_horizontalgap("10");
                p.Panel01_02_00.set_flexcrossaxisalign("center");
                p.Panel01_02_00.set_flexmainaxisalign("end");
                p.Panel01_02_00.move("710.00","50","100%","50",null,null);
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
            obj = new Layout("default","Desktop_screen",1480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("임대배정확정 상세");

                p.divTitle.set_taborder("1");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.move("0","0",null,"50","60",null);

                p.divForm.set_taborder("1");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_fittocontents("height");
                p.divForm.move("0","50",null,"1188","60",null);

                p.divGuide00.set_taborder("2");
                p.divGuide00.set_text("div00");
                p.divGuide00.set_visible("false");
                p.divGuide00.set_cssclass("div_GD_Tip");
                p.divGuide00.move("1600.00","145","450","385",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divTitle.set_visible("false");
                p.divTitle.move("0","0",null,"50","0",null);

                p.divForm.move("20","10",null,"1188","20",null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.Div01.form.edt00","value","dsMaster","rcptNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.Div01.form.edt00_00","value","dsMaster","bzentyNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.Div01.form.edt00_00_00","value","dsMaster","bldgNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.Div01.form.edt00_01_02","value","dsMaster","rmnmNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.Div01.form.edt00_00_01_00_00","value","dsMaster","hireYnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divForm.form.Div01.form.edt00_00_01","value","dsMaster","hireYnRegDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divForm.form.Div01.form.edt00_00_01_00","value","dsMaster","hireYnRegNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.Div01.form.edt00_01_02_00","value","dsMaster","rntar");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divForm.form.Div01.form.edt00_01_00","value","dsMaster","hireYnRegDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divForm.form.Div01.form.edt00_00_00_00","value","dsMaster","rentEndDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divForm.form.Div01.form.edt00_01_02_01","value","dsMaster","cfmtnRmnmNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divForm.form.Div01.form.edt00_01_02_00_00","value","dsMaster","cfmtnRntar");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divForm.form.Div01.form.edt00_00_01_00_00_00","value","dsMaster","prgrsSttsNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divForm.form.Div01.form.edt00_00_01_01","value","dsMaster","asnCfmtnDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divForm.form.Div01.form.edt00_00_01_00_01","value","dsMaster","asnCfmtnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divForm.form.Div02.form.txtNoteMttr","value","dsMaster","noteMttr");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
        };
        
        // User Script
        this.addIncludeScript("REN009M01.xfdl","xjs::TaskCom.xjs");
        this.registerScript("REN009M01.xfdl", function() {
        /**
        *  인천공항 원스톱 입주자서비스 프로젝트
        *  @FileName 	REN009M01.xfdl
        *  @Creator 	(주)이루온
        *  @CreateDate 	2024/11/12
        *  @Desction    임대배정확정 상세(처리자)
        ******************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/11/12			이루온						최초생성
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

        	if (this.opener) {
        		this.param = {
        			"status" : this.getOwnerFrame().status
        			,"hireLoiNo" : this.getOwnerFrame().hireLoiNo
        			,"polSpceId" : this.getOwnerFrame().polSpceId
        		}
        	} else {
        		this.param = this.getOwnerFrame().form.fvObjArgs;
        	}

        	if (this.param != null) {
        		//페이지 로딩시 처음에 실행 되는 함수
        		this.fnInit();

        		// 임차의향서 상세조회
        		this.dsSearch.setColumn(0,"hireLoiNo"	,this.param.hireLoiNo);
        		this.dsSearch.setColumn(0,"polSpceId"	,this.param.polSpceId);

        		this.selectTransaction();

        		//초기포커스 지정
        		//this.divForm.form.Div01.form.rdoSptIdntyCd.setFocus();
        	} else {
        		this.gfnAlertMsg("msg", "REN_004");	//임차의향서번호가 없습니다.
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	// 공통코드조회 : 상세용도, 유무상코드
        	//this.cfnComCdLoad({dsCboDtlUsgCd:"RENT_DTL_USG:S", dsCboRtfeYnCd:"YN_CD:S", dsCboMncoYnCd:"YN_CD:S", dsCboUtltYnCd:"YN_CD:S"});
        };

        /*******************************************************************************************************************************
         * 임대배정확정 상세조회
        *******************************************************************************************************************************/
        this.selectTransaction = function()
        {

        	var strSvcId    = "select";
        	var strSvcUrl   = "ren/frs/selectRentAsnCfmtn.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsMaster=dsGet";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };


        this.cfnClose = function() {
        	console.log('cfnClose');
        }

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
        		case "combo":
        			break;

        		// 임차의향서 상세조회
        		case "select":
        			this.divBtn.form.btnSave.visible = false;		// 저장

        			//30.작성중 31.제출 32.접수 33.반려 34.SAP전송 35.배정확정
        			if (this.dsMaster.getColumn(0,"prgrsSttsCd") == "32" ||
        				this.dsMaster.getColumn(0,"prgrsSttsCd") == "34" ||
        				this.dsMaster.getColumn(0,"prgrsSttsCd") == "35") {
        				this.divBtn.form.btnSave.visible = true;	// 저장
        			}

        			break;

        		// 저장
        		case "update":
        			this.gfnAlertMsg("msg", "MSG_007", [ this.objApp.getVariable("gvRetMsg") ]);
        			var cMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        			this.gfnCloseMenu(cMenuId);
        			this._gfnOpenMenu(cMenuId.substring(0,14),"",true);

        			break;

        	}
        };

        /*******************************************************************************************************************************
         * 접수 버튼 클릭시
        *******************************************************************************************************************************/
        this.divBtn_btnSave_onclick = function(obj,e)
        {
        	 if (this.gfnDsIsUpdated(this.dsMaster) == true) {
        		// 저장 하시겠습니까?
        		this.gfnConfirmMsg("save_confirm", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        	} else {
        		// 변경된 내용이 없습니다.
         		this.gfnAlertMsg("msg", "MSG_004");
        		this.divForm.form.Div02.form.txtNoteMttr.setFocus();	// 비고
         		return;
        	}
        };

        /*******************************************************************************************************************************
         * 취소 버튼 클릭시
        *******************************************************************************************************************************/
        this.divBtn_btnCancel_onclick = function(obj,e)
        {
        	var cMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        	this.gfnCloseMenu(cMenuId);
        	this._gfnOpenMenu(cMenuId.substring(0,14),"",true);
        };


        // 얼럿창 콜백 함수
        this.msgCallback = function(sPopupId, sRtn) {

        	var oRtn 		= JSON.parse(sRtn);

        	// 저장
        	if (sPopupId == "save_confirm" && oRtn.result == "Y") {

        		var strSvcId    = "update";
        		var strSvcUrl   = "ren/frs/updateRentAsnCfmtn.do";
        		var inData      = "dsGet=dsMaster:A";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";
        		var isAsync   	= false;

        		this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.Div01.form.edt00_00_00.addEventHandler("onchanged",this.divForm_Div01_edt00_00_00_onchanged,this);
            this.divForm.form.divPopBtn.form.btnCancel.addEventHandler("onclick",this.divBtn_btnCancel_onclick,this);
            this.divForm.form.divPopBtn.form.btnSave.addEventHandler("onclick",this.divBtn_btnSave_onclick,this);
        };
        this.loadIncludeScript("REN009M01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
