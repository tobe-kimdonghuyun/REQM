(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST002S32");
            this.set_titletext("분야별 담당자");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,1706);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFile1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"fullName\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"fullName\">Iaad010101 [PDF, 328KB]</Col><Col id=\"fileSz\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staSubTitle","0","0","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("분야별 담당자");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Div("div00_01_00","0","staSubTitle:0","100%","1650",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("신청자정보");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","20","20","100.00%","57",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("0");
            obj.set_text("■ 건설산업기본법 시행령 제8조(경미한 건설공사등)에 따라 종합공사 5천만원 미만, 전문공사 1.5천만원 미만의 경우 건설업면허 확인이 불필요하지만 그 외 경우 시공사 면허 보유 여부를 확인합니다\r\n다만 전기공사업법에 따라 전기분야 면허는 금액 기준에 상관없이 관련 법에 따라 확인합니다.");
            obj.set_cssclass("sta_WF_Des004");
            obj.set_fittocontents("height");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00","10","98","100%","46",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("1");
            obj.set_text("건축분야 회사명");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Edit("edt00_02","20.00","288","100%","40",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("2");
            obj.set_displaynulltext("회사명");
            obj.set_text("");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","20.00","242","305","86",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_02\"/></Contents>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Static("staLabel03_01","970","270","100%","46",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("4");
            obj.set_text("건축담당자");
            obj.set_cssclass("sta_WF_Label");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Edit("edt00_03_01","970","315","100%","40",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("5");
            obj.set_displaynulltext("성명");
            obj.set_text("");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Panel("Panel02_01","970.00","270","305","86",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_03_01\"/></Contents>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Panel("pan02","0","242","100.00%","96",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("7");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_01\"/></Contents>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01","20.00","242","305","46",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("8");
            obj.set_text("건축담당자의 개인정보수집 및 이용동의서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Button("Button03","825","211","138","40",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("9");
            obj.set_text("동의서 양식 다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Button("Button00","319.00","242","116","40",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("10");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Panel("Panel01","319","242","305","46",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("11");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button03\"/><PanelItem id=\"PanelItem00\" componentid=\"Button00\"/></Contents>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Panel("Panel00","20","242","100%","46",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("12");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/></Contents>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Grid("Grid00","20.00","246","100%","40",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("13");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00","20.00","242","305","111",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("14");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00\"/></Contents>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Panel("pan04","0","242","100.00%","120",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("15");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00\"/></Contents>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_00","20.00","242","305","46",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("16");
            obj.set_text("건축분야 회사 면허");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Button("Button03_00","825","211","138","40",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("17");
            obj.set_text("동의서 양식 다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Button("Button00_00","319.00","242","116","40",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("18");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","319","242","305","46",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("19");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button03_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Button00_00\"/></Contents>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","20","242","100%","46",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("20");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00\"/></Contents>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","20.00","246","100%","40",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("21");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00","20.00","242","305","111",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("22");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00\"/></Contents>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Panel("pan04_00","0","242","100.00%","120",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("23");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_00\"/></Contents>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00","10","98","100%","46",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("24");
            obj.set_text("기계분야 회사명");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Edit("edt00_02_00","20.00","288","100%","40",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("25");
            obj.set_displaynulltext("회사명");
            obj.set_text("");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_01","20.00","242","305","86",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("26");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_02_00\"/></Contents>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00","970","270","100%","46",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("27");
            obj.set_text("기계담당자");
            obj.set_cssclass("sta_WF_Label");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Edit("edt00_03_01_00","970","315","100%","40",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("28");
            obj.set_displaynulltext("성명");
            obj.set_text("");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Panel("Panel02_01_00","970.00","270","305","86",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("29");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_03_01_00\"/></Contents>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Panel("pan02_00","0","242","100.00%","96",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("30");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_01_00\"/></Contents>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_00_00","20.00","242","305","46",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("31");
            obj.set_text("기계담당자의 개인정보수집 및 이용동의서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Button("Button03_00_00","825","211","138","40",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("32");
            obj.set_text("동의서 양식 다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","319.00","242","116","40",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("33");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00","319","242","305","46",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("34");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button03_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Button00_00_00\"/></Contents>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","20","242","100%","46",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("35");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00_00\"/></Contents>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00","20.00","246","100%","40",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("36");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00_00","20.00","242","305","111",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("37");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00_00\"/></Contents>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Panel("pan04_00_00","0","242","100.00%","120",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("38");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_00_00\"/></Contents>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_01","20.00","242","305","46",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("39");
            obj.set_text("기계분야 회사 면허");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Button("Button03_01","825","211","138","40",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("40");
            obj.set_text("동의서 양식 다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Button("Button00_01","319.00","242","116","40",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("41");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Panel("Panel01_01","319","242","305","46",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("42");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button03_01\"/><PanelItem id=\"PanelItem00\" componentid=\"Button00_01\"/></Contents>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","20","242","100%","46",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("43");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01\"/></Contents>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Grid("Grid00_01","20.00","246","100%","40",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("44");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_01","20.00","242","305","111",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("45");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_01\"/></Contents>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Panel("pan04_01","0","242","100.00%","120",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("46");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_01\"/></Contents>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("47");
            obj.set_text("전기분야 회사명");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Edit("edt00_02_00_00","20.00","288","100%","40",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("48");
            obj.set_displaynulltext("회사명");
            obj.set_text("");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_01_00","20.00","242","305","86",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("49");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_02_00_00\"/></Contents>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00_00","970","270","100%","46",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("50");
            obj.set_text("전기담당자");
            obj.set_cssclass("sta_WF_Label");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Edit("edt00_03_01_00_00","970","315","100%","40",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("51");
            obj.set_displaynulltext("성명");
            obj.set_text("");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Panel("Panel02_01_00_00","970.00","270","305","86",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("52");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_03_01_00_00\"/></Contents>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Panel("pan02_00_00","0","242","100.00%","96",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("53");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_01_00_00\"/></Contents>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_00_00_00","20.00","242","305","46",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("54");
            obj.set_text("전기담당자의 개인정보수집 및 이용동의서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Button("Button03_00_00_00","825","211","138","40",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("55");
            obj.set_text("동의서 양식 다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00","319.00","242","116","40",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("56");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00","319","242","305","46",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("57");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button03_00_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Button00_00_00_00\"/></Contents>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00","20","242","100%","46",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("58");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00_00_00\"/></Contents>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00_00","20.00","246","100%","40",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("59");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00_00_00","20.00","242","305","111",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("60");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00_00_00\"/></Contents>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Panel("pan04_00_00_00","0","242","100.00%","120",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("61");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_00_00_00\"/></Contents>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_01_00","20.00","242","305","46",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("62");
            obj.set_text("전기분야 회사 면허");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Button("Button03_01_00","825","211","138","40",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("63");
            obj.set_text("동의서 양식 다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00","319.00","242","116","40",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("64");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00","319","242","305","46",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("65");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button03_01_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Button00_01_00\"/></Contents>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Panel("Panel00_01_00","20","242","100%","46",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("66");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01_00\"/></Contents>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Grid("Grid00_01_00","20.00","246","100%","40",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("67");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_01_00","20.00","242","305","111",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("68");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_01_00\"/></Contents>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Panel("pan04_01_00","0","242","100.00%","120",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("69");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_01_00\"/></Contents>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("70");
            obj.set_text("통신분야 회사명");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Edit("edt00_02_00_00_00","20.00","288","100%","40",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("71");
            obj.set_displaynulltext("회사명");
            obj.set_text("");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_01_00_00","20.00","242","305","86",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("72");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_02_00_00_00\"/></Contents>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00_00_00","970","270","100%","46",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("73");
            obj.set_text("통신담당자");
            obj.set_cssclass("sta_WF_Label");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Edit("edt00_03_01_00_00_00","970","315","100%","40",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("74");
            obj.set_displaynulltext("성명");
            obj.set_text("");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Panel("Panel02_01_00_00_00","970.00","270","305","86",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("75");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_03_01_00_00_00\"/></Contents>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Panel("pan02_00_00_00","0","242","100.00%","96",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("76");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_01_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_01_00_00_00\"/></Contents>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_00_00_00_00","20.00","242","305","46",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("77");
            obj.set_text("통신담당자의 개인정보수집 및 이용동의서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Button("Button03_00_00_00_00","825","211","138","40",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("78");
            obj.set_text("동의서 양식 다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00","319.00","242","116","40",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("79");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00","319","242","305","46",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("80");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button03_00_00_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Button00_00_00_00_00\"/></Contents>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00_00","20","242","100%","46",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("81");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00_00_00_00\"/></Contents>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00_00_00","20.00","246","100%","40",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("82");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00_00_00_00","20.00","242","305","111",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("83");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00_00_00_00\"/></Contents>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Panel("pan04_00_00_00_00","0","242","100.00%","120",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("84");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_00_00_00_00\"/></Contents>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_01_00_00","20.00","242","305","46",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("85");
            obj.set_text("통신분야 회사 면허");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Button("Button03_01_00_00","825","211","138","40",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("86");
            obj.set_text("동의서 양식 다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00","319.00","242","116","40",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("87");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00","319","242","305","46",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("88");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button03_01_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Button00_01_00_00\"/></Contents>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Panel("Panel00_01_00_00","20","242","100%","46",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("89");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01_00_00\"/></Contents>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Grid("Grid00_01_00_00","20.00","246","100%","40",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("90");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_01_00_00","20.00","242","305","111",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("91");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_01_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_01_00_00\"/></Contents>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Panel("pan04_01_00_00","0","242","100.00%","120",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("92");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_01_00_00\"/></Contents>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_00_01","10","98","100%","46",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("93");
            obj.set_text("소방분야 회사명");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Edit("edt00_02_00_00_01","20.00","288","100%","40",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("94");
            obj.set_displaynulltext("회사명");
            obj.set_text("");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_01_00_01","20.00","242","305","86",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("95");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_02_00_00_01\"/></Contents>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00_00_01","970","270","100%","46",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("96");
            obj.set_text("소방담당자");
            obj.set_cssclass("sta_WF_Label");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Edit("edt00_03_01_00_00_01","970","315","100%","40",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("97");
            obj.set_displaynulltext("성명");
            obj.set_text("");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Panel("Panel02_01_00_00_01","970.00","270","305","86",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("98");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_03_01_00_00_01\"/></Contents>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Panel("pan02_00_00_01","0","242","100.00%","96",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("99");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_01_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_01_00_00_01\"/></Contents>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_00_00_00_00_00","20.00","242","305","46",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("100");
            obj.set_text("소방담당자의 개인정보수집 및 이용동의서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Button("Button03_00_00_00_00_00","825","211","138","40",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("101");
            obj.set_text("동의서 양식 다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00_00","319.00","242","116","40",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("102");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00_00","319","242","305","46",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("103");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button03_00_00_00_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Button00_00_00_00_00_00\"/></Contents>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00_00_00","20","242","100%","46",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("104");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00_00_00_00_00\"/></Contents>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00_00_00_00","20.00","246","100%","40",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("105");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00_00_00_00_00","20.00","242","305","111",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("106");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00_00_00_00_00\"/></Contents>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Panel("pan04_00_00_00_00_00","0","242","100.00%","120",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("107");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_00_00_00_00_00\"/></Contents>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_01_00_00_00","20.00","242","305","46",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("108");
            obj.set_text("소방분야 회사 면허");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Button("Button03_01_00_00_00","825","211","138","40",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("109");
            obj.set_text("동의서 양식 다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00","319.00","242","116","40",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("110");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_00","319","242","305","46",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("111");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button03_01_00_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Button00_01_00_00_00\"/></Contents>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Panel("Panel00_01_00_00_00","20","242","100%","46",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("112");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01_01_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01_00_00_00\"/></Contents>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Grid("Grid00_01_00_00_00","20.00","246","100%","40",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("113");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_01_00_00_00","20.00","242","305","111",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("114");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_01_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_01_00_00_00\"/></Contents>");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Panel("pan04_01_00_00_00","0","242","100.00%","120",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("115");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_01_00_00_00\"/></Contents>");
            this.div00_01_00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00_01_00.form
            obj = new Layout("default","",0,0,this.div00_01_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.sta00.set_taborder("0");
                p.sta00.set_text("■ 건설산업기본법 시행령 제8조(경미한 건설공사등)에 따라 종합공사 5천만원 미만, 전문공사 1.5천만원 미만의 경우 건설업면허 확인이 불필요하지만 그 외 경우 시공사 면허 보유 여부를 확인합니다\r\n다만 전기공사업법에 따라 전기분야 면허는 금액 기준에 상관없이 관련 법에 따라 확인합니다.");
                p.sta00.set_cssclass("sta_WF_Des004");
                p.sta00.set_fittocontents("height");
                p.sta00.move("20","20","100.00%","57",null,null);

                p.staLabel03_00.set_taborder("1");
                p.staLabel03_00.set_text("건축분야 회사명");
                p.staLabel03_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00.move("10","98","100%","46",null,null);

                p.edt00_02.set_taborder("2");
                p.edt00_02.set_displaynulltext("회사명");
                p.edt00_02.move("20.00","288","100%","40",null,null);

                p.Panel02_00.set_taborder("3");
                p.Panel02_00.set_type("vertical");
                p.Panel02_00.set_flexgrow("1");
                p.Panel02_00.move("20.00","242","305","86",null,null);

                p.staLabel03_01.set_taborder("4");
                p.staLabel03_01.set_text("건축담당자");
                p.staLabel03_01.set_cssclass("sta_WF_Label");
                p.staLabel03_01.move("970","270","100%","46",null,null);

                p.edt00_03_01.set_taborder("5");
                p.edt00_03_01.set_displaynulltext("성명");
                p.edt00_03_01.move("970","315","100%","40",null,null);

                p.Panel02_01.set_taborder("6");
                p.Panel02_01.set_type("vertical");
                p.Panel02_01.set_flexgrow("1");
                p.Panel02_01.move("970.00","270","305","86",null,null);

                p.pan02.set_taborder("7");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.move("0","242","100.00%","96",null,null);

                p.staLabel03_00_01.set_taborder("8");
                p.staLabel03_00_01.set_text("건축담당자의 개인정보수집 및 이용동의서");
                p.staLabel03_00_01.set_cssclass("sta_WF_Label");
                p.staLabel03_00_01.set_fittocontents("width");
                p.staLabel03_00_01.set_flexgrow("1");
                p.staLabel03_00_01.move("20.00","242","305","46",null,null);

                p.Button03.set_taborder("9");
                p.Button03.set_text("동의서 양식 다운로드");
                p.Button03.set_cssclass("btn_WF_Small");
                p.Button03.set_fittocontents("width");
                p.Button03.move("825","211","138","40",null,null);

                p.Button00.set_taborder("10");
                p.Button00.set_text("파일선택");
                p.Button00.set_cssclass("btn_WF_FileUp");
                p.Button00.set_fittocontents("width");
                p.Button00.move("319.00","242","116","40",null,null);

                p.Panel01.set_taborder("11");
                p.Panel01.set_flexmainaxisalign("end");
                p.Panel01.set_flexgrow("1");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.move("319","242","305","46",null,null);

                p.Panel00.set_taborder("12");
                p.Panel00.set_tabletemplate("1* / 1* 1*");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_cssclass("pan_WF_FileTitle");
                p.Panel00.move("20","242","100%","46",null,null);

                p.Grid00.set_taborder("13");
                p.Grid00.set_binddataset("dsFile1");
                p.Grid00.set_autofittype("col");
                p.Grid00.set_cssclass("grd_WF_FileAdd");
                p.Grid00.move("20.00","246","100%","40",null,null);

                p.Panel02_00_00.set_taborder("14");
                p.Panel02_00_00.set_type("vertical");
                p.Panel02_00_00.set_flexgrow("1");
                p.Panel02_00_00.set_verticalgap("4");
                p.Panel02_00_00.set_fittocontents("height");
                p.Panel02_00_00.move("20.00","242","305","111",null,null);

                p.pan04.set_taborder("15");
                p.pan04.set_flexcrossaxiswrapalign("start");
                p.pan04.set_flexwrap("wrap");
                p.pan04.set_fittocontents("height");
                p.pan04.set_spacing("10px 20px 10px 20px");
                p.pan04.set_cssclass("pal_WF_DtlBg");
                p.pan04.set_verticalgap("4");
                p.pan04.move("0","242","100.00%","120",null,null);

                p.staLabel03_00_01_00.set_taborder("16");
                p.staLabel03_00_01_00.set_text("건축분야 회사 면허");
                p.staLabel03_00_01_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00_01_00.set_fittocontents("width");
                p.staLabel03_00_01_00.set_flexgrow("1");
                p.staLabel03_00_01_00.move("20.00","242","305","46",null,null);

                p.Button03_00.set_taborder("17");
                p.Button03_00.set_text("동의서 양식 다운로드");
                p.Button03_00.set_cssclass("btn_WF_Small");
                p.Button03_00.set_fittocontents("width");
                p.Button03_00.set_visible("false");
                p.Button03_00.move("825","211","138","40",null,null);

                p.Button00_00.set_taborder("18");
                p.Button00_00.set_text("파일선택");
                p.Button00_00.set_cssclass("btn_WF_FileUp");
                p.Button00_00.set_fittocontents("width");
                p.Button00_00.move("319.00","242","116","40",null,null);

                p.Panel01_00.set_taborder("19");
                p.Panel01_00.set_flexmainaxisalign("end");
                p.Panel01_00.set_flexgrow("1");
                p.Panel01_00.set_horizontalgap("10");
                p.Panel01_00.move("319","242","305","46",null,null);

                p.Panel00_00.set_taborder("20");
                p.Panel00_00.set_tabletemplate("1* / 1* 1*");
                p.Panel00_00.set_fittocontents("height");
                p.Panel00_00.set_cssclass("pan_WF_FileTitle");
                p.Panel00_00.move("20","242","100%","46",null,null);

                p.Grid00_00.set_taborder("21");
                p.Grid00_00.set_binddataset("dsFile1");
                p.Grid00_00.set_autofittype("col");
                p.Grid00_00.set_cssclass("grd_WF_FileAdd");
                p.Grid00_00.move("20.00","246","100%","40",null,null);

                p.Panel02_00_00_00.set_taborder("22");
                p.Panel02_00_00_00.set_type("vertical");
                p.Panel02_00_00_00.set_flexgrow("1");
                p.Panel02_00_00_00.set_verticalgap("4");
                p.Panel02_00_00_00.set_fittocontents("height");
                p.Panel02_00_00_00.move("20.00","242","305","111",null,null);

                p.pan04_00.set_taborder("23");
                p.pan04_00.set_flexcrossaxiswrapalign("start");
                p.pan04_00.set_flexwrap("wrap");
                p.pan04_00.set_fittocontents("height");
                p.pan04_00.set_spacing("10px 20px 10px 20px");
                p.pan04_00.set_cssclass("pal_WF_DtlBg");
                p.pan04_00.set_verticalgap("4");
                p.pan04_00.move("0","242","100.00%","120",null,null);

                p.staLabel03_00_00.set_taborder("24");
                p.staLabel03_00_00.set_text("기계분야 회사명");
                p.staLabel03_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_00.move("10","98","100%","46",null,null);

                p.edt00_02_00.set_taborder("25");
                p.edt00_02_00.set_displaynulltext("회사명");
                p.edt00_02_00.move("20.00","288","100%","40",null,null);

                p.Panel02_00_01.set_taborder("26");
                p.Panel02_00_01.set_type("vertical");
                p.Panel02_00_01.set_flexgrow("1");
                p.Panel02_00_01.move("20.00","242","305","86",null,null);

                p.staLabel03_01_00.set_taborder("27");
                p.staLabel03_01_00.set_text("기계담당자");
                p.staLabel03_01_00.set_cssclass("sta_WF_Label");
                p.staLabel03_01_00.move("970","270","100%","46",null,null);

                p.edt00_03_01_00.set_taborder("28");
                p.edt00_03_01_00.set_displaynulltext("성명");
                p.edt00_03_01_00.move("970","315","100%","40",null,null);

                p.Panel02_01_00.set_taborder("29");
                p.Panel02_01_00.set_type("vertical");
                p.Panel02_01_00.set_flexgrow("1");
                p.Panel02_01_00.move("970.00","270","305","86",null,null);

                p.pan02_00.set_taborder("30");
                p.pan02_00.set_horizontalgap("20");
                p.pan02_00.set_flexcrossaxiswrapalign("start");
                p.pan02_00.set_flexwrap("wrap");
                p.pan02_00.set_fittocontents("height");
                p.pan02_00.set_verticalgap("0");
                p.pan02_00.set_spacing("0px 20px 10px 20px");
                p.pan02_00.set_cssclass("pal_WF_DtlBg");
                p.pan02_00.move("0","242","100.00%","96",null,null);

                p.staLabel03_00_01_00_00.set_taborder("31");
                p.staLabel03_00_01_00_00.set_text("기계담당자의 개인정보수집 및 이용동의서");
                p.staLabel03_00_01_00_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00_01_00_00.set_fittocontents("width");
                p.staLabel03_00_01_00_00.set_flexgrow("1");
                p.staLabel03_00_01_00_00.move("20.00","242","305","46",null,null);

                p.Button03_00_00.set_taborder("32");
                p.Button03_00_00.set_text("동의서 양식 다운로드");
                p.Button03_00_00.set_cssclass("btn_WF_Small");
                p.Button03_00_00.set_fittocontents("width");
                p.Button03_00_00.move("825","211","138","40",null,null);

                p.Button00_00_00.set_taborder("33");
                p.Button00_00_00.set_text("파일선택");
                p.Button00_00_00.set_cssclass("btn_WF_FileUp");
                p.Button00_00_00.set_fittocontents("width");
                p.Button00_00_00.move("319.00","242","116","40",null,null);

                p.Panel01_00_00.set_taborder("34");
                p.Panel01_00_00.set_flexmainaxisalign("end");
                p.Panel01_00_00.set_flexgrow("1");
                p.Panel01_00_00.set_horizontalgap("10");
                p.Panel01_00_00.move("319","242","305","46",null,null);

                p.Panel00_00_00.set_taborder("35");
                p.Panel00_00_00.set_tabletemplate("1* / 1* 1*");
                p.Panel00_00_00.set_fittocontents("height");
                p.Panel00_00_00.set_cssclass("pan_WF_FileTitle");
                p.Panel00_00_00.move("20","242","100%","46",null,null);

                p.Grid00_00_00.set_taborder("36");
                p.Grid00_00_00.set_binddataset("dsFile1");
                p.Grid00_00_00.set_autofittype("col");
                p.Grid00_00_00.set_cssclass("grd_WF_FileAdd");
                p.Grid00_00_00.move("20.00","246","100%","40",null,null);

                p.Panel02_00_00_00_00.set_taborder("37");
                p.Panel02_00_00_00_00.set_type("vertical");
                p.Panel02_00_00_00_00.set_flexgrow("1");
                p.Panel02_00_00_00_00.set_verticalgap("4");
                p.Panel02_00_00_00_00.set_fittocontents("height");
                p.Panel02_00_00_00_00.move("20.00","242","305","111",null,null);

                p.pan04_00_00.set_taborder("38");
                p.pan04_00_00.set_flexcrossaxiswrapalign("start");
                p.pan04_00_00.set_flexwrap("wrap");
                p.pan04_00_00.set_fittocontents("height");
                p.pan04_00_00.set_spacing("10px 20px 10px 20px");
                p.pan04_00_00.set_cssclass("pal_WF_DtlBg");
                p.pan04_00_00.set_verticalgap("4");
                p.pan04_00_00.move("0","242","100.00%","120",null,null);

                p.staLabel03_00_01_01.set_taborder("39");
                p.staLabel03_00_01_01.set_text("기계분야 회사 면허");
                p.staLabel03_00_01_01.set_cssclass("sta_WF_Label");
                p.staLabel03_00_01_01.set_fittocontents("width");
                p.staLabel03_00_01_01.set_flexgrow("1");
                p.staLabel03_00_01_01.move("20.00","242","305","46",null,null);

                p.Button03_01.set_taborder("40");
                p.Button03_01.set_text("동의서 양식 다운로드");
                p.Button03_01.set_cssclass("btn_WF_Small");
                p.Button03_01.set_fittocontents("width");
                p.Button03_01.set_visible("false");
                p.Button03_01.move("825","211","138","40",null,null);

                p.Button00_01.set_taborder("41");
                p.Button00_01.set_text("파일선택");
                p.Button00_01.set_cssclass("btn_WF_FileUp");
                p.Button00_01.set_fittocontents("width");
                p.Button00_01.move("319.00","242","116","40",null,null);

                p.Panel01_01.set_taborder("42");
                p.Panel01_01.set_flexmainaxisalign("end");
                p.Panel01_01.set_flexgrow("1");
                p.Panel01_01.set_horizontalgap("10");
                p.Panel01_01.move("319","242","305","46",null,null);

                p.Panel00_01.set_taborder("43");
                p.Panel00_01.set_tabletemplate("1* / 1* 1*");
                p.Panel00_01.set_fittocontents("height");
                p.Panel00_01.set_cssclass("pan_WF_FileTitle");
                p.Panel00_01.move("20","242","100%","46",null,null);

                p.Grid00_01.set_taborder("44");
                p.Grid00_01.set_binddataset("dsFile1");
                p.Grid00_01.set_autofittype("col");
                p.Grid00_01.set_cssclass("grd_WF_FileAdd");
                p.Grid00_01.move("20.00","246","100%","40",null,null);

                p.Panel02_00_00_01.set_taborder("45");
                p.Panel02_00_00_01.set_type("vertical");
                p.Panel02_00_00_01.set_flexgrow("1");
                p.Panel02_00_00_01.set_verticalgap("4");
                p.Panel02_00_00_01.set_fittocontents("height");
                p.Panel02_00_00_01.move("20.00","242","305","111",null,null);

                p.pan04_01.set_taborder("46");
                p.pan04_01.set_flexcrossaxiswrapalign("start");
                p.pan04_01.set_flexwrap("wrap");
                p.pan04_01.set_fittocontents("height");
                p.pan04_01.set_spacing("10px 20px 10px 20px");
                p.pan04_01.set_cssclass("pal_WF_DtlBg");
                p.pan04_01.set_verticalgap("4");
                p.pan04_01.move("0","242","100.00%","120",null,null);

                p.staLabel03_00_00_00.set_taborder("47");
                p.staLabel03_00_00_00.set_text("전기분야 회사명");
                p.staLabel03_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_00_00.move("10","98","100%","46",null,null);

                p.edt00_02_00_00.set_taborder("48");
                p.edt00_02_00_00.set_displaynulltext("회사명");
                p.edt00_02_00_00.move("20.00","288","100%","40",null,null);

                p.Panel02_00_01_00.set_taborder("49");
                p.Panel02_00_01_00.set_type("vertical");
                p.Panel02_00_01_00.set_flexgrow("1");
                p.Panel02_00_01_00.move("20.00","242","305","86",null,null);

                p.staLabel03_01_00_00.set_taborder("50");
                p.staLabel03_01_00_00.set_text("전기담당자");
                p.staLabel03_01_00_00.set_cssclass("sta_WF_Label");
                p.staLabel03_01_00_00.move("970","270","100%","46",null,null);

                p.edt00_03_01_00_00.set_taborder("51");
                p.edt00_03_01_00_00.set_displaynulltext("성명");
                p.edt00_03_01_00_00.move("970","315","100%","40",null,null);

                p.Panel02_01_00_00.set_taborder("52");
                p.Panel02_01_00_00.set_type("vertical");
                p.Panel02_01_00_00.set_flexgrow("1");
                p.Panel02_01_00_00.move("970.00","270","305","86",null,null);

                p.pan02_00_00.set_taborder("53");
                p.pan02_00_00.set_horizontalgap("20");
                p.pan02_00_00.set_flexcrossaxiswrapalign("start");
                p.pan02_00_00.set_flexwrap("wrap");
                p.pan02_00_00.set_fittocontents("height");
                p.pan02_00_00.set_verticalgap("0");
                p.pan02_00_00.set_spacing("0px 20px 10px 20px");
                p.pan02_00_00.set_cssclass("pal_WF_DtlBg");
                p.pan02_00_00.set_flexgrow("1");
                p.pan02_00_00.move("0","242","100.00%","96",null,null);

                p.staLabel03_00_01_00_00_00.set_taborder("54");
                p.staLabel03_00_01_00_00_00.set_text("전기담당자의 개인정보수집 및 이용동의서");
                p.staLabel03_00_01_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00_01_00_00_00.set_fittocontents("width");
                p.staLabel03_00_01_00_00_00.set_flexgrow("1");
                p.staLabel03_00_01_00_00_00.move("20.00","242","305","46",null,null);

                p.Button03_00_00_00.set_taborder("55");
                p.Button03_00_00_00.set_text("동의서 양식 다운로드");
                p.Button03_00_00_00.set_cssclass("btn_WF_Small");
                p.Button03_00_00_00.set_fittocontents("width");
                p.Button03_00_00_00.move("825","211","138","40",null,null);

                p.Button00_00_00_00.set_taborder("56");
                p.Button00_00_00_00.set_text("파일선택");
                p.Button00_00_00_00.set_cssclass("btn_WF_FileUp");
                p.Button00_00_00_00.set_fittocontents("width");
                p.Button00_00_00_00.move("319.00","242","116","40",null,null);

                p.Panel01_00_00_00.set_taborder("57");
                p.Panel01_00_00_00.set_flexmainaxisalign("end");
                p.Panel01_00_00_00.set_flexgrow("1");
                p.Panel01_00_00_00.set_horizontalgap("10");
                p.Panel01_00_00_00.move("319","242","305","46",null,null);

                p.Panel00_00_00_00.set_taborder("58");
                p.Panel00_00_00_00.set_tabletemplate("1* / 1* 1*");
                p.Panel00_00_00_00.set_fittocontents("height");
                p.Panel00_00_00_00.set_cssclass("pan_WF_FileTitle");
                p.Panel00_00_00_00.move("20","242","100%","46",null,null);

                p.Grid00_00_00_00.set_taborder("59");
                p.Grid00_00_00_00.set_binddataset("dsFile1");
                p.Grid00_00_00_00.set_autofittype("col");
                p.Grid00_00_00_00.set_cssclass("grd_WF_FileAdd");
                p.Grid00_00_00_00.move("20.00","246","100%","40",null,null);

                p.Panel02_00_00_00_00_00.set_taborder("60");
                p.Panel02_00_00_00_00_00.set_type("vertical");
                p.Panel02_00_00_00_00_00.set_flexgrow("1");
                p.Panel02_00_00_00_00_00.set_verticalgap("4");
                p.Panel02_00_00_00_00_00.set_fittocontents("height");
                p.Panel02_00_00_00_00_00.move("20.00","242","305","111",null,null);

                p.pan04_00_00_00.set_taborder("61");
                p.pan04_00_00_00.set_flexcrossaxiswrapalign("start");
                p.pan04_00_00_00.set_flexwrap("wrap");
                p.pan04_00_00_00.set_fittocontents("height");
                p.pan04_00_00_00.set_spacing("10px 20px 10px 20px");
                p.pan04_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.pan04_00_00_00.set_verticalgap("4");
                p.pan04_00_00_00.move("0","242","100.00%","120",null,null);

                p.staLabel03_00_01_01_00.set_taborder("62");
                p.staLabel03_00_01_01_00.set_text("전기분야 회사 면허");
                p.staLabel03_00_01_01_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00_01_01_00.set_fittocontents("width");
                p.staLabel03_00_01_01_00.set_flexgrow("1");
                p.staLabel03_00_01_01_00.move("20.00","242","305","46",null,null);

                p.Button03_01_00.set_taborder("63");
                p.Button03_01_00.set_text("동의서 양식 다운로드");
                p.Button03_01_00.set_cssclass("btn_WF_Small");
                p.Button03_01_00.set_fittocontents("width");
                p.Button03_01_00.set_visible("false");
                p.Button03_01_00.move("825","211","138","40",null,null);

                p.Button00_01_00.set_taborder("64");
                p.Button00_01_00.set_text("파일선택");
                p.Button00_01_00.set_cssclass("btn_WF_FileUp");
                p.Button00_01_00.set_fittocontents("width");
                p.Button00_01_00.move("319.00","242","116","40",null,null);

                p.Panel01_01_00.set_taborder("65");
                p.Panel01_01_00.set_flexmainaxisalign("end");
                p.Panel01_01_00.set_flexgrow("1");
                p.Panel01_01_00.set_horizontalgap("10");
                p.Panel01_01_00.move("319","242","305","46",null,null);

                p.Panel00_01_00.set_taborder("66");
                p.Panel00_01_00.set_tabletemplate("1* / 1* 1*");
                p.Panel00_01_00.set_fittocontents("height");
                p.Panel00_01_00.set_cssclass("pan_WF_FileTitle");
                p.Panel00_01_00.move("20","242","100%","46",null,null);

                p.Grid00_01_00.set_taborder("67");
                p.Grid00_01_00.set_binddataset("dsFile1");
                p.Grid00_01_00.set_autofittype("col");
                p.Grid00_01_00.set_cssclass("grd_WF_FileAdd");
                p.Grid00_01_00.move("20.00","246","100%","40",null,null);

                p.Panel02_00_00_01_00.set_taborder("68");
                p.Panel02_00_00_01_00.set_type("vertical");
                p.Panel02_00_00_01_00.set_flexgrow("1");
                p.Panel02_00_00_01_00.set_verticalgap("4");
                p.Panel02_00_00_01_00.set_fittocontents("height");
                p.Panel02_00_00_01_00.move("20.00","242","305","111",null,null);

                p.pan04_01_00.set_taborder("69");
                p.pan04_01_00.set_flexcrossaxiswrapalign("start");
                p.pan04_01_00.set_flexwrap("wrap");
                p.pan04_01_00.set_fittocontents("height");
                p.pan04_01_00.set_spacing("10px 20px 10px 20px");
                p.pan04_01_00.set_cssclass("pal_WF_DtlBg");
                p.pan04_01_00.set_verticalgap("4");
                p.pan04_01_00.move("0","242","100.00%","120",null,null);

                p.staLabel03_00_00_00_00.set_taborder("70");
                p.staLabel03_00_00_00_00.set_text("통신분야 회사명");
                p.staLabel03_00_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_00_00_00.move("10","98","100%","46",null,null);

                p.edt00_02_00_00_00.set_taborder("71");
                p.edt00_02_00_00_00.set_displaynulltext("회사명");
                p.edt00_02_00_00_00.move("20.00","288","100%","40",null,null);

                p.Panel02_00_01_00_00.set_taborder("72");
                p.Panel02_00_01_00_00.set_type("vertical");
                p.Panel02_00_01_00_00.set_flexgrow("1");
                p.Panel02_00_01_00_00.move("20.00","242","305","86",null,null);

                p.staLabel03_01_00_00_00.set_taborder("73");
                p.staLabel03_01_00_00_00.set_text("통신담당자");
                p.staLabel03_01_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel03_01_00_00_00.move("970","270","100%","46",null,null);

                p.edt00_03_01_00_00_00.set_taborder("74");
                p.edt00_03_01_00_00_00.set_displaynulltext("성명");
                p.edt00_03_01_00_00_00.move("970","315","100%","40",null,null);

                p.Panel02_01_00_00_00.set_taborder("75");
                p.Panel02_01_00_00_00.set_type("vertical");
                p.Panel02_01_00_00_00.set_flexgrow("1");
                p.Panel02_01_00_00_00.move("970.00","270","305","86",null,null);

                p.pan02_00_00_00.set_taborder("76");
                p.pan02_00_00_00.set_horizontalgap("20");
                p.pan02_00_00_00.set_flexcrossaxiswrapalign("start");
                p.pan02_00_00_00.set_flexwrap("wrap");
                p.pan02_00_00_00.set_fittocontents("height");
                p.pan02_00_00_00.set_verticalgap("0");
                p.pan02_00_00_00.set_spacing("0px 20px 10px 20px");
                p.pan02_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.pan02_00_00_00.move("0","242","100.00%","96",null,null);

                p.staLabel03_00_01_00_00_00_00.set_taborder("77");
                p.staLabel03_00_01_00_00_00_00.set_text("통신담당자의 개인정보수집 및 이용동의서");
                p.staLabel03_00_01_00_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00_01_00_00_00_00.set_fittocontents("width");
                p.staLabel03_00_01_00_00_00_00.set_flexgrow("1");
                p.staLabel03_00_01_00_00_00_00.move("20.00","242","305","46",null,null);

                p.Button03_00_00_00_00.set_taborder("78");
                p.Button03_00_00_00_00.set_text("동의서 양식 다운로드");
                p.Button03_00_00_00_00.set_cssclass("btn_WF_Small");
                p.Button03_00_00_00_00.set_fittocontents("width");
                p.Button03_00_00_00_00.move("825","211","138","40",null,null);

                p.Button00_00_00_00_00.set_taborder("79");
                p.Button00_00_00_00_00.set_text("파일선택");
                p.Button00_00_00_00_00.set_cssclass("btn_WF_FileUp");
                p.Button00_00_00_00_00.set_fittocontents("width");
                p.Button00_00_00_00_00.move("319.00","242","116","40",null,null);

                p.Panel01_00_00_00_00.set_taborder("80");
                p.Panel01_00_00_00_00.set_flexmainaxisalign("end");
                p.Panel01_00_00_00_00.set_flexgrow("1");
                p.Panel01_00_00_00_00.set_horizontalgap("10");
                p.Panel01_00_00_00_00.move("319","242","305","46",null,null);

                p.Panel00_00_00_00_00.set_taborder("81");
                p.Panel00_00_00_00_00.set_tabletemplate("1* / 1* 1*");
                p.Panel00_00_00_00_00.set_fittocontents("height");
                p.Panel00_00_00_00_00.set_cssclass("pan_WF_FileTitle");
                p.Panel00_00_00_00_00.move("20","242","100%","46",null,null);

                p.Grid00_00_00_00_00.set_taborder("82");
                p.Grid00_00_00_00_00.set_binddataset("dsFile1");
                p.Grid00_00_00_00_00.set_autofittype("col");
                p.Grid00_00_00_00_00.set_cssclass("grd_WF_FileAdd");
                p.Grid00_00_00_00_00.move("20.00","246","100%","40",null,null);

                p.Panel02_00_00_00_00_00_00.set_taborder("83");
                p.Panel02_00_00_00_00_00_00.set_type("vertical");
                p.Panel02_00_00_00_00_00_00.set_flexgrow("1");
                p.Panel02_00_00_00_00_00_00.set_verticalgap("4");
                p.Panel02_00_00_00_00_00_00.set_fittocontents("height");
                p.Panel02_00_00_00_00_00_00.move("20.00","242","305","111",null,null);

                p.pan04_00_00_00_00.set_taborder("84");
                p.pan04_00_00_00_00.set_flexcrossaxiswrapalign("start");
                p.pan04_00_00_00_00.set_flexwrap("wrap");
                p.pan04_00_00_00_00.set_fittocontents("height");
                p.pan04_00_00_00_00.set_spacing("10px 20px 10px 20px");
                p.pan04_00_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.pan04_00_00_00_00.set_verticalgap("4");
                p.pan04_00_00_00_00.move("0","242","100.00%","120",null,null);

                p.staLabel03_00_01_01_00_00.set_taborder("85");
                p.staLabel03_00_01_01_00_00.set_text("통신분야 회사 면허");
                p.staLabel03_00_01_01_00_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00_01_01_00_00.set_fittocontents("width");
                p.staLabel03_00_01_01_00_00.set_flexgrow("1");
                p.staLabel03_00_01_01_00_00.move("20.00","242","305","46",null,null);

                p.Button03_01_00_00.set_taborder("86");
                p.Button03_01_00_00.set_text("동의서 양식 다운로드");
                p.Button03_01_00_00.set_cssclass("btn_WF_Small");
                p.Button03_01_00_00.set_fittocontents("width");
                p.Button03_01_00_00.set_visible("false");
                p.Button03_01_00_00.move("825","211","138","40",null,null);

                p.Button00_01_00_00.set_taborder("87");
                p.Button00_01_00_00.set_text("파일선택");
                p.Button00_01_00_00.set_cssclass("btn_WF_FileUp");
                p.Button00_01_00_00.set_fittocontents("width");
                p.Button00_01_00_00.move("319.00","242","116","40",null,null);

                p.Panel01_01_00_00.set_taborder("88");
                p.Panel01_01_00_00.set_flexmainaxisalign("end");
                p.Panel01_01_00_00.set_flexgrow("1");
                p.Panel01_01_00_00.set_horizontalgap("10");
                p.Panel01_01_00_00.move("319","242","305","46",null,null);

                p.Panel00_01_00_00.set_taborder("89");
                p.Panel00_01_00_00.set_tabletemplate("1* / 1* 1*");
                p.Panel00_01_00_00.set_fittocontents("height");
                p.Panel00_01_00_00.set_cssclass("pan_WF_FileTitle");
                p.Panel00_01_00_00.move("20","242","100%","46",null,null);

                p.Grid00_01_00_00.set_taborder("90");
                p.Grid00_01_00_00.set_binddataset("dsFile1");
                p.Grid00_01_00_00.set_autofittype("col");
                p.Grid00_01_00_00.set_cssclass("grd_WF_FileAdd");
                p.Grid00_01_00_00.move("20.00","246","100%","40",null,null);

                p.Panel02_00_00_01_00_00.set_taborder("91");
                p.Panel02_00_00_01_00_00.set_type("vertical");
                p.Panel02_00_00_01_00_00.set_flexgrow("1");
                p.Panel02_00_00_01_00_00.set_verticalgap("4");
                p.Panel02_00_00_01_00_00.set_fittocontents("height");
                p.Panel02_00_00_01_00_00.move("20.00","242","305","111",null,null);

                p.pan04_01_00_00.set_taborder("92");
                p.pan04_01_00_00.set_flexcrossaxiswrapalign("start");
                p.pan04_01_00_00.set_flexwrap("wrap");
                p.pan04_01_00_00.set_fittocontents("height");
                p.pan04_01_00_00.set_spacing("10px 20px 10px 20px");
                p.pan04_01_00_00.set_cssclass("pal_WF_DtlBg");
                p.pan04_01_00_00.set_verticalgap("4");
                p.pan04_01_00_00.move("0","242","100.00%","120",null,null);

                p.staLabel03_00_00_00_01.set_taborder("93");
                p.staLabel03_00_00_00_01.set_text("소방분야 회사명");
                p.staLabel03_00_00_00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_00_00_01.move("10","98","100%","46",null,null);

                p.edt00_02_00_00_01.set_taborder("94");
                p.edt00_02_00_00_01.set_displaynulltext("회사명");
                p.edt00_02_00_00_01.move("20.00","288","100%","40",null,null);

                p.Panel02_00_01_00_01.set_taborder("95");
                p.Panel02_00_01_00_01.set_type("vertical");
                p.Panel02_00_01_00_01.set_flexgrow("1");
                p.Panel02_00_01_00_01.move("20.00","242","305","86",null,null);

                p.staLabel03_01_00_00_01.set_taborder("96");
                p.staLabel03_01_00_00_01.set_text("소방담당자");
                p.staLabel03_01_00_00_01.set_cssclass("sta_WF_Label");
                p.staLabel03_01_00_00_01.move("970","270","100%","46",null,null);

                p.edt00_03_01_00_00_01.set_taborder("97");
                p.edt00_03_01_00_00_01.set_displaynulltext("성명");
                p.edt00_03_01_00_00_01.move("970","315","100%","40",null,null);

                p.Panel02_01_00_00_01.set_taborder("98");
                p.Panel02_01_00_00_01.set_type("vertical");
                p.Panel02_01_00_00_01.set_flexgrow("1");
                p.Panel02_01_00_00_01.move("970.00","270","305","86",null,null);

                p.pan02_00_00_01.set_taborder("99");
                p.pan02_00_00_01.set_horizontalgap("20");
                p.pan02_00_00_01.set_flexcrossaxiswrapalign("start");
                p.pan02_00_00_01.set_flexwrap("wrap");
                p.pan02_00_00_01.set_fittocontents("height");
                p.pan02_00_00_01.set_verticalgap("0");
                p.pan02_00_00_01.set_spacing("0px 20px 10px 20px");
                p.pan02_00_00_01.set_cssclass("pal_WF_DtlBg");
                p.pan02_00_00_01.move("0","242","100.00%","96",null,null);

                p.staLabel03_00_01_00_00_00_00_00.set_taborder("100");
                p.staLabel03_00_01_00_00_00_00_00.set_text("소방담당자의 개인정보수집 및 이용동의서");
                p.staLabel03_00_01_00_00_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00_01_00_00_00_00_00.set_fittocontents("width");
                p.staLabel03_00_01_00_00_00_00_00.set_flexgrow("1");
                p.staLabel03_00_01_00_00_00_00_00.move("20.00","242","305","46",null,null);

                p.Button03_00_00_00_00_00.set_taborder("101");
                p.Button03_00_00_00_00_00.set_text("동의서 양식 다운로드");
                p.Button03_00_00_00_00_00.set_cssclass("btn_WF_Small");
                p.Button03_00_00_00_00_00.set_fittocontents("width");
                p.Button03_00_00_00_00_00.move("825","211","138","40",null,null);

                p.Button00_00_00_00_00_00.set_taborder("102");
                p.Button00_00_00_00_00_00.set_text("파일선택");
                p.Button00_00_00_00_00_00.set_cssclass("btn_WF_FileUp");
                p.Button00_00_00_00_00_00.set_fittocontents("width");
                p.Button00_00_00_00_00_00.move("319.00","242","116","40",null,null);

                p.Panel01_00_00_00_00_00.set_taborder("103");
                p.Panel01_00_00_00_00_00.set_flexmainaxisalign("end");
                p.Panel01_00_00_00_00_00.set_flexgrow("1");
                p.Panel01_00_00_00_00_00.set_horizontalgap("10");
                p.Panel01_00_00_00_00_00.move("319","242","305","46",null,null);

                p.Panel00_00_00_00_00_00.set_taborder("104");
                p.Panel00_00_00_00_00_00.set_tabletemplate("1* / 1* 1*");
                p.Panel00_00_00_00_00_00.set_fittocontents("height");
                p.Panel00_00_00_00_00_00.set_cssclass("pan_WF_FileTitle");
                p.Panel00_00_00_00_00_00.move("20","242","100%","46",null,null);

                p.Grid00_00_00_00_00_00.set_taborder("105");
                p.Grid00_00_00_00_00_00.set_binddataset("dsFile1");
                p.Grid00_00_00_00_00_00.set_autofittype("col");
                p.Grid00_00_00_00_00_00.set_cssclass("grd_WF_FileAdd");
                p.Grid00_00_00_00_00_00.move("20.00","246","100%","40",null,null);

                p.Panel02_00_00_00_00_00_00_00.set_taborder("106");
                p.Panel02_00_00_00_00_00_00_00.set_type("vertical");
                p.Panel02_00_00_00_00_00_00_00.set_flexgrow("1");
                p.Panel02_00_00_00_00_00_00_00.set_verticalgap("4");
                p.Panel02_00_00_00_00_00_00_00.set_fittocontents("height");
                p.Panel02_00_00_00_00_00_00_00.move("20.00","242","305","111",null,null);

                p.pan04_00_00_00_00_00.set_taborder("107");
                p.pan04_00_00_00_00_00.set_flexcrossaxiswrapalign("start");
                p.pan04_00_00_00_00_00.set_flexwrap("wrap");
                p.pan04_00_00_00_00_00.set_fittocontents("height");
                p.pan04_00_00_00_00_00.set_spacing("10px 20px 10px 20px");
                p.pan04_00_00_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.pan04_00_00_00_00_00.set_verticalgap("4");
                p.pan04_00_00_00_00_00.move("0","242","100.00%","120",null,null);

                p.staLabel03_00_01_01_00_00_00.set_taborder("108");
                p.staLabel03_00_01_01_00_00_00.set_text("소방분야 회사 면허");
                p.staLabel03_00_01_01_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00_01_01_00_00_00.set_fittocontents("width");
                p.staLabel03_00_01_01_00_00_00.set_flexgrow("1");
                p.staLabel03_00_01_01_00_00_00.move("20.00","242","305","46",null,null);

                p.Button03_01_00_00_00.set_taborder("109");
                p.Button03_01_00_00_00.set_text("동의서 양식 다운로드");
                p.Button03_01_00_00_00.set_cssclass("btn_WF_Small");
                p.Button03_01_00_00_00.set_fittocontents("width");
                p.Button03_01_00_00_00.set_visible("false");
                p.Button03_01_00_00_00.move("825","211","138","40",null,null);

                p.Button00_01_00_00_00.set_taborder("110");
                p.Button00_01_00_00_00.set_text("파일선택");
                p.Button00_01_00_00_00.set_cssclass("btn_WF_FileUp");
                p.Button00_01_00_00_00.set_fittocontents("width");
                p.Button00_01_00_00_00.move("319.00","242","116","40",null,null);

                p.Panel01_01_00_00_00.set_taborder("111");
                p.Panel01_01_00_00_00.set_flexmainaxisalign("end");
                p.Panel01_01_00_00_00.set_flexgrow("1");
                p.Panel01_01_00_00_00.set_horizontalgap("10");
                p.Panel01_01_00_00_00.move("319","242","305","46",null,null);

                p.Panel00_01_00_00_00.set_taborder("112");
                p.Panel00_01_00_00_00.set_tabletemplate("1* / 1* 1*");
                p.Panel00_01_00_00_00.set_fittocontents("height");
                p.Panel00_01_00_00_00.set_cssclass("pan_WF_FileTitle");
                p.Panel00_01_00_00_00.move("20","242","100%","46",null,null);

                p.Grid00_01_00_00_00.set_taborder("113");
                p.Grid00_01_00_00_00.set_binddataset("dsFile1");
                p.Grid00_01_00_00_00.set_autofittype("col");
                p.Grid00_01_00_00_00.set_cssclass("grd_WF_FileAdd");
                p.Grid00_01_00_00_00.move("20.00","246","100%","40",null,null);

                p.Panel02_00_00_01_00_00_00.set_taborder("114");
                p.Panel02_00_00_01_00_00_00.set_type("vertical");
                p.Panel02_00_00_01_00_00_00.set_flexgrow("1");
                p.Panel02_00_00_01_00_00_00.set_verticalgap("4");
                p.Panel02_00_00_01_00_00_00.set_fittocontents("height");
                p.Panel02_00_00_01_00_00_00.move("20.00","242","305","111",null,null);

                p.pan04_01_00_00_00.set_taborder("115");
                p.pan04_01_00_00_00.set_flexcrossaxiswrapalign("start");
                p.pan04_01_00_00_00.set_flexwrap("wrap");
                p.pan04_01_00_00_00.set_fittocontents("height");
                p.pan04_01_00_00_00.set_spacing("10px 20px 10px 20px");
                p.pan04_01_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.pan04_01_00_00_00.set_verticalgap("4");
                p.pan04_01_00_00_00.move("0","242","100.00%","120",null,null);
            	}
            );
            obj.set_type("vertical");
            this.div00_01_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00_01_00.form
            obj = new Layout("mobile","",0,0,this.div00_01_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.div00_01_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","",1280,1706,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div00_01_00.form.Grid00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.div00_01_00.form.Grid00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.div00_01_00.form.Grid00_00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.div00_01_00.form.Grid00_00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.div00_01_00.form.Grid00_00_00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.div00_01_00.form.Grid00_00_00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.div00_01_00.form.Grid00_01.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.div00_01_00.form.Grid00_01.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.div00_01_00.form.Grid00_00_00_00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.div00_01_00.form.Grid00_00_00_00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.div00_01_00.form.Grid00_01_00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.div00_01_00.form.Grid00_01_00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.div00_01_00.form.Grid00_00_00_00_00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.div00_01_00.form.Grid00_00_00_00_00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.div00_01_00.form.Grid00_01_00_00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.div00_01_00.form.Grid00_01_00_00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.div00_01_00.form.Grid00_00_00_00_00_00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.div00_01_00.form.Grid00_00_00_00_00_00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.div00_01_00.form.Grid00_01_00_00_00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.div00_01_00.form.Grid00_01_00_00_00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
        };
        this.loadIncludeScript("CST002S32.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
