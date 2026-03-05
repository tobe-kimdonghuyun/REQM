(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST001M00_01");
            this.set_titletext("사전협의등록(신청자정보)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBfhdClsltn", this);
            obj._setContents("<ColumnInfo><Column id=\"ctrtGubn\" type=\"STRING\" size=\"256\"/><Column id=\"bfhdCnsltnNo\" type=\"STRING\" size=\"256\"/><Column id=\"bfhdCnsltnYmd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntId\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntMblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"coId\" type=\"STRING\" size=\"256\"/><Column id=\"coNm\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtCtrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptPstnInfoCn\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtPstnInfoCn\" type=\"STRING\" size=\"256\"/><Column id=\"jobCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobNm\" type=\"STRING\" size=\"256\"/><Column id=\"instlRsnCd\" type=\"STRING\" size=\"256\"/><Column id=\"dsinCnsltnYn\" type=\"STRING\" size=\"256\"/><Column id=\"dsinCnsltnCn\" type=\"STRING\" size=\"256\"/><Column id=\"dsinPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeCd\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ctrtGubn\">0</Col><Col id=\"jobCd\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTSCFICINS", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDsinPicList", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"bfhdCnsltnNo\" type=\"STRING\" size=\"256\"/><Column id=\"dsinPicId\" type=\"STRING\" size=\"256\"/><Column id=\"dsinPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"idntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"idntyYmd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMsg", this);
            obj._setContents("<ColumnInfo><Column id=\"bfhdCnsltnNo\" type=\"STRING\" size=\"256\"/><Column id=\"msg\" type=\"STRING\" size=\"256\"/><Column id=\"jobCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAtfl", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"cmdtySn\" type=\"STRING\" size=\"256\"/><Column id=\"aplcfmNo\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"jobSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobTycoSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"atchSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"atchDtlSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"atchFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"bsnsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"workId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"fileExtn\" type=\"STRING\" size=\"256\"/><Column id=\"strgFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTerm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"fullName\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAtchRslt", this);
            obj._setContents("<ColumnInfo><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTempSeCd", this);
            obj._setContents("<ColumnInfo><Column id=\"tempPrcsSeCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staSubTitle","20","25","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("신청자정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","1090.00","25","209","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents/>");
            this.addChild(obj.name, obj);

            obj = new Panel("panTitle","0","0","100.00%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("2");
            obj.set_fittocontents("none");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel00","0.00","0","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("신청구분");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJobTycoSeNm","0.00","46","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","20.00","0","1240","86",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtJobTycoSeNm\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan00","0","panTitle:0","100.00%","96",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel01_00","0.00","0","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("계약선택여부");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Radio("raCtrtGubn","0.00","46","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var raCtrtGubn_innerdataset = new nexacro.NormalDataset("raCtrtGubn_innerdataset", obj);
            raCtrtGubn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">계약선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">수기입력</Col></Row></Rows>");
            obj.set_innerdataset(raCtrtGubn_innerdataset);
            obj.set_text("계약선택");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","20.00","0","250","86",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"raCtrtGubn\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan01","0","pan00:0","100.00%","96",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"addPan\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel03\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00","10.00","10","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("신청자");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAplcntNm","10.00","56","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_readonly("true");
            obj.set_displaynulltext("신청자 성명");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_01","20.00","20","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("신청자 회사명");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCoNm","20.00","66","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_readonly("true");
            obj.set_displaynulltext("신청자 회사명");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCtrtNo","10.00","10","47.66%","46",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("staHwrtCtrtNo","650.00","242","67.80%","46",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("계약번호(수기입력)");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Panel("pan03","0","pan01:0","100.00%","97",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan03_00\"/><PanelItem id=\"PanelItem05\" componentid=\"Panel06\"/><PanelItem id=\"PanelItem02\" componentid=\"pan03_01\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel05\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00","10.00","10","47.66%","46",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("휴대폰 번호");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAplcntMblTelno","10.00","56","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_readonly("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00","20.00","20","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("위치정보(룸번호)");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHwrtPstnInfoCn","20.00","66","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.getSetter("hwrtYn").set("Y");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00","20","0","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("휴대폰번호는 우측상단 \"사용자 이름\" 클릭 후 해당 메뉴에서 등록 및 수정이 가능합니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("pan_05_02","0","102","100.00%","32",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_spacing("0px 20px 0px 20px");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan05","0","pan03:5","100.00%","40",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_fittocontents("height");
            obj.set_spacing("0px 0px 10px 0px ");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"pan_05_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_00_00","10.00","10","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("설치사유");
            obj.set_cssclass("sta_WF_Label_E");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJobNm","10","56","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_cssclass("edt_WF_EdtSch");
            this.addChild(obj.name, obj);

            obj = new Panel("pan07_00","20","632","300","172",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"cboInslRsnCd\"/><PanelItem id=\"PanelItem05\" componentid=\"Panel04\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00_00_00","20.00","20","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("작업명");
            obj.set_cssclass("sta_WF_Label_E");
            this.addChild(obj.name, obj);

            obj = new Combo("cboInslRsnCd","20.00","66","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_innerdataset("dsTSCFICINS");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Panel("pan07_01","660.00","10","300","172",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"txtDsinCnsltnCn\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel07","0","pan05:0","100%","228","0",null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"grdDsinPickList\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan07","0","Panel07:0","100.00%","183",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan07_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan07_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00_00_00_00","0.00","0","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("디자인 협의내용");
            obj.set_cssclass("sta_WF_Label_E");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtDsinCnsltnCn","0","37","100%","126",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            this.addChild(obj.name, obj);

            obj = new Button("btnFileUp","504.00","0","116","40",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.getSetter("upatchsecd").set("H01");
            obj.getSetter("upcolid").set("file");
            this.addChild(obj.name, obj);

            obj = new Panel("panBtnFile","620.00","0","300","46",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnFileUp\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panTitle00","20","10","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panFile","0","pan07:0","100.00%","111",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","708","168","100.%","46",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("협의일자");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Calendar("calBfhdCnsltnYmd","701","213","150","40",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_dateformat("yyyy-MM-dd ");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHwrtCtrtNo","698","402","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.getSetter("hwrtYn").set("Y");
            this.addChild(obj.name, obj);

            obj = new Panel("addPan","811","184","250","86",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtAplcntNm\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03","1265","186","250","86",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtCoNm\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("divEdtPop","425","308","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCtrtNo","0","0","100%","40",null,null,null,null,null,null,this.divEdtPop.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.getSetter("hwrtYn").set("N");
            this.divEdtPop.addChild(obj.name, obj);

            obj = new Button("btnCtrtNo","edtCtrtNo:-44.33300000000003","0","40","40",null,null,null,null,null,null,this.divEdtPop.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            obj.getSetter("hwrtYn").set("N");
            this.divEdtPop.addChild(obj.name, obj);

            obj = new Panel("Panel02","1271","206","250","86",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edtAplcntMblTelno\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04","20","718","100%","86",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edtJobNm\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","780.00","570","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.getSetter("upcolid").set("file");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"110\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell cssclass=\"expr:dataset.parent.gfnIsNull(orgnlFileNm) ? &quot;&quot; : &quot;CellFile&quot;\" text=\"bind:orgnlFileNm\"/><Cell col=\"1\" edittype=\"expr:dataset.parent.gfnIsNull(orgnlFileNm) ? &quot;none&quot; : &quot;button&quot;\" displaytype=\"expr:dataset.parent.gfnIsNull(orgnlFileNm) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" cssclass=\"expr:dataset.parent.gfnIsNull(orgnlFileNm) ? &quot;&quot; : &quot;CellFileDel&quot;\" text=\"expr:dataset.parent.gfnIsNull(orgnlFileNm) ? &quot;&quot; : &quot;파일삭제&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new RaonkUpload("RaonkUpload","20","930","606","200",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_DevelopLangage("JAVA");
            obj.set_ExtensionAllowOrLimit("1");
            obj.set_HandlerUrl("/common/uploadDownload.do");
            obj.set_RunTimes("html5");
            obj.set_ButtonBarView("0");
            obj.set_text("");
            obj.set_DisableDeleteConfirm("1");
            obj.set_positionstep("0");
            obj.set_AllowDuplicationFile("1");
            obj.set_ImgPreView("1");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Panel("pan03_00","30.00","10","250","86",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Static03\"/><PanelItem id=\"PanelItem01\" componentid=\"calBfhdCnsltnYmd\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel06","303","305","250","86",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCtrtNo\"/><PanelItem id=\"PanelItem01\" componentid=\"divEdtPop\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan03_01","660.00","10","250","86",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staHwrtCtrtNo\"/><PanelItem id=\"PanelItem01\" componentid=\"edtHwrtCtrtNo\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel05","1306","292","250","86",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_flexgrow("1");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edtHwrtPstnInfoCn\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","1384","404","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("디자인 / 미관심의 담당자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Button("btnGrdAdd","2522","406","47","34",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnGrdDel","2578","406","45","34",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Panel("panGrdBtn","2416","404","250","46",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnGrdAdd\"/><PanelItem id=\"PanelItem01\" componentid=\"btnGrdDel\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","1384","404","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/><PanelItem id=\"PanelItem01\" componentid=\"panGrdBtn\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDsinPickList","0","0","100%","171",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_binddataset("dsDsinPicList");
            obj.getSetter("uFunction").set("checkbox");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"300\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"200\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"공항공사 담당자ID\"/><Cell col=\"1\" text=\"담당자명\"/><Cell col=\"2\" text=\"확인여부\"/><Cell col=\"3\" text=\"확인일자\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:dsinPicId\" expandsize=\"20\" expandshow=\"show\"/><Cell col=\"1\" displaytype=\"text\" text=\"bind:dsinPicNm\"/><Cell col=\"2\" text=\"bind:idntyYn\" displaytype=\"text\"/><Cell col=\"3\" text=\"bind:idntyYmd\" cssclass=\"CellEnd\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\" calendardisplayinvalidtype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divEdtPop.form
            obj = new Layout("default","",0,0,this.divEdtPop.form,function(p){});
            this.divEdtPop.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_horizontalgap("0");
            obj.set_mobileorientation("landscape");
            obj.set_tabletemplate("1* / 1*");
            obj.set_verticalgap("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","raCtrtGubn","value","dsBfhdClsltn","ctrtGubn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","calBfhdCnsltnYmd","value","dsBfhdClsltn","bfhdCnsltnYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edtHwrtPstnInfoCn","value","dsBfhdClsltn","hwrtPstnInfoCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edtJobNm","value","dsBfhdClsltn","jobNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","cboInslRsnCd","value","dsBfhdClsltn","instlRsnCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","txtDsinCnsltnCn","value","dsBfhdClsltn","dsinCnsltnCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edtHwrtCtrtNo","value","dsBfhdClsltn","hwrtCtrtNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divEdtPop.form.edtCtrtNo","value","dsBfhdClsltn","ctrtNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edtAplcntNm","value","dsBfhdClsltn","aplcntNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edtCoNm","value","dsBfhdClsltn","coNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edtAplcntMblTelno","value","dsBfhdClsltn","aplcntMblTelno");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CST001M00_01.xfdl","xjs::TaskCom.xjs");
        this.registerScript("CST001M00_01.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	CST001M00
        *  @Creator 	이규철
        *  @CreateDate 	2024/08/08
        *  @Desction
        *  @Author
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/08/08			이규철					최초생성
        *******************************************************************************
        */

        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;
        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose.)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수

        	this.fnInit();
        };


        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀.)
        *******************************************************************************************************************************/
        //저장
        this.cfnSave = function ()
        {
        	this.cfnSaveValidate();
        	this.fnSave();
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.fnSearch = function () {
        	//첨부파일 표출용
        	this.dsFile.clearData();
        	this.dsFile.addRow();

        	var strSvcId    = "search";
        	var strSvcUrl   = "cst/bfh/instlBfhdCnsltnInq.do";
        	var inData      = "dsIn=dsMsg";
        	var outData     = "dsBfhdClsltn=dsBfhdClsltn dsAtfl=dsAtfl dsDsinPicList=dsDsinPicList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc, 	// transaction의 결과를 받을 Function 이름
        						isAsync); 		// 비동기통신 여부 [생략가능]
        }

        //this.fnSave = function (sJobCd) {
        this.fnSave = function () {
        	var sJobCd = this.dsTempSeCd.getColumn(0, "tempPrcsSeCd");

        	//메시지 DataSet 클리어
        	this.dsMsg.clearData();

        	var strSvcId    = "tmpSave";
        	var strSvcUrl   = "cst/bfh/instlBfhdCnsltnTmprStrg.do";
        	var inData      = "dsIn=dsBfhdClsltn:A dsAtfl=dsAtfl:U dsPicList=dsDsinPicList:A";
        	var outData     = "dsMsg=dsMsg";
        	var strArg      = "jobCd=" + sJobCd; // 신청서작성
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc, 	// transaction의 결과를 받을 Function 이름
        						isAsync); 		// 비동기통신 여부 [생략가능]
        }

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message.)
        *******************************************************************************************************************************/
        this.fnCallback = function(svcId, errCd, errMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errCd != 0) { return; }

        	switch(svcId) {
        	case "commonCodeSearch" :
        		break;

        	case "search" :
        		const sJobCd = this.dsBfhdClsltn.getColumn(0, "jobCd");
        		const sCtrtGubn = this.dsBfhdClsltn.getColumn(0, "ctrtGubn");

        		if (sJobCd == "TAS00496") {
        			this.fnSetCompChg(sCtrtGubn, false);
        		} else {
        			// 등록 후 처리되는 내역 [임시저장이 아니면]
        			this.fnSetCompReadonly();
        			this.parent.parent.fnBtnEnable();
        		}

        		break;

        	case "tmpSave" :
        		if(this.gfnIsNull(this.dsMsg.getColumn(0, "msg"))) {
        			this.gfnAlertMsg("msg1", "MSG_001"); // 등록되었습니다.

        			//팝업일 때
        			if(this.getOwnerFrame().name == "CST001P04") {
        				var sBfhdCnsltnNo = this.dsMsg.getColumn(0, "bfhdCnsltnNo");
        				if (this.gfnIsNull(sBfhdCnsltnNo)) return;

        				this.fnSearch();
        			} else {
        				//메인일 때
        				if(this.dsMsg.getColumn(0, "jobCd") == "TAS00496") {
        					//임시저장이라면 저장한 내용 조회
        					var sBfhdCnsltnNo = this.dsMsg.getColumn(0, "bfhdCnsltnNo");
        					if (this.gfnIsNull(sBfhdCnsltnNo)) return;

        					this.fnSearch();
        				} else {
        					//저장이라면 화면 초기화 상태로 전환
        					this.fnInit();
        				}
        			}

        		} else {
        			this.gfnAlertMsg("error", "MSG_011", [this.dsMsg.getColumn(0, "msg")]);	// 오류메시지 전달
        		}

        		break;

        	case this.RaonkUpload.RAONKUPLOAD_UploadComplete.name :
        		trace("2025-01-02 파일업로드 변경사항 적용");

        		// 파일 업로드 결과를 첨부파일 데이터셋에 설정
        		for(var i = 0; i < this.dsAtchRslt.rowcount; i++) {
        			// 첨부파일관리번호
        			this.dsAtfl.setColumn(this.dsAtfl.findRow("colId", this.dsAtchRslt.getColumn(i, "colId")), "atflMngNo", this.dsAtchRslt.getColumn(i, "atflMngNo"));
        		}

        		// 저장
        		this.fnSave();

        		break;

        	case "getAplySeNm" :  // 공통코드(신청구분)
        			var fvJobTycoSeNm = this.cfnGvbkAplySeNm();
        			this.edtJobTycoSeNm.value = fvJobTycoSeNm;

        		break;

        	default:
        		break;
        	}
        }

        //popup callback(담당자 정보:plcSch, 계약정보:ctrtNoPop)
        this.fnPopupCallback = function (sPopupId, sRtn)
        {
        	if (this.gfnIsNull(sRtn)) return;
        	const objRtn = JSON.parse(sRtn);

        	if (sPopupId == "plcSch") {
        		if (this.dsDsinPicList.findRowExpr(`${this.fvGridRow} != currow && dsinPicId == '${objRtn.rUserId}'`) > -1) {
        			this.gfnAlertMsg("msg", "MSG_011", ["담당자 정보가 중복되었습니다."]);
        			return;
        		}

        		this.dsDsinPicList.setColumn(this.fvGridRow, "dsinPicId", objRtn.rUserId);
        		this.dsDsinPicList.setColumn(this.fvGridRow, "dsinPicNm", objRtn.rUserNm);
        	} else if (sPopupId == "ctrtNoPop") {
        		this.dsBfhdClsltn.setColumn(0, "ctrtNo"     , objRtn.ctrtNo   );  // 계약번호
        		this.dsBfhdClsltn.setColumn(0, "hwrtPstnInfoCn", objRtn.rnb      );  // 위치정보(룸번호)
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function() {
        	trace("fnInit");
        	// 명칭
        	this.cfnGetAplySeNm({ id:"getAplySeNm", cbf:"fnCallback", aplySeCd:"TSPTSC006" });

        	// 유저정보를 셋팅한다.
        	const gdsUser = nexacro.getApplication().gdsUser;
        	// 초기데이터
        	this.dsBfhdClsltn.clearData();
        	this.dsBfhdClsltn.addRow();
        	this.dsBfhdClsltn.setColumn(0, "ctrtGubn", "0");
        	this.dsBfhdClsltn.setColumn(0, "aplcntId", gdsUser.getColumn(0, "userId"));	//신청자Id
        	this.dsBfhdClsltn.setColumn(0, "aplcntMblTelno", "01012345678");			//신청자휴대전화(세션에 세팅된 정보 암복호화 필요)
        	this.dsBfhdClsltn.setColumn(0, "coId", gdsUser.getColumn(0, "coId"));		//회사Id
        	this.dsBfhdClsltn.setColumn(0, "coNm", gdsUser.getColumn(0, "coNm"));
        	this.dsBfhdClsltn.setColumn(0, "bfhdCnsltnYmd", this.gfnGetDate());
        	this.dsBfhdClsltn.setColumn(0, "aplySeCd", "TSPTSC006");

        	this.edtAplcntNm.value = gdsUser.getColumn(0, "userNm");
        	this.edtCoNm.value = gdsUser.getColumn(0, "coNm");
        	//this.edtAplcntMblTelno.value = gdsUser.getColumn(0, "userMblTelno");	//세션에 세팅된 정보 암복호화 필요

        	// 데이터 변경 함수 호출
        	this.dsBfhdClsltn_oncolumnchanged(this.dsBfhdClsltn, {columnid:"ctrtGubn", newvalue:"0"});

        	// 공통코드 함수 호출
        	this.cfnComCdLoad({ id:"commonCodeSearch", cbf:"fnCallBack", dsTSCFICINS:"TSCFICINS:S" });
        	this.dsBfhdClsltn.setColumn(0, "instlRsnCd", "");

        	// 그리드 설정
        	this.dsDsinPicList.clearData();
        	const oTargetGrid = this.grdDsinPickList;
        	let nColIdx = oTargetGrid.getBindCellIndex("body", "dsinPicId");
        	oTargetGrid.setCellProperty("body", nColIdx, "displaytype", "expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? 'editcontrol' : 'normal''");
        	oTargetGrid.setCellProperty("body", nColIdx, "edittype", "expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? 'normal' : 'none''");
        	oTargetGrid.setCellProperty("body", nColIdx, "expandshow", "expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? 'show' : 'hidden''");

        	// 파일업로드 관련 데이터셋
        	this.dsTempSeCd.clearData();
        	this.dsAtfl.clearData();
        	this.dsFile.clearData();
        	this.dsFile.addRow();
        	this.dsAtchRslt.clearData();

        	this.fvIsPopup = nexacro.getPopupFrames(this.getOwnerFrame()).length > 0;
        	if (!this.fvIsPopup) return;

        };

        this.fnGetParam = function (sBfhdCnsltnNo) {
        	trace("fnGetParam");

        	// 전달 파라메터
        	this.fvBfhdCnsltnNo = sBfhdCnsltnNo;
        	if (this.gfnIsNull(this.fvBfhdCnsltnNo)) return;

         	this.dsMsg.clearData();
        	this.dsMsg.addRow();
         	this.dsMsg.setColumn(0, "bfhdCnsltnNo", this.fvBfhdCnsltnNo);
         	this.fnSearch();
        }

        this.fnSetCompChg = function (sNewVal, bDataChg = false) {
        	// 값 초기화
        	if (bDataChg) {
        		["ctrtNo", "hwrtInptPstnInfoCn", "hwrtCtrtNo", "hwrtPstnInfoCn"]
        		.forEach(sVal => this.dsBfhdClsltn.setColumn(0, sVal, ""));
        	}

        	// 값에 따라 필수처리
        	this.staCtrtNo.cssclass = sNewVal == 0 ? "sta_WF_Label_E" : "sta_WF_Label";
        	this.staHwrtCtrtNo.cssclass = sNewVal == 1 ? "sta_WF_Label_E" : "sta_WF_Label";

        	// readonly 설정 컴포넌트 [계약번호, 위치정보(룸정보), 계약번호(수기입력), 위치정보(수기입력)]
        	Array.from(this.components).forEach(oComp => fnSetReadonly.call(this, oComp));

        	function fnSetReadonly (oComp) {
        		var bEnable = sNewVal == "0";
        		if (oComp instanceof nexacro.Div) {
        			 Array.from(oComp.form.components).forEach(oComp => fnSetReadonly.call(this, oComp));
        		} else {
        			if (this.gfnIsNull(oComp.hwrtYn)) return;
        			if (oComp instanceof nexacro.Button) {
        				oComp.enable = oComp.hwrtYn == "N" ? bEnable : !bEnable;
        			} else {
        				oComp.readonly = oComp.hwrtYn == "N" ? !bEnable : bEnable;
        			}
        		}
        	}
        }

        this.fnSetCompReadonly = function () {
        	const arrReadonly = [nexacro.Edit, nexacro.Grid, nexacro.Radio, nexacro.Combo, nexacro.TextArea];
        	const arrEnable = [nexacro.Button];

        	fnReadonly.call(this, this.components);

        	function fnReadonly (arrComps) {
        		Array.from(arrComps).forEach(oComp => {
        			if (oComp instanceof nexacro.Div) {
        				fnReadonly.call(this, oComp.form.components);
        				return;
        			}

        			if (oComp instanceof nexacro.Edit || oComp instanceof nexacro.Grid || oComp instanceof nexacro.Radio || oComp instanceof nexacro.Grid
        				|| oComp instanceof nexacro.Combo || oComp instanceof nexacro.TextArea || oComp instanceof nexacro.Calendar)  {
        				oComp.readonly = true;
        			}

        			else if (oComp instanceof nexacro.Button) {
        				oComp.enable = false;
        			}
        		});
        	}

        	//보안위해물품주관사 이용동의서 버튼cell 영역 숨기기
        	this.Grid00.setFormatColProperty(1, "size", 0);
        	this.resetScroll();
        }

        // 첨부 파일 추가(현재 사용 안 함)
        this.fnAddAtfl = function(oFile) {
        	// 이미 첨부된 파일이 있으면 기존 파일 삭제
        	this.fnDelAtfl(oFile.upcolid, "D");

        	const oObj = {
        		"strCustomValue" : oFile.upcolid,
        		"atflMngNo" : this.dsAtfl.getColumn(0, "aftlMngNo")
        	}

        	// RaonkUpload에 컬럼ID 설정
        	this.RaonkUpload.SetFileCustomValue(-1, JSON.stringify(oObj));

            // 첨부파일 DS에 추가
        	var nRow = this.dsAtfl.findRow("colId", oFile.upcolid);
                nRow = Math.max(nRow, 0) ? nRow : this.dsAtfl.addRow();

        	this.dsAtfl.setColumn(nRow, "cmdtySn"      , this.dsBfhdClsltn.getColumn(0, "bfhdCnsltnNo"));
        	this.dsAtfl.setColumn(nRow, "atflMngNo"    , this.dsBfhdClsltn.getColumn(0, "atflMngNo"));
        	this.dsAtfl.setColumn(nRow, "jobSeCd"      , "BFH");  // 작업구분
        	this.dsAtfl.setColumn(nRow, "aplcfmNo"     , "");  // 신청서번호(서비스에서설정)
        	this.dsAtfl.setColumn(nRow, "atchFileNm"   , oFile.userdata.strName);  // 첨부파일명E
        	this.dsAtfl.setColumn(nRow, "atchFileMngNo", "");  // 첨부파일관리번호(Main화면(CST002M00)에서 파일 업로드 후 설정)
        	this.dsAtfl.setColumn(nRow, "colId"        , oFile.upcolid);  // 컬럼ID
        	this.dsAtfl.setColumn(nRow, "atchSeCd"     , oFile.upatchsecd);  // 첨부파일구분코드
        	this.dsAtfl.setColumn(nRow, "atchDtlSeCd"  , oFile.upatchdtlsecd);  // 첨부파일상세구분코드

        	// 첨부 파일 표출용 DS 설정
            this.fnSetAtflExprs( oFile.userdata.strName + '(' + oFile.userdata.nSize + ')'  // 파일풀명
        	                   , oFile.userdata.strName                                     // 원본파일명
        					   , oFile.userdata.nSize                                       // 파일크기
        					   , oFile.upcolid                                              // 컬럼ID
        						);
        };

        // 첨부 파일 삭제(현재 사용 안 함)
        this.fnDelAtfl = function(colId, sMode) {
            // 존재하지 않으면 돌아감
        	if(this.gfnIsNull(colId) || this.gfnIsNull(this.dsFile.getColumn(0, colId + "_orgnlFileNm"))) { return; }
        	const sFileUniqueId = this.dsAtfl.getColumn(0, "fileUniqueId");

        	// RaonkUpload mergeFile 삭제
        	if(this.RaonkUpload.GetListInfo().mergeFile) {
        		this.RaonkUpload.GetListInfo().mergeFile.forEach(function(v, i, o) {
        			if (this.dsAtfl.getRowType(0) == Dataset.ROWTYPE_INSERT) {
        				if (this.gfnIsNull(v.uniqKey)) {
        					this.RaonkUpload.SetSelectFile(i, '0');
        					this.RaonkUpload.DeleteSelectedFile();
        				}
        			}

        			if (sMode == "D") {
        				if (!this.gfnIsNull(sFileUniqueId) && sFileUniqueId == v.uniqKey) {
        					this.RaonkUpload.SetSelectFile(i, '0');
        					this.RaonkUpload.DeleteSelectedFile();
        				}
        			}
        		}, this);
        	}

        	// 첨부파일 삭제
        	this.dsAtfl.deleteRow(0);

        	// 첨부 파일 표출용 DS 설정
            this.fnSetAtflExprs("", "", "", colId);
        };

        // 첨부 파일 표출용 DS 설정(현재 사용 안 함)
        this.fnSetAtflExprs = function(fullName, orgnlFileNm, fileSz, colId) {
        	// 화면에 표출할 파일정보를 그리드에 설정
        	this.dsFile.setColumn(0, colId + "_fullName"   , fullName   );  // 파일풀명
        	this.dsFile.setColumn(0, colId + "_orgnlFileNm", orgnlFileNm);  // 원본파일명
        	this.dsFile.setColumn(0, colId + "_fileSz"     , fileSz     );  // 파일크기
        	this.dsFile.setColumn(0, colId + "_colId"      , this.gfnIsNull(fullName) ? "" : colId);  // 컬럼ID
        };

        this.fnFileTransfer = function () {

        	var obj = { "thumnail"   : "Y"        // 썸네일 생성여부(첨부파일 중 이미지 파일이 있는 경우 "Y" 이면 썸네일 파일 생성)
        			  , "bsnsSeCd"   : "TSPTSC"   // 업무구분코드(디자인사전협의등록-TSPTSC006)
        			  , "prgrmId"    : this.name  // 프로그램ID (화면 ID)
        	};

        	this.RaonkUpload.AddFormData('params', JSON.stringify(obj));
        	this.RaonkUpload.Transfer();
        }
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        // 데이터 변경 후
        this.dsBfhdClsltn_oncolumnchanged = function(obj,e)
        {
        	// 계약선택여부
        	if (e.columnid == "ctrtGubn") {
        		this.fnSetCompChg(e.newvalue, true);
        	}
        };

        // 담당자 변경 전
        this.dsDsinPicList_cancolumnchange = function(obj,e)
        {
        	if (e.columnid == "dsinPicId") {
        		if (obj.findRowExpr(`dataset.rowposition != currow && dsinPicId == '${e.newvalue}'`) > -1) {
        			this.gfnAlertMsg("msg", "MSG_011", ["담당자 정보가 중복되었습니다."]);
        			return false;
        		}
        	}
        };

        // 담당자 변경 시
        this.dsDsinPicList_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "dsinPicId") {
        		obj.setColumn(e.row, "dsinPicNm", "");
        	}
        };

        // 계약번호 버튼 클릭 시
        this.divForm_div01_divCtrtNo_btnCtrtNo_onclick = function(obj,e)
        {
        	alert("임대배정 계약번호 팝업 제공 후 작업예정 -> 수기입력으로 진행");
        	this.dsBfhdClsltn.setColumn(0, "ctrtGubn", "1");
        };

        //계약조회
        this.divEdtPop_btnCtrtNo_onclick = function(obj,e)
        {
        	var oOption = { title:"계약선택", titlebar:true, width:900, height:700 };
        	this.gfnOpenPopup("ctrtNoPop", "work::CST/TSC/CST002P01.xfdl", "", "fnPopupCallback", oOption);
        };

        // 임시저장, 저장
        this.Button_onclick = function(obj,e)
        {
        	const sJobCd = (obj.name == "btnTmpSave" ? "TAS00496" : "TAS00498");
        	const sCurJobCd = this.gfnNvl(this.dsBfhdClsltn.getColumn(0, "jobCd"), "TAS00496");

        	if (sJobCd == "TAS00496" && sCurJobCd == "TAS00498") {
        		this.gfnAlertMsg("msg", "MSG_011", ["임시저장 할 수 없습니다."]);
        		return;
        	}
        	// 임시저장, 등록 상태가 아니면 처리 할 수 없다.
        	else if (sCurJobCd != "TAS00496" && sCurJobCd != "TAS00498") {
        		this.gfnAlertMsg("msg", "MSG_011", ["처리할 수 없습니다."]);
        		return;
        	}

        	if (!this.gfnDsIsUpdated(this.dsBfhdClsltn) && !this.gfnDsIsUpdated(this.dsAtfl)) {
        		this.gfnAlertMsg("msg", "MSG_004"); // 변경된 내역이 없습니다.
        		return;
        	} else {
        		// 필수체크
        		const sCtrtGubn = this.dsBfhdClsltn.getColumn(0, "ctrtGubn");
        		let arrEssCols = [];
        		// 협의일자 필수
        		arrEssCols.push(["bfhdCnsltnYmd", "협의일자", this.calBfhdCnsltnYmd]);
        		// 계약선택
        		if (sCtrtGubn == "0") {
        			// 계약번호 필수
        			arrEssCols.push(["ctrtNo", "계약번호", this.divEdtPop.form.edtCtrtNo]);
        		} else {
        			// 수기계약번호 필수
        			arrEssCols.push(["hwrtCtrtNo", "계약번호(수기입력)", this.edtHwrtCtrtNo]);
        		}
        		arrEssCols.push(["hwrtPstnInfoCn", "위치정보(룸번호)", this.edtHwrtPstnInfoCn]);
        		arrEssCols.push(["instlRsnCd", "설치사유", this.cboInslRsnCd]);
        		arrEssCols.push(["jobNm", "작업명", this.edtJobNm]);
        		arrEssCols.push(["dsinCnsltnCn", "디자인 협의내용", this.txtDsinCnsltnCn]);

        		for (let i=0; i<arrEssCols.length; i++) {
        			const arrEss = arrEssCols[i];
        			if (this.gfnIsNull(this.dsBfhdClsltn.getColumn(0, arrEss[0]))) {
        				arrEss[2].setFocus();
        				this.gfnAlertMsg("msg", "MSG_009", [arrEss[1]]); /// {0} 을/를 입력해 주세요.
        				return false;
        			}
        		};

        		// 디자인 담당자 필수체크
        		if (this.dsDsinPicList.getRowCount() == 0) {
        			this.grdDsinPickList.setFocus();
        			this.gfnAlertMsg("msg", "MSG_011", ["담당자 정보가 없습니다."]);
        			return;
        		}

        		let nFindRow = this.dsDsinPicList.findRowExpr("dataset.parent.gfnIsNull(dsinPicId) || dataset.parent.gfnIsNull(dsinPicNm)");
        		if (nFindRow > - 1) {
        			this.dsDsinPicList.rowposition = nFindRow;
        			this.grdDsinPickList.setFocus();
        			this.grdDsinPickList.setCellPos(1);
        			this.grdDsinPickList.showEditor(true);
        			this.gfnAlertMsg("msg", "MSG_009", ["담당자"]); // {0} 을/를 입력해 주세요.
        			return;
        		}

        		// {0}(을)를 하시겠습니까?
        		this.gfnConfirmMsg("saveConfirm", "CST_001", function(sPopupId, sRtn) {
        			if(JSON.parse(sRtn).result == "Y") {
        				var sPrcsSeCd = "";
        				if(obj.name == "btnTmpSave") {
        					sPrcsSeCd = "TAS00496";
        				} else {
        					sPrcsSeCd = "TAS00498";
        				}
        				this.dsTempSeCd.clearData();
        				this.dsTempSeCd.addRow();
        				this.dsTempSeCd.setColumn(0, "tempPrcsSeCd", sPrcsSeCd);		//화면 스크립트 사용위해 처리구분 세팅

        				this.dsBfhdClsltn.setColumn(0, "jobCd", sJobCd);

        				if(this.gfnDsIsUpdated(this.dsAtfl)) {  // 첨부파일 변경시
        					// 첨부파일 저장
        					this.fnFileTransfer();
        				} else {
        					//this.fnSave(obj.name == "btnTmpSave" ? "TAS00496" : "TAS00498");
        					this.fnSave();
        				}
        			}
        		}, ["확인", "아니오"], ["Y", "N"], null, [obj.text]);
        	}
        };

        // 디자인/미관심의 담당자 행추가
        this.divGrd_btnGrdAdd_onclick = function(obj,e)
        {
        	this.dsDsinPicList.addRow();
        };

        // 디자인/미관심의 담당자 행삭제
        this.divGrd_btnGrdDel_onclick = function(obj,e)
        {
        	const nExtractRows = this.dsDsinPicList.extractRows("chk == '1'");
        	if (nExtractRows == -1 || nExtractRows.length == 0) {
        		this.gfnAlertMsg("msg", "MSG_011", ["선택된 담당자 정보가 없습니다."]);
        		return;
        	}

        	this.dsDsinPicList.deleteMultiRows(nExtractRows);
        };

        // 담당자찾기
        this.divGrd_grdDsinPickList_onexpandup = function(obj,e)
        {
        	this.fvGridRow = e.row;

        	const sTitle = "디자인/미관심의 담당자 찾기";
        	const objArg   = { "gubun" : "BFH" };
        	const objOption = {
        		  popuptype : "modal"	//modal,modaless
        		, autosize  : true
        		, title     : sTitle
        		, resize    : true
        		, titlebar  : true
        	};
        	const sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("plcSch", "work::CST/COM/CST006P20.xfdl", objArg, sPopupCallBack, objOption);
        };

        // 사전협의조회 팝업(임시버튼)
        this.Button00_onclick = function(obj,e)
        {
        	const sTitle = "사전협의조회";
        	const objArg   = { };
        	const objOption = {
                  width : 900
        		, height : 720
        		, popuptype : "modal"	//modal,modaless
        	//	, autosize  : true
        		, title     : sTitle
        		, resize    : true
        		, titlebar  : true
        	};
        	const sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("CST001P01", "work::CST/BFH/CST001P01.xfdl", objArg, sPopupCallBack, objOption);
        };

        // 체크리스트
        this.fnOpenSlfCheckList = function(obj,e)
        {
        	const sBfhdCnsltnNo = this.dsBfhdClsltn.getColumn(0, "bfhdCnsltnNo");

        	if (this.gfnIsNull(sBfhdCnsltnNo)) {
        		this.gfnAlertMsg("msg", "MSG_011", ["저장 후 자가체크리스트 작성 가능합니다."]);
        		return ;
        	}

        	const sTitle = "디자인 자가체크리스트";
        	const objArg   = { bfhdCnsltnNo : sBfhdCnsltnNo};
        	const objOption = {
                  width : 1100
        		, height : 900
        		, popuptype : "modal"	//modal,modaless
        	//	, autosize  : true
        		, title     : sTitle
        		, resize    : true
        		, titlebar  : true
        	};

        	const sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("CST001P03", "work::CST/BFH/CST001P03.xfdl", objArg, sPopupCallBack, objOption);
        };

        // 파일업로드 버튼(2025-01-02)
        this.btnFileUp_onclick = function(obj,e)
        {
        	this.cfnSetAtflInfo(this.RaonkUpload, this.Grid00).OpenFileDialog();
        };

        //파일 업로드 관련(2025-01-02)
        this.RaonkUpload_RAONKUPLOAD_CreationComplete = function(obj,  paramObj)
        {
        	trace(" >>> RaonkUpload_RAONKUPLOAD_CreationComplete");

        	// 업로드 솔루션이 초기 생성시 업로드 할 경로를 지정해야 한다.
        	// /CMM/YYYY/MM/DD/  <<== CMM은 업무별 폴더 지정이고 기본적으로 /년도/월/일 의 폴더 구조를 갖는다.
        	this.RaonkUpload.SetConfig('FolderNameRule', '/CST/BFH/YYYY/MM/DD/');
        	var dsAtfl = this.dsAtfl;
        	var dsFile = this.dsFile;

        	//첨부 파일 추가 함수
        	obj.cfnAddAtfl = function(oFile) {
        		//이미 첨부된 파일이 있으면 기존 파일 삭제
        		this.cfnDelAtfl();

        		//RaonkUpload에 컬럼ID 설정
        		this.SetFileCustomValue(-1, JSON.stringify({ "strCustomValue" : this.upatflinfo.colid }));

        		//첨부파일 DS에 추가
        		var nRow = dsAtfl.findRow("colId", this.upatflinfo.colid);
        			nRow = Math.max(nRow, 0) ? nRow : dsAtfl.addRow();
        		dsAtfl.setColumn(nRow, "colId", this.upatflinfo.colid);  // 컬럼ID

        		// 첨부 파일 표출용 DS 설정
        		dsFile.setColumn(0, this.upatflinfo.colid, oFile.userdata.strName + '(' + oFile.userdata.nSize + ')');  // 파일풀명
        	};

        	//첨부 파일 삭제
        	obj.cfnDelAtfl = function() {
        		//존재하지 않으면 돌아감
        		var nRow = dsAtfl.findRow("colId", this.upatflinfo.colid);
        		if(nRow == -1) { return; }

        		//RaonkUpload mergeFile 삭제
        		if(this.GetListInfo().mergeFile) {
        		    var RaonkUpload       = this;
        			var cfnGetCustomValue = this.parent.cfnGetCustomValue;
        			this.GetListInfo().mergeFile.forEach(function(v, i, o) {
        				if(cfnGetCustomValue(v.customValue) == RaonkUpload.upatflinfo.colid) {
        					RaonkUpload.SetSelectFile(i, '0');
        					RaonkUpload.DeleteSelectedFile();
        				}
        			});
        		}

        		console.log("RaonkUpload.GetListInfo().mergeFile========" + this.GetListInfo().mergeFile);
        		if(this.GetListInfo().mergeFile) {
        			console.log("RaonkUpload.GetListInfo().mergeFile.length=" + this.GetListInfo().mergeFile.length);
        		}

        		//첨부파일 삭제
        		dsAtfl.deleteRow(dsAtfl.findRow("colId", this.upatflinfo.colid));

        		//첨부 파일 표출용 DS 설정
        		dsFile.setColumn(0, this.upatflinfo.colid, "");  // 파일풀명
        	};
        };

        this.RaonkUpload_RAONKUPLOAD_BeforeAddFile = function(obj, paramObj)
        {
        	trace(" >>> RaonkUpload_RAONKUPLOAD_BeforeAddFile");
        	console.log(paramObj);

        	return true;
        };

        this.RaonkUpload_RAONKUPLOAD_AfterAddFile = function(obj, e)
        {
        	trace(" >>> RaonkUpload_RAONKUPLOAD_AfterAddFile");
            /*
        	e.upcolid       = this.getFocus().upcolid       || "";  // 컬럼ID
        	e.upatchsecd    = this.getFocus().upatchsecd    || "";  // 첨부파일구분코드
        	e.upatchdtlsecd = this.getFocus().upatchdtlsecd || "";  // 첨부파일상세구분코드

        	// 첨부 파일 추가
        	this.fnAddAtfl(e);
        	*/

        	// 첨부 파일 추가
        	obj.cfnAddAtfl(e);
        };

        this.RaonkUpload_RAONKUPLOAD_OnError = function(obj, paramObj)
        {
        	trace(" >>> RaonkUpload_RAONKUPLOAD_OnError");
        	trace(paramObj.userdata.strMessage);

            // 파일 업로드 중 오류가 발생했습니다!
        	this.gfnAlertMsg(this.RaonkUpload.name, "MSG_007", [paramObj.userdata.strMessage]);
        };

        this.RaonkUpload_RAONKUPLOAD_UploadComplete = function(obj, e)
        {
        	trace(" >>> RaonkUpload_RAONKUPLOAD_UploadComplete");
        	var allListArray = this.RaonkUpload.GetListInfo("json");
        	// 파일 업로드 후 첨부파일관리번호를 얻기 위한 함수
        	console.log(allListArray);

        	// 파일 업로드 후 첨부파일관리번호를 얻기 위한 함수
        	this.gfnUploadComplete(e.eventid, allListArray, "dsAtchRslt", "fnCallback");
        };

        //파일 그리드 관련(2024-01-02)
        this.Grid_oncellclick = function(obj,e)
        {
        	// 그리드 내의 버튼 클릭
            if(e.col == 0) {
        		if(obj.getCellPropertyValue(0, 0, "cssclass") == "CellFile") {  // 파일 컬럼
        			// 파일 다운로드
        			this.cfnFileDwnld(this.RaonkUpload, this.dsAtfl, obj.getCellProperty("body", 0, "text").substr(5), e);
        		}
        	} else if(e.col == 1) {
        		if(obj.getCellPropertyValue(0, 1, "edittype") != "none") {
        			if(obj.getCellPropertyValue(0, 1, "cssclass") == "CellFileUp") {  // 파일찾기 버튼
        				// 첨부파일 선택 창 열기
        				this.cfnSetAtflInfo(this.RaonkUpload, obj).OpenFileDialog();
        			} else if(obj.getCellPropertyValue(0, 1, "cssclass") == "CellFileDel") {  // 파일삭제 버튼
        				// 첨부 파일 삭제
        				this.cfnSetAtflInfo(this.RaonkUpload, obj).cfnDelAtfl();
        			}
        		}
        	}
        };

        //첨부파일 관련
        this.dsAtfl_onload = function(obj,e)
        {
        	// 데이터 조회 후 첨부파일 파일리스트에 셋팅
        	this.gfnDownloadSetting(this.RaonkUpload, this.dsAtfl);

        	// 첨부 파일 표출용 DS 설정
        	for(var i = 0; i < this.dsAtfl.rowcount; i++) {
        		// 첨부 파일 표출용 DS 설정
        		var colId = this.dsAtfl.getColumn(i, "colId");
        		this.dsFile.setColumn(0, colId , this.dsAtfl.getColumn(i, "orgnlFileNm") + '(' + this.dsAtfl.getColumn(i, "fileSz") + ')');  // 파일풀명
            };

        	this.resetScroll();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnFileUp.addEventHandler("onclick",this.btnFileUp_onclick,this);
            this.divEdtPop.form.btnCtrtNo.addEventHandler("onclick",this.divEdtPop_btnCtrtNo_onclick,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_UploadComplete",this.RaonkUpload_RAONKUPLOAD_UploadComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_OnError",this.RaonkUpload_RAONKUPLOAD_OnError,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_CreationComplete",this.RaonkUpload_RAONKUPLOAD_CreationComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_BeforeAddFile",this.RaonkUpload_RAONKUPLOAD_BeforeAddFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterAddFile",this.RaonkUpload_RAONKUPLOAD_AfterAddFile,this);
            this.btnGrdAdd.addEventHandler("onclick",this.divGrd_btnGrdAdd_onclick,this);
            this.btnGrdDel.addEventHandler("onclick",this.divGrd_btnGrdDel_onclick,this);
            this.grdDsinPickList.addEventHandler("onexpandup",this.divGrd_grdDsinPickList_onexpandup,this);
            this.dsBfhdClsltn.addEventHandler("oncolumnchanged",this.dsBfhdClsltn_oncolumnchanged,this);
            this.dsDsinPicList.addEventHandler("oncolumnchanged",this.dsDsinPicList_oncolumnchanged,this);
            this.dsDsinPicList.addEventHandler("cancolumnchange",this.dsDsinPicList_cancolumnchange,this);
            this.dsAtfl.addEventHandler("onload",this.dsAtfl_onload,this);
        };
        this.loadIncludeScript("CST001M00_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
