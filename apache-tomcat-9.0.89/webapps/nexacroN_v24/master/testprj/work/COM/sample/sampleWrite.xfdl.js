(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleWrite");
            this.set_titletext("파일첨부");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGet", this);
            obj._setContents("<ColumnInfo><Column id=\"sampleDataId\" type=\"STRING\" size=\"256\"/><Column id=\"sampleData01\" type=\"STRING\" size=\"256\"/><Column id=\"sampleData02\" type=\"STRING\" size=\"256\"/><Column id=\"sampleData03\" type=\"STRING\" size=\"256\"/><Column id=\"sampleData04\" type=\"STRING\" size=\"256\"/><Column id=\"sampleData05\" type=\"STRING\" size=\"256\"/><Column id=\"sampleData06\" type=\"STRING\" size=\"256\"/><Column id=\"sampleData07\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile", this);
            obj._setContents("<ColumnInfo><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInsideMail", this);
            obj._setContents("<ColumnInfo><Column id=\"fromEmpId\" type=\"STRING\" size=\"256\"/><Column id=\"toEmpId\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"contentId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"fromEmpId\">81014uuu</Col><Col id=\"toEmpId\">81014uuu</Col><Col id=\"title\">test</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"fullName\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile2", this);
            obj._setContents("<ColumnInfo><Column id=\"fullName\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDelFile", this);
            obj._setContents("<ColumnInfo><Column id=\"uniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutsideMail", this);
            obj._setContents("<ColumnInfo><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"cc\" type=\"STRING\" size=\"256\"/><Column id=\"subject\" type=\"STRING\" size=\"256\"/><Column id=\"contentId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"from\">81014uuu</Col><Col id=\"to\">81014uuu</Col><Col id=\"cc\">test</Col><Col id=\"contentId\">test</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSms", this);
            obj._setContents("<ColumnInfo><Column id=\"send_num\" type=\"STRING\" size=\"256\"/><Column id=\"recipient_num\" type=\"STRING\" size=\"256\"/><Column id=\"contentId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"send_num\">81014uuu</Col><Col id=\"recipient_num\">81014uuu</Col><Col id=\"contentId\">TSP_18</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOcr", this);
            obj._setContents("<ColumnInfo><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"fileUniqueId\">6c3c2e138a0f476db8caaed1771653a6</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHandy", this);
            obj._setContents("<ColumnInfo><Column id=\"K\" type=\"STRING\" size=\"256\"/><Column id=\"formid\" type=\"STRING\" size=\"256\"/><Column id=\"empcode\" type=\"STRING\" size=\"256\"/><Column id=\"deptcode\" type=\"STRING\" size=\"256\"/><Column id=\"miskey\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"K\">1</Col><Col id=\"formid\">0000000062</Col><Col id=\"empcode\">P99992</Col><Col id=\"miskey\">test_key</Col></Row></Rows>");
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

            obj = new Static("staState","0","0","100%","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("표는 필수 입력 사항입니다.");
            obj.set_cssclass("sta_WF_EsentialTxt");
            this.addChild(obj.name, obj);

            obj = new Div("divForm","0","staState:0",null,"2112","60",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_QuickFrBg");
            obj.set_visible("true");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","0","100%","389",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle","0","0","100.00%","50",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("1");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan00_02\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("업무분류");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("sampleData01","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("3");
            obj.set_readonly("false");
            obj.set_value("업무분류");
            obj.set_text("업무분류");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem01\" componentid=\"sampleData01\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("5");
            obj.set_text("업체기관명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("sampleData02","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("6");
            obj.set_readonly("false");
            obj.set_value("기관명");
            obj.set_text("기관명");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_02","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("7");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"sampleData02\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel01_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("8");
            obj.set_text("건물명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("sampleData03","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("9");
            obj.set_readonly("false");
            obj.set_value("건물명");
            obj.set_flexgrow("1");
            obj.set_text("건물명");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan01_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("10");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"sampleData03\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel01_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("11");
            obj.set_text("크기");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("sampleData04","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("12");
            obj.set_readonly("false");
            obj.set_value("100");
            obj.set_text("100");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan01_02","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("13");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02\"/><PanelItem id=\"PanelItem01\" componentid=\"sampleData04\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan01","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("14");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan01_02\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("15");
            obj.set_text("용도");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan02_","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("16");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Combo00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("17");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan02_02","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("18");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Combo00_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan02","0","60","100%","96",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("19");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan02_\"/><PanelItem id=\"PanelItem02\" componentid=\"pan02_02\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","20","288","100%","39",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("23");
            obj.set_innerdataset("dsCombo");
            obj.set_datacolumn("cdNm");
            obj.set_codecolumn("cdId");
            obj.set_autoselect("true");
            obj.set_flexgrow("1");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel04","0","560","100.00%","51",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("22");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_fittocontents("height");
            obj.set_spacing("0px 0px 10px 0px ");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel04_02\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel04_02","0","685","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("21");
            obj.set_spacing("0px 20px 0px 20px");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("sta00","20","20","100%","100%",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("20");
            obj.set_text("전화번호는 우측상단 \"사용자 이름\" 클릭 후 해당 메뉴에서 등록 및 수정이 가능합니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","20","288","100%","39",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("24");
            obj.set_innerdataset("dsCombo");
            obj.set_datacolumn("cdNm");
            obj.set_codecolumn("cdId");
            obj.set_flexgrow("1");
            obj.set_text("Combo00");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div04","0","1936","100%","600",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle00","10","68","100.00%","50",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("0");
            obj.set_text("업로드");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Button("btn_file_1","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("3");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel00_02","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("1");
            obj.set_text("사업자등록증");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panFile","0","42","100.00%","250",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("2");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panTitle","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("5");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panBtnFile","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("4");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("Static02","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("10");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Button("btn_del_file_1","512","135","125","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("13");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("Static00","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("8");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("6");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("Static01","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("9");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Grid("Grid00","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("7");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_01","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("14");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Button("btn_file_2_00","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("15");
            obj.set_text("파일선택2");
            obj.set_cssclass("btn_WF_FileUp");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("16");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btn_file_2_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_2_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panTitle00","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("17");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_01\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("Static00_00","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("18");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("Static01_00","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("19");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("Static02_00","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("20");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Button("btn_del_file_2","512","135","125","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("22");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("24");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Grid("Grid00_01","20.00","114","100%","120",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("25");
            obj.set_binddataset("dsFile2");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panFile00","0","50","100.00%","250",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("26");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_01\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panBtnDel","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("12");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_del_file_1\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panBtnDel00","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("23");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_del_file_2\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panFileNum","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("11");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panFileNum00","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("21");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Button("btn_file_2_00_00","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("27");
            obj.set_text("파일선택1");
            obj.set_cssclass("btn_WF_FileUp");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Div("Div05","0","1239","100%","266",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle00_01","175.00","0","100%","50",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("3");
            obj.set_text("외부연계");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("Button00","40","58","138","54",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("1");
            obj.set_text("OCR");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("pan00","0","0","100.00%","270",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_tabledirection("horizontal");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btn_upload_popup\"/><PanelItem id=\"PanelItem03\" componentid=\"Button00_00\"/><PanelItem id=\"PanelItem04\" componentid=\"Button00_00_00\"/><PanelItem id=\"PanelItem05\" componentid=\"Button00_00_00_00\"/><PanelItem id=\"PanelItem06\" componentid=\"Button00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Button00\"/><PanelItem id=\"PanelItem00\" componentid=\"Button00_00_01\"/><PanelItem id=\"PanelItem08\" componentid=\"Button00_00_01_00\"/><PanelItem id=\"PanelItem10\" componentid=\"Button00_00_01_00_00_00\"/><PanelItem id=\"PanelItem11\" componentid=\"Button00_00_01_00_00_01\"/><PanelItem id=\"PanelItem07\" componentid=\"Button00_00_01_00_00\"/><PanelItem id=\"PanelItem13\" componentid=\"Button00_00_01_00_00_02_00\"/><PanelItem id=\"PanelItem09\" componentid=\"Button00_00_01_00_00_02\"/><PanelItem id=\"PanelItem14\" componentid=\"viewer_btn\"/><PanelItem id=\"PanelItem15\" componentid=\"download_btn\"/><PanelItem id=\"PanelItem17\" componentid=\"Button00_00_01_00_00_02_01_00\"/><PanelItem id=\"PanelItem18\" componentid=\"viewer_btn00\"/><PanelItem id=\"PanelItem12\" componentid=\"Button00_00_01_00_00_02_01\"/><PanelItem id=\"PanelItem16\" componentid=\"Button00_00_01_00_00_02_01_01\"/><PanelItem id=\"PanelItem20\" componentid=\"Button00_00_01_00_00_02_01_01_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("Button00_00","40","58","138","54",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("2");
            obj.set_text("핸드폰인증");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","40","58","138","54",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("4");
            obj.set_text("메일전송(내부)");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00","40","58","138","54",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("5");
            obj.set_text("메일전송(외부)");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00","40","58","138","54",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("6");
            obj.set_text("사업자번호조회");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("Button00_00_01","22.00","138","138","54",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("7");
            obj.set_text("회사팝업");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00","22.00","138","138","54",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("8");
            obj.set_text("사용자팝업");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_00","22.00","138","138","54",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("9");
            obj.set_text("부서팝업");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_00_00","22.00","138","138","54",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("10");
            obj.set_text("간편인증");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_00_01","22.00","138","138","54",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("11");
            obj.set_text("주소팝업");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_00_02","22.00","138","138","54",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("12");
            obj.set_text("현황도팝업");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_00_02_00","22.00","138","138","54",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("13");
            obj.set_text("SMS");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("viewer_btn","22.00","138","138","54",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("14");
            obj.set_text("이미지뷰어");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("download_btn","22.00","138","138","54",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("15");
            obj.set_text("다운로드");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_00_02_01","22.00","138","138","54",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("14");
            obj.set_text("클립리포트");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_00_02_01_00","22.00","138","138","54",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("17");
            obj.set_text("문서함 파일등록");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("viewer_btn00","22.00","138","138","54",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("18");
            obj.set_text("PDF뷰어");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_00_02_01_01","22.00","138","138","54",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("19");
            obj.set_text("핸디결재");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_00_02_01_01_00","22.00","138","138","54",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("20");
            obj.set_text("작업신고서클립");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Div("divQuick",null,"32","296","160","62",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_QuickMenu");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","17","20","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("0");
            obj.set_text("기본정보");
            obj.set_cssclass("btn_WF_Quick_S");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn03","17.00","110","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("1");
            obj.set_text("업로드");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn03_00","17.00","110","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("3");
            obj.set_text("외부연계");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Static("staLine","17","244","100%","1",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("2");
            obj.set_background("#111111");
            this.divQuick.addChild(obj.name, obj);

            obj = new Div("divBtn",null,"divQuick:0","296","80","62",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_QuickBtnBg");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","7","20","100","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("0");
            obj.set_text("재등록");
            obj.set_cssclass("btn_WF_No");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("btn00_00","btn00:10","20","100","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("1");
            obj.set_text("신청");
            obj.set_cssclass("btn_WF_Yes");
            this.divBtn.addChild(obj.name, obj);

            obj = new RaonkUpload("RaonkUpload","226","2170","35.41%","200",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_DevelopLangage("JAVA");
            obj.set_ExtensionAllowOrLimit("0");
            obj.set_RunTimes("html5");
            obj.set_ButtonBarView("0");
            obj.set_visible("true");
            obj.set_AllowDuplicationFile("1");
            obj.set_text("");
            obj.set_DisableDeleteConfirm("1");
            obj.set_HandlerUrl("/common/uploadDownload.do");
            this.addChild(obj.name, obj);
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
            obj = new Layout("Layout0","",0,0,this.divGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divGuide.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div00.form
            obj = new Layout("default","",0,0,this.divForm.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staSubTitle.set_taborder("0");
                p.staSubTitle.set_text("기본정보");
                p.staSubTitle.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle.move("0","0","100.00%","50",null,null);

                p.pan00.set_taborder("1");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("0px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.move("0","60","100.00%","96",null,null);

                p.staLabel00.set_taborder("2");
                p.staLabel00.set_text("업무분류");
                p.staLabel00.set_cssclass("sta_WF_Label");
                p.staLabel00.move("10","98","100%","46",null,null);

                p.sampleData01.set_taborder("3");
                p.sampleData01.set_readonly("false");
                p.sampleData01.set_value("업무분류");
                p.sampleData01.move("10.00","158","100%","40",null,null);

                p.pan00_01.set_taborder("4");
                p.pan00_01.set_type("vertical");
                p.pan00_01.set_flexgrow("1");
                p.pan00_01.set_minwidth("");
                p.pan00_01.move("10.00","98","300","86",null,null);

                p.staLabel00_01.set_taborder("5");
                p.staLabel00_01.set_text("업체기관명");
                p.staLabel00_01.set_cssclass("sta_WF_Label");
                p.staLabel00_01.move("10","98","100%","46",null,null);

                p.sampleData02.set_taborder("6");
                p.sampleData02.set_readonly("false");
                p.sampleData02.set_value("기관명");
                p.sampleData02.move("10.00","158","100%","40",null,null);

                p.pan00_02.set_taborder("7");
                p.pan00_02.set_type("vertical");
                p.pan00_02.set_flexgrow("1");
                p.pan00_02.set_minwidth("");
                p.pan00_02.move("10.00","98","300","86",null,null);

                p.staLabel01_00.set_taborder("8");
                p.staLabel01_00.set_text("건물명");
                p.staLabel01_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00.move("10","98","100%","46",null,null);

                p.sampleData03.set_taborder("9");
                p.sampleData03.set_readonly("false");
                p.sampleData03.set_value("건물명");
                p.sampleData03.set_flexgrow("1");
                p.sampleData03.move("10.00","158","100%","40",null,null);

                p.pan01_01.set_taborder("10");
                p.pan01_01.set_type("vertical");
                p.pan01_01.set_flexgrow("1");
                p.pan01_01.move("10.00","98","300","86",null,null);

                p.staLabel01_02.set_taborder("11");
                p.staLabel01_02.set_text("크기");
                p.staLabel01_02.set_cssclass("sta_WF_Label");
                p.staLabel01_02.move("10","98","100%","46",null,null);

                p.sampleData04.set_taborder("12");
                p.sampleData04.set_readonly("false");
                p.sampleData04.set_value("100");
                p.sampleData04.move("10.00","158","100%","40",null,null);

                p.pan01_02.set_taborder("13");
                p.pan01_02.set_type("vertical");
                p.pan01_02.set_flexgrow("1");
                p.pan01_02.move("10.00","98","300","86",null,null);

                p.pan01.set_taborder("14");
                p.pan01.set_horizontalgap("20");
                p.pan01.set_flexcrossaxiswrapalign("start");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_verticalgap("0");
                p.pan01.set_spacing("0px 20px 10px 20px");
                p.pan01.set_cssclass("pal_WF_DtlBg");
                p.pan01.set_flexshrink("1");
                p.pan01.set_fittocontents("height");
                p.pan01.move("0","60","100.00%","96",null,null);

                p.staLabel03_00.set_taborder("15");
                p.staLabel03_00.set_text("용도");
                p.staLabel03_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00.move("10","98","100%","46",null,null);

                p.pan02_.set_taborder("16");
                p.pan02_.set_type("vertical");
                p.pan02_.set_flexgrow("1");
                p.pan02_.move("10.00","98","300","86",null,null);

                p.staLabel03_01.set_taborder("17");
                p.staLabel03_01.set_text("진행상태");
                p.staLabel03_01.set_cssclass("sta_WF_Label");
                p.staLabel03_01.move("10","98","100%","46",null,null);

                p.pan02_02.set_taborder("18");
                p.pan02_02.set_type("vertical");
                p.pan02_02.set_flexgrow("1");
                p.pan02_02.move("10.00","98","300","86",null,null);

                p.pan02.set_taborder("19");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.move("0","60","100%","96",null,null);

                p.Combo00.set_taborder("23");
                p.Combo00.set_innerdataset("dsCombo");
                p.Combo00.set_datacolumn("cdNm");
                p.Combo00.set_codecolumn("cdId");
                p.Combo00.set_autoselect("true");
                p.Combo00.set_flexgrow("1");
                p.Combo00.set_text("Combo00");
                p.Combo00.set_index("-1");
                p.Combo00.move("20","288","100%","39",null,null);

                p.Panel04.set_taborder("22");
                p.Panel04.set_type("vertical");
                p.Panel04.set_cssclass("pal_WF_DtlBg");
                p.Panel04.set_fittocontents("height");
                p.Panel04.set_spacing("0px 0px 10px 0px ");
                p.Panel04.move("0","560","100.00%","51",null,null);

                p.Panel04_02.set_taborder("21");
                p.Panel04_02.set_spacing("0px 20px 0px 20px");
                p.Panel04_02.set_fittocontents("height");
                p.Panel04_02.move("0","685","100%","40",null,null);

                p.sta00.set_taborder("20");
                p.sta00.set_text("전화번호는 우측상단 \"사용자 이름\" 클릭 후 해당 메뉴에서 등록 및 수정이 가능합니다.");
                p.sta00.set_cssclass("sta_WF_Des");
                p.sta00.set_fittocontents("height");
                p.sta00.move("20","20","100%","100%",null,null);

                p.Combo00_00.set_taborder("24");
                p.Combo00_00.set_innerdataset("dsCombo");
                p.Combo00_00.set_datacolumn("cdNm");
                p.Combo00_00.set_codecolumn("cdId");
                p.Combo00_00.set_flexgrow("1");
                p.Combo00_00.set_text("Combo00");
                p.Combo00_00.move("20","288","100%","39",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div00.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.pan00.set_type("horizontal");
                p.pan00.set_spacing("0px 10px 10px 10px");
                p.pan00.move("0","56.713","100.00%","193",null,null);

                p.pan01.set_spacing("0px 10px 10px 10px");
                p.pan01.set_type("horizontal");
                p.pan01.move("0","60","100.00%","231",null,null);

                p.pan02.set_type("horizontal");
                p.pan02.set_spacing("0px 10px 10px 10px");
                p.pan02.move("0","60","100.00%","231",null,null);

                p.Panel04_02.set_spacing("0px 10px 0px 10px");
                p.Panel04_02.set_type("horizontal");
                p.Panel04_02.move("0","685","100.00%","40",null,null);

                p.pan00_01.move("10.00","98","305","86",null,null);

                p.pan00_02.move(null,null,"129.72222222222223%",null,null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div04.form
            obj = new Layout("default","",0,0,this.divForm.form.Div04.form,function(p){});
            obj.set_type("vertical");
            this.divForm.form.Div04.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.Div05.form
            obj = new Layout("default","",0,0,this.divForm.form.Div05.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staSubTitle00_01.set_taborder("3");
                p.staSubTitle00_01.set_text("외부연계");
                p.staSubTitle00_01.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle00_01.move("175.00","0","100%","50",null,null);

                p.Button00.set_taborder("1");
                p.Button00.set_text("OCR");
                p.Button00.move("40","58","138","54",null,null);

                p.pan00.set_taborder("0");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("10px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.set_tabledirection("horizontal");
                p.pan00.set_type("horizontal");
                p.pan00.move("0","0","100.00%","270",null,null);

                p.Button00_00.set_taborder("2");
                p.Button00_00.set_text("핸드폰인증");
                p.Button00_00.move("40","58","138","54",null,null);

                p.Button00_00_00.set_taborder("4");
                p.Button00_00_00.set_text("메일전송(내부)");
                p.Button00_00_00.move("40","58","138","54",null,null);

                p.Button00_00_00_00.set_taborder("5");
                p.Button00_00_00_00.set_text("메일전송(외부)");
                p.Button00_00_00_00.move("40","58","138","54",null,null);

                p.Button00_00_00_00_00.set_taborder("6");
                p.Button00_00_00_00_00.set_text("사업자번호조회");
                p.Button00_00_00_00_00.move("40","58","138","54",null,null);

                p.Button00_00_01.set_taborder("7");
                p.Button00_00_01.set_text("회사팝업");
                p.Button00_00_01.move("22.00","138","138","54",null,null);

                p.Button00_00_01_00.set_taborder("8");
                p.Button00_00_01_00.set_text("사용자팝업");
                p.Button00_00_01_00.move("22.00","138","138","54",null,null);

                p.Button00_00_01_00_00.set_taborder("9");
                p.Button00_00_01_00_00.set_text("부서팝업");
                p.Button00_00_01_00_00.move("22.00","138","138","54",null,null);

                p.Button00_00_01_00_00_00.set_taborder("10");
                p.Button00_00_01_00_00_00.set_text("간편인증");
                p.Button00_00_01_00_00_00.move("22.00","138","138","54",null,null);

                p.Button00_00_01_00_00_01.set_taborder("11");
                p.Button00_00_01_00_00_01.set_text("주소팝업");
                p.Button00_00_01_00_00_01.move("22.00","138","138","54",null,null);

                p.Button00_00_01_00_00_02.set_taborder("12");
                p.Button00_00_01_00_00_02.set_text("현황도팝업");
                p.Button00_00_01_00_00_02.move("22.00","138","138","54",null,null);

                p.Button00_00_01_00_00_02_00.set_taborder("13");
                p.Button00_00_01_00_00_02_00.set_text("SMS");
                p.Button00_00_01_00_00_02_00.move("22.00","138","138","54",null,null);

                p.viewer_btn.set_taborder("14");
                p.viewer_btn.set_text("이미지뷰어");
                p.viewer_btn.move("22.00","138","138","54",null,null);

                p.download_btn.set_taborder("15");
                p.download_btn.set_text("다운로드");
                p.download_btn.move("22.00","138","138","54",null,null);

                p.Button00_00_01_00_00_02_01.set_taborder("14");
                p.Button00_00_01_00_00_02_01.set_text("클립리포트");
                p.Button00_00_01_00_00_02_01.move("22.00","138","138","54",null,null);

                p.Button00_00_01_00_00_02_01_00.set_taborder("17");
                p.Button00_00_01_00_00_02_01_00.set_text("문서함 파일등록");
                p.Button00_00_01_00_00_02_01_00.move("22.00","138","138","54",null,null);

                p.viewer_btn00.set_taborder("18");
                p.viewer_btn00.set_text("PDF뷰어");
                p.viewer_btn00.move("22.00","138","138","54",null,null);

                p.Button00_00_01_00_00_02_01_01.set_taborder("19");
                p.Button00_00_01_00_00_02_01_01.set_text("핸디결재");
                p.Button00_00_01_00_00_02_01_01.move("22.00","138","138","54",null,null);

                p.Button00_00_01_00_00_02_01_01_00.set_taborder("20");
                p.Button00_00_01_00_00_02_01_01_00.set_text("작업신고서클립");
                p.Button00_00_01_00_00_02_01_01_00.move("22.00","138","138","54",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div05.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div05.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div05.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.pan00.set_type("horizontal");
                p.pan00.set_spacing("10px 10px 10px 10px");
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div05.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Div00.set_taborder("0");
                p.Div00.set_text("Div00");
                p.Div00.set_cssclass("div_WF_Bg");
                p.Div00.set_fittocontents("height");
                p.Div00.move("0","0","100%","389",null,null);

                p.Div04.set_taborder("2");
                p.Div04.set_text("Div00");
                p.Div04.set_cssclass("div_WF_Bg");
                p.Div04.set_fittocontents("height");
                p.Div04.move("0","1936","100%","600",null,null);

                p.Div05.set_taborder("1");
                p.Div05.set_text("Div00");
                p.Div05.set_cssclass("div_WF_Bg");
                p.Div05.set_fittocontents("height");
                p.Div05.move("0","1239","100%","266",null,null);
            	}
            );
            obj.set_verticalgap("30");
            obj.set_type("vertical");
            obj.set_spacing("0px 400px 0px 0px");
            this.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form
            obj = new Layout("Layout0","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Div00.move("20","27.544","100%","745",null,null);

                p.Div04.move("0","2412","100%","100%",null,null);

                p.Div05.move("0","2412","100%","100%",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_spacing("0px 10px 0px 20px");
            obj.set_flexcrossaxisalign("start");
            obj.set_verticalgap("30");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divQuick.form
            obj = new Layout("default","",0,0,this.divQuick.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btn00.set_taborder("0");
                p.btn00.set_text("기본정보");
                p.btn00.set_cssclass("btn_WF_Quick_S");
                p.btn00.move("17","20","100%","45",null,null);

                p.btn03.set_taborder("1");
                p.btn03.set_text("업로드");
                p.btn03.set_cssclass("btn_WF_Quick");
                p.btn03.move("17.00","110","100%","45",null,null);

                p.btn03_00.set_taborder("3");
                p.btn03_00.set_text("외부연계");
                p.btn03_00.set_cssclass("btn_WF_Quick");
                p.btn03_00.move("17.00","110","100%","45",null,null);

                p.staLine.set_taborder("2");
                p.staLine.set_background("#111111");
                p.staLine.move("17","244","100%","1",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_spacing("20px 17px  0px 17px");
            this.divQuick.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divQuick.form
            obj = new Layout("Layout0","",0,0,this.divQuick.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btn00.set_cssclass("btn_WF_QuickM_S");
                p.btn00.set_fittocontents("width");
                p.btn00.move("17","20","180","45",null,null);

                p.btn03.set_fittocontents("width");
                p.btn03.set_cssclass("btn_WF_QuickM");
                p.btn03.move("17.00","110","180","45",null,null);

                p.btn03_00.set_fittocontents("width");
                p.btn03_00.set_cssclass("btn_WF_QuickM");
                p.btn03_00.move("17.00","110","180","45",null,null);

                p.staLine.set_visible("false");
            	}
            );
            obj.set_type("horizontal");
            obj.set_spacing("14px 0px  0px 0px");
            obj.set_horizontalgap("0");
            obj.set_flexmainaxisalign("start");
            this.divQuick.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divBtn.form
            obj = new Layout("default","",0,0,this.divBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btn00.set_taborder("0");
                p.btn00.set_text("재등록");
                p.btn00.set_cssclass("btn_WF_No");
                p.btn00.move("7","20","100","40",null,null);

                p.btn00_00.set_taborder("1");
                p.btn00_00.set_text("신청");
                p.btn00_00.set_cssclass("btn_WF_Yes");
                p.btn00_00.move("btn00:10","20","100","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_verticalgap("10");
            obj.set_horizontalgap("10");
            this.divBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divBtn.form
            obj = new Layout("Layout0","",0,0,this.divBtn.form,
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
            obj.set_verticalgap("10");
            obj.set_horizontalgap("10");
            this.divBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("파일첨부");

                p.divGuide.set_taborder("0");
                p.divGuide.set_text("div00");
                p.divGuide.set_visible("false");
                p.divGuide.set_cssclass("div_GD_Tip");
                p.divGuide.move("1590.00","135","450","385",null,null);

                p.staState.set_taborder("4");
                p.staState.set_text("표는 필수 입력 사항입니다.");
                p.staState.set_cssclass("sta_WF_EsentialTxt");
                p.staState.move("0","0","100%","30",null,null);

                p.divForm.set_taborder("1");
                p.divForm.set_text("div00");
                p.divForm.set_cssclass("div_WF_QuickFrBg");
                p.divForm.set_visible("true");
                p.divForm.set_fittocontents("height");
                p.divForm.set_formscrollbartype("none none");
                p.divForm.set_formscrolltype("none");
                p.divForm.move("0","staState:0",null,"2112","60",null);

                p.divQuick.set_taborder("2");
                p.divQuick.set_text("div00");
                p.divQuick.set_cssclass("div_WF_QuickMenu");
                p.divQuick.set_fittocontents("height");
                p.divQuick.move(null,"32","296","160","62",null);

                p.divBtn.set_taborder("3");
                p.divBtn.set_text("div00");
                p.divBtn.set_cssclass("div_WF_QuickBtnBg");
                p.divBtn.move(null,"divQuick:0","296","80","62",null);

                p.RaonkUpload.set_taborder("5");
                p.RaonkUpload.set_DevelopLangage("JAVA");
                p.RaonkUpload.set_ExtensionAllowOrLimit("0");
                p.RaonkUpload.set_RunTimes("html5");
                p.RaonkUpload.set_ButtonBarView("0");
                p.RaonkUpload.set_visible("true");
                p.RaonkUpload.set_AllowDuplicationFile("1");
                p.RaonkUpload.set_text("");
                p.RaonkUpload.set_DisableDeleteConfirm("1");
                p.RaonkUpload.set_HandlerUrl("/common/uploadDownload.do");
                p.RaonkUpload.move("226","2170","35.41%","200",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Phone_screen",390,600,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divForm.set_cssclass("div_WF_QuickFrBgM");
                p.divForm.set_text("div00");
                p.divForm.move("0","staState:0","100%","2603",null,null);

                p.divBtn.set_cssclass("div_WF_QuickBtnBgM");
                p.divBtn.move("0","divForm:0",null,"80","0",null);

                p.divQuick.set_cssclass("div_WF_QuickMenuM");
                p.divQuick.move("20","0",null,"80","0",null);

                p.staState.move("20","50",null,"30","20",null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.Div00.form.sampleData01","value","dsGet","sampleData01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.Div00.form.sampleData02","value","dsGet","sampleData02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.Div00.form.sampleData03","value","dsGet","sampleData03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.Div00.form.sampleData04","value","dsGet","sampleData04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.Div00.form.Combo00","value","dsGet","sampleData05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.Div00.form.Combo00_00","value","dsGet","sampleData06");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleWrite.xfdl", function() {
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
        this.validateColumn = [];
        this.objSrv = nexacro.getEnvironment().services["svcUrl"];
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수
        	// 전달받은 파라메터 팝업창과 페이지오픈으로 파라메터 불러오는 방식이 달라짐
        	if(this.opener)
        	{
        		this.param = {
        			"sampleDataId" : this.getOwnerFrame().sampleDataId
        		}
        	} else
        	{
        		this.param = this.getOwnerFrame().form.fvObjArgs;
        	}

        	this.fnInit();

        	this.validateColumn.push({"title" : "업무구분", "com": this.divForm.form.Div00.form.sampleData01});
        	this.validateColumn.push({"title" : "업체기관명", "com": this.divForm.form.Div00.form.sampleData02});
        	this.validateColumn.push({"title" : "건물명", "com": this.divForm.form.Div00.form.sampleData03});
        	this.validateColumn.push({"title" : "크기", "com": this.divForm.form.Div00.form.sampleData04});

        };

        // 페이지에서 라온K업로드 솔루션의 생성 이벤트
        this.RaonkUpload00_RAONKUPLOAD_CreationComplete = function(obj,  paramObj)
        {
        	// 업로드 솔루션이 초기 생성시 업로드 할 경로를 지정해야 한다.
        	// /CMM/YYYY/MM/DD/  <<== CMM은 업무별 폴더 지정이고 기본적으로 /년도/월/일 의 폴더 구조를 갖는다.
        	this.RaonkUpload.SetConfig('FolderNameRule', '/CMM/YYYY/MM/DD/');
        };

        // 파일 업로드 시 에러 발생 이벤트
        this.divForm_Div04_RaonkUpload_RAONKUPLOAD_OnError = function(obj, paramObj)
        {
        	console.log(paramObj);
        };

        // 파일 추가 시 발생 이벤트
        // 파일 추가 시 타입을 정해야 한다.(사업자등록증, 증빙자료, 첨부파일, 등등)
        this.RaonkUpload00_RAONKUPLOAD_AfterAddAllFile = function(obj, paramObj)
        {
        	// 파일 카테고리 초기화
        	this.gvUploadCategory = "";
        };

        this.RaonkUpload_RAONKUPLOAD_BeforeAddFile = function(obj, paramObj)
        {
        	if(this.gvUploadCategory == 'bizNumber')
        	{
        		if(this.dsFile1.rowcount >= 1)
        		{
        			this.gfnAlertMsg("MSG_001", "msgCallback");
        			//this.gfnAlertMsg("beforeAddFile", "파일 1개만 업로드 가능 합니다.", "msgCallback");
        			return false;
        		}
        	}

        	return true;
        };

        this.RaonkUpload00_RAONKUPLOAD_AfterAddFile = function(obj, paramObj)
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
        	if(this.gvUploadCategory == "bizNumber")
        	{
        		var nIdx = this.dsFile1.addRow();
        		this.dsFile1.setColumn(nIdx, "fullName", paramObj.userdata.strName + ' (' + paramObj.userdata.nSize + ')');
        		this.dsFile1.setColumn(nIdx, "orgnlFileNm", paramObj.userdata.strName);
        		this.dsFile1.setColumn(nIdx, "fileSz", paramObj.userdata.nSize);
        		this.dsFile1.setColumn(nIdx, "atflMngSno", paramObj.userdata.nIndex);
        		this.dsFile1.setColumn(nIdx, "colId", this.gvUploadCategory);
        		this.dsFile1.setColumn(nIdx, "atflMngNo", atflMngNo);

        	} else if(this.gvUploadCategory == "telNumber")
        	{
        		var nIdx = this.dsFile2.addRow();
        		this.dsFile2.setColumn(nIdx, "fullName", paramObj.userdata.strName + ' (' + paramObj.userdata.nSize + ')');
        		this.dsFile2.setColumn(nIdx, "orgnlFileNm", paramObj.userdata.strName);
        		this.dsFile2.setColumn(nIdx, "fileSz", paramObj.userdata.nSize);
        		this.dsFile2.setColumn(nIdx, "atflMngSno", paramObj.userdata.nIndex);
        		this.dsFile2.setColumn(nIdx, "colId", this.gvUploadCategory);
        		this.dsFile2.setColumn(nIdx, "atflMngNo", atflMngNo);
        	} else {
        		var nIdx = this.dsFile2.addRow();
        		this.dsFile2.setColumn(nIdx, "fullName", paramObj.userdata.strName + ' (' + paramObj.userdata.nSize + ')');
        		this.dsFile2.setColumn(nIdx, "orgnlFileNm", paramObj.userdata.strName);
        		this.dsFile2.setColumn(nIdx, "fileSz", paramObj.userdata.nSize);
        		this.dsFile2.setColumn(nIdx, "atflMngSno", paramObj.userdata.nIndex);
        		this.dsFile2.setColumn(nIdx, "colId", this.gvUploadCategory);
        		this.dsFile2.setColumn(nIdx, "atflMngNo", atflMngNo);
        	}
        };

        //파일삭제시 이벤트
        // this.RaonkUpload_RAONKUPLOAD_AfterDeleteFile = function(obj:nexacro.RaonkUpload, paramObj:nexacro.RaonkUploadEventInfo)
        // {
        // 	var colId = paramObj.userdata.strCustomValue;
        // 	var uniqueId = paramObj.userdata.strKey;
        //
        // 	var sRow = this.dsFile.findRow("colId", paramObj.userdata.strCustomValue);
        // 	var atflMngNo = this.dsFile.getColumn(sRow, "atflMngNo");
        //
        // 	var aRow = this.dsDelFile.addRow();
        // 	this.dsDelFile.setColumn(aRow, "atflMngNo", atflMngNo);
        // 	this.dsDelFile.setColumn(aRow, "uniqueId", uniqueId);
        // };

        // 파일 업로드 완료 이벤트
        this.RaonkUpload00_RAONKUPLOAD_UploadComplete = function(obj, paramObj)
        {
        	var allListArray = this.RaonkUpload.GetListInfo("json");
        	// 파일 업로드 후 첨부파일관리번호를 얻기 위한 함수
        	this.gfnUploadComplete("uploadComplete", allListArray, "dsFile", "fnCallback");
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
         	var sWinId = this.objApp.gdsOpenMenu.lookupAs(this.FRAME_MENUCOLUMNS.menuId, this.getOwnerFrame().form.fvMenuId.substring(0, 8), this.FRAME_MENUCOLUMNS.winId);
         	var objForm = this.objApp.gvFrsWork.all[sWinId];
        	objForm.form.divWork.form.cfnSearch(1);
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        /**
        	strSvcId 		// transaction을 구분하기 위한 svc id값
        	strSvcUrl 		// trabsaction을 요청할 주소
        	inData 			// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        	outData 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        	strArg 			// 입력값으로 보낼 arguments, strFormData="20120607"
        	callBackFnc 	// transaction의 결과를 받을 Function 이름
        	isAsync 		// 비동기통신 여부 [생략가능]
        **/

        // 데이터 조회
        this.selectTransaction = function()
        {
        	var strSvcId    = "select";
        	var strSvcUrl   = "sample/sampleWrite.do";
        	var inData      = "";
        	var outData     = "dsGet=dsGet dsFile1=dsFile1 dsFile2=dsFile2";
        	var strArg      = "sampleDataId=" + this.param.sampleDataId;
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 공통 코드 조회
        this.selectCmmTransaction = function()
        {
        	var strSvcId    = "combo";
        	var strSvcUrl   = "common/cmmCode.do";
        	var inData      = "";
        	var outData     = "dsCombo=dsCombo";
        	var strArg      = "cdTypeId=Y07 comboTy=S";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= false;

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
        			this.gfnDownloadSetting(this.RaonkUpload, this.dsFile1);
        			this.gfnDownloadSetting(this.RaonkUpload, this.dsFile2);

        			this.dsFile.insertRow();
        			this.dsFile.setColumn(0, "atflMngNo", this.dsFile1.getColumn(0, "atflMngNo"));
        			this.dsFile.setColumn(0, "colId", this.dsFile1.getColumn(0, "colId"));
        			this.dsFile.insertRow();
        			this.dsFile.setColumn(0, "atflMngNo", this.dsFile2.getColumn(0, "atflMngNo"));
        			this.dsFile.setColumn(0, "colId", this.dsFile2.getColumn(0, "colId"));
        			break;

        		case "combo":

        			break;

        		case "save":
        			var gvRetMsg = this.objApp.getVariable("gvRetMsg");
        /*			this.gfnAlertMsg("save", gvRetMsg, "msgCallback");*/
        			this.gfnAlertMsg("MSG_001", "msgCallback");


        			break;

        		case "uploadComplete":
        			// 파일 업로드가 완료 된 후 첨부파일 과 같이 데이터 저장
        			console.log(this.dsFile.saveJSON());
        			this.saveTransaction();
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
        			var obj = {
        				"bsnsSeCd" : "COM",		// 업무구분코드
        				"prgrmId" : "SAMPLEWRITE", 				// 프로그램ID (화면 ID)
        				"thumnail" : "Y" 				// 이미지 썸네일 여부 (이미지 파일일땐 무시옵션)
        			}

        			var str = JSON.stringify(obj);
        			this.RaonkUpload.AddFormData('params', str);
        			this.RaonkUpload.Transfer();
        			//this.gvCopyFileBool = false;
        		}
        	} else if(sPopupId == "save_confirm_re")
        	{
        		if(oRtn.result == "Y")
        		{
        			var obj = {
        				"bsnsSeCd" : "COM",				// 업무구분코드
        				"prgrmId" : "SAMPLEWRITE", 		// 프로그램ID (화면 ID)
        				"thumnail" : "Y" 				// 이미지 썸네일 여부 (이미지 파일일땐 무시옵션)
        			}

        			this.gvCopyFileBool = true;
        			var str = JSON.stringify(obj);
        			this.RaonkUpload.AddFormData('params', str);
        			this.RaonkUpload.Transfer();

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
        	} else if(sPopupId == "file_all_del1")
        	{
        		if(oRtn.result == "Y")
        		{
        			this.gfnDeleteAllFile(this.RaonkUpload, this.dsFile1);
        		}
        	} else if(sPopupId == "file_all_del2")
        	{
        		if(oRtn.result == "Y")
        		{
        			this.gfnDeleteAllFile(this.RaonkUpload, this.dsFile2);
        		}
        	} else if(sPopupId == "file_del1")
        	{
        		if(oRtn.result == "Y")
        		{
        			this.gfnDeleteFile(this.RaonkUpload, this.dsFile1, oRtn.paramArg);
        		}
        	} else if(sPopupId == "file_del2")
        	{
        		if(oRtn.result == "Y")
        		{
        			this.gfnDeleteFile(this.RaonkUpload, this.dsFile2, oRtn.paramArg);
        		}
        	}
        };

        //API 콜백은 업데이트 중
        this.apiCallback = function(svcID, ret)
        {
        	console.log(svcID);
        	console.log(ret);

        	switch(svcID)
        	{
        		case "tax":
        			if(ret != "")
        			{
        				console.log(ret);
        			}
        			break;
        		case "insideMail":
        			this.gfnAlertMsg("insideMail", "MSG_027", "", "msgCallback");

        			break;
        		case "outsideMail":
        			this.gfnAlertMsg("outsideMail", "MSG_027", "", "msgCallback");

        			break;
        	}
        }

        this.fnPopupCallback = function(sPopupId, sRtn)
        {
        	if (this.gfnIsNull(sRtn)) return;

        	var objRtn = JSON.parse(sRtn);
        	console.log(sPopupId);
        	console.log(objRtn);

        	if(sPopupId =="userSearch")
        	{

        	} else if(sPopupId =="corpSearch")
        	{

        	} else if(sPopupId =="deptSearch")
        	{

        	} else if(sPopupId =="withAuth")
        	{

        	} else if(sPopupId =="hpAuth")
        	{

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
        		this.selectCmmTransaction();
        	}
        }

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        // 상세 페이지 옆 버튼 부분 플로팅 스크롤
        this.sampleWrite_onvscroll = function(obj,e)
        {
        	// 버튼 크기에 맞춰 수치를 알아내야 한다.
        	if(this.objApp.screenid == "Desktop_screen") {
        		this.divQuick.top = e.pos+32;
        		this.divBtn.top = e.pos+188;
        	}
        };

        this.divBtn_btn00_00_onclick = function(obj,e)
        {
        	//if(this.gfnDsIsValidated(this.validateColumn)) {
        		this.gfnConfirmMsg("save_confirm", "MSG_001", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        	//}
        };

        this.divForm_Div05_Button00_00_00_00_00_onclick = function(obj,e)
        {
        	var bsno = "522-88-01055";

        	this.gfn_Api_nationalTax(
        		"tax"		// API ID
        		, bsno		// 사업자번호
        		, "apiCallback");	//콜백명


        // 	b_no :  "5228801055"				//사업자번호
        // 	b_stt : "계속사업자"					//사업자상태
        // 	b_stt_cd : "01"						//사업자상태코드
        // 	end_dt : ""							//사업자폐업일자
        // 	invoice_apply_dt : ""
        // 	rbf_tax_type : "해당없음"
        // 	rbf_tax_type_cd : "99"
        // 	tax_type : "부가가치세 일반과세자"
        // 	tax_type_cd : "01"
        // 	tax_type_change_dt : ""
        // 	utcc_yn : "N"
        };

        this.divForm_Div05_Button00_00_00_onclick = function(obj,e)
        {
        //	dsInsideMail dataset
        // 	fromEmpId		// 받는사람 사용자ID
        // 	toEmpId			// 보내는사람 사용자ID
        // 	title			// 제목
        // 	contentId		// 내용 템플릿ID

        	var fromEmpId = "81014uuu";
        	var toEmpId = "81014uuu";
        	var title = "TEST";

        	var contentId = "ELE.Mail.Content";
        	var http = this.objSrv.url;
        	var id = "testId";
        	var tas_name = "test_tas_name";
        	var cat_name = "test_cat_name";
        	var t_roomno = "test_t_roomno";
        	var t_req_emp_name = "test_t_req_emp_name";
        	var t_req_dttm = "test_t_req_dttm";
        	var ass_emp_name = "test_ass_emp_name";
        	var ass_wog_name = "test_ass_wog_name";

        	this.dsInsideMail.addColumn("http", "STRING");
        	this.dsInsideMail.addColumn("id", "STRING");
        	this.dsInsideMail.addColumn("tas_name", "STRING");
        	this.dsInsideMail.addColumn("cat_name", "STRING");
        	this.dsInsideMail.addColumn("t_roomno", "STRING");
        	this.dsInsideMail.addColumn("t_req_emp_name", "STRING");
        	this.dsInsideMail.addColumn("t_req_dttm", "STRING");
        	this.dsInsideMail.addColumn("ass_emp_name", "STRING");
        	this.dsInsideMail.addColumn("ass_wog_name", "STRING");

        	this.dsInsideMail.setColumn(0, "fromEmpId", fromEmpId);
        	this.dsInsideMail.setColumn(0, "toEmpId", toEmpId);
        	this.dsInsideMail.setColumn(0, "title", title);
        	this.dsInsideMail.setColumn(0, "contentId", contentId);
        	this.dsInsideMail.setColumn(0, "http", http);
        	this.dsInsideMail.setColumn(0, "id", id);
        	this.dsInsideMail.setColumn(0, "tas_name", tas_name);
        	this.dsInsideMail.setColumn(0, "cat_name", cat_name);
        	this.dsInsideMail.setColumn(0, "t_roomno", t_roomno);
        	this.dsInsideMail.setColumn(0, "t_req_emp_name", t_req_emp_name);
        	this.dsInsideMail.setColumn(0, "t_req_dttm", t_req_dttm);
        	this.dsInsideMail.setColumn(0, "ass_emp_name", ass_emp_name);
        	this.dsInsideMail.setColumn(0, "ass_emp_name", ass_emp_name);
        	this.dsInsideMail.setColumn(0, "ass_wog_name", ass_wog_name);

        	this.gfn_Api_insideMail(
        		"insideMail"		// API ID
        		, "dsInsideMail"	// 데이터셋명
        		, "apiCallback");	// 콜백명
        };

        /*******************************************************************************************************************************
         * 각 RAONK 별 EVENT 영역
        *******************************************************************************************************************************/
        // 파일 추가
        this.divForm_Div04_btn_file_1_onclick = function(obj,e)
        {
        	// 데이터의 첨부파일 관리번호 입력 컬럼명
        	this.gvUploadCategory = "bizNumber";		// 컬럼ID
        	this.RaonkUpload.OpenFileDialog();
        };

        // 파일 그리드 클릭 이벤트
        this.divForm_Div04_Grid00_oncellclick = function(obj,e)
        {
        	if(e.col == 1) 	// 삭제 버튼 클릭
        	{
        		var param = {
        			"row" : e.row,
        			"col" : e.col,
        			"colId" : "bizNumber"
        		};
        		this.gfnConfirmMsg("file_del1", "MSG_001", "msgCallback", ["확인", "취소"], ["Y", "N"], param);
        	} else if(e.col == 0) // 파일명 클릭
        	{
        		this.gfnSelectFile(this.RaonkUpload, this.dsFile1, e);
        	}
        };

        // 파일 그리드 더블클릭 이벤트
        this.divForm_Div04_Grid00_oncelldblclick = function(obj,e)
        {
        	if(e.col == 0) 	// 파일명을 더블클릭 시 다운로드
        	{
        		this.gfnDownloadFile(this.RaonkUpload, this.dsFile1, e);
        	}
        };

        this.divForm_Div04_Grid00_01_oncellclick = function(obj,e)
        {
        	if(e.col == 1) 	// 삭제 버튼 클릭
        	{
        		var param = {
        			"row" : e.row,
        			"col" : e.col,
        			"colId" : "telNumber"
        		};

        		this.gfnConfirmMsg("file_del2", "MSG_002", "msgCallback", ["확인", "취소"], ["Y", "N"], param);
        	} else if(e.col == 0) // 파일명 클릭
        	{
        		this.gfnSelectFile(this.RaonkUpload, this.dsFile2, e);
        	}
        };

        this.divForm_Div04_Grid00_01_oncelldblclick = function(obj,e)
        {
        	if(e.col == 0) 	// 파일명을 더블클릭 시 다운로드
        	{
        		this.gfnDownloadFile(this.RaonkUpload, this.dsFile2, e);
        	}
        };

        this.divForm_Div04_btn_del_file_1_onclick = function(obj,e)
        {
        	this.gfnConfirmMsg("file_all_del1", "MSG_002", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        };

        this.divForm_Div04_btn_del_file_2_onclick = function(obj,e)
        {
        	this.gfnConfirmMsg("file_all_del2", "MSG_002", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        };



        this.divForm_Div05_Button00_00_01_onclick = function(obj,e)
        {
        	var sTitle = "회사검색";		// 팝업 파이틀
        	var objArg   = {};			// 팝업창에 보낸 파라메터

        	var objOption = {
        		popuptype: "modal"		// modal, modaless
         		, width: 1221			// 팝업창 width
         		, height: 650			// 팝업창 height
        		, autosize: false		// 사이즈 자동 여부
        		, title: sTitle			// 팝업타이틀
        		, resize: false			// 사이즈 조정 여부
        		, titlebar: true		// 팝업 타이틀바 여부
        	};
        	var sPopupCallBack = "fnPopupCallback";	// 콜백명

        	this.gfnOpenPopup(
        		"corpSearch"		// 팝업ID
        		, "work::COM/crtr/COM100P01.xfdl"	// 팝업 호출 화면
        		, objArg, sPopupCallBack, objOption);
        };

        this.divForm_Div05_Button00_00_01_00_onclick = function(obj,e)
        {
        	var sTitle = "사용자검색";		// 팝업 파이틀
        	var objArg   = {};			// 팝업창에 보낸 파라메터

        	var objOption = {
        		popuptype: "modal"		//modal,modaless
         		, width: 1221			// 팝업창 width
         		, height: 650			// 팝업창 height
        		, autosize: false		// 사이즈 자동 여부
        		, title: sTitle			// 팝업타이틀
        		, resize: false			// 사이즈 조정 여부
        		, titlebar: true		// 팝업 타이틀바 여부
        	};
        	var sPopupCallBack = "fnPopupCallback";	// 콜백명

        	this.gfnOpenPopup("userSearch"	// 팝업ID
        	, "work::COM/crtr/COM100P02.xfdl" // 팝업 호출 화면
        	, objArg, sPopupCallBack, objOption);
        };

        this.divForm_Div05_Button00_00_01_00_00_onclick = function(obj,e)
        {
        	var sTitle = "부서검색";		// 팝업 파이틀
        	var objArg   = {};			// 팝업창에 보낸 파라메터

        	var objOption = {
        		popuptype: "modal"		//modal,modaless
         		, width: 1221			// 팝업창 width
         		, height: 650			// 팝업창 height
        		, autosize: false		// 사이즈 자동 여부
        		, title: sTitle			// 팝업타이틀
        		, resize: false			// 사이즈 조정 여부
        		, titlebar: true		// 팝업 타이틀바 여부
        	};
        	var sPopupCallBack = "fnPopupCallback";	// 콜백명

        	this.gfnOpenPopup("deptSearch"		// 팝업ID
        	, "work::COM/crtr/COM100P03.xfdl" 	// 팝업 호출 화면
        	, objArg, sPopupCallBack, objOption);
        };

        this.divForm_Div05_Button00_00_onclick = function(obj,e)
        {
        	var sTitle = "본인인증";		// 팝업 파이틀
        	var objArg   = {};			// 팝업창에 보낸 파라메터

        	var objOption = {
        		popuptype: "modal"	//modal,modeless
         		, width: 0			// 팝업창 width
         		, height: 0			// 팝업창 height
        		, autosize: false		// 사이즈 자동 여부
        		, title: sTitle			// 팝업타이틀
        		, resize: false			// 사이즈 조정 여부
        		, titlebar: false		// 팝업 타이틀바 여부
        	};
        	var sPopupCallBack = "fnPopupCallback";		// 콜백명

        	this.gfnOpenPopup("hpAuth"		// 팝업ID
        	, "work::COM/cert/hpAuthPopup.xfdl"	// 팝업 호출 화면
        	, objArg, sPopupCallBack, objOption);
        };


        this.divForm_Div05_Button00_00_01_00_00_00_onclick = function(obj,e)
        {

        	var sTitle = "간편인증";		// 팝업 파이틀
        	var objArg   = {};			// 팝업창에 보낸 파라메터

        	var objOption = {
        		popuptype: "modal"		//modal,modaless
        // 		, width: 700			// 팝업창 width
        // 		, height: 700			// 팝업창 height
        		, autosize: false		// 사이즈 자동 여부
        		, title: sTitle			// 팝업타이틀
        		, resize: false			// 사이즈 조정 여부
        		, titlebar: true		// 팝업 타이틀바 여부
        	};
        	var sPopupCallBack = "fnPopupCallback";		// 콜백명

        	this.gfnOpenPopup("withAuth"			// 팝업ID
        	, "work::COM/cert/withAuthPopup.xfdl"	// 팝업 호출 화면
        	, objArg, sPopupCallBack, objOption);
        };

        this.divForm_Div05_Button00_00_01_00_00_01_onclick = function(obj,e)
        {
        	var sTitle = "주소검색";		// 팝업 파이틀
        	var objArg   = {};			// 팝업창에 보낸 파라메터

        	var objOption = {
        		popuptype: "modal"		//modal,modaless
        // 		, width: 700			// 팝업창 width
        // 		, height: 700			// 팝업창 height
        		, autosize: false		// 사이즈 자동 여부
        		, title: sTitle			// 팝업타이틀
        		, resize: false			// 사이즈 조정 여부
        		, titlebar: true		// 팝업 타이틀바 여부
        	};
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup("addr"				// 팝업ID
        	, "work::COM/cert/addrPopup.xfdl"		// 팝업 호출 화면
        	, objArg, sPopupCallBack, objOption);
        };

        this.divForm_Div05_Button00_00_01_00_00_02_onclick = function(obj,e)
        {
        	var sTitle = "현황도";		// 팝업 파이틀
        	var objArg   = {
        //		'구조물ID':''  // 임대배정에서 현황도 팝업 띄울때 필요한 파라메터
        	};			// 팝업창에 보낸 파라메터

        	var objOption = {
        		popuptype: "modaless"		//modal,modaless
         		, width: 1300			// 팝업창 width
         		, height: 1000			// 팝업창 height
        		, autosize: false		// 사이즈 자동 여부
        		, title: sTitle			// 팝업타이틀
        		, resize: true			// 사이즈 조정 여부
        		, titlebar: true		// 팝업 타이틀바 여부
        	};
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup("stsmap", "work::COM/stsmap/COM018P04.xfdl", objArg, sPopupCallBack, objOption);
        };

        this.divForm_Div05_Button00_00_00_00_onclick = function(obj,e)
        {
        	//	dsOutsideMail dataset
        	// 	from		// 받는사람 사용자ID
        	// 	to			// 보내는사람 사용자ID
        	// 	cc			// 참조
        	// 	subject		// 제목
        	// 	content		// 내용 템플릿ID

        	var from = "81014uuu";
        	var to = "81014uuu";
        	var subject = "TEST";
        	var cc = "";

        	var contentId = "ELE.Mail.Content";
        	var http = this.objSrv.url;
        	var id = "testId";
        	var tas_name = "test_tas_name";
        	var cat_name = "test_cat_name";
        	var t_roomno = "test_t_roomno";
        	var t_req_emp_name = "test_t_req_emp_name";
        	var t_req_dttm = "test_t_req_dttm";
        	var ass_emp_name = "test_ass_emp_name";
        	var ass_wog_name = "test_ass_wog_name";

        	this.dsOutsideMail.addColumn("http", "STRING");
        	this.dsOutsideMail.addColumn("id", "STRING");
        	this.dsOutsideMail.addColumn("tas_name", "STRING");
        	this.dsOutsideMail.addColumn("cat_name", "STRING");
        	this.dsOutsideMail.addColumn("t_roomno", "STRING");
        	this.dsOutsideMail.addColumn("t_req_emp_name", "STRING");
        	this.dsOutsideMail.addColumn("t_req_dttm", "STRING");
        	this.dsOutsideMail.addColumn("ass_emp_name", "STRING");
        	this.dsOutsideMail.addColumn("ass_wog_name", "STRING");

        	this.dsOutsideMail.setColumn(0, "from", from);
        	this.dsOutsideMail.setColumn(0, "to", to);
        	this.dsOutsideMail.setColumn(0, "subject", subject);
        	this.dsOutsideMail.setColumn(0, "cc", cc);
        	this.dsOutsideMail.setColumn(0, "contentId", contentId);

        	this.dsOutsideMail.setColumn(0, "http", http);
        	this.dsOutsideMail.setColumn(0, "id", id);
        	this.dsOutsideMail.setColumn(0, "tas_name", tas_name);
        	this.dsOutsideMail.setColumn(0, "cat_name", cat_name);
        	this.dsOutsideMail.setColumn(0, "t_roomno", t_roomno);
        	this.dsOutsideMail.setColumn(0, "t_req_emp_name", t_req_emp_name);
        	this.dsOutsideMail.setColumn(0, "t_req_dttm", t_req_dttm);
        	this.dsOutsideMail.setColumn(0, "ass_emp_name", ass_emp_name);
        	this.dsOutsideMail.setColumn(0, "ass_emp_name", ass_emp_name);
        	this.dsOutsideMail.setColumn(0, "ass_wog_name", ass_wog_name);


        	this.gfn_Api_outsideMail(
        		"outsideMail"		// API ID
        		, "dsOutsideMail"	// 데이터셋명
        		, "apiCallback");	// 콜백명
        };



        this.divForm_Div05_Button00_00_01_00_00_02_00_onclick = function(obj,e)
        {

        	//	dsSms dataset
        	// 	send_num		// 보내는사람 전화번호
        	// 	recipient_num	// 받는사람 전화번호
        	// 	msg_cont_rep	// 제목
        	// 	template		// 내용 템플릿ID

        	var send_num = "15881234";
        	var recipient_num = "820111234777";
        	var contentId = "TSP_36R1";

        	var 신청계정구분 = "신청계정구분";
        	var 아이디 = "아이디";
        	var 임시비밀번호 = "임시비밀번호";
        	var 문의처연락처 = "문의처연락처";


        	this.dsSms.addColumn("신청계정구분", "STRING");
        	this.dsSms.addColumn("아이디", "STRING");
        	this.dsSms.addColumn("임시비밀번호", "STRING");
        	this.dsSms.addColumn("문의처연락처", "STRING");

        	this.dsSms.setColumn(0, "send_num", send_num);
        	this.dsSms.setColumn(0, "recipient_num", recipient_num);
        	this.dsSms.setColumn(0, "contentId", contentId);
        	this.dsSms.setColumn(0, "신청계정구분", 신청계정구분);
        	this.dsSms.setColumn(0, "아이디", 아이디);
        	this.dsSms.setColumn(0, "임시비밀번호", 임시비밀번호);
        	this.dsSms.setColumn(0, "문의처연락처", 문의처연락처);


        	this.gfn_Api_sms(
        		"sms"		// API ID
        		, "dsSms"	// 데이터셋명
        		, "apiCallback");	// 콜백명

        };

        this.divForm_Div05_Button00_onclick = function(obj,e)
        {
        	//	atflMngNo		// 첨부파일 관리번호
        	//	atflMngSno		// 첨부파일 상세번호

        	this.gfn_Api_ocr(
        		"ocr"		// API ID
        		, "dsOcr"	// 데이터셋명
        		, "apiCallback");	// 콜백명
        };

        this.divForm_Div05_Button00_00_01_00_00_02_01_onclick = function(obj,e)
        {
        	var sTitle = "문서함 파일등록";		// 팝업 파이틀
        	var objArg   = {};			// 팝업창에 보낸 파라메터

        	var objOption = {
        		popuptype: "modal"		//modal,modaless
         		, width: 800			// 팝업창 width
         		, height: 600			// 팝업창 height
        		, autosize: false		// 사이즈 자동 여부
        		, title: sTitle			// 팝업타이틀
        		, resize: false			// 사이즈 조정 여부
        		, titlebar: true		// 팝업 타이틀바 여부
        	};
        	var sPopupCallBack = "fnPopupCallback";		// 콜백명

        	this.gfnOpenPopup("doc"			// 팝업ID
        	, "work::COM/doc/COM013P03.xfdl"	// 팝업 호출 화면
        	, objArg, sPopupCallBack, objOption);
        };

        this.divForm_Div05_download_btn_onclick = function(obj,e)
        {
        	this.gfnNormalDownload("COM000M00", "ty3");
        };

        this.divForm_Div05_viewer_btn_onclick = function(obj,e)
        {
        	var sTitle = "뷰어";		// 팝업 파이틀
        	var objArg   = {
        		"workNo" : "COM000M00",
        		"workType" : "ty1"
        	};

        	var objOption = {
        		popuptype: "modal"		//modal,modaless
         		, width: 800			// 팝업창 width
         		, height: 200			// 팝업창 height
        		, autosize: false		// 사이즈 자동 여부
        		, title: sTitle			// 팝업타이틀
        		, resize: true			// 사이즈 조정 여부
        		, titlebar: true		// 팝업 타이틀바 여부
        	};
        	var sPopupCallBack = "fnPopupCallback";		// 콜백명

        	this.gfnOpenPopup("doc", "work::COM/util/viewer/imageViewer.xfdl", objArg, sPopupCallBack, objOption);
        };

        this.clip_report_click = function(obj,e)
        {
        	var sTitle = "리포트";				// 팝업 타이틀
        	var objArg   = {					// 팝업 파라메터 (파트별 단위)
        		reportName : 'tsp/D_111.crf',
        		params : {
        			"dataNo" : '111',
        			"name" : 'name'
        		}
        	};

        	var objOption = {
        		popuptype: "modaless"					// modal,modaless
        		//, width: 700
        		//, height: 394						// width,height 지정하지 않음 popup form size적용
        		, autosize: true					// 자동 사이즈
        		, title: sTitle
        		, resize: true
        		, titlebar: true
        	};
        	var sPopupCallBack = "popupCallback";

        	this.gfnOpenPopup("reportPopup", "work::COM/util/report/report.xfdl", objArg, sPopupCallBack, objOption);
        };

        this.divForm_Div05_viewer_btn00_onclick = function(obj,e)
        {
        	var sTitle = "PDF뷰어";		// 팝업 파이틀
        	var objArg   = {
        		"workNo" : "COM000M00",
        		"workType" : "ty2"
        	};

        	var objOption = {
        		popuptype: "modal"		//modal,modaless
         		//, width: 800			// 팝업창 width
         		//, height: 200			// 팝업창 height
        		, autosize: false		// 사이즈 자동 여부
        		, title: sTitle			// 팝업타이틀
        		, resize: true			// 사이즈 조정 여부
        		, titlebar: true		// 팝업 타이틀바 여부
        	};
        	var sPopupCallBack = "fnPopupCallback";		// 콜백명

        	this.gfnOpenPopup("doc", "work::COM/util/viewer/imageViewer.xfdl", objArg, sPopupCallBack, objOption);
        };

        this.divForm_Div04_btn_file_2_00_00_onclick = function(obj,e)
        {
        	this.gvUploadCategory = "telNumber1";
        	this.RaonkUpload.OpenFileDialog();
        };

        this.divForm_Div04_btn_file_2_00_onclick = function(obj,e)
        {
        	this.gvUploadCategory = "telNumber2";
        	this.RaonkUpload.OpenFileDialog();
        };

        this.handy_report_click = function(obj,e)
        {
        	var sTitle = "핸디뷰어";		// 팝업 파이틀
        	var objArg   = {
        		"K" : "1",
        		"formid" : "0000000062",
        		"empcode" : "P99992",
        		"deptcode" : "",
        		"miskey" : "test_key"
        	};

        	var objOption = {
        		popuptype: "modal"	//modal,modeless
         		, width: 0			// 팝업창 width
         		, height: 0			// 팝업창 height
        		, autosize: false		// 사이즈 자동 여부
        		, title: sTitle			// 팝업타이틀
        		, resize: false			// 사이즈 조정 여부
        		, titlebar: false		// 팝업 타이틀바 여부
        	};
        	var sPopupCallBack = "fnPopupCallback";		// 콜백명

        	this.gfnOpenPopup("hpAuth", "work::COM/cert/handyPopup.xfdl", objArg, sPopupCallBack, objOption);

        };

        this.cst_report_click = function(obj,e)
        {
        	var sTitle = "작업신고서 리포트";				// 팝업 타이틀
        	var objArg   = {					// 팝업 파라메터 (파트별 단위)
        		reportName : 'tsp/D_741_TEST.crf',
        		params : {
        			"dataNo" : '111',
        			"name" : 'name'
        		}
        	};

        	var objOption = {
        		popuptype: "modaless"					// modal,modaless
        		//, width: 700
        		//, height: 394						// width,height 지정하지 않음 popup form size적용
        		, autosize: true					// 자동 사이즈
        		, title: sTitle
        		, resize: true
        		, titlebar: true
        	};
        	var sPopupCallBack = "popupCallback";

        	this.gfnOpenPopup("reportPopup", "work::COM/util/report/report.xfdl", objArg, sPopupCallBack, objOption);
        };

        this.divBtn_btn00_onclick = function(obj,e)
        {
        	this.gfnConfirmMsg("save_confirm_re", "MSG_001", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onvscroll",this.sampleWrite_onvscroll,this);
            this.divForm.form.Div00.form.sampleData01.addEventHandler("onchanged",this.divForm_Div00_edt00_onchanged,this);
            this.divForm.form.Div00.form.Combo00.addEventHandler("onitemchanged",this.divForm_Div00_Combo00_onitemchanged,this);
            this.divForm.form.Div04.form.btn_file_1.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.divForm.form.Div04.form.btn_del_file_1.addEventHandler("onclick",this.divForm_Div04_btn_del_file_1_onclick,this);
            this.divForm.form.Div04.form.Grid00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.divForm.form.Div04.form.Grid00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.Div04.form.btn_file_2_00.addEventHandler("onclick",this.divForm_Div04_btn_file_2_00_onclick,this);
            this.divForm.form.Div04.form.btn_del_file_2.addEventHandler("onclick",this.divForm_Div04_btn_del_file_2_onclick,this);
            this.divForm.form.Div04.form.Grid00_01.addEventHandler("oncellclick",this.divForm_Div04_Grid00_01_oncellclick,this);
            this.divForm.form.Div04.form.Grid00_01.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_01_oncelldblclick,this);
            this.divForm.form.Div04.form.btn_file_2_00_00.addEventHandler("onclick",this.divForm_Div04_btn_file_2_00_00_onclick,this);
            this.divForm.form.Div05.form.Button00.addEventHandler("onclick",this.divForm_Div05_Button00_onclick,this);
            this.divForm.form.Div05.form.Button00_00.addEventHandler("onclick",this.divForm_Div05_Button00_00_onclick,this);
            this.divForm.form.Div05.form.Button00_00_00.addEventHandler("onclick",this.divForm_Div05_Button00_00_00_onclick,this);
            this.divForm.form.Div05.form.Button00_00_00_00.addEventHandler("onclick",this.divForm_Div05_Button00_00_00_00_onclick,this);
            this.divForm.form.Div05.form.Button00_00_00_00_00.addEventHandler("onclick",this.divForm_Div05_Button00_00_00_00_00_onclick,this);
            this.divForm.form.Div05.form.Button00_00_01.addEventHandler("onclick",this.divForm_Div05_Button00_00_01_onclick,this);
            this.divForm.form.Div05.form.Button00_00_01_00.addEventHandler("onclick",this.divForm_Div05_Button00_00_01_00_onclick,this);
            this.divForm.form.Div05.form.Button00_00_01_00_00.addEventHandler("onclick",this.divForm_Div05_Button00_00_01_00_00_onclick,this);
            this.divForm.form.Div05.form.Button00_00_01_00_00_00.addEventHandler("onclick",this.divForm_Div05_Button00_00_01_00_00_00_onclick,this);
            this.divForm.form.Div05.form.Button00_00_01_00_00_01.addEventHandler("onclick",this.divForm_Div05_Button00_00_01_00_00_01_onclick,this);
            this.divForm.form.Div05.form.Button00_00_01_00_00_02.addEventHandler("onclick",this.divForm_Div05_Button00_00_01_00_00_02_onclick,this);
            this.divForm.form.Div05.form.Button00_00_01_00_00_02_00.addEventHandler("onclick",this.divForm_Div05_Button00_00_01_00_00_02_00_onclick,this);
            this.divForm.form.Div05.form.viewer_btn.addEventHandler("onclick",this.divForm_Div05_viewer_btn_onclick,this);
            this.divForm.form.Div05.form.download_btn.addEventHandler("onclick",this.divForm_Div05_download_btn_onclick,this);
            this.divForm.form.Div05.form.Button00_00_01_00_00_02_01.addEventHandler("onclick",this.clip_report_click,this);
            this.divForm.form.Div05.form.Button00_00_01_00_00_02_01_00.addEventHandler("onclick",this.divForm_Div05_Button00_00_01_00_00_02_01_onclick,this);
            this.divForm.form.Div05.form.viewer_btn00.addEventHandler("onclick",this.divForm_Div05_viewer_btn00_onclick,this);
            this.divForm.form.Div05.form.Button00_00_01_00_00_02_01_01.addEventHandler("onclick",this.handy_report_click,this);
            this.divForm.form.Div05.form.Button00_00_01_00_00_02_01_01_00.addEventHandler("onclick",this.cst_report_click,this);
            this.divBtn.form.btn00.addEventHandler("onclick",this.divBtn_btn00_onclick,this);
            this.divBtn.form.btn00_00.addEventHandler("onclick",this.divBtn_btn00_00_onclick,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterAddFile",this.RaonkUpload00_RAONKUPLOAD_AfterAddFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_CreationComplete",this.RaonkUpload00_RAONKUPLOAD_CreationComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_UploadComplete",this.RaonkUpload00_RAONKUPLOAD_UploadComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_OnError",this.divForm_Div04_RaonkUpload_RAONKUPLOAD_OnError,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_BeforeAddFile",this.RaonkUpload_RAONKUPLOAD_BeforeAddFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterDeleteFile",this.RaonkUpload_RAONKUPLOAD_AfterDeleteFile,this);
        };
        this.loadIncludeScript("sampleWrite.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
