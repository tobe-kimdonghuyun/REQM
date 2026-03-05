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
            this.set_titletext("신청정보");
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
            obj = new Panel("Panel04","0","0",null,"1034","0",null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel03\"/><PanelItem id=\"PanelItem02\" componentid=\"pan00\"/><PanelItem id=\"PanelItem03\" componentid=\"pan01\"/><PanelItem id=\"PanelItem04\" componentid=\"pan02\"/><PanelItem id=\"PanelItem05\" componentid=\"pan03\"/><PanelItem id=\"PanelItem06\" componentid=\"pan04\"/><PanelItem id=\"PanelItem07\" componentid=\"pan08\"/><PanelItem id=\"PanelItem08\" componentid=\"pan02_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","121.00","6","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","165.00","6","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02","1070","0","209","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button01\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel00","20.00","0","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("시설공사명(변경공사명)");
            obj.set_cssclass("sta_WF_Label_E");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","20.00","46","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_01","20.00","0","100%","57",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("예) ~~~회의실 조성공사, ~~~ 환복실 변경공사, ~~~팀 마련공사\r\n(업무용시설의 칸막이, 천장, 바닥, 출입문 등을 설치(변경) 경우)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel01_00","0.00","0","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("설치사유");
            obj.set_cssclass("sta_WF_Label_E");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","0.00","46","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_fittocontents("both");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("3");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">신규조정</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">리노베이션</Col></Row><Row><Col id=\"datacolumn\">레이아웃변경</Col><Col id=\"codecolumn\">2</Col></Row><Row><Col id=\"datacolumn\">피사드변경</Col><Col id=\"codecolumn\">3</Col></Row><Row><Col id=\"datacolumn\">칸막이변경</Col><Col id=\"codecolumn\">4</Col></Row><Row><Col id=\"datacolumn\">장비변경</Col><Col id=\"codecolumn\">5</Col></Row><Row><Col id=\"datacolumn\">간판교체</Col><Col id=\"codecolumn\">6</Col></Row><Row><Col id=\"datacolumn\">기타</Col><Col id=\"codecolumn\">7</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_text("계약선택");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","20.00","0","100%","86",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Radio00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panBlank","20.00","86","1240","1",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00","10.00","10","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("설치사유 기타");
            obj.set_cssclass("sta_WF_Label_E");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_02","10.00","56","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_readonly("false");
            obj.set_value("설치사유 기타");
            obj.set_displaynulltext("설치사유 기타");
            obj.set_text("설치사유 기타");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","30.00","10","1240","86",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00","20.00","20","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("공사(작업)분야");
            obj.set_cssclass("sta_WF_Label_E");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","0.00","0","74","40",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("건축");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","74.00","0","74","40",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("기계");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox02","148.00","0","74","40",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("전기");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox03","222.00","0","74","40",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("통신");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox04","296.00","0","74","40",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("소방");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01","30.00","30","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("임대면적");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02","30.00","76","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00","50.00","30","1240","86",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staLabel03_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Edit02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel05_00_00","0","0","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("착공예정일");
            obj.set_cssclass("sta_WF_Label_E");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","0.00","46","145","40",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Panel("pan04_00","20.00","0","610","86",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Calendar00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel05_01_00","10.00","10","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("준공예정일");
            obj.set_cssclass("sta_WF_Label_E");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","10.00","56","145","40",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Panel("pan05_01","650.00","0","610","86",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staLabel05_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Calendar01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","20.00","0","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("전화번호는 우측상단 \"사용자 이름\" 클릭 후 해당 메뉴에서 등록 및 수정이 가능합니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00","20.00","44","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("시설물설치(변경)관련 작업신고서 신청은 착공·준공 예정일 내 기간만 가능합니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_02","0","95","100.00%","89",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_spacing("0px 20px 0px 20px");
            obj.set_fittocontents("height");
            obj.set_type("vertical");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta00\"/><PanelItem id=\"PanelItem02\" componentid=\"sta00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01","20.00","4","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("업로드하는 파일의 크기는 100mb 이하로 제한됩니다.");
            obj.set_cssclass("sta_WF_Des2");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","20.00","48","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("안전관리계획서는 3억원 이상 또는 3개월 이상 시설공사 추진시 업로드하시기 바랍니다");
            obj.set_cssclass("sta_WF_Des2");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_02_00","0","185","100.00%","89",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_spacing("4px 20px 0px 20px");
            obj.set_fittocontents("height");
            obj.set_type("vertical");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"sta00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_02","390","1110","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("공사개요");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","380","1146","100%","60",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","20.00","66","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem04\" componentid=\"CheckBox01\"/><PanelItem id=\"PanelItem05\" componentid=\"CheckBox00\"/><PanelItem id=\"PanelItem00\" componentid=\"CheckBox02\"/><PanelItem id=\"PanelItem01\" componentid=\"CheckBox03\"/><PanelItem id=\"PanelItem02\" componentid=\"CheckBox04\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan_04_00","40.00","20","1240","86",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staLabel03_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan00","1331","48","100.00%","152",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_fittocontents("height");
            obj.set_spacing("0px 0px 10px 0px ");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle00","0","0","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("신청정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03","1331","0","100.00%","48",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","0.00","0","100.00%","96",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_horizontalgap("20");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_02","0.00","96","100.00%","50",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_verticalgap("0");
            obj.set_fittocontents("height");
            obj.set_spacing("0px 20px 0px 20px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"sta00_00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan01","1331","200","100.00%","93",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"panBlank\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan02","1331","293","100.00%","93",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan03","1350","386","100.00%","93",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan_04_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan04","1350","479","100.00%","93",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan05_00","10","10","100.00%","95",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan04_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan05_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan08","1350","572","100.00%","286",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_fittocontents("height");
            obj.set_spacing("0px 0px 10px 0px ");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"pan05_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel04_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel04_02_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan02_00","1350","858","100.00%","117",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"TextArea00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel05","0.00","Panel04:20",null,"1236","0",null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_01\"/><PanelItem id=\"PanelItem02\" componentid=\"panFile\"/><PanelItem id=\"PanelItem03\" componentid=\"panFile00\"/><PanelItem id=\"PanelItem04\" componentid=\"panFile00_00\"/><PanelItem id=\"PanelItem05\" componentid=\"panFile00_00_00\"/><PanelItem id=\"PanelItem06\" componentid=\"panFile00_00_00_00\"/><PanelItem id=\"PanelItem07\" componentid=\"panFile00_00_00_00_00\"/><PanelItem id=\"PanelItem08\" componentid=\"panFile00_00_00_00_00_00\"/><PanelItem id=\"PanelItem09\" componentid=\"panFile00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem10\" componentid=\"panFile00_00_00_00_00_01\"/><PanelItem id=\"PanelItem11\" componentid=\"panFile00_00_00_00_00_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle","80","1143","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","903","1143","194","50",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Button00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_01","80","1143","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00","1163.00","1090","34","31",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","1150.00","1070","34","33",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_cssclass("btn_WF_ACMinus");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel00_02","0","0","490","46",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("기본설계도면(건축)");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","244.00","0","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("동의서 양식다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file_1","374.00","0","116","40",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.addChild(obj.name, obj);

            obj = new Panel("panBtnFile","490.00","0","490","46",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panTitle","20","10","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","20.00","60","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("panFile","0","0","100%","111",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00","0","0","490","46",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("기본설계도면(기계)");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00","244.00","0","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("동의서 양식다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file_1_00","374.00","0","116","40",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00","490.00","0","490","46",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_00_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panTitle00","20","10","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","20.00","60","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("panFile00","0","111","100%","111",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00_00","0","0","490","46",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("기본설계도면(전기)");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00","244.00","0","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("동의서 양식다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file_1_00_00","374.00","0","116","40",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_00","490.00","0","490","46",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_00_00_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00","20","10","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00","20.00","60","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("panFile00_00","0","222","100%","111",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00_00_00","0","0","490","46",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("기본설계도면(통신)");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00_00","244.00","0","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_text("동의서 양식다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file_1_00_00_00","374.00","0","116","40",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_00_00","490.00","0","490","46",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_00_00_00_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00_00","20","10","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00_00","20.00","60","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("panFile00_00_00","0","333","100%","111",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00_00_00_00","0","0","490","46",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_text("기본설계도면(소방)");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00_00_00","244.00","0","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_text("동의서 양식다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file_1_00_00_00_00","374.00","0","116","40",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_00_00_00","490.00","0","490","46",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00_00_00","20","10","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00_00_00","20.00","60","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("panFile00_00_00_00","0","444","100%","111",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00_00_00_00_00","0","0","490","46",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_text("공정표");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00_00_00_00","244.00","0","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_text("동의서 양식다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file_1_00_00_00_00_00","374.00","0","116","40",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_00_00_00_00","490.00","0","490","46",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1_00_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00_00_00_00","20","10","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00_00_00_00","20.00","60","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("panFile00_00_00_00_00","0","555","100%","111",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00_00_00_00_00_00","0","0","490","46",null,null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_text("폐기물,자재및인력동선계획");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00_00_00_00_00","244.00","0","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_text("동의서 양식다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file_1_00_00_00_00_00_00","374.00","0","116","40",null,null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_00_00_00_00_00","490.00","0","490","46",null,null,null,null,null,null,this);
            obj.set_taborder("102");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_00_00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1_00_00_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00_00_00_00_00","20","10","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("103");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00_00_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00_00_00_00_00","20.00","60","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("104");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("panFile00_00_00_00_00_00","0","666","100%","111",null,null,null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00_00_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00_00_00_00_00_00_00","0","0","490","46",null,null,null,null,null,null,this);
            obj.set_taborder("106");
            obj.set_text("안전관리계획서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00_00_00_00_00_00","244.00","0","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("107");
            obj.set_text("동의서 양식다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file_1_00_00_00_00_00_00_00","374.00","0","116","40",null,null,null,null,null,null,this);
            obj.set_taborder("108");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_00_00_00_00_00_00","490.00","0","490","46",null,null,null,null,null,null,this);
            obj.set_taborder("109");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_00_00_00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1_00_00_00_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00_00_00_00_00_00","20","10","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("110");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00_00_00_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20.00","60","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("111");
            obj.set_text("공사금액 3억원 이상 또는 공사기간 3개월 이상인 경우");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_Des");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00_00_00_00_00_00","20.00","104","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("112");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("panFile00_00_00_00_00_00_00","0","777","100.00%","155",null,null,null,null,null,null,this);
            obj.set_taborder("113");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Static00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00_00_00_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00_00_00_00_00_01","0","0","490","46",null,null,null,null,null,null,this);
            obj.set_taborder("114");
            obj.set_text("기타서류1");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00_00_00_01","244.00","0","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("115");
            obj.set_text("동의서 양식다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file_1_00_00_00_00_00_01","374.00","0","116","40",null,null,null,null,null,null,this);
            obj.set_taborder("116");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_00_00_00_00_01","490.00","0","490","46",null,null,null,null,null,null,this);
            obj.set_taborder("117");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_00_00_00_00_00_00_01\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1_00_00_00_00_00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00_00_00_00_01","20","10","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("118");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00_00_00_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00_00_00_00_00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00_00_00_00_01","20.00","60","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("119");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("panFile00_00_00_00_00_01","0","888","100%","111",null,null,null,null,null,null,this);
            obj.set_taborder("120");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00_00_00_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00_00_00_00_00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00_00_00_00_00_02","0","0","490","46",null,null,null,null,null,null,this);
            obj.set_taborder("121");
            obj.set_text("기타서류2");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00_00_00_02","244.00","0","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("122");
            obj.set_text("동의서 양식다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file_1_00_00_00_00_00_02","374.00","0","116","40",null,null,null,null,null,null,this);
            obj.set_taborder("123");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_00_00_00_00_02","490.00","0","490","46",null,null,null,null,null,null,this);
            obj.set_taborder("124");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_00_00_00_00_00_00_02\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1_00_00_00_00_00_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00_00_00_00_02","20","10","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("125");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00_00_00_00_00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00_00_00_00_00_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00_00_00_00_02","20.00","60","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("126");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("panFile00_00_00_00_00_02","0","999","100%","111",null,null,null,null,null,null,this);
            obj.set_taborder("127");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00_00_00_00_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00_00_00_00_00_02\"/></Contents>");
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
            this.btn_file_1.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.Grid00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.Grid00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.btn_file_1_00.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.Grid00_00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.Grid00_00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.btn_file_1_00_00.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.Grid00_00_00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.Grid00_00_00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.btn_file_1_00_00_00.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.Grid00_00_00_00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.Grid00_00_00_00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.btn_file_1_00_00_00_00.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.Grid00_00_00_00_00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.Grid00_00_00_00_00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.btn_file_1_00_00_00_00_00.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.Grid00_00_00_00_00_00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.Grid00_00_00_00_00_00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.btn_file_1_00_00_00_00_00_00.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.Grid00_00_00_00_00_00_00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.Grid00_00_00_00_00_00_00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.btn_file_1_00_00_00_00_00_00_00.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.Grid00_00_00_00_00_00_00_00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.Grid00_00_00_00_00_00_00_00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.btn_file_1_00_00_00_00_00_01.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.Grid00_00_00_00_00_00_01.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.Grid00_00_00_00_00_00_01.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.btn_file_1_00_00_00_00_00_02.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.Grid00_00_00_00_00_00_02.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.Grid00_00_00_00_00_00_02.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
        };
        this.loadIncludeScript("CST002S02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
