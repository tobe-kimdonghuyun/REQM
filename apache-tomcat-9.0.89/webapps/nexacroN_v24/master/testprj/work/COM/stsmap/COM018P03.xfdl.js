(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM018P03");
            this.set_titletext("섹터별 메타정보 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,1000);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGet", this);
            obj._setContents("<ColumnInfo><Column id=\"stsmapSpceInfoId\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapId\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapNm\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapTy\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapTyNm\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapPstn\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapPstnNm\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapArea\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapAreaNm\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapSctrId\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapSctrNm\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapBno\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapBldgNm\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapFlr\" type=\"STRING\" size=\"256\"/><Column id=\"ltlndNm\" type=\"STRING\" size=\"256\"/><Column id=\"ltlndAddr\" type=\"STRING\" size=\"256\"/><Column id=\"ltlndDtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"ltlndZip\" type=\"STRING\" size=\"256\"/><Column id=\"rentPsbltySpceYn\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"prps\" type=\"STRING\" size=\"256\"/><Column id=\"prpsNm\" type=\"STRING\" size=\"256\"/><Column id=\"ar\" type=\"STRING\" size=\"256\"/><Column id=\"rmNo\" type=\"STRING\" size=\"256\"/><Column id=\"dtyDeptId\" type=\"STRING\" size=\"256\"/><Column id=\"dtyDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegNm\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","20","0",null,null,"20","70",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle01","-31","665","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_text("섹터별 메타정보 관리");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinStsImg","1342","674","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_visible("true");
            obj.set_text("");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","682","665","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("4");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 20px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnMinStsImg\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit01","-31","645","99.24%","70",null,null,null,null,"70",null,this.divForm.form);
            obj.set_taborder("5");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div01","0","0","100.00%","826",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("pan01_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt01_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("작성자");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt01_01","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01_02","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel01_02\"/><PanelItem id=\"PanelItem00\" componentid=\"edt01_02\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01","0","60","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("4");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan01_02\"/><PanelItem id=\"PanelItem03\" componentid=\"pan01_03\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_03","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("5");
            obj.set_text("섹터ID");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt01_03","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01_03","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("7");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_03\"/><PanelItem id=\"PanelItem01\" componentid=\"edt01_03\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("8");
            obj.set_text("현황도명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt01_02","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_01_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("10");
            obj.set_text("섹터명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt01_01_00","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan02_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("12");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt01_01_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("13");
            obj.set_text("현황도유형");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt01_02_00","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("14");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan02_02","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("15");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel01_02_00\"/><PanelItem id=\"PanelItem00\" componentid=\"edt01_02_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_03_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("16");
            obj.set_text("현황도위치");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt01_03_00","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("17");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan02_03","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("18");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt01_03_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan02","0","60","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("19");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan02_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan02_02\"/><PanelItem id=\"PanelItem03\" componentid=\"pan02_03\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_01_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("20");
            obj.set_text("구조물ID");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt01_01_01","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("21");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan03_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("22");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt01_01_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("23");
            obj.set_text("구조물명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt01_02_01","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("24");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan03_02","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("25");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel01_02_01\"/><PanelItem id=\"PanelItem00\" componentid=\"edt01_02_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_03_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("26");
            obj.set_text("레벨");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt01_03_01","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("27");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan03_03","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("28");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_03_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt01_03_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan03","0","60","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("29");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan03_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan03_02\"/><PanelItem id=\"PanelItem03\" componentid=\"pan03_03\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_01_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("30");
            obj.set_text("필지명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt01_01_02","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("31");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan04_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("32");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_01_02\"/><PanelItem id=\"PanelItem01\" componentid=\"edt01_01_02\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan04_02","10.00","98","300","1",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("33");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan04_03","10.00","98","300","1",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("34");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan04","0","60","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("35");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan04_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan04_02\"/><PanelItem id=\"PanelItem03\" componentid=\"pan04_03\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel00","0.00","0","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("36");
            obj.set_text("필지주소");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Div("divEdtPop","780.00","635","305","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("37");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00","0","0",null,"40","0",null,null,null,null,null,this.divForm.form.Div01.form.divEdtPop.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_readonly("true");
            this.divForm.form.Div01.form.divEdtPop.addChild(obj.name, obj);

            obj = new Button("btnPop","Edit00:-40","0","40","40",null,null,null,null,null,null,this.divForm.form.Div01.form.divEdtPop.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            this.divForm.form.Div01.form.divEdtPop.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00","360","637","305","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("38");
            obj.set_flexgrow("2");
            obj.set_readonly("true");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("panAddress","200","641","100%","45",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("39");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divEdtPop\"/><PanelItem id=\"PanelItem02\" componentid=\"edt00_00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00","0.00","46","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("40");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan05_01","20.00","0","980","140",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("41");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("10");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem03\" componentid=\"panAddress\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan05","193","631","100%","150",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("42");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan05_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_01_03","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("43");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan06_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("44");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_01_03\"/><PanelItem id=\"PanelItem03\" componentid=\"rdo00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("45");
            obj.set_text("임대가능여부");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan06_02","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("46");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel01_02_02\"/><PanelItem id=\"PanelItem03\" componentid=\"rdo00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan06","0","60","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("47");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan06_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan06_02\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Radio("rdo00","200.00","328","174","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("48");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divForm_form_Div01_form_rdo00_innerdataset = new nexacro.NormalDataset("divForm_form_Div01_form_rdo00_innerdataset", obj);
            divForm_form_Div01_form_rdo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div01_form_rdo00_innerdataset);
            obj.set_text("사용");
            obj.set_value("Y");
            obj.set_index("0");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Radio("rdo00_00","200.00","328","174","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("49");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divForm_form_Div01_form_rdo00_00_innerdataset = new nexacro.NormalDataset("divForm_form_Div01_form_rdo00_00_innerdataset", obj);
            divForm_form_Div01_form_rdo00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div01_form_rdo00_00_innerdataset);
            obj.set_text("사용");
            obj.set_value("Y");
            obj.set_index("0");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_01_04","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("50");
            obj.set_text("용도");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan07_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("51");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_01_04\"/><PanelItem id=\"PanelItem03\" componentid=\"cbo00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_03","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("52");
            obj.set_text("면적(단위)");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt01_02_02","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("53");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan07_02","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("54");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel01_02_03\"/><PanelItem id=\"PanelItem00\" componentid=\"edt01_02_02\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_03_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("55");
            obj.set_text("호실번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt01_03_02","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("56");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan07_03","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("57");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_03_02\"/><PanelItem id=\"PanelItem01\" componentid=\"edt01_03_02\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan07","0","60","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("58");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan07_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan07_02\"/><PanelItem id=\"PanelItem03\" componentid=\"pan07_03\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cbo00","200.00","128","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("59");
            obj.set_innerdataset("dsCombo");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_displaynulltext("선택");
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_01_02_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("60");
            obj.set_text("담당부서");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan08_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("61");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_01_02_00\"/><PanelItem id=\"PanelItem03\" componentid=\"divEdtPop00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan08_02","10.00","98","300","1",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("62");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan08_03","10.00","98","300","1",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("63");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan08","0","60","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("64");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan08_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan08_02\"/><PanelItem id=\"PanelItem03\" componentid=\"pan08_03\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Div("divEdtPop00","780.00","635","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("65");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00","0","0",null,"40","0",null,null,null,null,null,this.divForm.form.Div01.form.divEdtPop00.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_readonly("true");
            this.divForm.form.Div01.form.divEdtPop00.addChild(obj.name, obj);

            obj = new Button("btnPop","Edit00:-40","0","40","40",null,null,null,null,null,null,this.divForm.form.Div01.form.divEdtPop00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            this.divForm.form.Div01.form.divEdtPop00.addChild(obj.name, obj);

            obj = new Div("divPopBtn","10","870","100%","60",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00_00","457.00","30","100","40",null,null,null,null,null,null,this.divForm.form.divPopBtn.form);
            obj.set_taborder("0");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_fittocontents("width");
            this.divForm.form.divPopBtn.addChild(obj.name, obj);

            obj = new Div("divGuide00","1600.00","145","450","385",null,null,null,null,null,null,this);
            obj.set_taborder("1");
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
            //-- Default Layout : this.divForm.form.Div01.form.divEdtPop.form
            obj = new Layout("default","",0,0,this.divForm.form.Div01.form.divEdtPop.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Edit00.set_taborder("0");
                p.Edit00.set_cssclass("edt_WF_EdtSch");
                p.Edit00.set_readonly("true");
                p.Edit00.move("0","0",null,"40","0",null);

                p.btnPop.set_taborder("1");
                p.btnPop.set_cssclass("btn_WF_EdtSch");
                p.btnPop.move("Edit00:-40","0","40","40",null,null);
            	}
            );
            this.divForm.form.Div01.form.divEdtPop.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div01.form.divEdtPop.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div01.form.divEdtPop.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.Div01.form.divEdtPop.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div01.form.divEdtPop00.form
            obj = new Layout("default","",0,0,this.divForm.form.Div01.form.divEdtPop00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Edit00.set_taborder("0");
                p.Edit00.set_cssclass("edt_WF_EdtSch");
                p.Edit00.set_readonly("true");
                p.Edit00.move("0","0",null,"40","0",null);

                p.btnPop.set_taborder("1");
                p.btnPop.set_cssclass("btn_WF_EdtSch");
                p.btnPop.move("Edit00:-40","0","40","40",null,null);
            	}
            );
            this.divForm.form.Div01.form.divEdtPop00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div01.form.divEdtPop00.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div01.form.divEdtPop00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.Div01.form.divEdtPop00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div01.form
            obj = new Layout("default","",0,0,this.divForm.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.pan01_01.set_taborder("2");
                p.pan01_01.set_type("vertical");
                p.pan01_01.set_flexgrow("1");
                p.pan01_01.set_minwidth("");
                p.pan01_01.move("10.00","98","300","86",null,null);

                p.staLabel01_01.set_taborder("0");
                p.staLabel01_01.set_text("작성자");
                p.staLabel01_01.set_cssclass("sta_WF_Label");
                p.staLabel01_01.move("10","98","100%","46",null,null);

                p.edt01_01.set_taborder("1");
                p.edt01_01.set_readonly("true");
                p.edt01_01.move("10.00","158","100%","40",null,null);

                p.pan01_02.set_taborder("3");
                p.pan01_02.set_type("vertical");
                p.pan01_02.set_flexgrow("1");
                p.pan01_02.set_minwidth("");
                p.pan01_02.move("10.00","98","300","86",null,null);

                p.pan01.set_taborder("4");
                p.pan01.set_horizontalgap("20");
                p.pan01.set_flexcrossaxiswrapalign("start");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_fittocontents("height");
                p.pan01.set_verticalgap("0");
                p.pan01.set_spacing("0px 20px 10px 20px");
                p.pan01.set_cssclass("pal_WF_DtlBg");
                p.pan01.move("0","60","100.00%","97",null,null);

                p.staLabel01_03.set_taborder("5");
                p.staLabel01_03.set_text("섹터ID");
                p.staLabel01_03.set_cssclass("sta_WF_Label");
                p.staLabel01_03.move("10","98","100%","46",null,null);

                p.edt01_03.set_taborder("6");
                p.edt01_03.set_readonly("true");
                p.edt01_03.move("10.00","158","100%","40",null,null);

                p.pan01_03.set_taborder("7");
                p.pan01_03.set_type("vertical");
                p.pan01_03.set_flexgrow("1");
                p.pan01_03.set_minwidth("");
                p.pan01_03.move("10.00","98","300","86",null,null);

                p.staLabel01_02.set_taborder("8");
                p.staLabel01_02.set_text("현황도명");
                p.staLabel01_02.set_cssclass("sta_WF_Label");
                p.staLabel01_02.move("10","98","100%","46",null,null);

                p.edt01_02.set_taborder("9");
                p.edt01_02.set_readonly("true");
                p.edt01_02.move("10.00","158","100%","40",null,null);

                p.staLabel01_01_00.set_taborder("10");
                p.staLabel01_01_00.set_text("섹터명");
                p.staLabel01_01_00.set_cssclass("sta_WF_Label");
                p.staLabel01_01_00.move("10","98","100%","46",null,null);

                p.edt01_01_00.set_taborder("11");
                p.edt01_01_00.set_readonly("true");
                p.edt01_01_00.move("10.00","158","100%","40",null,null);

                p.pan02_01.set_taborder("12");
                p.pan02_01.set_type("vertical");
                p.pan02_01.set_flexgrow("1");
                p.pan02_01.set_minwidth("");
                p.pan02_01.move("10.00","98","300","86",null,null);

                p.staLabel01_02_00.set_taborder("13");
                p.staLabel01_02_00.set_text("현황도유형");
                p.staLabel01_02_00.set_cssclass("sta_WF_Label");
                p.staLabel01_02_00.move("10","98","100%","46",null,null);

                p.edt01_02_00.set_taborder("14");
                p.edt01_02_00.set_readonly("true");
                p.edt01_02_00.move("10.00","158","100%","40",null,null);

                p.pan02_02.set_taborder("15");
                p.pan02_02.set_type("vertical");
                p.pan02_02.set_flexgrow("1");
                p.pan02_02.set_minwidth("");
                p.pan02_02.move("10.00","98","300","86",null,null);

                p.staLabel01_03_00.set_taborder("16");
                p.staLabel01_03_00.set_text("현황도위치");
                p.staLabel01_03_00.set_cssclass("sta_WF_Label");
                p.staLabel01_03_00.move("10","98","100%","46",null,null);

                p.edt01_03_00.set_taborder("17");
                p.edt01_03_00.set_readonly("true");
                p.edt01_03_00.move("10.00","158","100%","40",null,null);

                p.pan02_03.set_taborder("18");
                p.pan02_03.set_type("vertical");
                p.pan02_03.set_flexgrow("1");
                p.pan02_03.set_minwidth("");
                p.pan02_03.move("10.00","98","300","86",null,null);

                p.pan02.set_taborder("19");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.move("0","60","100.00%","97",null,null);

                p.staLabel01_01_01.set_taborder("20");
                p.staLabel01_01_01.set_text("구조물ID");
                p.staLabel01_01_01.set_cssclass("sta_WF_Label");
                p.staLabel01_01_01.move("10","98","100%","46",null,null);

                p.edt01_01_01.set_taborder("21");
                p.edt01_01_01.set_readonly("true");
                p.edt01_01_01.move("10.00","158","100%","40",null,null);

                p.pan03_01.set_taborder("22");
                p.pan03_01.set_type("vertical");
                p.pan03_01.set_flexgrow("1");
                p.pan03_01.set_minwidth("");
                p.pan03_01.move("10.00","98","300","86",null,null);

                p.staLabel01_02_01.set_taborder("23");
                p.staLabel01_02_01.set_text("구조물명");
                p.staLabel01_02_01.set_cssclass("sta_WF_Label");
                p.staLabel01_02_01.move("10","98","100%","46",null,null);

                p.edt01_02_01.set_taborder("24");
                p.edt01_02_01.set_readonly("true");
                p.edt01_02_01.move("10.00","158","100%","40",null,null);

                p.pan03_02.set_taborder("25");
                p.pan03_02.set_type("vertical");
                p.pan03_02.set_flexgrow("1");
                p.pan03_02.set_minwidth("");
                p.pan03_02.move("10.00","98","300","86",null,null);

                p.staLabel01_03_01.set_taborder("26");
                p.staLabel01_03_01.set_text("레벨");
                p.staLabel01_03_01.set_cssclass("sta_WF_Label");
                p.staLabel01_03_01.move("10","98","100%","46",null,null);

                p.edt01_03_01.set_taborder("27");
                p.edt01_03_01.set_readonly("true");
                p.edt01_03_01.move("10.00","158","100%","40",null,null);

                p.pan03_03.set_taborder("28");
                p.pan03_03.set_type("vertical");
                p.pan03_03.set_flexgrow("1");
                p.pan03_03.set_minwidth("");
                p.pan03_03.move("10.00","98","300","86",null,null);

                p.pan03.set_taborder("29");
                p.pan03.set_horizontalgap("20");
                p.pan03.set_flexcrossaxiswrapalign("start");
                p.pan03.set_flexwrap("wrap");
                p.pan03.set_fittocontents("height");
                p.pan03.set_verticalgap("0");
                p.pan03.set_spacing("0px 20px 10px 20px");
                p.pan03.set_cssclass("pal_WF_DtlBg");
                p.pan03.set_visible("false");
                p.pan03.move("0","60","100.00%","97",null,null);

                p.staLabel01_01_02.set_taborder("30");
                p.staLabel01_01_02.set_text("필지명");
                p.staLabel01_01_02.set_cssclass("sta_WF_Label");
                p.staLabel01_01_02.move("10","98","100%","46",null,null);

                p.edt01_01_02.set_taborder("31");
                p.edt01_01_02.move("10.00","158","100%","40",null,null);

                p.pan04_01.set_taborder("32");
                p.pan04_01.set_type("vertical");
                p.pan04_01.set_flexgrow("1");
                p.pan04_01.set_visible("true");
                p.pan04_01.set_minwidth("");
                p.pan04_01.move("10.00","98","300","86",null,null);

                p.pan04_02.set_taborder("33");
                p.pan04_02.set_type("vertical");
                p.pan04_02.set_flexgrow("1");
                p.pan04_02.set_minwidth("");
                p.pan04_02.move("10.00","98","300","1",null,null);

                p.pan04_03.set_taborder("34");
                p.pan04_03.set_type("vertical");
                p.pan04_03.set_flexgrow("1");
                p.pan04_03.set_minwidth("");
                p.pan04_03.move("10.00","98","300","1",null,null);

                p.pan04.set_taborder("35");
                p.pan04.set_horizontalgap("20");
                p.pan04.set_flexcrossaxiswrapalign("start");
                p.pan04.set_flexwrap("wrap");
                p.pan04.set_fittocontents("height");
                p.pan04.set_verticalgap("0");
                p.pan04.set_spacing("0px 20px 10px 20px");
                p.pan04.set_cssclass("pal_WF_DtlBg");
                p.pan04.set_visible("false");
                p.pan04.move("0","60","100.00%","97",null,null);

                p.staLabel00.set_taborder("36");
                p.staLabel00.set_text("필지주소");
                p.staLabel00.set_cssclass("sta_WF_Label");
                p.staLabel00.move("0.00","0","100%","46",null,null);

                p.divEdtPop.set_taborder("37");
                p.divEdtPop.set_text("Div00");
                p.divEdtPop.set_formscrollbartype("none none");
                p.divEdtPop.set_formscrolltype("none");
                p.divEdtPop.set_flexgrow("1");
                p.divEdtPop.move("780.00","635","305","40",null,null);

                p.edt00_00_00.set_taborder("38");
                p.edt00_00_00.set_flexgrow("2");
                p.edt00_00_00.set_readonly("true");
                p.edt00_00_00.move("360","637","305","40",null,null);

                p.panAddress.set_taborder("39");
                p.panAddress.set_horizontalgap("10");
                p.panAddress.move("200","641","100%","45",null,null);

                p.edt00_00.set_taborder("40");
                p.edt00_00.move("0.00","46","100%","40",null,null);

                p.pan05_01.set_taborder("41");
                p.pan05_01.set_type("vertical");
                p.pan05_01.set_flexgrow("1");
                p.pan05_01.set_fittocontents("height");
                p.pan05_01.set_verticalgap("10");
                p.pan05_01.set_visible("true");
                p.pan05_01.set_minwidth("");
                p.pan05_01.move("20.00","0","980","140",null,null);

                p.pan05.set_taborder("42");
                p.pan05.set_horizontalgap("20");
                p.pan05.set_flexcrossaxiswrapalign("start");
                p.pan05.set_flexwrap("wrap");
                p.pan05.set_fittocontents("height");
                p.pan05.set_verticalgap("0");
                p.pan05.set_spacing("0px 20px 10px 20px");
                p.pan05.set_cssclass("pal_WF_DtlBg");
                p.pan05.set_visible("false");
                p.pan05.move("193","631","100%","150",null,null);

                p.staLabel01_01_03.set_taborder("43");
                p.staLabel01_01_03.set_text("사용여부");
                p.staLabel01_01_03.set_cssclass("sta_WF_Label");
                p.staLabel01_01_03.move("10","98","100%","46",null,null);

                p.pan06_01.set_taborder("44");
                p.pan06_01.set_type("vertical");
                p.pan06_01.set_flexgrow("1");
                p.pan06_01.set_minwidth("");
                p.pan06_01.move("10.00","98","300","86",null,null);

                p.staLabel01_02_02.set_taborder("45");
                p.staLabel01_02_02.set_text("임대가능여부");
                p.staLabel01_02_02.set_cssclass("sta_WF_Label");
                p.staLabel01_02_02.move("10","98","100%","46",null,null);

                p.pan06_02.set_taborder("46");
                p.pan06_02.set_type("vertical");
                p.pan06_02.set_flexgrow("1");
                p.pan06_02.set_minwidth("");
                p.pan06_02.move("10.00","98","300","86",null,null);

                p.pan06.set_taborder("47");
                p.pan06.set_horizontalgap("20");
                p.pan06.set_flexcrossaxiswrapalign("start");
                p.pan06.set_flexwrap("wrap");
                p.pan06.set_fittocontents("height");
                p.pan06.set_verticalgap("0");
                p.pan06.set_spacing("0px 20px 10px 20px");
                p.pan06.set_cssclass("pal_WF_DtlBg");
                p.pan06.move("0","60","100.00%","97",null,null);

                p.rdo00.set_taborder("48");
                p.rdo00.set_innerdataset(divForm_form_Div01_form_rdo00_innerdataset);
                p.rdo00.set_codecolumn("codecolumn");
                p.rdo00.set_datacolumn("datacolumn");
                p.rdo00.set_direction("vertical");
                p.rdo00.set_value("Y");
                p.rdo00.set_index("0");
                p.rdo00.move("200.00","328","174","40",null,null);

                p.rdo00_00.set_taborder("49");
                p.rdo00_00.set_innerdataset(divForm_form_Div01_form_rdo00_00_innerdataset);
                p.rdo00_00.set_codecolumn("codecolumn");
                p.rdo00_00.set_datacolumn("datacolumn");
                p.rdo00_00.set_direction("vertical");
                p.rdo00_00.set_value("Y");
                p.rdo00_00.set_index("0");
                p.rdo00_00.move("200.00","328","174","40",null,null);

                p.staLabel01_01_04.set_taborder("50");
                p.staLabel01_01_04.set_text("용도");
                p.staLabel01_01_04.set_cssclass("sta_WF_Label");
                p.staLabel01_01_04.move("10","98","100%","46",null,null);

                p.pan07_01.set_taborder("51");
                p.pan07_01.set_type("vertical");
                p.pan07_01.set_flexgrow("1");
                p.pan07_01.set_minwidth("");
                p.pan07_01.move("10.00","98","300","86",null,null);

                p.staLabel01_02_03.set_taborder("52");
                p.staLabel01_02_03.set_text("면적(단위)");
                p.staLabel01_02_03.set_cssclass("sta_WF_Label");
                p.staLabel01_02_03.move("10","98","100%","46",null,null);

                p.edt01_02_02.set_taborder("53");
                p.edt01_02_02.move("10.00","158","100%","40",null,null);

                p.pan07_02.set_taborder("54");
                p.pan07_02.set_type("vertical");
                p.pan07_02.set_flexgrow("1");
                p.pan07_02.set_minwidth("");
                p.pan07_02.move("10.00","98","300","86",null,null);

                p.staLabel01_03_02.set_taborder("55");
                p.staLabel01_03_02.set_text("호실번호");
                p.staLabel01_03_02.set_cssclass("sta_WF_Label");
                p.staLabel01_03_02.move("10","98","100%","46",null,null);

                p.edt01_03_02.set_taborder("56");
                p.edt01_03_02.move("10.00","158","100%","40",null,null);

                p.pan07_03.set_taborder("57");
                p.pan07_03.set_type("vertical");
                p.pan07_03.set_flexgrow("1");
                p.pan07_03.set_minwidth("");
                p.pan07_03.move("10.00","98","300","86",null,null);

                p.pan07.set_taborder("58");
                p.pan07.set_horizontalgap("20");
                p.pan07.set_flexcrossaxiswrapalign("start");
                p.pan07.set_flexwrap("wrap");
                p.pan07.set_fittocontents("height");
                p.pan07.set_verticalgap("0");
                p.pan07.set_spacing("0px 20px 10px 20px");
                p.pan07.set_cssclass("pal_WF_DtlBg");
                p.pan07.move("0","60","100.00%","97",null,null);

                p.cbo00.set_taborder("59");
                p.cbo00.set_innerdataset("dsCombo");
                p.cbo00.set_codecolumn("cdId");
                p.cbo00.set_datacolumn("cdNm");
                p.cbo00.set_displaynulltext("선택");
                p.cbo00.set_text("");
                p.cbo00.set_index("-1");
                p.cbo00.move("200.00","128","100%","40",null,null);

                p.staLabel01_01_02_00.set_taborder("60");
                p.staLabel01_01_02_00.set_text("담당부서");
                p.staLabel01_01_02_00.set_cssclass("sta_WF_Label");
                p.staLabel01_01_02_00.move("10","98","100%","46",null,null);

                p.pan08_01.set_taborder("61");
                p.pan08_01.set_type("vertical");
                p.pan08_01.set_flexgrow("1");
                p.pan08_01.set_minwidth("");
                p.pan08_01.move("10.00","98","300","86",null,null);

                p.pan08_02.set_taborder("62");
                p.pan08_02.set_type("vertical");
                p.pan08_02.set_flexgrow("1");
                p.pan08_02.set_minwidth("");
                p.pan08_02.move("10.00","98","300","1",null,null);

                p.pan08_03.set_taborder("63");
                p.pan08_03.set_type("vertical");
                p.pan08_03.set_flexgrow("1");
                p.pan08_03.set_minwidth("");
                p.pan08_03.move("10.00","98","300","1",null,null);

                p.pan08.set_taborder("64");
                p.pan08.set_horizontalgap("20");
                p.pan08.set_flexcrossaxiswrapalign("start");
                p.pan08.set_flexwrap("wrap");
                p.pan08.set_fittocontents("height");
                p.pan08.set_verticalgap("0");
                p.pan08.set_spacing("0px 20px 10px 20px");
                p.pan08.set_cssclass("pal_WF_DtlBg");
                p.pan08.move("0","60","100.00%","97",null,null);

                p.divEdtPop00.set_taborder("65");
                p.divEdtPop00.set_text("Div00");
                p.divEdtPop00.set_formscrollbartype("none none");
                p.divEdtPop00.set_formscrolltype("none");
                p.divEdtPop00.set_flexgrow("1");
                p.divEdtPop00.move("780.00","635","100%","40",null,null);
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
            //-- Default Layout : this.divForm.form.divPopBtn.form
            obj = new Layout("default","",0,0,this.divForm.form.divPopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00_00.set_taborder("0");
                p.Button00_00.set_text("등록");
                p.Button00_00.set_cssclass("btn_WF_Yes");
                p.Button00_00.set_fittocontents("width");
                p.Button00_00.move("457.00","30","100","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("10");
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
            this.divForm.form.divPopBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staSubTitle01.set_taborder("2");
                p.staSubTitle01.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle01.set_text("섹터별 메타정보 관리");
                p.staSubTitle01.move("-31","665","100%","50",null,null);

                p.btnMinStsImg.set_taborder("3");
                p.btnMinStsImg.set_cssclass("btn_WF_ACMinus");
                p.btnMinStsImg.set_visible("true");
                p.btnMinStsImg.set_text("");
                p.btnMinStsImg.move("1342","674","34","34",null,null);

                p.Panel01_00.set_taborder("4");
                p.Panel01_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_00.set_spacing("0px 20px");
                p.Panel01_00.set_horizontalgap("10");
                p.Panel01_00.set_flexcrossaxisalign("center");
                p.Panel01_00.set_flexmainaxisalign("end");
                p.Panel01_00.move("682","665","100%","50",null,null);

                p.sub_tit01.set_taborder("5");
                p.sub_tit01.set_background("#ffffff");
                p.sub_tit01.set_flexcrossaxisalign("end");
                p.sub_tit01.set_minheight("70");
                p.sub_tit01.set_maxheight("");
                p.sub_tit01.move("-31","645","99.24%","70",null,null);

                p.Div01.set_taborder("0");
                p.Div01.set_text("Div00");
                p.Div01.set_cssclass("div_WF_Bg");
                p.Div01.set_fittocontents("height");
                p.Div01.move("0","0","100.00%","826",null,null);

                p.divPopBtn.set_taborder("1");
                p.divPopBtn.set_text("Div00");
                p.divPopBtn.set_cssclass("div_WF_PopBtn");
                p.divPopBtn.move("10","870","100%","60",null,null);
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
            obj = new Layout("default","Desktop_screen",1480,1000,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("섹터별 메타정보 관리");

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.move("20","0",null,null,"20","70");

                p.divGuide00.set_taborder("1");
                p.divGuide00.set_text("div00");
                p.divGuide00.set_visible("false");
                p.divGuide00.set_cssclass("div_GD_Tip");
                p.divGuide00.move("1600.00","145","450","385",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",480,600,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divForm.move("20","0",null,null,"20","90");
            	}
            );
            obj.set_mobileorientation("Portrait");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.Div01.form.edt01_01","value","dsGet","frstRegNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.Div01.form.edt01_02","value","dsGet","stsmapNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.Div01.form.edt01_03","value","dsGet","stsmapSctrId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.Div01.form.edt01_01_00","value","dsGet","stsmapSctrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.Div01.form.edt01_02_00","value","dsGet","stsmapTyNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.Div01.form.edt01_03_00","value","dsGet","stsmapPstnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.Div01.form.edt01_01_01","value","dsGet","stsmapBno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divForm.form.Div01.form.edt01_02_01","value","dsGet","stsmapBldgNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divForm.form.Div01.form.edt01_03_01","value","dsGet","stsmapFlr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divForm.form.Div01.form.edt01_01_02","value","dsGet","ltlndNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divForm.form.Div01.form.divEdtPop.form.Edit00","value","dsGet","ltlndZip");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divForm.form.Div01.form.edt00_00_00","value","dsGet","ltlndAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divForm.form.Div01.form.edt00_00","value","dsGet","ltlndDtlAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divForm.form.Div01.form.rdo00","value","dsGet","useYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divForm.form.Div01.form.rdo00_00","value","dsGet","rentPsbltySpceYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divForm.form.Div01.form.cbo00","value","dsGet","prps");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divForm.form.Div01.form.edt01_02_02","value","dsGet","ar");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divForm.form.Div01.form.edt01_03_02","value","dsGet","rmNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divForm.form.Div01.form.divEdtPop00.form.Edit00","value","dsGet","dtyDeptNm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("COM018P03.xfdl", function() {
        /**
        *  인천공항 원스톱 입주자서비스 프로젝트
        *  @FileName 	sampleWrite.xfdl
        *  @Creator 	(주)이루온
        *  @CreateDate 	2024/08/08
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/08/08				김완성						최초생성
        *******************************************************************************
        */

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
        	// 전달받은 파라메터 팝업창과 페이지오픈으로 파라메터 불러오는 방식이 달라짐
        	if(this.opener)
        	{
        		this.param = {
        			"stsmapSpceInfoId" : this.getOwnerFrame().stsmapSpceInfoId,
        			"stsmapSctrId" : this.getOwnerFrame().stsmapSctrId
        		}
        	} else
        	{
        		this.param = this.getOwnerFrame().form.fvObjArgs;
        	}

        	this.fnInit();
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	//TODO..
        };

        this.cfnClose = function()
        {
        	console.log('cfnClose');
        	//부모창 검색 조회
        	var sWinId = this.objApp.gdsOpenMenu.lookupAs(this.FRAME_MENUCOLUMNS.menuId, this.getOwnerFrame().form.fvMenuId.substring(0, 14), this.FRAME_MENUCOLUMNS.winId);
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
        	var strSvcUrl   = "stsmap/mapMetaMngInfoInq.do";
        	var inData      = "";
        	var outData     = "dsGet=dsGet";
        	var strArg      = "id=" + this.param.stsmapSpceInfoId + " stsmapSctrId=" + this.param.stsmapSctrId;
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
        	var strArg      = "comboTy=S cdTypeId=RAAPTYPE";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= false;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 데이터 저장
        this.saveTransaction = function()
        {
        	var strSvcId    = "save";
        	var strSvcUrl   = "stsmap/mapMetaMngInfoStrg.do";
        	var inData      = "dsGet=dsGet";
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

        			var frstRegId = this.dsGet.getColumn(0, "frstRegId");

        			if(frstRegId == null || frstRegId == "") {
        				this.dsGet.addColumn("frstRegId", "STRING");
        				this.dsGet.addColumn("frstRegNm", "STRING");
        				this.dsGet.setColumn(0, "frstRegId", this.objApp.gdsUser.getColumn(0, "userId"));
        				this.dsGet.setColumn(0, "frstRegNm", this.objApp.gdsUser.getColumn(0, "userNm"));
        			}

        			var stsmapTy = this.dsGet.getColumn(0, "stsmapTy");
        			if(stsmapTy == '02') {
        				this.divForm.form.Div01.form.pan04.visible = true;
        				this.divForm.form.Div01.form.pan05.visible = true;
        				this.divForm.form.Div01.form.pan03.visible = false;
        			} else {
        				this.divForm.form.Div01.form.pan03.visible = true;
        			}
        			break;

        		case "combo":

        			break;

        		case "save":
        			var gvRetMsg = this.objApp.getVariable("gvRetMsg");
        			this.gfnAlertMsg("save", gvRetMsg, [], "msgCallback");

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
        			this.saveTransaction();
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
        	}
        };

        this.fnPopupCallback = function(sPopupId, sRtn)
        {
        	if (this.gfnIsNull(sRtn)) return;

        	var objRtn = JSON.parse(sRtn);
        	console.log(sPopupId);
        	console.log(objRtn);

        	if(sPopupId =="deptSearch")
        	{
        		this.dsGet.setColumn(0, "dtyDeptId", objRtn.deptId);
        		this.dsGet.setColumn(0, "dtyDeptNm", objRtn.deptNm);
        	}

        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	if(this.param != null && this.param.stsmapSctrId != null && this.param.stsmapSctrId != '')
        	{
        		this.selectCmmTransaction();
        		this.selectTransaction();
        	} else
        	{
        		this.selectCmmTransaction();
        	}
        }
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divForm_Div01_divEdtPop00_btnPop_onclick = function(obj,e)
        {
        	var sTitle = "부서검색";		// 팝업 파이틀
        	var objArg   = {};			// 팝업창에 보낸 파라메터

        	var objOption = {
        		popuptype: "modal"		//modal,modaless
         		, width: 1221			// 팝업창 width
         		, height: 650			// 팝업창 height
        		, autosize: false		// 사이즈 자동 여부
        		, title: sTitle			// 팝업타이틀
        		, resize: false			// 사이즈 조정 여부
        		, titlebar: true		// 팝업 타이틀바 여부
        	};
        	var sPopupCallBack = "fnPopupCallback";	// 콜백명

        	this.gfnOpenPopup("deptSearch", "work::COM/crtr/COM100P03.xfdl", objArg, sPopupCallBack, objOption);
        };

        this.divPopBtn_Button00_00_onclick = function(obj,e)
        {
        	this.gfnConfirmMsg("save_confirm", "MSG_020", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        };

        this.btnMin_onclick = function(obj,e)
        {
        	var objNm = obj.name;
        	var objClass = obj.cssclass;
        	var objDiv = null;
        	var divVisible = false;

        	// 해당 div 찾아줌.
        	if(objNm == "btnMinStsImg") {
        		objDiv = this.divForm.form.Div01;
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.btnMinStsImg.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.Div01.form.cbo00.addEventHandler("onitemchanged",this.cbo00_onitemchanged,this);
            this.divForm.form.Div01.form.divEdtPop00.form.btnPop.addEventHandler("onclick",this.divForm_Div01_divEdtPop00_btnPop_onclick,this);
            this.divForm.form.divPopBtn.form.Button00_00.addEventHandler("onclick",this.divPopBtn_Button00_00_onclick,this);
        };
        this.loadIncludeScript("COM018P03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
