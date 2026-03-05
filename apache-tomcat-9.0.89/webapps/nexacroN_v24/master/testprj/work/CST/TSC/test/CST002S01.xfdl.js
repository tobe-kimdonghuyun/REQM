(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST002S01");
            this.set_titletext("신청자정보(시설물설치)");
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
            obj.set_cssclass("sta_WF_Label");
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
            obj.set_text("위치정보(수기입력)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divAplcntInfo.addChild(obj.name, obj);

            obj = new Edit("edtHwrtInptPstnInfoCn","10.00","60","100%","38",null,null,null,null,null,null,this.divAplcntInfo.form);
            obj.set_taborder("47");
            this.divAplcntInfo.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","10.00","102","100%","44",null,null,null,null,null,null,this.divAplcntInfo.form);
            obj.set_taborder("48");
            obj.set_text("예)건물명 / 층별 / 룸번호");
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
        this.registerScript("CST002S01.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	CST002S01.xfdl
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

        // include "xjs::TaskCom.xjs";  // 업무공통
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
        	this.cfnEtcCdLoad({ dsBldgSeCd:"{id:'selectTaskComListCd', cnd:{cdTyId:'TSPLOC', grp1CdId:'TSPLOCFAC'}}"});  // 신청위치구분_시설물설치

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
        	this.panInfoGuide.visible = this.cfnGetAtrb.call("isTAS00233");
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

        			trace("test callback");
        				this.parent.parent.divForm00.url = "work::CST/TSC/CST002S02.xfdl";
        		this.parent.parent.divForm00_00.url = "work::CST/TSC/CST002S03.xfdl";
        		this.parent.parent.divForm00_00_00.url = "work::CST/TSC/CST002S04.xfdl";
        		this.parent.parent.divForm00_00_00_00.url = "work::CST/TSC/CST002S05.xfdl";
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
        	if(!this.cfnGetAtrb.call("isTAS00233")) { return true; }

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






        //test
        /**
        *  입주자 서비스 플랫폼 구축(업무공통)
        *  @FileName 	TaskCom.xjs
        *  @Creator 	김주화
        *  @CreateDate 	2024/08/27
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        * 2024/08/27			김주화	T				업무공통 Library
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.FV_DS_INPT_GRD_PRZT_INFO  = "dsInptGrdPrztInfo"  ;  // 개인화정보관련 입력 데이터셋
        this.FV_DS_OTPT_GRD_PRZT_INFO  = "dsOtptGrdPrztInfo"  ;  // 개인화정보관련 출력 데이터셋
        this.FV_DS_INPT_WORK_FLOW_INFO = "dsInptWorkFlowInfo" ;  // 워크플로우 입력 데이터셋
        this.FV_DS_OTPT_WORK_FLOW_INFO = "dsOtptWorkFlowInfo" ;  // 워크플로우 출력 데이터셋
        this.FV_DS_OTPT_TASK_FLOW_INFO = "dsOtptTaskPrcsFlwWf";  // 업무처리흐름 출력 데이터셋
        this.FV_DS_OTPT_GET_APLY_SE_NM = "dsOtptGetAplySeNm"  ;  // 신청구분명 가져오기 출력 데이터셋
        this.FV_DS_ATRB_NAME           = "dsAtrb"             ;  // 속성 데이터셋
        this.FV_DS_FILE_DWNLD          = "dsFileDwnld"        ;  // 파일 다운로드용 데이터셋
        this.FV_ARGS_WORK_FLOW_INFO    = "";                     // 워크플로우 조회 조건


        /**
        * @class grid 필수입력여부 체크하기
        * @param objGrid : 그리드 정보
        * @return true/false
        * @example if (this.cfnGrdIsValidated(this.divGrd.form.grdList) == false) return
        */
        this.cfnGrdIsValidated = function(objGrid) {

        	for (var i = 0; i < objGrid.rowcount; i++) {
        		for (var j = 0; j < objGrid.getCellCount("head"); j++) {
        			if (objGrid.getCellPropertyValue(-1,j,"cssclass" ) == "CellHead_E") {
        				if (objGrid.getCellPropertyValue(i,j,"edittype" ) == "date") {
        					if (!this.gfn_isYMD(objGrid.getCellValue(i,j))) {
        						// {0} 날짜 오류입니다.
        						this.gfnAlertMsg("msg", "REN_013", [(i+1) + "라인에 " + objGrid.getHeadValue(j) ]);
        						//objGrid.setFocusRow(i);
        						objGrid.setCellPos(j, i);
        						//objGrid.showEditor(true);

        						return false;
        					}
        				} else {
        					if (this.gfnIsNull(objGrid.getCellValue(i,j))) {
        						//{0} 을(를) 입력하십시오.
        						this.gfnAlertMsg("msg", "MSG_009", [(i+1) + "라인에 " + objGrid.getHeadValue(j) ]);
        						//objGrid.setFocusRow(i);
        						objGrid.setCellPos(j, i);
        						//objGrid.showEditor(true);

        						return false;
        					}
        				}
        			}
        		}
        	}

        	return true;
        };

        /**
        * @class 공통코드 불러오기
        * @param objJson : 공통코드 정보
        * @return 없음
        * @example this.cfnComCdLoad({ id:"commonCodeSearch", cbf:"fn_callBack", dsCd1:"EMPTIT:A", dsCd2:"SVCCD:S", dsCd3:"Y10:B", dsCd4:"COMPROC" });
        *          :A = "전체", :S = "선택", :B 또는 : = ""
        *
        */
        this.cfnComCdLoad = function(objJson) {
            var strSvcId    = objJson.id || "_cfnComCdLoad_";
        	var strSvcUrl   = "com/comCdLoad.do";
        	var inData      = "";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = objJson.cbf;
        	var isASync     = true;

        	for(key in objJson) {
        		if(key.startsWith("ds")) {
        			strArg  += " " + key + ":" + objJson[key];
        			outData += " " + key + "=" + key;
        		}
        	}

        	strArg   = "inData=" + nexacro.wrapQuote(strArg.trim());
        	outData = outData.trim();

            this.gfnTransaction (strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isASync);
        };

        /**
        * @class 기타코드 불러오기
        * @param objJson : 기타코드 정보
        * @return 없음
        * @example this.cfnEtcCdLoad({ id:"etcCodeSearch", cbf:"fn_callBack", dsCd1:"selectEtcCode:A", dsCd2:"selectEtcCode2:S", dsCd3:"selectEtcCode3:B", dsCd4:"selectEtcCode4" });
        *          :A = "전체", :S = "선택", :B 또는 : = ""
        *
        */
        this.cfnEtcCdLoad = function(objJson) {
            var strSvcId    = objJson.id || "_cfnEtcCdLoad_";
        	var strSvcUrl   = "com/etcCdLoad.do";
        	var inData      = "";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = objJson.cbf;
        	var isASync     = true;

        	for(key in objJson) {
        		if(key.startsWith("ds")) {
        			strArg  += "|" + key + ";" + objJson[key];
        			outData += " " + key + "=" + key;
        		}
        	}

        	strArg   = "inData=" + nexacro.wrapQuote(strArg.trim());
        	outData = outData.trim();

            this.gfnTransaction (strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isASync);
        };

        /**
        * @class 개인화정보 불러오기
        * @param objJson : 그리드ID 정보
        * @return 없음
        * @example this.cfnSetGrdPrztInfo({ userId:"admin", scrnId:"CST002M00" });
        *          this.cfnSetGrdPrztInfo();
        */
        this.cfnSetGrdPrztInfo = function(objJson) {
            objJson = objJson ? objJson : {};

            // 입력 데이터셋
        	this[this.FV_DS_INPT_GRD_PRZT_INFO] = new Dataset(this.FV_DS_INPT_GRD_PRZT_INFO);
        	this[this.FV_DS_INPT_GRD_PRZT_INFO].addColumn("userId", 'String');
        	this[this.FV_DS_INPT_GRD_PRZT_INFO].addColumn("scrnId", 'String');

        	var nRow = this[this.FV_DS_INPT_GRD_PRZT_INFO].addRow();
        	this[this.FV_DS_INPT_GRD_PRZT_INFO].setColumn(nRow, "userId", this.objApp.gdsUser.getColumn(0,"userId") || objJson.userId || "test");
        	this[this.FV_DS_INPT_GRD_PRZT_INFO].setColumn(nRow, "scrnId", this.name || objJson.scrnId || "TEST");

            // 출력 데이터셋
        	this[this.FV_DS_OTPT_GRD_PRZT_INFO] = new Dataset(this.FV_DS_OTPT_GRD_PRZT_INFO);

            // 서비스 호출
            var strSvcId    = "_cfnSetGrdPrztInfo_";
        	var strSvcUrl   = "com/comGrdPrztInfoLoad.do";
        	var inData      = this.FV_DS_INPT_GRD_PRZT_INFO + "=" + this.FV_DS_INPT_GRD_PRZT_INFO;
        	var outData     = this.FV_DS_OTPT_GRD_PRZT_INFO + "=" + this.FV_DS_OTPT_GRD_PRZT_INFO;
        	var strArg      = "";
        	var callBackFnc = "cbfComGrdPrztInfo";
        	var isASync     = true;

            this.gfnTransaction (strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isASync);
        };

        /**
        * @class 개인화정보 저장
        * @param objJson : 그리드ID 정보
        * @return 없음
        * @example this.cfnStrgGrdPrztInfo({ userId:"admin", scrnId:"CST002M00", objtId:"grdList", prztInfo:"그리드format" });
        *          this.cfnStrgGrdPrztInfo({ userId:"admin", scrnId:"CST002M00", objtId:"this.tabMain.tpgWord.form.divForm.form.divGrd.form.grdList", prztInfo:"그리드format" });
        *
        */
        this.cfnStrgGrdPrztInfo = function(objJson) {
            // 입력 데이터셋
        	this[this.FV_DS_INPT_GRD_PRZT_INFO] = new Dataset(this.FV_DS_INPT_GRD_PRZT_INFO);
        	this[this.FV_DS_INPT_GRD_PRZT_INFO].addColumn("userId"  , 'String');
        	this[this.FV_DS_INPT_GRD_PRZT_INFO].addColumn("scrnId"  , 'String');
        	this[this.FV_DS_INPT_GRD_PRZT_INFO].addColumn("objtId"  , 'String');
        	this[this.FV_DS_INPT_GRD_PRZT_INFO].addColumn("prztInfo", 'String');

        	var nRow = this[this.FV_DS_INPT_GRD_PRZT_INFO].addRow();
        	this[this.FV_DS_INPT_GRD_PRZT_INFO].setColumn(nRow, "userId"  , this.objApp.gdsUser.getColumn(0,"userId") || objJson.userId || "test");
        	this[this.FV_DS_INPT_GRD_PRZT_INFO].setColumn(nRow, "scrnId"  , objJson.scrnId || this.name || "TEST");
        	this[this.FV_DS_INPT_GRD_PRZT_INFO].setColumn(nRow, "objtId"  , objJson.objtId);
        	this[this.FV_DS_INPT_GRD_PRZT_INFO].setColumn(nRow, "prztInfo", objJson.prztInfo);

            // 서비스 호출
            var strSvcId    = "_cfnStrgGrdPrztInfo_";
        	var strSvcUrl   = "com/comGrdPrztInfoStrg.do";
        	var inData      = this.FV_DS_INPT_GRD_PRZT_INFO + "=" + this.FV_DS_INPT_GRD_PRZT_INFO;
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "cbfComGrdPrztInfo";
        	var isASync     = true;

            this.gfnTransaction (strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isASync);
        };

        /**
        * @class 개인화정보 불러오기 콜백함수
        * @param
        * @return 없음
        * @example
        *
        */
        this.cbfComGrdPrztInfo = function(srvcId, errCd, errMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errCd != 0) { return; }

        	if(srvcId == "_cfnSetGrdPrztInfo_") {   // 개인화정보 조회
        		if(this[this.FV_DS_OTPT_GRD_PRZT_INFO].rowcount == 0) { return; };

        		for(var i = 0; i < this[this.FV_DS_OTPT_GRD_PRZT_INFO].rowcount; i++) {
        			var objGrd = [this, this[this.FV_DS_OTPT_GRD_PRZT_INFO].getColumn(i, "objtId").split(".")].map(function(v, i, o) { if(i == 0) { for(var x of o[1]) { v = v[x]; } return v; } })[0];
        			objGrd["orgnlFrm"] = objGrd.getFormatString();  // 원본 형식을 저장
        			objGrd.set_formats(this[this.FV_DS_OTPT_GRD_PRZT_INFO].getColumn(i, "prztInfo"));
        		}

        		if(this.isValidObject(this.FV_DS_OTPT_GRD_PRZT_INFO)) this.removeChild(this.FV_DS_OTPT_GRD_PRZT_INFO);
        		if(this.isValidObject(this.FV_DS_OTPT_GRD_PRZT_INFO)) this.removeChild(this.FV_DS_OTPT_GRD_PRZT_INFO);
        	} else if(srvcId == "_cfnStrgGrdPrztInfo_") {  // 개인화정보 저장

        	}
        };

        /**
        * @class 버튼생성
        * @param objJson : 조회조건(조회 조건 중 필요한 항목만 전달하면 됨)
        * @return 없음
        * @example this.cfnBtnCrt({ crtTrgt:this.divBtn, lnkgEvnt:this.Button_onclick, cbf:"fnCallback", inqCnd : { jobSeCd:"TSC", jobTycoSeCd:"TSPTSC003", taskPrcsStepSeCd:"ACT10135", jobPrcsPrgrsSeCd:"TAS10397", prcsSeCd:"CTL10875", nextStepJobPrcsPrgrsSeCd:"TAS10397"} });
        *
        */
        this.cfnBtnCrt = function(objJson) {
            this.FV_ARGS_WORK_FLOW_INFO = objJson;  // 조회조건 저장

            // 입력 데이터셋
        	this[this.FV_DS_INPT_WORK_FLOW_INFO] = new Dataset(this.FV_DS_INPT_WORK_FLOW_INFO);

        	// 컬럼생성
        	for(key in objJson.inqCnd) {
        	    this[this.FV_DS_INPT_WORK_FLOW_INFO].addColumn(key, 'String');
        	}

        	var nRow = this[this.FV_DS_INPT_WORK_FLOW_INFO].addRow();
        	// 컬럼값 지정
        	for(key in objJson.inqCnd) {
        		this[this.FV_DS_INPT_WORK_FLOW_INFO].setColumn(nRow, key, objJson.inqCnd[key]);
        	}

        	// 출력 데이터셋
        	this[this.FV_DS_OTPT_WORK_FLOW_INFO] = new Dataset(this.FV_DS_OTPT_WORK_FLOW_INFO);
        	this[this.FV_DS_OTPT_TASK_FLOW_INFO] = new Dataset(this.FV_DS_OTPT_TASK_FLOW_INFO);

            // 서비스 호출
            var strSvcId    = this.FV_ARGS_WORK_FLOW_INFO.id || "_cfnBtnCrt_";
        	var strSvcUrl   = "com/workFlowLoad.do";
        	var inData      = this.FV_DS_INPT_WORK_FLOW_INFO + "=" + this.FV_DS_INPT_WORK_FLOW_INFO;
        	var outData     = this.FV_DS_OTPT_WORK_FLOW_INFO + "=" + this.FV_DS_OTPT_WORK_FLOW_INFO + " "
        	                + this.FV_DS_OTPT_TASK_FLOW_INFO + "=" + this.FV_DS_OTPT_TASK_FLOW_INFO
        					;
        	var strArg      = "";
        	var callBackFnc = "cbfBtnCrt";
        	var isASync     = false;

            this.gfnTransaction (strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isASync);
        };

        /**
        * @class 버튼생성 콜백함수
        * @param
        * @return 없음
        * @example
        *
        */
        this.cbfBtnCrt = function(srvcId, errCd, errMsg)
        {
        	// 버튼을 생성할 대상이 있으면...
        	if(this.FV_ARGS_WORK_FLOW_INFO.crtTrgt) {
        		// 기존 버튼 제거
        		Array.from(this.FV_ARGS_WORK_FLOW_INFO.crtTrgt.form.components).forEach(function(v) {
        			if(v.name.startsWith("CTL")) { v.destroy(); v = null; }
        		});

        		// 에러 시 화면 처리 내역
        		if(errCd != 0) { return; }

        		var dsOtpt = this[this.FV_DS_OTPT_WORK_FLOW_INFO];
        		for(var i = 0; i < dsOtpt.rowcount; i++) {
        			var btnNew = new nexacro.Button;
        			var btnId  = dsOtpt.getColumn(i, "prcsSeCd");
        			var btnNm  = dsOtpt.getColumn(i, "prcsSeCdNm");

        			btnNew.init(btnId, 0, 0, 0, 40);          // 초기화
        			btnNew.fittocontents = "width";           // 넓이 자동조절
        			btnNew.text          = btnNm;             // 버튼 문자
        			btnNew.cssclass      = dsOtpt.getColumn(i, "cssClass") || "btn_WF_No";
        			btnNew.addEventHandler("onclick", this.FV_ARGS_WORK_FLOW_INFO.lnkgEvnt, this);
        			this.FV_ARGS_WORK_FLOW_INFO.crtTrgt.addChild(btnId, btnNew);
        			btnNew.expr = dsOtpt.getColumn(i, "exclCnd");

        			if(this.FV_ARGS_WORK_FLOW_INFO.crtTrgt.form.isValidObject(btnId)) {
        				btnNew.show();
        			} else {
        				this.FV_ARGS_WORK_FLOW_INFO.crtTrgt.form[btnId] = null;
        			}
        		}
        	}

        	if(this.isValidObject(this.FV_DS_INPT_WORK_FLOW_INFO)) { this.removeChild(this.FV_DS_INPT_WORK_FLOW_INFO) };
        	//if(this.isValidObject(this.FV_DS_OTPT_WORK_FLOW_INFO)) { this.removeChild(this.FV_DS_OTPT_WORK_FLOW_INFO) };

        	if(this.FV_ARGS_WORK_FLOW_INFO.cbf) {
        		this.lookupFunc(this.FV_ARGS_WORK_FLOW_INFO.cbf).call(srvcId, errCd, errMsg);
        	}

        	// 버튼 Div
        	this.FV_ARGS_WORK_FLOW_INFO.crtTrgt.form.resetScroll();
        };

        /**
        * @class 신청구분명 불러오기
        * @param objJson : 신청구분 정보
        * @return 없음
        * @example this.cfnGetAplySeNm({ id:"getAplySeNm", cbf:"fnCallBack", aplySeCd:"TSPTSC001" });
        *
        */
        this.cfnGetAplySeNm = function(objJson) {
            var strSvcId    = objJson.id || "_cfnGetAplySeNm_";
        	var strSvcUrl   = "com/getAplySeNm.do";
        	var inData      = "";
        	var outData     = this.FV_DS_OTPT_GET_APLY_SE_NM + "=" + this.FV_DS_OTPT_GET_APLY_SE_NM;
        	var strArg      = "inData=" + nexacro.wrapQuote(objJson.aplySeCd);
        	var callBackFnc = objJson.cbf;
        	var isASync     = true;

        	// 출력 데이터셋
        	this[this.FV_DS_OTPT_GET_APLY_SE_NM] = new Dataset(this.FV_DS_OTPT_GET_APLY_SE_NM);

            this.gfnTransaction (strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isASync);
        };

        /**
        * @class 신청구분명 돌려주기
        * @param
        * @return aplySeNm : 신청구분명
        * @example this.cfnGvbkAplySeNm();
        *
        */
        this.cfnGvbkAplySeNm = function()
        {
            var aplySeNm = "";

            if(this[this.FV_DS_OTPT_GET_APLY_SE_NM].rowcount > 0) {
        		aplySeNm = this[this.FV_DS_OTPT_GET_APLY_SE_NM].getColumn(0, "aplySeNm");
        	}

        	if(this.isValidObject(this.FV_DS_OTPT_GET_APLY_SE_NM)) this.removeChild(this.FV_DS_OTPT_GET_APLY_SE_NM);

        	return aplySeNm;
        };

        /**
        * @class panel의 Items의 항목을 배열로 반환한다.
        * @param pan : panel
        * @return 배열
        * @example this.cfnToArray(this.panel);
        *
        */
        this.cfnToArray = function(pan)
        {
            var oArry = new Array();
            if(!pan || !pan.items || !pan.items.length) { return oArry; }

        	for(var i = 0; i < pan.items.length; i++) {
        		oArry.push(pan.parent[pan.items[i].componentid]);
        	}

        	return oArry;
        };

        /**
        * @class 현재 사용자의 공사 직원 여부를 반환한다.
        * @param
        * @return boolean
        * @example this.cfnIsCstrnEmp();
        *
        */
        this.cfnIsCstrnEmp = function()
        {
            return this.objApp.gdsUser.getColumn(0, "iiacEmpYn") == "1";  // 공사직원여부
        };

        /**
        * @class 현재 사용자의 처리자 직원 여부를 반환한다.
        * @param
        * @return boolean
        * @example this.cfnIsPrcrEmp();
        *
        */
        this.cfnIsPrcrEmp = function()
        {
            return this.objApp.gdsUser.getColumn(0, "cpatcoEmpYn") == "1";  // 협력사직원여부
        };

        /**
        * @class 현재 사용자의 공사 직원 및 처리자 직원 여부를 반환한다.
        * @param
        * @return boolean
        * @example this.cfnIsEmp();
        *
        */
        this.cfnIsEmp = function()
        {
            return this.cfnIsCstrnEmp() || this.cfnIsPrcrEmp();  // 공사직원 Or 협력사직원
        };

        /**
        * @class 화면에서 접기(펼침) 버튼 클릭시 접기 또는 펼침 기능 수행
        * @param  obj : 버튼
        * @return
        * @example this.cfnFold(obj);
        *
        */
        this.cfnFold = function(obj, ctrlkey)
        {
            // 서브 타이틀 그룹
            if(this.getPanel(obj)) {
        		var oForm = this;
        		var oDiv = this["div" + obj.name.substr(3)];
        		obj.cssclass = obj.cssclass == "btn_WF_ACPlus" ? "btn_WF_ACMinus" : "btn_WF_ACPlus";  // +,- css 변경
        		oDiv.visible = obj.cssclass != "btn_WF_ACPlus";

        		if(ctrlkey) {
        			this.cfnToArray(this.panForm).forEach(function(v) {
        				if(oForm["pan" + v.name.substr(3)]) {
        					if(v.name == oDiv.name || v instanceof Panel) { return; }
        					if(oForm["pan" + v.name.substr(3)].visible) {
        						v.visible = oDiv.visible;
        						oForm["btn" + v.name.substr(3)].cssclass = obj.cssclass;
        					}
        				}
        			});
        		}
        	// Div(가이드, 업무처리흐름도...)
        	} else {
        	    obj.parent.parent.upheight        = !obj.parent.parent.upheight        ? obj.parent.parent.height        : obj.parent.parent.upheight       ;  // div height 저장
        	    obj.parent.parent.upfittocontents = !obj.parent.parent.upfittocontents ? obj.parent.parent.fittocontents : obj.parent.parent.upfittocontents;  // div fittocontents 저장
        		obj.parent.parent.height          = obj.cssclass == "btn_WF_ACPlus" ? obj.parent.parent.upheight        : "54"  ;  // div height 변경
        		obj.parent.parent.fittocontents   = obj.cssclass == "btn_WF_ACPlus" ? obj.parent.parent.upfittocontents : "none";  // div fittocontents 변경
        		obj.cssclass = obj.cssclass == "btn_WF_ACPlus" ? "btn_WF_ACMinus" : "btn_WF_ACPlus";             // +,- css 변경
        	}
        };

        /**
        * @class Left Menu 및 화면전환
        * @param oItems : 화면ID
        * @return
        * @example this.fnMovePage(Left MenuID, 화면ID, 화면Url);
        *          this.fnMovePage("MNG_0000000021", "MNG_0000000144", "work::CST/CAD/CST009M01.xfdl");
        */
        this.fnMovePage = function(leftId, menuId, menuUrl)
        {
        	var objArg   = {};
        	this.objApp.gvVfrs.set_separatesize("108,*,0,0");

        	this.gfnLeftMenuCreate(leftId);
        	this.gfnMenuFocus(leftId);
        	this.gfnLeftTit(leftId);

        	var actNm = '';
        	this.gfnPageOpen(menuId, menuUrl, actNm, objArg);
        };

        /**
        * @class Dataset의 현재 행 정보를 JSON 형태로 변환하여 돌려준다
        * @param  obj : Dataset
        * @return
        * @example this.cfnFold(obj);
        *
        */
        this.cfnGetToJson = function(obj) {
        	var oJson = {};
        	for(var i = 0; i < obj.getColCount(); i++) {
        		oJson[obj.getColID(i)] = obj.getColumn(obj.rowposition, obj.getColID(i));
        	}

        	return oJson;
        };

        /**
        * @class obj 그룹 내의 Grid를 찾아 바인딩된 첫번째 컬럼명(colId)을 돌려준다
        * @param  ru : RaonkUpload, obj : Object
        * @return
        * @example this.cfnSetAtflInfo(this.RaonkUpload, obj).OpenFileDialog();
        *
        */
        this.cfnSetAtflInfo = function(ru, obj) {
        	// Grid 에서 찾기
        	if(obj instanceof Grid) {
        		ru.upatflinfo = { colid:obj.getCellProperty("body", 0, "text").substr(5) };
        		return ru;
            // PANEL 에서 찾기
        	} else if(this.getPanel(obj) instanceof Panel) {
        		for(var i = 0, obj = this.getPanel(obj); i <= 5; i++) {
        			var grd = null;
        			Array.from(obj.items).forEach(function(v) { if(obj.parent[v.componentid] instanceof Grid) { grd = obj.parent[v.componentid]; }});
        			if(grd) {
        				ru.upatflinfo = { colid:grd.getCellProperty("body", 0, "text").substr(5) };
        				return ru;
        			} else {
        				obj = this.getPanel(obj);
        			}
        		}
        	}

        	return null;
        };

        /**
        * @class RaonkUpload용 customValue를 돌려준다.
        * @param  str : String("bgncstAprvRvwY06110" 또는 JSON.stringify({ "strCustomValue" : "bgncstAprvRvwY06110" }))
        * @return customValue
        * @example this.cfnGetCustomValue(JSON.stringify({ "strCustomValue" : colid }));
        *
        */
        this.cfnGetCustomValue = function(str) {
            try {
        	    return JSON.parse(str).strCustomValue;
        	} catch (e) {
        	    return str;
        	}
        };

        /**
        * @class obj 그룹 내의 특정 유형을 찾아 돌려준다
        * @param  obj : Object, type : 컴포넌트 유형
        * @return  Object
        * @example this.cfnSetObjInGroup(obj, Div);
        *
        */
        this.cfnFindObjByAtrb = function(obj, atrb, name) {
         	for(var i = 0, comps = obj.components; i <= 20; i++) {
        	    var obj = Array.from(comps).filter(function(v) {
        			return v[atrb]  == name; })[0];
        		if(obj) { return obj; };
        	}

        	return null;
        };

        /**
        * @class 현재 단계의 속성 값을 생성한다
        * @param dsAtrb:속성DS, taskCd:현재업무코드, isEdtrPsblty:정보편집권한여부
        * @return 없음
        * @example this.cfnAtrbCrt(dsAtrb, taskCd, isEdtrPsblty);
        */
        this.cfnAtrbCrt = function(ds, taskCd, isEdtrPsblty) {
            this.FV_DS_ATRB_NAME = ds.name;  // 속성 DS 명

        	ds.enableevent = false;
        	ds.clearData();
            // DS 컬럼 초기화
        	for(var i = ds.colcount - 1; i >= 0; i--) { ds.deleteColumn(i);	}

            // 데이터셋 컬럼 생성
        	for(var i = 0; i < ds.getConstCount(); i++) {
        		var colId = ds.getConstColID(i);
        		ds.addColumn("vs" + colId, "INT"   );  // visible
        		ds.addColumn("ro" + colId, "INT"   );  // readonly
        		ds.addColumn("cc" + colId, "STRING");  // cssclass
        	}
        	ds.addRow();

        	// 데이터셋 컬럼 값 생성
        	for(var i = 0; i < ds.getConstCount(); i++) {
        		var colId = ds.getConstColID(i);
        		var json  = JSON.parse(ds.getConstColumn(i));
        		var isEditable = json.editable.indexOf(taskCd) != -1;  // 편집가능여부
        		var isReadonly = json.readonly.indexOf(taskCd) != -1;  // 읽기전용여부

                // 이미 처리된 단계 여부 확인
        	    var bIsPrcs = this[this.FV_DS_OTPT_TASK_FLOW_INFO] && this[this.FV_DS_OTPT_TASK_FLOW_INFO].findRowExpr(nexacro.wrapQuote(json.editable) + ".indexOf(jobCd) != -1") != -1;

        		ds.setColumn(0, "vs" + colId, !isEdtrPsblty && (colId.endsWith("Edtr") || !bIsPrcs) ? false : !isEdtrPsblty || isEditable || isReadonly);
        		ds.setColumn(0, "ro" + colId, !isEdtrPsblty && (colId.endsWith("Edtr") || !bIsPrcs) ? true  : !isEdtrPsblty || !isEditable);
        		ds.setColumn(0, "cc" + colId, "sta_WF_Label" + (isEdtrPsblty && isEditable ? "_E" : ""));
        	}

        	ds.enableevent = true;
        };


        /**
        * @class 워크플로우 정보 가져오기
        * @param prcsSeCd : 기능ID(버튼ID)
        * @return 워크플로우 정보(JSON)
        * @example this.getWfInfo("CTL00459");
        *
        */
        this.cfnGetWfInfo = function(prcsSeCd) {
        	this[this.FV_DS_OTPT_WORK_FLOW_INFO].updatecontrol = false;
        	this[this.FV_DS_OTPT_WORK_FLOW_INFO].rowposition = this[this.FV_DS_OTPT_WORK_FLOW_INFO].findRow("prcsSeCd", prcsSeCd);
        	this[this.FV_DS_OTPT_WORK_FLOW_INFO].setRowType(this[this.FV_DS_OTPT_WORK_FLOW_INFO].rowposition, Dataset.ROWTYPE_UPDATE);
        	this[this.FV_DS_OTPT_WORK_FLOW_INFO].updatecontrol = true;

        	return this.cfnGetToJson(this[this.FV_DS_OTPT_WORK_FLOW_INFO]);
        };

        // Main 화면의 함수만 호출하기 위한 처리
        // -------------------------------------
        if(this.parent.name == "divWork") {
        	/**
        	* @class 단계의 속성 값을 돌려준다
        	* @param colId : 속성 컬럼 ID
        	* @return 없음
        	* @example this.cfnGetAtrb(colId);
        	*/
        	this.cfnGetAtrb = function(colId) {
        		var ds = this[this.FV_DS_ATRB_NAME];
        		return colId.split(",").filter(function(v) { return ds.getColumn(0, v); }).length > 0;
        	};

        	/**
        	* @class 업무처리흐름 정보 유무 확인
        	* @param cnd : 조건
        	* @return 여부
        	* @example this.cfnIsExstTaskPrcsFlw({ seq:"999", jobCd:"TAS10453", nextJobCd:"TAS10404" }));
        	*
        	*/
        	this.cfnIsExstTaskPrcsFlw = function(cnd) {
        		if(this.isValidObject(this.FV_DS_OTPT_TASK_FLOW_INFO)) {
        			return this[this.FV_DS_OTPT_TASK_FLOW_INFO].findRowExpr(Object.keys(cnd).map(function(k) { return (k + " == '" + cnd[k] + "'"); }).join(" && ")) != -1;
        		}

        		return false;
        	};
        }

        /**
        * @class 탭페이지 Index 찾기
        * @param this.tab : Tab Object, name : TabPageName
        * @return TabPageName의 Index
        * @example this.cfnGetTabIndex(this.tab, tappagename);
        *
        */
        this.cfnGetTabIndex = function(obj, name) {
            return Array.from(obj.tabpages).map(function(v) { return v.name; }).indexOf(name);
        };

        /**
        * @class 첨부파일 다운로드
        * @param ru : RaonkUpload, ds : dataset, colId : 다운로드 대상 column ID, e : event
        * @return
        * @example this.cfnFileDwnld(RaonkUpload, ds, colId, e);
        *
        */
        this.cfnFileDwnld = function(ru, ds, colId, e) {
            this[this.FV_DS_FILE_DWNLD] = new Dataset(this.FV_DS_FILE_DWNLD);  // 데이터셋 생성
        	var dsFile = this[this.FV_DS_FILE_DWNLD];
        	dsFile.copyData(ds);  // 데이터셋 형식 복사를 위한 처리
        	dsFile.clearData();   // 데이터셋 행 삭제
        	dsFile.copyRow(dsFile.addRow(), ds, ds.findRow("colId", colId));  // 다운로드 대상 파일 정보 복사
        	//console.log(dsFile.saveXML());
            this.gfnDownloadFile(ru, dsFile, e);  // 다운로드
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
        this.loadIncludeScript("CST002S01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
