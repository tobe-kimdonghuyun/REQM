(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM001P02");
            this.set_titletext("사업자등록증_회사정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,780);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGet", this);
            obj._setContents("<ColumnInfo><Column id=\"coId\" type=\"STRING\" size=\"256\"/><Column id=\"coNm\" type=\"STRING\" size=\"256\"/><Column id=\"rprsvNm\" type=\"STRING\" size=\"256\"/><Column id=\"rprsTelno\" type=\"STRING\" size=\"256\"/><Column id=\"brno\" type=\"STRING\" size=\"256\"/><Column id=\"coZip\" type=\"STRING\" size=\"256\"/><Column id=\"coAddr\" type=\"STRING\" size=\"256\"/><Column id=\"coDtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"flwMdngEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"bulicAtflMngNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Div("Div00","125.00","10","100%","770",null,null,null,null,null,null,this.divForm.form);
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
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan00_02\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staCoId","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("6");
            obj.set_text("업체ID");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_01","10.00","98","250","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("7");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCoId\"/><PanelItem id=\"PanelItem03\" componentid=\"edtCoId\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtCoId","75","23","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("48");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_readonly("true");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staCoNm","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("8");
            obj.set_text("업체명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtCoNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_02","10.00","98","250","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("10");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCoNm\"/><PanelItem id=\"PanelItem01\" componentid=\"edtCoNm\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staRprsvNm","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("11");
            obj.set_text("대표자명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan01_01","10.00","98","250","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("12");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staRprsvNm\"/><PanelItem id=\"PanelItem02\" componentid=\"edtRprsvNm\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staRprsTelno","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("13");
            obj.set_text("대표전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan01_02","10.00","98","250","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("14");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staRprsTelno\"/><PanelItem id=\"PanelItem02\" componentid=\"edtRprsTelno\"/></Contents>");
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
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan01_02\"/><PanelItem id=\"PanelItem03\" componentid=\"pan01_03\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan02","0","60","100.00%","142",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("2");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staAddr\"/><PanelItem id=\"PanelItem02\" componentid=\"panAddress\"/><PanelItem id=\"PanelItem03\" componentid=\"edtAddrDtl\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staBrno","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("15");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan01_03","10.00","98","250","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("16");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staBrno\"/><PanelItem id=\"PanelItem02\" componentid=\"edtBrno\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staUseYn","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("17");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan03_01","10.00","98","250","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("18");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staUseYn\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoUseYn\"/></Contents>");
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
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"pan03_01\"/><PanelItem id=\"PanelItem03\" componentid=\"pan03_02\"/><PanelItem id=\"PanelItem01\" componentid=\"pan03_03\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staCtrtTrgtYn","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("19");
            obj.set_text("계약대상여부");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan03_02","10.00","98","250","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("20");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCtrtTrgtYn\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoCtrtTrgtYn\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtBrno","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("21");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Calendar("calCtrtEndYmd","0","0","150","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("22");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("true");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Calendar("calFlwMdngEndYmd","0","0","150","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("23");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("true");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staCtrtEndYmd","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("24");
            obj.set_text("계약종료일");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan04_01","10.00","98","250","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("25");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCtrtEndYmd\"/><PanelItem id=\"PanelItem02\" componentid=\"calCtrtEndYmd\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staFlwMdngEndYmd","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("26");
            obj.set_text("하자보수종료일");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan04_02","10.00","98","250","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("27");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staFlwMdngEndYmd\"/><PanelItem id=\"PanelItem02\" componentid=\"calFlwMdngEndYmd\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan04","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("4");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan04_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan04_02\"/><PanelItem id=\"PanelItem03\" componentid=\"pan04_03\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staBulic","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("28");
            obj.set_text("사업자등록증");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("panBtnFile","317.00","831","485","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("29");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staBulic\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("panTitle","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("30");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"panBtnFile\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("31");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staFileCnt","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("32");
            obj.set_text("0");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("33");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("panFileNum","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("34");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static01\"/><PanelItem id=\"PanelItem01\" componentid=\"staFileCnt\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("panFile01_01","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("35");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Grid("grdFileList","20.00","114","100%","100",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("36");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("panFile01","0","42","100.00%","221",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("5");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"panFile01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"grdFileList\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtRprsvNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("37");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtRprsTelno","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("38");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan04_03","10.00","98","250","1",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("39");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Radio("rdoUseYn","51","580","100.00%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("40");
            obj.set_fittocontents("width");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_Div00_form_rdoUseYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div00_form_rdoUseYn_innerdataset", obj);
            divForm_form_Div00_form_rdoUseYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div00_form_rdoUseYn_innerdataset);
            obj.set_text("예");
            obj.set_value("Y");
            obj.set_index("0");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Radio("rdoCtrtTrgtYn","51","580","100.00%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("41");
            obj.set_fittocontents("width");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_Div00_form_rdoCtrtTrgtYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div00_form_rdoCtrtTrgtYn_innerdataset", obj);
            divForm_form_Div00_form_rdoCtrtTrgtYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div00_form_rdoCtrtTrgtYn_innerdataset);
            obj.set_text("예");
            obj.set_value("Y");
            obj.set_index("0");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staAddr","0.00","0","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("42");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Div("divEdtPop00","780.00","635","305","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("43");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtZip","0","0",null,"40","0",null,null,null,null,null,this.divForm.form.Div00.form.divEdtPop00.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_readonly("true");
            this.divForm.form.Div00.form.divEdtPop00.addChild(obj.name, obj);

            obj = new Button("btnPop","edtZip:-40","0","40","40",null,null,null,null,null,null,this.divForm.form.Div00.form.divEdtPop00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            this.divForm.form.Div00.form.divEdtPop00.addChild(obj.name, obj);

            obj = new Edit("edtAddr","360","637","305","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("44");
            obj.set_readonly("true");
            obj.set_flexgrow("2");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("panAddress","200","641","100%","45",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("45");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divEdtPop00\"/><PanelItem id=\"PanelItem02\" componentid=\"edtAddr\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtAddrDtl","0.00","46","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("46");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan03_03","10.00","98","250","1",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("47");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
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
            //-- Default Layout : this.divForm.form.Div00.form.divEdtPop00.form
            obj = new Layout("default","",0,0,this.divForm.form.Div00.form.divEdtPop00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.edtZip.set_taborder("0");
                p.edtZip.set_cssclass("edt_WF_EdtSch");
                p.edtZip.set_readonly("true");
                p.edtZip.move("0","0",null,"40","0",null);

                p.btnPop.set_taborder("1");
                p.btnPop.set_cssclass("btn_WF_EdtSch");
                p.btnPop.move("edtZip:-40","0","40","40",null,null);
            	}
            );
            this.divForm.form.Div00.form.divEdtPop00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div00.form.divEdtPop00.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div00.form.divEdtPop00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.Div00.form.divEdtPop00.form.addLayout(obj.name, obj);
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

                p.staCoId.set_taborder("6");
                p.staCoId.set_text("업체ID");
                p.staCoId.set_cssclass("sta_WF_Label");
                p.staCoId.move("10","98","100%","46",null,null);

                p.pan00_01.set_taborder("7");
                p.pan00_01.set_type("vertical");
                p.pan00_01.set_flexgrow("1");
                p.pan00_01.set_minwidth("");
                p.pan00_01.move("10.00","98","250","86",null,null);

                p.edtCoId.set_taborder("48");
                p.edtCoId.set_cssclass("edt_WF_EdtSch");
                p.edtCoId.set_readonly("true");
                p.edtCoId.move("75","23","100%","40",null,null);

                p.staCoNm.set_taborder("8");
                p.staCoNm.set_text("업체명");
                p.staCoNm.set_cssclass("sta_WF_Label");
                p.staCoNm.move("10","98","100%","46",null,null);

                p.edtCoNm.set_taborder("9");
                p.edtCoNm.set_readonly("true");
                p.edtCoNm.move("10.00","158","100%","40",null,null);

                p.pan00_02.set_taborder("10");
                p.pan00_02.set_type("vertical");
                p.pan00_02.set_flexgrow("1");
                p.pan00_02.set_minwidth("");
                p.pan00_02.move("10.00","98","250","86",null,null);

                p.staRprsvNm.set_taborder("11");
                p.staRprsvNm.set_text("대표자명");
                p.staRprsvNm.set_cssclass("sta_WF_Label");
                p.staRprsvNm.move("10","98","100%","46",null,null);

                p.pan01_01.set_taborder("12");
                p.pan01_01.set_type("vertical");
                p.pan01_01.set_flexgrow("1");
                p.pan01_01.move("10.00","98","250","86",null,null);

                p.staRprsTelno.set_taborder("13");
                p.staRprsTelno.set_text("대표전화번호");
                p.staRprsTelno.set_cssclass("sta_WF_Label");
                p.staRprsTelno.move("10","98","100%","46",null,null);

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

                p.pan02.set_taborder("2");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.move("0","60","100.00%","142",null,null);

                p.staBrno.set_taborder("15");
                p.staBrno.set_text("사업자등록번호");
                p.staBrno.set_cssclass("sta_WF_Label");
                p.staBrno.move("10","98","100%","46",null,null);

                p.pan01_03.set_taborder("16");
                p.pan01_03.set_type("vertical");
                p.pan01_03.set_flexgrow("1");
                p.pan01_03.move("10.00","98","250","86",null,null);

                p.staUseYn.set_taborder("17");
                p.staUseYn.set_text("사용여부");
                p.staUseYn.set_cssclass("sta_WF_Label");
                p.staUseYn.move("10","98","100%","46",null,null);

                p.pan03_01.set_taborder("18");
                p.pan03_01.set_type("vertical");
                p.pan03_01.set_flexgrow("1");
                p.pan03_01.move("10.00","98","250","86",null,null);

                p.pan03.set_taborder("3");
                p.pan03.set_horizontalgap("20");
                p.pan03.set_flexcrossaxiswrapalign("start");
                p.pan03.set_flexwrap("wrap");
                p.pan03.set_fittocontents("height");
                p.pan03.set_verticalgap("0");
                p.pan03.set_spacing("0px 20px 10px 20px");
                p.pan03.set_cssclass("pal_WF_DtlBg");
                p.pan03.move("0","60","100.00%","96",null,null);

                p.staCtrtTrgtYn.set_taborder("19");
                p.staCtrtTrgtYn.set_text("계약대상여부");
                p.staCtrtTrgtYn.set_cssclass("sta_WF_Label");
                p.staCtrtTrgtYn.move("10","98","100%","46",null,null);

                p.pan03_02.set_taborder("20");
                p.pan03_02.set_type("vertical");
                p.pan03_02.set_flexgrow("1");
                p.pan03_02.move("10.00","98","250","86",null,null);

                p.edtBrno.set_taborder("21");
                p.edtBrno.set_readonly("true");
                p.edtBrno.move("10.00","158","100%","40",null,null);

                p.calCtrtEndYmd.set_taborder("22");
                p.calCtrtEndYmd.set_dateformat("yyyy-MM-dd");
                p.calCtrtEndYmd.set_readonly("true");
                p.calCtrtEndYmd.move("0","0","150","40",null,null);

                p.calFlwMdngEndYmd.set_taborder("23");
                p.calFlwMdngEndYmd.set_dateformat("yyyy-MM-dd");
                p.calFlwMdngEndYmd.set_readonly("true");
                p.calFlwMdngEndYmd.move("0","0","150","40",null,null);

                p.staCtrtEndYmd.set_taborder("24");
                p.staCtrtEndYmd.set_text("계약종료일");
                p.staCtrtEndYmd.set_cssclass("sta_WF_Label");
                p.staCtrtEndYmd.move("10","98","100%","46",null,null);

                p.pan04_01.set_taborder("25");
                p.pan04_01.set_type("vertical");
                p.pan04_01.set_flexgrow("1");
                p.pan04_01.move("10.00","98","250","86",null,null);

                p.staFlwMdngEndYmd.set_taborder("26");
                p.staFlwMdngEndYmd.set_text("하자보수종료일");
                p.staFlwMdngEndYmd.set_cssclass("sta_WF_Label");
                p.staFlwMdngEndYmd.move("10","98","100%","46",null,null);

                p.pan04_02.set_taborder("27");
                p.pan04_02.set_type("vertical");
                p.pan04_02.set_flexgrow("1");
                p.pan04_02.move("10.00","98","250","86",null,null);

                p.pan04.set_taborder("4");
                p.pan04.set_horizontalgap("20");
                p.pan04.set_flexcrossaxiswrapalign("start");
                p.pan04.set_flexwrap("wrap");
                p.pan04.set_fittocontents("height");
                p.pan04.set_verticalgap("0");
                p.pan04.set_spacing("0px 20px 10px 20px");
                p.pan04.set_cssclass("pal_WF_DtlBg");
                p.pan04.move("0","60","100.00%","96",null,null);

                p.staBulic.set_taborder("28");
                p.staBulic.set_text("사업자등록증");
                p.staBulic.set_cssclass("sta_WF_Label");
                p.staBulic.set_flexgrow("1");
                p.staBulic.move("0","44","305","46",null,null);

                p.panBtnFile.set_taborder("29");
                p.panBtnFile.set_flexgrow("1");
                p.panBtnFile.set_flexcrossaxisalign("start");
                p.panBtnFile.set_flexmainaxisalign("end");
                p.panBtnFile.set_horizontalgap("10");
                p.panBtnFile.move("317.00","831","485","46",null,null);

                p.panTitle.set_taborder("30");
                p.panTitle.set_cssclass("pan_WF_FileTitle");
                p.panTitle.move("0","124","100%","46",null,null);

                p.Static01.set_taborder("31");
                p.Static01.set_text("파일수 : ");
                p.Static01.set_fittocontents("width");
                p.Static01.move("88","123","48","46",null,null);

                p.staFileCnt.set_taborder("32");
                p.staFileCnt.set_text("0");
                p.staFileCnt.move("165","143","9","46",null,null);

                p.Static02.set_taborder("33");
                p.Static02.set_text("개");
                p.Static02.set_fittocontents("width");
                p.Static02.move("293","131","13","46",null,null);

                p.panFileNum.set_taborder("34");
                p.panFileNum.set_flexgrow("1");
                p.panFileNum.set_horizontalgap("4");
                p.panFileNum.move("20","190","305","46",null,null);

                p.panFile01_01.set_taborder("35");
                p.panFile01_01.set_visible("true");
                p.panFile01_01.move("20","51","100%","46",null,null);

                p.grdFileList.set_taborder("36");
                p.grdFileList.set_binddataset("dsFile");
                p.grdFileList.set_autofittype("col");
                p.grdFileList.set_cssclass("grd_WF_FileAdd");
                p.grdFileList.move("20.00","114","100%","100",null,null);

                p.panFile01.set_taborder("5");
                p.panFile01.set_fittocontents("height");
                p.panFile01.set_spacing("10px 20px 10px 20px");
                p.panFile01.set_flexwrap("wrap");
                p.panFile01.set_cssclass("pal_WF_DtlBg");
                p.panFile01.set_verticalgap("4");
                p.panFile01.move("0","42","100.00%","221",null,null);

                p.edtRprsvNm.set_taborder("37");
                p.edtRprsvNm.set_readonly("true");
                p.edtRprsvNm.move("10.00","158","100%","40",null,null);

                p.edtRprsTelno.set_taborder("38");
                p.edtRprsTelno.set_readonly("true");
                p.edtRprsTelno.move("10.00","158","100%","40",null,null);

                p.pan04_03.set_taborder("39");
                p.pan04_03.set_type("vertical");
                p.pan04_03.set_flexgrow("1");
                p.pan04_03.move("10.00","98","250","1",null,null);

                p.rdoUseYn.set_taborder("40");
                p.rdoUseYn.set_fittocontents("width");
                p.rdoUseYn.set_direction("vertical");
                p.rdoUseYn.set_innerdataset(divForm_form_Div00_form_rdoUseYn_innerdataset);
                p.rdoUseYn.set_codecolumn("codecolumn");
                p.rdoUseYn.set_datacolumn("datacolumn");
                p.rdoUseYn.set_value("Y");
                p.rdoUseYn.set_index("0");
                p.rdoUseYn.move("51","580","100.00%","40",null,null);

                p.rdoCtrtTrgtYn.set_taborder("41");
                p.rdoCtrtTrgtYn.set_fittocontents("width");
                p.rdoCtrtTrgtYn.set_direction("vertical");
                p.rdoCtrtTrgtYn.set_innerdataset(divForm_form_Div00_form_rdoCtrtTrgtYn_innerdataset);
                p.rdoCtrtTrgtYn.set_codecolumn("codecolumn");
                p.rdoCtrtTrgtYn.set_datacolumn("datacolumn");
                p.rdoCtrtTrgtYn.set_value("Y");
                p.rdoCtrtTrgtYn.set_index("0");
                p.rdoCtrtTrgtYn.move("51","580","100.00%","40",null,null);

                p.staAddr.set_taborder("42");
                p.staAddr.set_text("주소");
                p.staAddr.set_cssclass("sta_WF_Label");
                p.staAddr.move("0.00","0","100%","46",null,null);

                p.divEdtPop00.set_taborder("43");
                p.divEdtPop00.set_text("Div00");
                p.divEdtPop00.set_formscrollbartype("none none");
                p.divEdtPop00.set_formscrolltype("none");
                p.divEdtPop00.set_flexgrow("1");
                p.divEdtPop00.move("780.00","635","305","40",null,null);

                p.edtAddr.set_taborder("44");
                p.edtAddr.set_readonly("true");
                p.edtAddr.set_flexgrow("2");
                p.edtAddr.move("360","637","305","40",null,null);

                p.panAddress.set_taborder("45");
                p.panAddress.set_horizontalgap("10");
                p.panAddress.move("200","641","100%","45",null,null);

                p.edtAddrDtl.set_taborder("46");
                p.edtAddrDtl.set_readonly("true");
                p.edtAddrDtl.move("0.00","46","100%","40",null,null);

                p.pan03_03.set_taborder("47");
                p.pan03_03.set_type("vertical");
                p.pan03_03.set_flexgrow("1");
                p.pan03_03.move("10.00","98","250","1",null,null);
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
                p.staBulic.set_fittocontents("width");
                p.staBulic.move("0","44","87","46",null,null);
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
                p.Div00.move("125.00","10","100%","770",null,null);
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
            obj = new Layout("default","Desktop_screen",1000,780,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("사업자등록증_회사정보");

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
            obj = new BindItem("item4","divForm.form.Div00.form.edtCoNm","value","dsGet","coNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divForm.form.Div00.form.edtBrno","value","dsGet","brno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divForm.form.Div00.form.calCtrtEndYmd","value","dsGet","ctrtEndYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divForm.form.Div00.form.calFlwMdngEndYmd","value","dsGet","ctrtEndYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divForm.form.Div00.form.edtRprsvNm","value","dsGet","rprsvNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.Div00.form.edtRprsTelno","value","dsGet","rprsTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.Div00.form.rdoUseYn","value","dsGet","useYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divForm.form.Div00.form.rdoCtrtTrgtYn","value","dsGet","ctrtTrgtYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.Div00.form.divEdtPop00.form.edtZip","value","dsGet","coZip");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divForm.form.Div00.form.edtAddr","value","dsGet","coAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.Div00.form.edtAddrDtl","value","dsGet","coDtlAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.Div00.form.edtCoId","value","dsGet","coId");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("COM001P02.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	COM001P02.xfdl
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
        // 조회
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
        	var strSvcUrl   = "crtr/coInfoInq.do";
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
            this.divForm.form.Div00.form.staCoId.addEventHandler("onclick",this.divForm_Div00_staCoId_onclick,this);
            this.divForm.form.Div00.form.grdFileList.addEventHandler("oncellclick",this.divForm_Div00_grdFileList_oncellclick,this);
            this.divForm.form.Div00.form.grdFileList.addEventHandler("oncelldblclick",this.divForm_Div00_grdFileList_oncelldblclick,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_CreationComplete",this.RaonkUpload_RAONKUPLOAD_CreationComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_OnError",this.RaonkUpload_RAONKUPLOAD_OnError,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterAddFile",this.RaonkUpload_RAONKUPLOAD_AfterAddFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterAddAllFile",this.RaonkUpload_RAONKUPLOAD_AfterAddAllFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_BeforeAddFile",this.RaonkUpload_RAONKUPLOAD_BeforeAddFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_UploadComplete",this.RaonkUpload_RAONKUPLOAD_UploadComplete,this);
        };
        this.loadIncludeScript("COM001P02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
