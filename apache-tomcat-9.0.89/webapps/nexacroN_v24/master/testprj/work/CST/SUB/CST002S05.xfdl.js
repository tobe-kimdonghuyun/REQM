(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST002M00_01");
            this.set_titletext("분야별 담당자");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFile1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"fullName\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"fullName\">Iaad010101 [PDF, 328KB]</Col><Col id=\"fileSz\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staSubTitle00","0","0","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("분야별 담당자");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","114.00","6","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","158.00","6","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02","1077","0","202","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button02\"/><PanelItem id=\"PanelItem01\" componentid=\"Button01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03","0","0","100.00%","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","Panel03:0","100.00%","51",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("■ 건설산업기본법 시행령 제8조(경미한 건설공사등)에 따라 종합공사 5천만원 미만, 전문공사 1.5천만원 미만의 경우 건설업면허 확인이 불필요하지만 그 외 경우 시공사 면허 보유 여부를 확인합니다");
            obj.set_cssclass("sta_WF_Des004");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00","0.00","0","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("건축분야 회사명");
            obj.set_cssclass("sta_WF_Label_E");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_02","0.00","46","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_displaynulltext("회사명");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","20.00","0","610","86",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_01","10.00","10","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("건축담당자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_03_01","10.00","56","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_displaynulltext("성명");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_01","650.00","0","610","86",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_03_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan02","0","sta00:0","100.00%","86",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01","0.00","0","620","46",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("건축담당자의 개인정보수집 및 이용동의서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","356.00","0","138","40",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("동의서 양식 다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","504.00","0","116","40",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","620.00","0","620","46",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button03\"/><PanelItem id=\"PanelItem00\" componentid=\"Button00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","0.00","0","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","0.00","50","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00","20.00","10","1240","111",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan04","0","pan02:0","100.00%","107",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_00","0.00","0","620","46",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("건축분야 회사 면허");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_00","356.00","0","138","40",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("동의서 양식 다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","504.00","0","116","40",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","620.00","0","620","46",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button03_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Button00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","0.00","0","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","0.00","50","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00","30.00","20","1240","111",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan04_00","0","pan04:0","100.00%","107",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00","0.00","0","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("기계분야 회사명");
            obj.set_cssclass("sta_WF_Label_E");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_02_00","0.00","46","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_displaynulltext("회사명");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_01","30.00","10","610","86",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_02_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00","10.00","10","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("기계담당자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_03_01_00","10.00","56","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_displaynulltext("성명");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_01_00","660.00","10","610","86",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_03_01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan02_00","0","pan04_00:0","100.00%","86",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_00_00","0.00","0","620","46",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("기계담당자의 개인정보수집 및 이용동의서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_00_00","356.00","0","138","40",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("동의서 양식 다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","504.00","0","116","40",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00","620.00","0","620","46",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button03_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Button00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","0.00","0","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00","0.00","50","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00_00","30.00","20","1240","111",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan04_00_00","0","pan02_00:0","100.00%","107",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_01","0.00","0","620","46",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("기계분야 회사 면허");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_01","356.00","0","138","40",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("동의서 양식 다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01","504.00","0","116","40",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_01","620.00","0","620","46",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button03_01\"/><PanelItem id=\"PanelItem00\" componentid=\"Button00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","0.00","0","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_01","0.00","50","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_01","30.00","20","1240","111",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan04_01","0","pan04_00_00:0","100.00%","107",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_00","0.00","0","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("전기분야 회사명");
            obj.set_cssclass("sta_WF_Label_E");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_02_00_00","0.00","46","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_displaynulltext("회사명");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_01_00","30.00","10","610","86",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_02_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00_00","10.00","10","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("전기담당자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_03_01_00_00","10.00","56","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_displaynulltext("성명");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_01_00_00","660.00","10","610","86",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_03_01_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan02_00_00","0","pan04_01:0","100.00%","86",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_01_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_00_00_00","0.00","0","620","46",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("전기담당자의 개인정보수집 및 이용동의서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_00_00_00","356.00","0","138","40",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("동의서 양식 다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00","504.00","0","116","40",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00","620.00","0","620","46",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button03_00_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Button00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00","0.00","0","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00_00","0.00","50","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00_00_00","30.00","20","1240","111",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan04_00_00_00","0","pan02_00_00:0","100.00%","107",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_01_00","10.00","10","620","46",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("전기분야 회사 면허");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_01_00","366.00","10","138","40",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("동의서 양식 다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01_00","514.00","10","116","40",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00","630.00","10","620","46",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button03_01_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Button00_01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_01_00","10.00","10","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_01_00","10.00","60","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_01_00","40.00","30","1240","111",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan04_01_00","0","pan04_00_00_00:0","100.00%","107",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_00_00","0.00","0","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("통신분야 회사명");
            obj.set_cssclass("sta_WF_Label_E");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_02_00_00_00","0.00","46","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_displaynulltext("회사명");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_01_00_00","30.00","10","610","86",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_02_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00_00_00","10.00","10","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("통신담당자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_03_01_00_00_00","10.00","56","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_displaynulltext("성명");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_01_00_00_00","660.00","10","610","86",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_03_01_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan02_00_00_00","0","pan04_01_00:0","100.00%","86",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_01_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_01_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_00_00_00_00","20.00","20","620","46",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_text("통신담당자의 개인정보수집 및 이용동의서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_00_00_00_00","376.00","20","138","40",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_text("동의서 양식 다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00","524.00","20","116","40",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00","640.00","20","620","46",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button03_00_00_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Button00_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00_00","20.00","20","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00_00_00","20.00","70","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00_00_00_00","50.00","40","1240","111",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan04_00_00_00_00","0","pan02_00_00_00:0","100.00%","107",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_01_00_00","30.00","30","620","46",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_text("통신분야 회사 면허");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_01_00_00","386.00","30","138","40",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_text("동의서 양식 다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00","534.00","30","116","40",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00","650.00","30","620","46",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button03_01_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Button00_01_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_01_00_00","30.00","30","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_01_00_00","30.00","80","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_01_00_00","60.00","50","1240","111",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_01_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_01_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan04_01_00_00","0","pan04_00_00_00_00:0","100.00%","107",null,null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_01_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_00_01","20.00","20","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_text("소방분야 회사명");
            obj.set_cssclass("sta_WF_Label_E");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_02_00_00_01","20.00","66","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_displaynulltext("회사명");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_01_00_01","40.00","20","610","86",null,null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_02_00_00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00_00_01","30.00","30","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_text("소방담당자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_03_01_00_00_01","30.00","76","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("102");
            obj.set_displaynulltext("성명");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_01_00_00_01","670.00","20","610","86",null,null,null,null,null,null,this);
            obj.set_taborder("103");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_03_01_00_00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan02_00_00_01","0","pan04_01_00_00:0","100.00%","86",null,null,null,null,null,null,this);
            obj.set_taborder("104");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_01_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_01_00_00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_00_00_00_00_00","40.00","40","620","46",null,null,null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_text("소방담당자의 개인정보수집 및 이용동의서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_00_00_00_00_00","396.00","40","138","40",null,null,null,null,null,null,this);
            obj.set_taborder("106");
            obj.set_text("동의서 양식 다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00_00","544.00","40","116","40",null,null,null,null,null,null,this);
            obj.set_taborder("107");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00_00","660.00","40","620","46",null,null,null,null,null,null,this);
            obj.set_taborder("108");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button03_00_00_00_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Button00_00_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00_00_00","40.00","40","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("109");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00_00_00_00","40.00","90","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("110");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00_00_00_00_00","70.00","60","1240","111",null,null,null,null,null,null,this);
            obj.set_taborder("111");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan04_00_00_00_00_00","0","pan02_00_00_01:0","100.00%","107",null,null,null,null,null,null,this);
            obj.set_taborder("112");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_00_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_01_00_00_00","50.00","50","620","46",null,null,null,null,null,null,this);
            obj.set_taborder("113");
            obj.set_text("소방분야 회사 면허");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_01_00_00_00","406.00","50","138","40",null,null,null,null,null,null,this);
            obj.set_taborder("114");
            obj.set_text("동의서 양식 다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00","554.00","50","116","40",null,null,null,null,null,null,this);
            obj.set_taborder("115");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_00","670.00","50","620","46",null,null,null,null,null,null,this);
            obj.set_taborder("116");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button03_01_00_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Button00_01_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_01_00_00_00","50.00","50","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("117");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01_01_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_01_00_00_00","50.00","100","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("118");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_01_00_00_00","80.00","70","1240","111",null,null,null,null,null,null,this);
            obj.set_taborder("119");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_01_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_01_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan04_01_00_00_00","0","pan04_00_00_00_00_00:0","100.00%","107",null,null,null,null,null,null,this);
            obj.set_taborder("120");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_01_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
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
            this.Grid00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.Grid00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.Grid00_00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.Grid00_00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.Grid00_00_00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.Grid00_00_00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.Grid00_01.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.Grid00_01.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.Grid00_00_00_00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.Grid00_00_00_00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.Grid00_01_00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.Grid00_01_00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.Grid00_00_00_00_00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.Grid00_00_00_00_00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.Grid00_01_00_00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.Grid00_01_00_00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.Grid00_00_00_00_00_00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.Grid00_00_00_00_00_00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.Grid00_01_00_00_00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.Grid00_01_00_00_00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
        };
        this.loadIncludeScript("CST002S05.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
