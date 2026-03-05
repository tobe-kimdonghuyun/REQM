(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM031P21");
            this.set_titletext("기준정보관리 등록/수정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo1", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo_Area", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo_Pstn", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo_Stsmap", this);
            obj._setContents("<ColumnInfo><Column id=\"stsmapId\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch_Stsmap", this);
            obj._setContents("<ColumnInfo><Column id=\"stsmapTy\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapArea\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapPstn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"rownum\" type=\"STRING\" size=\"256\"/><Column id=\"STATS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"CO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_SE\" type=\"STRING\" size=\"256\"/><Column id=\"ST13_SE\" type=\"STRING\" size=\"256\"/><Column id=\"ST01_SE\" type=\"STRING\" size=\"256\"/><Column id=\"ST02_SE\" type=\"STRING\" size=\"256\"/><Column id=\"ST05_SE1\" type=\"STRING\" size=\"256\"/><Column id=\"ST05_SE2\" type=\"STRING\" size=\"256\"/><Column id=\"ST10_SE\" type=\"STRING\" size=\"256\"/><Column id=\"ST11_SE1\" type=\"STRING\" size=\"256\"/><Column id=\"ST11_SE2\" type=\"STRING\" size=\"256\"/><Column id=\"ST20_SE\" type=\"STRING\" size=\"256\"/><Column id=\"ST14_SE\" type=\"STRING\" size=\"256\"/><Column id=\"ST12_SE\" type=\"STRING\" size=\"256\"/><Column id=\"ST18_SE\" type=\"STRING\" size=\"256\"/><Column id=\"ST19_SE\" type=\"STRING\" size=\"256\"/><Column id=\"ST15_SE\" type=\"STRING\" size=\"256\"/><Column id=\"ST16_SE1\" type=\"STRING\" size=\"256\"/><Column id=\"ST16_SE2\" type=\"STRING\" size=\"256\"/><Column id=\"ST16_SE3\" type=\"STRING\" size=\"256\"/><Column id=\"ST16_SE4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"rownum\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsColumnList", this);
            obj._setContents("<ColumnInfo><Column id=\"column\" type=\"STRING\" size=\"256\"/><Column id=\"column_name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTitle","0","0",null,"48","60",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divForm","0","divTitle:20",null,"1057","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("divSchForm","0","0","100.00%","510",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divSch","0","0","100.00%","510",null,null,null,null,null,null,this.divForm.form.divSchForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.divForm.form.divSchForm.addChild(obj.name, obj);

            obj = new Panel("panLabel","20","14","100%","510",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("0");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("14px 20px 14px 20px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("40");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem17\" componentid=\"pan11_03\"/><PanelItem id=\"PanelItem03\" componentid=\"pan02\"/><PanelItem id=\"PanelItem04\" componentid=\"pan03\"/><PanelItem id=\"PanelItem01\" componentid=\"pan04\"/><PanelItem id=\"PanelItem06\" componentid=\"pan05\"/><PanelItem id=\"PanelItem05\" componentid=\"pan06\"/><PanelItem id=\"PanelItem00\" componentid=\"ST13_SE\"/><PanelItem id=\"PanelItem07\" componentid=\"ST01_SE\"/><PanelItem id=\"PanelItem08\" componentid=\"ST02_SE\"/><PanelItem id=\"PanelItem14\" componentid=\"ST05_SE1\"/><PanelItem id=\"PanelItem13\" componentid=\"ST05_SE2\"/><PanelItem id=\"PanelItem16\" componentid=\"ST10_SE\"/><PanelItem id=\"PanelItem15\" componentid=\"ST11_SE1\"/><PanelItem id=\"PanelItem09\" componentid=\"ST11_SE2\"/><PanelItem id=\"PanelItem20\" componentid=\"ST20_SE\"/><PanelItem id=\"PanelItem19\" componentid=\"ST14_SE\"/><PanelItem id=\"PanelItem25\" componentid=\"ST12_SE\"/><PanelItem id=\"PanelItem24\" componentid=\"ST18_SE\"/><PanelItem id=\"PanelItem23\" componentid=\"ST19_SE\"/><PanelItem id=\"PanelItem22\" componentid=\"ST15_SE\"/><PanelItem id=\"PanelItem21\" componentid=\"ST16_SE1\"/><PanelItem id=\"PanelItem10\" componentid=\"ST16_SE2\"/><PanelItem id=\"PanelItem02\" componentid=\"ST16_SE3\"/><PanelItem id=\"PanelItem26\" componentid=\"ST16_SE4\"/><PanelItem id=\"PanelItem12\" componentid=\"pan12\"/></Contents>");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("ST16_SE3","20.00","67","360","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("72");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("nowrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staLabel03_06_00\"/><PanelItem id=\"PanelItem01\" componentid=\"cbo00_05_00\"/></Contents>");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("ST13_SE","20.00","67","360","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("1");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("nowrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staLabel03\"/><PanelItem id=\"PanelItem01\" componentid=\"cbo00_06_03\"/></Contents>");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel03","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("2");
            obj.set_text("도면상태");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cbo00","200.00","128","100%","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsCombo");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_displaynulltext("선택");
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel03_00","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("4");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cbo00_00","200.00","128","100%","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("5");
            obj.set_displaynulltext("선택");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_divSchForm_form_divSch_form_cbo00_00_innerdataset = new nexacro.NormalDataset("divForm_form_divSchForm_form_divSch_form_cbo00_00_innerdataset", obj);
            divForm_form_divSchForm_form_divSch_form_cbo00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"datacolumn\">접수</Col><Col id=\"codecolumn\">01</Col></Row><Row><Col id=\"datacolumn\">처리</Col><Col id=\"codecolumn\">02</Col></Row><Row><Col id=\"datacolumn\">완료</Col><Col id=\"codecolumn\">03</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_divSchForm_form_divSch_form_cbo00_00_innerdataset);
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan02","20.00","67","360","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("6");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("nowrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staLabel03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"cbo00_00\"/></Contents>");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel03_01","20.00","20","100","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("7");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divEdtPop00","130.00","20","100%","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("8");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("Edit00","0","0","100%","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form.divEdtPop00.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            this.divForm.form.divSchForm.form.divSch.form.divEdtPop00.addChild(obj.name, obj);

            obj = new Button("btnPop",null,"0","40","40","0",null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form.divEdtPop00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            this.divForm.form.divSchForm.form.divSch.form.divEdtPop00.addChild(obj.name, obj);

            obj = new Panel("pan03","953.00","0","360","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("9");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staLabel03_01\"/><PanelItem id=\"PanelItem03\" componentid=\"divEdtPop00\"/></Contents>");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel04","30","30","100","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("10");
            obj.set_text("기간");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("DivCal","110.00","0","100%","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("11");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","0","0","100%","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form.DivCal.form);
            obj.set_taborder("0");
            this.divForm.form.divSchForm.form.divSch.form.DivCal.addChild(obj.name, obj);

            obj = new Static("StaticDash","Calendar00:10","0","10","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form.DivCal.form);
            obj.set_taborder("1");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_Dash");
            obj.set_flexshrink("0");
            this.divForm.form.divSchForm.form.divSch.form.DivCal.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","StaticDash:10","0","100%","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form.DivCal.form);
            obj.set_taborder("2");
            this.divForm.form.divSchForm.form.divSch.form.DivCal.addChild(obj.name, obj);

            obj = new Panel("pan04","0","48","360","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("12");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staLabel04\"/><PanelItem id=\"PanelItem02\" componentid=\"DivCal\"/></Contents>");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00","20.00","20","100","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("13");
            obj.set_text("사용자명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divEdtPop00_00","130.00","20","100%","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("14");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("Edit00","0","0","100%","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form.divEdtPop00_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            this.divForm.form.divSchForm.form.divSch.form.divEdtPop00_00.addChild(obj.name, obj);

            obj = new Button("btnPop",null,"0","40","40","0",null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form.divEdtPop00_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            this.divForm.form.divSchForm.form.divSch.form.divEdtPop00_00.addChild(obj.name, obj);

            obj = new Panel("pan05","953.00","0","360","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("15");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staLabel03_01_00\"/><PanelItem id=\"PanelItem03\" componentid=\"divEdtPop00_00\"/></Contents>");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel03_02","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("16");
            obj.set_text("사용자구분");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cbo00_01","200.00","128","100%","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("17");
            obj.set_innerdataset("dsCombo1");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_displaynulltext("선택");
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan06","20.00","67","360","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("18");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("nowrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staLabel03_02\"/><PanelItem id=\"PanelItem01\" componentid=\"cbo00_01\"/></Contents>");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel03_03","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("19");
            obj.set_text("임대가능여부");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cbo00_02","200.00","128","100%","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("20");
            obj.set_displaynulltext("선택");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_divSchForm_form_divSch_form_cbo00_02_innerdataset = new nexacro.NormalDataset("divForm_form_divSchForm_form_divSch_form_cbo00_02_innerdataset", obj);
            divForm_form_divSchForm_form_divSch_form_cbo00_02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"datacolumn\">가능</Col><Col id=\"codecolumn\">Y</Col></Row><Row><Col id=\"datacolumn\">불가능</Col><Col id=\"codecolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_divSchForm_form_divSch_form_cbo00_02_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("ST01_SE","20.00","67","360","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("21");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("nowrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staLabel03_03\"/><PanelItem id=\"PanelItem01\" componentid=\"cbo00_02\"/></Contents>");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel03_04","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("22");
            obj.set_text("계약유형");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cbo00_03","200.00","128","100%","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("23");
            obj.set_innerdataset("ds_cbo");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_displaynulltext("선택");
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("ST02_SE","20.00","67","360","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("24");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("nowrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staLabel03_04\"/><PanelItem id=\"PanelItem01\" componentid=\"cbo00_03\"/></Contents>");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel03_05","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("25");
            obj.set_text("처리현황");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cbo00_04","200.00","128","100%","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("26");
            obj.set_innerdataset("ds_cbo");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_displaynulltext("선택");
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("ST11_SE2","20.00","67","360","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("27");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("nowrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staLabel03_05\"/><PanelItem id=\"PanelItem01\" componentid=\"cbo00_04\"/></Contents>");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel03_06","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("28");
            obj.set_text("현황도지역");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cbo00_05","200.00","128","100%","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("29");
            obj.set_innerdataset("dsCombo_Area");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_displaynulltext("선택");
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("ST16_SE2","20.00","67","360","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("30");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("nowrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staLabel03_06\"/><PanelItem id=\"PanelItem01\" componentid=\"cbo00_05\"/></Contents>");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan12","20.00","67","360","1",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("31");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("nowrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("Button00","1347.00","0","40","40",null,null,"40",null,"40",null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("32");
            obj.set_text("");
            obj.set_cssclass("btn_WF_ACPlus");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel00","1358.00","0","59","310",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("33");
            obj.set_cssclass("pal_WF_SchFilterSBg");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00\"/></Contents>");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel03_07_00","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("34");
            obj.set_text("공사종류");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cbo00_06_00","200.00","128","100%","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("35");
            obj.set_innerdataset("ds_cbo");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_displaynulltext("선택");
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("ST05_SE2","20.00","67","360","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("36");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("nowrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staLabel03_07_00\"/><PanelItem id=\"PanelItem01\" componentid=\"cbo00_06_00\"/></Contents>");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel03_07_01","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("37");
            obj.set_text("화재위반여부");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cbo00_06_01","200.00","128","100%","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("38");
            obj.set_displaynulltext("선택");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_divSchForm_form_divSch_form_cbo00_06_01_innerdataset = new nexacro.NormalDataset("divForm_form_divSchForm_form_divSch_form_cbo00_06_01_innerdataset", obj);
            divForm_form_divSchForm_form_divSch_form_cbo00_06_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"datacolumn\">위반</Col><Col id=\"codecolumn\">Y</Col></Row><Row><Col id=\"datacolumn\">미위반</Col><Col id=\"codecolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_divSchForm_form_divSch_form_cbo00_06_01_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("ST05_SE1","20.00","67","360","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("39");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("nowrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staLabel03_07_01\"/><PanelItem id=\"PanelItem01\" componentid=\"cbo00_06_01\"/></Contents>");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel03_07_02","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("40");
            obj.set_text("작업구분");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cbo00_06_02","200.00","128","100%","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("41");
            obj.set_innerdataset("ds_cbo");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_displaynulltext("선택");
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("ST11_SE1","20.00","67","360","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("42");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("nowrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staLabel03_07_02\"/><PanelItem id=\"PanelItem01\" componentid=\"cbo00_06_02\"/></Contents>");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel03_07_02_00","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("43");
            obj.set_text("위해물품현황");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cbo00_06_02_00","200.00","128","100%","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("44");
            obj.set_displaynulltext("선택");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_divSchForm_form_divSch_form_cbo00_06_02_00_innerdataset = new nexacro.NormalDataset("divForm_form_divSchForm_form_divSch_form_cbo00_06_02_00_innerdataset", obj);
            divForm_form_divSchForm_form_divSch_form_cbo00_06_02_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"datacolumn\">신청</Col></Row><Row><Col id=\"datacolumn\">허가</Col></Row><Row><Col id=\"datacolumn\">불가</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_divSchForm_form_divSch_form_cbo00_06_02_00_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("ST10_SE","20.00","67","360","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("45");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("nowrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staLabel03_07_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"cbo00_06_02_00\"/></Contents>");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel03_07_03","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("46");
            obj.set_text("통계분류");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cbo00_06_03","200.00","128","100%","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("47");
            obj.set_innerdataset("ds_cbo");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_displaynulltext("선택");
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan11_03","20.00","67","360","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("48");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("nowrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staLabel03_07_03\"/><PanelItem id=\"PanelItem02\" componentid=\"cbo00\"/></Contents>");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel03_07_03_00_00","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("49");
            obj.set_text("미디어상태");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cbo00_06_03_00_00","200.00","128","100%","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("50");
            obj.set_displaynulltext("선택");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_divSchForm_form_divSch_form_cbo00_06_03_00_00_innerdataset = new nexacro.NormalDataset("divForm_form_divSchForm_form_divSch_form_cbo00_06_03_00_00_innerdataset", obj);
            divForm_form_divSchForm_form_divSch_form_cbo00_06_03_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"datacolumn\">신청</Col></Row><Row><Col id=\"datacolumn\">종료</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_divSchForm_form_divSch_form_cbo00_06_03_00_00_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("ST14_SE","20.00","67","360","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("51");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("nowrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staLabel03_07_03_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"cbo00_06_03_00_00\"/></Contents>");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel03_07_03_00_01","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("52");
            obj.set_text("정기권상태");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cbo00_06_03_00_01","200.00","128","100%","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("53");
            obj.set_displaynulltext("선택");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_divSchForm_form_divSch_form_cbo00_06_03_00_01_innerdataset = new nexacro.NormalDataset("divForm_form_divSchForm_form_divSch_form_cbo00_06_03_00_01_innerdataset", obj);
            divForm_form_divSchForm_form_divSch_form_cbo00_06_03_00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"datacolumn\">신청</Col></Row><Row><Col id=\"datacolumn\">사용중</Col></Row><Row><Col id=\"datacolumn\">만료</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_divSchForm_form_divSch_form_cbo00_06_03_00_01_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("ST20_SE","20.00","67","360","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("54");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("nowrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staLabel03_07_03_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"cbo00_06_03_00_01\"/></Contents>");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel03_07_03_00_01_00","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("55");
            obj.set_text("현황도유형");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cbo00_06_03_00_01_00","200.00","128","100%","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("56");
            obj.set_displaynulltext("선택");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_divSchForm_form_divSch_form_cbo00_06_03_00_01_00_innerdataset = new nexacro.NormalDataset("divForm_form_divSchForm_form_divSch_form_cbo00_06_03_00_01_00_innerdataset", obj);
            divForm_form_divSchForm_form_divSch_form_cbo00_06_03_00_01_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"datacolumn\">건물</Col><Col id=\"codecolumn\">01</Col></Row><Row><Col id=\"datacolumn\">토지</Col><Col id=\"codecolumn\">02</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_divSchForm_form_divSch_form_cbo00_06_03_00_01_00_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("ST16_SE1","20.00","67","360","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("57");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("nowrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staLabel03_07_03_00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"cbo00_06_03_00_01_00\"/></Contents>");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("la1","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("58");
            obj.set_text("전동차상태");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cbo00_06_03_00_01_00_00","200.00","128","100%","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("59");
            obj.set_displaynulltext("선택");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_divSchForm_form_divSch_form_cbo00_06_03_00_01_00_00_innerdataset = new nexacro.NormalDataset("divForm_form_divSchForm_form_divSch_form_cbo00_06_03_00_01_00_00_innerdataset", obj);
            divForm_form_divSchForm_form_divSch_form_cbo00_06_03_00_01_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"datacolumn\">신청</Col></Row><Row><Col id=\"datacolumn\">허가</Col></Row><Row><Col id=\"datacolumn\">불가</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_divSchForm_form_divSch_form_cbo00_06_03_00_01_00_00_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("ST15_SE","20.00","67","360","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("60");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("nowrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"la1\"/><PanelItem id=\"PanelItem01\" componentid=\"cbo00_06_03_00_01_00_00\"/></Contents>");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("la2","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("61");
            obj.set_text("청렴신문고상태");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cbo00_06_03_00_02","200.00","128","100%","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("62");
            obj.set_displaynulltext("선택");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_divSchForm_form_divSch_form_cbo00_06_03_00_02_innerdataset = new nexacro.NormalDataset("divForm_form_divSchForm_form_divSch_form_cbo00_06_03_00_02_innerdataset", obj);
            divForm_form_divSchForm_form_divSch_form_cbo00_06_03_00_02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"datacolumn\">등록</Col></Row><Row><Col id=\"datacolumn\">접수</Col></Row><Row><Col id=\"datacolumn\">처리</Col></Row><Row><Col id=\"datacolumn\">완료</Col></Row><Row><Col id=\"datacolumn\">삭제</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_divSchForm_form_divSch_form_cbo00_06_03_00_02_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("ST19_SE","20.00","67","360","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("63");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("nowrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"la2\"/><PanelItem id=\"PanelItem01\" componentid=\"cbo00_06_03_00_02\"/></Contents>");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel03_07_03_00_02_00","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("64");
            obj.set_text("계정상태");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cbo00_06_03_00_02_00","200.00","128","100%","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("65");
            obj.set_displaynulltext("선택");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_divSchForm_form_divSch_form_cbo00_06_03_00_02_00_innerdataset = new nexacro.NormalDataset("divForm_form_divSchForm_form_divSch_form_cbo00_06_03_00_02_00_innerdataset", obj);
            divForm_form_divSchForm_form_divSch_form_cbo00_06_03_00_02_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"datacolumn\">등록</Col></Row><Row><Col id=\"datacolumn\">수정</Col></Row><Row><Col id=\"datacolumn\">삭제</Col></Row><Row><Col id=\"datacolumn\">승인</Col></Row><Row><Col id=\"datacolumn\">반려</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_divSchForm_form_divSch_form_cbo00_06_03_00_02_00_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("ST18_SE","20.00","67","360","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("66");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("nowrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staLabel03_07_03_00_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"cbo00_06_03_00_02_00\"/></Contents>");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel03_07_03_00_03","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("67");
            obj.set_text("열쇠현황");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cbo00_06_03_00_03","200.00","128","100%","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("68");
            obj.set_displaynulltext("선택");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_divSchForm_form_divSch_form_cbo00_06_03_00_03_innerdataset = new nexacro.NormalDataset("divForm_form_divSchForm_form_divSch_form_cbo00_06_03_00_03_innerdataset", obj);
            divForm_form_divSchForm_form_divSch_form_cbo00_06_03_00_03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"datacolumn\">신청</Col></Row><Row><Col id=\"datacolumn\">수리</Col></Row><Row><Col id=\"datacolumn\">대여</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_divSchForm_form_divSch_form_cbo00_06_03_00_03_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("ST12_SE","20.00","67","360","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("69");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("nowrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staLabel03_07_03_00_03\"/><PanelItem id=\"PanelItem01\" componentid=\"cbo00_06_03_00_03\"/></Contents>");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel03_06_00","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("70");
            obj.set_text("현황도위치");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cbo00_05_00","200.00","128","100%","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("71");
            obj.set_innerdataset("dsCombo_Pstn");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_displaynulltext("선택");
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel03_06_00_00","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("73");
            obj.set_text("현황도");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cbo00_05_00_00","200.00","128","100%","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("74");
            obj.set_innerdataset("dsCombo_Stsmap");
            obj.set_codecolumn("stsmapId");
            obj.set_datacolumn("stsmapNm");
            obj.set_displaynulltext("선택");
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("ST16_SE4","20.00","67","360","40",null,null,null,null,null,null,this.divForm.form.divSchForm.form.divSch.form);
            obj.set_taborder("75");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("nowrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staLabel03_06_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"cbo00_05_00_00\"/></Contents>");
            this.divForm.form.divSchForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divGrd","0","divSchForm:54","100.00%","820",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_visible("true");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn","870","0","100%","50",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem04\" componentid=\"btnGrdAdd01\"/><PanelItem id=\"PanelItem03\" componentid=\"btnGrdAdd02\"/><PanelItem id=\"PanelItem02\" componentid=\"btnGrdAdd03\"/><PanelItem id=\"PanelItem01\" componentid=\"btnGrdAdd04\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdAdd03","1068.00","0","47","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdAdd04","1078.00","10","70","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdAdd02","1068.00","0","47","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdAdd01","1068.00","0","47","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("4");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Div("Div01","60","86","50.00%","760",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("5");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Div("Div00","0","0","100%","760",null,null,null,null,null,null,this.divForm.form.divGrd.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.divForm.form.divGrd.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","0","100%","50",null,null,null,null,null,null,this.divForm.form.divGrd.form.Div01.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("분석항목(행,열)");
            obj.set_cssclass("sta_WF_TreeTitle");
            this.divForm.form.divGrd.form.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","0","0","100%","50",null,null,null,null,null,null,this.divForm.form.divGrd.form.Div01.form.Div00.form);
            obj.set_taborder("1");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_02\"/></Contents>");
            this.divForm.form.divGrd.form.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Grid("grd03","0.00","40","100%","458",null,null,null,null,null,null,this.divForm.form.divGrd.form.Div01.form.Div00.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsColumnList");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeuseimage("false");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseexpandkey("false");
            obj.set_treeusebutton("use");
            obj.set_treeuseline("true");
            obj.set_treeasynctoggle("false");
            obj.set_cssclass("grd_WF_Tree");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"250\"/></Columns><Rows><Row size=\"44\"/></Rows><Band id=\"body\"><Cell text=\"bind:업무분류\" displaytype=\"imagecontrol\" edittype=\"none\" cssclass=\"CellDragIco\"/><Cell col=\"1\" text=\"bind:column_name\"/></Band></Format></Formats>");
            this.divForm.form.divGrd.form.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","0","100%","500",null,null,null,null,null,null,this.divForm.form.divGrd.form.Div01.form.Div00.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_cssclass("pan_WF_Tree");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Panel00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"grd03\"/></Contents>");
            this.divForm.form.divGrd.form.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","100%","50",null,null,null,null,null,null,this.divForm.form.divGrd.form.Div01.form.Div00.form);
            obj.set_taborder("4");
            obj.set_text("측정값");
            obj.set_cssclass("sta_WF_TreeTitle");
            this.divForm.form.divGrd.form.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Grid("grd03_00","0","40","100%","200",null,null,null,null,null,null,this.divForm.form.divGrd.form.Div01.form.Div00.form);
            obj.set_taborder("5");
            obj.set_binddataset("ds00");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeuseimage("false");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseexpandkey("false");
            obj.set_treeusebutton("use");
            obj.set_treeuseline("true");
            obj.set_treeasynctoggle("false");
            obj.set_cssclass("grd_WF_Tree");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"250\"/></Columns><Rows><Row size=\"48\"/></Rows><Band id=\"body\"><Cell text=\"bind:업무분류\" displaytype=\"imagecontrol\" edittype=\"button\" cssclass=\"CellDragIco\"/><Cell col=\"1\" text=\"bind:업체기관명\"/></Band></Format></Formats>");
            this.divForm.form.divGrd.form.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","0","0","100.00%","250",null,null,null,null,null,null,this.divForm.form.divGrd.form.Div01.form.Div00.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_cssclass("pan_WF_Tree");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Static00\"/><PanelItem id=\"PanelItem00\" componentid=\"grd03_00\"/></Contents>");
            this.divForm.form.divGrd.form.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00","209.00","26","47","34",null,null,null,null,null,null,this.divForm.form.divGrd.form.Div01.form.Div00.form);
            obj.set_taborder("7");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_TreeTitleClose");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.form.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_02","921","517","100%","50",null,null,null,null,null,null,this.divForm.form.divGrd.form.Div01.form.Div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("pal_WF_TreeTitleBtn");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_spacing("0px 20px 0px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_00\"/></Contents>");
            this.divForm.form.divGrd.form.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","810","0","100%","760",null,null,null,null,null,null,this.divForm.form.divGrd.form.Div01.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            this.divForm.form.divGrd.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_01","0","0","100%","245",null,null,null,null,null,null,this.divForm.form.divGrd.form.Div01.form.Div01.form);
            obj.set_taborder("0");
            obj.set_type("vertical");
            obj.set_cssclass("pan_WF_Tree");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Panel00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"grd01_01\"/></Contents>");
            this.divForm.form.divGrd.form.Div01.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","0","0","100%","50",null,null,null,null,null,null,this.divForm.form.divGrd.form.Div01.form.Div01.form);
            obj.set_taborder("1");
            obj.set_text("데이터항목(열)");
            obj.set_cssclass("sta_WF_TreeTitle");
            this.divForm.form.divGrd.form.Div01.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00","355","0","100%","245",null,null,null,null,null,null,this.divForm.form.divGrd.form.Div01.form.Div01.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_cssclass("pan_WF_Tree");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Static01_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"grd01_01_00\"/></Contents>");
            this.divForm.form.divGrd.form.Div01.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","0","0","100%","50",null,null,null,null,null,null,this.divForm.form.divGrd.form.Div01.form.Div01.form);
            obj.set_taborder("3");
            obj.set_text("측정값");
            obj.set_cssclass("sta_WF_TreeTitle");
            this.divForm.form.divGrd.form.Div01.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00","355","0","100%","250",null,null,null,null,null,null,this.divForm.form.divGrd.form.Div01.form.Div01.form);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj.set_cssclass("pan_WF_Tree");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Static01_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"grd01_01_01\"/></Contents>");
            this.divForm.form.divGrd.form.Div01.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","0","100%","50",null,null,null,null,null,null,this.divForm.form.divGrd.form.Div01.form.Div01.form);
            obj.set_taborder("5");
            obj.set_text("분석항목(행)");
            obj.set_cssclass("sta_WF_TreeTitle");
            this.divForm.form.divGrd.form.Div01.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","0","0","100%","50",null,null,null,null,null,null,this.divForm.form.divGrd.form.Div01.form.Div01.form);
            obj.set_taborder("6");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel00_02\"/></Contents>");
            this.divForm.form.divGrd.form.Div01.form.Div01.addChild(obj.name, obj);

            obj = new Grid("grd01_01","0","39","100%","200",null,null,null,null,null,null,this.divForm.form.divGrd.form.Div01.form.Div01.form);
            obj.set_taborder("7");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeuseimage("false");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseexpandkey("false");
            obj.set_treeusebutton("use");
            obj.set_treeuseline("true");
            obj.set_treeasynctoggle("false");
            obj.set_cssclass("grd_WF_Tree");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"250\"/><Column size=\"50\"/></Columns><Rows><Row size=\"44\"/></Rows><Band id=\"body\"><Cell text=\"bind:Column0\" displaytype=\"buttoncontrol\" edittype=\"button\" cssclass=\"CellSortDown\"/><Cell col=\"1\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"2\" displaytype=\"buttoncontrol\" edittype=\"button\" cssclass=\"CellDownArrow\"/></Band></Format></Formats>");
            this.divForm.form.divGrd.form.Div01.form.Div01.addChild(obj.name, obj);

            obj = new Grid("grd01_01_00","0","39","100%","200",null,null,null,null,null,null,this.divForm.form.divGrd.form.Div01.form.Div01.form);
            obj.set_taborder("8");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeuseimage("false");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseexpandkey("false");
            obj.set_treeusebutton("use");
            obj.set_treeuseline("true");
            obj.set_treeasynctoggle("false");
            obj.set_cssclass("grd_WF_Tree");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"250\"/></Columns><Rows><Row size=\"44\"/></Rows><Band id=\"body\"><Cell text=\"bind:Column0\" displaytype=\"buttoncontrol\" edittype=\"button\" cssclass=\"CellSortUp\"/><Cell col=\"1\" text=\"bind:Column1\" displaytype=\"editcontrol\" edittype=\"normal\" expandshow=\"show\" expandsize=\"40\" expandimage=\"url(&apos;theme://images/btn_WF_Down.svg&apos;)\"/></Band></Format></Formats>");
            this.divForm.form.divGrd.form.Div01.form.Div01.addChild(obj.name, obj);

            obj = new Grid("grd01_01_01","0","39","100%","200",null,null,null,null,null,null,this.divForm.form.divGrd.form.Div01.form.Div01.form);
            obj.set_taborder("9");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeuseimage("false");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseexpandkey("false");
            obj.set_treeusebutton("use");
            obj.set_treeuseline("true");
            obj.set_treeasynctoggle("false");
            obj.set_cssclass("grd_WF_Tree");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"250\"/></Columns><Rows><Row size=\"44\"/></Rows><Band id=\"body\"><Cell text=\"bind:Column0\" displaytype=\"buttoncontrol\" edittype=\"button\" cssclass=\"CellSortDown\"/><Cell col=\"1\" text=\"bind:Column1\" displaytype=\"editcontrol\" edittype=\"normal\" expandshow=\"show\" expandsize=\"40\" expandimage=\"url(&apos;theme://images/btn_WF_Down.svg&apos;)\"/></Band></Format></Formats>");
            this.divForm.form.divGrd.form.Div01.form.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00","209.00","26","47","34",null,null,null,null,null,null,this.divForm.form.divGrd.form.Div01.form.Div01.form);
            obj.set_taborder("10");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_TreeTitleClose");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.form.Div01.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel00_02","921","517","100%","50",null,null,null,null,null,null,this.divForm.form.divGrd.form.Div01.form.Div01.form);
            obj.set_taborder("11");
            obj.set_cssclass("pal_WF_TreeTitleBtn");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_spacing("0px 20px 0px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_00\"/></Contents>");
            this.divForm.form.divGrd.form.Div01.form.Div01.addChild(obj.name, obj);

            obj = new Div("divPopBtn","0","divForm:20",null,"60","60",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","457.00","30","100","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("0");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_fittocontents("width");
            this.divPopBtn.addChild(obj.name, obj);

            obj = new Div("divGuide","1590.00","135","450","385",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div00");
            obj.set_visible("false");
            obj.set_cssclass("div_GD_Tip");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","20.00","26","40","40",null,null,null,null,null,null,this.divGuide.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("btn_WF_ACPlus");
            this.divGuide.addChild(obj.name, obj);

            obj = new Button("Button00_00","70.00","26","40","40",null,null,null,null,null,null,this.divGuide.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divGuide.addChild(obj.name, obj);

            obj = new PopupMenu("PopupMenu00","20.00","87","167","120",null,null,null,null,null,null,this.divGuide.form);
            obj.set_innerdataset("ds_menu");
            obj.set_idcolumn("idx");
            obj.set_captioncolumn("Caption");
            obj.set_levelcolumn("lev");
            obj.set_userdatacolumn("UserData");
            obj.set_enablecolumn("enable");
            this.divGuide.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTitle
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.divSchForm.form.divSch.form.divEdtPop00.form
            obj = new Layout("default","",0,0,this.divForm.form.divSchForm.form.divSch.form.divEdtPop00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Edit00.set_taborder("0");
                p.Edit00.set_cssclass("edt_WF_EdtSch");
                p.Edit00.move("0","0","100%","40",null,null);

                p.btnPop.set_taborder("1");
                p.btnPop.set_cssclass("btn_WF_EdtSch");
                p.btnPop.move(null,"0","40","40","0",null);
            	}
            );
            this.divForm.form.divSchForm.form.divSch.form.divEdtPop00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divSchForm.form.divSch.form.divEdtPop00.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divSchForm.form.divSch.form.divEdtPop00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.divSchForm.form.divSch.form.divEdtPop00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divSchForm.form.divSch.form.DivCal.form
            obj = new Layout("default","",0,0,this.divForm.form.divSchForm.form.divSch.form.DivCal.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Calendar00.set_taborder("0");
                p.Calendar00.move("0","0","100%","40",null,null);

                p.StaticDash.set_taborder("1");
                p.StaticDash.set_text("~");
                p.StaticDash.set_cssclass("sta_WF_Dash");
                p.StaticDash.set_flexshrink("0");
                p.StaticDash.move("Calendar00:10","0","10","40",null,null);

                p.Calendar01.set_taborder("2");
                p.Calendar01.move("StaticDash:10","0","100%","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            this.divForm.form.divSchForm.form.divSch.form.DivCal.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divSchForm.form.divSch.form.DivCal.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divSchForm.form.divSch.form.DivCal.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            this.divForm.form.divSchForm.form.divSch.form.DivCal.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divSchForm.form.divSch.form.DivCal.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divSchForm.form.divSch.form.DivCal.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            this.divForm.form.divSchForm.form.divSch.form.DivCal.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divSchForm.form.divSch.form.divEdtPop00_00.form
            obj = new Layout("default","",0,0,this.divForm.form.divSchForm.form.divSch.form.divEdtPop00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Edit00.set_taborder("0");
                p.Edit00.set_cssclass("edt_WF_EdtSch");
                p.Edit00.move("0","0","100%","40",null,null);

                p.btnPop.set_taborder("1");
                p.btnPop.set_cssclass("btn_WF_EdtSch");
                p.btnPop.move(null,"0","40","40","0",null);
            	}
            );
            this.divForm.form.divSchForm.form.divSch.form.divEdtPop00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divSchForm.form.divSch.form.divEdtPop00_00.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divSchForm.form.divSch.form.divEdtPop00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.divSchForm.form.divSch.form.divEdtPop00_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divSchForm.form.divSch.form
            obj = new Layout("default","",0,0,this.divForm.form.divSchForm.form.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panLabel.set_taborder("0");
                p.panLabel.set_verticalgap("8");
                p.panLabel.set_flexwrap("wrap");
                p.panLabel.set_spacing("14px 20px 14px 20px");
                p.panLabel.set_type("horizontal");
                p.panLabel.set_flexcrossaxisalign("start");
                p.panLabel.set_horizontalgap("40");
                p.panLabel.set_fittocontents("height");
                p.panLabel.set_maxheight("");
                p.panLabel.move("20","14","100%","510",null,null);

                p.ST16_SE3.set_taborder("72");
                p.ST16_SE3.set_type("horizontal");
                p.ST16_SE3.set_horizontalgap("10");
                p.ST16_SE3.set_flexwrap("nowrap");
                p.ST16_SE3.set_fittocontents("height");
                p.ST16_SE3.set_flexgrow("1");
                p.ST16_SE3.set_visible("false");
                p.ST16_SE3.set_minwidth("");
                p.ST16_SE3.move("20.00","67","360","40",null,null);

                p.ST13_SE.set_taborder("1");
                p.ST13_SE.set_type("horizontal");
                p.ST13_SE.set_horizontalgap("10");
                p.ST13_SE.set_flexwrap("nowrap");
                p.ST13_SE.set_fittocontents("height");
                p.ST13_SE.set_flexgrow("1");
                p.ST13_SE.set_visible("false");
                p.ST13_SE.set_minwidth("");
                p.ST13_SE.move("20.00","67","360","40",null,null);

                p.staLabel03.set_taborder("2");
                p.staLabel03.set_text("도면상태");
                p.staLabel03.set_cssclass("sta_WF_SchLabel");
                p.staLabel03.set_flexshrink("0");
                p.staLabel03.set_maxwidth("");
                p.staLabel03.move("0","0","100","40",null,null);

                p.cbo00.set_taborder("3");
                p.cbo00.set_innerdataset("dsCombo");
                p.cbo00.set_codecolumn("cdId");
                p.cbo00.set_datacolumn("cdNm");
                p.cbo00.set_displaynulltext("선택");
                p.cbo00.set_text("");
                p.cbo00.set_index("-1");
                p.cbo00.move("200.00","128","100%","40",null,null);

                p.staLabel03_00.set_taborder("4");
                p.staLabel03_00.set_text("상태");
                p.staLabel03_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel03_00.set_flexshrink("0");
                p.staLabel03_00.set_maxwidth("");
                p.staLabel03_00.move("0","0","100","40",null,null);

                p.cbo00_00.set_taborder("5");
                p.cbo00_00.set_displaynulltext("선택");
                p.cbo00_00.set_innerdataset(divForm_form_divSchForm_form_divSch_form_cbo00_00_innerdataset);
                p.cbo00_00.set_codecolumn("codecolumn");
                p.cbo00_00.set_datacolumn("datacolumn");
                p.cbo00_00.set_text("전체");
                p.cbo00_00.set_value("");
                p.cbo00_00.set_index("0");
                p.cbo00_00.move("200.00","128","100%","40",null,null);

                p.pan02.set_taborder("6");
                p.pan02.set_type("horizontal");
                p.pan02.set_horizontalgap("10");
                p.pan02.set_flexwrap("nowrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_flexgrow("1");
                p.pan02.set_minwidth("");
                p.pan02.move("20.00","67","360","40",null,null);

                p.staLabel03_01.set_taborder("7");
                p.staLabel03_01.set_text("회사명");
                p.staLabel03_01.set_cssclass("sta_WF_SchLabel");
                p.staLabel03_01.set_flexshrink("0");
                p.staLabel03_01.move("20.00","20","100","40",null,null);

                p.divEdtPop00.set_taborder("8");
                p.divEdtPop00.set_text("Div00");
                p.divEdtPop00.set_formscrollbartype("none none");
                p.divEdtPop00.set_formscrolltype("none");
                p.divEdtPop00.set_flexgrow("1");
                p.divEdtPop00.move("130.00","20","100%","40",null,null);

                p.pan03.set_taborder("9");
                p.pan03.set_type("horizontal");
                p.pan03.set_horizontalgap("10");
                p.pan03.set_flexgrow("1");
                p.pan03.set_minwidth("");
                p.pan03.move("953.00","0","360","40",null,null);

                p.staLabel04.set_taborder("10");
                p.staLabel04.set_text("기간");
                p.staLabel04.set_cssclass("sta_WF_SchLabel");
                p.staLabel04.set_flexshrink("0");
                p.staLabel04.set_maxwidth("");
                p.staLabel04.move("30","30","100","40",null,null);

                p.DivCal.set_taborder("11");
                p.DivCal.set_text("Div00");
                p.DivCal.set_formscrollbartype("none none");
                p.DivCal.set_formscrolltype("none");
                p.DivCal.set_flexgrow("1");
                p.DivCal.move("110.00","0","100%","40",null,null);

                p.pan04.set_taborder("12");
                p.pan04.set_type("horizontal");
                p.pan04.set_horizontalgap("10");
                p.pan04.set_flexgrow("1");
                p.pan04.set_minwidth("");
                p.pan04.move("0","48","360","40",null,null);

                p.staLabel03_01_00.set_taborder("13");
                p.staLabel03_01_00.set_text("사용자명");
                p.staLabel03_01_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel03_01_00.set_flexshrink("0");
                p.staLabel03_01_00.move("20.00","20","100","40",null,null);

                p.divEdtPop00_00.set_taborder("14");
                p.divEdtPop00_00.set_text("Div00");
                p.divEdtPop00_00.set_formscrollbartype("none none");
                p.divEdtPop00_00.set_formscrolltype("none");
                p.divEdtPop00_00.set_flexgrow("1");
                p.divEdtPop00_00.move("130.00","20","100%","40",null,null);

                p.pan05.set_taborder("15");
                p.pan05.set_type("horizontal");
                p.pan05.set_horizontalgap("10");
                p.pan05.set_flexgrow("1");
                p.pan05.set_minwidth("");
                p.pan05.move("953.00","0","360","40",null,null);

                p.staLabel03_02.set_taborder("16");
                p.staLabel03_02.set_text("사용자구분");
                p.staLabel03_02.set_cssclass("sta_WF_SchLabel");
                p.staLabel03_02.set_flexshrink("0");
                p.staLabel03_02.set_maxwidth("");
                p.staLabel03_02.move("0","0","100","40",null,null);

                p.cbo00_01.set_taborder("17");
                p.cbo00_01.set_innerdataset("dsCombo1");
                p.cbo00_01.set_codecolumn("cdId");
                p.cbo00_01.set_datacolumn("cdNm");
                p.cbo00_01.set_displaynulltext("선택");
                p.cbo00_01.set_text("");
                p.cbo00_01.set_index("-1");
                p.cbo00_01.move("200.00","128","100%","40",null,null);

                p.pan06.set_taborder("18");
                p.pan06.set_type("horizontal");
                p.pan06.set_horizontalgap("10");
                p.pan06.set_flexwrap("nowrap");
                p.pan06.set_fittocontents("height");
                p.pan06.set_flexgrow("1");
                p.pan06.set_minwidth("");
                p.pan06.move("20.00","67","360","40",null,null);

                p.staLabel03_03.set_taborder("19");
                p.staLabel03_03.set_text("임대가능여부");
                p.staLabel03_03.set_cssclass("sta_WF_SchLabel");
                p.staLabel03_03.set_flexshrink("0");
                p.staLabel03_03.set_maxwidth("");
                p.staLabel03_03.move("0","0","100","40",null,null);

                p.cbo00_02.set_taborder("20");
                p.cbo00_02.set_displaynulltext("선택");
                p.cbo00_02.set_innerdataset(divForm_form_divSchForm_form_divSch_form_cbo00_02_innerdataset);
                p.cbo00_02.set_codecolumn("codecolumn");
                p.cbo00_02.set_datacolumn("datacolumn");
                p.cbo00_02.set_text("");
                p.cbo00_02.set_index("-1");
                p.cbo00_02.move("200.00","128","100%","40",null,null);

                p.ST01_SE.set_taborder("21");
                p.ST01_SE.set_type("horizontal");
                p.ST01_SE.set_horizontalgap("10");
                p.ST01_SE.set_flexwrap("nowrap");
                p.ST01_SE.set_fittocontents("height");
                p.ST01_SE.set_flexgrow("1");
                p.ST01_SE.set_visible("false");
                p.ST01_SE.set_minwidth("");
                p.ST01_SE.move("20.00","67","360","40",null,null);

                p.staLabel03_04.set_taborder("22");
                p.staLabel03_04.set_text("계약유형");
                p.staLabel03_04.set_cssclass("sta_WF_SchLabel");
                p.staLabel03_04.set_flexshrink("0");
                p.staLabel03_04.set_maxwidth("");
                p.staLabel03_04.move("0","0","100","40",null,null);

                p.cbo00_03.set_taborder("23");
                p.cbo00_03.set_innerdataset("ds_cbo");
                p.cbo00_03.set_codecolumn("code");
                p.cbo00_03.set_datacolumn("data");
                p.cbo00_03.set_displaynulltext("선택");
                p.cbo00_03.set_text("");
                p.cbo00_03.set_index("-1");
                p.cbo00_03.move("200.00","128","100%","40",null,null);

                p.ST02_SE.set_taborder("24");
                p.ST02_SE.set_type("horizontal");
                p.ST02_SE.set_horizontalgap("10");
                p.ST02_SE.set_flexwrap("nowrap");
                p.ST02_SE.set_fittocontents("height");
                p.ST02_SE.set_flexgrow("1");
                p.ST02_SE.set_visible("false");
                p.ST02_SE.set_minwidth("");
                p.ST02_SE.move("20.00","67","360","40",null,null);

                p.staLabel03_05.set_taborder("25");
                p.staLabel03_05.set_text("처리현황");
                p.staLabel03_05.set_cssclass("sta_WF_SchLabel");
                p.staLabel03_05.set_flexshrink("0");
                p.staLabel03_05.set_maxwidth("");
                p.staLabel03_05.move("0","0","100","40",null,null);

                p.cbo00_04.set_taborder("26");
                p.cbo00_04.set_innerdataset("ds_cbo");
                p.cbo00_04.set_codecolumn("code");
                p.cbo00_04.set_datacolumn("data");
                p.cbo00_04.set_displaynulltext("선택");
                p.cbo00_04.set_text("");
                p.cbo00_04.set_index("-1");
                p.cbo00_04.move("200.00","128","100%","40",null,null);

                p.ST11_SE2.set_taborder("27");
                p.ST11_SE2.set_type("horizontal");
                p.ST11_SE2.set_horizontalgap("10");
                p.ST11_SE2.set_flexwrap("nowrap");
                p.ST11_SE2.set_fittocontents("height");
                p.ST11_SE2.set_flexgrow("1");
                p.ST11_SE2.set_visible("false");
                p.ST11_SE2.set_minwidth("");
                p.ST11_SE2.move("20.00","67","360","40",null,null);

                p.staLabel03_06.set_taborder("28");
                p.staLabel03_06.set_text("현황도지역");
                p.staLabel03_06.set_cssclass("sta_WF_SchLabel");
                p.staLabel03_06.set_flexshrink("0");
                p.staLabel03_06.set_maxwidth("");
                p.staLabel03_06.move("0","0","100","40",null,null);

                p.cbo00_05.set_taborder("29");
                p.cbo00_05.set_innerdataset("dsCombo_Area");
                p.cbo00_05.set_codecolumn("cdId");
                p.cbo00_05.set_datacolumn("cdNm");
                p.cbo00_05.set_displaynulltext("선택");
                p.cbo00_05.set_text("");
                p.cbo00_05.set_index("-1");
                p.cbo00_05.move("200.00","128","100%","40",null,null);

                p.ST16_SE2.set_taborder("30");
                p.ST16_SE2.set_type("horizontal");
                p.ST16_SE2.set_horizontalgap("10");
                p.ST16_SE2.set_flexwrap("nowrap");
                p.ST16_SE2.set_fittocontents("height");
                p.ST16_SE2.set_flexgrow("1");
                p.ST16_SE2.set_visible("false");
                p.ST16_SE2.set_minwidth("");
                p.ST16_SE2.move("20.00","67","360","40",null,null);

                p.pan12.set_taborder("31");
                p.pan12.set_type("horizontal");
                p.pan12.set_horizontalgap("10");
                p.pan12.set_flexwrap("nowrap");
                p.pan12.set_fittocontents("height");
                p.pan12.set_flexgrow("1");
                p.pan12.set_minwidth("");
                p.pan12.move("20.00","67","360","1",null,null);

                p.Button00.set_taborder("32");
                p.Button00.set_text("");
                p.Button00.set_cssclass("btn_WF_ACPlus");
                p.Button00.set_minheight("40");
                p.Button00.set_maxheight("");
                p.Button00.set_minwidth("40");
                p.Button00.set_maxwidth("");
                p.Button00.move("1347.00","0","40","40",null,null);

                p.Panel00.set_taborder("33");
                p.Panel00.set_cssclass("pal_WF_SchFilterSBg");
                p.Panel00.set_spacing("0px 10px 0px 10px");
                p.Panel00.set_flexmainaxisalign("center");
                p.Panel00.set_flexcrossaxiswrapalign("center");
                p.Panel00.set_flexcrossaxisalign("center");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_maxheight("");
                p.Panel00.move("1358.00","0","59","310",null,null);

                p.staLabel03_07_00.set_taborder("34");
                p.staLabel03_07_00.set_text("공사종류");
                p.staLabel03_07_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel03_07_00.set_flexshrink("0");
                p.staLabel03_07_00.set_maxwidth("");
                p.staLabel03_07_00.move("0","0","100","40",null,null);

                p.cbo00_06_00.set_taborder("35");
                p.cbo00_06_00.set_innerdataset("ds_cbo");
                p.cbo00_06_00.set_codecolumn("code");
                p.cbo00_06_00.set_datacolumn("data");
                p.cbo00_06_00.set_displaynulltext("선택");
                p.cbo00_06_00.set_text("");
                p.cbo00_06_00.set_index("-1");
                p.cbo00_06_00.move("200.00","128","100%","40",null,null);

                p.ST05_SE2.set_taborder("36");
                p.ST05_SE2.set_type("horizontal");
                p.ST05_SE2.set_horizontalgap("10");
                p.ST05_SE2.set_flexwrap("nowrap");
                p.ST05_SE2.set_fittocontents("height");
                p.ST05_SE2.set_flexgrow("1");
                p.ST05_SE2.set_visible("false");
                p.ST05_SE2.set_minwidth("");
                p.ST05_SE2.move("20.00","67","360","40",null,null);

                p.staLabel03_07_01.set_taborder("37");
                p.staLabel03_07_01.set_text("화재위반여부");
                p.staLabel03_07_01.set_cssclass("sta_WF_SchLabel");
                p.staLabel03_07_01.set_flexshrink("0");
                p.staLabel03_07_01.set_maxwidth("");
                p.staLabel03_07_01.move("0","0","100","40",null,null);

                p.cbo00_06_01.set_taborder("38");
                p.cbo00_06_01.set_displaynulltext("선택");
                p.cbo00_06_01.set_innerdataset(divForm_form_divSchForm_form_divSch_form_cbo00_06_01_innerdataset);
                p.cbo00_06_01.set_codecolumn("codecolumn");
                p.cbo00_06_01.set_datacolumn("datacolumn");
                p.cbo00_06_01.set_text("");
                p.cbo00_06_01.set_index("-1");
                p.cbo00_06_01.move("200.00","128","100%","40",null,null);

                p.ST05_SE1.set_taborder("39");
                p.ST05_SE1.set_type("horizontal");
                p.ST05_SE1.set_horizontalgap("10");
                p.ST05_SE1.set_flexwrap("nowrap");
                p.ST05_SE1.set_fittocontents("height");
                p.ST05_SE1.set_flexgrow("1");
                p.ST05_SE1.set_visible("false");
                p.ST05_SE1.set_minwidth("");
                p.ST05_SE1.move("20.00","67","360","40",null,null);

                p.staLabel03_07_02.set_taborder("40");
                p.staLabel03_07_02.set_text("작업구분");
                p.staLabel03_07_02.set_cssclass("sta_WF_SchLabel");
                p.staLabel03_07_02.set_flexshrink("0");
                p.staLabel03_07_02.set_maxwidth("");
                p.staLabel03_07_02.move("0","0","100","40",null,null);

                p.cbo00_06_02.set_taborder("41");
                p.cbo00_06_02.set_innerdataset("ds_cbo");
                p.cbo00_06_02.set_codecolumn("code");
                p.cbo00_06_02.set_datacolumn("data");
                p.cbo00_06_02.set_displaynulltext("선택");
                p.cbo00_06_02.set_text("");
                p.cbo00_06_02.set_index("-1");
                p.cbo00_06_02.move("200.00","128","100%","40",null,null);

                p.ST11_SE1.set_taborder("42");
                p.ST11_SE1.set_type("horizontal");
                p.ST11_SE1.set_horizontalgap("10");
                p.ST11_SE1.set_flexwrap("nowrap");
                p.ST11_SE1.set_fittocontents("height");
                p.ST11_SE1.set_flexgrow("1");
                p.ST11_SE1.set_visible("false");
                p.ST11_SE1.set_minwidth("");
                p.ST11_SE1.move("20.00","67","360","40",null,null);

                p.staLabel03_07_02_00.set_taborder("43");
                p.staLabel03_07_02_00.set_text("위해물품현황");
                p.staLabel03_07_02_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel03_07_02_00.set_flexshrink("0");
                p.staLabel03_07_02_00.set_maxwidth("");
                p.staLabel03_07_02_00.move("0","0","100","40",null,null);

                p.cbo00_06_02_00.set_taborder("44");
                p.cbo00_06_02_00.set_displaynulltext("선택");
                p.cbo00_06_02_00.set_innerdataset(divForm_form_divSchForm_form_divSch_form_cbo00_06_02_00_innerdataset);
                p.cbo00_06_02_00.set_codecolumn("codecolumn");
                p.cbo00_06_02_00.set_datacolumn("datacolumn");
                p.cbo00_06_02_00.set_text("");
                p.cbo00_06_02_00.set_index("-1");
                p.cbo00_06_02_00.move("200.00","128","100%","40",null,null);

                p.ST10_SE.set_taborder("45");
                p.ST10_SE.set_type("horizontal");
                p.ST10_SE.set_horizontalgap("10");
                p.ST10_SE.set_flexwrap("nowrap");
                p.ST10_SE.set_fittocontents("height");
                p.ST10_SE.set_flexgrow("1");
                p.ST10_SE.set_visible("false");
                p.ST10_SE.set_minwidth("");
                p.ST10_SE.move("20.00","67","360","40",null,null);

                p.staLabel03_07_03.set_taborder("46");
                p.staLabel03_07_03.set_text("통계분류");
                p.staLabel03_07_03.set_cssclass("sta_WF_SchLabel");
                p.staLabel03_07_03.set_flexshrink("0");
                p.staLabel03_07_03.set_maxwidth("");
                p.staLabel03_07_03.move("0","0","100","40",null,null);

                p.cbo00_06_03.set_taborder("47");
                p.cbo00_06_03.set_innerdataset("ds_cbo");
                p.cbo00_06_03.set_codecolumn("code");
                p.cbo00_06_03.set_datacolumn("data");
                p.cbo00_06_03.set_displaynulltext("선택");
                p.cbo00_06_03.set_text("");
                p.cbo00_06_03.set_index("-1");
                p.cbo00_06_03.move("200.00","128","100%","40",null,null);

                p.pan11_03.set_taborder("48");
                p.pan11_03.set_type("horizontal");
                p.pan11_03.set_horizontalgap("10");
                p.pan11_03.set_flexwrap("nowrap");
                p.pan11_03.set_fittocontents("height");
                p.pan11_03.set_flexgrow("1");
                p.pan11_03.set_minwidth("");
                p.pan11_03.move("20.00","67","360","40",null,null);

                p.staLabel03_07_03_00_00.set_taborder("49");
                p.staLabel03_07_03_00_00.set_text("미디어상태");
                p.staLabel03_07_03_00_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel03_07_03_00_00.set_flexshrink("0");
                p.staLabel03_07_03_00_00.set_maxwidth("");
                p.staLabel03_07_03_00_00.move("0","0","100","40",null,null);

                p.cbo00_06_03_00_00.set_taborder("50");
                p.cbo00_06_03_00_00.set_displaynulltext("선택");
                p.cbo00_06_03_00_00.set_innerdataset(divForm_form_divSchForm_form_divSch_form_cbo00_06_03_00_00_innerdataset);
                p.cbo00_06_03_00_00.set_codecolumn("codecolumn");
                p.cbo00_06_03_00_00.set_datacolumn("datacolumn");
                p.cbo00_06_03_00_00.set_text("");
                p.cbo00_06_03_00_00.set_index("-1");
                p.cbo00_06_03_00_00.move("200.00","128","100%","40",null,null);

                p.ST14_SE.set_taborder("51");
                p.ST14_SE.set_type("horizontal");
                p.ST14_SE.set_horizontalgap("10");
                p.ST14_SE.set_flexwrap("nowrap");
                p.ST14_SE.set_fittocontents("height");
                p.ST14_SE.set_flexgrow("1");
                p.ST14_SE.set_visible("false");
                p.ST14_SE.set_minwidth("");
                p.ST14_SE.move("20.00","67","360","40",null,null);

                p.staLabel03_07_03_00_01.set_taborder("52");
                p.staLabel03_07_03_00_01.set_text("정기권상태");
                p.staLabel03_07_03_00_01.set_cssclass("sta_WF_SchLabel");
                p.staLabel03_07_03_00_01.set_flexshrink("0");
                p.staLabel03_07_03_00_01.set_maxwidth("");
                p.staLabel03_07_03_00_01.move("0","0","100","40",null,null);

                p.cbo00_06_03_00_01.set_taborder("53");
                p.cbo00_06_03_00_01.set_displaynulltext("선택");
                p.cbo00_06_03_00_01.set_innerdataset(divForm_form_divSchForm_form_divSch_form_cbo00_06_03_00_01_innerdataset);
                p.cbo00_06_03_00_01.set_codecolumn("codecolumn");
                p.cbo00_06_03_00_01.set_datacolumn("datacolumn");
                p.cbo00_06_03_00_01.set_text("");
                p.cbo00_06_03_00_01.set_index("-1");
                p.cbo00_06_03_00_01.move("200.00","128","100%","40",null,null);

                p.ST20_SE.set_taborder("54");
                p.ST20_SE.set_type("horizontal");
                p.ST20_SE.set_horizontalgap("10");
                p.ST20_SE.set_flexwrap("nowrap");
                p.ST20_SE.set_fittocontents("height");
                p.ST20_SE.set_flexgrow("1");
                p.ST20_SE.set_visible("false");
                p.ST20_SE.set_minwidth("");
                p.ST20_SE.move("20.00","67","360","40",null,null);

                p.staLabel03_07_03_00_01_00.set_taborder("55");
                p.staLabel03_07_03_00_01_00.set_text("현황도유형");
                p.staLabel03_07_03_00_01_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel03_07_03_00_01_00.set_flexshrink("0");
                p.staLabel03_07_03_00_01_00.set_maxwidth("");
                p.staLabel03_07_03_00_01_00.move("0","0","100","40",null,null);

                p.cbo00_06_03_00_01_00.set_taborder("56");
                p.cbo00_06_03_00_01_00.set_displaynulltext("선택");
                p.cbo00_06_03_00_01_00.set_innerdataset(divForm_form_divSchForm_form_divSch_form_cbo00_06_03_00_01_00_innerdataset);
                p.cbo00_06_03_00_01_00.set_codecolumn("codecolumn");
                p.cbo00_06_03_00_01_00.set_datacolumn("datacolumn");
                p.cbo00_06_03_00_01_00.set_text("");
                p.cbo00_06_03_00_01_00.set_index("-1");
                p.cbo00_06_03_00_01_00.move("200.00","128","100%","40",null,null);

                p.ST16_SE1.set_taborder("57");
                p.ST16_SE1.set_type("horizontal");
                p.ST16_SE1.set_horizontalgap("10");
                p.ST16_SE1.set_flexwrap("nowrap");
                p.ST16_SE1.set_fittocontents("height");
                p.ST16_SE1.set_flexgrow("1");
                p.ST16_SE1.set_visible("false");
                p.ST16_SE1.set_minwidth("");
                p.ST16_SE1.move("20.00","67","360","40",null,null);

                p.la1.set_taborder("58");
                p.la1.set_text("전동차상태");
                p.la1.set_cssclass("sta_WF_SchLabel");
                p.la1.set_flexshrink("0");
                p.la1.set_maxwidth("");
                p.la1.move("0","0","100","40",null,null);

                p.cbo00_06_03_00_01_00_00.set_taborder("59");
                p.cbo00_06_03_00_01_00_00.set_displaynulltext("선택");
                p.cbo00_06_03_00_01_00_00.set_innerdataset(divForm_form_divSchForm_form_divSch_form_cbo00_06_03_00_01_00_00_innerdataset);
                p.cbo00_06_03_00_01_00_00.set_codecolumn("codecolumn");
                p.cbo00_06_03_00_01_00_00.set_datacolumn("datacolumn");
                p.cbo00_06_03_00_01_00_00.set_text("");
                p.cbo00_06_03_00_01_00_00.set_index("-1");
                p.cbo00_06_03_00_01_00_00.move("200.00","128","100%","40",null,null);

                p.ST15_SE.set_taborder("60");
                p.ST15_SE.set_type("horizontal");
                p.ST15_SE.set_horizontalgap("10");
                p.ST15_SE.set_flexwrap("nowrap");
                p.ST15_SE.set_fittocontents("height");
                p.ST15_SE.set_flexgrow("1");
                p.ST15_SE.set_visible("false");
                p.ST15_SE.set_minwidth("");
                p.ST15_SE.move("20.00","67","360","40",null,null);

                p.la2.set_taborder("61");
                p.la2.set_text("청렴신문고상태");
                p.la2.set_cssclass("sta_WF_SchLabel");
                p.la2.set_flexshrink("0");
                p.la2.set_maxwidth("");
                p.la2.move("0","0","100","40",null,null);

                p.cbo00_06_03_00_02.set_taborder("62");
                p.cbo00_06_03_00_02.set_displaynulltext("선택");
                p.cbo00_06_03_00_02.set_innerdataset(divForm_form_divSchForm_form_divSch_form_cbo00_06_03_00_02_innerdataset);
                p.cbo00_06_03_00_02.set_codecolumn("codecolumn");
                p.cbo00_06_03_00_02.set_datacolumn("datacolumn");
                p.cbo00_06_03_00_02.set_text("");
                p.cbo00_06_03_00_02.set_index("-1");
                p.cbo00_06_03_00_02.move("200.00","128","100%","40",null,null);

                p.ST19_SE.set_taborder("63");
                p.ST19_SE.set_type("horizontal");
                p.ST19_SE.set_horizontalgap("10");
                p.ST19_SE.set_flexwrap("nowrap");
                p.ST19_SE.set_fittocontents("height");
                p.ST19_SE.set_flexgrow("1");
                p.ST19_SE.set_visible("false");
                p.ST19_SE.set_minwidth("");
                p.ST19_SE.move("20.00","67","360","40",null,null);

                p.staLabel03_07_03_00_02_00.set_taborder("64");
                p.staLabel03_07_03_00_02_00.set_text("계정상태");
                p.staLabel03_07_03_00_02_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel03_07_03_00_02_00.set_flexshrink("0");
                p.staLabel03_07_03_00_02_00.set_maxwidth("");
                p.staLabel03_07_03_00_02_00.move("0","0","100","40",null,null);

                p.cbo00_06_03_00_02_00.set_taborder("65");
                p.cbo00_06_03_00_02_00.set_displaynulltext("선택");
                p.cbo00_06_03_00_02_00.set_innerdataset(divForm_form_divSchForm_form_divSch_form_cbo00_06_03_00_02_00_innerdataset);
                p.cbo00_06_03_00_02_00.set_codecolumn("codecolumn");
                p.cbo00_06_03_00_02_00.set_datacolumn("datacolumn");
                p.cbo00_06_03_00_02_00.set_text("");
                p.cbo00_06_03_00_02_00.set_index("-1");
                p.cbo00_06_03_00_02_00.move("200.00","128","100%","40",null,null);

                p.ST18_SE.set_taborder("66");
                p.ST18_SE.set_type("horizontal");
                p.ST18_SE.set_horizontalgap("10");
                p.ST18_SE.set_flexwrap("nowrap");
                p.ST18_SE.set_fittocontents("height");
                p.ST18_SE.set_flexgrow("1");
                p.ST18_SE.set_visible("false");
                p.ST18_SE.set_minwidth("");
                p.ST18_SE.move("20.00","67","360","40",null,null);

                p.staLabel03_07_03_00_03.set_taborder("67");
                p.staLabel03_07_03_00_03.set_text("열쇠현황");
                p.staLabel03_07_03_00_03.set_cssclass("sta_WF_SchLabel");
                p.staLabel03_07_03_00_03.set_flexshrink("0");
                p.staLabel03_07_03_00_03.set_maxwidth("");
                p.staLabel03_07_03_00_03.move("0","0","100","40",null,null);

                p.cbo00_06_03_00_03.set_taborder("68");
                p.cbo00_06_03_00_03.set_displaynulltext("선택");
                p.cbo00_06_03_00_03.set_innerdataset(divForm_form_divSchForm_form_divSch_form_cbo00_06_03_00_03_innerdataset);
                p.cbo00_06_03_00_03.set_codecolumn("codecolumn");
                p.cbo00_06_03_00_03.set_datacolumn("datacolumn");
                p.cbo00_06_03_00_03.set_text("");
                p.cbo00_06_03_00_03.set_index("-1");
                p.cbo00_06_03_00_03.move("200.00","128","100%","40",null,null);

                p.ST12_SE.set_taborder("69");
                p.ST12_SE.set_type("horizontal");
                p.ST12_SE.set_horizontalgap("10");
                p.ST12_SE.set_flexwrap("nowrap");
                p.ST12_SE.set_fittocontents("height");
                p.ST12_SE.set_flexgrow("1");
                p.ST12_SE.set_visible("false");
                p.ST12_SE.set_minwidth("");
                p.ST12_SE.move("20.00","67","360","40",null,null);

                p.staLabel03_06_00.set_taborder("70");
                p.staLabel03_06_00.set_text("현황도위치");
                p.staLabel03_06_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel03_06_00.set_flexshrink("0");
                p.staLabel03_06_00.set_maxwidth("");
                p.staLabel03_06_00.move("0","0","100","40",null,null);

                p.cbo00_05_00.set_taborder("71");
                p.cbo00_05_00.set_innerdataset("dsCombo_Pstn");
                p.cbo00_05_00.set_codecolumn("cdId");
                p.cbo00_05_00.set_datacolumn("cdNm");
                p.cbo00_05_00.set_displaynulltext("선택");
                p.cbo00_05_00.set_text("");
                p.cbo00_05_00.set_index("-1");
                p.cbo00_05_00.move("200.00","128","100%","40",null,null);

                p.staLabel03_06_00_00.set_taborder("73");
                p.staLabel03_06_00_00.set_text("현황도");
                p.staLabel03_06_00_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel03_06_00_00.set_flexshrink("0");
                p.staLabel03_06_00_00.set_maxwidth("");
                p.staLabel03_06_00_00.move("0","0","100","40",null,null);

                p.cbo00_05_00_00.set_taborder("74");
                p.cbo00_05_00_00.set_innerdataset("dsCombo_Stsmap");
                p.cbo00_05_00_00.set_codecolumn("stsmapId");
                p.cbo00_05_00_00.set_datacolumn("stsmapNm");
                p.cbo00_05_00_00.set_displaynulltext("선택");
                p.cbo00_05_00_00.set_text("");
                p.cbo00_05_00_00.set_index("-1");
                p.cbo00_05_00_00.move("200.00","128","100%","40",null,null);

                p.ST16_SE4.set_taborder("75");
                p.ST16_SE4.set_type("horizontal");
                p.ST16_SE4.set_horizontalgap("10");
                p.ST16_SE4.set_flexwrap("nowrap");
                p.ST16_SE4.set_fittocontents("height");
                p.ST16_SE4.set_flexgrow("1");
                p.ST16_SE4.set_visible("false");
                p.ST16_SE4.set_minwidth("");
                p.ST16_SE4.move("20.00","67","360","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            this.divForm.form.divSchForm.form.divSch.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divSchForm.form.divSch.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divSchForm.form.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            this.divForm.form.divSchForm.form.divSch.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divSchForm.form
            obj = new Layout("default","",0,0,this.divForm.form.divSchForm.form,function(p){});
            obj.set_type("vertical");
            obj.set_verticalgap("20");
            this.divForm.form.divSchForm.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.divGrd.form.Div01.form.Div00.form
            obj = new Layout("default","",0,0,this.divForm.form.divGrd.form.Div01.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00_00.set_taborder("0");
                p.Static00_00.set_text("분석항목(행,열)");
                p.Static00_00.set_cssclass("sta_WF_TreeTitle");
                p.Static00_00.move("0","0","100%","50",null,null);

                p.Panel00_00.set_taborder("1");
                p.Panel00_00.set_flexcrossaxisalign("center");
                p.Panel00_00.move("0","0","100%","50",null,null);

                p.grd03.set_taborder("2");
                p.grd03.set_binddataset("dsColumnList");
                p.grd03.set_autofittype("col");
                p.grd03.set_treeinitstatus("expand,all");
                p.grd03.set_treeuseimage("false");
                p.grd03.set_treeusecheckbox("false");
                p.grd03.set_treeuseexpandkey("false");
                p.grd03.set_treeusebutton("use");
                p.grd03.set_treeuseline("true");
                p.grd03.set_treeasynctoggle("false");
                p.grd03.set_cssclass("grd_WF_Tree");
                p.grd03.move("0.00","40","100%","458",null,null);

                p.Panel00.set_taborder("3");
                p.Panel00.set_type("vertical");
                p.Panel00.set_cssclass("pan_WF_Tree");
                p.Panel00.move("0","0","100%","500",null,null);

                p.Static00.set_taborder("4");
                p.Static00.set_text("측정값");
                p.Static00.set_cssclass("sta_WF_TreeTitle");
                p.Static00.move("0","0","100%","50",null,null);

                p.grd03_00.set_taborder("5");
                p.grd03_00.set_binddataset("ds00");
                p.grd03_00.set_autofittype("col");
                p.grd03_00.set_treeinitstatus("expand,all");
                p.grd03_00.set_treeuseimage("false");
                p.grd03_00.set_treeusecheckbox("false");
                p.grd03_00.set_treeuseexpandkey("false");
                p.grd03_00.set_treeusebutton("use");
                p.grd03_00.set_treeuseline("true");
                p.grd03_00.set_treeasynctoggle("false");
                p.grd03_00.set_cssclass("grd_WF_Tree");
                p.grd03_00.move("0","40","100%","200",null,null);

                p.Panel00_01.set_taborder("6");
                p.Panel00_01.set_type("vertical");
                p.Panel00_01.set_cssclass("pan_WF_Tree");
                p.Panel00_01.move("0","0","100.00%","250",null,null);

                p.Button00_00.set_taborder("7");
                p.Button00_00.set_text("닫기");
                p.Button00_00.set_cssclass("btn_WF_TreeTitleClose");
                p.Button00_00.set_fittocontents("width");
                p.Button00_00.move("209.00","26","47","34",null,null);

                p.Panel00_02.set_taborder("8");
                p.Panel00_02.set_cssclass("pal_WF_TreeTitleBtn");
                p.Panel00_02.set_flexcrossaxisalign("center");
                p.Panel00_02.set_flexmainaxisalign("end");
                p.Panel00_02.set_spacing("0px 20px 0px 0px");
                p.Panel00_02.move("921","517","100%","50",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            this.divForm.form.divGrd.form.Div01.form.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divGrd.form.Div01.form.Div00.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divGrd.form.Div01.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            this.divForm.form.divGrd.form.Div01.form.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divGrd.form.Div01.form.Div00.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divGrd.form.Div01.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            this.divForm.form.divGrd.form.Div01.form.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divGrd.form.Div01.form.Div01.form
            obj = new Layout("default","",0,0,this.divForm.form.divGrd.form.Div01.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel01_01.set_taborder("0");
                p.Panel01_01.set_type("vertical");
                p.Panel01_01.set_cssclass("pan_WF_Tree");
                p.Panel01_01.move("0","0","100%","245",null,null);

                p.Static01_01_00.set_taborder("1");
                p.Static01_01_00.set_text("데이터항목(열)");
                p.Static01_01_00.set_cssclass("sta_WF_TreeTitle");
                p.Static01_01_00.move("0","0","100%","50",null,null);

                p.Panel01_01_00.set_taborder("2");
                p.Panel01_01_00.set_type("vertical");
                p.Panel01_01_00.set_cssclass("pan_WF_Tree");
                p.Panel01_01_00.move("355","0","100%","245",null,null);

                p.Static01_01_00_00.set_taborder("3");
                p.Static01_01_00_00.set_text("측정값");
                p.Static01_01_00_00.set_cssclass("sta_WF_TreeTitle");
                p.Static01_01_00_00.move("0","0","100%","50",null,null);

                p.Panel01_01_00_00.set_taborder("4");
                p.Panel01_01_00_00.set_type("vertical");
                p.Panel01_01_00_00.set_cssclass("pan_WF_Tree");
                p.Panel01_01_00_00.move("355","0","100%","250",null,null);

                p.Static00_00.set_taborder("5");
                p.Static00_00.set_text("분석항목(행)");
                p.Static00_00.set_cssclass("sta_WF_TreeTitle");
                p.Static00_00.move("0","0","100%","50",null,null);

                p.Panel00_00.set_taborder("6");
                p.Panel00_00.set_flexcrossaxisalign("center");
                p.Panel00_00.move("0","0","100%","50",null,null);

                p.grd01_01.set_taborder("7");
                p.grd01_01.set_autofittype("col");
                p.grd01_01.set_treeinitstatus("expand,all");
                p.grd01_01.set_treeuseimage("false");
                p.grd01_01.set_treeusecheckbox("false");
                p.grd01_01.set_treeuseexpandkey("false");
                p.grd01_01.set_treeusebutton("use");
                p.grd01_01.set_treeuseline("true");
                p.grd01_01.set_treeasynctoggle("false");
                p.grd01_01.set_cssclass("grd_WF_Tree");
                p.grd01_01.set_binddataset("Dataset00");
                p.grd01_01.move("0","39","100%","200",null,null);

                p.grd01_01_00.set_taborder("8");
                p.grd01_01_00.set_autofittype("col");
                p.grd01_01_00.set_treeinitstatus("expand,all");
                p.grd01_01_00.set_treeuseimage("false");
                p.grd01_01_00.set_treeusecheckbox("false");
                p.grd01_01_00.set_treeuseexpandkey("false");
                p.grd01_01_00.set_treeusebutton("use");
                p.grd01_01_00.set_treeuseline("true");
                p.grd01_01_00.set_treeasynctoggle("false");
                p.grd01_01_00.set_cssclass("grd_WF_Tree");
                p.grd01_01_00.set_binddataset("Dataset00");
                p.grd01_01_00.move("0","39","100%","200",null,null);

                p.grd01_01_01.set_taborder("9");
                p.grd01_01_01.set_autofittype("col");
                p.grd01_01_01.set_treeinitstatus("expand,all");
                p.grd01_01_01.set_treeuseimage("false");
                p.grd01_01_01.set_treeusecheckbox("false");
                p.grd01_01_01.set_treeuseexpandkey("false");
                p.grd01_01_01.set_treeusebutton("use");
                p.grd01_01_01.set_treeuseline("true");
                p.grd01_01_01.set_treeasynctoggle("false");
                p.grd01_01_01.set_cssclass("grd_WF_Tree");
                p.grd01_01_01.set_binddataset("Dataset00");
                p.grd01_01_01.move("0","39","100%","200",null,null);

                p.Button00_00.set_taborder("10");
                p.Button00_00.set_text("닫기");
                p.Button00_00.set_cssclass("btn_WF_TreeTitleClose");
                p.Button00_00.set_fittocontents("width");
                p.Button00_00.move("209.00","26","47","34",null,null);

                p.Panel00_02.set_taborder("11");
                p.Panel00_02.set_cssclass("pal_WF_TreeTitleBtn");
                p.Panel00_02.set_flexcrossaxisalign("center");
                p.Panel00_02.set_flexmainaxisalign("end");
                p.Panel00_02.set_spacing("0px 20px 0px 0px");
                p.Panel00_02.move("921","517","100%","50",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            this.divForm.form.divGrd.form.Div01.form.Div01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divGrd.form.Div01.form.Div01.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divGrd.form.Div01.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            this.divForm.form.divGrd.form.Div01.form.Div01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divGrd.form.Div01.form.Div01.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divGrd.form.Div01.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            this.divForm.form.divGrd.form.Div01.form.Div01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divGrd.form.Div01.form
            obj = new Layout("default","",0,0,this.divForm.form.divGrd.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Div00.set_taborder("0");
                p.Div00.set_text("Div00");
                p.Div00.move("0","0","100%","760",null,null);

                p.Div01.set_taborder("1");
                p.Div01.set_text("Div01");
                p.Div01.move("810","0","100%","760",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("20");
            this.divForm.form.divGrd.form.Div01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divGrd.form.Div01.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divGrd.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("20");
            this.divForm.form.divGrd.form.Div01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divGrd.form.Div01.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divGrd.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("20");
            obj.set_horizontalgap("20");
            this.divForm.form.divGrd.form.Div01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.PanelGrdBtn.set_taborder("0");
                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.set_visible("true");
                p.PanelGrdBtn.move("870","0","100%","50",null,null);

                p.btnGrdAdd03.set_taborder("1");
                p.btnGrdAdd03.set_text("추가");
                p.btnGrdAdd03.set_cssclass("btn_WF_Small");
                p.btnGrdAdd03.set_visible("true");
                p.btnGrdAdd03.set_fittocontents("width");
                p.btnGrdAdd03.move("1068.00","0","47","34",null,null);

                p.btnGrdAdd04.set_taborder("2");
                p.btnGrdAdd04.set_text("검색");
                p.btnGrdAdd04.set_cssclass("btn_WF_Yes");
                p.btnGrdAdd04.set_visible("true");
                p.btnGrdAdd04.set_fittocontents("width");
                p.btnGrdAdd04.move("1078.00","10","70","34",null,null);

                p.btnGrdAdd02.set_taborder("3");
                p.btnGrdAdd02.set_text("추가");
                p.btnGrdAdd02.set_cssclass("btn_WF_Small");
                p.btnGrdAdd02.set_visible("true");
                p.btnGrdAdd02.set_fittocontents("width");
                p.btnGrdAdd02.move("1068.00","0","47","34",null,null);

                p.btnGrdAdd01.set_taborder("4");
                p.btnGrdAdd01.set_text("추가");
                p.btnGrdAdd01.set_cssclass("btn_WF_Small");
                p.btnGrdAdd01.set_visible("true");
                p.btnGrdAdd01.set_fittocontents("width");
                p.btnGrdAdd01.move("1068.00","0","47","34",null,null);

                p.Div01.set_taborder("5");
                p.Div01.set_text("Div01");
                p.Div01.set_fittocontents("height");
                p.Div01.set_visible("false");
                p.Div01.move("60","86","50.00%","760",null,null);
            	}
            );
            obj.set_verticalgap("10");
            obj.set_type("vertical");
            this.divForm.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divGrd.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Div01.move("60","86","100%","760",null,null);
            	}
            );
            obj.set_verticalgap("10");
            obj.set_type("vertical");
            this.divForm.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divSchForm.set_taborder("0");
                p.divSchForm.set_text("Div00");
                p.divSchForm.set_cssclass("");
                p.divSchForm.set_formscrollbartype("none none");
                p.divSchForm.set_formscrolltype("none");
                p.divSchForm.set_fittocontents("height");
                p.divSchForm.move("0","0","100.00%","510",null,null);

                p.divGrd.set_taborder("1");
                p.divGrd.set_text("Div01");
                p.divGrd.set_fittocontents("height");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.set_visible("true");
                p.divGrd.move("0","divSchForm:54","100.00%","820",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("20");
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
            obj.set_verticalgap("20");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divPopBtn.form
            obj = new Layout("default","",0,0,this.divPopBtn.form,
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
            obj.set_horizontalgap("20");
            this.divPopBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divPopBtn.form
            obj = new Layout("mobile","",0,0,this.divPopBtn.form,
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

            //-- Normal Layout : this.divPopBtn.form
            obj = new Layout("mobile","",0,0,this.divPopBtn.form,
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
            //-- Default Layout : this.divGuide.form
            obj = new Layout("default","",0,0,this.divGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00.set_taborder("1");
                p.Button00.set_text("");
                p.Button00.set_cssclass("btn_WF_ACPlus");
                p.Button00.move("20.00","26","40","40",null,null);

                p.Button00_00.set_taborder("0");
                p.Button00_00.set_text("");
                p.Button00_00.set_cssclass("btn_WF_ACMinus");
                p.Button00_00.move("70.00","26","40","40",null,null);

                p.PopupMenu00.set_innerdataset("ds_menu");
                p.PopupMenu00.set_idcolumn("idx");
                p.PopupMenu00.set_captioncolumn("Caption");
                p.PopupMenu00.set_levelcolumn("lev");
                p.PopupMenu00.set_userdatacolumn("UserData");
                p.PopupMenu00.set_enablecolumn("enable");
                p.PopupMenu00.move("20.00","87","167","120",null,null);
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

            //-- Normal Layout : this.divGuide.form
            obj = new Layout("mobile","",0,0,this.divGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divGuide.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("기준정보관리 등록/수정");

                p.divTitle.set_taborder("1");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.move("0","0",null,"48","60",null);

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_formscrollbartype("none none");
                p.divForm.set_formscrolltype("none");
                p.divForm.set_fittocontents("height");
                p.divForm.set_maxwidth("");
                p.divForm.move("0","divTitle:20",null,"1057","60",null);

                p.divPopBtn.set_taborder("2");
                p.divPopBtn.set_text("Div00");
                p.divPopBtn.set_cssclass("div_WF_PopBtn");
                p.divPopBtn.move("0","divForm:20",null,"60","60",null);

                p.divGuide.set_taborder("3");
                p.divGuide.set_text("div00");
                p.divGuide.set_visible("false");
                p.divGuide.set_cssclass("div_GD_Tip");
                p.divGuide.move("1590.00","135","450","385",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divForm.move("20","divTitle:20",null,"1057","20",null);

                p.divPopBtn.move("20","divForm:20",null,"60","20",null);

                p.divTitle.move("0","0",null,"48","0",null);
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
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
        };
        
        // User Script
        this.registerScript("COM031P21.xfdl", function() {
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
        this.divSchCnt = 1;

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수

        	this.divTitle.form.staTitle.set_text(this.gfnTrim(this.getOwnerFrame().form.fvMenuNavi)+ " ");

        	// 전달받은 파라메터 팝업창과 페이지오픈으로 파라메터 불러오는 방식이 달라짐
        	if(this.opener)
        	{
        		this.param = {
        			"coId" : this.getOwnerFrame().id
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
        	var strSvcUrl   = "stats/columnDataInq.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsColumnList=dsColumnList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 공통 코드 조회
        this.selectCmmTransaction = function(type, ds, selTy)
        {
        	var strSvcId    = "combo";
        	var strSvcUrl   = "common/cmmCode.do";
        	var inData      = "";
        	var outData     = ds + "=dsCombo";
        	var strArg      = "cdTypeId="+type+" comboTy=" + selTy;
        	var callBackFnc = "fnCallback";
        	var isAsync   	= false;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        this.selectStsmapCmmTransaction = function(id, ds, uprCd, stsTy, cdTypeId)
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

        this.selectStsmapsTransaction = function()
        {
        	var strSvcId    = "stsmaps";
        	var strSvcUrl   = "stsmap/mapImgListInq.do";
        	var inData      = "dsSearch=dsSearch_Stsmap";
        	var outData     = "dsCombo_Stsmap=dsList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 데이터 저장
        this.saveTransaction = function()
        {
        	var strSvcId    = "save";
        	var strSvcUrl   = "sample/sampleInsert.do";
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

        			break;

        		case "combo":
        			this.divForm.form.divSchForm.form.divSch.form.cbo00.index = 0;
        			this.divForm.form.divSchForm.form.divSch.form.cbo00_01.index = 0;
        			break;

        		case "save":
        			var gvRetMsg = this.objApp.getVariable("gvRetMsg");
        /*			this.gfnAlertMsg("save", gvRetMsg, "msgCallback");*/
        			this.gfnAlertMsg("MSG_001", "msgCallback");


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

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	if(this.param != null && this.param.sampleDataId != null && this.param.sampleDataId != '')
        	{
        		this.selectTransaction();
        		this.selectCmmTransaction();
        	} else
        	{
        		this.selectCmmTransaction("STATSSE", "dsCombo", "S");
        		this.selectCmmTransaction("AFFI", "dsCombo1", "A");
        	}


        }

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/

        this.divPopBtn_Button00_00_onclick = function(obj,e)
        {
        	var sTitle = "기준관리 등록";
        	var objArg   = {};

        	var objOption = {
        		popuptype: "modal"	//modal,modaless
        // 		, width: 1440
        // 		, height: 800			//width,height 지정하지 않음 popup form size적용
        		, autosize: true
        		, title: sTitle
        		, resize: true
        		, titlebar: true
        	};
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup("sampleWrite", "work::COM/stats/COM031P21_1.xfdl", objArg, sPopupCallBack, objOption);
        };

        this.divForm_divSch_Button00_onclick = function(obj,e)
        {
        	var divName = "divSch" + this.divSchCnt;
        	var divSchObj = new Div(divName, 0, 0, "100%", 217, null, null);
        	//divSchObj.fittocontents = "height";
        	divSchObj.set_url("work::COM/stats/divSch.xfdl");
        	this.divForm.form.divSchForm.addChild(divName, divSchObj);
        	divSchObj.show();
        	divSchObj.form.resetScroll();
        	this.divForm.form.divSchForm.form.resetScroll();
        	this.divForm.form.resetScroll();
        	var nRow = this.dsSearch.addRow();
        	this.dsSearch.setColumn(nRow, "rownum",  this.divSchCnt);
        	this.divSchCnt ++;


        };

        this.cbo00_onitemchanged = function(obj,e)
        {
        	this.divForm.form.divSchForm.form.divSch.form.ST13_SE.visible = false;		//도면상태			배정룸도면서비스
        	this.divForm.form.divSchForm.form.divSch.form.ST01_SE.visible = false;		//임대가능여부			임대배정
        	this.divForm.form.divSchForm.form.divSch.form.ST02_SE.visible = false;		//계약유형			계약관리
        	this.divForm.form.divSchForm.form.divSch.form.ST05_SE1.visible = false;		//화재위반여부			작업신고서
        	this.divForm.form.divSchForm.form.divSch.form.ST05_SE2.visible = false;		//공사종류			작업신고서
        	this.divForm.form.divSchForm.form.divSch.form.ST10_SE.visible = false;		//위해물품현황			보호구역 위해물품
        	this.divForm.form.divSchForm.form.divSch.form.ST11_SE1.visible = false;		//작업구분			이동지역
        	this.divForm.form.divSchForm.form.divSch.form.ST11_SE2.visible = false;		//처리현황			이동지역
        	this.divForm.form.divSchForm.form.divSch.form.ST20_SE.visible = false;		//정기권상태			정기권
        	this.divForm.form.divSchForm.form.divSch.form.ST14_SE.visible = false;		//미디어상태			운항정보/미디어표출
        	this.divForm.form.divSchForm.form.divSch.form.ST12_SE.visible = false;		//열쇠현황			열쇠제작
        	this.divForm.form.divSchForm.form.divSch.form.ST18_SE.visible = false;		//계정상태			계정
        	this.divForm.form.divSchForm.form.divSch.form.ST19_SE.visible = false;		//청렴신문고상태		청렴신문고
        	this.divForm.form.divSchForm.form.divSch.form.ST15_SE.visible = false;		//전동차상태			전동차서비스
        	this.divForm.form.divSchForm.form.divSch.form.ST16_SE1.visible = false;		//현황도				현황도
        	this.divForm.form.divSchForm.form.divSch.form.ST16_SE2.visible = false;		//공간정보			현황도
        	this.divForm.form.divSchForm.form.divSch.form.ST16_SE3.visible = false;		//공간정보			현황도
        	this.divForm.form.divSchForm.form.divSch.form.ST16_SE4.visible = false;		//공간정보			현황도

        	if(e.postvalue == "ST01") {
        		this.divForm.form.divSchForm.form.divSch.form.ST01_SE.visible = true;		//임대가능여부			임대배정
        	} else if(e.postvalue == "ST02") {
        		this.divForm.form.divSchForm.form.divSch.form.ST02_SE.visible = true;		//계약유형			계약관리
        	} else if(e.postvalue == "ST03") {

        	} else if(e.postvalue == "ST04") {

        	} else if(e.postvalue == "ST05") {
        		this.divForm.form.divSchForm.form.divSch.form.ST05_SE1.visible = true;		//화재위반여부			작업신고서
        		this.divForm.form.divSchForm.form.divSch.form.ST05_SE2.visible = true;		//공사종류			작업신고서
        	} else if(e.postvalue == "ST06") {

        	} else if(e.postvalue == "ST07") {

        	} else if(e.postvalue == "ST08") {

        	} else if(e.postvalue == "ST09") {

        	} else if(e.postvalue == "ST10") {
        		this.divForm.form.divSchForm.form.divSch.form.ST10_SE.visible = true;		//위해물품현황			보호구역 위해물품
        	} else if(e.postvalue == "ST11") {
        		this.divForm.form.divSchForm.form.divSch.form.ST11_SE1.visible = true;		//작업구분			이동지역
        		this.divForm.form.divSchForm.form.divSch.form.ST11_SE2.visible = true;		//처리현황			이동지역
        	} else if(e.postvalue == "ST12") {
        		this.divForm.form.divSchForm.form.divSch.form.ST12_SE.visible = true;		//열쇠현황			열쇠제작
        	} else if(e.postvalue == "ST13") {
        		this.divForm.form.divSchForm.form.divSch.form.ST13_SE.visible = true;		//도면상태			배정룸도면서비스
        	} else if(e.postvalue == "ST14") {
        		this.divForm.form.divSchForm.form.divSch.form.ST14_SE.visible = true;		//미디어상태			운항정보/미디어표출
        	} else if(e.postvalue == "ST15") {
        		this.divForm.form.divSchForm.form.divSch.form.ST15_SE.visible = true;		//전동차상태			전동차서비스
        	} else if(e.postvalue == "ST16") {
        		this.divForm.form.divSchForm.form.divSch.form.ST16_SE1.visible = true;		//현황도				현황도
        		this.divForm.form.divSchForm.form.divSch.form.ST16_SE2.visible = true;		//공간정보			현황도
        		this.divForm.form.divSchForm.form.divSch.form.ST16_SE3.visible = true;		//공간정보			현황도
        		this.divForm.form.divSchForm.form.divSch.form.ST16_SE4.visible = true;		//공간정보			현황도
        	} else if(e.postvalue == "ST17") {

        	} else if(e.postvalue == "ST18") {
        		this.divForm.form.divSchForm.form.divSch.form.ST18_SE.visible = true;		//계정상태			계정
        	} else if(e.postvalue == "ST19") {
        		this.divForm.form.divSchForm.form.divSch.form.ST19_SE.visible = true;		//청렴신문고상태		청렴신문고
        	} else if(e.postvalue == "ST20") {
        		this.divForm.form.divSchForm.form.divSch.form.ST20_SE.visible = true;		//정기권상태			정기권
        	}

        	this.divForm.form.divSchForm.form.divSch.form.resetScroll();

        	this.dsSearch.setColumn(0, "STATS_SE", e.postvalue);
        };

        this.divForm_divSchForm_divSch_cbo00_06_03_00_01_00_onitemchanged = function(obj,e)
        {
        	this.selectStsmapCmmTransaction("combo1", "dsCombo_Area", "null", e.postvalue, "RGN_PSTN_SE");
        	this.dsSearch.setColumn(0, "ST16_SE1", e.postvalue);
        };

        this.divForm_divSchForm_divSch_cbo00_05_onitemchanged = function(obj,e)
        {
        	this.dsSearch.setColumn(0, "ST16_SE2", e.postvalue);
        	var stsTy = this.divForm.form.divSchForm.form.divSch.form.cbo00_06_03_00_01_00.value;
        	this.selectStsmapCmmTransaction("combo2", "dsCombo_Pstn", e.postvalue, stsTy, "RGN_PSTN_SE");
        };

        this.divForm_divSchForm_divSch_cbo00_05_00_onitemchanged = function(obj,e)
        {
        	this.dsSearch.setColumn(0, "ST16_SE3", e.postvalue);
        	var stsmapTy = this.divForm.form.divSchForm.form.divSch.form.cbo00_06_03_00_01_00.value;
        	var stsmapArea = this.divForm.form.divSchForm.form.divSch.form.cbo00_05.value;
        	var stsmapPstn = this.divForm.form.divSchForm.form.divSch.form.cbo00_05_00.value;

        	this.dsSearch_Stsmap.setColumn(0, "stsmapTy", stsmapTy);
        	this.dsSearch_Stsmap.setColumn(0, "stsmapArea", stsmapArea);
        	this.dsSearch_Stsmap.setColumn(0, "stsmapPstn", stsmapPstn);
        	this.selectStsmapsTransaction();
        };

        this.divForm_divSchForm_divSch_cbo00_00_onitemchanged = function(obj,e)
        {
        	this.dsSearch.setColumn(0, "STATUS", e.postvalue);
        };

        this.divForm_divSchForm_divSch_cbo00_01_onitemchanged = function(obj,e)
        {
        	this.dsSearch.setColumn(0, "USER_SE", e.postvalue);
        };

        this.divForm_divSchForm_divSch_cbo00_06_03_onitemchanged = function(obj,e)
        {
        	this.dsSearch.setColumn(0, "ST13_SE", e.postvalue);
        };

        this.divForm_divSchForm_divSch_cbo00_02_onitemchanged = function(obj,e)
        {
        	this.dsSearch.setColumn(0, "ST01_SE", e.postvalue);
        };

        this.divForm_divSchForm_divSch_cbo00_03_onitemchanged = function(obj,e)
        {
        	this.dsSearch.setColumn(0, "ST02_SE", e.postvalue);
        };

        this.divForm_divSchForm_divSch_cbo00_06_01_onitemchanged = function(obj,e)
        {
        	this.dsSearch.setColumn(0, "ST05_SE1", e.postvalue);
        };

        this.divForm_divSchForm_divSch_cbo00_06_00_onitemchanged = function(obj,e)
        {
        	this.dsSearch.setColumn(0, "ST05_SE2", e.postvalue);
        };

        this.divForm_divSchForm_divSch_cbo00_06_02_00_onitemchanged = function(obj,e)
        {
        	this.dsSearch.setColumn(0, "ST10_SE", e.postvalue);
        };

        this.divForm_divSchForm_divSch_cbo00_06_02_onitemchanged = function(obj,e)
        {
        	this.dsSearch.setColumn(0, "ST11_SE1", e.postvalue);
        };

        this.divForm_divSchForm_divSch_cbo00_04_onitemchanged = function(obj,e)
        {
        	this.dsSearch.setColumn(0, "ST11_SE2", e.postvalue);
        };

        this.divForm_divSchForm_divSch_cbo00_06_03_00_01_onitemchanged = function(obj,e)
        {
        	this.dsSearch.setColumn(0, "ST20_SE", e.postvalue);
        };

        this.divForm_divSchForm_divSch_cbo00_06_03_00_00_onitemchanged = function(obj,e)
        {
        	this.dsSearch.setColumn(0, "ST14_SE", e.postvalue);
        };

        this.divForm_divSchForm_divSch_cbo00_06_03_00_03_onitemchanged = function(obj,e)
        {
        	this.dsSearch.setColumn(0, "ST12_SE", e.postvalue);
        };

        this.divForm_divSchForm_divSch_cbo00_06_03_00_02_00_onitemchanged = function(obj,e)
        {
        	this.dsSearch.setColumn(0, "ST18_SE", e.postvalue);
        };

        this.divForm_divSchForm_divSch_cbo00_06_03_00_02_onitemchanged = function(obj,e)
        {
        	this.dsSearch.setColumn(0, "ST19_SE", e.postvalue);
        };

        this.divForm_divSchForm_divSch_cbo00_06_03_00_01_00_00_onitemchanged = function(obj,e)
        {
        	this.dsSearch.setColumn(0, "ST15_SE", e.postvalue);
        };

        this.divForm_divSchForm_divSch_cbo00_05_00_00_onitemchanged = function(obj,e)
        {
        	this.dsSearch.setColumn(0, "ST16_SE4", e.postvalue);
        };

        this.divForm_divGrd_btnGrdAdd04_onclick = function(obj,e)
        {
        	this.selectTransaction();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.divSchForm.form.divSch.form.cbo00.addEventHandler("onitemchanged",this.cbo00_onitemchanged,this);
            this.divForm.form.divSchForm.form.divSch.form.cbo00_00.addEventHandler("onitemchanged",this.divForm_divSchForm_divSch_cbo00_00_onitemchanged,this);
            this.divForm.form.divSchForm.form.divSch.form.staLabel04.addEventHandler("onclick",this.divForm_divSch_staLabel04_onclick,this);
            this.divForm.form.divSchForm.form.divSch.form.cbo00_01.addEventHandler("onitemchanged",this.divForm_divSchForm_divSch_cbo00_01_onitemchanged,this);
            this.divForm.form.divSchForm.form.divSch.form.cbo00_02.addEventHandler("onitemchanged",this.divForm_divSchForm_divSch_cbo00_02_onitemchanged,this);
            this.divForm.form.divSchForm.form.divSch.form.cbo00_03.addEventHandler("onitemchanged",this.divForm_divSchForm_divSch_cbo00_03_onitemchanged,this);
            this.divForm.form.divSchForm.form.divSch.form.cbo00_04.addEventHandler("onitemchanged",this.divForm_divSchForm_divSch_cbo00_04_onitemchanged,this);
            this.divForm.form.divSchForm.form.divSch.form.cbo00_05.addEventHandler("onitemchanged",this.divForm_divSchForm_divSch_cbo00_05_onitemchanged,this);
            this.divForm.form.divSchForm.form.divSch.form.Button00.addEventHandler("onclick",this.divForm_divSch_Button00_onclick,this);
            this.divForm.form.divSchForm.form.divSch.form.cbo00_06_00.addEventHandler("onitemchanged",this.divForm_divSchForm_divSch_cbo00_06_00_onitemchanged,this);
            this.divForm.form.divSchForm.form.divSch.form.cbo00_06_01.addEventHandler("onitemchanged",this.divForm_divSchForm_divSch_cbo00_06_01_onitemchanged,this);
            this.divForm.form.divSchForm.form.divSch.form.cbo00_06_02.addEventHandler("onitemchanged",this.divForm_divSchForm_divSch_cbo00_06_02_onitemchanged,this);
            this.divForm.form.divSchForm.form.divSch.form.cbo00_06_02_00.addEventHandler("onitemchanged",this.divForm_divSchForm_divSch_cbo00_06_02_00_onitemchanged,this);
            this.divForm.form.divSchForm.form.divSch.form.cbo00_06_03.addEventHandler("onitemchanged",this.divForm_divSchForm_divSch_cbo00_06_03_onitemchanged,this);
            this.divForm.form.divSchForm.form.divSch.form.cbo00_06_03_00_00.addEventHandler("onitemchanged",this.divForm_divSchForm_divSch_cbo00_06_03_00_00_onitemchanged,this);
            this.divForm.form.divSchForm.form.divSch.form.cbo00_06_03_00_01.addEventHandler("onitemchanged",this.divForm_divSchForm_divSch_cbo00_06_03_00_01_onitemchanged,this);
            this.divForm.form.divSchForm.form.divSch.form.cbo00_06_03_00_01_00.addEventHandler("onitemchanged",this.divForm_divSchForm_divSch_cbo00_06_03_00_01_00_onitemchanged,this);
            this.divForm.form.divSchForm.form.divSch.form.cbo00_06_03_00_01_00_00.addEventHandler("onitemchanged",this.divForm_divSchForm_divSch_cbo00_06_03_00_01_00_00_onitemchanged,this);
            this.divForm.form.divSchForm.form.divSch.form.cbo00_06_03_00_02.addEventHandler("onitemchanged",this.divForm_divSchForm_divSch_cbo00_06_03_00_02_onitemchanged,this);
            this.divForm.form.divSchForm.form.divSch.form.cbo00_06_03_00_02_00.addEventHandler("onitemchanged",this.divForm_divSchForm_divSch_cbo00_06_03_00_02_00_onitemchanged,this);
            this.divForm.form.divSchForm.form.divSch.form.cbo00_06_03_00_03.addEventHandler("onitemchanged",this.divForm_divSchForm_divSch_cbo00_06_03_00_03_onitemchanged,this);
            this.divForm.form.divSchForm.form.divSch.form.cbo00_05_00.addEventHandler("onitemchanged",this.divForm_divSchForm_divSch_cbo00_05_00_onitemchanged,this);
            this.divForm.form.divSchForm.form.divSch.form.cbo00_05_00_00.addEventHandler("onitemchanged",this.divForm_divSchForm_divSch_cbo00_05_00_00_onitemchanged,this);
            this.divForm.form.divGrd.form.btnGrdAdd04.addEventHandler("onclick",this.divForm_divGrd_btnGrdAdd04_onclick,this);
            this.divForm.form.divGrd.form.Div01.form.Div00.form.Static00_00.addEventHandler("onclick",this.divForm_divGrd_Static00_onclick,this);
            this.divForm.form.divGrd.form.Div01.form.Div00.form.grd03.addEventHandler("ondrag",this.grd03_ondrag,this);
            this.divForm.form.divGrd.form.Div01.form.Div00.form.grd03.addEventHandler("ondrop",this.grd03_ondrop,this);
            this.divForm.form.divGrd.form.Div01.form.Div00.form.grd03.addEventHandler("ondragmove",this.grd03_ondragmove,this);
            this.divForm.form.divGrd.form.Div01.form.Div00.form.grd03.addEventHandler("ondragenter",this.grd03_ondragenter,this);
            this.divForm.form.divGrd.form.Div01.form.Div00.form.grd03.addEventHandler("ondragleave",this.grd03_ondragleave,this);
            this.divForm.form.divGrd.form.Div01.form.Div00.form.grd03.addEventHandler("ondropdown",this.grd03_ondropdown,this);
            this.divForm.form.divGrd.form.Div01.form.Div00.form.grd03.addEventHandler("onenterdown",this.grd03_onenterdown,this);
            this.divForm.form.divGrd.form.Div01.form.Div00.form.Static00.addEventHandler("onclick",this.divForm_divGrd_Static00_onclick,this);
            this.divForm.form.divGrd.form.Div01.form.Div00.form.grd03_00.addEventHandler("ondrag",this.grd03_ondrag,this);
            this.divForm.form.divGrd.form.Div01.form.Div00.form.grd03_00.addEventHandler("ondrop",this.grd03_ondrop,this);
            this.divForm.form.divGrd.form.Div01.form.Div00.form.grd03_00.addEventHandler("ondragmove",this.grd03_ondragmove,this);
            this.divForm.form.divGrd.form.Div01.form.Div00.form.grd03_00.addEventHandler("ondragenter",this.grd03_ondragenter,this);
            this.divForm.form.divGrd.form.Div01.form.Div00.form.grd03_00.addEventHandler("ondragleave",this.grd03_ondragleave,this);
            this.divForm.form.divGrd.form.Div01.form.Div00.form.grd03_00.addEventHandler("ondropdown",this.grd03_ondropdown,this);
            this.divForm.form.divGrd.form.Div01.form.Div00.form.grd03_00.addEventHandler("onenterdown",this.grd03_onenterdown,this);
            this.divForm.form.divGrd.form.Div01.form.Div01.form.Static01_01_00.addEventHandler("onclick",this.divForm_divGrd_Static00_onclick,this);
            this.divForm.form.divGrd.form.Div01.form.Div01.form.Static01_01_00_00.addEventHandler("onclick",this.divForm_divGrd_Static00_onclick,this);
            this.divForm.form.divGrd.form.Div01.form.Div01.form.Static00_00.addEventHandler("onclick",this.divForm_divGrd_Static00_onclick,this);
            this.divForm.form.divGrd.form.Div01.form.Div01.form.grd01_01.addEventHandler("ondrag",this.grd03_ondrag,this);
            this.divForm.form.divGrd.form.Div01.form.Div01.form.grd01_01.addEventHandler("ondrop",this.grd03_ondrop,this);
            this.divForm.form.divGrd.form.Div01.form.Div01.form.grd01_01.addEventHandler("ondragmove",this.grd03_ondragmove,this);
            this.divForm.form.divGrd.form.Div01.form.Div01.form.grd01_01.addEventHandler("ondragenter",this.grd03_ondragenter,this);
            this.divForm.form.divGrd.form.Div01.form.Div01.form.grd01_01.addEventHandler("ondragleave",this.grd03_ondragleave,this);
            this.divForm.form.divGrd.form.Div01.form.Div01.form.grd01_01.addEventHandler("ondropdown",this.grd03_ondropdown,this);
            this.divForm.form.divGrd.form.Div01.form.Div01.form.grd01_01.addEventHandler("onenterdown",this.grd03_onenterdown,this);
            this.divForm.form.divGrd.form.Div01.form.Div01.form.grd01_01_00.addEventHandler("ondrag",this.grd03_ondrag,this);
            this.divForm.form.divGrd.form.Div01.form.Div01.form.grd01_01_00.addEventHandler("ondrop",this.grd03_ondrop,this);
            this.divForm.form.divGrd.form.Div01.form.Div01.form.grd01_01_00.addEventHandler("ondragmove",this.grd03_ondragmove,this);
            this.divForm.form.divGrd.form.Div01.form.Div01.form.grd01_01_00.addEventHandler("ondragenter",this.grd03_ondragenter,this);
            this.divForm.form.divGrd.form.Div01.form.Div01.form.grd01_01_00.addEventHandler("ondragleave",this.grd03_ondragleave,this);
            this.divForm.form.divGrd.form.Div01.form.Div01.form.grd01_01_00.addEventHandler("ondropdown",this.grd03_ondropdown,this);
            this.divForm.form.divGrd.form.Div01.form.Div01.form.grd01_01_00.addEventHandler("onenterdown",this.grd03_onenterdown,this);
            this.divForm.form.divGrd.form.Div01.form.Div01.form.grd01_01_01.addEventHandler("ondrag",this.grd03_ondrag,this);
            this.divForm.form.divGrd.form.Div01.form.Div01.form.grd01_01_01.addEventHandler("ondrop",this.grd03_ondrop,this);
            this.divForm.form.divGrd.form.Div01.form.Div01.form.grd01_01_01.addEventHandler("ondragmove",this.grd03_ondragmove,this);
            this.divForm.form.divGrd.form.Div01.form.Div01.form.grd01_01_01.addEventHandler("ondragenter",this.grd03_ondragenter,this);
            this.divForm.form.divGrd.form.Div01.form.Div01.form.grd01_01_01.addEventHandler("ondragleave",this.grd03_ondragleave,this);
            this.divForm.form.divGrd.form.Div01.form.Div01.form.grd01_01_01.addEventHandler("ondropdown",this.grd03_ondropdown,this);
            this.divForm.form.divGrd.form.Div01.form.Div01.form.grd01_01_01.addEventHandler("onenterdown",this.grd03_onenterdown,this);
            this.divPopBtn.form.Button00_00.addEventHandler("onclick",this.divPopBtn_Button00_00_onclick,this);
            this.divGuide.form.PopupMenu00.addEventHandler("onmenuclick",this.PopupMenu00_onmenuclick,this);
        };
        this.loadIncludeScript("COM031P21.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
