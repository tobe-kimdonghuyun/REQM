(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("REN002M01");
            this.set_titletext("임차희망서 제출");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,2100);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"hireLohNo\" type=\"STRING\" size=\"256\"/><Column id=\"grp1CdId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"hireLohNo\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGet", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"hireLohNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"rcptNo\" type=\"STRING\" size=\"256\"/><Column id=\"prgrsSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyNm\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyClsfCd\" type=\"STRING\" size=\"256\"/><Column id=\"picDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"picNm\" type=\"STRING\" size=\"256\"/><Column id=\"picJbpsNm\" type=\"STRING\" size=\"256\"/><Column id=\"picTelno\" type=\"STRING\" size=\"256\"/><Column id=\"picMblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"picEmlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"picFxno\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntSmYn\" type=\"STRING\" size=\"256\"/><Column id=\"rentRsnPrps\" type=\"STRING\" size=\"256\"/><Column id=\"pstnCd\" type=\"STRING\" size=\"256\"/><Column id=\"bldgCd\" type=\"STRING\" size=\"256\"/><Column id=\"bldgNofl\" type=\"STRING\" size=\"256\"/><Column id=\"zoneCd\" type=\"STRING\" size=\"256\"/><Column id=\"rntar\" type=\"STRING\" size=\"256\"/><Column id=\"usgCd\" type=\"STRING\" size=\"256\"/><Column id=\"dtlUsgCd\" type=\"STRING\" size=\"256\"/><Column id=\"mvnHpeYmd\" type=\"STRING\" size=\"256\"/><Column id=\"evdncDataSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"etcDmndMttr\" type=\"STRING\" size=\"256\"/><Column id=\"sbmsnYn\" type=\"STRING\" size=\"256\"/><Column id=\"sbmsnDt\" type=\"STRING\" size=\"256\"/><Column id=\"prsnrId\" type=\"STRING\" size=\"256\"/><Column id=\"rvwOpnn\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboBzentyClsfCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboPstnCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboBldgCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboUsgCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboDtlUsgCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboPrgrsSttsCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAtchRslt", this);
            obj._setContents("<ColumnInfo><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAtflArtclList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAtflList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"grp1CdId\" type=\"STRING\" size=\"256\"/><Column id=\"grp1CdNm\" type=\"STRING\" size=\"0\"/><Column id=\"grp2CdId\" type=\"STRING\" size=\"256\"/><Column id=\"grp2CdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"hireLohNo\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId\" type=\"STRING\" size=\"256\"/><Column id=\"atflCd\" type=\"STRING\" size=\"256\"/><Column id=\"natchRsn\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bsnsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId2\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"fileExtn\" type=\"STRING\" size=\"256\"/><Column id=\"strgFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTerm\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAtflSave", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"grp1CdId\" type=\"STRING\" size=\"256\"/><Column id=\"grp1CdNm\" type=\"STRING\" size=\"256\"/><Column id=\"grp2CdId\" type=\"STRING\" size=\"256\"/><Column id=\"grp2CdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"hireLohNo\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId\" type=\"STRING\" size=\"256\"/><Column id=\"atflCd\" type=\"STRING\" size=\"256\"/><Column id=\"natchRsn\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bsnsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId2\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"fileExtn\" type=\"STRING\" size=\"256\"/><Column id=\"strgFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTerm\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile", this);
            obj.set_useclientlayout("true");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"grp1CdId\" type=\"STRING\" size=\"256\"/><Column id=\"grp1CdNm\" type=\"STRING\" size=\"256\"/><Column id=\"grp2CdId\" type=\"STRING\" size=\"256\"/><Column id=\"grp2CdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"hireLohNo\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId\" type=\"STRING\" size=\"256\"/><Column id=\"atflCd\" type=\"STRING\" size=\"256\"/><Column id=\"natchRsn\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bsnsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId2\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"fileExtn\" type=\"STRING\" size=\"256\"/><Column id=\"strgFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTerm\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"grp1CdId\" type=\"STRING\" size=\"256\"/><Column id=\"grp1CdNm\" type=\"STRING\" size=\"256\"/><Column id=\"grp2CdId\" type=\"STRING\" size=\"256\"/><Column id=\"grp2CdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"hireLohNo\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId\" type=\"STRING\" size=\"256\"/><Column id=\"atflCd\" type=\"STRING\" size=\"256\"/><Column id=\"natchRsn\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bsnsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId2\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"fileExtn\" type=\"STRING\" size=\"256\"/><Column id=\"strgFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTerm\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile99", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"grp1CdId\" type=\"STRING\" size=\"256\"/><Column id=\"grp1CdNm\" type=\"STRING\" size=\"256\"/><Column id=\"grp2CdId\" type=\"STRING\" size=\"256\"/><Column id=\"grp2CdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"hireLoiNo\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId\" type=\"STRING\" size=\"256\"/><Column id=\"atflCd\" type=\"STRING\" size=\"256\"/><Column id=\"natchRsn\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bsnsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId2\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"fileExtn\" type=\"STRING\" size=\"256\"/><Column id=\"strgFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTerm\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divForm","0","divTitle:20",null,"2000","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_cssclass("div_WF_QuickFrBg");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","0","100%","110",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_Bg");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","0","0","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("담당부서");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtPicDeptNm","0","46","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_displaynulltext("업체명 입력");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","20.00","0","300","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtPicDeptNm\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_01","10.00","10","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("3");
            obj.set_text("접수번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtRcptNo","10","56","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","520","0","300","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01\"/><PanelItem id=\"PanelItem03\" componentid=\"edtRcptNo\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_02","0","0","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("6");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_02","20","86","300","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("7");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_02\"/><PanelItem id=\"PanelItem02\" componentid=\"cboPrgrsSttsCd\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00","0","0","100%","105",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("8");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 0px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_01\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel00_02\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Combo("cboPrgrsSttsCd","851","24","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("9");
            obj.set_innerdataset("dsCboPrgrsSttsCd");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_readonly("true");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staSubTitle01","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button01_00","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 20px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button01_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit01","1630","674","100%","70",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("4");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div01","0","2190","100%","433",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("5");
            obj.set_text("div00");
            obj.set_fittocontents("height");
            obj.set_cssclass("div_WF_Bg");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00","0","0","96.04%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("업체명");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtHirerNm","0","46","96.04%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("1");
            obj.set_readonly("false");
            obj.set_displaynulltext("업체명 입력");
            obj.set_maxlength("30");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00","20","0","460","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtHirerNm\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_01","0","0","45.74%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("3");
            obj.set_text("업체분류");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_01","20","86","460","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"cboBzentyClsfCd\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01_00","0","0","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("5");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("nowrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_00_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cboBzentyClsfCd","851","24","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("6");
            obj.set_readonly("false");
            obj.set_innerdataset("dsCboBzentyClsfCd");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_01_00","20","20","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("7");
            obj.set_text("담당자 성명");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtPicNm","30","76","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("8");
            obj.set_readonly("false");
            obj.set_displaynulltext("담당자명 입력");
            obj.set_maxlength("10");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01_01_00","30","10","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtPicNm\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_01_01","30","30","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("10");
            obj.set_text("담당자 직위(직급)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtPicJbpsNm","0","0","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("11");
            obj.set_readonly("false");
            obj.set_displaynulltext("담당자 직위 입력");
            obj.set_maxlength("10");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new CheckBox("chkAplcntSmYn","773","0","196","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("12");
            obj.set_text("신청자와 동일");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_value("N");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01_01_01","40","106","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("13");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_01_01\"/><PanelItem id=\"PanelItem03\" componentid=\"edtPicJbpsNm\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01_01","0","192","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("14");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan01_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan01_01_01\"/><PanelItem id=\"PanelItem03\" componentid=\"pan01_01_02\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_00","0","0","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("15");
            obj.set_text("담당자 전화");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtPicTelno","0","46","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("16");
            obj.set_readonly("false");
            obj.set_displaynulltext("담당자 전화 입력");
            obj.set_maxlength("13");
            obj.set_imemode("none");
            obj.set_inputmode("normal");
            obj.set_inputtype("number");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01_02_00","20.00","0","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("17");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtPicTelno\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_01","10","10","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("18");
            obj.set_text("담당자 휴대폰");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtPicMblTelno","10.00","56","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("19");
            obj.set_readonly("false");
            obj.set_displaynulltext("담당자 휴대폰 입력");
            obj.set_maxlength("13");
            obj.set_inputtype("number");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01_02_01","515","0","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("20");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtPicMblTelno\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_02","10","10","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("21");
            obj.set_text("담당자 이메일");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtPicEmlAddr","20","66","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("22");
            obj.set_displaynulltext("담당자 이메일 입력");
            obj.set_maxlength("30");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01_02_02","30","96","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("23");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_02\"/><PanelItem id=\"PanelItem02\" componentid=\"edtPicEmlAddr\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01_02","0","96","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("24");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan01_02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan01_02_01\"/><PanelItem id=\"PanelItem03\" componentid=\"pan01_02_02\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_00","40","40","70%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("25");
            obj.set_text("개인정보활용동의서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("panTitle01_00","20.00","10","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("26");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("6");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("panFile01_00","0","289","100.00%","110",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("27");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj.getSetter("upatchdtlsecd").set("R00");
            obj.getSetter("upatchsecd").set("R01");
            obj.getSetter("upcolid").set("prvcUtlzWtcs");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"grdFile1\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01_01_02","30","10","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("28");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"chkAplcntSmYn\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Grid("grdFile1","20.00","60","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("29");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell cssclass=\"expr:!colId ? &quot;&quot; : &quot;CellFile&quot;\" text=\"bind:orgnlFileNm\"/><Cell col=\"1\" cssclass=\"expr:!colId ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"expr:!colId ? &quot;파일찾기&quot; : &quot;삭제&quot;\"/></Band></Format></Formats>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_00","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("6");
            obj.set_text("임차관련 정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button02_00","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("8");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button02_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit02","1630","674","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("9");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div02","15","2117","100%","384",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("10");
            obj.set_text("div02");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel02_00_00","0","0","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("0");
            obj.set_text("임대사유/목적");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtRentRsnPrps","0","46","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("1");
            obj.set_readonly("false");
            obj.set_displaynulltext("임대사유/목적 입력");
            obj.set_maxlength("100");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00","20.00","0","100%","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel02_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtRentRsnPrps\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan02_00","0","0","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("3");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel02_01_00","0","0","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("4");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Combo("cboPstnCd","0","0","90%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsCboPstnCd");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("선택하기");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("divEdtPop","0","0","40","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_Information");
            obj.set_flexshrink("0");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("[여객터미널 업무용시설] 운영기획팀 032-741-2401\r\n[교통 업무용시설] 교통운영팀 032-741-2422\r\n[화물터미널 업무용시설] 물류운영팀 032-741-2288\r\n[부대건물] 재무팀 032-741-2323");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel02_01_00_00_00","444","0","40","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("7");
            obj.set_horizontalgap("10");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divEdtPop\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel02_01_00_00","0","46","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("8");
            obj.set_verticalgap("0");
            obj.set_horizontalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"cboPstnCd\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_01_00_00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan02_01_00","20.00","0","460","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel02_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_01_00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_01","0","0","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("10");
            obj.set_text("건물명");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Combo("cboBldgCd","0","0","70%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("11");
            obj.set_innerdataset("dsCboBldgCd");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("선택하기");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Radio("rdoZoneCd","0","0","171","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("12");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_visible("false");
            var divForm_form_Div02_form_rdoZoneCd_innerdataset = new nexacro.NormalDataset("divForm_form_Div02_form_rdoZoneCd_innerdataset", obj);
            divForm_form_Div02_form_rdoZoneCd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">A/S</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">L/S</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div02_form_rdoZoneCd_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel03_01_01_00_00","293","0","30%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("13");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"rdoZoneCd\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel03_01_01_00","0","46","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("14");
            obj.set_verticalgap("0");
            obj.set_horizontalgap("10");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"cboBldgCd\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel03_01_01_00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan03_01_01","525","0","460","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("15");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel03_01_01_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan02_01","0","96","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("16");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan02_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan03_01_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel02_02_00","0","0","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("17");
            obj.set_text("층");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtBldgNofl","0","46","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("18");
            obj.set_readonly("false");
            obj.set_displaynulltext("희망층 입력");
            obj.set_maxlength("3");
            obj.set_inputtype("number");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan02_02_00","20","0","300","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("19");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel02_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtBldgNofl\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel02_02_01","10","10","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("20");
            obj.set_text("면적 (m2)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtRentAr","10","56","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("21");
            obj.set_readonly("false");
            obj.set_displaynulltext("임차면적 입력");
            obj.set_maxlength("5");
            obj.set_inputtype("number");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan02_02_01","350","0","300","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("22");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel02_02_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtRentAr\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel02_02_02","20","20","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("23");
            obj.set_text("입주희망일자");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Calendar("calMvnHpeYmd","20","66","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("24");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan02_02_02","680","0","300","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("25");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel02_02_02\"/><PanelItem id=\"PanelItem03\" componentid=\"calMvnHpeYmd\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan02_02","0","192","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("26");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan02_02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan02_02_01\"/><PanelItem id=\"PanelItem03\" componentid=\"pan02_02_02\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel02_03_00","0","0","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("27");
            obj.set_text("용도");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Combo("cboUsgCd","10.00","56","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("28");
            obj.set_innerdataset("dsCboUsgCd");
            obj.set_codecolumn("grp2CdId");
            obj.set_datacolumn("grp2CdNm");
            obj.set_text("선택하기");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel02_03_00","30","10","460","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("29");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel02_03_00\"/><PanelItem id=\"PanelItem02\" componentid=\"cboUsgCd\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel02_03_01","10","10","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("30");
            obj.set_text("상세용도");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel02_03_01","20","86","460","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("31");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel02_03_01\"/><PanelItem id=\"PanelItem02\" componentid=\"cboDtlUsgCd\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan02_03","0","288","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("32");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("20");
            obj.set_type("horizontal");
            obj.set_verticalgap("0");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_03_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_03_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Combo("cboDtlUsgCd","10.00","56","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("33");
            obj.set_innerdataset("dsCboDtlUsgCd");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("선택하기");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staSubTitle03","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("11");
            obj.set_text("기타 요청사항");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button03_00","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel03_00","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("13");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button03_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit03","1630","674","100%","70",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("14");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle03\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel03_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div03","11","2154","100%","150",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("15");
            obj.set_text("div03");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new TextArea("textAreaEtcDmndMttr","20","20","100%","100%",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("0");
            obj.set_readonly("false");
            obj.set_displaynulltext("내용 입력");
            obj.set_maxlength("200");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("pan03","0","0","100.00%","150",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("1");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("20px 20px 20px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"textAreaEtcDmndMttr\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staSubTitle04","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("16");
            obj.set_text("증빙자료");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button04_00","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel04_00","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("18");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button04_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit04","1630","674","100%","70",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("19");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle04\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel04_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle05","30","50","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("20");
            obj.set_text("임차희망서 제출 검토의견");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button05_00","1390.00","18","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel05_00","710.00","50","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("22");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 20px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button05_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div04","6","1525","100%","360",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("25");
            obj.set_text("div00");
            obj.set_fittocontents("none");
            this.divForm.addChild(obj.name, obj);

            obj = new Radio("rdoEvdncDataSeCd","0","0","380","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("0");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_enable("true");
            var divForm_form_Div04_form_rdoEvdncDataSeCd_innerdataset = new nexacro.NormalDataset("divForm_form_Div04_form_rdoEvdncDataSeCd_innerdataset", obj);
            divForm_form_Div04_form_rdoEvdncDataSeCd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">최초 임차희망업체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">기존 상주업체</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div04_form_rdoEvdncDataSeCd_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panTitle04_00","20.00","10","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("1");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("6");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"rdoEvdncDataSeCd\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panFile04_00","0","0","100%","50",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("2");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle04_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Grid("grdFile2","-551","421","100%","210",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("3");
            obj.set_binddataset("dsFile2");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"596\"/><Column size=\"100\" band=\"right\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell text=\"증빙자료명\"/><Cell col=\"1\" text=\"첨부파일명\" cssclass=\"CellHead_E\"/><Cell col=\"2\"/></Band><Band id=\"body\"><Cell text=\"bind:cdNm\"/><Cell col=\"1\" text=\"bind:orgnlFileNm\" cssclass=\"CellLink\"/><Cell col=\"2\" cssclass=\"expr:!colId ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\" text=\"expr:!colId ? &quot;파일찾기&quot; : &quot;삭제&quot;\" displaytype=\"buttoncontrol\" edittype=\"button\"/></Band></Format></Formats>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panFile04_01","0","570","100%","96",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("4");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("20");
            obj.set_type("horizontal");
            obj.set_verticalgap("0");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel04_01\"/><PanelItem id=\"PanelItem00\" componentid=\"edtNatchRsn\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel04_01","30","570","100%","36",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("5");
            obj.set_text("미제출 사유");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edtNatchRsn","30","605","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("6");
            obj.set_readonly("false");
            obj.set_displaynulltext("미제출 사유 입력");
            obj.set_maxlength("50");
            obj.set_text("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("sub_tit05","0","0","100%","70",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("23");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle05\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel05_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div05","15","1970","100%","165",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("24");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new TextArea("textAreaRvwOpnn","55","26","100%","100%",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_maxlength("300");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("pan05","35","6","100.00%","150",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("1");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("20px 20px 20px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"textAreaRvwOpnn\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

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

            obj = new Div("divQuick",null,"90","296","255","62",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_QuickMenu");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","17","20","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("0");
            obj.set_text("기본정보");
            obj.set_cssclass("btn_WF_Quick_S");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn01","17.00","btn00:0","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("1");
            obj.set_text("임차관련 정보");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn02","17.00","110","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("2");
            obj.set_text("기타 요청사항");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn03","17.00","110","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("3");
            obj.set_text("증빙자료");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn04","17.00","110","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("4");
            obj.set_text("임차희망서 제출 검토의견");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Div("divBtn",null,"divQuick:0","296","131","62",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_QuickBtnBg");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel","7","20","100","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("1");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_No");
            obj.set_fittocontents("none");
            obj.set_visible("true");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("btnCnddRcmdtn","457.00","30","100","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("2");
            obj.set_text("제출");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_visible("false");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("btnDel","200.00","365","100","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_No");
            obj.set_visible("false");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("btnSave","200.00","365","100","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_visible("false");
            this.divBtn.addChild(obj.name, obj);

            obj = new RaonkUpload("RaonkUpload","12","2300","864","200",null,null,null,null,null,null,this);
            obj.set_taborder("5");
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
            //-- Default Layout : this.divTitle
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.Div00.form
            obj = new Layout("default","",0,0,this.divForm.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel00_00.set_taborder("0");
                p.staLabel00_00.set_text("담당부서");
                p.staLabel00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00.move("0","0","100%","46",null,null);

                p.edtPicDeptNm.set_taborder("1");
                p.edtPicDeptNm.set_readonly("true");
                p.edtPicDeptNm.set_displaynulltext("업체명 입력");
                p.edtPicDeptNm.move("0","46","100%","40",null,null);

                p.Panel00_00.set_taborder("2");
                p.Panel00_00.set_type("vertical");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.move("20.00","0","300","86",null,null);

                p.staLabel00_01.set_taborder("3");
                p.staLabel00_01.set_text("접수번호");
                p.staLabel00_01.set_cssclass("sta_WF_Label");
                p.staLabel00_01.move("10.00","10","100%","46",null,null);

                p.edtRcptNo.set_taborder("4");
                p.edtRcptNo.set_readonly("true");
                p.edtRcptNo.move("10","56","100%","40",null,null);

                p.Panel00_01.set_taborder("5");
                p.Panel00_01.set_type("vertical");
                p.Panel00_01.set_flexgrow("1");
                p.Panel00_01.move("520","0","300","86",null,null);

                p.Static00_02.set_taborder("6");
                p.Static00_02.set_text("상태");
                p.Static00_02.set_cssclass("sta_WF_Label");
                p.Static00_02.move("0","0","100%","46",null,null);

                p.Panel00_02.set_taborder("7");
                p.Panel00_02.set_type("vertical");
                p.Panel00_02.set_flexgrow("1");
                p.Panel00_02.move("20","86","300","86",null,null);

                p.pan00.set_taborder("8");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("0px 20px 0px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.move("0","0","100%","105",null,null);

                p.cboPrgrsSttsCd.set_taborder("9");
                p.cboPrgrsSttsCd.set_innerdataset("dsCboPrgrsSttsCd");
                p.cboPrgrsSttsCd.set_codecolumn("cdId");
                p.cboPrgrsSttsCd.set_datacolumn("cdNm");
                p.cboPrgrsSttsCd.set_readonly("true");
                p.cboPrgrsSttsCd.set_minwidth("");
                p.cboPrgrsSttsCd.set_value("");
                p.cboPrgrsSttsCd.set_index("-1");
                p.cboPrgrsSttsCd.move("851","24","100%","40",null,null);
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
                p.pan00.set_spacing("0px 20px 10px 20px");
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div01.form
            obj = new Layout("default","",0,0,this.divForm.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel01_00_00.set_taborder("0");
                p.staLabel01_00_00.set_text("업체명");
                p.staLabel01_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel01_00_00.move("0","0","96.04%","46",null,null);

                p.edtHirerNm.set_taborder("1");
                p.edtHirerNm.set_readonly("false");
                p.edtHirerNm.set_displaynulltext("업체명 입력");
                p.edtHirerNm.set_maxlength("30");
                p.edtHirerNm.move("0","46","96.04%","40",null,null);

                p.Panel01_00_00.set_taborder("2");
                p.Panel01_00_00.set_type("vertical");
                p.Panel01_00_00.set_flexgrow("1");
                p.Panel01_00_00.set_fittocontents("height");
                p.Panel01_00_00.move("20","0","460","86",null,null);

                p.staLabel01_00_01.set_taborder("3");
                p.staLabel01_00_01.set_text("업체분류");
                p.staLabel01_00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel01_00_01.move("0","0","45.74%","46",null,null);

                p.Panel01_00_01.set_taborder("4");
                p.Panel01_00_01.set_type("vertical");
                p.Panel01_00_01.set_flexgrow("1");
                p.Panel01_00_01.move("20","86","460","86",null,null);

                p.pan01_00.set_taborder("5");
                p.pan01_00.set_horizontalgap("20");
                p.pan01_00.set_flexcrossaxiswrapalign("start");
                p.pan01_00.set_flexwrap("nowrap");
                p.pan01_00.set_fittocontents("height");
                p.pan01_00.set_verticalgap("0");
                p.pan01_00.set_spacing("0px 20px 10px 20px");
                p.pan01_00.set_cssclass("pal_WF_DtlBg");
                p.pan01_00.move("0","0","100.00%","96",null,null);

                p.cboBzentyClsfCd.set_taborder("6");
                p.cboBzentyClsfCd.set_readonly("false");
                p.cboBzentyClsfCd.set_innerdataset("dsCboBzentyClsfCd");
                p.cboBzentyClsfCd.set_codecolumn("cdId");
                p.cboBzentyClsfCd.set_datacolumn("cdNm");
                p.cboBzentyClsfCd.set_minwidth("");
                p.cboBzentyClsfCd.set_value("");
                p.cboBzentyClsfCd.set_index("-1");
                p.cboBzentyClsfCd.move("851","24","100%","40",null,null);

                p.staLabel01_01_00.set_taborder("7");
                p.staLabel01_01_00.set_text("담당자 성명");
                p.staLabel01_01_00.set_cssclass("sta_WF_Label_E");
                p.staLabel01_01_00.move("20","20","100%","46",null,null);

                p.edtPicNm.set_taborder("8");
                p.edtPicNm.set_readonly("false");
                p.edtPicNm.set_displaynulltext("담당자명 입력");
                p.edtPicNm.set_maxlength("10");
                p.edtPicNm.move("30","76","100%","40",null,null);

                p.pan01_01_00.set_taborder("9");
                p.pan01_01_00.set_type("vertical");
                p.pan01_01_00.set_flexgrow("1");
                p.pan01_01_00.move("30","10","300","86",null,null);

                p.staLabel01_01_01.set_taborder("10");
                p.staLabel01_01_01.set_text("담당자 직위(직급)");
                p.staLabel01_01_01.set_cssclass("sta_WF_Label_E");
                p.staLabel01_01_01.move("30","30","100%","46",null,null);

                p.edtPicJbpsNm.set_taborder("11");
                p.edtPicJbpsNm.set_readonly("false");
                p.edtPicJbpsNm.set_displaynulltext("담당자 직위 입력");
                p.edtPicJbpsNm.set_maxlength("10");
                p.edtPicJbpsNm.move("0","0","100%","40",null,null);

                p.chkAplcntSmYn.set_taborder("12");
                p.chkAplcntSmYn.set_text("신청자와 동일");
                p.chkAplcntSmYn.set_truevalue("Y");
                p.chkAplcntSmYn.set_falsevalue("N");
                p.chkAplcntSmYn.set_value("N");
                p.chkAplcntSmYn.move("773","0","196","40",null,null);

                p.pan01_01_01.set_taborder("13");
                p.pan01_01_01.set_type("vertical");
                p.pan01_01_01.set_flexgrow("1");
                p.pan01_01_01.move("40","106","300","86",null,null);

                p.pan01_01.set_taborder("14");
                p.pan01_01.set_horizontalgap("20");
                p.pan01_01.set_flexcrossaxiswrapalign("start");
                p.pan01_01.set_flexwrap("wrap");
                p.pan01_01.set_fittocontents("height");
                p.pan01_01.set_verticalgap("0");
                p.pan01_01.set_spacing("0px 20px 10px 20px");
                p.pan01_01.set_cssclass("pal_WF_DtlBg");
                p.pan01_01.move("0","192","100.00%","96",null,null);

                p.staLabel01_02_00.set_taborder("15");
                p.staLabel01_02_00.set_text("담당자 전화");
                p.staLabel01_02_00.set_cssclass("sta_WF_Label_E");
                p.staLabel01_02_00.move("0","0","100%","46",null,null);

                p.edtPicTelno.set_taborder("16");
                p.edtPicTelno.set_readonly("false");
                p.edtPicTelno.set_displaynulltext("담당자 전화 입력");
                p.edtPicTelno.set_maxlength("13");
                p.edtPicTelno.set_imemode("none");
                p.edtPicTelno.set_inputmode("normal");
                p.edtPicTelno.set_inputtype("number");
                p.edtPicTelno.move("0","46","100%","40",null,null);

                p.pan01_02_00.set_taborder("17");
                p.pan01_02_00.set_type("vertical");
                p.pan01_02_00.set_flexgrow("1");
                p.pan01_02_00.move("20.00","0","300","86",null,null);

                p.staLabel01_02_01.set_taborder("18");
                p.staLabel01_02_01.set_text("담당자 휴대폰");
                p.staLabel01_02_01.set_cssclass("sta_WF_Label_E");
                p.staLabel01_02_01.move("10","10","100%","46",null,null);

                p.edtPicMblTelno.set_taborder("19");
                p.edtPicMblTelno.set_readonly("false");
                p.edtPicMblTelno.set_displaynulltext("담당자 휴대폰 입력");
                p.edtPicMblTelno.set_maxlength("13");
                p.edtPicMblTelno.set_inputtype("number");
                p.edtPicMblTelno.move("10.00","56","100%","40",null,null);

                p.pan01_02_01.set_taborder("20");
                p.pan01_02_01.set_type("vertical");
                p.pan01_02_01.set_flexgrow("1");
                p.pan01_02_01.move("515","0","300","86",null,null);

                p.staLabel01_02_02.set_taborder("21");
                p.staLabel01_02_02.set_text("담당자 이메일");
                p.staLabel01_02_02.set_cssclass("sta_WF_Label_E");
                p.staLabel01_02_02.move("10","10","100%","46",null,null);

                p.edtPicEmlAddr.set_taborder("22");
                p.edtPicEmlAddr.set_displaynulltext("담당자 이메일 입력");
                p.edtPicEmlAddr.set_maxlength("30");
                p.edtPicEmlAddr.move("20","66","100%","40",null,null);

                p.pan01_02_02.set_taborder("23");
                p.pan01_02_02.set_type("vertical");
                p.pan01_02_02.set_flexgrow("1");
                p.pan01_02_02.move("30","96","300","86",null,null);

                p.pan01_02.set_taborder("24");
                p.pan01_02.set_horizontalgap("20");
                p.pan01_02.set_flexcrossaxiswrapalign("start");
                p.pan01_02.set_flexwrap("wrap");
                p.pan01_02.set_fittocontents("height");
                p.pan01_02.set_verticalgap("0");
                p.pan01_02.set_spacing("0px 20px 10px 20px");
                p.pan01_02.set_cssclass("pal_WF_DtlBg");
                p.pan01_02.move("0","96","100.00%","96",null,null);

                p.staLabel01_00.set_taborder("25");
                p.staLabel01_00.set_text("개인정보활용동의서");
                p.staLabel01_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00.set_flexgrow("1");
                p.staLabel01_00.move("40","40","70%","46",null,null);

                p.panTitle01_00.set_taborder("26");
                p.panTitle01_00.set_cssclass("pan_WF_FileTitle");
                p.panTitle01_00.set_flexwrap("wrap");
                p.panTitle01_00.set_fittocontents("height");
                p.panTitle01_00.set_verticalgap("6");
                p.panTitle01_00.move("20.00","10","100%","46",null,null);

                p.panFile01_00.set_taborder("27");
                p.panFile01_00.set_fittocontents("height");
                p.panFile01_00.set_spacing("10px 20px 10px 20px");
                p.panFile01_00.set_flexwrap("wrap");
                p.panFile01_00.set_cssclass("pal_WF_DtlBg");
                p.panFile01_00.set_verticalgap("4");
                p.panFile01_00.getSetter("upatchdtlsecd").set("R00");
                p.panFile01_00.getSetter("upatchsecd").set("R01");
                p.panFile01_00.getSetter("upcolid").set("prvcUtlzWtcs");
                p.panFile01_00.move("0","289","100.00%","110",null,null);

                p.pan01_01_02.set_taborder("28");
                p.pan01_01_02.set_type("vertical");
                p.pan01_01_02.set_flexgrow("1");
                p.pan01_01_02.set_flexcrossaxisalign("start");
                p.pan01_01_02.set_flexmainaxisalign("end");
                p.pan01_01_02.move("30","10","300","86",null,null);

                p.grdFile1.set_taborder("29");
                p.grdFile1.set_binddataset("dsFile1");
                p.grdFile1.set_autofittype("col");
                p.grdFile1.set_cssclass("grd_WF_FileAdd");
                p.grdFile1.set_readonly("true");
                p.grdFile1.move("20.00","60","100%","40",null,null);
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
                p.pan01_01_02.set_fittocontents("height");
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
                p.staLabel02_00_00.set_taborder("0");
                p.staLabel02_00_00.set_text("임대사유/목적");
                p.staLabel02_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel02_00_00.move("0","0","100%","46",null,null);

                p.edtRentRsnPrps.set_taborder("1");
                p.edtRentRsnPrps.set_readonly("false");
                p.edtRentRsnPrps.set_displaynulltext("임대사유/목적 입력");
                p.edtRentRsnPrps.set_maxlength("100");
                p.edtRentRsnPrps.move("0","46","100%","40",null,null);

                p.Panel02_00_00.set_taborder("2");
                p.Panel02_00_00.set_type("vertical");
                p.Panel02_00_00.set_flexgrow("1");
                p.Panel02_00_00.move("20.00","0","100%","86",null,null);

                p.pan02_00.set_taborder("3");
                p.pan02_00.set_horizontalgap("20");
                p.pan02_00.set_flexcrossaxiswrapalign("start");
                p.pan02_00.set_flexwrap("wrap");
                p.pan02_00.set_fittocontents("height");
                p.pan02_00.set_verticalgap("0");
                p.pan02_00.set_spacing("0px 20px 10px 20px");
                p.pan02_00.set_cssclass("pal_WF_DtlBg");
                p.pan02_00.move("0","0","100.00%","96",null,null);

                p.staLabel02_01_00.set_taborder("4");
                p.staLabel02_01_00.set_text("구분");
                p.staLabel02_01_00.set_cssclass("sta_WF_Label_E");
                p.staLabel02_01_00.move("0","0","100%","46",null,null);

                p.cboPstnCd.set_taborder("5");
                p.cboPstnCd.set_innerdataset("dsCboPstnCd");
                p.cboPstnCd.set_codecolumn("cdId");
                p.cboPstnCd.set_datacolumn("cdNm");
                p.cboPstnCd.set_text("선택하기");
                p.cboPstnCd.set_value("");
                p.cboPstnCd.set_index("-1");
                p.cboPstnCd.move("0","0","90%","40",null,null);

                p.divEdtPop.set_taborder("6");
                p.divEdtPop.set_cssclass("btn_WF_Information");
                p.divEdtPop.set_flexshrink("0");
                p.divEdtPop.set_tooltiptype("hover");
                p.divEdtPop.set_tooltiptext("[여객터미널 업무용시설] 운영기획팀 032-741-2401\r\n[교통 업무용시설] 교통운영팀 032-741-2422\r\n[화물터미널 업무용시설] 물류운영팀 032-741-2288\r\n[부대건물] 재무팀 032-741-2323");
                p.divEdtPop.move("0","0","40","40",null,null);

                p.Panel02_01_00_00_00.set_taborder("7");
                p.Panel02_01_00_00_00.set_horizontalgap("10");
                p.Panel02_01_00_00_00.set_flexmainaxisalign("end");
                p.Panel02_01_00_00_00.move("444","0","40","40",null,null);

                p.Panel02_01_00_00.set_taborder("8");
                p.Panel02_01_00_00.set_verticalgap("0");
                p.Panel02_01_00_00.set_horizontalgap("8");
                p.Panel02_01_00_00.move("0","46","100%","40",null,null);

                p.pan02_01_00.set_taborder("9");
                p.pan02_01_00.set_type("vertical");
                p.pan02_01_00.set_flexgrow("1");
                p.pan02_01_00.move("20.00","0","460","86",null,null);

                p.staLabel03_01_01.set_taborder("10");
                p.staLabel03_01_01.set_text("건물명");
                p.staLabel03_01_01.set_cssclass("sta_WF_Label_E");
                p.staLabel03_01_01.move("0","0","100%","46",null,null);

                p.cboBldgCd.set_taborder("11");
                p.cboBldgCd.set_innerdataset("dsCboBldgCd");
                p.cboBldgCd.set_codecolumn("cdId");
                p.cboBldgCd.set_datacolumn("cdNm");
                p.cboBldgCd.set_text("선택하기");
                p.cboBldgCd.set_value("");
                p.cboBldgCd.set_index("-1");
                p.cboBldgCd.move("0","0","70%","40",null,null);

                p.rdoZoneCd.set_taborder("12");
                p.rdoZoneCd.set_fittocontents("width");
                p.rdoZoneCd.set_innerdataset(divForm_form_Div02_form_rdoZoneCd_innerdataset);
                p.rdoZoneCd.set_codecolumn("codecolumn");
                p.rdoZoneCd.set_datacolumn("datacolumn");
                p.rdoZoneCd.set_direction("vertical");
                p.rdoZoneCd.set_visible("false");
                p.rdoZoneCd.set_index("-1");
                p.rdoZoneCd.move("0","0","171","40",null,null);

                p.Panel03_01_01_00_00.set_taborder("13");
                p.Panel03_01_01_00_00.move("293","0","30%","40",null,null);

                p.Panel03_01_01_00.set_taborder("14");
                p.Panel03_01_01_00.set_verticalgap("0");
                p.Panel03_01_01_00.set_horizontalgap("10");
                p.Panel03_01_01_00.set_type("horizontal");
                p.Panel03_01_01_00.move("0","46","100%","40",null,null);

                p.pan03_01_01.set_taborder("15");
                p.pan03_01_01.set_type("vertical");
                p.pan03_01_01.set_flexgrow("1");
                p.pan03_01_01.move("525","0","460","86",null,null);

                p.pan02_01.set_taborder("16");
                p.pan02_01.set_horizontalgap("20");
                p.pan02_01.set_flexcrossaxiswrapalign("start");
                p.pan02_01.set_flexwrap("wrap");
                p.pan02_01.set_fittocontents("height");
                p.pan02_01.set_verticalgap("0");
                p.pan02_01.set_spacing("0px 20px 10px 20px");
                p.pan02_01.set_cssclass("pal_WF_DtlBg");
                p.pan02_01.move("0","96","100.00%","96",null,null);

                p.staLabel02_02_00.set_taborder("17");
                p.staLabel02_02_00.set_text("층");
                p.staLabel02_02_00.set_cssclass("sta_WF_Label");
                p.staLabel02_02_00.move("0","0","100%","46",null,null);

                p.edtBldgNofl.set_taborder("18");
                p.edtBldgNofl.set_readonly("false");
                p.edtBldgNofl.set_displaynulltext("희망층 입력");
                p.edtBldgNofl.set_maxlength("3");
                p.edtBldgNofl.set_inputtype("number");
                p.edtBldgNofl.move("0","46","100%","40",null,null);

                p.pan02_02_00.set_taborder("19");
                p.pan02_02_00.set_type("vertical");
                p.pan02_02_00.set_flexgrow("1");
                p.pan02_02_00.move("20","0","300","86",null,null);

                p.staLabel02_02_01.set_taborder("20");
                p.staLabel02_02_01.set_text("면적 (m2)");
                p.staLabel02_02_01.set_cssclass("sta_WF_Label_E");
                p.staLabel02_02_01.move("10","10","100%","46",null,null);

                p.edtRentAr.set_taborder("21");
                p.edtRentAr.set_readonly("false");
                p.edtRentAr.set_displaynulltext("임차면적 입력");
                p.edtRentAr.set_maxlength("5");
                p.edtRentAr.set_inputtype("number");
                p.edtRentAr.move("10","56","100%","40",null,null);

                p.pan02_02_01.set_taborder("22");
                p.pan02_02_01.set_type("vertical");
                p.pan02_02_01.set_flexgrow("1");
                p.pan02_02_01.move("350","0","300","86",null,null);

                p.staLabel02_02_02.set_taborder("23");
                p.staLabel02_02_02.set_text("입주희망일자");
                p.staLabel02_02_02.set_cssclass("sta_WF_Label_E");
                p.staLabel02_02_02.move("20","20","100%","46",null,null);

                p.calMvnHpeYmd.set_taborder("24");
                p.calMvnHpeYmd.move("20","66","100%","40",null,null);

                p.pan02_02_02.set_taborder("25");
                p.pan02_02_02.set_type("vertical");
                p.pan02_02_02.set_flexgrow("1");
                p.pan02_02_02.move("680","0","300","86",null,null);

                p.pan02_02.set_taborder("26");
                p.pan02_02.set_horizontalgap("20");
                p.pan02_02.set_flexcrossaxiswrapalign("start");
                p.pan02_02.set_flexwrap("wrap");
                p.pan02_02.set_fittocontents("height");
                p.pan02_02.set_verticalgap("0");
                p.pan02_02.set_spacing("0px 20px 10px 20px");
                p.pan02_02.set_cssclass("pal_WF_DtlBg");
                p.pan02_02.move("0","192","100.00%","96",null,null);

                p.staLabel02_03_00.set_taborder("27");
                p.staLabel02_03_00.set_text("용도");
                p.staLabel02_03_00.set_cssclass("sta_WF_Label_E");
                p.staLabel02_03_00.move("0","0","100%","46",null,null);

                p.cboUsgCd.set_taborder("28");
                p.cboUsgCd.set_innerdataset("dsCboUsgCd");
                p.cboUsgCd.set_codecolumn("grp2CdId");
                p.cboUsgCd.set_datacolumn("grp2CdNm");
                p.cboUsgCd.set_text("선택하기");
                p.cboUsgCd.set_value("");
                p.cboUsgCd.set_index("-1");
                p.cboUsgCd.move("10.00","56","100%","40",null,null);

                p.Panel02_03_00.set_taborder("29");
                p.Panel02_03_00.set_type("vertical");
                p.Panel02_03_00.set_flexgrow("1");
                p.Panel02_03_00.move("30","10","460","86",null,null);

                p.staLabel02_03_01.set_taborder("30");
                p.staLabel02_03_01.set_text("상세용도");
                p.staLabel02_03_01.set_cssclass("sta_WF_Label_E");
                p.staLabel02_03_01.move("10","10","100%","46",null,null);

                p.Panel02_03_01.set_taborder("31");
                p.Panel02_03_01.set_type("vertical");
                p.Panel02_03_01.set_flexgrow("1");
                p.Panel02_03_01.move("20","86","460","86",null,null);

                p.pan02_03.set_taborder("32");
                p.pan02_03.set_cssclass("pal_WF_DtlBg");
                p.pan02_03.set_spacing("0px 20px 10px 20px");
                p.pan02_03.set_flexwrap("wrap");
                p.pan02_03.set_horizontalgap("20");
                p.pan02_03.set_type("horizontal");
                p.pan02_03.set_verticalgap("0");
                p.pan02_03.set_fittocontents("height");
                p.pan02_03.move("0","288","100.00%","96",null,null);

                p.cboDtlUsgCd.set_taborder("33");
                p.cboDtlUsgCd.set_innerdataset("dsCboDtlUsgCd");
                p.cboDtlUsgCd.set_codecolumn("cdId");
                p.cboDtlUsgCd.set_datacolumn("cdNm");
                p.cboDtlUsgCd.set_text("선택하기");
                p.cboDtlUsgCd.set_value("");
                p.cboDtlUsgCd.set_index("-1");
                p.cboDtlUsgCd.move("10.00","56","100%","40",null,null);
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
                p.cboPstnCd.move("0","0","89%","40",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div02.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div03.form
            obj = new Layout("default","",0,0,this.divForm.form.Div03.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.textAreaEtcDmndMttr.set_taborder("0");
                p.textAreaEtcDmndMttr.set_readonly("false");
                p.textAreaEtcDmndMttr.set_displaynulltext("내용 입력");
                p.textAreaEtcDmndMttr.set_maxlength("200");
                p.textAreaEtcDmndMttr.move("20","20","100%","100%",null,null);

                p.pan03.set_taborder("1");
                p.pan03.set_horizontalgap("20");
                p.pan03.set_flexcrossaxiswrapalign("start");
                p.pan03.set_flexwrap("wrap");
                p.pan03.set_fittocontents("height");
                p.pan03.set_verticalgap("0");
                p.pan03.set_spacing("20px 20px 20px 20px");
                p.pan03.set_cssclass("pal_WF_DtlBg");
                p.pan03.move("0","0","100.00%","150",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div03.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div03.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div03.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div03.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div04.form
            obj = new Layout("default","",0,0,this.divForm.form.Div04.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.rdoEvdncDataSeCd.set_taborder("0");
                p.rdoEvdncDataSeCd.set_fittocontents("width");
                p.rdoEvdncDataSeCd.set_innerdataset(divForm_form_Div04_form_rdoEvdncDataSeCd_innerdataset);
                p.rdoEvdncDataSeCd.set_codecolumn("codecolumn");
                p.rdoEvdncDataSeCd.set_datacolumn("datacolumn");
                p.rdoEvdncDataSeCd.set_direction("vertical");
                p.rdoEvdncDataSeCd.set_enable("true");
                p.rdoEvdncDataSeCd.set_index("-1");
                p.rdoEvdncDataSeCd.move("0","0","380","40",null,null);

                p.panTitle04_00.set_taborder("1");
                p.panTitle04_00.set_flexwrap("wrap");
                p.panTitle04_00.set_fittocontents("height");
                p.panTitle04_00.set_verticalgap("6");
                p.panTitle04_00.move("20.00","10","100%","46",null,null);

                p.panFile04_00.set_taborder("2");
                p.panFile04_00.set_fittocontents("height");
                p.panFile04_00.set_spacing("10px 20px 10px 20px");
                p.panFile04_00.set_flexwrap("wrap");
                p.panFile04_00.set_cssclass("pal_WF_DtlBg");
                p.panFile04_00.set_verticalgap("4");
                p.panFile04_00.move("0","0","100%","50",null,null);

                p.grdFile2.set_taborder("3");
                p.grdFile2.set_binddataset("dsFile2");
                p.grdFile2.set_autofittype("col");
                p.grdFile2.set_autoenter("select");
                p.grdFile2.move("-551","421","100%","210",null,null);

                p.panFile04_01.set_taborder("4");
                p.panFile04_01.set_cssclass("pal_WF_DtlBg");
                p.panFile04_01.set_spacing("10px 20px 10px 20px");
                p.panFile04_01.set_flexwrap("wrap");
                p.panFile04_01.set_horizontalgap("20");
                p.panFile04_01.set_type("horizontal");
                p.panFile04_01.set_verticalgap("0");
                p.panFile04_01.set_fittocontents("height");
                p.panFile04_01.set_visible("false");
                p.panFile04_01.move("0","570","100%","96",null,null);

                p.staLabel04_01.set_taborder("5");
                p.staLabel04_01.set_text("미제출 사유");
                p.staLabel04_01.set_cssclass("sta_WF_Label");
                p.staLabel04_01.move("30","570","100%","36",null,null);

                p.edtNatchRsn.set_taborder("6");
                p.edtNatchRsn.set_readonly("false");
                p.edtNatchRsn.set_displaynulltext("미제출 사유 입력");
                p.edtNatchRsn.set_maxlength("50");
                p.edtNatchRsn.move("30","605","100%","40",null,null);
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
            //-- Default Layout : this.divForm.form.Div05.form
            obj = new Layout("default","",0,0,this.divForm.form.Div05.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.textAreaRvwOpnn.set_taborder("0");
                p.textAreaRvwOpnn.set_readonly("true");
                p.textAreaRvwOpnn.set_maxlength("300");
                p.textAreaRvwOpnn.move("55","26","100%","100%",null,null);

                p.pan05.set_taborder("1");
                p.pan05.set_horizontalgap("20");
                p.pan05.set_flexcrossaxiswrapalign("start");
                p.pan05.set_flexwrap("wrap");
                p.pan05.set_fittocontents("height");
                p.pan05.set_verticalgap("0");
                p.pan05.set_spacing("20px 20px 20px 20px");
                p.pan05.set_cssclass("pal_WF_DtlBg");
                p.pan05.move("35","6","100.00%","150",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div05.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div05.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div05.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

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
                p.Div00.set_text("div00");
                p.Div00.set_cssclass("div_WF_Bg");
                p.Div00.move("0","0","100%","110",null,null);

                p.staSubTitle01.set_taborder("1");
                p.staSubTitle01.set_text("기본정보");
                p.staSubTitle01.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle01.move("1630.00","690","50%","50",null,null);

                p.Button01_00.set_taborder("2");
                p.Button01_00.set_cssclass("btn_WF_ACMinus");
                p.Button01_00.move("2890.00","692","34","34",null,null);

                p.Panel01_00.set_taborder("3");
                p.Panel01_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_00.set_spacing("0px 20px");
                p.Panel01_00.set_horizontalgap("10");
                p.Panel01_00.set_flexcrossaxisalign("center");
                p.Panel01_00.set_flexmainaxisalign("end");
                p.Panel01_00.move("2340.00","690","50%","50",null,null);

                p.sub_tit01.set_taborder("4");
                p.sub_tit01.set_background("#ffffff");
                p.sub_tit01.set_flexcrossaxisalign("end");
                p.sub_tit01.set_maxheight("");
                p.sub_tit01.move("1630","674","100%","70",null,null);

                p.Div01.set_taborder("5");
                p.Div01.set_text("div00");
                p.Div01.set_fittocontents("height");
                p.Div01.set_cssclass("div_WF_Bg");
                p.Div01.move("0","2190","100%","433",null,null);

                p.staSubTitle02_00_00.set_taborder("6");
                p.staSubTitle02_00_00.set_text("임차관련 정보");
                p.staSubTitle02_00_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_00.move("1630.00","690","50%","50",null,null);

                p.Button02_00.set_taborder("7");
                p.Button02_00.set_cssclass("btn_WF_ACMinus");
                p.Button02_00.move("2890.00","692","34","34",null,null);

                p.Panel02_00.set_taborder("8");
                p.Panel02_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel02_00.set_spacing("0px 10px");
                p.Panel02_00.set_horizontalgap("10");
                p.Panel02_00.set_flexcrossaxisalign("center");
                p.Panel02_00.set_flexmainaxisalign("end");
                p.Panel02_00.move("2340.00","690","50%","50",null,null);

                p.sub_tit02.set_taborder("9");
                p.sub_tit02.set_background("#ffffff");
                p.sub_tit02.set_flexcrossaxisalign("end");
                p.sub_tit02.set_maxheight("");
                p.sub_tit02.move("1630","674","100%","50",null,null);

                p.Div02.set_taborder("10");
                p.Div02.set_text("div02");
                p.Div02.set_cssclass("div_WF_Bg");
                p.Div02.set_fittocontents("height");
                p.Div02.move("15","2117","100%","384",null,null);

                p.staSubTitle03.set_taborder("11");
                p.staSubTitle03.set_text("기타 요청사항");
                p.staSubTitle03.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle03.move("1630.00","690","50%","50",null,null);

                p.Button03_00.set_taborder("12");
                p.Button03_00.set_cssclass("btn_WF_ACMinus");
                p.Button03_00.move("2890.00","692","34","34",null,null);

                p.Panel03_00.set_taborder("13");
                p.Panel03_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel03_00.set_spacing("0px 10px");
                p.Panel03_00.set_horizontalgap("10");
                p.Panel03_00.set_flexcrossaxisalign("center");
                p.Panel03_00.set_flexmainaxisalign("end");
                p.Panel03_00.move("2340.00","690","50%","50",null,null);

                p.sub_tit03.set_taborder("14");
                p.sub_tit03.set_background("#ffffff");
                p.sub_tit03.set_flexcrossaxisalign("end");
                p.sub_tit03.set_maxheight("");
                p.sub_tit03.move("1630","674","100%","70",null,null);

                p.Div03.set_taborder("15");
                p.Div03.set_text("div03");
                p.Div03.set_cssclass("div_WF_Bg");
                p.Div03.set_fittocontents("height");
                p.Div03.move("11","2154","100%","150",null,null);

                p.staSubTitle04.set_taborder("16");
                p.staSubTitle04.set_text("증빙자료");
                p.staSubTitle04.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle04.move("1630.00","690","50%","50",null,null);

                p.Button04_00.set_taborder("17");
                p.Button04_00.set_cssclass("btn_WF_ACMinus");
                p.Button04_00.move("2890.00","692","34","34",null,null);

                p.Panel04_00.set_taborder("18");
                p.Panel04_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel04_00.set_spacing("0px 10px");
                p.Panel04_00.set_horizontalgap("10");
                p.Panel04_00.set_flexcrossaxisalign("center");
                p.Panel04_00.set_flexmainaxisalign("end");
                p.Panel04_00.move("2340.00","690","50%","50",null,null);

                p.sub_tit04.set_taborder("19");
                p.sub_tit04.set_background("#ffffff");
                p.sub_tit04.set_flexcrossaxisalign("end");
                p.sub_tit04.set_maxheight("");
                p.sub_tit04.move("1630","674","100%","70",null,null);

                p.staSubTitle05.set_taborder("20");
                p.staSubTitle05.set_text("임차희망서 제출 검토의견");
                p.staSubTitle05.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle05.move("30","50","100%","50",null,null);

                p.Button05_00.set_taborder("21");
                p.Button05_00.set_cssclass("btn_WF_ACMinus");
                p.Button05_00.set_visible("false");
                p.Button05_00.move("1390.00","18","34","34",null,null);

                p.Panel05_00.set_taborder("22");
                p.Panel05_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel05_00.set_spacing("0px 20px");
                p.Panel05_00.set_horizontalgap("10");
                p.Panel05_00.set_flexcrossaxisalign("center");
                p.Panel05_00.set_flexmainaxisalign("end");
                p.Panel05_00.move("710.00","50","100%","50",null,null);

                p.Div04.set_taborder("25");
                p.Div04.set_text("div00");
                p.Div04.set_fittocontents("none");
                p.Div04.move("6","1525","100%","360",null,null);

                p.sub_tit05.set_taborder("23");
                p.sub_tit05.set_background("#ffffff");
                p.sub_tit05.set_flexcrossaxisalign("end");
                p.sub_tit05.set_maxheight("");
                p.sub_tit05.move("0","0","100%","70",null,null);

                p.Div05.set_taborder("24");
                p.Div05.set_text("div00");
                p.Div05.set_cssclass("div_WF_Bg");
                p.Div05.set_fittocontents("height");
                p.Div05.move("15","1970","100%","165",null,null);
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
                p.Div00.set_fittocontents("height");

                p.sub_tit01.set_fittocontents("height");

                p.sub_tit02.set_fittocontents("height");

                p.sub_tit03.set_fittocontents("height");

                p.sub_tit04.set_fittocontents("height");

                p.Div04.set_fittocontents("height");

                p.sub_tit05.set_fittocontents("height");
            	}
            );
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_verticalgap("0");
            obj.set_flexmainaxisalign("start");
            obj.set_flexwrap("nowrap");
            obj.set_type("vertical");
            this.divForm.form.addLayout(obj.name, obj);
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

                p.btn01.set_taborder("1");
                p.btn01.set_text("임차관련 정보");
                p.btn01.set_cssclass("btn_WF_Quick");
                p.btn01.move("17.00","btn00:0","100%","45",null,null);

                p.btn02.set_taborder("2");
                p.btn02.set_text("기타 요청사항");
                p.btn02.set_cssclass("btn_WF_Quick");
                p.btn02.move("17.00","110","100%","45",null,null);

                p.btn03.set_taborder("3");
                p.btn03.set_text("증빙자료");
                p.btn03.set_cssclass("btn_WF_Quick");
                p.btn03.move("17.00","110","100%","45",null,null);

                p.btn04.set_taborder("4");
                p.btn04.set_text("임차희망서 제출 검토의견");
                p.btn04.set_cssclass("btn_WF_Quick");
                p.btn04.move("17.00","110","100%","45",null,null);
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
                p.btn00.set_cssclass("btn_WF_QuickM_S");
                p.btn00.set_fittocontents("width");

                p.btn01.set_fittocontents("width");
                p.btn01.set_cssclass("btn_WF_QuickM");

                p.btn02.set_fittocontents("width");
                p.btn02.set_cssclass("btn_WF_QuickM");

                p.btn03.set_cssclass("btn_WF_QuickM");
                p.btn03.set_fittocontents("width");

                p.btn04.set_cssclass("btn_WF_QuickM");
                p.btn04.set_fittocontents("width");
            	}
            );
            obj.set_type("horizontal");
            obj.set_spacing("0px 0px 0px 0px");
            this.divQuick.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divBtn.form
            obj = new Layout("default","",0,0,this.divBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnCancel.set_taborder("1");
                p.btnCancel.set_text("취소");
                p.btnCancel.set_cssclass("btn_WF_No");
                p.btnCancel.set_fittocontents("none");
                p.btnCancel.set_visible("true");
                p.btnCancel.move("7","20","100","40",null,null);

                p.btnCnddRcmdtn.set_taborder("2");
                p.btnCnddRcmdtn.set_text("제출");
                p.btnCnddRcmdtn.set_cssclass("btn_WF_Yes");
                p.btnCnddRcmdtn.set_visible("false");
                p.btnCnddRcmdtn.move("457.00","30","100","40",null,null);

                p.btnDel.set_taborder("0");
                p.btnDel.set_text("삭제");
                p.btnDel.set_cssclass("btn_WF_No");
                p.btnDel.set_visible("false");
                p.btnDel.move("200.00","365","100","40",null,null);

                p.btnSave.set_taborder("3");
                p.btnSave.set_text("저장");
                p.btnSave.set_cssclass("btn_WF_Yes");
                p.btnSave.set_visible("false");
                p.btnSave.move("200.00","365","100","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_verticalgap("10");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("wrap");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_spacing("20px 10px");
            this.divBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divBtn.form
            obj = new Layout("mobile","",0,0,this.divBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnCancel.set_fittocontents("width");

                p.btnCnddRcmdtn.set_fittocontents("width");

                p.btnDel.set_fittocontents("width");

                p.btnSave.set_fittocontents("width");
            	}
            );
            obj.set_flexmainaxisalign("start");
            obj.set_flexwrap("nowrap");
            obj.set_spacing("0px 10px");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("0");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            this.divBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1480,2100,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("임차희망서 제출");

                p.divTitle.set_taborder("1");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.move("0","0",null,"50","60",null);

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_cssclass("div_WF_QuickFrBg");
                p.divForm.set_fittocontents("height");
                p.divForm.move("0","divTitle:20",null,"2000","60",null);

                p.PopupDiv00.set_visible("true");
                p.PopupDiv00.set_cssclass("popdiv_WF_TTPoP");
                p.PopupDiv00.move("1583.00","1049","355","160",null,null);

                p.divQuick.set_taborder("3");
                p.divQuick.set_text("div00");
                p.divQuick.set_cssclass("div_WF_QuickMenu");
                p.divQuick.set_fittocontents("height");
                p.divQuick.move(null,"90","296","255","62",null);

                p.divBtn.set_taborder("4");
                p.divBtn.set_text("div00");
                p.divBtn.set_cssclass("div_WF_QuickBtnBg");
                p.divBtn.set_fittocontents("height");
                p.divBtn.move(null,"divQuick:0","296","131","62",null);

                p.RaonkUpload.set_taborder("5");
                p.RaonkUpload.set_DevelopLangage("JAVA");
                p.RaonkUpload.set_ExtensionAllowOrLimit("1");
                p.RaonkUpload.set_HandlerUrl("/common/uploadDownload.do");
                p.RaonkUpload.set_RunTimes("html5");
                p.RaonkUpload.set_ButtonBarView("0");
                p.RaonkUpload.set_visible("false");
                p.RaonkUpload.set_AllowDuplicationFile("1");
                p.RaonkUpload.set_text("");
                p.RaonkUpload.set_DisableDeleteConfirm("1");
                p.RaonkUpload.move("12","2300","864","200",null,null);
            	}
            );
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
                p.divForm.move("0","120",null,null,"0","80");

                p.divTitle.move("0","0",null,"50","0",null);

                p.divQuick.set_cssclass("div_WF_QuickMenuM");
                p.divQuick.move("20","60",null,"60","20",null);

                p.divBtn.set_fittocontents("none");
                p.divBtn.move("0",null,null,"80","0","0");
            	}
            );
            obj.set_mobileorientation("landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.Div03.form.textAreaEtcDmndMttr","value","dsGet","etcDmndMttr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.Div01.form.edtHirerNm","value","dsGet","bzentyNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.Div00.form.edtPicDeptNm","value","dsGet","picDeptNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.Div00.form.edtRcptNo","value","dsGet","rcptNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.Div00.form.cboPrgrsSttsCd","value","dsGet","prgrsSttsCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divForm.form.Div02.form.edtRentRsnPrps","value","dsGet","rentRsnPrps");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divForm.form.Div02.form.cboPstnCd","value","dsGet","pstnCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divForm.form.Div02.form.cboBldgCd","value","dsGet","bldgCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divForm.form.Div02.form.rdoZoneCd","value","dsGet","zoneCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divForm.form.Div02.form.edtBldgNofl","value","dsGet","bldgNofl");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divForm.form.Div02.form.edtRentAr","value","dsGet","rntar");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divForm.form.Div02.form.calMvnHpeYmd","value","dsGet","mvnHpeYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divForm.form.Div02.form.cboUsgCd","value","dsGet","usgCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divForm.form.Div04.form.rdoEvdncDataSeCd","value","dsGet","evdncDataSeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divForm.form.Div05.form.textAreaRvwOpnn","value","dsGet","rvwOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.Div01.form.cboBzentyClsfCd","value","dsGet","bzentyClsfCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.Div02.form.cboDtlUsgCd","value","dsGet","dtlUsgCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divForm.form.Div01.form.edtPicNm","value","dsGet","picNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divForm.form.Div01.form.edtPicJbpsNm","value","dsGet","picJbpsNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divForm.form.Div01.form.edtPicTelno","value","dsGet","picTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divForm.form.Div01.form.edtPicMblTelno","value","dsGet","picMblTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divForm.form.Div01.form.edtPicEmlAddr","value","dsGet","picEmlAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divForm.form.Div04.form.edtNatchRsn","value","dsFile2","natchRsn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
        };
        
        // User Script
        this.addIncludeScript("REN002M01.xfdl","xjs::TaskCom.xjs");
        this.registerScript("REN002M01.xfdl", function() {
        /**
        *  인천공항 원스톱 입주자서비스 프로젝트
        *  @FileName 	REN002M01.xfdl
        *  @Creator 	(주)이루온
        *  @CreateDate 	2024/09/30
        *  @Desction   ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/09/30			pys						최초생성
        *******************************************************************************
        */

        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;  // 업무공통
        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        this.param;
        this.validateColumn = [];
        this.atchValidateColumn = [];
        this.gAtflSe;
        this.gRow;
        this.gAtflCnt;

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수

        	this.fnInit();
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        // 조회
        this.cfnSearch = function ()
        {
        	this.selectTransaction();
        };

        this.cfnClose = function (){};

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        // 데이터 조회
        this.selectTransaction = function()
        {
        	var strSvcId    = "select";
        	var strSvcUrl   = "ren/frs/selectHireLoh.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsGet=dsGet dsAtflList=dsAtflList";
        	var strArg      = "" ;
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 데이터 저장
        this.saveTransaction = function()
        {
        	var strSvcId    = "save";
        	var strSvcUrl   = "ren/frs/saveHireLoh.do";
        	var inData      = "dsGet=dsGet:U dsAtflList=dsAtflSave:U";
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
        	if (errorCode != 0)	{
        		return;
        	}

        	switch (svcID) {
        		case "cfnEtcCd":
        			this.dsFile.clear();

        			for (var i = 0; i < this.dsAtflArtclList.rowcount; i++) {
        				this.dsFile.addColumn(this.dsAtflArtclList.getColumn(i, "cdId"), "STRING");
        			}

        			this.dsFile.addRow();
        			break;

        		case "select":
        			if (this.dsGet.rowcount == 0) {
        				this.dsGet.insertRow(); // 등록화면시 dsGet 데이터셋 로우 생성
        			}

        			// 10.작성중
         			if (this.dsGet.getColumn(0, "prgrsSttsCd") == "10") {
         				this.divForm.form.sub_tit05.set_visible(false);			// 검토의견 제목 미표출
         				this.divForm.form.Div05.set_visible(false); 			// 검토의견 미표출
         				this.divQuick.form.btn04.set_visible(false);  			// 검토의견 버튼 미표출

        				if (this.objApp.screenid == "Desktop_screen") {
        					this.divBtn.top = "divQuick:0";				 		// 검토의견 버튼 미표출시 사이즈조정
        				}

        				this.divBtn.form.btnCnddRcmdtn.set_visible(true);  		// 제출 표출
         				this.divBtn.form.btnDel.set_visible(true); 				// 삭제 표출
         				this.divBtn.form.btnSave.set_visible(true); 			// 저장 표출
         			}

         			// 11.접수 14.확정
         			if (this.dsGet.getColumn(0, "prgrsSttsCd") == "11" || this.dsGet.getColumn(0, "prgrsSttsCd") == "14" ) {
         				this.divForm.form.sub_tit05.set_visible(false);			// 검토의견 제목 미표출
         				this.divForm.form.Div05.set_visible(false); 			// 검토의견 미표출
        				this.divQuick.form.btn04.set_visible(false);  			// 검토의견 버튼 미표출

        				if (this.objApp.screenid == "Desktop_screen") {
        					this.divBtn.top = "divQuick:0";						// 검토의견 버튼 미표출시 사이즈조정
        				}

         				this.divBtn.form.btnCnddRcmdtn.set_visible(false);  	// 제출 미표출
         				this.divBtn.form.btnDel.set_visible(false); 			// 삭제 미표출
         				this.divBtn.form.btnSave.set_visible(false); 			// 저장 미표출
         			}

         			// 15.반려
         			if (this.dsGet.getColumn(0, "prgrsSttsCd") == "15") {
         				this.divForm.form.sub_tit05.set_visible(true);			// 검토의견 제목 표출
         				this.divForm.form.Div05.set_visible(true); 				// 검토의견 표출
        				this.divQuick.form.btn04.set_visible(true);  			// 검토의견 버튼 표출
         				this.divBtn.form.btnCnddRcmdtn.set_visible(true);  		// 제출 표출
         				this.divBtn.form.btnSave.set_visible(true); 			// 저장 표출
         			}

        			this.cboBldgCd();											// 건물
        			this.divForm_Div04_rdoEvdncDataSeCd_onitemchanged(); 		// 증빙자료
        			this.cboUsgCd();											// 용도

        			// 첨부파일 설정
        			this.cfnFileSet();

        			// 첨부파일1 데이타셋 상태값 초기화
        			this.dsFile1.set_updatecontrol(false);
        			this.dsFile1.applyChange();
        			this.dsFile1.set_updatecontrol(true);

        			// 첨부파일2 데이타셋 상태값 초기화
        			this.dsFile2.set_updatecontrol(false);
        			this.dsFile2.applyChange();
        			this.dsFile2.set_updatecontrol(true);

        			break;

        		case "uploadComplete":
        			// 파일 업로드가 완료 된 후 첨부파일 과 같이 데이터 저장
        			this.dsAtflSave.clearData();

        			for (i = 0; i<this.dsFile1.rowcount; i++) {
        				var rowType = this.dsFile1.getRowType(i);
        				if (rowType ==  Dataset.ROWTYPE_INSERT ||
        					rowType ==  Dataset.ROWTYPE_UPDATE ||
        					rowType ==  Dataset.ROWTYPE_DELETE) {
        					var nRow = this.dsAtflSave.addRow();
        					this.dsAtflSave.copyRow(nRow, this.dsFile1, i);
        					this.dsAtflSave.setColumn(nRow, "atflCd", this.dsFile1.getColumn(i, "cdId"));
        				}
        			}

        			for (i = 0; i<this.dsFile2.rowcount; i++) {
        				var rowType = this.dsFile2.getRowType(i);
        				if (rowType ==  Dataset.ROWTYPE_INSERT ||
        					rowType ==  Dataset.ROWTYPE_UPDATE ||
        					rowType ==  Dataset.ROWTYPE_DELETE) {
        					var nRow = this.dsAtflSave.addRow();
        					this.dsAtflSave.copyRow(nRow, this.dsFile2, i);
        					this.dsAtflSave.setColumn(nRow, "atflCd", this.dsFile2.getColumn(i, "cdId"));
        				}
        			}

        			// 파일 업로드 결과를 첨부파일 데이터셋에 설정
        			for (var i = 0; i < this.dsAtchRslt.rowcount; i++) {
        			    // 첨부파일관리번호
        				this.dsAtflSave.setColumn(this.dsAtflSave.findRow("colId", this.dsAtchRslt.getColumn(i, "colId")), "atflMngNo", this.dsAtchRslt.getColumn(i, "atflMngNo"));
        			}

        			this.saveTransaction();

        			break;

        		case "save":
        			this.gfnAlertMsg("msg", "MSG_007", [ this.objApp.getVariable("gvRetMsg")]);

        			if (this.objApp.screenid == "Desktop_screen") {
        				var cMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        				this.gfnCloseMenu(cMenuId);
        				this._gfnOpenMenu(cMenuId.substring(0,14),"",true);
        			} else {
        				this.close();
        			}

        			this._gfnOpenMenu(cMenuId.substring(0,14),"",true);
        			break;
        	}
        };

        // 얼럿창 콜백 함수
        this.msgCallback = function(sPopupId, sRtn)
        {
        	var oRtn = JSON.parse(sRtn);

        	if (oRtn.result == "Y") {
        		if (this.param.status == "reg" && this.gfnIsNull(this.param.hireLohNo)) {
        			this.dsGet.setColumn(0, "rowSttsCd", "I");
        		} else {
        			this.dsGet.setColumn(0, "rowSttsCd", "U");
        		}

        		if (sPopupId == "save_confirm") {
        			var obj = {
        				"atchFileId" : "",			// 기존 첨부파일 있을 경우 입력
        				"bsnsSeCd" : "REN",			// 업무구분코드
        				"prgrmId" : "REN002M01" 	// 프로그램ID (화면 ID)
        			};

        			var str = JSON.stringify(obj);
        			this.RaonkUpload.AddFormData('params', str);
        			this.RaonkUpload.Transfer();

        			this.dsGet.setColumn(0, "prgrsSttsCd", "10");
        		} else if (sPopupId == "sbmsn") { // 제출일 경우
        			this.dsGet.setColumn(0, "prgrsSttsCd", "11"); // 11.제출
        			this.dsGet.setColumn(0, "sbmsnYn", "Y");
        			this.saveTransaction();
        		} else if (sPopupId == "delete_confirm") {
        			this.dsGet.setColumn(0, "rowSttsCd", "D");
        			this.saveTransaction();
        		} else if(sPopupId == "file_del1") { // 임차업무 담당자 개인정보수집 및 이용동의서 삭제
        			this.cfnDsFileDelete(this.dsFile1, oRtn);
        		} else if(sPopupId == "file_del2") { // 첨부파일 삭제
        			this.cfnDsFileDelete(this.dsFile2, oRtn);
        		}
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	if (this.opener) {
        		this.param = {
        			"status" : this.getOwnerFrame().status
        			,"hireLohNo" : this.getOwnerFrame().hireLohNo
        		}
        	} else {
        		this.param = this.getOwnerFrame().form.fvObjArgs;
        	}

        	// 공통코드 함수 호출
        	this.cfnComCdLoad({dsCboPrgrsSttsCd:"HIRE_LOH_STTS_CD", dsCboBzentyClsfCd:"BZENTY_CLSF_CD:B", dsCboPstnCd:"ZONE_SE_CD:B"});
        	this.cfnEtcCdLoad({id:"cfnEtcCd"
        					 , cbf:"fnCallback"
        					 , dsCboBldgCd:"{id:'selectTaskComListCd', cnd:{cdTyId:'RENT_ASN_BLDG'}, opt:'A:cdNm'}"
        					 , dsCboUsgCd:"{id:'selectTaskComListCd', cnd:{cdTyId:'RENT_USE'}, opt:'B:grp2CdNm'}"
        					 , dsCboDtlUsgCd:"{id:'selectTaskComListCd', cnd:{cdTyId:'RENT_USE'}, opt:'B:cdNm'}"
        					 , dsAtflArtclList:"{id:'selectTaskComListCd', cnd:{cdTyId:'ATFL_SE', grp1CdId:'REN002M01'}}"});

        	this.dsSearch.setColumn(0,"grp1CdId", "REN002M01");

        	if (this.param != null && this.param.hireLohNo != null && this.param.hireLohNo != '') {
        		this.dsGet.insertRow();
        		this.dsSearch.setColumn(0, "hireLohNo", this.param.hireLohNo); // 임차희망서번호
        	}

        	this.cfnSearch();

        	if (this.param.status == "reg") { 					  // 등록 화면시 invisible
        		this.divForm.form.Div00.set_visible(false);		  // 담당부서 미표출
        		this.divForm.form.sub_tit05.set_visible(false);   // 검토의견 제목 미표출
        		this.divForm.form.Div05.set_visible(false); 	  // 검토의견 미표출
        		this.divQuick.form.btn04.set_visible(false);  	  // 검토의견 버튼 미표출

        		if (this.objApp.screenid == "Desktop_screen") {
        			this.divBtn.top = "divQuick:0";						  // 검토의견 버튼 미표출시 사이즈조정
        		}

        		this.divBtn.form.btnCnddRcmdtn.set_visible(true); // 제출 표출
         		this.divBtn.form.btnDel.set_visible(false); 	  // 삭제 미표출
         		this.divBtn.form.btnSave.set_visible(true); 	  // 저장 표출
        	}

         	this.validateColumn.push({"title" : "업체명", "com": this.divForm.form.Div01.form.edtHirerNm});
        	this.validateColumn.push({"title" : "업체분류", "com": this.divForm.form.Div01.form.cboBzentyClsfCd});
         	this.validateColumn.push({"title" : "담당자 성명", "com": this.divForm.form.Div01.form.edtPicNm});
         	this.validateColumn.push({"title" : "담당자 직위", "com": this.divForm.form.Div01.form.edtPicJbpsNm});
         	this.validateColumn.push({"title" : "담당자 전화", "com": this.divForm.form.Div01.form.edtPicTelno});
         	this.validateColumn.push({"title" : "담당자 휴대폰", "com": this.divForm.form.Div01.form.edtPicMblTelno});
         	this.validateColumn.push({"title" : "담당자 이메일", "com": this.divForm.form.Div01.form.edtPicEmlAddr});
         	this.validateColumn.push({"title" : "임대사유/목적", "com": this.divForm.form.Div02.form.edtRentRsnPrps});
         	this.validateColumn.push({"title" : "구분", "com": this.divForm.form.Div02.form.cboPstnCd});
        	this.validateColumn.push({"title" : "건물명", "com": this.divForm.form.Div02.form.cboBldgCd});
         	this.validateColumn.push({"title" : "면적", "com": this.divForm.form.Div02.form.edtRentAr});
         	this.validateColumn.push({"title" : "입주희망일자", "com": this.divForm.form.Div02.form.calMvnHpeYmd});
         	this.validateColumn.push({"title" : "용도", "com": this.divForm.form.Div02.form.cboUsgCd});
         	this.validateColumn.push({"title" : "상세용도", "com": this.divForm.form.Div02.form.cboDtlUsgCd});
        };

        // 상세 페이지 옆 버튼 부분 플로팅 스크롤
        this.form_onvscroll = function(obj,e)
        {
        	if (this.objApp.screenid == "Desktop_screen") {
        		this.divQuick.top = e.pos+50;
        		this.divBtn.top = "divQuick:0";
        	}
        };

        // 건물
        this.cboBldgCd = function() {
        	if (this.dsGet.getColumn(0, "bldgCd") == "A1A01"  || this.dsGet.getColumn(0, "bldgCd") == "A2A01") {
        		this.divForm.form.Div02.form.rdoZoneCd.set_visible(true);
        	} else {
        		this.divForm.form.Div02.form.rdoZoneCd.set_visible(false);
        	}
        };

        // 용도
        this.cboUsgCd = function() {
        	this.dsCboUsgCd.filter("");

        	if (this.divForm.form.Div02.form.cboPstnCd.value > 0) {
        		this.dsCboBldgCd.filter("grp2CdId == '" + this.divForm.form.Div02.form.cboPstnCd.value + "'");
        		var sExpr = "rowidx==dataset.findRowExpr(\"grp2CdId=='\"+grp2CdId +\"' && grp1CdId == 'DPT0" + this.divForm.form.Div02.form.cboPstnCd.value + "'\")";
        		this.dsCboUsgCd.filter(sExpr);
        		this.cboDtlUsgCd();
        	}
        };

        // 상세용도
        this.cboDtlUsgCd = function() {
        	this.dsCboDtlUsgCd.filter("");

        	if (this.divForm.form.Div02.form.cboUsgCd.text != "") {
        		this.dsCboDtlUsgCd.filter("grp1CdId == 'DPT0" + this.divForm.form.Div02.form.cboPstnCd.value + "' && grp2CdNm == '" + this.divForm.form.Div02.form.cboUsgCd.text + "'");
        	}
        };

        // 첨부파일 설정
        this.cfnFileSet = function()
        {
        	var vBZENTY_CLSF_CD = "";
        	if (this.dsGet.getColumn(0,"bzentyClsfCd") == "BZENTY_CLSF_CD001") {		// 공항운영그룹
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
        	this.dsFile2.clearData();

        	for (i = 0; i<this.dsAtflList.rowcount; i++) {
        		// 임차업무 담당자 개인정보수집 및 이용동의서
        		if (this.dsAtflList.getColumn(i,"grp2CdId") == "A") {
        			this.dsFile1.addRow();
        			this.dsFile1.copyRow(this.dsFile1.rowposition,this.dsAtflList,i);
        		}

        		// 첨부파일
        		if (this.dsAtflList.getColumn(i,"grp1CdId") == 'REN002M01' &&
        		   (this.dsAtflList.getColumn(i,"grp2CdId") == vBZENTY_CLSF_CD || this.dsAtflList.getColumn(i,"grp2CdId") == 'J')) {
        			this.dsFile2.addRow();
        			this.dsFile2.copyRow(this.dsFile2.rowposition,this.dsAtflList,i);
        		}
        	};

        	// 데이터 조회 후 파일리스트에 셋팅
        	this.gfnDownloadSetting(this.RaonkUpload, this.dsFile1);
        	this.gfnDownloadSetting(this.RaonkUpload, this.dsFile2);
        }

        // 첨부파일 삭제
        this.cfnDsFileDelete = function(oDsFile, oRtn) {
        	// 임차희망서 첨부파일은 공통첨부파일에서 삭제하지 않는다.
        	if (oDsFile.getColumn(this.gRow,"prgrmId2") != "REN002M01") {
        		console.log(oDsFile);
        		console.log(this.dsFile99);
        		this.dsFile99.clearData();
        		this.dsFile99.copyData(oDsFile);

        		this.gfnDeleteFile(this.RaonkUpload, oDsFile, oRtn.paramArg);

        		oDsFile.clearData();
        		oDsFile.copyData(this.dsFile99);
        	}

        	oDsFile.setColumn(this.gRow,"colId","");
        	oDsFile.setColumn(this.gRow,"atflMngNo","");
        	oDsFile.setColumn(this.gRow,"orgnlFileNm","");
        };

        // 첨부파일 필수체크
        this.grdIsValidated = function(objGrid) {
        	for (var i = 0; i < objGrid.rowcount; i++) {
        		for (var j = 0; j < objGrid.getCellCount("head"); j++) {
        			if (objGrid.getCellPropertyValue(-1,j,"cssclass" ) == "CellHead_E") {
        				if (this.gfnIsNull(objGrid.getCellValue(i,j))) {
        					// {0} 을(를) 입력하십시오.
        					if (this.dsFile2.getColumn(i, "cdId") == "D140" && !this.gfnIsNull(this.dsFile2.getColumn(i, "natchRsn"))) {
        						// 미제출사유 입력시 구내영업허가증 필수입력 미체크
        					} else {
        						this.gfnAlertMsg("msg", "MSG_009", [(i+1) + "라인에 " + objGrid.getHeadValue(j) ]);
        						objGrid.setCellPos(j, i);
        						return false;
        					}
        				}
        			}
        		}
        	}

        	return true;
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        // 퀵메뉴
        this.divQuick_onclick = function(obj,e)
        {
        	if (obj.name == "btn00") {
        		this.divForm.form.sub_tit01.setFocus(); // 기본정보
        	} else if (obj.name == "btn01") {
        		this.divForm.form.sub_tit02.setFocus(); // 임차관련정보
        	} else if (obj.name == "btn02") {
        		this.divForm.form.sub_tit03.setFocus();	// 기타 요청사항
        	} else if (obj.name == "btn03") {
        		this.divForm.form.sub_tit04.setFocus();	// 증빙자료
        	} else if (obj.name == "btn04") {
        		this.divForm.form.sub_tit05.setFocus();	// 검토의견
        	}
        };

        // 취소
        this.divBtn_btnCancel_onclick = function(obj,e)
        {
        	if (this.objApp.screenid == "Desktop_screen") {
        		var cMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        		this.gfnCloseMenu(cMenuId);
        		this._gfnOpenMenu(cMenuId.substring(0,14),"",true);
        	} else {
        		this.close();
        	}
        };

        // 제출
        this.divBtn_btnSbmsn_onclick = function(obj,e)
        {
        	if (!this.gfnIsNull(this.dsGet.getColumn(0,"sbmsnDt"))) {
        		this.gfnAlertMsg("msg", "MSG_011", ["제출된 상태입니다."]);
        		return;
         	} else if (this.gfnIsNull(this.dsGet.getColumn(0,"hireLohNo"))) {
        		this.gfnAlertMsg("msg", "MSG_011", ["제출 가능 상태가 아닙니다."]);
         		return;
          	} else if (!this.gfnIsNull(this.dsGet.getColumn(0,"hireLohNo")) && this.gfnIsNull(this.dsGet.getColumn(0,"sbmsnDt"))) {
        		this.gfnConfirmMsg("sbmsn", "CST_001", "msgCallback", ["확인", "취소"], ["Y", "N"], "", ["제출"]);
        	}
        };

        // 삭제
        this.divBtn_btnDel_onclick = function(obj,e)
        {
        	this.gfnConfirmMsg("delete_confirm", "MSG_005", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        };

        // 저장
        this.divBtn_btnSave_onclick = function(obj,e)
        {
        	// 필수입력 여부 체크
        	if (this.gfnDsIsValidated(this.validateColumn)) {
        		// 그리드 필수입력여부 체크(개인정보활용동의서)
        		if (this.gfnIsNull(this.dsFile1.getColumn(0,"orgnlFileNm"))) {
        			// {0} 필수첨부 입니다.
        			this.gfnAlertMsg("msg", "REN_026", ["개인정보활용동의서"]);
        			return;
        		};

        		// 그리드 필수입력여부 체크(첨부파일)
        		if (this.grdIsValidated(this.divForm.form.Div04.form.grdFile2) == false) {
        			return;
        		};

        		if (this.gfnDsIsUpdated(this.dsGet) == true   ||
        			this.gfnDsIsUpdated(this.dsFile1) == true ||
        			this.gfnDsIsUpdated(this.dsFile2) == true) {
        			this.gfnConfirmMsg("save_confirm", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        		} else {
        			this.gfnAlertMsg("msg", "MSG_004");
        			return;
        		}
        	}

        };

        // 업체분류
        this.divForm_Div01_cboBzentyClsfCd_onitemchanged = function(obj,e)
        {
        	this.divForm.form.Div04.form.rdoEvdncDataSeCd.value = "0";
        	this.divForm_Div04_rdoEvdncDataSeCd_onitemchanged();
        };

        // 증빙자료 상태별 첨부파일 미표출 체크 (사업자등록증 필수)
        this.divForm_Div04_rdoEvdncDataSeCd_onitemchanged = function(obj,e)
        {
         	var vBZENTY_CLSF_CD = "";

        	if (this.divForm.form.Div04.form.rdoEvdncDataSeCd.index == "0") {
        		if (this.divForm.form.Div01.form.cboBzentyClsfCd.value == "BZENTY_CLSF_CD001") {		// 공항운영그룹
        			vBZENTY_CLSF_CD = "B";
        		} else if (this.divForm.form.Div01.form.cboBzentyClsfCd.value == "BZENTY_CLSF_CD002") {	// 항공사그룹
        			vBZENTY_CLSF_CD = "C";
        		} else if (this.divForm.form.Div01.form.cboBzentyClsfCd.value == "BZENTY_CLSF_CD003") {	// 조업사 정비업체
        			vBZENTY_CLSF_CD = "D";
        		} else if (this.divForm.form.Div01.form.cboBzentyClsfCd.value == "BZENTY_CLSF_CD004") {	// 여행사
        			vBZENTY_CLSF_CD = "E";
        		} else if (this.divForm.form.Div01.form.cboBzentyClsfCd.value == "BZENTY_CLSF_CD005") {	// 공공그룹
        			vBZENTY_CLSF_CD = "F";
        		} else if (this.divForm.form.Div01.form.cboBzentyClsfCd.value == "BZENTY_CLSF_CD006") {	// 상업그룹
        			vBZENTY_CLSF_CD = "G";
        		} else if (this.divForm.form.Div01.form.cboBzentyClsfCd.value == "BZENTY_CLSF_CD007") {	// 기타
        			vBZENTY_CLSF_CD = "H";
        		}
        	} else {
        		vBZENTY_CLSF_CD = "I";
        	}

        	this.dsFile2.clearData();

        	for (i = 0; i<this.dsAtflList.rowcount; i++) {
        		// 첨부파일
        		if (this.dsAtflList.getColumn(i,"grp1CdId") == 'REN002M01' &&
        		   (this.dsAtflList.getColumn(i,"grp2CdId") == vBZENTY_CLSF_CD)) {
        			this.dsFile2.addRow();
        			this.dsFile2.copyRow(this.dsFile2.rowposition, this.dsAtflList, i);
        		}
        	}

        	if (vBZENTY_CLSF_CD == "D") {
        		this.divForm.form.Div04.form.panFile04_01.set_visible(true);
        	} else {
        		this.divForm.form.Div04.form.panFile04_01.set_visible(false);
        	}

        };

        // 구분
        this.divForm_Div02_cboPstnCd_onitemchanged = function(obj,e)
        {
        	this.cboUsgCd();
        };

        // 건물
        this.divForm_Div02_cboBldgCd_onitemchanged = function(obj,e)
        {
        	this.cboBldgCd();
        };

        // 용도
        this.divForm_Div02_cboUsgCd_onitemchanged = function(obj,e)
        {
        	this.cboDtlUsgCd();
        };

        // 개인정보활용동의서 파일그리드
        this.divForm_Div01_grdFile1_oncellclick = function(obj,e)
        {
        	// 데이터의 첨부파일 관리번호 입력 컬럼명
        	if (e.col == 0) {
        		// 파일명을 더블클릭 시 다운로드
        		this.gfnDownloadFile(this.RaonkUpload, this.dsFile1, e);

        	} else if (e.col == 1) {
        		this.gAtflSe = "dsFile1";
        		this.gRow = this.dsFile1.rowposition;
        		this.gAtflCnt = 0;

        		// 파일추가 또는 삭제여부
        		if (this.gfnIsNull(this.dsFile1.getColumn(this.gRow,"orgnlFileNm"))) {
        			this.gvUploadCategory = this.dsFile1.getColumn(this.dsFile1.rowposition,"cdId");		// 컬럼ID
        			this.RaonkUpload.OpenFileDialog();
        		} else {
        			var param = {
        				"row" : e.row,
        				"col" : e.col
        			};

        			// {0} 첨부파일 삭제하시겠습니까?
        			var sCdNm = this.dsFile1.getColumn(this.dsFile1.rowposition,"cDNm")
        			this.gfnConfirmMsg("file_del1", "REN_021", "msgCallback", ["확인", "취소"], ["Y", "N"], param,[ "" ]);
        		}
        	}

        };

        // 첨부파일 그리드
        this.divForm_Div04_grdFile2_oncellclick = function(obj,e)
        {
        	// 데이터의 첨부파일 관리번호 입력 컬럼명
        	if (e.col == 1) {
        		// 파일명을 더블클릭 시 다운로드
        		this.gfnDownloadFile(this.RaonkUpload, this.dsFile3, e);

        	} else if (e.col == 2) {
        		this.gAtflSe = "dsFile2";
        		this.gRow = this.dsFile2.rowposition;
        		this.gAtflCnt = 0;

        		// 파일추가 또는 삭제여부
        		if (this.gfnIsNull(this.dsFile2.getColumn(this.gRow,"orgnlFileNm"))) {
        			this.gvUploadCategory = this.dsFile2.getColumn(this.dsFile2.rowposition,"cdId"); //컬럼ID
        			this.RaonkUpload.OpenFileDialog();
        		} else {
        			var param = {
        				"row" : e.row,
        				"col" : e.col
        			};

        			// {0} 첨부파일 삭제하시겠습니까?
        			var sCdNm = this.dsFile2.getColumn(this.dsFile2.rowposition,"cdNm");
        			this.gfnConfirmMsg("file_del2", "REN_021", "msgCallback", ["확인", "취소"], ["Y", "N"], param,[ sCdNm ]);
        		}
        	}
        };

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
        	this.gAtflCnt++;
        	if (this.gAtflCnt > 1) {
        		// 파일 1개만 업로드 가능 합니다."
        		this.gfnAlertMsg("msg", "REN_022");
        		return false;
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
        	}

        	this.RaonkUpload.SetFileCustomValue(-1, JSON.stringify(cvObj));

        	// 파일 카테고리별 구분으로 파일 리스트에 추가
        	// 임차업무 담당자 개인정보수집 및 이용동의서
        	if(this.gAtflSe == "dsFile1") {
        		var nIdx = this.dsFile1.rowposition;
        		this.dsFile1.setColumn(nIdx, "fullName", paramObj.userdata.strName + ' (' + paramObj.userdata.nSize + ')');
        		this.dsFile1.setColumn(nIdx, "orgnlFileNm", paramObj.userdata.strName);
        		this.dsFile1.setColumn(nIdx, "fileSz", paramObj.userdata.nSize);
        		this.dsFile1.setColumn(nIdx, "atflMngSno", paramObj.userdata.nIndex);
        		this.dsFile1.setColumn(nIdx, "colId", this.dsFile1.getColumn(nIdx,"cdId"));

        	// 첨부파일
        	} else if(this.gAtflSe == "dsFile2") {
        		var nIdx = this.dsFile2.rowposition;
        		this.dsFile2.setColumn(nIdx, "fullName", paramObj.userdata.strName + ' (' + paramObj.userdata.nSize + ')');
        		this.dsFile2.setColumn(nIdx, "orgnlFileNm", paramObj.userdata.strName);
        		this.dsFile2.setColumn(nIdx, "fileSz", paramObj.userdata.nSize);
        		this.dsFile2.setColumn(nIdx, "atflMngSno", paramObj.userdata.nIndex);
        		this.dsFile2.setColumn(nIdx, "colId", this.gvUploadCategory);
        	}
        };

        // 파일 업로드 완료 이벤트
        this.RaonkUpload_RAONKUPLOAD_UploadComplete = function(obj, paramObj)
        {
        	var allListArray = this.RaonkUpload.GetListInfo("json");
        	// 파일 업로드 후 첨부파일관리번호를 얻기 위한 함수
        	this.gfnUploadComplete("uploadComplete", allListArray, "dsAtchRslt", "fnCallback");
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onvscroll",this.form_onvscroll,this);
            this.divForm.form.Div01.form.cboBzentyClsfCd.addEventHandler("onitemchanged",this.divForm_Div01_cboBzentyClsfCd_onitemchanged,this);
            this.divForm.form.Div01.form.staLabel01_01_00.addEventHandler("onclick",this.divForm_staLabel05_00_onclick,this);
            this.divForm.form.Div01.form.staLabel01_01_01.addEventHandler("onclick",this.divForm_staLabel05_01_onclick,this);
            this.divForm.form.Div01.form.edtPicJbpsNm.addEventHandler("onchanged",this.edt00_00_00_00_00_onchanged,this);
            this.divForm.form.Div01.form.staLabel01_02_00.addEventHandler("onclick",this.divForm_staLabel05_00_onclick,this);
            this.divForm.form.Div01.form.staLabel01_02_01.addEventHandler("onclick",this.divForm_staLabel05_01_onclick,this);
            this.divForm.form.Div01.form.grdFile1.addEventHandler("oncellclick",this.divForm_Div01_grdFile1_oncellclick,this);
            this.divForm.form.Div02.form.edtRentRsnPrps.addEventHandler("onchanged",this.edt00_02_onchanged,this);
            this.divForm.form.Div02.form.staLabel02_01_00.addEventHandler("onclick",this.divForm_staLabel05_00_onclick,this);
            this.divForm.form.Div02.form.cboPstnCd.addEventHandler("onitemchanged",this.divForm_Div02_cboPstnCd_onitemchanged,this);
            this.divForm.form.Div02.form.staLabel03_01_01.addEventHandler("onclick",this.divForm_staLabel05_01_onclick,this);
            this.divForm.form.Div02.form.cboBldgCd.addEventHandler("onitemchanged",this.divForm_Div02_cboBldgCd_onitemchanged,this);
            this.divForm.form.Div02.form.rdoZoneCd.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
            this.divForm.form.Div02.form.staLabel02_02_00.addEventHandler("onclick",this.divForm_staLabel05_00_onclick,this);
            this.divForm.form.Div02.form.staLabel02_02_01.addEventHandler("onclick",this.divForm_staLabel05_01_onclick,this);
            this.divForm.form.Div02.form.cboUsgCd.addEventHandler("onitemchanged",this.divForm_Div02_cboUsgCd_onitemchanged,this);
            this.divForm.form.Div04.form.rdoEvdncDataSeCd.addEventHandler("onitemchanged",this.divForm_Div04_rdoEvdncDataSeCd_onitemchanged,this);
            this.divForm.form.Div04.form.grdFile2.addEventHandler("oncellclick",this.divForm_Div04_grdFile2_oncellclick,this);
            this.divForm.form.Div04.form.staLabel04_01.addEventHandler("onclick",this.divForm_div04_staLabel03_00_00_01_00_onclick,this);
            this.PopupDiv00.form.Static00.addEventHandler("onclick",this.PopupDiv00_Static00_onclick,this);
            this.PopupDiv00.form.Static00_00.addEventHandler("onclick",this.PopupDiv00_Static00_onclick,this);
            this.PopupDiv00.form.Static00_00_00.addEventHandler("onclick",this.PopupDiv00_Static00_onclick,this);
            this.PopupDiv00.form.Static00_00_00_00.addEventHandler("onclick",this.PopupDiv00_Static00_onclick,this);
            this.divQuick.form.btn00.addEventHandler("onclick",this.divQuick_onclick,this);
            this.divQuick.form.btn01.addEventHandler("onclick",this.divQuick_onclick,this);
            this.divQuick.form.btn02.addEventHandler("onclick",this.divQuick_onclick,this);
            this.divQuick.form.btn03.addEventHandler("onclick",this.divQuick_onclick,this);
            this.divQuick.form.btn04.addEventHandler("onclick",this.divQuick_onclick,this);
            this.divBtn.form.btnCancel.addEventHandler("onclick",this.divBtn_btnCancel_onclick,this);
            this.divBtn.form.btnCnddRcmdtn.addEventHandler("onclick",this.divBtn_btnSbmsn_onclick,this);
            this.divBtn.form.btnDel.addEventHandler("onclick",this.divBtn_btnDel_onclick,this);
            this.divBtn.form.btnSave.addEventHandler("onclick",this.divBtn_btnSave_onclick,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterAddFile",this.RaonkUpload_RAONKUPLOAD_AfterAddFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_CreationComplete",this.RaonkUpload_RAONKUPLOAD_CreationComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_UploadComplete",this.RaonkUpload_RAONKUPLOAD_UploadComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_OnError",this.RaonkUpload_RAONKUPLOAD_OnError,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_BeforeAddFile",this.RaonkUpload_RAONKUPLOAD_BeforeAddFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterAddAllFile",this.RaonkUpload_RAONKUPLOAD_AfterAddAllFile,this);
            this.dsAtflSave.addEventHandler("onload",this.dsAtfl_onload,this);
        };
        this.loadIncludeScript("REN002M01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
