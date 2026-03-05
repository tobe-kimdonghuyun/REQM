(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM012M01");
            this.set_titletext("알림 수신 조건 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGet", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userNm\" type=\"STRING\" size=\"256\"/><Column id=\"cndTy\" type=\"STRING\" size=\"256\"/><Column id=\"rfslBgngDt\" type=\"STRING\" size=\"256\"/><Column id=\"rfslEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"rfslBgngTmzn\" type=\"STRING\" size=\"256\"/><Column id=\"rfslEndTmzn\" type=\"STRING\" size=\"256\"/><Column id=\"refwEblcPrcsDt\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCndTy", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cdNm\">선택</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHour", this);
            obj._setContents("<ColumnInfo><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMinute", this);
            obj._setContents("<ColumnInfo><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDay", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divGuide","1590.00","135","450","385",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("false");
            obj.set_cssclass("div_GD_Tip");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","35.00","55","262","45",null,null,null,null,null,null,this.divGuide.form);
            obj.set_taborder("0");
            obj.set_text("기본정보");
            obj.set_cssclass("btn_WF_Quick");
            this.divGuide.addChild(obj.name, obj);

            obj = new Static("sta00","35.00","175","375","105",null,null,null,null,null,null,this.divGuide.form);
            obj.set_taborder("1");
            obj.set_text("선택했을때 class : btn_WF_Quick_S 적용");
            this.divGuide.addChild(obj.name, obj);

            obj = new Button("btn00_00","35.00","115","262","45",null,null,null,null,null,null,this.divGuide.form);
            obj.set_taborder("2");
            obj.set_text("기본정보");
            obj.set_cssclass("btn_WF_Quick_S");
            this.divGuide.addChild(obj.name, obj);

            obj = new Div("divForm","0","70",null,"464","60",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","0","100.00%","384",null,null,null,null,null,null,this.divForm.form);
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

            obj = new Static("staLabel00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("수신자명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtUserNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_01","10.00","98","400","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtUserNm\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("4");
            obj.set_text("조건구분");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_02","10.00","98","400","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"cmbCndTy\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel01_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("6");
            obj.set_text("거부일시");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan01_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("7");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_01\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan01","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("8");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan01_01\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("9");
            obj.set_text("거부시간대");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan02_","10.00","98","600","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("10");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("11");
            obj.set_text("미발송 일괄처리");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan02_02","10.00","98","600","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("12");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan02","0","60","100%","96",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("13");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan02_\"/><PanelItem id=\"PanelItem02\" componentid=\"pan02_02\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel01","20","238","250","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("20");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"cmbBgngTmznHour\"/><PanelItem id=\"PanelItem03\" componentid=\"staLabel03_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"cmbBgngTmznMinute\"/><PanelItem id=\"PanelItem04\" componentid=\"staLabel03_00_00_00\"/><PanelItem id=\"PanelItem05\" componentid=\"staLabel03_00_00_00_01\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel00","88","261","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("19");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("0");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel04_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("14");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan03_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("15");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel04_00\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoUseYn\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan03","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("16");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan03_01\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Combo("cmbCndTy","521.00","200","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("17");
            obj.set_flexgrow("1");
            obj.set_innerdataset("dsCndTy");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Radio("rdoUseYn","127","203","280","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("18");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divForm_form_Div00_form_rdoUseYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div00_form_rdoUseYn_innerdataset", obj);
            divForm_form_Div00_form_rdoUseYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div00_form_rdoUseYn_innerdataset);
            obj.set_text("계약선택");
            obj.set_value("0");
            obj.set_index("0");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Combo("cmbBgngTmznHour","521.00","200","80","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("21");
            obj.set_flexgrow("0");
            obj.set_innerdataset("dsHour");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Combo("cmbBgngTmznMinute","521.00","200","80","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("22");
            obj.set_flexgrow("0");
            obj.set_innerdataset("dsMinute");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_readonly("true");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00","10","98","20","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("23");
            obj.set_text("시");
            obj.set_fittocontents("none");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_00","10","98","20","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("24");
            obj.set_text("분");
            obj.set_fittocontents("none");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Combo("cmbEndTmznHour","521.00","200","80","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("25");
            obj.set_flexgrow("0");
            obj.set_innerdataset("dsHour");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_readonly("true");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_01","10","98","20","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("26");
            obj.set_text("시");
            obj.set_fittocontents("none");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Combo("cmbEndTmznMinute","521.00","200","80","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("27");
            obj.set_flexgrow("0");
            obj.set_innerdataset("dsMinute");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_readonly("true");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_00_00","10","98","20","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("28");
            obj.set_text("분");
            obj.set_fittocontents("none");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","326","238","230","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("29");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"cmbEndTmznHour\"/><PanelItem id=\"PanelItem03\" componentid=\"staLabel03_00_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"cmbEndTmznMinute\"/><PanelItem id=\"PanelItem04\" componentid=\"staLabel03_00_00_00_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_00_01","10","98","10","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("30");
            obj.set_text("~");
            obj.set_textAlign("center");
            obj.set_fittocontents("width");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel01_01","85","254","150","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("31");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"calPrcsDt\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Combo("cmbPrcsHour","521.00","200","80","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("32");
            obj.set_flexgrow("0");
            obj.set_innerdataset("dsHour");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_readonly("false");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_01_00","10","98","20","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("33");
            obj.set_text("시");
            obj.set_fittocontents("none");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Combo("cmbPrcsMinute","521.00","200","80","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("34");
            obj.set_flexgrow("0");
            obj.set_innerdataset("dsMinute");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_readonly("false");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_00_00_00","10","98","20","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("35");
            obj.set_text("분");
            obj.set_fittocontents("none");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00","85","254","256","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("36");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("width");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"cmbPrcsHour\"/><PanelItem id=\"PanelItem03\" componentid=\"staLabel03_00_00_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"cmbPrcsMinute\"/><PanelItem id=\"PanelItem04\" componentid=\"staLabel03_00_00_00_00_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","88","261","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("37");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Combo("cmbBgngHour","521.00","200","80","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("38");
            obj.set_flexgrow("0");
            obj.set_innerdataset("dsHour");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_readonly("true");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_02","10","98","20","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("39");
            obj.set_text("시");
            obj.set_fittocontents("none");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Combo("cmbBgngMinute","521.00","200","80","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("40");
            obj.set_flexgrow("0");
            obj.set_innerdataset("dsMinute");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_readonly("true");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_00_02","10","98","20","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("41");
            obj.set_text("분");
            obj.set_fittocontents("none");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel01_02","85","254","405","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("42");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("width");
            obj.set_flexgrow("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem05\" componentid=\"calBgngDt\"/><PanelItem id=\"PanelItem00\" componentid=\"cmbBgngHour\"/><PanelItem id=\"PanelItem03\" componentid=\"staLabel03_00_00_02\"/><PanelItem id=\"PanelItem02\" componentid=\"cmbBgngMinute\"/><PanelItem id=\"PanelItem04\" componentid=\"staLabel03_00_00_00_02\"/><PanelItem id=\"PanelItem06\" componentid=\"staLabel03_00_00_00_01_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_00_01_00","10","98","10","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("43");
            obj.set_text("~");
            obj.set_textAlign("center");
            obj.set_fittocontents("width");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Combo("cmbEndHour","521.00","200","80","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("44");
            obj.set_flexgrow("0");
            obj.set_innerdataset("dsHour");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_readonly("true");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_01_01","10","98","20","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("45");
            obj.set_text("시");
            obj.set_fittocontents("none");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Combo("cmbEndMinute","521.00","200","80","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("46");
            obj.set_flexgrow("0");
            obj.set_innerdataset("dsMinute");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_readonly("true");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_00_00_01","10","98","20","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("47");
            obj.set_text("분");
            obj.set_fittocontents("none");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_01","85","254","385","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("48");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("width");
            obj._setContents("<Contents><PanelItem id=\"PanelItem05\" componentid=\"calEndDt\"/><PanelItem id=\"PanelItem00\" componentid=\"cmbEndHour\"/><PanelItem id=\"PanelItem03\" componentid=\"staLabel03_00_00_01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"cmbEndMinute\"/><PanelItem id=\"PanelItem04\" componentid=\"staLabel03_00_00_00_00_01\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","88","261","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("49");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00_01\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Calendar("calBgngDt","180.00","0","145","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("50");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_flexgrow("0");
            obj.set_readonly("true");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Calendar("calEndDt","180.00","0","145","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("51");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_flexgrow("0");
            obj.set_readonly("true");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Calendar("calPrcsDt","180.00","0","145","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("52");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_flexgrow("0");
            obj.set_readonly("false");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Div("divPopBtn","0","620","100%","60",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnSave","457.00","30","68","40",null,null,null,null,null,null,this.divForm.form.divPopBtn.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_fittocontents("width");
            this.divForm.form.divPopBtn.addChild(obj.name, obj);

            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divGuide.form
            obj = new Layout("default","",0,0,this.divGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btn00.set_taborder("0");
                p.btn00.set_text("기본정보");
                p.btn00.set_cssclass("btn_WF_Quick");
                p.btn00.move("35.00","55","262","45",null,null);

                p.sta00.set_taborder("1");
                p.sta00.set_text("선택했을때 class : btn_WF_Quick_S 적용");
                p.sta00.move("35.00","175","375","105",null,null);

                p.btn00_00.set_taborder("2");
                p.btn00_00.set_text("기본정보");
                p.btn00_00.set_cssclass("btn_WF_Quick_S");
                p.btn00_00.move("35.00","115","262","45",null,null);
            	}
            );
            this.divGuide.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divGuide.form
            obj = new Layout("Layout0","",0,0,this.divGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divGuide.form.addLayout(obj.name, obj);
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

                p.staLabel00.set_taborder("1");
                p.staLabel00.set_text("수신자명");
                p.staLabel00.set_cssclass("sta_WF_Label");
                p.staLabel00.move("10","98","100%","46",null,null);

                p.edtUserNm.set_taborder("2");
                p.edtUserNm.set_readonly("true");
                p.edtUserNm.move("10.00","158","100%","40",null,null);

                p.pan00_01.set_taborder("3");
                p.pan00_01.set_type("vertical");
                p.pan00_01.set_flexgrow("1");
                p.pan00_01.set_minwidth("");
                p.pan00_01.move("10.00","98","400","86",null,null);

                p.staLabel00_01.set_taborder("4");
                p.staLabel00_01.set_text("조건구분");
                p.staLabel00_01.set_cssclass("sta_WF_Label");
                p.staLabel00_01.move("10","98","100%","46",null,null);

                p.pan00_02.set_taborder("5");
                p.pan00_02.set_type("vertical");
                p.pan00_02.set_flexgrow("1");
                p.pan00_02.set_minwidth("");
                p.pan00_02.move("10.00","98","400","86",null,null);

                p.staLabel01_00.set_taborder("6");
                p.staLabel01_00.set_text("거부일시");
                p.staLabel01_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00.move("10","98","100%","46",null,null);

                p.pan01_01.set_taborder("7");
                p.pan01_01.set_type("vertical");
                p.pan01_01.set_flexgrow("1");
                p.pan01_01.set_fittocontents("height");
                p.pan01_01.set_flexwrap("wrap");
                p.pan01_01.move("10.00","98","300","86",null,null);

                p.pan01.set_taborder("8");
                p.pan01.set_horizontalgap("20");
                p.pan01.set_flexcrossaxiswrapalign("start");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_verticalgap("0");
                p.pan01.set_spacing("0px 20px 10px 20px");
                p.pan01.set_cssclass("pal_WF_DtlBg");
                p.pan01.set_flexshrink("1");
                p.pan01.set_fittocontents("height");
                p.pan01.move("0","60","100.00%","96",null,null);

                p.staLabel03_00.set_taborder("9");
                p.staLabel03_00.set_text("거부시간대");
                p.staLabel03_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00.move("10","98","100%","46",null,null);

                p.pan02_.set_taborder("10");
                p.pan02_.set_type("vertical");
                p.pan02_.set_flexgrow("1");
                p.pan02_.set_fittocontents("height");
                p.pan02_.set_flexwrap("wrap");
                p.pan02_.move("10.00","98","600","86",null,null);

                p.staLabel03_01.set_taborder("11");
                p.staLabel03_01.set_text("미발송 일괄처리");
                p.staLabel03_01.set_cssclass("sta_WF_Label");
                p.staLabel03_01.move("10","98","100%","46",null,null);

                p.pan02_02.set_taborder("12");
                p.pan02_02.set_type("vertical");
                p.pan02_02.set_flexgrow("1");
                p.pan02_02.set_flexwrap("wrap");
                p.pan02_02.set_fittocontents("height");
                p.pan02_02.move("10.00","98","600","86",null,null);

                p.pan02.set_taborder("13");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.move("0","60","100%","96",null,null);

                p.Panel01.set_taborder("20");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.move("20","238","250","40",null,null);

                p.Panel00.set_taborder("19");
                p.Panel00.set_horizontalgap("10");
                p.Panel00.set_flexgrow("0");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_verticalgap("10");
                p.Panel00.move("88","261","100%","40",null,null);

                p.staLabel04_00.set_taborder("14");
                p.staLabel04_00.set_text("사용여부");
                p.staLabel04_00.set_cssclass("sta_WF_Label");
                p.staLabel04_00.move("10","98","100%","46",null,null);

                p.pan03_01.set_taborder("15");
                p.pan03_01.set_type("vertical");
                p.pan03_01.set_flexgrow("1");
                p.pan03_01.move("10.00","98","300","86",null,null);

                p.pan03.set_taborder("16");
                p.pan03.set_horizontalgap("20");
                p.pan03.set_flexcrossaxiswrapalign("start");
                p.pan03.set_flexwrap("wrap");
                p.pan03.set_fittocontents("height");
                p.pan03.set_verticalgap("0");
                p.pan03.set_spacing("0px 20px 10px 20px");
                p.pan03.set_cssclass("pal_WF_DtlBg");
                p.pan03.move("0","60","100.00%","96",null,null);

                p.cmbCndTy.set_taborder("17");
                p.cmbCndTy.set_flexgrow("1");
                p.cmbCndTy.set_innerdataset("dsCndTy");
                p.cmbCndTy.set_codecolumn("cdId");
                p.cmbCndTy.set_datacolumn("cdNm");
                p.cmbCndTy.set_text("선택");
                p.cmbCndTy.set_value("");
                p.cmbCndTy.set_index("-1");
                p.cmbCndTy.move("521.00","200","100%","40",null,null);

                p.rdoUseYn.set_taborder("18");
                p.rdoUseYn.set_fittocontents("width");
                p.rdoUseYn.set_innerdataset(divForm_form_Div00_form_rdoUseYn_innerdataset);
                p.rdoUseYn.set_codecolumn("codecolumn");
                p.rdoUseYn.set_datacolumn("datacolumn");
                p.rdoUseYn.set_direction("vertical");
                p.rdoUseYn.set_value("0");
                p.rdoUseYn.set_index("0");
                p.rdoUseYn.move("127","203","280","40",null,null);

                p.cmbBgngTmznHour.set_taborder("21");
                p.cmbBgngTmznHour.set_flexgrow("0");
                p.cmbBgngTmznHour.set_innerdataset("dsHour");
                p.cmbBgngTmznHour.set_codecolumn("cdId");
                p.cmbBgngTmznHour.set_datacolumn("cdNm");
                p.cmbBgngTmznHour.set_enable("true");
                p.cmbBgngTmznHour.set_readonly("true");
                p.cmbBgngTmznHour.set_text("선택");
                p.cmbBgngTmznHour.set_value("");
                p.cmbBgngTmznHour.set_index("-1");
                p.cmbBgngTmznHour.move("521.00","200","80","40",null,null);

                p.cmbBgngTmznMinute.set_taborder("22");
                p.cmbBgngTmznMinute.set_flexgrow("0");
                p.cmbBgngTmznMinute.set_innerdataset("dsMinute");
                p.cmbBgngTmznMinute.set_codecolumn("cdId");
                p.cmbBgngTmznMinute.set_datacolumn("cdNm");
                p.cmbBgngTmznMinute.set_readonly("true");
                p.cmbBgngTmznMinute.set_text("선택");
                p.cmbBgngTmznMinute.set_value("");
                p.cmbBgngTmznMinute.set_index("-1");
                p.cmbBgngTmznMinute.move("521.00","200","80","40",null,null);

                p.staLabel03_00_00.set_taborder("23");
                p.staLabel03_00_00.set_text("시");
                p.staLabel03_00_00.set_fittocontents("none");
                p.staLabel03_00_00.move("10","98","20","40",null,null);

                p.staLabel03_00_00_00.set_taborder("24");
                p.staLabel03_00_00_00.set_text("분");
                p.staLabel03_00_00_00.set_fittocontents("none");
                p.staLabel03_00_00_00.move("10","98","20","40",null,null);

                p.cmbEndTmznHour.set_taborder("25");
                p.cmbEndTmznHour.set_flexgrow("0");
                p.cmbEndTmznHour.set_innerdataset("dsHour");
                p.cmbEndTmznHour.set_codecolumn("cdId");
                p.cmbEndTmznHour.set_datacolumn("cdNm");
                p.cmbEndTmznHour.set_readonly("true");
                p.cmbEndTmznHour.set_text("선택");
                p.cmbEndTmznHour.set_value("");
                p.cmbEndTmznHour.set_index("-1");
                p.cmbEndTmznHour.move("521.00","200","80","40",null,null);

                p.staLabel03_00_00_01.set_taborder("26");
                p.staLabel03_00_00_01.set_text("시");
                p.staLabel03_00_00_01.set_fittocontents("none");
                p.staLabel03_00_00_01.move("10","98","20","40",null,null);

                p.cmbEndTmznMinute.set_taborder("27");
                p.cmbEndTmznMinute.set_flexgrow("0");
                p.cmbEndTmznMinute.set_innerdataset("dsMinute");
                p.cmbEndTmznMinute.set_codecolumn("cdId");
                p.cmbEndTmznMinute.set_datacolumn("cdNm");
                p.cmbEndTmznMinute.set_readonly("true");
                p.cmbEndTmznMinute.set_text("선택");
                p.cmbEndTmznMinute.set_value("");
                p.cmbEndTmznMinute.set_index("-1");
                p.cmbEndTmznMinute.move("521.00","200","80","40",null,null);

                p.staLabel03_00_00_00_00.set_taborder("28");
                p.staLabel03_00_00_00_00.set_text("분");
                p.staLabel03_00_00_00_00.set_fittocontents("none");
                p.staLabel03_00_00_00_00.move("10","98","20","40",null,null);

                p.Panel01_00.set_taborder("29");
                p.Panel01_00.set_horizontalgap("10");
                p.Panel01_00.move("326","238","230","40",null,null);

                p.staLabel03_00_00_00_01.set_taborder("30");
                p.staLabel03_00_00_00_01.set_text("~");
                p.staLabel03_00_00_00_01.set_textAlign("center");
                p.staLabel03_00_00_00_01.set_fittocontents("width");
                p.staLabel03_00_00_00_01.move("10","98","10","40",null,null);

                p.Panel01_01.set_taborder("31");
                p.Panel01_01.set_horizontalgap("10");
                p.Panel01_01.move("85","254","150","40",null,null);

                p.cmbPrcsHour.set_taborder("32");
                p.cmbPrcsHour.set_flexgrow("0");
                p.cmbPrcsHour.set_innerdataset("dsHour");
                p.cmbPrcsHour.set_codecolumn("cdId");
                p.cmbPrcsHour.set_datacolumn("cdNm");
                p.cmbPrcsHour.set_readonly("false");
                p.cmbPrcsHour.set_text("선택");
                p.cmbPrcsHour.set_value("");
                p.cmbPrcsHour.set_index("-1");
                p.cmbPrcsHour.move("521.00","200","80","40",null,null);

                p.staLabel03_00_00_01_00.set_taborder("33");
                p.staLabel03_00_00_01_00.set_text("시");
                p.staLabel03_00_00_01_00.set_fittocontents("none");
                p.staLabel03_00_00_01_00.move("10","98","20","40",null,null);

                p.cmbPrcsMinute.set_taborder("34");
                p.cmbPrcsMinute.set_flexgrow("0");
                p.cmbPrcsMinute.set_innerdataset("dsMinute");
                p.cmbPrcsMinute.set_codecolumn("cdId");
                p.cmbPrcsMinute.set_datacolumn("cdNm");
                p.cmbPrcsMinute.set_readonly("false");
                p.cmbPrcsMinute.set_text("선택");
                p.cmbPrcsMinute.set_value("");
                p.cmbPrcsMinute.set_index("-1");
                p.cmbPrcsMinute.move("521.00","200","80","40",null,null);

                p.staLabel03_00_00_00_00_00.set_taborder("35");
                p.staLabel03_00_00_00_00_00.set_text("분");
                p.staLabel03_00_00_00_00_00.set_fittocontents("none");
                p.staLabel03_00_00_00_00_00.move("10","98","20","40",null,null);

                p.Panel01_00_00.set_taborder("36");
                p.Panel01_00_00.set_horizontalgap("10");
                p.Panel01_00_00.set_fittocontents("width");
                p.Panel01_00_00.move("85","254","256","40",null,null);

                p.Panel00_00.set_taborder("37");
                p.Panel00_00.set_horizontalgap("10");
                p.Panel00_00.move("88","261","100%","40",null,null);

                p.cmbBgngHour.set_taborder("38");
                p.cmbBgngHour.set_flexgrow("0");
                p.cmbBgngHour.set_innerdataset("dsHour");
                p.cmbBgngHour.set_codecolumn("cdId");
                p.cmbBgngHour.set_datacolumn("cdNm");
                p.cmbBgngHour.set_readonly("true");
                p.cmbBgngHour.set_text("선택");
                p.cmbBgngHour.set_value("");
                p.cmbBgngHour.set_index("-1");
                p.cmbBgngHour.move("521.00","200","80","40",null,null);

                p.staLabel03_00_00_02.set_taborder("39");
                p.staLabel03_00_00_02.set_text("시");
                p.staLabel03_00_00_02.set_fittocontents("none");
                p.staLabel03_00_00_02.move("10","98","20","40",null,null);

                p.cmbBgngMinute.set_taborder("40");
                p.cmbBgngMinute.set_flexgrow("0");
                p.cmbBgngMinute.set_innerdataset("dsMinute");
                p.cmbBgngMinute.set_codecolumn("cdId");
                p.cmbBgngMinute.set_datacolumn("cdNm");
                p.cmbBgngMinute.set_readonly("true");
                p.cmbBgngMinute.set_text("선택");
                p.cmbBgngMinute.set_value("");
                p.cmbBgngMinute.set_index("-1");
                p.cmbBgngMinute.move("521.00","200","80","40",null,null);

                p.staLabel03_00_00_00_02.set_taborder("41");
                p.staLabel03_00_00_00_02.set_text("분");
                p.staLabel03_00_00_00_02.set_fittocontents("none");
                p.staLabel03_00_00_00_02.move("10","98","20","40",null,null);

                p.Panel01_02.set_taborder("42");
                p.Panel01_02.set_horizontalgap("10");
                p.Panel01_02.set_fittocontents("width");
                p.Panel01_02.set_flexgrow("0");
                p.Panel01_02.move("85","254","405","40",null,null);

                p.staLabel03_00_00_00_01_00.set_taborder("43");
                p.staLabel03_00_00_00_01_00.set_text("~");
                p.staLabel03_00_00_00_01_00.set_textAlign("center");
                p.staLabel03_00_00_00_01_00.set_fittocontents("width");
                p.staLabel03_00_00_00_01_00.move("10","98","10","40",null,null);

                p.cmbEndHour.set_taborder("44");
                p.cmbEndHour.set_flexgrow("0");
                p.cmbEndHour.set_innerdataset("dsHour");
                p.cmbEndHour.set_codecolumn("cdId");
                p.cmbEndHour.set_datacolumn("cdNm");
                p.cmbEndHour.set_readonly("true");
                p.cmbEndHour.set_text("선택");
                p.cmbEndHour.set_value("");
                p.cmbEndHour.set_index("-1");
                p.cmbEndHour.move("521.00","200","80","40",null,null);

                p.staLabel03_00_00_01_01.set_taborder("45");
                p.staLabel03_00_00_01_01.set_text("시");
                p.staLabel03_00_00_01_01.set_fittocontents("none");
                p.staLabel03_00_00_01_01.move("10","98","20","40",null,null);

                p.cmbEndMinute.set_taborder("46");
                p.cmbEndMinute.set_flexgrow("0");
                p.cmbEndMinute.set_innerdataset("dsMinute");
                p.cmbEndMinute.set_codecolumn("cdId");
                p.cmbEndMinute.set_datacolumn("cdNm");
                p.cmbEndMinute.set_readonly("true");
                p.cmbEndMinute.set_text("선택");
                p.cmbEndMinute.set_value("");
                p.cmbEndMinute.set_index("-1");
                p.cmbEndMinute.move("521.00","200","80","40",null,null);

                p.staLabel03_00_00_00_00_01.set_taborder("47");
                p.staLabel03_00_00_00_00_01.set_text("분");
                p.staLabel03_00_00_00_00_01.set_fittocontents("none");
                p.staLabel03_00_00_00_00_01.move("10","98","20","40",null,null);

                p.Panel01_00_01.set_taborder("48");
                p.Panel01_00_01.set_horizontalgap("10");
                p.Panel01_00_01.set_fittocontents("width");
                p.Panel01_00_01.move("85","254","385","40",null,null);

                p.Panel00_01.set_taborder("49");
                p.Panel00_01.set_horizontalgap("10");
                p.Panel00_01.set_flexwrap("wrap");
                p.Panel00_01.set_fittocontents("height");
                p.Panel00_01.set_verticalgap("10");
                p.Panel00_01.move("88","261","100%","40",null,null);

                p.calBgngDt.set_taborder("50");
                p.calBgngDt.set_dateformat("yyyy-MM-dd");
                p.calBgngDt.set_flexgrow("0");
                p.calBgngDt.set_readonly("true");
                p.calBgngDt.move("180.00","0","145","40",null,null);

                p.calEndDt.set_taborder("51");
                p.calEndDt.set_dateformat("yyyy-MM-dd");
                p.calEndDt.set_flexgrow("0");
                p.calEndDt.set_readonly("true");
                p.calEndDt.move("180.00","0","145","40",null,null);

                p.calPrcsDt.set_taborder("52");
                p.calPrcsDt.set_dateformat("yyyy-MM-dd");
                p.calPrcsDt.set_flexgrow("0");
                p.calPrcsDt.set_readonly("false");
                p.calPrcsDt.move("180.00","0","145","40",null,null);
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
                p.pan00.move("0","60","100.00%","183",null,null);

                p.Panel00_01.move("88","261","100%","90",null,null);

                p.pan01_01.move("10.00","98","100%","136",null,null);

                p.pan01.move("0","60","100.00%","147",null,null);

                p.pan02.move("0","60","100.00%","233",null,null);

                p.pan02_.move("10.00","98","100%","136",null,null);

                p.Panel00.move("88","261","100%","90",null,null);

                p.Panel00_00.set_flexwrap("nowrap");
                p.Panel00_00.set_verticalgap("10");
                p.Panel00_00.move("88","261","100%","40",null,null);

                p.pan02_02.move("10.00","98","100%","86",null,null);

                p.Panel01.set_fittocontents("width");
                p.Panel01.move("20","238","250","40",null,null);

                p.Panel01_00.set_fittocontents("width");
                p.Panel01_00.move("326","238","230","40",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divPopBtn.form
            obj = new Layout("default","",0,0,this.divForm.form.divPopBtn.form,
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
            obj.set_horizontalgap("20");
            this.divForm.form.divPopBtn.form.addLayout(obj.name, obj);
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
                p.Div00.move("0","0","100.00%","384",null,null);

                p.divPopBtn.set_taborder("1");
                p.divPopBtn.set_text("Div00");
                p.divPopBtn.set_cssclass("div_WF_PopBtn");
                p.divPopBtn.move("0","620","100%","60",null,null);
            	}
            );
            obj.set_verticalgap("20");
            obj.set_type("vertical");
            this.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form
            obj = new Layout("Layout0","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Div00.move("0","0","100%","659",null,null);
            	}
            );
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_verticalgap("10");
            obj.set_type("vertical");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divTitle
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1480,600,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("알림 수신 조건 관리");

                p.divGuide.set_taborder("0");
                p.divGuide.set_text("div00");
                p.divGuide.set_visible("false");
                p.divGuide.set_cssclass("div_GD_Tip");
                p.divGuide.move("1590.00","135","450","385",null,null);

                p.divForm.set_taborder("1");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_fittocontents("height");
                p.divForm.set_formscrollbartype("none none");
                p.divForm.set_formscrolltype("none");
                p.divForm.move("0","70",null,"464","60",null);

                p.divTitle.set_taborder("2");
                p.divTitle.set_text("");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.set_formscrolltype("none");
                p.divTitle.set_maxwidth("");
                p.divTitle.move("0","0",null,"50","60",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Phone_screen",480,600,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divTitle.move("0","0",null,"50","0",null);

                p.divForm.move("0","70",null,"799","0",null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divTitle.form.divSch.form.divCal.form.calBgngYmd","value","dsSearch","sDate");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divTitle.form.divSch.form.divCal.form.calEndYmd","value","dsSearch","eDate");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divTitle.form.divSch.form.edtCtrtNo","value","dsSearch","ctrtNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divTitle.form.divSch.form.edtBrno","value","dsSearch","brno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divTitle.form.divSch.form.edtCtrtNm","value","dsSearch","ctrtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divTitle.form.divSch.form.edtCoNm","value","dsSearch","coNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divTitle.form.divSch.form.cmbMnlMngSeMnl","value","dsSearch","autoMnlRegSe");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divTitle.form.divGrd.form.staTotal01","text","dsPage","totalRecordCount");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divForm.form.Div00.form.edtUserNm","value","dsGet","userNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divForm.form.Div00.form.cmbCndTy","value","dsGet","cndTy");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divForm.form.Div00.form.rdoUseYn","value","dsGet","useYn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
        };
        
        // User Script
        this.registerScript("COM012M01.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	COM012M01.xfdl
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
        this.userId;
        this.userNm;

        this.validateColumn = [];

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수
        	this.fnInit();

        	this.validateColumn.push({"title" : "조건구분", "com": this.divForm.form.Div00.form.cmbCndTy});

        	this.userId = this.objApp.gdsUser.getColumn(0, "userId");
        	this.userNm = this.objApp.gdsUser.getColumn(0, "userNm");
        	this.cfnSearch();
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

        };

        //삭제
        this.cfnDel = function ()
        {
        	//TODO..
        };

        //저장
        this.cfnSave = function ()
        {
        // 	if(this.gfnDsIsUpdated(this.dsGet) != true) {
        // 		this.gfnAlertMsg("msg", "MSG_004");
        // 	} else {
        		if(this.gfnDsIsValidated(this.validateColumn)) {
        			this.gfnConfirmMsg("save", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        		}
        // 	}
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.getSearchTransaction = function()
        {
        	var strSvcId    = "search";
        	var strSvcUrl   = "sysMng/notiRcptnCndInq.do";
        	var inData      = "";
        	var outData     = "dsGet=dsGet";
        	var strArg      = "id=" + this.userId;
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
        	var strSvcUrl   = "sysMng/notiRcptnCndStrg.do";
        	var inData      = "dsGet=dsGet:A";
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
        		case "search" :
        			if(this.dsGet.getRowCount() > 0) {
        				// 거부일시 시작
        				var rfslBgngDt = this.dsGet.getColumn(0, "rfslBgngDt");
        				if(this.gfnIsNull(rfslBgngDt) != true) {
        					var day = rfslBgngDt.substr(0, 8);
        					var hour = rfslBgngDt.substr(8, 2);
        					var minute = rfslBgngDt.substr(10, 2);
        					this.divForm.form.Div00.form.calBgngDt.value = day;
        					this.divForm.form.Div00.form.cmbBgngHour.value = hour;
        					this.divForm.form.Div00.form.cmbBgngMinute.value = minute;
        				}

        				// 거부일시 종료
        				var rfslEndDt = this.dsGet.getColumn(0, "rfslEndDt");
        				if(this.gfnIsNull(rfslBgngDt) != true) {
        					var day = rfslEndDt.substr(0, 8);
        					var hour = rfslEndDt.substr(8, 2);
        					var minute = rfslEndDt.substr(10, 2);
        					this.divForm.form.Div00.form.calEndDt.value = day;
        					this.divForm.form.Div00.form.cmbEndHour.value = hour;
        					this.divForm.form.Div00.form.cmbEndMinute.value = minute;
        				}

        				// 거부시간대 시작
        				var rfslBgngTmzn = this.dsGet.getColumn(0, "rfslBgngTmzn");
        				if(this.gfnIsNull(rfslBgngTmzn) != true) {
        					var hour = rfslBgngTmzn.substr(0, 2);
        					var minute = rfslBgngTmzn.substr(2, 2);
        					this.divForm.form.Div00.form.cmbBgngTmznHour.value = hour;
        					this.divForm.form.Div00.form.cmbBgngTmznMinute.value = minute;
        				}

        				// 거부시간대 종료
        				var rfslEndTmzn = this.dsGet.getColumn(0, "rfslEndTmzn");
        				if(this.gfnIsNull(rfslEndTmzn) != true) {
        					var hour = rfslEndTmzn.substr(0, 2);
        					var minute = rfslEndTmzn.substr(2, 2);
        					this.divForm.form.Div00.form.cmbEndTmznHour.value = hour;
        					this.divForm.form.Div00.form.cmbEndTmznMinute.value = minute;
        				}

        				// 미발송
        				var refwEblcPrcsDt = this.dsGet.getColumn(0, "refwEblcPrcsDt");
        				if(this.gfnIsNull(refwEblcPrcsDt) != true) {
        					var day = refwEblcPrcsDt.substr(0, 8);
        					var hour = refwEblcPrcsDt.substr(8, 2);
        					var minute = refwEblcPrcsDt.substr(10, 2);
        					this.divForm.form.Div00.form.calPrcsDt.value = day;
        					this.divForm.form.Div00.form.cmbPrcsHour.value = hour;
        					this.divForm.form.Div00.form.cmbPrcsMinute.value = minute;
        				}

        				this.fnSetComp(this.dsGet.getColumn(0, "cndTy"), "");
        			} else {
        				var nRow = this.dsGet.addRow();
        				this.dsGet.setColumn(0, "userId", this.userId);
        				this.dsGet.setColumn(0, "userNm", this.userNm);
        				this.dsGet.setColumn(0, "useYn", "Y");

        				this.divForm.form.Div00.form.calBgngDt.value = this.gfnGetDate("date");
        				this.divForm.form.Div00.form.calEndDt.value = this.gfnGetDate("date");
        				this.divForm.form.Div00.form.calPrcsDt.value = this.gfnGetDate("date");
        			}
        			break;
        		case "save" :
        			this.gfnAlertMsg("save", "MSG_001", "", "msgCallback");
        			this.cfnSearch();
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
        	if(sPopupId == "save") {
        		if(oRtn.result == "Y")
        		{
        			// 거부일시 시작
        			var sDay = this.divForm.form.Div00.form.calBgngDt.value;
        			var sHour = this.divForm.form.Div00.form.cmbBgngHour.value;
        			var sMinute = this.divForm.form.Div00.form.cmbBgngMinute.value;
        			if(this.gfnIsNull(sDay) != true && this.gfnIsNull(sHour) != true && this.gfnIsNull(sMinute) != true) {
        				this.dsGet.setColumn(0, "rfslBgngDt", sDay + sHour + sMinute + "00");
        			} else {
        				this.dsGet.setColumn(0, "rfslBgngDt", "");
        			}

        			// 거부일시 종료
        			var eDay = this.divForm.form.Div00.form.calEndDt.value;
        			var eHour = this.divForm.form.Div00.form.cmbEndHour.value;
        			var eMinute = this.divForm.form.Div00.form.cmbEndMinute.value;
        			if(this.gfnIsNull(eDay) != true && this.gfnIsNull(eHour) != true && this.gfnIsNull(eMinute) != true) {
        				this.dsGet.setColumn(0, "rfslEndDt", eDay + eHour + eMinute + "00");
        			} else {
        				this.dsGet.setColumn(0, "rfslEndDt", "");
        			}

        			// 거부시간대 시작
        			var sTmznHour = this.divForm.form.Div00.form.cmbBgngTmznHour.value;
        			var sTmznMinute = this.divForm.form.Div00.form.cmbBgngTmznMinute.value;
        			if(this.gfnIsNull(sTmznHour) != true && this.gfnIsNull(sTmznMinute) != true) {
        				this.dsGet.setColumn(0, "rfslBgngTmzn", sTmznHour + sTmznMinute + "00");
        			} else {
        				this.dsGet.setColumn(0, "rfslBgngTmzn", "");
        			}

        			// 거부시간대 종료
        			var eTmznHour = this.divForm.form.Div00.form.cmbEndTmznHour.value;
        			var eTmznMinute = this.divForm.form.Div00.form.cmbEndTmznMinute.value;
        			if(this.gfnIsNull(eTmznHour) != true && this.gfnIsNull(eTmznMinute) != true) {
        				this.dsGet.setColumn(0, "rfslEndTmzn", eTmznHour + eTmznMinute + "00");
        			} else {
        				this.dsGet.setColumn(0, "rfslEndTmzn", "");
        			}

        			// 거부일시 종료
        			var day = this.divForm.form.Div00.form.calPrcsDt.value;
        			var hour = this.divForm.form.Div00.form.cmbPrcsHour.value;
        			var minute = this.divForm.form.Div00.form.cmbPrcsMinute.value;
        			if(this.gfnIsNull(day) != true && this.gfnIsNull(hour) != true && this.gfnIsNull(minute) != true) {
        				this.dsGet.setColumn(0, "refwEblcPrcsDt", day + hour + minute + "00");
        			} else {
        				this.dsGet.setColumn(0, "refwEblcPrcsDt", "");
        			}

        			this.saveTransaction();
        		}
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	this.gfnCmmCode("cndTy", "dsCndTy", "CND_TY", "S");
        	this.divForm.form.Div00.form.cmbCndTy.index = 0;

        	// 시간
        	var nRow = this.dsHour.addRow();
        	this.dsHour.setColumn(0, "cdId", "");
        	this.dsHour.setColumn(0, "cdNm", "선택");
        	for(var i=0; i<24; i++) {
        		var nRow = this.dsHour.addRow();
        		this.dsHour.setColumn(nRow, "cdId", this.gfnLPad(i + 1, "0", 2));
        		this.dsHour.setColumn(nRow, "cdNm", this.gfnLPad(i + 1, "0", 2));
        	}
        	this.divForm.form.Div00.form.cmbBgngHour.index = 0;
        	this.divForm.form.Div00.form.cmbEndHour.index = 0;
        	this.divForm.form.Div00.form.cmbBgngTmznHour.index = 0;
        	this.divForm.form.Div00.form.cmbEndTmznHour.index = 0;
        	this.divForm.form.Div00.form.cmbPrcsHour.index = 0;

        	// 분
        	var nRow = this.dsMinute.addRow();
        	this.dsMinute.setColumn(0, "cdId", "");
        	this.dsMinute.setColumn(0, "cdNm", "선택");
        	for(var i=0; i<60; i++) {
        		var nRow = this.dsMinute.addRow();
        		this.dsMinute.setColumn(nRow, "cdId", this.gfnLPad(i, "0", 2));
        		this.dsMinute.setColumn(nRow, "cdNm", this.gfnLPad(i, "0", 2));
        	}
        	this.divForm.form.Div00.form.cmbBgngMinute.index = 0;
        	this.divForm.form.Div00.form.cmbEndMinute.index = 0;
        	this.divForm.form.Div00.form.cmbBgngTmznMinute.index = 0;
        	this.divForm.form.Div00.form.cmbEndTmznMinute.index = 0;
        	this.divForm.form.Div00.form.cmbPrcsMinute.index = 0;
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divForm_divPopBtn_btnSave_onclick = function(obj,e)
        {
        	this.cfnSave();
        };

        this.divForm_Div00_cmbCndTy_onitemchanged = function(obj,e)
        {
        	this.fnSetComp(e.postvalue, "chg");
        };

        this.fnSetComp = function(val, gbn)
        {
        	// 전체거절
        	if(val == "N") {
        		this.divForm.form.Div00.form.calBgngDt.readonly = true;
        		this.divForm.form.Div00.form.cmbBgngHour.readonly = true;
        		this.divForm.form.Div00.form.cmbBgngMinute.readonly = true;
        		this.divForm.form.Div00.form.calEndDt.readonly = true;
        		this.divForm.form.Div00.form.cmbEndHour.readonly = true;
        		this.divForm.form.Div00.form.cmbEndMinute.readonly = true;
        		this.divForm.form.Div00.form.cmbBgngTmznHour.readonly = true;
        		this.divForm.form.Div00.form.cmbBgngTmznMinute.readonly = true;
        		this.divForm.form.Div00.form.cmbEndTmznHour.readonly = true;
        		this.divForm.form.Div00.form.cmbEndTmznMinute.readonly = true;
        	}
        	// 기간
        	else if(val == "D") {
        		this.divForm.form.Div00.form.calBgngDt.readonly = false;
        		this.divForm.form.Div00.form.cmbBgngHour.readonly = false;
        		this.divForm.form.Div00.form.cmbBgngMinute.readonly = false;
        		this.divForm.form.Div00.form.calEndDt.readonly = false;
        		this.divForm.form.Div00.form.cmbEndHour.readonly = false;
        		this.divForm.form.Div00.form.cmbEndMinute.readonly = false;
        		this.divForm.form.Div00.form.cmbBgngTmznHour.readonly = true;
        		this.divForm.form.Div00.form.cmbBgngTmznMinute.readonly = true;
        		this.divForm.form.Div00.form.cmbEndTmznHour.readonly = true;
        		this.divForm.form.Div00.form.cmbEndTmznMinute.readonly = true;
        	}
        	// 시간
        	else if(val == "H") {
        		this.divForm.form.Div00.form.calBgngDt.readonly = true;
        		this.divForm.form.Div00.form.cmbBgngHour.readonly = true;
        		this.divForm.form.Div00.form.cmbBgngMinute.readonly = true;
        		this.divForm.form.Div00.form.calEndDt.readonly = true;
        		this.divForm.form.Div00.form.cmbEndHour.readonly = true;
        		this.divForm.form.Div00.form.cmbEndMinute.readonly = true;
        		this.divForm.form.Div00.form.cmbBgngTmznHour.readonly = false;
        		this.divForm.form.Div00.form.cmbBgngTmznMinute.readonly = false;
        		this.divForm.form.Div00.form.cmbEndTmznHour.readonly = false;
        		this.divForm.form.Div00.form.cmbEndTmznMinute.readonly = false;
        	}

        	if(gbn == "chg") {
        		this.divForm.form.Div00.form.calBgngDt.value = "";
        		this.divForm.form.Div00.form.cmbBgngHour.value = "";
        		this.divForm.form.Div00.form.cmbBgngMinute.value = "";
        		this.divForm.form.Div00.form.calEndDt.value = "";
        		this.divForm.form.Div00.form.cmbEndHour.value = "";
        		this.divForm.form.Div00.form.cmbEndMinute.value = "";
        		this.divForm.form.Div00.form.cmbBgngTmznHour.value = "";
        		this.divForm.form.Div00.form.cmbBgngTmznMinute.value = "";
        		this.divForm.form.Div00.form.cmbEndTmznHour.value = "";
        		this.divForm.form.Div00.form.cmbEndTmznMinute.value = "";
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.Div00.form.cmbCndTy.addEventHandler("onitemchanged",this.divForm_Div00_cmbCndTy_onitemchanged,this);
            this.divForm.form.Div00.form.cmbBgngTmznHour.addEventHandler("onitemchanged",this.divForm_divSch_Combo01_onitemchanged,this);
            this.divForm.form.Div00.form.cmbBgngTmznMinute.addEventHandler("onitemchanged",this.divForm_divSch_Combo01_onitemchanged,this);
            this.divForm.form.Div00.form.cmbEndTmznHour.addEventHandler("onitemchanged",this.divForm_divSch_Combo01_onitemchanged,this);
            this.divForm.form.Div00.form.cmbEndTmznMinute.addEventHandler("onitemchanged",this.divForm_divSch_Combo01_onitemchanged,this);
            this.divForm.form.Div00.form.cmbPrcsHour.addEventHandler("onitemchanged",this.divForm_divSch_Combo01_onitemchanged,this);
            this.divForm.form.Div00.form.cmbPrcsMinute.addEventHandler("onitemchanged",this.divForm_divSch_Combo01_onitemchanged,this);
            this.divForm.form.Div00.form.cmbBgngHour.addEventHandler("onitemchanged",this.divForm_divSch_Combo01_onitemchanged,this);
            this.divForm.form.Div00.form.cmbBgngMinute.addEventHandler("onitemchanged",this.divForm_divSch_Combo01_onitemchanged,this);
            this.divForm.form.Div00.form.cmbEndHour.addEventHandler("onitemchanged",this.divForm_divSch_Combo01_onitemchanged,this);
            this.divForm.form.Div00.form.cmbEndMinute.addEventHandler("onitemchanged",this.divForm_divSch_Combo01_onitemchanged,this);
            this.divForm.form.divPopBtn.form.btnSave.addEventHandler("onclick",this.divForm_divPopBtn_btnSave_onclick,this);
        };
        this.loadIncludeScript("COM012M01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
