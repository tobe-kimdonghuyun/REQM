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
            this.set_titletext("첨부파일");
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
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","114.00","6","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","158.00","6","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","1077","0","202","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button01\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02","0","0","100.00%","48",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel00_02","0","0","620","46",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("기본설계도면(건축)");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","374.00","0","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("동의서 양식다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file_1","504.00","0","116","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.addChild(obj.name, obj);

            obj = new Panel("panBtnFile","620.00","0","620","46",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panTitle","20","10","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","20.00","60","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("panFile","0","Panel02:0","100.00%","107",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00","10","10","620","46",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("기본설계도면(기계)");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","384.00","10","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("동의서 양식다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file_1_00","514.00","10","116","40",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00","630.00","10","620","46",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panTitle00","30.00","20","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","30.00","70","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("panFile00","0","panFile:0","100.00%","107",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"panTitle00\"/><PanelItem id=\"PanelItem01\" componentid=\"Grid00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00_00","10.00","10","620","46",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("기본설계도면(전기)");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00","384.00","10","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("동의서 양식다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file_1_00_00","514.00","10","116","40",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_00","630.00","10","620","46",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_00_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00","30.00","20","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00","30.00","70","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("panFile00_00","0","panFile00:0","100.00%","107",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"panTitle00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Grid00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00_00_00","10","10","620","46",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("기본설계도면(통신)");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00","384.00","10","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("동의서 양식다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file_1_00_00_00","514.00","10","116","40",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_00_00","630.00","10","620","46",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_00_00_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00_00","30","20","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00_00","30.00","70","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("panFile00_00_00","0","panFile00_00:0","100.00%","107",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00_00_00_00","10","10","620","46",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("기본설계도면(소방)");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00_00","384.00","10","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("동의서 양식다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file_1_00_00_00_00","514.00","10","116","40",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_00_00_00","630.00","10","620","46",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_00_00_00_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00_00_00","30","20","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00_00_00","30.00","70","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("panFile00_00_00_00","0","panFile00_00_00:0","100.00%","107",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00_00_00_00_00","10","10","620","46",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("공정표");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00_00_00","384.00","10","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("동의서 양식다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file_1_00_00_00_00_00","514.00","10","116","40",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_00_00_00_00","630.00","10","620","46",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1_00_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00_00_00_00","30","20","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00_00_00_00","30.00","70","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("panFile00_00_00_00_00","0","panFile00_00_00_00:0","100.00%","107",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00_00_00_00_00_00","10","10","620","46",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("폐기물,자재및인력동선계획");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00_00_00_00","384.00","10","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("동의서 양식다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file_1_00_00_00_00_00_00","514.00","10","116","40",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_00_00_00_00_00","630.00","10","620","46",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1_00_00_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00_00_00_00_00","30","20","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00_00_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00_00_00_00_00","30.00","70","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("panFile00_00_00_00_00_00","0","panFile00_00_00_00_00:0","100.00%","107",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00_00_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00_00_00_00_00_00_00","10","10","620","46",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("안전관리계획서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00_00_00_00_00","384.00","10","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("동의서 양식다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file_1_00_00_00_00_00_00_00","514.00","10","116","40",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_00_00_00_00_00_00","630.00","10","620","46",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_00_00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1_00_00_00_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00_00_00_00_00_00","30","20","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00_00_00_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","30.00","70","96.88%","40",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("공사금액 3억원 이상 또는 공사기간 3개월 이상인 경우");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_Des");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00_00_00_00_00_00","20.00","104","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("panFile00_00_00_00_00_00_00","0","panFile00_00_00_00_00_00:0","100.00%","107",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Static00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00_00_00_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00_00_00_00_00_01","10","10","620","46",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("기타서류1");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00_00_00_01","384.00","10","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("동의서 양식다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file_1_00_00_00_00_00_01","514.00","10","116","40",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_00_00_00_00_01","630.00","10","620","46",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_00_00_00_00_00_00_01\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1_00_00_00_00_00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00_00_00_00_01","30","20","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00_00_00_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00_00_00_00_00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00_00_00_00_01","30.00","70","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("panFile00_00_00_00_00_01","0","panFile00_00_00_00_00_00_00:0","100.00%","107",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00_00_00_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00_00_00_00_00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00_00_00_00_00_02","20","20","620","46",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("기타서류2");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00_00_00_02","394.00","20","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("동의서 양식다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file_1_00_00_00_00_00_02","524.00","20","116","40",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_00_00_00_00_02","640.00","20","620","46",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_00_00_00_00_00_00_02\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1_00_00_00_00_00_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00_00_00_00_02","40","30","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00_00_00_00_00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00_00_00_00_00_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00_00_00_00_02","40.00","80","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("panFile00_00_00_00_00_02","0","panFile00_00_00_00_00_01:0","100.00%","107",null,null,null,null,null,null,this);
            obj.set_taborder("75");
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
        this.loadIncludeScript("CST002S03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
