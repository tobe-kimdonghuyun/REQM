(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM010P051");
            this.set_titletext("신청정보확인");
            if (Form == this.constructor)
            {
                this._setFormPosition(1100,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGet", this);
            obj._setContents("<ColumnInfo><Column id=\"askInfoId\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userTelno\" type=\"STRING\" size=\"256\"/><Column id=\"userEml\" type=\"STRING\" size=\"256\"/><Column id=\"srvcSe\" type=\"STRING\" size=\"256\"/><Column id=\"aplySe\" type=\"STRING\" size=\"256\"/><Column id=\"etcMttr\" type=\"STRING\" size=\"256\"/><Column id=\"askCn\" type=\"STRING\" size=\"256\"/><Column id=\"ocrnYmd\" type=\"STRING\" size=\"256\"/><Column id=\"ocrnPstn\" type=\"STRING\" size=\"256\"/><Column id=\"trgtCoChcYn\" type=\"STRING\" size=\"256\"/><Column id=\"trgtCoId\" type=\"STRING\" size=\"256\"/><Column id=\"trgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"askStts\" type=\"STRING\" size=\"256\"/><Column id=\"clrId\" type=\"STRING\" size=\"256\"/><Column id=\"clrNm\" type=\"STRING\" size=\"256\"/><Column id=\"rcptDt\" type=\"STRING\" size=\"256\"/><Column id=\"rcptCn\" type=\"STRING\" size=\"256\"/><Column id=\"prcrId\" type=\"STRING\" size=\"256\"/><Column id=\"prcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcsDt\" type=\"STRING\" size=\"256\"/><Column id=\"prcsCn\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"userNm\" type=\"STRING\" size=\"256\"/><Column id=\"coNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"fullName\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrvcSe", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cdNm\">선택</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","10","10",null,"1560","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","0","100%","100%",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","120",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan00_02\"/><PanelItem id=\"PanelItem03\" componentid=\"pan01_01\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("작성자ID");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtUserId","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtUserId\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("4");
            obj.set_text("작성자명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_02","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"edtUserNm\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel01_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("6");
            obj.set_text("연락처");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan01_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("7");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edtUserTelno\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("8");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan02_","20","0","100%","291",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00\"/><PanelItem id=\"PanelItem04\" componentid=\"txtAskCn\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel05_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("11");
            obj.set_text("발생위치");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan04_00","0","60","100.00%","120",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("13");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"pan04_01_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan04_01_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"pan04_01_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_02","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("14");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Button("btn_file_1","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("15");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_visible("false");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("panBtnFile","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("16");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("panTitle","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("17");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("18");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staFileCnt","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("19");
            obj.set_text("0");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("20");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("panFileNum","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("21");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/><PanelItem id=\"PanelItem01\" componentid=\"staFileCnt\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Button("btnAllDelFile","512","135","125","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("22");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("panBtnDel","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("23");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnAllDelFile\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel00","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("24");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Grid("grdFile","20.00","114","100%","120",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("25");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"expr:comp.parent.parent.userId == userId ? &apos;buttoncontrol&apos; : &apos;none&apos;\" edittype=\"expr:comp.parent.parent.userId == userId ? &apos;button&apos; : &apos;none&apos;\" text=\"expr:comp.parent.parent.userId == userId ? &apos;삭제&apos; : &apos;&apos;\"/></Band></Format></Formats>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_00","0","60","100.00%","120",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("27");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"pan04_02_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"pan00_01_00_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtOcrnPstn","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("28");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("29");
            obj.set_text("세부사항");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtEtcMttr","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("30");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_01_00_00","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("31");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtEtcMttr\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtUserNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("32");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtUserTelno","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("33");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel05_01_00_00","10","98","305","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("34");
            obj.set_text("서비스유형");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Combo("cmbSrvcSe","788.00","145","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("35");
            obj.set_flexgrow("1");
            obj.set_innerdataset("dsSrvcSe");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_readonly("true");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("0");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan04_02_00_00","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("36");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_01_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"cmbSrvcSe\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel05_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("37");
            obj.set_text("발생일");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel05_00_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("39");
            obj.set_text("이메일주소");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtUserEml","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("40");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan04_01_00_00_00","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("41");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edtUserEml\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan04_01_00_00","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("38");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"calOcrnYmd\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan04_01_00","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("12");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edtOcrnPstn\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Calendar("calOcrnYmd","0","0","150","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("42");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("true");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel05_00_00_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("43");
            obj.set_text("대상업체선택여부");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan04_01_00_00_00_00","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("44");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoTrgtCoChcYn\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel05_00_00_00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("45");
            obj.set_text("대상회사명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan04_01_00_00_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("46");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_00_00_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"divEdtPop\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel05_00_00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("47");
            obj.set_text("대상자명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtTrgtNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("48");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan04_01_00_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("49");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_00_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"edtTrgtNm\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan04_00_00","0","60","100.00%","120",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("50");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"pan04_01_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan04_01_00_00_01\"/><PanelItem id=\"PanelItem00\" componentid=\"pan04_01_00_01\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan02","0","384","100.00%","400",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("10");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan02_\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new TextArea("txtAskCn","0","258","100%","245",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("55");
            obj.set_readonly("true");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("panFile","0","42","100.00%","320",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("26");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem02\" componentid=\"grdFile\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Radio("rdoTrgtCoChcYn","127","203","280","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("51");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_readonly("true");
            var divForm_form_Div00_form_rdoTrgtCoChcYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div00_form_rdoTrgtCoChcYn_innerdataset", obj);
            divForm_form_Div00_form_rdoTrgtCoChcYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div00_form_rdoTrgtCoChcYn_innerdataset);
            obj.set_text("계약선택");
            obj.set_value("0");
            obj.set_index("0");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Div("divEdtPop","43.00","393","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("52");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtCoNm","0","0",null,"40","0",null,null,null,null,null,this.divForm.form.Div00.form.divEdtPop.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_readonly("true");
            this.divForm.form.Div00.form.divEdtPop.addChild(obj.name, obj);

            obj = new Button("btnPop","edtCoNm:-40","0","40","40",null,null,null,null,null,null,this.divForm.form.Div00.form.divEdtPop.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            obj.set_visible("false");
            this.divForm.form.Div00.form.divEdtPop.addChild(obj.name, obj);

            obj = new Div("div02","0","30","100%","410",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("53");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staSubTitle","0","0","100.00%","50",null,null,null,null,null,null,this.divForm.form.Div00.form.div02.form);
            obj.set_taborder("0");
            obj.set_text("접수정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.form.Div00.form.div02.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","105",null,null,null,null,null,null,this.divForm.form.Div00.form.div02.form);
            obj.set_taborder("1");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"pan01_01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan01_01_00\"/></Contents>");
            this.divForm.form.Div00.form.div02.addChild(obj.name, obj);

            obj = new Static("staLabel02_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form.div02.form);
            obj.set_taborder("2");
            obj.set_text("접수내용");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.form.div02.addChild(obj.name, obj);

            obj = new Panel("pan02_02","10.00","98","300","100%",null,null,null,null,null,null,this.divForm.form.Div00.form.div02.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel02_01\"/><PanelItem id=\"PanelItem01\" componentid=\"txtRcptCn\"/></Contents>");
            this.divForm.form.Div00.form.div02.addChild(obj.name, obj);

            obj = new Panel("pan02","0","60","100.00%","170",null,null,null,null,null,null,this.divForm.form.Div00.form.div02.form);
            obj.set_taborder("4");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"pan02_02\"/></Contents>");
            this.divForm.form.Div00.form.div02.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form.div02.form);
            obj.set_taborder("5");
            obj.set_text("접수일시");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.form.div02.addChild(obj.name, obj);

            obj = new Panel("pan01_01_00","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div00.form.div02.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"mskRcptDt\"/></Contents>");
            this.divForm.form.Div00.form.div02.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form.div02.form);
            obj.set_taborder("7");
            obj.set_text("접수자명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.form.div02.addChild(obj.name, obj);

            obj = new Panel("pan01_01_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div00.form.div02.form);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"edtClrNm\"/></Contents>");
            this.divForm.form.Div00.form.div02.addChild(obj.name, obj);

            obj = new Edit("edtClrNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form.div02.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div00.form.div02.addChild(obj.name, obj);

            obj = new MaskEdit("mskRcptDt","0","46","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form.div02.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_textAlign("left");
            obj.set_type("string");
            this.divForm.form.Div00.form.div02.addChild(obj.name, obj);

            obj = new TextArea("txtRcptCn","0","129","100%","91",null,null,null,null,null,null,this.divForm.form.Div00.form.div02.form);
            obj.set_taborder("10");
            obj.set_readonly("true");
            this.divForm.form.Div00.form.div02.addChild(obj.name, obj);

            obj = new Div("div03","0","30","100%","410",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("54");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staSubTitle","0","0","100.00%","50",null,null,null,null,null,null,this.divForm.form.Div00.form.div03.form);
            obj.set_taborder("0");
            obj.set_text("처리정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.form.Div00.form.div03.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div00.form.div03.form);
            obj.set_taborder("9");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"pan01_01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan01_01_00\"/></Contents>");
            this.divForm.form.Div00.form.div03.addChild(obj.name, obj);

            obj = new Static("staLabel02_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form.div03.form);
            obj.set_taborder("1");
            obj.set_text("처리내용");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.form.div03.addChild(obj.name, obj);

            obj = new Panel("pan02_02","10.00","98","100%","146",null,null,null,null,null,null,this.divForm.form.Div00.form.div03.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel02_01\"/><PanelItem id=\"PanelItem01\" componentid=\"txtPrcsCn\"/></Contents>");
            this.divForm.form.Div00.form.div03.addChild(obj.name, obj);

            obj = new Panel("pan02","0","60","100.00%","157",null,null,null,null,null,null,this.divForm.form.Div00.form.div03.form);
            obj.set_taborder("3");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"pan02_02\"/></Contents>");
            this.divForm.form.Div00.form.div03.addChild(obj.name, obj);

            obj = new TextArea("txtPrcsCn","0","129","100%","100",null,null,null,null,null,null,this.divForm.form.Div00.form.div03.form);
            obj.set_taborder("10");
            obj.set_readonly("true");
            this.divForm.form.Div00.form.div03.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form.div03.form);
            obj.set_taborder("4");
            obj.set_text("처리자명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.form.div03.addChild(obj.name, obj);

            obj = new Edit("edtPrcrNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form.div03.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div00.form.div03.addChild(obj.name, obj);

            obj = new Panel("pan01_01_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div00.form.div03.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"edtPrcrNm\"/></Contents>");
            this.divForm.form.Div00.form.div03.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form.div03.form);
            obj.set_taborder("7");
            obj.set_text("처리일시");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.form.div03.addChild(obj.name, obj);

            obj = new Panel("pan01_01_00","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div00.form.div03.form);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"mskPrcsDt\"/></Contents>");
            this.divForm.form.Div00.form.div03.addChild(obj.name, obj);

            obj = new MaskEdit("mskPrcsDt","0","46","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form.div03.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_textAlign("left");
            obj.set_type("string");
            this.divForm.form.Div00.form.div03.addChild(obj.name, obj);

            obj = new RaonkUpload("RaonkUpload","1118","5","12.91%","120",null,null,null,null,null,null,this);
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

            obj = new Div("divPopBtn","10","divForm:10",null,"60","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            this.addChild(obj.name, obj);

            obj = new Button("btnRcpt","457.00","30","74","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("1");
            obj.set_text(" 접수");
            obj.set_cssclass("btn_WF_No");
            obj.set_visible("false");
            obj.set_fittocontents("width");
            this.divPopBtn.addChild(obj.name, obj);

            obj = new Button("btnSplmnt","457.00","30","98","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("1");
            obj.set_text("보완요청");
            obj.set_cssclass("btn_WF_No");
            obj.set_visible("false");
            obj.set_fittocontents("width");
            this.divPopBtn.addChild(obj.name, obj);

            obj = new Button("btnPrcs","457.00","30","98","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("2");
            obj.set_text("처리완료");
            obj.set_cssclass("btn_WF_No");
            obj.set_visible("false");
            obj.set_fittocontents("width");
            this.divPopBtn.addChild(obj.name, obj);

            obj = new Button("btnPicIdnty","457.00","30","153","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("3");
            obj.set_text("담당자확인불필요");
            obj.set_cssclass("btn_WF_No");
            obj.set_visible("false");
            obj.set_fittocontents("width");
            this.divPopBtn.addChild(obj.name, obj);

            obj = new Button("btnPicChg","457.00","30","112","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("4");
            obj.set_text("담당자변경");
            obj.set_cssclass("btn_WF_No");
            obj.set_visible("false");
            obj.set_fittocontents("width");
            this.divPopBtn.addChild(obj.name, obj);

            obj = new Button("btnUnprcs","457.00","30","112","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("5");
            obj.set_text("미처리종료");
            obj.set_cssclass("btn_WF_No");
            obj.set_visible("false");
            obj.set_fittocontents("width");
            this.divPopBtn.addChild(obj.name, obj);

            obj = new Button("btnCancel","457.00","30","70","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("6");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_No");
            obj.set_fittocontents("width");
            this.divPopBtn.addChild(obj.name, obj);

            obj = new Button("btnSave","457.00","30","68","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("7");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_visible("false");
            obj.set_fittocontents("width");
            this.divPopBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form.Div00.form.divEdtPop.form
            obj = new Layout("default","",0,0,this.divForm.form.Div00.form.divEdtPop.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.edtCoNm.set_taborder("0");
                p.edtCoNm.set_cssclass("edt_WF_EdtSch");
                p.edtCoNm.set_readonly("true");
                p.edtCoNm.move("0","0",null,"40","0",null);

                p.btnPop.set_taborder("1");
                p.btnPop.set_cssclass("btn_WF_EdtSch");
                p.btnPop.set_visible("false");
                p.btnPop.move("edtCoNm:-40","0","40","40",null,null);
            	}
            );
            this.divForm.form.Div00.form.divEdtPop.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div00.form.divEdtPop.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div00.form.divEdtPop.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.Div00.form.divEdtPop.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div00.form.div02.form
            obj = new Layout("default","",0,0,this.divForm.form.Div00.form.div02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staSubTitle.set_taborder("0");
                p.staSubTitle.set_text("접수정보");
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
                p.pan00.set_type("horizontal");
                p.pan00.move("0","60","100.00%","105",null,null);

                p.staLabel02_01.set_taborder("2");
                p.staLabel02_01.set_text("접수내용");
                p.staLabel02_01.set_cssclass("sta_WF_Label");
                p.staLabel02_01.move("10","98","100%","46",null,null);

                p.pan02_02.set_taborder("3");
                p.pan02_02.set_type("vertical");
                p.pan02_02.set_flexgrow("1");
                p.pan02_02.set_fittocontents("height");
                p.pan02_02.move("10.00","98","300","100%",null,null);

                p.pan02.set_taborder("4");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.move("0","60","100.00%","170",null,null);

                p.staLabel01_00_00.set_taborder("5");
                p.staLabel01_00_00.set_text("접수일시");
                p.staLabel01_00_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00_00.move("10","98","100%","46",null,null);

                p.pan01_01_00.set_taborder("6");
                p.pan01_01_00.set_type("vertical");
                p.pan01_01_00.set_flexgrow("1");
                p.pan01_01_00.set_fittocontents("height");
                p.pan01_01_00.move("10.00","98","300","86",null,null);

                p.staLabel01_00_01.set_taborder("7");
                p.staLabel01_00_01.set_text("접수자명");
                p.staLabel01_00_01.set_cssclass("sta_WF_Label");
                p.staLabel01_00_01.move("10","98","100%","46",null,null);

                p.pan01_01_01.set_taborder("8");
                p.pan01_01_01.set_type("vertical");
                p.pan01_01_01.set_flexgrow("1");
                p.pan01_01_01.set_fittocontents("height");
                p.pan01_01_01.move("10.00","98","300","86",null,null);

                p.edtClrNm.set_taborder("9");
                p.edtClrNm.set_readonly("true");
                p.edtClrNm.move("10.00","158","100%","40",null,null);

                p.mskRcptDt.set_taborder("11");
                p.mskRcptDt.set_readonly("true");
                p.mskRcptDt.set_textAlign("left");
                p.mskRcptDt.set_type("string");
                p.mskRcptDt.move("0","46","100%","40",null,null);

                p.txtRcptCn.set_taborder("10");
                p.txtRcptCn.set_readonly("true");
                p.txtRcptCn.move("0","129","100%","91",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div00.form.div02.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div00.form.div02.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div00.form.div02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div00.form.div02.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div00.form.div03.form
            obj = new Layout("default","",0,0,this.divForm.form.Div00.form.div03.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staSubTitle.set_taborder("0");
                p.staSubTitle.set_text("처리정보");
                p.staSubTitle.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle.move("0","0","100.00%","50",null,null);

                p.pan00.set_taborder("9");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("0px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.set_type("horizontal");
                p.pan00.move("0","60","100.00%","97",null,null);

                p.staLabel02_01.set_taborder("1");
                p.staLabel02_01.set_text("처리내용");
                p.staLabel02_01.set_cssclass("sta_WF_Label");
                p.staLabel02_01.move("10","98","100%","46",null,null);

                p.pan02_02.set_taborder("2");
                p.pan02_02.set_type("vertical");
                p.pan02_02.set_fittocontents("height");
                p.pan02_02.move("10.00","98","100%","146",null,null);

                p.pan02.set_taborder("3");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.move("0","60","100.00%","157",null,null);

                p.txtPrcsCn.set_taborder("10");
                p.txtPrcsCn.set_readonly("true");
                p.txtPrcsCn.move("0","129","100%","100",null,null);

                p.staLabel01_00_01.set_taborder("4");
                p.staLabel01_00_01.set_text("처리자명");
                p.staLabel01_00_01.set_cssclass("sta_WF_Label");
                p.staLabel01_00_01.move("10","98","100%","46",null,null);

                p.edtPrcrNm.set_taborder("5");
                p.edtPrcrNm.set_readonly("true");
                p.edtPrcrNm.move("10.00","158","100%","40",null,null);

                p.pan01_01_01.set_taborder("6");
                p.pan01_01_01.set_type("vertical");
                p.pan01_01_01.set_flexgrow("1");
                p.pan01_01_01.set_fittocontents("height");
                p.pan01_01_01.move("10.00","98","300","86",null,null);

                p.staLabel01_00_00.set_taborder("7");
                p.staLabel01_00_00.set_text("처리일시");
                p.staLabel01_00_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00_00.move("10","98","100%","46",null,null);

                p.pan01_01_00.set_taborder("8");
                p.pan01_01_00.set_type("vertical");
                p.pan01_01_00.set_flexgrow("1");
                p.pan01_01_00.set_fittocontents("height");
                p.pan01_01_00.move("10.00","98","300","86",null,null);

                p.mskPrcsDt.set_taborder("11");
                p.mskPrcsDt.set_readonly("true");
                p.mskPrcsDt.set_textAlign("left");
                p.mskPrcsDt.set_type("string");
                p.mskPrcsDt.move("0","46","100%","40",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div00.form.div03.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div00.form.div03.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div00.form.div03.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div00.form.div03.form.addLayout(obj.name, obj);
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
                p.pan00.move("0","60","100.00%","120",null,null);

                p.staLabel00.set_taborder("1");
                p.staLabel00.set_text("작성자ID");
                p.staLabel00.set_cssclass("sta_WF_Label");
                p.staLabel00.move("10","98","100%","46",null,null);

                p.edtUserId.set_taborder("2");
                p.edtUserId.set_readonly("true");
                p.edtUserId.move("10.00","158","100%","40",null,null);

                p.pan00_01.set_taborder("3");
                p.pan00_01.set_type("vertical");
                p.pan00_01.set_flexgrow("1");
                p.pan00_01.set_fittocontents("height");
                p.pan00_01.set_minwidth("");
                p.pan00_01.move("10.00","98","300","86",null,null);

                p.staLabel00_01.set_taborder("4");
                p.staLabel00_01.set_text("작성자명");
                p.staLabel00_01.set_cssclass("sta_WF_Label");
                p.staLabel00_01.move("10","98","100%","46",null,null);

                p.pan00_02.set_taborder("5");
                p.pan00_02.set_type("vertical");
                p.pan00_02.set_flexgrow("1");
                p.pan00_02.set_fittocontents("height");
                p.pan00_02.set_minwidth("");
                p.pan00_02.move("10.00","98","300","86",null,null);

                p.staLabel01_00.set_taborder("6");
                p.staLabel01_00.set_text("연락처");
                p.staLabel01_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00.move("10","98","100%","46",null,null);

                p.pan01_01.set_taborder("7");
                p.pan01_01.set_type("vertical");
                p.pan01_01.set_flexgrow("1");
                p.pan01_01.set_fittocontents("height");
                p.pan01_01.move("10.00","98","300","86",null,null);

                p.staLabel03_00.set_taborder("8");
                p.staLabel03_00.set_text("내용");
                p.staLabel03_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00.move("10","98","100%","46",null,null);

                p.pan02_.set_taborder("9");
                p.pan02_.set_type("vertical");
                p.pan02_.set_flexgrow("1");
                p.pan02_.set_fittocontents("height");
                p.pan02_.move("20","0","100%","291",null,null);

                p.staLabel05_00_00.set_taborder("11");
                p.staLabel05_00_00.set_text("발생위치");
                p.staLabel05_00_00.set_cssclass("sta_WF_Label");
                p.staLabel05_00_00.move("10","98","100%","46",null,null);

                p.pan04_00.set_taborder("13");
                p.pan04_00.set_horizontalgap("20");
                p.pan04_00.set_flexcrossaxiswrapalign("start");
                p.pan04_00.set_flexwrap("wrap");
                p.pan04_00.set_fittocontents("height");
                p.pan04_00.set_verticalgap("0");
                p.pan04_00.set_spacing("0px 20px 10px 20px");
                p.pan04_00.set_cssclass("pal_WF_DtlBg");
                p.pan04_00.move("0","60","100.00%","120",null,null);

                p.staLabel00_02.set_taborder("14");
                p.staLabel00_02.set_text("첨부파일");
                p.staLabel00_02.set_cssclass("sta_WF_Label");
                p.staLabel00_02.set_flexgrow("1");
                p.staLabel00_02.move("0","44","305","46",null,null);

                p.btn_file_1.set_taborder("15");
                p.btn_file_1.set_text("파일선택");
                p.btn_file_1.set_cssclass("btn_WF_FileUp");
                p.btn_file_1.set_visible("false");
                p.btn_file_1.move("124","58","116","40",null,null);

                p.panBtnFile.set_taborder("16");
                p.panBtnFile.set_flexgrow("1");
                p.panBtnFile.set_flexcrossaxisalign("start");
                p.panBtnFile.set_flexmainaxisalign("end");
                p.panBtnFile.move("433","58","305","46",null,null);

                p.panTitle.set_taborder("17");
                p.panTitle.set_cssclass("pan_WF_FileTitle");
                p.panTitle.set_fittocontents("height");
                p.panTitle.move("0","124","100%","46",null,null);

                p.Static00.set_taborder("18");
                p.Static00.set_text("파일수 : ");
                p.Static00.set_fittocontents("width");
                p.Static00.move("88","123","48","46",null,null);

                p.staFileCnt.set_taborder("19");
                p.staFileCnt.set_text("0");
                p.staFileCnt.move("165","143","9","46",null,null);

                p.Static02.set_taborder("20");
                p.Static02.set_text("개");
                p.Static02.set_fittocontents("width");
                p.Static02.move("293","131","13","46",null,null);

                p.panFileNum.set_taborder("21");
                p.panFileNum.set_flexgrow("1");
                p.panFileNum.set_horizontalgap("4");
                p.panFileNum.move("20","190","305","46",null,null);

                p.btnAllDelFile.set_taborder("22");
                p.btnAllDelFile.set_text("전체파일삭제");
                p.btnAllDelFile.set_cssclass("btn_WF_FileDel");
                p.btnAllDelFile.set_fittocontents("width");
                p.btnAllDelFile.set_visible("false");
                p.btnAllDelFile.move("512","135","125","40",null,null);

                p.panBtnDel.set_taborder("23");
                p.panBtnDel.set_flexcrossaxisalign("center");
                p.panBtnDel.set_flexmainaxisalign("end");
                p.panBtnDel.set_flexgrow("1");
                p.panBtnDel.set_fittocontents("height");
                p.panBtnDel.move("517","141","305","46",null,null);

                p.Panel00.set_taborder("24");
                p.Panel00.set_fittocontents("height");
                p.Panel00.move("20","51","100%","46",null,null);

                p.grdFile.set_taborder("25");
                p.grdFile.set_binddataset("dsFile");
                p.grdFile.set_autofittype("col");
                p.grdFile.set_cssclass("grd_WF_FileAdd");
                p.grdFile.move("20.00","114","100%","120",null,null);

                p.pan00_00.set_taborder("27");
                p.pan00_00.set_horizontalgap("20");
                p.pan00_00.set_flexcrossaxiswrapalign("start");
                p.pan00_00.set_flexwrap("wrap");
                p.pan00_00.set_fittocontents("height");
                p.pan00_00.set_verticalgap("0");
                p.pan00_00.set_spacing("0px 20px 10px 20px");
                p.pan00_00.set_cssclass("pal_WF_DtlBg");
                p.pan00_00.move("0","60","100.00%","120",null,null);

                p.edtOcrnPstn.set_taborder("28");
                p.edtOcrnPstn.set_readonly("true");
                p.edtOcrnPstn.move("10.00","158","100%","40",null,null);

                p.staLabel00_00_00.set_taborder("29");
                p.staLabel00_00_00.set_text("세부사항");
                p.staLabel00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00_00.move("10","98","100%","46",null,null);

                p.edtEtcMttr.set_taborder("30");
                p.edtEtcMttr.set_readonly("true");
                p.edtEtcMttr.move("10.00","158","100%","40",null,null);

                p.pan00_01_00_00.set_taborder("31");
                p.pan00_01_00_00.set_type("vertical");
                p.pan00_01_00_00.set_flexgrow("1");
                p.pan00_01_00_00.set_fittocontents("height");
                p.pan00_01_00_00.set_minwidth("");
                p.pan00_01_00_00.move("10.00","98","300","86",null,null);

                p.edtUserNm.set_taborder("32");
                p.edtUserNm.set_readonly("true");
                p.edtUserNm.move("10.00","158","100%","40",null,null);

                p.edtUserTelno.set_taborder("33");
                p.edtUserTelno.set_readonly("true");
                p.edtUserTelno.move("10.00","158","100%","40",null,null);

                p.staLabel05_01_00_00.set_taborder("34");
                p.staLabel05_01_00_00.set_text("서비스유형");
                p.staLabel05_01_00_00.set_cssclass("sta_WF_Label");
                p.staLabel05_01_00_00.move("10","98","305","46",null,null);

                p.cmbSrvcSe.set_taborder("35");
                p.cmbSrvcSe.set_flexgrow("1");
                p.cmbSrvcSe.set_innerdataset("dsSrvcSe");
                p.cmbSrvcSe.set_codecolumn("cdId");
                p.cmbSrvcSe.set_datacolumn("cdNm");
                p.cmbSrvcSe.set_readonly("true");
                p.cmbSrvcSe.set_text("선택");
                p.cmbSrvcSe.set_value("");
                p.cmbSrvcSe.set_index("0");
                p.cmbSrvcSe.move("788.00","145","100%","40",null,null);

                p.pan04_02_00_00.set_taborder("36");
                p.pan04_02_00_00.set_type("vertical");
                p.pan04_02_00_00.set_flexgrow("1");
                p.pan04_02_00_00.set_fittocontents("height");
                p.pan04_02_00_00.move("10.00","98","300","86",null,null);

                p.staLabel05_00_00_00.set_taborder("37");
                p.staLabel05_00_00_00.set_text("발생일");
                p.staLabel05_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel05_00_00_00.move("10","98","100%","46",null,null);

                p.staLabel05_00_00_00_00.set_taborder("39");
                p.staLabel05_00_00_00_00.set_text("이메일주소");
                p.staLabel05_00_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel05_00_00_00_00.move("10","98","100%","46",null,null);

                p.edtUserEml.set_taborder("40");
                p.edtUserEml.set_readonly("true");
                p.edtUserEml.move("10.00","158","100%","40",null,null);

                p.pan04_01_00_00_00.set_taborder("41");
                p.pan04_01_00_00_00.set_type("vertical");
                p.pan04_01_00_00_00.set_flexgrow("1");
                p.pan04_01_00_00_00.set_fittocontents("height");
                p.pan04_01_00_00_00.move("10.00","98","300","86",null,null);

                p.pan04_01_00_00.set_taborder("38");
                p.pan04_01_00_00.set_type("vertical");
                p.pan04_01_00_00.set_flexgrow("1");
                p.pan04_01_00_00.set_fittocontents("height");
                p.pan04_01_00_00.move("10.00","98","300","86",null,null);

                p.pan04_01_00.set_taborder("12");
                p.pan04_01_00.set_type("vertical");
                p.pan04_01_00.set_flexgrow("1");
                p.pan04_01_00.set_fittocontents("height");
                p.pan04_01_00.move("10.00","98","300","86",null,null);

                p.calOcrnYmd.set_taborder("42");
                p.calOcrnYmd.set_dateformat("yyyy-MM-dd");
                p.calOcrnYmd.set_readonly("true");
                p.calOcrnYmd.move("0","0","150","40",null,null);

                p.staLabel05_00_00_00_00_00.set_taborder("43");
                p.staLabel05_00_00_00_00_00.set_text("대상업체선택여부");
                p.staLabel05_00_00_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel05_00_00_00_00_00.move("10","98","100%","46",null,null);

                p.pan04_01_00_00_00_00.set_taborder("44");
                p.pan04_01_00_00_00_00.set_type("vertical");
                p.pan04_01_00_00_00_00.set_flexgrow("1");
                p.pan04_01_00_00_00_00.set_fittocontents("height");
                p.pan04_01_00_00_00_00.move("10.00","98","300","86",null,null);

                p.staLabel05_00_00_00_01.set_taborder("45");
                p.staLabel05_00_00_00_01.set_text("대상회사명");
                p.staLabel05_00_00_00_01.set_cssclass("sta_WF_Label");
                p.staLabel05_00_00_00_01.move("10","98","100%","46",null,null);

                p.pan04_01_00_00_01.set_taborder("46");
                p.pan04_01_00_00_01.set_type("vertical");
                p.pan04_01_00_00_01.set_flexgrow("1");
                p.pan04_01_00_00_01.set_fittocontents("height");
                p.pan04_01_00_00_01.move("10.00","98","300","86",null,null);

                p.staLabel05_00_00_01.set_taborder("47");
                p.staLabel05_00_00_01.set_text("대상자명");
                p.staLabel05_00_00_01.set_cssclass("sta_WF_Label");
                p.staLabel05_00_00_01.move("10","98","100%","46",null,null);

                p.edtTrgtNm.set_taborder("48");
                p.edtTrgtNm.set_readonly("true");
                p.edtTrgtNm.move("10.00","158","100%","40",null,null);

                p.pan04_01_00_01.set_taborder("49");
                p.pan04_01_00_01.set_type("vertical");
                p.pan04_01_00_01.set_flexgrow("1");
                p.pan04_01_00_01.set_fittocontents("height");
                p.pan04_01_00_01.move("10.00","98","300","86",null,null);

                p.pan04_00_00.set_taborder("50");
                p.pan04_00_00.set_horizontalgap("20");
                p.pan04_00_00.set_flexcrossaxiswrapalign("start");
                p.pan04_00_00.set_flexwrap("wrap");
                p.pan04_00_00.set_fittocontents("height");
                p.pan04_00_00.set_verticalgap("0");
                p.pan04_00_00.set_spacing("0px 20px 10px 20px");
                p.pan04_00_00.set_cssclass("pal_WF_DtlBg");
                p.pan04_00_00.move("0","60","100.00%","120",null,null);

                p.pan02.set_taborder("10");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.move("0","384","100.00%","400",null,null);

                p.txtAskCn.set_taborder("55");
                p.txtAskCn.set_readonly("true");
                p.txtAskCn.move("0","258","100%","245",null,null);

                p.panFile.set_taborder("26");
                p.panFile.set_fittocontents("height");
                p.panFile.set_spacing("10px 20px 10px 20px");
                p.panFile.set_flexwrap("wrap");
                p.panFile.set_cssclass("pal_WF_DtlBg");
                p.panFile.set_verticalgap("4");
                p.panFile.move("0","42","100.00%","320",null,null);

                p.rdoTrgtCoChcYn.set_taborder("51");
                p.rdoTrgtCoChcYn.set_fittocontents("width");
                p.rdoTrgtCoChcYn.set_innerdataset(divForm_form_Div00_form_rdoTrgtCoChcYn_innerdataset);
                p.rdoTrgtCoChcYn.set_codecolumn("codecolumn");
                p.rdoTrgtCoChcYn.set_datacolumn("datacolumn");
                p.rdoTrgtCoChcYn.set_direction("vertical");
                p.rdoTrgtCoChcYn.set_readonly("true");
                p.rdoTrgtCoChcYn.set_value("0");
                p.rdoTrgtCoChcYn.set_index("0");
                p.rdoTrgtCoChcYn.move("127","203","280","40",null,null);

                p.divEdtPop.set_taborder("52");
                p.divEdtPop.set_text("Div00");
                p.divEdtPop.set_formscrollbartype("none none");
                p.divEdtPop.set_formscrolltype("none");
                p.divEdtPop.set_flexgrow("1");
                p.divEdtPop.move("43.00","393","100%","40",null,null);

                p.div02.set_taborder("53");
                p.div02.set_text("Div00");
                p.div02.set_cssclass("div_WF_Bg");
                p.div02.set_fittocontents("height");
                p.div02.move("0","30","100%","410",null,null);

                p.div03.set_taborder("54");
                p.div03.set_text("Div00");
                p.div03.set_cssclass("div_WF_Bg");
                p.div03.set_fittocontents("height");
                p.div03.move("0","30","100%","410",null,null);
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
                p.Div00.set_taborder("0");
                p.Div00.set_text("Div00");
                p.Div00.set_cssclass("div_WF_Bg");
                p.Div00.set_fittocontents("height");
                p.Div00.set_maxheight("");
                p.Div00.move("0","0","100%","100%",null,null);
            	}
            );
            obj.set_verticalgap("30");
            obj.set_type("vertical");
            obj.set_spacing("10px 20px 0px 20px");
            this.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form
            obj = new Layout("Layout0","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("30");
            obj.set_type("vertical");
            obj.set_spacing("10px 20px 0px 20px");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divPopBtn.form
            obj = new Layout("default","",0,0,this.divPopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnRcpt.set_taborder("1");
                p.btnRcpt.set_text(" 접수");
                p.btnRcpt.set_cssclass("btn_WF_No");
                p.btnRcpt.set_visible("false");
                p.btnRcpt.set_fittocontents("width");
                p.btnRcpt.move("457.00","30","74","40",null,null);

                p.btnSplmnt.set_taborder("1");
                p.btnSplmnt.set_text("보완요청");
                p.btnSplmnt.set_cssclass("btn_WF_No");
                p.btnSplmnt.set_visible("false");
                p.btnSplmnt.set_fittocontents("width");
                p.btnSplmnt.move("457.00","30","98","40",null,null);

                p.btnPrcs.set_taborder("2");
                p.btnPrcs.set_text("처리완료");
                p.btnPrcs.set_cssclass("btn_WF_No");
                p.btnPrcs.set_visible("false");
                p.btnPrcs.set_fittocontents("width");
                p.btnPrcs.move("457.00","30","98","40",null,null);

                p.btnPicIdnty.set_taborder("3");
                p.btnPicIdnty.set_text("담당자확인불필요");
                p.btnPicIdnty.set_cssclass("btn_WF_No");
                p.btnPicIdnty.set_visible("false");
                p.btnPicIdnty.set_fittocontents("width");
                p.btnPicIdnty.move("457.00","30","153","40",null,null);

                p.btnPicChg.set_taborder("4");
                p.btnPicChg.set_text("담당자변경");
                p.btnPicChg.set_cssclass("btn_WF_No");
                p.btnPicChg.set_visible("false");
                p.btnPicChg.set_fittocontents("width");
                p.btnPicChg.move("457.00","30","112","40",null,null);

                p.btnUnprcs.set_taborder("5");
                p.btnUnprcs.set_text("미처리종료");
                p.btnUnprcs.set_cssclass("btn_WF_No");
                p.btnUnprcs.set_visible("false");
                p.btnUnprcs.set_fittocontents("width");
                p.btnUnprcs.move("457.00","30","112","40",null,null);

                p.btnCancel.set_taborder("6");
                p.btnCancel.set_text("취소");
                p.btnCancel.set_cssclass("btn_WF_No");
                p.btnCancel.set_fittocontents("width");
                p.btnCancel.move("457.00","30","70","40",null,null);

                p.btnSave.set_taborder("7");
                p.btnSave.set_text("수정");
                p.btnSave.set_cssclass("btn_WF_Yes");
                p.btnSave.set_visible("false");
                p.btnSave.set_fittocontents("width");
                p.btnSave.move("457.00","30","68","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px");
            this.divPopBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divPopBtn.form
            obj = new Layout("Layout0","",0,0,this.divPopBtn.form,
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
            obj.set_spacing("0px 10px");
            this.divPopBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1100,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("신청정보확인");

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_fittocontents("height");
                p.divForm.move("10","10",null,"1560","10",null);

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
                p.RaonkUpload.move("1118","5","12.91%","120",null,null);

                p.divPopBtn.set_taborder("2");
                p.divPopBtn.set_text("Div00");
                p.divPopBtn.set_cssclass("div_WF_PopBtn");
                p.divPopBtn.move("10","divForm:10",null,"60","10",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Phone_screen",480,1650,this,
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
            obj = new BindItem("item0","divForm.form.Div00.form.edtUserId","value","dsGet","userId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.Div00.form.edtUserNm","value","dsGet","userNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.Div00.form.edtUserTelno","value","dsGet","userTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.Div00.form.edtUserEml","value","dsGet","userEml");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.Div00.form.calOcrnYmd","value","dsGet","ocrnYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.Div00.form.edtOcrnPstn","value","dsGet","ocrnPstn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.Div00.form.cmbSrvcSe","value","dsGet","srvcSe");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divForm.form.Div00.form.edtEtcMttr","value","dsGet","etcMttr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divForm.form.Div00.form.rdoTrgtCoChcYn","value","dsGet","trgtCoChcYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divForm.form.Div00.form.divEdtPop.form.edtCoNm","value","dsGet","coNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divForm.form.Div00.form.edtTrgtNm","value","dsGet","trgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divForm.form.Div00.form.txtAskCn","value","dsGet","askCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divForm.form.Div00.form.div02.form.edtClrNm","value","dsGet","clrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divForm.form.Div00.form.div03.form.edtPrcrNm","value","dsGet","prcrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divForm.form.Div00.form.div02.form.txtRcptCn","value","dsGet","rcptCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divForm.form.Div00.form.div03.form.txtPrcsCn","value","dsGet","prcsCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divForm.form.Div00.form.div02.form.mskRcptDt","value","dsGet","rcptDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divForm.form.Div00.form.div03.form.mskPrcsDt","value","dsGet","prcsDt");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("COM010P051.xfdl", function() {
        /**
        *  PcMdi 프로젝트
        *  @FileName 	COM010P051.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2023/10/30
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2023/10/30			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        this.askInfoId;
        this.userId;
        this.mngrYn; // 관리자여부

        this.validateColumn = [];

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수
        	this.fnInit();

        	this.validateColumn.push({"title" : "연락처", "com": this.divForm.form.Div00.form.edtUserTelno});
        	this.validateColumn.push({"title" : "이메일", "com": this.divForm.form.Div00.form.edtUserEml});
        	this.validateColumn.push({"title" : "서비스유형", "com": this.divForm.form.Div00.form.cmbSrvcSe});
        	this.validateColumn.push({"title" : "내용", "com": this.divForm.form.Div00.form.txtAskCn});

        	this.askInfoId = this.getOwnerFrame().askInfoId;
        	this.userId = this.objApp.gdsUser.getColumn(0, "userId");
        	this.mngrYn = this.objApp.gdsUser.getColumn(0, "mngrYn");

        	this.cfnSearch();
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	this.getSearchTransaction();
        };

        //저장
        this.cfnSave = function ()
        {
        	if(this.gfnDsIsUpdated(this.dsGet) != true && this.gfnDsIsUpdated(this.dsFile) != true) {
        		this.gfnAlertMsg("msg", "MSG_004");
        	} else {
        		if(this.gfnDsIsValidated(this.validateColumn)) {
        			this.gfnConfirmMsg("save_file", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        		}
        	}
        };

        //추가
        this.cfnAdd = function ()
        {
        	//TODO..
        };

        //삭제
        this.cfnDel = function ()
        {
        	//TODO..
        };

        this.cfnClose = function()
        {
        	this.close();
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.getSearchTransaction = function()
        {
        	var strSvcId    = "search";
        	var strSvcUrl   = "cic/aplyInfoInq.do";
        	var inData      = "";
        	var outData     = "dsGet=dsGet dsFile=dsFile";
        	var strArg      = "id=" + this.askInfoId;
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc, 	// transaction의 결과를 받을 Function 이름
        						isAsync); 		// 비동기통신 여부 [생략가능]
        };

        // 데이터 저장
        this.saveTransaction = function()
        {
        	var strSvcId    = "save";
        	var strSvcUrl   = "cic/prpRcptInfoStrg.do";
        	var inData      = "dsGet=dsGet:A dsFile=dsFile:U";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= false;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0)
        	{
        		return;
        	}

        	switch(svcID)
        	{
        		case "search" :
        			if(this.gfnIsNull(this.dsGet.getColumn(0, "rcptDt")) != true) {
        				this.divForm.form.Div00.form.div02.form.mskRcptDt.format = "####-##-## ##:##";
        			}

        			if(this.gfnIsNull(this.dsGet.getColumn(0, "prcsDt")) != true) {
        				this.divForm.form.Div00.form.div03.form.mskPrcsDt.format = "####-##-## ##:##";
        			}

        			if(this.dsFile.getRowCount() > 0) {
        				this.divForm.form.Div00.form.staFileCnt.text = this.dsFile.getRowCount();

        				if(this.userId == this.dsGet.getColumn(0, "userId")) {
        					this.divForm.form.Div00.form.btnAllDelFile.visible = true;
        				}

        				// 데이터 조회 후 파일리스트에 셋팅
        				this.gfnDownloadSetting(this.RaonkUpload, this.dsFile);
        			}

        			this.fnSetComponent();

        			break;
        		case "save" :
        			this.gfnAlertMsg("save", "MSG_001", "", "msgCallback");
        			break;
        		case "uploadComplete":
        			// 파일 업로드가 완료 된 후 첨부파일 과 같이 데이터 저장
         			//console.log(this.dsFile.saveXML());
        			this.dsGet.setColumn(0, "atflMngNo", this.dsFile.getColumn(0, "atflMngNo"));
        			this.saveTransaction();
        			break;
        	}
        };

        /**
        	sPopupId	// 페세지창을 구분하기 위한 ID
        	sRtn		// 메세지창에서 리턴 해주는 변수값 (JSON 형태의 스트링 리턴)
        **/
        this.msgCallback = function(sPopupId, sRtn)
        {
        	var oRtn = JSON.parse(sRtn);
        	if(sPopupId == "save_file") {
        		if(oRtn.result == "Y")
        		{
        			var obj = {
        				"atchFileId" : "",			// 기존 첨부파일 있을 경우 입력
        				"bsnsSeCd" : "COM",			// 업무구분코드
        				"prgrmId" : "COM010M04" 	// 프로그램ID (화면 ID)
        			}

        			var str = JSON.stringify(obj);
        			this.RaonkUpload.AddFormData('params', str);
        			this.RaonkUpload.Transfer();
        		}
        	}
        	else if(sPopupId == "file_del") {
        		this.gfnDeleteFile(this.RaonkUpload, this.dsFile, oRtn.paramArg);
        	}
        	else if(sPopupId == "file_all_del") {
        		if(oRtn.result == "Y") {
        			this.gfnDeleteAllFile(this.RaonkUpload, this.dsFile);
        		}
        	}
        	else if(sPopupId == "save") {
        		var arr = {"saveFlag" : "Y"};
        		this.close(JSON.stringify(arr));
        	}
        	else if(sPopupId == "save_askStts") {
        		if(oRtn.result == "Y") {
        			var arg = oRtn.paramArg;
        			var askStts = arg.askStts;
        			this.dsGet.setColumn(0, "askStts", askStts);
        			// 접수일시
        			if(askStts == "02") {
        				this.dsGet.setColumn(0, "rcptDt", this.gfnGetDate("time"));
        			} else if(askStts == "04" || askStts == "05" || askStts == "06") {
        				this.dsGet.setColumn(0, "prcsDt", this.gfnGetDate("time"));
        			}

        			this.saveTransaction();
        		}
        	}
        	else if(sPopupId == "save_userId") {
        		if(oRtn.result == "Y") {
        			var arg = oRtn.paramArg;
        			this.dsGet.setColumn(0, "prcrId", arg.userId);
        			this.dsGet.setColumn(0, "prcrNm", arg.userNm);
        			this.saveTransaction();
        		}
        	}
        };

        this.fnPopupCallback = function(sPopupId, sRtn)
        {
        	if(sPopupId =="coIdSearchPopup") {
        		if (this.gfnIsNull(sRtn)) return;
        		var objRtn = JSON.parse(sRtn);
        		this.dsGet.setColumn(0, "trgtCoId", objRtn.coId);
        		this.dsGet.setColumn(0, "coNm", objRtn.coNm);
        	}
        	else if(sPopupId =="prcsIdSearchPopup") {
        		if (this.gfnIsNull(sRtn)) return;
        		var objRtn = JSON.parse(sRtn);
        		this.gfnConfirmMsg("save_userId", "CST_001", "msgCallback", ["확인", "취소"], ["Y", "N"], {"userId" : objRtn.userId, "userNm" : objRtn.userNm}, ["담당자 변경"]);
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	this.gfnCmmCode("srvcSe", "dsSrvcSe", "ASK_SRVC_SE", "S");
        };

        // 컴포넌트 제어
        this.fnSetComponent = function()
        {
        	// 등록, 보완요청 일때
        	if(this.dsGet.getColumn(0, "askStts") == "01" || this.dsGet.getColumn(0, "askStts") == "03") {
        		// 작성자만 수정 가능
        		if(this.userId == this.dsGet.getColumn(0, "userId")) {
        			this.divForm.form.Div00.form.edtUserTelno.readonly = false;
        			this.divForm.form.Div00.form.edtUserEml.readonly = false;
        			this.divForm.form.Div00.form.cmbSrvcSe.readonly = false;
        			this.divForm.form.Div00.form.txtAskCn.readonly = false;
        			this.divForm.form.Div00.form.btn_file_1.visible = true;
        			this.divPopBtn.form.btnSave.visible = true;

        			// 서비스유형 기타일 경우
        			if(this.dsGet.getColumn(0, "srvcSe") == "11") {
        				this.divForm.form.Div00.form.edtEtcMttr.readonly = false;
        			}

        			// 제안접수 외
        			if(this.dsGet.getColumn(0, "aplySe") != "01") {
        				this.divForm.form.Div00.form.calOcrnYmd.readonly = false;
        				this.divForm.form.Div00.form.edtOcrnPstn.readonly = false;

        				// 칭찬, 부패 접수
        				if(this.dsGet.getColumn(0, "aplySe") == "03" || this.dsGet.getColumn(0, "aplySe") == "04") {
        					this.divForm.form.Div00.form.rdoTrgtCoChcYn.readonly = false;
        					this.divForm.form.Div00.form.divEdtPop.form.edtCoNm.readonly = false;
        					this.divForm.form.Div00.form.divEdtPop.form.btnPop.visible = true;
        					this.divForm.form.Div00.form.edtTrgtNm.readonly = false;
        				}
        			}
        		}
        		else {
        			// 관리자일 경우
        			if(this.mngrYn == "Y") {
        				this.dsGet.setColumn(0, "clrId", this.objApp.gdsUser.getColumn(0, "userId"));
        				this.dsGet.setColumn(0, "clrNm", this.objApp.gdsUser.getColumn(0, "userNm"));

        				this.divForm.form.Div00.form.div02.form.txtRcptCn.readonly = false;
        				this.divPopBtn.form.btnRcpt.visible = true;
        				this.divPopBtn.form.btnPicChg.visible = true;
        				this.divPopBtn.form.btnUnprcs.visible = true;
        			}
        		}
        	}
        	// 접수 일때
        	else if(this.dsGet.getColumn(0, "askStts") == "02") {
        		// 관리자일 경우 - 처리자 지정
        		if(this.mngrYn == "Y") {
        			this.divPopBtn.form.btnPicChg.visible = true;
        		}

        		// 처리자일 경우
        		if(this.userId == this.dsGet.getColumn(0, "prcrId")) {
        			this.divForm.form.Div00.form.div03.form.txtPrcsCn.readonly = false;
        			this.divPopBtn.form.btnSplmnt.visible = true;
        			this.divPopBtn.form.btnPrcs.visible = true;
        			this.divPopBtn.form.btnPicIdnty.visible = true;
        			this.divPopBtn.form.btnPicChg.visible = true;
        			this.divPopBtn.form.btnUnprcs.visible = true;
        		}
        	}
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        // 파일 업로드
        this.divForm_Div00_btn_file_1_00_00_onclick = function(obj,e)
        {
        	// 데이터의 첨부파일 관리번호 입력 컬럼명
        	this.gvUploadCategory = "askFile";		// 컬럼ID
        	this.RaonkUpload.OpenFileDialog();
        };

        this.RaonkUpload_RAONKUPLOAD_BeforeAddFile = function(obj, paramObj)
        {
        // 	if(this.gvUploadCategory == 'bizFile')
        // 	{
        // 		if(this.dsFile1.rowcount >= 1)
        // 		{
        // 			this.gfnAlertMsg("MSG_001", "msgCallback");
        // 			this.gfnAlertMsg("beforeAddFile", "파일 1개만 업로드 가능 합니다.", "msgCallback");
        // 			return false;
        // 		}
        // 	}
        //
        // 	return true;
        };

        this.RaonkUpload00_RAONKUPLOAD_AfterAddFile = function(obj, paramObj)
        {
        	// 파일에 카테고리 셋팅
        	//this.RaonkUpload.SetFileCustomValue(-1, this.gvUploadCategory);
        	var sRow = this.dsFile.findRow("colId", this.gvUploadCategory);
        	var atflMngNo = this.dsFile.getColumn(sRow, "atflMngNo");

        	var cvObj = {
        		"strCustomValue" : this.gvUploadCategory,
        		"atflMngNo" : atflMngNo
        	};
        	this.RaonkUpload.SetFileCustomValue(-1, JSON.stringify(cvObj));

        	var nIdx = this.dsFile.addRow();
        	this.dsFile.setColumn(nIdx, "fullName", paramObj.userdata.strName + ' (' + paramObj.userdata.nSize + ')');
        	this.dsFile.setColumn(nIdx, "orgnlFileNm", paramObj.userdata.strName);
        	this.dsFile.setColumn(nIdx, "fileSz", paramObj.userdata.nSize);
        	this.dsFile.setColumn(nIdx, "atflMngSno", paramObj.userdata.nIndex);
        	this.dsFile.setColumn(nIdx, "colId", this.gvUploadCategory);

        	this.divForm.form.Div00.form.staFileCnt.text = this.dsFile.getRowCount();

        	if(this.gfnIsNull(this.dsGet.getColumn(0, "atflMngSno")) != true) {
        		this.dsFile.setColumn(nIdx, "atflMngSno", this.dsGet.getColumn(0, "atflMngSno"));
        	} else {
        		this.dsFile.setColumn(nIdx, "atflMngSno", paramObj.userdata.nIndex);
        	}
        };

        // 페이지에서 라온K업로드 솔루션의 생성 이벤트
        this.RaonkUpload00_RAONKUPLOAD_CreationComplete = function(obj,  paramObj)
        {
        	// 업로드 솔루션이 초기 생성시 업로드 할 경로를 지정해야 한다.
        	// /CMM/YYYY/MM/DD/  <<== CMM은 업무별 폴더 지정이고 기본적으로 /년도/월/일 의 폴더 구조를 갖는다.
        	this.RaonkUpload.SetConfig('FolderNameRule', '/COM/YYYY/MM/DD/');
        };

        // 파일 업로드 완료 이벤트
        this.RaonkUpload00_RAONKUPLOAD_UploadComplete = function(obj, paramObj)
        {
        	var allListArray = this.RaonkUpload.GetListInfo("json");
        	// 파일 업로드 후 첨부파일관리번호를 얻기 위한 함수
        	this.gfnUploadComplete("uploadComplete", allListArray, "dsFile", "fnCallback");
        };

        // 파일 업로드 시 에러 발생 이벤트
        this.divForm_Div04_RaonkUpload_RAONKUPLOAD_OnError = function(obj, paramObj)
        {
        	console.log(paramObj);
        };

        this.divForm_Div00_grdFileList_oncellclick = function(obj,e)
        {
        	if(e.col == 1) {	// 삭제 버튼 클릭
        		if(this.userId == this.dsGet.getColumn(0, "userId")) {
        			var param = {
        				"row" : e.row,
        				"col" : e.col
        			};
        			this.gfnConfirmMsg("file_del", "MSG_002", "msgCallback", ["확인", "취소"], ["Y", "N"], param);
        		}
        	}
        	else if(e.col == 0) { // 파일명 클릭
        		this.gfnSelectFile(this.RaonkUpload, this.dsFile, e);
        	}
        };

        // 파일다운로드
        this.divForm_Div00_grdFileList_oncelldblclick = function(obj,e)
        {
        	if(e.col == 0) {	// 파일명을 더블클릭 시 다운로드
        		this.gfnDownloadFile(this.RaonkUpload, this.dsFile, e);
        	}
        };

        // 파일 전체 삭제
        this.divForm_Div00_btn_del_file_1_onclick = function(obj,e)
        {
        	this.gfnConfirmMsg("file_all_del", "MSG_005", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        };

        // 기타 선택시 세부사항 활성화
        this.divForm_Div00_cmbSrvcSe_onitemchanged = function(obj,e)
        {
        	if(e.postvalue == "11") {
        		this.divForm.form.Div00.form.edtEtcMttr.readonly = false;
        	} else {
        		this.divForm.form.Div00.form.edtEtcMttr.value = "";
        		this.divForm.form.Div00.form.edtEtcMttr.readonly = true;
        	}
        };

        // 회사 팝업
        this.divForm_Div00_divEdtPop_btnPop_onclick = function(obj,e)
        {
        	var sTitle = "회사 목록";
        	var objArg   = {};

        	var objOption = {
        		popuptype: "modal"	//modal,modaless
         		, width: 1221
         		, height: 650			//width,height 지정하지 않음 popup form size적용
        		, autosize: false
        		, title: sTitle
        		, resize: false
        		, titlebar: true
        	};
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup("coIdSearchPopup", "work::COM/crtr/COM100P01.xfdl", objArg, sPopupCallBack, objOption);
        };

        // 담당자변경 팝업
        this.divPopBtn_btnPicChg_onclick = function(obj,e)
        {
        	var sTitle = "담당자 지정";
        	var objArg   = {};

        	var objOption = {
        		popuptype: "modal"	//modal,modaless
         		//, width: 1221
         		//, height: 650			//width,height 지정하지 않음 popup form size적용
        		, autosize: true
        		, title: sTitle
        		, resize: false
        		, titlebar: true
        	};
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup("prcsIdSearchPopup", "work::COM/cic/COM010P052.xfdl", objArg, sPopupCallBack, objOption);
        };

        // 접수
        this.divPopBtn_btnRcpt_onclick = function(obj,e)
        {
        	this.validateColumn.clear;
        	this.validateColumn.push({"title" : "접수내용", "com": this.divForm.form.Div00.form.div02.form.txtRcptCn});

        	if(this.gfnDsIsValidated(this.validateColumn)) {
        		var askStts = "02";
        		this.gfnConfirmMsg("save_askStts", "CST_001", "msgCallback", ["확인", "취소"], ["Y", "N"], {"askStts" : askStts}, ["접수 처리"]);
        	}
        };

        // 보완요청
        this.divPopBtn_btnSplmnt_onclick = function(obj,e)
        {
        	var askStts = "03";
        	this.gfnConfirmMsg("save_askStts", "CST_001", "msgCallback", ["확인", "취소"], ["Y", "N"], {"askStts" : askStts}, ["보완요청 처리"]);
        };

        // 처리완료
        this.divPopBtn_btnPrcs_onclick = function(obj,e)
        {
        	this.validateColumn.clear;
        	this.validateColumn.push({"title" : "처리내용", "com": this.divForm.form.Div00.form.div03.form.txtPrcsCn});

        	if(this.gfnDsIsValidated(this.validateColumn)) {
        		var askStts = "05";
        		this.gfnConfirmMsg("save_askStts", "CST_001", "msgCallback", ["확인", "취소"], ["Y", "N"], {"askStts" : askStts}, ["처리완료 처리"]);
        	}
        };

        // 담당자확인불필요
        this.divPopBtn_btnPicIdnty_onclick = function(obj,e)
        {
        	this.validateColumn.clear;
        	this.validateColumn.push({"title" : "처리내용", "com": this.divForm.form.Div00.form.div03.form.txtPrcsCn});

        	if(this.gfnDsIsValidated(this.validateColumn)) {
        		var askStts = "04";
        		this.gfnConfirmMsg("save_askStts", "CST_001", "msgCallback", ["확인", "취소"], ["Y", "N"], {"askStts" : askStts}, ["담당자확인불필요 처리"]);
        	}
        };

        // 미처리완료
        this.divPopBtn_btnUnprcs_onclick = function(obj,e)
        {
        	this.validateColumn.clear;
        	this.validateColumn.push({"title" : "처리내용", "com": this.divForm.form.Div00.form.div03.form.txtPrcsCn});

        	if(this.gfnDsIsValidated(this.validateColumn)) {
        		var askStts = "06";
        		this.gfnConfirmMsg("save_askStts", "CST_001", "msgCallback", ["확인", "취소"], ["Y", "N"], {"askStts" : askStts}, ["미처리완료 처리"]);
        	}
        };

        this.divForm_Div00_div03_txtPrcsCn_onchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.Div00.form.btn_file_1.addEventHandler("onclick",this.divForm_Div00_btn_file_1_00_00_onclick,this);
            this.divForm.form.Div00.form.btnAllDelFile.addEventHandler("onclick",this.divForm_Div00_btn_del_file_1_onclick,this);
            this.divForm.form.Div00.form.grdFile.addEventHandler("oncellclick",this.divForm_Div00_grdFileList_oncellclick,this);
            this.divForm.form.Div00.form.grdFile.addEventHandler("oncelldblclick",this.divForm_Div00_grdFileList_oncelldblclick,this);
            this.divForm.form.Div00.form.cmbSrvcSe.addEventHandler("onitemchanged",this.divForm_Div00_cmbSrvcSe_onitemchanged,this);
            this.divForm.form.Div00.form.divEdtPop.form.btnPop.addEventHandler("onclick",this.divForm_Div00_divEdtPop_btnPop_onclick,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterAddFile",this.RaonkUpload00_RAONKUPLOAD_AfterAddFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_CreationComplete",this.RaonkUpload00_RAONKUPLOAD_CreationComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_UploadComplete",this.RaonkUpload00_RAONKUPLOAD_UploadComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_OnError",this.divForm_Div04_RaonkUpload_RAONKUPLOAD_OnError,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_BeforeAddFile",this.RaonkUpload_RAONKUPLOAD_BeforeAddFile,this);
            this.divPopBtn.form.btnRcpt.addEventHandler("onclick",this.divPopBtn_btnRcpt_onclick,this);
            this.divPopBtn.form.btnSplmnt.addEventHandler("onclick",this.divPopBtn_btnSplmnt_onclick,this);
            this.divPopBtn.form.btnPrcs.addEventHandler("onclick",this.divPopBtn_btnPrcs_onclick,this);
            this.divPopBtn.form.btnPicIdnty.addEventHandler("onclick",this.divPopBtn_btnPicIdnty_onclick,this);
            this.divPopBtn.form.btnPicChg.addEventHandler("onclick",this.divPopBtn_btnPicChg_onclick,this);
            this.divPopBtn.form.btnUnprcs.addEventHandler("onclick",this.divPopBtn_btnUnprcs_onclick,this);
            this.divPopBtn.form.btnCancel.addEventHandler("onclick",this.cfnClose,this);
            this.divPopBtn.form.btnSave.addEventHandler("onclick",this.cfnSave,this);
        };
        this.loadIncludeScript("COM010P051.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
