(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM018P01");
            this.set_titletext("현황도 이미지 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,1150);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGet", this);
            obj._setContents("<ColumnInfo><Column id=\"stsmapId\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapNm\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapTyNm\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapTy\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapArea\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapPstn\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapAddr\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapDtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapZip\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapBno\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapBldgNm\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapFlr\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapExpln\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegNm\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"useYn\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile", this);
            obj._setContents("<ColumnInfo><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"fullName\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDelFile", this);
            obj._setContents("<ColumnInfo><Column id=\"uniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo1", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo2", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo3", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","20","10",null,null,"20","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle01","-31","665","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_text("현황도 이미지 관리");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinStsImg","1342","674","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_visible("true");
            obj.set_text("");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","682","665","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 20px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnMinStsImg\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit01","-31","645","99.24%","70",null,null,null,null,"70",null,this.divForm.form);
            obj.set_taborder("4");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div01","0","0","100%","1000",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("pan01_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("작성자");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01","0","60","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("3");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan01_01\"/><PanelItem id=\"PanelItem03\" componentid=\"pan01_02\"/><PanelItem id=\"PanelItem04\" componentid=\"pan01_03\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("4");
            obj.set_text("현황도유형");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo01_02","788.00","145","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("5");
            obj.set_flexgrow("1");
            obj.set_displaynulltext("선택");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_Div01_form_Combo01_02_innerdataset = new nexacro.NormalDataset("divForm_form_Div01_form_Combo01_02_innerdataset", obj);
            divForm_form_Div01_form_Combo01_02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">건물</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">토지</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div01_form_Combo01_02_innerdataset);
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("0");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01_02","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02\"/><PanelItem id=\"PanelItem03\" componentid=\"Combo01_02\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_03","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("7");
            obj.set_text("현황도지역");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo01_03","788.00","145","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("8");
            obj.set_flexgrow("1");
            obj.set_displaynulltext("선택");
            obj.set_innerdataset("dsCombo1");
            obj.set_datacolumn("cdNm");
            obj.set_codecolumn("cdId");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01_03","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_03\"/><PanelItem id=\"PanelItem03\" componentid=\"Combo01_03\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("10");
            obj.set_text("현황도명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("11");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan02_01","10.00","98","620","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("12");
            obj.set_type("vertical");
            obj.set_flexgrow("2");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("13");
            obj.set_text("현황도위치");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo01_02_00","788.00","145","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("14");
            obj.set_flexgrow("1");
            obj.set_displaynulltext("선택");
            obj.set_innerdataset("dsCombo2");
            obj.set_datacolumn("cdNm");
            obj.set_codecolumn("cdId");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan02_02","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("15");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Combo01_02_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan02","0","60","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("16");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan02_01\"/><PanelItem id=\"PanelItem03\" componentid=\"pan02_02\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan00","193","631","100%","160",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("40");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("17");
            obj.set_text("구조물ID");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_01","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("18");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01_01_00","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("19");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_00_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("20");
            obj.set_text("구조물명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01_02_00","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("21");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_01\"/><PanelItem id=\"PanelItem03\" componentid=\"Combo01_02_00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_03_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("22");
            obj.set_text("레벨");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01_03_00","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("23");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_03_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edt00_00_01_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan04","0","60","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("24");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan01_01_00\"/><PanelItem id=\"PanelItem03\" componentid=\"pan01_02_00\"/><PanelItem id=\"PanelItem04\" componentid=\"pan01_03_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo01_02_00_00","504","385","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("55");
            obj.set_flexgrow("1");
            obj.set_displaynulltext("선택");
            obj.set_innerdataset("dsCombo3");
            obj.set_datacolumn("cdNm");
            obj.set_codecolumn("cdId");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_01_01","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("25");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan05_01","10.00","98","100%","196",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("26");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel05_01\"/><PanelItem id=\"PanelItem01\" componentid=\"txa05_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan05","0","60","100.00%","207",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("27");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan05_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel05_01","-40","313","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("28");
            obj.set_text("현황도설명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new TextArea("txa05_01","-40","360","100%","150",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("29");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan06","0","60","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("30");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan06_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel06_01","1056","192","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("31");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Radio("Radio06_01","1056","238","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("32");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divForm_form_Div01_form_Radio06_01_innerdataset = new nexacro.NormalDataset("divForm_form_Div01_form_Radio06_01_innerdataset", obj);
            divForm_form_Div01_form_Radio06_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div01_form_Radio06_01_innerdataset);
            obj.set_text("사용");
            obj.set_value("Y");
            obj.set_index("0");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan06_01","1056","192","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("33");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel06_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Radio06_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel00","0.00","0","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("34");
            obj.set_text("주소검색");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Div("divEdtPop","780.00","635","305","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("35");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00","0","0",null,"40","0",null,null,null,null,null,this.divForm.form.Div01.form.divEdtPop.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            this.divForm.form.Div01.form.divEdtPop.addChild(obj.name, obj);

            obj = new Button("btnPop","Edit00:-40","0","40","40",null,null,null,null,null,null,this.divForm.form.Div01.form.divEdtPop.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            this.divForm.form.Div01.form.divEdtPop.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_01","360","637","305","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("36");
            obj.set_readonly("true");
            obj.set_flexgrow("2");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("panAddress","200","641","100%","45",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("37");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divEdtPop\"/><PanelItem id=\"PanelItem02\" componentid=\"edt00_00_00_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_02","0.00","46","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("38");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","20.00","0","980","160",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("39");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem03\" componentid=\"panAddress\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_00_02\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_01","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("41");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Button("Button01","783","226","120","34",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("42");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_file_2_00","124","58","116","34",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("43");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("44");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button01\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_2_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("panTitle00","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("45");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_01\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("46");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("47");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("48");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("panFileNum00","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("49");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_del_file_2","512","135","125","34",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("50");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("panBtnDel00","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("51");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_del_file_2\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("52");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00_01","20.00","114","100%","60",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("53");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("panFile00","0","50","100.00%","241",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("54");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Div("divPopBtn","40","1130","100%","60",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00_00","457.00","30","100","40",null,null,null,null,null,null,this.divForm.form.divPopBtn.form);
            obj.set_taborder("0");
            obj.set_text("확인");
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

            obj = new RaonkUpload("RaonkUpload","-796","0","49.46%","200",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_DevelopLangage("JAVA");
            obj.set_ExtensionAllowOrLimit("0");
            obj.set_RunTimes("html5");
            obj.set_ButtonBarView("0");
            obj.set_visible("false");
            obj.set_AllowDuplicationFile("1");
            obj.set_text("");
            obj.set_DisableDeleteConfirm("1");
            obj.set_HandlerUrl("/common/uploadDownload.do");
            this.addChild(obj.name, obj);
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

                p.staLabel00_00.set_taborder("0");
                p.staLabel00_00.set_text("작성자");
                p.staLabel00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00.move("10","98","100%","46",null,null);

                p.edt00_00.set_taborder("1");
                p.edt00_00.set_readonly("true");
                p.edt00_00.move("10.00","158","100%","40",null,null);

                p.pan01.set_taborder("3");
                p.pan01.set_horizontalgap("20");
                p.pan01.set_flexcrossaxiswrapalign("start");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_fittocontents("height");
                p.pan01.set_verticalgap("0");
                p.pan01.set_spacing("0px 20px 10px 20px");
                p.pan01.set_cssclass("pal_WF_DtlBg");
                p.pan01.move("0","60","100.00%","97",null,null);

                p.staLabel01_02.set_taborder("4");
                p.staLabel01_02.set_text("현황도유형");
                p.staLabel01_02.set_cssclass("sta_WF_Label");
                p.staLabel01_02.move("10","98","100%","46",null,null);

                p.Combo01_02.set_taborder("5");
                p.Combo01_02.set_flexgrow("1");
                p.Combo01_02.set_displaynulltext("선택");
                p.Combo01_02.set_innerdataset(divForm_form_Div01_form_Combo01_02_innerdataset);
                p.Combo01_02.set_codecolumn("codecolumn");
                p.Combo01_02.set_datacolumn("datacolumn");
                p.Combo01_02.set_text("선택");
                p.Combo01_02.set_value("");
                p.Combo01_02.set_index("0");
                p.Combo01_02.move("788.00","145","100%","40",null,null);

                p.pan01_02.set_taborder("6");
                p.pan01_02.set_type("vertical");
                p.pan01_02.set_flexgrow("1");
                p.pan01_02.move("10.00","98","300","86",null,null);

                p.staLabel01_03.set_taborder("7");
                p.staLabel01_03.set_text("현황도지역");
                p.staLabel01_03.set_cssclass("sta_WF_Label");
                p.staLabel01_03.move("10","98","100%","46",null,null);

                p.Combo01_03.set_taborder("8");
                p.Combo01_03.set_flexgrow("1");
                p.Combo01_03.set_displaynulltext("선택");
                p.Combo01_03.set_innerdataset("dsCombo1");
                p.Combo01_03.set_datacolumn("cdNm");
                p.Combo01_03.set_codecolumn("cdId");
                p.Combo01_03.set_value("");
                p.Combo01_03.set_index("-1");
                p.Combo01_03.move("788.00","145","100%","40",null,null);

                p.pan01_03.set_taborder("9");
                p.pan01_03.set_type("vertical");
                p.pan01_03.set_flexgrow("1");
                p.pan01_03.move("10.00","98","300","86",null,null);

                p.staLabel00_00_00.set_taborder("10");
                p.staLabel00_00_00.set_text("현황도명");
                p.staLabel00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00_00.move("10","98","100%","46",null,null);

                p.edt00_00_00.set_taborder("11");
                p.edt00_00_00.move("10.00","158","100%","40",null,null);

                p.pan02_01.set_taborder("12");
                p.pan02_01.set_type("vertical");
                p.pan02_01.set_flexgrow("2");
                p.pan02_01.set_minwidth("");
                p.pan02_01.move("10.00","98","620","86",null,null);

                p.staLabel01_02_00.set_taborder("13");
                p.staLabel01_02_00.set_text("현황도위치");
                p.staLabel01_02_00.set_cssclass("sta_WF_Label");
                p.staLabel01_02_00.move("10","98","100%","46",null,null);

                p.Combo01_02_00.set_taborder("14");
                p.Combo01_02_00.set_flexgrow("1");
                p.Combo01_02_00.set_displaynulltext("선택");
                p.Combo01_02_00.set_innerdataset("dsCombo2");
                p.Combo01_02_00.set_datacolumn("cdNm");
                p.Combo01_02_00.set_codecolumn("cdId");
                p.Combo01_02_00.set_value("");
                p.Combo01_02_00.set_index("-1");
                p.Combo01_02_00.move("788.00","145","100%","40",null,null);

                p.pan02_02.set_taborder("15");
                p.pan02_02.set_type("vertical");
                p.pan02_02.set_flexgrow("1");
                p.pan02_02.move("10.00","98","300","86",null,null);

                p.pan02.set_taborder("16");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.move("0","60","100.00%","97",null,null);

                p.pan00.set_taborder("40");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("0px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.set_visible("false");
                p.pan00.move("193","631","100%","160",null,null);

                p.staLabel00_00_01.set_taborder("17");
                p.staLabel00_00_01.set_text("구조물ID");
                p.staLabel00_00_01.set_cssclass("sta_WF_Label");
                p.staLabel00_00_01.move("10","98","100%","46",null,null);

                p.edt00_00_01.set_taborder("18");
                p.edt00_00_01.set_readonly("true");
                p.edt00_00_01.move("10.00","158","100%","40",null,null);

                p.pan01_01_00.set_taborder("19");
                p.pan01_01_00.set_type("vertical");
                p.pan01_01_00.set_flexgrow("1");
                p.pan01_01_00.set_visible("true");
                p.pan01_01_00.set_minwidth("");
                p.pan01_01_00.move("10.00","98","300","86",null,null);

                p.staLabel01_02_01.set_taborder("20");
                p.staLabel01_02_01.set_text("구조물명");
                p.staLabel01_02_01.set_cssclass("sta_WF_Label");
                p.staLabel01_02_01.move("10","98","100%","46",null,null);

                p.pan01_02_00.set_taborder("21");
                p.pan01_02_00.set_type("vertical");
                p.pan01_02_00.set_flexgrow("1");
                p.pan01_02_00.move("10.00","98","300","86",null,null);

                p.staLabel01_03_00.set_taborder("22");
                p.staLabel01_03_00.set_text("레벨");
                p.staLabel01_03_00.set_cssclass("sta_WF_Label");
                p.staLabel01_03_00.move("10","98","100%","46",null,null);

                p.pan01_03_00.set_taborder("23");
                p.pan01_03_00.set_type("vertical");
                p.pan01_03_00.set_flexgrow("1");
                p.pan01_03_00.move("10.00","98","300","86",null,null);

                p.pan04.set_taborder("24");
                p.pan04.set_horizontalgap("20");
                p.pan04.set_flexcrossaxiswrapalign("start");
                p.pan04.set_flexwrap("wrap");
                p.pan04.set_fittocontents("height");
                p.pan04.set_verticalgap("0");
                p.pan04.set_spacing("0px 20px 10px 20px");
                p.pan04.set_cssclass("pal_WF_DtlBg");
                p.pan04.set_visible("false");
                p.pan04.move("0","60","100.00%","97",null,null);

                p.Combo01_02_00_00.set_taborder("55");
                p.Combo01_02_00_00.set_flexgrow("1");
                p.Combo01_02_00_00.set_displaynulltext("선택");
                p.Combo01_02_00_00.set_innerdataset("dsCombo3");
                p.Combo01_02_00_00.set_datacolumn("cdNm");
                p.Combo01_02_00_00.set_codecolumn("cdId");
                p.Combo01_02_00_00.set_value("");
                p.Combo01_02_00_00.set_index("-1");
                p.Combo01_02_00_00.move("504","385","100%","40",null,null);

                p.edt00_00_01_01.set_taborder("25");
                p.edt00_00_01_01.move("10.00","158","100%","40",null,null);

                p.pan05_01.set_taborder("26");
                p.pan05_01.set_type("vertical");
                p.pan05_01.set_flexgrow("1");
                p.pan05_01.set_minwidth("");
                p.pan05_01.move("10.00","98","100%","196",null,null);

                p.pan05.set_taborder("27");
                p.pan05.set_horizontalgap("20");
                p.pan05.set_flexcrossaxiswrapalign("start");
                p.pan05.set_flexwrap("wrap");
                p.pan05.set_fittocontents("height");
                p.pan05.set_verticalgap("0");
                p.pan05.set_spacing("0px 20px 10px 20px");
                p.pan05.set_cssclass("pal_WF_DtlBg");
                p.pan05.move("0","60","100.00%","207",null,null);

                p.staLabel05_01.set_taborder("28");
                p.staLabel05_01.set_text("현황도설명");
                p.staLabel05_01.set_cssclass("sta_WF_Label");
                p.staLabel05_01.move("-40","313","100%","46",null,null);

                p.txa05_01.set_taborder("29");
                p.txa05_01.move("-40","360","100%","150",null,null);

                p.pan06.set_taborder("30");
                p.pan06.set_horizontalgap("20");
                p.pan06.set_flexcrossaxiswrapalign("start");
                p.pan06.set_flexwrap("wrap");
                p.pan06.set_fittocontents("height");
                p.pan06.set_verticalgap("0");
                p.pan06.set_spacing("0px 20px 10px 20px");
                p.pan06.set_cssclass("pal_WF_DtlBg");
                p.pan06.move("0","60","100.00%","97",null,null);

                p.staLabel06_01.set_taborder("31");
                p.staLabel06_01.set_text("사용여부");
                p.staLabel06_01.set_cssclass("sta_WF_Label");
                p.staLabel06_01.move("1056","192","100%","46",null,null);

                p.Radio06_01.set_taborder("32");
                p.Radio06_01.set_fittocontents("width");
                p.Radio06_01.set_innerdataset(divForm_form_Div01_form_Radio06_01_innerdataset);
                p.Radio06_01.set_codecolumn("codecolumn");
                p.Radio06_01.set_datacolumn("datacolumn");
                p.Radio06_01.set_direction("vertical");
                p.Radio06_01.set_value("Y");
                p.Radio06_01.set_index("0");
                p.Radio06_01.move("1056","238","100%","40",null,null);

                p.pan06_01.set_taborder("33");
                p.pan06_01.set_type("vertical");
                p.pan06_01.set_flexgrow("1");
                p.pan06_01.set_fittocontents("height");
                p.pan06_01.move("1056","192","305","86",null,null);

                p.staLabel00.set_taborder("34");
                p.staLabel00.set_text("주소검색");
                p.staLabel00.set_cssclass("sta_WF_Label");
                p.staLabel00.move("0.00","0","100%","46",null,null);

                p.divEdtPop.set_taborder("35");
                p.divEdtPop.set_text("Div00");
                p.divEdtPop.set_formscrollbartype("none none");
                p.divEdtPop.set_formscrolltype("none");
                p.divEdtPop.set_flexgrow("1");
                p.divEdtPop.move("780.00","635","305","40",null,null);

                p.edt00_00_00_01.set_taborder("36");
                p.edt00_00_00_01.set_readonly("true");
                p.edt00_00_00_01.set_flexgrow("2");
                p.edt00_00_00_01.move("360","637","305","40",null,null);

                p.panAddress.set_taborder("37");
                p.panAddress.set_horizontalgap("10");
                p.panAddress.move("200","641","100%","45",null,null);

                p.edt00_00_02.set_taborder("38");
                p.edt00_00_02.move("0.00","46","100%","40",null,null);

                p.Panel00_00.set_taborder("39");
                p.Panel00_00.set_type("vertical");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.set_fittocontents("height");
                p.Panel00_00.set_verticalgap("10");
                p.Panel00_00.set_minwidth("");
                p.Panel00_00.move("20.00","0","980","160",null,null);

                p.staLabel00_02_01.set_taborder("41");
                p.staLabel00_02_01.set_text("첨부파일");
                p.staLabel00_02_01.set_cssclass("sta_WF_Label");
                p.staLabel00_02_01.set_fittocontents("width");
                p.staLabel00_02_01.move("0","44","305","46",null,null);

                p.Button01.set_taborder("42");
                p.Button01.set_text("샘플첨부파일명");
                p.Button01.set_cssclass("btn_WF_Small");
                p.Button01.set_fittocontents("width");
                p.Button01.set_visible("false");
                p.Button01.move("783","226","120","34",null,null);

                p.btn_file_2_00.set_taborder("43");
                p.btn_file_2_00.set_text("파일선택");
                p.btn_file_2_00.set_cssclass("btn_WF_FileUp");
                p.btn_file_2_00.set_fittocontents("width");
                p.btn_file_2_00.move("124","58","116","34",null,null);

                p.panBtnFile00.set_taborder("44");
                p.panBtnFile00.set_flexgrow("1");
                p.panBtnFile00.set_flexmainaxisalign("end");
                p.panBtnFile00.set_horizontalgap("10");
                p.panBtnFile00.move("433","58","305","46",null,null);

                p.panTitle00.set_taborder("45");
                p.panTitle00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00.set_flexwrap("wrap");
                p.panTitle00.set_fittocontents("height");
                p.panTitle00.move("0","124","100%","46",null,null);

                p.Static00_00.set_taborder("46");
                p.Static00_00.set_text("파일수 : ");
                p.Static00_00.set_fittocontents("width");
                p.Static00_00.move("88","123","48","46",null,null);

                p.Static01_00.set_taborder("47");
                p.Static01_00.set_text("0");
                p.Static01_00.set_fittocontents("width");
                p.Static01_00.move("165","143","9","46",null,null);

                p.Static02_00.set_taborder("48");
                p.Static02_00.set_text("개");
                p.Static02_00.set_fittocontents("width");
                p.Static02_00.move("293","131","13","46",null,null);

                p.panFileNum00.set_taborder("49");
                p.panFileNum00.set_flexgrow("1");
                p.panFileNum00.set_horizontalgap("4");
                p.panFileNum00.move("20","190","305","46",null,null);

                p.btn_del_file_2.set_taborder("50");
                p.btn_del_file_2.set_text("전체파일삭제");
                p.btn_del_file_2.set_cssclass("btn_WF_FileDel");
                p.btn_del_file_2.set_fittocontents("width");
                p.btn_del_file_2.set_visible("false");
                p.btn_del_file_2.move("512","135","125","34",null,null);

                p.panBtnDel00.set_taborder("51");
                p.panBtnDel00.set_flexcrossaxisalign("center");
                p.panBtnDel00.set_flexmainaxisalign("end");
                p.panBtnDel00.set_flexgrow("1");
                p.panBtnDel00.move("517","141","305","46",null,null);

                p.Panel00_00_00.set_taborder("52");
                p.Panel00_00_00.move("20","51","100%","46",null,null);

                p.Grid00_01.set_taborder("53");
                p.Grid00_01.set_binddataset("dsFile1");
                p.Grid00_01.set_autofittype("col");
                p.Grid00_01.set_cssclass("grd_WF_FileAdd");
                p.Grid00_01.move("20.00","114","100%","60",null,null);

                p.panFile00.set_taborder("54");
                p.panFile00.set_fittocontents("height");
                p.panFile00.set_spacing("10px 20px 10px 20px");
                p.panFile00.set_flexwrap("wrap");
                p.panFile00.set_cssclass("pal_WF_DtlBg");
                p.panFile00.set_verticalgap("4");
                p.panFile00.move("0","50","100.00%","241",null,null);
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
                p.Button00_00.set_text("확인");
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
                p.staSubTitle01.set_taborder("1");
                p.staSubTitle01.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle01.set_text("현황도 이미지 관리");
                p.staSubTitle01.move("-31","665","100%","50",null,null);

                p.btnMinStsImg.set_taborder("2");
                p.btnMinStsImg.set_cssclass("btn_WF_ACMinus");
                p.btnMinStsImg.set_visible("true");
                p.btnMinStsImg.set_text("");
                p.btnMinStsImg.move("1342","674","34","34",null,null);

                p.Panel01_00.set_taborder("3");
                p.Panel01_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_00.set_spacing("0px 20px");
                p.Panel01_00.set_horizontalgap("10");
                p.Panel01_00.set_flexcrossaxisalign("center");
                p.Panel01_00.set_flexmainaxisalign("end");
                p.Panel01_00.move("682","665","100%","50",null,null);

                p.sub_tit01.set_taborder("4");
                p.sub_tit01.set_background("#ffffff");
                p.sub_tit01.set_flexcrossaxisalign("end");
                p.sub_tit01.set_minheight("70");
                p.sub_tit01.set_maxheight("");
                p.sub_tit01.move("-31","645","99.24%","70",null,null);

                p.Div01.set_taborder("0");
                p.Div01.set_text("Div00");
                p.Div01.set_cssclass("div_WF_Bg");
                p.Div01.set_fittocontents("height");
                p.Div01.move("0","0","100%","1000",null,null);

                p.divPopBtn.set_taborder("5");
                p.divPopBtn.set_text("Div00");
                p.divPopBtn.set_cssclass("div_WF_PopBtn");
                p.divPopBtn.move("40","1130","100%","60",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
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
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
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
            obj = new Layout("default","Desktop_screen",1480,1150,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("현황도 이미지 관리");

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.move("20","10",null,null,"20","0");

                p.divGuide00.set_taborder("1");
                p.divGuide00.set_text("div00");
                p.divGuide00.set_visible("false");
                p.divGuide00.set_cssclass("div_GD_Tip");
                p.divGuide00.move("1600.00","145","450","385",null,null);

                p.RaonkUpload.set_taborder("2");
                p.RaonkUpload.set_DevelopLangage("JAVA");
                p.RaonkUpload.set_ExtensionAllowOrLimit("0");
                p.RaonkUpload.set_RunTimes("html5");
                p.RaonkUpload.set_ButtonBarView("0");
                p.RaonkUpload.set_visible("false");
                p.RaonkUpload.set_AllowDuplicationFile("1");
                p.RaonkUpload.set_text("");
                p.RaonkUpload.set_DisableDeleteConfirm("1");
                p.RaonkUpload.set_HandlerUrl("/common/uploadDownload.do");
                p.RaonkUpload.move("-796","0","49.46%","200",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",480,650,this,
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
            obj = new BindItem("item0","divForm.form.Div01.form.Combo01_03","value","dsGet","stsmapArea");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.Div01.form.Combo01_02","value","dsGet","stsmapTy");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.Div01.form.Combo01_02_00","value","dsGet","stsmapPstn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.Div01.form.edt00_00","value","dsGet","frstRegNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.Div01.form.edt00_00_00","value","dsGet","stsmapNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.Div01.form.divEdtPop.form.Edit00","value","dsGet","stsmapZip");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.Div01.form.edt00_00_00_01","value","dsGet","stsmapAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divForm.form.Div01.form.edt00_00_02","value","dsGet","stsmapDtlAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divForm.form.Div01.form.edt00_00_01","value","dsGet","stsmapBno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divForm.form.Div01.form.edt00_00_01_01","value","dsGet","stsmapFlr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divForm.form.Div01.form.txa05_01","value","dsGet","stsmapExpln");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divForm.form.Div01.form.Radio06_01","value","dsGet","useYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divForm.form.Div01.form.Combo01_02_00_00","value","dsGet","stsmapBldgNm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("COM018P01.xfdl", function() {
        /**
        *  인천공항 원스톱 입주자서비스 프로젝트
        *  @FileName 	COM018P01.xfdl
        *  @Creator 	(주)이루온
        *  @CreateDate 	2024/08/08
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/08/08				김완성						최초생성
        * 2024/12/31				조규완						디자인 수정
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
        			"stsmapId" : this.getOwnerFrame().stsmapId
        		}
        	} else
        	{
        		this.param = this.getOwnerFrame().form.fvObjArgs;
        	}

        	this.fnInit();
        };

        // 페이지에서 라온K업로드 솔루션의 생성 이벤트
        this.RaonkUpload00_RAONKUPLOAD_CreationComplete = function(obj,  paramObj)
        {
        	// 업로드 솔루션이 초기 생성시 업로드 할 경로를 지정해야 한다.
        	// /CMM/YYYY/MM/DD/  <<== CMM은 업무별 폴더 지정이고 기본적으로 /년도/월/일 의 폴더 구조를 갖는다.
        	this.RaonkUpload.SetConfig('FolderNameRule', '/CMM/YYYY/MM/DD/');
        };

        // 파일 업로드 시 에러 발생 이벤트
        this.divForm_Div04_RaonkUpload_RAONKUPLOAD_OnError = function(obj, paramObj)
        {
        	console.log(paramObj);
        };

        // 파일 추가 시 발생 이벤트
        // 파일 추가 시 타입을 정해야 한다.(사업자등록증, 증빙자료, 첨부파일, 등등)
        this.RaonkUpload00_RAONKUPLOAD_AfterAddAllFile = function(obj, paramObj)
        {
        	// 파일 카테고리 초기화
        	this.gvUploadCategory = "";
        };

        this.RaonkUpload_RAONKUPLOAD_BeforeAddFile = function(obj, paramObj)
        {
        	if(this.gvUploadCategory == 'atchFile')
        	{
        		if(this.dsFile1.rowcount >= 1)
        		{
        			this.gfnAlertMsg("beforeAddFile", "MSG_019", ["파일 1개만 업로드 가능 합니다."], "msgCallback");
        			return false;
        		}
        	}

        	return true;
        };

        this.RaonkUpload00_RAONKUPLOAD_AfterAddFile = function(obj, paramObj)
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
        	if(this.gvUploadCategory == "atchFile")
        	{
        		var nIdx = this.dsFile1.addRow();
        		this.dsFile1.setColumn(nIdx, "fullName", paramObj.userdata.strName + ' (' + paramObj.userdata.nSize + ')');
        		this.dsFile1.setColumn(nIdx, "orgnlFileNm", paramObj.userdata.strName);
        		this.dsFile1.setColumn(nIdx, "fileSz", paramObj.userdata.nSize);
        		this.dsFile1.setColumn(nIdx, "atflMngSno", paramObj.userdata.nIndex);
        		this.dsFile1.setColumn(nIdx, "colId", this.gvUploadCategory);
        		this.dsFile1.setColumn(nIdx, "atflMngNo", atflMngNo);
        	}
        };

        // 파일 업로드 완료 이벤트
        this.RaonkUpload00_RAONKUPLOAD_UploadComplete = function(obj, paramObj)
        {
        	var allListArray = this.RaonkUpload.GetListInfo("json");
        	// 파일 업로드 후 첨부파일관리번호를 얻기 위한 함수
        	this.gfnUploadComplete("uploadComplete", allListArray, "dsFile", "fnCallback");
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	//TODO..
        	var sWinId = this.objApp.gdsOpenMenu.lookupAs(this.FRAME_MENUCOLUMNS.menuId, this.getOwnerFrame().form.fvMenuId.substring(0, 14), this.FRAME_MENUCOLUMNS.winId);
         	var objForm = this.objApp.gvFrsWork.all[sWinId];
        	objForm.form.divWork.form.cfnSearch(1);
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
        /**
        	strSvcId 		// transaction을 구분하기 위한 svc id값
        	strSvcUrl 		// trabsaction을 요청할 주소
        	inData 			// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        	outData 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        	strArg 			// 입력값으로 보낼 arguments, strFormData="20120607"
        	callBackFnc 	// transaction의 결과를 받을 Function 이름
        	isAsync 		// 비동기통신 여부 [생략가능]
        **/

        // 데이터 조회
        this.selectTransaction = function()
        {
        	var strSvcId    = "select";
        	var strSvcUrl   = "stsmap/mapImgInfoInq.do";
        	var inData      = "";
        	var outData     = "dsGet=dsGet dsFile1=dsFile1 dsCombo1=dsCombo1 dsCombo2=dsCombo2 dsCombo3=dsCombo3";
        	var strArg      = "id=" + this.param.stsmapId;
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 공통 코드 조회
        this.selectCmmTransaction = function(id, ds, uprCd, stsTy, cdTypeId)
        {
        	var strSvcId    = id;
        	var strSvcUrl   = "stsmap/stsmapCmmCode.do";
        	var inData      = "";
        	var outData     = ds + "=dsCombo";
        	var strArg      = "comboTy=S stsTy="+stsTy+" uprCd="+uprCd+" cdTypeId=" + cdTypeId;
        	var callBackFnc = "fnCallback";
        	var isAsync   	= false;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 데이터 저장
        this.saveTransaction = function()
        {
        	var strSvcId    = "save";
        	var strSvcUrl   = "stsmap/mapImgInfoStrg.do";
        	var inData      = "dsGet=dsGet dsFile=dsFile";
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

        			this.dsFile.insertRow();
        			this.dsFile.setColumn(0, "atflMngNo", this.dsFile1.getColumn(0, "atflMngNo"));
        			this.dsFile.setColumn(0, "colId", this.dsFile1.getColumn(0, "colId"));

        			this.divForm.form.Div01.form.Static01_00.text = this.dsFile1.rowcount;

        			var stsmapTy = this.dsGet.getColumn(0, "stsmapTy");
        			if(stsmapTy == "01") {
        				this.divForm.form.Div01.form.pan00.visible = false;
        				this.divForm.form.Div01.form.pan04.visible = true;
        			} else {
        				this.divForm.form.Div01.form.pan00.visible = true;
        				this.divForm.form.Div01.form.pan04.visible = false;
        			}

        			break;

        		case "combo1":
        			this.divForm.form.Div01.form.Combo01_03.index = 0;
        			break;

        		case "combo2":
        			this.divForm.form.Div01.form.Combo01_02_00.index = 0;
        			break;

        		case "save":
        			var gvRetMsg = this.objApp.getVariable("gvRetMsg");
        			this.gfnAlertMsg("save", gvRetMsg, [], "msgCallback");
        			break;

        		case "uploadComplete":
        			// 파일 업로드가 완료 된 후 첨부파일 과 같이 데이터 저장
        			this.saveTransaction();
        			break;

        	}
        };

        this.msgCallback = function(sPopupId, sRtn)
        {
        	var oRtn = JSON.parse(sRtn);

        	if(sPopupId == "save_confirm") {
        		if(oRtn.result == "Y") {
        			var obj = {
        				"atchFileId" : "",			// 기존 첨부파일 있을 경우 입력
        				"bsnsSeCd" : "work",		// 업무구분코드
        				"prgrmId" : "COM018P01" 				// 프로그램ID (화면 ID)
        			}

        			var str = JSON.stringify(obj);
        			this.RaonkUpload.AddFormData('params', str);
        			this.RaonkUpload.Transfer();
        		}
        	} else if(sPopupId == "save") {
        		if(this.opener) {
        			this.close();
        		} else {
        			var cMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        			this.gfnCloseMenu(cMenuId);
        		}
        	} else if(sPopupId == "file_all_del1") {
        		this.gfnDeleteAllFile(this.RaonkUpload, this.dsFile1);
        	} else if(sPopupId == "file_del1") {
        		this.gfnDeleteFile(this.RaonkUpload, this.dsFile1, oRtn.paramArg);
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
        	if(this.param != null && this.param.stsmapId != null && this.param.stsmapId != '')
        	{
        		this.selectTransaction();
        	}

        	this.dsGet.setColumn(0, "frstRegId", this.objApp.gdsUser.getColumn(0, "userId"));
        	this.dsGet.setColumn(0, "frstRegNm", this.objApp.gdsUser.getColumn(0, "userNm"))
        }

        /*******************************************************************************************************************************
         * 각 RAONK 별 EVENT 영역
        *******************************************************************************************************************************/
        // 파일 추가
        this.divForm_Div04_btn_file_2_onclick = function(obj,e)
        {
        	this.gvUploadCategory = "atchFile";
        	console.log(this.gvUploadCategory);

        	this.RaonkUpload.OpenFileDialog();
        };

        // 파일 그리드 클릭 이벤트
        this.divForm_Div04_Grid00_oncellclick = function(obj,e)
        {

        	if(e.col == 1) 	// 삭제 버튼 클릭
        	{
        		var param = {
        			"row" : e.row,
        			"col" : e.col
        		};
        		this.gfnConfirmMsg("file_del1", "MSG_005", "msgCallback", ["확인", "취소"], ["Y", "N"], param);
        	} else if(e.col == 0) // 파일명 클릭
        	{
        		this.gfnSelectFile(this.RaonkUpload, this.dsFile1, e);
        	}
        };

        // 파일 그리드 더블클릭 이벤트
        this.divForm_Div04_Grid00_oncelldblclick = function(obj,e)
        {
        	if(e.col == 0) 	// 파일명을 더블클릭 시 다운로드
        	{
        		this.gfnDownloadFile(this.RaonkUpload, this.dsFile1, e);
        	}
        };

        this.divForm_Div04_Grid00_01_oncellclick = function(obj,e)
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
        		this.gfnSelectFile(this.RaonkUpload, this.dsFile2, e);
        	}
        };

        this.divForm_Div04_Grid00_01_oncelldblclick = function(obj,e)
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
        this.divForm_Div01_Combo01_02_onitemchanged = function(obj,e)
        {
        	this.selectCmmTransaction("combo1", "dsCombo1", "null", e.postvalue, "RGN_PSTN_SE");

        	if(e.postvalue == "02") {
        		this.divForm.form.Div01.form.pan00.visible = true;
        		this.divForm.form.Div01.form.pan04.visible = false;
        	} else {
        		this.divForm.form.Div01.form.pan00.visible = false;
        		this.divForm.form.Div01.form.pan04.visible = true;
        	}

        	this.divForm.form.Div01.form.Combo01_03.index = 0;
        	this.divForm.form.Div01.form.Combo01_02_00.index = 0;
        	this.divForm.form.Div01.form.Combo01_02_00_00.index = 0;
        	this.dsGet.setColumn(0, "stsmapBno", "");
        };

        this.divForm_Div01_Combo01_03_onitemchanged = function(obj,e)
        {
        	var stsTy = this.dsGet.getColumn(0, "stsmapTy");
        	var uprCd = this.dsGet.getColumn(0, "stsmapArea");
        	this.selectCmmTransaction("combo2", "dsCombo2", uprCd, stsTy, "RGN_PSTN_SE");

        	this.divForm.form.Div01.form.Combo01_02_00.index = 0;
        	this.divForm.form.Div01.form.Combo01_02_00_00.index = 0;
        	this.dsGet.setColumn(0, "stsmapBno", "");
        };

        this.divPopBtn_Button00_00_onclick = function(obj,e)
        {
        	this.gfnConfirmMsg("save_confirm", "MSG_020", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        };

        this.divForm_Div01_Combo01_02_00_onitemchanged = function(obj,e)
        {
        	var stsTy = this.dsGet.getColumn(0, "stsmapTy");
        	if(stsTy == "01") {
        		var uprCd = this.dsGet.getColumn(0, "stsmapPstn");
        		this.selectCmmTransaction("combo3", "dsCombo3", uprCd, "", "MVN_LIFE_BLDG");

        		this.divForm.form.Div01.form.Combo01_02_00_00.index = 0;
        		this.dsGet.setColumn(0, "stsmapBno", "");
        	}
        };

        this.divForm_Div01_Combo01_02_00_00_onitemchanged = function(obj,e)
        {
        	this.dsGet.setColumn(0, "stsmapBno", "1000-" + e.postvalue);
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
            this.divForm.form.Div01.form.Combo01_02.addEventHandler("onitemchanged",this.divForm_Div01_Combo01_02_onitemchanged,this);
            this.divForm.form.Div01.form.Combo01_03.addEventHandler("onitemchanged",this.divForm_Div01_Combo01_03_onitemchanged,this);
            this.divForm.form.Div01.form.Combo01_02_00.addEventHandler("onitemchanged",this.divForm_Div01_Combo01_02_00_onitemchanged,this);
            this.divForm.form.Div01.form.Combo01_02_00_00.addEventHandler("onitemchanged",this.divForm_Div01_Combo01_02_00_00_onitemchanged,this);
            this.divForm.form.Div01.form.Radio06_01.addEventHandler("onitemchanged",this.divForm_Div01_Radio06_01_onitemchanged,this);
            this.divForm.form.Div01.form.btn_file_2_00.addEventHandler("onclick",this.divForm_Div04_btn_file_2_onclick,this);
            this.divForm.form.Div01.form.btn_del_file_2.addEventHandler("onclick",this.divForm_Div04_btn_del_file_2_onclick,this);
            this.divForm.form.Div01.form.Grid00_01.addEventHandler("oncellclick",this.divForm_Div04_Grid00_01_oncellclick,this);
            this.divForm.form.Div01.form.Grid00_01.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_01_oncelldblclick,this);
            this.divForm.form.divPopBtn.form.Button00_00.addEventHandler("onclick",this.divPopBtn_Button00_00_onclick,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterAddFile",this.RaonkUpload00_RAONKUPLOAD_AfterAddFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_CreationComplete",this.RaonkUpload00_RAONKUPLOAD_CreationComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_UploadComplete",this.RaonkUpload00_RAONKUPLOAD_UploadComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_OnError",this.divForm_Div04_RaonkUpload_RAONKUPLOAD_OnError,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_BeforeAddFile",this.RaonkUpload_RAONKUPLOAD_BeforeAddFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterDeleteFile",this.RaonkUpload_RAONKUPLOAD_AfterDeleteFile,this);
        };
        this.loadIncludeScript("COM018P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
