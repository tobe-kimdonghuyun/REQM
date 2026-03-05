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
            this.set_titletext("안전관리자");
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
            obj.set_text("안전관리자");
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

            obj = new Panel("Panel05","1077","0","202","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button02\"/><PanelItem id=\"PanelItem01\" componentid=\"Button01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel06","0","0","100.00%","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel05\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0.00","0","100.00%","57",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("■ 입주자 시설공사 중 발생하는 안전사고에 대한 모든 관리 책임은 입주자에게 있으며,  입주자는 공사 현장 안전을 확보하기  위하여 최선의 노력을 다하여야 합니다.");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_Des004");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02","0","Panel06:0","100.00%","52",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel00","0.00","0","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("분야별담당자와 동일여부");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio01","0.00","46","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var Radio01_innerdataset = new nexacro.NormalDataset("Radio01_innerdataset", obj);
            Radio01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">분야별담당자와동일</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">분야별담당자와동일하지않음</Col></Row></Rows>");
            obj.set_innerdataset(Radio01_innerdataset);
            obj.set_text("신청자정보와 동일");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","20.00","0","610","86",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem02\" componentid=\"Radio01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","10.00","10","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("동일한분야선택");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","0.00","0","74","40",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("건축");
            obj.set_fittocontents("width");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","74.00","0","74","40",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("기계");
            obj.set_fittocontents("width");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox02","148.00","0","74","40",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("전기");
            obj.set_fittocontents("width");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox03","222.00","0","74","40",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("통신");
            obj.set_fittocontents("width");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox04","296.00","0","74","40",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("소방");
            obj.set_fittocontents("width");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03","10.00","56","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"CheckBox00\"/><PanelItem id=\"PanelItem01\" componentid=\"CheckBox01\"/><PanelItem id=\"PanelItem02\" componentid=\"CheckBox02\"/><PanelItem id=\"PanelItem03\" componentid=\"CheckBox03\"/><PanelItem id=\"PanelItem04\" componentid=\"CheckBox04\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","650.00","0","610","86",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel03\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan00","0","Panel02:0","100.00%","89",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00","20.00","20","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("안전관리자(주간) 회사명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_02","20.00","66","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_displaynulltext("회사명");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","30.00","10","610","86",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_01","30.00","30","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("안전관리자(주간) 성명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_03_01","30.00","76","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_displaynulltext("성명");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_01","660.00","10","610","86",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_03_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan02","0","pan00:0","100.00%","89",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_01_00_00_00","0.00","0","620","46",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("안전관리자(주간)의 개인정보수집 및 이용동의서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_01_00_00_00","356.00","0","138","40",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("동의서 양식 다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00","504.00","0","116","40",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_00","620.00","0","620","46",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button03_01_00_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Button00_01_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_01_00_00_00","0.00","0","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01_01_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_01_00_00_00","0.00","50","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_01_00_00_00","20.00","10","1240","111",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_01_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_01_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan04_01_00_00_00","0","pan02:0","100.00%","111",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_01_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel00_01","40.00","40","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("분야별담당자와 동일여부");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio01_00","40.00","86","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("35");
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

            obj = new Panel("Panel00_00_01","40.00","20","610","86",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Radio01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00","50.00","50","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("동일한분야선택");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox06","10.00","10","74","40",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("건축");
            obj.set_fittocontents("width");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox05","84.00","10","74","40",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("기계");
            obj.set_fittocontents("width");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox07","158.00","10","74","40",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("전기");
            obj.set_fittocontents("width");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox08","232.00","10","74","40",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("통신");
            obj.set_fittocontents("width");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox09","306.00","10","74","40",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("소방");
            obj.set_fittocontents("width");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04","50.00","96","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"CheckBox06\"/><PanelItem id=\"PanelItem01\" componentid=\"CheckBox05\"/><PanelItem id=\"PanelItem02\" componentid=\"CheckBox07\"/><PanelItem id=\"PanelItem03\" componentid=\"CheckBox08\"/><PanelItem id=\"PanelItem04\" componentid=\"CheckBox09\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00","670.00","20","610","86",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel04\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan00_00","0","pan04_01_00_00_00:0","100.00%","89",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00","60.00","60","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("안전관리자(야간) 회사명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_02_00","60.00","106","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_displaynulltext("회사명");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_01","50.00","30","610","86",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_02_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00","70.00","70","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("안전관리자(야간) 성명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_03_01_00","70.00","116","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_displaynulltext("성명");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_01_00","680.00","30","610","86",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_03_01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan02_00","0","pan00_00:0","100.00%","89",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_01_00_00_00_00","10.00","10","620","46",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("안전관리자(야간)의 개인정보수집 및 이용동의서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_01_00_00_00_00","366.00","10","138","40",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("동의서 양식 다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00_00","514.00","10","116","40",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_00_00","630.00","10","620","46",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button03_01_00_00_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Button00_01_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_01_00_00_00_00","10.00","10","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01_01_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_01_00_00_00_00","10.00","60","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_01_00_00_00_00","30.00","20","1240","111",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_01_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_01_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan04_01_00_00_00_00","0","pan02_00:0","100.00%","111",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_01_00_00_00_00\"/></Contents>");
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
            this.Grid00_01_00_00_00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.Grid00_01_00_00_00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.Grid00_01_00_00_00_00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.Grid00_01_00_00_00_00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
        };
        this.loadIncludeScript("CST002S07.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
