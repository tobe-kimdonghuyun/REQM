(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST13M00_01");
            this.set_titletext("공사(작업)내역");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Panel("panForm","0","0","100.00%","1768.999",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_fittocontents("height");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle\"/><PanelItem id=\"PanelItem02\" componentid=\"div00_01_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle","353","230","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("공사(작업)내역");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","1423","230","209","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnClose\"/><PanelItem id=\"PanelItem02\" componentid=\"btnOpen\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","1210","23","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnOpen","1133","3","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_ACMinus");
            this.addChild(obj.name, obj);

            obj = new Panel("panTitle","353","230","100.00%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("4");
            obj.set_fittocontents("none");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("div00_01_02","1680","71","100.00%","1698.999",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("신청자정보");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_01_00","10","98","100%","46",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("0");
            obj.set_text("작업(공사)명");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Edit("edtCstrnJobNm","20.00","288","100%","40",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("1");
            obj.set_readonly("false");
            obj.set_text("");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Panel("pan_04_00_00_00","20.00","242","300","86",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtCstrnJobNm\"/></Contents>");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Panel("pan07","0","242","100.00%","97",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("3");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan_04_00_00_00\"/></Contents>");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Static("staLabel00","10","98","100%","46",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("4");
            obj.set_text("작업기간(시작일)");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Calendar("calJobPrdBgngYmd","78","85","150","40",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd ");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","20.00","84","300","86",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem02\" componentid=\"calJobPrdBgngYmd\"/></Contents>");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_00","974.00","151","100%","46",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("7");
            obj.set_text("작업기간(종료일)");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Calendar("calJobPrdEndYmd","601","96","150","40",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Panel("pan06_00","974.00","151","300","86",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"calJobPrdEndYmd\"/></Contents>");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","97",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("10");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan06_00\"/></Contents>");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","20.00","84","300","119.999",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("14");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoCstrnJobWeekNghtSeCd\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel00_01\"/></Contents>");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_00_00","974.00","151","100%","46",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("15");
            obj.set_text("작업일");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Calendar("calJobDt","601","96","150","40",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("16");
            obj.set_dateformat("yyyy-MM-dd");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Panel("pan06_00_00","974.00","151","300","119.99799999999999",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("17");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"calJobDt\"/></Contents>");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Panel("pan00_00","0","60","100.00%","130.999",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("18");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan06_00_00\"/></Contents>");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Static("staLabel00_01","10","98","100%","46",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("20");
            obj.set_text("작업시작시간");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01","20.00","84","300","86",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("21");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtJobBgngHr\"/></Contents>");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Edit("edtJobBgngHr","72","577","100%","40",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("25");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_00_01","974.00","151","100%","46",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("22");
            obj.set_text("작업종료시간");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Panel("pan06_00_01","974.00","151","300","86",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("23");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtJobEndHr\"/></Contents>");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Edit("edtJobEndHr","628","582","100%","40",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("26");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Panel("pan00_01","0","60","100.00%","97",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("24");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan06_00_01\"/></Contents>");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00","10","98","100%","46",null,null,null,null,"46",null,this.div00_01_02.form);
            obj.set_taborder("27");
            obj.set_text("작업목적");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Radio("rdoJobPrpsCd","20","544","100%","40",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("28");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_fittocontents("none");
            obj.set_flexshrink("0");
            obj.set_direction("horizontal");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var div00_01_02_form_rdoJobPrpsCd_innerdataset = new nexacro.NormalDataset("div00_01_02_form_rdoJobPrpsCd_innerdataset", obj);
            div00_01_02_form_rdoJobPrpsCd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">유지보수</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">시설물점검</Col></Row><Row><Col id=\"datacolumn\">하자보수</Col><Col id=\"codecolumn\">2</Col></Row><Row><Col id=\"datacolumn\">개선공사</Col><Col id=\"codecolumn\">3</Col></Row><Row><Col id=\"datacolumn\">기타</Col><Col id=\"codecolumn\">4</Col></Row></Rows>");
            obj.set_innerdataset(div00_01_02_form_rdoJobPrpsCd_innerdataset);
            obj.set_text("주간");
            obj.set_value("0");
            obj.set_index("0");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00","20.00","84","100%","90",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("29");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoJobPrpsCd\"/></Contents>");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Panel("pan00_00_00","0","60","100.00%","101",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("30");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_00\"/></Contents>");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Static("staLabel00_01_00","10","98","100%","46",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("31");
            obj.set_text("작업목적 기타내용");
            obj.set_cssclass("sta_WF_Label");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01_00","20.00","84","100%","130",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("32");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"txtJobPrpsEtcCn\"/></Contents>");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Panel("pan00_01_00","0","60","100.00%","141",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("33");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_01_00\"/></Contents>");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new TextArea("txtJobPrpsEtcCn","81","730","100%","80",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("34");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Static("staLabel00_01_00_00","10","98","100%","46",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("35");
            obj.set_text("작업내용");
            obj.set_cssclass("sta_WF_Label");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new TextArea("txtJobCn","81","730","100%","80",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("36");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01_00_00","20.00","84","100%","130",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("37");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"txtJobCn\"/></Contents>");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Panel("pan00_01_00_00","0","60","100.00%","141",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("38");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_01_00_00\"/></Contents>");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new CheckBox("chkCstrnJobPstnSeCd2","207","1001","90","40",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("43");
            obj.set_text("RAMP");
            obj.set_fittocontents("width");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new CheckBox("chkCstrnJobPstnSeCd1","92","965","102","40",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("42");
            obj.set_text("기동지역");
            obj.set_fittocontents("width");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Static("staLabel00_01_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("39");
            obj.set_text("작업(공사위치) 구분");
            obj.set_cssclass("sta_WF_Label");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01_00_00_00","20.00","84","300","86",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("40");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/></Contents>");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Panel("pan00_01_00_00_00","0","60","100.00%","97",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("41");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_01_00_00_00\"/></Contents>");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new CheckBox("chkCstrnJobPstnSeCd3","268","960","102","40",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("45");
            obj.set_text("기타지역");
            obj.set_fittocontents("width");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Panel("Panel00","20","973","100%","40",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("44");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"chkCstrnJobPstnSeCd1\"/><PanelItem id=\"PanelItem01\" componentid=\"chkCstrnJobPstnSeCd2\"/><PanelItem id=\"PanelItem02\" componentid=\"chkCstrnJobPstnSeCd3\"/></Contents>");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01","20.00","242","305","46",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("46");
            obj.set_text("작업(공사위치)도면첨부");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Panel("Panel00_02","20","242","100%","46",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("47");
            obj.set_horizontalgap("10");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel03\"/></Contents>");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Static("Static00","83","444","100%","40",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("48");
            obj.set_text("세부 위치 입력, 필요시 도면 첨부(JPG만 첨부가능)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00","20.00","242","100%","134",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("49");
            obj.set_type("vertical");
            obj.set_flexgrow("0");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Grid00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static00\"/></Contents>");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Panel("pan04","0","242","100.00%","171",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("50");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00\"/></Contents>");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Panel("Panel03","750","984","250","46",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("80");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Grid("Grid00","102","1032","100%","40",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("79");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"120\" band=\"right\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"파일찾기\" cssclass=\"CellFileUp\"/><Cell col=\"2\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\" cssclass=\"CellFileDel\"/></Band></Format></Formats>");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_01_00_00","10","98","100%","46",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("51");
            obj.set_text("작업(공사위치) 상세");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Edit("edtJobCstrnPstnDtlCn","20.00","288","100%","40",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("52");
            obj.set_readonly("false");
            obj.set_text("");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Panel("pan_04_00_00_00_00","20.00","242","300","86",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("53");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtJobCstrnPstnDtlCn\"/></Contents>");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Panel("pan07_00","0","242","100.00%","97",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("54");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan_04_00_00_00_00\"/></Contents>");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Static("staLabel00_01_01","10","98","100%","46",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("55");
            obj.set_text("출입초소 및 이동경로");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Edit("edtIncmgChckpntMvmnPathNm","72","577","100%","40",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("56");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01_01","20.00","84","300","86",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("57");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtIncmgChckpntMvmnPathNm\"/></Contents>");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_00_01_00","974.00","151","100%","46",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("58");
            obj.set_text("긴급여부");
            obj.set_cssclass("sta_WF_Label");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Panel("pan06_00_01_00","974.00","151","300","130",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("59");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"rdoEmrgYn\"/><PanelItem id=\"PanelItem02\" componentid=\"Static01\"/></Contents>");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Panel("pan00_01_01","0","60","100.00%","141",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("60");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan06_00_01_00\"/></Contents>");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Radio("rdoEmrgYn","681","1303","100%","40",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("61");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("none");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var div00_01_02_form_rdoEmrgYn_innerdataset = new nexacro.NormalDataset("div00_01_02_form_rdoEmrgYn_innerdataset", obj);
            div00_01_02_form_rdoEmrgYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(div00_01_02_form_rdoEmrgYn_innerdataset);
            obj.set_text("예");
            obj.set_value("0");
            obj.set_index("0");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Static("Static01","781","1323","100%","74",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("62");
            obj.set_text("긴급상황으로 인해 용역담당자승인이 불가한 경우에만 체크 후 용역담당자확인이 아닌 신청버튼을 클릭해주시기 바랍니다.");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_Des");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Static("staLabel00_01_01_00","10","98","100%","46",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("63");
            obj.set_text("용역/공사 담당자 유무");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01_01_00","20.00","84","300","86",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("64");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoLbsvcPbcprtPicExnYn\"/></Contents>");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Radio("rdoLbsvcPbcprtPicExnYn","681","1303","100%","40",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("65");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("none");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var div00_01_02_form_rdoLbsvcPbcprtPicExnYn_innerdataset = new nexacro.NormalDataset("div00_01_02_form_rdoLbsvcPbcprtPicExnYn_innerdataset", obj);
            div00_01_02_form_rdoLbsvcPbcprtPicExnYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(div00_01_02_form_rdoLbsvcPbcprtPicExnYn_innerdataset);
            obj.set_text("예");
            obj.set_value("0");
            obj.set_index("0");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Panel("panBlank","974.00","151","305","1",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("66");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents/>");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Panel("pan00_01_01_00","0","60","100.00%","97",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("67");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_01_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"panBlank\"/></Contents>");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Static("staLabel00_01_02","10","98","100%","46",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("68");
            obj.set_text("용역/공사 담당자(성명 기입)");
            obj.set_cssclass("sta_WF_Label");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01_02","20.00","84","300","86",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("69");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Div00\"/></Contents>");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_00_01_01","974.00","151","100%","46",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("70");
            obj.set_text("용역/공사 담당자 회사명");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Edit("Edit01_00","628","582","100%","40",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("71");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Panel("pan06_00_01_01","974.00","151","300","86",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("72");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_00_01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit01_00\"/></Contents>");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Panel("pan00_01_02","0","60","100.00%","97",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("73");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_01_02\"/><PanelItem id=\"PanelItem02\" componentid=\"pan06_00_01_01\"/></Contents>");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Div("Div00","60","1518","100%","40",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            obj.set_taborder("74");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Edit("edtLbsvcPbcprtPicNm","0","0",null,"40","0",null,null,null,null,null,this.div00_01_02.form.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            this.div00_01_02.form.Div00.addChild(obj.name, obj);

            obj = new Button("btnPop","edtLbsvcPbcprtPicNm:-40","0","40","40",null,null,null,null,null,null,this.div00_01_02.form.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            this.div00_01_02.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_01_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("75");
            obj.set_text("투입장비(차량)");
            obj.set_cssclass("sta_WF_Label");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Edit("edtPutEqpmntCn","20.00","288","100%","40",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("76");
            obj.set_readonly("false");
            obj.set_text("");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Panel("pan_04_00_00_00_00_00","20.00","242","300","86",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("77");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_01_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtPutEqpmntCn\"/></Contents>");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Panel("pan07_00_00","0","242","100.00%","97",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("78");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan_04_00_00_00_00_00\"/></Contents>");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Static("Static03_01","81","238","100%","40",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("12");
            obj.set_text("(주간 09시~18시, 야간 18시~09시)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","10","98","100%","46",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("11");
            obj.set_text("작업(공사) 시간구분");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Radio("rdoCstrnJobWeekNghtSeCd","148","528","280","40",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("19");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var div00_01_02_form_rdoCstrnJobWeekNghtSeCd_innerdataset = new nexacro.NormalDataset("div00_01_02_form_rdoCstrnJobWeekNghtSeCd_innerdataset", obj);
            div00_01_02_form_rdoCstrnJobWeekNghtSeCd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">주간</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">야간</Col></Row></Rows>");
            obj.set_innerdataset(div00_01_02_form_rdoCstrnJobWeekNghtSeCd_innerdataset);
            obj.set_text("주간");
            obj.set_value("0");
            obj.set_index("0");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","50","196","100%","50",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("13");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static03_01\"/></Contents>");
            this.div00_01_02.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00_01_02.form.Div00.form
            obj = new Layout("default","",0,0,this.div00_01_02.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.edtLbsvcPbcprtPicNm.set_taborder("0");
                p.edtLbsvcPbcprtPicNm.set_cssclass("edt_WF_EdtSch");
                p.edtLbsvcPbcprtPicNm.move("0","0",null,"40","0",null);

                p.btnPop.set_taborder("1");
                p.btnPop.set_cssclass("btn_WF_EdtSch");
                p.btnPop.move("edtLbsvcPbcprtPicNm:-40","0","40","40",null,null);
            	}
            );
            this.div00_01_02.form.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00_01_02.form.Div00.form
            obj = new Layout("mobile","",0,0,this.div00_01_02.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.div00_01_02.form.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00_01_02.form.Div00.form
            obj = new Layout("Layout0","",0,0,this.div00_01_02.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.div00_01_02.form.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.div00_01_02.form
            obj = new Layout("default","",0,0,this.div00_01_02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel03_00_00_01_00.set_taborder("0");
                p.staLabel03_00_00_01_00.set_text("작업(공사)명");
                p.staLabel03_00_00_01_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_00_01_00.move("10","98","100%","46",null,null);

                p.edtCstrnJobNm.set_taborder("1");
                p.edtCstrnJobNm.set_readonly("false");
                p.edtCstrnJobNm.move("20.00","288","100%","40",null,null);

                p.pan_04_00_00_00.set_taborder("2");
                p.pan_04_00_00_00.set_type("vertical");
                p.pan_04_00_00_00.set_flexgrow("1");
                p.pan_04_00_00_00.set_fittocontents("height");
                p.pan_04_00_00_00.move("20.00","242","300","86",null,null);

                p.pan07.set_taborder("3");
                p.pan07.set_horizontalgap("20");
                p.pan07.set_flexcrossaxiswrapalign("start");
                p.pan07.set_flexwrap("wrap");
                p.pan07.set_fittocontents("height");
                p.pan07.set_verticalgap("0");
                p.pan07.set_spacing("0px 20px 10px 20px");
                p.pan07.set_cssclass("pal_WF_DtlBg");
                p.pan07.move("0","242","100.00%","97",null,null);

                p.staLabel00.set_taborder("4");
                p.staLabel00.set_text("작업기간(시작일)");
                p.staLabel00.set_cssclass("sta_WF_Label_E");
                p.staLabel00.move("10","98","100%","46",null,null);

                p.calJobPrdBgngYmd.set_taborder("5");
                p.calJobPrdBgngYmd.set_dateformat("yyyy-MM-dd ");
                p.calJobPrdBgngYmd.move("78","85","150","40",null,null);

                p.Panel00_00.set_taborder("6");
                p.Panel00_00.set_type("vertical");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.set_fittocontents("height");
                p.Panel00_00.set_verticalgap("4");
                p.Panel00_00.set_minwidth("");
                p.Panel00_00.move("20.00","84","300","86",null,null);

                p.staLabel03_00_00_00.set_taborder("7");
                p.staLabel03_00_00_00.set_text("작업기간(종료일)");
                p.staLabel03_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_00_00.move("974.00","151","100%","46",null,null);

                p.calJobPrdEndYmd.set_taborder("8");
                p.calJobPrdEndYmd.set_dateformat("yyyy-MM-dd");
                p.calJobPrdEndYmd.move("601","96","150","40",null,null);

                p.pan06_00.set_taborder("9");
                p.pan06_00.set_type("vertical");
                p.pan06_00.set_flexgrow("1");
                p.pan06_00.set_fittocontents("height");
                p.pan06_00.set_verticalgap("4");
                p.pan06_00.move("974.00","151","300","86",null,null);

                p.pan00.set_taborder("10");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("0px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.move("0","60","100.00%","97",null,null);

                p.Panel00_00_00.set_taborder("14");
                p.Panel00_00_00.set_type("vertical");
                p.Panel00_00_00.set_flexgrow("1");
                p.Panel00_00_00.set_fittocontents("height");
                p.Panel00_00_00.set_verticalgap("4");
                p.Panel00_00_00.set_minwidth("");
                p.Panel00_00_00.move("20.00","84","300","119.999",null,null);

                p.staLabel03_00_00_00_00.set_taborder("15");
                p.staLabel03_00_00_00_00.set_text("작업일");
                p.staLabel03_00_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_00_00_00.move("974.00","151","100%","46",null,null);

                p.calJobDt.set_taborder("16");
                p.calJobDt.set_dateformat("yyyy-MM-dd");
                p.calJobDt.move("601","96","150","40",null,null);

                p.pan06_00_00.set_taborder("17");
                p.pan06_00_00.set_type("vertical");
                p.pan06_00_00.set_flexgrow("1");
                p.pan06_00_00.set_fittocontents("height");
                p.pan06_00_00.set_verticalgap("4");
                p.pan06_00_00.move("974.00","151","300","119.99799999999999",null,null);

                p.pan00_00.set_taborder("18");
                p.pan00_00.set_horizontalgap("20");
                p.pan00_00.set_flexcrossaxiswrapalign("start");
                p.pan00_00.set_flexwrap("wrap");
                p.pan00_00.set_fittocontents("height");
                p.pan00_00.set_verticalgap("0");
                p.pan00_00.set_spacing("0px 20px 10px 20px");
                p.pan00_00.set_cssclass("pal_WF_DtlBg");
                p.pan00_00.move("0","60","100.00%","130.999",null,null);

                p.staLabel00_01.set_taborder("20");
                p.staLabel00_01.set_text("작업시작시간");
                p.staLabel00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel00_01.move("10","98","100%","46",null,null);

                p.Panel00_00_01.set_taborder("21");
                p.Panel00_00_01.set_type("vertical");
                p.Panel00_00_01.set_flexgrow("1");
                p.Panel00_00_01.set_fittocontents("height");
                p.Panel00_00_01.set_verticalgap("4");
                p.Panel00_00_01.set_minwidth("");
                p.Panel00_00_01.move("20.00","84","300","86",null,null);

                p.edtJobBgngHr.set_taborder("25");
                p.edtJobBgngHr.move("72","577","100%","40",null,null);

                p.staLabel03_00_00_00_01.set_taborder("22");
                p.staLabel03_00_00_00_01.set_text("작업종료시간");
                p.staLabel03_00_00_00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_00_00_01.move("974.00","151","100%","46",null,null);

                p.pan06_00_01.set_taborder("23");
                p.pan06_00_01.set_type("vertical");
                p.pan06_00_01.set_flexgrow("1");
                p.pan06_00_01.set_fittocontents("height");
                p.pan06_00_01.set_verticalgap("4");
                p.pan06_00_01.move("974.00","151","300","86",null,null);

                p.edtJobEndHr.set_taborder("26");
                p.edtJobEndHr.move("628","582","100%","40",null,null);

                p.pan00_01.set_taborder("24");
                p.pan00_01.set_horizontalgap("20");
                p.pan00_01.set_flexcrossaxiswrapalign("start");
                p.pan00_01.set_flexwrap("wrap");
                p.pan00_01.set_fittocontents("height");
                p.pan00_01.set_verticalgap("0");
                p.pan00_01.set_spacing("0px 20px 10px 20px");
                p.pan00_01.set_cssclass("pal_WF_DtlBg");
                p.pan00_01.move("0","60","100.00%","97",null,null);

                p.staLabel00_00_00.set_taborder("27");
                p.staLabel00_00_00.set_text("작업목적");
                p.staLabel00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_00_00.set_minheight("46");
                p.staLabel00_00_00.set_maxheight("");
                p.staLabel00_00_00.move("10","98","100%","46",null,null);

                p.rdoJobPrpsCd.set_taborder("28");
                p.rdoJobPrpsCd.set_innerdataset(div00_01_02_form_rdoJobPrpsCd_innerdataset);
                p.rdoJobPrpsCd.set_codecolumn("codecolumn");
                p.rdoJobPrpsCd.set_datacolumn("datacolumn");
                p.rdoJobPrpsCd.set_fittocontents("none");
                p.rdoJobPrpsCd.set_flexshrink("0");
                p.rdoJobPrpsCd.set_direction("horizontal");
                p.rdoJobPrpsCd.set_columncount("-1");
                p.rdoJobPrpsCd.set_rowcount("-1");
                p.rdoJobPrpsCd.set_value("0");
                p.rdoJobPrpsCd.set_index("0");
                p.rdoJobPrpsCd.move("20","544","100%","40",null,null);

                p.Panel00_00_00_00.set_taborder("29");
                p.Panel00_00_00_00.set_type("vertical");
                p.Panel00_00_00_00.set_fittocontents("height");
                p.Panel00_00_00_00.set_verticalgap("4");
                p.Panel00_00_00_00.set_minwidth("");
                p.Panel00_00_00_00.move("20.00","84","100%","90",null,null);

                p.pan00_00_00.set_taborder("30");
                p.pan00_00_00.set_horizontalgap("20");
                p.pan00_00_00.set_flexcrossaxiswrapalign("start");
                p.pan00_00_00.set_flexwrap("wrap");
                p.pan00_00_00.set_fittocontents("height");
                p.pan00_00_00.set_verticalgap("0");
                p.pan00_00_00.set_spacing("0px 20px 10px 20px");
                p.pan00_00_00.set_cssclass("pal_WF_DtlBg");
                p.pan00_00_00.move("0","60","100.00%","101",null,null);

                p.staLabel00_01_00.set_taborder("31");
                p.staLabel00_01_00.set_text("작업목적 기타내용");
                p.staLabel00_01_00.set_cssclass("sta_WF_Label");
                p.staLabel00_01_00.move("10","98","100%","46",null,null);

                p.Panel00_00_01_00.set_taborder("32");
                p.Panel00_00_01_00.set_type("vertical");
                p.Panel00_00_01_00.set_flexgrow("1");
                p.Panel00_00_01_00.set_fittocontents("height");
                p.Panel00_00_01_00.set_verticalgap("4");
                p.Panel00_00_01_00.set_minwidth("");
                p.Panel00_00_01_00.move("20.00","84","100%","130",null,null);

                p.pan00_01_00.set_taborder("33");
                p.pan00_01_00.set_horizontalgap("20");
                p.pan00_01_00.set_flexcrossaxiswrapalign("start");
                p.pan00_01_00.set_flexwrap("wrap");
                p.pan00_01_00.set_fittocontents("height");
                p.pan00_01_00.set_verticalgap("0");
                p.pan00_01_00.set_spacing("0px 20px 10px 20px");
                p.pan00_01_00.set_cssclass("pal_WF_DtlBg");
                p.pan00_01_00.move("0","60","100.00%","141",null,null);

                p.txtJobPrpsEtcCn.set_taborder("34");
                p.txtJobPrpsEtcCn.move("81","730","100%","80",null,null);

                p.staLabel00_01_00_00.set_taborder("35");
                p.staLabel00_01_00_00.set_text("작업내용");
                p.staLabel00_01_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_01_00_00.move("10","98","100%","46",null,null);

                p.txtJobCn.set_taborder("36");
                p.txtJobCn.move("81","730","100%","80",null,null);

                p.Panel00_00_01_00_00.set_taborder("37");
                p.Panel00_00_01_00_00.set_type("vertical");
                p.Panel00_00_01_00_00.set_fittocontents("height");
                p.Panel00_00_01_00_00.set_verticalgap("4");
                p.Panel00_00_01_00_00.set_minwidth("");
                p.Panel00_00_01_00_00.move("20.00","84","100%","130",null,null);

                p.pan00_01_00_00.set_taborder("38");
                p.pan00_01_00_00.set_horizontalgap("20");
                p.pan00_01_00_00.set_flexcrossaxiswrapalign("start");
                p.pan00_01_00_00.set_flexwrap("wrap");
                p.pan00_01_00_00.set_fittocontents("height");
                p.pan00_01_00_00.set_verticalgap("0");
                p.pan00_01_00_00.set_spacing("0px 20px 10px 20px");
                p.pan00_01_00_00.set_cssclass("pal_WF_DtlBg");
                p.pan00_01_00_00.move("0","60","100.00%","141",null,null);

                p.chkCstrnJobPstnSeCd2.set_taborder("43");
                p.chkCstrnJobPstnSeCd2.set_text("RAMP");
                p.chkCstrnJobPstnSeCd2.set_fittocontents("width");
                p.chkCstrnJobPstnSeCd2.move("207","1001","90","40",null,null);

                p.chkCstrnJobPstnSeCd1.set_taborder("42");
                p.chkCstrnJobPstnSeCd1.set_text("기동지역");
                p.chkCstrnJobPstnSeCd1.set_fittocontents("width");
                p.chkCstrnJobPstnSeCd1.move("92","965","102","40",null,null);

                p.staLabel00_01_00_00_00.set_taborder("39");
                p.staLabel00_01_00_00_00.set_text("작업(공사위치) 구분");
                p.staLabel00_01_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_01_00_00_00.move("10","98","100%","46",null,null);

                p.Panel00_00_01_00_00_00.set_taborder("40");
                p.Panel00_00_01_00_00_00.set_type("vertical");
                p.Panel00_00_01_00_00_00.set_flexgrow("1");
                p.Panel00_00_01_00_00_00.set_fittocontents("height");
                p.Panel00_00_01_00_00_00.set_verticalgap("4");
                p.Panel00_00_01_00_00_00.set_minwidth("");
                p.Panel00_00_01_00_00_00.move("20.00","84","300","86",null,null);

                p.pan00_01_00_00_00.set_taborder("41");
                p.pan00_01_00_00_00.set_horizontalgap("20");
                p.pan00_01_00_00_00.set_flexcrossaxiswrapalign("start");
                p.pan00_01_00_00_00.set_flexwrap("wrap");
                p.pan00_01_00_00_00.set_fittocontents("height");
                p.pan00_01_00_00_00.set_verticalgap("0");
                p.pan00_01_00_00_00.set_spacing("0px 20px 10px 20px");
                p.pan00_01_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.pan00_01_00_00_00.move("0","60","100.00%","97",null,null);

                p.chkCstrnJobPstnSeCd3.set_taborder("45");
                p.chkCstrnJobPstnSeCd3.set_text("기타지역");
                p.chkCstrnJobPstnSeCd3.set_fittocontents("width");
                p.chkCstrnJobPstnSeCd3.move("268","960","102","40",null,null);

                p.Panel00.set_taborder("44");
                p.Panel00.set_fittocontents("height");
                p.Panel00.move("20","973","100%","40",null,null);

                p.staLabel03_00_01.set_taborder("46");
                p.staLabel03_00_01.set_text("작업(공사위치)도면첨부");
                p.staLabel03_00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_01.set_fittocontents("width");
                p.staLabel03_00_01.set_flexgrow("1");
                p.staLabel03_00_01.move("20.00","242","305","46",null,null);

                p.Panel00_02.set_taborder("47");
                p.Panel00_02.set_horizontalgap("10");
                p.Panel00_02.set_tabletemplate("1* / 1* 1*");
                p.Panel00_02.set_fittocontents("height");
                p.Panel00_02.set_cssclass("pan_WF_FileTitle");
                p.Panel00_02.move("20","242","100%","46",null,null);

                p.Static00.set_taborder("48");
                p.Static00.set_text("세부 위치 입력, 필요시 도면 첨부(JPG만 첨부가능)");
                p.Static00.set_cssclass("sta_WF_Des");
                p.Static00.set_fittocontents("height");
                p.Static00.move("83","444","100%","40",null,null);

                p.Panel02_00_00.set_taborder("49");
                p.Panel02_00_00.set_type("vertical");
                p.Panel02_00_00.set_flexgrow("0");
                p.Panel02_00_00.set_verticalgap("4");
                p.Panel02_00_00.set_fittocontents("height");
                p.Panel02_00_00.move("20.00","242","100%","134",null,null);

                p.pan04.set_taborder("50");
                p.pan04.set_horizontalgap("20");
                p.pan04.set_flexcrossaxiswrapalign("start");
                p.pan04.set_flexwrap("wrap");
                p.pan04.set_fittocontents("height");
                p.pan04.set_spacing("10px 20px 10px 20px");
                p.pan04.set_cssclass("pal_WF_DtlBg");
                p.pan04.set_verticalgap("4");
                p.pan04.move("0","242","100.00%","171",null,null);

                p.Panel03.set_taborder("80");
                p.Panel03.set_flexmainaxisalign("end");
                p.Panel03.set_horizontalgap("10");
                p.Panel03.move("750","984","250","46",null,null);

                p.Grid00.set_taborder("79");
                p.Grid00.set_cssclass("grd_WF_FileAdd");
                p.Grid00.move("102","1032","100%","40",null,null);

                p.staLabel03_00_00_01_00_00.set_taborder("51");
                p.staLabel03_00_00_01_00_00.set_text("작업(공사위치) 상세");
                p.staLabel03_00_00_01_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_00_01_00_00.move("10","98","100%","46",null,null);

                p.edtJobCstrnPstnDtlCn.set_taborder("52");
                p.edtJobCstrnPstnDtlCn.set_readonly("false");
                p.edtJobCstrnPstnDtlCn.move("20.00","288","100%","40",null,null);

                p.pan_04_00_00_00_00.set_taborder("53");
                p.pan_04_00_00_00_00.set_type("vertical");
                p.pan_04_00_00_00_00.set_flexgrow("1");
                p.pan_04_00_00_00_00.set_fittocontents("height");
                p.pan_04_00_00_00_00.move("20.00","242","300","86",null,null);

                p.pan07_00.set_taborder("54");
                p.pan07_00.set_horizontalgap("20");
                p.pan07_00.set_flexcrossaxiswrapalign("start");
                p.pan07_00.set_flexwrap("wrap");
                p.pan07_00.set_fittocontents("height");
                p.pan07_00.set_verticalgap("0");
                p.pan07_00.set_spacing("0px 20px 10px 20px");
                p.pan07_00.set_cssclass("pal_WF_DtlBg");
                p.pan07_00.move("0","242","100.00%","97",null,null);

                p.staLabel00_01_01.set_taborder("55");
                p.staLabel00_01_01.set_text("출입초소 및 이동경로");
                p.staLabel00_01_01.set_cssclass("sta_WF_Label_E");
                p.staLabel00_01_01.move("10","98","100%","46",null,null);

                p.edtIncmgChckpntMvmnPathNm.set_taborder("56");
                p.edtIncmgChckpntMvmnPathNm.move("72","577","100%","40",null,null);

                p.Panel00_00_01_01.set_taborder("57");
                p.Panel00_00_01_01.set_type("vertical");
                p.Panel00_00_01_01.set_flexgrow("1");
                p.Panel00_00_01_01.set_fittocontents("height");
                p.Panel00_00_01_01.set_verticalgap("4");
                p.Panel00_00_01_01.set_minwidth("");
                p.Panel00_00_01_01.move("20.00","84","300","86",null,null);

                p.staLabel03_00_00_00_01_00.set_taborder("58");
                p.staLabel03_00_00_00_01_00.set_text("긴급여부");
                p.staLabel03_00_00_00_01_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00_00_00_01_00.move("974.00","151","100%","46",null,null);

                p.pan06_00_01_00.set_taborder("59");
                p.pan06_00_01_00.set_type("vertical");
                p.pan06_00_01_00.set_flexgrow("1");
                p.pan06_00_01_00.set_fittocontents("height");
                p.pan06_00_01_00.set_verticalgap("4");
                p.pan06_00_01_00.move("974.00","151","300","130",null,null);

                p.pan00_01_01.set_taborder("60");
                p.pan00_01_01.set_horizontalgap("20");
                p.pan00_01_01.set_flexcrossaxiswrapalign("start");
                p.pan00_01_01.set_flexwrap("wrap");
                p.pan00_01_01.set_fittocontents("height");
                p.pan00_01_01.set_verticalgap("0");
                p.pan00_01_01.set_spacing("0px 20px 10px 20px");
                p.pan00_01_01.set_cssclass("pal_WF_DtlBg");
                p.pan00_01_01.move("0","60","100.00%","141",null,null);

                p.rdoEmrgYn.set_taborder("61");
                p.rdoEmrgYn.set_innerdataset(div00_01_02_form_rdoEmrgYn_innerdataset);
                p.rdoEmrgYn.set_codecolumn("codecolumn");
                p.rdoEmrgYn.set_datacolumn("datacolumn");
                p.rdoEmrgYn.set_direction("vertical");
                p.rdoEmrgYn.set_fittocontents("none");
                p.rdoEmrgYn.set_columncount("-1");
                p.rdoEmrgYn.set_rowcount("-1");
                p.rdoEmrgYn.set_value("0");
                p.rdoEmrgYn.set_index("0");
                p.rdoEmrgYn.move("681","1303","100%","40",null,null);

                p.Static01.set_taborder("62");
                p.Static01.set_text("긴급상황으로 인해 용역담당자승인이 불가한 경우에만 체크 후 용역담당자확인이 아닌 신청버튼을 클릭해주시기 바랍니다.");
                p.Static01.set_fittocontents("height");
                p.Static01.set_cssclass("sta_WF_Des");
                p.Static01.move("781","1323","100%","74",null,null);

                p.staLabel00_01_01_00.set_taborder("63");
                p.staLabel00_01_01_00.set_text("용역/공사 담당자 유무");
                p.staLabel00_01_01_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_01_01_00.move("10","98","100%","46",null,null);

                p.Panel00_00_01_01_00.set_taborder("64");
                p.Panel00_00_01_01_00.set_type("vertical");
                p.Panel00_00_01_01_00.set_flexgrow("1");
                p.Panel00_00_01_01_00.set_fittocontents("height");
                p.Panel00_00_01_01_00.set_verticalgap("4");
                p.Panel00_00_01_01_00.set_minwidth("");
                p.Panel00_00_01_01_00.move("20.00","84","300","86",null,null);

                p.rdoLbsvcPbcprtPicExnYn.set_taborder("65");
                p.rdoLbsvcPbcprtPicExnYn.set_innerdataset(div00_01_02_form_rdoLbsvcPbcprtPicExnYn_innerdataset);
                p.rdoLbsvcPbcprtPicExnYn.set_codecolumn("codecolumn");
                p.rdoLbsvcPbcprtPicExnYn.set_datacolumn("datacolumn");
                p.rdoLbsvcPbcprtPicExnYn.set_direction("vertical");
                p.rdoLbsvcPbcprtPicExnYn.set_fittocontents("none");
                p.rdoLbsvcPbcprtPicExnYn.set_columncount("-1");
                p.rdoLbsvcPbcprtPicExnYn.set_rowcount("-1");
                p.rdoLbsvcPbcprtPicExnYn.set_value("0");
                p.rdoLbsvcPbcprtPicExnYn.set_index("0");
                p.rdoLbsvcPbcprtPicExnYn.move("681","1303","100%","40",null,null);

                p.panBlank.set_taborder("66");
                p.panBlank.set_type("vertical");
                p.panBlank.set_flexgrow("1");
                p.panBlank.set_fittocontents("height");
                p.panBlank.set_verticalgap("4");
                p.panBlank.move("974.00","151","305","1",null,null);

                p.pan00_01_01_00.set_taborder("67");
                p.pan00_01_01_00.set_horizontalgap("20");
                p.pan00_01_01_00.set_flexcrossaxiswrapalign("start");
                p.pan00_01_01_00.set_flexwrap("wrap");
                p.pan00_01_01_00.set_fittocontents("height");
                p.pan00_01_01_00.set_verticalgap("0");
                p.pan00_01_01_00.set_spacing("0px 20px 10px 20px");
                p.pan00_01_01_00.set_cssclass("pal_WF_DtlBg");
                p.pan00_01_01_00.move("0","60","100.00%","97",null,null);

                p.staLabel00_01_02.set_taborder("68");
                p.staLabel00_01_02.set_text("용역/공사 담당자(성명 기입)");
                p.staLabel00_01_02.set_cssclass("sta_WF_Label");
                p.staLabel00_01_02.move("10","98","100%","46",null,null);

                p.Panel00_00_01_02.set_taborder("69");
                p.Panel00_00_01_02.set_type("vertical");
                p.Panel00_00_01_02.set_flexgrow("1");
                p.Panel00_00_01_02.set_fittocontents("height");
                p.Panel00_00_01_02.set_verticalgap("4");
                p.Panel00_00_01_02.set_minwidth("");
                p.Panel00_00_01_02.move("20.00","84","300","86",null,null);

                p.staLabel03_00_00_00_01_01.set_taborder("70");
                p.staLabel03_00_00_00_01_01.set_text("용역/공사 담당자 회사명");
                p.staLabel03_00_00_00_01_01.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_00_00_01_01.move("974.00","151","100%","46",null,null);

                p.Edit01_00.set_taborder("71");
                p.Edit01_00.move("628","582","100%","40",null,null);

                p.pan06_00_01_01.set_taborder("72");
                p.pan06_00_01_01.set_type("vertical");
                p.pan06_00_01_01.set_flexgrow("1");
                p.pan06_00_01_01.set_fittocontents("height");
                p.pan06_00_01_01.set_verticalgap("4");
                p.pan06_00_01_01.move("974.00","151","300","86",null,null);

                p.pan00_01_02.set_taborder("73");
                p.pan00_01_02.set_horizontalgap("20");
                p.pan00_01_02.set_flexcrossaxiswrapalign("start");
                p.pan00_01_02.set_flexwrap("wrap");
                p.pan00_01_02.set_fittocontents("height");
                p.pan00_01_02.set_verticalgap("0");
                p.pan00_01_02.set_spacing("0px 20px 10px 20px");
                p.pan00_01_02.set_cssclass("pal_WF_DtlBg");
                p.pan00_01_02.move("0","60","100.00%","97",null,null);

                p.Div00.set_text("Div00");
                p.Div00.set_formscrollbartype("none none");
                p.Div00.set_formscrolltype("none");
                p.Div00.set_flexgrow("1");
                p.Div00.set_taborder("74");
                p.Div00.move("60","1518","100%","40",null,null);

                p.staLabel03_00_00_01_00_00_00.set_taborder("75");
                p.staLabel03_00_00_01_00_00_00.set_text("투입장비(차량)");
                p.staLabel03_00_00_01_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00_00_01_00_00_00.move("10","98","100%","46",null,null);

                p.edtPutEqpmntCn.set_taborder("76");
                p.edtPutEqpmntCn.set_readonly("false");
                p.edtPutEqpmntCn.move("20.00","288","100%","40",null,null);

                p.pan_04_00_00_00_00_00.set_taborder("77");
                p.pan_04_00_00_00_00_00.set_type("vertical");
                p.pan_04_00_00_00_00_00.set_flexgrow("1");
                p.pan_04_00_00_00_00_00.set_fittocontents("height");
                p.pan_04_00_00_00_00_00.move("20.00","242","300","86",null,null);

                p.pan07_00_00.set_taborder("78");
                p.pan07_00_00.set_horizontalgap("20");
                p.pan07_00_00.set_flexcrossaxiswrapalign("start");
                p.pan07_00_00.set_flexwrap("wrap");
                p.pan07_00_00.set_fittocontents("height");
                p.pan07_00_00.set_verticalgap("0");
                p.pan07_00_00.set_spacing("0px 20px 10px 20px");
                p.pan07_00_00.set_cssclass("pal_WF_DtlBg");
                p.pan07_00_00.move("0","242","100.00%","97",null,null);

                p.Static03_01.set_taborder("12");
                p.Static03_01.set_text("(주간 09시~18시, 야간 18시~09시)");
                p.Static03_01.set_cssclass("sta_WF_Des");
                p.Static03_01.set_fittocontents("height");
                p.Static03_01.move("81","238","100%","40",null,null);

                p.staLabel00_00.set_taborder("11");
                p.staLabel00_00.set_text("작업(공사) 시간구분");
                p.staLabel00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_00.move("10","98","100%","46",null,null);

                p.rdoCstrnJobWeekNghtSeCd.set_taborder("19");
                p.rdoCstrnJobWeekNghtSeCd.set_innerdataset(div00_01_02_form_rdoCstrnJobWeekNghtSeCd_innerdataset);
                p.rdoCstrnJobWeekNghtSeCd.set_codecolumn("codecolumn");
                p.rdoCstrnJobWeekNghtSeCd.set_datacolumn("datacolumn");
                p.rdoCstrnJobWeekNghtSeCd.set_direction("vertical");
                p.rdoCstrnJobWeekNghtSeCd.set_columncount("-1");
                p.rdoCstrnJobWeekNghtSeCd.set_rowcount("-1");
                p.rdoCstrnJobWeekNghtSeCd.set_value("0");
                p.rdoCstrnJobWeekNghtSeCd.set_index("0");
                p.rdoCstrnJobWeekNghtSeCd.move("148","528","280","40",null,null);

                p.Panel00_01.set_taborder("13");
                p.Panel00_01.set_fittocontents("height");
                p.Panel00_01.move("50","196","100%","50",null,null);
            	}
            );
            obj.set_type("vertical");
            this.div00_01_02.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00_01_02.form
            obj = new Layout("mobile","",0,0,this.div00_01_02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.div00_01_02.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00_01_02.form
            obj = new Layout("Layout0","",0,0,this.div00_01_02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.rdoJobPrpsCd.move("20","544","100%","60",null,null);

                p.Panel00_00_00_00.move("20.00","84","100%","110",null,null);

                p.pan00_00_00.set_fittocontents("none");
                p.pan00_00_00.move("0","60","100.00%","121",null,null);
            	}
            );
            obj.set_type("vertical");
            this.div00_01_02.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,800,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("공사(작업)내역");

                p.panForm.set_taborder("1");
                p.panForm.set_fittocontents("height");
                p.panForm.set_type("vertical");
                p.panForm.move("0","0","100.00%","1768.999",null,null);

                p.staSubTitle.set_taborder("2");
                p.staSubTitle.set_text("공사(작업)내역");
                p.staSubTitle.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle.move("353","230","100%","50",null,null);

                p.Panel01.set_taborder("3");
                p.Panel01.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01.set_flexcrossaxisalign("center");
                p.Panel01.set_flexmainaxisalign("end");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.set_spacing("0px 10px 0px 10px");
                p.Panel01.move("1423","230","209","50",null,null);

                p.btnClose.set_taborder("5");
                p.btnClose.set_cssclass("btn_WF_ACPlus");
                p.btnClose.set_visible("false");
                p.btnClose.move("1210","23","34","34",null,null);

                p.btnOpen.set_taborder("6");
                p.btnOpen.set_cssclass("btn_WF_ACMinus");
                p.btnOpen.move("1133","3","34","34",null,null);

                p.panTitle.set_taborder("4");
                p.panTitle.set_fittocontents("none");
                p.panTitle.set_flexcrossaxisalign("end");
                p.panTitle.set_minheight("70");
                p.panTitle.set_maxheight("");
                p.panTitle.move("353","230","100.00%","70",null,null);

                p.div00_01_02.set_taborder("0");
                p.div00_01_02.set_text("신청자정보");
                p.div00_01_02.set_cssclass("div_WF_Bg");
                p.div00_01_02.set_fittocontents("height");
                p.div00_01_02.set_formscrollbartype("none none");
                p.div00_01_02.set_formscrolltype("none");
                p.div00_01_02.move("1680","71","100.00%","1698.999",null,null);
            	}
            );
            obj.set_horizontalgap("0");
            obj.set_spacing("0px");
            obj.set_tabletemplate("1* / 1*");
            obj.set_verticalgap("0");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Phone_screen",480,800,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panForm.set_spacing("0px 20px 10px 20px");
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            obj.set_horizontalgap("0");
            obj.set_spacing("0px");
            obj.set_tabletemplate("1* / 1*");
            obj.set_verticalgap("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div00_01_02.form.edtCstrnJobNm","value","dsCstJobAprv","cstrnJobNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div00_01_02.form.calJobPrdEndYmd","value","dsCstJobAprv","jobPrdEndYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div00_01_02.form.calJobPrdBgngYmd","value","dsCstJobAprv","jobPrdBgngYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div00_01_02.form.calJobDt","value","dsCstJobAprv","jobDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div00_01_02.form.rdoCstrnJobWeekNghtSeCd","value","dsCstJobAprv","cstrnJobWeekNghtSeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div00_01_02.form.edtJobBgngHr","value","dsCstJobAprv","jobBgngHr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div00_01_02.form.edtJobEndHr","value","dsCstJobAprv","jobEndHr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div00_01_02.form.rdoJobPrpsCd","value","dsCstJobAprv","jobPrpsCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div00_01_02.form.txtJobPrpsEtcCn","value","dsCstJobAprv","jobPrpsEtcCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div00_01_02.form.txtJobCn","value","dsCstJobAprv","jobCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div00_01_02.form.edtJobCstrnPstnDtlCn","value","dsCstJobAprv","jobCstrnPstnDtlCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div00_01_02.form.edtIncmgChckpntMvmnPathNm","value","dsCstJobAprv","incmgChckpntMvmnPathNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div00_01_02.form.rdoEmrgYn","value","dsCstJobAprv","emrgYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div00_01_02.form.rdoLbsvcPbcprtPicExnYn","value","dsMvmnRgnMst","lbsvcPbcprtPicExnYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div00_01_02.form.Edit01_00","value","dsMvmnRgnMst","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div00_01_02.form.edtPutEqpmntCn","value","dsCstJobAprv","putEqpmntCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div00_01_02.form.Div00.form.edtLbsvcPbcprtPicNm","value","dsMvmnRgnMst","lbsvcPbcprtPicNm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CST013M02.xfdl","xjs::TaskCom.xjs");
        this.registerScript("CST013M02.xfdl", function() {
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
        	this.gfnFormOnload(obj);

        	this.dsMvmnRgnMst	= this.lookup("dsMvmnRgnMst");		//이동지역 마스터
        	this.dsCstJobAprv	= this.lookup("dsCstJobAprv");
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

        this.cfnClose = function() {};

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        /**************************************************************************
         * @name : fnInit
         * @description : 초기화
         ***************************************************************************/
        this.fnInit = function()
        {



        };

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
        	trace("callBack :: " +svcID);
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0) {
        		return;
        	}

        	switch(svcID) {

        		case "search": //조회

        			break;

        		default :
        			break;
        	}

        };

        /**************************************************************************
         * @name : msgCallback
         * @description : 얼럿창 콜백 함수
         ***************************************************************************/
        this.msgCallback = function(sPopupId, sRtn) {

        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/


        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        /**************************************************************************
         * @name : btnFold1_onclick
         * @description : 작업방법 안내 접기/펴기
         ***************************************************************************/
        this.btnFold1_onclick = function(obj,e)
        {
        	if (obj.cssclass == "btn_WF_ACPlus") {
        		this.div00_01_02.visible = true;
        	} else {
        		this.div00_01_02.visible = false;
        	}
        	// 펼침(축소)
        	obj.cssclass = obj.cssclass == "btn_WF_ACPlus" ? "btn_WF_ACMinus" : "btn_WF_ACPlus";  // +,- css 변경
        	this.resetScroll();
        };

        /**************************************************************************
         * @name : div00_01_02_rdoLbsvcPbcprtPicExnYn_onitemchanged
         * @description : 공항공사 담당자(감독자) 유무
         ***************************************************************************/
        this.rdoLbsvcPbcprtPicExnYn_onitemchanged = function(obj,e)
        {
        	//공항공사 담당자(감독자) 유무
        	var vLbsvcPbcprtPicExnYn = this.dsMvmnRgnMst.getColumn(0, "lbsvcPbcprtPicExnYn");
        	if (vLbsvcPbcprtPicExnYn == "Y") {

        		this.div00_01_02.form.pan00_01_02.visible =  true;
        		this.parent.parent.divBtn.form.CTL00532.visible = true;
        		this.parent.parent.divBtn.form.CTL00333.visible = false;
        		this.parent.parent.divBtn.form.CTL00794.visible = false;

        	} else {

        		this.div00_01_02.form.pan00_01_02.visible =  false;

        		var vPutMtrlToolKndCrynYn = this.dsCstJobAprv.getColumn(0, "putMtrlToolKndCrynYn");		//투입자재 및 공구류 반입여부
        		if (vPutMtrlToolKndCrynYn == 1) {
        			this.parent.parent.divBtn.form.CTL00333.visible = true;
        			this.parent.parent.divBtn.form.CTL00794.visible = false;
        		} else {
        			this.parent.parent.divBtn.form.CTL00333.visible = false;
        			this.parent.parent.divBtn.form.CTL00794.visible = true;
        		}

        		this.parent.parent.divBtn.form.CTL00333.visible = false;
        		this.parent.parent.divBtn.form.CTL00794.visible = false;
        	}
        	this.parent.parent.divBtn.form.CTL01014.visible = false;
        	this.resetScroll();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnOpen.addEventHandler("onclick",this.btnFold1_onclick,this);
            this.div00_01_02.form.rdoLbsvcPbcprtPicExnYn.addEventHandler("onitemchanged",this.rdoLbsvcPbcprtPicExnYn_onitemchanged,this);
        };
        this.loadIncludeScript("CST013M02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
