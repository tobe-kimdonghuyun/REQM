(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("REN002M03");
            this.set_titletext("임차희망서 접수상세(처리자)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,2250);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGet", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"hireLohNo\" type=\"STRING\" size=\"256\"/><Column id=\"prgrsSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"prgrsSttsNm\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyNm\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyClsfCd\" type=\"STRING\" size=\"256\"/><Column id=\"picDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"picNm\" type=\"STRING\" size=\"256\"/><Column id=\"picJbpsNm\" type=\"STRING\" size=\"256\"/><Column id=\"picTelno\" type=\"STRING\" size=\"256\"/><Column id=\"picMblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"picEmlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"picFxno\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntSmYn\" type=\"STRING\" size=\"256\"/><Column id=\"rentRsnPrps\" type=\"STRING\" size=\"256\"/><Column id=\"pstnCd\" type=\"STRING\" size=\"256\"/><Column id=\"bldgCd\" type=\"STRING\" size=\"256\"/><Column id=\"bldgNofl\" type=\"STRING\" size=\"256\"/><Column id=\"zoneCd\" type=\"STRING\" size=\"256\"/><Column id=\"rntar\" type=\"STRING\" size=\"256\"/><Column id=\"usgCd\" type=\"STRING\" size=\"256\"/><Column id=\"dtlUsgCd\" type=\"STRING\" size=\"256\"/><Column id=\"mvnHpeYmd\" type=\"STRING\" size=\"256\"/><Column id=\"evdncDataSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"etcDmndMttr\" type=\"STRING\" size=\"256\"/><Column id=\"sbmsnYn\" type=\"STRING\" size=\"256\"/><Column id=\"sbmsnDt\" type=\"STRING\" size=\"256\"/><Column id=\"prsnrId\" type=\"STRING\" size=\"256\"/><Column id=\"rvwOpnn\" type=\"STRING\" size=\"256\"/><Column id=\"rcptNo\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyClsfNm\" type=\"STRING\" size=\"256\"/><Column id=\"pstnNm\" type=\"STRING\" size=\"256\"/><Column id=\"bldgNm\" type=\"STRING\" size=\"256\"/><Column id=\"usgNm\" type=\"STRING\" size=\"256\"/><Column id=\"dtlUsgNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcsDeptNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"grp1CdId\" type=\"STRING\" size=\"256\"/><Column id=\"grp1CdNm\" type=\"STRING\" size=\"256\"/><Column id=\"grp2CdId\" type=\"STRING\" size=\"256\"/><Column id=\"grp2CdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"hireLoiNo\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId\" type=\"STRING\" size=\"256\"/><Column id=\"atflCd\" type=\"STRING\" size=\"256\"/><Column id=\"natchRsn\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bsnsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId2\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"fileExtn\" type=\"STRING\" size=\"256\"/><Column id=\"strgFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTerm\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"hireLohNo\" type=\"STRING\" size=\"256\"/><Column id=\"grp1CdId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile3", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"grp1CdId\" type=\"STRING\" size=\"256\"/><Column id=\"grp1CdNm\" type=\"STRING\" size=\"256\"/><Column id=\"grp2CdId\" type=\"STRING\" size=\"256\"/><Column id=\"grp2CdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"hireLoiNo\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId\" type=\"STRING\" size=\"256\"/><Column id=\"atflCd\" type=\"STRING\" size=\"256\"/><Column id=\"natchRsn\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bsnsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId2\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"fileExtn\" type=\"STRING\" size=\"256\"/><Column id=\"strgFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTerm\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAtflList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"grp1CdId\" type=\"STRING\" size=\"256\"/><Column id=\"grp1CdNm\" type=\"STRING\" size=\"0\"/><Column id=\"grp2CdId\" type=\"STRING\" size=\"256\"/><Column id=\"grp2CdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"hireLoiNo\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId\" type=\"STRING\" size=\"256\"/><Column id=\"atflCd\" type=\"STRING\" size=\"256\"/><Column id=\"natchRsn\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bsnsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId2\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"fileExtn\" type=\"STRING\" size=\"256\"/><Column id=\"strgFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTerm\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"grp2CdNm\">010</Col><Col id=\"hireLoiNo\">REN0022001</Col></Row><Row><Col id=\"grp2CdNm\">020</Col><Col id=\"hireLoiNo\">REN0022001</Col><Col id=\"prgrmId\">REN0022002</Col></Row><Row><Col id=\"grp2CdNm\">030</Col><Col id=\"hireLoiNo\">REN0022001</Col><Col id=\"prgrmId\">REN0022002</Col></Row><Row><Col id=\"grp2CdNm\">040</Col><Col id=\"prgrmId\">REN0022002</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile", this);
            obj.set_useclientlayout("true");
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divForm","0","70",null,"2348","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_cssclass("div_WF_QuickFrBg");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("div00","17","8","100%","96",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("25");
            obj.set_text("div00");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staPrcsDeptNm","67","19","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("0");
            obj.set_text("담당부서");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Edit("edtPrcsDeptNm","67","65","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("panPrcsDeptNm","67","19","300","86",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPrcsDeptNm\"/><PanelItem id=\"PanelItem01\" componentid=\"edtPrcsDeptNm\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Static("staRcptNo","67","65","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("3");
            obj.set_text("접수번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Edit("edtRcptNo","397","19","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("panRcptNo","67","19","300","86",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staRcptNo\"/><PanelItem id=\"PanelItem01\" componentid=\"edtRcptNo\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Static("staPrgsSttsNm","397","19","87","43",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("6");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Edit("edtPrgsSttsNm","397","19","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("7");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("panPrgsSttsNm","67","65","300","96",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPrgsSttsNm\"/><PanelItem id=\"PanelItem01\" componentid=\"edtPrgsSttsNm\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("pan00","0","0","100.00%","96",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("9");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panPrcsDeptNm\"/><PanelItem id=\"PanelItem01\" componentid=\"panRcptNo\"/><PanelItem id=\"PanelItem02\" componentid=\"panPrgsSttsNm\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("sub_tit01","0","0","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle01\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("div01","33","25","100%","400",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("26");
            obj.set_text("div01");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staHirerNm","45","23","100%","46",null,null,null,null,null,null,this.divForm.form.div01.form);
            obj.set_taborder("0");
            obj.set_text("업체명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.div01.addChild(obj.name, obj);

            obj = new Edit("edtHirerNm","45","69","100%","40",null,null,null,null,null,null,this.divForm.form.div01.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.div01.addChild(obj.name, obj);

            obj = new Panel("panHirerNm","45","23","460","86",null,null,null,null,null,null,this.divForm.form.div01.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staHirerNm\"/><PanelItem id=\"PanelItem01\" componentid=\"edtHirerNm\"/></Contents>");
            this.divForm.form.div01.addChild(obj.name, obj);

            obj = new Static("staBzentyClsfCd","45","69","47.66%","46",null,null,null,null,null,null,this.divForm.form.div01.form);
            obj.set_taborder("3");
            obj.set_text("업체분류");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.div01.addChild(obj.name, obj);

            obj = new Edit("edtBzentyClsfCd","540","23","100%","40",null,null,null,null,null,null,this.divForm.form.div01.form);
            obj.set_taborder("4");
            obj.set_value("");
            obj.getSetter("index").set("-1");
            obj.set_readonly("true");
            obj.set_text("선택하기");
            this.divForm.form.div01.addChild(obj.name, obj);

            obj = new Panel("panBzentyClsfCd","45","23","460","86",null,null,null,null,null,null,this.divForm.form.div01.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staBzentyClsfCd\"/><PanelItem id=\"PanelItem01\" componentid=\"edtBzentyClsfCd\"/></Contents>");
            this.divForm.form.div01.addChild(obj.name, obj);

            obj = new Panel("pan00_00_00","25","23","100.00%","96",null,null,null,null,null,null,this.divForm.form.div01.form);
            obj.set_taborder("6");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panHirerNm\"/><PanelItem id=\"PanelItem01\" componentid=\"panBzentyClsfCd\"/></Contents>");
            this.divForm.form.div01.addChild(obj.name, obj);

            obj = new Static("staPicTelNo","45","119","100%","46",null,null,null,null,null,null,this.divForm.form.div01.form);
            obj.set_taborder("7");
            obj.set_text("담당자 전화");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.div01.addChild(obj.name, obj);

            obj = new Edit("edtPicTelNo","45","165","100%","40",null,null,null,null,null,null,this.divForm.form.div01.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.div01.addChild(obj.name, obj);

            obj = new Panel("panPicTelNo","45","119","300","86",null,null,null,null,null,null,this.divForm.form.div01.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPicTelNo\"/><PanelItem id=\"PanelItem01\" componentid=\"edtPicTelNo\"/></Contents>");
            this.divForm.form.div01.addChild(obj.name, obj);

            obj = new Static("staPicMblTelNo","45","165","100%","46",null,null,null,null,null,null,this.divForm.form.div01.form);
            obj.set_taborder("10");
            obj.set_text("담당자 휴대폰");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.div01.addChild(obj.name, obj);

            obj = new Edit("edtPicMblTelNo","540","119","100%","40",null,null,null,null,null,null,this.divForm.form.div01.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.div01.addChild(obj.name, obj);

            obj = new Panel("panPicMblTelNo","45","119","300","86",null,null,null,null,null,null,this.divForm.form.div01.form);
            obj.set_taborder("12");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPicMblTelNo\"/><PanelItem id=\"PanelItem01\" componentid=\"edtPicMblTelNo\"/></Contents>");
            this.divForm.form.div01.addChild(obj.name, obj);

            obj = new Static("staPicEmlAddr","540","119","100%","46",null,null,null,null,null,null,this.divForm.form.div01.form);
            obj.set_taborder("13");
            obj.set_text("담당자 이메일");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.div01.addChild(obj.name, obj);

            obj = new Edit("edtPicEmlAddr","540","119","100%","40",null,null,null,null,null,null,this.divForm.form.div01.form);
            obj.set_taborder("14");
            obj.set_readonly("true");
            this.divForm.form.div01.addChild(obj.name, obj);

            obj = new Panel("panPicEmlAddr","45","165","300","86",null,null,null,null,null,null,this.divForm.form.div01.form);
            obj.set_taborder("15");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPicEmlAddr\"/><PanelItem id=\"PanelItem01\" componentid=\"edtPicEmlAddr\"/></Contents>");
            this.divForm.form.div01.addChild(obj.name, obj);

            obj = new Panel("pan01_00_00","25","119","100.00%","96",null,null,null,null,null,null,this.divForm.form.div01.form);
            obj.set_taborder("16");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panPicTelNo\"/><PanelItem id=\"PanelItem01\" componentid=\"panPicMblTelNo\"/><PanelItem id=\"PanelItem02\" componentid=\"panPicEmlAddr\"/></Contents>");
            this.divForm.form.div01.addChild(obj.name, obj);

            obj = new Static("staPicNm","45","215","100%","46",null,null,null,null,null,null,this.divForm.form.div01.form);
            obj.set_taborder("17");
            obj.set_text("담당자명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.div01.addChild(obj.name, obj);

            obj = new Edit("edtPicNm","45","261","100%","40",null,null,null,null,null,null,this.divForm.form.div01.form);
            obj.set_taborder("18");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.div01.addChild(obj.name, obj);

            obj = new Panel("panPicNm","45","215","300","86",null,null,null,null,null,null,this.divForm.form.div01.form);
            obj.set_taborder("19");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPicNm\"/><PanelItem id=\"PanelItem01\" componentid=\"edtPicNm\"/></Contents>");
            this.divForm.form.div01.addChild(obj.name, obj);

            obj = new Static("staPicJbpsNm","45","261","100%","46",null,null,null,null,null,null,this.divForm.form.div01.form);
            obj.set_taborder("20");
            obj.set_text("담당자 직위(직급)");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.div01.addChild(obj.name, obj);

            obj = new Edit("edtPicJbpsNm","45","301","100%","40",null,null,null,null,null,null,this.divForm.form.div01.form);
            obj.set_taborder("21");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.div01.addChild(obj.name, obj);

            obj = new CheckBox("chkAplcntSmYn","45","347","250","40",null,null,null,null,null,null,this.divForm.form.div01.form);
            obj.set_taborder("22");
            obj.set_text("신청자와 동일");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_readonly("true");
            obj.set_value("N");
            this.divForm.form.div01.addChild(obj.name, obj);

            obj = new Panel("panPicJbpsNm","45","301","100%","40",null,null,null,null,null,null,this.divForm.form.div01.form);
            obj.set_taborder("23");
            obj.set_verticalgap("0");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"edtPicJbpsNm\"/><PanelItem id=\"PanelItem01\" componentid=\"chkAplcntSmYn\"/></Contents>");
            this.divForm.form.div01.addChild(obj.name, obj);

            obj = new Panel("pan01_02_01","45","215","620","86",null,null,null,null,null,null,this.divForm.form.div01.form);
            obj.set_taborder("24");
            obj.set_type("vertical");
            obj.set_flexgrow("2");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPicJbpsNm\"/><PanelItem id=\"PanelItem01\" componentid=\"panPicJbpsNm\"/></Contents>");
            this.divForm.form.div01.addChild(obj.name, obj);

            obj = new Panel("pan01_04","25","215","100.00%","96",null,null,null,null,null,null,this.divForm.form.div01.form);
            obj.set_taborder("25");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panPicNm\"/><PanelItem id=\"PanelItem01\" componentid=\"pan01_02_01\"/></Contents>");
            this.divForm.form.div01.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00","45","322","700","46",null,null,null,null,null,null,this.divForm.form.div01.form);
            obj.set_taborder("26");
            obj.set_text("개인정보활용동의서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divForm.form.div01.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00","780","322","200","46",null,null,null,null,null,null,this.divForm.form.div01.form);
            obj.set_taborder("27");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("");
            this.divForm.form.div01.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00","45","322","100%","46",null,null,null,null,null,null,this.divForm.form.div01.form);
            obj.set_taborder("28");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("6");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00\"/></Contents>");
            this.divForm.form.div01.addChild(obj.name, obj);

            obj = new Grid("grdFile1","45","322","100%","40",null,null,null,null,null,null,this.divForm.form.div01.form);
            obj.set_taborder("29");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:orgnlFileNm\" cssclass=\"CellFile\"/><Cell col=\"1\"/></Band></Format></Formats>");
            this.divForm.form.div01.addChild(obj.name, obj);

            obj = new Panel("panFile00","25","312","100.00%","111",null,null,null,null,null,null,this.divForm.form.div01.form);
            obj.set_taborder("30");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"grdFile1\"/></Contents>");
            this.divForm.form.div01.addChild(obj.name, obj);

            obj = new Panel("sub_tit02","0","0","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("div02","30","13","100%","384",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("27");
            obj.set_text("div02");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staRentRsnPrps","168","-84","19.61%","46",null,null,null,null,null,null,this.divForm.form.div02.form);
            obj.set_taborder("0");
            obj.set_text("임대사유/목적");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.div02.addChild(obj.name, obj);

            obj = new Edit("edtRentRsnPrps","168","-38","100%","40",null,null,null,null,null,null,this.divForm.form.div02.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.div02.addChild(obj.name, obj);

            obj = new Panel("panRentRsnPrps","168","-84","100%","86",null,null,null,null,null,null,this.divForm.form.div02.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staRentRsnPrps\"/><PanelItem id=\"PanelItem01\" componentid=\"edtRentRsnPrps\"/></Contents>");
            this.divForm.form.div02.addChild(obj.name, obj);

            obj = new Panel("pan00_02","148","-84","100%","96",null,null,null,null,null,null,this.divForm.form.div02.form);
            obj.set_taborder("3");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panRentRsnPrps\"/></Contents>");
            this.divForm.form.div02.addChild(obj.name, obj);

            obj = new Static("staBldgNofl","168","108","100%","46",null,null,null,null,null,null,this.divForm.form.div02.form);
            obj.set_taborder("4");
            obj.set_text("층");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.div02.addChild(obj.name, obj);

            obj = new Edit("edtBldgNofl","168","154","100%","40",null,null,null,null,null,null,this.divForm.form.div02.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.div02.addChild(obj.name, obj);

            obj = new Panel("panBldgNofl","168","108","300","86",null,null,null,null,null,null,this.divForm.form.div02.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staBldgNofl\"/><PanelItem id=\"PanelItem01\" componentid=\"edtBldgNofl\"/></Contents>");
            this.divForm.form.div02.addChild(obj.name, obj);

            obj = new Static("staRentAr","168","154","100%","46",null,null,null,null,null,null,this.divForm.form.div02.form);
            obj.set_taborder("7");
            obj.set_text("면적 (m2)");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.div02.addChild(obj.name, obj);

            obj = new Edit("edtRentAr","498","108","100%","40",null,null,null,null,null,null,this.divForm.form.div02.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.div02.addChild(obj.name, obj);

            obj = new Panel("panRentAr","168","108","300","86",null,null,null,null,null,null,this.divForm.form.div02.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staRentAr\"/><PanelItem id=\"PanelItem01\" componentid=\"edtRentAr\"/></Contents>");
            this.divForm.form.div02.addChild(obj.name, obj);

            obj = new Static("staLabel05_02_01","498","108","100%","46",null,null,null,null,null,null,this.divForm.form.div02.form);
            obj.set_taborder("10");
            obj.set_text("입주희망일자");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.div02.addChild(obj.name, obj);

            obj = new Calendar("calMvnHpeYmd","498","108","100%","40",null,null,null,null,null,null,this.divForm.form.div02.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            this.divForm.form.div02.addChild(obj.name, obj);

            obj = new Panel("pan01_03_01","168","154","300","86",null,null,null,null,null,null,this.divForm.form.div02.form);
            obj.set_taborder("12");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_02_01\"/><PanelItem id=\"PanelItem01\" componentid=\"calMvnHpeYmd\"/></Contents>");
            this.divForm.form.div02.addChild(obj.name, obj);

            obj = new Panel("pan01_00_01","148","108","100%","96",null,null,null,null,null,null,this.divForm.form.div02.form);
            obj.set_taborder("13");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panBldgNofl\"/><PanelItem id=\"PanelItem01\" componentid=\"panRentAr\"/><PanelItem id=\"PanelItem02\" componentid=\"pan01_03_01\"/></Contents>");
            this.divForm.form.div02.addChild(obj.name, obj);

            obj = new Static("staUsgCd","168","204","100%","46",null,null,null,null,null,null,this.divForm.form.div02.form);
            obj.set_taborder("14");
            obj.set_text("용도");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.div02.addChild(obj.name, obj);

            obj = new Edit("edtUsgCd","168","250","100%","40",null,null,null,null,null,null,this.divForm.form.div02.form);
            obj.set_taborder("15");
            obj.set_value("");
            obj.getSetter("index").set("-1");
            obj.set_readonly("true");
            obj.set_text("선택하기");
            this.divForm.form.div02.addChild(obj.name, obj);

            obj = new Panel("panUsgCd","168","204","460","86",null,null,null,null,null,null,this.divForm.form.div02.form);
            obj.set_taborder("16");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staUsgCd\"/><PanelItem id=\"PanelItem01\" componentid=\"edtUsgCd\"/></Contents>");
            this.divForm.form.div02.addChild(obj.name, obj);

            obj = new Static("staDtlUsgCd","168","250","100%","46",null,null,null,null,null,null,this.divForm.form.div02.form);
            obj.set_taborder("17");
            obj.set_text("상세용도");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.div02.addChild(obj.name, obj);

            obj = new Edit("edtDtlUsgCd","168","290","100%","40",null,null,null,null,null,null,this.divForm.form.div02.form);
            obj.set_taborder("18");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.div02.addChild(obj.name, obj);

            obj = new Panel("panDtlUsgCd","168","204","460","86",null,null,null,null,null,null,this.divForm.form.div02.form);
            obj.set_taborder("19");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staDtlUsgCd\"/><PanelItem id=\"PanelItem01\" componentid=\"edtDtlUsgCd\"/></Contents>");
            this.divForm.form.div02.addChild(obj.name, obj);

            obj = new Panel("pan01_00_00_00","148","204","100%","96",null,null,null,null,null,null,this.divForm.form.div02.form);
            obj.set_taborder("20");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("20");
            obj.set_type("horizontal");
            obj.set_verticalgap("0");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panUsgCd\"/><PanelItem id=\"PanelItem01\" componentid=\"panDtlUsgCd\"/></Contents>");
            this.divForm.form.div02.addChild(obj.name, obj);

            obj = new Static("staPstnCd","168","12","100%","46",null,null,null,null,null,null,this.divForm.form.div02.form);
            obj.set_taborder("21");
            obj.set_text("위치");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.div02.addChild(obj.name, obj);

            obj = new Edit("edtPstnCd","168","58","100%","40",null,null,null,null,null,null,this.divForm.form.div02.form);
            obj.set_taborder("22");
            obj.set_value("");
            obj.getSetter("index").set("-1");
            obj.set_readonly("true");
            obj.set_text("선택하기");
            this.divForm.form.div02.addChild(obj.name, obj);

            obj = new Panel("panPstnCd","168","58","100%","40",null,null,null,null,null,null,this.divForm.form.div02.form);
            obj.set_taborder("23");
            obj.set_verticalgap("0");
            obj.set_horizontalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"edtPstnCd\"/></Contents>");
            this.divForm.form.div02.addChild(obj.name, obj);

            obj = new Panel("pan01_01_02","168","12","300","86",null,null,null,null,null,null,this.divForm.form.div02.form);
            obj.set_taborder("24");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPstnCd\"/><PanelItem id=\"PanelItem01\" componentid=\"panPstnCd\"/></Contents>");
            this.divForm.form.div02.addChild(obj.name, obj);

            obj = new Static("staBldgCd","168","58","100%","46",null,null,null,null,null,null,this.divForm.form.div02.form);
            obj.set_taborder("25");
            obj.set_text("건물명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.div02.addChild(obj.name, obj);

            obj = new Edit("edtBldgCd","664","12","100%","40",null,null,null,null,null,null,this.divForm.form.div02.form);
            obj.set_taborder("26");
            obj.set_value("");
            obj.getSetter("index").set("-1");
            obj.set_readonly("true");
            obj.set_text("선택하기");
            this.divForm.form.div02.addChild(obj.name, obj);

            obj = new Radio("rdoZoneCd","664","58","280","40",null,null,null,null,null,null,this.divForm.form.div02.form);
            obj.set_taborder("27");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_readonly("true");
            var divForm_form_div02_form_rdoZoneCd_innerdataset = new nexacro.NormalDataset("divForm_form_div02_form_rdoZoneCd_innerdataset", obj);
            divForm_form_div02_form_rdoZoneCd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">A</Col><Col id=\"datacolumn\">A/S</Col></Row><Row><Col id=\"codecolumn\">L</Col><Col id=\"datacolumn\">L/S</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_div02_form_rdoZoneCd_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.div02.addChild(obj.name, obj);

            obj = new Panel("panZoneCd","664","12","280","40",null,null,null,null,null,null,this.divForm.form.div02.form);
            obj.set_taborder("28");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"rdoZoneCd\"/></Contents>");
            this.divForm.form.div02.addChild(obj.name, obj);

            obj = new Panel("panBldgCd","168","58","100%","40",null,null,null,null,null,null,this.divForm.form.div02.form);
            obj.set_taborder("29");
            obj.set_verticalgap("0");
            obj.set_horizontalgap("10");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"edtBldgCd\"/><PanelItem id=\"PanelItem01\" componentid=\"panZoneCd\"/></Contents>");
            this.divForm.form.div02.addChild(obj.name, obj);

            obj = new Panel("pan01_02_02","168","12","620","86",null,null,null,null,null,null,this.divForm.form.div02.form);
            obj.set_taborder("30");
            obj.set_type("vertical");
            obj.set_flexgrow("2");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staBldgCd\"/><PanelItem id=\"PanelItem01\" componentid=\"panBldgCd\"/></Contents>");
            this.divForm.form.div02.addChild(obj.name, obj);

            obj = new Panel("pan01_05","148","12","100%","96",null,null,null,null,null,null,this.divForm.form.div02.form);
            obj.set_taborder("31");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan01_01_02\"/><PanelItem id=\"PanelItem01\" componentid=\"pan01_02_02\"/></Contents>");
            this.divForm.form.div02.addChild(obj.name, obj);

            obj = new Panel("sub_tit03","0","1059","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("14");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("div03","48","26","100%","200",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("28");
            obj.set_text("div03");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.divForm.addChild(obj.name, obj);

            obj = new TextArea("txtDmndMttr","50","50","100%","150",null,null,null,null,null,null,this.divForm.form.div03.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_displaynulltext("내용 입력");
            this.divForm.form.div03.addChild(obj.name, obj);

            obj = new Panel("panDmndMttr","0","0","100.00%","200",null,null,null,null,null,null,this.divForm.form.div03.form);
            obj.set_taborder("1");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("20px 20px 20px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"txtDmndMttr\"/></Contents>");
            this.divForm.form.div03.addChild(obj.name, obj);

            obj = new Static("staSubTitle00","0","0","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","51.00","6","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","1140.00","0","157","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panTitle01","0","0","100.00%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle","0","0","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("5");
            obj.set_text("임차관련 정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00_00","69.00","6","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01","1122.00","0","157","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("7");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panTitle","1041","0","100.00%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle00_00","10","10","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("10");
            obj.set_text("기타 요청사항");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00","61.00","16","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00","1150.00","10","139","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("12");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_00_00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panTitle00","0","10","100.00%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("13");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit04","0","1410","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("15");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle02\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("div04","31","2265","100%","607",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("29");
            obj.set_text("div04");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panFile","0","26","100.00%","67",null,null,null,null,null,null,this.divForm.form.div04.form);
            obj.set_taborder("7");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_01\"/></Contents>");
            this.divForm.form.div04.addChild(obj.name, obj);

            obj = new Static("staLabelAtch04","-551","421","700","46",null,null,null,null,null,null,this.divForm.form.div04.form);
            obj.set_taborder("0");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            obj.set_fittocontents("none");
            this.divForm.form.div04.addChild(obj.name, obj);

            obj = new Panel("panBtnFile03","188","421","200","46",null,null,null,null,null,null,this.divForm.form.div04.form);
            obj.set_taborder("1");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("");
            this.divForm.form.div04.addChild(obj.name, obj);

            obj = new Panel("panTitle00_01_01","-551","421","100%","46",null,null,null,null,null,null,this.divForm.form.div04.form);
            obj.set_taborder("2");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("6");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabelAtch04\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile03\"/></Contents>");
            this.divForm.form.div04.addChild(obj.name, obj);

            obj = new Grid("grdFile3","-551","421","100%","236",null,null,null,null,null,null,this.divForm.form.div04.form);
            obj.set_taborder("3");
            obj.set_binddataset("dsFile3");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"596\"/><Column size=\"0\" band=\"right\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell text=\"증빙자료명\"/><Cell col=\"1\" text=\"첨부파일명\"/><Cell col=\"2\"/></Band><Band id=\"body\"><Cell text=\"bind:cdNm\"/><Cell col=\"1\" text=\"bind:orgnlFileNm\" cssclass=\"CellLink\"/><Cell col=\"2\" cssclass=\"expr:!colId ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\" text=\"expr:!colId ? &quot;파일찾기&quot; : &quot;삭제&quot;\" displaytype=\"none\" edittype=\"button\"/></Band></Format></Formats>");
            this.divForm.form.div04.addChild(obj.name, obj);

            obj = new Panel("panFile04","0","411","100%","236",null,null,null,null,null,null,this.divForm.form.div04.form);
            obj.set_taborder("4");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"grdFile3\"/></Contents>");
            this.divForm.form.div04.addChild(obj.name, obj);

            obj = new Radio("rdoEvdncDataSeCd","-551","36","380","40",null,null,null,null,null,null,this.divForm.form.div04.form);
            obj.set_taborder("5");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_enable("true");
            obj.set_readonly("true");
            var divForm_form_div04_form_rdoEvdncDataSeCd_innerdataset = new nexacro.NormalDataset("divForm_form_div04_form_rdoEvdncDataSeCd_innerdataset", obj);
            divForm_form_div04_form_rdoEvdncDataSeCd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">최초 임차희망업체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">기존 상주업체</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_div04_form_rdoEvdncDataSeCd_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.div04.addChild(obj.name, obj);

            obj = new Panel("panTitle00_01","-551","36","100%","46",null,null,null,null,null,null,this.divForm.form.div04.form);
            obj.set_taborder("6");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("6");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"rdoEvdncDataSeCd\"/></Contents>");
            this.divForm.form.div04.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_01_00","30","570","100%","36",null,null,null,null,null,null,this.divForm.form.div04.form);
            obj.set_taborder("8");
            obj.set_text("미제출 사유");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.div04.addChild(obj.name, obj);

            obj = new Edit("edt","30","605","100%","40",null,null,null,null,null,null,this.divForm.form.div04.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_displaynulltext("상세용도 입력");
            obj.set_text("");
            this.divForm.form.div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_01_00_01_00","30","570","100%","86",null,null,null,null,null,null,this.divForm.form.div04.form);
            obj.set_taborder("10");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt\"/></Contents>");
            this.divForm.form.div04.addChild(obj.name, obj);

            obj = new Panel("sub_tit05","0","570","100%","96",null,null,null,null,null,null,this.divForm.form.div04.form);
            obj.set_taborder("11");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("20");
            obj.set_type("horizontal");
            obj.set_verticalgap("0");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_01_00_01_00\"/></Contents>");
            this.divForm.form.div04.addChild(obj.name, obj);

            obj = new Static("staSubTitle01","0","0","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("16");
            obj.set_text("증빙자료");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00_00_01","51.00","6","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_01","1139.00","0","139","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("18");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_00_01\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panTitle02","0","0","100.00%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("19");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle00_00_01","10","10","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("20");
            obj.set_text("검토의견");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_01","61.00","16","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_01","1150.00","10","139","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("22");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_00_00_00_01\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panTitle00_04","0","10","100.00%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("23");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00_00_01\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit05","0","1059","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("24");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_04\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("div05","522","2440","100%","200",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("30");
            obj.set_text("div00");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.divForm.addChild(obj.name, obj);

            obj = new TextArea("txtRvwOpnn","0","0","100%","150",null,null,null,null,null,null,this.divForm.form.div05.form);
            obj.set_taborder("0");
            obj.set_readonly("false");
            this.divForm.form.div05.addChild(obj.name, obj);

            obj = new Panel("pan00_00_01_01","0","0","100.00%","150",null,null,null,null,null,null,this.divForm.form.div05.form);
            obj.set_taborder("1");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("20px 20px 20px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"txtRvwOpnn\"/></Contents>");
            this.divForm.form.div05.addChild(obj.name, obj);

            obj = new Div("divQuick",null,"divTitle:0","296","245","62",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_QuickMenu");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","17","20","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("0");
            obj.set_text("기본정보");
            obj.set_cssclass("btn_WF_Quick_S");
            obj.set_fittocontents("height");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn02","17.00","btn01:0","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("1");
            obj.set_text("임차관련 정보");
            obj.set_cssclass("btn_WF_Quick");
            obj.set_fittocontents("height");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn03","17.00","110","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("2");
            obj.set_text("기타 요청사항");
            obj.set_cssclass("btn_WF_Quick");
            obj.set_fittocontents("height");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn04","17.00","110","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("3");
            obj.set_text("증빙자료");
            obj.set_cssclass("btn_WF_Quick");
            obj.set_fittocontents("height");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn05","17.00","110","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("4");
            obj.set_text("검토의견");
            obj.set_cssclass("btn_WF_Quick");
            obj.set_fittocontents("height");
            this.divQuick.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv00","1583.00","1049","355","160",null,null,null,null,null,null,this);
            obj.set_visible("true");
            obj.set_cssclass("popdiv_WF_TTPoP");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","90.00","33","100%","38",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("0");
            obj.set_text("[여객터미널 업무용시설] 운영기획팀 032-741-2401");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Label, sta_WF_Txt50014");
            obj.set_fittocontents("none");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Static("Static00_00","90.00","33","100%","38",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("1");
            obj.set_text("[교통 업무용시설] 교통운영팀 032-741-2422");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Label, sta_WF_Txt50014");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","90.00","33","100%","38",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("2");
            obj.set_text("[화물터미널 업무용시설] 물류운영팀 032-741-2288");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Label, sta_WF_Txt50014");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","90.00","33","100%","38",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("3");
            obj.set_text("[부대건물] 재무팀 032-741-2323");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Label, sta_WF_Txt50014");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Div("divBtn",null,"divQuick:0","296","181","62",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_QuickBtnBg");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("btnDeptDsgn","200.00","365","106","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("0");
            obj.set_text("부서지정");
            obj.set_cssclass("btn_WF_No");
            obj.set_fittocontents("width");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("btnDeptDsgnRmv","200.00","365","136","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("1");
            obj.set_text("부서지정해제");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_fittocontents("width");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("btnCfmtn","200.00","365","100","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("2");
            obj.set_text("확정");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_fittocontents("width");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("btnRjct","457.00","30","100","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("4");
            obj.set_text("반려");
            obj.set_cssclass("btn_WF_No");
            obj.set_fittocontents("width");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("btnRtrcn","200.00","365","100","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("3");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_No");
            obj.set_fittocontents("width");
            this.divBtn.addChild(obj.name, obj);

            obj = new RaonkUpload("RaonkUpload","1100","818","500","200",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_DevelopLangage("JAVA");
            obj.set_ExtensionAllowOrLimit("1");
            obj.set_HandlerUrl("http://10.180.1.229:8080/common/uploadDownload.do ");
            obj.set_RunTimes("html5");
            obj.set_ButtonBarView("0");
            obj.set_visible("false");
            obj.set_AllowDuplicationFile("1");
            obj.set_text("");
            obj.set_DisableDeleteConfirm("1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTitle
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.div00.form
            obj = new Layout("default","",0,0,this.divForm.form.div00.form,function(p){});
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            this.divForm.form.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.div01.form
            obj = new Layout("default","",0,0,this.divForm.form.div01.form,function(p){});
            obj.set_type("vertical");
            this.divForm.form.div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.div02.form
            obj = new Layout("default","",0,0,this.divForm.form.div02.form,function(p){});
            obj.set_type("vertical");
            this.divForm.form.div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.div03.form
            obj = new Layout("default","",0,0,this.divForm.form.div03.form,function(p){});
            obj.set_type("vertical");
            this.divForm.form.div03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.div04.form
            obj = new Layout("default","",0,0,this.divForm.form.div04.form,function(p){});
            obj.set_type("vertical");
            this.divForm.form.div04.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.div05.form
            obj = new Layout("default","",0,0,this.divForm.form.div05.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.txtRvwOpnn.set_taborder("0");
                p.txtRvwOpnn.set_readonly("false");
                p.txtRvwOpnn.move("0","0","100%","150",null,null);

                p.pan00_00_01_01.set_taborder("1");
                p.pan00_00_01_01.set_horizontalgap("20");
                p.pan00_00_01_01.set_flexcrossaxiswrapalign("start");
                p.pan00_00_01_01.set_flexwrap("wrap");
                p.pan00_00_01_01.set_fittocontents("height");
                p.pan00_00_01_01.set_verticalgap("0");
                p.pan00_00_01_01.set_spacing("20px 20px 20px 20px");
                p.pan00_00_01_01.set_cssclass("pal_WF_DtlBg");
                p.pan00_00_01_01.move("0","0","100.00%","150",null,null);
            	}
            );
            this.divForm.form.div05.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.div05.form
            obj = new Layout("mobile","",0,0,this.divForm.form.div05.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.div05.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.div00.set_taborder("25");
                p.div00.set_text("div00");
                p.div00.set_fittocontents("height");
                p.div00.move("17","8","100%","96",null,null);

                p.sub_tit01.set_taborder("4");
                p.sub_tit01.set_type("vertical");
                p.sub_tit01.set_fittocontents("height");
                p.sub_tit01.move("0","0","100%","50",null,null);

                p.div01.set_taborder("26");
                p.div01.set_text("div01");
                p.div01.set_fittocontents("height");
                p.div01.set_flexgrow("1");
                p.div01.move("33","25","100%","400",null,null);

                p.sub_tit02.set_taborder("9");
                p.sub_tit02.set_type("vertical");
                p.sub_tit02.set_fittocontents("height");
                p.sub_tit02.move("0","0","100%","50",null,null);

                p.div02.set_taborder("27");
                p.div02.set_text("div02");
                p.div02.set_fittocontents("height");
                p.div02.move("30","13","100%","384",null,null);

                p.sub_tit03.set_taborder("14");
                p.sub_tit03.set_type("vertical");
                p.sub_tit03.set_fittocontents("height");
                p.sub_tit03.move("0","1059","100%","50",null,null);

                p.div03.set_taborder("28");
                p.div03.set_text("div03");
                p.div03.set_fittocontents("height");
                p.div03.set_flexgrow("1");
                p.div03.move("48","26","100%","200",null,null);

                p.staSubTitle00.set_taborder("0");
                p.staSubTitle00.set_text("기본정보");
                p.staSubTitle00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle00.move("0","0","100%","50",null,null);

                p.Button00_00_00.set_taborder("1");
                p.Button00_00_00.set_cssclass("btn_WF_ACMinus");
                p.Button00_00_00.set_visible("false");
                p.Button00_00_00.move("51.00","6","34","34",null,null);

                p.Panel01_00.set_taborder("2");
                p.Panel01_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_00.set_spacing("0px 10px 0px 10px");
                p.Panel01_00.set_horizontalgap("10");
                p.Panel01_00.set_flexcrossaxisalign("center");
                p.Panel01_00.set_flexmainaxisalign("end");
                p.Panel01_00.move("1140.00","0","157","50",null,null);

                p.panTitle01.set_taborder("3");
                p.panTitle01.move("0","0","100.00%","50",null,null);

                p.staSubTitle.set_taborder("5");
                p.staSubTitle.set_text("임차관련 정보");
                p.staSubTitle.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle.move("0","0","100%","50",null,null);

                p.Button00_00.set_taborder("6");
                p.Button00_00.set_cssclass("btn_WF_ACMinus");
                p.Button00_00.set_visible("false");
                p.Button00_00.move("69.00","6","34","34",null,null);

                p.Panel01.set_taborder("7");
                p.Panel01.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01.set_spacing("0px 10px 0px 10px");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.set_flexcrossaxisalign("center");
                p.Panel01.set_flexmainaxisalign("end");
                p.Panel01.move("1122.00","0","157","50",null,null);

                p.panTitle.set_taborder("8");
                p.panTitle.move("1041","0","100.00%","50",null,null);

                p.staSubTitle00_00.set_taborder("10");
                p.staSubTitle00_00.set_text("기타 요청사항");
                p.staSubTitle00_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle00_00.move("10","10","100%","50",null,null);

                p.Button00_00_00_00.set_taborder("11");
                p.Button00_00_00_00.set_cssclass("btn_WF_ACMinus");
                p.Button00_00_00_00.set_visible("false");
                p.Button00_00_00_00.move("61.00","16","34","34",null,null);

                p.Panel01_00_00.set_taborder("12");
                p.Panel01_00_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_00_00.set_spacing("0px 10px 0px 10px");
                p.Panel01_00_00.set_horizontalgap("10");
                p.Panel01_00_00.set_flexcrossaxisalign("center");
                p.Panel01_00_00.set_flexmainaxisalign("end");
                p.Panel01_00_00.move("1150.00","10","139","50",null,null);

                p.panTitle00.set_taborder("13");
                p.panTitle00.move("0","10","100.00%","50",null,null);

                p.sub_tit04.set_taborder("15");
                p.sub_tit04.set_type("vertical");
                p.sub_tit04.set_fittocontents("height");
                p.sub_tit04.move("0","1410","100%","50",null,null);

                p.div04.set_taborder("29");
                p.div04.set_text("div04");
                p.div04.set_fittocontents("height");
                p.div04.move("31","2265","100%","607",null,null);

                p.staSubTitle01.set_taborder("16");
                p.staSubTitle01.set_text("증빙자료");
                p.staSubTitle01.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle01.move("0","0","100%","50",null,null);

                p.Button00_00_01.set_taborder("17");
                p.Button00_00_01.set_cssclass("btn_WF_ACMinus");
                p.Button00_00_01.set_visible("false");
                p.Button00_00_01.move("51.00","6","34","34",null,null);

                p.Panel01_01.set_taborder("18");
                p.Panel01_01.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_01.set_spacing("0px 10px 0px 10px");
                p.Panel01_01.set_horizontalgap("10");
                p.Panel01_01.set_flexcrossaxisalign("center");
                p.Panel01_01.set_flexmainaxisalign("end");
                p.Panel01_01.move("1139.00","0","139","50",null,null);

                p.panTitle02.set_taborder("19");
                p.panTitle02.move("0","0","100.00%","50",null,null);

                p.staSubTitle00_00_01.set_taborder("20");
                p.staSubTitle00_00_01.set_text("검토의견");
                p.staSubTitle00_00_01.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle00_00_01.move("10","10","100%","50",null,null);

                p.Button00_00_00_00_01.set_taborder("21");
                p.Button00_00_00_00_01.set_cssclass("btn_WF_ACMinus");
                p.Button00_00_00_00_01.set_visible("false");
                p.Button00_00_00_00_01.move("61.00","16","34","34",null,null);

                p.Panel01_00_00_01.set_taborder("22");
                p.Panel01_00_00_01.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_00_00_01.set_spacing("0px 10px 0px 10px");
                p.Panel01_00_00_01.set_horizontalgap("10");
                p.Panel01_00_00_01.set_flexcrossaxisalign("center");
                p.Panel01_00_00_01.set_flexmainaxisalign("end");
                p.Panel01_00_00_01.move("1150.00","10","139","50",null,null);

                p.panTitle00_04.set_taborder("23");
                p.panTitle00_04.move("0","10","100.00%","50",null,null);

                p.sub_tit05.set_taborder("24");
                p.sub_tit05.set_type("vertical");
                p.sub_tit05.set_fittocontents("height");
                p.sub_tit05.move("0","1059","100%","50",null,null);

                p.div05.set_taborder("30");
                p.div05.set_text("div00");
                p.div05.set_fittocontents("height");
                p.div05.set_flexgrow("1");
                p.div05.move("522","2440","100%","200",null,null);
            	}
            );
            obj.set_verticalgap("0");
            obj.set_flexmainaxisalign("start");
            obj.set_flexwrap("nowrap");
            obj.set_type("vertical");
            obj.set_spacing("0px 400px 0px 0px");
            this.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form
            obj = new Layout("mobile","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.div00.set_flexgrow("1");
                p.div00.move("17","8","100%","96",null,null);

                p.sub_tit01.set_flexgrow("1");

                p.div01.set_flexgrow("1");

                p.sub_tit02.set_flexgrow("1");

                p.div02.set_flexgrow("1");

                p.sub_tit03.set_flexgrow("1");

                p.div03.set_flexgrow("1");

                p.sub_tit04.set_flexgrow("1");

                p.div04.set_flexgrow("1");

                p.sub_tit05.set_flexgrow("1");

                p.div05.set_flexgrow("1");
            	}
            );
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_verticalgap("0");
            obj.set_flexmainaxisalign("start");
            obj.set_flexwrap("nowrap");
            obj.set_type("vertical");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divQuick.form
            obj = new Layout("default","",0,0,this.divQuick.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btn01.set_taborder("0");
                p.btn01.set_text("기본정보");
                p.btn01.set_cssclass("btn_WF_Quick_S");
                p.btn01.set_fittocontents("height");
                p.btn01.move("17","20","100%","45",null,null);

                p.btn02.set_taborder("1");
                p.btn02.set_text("임차관련 정보");
                p.btn02.set_cssclass("btn_WF_Quick");
                p.btn02.set_fittocontents("height");
                p.btn02.move("17.00","btn01:0","100%","45",null,null);

                p.btn03.set_taborder("2");
                p.btn03.set_text("기타 요청사항");
                p.btn03.set_cssclass("btn_WF_Quick");
                p.btn03.set_fittocontents("height");
                p.btn03.move("17.00","110","100%","45",null,null);

                p.btn04.set_taborder("3");
                p.btn04.set_text("증빙자료");
                p.btn04.set_cssclass("btn_WF_Quick");
                p.btn04.set_fittocontents("height");
                p.btn04.move("17.00","110","100%","45",null,null);

                p.btn05.set_taborder("4");
                p.btn05.set_text("검토의견");
                p.btn05.set_cssclass("btn_WF_Quick");
                p.btn05.set_fittocontents("height");
                p.btn05.move("17.00","110","100%","45",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_spacing("20px 17px  0px 17px");
            this.divQuick.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divQuick.form
            obj = new Layout("mobile","",0,0,this.divQuick.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btn01.set_cssclass("btn_WF_QuickM_S");
                p.btn01.set_fittocontents("width");

                p.btn02.set_fittocontents("width");
                p.btn02.set_cssclass("btn_WF_QuickM");

                p.btn03.set_fittocontents("width");
                p.btn03.set_cssclass("btn_WF_QuickM");

                p.btn04.set_fittocontents("width");
                p.btn04.set_cssclass("btn_WF_QuickM");

                p.btn05.set_fittocontents("width");
            	}
            );
            obj.set_type("horizontal");
            obj.set_spacing("0px 0px 0px 0px");
            this.divQuick.form.addLayout(obj.name, obj);
            //-- Default Layout : this.PopupDiv00.form
            obj = new Layout("default","",0,0,this.PopupDiv00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("[여객터미널 업무용시설] 운영기획팀 032-741-2401");
                p.Static00.set_usedecorate("true");
                p.Static00.set_cssclass("sta_WF_Label, sta_WF_Txt50014");
                p.Static00.set_fittocontents("none");
                p.Static00.move("90.00","33","100%","38",null,null);

                p.Static00_00.set_taborder("1");
                p.Static00_00.set_text("[교통 업무용시설] 교통운영팀 032-741-2422");
                p.Static00_00.set_usedecorate("true");
                p.Static00_00.set_cssclass("sta_WF_Label, sta_WF_Txt50014");
                p.Static00_00.move("90.00","33","100%","38",null,null);

                p.Static00_00_00.set_taborder("2");
                p.Static00_00_00.set_text("[화물터미널 업무용시설] 물류운영팀 032-741-2288");
                p.Static00_00_00.set_usedecorate("true");
                p.Static00_00_00.set_cssclass("sta_WF_Label, sta_WF_Txt50014");
                p.Static00_00_00.move("90.00","33","100%","38",null,null);

                p.Static00_00_00_00.set_taborder("3");
                p.Static00_00_00_00.set_text("[부대건물] 재무팀 032-741-2323");
                p.Static00_00_00_00.set_usedecorate("true");
                p.Static00_00_00_00.set_cssclass("sta_WF_Label, sta_WF_Txt50014");
                p.Static00_00_00_00.move("90.00","33","100%","38",null,null);
            	}
            );
            obj.set_spacing("0px 0px 0px 10px");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_type("vertical");
            this.PopupDiv00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.PopupDiv00.form
            obj = new Layout("mobile","",0,0,this.PopupDiv00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_spacing("0px 0px 0px 10px");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_type("vertical");
            this.PopupDiv00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divBtn.form
            obj = new Layout("default","",0,0,this.divBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnDeptDsgn.set_taborder("0");
                p.btnDeptDsgn.set_text("부서지정");
                p.btnDeptDsgn.set_cssclass("btn_WF_No");
                p.btnDeptDsgn.set_fittocontents("width");
                p.btnDeptDsgn.move("200.00","365","106","40",null,null);

                p.btnDeptDsgnRmv.set_taborder("1");
                p.btnDeptDsgnRmv.set_text("부서지정해제");
                p.btnDeptDsgnRmv.set_cssclass("btn_WF_Yes");
                p.btnDeptDsgnRmv.set_fittocontents("width");
                p.btnDeptDsgnRmv.move("200.00","365","136","40",null,null);

                p.btnCfmtn.set_taborder("2");
                p.btnCfmtn.set_text("확정");
                p.btnCfmtn.set_cssclass("btn_WF_Yes");
                p.btnCfmtn.set_fittocontents("width");
                p.btnCfmtn.move("200.00","365","100","40",null,null);

                p.btnRjct.set_taborder("4");
                p.btnRjct.set_text("반려");
                p.btnRjct.set_cssclass("btn_WF_No");
                p.btnRjct.set_fittocontents("width");
                p.btnRjct.move("457.00","30","100","40",null,null);

                p.btnRtrcn.set_taborder("3");
                p.btnRtrcn.set_text("취소");
                p.btnRtrcn.set_cssclass("btn_WF_No");
                p.btnRtrcn.set_fittocontents("width");
                p.btnRtrcn.move("200.00","365","100","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_spacing("20px 10px");
            obj.set_verticalgap("10");
            obj.set_flexwrap("wrap");
            this.divBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divBtn.form
            obj = new Layout("mobile","",0,0,this.divBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_flexmainaxisalign("start");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_verticalgap("0");
            obj.set_flexwrap("nowrap");
            obj.set_spacing("0px 10px");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            this.divBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1480,2250,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("임차희망서 접수상세(처리자)");

                p.divTitle.set_taborder("1");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.move("0","0",null,"50","60",null);

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_cssclass("div_WF_QuickFrBg");
                p.divForm.set_fittocontents("height");
                p.divForm.move("0","70",null,"2348","60",null);

                p.divQuick.set_taborder("2");
                p.divQuick.set_text("div00");
                p.divQuick.set_cssclass("div_WF_QuickMenu");
                p.divQuick.set_fittocontents("height");
                p.divQuick.move(null,"divTitle:0","296","245","62",null);

                p.PopupDiv00.set_visible("true");
                p.PopupDiv00.set_cssclass("popdiv_WF_TTPoP");
                p.PopupDiv00.move("1583.00","1049","355","160",null,null);

                p.divBtn.set_taborder("1");
                p.divBtn.set_text("Div00");
                p.divBtn.set_cssclass("div_WF_QuickBtnBg");
                p.divBtn.set_fittocontents("height");
                p.divBtn.set_flexgrow("1");
                p.divBtn.move(null,"divQuick:0","296","181","62",null);

                p.RaonkUpload.set_taborder("4");
                p.RaonkUpload.set_DevelopLangage("JAVA");
                p.RaonkUpload.set_ExtensionAllowOrLimit("1");
                p.RaonkUpload.set_HandlerUrl("http://10.180.1.229:8080/common/uploadDownload.do ");
                p.RaonkUpload.set_RunTimes("html5");
                p.RaonkUpload.set_ButtonBarView("0");
                p.RaonkUpload.set_visible("false");
                p.RaonkUpload.set_AllowDuplicationFile("1");
                p.RaonkUpload.set_text("");
                p.RaonkUpload.set_DisableDeleteConfirm("1");
                p.RaonkUpload.move("1100","818","500","200",null,null);
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
                p.divForm.set_fittocontents("none");
                p.divForm.move("0","150",null,null,"0","80");

                p.divBtn.set_cssclass("div_WF_QuickBtnBgM");
                p.divBtn.set_fittocontents("none");
                p.divBtn.set_text("Div00");
                p.divBtn.move("0",null,null,"80","0","0");

                p.divTitle.set_visible("false");
                p.divTitle.move("0","0",null,"50","0",null);

                p.divQuick.set_cssclass("div_WF_QuickMenuM");
                p.divQuick.move("20","70",null,"60","20",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            obj.set_type("default");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.div05.form.txtRvwOpnn","value","dsGet","rvwOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.div02.form.rdoZoneCd","value","dsGet","zoneCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.div04.form.rdoEvdncDataSeCd","value","dsGet","evdncDataSeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.div00.form.edtPrcsDeptNm","value","dsGet","prcsDeptNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.div00.form.edtRcptNo","value","dsGet","rcptNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.div00.form.edtPrgsSttsNm","value","dsGet","prgrsSttsNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divForm.form.div03.form.txtDmndMttr","value","dsGet","etcDmndMttr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.div01.form.edtHirerNm","value","dsGet","bzentyNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divForm.form.div01.form.edtBzentyClsfCd","value","dsGet","bzentyClsfNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divForm.form.div01.form.edtPicTelNo","value","dsGet","picTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divForm.form.div01.form.edtPicMblTelNo","value","dsGet","picMblTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divForm.form.div01.form.edtPicEmlAddr","value","dsGet","picEmlAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divForm.form.div01.form.edtPicNm","value","dsGet","picNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divForm.form.div01.form.edtPicJbpsNm","value","dsGet","picJbpsNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divForm.form.div01.form.chkAplcntSmYn","value","dsGet","aplcntSmYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divForm.form.div02.form.edtRentRsnPrps","value","dsGet","rentRsnPrps");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divForm.form.div02.form.edtBldgNofl","value","dsGet","bldgNofl");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divForm.form.div02.form.edtRentAr","value","dsGet","rntar");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divForm.form.div02.form.calMvnHpeYmd","value","dsGet","mvnHpeYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divForm.form.div02.form.edtUsgCd","value","dsGet","usgNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divForm.form.div02.form.edtDtlUsgCd","value","dsGet","dtlUsgNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divForm.form.div02.form.edtPstnCd","value","dsGet","pstnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divForm.form.div02.form.edtBldgCd","value","dsGet","bldgNm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
        };
        
        // User Script
        this.addIncludeScript("REN002M03.xfdl","xjs::TaskCom.xjs");
        this.registerScript("REN002M03.xfdl", function() {
        /**
        *  인천공항 원스톱 입주자서비스 프로젝트
        *  @FileName 	REN002M03.xfdl
        *  @Creator 	(주)이루온
        *  @CreateDate 	2024/10/07
        *  @Desction    임차희망서 접수 상세
        ******************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/10/07			이루온h						최초생성
        *******************************************************************************
        */

        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;  // 업무공통
        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        this.param;
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수

        	// 전달받은 파라메터 팝업창과 페이지오픈으로 파라메터 불러오는 방식이 달라짐
        	if(this.opener)
        	{
        		// 상세화면 타이틀 폭 설정 변경
        		this.divTitle.height = 0;

        		this.param = {
        			"status" : this.getOwnerFrame().status
        			,"hireLohNo" : this.getOwnerFrame().hireLohNo
        		}
        	} else
        	{
        		this.param = this.getOwnerFrame().form.fvObjArgs;
        	}

        	if (this.param != null && this.param.hireLohNo != null && this.param.hireLohNo != '') {
        		// 페이지 로딩시 처음에 실행 되는 함수
        		this.fnInit();

        		// 조회
        		this.cfnSearch();

        		//초기포커스 지정
        		//this.divForm.form.edt00_02.setFocus();
        	} else {
        		// 임차희망서번호가 없습니다.
        		this.gfnAlertMsg("msg", "REN_004");
        	}
        };

        // 상세 페이지 옆 버튼 부분 플로팅 스크롤
        this.form_onvscroll = function(obj,e)
        {
        	if(this.objApp.screenid == "Desktop_screen") {
        		this.divQuick.top = e.pos+50;
        		this.divBtn.top = "divQuick:0";
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	//this.cfnComCdLoad({dsCboSttsCd:"REN0001:A", dsCbopBzentyClsfCd:"TIDREQTYPE:A"});
        };


        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        // 조회
        this.cfnSearch = function ()
        {
        	this.dsSearch.setColumn(0,"hireLohNo", this.param.hireLohNo);
        	this.dsSearch.setColumn(0,"grp1CdId", "REN002M03");
        	this.selectTransaction();
        };

        // 닫기
        this.cfnClose = function (){};

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        // 상세 조회
        this.selectTransaction = function()
        {
        	var strSvcId    = "select";
        	var strSvcUrl   = "ren/frs/selectHireLoh.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsGet=dsGet dsAtflList=dsAtflList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

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
        		case "combo":
        			break;

        		// 상세조회
        		case "select":
        			this.divBtn.form.btnDeptDsgn.visible = false;		//부서지정
        			this.divBtn.form.btnDeptDsgnRmv.visible = false;	//부서지정해제
        			this.divBtn.form.btnCfmtn.visible = false;			//확정
        			this.divBtn.form.btnRjct.visible = false;			//반려
        			this.divBtn.form.btnRtrcn.visible = true;			//취소
        			this.divForm.form.div05.form.txtRvwOpnn.readonly = true;

        			// 진행상태코드: 11.제출 12.부서지정 13.부서지정해제 14.확정 15.반려
        			if (this.dsGet.getColumn(0,"prgrsSttsCd") == "11" || this.dsGet.getColumn(0,"prgrsSttsCd") == "13") {
        				this.divBtn.form.btnDeptDsgn.visible = true;	//부서지정
        				this.divBtn.form.btnRjct.visible = true;		//반려
        				this.divForm.form.div05.form.txtRvwOpnn.readonly = false;

        			} else if (this.dsGet.getColumn(0,"prgrsSttsCd") == "12") {
        				this.divBtn.form.btnDeptDsgnRmv.visible = true;	//부서지정해제
        				this.divBtn.form.btnCfmtn.visible = true;		//확정
        				this.divBtn.form.btnRjct.visible = true;		//반려
        				this.divForm.form.div05.form.txtRvwOpnn.readonly = false;
        			}

        			// 건물코드: A1A01.제1여객터미널 A2A01.제2여객터미널 이면 위치 표시
        			if (this.dsGet.getColumn(0,"bldgCd") == "A1A01" || this.dsGet.getColumn(0,"bldgCd") == "A2A01") {
        				this.divForm.form.div02.form.rdoZoneCd.visible	= true;
        			} else {
        				this.divForm.form.div02.form.rdoZoneCd.visible	= false;
        			}

        			// 첨부파일 설정
        			this.cfnFileSet();

        			break;

        		case "updateHireLohDeptDsgn":			//부서지정
        		case "updateHireLohDeptDsgnRmv":		//부서지정해제
        		case "updateHireLohRcptCfmtn":			//확정
        		case "updateHireLohRcptRjct":			//반려
        			this.gfnAlertMsg("alert_msg", this.objApp.getVariable("gvRetMsg"), null, "msgCallback");

        			break;
        	}
        };


        // 첨부파일 설정
        this.cfnFileSet = function()
        {
        	var vBZENTY_CLSF_CD = "";
        	if (this.dsGet.getColumn(0,"bzentyClsfCd") == "BZENTY_CLSF_CD001") {			// 공항운영그룹
        		vBZENTY_CLSF_CD = "B";
        	} else if (this.dsGet.getColumn(0,"bzentyClsfCd") == "BZENTY_CLSF_CD002") {	// 항공사그룹
        		vBZENTY_CLSF_CD = "C";
        	} else if (this.dsGet.getColumn(0,"bzentyClsfCd") == "BZENTY_CLSF_CD003") {	// 조업사 정비업체
        		vBZENTY_CLSF_CD = "D";
        	} else if (this.dsGet.getColumn(0,"bzentyClsfCd") == "BZENTY_CLSF_CD004") {	// 여행사
        		vBZENTY_CLSF_CD = "E";
        	} else if (this.dsGet.getColumn(0,"bzentyClsfCd") == "BZENTY_CLSF_CD005") {	// 공공그룹
        		vBZENTY_CLSF_CD = "F";
        	} else if (this.dsGet.getColumn(0,"bzentyClsfCd") == "BZENTY_CLSF_CD006") {	// 상업그룹
        		vBZENTY_CLSF_CD = "G";
        	} else if (this.dsGet.getColumn(0,"bzentyClsfCd") == "BZENTY_CLSF_CD007") {	// 기타
        		vBZENTY_CLSF_CD = "H";
        	}

        	this.dsFile1.clearData();
        	this.dsFile3.clearData();
        	for (i = 0; i<this.dsAtflList.rowcount; i++) {
        		// 임차업무 담당자 개인정보수집 및 이용동의서
        		if (this.dsAtflList.getColumn(i,"grp2CdId") == "A") {
        			this.dsFile1.addRow();
        			this.dsFile1.copyRow(this.dsFile1.rowposition,this.dsAtflList,i);
        		}

        		// 첨부파일
        		if (this.dsAtflList.getColumn(i,"grp1CdId") == 'REN002M03' &&
        		   (this.dsAtflList.getColumn(i,"grp2CdId") == vBZENTY_CLSF_CD || this.dsAtflList.getColumn(i,"grp2CdId") == 'J')) {
        			this.dsFile3.addRow();
        			this.dsFile3.copyRow(this.dsFile3.rowposition,this.dsAtflList,i);
        		}
        	};

        	console.log("this.dsFile1==2==>"+this.dsFile1.saveXML());
        	console.log("this.dsFile3==2==>"+this.dsFile3.saveXML());
        	//this.dsFile1.filter("grp1CdId ==  'REN008M01' && (grp2CdId == '" + vBZENTY_CLSF_CD + "' || grp2CdId == 'J') ");

        	// 데이터 조회 후 파일리스트에 셋팅
        	this.gfnDownloadSetting(this.RaonkUpload, this.dsFile1);
        	this.gfnDownloadSetting(this.RaonkUpload, this.dsFile3);
        }


        //얼럿창 콜백 함수
        this.msgCallback = function(sPopupId, sRtn) {

        	var oRtn 		= JSON.parse(sRtn);

        	// 부서지정
        	if (sPopupId == "btnDeptDsgn_confirm" && oRtn.result == "Y") {

        		this.dsGet.updatecontrol = false;
        		trace(">>btnDeptDsgn_confirm<<");
        		trace(">>getRowType1<<"+this.dsGet.getRowType(0));
        		this.dsGet.setRowType(0, this.dsGet.ROWTYPE_UPDATE);
        		this.dsGet.updatecontrol = true;
        		trace(">>getRowType2<<"+this.dsGet.getRowType(0));
        		trace(">>btnDeptDsgn_confirm<<"+this.dsGet);

        		var strSvcId    = "updateHireLohDeptDsgn";
        		var strSvcUrl   = "ren/frs/updateHireLohDeptDsgn.do";
        		var inData      = "dsList=dsGet:A";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";
        		var isAsync   	= false;

        		this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        	// 부서지정해제
        	} else if (sPopupId == "btnDeptDsgnRmv_confirm" && oRtn.result == "Y") {

        		var strSvcId    = "updateHireLohDeptDsgnRmv";
        		var strSvcUrl   = "ren/frs/updateHireLohDeptDsgnRmv.do";
        		var inData      = "dsList=dsGet:A";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";
        		var isAsync   	= false;

        		this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        	// 확정
        	} else if (sPopupId == "btnCfmtn_confirm" && oRtn.result == "Y") {

        		var strSvcId    = "updateHireLohRcptCfmtn";
        		var strSvcUrl   = "ren/frs/updateHireLohRcptCfmtn.do";
        		var inData      = "dsGet=dsGet:A";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";
        		var isAsync   	= false;

        		this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        	// 반려
        	} else if (sPopupId == "btnRjct_confirm" && oRtn.result == "Y") {

        		var strSvcId    = "updateHireLohRcptRjct";
        		var strSvcUrl   = "ren/frs/updateHireLohRcptRjct.do";
        		var inData      = "dsGet=dsGet:A";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";
        		var isAsync   	= false;

        		this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        	// 부서지정,해제,확정 후 얼릿 메시지
        	} else if (sPopupId == "alert_msg") {
        		// 목록으로 이동
        		var cMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        		this.gfnCloseMenu(cMenuId);
        		this._gfnOpenMenu(cMenuId.substring(0,14),"",true);
        	}
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/

        // 부서지정 버튼 클릭시
        this.divBtn_btnDeptDsgn_onclick = function(obj,e)
        {
        	 this.gfnConfirmMsg("btnDeptDsgn_confirm", "REN_006", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        };

        // 부서지정해제 버튼 클릭시
        this.divBtn_btnDeptDsgnRmv_onclick = function(obj,e)
        {
         	this.gfnConfirmMsg("btnDeptDsgnRmv_confirm", "REN_007", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        };

        // 확정 버튼 클릭시
        this.divBtn_btnCfmtn_onclick = function(obj,e)
        {
         	this.gfnConfirmMsg("btnCfmtn_confirm", "REN_008", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        };

        // 반려 버튼 클릭시
        this.divBtn_btnRjct_onclick = function(obj,e)
        {
        	 if (!this.gfnIsNull(this.dsGet.getColumn(0,"rvwOpnn"))) {
        		this.gfnConfirmMsg("btnRjct_confirm", "REN_009", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        	} else {
        		this.gfnAlertMsg("msg", "MSG_009", ["검토의견 \n"]);
         		return;
        	}
        };

        // 취소 버튼 클릭시
        this.divBtn_btnRtrcn_onclick = function(obj,e)
        {
        	if(this.objApp.screenid == "Desktop_screen") {
        		var cMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        		this.gfnCloseMenu(cMenuId);
        		this._gfnOpenMenu(cMenuId.substring(0,14),"",true);
        	} else {
        		this.close();
        	}
        };

        // 퀵메뉴 클릭시
        this.divQuickMenu_onclick = function(obj,e)
        {
        	if (obj.name == "btn01") {
        		this.divForm.form.sub_tit01.setFocus();	// 임차임정보
        	} if (obj.name == "btn02") {
        		this.divForm.form.sub_tit02.setFocus();	// 임차관련정보
        	} if (obj.name == "btn03") {
        		this.divForm.form.sub_tit03.setFocus();	// 기타요청사항
        	} if (obj.name == "btn04") {
        		this.divForm.form.sub_tit04.setFocus();	// 증빙자료
        	} if (obj.name == "btn05") {
        		this.divForm.form.sub_tit05.setFocus();	// 검토의견
        	}
        };


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
        };

        // 파일 업로드 완료 이벤트
        this.RaonkUpload_RAONKUPLOAD_UploadComplete = function(obj, paramObj)
        {
        	var allListArray = this.RaonkUpload.GetListInfo("json");
        	// 파일 업로드 후 첨부파일관리번호를 얻기 위한 함수
        	this.gfnUploadComplete("uploadComplete", allListArray, "dsFile", "fnCallback");
        };


        // 임차업무 담당자 개인정보수집 및 이용동의서
        this.divForm_Div03_grdFile1_oncellclick = function(obj,e)
        {
        	// 데이터의 첨부파일 관리번호 입력 컬럼명
        	if (e.col == 0) {
        		// 파일명을 더블클릭 시 다운로드
        		this.gfnDownloadFile(this.RaonkUpload, this.dsFile1, e);
        	}
        };

        // 첨부파일
        this.divForm_Div05_grdFile3_oncellclick = function(obj,e)
        {
        	// 데이터의 첨부파일 관리번호 입력 컬럼명
        	if (e.col == 1) {
        		// 파일명을 더블클릭 시 다운로드
        		this.gfnDownloadFile(this.RaonkUpload, this.dsFile3, e);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onvscroll",this.form_onvscroll,this);
            this.divForm.form.div01.form.staPicTelNo.addEventHandler("onclick",this.divForm_staLabel05_00_onclick,this);
            this.divForm.form.div01.form.staPicMblTelNo.addEventHandler("onclick",this.divForm_staLabel05_01_onclick,this);
            this.divForm.form.div01.form.staPicNm.addEventHandler("onclick",this.divForm_staLabel05_00_onclick,this);
            this.divForm.form.div01.form.staPicJbpsNm.addEventHandler("onclick",this.divForm_staLabel05_01_onclick,this);
            this.divForm.form.div01.form.edtPicJbpsNm.addEventHandler("onchanged",this.edt00_00_00_00_00_onchanged,this);
            this.divForm.form.div01.form.grdFile1.addEventHandler("oncellclick",this.divForm_Div03_grdFile1_oncellclick,this);
            this.divForm.form.div02.form.edtRentRsnPrps.addEventHandler("onchanged",this.edt00_02_onchanged,this);
            this.divForm.form.div02.form.staBldgNofl.addEventHandler("onclick",this.divForm_staLabel05_00_onclick,this);
            this.divForm.form.div02.form.staRentAr.addEventHandler("onclick",this.divForm_staLabel05_01_onclick,this);
            this.divForm.form.div02.form.staPstnCd.addEventHandler("onclick",this.divForm_staLabel05_00_onclick,this);
            this.divForm.form.div02.form.staBldgCd.addEventHandler("onclick",this.divForm_staLabel05_01_onclick,this);
            this.divForm.form.div02.form.rdoZoneCd.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
            this.divForm.form.div03.form.txtDmndMttr.addEventHandler("onchanged",this.divForm_div03_txtDmndMttr_onchanged,this);
            this.divForm.form.staSubTitle00_00.addEventHandler("onclick",this.divForm_staSubTitle00_00_onclick,this);
            this.divForm.form.div04.form.grdFile3.addEventHandler("oncellclick",this.divForm_Div05_grdFile3_oncellclick,this);
            this.divForm.form.div04.form.rdoEvdncDataSeCd.addEventHandler("onitemchanged",this.divForm_rdoEvdncDataSeCd_onitemchanged,this);
            this.divForm.form.div04.form.staLabel03_00_00_01_00.addEventHandler("onclick",this.divForm_div04_staLabel03_00_00_01_00_onclick,this);
            this.divQuick.form.btn01.addEventHandler("onclick",this.divQuickMenu_onclick,this);
            this.divQuick.form.btn02.addEventHandler("onclick",this.divQuickMenu_onclick,this);
            this.divQuick.form.btn03.addEventHandler("onclick",this.divQuickMenu_onclick,this);
            this.divQuick.form.btn04.addEventHandler("onclick",this.divQuickMenu_onclick,this);
            this.divQuick.form.btn05.addEventHandler("onclick",this.divQuickMenu_onclick,this);
            this.PopupDiv00.form.Static00.addEventHandler("onclick",this.PopupDiv00_Static00_onclick,this);
            this.PopupDiv00.form.Static00_00.addEventHandler("onclick",this.PopupDiv00_Static00_onclick,this);
            this.PopupDiv00.form.Static00_00_00.addEventHandler("onclick",this.PopupDiv00_Static00_onclick,this);
            this.PopupDiv00.form.Static00_00_00_00.addEventHandler("onclick",this.PopupDiv00_Static00_onclick,this);
            this.divBtn.form.btnDeptDsgn.addEventHandler("onclick",this.divBtn_btnDeptDsgn_onclick,this);
            this.divBtn.form.btnDeptDsgnRmv.addEventHandler("onclick",this.divBtn_btnDeptDsgnRmv_onclick,this);
            this.divBtn.form.btnCfmtn.addEventHandler("onclick",this.divBtn_btnCfmtn_onclick,this);
            this.divBtn.form.btnRjct.addEventHandler("onclick",this.divBtn_btnRjct_onclick,this);
            this.divBtn.form.btnRtrcn.addEventHandler("onclick",this.divBtn_btnRtrcn_onclick,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterAddFile",this.RaonkUpload_RAONKUPLOAD_AfterAddFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_CreationComplete",this.RaonkUpload_RAONKUPLOAD_CreationComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_UploadComplete",this.RaonkUpload_RAONKUPLOAD_UploadComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_OnError",this.RaonkUpload_RAONKUPLOAD_OnError,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_BeforeAddFile",this.RaonkUpload_RAONKUPLOAD_BeforeAddFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterAddAllFile",this.RaonkUpload_RAONKUPLOAD_AfterAddAllFile,this);
            this.dsFile1.addEventHandler("onload",this.dsAtfl_onload,this);
            this.dsFile3.addEventHandler("onload",this.dsAtfl_onload,this);
        };
        this.loadIncludeScript("REN002M03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
