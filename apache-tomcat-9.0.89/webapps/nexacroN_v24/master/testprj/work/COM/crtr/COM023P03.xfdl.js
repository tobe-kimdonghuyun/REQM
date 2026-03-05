(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM023P03");
            this.set_titletext("계약청구 고객정보 등록/수정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,781);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGet", this);
            obj._setContents("<ColumnInfo><Column id=\"ctrtSe\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNm\" type=\"STRING\" size=\"256\"/><Column id=\"clmCustCd\" type=\"STRING\" size=\"256\"/><Column id=\"vldtyEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"vldtyBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"custNm\" type=\"STRING\" size=\"256\"/><Column id=\"rprsvNm\" type=\"STRING\" size=\"256\"/><Column id=\"brno\" type=\"STRING\" size=\"256\"/><Column id=\"crno\" type=\"STRING\" size=\"256\"/><Column id=\"telno\" type=\"STRING\" size=\"256\"/><Column id=\"fxno\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyTkcgDept\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyPic\" type=\"STRING\" size=\"256\"/><Column id=\"mblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"rprsCustCd\" type=\"STRING\" size=\"256\"/><Column id=\"rprsCustNm\" type=\"STRING\" size=\"256\"/><Column id=\"autoMnlRegSe\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"fullName\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"clmCustCd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","0","0",null,null,"0","70",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_fittocontents("none");
            obj.set_formscrollbartype("default default");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","125.00","10","100%","701",null,null,null,null,null,null,this.divForm.form);
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
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan00_02\"/><PanelItem id=\"PanelItem03\" componentid=\"pan01_01_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("6");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_01","10.00","98","250","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("7");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem02\" componentid=\"divEdtPop01_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("8");
            obj.set_text("계약명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtCtrtNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_02","10.00","98","250","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("10");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtCtrtNm\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel01_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("11");
            obj.set_text("효력시작일");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan01_01","10.00","98","250","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("12");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"calVldtyBgngYmd\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel01_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("13");
            obj.set_text("효력종료일");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan01_02","10.00","98","250","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("14");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02\"/><PanelItem id=\"PanelItem02\" componentid=\"calVldtyEndYmd\"/></Contents>");
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
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan01_02\"/><PanelItem id=\"PanelItem03\" componentid=\"pan01_01_01\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("15");
            obj.set_text("고객명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan02_","10.00","98","250","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("16");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edt00_00_01_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("17");
            obj.set_text("대표자명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt00_00_01","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("18");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan02_02","10.00","98","250","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("19");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_00_01\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan02","0","60","100%","96",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("2");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan02_\"/><PanelItem id=\"PanelItem02\" componentid=\"pan02_02\"/><PanelItem id=\"PanelItem03\" componentid=\"pan02_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel04_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("20");
            obj.set_text("법인번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan03_01","10.00","98","250","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("21");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel04_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edt00_00_00_00_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel04_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("22");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_00","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("23");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan03_02","10.00","98","250","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("24");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel04_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_00_00_00\"/></Contents>");
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
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan03_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan03_02\"/><PanelItem id=\"PanelItem03\" componentid=\"pan03_01_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("25");
            obj.set_text("청구고객ID");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtClmCustCd","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("26");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan01_01_00","10.00","98","250","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("27");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtClmCustCd\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("28");
            obj.set_text("대표고객ID");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan01_01_01","10.00","98","250","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("29");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"divEdtPop01\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("30");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan02_00","10.00","98","250","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("31");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edt00_00_01_00_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel04_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("32");
            obj.set_text("팩스번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt00_01_00_01","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("33");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan03_01_00","10.00","98","250","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("34");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel04_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_01_00_01\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_00_00","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("35");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Div("divEdtPop01","43.00","393","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("36");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtCoId","0","0",null,"40","0",null,null,null,null,null,this.divForm.form.Div00.form.divEdtPop01.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_readonly("true");
            this.divForm.form.Div00.form.divEdtPop01.addChild(obj.name, obj);

            obj = new Button("btnPop","edtCoId:-40","0","40","40",null,null,null,null,null,null,this.divForm.form.Div00.form.divEdtPop01.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            this.divForm.form.Div00.form.divEdtPop01.addChild(obj.name, obj);

            obj = new Calendar("calVldtyBgngYmd","0","0","150","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("37");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Calendar("calVldtyEndYmd","0","0","150","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("38");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt00_00_01_00","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("39");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt00_00_01_00_00","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("40");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel04_00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("41");
            obj.set_text("업체담당부서");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan03_01_01","10.00","98","250","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("42");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel04_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"divEdtPop01_01\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel04_01_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("43");
            obj.set_text("업체담당자명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan03_02_00","10.00","98","250","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("44");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel04_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"divEdtPop01_02\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan03_00","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("4");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan03_01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan03_02_00\"/><PanelItem id=\"PanelItem03\" componentid=\"pan03_02_00_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan03_02_00_00","10.00","98","250","1",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("45");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("46");
            obj.set_text("사업자등록증");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Button("btn00","636.00","1295","137","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("47");
            obj.set_text("샘플 첨부파일명");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Button("btn_file_1_00_00","686.00","831","116","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("48");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_00","317.00","831","485","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("49");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staLabel00_02_00\"/><PanelItem id=\"PanelItem00\" componentid=\"btn00\"/><PanelItem id=\"PanelItem02\" componentid=\"btn_file_1_00_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("panTitle","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("50");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"panBtnFile00_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("51");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staFileCnt","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("52");
            obj.set_text("0");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("53");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("panFileNum","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("54");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"staFileCnt\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Button("btnAllDelFile","325.00","3","125","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("55");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("panBtnDel","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("56");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnAllDelFile\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_04","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("57");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Grid("grdFileList","20.00","114","100%","100",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("58");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("panFile","0","42","100.00%","221",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("5");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_04\"/><PanelItem id=\"PanelItem02\" componentid=\"grdFileList\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Div("divEdtPop01_00","43.00","393","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("59");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtCtrtNo","0","0",null,"40","0",null,null,null,null,null,this.divForm.form.Div00.form.divEdtPop01_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_readonly("true");
            this.divForm.form.Div00.form.divEdtPop01_00.addChild(obj.name, obj);

            obj = new Button("btnPop","edtCtrtNo:-40","0","40","40",null,null,null,null,null,null,this.divForm.form.Div00.form.divEdtPop01_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            this.divForm.form.Div00.form.divEdtPop01_00.addChild(obj.name, obj);

            obj = new Div("divEdtPop01_01","43.00","393","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("60");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtDept","0","0",null,"40","0",null,null,null,null,null,this.divForm.form.Div00.form.divEdtPop01_01.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_readonly("false");
            this.divForm.form.Div00.form.divEdtPop01_01.addChild(obj.name, obj);

            obj = new Button("btnPop","edtDept:-40","0","40","40",null,null,null,null,null,null,this.divForm.form.Div00.form.divEdtPop01_01.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            obj.set_visible("false");
            this.divForm.form.Div00.form.divEdtPop01_01.addChild(obj.name, obj);

            obj = new Div("divEdtPop01_02","43.00","393","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("61");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtUser","0","0",null,"40","0",null,null,null,null,null,this.divForm.form.Div00.form.divEdtPop01_02.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_readonly("false");
            this.divForm.form.Div00.form.divEdtPop01_02.addChild(obj.name, obj);

            obj = new Button("btnPop","edtUser:-40","0","40","40",null,null,null,null,null,null,this.divForm.form.Div00.form.divEdtPop01_02.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            obj.set_visible("false");
            this.divForm.form.Div00.form.divEdtPop01_02.addChild(obj.name, obj);

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

            obj = new Div("divPopBtn","0",null,null,"60","0","0",null,null,null,null,this);
            obj.set_taborder("2");
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
            //-- Default Layout : this.divForm.form.Div00.form.divEdtPop01.form
            obj = new Layout("default","",0,0,this.divForm.form.Div00.form.divEdtPop01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.edtCoId.set_taborder("0");
                p.edtCoId.set_cssclass("edt_WF_EdtSch");
                p.edtCoId.set_readonly("true");
                p.edtCoId.move("0","0",null,"40","0",null);

                p.btnPop.set_taborder("1");
                p.btnPop.set_cssclass("btn_WF_EdtSch");
                p.btnPop.move("edtCoId:-40","0","40","40",null,null);
            	}
            );
            this.divForm.form.Div00.form.divEdtPop01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div00.form.divEdtPop01.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div00.form.divEdtPop01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.Div00.form.divEdtPop01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div00.form.divEdtPop01_00.form
            obj = new Layout("default","",0,0,this.divForm.form.Div00.form.divEdtPop01_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.edtCtrtNo.set_taborder("0");
                p.edtCtrtNo.set_cssclass("edt_WF_EdtSch");
                p.edtCtrtNo.set_readonly("true");
                p.edtCtrtNo.move("0","0",null,"40","0",null);

                p.btnPop.set_taborder("1");
                p.btnPop.set_cssclass("btn_WF_EdtSch");
                p.btnPop.move("edtCtrtNo:-40","0","40","40",null,null);
            	}
            );
            this.divForm.form.Div00.form.divEdtPop01_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div00.form.divEdtPop01_00.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div00.form.divEdtPop01_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.Div00.form.divEdtPop01_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div00.form.divEdtPop01_01.form
            obj = new Layout("default","",0,0,this.divForm.form.Div00.form.divEdtPop01_01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.edtDept.set_taborder("0");
                p.edtDept.set_cssclass("edt_WF_EdtSch");
                p.edtDept.set_readonly("false");
                p.edtDept.move("0","0",null,"40","0",null);

                p.btnPop.set_taborder("1");
                p.btnPop.set_cssclass("btn_WF_EdtSch");
                p.btnPop.set_visible("false");
                p.btnPop.move("edtDept:-40","0","40","40",null,null);
            	}
            );
            this.divForm.form.Div00.form.divEdtPop01_01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div00.form.divEdtPop01_01.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div00.form.divEdtPop01_01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.Div00.form.divEdtPop01_01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div00.form.divEdtPop01_02.form
            obj = new Layout("default","",0,0,this.divForm.form.Div00.form.divEdtPop01_02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.edtUser.set_taborder("0");
                p.edtUser.set_cssclass("edt_WF_EdtSch");
                p.edtUser.set_readonly("false");
                p.edtUser.move("0","0",null,"40","0",null);

                p.btnPop.set_taborder("1");
                p.btnPop.set_cssclass("btn_WF_EdtSch");
                p.btnPop.set_visible("false");
                p.btnPop.move("edtUser:-40","0","40","40",null,null);
            	}
            );
            this.divForm.form.Div00.form.divEdtPop01_02.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div00.form.divEdtPop01_02.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div00.form.divEdtPop01_02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.Div00.form.divEdtPop01_02.form.addLayout(obj.name, obj);
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

                p.staLabel00.set_taborder("6");
                p.staLabel00.set_text("계약번호");
                p.staLabel00.set_cssclass("sta_WF_Label");
                p.staLabel00.move("10","98","100%","46",null,null);

                p.pan00_01.set_taborder("7");
                p.pan00_01.set_type("vertical");
                p.pan00_01.set_flexgrow("1");
                p.pan00_01.set_minwidth("");
                p.pan00_01.move("10.00","98","250","86",null,null);

                p.staLabel00_01.set_taborder("8");
                p.staLabel00_01.set_text("계약명");
                p.staLabel00_01.set_cssclass("sta_WF_Label");
                p.staLabel00_01.move("10","98","100%","46",null,null);

                p.edtCtrtNm.set_taborder("9");
                p.edtCtrtNm.set_readonly("true");
                p.edtCtrtNm.move("10.00","158","100%","40",null,null);

                p.pan00_02.set_taborder("10");
                p.pan00_02.set_type("vertical");
                p.pan00_02.set_flexgrow("1");
                p.pan00_02.set_minwidth("");
                p.pan00_02.move("10.00","98","250","86",null,null);

                p.staLabel01_00.set_taborder("11");
                p.staLabel01_00.set_text("효력시작일");
                p.staLabel01_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00.move("10","98","100%","46",null,null);

                p.pan01_01.set_taborder("12");
                p.pan01_01.set_type("vertical");
                p.pan01_01.set_flexgrow("1");
                p.pan01_01.move("10.00","98","250","86",null,null);

                p.staLabel01_02.set_taborder("13");
                p.staLabel01_02.set_text("효력종료일");
                p.staLabel01_02.set_cssclass("sta_WF_Label");
                p.staLabel01_02.move("10","98","100%","46",null,null);

                p.pan01_02.set_taborder("14");
                p.pan01_02.set_type("vertical");
                p.pan01_02.set_flexgrow("1");
                p.pan01_02.move("10.00","98","250","86",null,null);

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

                p.staLabel03_00.set_taborder("15");
                p.staLabel03_00.set_text("고객명");
                p.staLabel03_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00.move("10","98","100%","46",null,null);

                p.pan02_.set_taborder("16");
                p.pan02_.set_type("vertical");
                p.pan02_.set_flexgrow("1");
                p.pan02_.move("10.00","98","250","86",null,null);

                p.staLabel03_01.set_taborder("17");
                p.staLabel03_01.set_text("대표자명");
                p.staLabel03_01.set_cssclass("sta_WF_Label");
                p.staLabel03_01.move("10","98","100%","46",null,null);

                p.edt00_00_01.set_taborder("18");
                p.edt00_00_01.set_readonly("false");
                p.edt00_00_01.move("10.00","158","100%","40",null,null);

                p.pan02_02.set_taborder("19");
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
                p.pan02.move("0","60","100%","96",null,null);

                p.staLabel04_00.set_taborder("20");
                p.staLabel04_00.set_text("법인번호");
                p.staLabel04_00.set_cssclass("sta_WF_Label");
                p.staLabel04_00.move("10","98","100%","46",null,null);

                p.pan03_01.set_taborder("21");
                p.pan03_01.set_type("vertical");
                p.pan03_01.set_flexgrow("1");
                p.pan03_01.move("10.00","98","250","86",null,null);

                p.staLabel04_01.set_taborder("22");
                p.staLabel04_01.set_text("전화번호");
                p.staLabel04_01.set_cssclass("sta_WF_Label");
                p.staLabel04_01.move("10","98","100%","46",null,null);

                p.edt00_00_00_00.set_taborder("23");
                p.edt00_00_00_00.set_readonly("false");
                p.edt00_00_00_00.move("10.00","158","100%","40",null,null);

                p.pan03_02.set_taborder("24");
                p.pan03_02.set_type("vertical");
                p.pan03_02.set_flexgrow("1");
                p.pan03_02.move("10.00","98","250","86",null,null);

                p.pan03.set_taborder("3");
                p.pan03.set_horizontalgap("20");
                p.pan03.set_flexcrossaxiswrapalign("start");
                p.pan03.set_flexwrap("wrap");
                p.pan03.set_fittocontents("height");
                p.pan03.set_verticalgap("0");
                p.pan03.set_spacing("0px 20px 10px 20px");
                p.pan03.set_cssclass("pal_WF_DtlBg");
                p.pan03.move("0","60","100.00%","96",null,null);

                p.staLabel01_00_00.set_taborder("25");
                p.staLabel01_00_00.set_text("청구고객ID");
                p.staLabel01_00_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00_00.move("10","98","100%","46",null,null);

                p.edtClmCustCd.set_taborder("26");
                p.edtClmCustCd.set_readonly("true");
                p.edtClmCustCd.move("10.00","158","100%","40",null,null);

                p.pan01_01_00.set_taborder("27");
                p.pan01_01_00.set_type("vertical");
                p.pan01_01_00.set_flexgrow("1");
                p.pan01_01_00.move("10.00","98","250","86",null,null);

                p.staLabel01_00_01.set_taborder("28");
                p.staLabel01_00_01.set_text("대표고객ID");
                p.staLabel01_00_01.set_cssclass("sta_WF_Label");
                p.staLabel01_00_01.move("10","98","100%","46",null,null);

                p.pan01_01_01.set_taborder("29");
                p.pan01_01_01.set_type("vertical");
                p.pan01_01_01.set_flexgrow("1");
                p.pan01_01_01.move("10.00","98","250","86",null,null);

                p.staLabel03_00_00.set_taborder("30");
                p.staLabel03_00_00.set_text("사업자등록번호");
                p.staLabel03_00_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00_00.move("10","98","100%","46",null,null);

                p.pan02_00.set_taborder("31");
                p.pan02_00.set_type("vertical");
                p.pan02_00.set_flexgrow("1");
                p.pan02_00.move("10.00","98","250","86",null,null);

                p.staLabel04_00_00.set_taborder("32");
                p.staLabel04_00_00.set_text("팩스번호");
                p.staLabel04_00_00.set_cssclass("sta_WF_Label");
                p.staLabel04_00_00.move("10","98","100%","46",null,null);

                p.edt00_01_00_01.set_taborder("33");
                p.edt00_01_00_01.set_readonly("false");
                p.edt00_01_00_01.move("10.00","158","100%","40",null,null);

                p.pan03_01_00.set_taborder("34");
                p.pan03_01_00.set_type("vertical");
                p.pan03_01_00.set_flexgrow("1");
                p.pan03_01_00.move("10.00","98","250","86",null,null);

                p.edt00_00_00_00_00.set_taborder("35");
                p.edt00_00_00_00_00.set_readonly("false");
                p.edt00_00_00_00_00.move("10.00","158","100%","40",null,null);

                p.divEdtPop01.set_taborder("36");
                p.divEdtPop01.set_text("Div00");
                p.divEdtPop01.set_formscrollbartype("none none");
                p.divEdtPop01.set_formscrolltype("none");
                p.divEdtPop01.set_flexgrow("1");
                p.divEdtPop01.move("43.00","393","100%","40",null,null);

                p.calVldtyBgngYmd.set_taborder("37");
                p.calVldtyBgngYmd.set_dateformat("yyyy-MM-dd");
                p.calVldtyBgngYmd.move("0","0","150","40",null,null);

                p.calVldtyEndYmd.set_taborder("38");
                p.calVldtyEndYmd.set_dateformat("yyyy-MM-dd");
                p.calVldtyEndYmd.move("0","0","150","40",null,null);

                p.edt00_00_01_00.set_taborder("39");
                p.edt00_00_01_00.set_readonly("false");
                p.edt00_00_01_00.move("10.00","158","100%","40",null,null);

                p.edt00_00_01_00_00.set_taborder("40");
                p.edt00_00_01_00_00.set_readonly("false");
                p.edt00_00_01_00_00.move("10.00","158","100%","40",null,null);

                p.staLabel04_00_01.set_taborder("41");
                p.staLabel04_00_01.set_text("업체담당부서");
                p.staLabel04_00_01.set_cssclass("sta_WF_Label");
                p.staLabel04_00_01.move("10","98","100%","46",null,null);

                p.pan03_01_01.set_taborder("42");
                p.pan03_01_01.set_type("vertical");
                p.pan03_01_01.set_flexgrow("1");
                p.pan03_01_01.move("10.00","98","250","86",null,null);

                p.staLabel04_01_00.set_taborder("43");
                p.staLabel04_01_00.set_text("업체담당자명");
                p.staLabel04_01_00.set_cssclass("sta_WF_Label");
                p.staLabel04_01_00.move("10","98","100%","46",null,null);

                p.pan03_02_00.set_taborder("44");
                p.pan03_02_00.set_type("vertical");
                p.pan03_02_00.set_flexgrow("1");
                p.pan03_02_00.move("10.00","98","250","86",null,null);

                p.pan03_00.set_taborder("4");
                p.pan03_00.set_horizontalgap("20");
                p.pan03_00.set_flexcrossaxiswrapalign("start");
                p.pan03_00.set_flexwrap("wrap");
                p.pan03_00.set_fittocontents("height");
                p.pan03_00.set_verticalgap("0");
                p.pan03_00.set_spacing("0px 20px 10px 20px");
                p.pan03_00.set_cssclass("pal_WF_DtlBg");
                p.pan03_00.move("0","60","100.00%","96",null,null);

                p.pan03_02_00_00.set_taborder("45");
                p.pan03_02_00_00.set_type("vertical");
                p.pan03_02_00_00.set_flexgrow("1");
                p.pan03_02_00_00.move("10.00","98","250","1",null,null);

                p.staLabel00_02_00.set_taborder("46");
                p.staLabel00_02_00.set_text("사업자등록증");
                p.staLabel00_02_00.set_cssclass("sta_WF_Label");
                p.staLabel00_02_00.set_flexgrow("1");
                p.staLabel00_02_00.move("0","44","305","46",null,null);

                p.btn00.set_taborder("47");
                p.btn00.set_text("샘플 첨부파일명");
                p.btn00.set_fittocontents("width");
                p.btn00.set_visible("false");
                p.btn00.move("636.00","1295","137","40",null,null);

                p.btn_file_1_00_00.set_taborder("48");
                p.btn_file_1_00_00.set_text("파일선택");
                p.btn_file_1_00_00.set_cssclass("btn_WF_FileUp");
                p.btn_file_1_00_00.set_fittocontents("width");
                p.btn_file_1_00_00.move("686.00","831","116","40",null,null);

                p.panBtnFile00_00.set_taborder("49");
                p.panBtnFile00_00.set_flexgrow("1");
                p.panBtnFile00_00.set_flexcrossaxisalign("start");
                p.panBtnFile00_00.set_flexmainaxisalign("end");
                p.panBtnFile00_00.set_horizontalgap("10");
                p.panBtnFile00_00.move("317.00","831","485","46",null,null);

                p.panTitle.set_taborder("50");
                p.panTitle.set_cssclass("pan_WF_FileTitle");
                p.panTitle.move("0","124","100%","46",null,null);

                p.Static00_01.set_taborder("51");
                p.Static00_01.set_text("파일수 : ");
                p.Static00_01.set_fittocontents("width");
                p.Static00_01.move("88","123","48","46",null,null);

                p.staFileCnt.set_taborder("52");
                p.staFileCnt.set_text("0");
                p.staFileCnt.move("165","143","9","46",null,null);

                p.Static02.set_taborder("53");
                p.Static02.set_text("개");
                p.Static02.set_fittocontents("width");
                p.Static02.move("293","131","13","46",null,null);

                p.panFileNum.set_taborder("54");
                p.panFileNum.set_flexgrow("1");
                p.panFileNum.set_horizontalgap("4");
                p.panFileNum.move("20","190","305","46",null,null);

                p.btnAllDelFile.set_taborder("55");
                p.btnAllDelFile.set_text("전체파일삭제");
                p.btnAllDelFile.set_cssclass("btn_WF_FileDel");
                p.btnAllDelFile.set_fittocontents("width");
                p.btnAllDelFile.set_visible("false");
                p.btnAllDelFile.move("325.00","3","125","40",null,null);

                p.panBtnDel.set_taborder("56");
                p.panBtnDel.set_flexcrossaxisalign("center");
                p.panBtnDel.set_flexmainaxisalign("end");
                p.panBtnDel.set_flexgrow("1");
                p.panBtnDel.move("517","141","305","46",null,null);

                p.Panel00_04.set_taborder("57");
                p.Panel00_04.set_visible("true");
                p.Panel00_04.move("20","51","100%","46",null,null);

                p.grdFileList.set_taborder("58");
                p.grdFileList.set_binddataset("dsFile");
                p.grdFileList.set_autofittype("col");
                p.grdFileList.set_cssclass("grd_WF_FileAdd");
                p.grdFileList.move("20.00","114","100%","100",null,null);

                p.panFile.set_taborder("5");
                p.panFile.set_fittocontents("height");
                p.panFile.set_spacing("10px 20px 10px 20px");
                p.panFile.set_flexwrap("wrap");
                p.panFile.set_cssclass("pal_WF_DtlBg");
                p.panFile.set_verticalgap("4");
                p.panFile.move("0","42","100.00%","221",null,null);

                p.divEdtPop01_00.set_taborder("59");
                p.divEdtPop01_00.set_text("Div00");
                p.divEdtPop01_00.set_formscrollbartype("none none");
                p.divEdtPop01_00.set_formscrolltype("none");
                p.divEdtPop01_00.set_flexgrow("1");
                p.divEdtPop01_00.move("43.00","393","100%","40",null,null);

                p.divEdtPop01_01.set_taborder("60");
                p.divEdtPop01_01.set_text("Div00");
                p.divEdtPop01_01.set_formscrollbartype("none none");
                p.divEdtPop01_01.set_formscrolltype("none");
                p.divEdtPop01_01.set_flexgrow("1");
                p.divEdtPop01_01.move("43.00","393","100%","40",null,null);

                p.divEdtPop01_02.set_taborder("61");
                p.divEdtPop01_02.set_text("Div00");
                p.divEdtPop01_02.set_formscrollbartype("none none");
                p.divEdtPop01_02.set_formscrolltype("none");
                p.divEdtPop01_02.set_flexgrow("1");
                p.divEdtPop01_02.move("43.00","393","100%","40",null,null);
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
                p.staLabel00_02_00.set_fittocontents("width");
                p.staLabel00_02_00.move("0","44","87","46",null,null);
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
                p.Div00.move("125.00","10","100%","701",null,null);
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
            obj.set_horizontalgap("20");
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
            obj.set_horizontalgap("20");
            this.divPopBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1000,781,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("계약청구 고객정보 등록/수정");

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_fittocontents("none");
                p.divForm.set_formscrollbartype("default default");
                p.divForm.set_formscrolltype("both");
                p.divForm.move("0","0",null,null,"0","70");

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

                p.divPopBtn.set_taborder("2");
                p.divPopBtn.set_text("Div00");
                p.divPopBtn.set_cssclass("div_WF_PopBtn");
                p.divPopBtn.move("0",null,null,"60","0","0");
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
                p.divPopBtn.move("0",null,null,"60","0","0");

                p.divForm.set_fittocontents("none");
                p.divForm.move("0","0",null,null,"0","60");
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.Div00.form.divEdtPop01.form.edtCoId","value","dsGet","rprsCustCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.Div00.form.divEdtPop01_00.form.edtCtrtNo","value","dsGet","ctrtNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.Div00.form.divEdtPop01_01.form.edtDept","value","dsGet","bzentyTkcgDept");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.Div00.form.divEdtPop01_02.form.edtUser","value","dsGet","bzentyPic");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.Div00.form.edtCtrtNm","value","dsGet","ctrtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.Div00.form.edt00_00_01_00","value","dsGet","custNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.Div00.form.edt00_00_01","value","dsGet","rprsvNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divForm.form.Div00.form.edt00_00_01_00_00","value","dsGet","brno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divForm.form.Div00.form.edt00_00_00_00_00","value","dsGet","crno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divForm.form.Div00.form.edt00_00_00_00","value","dsGet","mblTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divForm.form.Div00.form.edt00_01_00_01","value","dsGet","fxno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divForm.form.Div00.form.calVldtyBgngYmd","value","dsGet","vldtyBgngYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divForm.form.Div00.form.calVldtyEndYmd","value","dsGet","vldtyEndYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divForm.form.Div00.form.edtClmCustCd","value","dsGet","clmCustCd");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("COM023P03.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	COM023P03.xfdl
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
        this.clmCustCd;
        this.ctrtNo;

        this.validateColumn = [];

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수

        	this.validateColumn.push({"title" : "계약번호", "com": this.divForm.form.Div00.form.divEdtPop01_00.form.edtCtrtNo});
        	this.validateColumn.push({"title" : "효력시작일", "com": this.divForm.form.Div00.form.calVldtyBgngYmd});
        	this.validateColumn.push({"title" : "효력종료일", "com": this.divForm.form.Div00.form.calVldtyEndYmd});

        	if(this.opener) {
        		this.clmCustCd = this.getOwnerFrame().clmCustCd;
        		this.ctrtNo = this.getOwnerFrame().ctrtNo;
        		this.dsSearch.setColumn(0, "clmCustCd", this.clmCustCd);
        		this.dsSearch.setColumn(0, "ctrtNo", this.ctrtNo);
        	} else {
        		if(this.gfnIsNull(this.gfnGetArgument("PARM")) != true) {
        			this.param = this.gfnGetArgument("PARM");
        			if(this.gfnIsNull(this.param.clmCustCd) != true) {
        				this.clmCustCd = this.param.clmCustCd;
        			}
        			if(this.gfnIsNull(this.param.ctrtNo) != true) {
        				this.ctrtNo = this.param.ctrtNo;
        			}
        		}
        	}

        	if(this.gfnIsNull(this.clmCustCd)) {
        		this.dsGet.addRow();
        		this.dsGet.setColumn(0, "ctrtSe", "I");
        		this.dsGet.setColumn(0, "autoMnlRegSe", "N");
        	} else {
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
        	var strSvcUrl   = "crtr/ctrtClmCustInfoInq.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsGet=dsGet dsFile=dsFile";
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
        };

        // 데이터 저장
        this.saveTransaction = function()
        {
        	var strSvcId    = "save";
        	var strSvcUrl   = "crtr/ctrtClmCustInfoStrg.do";
        	var inData      = "dsGet=dsGet:A dsFile=dsFile:U";
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
        			if(this.dsFile.getRowCount() > 0) {
        				this.divForm.form.Div00.form.staFileCnt.text = this.dsFile.getRowCount();
        				this.divForm.form.Div00.form.btnAllDelFile.visible = true;

        				// 데이터 조회 후 파일리스트에 셋팅
        				this.gfnDownloadSetting(this.RaonkUpload, this.dsFile);
        			}
        			break;
        		case "save" :
        			this.gfnAlertMsg("save", "MSG_001", "", "msgCallback");
        			break;
        		case "uploadComplete":
        			// 파일 업로드가 완료 된 후 첨부파일 과 같이 데이터 저장
         			console.log(this.dsFile.saveJSON());
        			if(this.gfnIsNull(this.dsGet.getColumn(0, "atflMngNo")) == true && this.gfnIsNull(this.dsFile.getColumn(0, "atflMngNo")) != true) {
        				this.dsGet.setColumn(0, "atflMngNo", this.dsFile.getColumn(0, "atflMngNo"));
        			}
        			this.saveTransaction();
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
        	if(sPopupId == "save_file") {
        		if(oRtn.result == "Y")
        		{
        			var obj = {
        				"atchFileId" : "",			// 기존 첨부파일 있을 경우 입력
        				"bsnsSeCd" : "COM",			// 업무구분코드
        				"prgrmId" : "COM023P03" 	// 프로그램ID (화면 ID)
        			}

        			var str = JSON.stringify(obj);
        			this.RaonkUpload.AddFormData('params', str);
        			this.RaonkUpload.Transfer();
        		}
        	}
        	else if(sPopupId == "file_del") {
        		this.gfnDeleteFile(this.RaonkUpload, this.dsFile, oRtn.paramArg);
        	}
        	else if(sPopupId == "file_all_del") {
        		if(oRtn.result == "Y") {
        			this.gfnDeleteAllFile(this.RaonkUpload, this.dsFile);
        		}
        	}
        	else if(sPopupId == "save") {
        		var arr = {"saveFlag" : "Y"};
        		this.close(JSON.stringify(arr));
        // 		var cMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        // 		this.gfnCloseMenu(cMenuId);
        // 		this._gfnOpenMenu(cMenuId.substring(0,14),"",true);
        	}
        };

        this.fnPopupCallback = function(sPopupId, sRtn)
        {
        	if(sPopupId =="coIdSearchPopup") {
        		if (this.gfnIsNull(sRtn)) return;
        		var objRtn = JSON.parse(sRtn);
        		this.dsGet.setColumn(0, "rprsCustCd", objRtn.rprsCustCd);
        		this.dsGet.setColumn(0, "rprsCustNm", objRtn.rprsCustNm);
        		this.dsGet.setColumn(0, "rprsvNm", objRtn.rprsvNm);
        		this.dsGet.setColumn(0, "brno", objRtn.brno);
        		this.dsGet.setColumn(0, "crno", objRtn.crno);
        		this.dsGet.setColumn(0, "rprsTelno", objRtn.rprsTelno);
        		this.dsGet.setColumn(0, "fxno", objRtn.fxno);
        	}
        	else if(sPopupId == "ctrtSearchPopup") {
        		if (this.gfnIsNull(sRtn)) return;
        		var objRtn = JSON.parse(sRtn);
        		this.dsGet.setColumn(0, "ctrtNo", objRtn.ctrtNo);
        		this.dsGet.setColumn(0, "ctrtNm", objRtn.ctrtNm);
        	}
        	else if(sPopupId == "deptSearchPopup") {
        		if (this.gfnIsNull(sRtn)) return;
        		var objRtn = JSON.parse(sRtn);
        		this.dsGet.setColumn(0, "bzentyTkcgDept", objRtn.deptNm);
        	}
        	else if(sPopupId == "userSearchPopup") {
        		if (this.gfnIsNull(sRtn)) return;
        		var objRtn = JSON.parse(sRtn);
        		var empArr = objRtn.empArr;
        		this.dsGet.setColumn(0, "bzentyPic", empArr[0].userNm);
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divForm_Div00_sta00_onclick = function(obj,e)
        {

        };

        // 계약정보 팝업
        this.divForm_Div00_divEdtPop01_00_btnPop_onclick = function(obj,e)
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

        // 회사 목록 팝업
        this.divForm_Div00_divEdtPop01_btnPop_onclick = function(obj,e)
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
        this.divForm_Div00_divEdtPop01_01_btnPop_onclick = function(obj,e)
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

        // 담당자 정보 팝업
        this.divForm_Div00_divEdtPop01_02_btnPop_onclick = function(obj,e)
        {
        	var sTitle = "사용자검색";
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

        	this.gfnOpenPopup("userSearchPopup", "work::COM/crtr/COM100P02.xfdl", objArg, sPopupCallBack, objOption);
        };

        // 파일 업로드
        this.divForm_Div00_btn_file_1_00_00_onclick = function(obj,e)
        {
        	// 데이터의 첨부파일 관리번호 입력 컬럼명
        	this.gvUploadCategory = "userBrFile";		// 컬럼ID
        	this.RaonkUpload.OpenFileDialog();
        };

        this.RaonkUpload_RAONKUPLOAD_BeforeAddFile = function(obj, paramObj)
        {
        // 	if(this.gvUploadCategory == 'bizFile')
        // 	{
        // 		if(this.dsFile1.rowcount >= 1)
        // 		{
        // 			this.gfnAlertMsg("MSG_001", "msgCallback");
        // 			this.gfnAlertMsg("beforeAddFile", "파일 1개만 업로드 가능 합니다.", "msgCallback");
        // 			return false;
        // 		}
        // 	}
        //
        // 	return true;
        };

        this.RaonkUpload00_RAONKUPLOAD_AfterAddFile = function(obj, paramObj)
        {
        	// 파일에 카테고리 셋팅
        	//this.RaonkUpload.SetFileCustomValue(-1, this.gvUploadCategory);
        	var sRow = this.dsFile.findRow("colId", this.gvUploadCategory);
        	var atflMngNo = this.dsFile.getColumn(sRow, "atflMngNo");

        	var cvObj = {
        		"strCustomValue" : this.gvUploadCategory,
        		"atflMngNo" : atflMngNo
        	};
        	this.RaonkUpload.SetFileCustomValue(-1, JSON.stringify(cvObj));

        	var nIdx = this.dsFile.addRow();
        	this.dsFile.setColumn(nIdx, "fullName", paramObj.userdata.strName + ' (' + paramObj.userdata.nSize + ')');
        	this.dsFile.setColumn(nIdx, "orgnlFileNm", paramObj.userdata.strName);
        	this.dsFile.setColumn(nIdx, "fileSz", paramObj.userdata.nSize);
        	this.dsFile.setColumn(nIdx, "atflMngSno", paramObj.userdata.nIndex);
        	this.dsFile.setColumn(nIdx, "colId", this.gvUploadCategory);

        	this.divForm.form.Div00.form.staFileCnt.text = this.dsFile.getRowCount();

        	if(this.gfnIsNull(this.dsGet.getColumn(0, "atflMngSno")) != true) {
        		this.dsFile.setColumn(nIdx, "atflMngSno", this.dsGet.getColumn(0, "atflMngSno"));
        	} else {
        		this.dsFile.setColumn(nIdx, "atflMngSno", paramObj.userdata.nIndex);
        	}
        };

        // 페이지에서 라온K업로드 솔루션의 생성 이벤트
        this.RaonkUpload00_RAONKUPLOAD_CreationComplete = function(obj,  paramObj)
        {
        	// 업로드 솔루션이 초기 생성시 업로드 할 경로를 지정해야 한다.
        	// /CMM/YYYY/MM/DD/  <<== CMM은 업무별 폴더 지정이고 기본적으로 /년도/월/일 의 폴더 구조를 갖는다.
        	this.RaonkUpload.SetConfig('FolderNameRule', '/COM/YYYY/MM/DD/');
        };

        // 파일 업로드 완료 이벤트
        this.RaonkUpload00_RAONKUPLOAD_UploadComplete = function(obj, paramObj)
        {
        	var allListArray = this.RaonkUpload.GetListInfo("json");
        	// 파일 업로드 후 첨부파일관리번호를 얻기 위한 함수
        	this.gfnUploadComplete("uploadComplete", allListArray, "dsFile", "fnCallback");
        };

        // 파일 업로드 시 에러 발생 이벤트
        this.divForm_Div04_RaonkUpload_RAONKUPLOAD_OnError = function(obj, paramObj)
        {
        	console.log(paramObj);
        };

        this.divForm_Div00_grdFileList_oncellclick = function(obj,e)
        {
        	if(e.col == 1) {	// 삭제 버튼 클릭
        		var param = {
        			"row" : e.row,
        			"col" : e.col
        		};
        		this.gfnConfirmMsg("file_del", "MSG_002", "msgCallback", ["확인", "취소"], ["Y", "N"], param);
        	}
        	else if(e.col == 0) { // 파일명 클릭
        		this.gfnSelectFile(this.RaonkUpload, this.dsFile, e);
        	}
        };

        this.divForm_Div00_grdFileList_oncelldblclick = function(obj,e)
        {
        	if(e.col == 0) {	// 파일명을 더블클릭 시 다운로드
        		this.gfnDownloadFile(this.RaonkUpload, this.dsFile, e);
        	}
        };

        this.divForm_Div00_btn_del_file_1_onclick = function(obj,e)
        {
        	this.gfnConfirmMsg("file_all_del", "MSG_005", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        };

        // 저장 - 파일 저장 후 처리
        this.divForm_divPopBtn_btnSave_onclick = function(obj,e)
        {
        	if(this.gfnDsIsUpdated(this.dsGet) != true && this.gfnDsIsUpdated(this.dsFile) != true) {
        		this.gfnAlertMsg("msg", "MSG_004");
        	} else {
        		if(this.gfnDsIsValidated(this.validateColumn)) {
        			this.gfnConfirmMsg("save_file", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.Div00.form.divEdtPop01.form.btnPop.addEventHandler("onclick",this.divForm_Div00_divEdtPop01_btnPop_onclick,this);
            this.divForm.form.Div00.form.btn_file_1_00_00.addEventHandler("onclick",this.divForm_Div00_btn_file_1_00_00_onclick,this);
            this.divForm.form.Div00.form.btnAllDelFile.addEventHandler("onclick",this.divForm_Div00_btn_del_file_1_onclick,this);
            this.divForm.form.Div00.form.grdFileList.addEventHandler("oncellclick",this.divForm_Div00_grdFileList_oncellclick,this);
            this.divForm.form.Div00.form.grdFileList.addEventHandler("oncelldblclick",this.divForm_Div00_grdFileList_oncelldblclick,this);
            this.divForm.form.Div00.form.divEdtPop01_00.form.btnPop.addEventHandler("onclick",this.divForm_Div00_divEdtPop01_00_btnPop_onclick,this);
            this.divForm.form.Div00.form.divEdtPop01_01.form.btnPop.addEventHandler("onclick",this.divForm_Div00_divEdtPop01_01_btnPop_onclick,this);
            this.divForm.form.Div00.form.divEdtPop01_02.form.btnPop.addEventHandler("onclick",this.divForm_Div00_divEdtPop01_02_btnPop_onclick,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterAddFile",this.RaonkUpload00_RAONKUPLOAD_AfterAddFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_CreationComplete",this.RaonkUpload00_RAONKUPLOAD_CreationComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_UploadComplete",this.RaonkUpload00_RAONKUPLOAD_UploadComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_OnError",this.divForm_Div04_RaonkUpload_RAONKUPLOAD_OnError,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_BeforeAddFile",this.RaonkUpload_RAONKUPLOAD_BeforeAddFile,this);
            this.divPopBtn.form.btnSave.addEventHandler("onclick",this.divForm_divPopBtn_btnSave_onclick,this);
        };
        this.loadIncludeScript("COM023P03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
