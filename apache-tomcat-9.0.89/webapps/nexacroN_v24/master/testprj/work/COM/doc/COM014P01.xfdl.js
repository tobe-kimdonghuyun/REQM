(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM14P01");
            this.set_titletext("정보활용동의서 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,1312);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGet", this);
            obj._setContents("<ColumnInfo><Column id=\"prvcAgreDocId\" type=\"STRING\" size=\"256\"/><Column id=\"agreType\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"docCn\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTerm\" type=\"STRING\" size=\"256\"/><Column id=\"esntlAgreCn\" type=\"STRING\" size=\"256\"/><Column id=\"chcAgreCn\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"useBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"useEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"fullName\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile", this);
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

            obj = new Div("divForm","0","0",null,"1224","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_cssclass(" ");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle01","-14","48","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("신청정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinAplyInfo","1436","718","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_visible("true");
            obj.set_text("");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01","675","48","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 20px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnMinAplyInfo\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit01","-14","28","100%","70",null,null,null,null,"70",null,this.divForm.form);
            obj.set_taborder("4");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div00","20","10","100%","1084",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel03","806","498","174","34",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("46");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("7");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan00_02\"/><PanelItem id=\"PanelItem03\" componentid=\"pan01_01_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("8");
            obj.set_text("문서ID");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt00","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_01","10.00","98","280","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("10");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("11");
            obj.set_text("문서유형");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_02","10.00","98","280","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("12");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"cbo00_00_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("13");
            obj.set_text("폐기기한(년)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt00_02","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("2");
            obj.set_readonly("false");
            obj.set_inputfilter("none");
            obj.set_inputtype("digit");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan02_","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("14");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_02\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan02","0","60","100%","96",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("15");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan02_\"/><PanelItem id=\"PanelItem01\" componentid=\"pan04_01\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel05_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("16");
            obj.set_text("연장기간");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan04_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("17");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel01","596","204","100%","45",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("42");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Calendar00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Calendar00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("18");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan01_01_00","10.00","98","280","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("19");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"cbo00_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Combo("cbo00_00","200.00","128","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_displaynulltext("선택");
            var divForm_form_Div00_form_cbo00_00_innerdataset = new nexacro.NormalDataset("divForm_form_Div00_form_cbo00_00_innerdataset", obj);
            divForm_form_Div00_form_cbo00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div00_form_cbo00_00_innerdataset);
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("0");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Combo("cbo00_00_00","200.00","128","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsCombo");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_displaynulltext("선택");
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_02","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("20");
            obj.set_text("동의문서 첨부파일");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Button("btn_file_1","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("21");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("22");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("panTitle","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("23");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("24");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("25");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("26");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("panFileNum","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("27");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Button("btn_del_file_1","512","135","125","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("28");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("panBtnDel00","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("29");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_del_file_1\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel00","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("30");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid01","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("31");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_binddataset("dsFile1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("panFile","0","50","100.00%","161",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("32");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid01\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_01_00","10","98","50%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("33");
            obj.set_text("문서내용");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_02_00","10.00","98","100%","330",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("34");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Panel02\"/><PanelItem id=\"PanelItem02\" componentid=\"EditDiv00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_00","0","60","100.00%","330",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("35");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"pan00_02_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel02","102","528","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("45");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("spacebetween");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel03\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_01_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("36");
            obj.set_text("필수항목 동의 문장 (200자 이내)");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_02_00_00","10.00","98","300","100%",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("37");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"TextArea00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_00_00","0","60","100.00%","200",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("38");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"pan00_02_00_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_01_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("39");
            obj.set_text("선택항목 동의 문장 (200자 이내)");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_02_00_00_00","10.00","98","300","100%",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("40");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"TextArea01\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_00_00_00","0","60","100.00%","200",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("41");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"pan00_02_00_00_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","0","30","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("43");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_Dash");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00","0","0","44.83%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_flexgrow("1");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","0","0","44.827586206896555%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_flexgrow("1");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Div("EditDiv00","138","302","100%","280",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("44");
            obj.set_text("Div00");
            obj.set_url("work::COM/util/editor/editor.xfdl");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","0","46","100.00%","144",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("6");
            obj.set_value("※ 신청자의 개인정보 수집 및 이용동의여부(선택항목)\n※ 선택항목에 해당하는 정보를 입력하지 않으셔도 서비스 이용에는 제한이 없습니다.");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","0","46","100.00%","144",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("5");
            obj.set_value("※ 신청자의 개인정보 수집 및 이용동의 여부 (필수항목) ");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new RaonkUpload("RaonkUpload","-826.00","6","73.20%","200",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_DevelopLangage("JAVA");
            obj.set_ExtensionAllowOrLimit("1");
            obj.set_HandlerUrl("/common/uploadDownload.do");
            obj.set_RunTimes("html5");
            obj.set_ButtonBarView("0");
            obj.set_visible("false");
            obj.set_AllowDuplicationFile("1");
            obj.set_text("");
            obj.set_DisableDeleteConfirm("1");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_00","1030","888","96.00%","144",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_readonly("false");
            obj.set_value("신청자의 개인정보 수집 및 이용동의 여부 (필수항목) ");
            obj.set_visible("false");
            obj.set_text("신청자의 개인정보 수집 및 이용동의 여부 (필수항목) ");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_00_00","1040","1088","96.00%","144",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_readonly("false");
            obj.set_value("신청자의 개인정보 수집 및 이용동의여부(선택항목)");
            obj.set_visible("false");
            obj.set_text("신청자의 개인정보 수집 및 이용동의여부(선택항목)");
            this.addChild(obj.name, obj);

            obj = new Div("divPopBtn","0","divForm:20",null,"60","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","457.00","30","120","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("0");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_fittocontents("width");
            this.divPopBtn.addChild(obj.name, obj);
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
            obj = new Layout("mobile","",0,0,this.divGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divGuide.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div00.form.EditDiv00
            obj = new Layout("default","",0,0,this.divForm.form.Div00.form.EditDiv00.form,function(p){});
            this.divForm.form.Div00.form.EditDiv00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.Div00.form
            obj = new Layout("default","",0,0,this.divForm.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel03.set_taborder("46");
                p.Panel03.set_flexmainaxisalign("end");
                p.Panel03.set_horizontalgap("10");
                p.Panel03.move("806","498","174","34",null,null);

                p.pan00.set_taborder("7");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("0px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.move("0","60","100.00%","97",null,null);

                p.staLabel00.set_taborder("8");
                p.staLabel00.set_text("문서ID");
                p.staLabel00.set_cssclass("sta_WF_Label");
                p.staLabel00.move("10","98","100%","46",null,null);

                p.edt00.set_taborder("9");
                p.edt00.set_readonly("true");
                p.edt00.move("10.00","158","100%","40",null,null);

                p.pan00_01.set_taborder("10");
                p.pan00_01.set_type("vertical");
                p.pan00_01.set_flexgrow("1");
                p.pan00_01.set_minwidth("");
                p.pan00_01.move("10.00","98","280","86",null,null);

                p.staLabel00_01.set_taborder("11");
                p.staLabel00_01.set_text("문서유형");
                p.staLabel00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel00_01.move("10","98","100%","46",null,null);

                p.pan00_02.set_taborder("12");
                p.pan00_02.set_type("vertical");
                p.pan00_02.set_flexgrow("1");
                p.pan00_02.set_minwidth("");
                p.pan00_02.move("10.00","98","280","86",null,null);

                p.staLabel03_00.set_taborder("13");
                p.staLabel03_00.set_text("폐기기한(년)");
                p.staLabel03_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00.move("10","98","100%","46",null,null);

                p.edt00_02.set_taborder("2");
                p.edt00_02.set_readonly("false");
                p.edt00_02.set_inputfilter("none");
                p.edt00_02.set_inputtype("digit");
                p.edt00_02.move("10.00","158","100%","40",null,null);

                p.pan02_.set_taborder("14");
                p.pan02_.set_type("vertical");
                p.pan02_.set_flexgrow("1");
                p.pan02_.move("10.00","98","300","86",null,null);

                p.pan02.set_taborder("15");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.move("0","60","100%","96",null,null);

                p.staLabel05_00.set_taborder("16");
                p.staLabel05_00.set_text("연장기간");
                p.staLabel05_00.set_cssclass("sta_WF_Label_E");
                p.staLabel05_00.move("10","98","100%","46",null,null);

                p.pan04_01.set_taborder("17");
                p.pan04_01.set_type("vertical");
                p.pan04_01.set_flexgrow("1");
                p.pan04_01.move("10.00","98","300","86",null,null);

                p.Panel01.set_taborder("42");
                p.Panel01.move("596","204","100%","45",null,null);

                p.staLabel01_00_00.set_taborder("18");
                p.staLabel01_00_00.set_text("사용여부");
                p.staLabel01_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel01_00_00.move("10","98","100%","46",null,null);

                p.pan01_01_00.set_taborder("19");
                p.pan01_01_00.set_type("vertical");
                p.pan01_01_00.set_flexgrow("1");
                p.pan01_01_00.move("10.00","98","280","86",null,null);

                p.cbo00_00.set_taborder("1");
                p.cbo00_00.set_innerdataset(divForm_form_Div00_form_cbo00_00_innerdataset);
                p.cbo00_00.set_codecolumn("codecolumn");
                p.cbo00_00.set_datacolumn("datacolumn");
                p.cbo00_00.set_displaynulltext("선택");
                p.cbo00_00.set_text("선택");
                p.cbo00_00.set_value("");
                p.cbo00_00.set_index("0");
                p.cbo00_00.move("200.00","128","100%","40",null,null);

                p.cbo00_00_00.set_taborder("0");
                p.cbo00_00_00.set_innerdataset("dsCombo");
                p.cbo00_00_00.set_codecolumn("cdId");
                p.cbo00_00_00.set_datacolumn("cdNm");
                p.cbo00_00_00.set_displaynulltext("선택");
                p.cbo00_00_00.set_text("");
                p.cbo00_00_00.set_index("-1");
                p.cbo00_00_00.move("200.00","128","100%","40",null,null);

                p.staLabel00_02.set_taborder("20");
                p.staLabel00_02.set_text("동의문서 첨부파일");
                p.staLabel00_02.set_cssclass("sta_WF_Label_E");
                p.staLabel00_02.set_flexgrow("1");
                p.staLabel00_02.move("0","44","305","46",null,null);

                p.btn_file_1.set_taborder("21");
                p.btn_file_1.set_text("파일선택");
                p.btn_file_1.set_cssclass("btn_WF_FileUp");
                p.btn_file_1.move("124","58","116","40",null,null);

                p.panBtnFile00.set_taborder("22");
                p.panBtnFile00.set_flexgrow("1");
                p.panBtnFile00.set_flexcrossaxisalign("start");
                p.panBtnFile00.set_flexmainaxisalign("end");
                p.panBtnFile00.move("433","58","305","46",null,null);

                p.panTitle.set_taborder("23");
                p.panTitle.set_cssclass("pan_WF_FileTitle");
                p.panTitle.move("0","124","100%","46",null,null);

                p.Static00.set_taborder("24");
                p.Static00.set_text("파일수 : ");
                p.Static00.set_fittocontents("width");
                p.Static00.move("88","123","48","46",null,null);

                p.Static01.set_taborder("25");
                p.Static01.set_text("0");
                p.Static01.set_fittocontents("width");
                p.Static01.move("165","143","9","46",null,null);

                p.Static02.set_taborder("26");
                p.Static02.set_text("개");
                p.Static02.set_fittocontents("width");
                p.Static02.move("293","131","13","46",null,null);

                p.panFileNum.set_taborder("27");
                p.panFileNum.set_flexgrow("1");
                p.panFileNum.set_horizontalgap("4");
                p.panFileNum.move("20","190","305","46",null,null);

                p.btn_del_file_1.set_taborder("28");
                p.btn_del_file_1.set_text("전체파일삭제");
                p.btn_del_file_1.set_cssclass("btn_WF_FileDel");
                p.btn_del_file_1.set_fittocontents("width");
                p.btn_del_file_1.set_visible("false");
                p.btn_del_file_1.move("512","135","125","40",null,null);

                p.panBtnDel00.set_taborder("29");
                p.panBtnDel00.set_flexcrossaxisalign("center");
                p.panBtnDel00.set_flexmainaxisalign("end");
                p.panBtnDel00.set_flexgrow("1");
                p.panBtnDel00.move("517","141","305","46",null,null);

                p.Panel00.set_taborder("30");
                p.Panel00.move("20","51","100%","46",null,null);

                p.Grid01.set_taborder("31");
                p.Grid01.set_autofittype("col");
                p.Grid01.set_cssclass("grd_WF_FileAdd");
                p.Grid01.set_binddataset("dsFile1");
                p.Grid01.move("20.00","114","100%","40",null,null);

                p.panFile.set_taborder("32");
                p.panFile.set_fittocontents("height");
                p.panFile.set_spacing("10px 20px 10px 20px");
                p.panFile.set_flexwrap("wrap");
                p.panFile.set_cssclass("pal_WF_DtlBg");
                p.panFile.set_verticalgap("4");
                p.panFile.move("0","50","100.00%","161",null,null);

                p.staLabel00_01_00.set_taborder("33");
                p.staLabel00_01_00.set_text("문서내용");
                p.staLabel00_01_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_01_00.move("10","98","50%","46",null,null);

                p.pan00_02_00.set_taborder("34");
                p.pan00_02_00.set_type("vertical");
                p.pan00_02_00.set_flexgrow("1");
                p.pan00_02_00.set_fittocontents("height");
                p.pan00_02_00.set_minwidth("");
                p.pan00_02_00.move("10.00","98","100%","330",null,null);

                p.pan00_00.set_taborder("35");
                p.pan00_00.set_horizontalgap("20");
                p.pan00_00.set_flexcrossaxiswrapalign("start");
                p.pan00_00.set_flexwrap("wrap");
                p.pan00_00.set_fittocontents("height");
                p.pan00_00.set_verticalgap("0");
                p.pan00_00.set_spacing("0px 20px 10px 20px");
                p.pan00_00.set_cssclass("pal_WF_DtlBg");
                p.pan00_00.move("0","60","100.00%","330",null,null);

                p.Panel02.set_taborder("45");
                p.Panel02.set_flexcrossaxiswrapalign("start");
                p.Panel02.set_flexcrossaxisalign("center");
                p.Panel02.set_flexmainaxisalign("spacebetween");
                p.Panel02.move("102","528","100%","46",null,null);

                p.staLabel00_01_00_00.set_taborder("36");
                p.staLabel00_01_00_00.set_text("필수항목 동의 문장 (200자 이내)");
                p.staLabel00_01_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_01_00_00.move("10","98","100%","46",null,null);

                p.pan00_02_00_00.set_taborder("37");
                p.pan00_02_00_00.set_type("vertical");
                p.pan00_02_00_00.set_flexgrow("1");
                p.pan00_02_00_00.set_fittocontents("height");
                p.pan00_02_00_00.set_minwidth("");
                p.pan00_02_00_00.move("10.00","98","300","100%",null,null);

                p.pan00_00_00.set_taborder("38");
                p.pan00_00_00.set_horizontalgap("20");
                p.pan00_00_00.set_flexcrossaxiswrapalign("start");
                p.pan00_00_00.set_flexwrap("wrap");
                p.pan00_00_00.set_fittocontents("height");
                p.pan00_00_00.set_verticalgap("0");
                p.pan00_00_00.set_spacing("0px 20px 10px 20px");
                p.pan00_00_00.set_cssclass("pal_WF_DtlBg");
                p.pan00_00_00.move("0","60","100.00%","200",null,null);

                p.staLabel00_01_00_00_00.set_taborder("39");
                p.staLabel00_01_00_00_00.set_text("선택항목 동의 문장 (200자 이내)");
                p.staLabel00_01_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_01_00_00_00.move("10","98","100%","46",null,null);

                p.pan00_02_00_00_00.set_taborder("40");
                p.pan00_02_00_00_00.set_type("vertical");
                p.pan00_02_00_00_00.set_flexgrow("1");
                p.pan00_02_00_00_00.set_fittocontents("height");
                p.pan00_02_00_00_00.set_minwidth("");
                p.pan00_02_00_00_00.move("10.00","98","300","100%",null,null);

                p.pan00_00_00_00.set_taborder("41");
                p.pan00_00_00_00.set_horizontalgap("20");
                p.pan00_00_00_00.set_flexcrossaxiswrapalign("start");
                p.pan00_00_00_00.set_flexwrap("wrap");
                p.pan00_00_00_00.set_fittocontents("height");
                p.pan00_00_00_00.set_verticalgap("0");
                p.pan00_00_00_00.set_spacing("0px 20px 10px 20px");
                p.pan00_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.pan00_00_00_00.move("0","60","100.00%","200",null,null);

                p.Static00_00.set_taborder("43");
                p.Static00_00.set_text("~");
                p.Static00_00.set_cssclass("sta_WF_Dash");
                p.Static00_00.move("0","0","30","40",null,null);

                p.Calendar00_00.set_taborder("3");
                p.Calendar00_00.set_dateformat("yyyy-MM-dd");
                p.Calendar00_00.set_flexgrow("1");
                p.Calendar00_00.move("0","0","44.83%","40",null,null);

                p.Calendar00.set_taborder("4");
                p.Calendar00.set_dateformat("yyyy-MM-dd");
                p.Calendar00.set_flexgrow("1");
                p.Calendar00.move("0","0","44.827586206896555%","40",null,null);

                p.EditDiv00.set_taborder("44");
                p.EditDiv00.set_text("Div00");
                p.EditDiv00.set_url("work::COM/util/editor/editor.xfdl");
                p.EditDiv00.move("138","302","100%","280",null,null);

                p.TextArea01.set_taborder("6");
                p.TextArea01.set_value("※ 신청자의 개인정보 수집 및 이용동의여부(선택항목)\n※ 선택항목에 해당하는 정보를 입력하지 않으셔도 서비스 이용에는 제한이 없습니다.");
                p.TextArea01.move("0","46","100.00%","144",null,null);

                p.TextArea00.set_taborder("5");
                p.TextArea00.set_value("※ 신청자의 개인정보 수집 및 이용동의 여부 (필수항목) ");
                p.TextArea00.move("0","46","100.00%","144",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div00.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.pan00.move("0","60","100.00%","269",null,null);

                p.pan02.move("0","60","100.00%","183",null,null);

                p.pan00_00.move("0","60","100.00%","341",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staSubTitle01.set_taborder("1");
                p.staSubTitle01.set_text("신청정보");
                p.staSubTitle01.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle01.move("-14","48","100%","50",null,null);

                p.btnMinAplyInfo.set_taborder("2");
                p.btnMinAplyInfo.set_cssclass("btn_WF_ACMinus");
                p.btnMinAplyInfo.set_visible("true");
                p.btnMinAplyInfo.set_text("");
                p.btnMinAplyInfo.move("1436","718","34","34",null,null);

                p.Panel01.set_taborder("3");
                p.Panel01.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01.set_spacing("0px 20px");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.set_flexcrossaxisalign("center");
                p.Panel01.set_flexmainaxisalign("end");
                p.Panel01.move("675","48","100%","50",null,null);

                p.sub_tit01.set_taborder("4");
                p.sub_tit01.set_background("#ffffff");
                p.sub_tit01.set_flexcrossaxisalign("end");
                p.sub_tit01.set_minheight("70");
                p.sub_tit01.set_maxheight("");
                p.sub_tit01.move("-14","28","100%","70",null,null);

                p.Div00.set_taborder("0");
                p.Div00.set_text("Div00");
                p.Div00.set_cssclass("div_WF_Bg");
                p.Div00.set_fittocontents("height");
                p.Div00.move("20","10","100%","1084",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_spacing("10px 20px 0px 20px");
            this.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form
            obj = new Layout("mobile","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Div00.move("0","0","100%","1484",null,null);
            	}
            );
            obj.set_spacing("10px 20px 0px 20px");
            obj.set_verticalgap("20");
            obj.set_type("vertical");
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
                p.Button00_00.move("457.00","30","120","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 20px");
            this.divPopBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divPopBtn.form
            obj = new Layout("mobile","",0,0,this.divPopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00_00.move("457.00","30","100%","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 20px");
            this.divPopBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1000,1312,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("정보활용동의서 관리");

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
                p.divForm.set_cssclass(" ");
                p.divForm.move("0","0",null,"1224","0",null);

                p.RaonkUpload.set_taborder("2");
                p.RaonkUpload.set_DevelopLangage("JAVA");
                p.RaonkUpload.set_ExtensionAllowOrLimit("1");
                p.RaonkUpload.set_HandlerUrl("/common/uploadDownload.do");
                p.RaonkUpload.set_RunTimes("html5");
                p.RaonkUpload.set_ButtonBarView("0");
                p.RaonkUpload.set_visible("false");
                p.RaonkUpload.set_AllowDuplicationFile("1");
                p.RaonkUpload.set_text("");
                p.RaonkUpload.set_DisableDeleteConfirm("1");
                p.RaonkUpload.move("-826.00","6","73.20%","200",null,null);

                p.edt00_00_00_00.set_taborder("3");
                p.edt00_00_00_00.set_readonly("false");
                p.edt00_00_00_00.set_value("신청자의 개인정보 수집 및 이용동의 여부 (필수항목) ");
                p.edt00_00_00_00.set_visible("false");
                p.edt00_00_00_00.move("1030","888","96.00%","144",null,null);

                p.edt00_00_00_00_00.set_taborder("4");
                p.edt00_00_00_00_00.set_readonly("false");
                p.edt00_00_00_00_00.set_value("신청자의 개인정보 수집 및 이용동의여부(선택항목)");
                p.edt00_00_00_00_00.set_visible("false");
                p.edt00_00_00_00_00.move("1040","1088","96.00%","144",null,null);

                p.divPopBtn.set_taborder("5");
                p.divPopBtn.set_text("Div00");
                p.divPopBtn.set_cssclass("div_WF_PopBtn");
                p.divPopBtn.move("0","divForm:20",null,"60","0",null);
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
                p.divForm.set_cssclass("div_WF_QuickFrBgM");
                p.divForm.move("0","0","100%","1484",null,null);

                p.divGuide.move("694","190","450","385",null,null);

                p.divPopBtn.move("0","divForm:10",null,"60","0",null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.Div00.form.edt00","value","dsGet","prvcAgreDocId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.Div00.form.cbo00_00_00","value","dsGet","agreType");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.Div00.form.cbo00_00","value","dsGet","useYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.Div00.form.edt00_02","value","dsGet","dscdTerm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divForm.form.Div00.form.Calendar00_00","value","dsGet","useBgngYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divForm.form.Div00.form.Calendar00","value","dsGet","useEndYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.Div00.form.TextArea00","value","dsGet","esntlAgreCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.Div00.form.TextArea01","value","dsGet","chcAgreCn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","work::COM/util/editor/editor.xfdl");
        };
        
        // User Script
        this.registerScript("COM014P01.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	COM014P01.xfdl
        *  @Creator 	ELUON INS
        *  @CreateDate 	2024/09/23
        *  @Desction
        *  @Author
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/09/23			조규완						최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        this.param;
        this.validateColumn = [];
        var cMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수
        	// 전달받은 파라메터 팝업창과 페이지오픈으로 파라메터 불러오는 방식이 달라짐
        	if(this.opener) {
        		this.param = {
        			"id" : this.getOwnerFrame().prvcAgreDocId
        		}
        	} else {
        		this.param = this.getOwnerFrame().form.fvObjArgs;
        	}

        	this.fnInit();

        	this.validateColumn.push({"title" : "문서유형", "com": this.divForm.form.Div00.form.cbo00_00_00});
        	this.validateColumn.push({"title" : "사용여부", "com": this.divForm.form.Div00.form.cbo00_00});
        	this.validateColumn.push({"title" : "폐기기한(년)", "com": this.divForm.form.Div00.form.edt00_02});
        	this.validateColumn.push({"title" : "연장시작일자", "com": this.divForm.form.Div00.form.Calendar00_00});
        	this.validateColumn.push({"title" : "연장죵료일자", "com": this.divForm.form.Div00.form.Calendar00});
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        this.cfnClose = function() {
        	console.log('cfnClose');
         	var sWinId = this.objApp.gdsOpenMenu.lookupAs(this.FRAME_MENUCOLUMNS.menuId, cMenuId.substring(0, 14), this.FRAME_MENUCOLUMNS.winId);
         	var objForm = this.objApp.gvFrsWork.all[sWinId];
        	objForm.form.divWork.form.cfnSearch(1);
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.selectTransaction = function()
        {
        	var strSvcId    = "select";
        	var strSvcUrl   = "doc/infoUtlzWtcsDocInfoInq.do";
        	var inData      = "";
        	var outData     = "dsGet=dsGet dsFile1=dsFile1";
        	var strArg      = "id=" + this.param.id;
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        this.saveTransaction = function()
        {
        	var strSvcId    = "save";
        	var strSvcUrl   = "doc/infoUtlzWtcsDocInfoStrg.do";
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
        			this.gfnDownloadSetting(this.RaonkUpload, this.dsFile1);
        			var rowData = {
        				content: this.dsGet.getColumn(0, "docCn")
        			};

        			this.divForm.form.Div00.form.EditDiv00.form.writeData(rowData);
        			break;

        		case "combo":

        			break;

        		case "save":
        			var gvRetMsg = this.objApp.getVariable("gvRetMsg");
        			this.gfnAlertMsg("save", gvRetMsg, null, "msgCallback");
        			break;

        		case "uploadComplete":
        			// 파일 업로드가 완료 된 후 첨부파일 과 같이 데이터 저장
        			this.saveTransaction();
        			break;
        	}
        };

        this.msgCallback = function(sPopupId, sRtn)
        {
        	var oRtn = JSON.parse(sRtn);

        	if(sPopupId == "save_confirm") {
        		if(oRtn.result == "Y") {
        			var obj = {
        				"atchFileId" : "",			// 기존 첨부파일 있을 경우 입력
        				"bsnsSeCd" : "COM",			// 업무구분코드
        				"prgrmId" : "COM014P01" 	// 프로그램ID (화면 ID)
        			}
        			var str = JSON.stringify(obj);
        			this.RaonkUpload.AddFormData('params', str);
        			this.RaonkUpload.Transfer();
        		}
        	} else if(sPopupId == "save") {
        		if(this.opener) {
        			this.close();
        		} else {
        			var cMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        			this.gfnCloseMenu(cMenuId);
        		}
        	} else if(sPopupId == "file_all_del1") {
        		this.gfnDeleteAllFile(this.RaonkUpload, this.dsFile1);
        	} else if(sPopupId == "file_del1") {
        		this.gfnDeleteFile(this.RaonkUpload, this.dsFile1, oRtn.paramArg);
        	}
        };

        /* ck에디터에서 불러올때 콜백 펑션 */
        this.formGetData = function(thisObj, allData)
        {
        	var content = JSON.parse(allData).CONTENT;
        	if (thisObj.gfnIsNull(content)) {
        		thisObj.gfnAlertMsg("msg", "MSG_011", ["문서내용을 입력해주세요."]);
        		return false;
        	}
        	thisObj.dsGet.setColumn(0, "docCn", content);
        	thisObj.gfnConfirmMsg("save_confirm", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"], null);
        }
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	var obj = {
        		filebrowserImageUploadUrl: '/common/insertImageCk.do', // 파일 업로드를 처리 할 경로 설정.
        		height: 200,
        		width: 1000,
        		toolbar: [['Source'], ['Bold', 'Italic', 'Underline', 'Strike'], ['Image', 'Table', 'HorizontalRule'], ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent'],	['Font', 'FontSize'], ['TextColor', 'BGColor']],
        		removePlugins: 'resize',
        	};

        	this.divForm.form.Div00.form.EditDiv00.form.fnInit(obj);

        	this.gfnCmmCode("combo", "dsCombo", "AGRE_DOC_TYPE", "S");
        };

        this.fnFileValidation = function()
        {
        	var nRow1 = this.dsFile1.rowcount;

        	if (nRow1 < 1) {
        		this.gfnAlertMsg("msg", "MSG_011", ["파일을 첨부해주세요."]);
        		return false;
        	}

        	return true;
        }

        this.tranInit = function()
        {
        	if(this.param != null && this.param.id != null && this.param.id != '') {
        		this.selectTransaction();
        	} else {
        		this.dsGet.setColumn(0, "frstRegId", this.objApp.gUser.userId);
        		this.dsGet.setColumn(0, "frstRegNm", this.objApp.gUser.userNm);
        	}
        }
        /*******************************************************************************************************************************
         * 각 RAONK 별 EVENT 영역
        *******************************************************************************************************************************/
        // 페이지에서 라온K업로드 솔루션의 생성 이벤트
        this.RaonkUpload_RAONKUPLOAD_CreationComplete = function(obj,  paramObj)
        {
        	// 업로드 솔루션이 초기 생성시 업로드 할 경로를 지정해야 한다.
        	// /CMM/YYYY/MM/DD/  <<== CMM은 업무별 폴더 지정이고 기본적으로 /년도/월/일 의 폴더 구조를 갖는다.
        	this.RaonkUpload.SetConfig('FolderNameRule', '/COM/YYYY/MM/DD/');
        };

        // 파일 업로드 시 에러 발생 이벤트
        this.RaonkUpload_RAONKUPLOAD_OnError = function(obj, paramObj)
        {
        	console.log(paramObj);
        };

        // 파일 추가 시 발생 이벤트
        // 파일 추가 시 타입을 정해야 한다.(사업자등록증, 증빙자료, 첨부파일, 등등)
        this.RaonkUpload_RAONKUPLOAD_AfterAddAllFile = function(obj, paramObj)
        {
        	// 파일 카테고리 초기화
        	this.gvUploadCategory = "";
        };

        this.RaonkUpload_RAONKUPLOAD_BeforeAddFile = function(obj, paramObj)
        {
        	if(this.gvUploadCategory == 'file')
        	{
        		if(this.dsFile1.rowcount >= 1)
        		{
        			this.gfnAlertMsg("beforeAddFile", "MSG_011", ["파일 1개만 업로드 가능 합니다."]);
        			for (var i = 1; i < this.dsFile1.rowcount; i++) {
        				this.dsFile1.deleteRow(i);
        				var deleteParam = {
        					"row" : i,
        					"col" : 1
        				};
        				this.gfnDeleteFile(this.RaonkUpload, this.dsFile1, deleteParam);
        			}
        			return false;
        		}
        	}

        	return true;
        };

        this.RaonkUpload_RAONKUPLOAD_AfterAddFile = function(obj, paramObj)
        {
        	// 파일에 카테고리 셋팅
        	var sRow = this.dsFile.findRow("colId", this.gvUploadCategory);
        	var atflMngNo = this.dsFile.getColumn(sRow, "atflMngNo");

        	var cvObj = {
        		"strCustomValue" : this.gvUploadCategory,
        		"atflMngNo" : atflMngNo
        	};
        	this.RaonkUpload.SetFileCustomValue(-1, JSON.stringify(cvObj));

        	// 파일 카테고리별 구분으로 파일 리스트에 추가
        	if(this.gvUploadCategory == 'file') {
        		var nIdx = this.dsFile1.addRow();
        		this.dsFile1.setColumn(nIdx, "fullName", paramObj.userdata.strName + ' (' + paramObj.userdata.nSize + ')');
        		this.dsFile1.setColumn(nIdx, "orgnlFileNm", paramObj.userdata.strName);
        		this.dsFile1.setColumn(nIdx, "fileSz", paramObj.userdata.nSize);
        		this.dsFile1.setColumn(nIdx, "atflMngSno", paramObj.userdata.nIndex);
        		this.dsFile1.setColumn(nIdx, "colId", this.gvUploadCategory);
        	}
        };

        // 파일 업로드 완료 이벤트
        this.RaonkUpload_RAONKUPLOAD_UploadComplete = function(obj, paramObj)
        {
        	var allListArray = this.RaonkUpload.GetListInfo("json");
        	// 파일 업로드 후 첨부파일관리번호를 얻기 위한 함수
        	this.gfnUploadComplete("uploadComplete", allListArray, "dsFile", "fnCallback");
        };

        // 파일 추가
        this.divForm_Div00_btn_file_1_onclick = function(obj,e)
        {
        	// 데이터의 첨부파일 관리번호 입력 컬럼명
        	this.gvUploadCategory = "file";		// 컬럼ID
        	this.RaonkUpload.OpenFileDialog();
        };

        // 파일 그리드 클릭 이벤트
        this.divForm_Div00_Grid01_oncellclick = function(obj,e)
        {

        	if(e.col == 1) 	// 삭제 버튼 클릭
        	{
        		var param = {
        			"row" : e.row,
        			"col" : e.col
        		};
        		this.gfnConfirmMsg("file_del1", "MSG_002", "msgCallback", ["확인", "취소"], ["Y", "N"], param);
        	} else if(e.col == 0) // 파일명 클릭
        	{
        		this.gfnSelectFile(this.RaonkUpload, this.dsFile1, e);
        	}
        };

        // 파일 그리드 더블클릭 이벤트
        this.divForm_Div00_Grid01_oncelldblclick = function(obj,e)
        {
        	if(e.col == 0) 	// 파일명을 더블클릭 시 다운로드
        	{
        		this.gfnDownloadFile(this.RaonkUpload, this.dsFile1, e);
        	}
        };

        this.divForm_Div00_btn_del_file_1_onclick = function(obj,e)
        {
        	this.gfnConfirmMsg("file_all_del1", "MSG_002", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divForm_divPopBtn_Button00_00_onclick = function(obj,e)
        {
        	if(this.gfnDsIsValidated(this.validateColumn) && this.fnFileValidation()) {
        		this.divForm.form.Div00.form.EditDiv00.form.readData(this.formGetData, this);
        	}
        };

        this.dsFile1_onvaluechanged = function(obj,e)
        {
        	this.divForm.form.Div00.form.Static01.text = this.dsFile1.rowcount;

        	if (this.dsFile1.rowcount > 0) {
        		this.divForm.form.Div00.form.btn_del_file_1.visible = true;
        	} else {
        		this.divForm.form.Div00.form.btn_del_file_1.visible = false;
        	}
        };

        this.btnMin_onclick = function(obj,e)
        {
        	var objNm = obj.name;
        	var objClass = obj.cssclass;
        	var objDiv = null;
        	var divVisible = false;

        	// 해당 div 찾아줌.
        	if(objNm == "btnMinAplyInfo") {
        		objDiv = this.divForm.form.Div00;
        	} else{
        		return;
        	}

        	if (objClass == "btn_WF_ACMinus") { // - 버튼 일때
        		divVisible = false; // visible 세팅
        		obj.cssclass = "btn_WF_ACPlus"; // 클래스 수정
        	} else if (objClass == "btn_WF_ACPlus") { // + 버튼 일때
        		divVisible = true; // visible 세팅
        		obj.cssclass = "btn_WF_ACMinus";
        	}

        	objDiv.visible = divVisible;
        	this.resetScroll();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.btnMinAplyInfo.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.Div00.form.btn_file_1.addEventHandler("onclick",this.divForm_Div00_btn_file_1_onclick,this);
            this.divForm.form.Div00.form.btn_del_file_1.addEventHandler("onclick",this.divForm_Div00_btn_del_file_1_onclick,this);
            this.divForm.form.Div00.form.Grid01.addEventHandler("oncellclick",this.divForm_Div00_Grid01_oncellclick,this);
            this.divForm.form.Div00.form.Grid01.addEventHandler("oncelldblclick",this.divForm_Div00_Grid01_oncelldblclick,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterAddFile",this.RaonkUpload_RAONKUPLOAD_AfterAddFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_CreationComplete",this.RaonkUpload_RAONKUPLOAD_CreationComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_UploadComplete",this.RaonkUpload_RAONKUPLOAD_UploadComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_OnError",this.RaonkUpload_RAONKUPLOAD_OnError,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_BeforeAddFile",this.RaonkUpload_RAONKUPLOAD_BeforeAddFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterAddAllFile",this.RaonkUpload_RAONKUPLOAD_AfterAddAllFile,this);
            this.divPopBtn.form.Button00_00.addEventHandler("onclick",this.divForm_divPopBtn_Button00_00_onclick,this);
            this.dsFile1.addEventHandler("onvaluechanged",this.dsFile1_onvaluechanged,this);
        };
        this.loadIncludeScript("COM014P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
