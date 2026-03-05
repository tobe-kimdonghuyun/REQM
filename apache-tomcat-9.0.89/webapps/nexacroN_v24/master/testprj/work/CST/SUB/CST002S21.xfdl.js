(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST002S21");
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
            obj = new Div("div00_00","0","0","100.00%","982",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("신청정보");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","5","43","100.00%","96",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("38");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_horizontalgap("20");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit00\"/></Contents>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("pan00","0","50","100.00%","157",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("0");
            obj.set_fittocontents("height");
            obj.set_spacing("0px 0px 10px 0px ");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_02\"/></Contents>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("staLabel00","10","98","100%","46",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("1");
            obj.set_text("시설공사명(변경공사명)");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("staLabel01_00","10","98","100%","46",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("2");
            obj.set_text("설치사유");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","10.00","98","100%","86",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Radio00\"/></Contents>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("panBlank","10.00","98","305","1",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("pan01","0","60","100.00%","96",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("5");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"panBlank\"/></Contents>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Radio("Radio00","127","203","100%","40",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("10");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var div00_00_form_Radio00_innerdataset = new nexacro.NormalDataset("div00_00_form_Radio00_innerdataset", obj);
            div00_00_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">신규조정</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">리노베이션</Col></Row><Row><Col id=\"datacolumn\">레이아웃변경</Col><Col id=\"codecolumn\">2</Col></Row><Row><Col id=\"datacolumn\">피사드변경</Col><Col id=\"codecolumn\">3</Col></Row><Row><Col id=\"datacolumn\">칸막이변경</Col><Col id=\"codecolumn\">4</Col></Row><Row><Col id=\"datacolumn\">장비변경</Col><Col id=\"codecolumn\">5</Col></Row><Row><Col id=\"datacolumn\">간판교체</Col><Col id=\"codecolumn\">6</Col></Row><Row><Col id=\"datacolumn\">기타</Col><Col id=\"codecolumn\">7</Col></Row></Rows>");
            obj.set_innerdataset(div00_00_form_Radio00_innerdataset);
            obj.set_text("계약선택");
            obj.set_value("0");
            obj.set_index("0");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00","10","98","100%","46",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("6");
            obj.set_text("설치사유 기타");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_00.addChild(obj.name, obj);

            obj = new Edit("edt00_02","20.00","288","100%","40",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("7");
            obj.set_readonly("false");
            obj.set_value("설치사유 기타");
            obj.set_displaynulltext("설치사유 기타");
            obj.set_text("설치사유 기타");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","20.00","242","305","86",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_02\"/></Contents>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("pan02","0","242","100.00%","96",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("9");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00\"/></Contents>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00","10","98","100%","46",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("11");
            obj.set_text("공사(작업)분야");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("pan_04_00","20.00","242","305","86",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("12");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/></Contents>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("pan03","0","242","100.00%","96",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("13");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan_04_00\"/></Contents>");
            this.div00_00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox04","588","477","74","40",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("44");
            obj.set_text("소방");
            obj.set_fittocontents("width");
            this.div00_00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox03","413","475","74","40",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("43");
            obj.set_text("통신");
            obj.set_fittocontents("width");
            this.div00_00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox02","278","475","74","40",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("42");
            obj.set_text("전기");
            obj.set_fittocontents("width");
            this.div00_00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","45","470","74","40",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("39");
            obj.set_text("기계");
            obj.set_fittocontents("width");
            this.div00_00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","134","480","74","40",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("40");
            obj.set_text("건축");
            obj.set_fittocontents("width");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel01","20","477","100%","40",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("41");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"CheckBox01\"/><PanelItem id=\"PanelItem01\" componentid=\"CheckBox00\"/><PanelItem id=\"PanelItem02\" componentid=\"CheckBox02\"/><PanelItem id=\"PanelItem03\" componentid=\"CheckBox03\"/><PanelItem id=\"PanelItem04\" componentid=\"CheckBox04\"/></Contents>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01","10","98","100%","46",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("14");
            obj.set_text("임대면적");
            obj.set_cssclass("sta_WF_Label");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00","20.00","242","305","86",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("15");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit02\"/></Contents>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("pan04","0","242","100.00%","96",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("16");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00\"/></Contents>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit02","90","539","100%","40",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("25");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("staLabel05_00_00","10","98","100%","46",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("17");
            obj.set_text("착공예정일");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("pan04_00","10.00","98","305","86",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("18");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Calendar00\"/></Contents>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("staLabel05_01_00","10","98","100%","46",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("19");
            obj.set_text("준공예정일");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("pan05_01","10.00","98","305","86",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("20");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Calendar01\"/></Contents>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("pan05_00","0","60","100.00%","96",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("21");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan04_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan05_01\"/></Contents>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("pan08","0","570","100.00%","295",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("22");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_fittocontents("height");
            obj.set_spacing("0px 0px 10px 0px ");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan05_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel04_02\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel04_02_00\"/></Contents>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","570","621","145","40",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("27");
            obj.set_dateformat("yyyy-MM-dd");
            this.div00_00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","67","623","145","40",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("26");
            obj.set_dateformat("yyyy-MM-dd");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("sta00_00_01","60.00","145","100%","57",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("23");
            obj.set_text("예) ~~~회의실 조성공사, ~~~ 환복실 변경공사, ~~~팀 마련공사\r\n(업무용시설의 칸막이, 천장, 바닥, 출입문 등을 설치(변경) 경우)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel00_02","60.00","107","100.00%","50",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("24");
            obj.set_verticalgap("0");
            obj.set_fittocontents("height");
            obj.set_spacing("0px 20px 0px 20px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"sta00_00_01\"/></Contents>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("sta00","20","20","100%","40",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("28");
            obj.set_text("전화번호는 우측상단 \"사용자 이름\" 클릭 후 해당 메뉴에서 등록 및 수정이 가능합니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel04_02","0","685","100.00%","90",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("29");
            obj.set_spacing("0px 20px 0px 20px");
            obj.set_fittocontents("height");
            obj.set_type("vertical");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta00\"/><PanelItem id=\"PanelItem02\" componentid=\"sta00_00\"/></Contents>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("sta00_00","20","20","100.00%","40",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("30");
            obj.set_text("시설물설치(변경)관련 작업신고서 신청은 착공·준공 예정일 내 기간만 가능합니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("sta00_01","20","20","100%","40",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("31");
            obj.set_text("업로드하는 파일의 크기는 100mb 이하로 제한됩니다.");
            obj.set_cssclass("sta_WF_Des2");
            obj.set_fittocontents("height");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","20","20","100.00%","40",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("32");
            obj.set_text("안전관리계획서는 3억원 이상 또는 3개월 이상 시설공사 추진시 업로드하시기 바랍니다");
            obj.set_cssclass("sta_WF_Des2");
            obj.set_fittocontents("height");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel04_02_00","0","685","100.00%","90",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("33");
            obj.set_spacing("4px 20px 0px 20px");
            obj.set_fittocontents("height");
            obj.set_type("vertical");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"sta00_00_00\"/></Contents>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_02","10","98","100%","46",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("34");
            obj.set_text("공사개요");
            obj.set_cssclass("sta_WF_Label");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_01","20.00","0","100%","136",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("35");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"TextArea00\"/></Contents>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("pan02_00","0","885","100.00%","146",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("36");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_01\"/></Contents>");
            this.div00_00.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","0","46","100%","80",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("37");
            this.div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00","78","112","100%","40",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("45");
            this.div00_00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00_00.form
            obj = new Layout("default","",0,0,this.div00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.set_taborder("38");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_spacing("0px 20px 10px 20px");
                p.Panel00.set_horizontalgap("20");
                p.Panel00.set_flexgrow("1");
                p.Panel00.set_fittocontents("height");
                p.Panel00.move("5","43","100.00%","96",null,null);

                p.pan00.set_taborder("0");
                p.pan00.set_fittocontents("height");
                p.pan00.set_spacing("0px 0px 10px 0px ");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.set_type("horizontal");
                p.pan00.set_flexwrap("wrap");
                p.pan00.move("0","50","100.00%","157",null,null);

                p.staLabel00.set_taborder("1");
                p.staLabel00.set_text("시설공사명(변경공사명)");
                p.staLabel00.set_cssclass("sta_WF_Label_E");
                p.staLabel00.move("10","98","100%","46",null,null);

                p.staLabel01_00.set_taborder("2");
                p.staLabel01_00.set_text("설치사유");
                p.staLabel01_00.set_cssclass("sta_WF_Label_E");
                p.staLabel01_00.move("10","98","100%","46",null,null);

                p.Panel01_00.set_taborder("3");
                p.Panel01_00.set_type("vertical");
                p.Panel01_00.set_flexgrow("1");
                p.Panel01_00.set_fittocontents("height");
                p.Panel01_00.move("10.00","98","100%","86",null,null);

                p.panBlank.set_taborder("4");
                p.panBlank.set_type("vertical");
                p.panBlank.set_flexgrow("1");
                p.panBlank.move("10.00","98","305","1",null,null);

                p.pan01.set_taborder("5");
                p.pan01.set_horizontalgap("20");
                p.pan01.set_flexcrossaxiswrapalign("start");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_verticalgap("0");
                p.pan01.set_spacing("0px 20px 10px 20px");
                p.pan01.set_cssclass("pal_WF_DtlBg");
                p.pan01.set_fittocontents("height");
                p.pan01.move("0","60","100.00%","96",null,null);

                p.Radio00.set_taborder("10");
                p.Radio00.set_fittocontents("width");
                p.Radio00.set_innerdataset(div00_00_form_Radio00_innerdataset);
                p.Radio00.set_codecolumn("codecolumn");
                p.Radio00.set_datacolumn("datacolumn");
                p.Radio00.set_direction("vertical");
                p.Radio00.set_value("0");
                p.Radio00.set_index("0");
                p.Radio00.move("127","203","100%","40",null,null);

                p.staLabel03_00.set_taborder("6");
                p.staLabel03_00.set_text("설치사유 기타");
                p.staLabel03_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00.move("10","98","100%","46",null,null);

                p.edt00_02.set_taborder("7");
                p.edt00_02.set_readonly("false");
                p.edt00_02.set_value("설치사유 기타");
                p.edt00_02.set_displaynulltext("설치사유 기타");
                p.edt00_02.move("20.00","288","100%","40",null,null);

                p.Panel02_00.set_taborder("8");
                p.Panel02_00.set_type("vertical");
                p.Panel02_00.set_flexgrow("1");
                p.Panel02_00.move("20.00","242","305","86",null,null);

                p.pan02.set_taborder("9");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.move("0","242","100.00%","96",null,null);

                p.staLabel03_00_00.set_taborder("11");
                p.staLabel03_00_00.set_text("공사(작업)분야");
                p.staLabel03_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_00.move("10","98","100%","46",null,null);

                p.pan_04_00.set_taborder("12");
                p.pan_04_00.set_type("vertical");
                p.pan_04_00.set_flexgrow("1");
                p.pan_04_00.move("20.00","242","305","86",null,null);

                p.pan03.set_taborder("13");
                p.pan03.set_horizontalgap("20");
                p.pan03.set_flexcrossaxiswrapalign("start");
                p.pan03.set_flexwrap("wrap");
                p.pan03.set_fittocontents("height");
                p.pan03.set_verticalgap("0");
                p.pan03.set_spacing("0px 20px 10px 20px");
                p.pan03.set_cssclass("pal_WF_DtlBg");
                p.pan03.move("0","242","100.00%","96",null,null);

                p.CheckBox04.set_taborder("44");
                p.CheckBox04.set_text("소방");
                p.CheckBox04.set_fittocontents("width");
                p.CheckBox04.move("588","477","74","40",null,null);

                p.CheckBox03.set_taborder("43");
                p.CheckBox03.set_text("통신");
                p.CheckBox03.set_fittocontents("width");
                p.CheckBox03.move("413","475","74","40",null,null);

                p.CheckBox02.set_taborder("42");
                p.CheckBox02.set_text("전기");
                p.CheckBox02.set_fittocontents("width");
                p.CheckBox02.move("278","475","74","40",null,null);

                p.CheckBox00.set_taborder("39");
                p.CheckBox00.set_text("기계");
                p.CheckBox00.set_fittocontents("width");
                p.CheckBox00.move("45","470","74","40",null,null);

                p.CheckBox01.set_taborder("40");
                p.CheckBox01.set_text("건축");
                p.CheckBox01.set_fittocontents("width");
                p.CheckBox01.move("134","480","74","40",null,null);

                p.Panel01.set_taborder("41");
                p.Panel01.set_fittocontents("height");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.move("20","477","100%","40",null,null);

                p.staLabel03_00_01.set_taborder("14");
                p.staLabel03_00_01.set_text("임대면적");
                p.staLabel03_00_01.set_cssclass("sta_WF_Label");
                p.staLabel03_00_01.move("10","98","100%","46",null,null);

                p.Panel02_00_00.set_taborder("15");
                p.Panel02_00_00.set_type("vertical");
                p.Panel02_00_00.set_flexgrow("1");
                p.Panel02_00_00.move("20.00","242","305","86",null,null);

                p.pan04.set_taborder("16");
                p.pan04.set_horizontalgap("20");
                p.pan04.set_flexcrossaxiswrapalign("start");
                p.pan04.set_flexwrap("wrap");
                p.pan04.set_fittocontents("height");
                p.pan04.set_verticalgap("0");
                p.pan04.set_spacing("0px 20px 10px 20px");
                p.pan04.set_cssclass("pal_WF_DtlBg");
                p.pan04.move("0","242","100.00%","96",null,null);

                p.Edit02.set_taborder("25");
                p.Edit02.move("90","539","100%","40",null,null);

                p.staLabel05_00_00.set_taborder("17");
                p.staLabel05_00_00.set_text("착공예정일");
                p.staLabel05_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel05_00_00.move("10","98","100%","46",null,null);

                p.pan04_00.set_taborder("18");
                p.pan04_00.set_type("vertical");
                p.pan04_00.set_flexgrow("1");
                p.pan04_00.move("10.00","98","305","86",null,null);

                p.staLabel05_01_00.set_taborder("19");
                p.staLabel05_01_00.set_text("준공예정일");
                p.staLabel05_01_00.set_cssclass("sta_WF_Label_E");
                p.staLabel05_01_00.move("10","98","100%","46",null,null);

                p.pan05_01.set_taborder("20");
                p.pan05_01.set_type("vertical");
                p.pan05_01.set_flexgrow("1");
                p.pan05_01.move("10.00","98","305","86",null,null);

                p.pan05_00.set_taborder("21");
                p.pan05_00.set_horizontalgap("20");
                p.pan05_00.set_flexcrossaxiswrapalign("start");
                p.pan05_00.set_flexwrap("wrap");
                p.pan05_00.set_verticalgap("0");
                p.pan05_00.set_spacing("0px 20px 10px 20px");
                p.pan05_00.set_fittocontents("height");
                p.pan05_00.move("0","60","100.00%","96",null,null);

                p.pan08.set_taborder("22");
                p.pan08.set_type("vertical");
                p.pan08.set_cssclass("pal_WF_DtlBg");
                p.pan08.set_fittocontents("height");
                p.pan08.set_spacing("0px 0px 10px 0px ");
                p.pan08.move("0","570","100.00%","295",null,null);

                p.Calendar01.set_taborder("27");
                p.Calendar01.set_dateformat("yyyy-MM-dd");
                p.Calendar01.move("570","621","145","40",null,null);

                p.Calendar00.set_taborder("26");
                p.Calendar00.set_dateformat("yyyy-MM-dd");
                p.Calendar00.move("67","623","145","40",null,null);

                p.sta00_00_01.set_taborder("23");
                p.sta00_00_01.set_text("예) ~~~회의실 조성공사, ~~~ 환복실 변경공사, ~~~팀 마련공사\r\n(업무용시설의 칸막이, 천장, 바닥, 출입문 등을 설치(변경) 경우)");
                p.sta00_00_01.set_cssclass("sta_WF_Des");
                p.sta00_00_01.set_fittocontents("height");
                p.sta00_00_01.set_flexgrow("1");
                p.sta00_00_01.move("60.00","145","100%","57",null,null);

                p.Panel00_02.set_taborder("24");
                p.Panel00_02.set_verticalgap("0");
                p.Panel00_02.set_fittocontents("height");
                p.Panel00_02.set_spacing("0px 20px 0px 20px");
                p.Panel00_02.move("60.00","107","100.00%","50",null,null);

                p.sta00.set_taborder("28");
                p.sta00.set_text("전화번호는 우측상단 \"사용자 이름\" 클릭 후 해당 메뉴에서 등록 및 수정이 가능합니다.");
                p.sta00.set_cssclass("sta_WF_Des");
                p.sta00.set_fittocontents("height");
                p.sta00.move("20","20","100%","40",null,null);

                p.Panel04_02.set_taborder("29");
                p.Panel04_02.set_spacing("0px 20px 0px 20px");
                p.Panel04_02.set_fittocontents("height");
                p.Panel04_02.set_type("vertical");
                p.Panel04_02.set_verticalgap("4");
                p.Panel04_02.move("0","685","100.00%","90",null,null);

                p.sta00_00.set_taborder("30");
                p.sta00_00.set_text("시설물설치(변경)관련 작업신고서 신청은 착공·준공 예정일 내 기간만 가능합니다.");
                p.sta00_00.set_cssclass("sta_WF_Des");
                p.sta00_00.set_fittocontents("height");
                p.sta00_00.move("20","20","100.00%","40",null,null);

                p.sta00_01.set_taborder("31");
                p.sta00_01.set_text("업로드하는 파일의 크기는 100mb 이하로 제한됩니다.");
                p.sta00_01.set_cssclass("sta_WF_Des2");
                p.sta00_01.set_fittocontents("height");
                p.sta00_01.move("20","20","100%","40",null,null);

                p.sta00_00_00.set_taborder("32");
                p.sta00_00_00.set_text("안전관리계획서는 3억원 이상 또는 3개월 이상 시설공사 추진시 업로드하시기 바랍니다");
                p.sta00_00_00.set_cssclass("sta_WF_Des2");
                p.sta00_00_00.set_fittocontents("height");
                p.sta00_00_00.move("20","20","100.00%","40",null,null);

                p.Panel04_02_00.set_taborder("33");
                p.Panel04_02_00.set_spacing("4px 20px 0px 20px");
                p.Panel04_02_00.set_fittocontents("height");
                p.Panel04_02_00.set_type("vertical");
                p.Panel04_02_00.set_verticalgap("4");
                p.Panel04_02_00.move("0","685","100.00%","90",null,null);

                p.staLabel03_00_02.set_taborder("34");
                p.staLabel03_00_02.set_text("공사개요");
                p.staLabel03_00_02.set_cssclass("sta_WF_Label");
                p.staLabel03_00_02.move("10","98","100%","46",null,null);

                p.Panel02_00_01.set_taborder("35");
                p.Panel02_00_01.set_type("vertical");
                p.Panel02_00_01.set_flexgrow("1");
                p.Panel02_00_01.set_fittocontents("height");
                p.Panel02_00_01.move("20.00","0","100%","136",null,null);

                p.pan02_00.set_taborder("36");
                p.pan02_00.set_horizontalgap("20");
                p.pan02_00.set_flexcrossaxiswrapalign("start");
                p.pan02_00.set_flexwrap("wrap");
                p.pan02_00.set_fittocontents("height");
                p.pan02_00.set_verticalgap("0");
                p.pan02_00.set_spacing("0px 20px 10px 20px");
                p.pan02_00.set_cssclass("pal_WF_DtlBg");
                p.pan02_00.move("0","885","100.00%","146",null,null);

                p.TextArea00.set_taborder("37");
                p.TextArea00.move("0","46","100%","80",null,null);

                p.Edit00.set_taborder("45");
                p.Edit00.move("78","112","100%","40",null,null);
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

        };
        this.loadIncludeScript("CST002S21.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
