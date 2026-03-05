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
            this.set_titletext("신청자정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,840);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBldgSeCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staLabel00","0.00","0","96.88%","46",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("신청구분");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","20.00","0","1240","86",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtAplySeNm\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02","0","0","100.00%","50",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan00","0","Panel02:0","100.00%","93",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel01_00","0","0","47.66%","46",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("계약선택여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoCtrtChcYn","0","46","280","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var rdoCtrtChcYn_innerdataset = new nexacro.NormalDataset("rdoCtrtChcYn_innerdataset", obj);
            rdoCtrtChcYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">계약선택</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">수기입력</Col></Row></Rows>");
            obj.set_innerdataset(rdoCtrtChcYn_innerdataset);
            obj.set_text("계약선택");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","20.00","0","610","86",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"rdoCtrtChcYn\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panBlank","650.00","0","610","1",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.addChild(obj.name, obj);

            obj = new Panel("panCtrtChcYn","0","pan00:0","100.00%","93",null,null,null,null,null,null,this);
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
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00","10.00","10","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("신청자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_02","0","46","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_value("신청자 성명");
            obj.set_readonly("true");
            obj.set_text("신청자 성명");
            this.addChild(obj.name, obj);

            obj = new Panel("panAplcntNm","30.00","10","610","86",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_01","20.00","20","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("신청자 회사명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_03_01","10.00","56","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_readonly("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("panAplcntCoNm","650.00","0","610","86",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_03_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panAplcnt","0","panCtrtChcYn:0","100.00%","93",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panAplcntNm\"/><PanelItem id=\"PanelItem02\" componentid=\"panAplcntCoNm\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01","0","0","100%","41",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("건물구분");
            obj.set_cssclass("sta_WF_Label_E");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbBldgSeCd","0","0","300","40",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_flexgrow("1");
            obj.set_innerdataset("dsBldgSeCd");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("제1터미널역");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Panel("panComb","0","41","100%","44",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"cmbBldgSeCd\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panBldgSeChc","50.00","30","610","86",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"panComb\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("PanelBlank","660.00","10","610","1",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.addChild(obj.name, obj);

            obj = new Panel("panBldgSe","0","panAplcnt:0","100.00%","93",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panBldgSeChc\"/><PanelItem id=\"PanelItem02\" componentid=\"PanelBlank\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_00","50.00","50","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("계약명");
            obj.set_cssclass("sta_WF_Label_E");
            this.addChild(obj.name, obj);

            obj = new Div("divCtrtChc","40.00","86","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","0","0",null,"40","0",null,null,null,null,null,this.divCtrtChc.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_readonly("true");
            this.divCtrtChc.addChild(obj.name, obj);

            obj = new Button("btnCtrtChc","Edit00:-40","0","40","40",null,null,null,null,null,null,this.divCtrtChc.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            this.divCtrtChc.addChild(obj.name, obj);

            obj = new Panel("panCtrtNm","60.00","40","610","86",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"divCtrtChc\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00_00","60.00","60","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("위치정보(룸번호)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","50.00","96","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Panel("panPstnInfo","670.00","20","610","86",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panCtrtPstnInfo","0","panBldgSe:0","100.00%","93",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panCtrtNm\"/><PanelItem id=\"PanelItem02\" componentid=\"panPstnInfo\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_01","70.00","70","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("청구고객코드");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_02_00_00","60.00","106","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_readonly("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("panClmCustCd","70.00","50","610","86",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_02_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00_01","80.00","80","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("청구주소");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_03_01_00_00","70.00","116","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_readonly("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("panClmAddr","680.00","30","610","86",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_03_01_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panClmCust","0","panCtrtPstnInfo:0","100.00%","93",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panClmCustCd\"/><PanelItem id=\"PanelItem02\" componentid=\"panClmAddr\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_01_00","90.00","90","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("신청자(수기입력)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_02_00_00_00","80.00","126","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_readonly("false");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("panAplcntHwrtInpt","80.00","60","610","86",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_02_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00_01_00","100.00","100","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("계약번호(수기입력)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_03_01_00_00_00","90.00","136","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("panCtrtNoHwrtInpt","690.00","40","610","86",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_03_01_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panAplcntCtrtNo","0","panClmCust:0","100.00%","93",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panAplcntHwrtInpt\"/><PanelItem id=\"PanelItem02\" componentid=\"panCtrtNoHwrtInpt\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel05_00_00","110.00","110","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("휴대폰 번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","0","0","100%","39",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00","0","43","100%","41",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("휴대폰번호는 우측상단 \"사용자 이름\" 클릭 후 해당 메뉴에서 등록 및 수정이 가능합니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Panel("panClphNo","20.00","843","610","136",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Edit01\"/><PanelItem id=\"PanelItem04\" componentid=\"sta00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel05_01_00","120.00","120","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("위치정보(수기입력)");
            obj.set_cssclass("sta_WF_Label_E");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01_00","10.00","10","100%","38",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","0","42","100%","38",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("예)건물명 / 층별 / 룸번호");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Panel("panPstnInfoHwrtInpt","650.00","0","610","136",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_01_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Edit01_00\"/><PanelItem id=\"PanelItem04\" componentid=\"sta00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan08","0","panAplcntCtrtNo:0","100.00%","141",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_fittocontents("height");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panClphNo\"/><PanelItem id=\"PanelItem02\" componentid=\"panPstnInfoHwrtInpt\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle00","0","0","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("신청자정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","121.00","6","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","165.00","6","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","1070","0","209","50",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button01\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAplySeNm","0","46","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_text("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divCtrtChc.form
            obj = new Layout("default","",0,0,this.divCtrtChc.form,
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
                p.btnCtrtChc.move("Edit00:-40","0","40","40",null,null);
            	}
            );
            this.divCtrtChc.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divCtrtChc.form
            obj = new Layout("mobile","",0,0,this.divCtrtChc.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divCtrtChc.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","",1280,840,this,function(p){});
            obj.set_type("vertical");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtAplySeNm","value","dsMain","aplySeNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","rdoCtrtChcYn","value","dsMain","ctrtChcYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edt00_02","value","dsMain","aplcntNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edt00_03_01","value","dsMain","aplcntCoNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divCtrtChc.form.Edit00","value","dsMain","ctrtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Edit00","value","dsMain","pstnInfoRnb");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edt00_02_00_00","value","dsMain","clmCustCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edt00_03_01_00_00","value","dsMain","clmAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edt00_02_00_00_00","value","dsMain","hwrtInptAplcntNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edt00_03_01_00_00_00","value","dsMain","hwrtInptCtrtNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","Edit01","value","dsMain","mblTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","Edit01_00","value","dsMain","hwrtInptPstnInfoCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cmbBldgSeCd","value","dsMain","bldgSeCd");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CST002S01.xfdl","xjs::TaskCom.xjs");
        this.registerScript("CST002S01.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	CST002S10.xfdl
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
            this.dsMain = this.lookup("dsMain");
        	this.dsMain.addEventHandler("onvaluechanged", this.dsMain_onvaluechanged, this);
        	this.isNew  = this.gfnIsNull(this.dsMain.getColumn(0, "aplyNo"));   // 신규여부

        	// 건물구분
        	this.cfnComCdLoad({ id:this.cmbBldgSeCd.name, cbf:"fnCallback", dsBldgSeCd:"TSPLOC:S" });
        };

        this.dsMain_onvaluechanged = function(obj,e)
        {
            // 신규 건 시 처리
            if(this.isNew) {
        		this.dsMain.setColumn(0, "aplySeCd"    , "TSPTSC001"                               );  // 신청구분코드
        		this.dsMain.setColumn(0, "aplcntId"    , this.objApp.gdsUser.getColumn(0, "userId"));  // 신청자ID(유저ID)
        		this.dsMain.setColumn(0, "aplcntNm"    , this.objApp.gdsUser.getColumn(0, "userNm"));  // 신청자명(유저명)
        		this.dsMain.setColumn(0, "aplcntInstCd", this.objApp.gdsUser.getColumn(0, "coId"  ));  // 신청자기관코드(회사ID)
        		this.dsMain.setColumn(0, "aplcntCoNm"  , this.objApp.gdsUser.getColumn(0, "coNm"  ));  // 신청자기관명(회사명)
        		this.dsMain.setColumn(0, "aplcntDeptCd", this.objApp.gdsUser.getColumn(0, "deptId"));  // 신청자부서코드(부서ID)
        		this.dsMain.setColumn(0, "mblTelno"    , this.objApp.gdsUser.getColumn(0, "userMblTelno"));  // 휴대폰 번호
        	}

            // 신청구분
        	if(e.columnid == "aplySeCd") {
        		this.cfnGetAplySeNm({ id:this.edtAplySeNm.name, cbf:"fnCallback", aplySeCd:"TSPTSC001" });
        	}

        	// 계약선택여부
        	if(this.gfnIsNull(e.columnid) || e.columnid == "ctrtChcYn") {
        	    if(this.gfnIsNull(e.columnid)) {
        			this.dsMain.setColumn(0, "ctrtChcYn", "0");  // 수기입력
        		} else {
        			var isHwrtInpt = e.newvalue == "0";          // "0": 수기입력

        			// 수기입력
        			this.panAplcntCtrtNo.visible     = isHwrtInpt;   // 신청자(수기입력), 계약번호(수기입력)
        			this.panPstnInfoHwrtInpt.visible = isHwrtInpt;   // 위치정보(수기입력)

        			this.panAplcnt.visible           = !isHwrtInpt;  // 신청자, 신청자회사명
        			this.panCtrtPstnInfo.visible     = !isHwrtInpt;  // 계약명,위치정보(룸번호)
                    this.panClmCust.visible          = !isHwrtInpt;  // 청구고객코드, 청구주소
        		}
        	}

        	// 신청자,
        	if(this.gfnIsNull(e.columnid)) {
        	    trace(this.objApp.gdsUser.saveXML());


        	}
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        /*
        this.cfnSrvcCall = function(srvcId) {
        	var strSrvcId   = srvcId;         // transaction을 구분하기 위한 svc id값
        	var strSvcUrl   = "";             // trabsaction을 요청할 주소
        	var inData      = "";             // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        	var outData     = "";             // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        	var strArg      = "";             // 입력값으로 보낼 arguments, strFormData="20120607"
        	var callBackFnc = "fnCallback";   // transaction의 결과를 받을 Function 이름
        	var isAsync   	= true;           // 비동기통신 여부 [생략가능]

        	switch(strSrvcId)
        	{
        		case this.name :  // 조회
        			strSvcUrl = "fic/inqFcltyInstlChg.do";
        			inData    = "dsSearch=dsSearch";
        			outData   = "dsMain=dsMain";
        			break;

        		default :
        			strSvcUrl = "mdatMng/strgWordList.do";
        			inData    = "dsWordList=dsWordList:U";
        			break;
        	}

        	this.gfnTransaction( strSrvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };
        */
        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function(srvcId, errCd, errMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errCd != 0) { return; }

        	switch(srvcId) {
        		case this.edtAplySeNm.name :  // 신청구분
        			this.dsMain.setColumn(0, "aplySeNm", this.cfnGvbkAplySeNm());

        			break;

        		case this.cmbBldgSeCd.name :  // 건물구분
        			// 건물구분 필터링
        			this.dsBldgSeCd.filter('cdId == "" || uprCd.indexOf("TSPLOCFAC0") != -1');
        			this.dsMain.setColumn(0, "bldgSeCd", "");

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
        		case this.divCtrtChc.form.btnCtrtChc.name :  // 계약선택
        		    this.dsMain.setColumn(0, "ctrtNo"     , oRtn.ctrtNo   );  // 계약번호
        			this.dsMain.setColumn(0, "ctrtNm"     , oRtn.ctrtNm   );  // 계약명
        			this.dsMain.setColumn(0, "clmCustCd"  , oRtn.clmCustCd);  // 청구고객코드
        			this.dsMain.setColumn(0, "clmAddr"    , oRtn.addr     );  // 청구주소
        			this.dsMain.setColumn(0, "pstnInfoRnb", oRtn.rnb      );  // 위치정보(룸번호)

        			break;

        		default :
        			break;
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/

        // 계약선택팝업 버튼 클릭
        this.divCtrtChc_btnCtrtChc_onclick = function(obj,e)
        {
        	var oOption = { title:"계약선택", titlebar:true, width:900, height:700 };
        	this.gfnOpenPopup(this.divCtrtChc.form.btnCtrtChc.name, "work::CST/COM/CST002P01.xfdl", "", "fnPopupCallback", oOption);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divCtrtChc.form.btnCtrtChc.addEventHandler("onclick",this.divCtrtChc_btnCtrtChc_onclick,this);
        };
        this.loadIncludeScript("CST002S01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
