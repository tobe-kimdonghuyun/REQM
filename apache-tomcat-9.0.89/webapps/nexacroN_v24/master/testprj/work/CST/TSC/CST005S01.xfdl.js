(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST005S01");
            this.set_titletext("신청자정보(퇴거)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBldgSeCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTaskPrcsFlw","0","300","100.00%","240",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("서비스 흐름");
            obj.set_fittocontents("height");
            obj.set_url("work::CST/TSC/template18.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divInfoGuide","0","70","100%","250",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("작업방법 안내");
            obj.set_cssclass("div_WF_InfoGuide");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Button("btnFold",null,"10","34","34","10",null,null,null,null,null,this.divInfoGuide.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_visible("false");
            this.divInfoGuide.addChild(obj.name, obj);

            obj = new Panel("panForm","0","0","100.00%","1471.943",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_type("horizontal");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem06\" componentid=\"panInfoGuide\"/><PanelItem id=\"PanelItem01\" componentid=\"divInfoGuide\"/><PanelItem id=\"PanelItem05\" componentid=\"panTaskPrcsFlw\"/><PanelItem id=\"PanelItem02\" componentid=\"divTaskPrcsFlw\"/><PanelItem id=\"PanelItem03\" componentid=\"panAplcntInfo\"/><PanelItem id=\"PanelItem04\" componentid=\"divAplcntInfo\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle00","60","790","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("신청자정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","1213","790","125","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnAplcntInfo\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("btnAplcntInfo","1180","610","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_ACMinus");
            this.addChild(obj.name, obj);

            obj = new Panel("panAplcntInfo","60","790","100.00%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("5");
            obj.set_visible("true");
            obj.set_fittocontents("none");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("divAplcntInfo","1310","690","100.00%","842",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div00");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel00","0","0","100%","46",null,null,null,null,null,null,this.divAplcntInfo.form);
            obj.set_taborder("0");
            obj.set_text("신청구분");
            obj.set_cssclass("sta_WF_Label");
            this.divAplcntInfo.addChild(obj.name, obj);

            obj = new Edit("edtAplySeNm","0","46","100%","40",null,null,null,null,null,null,this.divAplcntInfo.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_text("");
            this.divAplcntInfo.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","20.00","0","300","86",null,null,null,null,null,null,this.divAplcntInfo.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtAplySeNm\"/></Contents>");
            this.divAplcntInfo.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","31","100%","40",null,null,null,null,null,null,this.divAplcntInfo.form);
            obj.set_taborder("52");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Edit00\"/><PanelItem id=\"PanelItem01\" componentid=\"btn00\"/></Contents>");
            this.divAplcntInfo.addChild(obj.name, obj);

            obj = new Panel("pan00","0","0","100%","93",null,null,null,null,null,null,this.divAplcntInfo.form);
            obj.set_taborder("3");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/></Contents>");
            this.divAplcntInfo.addChild(obj.name, obj);

            obj = new Static("staLabel01_00","0","0","100%","46",null,null,null,null,null,null,this.divAplcntInfo.form);
            obj.set_taborder("4");
            obj.set_text("계약선택여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divAplcntInfo.addChild(obj.name, obj);

            obj = new Radio("rdoCtrtChcYn","0","46","280","40",null,null,null,null,null,null,this.divAplcntInfo.form);
            obj.set_taborder("5");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divAplcntInfo_form_rdoCtrtChcYn_innerdataset = new nexacro.NormalDataset("divAplcntInfo_form_rdoCtrtChcYn_innerdataset", obj);
            divAplcntInfo_form_rdoCtrtChcYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">계약선택</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">수기입력</Col></Row></Rows>");
            obj.set_innerdataset(divAplcntInfo_form_rdoCtrtChcYn_innerdataset);
            obj.set_text("계약선택");
            obj.set_value("0");
            obj.set_index("0");
            this.divAplcntInfo.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","20.00","0","300","86",null,null,null,null,null,null,this.divAplcntInfo.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"rdoCtrtChcYn\"/></Contents>");
            this.divAplcntInfo.addChild(obj.name, obj);

            obj = new Panel("panBlank","650.00","0","300","1",null,null,null,null,null,null,this.divAplcntInfo.form);
            obj.set_taborder("7");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divAplcntInfo.addChild(obj.name, obj);

            obj = new Panel("panCtrtChcYn","0","143","100.00%","93",null,null,null,null,null,null,this.divAplcntInfo.form);
            obj.set_taborder("8");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"panBlank\"/></Contents>");
            this.divAplcntInfo.addChild(obj.name, obj);

            obj = new Static("staLabel03_00","0","0","100%","46",null,null,null,null,null,null,this.divAplcntInfo.form);
            obj.set_taborder("9");
            obj.set_text("신청자");
            obj.set_cssclass("sta_WF_Label");
            this.divAplcntInfo.addChild(obj.name, obj);

            obj = new Edit("edt00_02","0","46","100%","40",null,null,null,null,null,null,this.divAplcntInfo.form);
            obj.set_taborder("10");
            obj.set_value("신청자 성명");
            obj.set_readonly("true");
            obj.set_text("신청자 성명");
            this.divAplcntInfo.addChild(obj.name, obj);

            obj = new Panel("panAplcntNm","30.00","10","300","86",null,null,null,null,null,null,this.divAplcntInfo.form);
            obj.set_taborder("11");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_02\"/></Contents>");
            this.divAplcntInfo.addChild(obj.name, obj);

            obj = new Static("staLabel03_01","10.00","10","100%","46",null,null,null,null,null,null,this.divAplcntInfo.form);
            obj.set_taborder("12");
            obj.set_text("신청자 회사명");
            obj.set_cssclass("sta_WF_Label");
            this.divAplcntInfo.addChild(obj.name, obj);

            obj = new Edit("edt00_03_01","10.00","56","100%","40",null,null,null,null,null,null,this.divAplcntInfo.form);
            obj.set_taborder("13");
            obj.set_readonly("true");
            obj.set_text("");
            this.divAplcntInfo.addChild(obj.name, obj);

            obj = new Panel("panAplcntCoNm","650.00","0","300","86",null,null,null,null,null,null,this.divAplcntInfo.form);
            obj.set_taborder("14");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_03_01\"/></Contents>");
            this.divAplcntInfo.addChild(obj.name, obj);

            obj = new Panel("panAplcnt","0","236","100.00%","93",null,null,null,null,null,null,this.divAplcntInfo.form);
            obj.set_taborder("15");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panAplcntNm\"/><PanelItem id=\"PanelItem02\" componentid=\"panAplcntCoNm\"/></Contents>");
            this.divAplcntInfo.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01","0","0","100%","41",null,null,null,null,null,null,this.divAplcntInfo.form);
            obj.set_taborder("16");
            obj.set_text("건물구분");
            obj.set_cssclass("sta_WF_Label_E");
            this.divAplcntInfo.addChild(obj.name, obj);

            obj = new Combo("cmbBldgSeCd","0.00","41","100%","45",null,null,null,null,null,null,this.divAplcntInfo.form);
            obj.set_taborder("17");
            obj.set_flexgrow("1");
            obj.set_innerdataset("dsBldgSeCd");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("제1터미널역");
            obj.set_value("");
            obj.set_index("-1");
            this.divAplcntInfo.addChild(obj.name, obj);

            obj = new Panel("panBldgSeChc","30.00","10","300","86",null,null,null,null,null,null,this.divAplcntInfo.form);
            obj.set_taborder("18");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staLabel03_00_01\"/><PanelItem id=\"PanelItem03\" componentid=\"cmbBldgSeCd\"/></Contents>");
            this.divAplcntInfo.addChild(obj.name, obj);

            obj = new Panel("PanelBlank","660.00","10","300","1",null,null,null,null,null,null,this.divAplcntInfo.form);
            obj.set_taborder("19");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divAplcntInfo.addChild(obj.name, obj);

            obj = new Panel("panBldgSe","0","329","100.00%","93",null,null,null,null,null,null,this.divAplcntInfo.form);
            obj.set_taborder("20");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panBldgSeChc\"/><PanelItem id=\"PanelItem02\" componentid=\"PanelBlank\"/></Contents>");
            this.divAplcntInfo.addChild(obj.name, obj);

            obj = new Button("btn00","1176","418","90","40",null,null,null,null,null,null,this.divAplcntInfo.form);
            obj.set_taborder("51");
            obj.set_text("위치정보");
            this.divAplcntInfo.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_00","0","0","100%","46",null,null,null,null,null,null,this.divAplcntInfo.form);
            obj.set_taborder("21");
            obj.set_text("계약명");
            obj.set_cssclass("sta_WF_Label_E");
            this.divAplcntInfo.addChild(obj.name, obj);

            obj = new Div("divCtrtChc","0","46","100%","40",null,null,null,null,null,null,this.divAplcntInfo.form);
            obj.set_taborder("22");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divAplcntInfo.addChild(obj.name, obj);

            obj = new Edit("Edit00","0","0",null,"40","0",null,null,null,null,null,this.divAplcntInfo.form.divCtrtChc.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_readonly("true");
            this.divAplcntInfo.form.divCtrtChc.addChild(obj.name, obj);

            obj = new Button("btnCtrtChc","Edit00:-40","0","40","40",null,null,null,null,null,null,this.divAplcntInfo.form.divCtrtChc.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            obj.set_text("");
            this.divAplcntInfo.form.divCtrtChc.addChild(obj.name, obj);

            obj = new Panel("panCtrtNm","30.00","10","300","86",null,null,null,null,null,null,this.divAplcntInfo.form);
            obj.set_taborder("23");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"divCtrtChc\"/></Contents>");
            this.divAplcntInfo.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00_00","10.00","10","100%","46",null,null,null,null,null,null,this.divAplcntInfo.form);
            obj.set_taborder("24");
            obj.set_text("위치정보(룸번호)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divAplcntInfo.addChild(obj.name, obj);

            obj = new Edit("Edit00","650","418","100%","40",null,null,null,null,null,null,this.divAplcntInfo.form);
            obj.set_taborder("25");
            obj.set_readonly("true");
            this.divAplcntInfo.addChild(obj.name, obj);

            obj = new Panel("panPstnInfo","660.00","10","300","86",null,null,null,null,null,null,this.divAplcntInfo.form);
            obj.set_taborder("26");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/></Contents>");
            this.divAplcntInfo.addChild(obj.name, obj);

            obj = new Panel("panCtrtPstnInfo","0","422","100.00%","93",null,null,null,null,null,null,this.divAplcntInfo.form);
            obj.set_taborder("27");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panCtrtNm\"/><PanelItem id=\"PanelItem02\" componentid=\"panPstnInfo\"/></Contents>");
            this.divAplcntInfo.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_01","0","0","100%","46",null,null,null,null,null,null,this.divAplcntInfo.form);
            obj.set_taborder("28");
            obj.set_text("청구고객코드");
            obj.set_cssclass("sta_WF_Label");
            this.divAplcntInfo.addChild(obj.name, obj);

            obj = new Edit("edt00_02_00_00","0","46","100%","40",null,null,null,null,null,null,this.divAplcntInfo.form);
            obj.set_taborder("29");
            obj.set_readonly("true");
            obj.set_text("");
            this.divAplcntInfo.addChild(obj.name, obj);

            obj = new Panel("panClmCustCd","30.00","10","300","86",null,null,null,null,null,null,this.divAplcntInfo.form);
            obj.set_taborder("30");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_02_00_00\"/></Contents>");
            this.divAplcntInfo.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00_01","10.00","10","100%","46",null,null,null,null,null,null,this.divAplcntInfo.form);
            obj.set_taborder("31");
            obj.set_text("청구주소");
            obj.set_cssclass("sta_WF_Label");
            this.divAplcntInfo.addChild(obj.name, obj);

            obj = new Edit("edt00_03_01_00_00","848.00","561","100%","40",null,null,null,null,null,null,this.divAplcntInfo.form);
            obj.set_taborder("32");
            obj.set_readonly("true");
            obj.set_flexgrow("1");
            obj.set_text("");
            this.divAplcntInfo.addChild(obj.name, obj);

            obj = new Panel("panClmAddr","660.00","10","300","86",null,null,null,null,null,null,this.divAplcntInfo.form);
            obj.set_taborder("33");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00_01\"/><PanelItem id=\"PanelItem03\" componentid=\"edt00_03_01_00_00\"/></Contents>");
            this.divAplcntInfo.addChild(obj.name, obj);

            obj = new Panel("panClmCust","0","515","100.00%","93",null,null,null,null,null,null,this.divAplcntInfo.form);
            obj.set_taborder("34");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panClmCustCd\"/><PanelItem id=\"PanelItem02\" componentid=\"panClmAddr\"/></Contents>");
            this.divAplcntInfo.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_01_00","0","0","100%","46",null,null,null,null,null,null,this.divAplcntInfo.form);
            obj.set_taborder("35");
            obj.set_text("신청자(수기입력)");
            obj.set_cssclass("sta_WF_Label");
            this.divAplcntInfo.addChild(obj.name, obj);

            obj = new Edit("edt00_02_00_00_00","0","46","100%","40",null,null,null,null,null,null,this.divAplcntInfo.form);
            obj.set_taborder("36");
            obj.set_readonly("false");
            obj.set_text("");
            this.divAplcntInfo.addChild(obj.name, obj);

            obj = new Panel("panAplcntHwrtInpt","30.00","10","300","86",null,null,null,null,null,null,this.divAplcntInfo.form);
            obj.set_taborder("37");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_02_00_00_00\"/></Contents>");
            this.divAplcntInfo.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00_01_00","10.00","10","100%","46",null,null,null,null,null,null,this.divAplcntInfo.form);
            obj.set_taborder("38");
            obj.set_text("계약번호(수기입력)");
            obj.set_cssclass("sta_WF_Label");
            this.divAplcntInfo.addChild(obj.name, obj);

            obj = new Edit("edt00_03_01_00_00_00","10.00","56","100%","40",null,null,null,null,null,null,this.divAplcntInfo.form);
            obj.set_taborder("39");
            obj.set_text("");
            this.divAplcntInfo.addChild(obj.name, obj);

            obj = new Panel("panCtrtNoHwrtInpt","660.00","10","300","86",null,null,null,null,null,null,this.divAplcntInfo.form);
            obj.set_taborder("40");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_03_01_00_00_00\"/></Contents>");
            this.divAplcntInfo.addChild(obj.name, obj);

            obj = new Panel("panAplcntCtrtNo","0","608","100.00%","93",null,null,null,null,null,null,this.divAplcntInfo.form);
            obj.set_taborder("41");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panAplcntHwrtInpt\"/><PanelItem id=\"PanelItem02\" componentid=\"panCtrtNoHwrtInpt\"/></Contents>");
            this.divAplcntInfo.addChild(obj.name, obj);

            obj = new Static("staLabel05_00_00","0","0","100%","46",null,null,null,null,null,null,this.divAplcntInfo.form);
            obj.set_taborder("42");
            obj.set_text("휴대폰 번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.divAplcntInfo.addChild(obj.name, obj);

            obj = new Edit("Edit01","0","50","100%","39",null,null,null,null,null,null,this.divAplcntInfo.form);
            obj.set_taborder("43");
            obj.set_readonly("true");
            this.divAplcntInfo.addChild(obj.name, obj);

            obj = new Static("sta00_00","0","93","100%","43",null,null,null,null,null,null,this.divAplcntInfo.form);
            obj.set_taborder("44");
            obj.set_text("휴대폰번호는 우측상단 \"사용자 이름\" 클릭 후 해당 메뉴에서 등록 및 수정이 가능합니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.divAplcntInfo.addChild(obj.name, obj);

            obj = new Panel("panClphNo","20.00","0","300","136",null,null,null,null,null,null,this.divAplcntInfo.form);
            obj.set_taborder("45");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Edit01\"/><PanelItem id=\"PanelItem04\" componentid=\"sta00_00\"/></Contents>");
            this.divAplcntInfo.addChild(obj.name, obj);

            obj = new Static("staLabel05_01_00","10.00","10","100%","46",null,null,null,null,null,null,this.divAplcntInfo.form);
            obj.set_taborder("46");
            obj.set_text("룸번호(수기입력)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divAplcntInfo.addChild(obj.name, obj);

            obj = new Edit("edtHwrtInptPstnInfoCn","10.00","60","100%","38",null,null,null,null,null,null,this.divAplcntInfo.form);
            obj.set_taborder("47");
            this.divAplcntInfo.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","10.00","102","100%","44",null,null,null,null,null,null,this.divAplcntInfo.form);
            obj.set_taborder("48");
            obj.set_text("예)룸번호1,룸번호2,룸번호3,룸번호4");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.divAplcntInfo.addChild(obj.name, obj);

            obj = new Panel("panPstnInfoHwrtInpt","650.00","0","300","136",null,null,null,null,null,null,this.divAplcntInfo.form);
            obj.set_taborder("49");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_01_00\"/><PanelItem id=\"PanelItem03\" componentid=\"edtHwrtInptPstnInfoCn\"/><PanelItem id=\"PanelItem04\" componentid=\"sta00_00_00\"/></Contents>");
            this.divAplcntInfo.addChild(obj.name, obj);

            obj = new Panel("pan08","0","701","100.00%","141",null,null,null,null,null,null,this.divAplcntInfo.form);
            obj.set_taborder("50");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_fittocontents("height");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panClphNo\"/><PanelItem id=\"PanelItem02\" componentid=\"panPstnInfoHwrtInpt\"/></Contents>");
            this.divAplcntInfo.addChild(obj.name, obj);

            obj = new Panel("panTaskPrcsFlw","1342","280","100.00%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("8");
            obj.set_visible("true");
            obj.set_fittocontents("none");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle00_00","0","20","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("서비스흐름 안내");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","1165","20","113","50",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnTaskPrcsFlw\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("btnTaskPrcsFlw","68","5","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_ACMinus");
            this.addChild(obj.name, obj);

            obj = new Panel("panInfoGuide","1350","280","100.00%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("12");
            obj.set_visible("true");
            obj.set_fittocontents("none");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle00_00_00","0","20","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("작업방법 안내");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00","1165","20","113","50",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnInfoGuide\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("btnInfoGuide","68","5","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_ACMinus");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTaskPrcsFlw
            obj = new Layout("default","",0,0,this.divTaskPrcsFlw.form,function(p){});
            this.divTaskPrcsFlw.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divInfoGuide.form
            obj = new Layout("default","",0,0,this.divInfoGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnFold.set_taborder("0");
                p.btnFold.set_cssclass("btn_WF_ACMinus");
                p.btnFold.set_visible("false");
                p.btnFold.move(null,"10","34","34","10",null);
            	}
            );
            this.divInfoGuide.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divInfoGuide.form
            obj = new Layout("mobile","",0,0,this.divInfoGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divInfoGuide.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divAplcntInfo.form.divCtrtChc.form
            obj = new Layout("default","",0,0,this.divAplcntInfo.form.divCtrtChc.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Edit00.set_taborder("0");
                p.Edit00.set_cssclass("edt_WF_EdtSch");
                p.Edit00.set_readonly("true");
                p.Edit00.move("0","0",null,"40","0",null);

                p.btnCtrtChc.set_taborder("1");
                p.btnCtrtChc.set_cssclass("btn_WF_EdtSch");
                p.btnCtrtChc.set_text("");
                p.btnCtrtChc.move("Edit00:-40","0","40","40",null,null);
            	}
            );
            this.divAplcntInfo.form.divCtrtChc.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divAplcntInfo.form.divCtrtChc.form
            obj = new Layout("mobile","",0,0,this.divAplcntInfo.form.divCtrtChc.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divAplcntInfo.form.divCtrtChc.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divAplcntInfo.form
            obj = new Layout("default","",0,0,this.divAplcntInfo.form,function(p){});
            obj.set_type("vertical");
            this.divAplcntInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,800,this,function(p){});
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divAplcntInfo.form.edtAplySeNm","value","dsMst","aplySeNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divAplcntInfo.form.edt00_02","value","dsMst","aplcntNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divAplcntInfo.form.rdoCtrtChcYn","value","dsMst","ctrtChcYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divAplcntInfo.form.cmbBldgSeCd","value","dsMst","bldgSeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divAplcntInfo.form.divCtrtChc.form.Edit00","value","dsMst","ctrtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divAplcntInfo.form.edt00_02_00_00","value","dsMst","clmCustCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divAplcntInfo.form.edt00_02_00_00_00","value","dsMst","hwrtInptAplcntNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divAplcntInfo.form.Edit01","value","dsMst","mblTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divAplcntInfo.form.edtHwrtInptPstnInfoCn","value","dsMst","hwrtInptPstnInfoCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divAplcntInfo.form.edt00_03_01_00_00_00","value","dsMst","hwrtInptCtrtNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divAplcntInfo.form.Edit00","value","dsMst","pstnInfoRnb");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divAplcntInfo.form.edt00_03_01","value","dsMst","aplcntInstNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divAplcntInfo.form.staLabel01_00","cssclass","dsAtrb","ccAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divAplcntInfo.form.staLabel03_00_01","cssclass","dsAtrb","ccAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divAplcntInfo.form.staLabel03_00_00_00","cssclass","dsAtrb","ccAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divAplcntInfo.form.staLabel05_00_00","cssclass","dsAtrb","ccAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divAplcntInfo.form.staLabel05_01_00","cssclass","dsAtrb","ccAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divAplcntInfo.form.divCtrtChc.form.btnCtrtChc","visible","dsAtrb","isTAS00233");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divAplcntInfo.form.rdoCtrtChcYn","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divAplcntInfo.form.cmbBldgSeCd","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divAplcntInfo.form.edt00_02_00_00_00","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divAplcntInfo.form.edt00_03_01_00_00_00","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divAplcntInfo.form.edtHwrtInptPstnInfoCn","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divAplcntInfo.form.edt00_03_01_00_00","value","dsMst","clmWholAddr");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","work::CST/TSC/template18.xfdl");
        };
        
        // User Script
        this.addIncludeScript("CST005S01.xfdl","xjs::TaskCom.xjs");
        this.registerScript("CST005S01.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	CST005S01.xfdl
        *  @Creator 	ELUON INS
        *  @CreateDate 	2024/09/12
        *  @Desction
        *  @Author
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/09/12			김주화					최초생성
        *******************************************************************************
        */

        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;  // 업무공통
        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
            trace(this.name + "_LLLLLLLLLLLLLLLLLLLLLLLLLL_11111");
        	this.gfnFormOnload(obj);        // 필수함수

            // Master Dataset
            this.dsMst = this.lookup("dsMst");
        	this.dsMst.addEventHandler("onvaluechanged", this.dsMst_onvaluechanged, this);
        	// 속성 Dataset
            this.dsAtrb = this.lookup("dsAtrb");
        	this.dsAtrb.addEventHandler("onvaluechanged", this.dsAtrb_onvaluechanged, this);
        	// 단계별 속성 값 조회
        	this.cfnGetAtrb = this.lookupFunc("cfnGetAtrb");
        	// 업무처리흐름 정보 유무 확인
        	this.cfnIsExstTaskPrcsFlw = this.lookupFunc("cfnIsExstTaskPrcsFlw");
        	// 건물구분
        	this.cfnEtcCdLoad({ dsBldgSeCd:"{id:'selectTaskComListCd', cnd:{cdTyId:'TSPLOC', grp1CdId:'TSPLOCTSC'}}"});  // 신청위치구분_입주/퇴거

        	trace(this.name + "_LLLLLLLLLLLLLLLLLLLLLLLLLL_22222");

        };

        this.dsMst_onvaluechanged = function(obj,e)
        {
        	// 신규 건 시 처리
            if(this.gfnIsNull(e.columnid) && this.gfnIsNull(this.dsMst.getColumn(0, "aplcntId"))) {
        		this.dsMst.setColumn(0, "aplcntId"    , this.objApp.gdsUser.getColumn(0, "userId"      ));  // 신청자ID(유저ID)
        		this.dsMst.setColumn(0, "aplcntInstCd", this.objApp.gdsUser.getColumn(0, "coId"        ));  // 신청자기관코드(회사ID)
        		this.dsMst.setColumn(0, "aplcntDeptCd", this.objApp.gdsUser.getColumn(0, "deptId"      ));  // 신청자부서코드(부서ID)
        		this.dsMst.setColumn(0, "mblTelno"    , this.objApp.gdsUser.getColumn(0, "userMblTelno"));  // 휴대폰 번호
        	}

        	// 신청 구분명이 없고, 신청 구분코드가 있으면...
        	if(this.gfnIsNull(this.dsMst.getColumn(0,"aplySeNm")) && !this.gfnIsNull(this.dsMst.getColumn(0,"aplySeCd"))) {
        	    this.dsMst.setColumn(0,"aplySeNm", " ");
        		this.cfnGetAplySeNm({ id:this.divAplcntInfo.form.edtAplySeNm.name, cbf:"fnCallback", aplySeCd:this.dsMst.getColumn(0, "aplySeCd") });
        	}

        	// 계약선택여부
        	if(this.gfnIsNull(this.dsMst.getColumn(0, "ctrtChcYn")) || e.columnid == "ctrtChcYn") {
        	    if(this.gfnIsNull(this.dsMst.getColumn(0, "ctrtChcYn"))) {
        			this.dsMst.setColumn(0, "ctrtChcYn", "0");  // 수기입력
        		}

        		var isHwrtInpt = this.dsMst.getColumn(0, "ctrtChcYn") == "0";  // "0": 수기입력
        		// 수기입력
        		 this.divAplcntInfo.form.panAplcntCtrtNo.visible     = isHwrtInpt;   // 신청자(수기입력), 계약번호(수기입력)
                 this.divAplcntInfo.form.panPstnInfoHwrtInpt.visible = isHwrtInpt;   // 위치정보(수기입력)

        		this.divAplcntInfo.form.panAplcnt.visible           = !isHwrtInpt;  // 신청자, 신청자회사명
        		this.divAplcntInfo.form.panCtrtPstnInfo.visible     = !isHwrtInpt;  // 계약명,위치정보(룸번호)
                this.divAplcntInfo.form.panClmCust.visible          = !isHwrtInpt;  // 청구고객코드, 청구주소

        		if(isHwrtInpt) {          // 수기입력
        			this.dsMst.setColumn(0, "aplcntNm"          , "");  // 신청자
        			this.dsMst.setColumn(0, "aplcntCoNm"        , "");  // 신청자회사명
        		    this.dsMst.setColumn(0, "ctrtNm"            , "");  // 계약명
        			this.dsMst.setColumn(0, "pstnInfoRnb"       , "");  // 위치정보(룸번호)
                    this.dsMst.setColumn(0, "clmCustCd"         , "");  // 청구고객코드
        			this.dsMst.setColumn(0, "clmAddr"           , "");  // 청구주소
        		} else {
        			this.dsMst.setColumn(0, "hwrtInptAplcntNm"  , "");  // 신청자(수기입력)
        			this.dsMst.setColumn(0, "hwrtInptCtrtNo"    , "");  // 계약번호(수기입력)
        			this.dsMst.setColumn(0, "hwrtInptPstnInfoCn", "");  // 위치정보(수기입력)
        			this.dsMst.setColumn(0, "aplcntNm"          , this.objApp.gdsUser.getColumn(0, "userNm"));  // 신청자명(유저명)
        			this.dsMst.setColumn(0, "aplcntInstNm"      , this.objApp.gdsUser.getColumn(0, "coNm"  ));  // 신청자기관명(회사명)
        		}
        	}

        	this.resetScroll();
        };

        this.dsAtrb_onvaluechanged = function(obj,e)
        {
        	// 가이드
        	this.panInfoGuide.visible = !this.cfnGetAtrb.call("roAplcfmWrt");  // 신청서작성/보완 시
        	this.divInfoGuide.visible = this.panInfoGuide.visible;
        	// 업무흐름
        	this.divTaskPrcsFlw.visible = !this.panInfoGuide.visible;   // 신청서작성 단계가 아니면
        	this.panTaskPrcsFlw.visible = this.divTaskPrcsFlw.visible;  // 신청서작성 단계가 아니면
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function(srvcId, errCd, errMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errCd != 0) { return; }

        	switch(srvcId) {
        		case this.divAplcntInfo.form.edtAplySeNm.name :  // 신청구분
        			this.dsMst.setColumn(0, "aplySeNm", this.cfnGvbkAplySeNm());

        			break;

        		default :
        			break;
        	}
        };

        //팝업에 관한 콜백 함수
        this.fnPopupCallback = function(sPopupId, oRtn)
        {
        	if(!oRtn) { return; };

        	switch(sPopupId) {
        		case this.divAplcntInfo.form.divCtrtChc.form.btnCtrtChc.name :  // 계약선택
        		    if(!this.gfnIsNull(oRtn)) {
        			    oRtn = JSON.parse(oRtn);
        				this.dsMst.setColumn(0, "ctrtNo"     , oRtn.ctrtNo   );  // 계약번호
        				this.dsMst.setColumn(0, "ctrtNm"     , oRtn.ctrtNm   );  // 계약명
        				this.dsMst.setColumn(0, "clmCustCd"  , oRtn.clmCustCd);  // 청구고객코드
        				this.dsMst.setColumn(0, "clmZip"     , oRtn.zip      );  // 청구우편번호
        				this.dsMst.setColumn(0, "clmAddr"    , oRtn.clmAddr  );  // 청구주소
        				this.dsMst.setColumn(0, "clmDtlAddr" , oRtn.clmDaddr );  // 청구상세주소
        				this.dsMst.setColumn(0, "clmWholAddr", oRtn.clmAddr + " " + oRtn.clmDaddr );  // 청구전체주소
        				this.dsMst.setColumn(0, "pstnInfoRnb", oRtn.rnb      );  // 위치정보(룸번호)
        			}

        			break;

        		default :
        			break;
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.cfnIsVldDat = function() {
            console.log(this.name + "_VVVVVVVVVVVVVVVVVVVVVVVVVVVVVV");

        	// 신청서 작성 및 보완 단계만 점검
        	if(this.cfnGetAtrb.call("roAplcfmWrt")) { return true; }

        	// 건물구분 확인
        	if(this.gfnIsNull( this.dsMst.getColumn(0, "bldgSeCd"))) {
        		// {0}는(은) 필수 항목입니다!
        		this.gfnAlertMsg("CST_004", "CST_004", ["건물구분"], function() {
        			this.parent.parent.setStepIndex(0);
        			this.divAplcntInfo.form.cmbBldgSeCd.setFocus();
        		});

        		return false;
        	}

        	// 위치정보(수기입력)
        	if(this.gfnIsNull( this.dsMst.getColumn(0, "hwrtInptPstnInfoCn"))) {
        		// {0}는(은) 필수 항목입니다!
        		this.gfnAlertMsg("CST_004", "CST_004", ["위치정보(수기입력)"], function() {
        			this.parent.parent.setStepIndex(0);
        			this.divAplcntInfo.form.edtHwrtInptPstnInfoCn.setFocus();
        		});

        		return false;
        	}

        	return true;
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/

        // 계약선택팝업 버튼 클릭
        this.divCtrtChc_btnCtrtChc_onclick = function(obj,e)
        {
        	var oOption = { title:"계약선택", titlebar:true, width:900, height:700 };
        	this.gfnOpenPopup(this.divAplcntInfo.form.divCtrtChc.form.btnCtrtChc.name, "work::CST/TSC/CST002P01.xfdl", "", "fnPopupCallback", oOption);
        };

        // 펼침(축소) 버튼 클릭
        this.Button_onclick = function(obj,e)
        {
        	// 펼침(축소)
        	this.cfnFold(obj, e.ctrlkey);
        };

        this.Button_ondblclick = function(obj,e)
        {
        	// 접기(펼침)
            this.cfnFold(obj, true);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divInfoGuide.form.btnFold.addEventHandler("onclick",this.Button_onclick,this);
            this.btnAplcntInfo.addEventHandler("onclick",this.Button_onclick,this);
            this.btnAplcntInfo.addEventHandler("ondblclick",this.Button_ondblclick,this);
            this.divAplcntInfo.form.divCtrtChc.form.btnCtrtChc.addEventHandler("onclick",this.divCtrtChc_btnCtrtChc_onclick,this);
            this.btnTaskPrcsFlw.addEventHandler("onclick",this.Button_onclick,this);
            this.btnTaskPrcsFlw.addEventHandler("ondblclick",this.Button_ondblclick,this);
            this.btnInfoGuide.addEventHandler("onclick",this.Button_onclick,this);
            this.btnInfoGuide.addEventHandler("ondblclick",this.Button_ondblclick,this);
        };
        this.loadIncludeScript("CST005S01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
