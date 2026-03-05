(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST016P05");
            this.set_titletext("전산실감독자최종검토");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divForm","20","20",null,null,"20","70",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_fittocontents("none");
            this.addChild(obj.name, obj);

            obj = new Div("divInfoGuide","0","0","100%","300",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_background("#dfdfdf");
            obj.set_text("서비스 흐름 및 작업방법 안내");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnSchClose",null,"10","30","30","20",null,null,null,null,null,this.divForm.form.divInfoGuide.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_SchClose");
            this.divForm.form.divInfoGuide.addChild(obj.name, obj);

            obj = new Div("div00","0","350","100.00%","5767.99",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("신청자정보");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle","30","0","100%","50",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("0");
            obj.set_text("신청자정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("Panel02","0","30","100%","50",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","78","250","50",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button01\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Div("div00","187","205","100.00%","626",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("5");
            obj.set_text("div00");
            obj.set_fittocontents("height");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Static("staLabel00","431","54","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form.div00.form);
            obj.set_taborder("0");
            obj.set_text("신청번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.div00.form.div00.addChild(obj.name, obj);

            obj = new Panel("pan00","411","54","100.00%","96",null,null,null,null,null,null,this.divForm.form.div00.form.div00.form);
            obj.set_taborder("3");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/></Contents>");
            this.divForm.form.div00.form.div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","431","54","305","86",null,null,null,null,null,null,this.divForm.form.div00.form.div00.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00\"/></Contents>");
            this.divForm.form.div00.form.div00.addChild(obj.name, obj);

            obj = new Edit("edt00","431","101","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form.div00.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.div00.form.div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","541","232","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form.div00.form);
            obj.set_taborder("4");
            obj.set_text("신청구분");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.div00.form.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_00","541","278","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form.div00.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_value("입주자서비스▶시설물설치(변경)신청");
            obj.set_text("입주자서비스▶시설물설치(변경)신청");
            this.divForm.form.div00.form.div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","541","232","305","86",null,null,null,null,null,null,this.divForm.form.div00.form.div00.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_00\"/></Contents>");
            this.divForm.form.div00.form.div00.addChild(obj.name, obj);

            obj = new Panel("pan00_00","521","232","100.00%","96",null,null,null,null,null,null,this.divForm.form.div00.form.div00.form);
            obj.set_taborder("7");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00\"/></Contents>");
            this.divForm.form.div00.form.div00.addChild(obj.name, obj);

            obj = new Panel("pan01","267","355","100.00%","96",null,null,null,null,null,null,this.divForm.form.div00.form.div00.form);
            obj.set_taborder("11");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00\"/></Contents>");
            this.divForm.form.div00.form.div00.addChild(obj.name, obj);

            obj = new Panel("pan02","390","361","100.00%","96",null,null,null,null,null,null,this.divForm.form.div00.form.div00.form);
            obj.set_taborder("18");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02_01\"/></Contents>");
            this.divForm.form.div00.form.div00.addChild(obj.name, obj);

            obj = new Panel("pan03","534","485","100.00%","96",null,null,null,null,null,null,this.divForm.form.div00.form.div00.form);
            obj.set_taborder("25");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan_04_00\"/><PanelItem id=\"PanelItem01\" componentid=\"pan04_01\"/></Contents>");
            this.divForm.form.div00.form.div00.addChild(obj.name, obj);

            obj = new Panel("pan08","584","564","100.00%","146",null,null,null,null,null,null,this.divForm.form.div00.form.div00.form);
            obj.set_taborder("33");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_fittocontents("height");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan04_00\"/><PanelItem id=\"PanelItem01\" componentid=\"pan05_01\"/></Contents>");
            this.divForm.form.div00.form.div00.addChild(obj.name, obj);

            obj = new Panel("pan05_01","604","564","305","1",null,null,null,null,null,null,this.divForm.form.div00.form.div00.form);
            obj.set_taborder("32");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_01\"/></Contents>");
            this.divForm.form.div00.form.div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","604","611","100%","80",null,null,null,null,null,null,this.divForm.form.div00.form.div00.form);
            obj.set_taborder("31");
            obj.set_type("vertical");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("");
            this.divForm.form.div00.form.div00.addChild(obj.name, obj);

            obj = new Panel("pan04_01","554","485","305","86",null,null,null,null,null,null,this.divForm.form.div00.form.div00.form);
            obj.set_taborder("24");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_03_01_00\"/></Contents>");
            this.divForm.form.div00.form.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_03_01_00","1264","485","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form.div00.form);
            obj.set_taborder("23");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.div00.form.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00","554","531","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form.div00.form);
            obj.set_taborder("22");
            obj.set_text("작업감독자 회사명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.div00.form.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_01","410","408","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form.div00.form);
            obj.set_taborder("15");
            obj.set_text("신청자 회사명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.div00.form.div00.addChild(obj.name, obj);

            obj = new Panel("Panel02_01","410","361","305","86",null,null,null,null,null,null,this.divForm.form.div00.form.div00.form);
            obj.set_taborder("17");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_03_01\"/></Contents>");
            this.divForm.form.div00.form.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_03_01","1120","361","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form.div00.form);
            obj.set_taborder("16");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.div00.form.div00.addChild(obj.name, obj);

            obj = new Static("staLabel01_00","287","355","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form.div00.form);
            obj.set_taborder("8");
            obj.set_text("신청자 / 감독자 동일여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.div00.form.div00.addChild(obj.name, obj);

            obj = new Radio("Radio00","287","391","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form.div00.form);
            obj.set_taborder("9");
            obj.set_fittocontents("none");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var divForm_form_div00_form_div00_form_Radio00_innerdataset = new nexacro.NormalDataset("divForm_form_div00_form_div00_form_Radio00_innerdataset", obj);
            divForm_form_div00_form_div00_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">신청자와감독자동일</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">신청자와감독자동일하지않음</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_div00_form_div00_form_Radio00_innerdataset);
            obj.set_text("계약선택");
            obj.set_value("0");
            obj.set_index("0");
            this.divForm.form.div00.form.div00.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","287","355","980","85",null,null,null,null,null,null,this.divForm.form.div00.form.div00.form);
            obj.set_taborder("10");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Radio00\"/></Contents>");
            this.divForm.form.div00.form.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00","410","361","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form.div00.form);
            obj.set_taborder("12");
            obj.set_text("신청자");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.div00.form.div00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","410","361","305","86",null,null,null,null,null,null,this.divForm.form.div00.form.div00.form);
            obj.set_taborder("14");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_02\"/></Contents>");
            this.divForm.form.div00.form.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_02","410","408","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form.div00.form);
            obj.set_taborder("13");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.div00.form.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00","554","485","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form.div00.form);
            obj.set_taborder("19");
            obj.set_text("작업감독자");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.div00.form.div00.addChild(obj.name, obj);

            obj = new Div("Div00","554","531","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form.div00.form);
            obj.set_taborder("20");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            this.divForm.form.div00.form.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_02_00","0.00","0","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form.div00.form.Div00.form);
            obj.set_taborder("0");
            obj.set_readonly("false");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_text("");
            this.divForm.form.div00.form.div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button02","edt00_02_00:-40","0","40","40",null,null,null,null,null,null,this.divForm.form.div00.form.div00.form.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            this.divForm.form.div00.form.div00.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan_04_00","554","485","305","86",null,null,null,null,null,null,this.divForm.form.div00.form.div00.form);
            obj.set_taborder("21");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Div00\"/></Contents>");
            this.divForm.form.div00.form.div00.addChild(obj.name, obj);

            obj = new Static("staLabel05_00_00","604","564","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form.div00.form);
            obj.set_taborder("26");
            obj.set_text("휴대폰 번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.div00.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit01","604","611","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form.div00.form);
            obj.set_taborder("27");
            obj.set_readonly("true");
            this.divForm.form.div00.form.div00.addChild(obj.name, obj);

            obj = new Panel("Panel00","604","611","100%","85",null,null,null,null,null,null,this.divForm.form.div00.form.div00.form);
            obj.set_taborder("29");
            obj.set_type("vertical");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Edit01\"/><PanelItem id=\"PanelItem01\" componentid=\"sta00_00\"/></Contents>");
            this.divForm.form.div00.form.div00.addChild(obj.name, obj);

            obj = new Panel("pan04_00","604","564","305","136",null,null,null,null,null,null,this.divForm.form.div00.form.div00.form);
            obj.set_taborder("30");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/></Contents>");
            this.divForm.form.div00.form.div00.addChild(obj.name, obj);

            obj = new Static("sta00_00","604","648","100%","57",null,null,null,null,null,null,this.divForm.form.div00.form.div00.form);
            obj.set_taborder("28");
            obj.set_text("휴대폰번호는 우측상단 \"사용자 이름\" 클릭 후 해당 메뉴에서 등록 및 수정이 가능합니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.divForm.form.div00.form.div00.addChild(obj.name, obj);

            obj = new Button("Button01","64","43","34","34",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("true");
            obj.set_text("");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Button("Button00","16","45","34","34",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Static("staSubTitle00","0","0","100.00%","50",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("6");
            obj.set_text("작업개요");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Button("Button01_00","54","45","34","34",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("true");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00","31","42","34","34",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","0","76","250","50",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("9");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00_00\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("Panel03","0","30","100%","70",null,null,null,null,"70",null,this.divForm.form.div00.form);
            obj.set_taborder("10");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02_00\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Div("div01","290","960","100.00%","1759.997",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("11");
            obj.set_text("div01");
            obj.set_fittocontents("height");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Static("staLabel05_00_00","592","198","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("0");
            obj.set_text("전산실 작업명");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00","592","244","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("1");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Static("staLabel05_01_00","592","244","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("3");
            obj.set_text("작업근거");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Edit("Edit01","1302","198","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("4");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Panel("pan1","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("6");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_fittocontents("height");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan04_00\"/><PanelItem id=\"PanelItem01\" componentid=\"pan05_01\"/></Contents>");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Panel("pan05_01","592","198","305","86",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit01\"/></Contents>");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Panel("pan04_00","592","198","305","86",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit00\"/></Contents>");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Static("staLabel05_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("7");
            obj.set_text("작업내용 요약");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","171","103","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("8");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Panel("pan04_00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit00_00\"/></Contents>");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Static("staLabel05_01_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("10");
            obj.set_text("대상시스템");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Edit("Edit01_00","633","105","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("11");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Panel("pan05_01_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("12");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit01_00\"/></Contents>");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Panel("pan2","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("13");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_fittocontents("height");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan04_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan05_01_00\"/></Contents>");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Static("Static02","83","330","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("14");
            obj.set_text("작업장위치");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Static("Static04","231","365","80","40",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("15");
            obj.set_text("[ICT센터]");
            obj.set_flexshrink("1");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","77","380","166","40",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("16");
            obj.set_text("전산실 2층(201호)");
            obj.set_fittocontents("width");
            obj.set_value("true");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","43","363","167","40",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("17");
            obj.set_text("전산실 3층(301호)");
            obj.set_fittocontents("width");
            obj.set_value("true");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Panel("Panel03_00","20","356","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("18");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static04\"/><PanelItem id=\"PanelItem01\" componentid=\"CheckBox01\"/><PanelItem id=\"PanelItem02\" componentid=\"CheckBox00\"/></Contents>");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Static("Static05","63","420","80","40",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("19");
            obj.set_text("[AICC]");
            obj.set_flexshrink("1");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox02","72","420","216","40",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("20");
            obj.set_text("전산실 2층(221호, 222호)");
            obj.set_fittocontents("width");
            obj.set_value("true");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Panel("Panel04","20","400","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("21");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static05\"/><PanelItem id=\"PanelItem01\" componentid=\"CheckBox02\"/></Contents>");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Static("Static06","70","440","80","40",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("22");
            obj.set_text("Static06");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox03","133","433","217","40",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("23");
            obj.set_text("전산실 미출입(원격접속 등)");
            obj.set_value("true");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Panel("Panel05","20","413","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("24");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static06\"/><PanelItem id=\"PanelItem01\" componentid=\"CheckBox03\"/></Contents>");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Panel("Panel01","20.00","290","305","160",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("25");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel03_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel04\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel05\"/></Contents>");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Static("Static03","630","315","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("26");
            obj.set_text("작업감독자 입회여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Radio("Radio00","572","348","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("27");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("horizontal");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var divForm_form_div00_form_div01_form_Radio00_innerdataset = new nexacro.NormalDataset("divForm_form_div00_form_div01_form_Radio00_innerdataset", obj);
            divForm_form_div00_form_div01_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">입회</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">불필요</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_div00_form_div01_form_Radio00_innerdataset);
            obj.set_text("입회");
            obj.set_value("0");
            obj.set_index("0");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","1015","337","305","150",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("28");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static03\"/><PanelItem id=\"PanelItem01\" componentid=\"Radio00\"/></Contents>");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Panel("pan3","0","290","100%","160",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("29");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02_00\"/></Contents>");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("30");
            obj.set_text("작업목적");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Radio("Radio01","20","496","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("31");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_fittocontents("both");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var divForm_form_div00_form_div01_form_Radio01_innerdataset = new nexacro.NormalDataset("divForm_form_div00_form_div01_form_Radio01_innerdataset", obj);
            divForm_form_div00_form_div01_form_Radio01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">신규입주(구축)</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">유지보수</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">시설물공사</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">시스템점검</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">기타</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_div00_form_div01_form_Radio01_innerdataset);
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Panel("pan_04_00_00","20.00","242","980","85.99799999999999",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("32");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Radio01\"/></Contents>");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Panel("pan4","0","242","100.00%","97",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("33");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan_04_00_00\"/></Contents>");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_01_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("34");
            obj.set_text("작업목적 기타내용");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_02_00_00_00","20.00","288","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("35");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Panel("pan_04_00_00_00","20.00","242","305","86",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("36");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_02_00_00_00\"/></Contents>");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Panel("pan5","0","242","100.00%","96",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("37");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan_04_00_00_00\"/></Contents>");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_01_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("38");
            obj.set_text("일상점검 여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Radio("Radio02","20","688","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("39");
            obj.set_direction("horizontal");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_fittocontents("none");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var divForm_form_div00_form_div01_form_Radio02_innerdataset = new nexacro.NormalDataset("divForm_form_div00_form_div01_form_Radio02_innerdataset", obj);
            divForm_form_div00_form_div01_form_Radio02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">해당</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">해당없음</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_div00_form_div01_form_Radio02_innerdataset);
            obj.set_text("해당");
            obj.set_value("0");
            obj.set_index("0");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Static("Static07","93","740","100%","57",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("40");
            obj.set_text("일상점검 : 매일 및 수시로 시행하는 시스템.하드웨어 점검(점검 체크리스트를 통한 공사 및 자회사 자체 점검\r\n※ 정기점검 또는 일상점검이지만 구체적인 작업내용을 기술해야하는 경우(분기점검, 외부업체 점검 등) ‘해당없음＇ 선택 및 작업내용을 작성하시기 바랍니다.");
            obj.set_cssclass("sta_WF_Des004");
            obj.set_fittocontents("height");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Panel("pan_04_00_00_00_00","20.00","545","100%","151",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("41");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Radio02\"/><PanelItem id=\"PanelItem02\" componentid=\"Static07\"/></Contents>");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Panel("pan6","0","545","100.00%","162",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("42");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan_04_00_00_00_00\"/></Contents>");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_01_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("43");
            obj.set_text("작업시작일");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","120","872","145","40",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("44");
            obj.set_dateformat("yyyy-MM-dd ");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Combo("Combo01","276","903","80","40",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("45");
            obj.set_text("00");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Combo("Combo00","212","862","80","40",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("46");
            obj.set_text("00");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox04","115","968","133","40",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("47");
            obj.set_text("시간 직접입력");
            obj.set_fittocontents("width");
            obj.set_value("true");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Panel("Panel07","20","871","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("48");
            obj.set_verticalgap("4");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Calendar00\"/><PanelItem id=\"PanelItem01\" componentid=\"Combo01\"/><PanelItem id=\"PanelItem02\" componentid=\"Combo00\"/><PanelItem id=\"PanelItem03\" componentid=\"CheckBox04\"/></Contents>");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Static("Static08","20","892","180","40",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("49");
            obj.set_text("작업전 48시간 이전에 등록 \r\n하시기 바랍니다.");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_Des004");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Edit("Edit01_01","146","985","135","40",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("50");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Panel("Panel08","20","914","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("51");
            obj.set_flexcrossaxisalign("center");
            obj.set_horizontalgap("10");
            obj.set_verticalgap("4");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static08\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit01_01\"/></Contents>");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Panel("pan_04_00_00_00_00_00","20.00","798","305","134",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("52");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_01_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel07\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel08\"/></Contents>");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_01_00_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("53");
            obj.set_text("작업시작일");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00","120","872","145","40",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("54");
            obj.set_dateformat("yyyy-MM-dd ");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Combo("Combo01_00","276","903","80","40",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("55");
            obj.set_text("00");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","212","862","80","40",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("56");
            obj.set_text("00");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox04_00","115","968","133","40",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("57");
            obj.set_text("시간 직접입력");
            obj.set_fittocontents("width");
            obj.set_value("true");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Panel("Panel07_00","20","871","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("58");
            obj.set_verticalgap("4");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Calendar00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Combo01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Combo00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"CheckBox04_00\"/></Contents>");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Static("Static08_00","20","884","180","40",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("59");
            obj.set_text("작업신청 가능기간은\r\n최대 7일입니다(휴일포함)");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_Des004");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Edit("Edit01_01_00","146","985","135","40",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("60");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Panel("Panel08_00","20","914","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("61");
            obj.set_flexcrossaxisalign("center");
            obj.set_horizontalgap("10");
            obj.set_verticalgap("4");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static08_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit01_01_00\"/></Contents>");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Panel("pan_04_00_00_00_00_00_00","20.00","798","305","134",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("62");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_01_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel07_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel08_00\"/></Contents>");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Panel("pan7","0","798","100%","145",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("63");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan_04_00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan_04_00_00_00_00_00_00\"/></Contents>");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_02_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("64");
            obj.set_text("야간작업");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Radio("Radio03","0","48","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("65");
            obj.set_direction("horizontal");
            obj.set_fittocontents("none");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var divForm_form_div00_form_div01_form_Radio03_innerdataset = new nexacro.NormalDataset("divForm_form_div00_form_div01_form_Radio03_innerdataset", obj);
            divForm_form_div00_form_div01_form_Radio03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_div00_form_div01_form_Radio03_innerdataset);
            obj.set_text("예");
            obj.set_value("0");
            obj.set_index("0");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Static("Static00","234","981","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("66");
            obj.set_text("(주간(09~18시 , 야간 18시~09시)");
            obj.set_cssclass("sta_WF_Des004");
            obj.set_fittocontents("height");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_02_00","20.00","852","305","134",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("67");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Radio03\"/><PanelItem id=\"PanelItem02\" componentid=\"Static00\"/></Contents>");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_00_00_01_00","974.00","151","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("68");
            obj.set_text("위험작업여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Radio("Radio05","595","963","200","40",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("69");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_fittocontents("none");
            obj.set_direction("horizontal");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var divForm_form_div00_form_div01_form_Radio05_innerdataset = new nexacro.NormalDataset("divForm_form_div00_form_div01_form_Radio05_innerdataset", obj);
            divForm_form_div00_form_div01_form_Radio05_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">해당</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">해당없음</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_div00_form_div01_form_Radio05_innerdataset);
            obj.set_text("해당");
            obj.set_value("0");
            obj.set_index("0");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Button("Button02","864","980","179","34",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("70");
            obj.set_text("위험작업 여부 확인하기");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_SmallGray");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Panel("Panel10","520","968","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("71");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Radio05\"/><PanelItem id=\"PanelItem01\" componentid=\"Button02\"/></Contents>");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Panel("pan06_00_00_01_00","730","852","305","90",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("72");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_00_00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel10\"/></Contents>");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Panel("pan8","0","852","100.00%","145",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("73");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan06_00_00_01_00\"/></Contents>");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("74");
            obj.set_text("대표작업자 성함");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","75","127","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("75");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_01","20.00","84","305","86",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("76");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit00_00_00\"/></Contents>");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_00_00_00","974.00","151","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("77");
            obj.set_text("대표작업자 소속");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Edit("Edit01_00_00","607","140","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("78");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Panel("pan06_00_00_00","974.00","151","305","86",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("79");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit01_00_00\"/></Contents>");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Panel("pan9","0","60","100.00%","100",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("80");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan06_00_00_00\"/></Contents>");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("81");
            obj.set_text("대표작업자 연락처");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_01","75","127","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("82");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_02","20.00","84","305","86",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("83");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit00_00_01\"/></Contents>");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_00_00_01","974.00","151","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("84");
            obj.set_text("총 작업인원");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Edit("Edit01_00_01","607","140","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("85");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Panel("pan06_00_00_01","974.00","151","305","86",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("86");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit01_00_01\"/></Contents>");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Panel("pan10","0","60","100.00%","100",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("87");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_02\"/><PanelItem id=\"PanelItem02\" componentid=\"pan06_00_00_01\"/></Contents>");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_02_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("88");
            obj.set_text("대상 시스템 영향");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Radio("Radio03_00","0","48","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("89");
            obj.set_direction("horizontal");
            obj.set_fittocontents("none");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var divForm_form_div00_form_div01_form_Radio03_00_innerdataset = new nexacro.NormalDataset("divForm_form_div00_form_div01_form_Radio03_00_innerdataset", obj);
            divForm_form_div00_form_div01_form_Radio03_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_div00_form_div01_form_Radio03_00_innerdataset);
            obj.set_text("예");
            obj.set_value("0");
            obj.set_index("0");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_02_00_00","20.00","84","305","86",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("90");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_02_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Radio03_00\"/></Contents>");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_00_00_01_00_00","974.00","151","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("91");
            obj.set_text("대상 시스템 영향도");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Edit("Edit01_00_01_00_00","607","140","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("92");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Panel("pan06_00_00_01_00_00","974.00","151","305","86",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("93");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_00_00_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit01_00_01_00_00\"/></Contents>");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Panel("pan11","0","60","100.00%","100",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("94");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_02_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan06_00_00_01_00_00\"/></Contents>");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_01_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("95");
            obj.set_text("타 시스템 영향");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Radio("Radio04","74","1373","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("96");
            obj.set_direction("horizontal");
            obj.set_fittocontents("none");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var divForm_form_div00_form_div01_form_Radio04_innerdataset = new nexacro.NormalDataset("divForm_form_div00_form_div01_form_Radio04_innerdataset", obj);
            divForm_form_div00_form_div01_form_Radio04_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_div00_form_div01_form_Radio04_innerdataset);
            obj.set_text("예");
            obj.set_value("0");
            obj.set_index("0");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_01_00","20.00","84","305","86",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("97");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Radio04\"/></Contents>");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_00_00_00_00","974.00","151","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("98");
            obj.set_text("타 시스템 영향도");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Edit("Edit01_00_00_00","607","140","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("99");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Panel("pan06_00_00_00_00","974.00","151","305","86",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("100");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit01_00_00_00\"/></Contents>");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Panel("pan12","0","60","100.00%","100",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("101");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan06_00_00_00_00\"/></Contents>");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_01_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("102");
            obj.set_text("전산 장비 반출입");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox07","201","1463","74","40",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("103");
            obj.set_text("반입");
            obj.set_fittocontents("width");
            obj.set_value("true");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox06","205","1453","74","40",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("104");
            obj.set_text("반출");
            obj.set_fittocontents("width");
            obj.set_value("true");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox05","115","1445","102","40",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("105");
            obj.set_text("해당없음");
            obj.set_fittocontents("width");
            obj.set_value("true");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Panel("Panel11","20","1438","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("106");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"CheckBox07\"/><PanelItem id=\"PanelItem01\" componentid=\"CheckBox06\"/><PanelItem id=\"PanelItem02\" componentid=\"CheckBox05\"/></Contents>");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_01_00_00","20.00","84","100%","90",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("107");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel11\"/></Contents>");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Panel("pan13","0","1372","100.00%","101",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("108");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_01_00_00\"/></Contents>");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_01_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("109");
            obj.set_text("반입품목");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Edit("Edit04","100","1522","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("110");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Static("Static09","140","1480","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("111");
            obj.set_text("전산장비(서버, 네트워크 장비 등)품목만 기재(공구, 휴대용 저장매체 등 제외)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_01_00_00_00","20.00","84","96.08%","119.99799999999999",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("112");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_01_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit04\"/><PanelItem id=\"PanelItem02\" componentid=\"Static09\"/></Contents>");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Panel("pan14","0","60","100.00%","130.997",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("113");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_01_00_00_00\"/></Contents>");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_01_00_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("114");
            obj.set_text("반출품목");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Edit("Edit04_00","100","1522","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("115");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Static("Static10","100","1593","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("116");
            obj.set_text("전산장비(서버, 네트워크 장비 등)품목만 기재(공구, 휴대용 저장매체 등 제외)");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_Des");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_01_00_00_00_00","20.00","84","100%","120",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("117");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_01_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit04_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static10\"/></Contents>");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Panel("pan15","0","60","100.00%","131",null,null,null,null,null,null,this.divForm.form.div00.form.div01.form);
            obj.set_taborder("118");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_01_00_00_00_00\"/></Contents>");
            this.divForm.form.div00.form.div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","0","30","100%","70",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("17");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Static("staSubTitle01","162","3046","100.00%","50",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("13");
            obj.set_text("작업내용");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Button("Button01_01","61","21","34","34",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("true");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Button("Button00_01","4","25","34","34",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("Panel00","1388","3046","250","50",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("16");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00_01\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Div("div00_00","292","1984","100.00%","221",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("12");
            obj.set_text("div00");
            obj.set_fittocontents("height");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("Panel00","20","0","100%","210",null,null,null,null,null,null,this.divForm.form.div00.form.div00_00.form);
            obj.set_taborder("1");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panGrdBtn\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00\"/></Contents>");
            this.divForm.form.div00.form.div00_00.addChild(obj.name, obj);

            obj = new Button("btnGrdAdd","2598","2650","47","34",null,null,null,null,null,null,this.divForm.form.div00.form.div00_00.form);
            obj.set_taborder("2");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.div00.form.div00_00.addChild(obj.name, obj);

            obj = new Button("btnGrdDel","2656","2650","45","34",null,null,null,null,null,null,this.divForm.form.div00.form.div00_00.form);
            obj.set_taborder("3");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.div00.form.div00_00.addChild(obj.name, obj);

            obj = new Button("btnGrdRegi","2710","2650","45","34",null,null,null,null,null,null,this.divForm.form.div00.form.div00_00.form);
            obj.set_taborder("4");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_SmallBlack");
            obj.set_visible("false");
            obj.set_fittocontents("width");
            this.divForm.form.div00.form.div00_00.addChild(obj.name, obj);

            obj = new Button("btnGrdDw","2766","2650","124","34",null,null,null,null,null,null,this.divForm.form.div00.form.div00_00.form);
            obj.set_taborder("5");
            obj.set_text("다운로드(엑셀)");
            obj.set_cssclass("btn_WF_GrdDw");
            obj.set_visible("false");
            obj.set_fittocontents("width");
            this.divForm.form.div00.form.div00_00.addChild(obj.name, obj);

            obj = new Panel("panGrdBtn","0","2650","100%","44",null,null,null,null,null,null,this.divForm.form.div00.form.div00_00.form);
            obj.set_taborder("6");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_spacing("10px 0px 0px");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnGrdAdd\"/><PanelItem id=\"PanelItem01\" componentid=\"btnGrdDel\"/><PanelItem id=\"PanelItem02\" componentid=\"btnGrdRegi\"/><PanelItem id=\"PanelItem03\" componentid=\"btnGrdDw\"/></Contents>");
            this.divForm.form.div00.form.div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel02","0","0","100.00%","221",null,null,null,null,null,null,this.divForm.form.div00.form.div00_00.form);
            obj.set_taborder("1");
            obj.set_fittocontents("height");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00\"/></Contents>");
            this.divForm.form.div00.form.div00_00.addChild(obj.name, obj);

            obj = new Grid("Grid00","714","66","100%","156",null,null,null,null,null,null,this.divForm.form.div00.form.div00_00.form);
            obj.set_taborder("7");
            obj.set_binddataset("ds00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"작업일시\" cssclass=\"CellE\"/><Cell col=\"3\" text=\"작업시작시간\" cssclass=\"CellE\"/><Cell col=\"4\" text=\"작업종료시간\" cssclass=\"CellE\"/><Cell col=\"5\" text=\"개요\" cssclass=\"CellE\"/><Cell col=\"6\" text=\"작업내역\" cssclass=\"CellE\"/><Cell col=\"7\" text=\"작업자회사\" cssclass=\"CellE\"/><Cell col=\"8\" text=\"작업자성함\" cssclass=\"CellE,CellEnd\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\"/><Cell col=\"2\" text=\"bind:업무분류\" displaytype=\"text\"/><Cell col=\"3\" text=\"bind:업체기관명\" displaytype=\"text\"/><Cell col=\"4\" text=\"bind:건물명\" displaytype=\"text\"/><Cell col=\"5\" text=\"bind:크기\" displaytype=\"text\"/><Cell col=\"6\" text=\"bind:용도\" displaytype=\"text\"/><Cell col=\"7\" text=\"bind:진행상태\" displaytype=\"text\" cssclass=\"expr:state==&apos;0&apos;?&apos;CellTxtRed&apos;:&apos;CellTxtBlue&apos;\"/><Cell col=\"8\" text=\"bind:제출일\" displaytype=\"text\" cssclass=\"CellEnd\"/></Band></Format></Formats>");
            this.divForm.form.div00.form.div00_00.addChild(obj.name, obj);

            obj = new Static("staSubTitle02","0","0","100.00%","50",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("18");
            obj.set_text("정보보호서약서 및 개인 정보동의서 목록");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Button("Button01_02","61","21","34","34",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("true");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Button("Button00_02","4","25","34","34",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","0","54","250","50",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("21");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Button01_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Button00_02\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("Panel01_01","0","30","100%","70",null,null,null,null,"70",null,this.divForm.form.div00.form);
            obj.set_taborder("22");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Div("div02","143","3043","100.00%","232",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("23");
            obj.set_text("div02");
            obj.set_fittocontents("height");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("Panel00","20","0","100%","211",null,null,null,null,null,null,this.divForm.form.div00.form.div02.form);
            obj.set_taborder("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Grid00\"/></Contents>");
            this.divForm.form.div00.form.div02.addChild(obj.name, obj);

            obj = new Panel("Panel02","0","0","100.00%","232",null,null,null,null,null,null,this.divForm.form.div00.form.div02.form);
            obj.set_taborder("1");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00\"/></Contents>");
            this.divForm.form.div00.form.div02.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","20","100.00%","211",null,null,null,null,null,null,this.divForm.form.div00.form.div02.form);
            obj.set_taborder("2");
            obj.set_binddataset("ds00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"120\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"성명\" cssclass=\"CellE\"/><Cell col=\"2\" text=\"생년월일\" cssclass=\"CellE\"/><Cell col=\"3\" text=\"상태\"/><Cell col=\"4\" text=\"구분\"/><Cell col=\"5\" text=\"등록일자\"/><Cell col=\"6\" text=\"시작일자\"/><Cell col=\"7\" text=\"종료일자\"/><Cell col=\"8\" colspan=\"2\" text=\"첨부파일\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\"/><Cell col=\"2\" text=\"bind:업무분류\" displaytype=\"text\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\" text=\"Iaad010102 [PDF, 328KB]\" displaytype=\"text\" cssclass=\"CellMerge,CellLink\"/><Cell col=\"9\" text=\"파일등록\" displaytype=\"buttoncontrol\" cssclass=\"CellEnd,CellFileUp\" edittype=\"button\"/></Band></Format></Formats>");
            this.divForm.form.div00.form.div02.addChild(obj.name, obj);

            obj = new Static("staSubTitle03","382","3247","100.00%","50",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("24");
            obj.set_text("첨부(구비서류)");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Button("Button01_03","36","44","34","34",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("26");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Button("Button02","64","40","34","34",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("25");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("true");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("Panel02_01","1610","3247","250","50",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("27");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button02\"/><PanelItem id=\"PanelItem01\" componentid=\"Button01_03\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("Panel03_00","382","3247","100.00%","70",null,null,null,null,"70",null,this.divForm.form.div00.form);
            obj.set_taborder("28");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle03\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02_01\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Div("div03","242","3382","100.00%","1025",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("29");
            obj.set_text("div03");
            obj.set_fittocontents("height");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_02","0","44","305","46",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("0");
            obj.set_text("작업신고서");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Button("Button00","813","76","90","40",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("1");
            obj.set_text("다운로드");
            obj.set_cssclass("btn_WF_GrdDw");
            obj.set_fittocontents("width");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Button("btn_file_1","124","58","116","40",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("2");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Panel("panBtnFile","433","58","305","46",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("3");
            obj.set_flexgrow("0");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1\"/></Contents>");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Panel("panTitle","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("4");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02\"/></Contents>");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Static("Static00","88","123","48","46",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("5");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Static("Static01","165","143","9","46",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("6");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Static("Static02","293","131","13","46",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("7");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Panel("panFileNum","20","190","78","46",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("8");
            obj.set_flexgrow("0");
            obj.set_horizontalgap("4");
            obj.set_fittocontents("width");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02\"/></Contents>");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Panel("Panel00","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("9");
            obj.set_visible("false");
            obj.set_flexmainaxisalign("spacebetween");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum\"/><PanelItem id=\"PanelItem02\" componentid=\"panBtnFile\"/></Contents>");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Grid("Grid00","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("10");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Static("Static03","62","198","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("11");
            obj.set_text("시설물 공사를 포함한 작업일 경우 입주자서비스포털(TSP)내 최종 협의완료된 “  “작업신고서＂를 첨부하시길 바랍니다.");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_Des");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Panel("panFile","0","42","100.00%","205",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("12");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00\"/><PanelItem id=\"PanelItem03\" componentid=\"Static03\"/></Contents>");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00","0","44","305","46",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("13");
            obj.set_text("전산장비반출입 신청서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Button("Button00_00","813","76","90","40",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("14");
            obj.set_text("다운로드");
            obj.set_cssclass("btn_WF_GrdDw");
            obj.set_fittocontents("width");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Button("btn_file_1_00","124","58","116","40",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("15");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00","433","58","305","46",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("16");
            obj.set_flexgrow("0");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1_00\"/></Contents>");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Panel("panTitle00","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("17");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00\"/></Contents>");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Static("Static00_00","88","123","48","46",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("18");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Static("Static01_00","165","143","9","46",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("19");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Static("Static02_00","293","131","13","46",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("20");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Panel("panFileNum00","20","190","78","46",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("21");
            obj.set_flexgrow("0");
            obj.set_horizontalgap("4");
            obj.set_fittocontents("width");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02_00\"/></Contents>");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("22");
            obj.set_visible("false");
            obj.set_flexmainaxisalign("spacebetween");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum00\"/><PanelItem id=\"PanelItem02\" componentid=\"panBtnFile00\"/></Contents>");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("23");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Static("Static04","33","348","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("24");
            obj.set_text("전산실 내부로 장비(서버, 네트워크 장비 등) 가 반입.반출될 경우");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_Des");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Panel("panFile00","0","42","100.00%","205",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("25");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Static04\"/></Contents>");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_01","0","44","305","46",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("26");
            obj.set_text("제원조사서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Button("Button00_01","813","76","90","40",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("27");
            obj.set_text("다운로드");
            obj.set_cssclass("btn_WF_GrdDw");
            obj.set_fittocontents("width");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Button("btn_file_1_01","124","58","116","40",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("28");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Panel("panBtnFile01","433","58","305","46",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("29");
            obj.set_flexgrow("0");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_01\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1_01\"/></Contents>");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Panel("panTitle01","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("30");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_01\"/></Contents>");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Static("Static00_01","88","123","48","46",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("31");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Static("Static01_01","165","143","9","46",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("32");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Static("Static02_01","293","131","13","46",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("33");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Panel("panFileNum01","20","190","78","46",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("34");
            obj.set_flexgrow("0");
            obj.set_horizontalgap("4");
            obj.set_fittocontents("width");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02_01\"/></Contents>");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("35");
            obj.set_visible("false");
            obj.set_flexmainaxisalign("spacebetween");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum01\"/><PanelItem id=\"PanelItem02\" componentid=\"panBtnFile01\"/></Contents>");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Grid("Grid00_01","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("36");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Static("Static05","71","518","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("37");
            obj.set_text("신규 시스템이 반입(장비의 설치 및 변경) 되는 경우");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_Des");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Panel("panFile01","0","42","100.00%","205",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("38");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_01\"/><PanelItem id=\"PanelItem03\" componentid=\"Static05\"/></Contents>");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_02","0","44","305","46",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("39");
            obj.set_text("시스템설치 계획서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Button("Button00_02","813","76","90","40",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("40");
            obj.set_text("다운로드");
            obj.set_cssclass("btn_WF_GrdDw");
            obj.set_fittocontents("width");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Button("btn_file_1_02","124","58","116","40",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("41");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Panel("panBtnFile02","433","58","305","46",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("42");
            obj.set_flexgrow("0");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_02\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1_02\"/></Contents>");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Panel("panTitle02","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("43");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_02\"/></Contents>");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Static("Static00_02","88","123","48","46",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("44");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Static("Static01_02","165","143","9","46",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("45");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Static("Static02_02","293","131","13","46",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("46");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Panel("panFileNum02","20","190","78","46",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("47");
            obj.set_flexgrow("0");
            obj.set_horizontalgap("4");
            obj.set_fittocontents("width");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02_02\"/></Contents>");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_02","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("48");
            obj.set_visible("false");
            obj.set_flexmainaxisalign("spacebetween");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum02\"/><PanelItem id=\"PanelItem02\" componentid=\"panBtnFile02\"/></Contents>");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Grid("Grid00_02","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("49");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Static("Static06","78","675","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("50");
            obj.set_text("신규 시스템을 전산실에 설치하는 경우(최초 1회 필수)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Panel("panFile02","0","42","100.00%","205",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("51");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_02\"/><PanelItem id=\"PanelItem03\" componentid=\"Static06\"/></Contents>");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_03","0","44","305","46",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("52");
            obj.set_text("세부작업내역서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Button("Button00_03","813","76","90","40",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("53");
            obj.set_text("다운로드");
            obj.set_cssclass("btn_WF_GrdDw");
            obj.set_fittocontents("width");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Button("btn_file_1_03","124","58","116","40",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("54");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Panel("panBtnFile03","433","58","305","46",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("55");
            obj.set_flexgrow("0");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_03\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1_03\"/></Contents>");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Panel("panTitle03","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("56");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_03\"/></Contents>");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Static("Static00_03","88","123","48","46",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("57");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Static("Static01_03","165","143","9","46",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("58");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Static("Static02_03","293","131","13","46",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("59");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Panel("panFileNum03","20","190","78","46",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("60");
            obj.set_flexgrow("0");
            obj.set_horizontalgap("4");
            obj.set_fittocontents("width");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_03\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_03\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02_03\"/></Contents>");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_03","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("61");
            obj.set_visible("false");
            obj.set_flexmainaxisalign("spacebetween");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum03\"/><PanelItem id=\"PanelItem02\" componentid=\"panBtnFile03\"/></Contents>");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Grid("Grid00_03","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("62");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Static("Static07","153","841","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("63");
            obj.set_text("작업으로 인해 해당 시스템 및 타 시스템에 영향이 있을 경우");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Panel("panFile03","0","42","100.00%","205",null,null,null,null,null,null,this.divForm.form.div00.form.div03.form);
            obj.set_taborder("64");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle03\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_03\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_03\"/><PanelItem id=\"PanelItem03\" componentid=\"Static07\"/></Contents>");
            this.divForm.form.div00.form.div03.addChild(obj.name, obj);

            obj = new Static("staSubTitle04","295","4485","100.00%","50",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("30");
            obj.set_text("검토의견");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","1522","4485","250","50",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("33");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button01_04\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00_03\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Button("Button00_03","20","46","34","34",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("32");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Button("Button01_04","76","36","34","34",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("31");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("true");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("Panel01_02","0","30","100%","70",null,null,null,null,"70",null,this.divForm.form.div00.form);
            obj.set_taborder("34");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle04\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_01\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Div("div04","500","4572","100.00%","717",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("35");
            obj.set_text("div04");
            obj.set_fittocontents("height");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form.div04.form);
            obj.set_taborder("0");
            obj.set_text("작업감독자 검토결과");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.div00.form.div04.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","53","302","100%","100",null,null,null,null,null,null,this.divForm.form.div00.form.div04.form);
            obj.set_taborder("1");
            obj.set_displaynulltext("내용 입력");
            this.divForm.form.div00.form.div04.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","20.00","0","980","154",null,null,null,null,null,null,this.divForm.form.div00.form.div04.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"TextArea01\"/></Contents>");
            this.divForm.form.div00.form.div04.addChild(obj.name, obj);

            obj = new Panel("pan1","0","267","100.00%","165",null,null,null,null,null,null,this.divForm.form.div00.form.div04.form);
            obj.set_taborder("3");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00\"/></Contents>");
            this.divForm.form.div00.form.div04.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form.div04.form);
            obj.set_taborder("4");
            obj.set_text("전산실감독자 검토결과");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.div00.form.div04.addChild(obj.name, obj);

            obj = new TextArea("TextArea01_00","53","302","100%","100",null,null,null,null,null,null,this.divForm.form.div00.form.div04.form);
            obj.set_taborder("5");
            obj.set_displaynulltext("내용 입력");
            this.divForm.form.div00.form.div04.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00","20.00","0","980","154",null,null,null,null,null,null,this.divForm.form.div00.form.div04.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"TextArea01_00\"/></Contents>");
            this.divForm.form.div00.form.div04.addChild(obj.name, obj);

            obj = new Panel("pan2","0","267","100.00%","165",null,null,null,null,null,null,this.divForm.form.div00.form.div04.form);
            obj.set_taborder("7");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00\"/></Contents>");
            this.divForm.form.div00.form.div04.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form.div04.form);
            obj.set_taborder("8");
            obj.set_text("운영자회사담당자 검토결과");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.div00.form.div04.addChild(obj.name, obj);

            obj = new TextArea("TextArea01_01","53","302","100%","100",null,null,null,null,null,null,this.divForm.form.div00.form.div04.form);
            obj.set_taborder("9");
            obj.set_displaynulltext("내용 입력");
            this.divForm.form.div00.form.div04.addChild(obj.name, obj);

            obj = new Grid("Grid00","20.00","371","100.00%","166",null,null,null,null,null,null,this.divForm.form.div00.form.div04.form);
            obj.set_taborder("10");
            obj.set_binddataset("ds00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"801\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"별첨\"/><Cell col=\"1\" text=\"내용\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:체크\"/><Cell col=\"1\" text=\"bind:신청자\" cssclass=\"CellEnd\"/></Band></Format></Formats>");
            this.divForm.form.div00.form.div04.addChild(obj.name, obj);

            obj = new Static("Static00","583","508","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form.div04.form);
            obj.set_taborder("11");
            obj.set_text("My Page -> 검토의견함 메뉴에서 내용 등록/수정/삭제 가능합니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.div00.form.div04.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_01","20.00","0","980","376",null,null,null,null,null,null,this.divForm.form.div00.form.div04.form);
            obj.set_taborder("12");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"TextArea01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00\"/><PanelItem id=\"PanelItem03\" componentid=\"Static00\"/></Contents>");
            this.divForm.form.div00.form.div04.addChild(obj.name, obj);

            obj = new Panel("pan3","0","267","100.00%","387",null,null,null,null,null,null,this.divForm.form.div00.form.div04.form);
            obj.set_taborder("13");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_01\"/></Contents>");
            this.divForm.form.div00.form.div04.addChild(obj.name, obj);

            obj = new Static("staSubTitle05","547","5235","100.00%","50",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("36");
            obj.set_text("전달사항");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_02","1775","5235","250","50",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("39");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button01_05\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00_04\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Button("Button00_04","20","46","34","34",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("38");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Button("Button01_05","76","36","34","34",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("37");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("true");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("Panel01_03","0","30","100%","70",null,null,null,null,"70",null,this.divForm.form.div00.form);
            obj.set_taborder("40");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle05\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_02\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Div("div05","120","5205","100.00%","165",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("41");
            obj.set_text("div05");
            obj.set_fittocontents("height");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00","395","250","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form.div05.form);
            obj.set_taborder("0");
            obj.set_text("신청자전달사항");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.div00.form.div05.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","395","302","100%","100",null,null,null,null,null,null,this.divForm.form.div00.form.div05.form);
            obj.set_taborder("1");
            obj.set_displaynulltext("내용 입력");
            this.divForm.form.div00.form.div05.addChild(obj.name, obj);

            obj = new Panel("pan02","0","267","100.00%","165",null,null,null,null,null,null,this.divForm.form.div00.form.div05.form);
            obj.set_taborder("3");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00\"/></Contents>");
            this.divForm.form.div00.form.div05.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","395","250","980","154",null,null,null,null,null,null,this.divForm.form.div00.form.div05.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"TextArea01\"/></Contents>");
            this.divForm.form.div00.form.div05.addChild(obj.name, obj);

            obj = new Static("staSubTitle06","0","0","100.00%","50",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("42");
            obj.set_text("개인정보 수집 이용 동의");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Button("Button01_06","30","45","34","34",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("43");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("true");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Button("Button00_05","4","46","34","34",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("44");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_03","0","71","250","50",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("45");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_horizontalgap("10");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button01_06\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00_05\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("Panel01_04","0","30","100%","70",null,null,null,null,"70",null,this.divForm.form.div00.form);
            obj.set_taborder("46");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle06\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_03\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Div("div00_01","1587","5295","100.00%","206",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("47");
            obj.set_text("div00");
            obj.set_fittocontents("height");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("Panel02","445","147","100.00%","110",null,null,null,null,null,null,this.divForm.form.div00.form.div00_01.form);
            obj.set_taborder("5");
            obj.set_spacing("10px 20px 0px 20px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"TextArea00\"/></Contents>");
            this.divForm.form.div00.form.div00_01.addChild(obj.name, obj);

            obj = new Static("staLabel00","465","257","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form.div00_01.form);
            obj.set_taborder("0");
            obj.set_text("개인정보 수집(필수) 동의여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.div00.form.div00_01.addChild(obj.name, obj);

            obj = new Radio("Radio01","465","302","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form.div00_01.form);
            obj.set_taborder("1");
            obj.set_fittocontents("none");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("horizontal");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var divForm_form_div00_form_div00_01_form_Radio01_innerdataset = new nexacro.NormalDataset("divForm_form_div00_form_div00_01_form_Radio01_innerdataset", obj);
            divForm_form_div00_form_div00_01_form_Radio01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">동의함</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">동의하지 않음</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_div00_form_div00_01_form_Radio01_innerdataset);
            obj.set_text("신청자정보와 동일");
            obj.set_value("0");
            obj.set_index("0");
            this.divForm.form.div00.form.div00_01.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","465","257","305","86",null,null,null,null,null,null,this.divForm.form.div00.form.div00_01.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem01\" componentid=\"Radio01\"/></Contents>");
            this.divForm.form.div00.form.div00_01.addChild(obj.name, obj);

            obj = new Panel("pan00","445","257","100.00%","96",null,null,null,null,null,null,this.divForm.form.div00.form.div00_01.form);
            obj.set_taborder("3");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/></Contents>");
            this.divForm.form.div00.form.div00_01.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","465","157","100%","100",null,null,null,null,null,null,this.divForm.form.div00.form.div00_01.form);
            obj.set_taborder("4");
            obj.set_value("1. 개인정보의 수집 . 이용 목적\n보안구역위해물품 사용신청 시 작성건의 접수와 처리를 위해 개인정보를 수집목적에 필요한 최소한의 범위 내에서 수집하고 있습니다.\n\n2. 수집하려는 개인정보의 항목\n필수항목 : 주관사 회사명, 주관사 부서명 , 주관사관리책임자(정) , 주관사 휴대전화번호(정) , 주관사관리책임자(부) , 주관사 휴대전화번호(부) , 주관사회사번호,\n실제사용자 회사명, 실제사용자 관리책임자(정) , 실제사용자 휴대전화번호(정) , 실제사용자 관리책임자(부) , 실제사용자 휴대전화번호(부) , 실제사용자 회사번호\n\n3. 개인정보의 보유 및 이용 기간\n계약종료 후 3년, 회원탈퇴 시 까지\n\n4. 동의를 거부할 권리와 거부에 따른 불이익 내용\n귀하는 개인정보 수집에 거부할 권리가 있으며, 필수항목 수집을 거부할 경우 보안구역위해물품 승인요청서 작성건의 신청을 할 수 없습니다.");
            obj.set_readonly("true");
            this.divForm.form.div00.form.div00_01.addChild(obj.name, obj);

            obj = new Static("staSubTitle07","246","6503","100.00%","50",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("48");
            obj.set_text("타부서 작업통지 확인");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_04","1473","6503","250","50",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("51");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_06\"/><PanelItem id=\"PanelItem01\" componentid=\"Button01_07\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Button("Button01_07","10","75","34","34",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("50");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Button("Button00_06","18","44","34","34",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("49");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("true");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("Panel01_05","0","30","100%","70",null,null,null,null,"70",null,this.divForm.form.div00.form);
            obj.set_taborder("52");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle07\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_04\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Div("div00_02","1562","6250","100.00%","206",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("53");
            obj.set_text("div00");
            obj.set_fittocontents("height");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("Panel02","0","47","100.00%","110",null,null,null,null,null,null,this.divForm.form.div00.form.div00_02.form);
            obj.set_taborder("5");
            obj.set_spacing("10px 20px 0px 20px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"TextArea00\"/></Contents>");
            this.divForm.form.div00.form.div00_02.addChild(obj.name, obj);

            obj = new Static("staLabel00","490","402","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form.div00_02.form);
            obj.set_taborder("0");
            obj.set_text("타부서 작업통지 확인여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.div00.form.div00_02.addChild(obj.name, obj);

            obj = new Radio("Radio01","490","447","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form.div00_02.form);
            obj.set_taborder("1");
            obj.set_fittocontents("none");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("horizontal");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var divForm_form_div00_form_div00_02_form_Radio01_innerdataset = new nexacro.NormalDataset("divForm_form_div00_form_div00_02_form_Radio01_innerdataset", obj);
            divForm_form_div00_form_div00_02_form_Radio01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">동의함</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">동의하지 않음</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_div00_form_div00_02_form_Radio01_innerdataset);
            obj.set_text("신청자정보와 동일");
            obj.set_value("0");
            obj.set_index("0");
            this.divForm.form.div00.form.div00_02.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.div00.form.div00_02.form);
            obj.set_taborder("3");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/></Contents>");
            this.divForm.form.div00.form.div00_02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","490","402","305","86",null,null,null,null,null,null,this.divForm.form.div00.form.div00_02.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem01\" componentid=\"Radio01\"/></Contents>");
            this.divForm.form.div00.form.div00_02.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","490","302","100%","100",null,null,null,null,null,null,this.divForm.form.div00.form.div00_02.form);
            obj.set_taborder("4");
            obj.set_value("인천국제공항공사 전산실 내 작업을 진행하실 경우 대상 시스템 포함 타 시스템에 미칠 영향을 고려하시고 작업에 임해주시길 바랍니다.\n대상 시스템 작업시, 타 시스템에 영향을 미칠 경우 해당 시스템을 관리 및 이용하고 있는부서에 사전 작업을 통지하셔야 합니다.\n타시스템 담당 부서 및 이용자가 작업 통보를 인지하지 못한 것이 적발될 경우 작업 중단 . 시스템 원상복구 및 퇴거 조치 되시며, 추후\n전산실 작업 허가에 불이익을 받으실수 있습니다.");
            obj.set_readonly("true");
            this.divForm.form.div00.form.div00_02.addChild(obj.name, obj);

            obj = new Div("divBtn","0",null,null,"60","0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_formscrollbartype("auto none");
            obj.set_cssclass("div_WF_PopBtn");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","960.00","10","125","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("1");
            obj.set_text("검토의견송부");
            obj.set_cssclass("btn_WF_No");
            obj.set_fittocontents("width");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("Button01","1208","27","110","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("0");
            obj.set_text("미처리종료");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_fittocontents("width");
            this.divBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form.divInfoGuide.form
            obj = new Layout("default","",0,0,this.divForm.form.divInfoGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnSchClose.set_taborder("0");
                p.btnSchClose.set_cssclass("btn_WF_SchClose");
                p.btnSchClose.move(null,"10","30","30","20",null);
            	}
            );
            this.divForm.form.divInfoGuide.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divInfoGuide.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divInfoGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.divInfoGuide.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.div00.form.div00.form.Div00.form
            obj = new Layout("default","",0,0,this.divForm.form.div00.form.div00.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.edt00_02_00.set_taborder("0");
                p.edt00_02_00.set_readonly("false");
                p.edt00_02_00.set_cssclass("edt_WF_EdtSch");
                p.edt00_02_00.move("0.00","0","100%","40",null,null);

                p.Button02.set_taborder("1");
                p.Button02.set_cssclass("btn_WF_EdtSch");
                p.Button02.move("edt00_02_00:-40","0","40","40",null,null);
            	}
            );
            this.divForm.form.div00.form.div00.form.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.div00.form.div00.form.Div00.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.div00.form.div00.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.div00.form.div00.form.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.div00.form.div00.form
            obj = new Layout("default","",0,0,this.divForm.form.div00.form.div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel00.set_taborder("0");
                p.staLabel00.set_text("신청번호");
                p.staLabel00.set_cssclass("sta_WF_Label");
                p.staLabel00.move("431","54","100%","46",null,null);

                p.pan00.set_taborder("3");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("0px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.move("411","54","100.00%","96",null,null);

                p.Panel00_00.set_taborder("2");
                p.Panel00_00.set_type("vertical");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.set_fittocontents("height");
                p.Panel00_00.set_minwidth("");
                p.Panel00_00.move("431","54","305","86",null,null);

                p.edt00.set_taborder("1");
                p.edt00.set_readonly("true");
                p.edt00.move("431","101","100%","40",null,null);

                p.staLabel00_00.set_taborder("4");
                p.staLabel00_00.set_text("신청구분");
                p.staLabel00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00.move("541","232","100%","46",null,null);

                p.edt00_00.set_taborder("5");
                p.edt00_00.set_readonly("true");
                p.edt00_00.set_value("입주자서비스▶시설물설치(변경)신청");
                p.edt00_00.move("541","278","100%","40",null,null);

                p.Panel00_00_00.set_taborder("6");
                p.Panel00_00_00.set_type("vertical");
                p.Panel00_00_00.set_flexgrow("1");
                p.Panel00_00_00.set_fittocontents("height");
                p.Panel00_00_00.set_minwidth("");
                p.Panel00_00_00.move("541","232","305","86",null,null);

                p.pan00_00.set_taborder("7");
                p.pan00_00.set_horizontalgap("20");
                p.pan00_00.set_flexcrossaxiswrapalign("start");
                p.pan00_00.set_flexwrap("wrap");
                p.pan00_00.set_fittocontents("height");
                p.pan00_00.set_verticalgap("0");
                p.pan00_00.set_spacing("0px 20px 10px 20px");
                p.pan00_00.set_cssclass("pal_WF_DtlBg");
                p.pan00_00.move("521","232","100.00%","96",null,null);

                p.pan01.set_taborder("11");
                p.pan01.set_horizontalgap("20");
                p.pan01.set_flexcrossaxiswrapalign("start");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_verticalgap("0");
                p.pan01.set_spacing("0px 20px 10px 20px");
                p.pan01.set_cssclass("pal_WF_DtlBg");
                p.pan01.set_flexshrink("1");
                p.pan01.set_fittocontents("height");
                p.pan01.move("267","355","100.00%","96",null,null);

                p.pan02.set_taborder("18");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.move("390","361","100.00%","96",null,null);

                p.pan03.set_taborder("25");
                p.pan03.set_horizontalgap("20");
                p.pan03.set_flexcrossaxiswrapalign("start");
                p.pan03.set_flexwrap("wrap");
                p.pan03.set_fittocontents("height");
                p.pan03.set_verticalgap("0");
                p.pan03.set_spacing("0px 20px 10px 20px");
                p.pan03.set_cssclass("pal_WF_DtlBg");
                p.pan03.move("534","485","100.00%","96",null,null);

                p.pan08.set_taborder("33");
                p.pan08.set_horizontalgap("20");
                p.pan08.set_flexcrossaxiswrapalign("start");
                p.pan08.set_flexwrap("wrap");
                p.pan08.set_verticalgap("0");
                p.pan08.set_spacing("0px 20px 10px 20px");
                p.pan08.set_fittocontents("height");
                p.pan08.set_cssclass("pal_WF_DtlBg");
                p.pan08.move("584","564","100.00%","146",null,null);

                p.pan05_01.set_taborder("32");
                p.pan05_01.set_type("vertical");
                p.pan05_01.set_flexgrow("1");
                p.pan05_01.set_fittocontents("height");
                p.pan05_01.move("604","564","305","1",null,null);

                p.Panel00_01.set_taborder("31");
                p.Panel00_01.set_type("vertical");
                p.Panel00_01.set_verticalgap("4");
                p.Panel00_01.set_fittocontents("height");
                p.Panel00_01.move("604","611","100%","80",null,null);

                p.pan04_01.set_taborder("24");
                p.pan04_01.set_type("vertical");
                p.pan04_01.set_flexgrow("1");
                p.pan04_01.set_fittocontents("height");
                p.pan04_01.move("554","485","305","86",null,null);

                p.edt00_03_01_00.set_taborder("23");
                p.edt00_03_01_00.set_readonly("true");
                p.edt00_03_01_00.move("1264","485","100%","40",null,null);

                p.staLabel03_01_00.set_taborder("22");
                p.staLabel03_01_00.set_text("작업감독자 회사명");
                p.staLabel03_01_00.set_cssclass("sta_WF_Label");
                p.staLabel03_01_00.move("554","531","100%","46",null,null);

                p.staLabel03_01.set_taborder("15");
                p.staLabel03_01.set_text("신청자 회사명");
                p.staLabel03_01.set_cssclass("sta_WF_Label");
                p.staLabel03_01.move("410","408","100%","46",null,null);

                p.Panel02_01.set_taborder("17");
                p.Panel02_01.set_type("vertical");
                p.Panel02_01.set_flexgrow("1");
                p.Panel02_01.set_fittocontents("height");
                p.Panel02_01.move("410","361","305","86",null,null);

                p.edt00_03_01.set_taborder("16");
                p.edt00_03_01.set_readonly("true");
                p.edt00_03_01.move("1120","361","100%","40",null,null);

                p.staLabel01_00.set_taborder("8");
                p.staLabel01_00.set_text("신청자 / 감독자 동일여부");
                p.staLabel01_00.set_cssclass("sta_WF_Label_E");
                p.staLabel01_00.move("287","355","100%","46",null,null);

                p.Radio00.set_taborder("9");
                p.Radio00.set_fittocontents("none");
                p.Radio00.set_innerdataset(divForm_form_div00_form_div00_form_Radio00_innerdataset);
                p.Radio00.set_codecolumn("codecolumn");
                p.Radio00.set_datacolumn("datacolumn");
                p.Radio00.set_columncount("-1");
                p.Radio00.set_rowcount("-1");
                p.Radio00.set_value("0");
                p.Radio00.set_index("0");
                p.Radio00.move("287","391","100%","40",null,null);

                p.Panel01_00.set_taborder("10");
                p.Panel01_00.set_type("vertical");
                p.Panel01_00.set_flexgrow("1");
                p.Panel01_00.set_fittocontents("height");
                p.Panel01_00.move("287","355","980","85",null,null);

                p.staLabel03_00.set_taborder("12");
                p.staLabel03_00.set_text("신청자");
                p.staLabel03_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00.move("410","361","100%","46",null,null);

                p.Panel02_00.set_taborder("14");
                p.Panel02_00.set_type("vertical");
                p.Panel02_00.set_flexgrow("1");
                p.Panel02_00.set_fittocontents("height");
                p.Panel02_00.move("410","361","305","86",null,null);

                p.edt00_02.set_taborder("13");
                p.edt00_02.set_readonly("false");
                p.edt00_02.move("410","408","100%","40",null,null);

                p.staLabel03_00_00.set_taborder("19");
                p.staLabel03_00_00.set_text("작업감독자");
                p.staLabel03_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_00.move("554","485","100%","46",null,null);

                p.Div00.set_taborder("20");
                p.Div00.set_text("Div00");
                p.Div00.set_formscrollbartype("none none");
                p.Div00.move("554","531","100%","40",null,null);

                p.pan_04_00.set_taborder("21");
                p.pan_04_00.set_type("vertical");
                p.pan_04_00.set_flexgrow("1");
                p.pan_04_00.set_fittocontents("height");
                p.pan_04_00.move("554","485","305","86",null,null);

                p.staLabel05_00_00.set_taborder("26");
                p.staLabel05_00_00.set_text("휴대폰 번호");
                p.staLabel05_00_00.set_cssclass("sta_WF_Label");
                p.staLabel05_00_00.move("604","564","100%","46",null,null);

                p.Edit01.set_taborder("27");
                p.Edit01.set_readonly("true");
                p.Edit01.move("604","611","100%","40",null,null);

                p.Panel00.set_taborder("29");
                p.Panel00.set_type("vertical");
                p.Panel00.set_verticalgap("4");
                p.Panel00.set_fittocontents("height");
                p.Panel00.move("604","611","100%","85",null,null);

                p.pan04_00.set_taborder("30");
                p.pan04_00.set_type("vertical");
                p.pan04_00.set_flexgrow("1");
                p.pan04_00.set_fittocontents("height");
                p.pan04_00.move("604","564","305","136",null,null);

                p.sta00_00.set_taborder("28");
                p.sta00_00.set_text("휴대폰번호는 우측상단 \"사용자 이름\" 클릭 후 해당 메뉴에서 등록 및 수정이 가능합니다.");
                p.sta00_00.set_cssclass("sta_WF_Des");
                p.sta00_00.set_fittocontents("height");
                p.sta00_00.set_flexgrow("1");
                p.sta00_00.move("604","648","100%","57",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.div00.form.div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.div00.form.div00.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.div00.form.div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Radio00.move("287","391","100%","60",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.div00.form.div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.div00.form.div01.form
            obj = new Layout("default","",0,0,this.divForm.form.div00.form.div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel05_00_00.set_taborder("0");
                p.staLabel05_00_00.set_text("전산실 작업명");
                p.staLabel05_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel05_00_00.move("592","198","100%","46",null,null);

                p.Edit00.set_taborder("1");
                p.Edit00.move("592","244","100%","40",null,null);

                p.staLabel05_01_00.set_taborder("3");
                p.staLabel05_01_00.set_text("작업근거");
                p.staLabel05_01_00.set_cssclass("sta_WF_Label_E");
                p.staLabel05_01_00.move("592","244","100%","46",null,null);

                p.Edit01.set_taborder("4");
                p.Edit01.move("1302","198","100%","40",null,null);

                p.pan1.set_taborder("6");
                p.pan1.set_horizontalgap("20");
                p.pan1.set_flexcrossaxiswrapalign("start");
                p.pan1.set_flexwrap("wrap");
                p.pan1.set_verticalgap("0");
                p.pan1.set_spacing("0px 20px 10px 20px");
                p.pan1.set_fittocontents("height");
                p.pan1.set_cssclass("pal_WF_DtlBg");
                p.pan1.move("0","60","100.00%","96",null,null);

                p.pan05_01.set_taborder("5");
                p.pan05_01.set_type("vertical");
                p.pan05_01.set_flexgrow("1");
                p.pan05_01.move("592","198","305","86",null,null);

                p.pan04_00.set_taborder("2");
                p.pan04_00.set_type("vertical");
                p.pan04_00.set_flexgrow("1");
                p.pan04_00.move("592","198","305","86",null,null);

                p.staLabel05_00_00_00.set_taborder("7");
                p.staLabel05_00_00_00.set_text("작업내용 요약");
                p.staLabel05_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel05_00_00_00.move("10","98","100%","46",null,null);

                p.Edit00_00.set_taborder("8");
                p.Edit00_00.move("171","103","100%","40",null,null);

                p.pan04_00_00.set_taborder("9");
                p.pan04_00_00.set_type("vertical");
                p.pan04_00_00.set_flexgrow("1");
                p.pan04_00_00.move("10.00","98","305","86",null,null);

                p.staLabel05_01_00_00.set_taborder("10");
                p.staLabel05_01_00_00.set_text("대상시스템");
                p.staLabel05_01_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel05_01_00_00.move("10","98","100%","46",null,null);

                p.Edit01_00.set_taborder("11");
                p.Edit01_00.move("633","105","100%","40",null,null);

                p.pan05_01_00.set_taborder("12");
                p.pan05_01_00.set_type("vertical");
                p.pan05_01_00.set_flexgrow("1");
                p.pan05_01_00.move("10.00","98","305","86",null,null);

                p.pan2.set_taborder("13");
                p.pan2.set_horizontalgap("20");
                p.pan2.set_flexcrossaxiswrapalign("start");
                p.pan2.set_flexwrap("wrap");
                p.pan2.set_verticalgap("0");
                p.pan2.set_spacing("0px 20px 10px 20px");
                p.pan2.set_fittocontents("height");
                p.pan2.set_cssclass("pal_WF_DtlBg");
                p.pan2.move("0","60","100.00%","96",null,null);

                p.Static02.set_taborder("14");
                p.Static02.set_text("작업장위치");
                p.Static02.set_cssclass("sta_WF_Label_E");
                p.Static02.move("83","330","100%","46",null,null);

                p.Static04.set_taborder("15");
                p.Static04.set_text("[ICT센터]");
                p.Static04.set_flexshrink("1");
                p.Static04.move("231","365","80","40",null,null);

                p.CheckBox01.set_taborder("16");
                p.CheckBox01.set_text("전산실 2층(201호)");
                p.CheckBox01.set_fittocontents("width");
                p.CheckBox01.set_value("true");
                p.CheckBox01.move("77","380","166","40",null,null);

                p.CheckBox00.set_taborder("17");
                p.CheckBox00.set_text("전산실 3층(301호)");
                p.CheckBox00.set_fittocontents("width");
                p.CheckBox00.set_value("true");
                p.CheckBox00.move("43","363","167","40",null,null);

                p.Panel03_00.set_taborder("18");
                p.Panel03_00.set_fittocontents("height");
                p.Panel03_00.set_flexwrap("wrap");
                p.Panel03_00.move("20","356","100%","40",null,null);

                p.Static05.set_taborder("19");
                p.Static05.set_text("[AICC]");
                p.Static05.set_flexshrink("1");
                p.Static05.move("63","420","80","40",null,null);

                p.CheckBox02.set_taborder("20");
                p.CheckBox02.set_text("전산실 2층(221호, 222호)");
                p.CheckBox02.set_fittocontents("width");
                p.CheckBox02.set_value("true");
                p.CheckBox02.move("72","420","216","40",null,null);

                p.Panel04.set_taborder("21");
                p.Panel04.set_fittocontents("height");
                p.Panel04.set_flexwrap("wrap");
                p.Panel04.move("20","400","100%","40",null,null);

                p.Static06.set_taborder("22");
                p.Static06.set_text("Static06");
                p.Static06.move("70","440","80","40",null,null);

                p.CheckBox03.set_taborder("23");
                p.CheckBox03.set_text("전산실 미출입(원격접속 등)");
                p.CheckBox03.set_value("true");
                p.CheckBox03.move("133","433","217","40",null,null);

                p.Panel05.set_taborder("24");
                p.Panel05.move("20","413","100%","40",null,null);

                p.Panel01.set_taborder("25");
                p.Panel01.set_flexgrow("1");
                p.Panel01.set_fittocontents("height");
                p.Panel01.set_type("vertical");
                p.Panel01.move("20.00","290","305","160",null,null);

                p.Static03.set_taborder("26");
                p.Static03.set_text("작업감독자 입회여부");
                p.Static03.set_cssclass("sta_WF_Label_E");
                p.Static03.move("630","315","100%","46",null,null);

                p.Radio00.set_taborder("27");
                p.Radio00.set_innerdataset(divForm_form_div00_form_div01_form_Radio00_innerdataset);
                p.Radio00.set_codecolumn("codecolumn");
                p.Radio00.set_datacolumn("datacolumn");
                p.Radio00.set_direction("horizontal");
                p.Radio00.set_columncount("-1");
                p.Radio00.set_rowcount("-1");
                p.Radio00.set_value("0");
                p.Radio00.set_index("0");
                p.Radio00.move("572","348","100%","40",null,null);

                p.Panel02_00.set_taborder("28");
                p.Panel02_00.set_flexgrow("1");
                p.Panel02_00.set_fittocontents("height");
                p.Panel02_00.set_type("vertical");
                p.Panel02_00.move("1015","337","305","150",null,null);

                p.pan3.set_taborder("29");
                p.pan3.set_horizontalgap("20");
                p.pan3.set_flexcrossaxiswrapalign("start");
                p.pan3.set_flexwrap("wrap");
                p.pan3.set_fittocontents("height");
                p.pan3.set_spacing("0px 20px 10px 20px");
                p.pan3.set_cssclass("pal_WF_DtlBg");
                p.pan3.set_verticalgap("0");
                p.pan3.move("0","290","100%","160",null,null);

                p.staLabel03_00_00_01.set_taborder("30");
                p.staLabel03_00_00_01.set_text("작업목적");
                p.staLabel03_00_00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_00_01.move("10","98","100%","46",null,null);

                p.Radio01.set_taborder("31");
                p.Radio01.set_innerdataset(divForm_form_div00_form_div01_form_Radio01_innerdataset);
                p.Radio01.set_codecolumn("codecolumn");
                p.Radio01.set_datacolumn("datacolumn");
                p.Radio01.set_fittocontents("both");
                p.Radio01.set_columncount("-1");
                p.Radio01.set_rowcount("-1");
                p.Radio01.move("20","496","100%","40",null,null);

                p.pan_04_00_00.set_taborder("32");
                p.pan_04_00_00.set_type("vertical");
                p.pan_04_00_00.set_flexgrow("1");
                p.pan_04_00_00.set_fittocontents("height");
                p.pan_04_00_00.move("20.00","242","980","85.99799999999999",null,null);

                p.pan4.set_taborder("33");
                p.pan4.set_horizontalgap("20");
                p.pan4.set_flexcrossaxiswrapalign("start");
                p.pan4.set_flexwrap("wrap");
                p.pan4.set_fittocontents("height");
                p.pan4.set_verticalgap("0");
                p.pan4.set_spacing("0px 20px 10px 20px");
                p.pan4.set_cssclass("pal_WF_DtlBg");
                p.pan4.move("0","242","100.00%","97",null,null);

                p.staLabel03_00_00_01_00.set_taborder("34");
                p.staLabel03_00_00_01_00.set_text("작업목적 기타내용");
                p.staLabel03_00_00_01_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_00_01_00.move("10","98","100%","46",null,null);

                p.edt00_02_00_00_00.set_taborder("35");
                p.edt00_02_00_00_00.set_readonly("false");
                p.edt00_02_00_00_00.move("20.00","288","100%","40",null,null);

                p.pan_04_00_00_00.set_taborder("36");
                p.pan_04_00_00_00.set_type("vertical");
                p.pan_04_00_00_00.set_flexgrow("1");
                p.pan_04_00_00_00.move("20.00","242","305","86",null,null);

                p.pan5.set_taborder("37");
                p.pan5.set_horizontalgap("20");
                p.pan5.set_flexcrossaxiswrapalign("start");
                p.pan5.set_flexwrap("wrap");
                p.pan5.set_fittocontents("height");
                p.pan5.set_verticalgap("0");
                p.pan5.set_spacing("0px 20px 10px 20px");
                p.pan5.set_cssclass("pal_WF_DtlBg");
                p.pan5.move("0","242","100.00%","96",null,null);

                p.staLabel03_00_00_01_00_00.set_taborder("38");
                p.staLabel03_00_00_01_00_00.set_text("일상점검 여부");
                p.staLabel03_00_00_01_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_00_01_00_00.move("10","98","100%","46",null,null);

                p.Radio02.set_taborder("39");
                p.Radio02.set_direction("horizontal");
                p.Radio02.set_innerdataset(divForm_form_div00_form_div01_form_Radio02_innerdataset);
                p.Radio02.set_codecolumn("codecolumn");
                p.Radio02.set_datacolumn("datacolumn");
                p.Radio02.set_fittocontents("none");
                p.Radio02.set_columncount("-1");
                p.Radio02.set_rowcount("-1");
                p.Radio02.set_value("0");
                p.Radio02.set_index("0");
                p.Radio02.move("20","688","100%","40",null,null);

                p.Static07.set_taborder("40");
                p.Static07.set_text("일상점검 : 매일 및 수시로 시행하는 시스템.하드웨어 점검(점검 체크리스트를 통한 공사 및 자회사 자체 점검\r\n※ 정기점검 또는 일상점검이지만 구체적인 작업내용을 기술해야하는 경우(분기점검, 외부업체 점검 등) ‘해당없음＇ 선택 및 작업내용을 작성하시기 바랍니다.");
                p.Static07.set_cssclass("sta_WF_Des004");
                p.Static07.set_fittocontents("height");
                p.Static07.move("93","740","100%","57",null,null);

                p.pan_04_00_00_00_00.set_taborder("41");
                p.pan_04_00_00_00_00.set_type("vertical");
                p.pan_04_00_00_00_00.set_flexgrow("1");
                p.pan_04_00_00_00_00.set_verticalgap("4");
                p.pan_04_00_00_00_00.move("20.00","545","100%","151",null,null);

                p.pan6.set_taborder("42");
                p.pan6.set_horizontalgap("20");
                p.pan6.set_flexcrossaxiswrapalign("start");
                p.pan6.set_flexwrap("wrap");
                p.pan6.set_fittocontents("height");
                p.pan6.set_verticalgap("0");
                p.pan6.set_spacing("0px 20px 10px 20px");
                p.pan6.set_cssclass("pal_WF_DtlBg");
                p.pan6.move("0","545","100.00%","162",null,null);

                p.staLabel03_00_00_01_00_00_00.set_taborder("43");
                p.staLabel03_00_00_01_00_00_00.set_text("작업시작일");
                p.staLabel03_00_00_01_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_00_01_00_00_00.move("10","98","100%","46",null,null);

                p.Calendar00.set_taborder("44");
                p.Calendar00.set_dateformat("yyyy-MM-dd ");
                p.Calendar00.move("120","872","145","40",null,null);

                p.Combo01.set_taborder("45");
                p.Combo01.set_text("00");
                p.Combo01.set_value("");
                p.Combo01.set_index("-1");
                p.Combo01.move("276","903","80","40",null,null);

                p.Combo00.set_taborder("46");
                p.Combo00.set_text("00");
                p.Combo00.set_value("");
                p.Combo00.set_index("-1");
                p.Combo00.move("212","862","80","40",null,null);

                p.CheckBox04.set_taborder("47");
                p.CheckBox04.set_text("시간 직접입력");
                p.CheckBox04.set_fittocontents("width");
                p.CheckBox04.set_value("true");
                p.CheckBox04.move("115","968","133","40",null,null);

                p.Panel07.set_taborder("48");
                p.Panel07.set_verticalgap("4");
                p.Panel07.set_horizontalgap("10");
                p.Panel07.set_flexwrap("wrap");
                p.Panel07.set_fittocontents("height");
                p.Panel07.move("20","871","100%","40",null,null);

                p.Static08.set_taborder("49");
                p.Static08.set_text("작업전 48시간 이전에 등록 \r\n하시기 바랍니다.");
                p.Static08.set_fittocontents("height");
                p.Static08.set_cssclass("sta_WF_Des004");
                p.Static08.move("20","892","180","40",null,null);

                p.Edit01_01.set_taborder("50");
                p.Edit01_01.move("146","985","135","40",null,null);

                p.Panel08.set_taborder("51");
                p.Panel08.set_flexcrossaxisalign("center");
                p.Panel08.set_horizontalgap("10");
                p.Panel08.set_verticalgap("4");
                p.Panel08.set_flexwrap("wrap");
                p.Panel08.set_fittocontents("height");
                p.Panel08.move("20","914","100%","40",null,null);

                p.pan_04_00_00_00_00_00.set_taborder("52");
                p.pan_04_00_00_00_00_00.set_type("vertical");
                p.pan_04_00_00_00_00_00.set_fittocontents("height");
                p.pan_04_00_00_00_00_00.set_verticalgap("4");
                p.pan_04_00_00_00_00_00.set_flexgrow("1");
                p.pan_04_00_00_00_00_00.move("20.00","798","305","134",null,null);

                p.staLabel03_00_00_01_00_00_00_00.set_taborder("53");
                p.staLabel03_00_00_01_00_00_00_00.set_text("작업시작일");
                p.staLabel03_00_00_01_00_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_00_01_00_00_00_00.move("10","98","100%","46",null,null);

                p.Calendar00_00.set_taborder("54");
                p.Calendar00_00.set_dateformat("yyyy-MM-dd ");
                p.Calendar00_00.move("120","872","145","40",null,null);

                p.Combo01_00.set_taborder("55");
                p.Combo01_00.set_text("00");
                p.Combo01_00.set_value("");
                p.Combo01_00.set_index("-1");
                p.Combo01_00.move("276","903","80","40",null,null);

                p.Combo00_00.set_taborder("56");
                p.Combo00_00.set_text("00");
                p.Combo00_00.set_value("");
                p.Combo00_00.set_index("-1");
                p.Combo00_00.move("212","862","80","40",null,null);

                p.CheckBox04_00.set_taborder("57");
                p.CheckBox04_00.set_text("시간 직접입력");
                p.CheckBox04_00.set_fittocontents("width");
                p.CheckBox04_00.set_value("true");
                p.CheckBox04_00.move("115","968","133","40",null,null);

                p.Panel07_00.set_taborder("58");
                p.Panel07_00.set_verticalgap("4");
                p.Panel07_00.set_horizontalgap("10");
                p.Panel07_00.set_flexwrap("wrap");
                p.Panel07_00.set_fittocontents("height");
                p.Panel07_00.move("20","871","100%","40",null,null);

                p.Static08_00.set_taborder("59");
                p.Static08_00.set_text("작업신청 가능기간은\r\n최대 7일입니다(휴일포함)");
                p.Static08_00.set_fittocontents("height");
                p.Static08_00.set_cssclass("sta_WF_Des004");
                p.Static08_00.move("20","884","180","40",null,null);

                p.Edit01_01_00.set_taborder("60");
                p.Edit01_01_00.move("146","985","135","40",null,null);

                p.Panel08_00.set_taborder("61");
                p.Panel08_00.set_flexcrossaxisalign("center");
                p.Panel08_00.set_horizontalgap("10");
                p.Panel08_00.set_verticalgap("4");
                p.Panel08_00.set_flexwrap("wrap");
                p.Panel08_00.set_fittocontents("height");
                p.Panel08_00.move("20","914","100%","40",null,null);

                p.pan_04_00_00_00_00_00_00.set_taborder("62");
                p.pan_04_00_00_00_00_00_00.set_type("vertical");
                p.pan_04_00_00_00_00_00_00.set_flexgrow("1");
                p.pan_04_00_00_00_00_00_00.set_fittocontents("height");
                p.pan_04_00_00_00_00_00_00.set_verticalgap("4");
                p.pan_04_00_00_00_00_00_00.move("20.00","798","305","134",null,null);

                p.pan7.set_taborder("63");
                p.pan7.set_horizontalgap("20");
                p.pan7.set_flexcrossaxiswrapalign("start");
                p.pan7.set_flexwrap("wrap");
                p.pan7.set_fittocontents("height");
                p.pan7.set_verticalgap("0");
                p.pan7.set_spacing("0px 20px 10px 20px");
                p.pan7.set_cssclass("pal_WF_DtlBg");
                p.pan7.move("0","798","100%","145",null,null);

                p.staLabel00_00_02_00.set_taborder("64");
                p.staLabel00_00_02_00.set_text("야간작업");
                p.staLabel00_00_02_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_00_02_00.move("10","98","100%","46",null,null);

                p.Radio03.set_taborder("65");
                p.Radio03.set_direction("horizontal");
                p.Radio03.set_fittocontents("none");
                p.Radio03.set_innerdataset(divForm_form_div00_form_div01_form_Radio03_innerdataset);
                p.Radio03.set_codecolumn("codecolumn");
                p.Radio03.set_datacolumn("datacolumn");
                p.Radio03.set_columncount("-1");
                p.Radio03.set_rowcount("-1");
                p.Radio03.set_value("0");
                p.Radio03.set_index("0");
                p.Radio03.move("0","48","100%","40",null,null);

                p.Static00.set_taborder("66");
                p.Static00.set_text("(주간(09~18시 , 야간 18시~09시)");
                p.Static00.set_cssclass("sta_WF_Des004");
                p.Static00.set_fittocontents("height");
                p.Static00.move("234","981","100%","40",null,null);

                p.Panel00_00_00_02_00.set_taborder("67");
                p.Panel00_00_00_02_00.set_type("vertical");
                p.Panel00_00_00_02_00.set_flexgrow("1");
                p.Panel00_00_00_02_00.set_fittocontents("height");
                p.Panel00_00_00_02_00.set_verticalgap("4");
                p.Panel00_00_00_02_00.set_minwidth("");
                p.Panel00_00_00_02_00.move("20.00","852","305","134",null,null);

                p.staLabel03_00_00_00_00_01_00.set_taborder("68");
                p.staLabel03_00_00_00_00_01_00.set_text("위험작업여부");
                p.staLabel03_00_00_00_00_01_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_00_00_00_01_00.move("974.00","151","100%","46",null,null);

                p.Radio05.set_taborder("69");
                p.Radio05.set_innerdataset(divForm_form_div00_form_div01_form_Radio05_innerdataset);
                p.Radio05.set_codecolumn("codecolumn");
                p.Radio05.set_datacolumn("datacolumn");
                p.Radio05.set_fittocontents("none");
                p.Radio05.set_direction("horizontal");
                p.Radio05.set_columncount("-1");
                p.Radio05.set_rowcount("-1");
                p.Radio05.set_value("0");
                p.Radio05.set_index("0");
                p.Radio05.move("595","963","200","40",null,null);

                p.Button02.set_taborder("70");
                p.Button02.set_text("위험작업 여부 확인하기");
                p.Button02.set_fittocontents("width");
                p.Button02.set_cssclass("btn_WF_SmallGray");
                p.Button02.move("864","980","179","34",null,null);

                p.Panel10.set_taborder("71");
                p.Panel10.set_fittocontents("height");
                p.Panel10.set_flexwrap("wrap");
                p.Panel10.move("520","968","100%","40",null,null);

                p.pan06_00_00_01_00.set_taborder("72");
                p.pan06_00_00_01_00.set_type("vertical");
                p.pan06_00_00_01_00.set_flexgrow("1");
                p.pan06_00_00_01_00.set_fittocontents("height");
                p.pan06_00_00_01_00.set_verticalgap("4");
                p.pan06_00_00_01_00.move("730","852","305","90",null,null);

                p.pan8.set_taborder("73");
                p.pan8.set_horizontalgap("20");
                p.pan8.set_flexcrossaxiswrapalign("start");
                p.pan8.set_flexwrap("wrap");
                p.pan8.set_fittocontents("height");
                p.pan8.set_verticalgap("0");
                p.pan8.set_spacing("0px 20px 10px 20px");
                p.pan8.set_cssclass("pal_WF_DtlBg");
                p.pan8.move("0","852","100.00%","145",null,null);

                p.staLabel00_00_01.set_taborder("74");
                p.staLabel00_00_01.set_text("대표작업자 성함");
                p.staLabel00_00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel00_00_01.move("10","98","100%","46",null,null);

                p.Edit00_00_00.set_taborder("75");
                p.Edit00_00_00.move("75","127","100%","40",null,null);

                p.Panel00_00_00_01.set_taborder("76");
                p.Panel00_00_00_01.set_type("vertical");
                p.Panel00_00_00_01.set_flexgrow("1");
                p.Panel00_00_00_01.set_fittocontents("height");
                p.Panel00_00_00_01.set_verticalgap("4");
                p.Panel00_00_00_01.set_minwidth("");
                p.Panel00_00_00_01.move("20.00","84","305","86",null,null);

                p.staLabel03_00_00_00_00_00.set_taborder("77");
                p.staLabel03_00_00_00_00_00.set_text("대표작업자 소속");
                p.staLabel03_00_00_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_00_00_00_00.move("974.00","151","100%","46",null,null);

                p.Edit01_00_00.set_taborder("78");
                p.Edit01_00_00.move("607","140","100%","40",null,null);

                p.pan06_00_00_00.set_taborder("79");
                p.pan06_00_00_00.set_type("vertical");
                p.pan06_00_00_00.set_flexgrow("1");
                p.pan06_00_00_00.set_fittocontents("height");
                p.pan06_00_00_00.set_verticalgap("4");
                p.pan06_00_00_00.move("974.00","151","305","86",null,null);

                p.pan9.set_taborder("80");
                p.pan9.set_horizontalgap("20");
                p.pan9.set_flexcrossaxiswrapalign("start");
                p.pan9.set_flexwrap("wrap");
                p.pan9.set_fittocontents("height");
                p.pan9.set_verticalgap("0");
                p.pan9.set_spacing("0px 20px 10px 20px");
                p.pan9.set_cssclass("pal_WF_DtlBg");
                p.pan9.move("0","60","100.00%","100",null,null);

                p.staLabel00_00_02.set_taborder("81");
                p.staLabel00_00_02.set_text("대표작업자 연락처");
                p.staLabel00_00_02.set_cssclass("sta_WF_Label_E");
                p.staLabel00_00_02.move("10","98","100%","46",null,null);

                p.Edit00_00_01.set_taborder("82");
                p.Edit00_00_01.move("75","127","100%","40",null,null);

                p.Panel00_00_00_02.set_taborder("83");
                p.Panel00_00_00_02.set_type("vertical");
                p.Panel00_00_00_02.set_flexgrow("1");
                p.Panel00_00_00_02.set_fittocontents("height");
                p.Panel00_00_00_02.set_verticalgap("4");
                p.Panel00_00_00_02.set_minwidth("");
                p.Panel00_00_00_02.move("20.00","84","305","86",null,null);

                p.staLabel03_00_00_00_00_01.set_taborder("84");
                p.staLabel03_00_00_00_00_01.set_text("총 작업인원");
                p.staLabel03_00_00_00_00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_00_00_00_01.move("974.00","151","100%","46",null,null);

                p.Edit01_00_01.set_taborder("85");
                p.Edit01_00_01.move("607","140","100%","40",null,null);

                p.pan06_00_00_01.set_taborder("86");
                p.pan06_00_00_01.set_type("vertical");
                p.pan06_00_00_01.set_flexgrow("1");
                p.pan06_00_00_01.set_fittocontents("height");
                p.pan06_00_00_01.set_verticalgap("4");
                p.pan06_00_00_01.move("974.00","151","305","86",null,null);

                p.pan10.set_taborder("87");
                p.pan10.set_horizontalgap("20");
                p.pan10.set_flexcrossaxiswrapalign("start");
                p.pan10.set_flexwrap("wrap");
                p.pan10.set_fittocontents("height");
                p.pan10.set_verticalgap("0");
                p.pan10.set_spacing("0px 20px 10px 20px");
                p.pan10.set_cssclass("pal_WF_DtlBg");
                p.pan10.move("0","60","100.00%","100",null,null);

                p.staLabel00_00_02_00_00.set_taborder("88");
                p.staLabel00_00_02_00_00.set_text("대상 시스템 영향");
                p.staLabel00_00_02_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_00_02_00_00.move("10","98","100%","46",null,null);

                p.Radio03_00.set_taborder("89");
                p.Radio03_00.set_direction("horizontal");
                p.Radio03_00.set_fittocontents("none");
                p.Radio03_00.set_innerdataset(divForm_form_div00_form_div01_form_Radio03_00_innerdataset);
                p.Radio03_00.set_codecolumn("codecolumn");
                p.Radio03_00.set_datacolumn("datacolumn");
                p.Radio03_00.set_columncount("-1");
                p.Radio03_00.set_rowcount("-1");
                p.Radio03_00.set_value("0");
                p.Radio03_00.set_index("0");
                p.Radio03_00.move("0","48","100%","40",null,null);

                p.Panel00_00_00_02_00_00.set_taborder("90");
                p.Panel00_00_00_02_00_00.set_type("vertical");
                p.Panel00_00_00_02_00_00.set_flexgrow("1");
                p.Panel00_00_00_02_00_00.set_fittocontents("height");
                p.Panel00_00_00_02_00_00.set_verticalgap("4");
                p.Panel00_00_00_02_00_00.set_minwidth("");
                p.Panel00_00_00_02_00_00.move("20.00","84","305","86",null,null);

                p.staLabel03_00_00_00_00_01_00_00.set_taborder("91");
                p.staLabel03_00_00_00_00_01_00_00.set_text("대상 시스템 영향도");
                p.staLabel03_00_00_00_00_01_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_00_00_00_01_00_00.move("974.00","151","100%","46",null,null);

                p.Edit01_00_01_00_00.set_taborder("92");
                p.Edit01_00_01_00_00.move("607","140","100%","40",null,null);

                p.pan06_00_00_01_00_00.set_taborder("93");
                p.pan06_00_00_01_00_00.set_type("vertical");
                p.pan06_00_00_01_00_00.set_flexgrow("1");
                p.pan06_00_00_01_00_00.set_fittocontents("height");
                p.pan06_00_00_01_00_00.set_verticalgap("4");
                p.pan06_00_00_01_00_00.move("974.00","151","305","86",null,null);

                p.pan11.set_taborder("94");
                p.pan11.set_horizontalgap("20");
                p.pan11.set_flexcrossaxiswrapalign("start");
                p.pan11.set_flexwrap("wrap");
                p.pan11.set_fittocontents("height");
                p.pan11.set_verticalgap("0");
                p.pan11.set_spacing("0px 20px 10px 20px");
                p.pan11.set_cssclass("pal_WF_DtlBg");
                p.pan11.move("0","60","100.00%","100",null,null);

                p.staLabel00_00_01_00.set_taborder("95");
                p.staLabel00_00_01_00.set_text("타 시스템 영향");
                p.staLabel00_00_01_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_00_01_00.move("10","98","100%","46",null,null);

                p.Radio04.set_taborder("96");
                p.Radio04.set_direction("horizontal");
                p.Radio04.set_fittocontents("none");
                p.Radio04.set_innerdataset(divForm_form_div00_form_div01_form_Radio04_innerdataset);
                p.Radio04.set_codecolumn("codecolumn");
                p.Radio04.set_datacolumn("datacolumn");
                p.Radio04.set_columncount("-1");
                p.Radio04.set_rowcount("-1");
                p.Radio04.set_value("0");
                p.Radio04.set_index("0");
                p.Radio04.move("74","1373","100%","40",null,null);

                p.Panel00_00_00_01_00.set_taborder("97");
                p.Panel00_00_00_01_00.set_type("vertical");
                p.Panel00_00_00_01_00.set_flexgrow("1");
                p.Panel00_00_00_01_00.set_fittocontents("height");
                p.Panel00_00_00_01_00.set_verticalgap("4");
                p.Panel00_00_00_01_00.set_minwidth("");
                p.Panel00_00_00_01_00.move("20.00","84","305","86",null,null);

                p.staLabel03_00_00_00_00_00_00.set_taborder("98");
                p.staLabel03_00_00_00_00_00_00.set_text("타 시스템 영향도");
                p.staLabel03_00_00_00_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_00_00_00_00_00.move("974.00","151","100%","46",null,null);

                p.Edit01_00_00_00.set_taborder("99");
                p.Edit01_00_00_00.move("607","140","100%","40",null,null);

                p.pan06_00_00_00_00.set_taborder("100");
                p.pan06_00_00_00_00.set_type("vertical");
                p.pan06_00_00_00_00.set_flexgrow("1");
                p.pan06_00_00_00_00.set_fittocontents("height");
                p.pan06_00_00_00_00.set_verticalgap("4");
                p.pan06_00_00_00_00.move("974.00","151","305","86",null,null);

                p.pan12.set_taborder("101");
                p.pan12.set_horizontalgap("20");
                p.pan12.set_flexcrossaxiswrapalign("start");
                p.pan12.set_flexwrap("wrap");
                p.pan12.set_fittocontents("height");
                p.pan12.set_verticalgap("0");
                p.pan12.set_spacing("0px 20px 10px 20px");
                p.pan12.set_cssclass("pal_WF_DtlBg");
                p.pan12.move("0","60","100.00%","100",null,null);

                p.staLabel00_00_01_00_00.set_taborder("102");
                p.staLabel00_00_01_00_00.set_text("전산 장비 반출입");
                p.staLabel00_00_01_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_00_01_00_00.move("10","98","100%","46",null,null);

                p.CheckBox07.set_taborder("103");
                p.CheckBox07.set_text("반입");
                p.CheckBox07.set_fittocontents("width");
                p.CheckBox07.set_value("true");
                p.CheckBox07.move("201","1463","74","40",null,null);

                p.CheckBox06.set_taborder("104");
                p.CheckBox06.set_text("반출");
                p.CheckBox06.set_fittocontents("width");
                p.CheckBox06.set_value("true");
                p.CheckBox06.move("205","1453","74","40",null,null);

                p.CheckBox05.set_taborder("105");
                p.CheckBox05.set_text("해당없음");
                p.CheckBox05.set_fittocontents("width");
                p.CheckBox05.set_value("true");
                p.CheckBox05.move("115","1445","102","40",null,null);

                p.Panel11.set_taborder("106");
                p.Panel11.set_flexwrap("wrap");
                p.Panel11.set_verticalgap("4");
                p.Panel11.set_fittocontents("height");
                p.Panel11.move("20","1438","100%","40",null,null);

                p.Panel00_00_00_01_00_00.set_taborder("107");
                p.Panel00_00_00_01_00_00.set_type("vertical");
                p.Panel00_00_00_01_00_00.set_flexgrow("1");
                p.Panel00_00_00_01_00_00.set_fittocontents("height");
                p.Panel00_00_00_01_00_00.set_verticalgap("4");
                p.Panel00_00_00_01_00_00.set_minwidth("");
                p.Panel00_00_00_01_00_00.move("20.00","84","100%","90",null,null);

                p.pan13.set_taborder("108");
                p.pan13.set_horizontalgap("20");
                p.pan13.set_flexcrossaxiswrapalign("start");
                p.pan13.set_flexwrap("wrap");
                p.pan13.set_fittocontents("height");
                p.pan13.set_verticalgap("4");
                p.pan13.set_spacing("0px 20px 10px 20px");
                p.pan13.set_cssclass("pal_WF_DtlBg");
                p.pan13.move("0","1372","100.00%","101",null,null);

                p.staLabel00_00_01_00_00_00.set_taborder("109");
                p.staLabel00_00_01_00_00_00.set_text("반입품목");
                p.staLabel00_00_01_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_00_01_00_00_00.move("10","98","100%","46",null,null);

                p.Edit04.set_taborder("110");
                p.Edit04.move("100","1522","100%","40",null,null);

                p.Static09.set_taborder("111");
                p.Static09.set_text("전산장비(서버, 네트워크 장비 등)품목만 기재(공구, 휴대용 저장매체 등 제외)");
                p.Static09.set_cssclass("sta_WF_Des");
                p.Static09.set_fittocontents("height");
                p.Static09.move("140","1480","100%","40",null,null);

                p.Panel00_00_00_01_00_00_00.set_taborder("112");
                p.Panel00_00_00_01_00_00_00.set_type("vertical");
                p.Panel00_00_00_01_00_00_00.set_flexgrow("1");
                p.Panel00_00_00_01_00_00_00.set_fittocontents("height");
                p.Panel00_00_00_01_00_00_00.set_verticalgap("4");
                p.Panel00_00_00_01_00_00_00.set_minwidth("");
                p.Panel00_00_00_01_00_00_00.move("20.00","84","96.08%","119.99799999999999",null,null);

                p.pan14.set_taborder("113");
                p.pan14.set_horizontalgap("20");
                p.pan14.set_flexcrossaxiswrapalign("start");
                p.pan14.set_flexwrap("wrap");
                p.pan14.set_fittocontents("height");
                p.pan14.set_verticalgap("0");
                p.pan14.set_spacing("0px 20px 10px 20px");
                p.pan14.set_cssclass("pal_WF_DtlBg");
                p.pan14.move("0","60","100.00%","130.997",null,null);

                p.staLabel00_00_01_00_00_00_00.set_taborder("114");
                p.staLabel00_00_01_00_00_00_00.set_text("반출품목");
                p.staLabel00_00_01_00_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_00_01_00_00_00_00.move("10","98","100%","46",null,null);

                p.Edit04_00.set_taborder("115");
                p.Edit04_00.move("100","1522","100%","40",null,null);

                p.Static10.set_taborder("116");
                p.Static10.set_text("전산장비(서버, 네트워크 장비 등)품목만 기재(공구, 휴대용 저장매체 등 제외)");
                p.Static10.set_fittocontents("height");
                p.Static10.set_cssclass("sta_WF_Des");
                p.Static10.move("100","1593","100%","40",null,null);

                p.Panel00_00_00_01_00_00_00_00.set_taborder("117");
                p.Panel00_00_00_01_00_00_00_00.set_type("vertical");
                p.Panel00_00_00_01_00_00_00_00.set_flexgrow("1");
                p.Panel00_00_00_01_00_00_00_00.set_fittocontents("height");
                p.Panel00_00_00_01_00_00_00_00.set_verticalgap("4");
                p.Panel00_00_00_01_00_00_00_00.set_minwidth("");
                p.Panel00_00_00_01_00_00_00_00.move("20.00","84","100%","120",null,null);

                p.pan15.set_taborder("118");
                p.pan15.set_horizontalgap("20");
                p.pan15.set_flexcrossaxiswrapalign("start");
                p.pan15.set_flexwrap("wrap");
                p.pan15.set_fittocontents("height");
                p.pan15.set_verticalgap("0");
                p.pan15.set_spacing("0px 20px 10px 20px");
                p.pan15.set_cssclass("pal_WF_DtlBg");
                p.pan15.move("0","60","100.00%","131",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.div00.form.div01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.div00.form.div01.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.div00.form.div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Radio01.set_fittocontents("none");
                p.Radio01.move("20","496","100%","60",null,null);

                p.pan_04_00_00_00_00.set_fittocontents("height");

                p.Static04.move("231","365","100%","40",null,null);

                p.Static05.move("63","420","100%","40",null,null);

                p.Static06.move("70","440","100%","40",null,null);

                p.Panel05.set_flexwrap("wrap");
                p.Panel05.set_fittocontents("height");
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.div00.form.div01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.div00.form.div00_00.form
            obj = new Layout("default","",0,0,this.divForm.form.div00.form.div00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.set_taborder("1");
                p.Panel00.set_type("vertical");
                p.Panel00.set_verticalgap("10");
                p.Panel00.move("20","0","100%","210",null,null);

                p.btnGrdAdd.set_taborder("2");
                p.btnGrdAdd.set_text("추가");
                p.btnGrdAdd.set_cssclass("btn_WF_Small");
                p.btnGrdAdd.set_visible("true");
                p.btnGrdAdd.set_fittocontents("width");
                p.btnGrdAdd.move("2598","2650","47","34",null,null);

                p.btnGrdDel.set_taborder("3");
                p.btnGrdDel.set_text("삭제");
                p.btnGrdDel.set_cssclass("btn_WF_SmallRed");
                p.btnGrdDel.set_visible("true");
                p.btnGrdDel.set_fittocontents("width");
                p.btnGrdDel.move("2656","2650","45","34",null,null);

                p.btnGrdRegi.set_taborder("4");
                p.btnGrdRegi.set_text("등록");
                p.btnGrdRegi.set_cssclass("btn_WF_SmallBlack");
                p.btnGrdRegi.set_visible("false");
                p.btnGrdRegi.set_fittocontents("width");
                p.btnGrdRegi.move("2710","2650","45","34",null,null);

                p.btnGrdDw.set_taborder("5");
                p.btnGrdDw.set_text("다운로드(엑셀)");
                p.btnGrdDw.set_cssclass("btn_WF_GrdDw");
                p.btnGrdDw.set_visible("false");
                p.btnGrdDw.set_fittocontents("width");
                p.btnGrdDw.move("2766","2650","124","34",null,null);

                p.panGrdBtn.set_taborder("6");
                p.panGrdBtn.set_flexcrossaxisalign("start");
                p.panGrdBtn.set_flexcrossaxiswrapalign("start");
                p.panGrdBtn.set_flexmainaxisalign("end");
                p.panGrdBtn.set_horizontalgap("10");
                p.panGrdBtn.set_spacing("10px 0px 0px");
                p.panGrdBtn.set_fittocontents("height");
                p.panGrdBtn.move("0","2650","100%","44",null,null);

                p.Panel02.set_taborder("1");
                p.Panel02.set_fittocontents("height");
                p.Panel02.set_spacing("0px 20px 10px 20px");
                p.Panel02.set_cssclass("pal_WF_DtlBg");
                p.Panel02.move("0","0","100.00%","221",null,null);

                p.Grid00.set_taborder("7");
                p.Grid00.set_binddataset("ds00");
                p.Grid00.set_autofittype("col");
                p.Grid00.move("714","66","100%","156",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.div00.form.div00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.div00.form.div00_00.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.div00.form.div00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Grid00.set_autofittype("none");
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.div00.form.div00_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.div00.form.div02.form
            obj = new Layout("default","",0,0,this.divForm.form.div00.form.div02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.set_taborder("1");
                p.Panel00.move("20","0","100%","211",null,null);

                p.Panel02.set_taborder("1");
                p.Panel02.set_fittocontents("height");
                p.Panel02.set_spacing("10px 20px 10px 20px");
                p.Panel02.set_cssclass("pal_WF_DtlBg");
                p.Panel02.move("0","0","100.00%","232",null,null);

                p.Grid00.set_taborder("2");
                p.Grid00.set_binddataset("ds00");
                p.Grid00.set_autofittype("col");
                p.Grid00.move("0","20","100.00%","211",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.div00.form.div02.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.div00.form.div02.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.div00.form.div02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Grid00.set_autofittype("none");
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.div00.form.div02.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.div00.form.div03.form
            obj = new Layout("default","",0,0,this.divForm.form.div00.form.div03.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel00_02.set_taborder("0");
                p.staLabel00_02.set_text("작업신고서");
                p.staLabel00_02.set_cssclass("sta_WF_Label_E");
                p.staLabel00_02.set_flexgrow("1");
                p.staLabel00_02.move("0","44","305","46",null,null);

                p.Button00.set_taborder("1");
                p.Button00.set_text("다운로드");
                p.Button00.set_cssclass("btn_WF_GrdDw");
                p.Button00.set_fittocontents("width");
                p.Button00.move("813","76","90","40",null,null);

                p.btn_file_1.set_taborder("2");
                p.btn_file_1.set_text("파일선택");
                p.btn_file_1.set_cssclass("btn_WF_FileUp");
                p.btn_file_1.move("124","58","116","40",null,null);

                p.panBtnFile.set_taborder("3");
                p.panBtnFile.set_flexgrow("0");
                p.panBtnFile.set_flexcrossaxisalign("start");
                p.panBtnFile.set_flexmainaxisalign("end");
                p.panBtnFile.set_horizontalgap("10");
                p.panBtnFile.move("433","58","305","46",null,null);

                p.panTitle.set_taborder("4");
                p.panTitle.set_cssclass("pan_WF_FileTitle");
                p.panTitle.move("0","124","100%","46",null,null);

                p.Static00.set_taborder("5");
                p.Static00.set_text("파일수 : ");
                p.Static00.set_fittocontents("width");
                p.Static00.move("88","123","48","46",null,null);

                p.Static01.set_taborder("6");
                p.Static01.set_text("0");
                p.Static01.set_fittocontents("width");
                p.Static01.move("165","143","9","46",null,null);

                p.Static02.set_taborder("7");
                p.Static02.set_text("개");
                p.Static02.set_fittocontents("width");
                p.Static02.move("293","131","13","46",null,null);

                p.panFileNum.set_taborder("8");
                p.panFileNum.set_flexgrow("0");
                p.panFileNum.set_horizontalgap("4");
                p.panFileNum.set_fittocontents("width");
                p.panFileNum.move("20","190","78","46",null,null);

                p.Panel00.set_taborder("9");
                p.Panel00.set_visible("false");
                p.Panel00.set_flexmainaxisalign("spacebetween");
                p.Panel00.set_fittocontents("height");
                p.Panel00.move("20","51","100%","46",null,null);

                p.Grid00.set_taborder("10");
                p.Grid00.set_binddataset("dsFile1");
                p.Grid00.set_autofittype("col");
                p.Grid00.set_cssclass("grd_WF_FileAdd");
                p.Grid00.move("20.00","114","100%","40",null,null);

                p.Static03.set_taborder("11");
                p.Static03.set_text("시설물 공사를 포함한 작업일 경우 입주자서비스포털(TSP)내 최종 협의완료된 “  “작업신고서＂를 첨부하시길 바랍니다.");
                p.Static03.set_fittocontents("height");
                p.Static03.set_cssclass("sta_WF_Des");
                p.Static03.move("62","198","100%","40",null,null);

                p.panFile.set_taborder("12");
                p.panFile.set_fittocontents("height");
                p.panFile.set_spacing("10px 20px 10px 20px");
                p.panFile.set_flexwrap("wrap");
                p.panFile.set_cssclass("pal_WF_DtlBg");
                p.panFile.set_verticalgap("4");
                p.panFile.move("0","42","100.00%","205",null,null);

                p.staLabel00_02_00.set_taborder("13");
                p.staLabel00_02_00.set_text("전산장비반출입 신청서");
                p.staLabel00_02_00.set_cssclass("sta_WF_Label");
                p.staLabel00_02_00.set_flexgrow("1");
                p.staLabel00_02_00.move("0","44","305","46",null,null);

                p.Button00_00.set_taborder("14");
                p.Button00_00.set_text("다운로드");
                p.Button00_00.set_cssclass("btn_WF_GrdDw");
                p.Button00_00.set_fittocontents("width");
                p.Button00_00.move("813","76","90","40",null,null);

                p.btn_file_1_00.set_taborder("15");
                p.btn_file_1_00.set_text("파일선택");
                p.btn_file_1_00.set_cssclass("btn_WF_FileUp");
                p.btn_file_1_00.move("124","58","116","40",null,null);

                p.panBtnFile00.set_taborder("16");
                p.panBtnFile00.set_flexgrow("0");
                p.panBtnFile00.set_flexcrossaxisalign("start");
                p.panBtnFile00.set_flexmainaxisalign("end");
                p.panBtnFile00.set_horizontalgap("10");
                p.panBtnFile00.move("433","58","305","46",null,null);

                p.panTitle00.set_taborder("17");
                p.panTitle00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00.move("0","124","100%","46",null,null);

                p.Static00_00.set_taborder("18");
                p.Static00_00.set_text("파일수 : ");
                p.Static00_00.set_fittocontents("width");
                p.Static00_00.move("88","123","48","46",null,null);

                p.Static01_00.set_taborder("19");
                p.Static01_00.set_text("0");
                p.Static01_00.set_fittocontents("width");
                p.Static01_00.move("165","143","9","46",null,null);

                p.Static02_00.set_taborder("20");
                p.Static02_00.set_text("개");
                p.Static02_00.set_fittocontents("width");
                p.Static02_00.move("293","131","13","46",null,null);

                p.panFileNum00.set_taborder("21");
                p.panFileNum00.set_flexgrow("0");
                p.panFileNum00.set_horizontalgap("4");
                p.panFileNum00.set_fittocontents("width");
                p.panFileNum00.move("20","190","78","46",null,null);

                p.Panel00_00.set_taborder("22");
                p.Panel00_00.set_visible("false");
                p.Panel00_00.set_flexmainaxisalign("spacebetween");
                p.Panel00_00.set_fittocontents("height");
                p.Panel00_00.move("20","51","100%","46",null,null);

                p.Grid00_00.set_taborder("23");
                p.Grid00_00.set_binddataset("dsFile1");
                p.Grid00_00.set_autofittype("col");
                p.Grid00_00.set_cssclass("grd_WF_FileAdd");
                p.Grid00_00.move("20.00","114","100%","40",null,null);

                p.Static04.set_taborder("24");
                p.Static04.set_text("전산실 내부로 장비(서버, 네트워크 장비 등) 가 반입.반출될 경우");
                p.Static04.set_fittocontents("height");
                p.Static04.set_cssclass("sta_WF_Des");
                p.Static04.move("33","348","100%","40",null,null);

                p.panFile00.set_taborder("25");
                p.panFile00.set_fittocontents("height");
                p.panFile00.set_spacing("10px 20px 10px 20px");
                p.panFile00.set_flexwrap("wrap");
                p.panFile00.set_cssclass("pal_WF_DtlBg");
                p.panFile00.set_verticalgap("4");
                p.panFile00.move("0","42","100.00%","205",null,null);

                p.staLabel00_02_01.set_taborder("26");
                p.staLabel00_02_01.set_text("제원조사서");
                p.staLabel00_02_01.set_cssclass("sta_WF_Label");
                p.staLabel00_02_01.set_flexgrow("1");
                p.staLabel00_02_01.move("0","44","305","46",null,null);

                p.Button00_01.set_taborder("27");
                p.Button00_01.set_text("다운로드");
                p.Button00_01.set_cssclass("btn_WF_GrdDw");
                p.Button00_01.set_fittocontents("width");
                p.Button00_01.move("813","76","90","40",null,null);

                p.btn_file_1_01.set_taborder("28");
                p.btn_file_1_01.set_text("파일선택");
                p.btn_file_1_01.set_cssclass("btn_WF_FileUp");
                p.btn_file_1_01.move("124","58","116","40",null,null);

                p.panBtnFile01.set_taborder("29");
                p.panBtnFile01.set_flexgrow("0");
                p.panBtnFile01.set_flexcrossaxisalign("start");
                p.panBtnFile01.set_flexmainaxisalign("end");
                p.panBtnFile01.set_horizontalgap("10");
                p.panBtnFile01.move("433","58","305","46",null,null);

                p.panTitle01.set_taborder("30");
                p.panTitle01.set_cssclass("pan_WF_FileTitle");
                p.panTitle01.move("0","124","100%","46",null,null);

                p.Static00_01.set_taborder("31");
                p.Static00_01.set_text("파일수 : ");
                p.Static00_01.set_fittocontents("width");
                p.Static00_01.move("88","123","48","46",null,null);

                p.Static01_01.set_taborder("32");
                p.Static01_01.set_text("0");
                p.Static01_01.set_fittocontents("width");
                p.Static01_01.move("165","143","9","46",null,null);

                p.Static02_01.set_taborder("33");
                p.Static02_01.set_text("개");
                p.Static02_01.set_fittocontents("width");
                p.Static02_01.move("293","131","13","46",null,null);

                p.panFileNum01.set_taborder("34");
                p.panFileNum01.set_flexgrow("0");
                p.panFileNum01.set_horizontalgap("4");
                p.panFileNum01.set_fittocontents("width");
                p.panFileNum01.move("20","190","78","46",null,null);

                p.Panel00_01.set_taborder("35");
                p.Panel00_01.set_visible("false");
                p.Panel00_01.set_flexmainaxisalign("spacebetween");
                p.Panel00_01.set_fittocontents("height");
                p.Panel00_01.move("20","51","100%","46",null,null);

                p.Grid00_01.set_taborder("36");
                p.Grid00_01.set_binddataset("dsFile1");
                p.Grid00_01.set_autofittype("col");
                p.Grid00_01.set_cssclass("grd_WF_FileAdd");
                p.Grid00_01.move("20.00","114","100%","40",null,null);

                p.Static05.set_taborder("37");
                p.Static05.set_text("신규 시스템이 반입(장비의 설치 및 변경) 되는 경우");
                p.Static05.set_fittocontents("height");
                p.Static05.set_cssclass("sta_WF_Des");
                p.Static05.move("71","518","100%","40",null,null);

                p.panFile01.set_taborder("38");
                p.panFile01.set_fittocontents("height");
                p.panFile01.set_spacing("10px 20px 10px 20px");
                p.panFile01.set_flexwrap("wrap");
                p.panFile01.set_cssclass("pal_WF_DtlBg");
                p.panFile01.set_verticalgap("4");
                p.panFile01.move("0","42","100.00%","205",null,null);

                p.staLabel00_02_02.set_taborder("39");
                p.staLabel00_02_02.set_text("시스템설치 계획서");
                p.staLabel00_02_02.set_cssclass("sta_WF_Label");
                p.staLabel00_02_02.set_flexgrow("1");
                p.staLabel00_02_02.move("0","44","305","46",null,null);

                p.Button00_02.set_taborder("40");
                p.Button00_02.set_text("다운로드");
                p.Button00_02.set_cssclass("btn_WF_GrdDw");
                p.Button00_02.set_fittocontents("width");
                p.Button00_02.move("813","76","90","40",null,null);

                p.btn_file_1_02.set_taborder("41");
                p.btn_file_1_02.set_text("파일선택");
                p.btn_file_1_02.set_cssclass("btn_WF_FileUp");
                p.btn_file_1_02.move("124","58","116","40",null,null);

                p.panBtnFile02.set_taborder("42");
                p.panBtnFile02.set_flexgrow("0");
                p.panBtnFile02.set_flexcrossaxisalign("start");
                p.panBtnFile02.set_flexmainaxisalign("end");
                p.panBtnFile02.set_horizontalgap("10");
                p.panBtnFile02.move("433","58","305","46",null,null);

                p.panTitle02.set_taborder("43");
                p.panTitle02.set_cssclass("pan_WF_FileTitle");
                p.panTitle02.move("0","124","100%","46",null,null);

                p.Static00_02.set_taborder("44");
                p.Static00_02.set_text("파일수 : ");
                p.Static00_02.set_fittocontents("width");
                p.Static00_02.move("88","123","48","46",null,null);

                p.Static01_02.set_taborder("45");
                p.Static01_02.set_text("0");
                p.Static01_02.set_fittocontents("width");
                p.Static01_02.move("165","143","9","46",null,null);

                p.Static02_02.set_taborder("46");
                p.Static02_02.set_text("개");
                p.Static02_02.set_fittocontents("width");
                p.Static02_02.move("293","131","13","46",null,null);

                p.panFileNum02.set_taborder("47");
                p.panFileNum02.set_flexgrow("0");
                p.panFileNum02.set_horizontalgap("4");
                p.panFileNum02.set_fittocontents("width");
                p.panFileNum02.move("20","190","78","46",null,null);

                p.Panel00_02.set_taborder("48");
                p.Panel00_02.set_visible("false");
                p.Panel00_02.set_flexmainaxisalign("spacebetween");
                p.Panel00_02.set_fittocontents("height");
                p.Panel00_02.move("20","51","100%","46",null,null);

                p.Grid00_02.set_taborder("49");
                p.Grid00_02.set_binddataset("dsFile1");
                p.Grid00_02.set_autofittype("col");
                p.Grid00_02.set_cssclass("grd_WF_FileAdd");
                p.Grid00_02.move("20.00","114","100%","40",null,null);

                p.Static06.set_taborder("50");
                p.Static06.set_text("신규 시스템을 전산실에 설치하는 경우(최초 1회 필수)");
                p.Static06.set_cssclass("sta_WF_Des");
                p.Static06.set_fittocontents("height");
                p.Static06.move("78","675","100%","40",null,null);

                p.panFile02.set_taborder("51");
                p.panFile02.set_fittocontents("height");
                p.panFile02.set_spacing("10px 20px 10px 20px");
                p.panFile02.set_flexwrap("wrap");
                p.panFile02.set_cssclass("pal_WF_DtlBg");
                p.panFile02.set_verticalgap("4");
                p.panFile02.move("0","42","100.00%","205",null,null);

                p.staLabel00_02_03.set_taborder("52");
                p.staLabel00_02_03.set_text("세부작업내역서");
                p.staLabel00_02_03.set_cssclass("sta_WF_Label");
                p.staLabel00_02_03.set_flexgrow("1");
                p.staLabel00_02_03.move("0","44","305","46",null,null);

                p.Button00_03.set_taborder("53");
                p.Button00_03.set_text("다운로드");
                p.Button00_03.set_cssclass("btn_WF_GrdDw");
                p.Button00_03.set_fittocontents("width");
                p.Button00_03.move("813","76","90","40",null,null);

                p.btn_file_1_03.set_taborder("54");
                p.btn_file_1_03.set_text("파일선택");
                p.btn_file_1_03.set_cssclass("btn_WF_FileUp");
                p.btn_file_1_03.move("124","58","116","40",null,null);

                p.panBtnFile03.set_taborder("55");
                p.panBtnFile03.set_flexgrow("0");
                p.panBtnFile03.set_flexcrossaxisalign("start");
                p.panBtnFile03.set_flexmainaxisalign("end");
                p.panBtnFile03.set_horizontalgap("10");
                p.panBtnFile03.move("433","58","305","46",null,null);

                p.panTitle03.set_taborder("56");
                p.panTitle03.set_cssclass("pan_WF_FileTitle");
                p.panTitle03.move("0","124","100%","46",null,null);

                p.Static00_03.set_taborder("57");
                p.Static00_03.set_text("파일수 : ");
                p.Static00_03.set_fittocontents("width");
                p.Static00_03.move("88","123","48","46",null,null);

                p.Static01_03.set_taborder("58");
                p.Static01_03.set_text("0");
                p.Static01_03.set_fittocontents("width");
                p.Static01_03.move("165","143","9","46",null,null);

                p.Static02_03.set_taborder("59");
                p.Static02_03.set_text("개");
                p.Static02_03.set_fittocontents("width");
                p.Static02_03.move("293","131","13","46",null,null);

                p.panFileNum03.set_taborder("60");
                p.panFileNum03.set_flexgrow("0");
                p.panFileNum03.set_horizontalgap("4");
                p.panFileNum03.set_fittocontents("width");
                p.panFileNum03.move("20","190","78","46",null,null);

                p.Panel00_03.set_taborder("61");
                p.Panel00_03.set_visible("false");
                p.Panel00_03.set_flexmainaxisalign("spacebetween");
                p.Panel00_03.set_fittocontents("height");
                p.Panel00_03.move("20","51","100%","46",null,null);

                p.Grid00_03.set_taborder("62");
                p.Grid00_03.set_binddataset("dsFile1");
                p.Grid00_03.set_autofittype("col");
                p.Grid00_03.set_cssclass("grd_WF_FileAdd");
                p.Grid00_03.move("20.00","114","100%","40",null,null);

                p.Static07.set_taborder("63");
                p.Static07.set_text("작업으로 인해 해당 시스템 및 타 시스템에 영향이 있을 경우");
                p.Static07.set_cssclass("sta_WF_Des");
                p.Static07.set_fittocontents("height");
                p.Static07.move("153","841","100%","40",null,null);

                p.panFile03.set_taborder("64");
                p.panFile03.set_fittocontents("height");
                p.panFile03.set_spacing("10px 20px 10px 20px");
                p.panFile03.set_flexwrap("wrap");
                p.panFile03.set_cssclass("pal_WF_DtlBg");
                p.panFile03.set_verticalgap("4");
                p.panFile03.move("0","42","100.00%","205",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.div00.form.div03.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.div00.form.div03.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.div00.form.div03.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.div00.form.div03.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.div00.form.div04.form
            obj = new Layout("default","",0,0,this.divForm.form.div00.form.div04.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel03_00.set_taborder("0");
                p.staLabel03_00.set_text("작업감독자 검토결과");
                p.staLabel03_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00.move("10","98","100%","46",null,null);

                p.TextArea01.set_taborder("1");
                p.TextArea01.set_displaynulltext("내용 입력");
                p.TextArea01.move("53","302","100%","100",null,null);

                p.Panel02_00.set_taborder("2");
                p.Panel02_00.set_type("vertical");
                p.Panel02_00.set_flexgrow("1");
                p.Panel02_00.set_fittocontents("height");
                p.Panel02_00.set_verticalgap("8");
                p.Panel02_00.move("20.00","0","980","154",null,null);

                p.pan1.set_taborder("3");
                p.pan1.set_horizontalgap("20");
                p.pan1.set_flexcrossaxiswrapalign("start");
                p.pan1.set_flexwrap("wrap");
                p.pan1.set_fittocontents("height");
                p.pan1.set_verticalgap("0");
                p.pan1.set_spacing("0px 20px 10px 20px");
                p.pan1.set_cssclass("pal_WF_DtlBg");
                p.pan1.move("0","267","100.00%","165",null,null);

                p.staLabel03_00_00.set_taborder("4");
                p.staLabel03_00_00.set_text("전산실감독자 검토결과");
                p.staLabel03_00_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00_00.move("10","98","100%","46",null,null);

                p.TextArea01_00.set_taborder("5");
                p.TextArea01_00.set_displaynulltext("내용 입력");
                p.TextArea01_00.move("53","302","100%","100",null,null);

                p.Panel02_00_00.set_taborder("6");
                p.Panel02_00_00.set_type("vertical");
                p.Panel02_00_00.set_flexgrow("1");
                p.Panel02_00_00.set_fittocontents("height");
                p.Panel02_00_00.set_verticalgap("8");
                p.Panel02_00_00.move("20.00","0","980","154",null,null);

                p.pan2.set_taborder("7");
                p.pan2.set_horizontalgap("20");
                p.pan2.set_flexcrossaxiswrapalign("start");
                p.pan2.set_flexwrap("wrap");
                p.pan2.set_fittocontents("height");
                p.pan2.set_verticalgap("0");
                p.pan2.set_spacing("0px 20px 10px 20px");
                p.pan2.set_cssclass("pal_WF_DtlBg");
                p.pan2.move("0","267","100.00%","165",null,null);

                p.staLabel03_00_01.set_taborder("8");
                p.staLabel03_00_01.set_text("운영자회사담당자 검토결과");
                p.staLabel03_00_01.set_cssclass("sta_WF_Label");
                p.staLabel03_00_01.move("10","98","100%","46",null,null);

                p.TextArea01_01.set_taborder("9");
                p.TextArea01_01.set_displaynulltext("내용 입력");
                p.TextArea01_01.move("53","302","100%","100",null,null);

                p.Grid00.set_taborder("10");
                p.Grid00.set_binddataset("ds00");
                p.Grid00.set_autofittype("col");
                p.Grid00.move("20.00","371","100.00%","166",null,null);

                p.Static00.set_taborder("11");
                p.Static00.set_text("My Page -> 검토의견함 메뉴에서 내용 등록/수정/삭제 가능합니다.");
                p.Static00.set_cssclass("sta_WF_Des");
                p.Static00.set_fittocontents("height");
                p.Static00.move("583","508","100%","40",null,null);

                p.Panel02_00_01.set_taborder("12");
                p.Panel02_00_01.set_type("vertical");
                p.Panel02_00_01.set_flexgrow("1");
                p.Panel02_00_01.set_fittocontents("height");
                p.Panel02_00_01.set_verticalgap("8");
                p.Panel02_00_01.move("20.00","0","980","376",null,null);

                p.pan3.set_taborder("13");
                p.pan3.set_horizontalgap("20");
                p.pan3.set_flexcrossaxiswrapalign("start");
                p.pan3.set_flexwrap("wrap");
                p.pan3.set_fittocontents("height");
                p.pan3.set_verticalgap("0");
                p.pan3.set_spacing("0px 20px 10px 20px");
                p.pan3.set_cssclass("pal_WF_DtlBg");
                p.pan3.move("0","267","100.00%","387",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.div00.form.div04.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.div00.form.div04.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.div00.form.div04.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel02_00_00.move("20.00","0","100%","154",null,null);

                p.Panel02_00_01.move("20.00","0","100%","376",null,null);

                p.Panel02_00.move("20.00","0","100%","154",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.div00.form.div04.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.div00.form.div05.form
            obj = new Layout("default","",0,0,this.divForm.form.div00.form.div05.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel03_00.set_taborder("0");
                p.staLabel03_00.set_text("신청자전달사항");
                p.staLabel03_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00.move("395","250","100%","46",null,null);

                p.TextArea01.set_taborder("1");
                p.TextArea01.set_displaynulltext("내용 입력");
                p.TextArea01.move("395","302","100%","100",null,null);

                p.pan02.set_taborder("3");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.move("0","267","100.00%","165",null,null);

                p.Panel02_00.set_taborder("2");
                p.Panel02_00.set_type("vertical");
                p.Panel02_00.set_flexgrow("1");
                p.Panel02_00.set_fittocontents("height");
                p.Panel02_00.set_verticalgap("8");
                p.Panel02_00.move("395","250","980","154",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.div00.form.div05.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.div00.form.div05.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.div00.form.div05.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.div00.form.div05.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.div00.form.div00_01.form
            obj = new Layout("default","",0,0,this.divForm.form.div00.form.div00_01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel02.set_taborder("5");
                p.Panel02.set_spacing("10px 20px 0px 20px");
                p.Panel02.move("445","147","100.00%","110",null,null);

                p.staLabel00.set_taborder("0");
                p.staLabel00.set_text("개인정보 수집(필수) 동의여부");
                p.staLabel00.set_cssclass("sta_WF_Label_E");
                p.staLabel00.move("465","257","100%","46",null,null);

                p.Radio01.set_taborder("1");
                p.Radio01.set_fittocontents("none");
                p.Radio01.set_innerdataset(divForm_form_div00_form_div00_01_form_Radio01_innerdataset);
                p.Radio01.set_codecolumn("codecolumn");
                p.Radio01.set_datacolumn("datacolumn");
                p.Radio01.set_direction("horizontal");
                p.Radio01.set_columncount("-1");
                p.Radio01.set_rowcount("-1");
                p.Radio01.set_value("0");
                p.Radio01.set_index("0");
                p.Radio01.move("465","302","100%","40",null,null);

                p.Panel00_00.set_taborder("2");
                p.Panel00_00.set_type("vertical");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.set_minwidth("");
                p.Panel00_00.move("465","257","305","86",null,null);

                p.pan00.set_taborder("3");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("0px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.move("445","257","100.00%","96",null,null);

                p.TextArea00.set_taborder("4");
                p.TextArea00.set_value("1. 개인정보의 수집 . 이용 목적\n보안구역위해물품 사용신청 시 작성건의 접수와 처리를 위해 개인정보를 수집목적에 필요한 최소한의 범위 내에서 수집하고 있습니다.\n\n2. 수집하려는 개인정보의 항목\n필수항목 : 주관사 회사명, 주관사 부서명 , 주관사관리책임자(정) , 주관사 휴대전화번호(정) , 주관사관리책임자(부) , 주관사 휴대전화번호(부) , 주관사회사번호,\n실제사용자 회사명, 실제사용자 관리책임자(정) , 실제사용자 휴대전화번호(정) , 실제사용자 관리책임자(부) , 실제사용자 휴대전화번호(부) , 실제사용자 회사번호\n\n3. 개인정보의 보유 및 이용 기간\n계약종료 후 3년, 회원탈퇴 시 까지\n\n4. 동의를 거부할 권리와 거부에 따른 불이익 내용\n귀하는 개인정보 수집에 거부할 권리가 있으며, 필수항목 수집을 거부할 경우 보안구역위해물품 승인요청서 작성건의 신청을 할 수 없습니다.");
                p.TextArea00.set_readonly("true");
                p.TextArea00.move("465","157","100%","100",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.div00.form.div00_01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.div00.form.div00_01.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.div00.form.div00_01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel02.set_fittocontents("height");
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.div00.form.div00_01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.div00.form.div00_02.form
            obj = new Layout("default","",0,0,this.divForm.form.div00.form.div00_02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel02.set_taborder("5");
                p.Panel02.set_spacing("10px 20px 0px 20px");
                p.Panel02.move("0","47","100.00%","110",null,null);

                p.staLabel00.set_taborder("0");
                p.staLabel00.set_text("타부서 작업통지 확인여부");
                p.staLabel00.set_cssclass("sta_WF_Label_E");
                p.staLabel00.move("490","402","100%","46",null,null);

                p.Radio01.set_taborder("1");
                p.Radio01.set_fittocontents("none");
                p.Radio01.set_innerdataset(divForm_form_div00_form_div00_02_form_Radio01_innerdataset);
                p.Radio01.set_codecolumn("codecolumn");
                p.Radio01.set_datacolumn("datacolumn");
                p.Radio01.set_direction("horizontal");
                p.Radio01.set_columncount("-1");
                p.Radio01.set_rowcount("-1");
                p.Radio01.set_value("0");
                p.Radio01.set_index("0");
                p.Radio01.move("490","447","100%","40",null,null);

                p.pan00.set_taborder("3");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("0px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.move("0","60","100.00%","96",null,null);

                p.Panel00_00.set_taborder("2");
                p.Panel00_00.set_type("vertical");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.set_minwidth("");
                p.Panel00_00.move("490","402","305","86",null,null);

                p.TextArea00.set_taborder("4");
                p.TextArea00.set_value("인천국제공항공사 전산실 내 작업을 진행하실 경우 대상 시스템 포함 타 시스템에 미칠 영향을 고려하시고 작업에 임해주시길 바랍니다.\n대상 시스템 작업시, 타 시스템에 영향을 미칠 경우 해당 시스템을 관리 및 이용하고 있는부서에 사전 작업을 통지하셔야 합니다.\n타시스템 담당 부서 및 이용자가 작업 통보를 인지하지 못한 것이 적발될 경우 작업 중단 . 시스템 원상복구 및 퇴거 조치 되시며, 추후\n전산실 작업 허가에 불이익을 받으실수 있습니다.");
                p.TextArea00.set_readonly("true");
                p.TextArea00.move("490","302","100%","100",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.div00.form.div00_02.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.div00.form.div00_02.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.div00.form.div00_02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel02.set_fittocontents("height");
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.div00.form.div00_02.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.div00.form
            obj = new Layout("default","",0,0,this.divForm.form.div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staSubTitle.set_taborder("0");
                p.staSubTitle.set_text("신청자정보");
                p.staSubTitle.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle.move("30","0","100%","50",null,null);

                p.Panel02.set_taborder("4");
                p.Panel02.move("0","30","100%","50",null,null);

                p.Panel01.set_taborder("3");
                p.Panel01.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01.set_spacing("0px 10px 0px 10px");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.set_flexcrossaxisalign("center");
                p.Panel01.set_flexmainaxisalign("end");
                p.Panel01.move("0","78","250","50",null,null);

                p.div00.set_taborder("5");
                p.div00.set_text("div00");
                p.div00.set_fittocontents("height");
                p.div00.move("187","205","100.00%","626",null,null);

                p.Button01.set_taborder("2");
                p.Button01.set_cssclass("btn_WF_ACPlus");
                p.Button01.set_visible("true");
                p.Button01.set_text("");
                p.Button01.move("64","43","34","34",null,null);

                p.Button00.set_taborder("1");
                p.Button00.set_cssclass("btn_WF_ACMinus");
                p.Button00.move("16","45","34","34",null,null);

                p.staSubTitle00.set_taborder("6");
                p.staSubTitle00.set_text("작업개요");
                p.staSubTitle00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle00.move("0","0","100.00%","50",null,null);

                p.Button01_00.set_taborder("7");
                p.Button01_00.set_cssclass("btn_WF_ACPlus");
                p.Button01_00.set_visible("true");
                p.Button01_00.move("54","45","34","34",null,null);

                p.Button00_00.set_taborder("8");
                p.Button00_00.set_cssclass("btn_WF_ACMinus");
                p.Button00_00.move("31","42","34","34",null,null);

                p.Panel02_00.set_taborder("9");
                p.Panel02_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel02_00.set_spacing("0px 10px 0px 10px");
                p.Panel02_00.set_horizontalgap("10");
                p.Panel02_00.set_flexcrossaxisalign("center");
                p.Panel02_00.set_flexmainaxisalign("end");
                p.Panel02_00.move("0","76","250","50",null,null);

                p.Panel03.set_taborder("10");
                p.Panel03.set_flexcrossaxisalign("end");
                p.Panel03.set_minheight("70");
                p.Panel03.set_maxheight("");
                p.Panel03.move("0","30","100%","70",null,null);

                p.div01.set_taborder("11");
                p.div01.set_text("div01");
                p.div01.set_fittocontents("height");
                p.div01.move("290","960","100.00%","1759.997",null,null);

                p.Panel01_00.set_taborder("17");
                p.Panel01_00.set_flexcrossaxisalign("end");
                p.Panel01_00.move("0","30","100%","70",null,null);

                p.staSubTitle01.set_taborder("13");
                p.staSubTitle01.set_text("작업내용");
                p.staSubTitle01.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle01.move("162","3046","100.00%","50",null,null);

                p.Button01_01.set_taborder("14");
                p.Button01_01.set_cssclass("btn_WF_ACPlus");
                p.Button01_01.set_visible("true");
                p.Button01_01.move("61","21","34","34",null,null);

                p.Button00_01.set_taborder("15");
                p.Button00_01.set_cssclass("btn_WF_ACMinus");
                p.Button00_01.move("4","25","34","34",null,null);

                p.Panel00.set_taborder("16");
                p.Panel00.set_spacing("0px 10px 0px 10px");
                p.Panel00.set_horizontalgap("10");
                p.Panel00.set_flexcrossaxisalign("center");
                p.Panel00.set_flexmainaxisalign("end");
                p.Panel00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel00.move("1388","3046","250","50",null,null);

                p.div00_00.set_taborder("12");
                p.div00_00.set_text("div00");
                p.div00_00.set_fittocontents("height");
                p.div00_00.move("292","1984","100.00%","221",null,null);

                p.staSubTitle02.set_taborder("18");
                p.staSubTitle02.set_text("정보보호서약서 및 개인 정보동의서 목록");
                p.staSubTitle02.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02.move("0","0","100.00%","50",null,null);

                p.Button01_02.set_taborder("19");
                p.Button01_02.set_cssclass("btn_WF_ACPlus");
                p.Button01_02.set_visible("true");
                p.Button01_02.move("61","21","34","34",null,null);

                p.Button00_02.set_taborder("20");
                p.Button00_02.set_cssclass("btn_WF_ACMinus");
                p.Button00_02.move("4","25","34","34",null,null);

                p.Panel00_00.set_taborder("21");
                p.Panel00_00.set_spacing("0px 10px 0px 10px");
                p.Panel00_00.set_horizontalgap("10");
                p.Panel00_00.set_flexcrossaxisalign("center");
                p.Panel00_00.set_flexmainaxisalign("end");
                p.Panel00_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel00_00.move("0","54","250","50",null,null);

                p.Panel01_01.set_taborder("22");
                p.Panel01_01.set_flexcrossaxisalign("end");
                p.Panel01_01.set_minheight("70");
                p.Panel01_01.set_maxheight("");
                p.Panel01_01.move("0","30","100%","70",null,null);

                p.div02.set_taborder("23");
                p.div02.set_text("div02");
                p.div02.set_fittocontents("height");
                p.div02.move("143","3043","100.00%","232",null,null);

                p.staSubTitle03.set_taborder("24");
                p.staSubTitle03.set_text("첨부(구비서류)");
                p.staSubTitle03.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle03.move("382","3247","100.00%","50",null,null);

                p.Button01_03.set_taborder("26");
                p.Button01_03.set_cssclass("btn_WF_ACMinus");
                p.Button01_03.move("36","44","34","34",null,null);

                p.Button02.set_taborder("25");
                p.Button02.set_cssclass("btn_WF_ACPlus");
                p.Button02.set_visible("true");
                p.Button02.move("64","40","34","34",null,null);

                p.Panel02_01.set_taborder("27");
                p.Panel02_01.set_cssclass("pal_WF_TitBtnBg");
                p.Panel02_01.set_flexcrossaxisalign("center");
                p.Panel02_01.set_flexmainaxisalign("end");
                p.Panel02_01.set_horizontalgap("10");
                p.Panel02_01.set_spacing("0px 10px 0px 10px");
                p.Panel02_01.move("1610","3247","250","50",null,null);

                p.Panel03_00.set_taborder("28");
                p.Panel03_00.set_flexcrossaxisalign("end");
                p.Panel03_00.set_minheight("70");
                p.Panel03_00.set_maxheight("");
                p.Panel03_00.move("382","3247","100.00%","70",null,null);

                p.div03.set_taborder("29");
                p.div03.set_text("div03");
                p.div03.set_fittocontents("height");
                p.div03.move("242","3382","100.00%","1025",null,null);

                p.staSubTitle04.set_taborder("30");
                p.staSubTitle04.set_text("검토의견");
                p.staSubTitle04.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle04.move("295","4485","100.00%","50",null,null);

                p.Panel00_01.set_taborder("33");
                p.Panel00_01.set_cssclass("pal_WF_TitBtnBg");
                p.Panel00_01.set_flexcrossaxisalign("center");
                p.Panel00_01.set_flexmainaxisalign("end");
                p.Panel00_01.set_horizontalgap("10");
                p.Panel00_01.set_spacing("0px 10px 0px 10px");
                p.Panel00_01.move("1522","4485","250","50",null,null);

                p.Button00_03.set_taborder("32");
                p.Button00_03.set_cssclass("btn_WF_ACMinus");
                p.Button00_03.move("20","46","34","34",null,null);

                p.Button01_04.set_taborder("31");
                p.Button01_04.set_cssclass("btn_WF_ACPlus");
                p.Button01_04.set_visible("true");
                p.Button01_04.move("76","36","34","34",null,null);

                p.Panel01_02.set_taborder("34");
                p.Panel01_02.set_flexcrossaxisalign("end");
                p.Panel01_02.set_minheight("70");
                p.Panel01_02.set_maxheight("");
                p.Panel01_02.move("0","30","100%","70",null,null);

                p.div04.set_taborder("35");
                p.div04.set_text("div04");
                p.div04.set_fittocontents("height");
                p.div04.move("500","4572","100.00%","717",null,null);

                p.staSubTitle05.set_taborder("36");
                p.staSubTitle05.set_text("전달사항");
                p.staSubTitle05.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle05.move("547","5235","100.00%","50",null,null);

                p.Panel00_02.set_taborder("39");
                p.Panel00_02.set_cssclass("pal_WF_TitBtnBg");
                p.Panel00_02.set_flexcrossaxisalign("center");
                p.Panel00_02.set_flexmainaxisalign("end");
                p.Panel00_02.set_horizontalgap("10");
                p.Panel00_02.set_spacing("0px 10px 0px 10px");
                p.Panel00_02.move("1775","5235","250","50",null,null);

                p.Button00_04.set_taborder("38");
                p.Button00_04.set_cssclass("btn_WF_ACMinus");
                p.Button00_04.move("20","46","34","34",null,null);

                p.Button01_05.set_taborder("37");
                p.Button01_05.set_cssclass("btn_WF_ACPlus");
                p.Button01_05.set_visible("true");
                p.Button01_05.move("76","36","34","34",null,null);

                p.Panel01_03.set_taborder("40");
                p.Panel01_03.set_flexcrossaxisalign("end");
                p.Panel01_03.set_minheight("70");
                p.Panel01_03.set_maxheight("");
                p.Panel01_03.move("0","30","100%","70",null,null);

                p.div05.set_taborder("41");
                p.div05.set_text("div05");
                p.div05.set_fittocontents("height");
                p.div05.move("120","5205","100.00%","165",null,null);

                p.staSubTitle06.set_taborder("42");
                p.staSubTitle06.set_text("개인정보 수집 이용 동의");
                p.staSubTitle06.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle06.move("0","0","100.00%","50",null,null);

                p.Button01_06.set_taborder("43");
                p.Button01_06.set_cssclass("btn_WF_ACPlus");
                p.Button01_06.set_visible("true");
                p.Button01_06.move("30","45","34","34",null,null);

                p.Button00_05.set_taborder("44");
                p.Button00_05.set_cssclass("btn_WF_ACMinus");
                p.Button00_05.move("4","46","34","34",null,null);

                p.Panel00_03.set_taborder("45");
                p.Panel00_03.set_spacing("0px 10px 0px 10px");
                p.Panel00_03.set_horizontalgap("10");
                p.Panel00_03.set_cssclass("pal_WF_TitBtnBg");
                p.Panel00_03.set_flexcrossaxisalign("center");
                p.Panel00_03.set_flexmainaxisalign("end");
                p.Panel00_03.move("0","71","250","50",null,null);

                p.Panel01_04.set_taborder("46");
                p.Panel01_04.set_flexcrossaxisalign("end");
                p.Panel01_04.set_minheight("70");
                p.Panel01_04.set_maxheight("");
                p.Panel01_04.move("0","30","100%","70",null,null);

                p.div00_01.set_taborder("47");
                p.div00_01.set_text("div00");
                p.div00_01.set_fittocontents("height");
                p.div00_01.move("1587","5295","100.00%","206",null,null);

                p.staSubTitle07.set_taborder("48");
                p.staSubTitle07.set_text("타부서 작업통지 확인");
                p.staSubTitle07.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle07.move("246","6503","100.00%","50",null,null);

                p.Panel00_04.set_taborder("51");
                p.Panel00_04.set_cssclass("pal_WF_TitBtnBg");
                p.Panel00_04.set_horizontalgap("10");
                p.Panel00_04.set_spacing("0px 10px 0px 10px");
                p.Panel00_04.set_flexcrossaxisalign("center");
                p.Panel00_04.set_flexmainaxisalign("end");
                p.Panel00_04.move("1473","6503","250","50",null,null);

                p.Button01_07.set_taborder("50");
                p.Button01_07.set_cssclass("btn_WF_ACMinus");
                p.Button01_07.move("10","75","34","34",null,null);

                p.Button00_06.set_taborder("49");
                p.Button00_06.set_cssclass("btn_WF_ACPlus");
                p.Button00_06.set_visible("true");
                p.Button00_06.move("18","44","34","34",null,null);

                p.Panel01_05.set_taborder("52");
                p.Panel01_05.set_flexcrossaxisalign("end");
                p.Panel01_05.set_minheight("70");
                p.Panel01_05.set_maxheight("");
                p.Panel01_05.move("0","30","100%","70",null,null);

                p.div00_02.set_taborder("53");
                p.div00_02.set_text("div00");
                p.div00_02.set_fittocontents("height");
                p.div00_02.move("1562","6250","100.00%","206",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.div00.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divInfoGuide.set_taborder("1");
                p.divInfoGuide.set_background("#dfdfdf");
                p.divInfoGuide.set_text("서비스 흐름 및 작업방법 안내");
                p.divInfoGuide.move("0","0","100%","300",null,null);

                p.div00.set_taborder("0");
                p.div00.set_text("신청자정보");
                p.div00.set_cssclass("div_WF_Bg");
                p.div00.set_fittocontents("height");
                p.div00.move("0","350","100.00%","5767.99",null,null);
            	}
            );
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
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divBtn.form
            obj = new Layout("default","",0,0,this.divBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button03.set_taborder("1");
                p.Button03.set_text("검토의견송부");
                p.Button03.set_cssclass("btn_WF_No");
                p.Button03.set_fittocontents("width");
                p.Button03.move("960.00","10","125","40",null,null);

                p.Button01.set_taborder("0");
                p.Button01.set_text("미처리종료");
                p.Button01.set_cssclass("btn_WF_Yes");
                p.Button01.set_fittocontents("width");
                p.Button01.move("1208","27","110","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            this.divBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divBtn.form
            obj = new Layout("Layout0","",0,0,this.divBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            this.divBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("전산실감독자최종검토");

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_fittocontents("none");
                p.divForm.move("20","20",null,null,"20","70");

                p.divBtn.set_taborder("1");
                p.divBtn.set_text("Div00");
                p.divBtn.set_formscrollbartype("auto none");
                p.divBtn.set_cssclass("div_WF_PopBtn");
                p.divBtn.move("0",null,null,"60","0","0");
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Phone_screen",480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divBtn.set_cssclass("div_WF_PopBtn");

                p.divForm.set_fittocontents("none");
                p.divForm.move("20","20",null,null,"20","70");
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CST016P05.xfdl", function() {
        /********************************************************************
            created:	  2024/08/08
            filename: 	C:\developer\tsp_view\publishing\work\LIF\test.xfdl
            file path:	C:\developer\tsp_view\publishing\work\LIF
            file base: 	test
            file ext:	  xfdl
            author:

            purpose:
        *********************************************************************/

        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	test.xfdl
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

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	//this.gfnFormOnload(obj); //필수함수
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
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

        //저장
        this.cfnSave = function ()
        {
        	//TODO..
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/


        this.CST016P05_onvscroll = function(obj,e)
        {
        	// 버튼 크기에 맞춰 수치를 알아내야 한다.
        	this.divQuick.top = e.pos+32;
        	this.divBtn.top = e.pos+457;
        };

        	this.divInfoGuide_btnSchClose_onclick = function(obj,e)
        {
        	var btnClass = obj.cssclass;

        	if(btnClass =='btn_WF_SchClose')
        	{
        		this.divForm.form.divInfoGuide.set_height("50px");
        		obj.set_cssclass('btn_WF_SchOpen');
        	} else if(btnClass =='btn_WF_SchOpen')
        	{
        		this.divForm.form.divInfoGuide.set_height("300px");
        		obj.set_cssclass('btn_WF_SchClose');
        	}

        	this.divForm.form.resetScroll();
        };

        this.divForm_fnVisible1 = function(obj,e)
        {
        	if(obj.name == "Button00"){
        		this.fnVisible1(false);
        	}else{
        		this.fnVisible1(true);
        	}
        };

        this.fnVisible1 = function(val)
        {
        	this.divForm.form.div00.form.pan08.visible = val;
        	this.divForm.form.div00.form.pan03.visible = val;
        	this.divForm.form.div00.form.pan02.visible = val;
        	this.divForm.form.div00.form.pan01.visible = val;
        	this.divForm.form.div00.form.pan00_00.visible = val;
        	this.divForm.form.div00.form.pan00.visible = val;
        	this.divForm.form.resetScroll();
        }

        this.divForm_fnVisible2 = function(obj,e)
        {
        	if(obj.name == "Button00"){
        		this.fnVisible2(false);
        	}else{
        		this.fnVisible2(true);
        	}
        };

        this.fnVisible2 = function(val)
        {
        	this.divForm.form.div00_00.form.pan15.visible = val;
        	this.divForm.form.div00_00.form.pan14.visible = val;
        	this.divForm.form.div00_00.form.pan13.visible = val;
        	this.divForm.form.div00_00.form.pan12.visible = val;
        	this.divForm.form.div00_00.form.pan11.visible = val;
        	this.divForm.form.div00_00.form.pan10.visible = val;
        	this.divForm.form.div00_00.form.pan9.visible = val;
        	this.divForm.form.div00_00.form.pan8.visible = val;
        	this.divForm.form.div00_00.form.pan7.visible = val;
        	this.divForm.form.div00_00.form.pan6.visible = val;
        	this.divForm.form.div00_00.form.pan5.visible = val;
        	this.divForm.form.div00_00.form.pan4.visible = val;
        	this.divForm.form.div00_00.form.pan3.visible = val;
        	this.divForm.form.div00_00.form.pan2.visible = val;
        	this.divForm.form.div00_00.form.pan1.visible = val;

        	this.divForm.form.resetScroll();
        }

        this.divForm_fnVisible3 = function(obj,e)
        {
        	if(obj.name == "Button00"){
        		this.divForm.form.div00_01_01_00_00_00_00_00.form.Panel02.visible = false;
        	}else{
        		this.divForm.form.div00_01_01_00_00_00_00_00.form.Panel02.visible = true;
        	}
        	this.divForm.form.resetScroll();
        };

        this.divForm_fnVisible4 = function(obj,e)
        {
        	if(obj.name == "Button00"){
        		this.divForm.form.div00_01_01_00_00_00_00.form.Panel02.visible = false;
        	}else{
        		this.divForm.form.div00_01_01_00_00_00_00.form.Panel02.visible = true;
        	}
        	this.divForm.form.resetScroll();
        };



        this.divForm_fnVisible5 = function(obj,e)
        {
        	if(obj.name == "Button01"){
        		this.fnVisible5(false);
        	}else{
        		this.fnVisible5(true);
        	}
        };

        this.fnVisible5 = function(val)
        {
        	this.divForm.form.div00_01.form.panFile03.visible = val;
        	this.divForm.form.div00_01.form.panFile02.visible = val;
        	this.divForm.form.div00_01.form.panFile01.visible = val;
        	this.divForm.form.div00_01.form.panFile00.visible = val;
        	this.divForm.form.div00_01.form.panFile.visible = val;
        	this.divForm.form.resetScroll();
        }
        this.divForm_fnVisible6 = function(obj,e)
        {
        	if(obj.name == "Button01"){
        		this.divForm.form.div00_01_01_00_00_01.form.pan3.visible = true;
        		this.divForm.form.div00_01_01_00_00_01.form.pan2.visible = true;
        		this.divForm.form.div00_01_01_00_00_01.form.pan1.visible = true;
        	}else{
        		this.divForm.form.div00_01_01_00_00_01.form.pan3.visible = false;
        		this.divForm.form.div00_01_01_00_00_01.form.pan2.visible = false;
        		this.divForm.form.div00_01_01_00_00_01.form.pan1.visible = false;
        	}
        	this.divForm.form.resetScroll();
        };

        this.divForm_fnVisible7 = function(obj,e)
        {
        	if(obj.name == "Button01"){
        		this.divForm.form.div00_01_01_00_00_01_00.form.pan02.visible = true;
        	}else{
        		this.divForm.form.div00_01_01_00_00_01_00.form.pan02.visible = false;
        	}
        	this.divForm.form.resetScroll();
        };

        this.divForm_fnVisible8 = function(obj,e)
        {
        	if(obj.name == "Button01"){
        		this.divForm.form.div00_01_01_00_00.form.Panel02.visible = true;
        		this.divForm.form.div00_01_01_00_00.form.pan00.visible = true;

        	}else{
        		this.divForm.form.div00_01_01_00_00.form.Panel02.visible = false;
        		this.divForm.form.div00_01_01_00_00.form.pan00.visible = false;
        	}
        	this.divForm.form.resetScroll();
        };

        this.divForm_fnVisible9 = function(obj,e)
        {
        	if(obj.name == "Button00"){
        		this.divForm.form.div00_01_01_00_00_00.form.Panel02.visible = true;
        		this.divForm.form.div00_01_01_00_00_00.form.pan00.visible = true;
        	}else{
        		this.divForm.form.div00_01_01_00_00_00.form.Panel02.visible = false;
        		this.divForm.form.div00_01_01_00_00_00.form.pan00.visible = false;
        	}
        	this.divForm.form.resetScroll();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onvscroll",this.CST016P05_onvscroll,this);
            this.divForm.form.divInfoGuide.form.btnSchClose.addEventHandler("onclick",this.divInfoGuide_btnSchClose_onclick,this);
            this.divForm.form.div00.form.Button01.addEventHandler("onclick",this.divForm_fnVisible1,this);
            this.divForm.form.div00.form.Button00.addEventHandler("onclick",this.divForm_fnVisible1,this);
            this.divForm.form.div00.form.Button01_00.addEventHandler("onclick",this.divForm_fnVisible2,this);
            this.divForm.form.div00.form.Button00_00.addEventHandler("onclick",this.divForm_fnVisible2,this);
            this.divForm.form.div00.form.Button01_01.addEventHandler("onclick",this.divForm_fnVisible3,this);
            this.divForm.form.div00.form.Button00_01.addEventHandler("onclick",this.divForm_fnVisible3,this);
            this.divForm.form.div00.form.Button01_02.addEventHandler("onclick",this.divForm_fnVisible4,this);
            this.divForm.form.div00.form.Button00_02.addEventHandler("onclick",this.divForm_fnVisible4,this);
            this.divForm.form.div00.form.Button01_03.addEventHandler("onclick",this.divForm_fnVisible5,this);
            this.divForm.form.div00.form.Button02.addEventHandler("onclick",this.divForm_fnVisible5,this);
            this.divForm.form.div00.form.div03.form.btn_file_1.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.divForm.form.div00.form.div03.form.Grid00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.divForm.form.div00.form.div03.form.Grid00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.div00.form.div03.form.btn_file_1_00.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.divForm.form.div00.form.div03.form.Grid00_00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.divForm.form.div00.form.div03.form.Grid00_00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.div00.form.div03.form.btn_file_1_01.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.divForm.form.div00.form.div03.form.Grid00_01.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.divForm.form.div00.form.div03.form.Grid00_01.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.div00.form.div03.form.btn_file_1_02.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.divForm.form.div00.form.div03.form.Grid00_02.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.divForm.form.div00.form.div03.form.Grid00_02.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.div00.form.div03.form.btn_file_1_03.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.divForm.form.div00.form.div03.form.Grid00_03.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.divForm.form.div00.form.div03.form.Grid00_03.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.div00.form.Button00_03.addEventHandler("onclick",this.divForm_fnVisible6,this);
            this.divForm.form.div00.form.Button01_04.addEventHandler("onclick",this.divForm_fnVisible6,this);
            this.divForm.form.div00.form.Button00_04.addEventHandler("onclick",this.divForm_fnVisible7,this);
            this.divForm.form.div00.form.Button01_05.addEventHandler("onclick",this.divForm_fnVisible7,this);
            this.divForm.form.div00.form.Button01_06.addEventHandler("onclick",this.divForm_fnVisible8,this);
            this.divForm.form.div00.form.Button00_05.addEventHandler("onclick",this.divForm_fnVisible8,this);
            this.divForm.form.div00.form.Button01_07.addEventHandler("onclick",this.divForm_fnVisible9,this);
            this.divForm.form.div00.form.Button00_06.addEventHandler("onclick",this.divForm_fnVisible9,this);
            this.divBtn.form.Button03.addEventHandler("onclick",this.Button_onclick,this);
            this.divBtn.form.Button01.addEventHandler("onclick",this.Button_onclick,this);
        };
        this.loadIncludeScript("CST016P05.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
