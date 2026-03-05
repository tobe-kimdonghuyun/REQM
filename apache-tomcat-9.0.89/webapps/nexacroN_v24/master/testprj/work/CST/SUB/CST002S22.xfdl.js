(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST002S22");
            this.set_titletext("첨부파일");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,1210);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFile1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"fullName\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"fullName\">Iaad010101 [PDF, 328KB]</Col><Col id=\"fileSz\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div00_00_00","0","0","100.00%","1110",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel00_02","0","44","305","46",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("기본설계도면(건축)");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Panel("panTitle","0","124","100%","46",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02\"/></Contents>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Grid("Grid00","20.00","114","100%","40",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Panel("panFile","0","42","100.00%","111",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("3");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00\"/></Contents>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00","0","44","305","46",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("4");
            obj.set_text("기본설계도면(기계)");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","813","76","120","40",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("5");
            obj.set_text("동의서 양식다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Button("btn_file_1_00","124","58","116","40",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("6");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00","433","58","305","46",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("7");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1_00\"/></Contents>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Panel("panTitle00","0","124","100%","46",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("8");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00\"/></Contents>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","20.00","114","100%","40",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("9");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Panel("panFile00","0","42","100.00%","111",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("10");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00\"/></Contents>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00_00","0","44","305","46",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("11");
            obj.set_text("기본설계도면(전기)");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00","813","76","120","40",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("12");
            obj.set_text("동의서 양식다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Button("btn_file_1_00_00","124","58","116","40",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("13");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_00","433","58","305","46",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("14");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_00_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1_00_00\"/></Contents>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00","0","124","100%","46",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("15");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00_00\"/></Contents>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00","20.00","114","100%","40",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("16");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Panel("panFile00_00","0","42","100.00%","111",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("17");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00_00\"/></Contents>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00_00_00","0","44","305","46",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("18");
            obj.set_text("기본설계도면(통신)");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00","813","76","120","40",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("19");
            obj.set_text("동의서 양식다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Button("btn_file_1_00_00_00","124","58","116","40",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("20");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_00_00","433","58","305","46",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("21");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_00_00_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1_00_00_00\"/></Contents>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00_00","0","124","100%","46",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("22");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00_00_00\"/></Contents>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00_00","20.00","114","100%","40",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("23");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Panel("panFile00_00_00","0","42","100.00%","111",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("24");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00_00_00\"/></Contents>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00_00_00_00","0","44","305","46",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("25");
            obj.set_text("기본설계도면(소방)");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00_00","813","76","120","40",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("26");
            obj.set_text("동의서 양식다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Button("btn_file_1_00_00_00_00","124","58","116","40",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("27");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_00_00_00","433","58","305","46",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("28");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_00_00_00_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1_00_00_00_00\"/></Contents>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00_00_00","0","124","100%","46",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("29");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00_00_00_00\"/></Contents>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00_00_00","20.00","114","100%","40",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("30");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Panel("panFile00_00_00_00","0","42","100.00%","111",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("31");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00_00_00_00\"/></Contents>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00_00_00_00_00","0","44","305","46",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("32");
            obj.set_text("공정표");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00_00_00","813","76","120","40",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("33");
            obj.set_text("동의서 양식다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Button("btn_file_1_00_00_00_00_00","124","58","116","40",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("34");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_00_00_00_00","433","58","305","46",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("35");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1_00_00_00_00_00\"/></Contents>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00_00_00_00","0","124","100%","46",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("36");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00_00_00_00_00\"/></Contents>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00_00_00_00","20.00","114","100%","40",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("37");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Panel("panFile00_00_00_00_00","0","42","100.00%","111",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("38");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00_00_00_00_00\"/></Contents>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00_00_00_00_00_00","0","44","305","46",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("39");
            obj.set_text("폐기물,자재및인력동선계획");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00_00_00_00","813","76","120","40",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("40");
            obj.set_text("동의서 양식다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Button("btn_file_1_00_00_00_00_00_00","124","58","116","40",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("41");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_00_00_00_00_00","433","58","305","46",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("42");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1_00_00_00_00_00_00\"/></Contents>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00_00_00_00_00","0","124","100%","46",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("43");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00_00_00_00_00_00\"/></Contents>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00_00_00_00_00","20.00","114","100%","40",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("44");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Panel("panFile00_00_00_00_00_00","0","42","100.00%","111",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("45");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00_00_00_00_00_00\"/></Contents>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00_00_00_00_00_00_00","0","44","305","46",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("46");
            obj.set_text("안전관리계획서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00_00_00_00_00","813","76","120","40",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("47");
            obj.set_text("동의서 양식다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Button("btn_file_1_00_00_00_00_00_00_00","124","58","116","40",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("48");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_00_00_00_00_00_00","433","58","305","46",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("49");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_00_00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1_00_00_00_00_00_00_00\"/></Contents>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00_00_00_00_00_00","0","124","100%","46",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("50");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00_00_00_00_00_00_00\"/></Contents>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00","62","932","100%","40",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("51");
            obj.set_text("공사금액 3억원 이상 또는 공사기간 3개월 이상인 경우  ");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("both");
            obj.set_flexgrow("1");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00_00_00_00_00_00","20.00","114","100%","40",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("52");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Panel("panFile00_00_00_00_00_00_00","0","748","100.00%","156",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("53");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Static00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00_00_00_00_00_00_00\"/></Contents>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00_00_00_00_00_01","0","44","305","46",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("54");
            obj.set_text("기타서류1");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00_00_00_01","813","76","120","40",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("55");
            obj.set_text("동의서 양식다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Button("btn_file_1_00_00_00_00_00_01","124","58","116","40",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("56");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_00_00_00_00_01","433","58","305","46",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("57");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_00_00_00_00_00_00_01\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1_00_00_00_00_00_01\"/></Contents>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00_00_00_00_01","0","124","100%","46",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("58");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00_00_00_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00_00_00_00_00_01\"/></Contents>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00_00_00_00_01","20.00","114","100%","40",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("59");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Panel("panFile00_00_00_00_00_01","0","42","100.00%","111",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("60");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00_00_00_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00_00_00_00_00_01\"/></Contents>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00_00_00_00_00_02","0","44","305","46",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("61");
            obj.set_text("기타서류2");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00_00_00_02","813","76","120","40",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("62");
            obj.set_text("동의서 양식다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Button("btn_file_1_00_00_00_00_00_02","124","58","116","40",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("63");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_00_00_00_00_02","433","58","305","46",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("64");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_00_00_00_00_00_00_02\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1_00_00_00_00_00_02\"/></Contents>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00_00_00_00_02","0","124","100%","46",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("65");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00_00_00_00_00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00_00_00_00_00_02\"/></Contents>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00_00_00_00_02","20.00","114","100%","40",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("66");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Panel("panFile00_00_00_00_00_02","0","42","100.00%","111",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("67");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00_00_00_00_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00_00_00_00_00_02\"/></Contents>");
            this.div00_00_00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00_00_00.form
            obj = new Layout("default","",0,0,this.div00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel00_02.set_taborder("0");
                p.staLabel00_02.set_text("기본설계도면(건축)");
                p.staLabel00_02.set_cssclass("sta_WF_Label");
                p.staLabel00_02.set_flexgrow("1");
                p.staLabel00_02.move("0","44","305","46",null,null);

                p.panTitle.set_taborder("1");
                p.panTitle.set_cssclass("pan_WF_FileTitle");
                p.panTitle.move("0","124","100%","46",null,null);

                p.Grid00.set_taborder("2");
                p.Grid00.set_binddataset("dsFile1");
                p.Grid00.set_autofittype("col");
                p.Grid00.set_cssclass("grd_WF_FileAdd");
                p.Grid00.move("20.00","114","100%","40",null,null);

                p.panFile.set_taborder("3");
                p.panFile.set_fittocontents("height");
                p.panFile.set_spacing("10px 20px 10px 20px");
                p.panFile.set_flexwrap("wrap");
                p.panFile.set_cssclass("pal_WF_DtlBg");
                p.panFile.set_verticalgap("4");
                p.panFile.move("0","42","100.00%","111",null,null);

                p.staLabel00_02_00.set_taborder("4");
                p.staLabel00_02_00.set_text("기본설계도면(기계)");
                p.staLabel00_02_00.set_cssclass("sta_WF_Label");
                p.staLabel00_02_00.set_flexgrow("1");
                p.staLabel00_02_00.move("0","44","305","46",null,null);

                p.Button00_00_00.set_taborder("5");
                p.Button00_00_00.set_text("동의서 양식다운로드");
                p.Button00_00_00.set_cssclass("btn_WF_Small");
                p.Button00_00_00.set_fittocontents("width");
                p.Button00_00_00.set_visible("false");
                p.Button00_00_00.move("813","76","120","40",null,null);

                p.btn_file_1_00.set_taborder("6");
                p.btn_file_1_00.set_text("파일선택");
                p.btn_file_1_00.set_cssclass("btn_WF_FileUp");
                p.btn_file_1_00.move("124","58","116","40",null,null);

                p.panBtnFile00.set_taborder("7");
                p.panBtnFile00.set_flexgrow("1");
                p.panBtnFile00.set_flexcrossaxisalign("start");
                p.panBtnFile00.set_flexmainaxisalign("end");
                p.panBtnFile00.set_horizontalgap("10");
                p.panBtnFile00.move("433","58","305","46",null,null);

                p.panTitle00.set_taborder("8");
                p.panTitle00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00.move("0","124","100%","46",null,null);

                p.Grid00_00.set_taborder("9");
                p.Grid00_00.set_binddataset("dsFile1");
                p.Grid00_00.set_autofittype("col");
                p.Grid00_00.set_cssclass("grd_WF_FileAdd");
                p.Grid00_00.move("20.00","114","100%","40",null,null);

                p.panFile00.set_taborder("10");
                p.panFile00.set_fittocontents("height");
                p.panFile00.set_spacing("10px 20px 10px 20px");
                p.panFile00.set_flexwrap("wrap");
                p.panFile00.set_cssclass("pal_WF_DtlBg");
                p.panFile00.set_verticalgap("4");
                p.panFile00.move("0","42","100.00%","111",null,null);

                p.staLabel00_02_00_00.set_taborder("11");
                p.staLabel00_02_00_00.set_text("기본설계도면(전기)");
                p.staLabel00_02_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_02_00_00.set_flexgrow("1");
                p.staLabel00_02_00_00.move("0","44","305","46",null,null);

                p.Button00_00_00_00.set_taborder("12");
                p.Button00_00_00_00.set_text("동의서 양식다운로드");
                p.Button00_00_00_00.set_cssclass("btn_WF_Small");
                p.Button00_00_00_00.set_fittocontents("width");
                p.Button00_00_00_00.set_visible("false");
                p.Button00_00_00_00.move("813","76","120","40",null,null);

                p.btn_file_1_00_00.set_taborder("13");
                p.btn_file_1_00_00.set_text("파일선택");
                p.btn_file_1_00_00.set_cssclass("btn_WF_FileUp");
                p.btn_file_1_00_00.move("124","58","116","40",null,null);

                p.panBtnFile00_00.set_taborder("14");
                p.panBtnFile00_00.set_flexgrow("1");
                p.panBtnFile00_00.set_flexcrossaxisalign("start");
                p.panBtnFile00_00.set_flexmainaxisalign("end");
                p.panBtnFile00_00.set_horizontalgap("10");
                p.panBtnFile00_00.move("433","58","305","46",null,null);

                p.panTitle00_00.set_taborder("15");
                p.panTitle00_00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00_00.move("0","124","100%","46",null,null);

                p.Grid00_00_00.set_taborder("16");
                p.Grid00_00_00.set_binddataset("dsFile1");
                p.Grid00_00_00.set_autofittype("col");
                p.Grid00_00_00.set_cssclass("grd_WF_FileAdd");
                p.Grid00_00_00.move("20.00","114","100%","40",null,null);

                p.panFile00_00.set_taborder("17");
                p.panFile00_00.set_fittocontents("height");
                p.panFile00_00.set_spacing("10px 20px 10px 20px");
                p.panFile00_00.set_flexwrap("wrap");
                p.panFile00_00.set_cssclass("pal_WF_DtlBg");
                p.panFile00_00.set_verticalgap("4");
                p.panFile00_00.move("0","42","100.00%","111",null,null);

                p.staLabel00_02_00_00_00.set_taborder("18");
                p.staLabel00_02_00_00_00.set_text("기본설계도면(통신)");
                p.staLabel00_02_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_02_00_00_00.set_flexgrow("1");
                p.staLabel00_02_00_00_00.move("0","44","305","46",null,null);

                p.Button00_00_00_00_00.set_taborder("19");
                p.Button00_00_00_00_00.set_text("동의서 양식다운로드");
                p.Button00_00_00_00_00.set_cssclass("btn_WF_Small");
                p.Button00_00_00_00_00.set_fittocontents("width");
                p.Button00_00_00_00_00.set_visible("false");
                p.Button00_00_00_00_00.move("813","76","120","40",null,null);

                p.btn_file_1_00_00_00.set_taborder("20");
                p.btn_file_1_00_00_00.set_text("파일선택");
                p.btn_file_1_00_00_00.set_cssclass("btn_WF_FileUp");
                p.btn_file_1_00_00_00.move("124","58","116","40",null,null);

                p.panBtnFile00_00_00.set_taborder("21");
                p.panBtnFile00_00_00.set_flexgrow("1");
                p.panBtnFile00_00_00.set_flexcrossaxisalign("start");
                p.panBtnFile00_00_00.set_flexmainaxisalign("end");
                p.panBtnFile00_00_00.set_horizontalgap("10");
                p.panBtnFile00_00_00.move("433","58","305","46",null,null);

                p.panTitle00_00_00.set_taborder("22");
                p.panTitle00_00_00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00_00_00.move("0","124","100%","46",null,null);

                p.Grid00_00_00_00.set_taborder("23");
                p.Grid00_00_00_00.set_binddataset("dsFile1");
                p.Grid00_00_00_00.set_autofittype("col");
                p.Grid00_00_00_00.set_cssclass("grd_WF_FileAdd");
                p.Grid00_00_00_00.move("20.00","114","100%","40",null,null);

                p.panFile00_00_00.set_taborder("24");
                p.panFile00_00_00.set_fittocontents("height");
                p.panFile00_00_00.set_spacing("10px 20px 10px 20px");
                p.panFile00_00_00.set_flexwrap("wrap");
                p.panFile00_00_00.set_cssclass("pal_WF_DtlBg");
                p.panFile00_00_00.set_verticalgap("4");
                p.panFile00_00_00.move("0","42","100.00%","111",null,null);

                p.staLabel00_02_00_00_00_00.set_taborder("25");
                p.staLabel00_02_00_00_00_00.set_text("기본설계도면(소방)");
                p.staLabel00_02_00_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_02_00_00_00_00.set_flexgrow("1");
                p.staLabel00_02_00_00_00_00.move("0","44","305","46",null,null);

                p.Button00_00_00_00_00_00.set_taborder("26");
                p.Button00_00_00_00_00_00.set_text("동의서 양식다운로드");
                p.Button00_00_00_00_00_00.set_cssclass("btn_WF_Small");
                p.Button00_00_00_00_00_00.set_fittocontents("width");
                p.Button00_00_00_00_00_00.set_visible("false");
                p.Button00_00_00_00_00_00.move("813","76","120","40",null,null);

                p.btn_file_1_00_00_00_00.set_taborder("27");
                p.btn_file_1_00_00_00_00.set_text("파일선택");
                p.btn_file_1_00_00_00_00.set_cssclass("btn_WF_FileUp");
                p.btn_file_1_00_00_00_00.move("124","58","116","40",null,null);

                p.panBtnFile00_00_00_00.set_taborder("28");
                p.panBtnFile00_00_00_00.set_flexgrow("1");
                p.panBtnFile00_00_00_00.set_flexcrossaxisalign("start");
                p.panBtnFile00_00_00_00.set_flexmainaxisalign("end");
                p.panBtnFile00_00_00_00.set_horizontalgap("10");
                p.panBtnFile00_00_00_00.move("433","58","305","46",null,null);

                p.panTitle00_00_00_00.set_taborder("29");
                p.panTitle00_00_00_00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00_00_00_00.move("0","124","100%","46",null,null);

                p.Grid00_00_00_00_00.set_taborder("30");
                p.Grid00_00_00_00_00.set_binddataset("dsFile1");
                p.Grid00_00_00_00_00.set_autofittype("col");
                p.Grid00_00_00_00_00.set_cssclass("grd_WF_FileAdd");
                p.Grid00_00_00_00_00.move("20.00","114","100%","40",null,null);

                p.panFile00_00_00_00.set_taborder("31");
                p.panFile00_00_00_00.set_fittocontents("height");
                p.panFile00_00_00_00.set_spacing("10px 20px 10px 20px");
                p.panFile00_00_00_00.set_flexwrap("wrap");
                p.panFile00_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.panFile00_00_00_00.set_verticalgap("4");
                p.panFile00_00_00_00.move("0","42","100.00%","111",null,null);

                p.staLabel00_02_00_00_00_00_00.set_taborder("32");
                p.staLabel00_02_00_00_00_00_00.set_text("공정표");
                p.staLabel00_02_00_00_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_02_00_00_00_00_00.set_flexgrow("1");
                p.staLabel00_02_00_00_00_00_00.move("0","44","305","46",null,null);

                p.Button00_00_00_00_00_00_00.set_taborder("33");
                p.Button00_00_00_00_00_00_00.set_text("동의서 양식다운로드");
                p.Button00_00_00_00_00_00_00.set_cssclass("btn_WF_Small");
                p.Button00_00_00_00_00_00_00.set_fittocontents("width");
                p.Button00_00_00_00_00_00_00.set_visible("false");
                p.Button00_00_00_00_00_00_00.move("813","76","120","40",null,null);

                p.btn_file_1_00_00_00_00_00.set_taborder("34");
                p.btn_file_1_00_00_00_00_00.set_text("파일선택");
                p.btn_file_1_00_00_00_00_00.set_cssclass("btn_WF_FileUp");
                p.btn_file_1_00_00_00_00_00.move("124","58","116","40",null,null);

                p.panBtnFile00_00_00_00_00.set_taborder("35");
                p.panBtnFile00_00_00_00_00.set_flexgrow("1");
                p.panBtnFile00_00_00_00_00.set_flexcrossaxisalign("start");
                p.panBtnFile00_00_00_00_00.set_flexmainaxisalign("end");
                p.panBtnFile00_00_00_00_00.set_horizontalgap("10");
                p.panBtnFile00_00_00_00_00.move("433","58","305","46",null,null);

                p.panTitle00_00_00_00_00.set_taborder("36");
                p.panTitle00_00_00_00_00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00_00_00_00_00.move("0","124","100%","46",null,null);

                p.Grid00_00_00_00_00_00.set_taborder("37");
                p.Grid00_00_00_00_00_00.set_binddataset("dsFile1");
                p.Grid00_00_00_00_00_00.set_autofittype("col");
                p.Grid00_00_00_00_00_00.set_cssclass("grd_WF_FileAdd");
                p.Grid00_00_00_00_00_00.move("20.00","114","100%","40",null,null);

                p.panFile00_00_00_00_00.set_taborder("38");
                p.panFile00_00_00_00_00.set_fittocontents("height");
                p.panFile00_00_00_00_00.set_spacing("10px 20px 10px 20px");
                p.panFile00_00_00_00_00.set_flexwrap("wrap");
                p.panFile00_00_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.panFile00_00_00_00_00.set_verticalgap("4");
                p.panFile00_00_00_00_00.move("0","42","100.00%","111",null,null);

                p.staLabel00_02_00_00_00_00_00_00.set_taborder("39");
                p.staLabel00_02_00_00_00_00_00_00.set_text("폐기물,자재및인력동선계획");
                p.staLabel00_02_00_00_00_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_02_00_00_00_00_00_00.set_flexgrow("1");
                p.staLabel00_02_00_00_00_00_00_00.move("0","44","305","46",null,null);

                p.Button00_00_00_00_00_00_00_00.set_taborder("40");
                p.Button00_00_00_00_00_00_00_00.set_text("동의서 양식다운로드");
                p.Button00_00_00_00_00_00_00_00.set_cssclass("btn_WF_Small");
                p.Button00_00_00_00_00_00_00_00.set_fittocontents("width");
                p.Button00_00_00_00_00_00_00_00.set_visible("false");
                p.Button00_00_00_00_00_00_00_00.move("813","76","120","40",null,null);

                p.btn_file_1_00_00_00_00_00_00.set_taborder("41");
                p.btn_file_1_00_00_00_00_00_00.set_text("파일선택");
                p.btn_file_1_00_00_00_00_00_00.set_cssclass("btn_WF_FileUp");
                p.btn_file_1_00_00_00_00_00_00.move("124","58","116","40",null,null);

                p.panBtnFile00_00_00_00_00_00.set_taborder("42");
                p.panBtnFile00_00_00_00_00_00.set_flexgrow("1");
                p.panBtnFile00_00_00_00_00_00.set_flexcrossaxisalign("start");
                p.panBtnFile00_00_00_00_00_00.set_flexmainaxisalign("end");
                p.panBtnFile00_00_00_00_00_00.set_horizontalgap("10");
                p.panBtnFile00_00_00_00_00_00.move("433","58","305","46",null,null);

                p.panTitle00_00_00_00_00_00.set_taborder("43");
                p.panTitle00_00_00_00_00_00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00_00_00_00_00_00.move("0","124","100%","46",null,null);

                p.Grid00_00_00_00_00_00_00.set_taborder("44");
                p.Grid00_00_00_00_00_00_00.set_binddataset("dsFile1");
                p.Grid00_00_00_00_00_00_00.set_autofittype("col");
                p.Grid00_00_00_00_00_00_00.set_cssclass("grd_WF_FileAdd");
                p.Grid00_00_00_00_00_00_00.move("20.00","114","100%","40",null,null);

                p.panFile00_00_00_00_00_00.set_taborder("45");
                p.panFile00_00_00_00_00_00.set_fittocontents("height");
                p.panFile00_00_00_00_00_00.set_spacing("10px 20px 10px 20px");
                p.panFile00_00_00_00_00_00.set_flexwrap("wrap");
                p.panFile00_00_00_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.panFile00_00_00_00_00_00.set_verticalgap("4");
                p.panFile00_00_00_00_00_00.move("0","42","100.00%","111",null,null);

                p.staLabel00_02_00_00_00_00_00_00_00.set_taborder("46");
                p.staLabel00_02_00_00_00_00_00_00_00.set_text("안전관리계획서");
                p.staLabel00_02_00_00_00_00_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_02_00_00_00_00_00_00_00.set_flexgrow("1");
                p.staLabel00_02_00_00_00_00_00_00_00.move("0","44","305","46",null,null);

                p.Button00_00_00_00_00_00_00_00_00.set_taborder("47");
                p.Button00_00_00_00_00_00_00_00_00.set_text("동의서 양식다운로드");
                p.Button00_00_00_00_00_00_00_00_00.set_cssclass("btn_WF_Small");
                p.Button00_00_00_00_00_00_00_00_00.set_fittocontents("width");
                p.Button00_00_00_00_00_00_00_00_00.set_visible("false");
                p.Button00_00_00_00_00_00_00_00_00.move("813","76","120","40",null,null);

                p.btn_file_1_00_00_00_00_00_00_00.set_taborder("48");
                p.btn_file_1_00_00_00_00_00_00_00.set_text("파일선택");
                p.btn_file_1_00_00_00_00_00_00_00.set_cssclass("btn_WF_FileUp");
                p.btn_file_1_00_00_00_00_00_00_00.move("124","58","116","40",null,null);

                p.panBtnFile00_00_00_00_00_00_00.set_taborder("49");
                p.panBtnFile00_00_00_00_00_00_00.set_flexgrow("1");
                p.panBtnFile00_00_00_00_00_00_00.set_flexcrossaxisalign("start");
                p.panBtnFile00_00_00_00_00_00_00.set_flexmainaxisalign("end");
                p.panBtnFile00_00_00_00_00_00_00.set_horizontalgap("10");
                p.panBtnFile00_00_00_00_00_00_00.move("433","58","305","46",null,null);

                p.panTitle00_00_00_00_00_00_00.set_taborder("50");
                p.panTitle00_00_00_00_00_00_00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00_00_00_00_00_00_00.move("0","124","100%","46",null,null);

                p.Static00.set_taborder("51");
                p.Static00.set_text("공사금액 3억원 이상 또는 공사기간 3개월 이상인 경우  ");
                p.Static00.set_cssclass("sta_WF_Des");
                p.Static00.set_fittocontents("both");
                p.Static00.set_flexgrow("1");
                p.Static00.move("62","932","100%","40",null,null);

                p.Grid00_00_00_00_00_00_00_00.set_taborder("52");
                p.Grid00_00_00_00_00_00_00_00.set_binddataset("dsFile1");
                p.Grid00_00_00_00_00_00_00_00.set_autofittype("col");
                p.Grid00_00_00_00_00_00_00_00.set_cssclass("grd_WF_FileAdd");
                p.Grid00_00_00_00_00_00_00_00.move("20.00","114","100%","40",null,null);

                p.panFile00_00_00_00_00_00_00.set_taborder("53");
                p.panFile00_00_00_00_00_00_00.set_fittocontents("height");
                p.panFile00_00_00_00_00_00_00.set_spacing("10px 20px 10px 20px");
                p.panFile00_00_00_00_00_00_00.set_flexwrap("wrap");
                p.panFile00_00_00_00_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.panFile00_00_00_00_00_00_00.set_verticalgap("4");
                p.panFile00_00_00_00_00_00_00.move("0","748","100.00%","156",null,null);

                p.staLabel00_02_00_00_00_00_00_01.set_taborder("54");
                p.staLabel00_02_00_00_00_00_00_01.set_text("기타서류1");
                p.staLabel00_02_00_00_00_00_00_01.set_cssclass("sta_WF_Label");
                p.staLabel00_02_00_00_00_00_00_01.set_flexgrow("1");
                p.staLabel00_02_00_00_00_00_00_01.move("0","44","305","46",null,null);

                p.Button00_00_00_00_00_00_00_01.set_taborder("55");
                p.Button00_00_00_00_00_00_00_01.set_text("동의서 양식다운로드");
                p.Button00_00_00_00_00_00_00_01.set_cssclass("btn_WF_Small");
                p.Button00_00_00_00_00_00_00_01.set_fittocontents("width");
                p.Button00_00_00_00_00_00_00_01.set_visible("false");
                p.Button00_00_00_00_00_00_00_01.move("813","76","120","40",null,null);

                p.btn_file_1_00_00_00_00_00_01.set_taborder("56");
                p.btn_file_1_00_00_00_00_00_01.set_text("파일선택");
                p.btn_file_1_00_00_00_00_00_01.set_cssclass("btn_WF_FileUp");
                p.btn_file_1_00_00_00_00_00_01.move("124","58","116","40",null,null);

                p.panBtnFile00_00_00_00_00_01.set_taborder("57");
                p.panBtnFile00_00_00_00_00_01.set_flexgrow("1");
                p.panBtnFile00_00_00_00_00_01.set_flexcrossaxisalign("start");
                p.panBtnFile00_00_00_00_00_01.set_flexmainaxisalign("end");
                p.panBtnFile00_00_00_00_00_01.set_horizontalgap("10");
                p.panBtnFile00_00_00_00_00_01.move("433","58","305","46",null,null);

                p.panTitle00_00_00_00_00_01.set_taborder("58");
                p.panTitle00_00_00_00_00_01.set_cssclass("pan_WF_FileTitle");
                p.panTitle00_00_00_00_00_01.move("0","124","100%","46",null,null);

                p.Grid00_00_00_00_00_00_01.set_taborder("59");
                p.Grid00_00_00_00_00_00_01.set_binddataset("dsFile1");
                p.Grid00_00_00_00_00_00_01.set_autofittype("col");
                p.Grid00_00_00_00_00_00_01.set_cssclass("grd_WF_FileAdd");
                p.Grid00_00_00_00_00_00_01.move("20.00","114","100%","40",null,null);

                p.panFile00_00_00_00_00_01.set_taborder("60");
                p.panFile00_00_00_00_00_01.set_fittocontents("height");
                p.panFile00_00_00_00_00_01.set_spacing("10px 20px 10px 20px");
                p.panFile00_00_00_00_00_01.set_flexwrap("wrap");
                p.panFile00_00_00_00_00_01.set_cssclass("pal_WF_DtlBg");
                p.panFile00_00_00_00_00_01.set_verticalgap("4");
                p.panFile00_00_00_00_00_01.move("0","42","100.00%","111",null,null);

                p.staLabel00_02_00_00_00_00_00_02.set_taborder("61");
                p.staLabel00_02_00_00_00_00_00_02.set_text("기타서류2");
                p.staLabel00_02_00_00_00_00_00_02.set_cssclass("sta_WF_Label");
                p.staLabel00_02_00_00_00_00_00_02.set_flexgrow("1");
                p.staLabel00_02_00_00_00_00_00_02.move("0","44","305","46",null,null);

                p.Button00_00_00_00_00_00_00_02.set_taborder("62");
                p.Button00_00_00_00_00_00_00_02.set_text("동의서 양식다운로드");
                p.Button00_00_00_00_00_00_00_02.set_cssclass("btn_WF_Small");
                p.Button00_00_00_00_00_00_00_02.set_fittocontents("width");
                p.Button00_00_00_00_00_00_00_02.set_visible("false");
                p.Button00_00_00_00_00_00_00_02.move("813","76","120","40",null,null);

                p.btn_file_1_00_00_00_00_00_02.set_taborder("63");
                p.btn_file_1_00_00_00_00_00_02.set_text("파일선택");
                p.btn_file_1_00_00_00_00_00_02.set_cssclass("btn_WF_FileUp");
                p.btn_file_1_00_00_00_00_00_02.move("124","58","116","40",null,null);

                p.panBtnFile00_00_00_00_00_02.set_taborder("64");
                p.panBtnFile00_00_00_00_00_02.set_flexgrow("1");
                p.panBtnFile00_00_00_00_00_02.set_flexcrossaxisalign("start");
                p.panBtnFile00_00_00_00_00_02.set_flexmainaxisalign("end");
                p.panBtnFile00_00_00_00_00_02.set_horizontalgap("10");
                p.panBtnFile00_00_00_00_00_02.move("433","58","305","46",null,null);

                p.panTitle00_00_00_00_00_02.set_taborder("65");
                p.panTitle00_00_00_00_00_02.set_cssclass("pan_WF_FileTitle");
                p.panTitle00_00_00_00_00_02.move("0","124","100%","46",null,null);

                p.Grid00_00_00_00_00_00_02.set_taborder("66");
                p.Grid00_00_00_00_00_00_02.set_binddataset("dsFile1");
                p.Grid00_00_00_00_00_00_02.set_autofittype("col");
                p.Grid00_00_00_00_00_00_02.set_cssclass("grd_WF_FileAdd");
                p.Grid00_00_00_00_00_00_02.move("20.00","114","100%","40",null,null);

                p.panFile00_00_00_00_00_02.set_taborder("67");
                p.panFile00_00_00_00_00_02.set_fittocontents("height");
                p.panFile00_00_00_00_00_02.set_spacing("10px 20px 10px 20px");
                p.panFile00_00_00_00_00_02.set_flexwrap("wrap");
                p.panFile00_00_00_00_00_02.set_cssclass("pal_WF_DtlBg");
                p.panFile00_00_00_00_00_02.set_verticalgap("4");
                p.panFile00_00_00_00_00_02.move("0","42","100.00%","111",null,null);
            	}
            );
            obj.set_type("vertical");
            this.div00_00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00_00_00.form
            obj = new Layout("mobile","",0,0,this.div00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.div00_00_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","",1280,1210,this,function(p){});
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
            this.div00_00_00.form.Grid00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.div00_00_00.form.Grid00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.div00_00_00.form.btn_file_1_00.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.div00_00_00.form.Grid00_00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.div00_00_00.form.Grid00_00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.div00_00_00.form.btn_file_1_00_00.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.div00_00_00.form.Grid00_00_00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.div00_00_00.form.Grid00_00_00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.div00_00_00.form.btn_file_1_00_00_00.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.div00_00_00.form.Grid00_00_00_00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.div00_00_00.form.Grid00_00_00_00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.div00_00_00.form.btn_file_1_00_00_00_00.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.div00_00_00.form.Grid00_00_00_00_00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.div00_00_00.form.Grid00_00_00_00_00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.div00_00_00.form.btn_file_1_00_00_00_00_00.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.div00_00_00.form.Grid00_00_00_00_00_00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.div00_00_00.form.Grid00_00_00_00_00_00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.div00_00_00.form.btn_file_1_00_00_00_00_00_00.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.div00_00_00.form.Grid00_00_00_00_00_00_00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.div00_00_00.form.Grid00_00_00_00_00_00_00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.div00_00_00.form.btn_file_1_00_00_00_00_00_00_00.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.div00_00_00.form.Grid00_00_00_00_00_00_00_00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.div00_00_00.form.Grid00_00_00_00_00_00_00_00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.div00_00_00.form.btn_file_1_00_00_00_00_00_01.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.div00_00_00.form.Grid00_00_00_00_00_00_01.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.div00_00_00.form.Grid00_00_00_00_00_00_01.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.div00_00_00.form.btn_file_1_00_00_00_00_00_02.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.div00_00_00.form.Grid00_00_00_00_00_00_02.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.div00_00_00.form.Grid00_00_00_00_00_00_02.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
        };
        this.loadIncludeScript("CST002S22.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
