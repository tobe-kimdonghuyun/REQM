(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM023P01");
            this.set_titletext("회사 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,1950);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGet", this);
            obj._setContents("<ColumnInfo><Column id=\"coId\" type=\"STRING\" size=\"256\"/><Column id=\"coNm\" type=\"STRING\" size=\"256\"/><Column id=\"rprsvNm\" type=\"STRING\" size=\"256\"/><Column id=\"rprsTelno\" type=\"STRING\" size=\"256\"/><Column id=\"rprsCustCd\" type=\"STRING\" size=\"256\"/><Column id=\"rprsCustNm\" type=\"STRING\" size=\"256\"/><Column id=\"crno\" type=\"STRING\" size=\"256\"/><Column id=\"brno\" type=\"STRING\" size=\"256\"/><Column id=\"brnoChk\" type=\"STRING\" size=\"1\"/><Column id=\"brnoChkDesc\" type=\"STRING\" size=\"256\"/><Column id=\"coAddr\" type=\"STRING\" size=\"256\"/><Column id=\"coDtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"coZip\" type=\"STRING\" size=\"256\"/><Column id=\"rentCtrtYn\" type=\"STRING\" size=\"256\"/><Column id=\"mvmnRgnYn\" type=\"STRING\" size=\"256\"/><Column id=\"ftzYn\" type=\"STRING\" size=\"256\"/><Column id=\"cpatcoYn\" type=\"STRING\" size=\"256\"/><Column id=\"corpYn\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"flwMdngEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"coExpln\" type=\"STRING\" size=\"256\"/><Column id=\"fxno\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegNm\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"vrdtyBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"vrdtyEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"clmCustCd\" type=\"STRING\" size=\"256\"/><Column id=\"clsCustNm\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"tkcgDept\" type=\"STRING\" size=\"256\"/><Column id=\"picNm\" type=\"STRING\" size=\"256\"/><Column id=\"mblTelno\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"rentCtrtYn\">Y</Col><Col id=\"mvmnRgnYn\">N</Col><Col id=\"ftzYn\">N</Col><Col id=\"cpatcoYn\">N</Col><Col id=\"corpYn\">Y</Col><Col id=\"useYn\">Y</Col><Col id=\"ctrtTrgtYn\">Y</Col><Col id=\"brnoChk\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"fullName\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile2", this);
            obj._setContents("<ColumnInfo><Column id=\"fullName\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMvz", this);
            obj._setContents("<ColumnInfo><Column id=\"coAbbrNm\" type=\"STRING\" size=\"256\"/><Column id=\"coSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"coRmrk\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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

            obj = new Panel("sub_tit01","20","2187","100.00%","50",null,null,null,null,"50",null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj.set_fittocontents("none");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div00","0","0","100.00%","1260",null,null,null,null,null,null,this.divForm.form);
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

            obj = new Static("staUserNm","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("14");
            obj.set_text("등록자명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtUserNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("15");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_01","10.00","98","280","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("16");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staUserNm\"/><PanelItem id=\"PanelItem01\" componentid=\"edtUserNm\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staCoId","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("17");
            obj.set_text("회사ID");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_02","10.00","98","280","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("18");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCoId\"/><PanelItem id=\"PanelItem02\" componentid=\"edtCoId\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staCoNm","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("19");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_03","10.00","98","280","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("20");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCoNm\"/><PanelItem id=\"PanelItem02\" componentid=\"edtCoNm\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staExpln","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("21");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan09_01","10.00","98","100%","100%",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("22");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staExpln\"/><PanelItem id=\"PanelItem03\" componentid=\"TextArea00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staRprsvNm","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("24");
            obj.set_text("대표자명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan01_01","10.00","98","280","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("25");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staRprsvNm\"/><PanelItem id=\"PanelItem02\" componentid=\"edtRprsvNm\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staBrno","10","98","305","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("26");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan01_03","10.00","98","280","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("27");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staBrno\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan01","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("28");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan01_01\"/><PanelItem id=\"PanelItem03\" componentid=\"pan01_02\"/><PanelItem id=\"PanelItem02\" componentid=\"pan01_03\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel01","704","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("66");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"edtBrno\"/><PanelItem id=\"PanelItem02\" componentid=\"btnGrdRegi00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan02","0","60","100.00%","161",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("29");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan02_01\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staFtzYn","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("30");
            obj.set_text("자유무역지구");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan03_03","10.00","98","280","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("31");
            obj.set_type("vertical");
            obj.set_flexgrow("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staFtzYn\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoFtzYn\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staCpatcoYn","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("32");
            obj.set_text("협력업체");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan03_04","10.00","98","280","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("33");
            obj.set_type("vertical");
            obj.set_flexgrow("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCpatcoYn\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoCpatcoYn\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan03","0","60","100.00%","269",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("34");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"pan03_01\"/><PanelItem id=\"PanelItem01\" componentid=\"pan03_02\"/><PanelItem id=\"PanelItem00\" componentid=\"pan03_03\"/><PanelItem id=\"PanelItem02\" componentid=\"pan03_04\"/><PanelItem id=\"PanelItem06\" componentid=\"pan03_05\"/><PanelItem id=\"PanelItem05\" componentid=\"pan03_06\"/><PanelItem id=\"PanelItem07\" componentid=\"pan03_07\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan04_03","723","587","280","1",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("75");
            obj.set_flexgrow("1");
            obj._setContents("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staRentCtrtYn","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("35");
            obj.set_text("임대계약");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan03_01","10.00","98","280","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("36");
            obj.set_type("vertical");
            obj.set_flexgrow("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staRentCtrtYn\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoRentCtrtYn\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtCoId","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("37");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtCoNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("1");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Radio("rdoCoprYn","51","580","100.00%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("38");
            obj.set_fittocontents("width");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_Div00_form_rdoCoprYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div00_form_rdoCoprYn_innerdataset", obj);
            divForm_form_Div00_form_rdoCoprYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div00_form_rdoCoprYn_innerdataset);
            obj.set_text("계약선택");
            obj.set_value("0");
            obj.set_index("0");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staCoprYn","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("39");
            obj.set_text("개인/기타법인");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan03_06","10.00","98","280","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("40");
            obj.set_type("vertical");
            obj.set_flexgrow("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCoprYn\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoCoprYn\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staCtrtTrgtYn","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("41");
            obj.set_text("계약대상여부");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan03_05","10.00","98","280","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("42");
            obj.set_type("vertical");
            obj.set_flexgrow("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCtrtTrgtYn\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoCtrtTrgtYn\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staUseYn","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("43");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan03_07","10.00","98","280","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("44");
            obj.set_type("vertical");
            obj.set_flexgrow("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staUseYn\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoUseYn\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_04","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("45");
            obj.set_text("계약종료일");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan04_01","10.00","98","280","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("46");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_04\"/><PanelItem id=\"PanelItem02\" componentid=\"Calendar00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_01_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("47");
            obj.set_text("하자보수종료일");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan04_02","10.00","98","280","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("48");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Calendar01\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan04","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("49");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan04_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan04_02\"/><PanelItem id=\"PanelItem01\" componentid=\"pan04_03\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","50","965","100%","300",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("13");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan05","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("50");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"pan05_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan05_02\"/><PanelItem id=\"PanelItem01\" componentid=\"pan05_03\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staSeCd","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("51");
            obj.set_text("업체구분");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan05_03","10.00","98","280","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("52");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSeCd\"/><PanelItem id=\"PanelItem02\" componentid=\"cboSeCd\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan06","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("53");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"pan06_02\"/><PanelItem id=\"PanelItem01\" componentid=\"pan07_01\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staRmrk","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("54");
            obj.set_text("전달사항");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtRmrk","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("12");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan07_01","10.00","98","580","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("55");
            obj.set_type("vertical");
            obj.set_flexgrow("2");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staRmrk\"/><PanelItem id=\"PanelItem01\" componentid=\"edtRmrk\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Radio("rdoCtrtTrgtYn","51","580","100.00%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("56");
            obj.set_fittocontents("width");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_Div00_form_rdoCtrtTrgtYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div00_form_rdoCtrtTrgtYn_innerdataset", obj);
            divForm_form_Div00_form_rdoCtrtTrgtYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div00_form_rdoCtrtTrgtYn_innerdataset);
            obj.set_text("계약선택");
            obj.set_value("0");
            obj.set_index("0");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Radio("rdoUseYn","51","580","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("57");
            obj.set_fittocontents("width");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_Div00_form_rdoUseYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div00_form_rdoUseYn_innerdataset", obj);
            divForm_form_Div00_form_rdoUseYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div00_form_rdoUseYn_innerdataset);
            obj.set_text("계약선택");
            obj.set_value("0");
            obj.set_index("0");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staMvmnRgnYn","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("58");
            obj.set_text("이동지역");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Radio("rdoMvmnRgnYn","51","580","100.00%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("59");
            obj.set_fittocontents("width");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_Div00_form_rdoMvmnRgnYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div00_form_rdoMvmnRgnYn_innerdataset", obj);
            divForm_form_Div00_form_rdoMvmnRgnYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div00_form_rdoMvmnRgnYn_innerdataset);
            obj.set_text("미사용");
            obj.set_value("N");
            obj.set_index("1");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan03_02","10.00","98","280","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("60");
            obj.set_type("vertical");
            obj.set_flexgrow("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staMvmnRgnYn\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoMvmnRgnYn\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Radio("rdoRentCtrtYn","51","580","100.00%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("61");
            obj.set_fittocontents("width");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_Div00_form_rdoRentCtrtYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div00_form_rdoRentCtrtYn_innerdataset", obj);
            divForm_form_Div00_form_rdoRentCtrtYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div00_form_rdoRentCtrtYn_innerdataset);
            obj.set_text("계약선택");
            obj.set_value("0");
            obj.set_index("0");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Radio("rdoFtzYn","51","580","100.00%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("62");
            obj.set_fittocontents("width");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_Div00_form_rdoFtzYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div00_form_rdoFtzYn_innerdataset", obj);
            divForm_form_Div00_form_rdoFtzYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div00_form_rdoFtzYn_innerdataset);
            obj.set_text("미사용");
            obj.set_value("N");
            obj.set_index("1");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Radio("rdoCpatcoYn","51","580","100.00%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("63");
            obj.set_fittocontents("width");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_Div00_form_rdoCpatcoYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div00_form_rdoCpatcoYn_innerdataset", obj);
            divForm_form_Div00_form_rdoCpatcoYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div00_form_rdoCpatcoYn_innerdataset);
            obj.set_text("미사용");
            obj.set_value("N");
            obj.set_index("1");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtRprsvNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("2");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staRprsTelno","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("64");
            obj.set_text("대표전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtRprsTelno","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("3");
            obj.set_readonly("false");
            obj.getSetter("type").set("string");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan01_02","10.00","98","280","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("65");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staRprsTelno\"/><PanelItem id=\"PanelItem02\" componentid=\"edtRprsTelno\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("edtBrno","10.00","158","210","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("4");
            obj.set_readonly("false");
            obj.set_text("");
            obj.set_format("###-##-#####");
            obj.set_type("string");
            obj.set_flexgrow("1");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Button("btnGrdRegi00","943.00","50","80","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("67");
            obj.set_text("중복체크");
            obj.set_cssclass("btn_WF_SmallGray");
            obj.set_visible("true");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","0","0","150","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","0","0","150","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staAddr","0.00","0","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("68");
            obj.set_text("사업자등록주소/우편번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Div("divEdtPop","780.00","635","200","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("69");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtCoZip","0","0",null,"40","0",null,null,null,null,null,this.divForm.form.Div00.form.divEdtPop.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_readonly("true");
            obj.set_displaynulltext("우편번호 검색");
            this.divForm.form.Div00.form.divEdtPop.addChild(obj.name, obj);

            obj = new Button("btnPop",null,"0","40","40","0",null,null,null,null,null,this.divForm.form.Div00.form.divEdtPop.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            this.divForm.form.Div00.form.divEdtPop.addChild(obj.name, obj);

            obj = new Edit("edtAddr","360","637","500","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("70");
            obj.set_readonly("true");
            obj.set_flexgrow("2");
            obj.set_displaynulltext("주소");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("panAddress","200","641","100%","45",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("71");
            obj.set_horizontalgap("20");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divEdtPop\"/><PanelItem id=\"PanelItem02\" componentid=\"edtAddr\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtDtlAddr","0.00","46","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("5");
            obj.set_displaynulltext("상세주소");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan02_01","20.00","0","100%","150",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("72");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staAddr\"/><PanelItem id=\"PanelItem03\" componentid=\"panAddress\"/><PanelItem id=\"PanelItem01\" componentid=\"edtDtlAddr\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staFaxno","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("73");
            obj.set_text("업체팩스번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtFaxno","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("11");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan06_02","10.00","98","280","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("74");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staFaxno\"/><PanelItem id=\"PanelItem02\" componentid=\"edtFaxno\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan09","0","60","100%","350",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("23");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan09_01\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staPicNm","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("76");
            obj.set_text("관리책임자명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtPicNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("9");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan05_02","10.00","98","280","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("77");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPicNm\"/><PanelItem id=\"PanelItem02\" componentid=\"edtPicNm\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staAbbrNm","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("78");
            obj.set_text("소속사약어");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtAbbrNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("8");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan05_01","10.00","98","280","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("79");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staAbbrNm\"/><PanelItem id=\"PanelItem02\" componentid=\"edtAbbrNm\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Combo("cboSeCd","580.00","66","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("10");
            obj.set_flexgrow("1");
            obj.set_innerdataset("dsCombo");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staSubTitle01","-27","30","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","353","30","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnMinPrcsDsctn\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinPrcsDsctn","336","6","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle02","-27","30","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("5");
            obj.set_text("증빙서류");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinAtfl","336","6","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel02","353","30","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("7");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnMinAtfl\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit02","20","2187","100.00%","70",null,null,null,null,"70",null,this.divForm.form);
            obj.set_taborder("8");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj.set_fittocontents("none");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div02","0","0","100.00%","500",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("9");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel00_02","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("0");
            obj.set_text("사업자등록증");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("btn_file_1","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("1");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_visible("true");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panBtnFile","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("2");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panTitle","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("3");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static00","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("4");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staFileCnt01","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("5");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static02","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("6");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panFileNum","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("7");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/><PanelItem id=\"PanelItem01\" componentid=\"staFileCnt01\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("btn_del_file_1","512","135","125","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("8");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panBtnDel","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("9");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_del_file_1\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Grid("Grid01","20.00","114","100%","120",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("11");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("13");
            obj.set_text("계약증빙서류");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("btn_file_2","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("14");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_visible("true");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panBtnFile01","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("15");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_file_2\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panTitle01","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("16");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static00_00","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("17");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staFileCnt02","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("18");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static02_00","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("19");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panFileNum01","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("20");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"staFileCnt02\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("btn_del_file_2","512","135","125","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("21");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panBtnDel01","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("22");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_del_file_2\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("23");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum01\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Grid("Grid02","20.00","114","100%","120",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("24");
            obj.set_binddataset("dsFile2");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panFile","0","42","100.00%","250",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("12");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panFile01","0","42","100.00%","250",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("25");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid02\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Div("divPopBtn","0","5175","100.00%","60",null,null,null,null,"60",null,this.divForm.form);
            obj.set_taborder("10");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00_00","457.00","30","68","40",null,null,null,null,null,null,this.divForm.form.divPopBtn.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divPopBtn.addChild(obj.name, obj);

            obj = new RaonkUpload("RaonkUpload","-1099","0","101.90%","200",null,null,null,null,null,null,this);
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
            //-- Default Layout : this.divForm.form.Div00.form.divEdtPop.form
            obj = new Layout("default","",0,0,this.divForm.form.Div00.form.divEdtPop.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.edtCoZip.set_taborder("0");
                p.edtCoZip.set_cssclass("edt_WF_EdtSch");
                p.edtCoZip.set_readonly("true");
                p.edtCoZip.set_displaynulltext("우편번호 검색");
                p.edtCoZip.move("0","0",null,"40","0",null);

                p.btnPop.set_taborder("1");
                p.btnPop.set_cssclass("btn_WF_EdtSch");
                p.btnPop.move(null,"0","40","40","0",null);
            	}
            );
            this.divForm.form.Div00.form.divEdtPop.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div00.form.divEdtPop.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div00.form.divEdtPop.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.edtCoZip.move("0","0","100%","40",null,null);
            	}
            );
            this.divForm.form.Div00.form.divEdtPop.form.addLayout(obj.name, obj);
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

                p.staUserNm.set_taborder("14");
                p.staUserNm.set_text("등록자명");
                p.staUserNm.set_cssclass("sta_WF_Label");
                p.staUserNm.move("10","98","100%","46",null,null);

                p.edtUserNm.set_taborder("15");
                p.edtUserNm.set_readonly("true");
                p.edtUserNm.move("10.00","158","100%","40",null,null);

                p.pan00_01.set_taborder("16");
                p.pan00_01.set_type("vertical");
                p.pan00_01.set_flexgrow("1");
                p.pan00_01.set_minwidth("");
                p.pan00_01.move("10.00","98","280","86",null,null);

                p.staCoId.set_taborder("17");
                p.staCoId.set_text("회사ID");
                p.staCoId.set_cssclass("sta_WF_Label");
                p.staCoId.move("10","98","100%","46",null,null);

                p.pan00_02.set_taborder("18");
                p.pan00_02.set_type("vertical");
                p.pan00_02.set_flexgrow("1");
                p.pan00_02.set_minwidth("");
                p.pan00_02.move("10.00","98","280","86",null,null);

                p.staCoNm.set_taborder("19");
                p.staCoNm.set_text("회사명");
                p.staCoNm.set_cssclass("sta_WF_Label");
                p.staCoNm.move("10","98","100%","46",null,null);

                p.pan00_03.set_taborder("20");
                p.pan00_03.set_type("vertical");
                p.pan00_03.set_flexgrow("1");
                p.pan00_03.move("10.00","98","280","86",null,null);

                p.staExpln.set_taborder("21");
                p.staExpln.set_text("내용");
                p.staExpln.set_cssclass("sta_WF_Label");
                p.staExpln.move("10","98","100%","46",null,null);

                p.pan09_01.set_taborder("22");
                p.pan09_01.set_type("vertical");
                p.pan09_01.set_flexgrow("1");
                p.pan09_01.move("10.00","98","100%","100%",null,null);

                p.staRprsvNm.set_taborder("24");
                p.staRprsvNm.set_text("대표자명");
                p.staRprsvNm.set_cssclass("sta_WF_Label");
                p.staRprsvNm.move("10","98","100%","46",null,null);

                p.pan01_01.set_taborder("25");
                p.pan01_01.set_type("vertical");
                p.pan01_01.set_flexgrow("1");
                p.pan01_01.move("10.00","98","280","86",null,null);

                p.staBrno.set_taborder("26");
                p.staBrno.set_text("사업자등록번호");
                p.staBrno.set_cssclass("sta_WF_Label");
                p.staBrno.move("10","98","305","46",null,null);

                p.pan01_03.set_taborder("27");
                p.pan01_03.set_type("vertical");
                p.pan01_03.set_flexgrow("1");
                p.pan01_03.move("10.00","98","280","86",null,null);

                p.pan01.set_taborder("28");
                p.pan01.set_horizontalgap("20");
                p.pan01.set_flexcrossaxiswrapalign("start");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_fittocontents("height");
                p.pan01.set_verticalgap("0");
                p.pan01.set_spacing("0px 20px 10px 20px");
                p.pan01.set_cssclass("pal_WF_DtlBg");
                p.pan01.move("0","60","100.00%","96",null,null);

                p.Panel01.set_taborder("66");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.set_flexcrossaxiswrapalign("start");
                p.Panel01.set_flexcrossaxisalign("center");
                p.Panel01.move("704","158","100%","40",null,null);

                p.pan02.set_taborder("29");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.move("0","60","100.00%","161",null,null);

                p.staFtzYn.set_taborder("30");
                p.staFtzYn.set_text("자유무역지구");
                p.staFtzYn.set_cssclass("sta_WF_Label");
                p.staFtzYn.move("10","98","100%","46",null,null);

                p.pan03_03.set_taborder("31");
                p.pan03_03.set_type("vertical");
                p.pan03_03.set_flexgrow("0");
                p.pan03_03.set_minwidth("");
                p.pan03_03.move("10.00","98","280","86",null,null);

                p.staCpatcoYn.set_taborder("32");
                p.staCpatcoYn.set_text("협력업체");
                p.staCpatcoYn.set_cssclass("sta_WF_Label");
                p.staCpatcoYn.move("10","98","100%","46",null,null);

                p.pan03_04.set_taborder("33");
                p.pan03_04.set_type("vertical");
                p.pan03_04.set_flexgrow("0");
                p.pan03_04.set_minwidth("");
                p.pan03_04.move("10.00","98","280","86",null,null);

                p.pan03.set_taborder("34");
                p.pan03.set_horizontalgap("20");
                p.pan03.set_flexcrossaxiswrapalign("start");
                p.pan03.set_flexwrap("wrap");
                p.pan03.set_fittocontents("height");
                p.pan03.set_verticalgap("0");
                p.pan03.set_spacing("0px 20px 10px 20px");
                p.pan03.set_cssclass("pal_WF_DtlBg");
                p.pan03.move("0","60","100.00%","269",null,null);

                p.pan04_03.set_taborder("75");
                p.pan04_03.set_flexgrow("1");
                p.pan04_03.move("723","587","280","1",null,null);

                p.staRentCtrtYn.set_taborder("35");
                p.staRentCtrtYn.set_text("임대계약");
                p.staRentCtrtYn.set_cssclass("sta_WF_Label");
                p.staRentCtrtYn.move("10","98","100%","46",null,null);

                p.pan03_01.set_taborder("36");
                p.pan03_01.set_type("vertical");
                p.pan03_01.set_flexgrow("0");
                p.pan03_01.set_minwidth("");
                p.pan03_01.move("10.00","98","280","86",null,null);

                p.edtCoId.set_taborder("37");
                p.edtCoId.set_readonly("true");
                p.edtCoId.move("10.00","158","100%","40",null,null);

                p.edtCoNm.set_taborder("1");
                p.edtCoNm.set_readonly("false");
                p.edtCoNm.move("10.00","158","100%","40",null,null);

                p.rdoCoprYn.set_taborder("38");
                p.rdoCoprYn.set_fittocontents("width");
                p.rdoCoprYn.set_direction("vertical");
                p.rdoCoprYn.set_innerdataset(divForm_form_Div00_form_rdoCoprYn_innerdataset);
                p.rdoCoprYn.set_codecolumn("codecolumn");
                p.rdoCoprYn.set_datacolumn("datacolumn");
                p.rdoCoprYn.set_value("0");
                p.rdoCoprYn.set_index("0");
                p.rdoCoprYn.move("51","580","100.00%","40",null,null);

                p.staCoprYn.set_taborder("39");
                p.staCoprYn.set_text("개인/기타법인");
                p.staCoprYn.set_cssclass("sta_WF_Label");
                p.staCoprYn.move("10","98","100%","46",null,null);

                p.pan03_06.set_taborder("40");
                p.pan03_06.set_type("vertical");
                p.pan03_06.set_flexgrow("0");
                p.pan03_06.set_minwidth("");
                p.pan03_06.move("10.00","98","280","86",null,null);

                p.staCtrtTrgtYn.set_taborder("41");
                p.staCtrtTrgtYn.set_text("계약대상여부");
                p.staCtrtTrgtYn.set_cssclass("sta_WF_Label");
                p.staCtrtTrgtYn.move("10","98","100%","46",null,null);

                p.pan03_05.set_taborder("42");
                p.pan03_05.set_type("vertical");
                p.pan03_05.set_flexgrow("0");
                p.pan03_05.set_minwidth("");
                p.pan03_05.move("10.00","98","280","86",null,null);

                p.staUseYn.set_taborder("43");
                p.staUseYn.set_text("사용여부");
                p.staUseYn.set_cssclass("sta_WF_Label");
                p.staUseYn.move("10","98","100%","46",null,null);

                p.pan03_07.set_taborder("44");
                p.pan03_07.set_type("vertical");
                p.pan03_07.set_flexgrow("0");
                p.pan03_07.set_minwidth("");
                p.pan03_07.move("10.00","98","280","86",null,null);

                p.staLabel00_04.set_taborder("45");
                p.staLabel00_04.set_text("계약종료일");
                p.staLabel00_04.set_cssclass("sta_WF_Label");
                p.staLabel00_04.move("10","98","100%","46",null,null);

                p.pan04_01.set_taborder("46");
                p.pan04_01.set_type("vertical");
                p.pan04_01.set_flexgrow("1");
                p.pan04_01.set_minwidth("");
                p.pan04_01.move("10.00","98","280","86",null,null);

                p.staLabel00_01_02.set_taborder("47");
                p.staLabel00_01_02.set_text("하자보수종료일");
                p.staLabel00_01_02.set_cssclass("sta_WF_Label");
                p.staLabel00_01_02.move("10","98","100%","46",null,null);

                p.pan04_02.set_taborder("48");
                p.pan04_02.set_type("vertical");
                p.pan04_02.set_flexgrow("1");
                p.pan04_02.set_minwidth("");
                p.pan04_02.move("10.00","98","280","86",null,null);

                p.pan04.set_taborder("49");
                p.pan04.set_horizontalgap("20");
                p.pan04.set_flexcrossaxiswrapalign("start");
                p.pan04.set_flexwrap("wrap");
                p.pan04.set_fittocontents("height");
                p.pan04.set_verticalgap("0");
                p.pan04.set_spacing("0px 20px 10px 20px");
                p.pan04.set_cssclass("pal_WF_DtlBg");
                p.pan04.move("0","60","100.00%","96",null,null);

                p.TextArea00.set_taborder("13");
                p.TextArea00.move("50","965","100%","300",null,null);

                p.pan05.set_taborder("50");
                p.pan05.set_horizontalgap("20");
                p.pan05.set_flexcrossaxiswrapalign("start");
                p.pan05.set_flexwrap("wrap");
                p.pan05.set_fittocontents("height");
                p.pan05.set_verticalgap("0");
                p.pan05.set_spacing("0px 20px 10px 20px");
                p.pan05.set_cssclass("pal_WF_DtlBg");
                p.pan05.set_visible("true");
                p.pan05.move("0","60","100.00%","96",null,null);

                p.staSeCd.set_taborder("51");
                p.staSeCd.set_text("업체구분");
                p.staSeCd.set_cssclass("sta_WF_Label");
                p.staSeCd.move("10","98","100%","46",null,null);

                p.pan05_03.set_taborder("52");
                p.pan05_03.set_type("vertical");
                p.pan05_03.set_flexgrow("1");
                p.pan05_03.set_minwidth("");
                p.pan05_03.move("10.00","98","280","86",null,null);

                p.pan06.set_taborder("53");
                p.pan06.set_horizontalgap("20");
                p.pan06.set_flexcrossaxiswrapalign("start");
                p.pan06.set_flexwrap("wrap");
                p.pan06.set_fittocontents("height");
                p.pan06.set_verticalgap("0");
                p.pan06.set_spacing("0px 20px 10px 20px");
                p.pan06.set_cssclass("pal_WF_DtlBg");
                p.pan06.set_visible("true");
                p.pan06.move("0","60","100.00%","96",null,null);

                p.staRmrk.set_taborder("54");
                p.staRmrk.set_text("전달사항");
                p.staRmrk.set_cssclass("sta_WF_Label");
                p.staRmrk.move("10","98","100%","46",null,null);

                p.edtRmrk.set_taborder("12");
                p.edtRmrk.set_readonly("false");
                p.edtRmrk.move("10.00","158","100%","40",null,null);

                p.pan07_01.set_taborder("55");
                p.pan07_01.set_type("vertical");
                p.pan07_01.set_flexgrow("2");
                p.pan07_01.set_minwidth("");
                p.pan07_01.move("10.00","98","580","86",null,null);

                p.rdoCtrtTrgtYn.set_taborder("56");
                p.rdoCtrtTrgtYn.set_fittocontents("width");
                p.rdoCtrtTrgtYn.set_direction("vertical");
                p.rdoCtrtTrgtYn.set_innerdataset(divForm_form_Div00_form_rdoCtrtTrgtYn_innerdataset);
                p.rdoCtrtTrgtYn.set_codecolumn("codecolumn");
                p.rdoCtrtTrgtYn.set_datacolumn("datacolumn");
                p.rdoCtrtTrgtYn.set_value("0");
                p.rdoCtrtTrgtYn.set_index("0");
                p.rdoCtrtTrgtYn.move("51","580","100.00%","40",null,null);

                p.rdoUseYn.set_taborder("57");
                p.rdoUseYn.set_fittocontents("width");
                p.rdoUseYn.set_direction("vertical");
                p.rdoUseYn.set_innerdataset(divForm_form_Div00_form_rdoUseYn_innerdataset);
                p.rdoUseYn.set_codecolumn("codecolumn");
                p.rdoUseYn.set_datacolumn("datacolumn");
                p.rdoUseYn.set_value("0");
                p.rdoUseYn.set_index("0");
                p.rdoUseYn.move("51","580","100%","40",null,null);

                p.staMvmnRgnYn.set_taborder("58");
                p.staMvmnRgnYn.set_text("이동지역");
                p.staMvmnRgnYn.set_cssclass("sta_WF_Label");
                p.staMvmnRgnYn.move("10","98","100%","46",null,null);

                p.rdoMvmnRgnYn.set_taborder("59");
                p.rdoMvmnRgnYn.set_fittocontents("width");
                p.rdoMvmnRgnYn.set_direction("vertical");
                p.rdoMvmnRgnYn.set_innerdataset(divForm_form_Div00_form_rdoMvmnRgnYn_innerdataset);
                p.rdoMvmnRgnYn.set_codecolumn("codecolumn");
                p.rdoMvmnRgnYn.set_datacolumn("datacolumn");
                p.rdoMvmnRgnYn.set_value("N");
                p.rdoMvmnRgnYn.set_index("1");
                p.rdoMvmnRgnYn.move("51","580","100.00%","40",null,null);

                p.pan03_02.set_taborder("60");
                p.pan03_02.set_type("vertical");
                p.pan03_02.set_flexgrow("0");
                p.pan03_02.set_minwidth("");
                p.pan03_02.move("10.00","98","280","86",null,null);

                p.rdoRentCtrtYn.set_taborder("61");
                p.rdoRentCtrtYn.set_fittocontents("width");
                p.rdoRentCtrtYn.set_direction("vertical");
                p.rdoRentCtrtYn.set_innerdataset(divForm_form_Div00_form_rdoRentCtrtYn_innerdataset);
                p.rdoRentCtrtYn.set_codecolumn("codecolumn");
                p.rdoRentCtrtYn.set_datacolumn("datacolumn");
                p.rdoRentCtrtYn.set_value("0");
                p.rdoRentCtrtYn.set_index("0");
                p.rdoRentCtrtYn.move("51","580","100.00%","40",null,null);

                p.rdoFtzYn.set_taborder("62");
                p.rdoFtzYn.set_fittocontents("width");
                p.rdoFtzYn.set_direction("vertical");
                p.rdoFtzYn.set_innerdataset(divForm_form_Div00_form_rdoFtzYn_innerdataset);
                p.rdoFtzYn.set_codecolumn("codecolumn");
                p.rdoFtzYn.set_datacolumn("datacolumn");
                p.rdoFtzYn.set_value("N");
                p.rdoFtzYn.set_index("1");
                p.rdoFtzYn.move("51","580","100.00%","40",null,null);

                p.rdoCpatcoYn.set_taborder("63");
                p.rdoCpatcoYn.set_fittocontents("width");
                p.rdoCpatcoYn.set_direction("vertical");
                p.rdoCpatcoYn.set_innerdataset(divForm_form_Div00_form_rdoCpatcoYn_innerdataset);
                p.rdoCpatcoYn.set_codecolumn("codecolumn");
                p.rdoCpatcoYn.set_datacolumn("datacolumn");
                p.rdoCpatcoYn.set_value("N");
                p.rdoCpatcoYn.set_index("1");
                p.rdoCpatcoYn.move("51","580","100.00%","40",null,null);

                p.edtRprsvNm.set_taborder("2");
                p.edtRprsvNm.set_readonly("false");
                p.edtRprsvNm.move("10.00","158","100%","40",null,null);

                p.staRprsTelno.set_taborder("64");
                p.staRprsTelno.set_text("대표전화번호");
                p.staRprsTelno.set_cssclass("sta_WF_Label");
                p.staRprsTelno.move("10","98","100%","46",null,null);

                p.edtRprsTelno.set_taborder("3");
                p.edtRprsTelno.set_readonly("false");
                p.edtRprsTelno.getSetter("type").set("string");
                p.edtRprsTelno.move("10.00","158","100%","40",null,null);

                p.pan01_02.set_taborder("65");
                p.pan01_02.set_type("vertical");
                p.pan01_02.set_flexgrow("1");
                p.pan01_02.move("10.00","98","280","86",null,null);

                p.edtBrno.set_taborder("4");
                p.edtBrno.set_readonly("false");
                p.edtBrno.set_format("###-##-#####");
                p.edtBrno.set_type("string");
                p.edtBrno.set_flexgrow("1");
                p.edtBrno.move("10.00","158","210","40",null,null);

                p.btnGrdRegi00.set_taborder("67");
                p.btnGrdRegi00.set_text("중복체크");
                p.btnGrdRegi00.set_cssclass("btn_WF_SmallGray");
                p.btnGrdRegi00.set_visible("true");
                p.btnGrdRegi00.move("943.00","50","80","40",null,null);

                p.Calendar00.set_taborder("6");
                p.Calendar00.set_dateformat("yyyy-MM-dd");
                p.Calendar00.move("0","0","150","40",null,null);

                p.Calendar01.set_taborder("7");
                p.Calendar01.set_dateformat("yyyy-MM-dd");
                p.Calendar01.move("0","0","150","40",null,null);

                p.staAddr.set_taborder("68");
                p.staAddr.set_text("사업자등록주소/우편번호");
                p.staAddr.set_cssclass("sta_WF_Label");
                p.staAddr.move("0.00","0","100%","46",null,null);

                p.divEdtPop.set_taborder("69");
                p.divEdtPop.set_text("Div00");
                p.divEdtPop.set_formscrollbartype("none none");
                p.divEdtPop.set_formscrolltype("none");
                p.divEdtPop.set_flexgrow("1");
                p.divEdtPop.move("780.00","635","200","40",null,null);

                p.edtAddr.set_taborder("70");
                p.edtAddr.set_readonly("true");
                p.edtAddr.set_flexgrow("2");
                p.edtAddr.set_displaynulltext("주소");
                p.edtAddr.move("360","637","500","40",null,null);

                p.panAddress.set_taborder("71");
                p.panAddress.set_horizontalgap("20");
                p.panAddress.move("200","641","100%","45",null,null);

                p.edtDtlAddr.set_taborder("5");
                p.edtDtlAddr.set_displaynulltext("상세주소");
                p.edtDtlAddr.move("0.00","46","100%","40",null,null);

                p.pan02_01.set_taborder("72");
                p.pan02_01.set_type("vertical");
                p.pan02_01.set_flexgrow("1");
                p.pan02_01.set_fittocontents("height");
                p.pan02_01.set_verticalgap("10");
                p.pan02_01.set_minwidth("");
                p.pan02_01.move("20.00","0","100%","150",null,null);

                p.staFaxno.set_taborder("73");
                p.staFaxno.set_text("업체팩스번호");
                p.staFaxno.set_cssclass("sta_WF_Label");
                p.staFaxno.move("10","98","100%","46",null,null);

                p.edtFaxno.set_taborder("11");
                p.edtFaxno.set_readonly("false");
                p.edtFaxno.move("10.00","158","100%","40",null,null);

                p.pan06_02.set_taborder("74");
                p.pan06_02.set_type("vertical");
                p.pan06_02.set_flexgrow("1");
                p.pan06_02.set_minwidth("");
                p.pan06_02.move("10.00","98","280","86",null,null);

                p.pan09.set_taborder("23");
                p.pan09.set_horizontalgap("20");
                p.pan09.set_flexcrossaxiswrapalign("start");
                p.pan09.set_flexwrap("wrap");
                p.pan09.set_fittocontents("height");
                p.pan09.set_verticalgap("0");
                p.pan09.set_spacing("0px 20px 10px 20px");
                p.pan09.set_cssclass("pal_WF_DtlBg");
                p.pan09.move("0","60","100%","350",null,null);

                p.staPicNm.set_taborder("76");
                p.staPicNm.set_text("관리책임자명");
                p.staPicNm.set_cssclass("sta_WF_Label");
                p.staPicNm.move("10","98","100%","46",null,null);

                p.edtPicNm.set_taborder("9");
                p.edtPicNm.set_readonly("false");
                p.edtPicNm.move("10.00","158","100%","40",null,null);

                p.pan05_02.set_taborder("77");
                p.pan05_02.set_type("vertical");
                p.pan05_02.set_flexgrow("1");
                p.pan05_02.set_minwidth("");
                p.pan05_02.move("10.00","98","280","86",null,null);

                p.staAbbrNm.set_taborder("78");
                p.staAbbrNm.set_text("소속사약어");
                p.staAbbrNm.set_cssclass("sta_WF_Label");
                p.staAbbrNm.move("10","98","100%","46",null,null);

                p.edtAbbrNm.set_taborder("8");
                p.edtAbbrNm.set_readonly("false");
                p.edtAbbrNm.move("10.00","158","100%","40",null,null);

                p.pan05_01.set_taborder("79");
                p.pan05_01.set_type("vertical");
                p.pan05_01.set_flexgrow("1");
                p.pan05_01.set_minwidth("");
                p.pan05_01.move("10.00","98","280","86",null,null);

                p.cboSeCd.set_taborder("10");
                p.cboSeCd.set_flexgrow("1");
                p.cboSeCd.set_innerdataset("dsCombo");
                p.cboSeCd.set_codecolumn("cdId");
                p.cboSeCd.set_datacolumn("cdNm");
                p.cboSeCd.set_text("");
                p.cboSeCd.set_value("");
                p.cboSeCd.set_index("0");
                p.cboSeCd.move("580.00","66","100%","40",null,null);
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
                p.pan03_07.set_flexmainaxisalign("start");
                p.pan03_07.set_flexcrossaxiswrapalign("start");
                p.pan03_07.move("10.00","98","50%","86",null,null);

                p.pan03_06.set_flexmainaxisalign("start");
                p.pan03_06.set_flexcrossaxiswrapalign("start");
                p.pan03_06.move("10.00","98","50%","86",null,null);

                p.pan03_05.set_flexmainaxisalign("start");
                p.pan03_05.set_flexcrossaxiswrapalign("start");
                p.pan03_05.move("10.00","98","50%","86",null,null);

                p.pan03_04.set_flexmainaxisalign("start");
                p.pan03_04.set_flexcrossaxiswrapalign("start");
                p.pan03_04.move("10.00","98","50%","86",null,null);

                p.pan03_03.set_flexmainaxisalign("start");
                p.pan03_03.set_flexcrossaxiswrapalign("start");
                p.pan03_03.move("10.00","98","50%","86",null,null);

                p.pan03_02.set_flexmainaxisalign("start");
                p.pan03_02.set_flexcrossaxiswrapalign("start");
                p.pan03_02.move("10.00","98","50%","86",null,null);

                p.pan03_01.set_flexmainaxisalign("start");
                p.pan03_01.set_flexcrossaxiswrapalign("start");
                p.pan03_01.move("10.00","98","50%","86",null,null);

                p.pan03.set_horizontalgap("0");
                p.pan03.set_flexmainaxisalign("start");
                p.pan03.move("0","60","100.00%","269",null,null);

                p.divEdtPop.move("780.00","635","200","40",null,null);

                p.edtAddr.move("360","637","300","40",null,null);

                p.panAddress.set_horizontalgap("10");
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div02.form
            obj = new Layout("default","",0,0,this.divForm.form.Div02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel00_02.set_taborder("0");
                p.staLabel00_02.set_text("사업자등록증");
                p.staLabel00_02.set_cssclass("sta_WF_Label");
                p.staLabel00_02.set_flexgrow("1");
                p.staLabel00_02.move("0","44","305","46",null,null);

                p.btn_file_1.set_taborder("1");
                p.btn_file_1.set_text("파일선택");
                p.btn_file_1.set_cssclass("btn_WF_FileUp");
                p.btn_file_1.set_visible("true");
                p.btn_file_1.move("124","58","116","40",null,null);

                p.panBtnFile.set_taborder("2");
                p.panBtnFile.set_flexgrow("1");
                p.panBtnFile.set_flexcrossaxisalign("start");
                p.panBtnFile.set_flexmainaxisalign("end");
                p.panBtnFile.move("433","58","305","46",null,null);

                p.panTitle.set_taborder("3");
                p.panTitle.set_cssclass("pan_WF_FileTitle");
                p.panTitle.move("0","124","100%","46",null,null);

                p.Static00.set_taborder("4");
                p.Static00.set_text("파일수 : ");
                p.Static00.set_fittocontents("width");
                p.Static00.move("88","123","48","46",null,null);

                p.staFileCnt01.set_taborder("5");
                p.staFileCnt01.set_text("0");
                p.staFileCnt01.set_fittocontents("width");
                p.staFileCnt01.move("165","143","9","46",null,null);

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
                p.btn_del_file_1.move("512","135","125","40",null,null);

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
                p.Grid01.move("20.00","114","100%","120",null,null);

                p.staLabel00_02_00.set_taborder("13");
                p.staLabel00_02_00.set_text("계약증빙서류");
                p.staLabel00_02_00.set_cssclass("sta_WF_Label");
                p.staLabel00_02_00.set_flexgrow("1");
                p.staLabel00_02_00.move("0","44","305","46",null,null);

                p.btn_file_2.set_taborder("14");
                p.btn_file_2.set_text("파일선택");
                p.btn_file_2.set_cssclass("btn_WF_FileUp");
                p.btn_file_2.set_visible("true");
                p.btn_file_2.move("124","58","116","40",null,null);

                p.panBtnFile01.set_taborder("15");
                p.panBtnFile01.set_flexgrow("1");
                p.panBtnFile01.set_flexcrossaxisalign("start");
                p.panBtnFile01.set_flexmainaxisalign("end");
                p.panBtnFile01.move("433","58","305","46",null,null);

                p.panTitle01.set_taborder("16");
                p.panTitle01.set_cssclass("pan_WF_FileTitle");
                p.panTitle01.move("0","124","100%","46",null,null);

                p.Static00_00.set_taborder("17");
                p.Static00_00.set_text("파일수 : ");
                p.Static00_00.set_fittocontents("width");
                p.Static00_00.move("88","123","48","46",null,null);

                p.staFileCnt02.set_taborder("18");
                p.staFileCnt02.set_text("0");
                p.staFileCnt02.set_fittocontents("width");
                p.staFileCnt02.move("165","143","9","46",null,null);

                p.Static02_00.set_taborder("19");
                p.Static02_00.set_text("개");
                p.Static02_00.set_fittocontents("width");
                p.Static02_00.move("293","131","13","46",null,null);

                p.panFileNum01.set_taborder("20");
                p.panFileNum01.set_flexgrow("1");
                p.panFileNum01.set_horizontalgap("4");
                p.panFileNum01.move("20","190","305","46",null,null);

                p.btn_del_file_2.set_taborder("21");
                p.btn_del_file_2.set_text("전체파일삭제");
                p.btn_del_file_2.set_cssclass("btn_WF_FileDel");
                p.btn_del_file_2.set_fittocontents("width");
                p.btn_del_file_2.set_visible("false");
                p.btn_del_file_2.move("512","135","125","40",null,null);

                p.panBtnDel01.set_taborder("22");
                p.panBtnDel01.set_flexcrossaxisalign("center");
                p.panBtnDel01.set_flexmainaxisalign("end");
                p.panBtnDel01.set_flexgrow("1");
                p.panBtnDel01.move("517","141","305","46",null,null);

                p.Panel00_00.set_taborder("23");
                p.Panel00_00.move("20","51","100%","46",null,null);

                p.Grid02.set_taborder("24");
                p.Grid02.set_binddataset("dsFile2");
                p.Grid02.set_autofittype("col");
                p.Grid02.set_cssclass("grd_WF_FileAdd");
                p.Grid02.move("20.00","114","100%","120",null,null);

                p.panFile.set_taborder("12");
                p.panFile.set_fittocontents("height");
                p.panFile.set_spacing("10px 20px 10px 20px");
                p.panFile.set_flexwrap("wrap");
                p.panFile.set_cssclass("pal_WF_DtlBg");
                p.panFile.set_verticalgap("4");
                p.panFile.move("0","42","100.00%","250",null,null);

                p.panFile01.set_taborder("25");
                p.panFile01.set_fittocontents("height");
                p.panFile01.set_spacing("10px 20px 10px 20px");
                p.panFile01.set_flexwrap("wrap");
                p.panFile01.set_cssclass("pal_WF_DtlBg");
                p.panFile01.set_verticalgap("4");
                p.panFile01.move("0","42","100.00%","250",null,null);
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
            //-- Default Layout : this.divForm.form.divPopBtn.form
            obj = new Layout("default","",0,0,this.divForm.form.divPopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00_00.set_taborder("1");
                p.Button00_00.set_text("확인");
                p.Button00_00.set_cssclass("btn_WF_Yes");
                p.Button00_00.set_visible("true");
                p.Button00_00.set_fittocontents("width");
                p.Button00_00.move("457.00","30","68","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("10");
            this.divForm.form.divPopBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divPopBtn.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divPopBtn.form,
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
            this.divForm.form.divPopBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.sub_tit01.set_taborder("3");
                p.sub_tit01.set_background("#ffffff");
                p.sub_tit01.set_flexcrossaxisalign("end");
                p.sub_tit01.set_fittocontents("none");
                p.sub_tit01.set_minheight("50");
                p.sub_tit01.set_maxheight("");
                p.sub_tit01.move("20","2187","100.00%","50",null,null);

                p.Div00.set_taborder("0");
                p.Div00.set_text("Div00");
                p.Div00.set_cssclass("div_WF_Bg");
                p.Div00.set_fittocontents("height");
                p.Div00.move("0","0","100.00%","1260",null,null);

                p.staSubTitle01.set_taborder("1");
                p.staSubTitle01.set_text("기본정보");
                p.staSubTitle01.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle01.move("-27","30","50%","50",null,null);

                p.Panel01_00.set_taborder("2");
                p.Panel01_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_00.set_spacing("0px 10px");
                p.Panel01_00.set_horizontalgap("10");
                p.Panel01_00.set_flexcrossaxisalign("center");
                p.Panel01_00.set_flexmainaxisalign("end");
                p.Panel01_00.move("353","30","50%","50",null,null);

                p.btnMinPrcsDsctn.set_taborder("4");
                p.btnMinPrcsDsctn.set_cssclass("btn_WF_ACMinus");
                p.btnMinPrcsDsctn.move("336","6","34","34",null,null);

                p.staSubTitle02.set_taborder("5");
                p.staSubTitle02.set_text("증빙서류");
                p.staSubTitle02.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02.move("-27","30","50%","50",null,null);

                p.btnMinAtfl.set_taborder("6");
                p.btnMinAtfl.set_cssclass("btn_WF_ACMinus");
                p.btnMinAtfl.move("336","6","34","34",null,null);

                p.Panel02.set_taborder("7");
                p.Panel02.set_cssclass("pal_WF_TitBtnBg");
                p.Panel02.set_spacing("0px 10px");
                p.Panel02.set_horizontalgap("10");
                p.Panel02.set_flexcrossaxisalign("center");
                p.Panel02.set_flexmainaxisalign("end");
                p.Panel02.move("353","30","50%","50",null,null);

                p.sub_tit02.set_taborder("8");
                p.sub_tit02.set_background("#ffffff");
                p.sub_tit02.set_flexcrossaxisalign("end");
                p.sub_tit02.set_fittocontents("none");
                p.sub_tit02.set_minheight("70");
                p.sub_tit02.set_maxheight("");
                p.sub_tit02.move("20","2187","100.00%","70",null,null);

                p.Div02.set_taborder("9");
                p.Div02.set_text("Div00");
                p.Div02.set_cssclass("div_WF_Bg");
                p.Div02.set_fittocontents("height");
                p.Div02.move("0","0","100.00%","500",null,null);

                p.divPopBtn.set_taborder("10");
                p.divPopBtn.set_text("Div00");
                p.divPopBtn.set_cssclass("div_WF_PopBtn");
                p.divPopBtn.set_fittocontents("height");
                p.divPopBtn.set_minheight("60");
                p.divPopBtn.set_maxheight("");
                p.divPopBtn.move("0","5175","100.00%","60",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_horizontalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
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
            obj.set_type("vertical");
            obj.set_horizontalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_flexwrap("nowrap");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1000,1950,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("회사 관리");

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
                p.RaonkUpload.move("-1099","0","101.90%","200",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Phone_screen",480,2070,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divForm.move("0","60",null,null,"0","60");
            	}
            );
            obj.set_mobileorientation("Portrait");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.Div00.form.edtUserNm","value","dsGet","frstRegNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.Div00.form.edtCoId","value","dsGet","coId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.Div00.form.edtCoNm","value","dsGet","coNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.Div00.form.edtRprsvNm","value","dsGet","rprsvNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.Div00.form.edtRprsTelno","value","dsGet","rprsTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.Div00.form.edtBrno","value","dsGet","brno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divForm.form.Div00.form.rdoRentCtrtYn","value","dsGet","rentCtrtYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divForm.form.Div00.form.rdoMvmnRgnYn","value","dsGet","mvmnRgnYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divForm.form.Div00.form.rdoFtzYn","value","dsGet","ftzYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divForm.form.Div00.form.rdoCpatcoYn","value","dsGet","cpatcoYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divForm.form.Div00.form.rdoCoprYn","value","dsGet","corpYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divForm.form.Div00.form.rdoCtrtTrgtYn","value","dsGet","ctrtTrgtYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divForm.form.Div00.form.rdoUseYn","value","dsGet","useYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divForm.form.Div00.form.Calendar00","value","dsGet","ctrtEndYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divForm.form.Div00.form.Calendar01","value","dsGet","flwMdngEndYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.Div00.form.edtAddr","value","dsGet","coAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divForm.form.Div00.form.edtDtlAddr","value","dsGet","coDtlAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divForm.form.Div00.form.divEdtPop.form.edtCoZip","value","dsGet","coZip");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divForm.form.Div00.form.edtFaxno","value","dsGet","fxno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divForm.form.Div00.form.edtPicNm","value","dsGet","picNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divForm.form.Div00.form.edtAbbrNm","value","dsMvz","coAbbrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divForm.form.Div00.form.edtRmrk","value","dsMvz","coRmrk");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divForm.form.Div00.form.cboSeCd","value","dsMvz","coSeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divForm.form.Div00.form.TextArea00","value","dsGet","coExpln");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("COM023P01.xfdl", function() {
        /**
        *  인천공항 원스톱 입주자서비스 프로젝트
        *  @FileName 	COM023P01.xfdl
        *  @Creator 	(주)이루온
        *  @CreateDate 	2024/08/08
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/08/08			김완성						최초생성
        * 2024/11/28			조규완						이동지역 회원가입 시 회사등록 추가
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        this.param;
        this.dupleChk = false;
        var bizChk = false;
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
        			"coId" : this.getOwnerFrame().coId,
        			"userId" : this.getOwnerFrame().userId,
        			"userNm" : this.getOwnerFrame().userNm,
        			"type" : this.getOwnerFrame().type
        		}
        	} else
        	{
        		this.param = this.getOwnerFrame().form.fvObjArgs;
        	}

        	this.fnInit();
        };

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
        	if(this.gvUploadCategory == 'bizFile')
        	{
        		if(this.dsFile1.rowcount >= 1)
        		{
        			this.gfnAlertMsg("MSG_001", "msgCallback");
        			//this.gfnAlertMsg("beforeAddFile", "파일 1개만 업로드 가능 합니다.", "msgCallback");
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
        	if(this.gvUploadCategory == 'bizFile') {
        		var nIdx = this.dsFile1.addRow();
        		this.dsFile1.setColumn(nIdx, "fullName", paramObj.userdata.strName + ' (' + paramObj.userdata.nSize + ')');
        		this.dsFile1.setColumn(nIdx, "orgnlFileNm", paramObj.userdata.strName);
        		this.dsFile1.setColumn(nIdx, "fileSz", paramObj.userdata.nSize);
        		this.dsFile1.setColumn(nIdx, "atflMngSno", paramObj.userdata.nIndex);
        		this.dsFile1.setColumn(nIdx, "colId", this.gvUploadCategory);
        	} else if(this.gvUploadCategory == 'certFile') {
        		var nIdx = this.dsFile2.addRow();
        		this.dsFile2.setColumn(nIdx, "fullName", paramObj.userdata.strName + ' (' + paramObj.userdata.nSize + ')');
        		this.dsFile2.setColumn(nIdx, "orgnlFileNm", paramObj.userdata.strName);
        		this.dsFile2.setColumn(nIdx, "fileSz", paramObj.userdata.nSize);
        		this.dsFile2.setColumn(nIdx, "atflMngSno", paramObj.userdata.nIndex);
        		this.dsFile2.setColumn(nIdx, "colId", this.gvUploadCategory);
        	}
        };

        // 파일 업로드 완료 이벤트
        this.RaonkUpload_RAONKUPLOAD_UploadComplete = function(obj, paramObj)
        {
        	var allListArray = this.RaonkUpload.GetListInfo("json");
        	// 파일 업로드 후 첨부파일관리번호를 얻기 위한 함수
        	this.gfnUploadComplete("uploadComplete", allListArray, "dsFile", "fnCallback");
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        this.cfnClose = function()
        {
        	console.log('cfnClose');
        	//부모창 검색 조회
         	var sWinId = this.objApp.gdsOpenMenu.lookupAs(this.FRAME_MENUCOLUMNS.menuId, this.getOwnerFrame().form.fvMenuId.substring(0, 8), this.FRAME_MENUCOLUMNS.winId);
         	var objForm = this.objApp.gvFrsWork.all[sWinId];
        	objForm.form.divWork.form.cfnSearch(1);
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        // 데이터 조회
        this.selectTransaction = function()
        {
        	var strSvcId    = "select";
        	var strSvcUrl   = "crtr/coInfoInq.do";
        	var inData      = "";
        	var outData     = "dsGet=dsGet dsFile1=dsFile1 dsFile2=dsFile2";
        	var strArg      = "id=" + this.param.coId;
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 공통 코드 조회
        this.selectCmmTransaction = function()
        {
        	var strSvcId    = "combo";
        	var strSvcUrl   = "common/cmmCode.do";
        	var inData      = "";
        	var outData     = "dsCombo=dsCombo";
        	var strArg      = "cdTypeId=Y07 comboTy=S";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= false;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 사업자번호 중복 조회
        this.dupleChkBizNumber = function()
        {
        	var strSvcId    = "dupleBrno";
        	var strSvcUrl   = "crtr/dupleChkBizNumber.do";
        	var inData      = "dsGet=dsGet";
        	var outData     = "dsGet=dsGet";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= false;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };



        // 데이터 저장
        this.saveTransaction = function()
        {
        	var strSvcId    = "save";
        	var strSvcUrl   = "crtr/coInfoStrg.do";
        	var inData      = "dsGet=dsGet dsMvz=dsMvz dsFile=dsFile";
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
        			this.gfnDownloadSetting(this.RaonkUpload, this.dsFile2);

        			if (this.dsGet.getColumn(0, "") == "Y") {
        				this.divForm.form.Div00.form.pan05.visible = true;
        				this.divForm.form.Div00.form.pan06.visible = true;
        			}
        			break;

        		case "combo":
        			this.divForm.form.Div00.form.cboSeCd.index = 0;
        			break;
        		case "dupleBrno":
        			var gvRetMsg = this.objApp.getVariable("gvRetMsg");
        // 			if(this.dsGet.getColumn(0, "brnoChk") == "Y") {
        // 				this.gfnAlertMsg("msg", "MSG_011", ["인증되었습니다."]);
        // 			} else {
        // 				this.gfnAlertMsg("msg", "MSG_011", [this.dsGet.getColumn(0, "brnoChkDesc") + "입니다."]);
        // 			}
        			this.gfnAlertMsg("msg", "MSG_011", [gvRetMsg]);
        			this.dupleChk = true;
        			break;
        		case "save":
        			var gvRetMsg = this.objApp.getVariable("gvRetMsg");
        			this.gfnAlertMsg("save", gvRetMsg, "msgCallback");

        			if(this.opener) {
        				this.close();
        			} else {
        				var cMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        				this.gfnCloseMenu(cMenuId);
        			}

        		case "uploadComplete":
        			// 파일 업로드가 완료 된 후 첨부파일 과 같이 데이터 저장
        			console.log(this.dsFile.saveJSON());
        			this.saveTransaction();
        			break;
        	}
        };

        this.msgCallback = function(sPopupId, sRtn)
        {
        	var oRtn = JSON.parse(sRtn);

        	if(sPopupId == "save_confirm")
        	{
        		if(oRtn.result == "Y")
        		{
        			var obj = {
        				"atchFileId" : "",			// 기존 첨부파일 있을 경우 입력
        				"bsnsSeCd" : "COM",			// 업무구분코드
        				"prgrmId" : "COM023P01" 	// 프로그램ID (화면 ID)
        			}
        			var str = JSON.stringify(obj);
        			this.RaonkUpload.AddFormData('params', str);
        			this.RaonkUpload.Transfer();
        		}
        	} else if(sPopupId == "save")
        	{
        		if(this.opener)
        		{
        			this.close();
        		} else
        		{
        			var cMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        			this.gfnCloseMenu(cMenuId);
        		}
        	} else if(sPopupId == "file_all_del1")
        	{
        		this.gfnDeleteAllFile(this.RaonkUpload, this.dsFile1);
        	} else if(sPopupId == "file_all_del2")
        	{
        		this.gfnDeleteAllFile(this.RaonkUpload, this.dsFile2);
        	} else if(sPopupId == "file_del1")
        	{
        		this.gfnDeleteFile(this.RaonkUpload, this.dsFile1, oRtn.paramArg);
        	} else if(sPopupId == "file_del2")
        	{
        		this.gfnDeleteFile(this.RaonkUpload, this.dsFile2, oRtn.paramArg);
        	}
        };

        //API 콜백은 업데이트 중
        this.apiCallback = function(svcID, ret)
        {
        	switch(svcID)
        	{
        		case "tax":
        			if(ret != "")
        			{
        				console.log(ret);
        			}
        			break;
        	}
        }

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	this.divForm.form.Div00.form.pan05.visible = false;
        	this.divForm.form.Div00.form.pan06.visible = false;
        //	this.divPopBtn.visible = false;

        	if(this.param != null && this.param.coId != null && this.param.coId != '')
        	{
        		this.selectTransaction();
        		//this.selectCmmTransaction();
        	} else if (this.param != null && this.param.userId != null && this.param.userId != '') {
        		this.dsGet.setColumn(0, "frstRegId", this.param.userId);
        		this.dsGet.setColumn(0, "frstRegNm", this.param.userNm);

        		this.divTitle.visible = false;
        		this.divForm.form.Div00.form.pan05.visible = true;
        		this.divForm.form.Div00.form.pan06.visible = true;
        		this.divForm.top = "0px";
        		this.dsGet.setColumn(0, "mvmnRgnYn", "Y");
        	} else
        	{
        		var userId = this.objApp.gdsUser.getColumn(0, "userId");
        		var userNm = this.objApp.gdsUser.getColumn(0, "userNm");

        		this.dsGet.setColumn(0, "frstRegId", userId);
        		this.dsGet.setColumn(0, "frstRegNm", userNm);

        		//this.selectCmmTransaction();
        	}

        	this.gfnCmmCode("combo", "dsCombo", "BZENTY_SE", "S");
        }

        this.fnSetPopup = function()
        {
        	this.dsGet.setColumn(0, "frstRegId", this.param.userId);
        	this.dsGet.setColumn(0, "frstRegNm", this.param.userNm);

        	this.divTitle.visible = false;
        	this.divForm.top = "0px";
        	this.divPopBtn.visible = true;
        	this.divForm.form.divPopBtn.visible = false;

        	if (this.param.type != null && this.param.type == 'mvn') {
        		this.divForm.form.Div00.form.pan05.visible = true;
        		this.divForm.form.Div00.form.pan06.visible = true;
        		this.dsGet.setColumn(0, "mvmnRgnYn", "Y");
        	}
        }

        /*******************************************************************************************************************************
         * 각 RAONK 별 EVENT 영역
        *******************************************************************************************************************************/
        // 파일 추가
        this.divForm_Div04_btn_file_1_onclick = function(obj,e)
        {
        	// 데이터의 첨부파일 관리번호 입력 컬럼명
        	this.gvUploadCategory = "bizFile";		// 컬럼ID
        	this.RaonkUpload.OpenFileDialog();
        };

        this.divForm_Div04_btn_file_2_onclick = function(obj,e)
        {
        	this.gvUploadCategory = "certFile";
        	this.RaonkUpload.OpenFileDialog();
        };

        // 파일 그리드 클릭 이벤트
        this.divForm_Div00_Grid01_oncellclick = function(obj,e)
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
        this.divForm_Div00_Grid01_oncelldblclick = function(obj,e)
        {
        	if(e.col == 0) 	// 파일명을 더블클릭 시 다운로드
        	{
        		this.gfnDownloadFile(this.RaonkUpload, this.dsFile1, e);
        	}
        };

        this.divForm_Div00_Grid02_oncellclick = function(obj,e)
        {
        	if(e.col == 1) 	// 삭제 버튼 클릭
        	{
        		var param = {
        			"row" : e.row,
        			"col" : e.col
        		};

        		this.gfnConfirmMsg("file_del2", "MSG_002", "msgCallback", ["확인", "취소"], ["Y", "N"], param);
        	} else if(e.col == 0) // 파일명 클릭
        	{
        		this.gfnSelectFile(this.RaonkUpload, this.dsFile2, e);
        	}
        };

        this.divForm_Div00_Grid02_oncelldblclick = function(obj,e)
        {
        	if(e.col == 0) 	// 파일명을 더블클릭 시 다운로드
        	{
        		this.gfnDownloadFile(this.RaonkUpload, this.dsFile2, e);
        	}
        };

        this.divForm_Div04_btn_del_file_1_onclick = function(obj,e)
        {
        	this.gfnConfirmMsg("file_all_del1", "MSG_002", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        };

        this.divForm_Div04_btn_del_file_2_onclick = function(obj,e)
        {
        	this.gfnConfirmMsg("file_all_del2", "MSG_002", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divForm_Div05_Button00_00_00_00_00_onclick = function(obj,e)
        {
        	var bizNum = this.divForm.form.Div00.form.edtBrno.text;
        	if(bizNum != null && bizNum != "") {
        		this.gfn_Api_nationalTax("tax", bizNum, "apiCallback");
        	}
        };

        this.divForm_Div00_btnGrdRegi00_onclick = function(obj,e)
        {
        	this.dupleChkBizNumber();
        };

        this.divForm_Div00_rdoMvmnRgnYn_onitemchanged = function(obj,e)
        {
        	if(e.postvalue == "Y") {
        		this.divForm.form.Div00.form.pan05.visible = true;
        		this.divForm.form.Div00.form.pan06.visible = true;
        	} else {
        		this.divForm.form.Div00.form.pan05.visible = false;
        		this.divForm.form.Div00.form.pan06.visible = false;
        	}

        	this.resetScroll();
        };

        this.divForm_Div00_edtRprsTelno_onkillfocus = function(obj,e)
        {
        	var format = this.gfn_getHpFormat(obj._p_value.replaceAll("-", ""));
        	this.divForm.form.Div00.form.edtRprsTelno.value = format;
        };

        this.divForm_divPopBtn_Button00_00_onclick = function(obj,e)
        {
        	if (this.dupleChk) {
        		this.gfnConfirmMsg("save_confirm", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"], null);
        	} else {
        		this.gfnAlertMsg("msg", "MSG_011", ["중복체크 후 가능합니다."]);
        	}
        };

        this.btnMin_onclick = function(obj,e)
        {
        	var objNm = obj.name;
        	var objClass = obj.cssclass;
        	var objDiv = null;
        	var divVisible = false;

        	// 해당 div 찾아줌.
        	if(objNm == "btnMinPrcsDsctn") {
        		objDiv = this.divForm.form.Div00;
        	} else if(objNm == "btnMinAtfl") {
        		objDiv = this.divForm.form.Div02;
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

        this.dsFile1_onvaluechanged = function(obj,e)
        {
        	this.divForm.form.Div02.form.staFileCnt01.text = obj.rowcount;

        	if (obj.rowcount == 0) {
        		this.divForm.form.Div02.form.btn_del_file_1.visible = false;
        	} else {
        		this.divForm.form.Div02.form.btn_del_file_1.visible = true;
        	}
        };

        this.dsFile2_onvaluechanged = function(obj,e)
        {
        	this.divForm.form.Div02.form.staFileCnt02.text = obj.rowcount;

        	if (obj.rowcount == 0) {
        		this.divForm.form.Div02.form.btn_del_file_2.visible = false;
        	} else {
        		this.divForm.form.Div02.form.btn_del_file_2.visible = true;
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.Div00.form.edtCoId.addEventHandler("onchanged",this.divForm_Div00_edt00_00_onchanged,this);
            this.divForm.form.Div00.form.rdoMvmnRgnYn.addEventHandler("onitemchanged",this.divForm_Div00_rdoMvmnRgnYn_onitemchanged,this);
            this.divForm.form.Div00.form.edtRprsTelno.addEventHandler("onkillfocus",this.divForm_Div00_edtRprsTelno_onkillfocus,this);
            this.divForm.form.Div00.form.btnGrdRegi00.addEventHandler("onclick",this.divForm_Div00_btnGrdRegi00_onclick,this);
            this.divForm.form.Div00.form.cboSeCd.addEventHandler("onitemchanged",this.divForm_divSch_Combo01_onitemchanged,this);
            this.divForm.form.btnMinPrcsDsctn.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.btnMinAtfl.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.Div02.form.btn_file_1.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.divForm.form.Div02.form.btn_del_file_1.addEventHandler("onclick",this.divForm_Div04_btn_del_file_1_onclick,this);
            this.divForm.form.Div02.form.Grid01.addEventHandler("oncellclick",this.divForm_Div00_Grid01_oncellclick,this);
            this.divForm.form.Div02.form.Grid01.addEventHandler("oncelldblclick",this.divForm_Div00_Grid01_oncelldblclick,this);
            this.divForm.form.Div02.form.btn_file_2.addEventHandler("onclick",this.divForm_Div04_btn_file_2_onclick,this);
            this.divForm.form.Div02.form.btn_del_file_2.addEventHandler("onclick",this.divForm_Div04_btn_del_file_2_onclick,this);
            this.divForm.form.Div02.form.Grid02.addEventHandler("oncellclick",this.divForm_Div00_Grid02_oncellclick,this);
            this.divForm.form.Div02.form.Grid02.addEventHandler("oncelldblclick",this.divForm_Div00_Grid02_oncelldblclick,this);
            this.divForm.form.divPopBtn.form.Button00_00.addEventHandler("onclick",this.divForm_divPopBtn_Button00_00_onclick,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterAddFile",this.RaonkUpload_RAONKUPLOAD_AfterAddFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_CreationComplete",this.RaonkUpload_RAONKUPLOAD_CreationComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_UploadComplete",this.RaonkUpload_RAONKUPLOAD_UploadComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_OnError",this.RaonkUpload_RAONKUPLOAD_OnError,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_BeforeAddFile",this.RaonkUpload_RAONKUPLOAD_BeforeAddFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterAddAllFile",this.RaonkUpload_RAONKUPLOAD_AfterAddAllFile,this);
            this.dsFile1.addEventHandler("onvaluechanged",this.dsFile1_onvaluechanged,this);
            this.dsFile2.addEventHandler("onvaluechanged",this.dsFile2_onvaluechanged,this);
        };
        this.loadIncludeScript("COM023P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
