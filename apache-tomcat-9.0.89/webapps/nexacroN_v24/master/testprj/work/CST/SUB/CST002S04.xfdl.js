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
            this.set_titletext("입주자담당자");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,360);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFile1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"fullName\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"fullName\">Iaad010101 [PDF, 328KB]</Col><Col id=\"fileSz\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Panel("Panel00","0","0",null,"450","0",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel03\"/><PanelItem id=\"PanelItem02\" componentid=\"pan00\"/><PanelItem id=\"PanelItem03\" componentid=\"pan02\"/><PanelItem id=\"PanelItem04\" componentid=\"panFile\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","Panel00:20",null,"1800","0",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel03_00\"/><PanelItem id=\"PanelItem02\" componentid=\"sta00\"/><PanelItem id=\"PanelItem05\" componentid=\"pan02_00\"/><PanelItem id=\"PanelItem04\" componentid=\"pan04\"/><PanelItem id=\"PanelItem01\" componentid=\"pan04_00\"/><PanelItem id=\"PanelItem03\" componentid=\"pan02_00_00\"/><PanelItem id=\"PanelItem06\" componentid=\"pan04_00_00\"/><PanelItem id=\"PanelItem07\" componentid=\"pan04_01\"/><PanelItem id=\"PanelItem09\" componentid=\"pan02_00_00_00\"/><PanelItem id=\"PanelItem10\" componentid=\"pan04_00_00_00\"/><PanelItem id=\"PanelItem11\" componentid=\"pan04_01_00\"/><PanelItem id=\"PanelItem12\" componentid=\"pan02_00_00_00_00\"/><PanelItem id=\"PanelItem13\" componentid=\"pan04_00_00_00_00\"/><PanelItem id=\"PanelItem14\" componentid=\"pan04_01_00_00\"/><PanelItem id=\"PanelItem15\" componentid=\"pan02_00_00_01\"/><PanelItem id=\"PanelItem16\" componentid=\"pan04_00_00_00_00_00\"/><PanelItem id=\"PanelItem17\" componentid=\"pan04_01_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle00","0","0","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("입주자 담당자");
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
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button02\"/><PanelItem id=\"PanelItem01\" componentid=\"Button01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03","1335","0","100.00%","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel00","0.00","0","96.88%","46",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("입주자담당자의 동일여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio01","0.00","46","393","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var Radio01_innerdataset = new nexacro.NormalDataset("Radio01_innerdataset", obj);
            Radio01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">신청자정보와 동일</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">신청자정보와 동일하지 않음</Col></Row></Rows>");
            obj.set_innerdataset(Radio01_innerdataset);
            obj.set_text("신청자정보와 동일");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","20.00","0","1240","86",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem02\" componentid=\"Radio01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan00","1335","Panel03:0","100.00%","96",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00","0.00","0","47.66%","46",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_Label_E");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_02","0.00","46","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_displaynulltext("회사명");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","20.00","0","610","86",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_01","10.00","10","47.66%","46",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_Label_E");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_03_01","10.00","56","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_displaynulltext("성명");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_01","650.00","0","610","86",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_03_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan02","1335","pan00:0","100.00%","96",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel00_02","0","0","620","46",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("입주자담당자의 개인정보수집 및 이용동의서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","356.00","0","138","40",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("동의서 양식 다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file_1","504.00","0","116","40",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.addChild(obj.name, obj);

            obj = new Panel("panBtnFile","620.00","0","620","46",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panTitle","20","10","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","20.00","60","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("panFile","1335","pan02:0","100.00%","111",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle","137","547","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("분야별 담당자");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_02","962","547","194","50",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Button01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_00","137","547","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_00","1245.00","475","34","29",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00","1185.00","480","34","30",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("btn_WF_ACMinus");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","110.00","580","100%","52",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("■ 건설산업기본법 시행령 제8조(경미한 건설공사등)에 따라 종합공사 5천만원 미만, 전문공사 1.5천만원 미만의 경우 건설업면허 확인이 불필요하지만 그 외 경우 시공사 면허 보유 여부를 확인합니다");
            obj.set_cssclass("sta_WF_Des004");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00","0.00","0","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("건축분야 회사명");
            obj.set_cssclass("sta_WF_Label_E");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_02_00","0.00","46","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_displaynulltext("회사명");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00","20.00","0","480","86",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_02_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00","10.00","10","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("건축담당자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_03_01_00","10.00","56","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_displaynulltext("성명");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_01_00","520.00","0","480","86",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_03_01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan02_00","0","0","100%","91",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01","0.00","0","490","46",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("건축담당자의 개인정보수집 및 이용동의서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","226.00","0","138","40",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("동의서 양식 다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","374.00","0","116","40",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","490.00","0","490","46",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button03\"/><PanelItem id=\"PanelItem00\" componentid=\"Button00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","0.00","0","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","0.00","50","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00","20.00","10","980","111",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan04","0","91","100%","114",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_00","10.00","10","490","46",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("건축분야 회사 면허");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_00","236.00","10","138","40",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("동의서 양식 다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","384.00","10","116","40",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00","500.00","10","490","46",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button03_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Button00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","10.00","10","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00","10.00","60","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00_00","30.00","20","980","111",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan04_00","0","205","100%","114",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_00","0.00","0","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("기계분야 회사명");
            obj.set_cssclass("sta_WF_Label_E");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_02_00_00","0.00","46","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_displaynulltext("회사명");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_01","30.00","10","480","86",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_02_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00_00","10.00","10","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("기계담당자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_03_01_00_00","10.00","56","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_displaynulltext("성명");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_01_00_00","530.00","10","480","86",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_03_01_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan02_00_00","0","320","100%","91",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_01_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_00_00","0.00","0","490","46",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("기계담당자의 개인정보수집 및 이용동의서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_00_00","226.00","0","138","40",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("동의서 양식 다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00","374.00","0","116","40",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00","490.00","0","490","46",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button03_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Button00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00","0.00","0","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00_00","0.00","50","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00_00_00","30.00","20","980","111",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan04_00_00","0","411","100%","114",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_01","10.00","10","490","46",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("기계분야 회사 면허");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_01","236.00","10","138","40",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("동의서 양식 다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01","384.00","10","116","40",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_01","500.00","10","490","46",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button03_01\"/><PanelItem id=\"PanelItem00\" componentid=\"Button00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_01_00","10.00","10","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_01","10.00","60","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_01","40.00","30","980","111",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan04_01","0","526","100%","114",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_00_00","0.00","0","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("전기분야 회사명");
            obj.set_cssclass("sta_WF_Label_E");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_02_00_00_00","0.00","46","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_displaynulltext("회사명");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_01_00","30.00","10","480","86",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_02_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00_00_00","10.00","10","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("전기담당자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_03_01_00_00_00","10.00","56","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_displaynulltext("성명");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_01_00_00_00","530.00","10","480","86",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_03_01_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan02_00_00_00","0","640","100%","91",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_01_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_00_00_00","0.00","0","490","46",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_text("전기담당자의 개인정보수집 및 이용동의서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_00_00_00","226.00","0","138","40",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_text("동의서 양식 다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00","374.00","0","116","40",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00","490.00","0","490","46",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button03_00_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Button00_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00_00","0.00","0","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00_00_00","0.00","50","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00_00_00_00","30.00","20","980","111",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan04_00_00_00","0","731","100%","114",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_01_00","0.00","0","490","46",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_text("전기분야 회사 면허");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_01_00","226.00","0","138","40",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_text("동의서 양식 다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01_00","374.00","0","116","40",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00","490.00","0","490","46",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button03_01_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Button00_01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_01_00_00","0.00","0","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_01_00","0.00","50","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_01_00","20.00","10","980","111",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_01_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan04_01_00","0","846","100%","114",null,null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_00_00_00","0.00","0","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_text("통신분야 회사명");
            obj.set_cssclass("sta_WF_Label_E");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_02_00_00_00_00","0.00","46","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_displaynulltext("회사명");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_01_00_00","20.00","0","480","86",null,null,null,null,null,null,this);
            obj.set_taborder("102");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_02_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00_00_00_00","10.00","10","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("103");
            obj.set_text("통신담당자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_03_01_00_00_00_00","10.00","56","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("104");
            obj.set_displaynulltext("성명");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_01_00_00_00_00","520.00","0","480","86",null,null,null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_03_01_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan02_00_00_00_00","0","960","100%","91",null,null,null,null,null,null,this);
            obj.set_taborder("106");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_01_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_01_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_00_00_00_00","0.00","0","490","46",null,null,null,null,null,null,this);
            obj.set_taborder("107");
            obj.set_text("통신담당자의 개인정보수집 및 이용동의서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_00_00_00_00","226.00","0","138","40",null,null,null,null,null,null,this);
            obj.set_taborder("108");
            obj.set_text("동의서 양식 다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00_00","374.00","0","116","40",null,null,null,null,null,null,this);
            obj.set_taborder("109");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00_00","490.00","0","490","46",null,null,null,null,null,null,this);
            obj.set_taborder("110");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button03_00_00_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Button00_00_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00_00_00","0.00","0","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("111");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00_00_00_00","0.00","50","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("112");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00_00_00_00_00","30.00","20","980","111",null,null,null,null,null,null,this);
            obj.set_taborder("113");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan04_00_00_00_00","0","1052","100%","114",null,null,null,null,null,null,this);
            obj.set_taborder("114");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_00_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_01_00_00","0.00","0","490","46",null,null,null,null,null,null,this);
            obj.set_taborder("115");
            obj.set_text("통신분야 회사 면허");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_01_00_00","226.00","0","138","40",null,null,null,null,null,null,this);
            obj.set_taborder("116");
            obj.set_text("동의서 양식 다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00","374.00","0","116","40",null,null,null,null,null,null,this);
            obj.set_taborder("117");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00","490.00","0","490","46",null,null,null,null,null,null,this);
            obj.set_taborder("118");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button03_01_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Button00_01_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_01_00_00_00","0.00","0","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("119");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_01_00_00","0.00","50","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("120");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_01_00_00","30.00","20","980","111",null,null,null,null,null,null,this);
            obj.set_taborder("121");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_01_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_01_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan04_01_00_00","0","1166","100%","114",null,null,null,null,null,null,this);
            obj.set_taborder("122");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_01_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_00_01","0.00","0","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("123");
            obj.set_text("소방분야 회사명");
            obj.set_cssclass("sta_WF_Label_E");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_02_00_00_01","0.00","46","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("124");
            obj.set_displaynulltext("회사명");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_01_00_01","30.00","10","480","86",null,null,null,null,null,null,this);
            obj.set_taborder("125");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_02_00_00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00_00_01","10.00","10","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("126");
            obj.set_text("소방담당자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_03_01_00_00_01","10.00","56","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("127");
            obj.set_displaynulltext("성명");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_01_00_00_01","530.00","10","480","86",null,null,null,null,null,null,this);
            obj.set_taborder("128");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_03_01_00_00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan02_00_00_01","0","1280","100%","91",null,null,null,null,null,null,this);
            obj.set_taborder("129");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_01_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_01_00_00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_00_00_00_00_00","0.00","0","490","46",null,null,null,null,null,null,this);
            obj.set_taborder("130");
            obj.set_text("소방담당자의 개인정보수집 및 이용동의서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_00_00_00_00_00","226.00","0","138","40",null,null,null,null,null,null,this);
            obj.set_taborder("131");
            obj.set_text("동의서 양식 다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00_00_00","374.00","0","116","40",null,null,null,null,null,null,this);
            obj.set_taborder("132");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00_00_00","490.00","0","490","46",null,null,null,null,null,null,this);
            obj.set_taborder("133");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button03_00_00_00_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Button00_00_00_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00_00_00_00","0.00","0","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("134");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00_00_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00_00_00_00_00","0.00","50","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("135");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00_00_00_00_00_00","30.00","20","980","111",null,null,null,null,null,null,this);
            obj.set_taborder("136");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00_00_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan04_00_00_00_00_00","0","1372","100%","114",null,null,null,null,null,null,this);
            obj.set_taborder("137");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_00_00_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_01_00_00_00","0.00","0","490","46",null,null,null,null,null,null,this);
            obj.set_taborder("138");
            obj.set_text("소방분야 회사 면허");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_01_00_00_00","226.00","0","138","40",null,null,null,null,null,null,this);
            obj.set_taborder("139");
            obj.set_text("동의서 양식 다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00","374.00","0","116","40",null,null,null,null,null,null,this);
            obj.set_taborder("140");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_00","490.00","0","490","46",null,null,null,null,null,null,this);
            obj.set_taborder("141");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button03_01_00_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Button00_01_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_01_00_00_00_00","0.00","0","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("142");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01_01_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_01_00_00_00","0.00","50","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("143");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_01_00_00_00","30.00","20","980","111",null,null,null,null,null,null,this);
            obj.set_taborder("144");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_01_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_01_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan04_01_00_00_00","0","1486","100%","114",null,null,null,null,null,null,this);
            obj.set_taborder("145");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_01_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel08","0","Panel01:20",null,"500","0",null,null,null,null,null,this);
            obj.set_taborder("219");
            obj.set_fittocontents("height");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel05_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"pan00_02\"/><PanelItem id=\"PanelItem04\" componentid=\"pan02_02\"/><PanelItem id=\"PanelItem05\" componentid=\"pan04_01_00_00_00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04","0","Panel08:20",null,"800","0",null,null,null,null,null,this);
            obj.set_taborder("146");
            obj.set_fittocontents("height");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel06\"/><PanelItem id=\"PanelItem02\" componentid=\"Static00\"/><PanelItem id=\"PanelItem03\" componentid=\"pan00_00\"/><PanelItem id=\"PanelItem04\" componentid=\"pan02_01\"/><PanelItem id=\"PanelItem05\" componentid=\"pan04_01_00_00_00_00\"/><PanelItem id=\"PanelItem06\" componentid=\"pan00_00_00\"/><PanelItem id=\"PanelItem07\" componentid=\"pan02_00_01\"/><PanelItem id=\"PanelItem08\" componentid=\"pan04_01_00_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle01","0","0","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("147");
            obj.set_text("안전관리자");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_01","106.00","6","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("148");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_01","150.00","6","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("149");
            obj.set_cssclass("btn_WF_ACMinus");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel05","825","0","194","50",null,null,null,null,null,null,this);
            obj.set_taborder("150");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button02_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Button01_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel06","0","0","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("151");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel05\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","200.00","2406","100%","57",null,null,null,null,null,null,this);
            obj.set_taborder("152");
            obj.set_text("■ 입주자 시설공사 중 발생하는 안전사고에 대한 모든 관리 책임은 입주자에게 있으며,  입주자는 공사 현장 안전을 확보하기  위하여 최선의 노력을 다하여야 합니다.");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_Des004");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","0.00","0","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("153");
            obj.set_text("분야별담당자와 동일여부");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio01_00","0.00","46","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("154");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var Radio01_00_innerdataset = new nexacro.NormalDataset("Radio01_00_innerdataset", obj);
            Radio01_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">분야별담당자와동일</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">분야별담당자와동일하지않음</Col></Row></Rows>");
            obj.set_innerdataset(Radio01_00_innerdataset);
            obj.set_text("신청자정보와 동일");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01","30.00","10","480","86",null,null,null,null,null,null,this);
            obj.set_taborder("155");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Radio01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00","10.00","10","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("156");
            obj.set_text("동일한분야선택");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","0.00","0","74","40",null,null,null,null,null,null,this);
            obj.set_taborder("157");
            obj.set_text("건축");
            obj.set_fittocontents("width");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","74.00","0","74","40",null,null,null,null,null,null,this);
            obj.set_taborder("158");
            obj.set_text("기계");
            obj.set_fittocontents("width");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox02","148.00","0","74","40",null,null,null,null,null,null,this);
            obj.set_taborder("159");
            obj.set_text("전기");
            obj.set_fittocontents("width");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox03","222.00","0","74","40",null,null,null,null,null,null,this);
            obj.set_taborder("160");
            obj.set_text("통신");
            obj.set_fittocontents("width");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox04","296.00","0","74","40",null,null,null,null,null,null,this);
            obj.set_taborder("161");
            obj.set_text("소방");
            obj.set_fittocontents("width");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_01","10.00","56","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("162");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"CheckBox00\"/><PanelItem id=\"PanelItem01\" componentid=\"CheckBox01\"/><PanelItem id=\"PanelItem02\" componentid=\"CheckBox02\"/><PanelItem id=\"PanelItem03\" componentid=\"CheckBox03\"/><PanelItem id=\"PanelItem04\" componentid=\"CheckBox04\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_01","530.00","10","480.015","86",null,null,null,null,null,null,this);
            obj.set_taborder("163");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel03_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan00_00","1570","1594","100%","97",null,null,null,null,null,null,this);
            obj.set_taborder("164");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_00_00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_02","0.00","0","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("165");
            obj.set_text("안전관리자(주간) 회사명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_02_01","0.00","46","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("166");
            obj.set_displaynulltext("회사명");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_02","30.00","10","480","86",null,null,null,null,null,null,this);
            obj.set_taborder("167");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_02_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_01","10.00","10","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("168");
            obj.set_text("안전관리자(주간) 성명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_03_01_01","10.00","56","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("169");
            obj.set_displaynulltext("성명");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_01_01","530.00","10","480","86",null,null,null,null,null,null,this);
            obj.set_taborder("170");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_03_01_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan02_01","1337","1754","100%","89",null,null,null,null,null,null,this);
            obj.set_taborder("171");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_01_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_01_00_00_00_00","0.00","0","490","46",null,null,null,null,null,null,this);
            obj.set_taborder("172");
            obj.set_text("안전관리자(주간)의 개인정보수집 및 이용동의서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_01_00_00_00_00","226.00","0","138","40",null,null,null,null,null,null,this);
            obj.set_taborder("173");
            obj.set_text("동의서 양식 다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00_00","374.00","0","116","40",null,null,null,null,null,null,this);
            obj.set_taborder("174");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_00_00","490.00","0","490","46",null,null,null,null,null,null,this);
            obj.set_taborder("175");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button03_01_00_00_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Button00_01_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_01_00_00_00_01","0.00","0","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("176");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01_01_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_01_00_00_00_00","0.00","50","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("177");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_01_00_00_00_00","30.00","20","980","111",null,null,null,null,null,null,this);
            obj.set_taborder("178");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_01_00_00_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_01_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan04_01_00_00_00_00","1510","1680","100%","111",null,null,null,null,null,null,this);
            obj.set_taborder("179");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_01_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel00_01","0.00","0","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("180");
            obj.set_text("분야별담당자와 동일여부");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio01_00_00","0.00","46","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("181");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var Radio01_00_00_innerdataset = new nexacro.NormalDataset("Radio01_00_00_innerdataset", obj);
            Radio01_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">분야별담당자와동일</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">분야별담당자와동일하지않음</Col></Row></Rows>");
            obj.set_innerdataset(Radio01_00_00_innerdataset);
            obj.set_text("신청자정보와 동일");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01_00","30.00","10","480","86",null,null,null,null,null,null,this);
            obj.set_taborder("182");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Radio01_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00_00","10.00","10","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("183");
            obj.set_text("동일한분야선택");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox06","10.00","10","74","40",null,null,null,null,null,null,this);
            obj.set_taborder("184");
            obj.set_text("건축");
            obj.set_fittocontents("width");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox05","84.00","10","74","40",null,null,null,null,null,null,this);
            obj.set_taborder("185");
            obj.set_text("기계");
            obj.set_fittocontents("width");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox07","148.00","0","74","40",null,null,null,null,null,null,this);
            obj.set_taborder("186");
            obj.set_text("전기");
            obj.set_fittocontents("width");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox08","222.00","0","74","40",null,null,null,null,null,null,this);
            obj.set_taborder("187");
            obj.set_text("통신");
            obj.set_fittocontents("width");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox09","296.00","0","74","40",null,null,null,null,null,null,this);
            obj.set_taborder("188");
            obj.set_text("소방");
            obj.set_fittocontents("width");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_00","10.00","56","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("189");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"CheckBox06\"/><PanelItem id=\"PanelItem01\" componentid=\"CheckBox05\"/><PanelItem id=\"PanelItem02\" componentid=\"CheckBox07\"/><PanelItem id=\"PanelItem03\" componentid=\"CheckBox08\"/><PanelItem id=\"PanelItem04\" componentid=\"CheckBox09\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00_01","530.00","10","480","86",null,null,null,null,null,null,this);
            obj.set_taborder("190");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel04_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan00_00_00","1569","2089","100%","89",null,null,null,null,null,null,this);
            obj.set_taborder("191");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_00_00_00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_01","0.00","0","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("192");
            obj.set_text("안전관리자(야간) 회사명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_02_00_01","0.00","46","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("193");
            obj.set_displaynulltext("회사명");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_01_01","30.00","10","480","86",null,null,null,null,null,null,this);
            obj.set_taborder("194");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_02_00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00_01","10.00","10","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("195");
            obj.set_text("안전관리자(야간) 성명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_03_01_00_01","10.00","56","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("196");
            obj.set_displaynulltext("성명");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_01_00_01","530.00","10","480","86",null,null,null,null,null,null,this);
            obj.set_taborder("197");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_03_01_00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan02_00_01","1386","2090","100%","89",null,null,null,null,null,null,this);
            obj.set_taborder("198");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_01_00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_01_00_00_00_00_00","0.00","0","490","46",null,null,null,null,null,null,this);
            obj.set_taborder("199");
            obj.set_text("안전관리자(야간)의 개인정보수집 및 이용동의서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_01_00_00_00_00_00","226.00","0","138","40",null,null,null,null,null,null,this);
            obj.set_taborder("200");
            obj.set_text("동의서 양식 다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00_00_00","374.00","0","116","40",null,null,null,null,null,null,this);
            obj.set_taborder("201");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_00_00_00","490.00","0","490","46",null,null,null,null,null,null,this);
            obj.set_taborder("202");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button03_01_00_00_00_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Button00_01_00_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_01_00_00_00_00_00","0.00","0","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("203");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01_01_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01_00_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_01_00_00_00_00_00","0.00","50","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("204");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_01_00_00_00_00_00","30.00","20","980","111",null,null,null,null,null,null,this);
            obj.set_taborder("205");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_01_00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_01_00_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan04_01_00_00_00_00_00","1350","2009","100%","111",null,null,null,null,null,null,this);
            obj.set_taborder("206");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_01_00_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel07","0","Panel04:20",null,"320","0",null,null,null,null,null,this);
            obj.set_taborder("207");
            obj.set_fittocontents("height");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_03\"/><PanelItem id=\"PanelItem03\" componentid=\"pan00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle02","140","3205","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("208");
            obj.set_text("개인정보 수집〮이용 동의");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_02","1215","3205","202","50",null,null,null,null,null,null,this);
            obj.set_taborder("209");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button01_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Button00_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_02","140","3205","100.00%","50",null,null,null,null,null,null,this);
            obj.set_taborder("210");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_02","1130.00","3135","34","26",null,null,null,null,null,null,this);
            obj.set_taborder("211");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_02","1182.00","3125","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("212");
            obj.set_cssclass("btn_WF_ACMinus");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","27.00","3190","100%","150",null,null,null,null,null,null,this);
            obj.set_taborder("213");
            obj.set_value("1. 개인정보의 수집ㆍ이용 목적\n  인계인수 신청 시 작성건의 접수와 처리를 위해 개인정보를 수집목적에 필요한 최소한의 범위 내에서 수집하고 있습니다.\n2. 수집하려는 개인정보의 항목\n  필수항목 : 총괄책임자 및 시설관리책임자 성명, 총괄책임자 및 시설관리책임자 휴대폰번호\n3. 개인정보의 보유 및 이용 기간\n  계약종료 후 3년, 회원탈퇴 시까지\n4. 동의를 거부할 권리와 거부에 따른 불이익 내용\n  귀하는 개인정보 수집에 거부할 권리가 있으며, 필수항목 수집을 거부할 경우 인계인수 승인요청서 작성건의 신청을 할 수 없습니다.");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_03","7","3180","100.00%","160",null,null,null,null,null,null,this);
            obj.set_taborder("214");
            obj.set_spacing("10px 20px 0px 20px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"TextArea00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel00_03","10.00","10","96.88%","46",null,null,null,null,null,null,this);
            obj.set_taborder("215");
            obj.set_text("개인정보 수집(필수) 동의여부");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio01_01","0.00","46","96.88%","40",null,null,null,null,null,null,this);
            obj.set_taborder("216");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var Radio01_01_innerdataset = new nexacro.NormalDataset("Radio01_01_innerdataset", obj);
            Radio01_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">동의함</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">동의하지 않음</Col></Row></Rows>");
            obj.set_innerdataset(Radio01_01_innerdataset);
            obj.set_text("신청자정보와 동일");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_02","30.00","10","100%","86",null,null,null,null,null,null,this);
            obj.set_taborder("217");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_03\"/><PanelItem id=\"PanelItem02\" componentid=\"Radio01_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan00_01","1410","2610","100.00%","96",null,null,null,null,null,null,this);
            obj.set_taborder("218");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle03","80","2417","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("220");
            obj.set_text("현장대리인(시공사)");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_01","905","2417","194","50",null,null,null,null,null,null,this);
            obj.set_taborder("221");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button02_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Button01_03\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel05_00","80","2417","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("222");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle03\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel04_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_02","1185.00","2292","34","28",null,null,null,null,null,null,this);
            obj.set_taborder("223");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_03","1125.00","2305","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("224");
            obj.set_cssclass("btn_WF_ACMinus");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","150.00","2360","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("225");
            obj.set_text("■ 현장대리인은 “상기＂분야별 담당자 중 1인으로 선정합니다.");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_Des004");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel00_04","0.00","0","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("226");
            obj.set_text("담당자와 동일여부");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio01_02","0.00","46","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("227");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var Radio01_02_innerdataset = new nexacro.NormalDataset("Radio01_02_innerdataset", obj);
            Radio01_02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">분야별담당자와동일</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">분야별담당자와동일하지않음</Col></Row></Rows>");
            obj.set_innerdataset(Radio01_02_innerdataset);
            obj.set_text("신청자정보와 동일");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_03","20.00","0","480","86",null,null,null,null,null,null,this);
            obj.set_taborder("228");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_04\"/><PanelItem id=\"PanelItem02\" componentid=\"Radio01_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_01","10.00","10","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("229");
            obj.set_text("동일한분야선택");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01_00","10.00","10","74","40",null,null,null,null,null,null,this);
            obj.set_taborder("230");
            obj.set_text("건축");
            obj.set_fittocontents("width");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00","84.00","10","74","40",null,null,null,null,null,null,this);
            obj.set_taborder("231");
            obj.set_text("기계");
            obj.set_fittocontents("width");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox02_00","158.00","10","74","40",null,null,null,null,null,null,this);
            obj.set_taborder("232");
            obj.set_text("전기");
            obj.set_fittocontents("width");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox03_00","232.00","10","74","40",null,null,null,null,null,null,this);
            obj.set_taborder("233");
            obj.set_text("통신");
            obj.set_fittocontents("width");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox04_00","306.00","10","74","40",null,null,null,null,null,null,this);
            obj.set_taborder("234");
            obj.set_text("소방");
            obj.set_fittocontents("width");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_02","10.00","56","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("235");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"CheckBox01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"CheckBox00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"CheckBox02_00\"/><PanelItem id=\"PanelItem03\" componentid=\"CheckBox03_00\"/><PanelItem id=\"PanelItem04\" componentid=\"CheckBox04_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_02","520.00","0","480","86",null,null,null,null,null,null,this);
            obj.set_taborder("236");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel03_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan00_02","0","40","100%","97",null,null,null,null,null,null,this);
            obj.set_taborder("237");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_03\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_00_00_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_03","0.00","0","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("238");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_02_02","0.00","46","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("239");
            obj.set_displaynulltext("회사명");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_03","30.00","10","480","86",null,null,null,null,null,null,this);
            obj.set_taborder("240");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_03\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_02_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_02","10.00","10","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("241");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_03_01_02","10.00","56","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("242");
            obj.set_displaynulltext("성명");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_01_02","530.00","10","480","86",null,null,null,null,null,null,this);
            obj.set_taborder("243");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_02\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_03_01_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan02_02","0","137","100%","96",null,null,null,null,null,null,this);
            obj.set_taborder("244");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_03\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_01_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_01_00_00_00_01","0.00","0","490","46",null,null,null,null,null,null,this);
            obj.set_taborder("245");
            obj.set_text("현장대리인의 개인정보수집 및 이용동의서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_01_00_00_00_01","226.00","0","138","40",null,null,null,null,null,null,this);
            obj.set_taborder("246");
            obj.set_text("동의서 양식 다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00_01","374.00","0","116","40",null,null,null,null,null,null,this);
            obj.set_taborder("247");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_00_01","490.00","0","490","46",null,null,null,null,null,null,this);
            obj.set_taborder("248");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button03_01_00_00_00_01\"/><PanelItem id=\"PanelItem00\" componentid=\"Button00_01_00_00_00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_01_00_00_00_02","0.00","0","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("249");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01_01_00_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01_00_00_00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_01_00_00_00_01","0.00","50","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("250");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_01_00_00_00_01","20.00","10","980","111",null,null,null,null,null,null,this);
            obj.set_taborder("251");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_01_00_00_00_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_01_00_00_00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan04_01_00_00_00_01","1400","1546","100%","120",null,null,null,null,null,null,this);
            obj.set_taborder("252");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_01_00_00_00_01\"/></Contents>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,360,this,function(p){});
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
            this.btn_file_1.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.Grid00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.Grid00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.Grid00_00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.Grid00_00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.Grid00_00_00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.Grid00_00_00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.Grid00_00_00_00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.Grid00_00_00_00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.Grid00_01.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.Grid00_01.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.Grid00_00_00_00_00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.Grid00_00_00_00_00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.Grid00_01_00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.Grid00_01_00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.Grid00_00_00_00_00_00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.Grid00_00_00_00_00_00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.Grid00_01_00_00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.Grid00_01_00_00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.Grid00_00_00_00_00_00_00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.Grid00_00_00_00_00_00_00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.Grid00_01_00_00_00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.Grid00_01_00_00_00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.Grid00_01_00_00_00_00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.Grid00_01_00_00_00_00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.Grid00_01_00_00_00_00_00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.Grid00_01_00_00_00_00_00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.Grid00_01_00_00_00_01.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.Grid00_01_00_00_00_01.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
        };
        this.loadIncludeScript("CST002S04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
