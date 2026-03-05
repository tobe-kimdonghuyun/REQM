(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM001P051");
            this.set_titletext("계정권한 신청(신청자)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,2800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGet", this);
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"rfrncId\" type=\"STRING\" size=\"256\"/><Column id=\"rfrncNm\" type=\"STRING\" size=\"256\"/><Column id=\"spvsrId\" type=\"STRING\" size=\"256\"/><Column id=\"spvsrNm\" type=\"STRING\" size=\"256\"/><Column id=\"spvsrDeptId\" type=\"STRING\" size=\"256\"/><Column id=\"spvsrDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcrId\" type=\"STRING\" size=\"256\"/><Column id=\"prcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"useBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"useEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyRsn\" type=\"STRING\" size=\"256\"/><Column id=\"prvcAgreDocId\" type=\"STRING\" size=\"256\"/><Column id=\"esntlAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"chcAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"prcsSttsNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcsSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcsDsctn\" type=\"STRING\" size=\"256\"/><Column id=\"evdncDocNo\" type=\"STRING\" size=\"256\"/><Column id=\"ctgryCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobCd\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"esntlAgreYn\">Y</Col><Col id=\"chcAgreYn\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"fullName\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"evdncDocKnd\" type=\"STRING\" size=\"256\"/><Column id=\"evdncDocNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAuthrt", this);
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"authrtId\" type=\"STRING\" size=\"256\"/><Column id=\"authrtNm\" type=\"STRING\" size=\"256\"/><Column id=\"authrtExpln\" type=\"STRING\" size=\"256\"/><Column id=\"rgnAuthrtUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"authYn\" type=\"STRING\" size=\"256\"/><Column id=\"authrtUserSe\" type=\"STRING\" size=\"256\"/><Column id=\"docList\" type=\"STRING\" size=\"256\"/><Column id=\"docNmList\" type=\"STRING\" size=\"256\"/><Column id=\"docNeedList\" type=\"STRING\" size=\"256\"/><Column id=\"docNeedNmList\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRfrncAuthrt", this);
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"authrtId\" type=\"STRING\" size=\"256\"/><Column id=\"authrtNm\" type=\"STRING\" size=\"256\"/><Column id=\"authrtExpln\" type=\"STRING\" size=\"256\"/><Column id=\"rgnAuthrtUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"authYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"fullName\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"evdncDocKnd\" type=\"STRING\" size=\"256\"/><Column id=\"evdncDocNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile3", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"fullName\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"evdncDocKnd\" type=\"STRING\" size=\"256\"/><Column id=\"evdncDocNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile4", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"fullName\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"evdncDocKnd\" type=\"STRING\" size=\"256\"/><Column id=\"evdncDocNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile5", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"fullName\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"evdncDocKnd\" type=\"STRING\" size=\"256\"/><Column id=\"evdncDocNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDoc", this);
            obj._setContents("<ColumnInfo><Column id=\"evdncDocKnd\" type=\"STRING\" size=\"256\"/><Column id=\"evdncDocNm\" type=\"STRING\" size=\"256\"/><Column id=\"initYn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divGuide","1590.00","135","450","385",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("false");
            obj.set_cssclass("div_GD_Tip");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","63","71","34","34",null,null,null,null,null,null,this.divGuide.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.divGuide.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","107","71","34","34",null,null,null,null,null,null,this.divGuide.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divGuide.addChild(obj.name, obj);

            obj = new Div("divForm","20","0",null,null,"20","60",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Panel("sub_tit01","-14","28","100%","70",null,null,null,null,"70",null,this.divForm.form);
            obj.set_taborder("7");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div01","0","0","100%","535",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("전임자ID");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan00_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("3");
            obj.set_text("전임자 성명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01_01_00","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_01_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan00_02","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("6");
            obj.set_type("horizontal");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"pan01_01_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("7");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan00_02\"/><PanelItem id=\"PanelItem03\" componentid=\"pan00_02_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("8");
            obj.set_text("사용기간");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("10");
            obj.set_text("신청사유");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtAplyRsn","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("11");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01_01_00_01","10.00","98","100%","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("12");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtAplyRsn\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan00_02_00","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("13");
            obj.set_type("horizontal");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"pan01_01_00_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01","0","60","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("14");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan00_02_00\"/><PanelItem id=\"PanelItem03\" componentid=\"pan00_02_00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel00","147","232","100%","45",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("24");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"calStart\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00\"/><PanelItem id=\"PanelItem02\" componentid=\"calEnd\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel04_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("15");
            obj.set_text("권한");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan03_01","10.00","98","1400","330",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("16");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel04_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan03","0","60","100.00%","341",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("17");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan03_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_01_01","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan00_02_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("18");
            obj.set_type("horizontal");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj.set_spacing("10px 0p;x 0px 0px");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"PanelGrdBtn01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan00_02_00_00","10.00","98","300","1",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("19");
            obj.set_type("horizontal");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_02","1026","108","120","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("20");
            obj.set_text("전임자 검색");
            obj.set_fittocontents("width");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Button("Button01_01","1226","120","120","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("21");
            obj.set_text("전임자 권한 불러오기");
            obj.set_fittocontents("width");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn01","685","50","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("22");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Button00_02\"/><PanelItem id=\"PanelItem00\" componentid=\"Button01_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","20","100.00%","330",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("23");
            obj.set_binddataset("dsAuthrt");
            obj.set_autofittype("col");
            obj.getSetter("uFunction").set("checkbox");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"350\"/><Column size=\"400\"/><Column size=\"450\"/><Column size=\"450\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"권한명\"/><Cell col=\"1\" text=\"권한설명\"/><Cell col=\"2\" text=\"증빙서류\"/><Cell col=\"3\" text=\"제출 필요 서류\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:authrtNm\" textAlign=\"center\" edittype=\"none\" displaytype=\"normal\" wordWrap=\"char\"/><Cell col=\"1\" text=\"bind:authrtExpln\" textAlign=\"left\" edittype=\"none\" displaytype=\"normal\" combodataset=\"dsCombo\" combocodecol=\"cdId\" combodatacol=\"cdNm\" wordWrap=\"char\"/><Cell col=\"2\" text=\"bind:docNmList\" textAlign=\"left\" edittype=\"none\" displaytype=\"normal\" wordWrap=\"char\"/><Cell col=\"3\" text=\"bind:docNeedNmList\" cssclass=\"CellEnd\" edittype=\"none\" displaytype=\"normal\" wordWrap=\"char\"/></Band></Format></Formats>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Calendar("calStart","0","0","44.83%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("25");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","30","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("26");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_Dash");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Calendar("calEnd","0","0","44.827586206896555%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("27");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("sub_tit02","-34","815","100%","70",null,null,null,null,"70",null,this.divForm.form);
            obj.set_taborder("11");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div02","0","30","100%","297",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","10.00","98","100%","150",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("0");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divGrd\"/><PanelItem id=\"PanelItem01\" componentid=\"txa00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","151",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("1");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("3");
            obj.set_text("개인정보(필수) 사용동의여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Radio("rdoEsntl","127","203","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("4");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            var divForm_form_Div02_form_rdoEsntl_innerdataset = new nexacro.NormalDataset("divForm_form_Div02_form_rdoEsntl_innerdataset", obj);
            divForm_form_Div02_form_rdoEsntl_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">동의함</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">동의하지 않음</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div02_form_rdoEsntl_innerdataset);
            obj.set_text("계약선택");
            obj.set_value("0");
            obj.set_index("0");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"rdoEsntl\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_01_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("6");
            obj.set_text("개인정보(선택) 사용동의여부");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Radio("Radio00_00_00","127","203","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("7");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            var divForm_form_Div02_form_Radio00_00_00_innerdataset = new nexacro.NormalDataset("divForm_form_Div02_form_Radio00_00_00_innerdataset", obj);
            divForm_form_Div02_form_Radio00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">동의함</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">동의하지 않음</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div02_form_Radio00_00_00_innerdataset);
            obj.set_text("계약선택");
            obj.set_value("0");
            obj.set_index("0");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("5");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Radio00_00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan04","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("9");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel01_00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("sta00_00","20","20","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("10");
            obj.set_text("(선택 동의 항목은 동의하지 않으셔도 회원 가입이 가능합니다.)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel04_02_00_00_00","20","150","100.00%","50",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("11");
            obj.set_spacing("0px 20px 0px 20px");
            obj.set_fittocontents("height");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel04","0","560","100%","146",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("12");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_fittocontents("height");
            obj.set_spacing("0px 0px 10px 0px ");
            obj.set_tabledirection("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"pan04\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel04_02_00_00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new TextArea("txa00","0","14","100%","150",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("2");
            obj.set_value("개인정보 수집 및 이용 관련 안내문 및 동의 여부 체크\n(필수, 선택 모두)");
            obj.set_readonly("true");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staSubTitle03","-45","1050","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("12");
            obj.set_text("증빙 자료");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit03","-45","1030","100%","70",null,null,null,null,"70",null,this.divForm.form);
            obj.set_taborder("15");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle03\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel031\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinAtfl","1291","1058","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_visible("true");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel031","650","1050","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("14");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 20px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnMinAtfl\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div03","0","570.392","100.00%","1295",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            obj.set_visible("true");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel01","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("0");
            obj.set_text("증빙 자료");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("file01","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_initvalueid("1");
            obj.set_taborder("1");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panBtnFile01","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("2");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"file01\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panTitle01","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("3");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile01\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staFile01_01","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("4");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staFile01_02","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("5");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staFile01_03","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("6");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panFileNum01","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("7");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staFile01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"staFile01_02\"/><PanelItem id=\"PanelItem02\" componentid=\"staFile01_03\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btn_del_file_1","512","135","125","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_initvalueid("1");
            obj.set_taborder("8");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panBtnDel01","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("9");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_del_file_1\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel01","20.00","60","100%","56",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum01\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel01\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Grid("Grid01","20.00","114","100%","100",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_initvalueid("1");
            obj.set_taborder("11");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staNeedFile","40.00","150","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("13");
            obj.set_text("[증빙서류]를 업로드 해 주시기 바랍니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel04_02_00_00_00","20","150","1090%","130",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("14");
            obj.set_spacing("10px 0px 0px 0px");
            obj.set_fittocontents("height");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staNeedFile\"/><PanelItem id=\"PanelItem02\" componentid=\"sta00_00_00_00_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_00","40.00","150","100%","80",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("15");
            obj.set_text("-사업자등록증의 사업자등록번호와 입주자증명서류(임대계약서, 낙찰증명서 등)에 있는 사업자등록번호가 동일해야 합니다.\r\n-(중요)재직증명서 내 주민등록번호, 생년월일, 자택주소는 삭제(마스킹)하셔야 하며, 삭제(마스킹)하지 않고 가입신청 시 불승인 처리됩니다.\r\n-임대계약서, 낙찰증명서 등 (인천국제공항공사와 계약된 서류만 가능)\r\n-이동지역 관련 양사 계약 증빙 서류는 이동지역 회사 및 실제 소속 회사간 계약관련 증빙 서류만 인정\r\n");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_Des");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("pan00_02_00_00","10.00","98","300","1",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("16");
            obj.set_type("horizontal");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("pan01","0","60","100.00%","140",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("17");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel04_02_00_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"pan00_02_00_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panFile01","0","42","100.00%","231",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("12");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid01\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel02","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("18");
            obj.set_text("증빙 자료");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("file02","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_initvalueid("2");
            obj.set_taborder("19");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panBtnFile02","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("20");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"file02\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panTitle02","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("21");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel02\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile02\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staFile02_01","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("22");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staFile02_02","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("23");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staFile02_03","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("24");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panFileNum02","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("25");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staFile02_01\"/><PanelItem id=\"PanelItem01\" componentid=\"staFile02_02\"/><PanelItem id=\"PanelItem02\" componentid=\"staFile02_03\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btn_del_file_2","512","135","125","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_initvalueid("2");
            obj.set_taborder("26");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panBtnDel02","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("27");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_del_file_2\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel02","20.00","60","100%","56",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("28");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum02\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel02\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Grid("Grid02","20.00","114","100%","100",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_initvalueid("2");
            obj.set_taborder("29");
            obj.set_binddataset("dsFile2");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panFile02","0","42","100.00%","231",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("30");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid02\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel03","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("31");
            obj.set_text("증빙 자료");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("file03","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_initvalueid("3");
            obj.set_taborder("32");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panBtnFile03","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("33");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"file03\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panTitle03","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("34");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile03\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staFile03_01","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("35");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staFile03_02","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("36");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staFile03_03","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("37");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panFileNum03","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("38");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staFile03_01\"/><PanelItem id=\"PanelItem01\" componentid=\"staFile03_02\"/><PanelItem id=\"PanelItem02\" componentid=\"staFile03_03\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btn_del_file_3","512","135","125","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_initvalueid("3");
            obj.set_taborder("39");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panBtnDel03","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("40");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_del_file_3\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel03","20.00","60","100%","56",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("41");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum03\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel03\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Grid("Grid03","20.00","114","100%","100",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_initvalueid("3");
            obj.set_taborder("42");
            obj.set_binddataset("dsFile3");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panFile03","0","42","100.00%","231",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("43");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle03\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel03\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid03\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel04","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("44");
            obj.set_text("증빙 자료");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("file04","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_initvalueid("4");
            obj.set_taborder("45");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panBtnFile04","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("46");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"file04\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panTitle04","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("47");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel04\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile04\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staFile04_01","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("48");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staFile04_02","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("49");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staFile04_03","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("50");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panFileNum04","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("51");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staFile04_01\"/><PanelItem id=\"PanelItem01\" componentid=\"staFile04_02\"/><PanelItem id=\"PanelItem02\" componentid=\"staFile04_03\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btn_del_file_4","512","135","125","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_initvalueid("4");
            obj.set_taborder("52");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panBtnDel04","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("53");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_del_file_4\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel04","20.00","60","100%","56",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("54");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum04\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel04\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Grid("Grid04","20.00","114","100%","100",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_initvalueid("4");
            obj.set_taborder("55");
            obj.set_binddataset("dsFile4");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panFile04","0","42","100.00%","231",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("56");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle04\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel04\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid04\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel05","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("57");
            obj.set_text("증빙 자료");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("file05","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_initvalueid("5");
            obj.set_taborder("58");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panBtnFile05","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("59");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"file05\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panTitle05","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("60");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile05\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staFile05_01","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("61");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staFile05_02","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("62");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staFile05_03","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("63");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panFileNum05","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("64");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staFile05_01\"/><PanelItem id=\"PanelItem01\" componentid=\"staFile05_02\"/><PanelItem id=\"PanelItem02\" componentid=\"staFile05_03\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btn_del_file_5","512","135","125","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_initvalueid("5");
            obj.set_taborder("65");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panBtnDel05","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("66");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_del_file_5\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel05","20.00","60","100%","56",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("67");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum05\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel05\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Grid("Grid05","20.00","114","100%","100",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_initvalueid("5");
            obj.set_taborder("68");
            obj.set_binddataset("dsFile5");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panFile05","0","42","100.00%","231",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("69");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle05\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel05\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid05\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("sub_tit04","-35","2368","100%","70",null,null,null,null,"70",null,this.divForm.form);
            obj.set_taborder("19");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle04\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel04\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle04","-35","2388","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("16");
            obj.set_text("처리내역");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinPrcs","1301","2396","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div04","0","30","100.00%","266",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("0");
            obj.set_text("처리상태");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edt00_02","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("pan01_01_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"edt00_02\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("3");
            obj.set_text("처리자");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edt00_02_00","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("pan01_01_00","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edt00_02_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("6");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"pan01_01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan01_01_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel02_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("7");
            obj.set_text("처리내역");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edt00_02_03","10.00","158","100%","110",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("pan02_02","10.00","98","300","100%",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel02_01\"/><PanelItem id=\"PanelItem02\" componentid=\"edt00_02_03\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("pan02","0","60","100.00%","170",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("10");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"pan02_02\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel04","660","2388","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("18");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 20px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnMinPrcs\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle01","-14","48","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("4");
            obj.set_text("권한신청 정보 (신청자)");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinAuthrtInfo","1436","718","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_visible("true");
            obj.set_text("");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01","675","48","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("6");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 20px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnMinAuthrtInfo\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle02","-34","835","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("8");
            obj.set_text("개인정보 수집·이용 동의");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinAgreYn","1390.00","18","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_visible("true");
            obj.set_text("");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel02","661","835","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("10");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 20px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnMinAgreYn\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new RaonkUpload("RaonkUpload","-826.00","6","49.46%","200",null,null,null,null,null,null,this);
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

            obj = new Div("divPopBtn","20",null,null,"60","20","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","457.00","30","100","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("0");
            obj.set_text("권한신청");
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
                p.Button00_00.set_taborder("0");
                p.Button00_00.set_cssclass("btn_WF_ACPlus");
                p.Button00_00.set_visible("false");
                p.Button00_00.move("63","71","34","34",null,null);

                p.Button00_00_00.set_taborder("1");
                p.Button00_00_00.set_cssclass("btn_WF_ACMinus");
                p.Button00_00_00.move("107","71","34","34",null,null);
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
            //-- Default Layout : this.divForm.form.Div01.form
            obj = new Layout("default","",0,0,this.divForm.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel00.set_taborder("0");
                p.staLabel00.set_text("전임자ID");
                p.staLabel00.set_cssclass("sta_WF_Label");
                p.staLabel00.move("10","98","100%","46",null,null);

                p.pan00_01.set_taborder("2");
                p.pan00_01.set_type("vertical");
                p.pan00_01.set_flexgrow("1");
                p.pan00_01.set_minwidth("");
                p.pan00_01.move("10.00","98","300","86",null,null);

                p.staLabel01_00_00.set_taborder("3");
                p.staLabel01_00_00.set_text("전임자 성명");
                p.staLabel01_00_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00_00.move("10","98","100%","46",null,null);

                p.pan01_01_00.set_taborder("5");
                p.pan01_01_00.set_type("vertical");
                p.pan01_01_00.set_flexgrow("1");
                p.pan01_01_00.move("10.00","98","300","86",null,null);

                p.pan00_02.set_taborder("6");
                p.pan00_02.set_type("horizontal");
                p.pan00_02.set_flexgrow("1");
                p.pan00_02.set_horizontalgap("10");
                p.pan00_02.set_minwidth("");
                p.pan00_02.move("10.00","98","300","86",null,null);

                p.pan00.set_taborder("7");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("0px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.move("0","60","100.00%","97",null,null);

                p.staLabel01_00.set_taborder("8");
                p.staLabel01_00.set_text("사용기간");
                p.staLabel01_00.set_cssclass("sta_WF_Label_E");
                p.staLabel01_00.move("10","98","100%","46",null,null);

                p.pan01_01.set_taborder("9");
                p.pan01_01.set_type("vertical");
                p.pan01_01.set_flexgrow("1");
                p.pan01_01.move("10.00","98","300","86",null,null);

                p.staLabel01_00_00_01.set_taborder("10");
                p.staLabel01_00_00_01.set_text("신청사유");
                p.staLabel01_00_00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel01_00_00_01.move("10","98","100%","46",null,null);

                p.edtAplyRsn.set_taborder("11");
                p.edtAplyRsn.move("10.00","158","100%","40",null,null);

                p.pan01_01_00_01.set_taborder("12");
                p.pan01_01_00_01.set_type("vertical");
                p.pan01_01_00_01.move("10.00","98","100%","86",null,null);

                p.pan00_02_00.set_taborder("13");
                p.pan00_02_00.set_type("horizontal");
                p.pan00_02_00.set_flexgrow("1");
                p.pan00_02_00.set_minwidth("");
                p.pan00_02_00.move("10.00","98","300","86",null,null);

                p.pan01.set_taborder("14");
                p.pan01.set_horizontalgap("20");
                p.pan01.set_flexcrossaxiswrapalign("start");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_verticalgap("0");
                p.pan01.set_spacing("0px 20px 10px 20px");
                p.pan01.set_cssclass("pal_WF_DtlBg");
                p.pan01.set_flexshrink("1");
                p.pan01.set_fittocontents("height");
                p.pan01.move("0","60","100.00%","97",null,null);

                p.Panel00.set_taborder("24");
                p.Panel00.move("147","232","100%","45",null,null);

                p.staLabel04_00.set_taborder("15");
                p.staLabel04_00.set_text("권한");
                p.staLabel04_00.set_cssclass("sta_WF_Label");
                p.staLabel04_00.move("10","98","100%","46",null,null);

                p.pan03_01.set_taborder("16");
                p.pan03_01.set_type("vertical");
                p.pan03_01.set_flexgrow("1");
                p.pan03_01.move("10.00","98","1400","330",null,null);

                p.pan03.set_taborder("17");
                p.pan03.set_horizontalgap("20");
                p.pan03.set_flexcrossaxiswrapalign("start");
                p.pan03.set_flexwrap("wrap");
                p.pan03.set_fittocontents("height");
                p.pan03.set_verticalgap("0");
                p.pan03.set_spacing("0px 20px 10px 20px");
                p.pan03.set_cssclass("pal_WF_DtlBg");
                p.pan03.move("0","60","100.00%","341",null,null);

                p.edt00.set_taborder("1");
                p.edt00.set_readonly("true");
                p.edt00.move("10.00","158","100%","40",null,null);

                p.edt00_01_01.set_taborder("4");
                p.edt00_01_01.set_readonly("true");
                p.edt00_01_01.move("10.00","158","100%","40",null,null);

                p.pan00_02_01.set_taborder("18");
                p.pan00_02_01.set_type("horizontal");
                p.pan00_02_01.set_flexgrow("1");
                p.pan00_02_01.set_horizontalgap("10");
                p.pan00_02_01.set_spacing("10px 0p;x 0px 0px");
                p.pan00_02_01.set_flexcrossaxisalign("end");
                p.pan00_02_01.set_minwidth("");
                p.pan00_02_01.move("10.00","98","300","86",null,null);

                p.pan00_02_00_00.set_taborder("19");
                p.pan00_02_00_00.set_type("horizontal");
                p.pan00_02_00_00.set_flexgrow("1");
                p.pan00_02_00_00.set_minwidth("");
                p.pan00_02_00_00.move("10.00","98","300","1",null,null);

                p.Button00_02.set_taborder("20");
                p.Button00_02.set_text("전임자 검색");
                p.Button00_02.set_fittocontents("width");
                p.Button00_02.move("1026","108","120","40",null,null);

                p.Button01_01.set_taborder("21");
                p.Button01_01.set_text("전임자 권한 불러오기");
                p.Button01_01.set_fittocontents("width");
                p.Button01_01.move("1226","120","120","40",null,null);

                p.PanelGrdBtn01.set_taborder("22");
                p.PanelGrdBtn01.set_horizontalgap("10");
                p.PanelGrdBtn01.set_flexcrossaxisalign("end");
                p.PanelGrdBtn01.move("685","50","100%","40",null,null);

                p.Grid00.set_taborder("23");
                p.Grid00.set_binddataset("dsAuthrt");
                p.Grid00.set_autofittype("col");
                p.Grid00.getSetter("uFunction").set("checkbox");
                p.Grid00.move("0","20","100.00%","330",null,null);

                p.calStart.set_taborder("25");
                p.calStart.set_dateformat("yyyy-MM-dd");
                p.calStart.move("0","0","44.83%","40",null,null);

                p.Static00.set_taborder("26");
                p.Static00.set_text("~");
                p.Static00.set_cssclass("sta_WF_Dash");
                p.Static00.move("0","0","30","40",null,null);

                p.calEnd.set_taborder("27");
                p.calEnd.set_dateformat("yyyy-MM-dd");
                p.calEnd.move("0","0","44.827586206896555%","40",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div01.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.pan00_02_01.set_flexcrossaxisalign("center");
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div02.form
            obj = new Layout("default","",0,0,this.divForm.form.Div02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00_00.set_taborder("0");
                p.Panel00_00.set_type("vertical");
                p.Panel00_00.set_minwidth("");
                p.Panel00_00.move("10.00","98","100%","150",null,null);

                p.pan00.set_taborder("1");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("10px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.move("0","60","100.00%","151",null,null);

                p.staLabel01_00_01.set_taborder("3");
                p.staLabel01_00_01.set_text("개인정보(필수) 사용동의여부");
                p.staLabel01_00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel01_00_01.move("10","98","100%","46",null,null);

                p.rdoEsntl.set_taborder("4");
                p.rdoEsntl.set_fittocontents("width");
                p.rdoEsntl.set_innerdataset(divForm_form_Div02_form_rdoEsntl_innerdataset);
                p.rdoEsntl.set_codecolumn("codecolumn");
                p.rdoEsntl.set_datacolumn("datacolumn");
                p.rdoEsntl.set_columncount("2");
                p.rdoEsntl.set_value("0");
                p.rdoEsntl.set_index("0");
                p.rdoEsntl.move("127","203","100%","40",null,null);

                p.Panel01_00.set_taborder("5");
                p.Panel01_00.set_type("vertical");
                p.Panel01_00.set_flexgrow("1");
                p.Panel01_00.set_fittocontents("height");
                p.Panel01_00.move("10.00","98","300","86",null,null);

                p.staLabel01_00_01_00_00.set_taborder("6");
                p.staLabel01_00_01_00_00.set_text("개인정보(선택) 사용동의여부");
                p.staLabel01_00_01_00_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00_01_00_00.move("10","98","100%","46",null,null);

                p.Radio00_00_00.set_taborder("7");
                p.Radio00_00_00.set_fittocontents("width");
                p.Radio00_00_00.set_innerdataset(divForm_form_Div02_form_Radio00_00_00_innerdataset);
                p.Radio00_00_00.set_codecolumn("codecolumn");
                p.Radio00_00_00.set_datacolumn("datacolumn");
                p.Radio00_00_00.set_columncount("2");
                p.Radio00_00_00.set_value("0");
                p.Radio00_00_00.set_index("0");
                p.Radio00_00_00.move("127","203","100%","40",null,null);

                p.Panel01_00_00.set_taborder("8");
                p.Panel01_00_00.set_type("vertical");
                p.Panel01_00_00.set_flexgrow("1");
                p.Panel01_00_00.set_verticalgap("5");
                p.Panel01_00_00.set_fittocontents("height");
                p.Panel01_00_00.move("10.00","98","300","86",null,null);

                p.pan04.set_taborder("9");
                p.pan04.set_horizontalgap("20");
                p.pan04.set_flexcrossaxiswrapalign("start");
                p.pan04.set_flexwrap("wrap");
                p.pan04.set_fittocontents("height");
                p.pan04.set_verticalgap("0");
                p.pan04.set_spacing("0px 20px 10px 20px");
                p.pan04.set_flexgrow("1");
                p.pan04.move("0","60","100.00%","96",null,null);

                p.sta00_00.set_taborder("10");
                p.sta00_00.set_text("(선택 동의 항목은 동의하지 않으셔도 회원 가입이 가능합니다.)");
                p.sta00_00.set_cssclass("sta_WF_Des");
                p.sta00_00.set_fittocontents("height");
                p.sta00_00.move("20","20","100%","40",null,null);

                p.Panel04_02_00_00_00.set_taborder("11");
                p.Panel04_02_00_00_00.set_spacing("0px 20px 0px 20px");
                p.Panel04_02_00_00_00.set_fittocontents("height");
                p.Panel04_02_00_00_00.set_type("vertical");
                p.Panel04_02_00_00_00.move("20","150","100.00%","50",null,null);

                p.Panel04.set_taborder("12");
                p.Panel04.set_type("vertical");
                p.Panel04.set_cssclass("pal_WF_DtlBg");
                p.Panel04.set_fittocontents("height");
                p.Panel04.set_spacing("0px 0px 10px 0px ");
                p.Panel04.set_tabledirection("vertical");
                p.Panel04.move("0","560","100%","146",null,null);

                p.txa00.set_taborder("2");
                p.txa00.set_value("개인정보 수집 및 이용 관련 안내문 및 동의 여부 체크\n(필수, 선택 모두)");
                p.txa00.set_readonly("true");
                p.txa00.move("0","14","100%","150",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div02.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div02.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div02.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div03.form
            obj = new Layout("default","",0,0,this.divForm.form.Div03.form,function(p){});
            obj.set_type("vertical");
            this.divForm.form.Div03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.Div04.form
            obj = new Layout("default","",0,0,this.divForm.form.Div04.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel01_00_01.set_taborder("0");
                p.staLabel01_00_01.set_text("처리상태");
                p.staLabel01_00_01.set_cssclass("sta_WF_Label");
                p.staLabel01_00_01.move("10","98","100%","46",null,null);

                p.edt00_02.set_taborder("1");
                p.edt00_02.set_readonly("true");
                p.edt00_02.move("10.00","158","100%","40",null,null);

                p.pan01_01_01.set_taborder("2");
                p.pan01_01_01.set_type("vertical");
                p.pan01_01_01.set_flexgrow("1");
                p.pan01_01_01.move("10.00","98","300","86",null,null);

                p.staLabel01_00_00.set_taborder("3");
                p.staLabel01_00_00.set_text("처리자");
                p.staLabel01_00_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00_00.move("10","98","100%","46",null,null);

                p.edt00_02_00.set_taborder("4");
                p.edt00_02_00.set_readonly("true");
                p.edt00_02_00.move("10.00","158","100%","40",null,null);

                p.pan01_01_00.set_taborder("5");
                p.pan01_01_00.set_type("vertical");
                p.pan01_01_00.set_flexgrow("1");
                p.pan01_01_00.move("10.00","98","300","86",null,null);

                p.pan00.set_taborder("6");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("0px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.set_type("horizontal");
                p.pan00.move("0","60","100.00%","96",null,null);

                p.staLabel02_01.set_taborder("7");
                p.staLabel02_01.set_text("처리내역");
                p.staLabel02_01.set_cssclass("sta_WF_Label");
                p.staLabel02_01.move("10","98","100%","46",null,null);

                p.edt00_02_03.set_taborder("8");
                p.edt00_02_03.set_readonly("true");
                p.edt00_02_03.move("10.00","158","100%","110",null,null);

                p.pan02_02.set_taborder("9");
                p.pan02_02.set_type("vertical");
                p.pan02_02.set_flexgrow("1");
                p.pan02_02.move("10.00","98","300","100%",null,null);

                p.pan02.set_taborder("10");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.move("0","60","100.00%","170",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div04.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div04.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div04.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div04.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.sub_tit01.set_taborder("7");
                p.sub_tit01.set_background("#ffffff");
                p.sub_tit01.set_flexcrossaxisalign("end");
                p.sub_tit01.set_minheight("70");
                p.sub_tit01.set_maxheight("");
                p.sub_tit01.move("-14","28","100%","70",null,null);

                p.Div01.set_taborder("0");
                p.Div01.set_text("Div00");
                p.Div01.set_cssclass("div_WF_Bg");
                p.Div01.set_fittocontents("height");
                p.Div01.move("0","0","100%","535",null,null);

                p.sub_tit02.set_taborder("11");
                p.sub_tit02.set_background("#ffffff");
                p.sub_tit02.set_flexcrossaxisalign("end");
                p.sub_tit02.set_minheight("70");
                p.sub_tit02.set_maxheight("");
                p.sub_tit02.move("-34","815","100%","70",null,null);

                p.Div02.set_taborder("1");
                p.Div02.set_text("Div00");
                p.Div02.set_cssclass("div_WF_Bg");
                p.Div02.set_fittocontents("height");
                p.Div02.move("0","30","100%","297",null,null);

                p.staSubTitle03.set_taborder("12");
                p.staSubTitle03.set_text("증빙 자료");
                p.staSubTitle03.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle03.move("-45","1050","100%","50",null,null);

                p.sub_tit03.set_taborder("15");
                p.sub_tit03.set_background("#ffffff");
                p.sub_tit03.set_flexcrossaxisalign("end");
                p.sub_tit03.set_minheight("70");
                p.sub_tit03.set_maxheight("");
                p.sub_tit03.move("-45","1030","100%","70",null,null);

                p.btnMinAtfl.set_taborder("13");
                p.btnMinAtfl.set_cssclass("btn_WF_ACMinus");
                p.btnMinAtfl.set_visible("true");
                p.btnMinAtfl.move("1291","1058","34","34",null,null);

                p.Panel031.set_taborder("14");
                p.Panel031.set_cssclass("pal_WF_TitBtnBg");
                p.Panel031.set_spacing("0px 20px");
                p.Panel031.set_horizontalgap("10");
                p.Panel031.set_flexcrossaxisalign("center");
                p.Panel031.set_flexmainaxisalign("end");
                p.Panel031.move("650","1050","100%","50",null,null);

                p.Div03.set_taborder("3");
                p.Div03.set_text("Div00");
                p.Div03.set_cssclass("div_WF_Bg");
                p.Div03.set_fittocontents("height");
                p.Div03.set_visible("true");
                p.Div03.move("0","570.392","100.00%","1295",null,null);

                p.sub_tit04.set_taborder("19");
                p.sub_tit04.set_background("#ffffff");
                p.sub_tit04.set_flexcrossaxisalign("end");
                p.sub_tit04.set_visible("false");
                p.sub_tit04.set_minheight("70");
                p.sub_tit04.set_maxheight("");
                p.sub_tit04.move("-35","2368","100%","70",null,null);

                p.staSubTitle04.set_taborder("16");
                p.staSubTitle04.set_text("처리내역");
                p.staSubTitle04.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle04.move("-35","2388","100%","50",null,null);

                p.btnMinPrcs.set_taborder("17");
                p.btnMinPrcs.set_cssclass("btn_WF_ACMinus");
                p.btnMinPrcs.set_visible("false");
                p.btnMinPrcs.move("1301","2396","34","34",null,null);

                p.Div04.set_taborder("2");
                p.Div04.set_text("Div00");
                p.Div04.set_cssclass("div_WF_Bg");
                p.Div04.set_fittocontents("height");
                p.Div04.set_visible("false");
                p.Div04.move("0","30","100.00%","266",null,null);

                p.Panel04.set_taborder("18");
                p.Panel04.set_cssclass("pal_WF_TitBtnBg");
                p.Panel04.set_spacing("0px 20px");
                p.Panel04.set_horizontalgap("10");
                p.Panel04.set_flexcrossaxisalign("center");
                p.Panel04.set_flexmainaxisalign("end");
                p.Panel04.move("660","2388","100%","50",null,null);

                p.staSubTitle01.set_taborder("4");
                p.staSubTitle01.set_text("권한신청 정보 (신청자)");
                p.staSubTitle01.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle01.move("-14","48","100%","50",null,null);

                p.btnMinAuthrtInfo.set_taborder("5");
                p.btnMinAuthrtInfo.set_cssclass("btn_WF_ACMinus");
                p.btnMinAuthrtInfo.set_visible("true");
                p.btnMinAuthrtInfo.set_text("");
                p.btnMinAuthrtInfo.move("1436","718","34","34",null,null);

                p.Panel01.set_taborder("6");
                p.Panel01.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01.set_spacing("0px 20px");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.set_flexcrossaxisalign("center");
                p.Panel01.set_flexmainaxisalign("end");
                p.Panel01.move("675","48","100%","50",null,null);

                p.staSubTitle02.set_taborder("8");
                p.staSubTitle02.set_text("개인정보 수집·이용 동의");
                p.staSubTitle02.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02.move("-34","835","100%","50",null,null);

                p.btnMinAgreYn.set_taborder("9");
                p.btnMinAgreYn.set_cssclass("btn_WF_ACMinus");
                p.btnMinAgreYn.set_visible("true");
                p.btnMinAgreYn.set_text("");
                p.btnMinAgreYn.move("1390.00","18","34","34",null,null);

                p.Panel02.set_taborder("10");
                p.Panel02.set_cssclass("pal_WF_TitBtnBg");
                p.Panel02.set_spacing("0px 20px");
                p.Panel02.set_horizontalgap("10");
                p.Panel02.set_flexcrossaxisalign("center");
                p.Panel02.set_flexmainaxisalign("end");
                p.Panel02.move("661","835","100%","50",null,null);
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

            	}
            );
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
                p.Button00_00.set_text("권한신청");
                p.Button00_00.set_cssclass("btn_WF_Yes");
                p.Button00_00.set_fittocontents("width");
                p.Button00_00.move("457.00","30","100","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("10");
            this.divPopBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divPopBtn.form
            obj = new Layout("mobile","",0,0,this.divPopBtn.form,
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
            this.divPopBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divPopBtn.form
            obj = new Layout("mobile","",0,0,this.divPopBtn.form,
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
            this.divPopBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1480,2800,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("계정권한 신청(신청자)");

                p.divGuide.set_taborder("0");
                p.divGuide.set_text("div00");
                p.divGuide.set_visible("false");
                p.divGuide.set_cssclass("div_GD_Tip");
                p.divGuide.move("1590.00","135","450","385",null,null);

                p.divForm.set_taborder("1");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.move("20","0",null,null,"20","60");

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
                p.RaonkUpload.move("-826.00","6","49.46%","200",null,null);

                p.divPopBtn.set_taborder("3");
                p.divPopBtn.set_text("Div00");
                p.divPopBtn.set_cssclass("div_WF_PopBtn");
                p.divPopBtn.move("20",null,null,"60","20","0");
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",480,600,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_mobileorientation("Portrait");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.Div01.form.edt00","value","dsGet","rfrncId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.Div01.form.edt00_01_01","value","dsGet","rfrncNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.Div01.form.edtAplyRsn","value","dsGet","aplyRsn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.Div04.form.edt00_02","value","dsGet","prcsSttsNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.Div04.form.edt00_02_03","value","dsGet","prcsDsctn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.Div04.form.edt00_02_00","value","dsGet","prcrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divForm.form.Div01.form.calStart","value","dsGet","useBgngYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divForm.form.Div01.form.calEnd","value","dsGet","useEndYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divForm.form.Div02.form.rdoEsntl","value","dsGet","esntlAgreYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divForm.form.Div02.form.Radio00_00_00","value","dsGet","chcAgreYn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("COM001P051.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	COM001P051.xfdl
        *  @Creator 	ELUON INS
        *  @CreateDate 	2024/10/17
        *  @Desction
        *  @Author
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/10/17			조규완					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        this.param;
        this.rfrncSe;
        this.type = "aply";
        this.prcsSeCd = "CTL20011";
        this.validateColumn = [];
        var cMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
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
        			"id" : this.getOwnerFrame().id,
        			"userSe" : this.getOwnerFrame().userSe
        		}
        	} else
        	{
        		this.param = this.getOwnerFrame().form.fvObjArgs;
        	}

        	this.validateColumn.push({"title" : "사용기간(시작)", "com": this.divForm.form.Div01.form.calStart});
        	this.validateColumn.push({"title" : "사용기간(종료)", "com": this.divForm.form.Div01.form.calEnd});
        	this.validateColumn.push({"title" : "신청사유", "com": this.divForm.form.Div01.form.edtAplyRsn});
        	this.validateColumn.push({"title" : "개인정보(필수) 사용동의여부", "com": this.divForm.form.Div02.form.rdoEsntl});

        	this.fnInit();
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        this.cfnClose = function() {
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
        	var strSvcUrl   = "sysMng/acntAuthrtAplyInfoInq.do";
        	var inData      = "";
        	var outData     = "dsGet=dsGet dsAuthrt=dsAuthrt dsFile1=dsFile1 dsFile2=dsFile2 dsFile3=dsFile3 dsFile4=dsFile4 dsFile5=dsFile5";
        	var strArg      = "id=" + this.param.id + " type=" + this.type + " userSe=" + this.param.userSe ;
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        this.selectAuthrtTransaction = function()
        {
        	var strSvcId    = "selectAuthrt";
        	var strSvcUrl   = "sysMng/authrtInfoList.do";
        	var inData      = "dsGet=dsGet";
        	var outData     = "dsAuthrt=dsAuthrt dsFile1=dsFile1 dsFile2=dsFile2 dsFile3=dsFile3 dsFile4=dsFile4 dsFile5=dsFile5";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        this.selectRfrncTransaction = function(id)
        {
        	var strSvcId    = "selectRfrnc";
        	var strSvcUrl   = "sysMng/transferredPersonAuthrtListInq.do";
        	var inData      = "";
        	var outData     = "dsRfrncAuthrt=dsRfrncAuthrt";
        	var strArg      = "id=" + id + " userSe=" + this.rfrncSe;
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        this.saveTransaction = function()
        {
        	var strSvcId    = "save";
        	var strSvcUrl   = "sysMng/acntAuthrtAplyInfoStrg.do";
        	var inData      = "dsGet=dsGet dsAuthrt=dsAuthrt dsFile=dsFile";
        	var outData     = "";
        	var strArg      = "type=" + this.type + " prcsSeCd=" + this.prcsSeCd;
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
        			this.gfnDownloadSetting(this.RaonkUpload, this.dsFile3);
        			this.gfnDownloadSetting(this.RaonkUpload, this.dsFile4);
        			this.gfnDownloadSetting(this.RaonkUpload, this.dsFile5);
        			this.dsGet.setColumn(0, "prvcAgreDocId", "AGDOC_20240701_000001");
        			this.fnFileSetting();
        			var prcsSttsCd = this.dsGet.getColumn(0, "prcsSttsCd");
        			if (!this.gfnIsNull(prcsSttsCd)) {
        				this.divForm.form.sub_tit04.visible = true;
        				this.divForm.form.Div04.visible = true;
        				this.divForm.form.resetScroll();
        			}

        			console.log(this.dsFile1.saveJSON());
        			break;
        		case "selectAuthrt":
        			this.gfnDownloadSetting(this.RaonkUpload, this.dsFile1);
        			this.gfnDownloadSetting(this.RaonkUpload, this.dsFile2);
        			this.gfnDownloadSetting(this.RaonkUpload, this.dsFile3);
        			this.gfnDownloadSetting(this.RaonkUpload, this.dsFile4);
        			this.gfnDownloadSetting(this.RaonkUpload, this.dsFile5);
        			this.dsGet.setColumn(0, "prvcAgreDocId", "AGDOC_20240701_000001");
        			this.fnFileSetting();
        			var prcsSttsCd = this.dsGet.getColumn(0, "prcsSttsCd");
        			if (!this.gfnIsNull(prcsSttsCd)) {
        				this.divForm.form.sub_tit04.visible = true;
        				this.divForm.form.Div04.visible = true;
        				this.divForm.form.resetScroll();
        			}
        			break;
        		case "save":
        			var gvRetMsg = this.objApp.getVariable("gvRetMsg");
        			this.gfnAlertMsg("save_complete", gvRetMsg, null, "msgCallback");
        			if(this.opener) {
        				this.close();
        			} else {
        				var cMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        				this.gfnCloseMenu(cMenuId);
        			}
        			break;
        		case "selectRfrnc":
        			this.copyAuthrt();
        			break;
        		case "uploadComplete":
        			// 파일 업로드가 완료 된 후 첨부파일 과 같이 데이터 저장
        			this.fnSaveSetting();
        			break;
        		case "combo":
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
        				"prgrmId" : "COM001P051" 	// 프로그램ID (화면 ID)
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
        	} else if(sPopupId == "file_all_del2") {
        		this.gfnDeleteAllFile(this.RaonkUpload, this.dsFile2);
        	} else if(sPopupId == "file_all_del3") {
        		this.gfnDeleteAllFile(this.RaonkUpload, this.dsFile3);
        	} else if(sPopupId == "file_all_del4") {
        		this.gfnDeleteAllFile(this.RaonkUpload, this.dsFile4);
        	} else if(sPopupId == "file_all_del5") {
        		this.gfnDeleteAllFile(this.RaonkUpload, this.dsFile5);
        	} else if(sPopupId == "file_del1") {
        		this.gfnDeleteFile(this.RaonkUpload, this.dsFile1, oRtn.paramArg);
        	} else if(sPopupId == "file_del2") {
        		this.gfnDeleteFile(this.RaonkUpload, this.dsFile2, oRtn.paramArg);
        	} else if(sPopupId == "file_del3") {
        		this.gfnDeleteFile(this.RaonkUpload, this.dsFile3, oRtn.paramArg);
        	} else if(sPopupId == "file_del4") {
        		this.gfnDeleteFile(this.RaonkUpload, this.dsFile4, oRtn.paramArg);
        	} else if(sPopupId == "file_del5") {
        		this.gfnDeleteFile(this.RaonkUpload, this.dsFile5, oRtn.paramArg);
        	}
        };

        this.fnPopupCallback = function(svcId, ret)
        {
        	switch(svcId) {
        		case "rfrnc":
        			if (ret != "") {
        				var param = JSON.parse(ret);
        				this.dsGet.setColumn(0, "rfrncId", param.userId);
        				this.dsGet.setColumn(0, "rfrncNm", param.userNm);
        				this.rfrncSe = param.userSe;
        			}
        			break;
        	}
        }
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	this.gfnCmmCode("combo", "dsCombo", "EVDNC_KND", "");

        	if(this.param != null && this.param.id != null && this.param.id != '')
        	{
        		this.selectTransaction();
        	} else {
        		var userId = this.objApp.gdsUser.getColumn(0, "userId");
        		this.dsGet.setColumn(0, "userId", userId);
        		this.selectAuthrtTransaction();
        	}
        }

        this.fnFileSetting = function()
        {
        	if (this.dsFile1.rowcount > 0) {
        		this.dsDoc.setColumn(0, "evdncDocKnd", this.dsFile1.getColumn(0, "evdncDocKnd"));
        		this.dsDoc.setColumn(0, "evdncDocNm", this.dsFile1.getColumn(0, "evdncDocNm"));
        		this.dsDoc.setColumn(0, "initYn", "Y");
        		this.divForm.form.Div03.form.staLabel01.text = this.dsFile1.getColumn(0, "evdncDocNm");
        		this.divForm.form.Div03.form.panFile01.visible = true;
        	}
        	if (this.dsFile2.rowcount > 0) {
        		this.dsDoc.setColumn(1, "evdncDocKnd", this.dsFile2.getColumn(0, "evdncDocKnd"));
        		this.dsDoc.setColumn(1, "evdncDocNm", this.dsFile2.getColumn(0, "evdncDocNm"));
        		this.dsDoc.setColumn(1, "initYn", "Y");
        		this.divForm.form.Div03.form.staLabel02.text = this.dsFile2.getColumn(0, "evdncDocNm");
        		this.divForm.form.Div03.form.panFile02.visible = true;
        	}
        	if (this.dsFile3.rowcount > 0) {
        		this.dsDoc.setColumn(2, "evdncDocKnd", this.dsFile3.getColumn(0, "evdncDocKnd"));
        		this.dsDoc.setColumn(2, "evdncDocNm", this.dsFile3.getColumn(0, "evdncDocNm"));
        		this.dsDoc.setColumn(2, "initYn", "Y");
        		this.divForm.form.Div03.form.staLabel03.text = this.dsFile3.getColumn(0, "evdncDocNm");
        		this.divForm.form.Div03.form.panFile03.visible = true;
        	}
        	if (this.dsFile4.rowcount > 0) {
        		this.dsDoc.setColumn(3, "evdncDocKnd", this.dsFile4.getColumn(0, "evdncDocKnd"));
        		this.dsDoc.setColumn(3, "evdncDocNm", this.dsFile4.getColumn(0, "evdncDocNm"));
        		this.dsDoc.setColumn(3, "initYn", "Y");
        		this.divForm.form.Div03.form.staLabel04.text = this.dsFile4.getColumn(0, "evdncDocNm");
        		this.divForm.form.Div03.form.panFile04.visible = true;
        	}
        	if (this.dsFile5.rowcount > 0) {
        		this.dsDoc.setColumn(4, "evdncDocKnd", this.dsFile5.getColumn(0, "evdncDocKnd"));
        		this.dsDoc.setColumn(4, "evdncDocNm", this.dsFile5.getColumn(0, "evdncDocNm"));
        		this.dsDoc.setColumn(4, "initYn", "Y");
        		this.divForm.form.Div03.form.staLabel05.text = this.dsFile5.getColumn(0, "evdncDocNm");
        		this.divForm.form.Div03.form.panFile05.visible = true;
        	}

        	this.fnAuthrtSetting();
        }

        // 권한목록 세팅
        this.fnAuthrtSetting = function()
        {
        	for (var i = 0; i < this.dsAuthrt.rowcount; i++) {
        		var authYn = this.dsAuthrt.getColumn(i, "authYn");
        		this.dsAuthrt.setColumn(i, "chk", authYn);
        	}

        	this.fndocSetting();
        }

        // 전임자 목록 추가
        this.copyAuthrt = function()
        {
        	for (var i = 0; i < this.dsRfrncAuthrt.rowcount; i++) {
        		var authYn = this.dsRfrncAuthrt.getColumn(i, "authYn");

        		if (authYn == "1") {
        			var authrtId = this.dsRfrncAuthrt.getColumn(i, "authrtId");
        			var nRow = this.dsAuthrt.findRow("authrtId", authrtId);
        			if (nRow < 0) {
        				var addRow = this.dsAuthrt.addRow();
        				this.dsAuthrt.copyRow(addRow, this.dsRfrncAuthrt, i);
        				this.dsAuthrt.setColumn(addRow, "chk", 1);
        			} else {
        				this.dsAuthrt.setColumn(nRow, "authYn", authYn);
        				this.dsAuthrt.setColumn(nRow, "chk", authYn);
        			}
        		}
        	}

        	this.fndocSetting();
        }

        // 증빙문서 세팅
        this.fndocSetting = function()
        {
        	var docList = "";
        	var docNmList = new Array();
        	for (var i = 0; i < this.dsAuthrt.rowcount; i++) {
        		var chk = this.dsAuthrt.getColumn(i, "chk");
        		var docNeedList = this.gfnTrim(this.dsAuthrt.getColumn(i, "docNeedList"));

        		if (chk == 1 && !this.gfnIsNull(docNeedList)) {
        			if (!this.gfnIsNull(docList)) {
        				docList = docList + "," + docNeedList;
        			} else {
        				docList = docNeedList;
        			}
        		}
        	}
        	if (!this.gfnIsNull(docList)) {
        		docList = this.fnDistinct(docList);
        		for (var i = 0; i < docList.length; i++) {
        			var docNm = this.dsCombo.getColumn(this.dsCombo.findRow("cdId", docList[i]), "cdNm");
        			docNmList[i] = docNm;
        		}
        	}
        	if (!this.gfnIsNull(docNmList)) {
        		this.divForm.form.Div03.form.staNeedFile.visible = true;
        		this.divForm.form.Div03.form.staNeedFile.text = "[" + docNmList + "]를 업로드 해 주시기 바랍니다.";
        	} else {
        		this.divForm.form.Div03.form.staNeedFile.visible = false;
        	}

        	this.fnFileValueSetting(docList);
        }

        // 중복제거
        this.fnDistinct = function(str)
        {
        	var aData = new Array();
        	aData = str.split(",");
        	var aRtn = new Array();
        	var bFlag;
        	var vDist;

        	for (var i = 0; i < aData.length; i++) {
        		vDist = this.gfnTrim(aData[i]);
        		bFlag = false;
        		for (var j = 0; j < aRtn.length; j++) {
        			if (aRtn[j] == vDist) {
        				bFlag = true;
        				break;
        			}
        		}
        		if (bFlag == false) {
        			aRtn[aRtn.length] = this.gfnTrim(vDist);
        		}
        	}

        	return aRtn;
        }

        // 증빙문서 value 값 세팅
        this.fnFileValueSetting = function(aRtn)
        {
        	// 모든 첨부파일 visible false
        	var panVisibleArr = [false, false, false, false, false];

        	for (var i = this.dsDoc.rowcount; i < 5; i++) {
        		this.dsDoc.addRow();
        	}

        	// 처음 가져온 첨부파일 true
        	for (var i = 0; i < panVisibleArr.length; i++) {
        		if (this.dsDoc.getColumn(i, "initYn") == "Y") {
        			panVisibleArr[i] = true;
        		}
        	}

        	for (var i = 0; i < aRtn.length; i++) {
        		// 이미 존재하는 첨부파일 visible true
        		if (this.dsDoc.getColumn(0, "evdncDocKnd") == aRtn[i]) {
        			panVisibleArr[0] = true;
        			continue;
        		} else if (this.dsDoc.getColumn(1, "evdncDocKnd") == aRtn[i]) {
        			panVisibleArr[1] = true;
        			continue;
        		} else if (this.dsDoc.getColumn(2, "evdncDocKnd") == aRtn[i]) {
        			panVisibleArr[2] = true;
        			continue;
        		} else if (this.dsDoc.getColumn(3, "evdncDocKnd") == aRtn[i]) {
        			panVisibleArr[3] = true;
        			continue;
        		} else if (this.dsDoc.getColumn(4, "evdncDocKnd") == aRtn[i]) {
        			panVisibleArr[4] = true;
        			continue;
        		}
        		var aRtnNm = this.dsCombo.getColumn(this.dsCombo.findRow("cdId", aRtn[i]), "cdNm"); // 첨부파일 종류명
        		// 필요 첨부파일 세팅 및 visible true;
        		if (this.gfnIsNull(this.dsDoc.getColumn(0, "evdncDocKnd"))) {
        			this.dsDoc.setColumn(0, "evdncDocKnd", aRtn[i]);
        			this.dsDoc.setColumn(0, "evdncDocNm", aRtnNm);
        			this.divForm.form.Div03.form.staLabel01.text = aRtnNm;
        			panVisibleArr[0] = true;
        		} else if (this.gfnIsNull(this.dsDoc.getColumn(1, "evdncDocKnd"))) {
        			this.dsDoc.setColumn(1, "evdncDocKnd", aRtn[i]);
        			this.dsDoc.setColumn(1, "evdncDocNm", aRtnNm);
        			this.divForm.form.Div03.form.staLabel02.text = aRtnNm;
        			panVisibleArr[1] = true;
        		} else if (this.gfnIsNull(this.dsDoc.getColumn(2, "evdncDocKnd"))) {
        			this.dsDoc.setColumn(2, "evdncDocKnd", aRtn[i]);
        			this.dsDoc.setColumn(2, "evdncDocNm", aRtnNm);
        			this.divForm.form.Div03.form.staLabel03.text = aRtnNm;
        			panVisibleArr[2] = true;
        		} else if (this.gfnIsNull(this.dsDoc.getColumn(3, "evdncDocKnd"))) {
        			this.dsDoc.setColumn(3, "evdncDocKnd", aRtn[i]);
        			this.dsDoc.setColumn(3, "evdncDocNm", aRtnNm);
        			this.divForm.form.Div03.form.staLabel04.text = aRtnNm;
        			panVisibleArr[3] = true;
        		} else if (this.gfnIsNull(this.dsDoc.getColumn(4, "evdncDocKnd"))) {
        			this.dsDoc.setColumn(4, "evdncDocKnd", aRtn[i]);
        			this.dsDoc.setColumn(4, "evdncDocNm", aRtnNm);
        			this.divForm.form.Div03.form.staLabel05.text = aRtnNm;
        			panVisibleArr[4] = true;
        		}
        	}

        	// visible false 인 첨부파일 전부 삭제
        	if (panVisibleArr[0] == false) {
        		this.dsDoc.deleteRow(0);
        		this.gfnDeleteAllFile(this.RaonkUpload, this.dsFile1);
        	}
        	if (panVisibleArr[1] == false) {
        		this.dsDoc.deleteRow(1);
        		this.gfnDeleteAllFile(this.RaonkUpload, this.dsFile2);
        	}
        	if (panVisibleArr[2] == false) {
        		this.dsDoc.deleteRow(2);
        		this.gfnDeleteAllFile(this.RaonkUpload, this.dsFile3);
        	}
        	if (panVisibleArr[3] == false) {
        		this.dsDoc.deleteRow(3);
        		this.gfnDeleteAllFile(this.RaonkUpload, this.dsFile4);
        	}
        	if (panVisibleArr[4] == false) {
        		this.dsDoc.deleteRow(4);
        		this.gfnDeleteAllFile(this.RaonkUpload, this.dsFile5);
        	}

        	// 첨부파일 visible 설정
        	this.divForm.form.Div03.form.panFile01.visible = panVisibleArr[0];
        	this.divForm.form.Div03.form.panFile02.visible = panVisibleArr[1];
        	this.divForm.form.Div03.form.panFile03.visible = panVisibleArr[2];
        	this.divForm.form.Div03.form.panFile04.visible = panVisibleArr[3];
        	this.divForm.form.Div03.form.panFile05.visible = panVisibleArr[4];

        	this.divForm.form.resetScroll();
        }

        // 첨부파일 제출 확인
        this.fnFileValidation = function()
        {
        	if (this.divForm.form.Div03.form.panFile01.visible && this.dsFile1.rowcount < 1) {
        		this.gfnAlertMsg("msg", "MSG_011", [this.dsDoc.getColumn(0, "evdncDocNm") + "은(는) 필수항목입니다."]);
        		return false;
        	}
        	if (this.divForm.form.Div03.form.panFile02.visible && this.dsFile2.rowcount < 1) {
        		this.gfnAlertMsg("msg", "MSG_011", [this.dsDoc.getColumn(1, "evdncDocNm") + "은(는) 필수항목입니다."]);
        		return false;
        	}
        	if (this.divForm.form.Div03.form.panFile03.visible && this.dsFile3.rowcount < 1) {
        		this.gfnAlertMsg("msg", "MSG_011", [this.dsDoc.getColumn(2, "evdncDocNm") + "은(는) 필수항목입니다."]);
        		return false;
        	}
        	if (this.divForm.form.Div03.form.panFile04.visible && this.dsFile4.rowcount < 1) {
        		this.gfnAlertMsg("msg", "MSG_011", [this.dsDoc.getColumn(3, "evdncDocNm") + "은(는) 필수항목입니다."]);
        		return false;
        	}
        	if (this.divForm.form.Div03.form.panFile05.visible && this.dsFile5.rowcount < 1) {
        		this.gfnAlertMsg("msg", "MSG_011", [this.dsDoc.getColumn(4, "evdncDocNm") + "은(는) 필수항목입니다."]);
        		return false;
        	}
        	return true;
        }

        // 저장 transaction 전 파일 colId세팅
        this.fnSaveSetting = function()
        {
        	for (var i = 0; i < this.dsFile.rowcount; i++) {
        		var colId = this.dsFile.getColumn(i, "colId");
        		if (colId == "file01") {
        			this.dsFile.setColumn(i, "colId", this.dsDoc.getColumn(0, "evdncDocKnd"));
        		} else if (colId == "file02") {
        			this.dsFile.setColumn(i, "colId", this.dsDoc.getColumn(1, "evdncDocKnd"));
        		} else if (colId == "file03") {
        			this.dsFile.setColumn(i, "colId", this.dsDoc.getColumn(2, "evdncDocKnd"));
        		} else if (colId == "file04") {
        			this.dsFile.setColumn(i, "colId", this.dsDoc.getColumn(3, "evdncDocKnd"));
        		} else if (colId == "file05") {
        			this.dsFile.setColumn(i, "colId", this.dsDoc.getColumn(4, "evdncDocKnd"));
        		}
        	}
        	this.saveTransaction();
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
        	if(this.gvUploadCategory == 'file01')
        	{
        		if(this.dsFile1.rowcount >= 1)
        		{
        			this.gfnAlertMsg("MSG_001", "msgCallback");
        			//this.gfnAlertMsg("beforeAddFile", "파일 1개만 업로드 가능 합니다.", "msgCallback");
        			return false;
        		}
        	}
        	if(this.gvUploadCategory == 'file02')
        	{
        		if(this.dsFile2.rowcount >= 1)
        		{
        			this.gfnAlertMsg("MSG_001", "msgCallback");
        			//this.gfnAlertMsg("beforeAddFile", "파일 1개만 업로드 가능 합니다.", "msgCallback");
        			return false;
        		}
        	}
        	if(this.gvUploadCategory == 'file03')
        	{
        		if(this.dsFile3.rowcount >= 1)
        		{
        			this.gfnAlertMsg("MSG_001", "msgCallback");
        			//this.gfnAlertMsg("beforeAddFile", "파일 1개만 업로드 가능 합니다.", "msgCallback");
        			return false;
        		}
        	}
        	if(this.gvUploadCategory == 'file04')
        	{
        		if(this.dsFile4.rowcount >= 1)
        		{
        			this.gfnAlertMsg("MSG_001", "msgCallback");
        			//this.gfnAlertMsg("beforeAddFile", "파일 1개만 업로드 가능 합니다.", "msgCallback");
        			return false;
        		}
        	}
        	if(this.gvUploadCategory == 'file05')
        	{
        		if(this.dsFile5.rowcount >= 1)
        		{
        			this.gfnAlertMsg("MSG_001", "msgCallback");
        			//this.gfnAlertMsg("beforeAddFile", "파일 1개만 업로드 가능 합니다.", "msgCallback");
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
        	if (this.gvUploadCategory == 'file01') {
        		var nIdx = this.dsFile1.addRow();
        		this.dsFile1.setColumn(nIdx, "fullName", paramObj.userdata.strName + ' (' + paramObj.userdata.nSize + ')');
        		this.dsFile1.setColumn(nIdx, "orgnlFileNm", paramObj.userdata.strName);
        		this.dsFile1.setColumn(nIdx, "fileSz", paramObj.userdata.nSize);
        		this.dsFile1.setColumn(nIdx, "colId", this.dsDoc.getColumn(0, "evdncDocKnd"));
        		this.dsFile1.setColumn(nIdx, "atflMngSno", paramObj.userdata.nIndex);
        		this.dsFile1.setColumn(nIdx, "evdncDocKnd", this.dsDoc.getColumn(0, "evdncDocKnd"));
        		this.dsFile1.setColumn(nIdx, "evdncDocNm", this.dsDoc.getColumn(0, "evdncDocNm"));
        	} else if (this.gvUploadCategory == 'file02') {
        		var nIdx = this.dsFile2.addRow();
        		this.dsFile2.setColumn(nIdx, "fullName", paramObj.userdata.strName + ' (' + paramObj.userdata.nSize + ')');
        		this.dsFile2.setColumn(nIdx, "orgnlFileNm", paramObj.userdata.strName);
        		this.dsFile2.setColumn(nIdx, "fileSz", paramObj.userdata.nSize);
        		this.dsFile2.setColumn(nIdx, "colId", this.dsDoc.getColumn(1, "evdncDocKnd"));
        		this.dsFile2.setColumn(nIdx, "atflMngSno", paramObj.userdata.nIndex);
        		this.dsFile2.setColumn(nIdx, "evdncDocKnd", this.dsDoc.getColumn(1, "evdncDocKnd"));
        		this.dsFile2.setColumn(nIdx, "evdncDocNm", this.dsDoc.getColumn(1, "evdncDocNm"));
        	} else if (this.gvUploadCategory == 'file03') {
        		var nIdx = this.dsFile3.addRow();
        		this.dsFile3.setColumn(nIdx, "fullName", paramObj.userdata.strName + ' (' + paramObj.userdata.nSize + ')');
        		this.dsFile3.setColumn(nIdx, "orgnlFileNm", paramObj.userdata.strName);
        		this.dsFile3.setColumn(nIdx, "fileSz", paramObj.userdata.nSize);
        		this.dsFile3.setColumn(nIdx, "colId", this.dsDoc.getColumn(2, "evdncDocKnd"));
        		this.dsFile3.setColumn(nIdx, "atflMngSno", paramObj.userdata.nIndex);
        		this.dsFile3.setColumn(nIdx, "evdncDocKnd", this.dsDoc.getColumn(2, "evdncDocKnd"));
        		this.dsFile3.setColumn(nIdx, "evdncDocNm", this.dsDoc.getColumn(2, "evdncDocNm"));
        	} else if (this.gvUploadCategory == 'file04') {
        		var nIdx = this.dsFile4.addRow();
        		this.dsFile4.setColumn(nIdx, "fullName", paramObj.userdata.strName + ' (' + paramObj.userdata.nSize + ')');
        		this.dsFile4.setColumn(nIdx, "orgnlFileNm", paramObj.userdata.strName);
        		this.dsFile4.setColumn(nIdx, "fileSz", paramObj.userdata.nSize);
        		this.dsFile4.setColumn(nIdx, "colId", this.dsDoc.getColumn(3, "evdncDocKnd"));
        		this.dsFile4.setColumn(nIdx, "atflMngSno", paramObj.userdata.nIndex);
        		this.dsFile4.setColumn(nIdx, "evdncDocKnd", this.dsDoc.getColumn(3, "evdncDocKnd"));
        		this.dsFile4.setColumn(nIdx, "evdncDocNm", this.dsDoc.getColumn(3, "evdncDocNm"));
        	} else if (this.gvUploadCategory == 'file05') {
        		var nIdx = this.dsFile5.addRow();
        		this.dsFile5.setColumn(nIdx, "fullName", paramObj.userdata.strName + ' (' + paramObj.userdata.nSize + ')');
        		this.dsFile5.setColumn(nIdx, "orgnlFileNm", paramObj.userdata.strName);
        		this.dsFile5.setColumn(nIdx, "fileSz", paramObj.userdata.nSize);
        		this.dsFile5.setColumn(nIdx, "colId", this.dsDoc.getColumn(4, "evdncDocKnd"));
        		this.dsFile5.setColumn(nIdx, "atflMngSno", paramObj.userdata.nIndex);
        		this.dsFile5.setColumn(nIdx, "evdncDocKnd", this.dsDoc.getColumn(4, "evdncDocKnd"));
        		this.dsFile5.setColumn(nIdx, "evdncDocNm", this.dsDoc.getColumn(4, "evdncDocNm"));
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
        this.divForm_Div03_btn_file_onclick = function(obj,e)
        {
        	// 데이터의 첨부파일 관리번호 입력 컬럼명
        	this.gvUploadCategory = obj.name;		// 컬럼ID
        	this.RaonkUpload.OpenFileDialog();
        };

        // 파일 그리드 클릭 이벤트
        this.divForm_Div03_Grid_oncellclick = function(obj,e)
        {
        	var i = obj.initvalueid;
        	if(e.col == 1) 	// 삭제 버튼 클릭
        	{
        		var param = {
        			"row" : e.row,
        			"col" : e.col
        		};
        		this.gfnConfirmMsg("file_del" + i, "MSG_002", "msgCallback", ["확인", "취소"], ["Y", "N"], param);
        	} else if(e.col == 0) // 파일명 클릭
        	{
        		if (i == 1) {
        			this.gfnSelectFile(this.RaonkUpload, this.dsFile1, e);
        		} else if (i == 2) {
        			this.gfnSelectFile(this.RaonkUpload, this.dsFile2, e);
        		} else if (i == 3) {
        			this.gfnSelectFile(this.RaonkUpload, this.dsFile3, e);
        		} else if (i == 4) {
        			this.gfnSelectFile(this.RaonkUpload, this.dsFile4, e);
        		} else if (i == 5) {
        			this.gfnSelectFile(this.RaonkUpload, this.dsFile5, e);
        		}
        	}
        };

        // 파일 그리드 더블클릭 이벤트
        this.divForm_Div03_Grid_oncelldblclick = function(obj,e)
        {
        	var i = obj.initvalueid;
        	if(e.col == 0) 	// 파일명을 더블클릭 시 다운로드
        	{
        		if (i == 1) {
        			this.gfnDownloadFile(this.RaonkUpload, this.dsFile1, e);
        		} else if (i == 2) {
        			this.gfnDownloadFile(this.RaonkUpload, this.dsFile2, e);
        		} else if (i == 3) {
        			this.gfnDownloadFile(this.RaonkUpload, this.dsFile3, e);
        		} else if (i == 4) {
        			this.gfnDownloadFile(this.RaonkUpload, this.dsFile4, e);
        		} else if (i == 5) {
        			this.gfnDownloadFile(this.RaonkUpload, this.dsFile5, e);
        		}
        	}
        };

        this.divForm_Div03_btn_del_file_onclick = function(obj,e)
        {
        	var i = obj.initvalueid;
        	this.gfnConfirmMsg("file_all_del" + i, "MSG_002", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        // 신청버튼
        this.divPopBtn_Button00_00_onclick = function(obj,e)
        {
        	if (this.gfnDsIsValidated(this.validateColumn) && this.fnFileValidation()) {
        		var jobCd = this.dsGet.getColumn(0, "jobCd");
        		if (!this.gfnIsNull(jobCd) && jobCd == "TAS20012") {
        			this.prcsSeCd = "CTL20012";
        		} else {
        			this.prcsSeCd = "CTL20011";
        		}
        		this.dsGet.setColumn(0, "prcsSttsCd", "");
        		this.gfnConfirmMsg("save_confirm", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"], null);
        	}
        };

        // 전임자 검색
        this.divForm_Div00_Button00_02_onclick = function(obj,e)
        {
        	var sTitle = "전임자 선택 팝업";
        	var objArg   = {};

        	var objOption = {
        		popuptype: "modal"	//modal,modaless
        // 		, width: 800
        // 		, height: 520			//width,height 지정하지 않음 popup form size적용
        		, autosize: true
        		, title: sTitle
        		, resize: false
        		, titlebar: true
        	};
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup("rfrnc", "work::COM/sysMng/COM001P053.xfdl", objArg, sPopupCallBack, objOption);
        };

        // 전임자 권한 불러오기
        this.divForm_Div00_Button01_01_onclick = function(obj,e)
        {
        	var id = this.dsGet.getColumn(0, "rfrncId");

        	if (!this.gfnIsNull(id)) {
        		this.selectRfrncTransaction(id);
        	}
        };

        // +, - 버튼
        this.btnMin_onclick = function(obj,e)
        {
        	var objNm = obj.name;
        	var objClass = obj.cssclass;
        	var objDiv = null;
        	var divVisible = false;

        	// 해당 div 찾아줌.
        	if(objNm == "btnMinAuthrtInfo") {
        		objDiv = this.divForm.form.Div01;
        	} else if(objNm == "btnMinAgreYn") {
        		objDiv = this.divForm.form.Div02;
        	} else if(objNm == "btnMinAtfl") {
        		objDiv = this.divForm.form.Div03;
        	} else if(objNm == "btnMinPrcs") {
        		objDiv = this.divForm.form.Div04;
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

        // 권한 그리드 클릭 이벤트
        this.divForm_Div01_Grid00_oncellclick = function(obj,e)
        {
        	if (e.col == 0) {
        		this.fndocSetting();
        	}
        };

        // 파일 데이터 변동시
        this.dsFile1_onvaluechanged = function(obj,e)
        {
        	if (this.dsFile1.rowcount > 0) {
        		this.divForm.form.Div03.form.btn_del_file_1.visible = true;
        	} else {
        		this.divForm.form.Div03.form.btn_del_file_1.visible = false;
        	}
        	this.divForm.form.Div03.form.staFile01_02.text = this.dsFile1.rowcount;
        };

        this.dsFile2_onvaluechanged = function(obj,e)
        {
        	if (this.dsFile2.rowcount > 0) {
        		this.divForm.form.Div03.form.btn_del_file_2.visible = true;
        	} else {
        		this.divForm.form.Div03.form.btn_del_file_2.visible = false;
        	}
        	this.divForm.form.Div03.form.staFile02_02.text = this.dsFile2.rowcount;
        };

        this.dsFile3_onvaluechanged = function(obj,e)
        {
        	if (this.dsFile3.rowcount > 0) {
        		this.divForm.form.Div03.form.btn_del_file_3.visible = true;
        	} else {
        		this.divForm.form.Div03.form.btn_del_file_3.visible = false;
        	}
        	this.divForm.form.Div03.form.staFile03_02.text = this.dsFile3.rowcount;
        };

        this.dsFile4_onvaluechanged = function(obj,e)
        {
        	if (this.dsFile4.rowcount > 0) {
        		this.divForm.form.Div03.form.btn_del_file_4.visible = true;
        	} else {
        		this.divForm.form.Div03.form.btn_del_file_4.visible = false;
        	}
        	this.divForm.form.Div03.form.staFile04_02.text = this.dsFile4.rowcount;
        };

        this.dsFile5_onvaluechanged = function(obj,e)
        {
        	if (this.dsFile5.rowcount > 0) {
        		this.divForm.form.Div03.form.btn_del_file_5.visible = true;
        	} else {
        		this.divForm.form.Div03.form.btn_del_file_5.visible = false;
        	}
        	this.divForm.form.Div03.form.staFile05_02.text = this.dsFile5.rowcount;
        };

        this.btnMin_onclick = function(obj,e)
        {
        	var objNm = obj.name;
        	var objClass = obj.cssclass;
        	var objDiv = null;
        	var divVisible = false;

        	// 해당 div 찾아줌.
        	if(objNm == "btnMinAuthrtInfo") {
        		objDiv = this.divForm.form.Div01;
        	} else if(objNm == "btnMinAgreYn") {
        		objDiv = this.divForm.form.Div02;
        	} else if(objNm == "btnMinAtfl") {
        		objDiv = this.divForm.form.Div03;
        	} else if(objNm == "btnMinPrcs") {
        		objDiv = this.divForm.form.Div04;
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
            this.divForm.form.Div01.form.Button00_02.addEventHandler("onclick",this.divForm_Div00_Button00_02_onclick,this);
            this.divForm.form.Div01.form.Button01_01.addEventHandler("onclick",this.divForm_Div00_Button01_01_onclick,this);
            this.divForm.form.Div01.form.Grid00.addEventHandler("oncellclick",this.divForm_Div01_Grid00_oncellclick,this);
            this.divForm.form.Div02.form.Radio00_00_00.addEventHandler("onitemchanged",this.divForm_Div00_Radio00_00_onitemchanged,this);
            this.divForm.form.btnMinAtfl.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.Div03.form.file01.addEventHandler("onclick",this.divForm_Div03_btn_file_onclick,this);
            this.divForm.form.Div03.form.btn_del_file_1.addEventHandler("onclick",this.divForm_Div03_btn_del_file_onclick,this);
            this.divForm.form.Div03.form.Grid01.addEventHandler("oncellclick",this.divForm_Div03_Grid_oncellclick,this);
            this.divForm.form.Div03.form.Grid01.addEventHandler("oncelldblclick",this.divForm_Div03_Grid_oncelldblclick,this);
            this.divForm.form.Div03.form.file02.addEventHandler("onclick",this.divForm_Div03_btn_file_onclick,this);
            this.divForm.form.Div03.form.btn_del_file_2.addEventHandler("onclick",this.divForm_Div03_btn_del_file_onclick,this);
            this.divForm.form.Div03.form.Grid02.addEventHandler("oncellclick",this.divForm_Div03_Grid_oncellclick,this);
            this.divForm.form.Div03.form.Grid02.addEventHandler("oncelldblclick",this.divForm_Div03_Grid_oncelldblclick,this);
            this.divForm.form.Div03.form.file03.addEventHandler("onclick",this.divForm_Div03_btn_file_onclick,this);
            this.divForm.form.Div03.form.btn_del_file_3.addEventHandler("onclick",this.divForm_Div03_btn_del_file_onclick,this);
            this.divForm.form.Div03.form.Grid03.addEventHandler("oncellclick",this.divForm_Div03_Grid_oncellclick,this);
            this.divForm.form.Div03.form.Grid03.addEventHandler("oncelldblclick",this.divForm_Div03_Grid_oncelldblclick,this);
            this.divForm.form.Div03.form.file04.addEventHandler("onclick",this.divForm_Div03_btn_file_onclick,this);
            this.divForm.form.Div03.form.btn_del_file_4.addEventHandler("onclick",this.divForm_Div03_btn_del_file_onclick,this);
            this.divForm.form.Div03.form.Grid04.addEventHandler("oncellclick",this.divForm_Div03_Grid_oncellclick,this);
            this.divForm.form.Div03.form.Grid04.addEventHandler("oncelldblclick",this.divForm_Div03_Grid_oncelldblclick,this);
            this.divForm.form.Div03.form.file05.addEventHandler("onclick",this.divForm_Div03_btn_file_onclick,this);
            this.divForm.form.Div03.form.btn_del_file_5.addEventHandler("onclick",this.divForm_Div03_btn_del_file_onclick,this);
            this.divForm.form.Div03.form.Grid05.addEventHandler("oncellclick",this.divForm_Div03_Grid_oncellclick,this);
            this.divForm.form.Div03.form.Grid05.addEventHandler("oncelldblclick",this.divForm_Div03_Grid_oncelldblclick,this);
            this.divForm.form.btnMinPrcs.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.btnMinAuthrtInfo.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.btnMinAgreYn.addEventHandler("onclick",this.btnMin_onclick,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterAddFile",this.RaonkUpload_RAONKUPLOAD_AfterAddFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_CreationComplete",this.RaonkUpload_RAONKUPLOAD_CreationComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_UploadComplete",this.RaonkUpload_RAONKUPLOAD_UploadComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_OnError",this.RaonkUpload_RAONKUPLOAD_OnError,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_BeforeAddFile",this.RaonkUpload_RAONKUPLOAD_BeforeAddFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterAddAllFile",this.RaonkUpload_RAONKUPLOAD_AfterAddAllFile,this);
            this.divPopBtn.form.Button00_00.addEventHandler("onclick",this.divPopBtn_Button00_00_onclick,this);
            this.dsFile1.addEventHandler("onvaluechanged",this.dsFile1_onvaluechanged,this);
            this.dsAuthrt.addEventHandler("oncolumnchanged",this.dsAuthrt_oncolumnchanged,this);
            this.dsFile2.addEventHandler("onvaluechanged",this.dsFile2_onvaluechanged,this);
            this.dsFile3.addEventHandler("onvaluechanged",this.dsFile3_onvaluechanged,this);
            this.dsFile4.addEventHandler("onvaluechanged",this.dsFile4_onvaluechanged,this);
            this.dsFile5.addEventHandler("onvaluechanged",this.dsFile5_onvaluechanged,this);
        };
        this.loadIncludeScript("COM001P051.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
