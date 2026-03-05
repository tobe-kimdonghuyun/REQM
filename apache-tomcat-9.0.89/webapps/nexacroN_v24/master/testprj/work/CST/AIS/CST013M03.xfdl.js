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
            this.set_titletext("작업현장연락처");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Panel("panFrom","0","0","100%","1690","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel04\"/><PanelItem id=\"PanelItem02\" componentid=\"div00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem04\" componentid=\"div00_01_01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle","260","140","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("작업현장 연락처(2인이상기재)");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03","1330","140","209","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnClose\"/><PanelItem id=\"PanelItem02\" componentid=\"btnOpen\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","1130","10","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnOpen","1140","20","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_ACMinus");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle00","346","1350","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("개인정보 수집.이용 동의");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","1416","1350","209","50",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnClose00\"/><PanelItem id=\"PanelItem02\" componentid=\"btnOpen00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose00","1210","1293","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnOpen00","1180","1290","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_ACMinus");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04","260","140","100.00%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("5");
            obj.set_fittocontents("none");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel03\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("div00_00","1470","59","100%","1102",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("신청정보");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel05_00_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("0");
            obj.set_text("작업책임자1");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("pan04_00_00_00","10.00","98","300","86",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("1");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"rdoJobRbprsn1SmYn\"/></Contents>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("pan05_00_00_00","0","60","100.00%","96",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("2");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_fittocontents("height");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan04_00_00_00\"/></Contents>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Radio("rdoJobRbprsn1SmYn","20","136","100%","40",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("3");
            obj.set_fittocontents("none");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var div00_00_form_rdoJobRbprsn1SmYn_innerdataset = new nexacro.NormalDataset("div00_00_form_rdoJobRbprsn1SmYn_innerdataset", obj);
            div00_00_form_rdoJobRbprsn1SmYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">신청자정보와동일</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">신청자정보와동일하지않음</Col></Row></Rows>");
            obj.set_innerdataset(div00_00_form_rdoJobRbprsn1SmYn_innerdataset);
            obj.set_text("신청자정보와동일");
            obj.set_value("0");
            obj.set_index("0");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00","10","98","100%","46",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("4");
            obj.set_text("작업책임자 성명1");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_00.addChild(obj.name, obj);

            obj = new Edit("edtJobRbprsn1Nm","20.00","288","100%","40",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("5");
            obj.set_readonly("false");
            obj.set_text("");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","20.00","242","300","86",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtJobRbprsn1Nm\"/></Contents>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("staLabel03_01","970","270","100%","46",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("7");
            obj.set_text("휴대폰번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_00.addChild(obj.name, obj);

            obj = new Edit("edtJobRbprsn1Telno","970","315","100%","40",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("8");
            obj.set_text("");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel02_01","970.00","270","300","86",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtJobRbprsn1Telno\"/></Contents>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("pan02","0","242","100.00%","96",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("10");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_01\"/></Contents>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01","20.00","242","305","46",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("11");
            obj.set_text("작업책임자1의 개인정보수집이용 및 제3자제공동의");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel01","319","242","305","46",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("12");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button03\"/></Contents>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel00","20","242","100%","46",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("13");
            obj.set_horizontalgap("10");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/></Contents>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static00","83","444","100%","40",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("14");
            obj.set_text("JPG,JPEG,GIF,PNG,BMP,PDF만 첨부가능");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00","20.00","242","100%","150",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("15");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00\"/><PanelItem id=\"PanelItem03\" componentid=\"Static00\"/></Contents>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("pan04","0","242","100.00%","150",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("16");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00\"/></Contents>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Grid("Grid00","145","343","100%","40",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("63");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"120\" band=\"right\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell cssclass=\"CellFile\"/><Cell col=\"1\" cssclass=\"CellFileUp\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"파일찾기\"/><Cell col=\"2\" displaytype=\"buttoncontrol\" edittype=\"button\" cssclass=\"CellFileDel\" text=\"삭제\"/></Band></Format></Formats>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("staLabel05_00_00_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("17");
            obj.set_text("작업책임자2");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_00.addChild(obj.name, obj);

            obj = new Radio("rdoJobRbprsn2SmYn","20","136","100%","40",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("18");
            obj.set_fittocontents("none");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var div00_00_form_rdoJobRbprsn2SmYn_innerdataset = new nexacro.NormalDataset("div00_00_form_rdoJobRbprsn2SmYn_innerdataset", obj);
            div00_00_form_rdoJobRbprsn2SmYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">신청자정보와동일</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">신청자정보와동일하지않음</Col></Row></Rows>");
            obj.set_innerdataset(div00_00_form_rdoJobRbprsn2SmYn_innerdataset);
            obj.set_text("신청자정보와동일");
            obj.set_value("0");
            obj.set_index("0");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("pan04_00_00_00_00","10.00","98","300","86",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("19");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"rdoJobRbprsn2SmYn\"/></Contents>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("pan05_00_00_00_00","0","60","100.00%","96",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("20");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_fittocontents("height");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan04_00_00_00_00\"/></Contents>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_03","10","98","100%","46",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("21");
            obj.set_text("작업책임자 성명2");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_00.addChild(obj.name, obj);

            obj = new Edit("edtJobRbprsn2Nm","20.00","288","100%","40",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("22");
            obj.set_readonly("false");
            obj.set_text("");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_03","20.00","242","300","86",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("23");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_03\"/><PanelItem id=\"PanelItem01\" componentid=\"edtJobRbprsn2Nm\"/></Contents>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00","970","270","100%","46",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("24");
            obj.set_text("휴대폰번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_00.addChild(obj.name, obj);

            obj = new Edit("edtJobRbprsn2Telno","970","315","100%","40",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("25");
            obj.set_text("");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel02_01_00","970.00","270","300","86",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("26");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtJobRbprsn2Telno\"/></Contents>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("pan02_02","0","242","100.00%","96",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("27");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_03\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_01_00\"/></Contents>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_00","20.00","242","305","46",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("28");
            obj.set_text("작업책임자2의 개인정보수집이용 및 제3자제공동의");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","319","242","305","43",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("29");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button04\"/></Contents>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","20","242","100%","46",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("30");
            obj.set_horizontalgap("10");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00\"/></Contents>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00","83","444","100%","40",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("31");
            obj.set_text("JPG,JPEG,GIF,PNG,BMP,PDF만 첨부가능");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00","20.00","242","980","150",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("32");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid01\"/><PanelItem id=\"PanelItem03\" componentid=\"Static00_00\"/></Contents>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("pan04_00","0","242","100.00%","150",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("33");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_00\"/></Contents>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Grid("Grid01","86","682","100%","40",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("65");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"120\" band=\"right\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" cssclass=\"CellFileUp\" text=\"파일찾기\"/><Cell col=\"2\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\" cssclass=\"CellFileDel\"/></Band></Format></Formats>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00","10","98","100%","46",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("34");
            obj.set_text("TRS (호출부호)");
            obj.set_cssclass("sta_WF_Label");
            this.div00_00.addChild(obj.name, obj);

            obj = new Edit("edtTrsClsgnNm","20.00","288","100%","40",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("35");
            obj.set_readonly("false");
            obj.set_text("");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_01","20.00","242","300","86",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("36");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtTrsClsgnNm\"/></Contents>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("blank","970.00","270","300","1",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("37");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents/>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("pan02_00","0","242","100.00%","96",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("38");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"blank\"/></Contents>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("staLabel00_01_01_00","10","98","100%","46",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("39");
            obj.set_text("작업자안전교육여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_00.addChild(obj.name, obj);

            obj = new Radio("rdoOprtrSafeEduYn","681","1303","100%","40",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("40");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("none");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var div00_00_form_rdoOprtrSafeEduYn_innerdataset = new nexacro.NormalDataset("div00_00_form_rdoOprtrSafeEduYn_innerdataset", obj);
            div00_00_form_rdoOprtrSafeEduYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">유</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">무</Col></Row></Rows>");
            obj.set_innerdataset(div00_00_form_rdoOprtrSafeEduYn_innerdataset);
            obj.set_text("예");
            obj.set_value("0");
            obj.set_index("0");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01_01_00","20.00","84","300","86",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("41");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoOprtrSafeEduYn\"/></Contents>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("pan0005","974.00","151","300","96",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("42");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static01\"/><PanelItem id=\"PanelItem01\" componentid=\"rdoRltnInstBfhdCnsltnYn\"/></Contents>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("pan00_01_01_00","0","60","100.00%","96",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("43");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_01_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan0005\"/></Contents>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Radio("rdoRltnInstBfhdCnsltnYn","658","916","100%","40",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("45");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("none");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var div00_00_form_rdoRltnInstBfhdCnsltnYn_innerdataset = new nexacro.NormalDataset("div00_00_form_rdoRltnInstBfhdCnsltnYn_innerdataset", obj);
            div00_00_form_rdoRltnInstBfhdCnsltnYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">유</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">무</Col></Row></Rows>");
            obj.set_innerdataset(div00_00_form_rdoRltnInstBfhdCnsltnYn_innerdataset);
            obj.set_text("유");
            obj.set_value("0");
            obj.set_index("0");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01","638","856","100%","46",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("44");
            obj.set_text("관련기관 사전협의");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("staLabel00_01_01_00_00","10","98","100%","46",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("46");
            obj.set_text("이동경로 지정");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_00.addChild(obj.name, obj);

            obj = new Radio("rdoMvmnPathDsgnYn","681","1303","100%","40",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("47");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("none");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var div00_00_form_rdoMvmnPathDsgnYn_innerdataset = new nexacro.NormalDataset("div00_00_form_rdoMvmnPathDsgnYn_innerdataset", obj);
            div00_00_form_rdoMvmnPathDsgnYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">유</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">무</Col></Row></Rows>");
            obj.set_innerdataset(div00_00_form_rdoMvmnPathDsgnYn_innerdataset);
            obj.set_text("예");
            obj.set_value("0");
            obj.set_index("0");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01_01_00_00","20.00","84","300","86",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("48");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01_01_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoMvmnPathDsgnYn\"/></Contents>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","638","856","100%","46",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("49");
            obj.set_text("항공정보 제공");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_00.addChild(obj.name, obj);

            obj = new Radio("rdoAvtnInfoPvsnYn","658","916","100%","40",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("50");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("none");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var div00_00_form_rdoAvtnInfoPvsnYn_innerdataset = new nexacro.NormalDataset("div00_00_form_rdoAvtnInfoPvsnYn_innerdataset", obj);
            div00_00_form_rdoAvtnInfoPvsnYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">유</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">무</Col></Row></Rows>");
            obj.set_innerdataset(div00_00_form_rdoAvtnInfoPvsnYn_innerdataset);
            obj.set_text("유");
            obj.set_value("0");
            obj.set_index("0");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("pan0005_00","974.00","151","300","96",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("51");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"rdoAvtnInfoPvsnYn\"/></Contents>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("pan00_01_01_00_00","0","60","100.00%","96",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("52");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_01_01_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan0005_00\"/></Contents>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("staLabel00_01_01_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("53");
            obj.set_text("지하매설물간섭");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_00.addChild(obj.name, obj);

            obj = new Radio("rdoUdgdEbmtItfeYn","681","1303","100%","40",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("54");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("none");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var div00_00_form_rdoUdgdEbmtItfeYn_innerdataset = new nexacro.NormalDataset("div00_00_form_rdoUdgdEbmtItfeYn_innerdataset", obj);
            div00_00_form_rdoUdgdEbmtItfeYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">유</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">무</Col></Row></Rows>");
            obj.set_innerdataset(div00_00_form_rdoUdgdEbmtItfeYn_innerdataset);
            obj.set_text("예");
            obj.set_value("0");
            obj.set_index("0");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01_01_00_00_00","20.00","84","300","86",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("55");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01_01_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoUdgdEbmtItfeYn\"/></Contents>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","638","856","100%","46",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("56");
            obj.set_text("안전시설물설치");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_00.addChild(obj.name, obj);

            obj = new Radio("rdoSafeFcltyInstlYn","658","916","100%","40",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("57");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("none");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var div00_00_form_rdoSafeFcltyInstlYn_innerdataset = new nexacro.NormalDataset("div00_00_form_rdoSafeFcltyInstlYn_innerdataset", obj);
            div00_00_form_rdoSafeFcltyInstlYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">유</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">무</Col></Row></Rows>");
            obj.set_innerdataset(div00_00_form_rdoSafeFcltyInstlYn_innerdataset);
            obj.set_text("유");
            obj.set_value("0");
            obj.set_index("0");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("pan0005_00_00","974.00","151","300","96",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("58");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"rdoSafeFcltyInstlYn\"/></Contents>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("pan00_01_01_00_00_00","0","60","100.00%","130",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("59");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_01_01_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan0005_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02\"/></Contents>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel02","504","1108","100%","40",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("60");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static02\"/></Contents>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static02","72","1137","100%","40",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("61");
            obj.set_text("이동지역 굴착(터파기) 작업 전 지장물 검토 및 항공등화팀(2846) 협의 필수");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_Des");
            this.div00_00.addChild(obj.name, obj);

            obj = new Button("Button03","793","256","138","34",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("62");
            obj.set_text("동의서 양식 다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.div00_00.addChild(obj.name, obj);

            obj = new Button("Button04","781","603","138","34",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("64");
            obj.set_text("동의서 양식 다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel01","346","1350","100.00%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("10");
            obj.set_fittocontents("none");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("div00_01_01_00","1670","1415","100.00%","350",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("신청자정보");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","68","61","100%","160",null,null,null,null,null,null,this.div00_01_01_00.form);
            obj.set_taborder("4");
            obj.set_value("1. 개인정보의 수집 . 이용 목적\n보안구역위해물품 사용신청 시 작성건의 접수와 처리를 위해 개인정보를 수집목적에 필요한 최소한의 범위 내에서 수집하고 있습니다.\n\n2. 수집하려는 개인정보의 항목\n필수항목 : 작업책임자 성명1, 휴대폰번호, 작업책임자 성명2, 휴대폰번호\n\n3. 개인정보의 보유 및 이용 기간\n계약종료 후 3년, 회원탈퇴 시 까지\n\n4. 동의를 거부할 권리와 거부에 따른 불이익 내용\n귀하는 개인정보 수집에 거부할 권리가 있으며, 필수항목 수집을 거부할 경우 보안구역위해물품 승인요청서 작성건의 신청을 할 수 없습니다.");
            obj.set_scrolltype("vertical");
            obj.set_scrollbartype("none default");
            this.div00_01_01_00.addChild(obj.name, obj);

            obj = new Panel("Panel02","0","47","100.00%","170",null,null,null,null,null,null,this.div00_01_01_00.form);
            obj.set_taborder("3");
            obj.set_spacing("10px 20px 0px 20px");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"TextArea00\"/></Contents>");
            this.div00_01_01_00.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","96",null,null,null,null,null,null,this.div00_01_01_00.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/></Contents>");
            this.div00_01_01_00.addChild(obj.name, obj);

            obj = new Static("staLabel00","10","98","100%","46",null,null,null,null,null,null,this.div00_01_01_00.form);
            obj.set_taborder("1");
            obj.set_text("개인정보(필수)수집동의여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_01_01_00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","20.00","84","300","86",null,null,null,null,null,null,this.div00_01_01_00.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem01\" componentid=\"rdoPrvcClctEsntlAgreYn\"/></Contents>");
            this.div00_01_01_00.addChild(obj.name, obj);

            obj = new Radio("rdoPrvcClctEsntlAgreYn","143","166","100%","40",null,null,null,null,null,null,this.div00_01_01_00.form);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("none");
            obj.set_rowcount("-1");
            obj.set_columncount("-1");
            var div00_01_01_00_form_rdoPrvcClctEsntlAgreYn_innerdataset = new nexacro.NormalDataset("div00_01_01_00_form_rdoPrvcClctEsntlAgreYn_innerdataset", obj);
            div00_01_01_00_form_rdoPrvcClctEsntlAgreYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">동의함</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">동의하지 않음</Col></Row></Rows>");
            obj.set_innerdataset(div00_01_01_00_form_rdoPrvcClctEsntlAgreYn_innerdataset);
            this.div00_01_01_00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00_00.form
            obj = new Layout("default","",0,0,this.div00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel05_00_00_00_00.set_taborder("0");
                p.staLabel05_00_00_00_00.set_text("작업책임자1");
                p.staLabel05_00_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel05_00_00_00_00.move("10","98","100%","46",null,null);

                p.pan04_00_00_00.set_taborder("1");
                p.pan04_00_00_00.set_type("vertical");
                p.pan04_00_00_00.set_flexgrow("1");
                p.pan04_00_00_00.set_fittocontents("height");
                p.pan04_00_00_00.move("10.00","98","300","86",null,null);

                p.pan05_00_00_00.set_taborder("2");
                p.pan05_00_00_00.set_horizontalgap("20");
                p.pan05_00_00_00.set_flexcrossaxiswrapalign("start");
                p.pan05_00_00_00.set_flexwrap("wrap");
                p.pan05_00_00_00.set_verticalgap("0");
                p.pan05_00_00_00.set_spacing("0px 20px 10px 20px");
                p.pan05_00_00_00.set_fittocontents("height");
                p.pan05_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.pan05_00_00_00.move("0","60","100.00%","96",null,null);

                p.rdoJobRbprsn1SmYn.set_taborder("3");
                p.rdoJobRbprsn1SmYn.set_fittocontents("none");
                p.rdoJobRbprsn1SmYn.set_direction("vertical");
                p.rdoJobRbprsn1SmYn.set_innerdataset(div00_00_form_rdoJobRbprsn1SmYn_innerdataset);
                p.rdoJobRbprsn1SmYn.set_codecolumn("codecolumn");
                p.rdoJobRbprsn1SmYn.set_datacolumn("datacolumn");
                p.rdoJobRbprsn1SmYn.set_columncount("-1");
                p.rdoJobRbprsn1SmYn.set_rowcount("-1");
                p.rdoJobRbprsn1SmYn.set_value("0");
                p.rdoJobRbprsn1SmYn.set_index("0");
                p.rdoJobRbprsn1SmYn.move("20","136","100%","40",null,null);

                p.staLabel03_00.set_taborder("4");
                p.staLabel03_00.set_text("작업책임자 성명1");
                p.staLabel03_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00.move("10","98","100%","46",null,null);

                p.edtJobRbprsn1Nm.set_taborder("5");
                p.edtJobRbprsn1Nm.set_readonly("false");
                p.edtJobRbprsn1Nm.move("20.00","288","100%","40",null,null);

                p.Panel02_00.set_taborder("6");
                p.Panel02_00.set_type("vertical");
                p.Panel02_00.set_flexgrow("1");
                p.Panel02_00.set_fittocontents("height");
                p.Panel02_00.move("20.00","242","300","86",null,null);

                p.staLabel03_01.set_taborder("7");
                p.staLabel03_01.set_text("휴대폰번호");
                p.staLabel03_01.set_cssclass("sta_WF_Label_E");
                p.staLabel03_01.move("970","270","100%","46",null,null);

                p.edtJobRbprsn1Telno.set_taborder("8");
                p.edtJobRbprsn1Telno.move("970","315","100%","40",null,null);

                p.Panel02_01.set_taborder("9");
                p.Panel02_01.set_type("vertical");
                p.Panel02_01.set_flexgrow("1");
                p.Panel02_01.set_fittocontents("height");
                p.Panel02_01.move("970.00","270","300","86",null,null);

                p.pan02.set_taborder("10");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.move("0","242","100.00%","96",null,null);

                p.staLabel03_00_01.set_taborder("11");
                p.staLabel03_00_01.set_text("작업책임자1의 개인정보수집이용 및 제3자제공동의");
                p.staLabel03_00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_01.set_fittocontents("width");
                p.staLabel03_00_01.set_flexgrow("1");
                p.staLabel03_00_01.move("20.00","242","305","46",null,null);

                p.Panel01.set_taborder("12");
                p.Panel01.set_flexmainaxisalign("end");
                p.Panel01.set_flexgrow("1");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.move("319","242","305","46",null,null);

                p.Panel00.set_taborder("13");
                p.Panel00.set_horizontalgap("10");
                p.Panel00.set_tabletemplate("1* / 1* 1*");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_cssclass("pan_WF_FileTitle");
                p.Panel00.move("20","242","100%","46",null,null);

                p.Static00.set_taborder("14");
                p.Static00.set_text("JPG,JPEG,GIF,PNG,BMP,PDF만 첨부가능");
                p.Static00.set_cssclass("sta_WF_Des");
                p.Static00.set_fittocontents("height");
                p.Static00.move("83","444","100%","40",null,null);

                p.Panel02_00_00.set_taborder("15");
                p.Panel02_00_00.set_type("vertical");
                p.Panel02_00_00.set_flexgrow("1");
                p.Panel02_00_00.set_verticalgap("4");
                p.Panel02_00_00.set_fittocontents("height");
                p.Panel02_00_00.move("20.00","242","100%","150",null,null);

                p.pan04.set_taborder("16");
                p.pan04.set_horizontalgap("20");
                p.pan04.set_flexcrossaxiswrapalign("start");
                p.pan04.set_flexwrap("wrap");
                p.pan04.set_fittocontents("height");
                p.pan04.set_spacing("10px 20px 10px 20px");
                p.pan04.set_cssclass("pal_WF_DtlBg");
                p.pan04.set_verticalgap("0");
                p.pan04.move("0","242","100.00%","150",null,null);

                p.Grid00.set_taborder("63");
                p.Grid00.set_cssclass("grd_WF_FileAdd");
                p.Grid00.move("145","343","100%","40",null,null);

                p.staLabel05_00_00_00_00_00.set_taborder("17");
                p.staLabel05_00_00_00_00_00.set_text("작업책임자2");
                p.staLabel05_00_00_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel05_00_00_00_00_00.move("10","98","100%","46",null,null);

                p.rdoJobRbprsn2SmYn.set_taborder("18");
                p.rdoJobRbprsn2SmYn.set_fittocontents("none");
                p.rdoJobRbprsn2SmYn.set_direction("vertical");
                p.rdoJobRbprsn2SmYn.set_innerdataset(div00_00_form_rdoJobRbprsn2SmYn_innerdataset);
                p.rdoJobRbprsn2SmYn.set_codecolumn("codecolumn");
                p.rdoJobRbprsn2SmYn.set_datacolumn("datacolumn");
                p.rdoJobRbprsn2SmYn.set_columncount("-1");
                p.rdoJobRbprsn2SmYn.set_rowcount("-1");
                p.rdoJobRbprsn2SmYn.set_value("0");
                p.rdoJobRbprsn2SmYn.set_index("0");
                p.rdoJobRbprsn2SmYn.move("20","136","100%","40",null,null);

                p.pan04_00_00_00_00.set_taborder("19");
                p.pan04_00_00_00_00.set_type("vertical");
                p.pan04_00_00_00_00.set_flexgrow("1");
                p.pan04_00_00_00_00.set_fittocontents("height");
                p.pan04_00_00_00_00.move("10.00","98","300","86",null,null);

                p.pan05_00_00_00_00.set_taborder("20");
                p.pan05_00_00_00_00.set_horizontalgap("20");
                p.pan05_00_00_00_00.set_flexcrossaxiswrapalign("start");
                p.pan05_00_00_00_00.set_flexwrap("wrap");
                p.pan05_00_00_00_00.set_verticalgap("0");
                p.pan05_00_00_00_00.set_spacing("0px 20px 10px 20px");
                p.pan05_00_00_00_00.set_fittocontents("height");
                p.pan05_00_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.pan05_00_00_00_00.move("0","60","100.00%","96",null,null);

                p.staLabel03_00_03.set_taborder("21");
                p.staLabel03_00_03.set_text("작업책임자 성명2");
                p.staLabel03_00_03.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_03.move("10","98","100%","46",null,null);

                p.edtJobRbprsn2Nm.set_taborder("22");
                p.edtJobRbprsn2Nm.set_readonly("false");
                p.edtJobRbprsn2Nm.move("20.00","288","100%","40",null,null);

                p.Panel02_00_03.set_taborder("23");
                p.Panel02_00_03.set_type("vertical");
                p.Panel02_00_03.set_flexgrow("1");
                p.Panel02_00_03.set_fittocontents("height");
                p.Panel02_00_03.move("20.00","242","300","86",null,null);

                p.staLabel03_01_00.set_taborder("24");
                p.staLabel03_01_00.set_text("휴대폰번호");
                p.staLabel03_01_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_01_00.move("970","270","100%","46",null,null);

                p.edtJobRbprsn2Telno.set_taborder("25");
                p.edtJobRbprsn2Telno.move("970","315","100%","40",null,null);

                p.Panel02_01_00.set_taborder("26");
                p.Panel02_01_00.set_type("vertical");
                p.Panel02_01_00.set_flexgrow("1");
                p.Panel02_01_00.set_fittocontents("height");
                p.Panel02_01_00.move("970.00","270","300","86",null,null);

                p.pan02_02.set_taborder("27");
                p.pan02_02.set_horizontalgap("20");
                p.pan02_02.set_flexcrossaxiswrapalign("start");
                p.pan02_02.set_flexwrap("wrap");
                p.pan02_02.set_fittocontents("height");
                p.pan02_02.set_verticalgap("0");
                p.pan02_02.set_spacing("0px 20px 10px 20px");
                p.pan02_02.set_cssclass("pal_WF_DtlBg");
                p.pan02_02.move("0","242","100.00%","96",null,null);

                p.staLabel03_00_01_00.set_taborder("28");
                p.staLabel03_00_01_00.set_text("작업책임자2의 개인정보수집이용 및 제3자제공동의");
                p.staLabel03_00_01_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_01_00.set_fittocontents("width");
                p.staLabel03_00_01_00.set_flexgrow("1");
                p.staLabel03_00_01_00.move("20.00","242","305","46",null,null);

                p.Panel01_00.set_taborder("29");
                p.Panel01_00.set_flexmainaxisalign("end");
                p.Panel01_00.set_flexgrow("1");
                p.Panel01_00.set_horizontalgap("10");
                p.Panel01_00.move("319","242","305","43",null,null);

                p.Panel00_00.set_taborder("30");
                p.Panel00_00.set_horizontalgap("10");
                p.Panel00_00.set_tabletemplate("1* / 1* 1*");
                p.Panel00_00.set_flexwrap("wrap");
                p.Panel00_00.set_fittocontents("height");
                p.Panel00_00.set_cssclass("pan_WF_FileTitle");
                p.Panel00_00.move("20","242","100%","46",null,null);

                p.Static00_00.set_taborder("31");
                p.Static00_00.set_text("JPG,JPEG,GIF,PNG,BMP,PDF만 첨부가능");
                p.Static00_00.set_cssclass("sta_WF_Des");
                p.Static00_00.set_fittocontents("height");
                p.Static00_00.move("83","444","100%","40",null,null);

                p.Panel02_00_00_00.set_taborder("32");
                p.Panel02_00_00_00.set_type("vertical");
                p.Panel02_00_00_00.set_flexgrow("1");
                p.Panel02_00_00_00.set_verticalgap("4");
                p.Panel02_00_00_00.set_fittocontents("height");
                p.Panel02_00_00_00.move("20.00","242","980","150",null,null);

                p.pan04_00.set_taborder("33");
                p.pan04_00.set_horizontalgap("20");
                p.pan04_00.set_flexcrossaxiswrapalign("start");
                p.pan04_00.set_flexwrap("wrap");
                p.pan04_00.set_fittocontents("height");
                p.pan04_00.set_spacing("10px 20px 10px 20px");
                p.pan04_00.set_cssclass("pal_WF_DtlBg");
                p.pan04_00.set_verticalgap("0");
                p.pan04_00.move("0","242","100.00%","150",null,null);

                p.Grid01.set_taborder("65");
                p.Grid01.set_cssclass("grd_WF_FileAdd");
                p.Grid01.move("86","682","100%","40",null,null);

                p.staLabel03_00_00.set_taborder("34");
                p.staLabel03_00_00.set_text("TRS (호출부호)");
                p.staLabel03_00_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00_00.move("10","98","100%","46",null,null);

                p.edtTrsClsgnNm.set_taborder("35");
                p.edtTrsClsgnNm.set_readonly("false");
                p.edtTrsClsgnNm.move("20.00","288","100%","40",null,null);

                p.Panel02_00_01.set_taborder("36");
                p.Panel02_00_01.set_type("vertical");
                p.Panel02_00_01.set_flexgrow("1");
                p.Panel02_00_01.set_fittocontents("height");
                p.Panel02_00_01.move("20.00","242","300","86",null,null);

                p.blank.set_taborder("37");
                p.blank.set_type("vertical");
                p.blank.set_flexgrow("1");
                p.blank.set_fittocontents("height");
                p.blank.move("970.00","270","300","1",null,null);

                p.pan02_00.set_taborder("38");
                p.pan02_00.set_horizontalgap("20");
                p.pan02_00.set_flexcrossaxiswrapalign("start");
                p.pan02_00.set_flexwrap("wrap");
                p.pan02_00.set_fittocontents("height");
                p.pan02_00.set_verticalgap("0");
                p.pan02_00.set_spacing("0px 20px 10px 20px");
                p.pan02_00.set_cssclass("pal_WF_DtlBg");
                p.pan02_00.move("0","242","100.00%","96",null,null);

                p.staLabel00_01_01_00.set_taborder("39");
                p.staLabel00_01_01_00.set_text("작업자안전교육여부");
                p.staLabel00_01_01_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_01_01_00.move("10","98","100%","46",null,null);

                p.rdoOprtrSafeEduYn.set_taborder("40");
                p.rdoOprtrSafeEduYn.set_innerdataset(div00_00_form_rdoOprtrSafeEduYn_innerdataset);
                p.rdoOprtrSafeEduYn.set_codecolumn("codecolumn");
                p.rdoOprtrSafeEduYn.set_datacolumn("datacolumn");
                p.rdoOprtrSafeEduYn.set_direction("vertical");
                p.rdoOprtrSafeEduYn.set_fittocontents("none");
                p.rdoOprtrSafeEduYn.set_columncount("-1");
                p.rdoOprtrSafeEduYn.set_rowcount("-1");
                p.rdoOprtrSafeEduYn.set_value("0");
                p.rdoOprtrSafeEduYn.set_index("0");
                p.rdoOprtrSafeEduYn.move("681","1303","100%","40",null,null);

                p.Panel00_00_01_01_00.set_taborder("41");
                p.Panel00_00_01_01_00.set_type("vertical");
                p.Panel00_00_01_01_00.set_flexgrow("1");
                p.Panel00_00_01_01_00.set_fittocontents("height");
                p.Panel00_00_01_01_00.set_verticalgap("4");
                p.Panel00_00_01_01_00.set_minwidth("");
                p.Panel00_00_01_01_00.move("20.00","84","300","86",null,null);

                p.pan0005.set_taborder("42");
                p.pan0005.set_type("vertical");
                p.pan0005.set_flexgrow("1");
                p.pan0005.set_fittocontents("height");
                p.pan0005.set_verticalgap("4");
                p.pan0005.move("974.00","151","300","96",null,null);

                p.pan00_01_01_00.set_taborder("43");
                p.pan00_01_01_00.set_horizontalgap("20");
                p.pan00_01_01_00.set_flexcrossaxiswrapalign("start");
                p.pan00_01_01_00.set_flexwrap("wrap");
                p.pan00_01_01_00.set_fittocontents("height");
                p.pan00_01_01_00.set_verticalgap("0");
                p.pan00_01_01_00.set_spacing("0px 20px 10px 20px");
                p.pan00_01_01_00.set_cssclass("pal_WF_DtlBg");
                p.pan00_01_01_00.move("0","60","100.00%","96",null,null);

                p.rdoRltnInstBfhdCnsltnYn.set_taborder("45");
                p.rdoRltnInstBfhdCnsltnYn.set_innerdataset(div00_00_form_rdoRltnInstBfhdCnsltnYn_innerdataset);
                p.rdoRltnInstBfhdCnsltnYn.set_codecolumn("codecolumn");
                p.rdoRltnInstBfhdCnsltnYn.set_datacolumn("datacolumn");
                p.rdoRltnInstBfhdCnsltnYn.set_direction("vertical");
                p.rdoRltnInstBfhdCnsltnYn.set_fittocontents("none");
                p.rdoRltnInstBfhdCnsltnYn.set_columncount("-1");
                p.rdoRltnInstBfhdCnsltnYn.set_rowcount("-1");
                p.rdoRltnInstBfhdCnsltnYn.set_value("0");
                p.rdoRltnInstBfhdCnsltnYn.set_index("0");
                p.rdoRltnInstBfhdCnsltnYn.move("658","916","100%","40",null,null);

                p.Static01.set_taborder("44");
                p.Static01.set_text("관련기관 사전협의");
                p.Static01.set_cssclass("sta_WF_Label_E");
                p.Static01.move("638","856","100%","46",null,null);

                p.staLabel00_01_01_00_00.set_taborder("46");
                p.staLabel00_01_01_00_00.set_text("이동경로 지정");
                p.staLabel00_01_01_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_01_01_00_00.move("10","98","100%","46",null,null);

                p.rdoMvmnPathDsgnYn.set_taborder("47");
                p.rdoMvmnPathDsgnYn.set_innerdataset(div00_00_form_rdoMvmnPathDsgnYn_innerdataset);
                p.rdoMvmnPathDsgnYn.set_codecolumn("codecolumn");
                p.rdoMvmnPathDsgnYn.set_datacolumn("datacolumn");
                p.rdoMvmnPathDsgnYn.set_direction("vertical");
                p.rdoMvmnPathDsgnYn.set_fittocontents("none");
                p.rdoMvmnPathDsgnYn.set_columncount("-1");
                p.rdoMvmnPathDsgnYn.set_rowcount("-1");
                p.rdoMvmnPathDsgnYn.set_value("0");
                p.rdoMvmnPathDsgnYn.set_index("0");
                p.rdoMvmnPathDsgnYn.move("681","1303","100%","40",null,null);

                p.Panel00_00_01_01_00_00.set_taborder("48");
                p.Panel00_00_01_01_00_00.set_type("vertical");
                p.Panel00_00_01_01_00_00.set_flexgrow("1");
                p.Panel00_00_01_01_00_00.set_fittocontents("height");
                p.Panel00_00_01_01_00_00.set_verticalgap("4");
                p.Panel00_00_01_01_00_00.set_minwidth("");
                p.Panel00_00_01_01_00_00.move("20.00","84","300","86",null,null);

                p.Static01_00.set_taborder("49");
                p.Static01_00.set_text("항공정보 제공");
                p.Static01_00.set_cssclass("sta_WF_Label_E");
                p.Static01_00.move("638","856","100%","46",null,null);

                p.rdoAvtnInfoPvsnYn.set_taborder("50");
                p.rdoAvtnInfoPvsnYn.set_innerdataset(div00_00_form_rdoAvtnInfoPvsnYn_innerdataset);
                p.rdoAvtnInfoPvsnYn.set_codecolumn("codecolumn");
                p.rdoAvtnInfoPvsnYn.set_datacolumn("datacolumn");
                p.rdoAvtnInfoPvsnYn.set_direction("vertical");
                p.rdoAvtnInfoPvsnYn.set_fittocontents("none");
                p.rdoAvtnInfoPvsnYn.set_columncount("-1");
                p.rdoAvtnInfoPvsnYn.set_rowcount("-1");
                p.rdoAvtnInfoPvsnYn.set_value("0");
                p.rdoAvtnInfoPvsnYn.set_index("0");
                p.rdoAvtnInfoPvsnYn.move("658","916","100%","40",null,null);

                p.pan0005_00.set_taborder("51");
                p.pan0005_00.set_type("vertical");
                p.pan0005_00.set_flexgrow("1");
                p.pan0005_00.set_fittocontents("height");
                p.pan0005_00.set_verticalgap("4");
                p.pan0005_00.move("974.00","151","300","96",null,null);

                p.pan00_01_01_00_00.set_taborder("52");
                p.pan00_01_01_00_00.set_horizontalgap("20");
                p.pan00_01_01_00_00.set_flexcrossaxiswrapalign("start");
                p.pan00_01_01_00_00.set_flexwrap("wrap");
                p.pan00_01_01_00_00.set_fittocontents("height");
                p.pan00_01_01_00_00.set_verticalgap("0");
                p.pan00_01_01_00_00.set_spacing("0px 20px 10px 20px");
                p.pan00_01_01_00_00.set_cssclass("pal_WF_DtlBg");
                p.pan00_01_01_00_00.move("0","60","100.00%","96",null,null);

                p.staLabel00_01_01_00_00_00.set_taborder("53");
                p.staLabel00_01_01_00_00_00.set_text("지하매설물간섭");
                p.staLabel00_01_01_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_01_01_00_00_00.move("10","98","100%","46",null,null);

                p.rdoUdgdEbmtItfeYn.set_taborder("54");
                p.rdoUdgdEbmtItfeYn.set_innerdataset(div00_00_form_rdoUdgdEbmtItfeYn_innerdataset);
                p.rdoUdgdEbmtItfeYn.set_codecolumn("codecolumn");
                p.rdoUdgdEbmtItfeYn.set_datacolumn("datacolumn");
                p.rdoUdgdEbmtItfeYn.set_direction("vertical");
                p.rdoUdgdEbmtItfeYn.set_fittocontents("none");
                p.rdoUdgdEbmtItfeYn.set_columncount("-1");
                p.rdoUdgdEbmtItfeYn.set_rowcount("-1");
                p.rdoUdgdEbmtItfeYn.set_value("0");
                p.rdoUdgdEbmtItfeYn.set_index("0");
                p.rdoUdgdEbmtItfeYn.move("681","1303","100%","40",null,null);

                p.Panel00_00_01_01_00_00_00.set_taborder("55");
                p.Panel00_00_01_01_00_00_00.set_type("vertical");
                p.Panel00_00_01_01_00_00_00.set_flexgrow("1");
                p.Panel00_00_01_01_00_00_00.set_fittocontents("height");
                p.Panel00_00_01_01_00_00_00.set_verticalgap("4");
                p.Panel00_00_01_01_00_00_00.set_minwidth("");
                p.Panel00_00_01_01_00_00_00.move("20.00","84","300","86",null,null);

                p.Static01_00_00.set_taborder("56");
                p.Static01_00_00.set_text("안전시설물설치");
                p.Static01_00_00.set_cssclass("sta_WF_Label_E");
                p.Static01_00_00.move("638","856","100%","46",null,null);

                p.rdoSafeFcltyInstlYn.set_taborder("57");
                p.rdoSafeFcltyInstlYn.set_innerdataset(div00_00_form_rdoSafeFcltyInstlYn_innerdataset);
                p.rdoSafeFcltyInstlYn.set_codecolumn("codecolumn");
                p.rdoSafeFcltyInstlYn.set_datacolumn("datacolumn");
                p.rdoSafeFcltyInstlYn.set_direction("vertical");
                p.rdoSafeFcltyInstlYn.set_fittocontents("none");
                p.rdoSafeFcltyInstlYn.set_columncount("-1");
                p.rdoSafeFcltyInstlYn.set_rowcount("-1");
                p.rdoSafeFcltyInstlYn.set_value("0");
                p.rdoSafeFcltyInstlYn.set_index("0");
                p.rdoSafeFcltyInstlYn.move("658","916","100%","40",null,null);

                p.pan0005_00_00.set_taborder("58");
                p.pan0005_00_00.set_type("vertical");
                p.pan0005_00_00.set_flexgrow("1");
                p.pan0005_00_00.set_fittocontents("height");
                p.pan0005_00_00.set_verticalgap("4");
                p.pan0005_00_00.move("974.00","151","300","96",null,null);

                p.pan00_01_01_00_00_00.set_taborder("59");
                p.pan00_01_01_00_00_00.set_horizontalgap("20");
                p.pan00_01_01_00_00_00.set_flexcrossaxiswrapalign("start");
                p.pan00_01_01_00_00_00.set_flexwrap("wrap");
                p.pan00_01_01_00_00_00.set_fittocontents("height");
                p.pan00_01_01_00_00_00.set_verticalgap("0");
                p.pan00_01_01_00_00_00.set_spacing("0px 20px 10px 20px");
                p.pan00_01_01_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.pan00_01_01_00_00_00.move("0","60","100.00%","130",null,null);

                p.Panel02.set_taborder("60");
                p.Panel02.set_fittocontents("height");
                p.Panel02.move("504","1108","100%","40",null,null);

                p.Static02.set_taborder("61");
                p.Static02.set_text("이동지역 굴착(터파기) 작업 전 지장물 검토 및 항공등화팀(2846) 협의 필수");
                p.Static02.set_fittocontents("height");
                p.Static02.set_cssclass("sta_WF_Des");
                p.Static02.move("72","1137","100%","40",null,null);

                p.Button03.set_taborder("62");
                p.Button03.set_text("동의서 양식 다운로드");
                p.Button03.set_cssclass("btn_WF_Small");
                p.Button03.set_fittocontents("width");
                p.Button03.move("793","256","138","34",null,null);

                p.Button04.set_taborder("64");
                p.Button04.set_text("동의서 양식 다운로드");
                p.Button04.set_cssclass("btn_WF_Small");
                p.Button04.set_fittocontents("width");
                p.Button04.move("781","603","138","34",null,null);
            	}
            );
            obj.set_type("vertical");
            this.div00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00_00.form
            obj = new Layout("mobile","",0,0,this.div00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.div00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00_00.form
            obj = new Layout("Layout0","",0,0,this.div00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.rdoJobRbprsn2SmYn.set_fittocontents("none");
                p.rdoJobRbprsn2SmYn.set_columncount("-1");
                p.rdoJobRbprsn2SmYn.set_rowcount("-1");
                p.rdoJobRbprsn2SmYn.move("20","136","100%","60",null,null);

                p.rdoJobRbprsn1SmYn.set_columncount("-1");
                p.rdoJobRbprsn1SmYn.set_rowcount("-1");
                p.rdoJobRbprsn1SmYn.set_fittocontents("none");
                p.rdoJobRbprsn1SmYn.set_direction("vertical");
                p.rdoJobRbprsn1SmYn.move("20","46","100%","60",null,null);

                p.rdoUdgdEbmtItfeYn.set_fittocontents("none");
                p.rdoUdgdEbmtItfeYn.set_columncount("-1");
                p.rdoUdgdEbmtItfeYn.set_rowcount("-1");

                p.rdoMvmnPathDsgnYn.set_fittocontents("none");
                p.rdoMvmnPathDsgnYn.set_columncount("-1");
                p.rdoMvmnPathDsgnYn.set_rowcount("-1");

                p.rdoOprtrSafeEduYn.set_fittocontents("none");
                p.rdoOprtrSafeEduYn.set_columncount("-1");
                p.rdoOprtrSafeEduYn.set_rowcount("-1");

                p.pan02.move("0","242","100.00%","183",null,null);

                p.pan02_02.move("0","242","100.00%","183",null,null);

                p.pan02_00.move("0","242","100.00%","98",null,null);

                p.pan00_01_01_00.move("0","60","100.00%","193",null,null);

                p.Panel00_00_01_01_00_00.move("20.00","84","400","85.99",null,null);

                p.pan0005_00.move("974.00","151","400","90",null,null);

                p.pan00_01_01_00_00.move("0","60","100.00%","186.99",null,null);

                p.pan00_01_01_00_00_00.move("0","60","100.00%","233",null,null);
            	}
            );
            obj.set_type("vertical");
            this.div00_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.div00_01_01_00.form
            obj = new Layout("default","",0,0,this.div00_01_01_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.TextArea00.set_taborder("4");
                p.TextArea00.set_value("1. 개인정보의 수집 . 이용 목적\n보안구역위해물품 사용신청 시 작성건의 접수와 처리를 위해 개인정보를 수집목적에 필요한 최소한의 범위 내에서 수집하고 있습니다.\n\n2. 수집하려는 개인정보의 항목\n필수항목 : 작업책임자 성명1, 휴대폰번호, 작업책임자 성명2, 휴대폰번호\n\n3. 개인정보의 보유 및 이용 기간\n계약종료 후 3년, 회원탈퇴 시 까지\n\n4. 동의를 거부할 권리와 거부에 따른 불이익 내용\n귀하는 개인정보 수집에 거부할 권리가 있으며, 필수항목 수집을 거부할 경우 보안구역위해물품 승인요청서 작성건의 신청을 할 수 없습니다.");
                p.TextArea00.set_scrolltype("vertical");
                p.TextArea00.set_scrollbartype("none default");
                p.TextArea00.move("68","61","100%","160",null,null);

                p.Panel02.set_taborder("3");
                p.Panel02.set_spacing("10px 20px 0px 20px");
                p.Panel02.set_fittocontents("height");
                p.Panel02.move("0","47","100.00%","170",null,null);

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
                p.staLabel00.set_text("개인정보(필수)수집동의여부");
                p.staLabel00.set_cssclass("sta_WF_Label_E");
                p.staLabel00.move("10","98","100%","46",null,null);

                p.Panel00_00.set_taborder("2");
                p.Panel00_00.set_type("vertical");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.set_fittocontents("height");
                p.Panel00_00.set_minwidth("");
                p.Panel00_00.move("20.00","84","300","86",null,null);

                p.rdoPrvcClctEsntlAgreYn.set_taborder("5");
                p.rdoPrvcClctEsntlAgreYn.set_innerdataset(div00_01_01_00_form_rdoPrvcClctEsntlAgreYn_innerdataset);
                p.rdoPrvcClctEsntlAgreYn.set_codecolumn("codecolumn");
                p.rdoPrvcClctEsntlAgreYn.set_datacolumn("datacolumn");
                p.rdoPrvcClctEsntlAgreYn.set_direction("vertical");
                p.rdoPrvcClctEsntlAgreYn.set_fittocontents("none");
                p.rdoPrvcClctEsntlAgreYn.set_rowcount("-1");
                p.rdoPrvcClctEsntlAgreYn.set_columncount("-1");
                p.rdoPrvcClctEsntlAgreYn.move("143","166","100%","40",null,null);
            	}
            );
            obj.set_type("vertical");
            this.div00_01_01_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00_01_01_00.form
            obj = new Layout("mobile","",0,0,this.div00_01_01_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.div00_01_01_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00_01_01_00.form
            obj = new Layout("Layout0","",0,0,this.div00_01_01_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.div00_01_01_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,800,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("작업현장연락처");

                p.panFrom.set_taborder("2");
                p.panFrom.set_type("vertical");
                p.panFrom.set_fittocontents("height");
                p.panFrom.move("0","0","100%","1690","0",null);

                p.staSubTitle.set_taborder("3");
                p.staSubTitle.set_text("작업현장 연락처(2인이상기재)");
                p.staSubTitle.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle.move("260","140","100%","50",null,null);

                p.Panel03.set_taborder("4");
                p.Panel03.set_cssclass("pal_WF_TitBtnBg");
                p.Panel03.set_flexcrossaxisalign("center");
                p.Panel03.set_flexmainaxisalign("end");
                p.Panel03.set_horizontalgap("10");
                p.Panel03.set_spacing("0px 10px 0px 10px");
                p.Panel03.move("1330","140","209","50",null,null);

                p.btnClose.set_taborder("6");
                p.btnClose.set_cssclass("btn_WF_ACPlus");
                p.btnClose.set_visible("false");
                p.btnClose.move("1130","10","34","34",null,null);

                p.btnOpen.set_taborder("7");
                p.btnOpen.set_cssclass("btn_WF_ACMinus");
                p.btnOpen.move("1140","20","34","34",null,null);

                p.staSubTitle00.set_taborder("8");
                p.staSubTitle00.set_text("개인정보 수집.이용 동의");
                p.staSubTitle00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle00.move("346","1350","100%","50",null,null);

                p.Panel00.set_taborder("9");
                p.Panel00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel00.set_flexcrossaxisalign("center");
                p.Panel00.set_flexmainaxisalign("end");
                p.Panel00.set_horizontalgap("10");
                p.Panel00.set_spacing("0px 10px 0px 10px");
                p.Panel00.move("1416","1350","209","50",null,null);

                p.btnClose00.set_taborder("11");
                p.btnClose00.set_cssclass("btn_WF_ACPlus");
                p.btnClose00.set_visible("false");
                p.btnClose00.move("1210","1293","34","34",null,null);

                p.btnOpen00.set_taborder("12");
                p.btnOpen00.set_cssclass("btn_WF_ACMinus");
                p.btnOpen00.move("1180","1290","34","34",null,null);

                p.Panel04.set_taborder("5");
                p.Panel04.set_fittocontents("none");
                p.Panel04.set_flexcrossaxisalign("end");
                p.Panel04.set_minheight("70");
                p.Panel04.set_maxheight("");
                p.Panel04.move("260","140","100.00%","70",null,null);

                p.div00_00.set_taborder("0");
                p.div00_00.set_text("신청정보");
                p.div00_00.set_cssclass("div_WF_Bg");
                p.div00_00.set_fittocontents("height");
                p.div00_00.set_formscrollbartype("none none");
                p.div00_00.set_formscrolltype("none");
                p.div00_00.move("1470","59","100%","1102",null,null);

                p.Panel01.set_taborder("10");
                p.Panel01.set_fittocontents("none");
                p.Panel01.set_flexcrossaxisalign("end");
                p.Panel01.set_minheight("70");
                p.Panel01.set_maxheight("");
                p.Panel01.move("346","1350","100.00%","70",null,null);

                p.div00_01_01_00.set_taborder("1");
                p.div00_01_01_00.set_text("신청자정보");
                p.div00_01_01_00.set_cssclass("div_WF_Bg");
                p.div00_01_01_00.set_fittocontents("height");
                p.div00_01_01_00.set_formscrollbartype("none none");
                p.div00_01_01_00.set_formscrolltype("none");
                p.div00_01_01_00.move("1670","1415","100.00%","350",null,null);
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
                p.panFrom.set_spacing("0px 20px 10px 20px");
                p.panFrom.move("0","0","100.00%","2068.99",null,null);

                p.div00_00.move("1470","59","100%","1568.99",null,null);
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
            obj = new BindItem("item0","div00_00.form.rdoJobRbprsn1SmYn","value","dsCstJobAprv","jobRbprsn1SmYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div00_00.form.edtJobRbprsn1Nm","value","dsCstJobAprv","jobRbprsn1Nm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div00_00.form.edtJobRbprsn1Telno","value","dsCstJobAprv","jobRbprsn1Telno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div00_00.form.rdoJobRbprsn2SmYn","value","dsCstJobAprv","jobRbprsn2SmYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div00_00.form.edtJobRbprsn2Nm","value","dsCstJobAprv","jobRbprsn2Nm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div00_00.form.edtJobRbprsn2Telno","value","dsCstJobAprv","jobRbprsn2Telno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div00_00.form.edtTrsClsgnNm","value","dsCstJobAprv","trsClsgnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div00_00.form.rdoOprtrSafeEduYn","value","dsCstJobAprv","oprtrSafeEduYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div00_00.form.rdoRltnInstBfhdCnsltnYn","value","dsCstJobAprv","rltnInstBfhdCnsltnYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div00_00.form.rdoMvmnPathDsgnYn","value","dsCstJobAprv","mvmnPathDsgnYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div00_00.form.rdoAvtnInfoPvsnYn","value","dsCstJobAprv","avtnInfoPvsnYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div00_00.form.rdoUdgdEbmtItfeYn","value","dsCstJobAprv","udgdEbmtItfeYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div00_00.form.rdoSafeFcltyInstlYn","value","dsCstJobAprv","safeFcltyInstlYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div00_01_01_00.form.rdoPrvcClctEsntlAgreYn","value","dsCstJobAprv","prvcClctEsntlAgreYn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CST013M03.xfdl","xjs::TaskCom.xjs");
        this.registerScript("CST013M03.xfdl", function() {
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
        	this.dsMvmnRgnMst	=	this.lookup("dsMvmnRgnMst");
        	this.dsCstJobAprv	=	this.lookup("dsCstJobAprv");
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
        		this.div00_00.visible = true;
        	} else {
        		this.div00_00.visible = false;
        	}
        	// 펼침(축소)
        	obj.cssclass = obj.cssclass == "btn_WF_ACPlus" ? "btn_WF_ACMinus" : "btn_WF_ACPlus";  // +,- css 변경
        	this.resetScroll();
        };

        /**************************************************************************
         * @name : btnFold2_onclick
         * @description : 신청자 정보 접기/펴기
         ***************************************************************************/
        this.btnFold2_onclick = function(obj,e)
        {
        	if (obj.cssclass == "btn_WF_ACPlus") {
        		this.div00_01_01_00.visible = true;
        	} else {
        		this.div00_01_01_00.visible = false;
        	}
        	// 펼침(축소)
        	obj.cssclass = obj.cssclass == "btn_WF_ACPlus" ? "btn_WF_ACMinus" : "btn_WF_ACPlus";  // +,- css 변경
        	this.resetScroll();
        };

        /**************************************************************************
         * @name : rdoJobRbprsn1SmYn_onitemchanged
         * @description : 작업책임자1 신청정보 동일여부
         ***************************************************************************/
        this.rdoJobRbprsn1SmYn_onitemchanged = function(obj,e)
        {
        	var vJobRbprsn1SmYn = this.dsCstJobAprv.getColumn(0, "jobRbprsn1SmYn");
        	if (vJobRbprsn1SmYn == "0") {
        		this.div00_00.form.pan04.visible = true;					//작업책임자1의 개인정보수집이용 및 제3자제공동의 첨부파일
        		this.dsCstJobAprv.setColumn(0, "jobRbprsn1Nm", "");
        	} else {
        		this.dsCstJobAprv.setColumn(0, "jobRbprsn1Nm", this.dsMvmnRgnMst.getColumn(0, "aplcntNm"));
        		this.div00_00.form.pan04.visible = false;					//작업책임자1의 개인정보수집이용 및 제3자제공동의 첨부파일
        	}
        };

        /**************************************************************************
         * @name : rdoJobRbprsn1SmYn_onitemchanged
         * @description : 작업책임자1 신청정보 동일여부
         ***************************************************************************/
        this.rdoJobRbprsn2SmYn_onitemchanged = function(obj,e)
        {
        	var vJobRbprsn2SmYn = this.dsCstJobAprv.getColumn(0, "jobRbprsn2SmYn");
        	if (vJobRbprsn2SmYn == "0") {
        		this.div00_00.form.pan04_00.visible = true;					//작업책임자2의 개인정보수집이용 및 제3자제공동의 첨부파일
        		this.dsCstJobAprv.setColumn(0, "jobRbprsn2Nm", "");
        	} else {
        		this.dsCstJobAprv.setColumn(0, "jobRbprsn2Nm", this.dsMvmnRgnMst.getColumn(0, "aplcntNm"));
        		this.div00_00.form.pan04_00.visible = false;				//작업책임자2의 개인정보수집이용 및 제3자제공동의 첨부파일
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnOpen.addEventHandler("onclick",this.btnFold1_onclick,this);
            this.btnOpen00.addEventHandler("onclick",this.btnFold2_onclick,this);
            this.div00_00.form.rdoJobRbprsn1SmYn.addEventHandler("onitemchanged",this.rdoJobRbprsn1SmYn_onitemchanged,this);
            this.div00_00.form.rdoJobRbprsn2SmYn.addEventHandler("onitemchanged",this.rdoJobRbprsn2SmYn_onitemchanged,this);
            this.div00_00.form.rdoOprtrSafeEduYn.addEventHandler("onitemchanged",this.divForm_div00_00_Radio00_00_00_onitemchanged,this);
            this.div00_00.form.rdoMvmnPathDsgnYn.addEventHandler("onitemchanged",this.divForm_div00_00_Radio00_00_00_onitemchanged,this);
            this.div00_00.form.rdoUdgdEbmtItfeYn.addEventHandler("onitemchanged",this.divForm_div00_00_Radio00_00_00_onitemchanged,this);
            this.div00_01_01_00.form.TextArea00.addEventHandler("onchanged",this.div00_01_01_00_TextArea00_onchanged,this);
        };
        this.loadIncludeScript("CST013M03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
