(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM013P01");
            this.set_titletext("문서 등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,750);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo1", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGet", this);
            obj._setContents("<ColumnInfo><Column id=\"docboxId\" type=\"STRING\" size=\"256\"/><Column id=\"regCoCd\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"docClsfCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplySe\" type=\"STRING\" size=\"256\"/><Column id=\"srvcSe\" type=\"STRING\" size=\"256\"/><Column id=\"artclSe\" type=\"STRING\" size=\"256\"/><Column id=\"docNm\" type=\"STRING\" size=\"256\"/><Column id=\"docVldDrtn\" type=\"STRING\" size=\"256\"/><Column id=\"autoDscdYn\" type=\"STRING\" size=\"256\"/><Column id=\"prvcInclYn\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegNm\" type=\"STRING\" size=\"256\"/><Column id=\"coId\" type=\"STRING\" size=\"256\"/><Column id=\"coNm\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userNm\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"autoDscdYn\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"fullName\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo2", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo3", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo4", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","20","0",null,null,"20","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_cssclass(" ");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle01","-14","48","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_text("문서함 관리");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinDocbox","1436","718","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_visible("true");
            obj.set_text("");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01","675","48","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("4");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 20px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnMinDocbox\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit01","-14","28","100%","70",null,null,null,null,"70",null,this.divForm.form);
            obj.set_taborder("5");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div00","0","0","100%","547",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan00_01\"/><PanelItem id=\"PanelItem03\" componentid=\"pan01_01_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel01","433","113","50%","100%",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("48");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("spacebetween");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Button00_01\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel00","297","115","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("46");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("10");
            obj.set_text("등록업체명");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("11");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem02\" componentid=\"divEdtPop01\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan02_","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("12");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem02\" componentid=\"cbo00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan02","0","60","100%","96",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("13");
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
            obj.set_taborder("14");
            obj.set_text("문서명");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan04_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("15");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edtDocNm\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("16");
            obj.set_text("등록자명");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan01_01_00","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("17");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"divEdtPop02\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_01","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("18");
            obj.set_text("첨부문서");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Button("btn_file_1","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("19");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("20");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("panTitle00","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("21");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_01\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("22");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("23");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("24");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("panFileNum00","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("25");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Button("btn_del_file_1","512","135","125","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("26");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("panBtnDel00","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("27");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_del_file_1\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("28");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid01","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("29");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_00","0","60","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("37");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("nowrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan00_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan00_02_00\"/><PanelItem id=\"PanelItem03\" componentid=\"pan01_01_00_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("31");
            obj.set_text("신청구분");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_01_00","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("32");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"cbo00_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_01_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("33");
            obj.set_text("서비스구분");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Combo("cbo00_01","200.00","128","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsCombo3");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_displaynulltext("선택");
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_02_00","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("34");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"cbo00_01\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("35");
            obj.set_text("항목구분");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Combo("cbo00_02","200.00","128","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsCombo4");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_displaynulltext("선택");
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan01_01_00_00","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("36");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"cbo00_02\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("38");
            obj.set_text("문서유효기간");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_01_00_00","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("39");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel02\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_02_00_00","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("40");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"CheckBoxSet00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("41");
            obj.set_text("개인정보 포함 여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Combo("cbo00_03","200.00","128","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_Div00_form_cbo00_03_innerdataset = new nexacro.NormalDataset("divForm_form_Div00_form_cbo00_03_innerdataset", obj);
            divForm_form_Div00_form_cbo00_03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"datacolumn\">예</Col><Col id=\"codecolumn\">Y</Col></Row><Row><Col id=\"datacolumn\">아니오</Col><Col id=\"codecolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div00_form_cbo00_03_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan01_01_00_00_00","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("42");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"cbo00_03\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_00_00","0","60","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("43");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("nowrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan00_01_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan00_02_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"pan01_01_00_00_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel03","298","353","100","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("51");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Edit00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("panFile00","0","50","100.00%","161",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("30");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("nowrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid01\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Combo("cbo00","200.00","128","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsCombo1");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_displaynulltext("선택");
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtDocNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("2");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Combo("cbo00_00","200.00","128","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsCombo2");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_displaynulltext("선택");
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new CheckBoxSet("CheckBoxSet00","200.00","213","100%","38",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonlycolumn("readonlycolumn");
            obj.set_fittocontents("width");
            var divForm_form_Div00_form_CheckBoxSet00_innerdataset = new nexacro.NormalDataset("divForm_form_Div00_form_CheckBoxSet00_innerdataset", obj);
            divForm_form_Div00_form_CheckBoxSet00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/><Column id=\"readonlycolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">유효기간 경과 후 자동 폐기</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div00_form_CheckBoxSet00_innerdataset);
            obj.set_text("Check");
            obj.set_value("0");
            obj.set_index("0");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Radio("rdo00","200.00","328","200","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_flexgrow("0");
            obj.set_columncount("0");
            obj.set_rowcount("0");
            obj.set_fittocontents("width");
            var divForm_form_Div00_form_rdo00_innerdataset = new nexacro.NormalDataset("divForm_form_Div00_form_rdo00_innerdataset", obj);
            divForm_form_Div00_form_rdo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">999</Col><Col id=\"datacolumn\">영구</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">년</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div00_form_rdo00_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel02","242","349","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("50");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"rdo00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel03\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","289","353","20","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("52");
            obj.set_text("년");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","186","347","70","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("7");
            obj.set_inputtype("digit");
            obj.set_inputfilter("none,alpha,comma,dot,sign,space,symbol");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Div("divEdtPop02","43.00","393","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("44");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtUserNm","0","0",null,"40","0",null,null,null,null,null,this.divForm.form.Div00.form.divEdtPop02.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_readonly("true");
            this.divForm.form.Div00.form.divEdtPop02.addChild(obj.name, obj);

            obj = new Button("btnUserSch","edtUserNm:-40","0","40","40",null,null,null,null,null,null,this.divForm.form.Div00.form.divEdtPop02.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            obj.set_visible("false");
            this.divForm.form.Div00.form.divEdtPop02.addChild(obj.name, obj);

            obj = new Div("divEdtPop01","43.00","393","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("45");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtCoNm","0","0",null,"40","0",null,null,null,null,null,this.divForm.form.Div00.form.divEdtPop01.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_readonly("true");
            this.divForm.form.Div00.form.divEdtPop01.addChild(obj.name, obj);

            obj = new Button("btnCoSch","edtCoNm:-40","0","40","40",null,null,null,null,null,null,this.divForm.form.Div00.form.divEdtPop01.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            obj.set_visible("false");
            this.divForm.form.Div00.form.divEdtPop01.addChild(obj.name, obj);

            obj = new Button("Button00_01","1208.00","60","78","34",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("47");
            obj.set_text("문서분류");
            obj.set_cssclass("btn_WF_SmallBlack");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00","10","98","50%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("49");
            obj.set_text("문서분류");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Div("divPopBtn","10","600","100%","60",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00_02","457.00","30","194","40",null,null,null,null,null,null,this.divForm.form.divPopBtn.form);
            obj.set_taborder("1");
            obj.set_text("개인정보동의서양식다운로드");
            obj.set_cssclass("btn_WF_No");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divForm.form.divPopBtn.addChild(obj.name, obj);

            obj = new Button("Button00_00","457.00","30","117","40",null,null,null,null,null,null,this.divForm.form.divPopBtn.form);
            obj.set_taborder("0");
            obj.set_text("저장 후 계속");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_fittocontents("width");
            this.divForm.form.divPopBtn.addChild(obj.name, obj);

            obj = new Button("Button00_01","457.00","30","68","40",null,null,null,null,null,null,this.divForm.form.divPopBtn.form);
            obj.set_taborder("2");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_fittocontents("width");
            this.divForm.form.divPopBtn.addChild(obj.name, obj);

            obj = new Static("staLabel00","0.00","0","200","46",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("등록업체ID");
            obj.set_cssclass("sta_WF_Label_E");
            this.addChild(obj.name, obj);

            obj = new Div("divEdtPop00","0.00","46","200","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","0","0",null,"40","0",null,null,null,null,null,this.divEdtPop00.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_text("");
            this.divEdtPop00.addChild(obj.name, obj);

            obj = new Panel("pan00_01","20.00","0","250","86",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem02\" componentid=\"divEdtPop00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00","10.00","10","200","46",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("등록자ID");
            obj.set_cssclass("sta_WF_Label_E");
            this.addChild(obj.name, obj);

            obj = new Div("divEdtPop","10.00","56","200","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","0","0",null,"40","0",null,null,null,null,null,this.divEdtPop.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_text("");
            this.divEdtPop.addChild(obj.name, obj);

            obj = new Panel("pan01_01_00","510.00","0","250","86",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"divEdtPop\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan00","-590","265","500","96",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("nowrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_spacing("0px 0px 0px 10px");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan00_01\"/><PanelItem id=\"PanelItem03\" componentid=\"pan01_01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new RaonkUpload("RaonkUpload","-826.00","6","73.20%","200",null,null,null,null,null,null,this);
            obj.set_taborder("8");
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
            // Layout Functions
            //-- Default Layout : this.divForm.form.Div00.form.divEdtPop02.form
            obj = new Layout("default","",0,0,this.divForm.form.Div00.form.divEdtPop02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.edtUserNm.set_taborder("0");
                p.edtUserNm.set_cssclass("edt_WF_EdtSch");
                p.edtUserNm.set_readonly("true");
                p.edtUserNm.move("0","0",null,"40","0",null);

                p.btnUserSch.set_taborder("1");
                p.btnUserSch.set_cssclass("btn_WF_EdtSch");
                p.btnUserSch.set_visible("false");
                p.btnUserSch.move("edtUserNm:-40","0","40","40",null,null);
            	}
            );
            this.divForm.form.Div00.form.divEdtPop02.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div00.form.divEdtPop02.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div00.form.divEdtPop02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.Div00.form.divEdtPop02.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div00.form.divEdtPop01.form
            obj = new Layout("default","",0,0,this.divForm.form.Div00.form.divEdtPop01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.edtCoNm.set_taborder("0");
                p.edtCoNm.set_cssclass("edt_WF_EdtSch");
                p.edtCoNm.set_readonly("true");
                p.edtCoNm.move("0","0",null,"40","0",null);

                p.btnCoSch.set_taborder("1");
                p.btnCoSch.set_cssclass("btn_WF_EdtSch");
                p.btnCoSch.set_visible("false");
                p.btnCoSch.move("edtCoNm:-40","0","40","40",null,null);
            	}
            );
            this.divForm.form.Div00.form.divEdtPop01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div00.form.divEdtPop01.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div00.form.divEdtPop01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.Div00.form.divEdtPop01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div00.form
            obj = new Layout("default","",0,0,this.divForm.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.pan00.set_taborder("0");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("0px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.move("0","60","100.00%","96",null,null);

                p.Panel01.set_taborder("48");
                p.Panel01.set_flexcrossaxiswrapalign("start");
                p.Panel01.set_flexmainaxisalign("spacebetween");
                p.Panel01.set_flexcrossaxisalign("center");
                p.Panel01.set_flexgrow("1");
                p.Panel01.move("433","113","50%","100%",null,null);

                p.Panel00.set_taborder("46");
                p.Panel00.set_horizontalgap("10");
                p.Panel00.move("297","115","100%","46",null,null);

                p.staLabel00.set_taborder("10");
                p.staLabel00.set_text("등록업체명");
                p.staLabel00.set_cssclass("sta_WF_Label_E");
                p.staLabel00.move("10","98","100%","46",null,null);

                p.pan00_01.set_taborder("11");
                p.pan00_01.set_type("vertical");
                p.pan00_01.set_flexgrow("1");
                p.pan00_01.set_minwidth("");
                p.pan00_01.move("10.00","98","300","86",null,null);

                p.pan02_.set_taborder("12");
                p.pan02_.set_type("vertical");
                p.pan02_.set_flexgrow("1");
                p.pan02_.move("10.00","98","300","86",null,null);

                p.pan02.set_taborder("13");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.move("0","60","100%","96",null,null);

                p.staLabel05_00.set_taborder("14");
                p.staLabel05_00.set_text("문서명");
                p.staLabel05_00.set_cssclass("sta_WF_Label_E");
                p.staLabel05_00.move("10","98","100%","46",null,null);

                p.pan04_01.set_taborder("15");
                p.pan04_01.set_type("vertical");
                p.pan04_01.set_flexgrow("1");
                p.pan04_01.move("10.00","98","300","86",null,null);

                p.staLabel01_00_00.set_taborder("16");
                p.staLabel01_00_00.set_text("등록자명");
                p.staLabel01_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel01_00_00.move("10","98","100%","46",null,null);

                p.pan01_01_00.set_taborder("17");
                p.pan01_01_00.set_type("vertical");
                p.pan01_01_00.set_flexgrow("1");
                p.pan01_01_00.move("10.00","98","300","86",null,null);

                p.staLabel00_02_01.set_taborder("18");
                p.staLabel00_02_01.set_text("첨부문서");
                p.staLabel00_02_01.set_cssclass("sta_WF_Label_E");
                p.staLabel00_02_01.set_flexgrow("1");
                p.staLabel00_02_01.move("0","44","305","46",null,null);

                p.btn_file_1.set_taborder("19");
                p.btn_file_1.set_text("파일선택");
                p.btn_file_1.set_cssclass("btn_WF_FileUp");
                p.btn_file_1.move("124","58","116","40",null,null);

                p.panBtnFile00.set_taborder("20");
                p.panBtnFile00.set_flexgrow("1");
                p.panBtnFile00.set_flexcrossaxisalign("start");
                p.panBtnFile00.set_flexmainaxisalign("end");
                p.panBtnFile00.move("433","58","305","46",null,null);

                p.panTitle00.set_taborder("21");
                p.panTitle00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00.move("0","124","100%","46",null,null);

                p.Static00_00.set_taborder("22");
                p.Static00_00.set_text("파일수 : ");
                p.Static00_00.set_fittocontents("width");
                p.Static00_00.move("88","123","48","46",null,null);

                p.Static01_00.set_taborder("23");
                p.Static01_00.set_text("0");
                p.Static01_00.set_fittocontents("width");
                p.Static01_00.move("165","143","9","46",null,null);

                p.Static02_00.set_taborder("24");
                p.Static02_00.set_text("개");
                p.Static02_00.set_fittocontents("width");
                p.Static02_00.move("293","131","13","46",null,null);

                p.panFileNum00.set_taborder("25");
                p.panFileNum00.set_flexgrow("1");
                p.panFileNum00.set_horizontalgap("4");
                p.panFileNum00.move("20","190","305","46",null,null);

                p.btn_del_file_1.set_taborder("26");
                p.btn_del_file_1.set_text("전체파일삭제");
                p.btn_del_file_1.set_cssclass("btn_WF_FileDel");
                p.btn_del_file_1.set_fittocontents("width");
                p.btn_del_file_1.move("512","135","125","40",null,null);

                p.panBtnDel00.set_taborder("27");
                p.panBtnDel00.set_flexcrossaxisalign("center");
                p.panBtnDel00.set_flexmainaxisalign("end");
                p.panBtnDel00.set_flexgrow("1");
                p.panBtnDel00.move("517","141","305","46",null,null);

                p.Panel00_00.set_taborder("28");
                p.Panel00_00.move("20","51","100%","46",null,null);

                p.Grid01.set_taborder("29");
                p.Grid01.set_binddataset("dsFile1");
                p.Grid01.set_autofittype("col");
                p.Grid01.set_cssclass("grd_WF_FileAdd");
                p.Grid01.move("20.00","114","100%","40",null,null);

                p.pan00_00.set_taborder("37");
                p.pan00_00.set_horizontalgap("20");
                p.pan00_00.set_flexcrossaxiswrapalign("start");
                p.pan00_00.set_flexwrap("nowrap");
                p.pan00_00.set_fittocontents("height");
                p.pan00_00.set_verticalgap("0");
                p.pan00_00.set_spacing("0px 20px 10px 20px");
                p.pan00_00.set_cssclass("pal_WF_DtlBg");
                p.pan00_00.set_visible("false");
                p.pan00_00.move("0","60","100.00%","97",null,null);

                p.staLabel00_00.set_taborder("31");
                p.staLabel00_00.set_text("신청구분");
                p.staLabel00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_00.move("10","98","100%","46",null,null);

                p.pan00_01_00.set_taborder("32");
                p.pan00_01_00.set_type("vertical");
                p.pan00_01_00.set_flexgrow("1");
                p.pan00_01_00.set_minwidth("");
                p.pan00_01_00.move("10.00","98","300","86",null,null);

                p.staLabel00_01_00.set_taborder("33");
                p.staLabel00_01_00.set_text("서비스구분");
                p.staLabel00_01_00.set_cssclass("sta_WF_Label");
                p.staLabel00_01_00.move("10","98","100%","46",null,null);

                p.cbo00_01.set_taborder("4");
                p.cbo00_01.set_innerdataset("dsCombo3");
                p.cbo00_01.set_codecolumn("cdId");
                p.cbo00_01.set_datacolumn("cdNm");
                p.cbo00_01.set_displaynulltext("선택");
                p.cbo00_01.set_text("");
                p.cbo00_01.set_index("-1");
                p.cbo00_01.move("200.00","128","100%","40",null,null);

                p.pan00_02_00.set_taborder("34");
                p.pan00_02_00.set_type("vertical");
                p.pan00_02_00.set_flexgrow("1");
                p.pan00_02_00.set_minwidth("");
                p.pan00_02_00.move("10.00","98","300","86",null,null);

                p.staLabel01_00_00_00.set_taborder("35");
                p.staLabel01_00_00_00.set_text("항목구분");
                p.staLabel01_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00_00_00.move("10","98","100%","46",null,null);

                p.cbo00_02.set_taborder("5");
                p.cbo00_02.set_innerdataset("dsCombo4");
                p.cbo00_02.set_codecolumn("cdId");
                p.cbo00_02.set_datacolumn("cdNm");
                p.cbo00_02.set_displaynulltext("선택");
                p.cbo00_02.set_text("");
                p.cbo00_02.set_index("-1");
                p.cbo00_02.move("200.00","128","100%","40",null,null);

                p.pan01_01_00_00.set_taborder("36");
                p.pan01_01_00_00.set_type("vertical");
                p.pan01_01_00_00.set_flexgrow("1");
                p.pan01_01_00_00.move("10.00","98","300","86",null,null);

                p.staLabel00_00_00.set_taborder("38");
                p.staLabel00_00_00.set_text("문서유효기간");
                p.staLabel00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_00_00.move("10","98","100%","46",null,null);

                p.pan00_01_00_00.set_taborder("39");
                p.pan00_01_00_00.set_type("vertical");
                p.pan00_01_00_00.set_flexgrow("1");
                p.pan00_01_00_00.set_minwidth("");
                p.pan00_01_00_00.move("10.00","98","300","86",null,null);

                p.pan00_02_00_00.set_taborder("40");
                p.pan00_02_00_00.set_type("vertical");
                p.pan00_02_00_00.set_flexgrow("1");
                p.pan00_02_00_00.set_flexcrossaxiswrapalign("center");
                p.pan00_02_00_00.set_flexcrossaxisalign("start");
                p.pan00_02_00_00.set_flexmainaxisalign("center");
                p.pan00_02_00_00.set_minwidth("");
                p.pan00_02_00_00.move("10.00","98","300","86",null,null);

                p.staLabel01_00_00_00_00.set_taborder("41");
                p.staLabel01_00_00_00_00.set_text("개인정보 포함 여부");
                p.staLabel01_00_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel01_00_00_00_00.move("10","98","100%","46",null,null);

                p.cbo00_03.set_taborder("9");
                p.cbo00_03.set_innerdataset(divForm_form_Div00_form_cbo00_03_innerdataset);
                p.cbo00_03.set_codecolumn("codecolumn");
                p.cbo00_03.set_datacolumn("datacolumn");
                p.cbo00_03.set_text("");
                p.cbo00_03.set_value("");
                p.cbo00_03.set_index("-1");
                p.cbo00_03.move("200.00","128","100%","40",null,null);

                p.pan01_01_00_00_00.set_taborder("42");
                p.pan01_01_00_00_00.set_type("vertical");
                p.pan01_01_00_00_00.set_flexgrow("1");
                p.pan01_01_00_00_00.move("10.00","98","300","86",null,null);

                p.pan00_00_00.set_taborder("43");
                p.pan00_00_00.set_horizontalgap("20");
                p.pan00_00_00.set_flexcrossaxiswrapalign("start");
                p.pan00_00_00.set_flexwrap("nowrap");
                p.pan00_00_00.set_fittocontents("height");
                p.pan00_00_00.set_verticalgap("0");
                p.pan00_00_00.set_spacing("0px 20px 10px 20px");
                p.pan00_00_00.set_cssclass("pal_WF_DtlBg");
                p.pan00_00_00.move("0","60","100.00%","97",null,null);

                p.Panel03.set_taborder("51");
                p.Panel03.set_flexgrow("1");
                p.Panel03.set_horizontalgap("10");
                p.Panel03.set_visible("false");
                p.Panel03.move("298","353","100","40",null,null);

                p.panFile00.set_taborder("30");
                p.panFile00.set_spacing("10px 20px 10px 20px");
                p.panFile00.set_flexwrap("nowrap");
                p.panFile00.set_cssclass("pal_WF_DtlBg");
                p.panFile00.set_verticalgap("4");
                p.panFile00.set_type("vertical");
                p.panFile00.move("0","50","100.00%","161",null,null);

                p.cbo00.set_taborder("1");
                p.cbo00.set_innerdataset("dsCombo1");
                p.cbo00.set_codecolumn("cdId");
                p.cbo00.set_datacolumn("cdNm");
                p.cbo00.set_displaynulltext("선택");
                p.cbo00.set_text("");
                p.cbo00.set_index("-1");
                p.cbo00.move("200.00","128","100%","40",null,null);

                p.edtDocNm.set_taborder("2");
                p.edtDocNm.set_readonly("false");
                p.edtDocNm.move("10.00","158","100%","40",null,null);

                p.cbo00_00.set_taborder("3");
                p.cbo00_00.set_innerdataset("dsCombo2");
                p.cbo00_00.set_codecolumn("cdId");
                p.cbo00_00.set_datacolumn("cdNm");
                p.cbo00_00.set_displaynulltext("선택");
                p.cbo00_00.set_text("");
                p.cbo00_00.set_index("-1");
                p.cbo00_00.move("200.00","128","100%","40",null,null);

                p.CheckBoxSet00.set_taborder("8");
                p.CheckBoxSet00.set_innerdataset(divForm_form_Div00_form_CheckBoxSet00_innerdataset);
                p.CheckBoxSet00.set_codecolumn("codecolumn");
                p.CheckBoxSet00.set_datacolumn("datacolumn");
                p.CheckBoxSet00.set_readonlycolumn("readonlycolumn");
                p.CheckBoxSet00.set_fittocontents("width");
                p.CheckBoxSet00.set_value("0");
                p.CheckBoxSet00.set_index("0");
                p.CheckBoxSet00.move("200.00","213","100%","38",null,null);

                p.rdo00.set_taborder("6");
                p.rdo00.set_innerdataset(divForm_form_Div00_form_rdo00_innerdataset);
                p.rdo00.set_codecolumn("codecolumn");
                p.rdo00.set_datacolumn("datacolumn");
                p.rdo00.set_direction("vertical");
                p.rdo00.set_flexgrow("0");
                p.rdo00.set_columncount("0");
                p.rdo00.set_rowcount("0");
                p.rdo00.set_fittocontents("width");
                p.rdo00.set_value("");
                p.rdo00.set_index("-1");
                p.rdo00.move("200.00","328","200","40",null,null);

                p.Panel02.set_taborder("50");
                p.Panel02.move("242","349","100%","40",null,null);

                p.Static00.set_taborder("52");
                p.Static00.set_text("년");
                p.Static00.move("289","353","20","40",null,null);

                p.Edit00.set_taborder("7");
                p.Edit00.set_inputtype("digit");
                p.Edit00.set_inputfilter("none,alpha,comma,dot,sign,space,symbol");
                p.Edit00.move("186","347","70","40",null,null);

                p.divEdtPop02.set_taborder("44");
                p.divEdtPop02.set_text("Div00");
                p.divEdtPop02.set_formscrollbartype("none none");
                p.divEdtPop02.set_formscrolltype("none");
                p.divEdtPop02.set_flexgrow("1");
                p.divEdtPop02.move("43.00","393","100%","40",null,null);

                p.divEdtPop01.set_taborder("45");
                p.divEdtPop01.set_text("Div00");
                p.divEdtPop01.set_formscrollbartype("none none");
                p.divEdtPop01.set_formscrolltype("none");
                p.divEdtPop01.set_flexgrow("1");
                p.divEdtPop01.move("43.00","393","100%","40",null,null);

                p.Button00_01.set_taborder("47");
                p.Button00_01.set_text("문서분류");
                p.Button00_01.set_cssclass("btn_WF_SmallBlack");
                p.Button00_01.set_visible("true");
                p.Button00_01.set_fittocontents("width");
                p.Button00_01.move("1208.00","60","78","34",null,null);

                p.staLabel03_00.set_taborder("49");
                p.staLabel03_00.set_text("문서분류");
                p.staLabel03_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00.set_flexgrow("1");
                p.staLabel03_00.move("10","98","50%","46",null,null);
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
                p.pan02.move("0","60","100.00%","183",null,null);

                p.pan00.move("0","60","100.00%","183",null,null);

                p.pan00_00.set_flexwrap("wrap");
                p.pan00_00.move("0","60","100.00%","269",null,null);

                p.pan00_00_00.set_flexwrap("wrap");
                p.pan00_00_00.move("0","60","100.00%","269",null,null);

                p.pan00_01.move("10.00","98","100%","86",null,null);

                p.pan02_.move("10.00","98","100%","86",null,null);

                p.pan04_01.move("10.00","98","100.00%","86",null,null);

                p.pan00_01_00.move("10.00","98","100.00%","86",null,null);

                p.pan00_02_00.move("10.00","98","100.00%","86",null,null);

                p.pan01_01_00_00.move("10.00","98","100.00%","86",null,null);

                p.pan01_01_00_00_00.move("10.00","98","100.00%","86",null,null);

                p.pan00_02_00_00.move("10.00","98","100.00%","86",null,null);

                p.pan00_01_00_00.move("10.00","98","100.00%","86",null,null);

                p.rdo00.set_flexgrow("0");
                p.rdo00.set_fittocontents("none");
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divPopBtn.form
            obj = new Layout("default","",0,0,this.divForm.form.divPopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00_02.set_taborder("1");
                p.Button00_02.set_text("개인정보동의서양식다운로드");
                p.Button00_02.set_cssclass("btn_WF_No");
                p.Button00_02.set_fittocontents("width");
                p.Button00_02.set_visible("false");
                p.Button00_02.move("457.00","30","194","40",null,null);

                p.Button00_00.set_taborder("0");
                p.Button00_00.set_text("저장 후 계속");
                p.Button00_00.set_cssclass("btn_WF_Yes");
                p.Button00_00.set_fittocontents("width");
                p.Button00_00.move("457.00","30","117","40",null,null);

                p.Button00_01.set_taborder("2");
                p.Button00_01.set_text("확인");
                p.Button00_01.set_cssclass("btn_WF_Yes");
                p.Button00_01.set_fittocontents("width");
                p.Button00_01.move("457.00","30","68","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 20px");
            this.divForm.form.divPopBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divPopBtn.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divPopBtn.form,
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
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 20px");
            this.divForm.form.divPopBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staSubTitle01.set_taborder("2");
                p.staSubTitle01.set_text("문서함 관리");
                p.staSubTitle01.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle01.move("-14","48","100%","50",null,null);

                p.btnMinDocbox.set_taborder("3");
                p.btnMinDocbox.set_cssclass("btn_WF_ACMinus");
                p.btnMinDocbox.set_visible("true");
                p.btnMinDocbox.set_text("");
                p.btnMinDocbox.move("1436","718","34","34",null,null);

                p.Panel01.set_taborder("4");
                p.Panel01.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01.set_spacing("0px 20px");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.set_flexcrossaxisalign("center");
                p.Panel01.set_flexmainaxisalign("end");
                p.Panel01.move("675","48","100%","50",null,null);

                p.sub_tit01.set_taborder("5");
                p.sub_tit01.set_background("#ffffff");
                p.sub_tit01.set_flexcrossaxisalign("end");
                p.sub_tit01.set_minheight("70");
                p.sub_tit01.set_maxheight("");
                p.sub_tit01.move("-14","28","100%","70",null,null);

                p.Div00.set_taborder("0");
                p.Div00.set_text("Div00");
                p.Div00.set_cssclass("div_WF_Bg");
                p.Div00.set_fittocontents("height");
                p.Div00.move("0","0","100%","547",null,null);

                p.divPopBtn.set_taborder("1");
                p.divPopBtn.set_text("Div00");
                p.divPopBtn.set_cssclass("div_WF_PopBtn");
                p.divPopBtn.move("10","600","100%","60",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form
            obj = new Layout("mobile","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Div00.move("20","0","100%","1145",null,null);
            	}
            );
            obj.set_spacing("0px 10px 0px 20px");
            obj.set_type("vertical");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divEdtPop00.form
            obj = new Layout("default","",0,0,this.divEdtPop00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Edit00.set_taborder("0");
                p.Edit00.set_cssclass("edt_WF_EdtSch");
                p.Edit00.move("0","0",null,"40","0",null);
            	}
            );
            this.divEdtPop00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divEdtPop00.form
            obj = new Layout("mobile","",0,0,this.divEdtPop00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divEdtPop00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divEdtPop.form
            obj = new Layout("default","",0,0,this.divEdtPop.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Edit00.set_taborder("0");
                p.Edit00.set_cssclass("edt_WF_EdtSch");
                p.Edit00.move("0","0",null,"40","0",null);
            	}
            );
            this.divEdtPop.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divEdtPop.form
            obj = new Layout("mobile","",0,0,this.divEdtPop.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divEdtPop.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1000,750,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("문서 등록");

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_cssclass(" ");
                p.divForm.set_fittocontents("height");
                p.divForm.move("20","0",null,null,"20","0");

                p.staLabel00.set_taborder("1");
                p.staLabel00.set_text("등록업체ID");
                p.staLabel00.set_cssclass("sta_WF_Label_E");
                p.staLabel00.move("0.00","0","200","46",null,null);

                p.divEdtPop00.set_taborder("2");
                p.divEdtPop00.set_text("Div00");
                p.divEdtPop00.set_formscrollbartype("none none");
                p.divEdtPop00.set_formscrolltype("none");
                p.divEdtPop00.set_flexgrow("1");
                p.divEdtPop00.move("0.00","46","200","40",null,null);

                p.pan00_01.set_taborder("3");
                p.pan00_01.set_type("vertical");
                p.pan00_01.set_flexgrow("1");
                p.pan00_01.set_minwidth("");
                p.pan00_01.move("20.00","0","250","86",null,null);

                p.staLabel01_00_00.set_taborder("4");
                p.staLabel01_00_00.set_text("등록자ID");
                p.staLabel01_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel01_00_00.move("10.00","10","200","46",null,null);

                p.divEdtPop.set_taborder("5");
                p.divEdtPop.set_text("Div00");
                p.divEdtPop.set_formscrollbartype("none none");
                p.divEdtPop.set_formscrolltype("none");
                p.divEdtPop.set_flexgrow("1");
                p.divEdtPop.move("10.00","56","200","40",null,null);

                p.pan01_01_00.set_taborder("6");
                p.pan01_01_00.set_type("vertical");
                p.pan01_01_00.set_flexgrow("1");
                p.pan01_01_00.move("510.00","0","250","86",null,null);

                p.pan00.set_taborder("7");
                p.pan00.set_horizontalgap("10");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("nowrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.set_spacing("0px 0px 0px 10px");
                p.pan00.set_visible("false");
                p.pan00.move("-590","265","500","96",null,null);

                p.RaonkUpload.set_taborder("8");
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
            	}
            );
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divForm.set_cssclass("div_WF_QuickFrBgM");
                p.divForm.move("0","0",null,"1145","0",null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.Div00.form.divEdtPop01.form.edtCoNm","value","dsGet","coNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.Div00.form.divEdtPop02.form.edtUserNm","value","dsGet","userNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.Div00.form.cbo00","value","dsGet","docClsfCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.Div00.form.edtDocNm","value","dsGet","docNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.Div00.form.cbo00_00","value","dsGet","aplySe");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.Div00.form.CheckBoxSet00","value","dsGet","autoDscdYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divForm.form.Div00.form.cbo00_03","value","dsGet","prvcInclYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divForm.form.Div00.form.cbo00_01","value","dsGet","srvcSe");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divForm.form.Div00.form.cbo00_02","value","dsGet","artclSe");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.Div00.form.Edit00","value","dsGet","docVldDrtn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divEdtPop00.form.Edit00","value","dsGet","regCoCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divEdtPop.form.Edit00","value","dsGet","rgtrId");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("COM013P01.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	COM013P01.xfdl
        *  @Creator 	ELUON INS
        *  @CreateDate 	2024/09/25
        *  @Desction
        *  @Author
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/09/25			 조규완			 			  최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        this.param;
        this.validateColumn = [];
        this.save = "";
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
        			"id" : this.getOwnerFrame().id,
        		}
        	} else {
        		this.param = this.getOwnerFrame().form.fvObjArgs;
        	}

        	this.fnInit();
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        this.cfnSearch = function ()
        {
        	this.gfnCmmCode("combo", "dsCombo1", "DOC_CLSF_CD", "S");
        	this.gfnCmmCode("combo", "dsCombo2", "APLY_SE", "S");
        	this.gfnCmmCode("combo", "dsCombo3", "SRVC_SE", "S");
        	this.gfnCmmCode("combo", "dsCombo4", "ARTCL_SE", "S");

        	this.divForm.form.Div00.form.cbo00_03.set_index(0);
        };

        this.cfnClose = function() {
         	var sWinId = this.objApp.gdsOpenMenu.lookupAs(this.FRAME_MENUCOLUMNS.menuId, this.getOwnerFrame().form.fvMenuId.substring(0, 14), this.FRAME_MENUCOLUMNS.winId);
         	var objForm = this.objApp.gvFrsWork.all[sWinId];
        	objForm.form.divWork.form.cfnSearch(1);
        };
        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.selectTransaction = function()
        {
        	var strSvcId    = "select";
        	var strSvcUrl   = "doc/docboxInfoInq.do";
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
        	var strSvcUrl   = "doc/docboxInfoStrg.do";
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
        			var docVldDrtn = this.dsGet.getColumn(0, "docVldDrtn");
        			if (docVldDrtn >= 999) {
        				this.divForm.form.Div00.form.rdo00.set_index(0);
        			} else {
        				this.divForm.form.Div00.form.Panel03.set_visible(true);
        				this.divForm.form.Div00.form.rdo00.set_index(1);
        			}
        			this.divForm.form.Div00.form.pan00_00.visible = true;
        			this.divPopBtn.form.Button00_02.visible = true;
        			break;

        		case "combo":

        			break;

        		case "save":
        			var gvRetMsg = this.objApp.getVariable("gvRetMsg");
        			this.gfnAlertMsg("save_complete", gvRetMsg, null, "msgCallback");
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
        				"prgrmId" : "COM013P01" 	// 프로그램ID (화면 ID)
        			}
        			var str = JSON.stringify(obj);
        			this.RaonkUpload.AddFormData('params', str);
        			this.RaonkUpload.Transfer();
        		}
        	} else if(sPopupId == "save_complete") {
        		if (this.save == "prgrs") {
        			this.dsGet.deleteAll();
        			this.dsGet.addRow();
        			this.dsFile1.deleteAll();
        			this.dsFile.deleteAll();
        			this.gfnDeleteAllFile(this.RaonkUpload, this.dsFile1);
        			this.fnInit();
        		} else {
        			if(this.opener) {
        				this.close();
        			} else {
        				var cMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        				this.gfnCloseMenu(cMenuId);
        			}
        		}
        	} else if(sPopupId == "file_all_del1") {
        		this.gfnDeleteAllFile(this.RaonkUpload, this.dsFile1);
        	} else if(sPopupId == "file_del1") {
        		this.gfnDeleteFile(this.RaonkUpload, this.dsFile1, oRtn.paramArg);
        	}
        };

        this.fnPopupCallback = function(svcId, ret)
        {
        	switch(svcId) {
        		case "COM100P01":
        			if (!this.gfnIsNull(ret)) {
        				var param = JSON.parse(ret);
        				this.dsGet.setColumn(0, "regCoCd", param.coId);
        				this.dsGet.setColumn(0, "coNm", param.coNm);
        			}
        			break;

        		case "COM100P02":
        			if (!this.gfnIsNull(ret)) {
        				var param = JSON.parse(ret);
        				this.dsGet.setColumn(0, "rgtrId", param.empArr[0].userId);
        				this.dsGet.setColumn(0, "userNm", param.empArr[0].userNm);
        			}
        			break;
        	}
        }
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	var userId = this.objApp.gUser.userId;
        	var userNm = this.objApp.gUser.userNm;
        	var coId = this.objApp.gdsUser.getColumn(0, "coId");
        	var coNm = this.objApp.gdsUser.getColumn(0, "coNm");
        	var userSe = this.objApp.gdsUser.getColumn(0, "userSe");

        	this.dsGet.setColumn(0, "rgtrId", userId);
        	this.dsGet.setColumn(0, "userNm", userNm);
        	this.dsGet.setColumn(0, "regCoCd", coId);
        	this.dsGet.setColumn(0, "coNm", coNm);

        	if (userSe == "EMPCAT50" || userSe == "EMPCAT60") {
        		this.divForm.form.Div00.form.divEdtPop01.form.btnCoSch.visible = true;
        		this.divForm.form.Div00.form.divEdtPop02.form.btnUserSch.visible = true;
        	}

        	if(this.param != null && this.param.id != null && this.param.id != '')
        	{
        		this.selectTransaction();
        	}

        	this.cfnSearch();
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

        this.fnSetValidation = function()
        {
        	this.validateColumn = [];
        	this.validateColumn.push({"title" : "등록업체명", "com": this.divForm.form.Div00.form.divEdtPop01.form.edtCoNm});
        	this.validateColumn.push({"title" : "등록자명", "com": this.divForm.form.Div00.form.divEdtPop02.form.edtUserNm});
        	this.validateColumn.push({"title" : "문서분류", "com": this.divForm.form.Div00.form.cbo00});
        	this.validateColumn.push({"title" : "문서명", "com": this.divForm.form.Div00.form.edtDocNm});
        	this.validateColumn.push({"title" : "문서유효기간", "com": this.divForm.form.Div00.form.rdo00});
        	this.validateColumn.push({"title" : "개인정보 포함 여부", "com": this.divForm.form.Div00.form.cbo00_03});

        	var cboVal = this.divForm.form.Div00.form.cbo00.value;
        	if (cboVal == "C0101") {
        		this.validateColumn.push({"title" : "신청구분", "com": this.divForm.form.Div00.form.cbo00_00});
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
        	if(this.gvUploadCategory == 'docboxFile')
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
        	if(this.gvUploadCategory == 'docboxFile') {
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
        	this.gvUploadCategory = "docboxFile";		// 컬럼ID
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
        this.divForm_Div00_Button00_01_onclick = function(obj,e)
        {
        	var sTitle = "문서 분류 관리 팝업";
        	var objArg   = {};

        	var objOption = {
        		popuptype: "modal"	//modal,modaless
        // 		, width: 800
        // 		, height: 550			//width,height 지정하지 않음 popup form size적용
        		, autosize: true
        		, title: sTitle
        		, resize: false
        		, titlebar: true
        	};
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup("COM013P02", "work::COM/doc/COM013P02.xfdl", objArg, sPopupCallBack, objOption);
        };

        // 저장
        this.divPopBtn_Button00_01_onclick = function(obj,e)
        {
        	this.fnSetValidation();
        	this.save = "end";
        	if(this.gfnDsIsValidated(this.validateColumn) && this.fnFileValidation()) {
        		this.gfnConfirmMsg("save_confirm", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"], null);
        	}
        };

        // 저장 후 계속
        this.divForm_divPopBtn_Button00_00_onclick = function(obj,e)
        {
        	this.fnSetValidation();
        	this.save = "prgrs";
        	if(this.gfnDsIsValidated(this.validateColumn) && this.fnFileValidation()) {
        		this.gfnConfirmMsg("save_confirm", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"], null);
        	}
        };

        this.divForm_Div00_cbo00_onitemchanged = function(obj,e)
        {
        	// 개인정보 동의서이면 신청구분, 서비스 구분, 항목구분 표출
        	var cboVal = this.divForm.form.Div00.form.cbo00.value;
        	if (cboVal == "C0101") {
        		this.divForm.form.Div00.form.pan00_00.visible = true;
        		this.divPopBtn.form.Button00_02.visible = true;
        	} else {
        		this.divForm.form.Div00.form.pan00_00.visible = false;
        		this.divPopBtn.form.Button00_02.visible = false;
        	}

        	this.divForm.form.resetScroll();
        };

        this.divForm_Div00_rdo00_onitemchanged = function(obj,e)
        {
        	var radioVal = this.divForm.form.Div00.form.rdo00.value;

        	if (radioVal == "0") {
        		this.divForm.form.Div00.form.Panel03.set_visible(true);
        		this.divForm.form.Div00.form.Edit00.set_value(0);
        	} else {
        		this.divForm.form.Div00.form.Panel03.set_visible(false);
        		this.divForm.form.Div00.form.Edit00.set_value(999);
        	}

        	this.divForm.form.resetScroll();
        };

        this.divForm_Div00_divEdtPop00_btnPop_onclick = function(obj,e)
        {
        	var sTitle = "회사 선택 팝업";
        	var objArg   = {};

        	var objOption = {
        		popuptype: "modal"	//modal,modaless
        // 		, width: 1000
        // 		, height: 600			//width,height 지정하지 않음 popup form size적용
        		, autosize: true
        		, title: sTitle
        		, resize: false
        		, titlebar: true
        	};
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup("COM100P01", "work::COM/crtr/COM100P01.xfdl", objArg, sPopupCallBack, objOption);
        };

        this.divForm_Div00_divEdtPop_btnPop_onclick = function(obj,e)
        {
        	var sTitle = "사용자 검색 팝업";
        	var objArg   = {};

        	var objOption = {
        		popuptype: "modal"	//modal,modaless
        // 		, width: 800
        // 		, height: 650			//width,height 지정하지 않음 popup form size적용
        		, autosize: true
        		, title: sTitle
        		, resize: false
        		, titlebar: true
        	};
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup("COM100P02", "work::COM/crtr/COM100P02.xfdl", objArg, sPopupCallBack, objOption);
        };

        // 양식 다운로드
        this.divPopBtn_Button00_02_onclick = function(obj,e)
        {
        	this.gfnNormalDownload("COM013P01", "PRVC_WTCS");
        };

        this.btnMin_onclick = function(obj,e)
        {
        	var objNm = obj.name;
        	var objClass = obj.cssclass;
        	var objDiv = null;
        	var divVisible = false;

        	// 해당 div 찾아줌.
        	if(objNm == "btnMinDocbox") {
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
            this.divForm.form.btnMinDocbox.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.Div00.form.btn_file_1.addEventHandler("onclick",this.divForm_Div00_btn_file_1_onclick,this);
            this.divForm.form.Div00.form.btn_del_file_1.addEventHandler("onclick",this.divForm_Div00_btn_del_file_1_onclick,this);
            this.divForm.form.Div00.form.Grid01.addEventHandler("oncellclick",this.divForm_Div00_Grid01_oncellclick,this);
            this.divForm.form.Div00.form.Grid01.addEventHandler("oncelldblclick",this.divForm_Div00_Grid01_oncelldblclick,this);
            this.divForm.form.Div00.form.cbo00_03.addEventHandler("onitemchanged",this.cbo00_onitemchanged,this);
            this.divForm.form.Div00.form.cbo00.addEventHandler("onitemchanged",this.divForm_Div00_cbo00_onitemchanged,this);
            this.divForm.form.Div00.form.rdo00.addEventHandler("onitemchanged",this.divForm_Div00_rdo00_onitemchanged,this);
            this.divForm.form.Div00.form.divEdtPop02.form.btnUserSch.addEventHandler("onclick",this.divForm_Div00_divEdtPop_btnPop_onclick,this);
            this.divForm.form.Div00.form.divEdtPop01.form.btnCoSch.addEventHandler("onclick",this.divForm_Div00_divEdtPop00_btnPop_onclick,this);
            this.divForm.form.Div00.form.Button00_01.addEventHandler("onclick",this.divForm_Div00_Button00_01_onclick,this);
            this.divForm.form.divPopBtn.form.Button00_02.addEventHandler("onclick",this.divPopBtn_Button00_02_onclick,this);
            this.divForm.form.divPopBtn.form.Button00_00.addEventHandler("onclick",this.divForm_divPopBtn_Button00_00_onclick,this);
            this.divForm.form.divPopBtn.form.Button00_01.addEventHandler("onclick",this.divPopBtn_Button00_01_onclick,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterAddFile",this.RaonkUpload_RAONKUPLOAD_AfterAddFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_CreationComplete",this.RaonkUpload_RAONKUPLOAD_CreationComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_UploadComplete",this.RaonkUpload_RAONKUPLOAD_UploadComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_OnError",this.RaonkUpload_RAONKUPLOAD_OnError,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_BeforeAddFile",this.RaonkUpload_RAONKUPLOAD_BeforeAddFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterAddAllFile",this.RaonkUpload_RAONKUPLOAD_AfterAddAllFile,this);
        };
        this.loadIncludeScript("COM013P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
